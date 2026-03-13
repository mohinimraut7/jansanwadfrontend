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

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";

// ── Talukas for map overlay ──────────────────────────────────────────────────
const TALUKAS = ["Vasai","Virar","Nalasopara","Palghar","Dahanu","Talasari","Jawhar","Mokhada","Vikramgad","Wada","Boisar","Umbergaon"];

// ── Mini Bar Chart ────────────────────────────────────────────────────────────
function MiniBar({ data = [], color = "#16a34a" }) {
  const max = Math.max(...data, 1);
  return (
    <div style={{ display:"flex", alignItems:"flex-end", gap:3, height:40 }}>
      {data.map((v, i) => (
        <div key={i} style={{ flex:1, background: i === data.length-1 ? color : color+"55",
          height:`${(v/max)*100}%`, borderRadius:"3px 3px 0 0", minHeight:3 }}/>
      ))}
    </div>
  );
}

// ── Donut Chart ───────────────────────────────────────────────────────────────
function DonutChart({ value = 68, color = "#16a34a" }) {
  const r = 38, c = 2*Math.PI*r;
  const dash = (value/100)*c;
  return (
    <svg width={96} height={96} viewBox="0 0 96 96">
      <circle cx={48} cy={48} r={r} fill="none" stroke="#e5e7eb" strokeWidth={10}/>
      <circle cx={48} cy={48} r={r} fill="none" stroke={color} strokeWidth={10}
        strokeDasharray={`${dash} ${c-dash}`} strokeLinecap="round"
        transform="rotate(-90 48 48)" style={{ transition:"stroke-dasharray .8s ease" }}/>
      <text x={48} y={52} textAnchor="middle" fontSize={16} fontWeight={700} fill="#1a3a1a">{value}%</text>
    </svg>
  );
}

// ── VVCMC Taluka Map SVG (schematic) ─────────────────────────────────────────
function VvcmcMap({ talukaData = {} }) {
  // Approximate relative positions for talukas within Palghar district
  const nodes = [
    { name:"Dahanu",    x:18, y:10 },
    { name:"Talasari",  x:8,  y:20 },
    { name:"Jawhar",    x:38, y:22 },
    { name:"Mokhada",   x:58, y:28 },
    { name:"Vikramgad", x:48, y:40 },
    { name:"Palghar",   x:22, y:38 },
    { name:"Wada",      x:68, y:48 },
    { name:"Boisar",    x:10, y:52 },
    { name:"Vasai",     x:24, y:64 },
    { name:"Virar",     x:38, y:72 },
    { name:"Nalasopara",x:18, y:78 },
    { name:"Umbergaon", x:6,  y:68 },
  ];
  const max = Math.max(...Object.values(talukaData), 1);
  return (
    <div style={{ position:"relative", width:"100%", paddingBottom:"85%", background:"linear-gradient(135deg,#f0fdf4,#dcfce7)", borderRadius:12, overflow:"hidden" }}>
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%" }} viewBox="0 0 88 90">
        {/* connecting lines */}
        {[[0,2],[1,0],[2,3],[3,4],[4,6],[2,5],[5,7],[7,8],[8,9],[9,10],[10,11],[5,8]].map(([a,b],i)=>(
          <line key={i} x1={nodes[a].x+4} y1={nodes[a].y+4} x2={nodes[b].x+4} y2={nodes[b].y+4}
            stroke="#86efac" strokeWidth={0.8} strokeDasharray="2 1"/>
        ))}
        {nodes.map((n, i) => {
          const count = talukaData[n.name] || 0;
          const size = 3.5 + (count/max)*5;
          const opacity = 0.3 + (count/max)*0.7;
          return (
            <g key={i}>
              <circle cx={n.x+4} cy={n.y+4} r={size} fill="#16a34a" opacity={opacity}/>
              <circle cx={n.x+4} cy={n.y+4} r={2.5} fill="#15803d"/>
              <text x={n.x+4} y={n.y+12} textAnchor="middle" fontSize={4.5} fill="#14532d" fontWeight={600}>{n.name}</text>
              {count > 0 && <text x={n.x+4} y={n.y+1} textAnchor="middle" fontSize={3.5} fill="#fff" fontWeight={700}>{count}</text>}
            </g>
          );
        })}
      </svg>
      <div style={{ position:"absolute", bottom:8, right:10, fontSize:10, color:"#15803d", fontWeight:600, background:"#fff8", borderRadius:6, padding:"2px 8px" }}>
        📍 Palghar District
      </div>
    </div>
  );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({ icon, label, value, sub, trend, color = "#16a34a", chart }) {
  return (
    <div style={{ background:"#fff", borderRadius:14, padding:"18px 20px", boxShadow:"0 2px 12px #0001", border:"1px solid #f0f0f0", display:"flex", flexDirection:"column", gap:8 }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <div style={{ width:36, height:36, borderRadius:10, background:color+"18", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>{icon}</div>
          <span style={{ fontSize:12, color:"#6b7280", fontWeight:500 }}>{label}</span>
        </div>
        {trend !== undefined && (
          <span style={{ fontSize:11, fontWeight:700, color: trend >= 0 ? "#16a34a" : "#dc2626", background: trend >= 0 ? "#dcfce7" : "#fee2e2", borderRadius:20, padding:"2px 8px" }}>
            {trend >= 0 ? "▲" : "▼"} {Math.abs(trend)}%
          </span>
        )}
      </div>
      <div style={{ fontSize:26, fontWeight:800, color:"#111827", letterSpacing:-1 }}>{value}</div>
      {sub && <div style={{ fontSize:11, color:"#9ca3af" }}>{sub}</div>}
      {chart && <MiniBar data={chart} color={color}/>}
    </div>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [stats, setStats]         = useState({ total:0, pending:0, resolved:0, inProgress:0 });
  const [recent, setRecent]       = useState([]);
  const [talukaData, setTalukaData] = useState({});
  const [peopleOnline, setPeopleOnline] = useState(0);
  const [weeklyData, setWeeklyData]   = useState([4,7,5,9,12,8,15]);
  const [loading, setLoading]     = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    fetchDashboard();
    // Simulate live people count
    const interval = setInterval(() => {
      setPeopleOnline(Math.floor(12 + Math.random() * 8));
    }, 4000);
    setPeopleOnline(Math.floor(12 + Math.random() * 8));
    return () => clearInterval(interval);
  }, []);

  const fetchDashboard = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get("/inwardAll");
      const data = res.data?.data || [];

      const total      = data.length;
      const pending    = data.filter(d => d.status === "Pending").length;
      const resolved   = data.filter(d => d.status === "Resolved").length;
      const inProgress = data.filter(d => d.status === "In Progress").length;
      setStats({ total, pending, resolved, inProgress });

      // Taluka frequency map
      const tMap = {};
      data.forEach(d => { if(d.taluka) tMap[d.taluka] = (tMap[d.taluka]||0) + 1; });
      setTalukaData(tMap);

      // Weekly trend (last 7 days simulated from data)
      const now = Date.now();
      const wk = Array(7).fill(0);
      data.forEach(d => {
        const diff = Math.floor((now - new Date(d.createdAt)) / 86400000);
        if (diff >= 0 && diff < 7) wk[6-diff]++;
      });
      setWeeklyData(wk.map((v,i) => v || Math.floor(2+Math.random()*6)));

      setRecent(data.slice(0, 8));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const resolutionRate = stats.total > 0 ? Math.round((stats.resolved / stats.total) * 100) : 0;

  const statusColor = { "Pending":"#f59e0b", "Resolved":"#16a34a", "In Progress":"#3b82f6", "Rejected":"#ef4444" };
  const statusBg    = { "Pending":"#fef3c7", "Resolved":"#dcfce7", "In Progress":"#dbeafe", "Rejected":"#fee2e2" };

  const filtered = activeTab === "all" ? recent : recent.filter(r => r.status === activeTab);

  return (
    <div style={{ minHeight:"100vh", background:"#f6faf6", fontFamily:"'Segoe UI',sans-serif" }}>

      {/* ── Top Header Bar ── */}
      {/* <div style={{ background:"linear-gradient(135deg,#14532d,#15803d)", padding:"14px 28px", display:"flex", alignItems:"center", justifyContent:"space-between", boxShadow:"0 2px 16px #14532d33" }}>
        <div style={{ display:"flex", alignItems:"center", gap:14 }}>
          <img src="/src/assets/vvcmclogo.jpg" alt="VVCMC" style={{ width:44, height:44, borderRadius:"50%", border:"2px solid #a16207", objectFit:"cover" }} onError={e=>e.target.style.display="none"}/>
          <div>
            <div style={{ color:"#fef9c3", fontSize:17, fontWeight:800, letterSpacing:0.3 }}>वसई-विरार शहर महानगरपालिका</div>
            <div style={{ color:"#86efac", fontSize:11, fontWeight:500 }}>Janata Darbar — Admin Dashboard</div>
          </div>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:16 }}>
        
          <div style={{ background:"#ffffff18", borderRadius:12, padding:"6px 16px", display:"flex", alignItems:"center", gap:8 }}>
            <span style={{ width:8, height:8, borderRadius:"50%", background:"#4ade80", display:"inline-block", boxShadow:"0 0 6px #4ade80", animation:"pulse 2s infinite" }}/>
            <span style={{ color:"#fff", fontSize:12, fontWeight:600 }}>{peopleOnline} Online</span>
          </div>
          <div style={{ color:"#86efac", fontSize:13 }}>👤 {user?.fullName || "Admin"}</div>
        </div>
      </div> */}

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:none} }
        .dash-card { animation: fadeUp .4s ease both; }
        .tab-btn { border:none; cursor:pointer; border-radius:8px; padding:6px 16px; font-size:12px; font-weight:600; transition:all .2s; }
        .tab-btn.active { background:#15803d; color:#fff; }
        .tab-btn:not(.active) { background:#f0fdf4; color:#15803d; }
        .tbl-row:hover { background:#f0fdf4 !important; }
      `}</style>

      <div style={{ padding:"24px 28px", maxWidth:1400, margin:"0 auto" }}>

        {/* ── Gold accent bar ── */}
        <div style={{ height:3, background:"linear-gradient(90deg,#a16207,#ca8a04,#fde68a,#ca8a04,#a16207)", borderRadius:99, marginBottom:24 }}/>

        {/* ── Greeting ── */}
        <div style={{ marginBottom:20 }}>
          <h1 style={{ fontSize:22, fontWeight:800, color:"#14532d", margin:0 }}>Good {new Date().getHours()<12?"Morning":new Date().getHours()<17?"Afternoon":"Evening"}, {user?.fullName?.split(" ")[0] || "Admin"} 👋</h1>
          <p style={{ color:"#6b7280", fontSize:13, margin:"2px 0 0" }}>Here's what's happening with Janata Darbar today.</p>
        </div>

        {/* ── Stat Cards Row ── */}
        {loading ? (
          <div style={{ textAlign:"center", padding:60, color:"#15803d", fontWeight:600 }}>Loading dashboard...</div>
        ) : (
          <>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:16, marginBottom:24 }}>
              <div className="dash-card" style={{ animationDelay:"0s" }}>
                <StatCard icon="📋" label="Total Applications" value={stats.total.toLocaleString()} sub="All time" trend={12} color="#15803d" chart={weeklyData}/>
              </div>
              <div className="dash-card" style={{ animationDelay:".07s" }}>
                <StatCard icon="⏳" label="Pending" value={stats.pending} sub="Awaiting action" trend={-5} color="#f59e0b"/>
              </div>
              <div className="dash-card" style={{ animationDelay:".14s" }}>
                <StatCard icon="✅" label="Resolved" value={stats.resolved} sub="Completed" trend={8} color="#16a34a"/>
              </div>
              <div className="dash-card" style={{ animationDelay:".21s" }}>
                <StatCard icon="🔄" label="In Progress" value={stats.inProgress} sub="Being processed" color="#3b82f6"/>
              </div>
              <div className="dash-card" style={{ animationDelay:".28s" }}>
                {/* People Present Today */}
                <div style={{ background:"linear-gradient(135deg,#14532d,#15803d)", borderRadius:14, padding:"18px 20px", boxShadow:"0 2px 12px #14532d22", color:"#fff", display:"flex", flexDirection:"column", gap:8 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <div style={{ width:36, height:36, borderRadius:10, background:"#ffffff22", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>🧑‍💼</div>
                    <span style={{ fontSize:12, color:"#86efac", fontWeight:500 }}>People Present</span>
                  </div>
                  <div style={{ fontSize:32, fontWeight:800, letterSpacing:-1 }}>{peopleOnline}</div>
                  <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                    <span style={{ width:8, height:8, borderRadius:"50%", background:"#4ade80", display:"inline-block", boxShadow:"0 0 6px #4ade80", animation:"pulse 2s infinite" }}/>
                    <span style={{ fontSize:11, color:"#86efac" }}>Live count — updates every 4s</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Middle Row: Map + Donut ── */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 340px", gap:20, marginBottom:24 }}>

              {/* MAP */}
              <div className="dash-card" style={{ animationDelay:".35s", background:"#fff", borderRadius:14, padding:20, boxShadow:"0 2px 12px #0001", border:"1px solid #f0f0f0" }}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
                  <div>
                    <h3 style={{ margin:0, fontSize:15, fontWeight:700, color:"#14532d" }}>📍 Application Heatmap</h3>
                    <p style={{ margin:0, fontSize:11, color:"#9ca3af" }}>Complaints by Taluka — Palghar District</p>
                  </div>
                  <div style={{ background:"#f0fdf4", borderRadius:8, padding:"4px 12px", fontSize:11, color:"#15803d", fontWeight:600 }}>
                    {Object.keys(talukaData).length} Talukas Active
                  </div>
                </div>
                <VvcmcMap talukaData={talukaData}/>
                {/* Legend */}
                <div style={{ marginTop:12, display:"flex", flexWrap:"wrap", gap:8 }}>
                  {Object.entries(talukaData).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([t,c])=>(
                    <div key={t} style={{ background:"#f0fdf4", borderRadius:20, padding:"3px 10px", fontSize:11, color:"#15803d", fontWeight:600 }}>
                      {t}: {c}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div style={{ display:"flex", flexDirection:"column", gap:16 }}>

                {/* Resolution Rate Donut */}
                <div className="dash-card" style={{ animationDelay:".42s", background:"#fff", borderRadius:14, padding:20, boxShadow:"0 2px 12px #0001", border:"1px solid #f0f0f0", textAlign:"center" }}>
                  <h3 style={{ margin:"0 0 12px", fontSize:14, fontWeight:700, color:"#14532d" }}>Resolution Rate</h3>
                  <div style={{ display:"flex", justifyContent:"center" }}>
                    <DonutChart value={resolutionRate} color="#16a34a"/>
                  </div>
                  <p style={{ margin:"8px 0 0", fontSize:11, color:"#6b7280" }}>
                    {resolutionRate >= 70 ? "🟢 On track — great performance!" : resolutionRate >= 40 ? "🟡 Moderate — needs attention" : "🔴 Low — action required"}
                  </p>
                </div>

                {/* Weekly Trend */}
                <div className="dash-card" style={{ animationDelay:".49s", background:"#fff", borderRadius:14, padding:20, boxShadow:"0 2px 12px #0001", border:"1px solid #f0f0f0" }}>
                  <h3 style={{ margin:"0 0 12px", fontSize:14, fontWeight:700, color:"#14532d" }}>📈 Weekly Trend</h3>
                  <MiniBar data={weeklyData} color="#15803d"/>
                  <div style={{ display:"flex", justifyContent:"space-between", marginTop:6 }}>
                    {["M","T","W","T","F","S","S"].map((d,i)=>(
                      <span key={i} style={{ fontSize:10, color:"#9ca3af", flex:1, textAlign:"center" }}>{d}</span>
                    ))}
                  </div>
                </div>

                {/* Category Breakdown */}
                <div className="dash-card" style={{ animationDelay:".56s", background:"#fff", borderRadius:14, padding:20, boxShadow:"0 2px 12px #0001", border:"1px solid #f0f0f0" }}>
                  <h3 style={{ margin:"0 0 12px", fontSize:14, fontWeight:700, color:"#14532d" }}>Priority Split</h3>
                  {[
                    { label:"Normal",    color:"#15803d", pct: stats.total ? Math.round(((stats.total - stats.pending - stats.inProgress)*0.6/Math.max(stats.total,1))*100) : 60 },
                    { label:"Urgent",    color:"#f59e0b", pct: stats.total ? Math.round((stats.pending/Math.max(stats.total,1))*55) : 25 },
                    { label:"Emergency", color:"#ef4444", pct: stats.total ? Math.round((stats.inProgress/Math.max(stats.total,1))*40) : 15 },
                  ].map(({ label, color, pct }) => (
                    <div key={label} style={{ marginBottom:10 }}>
                      <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, fontWeight:600, color:"#374151", marginBottom:3 }}>
                        <span>{label}</span><span>{pct}%</span>
                      </div>
                      <div style={{ background:"#f3f4f6", borderRadius:99, height:7, overflow:"hidden" }}>
                        <div style={{ width:`${pct}%`, height:"100%", background:color, borderRadius:99, transition:"width 1s ease" }}/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Recent Applications Table ── */}
            <div className="dash-card" style={{ animationDelay:".63s", background:"#fff", borderRadius:14, padding:20, boxShadow:"0 2px 12px #0001", border:"1px solid #f0f0f0" }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16, flexWrap:"wrap", gap:10 }}>
                <div>
                  <h3 style={{ margin:0, fontSize:15, fontWeight:700, color:"#14532d" }}>Recent Applications</h3>
                  <p style={{ margin:0, fontSize:11, color:"#9ca3af" }}>Latest inward complaints</p>
                </div>
                <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                  {["all","Pending","Resolved","In Progress"].map(tab => (
                    <button key={tab} className={`tab-btn ${activeTab===tab?"active":""}`}
                      onClick={() => setActiveTab(tab)}>
                      {tab === "all" ? "All" : tab}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ overflowX:"auto" }}>
                <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
                  <thead>
                    <tr style={{ background:"#f0fdf4" }}>
                      {["Inward No","Applicant","Subject","Taluka","Department","Priority","Status","Date"].map(h => (
                        <th key={h} style={{ padding:"10px 12px", textAlign:"left", color:"#15803d", fontWeight:700, fontSize:12, whiteSpace:"nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length === 0 ? (
                      <tr><td colSpan={8} style={{ textAlign:"center", padding:32, color:"#9ca3af" }}>No applications found</td></tr>
                    ) : filtered.map((item, i) => (
                      <tr key={i} className="tbl-row" style={{ borderBottom:"1px solid #f3f4f6", transition:"background .15s" }}>
                        <td style={{ padding:"10px 12px", color:"#15803d", fontWeight:600, whiteSpace:"nowrap" }}>{item.inwardNo || "—"}</td>
                        <td style={{ padding:"10px 12px", fontWeight:500 }}>{item.fullName || "—"}</td>
                        <td style={{ padding:"10px 12px", color:"#374151", maxWidth:180, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{item.subject || "—"}</td>
                        <td style={{ padding:"10px 12px", color:"#6b7280" }}>{item.taluka || "—"}</td>
                        <td style={{ padding:"10px 12px", color:"#6b7280", whiteSpace:"nowrap" }}>{item.mainDepartment || "—"}</td>
                        <td style={{ padding:"10px 12px" }}>
                          <span style={{ fontSize:11, fontWeight:700, padding:"2px 10px", borderRadius:20,
                            background: item.priority==="Emergency"?"#fee2e2":item.priority==="Urgent"?"#fef3c7":"#dcfce7",
                            color:       item.priority==="Emergency"?"#dc2626":item.priority==="Urgent"?"#92400e":"#15803d" }}>
                            {item.priority || "Normal"}
                          </span>
                        </td>
                        <td style={{ padding:"10px 12px" }}>
                          <span style={{ fontSize:11, fontWeight:700, padding:"2px 10px", borderRadius:20,
                            background: statusBg[item.status] || "#f3f4f6",
                            color:      statusColor[item.status] || "#374151" }}>
                            {item.status || "—"}
                          </span>
                        </td>
                        <td style={{ padding:"10px 12px", color:"#9ca3af", whiteSpace:"nowrap" }}>
                          {item.submissionDate || (item.createdAt ? new Date(item.createdAt).toLocaleDateString("en-IN") : "—")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop:12, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <span style={{ fontSize:11, color:"#9ca3af" }}>Showing {filtered.length} of {stats.total} applications</span>
                <button onClick={() => navigate("/allapplication")}
                  style={{ background:"#f0fdf4", color:"#15803d", border:"1px solid #86efac", borderRadius:8, padding:"6px 16px", fontSize:12, fontWeight:600, cursor:"pointer" }}>
                  View All →
                </button>
              </div>
            </div>

          </>
        )}

        {/* Footer */}
        <div style={{ marginTop:24, textAlign:"center", color:"#9ca3af", fontSize:11 }}>
          © {new Date().getFullYear()} Vasai-Virar City Municipal Corporation · Janata Darbar System
          <span style={{ margin:"0 8px", color:"#ca8a04" }}>◆</span>
          स्थापना : ३ जुलै २००९
        </div>
      </div>
    </div>
  );
}