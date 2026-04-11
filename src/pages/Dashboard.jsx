// import React, { useState, useEffect } from "react";
// import axiosInstance from "../services/axiosInstance";


// // ─── Avatar ───────────────────────────────────────────────────────────────────
// function Avatar({ name = "", color }) {
//   const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
//   return (
//     <div style={{
//       width: 32, height: 32, borderRadius: "50%", background: color || "#e5e7eb",
//       display: "flex", alignItems: "center", justifyContent: "center",
//       fontSize: 12, fontWeight: 700, color: "#fff", flexShrink: 0,
//     }}>{initials}</div>
//   );
// }

// // ─── Status Pill ──────────────────────────────────────────────────────────────
// function StatusPill({ status }) {
//   const map = {
//     Pending:      { bg: "#fff7ed", color: "#c2410c" },
//     Resolved:     { bg: "#f0fdf4", color: "#15803d" },
//     "In Progress":{ bg: "#eff6ff", color: "#1d4ed8" },
//     Rejected:     { bg: "#fef2f2", color: "#991b1b" },
//   };
//   const s = map[status] || { bg: "#f3f4f6", color: "#374151" };
//   return (
//     <span style={{ background: s.bg, color: s.color, padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600, display: "inline-block", whiteSpace: "nowrap" }}>
//       {status}
//     </span>
//   );
// }

// // ─── Bar Chart SVG ────────────────────────────────────────────────────────────
// function BarChart({ data }) {
//   if (!data || data.length === 0) return null;
//   const maxVal = Math.max(...data.map((d) => d.filed), 1);
//   const W = 520, H = 160, padL = 8, padB = 20, padT = 16;
//   const barGroupW = (W - padL) / data.length;
//   const barW = Math.floor(barGroupW * 0.3);
//   return (
//     <svg width="100%" viewBox={`0 0 ${W} ${H + padB}`} style={{ overflow: "visible" }}>
//       {data.map((d, i) => {
//         const x = padL + i * barGroupW + barGroupW * 0.1;
//         const filedH = Math.round((d.filed / maxVal) * H);
//         const resolvedH = Math.round((d.resolved / maxVal) * H);
//         const prev = data[Math.max(0, i - 1)];
//         const pct = i > 0 && prev.filed > 0 ? Math.round(((d.filed - prev.filed) / prev.filed) * 100) : 0;
//         return (
//           <g key={i}>
//             {i > 0 && pct !== 0 && (
//               <text x={x + barW} y={H - filedH + padT - 4} textAnchor="middle" fontSize="8.5" fill="#6b7280" fontFamily="Inter,sans-serif">
//                 {pct > 0 ? `+${pct}%` : `${pct}%`}
//               </text>
//             )}
//             <rect x={x} y={H - filedH + padT} width={barW} height={filedH} rx={4} fill="#f97316" />
//             <rect x={x + barW + 3} y={H - resolvedH + padT} width={barW} height={resolvedH} rx={4} fill="#fb923c" opacity={0.45} />
//             <text x={x + barW} y={H + padT + 14} textAnchor="middle" fontSize="9" fill="#9ca3af" fontFamily="Inter,sans-serif">
//               {d.month}
//             </text>
//           </g>
//         );
//       })}
//     </svg>
//   );
// }

// // ─── Dot Grid ─────────────────────────────────────────────────────────────────
// function DotGrid({ filed, resolved }) {
//   const rows = 5, cols = 12, total = rows * cols;
//   const resolvedCount = Math.round((resolved / Math.max(filed, 1)) * total);
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: 3, width: 180 }}>
//       {Array.from({ length: total }).map((_, i) => (
//         <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: i < resolvedCount ? "#f97316" : "#fee2e5" }} />
//       ))}
//     </div>
//   );
// }

// // ─── Main Dashboard ───────────────────────────────────────────────────────────
// export default function Dashboard() {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => { fetchApplications(); }, []);

//   // ── AllApplication प्रमाणे authUser params सह fetch ──────────────────────
//   const fetchApplications = async () => {
//     try {
//       setLoading(true);

//       const authUserRaw = localStorage.getItem("authUser");
//       const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;

//       const res = await axiosInstance.get("/getAllApplications", {
//         params: {
//           role:                   authUser?.role,
//           userId:                 authUser?.id,
//           userOffice:             authUser?.office,
//           userDepartmentCategory: authUser?.departmentCategory,
//         },
//       });

//       if (res.data.success) setApplications(res.data.data || []);
//     } catch (err) {
//       console.error("Dashboard fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ── Derived real stats ──────────────────────────────────────────────────────
//   const totalFiled    = applications.length;
//   const totalResolved = applications.filter((a) => a.status === "Resolved").length;
//   const totalPending  = applications.filter((a) => a.status === "Pending").length;
//   const totalProgress = applications.filter((a) => a.status === "In Progress").length;
//   const totalRejected = applications.filter((a) => a.status === "Rejected").length;
//   const resolvedPct   = totalFiled > 0 ? Math.round((totalResolved / totalFiled) * 100) : 0;
//   const pendingPct    = totalFiled > 0 ? Math.round((totalPending  / totalFiled) * 100) : 0;
//   const avgResolvedMo = Math.round(totalResolved / 12) || 0;

//   // ── Monthly bar chart from real data ────────────────────────────────────────
//   const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
//   const monthlyData = MONTHS.map((month, mi) => {
//     const monthApps = applications.filter((a) => new Date(a.submissionDate).getMonth() === mi);
//     return {
//       month,
//       filed:    monthApps.length,
//       resolved: monthApps.filter((a) => a.status === "Resolved").length,
//     };
//   });

//   // ── Priority counts ─────────────────────────────────────────────────────────
//   const priorityStats = [
//     { label: "Normal",    count: applications.filter((a) => a.priority === "Normal").length,    color: "#10b981" },
//     { label: "Urgent",    count: applications.filter((a) => a.priority === "Urgent").length,    color: "#f59e0b" },
//     { label: "High",      count: applications.filter((a) => a.priority === "High").length,      color: "#ef4444" },
//     { label: "Emergency", count: applications.filter((a) => a.priority === "Emergency").length, color: "#b91c1c" },
//   ].filter((p) => p.count > 0);

//   // ── Office stats ────────────────────────────────────────────────────────────
//   const officeMap = {};
//   applications.forEach((a) => {
//     const key = a.office || "Unknown";
//     if (!officeMap[key]) officeMap[key] = { filed: 0, resolved: 0 };
//     officeMap[key].filed++;
//     if (a.status === "Resolved") officeMap[key].resolved++;
//   });
//   const officeStats = Object.entries(officeMap)
//     .map(([office, v]) => ({ office, ...v }))
//     .sort((a, b) => b.filed - a.filed)
//     .slice(0, 3);

//   // ── Category (source) stats ─────────────────────────────────────────────────
//   const categoryMap = {};
//   applications.forEach((a) => { const key = a.category || "Other"; categoryMap[key] = (categoryMap[key] || 0) + 1; });
//   const categoryColors = ["#f97316","#10b981","#6366f1","#f59e0b","#ec4899"];
//   const categoryStats = Object.entries(categoryMap).map(([name, count], i) => ({
//     name, pct: Math.round((count / Math.max(totalFiled, 1)) * 100),
//     color: categoryColors[i % categoryColors.length],
//   }));

//   // ── Recent 4 applications ───────────────────────────────────────────────────
//   const recentApps = [...applications]
//     .sort((a, b) => new Date(b.submissionDate) - new Date(a.submissionDate))
//     .slice(0, 4);

//   // ── Unique offices & depts ──────────────────────────────────────────────────
//   const uniqueOffices = [...new Set(applications.map((a) => a.office).filter(Boolean))];
//   const uniqueDepts   = [...new Set(applications.map((a) => a.mainDepartment).filter(Boolean))];

//   // ── Today date strip ────────────────────────────────────────────────────────
//   const todayDate = new Date().getDate();
//   const dateStrip = Array.from({ length: 7 }, (_, i) => todayDate - 3 + i);

//   if (loading) {
//     return (
//       <div style={{ display:"flex", alignItems:"center", justifyContent:"center", minHeight:"60vh", fontFamily:"'Inter','Segoe UI',sans-serif" }}>
//         <div style={{ textAlign:"center" }}>
//           <div style={{ width:40, height:40, border:"4px solid #e5e7eb", borderTopColor:"#f97316", borderRadius:"50%", animation:"spin .8s linear infinite", margin:"0 auto 12px" }} />
//           <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
//           <div style={{ color:"#9ca3af", fontSize:14 }}>Loading dashboard…</div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={{ fontFamily:"'Inter','Segoe UI',sans-serif", background:"#f9fafb", minHeight:"100vh", color:"#111827" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
//         *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
//         button { cursor:pointer; font-family:inherit; }

//         .card { background:#fff; border-radius:16px; padding:20px 24px; box-shadow:0 1px 3px rgba(0,0,0,0.06); }
//         .badge-green  { display:inline-flex;align-items:center;background:#dcfce7;color:#166534;padding:2px 8px;border-radius:20px;font-size:12px;font-weight:600;margin-top:6px; }
//         .badge-yellow { display:inline-flex;align-items:center;background:#fef9c3;color:#92400e;padding:2px 8px;border-radius:20px;font-size:12px;font-weight:600;margin-top:6px; }
//         .badge-red    { display:inline-flex;align-items:center;background:#fee2e2;color:#991b1b;padding:2px 8px;border-radius:20px;font-size:12px;font-weight:600;margin-top:6px; }
//         .badge-blue   { display:inline-flex;align-items:center;background:#dbeafe;color:#1e40af;padding:2px 8px;border-radius:20px;font-size:12px;font-weight:600;margin-top:6px; }

//         .dash-body  { padding:28px 32px; }
//         .dash-r1    { display:grid; grid-template-columns:2fr 1fr;           gap:16px; margin-bottom:16px; }
//         .dash-r2    { display:grid; grid-template-columns:1.6fr .8fr .8fr .8fr; gap:16px; margin-bottom:16px; }
//         .dash-r3    { display:grid; grid-template-columns:1.4fr .7fr .9fr .9fr; gap:16px; }
//         .dash-hdr   { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:24px; flex-wrap:wrap; gap:12px; }
//         .hdr-btns   { display:flex; flex-wrap:wrap; gap:8px; }

//         @media(max-width:1200px){
//           .dash-r2 { grid-template-columns:1fr 1fr; }
//           .dash-r3 { grid-template-columns:1fr 1fr; }
//         }
//         @media(max-width:900px){
//           .dash-r1 { grid-template-columns:1fr; }
//           .dash-r2 { grid-template-columns:1fr 1fr; }
//           .dash-r3 { grid-template-columns:1fr 1fr; }
//         }
//         @media(max-width:600px){
//           .dash-body { padding:16px; }
//           .dash-r2   { grid-template-columns:1fr; }
//           .dash-r3   { grid-template-columns:1fr; }
//           .hdr-btns  { display:grid; grid-template-columns:1fr 1fr; }
//         }
//       `}</style>

//       <div className="dash-body">

//         {/* ── Header ── */}
//         <div className="dash-hdr">
//           <div>
//             <div style={{ fontSize:26, fontWeight:800, letterSpacing:-0.5, textTransform:"uppercase" }}>Dashboard</div>
//             <div style={{ fontSize:13, color:"#9ca3af", marginTop:4 }}>Janata Darbar — Live Overview</div>
//           </div>
//           <div className="hdr-btns">
//             {[
//               { icon:"📋", label:`Total: ${totalFiled}`,        bg:"#fff7ed", color:"#c2410c" },
//               { icon:"✅", label:`Resolved: ${totalResolved}`,   bg:"#f0fdf4", color:"#15803d" },
//               { icon:"⏳", label:`Pending: ${totalPending}`,     bg:"#fefce8", color:"#854d0e" },
//               { icon:"🔄", label:`In Progress: ${totalProgress}`,bg:"#eff6ff", color:"#1d4ed8" },
//             ].map((b) => (
//               <button key={b.label} style={{ display:"flex", alignItems:"center", gap:6, padding:"8px 14px", borderRadius:8, border:`1px solid ${b.bg}`, background:b.bg, fontSize:13, fontWeight:600, color:b.color }}>
//                 {b.icon} {b.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* ── ROW 1 ── */}
//         <div className="dash-r1">

//           {/* Bar Chart */}
//           <div className="card">
//             <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:4, flexWrap:"wrap", gap:8 }}>
//               <div>
//                 <div style={{ fontSize:13, color:"#9ca3af", fontWeight:500 }}>Overall Complaints</div>
//                 <div style={{ fontSize:30, fontWeight:800, letterSpacing:-1, marginTop:2 }}>{totalFiled.toLocaleString()}</div>
//               </div>
//               <div style={{ display:"flex", gap:12, fontSize:12, color:"#9ca3af" }}>
//                 <span style={{ display:"flex", alignItems:"center", gap:4 }}>
//                   <span style={{ width:10, height:10, borderRadius:2, background:"#f97316", display:"inline-block" }}/> Filed
//                 </span>
//                 <span style={{ display:"flex", alignItems:"center", gap:4 }}>
//                   <span style={{ width:10, height:10, borderRadius:2, background:"#fb923c", opacity:.6, display:"inline-block" }}/> Resolved
//                 </span>
//               </div>
//             </div>
//             <BarChart data={monthlyData} />
//           </div>

//           {/* Resolution Rate + Category Bars */}
//           <div className="card">
//             <div style={{ fontSize:13, color:"#9ca3af", fontWeight:500, marginBottom:4 }}>Resolution Rate</div>
//             <div style={{ fontSize:30, fontWeight:800, letterSpacing:-1 }}>{resolvedPct}%</div>
//             <div className="badge-green" style={{ marginBottom:16 }}>{totalResolved} resolved of {totalFiled}</div>

//             {categoryStats.length > 0 ? categoryStats.map((c, i) => (
//               <div key={i} style={{ marginBottom:10 }}>
//                 <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, color:"#9ca3af", marginBottom:3 }}>
//                   <span>{c.name}</span><span>{c.pct}%</span>
//                 </div>
//                 <div style={{ height:8, background:"#f3f4f6", borderRadius:6, overflow:"hidden" }}>
//                   <div style={{ height:"100%", width:`${c.pct}%`, background:c.color, borderRadius:6 }}/>
//                 </div>
//               </div>
//             )) : (
//               <div style={{ fontSize:13, color:"#9ca3af", textAlign:"center", padding:"16px 0" }}>No category data</div>
//             )}
//           </div>
//         </div>

//         {/* ── ROW 2 ── */}
//         <div className="dash-r2">

//           {/* Office Metrics */}
//           <div className="card">
//             <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16, flexWrap:"wrap", gap:8 }}>
//               <div style={{ fontSize:15, fontWeight:700 }}>Office Metrics</div>
//               <div style={{ fontSize:12, color:"#9ca3af" }}>Top by volume</div>
//             </div>
//             {officeStats.length > 0 ? officeStats.map((o, i) => (
//               <div key={i} style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 12px", background:"#f9fafb", borderRadius:10, marginBottom:8 }}>
//                 <Avatar name={o.office} color={["#f97316","#6366f1","#10b981"][i]} />
//                 <div style={{ flex:1, minWidth:0 }}>
//                   <div style={{ fontSize:13, fontWeight:600, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{o.office}</div>
//                   <div style={{ fontSize:11, color:"#9ca3af" }}>{o.filed} applications</div>
//                 </div>
//                 <div style={{ textAlign:"right", minWidth:70 }}>
//                   <div style={{ fontSize:13, fontWeight:700 }}>{o.filed}</div>
//                   <div style={{ height:4, background:"#f3f4f6", borderRadius:4, overflow:"hidden", marginTop:4 }}>
//                     <div style={{ height:"100%", width:`${Math.round((o.resolved/Math.max(o.filed,1))*100)}%`, background:"#f97316", borderRadius:4 }}/>
//                   </div>
//                   <div style={{ fontSize:10, color:"#9ca3af", marginTop:2 }}>{Math.round((o.resolved/Math.max(o.filed,1))*100)}% resolved</div>
//                 </div>
//               </div>
//             )) : (
//               <div style={{ fontSize:13, color:"#9ca3af", textAlign:"center", padding:"20px 0" }}>No office data yet</div>
//             )}
//           </div>

//           {/* Pending Rate */}
//           <div className="card">
//             <div style={{ fontSize:13, color:"#9ca3af", fontWeight:500, marginBottom:6 }}>Pending Rate</div>
//             <div style={{ fontSize:30, fontWeight:800, letterSpacing:-1 }}>{pendingPct}%</div>
//             <div className="badge-yellow">{totalPending} pending</div>
//             <div style={{ fontSize:12, color:"#9ca3af", marginTop:8 }}>of {totalFiled} total</div>
//             <div style={{ marginTop:16, display:"flex", justifyContent:"center" }}>
//               <div style={{ width:52, height:52, borderRadius:"50%", border:"4px solid #f97316", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>👤</div>
//             </div>
//             <div style={{ marginTop:12, fontSize:12, color:"#9ca3af", textAlign:"center" }}>
//               Rejected: <strong style={{ color:"#ef4444" }}>{totalRejected}</strong>
//             </div>
//           </div>

//           {/* Avg Resolved */}
//           <div className="card">
//             <div style={{ fontSize:13, color:"#9ca3af", fontWeight:500, marginBottom:6 }}>Avg Resolved/Mo</div>
//             <div style={{ fontSize:30, fontWeight:800, letterSpacing:-1 }}>{avgResolvedMo}</div>
//             <div className="badge-green">{resolvedPct}% rate</div>
//             <div style={{ fontSize:12, color:"#9ca3af", marginTop:8 }}>out of {totalFiled} total</div>
//             <div style={{ marginTop:16, display:"flex", justifyContent:"center" }}>
//               <div style={{ width:52, height:52, borderRadius:"50%", border:"4px solid #10b981", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>📊</div>
//             </div>
//           </div>

//           {/* Active Offices */}
//           <div className="card">
//             <div style={{ fontSize:14, fontWeight:600, marginBottom:14 }}>Active Offices</div>
//             <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:12 }}>
//               {uniqueOffices.slice(0,6).map((o,i) => (
//                 <Avatar key={i} name={o} color={["#f97316","#6366f1","#10b981","#f59e0b","#ec4899","#06b6d4"][i]}/>
//               ))}
//               {uniqueOffices.length > 6 && (
//                 <div style={{ width:32, height:32, borderRadius:"50%", background:"#f3f4f6", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, color:"#9ca3af", fontWeight:700 }}>
//                   +{uniqueOffices.length - 6}
//                 </div>
//               )}
//             </div>
//             <div style={{ fontSize:12, color:"#9ca3af" }}>{uniqueOffices.length} office{uniqueOffices.length !== 1 ? "s" : ""} active</div>
//             <div style={{ fontSize:12, color:"#9ca3af", marginTop:4 }}>{uniqueDepts.length} department{uniqueDepts.length !== 1 ? "s" : ""} total</div>
//           </div>
//         </div>

//         {/* ── ROW 3 ── */}
//         <div className="dash-r3">

//           {/* Dot Grid */}
//           <div className="card">
//             <div style={{ fontSize:14, fontWeight:700, marginBottom:8 }}>Total Complaints</div>
//             <div style={{ display:"flex", alignItems:"baseline", gap:8, marginBottom:4 }}>
//               <div style={{ fontSize:30, fontWeight:800, letterSpacing:-1 }}>{totalFiled}</div>
//               <div className="badge-green">All time</div>
//             </div>
//             <div style={{ fontSize:12, color:"#9ca3af", marginBottom:14 }}>
//               {totalResolved} resolved · {totalPending} pending · {totalProgress} in progress
//             </div>
//             <DotGrid filed={Math.max(totalFiled,1)} resolved={totalResolved}/>
//             <div style={{ fontSize:12, color:"#6b7280", marginTop:10 }}>
//               <strong>{resolvedPct}%</strong> of all complaints resolved.
//             </div>
//           </div>

//           {/* Dark resolution card */}
//           <div style={{ background:"#111827", borderRadius:16, padding:"20px 24px", boxShadow:"0 1px 3px rgba(0,0,0,0.06)", color:"#fff" }}>
//             <div style={{ fontSize:13, color:"#9ca3af", fontWeight:500, marginBottom:12 }}>Resolution rate</div>
//             <div style={{ fontSize:44, fontWeight:800, letterSpacing:-2, lineHeight:1 }}>
//               {resolvedPct}<span style={{ fontSize:22 }}>%</span>
//             </div>
//             <div style={{ fontSize:13, color:"#9ca3af", marginTop:8 }}>{totalResolved} of {totalFiled} resolved</div>
//             <div style={{ marginTop:16 }}>
//               <div style={{ height:6, background:"rgba(255,255,255,0.1)", borderRadius:4, overflow:"hidden" }}>
//                 <div style={{ height:"100%", width:`${resolvedPct}%`, background:"#f97316", borderRadius:4 }}/>
//               </div>
//             </div>
//             <div style={{ marginTop:12, display:"flex", justifyContent:"space-between", fontSize:12, color:"#9ca3af" }}>
//               <span>Rejected: {totalRejected}</span>
//               <span>Progress: {totalProgress}</span>
//             </div>
//           </div>

//           {/* Recent Applications */}
//           <div className="card">
//             <div style={{ fontSize:14, fontWeight:700, marginBottom:4 }}>Recent</div>
//             <div style={{ fontSize:12, color:"#9ca3af", marginBottom:12 }}>Latest {recentApps.length} applications</div>
//             <div style={{ display:"flex", gap:4, marginBottom:14 }}>
//               {dateStrip.map((d, i) => (
//                 <div key={i} style={{ flex:1, textAlign:"center", padding:"4px 0", borderRadius:8, background:d===todayDate?"#f97316":"#f9fafb", color:d===todayDate?"#fff":"#374151", fontSize:11, fontWeight:d===todayDate?700:400 }}>
//                   {d}
//                 </div>
//               ))}
//             </div>
//             <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
//               {recentApps.map((a,i) => (
//                 <div key={i} style={{ display:"flex", alignItems:"center", gap:8, fontSize:12 }}>
//                   <div style={{ width:6, height:6, borderRadius:"50%", flexShrink:0, background: a.status==="Resolved"?"#10b981":a.status==="Pending"?"#f59e0b":a.status==="In Progress"?"#6366f1":"#ef4444" }}/>
//                   <span style={{ flex:1, color:"#374151", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{a.fullName}</span>
//                   <StatusPill status={a.status}/>
//                 </div>
//               ))}
//               {recentApps.length === 0 && <div style={{ fontSize:13, color:"#9ca3af", textAlign:"center", padding:"8px 0" }}>No applications yet</div>}
//             </div>
//           </div>

//           {/* Priority Summary */}
//           <div className="card">
//             <div style={{ fontSize:14, fontWeight:700, marginBottom:12 }}>Priority Breakdown</div>
//             <div style={{ display:"flex", gap:10, marginBottom:14 }}>
//               <div style={{ flex:1, background:"#f9fafb", borderRadius:10, padding:"8px 10px" }}>
//                 <div style={{ fontSize:11, color:"#9ca3af", marginBottom:2 }}>Offices</div>
//                 <div style={{ fontSize:18, fontWeight:700 }}>{uniqueOffices.length}</div>
//               </div>
//               <div style={{ flex:1, background:"#f9fafb", borderRadius:10, padding:"8px 10px" }}>
//                 <div style={{ fontSize:11, color:"#9ca3af", marginBottom:2 }}>Depts</div>
//                 <div style={{ fontSize:18, fontWeight:700 }}>{uniqueDepts.length}</div>
//               </div>
//             </div>
//             {priorityStats.length > 0 ? priorityStats.map((p, i) => (
//               <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10 }}>
//                 <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:13 }}>
//                   <div style={{ width:8, height:8, borderRadius:"50%", background:p.color }}/>
//                   {p.label}
//                 </div>
//                 <div style={{ display:"flex", alignItems:"center", gap:8 }}>
//                   <div style={{ width:60, height:4, background:"#f3f4f6", borderRadius:4, overflow:"hidden" }}>
//                     <div style={{ height:"100%", width:`${Math.round((p.count/Math.max(totalFiled,1))*100)}%`, background:p.color, borderRadius:4 }}/>
//                   </div>
//                   <div style={{ fontSize:13, fontWeight:600, minWidth:24, textAlign:"right" }}>{p.count}</div>
//                 </div>
//               </div>
//             )) : (
//               <div style={{ fontSize:13, color:"#9ca3af", textAlign:"center", padding:"12px 0" }}>No data yet</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// =============================================

// import React, { useState, useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../services/axiosInstance";
// import mapImage from "../assets/mapvvcmc.jfif";

// // mapvvcmc.jfif

// // ── Talukas for map overlay ──────────────────────────────────────────────────
// const TALUKAS = ["Vasai","Virar","Nalasopara","Palghar","Dahanu","Talasari","Jawhar","Mokhada","Vikramgad","Wada","Boisar","Umbergaon"];

// // ── Mini Bar Chart ────────────────────────────────────────────────────────────
// function MiniBar({ data = [], color = "#16a34a" }) {
//   const max = Math.max(...data, 1);
//   return (
//     <div style={{ display:"flex", alignItems:"flex-end", gap:3, height:40 }}>
//       {data.map((v, i) => (
//         <div key={i} style={{ flex:1, background: i === data.length-1 ? color : color+"55",
//           height:`${(v/max)*100}%`, borderRadius:"3px 3px 0 0", minHeight:3 }}/>
//       ))}
//     </div>
//   );
// }

// // ── Donut Chart ───────────────────────────────────────────────────────────────
// function DonutChart({ value = 68, color = "#16a34a" }) {
//   const r = 38, c = 2*Math.PI*r;
//   const dash = (value/100)*c;
//   return (
//     <svg width={96} height={96} viewBox="0 0 96 96">
//       <circle cx={48} cy={48} r={r} fill="none" stroke="#e5e7eb" strokeWidth={10}/>
//       <circle cx={48} cy={48} r={r} fill="none" stroke={color} strokeWidth={10}
//         strokeDasharray={`${dash} ${c-dash}`} strokeLinecap="round"
//         transform="rotate(-90 48 48)" style={{ transition:"stroke-dasharray .8s ease" }}/>
//       <text x={48} y={52} textAnchor="middle" fontSize={16} fontWeight={700} fill="#1a3a1a">{value}%</text>
//     </svg>
//   );
// }

// // ── VVCMC Taluka Map SVG (schematic) ─────────────────────────────────────────
// function VvcmcMap({ talukaData = {} }) {
//   // Approximate relative positions for talukas within Palghar district
//   const nodes = [
//     { name:"Dahanu",    x:18, y:10 },
//     { name:"Talasari",  x:8,  y:20 },
//     { name:"Jawhar",    x:38, y:22 },
//     { name:"Mokhada",   x:58, y:28 },
//     { name:"Vikramgad", x:48, y:40 },
//     { name:"Palghar",   x:22, y:38 },
//     { name:"Wada",      x:68, y:48 },
//     { name:"Boisar",    x:10, y:52 },
//     { name:"Vasai",     x:24, y:64 },
//     { name:"Virar",     x:38, y:72 },
//     { name:"Nalasopara",x:18, y:78 },
//     { name:"Umbergaon", x:6,  y:68 },
//   ];
//   const max = Math.max(...Object.values(talukaData), 1);
//   return (
//     <div style={{ position:"relative", width:"100%", paddingBottom:"85%", background:"linear-gradient(135deg,#f0fdf4,#dcfce7)", borderRadius:12, overflow:"hidden" }}>
//       <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%" }} viewBox="0 0 88 90">
//         {/* connecting lines */}
//         {[[0,2],[1,0],[2,3],[3,4],[4,6],[2,5],[5,7],[7,8],[8,9],[9,10],[10,11],[5,8]].map(([a,b],i)=>(
//           <line key={i} x1={nodes[a].x+4} y1={nodes[a].y+4} x2={nodes[b].x+4} y2={nodes[b].y+4}
//             stroke="#86efac" strokeWidth={0.8} strokeDasharray="2 1"/>
//         ))}
//         {nodes.map((n, i) => {
//           const count = talukaData[n.name] || 0;
//           const size = 3.5 + (count/max)*5;
//           const opacity = 0.3 + (count/max)*0.7;
//           return (
//             <g key={i}>
//               <circle cx={n.x+4} cy={n.y+4} r={size} fill="#16a34a" opacity={opacity}/>
//               <circle cx={n.x+4} cy={n.y+4} r={2.5} fill="#15803d"/>
//               <text x={n.x+4} y={n.y+12} textAnchor="middle" fontSize={4.5} fill="#14532d" fontWeight={600}>{n.name}</text>
//               {count > 0 && <text x={n.x+4} y={n.y+1} textAnchor="middle" fontSize={3.5} fill="#fff" fontWeight={700}>{count}</text>}
//             </g>
//           );
//         })}
//       </svg>
//       <div style={{ position:"absolute", bottom:8, right:10, fontSize:10, color:"#15803d", fontWeight:600, background:"#fff8", borderRadius:6, padding:"2px 8px" }}>
//         📍 Palghar District
//       </div>
//     </div>
//   );
// }

// // ── Stat Card ─────────────────────────────────────────────────────────────────
// function StatCard({ icon, label, value, sub, trend, color = "#16a34a", chart }) {
//   return (
//     <div style={{ background:"#fff", borderRadius:14, padding:"18px 20px", boxShadow:"0 2px 12px #0001", border:"1px solid #f0f0f0", display:"flex", flexDirection:"column", gap:8 }}>
//       <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
//         <div style={{ display:"flex", alignItems:"center", gap:8 }}>
//           <div style={{ width:36, height:36, borderRadius:10, background:color+"18", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>{icon}</div>
//           <span style={{ fontSize:12, color:"#6b7280", fontWeight:500 }}>{label}</span>
//         </div>
//         {trend !== undefined && (
//           <span style={{ fontSize:11, fontWeight:700, color: trend >= 0 ? "#16a34a" : "#dc2626", background: trend >= 0 ? "#dcfce7" : "#fee2e2", borderRadius:20, padding:"2px 8px" }}>
//             {trend >= 0 ? "▲" : "▼"} {Math.abs(trend)}%
//           </span>
//         )}
//       </div>
//       <div style={{ fontSize:26, fontWeight:800, color:"#111827", letterSpacing:-1 }}>{value}</div>
//       {sub && <div style={{ fontSize:11, color:"#9ca3af" }}>{sub}</div>}
//       {chart && <MiniBar data={chart} color={color}/>}
//     </div>
//   );
// }

// // ── Main Dashboard ────────────────────────────────────────────────────────────
// export default function Dashboard() {
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.auth);

//   const [stats, setStats]         = useState({ total:0, pending:0, resolved:0, inProgress:0 });
//   const [recent, setRecent]       = useState([]);
//   const [talukaData, setTalukaData] = useState({});
//   const [peopleOnline, setPeopleOnline] = useState(0);
//   const [weeklyData, setWeeklyData]   = useState([4,7,5,9,12,8,15]);
//   const [loading, setLoading]     = useState(true);
//   const [activeTab, setActiveTab] = useState("all");

//   useEffect(() => {
//     fetchDashboard();
//     // Simulate live people count
//     const interval = setInterval(() => {
//       setPeopleOnline(Math.floor(12 + Math.random() * 8));
//     }, 4000);
//     setPeopleOnline(Math.floor(12 + Math.random() * 8));
//     return () => clearInterval(interval);
//   }, []);

//   const fetchDashboard = async () => {
//     setLoading(true);
//     try {
//       const res = await axiosInstance.get("/inwardAll");
//       const data = res.data?.data || [];

//       const total      = data.length;
//       const pending    = data.filter(d => d.status === "Pending").length;
//       const resolved   = data.filter(d => d.status === "Resolved").length;
//       const inProgress = data.filter(d => d.status === "In Progress").length;
//       setStats({ total, pending, resolved, inProgress });

//       // Taluka frequency map
//       const tMap = {};
//       data.forEach(d => { if(d.taluka) tMap[d.taluka] = (tMap[d.taluka]||0) + 1; });
//       setTalukaData(tMap);

//       // Weekly trend (last 7 days simulated from data)
//       const now = Date.now();
//       const wk = Array(7).fill(0);
//       data.forEach(d => {
//         const diff = Math.floor((now - new Date(d.createdAt)) / 86400000);
//         if (diff >= 0 && diff < 7) wk[6-diff]++;
//       });
//       setWeeklyData(wk.map((v,i) => v || Math.floor(2+Math.random()*6)));

//       setRecent(data.slice(0, 8));
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resolutionRate = stats.total > 0 ? Math.round((stats.resolved / stats.total) * 100) : 0;

//   const statusColor = { "Pending":"#f59e0b", "Resolved":"#16a34a", "In Progress":"#3b82f6", "Rejected":"#ef4444" };
//   const statusBg    = { "Pending":"#fef3c7", "Resolved":"#dcfce7", "In Progress":"#dbeafe", "Rejected":"#fee2e2" };

//   const filtered = activeTab === "all" ? recent : recent.filter(r => r.status === activeTab);

//   return (
//     <div style={{ minHeight:"100vh", background:"#f6faf6", fontFamily:"'Segoe UI',sans-serif" }}>

//       {/* ── Top Header Bar ── */}
//       {/* <div style={{ background:"linear-gradient(135deg,#14532d,#15803d)", padding:"14px 28px", display:"flex", alignItems:"center", justifyContent:"space-between", boxShadow:"0 2px 16px #14532d33" }}>
//         <div style={{ display:"flex", alignItems:"center", gap:14 }}>
//           <img src="/src/assets/vvcmclogo.jpg" alt="VVCMC" style={{ width:44, height:44, borderRadius:"50%", border:"2px solid #a16207", objectFit:"cover" }} onError={e=>e.target.style.display="none"}/>
//           <div>
//             <div style={{ color:"#fef9c3", fontSize:17, fontWeight:800, letterSpacing:0.3 }}>वसई-विरार शहर महानगरपालिका</div>
//             <div style={{ color:"#86efac", fontSize:11, fontWeight:500 }}>Janata Darbar — Admin Dashboard</div>
//           </div>
//         </div>
//         <div style={{ display:"flex", alignItems:"center", gap:16 }}>
        
//           <div style={{ background:"#ffffff18", borderRadius:12, padding:"6px 16px", display:"flex", alignItems:"center", gap:8 }}>
//             <span style={{ width:8, height:8, borderRadius:"50%", background:"#4ade80", display:"inline-block", boxShadow:"0 0 6px #4ade80", animation:"pulse 2s infinite" }}/>
//             <span style={{ color:"#fff", fontSize:12, fontWeight:600 }}>{peopleOnline} Online</span>
//           </div>
//           <div style={{ color:"#86efac", fontSize:13 }}>👤 {user?.fullName || "Admin"}</div>
//         </div>
//       </div> */}

//       <style>{`
//         @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
//         @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:none} }
//         .dash-card { animation: fadeUp .4s ease both; }
//         .tab-btn { border:none; cursor:pointer; border-radius:8px; padding:6px 16px; font-size:12px; font-weight:600; transition:all .2s; }
//         .tab-btn.active { background:#15803d; color:#fff; }
//         .tab-btn:not(.active) { background:#f0fdf4; color:#15803d; }
//         .tbl-row:hover { background:#f0fdf4 !important; }
//       `}</style>

//       <div style={{ padding:"24px 28px", maxWidth:1400, margin:"0 auto" }}>

//         {/* ── Gold accent bar ── */}
//         <div style={{ height:3, background:"linear-gradient(90deg,#a16207,#ca8a04,#fde68a,#ca8a04,#a16207)", borderRadius:99, marginBottom:24 }}/>

//         {/* ── Greeting ── */}
//         <div style={{ marginBottom:20 }}>
//           <h1 style={{ fontSize:22, fontWeight:800, color:"#14532d", margin:0 }}>Good {new Date().getHours()<12?"Morning":new Date().getHours()<17?"Afternoon":"Evening"}, {user?.fullName?.split(" ")[0] || "Admin"} 👋</h1>
//           <p style={{ color:"#6b7280", fontSize:13, margin:"2px 0 0" }}>Here's what's happening with Janata Darbar today.</p>
//         </div>

//         {/* ── Stat Cards Row ── */}
//         {loading ? (
//           <div style={{ textAlign:"center", padding:60, color:"#15803d", fontWeight:600 }}>Loading dashboard...</div>
//         ) : (
//           <>
//             <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:16, marginBottom:24 }}>
//               <div className="dash-card" style={{ animationDelay:"0s" }}>
//                 <StatCard icon="📋" label="Total Applications" value={stats.total.toLocaleString()} sub="All time" trend={12} color="#15803d" chart={weeklyData}/>
//               </div>
//               <div className="dash-card" style={{ animationDelay:".07s" }}>
//                 <StatCard icon="⏳" label="Pending" value={stats.pending} sub="Awaiting action" trend={-5} color="#f59e0b"/>
//               </div>
//               <div className="dash-card" style={{ animationDelay:".14s" }}>
//                 <StatCard icon="✅" label="Resolved" value={stats.resolved} sub="Completed" trend={8} color="#16a34a"/>
//               </div>
//               <div className="dash-card" style={{ animationDelay:".21s" }}>
//                 <StatCard icon="🔄" label="In Progress" value={stats.inProgress} sub="Being processed" color="#3b82f6"/>
//               </div>
//               <div className="dash-card" style={{ animationDelay:".28s" }}>
//                 {/* People Present Today */}
//                 {/* <div style={{ background:"linear-gradient(135deg,#14532d,#15803d)", borderRadius:14, padding:"18px 20px", boxShadow:"0 2px 12px #14532d22", color:"#fff", display:"flex", flexDirection:"column", gap:8 }}>
//                   <div style={{ display:"flex", alignItems:"center", gap:8 }}>
//                     <div style={{ width:36, height:36, borderRadius:10, background:"#ffffff22", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>🧑‍💼</div>
//                     <span style={{ fontSize:12, color:"#86efac", fontWeight:500 }}>People Present</span>
//                   </div>
//                   <div style={{ fontSize:32, fontWeight:800, letterSpacing:-1 }}>{peopleOnline}</div>
//                   <div style={{ display:"flex", alignItems:"center", gap:6 }}>
//                     <span style={{ width:8, height:8, borderRadius:"50%", background:"#4ade80", display:"inline-block", boxShadow:"0 0 6px #4ade80", animation:"pulse 2s infinite" }}/>
//                     <span style={{ fontSize:11, color:"#86efac" }}>Live count — updates every 4s</span>
//                   </div>
//                 </div> */}
//               </div>
//             </div>

//             {/* ── Middle Row: Map + Donut ── */}
//             <div style={{ display:"grid", gridTemplateColumns:"1fr 340px", gap:20, marginBottom:24 }}>

//               {/* MAP */}
//               {/* <div className="dash-card" style={{ animationDelay:".35s", background:"#fff", borderRadius:14, padding:20, boxShadow:"0 2px 12px #0001", border:"1px solid #f0f0f0" }}>
//                 <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
//                   <div>
//                     <h3 style={{ margin:0, fontSize:15, fontWeight:700, color:"#14532d" }}>📍 Application Heatmap</h3>
//                     <p style={{ margin:0, fontSize:11, color:"#9ca3af" }}>Complaints by Taluka — Palghar District</p>
//                   </div>
//                   <div style={{ background:"#f0fdf4", borderRadius:8, padding:"4px 12px", fontSize:11, color:"#15803d", fontWeight:600 }}>
//                     {Object.keys(talukaData).length} Talukas Active
//                   </div>
//                 </div>
//                 <VvcmcMap talukaData={talukaData}/>
           
//                 <div style={{ marginTop:12, display:"flex", flexWrap:"wrap", gap:8 }}>
//                   {Object.entries(talukaData).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([t,c])=>(
//                     <div key={t} style={{ background:"#f0fdf4", borderRadius:20, padding:"3px 10px", fontSize:11, color:"#15803d", fontWeight:600 }}>
//                       {t}: {c}
//                     </div>
//                   ))}
//                 </div>
//               </div> */}


              





// {/* MAP */}
// <div className="dash-card" style={{ animationDelay:".35s", background:"#fff", borderRadius:14, padding:20, boxShadow:"0 2px 12px #0001", border:"1px solid #f0f0f0" }}>
//   <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
//     <div>
//       <h3 style={{ margin:0, fontSize:15, fontWeight:700, color:"#14532d" }}>📍 Application Heatmap</h3>
//       <p style={{ margin:0, fontSize:11, color:"#9ca3af" }}>Complaints by Taluka — Palghar District</p>
//     </div>
//     <div style={{ background:"#f0fdf4", borderRadius:8, padding:"4px 12px", fontSize:11, color:"#15803d", fontWeight:600 }}>
//       {Object.keys(talukaData).length} Talukas Active
//     </div>
//   </div>

//   {/* Replaced SVG with actual map image */}
//   {/* <div style={{ position:"relative", width:"100%", paddingBottom:"85%", background:"linear-gradient(135deg,#f0fdf4,#dcfce7)", borderRadius:12, overflow:"hidden" }}>
//     <img
//       src={mapImage}
//       alt="VVCMC Palghar District Map"
//       style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", borderRadius:12 }}
//     />
//     <div style={{ position:"absolute", bottom:8, right:10, fontSize:10, color:"#15803d", fontWeight:600, background:"#fff8", borderRadius:6, padding:"2px 8px" }}>
//       📍 Palghar District
//     </div>
//   </div> */}


//   {/* Replaced SVG with actual map image */}
// <div style={{ position:"relative", width:"100%", paddingBottom:"60%", background:"linear-gradient(135deg,#f0fdf4,#dcfce7)", borderRadius:12, overflow:"hidden" }}>
//   <img
//     src={mapImage}
//     alt="VVCMC Palghar District Map"
//     style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"contain", borderRadius:12 }}
//   />
//   <div style={{ position:"absolute", bottom:8, right:10, fontSize:10, color:"#15803d", fontWeight:600, background:"#fff8", borderRadius:6, padding:"2px 8px" }}>
//     📍 Palghar District
//   </div>
// </div>

//   {/* Legend */}
//   <div style={{ marginTop:12, display:"flex", flexWrap:"wrap", gap:8 }}>
//     {Object.entries(talukaData).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([t,c])=>(
//       <div key={t} style={{ background:"#f0fdf4", borderRadius:20, padding:"3px 10px", fontSize:11, color:"#15803d", fontWeight:600 }}>
//         {t}: {c}
//       </div>
//     ))}
//   </div>
// </div>






//               {/* RIGHT COLUMN */}
//               <div style={{ display:"flex", flexDirection:"column", gap:16 }}>

//                 {/* Resolution Rate Donut */}
//                 <div className="dash-card" style={{ animationDelay:".42s", background:"#fff", borderRadius:14, padding:20, boxShadow:"0 2px 12px #0001", border:"1px solid #f0f0f0", textAlign:"center" }}>
//                   <h3 style={{ margin:"0 0 12px", fontSize:14, fontWeight:700, color:"#14532d" }}>Resolution Rate</h3>
//                   <div style={{ display:"flex", justifyContent:"center" }}>
//                     <DonutChart value={resolutionRate} color="#16a34a"/>
//                   </div>
//                   <p style={{ margin:"8px 0 0", fontSize:11, color:"#6b7280" }}>
//                     {resolutionRate >= 70 ? "🟢 On track — great performance!" : resolutionRate >= 40 ? "🟡 Moderate — needs attention" : "🔴 Low — action required"}
//                   </p>
//                 </div>

//                 {/* Weekly Trend */}
//                 <div className="dash-card" style={{ animationDelay:".49s", background:"#fff", borderRadius:14, padding:20, boxShadow:"0 2px 12px #0001", border:"1px solid #f0f0f0" }}>
//                   <h3 style={{ margin:"0 0 12px", fontSize:14, fontWeight:700, color:"#14532d" }}>📈 Weekly Trend</h3>
//                   <MiniBar data={weeklyData} color="#15803d"/>
//                   <div style={{ display:"flex", justifyContent:"space-between", marginTop:6 }}>
//                     {["M","T","W","T","F","S","S"].map((d,i)=>(
//                       <span key={i} style={{ fontSize:10, color:"#9ca3af", flex:1, textAlign:"center" }}>{d}</span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Category Breakdown */}
//                 <div className="dash-card" style={{ animationDelay:".56s", background:"#fff", borderRadius:14, padding:20, boxShadow:"0 2px 12px #0001", border:"1px solid #f0f0f0" }}>
//                   <h3 style={{ margin:"0 0 12px", fontSize:14, fontWeight:700, color:"#14532d" }}>Priority Split</h3>
//                   {[
//                     { label:"Normal",    color:"#15803d", pct: stats.total ? Math.round(((stats.total - stats.pending - stats.inProgress)*0.6/Math.max(stats.total,1))*100) : 60 },
//                     { label:"Urgent",    color:"#f59e0b", pct: stats.total ? Math.round((stats.pending/Math.max(stats.total,1))*55) : 25 },
//                     { label:"Emergency", color:"#ef4444", pct: stats.total ? Math.round((stats.inProgress/Math.max(stats.total,1))*40) : 15 },
//                   ].map(({ label, color, pct }) => (
//                     <div key={label} style={{ marginBottom:10 }}>
//                       <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, fontWeight:600, color:"#374151", marginBottom:3 }}>
//                         <span>{label}</span><span>{pct}%</span>
//                       </div>
//                       <div style={{ background:"#f3f4f6", borderRadius:99, height:7, overflow:"hidden" }}>
//                         <div style={{ width:`${pct}%`, height:"100%", background:color, borderRadius:99, transition:"width 1s ease" }}/>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* ── Recent Applications Table ── */}
//             <div className="dash-card" style={{ animationDelay:".63s", background:"#fff", borderRadius:14, padding:20, boxShadow:"0 2px 12px #0001", border:"1px solid #f0f0f0" }}>
//               <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16, flexWrap:"wrap", gap:10 }}>
//                 <div>
//                   <h3 style={{ margin:0, fontSize:15, fontWeight:700, color:"#14532d" }}>Recent Applications</h3>
//                   <p style={{ margin:0, fontSize:11, color:"#9ca3af" }}>Latest inward complaints</p>
//                 </div>
//                 <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
//                   {["all","Pending","Resolved","In Progress"].map(tab => (
//                     <button key={tab} className={`tab-btn ${activeTab===tab?"active":""}`}
//                       onClick={() => setActiveTab(tab)}>
//                       {tab === "all" ? "All" : tab}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//               <div style={{ overflowX:"auto" }}>
//                 <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
//                   <thead>
//                     <tr style={{ background:"#f0fdf4" }}>
//                       {["Inward No","Applicant","Subject","Taluka","Department","Priority","Status","Date"].map(h => (
//                         <th key={h} style={{ padding:"10px 12px", textAlign:"left", color:"#15803d", fontWeight:700, fontSize:12, whiteSpace:"nowrap" }}>{h}</th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filtered.length === 0 ? (
//                       <tr><td colSpan={8} style={{ textAlign:"center", padding:32, color:"#9ca3af" }}>No applications found</td></tr>
//                     ) : filtered.map((item, i) => (
//                       <tr key={i} className="tbl-row" style={{ borderBottom:"1px solid #f3f4f6", transition:"background .15s" }}>
//                         <td style={{ padding:"10px 12px", color:"#15803d", fontWeight:600, whiteSpace:"nowrap" }}>{item.inwardNo || "—"}</td>
//                         <td style={{ padding:"10px 12px", fontWeight:500 }}>{item.fullName || "—"}</td>
//                         <td style={{ padding:"10px 12px", color:"#374151", maxWidth:180, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{item.subject || "—"}</td>
//                         <td style={{ padding:"10px 12px", color:"#6b7280" }}>{item.taluka || "—"}</td>
//                         <td style={{ padding:"10px 12px", color:"#6b7280", whiteSpace:"nowrap" }}>{item.mainDepartment || "—"}</td>
//                         <td style={{ padding:"10px 12px" }}>
//                           <span style={{ fontSize:11, fontWeight:700, padding:"2px 10px", borderRadius:20,
//                             background: item.priority==="Emergency"?"#fee2e2":item.priority==="Urgent"?"#fef3c7":"#dcfce7",
//                             color:       item.priority==="Emergency"?"#dc2626":item.priority==="Urgent"?"#92400e":"#15803d" }}>
//                             {item.priority || "Normal"}
//                           </span>
//                         </td>
//                         <td style={{ padding:"10px 12px" }}>
//                           <span style={{ fontSize:11, fontWeight:700, padding:"2px 10px", borderRadius:20,
//                             background: statusBg[item.status] || "#f3f4f6",
//                             color:      statusColor[item.status] || "#374151" }}>
//                             {item.status || "—"}
//                           </span>
//                         </td>
//                         <td style={{ padding:"10px 12px", color:"#9ca3af", whiteSpace:"nowrap" }}>
//                           {item.submissionDate || (item.createdAt ? new Date(item.createdAt).toLocaleDateString("en-IN") : "—")}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <div style={{ marginTop:12, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
//                 <span style={{ fontSize:11, color:"#9ca3af" }}>Showing {filtered.length} of {stats.total} applications</span>
//                 <button onClick={() => navigate("/allapplication")}
//                   style={{ background:"#f0fdf4", color:"#15803d", border:"1px solid #86efac", borderRadius:8, padding:"6px 16px", fontSize:12, fontWeight:600, cursor:"pointer" }}>
//                   View All →
//                 </button>
//               </div>
//             </div>

//           </>
//         )}

//         {/* Footer */}
//         <div style={{ marginTop:24, textAlign:"center", color:"#9ca3af", fontSize:11 }}>
//           © {new Date().getFullYear()} Vasai-Virar City Municipal Corporation · Janata Darbar System
//           <span style={{ margin:"0 8px", color:"#ca8a04" }}>◆</span>
//           स्थापना : ३ जुलै २००९
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../services/axiosInstance";
// import mapImage from "../assets/mapvvcmc.jfif";

// // ─── Palette ──────────────────────────────────────────────────────────────────
// const P = {
//   teal:       "#4CABC1",
//   tealDeep:   "#49ACC3",
//   tealDark:   "#187484",
//   gold:       "#CE9A54",
//   goldDeep:   "#CA9D28",
//   sage:       "#66A962",
//   cream:      "#F5E7C2",
//   card1From:  "#4CABC1",  card1To: "#49ACC3",
//   card2From:  "#CE9A54",  card2To: "#CA9D28",
//   card3From:  "#66A962",  card3To: "#4a8f47",
//   card4From:  "#F5E7C2",  card4To: "#e0c98a",
//   bg:         "#f0f7f9",
//   white:      "#ffffff",
//   text:       "#1a3a40",
//   muted:      "#6b8f95",
//   border:     "#d8edf1",
// };

// // ─── Sparkline SVG ────────────────────────────────────────────────────────────
// function Sparkline({ color = "#fff", data = [30,45,35,60,40,70,55] }) {
//   const w = 90, h = 36;
//   const max = Math.max(...data), min = Math.min(...data);
//   const pts = data.map((v, i) => {
//     const x = (i / (data.length - 1)) * w;
//     const y = h - ((v - min) / (max - min + 1)) * (h - 4) - 2;
//     return `${x},${y}`;
//   }).join(" ");
//   const area = `0,${h} ` + pts + ` ${w},${h}`;
//   const gid = `sg${color.replace('#','')}`;
//   return (
//     <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ opacity:0.75 }}>
//       <defs>
//         <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor={color} stopOpacity="0.45"/>
//           <stop offset="100%" stopColor={color} stopOpacity="0"/>
//         </linearGradient>
//       </defs>
//       <polygon points={area} fill={`url(#${gid})`}/>
//       <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   );
// }

// // ─── Area Chart ───────────────────────────────────────────────────────────────
// function AreaChart() {
//   const w = 520, h = 160;
//   const income  = [60,80,55,110,85,140,100,155,120,165,130,180];
//   const outcome = [40,55,45,70,60,95,75,100,85,110,90,120];
//   const months  = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
//   const max = 200;
//   const toPoints = (arr) => arr.map((v,i) => {
//     const x = 30 + (i / (arr.length-1)) * (w-60);
//     const y = h - 20 - (v/max) * (h-40);
//     return `${x},${y}`;
//   });
//   const incPts = toPoints(income);
//   const outPts = toPoints(outcome);
//   const incArea = `30,${h-20} ${incPts.join(" ")} ${w-30},${h-20}`;
//   const outArea = `30,${h-20} ${outPts.join(" ")} ${w-30},${h-20}`;
//   const peakIdx = income.indexOf(Math.max(...income));
//   const [px,py] = incPts[peakIdx].split(",").map(Number);
//   return (
//     <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ overflow:"visible" }}>
//       <defs>
//         <linearGradient id="incGrad" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor={P.teal} stopOpacity="0.35"/>
//           <stop offset="100%" stopColor={P.teal} stopOpacity="0.02"/>
//         </linearGradient>
//         <linearGradient id="outGrad" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor={P.gold} stopOpacity="0.28"/>
//           <stop offset="100%" stopColor={P.gold} stopOpacity="0.02"/>
//         </linearGradient>
//       </defs>
//       {[0.25,0.5,0.75,1].map((f,i) => (
//         <line key={i} x1={30} y1={h-20-(f*(h-40))} x2={w-30} y2={h-20-(f*(h-40))}
//           stroke={P.border} strokeWidth="1" strokeDasharray="4 3"/>
//       ))}
//       {[50,100,150,200].map((v,i) => (
//         <text key={i} x={24} y={h-20-(v/max*(h-40))+4} fontSize="9" fill={P.muted} textAnchor="end">{v}</text>
//       ))}
//       <polygon points={incArea} fill="url(#incGrad)"/>
//       <polygon points={outArea} fill="url(#outGrad)"/>
//       <polyline points={incPts.join(" ")} fill="none" stroke={P.teal} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//       <polyline points={outPts.join(" ")} fill="none" stroke={P.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 3"/>
//       <circle cx={px} cy={py} r={5} fill={P.teal} stroke="#fff" strokeWidth={2}/>
//       <rect x={px-18} y={py-24} width={36} height={17} rx={5} fill={P.teal}/>
//       <text x={px} y={py-12} fontSize="8.5" fill="#fff" textAnchor="middle" fontWeight="800">{Math.max(...income)}K</text>
//       {months.map((m,i) => {
//         const x = 30 + (i/(months.length-1))*(w-60);
//         return <text key={i} x={x} y={h-4} fontSize="9" fill={P.muted} textAnchor="middle">{m}</text>;
//       })}
//     </svg>
//   );
// }

// // ─── Donut ────────────────────────────────────────────────────────────────────
// function Donut({ pct = 46 }) {
//   const r = 46, c = 2*Math.PI*r;
//   const dash = (pct/100)*c;
//   return (
//     <svg width={112} height={112} viewBox="0 0 112 112">
//       <circle cx={56} cy={56} r={r} fill="none" stroke={P.border} strokeWidth={12}/>
//       <circle cx={56} cy={56} r={r} fill="none" stroke={P.teal} strokeWidth={12}
//         strokeDasharray={`${dash} ${c-dash}`} strokeLinecap="round"
//         transform="rotate(-90 56 56)"
//         style={{ transition:"stroke-dasharray 1s ease", filter:`drop-shadow(0 0 8px ${P.teal}99)` }}/>
//       <text x={56} y={52} textAnchor="middle" fontSize={20} fontWeight={900} fill={P.tealDark}>{pct}%</text>
//       <text x={56} y={66} textAnchor="middle" fontSize={9} fill={P.muted} fontWeight={700} letterSpacing={0.8}>RESOLVED</text>
//     </svg>
//   );
// }

// // ─── Mini Bar ─────────────────────────────────────────────────────────────────
// function MiniBar({ data = [], color = P.teal }) {
//   const max = Math.max(...data, 1);
//   return (
//     <div style={{ display:"flex", alignItems:"flex-end", gap:3, height:38 }}>
//       {data.map((v,i) => (
//         <div key={i} style={{
//           flex:1, borderRadius:"3px 3px 0 0", minHeight:4,
//           background: i===data.length-1 ? color : `${color}66`,
//           height:`${(v/max)*100}%`,
//         }}/>
//       ))}
//     </div>
//   );
// }

// // ─── Dashboard ────────────────────────────────────────────────────────────────
// export default function Dashboard() {
//   const navigate = useNavigate();
//   const { user } = useSelector((s) => s.auth);

//   const [stats, setStats]               = useState({ total:0, pending:0, resolved:0, inProgress:0 });
//   const [recent, setRecent]             = useState([]);
//   const [talukaData, setTalukaData]     = useState({});
//   const [peopleOnline, setPeopleOnline] = useState(0);
//   const [weeklyData, setWeeklyData]     = useState([4,7,5,9,12,8,15]);
//   const [loading, setLoading]           = useState(true);
//   const [activeTab, setActiveTab]       = useState("all");

//   useEffect(() => {
//     fetchDashboard();
//     const iv = setInterval(() => setPeopleOnline(Math.floor(12+Math.random()*8)), 4000);
//     setPeopleOnline(Math.floor(12+Math.random()*8));
//     return () => clearInterval(iv);
//   }, []);

//   const fetchDashboard = async () => {
//     setLoading(true);
//     try {
//       const res  = await axiosInstance.get("/inwardAll");
//       const data = res.data?.data || [];
//       const total      = data.length;
//       const pending    = data.filter(d=>d.status==="Pending").length;
//       const resolved   = data.filter(d=>d.status==="Resolved").length;
//       const inProgress = data.filter(d=>d.status==="In Progress").length;
//       setStats({ total, pending, resolved, inProgress });
//       const tMap = {};
//       data.forEach(d => { if(d.taluka) tMap[d.taluka]=(tMap[d.taluka]||0)+1; });
//       setTalukaData(tMap);
//       const now=Date.now(), wk=Array(7).fill(0);
//       data.forEach(d => {
//         const diff=Math.floor((now-new Date(d.createdAt))/86400000);
//         if(diff>=0&&diff<7) wk[6-diff]++;
//       });
//       setWeeklyData(wk.map(v=>v||Math.floor(2+Math.random()*6)));
//       setRecent(data.slice(0,8));
//     } catch(e) { console.error(e); }
//     finally { setLoading(false); }
//   };

//   const resolutionRate = stats.total>0 ? Math.round((stats.resolved/stats.total)*100) : 0;
//   const statusColor = { "Pending":P.gold,"Resolved":P.sage,"In Progress":P.teal,"Rejected":"#d9534f" };
//   const statusBg    = { "Pending":`${P.gold}22`,"Resolved":`${P.sage}22`,"In Progress":`${P.teal}22`,"Rejected":"#fde8e8" };
//   const filtered    = activeTab==="all" ? recent : recent.filter(r=>r.status===activeTab);

//   const analyticCards = [
//     { label:"TOTAL APPLICATIONS", value:stats.total.toLocaleString(),  sub:"▲ 12% last week", from:P.card1From, to:P.card1To, spark:[40,55,45,70,60,85,75], dark:false },
//     { label:"PENDING",            value:stats.pending,                  sub:"▼ 5% last week",  from:P.card2From, to:P.card2To, spark:[30,50,35,60,40,70,55], dark:false },
//     { label:"RESOLVED",           value:stats.resolved,                 sub:"▲ 8% last week",  from:P.card3From, to:P.card3To, spark:[20,40,30,55,45,65,60], dark:false },
//     { label:"IN PROGRESS",        value:stats.inProgress,               sub:"— ongoing",        from:P.card4From, to:P.card4To, spark:[15,30,25,40,35,50,45], dark:true  },
//   ];

//   return (
//     <div style={{ minHeight:"100vh", background:P.bg, fontFamily:"'Nunito','Segoe UI',sans-serif" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
//         @keyframes fadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:none} }
//         @keyframes pulse  { 0%,100%{opacity:1} 50%{opacity:.35} }
//         .dc { animation: fadeUp .4s ease both; }
//         .tbl-row:hover { background:${P.teal}12 !important; cursor:pointer; }
//         ::-webkit-scrollbar { width:5px; height:5px; }
//         ::-webkit-scrollbar-track { background:transparent; }
//         ::-webkit-scrollbar-thumb { background:${P.border}; border-radius:99px; }
//         * { box-sizing:border-box; }
//       `}</style>

//       <div style={{ padding:"24px 28px", maxWidth:1440, margin:"0 auto" }}>

//         {/* ── Top accent bar ── */}
//         <div style={{ height:4, background:`linear-gradient(90deg,${P.tealDark},${P.teal},${P.gold},${P.goldDeep},${P.cream},${P.goldDeep},${P.teal})`, borderRadius:99, marginBottom:24 }}/>

//         {/* ── Page header ── */}
//         <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:22 }}>
//           <div>
//             <h2 style={{ margin:0, fontSize:20, fontWeight:900, color:P.tealDark, letterSpacing:-0.3 }}>
//               Analytic Overview
//             </h2>
//             <p style={{ margin:"3px 0 0", fontSize:12, color:P.muted }}>
//               Good {new Date().getHours()<12?"Morning":new Date().getHours()<17?"Afternoon":"Evening"}, {user?.fullName?.split(" ")[0]||"Admin"} 👋 — Here's what's happening today.
//             </p>
//           </div>
//           <div style={{ display:"flex", alignItems:"center", gap:12 }}>
//             <div style={{ display:"flex", alignItems:"center", gap:7, background:P.white, border:`1px solid ${P.border}`, borderRadius:10, padding:"7px 14px" }}>
//               <span style={{ width:8, height:8, borderRadius:"50%", background:P.sage, display:"inline-block", animation:"pulse 2s infinite", boxShadow:`0 0 8px ${P.sage}` }}/>
//               <span style={{ fontSize:12, fontWeight:700, color:P.tealDark }}>{peopleOnline} Online</span>
//             </div>
//             <div style={{ background:P.white, border:`1px solid ${P.border}`, borderRadius:9, padding:"7px 14px", fontSize:11, fontWeight:700, color:P.tealDark }}>
//               THIS YEAR ▾
//             </div>
//           </div>
//         </div>

//         {loading ? (
//           <div style={{ textAlign:"center", padding:80, color:P.teal, fontWeight:700 }}>Loading dashboard…</div>
//         ) : (
//           <>
//             {/* ── 4 Colorful Stat Cards ── */}
//             <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16, marginBottom:20 }}>
//               {analyticCards.map((card, i) => (
//                 <div key={i} className="dc" style={{
//                   animationDelay:`${i*0.07}s`,
//                   borderRadius:16,
//                   background:`linear-gradient(135deg,${card.from},${card.to})`,
//                   padding:"18px 20px",
//                   boxShadow:`0 8px 28px ${card.from}55`,
//                   position:"relative", overflow:"hidden",
//                   minHeight:110,
//                 }}>
//                   <div style={{ position:"absolute", top:-20, right:-20, width:80, height:80, borderRadius:"50%", background:"rgba(255,255,255,0.13)" }}/>
//                   <div style={{ position:"absolute", bottom:-14, right:10, width:50, height:50, borderRadius:"50%", background:"rgba(255,255,255,0.09)" }}/>
//                   <div style={{ fontSize:9.5, fontWeight:800, color:card.dark?"#6b5020":"rgba(255,255,255,0.88)", letterSpacing:0.9, textTransform:"uppercase", marginBottom:5 }}>{card.label}</div>
//                   <div style={{ fontSize:28, fontWeight:900, color:card.dark?P.tealDark:"#fff", letterSpacing:-1, marginBottom:3 }}>{card.value}</div>
//                   <div style={{ fontSize:10, color:card.dark?"#8a6830":"rgba(255,255,255,0.72)", fontWeight:600, marginBottom:8 }}>{card.sub}</div>
//                   <Sparkline color={card.dark?"#9a7828":"#fff"} data={card.spark}/>
//                 </div>
//               ))}
//             </div>

//             {/* ── Revenue + Status ── */}
//             <div style={{ display:"grid", gridTemplateColumns:"1fr 290px", gap:18, marginBottom:18 }}>

//               {/* Revenue Chart */}
//               <div className="dc" style={{ animationDelay:".3s", background:P.white, borderRadius:16, padding:"20px 22px", boxShadow:"0 4px 20px rgba(0,0,0,0.05)", border:`1px solid ${P.border}` }}>
//                 <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
//                   <h3 style={{ margin:0, fontSize:15, fontWeight:900, color:P.tealDark }}>Revenue</h3>
//                   <div style={{ display:"flex", gap:14, alignItems:"center" }}>
//                     <div style={{ display:"flex", alignItems:"center", gap:5 }}>
//                       <span style={{ width:10, height:3, borderRadius:99, background:P.teal, display:"inline-block" }}/>
//                       <span style={{ fontSize:10.5, color:P.muted, fontWeight:600 }}>Income</span>
//                     </div>
//                     <div style={{ display:"flex", alignItems:"center", gap:5 }}>
//                       <span style={{ width:10, height:2, background:P.gold, display:"inline-block", opacity:0.8 }}/>
//                       <span style={{ fontSize:10.5, color:P.muted, fontWeight:600 }}>Outcome</span>
//                     </div>
//                     <div style={{ background:P.bg, border:`1px solid ${P.border}`, borderRadius:7, padding:"4px 10px", fontSize:10.5, fontWeight:700, color:P.tealDark }}>THIS MONTH ▾</div>
//                   </div>
//                 </div>
//                 <AreaChart/>
//               </div>

//               {/* Status Panel */}
//               <div className="dc" style={{ animationDelay:".37s", background:P.white, borderRadius:16, padding:"20px 20px", boxShadow:"0 4px 20px rgba(0,0,0,0.05)", border:`1px solid ${P.border}`, display:"flex", flexDirection:"column" }}>
//                 <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
//                   <h3 style={{ margin:0, fontSize:15, fontWeight:900, color:P.tealDark }}>Status</h3>
//                   <div style={{ background:P.bg, border:`1px solid ${P.border}`, borderRadius:7, padding:"4px 10px", fontSize:10.5, fontWeight:700, color:P.tealDark }}>TODAY ▾</div>
//                 </div>

//                 <div style={{ display:"flex", justifyContent:"center", margin:"6px 0" }}>
//                   <Donut pct={resolutionRate}/>
//                 </div>

//                 <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8, marginTop:8 }}>
//                   {[
//                     { label:"BOOKED",      value:stats.total,      color:P.teal },
//                     { label:"ON PROGRESS", value:stats.inProgress, color:P.gold },
//                     { label:"CANCELLED",   value:stats.pending,    color:"#d9534f" },
//                   ].map(({ label, value, color }) => (
//                     <div key={label} style={{ textAlign:"center", padding:"10px 4px", background:P.bg, borderRadius:10, border:`1px solid ${P.border}` }}>
//                       <div style={{ fontSize:16, fontWeight:900, color }}>{value.toLocaleString()}</div>
//                       <div style={{ fontSize:8.5, fontWeight:800, color:P.muted, letterSpacing:0.4, textTransform:"uppercase", marginTop:3 }}>{label}</div>
//                     </div>
//                   ))}
//                 </div>

//                 <div style={{ marginTop:16 }}>
//                   <div style={{ fontSize:12, fontWeight:800, color:P.tealDark, marginBottom:8 }}>📈 Weekly Trend</div>
//                   <MiniBar data={weeklyData} color={P.teal}/>
//                   <div style={{ display:"flex", justifyContent:"space-between", marginTop:5 }}>
//                     {["M","T","W","T","F","S","S"].map((d,i) => (
//                       <span key={i} style={{ fontSize:9, color:P.muted, flex:1, textAlign:"center", fontWeight:700 }}>{d}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* ── Tracking + Recent Orders ── */}
//             <div style={{ display:"grid", gridTemplateColumns:"260px 1fr", gap:18, marginBottom:8 }}>

//               {/* Tracking / Taluka */}
//               <div className="dc" style={{ animationDelay:".44s", background:P.white, borderRadius:16, padding:"20px 20px", boxShadow:"0 4px 20px rgba(0,0,0,0.05)", border:`1px solid ${P.border}` }}>
//                 <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
//                   <h3 style={{ margin:0, fontSize:14, fontWeight:900, color:P.tealDark }}>Tracking</h3>
//                   <div style={{ background:P.bg, border:`1px solid ${P.border}`, borderRadius:7, padding:"3px 9px", fontSize:10, fontWeight:700, color:P.tealDark }}>THIS YEAR ▾</div>
//                 </div>
//                 <div style={{ display:"flex", justifyContent:"space-between", padding:"0 2px 8px", borderBottom:`1px solid ${P.border}`, marginBottom:6 }}>
//                   <span style={{ fontSize:9.5, fontWeight:800, color:P.muted, textTransform:"uppercase", letterSpacing:0.5 }}>Region</span>
//                   <span style={{ fontSize:9.5, fontWeight:800, color:P.muted, textTransform:"uppercase", letterSpacing:0.5 }}>Amount</span>
//                 </div>
//                 {Object.entries(talukaData).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([taluka,count],i) => {
//                   const cols = [P.teal,P.gold,P.sage,P.tealDeep,P.goldDeep,P.tealDark];
//                   const c = cols[i%cols.length];
//                   return (
//                     <div key={taluka} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"8px 2px", borderBottom:`1px solid ${P.border}55` }}>
//                       <div style={{ display:"flex", alignItems:"center", gap:8 }}>
//                         <div style={{ width:7, height:7, borderRadius:"50%", background:c }}/>
//                         <span style={{ fontSize:12, fontWeight:600, color:P.text }}>{taluka}</span>
//                       </div>
//                       <span style={{ fontSize:12, fontWeight:800, color:c }}>{count.toLocaleString()}</span>
//                     </div>
//                   );
//                 })}
//                 {Object.keys(talukaData).length===0 && (
//                   <div style={{ textAlign:"center", color:P.muted, fontSize:12, padding:"20px 0" }}>No data yet</div>
//                 )}
//               </div>

//               {/* Recent Order Table */}
//               <div className="dc" style={{ animationDelay:".51s", background:P.white, borderRadius:16, padding:"20px 22px", boxShadow:"0 4px 20px rgba(0,0,0,0.05)", border:`1px solid ${P.border}` }}>
//                 <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14, flexWrap:"wrap", gap:8 }}>
//                   <div>
//                     <h3 style={{ margin:0, fontSize:15, fontWeight:900, color:P.tealDark }}>Recent Order</h3>
//                     <p style={{ margin:"2px 0 0", fontSize:11, color:P.muted }}>Latest inward complaints</p>
//                   </div>
//                   <div style={{ display:"flex", gap:8, alignItems:"center", flexWrap:"wrap" }}>
//                     {["all","Pending","Resolved","In Progress"].map(tab => (
//                       <button key={tab} onClick={()=>setActiveTab(tab)} style={{
//                         border:`1px solid ${activeTab===tab?P.teal:P.border}`,
//                         background: activeTab===tab?`linear-gradient(135deg,${P.teal},${P.tealDark})`:P.white,
//                         color: activeTab===tab?"#fff":P.muted,
//                         borderRadius:8, padding:"5px 13px",
//                         fontSize:11, fontWeight:700, cursor:"pointer",
//                         boxShadow: activeTab===tab?`0 4px 12px ${P.teal}44`:"none",
//                         transition:"all .2s",
//                       }}>
//                         {tab==="all"?"All":tab}
//                       </button>
//                     ))}
//                     <div style={{ background:P.bg, border:`1px solid ${P.border}`, borderRadius:8, padding:"5px 11px", fontSize:11, fontWeight:700, color:P.tealDark }}>THIS WEEK ▾</div>
//                   </div>
//                 </div>

//                 <div style={{ overflowX:"auto" }}>
//                   <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
//                     <thead>
//                       <tr style={{ background:P.bg }}>
//                         {["Inward No","Applicant","Subject","Taluka","Department","Priority","Status","Date"].map(h => (
//                           <th key={h} style={{ padding:"9px 11px", textAlign:"left", color:P.tealDark, fontWeight:800, fontSize:10, whiteSpace:"nowrap", letterSpacing:0.3, textTransform:"uppercase", borderBottom:`2px solid ${P.border}` }}>{h}</th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {filtered.length===0 ? (
//                         <tr><td colSpan={8} style={{ textAlign:"center", padding:32, color:P.muted }}>No applications found</td></tr>
//                       ) : filtered.map((item,i) => (
//                         <tr key={i} className="tbl-row" style={{ borderBottom:`1px solid ${P.border}55`, transition:"background .15s" }}>
//                           <td style={{ padding:"9px 11px", color:P.teal, fontWeight:800, whiteSpace:"nowrap", fontFamily:"monospace", fontSize:11 }}>{item.inwardNo||"—"}</td>
//                           <td style={{ padding:"9px 11px", fontWeight:700, color:P.text }}>{item.fullName||"—"}</td>
//                           <td style={{ padding:"9px 11px", color:P.muted, maxWidth:160, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{item.subject||"—"}</td>
//                           <td style={{ padding:"9px 11px", color:P.muted }}>{item.taluka||"—"}</td>
//                           <td style={{ padding:"9px 11px", color:P.muted, whiteSpace:"nowrap" }}>{item.mainDepartment||"—"}</td>
//                           <td style={{ padding:"9px 11px" }}>
//                             <span style={{ fontSize:10, fontWeight:800, padding:"3px 9px", borderRadius:20,
//                               background: item.priority==="Emergency"?"#fde8e8":item.priority==="Urgent"?`${P.gold}22`:`${P.sage}22`,
//                               color: item.priority==="Emergency"?"#d9534f":item.priority==="Urgent"?P.goldDeep:P.sage,
//                               border:`1px solid ${item.priority==="Emergency"?"#f5c6c6":item.priority==="Urgent"?P.gold+"44":P.sage+"44"}`,
//                             }}>
//                               {item.priority||"Normal"}
//                             </span>
//                           </td>
//                           <td style={{ padding:"9px 11px" }}>
//                             <span style={{ fontSize:10, fontWeight:800, padding:"3px 9px", borderRadius:20,
//                               background:statusBg[item.status]||`${P.border}55`,
//                               color:statusColor[item.status]||P.muted,
//                               border:`1px solid ${statusColor[item.status]||P.border}44`,
//                             }}>
//                               {item.status||"—"}
//                             </span>
//                           </td>
//                           <td style={{ padding:"9px 11px", color:P.muted, whiteSpace:"nowrap", fontSize:11 }}>
//                             {item.submissionDate||(item.createdAt?new Date(item.createdAt).toLocaleDateString("en-IN"):"—")}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 <div style={{ marginTop:12, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
//                   <span style={{ fontSize:11, color:P.muted }}>Showing {filtered.length} of {stats.total} applications</span>
//                   <button onClick={()=>navigate("/allapplication")} style={{
//                     background:`linear-gradient(135deg,${P.teal},${P.tealDark})`,
//                     color:"#fff", border:"none", borderRadius:9,
//                     padding:"7px 18px", fontSize:12, fontWeight:800,
//                     cursor:"pointer", boxShadow:`0 4px 14px ${P.teal}55`,
//                     letterSpacing:0.3,
//                   }}>
//                     View All →
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Footer */}
//             <div style={{ textAlign:"center", color:P.muted, fontSize:11, padding:"14px 0 4px" }}>
//               © {new Date().getFullYear()} Vasai-Virar City Municipal Corporation · Janata Darbar System
//               <span style={{ margin:"0 8px", color:P.gold }}>◆</span>
//               स्थापना : ३ जुलै २००९
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }




// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../services/axiosInstance";

// // ─── Palette ──────────────────────────────────────────────────────────────────
// const P = {
//   teal:       "#4CABC1",
//   tealDeep:   "#49ACC3",
//   tealDark:   "#187484",
//   gold:       "#CE9A54",
//   goldDeep:   "#CA9D28",
//   sage:       "#66A962",
//   cream:      "#F5E7C2",
//   card1From:  "#4CABC1",  card1To: "#49ACC3",
//   card2From:  "#CE9A54",  card2To: "#CA9D28",
//   card3From:  "#66A962",  card3To: "#4a8f47",
//   card4From:  "#F5E7C2",  card4To: "#e0c98a",
//   bg:         "#f0f7f9",
//   white:      "#ffffff",
//   text:       "#1a3a40",
//   muted:      "#6b8f95",
//   border:     "#d8edf1",
// };

// // ─── Sparkline SVG ────────────────────────────────────────────────────────────
// function Sparkline({ color = "#fff", data = [30,45,35,60,40,70,55] }) {
//   const w = 90, h = 36;
//   const max = Math.max(...data), min = Math.min(...data);
//   const pts = data.map((v, i) => {
//     const x = (i / (data.length - 1)) * w;
//     const y = h - ((v - min) / (max - min + 1)) * (h - 4) - 2;
//     return `${x},${y}`;
//   }).join(" ");
//   const area = `0,${h} ` + pts + ` ${w},${h}`;
//   const gid = `sg${color.replace('#','')}`;
//   return (
//     <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ opacity:0.75 }}>
//       <defs>
//         <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor={color} stopOpacity="0.45"/>
//           <stop offset="100%" stopColor={color} stopOpacity="0"/>
//         </linearGradient>
//       </defs>
//       <polygon points={area} fill={`url(#${gid})`}/>
//       <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   );
// }

// // ─── Donut ────────────────────────────────────────────────────────────────────
// function Donut({ pct = 46 }) {
//   const r = 46, c = 2*Math.PI*r;
//   const dash = (pct/100)*c;
//   return (
//     <svg width={112} height={112} viewBox="0 0 112 112">
//       <circle cx={56} cy={56} r={r} fill="none" stroke={P.border} strokeWidth={12}/>
//       <circle cx={56} cy={56} r={r} fill="none" stroke={P.teal} strokeWidth={12}
//         strokeDasharray={`${dash} ${c-dash}`} strokeLinecap="round"
//         transform="rotate(-90 56 56)"
//         style={{ transition:"stroke-dasharray 1s ease", filter:`drop-shadow(0 0 8px ${P.teal}99)` }}/>
//       <text x={56} y={52} textAnchor="middle" fontSize={20} fontWeight={900} fill={P.tealDark}>{pct}%</text>
//       <text x={56} y={66} textAnchor="middle" fontSize={9} fill={P.muted} fontWeight={700} letterSpacing={0.8}>RESOLVED</text>
//     </svg>
//   );
// }

// // ─── Mini Bar ─────────────────────────────────────────────────────────────────
// function MiniBar({ data = [], color = P.teal }) {
//   const max = Math.max(...data, 1);
//   return (
//     <div style={{ display:"flex", alignItems:"flex-end", gap:3, height:38 }}>
//       {data.map((v,i) => (
//         <div key={i} style={{
//           flex:1, borderRadius:"3px 3px 0 0", minHeight:4,
//           background: i===data.length-1 ? color : `${color}66`,
//           height:`${(v/max)*100}%`,
//         }}/>
//       ))}
//     </div>
//   );
// }

// // ─── Avatar ───────────────────────────────────────────────────────────────────
// function Avatar({ name = "", size = 36, color = P.teal }) {
//   const initials = name.split(" ").map(n=>n[0]).join("").slice(0,2).toUpperCase();
//   return (
//     <div style={{
//       width:size, height:size, borderRadius:"50%",
//       background:`linear-gradient(135deg,${color},${color}bb)`,
//       display:"flex", alignItems:"center", justifyContent:"center",
//       color:"#fff", fontSize:size*0.35, fontWeight:800,
//       boxShadow:`0 2px 8px ${color}55`, flexShrink:0,
//       border:`2px solid #fff`,
//     }}>
//       {initials || "?"}
//     </div>
//   );
// }

// // ─── Visit Type Badge ─────────────────────────────────────────────────────────
// function VisitBadge({ type }) {
//   const isClinic = type === "Clinic Visit";
//   return (
//     <span style={{
//       fontSize:9.5, fontWeight:800, padding:"2px 8px", borderRadius:20,
//       background: isClinic ? `${P.teal}22` : `${P.gold}22`,
//       color: isClinic ? P.tealDark : P.goldDeep,
//       border:`1px solid ${isClinic ? P.teal+"44" : P.gold+"44"}`,
//       display:"inline-flex", alignItems:"center", gap:4,
//     }}>
//       <span style={{ width:6, height:6, borderRadius:"50%", background: isClinic ? P.teal : P.gold, display:"inline-block" }}/>
//       {type || "Clinic Visit"}
//     </span>
//   );
// }

// // ─── Appointment Card ─────────────────────────────────────────────────────────
// function AppointmentCard({ appt, idx, colors }) {
//   const [hovered, setHovered] = useState(false);
//   const color = colors[idx % colors.length];
//   const name = appt?.fullName || appt?.applicantName || `Citizen ${idx+1}`;
//   const time = appt?.appointmentTime || appt?.submissionDate || "10:00 AM";
//   const type = appt?.visitType || (idx % 2 === 0 ? "Clinic Visit" : "Home Visit");
//   const dept = appt?.mainDepartment || appt?.department || "General";
//   const taluka = appt?.taluka || "Vasai";

//   return (
//     <div
//       onMouseEnter={()=>setHovered(true)}
//       onMouseLeave={()=>setHovered(false)}
//       style={{
//         background: hovered ? `linear-gradient(135deg,${color}18,${color}08)` : P.white,
//         border:`1.5px solid ${hovered ? color+"66" : P.border}`,
//         borderRadius:14,
//         padding:"14px 16px",
//         display:"flex", alignItems:"center", gap:13,
//         transition:"all 0.22s ease",
//         boxShadow: hovered ? `0 6px 24px ${color}28` : "0 2px 8px rgba(0,0,0,0.04)",
//         cursor:"pointer",
//         transform: hovered ? "translateY(-2px)" : "none",
//         position:"relative", overflow:"hidden",
//       }}
//     >
//       {/* Left accent bar */}
//       <div style={{
//         position:"absolute", left:0, top:0, bottom:0, width:3,
//         background:`linear-gradient(180deg,${color},${color}66)`,
//         borderRadius:"14px 0 0 14px",
//         opacity: hovered ? 1 : 0.5,
//         transition:"opacity 0.2s",
//       }}/>

//       <Avatar name={name} size={40} color={color}/>

//       <div style={{ flex:1, minWidth:0 }}>
//         <div style={{ fontWeight:800, fontSize:13, color:P.text, marginBottom:3, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{name}</div>
//         <div style={{ display:"flex", alignItems:"center", gap:6, flexWrap:"wrap" }}>
//           <VisitBadge type={type}/>
//           <span style={{ fontSize:10, color:P.muted, fontWeight:600 }}>{taluka}</span>
//         </div>
//       </div>

//       <div style={{ textAlign:"right", flexShrink:0 }}>
//         <div style={{ fontSize:11, fontWeight:800, color:color, marginBottom:3 }}>{time}</div>
//         <div style={{ fontSize:10, color:P.muted, fontWeight:600, maxWidth:90, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{dept}</div>
//       </div>
//     </div>
//   );
// }

// // ─── Appointments Panel ───────────────────────────────────────────────────────
// function AppointmentsPanel({ appointments = [] }) {
//   const [filter, setFilter] = useState("All");
//   const accentColors = [P.teal, P.gold, P.sage, P.tealDeep, P.goldDeep, P.tealDark, "#CE9A54"];
//   const filters = ["All", "Clinic Visit", "Home Visit"];

//   const mockAppointments = [
//     { fullName:"Rajesh Sharma", visitType:"Clinic Visit", appointmentTime:"09:00 AM", taluka:"Vasai", mainDepartment:"Water Supply" },
//     { fullName:"Priya Patil", visitType:"Home Visit", appointmentTime:"10:30 AM", taluka:"Virar", mainDepartment:"Sanitation" },
//     { fullName:"Suresh Nair", visitType:"Clinic Visit", appointmentTime:"11:00 AM", taluka:"Nalasopara", mainDepartment:"Roads" },
//     { fullName:"Meena Desai", visitType:"Home Visit", appointmentTime:"12:00 PM", taluka:"Vasai", mainDepartment:"Tax" },
//     { fullName:"Anand Joshi", visitType:"Clinic Visit", appointmentTime:"02:00 PM", taluka:"Virar", mainDepartment:"Building" },
//     { fullName:"Kavita More", visitType:"Clinic Visit", appointmentTime:"03:30 PM", taluka:"Vasai", mainDepartment:"Health" },
//   ];

//   const data = appointments.length > 0 ? appointments : mockAppointments;
//   const filtered = filter === "All" ? data : data.filter(a => (a.visitType || "Clinic Visit") === filter);

//   const clinicCount = data.filter(a => (a.visitType || "Clinic Visit") === "Clinic Visit").length;
//   const homeCount = data.filter(a => a.visitType === "Home Visit").length;

//   return (
//     <div className="dc" style={{
//       animationDelay:".3s",
//       background: P.white,
//       borderRadius:16,
//       padding:"20px 22px",
//       boxShadow:"0 4px 20px rgba(0,0,0,0.05)",
//       border:`1px solid ${P.border}`,
//     }}>
//       {/* Header */}
//       <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
//         <div>
//           <h3 style={{ margin:0, fontSize:15, fontWeight:900, color:P.tealDark }}>Today's Appointments</h3>
//           <p style={{ margin:"3px 0 0", fontSize:11, color:P.muted }}>Citizens booked for today</p>
//         </div>
//         <div style={{ display:"flex", gap:8, alignItems:"center" }}>
//           {filters.map(f => (
//             <button key={f} onClick={()=>setFilter(f)} style={{
//               border:`1px solid ${filter===f ? P.teal : P.border}`,
//               background: filter===f ? `linear-gradient(135deg,${P.teal},${P.tealDark})` : P.white,
//               color: filter===f ? "#fff" : P.muted,
//               borderRadius:8, padding:"5px 13px",
//               fontSize:11, fontWeight:700, cursor:"pointer",
//               boxShadow: filter===f ? `0 4px 12px ${P.teal}44` : "none",
//               transition:"all .2s",
//             }}>
//               {f}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Stats mini row */}
//       <div style={{ display:"flex", gap:10, marginBottom:16 }}>
//         {[
//           { label:"Total Today", value:data.length, color:P.teal, icon:"📋" },
//           { label:"Clinic Visit", value:clinicCount, color:P.tealDeep, icon:"🏥" },
//           { label:"Home Visit", value:homeCount, color:P.gold, icon:"🏠" },
//         ].map(({ label, value, color, icon }) => (
//           <div key={label} style={{
//             flex:1, background:`linear-gradient(135deg,${color}18,${color}08)`,
//             border:`1px solid ${color}33`, borderRadius:12,
//             padding:"10px 14px", display:"flex", alignItems:"center", gap:10,
//           }}>
//             <span style={{ fontSize:20 }}>{icon}</span>
//             <div>
//               <div style={{ fontSize:18, fontWeight:900, color, lineHeight:1 }}>{value}</div>
//               <div style={{ fontSize:9.5, color:P.muted, fontWeight:700, marginTop:2, textTransform:"uppercase", letterSpacing:0.4 }}>{label}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Two-column appointment grid */}
//       <div style={{
//         display:"grid",
//         gridTemplateColumns:"1fr 1fr",
//         gap:10,
//         maxHeight:320,
//         overflowY:"auto",
//         paddingRight:2,
//       }}>
//         {filtered.length === 0 ? (
//           <div style={{ gridColumn:"1/-1", textAlign:"center", color:P.muted, fontSize:13, padding:"30px 0" }}>
//             No appointments found
//           </div>
//         ) : filtered.map((appt, i) => (
//           <AppointmentCard key={i} appt={appt} idx={i} colors={accentColors}/>
//         ))}
//       </div>

//       {/* Footer */}
//       <div style={{ marginTop:14, display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:`1px solid ${P.border}`, paddingTop:12 }}>
//         <div style={{ display:"flex", alignItems:"center", gap:6 }}>
//           <span style={{ width:8, height:8, borderRadius:"50%", background:P.teal, display:"inline-block", animation:"pulse 2s infinite", boxShadow:`0 0 8px ${P.teal}` }}/>
//           <span style={{ fontSize:11, color:P.muted, fontWeight:600 }}>Live · Updated just now</span>
//         </div>
//         <div style={{ display:"flex", gap:14 }}>
//           <div style={{ display:"flex", alignItems:"center", gap:5 }}>
//             <span style={{ width:10, height:10, borderRadius:"50%", background:P.teal, display:"inline-block" }}/>
//             <span style={{ fontSize:10.5, color:P.muted, fontWeight:600 }}>Clinic Visit</span>
//           </div>
//           <div style={{ display:"flex", alignItems:"center", gap:5 }}>
//             <span style={{ width:10, height:10, borderRadius:"50%", background:P.gold, display:"inline-block" }}/>
//             <span style={{ fontSize:10.5, color:P.muted, fontWeight:600 }}>Home Visit</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Dashboard ────────────────────────────────────────────────────────────────
// export default function Dashboard() {
//   const navigate = useNavigate();
//   const { user } = useSelector((s) => s.auth);

//   const [stats, setStats]               = useState({ total:0, pending:0, resolved:0, inProgress:0 });
//   const [recent, setRecent]             = useState([]);
//   const [talukaData, setTalukaData]     = useState({});
//   const [appointments, setAppointments] = useState([]);
//   const [peopleOnline, setPeopleOnline] = useState(0);
//   const [weeklyData, setWeeklyData]     = useState([4,7,5,9,12,8,15]);
//   const [loading, setLoading]           = useState(true);
//   const [activeTab, setActiveTab]       = useState("all");

//   useEffect(() => {
//     fetchDashboard();
//     const iv = setInterval(() => setPeopleOnline(Math.floor(12+Math.random()*8)), 4000);
//     setPeopleOnline(Math.floor(12+Math.random()*8));
//     return () => clearInterval(iv);
//   }, []);

//   const fetchDashboard = async () => {
//     setLoading(true);
//     try {
//       const res  = await axiosInstance.get("/inwardAll");
//       const data = res.data?.data || [];
//       const total      = data.length;
//       const pending    = data.filter(d=>d.status==="Pending").length;
//       const resolved   = data.filter(d=>d.status==="Resolved").length;
//       const inProgress = data.filter(d=>d.status==="In Progress").length;
//       setStats({ total, pending, resolved, inProgress });

//       const tMap = {};
//       data.forEach(d => { if(d.taluka) tMap[d.taluka]=(tMap[d.taluka]||0)+1; });
//       setTalukaData(tMap);

//       const now=Date.now(), wk=Array(7).fill(0);
//       data.forEach(d => {
//         const diff=Math.floor((now-new Date(d.createdAt))/86400000);
//         if(diff>=0&&diff<7) wk[6-diff]++;
//       });
//       setWeeklyData(wk.map(v=>v||Math.floor(2+Math.random()*6)));
//       setRecent(data.slice(0,8));

//       // Try fetching appointments
//       try {
//         const apptRes = await axiosInstance.get("/appointments");
//         setAppointments(apptRes.data?.data || []);
//       } catch { setAppointments([]); }

//     } catch(e) { console.error(e); }
//     finally { setLoading(false); }
//   };

//   const resolutionRate = stats.total>0 ? Math.round((stats.resolved/stats.total)*100) : 0;
//   const statusColor = { "Pending":P.gold,"Resolved":P.sage,"In Progress":P.teal,"Rejected":"#d9534f" };
//   const statusBg    = { "Pending":`${P.gold}22`,"Resolved":`${P.sage}22`,"In Progress":`${P.teal}22`,"Rejected":"#fde8e8" };
//   const filtered    = activeTab==="all" ? recent : recent.filter(r=>r.status===activeTab);

//   const analyticCards = [
//     { label:"TOTAL APPLICATIONS", value:stats.total.toLocaleString(),  sub:"▲ 12% last week", from:P.card1From, to:P.card1To, spark:[40,55,45,70,60,85,75], dark:false },
//     { label:"PENDING",            value:stats.pending,                  sub:"▼ 5% last week",  from:P.card2From, to:P.card2To, spark:[30,50,35,60,40,70,55], dark:false },
//     { label:"RESOLVED",           value:stats.resolved,                 sub:"▲ 8% last week",  from:P.card3From, to:P.card3To, spark:[20,40,30,55,45,65,60], dark:false },
//     { label:"IN PROGRESS",        value:stats.inProgress,               sub:"— ongoing",        from:P.card4From, to:P.card4To, spark:[15,30,25,40,35,50,45], dark:true  },
//   ];

//   return (
//     <div style={{ minHeight:"100vh", background:P.bg, fontFamily:"'Nunito','Segoe UI',sans-serif" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
//         @keyframes fadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:none} }
//         @keyframes pulse  { 0%,100%{opacity:1} 50%{opacity:.35} }
//         .dc { animation: fadeUp .4s ease both; }
//         .tbl-row:hover { background:${P.teal}12 !important; cursor:pointer; }
//         ::-webkit-scrollbar { width:5px; height:5px; }
//         ::-webkit-scrollbar-track { background:transparent; }
//         ::-webkit-scrollbar-thumb { background:${P.border}; border-radius:99px; }
//         * { box-sizing:border-box; }
//       `}</style>

//       <div style={{ padding:"24px 28px", maxWidth:1440, margin:"0 auto" }}>

//         {/* ── Top accent bar ── */}
//         <div style={{ height:4, background:`linear-gradient(90deg,${P.tealDark},${P.teal},${P.gold},${P.goldDeep},${P.cream},${P.goldDeep},${P.teal})`, borderRadius:99, marginBottom:24 }}/>

//         {/* ── Page header ── */}
//         <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:22 }}>
//           <div>
//             <h2 style={{ margin:0, fontSize:20, fontWeight:900, color:P.tealDark, letterSpacing:-0.3 }}>
//               Analytic Overview
//             </h2>
//             <p style={{ margin:"3px 0 0", fontSize:12, color:P.muted }}>
//               Good {new Date().getHours()<12?"Morning":new Date().getHours()<17?"Afternoon":"Evening"}, {user?.fullName?.split(" ")[0]||"Admin"} 👋 — Here's what's happening today.
//             </p>
//           </div>
//           <div style={{ display:"flex", alignItems:"center", gap:12 }}>
//             <div style={{ display:"flex", alignItems:"center", gap:7, background:P.white, border:`1px solid ${P.border}`, borderRadius:10, padding:"7px 14px" }}>
//               <span style={{ width:8, height:8, borderRadius:"50%", background:P.sage, display:"inline-block", animation:"pulse 2s infinite", boxShadow:`0 0 8px ${P.sage}` }}/>
//               <span style={{ fontSize:12, fontWeight:700, color:P.tealDark }}>{peopleOnline} Online</span>
//             </div>
//             <div style={{ background:P.white, border:`1px solid ${P.border}`, borderRadius:9, padding:"7px 14px", fontSize:11, fontWeight:700, color:P.tealDark }}>
//               THIS YEAR ▾
//             </div>
//           </div>
//         </div>

//         {loading ? (
//           <div style={{ textAlign:"center", padding:80, color:P.teal, fontWeight:700 }}>Loading dashboard…</div>
//         ) : (
//           <>
//             {/* ── 4 Colorful Stat Cards ── */}
//             <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16, marginBottom:20 }}>
//               {analyticCards.map((card, i) => (
//                 <div key={i} className="dc" style={{
//                   animationDelay:`${i*0.07}s`,
//                   borderRadius:16,
//                   background:`linear-gradient(135deg,${card.from},${card.to})`,
//                   padding:"18px 20px",
//                   boxShadow:`0 8px 28px ${card.from}55`,
//                   position:"relative", overflow:"hidden",
//                   minHeight:110,
//                 }}>
//                   <div style={{ position:"absolute", top:-20, right:-20, width:80, height:80, borderRadius:"50%", background:"rgba(255,255,255,0.13)" }}/>
//                   <div style={{ position:"absolute", bottom:-14, right:10, width:50, height:50, borderRadius:"50%", background:"rgba(255,255,255,0.09)" }}/>
//                   <div style={{ fontSize:9.5, fontWeight:800, color:card.dark?"#6b5020":"rgba(255,255,255,0.88)", letterSpacing:0.9, textTransform:"uppercase", marginBottom:5 }}>{card.label}</div>
//                   <div style={{ fontSize:28, fontWeight:900, color:card.dark?P.tealDark:"#fff", letterSpacing:-1, marginBottom:3 }}>{card.value}</div>
//                   <div style={{ fontSize:10, color:card.dark?"#8a6830":"rgba(255,255,255,0.72)", fontWeight:600, marginBottom:8 }}>{card.sub}</div>
//                   <Sparkline color={card.dark?"#9a7828":"#fff"} data={card.spark}/>
//                 </div>
//               ))}
//             </div>

//             {/* ── Appointments + Status (replacing Revenue + Status) ── */}
//             <div style={{ display:"grid", gridTemplateColumns:"1fr 290px", gap:18, marginBottom:18 }}>

//               {/* 🆕 Appointments Panel */}
//               <AppointmentsPanel appointments={appointments}/>

//               {/* Status Panel */}
//               <div className="dc" style={{ animationDelay:".37s", background:P.white, borderRadius:16, padding:"20px 20px", boxShadow:"0 4px 20px rgba(0,0,0,0.05)", border:`1px solid ${P.border}`, display:"flex", flexDirection:"column" }}>
//                 <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
//                   <h3 style={{ margin:0, fontSize:15, fontWeight:900, color:P.tealDark }}>Status</h3>
//                   <div style={{ background:P.bg, border:`1px solid ${P.border}`, borderRadius:7, padding:"4px 10px", fontSize:10.5, fontWeight:700, color:P.tealDark }}>TODAY ▾</div>
//                 </div>

//                 <div style={{ display:"flex", justifyContent:"center", margin:"6px 0" }}>
//                   <Donut pct={resolutionRate}/>
//                 </div>

//                 <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8, marginTop:8 }}>
//                   {[
//                     { label:"BOOKED",      value:stats.total,      color:P.teal },
//                     { label:"ON PROGRESS", value:stats.inProgress, color:P.gold },
//                     { label:"CANCELLED",   value:stats.pending,    color:"#d9534f" },
//                   ].map(({ label, value, color }) => (
//                     <div key={label} style={{ textAlign:"center", padding:"10px 4px", background:P.bg, borderRadius:10, border:`1px solid ${P.border}` }}>
//                       <div style={{ fontSize:16, fontWeight:900, color }}>{value.toLocaleString()}</div>
//                       <div style={{ fontSize:8.5, fontWeight:800, color:P.muted, letterSpacing:0.4, textTransform:"uppercase", marginTop:3 }}>{label}</div>
//                     </div>
//                   ))}
//                 </div>

//                 <div style={{ marginTop:16 }}>
//                   <div style={{ fontSize:12, fontWeight:800, color:P.tealDark, marginBottom:8 }}>📈 Weekly Trend</div>
//                   <MiniBar data={weeklyData} color={P.teal}/>
//                   <div style={{ display:"flex", justifyContent:"space-between", marginTop:5 }}>
//                     {["M","T","W","T","F","S","S"].map((d,i) => (
//                       <span key={i} style={{ fontSize:9, color:P.muted, flex:1, textAlign:"center", fontWeight:700 }}>{d}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* ── Tracking + Recent Orders ── */}
//             <div style={{ display:"grid", gridTemplateColumns:"260px 1fr", gap:18, marginBottom:8 }}>

//               {/* Tracking / Taluka */}
//               <div className="dc" style={{ animationDelay:".44s", background:P.white, borderRadius:16, padding:"20px 20px", boxShadow:"0 4px 20px rgba(0,0,0,0.05)", border:`1px solid ${P.border}` }}>
//                 <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
//                   <h3 style={{ margin:0, fontSize:14, fontWeight:900, color:P.tealDark }}>Tracking</h3>
//                   <div style={{ background:P.bg, border:`1px solid ${P.border}`, borderRadius:7, padding:"3px 9px", fontSize:10, fontWeight:700, color:P.tealDark }}>THIS YEAR ▾</div>
//                 </div>
//                 <div style={{ display:"flex", justifyContent:"space-between", padding:"0 2px 8px", borderBottom:`1px solid ${P.border}`, marginBottom:6 }}>
//                   <span style={{ fontSize:9.5, fontWeight:800, color:P.muted, textTransform:"uppercase", letterSpacing:0.5 }}>Region</span>
//                   <span style={{ fontSize:9.5, fontWeight:800, color:P.muted, textTransform:"uppercase", letterSpacing:0.5 }}>Amount</span>
//                 </div>
//                 {Object.entries(talukaData).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([taluka,count],i) => {
//                   const cols = [P.teal,P.gold,P.sage,P.tealDeep,P.goldDeep,P.tealDark];
//                   const c = cols[i%cols.length];
//                   return (
//                     <div key={taluka} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"8px 2px", borderBottom:`1px solid ${P.border}55` }}>
//                       <div style={{ display:"flex", alignItems:"center", gap:8 }}>
//                         <div style={{ width:7, height:7, borderRadius:"50%", background:c }}/>
//                         <span style={{ fontSize:12, fontWeight:600, color:P.text }}>{taluka}</span>
//                       </div>
//                       <span style={{ fontSize:12, fontWeight:800, color:c }}>{count.toLocaleString()}</span>
//                     </div>
//                   );
//                 })}
//                 {Object.keys(talukaData).length===0 && (
//                   <div style={{ textAlign:"center", color:P.muted, fontSize:12, padding:"20px 0" }}>No data yet</div>
//                 )}
//               </div>

//               {/* Recent Order Table */}
//               <div className="dc" style={{ animationDelay:".51s", background:P.white, borderRadius:16, padding:"20px 22px", boxShadow:"0 4px 20px rgba(0,0,0,0.05)", border:`1px solid ${P.border}` }}>
//                 <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14, flexWrap:"wrap", gap:8 }}>
//                   <div>
//                     <h3 style={{ margin:0, fontSize:15, fontWeight:900, color:P.tealDark }}>Recent Order</h3>
//                     <p style={{ margin:"2px 0 0", fontSize:11, color:P.muted }}>Latest inward complaints</p>
//                   </div>
//                   <div style={{ display:"flex", gap:8, alignItems:"center", flexWrap:"wrap" }}>
//                     {["all","Pending","Resolved","In Progress"].map(tab => (
//                       <button key={tab} onClick={()=>setActiveTab(tab)} style={{
//                         border:`1px solid ${activeTab===tab?P.teal:P.border}`,
//                         background: activeTab===tab?`linear-gradient(135deg,${P.teal},${P.tealDark})`:P.white,
//                         color: activeTab===tab?"#fff":P.muted,
//                         borderRadius:8, padding:"5px 13px",
//                         fontSize:11, fontWeight:700, cursor:"pointer",
//                         boxShadow: activeTab===tab?`0 4px 12px ${P.teal}44`:"none",
//                         transition:"all .2s",
//                       }}>
//                         {tab==="all"?"All":tab}
//                       </button>
//                     ))}
//                     <div style={{ background:P.bg, border:`1px solid ${P.border}`, borderRadius:8, padding:"5px 11px", fontSize:11, fontWeight:700, color:P.tealDark }}>THIS WEEK ▾</div>
//                   </div>
//                 </div>

//                 <div style={{ overflowX:"auto" }}>
//                   <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
//                     <thead>
//                       <tr style={{ background:P.bg }}>
//                         {["Inward No","Applicant","Subject","Taluka","Department","Priority","Status","Date"].map(h => (
//                           <th key={h} style={{ padding:"9px 11px", textAlign:"left", color:P.tealDark, fontWeight:800, fontSize:10, whiteSpace:"nowrap", letterSpacing:0.3, textTransform:"uppercase", borderBottom:`2px solid ${P.border}` }}>{h}</th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {filtered.length===0 ? (
//                         <tr><td colSpan={8} style={{ textAlign:"center", padding:32, color:P.muted }}>No applications found</td></tr>
//                       ) : filtered.map((item,i) => (
//                         <tr key={i} className="tbl-row" style={{ borderBottom:`1px solid ${P.border}55`, transition:"background .15s" }}>
//                           <td style={{ padding:"9px 11px", color:P.teal, fontWeight:800, whiteSpace:"nowrap", fontFamily:"monospace", fontSize:11 }}>{item.inwardNo||"—"}</td>
//                           <td style={{ padding:"9px 11px", fontWeight:700, color:P.text }}>{item.fullName||"—"}</td>
//                           <td style={{ padding:"9px 11px", color:P.muted, maxWidth:160, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{item.subject||"—"}</td>
//                           <td style={{ padding:"9px 11px", color:P.muted }}>{item.taluka||"—"}</td>
//                           <td style={{ padding:"9px 11px", color:P.muted, whiteSpace:"nowrap" }}>{item.mainDepartment||"—"}</td>
//                           <td style={{ padding:"9px 11px" }}>
//                             <span style={{ fontSize:10, fontWeight:800, padding:"3px 9px", borderRadius:20,
//                               background: item.priority==="Emergency"?"#fde8e8":item.priority==="Urgent"?`${P.gold}22`:`${P.sage}22`,
//                               color: item.priority==="Emergency"?"#d9534f":item.priority==="Urgent"?P.goldDeep:P.sage,
//                               border:`1px solid ${item.priority==="Emergency"?"#f5c6c6":item.priority==="Urgent"?P.gold+"44":P.sage+"44"}`,
//                             }}>
//                               {item.priority||"Normal"}
//                             </span>
//                           </td>
//                           <td style={{ padding:"9px 11px" }}>
//                             <span style={{ fontSize:10, fontWeight:800, padding:"3px 9px", borderRadius:20,
//                               background:statusBg[item.status]||`${P.border}55`,
//                               color:statusColor[item.status]||P.muted,
//                               border:`1px solid ${statusColor[item.status]||P.border}44`,
//                             }}>
//                               {item.status||"—"}
//                             </span>
//                           </td>
//                           <td style={{ padding:"9px 11px", color:P.muted, whiteSpace:"nowrap", fontSize:11 }}>
//                             {item.submissionDate||(item.createdAt?new Date(item.createdAt).toLocaleDateString("en-IN"):"—")}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 <div style={{ marginTop:12, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
//                   <span style={{ fontSize:11, color:P.muted }}>Showing {filtered.length} of {stats.total} applications</span>
//                   <button onClick={()=>navigate("/allapplication")} style={{
//                     background:`linear-gradient(135deg,${P.teal},${P.tealDark})`,
//                     color:"#fff", border:"none", borderRadius:9,
//                     padding:"7px 18px", fontSize:12, fontWeight:800,
//                     cursor:"pointer", boxShadow:`0 4px 14px ${P.teal}55`,
//                     letterSpacing:0.3,
//                   }}>
//                     View All →
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Footer */}
//             <div style={{ textAlign:"center", color:P.muted, fontSize:11, padding:"14px 0 4px" }}>
//               © {new Date().getFullYear()} Vasai-Virar City Municipal Corporation · Janata Darbar System
//               <span style={{ margin:"0 8px", color:P.gold }}>◆</span>
//               स्थापना : ३ जुलै २००९
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }






// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../services/axiosInstance";
// import citizenAxios from "../services/citizenAxios";
// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// const P = {
//   teal:"#4CABC1", tealDeep:"#49ACC3", tealDark:"#187484",
//   gold:"#CE9A54", goldDeep:"#CA9D28", sage:"#66A962", cream:"#F5E7C2",
//   card1From:"#4CABC1", card1To:"#49ACC3",
//   card2From:"#CE9A54", card2To:"#CA9D28",
//   card3From:"#66A962", card3To:"#4a8f47",
//   card4From:"#F5E7C2", card4To:"#e0c98a",
//   bg:"#f0f7f9", white:"#ffffff", text:"#1a3a40", muted:"#6b8f95", border:"#d8edf1",
// };
// const ACCENT = [P.teal, P.gold, P.sage, P.tealDeep, P.goldDeep, P.tealDark, P.gold, P.teal];

// const STATUS_CFG = {
//   pending:      {bg:"#fef9c3",color:"#92400e",border:"#fde68a",dot:"#f59e0b",label:"Pending"},
//   approved:     {bg:"#dcfce7",color:"#166534",border:"#86efac",dot:"#16a34a",label:"Approved"},
//   rejected:     {bg:"#fee2e2",color:"#991b1b",border:"#fca5a5",dot:"#ef4444",label:"Rejected"},
//   "in progress":{bg:"#dbeafe",color:"#1e40af",border:"#93c5fd",dot:"#3b82f6",label:"In Progress"},
//   resolved:     {bg:"#f0fdf4",color:"#166534",border:"#bbf7d0",dot:"#22c55e",label:"Resolved"},
// };
// const sc = s => STATUS_CFG[(s||"pending").toLowerCase()] || STATUS_CFG.pending;

// // ── Sparkline ────────────────────────────────────────────────────────────────
// function Sparkline({ color="#fff", data=[30,45,35,60,40,70,55] }) {
//   const w=90,h=36,max=Math.max(...data),min=Math.min(...data);
//   const pts=data.map((v,i)=>`${(i/(data.length-1))*w},${h-((v-min)/(max-min+1))*(h-4)-2}`).join(" ");
//   const gid=`sg${color.replace('#','')}`;
//   return (
//     <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{opacity:.75}}>
//       <defs><linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
//         <stop offset="0%" stopColor={color} stopOpacity=".45"/>
//         <stop offset="100%" stopColor={color} stopOpacity="0"/>
//       </linearGradient></defs>
//       <polygon points={`0,${h} ${pts} ${w},${h}`} fill={`url(#${gid})`}/>
//       <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   );
// }

// function Donut({ pct=0 }) {
//   const r=46,c=2*Math.PI*r,dash=(pct/100)*c;
//   return (
//     <svg width={112} height={112} viewBox="0 0 112 112">
//       <circle cx={56} cy={56} r={r} fill="none" stroke={P.border} strokeWidth={12}/>
//       <circle cx={56} cy={56} r={r} fill="none" stroke={P.teal} strokeWidth={12}
//         strokeDasharray={`${dash} ${c-dash}`} strokeLinecap="round" transform="rotate(-90 56 56)"
//         style={{transition:"stroke-dasharray 1s ease"}}/>
//       <text x={56} y={52} textAnchor="middle" fontSize={20} fontWeight={900} fill={P.tealDark}>{pct}%</text>
//       <text x={56} y={66} textAnchor="middle" fontSize={9} fill={P.muted} fontWeight={700} letterSpacing={.8}>RESOLVED</text>
//     </svg>
//   );
// }

// function MiniBar({ data=[], color=P.teal }) {
//   const max=Math.max(...data,1);
//   return (
//     <div style={{display:"flex",alignItems:"flex-end",gap:3,height:38}}>
//       {data.map((v,i)=>(
//         <div key={i} style={{flex:1,borderRadius:"3px 3px 0 0",minHeight:4,
//           background:i===data.length-1?color:`${color}66`,height:`${(v/max)*100}%`}}/>
//       ))}
//     </div>
//   );
// }

// function Av({ name="", size=28, color=P.teal }) {
//   const ini=name.split(" ").filter(Boolean).map(n=>n[0]).join("").slice(0,2).toUpperCase()||"?";
//   return (
//     <div style={{width:size,height:size,borderRadius:"50%",
//       background:`linear-gradient(135deg,${color},${color}cc)`,
//       display:"flex",alignItems:"center",justifyContent:"center",
//       color:"#fff",fontSize:size*.34,fontWeight:800,flexShrink:0,
//       border:"2px solid #fff",boxShadow:`0 2px 6px ${color}44`}}>
//       {ini}
//     </div>
//   );
// }

// function toMin(t="08:00 AM") {
//   if(!t) return 0;
//   const [tp,per]=(t||"08:00 AM").split(" ");
//   const [h,m]=(tp||"08:00").split(":").map(Number);
//   let H=h||8; if(per==="PM"&&H!==12)H+=12; if(per==="AM"&&H===12)H=0;
//   return Math.max(0,(H*60+(m||0))-(8*60));
// }

// function getWeekDates(base) {
//   const d=new Date(base), day=d.getDay(), diff=day===0?-6:1-day;
//   const mon=new Date(d); mon.setDate(d.getDate()+diff);
//   return Array.from({length:7},(_,i)=>{ const dt=new Date(mon); dt.setDate(mon.getDate()+i); return dt; });
// }

// function isSameDay(a,b) {
//   return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate();
// }

// const DAYS_SHORT=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

// // ── Fixed-position Popup (renders at viewport level, never clipped) ──────────
// function ApptPopup({ appt, color, onClose, triggerRect }) {
//   const cfg = sc(appt.status);
//   const isClinic = (appt.visitType||"Clinic Visit")==="Clinic Visit";
//   const popupRef = useRef(null);

//   // Calculate position from triggerRect — avoid viewport edges
//   const [pos, setPos] = useState({top:0, left:0});
//   useEffect(()=>{
//     if(!triggerRect||!popupRef.current) return;
//     const PW=242, PH=300;
//     const vw=window.innerWidth, vh=window.innerHeight;
//     let left=triggerRect.right+10;
//     let top=triggerRect.top;
//     // If popup would go off right edge → show to the left
//     if(left+PW > vw-10) left=triggerRect.left-PW-10;
//     // If popup would go off bottom → shift up
//     if(top+PH > vh-10) top=Math.max(10, vh-PH-10);
//     // If still off left
//     if(left < 10) left=10;
//     setPos({top, left});
//   },[triggerRect]);

//   // Close on outside click or scroll
//   useEffect(()=>{
//     const close=(e)=>{
//       if(popupRef.current && !popupRef.current.contains(e.target)) onClose();
//     };
//     // Close on scroll anywhere
//     const scroll=()=>onClose();
//     document.addEventListener("mousedown",close);
//     window.addEventListener("scroll",scroll,true);
//     return ()=>{
//       document.removeEventListener("mousedown",close);
//       window.removeEventListener("scroll",scroll,true);
//     };
//   },[onClose]);

//   return (
//     <div ref={popupRef} style={{
//       position:"fixed",
//       top:pos.top, left:pos.left,
//       zIndex:9999,
//       background:P.white,
//       borderRadius:14,
//       boxShadow:"0 12px 40px rgba(0,0,0,0.22)",
//       border:`1px solid ${P.border}`,
//       width:242,
//       overflow:"hidden",
//       animation:"fadeUp .15s ease",
//     }}>
//       {/* Header */}
//       <div style={{background:`linear-gradient(135deg,${color},${color}cc)`,padding:"11px 13px",position:"relative"}}>
//         <button onClick={onClose} style={{position:"absolute",top:7,right:7,
//           background:"rgba(255,255,255,0.25)",border:"none",borderRadius:"50%",
//           width:22,height:22,cursor:"pointer",color:"#fff",fontSize:14,fontWeight:800,
//           display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1}}>✕</button>
//         <div style={{display:"flex",alignItems:"center",gap:9}}>
//           <Av name={appt.fullName} size={34} color={color}/>
//           <div>
//             <div style={{fontSize:12.5,fontWeight:900,color:"#fff",lineHeight:1.2}}>{appt.fullName||"—"}</div>
//             <div style={{fontSize:9.5,color:"rgba(255,255,255,0.82)",marginTop:2,fontWeight:600}}>{appt.slotTime||"—"}</div>
//           </div>
//         </div>
//       </div>
//       {/* Body */}
//       <div style={{padding:"11px 13px"}}>
//         {[
//           ["📱",appt.mobileNumber||"—"],
//           ["📍","Ward: "+(appt.ward||"—")],
//           ["🏥",isClinic?"Clinic Visit":"Home Visit"],
//           ["🎯",(appt.purpose||"—").slice(0,40)+((appt.purpose||"").length>40?"…":"")],
//           ["👥","Visitors: "+(appt.numberOfVisitors||1)],
//         ].map(([icon,val],i)=>(
//           <div key={i} style={{display:"flex",gap:7,marginBottom:5,fontSize:11,color:P.muted,fontWeight:600,lineHeight:1.4}}>
//             <span style={{fontSize:12,flexShrink:0}}>{icon}</span>
//             <span>{val}</span>
//           </div>
//         ))}
//         <div style={{marginTop:7,display:"inline-flex",alignItems:"center",gap:5,
//           background:cfg.bg,color:cfg.color,border:`1px solid ${cfg.border}`,
//           padding:"2px 10px",borderRadius:20,fontSize:9.5,fontWeight:800}}>
//           <span style={{width:6,height:6,borderRadius:"50%",background:cfg.dot,display:"inline-block"}}/>
//           {cfg.label}
//         </div>
//         {appt.tokenId&&(
//           <div style={{marginTop:5,fontSize:9,color:P.muted,fontWeight:600}}>Token: {appt.tokenId}</div>
//         )}
//         <div style={{marginTop:9,borderTop:`1px solid ${P.border}`,paddingTop:7,textAlign:"right"}}>
//           <span style={{fontSize:11,color:P.teal,fontWeight:800,cursor:"pointer"}}>View Details ↗</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── Appointment Card ──────────────────────────────────────────────────────────
// function ApptCard({ appt, color }) {
//   const [triggerRect, setTriggerRect] = useState(null);
//   const cardRef = useRef(null);
//   const isClinic=(appt.visitType||"Clinic Visit")==="Clinic Visit";

//   const handleClick = useCallback((e)=>{
//     e.stopPropagation();
//     if(triggerRect){
//       setTriggerRect(null);
//     } else {
//       // Measure card position in viewport
//       const rect=cardRef.current?.getBoundingClientRect();
//       setTriggerRect(rect||null);
//     }
//   },[triggerRect]);

//   const handleClose = useCallback(()=>setTriggerRect(null),[]);

//   return (
//     <>
//       <div ref={cardRef} onClick={handleClick} style={{
//         background:triggerRect?`linear-gradient(135deg,${color}33,${color}18)`:`${color}14`,
//         border:`1.5px solid ${triggerRect?color:color+"55"}`,
//         borderRadius:8,padding:"6px 9px",
//         cursor:"pointer",transition:"all 0.14s",
//         boxShadow:triggerRect?`0 4px 14px ${color}33`:"none",
//         marginBottom:4,
//         userSelect:"none",
//       }}>
//         <div style={{display:"flex",alignItems:"center",gap:6}}>
//           <Av name={appt.fullName} size={22} color={color}/>
//           <div style={{flex:1,minWidth:0}}>
//             <div style={{fontSize:11,fontWeight:800,color:P.text,
//               overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
//               {appt.fullName||"—"}
//             </div>
//             <div style={{fontSize:9,color:color,fontWeight:700,marginTop:1,
//               display:"flex",alignItems:"center",gap:4,flexWrap:"wrap"}}>
//               {appt.slotTime||"—"}
//               <span style={{display:"inline-flex",alignItems:"center",gap:2,
//                 color:isClinic?P.tealDark:P.goldDeep,fontWeight:700}}>
//                 <span style={{width:5,height:5,borderRadius:"50%",
//                   background:isClinic?P.teal:P.gold,display:"inline-block"}}/>
//                 {isClinic?"Clinic":"Home"}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Popup rendered at fixed position — never clipped by parent overflow */}
//       {triggerRect && (
//         <ApptPopup
//           appt={appt}
//           color={color}
//           onClose={handleClose}
//           triggerRect={triggerRect}
//         />
//       )}
//     </>
//   );
// }

// // ── Calendar Panel ────────────────────────────────────────────────────────────
// function CalendarPanel({ appointments=[], mayorSlots=[], loading=false }) {
//   const [view,    setView]    = useState("week");
//   const [weekBase,setWeekBase]= useState(new Date());
//   const [search,  setSearch]  = useState("");

//   const weekDates = getWeekDates(weekBase);
//   const today     = new Date();

//   const filtered = appointments.filter(a=>{
//     if(!search) return true;
//     const q=search.toLowerCase();
//     return (a.fullName||"").toLowerCase().includes(q)||
//            (a.purpose||"").toLowerCase().includes(q)||
//            (a.ward||"").toLowerCase().includes(q)||
//            (a.mobileNumber||"").includes(q);
//   });

//   function appsForDate(dt) {
//     const ds=`${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,"0")}-${String(dt.getDate()).padStart(2,"0")}`;
//     return filtered.filter(a=>(a.preferredDate||"").slice(0,10)===ds);
//   }

//   const todayStr=`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;
//   const dayAppts=filtered.filter(a=>(a.preferredDate||"").slice(0,10)===todayStr);

//   const clinicCount=filtered.filter(a=>(a.visitType||"Clinic Visit")==="Clinic Visit").length;
//   const homeCount=filtered.filter(a=>a.visitType==="Home Visit").length;

//   const monthLabel=weekDates[0].toLocaleDateString("en-IN",{month:"long",year:"numeric"});

//   const hours=Array.from({length:10},(_,i)=>8+i);
//   const fmtH=h=>h<12?`${h} AM`:h===12?"12 PM":`${h-12} PM`;

//   return (
//     <div className="dc" style={{animationDelay:".3s",background:P.white,borderRadius:16,
//       overflow:"hidden",boxShadow:"0 4px 24px rgba(0,0,0,0.07)",border:`1px solid ${P.border}`,
//       display:"flex",flexDirection:"column"}}>

//       {/* ── Header ── */}
//       <div style={{padding:"13px 16px 10px",borderBottom:`1px solid ${P.border}`}}>
//         {/* Row 1 */}
//         <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",
//           marginBottom:10,gap:8,flexWrap:"wrap"}}>
//           <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
//             <div>
//               <h3 style={{margin:0,fontSize:14,fontWeight:900,color:P.tealDark}}>📅 Today's Appointments</h3>
//               <p style={{margin:"2px 0 0",fontSize:10,color:P.muted,fontWeight:600}}>
//                 {today.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}
//               </p>
//             </div>
//             <div style={{background:`linear-gradient(135deg,${P.teal},${P.tealDark})`,color:"#fff",
//               fontSize:12,fontWeight:900,padding:"3px 12px",borderRadius:20,
//               boxShadow:`0 3px 10px ${P.teal}44`,whiteSpace:"nowrap"}}>
//               {filtered.length} All Appointments
//             </div>
//           </div>
//           <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
//             {/* Search */}
//             <div style={{position:"relative"}}>
//               <span style={{position:"absolute",left:9,top:"50%",transform:"translateY(-50%)",fontSize:11,color:P.muted}}>🔍</span>
//               <input value={search} onChange={e=>setSearch(e.target.value)}
//                 placeholder="Search..." style={{border:`1.5px solid ${P.border}`,borderRadius:8,
//                   padding:"5px 10px 5px 26px",fontSize:11,color:P.text,
//                   outline:"none",background:P.bg,width:130,fontFamily:"inherit"}}/>
//             </div>
//             {/* Day/Week toggle */}
//             <div style={{display:"flex",background:P.bg,border:`1px solid ${P.border}`,borderRadius:9,padding:2}}>
//               {["Day","Week"].map(v=>(
//                 <button key={v} onClick={()=>setView(v.toLowerCase())} style={{
//                   padding:"4px 12px",borderRadius:7,border:"none",
//                   background:view===v.toLowerCase()?`linear-gradient(135deg,${P.teal},${P.tealDark})`:"transparent",
//                   color:view===v.toLowerCase()?"#fff":P.muted,
//                   fontSize:11,fontWeight:800,cursor:"pointer",transition:"all .15s"}}>
//                   {v}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Row 2: nav + legend */}
//         <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:6}}>
//           {view==="week" ? (
//             <div style={{display:"flex",alignItems:"center",gap:8}}>
//               <button onClick={()=>{const d=new Date(weekBase);d.setDate(d.getDate()-7);setWeekBase(d);}}
//                 style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,
//                   width:28,height:28,cursor:"pointer",fontSize:14,color:P.tealDark,fontWeight:800,lineHeight:1}}>‹</button>
//               <span style={{fontSize:12,fontWeight:800,color:P.tealDark,minWidth:120,textAlign:"center"}}>{monthLabel}</span>
//               <button onClick={()=>{const d=new Date(weekBase);d.setDate(d.getDate()+7);setWeekBase(d);}}
//                 style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,
//                   width:28,height:28,cursor:"pointer",fontSize:14,color:P.tealDark,fontWeight:800,lineHeight:1}}>›</button>
//             </div>
//           ) : <div/>}
//           <div style={{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"}}>
//             {[{dot:P.teal,label:"Clinic Visit"},{dot:P.gold,label:"Home Visit"}].map(({dot,label})=>(
//               <span key={label} style={{display:"flex",alignItems:"center",gap:4,fontSize:10,color:P.muted,fontWeight:700}}>
//                 <span style={{width:8,height:8,borderRadius:"50%",background:dot,display:"inline-block"}}/>{label}
//               </span>
//             ))}
//             <span style={{color:P.border}}>|</span>
//             {[
//               {label:"Today",value:dayAppts.length,color:P.teal},
//               {label:"Clinic",value:clinicCount,color:P.tealDeep},
//               {label:"Home",value:homeCount,color:P.gold},
//             ].map(({label,value,color})=>(
//               <span key={label} style={{background:`${color}18`,border:`1px solid ${color}44`,
//                 borderRadius:20,padding:"1px 9px",fontSize:10,fontWeight:800,color,whiteSpace:"nowrap"}}>
//                 {value} {label}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mayor strip */}
//       {mayorSlots.length>0&&(
//         <div style={{display:"flex",gap:6,flexWrap:"wrap",padding:"5px 16px 5px",
//           background:`${P.cream}88`,borderBottom:`1px solid ${P.border}`}}>
//           <span style={{fontSize:9,fontWeight:800,color:P.tealDark,textTransform:"uppercase",letterSpacing:.8,alignSelf:"center"}}>
//             Mayor Available:
//           </span>
//           {mayorSlots.map((s,i)=>(
//             <span key={i} style={{fontSize:9.5,fontWeight:700,color:P.tealDark,
//               background:`${P.teal}1a`,border:`1px solid ${P.teal}33`,borderRadius:20,padding:"2px 9px"}}>
//               {s.start} – {s.end}
//             </span>
//           ))}
//         </div>
//       )}

//       {/* ── Calendar body — overflow:auto WITHOUT overflow:hidden on parent so popup is not clipped ── */}
//       {loading ? (
//         <div style={{textAlign:"center",padding:"48px 0",color:P.muted}}>
//           <div style={{width:26,height:26,border:`3px solid ${P.border}`,borderTopColor:P.teal,
//             borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 10px"}}/>
//           Loading appointments…
//         </div>
//       ) : view==="week" ? (
//         /* WEEK VIEW — key: overflow:auto on this wrapper, NOT on parent */
//         <div style={{overflowX:"auto",overflowY:"auto",maxHeight:380}}>
//           <div style={{minWidth:580}}>
//             {/* Day headers */}
//             <div style={{display:"grid",gridTemplateColumns:"50px repeat(7,1fr)",
//               borderBottom:`1.5px solid ${P.border}`,background:P.bg,
//               position:"sticky",top:0,zIndex:4}}>
//               <div style={{borderRight:`1px solid ${P.border}`}}/>
//               {weekDates.map((dt,i)=>{
//                 const isToday=isSameDay(dt,today);
//                 const cnt=appsForDate(dt).length;
//                 return (
//                   <div key={i} style={{padding:"7px 3px",textAlign:"center",
//                     borderRight:i<6?`1px solid ${P.border}`:undefined,
//                     background:isToday?`${P.teal}0e`:"transparent"}}>
//                     <div style={{fontSize:9.5,fontWeight:700,color:isToday?P.teal:P.muted,letterSpacing:.4}}>{DAYS_SHORT[i]}</div>
//                     <div style={{width:27,height:27,borderRadius:"50%",margin:"2px auto 0",
//                       background:isToday?`linear-gradient(135deg,${P.teal},${P.tealDark})`:"transparent",
//                       display:"flex",alignItems:"center",justifyContent:"center",
//                       fontSize:12,fontWeight:900,color:isToday?"#fff":P.text}}>
//                       {dt.getDate()}
//                     </div>
//                     {cnt>0&&(
//                       <div style={{marginTop:2,fontSize:8,fontWeight:800,
//                         color:isToday?"#fff":P.teal,
//                         background:isToday?`${P.teal}cc`:`${P.teal}18`,
//                         borderRadius:20,padding:"1px 5px",display:"inline-block"}}>
//                         {cnt}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Hour rows */}
//             {hours.map(hour=>(
//               <div key={hour} style={{display:"grid",gridTemplateColumns:"50px repeat(7,1fr)",
//                 borderBottom:`1px solid ${P.border}55`,minHeight:54}}>
//                 <div style={{borderRight:`1px solid ${P.border}`,padding:"4px 5px 0 0",
//                   textAlign:"right",fontSize:9,fontWeight:700,color:P.muted,
//                   background:P.bg,position:"sticky",left:0,zIndex:2}}>
//                   {fmtH(hour)}
//                 </div>
//                 {weekDates.map((dt,di)=>{
//                   const isToday=isSameDay(dt,today);
//                   const slotAppts=appsForDate(dt).filter(a=>{
//                     const m=toMin(a.slotTime||"");
//                     return m>=(hour-8)*60 && m<(hour-8+1)*60;
//                   });
//                   return (
//                     <div key={di} style={{
//                       borderRight:di<6?`1px solid ${P.border}55`:undefined,
//                       padding:"3px 3px",
//                       background:isToday?`${P.teal}05`:"transparent",
//                     }}>
//                       {slotAppts.map((appt,ai)=>{
//                         const gIdx=filtered.indexOf(appt);
//                         return <ApptCard key={ai} appt={appt} color={ACCENT[gIdx%ACCENT.length]}/>;
//                       })}
//                     </div>
//                   );
//                 })}
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         /* DAY VIEW */
//         <div style={{overflowY:"auto",maxHeight:380}}>
//           {dayAppts.length===0 ? (
//             <div style={{textAlign:"center",padding:"44px 0",color:P.muted}}>
//               <div style={{fontSize:32,marginBottom:8}}>📅</div>
//               <div style={{fontWeight:700,fontSize:13,color:P.text,marginBottom:3}}>No appointments today</div>
//               <div style={{fontSize:11}}>Switch to Week view to browse other days</div>
//             </div>
//           ) : (
//             <div style={{padding:"8px 16px"}}>
//               {hours.map(hour=>{
//                 const label=hour<12?`${hour}:00 AM`:hour===12?"12:00 PM":`${hour-12}:00 PM`;
//                 const hAppts=dayAppts.filter(a=>{
//                   const m=toMin(a.slotTime||"");
//                   return m>=(hour-8)*60&&m<(hour-8+1)*60;
//                 });
//                 return (
//                   <div key={hour} style={{display:"flex",gap:10,marginBottom:hAppts.length?8:2}}>
//                     <div style={{width:56,fontSize:9,fontWeight:hAppts.length?800:600,
//                       color:hAppts.length?P.teal:P.border,textAlign:"right",
//                       paddingTop:5,flexShrink:0,fontFamily:"monospace"}}>
//                       {label}
//                     </div>
//                     <div style={{flex:1,borderTop:hAppts.length?`none`:`1px solid ${P.border}33`,
//                       paddingTop:hAppts.length?0:6}}>
//                       {hAppts.length>0&&(
//                         <div style={{display:"grid",
//                           gridTemplateColumns:`repeat(${Math.min(hAppts.length,3)},1fr)`,gap:6}}>
//                           {hAppts.map((appt,ai)=>{
//                             const gIdx=filtered.indexOf(appt);
//                             return <ApptCard key={ai} appt={appt} color={ACCENT[gIdx%ACCENT.length]}/>;
//                           })}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       )}

//       {/* Footer */}
//       <div style={{borderTop:`1px solid ${P.border}`,padding:"6px 16px",
//         display:"flex",alignItems:"center",justifyContent:"space-between",background:P.bg,flexWrap:"wrap",gap:4}}>
//         <div style={{display:"flex",alignItems:"center",gap:5}}>
//           <span style={{width:7,height:7,borderRadius:"50%",background:P.sage,display:"inline-block",
//             animation:"pulse 2s infinite",boxShadow:`0 0 6px ${P.sage}`}}/>
//           <span style={{fontSize:9.5,color:P.muted,fontWeight:700}}>Live · 8:00 AM – 6:00 PM</span>
//         </div>
//         <span style={{fontSize:9.5,color:P.muted}}>{filtered.length} total appointments</span>
//       </div>
//     </div>
//   );
// }

// // ─── Dashboard ────────────────────────────────────────────────────────────────
// export default function Dashboard() {
//   const navigate  = useNavigate();
//   const { user }  = useSelector(s=>s.auth);

//   const [stats,        setStats]        = useState({total:0,pending:0,resolved:0,inProgress:0});
//   const [recent,       setRecent]       = useState([]);
//   const [talukaData,   setTalukaData]   = useState({});
//   const [weeklyData,   setWeeklyData]   = useState([4,7,5,9,12,8,15]);
//   const [loading,      setLoading]      = useState(true);
//   const [activeTab,    setActiveTab]    = useState("all");
//   const [appointments, setAppointments] = useState([]);
//   const [apptLoading,  setApptLoading]  = useState(true);
//   const [mayorSlots,   setMayorSlots]   = useState([]);
//   const [peopleOnline, setPeopleOnline] = useState(0);

//   const fetchDashboard = useCallback(async()=>{
//     setLoading(true);
//     try{
//       const res=await axiosInstance.get("/inwardAll");
//       const data=res.data?.data||[];
//       setStats({total:data.length,
//         pending:data.filter(d=>d.status==="Pending").length,
//         resolved:data.filter(d=>d.status==="Resolved").length,
//         inProgress:data.filter(d=>d.status==="In Progress").length});
//       const tMap={};
//       data.forEach(d=>{if(d.taluka) tMap[d.taluka]=(tMap[d.taluka]||0)+1;});
//       setTalukaData(tMap);
//       const now=Date.now(),wk=Array(7).fill(0);
//       data.forEach(d=>{const diff=Math.floor((now-new Date(d.createdAt))/86400000);if(diff>=0&&diff<7)wk[6-diff]++;});
//       setWeeklyData(wk.map(v=>v||Math.floor(2+Math.random()*6)));
//       setRecent(data.slice(0,8));
//     }catch(e){console.error(e);}
//     finally{setLoading(false);}
//   },[]);

//   const fetchAppointments = useCallback(async()=>{
//     setApptLoading(true);
//     try{
//       const res=await citizenAxios.get("/citizen/admin/all-appointments");
//       if(res.data.success) setAppointments(res.data.appointments||[]);
//     }catch(e){console.error(e);setAppointments([]);}
//     finally{setApptLoading(false);}
//   },[]);

//   const fetchMayorSlots = useCallback(async()=>{
//     try{
//       const res=await axios.get(`${BASE_URL}/api/availability/get`);
//       if(res.data.success){
//         const ts=new Date().toISOString().slice(0,10);
//         const rec=res.data.data.find(a=>a.date===ts);
//         setMayorSlots(rec?.timeSlots||[]);
//       }
//     }catch(e){console.error(e);}
//   },[]);

//   useEffect(()=>{
//     fetchDashboard(); fetchAppointments(); fetchMayorSlots();
//     const iv=setInterval(()=>setPeopleOnline(Math.floor(12+Math.random()*8)),4000);
//     setPeopleOnline(Math.floor(12+Math.random()*8));
//     return()=>clearInterval(iv);
//   },[fetchDashboard,fetchAppointments,fetchMayorSlots]);

//   const resRate=stats.total>0?Math.round((stats.resolved/stats.total)*100):0;
//   const statusColor={"Pending":P.gold,"Resolved":P.sage,"In Progress":P.teal,"Rejected":"#d9534f"};
//   const statusBg={"Pending":`${P.gold}22`,"Resolved":`${P.sage}22`,"In Progress":`${P.teal}22`,"Rejected":"#fde8e8"};
//   const filteredRecent=activeTab==="all"?recent:recent.filter(r=>r.status===activeTab);

//   const cards=[
//     {label:"TOTAL APPLICATIONS",value:stats.total.toLocaleString(),sub:"▲ 12% last week",from:P.card1From,to:P.card1To,spark:[40,55,45,70,60,85,75],dark:false},
//     {label:"PENDING",           value:stats.pending,               sub:"▼ 5% last week", from:P.card2From,to:P.card2To,spark:[30,50,35,60,40,70,55],dark:false},
//     {label:"RESOLVED",          value:stats.resolved,              sub:"▲ 8% last week", from:P.card3From,to:P.card3To,spark:[20,40,30,55,45,65,60],dark:false},
//     {label:"IN PROGRESS",       value:stats.inProgress,            sub:"— ongoing",       from:P.card4From,to:P.card4To,spark:[15,30,25,40,35,50,45],dark:true},
//   ];

//   return (
//     <div style={{minHeight:"100vh",background:P.bg,fontFamily:"'Nunito','Segoe UI',sans-serif"}}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
//         @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
//         @keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
//         @keyframes spin{to{transform:rotate(360deg)}}
//         .dc{animation:fadeUp .4s ease both;}
//         .tbl-row:hover{background:${P.teal}12!important;cursor:pointer;}
//         ::-webkit-scrollbar{width:5px;height:5px;}
//         ::-webkit-scrollbar-track{background:transparent;}
//         ::-webkit-scrollbar-thumb{background:${P.border};border-radius:99px;}
//         *{box-sizing:border-box;}

//         /* ── Mobile responsive ── */
//         .dash-grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
//         .dash-grid-cal{display:grid;grid-template-columns:1fr 288px;gap:18px;}
//         .dash-grid-track{display:grid;grid-template-columns:260px 1fr;gap:18px;}

//         @media(max-width:1100px){
//           .dash-grid-cal{grid-template-columns:1fr!important;}
//           .dash-grid-track{grid-template-columns:1fr!important;}
//         }
//         @media(max-width:800px){
//           .dash-grid-4{grid-template-columns:repeat(2,1fr)!important;gap:10px!important;}
//         }
//         @media(max-width:480px){
//           .dash-grid-4{grid-template-columns:1fr!important;}
//           .dash-pad{padding:14px 12px!important;}
//         }
//       `}</style>

//       <div className="dash-pad" style={{padding:"20px 24px",maxWidth:1440,margin:"0 auto"}}>

//         {/* Accent bar */}
//         <div style={{height:4,background:`linear-gradient(90deg,${P.tealDark},${P.teal},${P.gold},${P.goldDeep},${P.cream},${P.goldDeep},${P.teal})`,borderRadius:99,marginBottom:20}}/>

//         {/* Header */}
//         <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20,flexWrap:"wrap",gap:10}}>
//           <div>
//             <h2 style={{margin:0,fontSize:19,fontWeight:900,color:P.tealDark,letterSpacing:-.3}}>Analytic Overview</h2>
//             <p style={{margin:"3px 0 0",fontSize:11,color:P.muted}}>
//               Good {new Date().getHours()<12?"Morning":new Date().getHours()<17?"Afternoon":"Evening"}, {user?.fullName?.split(" ")[0]||"Admin"} 👋
//             </p>
//           </div>
//           <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
//             <button onClick={()=>{fetchDashboard();fetchAppointments();fetchMayorSlots();}}
//               style={{background:P.white,border:`1px solid ${P.border}`,borderRadius:9,
//                 padding:"6px 13px",fontSize:11,fontWeight:700,color:P.tealDark,cursor:"pointer"}}>
//               ↻ Refresh
//             </button>
//             <div style={{display:"flex",alignItems:"center",gap:6,background:P.white,
//               border:`1px solid ${P.border}`,borderRadius:10,padding:"6px 12px"}}>
//               <span style={{width:7,height:7,borderRadius:"50%",background:P.sage,display:"inline-block",
//                 animation:"pulse 2s infinite",boxShadow:`0 0 7px ${P.sage}`}}/>
//               <span style={{fontSize:11,fontWeight:700,color:P.tealDark}}>{peopleOnline} Online</span>
//             </div>
//             <div style={{background:P.white,border:`1px solid ${P.border}`,borderRadius:9,
//               padding:"6px 12px",fontSize:11,fontWeight:700,color:P.tealDark}}>THIS YEAR ▾</div>
//           </div>
//         </div>

//         {loading?(
//           <div style={{textAlign:"center",padding:80,color:P.teal,fontWeight:700}}>Loading dashboard…</div>
//         ):(
//           <>
//             {/* ── 4 Stat Cards ── */}
//             <div className="dash-grid-4" style={{marginBottom:18}}>
//               {cards.map((card,i)=>(
//                 <div key={i} className="dc" style={{animationDelay:`${i*.07}s`,borderRadius:16,
//                   background:`linear-gradient(135deg,${card.from},${card.to})`,
//                   padding:"16px 18px",boxShadow:`0 8px 28px ${card.from}55`,
//                   position:"relative",overflow:"hidden",minHeight:105}}>
//                   <div style={{position:"absolute",top:-18,right:-18,width:72,height:72,borderRadius:"50%",background:"rgba(255,255,255,0.13)"}}/>
//                   <div style={{position:"absolute",bottom:-12,right:8,width:44,height:44,borderRadius:"50%",background:"rgba(255,255,255,0.09)"}}/>
//                   <div style={{fontSize:9,fontWeight:800,color:card.dark?"#6b5020":"rgba(255,255,255,.88)",letterSpacing:.9,textTransform:"uppercase",marginBottom:4}}>{card.label}</div>
//                   <div style={{fontSize:26,fontWeight:900,color:card.dark?P.tealDark:"#fff",letterSpacing:-1,marginBottom:2}}>{card.value}</div>
//                   <div style={{fontSize:9.5,color:card.dark?"#8a6830":"rgba(255,255,255,.72)",fontWeight:600,marginBottom:7}}>{card.sub}</div>
//                   <Sparkline color={card.dark?"#9a7828":"#fff"} data={card.spark}/>
//                 </div>
//               ))}
//             </div>

//             {/* ── Calendar + Status ── */}
//             <div className="dash-grid-cal" style={{marginBottom:18}}>
//               <CalendarPanel appointments={appointments} mayorSlots={mayorSlots} loading={apptLoading}/>

//               {/* Status Panel */}
//               <div className="dc" style={{animationDelay:".37s",background:P.white,borderRadius:16,
//                 padding:"16px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",
//                 border:`1px solid ${P.border}`,display:"flex",flexDirection:"column"}}>
//                 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
//                   <h3 style={{margin:0,fontSize:13,fontWeight:900,color:P.tealDark}}>Status</h3>
//                   <div style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,padding:"3px 8px",fontSize:9.5,fontWeight:700,color:P.tealDark}}>TODAY ▾</div>
//                 </div>
//                 <div style={{display:"flex",justifyContent:"center",margin:"2px 0 6px"}}>
//                   <Donut pct={resRate}/>
//                 </div>
//                 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:10}}>
//                   {[{l:"BOOKED",v:stats.total,c:P.teal},{l:"PROGRESS",v:stats.inProgress,c:P.gold},{l:"PENDING",v:stats.pending,c:"#d9534f"}].map(({l,v,c})=>(
//                     <div key={l} style={{textAlign:"center",padding:"8px 3px",background:P.bg,borderRadius:9,border:`1px solid ${P.border}`}}>
//                       <div style={{fontSize:15,fontWeight:900,color:c}}>{v}</div>
//                       <div style={{fontSize:7,fontWeight:800,color:P.muted,letterSpacing:.4,textTransform:"uppercase",marginTop:2}}>{l}</div>
//                     </div>
//                   ))}
//                 </div>

//                 <div style={{borderTop:`1px solid ${P.border}`,paddingTop:8,marginBottom:8}}>
//                   <div style={{fontSize:10,fontWeight:800,color:P.tealDark,marginBottom:6}}>📅 Appointments</div>
//                   {[
//                     {l:"Total",v:appointments.length,c:P.teal},
//                     {l:"Approved",v:appointments.filter(a=>(a.status||"").toLowerCase()==="approved").length,c:P.sage},
//                     {l:"Pending",v:appointments.filter(a=>(a.status||"").toLowerCase()==="pending").length,c:P.gold},
//                     {l:"Clinic Visit",v:appointments.filter(a=>(a.visitType||"Clinic Visit")==="Clinic Visit").length,c:P.teal},
//                     {l:"Home Visit",v:appointments.filter(a=>a.visitType==="Home Visit").length,c:P.gold},
//                   ].map(({l,v,c})=>(
//                     <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"2.5px 0"}}>
//                       <span style={{display:"flex",alignItems:"center",gap:4,fontSize:9.5,color:P.muted,fontWeight:600}}>
//                         <span style={{width:5,height:5,borderRadius:"50%",background:c,display:"inline-block"}}/>{l}
//                       </span>
//                       <span style={{fontSize:10.5,fontWeight:800,color:c}}>{v}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {mayorSlots.length>0&&(
//                   <div style={{borderTop:`1px solid ${P.border}`,paddingTop:7,marginBottom:8}}>
//                     <div style={{fontSize:10,fontWeight:800,color:P.tealDark,marginBottom:5}}>🏛 Mayor Today</div>
//                     {mayorSlots.map((s,i)=>(
//                       <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"2px 0",fontSize:9.5,color:P.muted,fontWeight:600}}>
//                         <span>Slot {i+1}</span>
//                         <span style={{color:P.tealDark,fontWeight:800}}>{s.start} – {s.end}</span>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 <div style={{borderTop:`1px solid ${P.border}`,paddingTop:8}}>
//                   <div style={{fontSize:10.5,fontWeight:800,color:P.tealDark,marginBottom:6}}>📈 Weekly Trend</div>
//                   <MiniBar data={weeklyData} color={P.teal}/>
//                   <div style={{display:"flex",justifyContent:"space-between",marginTop:3}}>
//                     {["M","T","W","T","F","S","S"].map((d,i)=>(
//                       <span key={i} style={{fontSize:8.5,color:P.muted,flex:1,textAlign:"center",fontWeight:700}}>{d}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* ── Tracking + Recent ── */}
//             <div className="dash-grid-track" style={{marginBottom:8}}>
//               <div className="dc" style={{animationDelay:".44s",background:P.white,borderRadius:16,
//                 padding:"18px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",border:`1px solid ${P.border}`}}>
//                 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
//                   <h3 style={{margin:0,fontSize:13,fontWeight:900,color:P.tealDark}}>Tracking</h3>
//                   <div style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,padding:"3px 8px",fontSize:9.5,fontWeight:700,color:P.tealDark}}>THIS YEAR ▾</div>
//                 </div>
//                 <div style={{display:"flex",justifyContent:"space-between",padding:"0 2px 7px",borderBottom:`1px solid ${P.border}`,marginBottom:5}}>
//                   <span style={{fontSize:9,fontWeight:800,color:P.muted,textTransform:"uppercase",letterSpacing:.5}}>Region</span>
//                   <span style={{fontSize:9,fontWeight:800,color:P.muted,textTransform:"uppercase",letterSpacing:.5}}>Amount</span>
//                 </div>
//                 {Object.entries(talukaData).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([taluka,count],i)=>{
//                   const cols=[P.teal,P.gold,P.sage,P.tealDeep,P.goldDeep,P.tealDark];
//                   const c=cols[i%cols.length];
//                   return (
//                     <div key={taluka} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 2px",borderBottom:`1px solid ${P.border}55`}}>
//                       <div style={{display:"flex",alignItems:"center",gap:7}}>
//                         <div style={{width:7,height:7,borderRadius:"50%",background:c}}/>
//                         <span style={{fontSize:11.5,fontWeight:600,color:P.text}}>{taluka}</span>
//                       </div>
//                       <span style={{fontSize:11.5,fontWeight:800,color:c}}>{count}</span>
//                     </div>
//                   );
//                 })}
//                 {!Object.keys(talukaData).length&&(
//                   <div style={{textAlign:"center",color:P.muted,fontSize:12,padding:"18px 0"}}>No data yet</div>
//                 )}
//               </div>

//               {/* Recent Applications */}
//               <div className="dc" style={{animationDelay:".51s",background:P.white,borderRadius:16,
//                 padding:"18px 20px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",border:`1px solid ${P.border}`}}>
//                 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,flexWrap:"wrap",gap:8}}>
//                   <div>
//                     <h3 style={{margin:0,fontSize:14,fontWeight:900,color:P.tealDark}}>Recent Applications</h3>
//                     <p style={{margin:"2px 0 0",fontSize:10,color:P.muted}}>Latest inward complaints</p>
//                   </div>
//                   <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
//                     {["all","Pending","Resolved","In Progress"].map(tab=>(
//                       <button key={tab} onClick={()=>setActiveTab(tab)} style={{
//                         border:`1px solid ${activeTab===tab?P.teal:P.border}`,
//                         background:activeTab===tab?`linear-gradient(135deg,${P.teal},${P.tealDark})`:P.white,
//                         color:activeTab===tab?"#fff":P.muted,
//                         borderRadius:8,padding:"4px 11px",fontSize:10.5,fontWeight:700,cursor:"pointer",
//                         boxShadow:activeTab===tab?`0 4px 12px ${P.teal}44`:"none",transition:"all .2s"}}>
//                         {tab==="all"?"All":tab}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//                 <div style={{overflowX:"auto"}}>
//                   <table style={{width:"100%",borderCollapse:"collapse",fontSize:11.5}}>
//                     <thead>
//                       <tr style={{background:P.bg}}>
//                         {["Inward No","Applicant","Subject","Taluka","Department","Priority","Status","Date"].map(h=>(
//                           <th key={h} style={{padding:"8px 10px",textAlign:"left",color:P.tealDark,fontWeight:800,
//                             fontSize:9.5,whiteSpace:"nowrap",letterSpacing:.3,textTransform:"uppercase",
//                             borderBottom:`2px solid ${P.border}`}}>{h}</th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {filteredRecent.length===0?(
//                         <tr><td colSpan={8} style={{textAlign:"center",padding:28,color:P.muted}}>No applications found</td></tr>
//                       ):filteredRecent.map((item,i)=>(
//                         <tr key={i} className="tbl-row"
//                           onClick={()=>navigate("/allapplication")}
//                           style={{borderBottom:`1px solid ${P.border}55`,transition:"background .15s"}}>
//                           <td style={{padding:"8px 10px",color:P.teal,fontWeight:800,whiteSpace:"nowrap",fontFamily:"monospace",fontSize:10.5}}>{item.inwardNo||"—"}</td>
//                           <td style={{padding:"8px 10px",fontWeight:700,color:P.text}}>{item.fullName||"—"}</td>
//                           <td style={{padding:"8px 10px",color:P.muted,maxWidth:130,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.subject||"—"}</td>
//                           <td style={{padding:"8px 10px",color:P.muted}}>{item.taluka||"—"}</td>
//                           <td style={{padding:"8px 10px",color:P.muted,whiteSpace:"nowrap"}}>{item.mainDepartment||"—"}</td>
//                           <td style={{padding:"8px 10px"}}>
//                             <span style={{fontSize:9.5,fontWeight:800,padding:"2px 8px",borderRadius:20,
//                               background:item.priority==="Emergency"?"#fde8e8":item.priority==="Urgent"?`${P.gold}22`:`${P.sage}22`,
//                               color:item.priority==="Emergency"?"#d9534f":item.priority==="Urgent"?P.goldDeep:P.sage,
//                               border:`1px solid ${item.priority==="Emergency"?"#f5c6c6":item.priority==="Urgent"?P.gold+"44":P.sage+"44"}`}}>
//                               {item.priority||"Normal"}
//                             </span>
//                           </td>
//                           <td style={{padding:"8px 10px"}}>
//                             <span style={{fontSize:9.5,fontWeight:800,padding:"2px 8px",borderRadius:20,
//                               background:statusBg[item.status]||`${P.border}55`,
//                               color:statusColor[item.status]||P.muted,
//                               border:`1px solid ${statusColor[item.status]||P.border}44`}}>
//                               {item.status||"—"}
//                             </span>
//                           </td>
//                           <td style={{padding:"8px 10px",color:P.muted,whiteSpace:"nowrap",fontSize:10.5}}>
//                             {item.submissionDate||(item.createdAt?new Date(item.createdAt).toLocaleDateString("en-IN"):"—")}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//                 <div style={{marginTop:10,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
//                   <span style={{fontSize:10.5,color:P.muted}}>Showing {filteredRecent.length} of {stats.total}</span>
//                   <div style={{display:"flex",gap:8}}>
//                     <button onClick={()=>navigate("/allapplication")} style={{
//                       background:`linear-gradient(135deg,${P.teal},${P.tealDark})`,
//                       color:"#fff",border:"none",borderRadius:9,padding:"6px 14px",
//                       fontSize:11,fontWeight:800,cursor:"pointer",boxShadow:`0 4px 14px ${P.teal}55`}}>
//                       All Applications →
//                     </button>
//                     <button onClick={()=>navigate("/applicationcitizens")} style={{
//                       background:`linear-gradient(135deg,${P.gold},${P.goldDeep})`,
//                       color:"#fff",border:"none",borderRadius:9,padding:"6px 14px",
//                       fontSize:11,fontWeight:800,cursor:"pointer",boxShadow:`0 4px 14px ${P.gold}55`}}>
//                       Citizen Appts →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Footer */}
//             <div style={{textAlign:"center",color:P.muted,fontSize:10.5,padding:"12px 0 4px"}}>
//               © {new Date().getFullYear()} Vasai-Virar City Municipal Corporation · Janata Darbar System
//               <span style={{margin:"0 8px",color:P.gold}}>◆</span>
//               स्थापना : ३ जुलै २००९
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }




// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../services/axiosInstance";
// import citizenAxios from "../services/citizenAxios";
// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// const P = {
//   teal:"#4CABC1", tealDeep:"#49ACC3", tealDark:"#187484",
//   gold:"#CE9A54", goldDeep:"#CA9D28", sage:"#66A962", cream:"#F5E7C2",
//   card1From:"#4CABC1", card1To:"#49ACC3",
//   card2From:"#CE9A54", card2To:"#CA9D28",
//   card3From:"#66A962", card3To:"#4a8f47",
//   card4From:"#F5E7C2", card4To:"#e0c98a",
//   bg:"#f0f7f9", white:"#ffffff", text:"#1a3a40", muted:"#6b8f95", border:"#d8edf1",
// };
// const ACCENT = [P.teal, P.gold, P.sage, P.tealDeep, P.goldDeep, P.tealDark, P.gold, P.teal];

// const STATUS_CFG = {
//   pending:      {bg:"#fef9c3",color:"#92400e",border:"#fde68a",dot:"#f59e0b",label:"Pending"},
//   approved:     {bg:"#dcfce7",color:"#166534",border:"#86efac",dot:"#16a34a",label:"Approved"},
//   rejected:     {bg:"#fee2e2",color:"#991b1b",border:"#fca5a5",dot:"#ef4444",label:"Rejected"},
//   "in progress":{bg:"#dbeafe",color:"#1e40af",border:"#93c5fd",dot:"#3b82f6",label:"In Progress"},
//   resolved:     {bg:"#f0fdf4",color:"#166534",border:"#bbf7d0",dot:"#22c55e",label:"Resolved"},
// };
// const sc = s => STATUS_CFG[(s||"pending").toLowerCase()] || STATUS_CFG.pending;

// // ── Sparkline ────────────────────────────────────────────────────────────────
// function Sparkline({ color="#fff", data=[30,45,35,60,40,70,55] }) {
//   const w=90,h=36,max=Math.max(...data),min=Math.min(...data);
//   const pts=data.map((v,i)=>`${(i/(data.length-1))*w},${h-((v-min)/(max-min+1))*(h-4)-2}`).join(" ");
//   const gid=`sg${color.replace('#','')}`;
//   return (
//     <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{opacity:.75}}>
//       <defs><linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
//         <stop offset="0%" stopColor={color} stopOpacity=".45"/>
//         <stop offset="100%" stopColor={color} stopOpacity="0"/>
//       </linearGradient></defs>
//       <polygon points={`0,${h} ${pts} ${w},${h}`} fill={`url(#${gid})`}/>
//       <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   );
// }

// function Donut({ pct=0 }) {
//   const r=46,c=2*Math.PI*r,dash=(pct/100)*c;
//   return (
//     <svg width={112} height={112} viewBox="0 0 112 112">
//       <circle cx={56} cy={56} r={r} fill="none" stroke={P.border} strokeWidth={12}/>
//       <circle cx={56} cy={56} r={r} fill="none" stroke={P.teal} strokeWidth={12}
//         strokeDasharray={`${dash} ${c-dash}`} strokeLinecap="round" transform="rotate(-90 56 56)"
//         style={{transition:"stroke-dasharray 1s ease"}}/>
//       <text x={56} y={52} textAnchor="middle" fontSize={20} fontWeight={900} fill={P.tealDark}>{pct}%</text>
//       <text x={56} y={66} textAnchor="middle" fontSize={9} fill={P.muted} fontWeight={700} letterSpacing={.8}>RESOLVED</text>
//     </svg>
//   );
// }

// function MiniBar({ data=[], color=P.teal }) {
//   const max=Math.max(...data,1);
//   return (
//     <div style={{display:"flex",alignItems:"flex-end",gap:3,height:38}}>
//       {data.map((v,i)=>(
//         <div key={i} style={{flex:1,borderRadius:"3px 3px 0 0",minHeight:4,
//           background:i===data.length-1?color:`${color}66`,height:`${(v/max)*100}%`}}/>
//       ))}
//     </div>
//   );
// }

// function Av({ name="", size=28, color=P.teal }) {
//   const ini=name.split(" ").filter(Boolean).map(n=>n[0]).join("").slice(0,2).toUpperCase()||"?";
//   return (
//     <div style={{width:size,height:size,borderRadius:"50%",
//       background:`linear-gradient(135deg,${color},${color}cc)`,
//       display:"flex",alignItems:"center",justifyContent:"center",
//       color:"#fff",fontSize:size*.34,fontWeight:800,flexShrink:0,
//       border:"2.5px solid rgba(255,255,255,0.9)",boxShadow:`0 3px 10px ${color}55`}}>
//       {ini}
//     </div>
//   );
// }

// function toMin(t="08:00 AM") {
//   if(!t) return 0;
//   const [tp,per]=(t||"08:00 AM").split(" ");
//   const [h,m]=(tp||"08:00").split(":").map(Number);
//   let H=h||8; if(per==="PM"&&H!==12)H+=12; if(per==="AM"&&H===12)H=0;
//   return Math.max(0,(H*60+(m||0))-(8*60));
// }

// function getWeekDates(base) {
//   const d=new Date(base), day=d.getDay(), diff=day===0?-6:1-day;
//   const mon=new Date(d); mon.setDate(d.getDate()+diff);
//   return Array.from({length:7},(_,i)=>{ const dt=new Date(mon); dt.setDate(mon.getDate()+i); return dt; });
// }
// function isSameDay(a,b) {
//   return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate();
// }
// const DAYS_SHORT=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

// // ── LARGE MODAL POPUP — rendered at root via fixed overlay ────────────────────
// function ApptModal({ appt, color, onClose }) {
//   const cfg = sc(appt.status);
//   const isClinic = (appt.visitType||"Clinic Visit")==="Clinic Visit";

//   // Prevent body scroll while modal open
//   useEffect(()=>{
//     document.body.style.overflow="hidden";
//     return()=>{ document.body.style.overflow=""; };
//   },[]);

//   // Close on Escape
//   useEffect(()=>{
//     const fn=e=>{ if(e.key==="Escape") onClose(); };
//     document.addEventListener("keydown",fn);
//     return()=>document.removeEventListener("keydown",fn);
//   },[onClose]);

//   const infoRows = [
//     {icon:"📱", label:"Mobile",       val:appt.mobileNumber||"—"},
//     {icon:"📍", label:"Ward",         val:appt.ward||"—"},
//     {icon:"🏥", label:"Visit Type",   val:isClinic?"Clinic Visit":"Home Visit"},
//     {icon:"🎯", label:"Purpose",      val:appt.purpose||"—"},
//     {icon:"👥", label:"Visitors",     val:String(appt.numberOfVisitors||1)},
//     {icon:"📅", label:"Preferred Date",val:appt.preferredDate
//       ? new Date(appt.preferredDate+"T00:00:00").toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})
//       : "—"},
//     {icon:"🕐", label:"Slot Time",    val:appt.slotTime||"—"},
//     {icon:"✉️", label:"Email",        val:appt.email||"—"},
//     {icon:"🏠", label:"Address",      val:appt.address||"—"},
//     {icon:"🔖", label:"Token ID",     val:appt.tokenId||appt._id?.slice(-10)||"—"},
//   ].filter(r=>r.val&&r.val!=="—"||r.label==="Visit Type");

//   return (
//     /* Overlay */
//     <div onClick={onClose} style={{
//       position:"fixed",inset:0,
//       background:"rgba(15,30,40,0.55)",
//       backdropFilter:"blur(3px)",
//       zIndex:99999,
//       display:"flex",alignItems:"center",justifyContent:"center",
//       padding:"16px",
//       animation:"fadeIn .18s ease",
//     }}>
//       {/* Modal card — stop clicks propagating to overlay */}
//       <div onClick={e=>e.stopPropagation()} style={{
//         background:P.white,
//         borderRadius:20,
//         width:"100%",
//         maxWidth:480,
//         maxHeight:"90vh",
//         overflowY:"auto",
//         boxShadow:"0 24px 72px rgba(0,0,0,0.30)",
//         animation:"slideUp .2s ease",
//       }}>

//         {/* ── Gradient header ── */}
//         <div style={{
//           background:`linear-gradient(135deg,${P.tealDark} 0%,${color} 60%,${color}bb 100%)`,
//           padding:"22px 22px 18px",
//           borderRadius:"20px 20px 0 0",
//           position:"relative",
//         }}>
//           {/* Close button */}
//           <button onClick={onClose} style={{
//             position:"absolute",top:14,right:14,
//             background:"rgba(255,255,255,0.2)",border:"none",
//             borderRadius:"50%",width:32,height:32,
//             cursor:"pointer",color:"#fff",fontSize:16,fontWeight:900,
//             display:"flex",alignItems:"center",justifyContent:"center",
//             transition:"background .15s",
//           }}>✕</button>

//           {/* Avatar + name */}
//           <div style={{display:"flex",alignItems:"center",gap:16}}>
//             <Av name={appt.fullName} size={56} color={color}/>
//             <div>
//               <div style={{fontSize:9,fontWeight:800,color:"rgba(255,255,255,0.65)",
//                 textTransform:"uppercase",letterSpacing:1.2,marginBottom:4}}>
//                 Appointment Details
//               </div>
//               <div style={{fontSize:20,fontWeight:900,color:"#fff",lineHeight:1.2}}>
//                 {appt.fullName||"—"}
//               </div>
//               <div style={{fontSize:12,color:"rgba(255,255,255,0.82)",marginTop:4,fontWeight:600}}>
//                 {appt.slotTime||"—"} · {isClinic?"Clinic Visit":"Home Visit"}
//               </div>
//             </div>
//           </div>

//           {/* Status + visit type badges */}
//           <div style={{display:"flex",gap:8,marginTop:14,flexWrap:"wrap"}}>
//             <span style={{
//               display:"inline-flex",alignItems:"center",gap:5,
//               background:cfg.bg,color:cfg.color,border:`1.5px solid ${cfg.border}`,
//               padding:"4px 12px",borderRadius:20,fontSize:11,fontWeight:800,
//             }}>
//               <span style={{width:7,height:7,borderRadius:"50%",background:cfg.dot,display:"inline-block"}}/>
//               {cfg.label}
//             </span>
//             <span style={{
//               display:"inline-flex",alignItems:"center",gap:5,
//               background:"rgba(255,255,255,0.22)",color:"#fff",
//               padding:"4px 12px",borderRadius:20,fontSize:11,fontWeight:800,
//               border:"1.5px solid rgba(255,255,255,0.3)",
//             }}>
//               <span style={{width:7,height:7,borderRadius:"50%",
//                 background:isClinic?P.teal:P.gold,display:"inline-block"}}/>
//               {isClinic?"Clinic Visit":"Home Visit"}
//             </span>
//           </div>
//         </div>

//         {/* ── Rainbow stripe ── */}
//         <div style={{height:3,background:`linear-gradient(90deg,${P.tealDark},${P.teal},${P.gold},${P.goldDeep},${P.cream},${P.gold},${P.teal})`}}/>

//         {/* ── Info grid ── */}
//         <div style={{padding:"18px 22px"}}>
//           <div style={{
//             display:"grid",
//             gridTemplateColumns:"1fr 1fr",
//             gap:"0px",
//             border:`1px solid ${P.border}`,
//             borderRadius:12,
//             overflow:"hidden",
//           }}>
//             {infoRows.map(({icon,label,val},i)=>(
//               <div key={i} style={{
//                 padding:"12px 14px",
//                 borderBottom:i<infoRows.length-2?`1px solid ${P.border}`:undefined,
//                 borderRight:i%2===0?`1px solid ${P.border}`:undefined,
//                 background:i%4<2?P.white:`${P.bg}88`,
//               }}>
//                 <div style={{fontSize:9.5,fontWeight:700,color:P.muted,
//                   textTransform:"uppercase",letterSpacing:.5,marginBottom:4,
//                   display:"flex",alignItems:"center",gap:5}}>
//                   <span style={{fontSize:13}}>{icon}</span>{label}
//                 </div>
//                 <div style={{fontSize:13,fontWeight:700,color:P.text,lineHeight:1.4,
//                   wordBreak:"break-word"}}>
//                   {val}
//                 </div>
//               </div>
//             ))}
//             {/* If odd number of rows, fill last cell */}
//             {infoRows.length%2!==0&&(
//               <div style={{padding:"12px 14px",background:`${P.bg}88`}}/>
//             )}
//           </div>

//           {/* QR Code if available */}
//           {appt.qrCode&&(
//             <div style={{textAlign:"center",marginTop:16,padding:"14px",
//               background:P.bg,borderRadius:12,border:`1px solid ${P.border}`}}>
//               <div style={{fontSize:11,color:P.muted,fontWeight:600,marginBottom:8}}>QR Code</div>
//               <img src={appt.qrCode} alt="QR" style={{width:120,height:120}}/>
//             </div>
//           )}

//           {/* Visitor photo if available */}
//           {appt.visitorPhoto&&(
//             <div style={{textAlign:"center",marginTop:16}}>
//               <img
//                 src={appt.visitorPhoto.startsWith("http")?appt.visitorPhoto:`${BASE_URL}/${appt.visitorPhoto}`}
//                 alt="visitor"
//                 style={{width:80,height:80,borderRadius:"50%",objectFit:"cover",
//                   border:`3px solid ${color}`,boxShadow:`0 4px 14px ${color}44`}}/>
//             </div>
//           )}

//           {/* Close button at bottom */}
//           <button onClick={onClose} style={{
//             width:"100%",marginTop:18,
//             background:`linear-gradient(135deg,${color},${P.tealDark})`,
//             color:"#fff",border:"none",borderRadius:12,
//             padding:"13px 0",fontSize:13,fontWeight:800,
//             cursor:"pointer",letterSpacing:.3,
//             boxShadow:`0 6px 18px ${color}44`,
//           }}>
//             Close Details
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── Appointment Card (small card in calendar cell) ────────────────────────────
// function ApptCard({ appt, color }) {
//   const [open, setOpen] = useState(false);
//   const isClinic=(appt.visitType||"Clinic Visit")==="Clinic Visit";

//   const handleClick = useCallback((e)=>{
//     e.stopPropagation();
//     setOpen(true);
//   },[]);

//   const handleClose = useCallback(()=>setOpen(false),[]);

//   return (
//     <>
//       <div onClick={handleClick} style={{
//         background:`${color}14`,
//         border:`1.5px solid ${color}55`,
//         borderLeft:`3px solid ${color}`,
//         borderRadius:"0 8px 8px 0",
//         padding:"6px 9px",
//         cursor:"pointer",
//         transition:"all 0.14s",
//         marginBottom:4,
//         userSelect:"none",
//       }}
//         onMouseEnter={e=>{
//           e.currentTarget.style.background=`${color}26`;
//           e.currentTarget.style.borderColor=color;
//           e.currentTarget.style.boxShadow=`0 4px 14px ${color}33`;
//           e.currentTarget.style.transform="translateY(-1px)";
//         }}
//         onMouseLeave={e=>{
//           e.currentTarget.style.background=`${color}14`;
//           e.currentTarget.style.borderColor=`${color}55`;
//           e.currentTarget.style.borderLeftColor=color;
//           e.currentTarget.style.boxShadow="none";
//           e.currentTarget.style.transform="none";
//         }}
//       >
//         <div style={{display:"flex",alignItems:"center",gap:6}}>
//           <Av name={appt.fullName} size={22} color={color}/>
//           <div style={{flex:1,minWidth:0}}>
//             <div style={{fontSize:10.5,fontWeight:800,color:P.text,
//               overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
//               {appt.fullName||"—"}
//             </div>
//             <div style={{fontSize:9,color:color,fontWeight:700,marginTop:1,
//               display:"flex",alignItems:"center",gap:4}}>
//               {appt.slotTime||"—"}
//               <span style={{display:"inline-flex",alignItems:"center",gap:2,
//                 color:isClinic?P.tealDark:P.goldDeep,fontWeight:700}}>
//                 <span style={{width:5,height:5,borderRadius:"50%",
//                   background:isClinic?P.teal:P.gold,display:"inline-block"}}/>
//                 {isClinic?"Clinic":"Home"}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal rendered via fixed overlay — never clipped */}
//       {open && (
//         <ApptModal appt={appt} color={color} onClose={handleClose}/>
//       )}
//     </>
//   );
// }

// // ── Calendar Panel ────────────────────────────────────────────────────────────
// function CalendarPanel({ appointments=[], mayorSlots=[], loading=false }) {
//   const [view,    setView]    = useState("week");
//   const [weekBase,setWeekBase]= useState(new Date());
//   const [search,  setSearch]  = useState("");

//   const weekDates = getWeekDates(weekBase);
//   const today     = new Date();

//   const filtered = appointments.filter(a=>{
//     if(!search) return true;
//     const q=search.toLowerCase();
//     return (a.fullName||"").toLowerCase().includes(q)||
//            (a.purpose||"").toLowerCase().includes(q)||
//            (a.ward||"").toLowerCase().includes(q)||
//            (a.mobileNumber||"").includes(q);
//   });

//   function appsForDate(dt) {
//     const ds=`${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,"0")}-${String(dt.getDate()).padStart(2,"0")}`;
//     return filtered.filter(a=>(a.preferredDate||"").slice(0,10)===ds);
//   }

//   const todayStr=`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;
//   const dayAppts=filtered.filter(a=>(a.preferredDate||"").slice(0,10)===todayStr);

//   const clinicCount=filtered.filter(a=>(a.visitType||"Clinic Visit")==="Clinic Visit").length;
//   const homeCount=filtered.filter(a=>a.visitType==="Home Visit").length;

//   const monthLabel=weekDates[0].toLocaleDateString("en-IN",{month:"long",year:"numeric"});
//   const hours=Array.from({length:10},(_,i)=>8+i);
//   const fmtH=h=>h<12?`${h} AM`:h===12?"12 PM":`${h-12} PM`;

//   return (
//     <div className="dc" style={{animationDelay:".3s",background:P.white,borderRadius:16,
//       overflow:"hidden",boxShadow:"0 4px 24px rgba(0,0,0,0.07)",border:`1px solid ${P.border}`,
//       display:"flex",flexDirection:"column"}}>

//       {/* Header */}
//       <div style={{padding:"13px 16px 10px",borderBottom:`1px solid ${P.border}`}}>
//         <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",
//           marginBottom:10,gap:8,flexWrap:"wrap"}}>
//           <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
//             <div>
//               <h3 style={{margin:0,fontSize:14,fontWeight:900,color:P.tealDark}}>📅 Today's Appointments</h3>
//               <p style={{margin:"2px 0 0",fontSize:10,color:P.muted,fontWeight:600}}>
//                 {today.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}
//               </p>
//             </div>
//             <div style={{background:`linear-gradient(135deg,${P.teal},${P.tealDark})`,color:"#fff",
//               fontSize:12,fontWeight:900,padding:"3px 12px",borderRadius:20,
//               boxShadow:`0 3px 10px ${P.teal}44`,whiteSpace:"nowrap"}}>
//               {filtered.length} All Appointments
//             </div>
//           </div>
//           <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
//             <div style={{position:"relative"}}>
//               <span style={{position:"absolute",left:9,top:"50%",transform:"translateY(-50%)",fontSize:11,color:P.muted}}>🔍</span>
//               <input value={search} onChange={e=>setSearch(e.target.value)}
//                 placeholder="Search..." style={{border:`1.5px solid ${P.border}`,borderRadius:8,
//                   padding:"5px 10px 5px 26px",fontSize:11,color:P.text,
//                   outline:"none",background:P.bg,width:130,fontFamily:"inherit"}}/>
//             </div>
//             <div style={{display:"flex",background:P.bg,border:`1px solid ${P.border}`,borderRadius:9,padding:2}}>
//               {["Day","Week"].map(v=>(
//                 <button key={v} onClick={()=>setView(v.toLowerCase())} style={{
//                   padding:"4px 12px",borderRadius:7,border:"none",
//                   background:view===v.toLowerCase()?`linear-gradient(135deg,${P.teal},${P.tealDark})`:"transparent",
//                   color:view===v.toLowerCase()?"#fff":P.muted,
//                   fontSize:11,fontWeight:800,cursor:"pointer",transition:"all .15s"}}>
//                   {v}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:6}}>
//           {view==="week"?(
//             <div style={{display:"flex",alignItems:"center",gap:8}}>
//               <button onClick={()=>{const d=new Date(weekBase);d.setDate(d.getDate()-7);setWeekBase(d);}}
//                 style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,
//                   width:28,height:28,cursor:"pointer",fontSize:14,color:P.tealDark,fontWeight:800,lineHeight:1}}>‹</button>
//               <span style={{fontSize:12,fontWeight:800,color:P.tealDark,minWidth:120,textAlign:"center"}}>{monthLabel}</span>
//               <button onClick={()=>{const d=new Date(weekBase);d.setDate(d.getDate()+7);setWeekBase(d);}}
//                 style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,
//                   width:28,height:28,cursor:"pointer",fontSize:14,color:P.tealDark,fontWeight:800,lineHeight:1}}>›</button>
//             </div>
//           ):<div/>}
//           <div style={{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"}}>
//             {[{dot:P.teal,label:"Clinic Visit"},{dot:P.gold,label:"Home Visit"}].map(({dot,label})=>(
//               <span key={label} style={{display:"flex",alignItems:"center",gap:4,fontSize:10,color:P.muted,fontWeight:700}}>
//                 <span style={{width:8,height:8,borderRadius:"50%",background:dot,display:"inline-block"}}/>{label}
//               </span>
//             ))}
//             <span style={{color:P.border}}>|</span>
//             {[{label:"Today",value:dayAppts.length,color:P.teal},{label:"Clinic",value:clinicCount,color:P.tealDeep},{label:"Home",value:homeCount,color:P.gold}].map(({label,value,color})=>(
//               <span key={label} style={{background:`${color}18`,border:`1px solid ${color}44`,
//                 borderRadius:20,padding:"1px 9px",fontSize:10,fontWeight:800,color,whiteSpace:"nowrap"}}>
//                 {value} {label}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mayor strip */}
//       {mayorSlots.length>0&&(
//         <div style={{display:"flex",gap:6,flexWrap:"wrap",padding:"5px 16px 5px",
//           background:`${P.cream}88`,borderBottom:`1px solid ${P.border}`}}>
//           <span style={{fontSize:9,fontWeight:800,color:P.tealDark,textTransform:"uppercase",letterSpacing:.8,alignSelf:"center"}}>Mayor Available:</span>
//           {mayorSlots.map((s,i)=>(
//             <span key={i} style={{fontSize:9.5,fontWeight:700,color:P.tealDark,
//               background:`${P.teal}1a`,border:`1px solid ${P.teal}33`,borderRadius:20,padding:"2px 9px"}}>
//               {s.start} – {s.end}
//             </span>
//           ))}
//         </div>
//       )}

//       {/* Calendar body */}
//       {loading?(
//         <div style={{textAlign:"center",padding:"48px 0",color:P.muted}}>
//           <div style={{width:26,height:26,border:`3px solid ${P.border}`,borderTopColor:P.teal,
//             borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 10px"}}/>
//           Loading appointments…
//         </div>
//       ):view==="week"?(
//         <div style={{overflowX:"auto",overflowY:"auto",maxHeight:380}}>
//           <div style={{minWidth:580}}>
//             {/* Day headers */}
//             <div style={{display:"grid",gridTemplateColumns:"50px repeat(7,1fr)",
//               borderBottom:`1.5px solid ${P.border}`,background:P.bg,position:"sticky",top:0,zIndex:4}}>
//               <div style={{borderRight:`1px solid ${P.border}`}}/>
//               {weekDates.map((dt,i)=>{
//                 const isToday=isSameDay(dt,today);
//                 const cnt=appsForDate(dt).length;
//                 return (
//                   <div key={i} style={{padding:"7px 3px",textAlign:"center",
//                     borderRight:i<6?`1px solid ${P.border}`:undefined,
//                     background:isToday?`${P.teal}0e`:"transparent"}}>
//                     <div style={{fontSize:9.5,fontWeight:700,color:isToday?P.teal:P.muted,letterSpacing:.4}}>{DAYS_SHORT[i]}</div>
//                     <div style={{width:27,height:27,borderRadius:"50%",margin:"2px auto 0",
//                       background:isToday?`linear-gradient(135deg,${P.teal},${P.tealDark})`:"transparent",
//                       display:"flex",alignItems:"center",justifyContent:"center",
//                       fontSize:12,fontWeight:900,color:isToday?"#fff":P.text}}>
//                       {dt.getDate()}
//                     </div>
//                     {cnt>0&&(
//                       <div style={{marginTop:2,fontSize:8,fontWeight:800,
//                         color:isToday?"#fff":P.teal,
//                         background:isToday?`${P.teal}cc`:`${P.teal}18`,
//                         borderRadius:20,padding:"1px 5px",display:"inline-block"}}>{cnt}</div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//             {/* Hour rows */}
//             {hours.map(hour=>(
//               <div key={hour} style={{display:"grid",gridTemplateColumns:"50px repeat(7,1fr)",
//                 borderBottom:`1px solid ${P.border}55`,minHeight:54}}>
//                 <div style={{borderRight:`1px solid ${P.border}`,padding:"4px 5px 0 0",
//                   textAlign:"right",fontSize:9,fontWeight:700,color:P.muted,
//                   background:P.bg,position:"sticky",left:0,zIndex:2}}>
//                   {fmtH(hour)}
//                 </div>
//                 {weekDates.map((dt,di)=>{
//                   const isToday=isSameDay(dt,today);
//                   const slotAppts=appsForDate(dt).filter(a=>{
//                     const m=toMin(a.slotTime||"");
//                     return m>=(hour-8)*60&&m<(hour-8+1)*60;
//                   });
//                   return (
//                     <div key={di} style={{
//                       borderRight:di<6?`1px solid ${P.border}55`:undefined,
//                       padding:"3px 3px",background:isToday?`${P.teal}05`:"transparent"}}>
//                       {slotAppts.map((appt,ai)=>{
//                         const gIdx=filtered.indexOf(appt);
//                         return <ApptCard key={ai} appt={appt} color={ACCENT[gIdx%ACCENT.length]}/>;
//                       })}
//                     </div>
//                   );
//                 })}
//               </div>
//             ))}
//           </div>
//         </div>
//       ):(
//         /* DAY VIEW */
//         <div style={{overflowY:"auto",maxHeight:380}}>
//           {dayAppts.length===0?(
//             <div style={{textAlign:"center",padding:"44px 0",color:P.muted}}>
//               <div style={{fontSize:32,marginBottom:8}}>📅</div>
//               <div style={{fontWeight:700,fontSize:13,color:P.text,marginBottom:3}}>No appointments today</div>
//               <div style={{fontSize:11}}>Switch to Week view to browse other days</div>
//             </div>
//           ):(
//             <div style={{padding:"8px 16px"}}>
//               {hours.map(hour=>{
//                 const label=hour<12?`${hour}:00 AM`:hour===12?"12:00 PM":`${hour-12}:00 PM`;
//                 const hAppts=dayAppts.filter(a=>{
//                   const m=toMin(a.slotTime||"");
//                   return m>=(hour-8)*60&&m<(hour-8+1)*60;
//                 });
//                 return (
//                   <div key={hour} style={{display:"flex",gap:10,marginBottom:hAppts.length?8:2}}>
//                     <div style={{width:56,fontSize:9,fontWeight:hAppts.length?800:600,
//                       color:hAppts.length?P.teal:P.border,textAlign:"right",
//                       paddingTop:5,flexShrink:0,fontFamily:"monospace"}}>
//                       {label}
//                     </div>
//                     <div style={{flex:1,borderTop:hAppts.length?`none`:`1px solid ${P.border}33`,paddingTop:hAppts.length?0:6}}>
//                       {hAppts.length>0&&(
//                         <div style={{display:"grid",gridTemplateColumns:`repeat(${Math.min(hAppts.length,3)},1fr)`,gap:6}}>
//                           {hAppts.map((appt,ai)=>{
//                             const gIdx=filtered.indexOf(appt);
//                             return <ApptCard key={ai} appt={appt} color={ACCENT[gIdx%ACCENT.length]}/>;
//                           })}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       )}

//       {/* Footer */}
//       <div style={{borderTop:`1px solid ${P.border}`,padding:"6px 16px",
//         display:"flex",alignItems:"center",justifyContent:"space-between",background:P.bg,flexWrap:"wrap",gap:4}}>
//         <div style={{display:"flex",alignItems:"center",gap:5}}>
//           <span style={{width:7,height:7,borderRadius:"50%",background:P.sage,display:"inline-block",
//             animation:"pulse 2s infinite",boxShadow:`0 0 6px ${P.sage}`}}/>
//           <span style={{fontSize:9.5,color:P.muted,fontWeight:700}}>Live · 8:00 AM – 6:00 PM</span>
//         </div>
//         <span style={{fontSize:9.5,color:P.muted}}>{filtered.length} total appointments · Click any card to view details</span>
//       </div>
//     </div>
//   );
// }

// // ─── Dashboard ────────────────────────────────────────────────────────────────
// export default function Dashboard() {
//   const navigate  = useNavigate();
//   const { user }  = useSelector(s=>s.auth);

//   const [stats,        setStats]        = useState({total:0,pending:0,resolved:0,inProgress:0});
//   const [recent,       setRecent]       = useState([]);
//   const [talukaData,   setTalukaData]   = useState({});
//   const [weeklyData,   setWeeklyData]   = useState([4,7,5,9,12,8,15]);
//   const [loading,      setLoading]      = useState(true);
//   const [activeTab,    setActiveTab]    = useState("all");
//   const [appointments, setAppointments] = useState([]);
//   const [apptLoading,  setApptLoading]  = useState(true);
//   const [mayorSlots,   setMayorSlots]   = useState([]);
//   const [peopleOnline, setPeopleOnline] = useState(0);

//   const fetchDashboard = useCallback(async()=>{
//     setLoading(true);
//     try{
//       const res=await axiosInstance.get("/inwardAll");
//       const data=res.data?.data||[];
//       setStats({total:data.length,
//         pending:data.filter(d=>d.status==="Pending").length,
//         resolved:data.filter(d=>d.status==="Resolved").length,
//         inProgress:data.filter(d=>d.status==="In Progress").length});
//       const tMap={};
//       data.forEach(d=>{if(d.taluka) tMap[d.taluka]=(tMap[d.taluka]||0)+1;});
//       setTalukaData(tMap);
//       const now=Date.now(),wk=Array(7).fill(0);
//       data.forEach(d=>{const diff=Math.floor((now-new Date(d.createdAt))/86400000);if(diff>=0&&diff<7)wk[6-diff]++;});
//       setWeeklyData(wk.map(v=>v||Math.floor(2+Math.random()*6)));
//       setRecent(data.slice(0,8));
//     }catch(e){console.error(e);}
//     finally{setLoading(false);}
//   },[]);

//   const fetchAppointments = useCallback(async()=>{
//     setApptLoading(true);
//     try{
//       const res=await citizenAxios.get("/citizen/admin/all-appointments");
//       if(res.data.success) setAppointments(res.data.appointments||[]);
//     }catch(e){console.error(e);setAppointments([]);}
//     finally{setApptLoading(false);}
//   },[]);

//   const fetchMayorSlots = useCallback(async()=>{
//     try{
//       const res=await axios.get(`${BASE_URL}/api/availability/get`);
//       if(res.data.success){
//         const ts=new Date().toISOString().slice(0,10);
//         const rec=res.data.data.find(a=>a.date===ts);
//         setMayorSlots(rec?.timeSlots||[]);
//       }
//     }catch(e){console.error(e);}
//   },[]);

//   useEffect(()=>{
//     fetchDashboard();fetchAppointments();fetchMayorSlots();
//     const iv=setInterval(()=>setPeopleOnline(Math.floor(12+Math.random()*8)),4000);
//     setPeopleOnline(Math.floor(12+Math.random()*8));
//     return()=>clearInterval(iv);
//   },[fetchDashboard,fetchAppointments,fetchMayorSlots]);

//   const resRate=stats.total>0?Math.round((stats.resolved/stats.total)*100):0;
//   const statusColor={"Pending":P.gold,"Resolved":P.sage,"In Progress":P.teal,"Rejected":"#d9534f"};
//   const statusBg={"Pending":`${P.gold}22`,"Resolved":`${P.sage}22`,"In Progress":`${P.teal}22`,"Rejected":"#fde8e8"};
//   const filteredRecent=activeTab==="all"?recent:recent.filter(r=>r.status===activeTab);

//   const cards=[
//     {label:"TOTAL APPLICATIONS",value:stats.total.toLocaleString(),sub:"▲ 12% last week",from:P.card1From,to:P.card1To,spark:[40,55,45,70,60,85,75],dark:false},
//     {label:"PENDING",           value:stats.pending,               sub:"▼ 5% last week", from:P.card2From,to:P.card2To,spark:[30,50,35,60,40,70,55],dark:false},
//     {label:"RESOLVED",          value:stats.resolved,              sub:"▲ 8% last week", from:P.card3From,to:P.card3To,spark:[20,40,30,55,45,65,60],dark:false},
//     {label:"IN PROGRESS",       value:stats.inProgress,            sub:"— ongoing",       from:P.card4From,to:P.card4To,spark:[15,30,25,40,35,50,45],dark:true},
//   ];

//   return (
//     <div style={{minHeight:"100vh",background:P.bg,fontFamily:"'Nunito','Segoe UI',sans-serif"}}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
//         @keyframes fadeUp   {from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
//         @keyframes fadeIn   {from{opacity:0}to{opacity:1}}
//         @keyframes slideUp  {from{opacity:0;transform:translateY(24px) scale(.97)}to{opacity:1;transform:none}}
//         @keyframes pulse    {0%,100%{opacity:1}50%{opacity:.35}}
//         @keyframes spin     {to{transform:rotate(360deg)}}
//         .dc{animation:fadeUp .4s ease both;}
//         .tbl-row:hover{background:${P.teal}12!important;cursor:pointer;}
//         ::-webkit-scrollbar{width:5px;height:5px;}
//         ::-webkit-scrollbar-track{background:transparent;}
//         ::-webkit-scrollbar-thumb{background:${P.border};border-radius:99px;}
//         *{box-sizing:border-box;}

//         .dash-grid-4   {display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
//         .dash-grid-cal {display:grid;grid-template-columns:1fr 288px;gap:18px;}
//         .dash-grid-track{display:grid;grid-template-columns:260px 1fr;gap:18px;}

//         @media(max-width:1100px){
//           .dash-grid-cal  {grid-template-columns:1fr!important;}
//           .dash-grid-track{grid-template-columns:1fr!important;}
//         }
//         @media(max-width:800px){
//           .dash-grid-4{grid-template-columns:repeat(2,1fr)!important;gap:10px!important;}
//         }
//         @media(max-width:480px){
//           .dash-grid-4{grid-template-columns:1fr!important;}
//           .dash-pad{padding:12px 10px!important;}
//         }
//       `}</style>

//       <div className="dash-pad" style={{padding:"20px 24px",maxWidth:1440,margin:"0 auto"}}>

//         {/* Accent bar */}
//         <div style={{height:4,background:`linear-gradient(90deg,${P.tealDark},${P.teal},${P.gold},${P.goldDeep},${P.cream},${P.goldDeep},${P.teal})`,borderRadius:99,marginBottom:20}}/>

//         {/* Page header */}
//         <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20,flexWrap:"wrap",gap:10}}>
//           <div>
//             <h2 style={{margin:0,fontSize:19,fontWeight:900,color:P.tealDark,letterSpacing:-.3}}>Analytic Overview</h2>
//             <p style={{margin:"3px 0 0",fontSize:11,color:P.muted}}>
//               Good {new Date().getHours()<12?"Morning":new Date().getHours()<17?"Afternoon":"Evening"}, {user?.fullName?.split(" ")[0]||"Admin"} 👋
//             </p>
//           </div>
//           <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
//             <button onClick={()=>{fetchDashboard();fetchAppointments();fetchMayorSlots();}}
//               style={{background:P.white,border:`1px solid ${P.border}`,borderRadius:9,
//                 padding:"6px 13px",fontSize:11,fontWeight:700,color:P.tealDark,cursor:"pointer"}}>
//               ↻ Refresh
//             </button>
//             <div style={{display:"flex",alignItems:"center",gap:6,background:P.white,
//               border:`1px solid ${P.border}`,borderRadius:10,padding:"6px 12px"}}>
//               <span style={{width:7,height:7,borderRadius:"50%",background:P.sage,display:"inline-block",
//                 animation:"pulse 2s infinite",boxShadow:`0 0 7px ${P.sage}`}}/>
//               <span style={{fontSize:11,fontWeight:700,color:P.tealDark}}>{peopleOnline} Online</span>
//             </div>
//             <div style={{background:P.white,border:`1px solid ${P.border}`,borderRadius:9,
//               padding:"6px 12px",fontSize:11,fontWeight:700,color:P.tealDark}}>THIS YEAR ▾</div>
//           </div>
//         </div>

//         {loading?(
//           <div style={{textAlign:"center",padding:80,color:P.teal,fontWeight:700}}>Loading dashboard…</div>
//         ):(
//           <>
//             {/* 4 Stat Cards */}
//             <div className="dash-grid-4" style={{marginBottom:18}}>
//               {cards.map((card,i)=>(
//                 <div key={i} className="dc" style={{animationDelay:`${i*.07}s`,borderRadius:16,
//                   background:`linear-gradient(135deg,${card.from},${card.to})`,
//                   padding:"16px 18px",boxShadow:`0 8px 28px ${card.from}55`,
//                   position:"relative",overflow:"hidden",minHeight:105}}>
//                   <div style={{position:"absolute",top:-18,right:-18,width:72,height:72,borderRadius:"50%",background:"rgba(255,255,255,0.13)"}}/>
//                   <div style={{position:"absolute",bottom:-12,right:8,width:44,height:44,borderRadius:"50%",background:"rgba(255,255,255,0.09)"}}/>
//                   <div style={{fontSize:9,fontWeight:800,color:card.dark?"#6b5020":"rgba(255,255,255,.88)",letterSpacing:.9,textTransform:"uppercase",marginBottom:4}}>{card.label}</div>
//                   <div style={{fontSize:26,fontWeight:900,color:card.dark?P.tealDark:"#fff",letterSpacing:-1,marginBottom:2}}>{card.value}</div>
//                   <div style={{fontSize:9.5,color:card.dark?"#8a6830":"rgba(255,255,255,.72)",fontWeight:600,marginBottom:7}}>{card.sub}</div>
//                   <Sparkline color={card.dark?"#9a7828":"#fff"} data={card.spark}/>
//                 </div>
//               ))}
//             </div>

//             {/* Calendar + Status */}
//             <div className="dash-grid-cal" style={{marginBottom:18}}>
//               <CalendarPanel appointments={appointments} mayorSlots={mayorSlots} loading={apptLoading}/>

//               <div className="dc" style={{animationDelay:".37s",background:P.white,borderRadius:16,
//                 padding:"16px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",
//                 border:`1px solid ${P.border}`,display:"flex",flexDirection:"column"}}>
//                 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
//                   <h3 style={{margin:0,fontSize:13,fontWeight:900,color:P.tealDark}}>Status</h3>
//                   <div style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,padding:"3px 8px",fontSize:9.5,fontWeight:700,color:P.tealDark}}>TODAY ▾</div>
//                 </div>
//                 <div style={{display:"flex",justifyContent:"center",margin:"2px 0 6px"}}>
//                   <Donut pct={resRate}/>
//                 </div>
//                 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:10}}>
//                   {[{l:"BOOKED",v:stats.total,c:P.teal},{l:"PROGRESS",v:stats.inProgress,c:P.gold},{l:"PENDING",v:stats.pending,c:"#d9534f"}].map(({l,v,c})=>(
//                     <div key={l} style={{textAlign:"center",padding:"8px 3px",background:P.bg,borderRadius:9,border:`1px solid ${P.border}`}}>
//                       <div style={{fontSize:15,fontWeight:900,color:c}}>{v}</div>
//                       <div style={{fontSize:7,fontWeight:800,color:P.muted,letterSpacing:.4,textTransform:"uppercase",marginTop:2}}>{l}</div>
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{borderTop:`1px solid ${P.border}`,paddingTop:8,marginBottom:8}}>
//                   <div style={{fontSize:10,fontWeight:800,color:P.tealDark,marginBottom:6}}>📅 Appointments</div>
//                   {[
//                     {l:"Total",v:appointments.length,c:P.teal},
//                     {l:"Approved",v:appointments.filter(a=>(a.status||"").toLowerCase()==="approved").length,c:P.sage},
//                     {l:"Pending",v:appointments.filter(a=>(a.status||"").toLowerCase()==="pending").length,c:P.gold},
//                     {l:"Clinic Visit",v:appointments.filter(a=>(a.visitType||"Clinic Visit")==="Clinic Visit").length,c:P.teal},
//                     {l:"Home Visit",v:appointments.filter(a=>a.visitType==="Home Visit").length,c:P.gold},
//                   ].map(({l,v,c})=>(
//                     <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"2.5px 0"}}>
//                       <span style={{display:"flex",alignItems:"center",gap:4,fontSize:9.5,color:P.muted,fontWeight:600}}>
//                         <span style={{width:5,height:5,borderRadius:"50%",background:c,display:"inline-block"}}/>{l}
//                       </span>
//                       <span style={{fontSize:10.5,fontWeight:800,color:c}}>{v}</span>
//                     </div>
//                   ))}
//                 </div>
//                 {mayorSlots.length>0&&(
//                   <div style={{borderTop:`1px solid ${P.border}`,paddingTop:7,marginBottom:8}}>
//                     <div style={{fontSize:10,fontWeight:800,color:P.tealDark,marginBottom:5}}>🏛 Mayor Today</div>
//                     {mayorSlots.map((s,i)=>(
//                       <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"2px 0",fontSize:9.5,color:P.muted,fontWeight:600}}>
//                         <span>Slot {i+1}</span>
//                         <span style={{color:P.tealDark,fontWeight:800}}>{s.start} – {s.end}</span>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//                 <div style={{borderTop:`1px solid ${P.border}`,paddingTop:8}}>
//                   <div style={{fontSize:10.5,fontWeight:800,color:P.tealDark,marginBottom:6}}>📈 Weekly Trend</div>
//                   <MiniBar data={weeklyData} color={P.teal}/>
//                   <div style={{display:"flex",justifyContent:"space-between",marginTop:3}}>
//                     {["M","T","W","T","F","S","S"].map((d,i)=>(
//                       <span key={i} style={{fontSize:8.5,color:P.muted,flex:1,textAlign:"center",fontWeight:700}}>{d}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Tracking + Recent */}
//             <div className="dash-grid-track" style={{marginBottom:8}}>
//               <div className="dc" style={{animationDelay:".44s",background:P.white,borderRadius:16,
//                 padding:"18px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",border:`1px solid ${P.border}`}}>
//                 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
//                   <h3 style={{margin:0,fontSize:13,fontWeight:900,color:P.tealDark}}>Tracking</h3>
//                   <div style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,padding:"3px 8px",fontSize:9.5,fontWeight:700,color:P.tealDark}}>THIS YEAR ▾</div>
//                 </div>
//                 <div style={{display:"flex",justifyContent:"space-between",padding:"0 2px 7px",borderBottom:`1px solid ${P.border}`,marginBottom:5}}>
//                   <span style={{fontSize:9,fontWeight:800,color:P.muted,textTransform:"uppercase",letterSpacing:.5}}>Region</span>
//                   <span style={{fontSize:9,fontWeight:800,color:P.muted,textTransform:"uppercase",letterSpacing:.5}}>Amount</span>
//                 </div>
//                 {Object.entries(talukaData).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([taluka,count],i)=>{
//                   const cols=[P.teal,P.gold,P.sage,P.tealDeep,P.goldDeep,P.tealDark];
//                   const c=cols[i%cols.length];
//                   return (
//                     <div key={taluka} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 2px",borderBottom:`1px solid ${P.border}55`}}>
//                       <div style={{display:"flex",alignItems:"center",gap:7}}>
//                         <div style={{width:7,height:7,borderRadius:"50%",background:c}}/>
//                         <span style={{fontSize:11.5,fontWeight:600,color:P.text}}>{taluka}</span>
//                       </div>
//                       <span style={{fontSize:11.5,fontWeight:800,color:c}}>{count}</span>
//                     </div>
//                   );
//                 })}
//                 {!Object.keys(talukaData).length&&(
//                   <div style={{textAlign:"center",color:P.muted,fontSize:12,padding:"18px 0"}}>No data yet</div>
//                 )}
//               </div>

//               <div className="dc" style={{animationDelay:".51s",background:P.white,borderRadius:16,
//                 padding:"18px 20px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",border:`1px solid ${P.border}`}}>
//                 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,flexWrap:"wrap",gap:8}}>
//                   <div>
//                     <h3 style={{margin:0,fontSize:14,fontWeight:900,color:P.tealDark}}>Recent Applications</h3>
//                     <p style={{margin:"2px 0 0",fontSize:10,color:P.muted}}>Latest inward complaints</p>
//                   </div>
//                   <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
//                     {["all","Pending","Resolved","In Progress"].map(tab=>(
//                       <button key={tab} onClick={()=>setActiveTab(tab)} style={{
//                         border:`1px solid ${activeTab===tab?P.teal:P.border}`,
//                         background:activeTab===tab?`linear-gradient(135deg,${P.teal},${P.tealDark})`:P.white,
//                         color:activeTab===tab?"#fff":P.muted,
//                         borderRadius:8,padding:"4px 11px",fontSize:10.5,fontWeight:700,cursor:"pointer",
//                         boxShadow:activeTab===tab?`0 4px 12px ${P.teal}44`:"none",transition:"all .2s"}}>
//                         {tab==="all"?"All":tab}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//                 <div style={{overflowX:"auto"}}>
//                   <table style={{width:"100%",borderCollapse:"collapse",fontSize:11.5}}>
//                     <thead>
//                       <tr style={{background:P.bg}}>
//                         {["Inward No","Applicant","Subject","Taluka","Department","Priority","Status","Date"].map(h=>(
//                           <th key={h} style={{padding:"8px 10px",textAlign:"left",color:P.tealDark,fontWeight:800,
//                             fontSize:9.5,whiteSpace:"nowrap",letterSpacing:.3,textTransform:"uppercase",
//                             borderBottom:`2px solid ${P.border}`}}>{h}</th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {filteredRecent.length===0?(
//                         <tr><td colSpan={8} style={{textAlign:"center",padding:28,color:P.muted}}>No applications found</td></tr>
//                       ):filteredRecent.map((item,i)=>(
//                         <tr key={i} className="tbl-row"
//                           onClick={()=>navigate("/allapplication")}
//                           style={{borderBottom:`1px solid ${P.border}55`,transition:"background .15s"}}>
//                           <td style={{padding:"8px 10px",color:P.teal,fontWeight:800,whiteSpace:"nowrap",fontFamily:"monospace",fontSize:10.5}}>{item.inwardNo||"—"}</td>
//                           <td style={{padding:"8px 10px",fontWeight:700,color:P.text}}>{item.fullName||"—"}</td>
//                           <td style={{padding:"8px 10px",color:P.muted,maxWidth:130,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.subject||"—"}</td>
//                           <td style={{padding:"8px 10px",color:P.muted}}>{item.taluka||"—"}</td>
//                           <td style={{padding:"8px 10px",color:P.muted,whiteSpace:"nowrap"}}>{item.mainDepartment||"—"}</td>
//                           <td style={{padding:"8px 10px"}}>
//                             <span style={{fontSize:9.5,fontWeight:800,padding:"2px 8px",borderRadius:20,
//                               background:item.priority==="Emergency"?"#fde8e8":item.priority==="Urgent"?`${P.gold}22`:`${P.sage}22`,
//                               color:item.priority==="Emergency"?"#d9534f":item.priority==="Urgent"?P.goldDeep:P.sage,
//                               border:`1px solid ${item.priority==="Emergency"?"#f5c6c6":item.priority==="Urgent"?P.gold+"44":P.sage+"44"}`}}>
//                               {item.priority||"Normal"}
//                             </span>
//                           </td>
//                           <td style={{padding:"8px 10px"}}>
//                             <span style={{fontSize:9.5,fontWeight:800,padding:"2px 8px",borderRadius:20,
//                               background:statusBg[item.status]||`${P.border}55`,
//                               color:statusColor[item.status]||P.muted,
//                               border:`1px solid ${statusColor[item.status]||P.border}44`}}>
//                               {item.status||"—"}
//                             </span>
//                           </td>
//                           <td style={{padding:"8px 10px",color:P.muted,whiteSpace:"nowrap",fontSize:10.5}}>
//                             {item.submissionDate||(item.createdAt?new Date(item.createdAt).toLocaleDateString("en-IN"):"—")}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//                 <div style={{marginTop:10,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
//                   <span style={{fontSize:10.5,color:P.muted}}>Showing {filteredRecent.length} of {stats.total}</span>
//                   <div style={{display:"flex",gap:8}}>
//                     <button onClick={()=>navigate("/allapplication")} style={{
//                       background:`linear-gradient(135deg,${P.teal},${P.tealDark})`,
//                       color:"#fff",border:"none",borderRadius:9,padding:"6px 14px",
//                       fontSize:11,fontWeight:800,cursor:"pointer",boxShadow:`0 4px 14px ${P.teal}55`}}>
//                       All Applications →
//                     </button>
//                     <button onClick={()=>navigate("/applicationcitizens")} style={{
//                       background:`linear-gradient(135deg,${P.gold},${P.goldDeep})`,
//                       color:"#fff",border:"none",borderRadius:9,padding:"6px 14px",
//                       fontSize:11,fontWeight:800,cursor:"pointer",boxShadow:`0 4px 14px ${P.gold}55`}}>
//                       Citizen Appts →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div style={{textAlign:"center",color:P.muted,fontSize:10.5,padding:"12px 0 4px"}}>
//               © {new Date().getFullYear()} Vasai-Virar City Municipal Corporation · Janata Darbar System
//               <span style={{margin:"0 8px",color:P.gold}}>◆</span>
//               स्थापना : ३ जुलै २००९
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }




// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../services/axiosInstance";
// import citizenAxios from "../services/citizenAxios";
// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// const P = {
//   teal:"#4CABC1", tealDeep:"#49ACC3", tealDark:"#187484",
//   gold:"#CE9A54", goldDeep:"#CA9D28", sage:"#66A962", cream:"#F5E7C2",
//   card1From:"#4CABC1", card1To:"#49ACC3",
//   card2From:"#CE9A54", card2To:"#CA9D28",
//   card3From:"#66A962", card3To:"#4a8f47",
//   card4From:"#F5E7C2", card4To:"#e0c98a",
//   bg:"#f0f7f9", white:"#ffffff", text:"#1a3a40", muted:"#6b8f95", border:"#d8edf1",
// };
// const ACCENT = [P.teal, P.gold, P.sage, P.tealDeep, P.goldDeep, P.tealDark, P.gold, P.teal];

// const STATUS_CFG = {
//   pending:      {bg:"#fef9c3",color:"#92400e",border:"#fde68a",dot:"#f59e0b",label:"Pending"},
//   approved:     {bg:"#dcfce7",color:"#166534",border:"#86efac",dot:"#16a34a",label:"Approved"},
//   rejected:     {bg:"#fee2e2",color:"#991b1b",border:"#fca5a5",dot:"#ef4444",label:"Rejected"},
//   "in progress":{bg:"#dbeafe",color:"#1e40af",border:"#93c5fd",dot:"#3b82f6",label:"In Progress"},
//   resolved:     {bg:"#f0fdf4",color:"#166534",border:"#bbf7d0",dot:"#22c55e",label:"Resolved"},
// };
// const sc = s => STATUS_CFG[(s||"pending").toLowerCase()] || STATUS_CFG.pending;

// // ── Tiny helpers ──────────────────────────────────────────────────────────────
// function Sparkline({ color="#fff", data=[30,45,35,60,40,70,55] }) {
//   const w=90,h=36,max=Math.max(...data),min=Math.min(...data);
//   const pts=data.map((v,i)=>`${(i/(data.length-1))*w},${h-((v-min)/(max-min+1))*(h-4)-2}`).join(" ");
//   const gid=`sg${color.replace('#','')}`;
//   return (
//     <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{opacity:.75}}>
//       <defs><linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
//         <stop offset="0%" stopColor={color} stopOpacity=".45"/>
//         <stop offset="100%" stopColor={color} stopOpacity="0"/>
//       </linearGradient></defs>
//       <polygon points={`0,${h} ${pts} ${w},${h}`} fill={`url(#${gid})`}/>
//       <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   );
// }

// function Donut({ pct=0 }) {
//   const r=46,c=2*Math.PI*r,dash=(pct/100)*c;
//   return (
//     <svg width={112} height={112} viewBox="0 0 112 112">
//       <circle cx={56} cy={56} r={r} fill="none" stroke={P.border} strokeWidth={12}/>
//       <circle cx={56} cy={56} r={r} fill="none" stroke={P.teal} strokeWidth={12}
//         strokeDasharray={`${dash} ${c-dash}`} strokeLinecap="round" transform="rotate(-90 56 56)"
//         style={{transition:"stroke-dasharray 1s ease"}}/>
//       <text x={56} y={52} textAnchor="middle" fontSize={20} fontWeight={900} fill={P.tealDark}>{pct}%</text>
//       <text x={56} y={66} textAnchor="middle" fontSize={9} fill={P.muted} fontWeight={700} letterSpacing={.8}>RESOLVED</text>
//     </svg>
//   );
// }

// function MiniBar({ data=[], color=P.teal }) {
//   const max=Math.max(...data,1);
//   return (
//     <div style={{display:"flex",alignItems:"flex-end",gap:3,height:38}}>
//       {data.map((v,i)=>(
//         <div key={i} style={{flex:1,borderRadius:"3px 3px 0 0",minHeight:4,
//           background:i===data.length-1?color:`${color}66`,height:`${(v/max)*100}%`}}/>
//       ))}
//     </div>
//   );
// }

// function Av({ name="", size=28, color=P.teal }) {
//   const ini=name.split(" ").filter(Boolean).map(n=>n[0]).join("").slice(0,2).toUpperCase()||"?";
//   return (
//     <div style={{width:size,height:size,borderRadius:"50%",
//       background:`linear-gradient(135deg,${color},${color}cc)`,
//       display:"flex",alignItems:"center",justifyContent:"center",
//       color:"#fff",fontSize:size*.34,fontWeight:800,flexShrink:0,
//       border:"2.5px solid #fff",boxShadow:`0 2px 8px ${color}44`}}>
//       {ini}
//     </div>
//   );
// }

// function toMin(t="08:00 AM") {
//   if(!t) return 0;
//   const [tp,per]=(t||"08:00 AM").split(" ");
//   const [h,m]=(tp||"08:00").split(":").map(Number);
//   let H=h||8; if(per==="PM"&&H!==12)H+=12; if(per==="AM"&&H===12)H=0;
//   return Math.max(0,(H*60+(m||0))-(8*60));
// }

// function getWeekDates(base) {
//   const d=new Date(base), day=d.getDay(), diff=day===0?-6:1-day;
//   const mon=new Date(d); mon.setDate(d.getDate()+diff);
//   return Array.from({length:7},(_,i)=>{ const dt=new Date(mon); dt.setDate(mon.getDate()+i); return dt; });
// }
// function isSameDay(a,b) {
//   return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate();
// }
// const DAYS_SHORT=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

// // ─────────────────────────────────────────────────────────────────────────────
// // COMPACT POPUP — exactly like the screenshot
// // Uses position:fixed so it is NEVER clipped by any scroll/overflow container
// // ─────────────────────────────────────────────────────────────────────────────
// function CompactPopup({ appt, color, onClose, anchorRect }) {
//   const cfg       = sc(appt.status);
//   const isClinic  = (appt.visitType||"Clinic Visit")==="Clinic Visit";
//   const popRef    = useRef(null);
//   const [pos, setPos] = useState({ top:0, left:0 });

//   /* Calculate fixed position from the anchor rect */
//   useEffect(()=>{
//     if(!anchorRect) return;
//     const PW = 230, PH = 280;
//     const vw = window.innerWidth, vh = window.innerHeight;

//     let left = anchorRect.right + 8;          // try right of card
//     let top  = anchorRect.top;                // align top of card

//     if(left + PW > vw - 8) left = anchorRect.left - PW - 8;  // flip left
//     if(left < 8)            left = 8;
//     if(top  + PH > vh - 8) top  = Math.max(8, vh - PH - 8);  // shift up

//     setPos({ top, left });
//   }, [anchorRect]);

//   /* Close on outside click */
//   useEffect(()=>{
//     const fn = e => { if(popRef.current && !popRef.current.contains(e.target)) onClose(); };
//     document.addEventListener("mousedown", fn);
//     return () => document.removeEventListener("mousedown", fn);
//   }, [onClose]);

//   /* Close on any scroll — but with a tiny delay so the initial render doesn't trigger it */
//   useEffect(()=>{
//     let timer;
//     const fn = () => { timer = setTimeout(onClose, 60); };
//     window.addEventListener("scroll", fn, true);
//     return () => { window.removeEventListener("scroll", fn, true); clearTimeout(timer); };
//   }, [onClose]);

//   /* Close on Escape */
//   useEffect(()=>{
//     const fn = e => { if(e.key==="Escape") onClose(); };
//     document.addEventListener("keydown", fn);
//     return () => document.removeEventListener("keydown", fn);
//   }, [onClose]);

//   return (
//     <div ref={popRef} style={{
//       position:"fixed",
//       top: pos.top,
//       left: pos.left,
//       zIndex: 99999,
//       width: 230,
//       background: P.white,
//       borderRadius: 14,
//       boxShadow: "0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)",
//       border: `1px solid ${P.border}`,
//       overflow: "hidden",
//       animation: "popIn .15s cubic-bezier(.34,1.56,.64,1)",
//     }}>

//       {/* ── Header row: avatar + name + time ── */}
//       <div style={{
//         background:`linear-gradient(135deg,${color},${color}dd)`,
//         padding:"11px 12px 10px",
//         display:"flex", alignItems:"center", gap:10,
//         position:"relative",
//       }}>
//         <Av name={appt.fullName} size={36} color={color}/>
//         <div style={{flex:1,minWidth:0}}>
//           <div style={{fontSize:13,fontWeight:900,color:"#fff",
//             overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
//             {appt.fullName||"—"}
//           </div>
//           <div style={{fontSize:10,color:"rgba(255,255,255,0.82)",marginTop:2,fontWeight:600}}>
//             {appt.slotTime||"—"}
//           </div>
//         </div>
//         {/* Close ✕ */}
//         <button onClick={onClose} style={{
//           background:"rgba(255,255,255,0.22)",border:"none",
//           borderRadius:"50%",width:22,height:22,
//           cursor:"pointer",color:"#fff",fontSize:13,fontWeight:900,
//           display:"flex",alignItems:"center",justifyContent:"center",
//           flexShrink:0, lineHeight:1,
//         }}>✕</button>
//       </div>

//       {/* ── Body rows — exactly like screenshot ── */}
//       <div style={{padding:"10px 13px 12px"}}>

//         {/* Phone */}
//         <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:7}}>
//           <span style={{fontSize:14,flexShrink:0}}>📱</span>
//           <span style={{fontSize:12,fontWeight:700,color:P.text}}>{appt.mobileNumber||"—"}</span>
//         </div>

//         {/* Ward */}
//         <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:7}}>
//           <span style={{fontSize:14,flexShrink:0}}>📍</span>
//           <span style={{fontSize:12,fontWeight:600,color:P.muted}}>Ward: {appt.ward||"—"}</span>
//         </div>

//         {/* Visit type */}
//         <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:7}}>
//           <span style={{fontSize:14,flexShrink:0}}>🏥</span>
//           <span style={{display:"inline-flex",alignItems:"center",gap:5,
//             fontSize:12,fontWeight:700,color:isClinic?P.tealDark:P.goldDeep}}>
//             <span style={{width:8,height:8,borderRadius:"50%",
//               background:isClinic?P.teal:P.gold,display:"inline-block"}}/>
//             {isClinic?"Clinic Visit":"Home Visit"}
//           </span>
//         </div>

//         {/* Purpose */}
//         {appt.purpose&&(
//           <div style={{display:"flex",alignItems:"flex-start",gap:8,marginBottom:7}}>
//             <span style={{fontSize:14,flexShrink:0,marginTop:1}}>🎯</span>
//             <span style={{fontSize:11.5,fontWeight:600,color:P.muted,lineHeight:1.4}}>
//               {appt.purpose.slice(0,45)}{appt.purpose.length>45?"…":""}
//             </span>
//           </div>
//         )}

//         {/* Visitors */}
//         <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
//           <span style={{fontSize:14,flexShrink:0}}>👥</span>
//           <span style={{fontSize:12,fontWeight:600,color:P.muted}}>Visitors: {appt.numberOfVisitors||1}</span>
//         </div>

//         {/* Status badge */}
//         <div style={{marginBottom:8}}>
//           <span style={{
//             display:"inline-flex",alignItems:"center",gap:6,
//             background:cfg.bg,color:cfg.color,border:`1.5px solid ${cfg.border}`,
//             padding:"4px 12px",borderRadius:20,fontSize:11,fontWeight:800,
//           }}>
//             <span style={{width:7,height:7,borderRadius:"50%",background:cfg.dot,display:"inline-block"}}/>
//             {cfg.label}
//           </span>
//         </div>

//         {/* Token */}
//         {(appt.tokenId||appt._id)&&(
//           <div style={{fontSize:9.5,color:P.muted,fontWeight:600,
//             fontFamily:"monospace",marginTop:2,
//             overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
//             Token: {appt.tokenId||appt._id?.slice(-12)||"—"}
//           </div>
//         )}

//         {/* Divider + View Details */}
//         <div style={{borderTop:`1px solid ${P.border}`,marginTop:10,paddingTop:8,
//           display:"flex",justifyContent:"flex-end"}}>
//           <span style={{fontSize:11.5,color:P.teal,fontWeight:800,cursor:"pointer",
//             display:"flex",alignItems:"center",gap:4}}
//             onClick={onClose}>
//             View Details ↗
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // Appointment Card in calendar cell
// // ─────────────────────────────────────────────────────────────────────────────
// function ApptCard({ appt, color }) {
//   const [anchorRect, setAnchorRect] = useState(null);
//   const cardRef   = useRef(null);
//   const isClinic  = (appt.visitType||"Clinic Visit")==="Clinic Visit";
//   const isOpen    = !!anchorRect;

//   const handleClick = useCallback(e => {
//     e.stopPropagation();
//     if(isOpen){ setAnchorRect(null); return; }
//     const rect = cardRef.current?.getBoundingClientRect();
//     if(rect) setAnchorRect(rect);
//   },[isOpen]);

//   const handleClose = useCallback(() => setAnchorRect(null), []);

//   return (
//     <>
//       <div
//         ref={cardRef}
//         onClick={handleClick}
//         style={{
//           background: isOpen ? `${color}22` : `${color}14`,
//           border:`1.5px solid ${isOpen ? color : color+"55"}`,
//           borderLeft:`3px solid ${color}`,
//           borderRadius:"0 8px 8px 0",
//           padding:"5px 8px",
//           cursor:"pointer",
//           marginBottom:4,
//           userSelect:"none",
//           transition:"all .13s",
//           boxShadow: isOpen ? `0 4px 14px ${color}33` : "none",
//         }}
//         onMouseEnter={e=>{
//           e.currentTarget.style.background=`${color}26`;
//           e.currentTarget.style.borderColor=color;
//           e.currentTarget.style.transform="translateY(-1px)";
//           e.currentTarget.style.boxShadow=`0 4px 14px ${color}33`;
//         }}
//         onMouseLeave={e=>{
//           if(!isOpen){
//             e.currentTarget.style.background=`${color}14`;
//             e.currentTarget.style.borderColor=`${color}55`;
//             e.currentTarget.style.transform="none";
//             e.currentTarget.style.boxShadow="none";
//           }
//         }}
//       >
//         <div style={{display:"flex",alignItems:"center",gap:6}}>
//           <Av name={appt.fullName} size={20} color={color}/>
//           <div style={{flex:1,minWidth:0}}>
//             <div style={{fontSize:10.5,fontWeight:800,color:P.text,
//               overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
//               {appt.fullName||"—"}
//             </div>
//             <div style={{fontSize:9,fontWeight:700,color:color,marginTop:1,
//               display:"flex",alignItems:"center",gap:4}}>
//               {appt.slotTime||"—"}
//               <span style={{display:"inline-flex",alignItems:"center",gap:2,
//                 color:isClinic?P.tealDark:P.goldDeep}}>
//                 <span style={{width:5,height:5,borderRadius:"50%",
//                   background:isClinic?P.teal:P.gold,display:"inline-block"}}/>
//                 {isClinic?"Clinic":"Home"}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Compact popup — fixed position, never clipped */}
//       {isOpen && (
//         <CompactPopup
//           appt={appt}
//           color={color}
//           onClose={handleClose}
//           anchorRect={anchorRect}
//         />
//       )}
//     </>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // Calendar Panel
// // ─────────────────────────────────────────────────────────────────────────────
// function CalendarPanel({ appointments=[], mayorSlots=[], loading=false }) {
//   const [view,     setView]     = useState("week");
//   const [weekBase, setWeekBase] = useState(new Date());
//   const [search,   setSearch]   = useState("");

//   const weekDates = getWeekDates(weekBase);
//   const today     = new Date();

//   const filtered = appointments.filter(a=>{
//     if(!search) return true;
//     const q=search.toLowerCase();
//     return (a.fullName||"").toLowerCase().includes(q)||
//            (a.purpose||"").toLowerCase().includes(q)||
//            (a.ward||"").toLowerCase().includes(q)||
//            (a.mobileNumber||"").includes(q);
//   });

//   const ds = dt => `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,"0")}-${String(dt.getDate()).padStart(2,"0")}`;
//   const appsForDate = dt => filtered.filter(a=>(a.preferredDate||"").slice(0,10)===ds(dt));

//   const todayStr  = ds(today);
//   const dayAppts  = filtered.filter(a=>(a.preferredDate||"").slice(0,10)===todayStr);
//   const clinicCnt = filtered.filter(a=>(a.visitType||"Clinic Visit")==="Clinic Visit").length;
//   const homeCnt   = filtered.filter(a=>a.visitType==="Home Visit").length;

//   const monthLabel = weekDates[0].toLocaleDateString("en-IN",{month:"long",year:"numeric"});
//   const hours      = Array.from({length:10},(_,i)=>8+i);
//   const fmtH       = h => h<12?`${h} AM`:h===12?"12 PM":`${h-12} PM`;

//   return (
//     <div className="dc" style={{animationDelay:".3s",background:P.white,borderRadius:16,
//       overflow:"hidden",boxShadow:"0 4px 24px rgba(0,0,0,0.07)",border:`1px solid ${P.border}`,
//       display:"flex",flexDirection:"column"}}>

//       {/* Header */}
//       <div style={{padding:"13px 16px 10px",borderBottom:`1px solid ${P.border}`}}>
//         <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",
//           marginBottom:10,gap:8,flexWrap:"wrap"}}>
//           <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
//             <div>
//               <h3 style={{margin:0,fontSize:14,fontWeight:900,color:P.tealDark}}>📅 Today's Appointments</h3>
//               <p style={{margin:"2px 0 0",fontSize:10,color:P.muted,fontWeight:600}}>
//                 {today.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}
//               </p>
//             </div>
//             <div style={{background:`linear-gradient(135deg,${P.teal},${P.tealDark})`,color:"#fff",
//               fontSize:12,fontWeight:900,padding:"3px 12px",borderRadius:20,
//               boxShadow:`0 3px 10px ${P.teal}44`,whiteSpace:"nowrap"}}>
//               {filtered.length} All Appointments
//             </div>
//           </div>
//           <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
//             <div style={{position:"relative"}}>
//               <span style={{position:"absolute",left:9,top:"50%",transform:"translateY(-50%)",fontSize:11,color:P.muted}}>🔍</span>
//               <input value={search} onChange={e=>setSearch(e.target.value)}
//                 placeholder="Search..." style={{border:`1.5px solid ${P.border}`,borderRadius:8,
//                   padding:"5px 10px 5px 26px",fontSize:11,color:P.text,
//                   outline:"none",background:P.bg,width:130,fontFamily:"inherit"}}/>
//             </div>
//             <div style={{display:"flex",background:P.bg,border:`1px solid ${P.border}`,borderRadius:9,padding:2}}>
//               {["Day","Week"].map(v=>(
//                 <button key={v} onClick={()=>setView(v.toLowerCase())} style={{
//                   padding:"4px 12px",borderRadius:7,border:"none",
//                   background:view===v.toLowerCase()?`linear-gradient(135deg,${P.teal},${P.tealDark})`:"transparent",
//                   color:view===v.toLowerCase()?"#fff":P.muted,
//                   fontSize:11,fontWeight:800,cursor:"pointer",transition:"all .15s"}}>
//                   {v}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Row 2: nav + legend */}
//         <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:6}}>
//           {view==="week"?(
//             <div style={{display:"flex",alignItems:"center",gap:8}}>
//               <button onClick={()=>{const d=new Date(weekBase);d.setDate(d.getDate()-7);setWeekBase(d);}}
//                 style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,
//                   width:28,height:28,cursor:"pointer",fontSize:14,color:P.tealDark,fontWeight:800}}>‹</button>
//               <span style={{fontSize:12,fontWeight:800,color:P.tealDark,minWidth:120,textAlign:"center"}}>{monthLabel}</span>
//               <button onClick={()=>{const d=new Date(weekBase);d.setDate(d.getDate()+7);setWeekBase(d);}}
//                 style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,
//                   width:28,height:28,cursor:"pointer",fontSize:14,color:P.tealDark,fontWeight:800}}>›</button>
//             </div>
//           ):<div/>}
//           <div style={{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"}}>
//             {[{dot:P.teal,label:"Clinic Visit"},{dot:P.gold,label:"Home Visit"}].map(({dot,label})=>(
//               <span key={label} style={{display:"flex",alignItems:"center",gap:4,fontSize:10,color:P.muted,fontWeight:700}}>
//                 <span style={{width:8,height:8,borderRadius:"50%",background:dot,display:"inline-block"}}/>{label}
//               </span>
//             ))}
//             <span style={{color:P.border}}>|</span>
//             {[{l:"Today",v:dayAppts.length,c:P.teal},{l:"Clinic",v:clinicCnt,c:P.tealDeep},{l:"Home",v:homeCnt,c:P.gold}].map(({l,v,c})=>(
//               <span key={l} style={{background:`${c}18`,border:`1px solid ${c}44`,
//                 borderRadius:20,padding:"1px 9px",fontSize:10,fontWeight:800,color:c,whiteSpace:"nowrap"}}>
//                 {v} {l}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mayor strip */}
//       {mayorSlots.length>0&&(
//         <div style={{display:"flex",gap:6,flexWrap:"wrap",padding:"5px 16px",
//           background:`${P.cream}88`,borderBottom:`1px solid ${P.border}`}}>
//           <span style={{fontSize:9,fontWeight:800,color:P.tealDark,textTransform:"uppercase",letterSpacing:.8,alignSelf:"center"}}>Mayor Available:</span>
//           {mayorSlots.map((s,i)=>(
//             <span key={i} style={{fontSize:9.5,fontWeight:700,color:P.tealDark,
//               background:`${P.teal}1a`,border:`1px solid ${P.teal}33`,borderRadius:20,padding:"2px 9px"}}>
//               {s.start} – {s.end}
//             </span>
//           ))}
//         </div>
//       )}

//       {/* Calendar body */}
//       {loading?(
//         <div style={{textAlign:"center",padding:"48px 0",color:P.muted}}>
//           <div style={{width:26,height:26,border:`3px solid ${P.border}`,borderTopColor:P.teal,
//             borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 10px"}}/>
//           Loading appointments…
//         </div>
//       ):view==="week"?(
//         <div style={{overflowX:"auto",overflowY:"auto",maxHeight:380}}>
//           <div style={{minWidth:560}}>
//             {/* Day headers */}
//             <div style={{display:"grid",gridTemplateColumns:"50px repeat(7,1fr)",
//               borderBottom:`1.5px solid ${P.border}`,background:P.bg,position:"sticky",top:0,zIndex:4}}>
//               <div style={{borderRight:`1px solid ${P.border}`}}/>
//               {weekDates.map((dt,i)=>{
//                 const isToday=isSameDay(dt,today), cnt=appsForDate(dt).length;
//                 return (
//                   <div key={i} style={{padding:"7px 3px",textAlign:"center",
//                     borderRight:i<6?`1px solid ${P.border}`:undefined,
//                     background:isToday?`${P.teal}0e`:"transparent"}}>
//                     <div style={{fontSize:9.5,fontWeight:700,color:isToday?P.teal:P.muted,letterSpacing:.4}}>{DAYS_SHORT[i]}</div>
//                     <div style={{width:27,height:27,borderRadius:"50%",margin:"2px auto 0",
//                       background:isToday?`linear-gradient(135deg,${P.teal},${P.tealDark})`:"transparent",
//                       display:"flex",alignItems:"center",justifyContent:"center",
//                       fontSize:12,fontWeight:900,color:isToday?"#fff":P.text}}>
//                       {dt.getDate()}
//                     </div>
//                     {cnt>0&&(
//                       <div style={{marginTop:2,fontSize:8,fontWeight:800,
//                         color:isToday?"#fff":P.teal,
//                         background:isToday?`${P.teal}cc`:`${P.teal}18`,
//                         borderRadius:20,padding:"1px 5px",display:"inline-block"}}>{cnt}</div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Hour rows */}
//             {hours.map(hour=>(
//               <div key={hour} style={{display:"grid",gridTemplateColumns:"50px repeat(7,1fr)",
//                 borderBottom:`1px solid ${P.border}55`,minHeight:54}}>
//                 <div style={{borderRight:`1px solid ${P.border}`,padding:"4px 5px 0 0",
//                   textAlign:"right",fontSize:9,fontWeight:700,color:P.muted,
//                   background:P.bg,position:"sticky",left:0,zIndex:2}}>
//                   {fmtH(hour)}
//                 </div>
//                 {weekDates.map((dt,di)=>{
//                   const isToday=isSameDay(dt,today);
//                   const slotAppts=appsForDate(dt).filter(a=>{
//                     const m=toMin(a.slotTime||"");
//                     return m>=(hour-8)*60&&m<(hour-8+1)*60;
//                   });
//                   return (
//                     <div key={di} style={{
//                       borderRight:di<6?`1px solid ${P.border}55`:undefined,
//                       padding:"3px 3px",background:isToday?`${P.teal}05`:"transparent"}}>
//                       {slotAppts.map((appt,ai)=>{
//                         const gIdx=filtered.indexOf(appt);
//                         return <ApptCard key={ai} appt={appt} color={ACCENT[gIdx%ACCENT.length]}/>;
//                       })}
//                     </div>
//                   );
//                 })}
//               </div>
//             ))}
//           </div>
//         </div>
//       ):(
//         /* Day view */
//         <div style={{overflowY:"auto",maxHeight:380}}>
//           {dayAppts.length===0?(
//             <div style={{textAlign:"center",padding:"44px 0",color:P.muted}}>
//               <div style={{fontSize:32,marginBottom:8}}>📅</div>
//               <div style={{fontWeight:700,fontSize:13,color:P.text,marginBottom:3}}>No appointments today</div>
//               <div style={{fontSize:11}}>Switch to Week view to browse other days</div>
//             </div>
//           ):(
//             <div style={{padding:"8px 16px"}}>
//               {hours.map(hour=>{
//                 const label=hour<12?`${hour}:00 AM`:hour===12?"12:00 PM":`${hour-12}:00 PM`;
//                 const hAppts=dayAppts.filter(a=>{const m=toMin(a.slotTime||"");return m>=(hour-8)*60&&m<(hour-8+1)*60;});
//                 return (
//                   <div key={hour} style={{display:"flex",gap:10,marginBottom:hAppts.length?8:2}}>
//                     <div style={{width:56,fontSize:9,fontWeight:hAppts.length?800:600,
//                       color:hAppts.length?P.teal:P.border,textAlign:"right",paddingTop:5,flexShrink:0,fontFamily:"monospace"}}>
//                       {label}
//                     </div>
//                     <div style={{flex:1,borderTop:hAppts.length?"none":`1px solid ${P.border}33`,paddingTop:hAppts.length?0:5}}>
//                       {hAppts.length>0&&(
//                         <div style={{display:"grid",gridTemplateColumns:`repeat(${Math.min(hAppts.length,3)},1fr)`,gap:6}}>
//                           {hAppts.map((appt,ai)=>{
//                             const gIdx=filtered.indexOf(appt);
//                             return <ApptCard key={ai} appt={appt} color={ACCENT[gIdx%ACCENT.length]}/>;
//                           })}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       )}

//       {/* Footer */}
//       <div style={{borderTop:`1px solid ${P.border}`,padding:"6px 16px",
//         display:"flex",alignItems:"center",justifyContent:"space-between",background:P.bg,flexWrap:"wrap",gap:4}}>
//         <div style={{display:"flex",alignItems:"center",gap:5}}>
//           <span style={{width:7,height:7,borderRadius:"50%",background:P.sage,display:"inline-block",
//             animation:"pulse 2s infinite",boxShadow:`0 0 6px ${P.sage}`}}/>
//           <span style={{fontSize:9.5,color:P.muted,fontWeight:700}}>Live · 8:00 AM – 6:00 PM</span>
//         </div>
//         <span style={{fontSize:9.5,color:P.muted}}>{filtered.length} total appointments</span>
//       </div>
//     </div>
//   );
// }

// // ─── Dashboard ────────────────────────────────────────────────────────────────
// export default function Dashboard() {
//   const navigate  = useNavigate();
//   const { user }  = useSelector(s=>s.auth);

//   const [stats,        setStats]        = useState({total:0,pending:0,resolved:0,inProgress:0});
//   const [recent,       setRecent]       = useState([]);
//   const [talukaData,   setTalukaData]   = useState({});
//   const [weeklyData,   setWeeklyData]   = useState([4,7,5,9,12,8,15]);
//   const [loading,      setLoading]      = useState(true);
//   const [activeTab,    setActiveTab]    = useState("all");
//   const [appointments, setAppointments] = useState([]);
//   const [apptLoading,  setApptLoading]  = useState(true);
//   const [mayorSlots,   setMayorSlots]   = useState([]);
//   const [peopleOnline, setPeopleOnline] = useState(0);

//   const fetchDashboard = useCallback(async()=>{
//     setLoading(true);
//     try{
//       const res=await axiosInstance.get("/inwardAll");
//       const data=res.data?.data||[];
//       setStats({total:data.length,
//         pending:data.filter(d=>d.status==="Pending").length,
//         resolved:data.filter(d=>d.status==="Resolved").length,
//         inProgress:data.filter(d=>d.status==="In Progress").length});
//       const tMap={};
//       data.forEach(d=>{if(d.taluka) tMap[d.taluka]=(tMap[d.taluka]||0)+1;});
//       setTalukaData(tMap);
//       const now=Date.now(),wk=Array(7).fill(0);
//       data.forEach(d=>{const diff=Math.floor((now-new Date(d.createdAt))/86400000);if(diff>=0&&diff<7)wk[6-diff]++;});
//       setWeeklyData(wk.map(v=>v||Math.floor(2+Math.random()*6)));
//       setRecent(data.slice(0,8));
//     }catch(e){console.error(e);}
//     finally{setLoading(false);}
//   },[]);

//   const fetchAppointments = useCallback(async()=>{
//     setApptLoading(true);
//     try{
//       const res=await citizenAxios.get("/citizen/admin/all-appointments");
//       if(res.data.success) setAppointments(res.data.appointments||[]);
//     }catch(e){console.error(e);setAppointments([]);}
//     finally{setApptLoading(false);}
//   },[]);

//   const fetchMayorSlots = useCallback(async()=>{
//     try{
//       const res=await axios.get(`${BASE_URL}/api/availability/get`);
//       if(res.data.success){
//         const ts=new Date().toISOString().slice(0,10);
//         const rec=res.data.data.find(a=>a.date===ts);
//         setMayorSlots(rec?.timeSlots||[]);
//       }
//     }catch(e){console.error(e);}
//   },[]);

//   useEffect(()=>{
//     fetchDashboard();fetchAppointments();fetchMayorSlots();
//     const iv=setInterval(()=>setPeopleOnline(Math.floor(12+Math.random()*8)),4000);
//     setPeopleOnline(Math.floor(12+Math.random()*8));
//     return()=>clearInterval(iv);
//   },[fetchDashboard,fetchAppointments,fetchMayorSlots]);

//   const resRate=stats.total>0?Math.round((stats.resolved/stats.total)*100):0;
//   const statusColor={"Pending":P.gold,"Resolved":P.sage,"In Progress":P.teal,"Rejected":"#d9534f"};
//   const statusBg={"Pending":`${P.gold}22`,"Resolved":`${P.sage}22`,"In Progress":`${P.teal}22`,"Rejected":"#fde8e8"};
//   const filteredRecent=activeTab==="all"?recent:recent.filter(r=>r.status===activeTab);

//   const cards=[
//     {label:"TOTAL APPLICATIONS",value:stats.total.toLocaleString(),sub:"▲ 12% last week",from:P.card1From,to:P.card1To,spark:[40,55,45,70,60,85,75],dark:false},
//     {label:"PENDING",           value:stats.pending,               sub:"▼ 5% last week", from:P.card2From,to:P.card2To,spark:[30,50,35,60,40,70,55],dark:false},
//     {label:"RESOLVED",          value:stats.resolved,              sub:"▲ 8% last week", from:P.card3From,to:P.card3To,spark:[20,40,30,55,45,65,60],dark:false},
//     {label:"IN PROGRESS",       value:stats.inProgress,            sub:"— ongoing",       from:P.card4From,to:P.card4To,spark:[15,30,25,40,35,50,45],dark:true},
//   ];

//   return (
//     <div style={{minHeight:"100vh",background:P.bg,fontFamily:"'Nunito','Segoe UI',sans-serif"}}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
//         @keyframes fadeUp {from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
//         @keyframes popIn  {from{opacity:0;transform:scale(.9) translateY(-4px)}to{opacity:1;transform:none}}
//         @keyframes pulse  {0%,100%{opacity:1}50%{opacity:.35}}
//         @keyframes spin   {to{transform:rotate(360deg)}}
//         .dc{animation:fadeUp .4s ease both;}
//         .tbl-row:hover{background:${P.teal}12!important;cursor:pointer;}
//         ::-webkit-scrollbar{width:5px;height:5px;}
//         ::-webkit-scrollbar-track{background:transparent;}
//         ::-webkit-scrollbar-thumb{background:${P.border};border-radius:99px;}
//         *{box-sizing:border-box;}

//         .dash-grid-4    {display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
//         .dash-grid-cal  {display:grid;grid-template-columns:1fr 288px;gap:18px;}
//         .dash-grid-track{display:grid;grid-template-columns:260px 1fr;gap:18px;}

//         @media(max-width:1100px){
//           .dash-grid-cal  {grid-template-columns:1fr!important;}
//           .dash-grid-track{grid-template-columns:1fr!important;}
//         }
//         @media(max-width:800px){
//           .dash-grid-4{grid-template-columns:repeat(2,1fr)!important;gap:10px!important;}
//         }
//         @media(max-width:480px){
//           .dash-grid-4{grid-template-columns:1fr!important;}
//           .dash-pad{padding:12px 10px!important;}
//         }
//       `}</style>

//       <div className="dash-pad" style={{padding:"20px 24px",maxWidth:1440,margin:"0 auto"}}>

//         {/* Accent bar */}
//         <div style={{height:4,background:`linear-gradient(90deg,${P.tealDark},${P.teal},${P.gold},${P.goldDeep},${P.cream},${P.goldDeep},${P.teal})`,borderRadius:99,marginBottom:20}}/>

//         {/* Page header */}
//         <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20,flexWrap:"wrap",gap:10}}>
//           <div>
//             <h2 style={{margin:0,fontSize:19,fontWeight:900,color:P.tealDark,letterSpacing:-.3}}>Analytic Overview</h2>
//             <p style={{margin:"3px 0 0",fontSize:11,color:P.muted}}>
//               Good {new Date().getHours()<12?"Morning":new Date().getHours()<17?"Afternoon":"Evening"}, {user?.fullName?.split(" ")[0]||"Admin"} 👋
//             </p>
//           </div>
//           <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
//             <button onClick={()=>{fetchDashboard();fetchAppointments();fetchMayorSlots();}}
//               style={{background:P.white,border:`1px solid ${P.border}`,borderRadius:9,
//                 padding:"6px 13px",fontSize:11,fontWeight:700,color:P.tealDark,cursor:"pointer"}}>↻ Refresh</button>
//             <div style={{display:"flex",alignItems:"center",gap:6,background:P.white,
//               border:`1px solid ${P.border}`,borderRadius:10,padding:"6px 12px"}}>
//               <span style={{width:7,height:7,borderRadius:"50%",background:P.sage,display:"inline-block",
//                 animation:"pulse 2s infinite",boxShadow:`0 0 7px ${P.sage}`}}/>
//               <span style={{fontSize:11,fontWeight:700,color:P.tealDark}}>{peopleOnline} Online</span>
//             </div>
//             <div style={{background:P.white,border:`1px solid ${P.border}`,borderRadius:9,
//               padding:"6px 12px",fontSize:11,fontWeight:700,color:P.tealDark}}>THIS YEAR ▾</div>
//           </div>
//         </div>

//         {loading?(
//           <div style={{textAlign:"center",padding:80,color:P.teal,fontWeight:700}}>Loading dashboard…</div>
//         ):(
//           <>
//             {/* 4 Stat Cards */}
//             <div className="dash-grid-4" style={{marginBottom:18}}>
//               {cards.map((card,i)=>(
//                 <div key={i} className="dc" style={{animationDelay:`${i*.07}s`,borderRadius:16,
//                   background:`linear-gradient(135deg,${card.from},${card.to})`,
//                   padding:"16px 18px",boxShadow:`0 8px 28px ${card.from}55`,
//                   position:"relative",overflow:"hidden",minHeight:105}}>
//                   <div style={{position:"absolute",top:-18,right:-18,width:72,height:72,borderRadius:"50%",background:"rgba(255,255,255,0.13)"}}/>
//                   <div style={{position:"absolute",bottom:-12,right:8,width:44,height:44,borderRadius:"50%",background:"rgba(255,255,255,0.09)"}}/>
//                   <div style={{fontSize:9,fontWeight:800,color:card.dark?"#6b5020":"rgba(255,255,255,.88)",letterSpacing:.9,textTransform:"uppercase",marginBottom:4}}>{card.label}</div>
//                   <div style={{fontSize:26,fontWeight:900,color:card.dark?P.tealDark:"#fff",letterSpacing:-1,marginBottom:2}}>{card.value}</div>
//                   <div style={{fontSize:9.5,color:card.dark?"#8a6830":"rgba(255,255,255,.72)",fontWeight:600,marginBottom:7}}>{card.sub}</div>
//                   <Sparkline color={card.dark?"#9a7828":"#fff"} data={card.spark}/>
//                 </div>
//               ))}
//             </div>

//             {/* Calendar + Status */}
//             <div className="dash-grid-cal" style={{marginBottom:18}}>
//               <CalendarPanel appointments={appointments} mayorSlots={mayorSlots} loading={apptLoading}/>

//               <div className="dc" style={{animationDelay:".37s",background:P.white,borderRadius:16,
//                 padding:"16px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",
//                 border:`1px solid ${P.border}`,display:"flex",flexDirection:"column"}}>
//                 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
//                   <h3 style={{margin:0,fontSize:13,fontWeight:900,color:P.tealDark}}>Status</h3>
//                   <div style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,padding:"3px 8px",fontSize:9.5,fontWeight:700,color:P.tealDark}}>TODAY ▾</div>
//                 </div>
//                 <div style={{display:"flex",justifyContent:"center",margin:"2px 0 6px"}}>
//                   <Donut pct={resRate}/>
//                 </div>
//                 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:10}}>
//                   {[{l:"BOOKED",v:stats.total,c:P.teal},{l:"PROGRESS",v:stats.inProgress,c:P.gold},{l:"PENDING",v:stats.pending,c:"#d9534f"}].map(({l,v,c})=>(
//                     <div key={l} style={{textAlign:"center",padding:"8px 3px",background:P.bg,borderRadius:9,border:`1px solid ${P.border}`}}>
//                       <div style={{fontSize:15,fontWeight:900,color:c}}>{v}</div>
//                       <div style={{fontSize:7,fontWeight:800,color:P.muted,letterSpacing:.4,textTransform:"uppercase",marginTop:2}}>{l}</div>
//                     </div>
//                   ))}
//                 </div>

//                 <div style={{borderTop:`1px solid ${P.border}`,paddingTop:8,marginBottom:8}}>
//                   <div style={{fontSize:10,fontWeight:800,color:P.tealDark,marginBottom:6}}>📅 Appointments</div>
//                   {[
//                     {l:"Total",        v:appointments.length,                                                             c:P.teal},
//                     {l:"Approved",     v:appointments.filter(a=>(a.status||"").toLowerCase()==="approved").length,        c:P.sage},
//                     {l:"Pending",      v:appointments.filter(a=>(a.status||"").toLowerCase()==="pending").length,         c:P.gold},
//                     {l:"Clinic Visit", v:appointments.filter(a=>(a.visitType||"Clinic Visit")==="Clinic Visit").length,   c:P.teal},
//                     {l:"Home Visit",   v:appointments.filter(a=>a.visitType==="Home Visit").length,                       c:P.gold},
//                   ].map(({l,v,c})=>(
//                     <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"2.5px 0"}}>
//                       <span style={{display:"flex",alignItems:"center",gap:4,fontSize:9.5,color:P.muted,fontWeight:600}}>
//                         <span style={{width:5,height:5,borderRadius:"50%",background:c,display:"inline-block"}}/>{l}
//                       </span>
//                       <span style={{fontSize:10.5,fontWeight:800,color:c}}>{v}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {mayorSlots.length>0&&(
//                   <div style={{borderTop:`1px solid ${P.border}`,paddingTop:7,marginBottom:8}}>
//                     <div style={{fontSize:10,fontWeight:800,color:P.tealDark,marginBottom:5}}>🏛 Mayor Today</div>
//                     {mayorSlots.map((s,i)=>(
//                       <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"2px 0",fontSize:9.5,color:P.muted,fontWeight:600}}>
//                         <span>Slot {i+1}</span>
//                         <span style={{color:P.tealDark,fontWeight:800}}>{s.start} – {s.end}</span>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 <div style={{borderTop:`1px solid ${P.border}`,paddingTop:8}}>
//                   <div style={{fontSize:10.5,fontWeight:800,color:P.tealDark,marginBottom:6}}>📈 Weekly Trend</div>
//                   <MiniBar data={weeklyData} color={P.teal}/>
//                   <div style={{display:"flex",justifyContent:"space-between",marginTop:3}}>
//                     {["M","T","W","T","F","S","S"].map((d,i)=>(
//                       <span key={i} style={{fontSize:8.5,color:P.muted,flex:1,textAlign:"center",fontWeight:700}}>{d}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Tracking + Recent */}
//             <div className="dash-grid-track" style={{marginBottom:8}}>
//               <div className="dc" style={{animationDelay:".44s",background:P.white,borderRadius:16,
//                 padding:"18px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",border:`1px solid ${P.border}`}}>
//                 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
//                   <h3 style={{margin:0,fontSize:13,fontWeight:900,color:P.tealDark}}>Tracking</h3>
//                   <div style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,padding:"3px 8px",fontSize:9.5,fontWeight:700,color:P.tealDark}}>THIS YEAR ▾</div>
//                 </div>
//                 <div style={{display:"flex",justifyContent:"space-between",padding:"0 2px 7px",borderBottom:`1px solid ${P.border}`,marginBottom:5}}>
//                   <span style={{fontSize:9,fontWeight:800,color:P.muted,textTransform:"uppercase",letterSpacing:.5}}>Region</span>
//                   <span style={{fontSize:9,fontWeight:800,color:P.muted,textTransform:"uppercase",letterSpacing:.5}}>Amount</span>
//                 </div>
//                 {Object.entries(talukaData).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([taluka,count],i)=>{
//                   const cols=[P.teal,P.gold,P.sage,P.tealDeep,P.goldDeep,P.tealDark];
//                   const c=cols[i%cols.length];
//                   return (
//                     <div key={taluka} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 2px",borderBottom:`1px solid ${P.border}55`}}>
//                       <div style={{display:"flex",alignItems:"center",gap:7}}>
//                         <div style={{width:7,height:7,borderRadius:"50%",background:c}}/>
//                         <span style={{fontSize:11.5,fontWeight:600,color:P.text}}>{taluka}</span>
//                       </div>
//                       <span style={{fontSize:11.5,fontWeight:800,color:c}}>{count}</span>
//                     </div>
//                   );
//                 })}
//                 {!Object.keys(talukaData).length&&(
//                   <div style={{textAlign:"center",color:P.muted,fontSize:12,padding:"18px 0"}}>No data yet</div>
//                 )}
//               </div>

//               <div className="dc" style={{animationDelay:".51s",background:P.white,borderRadius:16,
//                 padding:"18px 20px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",border:`1px solid ${P.border}`}}>
//                 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,flexWrap:"wrap",gap:8}}>
//                   <div>
//                     <h3 style={{margin:0,fontSize:14,fontWeight:900,color:P.tealDark}}>Recent Applications</h3>
//                     <p style={{margin:"2px 0 0",fontSize:10,color:P.muted}}>Latest inward complaints</p>
//                   </div>
//                   <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
//                     {["all","Pending","Resolved","In Progress"].map(tab=>(
//                       <button key={tab} onClick={()=>setActiveTab(tab)} style={{
//                         border:`1px solid ${activeTab===tab?P.teal:P.border}`,
//                         background:activeTab===tab?`linear-gradient(135deg,${P.teal},${P.tealDark})`:P.white,
//                         color:activeTab===tab?"#fff":P.muted,
//                         borderRadius:8,padding:"4px 11px",fontSize:10.5,fontWeight:700,cursor:"pointer",
//                         boxShadow:activeTab===tab?`0 4px 12px ${P.teal}44`:"none",transition:"all .2s"}}>
//                         {tab==="all"?"All":tab}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//                 <div style={{overflowX:"auto"}}>
//                   <table style={{width:"100%",borderCollapse:"collapse",fontSize:11.5}}>
//                     <thead>
//                       <tr style={{background:P.bg}}>
//                         {["Inward No","Applicant","Subject","Taluka","Department","Priority","Status","Date"].map(h=>(
//                           <th key={h} style={{padding:"8px 10px",textAlign:"left",color:P.tealDark,fontWeight:800,
//                             fontSize:9.5,whiteSpace:"nowrap",letterSpacing:.3,textTransform:"uppercase",
//                             borderBottom:`2px solid ${P.border}`}}>{h}</th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {filteredRecent.length===0?(
//                         <tr><td colSpan={8} style={{textAlign:"center",padding:28,color:P.muted}}>No applications found</td></tr>
//                       ):filteredRecent.map((item,i)=>(
//                         <tr key={i} className="tbl-row"
//                           onClick={()=>navigate("/allapplication")}
//                           style={{borderBottom:`1px solid ${P.border}55`,transition:"background .15s"}}>
//                           <td style={{padding:"8px 10px",color:P.teal,fontWeight:800,whiteSpace:"nowrap",fontFamily:"monospace",fontSize:10.5}}>{item.inwardNo||"—"}</td>
//                           <td style={{padding:"8px 10px",fontWeight:700,color:P.text}}>{item.fullName||"—"}</td>
//                           <td style={{padding:"8px 10px",color:P.muted,maxWidth:130,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.subject||"—"}</td>
//                           <td style={{padding:"8px 10px",color:P.muted}}>{item.taluka||"—"}</td>
//                           <td style={{padding:"8px 10px",color:P.muted,whiteSpace:"nowrap"}}>{item.mainDepartment||"—"}</td>
//                           <td style={{padding:"8px 10px"}}>
//                             <span style={{fontSize:9.5,fontWeight:800,padding:"2px 8px",borderRadius:20,
//                               background:item.priority==="Emergency"?"#fde8e8":item.priority==="Urgent"?`${P.gold}22`:`${P.sage}22`,
//                               color:item.priority==="Emergency"?"#d9534f":item.priority==="Urgent"?P.goldDeep:P.sage,
//                               border:`1px solid ${item.priority==="Emergency"?"#f5c6c6":item.priority==="Urgent"?P.gold+"44":P.sage+"44"}`}}>
//                               {item.priority||"Normal"}
//                             </span>
//                           </td>
//                           <td style={{padding:"8px 10px"}}>
//                             <span style={{fontSize:9.5,fontWeight:800,padding:"2px 8px",borderRadius:20,
//                               background:statusBg[item.status]||`${P.border}55`,
//                               color:statusColor[item.status]||P.muted,
//                               border:`1px solid ${statusColor[item.status]||P.border}44`}}>
//                               {item.status||"—"}
//                             </span>
//                           </td>
//                           <td style={{padding:"8px 10px",color:P.muted,whiteSpace:"nowrap",fontSize:10.5}}>
//                             {item.submissionDate||(item.createdAt?new Date(item.createdAt).toLocaleDateString("en-IN"):"—")}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//                 <div style={{marginTop:10,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
//                   <span style={{fontSize:10.5,color:P.muted}}>Showing {filteredRecent.length} of {stats.total}</span>
//                   <div style={{display:"flex",gap:8}}>
//                     <button onClick={()=>navigate("/allapplication")} style={{
//                       background:`linear-gradient(135deg,${P.teal},${P.tealDark})`,
//                       color:"#fff",border:"none",borderRadius:9,padding:"6px 14px",
//                       fontSize:11,fontWeight:800,cursor:"pointer",boxShadow:`0 4px 14px ${P.teal}55`}}>
//                       All Applications →
//                     </button>
//                     <button onClick={()=>navigate("/applicationcitizens")} style={{
//                       background:`linear-gradient(135deg,${P.gold},${P.goldDeep})`,
//                       color:"#fff",border:"none",borderRadius:9,padding:"6px 14px",
//                       fontSize:11,fontWeight:800,cursor:"pointer",boxShadow:`0 4px 14px ${P.gold}55`}}>
//                       Citizen Appts →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div style={{textAlign:"center",color:P.muted,fontSize:10.5,padding:"12px 0 4px"}}>
//               © {new Date().getFullYear()} Vasai-Virar City Municipal Corporation · Janata Darbar System
//               <span style={{margin:"0 8px",color:P.gold}}>◆</span>
//               स्थापना : ३ जुलै २००९
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }




// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../services/axiosInstance";
// import citizenAxios from "../services/citizenAxios";
// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// const P = {
//   teal:"#4CABC1", tealDeep:"#49ACC3", tealDark:"#187484",
//   gold:"#CE9A54", goldDeep:"#CA9D28", sage:"#66A962", cream:"#F5E7C2",
//   card1From:"#4CABC1", card1To:"#49ACC3",
//   card2From:"#CE9A54", card2To:"#CA9D28",
//   card3From:"#66A962", card3To:"#4a8f47",
//   card4From:"#F5E7C2", card4To:"#e0c98a",
//   bg:"#f0f7f9", white:"#ffffff", text:"#1a3a40", muted:"#6b8f95", border:"#d8edf1",
// };
// const ACCENT = [P.teal, P.gold, P.sage, P.tealDeep, P.goldDeep, P.tealDark, P.gold, P.teal];

// const STATUS_CFG = {
//   pending:      {bg:"#fef9c3",color:"#92400e",border:"#fde68a",dot:"#f59e0b",label:"Pending"},
//   approved:     {bg:"#dcfce7",color:"#166534",border:"#86efac",dot:"#16a34a",label:"Approved"},
//   rejected:     {bg:"#fee2e2",color:"#991b1b",border:"#fca5a5",dot:"#ef4444",label:"Rejected"},
//   "in progress":{bg:"#dbeafe",color:"#1e40af",border:"#93c5fd",dot:"#3b82f6",label:"In Progress"},
//   resolved:     {bg:"#f0fdf4",color:"#166534",border:"#bbf7d0",dot:"#22c55e",label:"Resolved"},
// };
// const sc = s => STATUS_CFG[(s||"pending").toLowerCase()] || STATUS_CFG.pending;

// // ── Helpers ───────────────────────────────────────────────────────────────────
// function Sparkline({ color="#fff", data=[30,45,35,60,40,70,55] }) {
//   const w=90,h=36,max=Math.max(...data),min=Math.min(...data);
//   const pts=data.map((v,i)=>`${(i/(data.length-1))*w},${h-((v-min)/(max-min+1))*(h-4)-2}`).join(" ");
//   const gid=`sg${color.replace('#','')}`;
//   return (
//     <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{opacity:.75}}>
//       <defs><linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
//         <stop offset="0%" stopColor={color} stopOpacity=".45"/>
//         <stop offset="100%" stopColor={color} stopOpacity="0"/>
//       </linearGradient></defs>
//       <polygon points={`0,${h} ${pts} ${w},${h}`} fill={`url(#${gid})`}/>
//       <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   );
// }

// function Donut({ pct=0 }) {
//   const r=46,c=2*Math.PI*r,dash=(pct/100)*c;
//   return (
//     <svg width={112} height={112} viewBox="0 0 112 112">
//       <circle cx={56} cy={56} r={r} fill="none" stroke={P.border} strokeWidth={12}/>
//       <circle cx={56} cy={56} r={r} fill="none" stroke={P.teal} strokeWidth={12}
//         strokeDasharray={`${dash} ${c-dash}`} strokeLinecap="round" transform="rotate(-90 56 56)"
//         style={{transition:"stroke-dasharray 1s ease"}}/>
//       <text x={56} y={52} textAnchor="middle" fontSize={20} fontWeight={900} fill={P.tealDark}>{pct}%</text>
//       <text x={56} y={66} textAnchor="middle" fontSize={9} fill={P.muted} fontWeight={700} letterSpacing={.8}>RESOLVED</text>
//     </svg>
//   );
// }

// function MiniBar({ data=[], color=P.teal }) {
//   const max=Math.max(...data,1);
//   return (
//     <div style={{display:"flex",alignItems:"flex-end",gap:3,height:38}}>
//       {data.map((v,i)=>(
//         <div key={i} style={{flex:1,borderRadius:"3px 3px 0 0",minHeight:4,
//           background:i===data.length-1?color:`${color}66`,height:`${(v/max)*100}%`}}/>
//       ))}
//     </div>
//   );
// }

// function Av({ name="", size=28, color=P.teal }) {
//   const ini=name.split(" ").filter(Boolean).map(n=>n[0]).join("").slice(0,2).toUpperCase()||"?";
//   return (
//     <div style={{width:size,height:size,borderRadius:"50%",
//       background:`linear-gradient(135deg,${color},${color}cc)`,
//       display:"flex",alignItems:"center",justifyContent:"center",
//       color:"#fff",fontSize:size*.34,fontWeight:800,flexShrink:0,
//       border:"2.5px solid #fff",boxShadow:`0 2px 8px ${color}44`}}>
//       {ini}
//     </div>
//   );
// }

// function toMin(t="08:00 AM") {
//   if(!t) return 0;
//   const [tp,per]=(t||"08:00 AM").split(" ");
//   const [h,m]=(tp||"08:00").split(":").map(Number);
//   let H=h||8; if(per==="PM"&&H!==12)H+=12; if(per==="AM"&&H===12)H=0;
//   return Math.max(0,(H*60+(m||0))-(8*60));
// }

// function getWeekDates(base) {
//   const d=new Date(base), day=d.getDay(), diff=day===0?-6:1-day;
//   const mon=new Date(d); mon.setDate(d.getDate()+diff);
//   return Array.from({length:7},(_,i)=>{ const dt=new Date(mon); dt.setDate(mon.getDate()+i); return dt; });
// }
// function isSameDay(a,b) {
//   return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate();
// }
// const DAYS_SHORT=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

// // ─────────────────────────────────────────────────────────────────────────────
// // COMPACT POPUP — position:fixed, never clipped by any scroll/overflow
// // Works on ALL screen sizes — uses getBoundingClientRect() viewport coords
// // ─────────────────────────────────────────────────────────────────────────────
// function CompactPopup({ appt, color, onClose, anchorRect }) {
//   const cfg      = sc(appt.status);
//   const isClinic = (appt.visitType||"Clinic Visit")==="Clinic Visit";
//   const popRef   = useRef(null);
//   const [pos, setPos] = useState({top:0,left:0,ready:false});

//   /* Smart positioning — called once after mount when DOM size is known */
//   const calcPos = useCallback(()=>{
//     if(!anchorRect||!popRef.current) return;
//     const PW = popRef.current.offsetWidth  || 240;
//     const PH = popRef.current.offsetHeight || 300;
//     const vw = window.innerWidth;
//     const vh = window.innerHeight;

//     // Try right of card first
//     let left = anchorRect.right + 10;
//     let top  = anchorRect.top;

//     // Flip left if off-screen right
//     if(left + PW > vw - 10) left = anchorRect.left - PW - 10;
//     // Clamp left edge
//     if(left < 10) left = 10;
//     // Clamp bottom
//     if(top + PH > vh - 10) top = Math.max(10, vh - PH - 10);

//     setPos({top, left, ready:true});
//   },[anchorRect]);

//   /* Run positioning after first paint */
//   useEffect(()=>{
//     // requestAnimationFrame ensures DOM is painted and offsetWidth is real
//     const raf = requestAnimationFrame(calcPos);
//     return ()=>cancelAnimationFrame(raf);
//   },[calcPos]);

//   /* Recalculate on window resize */
//   useEffect(()=>{
//     window.addEventListener("resize", calcPos);
//     return ()=>window.removeEventListener("resize", calcPos);
//   },[calcPos]);

//   /* Close on outside click */
//   useEffect(()=>{
//     const fn = e=>{ if(popRef.current && !popRef.current.contains(e.target)) onClose(); };
//     document.addEventListener("mousedown", fn);
//     return ()=>document.removeEventListener("mousedown", fn);
//   },[onClose]);

//   /* Close on scroll (debounced so popup doesn't vanish instantly) */
//   useEffect(()=>{
//     let t;
//     const fn = ()=>{ clearTimeout(t); t=setTimeout(onClose, 80); };
//     window.addEventListener("scroll", fn, true);
//     return ()=>{ window.removeEventListener("scroll", fn, true); clearTimeout(t); };
//   },[onClose]);

//   /* Close on Escape */
//   useEffect(()=>{
//     const fn = e=>{ if(e.key==="Escape") onClose(); };
//     document.addEventListener("keydown", fn);
//     return ()=>document.removeEventListener("keydown", fn);
//   },[onClose]);

//   return (
//     <div ref={popRef} style={{
//       position:"fixed",
//       top:  pos.top,
//       left: pos.left,
//       /* Invisible until positioned to avoid flash at 0,0 */
//       opacity: pos.ready ? 1 : 0,
//       zIndex: 99999,
//       width: 238,
//       background: P.white,
//       borderRadius: 14,
//       boxShadow: "0 8px 36px rgba(0,0,0,0.20), 0 2px 8px rgba(0,0,0,0.10)",
//       border: `1px solid ${P.border}`,
//       overflow: "hidden",
//       transition: "opacity .12s",
//       animation: "popIn .16s cubic-bezier(.34,1.4,.64,1)",
//     }}>

//       {/* Header */}
//       <div style={{
//         background:`linear-gradient(135deg,${color},${color}dd)`,
//         padding:"11px 12px 10px",
//         display:"flex",alignItems:"center",gap:10,
//       }}>
//         <Av name={appt.fullName} size={36} color={color}/>
//         <div style={{flex:1,minWidth:0}}>
//           <div style={{fontSize:13,fontWeight:900,color:"#fff",
//             overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
//             {appt.fullName||"—"}
//           </div>
//           <div style={{fontSize:10,color:"rgba(255,255,255,0.82)",marginTop:2,fontWeight:600}}>
//             {appt.slotTime||"—"}
//           </div>
//         </div>
//         <button onClick={e=>{e.stopPropagation();onClose();}} style={{
//           background:"rgba(255,255,255,0.22)",border:"none",borderRadius:"50%",
//           width:22,height:22,cursor:"pointer",color:"#fff",fontSize:13,fontWeight:900,
//           display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,lineHeight:1,
//         }}>✕</button>
//       </div>

//       {/* Body */}
//       <div style={{padding:"10px 13px 12px"}}>

//         {/* Phone */}
//         <Row icon="📱" val={appt.mobileNumber||"—"} bold/>

//         {/* Ward */}
//         <Row icon="📍" val={`Ward: ${appt.ward||"—"}`}/>

//         {/* Visit type — dot only, NO "Clinic Visit" text since this is Mayor appointment */}
//         <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:7}}>
//           <span style={{fontSize:14,flexShrink:0}}>📅</span>
//           <span style={{display:"inline-flex",alignItems:"center",gap:6,
//             fontSize:12,fontWeight:700,color:isClinic?P.tealDark:P.goldDeep}}>
//             <span style={{width:9,height:9,borderRadius:"50%",
//               background:isClinic?P.teal:P.gold,display:"inline-block",
//               boxShadow:`0 0 6px ${isClinic?P.teal:P.gold}88`}}/>
//             {/* Mayor appointment type — no clinic/home label */}
//             {isClinic ? "In-person Visit" : "Home Visit"}
//           </span>
//         </div>

//         {/* Purpose */}
//         {appt.purpose&&(
//           <Row icon="🎯" val={(appt.purpose).slice(0,44)+(appt.purpose.length>44?"…":"")}/>
//         )}

//         {/* Visitors */}
//         <Row icon="👥" val={`Visitors: ${appt.numberOfVisitors||1}`}/>

//         {/* Status badge */}
//         <div style={{marginBottom:8}}>
//           <span style={{
//             display:"inline-flex",alignItems:"center",gap:6,
//             background:cfg.bg,color:cfg.color,border:`1.5px solid ${cfg.border}`,
//             padding:"4px 12px",borderRadius:20,fontSize:11,fontWeight:800,
//           }}>
//             <span style={{width:7,height:7,borderRadius:"50%",background:cfg.dot,display:"inline-block"}}/>
//             {cfg.label}
//           </span>
//         </div>

//         {/* Token */}
//         {(appt.tokenId||appt._id)&&(
//           <div style={{fontSize:9.5,color:P.muted,fontWeight:600,fontFamily:"monospace",
//             overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
//             Token: {appt.tokenId||appt._id?.slice(-12)||"—"}
//           </div>
//         )}

//         {/* View Details */}
//         <div style={{borderTop:`1px solid ${P.border}`,marginTop:10,paddingTop:8,
//           display:"flex",justifyContent:"flex-end"}}>
//           <span style={{fontSize:11.5,color:P.teal,fontWeight:800,cursor:"pointer",
//             display:"flex",alignItems:"center",gap:4}}>
//             View Details ↗
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Row({ icon, val, bold=false }) {
//   return (
//     <div style={{display:"flex",alignItems:"flex-start",gap:8,marginBottom:7}}>
//       <span style={{fontSize:14,flexShrink:0,marginTop:1}}>{icon}</span>
//       <span style={{fontSize:12,fontWeight:bold?700:600,color:bold?P.text:P.muted,lineHeight:1.4}}>{val}</span>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // Appointment card in calendar cell
// // Clicking measures its viewport rect and passes to CompactPopup
// // ─────────────────────────────────────────────────────────────────────────────
// function ApptCard({ appt, color }) {
//   const [anchorRect, setAnchorRect] = useState(null);
//   const cardRef  = useRef(null);
//   const isOpen   = !!anchorRect;
//   const isClinic = (appt.visitType||"Clinic Visit")==="Clinic Visit";

//   const handleClick = useCallback(e=>{
//     e.stopPropagation();
//     if(isOpen){ setAnchorRect(null); return; }
//     const rect = cardRef.current?.getBoundingClientRect();
//     if(rect) setAnchorRect({...rect}); // plain object copy
//   },[isOpen]);

//   const handleClose = useCallback(()=>setAnchorRect(null),[]);

//   return (
//     <>
//       <div ref={cardRef} onClick={handleClick} style={{
//         background: isOpen ? `${color}22` : `${color}14`,
//         border:`1.5px solid ${isOpen?color:color+"55"}`,
//         borderLeft:`3px solid ${color}`,
//         borderRadius:"0 8px 8px 0",
//         padding:"5px 8px",
//         cursor:"pointer",
//         marginBottom:4,
//         userSelect:"none",
//         transition:"all .13s",
//         boxShadow: isOpen ? `0 4px 14px ${color}33` : "none",
//       }}
//         onMouseEnter={e=>{
//           e.currentTarget.style.background=`${color}26`;
//           e.currentTarget.style.borderColor=color;
//           e.currentTarget.style.transform="translateY(-1px)";
//           e.currentTarget.style.boxShadow=`0 4px 14px ${color}33`;
//         }}
//         onMouseLeave={e=>{
//           e.currentTarget.style.background=isOpen?`${color}22`:`${color}14`;
//           e.currentTarget.style.borderColor=isOpen?color:`${color}55`;
//           e.currentTarget.style.borderLeftColor=color;
//           e.currentTarget.style.transform="none";
//           e.currentTarget.style.boxShadow=isOpen?`0 4px 14px ${color}33`:"none";
//         }}
//       >
//         <div style={{display:"flex",alignItems:"center",gap:6}}>
//           <Av name={appt.fullName} size={20} color={color}/>
//           <div style={{flex:1,minWidth:0}}>
//             <div style={{fontSize:10.5,fontWeight:800,color:P.text,
//               overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
//               {appt.fullName||"—"}
//             </div>
//             {/* ── Time + colored dot only — NO "Clinic"/"Home" text ── */}
//             <div style={{fontSize:9,fontWeight:700,color:color,marginTop:1,
//               display:"flex",alignItems:"center",gap:5}}>
//               {appt.slotTime||"—"}
//               <span style={{width:6,height:6,borderRadius:"50%",flexShrink:0,
//                 background:isClinic?P.teal:P.gold,
//                 boxShadow:`0 0 5px ${isClinic?P.teal:P.gold}88`,
//                 display:"inline-block"}}/>
//             </div>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <CompactPopup
//           appt={appt}
//           color={color}
//           onClose={handleClose}
//           anchorRect={anchorRect}
//         />
//       )}
//     </>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // Calendar Panel
// // ─────────────────────────────────────────────────────────────────────────────
// function CalendarPanel({ appointments=[], mayorSlots=[], loading=false }) {
//   const [view,     setView]     = useState("week");
//   const [weekBase, setWeekBase] = useState(new Date());
//   const [search,   setSearch]   = useState("");

//   const weekDates = getWeekDates(weekBase);
//   const today     = new Date();

//   const filtered = appointments.filter(a=>{
//     if(!search) return true;
//     const q=search.toLowerCase();
//     return (a.fullName||"").toLowerCase().includes(q)||
//            (a.purpose||"").toLowerCase().includes(q)||
//            (a.ward||"").toLowerCase().includes(q)||
//            (a.mobileNumber||"").includes(q);
//   });

//   const ds = dt=>`${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,"0")}-${String(dt.getDate()).padStart(2,"0")}`;
//   const appsForDate = dt=>filtered.filter(a=>(a.preferredDate||"").slice(0,10)===ds(dt));

//   const todayStr = ds(today);
//   const dayAppts = filtered.filter(a=>(a.preferredDate||"").slice(0,10)===todayStr);

//   // For mayor appointments, "clinic" = In-person, "home" = Home Visit
//   const inPersonCnt = filtered.filter(a=>(a.visitType||"Clinic Visit")==="Clinic Visit").length;
//   const homeCnt     = filtered.filter(a=>a.visitType==="Home Visit").length;

//   const monthLabel = weekDates[0].toLocaleDateString("en-IN",{month:"long",year:"numeric"});
//   const hours      = Array.from({length:10},(_,i)=>8+i);
//   const fmtH       = h=>h<12?`${h} AM`:h===12?"12 PM":`${h-12} PM`;

//   return (
//     <div className="dc" style={{animationDelay:".3s",background:P.white,borderRadius:16,
//       overflow:"hidden",boxShadow:"0 4px 24px rgba(0,0,0,0.07)",border:`1px solid ${P.border}`,
//       display:"flex",flexDirection:"column"}}>

//       {/* ── Header ── */}
//       <div style={{padding:"13px 16px 10px",borderBottom:`1px solid ${P.border}`}}>
//         <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",
//           marginBottom:10,gap:8,flexWrap:"wrap"}}>
//           <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
//             <div>
//               <h3 style={{margin:0,fontSize:14,fontWeight:900,color:P.tealDark}}>📅 Today's Appointments</h3>
//               <p style={{margin:"2px 0 0",fontSize:10,color:P.muted,fontWeight:600}}>
//                 {today.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}
//               </p>
//             </div>
//             <div style={{background:`linear-gradient(135deg,${P.teal},${P.tealDark})`,color:"#fff",
//               fontSize:12,fontWeight:900,padding:"3px 12px",borderRadius:20,
//               boxShadow:`0 3px 10px ${P.teal}44`,whiteSpace:"nowrap"}}>
//               {filtered.length} All Appointments
//             </div>
//           </div>
//           <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
//             <div style={{position:"relative"}}>
//               <span style={{position:"absolute",left:9,top:"50%",transform:"translateY(-50%)",fontSize:11,color:P.muted}}>🔍</span>
//               <input value={search} onChange={e=>setSearch(e.target.value)}
//                 placeholder="Search..." style={{border:`1.5px solid ${P.border}`,borderRadius:8,
//                   padding:"5px 10px 5px 26px",fontSize:11,color:P.text,
//                   outline:"none",background:P.bg,width:130,fontFamily:"inherit"}}/>
//             </div>
//             <div style={{display:"flex",background:P.bg,border:`1px solid ${P.border}`,borderRadius:9,padding:2}}>
//               {["Day","Week"].map(v=>(
//                 <button key={v} onClick={()=>setView(v.toLowerCase())} style={{
//                   padding:"4px 12px",borderRadius:7,border:"none",
//                   background:view===v.toLowerCase()?`linear-gradient(135deg,${P.teal},${P.tealDark})`:"transparent",
//                   color:view===v.toLowerCase()?"#fff":P.muted,
//                   fontSize:11,fontWeight:800,cursor:"pointer",transition:"all .15s"}}>
//                   {v}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Row 2: nav + legend */}
//         <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:6}}>
//           {view==="week"?(
//             <div style={{display:"flex",alignItems:"center",gap:8}}>
//               <button onClick={()=>{const d=new Date(weekBase);d.setDate(d.getDate()-7);setWeekBase(d);}}
//                 style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,
//                   width:28,height:28,cursor:"pointer",fontSize:14,color:P.tealDark,fontWeight:800}}>‹</button>
//               <span style={{fontSize:12,fontWeight:800,color:P.tealDark,minWidth:120,textAlign:"center"}}>{monthLabel}</span>
//               <button onClick={()=>{const d=new Date(weekBase);d.setDate(d.getDate()+7);setWeekBase(d);}}
//                 style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,
//                   width:28,height:28,cursor:"pointer",fontSize:14,color:P.tealDark,fontWeight:800}}>›</button>
//             </div>
//           ):<div/>}

//           {/* Legend — dot + label, no "Clinic" wording */}
//           <div style={{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"}}>
//             {[{dot:P.teal,label:"In-person"},{dot:P.gold,label:"Home Visit"}].map(({dot,label})=>(
//               <span key={label} style={{display:"flex",alignItems:"center",gap:4,fontSize:10,color:P.muted,fontWeight:700}}>
//                 <span style={{width:8,height:8,borderRadius:"50%",background:dot,display:"inline-block"}}/>{label}
//               </span>
//             ))}
//             <span style={{color:P.border}}>|</span>
//             {[
//               {l:"Today",    v:dayAppts.length,c:P.teal},
//               {l:"In-person",v:inPersonCnt,    c:P.tealDeep},
//               {l:"Home",     v:homeCnt,        c:P.gold},
//             ].map(({l,v,c})=>(
//               <span key={l} style={{background:`${c}18`,border:`1px solid ${c}44`,
//                 borderRadius:20,padding:"1px 9px",fontSize:10,fontWeight:800,color:c,whiteSpace:"nowrap"}}>
//                 {v} {l}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mayor availability strip */}
//       {mayorSlots.length>0&&(
//         <div style={{display:"flex",gap:6,flexWrap:"wrap",padding:"5px 16px",
//           background:`${P.cream}88`,borderBottom:`1px solid ${P.border}`}}>
//           <span style={{fontSize:9,fontWeight:800,color:P.tealDark,textTransform:"uppercase",letterSpacing:.8,alignSelf:"center"}}>Mayor Available:</span>
//           {mayorSlots.map((s,i)=>(
//             <span key={i} style={{fontSize:9.5,fontWeight:700,color:P.tealDark,
//               background:`${P.teal}1a`,border:`1px solid ${P.teal}33`,borderRadius:20,padding:"2px 9px"}}>
//               {s.start} – {s.end}
//             </span>
//           ))}
//         </div>
//       )}

//       {/* Calendar body */}
//       {loading?(
//         <div style={{textAlign:"center",padding:"48px 0",color:P.muted}}>
//           <div style={{width:26,height:26,border:`3px solid ${P.border}`,borderTopColor:P.teal,
//             borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 10px"}}/>
//           Loading appointments…
//         </div>
//       ):view==="week"?(
//         /* WEEK VIEW */
//         <div style={{overflowX:"auto",overflowY:"auto",maxHeight:380}}>
//           <div style={{minWidth:560}}>
//             {/* Day headers */}
//             <div style={{display:"grid",gridTemplateColumns:"50px repeat(7,1fr)",
//               borderBottom:`1.5px solid ${P.border}`,background:P.bg,position:"sticky",top:0,zIndex:4}}>
//               <div style={{borderRight:`1px solid ${P.border}`}}/>
//               {weekDates.map((dt,i)=>{
//                 const isToday=isSameDay(dt,today), cnt=appsForDate(dt).length;
//                 return (
//                   <div key={i} style={{padding:"7px 3px",textAlign:"center",
//                     borderRight:i<6?`1px solid ${P.border}`:undefined,
//                     background:isToday?`${P.teal}0e`:"transparent"}}>
//                     <div style={{fontSize:9.5,fontWeight:700,color:isToday?P.teal:P.muted,letterSpacing:.4}}>{DAYS_SHORT[i]}</div>
//                     <div style={{width:27,height:27,borderRadius:"50%",margin:"2px auto 0",
//                       background:isToday?`linear-gradient(135deg,${P.teal},${P.tealDark})`:"transparent",
//                       display:"flex",alignItems:"center",justifyContent:"center",
//                       fontSize:12,fontWeight:900,color:isToday?"#fff":P.text}}>
//                       {dt.getDate()}
//                     </div>
//                     {cnt>0&&(
//                       <div style={{marginTop:2,fontSize:8,fontWeight:800,
//                         color:isToday?"#fff":P.teal,
//                         background:isToday?`${P.teal}cc`:`${P.teal}18`,
//                         borderRadius:20,padding:"1px 5px",display:"inline-block"}}>{cnt}</div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//             {/* Hour rows */}
//             {hours.map(hour=>(
//               <div key={hour} style={{display:"grid",gridTemplateColumns:"50px repeat(7,1fr)",
//                 borderBottom:`1px solid ${P.border}55`,minHeight:54}}>
//                 <div style={{borderRight:`1px solid ${P.border}`,padding:"4px 5px 0 0",
//                   textAlign:"right",fontSize:9,fontWeight:700,color:P.muted,
//                   background:P.bg,position:"sticky",left:0,zIndex:2}}>
//                   {fmtH(hour)}
//                 </div>
//                 {weekDates.map((dt,di)=>{
//                   const isToday=isSameDay(dt,today);
//                   const slotAppts=appsForDate(dt).filter(a=>{
//                     const m=toMin(a.slotTime||"");
//                     return m>=(hour-8)*60&&m<(hour-8+1)*60;
//                   });
//                   return (
//                     <div key={di} style={{
//                       borderRight:di<6?`1px solid ${P.border}55`:undefined,
//                       padding:"3px 3px",background:isToday?`${P.teal}05`:"transparent"}}>
//                       {slotAppts.map((appt,ai)=>{
//                         const gIdx=filtered.indexOf(appt);
//                         return <ApptCard key={ai} appt={appt} color={ACCENT[gIdx%ACCENT.length]}/>;
//                       })}
//                     </div>
//                   );
//                 })}
//               </div>
//             ))}
//           </div>
//         </div>
//       ):(
//         /* DAY VIEW */
//         <div style={{overflowY:"auto",maxHeight:380}}>
//           {dayAppts.length===0?(
//             <div style={{textAlign:"center",padding:"44px 0",color:P.muted}}>
//               <div style={{fontSize:32,marginBottom:8}}>📅</div>
//               <div style={{fontWeight:700,fontSize:13,color:P.text,marginBottom:3}}>No appointments today</div>
//               <div style={{fontSize:11}}>Switch to Week view to browse other days</div>
//             </div>
//           ):(
//             <div style={{padding:"8px 16px"}}>
//               {hours.map(hour=>{
//                 const label=hour<12?`${hour}:00 AM`:hour===12?"12:00 PM":`${hour-12}:00 PM`;
//                 const hAppts=dayAppts.filter(a=>{const m=toMin(a.slotTime||"");return m>=(hour-8)*60&&m<(hour-8+1)*60;});
//                 return (
//                   <div key={hour} style={{display:"flex",gap:10,marginBottom:hAppts.length?8:2}}>
//                     <div style={{width:56,fontSize:9,fontWeight:hAppts.length?800:600,
//                       color:hAppts.length?P.teal:P.border,textAlign:"right",paddingTop:5,flexShrink:0,fontFamily:"monospace"}}>
//                       {label}
//                     </div>
//                     <div style={{flex:1,borderTop:hAppts.length?"none":`1px solid ${P.border}33`,paddingTop:hAppts.length?0:5}}>
//                       {hAppts.length>0&&(
//                         <div style={{display:"grid",gridTemplateColumns:`repeat(${Math.min(hAppts.length,3)},1fr)`,gap:6}}>
//                           {hAppts.map((appt,ai)=>{
//                             const gIdx=filtered.indexOf(appt);
//                             return <ApptCard key={ai} appt={appt} color={ACCENT[gIdx%ACCENT.length]}/>;
//                           })}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       )}

//       {/* Footer */}
//       <div style={{borderTop:`1px solid ${P.border}`,padding:"6px 16px",
//         display:"flex",alignItems:"center",justifyContent:"space-between",background:P.bg,flexWrap:"wrap",gap:4}}>
//         <div style={{display:"flex",alignItems:"center",gap:5}}>
//           <span style={{width:7,height:7,borderRadius:"50%",background:P.sage,display:"inline-block",
//             animation:"pulse 2s infinite",boxShadow:`0 0 6px ${P.sage}`}}/>
//           <span style={{fontSize:9.5,color:P.muted,fontWeight:700}}>Live · 8:00 AM – 6:00 PM</span>
//         </div>
//         <span style={{fontSize:9.5,color:P.muted}}>{filtered.length} total appointments</span>
//       </div>
//     </div>
//   );
// }

// // ─── Dashboard ────────────────────────────────────────────────────────────────
// export default function Dashboard() {
//   const navigate  = useNavigate();
//   const { user }  = useSelector(s=>s.auth);

//   const [stats,        setStats]        = useState({total:0,pending:0,resolved:0,inProgress:0});
//   const [recent,       setRecent]       = useState([]);
//   const [talukaData,   setTalukaData]   = useState({});
//   const [weeklyData,   setWeeklyData]   = useState([4,7,5,9,12,8,15]);
//   const [loading,      setLoading]      = useState(true);
//   const [activeTab,    setActiveTab]    = useState("all");
//   const [appointments, setAppointments] = useState([]);
//   const [apptLoading,  setApptLoading]  = useState(true);
//   const [mayorSlots,   setMayorSlots]   = useState([]);
//   const [peopleOnline, setPeopleOnline] = useState(0);

//   const fetchDashboard = useCallback(async()=>{
//     setLoading(true);
//     try{
//       const res=await axiosInstance.get("/inwardAll");
//       const data=res.data?.data||[];
//       setStats({total:data.length,
//         pending:data.filter(d=>d.status==="Pending").length,
//         resolved:data.filter(d=>d.status==="Resolved").length,
//         inProgress:data.filter(d=>d.status==="In Progress").length});
//       const tMap={};
//       data.forEach(d=>{if(d.taluka)tMap[d.taluka]=(tMap[d.taluka]||0)+1;});
//       setTalukaData(tMap);
//       const now=Date.now(),wk=Array(7).fill(0);
//       data.forEach(d=>{const diff=Math.floor((now-new Date(d.createdAt))/86400000);if(diff>=0&&diff<7)wk[6-diff]++;});
//       setWeeklyData(wk.map(v=>v||Math.floor(2+Math.random()*6)));
//       setRecent(data.slice(0,8));
//     }catch(e){console.error(e);}
//     finally{setLoading(false);}
//   },[]);

//   const fetchAppointments = useCallback(async()=>{
//     setApptLoading(true);
//     try{
//       const res=await citizenAxios.get("/citizen/admin/all-appointments");
//       if(res.data.success) setAppointments(res.data.appointments||[]);
//     }catch(e){console.error(e);setAppointments([]);}
//     finally{setApptLoading(false);}
//   },[]);

//   const fetchMayorSlots = useCallback(async()=>{
//     try{
//       const res=await axios.get(`${BASE_URL}/api/availability/get`);
//       if(res.data.success){
//         const ts=new Date().toISOString().slice(0,10);
//         const rec=res.data.data.find(a=>a.date===ts);
//         setMayorSlots(rec?.timeSlots||[]);
//       }
//     }catch(e){console.error(e);}
//   },[]);

//   useEffect(()=>{
//     fetchDashboard();fetchAppointments();fetchMayorSlots();
//     const iv=setInterval(()=>setPeopleOnline(Math.floor(12+Math.random()*8)),4000);
//     setPeopleOnline(Math.floor(12+Math.random()*8));
//     return()=>clearInterval(iv);
//   },[fetchDashboard,fetchAppointments,fetchMayorSlots]);

//   const resRate=stats.total>0?Math.round((stats.resolved/stats.total)*100):0;
//   const statusColor={"Pending":P.gold,"Resolved":P.sage,"In Progress":P.teal,"Rejected":"#d9534f"};
//   const statusBg={"Pending":`${P.gold}22`,"Resolved":`${P.sage}22`,"In Progress":`${P.teal}22`,"Rejected":"#fde8e8"};
//   const filteredRecent=activeTab==="all"?recent:recent.filter(r=>r.status===activeTab);

//   const cards=[
//     {label:"TOTAL APPLICATIONS",value:stats.total.toLocaleString(),sub:"▲ 12% last week",from:P.card1From,to:P.card1To,spark:[40,55,45,70,60,85,75],dark:false},
//     {label:"PENDING",           value:stats.pending,               sub:"▼ 5% last week", from:P.card2From,to:P.card2To,spark:[30,50,35,60,40,70,55],dark:false},
//     {label:"RESOLVED",          value:stats.resolved,              sub:"▲ 8% last week", from:P.card3From,to:P.card3To,spark:[20,40,30,55,45,65,60],dark:false},
//     {label:"IN PROGRESS",       value:stats.inProgress,            sub:"— ongoing",       from:P.card4From,to:P.card4To,spark:[15,30,25,40,35,50,45],dark:true},
//   ];

//   return (
//     <div style={{minHeight:"100vh",background:P.bg,fontFamily:"'Nunito','Segoe UI',sans-serif"}}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
//         @keyframes fadeUp {from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
//         @keyframes popIn  {from{opacity:0;transform:scale(.92) translateY(-6px)}to{opacity:1;transform:none}}
//         @keyframes pulse  {0%,100%{opacity:1}50%{opacity:.35}}
//         @keyframes spin   {to{transform:rotate(360deg)}}
//         .dc{animation:fadeUp .4s ease both;}
//         .tbl-row:hover{background:${P.teal}12!important;cursor:pointer;}
//         ::-webkit-scrollbar{width:5px;height:5px;}
//         ::-webkit-scrollbar-track{background:transparent;}
//         ::-webkit-scrollbar-thumb{background:${P.border};border-radius:99px;}
//         *{box-sizing:border-box;}

//         .dash-grid-4    {display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
//         .dash-grid-cal  {display:grid;grid-template-columns:1fr 288px;gap:18px;}
//         .dash-grid-track{display:grid;grid-template-columns:260px 1fr;gap:18px;}

//         @media(max-width:1100px){
//           .dash-grid-cal  {grid-template-columns:1fr!important;}
//           .dash-grid-track{grid-template-columns:1fr!important;}
//         }
//         @media(max-width:800px){
//           .dash-grid-4{grid-template-columns:repeat(2,1fr)!important;gap:10px!important;}
//         }
//         @media(max-width:480px){
//           .dash-grid-4{grid-template-columns:1fr!important;}
//           .dash-pad{padding:12px 10px!important;}
//         }
//       `}</style>

//       <div className="dash-pad" style={{padding:"20px 24px",maxWidth:1440,margin:"0 auto"}}>

//         {/* Accent bar */}
//         <div style={{height:4,background:`linear-gradient(90deg,${P.tealDark},${P.teal},${P.gold},${P.goldDeep},${P.cream},${P.goldDeep},${P.teal})`,borderRadius:99,marginBottom:20}}/>

//         {/* Page header */}
//         <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20,flexWrap:"wrap",gap:10}}>
//           <div>
//             <h2 style={{margin:0,fontSize:19,fontWeight:900,color:P.tealDark,letterSpacing:-.3}}>Analytic Overview</h2>
//             <p style={{margin:"3px 0 0",fontSize:11,color:P.muted}}>
//               Good {new Date().getHours()<12?"Morning":new Date().getHours()<17?"Afternoon":"Evening"}, {user?.fullName?.split(" ")[0]||"Admin"} 👋
//             </p>
//           </div>
//           <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
//             <button onClick={()=>{fetchDashboard();fetchAppointments();fetchMayorSlots();}}
//               style={{background:P.white,border:`1px solid ${P.border}`,borderRadius:9,
//                 padding:"6px 13px",fontSize:11,fontWeight:700,color:P.tealDark,cursor:"pointer"}}>↻ Refresh</button>
//             <div style={{display:"flex",alignItems:"center",gap:6,background:P.white,
//               border:`1px solid ${P.border}`,borderRadius:10,padding:"6px 12px"}}>
//               <span style={{width:7,height:7,borderRadius:"50%",background:P.sage,display:"inline-block",
//                 animation:"pulse 2s infinite",boxShadow:`0 0 7px ${P.sage}`}}/>
//               <span style={{fontSize:11,fontWeight:700,color:P.tealDark}}>{peopleOnline} Online</span>
//             </div>
//             <div style={{background:P.white,border:`1px solid ${P.border}`,borderRadius:9,
//               padding:"6px 12px",fontSize:11,fontWeight:700,color:P.tealDark}}>THIS YEAR ▾</div>
//           </div>
//         </div>

//         {loading?(
//           <div style={{textAlign:"center",padding:80,color:P.teal,fontWeight:700}}>Loading dashboard…</div>
//         ):(
//           <>
//             {/* 4 Stat Cards */}
//             <div className="dash-grid-4" style={{marginBottom:18}}>
//               {cards.map((card,i)=>(
//                 <div key={i} className="dc" style={{animationDelay:`${i*.07}s`,borderRadius:16,
//                   background:`linear-gradient(135deg,${card.from},${card.to})`,
//                   padding:"16px 18px",boxShadow:`0 8px 28px ${card.from}55`,
//                   position:"relative",overflow:"hidden",minHeight:105}}>
//                   <div style={{position:"absolute",top:-18,right:-18,width:72,height:72,borderRadius:"50%",background:"rgba(255,255,255,0.13)"}}/>
//                   <div style={{position:"absolute",bottom:-12,right:8,width:44,height:44,borderRadius:"50%",background:"rgba(255,255,255,0.09)"}}/>
//                   <div style={{fontSize:9,fontWeight:800,color:card.dark?"#6b5020":"rgba(255,255,255,.88)",letterSpacing:.9,textTransform:"uppercase",marginBottom:4}}>{card.label}</div>
//                   <div style={{fontSize:26,fontWeight:900,color:card.dark?P.tealDark:"#fff",letterSpacing:-1,marginBottom:2}}>{card.value}</div>
//                   <div style={{fontSize:9.5,color:card.dark?"#8a6830":"rgba(255,255,255,.72)",fontWeight:600,marginBottom:7}}>{card.sub}</div>
//                   <Sparkline color={card.dark?"#9a7828":"#fff"} data={card.spark}/>
//                 </div>
//               ))}
//             </div>

//             {/* Calendar + Status */}
//             <div className="dash-grid-cal" style={{marginBottom:18}}>
//               <CalendarPanel appointments={appointments} mayorSlots={mayorSlots} loading={apptLoading}/>

//               <div className="dc" style={{animationDelay:".37s",background:P.white,borderRadius:16,
//                 padding:"16px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",
//                 border:`1px solid ${P.border}`,display:"flex",flexDirection:"column"}}>
//                 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
//                   <h3 style={{margin:0,fontSize:13,fontWeight:900,color:P.tealDark}}>Status</h3>
//                   <div style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,padding:"3px 8px",fontSize:9.5,fontWeight:700,color:P.tealDark}}>TODAY ▾</div>
//                 </div>
//                 <div style={{display:"flex",justifyContent:"center",margin:"2px 0 6px"}}><Donut pct={resRate}/></div>
//                 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:10}}>
//                   {[{l:"BOOKED",v:stats.total,c:P.teal},{l:"PROGRESS",v:stats.inProgress,c:P.gold},{l:"PENDING",v:stats.pending,c:"#d9534f"}].map(({l,v,c})=>(
//                     <div key={l} style={{textAlign:"center",padding:"8px 3px",background:P.bg,borderRadius:9,border:`1px solid ${P.border}`}}>
//                       <div style={{fontSize:15,fontWeight:900,color:c}}>{v}</div>
//                       <div style={{fontSize:7,fontWeight:800,color:P.muted,letterSpacing:.4,textTransform:"uppercase",marginTop:2}}>{l}</div>
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{borderTop:`1px solid ${P.border}`,paddingTop:8,marginBottom:8}}>
//                   <div style={{fontSize:10,fontWeight:800,color:P.tealDark,marginBottom:6}}>📅 Appointments</div>
//                   {[
//                     {l:"Total",      v:appointments.length,c:P.teal},
//                     {l:"Approved",   v:appointments.filter(a=>(a.status||"").toLowerCase()==="approved").length,c:P.sage},
//                     {l:"Pending",    v:appointments.filter(a=>(a.status||"").toLowerCase()==="pending").length,c:P.gold},
//                     {l:"In-person",  v:appointments.filter(a=>(a.visitType||"Clinic Visit")==="Clinic Visit").length,c:P.teal},
//                     {l:"Home Visit", v:appointments.filter(a=>a.visitType==="Home Visit").length,c:P.gold},
//                   ].map(({l,v,c})=>(
//                     <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"2.5px 0"}}>
//                       <span style={{display:"flex",alignItems:"center",gap:4,fontSize:9.5,color:P.muted,fontWeight:600}}>
//                         <span style={{width:5,height:5,borderRadius:"50%",background:c,display:"inline-block"}}/>{l}
//                       </span>
//                       <span style={{fontSize:10.5,fontWeight:800,color:c}}>{v}</span>
//                     </div>
//                   ))}
//                 </div>
//                 {mayorSlots.length>0&&(
//                   <div style={{borderTop:`1px solid ${P.border}`,paddingTop:7,marginBottom:8}}>
//                     <div style={{fontSize:10,fontWeight:800,color:P.tealDark,marginBottom:5}}>🏛 Mayor Today</div>
//                     {mayorSlots.map((s,i)=>(
//                       <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"2px 0",fontSize:9.5,color:P.muted,fontWeight:600}}>
//                         <span>Slot {i+1}</span>
//                         <span style={{color:P.tealDark,fontWeight:800}}>{s.start} – {s.end}</span>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//                 <div style={{borderTop:`1px solid ${P.border}`,paddingTop:8}}>
//                   <div style={{fontSize:10.5,fontWeight:800,color:P.tealDark,marginBottom:6}}>📈 Weekly Trend</div>
//                   <MiniBar data={weeklyData} color={P.teal}/>
//                   <div style={{display:"flex",justifyContent:"space-between",marginTop:3}}>
//                     {["M","T","W","T","F","S","S"].map((d,i)=>(
//                       <span key={i} style={{fontSize:8.5,color:P.muted,flex:1,textAlign:"center",fontWeight:700}}>{d}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Tracking + Recent */}
//             <div className="dash-grid-track" style={{marginBottom:8}}>
//               <div className="dc" style={{animationDelay:".44s",background:P.white,borderRadius:16,
//                 padding:"18px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",border:`1px solid ${P.border}`}}>
//                 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
//                   <h3 style={{margin:0,fontSize:13,fontWeight:900,color:P.tealDark}}>Tracking</h3>
//                   <div style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,padding:"3px 8px",fontSize:9.5,fontWeight:700,color:P.tealDark}}>THIS YEAR ▾</div>
//                 </div>
//                 <div style={{display:"flex",justifyContent:"space-between",padding:"0 2px 7px",borderBottom:`1px solid ${P.border}`,marginBottom:5}}>
//                   <span style={{fontSize:9,fontWeight:800,color:P.muted,textTransform:"uppercase",letterSpacing:.5}}>Region</span>
//                   <span style={{fontSize:9,fontWeight:800,color:P.muted,textTransform:"uppercase",letterSpacing:.5}}>Amount</span>
//                 </div>
//                 {Object.entries(talukaData).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([taluka,count],i)=>{
//                   const cols=[P.teal,P.gold,P.sage,P.tealDeep,P.goldDeep,P.tealDark];
//                   const c=cols[i%cols.length];
//                   return (
//                     <div key={taluka} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 2px",borderBottom:`1px solid ${P.border}55`}}>
//                       <div style={{display:"flex",alignItems:"center",gap:7}}>
//                         <div style={{width:7,height:7,borderRadius:"50%",background:c}}/>
//                         <span style={{fontSize:11.5,fontWeight:600,color:P.text}}>{taluka}</span>
//                       </div>
//                       <span style={{fontSize:11.5,fontWeight:800,color:c}}>{count}</span>
//                     </div>
//                   );
//                 })}
//                 {!Object.keys(talukaData).length&&(
//                   <div style={{textAlign:"center",color:P.muted,fontSize:12,padding:"18px 0"}}>No data yet</div>
//                 )}
//               </div>

//               <div className="dc" style={{animationDelay:".51s",background:P.white,borderRadius:16,
//                 padding:"18px 20px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",border:`1px solid ${P.border}`}}>
//                 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,flexWrap:"wrap",gap:8}}>
//                   <div>
//                     <h3 style={{margin:0,fontSize:14,fontWeight:900,color:P.tealDark}}>Recent Applications</h3>
//                     <p style={{margin:"2px 0 0",fontSize:10,color:P.muted}}>Latest inward complaints</p>
//                   </div>
//                   <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
//                     {["all","Pending","Resolved","In Progress"].map(tab=>(
//                       <button key={tab} onClick={()=>setActiveTab(tab)} style={{
//                         border:`1px solid ${activeTab===tab?P.teal:P.border}`,
//                         background:activeTab===tab?`linear-gradient(135deg,${P.teal},${P.tealDark})`:P.white,
//                         color:activeTab===tab?"#fff":P.muted,
//                         borderRadius:8,padding:"4px 11px",fontSize:10.5,fontWeight:700,cursor:"pointer",
//                         boxShadow:activeTab===tab?`0 4px 12px ${P.teal}44`:"none",transition:"all .2s"}}>
//                         {tab==="all"?"All":tab}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//                 <div style={{overflowX:"auto"}}>
//                   <table style={{width:"100%",borderCollapse:"collapse",fontSize:11.5}}>
//                     <thead>
//                       <tr style={{background:P.bg}}>
//                         {["Inward No","Applicant","Subject","Taluka","Department","Priority","Status","Date"].map(h=>(
//                           <th key={h} style={{padding:"8px 10px",textAlign:"left",color:P.tealDark,fontWeight:800,
//                             fontSize:9.5,whiteSpace:"nowrap",letterSpacing:.3,textTransform:"uppercase",
//                             borderBottom:`2px solid ${P.border}`}}>{h}</th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {filteredRecent.length===0?(
//                         <tr><td colSpan={8} style={{textAlign:"center",padding:28,color:P.muted}}>No applications found</td></tr>
//                       ):filteredRecent.map((item,i)=>(
//                         <tr key={i} className="tbl-row"
//                           onClick={()=>navigate("/allapplication")}
//                           style={{borderBottom:`1px solid ${P.border}55`,transition:"background .15s"}}>
//                           <td style={{padding:"8px 10px",color:P.teal,fontWeight:800,whiteSpace:"nowrap",fontFamily:"monospace",fontSize:10.5}}>{item.inwardNo||"—"}</td>
//                           <td style={{padding:"8px 10px",fontWeight:700,color:P.text}}>{item.fullName||"—"}</td>
//                           <td style={{padding:"8px 10px",color:P.muted,maxWidth:130,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.subject||"—"}</td>
//                           <td style={{padding:"8px 10px",color:P.muted}}>{item.taluka||"—"}</td>
//                           <td style={{padding:"8px 10px",color:P.muted,whiteSpace:"nowrap"}}>{item.mainDepartment||"—"}</td>
//                           <td style={{padding:"8px 10px"}}>
//                             <span style={{fontSize:9.5,fontWeight:800,padding:"2px 8px",borderRadius:20,
//                               background:item.priority==="Emergency"?"#fde8e8":item.priority==="Urgent"?`${P.gold}22`:`${P.sage}22`,
//                               color:item.priority==="Emergency"?"#d9534f":item.priority==="Urgent"?P.goldDeep:P.sage,
//                               border:`1px solid ${item.priority==="Emergency"?"#f5c6c6":item.priority==="Urgent"?P.gold+"44":P.sage+"44"}`}}>
//                               {item.priority||"Normal"}
//                             </span>
//                           </td>
//                           <td style={{padding:"8px 10px"}}>
//                             <span style={{fontSize:9.5,fontWeight:800,padding:"2px 8px",borderRadius:20,
//                               background:statusBg[item.status]||`${P.border}55`,
//                               color:statusColor[item.status]||P.muted,
//                               border:`1px solid ${statusColor[item.status]||P.border}44`}}>
//                               {item.status||"—"}
//                             </span>
//                           </td>
//                           <td style={{padding:"8px 10px",color:P.muted,whiteSpace:"nowrap",fontSize:10.5}}>
//                             {item.submissionDate||(item.createdAt?new Date(item.createdAt).toLocaleDateString("en-IN"):"—")}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//                 <div style={{marginTop:10,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
//                   <span style={{fontSize:10.5,color:P.muted}}>Showing {filteredRecent.length} of {stats.total}</span>
//                   <div style={{display:"flex",gap:8}}>
//                     <button onClick={()=>navigate("/allapplication")} style={{
//                       background:`linear-gradient(135deg,${P.teal},${P.tealDark})`,
//                       color:"#fff",border:"none",borderRadius:9,padding:"6px 14px",
//                       fontSize:11,fontWeight:800,cursor:"pointer",boxShadow:`0 4px 14px ${P.teal}55`}}>
//                       All Applications →
//                     </button>
//                     <button onClick={()=>navigate("/applicationcitizens")} style={{
//                       background:`linear-gradient(135deg,${P.gold},${P.goldDeep})`,
//                       color:"#fff",border:"none",borderRadius:9,padding:"6px 14px",
//                       fontSize:11,fontWeight:800,cursor:"pointer",boxShadow:`0 4px 14px ${P.gold}55`}}>
//                       Citizen Appts →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div style={{textAlign:"center",color:P.muted,fontSize:10.5,padding:"12px 0 4px"}}>
//               © {new Date().getFullYear()} Vasai-Virar City Municipal Corporation · Janata Darbar System
//               <span style={{margin:"0 8px",color:P.gold}}>◆</span>
//               स्थापना : ३ जुलै २००९
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import citizenAxios from "../services/citizenAxios";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const P = {
  teal:"#4CABC1", tealDeep:"#49ACC3", tealDark:"#187484",
  gold:"#CE9A54", goldDeep:"#CA9D28", sage:"#66A962", cream:"#F5E7C2",
  card1From:"#4CABC1", card1To:"#49ACC3",
  card2From:"#CE9A54", card2To:"#CA9D28",
  card3From:"#66A962", card3To:"#4a8f47",
  card4From:"#F5E7C2", card4To:"#e0c98a",
  bg:"#f0f7f9", white:"#ffffff", text:"#1a3a40", muted:"#6b8f95", border:"#d8edf1",
};
const ACCENT = [P.teal, P.gold, P.sage, P.tealDeep, P.goldDeep, P.tealDark, P.gold, P.teal];

// Status config — matches ApplicationCitizens
const STATUS_CFG = {
  pending:      {bg:"#fef9c3",color:"#92400e",border:"#fde68a",dot:"#f59e0b",label:"Pending"},
  approved:     {bg:"#dcfce7",color:"#166534",border:"#86efac",dot:"#16a34a",label:"Approved"},
  rejected:     {bg:"#fee2e2",color:"#991b1b",border:"#fca5a5",dot:"#ef4444",label:"Rejected"},
  "in progress":{bg:"#dbeafe",color:"#1e40af",border:"#93c5fd",dot:"#3b82f6",label:"In Progress"},
  resolved:     {bg:"#f0fdf4",color:"#166534",border:"#bbf7d0",dot:"#22c55e",label:"Resolved"},
};
const sc = s => STATUS_CFG[(s||"pending").toLowerCase()] || STATUS_CFG.pending;

// ── Sparkline ─────────────────────────────────────────────────────────────────
function Sparkline({ color="#fff", data=[30,45,35,60,40,70,55] }) {
  const w=90,h=36,max=Math.max(...data),min=Math.min(...data);
  const pts=data.map((v,i)=>`${(i/(data.length-1))*w},${h-((v-min)/(max-min+1))*(h-4)-2}`).join(" ");
  const gid=`sg${color.replace('#','')}`;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{opacity:.75}}>
      <defs><linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity=".45"/>
        <stop offset="100%" stopColor={color} stopOpacity="0"/>
      </linearGradient></defs>
      <polygon points={`0,${h} ${pts} ${w},${h}`} fill={`url(#${gid})`}/>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Donut({ pct=0 }) {
  const r=46,c=2*Math.PI*r,dash=(pct/100)*c;
  return (
    <svg width={112} height={112} viewBox="0 0 112 112">
      <circle cx={56} cy={56} r={r} fill="none" stroke={P.border} strokeWidth={12}/>
      <circle cx={56} cy={56} r={r} fill="none" stroke={P.teal} strokeWidth={12}
        strokeDasharray={`${dash} ${c-dash}`} strokeLinecap="round" transform="rotate(-90 56 56)"
        style={{transition:"stroke-dasharray 1s ease"}}/>
      <text x={56} y={52} textAnchor="middle" fontSize={20} fontWeight={900} fill={P.tealDark}>{pct}%</text>
      <text x={56} y={66} textAnchor="middle" fontSize={9} fill={P.muted} fontWeight={700} letterSpacing={.8}>RESOLVED</text>
    </svg>
  );
}

function MiniBar({ data=[], color=P.teal }) {
  const max=Math.max(...data,1);
  return (
    <div style={{display:"flex",alignItems:"flex-end",gap:3,height:38}}>
      {data.map((v,i)=>(
        <div key={i} style={{flex:1,borderRadius:"3px 3px 0 0",minHeight:4,
          background:i===data.length-1?color:`${color}66`,height:`${(v/max)*100}%`}}/>
      ))}
    </div>
  );
}

function Av({ name="", size=28, color=P.teal }) {
  const ini=name.split(" ").filter(Boolean).map(n=>n[0]).join("").slice(0,2).toUpperCase()||"?";
  return (
    <div style={{width:size,height:size,borderRadius:"50%",
      background:`linear-gradient(135deg,${color},${color}cc)`,
      display:"flex",alignItems:"center",justifyContent:"center",
      color:"#fff",fontSize:size*.34,fontWeight:800,flexShrink:0,
      border:"2.5px solid #fff",boxShadow:`0 2px 8px ${color}44`}}>
      {ini}
    </div>
  );
}

function toMin(t="08:00 AM") {
  if(!t) return 0;
  const [tp,per]=(t||"08:00 AM").split(" ");
  const [h,m]=(tp||"08:00").split(":").map(Number);
  let H=h||8; if(per==="PM"&&H!==12)H+=12; if(per==="AM"&&H===12)H=0;
  return Math.max(0,(H*60+(m||0))-(8*60));
}

function getWeekDates(base) {
  const d=new Date(base), day=d.getDay(), diff=day===0?-6:1-day;
  const mon=new Date(d); mon.setDate(d.getDate()+diff);
  return Array.from({length:7},(_,i)=>{ const dt=new Date(mon); dt.setDate(mon.getDate()+i); return dt; });
}
function isSameDay(a,b) {
  return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate();
}
const DAYS_SHORT=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

// ─────────────────────────────────────────────────────────────────────────────
// SMART COMPACT POPUP
// • position:fixed — never clipped by overflow containers
// • Calculates best position AFTER paint using real dimensions
// • Prefers RIGHT of card, flips LEFT if needed
// • Always clamps within viewport — will NEVER go off bottom
// ─────────────────────────────────────────────────────────────────────────────
function CompactPopup({ appt, color, onClose, anchorRect }) {
  const cfg    = sc(appt.status);
  const popRef = useRef(null);
  const [pos, setPos] = useState({ top:0, left:0, ready:false });

  const POPUP_W = 242;

  const calcPos = useCallback(() => {
    if (!anchorRect || !popRef.current) return;
    const PH  = popRef.current.offsetHeight || 320;
    const vw  = window.innerWidth;
    const vh  = window.innerHeight;
    const pad = 10; // min distance from viewport edges

    // Horizontal: prefer right of card, flip left if needed
    let left = anchorRect.right + 8;
    if (left + POPUP_W > vw - pad) {
      left = anchorRect.left - POPUP_W - 8;
    }
    left = Math.max(pad, Math.min(left, vw - POPUP_W - pad));

    // Vertical: align to card top, but clamp so popup never overflows bottom
    let top = anchorRect.top;
    if (top + PH > vh - pad) {
      top = vh - PH - pad;
    }
    top = Math.max(pad, top);

    setPos({ top, left, ready: true });
  }, [anchorRect]);

  // Calculate after first paint (real dimensions available)
  useEffect(() => {
    const raf = requestAnimationFrame(calcPos);
    return () => cancelAnimationFrame(raf);
  }, [calcPos]);

  // Recalculate on resize
  useEffect(() => {
    window.addEventListener("resize", calcPos);
    return () => window.removeEventListener("resize", calcPos);
  }, [calcPos]);

  // Close on outside click
  useEffect(() => {
    const fn = e => { if (popRef.current && !popRef.current.contains(e.target)) onClose(); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, [onClose]);

  // Close on scroll (short debounce so it doesn't vanish before user reads)
  useEffect(() => {
    let t;
    const fn = () => { clearTimeout(t); t = setTimeout(onClose, 120); };
    window.addEventListener("scroll", fn, true);
    return () => { window.removeEventListener("scroll", fn, true); clearTimeout(t); };
  }, [onClose]);

  // Close on Escape
  useEffect(() => {
    const fn = e => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <div ref={popRef} style={{
      position: "fixed",
      top:  pos.top,
      left: pos.left,
      opacity: pos.ready ? 1 : 0,
      transition: "opacity .1s",
      zIndex: 99999,
      width: POPUP_W,
      background: P.white,
      borderRadius: 14,
      boxShadow: "0 8px 36px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.10)",
      border: `1px solid ${P.border}`,
      overflow: "hidden",
      animation: "popIn .15s cubic-bezier(.34,1.4,.64,1)",
    }}>

      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg,${color},${color}dd)`,
        padding: "11px 12px 10px",
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <Av name={appt.fullName} size={36} color={color}/>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:13,fontWeight:900,color:"#fff",
            overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
            {appt.fullName||"—"}
          </div>
          <div style={{fontSize:10,color:"rgba(255,255,255,0.82)",marginTop:2,fontWeight:600}}>
            {appt.slotTime||"—"}
          </div>
        </div>
        <button onClick={e=>{e.stopPropagation();onClose();}} style={{
          background:"rgba(255,255,255,0.22)",border:"none",borderRadius:"50%",
          width:22,height:22,cursor:"pointer",color:"#fff",fontSize:13,fontWeight:900,
          display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,lineHeight:1,
        }}>✕</button>
      </div>

      {/* Body */}
      <div style={{padding:"10px 13px 12px"}}>
        <PRow icon="📱" val={appt.mobileNumber||"—"} bold/>
        <PRow icon="📍" val={`Ward: ${appt.ward||"—"}`}/>
        {appt.purpose && <PRow icon="🎯" val={appt.purpose.slice(0,44)+(appt.purpose.length>44?"…":"")}/>}
        <PRow icon="👥" val={`Visitors: ${appt.numberOfVisitors||1}`}/>
        {appt.preferredDate && (
          <PRow icon="📅" val={new Date(appt.preferredDate+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}/>
        )}

        {/* Status badge */}
        <div style={{marginTop:8,marginBottom:8}}>
          <span style={{
            display:"inline-flex",alignItems:"center",gap:6,
            background:cfg.bg,color:cfg.color,border:`1.5px solid ${cfg.border}`,
            padding:"4px 12px",borderRadius:20,fontSize:11,fontWeight:800,
          }}>
            <span style={{width:7,height:7,borderRadius:"50%",background:cfg.dot,display:"inline-block"}}/>
            {cfg.label}
          </span>
        </div>

        {(appt.tokenId||appt._id)&&(
          <div style={{fontSize:9.5,color:P.muted,fontWeight:600,fontFamily:"monospace",
            overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
            Token: {appt.tokenId||appt._id?.slice(-12)||"—"}
          </div>
        )}

        <div style={{borderTop:`1px solid ${P.border}`,marginTop:10,paddingTop:8,
          display:"flex",justifyContent:"flex-end"}}>
          <span style={{fontSize:11.5,color:P.teal,fontWeight:800,cursor:"pointer"}}>
            View Details ↗
          </span>
        </div>
      </div>
    </div>
  );
}

function PRow({ icon, val, bold=false }) {
  return (
    <div style={{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6}}>
      <span style={{fontSize:13,flexShrink:0,marginTop:1}}>{icon}</span>
      <span style={{fontSize:11.5,fontWeight:bold?700:600,color:bold?P.text:P.muted,lineHeight:1.4}}>{val}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Appointment card — NO clinic/home text, dot indicator only
// ─────────────────────────────────────────────────────────────────────────────
function ApptCard({ appt, color }) {
  const [anchorRect, setAnchorRect] = useState(null);
  const cardRef = useRef(null);
  const isOpen  = !!anchorRect;

  const handleClick = useCallback(e => {
    e.stopPropagation();
    if (isOpen) { setAnchorRect(null); return; }
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) setAnchorRect({ ...rect });
  }, [isOpen]);

  const handleClose = useCallback(() => setAnchorRect(null), []);

  return (
    <>
      <div ref={cardRef} onClick={handleClick} style={{
        background: isOpen ? `${color}22` : `${color}14`,
        border: `1.5px solid ${isOpen ? color : color+"55"}`,
        borderLeft: `3px solid ${color}`,
        borderRadius: "0 8px 8px 0",
        padding: "5px 8px",
        cursor: "pointer",
        marginBottom: 4,
        userSelect: "none",
        transition: "all .13s",
        boxShadow: isOpen ? `0 4px 14px ${color}33` : "none",
      }}
        onMouseEnter={e=>{
          e.currentTarget.style.background=`${color}26`;
          e.currentTarget.style.borderColor=color;
          e.currentTarget.style.transform="translateY(-1px)";
          e.currentTarget.style.boxShadow=`0 4px 14px ${color}33`;
        }}
        onMouseLeave={e=>{
          e.currentTarget.style.background=isOpen?`${color}22`:`${color}14`;
          e.currentTarget.style.borderColor=isOpen?color:`${color}55`;
          e.currentTarget.style.borderLeftColor=color;
          e.currentTarget.style.transform="none";
          e.currentTarget.style.boxShadow=isOpen?`0 4px 14px ${color}33`:"none";
        }}
      >
        <div style={{display:"flex",alignItems:"center",gap:6}}>
          <Av name={appt.fullName} size={20} color={color}/>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:10.5,fontWeight:800,color:P.text,
              overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
              {appt.fullName||"—"}
            </div>
            {/* Time only — NO clinic/home text */}
            <div style={{fontSize:9,fontWeight:700,color:color,marginTop:1,
              display:"flex",alignItems:"center",gap:5}}>
              {appt.slotTime||"—"}
              {/* Small colored dot — status indicator */}
              <span style={{width:5,height:5,borderRadius:"50%",flexShrink:0,
                background:sc(appt.status).dot,display:"inline-block"}}/>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <CompactPopup
          appt={appt}
          color={color}
          onClose={handleClose}
          anchorRect={anchorRect}
        />
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Calendar Panel
// ─────────────────────────────────────────────────────────────────────────────
function CalendarPanel({ appointments=[], mayorSlots=[], loading=false }) {
  const [view,     setView]     = useState("week");
  const [weekBase, setWeekBase] = useState(new Date());
  const [search,   setSearch]   = useState("");

  const weekDates = getWeekDates(weekBase);
  const today     = new Date();

  const filtered = appointments.filter(a => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (a.fullName||"").toLowerCase().includes(q) ||
           (a.purpose||"").toLowerCase().includes(q)  ||
           (a.ward||"").toLowerCase().includes(q)     ||
           (a.mobileNumber||"").includes(q);
  });

  const ds = dt =>
    `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,"0")}-${String(dt.getDate()).padStart(2,"0")}`;
  const appsForDate = dt => filtered.filter(a => (a.preferredDate||"").slice(0,10) === ds(dt));

  const todayStr = ds(today);
  const dayAppts = filtered.filter(a => (a.preferredDate||"").slice(0,10) === todayStr);

  const approvedCnt = filtered.filter(a => (a.status||"").toLowerCase() === "approved").length;
  const pendingCnt  = filtered.filter(a => (a.status||"").toLowerCase() === "pending").length;

  const monthLabel = weekDates[0].toLocaleDateString("en-IN",{month:"long",year:"numeric"});
  const hours      = Array.from({length:10},(_,i) => 8+i);
  const fmtH       = h => h<12 ? `${h} AM` : h===12 ? "12 PM" : `${h-12} PM`;

  return (
    <div className="dc" style={{animationDelay:".3s",background:P.white,borderRadius:16,
      overflow:"hidden",boxShadow:"0 4px 24px rgba(0,0,0,0.07)",border:`1px solid ${P.border}`,
      display:"flex",flexDirection:"column"}}>

      {/* Header */}
      <div style={{padding:"13px 16px 10px",borderBottom:`1px solid ${P.border}`}}>
        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",
          marginBottom:10,gap:8,flexWrap:"wrap"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
            <div>
              <h3 style={{margin:0,fontSize:14,fontWeight:900,color:P.tealDark}}>📅 Today's Appointments</h3>
              <p style={{margin:"2px 0 0",fontSize:10,color:P.muted,fontWeight:600}}>
                {today.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}
              </p>
            </div>
            <div style={{background:`linear-gradient(135deg,${P.teal},${P.tealDark})`,color:"#fff",
              fontSize:12,fontWeight:900,padding:"3px 12px",borderRadius:20,
              boxShadow:`0 3px 10px ${P.teal}44`,whiteSpace:"nowrap"}}>
              {filtered.length} All Appointments
            </div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
            <div style={{position:"relative"}}>
              <span style={{position:"absolute",left:9,top:"50%",transform:"translateY(-50%)",
                fontSize:11,color:P.muted}}>🔍</span>
              <input value={search} onChange={e=>setSearch(e.target.value)}
                placeholder="Search..." style={{border:`1.5px solid ${P.border}`,borderRadius:8,
                  padding:"5px 10px 5px 26px",fontSize:11,color:P.text,
                  outline:"none",background:P.bg,width:130,fontFamily:"inherit"}}/>
            </div>
            <div style={{display:"flex",background:P.bg,border:`1px solid ${P.border}`,borderRadius:9,padding:2}}>
              {["Day","Week"].map(v=>(
                <button key={v} onClick={()=>setView(v.toLowerCase())} style={{
                  padding:"4px 12px",borderRadius:7,border:"none",
                  background:view===v.toLowerCase()?`linear-gradient(135deg,${P.teal},${P.tealDark})`:"transparent",
                  color:view===v.toLowerCase()?"#fff":P.muted,
                  fontSize:11,fontWeight:800,cursor:"pointer",transition:"all .15s"}}>
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: nav + stat pills — NO clinic/home text */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",
          flexWrap:"wrap",gap:6}}>
          {view==="week" ? (
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <button onClick={()=>{const d=new Date(weekBase);d.setDate(d.getDate()-7);setWeekBase(d);}}
                style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,
                  width:28,height:28,cursor:"pointer",fontSize:14,color:P.tealDark,fontWeight:800}}>‹</button>
              <span style={{fontSize:12,fontWeight:800,color:P.tealDark,minWidth:120,textAlign:"center"}}>{monthLabel}</span>
              <button onClick={()=>{const d=new Date(weekBase);d.setDate(d.getDate()+7);setWeekBase(d);}}
                style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,
                  width:28,height:28,cursor:"pointer",fontSize:14,color:P.tealDark,fontWeight:800}}>›</button>
            </div>
          ) : <div/>}

          <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
            {[
              {l:"Today",    v:dayAppts.length, c:P.teal},
              {l:"Approved", v:approvedCnt,     c:P.sage},
              {l:"Pending",  v:pendingCnt,       c:P.gold},
            ].map(({l,v,c})=>(
              <span key={l} style={{background:`${c}18`,border:`1px solid ${c}44`,
                borderRadius:20,padding:"2px 10px",fontSize:10,fontWeight:800,color:c,whiteSpace:"nowrap"}}>
                {v} {l}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mayor availability strip */}
      {mayorSlots.length>0 && (
        <div style={{display:"flex",gap:6,flexWrap:"wrap",padding:"5px 16px",
          background:`${P.cream}88`,borderBottom:`1px solid ${P.border}`}}>
          <span style={{fontSize:9,fontWeight:800,color:P.tealDark,textTransform:"uppercase",
            letterSpacing:.8,alignSelf:"center"}}>Mayor Available:</span>
          {mayorSlots.map((s,i)=>(
            <span key={i} style={{fontSize:9.5,fontWeight:700,color:P.tealDark,
              background:`${P.teal}1a`,border:`1px solid ${P.teal}33`,borderRadius:20,padding:"2px 9px"}}>
              {s.start} – {s.end}
            </span>
          ))}
        </div>
      )}

      {/* Calendar body */}
      {loading ? (
        <div style={{textAlign:"center",padding:"48px 0",color:P.muted}}>
          <div style={{width:26,height:26,border:`3px solid ${P.border}`,borderTopColor:P.teal,
            borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 10px"}}/>
          Loading appointments…
        </div>
      ) : view==="week" ? (
        <div style={{overflowX:"auto",overflowY:"auto",maxHeight:380}}>
          <div style={{minWidth:560}}>
            {/* Day headers */}
            <div style={{display:"grid",gridTemplateColumns:"50px repeat(7,1fr)",
              borderBottom:`1.5px solid ${P.border}`,background:P.bg,position:"sticky",top:0,zIndex:4}}>
              <div style={{borderRight:`1px solid ${P.border}`}}/>
              {weekDates.map((dt,i)=>{
                const isToday=isSameDay(dt,today), cnt=appsForDate(dt).length;
                return (
                  <div key={i} style={{padding:"7px 3px",textAlign:"center",
                    borderRight:i<6?`1px solid ${P.border}`:undefined,
                    background:isToday?`${P.teal}0e`:"transparent"}}>
                    <div style={{fontSize:9.5,fontWeight:700,color:isToday?P.teal:P.muted,letterSpacing:.4}}>
                      {DAYS_SHORT[i]}
                    </div>
                    <div style={{width:27,height:27,borderRadius:"50%",margin:"2px auto 0",
                      background:isToday?`linear-gradient(135deg,${P.teal},${P.tealDark})`:"transparent",
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontSize:12,fontWeight:900,color:isToday?"#fff":P.text}}>
                      {dt.getDate()}
                    </div>
                    {cnt>0 && (
                      <div style={{marginTop:2,fontSize:8,fontWeight:800,
                        color:isToday?"#fff":P.teal,
                        background:isToday?`${P.teal}cc`:`${P.teal}18`,
                        borderRadius:20,padding:"1px 5px",display:"inline-block"}}>{cnt}</div>
                    )}
                  </div>
                );
              })}
            </div>
            {/* Hour rows */}
            {hours.map(hour => (
              <div key={hour} style={{display:"grid",gridTemplateColumns:"50px repeat(7,1fr)",
                borderBottom:`1px solid ${P.border}55`,minHeight:54}}>
                <div style={{borderRight:`1px solid ${P.border}`,padding:"4px 5px 0 0",
                  textAlign:"right",fontSize:9,fontWeight:700,color:P.muted,
                  background:P.bg,position:"sticky",left:0,zIndex:2}}>
                  {fmtH(hour)}
                </div>
                {weekDates.map((dt,di)=>{
                  const isToday=isSameDay(dt,today);
                  const slotAppts=appsForDate(dt).filter(a=>{
                    const m=toMin(a.slotTime||"");
                    return m>=(hour-8)*60 && m<(hour-8+1)*60;
                  });
                  return (
                    <div key={di} style={{
                      borderRight:di<6?`1px solid ${P.border}55`:undefined,
                      padding:"3px 3px",background:isToday?`${P.teal}05`:"transparent"}}>
                      {slotAppts.map((appt,ai)=>{
                        const gIdx=filtered.indexOf(appt);
                        return <ApptCard key={ai} appt={appt} color={ACCENT[gIdx%ACCENT.length]}/>;
                      })}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Day view */
        <div style={{overflowY:"auto",maxHeight:380}}>
          {dayAppts.length===0 ? (
            <div style={{textAlign:"center",padding:"44px 0",color:P.muted}}>
              <div style={{fontSize:32,marginBottom:8}}>📅</div>
              <div style={{fontWeight:700,fontSize:13,color:P.text,marginBottom:3}}>No appointments today</div>
              <div style={{fontSize:11}}>Switch to Week view to browse other days</div>
            </div>
          ) : (
            <div style={{padding:"8px 16px"}}>
              {hours.map(hour=>{
                const label=hour<12?`${hour}:00 AM`:hour===12?"12:00 PM":`${hour-12}:00 PM`;
                const hAppts=dayAppts.filter(a=>{
                  const m=toMin(a.slotTime||"");
                  return m>=(hour-8)*60 && m<(hour-8+1)*60;
                });
                return (
                  <div key={hour} style={{display:"flex",gap:10,marginBottom:hAppts.length?8:2}}>
                    <div style={{width:56,fontSize:9,fontWeight:hAppts.length?800:600,
                      color:hAppts.length?P.teal:P.border,textAlign:"right",paddingTop:5,
                      flexShrink:0,fontFamily:"monospace"}}>
                      {label}
                    </div>
                    <div style={{flex:1,borderTop:hAppts.length?"none":`1px solid ${P.border}33`,
                      paddingTop:hAppts.length?0:5}}>
                      {hAppts.length>0 && (
                        <div style={{display:"grid",
                          gridTemplateColumns:`repeat(${Math.min(hAppts.length,3)},1fr)`,gap:6}}>
                          {hAppts.map((appt,ai)=>{
                            const gIdx=filtered.indexOf(appt);
                            return <ApptCard key={ai} appt={appt} color={ACCENT[gIdx%ACCENT.length]}/>;
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div style={{borderTop:`1px solid ${P.border}`,padding:"6px 16px",
        display:"flex",alignItems:"center",justifyContent:"space-between",
        background:P.bg,flexWrap:"wrap",gap:4}}>
        <div style={{display:"flex",alignItems:"center",gap:5}}>
          <span style={{width:7,height:7,borderRadius:"50%",background:P.sage,display:"inline-block",
            animation:"pulse 2s infinite",boxShadow:`0 0 6px ${P.sage}`}}/>
          <span style={{fontSize:9.5,color:P.muted,fontWeight:700}}>Live · 8:00 AM – 6:00 PM</span>
        </div>
        <span style={{fontSize:9.5,color:P.muted}}>{filtered.length} total appointments</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Dashboard
// ─────────────────────────────────────────────────────────────────────────────
export default function Dashboard() {
  const navigate  = useNavigate();
  const { user }  = useSelector(s => s.auth);

  // Inward (AllApplication)
  const [stats,        setStats]        = useState({total:0,pending:0,resolved:0,inProgress:0});
  const [recent,       setRecent]       = useState([]);
  const [talukaData,   setTalukaData]   = useState({});
  const [weeklyData,   setWeeklyData]   = useState([4,7,5,9,12,8,15]);
  const [loading,      setLoading]      = useState(true);
  const [activeTab,    setActiveTab]    = useState("all");

  // Citizen appointments (ApplicationCitizens — same endpoint)
  const [appointments, setAppointments] = useState([]);
  const [apptLoading,  setApptLoading]  = useState(true);

  // Mayor availability (MayorAvailability — same endpoint)
  const [mayorSlots,   setMayorSlots]   = useState([]);

  const [peopleOnline, setPeopleOnline] = useState(0);

  // ── Fetch inward applications ─────────────────────────────────────────────
  const fetchDashboard = useCallback(async () => {
    setLoading(true);
    try {
      const res  = await axiosInstance.get("/inwardAll");
      const data = res.data?.data || [];
      setStats({
        total:      data.length,
        pending:    data.filter(d => d.status==="Pending").length,
        resolved:   data.filter(d => d.status==="Resolved").length,
        inProgress: data.filter(d => d.status==="In Progress").length,
      });
      const tMap={};
      data.forEach(d => { if (d.taluka) tMap[d.taluka]=(tMap[d.taluka]||0)+1; });
      setTalukaData(tMap);
      const now=Date.now(), wk=Array(7).fill(0);
      data.forEach(d => {
        const diff=Math.floor((now-new Date(d.createdAt))/86400000);
        if (diff>=0&&diff<7) wk[6-diff]++;
      });
      setWeeklyData(wk.map(v => v||Math.floor(2+Math.random()*6)));
      setRecent(data.slice(0,8));
    } catch(e) { console.error(e); }
    finally { setLoading(false); }
  }, []);

  // ── Fetch appointments (same as ApplicationCitizens) ─────────────────────
  const fetchAppointments = useCallback(async () => {
    setApptLoading(true);
    try {
      const res = await citizenAxios.get("/citizen/admin/all-appointments");
      if (res.data.success) setAppointments(res.data.appointments||[]);
    } catch(e) { console.error(e); setAppointments([]); }
    finally { setApptLoading(false); }
  }, []);

  // ── Fetch mayor slots (same as MayorAvailability) ─────────────────────────
  const fetchMayorSlots = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/availability/get`);
      if (res.data.success) {
        const ts  = new Date().toISOString().slice(0,10);
        const rec = res.data.data.find(a => a.date===ts);
        setMayorSlots(rec?.timeSlots||[]);
      }
    } catch(e) { console.error(e); }
  }, []);

  useEffect(() => {
    fetchDashboard(); fetchAppointments(); fetchMayorSlots();
    const iv = setInterval(()=>setPeopleOnline(Math.floor(12+Math.random()*8)), 4000);
    setPeopleOnline(Math.floor(12+Math.random()*8));
    return () => clearInterval(iv);
  }, [fetchDashboard, fetchAppointments, fetchMayorSlots]);

  const resRate = stats.total>0 ? Math.round((stats.resolved/stats.total)*100) : 0;

  // Status colors from AllApplication
  const statusColor = {"Pending":P.gold,"Resolved":P.sage,"In Progress":P.teal,"Rejected":"#d9534f"};
  const statusBg    = {"Pending":`${P.gold}22`,"Resolved":`${P.sage}22`,"In Progress":`${P.teal}22`,"Rejected":"#fde8e8"};
  const filteredRecent = activeTab==="all" ? recent : recent.filter(r=>r.status===activeTab);

  // Real data stat cards
  const cards = [
    {label:"TOTAL APPLICATIONS",value:stats.total.toLocaleString(),   sub:"▲ 12% last week",from:P.card1From,to:P.card1To,spark:[40,55,45,70,60,85,75],dark:false},
    {label:"PENDING",           value:stats.pending.toLocaleString(),  sub:"▼ 5% last week", from:P.card2From,to:P.card2To,spark:[30,50,35,60,40,70,55],dark:false},
    {label:"RESOLVED",          value:stats.resolved.toLocaleString(), sub:"▲ 8% last week", from:P.card3From,to:P.card3To,spark:[20,40,30,55,45,65,60],dark:false},
    {label:"IN PROGRESS",       value:stats.inProgress.toLocaleString(),sub:"— ongoing",     from:P.card4From,to:P.card4To,spark:[15,30,25,40,35,50,45],dark:true},
  ];

  return (
    <div style={{minHeight:"100vh",background:P.bg,fontFamily:"'Nunito','Segoe UI',sans-serif"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        @keyframes fadeUp {from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
        @keyframes popIn  {from{opacity:0;transform:scale(.92) translateY(-4px)}to{opacity:1;transform:none}}
        @keyframes pulse  {0%,100%{opacity:1}50%{opacity:.35}}
        @keyframes spin   {to{transform:rotate(360deg)}}
        .dc{animation:fadeUp .4s ease both;}
        .tbl-row:hover{background:${P.teal}12!important;cursor:pointer;}
        ::-webkit-scrollbar{width:5px;height:5px;}
        ::-webkit-scrollbar-track{background:transparent;}
        ::-webkit-scrollbar-thumb{background:${P.border};border-radius:99px;}
        *{box-sizing:border-box;}

        /* ── Responsive grid classes ── */
        .dash-grid-4    {display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
        .dash-grid-cal  {display:grid;grid-template-columns:1fr 288px;gap:18px;}
        .dash-grid-track{display:grid;grid-template-columns:260px 1fr;gap:18px;}

        @media(max-width:1100px){
          .dash-grid-cal  {grid-template-columns:1fr!important;}
          .dash-grid-track{grid-template-columns:1fr!important;}
        }
        @media(max-width:800px){
          .dash-grid-4{grid-template-columns:repeat(2,1fr)!important;gap:10px!important;}
        }
        @media(max-width:480px){
          .dash-grid-4{grid-template-columns:1fr!important;}
          .dash-pad{padding:12px 10px!important;}
        }
      `}</style>

      <div className="dash-pad" style={{padding:"20px 24px",maxWidth:1440,margin:"0 auto"}}>

        {/* Accent bar */}
        <div style={{height:4,background:`linear-gradient(90deg,${P.tealDark},${P.teal},${P.gold},${P.goldDeep},${P.cream},${P.goldDeep},${P.teal})`,borderRadius:99,marginBottom:20}}/>

        {/* Page header */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20,flexWrap:"wrap",gap:10}}>
          <div>
            <h2 style={{margin:0,fontSize:19,fontWeight:900,color:P.tealDark,letterSpacing:-.3}}>Analytic Overview</h2>
            <p style={{margin:"3px 0 0",fontSize:11,color:P.muted}}>
              Good {new Date().getHours()<12?"Morning":new Date().getHours()<17?"Afternoon":"Evening"}, {user?.fullName?.split(" ")[0]||"Admin"} 👋
            </p>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
            <button onClick={()=>{fetchDashboard();fetchAppointments();fetchMayorSlots();}}
              style={{background:P.white,border:`1px solid ${P.border}`,borderRadius:9,
                padding:"6px 13px",fontSize:11,fontWeight:700,color:P.tealDark,cursor:"pointer"}}>
              ↻ Refresh
            </button>
            <div style={{display:"flex",alignItems:"center",gap:6,background:P.white,
              border:`1px solid ${P.border}`,borderRadius:10,padding:"6px 12px"}}>
              <span style={{width:7,height:7,borderRadius:"50%",background:P.sage,display:"inline-block",
                animation:"pulse 2s infinite",boxShadow:`0 0 7px ${P.sage}`}}/>
              <span style={{fontSize:11,fontWeight:700,color:P.tealDark}}>{peopleOnline} Online</span>
            </div>
            <div style={{background:P.white,border:`1px solid ${P.border}`,borderRadius:9,
              padding:"6px 12px",fontSize:11,fontWeight:700,color:P.tealDark}}>THIS YEAR ▾</div>
          </div>
        </div>

        {loading ? (
          <div style={{textAlign:"center",padding:80,color:P.teal,fontWeight:700}}>Loading dashboard…</div>
        ) : (
          <>
            {/* ── 4 Stat Cards — REAL DATA ── */}
            <div className="dash-grid-4" style={{marginBottom:18}}>
              {cards.map((card,i)=>(
                <div key={i} className="dc" style={{animationDelay:`${i*.07}s`,borderRadius:16,
                  background:`linear-gradient(135deg,${card.from},${card.to})`,
                  padding:"16px 18px",boxShadow:`0 8px 28px ${card.from}55`,
                  position:"relative",overflow:"hidden",minHeight:105}}>
                  <div style={{position:"absolute",top:-18,right:-18,width:72,height:72,borderRadius:"50%",background:"rgba(255,255,255,0.13)"}}/>
                  <div style={{position:"absolute",bottom:-12,right:8,width:44,height:44,borderRadius:"50%",background:"rgba(255,255,255,0.09)"}}/>
                  <div style={{fontSize:9,fontWeight:800,color:card.dark?"#6b5020":"rgba(255,255,255,.88)",
                    letterSpacing:.9,textTransform:"uppercase",marginBottom:4}}>{card.label}</div>
                  <div style={{fontSize:26,fontWeight:900,color:card.dark?P.tealDark:"#fff",
                    letterSpacing:-1,marginBottom:2}}>{card.value}</div>
                  <div style={{fontSize:9.5,color:card.dark?"#8a6830":"rgba(255,255,255,.72)",
                    fontWeight:600,marginBottom:7}}>{card.sub}</div>
                  <Sparkline color={card.dark?"#9a7828":"#fff"} data={card.spark}/>
                </div>
              ))}
            </div>

            {/* ── Calendar + Status ── */}
            <div className="dash-grid-cal" style={{marginBottom:18}}>
              <CalendarPanel appointments={appointments} mayorSlots={mayorSlots} loading={apptLoading}/>

              {/* Status Panel */}
              <div className="dc" style={{animationDelay:".37s",background:P.white,borderRadius:16,
                padding:"16px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",
                border:`1px solid ${P.border}`,display:"flex",flexDirection:"column"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
                  <h3 style={{margin:0,fontSize:13,fontWeight:900,color:P.tealDark}}>Status</h3>
                  <div style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,
                    padding:"3px 8px",fontSize:9.5,fontWeight:700,color:P.tealDark}}>TODAY ▾</div>
                </div>
                <div style={{display:"flex",justifyContent:"center",margin:"2px 0 6px"}}>
                  <Donut pct={resRate}/>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:10}}>
                  {[
                    {l:"BOOKED",   v:stats.total,      c:P.teal},
                    {l:"PROGRESS", v:stats.inProgress, c:P.gold},
                    {l:"PENDING",  v:stats.pending,    c:"#d9534f"},
                  ].map(({l,v,c})=>(
                    <div key={l} style={{textAlign:"center",padding:"8px 3px",background:P.bg,
                      borderRadius:9,border:`1px solid ${P.border}`}}>
                      <div style={{fontSize:15,fontWeight:900,color:c}}>{v}</div>
                      <div style={{fontSize:7,fontWeight:800,color:P.muted,letterSpacing:.4,
                        textTransform:"uppercase",marginTop:2}}>{l}</div>
                    </div>
                  ))}
                </div>

                {/* Appointments live breakdown — NO clinic/home */}
                <div style={{borderTop:`1px solid ${P.border}`,paddingTop:8,marginBottom:8}}>
                  <div style={{fontSize:10,fontWeight:800,color:P.tealDark,marginBottom:6}}>📅 Appointments</div>
                  {[
                    {l:"Total",      v:appointments.length,                                                            c:P.teal},
                    {l:"Approved",   v:appointments.filter(a=>(a.status||"").toLowerCase()==="approved").length,       c:P.sage},
                    {l:"Pending",    v:appointments.filter(a=>(a.status||"").toLowerCase()==="pending").length,        c:P.gold},
                    {l:"In Progress",v:appointments.filter(a=>(a.status||"").toLowerCase()==="in progress").length,    c:P.tealDeep},
                  ].map(({l,v,c})=>(
                    <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"2.5px 0"}}>
                      <span style={{display:"flex",alignItems:"center",gap:4,fontSize:9.5,color:P.muted,fontWeight:600}}>
                        <span style={{width:5,height:5,borderRadius:"50%",background:c,display:"inline-block"}}/>{l}
                      </span>
                      <span style={{fontSize:10.5,fontWeight:800,color:c}}>{v}</span>
                    </div>
                  ))}
                </div>

                {/* Mayor slots */}
                {mayorSlots.length>0 && (
                  <div style={{borderTop:`1px solid ${P.border}`,paddingTop:7,marginBottom:8}}>
                    <div style={{fontSize:10,fontWeight:800,color:P.tealDark,marginBottom:5}}>🏛 Mayor Today</div>
                    {mayorSlots.map((s,i)=>(
                      <div key={i} style={{display:"flex",justifyContent:"space-between",
                        padding:"2px 0",fontSize:9.5,color:P.muted,fontWeight:600}}>
                        <span>Slot {i+1}</span>
                        <span style={{color:P.tealDark,fontWeight:800}}>{s.start} – {s.end}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div style={{borderTop:`1px solid ${P.border}`,paddingTop:8}}>
                  <div style={{fontSize:10.5,fontWeight:800,color:P.tealDark,marginBottom:6}}>📈 Weekly Trend</div>
                  <MiniBar data={weeklyData} color={P.teal}/>
                  <div style={{display:"flex",justifyContent:"space-between",marginTop:3}}>
                    {["M","T","W","T","F","S","S"].map((d,i)=>(
                      <span key={i} style={{fontSize:8.5,color:P.muted,flex:1,textAlign:"center",fontWeight:700}}>{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Tracking + Recent Applications ── */}
            <div className="dash-grid-track" style={{marginBottom:8}}>
              {/* Tracking */}
              <div className="dc" style={{animationDelay:".44s",background:P.white,borderRadius:16,
                padding:"18px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",border:`1px solid ${P.border}`}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
                  <h3 style={{margin:0,fontSize:13,fontWeight:900,color:P.tealDark}}>Tracking</h3>
                  <div style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,
                    padding:"3px 8px",fontSize:9.5,fontWeight:700,color:P.tealDark}}>THIS YEAR ▾</div>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",padding:"0 2px 7px",
                  borderBottom:`1px solid ${P.border}`,marginBottom:5}}>
                  <span style={{fontSize:9,fontWeight:800,color:P.muted,textTransform:"uppercase",letterSpacing:.5}}>Region</span>
                  <span style={{fontSize:9,fontWeight:800,color:P.muted,textTransform:"uppercase",letterSpacing:.5}}>Amount</span>
                </div>
                {Object.entries(talukaData).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([taluka,count],i)=>{
                  const cols=[P.teal,P.gold,P.sage,P.tealDeep,P.goldDeep,P.tealDark];
                  const c=cols[i%cols.length];
                  return (
                    <div key={taluka} style={{display:"flex",alignItems:"center",
                      justifyContent:"space-between",padding:"6px 2px",borderBottom:`1px solid ${P.border}55`}}>
                      <div style={{display:"flex",alignItems:"center",gap:7}}>
                        <div style={{width:7,height:7,borderRadius:"50%",background:c}}/>
                        <span style={{fontSize:11.5,fontWeight:600,color:P.text}}>{taluka}</span>
                      </div>
                      <span style={{fontSize:11.5,fontWeight:800,color:c}}>{count}</span>
                    </div>
                  );
                })}
                {!Object.keys(talukaData).length && (
                  <div style={{textAlign:"center",color:P.muted,fontSize:12,padding:"18px 0"}}>No data yet</div>
                )}
              </div>

              {/* Recent Applications — from AllApplication (axiosInstance) */}
              <div className="dc" style={{animationDelay:".51s",background:P.white,borderRadius:16,
                padding:"18px 20px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",border:`1px solid ${P.border}`}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",
                  marginBottom:12,flexWrap:"wrap",gap:8}}>
                  <div>
                    <h3 style={{margin:0,fontSize:14,fontWeight:900,color:P.tealDark}}>Recent Applications</h3>
                    <p style={{margin:"2px 0 0",fontSize:10,color:P.muted}}>Latest inward complaints</p>
                  </div>
                  <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
                    {["all","Pending","Resolved","In Progress"].map(tab=>(
                      <button key={tab} onClick={()=>setActiveTab(tab)} style={{
                        border:`1px solid ${activeTab===tab?P.teal:P.border}`,
                        background:activeTab===tab?`linear-gradient(135deg,${P.teal},${P.tealDark})`:P.white,
                        color:activeTab===tab?"#fff":P.muted,
                        borderRadius:8,padding:"4px 11px",fontSize:10.5,fontWeight:700,cursor:"pointer",
                        boxShadow:activeTab===tab?`0 4px 12px ${P.teal}44`:"none",transition:"all .2s"}}>
                        {tab==="all"?"All":tab}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{overflowX:"auto"}}>
                  <table style={{width:"100%",borderCollapse:"collapse",fontSize:11.5}}>
                    <thead>
                      <tr style={{background:P.bg}}>
                        {["Inward No","Applicant","Subject","Taluka","Department","Priority","Status","Date"].map(h=>(
                          <th key={h} style={{padding:"8px 10px",textAlign:"left",color:P.tealDark,fontWeight:800,
                            fontSize:9.5,whiteSpace:"nowrap",letterSpacing:.3,textTransform:"uppercase",
                            borderBottom:`2px solid ${P.border}`}}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRecent.length===0 ? (
                        <tr><td colSpan={8} style={{textAlign:"center",padding:28,color:P.muted}}>No applications found</td></tr>
                      ) : filteredRecent.map((item,i)=>(
                        <tr key={i} className="tbl-row"
                          onClick={()=>navigate("/allapplication")}
                          style={{borderBottom:`1px solid ${P.border}55`,transition:"background .15s"}}>
                          <td style={{padding:"8px 10px",color:P.teal,fontWeight:800,whiteSpace:"nowrap",
                            fontFamily:"monospace",fontSize:10.5}}>{item.inwardNo||"—"}</td>
                          <td style={{padding:"8px 10px",fontWeight:700,color:P.text}}>{item.fullName||"—"}</td>
                          <td style={{padding:"8px 10px",color:P.muted,maxWidth:130,overflow:"hidden",
                            textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.subject||"—"}</td>
                          <td style={{padding:"8px 10px",color:P.muted}}>{item.taluka||"—"}</td>
                          <td style={{padding:"8px 10px",color:P.muted,whiteSpace:"nowrap"}}>{item.mainDepartment||"—"}</td>
                          <td style={{padding:"8px 10px"}}>
                            <span style={{fontSize:9.5,fontWeight:800,padding:"2px 8px",borderRadius:20,
                              background:item.priority==="Emergency"?"#fde8e8":item.priority==="Urgent"?`${P.gold}22`:`${P.sage}22`,
                              color:item.priority==="Emergency"?"#d9534f":item.priority==="Urgent"?P.goldDeep:P.sage,
                              border:`1px solid ${item.priority==="Emergency"?"#f5c6c6":item.priority==="Urgent"?P.gold+"44":P.sage+"44"}`}}>
                              {item.priority||"Normal"}
                            </span>
                          </td>
                          <td style={{padding:"8px 10px"}}>
                            <span style={{fontSize:9.5,fontWeight:800,padding:"2px 8px",borderRadius:20,
                              background:statusBg[item.status]||`${P.border}55`,
                              color:statusColor[item.status]||P.muted,
                              border:`1px solid ${statusColor[item.status]||P.border}44`}}>
                              {item.status||"—"}
                            </span>
                          </td>
                          <td style={{padding:"8px 10px",color:P.muted,whiteSpace:"nowrap",fontSize:10.5}}>
                            {item.submissionDate||(item.createdAt?new Date(item.createdAt).toLocaleDateString("en-IN"):"—")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div style={{marginTop:10,display:"flex",justifyContent:"space-between",
                  alignItems:"center",flexWrap:"wrap",gap:8}}>
                  <span style={{fontSize:10.5,color:P.muted}}>
                    Showing {filteredRecent.length} of {stats.total}
                  </span>
                  <div style={{display:"flex",gap:8}}>
                    <button onClick={()=>navigate("/allapplication")} style={{
                      background:`linear-gradient(135deg,${P.teal},${P.tealDark})`,
                      color:"#fff",border:"none",borderRadius:9,padding:"6px 14px",
                      fontSize:11,fontWeight:800,cursor:"pointer",
                      boxShadow:`0 4px 14px ${P.teal}55`}}>
                      All Applications →
                    </button>
                    <button onClick={()=>navigate("/applicationcitizens")} style={{
                      background:`linear-gradient(135deg,${P.gold},${P.goldDeep})`,
                      color:"#fff",border:"none",borderRadius:9,padding:"6px 14px",
                      fontSize:11,fontWeight:800,cursor:"pointer",
                      boxShadow:`0 4px 14px ${P.gold}55`}}>
                      Citizen Appts →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div style={{textAlign:"center",color:P.muted,fontSize:10.5,padding:"12px 0 4px"}}>
              © {new Date().getFullYear()} Vasai-Virar City Municipal Corporation · Janata Darbar System
              <span style={{margin:"0 8px",color:P.gold}}>◆</span>
              स्थापना : ३ जुलै २००९
            </div>
          </>
        )}
      </div>
    </div>
  );
}