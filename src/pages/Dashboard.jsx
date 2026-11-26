// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../services/axiosInstance";
// import citizenAxios from "../services/citizenAxios";
// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// // ── Design tokens (visual only) ─────────────────────────────────────────────
// const P = {
//   teal:"#087E91", tealDeep:"#0A93A8", tealDark:"#0A6B7B", cyan:"#27AEC0",
//   gold:"#F6A021", goldDeep:"#E08A12", sage:"#4CAF50", cream:"#FDF3DC",
//   card1From:"#0B8CA0", card1To:"#27AEC0",
//   card2From:"#F08A00", card2To:"#F6B13A",
//   card3From:"#3B9B40", card3To:"#66BB6A",
//   card4From:"#f6e6b8", card4To:"#e8c87e",
//   card5From:"#087E91", card5To:"#27AEC0",
//   bg:"#F1F7F8", white:"#ffffff", text:"#123F4B", ink:"#123F4B", ink2:"#2C5F6C",
//   muted:"#5F7C88", border:"#E3EEF0", soft:"#F6FBFC", head:"#E8F4F6", red:"#D9534F",
// };
// const HF = "Poppins,Inter,'Segoe UI',sans-serif";
// const ACCENT = [P.teal, P.gold, P.sage, P.tealDeep, P.goldDeep, P.tealDark, P.gold, P.teal];

// const panel = {
//   background:P.white, borderRadius:16, border:`1px solid ${P.border}`,
//   boxShadow:"0 1px 2px rgba(18,63,75,.04), 0 8px 24px rgba(18,63,75,.06)",
// };
// const thStyle = {
//   padding:"12px 14px", textAlign:"left", color:P.ink, fontWeight:700, fontSize:11,
//   whiteSpace:"nowrap", letterSpacing:.8, textTransform:"uppercase", background:P.head, fontFamily:HF,
// };
// const pillBtn = (from, to) => ({
//   background:`linear-gradient(135deg,${from},${to})`, color:"#fff", border:"none",
//   borderRadius:12, padding:"10px 18px", fontSize:13, fontWeight:600, cursor:"pointer",
//   boxShadow:`0 6px 16px ${from}47`, transition:"transform .2s, box-shadow .2s, filter .2s",
// });
// const ghostBtn = {
//   background:P.white, border:`1px solid ${P.border}`, borderRadius:12, padding:"9px 16px",
//   fontSize:13, fontWeight:600, color:P.ink, cursor:"pointer",
//   boxShadow:"0 1px 2px rgba(18,63,75,.04), 0 4px 12px rgba(18,63,75,.05)",
//   display:"inline-flex", alignItems:"center", gap:6, transition:"all .2s",
// };
// const eyebrow = {
//   display:"flex", alignItems:"center", gap:8, fontSize:11, fontWeight:700,
//   letterSpacing:".25em", textTransform:"uppercase", color:P.gold,
// };
// const eyebrowDash = <span style={{width:16,height:2,borderRadius:2,background:P.gold}}/>;
// const Dot = ({ c, s=8 }) => <span style={{width:s,height:s,borderRadius:"50%",background:c,display:"inline-block",flexShrink:0}}/>;

// function useCountUp(target, ms = 900) {
//   const [n, setN] = useState(0);
//   useEffect(() => {
//     const t = Number(target) || 0;
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(t); return; }
//     let raf, s;
//     const f = ts => { s = s || ts; const p = Math.min((ts - s) / ms, 1); setN(Math.round(t * p)); if (p < 1) raf = requestAnimationFrame(f); };
//     raf = requestAnimationFrame(f);
//     return () => cancelAnimationFrame(raf);
//   }, [target, ms]);
//   return n;
// }

// function PanelTitle({ icon, children, size=16, color=P.teal }) {
//   return (
//     <div style={{display:"flex",alignItems:"center",gap:12,minWidth:0}}>
//       {icon && (
//         <span style={{width:36,height:36,borderRadius:12,background:`${color}16`,border:`1px solid ${color}2e`,
//           display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>{icon}</span>
//       )}
//       <span style={{fontSize:size,fontWeight:600,color:P.ink,fontFamily:HF}}>{children}</span>
//     </div>
//   );
// }

// const FULL_ACCESS_ROLES = ["Super Admin", "Guardian Minister", "Mayor", "Admin"];

// const getAuthUser = () => {
//   try { return JSON.parse(localStorage.getItem("authUser") || "{}"); } catch { return {}; }
// };

// const STATUS_CFG = {
//   pending:      {bg:"#FBF0DC",color:"#A8741F",border:"#F3DDAE",dot:"#F6A021",label:"Pending"},
//   approved:     {bg:"#E4F3E8",color:"#2E7D4F",border:"#BFE2CB",dot:"#4CAF50",label:"Approved"},
//   rejected:     {bg:"#FBE7E4",color:"#C0392B",border:"#F3C4BD",dot:"#D9534F",label:"Rejected"},
//   "in progress":{bg:"#DDF3F7",color:"#0A6B7B",border:"#B5E3EB",dot:"#27AEC0",label:"In Progress"},
//   resolved:     {bg:"#E4F3E8",color:"#2E7D4F",border:"#BFE2CB",dot:"#4CAF50",label:"Resolved"},
// };
// const sc = s => STATUS_CFG[(s||"pending").toLowerCase()] || STATUS_CFG.pending;

// function Sparkline({ color="#fff", data=[30,45,35,60,40,70,55], w=90, h=36 }) {
//   const max=Math.max(...data),min=Math.min(...data);
//   const pts=data.map((v,i)=>`${(i/(data.length-1))*w},${h-((v-min)/(max-min+1))*(h-4)-2}`).join(" ");
//   const gid=`sg${color.replace('#','')}`;
//   return (
//     <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{opacity:.9,display:"block"}}>
//       <defs><linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
//         <stop offset="0%" stopColor={color} stopOpacity=".45"/>
//         <stop offset="100%" stopColor={color} stopOpacity="0"/>
//       </linearGradient></defs>
//       <polygon points={`0,${h} ${pts} ${w},${h}`} fill={`url(#${gid})`}/>
//       <polyline points={pts} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   );
// }

// function StatCard({ label, value, sub, from, to, spark, dark=false, delay=0 }) {
//   const counted = useCountUp(typeof value === "number" ? value : 0);
//   const shown = typeof value === "number" ? counted : value;
//   return (
//     <div className="dc hov" style={{animationDelay:`${delay}s`,borderRadius:18,
//       background:`linear-gradient(135deg,${from},${to})`,padding:"20px 22px",
//       boxShadow:`0 10px 24px ${from}47`,position:"relative",overflow:"hidden",minHeight:128}}>
//       <div style={{position:"absolute",top:-50,right:-40,width:150,height:150,borderRadius:"50%",background:"rgba(255,255,255,0.16)"}}/>
//       <div style={{position:"absolute",bottom:-40,left:-30,width:90,height:90,borderRadius:"50%",background:"rgba(255,255,255,0.10)"}}/>
//       <div style={{position:"relative",zIndex:1}}>
//         <div style={{fontSize:12,fontWeight:600,color:dark?"#7a5a1c":"rgba(255,255,255,.95)",letterSpacing:".12em",textTransform:"uppercase",marginBottom:4}}>{label}</div>
//         <div style={{fontFamily:HF,fontSize:40,fontWeight:700,color:dark?P.tealDark:"#fff",lineHeight:1.15,fontVariantNumeric:"tabular-nums"}}>{shown}</div>
//         {sub && <div style={{fontSize:11,color:dark?"#8a6830":"rgba(255,255,255,.85)",fontWeight:600,marginTop:4}}>{sub}</div>}
//       </div>
//       <div style={{position:"absolute",right:16,bottom:14,zIndex:1}}>
//         <Sparkline color={dark?"#9a7828":"#fff"} data={spark} w={120} h={46}/>
//       </div>
//     </div>
//   );
// }

// function Donut({ pct=0 }) {
//   const r=50,c=2*Math.PI*r,dash=(pct/100)*c;
//   return (
//     <svg width={128} height={128} viewBox="0 0 128 128">
//       <defs>
//         <linearGradient id="donutGrad" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor={P.cyan}/>
//           <stop offset="100%" stopColor={P.teal}/>
//         </linearGradient>
//       </defs>
//       <circle cx={64} cy={64} r={r} fill="none" stroke={P.border} strokeWidth={13}/>
//       <circle cx={64} cy={64} r={r} fill="none" stroke="url(#donutGrad)" strokeWidth={13}
//         strokeDasharray={`${dash} ${c-dash}`} strokeLinecap="round" transform="rotate(-90 64 64)"
//         style={{transition:"stroke-dasharray 1s ease"}}/>
//       <text x={64} y={62} textAnchor="middle" fontSize={24} fontWeight={700} fill={P.ink} fontFamily={HF}>{pct}%</text>
//       <text x={64} y={78} textAnchor="middle" fontSize={9.5} fill={P.muted} fontWeight={600} letterSpacing={1.2}>RESOLVED</text>
//     </svg>
//   );
// }

// function MiniBar({ data=[], color=P.teal }) {
//   const max=Math.max(...data,1);
//   return (
//     <div style={{display:"flex",alignItems:"flex-end",gap:6,height:48}}>
//       {data.map((v,i)=>(
//         <div key={i} style={{flex:1,borderRadius:"6px 6px 2px 2px",minHeight:5,
//           background:i===data.length-1?`linear-gradient(180deg,${P.cyan},${P.teal})`:"#BDE6EC",
//           height:`${(v/max)*100}%`,transition:"height .6s ease"}}/>
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
//       color:"#fff",fontSize:size*.34,fontWeight:700,flexShrink:0,
//       border:"2px solid #fff",boxShadow:`0 2px 8px ${color}44`}}>
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

// function CompactPopup({ appt, color, onClose, anchorRect }) {
//   const cfg    = sc(appt.status);
//   const popRef = useRef(null);
//   const [pos, setPos] = useState({ top:0, left:0, ready:false });
//   const POPUP_W = 252;

//   const calcPos = useCallback(() => {
//     if (!anchorRect || !popRef.current) return;
//     const PH  = popRef.current.offsetHeight || 320;
//     const vw  = window.innerWidth;
//     const vh  = window.innerHeight;
//     const pad = 10;
//     let left = anchorRect.right + 8;
//     if (left + POPUP_W > vw - pad) left = anchorRect.left - POPUP_W - 8;
//     left = Math.max(pad, Math.min(left, vw - POPUP_W - pad));
//     let top = anchorRect.top;
//     if (top + PH > vh - pad) top = vh - PH - pad;
//     top = Math.max(pad, top);
//     setPos({ top, left, ready: true });
//   }, [anchorRect]);

//   useEffect(() => { const raf = requestAnimationFrame(calcPos); return () => cancelAnimationFrame(raf); }, [calcPos]);
//   useEffect(() => { window.addEventListener("resize", calcPos); return () => window.removeEventListener("resize", calcPos); }, [calcPos]);
//   useEffect(() => {
//     const fn = e => { if (popRef.current && !popRef.current.contains(e.target)) onClose(); };
//     document.addEventListener("mousedown", fn);
//     return () => document.removeEventListener("mousedown", fn);
//   }, [onClose]);
//   useEffect(() => {
//     let t;
//     const fn = () => { clearTimeout(t); t = setTimeout(onClose, 120); };
//     window.addEventListener("scroll", fn, true);
//     return () => { window.removeEventListener("scroll", fn, true); clearTimeout(t); };
//   }, [onClose]);
//   useEffect(() => {
//     const fn = e => { if (e.key === "Escape") onClose(); };
//     document.addEventListener("keydown", fn);
//     return () => document.removeEventListener("keydown", fn);
//   }, [onClose]);

//   return (
//     <div ref={popRef} style={{
//       position:"fixed", top:pos.top, left:pos.left,
//       opacity:pos.ready?1:0, transition:"opacity .1s", zIndex:99999,
//       width:POPUP_W, background:P.white, borderRadius:16,
//       boxShadow:"0 12px 40px rgba(18,63,75,0.22), 0 2px 8px rgba(18,63,75,0.08)",
//       border:`1px solid ${P.border}`, overflow:"hidden",
//       animation:"popIn .15s cubic-bezier(.34,1.4,.64,1)",
//     }}>
//       <div style={{background:`linear-gradient(135deg,${color},${color}dd)`,padding:"12px 13px 11px",display:"flex",alignItems:"center",gap:10}}>
//         <Av name={appt.fullName} size={36} color={color}/>
//         <div style={{flex:1,minWidth:0}}>
//           <div style={{fontSize:13.5,fontWeight:700,color:"#fff",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{appt.fullName||"—"}</div>
//           <div style={{fontSize:11,color:"rgba(255,255,255,0.85)",marginTop:2,fontWeight:500}}>{appt.slotTime||"—"}</div>
//         </div>
//         <button onClick={e=>{e.stopPropagation();onClose();}} aria-label="Close" style={{background:"rgba(255,255,255,0.22)",border:"none",borderRadius:"50%",width:24,height:24,cursor:"pointer",color:"#fff",fontSize:13,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,lineHeight:1}}>✕</button>
//       </div>
//       <div style={{padding:"11px 14px 12px"}}>
//         <PRow icon="📱" val={appt.mobileNumber||"—"} bold/>
//         <PRow icon="📍" val={`Ward: ${appt.ward||"—"}`}/>
//         {appt.purpose && <PRow icon="🎯" val={appt.purpose.slice(0,44)+(appt.purpose.length>44?"…":"")}/>}
//         <PRow icon="👥" val={`Visitors: ${appt.numberOfVisitors||1}`}/>
//         {appt.preferredDate && <PRow icon="📅" val={new Date(appt.preferredDate+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}/>}
//         <div style={{marginTop:8,marginBottom:8}}>
//           <span style={{display:"inline-flex",alignItems:"center",gap:6,background:cfg.bg,color:cfg.color,border:`1px solid ${cfg.border}`,padding:"4px 12px",borderRadius:20,fontSize:11,fontWeight:700}}>
//             <span style={{width:7,height:7,borderRadius:"50%",background:cfg.dot,display:"inline-block"}}/>
//             {cfg.label}
//           </span>
//         </div>
//         {(appt.tokenId||appt._id)&&(
//           <div style={{fontSize:10,color:P.muted,fontWeight:500,fontFamily:"monospace",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
//             Token: {appt.tokenId||appt._id?.slice(-12)||"—"}
//           </div>
//         )}
//         <div style={{borderTop:`1px solid ${P.border}`,marginTop:10,paddingTop:8,display:"flex",justifyContent:"flex-end"}}>
//           <span style={{fontSize:12,color:P.teal,fontWeight:700,cursor:"pointer"}}>View Details ↗</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PRow({ icon, val, bold=false }) {
//   return (
//     <div style={{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6}}>
//       <span style={{fontSize:13,flexShrink:0,marginTop:1}}>{icon}</span>
//       <span style={{fontSize:12,fontWeight:bold?600:500,color:bold?P.text:P.muted,lineHeight:1.4}}>{val}</span>
//     </div>
//   );
// }

// function ApptCard({ appt, color }) {
//   const [anchorRect, setAnchorRect] = useState(null);
//   const cardRef = useRef(null);
//   const isOpen  = !!anchorRect;

//   const handleClick = useCallback(e => {
//     e.stopPropagation();
//     if (isOpen) { setAnchorRect(null); return; }
//     const rect = cardRef.current?.getBoundingClientRect();
//     if (rect) setAnchorRect({ ...rect });
//   }, [isOpen]);

//   const handleClose = useCallback(() => setAnchorRect(null), []);

//   const baseShadow = isOpen ? `0 6px 18px ${color}40` : "0 1px 2px rgba(18,63,75,.04), 0 4px 10px rgba(18,63,75,.06)";

//   return (
//     <>
//       <div ref={cardRef} onClick={handleClick} style={{
//         background:isOpen?`${color}14`:P.white,
//         border:`1px solid ${isOpen?color:color+"40"}`,
//         borderLeft:`3px solid ${color}`,
//         borderRadius:"4px 10px 10px 4px",
//         padding:"6px 9px", cursor:"pointer", marginBottom:4,
//         userSelect:"none", transition:"all .2s",
//         boxShadow:baseShadow,
//       }}
//         onMouseEnter={e=>{e.currentTarget.style.background=`${color}12`;e.currentTarget.style.borderColor=color;e.currentTarget.style.transform="translateY(-1px)";e.currentTarget.style.boxShadow=`0 6px 18px ${color}40`;}}
//         onMouseLeave={e=>{e.currentTarget.style.background=isOpen?`${color}14`:P.white;e.currentTarget.style.borderColor=isOpen?color:`${color}40`;e.currentTarget.style.borderLeftColor=color;e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow=baseShadow;}}
//       >
//         <div style={{display:"flex",alignItems:"center",gap:7}}>
//           <Av name={appt.fullName} size={22} color={color}/>
//           <div style={{flex:1,minWidth:0}}>
//             <div style={{fontSize:11.5,fontWeight:700,color:P.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{appt.fullName||"—"}</div>
//             <div style={{fontSize:10,fontWeight:600,color:color,marginTop:1,display:"flex",alignItems:"center",gap:5}}>
//               {appt.slotTime||"—"}
//               <span style={{width:6,height:6,borderRadius:"50%",flexShrink:0,background:sc(appt.status).dot,display:"inline-block"}}/>
//             </div>
//           </div>
//         </div>
//       </div>
//       {isOpen && <CompactPopup appt={appt} color={color} onClose={handleClose} anchorRect={anchorRect}/>}
//     </>
//   );
// }

// function CalendarPanel({ appointments=[], mayorSlots=[], loading=false }) {
//   const [view,     setView]     = useState("week");
//   const [weekBase, setWeekBase] = useState(new Date());
//   const [search,   setSearch]   = useState("");

//   const weekDates = getWeekDates(weekBase);
//   const today     = new Date();

//   const filtered = appointments.filter(a => {
//     if (!search) return true;
//     const q = search.toLowerCase();
//     return (a.fullName||"").toLowerCase().includes(q)||(a.purpose||"").toLowerCase().includes(q)||(a.ward||"").toLowerCase().includes(q)||(a.mobileNumber||"").includes(q);
//   });

//   const ds = dt => `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,"0")}-${String(dt.getDate()).padStart(2,"0")}`;
//   const appsForDate = dt => filtered.filter(a => (a.preferredDate||"").slice(0,10) === ds(dt));

//   const todayStr = ds(today);
//   const dayAppts = filtered.filter(a => (a.preferredDate||"").slice(0,10) === todayStr);
//   const approvedCnt = filtered.filter(a => (a.status||"").toLowerCase() === "approved").length;
//   const pendingCnt  = filtered.filter(a => (a.status||"").toLowerCase() === "pending").length;
//   const monthLabel = weekDates[0].toLocaleDateString("en-IN",{month:"long",year:"numeric"});
//   const hours = Array.from({length:10},(_,i) => 8+i);
//   const fmtH = h => h<12?`${h} AM`:h===12?"12 PM":`${h-12} PM`;

//   const navBtn = {background:P.white,border:`1px solid ${P.border}`,borderRadius:10,width:34,height:34,cursor:"pointer",fontSize:15,color:P.tealDark,fontWeight:700,boxShadow:"0 1px 4px rgba(18,63,75,0.06)",transition:"all .2s"};

//   return (
//     <div className="dc" style={{animationDelay:".3s",...panel,overflow:"hidden",display:"flex",flexDirection:"column"}}>
//       <div style={{padding:"20px 22px 12px"}}>
//         <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:14,gap:10,flexWrap:"wrap"}}>
//           <div style={{display:"flex",alignItems:"center",gap:14,flexWrap:"wrap"}}>
//             <div>
//               <div style={eyebrow}>{eyebrowDash}Today's appointments</div>
//               <p style={{margin:"6px 0 0",fontFamily:HF,fontSize:22,color:P.ink,fontWeight:700}}>{today.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}</p>
//             </div>
//             <div style={{background:`linear-gradient(135deg,${P.teal},${P.cyan})`,color:"#fff",fontSize:12.5,fontWeight:600,padding:"7px 16px",borderRadius:22,boxShadow:`0 6px 16px ${P.teal}47`,whiteSpace:"nowrap"}}>{filtered.length} All Appointments</div>
//           </div>
//           <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
//             <div style={{position:"relative"}}>
//               <span style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",fontSize:12,color:P.muted}}>🔍</span>
//               <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search…" aria-label="Search appointments" style={{border:`1px solid transparent`,borderRadius:12,padding:"8px 12px 8px 30px",fontSize:12.5,color:P.text,outline:"none",background:"#EEF6F8",width:160,fontFamily:"inherit",transition:"all .2s"}}/>
//             </div>
//             <div style={{display:"flex",background:"#EEF6F8",borderRadius:12,padding:3}}>
//               {["Day","Week"].map(v=>(
//                 <button key={v} onClick={()=>setView(v.toLowerCase())} style={{padding:"6px 16px",borderRadius:9,border:"none",background:view===v.toLowerCase()?P.white:"transparent",color:view===v.toLowerCase()?P.teal:P.muted,fontSize:12.5,fontWeight:600,cursor:"pointer",transition:"all .2s",boxShadow:view===v.toLowerCase()?"0 1px 4px rgba(18,63,75,.12)":"none"}}>{v}</button>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
//           {view==="week"?(
//             <div style={{display:"flex",alignItems:"center",gap:8}}>
//               <button className="gbtn" aria-label="Previous week" onClick={()=>{const d=new Date(weekBase);d.setDate(d.getDate()-7);setWeekBase(d);}} style={navBtn}>‹</button>
//               <span style={{fontSize:13,fontWeight:600,color:P.ink,minWidth:140,textAlign:"center",border:`1px solid ${P.border}`,borderRadius:10,padding:"7px 12px",background:P.white}}>{monthLabel}</span>
//               <button className="gbtn" aria-label="Next week" onClick={()=>{const d=new Date(weekBase);d.setDate(d.getDate()+7);setWeekBase(d);}} style={navBtn}>›</button>
//             </div>
//           ):<div/>}
//           <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
//             {[{l:"Today",v:dayAppts.length,c:P.teal},{l:"Approved",v:approvedCnt,c:P.sage},{l:"Pending",v:pendingCnt,c:P.goldDeep}].map(({l,v,c})=>(
//               <span key={l} style={{background:`${c}14`,border:`1px solid ${c}40`,borderRadius:20,padding:"4px 12px",fontSize:11.5,fontWeight:600,color:c,whiteSpace:"nowrap"}}>{v} {l}</span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {mayorSlots.length>0&&(
//         <div style={{display:"flex",gap:6,flexWrap:"wrap",padding:"8px 22px",background:`${P.cream}88`,borderTop:`1px solid ${P.border}`,borderBottom:`1px solid ${P.border}`}}>
//           <span style={{fontSize:10,fontWeight:700,color:P.tealDark,textTransform:"uppercase",letterSpacing:.8,alignSelf:"center"}}>Mayor Available:</span>
//           {mayorSlots.map((s,i)=>(
//             <span key={i} style={{fontSize:10.5,fontWeight:600,color:P.tealDark,background:`${P.teal}1a`,border:`1px solid ${P.teal}33`,borderRadius:20,padding:"2px 10px"}}>{s.start} – {s.end}</span>
//           ))}
//         </div>
//       )}

//       {loading?(
//         <div style={{textAlign:"center",padding:"48px 0",color:P.muted}}>
//           <div style={{width:28,height:28,border:`3px solid ${P.border}`,borderTopColor:P.teal,borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 10px"}}/>
//           Loading appointments…
//         </div>
//       ):view==="week"?(
//         <div style={{padding:"0 18px 12px"}}>
//           <div style={{overflowX:"auto",overflowY:"auto",maxHeight:380,border:`1px solid ${P.border}`,borderRadius:14}}>
//             <div style={{minWidth:560}}>
//               <div style={{display:"grid",gridTemplateColumns:"56px repeat(7,1fr)",borderBottom:`1px solid ${P.border}`,background:P.soft,position:"sticky",top:0,zIndex:4}}>
//                 <div style={{borderRight:`1px solid ${P.border}`}}/>
//                 {weekDates.map((dt,i)=>{
//                   const isToday=isSameDay(dt,today),cnt=appsForDate(dt).length;
//                   return(
//                     <div key={i} style={{padding:"9px 3px",textAlign:"center",borderRight:i<6?`1px solid ${P.border}`:undefined,background:isToday?`${P.cyan}1a`:"transparent"}}>
//                       <div style={{fontSize:11,fontWeight:600,color:isToday?P.tealDark:P.muted,letterSpacing:.3}}>{DAYS_SHORT[i]}</div>
//                       <div style={{width:32,height:32,borderRadius:"50%",margin:"3px auto 0",background:isToday?`linear-gradient(135deg,${P.teal},${P.cyan})`:"transparent",boxShadow:isToday?`0 4px 12px ${P.teal}55`:"none",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,fontFamily:HF,color:isToday?"#fff":P.ink}}>{dt.getDate()}</div>
//                       {cnt>0&&<div style={{marginTop:3,fontSize:9,fontWeight:700,color:isToday?"#fff":P.tealDark,background:isToday?`${P.teal}cc`:`${P.teal}1c`,borderRadius:20,padding:"1px 6px",display:"inline-block"}}>{cnt}</div>}
//                     </div>
//                   );
//                 })}
//               </div>
//               {hours.map(hour=>(
//                 <div key={hour} style={{display:"grid",gridTemplateColumns:"56px repeat(7,1fr)",borderBottom:`1px solid ${P.border}`,minHeight:56}}>
//                   <div style={{borderRight:`1px solid ${P.border}`,padding:"6px 7px 0 0",textAlign:"right",fontSize:10.5,fontWeight:600,color:P.muted,background:P.white,position:"sticky",left:0,zIndex:2}}>{fmtH(hour)}</div>
//                   {weekDates.map((dt,di)=>{
//                     const isToday=isSameDay(dt,today);
//                     const slotAppts=appsForDate(dt).filter(a=>{const m=toMin(a.slotTime||"");return m>=(hour-8)*60&&m<(hour-8+1)*60;});
//                     return(
//                       <div key={di} style={{borderRight:di<6?`1px solid ${P.border}`:undefined,padding:"4px 4px",background:isToday?`${P.cyan}0d`:"transparent"}}>
//                         {slotAppts.map((appt,ai)=>{const gIdx=filtered.indexOf(appt);return <ApptCard key={ai} appt={appt} color={ACCENT[gIdx%ACCENT.length]}/>;
//                         })}
//                       </div>
//                     );
//                   })}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ):(
//         <div style={{overflowY:"auto",maxHeight:380}}>
//           {dayAppts.length===0?(
//             <div style={{textAlign:"center",padding:"44px 0",color:P.muted}}>
//               <div style={{width:56,height:56,borderRadius:16,background:`${P.teal}14`,margin:"0 auto 10px",display:"grid",placeItems:"center",fontSize:26}}>📅</div>
//               <div style={{fontWeight:600,fontSize:14,color:P.text,marginBottom:3}}>No appointments today</div>
//               <div style={{fontSize:12.5}}>Switch to Week view to browse other days.</div>
//             </div>
//           ):(
//             <div style={{padding:"8px 22px"}}>
//               {hours.map(hour=>{
//                 const label=hour<12?`${hour}:00 AM`:hour===12?"12:00 PM":`${hour-12}:00 PM`;
//                 const hAppts=dayAppts.filter(a=>{const m=toMin(a.slotTime||"");return m>=(hour-8)*60&&m<(hour-8+1)*60;});
//                 return(
//                   <div key={hour} style={{display:"flex",gap:12,marginBottom:hAppts.length?8:2}}>
//                     <div style={{width:60,fontSize:10.5,fontWeight:hAppts.length?700:500,color:hAppts.length?P.teal:P.muted,textAlign:"right",paddingTop:5,flexShrink:0,fontFamily:"monospace"}}>{label}</div>
//                     <div style={{flex:1,borderTop:hAppts.length?"none":`1px solid ${P.border}`,paddingTop:hAppts.length?0:5}}>
//                       {hAppts.length>0&&(
//                         <div style={{display:"grid",gridTemplateColumns:`repeat(${Math.min(hAppts.length,3)},1fr)`,gap:6}}>
//                           {hAppts.map((appt,ai)=>{const gIdx=filtered.indexOf(appt);return <ApptCard key={ai} appt={appt} color={ACCENT[gIdx%ACCENT.length]}/>;
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

//       <div style={{borderTop:`1px solid ${P.border}`,padding:"10px 22px",display:"flex",alignItems:"center",justifyContent:"space-between",background:P.white,flexWrap:"wrap",gap:4,marginTop:"auto"}}>
//         <div style={{display:"flex",alignItems:"center",gap:6}}>
//           <span style={{width:8,height:8,borderRadius:"50%",background:P.sage,display:"inline-block",animation:"pulse 2s infinite",boxShadow:`0 0 6px ${P.sage}`}}/>
//           <span style={{fontSize:11,color:P.muted,fontWeight:600}}>Live · 8:00 AM – 6:00 PM</span>
//         </div>
//         <span style={{fontSize:11,color:P.muted,fontWeight:500}}>{filtered.length} total appointments</span>
//       </div>
//     </div>
//   );
// }

// function ProgressBar({ value, max, color, height=6 }) {
//   const pct = max > 0 ? Math.round((value / max) * 100) : 0;
//   return (
//     <div style={{ height, borderRadius: 99, background: P.border, overflow: "hidden" }}>
//       <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg,${color},${color}cc)`, borderRadius: 99, transition: "width 1s cubic-bezier(.2,.7,.2,1)" }}/>
//     </div>
//   );
// }

// // Empty state: icon tile + short direction (+ optional skeleton lines)
// function Empty({ icon="◎", title, hint, skeleton=false }) {
//   return (
//     <div style={{textAlign:"center",padding:"30px 12px",color:P.muted}}>
//       <div style={{width:52,height:52,borderRadius:14,background:`${P.teal}14`,margin:"0 auto 10px",display:"grid",placeItems:"center",fontSize:22}}>{icon}</div>
//       <div style={{fontWeight:600,color:P.ink,fontSize:14}}>{title}</div>
//       {hint && <div style={{fontSize:12.5,marginTop:2}}>{hint}</div>}
//       {skeleton && <><div className="sk" style={{width:"60%"}}/><div className="sk" style={{width:"40%"}}/></>}
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // Meeting-wise progress (प्रत्येक meeting चे subjects + progress bar)
// // Progress = Action Taken झालेले subjects / एकूण subjects
// // ─────────────────────────────────────────────────────────────────────────────
// const DECISION_CFG = {
//   "Approved":      { bg:"#E4F3E8", color:"#2E7D4F" },
//   "Rejected":      { bg:"#FBE7E4", color:"#C0392B" },
//   "On-Hold":       { bg:"#FBF0DC", color:"#A8741F" },
//   "Postponed":     { bg:"#DDF3F7", color:"#0A6B7B" },
//   "Not Conducted": { bg:"#EEF2F3", color:"#5F7C88" },
// };
// const MP_FILTERS = [
//   { k:"all",      l:"All" },
//   { k:"progress", l:"In Progress" },
//   { k:"done",     l:"Completed" },
//   { k:"notstart", l:"Not Started" },
// ];

// function meetingProgress(m) {
//   const subs     = m.subjects || [];
//   const total    = subs.length;
//   const action   = subs.filter(s => s.actionTaken && String(s.actionTaken).trim() !== "").length;
//   const decided  = subs.filter(s => s.decisionInMeeting && !(s.actionTaken && String(s.actionTaken).trim() !== "")).length;
//   const pending  = total - action - decided;
//   const pct      = total > 0 ? Math.round((action / total) * 100) : 0;
//   const status   = total === 0 ? "empty" : pct === 100 ? "done" : (action === 0 && decided === 0) ? "notstart" : "progress";
//   return { total, action, decided, pending, pct, status };
// }

// const MP_STATUS = {
//   done:     { l:"Completed",   bg:"#E4F3E8", color:"#2E7D4F" },
//   progress: { l:"In Progress", bg:"#DDF3F7", color:"#0A6B7B" },
//   notstart: { l:"Not Started", bg:"#FBF0DC", color:"#A8741F" },
//   empty:    { l:"No Subjects", bg:"#EEF2F3", color:"#5F7C88" },
// };

// function StackedBar({ action, decided, total, height=10 }) {
//   const w = v => total > 0 ? `${(v / total) * 100}%` : "0%";
//   return (
//     <div style={{ display:"flex", height, borderRadius:99, background:P.border, overflow:"hidden" }}>
//       <div title={`Action taken: ${action}`} style={{ width:w(action), background:`linear-gradient(90deg,${P.teal},${P.cyan})`, transition:"width 1s cubic-bezier(.2,.7,.2,1)" }}/>
//       <div title={`Decided, action pending: ${decided}`} style={{ width:w(decided), background:`${P.gold}cc`, transition:"width 1s cubic-bezier(.2,.7,.2,1)" }}/>
//     </div>
//   );
// }

// function MeetingProgressPanel({ meetings = [], scopeLabel, onOpen }) {
//   const [filter,   setFilter]   = useState("all");
//   const [search,   setSearch]   = useState("");
//   const [openId,   setOpenId]   = useState(null);
//   const [showAll,  setShowAll]  = useState(false);

//   const rows = meetings.map(m => ({ m, p: meetingProgress(m) }));
//   const counts = {
//     all:      rows.length,
//     progress: rows.filter(r => r.p.status === "progress").length,
//     done:     rows.filter(r => r.p.status === "done").length,
//     notstart: rows.filter(r => r.p.status === "notstart").length,
//   };
//   const q = search.trim().toLowerCase();
//   const visible = rows
//     .filter(r => filter === "all" || r.p.status === filter)
//     .filter(r => !q
//       || (r.m.meetingNumber || "").toLowerCase().includes(q)
//       || (r.m.meetingType || "").toLowerCase().includes(q)
//       || (r.m.subjects || []).some(s => (s.subjectName || "").toLowerCase().includes(q) || (s.subjectId || "").toLowerCase().includes(q)));
//   const shown = showAll ? visible : visible.slice(0, 2);

//   const fmtDate = d => d ? new Date(d).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" }) : "—";

//   return (
//     <div className="pnl" style={{ ...panel, padding:"22px", marginBottom:18 }}>
//       <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:10, flexWrap:"wrap", marginBottom:14 }}>
//         <div>
//           <PanelTitle icon="📈">Meeting-wise Subject Progress</PanelTitle>
//           <p style={{ margin:"6px 0 0 48px", fontSize:12.5, color:P.muted }}>
//             {scopeLabel || "Progress = subjects with action taken"}
//           </p>
//         </div>
//         <div style={{ position:"relative" }}>
//           <span style={{ position:"absolute", left:10, top:"50%", transform:"translateY(-50%)", fontSize:12, color:P.muted }}>🔍</span>
//           <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Meeting / subject…" aria-label="Search meetings"
//             style={{ border:"1px solid transparent", borderRadius:12, padding:"8px 12px 8px 30px", fontSize:12.5, color:P.text, outline:"none", background:"#EEF6F8", width:200, fontFamily:"inherit" }}/>
//         </div>
//       </div>

//       <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:10, flexWrap:"wrap", marginBottom:14 }}>
//         <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
//           {MP_FILTERS.map(({ k, l }) => (
//             <button key={k} onClick={() => { setFilter(k); setShowAll(false); }} style={{
//               border:`1px solid ${filter===k ? "transparent" : P.border}`,
//               background: filter===k ? `linear-gradient(135deg,${P.teal},${P.cyan})` : P.white,
//               color: filter===k ? "#fff" : P.ink2, borderRadius:20, padding:"6px 14px",
//               fontSize:12.5, fontWeight:600, cursor:"pointer", transition:"all .2s",
//               boxShadow: filter===k ? `0 4px 12px ${P.teal}47` : "none" }}>
//               {l} <span style={{ opacity:.8 }}>({counts[k]})</span>
//             </button>
//           ))}
//         </div>
//         <div style={{ display:"flex", gap:12, fontSize:11.5, color:P.muted, fontWeight:600, flexWrap:"wrap" }}>
//           <span style={{ display:"flex", alignItems:"center", gap:6 }}><Dot c={P.teal}/>Action taken</span>
//           <span style={{ display:"flex", alignItems:"center", gap:6 }}><Dot c={P.gold}/>Decided, action pending</span>
//           <span style={{ display:"flex", alignItems:"center", gap:6 }}><Dot c={P.border}/>Decision pending</span>
//         </div>
//       </div>

//       {visible.length === 0 ? (
//         <Empty icon="🏛" title={rows.length ? "No meetings match this filter" : "No meetings to show yet"}
//           hint={rows.length ? "Try another filter or search." : "Meetings and their subjects will appear here."}/>
//       ) : (
//         <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
//           {shown.map(({ m, p }) => {
//             const st = MP_STATUS[p.status];
//             const isOpen = openId === m._id;
//             return (
//               <div key={m._id} style={{ border:`1px solid ${isOpen ? P.teal+"66" : P.border}`, borderRadius:14, background:isOpen ? P.soft : P.white, transition:"all .2s" }}>
//                 <div onClick={() => setOpenId(isOpen ? null : m._id)} role="button" tabIndex={0}
//                   onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenId(isOpen ? null : m._id); } }}
//                   style={{ padding:"14px 16px", cursor:"pointer", display:"grid", gridTemplateColumns:"minmax(0,1.3fr) minmax(0,2fr) auto", gap:16, alignItems:"center" }}
//                   className="mp-row">
//                   <div style={{ minWidth:0 }}>
//                     <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
//                       <span style={{ fontFamily:HF, fontSize:14.5, fontWeight:700, color:P.ink }}>{m.meetingNumber || "—"}</span>
//                       <span style={{ fontSize:10.5, fontWeight:600, padding:"2px 9px", borderRadius:20,
//                         background: m.meetingType === "Standing Committee" ? `${P.gold}1f` : `${P.teal}14`,
//                         color: m.meetingType === "Standing Committee" ? "#A8741F" : P.tealDark }}>{m.meetingType || "—"}</span>
//                     </div>
//                     <div style={{ fontSize:12, color:P.muted, marginTop:3 }}>
//                       📅 {fmtDate(m.meetingDate)}{m.meetingTime ? ` · ${m.meetingTime} ${m.meetingAmpm || ""}` : ""} · {p.total} subject{p.total === 1 ? "" : "s"}
//                     </div>
//                   </div>
//                   <div style={{ minWidth:0 }}>
//                     <div style={{ display:"flex", justifyContent:"space-between", fontSize:11.5, color:P.muted, fontWeight:600, marginBottom:6, gap:8 }}>
//                       <span>{p.action}/{p.total} action taken</span>
//                       <span style={{ color:P.teal, fontWeight:700, fontSize:13 }}>{p.pct}%</span>
//                     </div>
//                     <StackedBar action={p.action} decided={p.decided} total={p.total}/>
//                   </div>
//                   <div style={{ display:"flex", alignItems:"center", gap:10, justifyContent:"flex-end" }}>
//                     <span style={{ fontSize:11, fontWeight:600, padding:"3px 10px", borderRadius:20, background:st.bg, color:st.color, whiteSpace:"nowrap" }}>{st.l}</span>
//                     <span aria-hidden="true" style={{ color:P.muted, fontSize:12, transform:isOpen ? "rotate(180deg)" : "none", transition:"transform .2s" }}>▾</span>
//                   </div>
//                 </div>

//                 {isOpen && (
//                   <div style={{ padding:"0 16px 14px" }}>
//                     {p.total === 0 ? (
//                       <div style={{ fontSize:12.5, color:P.muted, padding:"8px 2px" }}>No subjects added to this meeting yet.</div>
//                     ) : (
//                       <div style={{ overflowX:"auto", border:`1px solid ${P.border}`, borderRadius:12, background:P.white }}>
//                         <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12.5 }}>
//                           <thead>
//                             <tr>{["Subject ID","Subject","Type","Decision","Tagged To","Action Taken"].map(h => (
//                               <th key={h} style={{ ...thStyle, padding:"10px 12px", fontSize:10.5 }}>{h}</th>))}</tr>
//                           </thead>
//                           <tbody>
//                             {(m.subjects || []).map((s, i) => {
//                               const dc = DECISION_CFG[s.decisionInMeeting];
//                               const hasAction = s.actionTaken && String(s.actionTaken).trim() !== "";
//                               return (
//                                 <tr key={s._id || i} style={{ borderTop:`1px solid ${P.border}` }}>
//                                   <td style={{ padding:"10px 12px", fontFamily:"monospace", fontSize:11.5, color:P.teal, fontWeight:700, whiteSpace:"nowrap" }}>{s.subjectId || "—"}</td>
//                                   <td style={{ padding:"10px 12px", color:P.ink, fontWeight:500, minWidth:180 }}>{s.subjectName || "—"}</td>
//                                   <td style={{ padding:"10px 12px", color:P.muted, whiteSpace:"nowrap" }}>{s.subjectType || "—"}</td>
//                                   <td style={{ padding:"10px 12px" }}>
//                                     {dc ? <span style={{ fontSize:10.5, fontWeight:600, padding:"3px 10px", borderRadius:20, background:dc.bg, color:dc.color, whiteSpace:"nowrap" }}>{s.decisionInMeeting}</span>
//                                         : <span style={{ fontSize:11.5, color:P.muted }}>Pending</span>}
//                                   </td>
//                                   <td style={{ padding:"10px 12px", color:P.muted, maxWidth:220 }}>
//                                     {(s.tagTo || []).length ? (s.tagTo || []).join(", ") : "—"}
//                                   </td>
//                                   <td style={{ padding:"10px 12px", minWidth:140 }}>
//                                     {hasAction
//                                       ? <span style={{ display:"inline-flex", alignItems:"center", gap:5, fontSize:12, fontWeight:600, color:"#2E7D4F" }}>✓ {s.actionTaken}</span>
//                                       : <span style={{ fontSize:11.5, color:P.muted }}>Not yet</span>}
//                                   </td>
//                                 </tr>
//                               );
//                             })}
//                           </tbody>
//                         </table>
//                       </div>
//                     )}
//                     <div style={{ display:"flex", justifyContent:"flex-end", marginTop:10 }}>
//                       <button className="gbtn" onClick={() => onOpen(m)} style={{ ...ghostBtn, padding:"6px 14px", fontSize:12.5 }}>Open meeting ↗</button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       )}

//       {visible.length > 2 && (
//         <div style={{ display:"flex", justifyContent:"center", marginTop:14 }}>
//           <button className="gbtn" onClick={() => setShowAll(v => !v)} style={ghostBtn}>
//             {showAll ? "Show less" : `Show all ${visible.length} meetings`}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // Dashboard
// // ─────────────────────────────────────────────────────────────────────────────
// export default function Dashboard() {
//   const navigate = useNavigate();
//   const { user } = useSelector(s => s.auth);

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

//   const [meetingStats, setMeetingStats] = useState({
//     totalMeetings: 0,
//     totalSubjects: 0,
//     approved: 0,
//     rejected: 0,
//     onHold: 0,
//     postponed: 0,
//     notConducted: 0,
//     actionTakenSubjects: 0,
//     subjectsByType: { General: 0, Administrative: 0, Contract: 0 },
//     actionProgress: {},
//     departmentStats: {},
//   });
//   const [meetingLoading, setMeetingLoading] = useState(true);
//   const [meetingList,    setMeetingList]    = useState([]);   // role नुसार दिसणाऱ्या meetings (subjects सह)
//   const [meetingScope,   setMeetingScope]   = useState(null); // backend कडून आलेला scope

//   // ── Role & dept helpers ───────────────────────────────────────────────────
//   const authUser     = getAuthUser();
//   const userRole     = authUser?.role || "";
//   const userDept     = authUser?.departmentName || "";
//   const isFullAccess = FULL_ACCESS_ROLES.includes(userRole);
//   // नगरसेवक (Ward Councillor) — category All: सर्व विभागांचे meeting विषय दिसतात
//   // const isCouncillor = userRole === "Ward Councillor";

//     const isCouncillor = ["corporator", "ward councillor"].includes(String(userRole || "").toLowerCase());
//   const seesAllDepts = isFullAccess || isCouncillor;

//   // ── Fetch Inward (dept-filtered for dept users) ───────────────────────────
//   const fetchDashboard = useCallback(async () => {
//     setLoading(true);
//     try {
//       const res  = await axiosInstance.get("/inwardAll");
//       let data   = res.data?.data || [];

//       // For department users, filter inward records tagged to their department
//       if (!isFullAccess && userDept) {
//         data = data.filter(d =>
//           (d.mainDepartment && d.mainDepartment === userDept) ||
//           (d.departmentName && d.departmentName === userDept) ||
//           (Array.isArray(d.departments) && d.departments.includes(userDept))
//         );
//       }

//       setStats({
//         total:      data.length,
//         pending:    data.filter(d => d.status==="Pending").length,
//         resolved:   data.filter(d => d.status==="Resolved").length,
//         inProgress: data.filter(d => d.status==="In Progress").length,
//       });

//       // Taluka tracking — only for full access
//       if (isFullAccess) {
//         const tMap={};
//         data.forEach(d => { if(d.taluka) tMap[d.taluka]=(tMap[d.taluka]||0)+1; });
//         setTalukaData(tMap);
//       }

//       const now=Date.now(), wk=Array(7).fill(0);
//       data.forEach(d => { const diff=Math.floor((now-new Date(d.createdAt))/86400000); if(diff>=0&&diff<7)wk[6-diff]++; });
//       setWeeklyData(wk.map(v=>v||Math.floor(2+Math.random()*6)));
//       setRecent(data.slice(0,8));
//     } catch(e) { console.error(e); }
//     finally { setLoading(false); }
//   }, [isFullAccess, userDept]);

//   const fetchAppointments = useCallback(async () => {
//     // Appointments calendar only shown for full-access roles
//     if (!isFullAccess) { setApptLoading(false); return; }
//     setApptLoading(true);
//     try {
//       const res = await citizenAxios.get("/citizen/admin/all-appointments");
//       if(res.data.success) setAppointments(res.data.appointments||[]);
//     } catch(e) { console.error(e); setAppointments([]); }
//     finally { setApptLoading(false); }
//   }, [isFullAccess]);

//   const fetchMayorSlots = useCallback(async () => {
//     if (!isFullAccess) return;
//     try {
//       const res = await axios.get(`${BASE_URL}/api/availability/get`);
//       if(res.data.success) {
//         const ts=new Date().toISOString().slice(0,10);
//         const rec=res.data.data.find(a=>a.date===ts);
//         setMayorSlots(rec?.timeSlots||[]);
//       }
//     } catch(e) { console.error(e); }
//   }, [isFullAccess]);

//   // ── Fetch Meeting Analytics ───────────────────────────────────────────────
//   const fetchMeetingStats = useCallback(async () => {
//     setMeetingLoading(true);
//     try {
//       let meetings = [];
//       try {
//         // Backend role नुसार filter करून पाठवतो (Admin → all, नगरसेवक → General Body / Standing Committee, dept → tagged subjects)
//         const res = await axiosInstance.get("/meetingProgress");
//         meetings  = res.data?.data || [];
//         setMeetingScope(res.data?.scope || null);
//       } catch (err) {
//         // Fallback (जुना token / backend update नसेल तर) — जुनी client-side filtering
//         console.warn("meetingProgress unavailable, falling back to /getMeetings", err?.response?.status);
//         const res  = await axiosInstance.get("/getMeetings");
//         const data = res.data?.data || [];
//         const visibleTypes = isCouncillor
//           ? [...(authUser?.isGeneralBodyMember !== false ? ["General Body"] : []), ...(authUser?.isStandingCommitteeMember ? ["Standing Committee"] : [])]
//           : null;
//         meetings = isFullAccess ? data
//           : isCouncillor ? data.filter(m => visibleTypes.includes(m.meetingType))
//           : userDept ? data
//               .map(m => ({ ...m, subjects: (m.subjects || []).filter(sub => Array.isArray(sub.tagTo) && sub.tagTo.includes(userDept)) }))
//               .filter(m => m.subjects.length > 0)
//           : [];
//         setMeetingScope(null);
//       }
//       setMeetingList(meetings);

//       // Collect subjects (meetings आधीच role नुसार filter झालेल्या आहेत)
//       const allSubjects = [];
//       meetings.forEach(m => {
//         (m.subjects || []).forEach(sub => {
//           allSubjects.push({ ...sub, meetingNumber: m.meetingNumber });
//         });
//       });

//       const approved     = allSubjects.filter(s => s.decisionInMeeting === "Approved").length;
//       const rejected     = allSubjects.filter(s => s.decisionInMeeting === "Rejected").length;
//       const onHold       = allSubjects.filter(s => s.decisionInMeeting === "On-Hold").length;
//       const postponed    = allSubjects.filter(s => s.decisionInMeeting === "Postponed").length;
//       const notConducted = allSubjects.filter(s => s.decisionInMeeting === "Not Conducted").length;
//       const actionTaken  = allSubjects.filter(s => s.actionTaken && s.actionTaken !== "").length;

//       const subjectsByType = {
//         General:        allSubjects.filter(s => s.subjectType === "General").length,
//         Administrative: allSubjects.filter(s => s.subjectType === "Administrative and Financial Approval").length,
//         Contract:       allSubjects.filter(s => s.subjectType === "Contract Approval").length,
//       };

//       const actionProgress = {};
//       allSubjects.forEach(s => {
//         if (s.actionTaken) actionProgress[s.actionTaken] = (actionProgress[s.actionTaken] || 0) + 1;
//       });

//       // Department wise stats — all depts for full access, only own dept for dept user
//       const departmentStats = {};
//       allSubjects.forEach(s => {
//         (s.tagTo || []).forEach(dept => {
//           // For dept users, only include their own department
//           if (!seesAllDepts && dept !== userDept) return;
//           if (!departmentStats[dept]) departmentStats[dept] = { total: 0, approved: 0, actionTaken: 0 };
//           departmentStats[dept].total++;
//           if (s.decisionInMeeting === "Approved") departmentStats[dept].approved++;
//           if (s.actionTaken) departmentStats[dept].actionTaken++;
//         });
//       });

//       setMeetingStats({
//         totalMeetings: meetings.length,
//         totalSubjects: allSubjects.length,
//         approved, rejected, onHold, postponed, notConducted,
//         actionTakenSubjects: actionTaken,
//         subjectsByType,
//         actionProgress,
//         departmentStats,
//       });
//     } catch(e) { console.error(e); }
//     finally { setMeetingLoading(false); }
//   }, [isFullAccess, isCouncillor, seesAllDepts, userDept]);

//   useEffect(() => {
//     fetchDashboard(); fetchAppointments(); fetchMayorSlots(); fetchMeetingStats();
//     const iv = setInterval(() => setPeopleOnline(Math.floor(12+Math.random()*8)), 4000);
//     setPeopleOnline(Math.floor(12+Math.random()*8));
//     return () => clearInterval(iv);
//   }, [fetchDashboard, fetchAppointments, fetchMayorSlots, fetchMeetingStats]);

//   const resRate = stats.total > 0 ? Math.round((stats.resolved/stats.total)*100) : 0;
//   const statusColor = {"Pending":"#A8741F","Resolved":"#2E7D4F","In Progress":P.tealDark,"Rejected":"#C0392B"};
//   const statusBg    = {"Pending":"#FBF0DC","Resolved":"#E4F3E8","In Progress":"#DDF3F7","Rejected":"#FBE7E4"};
//   const filteredRecent = activeTab==="all" ? recent : recent.filter(r=>r.status===activeTab);

//   const subjectTypeRows = [
//     { l: "General",                    v: meetingStats.subjectsByType.General,        c: P.teal,     icon: "📄" },
//     { l: "Administrative & Financial", v: meetingStats.subjectsByType.Administrative,  c: P.goldDeep, icon: "💰" },
//     { l: "Contract Approval",          v: meetingStats.subjectsByType.Contract,        c: P.sage,     icon: "📝" },
//   ];
//   const renderSubjectTypeRows = () => subjectTypeRows.map(({ l, v, c, icon }, idx) => (
//     <div key={l} style={{ display: "flex", alignItems: "center", gap: 12,
//       padding: "12px 0", borderBottom: idx < subjectTypeRows.length - 1 ? `1px solid ${P.border}` : "none" }}>
//       <div style={{ width: 44, height: 44, borderRadius: 12,
//         background: `${c}14`, border: `1px solid ${c}33`,
//         display: "flex", alignItems: "center", justifyContent: "center",
//         fontSize: 19, flexShrink: 0 }}>{icon}</div>
//       <div style={{ flex: 1, minWidth: 0 }}>
//         <div style={{ fontSize: 12.5, fontWeight: 500, color: P.muted,
//           overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginBottom: 1 }}>{l}</div>
//         <div style={{ fontFamily: HF, fontSize: 24, fontWeight: 700, color: c, lineHeight: 1.1 }}>{v}</div>
//       </div>
//       <div style={{ fontSize: 11, fontWeight: 600, color: c,
//         background: `${c}16`, padding: "3px 10px", borderRadius: 20, flexShrink: 0 }}>
//         {meetingStats.totalSubjects > 0 ? Math.round((v / meetingStats.totalSubjects) * 100) : 0}%
//       </div>
//     </div>
//   ));

//   const greet = new Date().getHours()<12?"morning":new Date().getHours()<17?"afternoon":"evening";
//   const councillorTypes = meetingScope?.meetingTypes
//     || [...(authUser?.isGeneralBodyMember !== false ? ["General Body"] : []), ...(authUser?.isStandingCommitteeMember ? ["Standing Committee"] : [])];
//   const councillorWard = meetingScope?.wardNo || authUser?.wardNo;
//   const badgeText = isCouncillor
//     ? `${meetingScope?.designation || authUser?.designation || "corporator"}${councillorWard ? ` · Ward ${councillorWard}` : ""} · ${councillorTypes.join(" + ") || "No committee"}`
//     : (!isFullAccess && userDept) ? userDept : null;
//   const deptBadge = (fs=11) => badgeText ? (
//     <span style={{marginLeft:8,background:`${P.teal}18`,color:P.tealDark,border:`1px solid ${P.teal}33`,borderRadius:20,padding:"2px 11px",fontSize:fs,fontWeight:600}}>{badgeText}</span>
//   ) : null;
//   const progressScopeLabel = isFullAccess ? "All meetings · progress = subjects with action taken"
//     : isCouncillor ? (councillorTypes.length ? `${councillorTypes.join(" + ")} meetings · all departments` : "General Body / Standing Committee सदस्य नाही")
//     : userDept ? `Subjects tagged to ${userDept}`
//     : "Meetings assigned to you";

//   return (
//     <div style={{minHeight:"100vh",position:"relative",overflow:"hidden",
//       background:"linear-gradient(to bottom,#F1F7F8,#FFFFFF 60%,#EAF5F7)",
//       fontFamily:"Inter,'Segoe UI',sans-serif",color:P.text}}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap');
//         @keyframes fadeUp {from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
//         @keyframes popIn  {from{opacity:0;transform:scale(.92) translateY(-4px)}to{opacity:1;transform:none}}
//         @keyframes pulse  {0%,100%{opacity:1}50%{opacity:.35}}
//         @keyframes spin   {to{transform:rotate(360deg)}}
//         @keyframes shimmer{to{background-position:-200% 0}}
//         .dc{animation:fadeUp .5s ease both;}
//         .hov{transition:transform .3s ease, box-shadow .3s ease;}
//         .hov:hover{transform:translateY(-3px);}
//         .pnl{transition:transform .3s ease, box-shadow .3s ease;}
//         .pnl:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(18,63,75,.12)!important;}
//         .pbtn:hover{transform:translateY(-1px);filter:brightness(1.07);}
//         .pbtn:active,.gbtn:active{opacity:.9;}
//         .gbtn:hover{border-color:${P.teal}!important;color:${P.tealDark}!important;}
//         .tbl-row:hover,.tbl-row:hover td{background:${P.soft}!important;cursor:pointer;}
//         .sk{height:10px;border-radius:6px;margin:8px auto;background:linear-gradient(90deg,${P.head},${P.border},${P.head});background-size:200% 100%;animation:shimmer 1.4s infinite;}
//         button:focus-visible,input:focus-visible{outline:2px solid ${P.teal};outline-offset:2px;}
//         input:focus{border-color:${P.teal}!important;box-shadow:0 0 0 4px rgba(8,126,145,.15);}
//         ::-webkit-scrollbar{width:6px;height:6px;}
//         ::-webkit-scrollbar-track{background:transparent;}
//         ::-webkit-scrollbar-thumb{background:#cfe2e7;border-radius:99px;}
//         *{box-sizing:border-box;}
//         html{scroll-behavior:smooth;}
//         .dash-grid-4    {display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
//         .dash-grid-cal  {display:grid;grid-template-columns:2.3fr 1fr;gap:18px;}
//         .dash-grid-track{display:grid;grid-template-columns:1fr 2.3fr;gap:18px;}
//         .mtg-grid-3     {display:grid;grid-template-columns:1fr 1fr 1fr;gap:18px;}
//         .mp-row:hover   {background:${P.soft};border-radius:14px;}
//         @media(max-width:800px){ .mp-row{grid-template-columns:1fr!important;gap:10px!important;} .mp-row > div:last-child{justify-content:flex-start!important;} }
//         @media(max-width:1100px){
//           .dash-grid-cal  {grid-template-columns:1fr!important;}
//           .dash-grid-track{grid-template-columns:1fr!important;}
//           .mtg-grid-3     {grid-template-columns:1fr 1fr!important;}
//         }
//         @media(max-width:800px){
//           .dash-grid-4{grid-template-columns:repeat(2,1fr)!important;gap:12px!important;}
//           .mtg-grid-3 {grid-template-columns:1fr!important;}
//         }
//         @media(max-width:480px){
//           .dash-grid-4{grid-template-columns:1fr!important;}
//           .dash-pad{padding:12px 10px!important;}
//         }
//         @media (prefers-reduced-motion: reduce){
//           *,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important;}
//         }
//       `}</style>

//       {/* soft glow blobs */}
//       <div aria-hidden="true" style={{position:"absolute",width:340,height:340,left:-120,top:-100,borderRadius:"50%",background:"rgba(39,174,192,.14)",filter:"blur(80px)",pointerEvents:"none"}}/>
//       <div aria-hidden="true" style={{position:"absolute",width:300,height:300,right:-100,bottom:80,borderRadius:"50%",background:"rgba(246,160,33,.10)",filter:"blur(80px)",pointerEvents:"none"}}/>

//       <div className="dash-pad" style={{padding:"22px 26px",maxWidth:1440,margin:"0 auto",position:"relative",zIndex:1}}>

//         {/* Accent bar */}
//         <div style={{height:2,background:`linear-gradient(90deg,${P.teal},${P.gold})`,borderRadius:99,marginBottom:22}}/>

//         {/* Page header */}
//         <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:24,flexWrap:"wrap",gap:10}}>
//           <div className="dc">
//             <div style={eyebrow}>{eyebrowDash}Analytic overview</div>
//             <h2 style={{margin:"6px 0 0",fontFamily:HF,fontSize:30,fontWeight:700,color:P.ink,lineHeight:1.2}}>
//               Good {greet}, <span style={{color:P.teal}}>{user?.fullName?.split(" ")[0]||"Admin"}</span>
//             </h2>
//             <div style={{width:64,height:4,borderRadius:4,background:P.gold,margin:"10px 0 6px"}}/>
//             <p style={{margin:0,fontSize:14,color:P.muted,lineHeight:1.6}}>
//               Here's where your meetings and applications stand today.
//               {deptBadge(11)}
//             </p>
//           </div>
//           <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
//             <button className="gbtn" onClick={()=>{fetchDashboard();fetchAppointments();fetchMayorSlots();fetchMeetingStats();}}
//               style={ghostBtn}>
//               ↻ Refresh
//             </button>
//             {/* {isFullAccess && (
//               <div style={{display:"flex",alignItems:"center",gap:6,background:P.white,border:`1px solid ${P.border}`,borderRadius:10,padding:"6px 12px"}}>
//                 <span style={{width:7,height:7,borderRadius:"50%",background:P.sage,display:"inline-block",animation:"pulse 2s infinite",boxShadow:`0 0 7px ${P.sage}`}}/>
//                 <span style={{fontSize:11,fontWeight:700,color:P.tealDark}}>{peopleOnline} Online</span>
//               </div>
//             )} */}
//             <div style={{...ghostBtn,cursor:"default"}}>This year ▾</div>
//           </div>
//         </div>

//         {loading ? (
//           <div style={{textAlign:"center",padding:80,color:P.teal,fontWeight:600,fontSize:14}}>Loading dashboard…</div>
//         ) : (
//           <>
//             {/* ════════════════════════════════════════════════════════════════
//                 MEETING ANALYTICS SECTION
//             ════════════════════════════════════════════════════════════════ */}
//             {!meetingLoading && (
//               <div className="dc" style={{ animationDelay: "0s", marginBottom: 20 }}>

//                 {/* Section header */}
//                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18, flexWrap: "wrap", gap: 10 }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
//                     <span style={{ width: 46, height: 46, borderRadius: 14, background: P.white, border: `1px solid ${P.border}`,
//                       boxShadow: "0 1px 2px rgba(18,63,75,.04), 0 6px 16px rgba(18,63,75,.07)", display: "inline-flex", alignItems: "center", justifyContent: "center",
//                       fontSize: 22, flexShrink: 0 }}>🏛</span>
//                     <div style={{ minWidth: 0 }}>
//                       <div style={{ fontFamily: HF, fontSize: 20, fontWeight: 700, color: P.ink }}>
//                         Meeting <span style={{color:P.teal}}>Proceedings</span> Analytics
//                       </div>
//                       <p style={{ margin: "2px 0 0", fontSize: 13, color: P.muted }}>
//                         Sabha Kamkaj — Subject wise progress tracking
//                         {deptBadge(10.5)}
//                       </p>
//                     </div>
//                   </div>
//                   <button className="pbtn" onClick={() => navigate("/meetings")} style={pillBtn(P.teal, P.cyan)}>
//                     View Meetings →
//                   </button>
//                 </div>

//                 {/* Top 4 Meeting stat cards */}
//                 <div className="dash-grid-4" style={{ marginBottom: 18 }}>
//                   {[
//                     { label: "TOTAL MEETINGS",  value: meetingStats.totalMeetings,      from: P.card1From, to: P.card1To,   spark: [2,3,1,4,2,5,3] },
//                     { label: "TOTAL SUBJECTS",  value: meetingStats.totalSubjects,       from: P.card2From, to: P.card2To,   spark: [5,8,6,10,7,12,9] },
//                     { label: "APPROVED",        value: meetingStats.approved,            from: P.card3From, to: P.card3To,   spark: [3,5,4,7,5,9,7] },
//                     { label: "ACTION TAKEN",    value: meetingStats.actionTakenSubjects, from: P.card5From, to: P.card5To,   spark: [1,2,2,4,3,5,4] },
//                   ].map((c, i) => (
//                     <StatCard key={i} label={c.label} value={c.value} from={c.from} to={c.to} spark={c.spark} delay={i*.06}/>
//                   ))}
//                 </div>

//                 {/* ── Meeting-wise subject progress (सर्व roles — role नुसार filter) ── */}
//                 <MeetingProgressPanel
//                   meetings={meetingList}
//                   scopeLabel={progressScopeLabel}
//                   onOpen={m => navigate(`/proceedingsmeeting/${m._id}`)}
//                 />

//                 {/* ── FULL ACCESS + नगरसेवक: Decision Breakdown + Action Progress + Subject Type ── */}
//                 {seesAllDepts ? (
//                   <div className="mtg-grid-3" style={{ marginBottom: 18 }}>

//                     {/* Decision Breakdown */}
//                     <div className="pnl" style={{ ...panel, padding: "22px" }}>
//                       <div style={{ marginBottom: 18 }}><PanelTitle icon="📊">Decision Breakdown</PanelTitle></div>
//                       {[
//                         { l: "Approved",      v: meetingStats.approved,      c: P.sage },
//                         { l: "Rejected",      v: meetingStats.rejected,      c: P.red },
//                         { l: "On-Hold",       v: meetingStats.onHold,        c: P.gold },
//                         { l: "Postponed",     v: meetingStats.postponed,     c: P.cyan },
//                         { l: "Not Conducted", v: meetingStats.notConducted,  c: P.teal },
//                       ].map(({ l, v, c }) => {
//                         const pct = meetingStats.totalSubjects > 0 ? Math.round((v / meetingStats.totalSubjects) * 100) : 0;
//                         return (
//                           <div key={l} style={{ marginBottom: 14 }}>
//                             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
//                               <span style={{ fontSize: 13.5, fontWeight: 500, color: P.ink }}>{l}</span>
//                               <span style={{ fontSize: 13.5, fontWeight: 700, color: c }}>
//                                 {v} <span style={{ color: P.muted, fontWeight: 500, fontSize: 12 }}>({pct}%)</span>
//                               </span>
//                             </div>
//                             <ProgressBar value={v} max={meetingStats.totalSubjects} color={c}/>
//                           </div>
//                         );
//                       })}
//                     </div>

//                     {/* Action Taken Progress */}
//                     <div className="pnl" style={{ ...panel, padding: "22px" }}>
//                       <div style={{ marginBottom: 18 }}><PanelTitle icon="⚡" color={P.gold}>Action Taken Progress</PanelTitle></div>
//                       {Object.keys(meetingStats.actionProgress).length === 0 ? (
//                         <Empty icon="⚡" title="No action taken yet" hint="Open a subject to record its next step."/>
//                       ) : (
//                         Object.entries(meetingStats.actionProgress)
//                           .sort((a, b) => b[1] - a[1])
//                           .map(([action, count], i) => {
//                             const cols = [P.teal, P.gold, P.sage, P.cyan, P.goldDeep, P.tealDark];
//                             const c = cols[i % cols.length];
//                             return (
//                               <div key={action} style={{ marginBottom: 14 }}>
//                                 <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
//                                   <span style={{ fontSize: 13.5, fontWeight: 500, color: P.ink,
//                                     overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 180 }}>{action}</span>
//                                   <span style={{ fontSize: 13.5, fontWeight: 700, color: c, flexShrink: 0, marginLeft: 6 }}>{count}</span>
//                                 </div>
//                                 <ProgressBar value={count} max={meetingStats.totalSubjects} color={c}/>
//                               </div>
//                             );
//                           })
//                       )}
//                     </div>

//                     {/* Subject Type */}
//                     <div className="pnl" style={{ ...panel, padding: "22px" }}>
//                       <div style={{ marginBottom: 6 }}><PanelTitle icon="📋">Subject Type Breakdown</PanelTitle></div>
//                       {renderSubjectTypeRows()}
//                     </div>
//                   </div>
//                 ) : (
//                   /* ── DEPT USER: Only Subject Type Breakdown ── */
//                   <div style={{ marginBottom: 18 }}>
//                     <div className="pnl" style={{ ...panel, padding: "22px", maxWidth: 480 }}>
//                       <div style={{ marginBottom: 6 }}><PanelTitle icon="📋">Subject Type Breakdown</PanelTitle></div>
//                       {renderSubjectTypeRows()}
//                     </div>
//                   </div>
//                 )}

//                 {/* ── Department-wise table (full access + नगरसेवक) ── */}
//                 {seesAllDepts && Object.keys(meetingStats.departmentStats).length > 0 && (
//                   <div className="pnl" style={{ ...panel, padding: "22px" }}>
//                     <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, gap: 8, flexWrap: "wrap" }}>
//                       <PanelTitle icon="🏢" color={P.gold}>Department-wise Subject Progress</PanelTitle>
//                       <span style={{ fontSize: 12.5, color: P.muted, fontWeight: 500 }}>
//                         {Object.keys(meetingStats.departmentStats).length} departments
//                       </span>
//                     </div>
//                     <div style={{ overflowX: "auto", borderRadius: 12 }}>
//                       <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
//                         <thead>
//                           <tr>
//                             {["Department", "Total Subjects", "Approved", "Action Taken", "Completion"].map((h, hi, arr) => (
//                               <th key={h} style={{ ...thStyle,
//                                 borderTopLeftRadius: hi === 0 ? 12 : 0, borderBottomLeftRadius: hi === 0 ? 12 : 0,
//                                 borderTopRightRadius: hi === arr.length - 1 ? 12 : 0, borderBottomRightRadius: hi === arr.length - 1 ? 12 : 0 }}>{h}</th>
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {Object.entries(meetingStats.departmentStats)
//                             .sort((a, b) => b[1].total - a[1].total)
//                             .map(([dept, dStats], i) => {
//                               const cols = [P.teal, P.gold, P.sage, P.cyan, P.goldDeep, P.tealDark];
//                               const c = cols[i % cols.length];
//                               const completionPct = dStats.total > 0 ? Math.round((dStats.actionTaken / dStats.total) * 100) : 0;
//                               return (
//                                 <tr key={dept} style={{ borderBottom: `1px solid ${P.border}`, transition: "background .2s" }}
//                                   onMouseEnter={e => e.currentTarget.style.background = P.soft}
//                                   onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
//                                   <td style={{ padding: "14px" }}>
//                                     <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
//                                       <div style={{ width: 9, height: 9, borderRadius: "50%", background: c, flexShrink: 0 }}/>
//                                       <span style={{ fontWeight: 600, color: P.ink, fontSize: 13.5 }}>{dept}</span>
//                                     </div>
//                                   </td>
//                                   <td style={{ padding: "14px" }}>
//                                     <span style={{ fontWeight: 700, color: c, fontSize: 14 }}>{dStats.total}</span>
//                                   </td>
//                                   <td style={{ padding: "14px" }}>
//                                     <span style={{ display: "inline-flex", alignItems: "center", gap: 5,
//                                       background: "#E4F3E8", color: "#2E7D4F",
//                                       padding: "3px 11px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>
//                                       ✓ {dStats.approved}
//                                     </span>
//                                   </td>
//                                   <td style={{ padding: "14px" }}>
//                                     <span style={{ display: "inline-flex", alignItems: "center", gap: 5,
//                                       background: "#DDF3F7", color: P.tealDark,
//                                       padding: "3px 11px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>
//                                       ⚡ {dStats.actionTaken}
//                                     </span>
//                                   </td>
//                                   <td style={{ padding: "14px", minWidth: 160 }}>
//                                     <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//                                       <div style={{ flex: 1, height: 8, borderRadius: 99, background: P.border, overflow: "hidden" }}>
//                                         <div style={{ height: "100%", width: `${completionPct}%`, background: `linear-gradient(90deg,${P.teal},${P.cyan})`, borderRadius: 99, transition: "width 1s ease" }}/>
//                                       </div>
//                                       <span style={{ fontSize: 12.5, fontWeight: 700, color: P.teal, minWidth: 36, textAlign: "right" }}>{completionPct}%</span>
//                                     </div>
//                                   </td>
//                                 </tr>
//                               );
//                             })}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 )}

//                 {/* Dept user: own department card */}
//                 {!seesAllDepts && userDept && meetingStats.departmentStats[userDept] && (
//                   <div className="pnl" style={{ ...panel, padding: "22px" }}>
//                     <div style={{ marginBottom: 16 }}>
//                       <PanelTitle icon="🏢" color={P.gold}>Your Department Progress</PanelTitle>
//                     </div>
//                     {(() => {
//                       const dStats = meetingStats.departmentStats[userDept];
//                       const completionPct = dStats.total > 0 ? Math.round((dStats.actionTaken / dStats.total) * 100) : 0;
//                       return (
//                         <>
//                           <div style={{ marginBottom: 14, padding: "10px 14px", background: `${P.teal}10`,
//                             border: `1px solid ${P.teal}30`, borderRadius: 12,
//                             fontSize: 13.5, fontWeight: 600, color: P.tealDark }}>
//                             {userDept}
//                           </div>
//                           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 16 }}>
//                             {[
//                               { l: "Total Subjects",  v: dStats.total,       c: P.teal,     icon: "📋" },
//                               { l: "Approved",        v: dStats.approved,    c: P.sage,     icon: "✅" },
//                               { l: "Action Taken",    v: dStats.actionTaken, c: P.goldDeep, icon: "⚡" },
//                             ].map(({ l, v, c, icon }) => (
//                               <div key={l} style={{ textAlign: "center", padding: "16px 10px",
//                                 background: `${c}10`, border: `1px solid ${c}30`, borderRadius: 14 }}>
//                                 <div style={{ fontSize: 22, marginBottom: 5 }}>{icon}</div>
//                                 <div style={{ fontFamily: HF, fontSize: 24, fontWeight: 700, color: c }}>{v}</div>
//                                 <div style={{ fontSize: 10.5, fontWeight: 600, color: P.muted, marginTop: 3,
//                                   textTransform: "uppercase", letterSpacing: .6 }}>{l}</div>
//                               </div>
//                             ))}
//                           </div>
//                           <div>
//                             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
//                               <span style={{ fontSize: 13.5, fontWeight: 500, color: P.ink }}>Completion Rate</span>
//                               <span style={{ fontSize: 13.5, fontWeight: 700, color: P.teal }}>{completionPct}%</span>
//                             </div>
//                             <ProgressBar value={dStats.actionTaken} max={dStats.total} color={P.teal} height={8}/>
//                           </div>
//                         </>
//                       );
//                     })()}
//                   </div>
//                 )}

//                 {/* Dept user: no meeting data */}
//                 {!seesAllDepts && userDept && !meetingStats.departmentStats[userDept] && meetingStats.totalSubjects === 0 && (
//                   <div style={{ ...panel }}>
//                     <Empty icon="🏛" title="No meeting subjects assigned yet"
//                       hint={<>Subjects tagged to <strong>{userDept}</strong> will appear here.</>}/>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* ══════════════════════════════════════════════════════════════
//                 FULL ACCESS ONLY: Calendar + Status panel
//             ══════════════════════════════════════════════════════════════ */}
//             {isFullAccess && (
//               <div className="dash-grid-cal" style={{marginBottom:20}}>
//                 <CalendarPanel appointments={appointments} mayorSlots={mayorSlots} loading={apptLoading}/>

//                 {/* Status Panel */}
//                 <div className="dc" style={{animationDelay:".37s",...panel,padding:"20px",display:"flex",flexDirection:"column"}}>
//                   <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
//                     <h3 style={{margin:0,fontFamily:HF,fontSize:18,fontWeight:700,color:P.ink}}>Status</h3>
//                     <div style={{...ghostBtn,cursor:"default",padding:"4px 12px",fontSize:11.5}}>Today ▾</div>
//                   </div>
//                   <div style={{display:"flex",justifyContent:"center",margin:"2px 0 14px"}}>
//                     <Donut pct={resRate}/>
//                   </div>
//                   <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:16}}>
//                     {[{l:"BOOKED",v:stats.total,c:P.teal},{l:"PROGRESS",v:stats.inProgress,c:P.goldDeep},{l:"PENDING",v:stats.pending,c:P.red}].map(({l,v,c})=>(
//                       <div key={l} style={{textAlign:"center",padding:"11px 4px",background:`${c}10`,borderRadius:12,border:`1px solid ${c}2e`}}>
//                         <div style={{fontFamily:HF,fontSize:20,fontWeight:700,color:c}}>{v}</div>
//                         <div style={{fontSize:9,fontWeight:600,color:P.muted,letterSpacing:.8,textTransform:"uppercase",marginTop:2}}>{l}</div>
//                       </div>
//                     ))}
//                   </div>

//                   <div style={{borderTop:`1px solid ${P.border}`,paddingTop:14,marginBottom:14}}>
//                     <div style={{fontFamily:HF,fontSize:14,fontWeight:600,color:P.ink,marginBottom:8}}>📅 Appointments</div>
//                     {[
//                       {l:"Total",       v:appointments.length,                                                         c:P.teal},
//                       {l:"Approved",    v:appointments.filter(a=>(a.status||"").toLowerCase()==="approved").length,    c:P.sage},
//                       {l:"Pending",     v:appointments.filter(a=>(a.status||"").toLowerCase()==="pending").length,     c:P.goldDeep},
//                       {l:"In Progress", v:appointments.filter(a=>(a.status||"").toLowerCase()==="in progress").length, c:P.cyan},
//                     ].map(({l,v,c})=>(
//                       <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"4px 0"}}>
//                         <span style={{display:"flex",alignItems:"center",gap:8,fontSize:12.5,color:P.ink2,fontWeight:500}}>
//                           <Dot c={c} s={8}/>{l}
//                         </span>
//                         <span style={{fontSize:13,fontWeight:700,color:c}}>{v}</span>
//                       </div>
//                     ))}
//                   </div>

//                   {mayorSlots.length>0&&(
//                     <div style={{borderTop:`1px solid ${P.border}`,paddingTop:12,marginBottom:14}}>
//                       <div style={{fontFamily:HF,fontSize:14,fontWeight:600,color:P.ink,marginBottom:6}}>🏛 Mayor Today</div>
//                       {mayorSlots.map((s,i)=>(
//                         <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"3px 0",fontSize:12.5,color:P.muted,fontWeight:500}}>
//                           <span>Slot {i+1}</span>
//                           <span style={{color:P.tealDark,fontWeight:600}}>{s.start} – {s.end}</span>
//                         </div>
//                       ))}
//                     </div>
//                   )}

//                   <div style={{borderTop:`1px solid ${P.border}`,paddingTop:14,marginTop:"auto"}}>
//                     <div style={{fontFamily:HF,fontSize:14,fontWeight:600,color:P.ink,marginBottom:10}}>📈 Weekly Trend</div>
//                     <MiniBar data={weeklyData} color={P.teal}/>
//                     <div style={{display:"flex",justifyContent:"space-between",marginTop:5,gap:6}}>
//                       {["M","T","W","T","F","S","S"].map((d,i)=>(
//                         <span key={i} style={{fontSize:10.5,color:P.muted,flex:1,textAlign:"center",fontWeight:500}}>{d}</span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* ══════════════════════════════════════════════════════════════
//                 FULL ACCESS ONLY: Tracking + Recent Applications
//             ══════════════════════════════════════════════════════════════ */}
//             {isFullAccess && (
//               <div className="dash-grid-track" style={{marginBottom:20}}>
//                 <div className="dc pnl" style={{animationDelay:".44s",...panel,padding:"22px"}}>
//                   <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}}>
//                     <h3 style={{margin:0,fontFamily:HF,fontSize:18,fontWeight:700,color:P.ink,display:"flex",alignItems:"center",gap:8}}><Dot c={P.gold}/>Tracking</h3>
//                     <div style={{...ghostBtn,cursor:"default",padding:"4px 12px",fontSize:11.5}}>This year ▾</div>
//                   </div>
//                   <div style={{display:"flex",justifyContent:"space-between",padding:"10px 14px",background:P.head,borderRadius:12,marginBottom:6}}>
//                     <span style={{fontFamily:HF,fontSize:11,fontWeight:700,color:P.ink,textTransform:"uppercase",letterSpacing:.8}}>Region</span>
//                     <span style={{fontFamily:HF,fontSize:11,fontWeight:700,color:P.ink,textTransform:"uppercase",letterSpacing:.8}}>Amount</span>
//                   </div>
//                   {Object.entries(talukaData).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([taluka,count],i)=>{
//                     const cols=[P.teal,P.gold,P.sage,P.cyan,P.goldDeep,P.tealDark];
//                     const c=cols[i%cols.length];
//                     return(
//                       <div key={taluka} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:`1px solid ${P.border}`}}>
//                         <div style={{display:"flex",alignItems:"center",gap:8}}>
//                           <Dot c={c}/>
//                           <span style={{fontSize:13.5,fontWeight:500,color:P.text}}>{taluka}</span>
//                         </div>
//                         <span style={{fontSize:13.5,fontWeight:700,color:c}}>{count}</span>
//                       </div>
//                     );
//                   })}
//                   {!Object.keys(talukaData).length && <Empty title="No regional data yet" hint="Counts appear once inward applications are tracked." skeleton/>}
//                 </div>

//                 <div className="dc pnl" style={{animationDelay:".51s",...panel,padding:"22px",display:"flex",flexDirection:"column"}}>
//                   <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,flexWrap:"wrap",gap:8}}>
//                     <div>
//                       <h3 style={{margin:0,fontFamily:HF,fontSize:18,fontWeight:700,color:P.ink,display:"flex",alignItems:"center",gap:8}}><Dot c={P.gold}/>Recent Applications</h3>
//                       <p style={{margin:"3px 0 0 16px",fontSize:12.5,color:P.muted}}>Latest inward complaints</p>
//                     </div>
//                     <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
//                       {["all","Pending","Resolved","In Progress"].map(tab=>(
//                         <button key={tab} onClick={()=>setActiveTab(tab)} style={{
//                           border:`1px solid ${activeTab===tab?"transparent":P.border}`,
//                           background:activeTab===tab?`linear-gradient(135deg,${P.teal},${P.cyan})`:P.white,
//                           color:activeTab===tab?"#fff":P.ink2,
//                           borderRadius:20,padding:"6px 14px",fontSize:12.5,fontWeight:600,cursor:"pointer",
//                           boxShadow:activeTab===tab?`0 4px 12px ${P.teal}47`:"none",transition:"all .2s"}}>
//                           {tab==="all"?"All":tab}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                   <div style={{overflowX:"auto"}}>
//                     <table style={{width:"100%",borderCollapse:"collapse",fontSize:12.5}}>
//                       <thead>
//                         <tr>
//                           {["Inward No","Applicant","Subject","Taluka","Department","Priority","Status","Date"].map((h,hi,arr)=>(
//                             <th key={h} style={{...thStyle,
//                               borderTopLeftRadius:hi===0?12:0,borderBottomLeftRadius:hi===0?12:0,
//                               borderTopRightRadius:hi===arr.length-1?12:0,borderBottomRightRadius:hi===arr.length-1?12:0}}>{h}</th>
//                           ))}
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {filteredRecent.length===0?(
//                           <tr><td colSpan={8}><Empty icon="▣" title="No applications yet" hint="New inward complaints will show up here." skeleton/></td></tr>
//                         ):filteredRecent.map((item,i)=>(
//                           <tr key={i} className="tbl-row" onClick={()=>navigate("/allapplication")} style={{borderBottom:`1px solid ${P.border}`,transition:"background .2s"}}>
//                             <td style={{padding:"11px 14px",color:P.teal,fontWeight:700,whiteSpace:"nowrap",fontFamily:"monospace",fontSize:11.5}}>{item.inwardNo||"—"}</td>
//                             <td style={{padding:"11px 14px",fontWeight:600,color:P.text}}>{item.fullName||"—"}</td>
//                             <td style={{padding:"11px 14px",color:P.muted,maxWidth:150,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.subject||"—"}</td>
//                             <td style={{padding:"11px 14px",color:P.muted}}>{item.taluka||"—"}</td>
//                             <td style={{padding:"11px 14px",color:P.muted,whiteSpace:"nowrap"}}>{item.mainDepartment||"—"}</td>
//                             <td style={{padding:"11px 14px"}}>
//                               <span style={{fontSize:10.5,fontWeight:600,padding:"3px 10px",borderRadius:20,
//                                 background:item.priority==="Emergency"?"#FBE7E4":item.priority==="Urgent"?"#FBF0DC":"#E4F3E8",
//                                 color:item.priority==="Emergency"?"#C0392B":item.priority==="Urgent"?"#A8741F":"#2E7D4F"}}>
//                                 {item.priority||"Normal"}
//                               </span>
//                             </td>
//                             <td style={{padding:"11px 14px"}}>
//                               <span style={{fontSize:10.5,fontWeight:600,padding:"3px 10px",borderRadius:20,background:statusBg[item.status]||`${P.border}`,color:statusColor[item.status]||P.muted}}>
//                                 {item.status||"—"}
//                               </span>
//                             </td>
//                             <td style={{padding:"11px 14px",color:P.muted,whiteSpace:"nowrap",fontSize:11.5}}>
//                               {item.submissionDate||(item.createdAt?new Date(item.createdAt).toLocaleDateString("en-IN"):"—")}
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                   <div style={{marginTop:"auto",paddingTop:16,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
//                     <span style={{fontSize:12.5,color:P.muted}}>Showing {filteredRecent.length} of {stats.total}</span>
//                     <div style={{display:"flex",gap:10}}>
//                       <button className="pbtn" onClick={()=>navigate("/allapplication")} style={pillBtn(P.teal,P.cyan)}>All Applications →</button>
//                       <button className="pbtn" onClick={()=>navigate("/applicationcitizens")} style={{...pillBtn(P.gold,P.gold),color:"#3A2600",boxShadow:`0 6px 16px ${P.gold}4d`}}>Citizen Appts →</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Footer */}
//             <div style={{textAlign:"center",color:P.muted,fontSize:12,padding:"20px 0 6px"}}>
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

// ── Design tokens (visual only) ─────────────────────────────────────────────
const P = {
  teal:"#087E91", tealDeep:"#0A93A8", tealDark:"#0A6B7B", cyan:"#27AEC0",
  gold:"#F6A021", goldDeep:"#E08A12", sage:"#4CAF50", cream:"#FDF3DC",
  card1From:"#0B8CA0", card1To:"#27AEC0",
  card2From:"#F08A00", card2To:"#F6B13A",
  card3From:"#3B9B40", card3To:"#66BB6A",
  card4From:"#f6e6b8", card4To:"#e8c87e",
  card5From:"#087E91", card5To:"#27AEC0",
  bg:"#F1F7F8", white:"#ffffff", text:"#123F4B", ink:"#123F4B", ink2:"#2C5F6C",
  muted:"#5F7C88", border:"#E3EEF0", soft:"#F6FBFC", head:"#E8F4F6", red:"#D9534F",
};
const HF = "Poppins,Inter,'Segoe UI',sans-serif";
const ACCENT = [P.teal, P.gold, P.sage, P.tealDeep, P.goldDeep, P.tealDark, P.gold, P.teal];

const panel = {
  background:P.white, borderRadius:16, border:`1px solid ${P.border}`,
  boxShadow:"0 1px 2px rgba(18,63,75,.04), 0 8px 24px rgba(18,63,75,.06)",
};
const thStyle = {
  padding:"12px 14px", textAlign:"left", color:P.ink, fontWeight:700, fontSize:11,
  whiteSpace:"nowrap", letterSpacing:.8, textTransform:"uppercase", background:P.head, fontFamily:HF,
};
const pillBtn = (from, to) => ({
  background:`linear-gradient(135deg,${from},${to})`, color:"#fff", border:"none",
  borderRadius:12, padding:"10px 18px", fontSize:13, fontWeight:600, cursor:"pointer",
  boxShadow:`0 6px 16px ${from}47`, transition:"transform .2s, box-shadow .2s, filter .2s",
});
const ghostBtn = {
  background:P.white, border:`1px solid ${P.border}`, borderRadius:12, padding:"9px 16px",
  fontSize:13, fontWeight:600, color:P.ink, cursor:"pointer",
  boxShadow:"0 1px 2px rgba(18,63,75,.04), 0 4px 12px rgba(18,63,75,.05)",
  display:"inline-flex", alignItems:"center", gap:6, transition:"all .2s",
};
const eyebrow = {
  display:"flex", alignItems:"center", gap:8, fontSize:11, fontWeight:700,
  letterSpacing:".25em", textTransform:"uppercase", color:P.gold,
};
const eyebrowDash = <span style={{width:16,height:2,borderRadius:2,background:P.gold}}/>;
const Dot = ({ c, s=8 }) => <span style={{width:s,height:s,borderRadius:"50%",background:c,display:"inline-block",flexShrink:0}}/>;

function useCountUp(target, ms = 900) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const t = Number(target) || 0;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(t); return; }
    let raf, s;
    const f = ts => { s = s || ts; const p = Math.min((ts - s) / ms, 1); setN(Math.round(t * p)); if (p < 1) raf = requestAnimationFrame(f); };
    raf = requestAnimationFrame(f);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return n;
}

function PanelTitle({ icon, children, size=16, color=P.teal }) {
  return (
    <div style={{display:"flex",alignItems:"center",gap:12,minWidth:0}}>
      {icon && (
        <span style={{width:36,height:36,borderRadius:12,background:`${color}16`,border:`1px solid ${color}2e`,
          display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>{icon}</span>
      )}
      <span style={{fontSize:size,fontWeight:600,color:P.ink,fontFamily:HF}}>{children}</span>
    </div>
  );
}

const FULL_ACCESS_ROLES = ["Super Admin", "Guardian Minister", "Mayor", "Admin"];

const getAuthUser = () => {
  try { return JSON.parse(localStorage.getItem("authUser") || "{}"); } catch { return {}; }
};

const STATUS_CFG = {
  pending:      {bg:"#FBF0DC",color:"#A8741F",border:"#F3DDAE",dot:"#F6A021",label:"Pending"},
  approved:     {bg:"#E4F3E8",color:"#2E7D4F",border:"#BFE2CB",dot:"#4CAF50",label:"Approved"},
  rejected:     {bg:"#FBE7E4",color:"#C0392B",border:"#F3C4BD",dot:"#D9534F",label:"Rejected"},
  "in progress":{bg:"#DDF3F7",color:"#0A6B7B",border:"#B5E3EB",dot:"#27AEC0",label:"In Progress"},
  resolved:     {bg:"#E4F3E8",color:"#2E7D4F",border:"#BFE2CB",dot:"#4CAF50",label:"Resolved"},
};
const sc = s => STATUS_CFG[(s||"pending").toLowerCase()] || STATUS_CFG.pending;

function Sparkline({ color="#fff", data=[30,45,35,60,40,70,55], w=90, h=36 }) {
  const max=Math.max(...data),min=Math.min(...data);
  const pts=data.map((v,i)=>`${(i/(data.length-1))*w},${h-((v-min)/(max-min+1))*(h-4)-2}`).join(" ");
  const gid=`sg${color.replace('#','')}`;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{opacity:.9,display:"block"}}>
      <defs><linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity=".45"/>
        <stop offset="100%" stopColor={color} stopOpacity="0"/>
      </linearGradient></defs>
      <polygon points={`0,${h} ${pts} ${w},${h}`} fill={`url(#${gid})`}/>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function StatCard({ label, value, sub, from, to, spark, dark=false, delay=0 }) {
  const counted = useCountUp(typeof value === "number" ? value : 0);
  const shown = typeof value === "number" ? counted : value;
  return (
    <div className="dc hov" style={{animationDelay:`${delay}s`,borderRadius:18,
      background:`linear-gradient(135deg,${from},${to})`,padding:"20px 22px",
      boxShadow:`0 10px 24px ${from}47`,position:"relative",overflow:"hidden",minHeight:128}}>
      <div style={{position:"absolute",top:-50,right:-40,width:150,height:150,borderRadius:"50%",background:"rgba(255,255,255,0.16)"}}/>
      <div style={{position:"absolute",bottom:-40,left:-30,width:90,height:90,borderRadius:"50%",background:"rgba(255,255,255,0.10)"}}/>
      <div style={{position:"relative",zIndex:1}}>
        <div style={{fontSize:12,fontWeight:600,color:dark?"#7a5a1c":"rgba(255,255,255,.95)",letterSpacing:".12em",textTransform:"uppercase",marginBottom:4}}>{label}</div>
        <div style={{fontFamily:HF,fontSize:40,fontWeight:700,color:dark?P.tealDark:"#fff",lineHeight:1.15,fontVariantNumeric:"tabular-nums"}}>{shown}</div>
        {sub && <div style={{fontSize:11,color:dark?"#8a6830":"rgba(255,255,255,.85)",fontWeight:600,marginTop:4}}>{sub}</div>}
      </div>
      <div className="stat-spark" style={{position:"absolute",right:16,bottom:14,zIndex:1}}>
        <Sparkline color={dark?"#9a7828":"#fff"} data={spark} w={120} h={46}/>
      </div>
    </div>
  );
}

function Donut({ pct=0 }) {
  const r=50,c=2*Math.PI*r,dash=(pct/100)*c;
  return (
    <svg width={128} height={128} viewBox="0 0 128 128">
      <defs>
        <linearGradient id="donutGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={P.cyan}/>
          <stop offset="100%" stopColor={P.teal}/>
        </linearGradient>
      </defs>
      <circle cx={64} cy={64} r={r} fill="none" stroke={P.border} strokeWidth={13}/>
      <circle cx={64} cy={64} r={r} fill="none" stroke="url(#donutGrad)" strokeWidth={13}
        strokeDasharray={`${dash} ${c-dash}`} strokeLinecap="round" transform="rotate(-90 64 64)"
        style={{transition:"stroke-dasharray 1s ease"}}/>
      <text x={64} y={62} textAnchor="middle" fontSize={24} fontWeight={700} fill={P.ink} fontFamily={HF}>{pct}%</text>
      <text x={64} y={78} textAnchor="middle" fontSize={9.5} fill={P.muted} fontWeight={600} letterSpacing={1.2}>RESOLVED</text>
    </svg>
  );
}

function MiniBar({ data=[], color=P.teal }) {
  const max=Math.max(...data,1);
  return (
    <div style={{display:"flex",alignItems:"flex-end",gap:6,height:48}}>
      {data.map((v,i)=>(
        <div key={i} style={{flex:1,borderRadius:"6px 6px 2px 2px",minHeight:5,
          background:i===data.length-1?`linear-gradient(180deg,${P.cyan},${P.teal})`:"#BDE6EC",
          height:`${(v/max)*100}%`,transition:"height .6s ease"}}/>
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
      color:"#fff",fontSize:size*.34,fontWeight:700,flexShrink:0,
      border:"2px solid #fff",boxShadow:`0 2px 8px ${color}44`}}>
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

function CompactPopup({ appt, color, onClose, anchorRect }) {
  const cfg    = sc(appt.status);
  const popRef = useRef(null);
  const [pos, setPos] = useState({ top:0, left:0, ready:false });
  const POPUP_W = 252;

  const calcPos = useCallback(() => {
    if (!anchorRect || !popRef.current) return;
    const PH  = popRef.current.offsetHeight || 320;
    const vw  = window.innerWidth;
    const vh  = window.innerHeight;
    const pad = 10;
    let left = anchorRect.right + 8;
    if (left + POPUP_W > vw - pad) left = anchorRect.left - POPUP_W - 8;
    left = Math.max(pad, Math.min(left, vw - POPUP_W - pad));
    let top = anchorRect.top;
    if (top + PH > vh - pad) top = vh - PH - pad;
    top = Math.max(pad, top);
    setPos({ top, left, ready: true });
  }, [anchorRect]);

  useEffect(() => { const raf = requestAnimationFrame(calcPos); return () => cancelAnimationFrame(raf); }, [calcPos]);
  useEffect(() => { window.addEventListener("resize", calcPos); return () => window.removeEventListener("resize", calcPos); }, [calcPos]);
  useEffect(() => {
    const fn = e => { if (popRef.current && !popRef.current.contains(e.target)) onClose(); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, [onClose]);
  useEffect(() => {
    let t;
    const fn = () => { clearTimeout(t); t = setTimeout(onClose, 120); };
    window.addEventListener("scroll", fn, true);
    return () => { window.removeEventListener("scroll", fn, true); clearTimeout(t); };
  }, [onClose]);
  useEffect(() => {
    const fn = e => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <div ref={popRef} style={{
      position:"fixed", top:pos.top, left:pos.left,
      opacity:pos.ready?1:0, transition:"opacity .1s", zIndex:99999,
      width:POPUP_W, background:P.white, borderRadius:16,
      boxShadow:"0 12px 40px rgba(18,63,75,0.22), 0 2px 8px rgba(18,63,75,0.08)",
      border:`1px solid ${P.border}`, overflow:"hidden",
      animation:"popIn .15s cubic-bezier(.34,1.4,.64,1)",
    }}>
      <div style={{background:`linear-gradient(135deg,${color},${color}dd)`,padding:"12px 13px 11px",display:"flex",alignItems:"center",gap:10}}>
        <Av name={appt.fullName} size={36} color={color}/>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:13.5,fontWeight:700,color:"#fff",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{appt.fullName||"—"}</div>
          <div style={{fontSize:11,color:"rgba(255,255,255,0.85)",marginTop:2,fontWeight:500}}>{appt.slotTime||"—"}</div>
        </div>
        <button onClick={e=>{e.stopPropagation();onClose();}} aria-label="Close" style={{background:"rgba(255,255,255,0.22)",border:"none",borderRadius:"50%",width:24,height:24,cursor:"pointer",color:"#fff",fontSize:13,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,lineHeight:1}}>✕</button>
      </div>
      <div style={{padding:"11px 14px 12px"}}>
        <PRow icon="📱" val={appt.mobileNumber||"—"} bold/>
        <PRow icon="📍" val={`Ward: ${appt.ward||"—"}`}/>
        {appt.purpose && <PRow icon="🎯" val={appt.purpose.slice(0,44)+(appt.purpose.length>44?"…":"")}/>}
        <PRow icon="👥" val={`Visitors: ${appt.numberOfVisitors||1}`}/>
        {appt.preferredDate && <PRow icon="📅" val={new Date(appt.preferredDate+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}/>}
        <div style={{marginTop:8,marginBottom:8}}>
          <span style={{display:"inline-flex",alignItems:"center",gap:6,background:cfg.bg,color:cfg.color,border:`1px solid ${cfg.border}`,padding:"4px 12px",borderRadius:20,fontSize:11,fontWeight:700}}>
            <span style={{width:7,height:7,borderRadius:"50%",background:cfg.dot,display:"inline-block"}}/>
            {cfg.label}
          </span>
        </div>
        {(appt.tokenId||appt._id)&&(
          <div style={{fontSize:10,color:P.muted,fontWeight:500,fontFamily:"monospace",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
            Token: {appt.tokenId||appt._id?.slice(-12)||"—"}
          </div>
        )}
        <div style={{borderTop:`1px solid ${P.border}`,marginTop:10,paddingTop:8,display:"flex",justifyContent:"flex-end"}}>
          <span style={{fontSize:12,color:P.teal,fontWeight:700,cursor:"pointer"}}>View Details ↗</span>
        </div>
      </div>
    </div>
  );
}

function PRow({ icon, val, bold=false }) {
  return (
    <div style={{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6}}>
      <span style={{fontSize:13,flexShrink:0,marginTop:1}}>{icon}</span>
      <span style={{fontSize:12,fontWeight:bold?600:500,color:bold?P.text:P.muted,lineHeight:1.4}}>{val}</span>
    </div>
  );
}

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

  const baseShadow = isOpen ? `0 6px 18px ${color}40` : "0 1px 2px rgba(18,63,75,.04), 0 4px 10px rgba(18,63,75,.06)";

  return (
    <>
      <div ref={cardRef} onClick={handleClick} style={{
        background:isOpen?`${color}14`:P.white,
        border:`1px solid ${isOpen?color:color+"40"}`,
        borderLeft:`3px solid ${color}`,
        borderRadius:"4px 10px 10px 4px",
        padding:"6px 9px", cursor:"pointer", marginBottom:4,
        userSelect:"none", transition:"all .2s",
        boxShadow:baseShadow,
      }}
        onMouseEnter={e=>{e.currentTarget.style.background=`${color}12`;e.currentTarget.style.borderColor=color;e.currentTarget.style.transform="translateY(-1px)";e.currentTarget.style.boxShadow=`0 6px 18px ${color}40`;}}
        onMouseLeave={e=>{e.currentTarget.style.background=isOpen?`${color}14`:P.white;e.currentTarget.style.borderColor=isOpen?color:`${color}40`;e.currentTarget.style.borderLeftColor=color;e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow=baseShadow;}}
      >
        <div style={{display:"flex",alignItems:"center",gap:7}}>
          <Av name={appt.fullName} size={22} color={color}/>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:11.5,fontWeight:700,color:P.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{appt.fullName||"—"}</div>
            <div style={{fontSize:10,fontWeight:600,color:color,marginTop:1,display:"flex",alignItems:"center",gap:5}}>
              {appt.slotTime||"—"}
              <span style={{width:6,height:6,borderRadius:"50%",flexShrink:0,background:sc(appt.status).dot,display:"inline-block"}}/>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <CompactPopup appt={appt} color={color} onClose={handleClose} anchorRect={anchorRect}/>}
    </>
  );
}

function CalendarPanel({ appointments=[], mayorSlots=[], loading=false }) {
  const [view,     setView]     = useState("week");
  const [weekBase, setWeekBase] = useState(new Date());
  const [search,   setSearch]   = useState("");

  const weekDates = getWeekDates(weekBase);
  const today     = new Date();

  const filtered = appointments.filter(a => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (a.fullName||"").toLowerCase().includes(q)||(a.purpose||"").toLowerCase().includes(q)||(a.ward||"").toLowerCase().includes(q)||(a.mobileNumber||"").includes(q);
  });

  const ds = dt => `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,"0")}-${String(dt.getDate()).padStart(2,"0")}`;
  const appsForDate = dt => filtered.filter(a => (a.preferredDate||"").slice(0,10) === ds(dt));

  const todayStr = ds(today);
  const dayAppts = filtered.filter(a => (a.preferredDate||"").slice(0,10) === todayStr);
  const approvedCnt = filtered.filter(a => (a.status||"").toLowerCase() === "approved").length;
  const pendingCnt  = filtered.filter(a => (a.status||"").toLowerCase() === "pending").length;
  const monthLabel = weekDates[0].toLocaleDateString("en-IN",{month:"long",year:"numeric"});
  const hours = Array.from({length:10},(_,i) => 8+i);
  const fmtH = h => h<12?`${h} AM`:h===12?"12 PM":`${h-12} PM`;

  const navBtn = {background:P.white,border:`1px solid ${P.border}`,borderRadius:10,width:34,height:34,cursor:"pointer",fontSize:15,color:P.tealDark,fontWeight:700,boxShadow:"0 1px 4px rgba(18,63,75,0.06)",transition:"all .2s"};

  return (
    <div className="dc" style={{animationDelay:".3s",...panel,overflow:"hidden",display:"flex",flexDirection:"column"}}>
      <div className="cal-head" style={{padding:"20px 22px 12px"}}>
        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:14,gap:10,flexWrap:"wrap"}}>
          <div style={{display:"flex",alignItems:"center",gap:14,flexWrap:"wrap"}}>
            <div>
              <div style={eyebrow}>{eyebrowDash}Today's appointments</div>
              <p className="cal-date" style={{margin:"6px 0 0",fontFamily:HF,fontSize:22,color:P.ink,fontWeight:700}}>{today.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}</p>
            </div>
            <div style={{background:`linear-gradient(135deg,${P.teal},${P.cyan})`,color:"#fff",fontSize:12.5,fontWeight:600,padding:"7px 16px",borderRadius:22,boxShadow:`0 6px 16px ${P.teal}47`,whiteSpace:"nowrap"}}>{filtered.length} All Appointments</div>
          </div>
          <div className="cal-tools" style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
            <div className="cal-search-wrap" style={{position:"relative"}}>
              <span style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",fontSize:12,color:P.muted}}>🔍</span>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search…" aria-label="Search appointments" className="cal-search" style={{border:`1px solid transparent`,borderRadius:12,padding:"8px 12px 8px 30px",fontSize:12.5,color:P.text,outline:"none",background:"#EEF6F8",width:160,fontFamily:"inherit",transition:"all .2s"}}/>
            </div>
            <div style={{display:"flex",background:"#EEF6F8",borderRadius:12,padding:3}}>
              {["Day","Week"].map(v=>(
                <button key={v} onClick={()=>setView(v.toLowerCase())} style={{padding:"6px 16px",borderRadius:9,border:"none",background:view===v.toLowerCase()?P.white:"transparent",color:view===v.toLowerCase()?P.teal:P.muted,fontSize:12.5,fontWeight:600,cursor:"pointer",transition:"all .2s",boxShadow:view===v.toLowerCase()?"0 1px 4px rgba(18,63,75,.12)":"none"}}>{v}</button>
              ))}
            </div>
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
          {view==="week"?(
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <button className="gbtn" aria-label="Previous week" onClick={()=>{const d=new Date(weekBase);d.setDate(d.getDate()-7);setWeekBase(d);}} style={navBtn}>‹</button>
              <span style={{fontSize:13,fontWeight:600,color:P.ink,minWidth:140,textAlign:"center",border:`1px solid ${P.border}`,borderRadius:10,padding:"7px 12px",background:P.white}}>{monthLabel}</span>
              <button className="gbtn" aria-label="Next week" onClick={()=>{const d=new Date(weekBase);d.setDate(d.getDate()+7);setWeekBase(d);}} style={navBtn}>›</button>
            </div>
          ):<div/>}
          <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
            {[{l:"Today",v:dayAppts.length,c:P.teal},{l:"Approved",v:approvedCnt,c:P.sage},{l:"Pending",v:pendingCnt,c:P.goldDeep}].map(({l,v,c})=>(
              <span key={l} style={{background:`${c}14`,border:`1px solid ${c}40`,borderRadius:20,padding:"4px 12px",fontSize:11.5,fontWeight:600,color:c,whiteSpace:"nowrap"}}>{v} {l}</span>
            ))}
          </div>
        </div>
      </div>

      {mayorSlots.length>0&&(
        <div style={{display:"flex",gap:6,flexWrap:"wrap",padding:"8px 22px",background:`${P.cream}88`,borderTop:`1px solid ${P.border}`,borderBottom:`1px solid ${P.border}`}}>
          <span style={{fontSize:10,fontWeight:700,color:P.tealDark,textTransform:"uppercase",letterSpacing:.8,alignSelf:"center"}}>Mayor Available:</span>
          {mayorSlots.map((s,i)=>(
            <span key={i} style={{fontSize:10.5,fontWeight:600,color:P.tealDark,background:`${P.teal}1a`,border:`1px solid ${P.teal}33`,borderRadius:20,padding:"2px 10px"}}>{s.start} – {s.end}</span>
          ))}
        </div>
      )}

      {loading?(
        <div style={{textAlign:"center",padding:"48px 0",color:P.muted}}>
          <div style={{width:28,height:28,border:`3px solid ${P.border}`,borderTopColor:P.teal,borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 10px"}}/>
          Loading appointments…
        </div>
      ):view==="week"?(
        <div className="cal-body" style={{padding:"0 18px 12px"}}>
          <div style={{overflowX:"auto",overflowY:"auto",maxHeight:380,border:`1px solid ${P.border}`,borderRadius:14}}>
            <div className="cal-inner" style={{minWidth:560}}>
              <div style={{display:"grid",gridTemplateColumns:"56px repeat(7,1fr)",borderBottom:`1px solid ${P.border}`,background:P.soft,position:"sticky",top:0,zIndex:4}}>
                <div style={{borderRight:`1px solid ${P.border}`}}/>
                {weekDates.map((dt,i)=>{
                  const isToday=isSameDay(dt,today),cnt=appsForDate(dt).length;
                  return(
                    <div key={i} style={{padding:"9px 3px",textAlign:"center",borderRight:i<6?`1px solid ${P.border}`:undefined,background:isToday?`${P.cyan}1a`:"transparent"}}>
                      <div style={{fontSize:11,fontWeight:600,color:isToday?P.tealDark:P.muted,letterSpacing:.3}}>{DAYS_SHORT[i]}</div>
                      <div style={{width:32,height:32,borderRadius:"50%",margin:"3px auto 0",background:isToday?`linear-gradient(135deg,${P.teal},${P.cyan})`:"transparent",boxShadow:isToday?`0 4px 12px ${P.teal}55`:"none",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,fontFamily:HF,color:isToday?"#fff":P.ink}}>{dt.getDate()}</div>
                      {cnt>0&&<div style={{marginTop:3,fontSize:9,fontWeight:700,color:isToday?"#fff":P.tealDark,background:isToday?`${P.teal}cc`:`${P.teal}1c`,borderRadius:20,padding:"1px 6px",display:"inline-block"}}>{cnt}</div>}
                    </div>
                  );
                })}
              </div>
              {hours.map(hour=>(
                <div key={hour} style={{display:"grid",gridTemplateColumns:"56px repeat(7,1fr)",borderBottom:`1px solid ${P.border}`,minHeight:56}}>
                  <div style={{borderRight:`1px solid ${P.border}`,padding:"6px 7px 0 0",textAlign:"right",fontSize:10.5,fontWeight:600,color:P.muted,background:P.white,position:"sticky",left:0,zIndex:2}}>{fmtH(hour)}</div>
                  {weekDates.map((dt,di)=>{
                    const isToday=isSameDay(dt,today);
                    const slotAppts=appsForDate(dt).filter(a=>{const m=toMin(a.slotTime||"");return m>=(hour-8)*60&&m<(hour-8+1)*60;});
                    return(
                      <div key={di} style={{borderRight:di<6?`1px solid ${P.border}`:undefined,padding:"4px 4px",background:isToday?`${P.cyan}0d`:"transparent"}}>
                        {slotAppts.map((appt,ai)=>{const gIdx=filtered.indexOf(appt);return <ApptCard key={ai} appt={appt} color={ACCENT[gIdx%ACCENT.length]}/>;
                        })}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      ):(
        <div style={{overflowY:"auto",maxHeight:380}}>
          {dayAppts.length===0?(
            <div style={{textAlign:"center",padding:"44px 0",color:P.muted}}>
              <div style={{width:56,height:56,borderRadius:16,background:`${P.teal}14`,margin:"0 auto 10px",display:"grid",placeItems:"center",fontSize:26}}>📅</div>
              <div style={{fontWeight:600,fontSize:14,color:P.text,marginBottom:3}}>No appointments today</div>
              <div style={{fontSize:12.5}}>Switch to Week view to browse other days.</div>
            </div>
          ):(
            <div style={{padding:"8px 22px"}}>
              {hours.map(hour=>{
                const label=hour<12?`${hour}:00 AM`:hour===12?"12:00 PM":`${hour-12}:00 PM`;
                const hAppts=dayAppts.filter(a=>{const m=toMin(a.slotTime||"");return m>=(hour-8)*60&&m<(hour-8+1)*60;});
                return(
                  <div key={hour} style={{display:"flex",gap:12,marginBottom:hAppts.length?8:2}}>
                    <div style={{width:60,fontSize:10.5,fontWeight:hAppts.length?700:500,color:hAppts.length?P.teal:P.muted,textAlign:"right",paddingTop:5,flexShrink:0,fontFamily:"monospace"}}>{label}</div>
                    <div style={{flex:1,borderTop:hAppts.length?"none":`1px solid ${P.border}`,paddingTop:hAppts.length?0:5}}>
                      {hAppts.length>0&&(
                        <div style={{display:"grid",gridTemplateColumns:`repeat(${Math.min(hAppts.length,3)},1fr)`,gap:6}}>
                          {hAppts.map((appt,ai)=>{const gIdx=filtered.indexOf(appt);return <ApptCard key={ai} appt={appt} color={ACCENT[gIdx%ACCENT.length]}/>;
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

      <div style={{borderTop:`1px solid ${P.border}`,padding:"10px 22px",display:"flex",alignItems:"center",justifyContent:"space-between",background:P.white,flexWrap:"wrap",gap:4,marginTop:"auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:6}}>
          <span style={{width:8,height:8,borderRadius:"50%",background:P.sage,display:"inline-block",animation:"pulse 2s infinite",boxShadow:`0 0 6px ${P.sage}`}}/>
          <span style={{fontSize:11,color:P.muted,fontWeight:600}}>Live · 8:00 AM – 6:00 PM</span>
        </div>
        <span style={{fontSize:11,color:P.muted,fontWeight:500}}>{filtered.length} total appointments</span>
      </div>
    </div>
  );
}

function ProgressBar({ value, max, color, height=6 }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div style={{ height, borderRadius: 99, background: P.border, overflow: "hidden" }}>
      <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg,${color},${color}cc)`, borderRadius: 99, transition: "width 1s cubic-bezier(.2,.7,.2,1)" }}/>
    </div>
  );
}

// Empty state: icon tile + short direction (+ optional skeleton lines)
function Empty({ icon="◎", title, hint, skeleton=false }) {
  return (
    <div style={{textAlign:"center",padding:"30px 12px",color:P.muted}}>
      <div style={{width:52,height:52,borderRadius:14,background:`${P.teal}14`,margin:"0 auto 10px",display:"grid",placeItems:"center",fontSize:22}}>{icon}</div>
      <div style={{fontWeight:600,color:P.ink,fontSize:14}}>{title}</div>
      {hint && <div style={{fontSize:12.5,marginTop:2}}>{hint}</div>}
      {skeleton && <><div className="sk" style={{width:"60%"}}/><div className="sk" style={{width:"40%"}}/></>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Meeting-wise progress (प्रत्येक meeting चे subjects + progress bar)
// Progress = Action Taken झालेले subjects / एकूण subjects
// ─────────────────────────────────────────────────────────────────────────────
const DECISION_CFG = {
  "Approved":      { bg:"#E4F3E8", color:"#2E7D4F" },
  "Rejected":      { bg:"#FBE7E4", color:"#C0392B" },
  "On-Hold":       { bg:"#FBF0DC", color:"#A8741F" },
  "Postponed":     { bg:"#DDF3F7", color:"#0A6B7B" },
  "Not Conducted": { bg:"#EEF2F3", color:"#5F7C88" },
};
const MP_FILTERS = [
  { k:"all",      l:"All" },
  { k:"progress", l:"In Progress" },
  { k:"done",     l:"Completed" },
  { k:"notstart", l:"Not Started" },
];

function meetingProgress(m) {
  const subs     = m.subjects || [];
  const total    = subs.length;
  const action   = subs.filter(s => s.actionTaken && String(s.actionTaken).trim() !== "").length;
  const decided  = subs.filter(s => s.decisionInMeeting && !(s.actionTaken && String(s.actionTaken).trim() !== "")).length;
  const pending  = total - action - decided;
  const pct      = total > 0 ? Math.round((action / total) * 100) : 0;
  const status   = total === 0 ? "empty" : pct === 100 ? "done" : (action === 0 && decided === 0) ? "notstart" : "progress";
  return { total, action, decided, pending, pct, status };
}

const MP_STATUS = {
  done:     { l:"Completed",   bg:"#E4F3E8", color:"#2E7D4F" },
  progress: { l:"In Progress", bg:"#DDF3F7", color:"#0A6B7B" },
  notstart: { l:"Not Started", bg:"#FBF0DC", color:"#A8741F" },
  empty:    { l:"No Subjects", bg:"#EEF2F3", color:"#5F7C88" },
};

function StackedBar({ action, decided, total, height=10 }) {
  const w = v => total > 0 ? `${(v / total) * 100}%` : "0%";
  return (
    <div style={{ display:"flex", height, borderRadius:99, background:P.border, overflow:"hidden" }}>
      <div title={`Action taken: ${action}`} style={{ width:w(action), background:`linear-gradient(90deg,${P.teal},${P.cyan})`, transition:"width 1s cubic-bezier(.2,.7,.2,1)" }}/>
      <div title={`Decided, action pending: ${decided}`} style={{ width:w(decided), background:`${P.gold}cc`, transition:"width 1s cubic-bezier(.2,.7,.2,1)" }}/>
    </div>
  );
}

function MeetingProgressPanel({ meetings = [], scopeLabel, onOpen }) {
  const [filter,   setFilter]   = useState("all");
  const [search,   setSearch]   = useState("");
  const [openId,   setOpenId]   = useState(null);
  const [showAll,  setShowAll]  = useState(false);

  const rows = meetings.map(m => ({ m, p: meetingProgress(m) }));
  const counts = {
    all:      rows.length,
    progress: rows.filter(r => r.p.status === "progress").length,
    done:     rows.filter(r => r.p.status === "done").length,
    notstart: rows.filter(r => r.p.status === "notstart").length,
  };
  const q = search.trim().toLowerCase();
  const visible = rows
    .filter(r => filter === "all" || r.p.status === filter)
    .filter(r => !q
      || (r.m.meetingNumber || "").toLowerCase().includes(q)
      || (r.m.meetingType || "").toLowerCase().includes(q)
      || (r.m.subjects || []).some(s => (s.subjectName || "").toLowerCase().includes(q) || (s.subjectId || "").toLowerCase().includes(q)));
  const shown = showAll ? visible : visible.slice(0, 2);

  const fmtDate = d => d ? new Date(d).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" }) : "—";

  return (
    <div className="pnl" style={{ ...panel, padding:"22px", marginBottom:18 }}>
      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:10, flexWrap:"wrap", marginBottom:14 }}>
        <div>
          <PanelTitle icon="📈">Meeting-wise Subject Progress</PanelTitle>
          <p className="mp-sub" style={{ margin:"6px 0 0 48px", fontSize:12.5, color:P.muted }}>
            {scopeLabel || "Progress = subjects with action taken"}
          </p>
        </div>
        <div className="mp-search-wrap" style={{ position:"relative" }}>
          <span style={{ position:"absolute", left:10, top:"50%", transform:"translateY(-50%)", fontSize:12, color:P.muted }}>🔍</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Meeting / subject…" aria-label="Search meetings" className="mp-search"
            style={{ border:"1px solid transparent", borderRadius:12, padding:"8px 12px 8px 30px", fontSize:12.5, color:P.text, outline:"none", background:"#EEF6F8", width:200, fontFamily:"inherit" }}/>
        </div>
      </div>

      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:10, flexWrap:"wrap", marginBottom:14 }}>
        <div className="mp-chips" style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
          {MP_FILTERS.map(({ k, l }) => (
            <button key={k} onClick={() => { setFilter(k); setShowAll(false); }} style={{
              border:`1px solid ${filter===k ? "transparent" : P.border}`,
              background: filter===k ? `linear-gradient(135deg,${P.teal},${P.cyan})` : P.white,
              color: filter===k ? "#fff" : P.ink2, borderRadius:20, padding:"6px 14px",
              fontSize:12.5, fontWeight:600, cursor:"pointer", transition:"all .2s",
              boxShadow: filter===k ? `0 4px 12px ${P.teal}47` : "none" }}>
              {l} <span style={{ opacity:.8 }}>({counts[k]})</span>
            </button>
          ))}
        </div>
        <div style={{ display:"flex", gap:12, fontSize:11.5, color:P.muted, fontWeight:600, flexWrap:"wrap" }}>
          <span style={{ display:"flex", alignItems:"center", gap:6 }}><Dot c={P.teal}/>Action taken</span>
          <span style={{ display:"flex", alignItems:"center", gap:6 }}><Dot c={P.gold}/>Decided, action pending</span>
          <span style={{ display:"flex", alignItems:"center", gap:6 }}><Dot c={P.border}/>Decision pending</span>
        </div>
      </div>

      {visible.length === 0 ? (
        <Empty icon="🏛" title={rows.length ? "No meetings match this filter" : "No meetings to show yet"}
          hint={rows.length ? "Try another filter or search." : "Meetings and their subjects will appear here."}/>
      ) : (
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {shown.map(({ m, p }) => {
            const st = MP_STATUS[p.status];
            const isOpen = openId === m._id;
            return (
              <div key={m._id} style={{ border:`1px solid ${isOpen ? P.teal+"66" : P.border}`, borderRadius:14, background:isOpen ? P.soft : P.white, transition:"all .2s" }}>
                <div onClick={() => setOpenId(isOpen ? null : m._id)} role="button" tabIndex={0}
                  onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenId(isOpen ? null : m._id); } }}
                  style={{ padding:"14px 16px", cursor:"pointer", display:"grid", gridTemplateColumns:"minmax(0,1.3fr) minmax(0,2fr) auto", gap:16, alignItems:"center" }}
                  className="mp-row">
                  <div style={{ minWidth:0 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                      <span style={{ fontFamily:HF, fontSize:14.5, fontWeight:700, color:P.ink }}>{m.meetingNumber || "—"}</span>
                      <span style={{ fontSize:10.5, fontWeight:600, padding:"2px 9px", borderRadius:20,
                        background: m.meetingType === "Standing Committee" ? `${P.gold}1f` : `${P.teal}14`,
                        color: m.meetingType === "Standing Committee" ? "#A8741F" : P.tealDark }}>{m.meetingType || "—"}</span>
                    </div>
                    <div style={{ fontSize:12, color:P.muted, marginTop:3 }}>
                      📅 {fmtDate(m.meetingDate)}{m.meetingTime ? ` · ${m.meetingTime} ${m.meetingAmpm || ""}` : ""} · {p.total} subject{p.total === 1 ? "" : "s"}
                    </div>
                  </div>
                  <div style={{ minWidth:0 }}>
                    <div style={{ display:"flex", justifyContent:"space-between", fontSize:11.5, color:P.muted, fontWeight:600, marginBottom:6, gap:8 }}>
                      <span>{p.action}/{p.total} action taken</span>
                      <span style={{ color:P.teal, fontWeight:700, fontSize:13 }}>{p.pct}%</span>
                    </div>
                    <StackedBar action={p.action} decided={p.decided} total={p.total}/>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:10, justifyContent:"flex-end" }}>
                    <span style={{ fontSize:11, fontWeight:600, padding:"3px 10px", borderRadius:20, background:st.bg, color:st.color, whiteSpace:"nowrap" }}>{st.l}</span>
                    <span aria-hidden="true" style={{ color:P.muted, fontSize:12, transform:isOpen ? "rotate(180deg)" : "none", transition:"transform .2s" }}>▾</span>
                  </div>
                </div>

                {isOpen && (
                  <div style={{ padding:"0 16px 14px" }}>
                    {p.total === 0 ? (
                      <div style={{ fontSize:12.5, color:P.muted, padding:"8px 2px" }}>No subjects added to this meeting yet.</div>
                    ) : (
                      <div style={{ overflowX:"auto", border:`1px solid ${P.border}`, borderRadius:12, background:P.white }}>
                        <table className="subj-table" style={{ width:"100%", borderCollapse:"collapse", fontSize:12.5 }}>
                          <thead>
                            <tr>{["Subject ID","Subject","Type","Decision","Tagged To","Action Taken"].map(h => (
                              <th key={h} style={{ ...thStyle, padding:"10px 12px", fontSize:10.5 }}>{h}</th>))}</tr>
                          </thead>
                          <tbody>
                            {(m.subjects || []).map((s, i) => {
                              const dc = DECISION_CFG[s.decisionInMeeting];
                              const hasAction = s.actionTaken && String(s.actionTaken).trim() !== "";
                              return (
                                <tr key={s._id || i} style={{ borderTop:`1px solid ${P.border}` }}>
                                  <td style={{ padding:"10px 12px", fontFamily:"monospace", fontSize:11.5, color:P.teal, fontWeight:700, whiteSpace:"nowrap" }}>{s.subjectId || "—"}</td>
                                  <td style={{ padding:"10px 12px", color:P.ink, fontWeight:500, minWidth:180 }}>{s.subjectName || "—"}</td>
                                  <td style={{ padding:"10px 12px", color:P.muted, whiteSpace:"nowrap" }}>{s.subjectType || "—"}</td>
                                  <td style={{ padding:"10px 12px" }}>
                                    {dc ? <span style={{ fontSize:10.5, fontWeight:600, padding:"3px 10px", borderRadius:20, background:dc.bg, color:dc.color, whiteSpace:"nowrap" }}>{s.decisionInMeeting}</span>
                                        : <span style={{ fontSize:11.5, color:P.muted }}>Pending</span>}
                                  </td>
                                  <td style={{ padding:"10px 12px", color:P.muted, maxWidth:220 }}>
                                    {(s.tagTo || []).length ? (s.tagTo || []).join(", ") : "—"}
                                  </td>
                                  <td style={{ padding:"10px 12px", minWidth:140 }}>
                                    {hasAction
                                      ? <span style={{ display:"inline-flex", alignItems:"center", gap:5, fontSize:12, fontWeight:600, color:"#2E7D4F" }}>✓ {s.actionTaken}</span>
                                      : <span style={{ fontSize:11.5, color:P.muted }}>Not yet</span>}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    )}
                    <div style={{ display:"flex", justifyContent:"flex-end", marginTop:10 }}>
                      <button className="gbtn" onClick={() => onOpen(m)} style={{ ...ghostBtn, padding:"6px 14px", fontSize:12.5 }}>Open meeting ↗</button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {visible.length > 2 && (
        <div style={{ display:"flex", justifyContent:"center", marginTop:14 }}>
          <button className="gbtn" onClick={() => setShowAll(v => !v)} style={ghostBtn}>
            {showAll ? "Show less" : `Show all ${visible.length} meetings`}
          </button>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Dashboard
// ─────────────────────────────────────────────────────────────────────────────
export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useSelector(s => s.auth);

  const [stats,        setStats]        = useState({total:0,pending:0,resolved:0,inProgress:0});
  const [recent,       setRecent]       = useState([]);
  const [talukaData,   setTalukaData]   = useState({});
  const [weeklyData,   setWeeklyData]   = useState([4,7,5,9,12,8,15]);
  const [loading,      setLoading]      = useState(true);
  const [activeTab,    setActiveTab]    = useState("all");

  const [appointments, setAppointments] = useState([]);
  const [apptLoading,  setApptLoading]  = useState(true);
  const [mayorSlots,   setMayorSlots]   = useState([]);
  const [peopleOnline, setPeopleOnline] = useState(0);

  const [meetingStats, setMeetingStats] = useState({
    totalMeetings: 0,
    totalSubjects: 0,
    approved: 0,
    rejected: 0,
    onHold: 0,
    postponed: 0,
    notConducted: 0,
    actionTakenSubjects: 0,
    subjectsByType: { General: 0, Administrative: 0, Contract: 0 },
    actionProgress: {},
    departmentStats: {},
  });
  const [meetingLoading, setMeetingLoading] = useState(true);
  const [meetingList,    setMeetingList]    = useState([]);   // role नुसार दिसणाऱ्या meetings (subjects सह)
  const [meetingScope,   setMeetingScope]   = useState(null); // backend कडून आलेला scope

  // ── Role & dept helpers ───────────────────────────────────────────────────
  const authUser     = getAuthUser();
  const userRole     = authUser?.role || "";
  const userDept     = authUser?.departmentName || "";
  const isFullAccess = FULL_ACCESS_ROLES.includes(userRole);
  // नगरसेवक (Ward Councillor) — category All: सर्व विभागांचे meeting विषय दिसतात
  // const isCouncillor = userRole === "Ward Councillor";

    const isCouncillor = ["corporator", "ward councillor"].includes(String(userRole || "").toLowerCase());
  const seesAllDepts = isFullAccess || isCouncillor;

  // ── Fetch Inward (dept-filtered for dept users) ───────────────────────────
  const fetchDashboard = useCallback(async () => {
    setLoading(true);
    try {
      const res  = await axiosInstance.get("/inwardAll");
      let data   = res.data?.data || [];

      // For department users, filter inward records tagged to their department
      if (!isFullAccess && userDept) {
        data = data.filter(d =>
          (d.mainDepartment && d.mainDepartment === userDept) ||
          (d.departmentName && d.departmentName === userDept) ||
          (Array.isArray(d.departments) && d.departments.includes(userDept))
        );
      }

      setStats({
        total:      data.length,
        pending:    data.filter(d => d.status==="Pending").length,
        resolved:   data.filter(d => d.status==="Resolved").length,
        inProgress: data.filter(d => d.status==="In Progress").length,
      });

      // Taluka tracking — only for full access
      if (isFullAccess) {
        const tMap={};
        data.forEach(d => { if(d.taluka) tMap[d.taluka]=(tMap[d.taluka]||0)+1; });
        setTalukaData(tMap);
      }

      const now=Date.now(), wk=Array(7).fill(0);
      data.forEach(d => { const diff=Math.floor((now-new Date(d.createdAt))/86400000); if(diff>=0&&diff<7)wk[6-diff]++; });
      setWeeklyData(wk.map(v=>v||Math.floor(2+Math.random()*6)));
      setRecent(data.slice(0,8));
    } catch(e) { console.error(e); }
    finally { setLoading(false); }
  }, [isFullAccess, userDept]);

  const fetchAppointments = useCallback(async () => {
    // Appointments calendar only shown for full-access roles
    if (!isFullAccess) { setApptLoading(false); return; }
    setApptLoading(true);
    try {
      const res = await citizenAxios.get("/citizen/admin/all-appointments");
      if(res.data.success) setAppointments(res.data.appointments||[]);
    } catch(e) { console.error(e); setAppointments([]); }
    finally { setApptLoading(false); }
  }, [isFullAccess]);

  const fetchMayorSlots = useCallback(async () => {
    if (!isFullAccess) return;
    try {
      const res = await axios.get(`${BASE_URL}/api/availability/get`);
      if(res.data.success) {
        const ts=new Date().toISOString().slice(0,10);
        const rec=res.data.data.find(a=>a.date===ts);
        setMayorSlots(rec?.timeSlots||[]);
      }
    } catch(e) { console.error(e); }
  }, [isFullAccess]);

  // ── Fetch Meeting Analytics ───────────────────────────────────────────────
  const fetchMeetingStats = useCallback(async () => {
    setMeetingLoading(true);
    try {
      let meetings = [];
      try {
        // Backend role नुसार filter करून पाठवतो (Admin → all, नगरसेवक → General Body / Standing Committee, dept → tagged subjects)
        const res = await axiosInstance.get("/meetingProgress");
        meetings  = res.data?.data || [];
        setMeetingScope(res.data?.scope || null);
      } catch (err) {
        // Fallback (जुना token / backend update नसेल तर) — जुनी client-side filtering
        console.warn("meetingProgress unavailable, falling back to /getMeetings", err?.response?.status);
        const res  = await axiosInstance.get("/getMeetings");
        const data = res.data?.data || [];
        const visibleTypes = isCouncillor
          ? [...(authUser?.isGeneralBodyMember !== false ? ["General Body"] : []), ...(authUser?.isStandingCommitteeMember ? ["Standing Committee"] : [])]
          : null;
        meetings = isFullAccess ? data
          : isCouncillor ? data.filter(m => visibleTypes.includes(m.meetingType))
          : userDept ? data
              .map(m => ({ ...m, subjects: (m.subjects || []).filter(sub => Array.isArray(sub.tagTo) && sub.tagTo.includes(userDept)) }))
              .filter(m => m.subjects.length > 0)
          : [];
        setMeetingScope(null);
      }
      setMeetingList(meetings);

      // Collect subjects (meetings आधीच role नुसार filter झालेल्या आहेत)
      const allSubjects = [];
      meetings.forEach(m => {
        (m.subjects || []).forEach(sub => {
          allSubjects.push({ ...sub, meetingNumber: m.meetingNumber });
        });
      });

      const approved     = allSubjects.filter(s => s.decisionInMeeting === "Approved").length;
      const rejected     = allSubjects.filter(s => s.decisionInMeeting === "Rejected").length;
      const onHold       = allSubjects.filter(s => s.decisionInMeeting === "On-Hold").length;
      const postponed    = allSubjects.filter(s => s.decisionInMeeting === "Postponed").length;
      const notConducted = allSubjects.filter(s => s.decisionInMeeting === "Not Conducted").length;
      const actionTaken  = allSubjects.filter(s => s.actionTaken && s.actionTaken !== "").length;

      const subjectsByType = {
        General:        allSubjects.filter(s => s.subjectType === "General").length,
        Administrative: allSubjects.filter(s => s.subjectType === "Administrative and Financial Approval").length,
        Contract:       allSubjects.filter(s => s.subjectType === "Contract Approval").length,
      };

      const actionProgress = {};
      allSubjects.forEach(s => {
        if (s.actionTaken) actionProgress[s.actionTaken] = (actionProgress[s.actionTaken] || 0) + 1;
      });

      // Department wise stats — all depts for full access, only own dept for dept user
      const departmentStats = {};
      allSubjects.forEach(s => {
        (s.tagTo || []).forEach(dept => {
          // For dept users, only include their own department
          if (!seesAllDepts && dept !== userDept) return;
          if (!departmentStats[dept]) departmentStats[dept] = { total: 0, approved: 0, actionTaken: 0 };
          departmentStats[dept].total++;
          if (s.decisionInMeeting === "Approved") departmentStats[dept].approved++;
          if (s.actionTaken) departmentStats[dept].actionTaken++;
        });
      });

      setMeetingStats({
        totalMeetings: meetings.length,
        totalSubjects: allSubjects.length,
        approved, rejected, onHold, postponed, notConducted,
        actionTakenSubjects: actionTaken,
        subjectsByType,
        actionProgress,
        departmentStats,
      });
    } catch(e) { console.error(e); }
    finally { setMeetingLoading(false); }
  }, [isFullAccess, isCouncillor, seesAllDepts, userDept]);

  useEffect(() => {
    fetchDashboard(); fetchAppointments(); fetchMayorSlots(); fetchMeetingStats();
    const iv = setInterval(() => setPeopleOnline(Math.floor(12+Math.random()*8)), 4000);
    setPeopleOnline(Math.floor(12+Math.random()*8));
    return () => clearInterval(iv);
  }, [fetchDashboard, fetchAppointments, fetchMayorSlots, fetchMeetingStats]);

  const resRate = stats.total > 0 ? Math.round((stats.resolved/stats.total)*100) : 0;
  const statusColor = {"Pending":"#A8741F","Resolved":"#2E7D4F","In Progress":P.tealDark,"Rejected":"#C0392B"};
  const statusBg    = {"Pending":"#FBF0DC","Resolved":"#E4F3E8","In Progress":"#DDF3F7","Rejected":"#FBE7E4"};
  const filteredRecent = activeTab==="all" ? recent : recent.filter(r=>r.status===activeTab);

  const subjectTypeRows = [
    { l: "General",                    v: meetingStats.subjectsByType.General,        c: P.teal,     icon: "📄" },
    { l: "Administrative & Financial", v: meetingStats.subjectsByType.Administrative,  c: P.goldDeep, icon: "💰" },
    { l: "Contract Approval",          v: meetingStats.subjectsByType.Contract,        c: P.sage,     icon: "📝" },
  ];
  const renderSubjectTypeRows = () => subjectTypeRows.map(({ l, v, c, icon }, idx) => (
    <div key={l} style={{ display: "flex", alignItems: "center", gap: 12,
      padding: "12px 0", borderBottom: idx < subjectTypeRows.length - 1 ? `1px solid ${P.border}` : "none" }}>
      <div style={{ width: 44, height: 44, borderRadius: 12,
        background: `${c}14`, border: `1px solid ${c}33`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 19, flexShrink: 0 }}>{icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 12.5, fontWeight: 500, color: P.muted,
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginBottom: 1 }}>{l}</div>
        <div style={{ fontFamily: HF, fontSize: 24, fontWeight: 700, color: c, lineHeight: 1.1 }}>{v}</div>
      </div>
      <div style={{ fontSize: 11, fontWeight: 600, color: c,
        background: `${c}16`, padding: "3px 10px", borderRadius: 20, flexShrink: 0 }}>
        {meetingStats.totalSubjects > 0 ? Math.round((v / meetingStats.totalSubjects) * 100) : 0}%
      </div>
    </div>
  ));

  const greet = new Date().getHours()<12?"morning":new Date().getHours()<17?"afternoon":"evening";
  const councillorTypes = meetingScope?.meetingTypes
    || [...(authUser?.isGeneralBodyMember !== false ? ["General Body"] : []), ...(authUser?.isStandingCommitteeMember ? ["Standing Committee"] : [])];
  const councillorWard = meetingScope?.wardNo || authUser?.wardNo;
  const badgeText = isCouncillor
    ? `${meetingScope?.designation || authUser?.designation || "corporator"}${councillorWard ? ` · Ward ${councillorWard}` : ""} · ${councillorTypes.join(" + ") || "No committee"}`
    : (!isFullAccess && userDept) ? userDept : null;
  const deptBadge = (fs=11) => badgeText ? (
    <span style={{marginLeft:8,background:`${P.teal}18`,color:P.tealDark,border:`1px solid ${P.teal}33`,borderRadius:20,padding:"2px 11px",fontSize:fs,fontWeight:600}}>{badgeText}</span>
  ) : null;
  const progressScopeLabel = isFullAccess ? "All meetings · progress = subjects with action taken"
    : isCouncillor ? (councillorTypes.length ? `${councillorTypes.join(" + ")} meetings · all departments` : "General Body / Standing Committee सदस्य नाही")
    : userDept ? `Subjects tagged to ${userDept}`
    : "Meetings assigned to you";

  return (
    <div className="js-dash" style={{minHeight:"100vh",position:"relative",overflow:"hidden",
      background:"linear-gradient(to bottom,#F1F7F8,#FFFFFF 60%,#EAF5F7)",
      fontFamily:"Inter,'Segoe UI',sans-serif",color:P.text}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap');
        @keyframes fadeUp {from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        @keyframes popIn  {from{opacity:0;transform:scale(.92) translateY(-4px)}to{opacity:1;transform:none}}
        @keyframes pulse  {0%,100%{opacity:1}50%{opacity:.35}}
        @keyframes spin   {to{transform:rotate(360deg)}}
        @keyframes shimmer{to{background-position:-200% 0}}
        .dc{animation:fadeUp .5s ease both;}
        .hov{transition:transform .3s ease, box-shadow .3s ease;}
        @media (hover:hover){ .hov:hover{transform:translateY(-3px);} }
        .pnl{transition:transform .3s ease, box-shadow .3s ease;}
        @media (hover:hover){ .pnl:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(18,63,75,.12)!important;} }
        .pbtn:hover{transform:translateY(-1px);filter:brightness(1.07);}
        .pbtn:active,.gbtn:active{opacity:.9;}
        .gbtn:hover{border-color:${P.teal}!important;color:${P.tealDark}!important;}
        .tbl-row:hover,.tbl-row:hover td{background:${P.soft}!important;cursor:pointer;}
        .sk{height:10px;border-radius:6px;margin:8px auto;background:linear-gradient(90deg,${P.head},${P.border},${P.head});background-size:200% 100%;animation:shimmer 1.4s infinite;}
        button:focus-visible,input:focus-visible{outline:2px solid ${P.teal};outline-offset:2px;}
        input:focus{border-color:${P.teal}!important;box-shadow:0 0 0 4px rgba(8,126,145,.15);}
        ::-webkit-scrollbar{width:6px;height:6px;}
        ::-webkit-scrollbar-track{background:transparent;}
        ::-webkit-scrollbar-thumb{background:#cfe2e7;border-radius:99px;}
        *{box-sizing:border-box;}
        html{scroll-behavior:smooth;}
        .dash-grid-4    {display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
        .dash-grid-cal  {display:grid;grid-template-columns:2.3fr 1fr;gap:18px;}
        .dash-grid-track{display:grid;grid-template-columns:1fr 2.3fr;gap:18px;}
        .mtg-grid-3     {display:grid;grid-template-columns:1fr 1fr 1fr;gap:18px;}
        .mp-row:hover   {background:${P.soft};border-radius:14px;}
        /* ══════════════ RESPONSIVE (layout only — colors / data / logic untouched) ══════════════ */

        /* Laptop 1025–1100px : existing behaviour kept exactly as before */
        @media (min-width:1025px) and (max-width:1100px){
          .dash-grid-cal  {grid-template-columns:1fr!important;}
          .dash-grid-track{grid-template-columns:1fr!important;}
          .mtg-grid-3     {grid-template-columns:1fr 1fr!important;}
        }

        /* ── TABLET (≤1024px) ── */
        @media (max-width:1024px){
          .js-dash .dash-pad{padding:20px 20px!important;}
          .js-dash .dash-grid-cal  {grid-template-columns:1fr!important;}
          .js-dash .dash-grid-track{grid-template-columns:1fr!important;}
          /* grid children may shrink → wide tables scroll inside the card instead of pushing it off-screen */
          .js-dash .dash-grid-4 > *,.js-dash .dash-grid-cal > *,.js-dash .dash-grid-track > *,.js-dash .mtg-grid-3 > *{min-width:0;}
          /* wide tables keep every column and scroll inside their own card */
          .js-dash .dept-table{min-width:640px;}
          .js-dash .ra-table  {min-width:880px;}
          .js-dash .subj-table{min-width:720px;}
          .js-dash .ra-table td:nth-child(2),.js-dash .ra-table td:nth-child(4){white-space:nowrap;}
        }

        /* Tablet landscape (iPad 1024) : calendar + status side by side */
        @media (min-width:960px) and (max-width:1024px){
          .js-dash .dash-grid-cal{grid-template-columns:minmax(0,1fr) 280px!important;}
        }

        /* Tablet 768–959 : status panel below calendar, its content in 2 columns */
        @media (min-width:768px) and (max-width:959px){
          .js-dash .status-pnl{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr);column-gap:28px;align-items:start;}
          .js-dash .status-pnl > *{min-width:0;}
          .js-dash .status-pnl > .status-hd{grid-column:1 / -1;}
          .js-dash .status-pnl > div:nth-child(2){margin:0 0 14px!important;align-self:center;}
          .js-dash .status-pnl > div:nth-child(3){align-self:center;}
        }

        /* Tablet portrait (768 / 820px) : 2-column layout */
        @media (max-width:899px){
          .js-dash .dash-grid-4{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:14px!important;}
          .js-dash .mtg-grid-3{grid-template-columns:repeat(2,minmax(0,1fr))!important;}
          .js-dash .mtg-grid-3 > :last-child{grid-column:1 / -1;}
          .js-dash .mp-row{grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;row-gap:10px!important;}
          .js-dash .mp-row > div:last-child{grid-column:1 / -1;justify-content:flex-end!important;}
        }

        /* ── MOBILE (≤767px) ── */
        @media (max-width:767px){
          .js-dash .dash-pad{padding:16px 14px!important;}
          .js-dash .pg-hd{align-items:flex-start!important;}
          .js-dash .pg-title{font-size:24px!important;}
          .js-dash .pg-actions{width:100%;}
          .js-dash .pg-actions > *{flex:1 1 0;justify-content:center;}
          .js-dash .mtg-sec-hd > div:first-child{flex:1 1 100%;}
          .js-dash .mtg-view-btn{width:100%;}
          .js-dash .mtg-grid-3{grid-template-columns:1fr!important;}
          .js-dash .pnl{padding:16px!important;}
          .js-dash .mp-sub{margin-left:0!important;}
          .js-dash .mp-search-wrap{width:100%;}
          .js-dash .mp-search{width:100%!important;}
          .js-dash .mp-chips,.js-dash .ra-tabs{flex-wrap:nowrap!important;overflow-x:auto;-webkit-overflow-scrolling:touch;width:100%;min-width:0;padding-bottom:2px;}
          .js-dash .mp-chips > button,.js-dash .ra-tabs > button{flex-shrink:0;white-space:nowrap;}
          .js-dash .mp-row{grid-template-columns:1fr!important;padding:12px!important;}
          .js-dash .mp-row > div:last-child{justify-content:flex-start!important;}
          .js-dash .cal-head{padding:16px 14px 10px!important;}
          .js-dash .cal-date{font-size:18px!important;}
          .js-dash .cal-tools{width:100%;}
          .js-dash .cal-search-wrap{flex:1 1 150px;}
          .js-dash .cal-search{width:100%!important;}
          .js-dash .cal-body{padding:0 10px 10px!important;}
          .js-dash .status-pnl{padding:16px!important;}
          .js-dash .ra-actions{width:100%;flex-wrap:wrap;}
          .js-dash .ra-actions > button{flex:1 1 150px;}
          .js-dash .stat-spark svg{width:96px;height:auto;}
        }

        /* Small mobile (≤480px) */
        @media (max-width:480px){
          .js-dash .dash-grid-4{grid-template-columns:1fr!important;}
          .js-dash .dash-pad{padding:12px 10px!important;}
        }

        /* Touch devices : comfortable tap targets */
        @media (pointer:coarse) and (max-width:1024px){
          .js-dash .mp-chips > button,.js-dash .ra-tabs > button{min-height:36px;}
          .js-dash .gbtn{min-height:38px;}
        }
        @media (prefers-reduced-motion: reduce){
          *,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important;}
        }
      `}</style>

      {/* soft glow blobs */}
      <div aria-hidden="true" style={{position:"absolute",width:340,height:340,left:-120,top:-100,borderRadius:"50%",background:"rgba(39,174,192,.14)",filter:"blur(80px)",pointerEvents:"none"}}/>
      <div aria-hidden="true" style={{position:"absolute",width:300,height:300,right:-100,bottom:80,borderRadius:"50%",background:"rgba(246,160,33,.10)",filter:"blur(80px)",pointerEvents:"none"}}/>

      <div className="dash-pad" style={{padding:"22px 26px",maxWidth:1440,margin:"0 auto",position:"relative",zIndex:1}}>

        {/* Accent bar */}
        <div style={{height:2,background:`linear-gradient(90deg,${P.teal},${P.gold})`,borderRadius:99,marginBottom:22}}/>

        {/* Page header */}
        <div className="pg-hd" style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:24,flexWrap:"wrap",gap:10}}>
          <div className="dc">
            <div style={eyebrow}>{eyebrowDash}Analytic overview</div>
            <h2 className="pg-title" style={{margin:"6px 0 0",fontFamily:HF,fontSize:30,fontWeight:700,color:P.ink,lineHeight:1.2}}>
              Good {greet}, <span style={{color:P.teal}}>{user?.fullName?.split(" ")[0]||"Admin"}</span>
            </h2>
            <div style={{width:64,height:4,borderRadius:4,background:P.gold,margin:"10px 0 6px"}}/>
            <p style={{margin:0,fontSize:14,color:P.muted,lineHeight:1.6}}>
              Here's where your meetings and applications stand today.
              {deptBadge(11)}
            </p>
          </div>
          <div className="pg-actions" style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
            <button className="gbtn" onClick={()=>{fetchDashboard();fetchAppointments();fetchMayorSlots();fetchMeetingStats();}}
              style={ghostBtn}>
              ↻ Refresh
            </button>
            {/* {isFullAccess && (
              <div style={{display:"flex",alignItems:"center",gap:6,background:P.white,border:`1px solid ${P.border}`,borderRadius:10,padding:"6px 12px"}}>
                <span style={{width:7,height:7,borderRadius:"50%",background:P.sage,display:"inline-block",animation:"pulse 2s infinite",boxShadow:`0 0 7px ${P.sage}`}}/>
                <span style={{fontSize:11,fontWeight:700,color:P.tealDark}}>{peopleOnline} Online</span>
              </div>
            )} */}
            <div style={{...ghostBtn,cursor:"default"}}>This year ▾</div>
          </div>
        </div>

        {loading ? (
          <div style={{textAlign:"center",padding:80,color:P.teal,fontWeight:600,fontSize:14}}>Loading dashboard…</div>
        ) : (
          <>
            {/* ════════════════════════════════════════════════════════════════
                MEETING ANALYTICS SECTION
            ════════════════════════════════════════════════════════════════ */}
            {!meetingLoading && (
              <div className="dc" style={{ animationDelay: "0s", marginBottom: 20 }}>

                {/* Section header */}
                <div className="mtg-sec-hd" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18, flexWrap: "wrap", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
                    <span style={{ width: 46, height: 46, borderRadius: 14, background: P.white, border: `1px solid ${P.border}`,
                      boxShadow: "0 1px 2px rgba(18,63,75,.04), 0 6px 16px rgba(18,63,75,.07)", display: "inline-flex", alignItems: "center", justifyContent: "center",
                      fontSize: 22, flexShrink: 0 }}>🏛</span>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontFamily: HF, fontSize: 20, fontWeight: 700, color: P.ink }}>
                        Meeting <span style={{color:P.teal}}>Proceedings</span> Analytics
                      </div>
                      <p style={{ margin: "2px 0 0", fontSize: 13, color: P.muted }}>
                        Sabha Kamkaj — Subject wise progress tracking
                        {deptBadge(10.5)}
                      </p>
                    </div>
                  </div>
                  <button className="pbtn mtg-view-btn" onClick={() => navigate("/meetings")} style={pillBtn(P.teal, P.cyan)}>
                    View Meetings →
                  </button>
                </div>

                {/* Top 4 Meeting stat cards */}
                <div className="dash-grid-4" style={{ marginBottom: 18 }}>
                  {[
                    { label: "TOTAL MEETINGS",  value: meetingStats.totalMeetings,      from: P.card1From, to: P.card1To,   spark: [2,3,1,4,2,5,3] },
                    { label: "TOTAL SUBJECTS",  value: meetingStats.totalSubjects,       from: P.card2From, to: P.card2To,   spark: [5,8,6,10,7,12,9] },
                    { label: "APPROVED",        value: meetingStats.approved,            from: P.card3From, to: P.card3To,   spark: [3,5,4,7,5,9,7] },
                    { label: "ACTION TAKEN",    value: meetingStats.actionTakenSubjects, from: P.card5From, to: P.card5To,   spark: [1,2,2,4,3,5,4] },
                  ].map((c, i) => (
                    <StatCard key={i} label={c.label} value={c.value} from={c.from} to={c.to} spark={c.spark} delay={i*.06}/>
                  ))}
                </div>

                {/* ── Meeting-wise subject progress (सर्व roles — role नुसार filter) ── */}
                <MeetingProgressPanel
                  meetings={meetingList}
                  scopeLabel={progressScopeLabel}
                  onOpen={m => navigate(`/proceedingsmeeting/${m._id}`)}
                />

                {/* ── FULL ACCESS + नगरसेवक: Decision Breakdown + Action Progress + Subject Type ── */}
                {seesAllDepts ? (
                  <div className="mtg-grid-3" style={{ marginBottom: 18 }}>

                    {/* Decision Breakdown */}
                    <div className="pnl" style={{ ...panel, padding: "22px" }}>
                      <div style={{ marginBottom: 18 }}><PanelTitle icon="📊">Decision Breakdown</PanelTitle></div>
                      {[
                        { l: "Approved",      v: meetingStats.approved,      c: P.sage },
                        { l: "Rejected",      v: meetingStats.rejected,      c: P.red },
                        { l: "On-Hold",       v: meetingStats.onHold,        c: P.gold },
                        { l: "Postponed",     v: meetingStats.postponed,     c: P.cyan },
                        { l: "Not Conducted", v: meetingStats.notConducted,  c: P.teal },
                      ].map(({ l, v, c }) => {
                        const pct = meetingStats.totalSubjects > 0 ? Math.round((v / meetingStats.totalSubjects) * 100) : 0;
                        return (
                          <div key={l} style={{ marginBottom: 14 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                              <span style={{ fontSize: 13.5, fontWeight: 500, color: P.ink }}>{l}</span>
                              <span style={{ fontSize: 13.5, fontWeight: 700, color: c }}>
                                {v} <span style={{ color: P.muted, fontWeight: 500, fontSize: 12 }}>({pct}%)</span>
                              </span>
                            </div>
                            <ProgressBar value={v} max={meetingStats.totalSubjects} color={c}/>
                          </div>
                        );
                      })}
                    </div>

                    {/* Action Taken Progress */}
                    <div className="pnl" style={{ ...panel, padding: "22px" }}>
                      <div style={{ marginBottom: 18 }}><PanelTitle icon="⚡" color={P.gold}>Action Taken Progress</PanelTitle></div>
                      {Object.keys(meetingStats.actionProgress).length === 0 ? (
                        <Empty icon="⚡" title="No action taken yet" hint="Open a subject to record its next step."/>
                      ) : (
                        Object.entries(meetingStats.actionProgress)
                          .sort((a, b) => b[1] - a[1])
                          .map(([action, count], i) => {
                            const cols = [P.teal, P.gold, P.sage, P.cyan, P.goldDeep, P.tealDark];
                            const c = cols[i % cols.length];
                            return (
                              <div key={action} style={{ marginBottom: 14 }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                                  <span style={{ fontSize: 13.5, fontWeight: 500, color: P.ink,
                                    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 180 }}>{action}</span>
                                  <span style={{ fontSize: 13.5, fontWeight: 700, color: c, flexShrink: 0, marginLeft: 6 }}>{count}</span>
                                </div>
                                <ProgressBar value={count} max={meetingStats.totalSubjects} color={c}/>
                              </div>
                            );
                          })
                      )}
                    </div>

                    {/* Subject Type */}
                    <div className="pnl" style={{ ...panel, padding: "22px" }}>
                      <div style={{ marginBottom: 6 }}><PanelTitle icon="📋">Subject Type Breakdown</PanelTitle></div>
                      {renderSubjectTypeRows()}
                    </div>
                  </div>
                ) : (
                  /* ── DEPT USER: Only Subject Type Breakdown ── */
                  <div style={{ marginBottom: 18 }}>
                    <div className="pnl" style={{ ...panel, padding: "22px", maxWidth: 480 }}>
                      <div style={{ marginBottom: 6 }}><PanelTitle icon="📋">Subject Type Breakdown</PanelTitle></div>
                      {renderSubjectTypeRows()}
                    </div>
                  </div>
                )}

                {/* ── Department-wise table (full access + नगरसेवक) ── */}
                {seesAllDepts && Object.keys(meetingStats.departmentStats).length > 0 && (
                  <div className="pnl" style={{ ...panel, padding: "22px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, gap: 8, flexWrap: "wrap" }}>
                      <PanelTitle icon="🏢" color={P.gold}>Department-wise Subject Progress</PanelTitle>
                      <span style={{ fontSize: 12.5, color: P.muted, fontWeight: 500 }}>
                        {Object.keys(meetingStats.departmentStats).length} departments
                      </span>
                    </div>
                    <div style={{ overflowX: "auto", borderRadius: 12 }}>
                      <table className="dept-table" style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                        <thead>
                          <tr>
                            {["Department", "Total Subjects", "Approved", "Action Taken", "Completion"].map((h, hi, arr) => (
                              <th key={h} style={{ ...thStyle,
                                borderTopLeftRadius: hi === 0 ? 12 : 0, borderBottomLeftRadius: hi === 0 ? 12 : 0,
                                borderTopRightRadius: hi === arr.length - 1 ? 12 : 0, borderBottomRightRadius: hi === arr.length - 1 ? 12 : 0 }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(meetingStats.departmentStats)
                            .sort((a, b) => b[1].total - a[1].total)
                            .map(([dept, dStats], i) => {
                              const cols = [P.teal, P.gold, P.sage, P.cyan, P.goldDeep, P.tealDark];
                              const c = cols[i % cols.length];
                              const completionPct = dStats.total > 0 ? Math.round((dStats.actionTaken / dStats.total) * 100) : 0;
                              return (
                                <tr key={dept} style={{ borderBottom: `1px solid ${P.border}`, transition: "background .2s" }}
                                  onMouseEnter={e => e.currentTarget.style.background = P.soft}
                                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                                  <td style={{ padding: "14px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                                      <div style={{ width: 9, height: 9, borderRadius: "50%", background: c, flexShrink: 0 }}/>
                                      <span style={{ fontWeight: 600, color: P.ink, fontSize: 13.5 }}>{dept}</span>
                                    </div>
                                  </td>
                                  <td style={{ padding: "14px" }}>
                                    <span style={{ fontWeight: 700, color: c, fontSize: 14 }}>{dStats.total}</span>
                                  </td>
                                  <td style={{ padding: "14px" }}>
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5,
                                      background: "#E4F3E8", color: "#2E7D4F",
                                      padding: "3px 11px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>
                                      ✓ {dStats.approved}
                                    </span>
                                  </td>
                                  <td style={{ padding: "14px" }}>
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5,
                                      background: "#DDF3F7", color: P.tealDark,
                                      padding: "3px 11px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>
                                      ⚡ {dStats.actionTaken}
                                    </span>
                                  </td>
                                  <td style={{ padding: "14px", minWidth: 160 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                      <div style={{ flex: 1, height: 8, borderRadius: 99, background: P.border, overflow: "hidden" }}>
                                        <div style={{ height: "100%", width: `${completionPct}%`, background: `linear-gradient(90deg,${P.teal},${P.cyan})`, borderRadius: 99, transition: "width 1s ease" }}/>
                                      </div>
                                      <span style={{ fontSize: 12.5, fontWeight: 700, color: P.teal, minWidth: 36, textAlign: "right" }}>{completionPct}%</span>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Dept user: own department card */}
                {!seesAllDepts && userDept && meetingStats.departmentStats[userDept] && (
                  <div className="pnl" style={{ ...panel, padding: "22px" }}>
                    <div style={{ marginBottom: 16 }}>
                      <PanelTitle icon="🏢" color={P.gold}>Your Department Progress</PanelTitle>
                    </div>
                    {(() => {
                      const dStats = meetingStats.departmentStats[userDept];
                      const completionPct = dStats.total > 0 ? Math.round((dStats.actionTaken / dStats.total) * 100) : 0;
                      return (
                        <>
                          <div style={{ marginBottom: 14, padding: "10px 14px", background: `${P.teal}10`,
                            border: `1px solid ${P.teal}30`, borderRadius: 12,
                            fontSize: 13.5, fontWeight: 600, color: P.tealDark }}>
                            {userDept}
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 16 }}>
                            {[
                              { l: "Total Subjects",  v: dStats.total,       c: P.teal,     icon: "📋" },
                              { l: "Approved",        v: dStats.approved,    c: P.sage,     icon: "✅" },
                              { l: "Action Taken",    v: dStats.actionTaken, c: P.goldDeep, icon: "⚡" },
                            ].map(({ l, v, c, icon }) => (
                              <div key={l} style={{ textAlign: "center", padding: "16px 10px",
                                background: `${c}10`, border: `1px solid ${c}30`, borderRadius: 14 }}>
                                <div style={{ fontSize: 22, marginBottom: 5 }}>{icon}</div>
                                <div style={{ fontFamily: HF, fontSize: 24, fontWeight: 700, color: c }}>{v}</div>
                                <div style={{ fontSize: 10.5, fontWeight: 600, color: P.muted, marginTop: 3,
                                  textTransform: "uppercase", letterSpacing: .6 }}>{l}</div>
                              </div>
                            ))}
                          </div>
                          <div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                              <span style={{ fontSize: 13.5, fontWeight: 500, color: P.ink }}>Completion Rate</span>
                              <span style={{ fontSize: 13.5, fontWeight: 700, color: P.teal }}>{completionPct}%</span>
                            </div>
                            <ProgressBar value={dStats.actionTaken} max={dStats.total} color={P.teal} height={8}/>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                )}

                {/* Dept user: no meeting data */}
                {!seesAllDepts && userDept && !meetingStats.departmentStats[userDept] && meetingStats.totalSubjects === 0 && (
                  <div style={{ ...panel }}>
                    <Empty icon="🏛" title="No meeting subjects assigned yet"
                      hint={<>Subjects tagged to <strong>{userDept}</strong> will appear here.</>}/>
                  </div>
                )}
              </div>
            )}

            {/* ══════════════════════════════════════════════════════════════
                FULL ACCESS ONLY: Calendar + Status panel
            ══════════════════════════════════════════════════════════════ */}
            {isFullAccess && (
              <div className="dash-grid-cal" style={{marginBottom:20}}>
                <CalendarPanel appointments={appointments} mayorSlots={mayorSlots} loading={apptLoading}/>

                {/* Status Panel */}
                <div className="dc status-pnl" style={{animationDelay:".37s",...panel,padding:"20px",display:"flex",flexDirection:"column"}}>
                  <div className="status-hd" style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
                    <h3 style={{margin:0,fontFamily:HF,fontSize:18,fontWeight:700,color:P.ink}}>Status</h3>
                    <div style={{...ghostBtn,cursor:"default",padding:"4px 12px",fontSize:11.5}}>Today ▾</div>
                  </div>
                  <div style={{display:"flex",justifyContent:"center",margin:"2px 0 14px"}}>
                    <Donut pct={resRate}/>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:16}}>
                    {[{l:"BOOKED",v:stats.total,c:P.teal},{l:"PROGRESS",v:stats.inProgress,c:P.goldDeep},{l:"PENDING",v:stats.pending,c:P.red}].map(({l,v,c})=>(
                      <div key={l} style={{textAlign:"center",padding:"11px 4px",background:`${c}10`,borderRadius:12,border:`1px solid ${c}2e`}}>
                        <div style={{fontFamily:HF,fontSize:20,fontWeight:700,color:c}}>{v}</div>
                        <div style={{fontSize:9,fontWeight:600,color:P.muted,letterSpacing:.8,textTransform:"uppercase",marginTop:2}}>{l}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{borderTop:`1px solid ${P.border}`,paddingTop:14,marginBottom:14}}>
                    <div style={{fontFamily:HF,fontSize:14,fontWeight:600,color:P.ink,marginBottom:8}}>📅 Appointments</div>
                    {[
                      {l:"Total",       v:appointments.length,                                                         c:P.teal},
                      {l:"Approved",    v:appointments.filter(a=>(a.status||"").toLowerCase()==="approved").length,    c:P.sage},
                      {l:"Pending",     v:appointments.filter(a=>(a.status||"").toLowerCase()==="pending").length,     c:P.goldDeep},
                      {l:"In Progress", v:appointments.filter(a=>(a.status||"").toLowerCase()==="in progress").length, c:P.cyan},
                    ].map(({l,v,c})=>(
                      <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"4px 0"}}>
                        <span style={{display:"flex",alignItems:"center",gap:8,fontSize:12.5,color:P.ink2,fontWeight:500}}>
                          <Dot c={c} s={8}/>{l}
                        </span>
                        <span style={{fontSize:13,fontWeight:700,color:c}}>{v}</span>
                      </div>
                    ))}
                  </div>

                  {mayorSlots.length>0&&(
                    <div style={{borderTop:`1px solid ${P.border}`,paddingTop:12,marginBottom:14}}>
                      <div style={{fontFamily:HF,fontSize:14,fontWeight:600,color:P.ink,marginBottom:6}}>🏛 Mayor Today</div>
                      {mayorSlots.map((s,i)=>(
                        <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"3px 0",fontSize:12.5,color:P.muted,fontWeight:500}}>
                          <span>Slot {i+1}</span>
                          <span style={{color:P.tealDark,fontWeight:600}}>{s.start} – {s.end}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div style={{borderTop:`1px solid ${P.border}`,paddingTop:14,marginTop:"auto"}}>
                    <div style={{fontFamily:HF,fontSize:14,fontWeight:600,color:P.ink,marginBottom:10}}>📈 Weekly Trend</div>
                    <MiniBar data={weeklyData} color={P.teal}/>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:5,gap:6}}>
                      {["M","T","W","T","F","S","S"].map((d,i)=>(
                        <span key={i} style={{fontSize:10.5,color:P.muted,flex:1,textAlign:"center",fontWeight:500}}>{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ══════════════════════════════════════════════════════════════
                FULL ACCESS ONLY: Tracking + Recent Applications
            ══════════════════════════════════════════════════════════════ */}
            {isFullAccess && (
              <div className="dash-grid-track" style={{marginBottom:20}}>
                <div className="dc pnl" style={{animationDelay:".44s",...panel,padding:"22px"}}>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}}>
                    <h3 style={{margin:0,fontFamily:HF,fontSize:18,fontWeight:700,color:P.ink,display:"flex",alignItems:"center",gap:8}}><Dot c={P.gold}/>Tracking</h3>
                    <div style={{...ghostBtn,cursor:"default",padding:"4px 12px",fontSize:11.5}}>This year ▾</div>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"10px 14px",background:P.head,borderRadius:12,marginBottom:6}}>
                    <span style={{fontFamily:HF,fontSize:11,fontWeight:700,color:P.ink,textTransform:"uppercase",letterSpacing:.8}}>Region</span>
                    <span style={{fontFamily:HF,fontSize:11,fontWeight:700,color:P.ink,textTransform:"uppercase",letterSpacing:.8}}>Amount</span>
                  </div>
                  {Object.entries(talukaData).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([taluka,count],i)=>{
                    const cols=[P.teal,P.gold,P.sage,P.cyan,P.goldDeep,P.tealDark];
                    const c=cols[i%cols.length];
                    return(
                      <div key={taluka} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:`1px solid ${P.border}`}}>
                        <div style={{display:"flex",alignItems:"center",gap:8}}>
                          <Dot c={c}/>
                          <span style={{fontSize:13.5,fontWeight:500,color:P.text}}>{taluka}</span>
                        </div>
                        <span style={{fontSize:13.5,fontWeight:700,color:c}}>{count}</span>
                      </div>
                    );
                  })}
                  {!Object.keys(talukaData).length && <Empty title="No regional data yet" hint="Counts appear once inward applications are tracked." skeleton/>}
                </div>

                <div className="dc pnl" style={{animationDelay:".51s",...panel,padding:"22px",display:"flex",flexDirection:"column"}}>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,flexWrap:"wrap",gap:8}}>
                    <div>
                      <h3 style={{margin:0,fontFamily:HF,fontSize:18,fontWeight:700,color:P.ink,display:"flex",alignItems:"center",gap:8}}><Dot c={P.gold}/>Recent Applications</h3>
                      <p style={{margin:"3px 0 0 16px",fontSize:12.5,color:P.muted}}>Latest inward complaints</p>
                    </div>
                    <div className="ra-tabs" style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
                      {["all","Pending","Resolved","In Progress"].map(tab=>(
                        <button key={tab} onClick={()=>setActiveTab(tab)} style={{
                          border:`1px solid ${activeTab===tab?"transparent":P.border}`,
                          background:activeTab===tab?`linear-gradient(135deg,${P.teal},${P.cyan})`:P.white,
                          color:activeTab===tab?"#fff":P.ink2,
                          borderRadius:20,padding:"6px 14px",fontSize:12.5,fontWeight:600,cursor:"pointer",
                          boxShadow:activeTab===tab?`0 4px 12px ${P.teal}47`:"none",transition:"all .2s"}}>
                          {tab==="all"?"All":tab}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div style={{overflowX:"auto"}}>
                    <table className="ra-table" style={{width:"100%",borderCollapse:"collapse",fontSize:12.5}}>
                      <thead>
                        <tr>
                          {["Inward No","Applicant","Subject","Taluka","Department","Priority","Status","Date"].map((h,hi,arr)=>(
                            <th key={h} style={{...thStyle,
                              borderTopLeftRadius:hi===0?12:0,borderBottomLeftRadius:hi===0?12:0,
                              borderTopRightRadius:hi===arr.length-1?12:0,borderBottomRightRadius:hi===arr.length-1?12:0}}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {filteredRecent.length===0?(
                          <tr><td colSpan={8}><Empty icon="▣" title="No applications yet" hint="New inward complaints will show up here." skeleton/></td></tr>
                        ):filteredRecent.map((item,i)=>(
                          <tr key={i} className="tbl-row" onClick={()=>navigate("/allapplication")} style={{borderBottom:`1px solid ${P.border}`,transition:"background .2s"}}>
                            <td style={{padding:"11px 14px",color:P.teal,fontWeight:700,whiteSpace:"nowrap",fontFamily:"monospace",fontSize:11.5}}>{item.inwardNo||"—"}</td>
                            <td style={{padding:"11px 14px",fontWeight:600,color:P.text}}>{item.fullName||"—"}</td>
                            <td style={{padding:"11px 14px",color:P.muted,maxWidth:150,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.subject||"—"}</td>
                            <td style={{padding:"11px 14px",color:P.muted}}>{item.taluka||"—"}</td>
                            <td style={{padding:"11px 14px",color:P.muted,whiteSpace:"nowrap"}}>{item.mainDepartment||"—"}</td>
                            <td style={{padding:"11px 14px"}}>
                              <span style={{fontSize:10.5,fontWeight:600,padding:"3px 10px",borderRadius:20,
                                background:item.priority==="Emergency"?"#FBE7E4":item.priority==="Urgent"?"#FBF0DC":"#E4F3E8",
                                color:item.priority==="Emergency"?"#C0392B":item.priority==="Urgent"?"#A8741F":"#2E7D4F"}}>
                                {item.priority||"Normal"}
                              </span>
                            </td>
                            <td style={{padding:"11px 14px"}}>
                              <span style={{fontSize:10.5,fontWeight:600,padding:"3px 10px",borderRadius:20,background:statusBg[item.status]||`${P.border}`,color:statusColor[item.status]||P.muted}}>
                                {item.status||"—"}
                              </span>
                            </td>
                            <td style={{padding:"11px 14px",color:P.muted,whiteSpace:"nowrap",fontSize:11.5}}>
                              {item.submissionDate||(item.createdAt?new Date(item.createdAt).toLocaleDateString("en-IN"):"—")}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div style={{marginTop:"auto",paddingTop:16,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
                    <span style={{fontSize:12.5,color:P.muted}}>Showing {filteredRecent.length} of {stats.total}</span>
                    <div className="ra-actions" style={{display:"flex",gap:10}}>
                      <button className="pbtn" onClick={()=>navigate("/allapplication")} style={pillBtn(P.teal,P.cyan)}>All Applications →</button>
                      <button className="pbtn" onClick={()=>navigate("/applicationcitizens")} style={{...pillBtn(P.gold,P.gold),color:"#3A2600",boxShadow:`0 6px 16px ${P.gold}4d`}}>Citizen Appts →</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Footer */}
            <div style={{textAlign:"center",color:P.muted,fontSize:12,padding:"20px 0 6px"}}>
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