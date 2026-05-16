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

// // Status config — matches ApplicationCitizens
// const STATUS_CFG = {
//   pending:      {bg:"#fef9c3",color:"#92400e",border:"#fde68a",dot:"#f59e0b",label:"Pending"},
//   approved:     {bg:"#dcfce7",color:"#166534",border:"#86efac",dot:"#16a34a",label:"Approved"},
//   rejected:     {bg:"#fee2e2",color:"#991b1b",border:"#fca5a5",dot:"#ef4444",label:"Rejected"},
//   "in progress":{bg:"#dbeafe",color:"#1e40af",border:"#93c5fd",dot:"#3b82f6",label:"In Progress"},
//   resolved:     {bg:"#f0fdf4",color:"#166534",border:"#bbf7d0",dot:"#22c55e",label:"Resolved"},
// };
// const sc = s => STATUS_CFG[(s||"pending").toLowerCase()] || STATUS_CFG.pending;

// // ── Sparkline ─────────────────────────────────────────────────────────────────
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
// // SMART COMPACT POPUP
// // • position:fixed — never clipped by overflow containers
// // • Calculates best position AFTER paint using real dimensions
// // • Prefers RIGHT of card, flips LEFT if needed
// // • Always clamps within viewport — will NEVER go off bottom
// // ─────────────────────────────────────────────────────────────────────────────
// function CompactPopup({ appt, color, onClose, anchorRect }) {
//   const cfg    = sc(appt.status);
//   const popRef = useRef(null);
//   const [pos, setPos] = useState({ top:0, left:0, ready:false });

//   const POPUP_W = 242;

//   const calcPos = useCallback(() => {
//     if (!anchorRect || !popRef.current) return;
//     const PH  = popRef.current.offsetHeight || 320;
//     const vw  = window.innerWidth;
//     const vh  = window.innerHeight;
//     const pad = 10; // min distance from viewport edges

//     // Horizontal: prefer right of card, flip left if needed
//     let left = anchorRect.right + 8;
//     if (left + POPUP_W > vw - pad) {
//       left = anchorRect.left - POPUP_W - 8;
//     }
//     left = Math.max(pad, Math.min(left, vw - POPUP_W - pad));

//     // Vertical: align to card top, but clamp so popup never overflows bottom
//     let top = anchorRect.top;
//     if (top + PH > vh - pad) {
//       top = vh - PH - pad;
//     }
//     top = Math.max(pad, top);

//     setPos({ top, left, ready: true });
//   }, [anchorRect]);

//   // Calculate after first paint (real dimensions available)
//   useEffect(() => {
//     const raf = requestAnimationFrame(calcPos);
//     return () => cancelAnimationFrame(raf);
//   }, [calcPos]);

//   // Recalculate on resize
//   useEffect(() => {
//     window.addEventListener("resize", calcPos);
//     return () => window.removeEventListener("resize", calcPos);
//   }, [calcPos]);

//   // Close on outside click
//   useEffect(() => {
//     const fn = e => { if (popRef.current && !popRef.current.contains(e.target)) onClose(); };
//     document.addEventListener("mousedown", fn);
//     return () => document.removeEventListener("mousedown", fn);
//   }, [onClose]);

//   // Close on scroll (short debounce so it doesn't vanish before user reads)
//   useEffect(() => {
//     let t;
//     const fn = () => { clearTimeout(t); t = setTimeout(onClose, 120); };
//     window.addEventListener("scroll", fn, true);
//     return () => { window.removeEventListener("scroll", fn, true); clearTimeout(t); };
//   }, [onClose]);

//   // Close on Escape
//   useEffect(() => {
//     const fn = e => { if (e.key === "Escape") onClose(); };
//     document.addEventListener("keydown", fn);
//     return () => document.removeEventListener("keydown", fn);
//   }, [onClose]);

//   return (
//     <div ref={popRef} style={{
//       position: "fixed",
//       top:  pos.top,
//       left: pos.left,
//       opacity: pos.ready ? 1 : 0,
//       transition: "opacity .1s",
//       zIndex: 99999,
//       width: POPUP_W,
//       background: P.white,
//       borderRadius: 14,
//       boxShadow: "0 8px 36px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.10)",
//       border: `1px solid ${P.border}`,
//       overflow: "hidden",
//       animation: "popIn .15s cubic-bezier(.34,1.4,.64,1)",
//     }}>

//       {/* Header */}
//       <div style={{
//         background: `linear-gradient(135deg,${color},${color}dd)`,
//         padding: "11px 12px 10px",
//         display: "flex", alignItems: "center", gap: 10,
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
//         <PRow icon="📱" val={appt.mobileNumber||"—"} bold/>
//         <PRow icon="📍" val={`Ward: ${appt.ward||"—"}`}/>
//         {appt.purpose && <PRow icon="🎯" val={appt.purpose.slice(0,44)+(appt.purpose.length>44?"…":"")}/>}
//         <PRow icon="👥" val={`Visitors: ${appt.numberOfVisitors||1}`}/>
//         {appt.preferredDate && (
//           <PRow icon="📅" val={new Date(appt.preferredDate+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}/>
//         )}

//         {/* Status badge */}
//         <div style={{marginTop:8,marginBottom:8}}>
//           <span style={{
//             display:"inline-flex",alignItems:"center",gap:6,
//             background:cfg.bg,color:cfg.color,border:`1.5px solid ${cfg.border}`,
//             padding:"4px 12px",borderRadius:20,fontSize:11,fontWeight:800,
//           }}>
//             <span style={{width:7,height:7,borderRadius:"50%",background:cfg.dot,display:"inline-block"}}/>
//             {cfg.label}
//           </span>
//         </div>

//         {(appt.tokenId||appt._id)&&(
//           <div style={{fontSize:9.5,color:P.muted,fontWeight:600,fontFamily:"monospace",
//             overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
//             Token: {appt.tokenId||appt._id?.slice(-12)||"—"}
//           </div>
//         )}

//         <div style={{borderTop:`1px solid ${P.border}`,marginTop:10,paddingTop:8,
//           display:"flex",justifyContent:"flex-end"}}>
//           <span style={{fontSize:11.5,color:P.teal,fontWeight:800,cursor:"pointer"}}>
//             View Details ↗
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PRow({ icon, val, bold=false }) {
//   return (
//     <div style={{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6}}>
//       <span style={{fontSize:13,flexShrink:0,marginTop:1}}>{icon}</span>
//       <span style={{fontSize:11.5,fontWeight:bold?700:600,color:bold?P.text:P.muted,lineHeight:1.4}}>{val}</span>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // Appointment card — NO clinic/home text, dot indicator only
// // ─────────────────────────────────────────────────────────────────────────────
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

//   return (
//     <>
//       <div ref={cardRef} onClick={handleClick} style={{
//         background: isOpen ? `${color}22` : `${color}14`,
//         border: `1.5px solid ${isOpen ? color : color+"55"}`,
//         borderLeft: `3px solid ${color}`,
//         borderRadius: "0 8px 8px 0",
//         padding: "5px 8px",
//         cursor: "pointer",
//         marginBottom: 4,
//         userSelect: "none",
//         transition: "all .13s",
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
//             {/* Time only — NO clinic/home text */}
//             <div style={{fontSize:9,fontWeight:700,color:color,marginTop:1,
//               display:"flex",alignItems:"center",gap:5}}>
//               {appt.slotTime||"—"}
//               {/* Small colored dot — status indicator */}
//               <span style={{width:5,height:5,borderRadius:"50%",flexShrink:0,
//                 background:sc(appt.status).dot,display:"inline-block"}}/>
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

//   const filtered = appointments.filter(a => {
//     if (!search) return true;
//     const q = search.toLowerCase();
//     return (a.fullName||"").toLowerCase().includes(q) ||
//            (a.purpose||"").toLowerCase().includes(q)  ||
//            (a.ward||"").toLowerCase().includes(q)     ||
//            (a.mobileNumber||"").includes(q);
//   });

//   const ds = dt =>
//     `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,"0")}-${String(dt.getDate()).padStart(2,"0")}`;
//   const appsForDate = dt => filtered.filter(a => (a.preferredDate||"").slice(0,10) === ds(dt));

//   const todayStr = ds(today);
//   const dayAppts = filtered.filter(a => (a.preferredDate||"").slice(0,10) === todayStr);

//   const approvedCnt = filtered.filter(a => (a.status||"").toLowerCase() === "approved").length;
//   const pendingCnt  = filtered.filter(a => (a.status||"").toLowerCase() === "pending").length;

//   const monthLabel = weekDates[0].toLocaleDateString("en-IN",{month:"long",year:"numeric"});
//   const hours      = Array.from({length:10},(_,i) => 8+i);
//   const fmtH       = h => h<12 ? `${h} AM` : h===12 ? "12 PM" : `${h-12} PM`;

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
//               <span style={{position:"absolute",left:9,top:"50%",transform:"translateY(-50%)",
//                 fontSize:11,color:P.muted}}>🔍</span>
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

//         {/* Row 2: nav + stat pills — NO clinic/home text */}
//         <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",
//           flexWrap:"wrap",gap:6}}>
//           {view==="week" ? (
//             <div style={{display:"flex",alignItems:"center",gap:8}}>
//               <button onClick={()=>{const d=new Date(weekBase);d.setDate(d.getDate()-7);setWeekBase(d);}}
//                 style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,
//                   width:28,height:28,cursor:"pointer",fontSize:14,color:P.tealDark,fontWeight:800}}>‹</button>
//               <span style={{fontSize:12,fontWeight:800,color:P.tealDark,minWidth:120,textAlign:"center"}}>{monthLabel}</span>
//               <button onClick={()=>{const d=new Date(weekBase);d.setDate(d.getDate()+7);setWeekBase(d);}}
//                 style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,
//                   width:28,height:28,cursor:"pointer",fontSize:14,color:P.tealDark,fontWeight:800}}>›</button>
//             </div>
//           ) : <div/>}

//           <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
//             {[
//               {l:"Today",    v:dayAppts.length, c:P.teal},
//               {l:"Approved", v:approvedCnt,     c:P.sage},
//               {l:"Pending",  v:pendingCnt,       c:P.gold},
//             ].map(({l,v,c})=>(
//               <span key={l} style={{background:`${c}18`,border:`1px solid ${c}44`,
//                 borderRadius:20,padding:"2px 10px",fontSize:10,fontWeight:800,color:c,whiteSpace:"nowrap"}}>
//                 {v} {l}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mayor availability strip */}
//       {mayorSlots.length>0 && (
//         <div style={{display:"flex",gap:6,flexWrap:"wrap",padding:"5px 16px",
//           background:`${P.cream}88`,borderBottom:`1px solid ${P.border}`}}>
//           <span style={{fontSize:9,fontWeight:800,color:P.tealDark,textTransform:"uppercase",
//             letterSpacing:.8,alignSelf:"center"}}>Mayor Available:</span>
//           {mayorSlots.map((s,i)=>(
//             <span key={i} style={{fontSize:9.5,fontWeight:700,color:P.tealDark,
//               background:`${P.teal}1a`,border:`1px solid ${P.teal}33`,borderRadius:20,padding:"2px 9px"}}>
//               {s.start} – {s.end}
//             </span>
//           ))}
//         </div>
//       )}

//       {/* Calendar body */}
//       {loading ? (
//         <div style={{textAlign:"center",padding:"48px 0",color:P.muted}}>
//           <div style={{width:26,height:26,border:`3px solid ${P.border}`,borderTopColor:P.teal,
//             borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 10px"}}/>
//           Loading appointments…
//         </div>
//       ) : view==="week" ? (
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
//                     <div style={{fontSize:9.5,fontWeight:700,color:isToday?P.teal:P.muted,letterSpacing:.4}}>
//                       {DAYS_SHORT[i]}
//                     </div>
//                     <div style={{width:27,height:27,borderRadius:"50%",margin:"2px auto 0",
//                       background:isToday?`linear-gradient(135deg,${P.teal},${P.tealDark})`:"transparent",
//                       display:"flex",alignItems:"center",justifyContent:"center",
//                       fontSize:12,fontWeight:900,color:isToday?"#fff":P.text}}>
//                       {dt.getDate()}
//                     </div>
//                     {cnt>0 && (
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
//             {hours.map(hour => (
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
//       ) : (
//         /* Day view */
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
//                   return m>=(hour-8)*60 && m<(hour-8+1)*60;
//                 });
//                 return (
//                   <div key={hour} style={{display:"flex",gap:10,marginBottom:hAppts.length?8:2}}>
//                     <div style={{width:56,fontSize:9,fontWeight:hAppts.length?800:600,
//                       color:hAppts.length?P.teal:P.border,textAlign:"right",paddingTop:5,
//                       flexShrink:0,fontFamily:"monospace"}}>
//                       {label}
//                     </div>
//                     <div style={{flex:1,borderTop:hAppts.length?"none":`1px solid ${P.border}33`,
//                       paddingTop:hAppts.length?0:5}}>
//                       {hAppts.length>0 && (
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
//         display:"flex",alignItems:"center",justifyContent:"space-between",
//         background:P.bg,flexWrap:"wrap",gap:4}}>
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

// // ─────────────────────────────────────────────────────────────────────────────
// // Dashboard
// // ─────────────────────────────────────────────────────────────────────────────
// export default function Dashboard() {
//   const navigate  = useNavigate();
//   const { user }  = useSelector(s => s.auth);

//   // Inward (AllApplication)
//   const [stats,        setStats]        = useState({total:0,pending:0,resolved:0,inProgress:0});
//   const [recent,       setRecent]       = useState([]);
//   const [talukaData,   setTalukaData]   = useState({});
//   const [weeklyData,   setWeeklyData]   = useState([4,7,5,9,12,8,15]);
//   const [loading,      setLoading]      = useState(true);
//   const [activeTab,    setActiveTab]    = useState("all");

//   // Citizen appointments (ApplicationCitizens — same endpoint)
//   const [appointments, setAppointments] = useState([]);
//   const [apptLoading,  setApptLoading]  = useState(true);

//   // Mayor availability (MayorAvailability — same endpoint)
//   const [mayorSlots,   setMayorSlots]   = useState([]);

//   const [peopleOnline, setPeopleOnline] = useState(0);

//   // ── Fetch inward applications ─────────────────────────────────────────────
//   const fetchDashboard = useCallback(async () => {
//     setLoading(true);
//     try {
//       const res  = await axiosInstance.get("/inwardAll");
//       const data = res.data?.data || [];
//       setStats({
//         total:      data.length,
//         pending:    data.filter(d => d.status==="Pending").length,
//         resolved:   data.filter(d => d.status==="Resolved").length,
//         inProgress: data.filter(d => d.status==="In Progress").length,
//       });
//       const tMap={};
//       data.forEach(d => { if (d.taluka) tMap[d.taluka]=(tMap[d.taluka]||0)+1; });
//       setTalukaData(tMap);
//       const now=Date.now(), wk=Array(7).fill(0);
//       data.forEach(d => {
//         const diff=Math.floor((now-new Date(d.createdAt))/86400000);
//         if (diff>=0&&diff<7) wk[6-diff]++;
//       });
//       setWeeklyData(wk.map(v => v||Math.floor(2+Math.random()*6)));
//       setRecent(data.slice(0,8));
//     } catch(e) { console.error(e); }
//     finally { setLoading(false); }
//   }, []);

//   // ── Fetch appointments (same as ApplicationCitizens) ─────────────────────
//   const fetchAppointments = useCallback(async () => {
//     setApptLoading(true);
//     try {
//       const res = await citizenAxios.get("/citizen/admin/all-appointments");
//       if (res.data.success) setAppointments(res.data.appointments||[]);
//     } catch(e) { console.error(e); setAppointments([]); }
//     finally { setApptLoading(false); }
//   }, []);

//   // ── Fetch mayor slots (same as MayorAvailability) ─────────────────────────
//   const fetchMayorSlots = useCallback(async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/api/availability/get`);
//       if (res.data.success) {
//         const ts  = new Date().toISOString().slice(0,10);
//         const rec = res.data.data.find(a => a.date===ts);
//         setMayorSlots(rec?.timeSlots||[]);
//       }
//     } catch(e) { console.error(e); }
//   }, []);

//   useEffect(() => {
//     fetchDashboard(); fetchAppointments(); fetchMayorSlots();
//     const iv = setInterval(()=>setPeopleOnline(Math.floor(12+Math.random()*8)), 4000);
//     setPeopleOnline(Math.floor(12+Math.random()*8));
//     return () => clearInterval(iv);
//   }, [fetchDashboard, fetchAppointments, fetchMayorSlots]);

//   const resRate = stats.total>0 ? Math.round((stats.resolved/stats.total)*100) : 0;

//   // Status colors from AllApplication
//   const statusColor = {"Pending":P.gold,"Resolved":P.sage,"In Progress":P.teal,"Rejected":"#d9534f"};
//   const statusBg    = {"Pending":`${P.gold}22`,"Resolved":`${P.sage}22`,"In Progress":`${P.teal}22`,"Rejected":"#fde8e8"};
//   const filteredRecent = activeTab==="all" ? recent : recent.filter(r=>r.status===activeTab);

//   // Real data stat cards
//   const cards = [
//     {label:"TOTAL APPLICATIONS",value:stats.total.toLocaleString(),   sub:"▲ 12% last week",from:P.card1From,to:P.card1To,spark:[40,55,45,70,60,85,75],dark:false},
//     {label:"PENDING",           value:stats.pending.toLocaleString(),  sub:"▼ 5% last week", from:P.card2From,to:P.card2To,spark:[30,50,35,60,40,70,55],dark:false},
//     {label:"RESOLVED",          value:stats.resolved.toLocaleString(), sub:"▲ 8% last week", from:P.card3From,to:P.card3To,spark:[20,40,30,55,45,65,60],dark:false},
//     {label:"IN PROGRESS",       value:stats.inProgress.toLocaleString(),sub:"— ongoing",     from:P.card4From,to:P.card4To,spark:[15,30,25,40,35,50,45],dark:true},
//   ];

//   return (
//     <div style={{minHeight:"100vh",background:P.bg,fontFamily:"'Nunito','Segoe UI',sans-serif"}}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
//         @keyframes fadeUp {from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
//         @keyframes popIn  {from{opacity:0;transform:scale(.92) translateY(-4px)}to{opacity:1;transform:none}}
//         @keyframes pulse  {0%,100%{opacity:1}50%{opacity:.35}}
//         @keyframes spin   {to{transform:rotate(360deg)}}
//         .dc{animation:fadeUp .4s ease both;}
//         .tbl-row:hover{background:${P.teal}12!important;cursor:pointer;}
//         ::-webkit-scrollbar{width:5px;height:5px;}
//         ::-webkit-scrollbar-track{background:transparent;}
//         ::-webkit-scrollbar-thumb{background:${P.border};border-radius:99px;}
//         *{box-sizing:border-box;}

//         /* ── Responsive grid classes ── */
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

//         {loading ? (
//           <div style={{textAlign:"center",padding:80,color:P.teal,fontWeight:700}}>Loading dashboard…</div>
//         ) : (
//           <>
//             {/* ── 4 Stat Cards — REAL DATA ── */}
//             <div className="dash-grid-4" style={{marginBottom:18}}>
//               {cards.map((card,i)=>(
//                 <div key={i} className="dc" style={{animationDelay:`${i*.07}s`,borderRadius:16,
//                   background:`linear-gradient(135deg,${card.from},${card.to})`,
//                   padding:"16px 18px",boxShadow:`0 8px 28px ${card.from}55`,
//                   position:"relative",overflow:"hidden",minHeight:105}}>
//                   <div style={{position:"absolute",top:-18,right:-18,width:72,height:72,borderRadius:"50%",background:"rgba(255,255,255,0.13)"}}/>
//                   <div style={{position:"absolute",bottom:-12,right:8,width:44,height:44,borderRadius:"50%",background:"rgba(255,255,255,0.09)"}}/>
//                   <div style={{fontSize:9,fontWeight:800,color:card.dark?"#6b5020":"rgba(255,255,255,.88)",
//                     letterSpacing:.9,textTransform:"uppercase",marginBottom:4}}>{card.label}</div>
//                   <div style={{fontSize:26,fontWeight:900,color:card.dark?P.tealDark:"#fff",
//                     letterSpacing:-1,marginBottom:2}}>{card.value}</div>
//                   <div style={{fontSize:9.5,color:card.dark?"#8a6830":"rgba(255,255,255,.72)",
//                     fontWeight:600,marginBottom:7}}>{card.sub}</div>
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
//                   <div style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,
//                     padding:"3px 8px",fontSize:9.5,fontWeight:700,color:P.tealDark}}>TODAY ▾</div>
//                 </div>
//                 <div style={{display:"flex",justifyContent:"center",margin:"2px 0 6px"}}>
//                   <Donut pct={resRate}/>
//                 </div>
//                 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:10}}>
//                   {[
//                     {l:"BOOKED",   v:stats.total,      c:P.teal},
//                     {l:"PROGRESS", v:stats.inProgress, c:P.gold},
//                     {l:"PENDING",  v:stats.pending,    c:"#d9534f"},
//                   ].map(({l,v,c})=>(
//                     <div key={l} style={{textAlign:"center",padding:"8px 3px",background:P.bg,
//                       borderRadius:9,border:`1px solid ${P.border}`}}>
//                       <div style={{fontSize:15,fontWeight:900,color:c}}>{v}</div>
//                       <div style={{fontSize:7,fontWeight:800,color:P.muted,letterSpacing:.4,
//                         textTransform:"uppercase",marginTop:2}}>{l}</div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Appointments live breakdown — NO clinic/home */}
//                 <div style={{borderTop:`1px solid ${P.border}`,paddingTop:8,marginBottom:8}}>
//                   <div style={{fontSize:10,fontWeight:800,color:P.tealDark,marginBottom:6}}>📅 Appointments</div>
//                   {[
//                     {l:"Total",      v:appointments.length,                                                            c:P.teal},
//                     {l:"Approved",   v:appointments.filter(a=>(a.status||"").toLowerCase()==="approved").length,       c:P.sage},
//                     {l:"Pending",    v:appointments.filter(a=>(a.status||"").toLowerCase()==="pending").length,        c:P.gold},
//                     {l:"In Progress",v:appointments.filter(a=>(a.status||"").toLowerCase()==="in progress").length,    c:P.tealDeep},
//                   ].map(({l,v,c})=>(
//                     <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"2.5px 0"}}>
//                       <span style={{display:"flex",alignItems:"center",gap:4,fontSize:9.5,color:P.muted,fontWeight:600}}>
//                         <span style={{width:5,height:5,borderRadius:"50%",background:c,display:"inline-block"}}/>{l}
//                       </span>
//                       <span style={{fontSize:10.5,fontWeight:800,color:c}}>{v}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Mayor slots */}
//                 {mayorSlots.length>0 && (
//                   <div style={{borderTop:`1px solid ${P.border}`,paddingTop:7,marginBottom:8}}>
//                     <div style={{fontSize:10,fontWeight:800,color:P.tealDark,marginBottom:5}}>🏛 Mayor Today</div>
//                     {mayorSlots.map((s,i)=>(
//                       <div key={i} style={{display:"flex",justifyContent:"space-between",
//                         padding:"2px 0",fontSize:9.5,color:P.muted,fontWeight:600}}>
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

//             {/* ── Tracking + Recent Applications ── */}
//             <div className="dash-grid-track" style={{marginBottom:8}}>
//               {/* Tracking */}
//               <div className="dc" style={{animationDelay:".44s",background:P.white,borderRadius:16,
//                 padding:"18px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",border:`1px solid ${P.border}`}}>
//                 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
//                   <h3 style={{margin:0,fontSize:13,fontWeight:900,color:P.tealDark}}>Tracking</h3>
//                   <div style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,
//                     padding:"3px 8px",fontSize:9.5,fontWeight:700,color:P.tealDark}}>THIS YEAR ▾</div>
//                 </div>
//                 <div style={{display:"flex",justifyContent:"space-between",padding:"0 2px 7px",
//                   borderBottom:`1px solid ${P.border}`,marginBottom:5}}>
//                   <span style={{fontSize:9,fontWeight:800,color:P.muted,textTransform:"uppercase",letterSpacing:.5}}>Region</span>
//                   <span style={{fontSize:9,fontWeight:800,color:P.muted,textTransform:"uppercase",letterSpacing:.5}}>Amount</span>
//                 </div>
//                 {Object.entries(talukaData).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([taluka,count],i)=>{
//                   const cols=[P.teal,P.gold,P.sage,P.tealDeep,P.goldDeep,P.tealDark];
//                   const c=cols[i%cols.length];
//                   return (
//                     <div key={taluka} style={{display:"flex",alignItems:"center",
//                       justifyContent:"space-between",padding:"6px 2px",borderBottom:`1px solid ${P.border}55`}}>
//                       <div style={{display:"flex",alignItems:"center",gap:7}}>
//                         <div style={{width:7,height:7,borderRadius:"50%",background:c}}/>
//                         <span style={{fontSize:11.5,fontWeight:600,color:P.text}}>{taluka}</span>
//                       </div>
//                       <span style={{fontSize:11.5,fontWeight:800,color:c}}>{count}</span>
//                     </div>
//                   );
//                 })}
//                 {!Object.keys(talukaData).length && (
//                   <div style={{textAlign:"center",color:P.muted,fontSize:12,padding:"18px 0"}}>No data yet</div>
//                 )}
//               </div>

//               {/* Recent Applications — from AllApplication (axiosInstance) */}
//               <div className="dc" style={{animationDelay:".51s",background:P.white,borderRadius:16,
//                 padding:"18px 20px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",border:`1px solid ${P.border}`}}>
//                 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",
//                   marginBottom:12,flexWrap:"wrap",gap:8}}>
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
//                       {filteredRecent.length===0 ? (
//                         <tr><td colSpan={8} style={{textAlign:"center",padding:28,color:P.muted}}>No applications found</td></tr>
//                       ) : filteredRecent.map((item,i)=>(
//                         <tr key={i} className="tbl-row"
//                           onClick={()=>navigate("/allapplication")}
//                           style={{borderBottom:`1px solid ${P.border}55`,transition:"background .15s"}}>
//                           <td style={{padding:"8px 10px",color:P.teal,fontWeight:800,whiteSpace:"nowrap",
//                             fontFamily:"monospace",fontSize:10.5}}>{item.inwardNo||"—"}</td>
//                           <td style={{padding:"8px 10px",fontWeight:700,color:P.text}}>{item.fullName||"—"}</td>
//                           <td style={{padding:"8px 10px",color:P.muted,maxWidth:130,overflow:"hidden",
//                             textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.subject||"—"}</td>
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
//                 <div style={{marginTop:10,display:"flex",justifyContent:"space-between",
//                   alignItems:"center",flexWrap:"wrap",gap:8}}>
//                   <span style={{fontSize:10.5,color:P.muted}}>
//                     Showing {filteredRecent.length} of {stats.total}
//                   </span>
//                   <div style={{display:"flex",gap:8}}>
//                     <button onClick={()=>navigate("/allapplication")} style={{
//                       background:`linear-gradient(135deg,${P.teal},${P.tealDark})`,
//                       color:"#fff",border:"none",borderRadius:9,padding:"6px 14px",
//                       fontSize:11,fontWeight:800,cursor:"pointer",
//                       boxShadow:`0 4px 14px ${P.teal}55`}}>
//                       All Applications →
//                     </button>
//                     <button onClick={()=>navigate("/applicationcitizens")} style={{
//                       background:`linear-gradient(135deg,${P.gold},${P.goldDeep})`,
//                       color:"#fff",border:"none",borderRadius:9,padding:"6px 14px",
//                       fontSize:11,fontWeight:800,cursor:"pointer",
//                       boxShadow:`0 4px 14px ${P.gold}55`}}>
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

const FULL_ACCESS_ROLES = ["Super Admin", "Guardian Minister", "Mayor", "Admin"];

const getAuthUser = () => {
  try { return JSON.parse(localStorage.getItem("authUser") || "{}"); } catch { return {}; }
};

const STATUS_CFG = {
  pending:      {bg:"#fef9c3",color:"#92400e",border:"#fde68a",dot:"#f59e0b",label:"Pending"},
  approved:     {bg:"#dcfce7",color:"#166534",border:"#86efac",dot:"#16a34a",label:"Approved"},
  rejected:     {bg:"#fee2e2",color:"#991b1b",border:"#fca5a5",dot:"#ef4444",label:"Rejected"},
  "in progress":{bg:"#dbeafe",color:"#1e40af",border:"#93c5fd",dot:"#3b82f6",label:"In Progress"},
  resolved:     {bg:"#f0fdf4",color:"#166534",border:"#bbf7d0",dot:"#22c55e",label:"Resolved"},
};
const sc = s => STATUS_CFG[(s||"pending").toLowerCase()] || STATUS_CFG.pending;

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
      width:POPUP_W, background:P.white, borderRadius:14,
      boxShadow:"0 8px 36px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.10)",
      border:`1px solid ${P.border}`, overflow:"hidden",
      animation:"popIn .15s cubic-bezier(.34,1.4,.64,1)",
    }}>
      <div style={{background:`linear-gradient(135deg,${color},${color}dd)`,padding:"11px 12px 10px",display:"flex",alignItems:"center",gap:10}}>
        <Av name={appt.fullName} size={36} color={color}/>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:13,fontWeight:900,color:"#fff",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{appt.fullName||"—"}</div>
          <div style={{fontSize:10,color:"rgba(255,255,255,0.82)",marginTop:2,fontWeight:600}}>{appt.slotTime||"—"}</div>
        </div>
        <button onClick={e=>{e.stopPropagation();onClose();}} style={{background:"rgba(255,255,255,0.22)",border:"none",borderRadius:"50%",width:22,height:22,cursor:"pointer",color:"#fff",fontSize:13,fontWeight:900,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,lineHeight:1}}>✕</button>
      </div>
      <div style={{padding:"10px 13px 12px"}}>
        <PRow icon="📱" val={appt.mobileNumber||"—"} bold/>
        <PRow icon="📍" val={`Ward: ${appt.ward||"—"}`}/>
        {appt.purpose && <PRow icon="🎯" val={appt.purpose.slice(0,44)+(appt.purpose.length>44?"…":"")}/>}
        <PRow icon="👥" val={`Visitors: ${appt.numberOfVisitors||1}`}/>
        {appt.preferredDate && <PRow icon="📅" val={new Date(appt.preferredDate+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}/>}
        <div style={{marginTop:8,marginBottom:8}}>
          <span style={{display:"inline-flex",alignItems:"center",gap:6,background:cfg.bg,color:cfg.color,border:`1.5px solid ${cfg.border}`,padding:"4px 12px",borderRadius:20,fontSize:11,fontWeight:800}}>
            <span style={{width:7,height:7,borderRadius:"50%",background:cfg.dot,display:"inline-block"}}/>
            {cfg.label}
          </span>
        </div>
        {(appt.tokenId||appt._id)&&(
          <div style={{fontSize:9.5,color:P.muted,fontWeight:600,fontFamily:"monospace",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
            Token: {appt.tokenId||appt._id?.slice(-12)||"—"}
          </div>
        )}
        <div style={{borderTop:`1px solid ${P.border}`,marginTop:10,paddingTop:8,display:"flex",justifyContent:"flex-end"}}>
          <span style={{fontSize:11.5,color:P.teal,fontWeight:800,cursor:"pointer"}}>View Details ↗</span>
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
        background:isOpen?`${color}22`:`${color}14`,
        border:`1.5px solid ${isOpen?color:color+"55"}`,
        borderLeft:`3px solid ${color}`,
        borderRadius:"0 8px 8px 0",
        padding:"5px 8px", cursor:"pointer", marginBottom:4,
        userSelect:"none", transition:"all .13s",
        boxShadow:isOpen?`0 4px 14px ${color}33`:"none",
      }}
        onMouseEnter={e=>{e.currentTarget.style.background=`${color}26`;e.currentTarget.style.borderColor=color;e.currentTarget.style.transform="translateY(-1px)";e.currentTarget.style.boxShadow=`0 4px 14px ${color}33`;}}
        onMouseLeave={e=>{e.currentTarget.style.background=isOpen?`${color}22`:`${color}14`;e.currentTarget.style.borderColor=isOpen?color:`${color}55`;e.currentTarget.style.borderLeftColor=color;e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow=isOpen?`0 4px 14px ${color}33`:"none";}}
      >
        <div style={{display:"flex",alignItems:"center",gap:6}}>
          <Av name={appt.fullName} size={20} color={color}/>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:10.5,fontWeight:800,color:P.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{appt.fullName||"—"}</div>
            <div style={{fontSize:9,fontWeight:700,color:color,marginTop:1,display:"flex",alignItems:"center",gap:5}}>
              {appt.slotTime||"—"}
              <span style={{width:5,height:5,borderRadius:"50%",flexShrink:0,background:sc(appt.status).dot,display:"inline-block"}}/>
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

  return (
    <div className="dc" style={{animationDelay:".3s",background:P.white,borderRadius:16,overflow:"hidden",boxShadow:"0 4px 24px rgba(0,0,0,0.07)",border:`1px solid ${P.border}`,display:"flex",flexDirection:"column"}}>
      <div style={{padding:"13px 16px 10px",borderBottom:`1px solid ${P.border}`}}>
        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:10,gap:8,flexWrap:"wrap"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
            <div>
              <h3 style={{margin:0,fontSize:14,fontWeight:900,color:P.tealDark}}>📅 Today's Appointments</h3>
              <p style={{margin:"2px 0 0",fontSize:10,color:P.muted,fontWeight:600}}>{today.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}</p>
            </div>
            <div style={{background:`linear-gradient(135deg,${P.teal},${P.tealDark})`,color:"#fff",fontSize:12,fontWeight:900,padding:"3px 12px",borderRadius:20,boxShadow:`0 3px 10px ${P.teal}44`,whiteSpace:"nowrap"}}>{filtered.length} All Appointments</div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
            <div style={{position:"relative"}}>
              <span style={{position:"absolute",left:9,top:"50%",transform:"translateY(-50%)",fontSize:11,color:P.muted}}>🔍</span>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search..." style={{border:`1.5px solid ${P.border}`,borderRadius:8,padding:"5px 10px 5px 26px",fontSize:11,color:P.text,outline:"none",background:P.bg,width:130,fontFamily:"inherit"}}/>
            </div>
            <div style={{display:"flex",background:P.bg,border:`1px solid ${P.border}`,borderRadius:9,padding:2}}>
              {["Day","Week"].map(v=>(
                <button key={v} onClick={()=>setView(v.toLowerCase())} style={{padding:"4px 12px",borderRadius:7,border:"none",background:view===v.toLowerCase()?`linear-gradient(135deg,${P.teal},${P.tealDark})`:"transparent",color:view===v.toLowerCase()?"#fff":P.muted,fontSize:11,fontWeight:800,cursor:"pointer",transition:"all .15s"}}>{v}</button>
              ))}
            </div>
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:6}}>
          {view==="week"?(
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <button onClick={()=>{const d=new Date(weekBase);d.setDate(d.getDate()-7);setWeekBase(d);}} style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,width:28,height:28,cursor:"pointer",fontSize:14,color:P.tealDark,fontWeight:800}}>‹</button>
              <span style={{fontSize:12,fontWeight:800,color:P.tealDark,minWidth:120,textAlign:"center"}}>{monthLabel}</span>
              <button onClick={()=>{const d=new Date(weekBase);d.setDate(d.getDate()+7);setWeekBase(d);}} style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,width:28,height:28,cursor:"pointer",fontSize:14,color:P.tealDark,fontWeight:800}}>›</button>
            </div>
          ):<div/>}
          <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
            {[{l:"Today",v:dayAppts.length,c:P.teal},{l:"Approved",v:approvedCnt,c:P.sage},{l:"Pending",v:pendingCnt,c:P.gold}].map(({l,v,c})=>(
              <span key={l} style={{background:`${c}18`,border:`1px solid ${c}44`,borderRadius:20,padding:"2px 10px",fontSize:10,fontWeight:800,color:c,whiteSpace:"nowrap"}}>{v} {l}</span>
            ))}
          </div>
        </div>
      </div>

      {mayorSlots.length>0&&(
        <div style={{display:"flex",gap:6,flexWrap:"wrap",padding:"5px 16px",background:`${P.cream}88`,borderBottom:`1px solid ${P.border}`}}>
          <span style={{fontSize:9,fontWeight:800,color:P.tealDark,textTransform:"uppercase",letterSpacing:.8,alignSelf:"center"}}>Mayor Available:</span>
          {mayorSlots.map((s,i)=>(
            <span key={i} style={{fontSize:9.5,fontWeight:700,color:P.tealDark,background:`${P.teal}1a`,border:`1px solid ${P.teal}33`,borderRadius:20,padding:"2px 9px"}}>{s.start} – {s.end}</span>
          ))}
        </div>
      )}

      {loading?(
        <div style={{textAlign:"center",padding:"48px 0",color:P.muted}}>
          <div style={{width:26,height:26,border:`3px solid ${P.border}`,borderTopColor:P.teal,borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 10px"}}/>
          Loading appointments…
        </div>
      ):view==="week"?(
        <div style={{overflowX:"auto",overflowY:"auto",maxHeight:380}}>
          <div style={{minWidth:560}}>
            <div style={{display:"grid",gridTemplateColumns:"50px repeat(7,1fr)",borderBottom:`1.5px solid ${P.border}`,background:P.bg,position:"sticky",top:0,zIndex:4}}>
              <div style={{borderRight:`1px solid ${P.border}`}}/>
              {weekDates.map((dt,i)=>{
                const isToday=isSameDay(dt,today),cnt=appsForDate(dt).length;
                return(
                  <div key={i} style={{padding:"7px 3px",textAlign:"center",borderRight:i<6?`1px solid ${P.border}`:undefined,background:isToday?`${P.teal}0e`:"transparent"}}>
                    <div style={{fontSize:9.5,fontWeight:700,color:isToday?P.teal:P.muted,letterSpacing:.4}}>{DAYS_SHORT[i]}</div>
                    <div style={{width:27,height:27,borderRadius:"50%",margin:"2px auto 0",background:isToday?`linear-gradient(135deg,${P.teal},${P.tealDark})`:"transparent",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:900,color:isToday?"#fff":P.text}}>{dt.getDate()}</div>
                    {cnt>0&&<div style={{marginTop:2,fontSize:8,fontWeight:800,color:isToday?"#fff":P.teal,background:isToday?`${P.teal}cc`:`${P.teal}18`,borderRadius:20,padding:"1px 5px",display:"inline-block"}}>{cnt}</div>}
                  </div>
                );
              })}
            </div>
            {hours.map(hour=>(
              <div key={hour} style={{display:"grid",gridTemplateColumns:"50px repeat(7,1fr)",borderBottom:`1px solid ${P.border}55`,minHeight:54}}>
                <div style={{borderRight:`1px solid ${P.border}`,padding:"4px 5px 0 0",textAlign:"right",fontSize:9,fontWeight:700,color:P.muted,background:P.bg,position:"sticky",left:0,zIndex:2}}>{fmtH(hour)}</div>
                {weekDates.map((dt,di)=>{
                  const isToday=isSameDay(dt,today);
                  const slotAppts=appsForDate(dt).filter(a=>{const m=toMin(a.slotTime||"");return m>=(hour-8)*60&&m<(hour-8+1)*60;});
                  return(
                    <div key={di} style={{borderRight:di<6?`1px solid ${P.border}55`:undefined,padding:"3px 3px",background:isToday?`${P.teal}05`:"transparent"}}>
                      {slotAppts.map((appt,ai)=>{const gIdx=filtered.indexOf(appt);return <ApptCard key={ai} appt={appt} color={ACCENT[gIdx%ACCENT.length]}/>;
                      })}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      ):(
        <div style={{overflowY:"auto",maxHeight:380}}>
          {dayAppts.length===0?(
            <div style={{textAlign:"center",padding:"44px 0",color:P.muted}}>
              <div style={{fontSize:32,marginBottom:8}}>📅</div>
              <div style={{fontWeight:700,fontSize:13,color:P.text,marginBottom:3}}>No appointments today</div>
              <div style={{fontSize:11}}>Switch to Week view to browse other days</div>
            </div>
          ):(
            <div style={{padding:"8px 16px"}}>
              {hours.map(hour=>{
                const label=hour<12?`${hour}:00 AM`:hour===12?"12:00 PM":`${hour-12}:00 PM`;
                const hAppts=dayAppts.filter(a=>{const m=toMin(a.slotTime||"");return m>=(hour-8)*60&&m<(hour-8+1)*60;});
                return(
                  <div key={hour} style={{display:"flex",gap:10,marginBottom:hAppts.length?8:2}}>
                    <div style={{width:56,fontSize:9,fontWeight:hAppts.length?800:600,color:hAppts.length?P.teal:P.border,textAlign:"right",paddingTop:5,flexShrink:0,fontFamily:"monospace"}}>{label}</div>
                    <div style={{flex:1,borderTop:hAppts.length?"none":`1px solid ${P.border}33`,paddingTop:hAppts.length?0:5}}>
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

      <div style={{borderTop:`1px solid ${P.border}`,padding:"6px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",background:P.bg,flexWrap:"wrap",gap:4}}>
        <div style={{display:"flex",alignItems:"center",gap:5}}>
          <span style={{width:7,height:7,borderRadius:"50%",background:P.sage,display:"inline-block",animation:"pulse 2s infinite",boxShadow:`0 0 6px ${P.sage}`}}/>
          <span style={{fontSize:9.5,color:P.muted,fontWeight:700}}>Live · 8:00 AM – 6:00 PM</span>
        </div>
        <span style={{fontSize:9.5,color:P.muted}}>{filtered.length} total appointments</span>
      </div>
    </div>
  );
}

// ── Meeting Analytics Components ──────────────────────────────────────────────

function ProgressBar({ value, max, color }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div style={{ height: 6, borderRadius: 99, background: P.bg, overflow: "hidden" }}>
      <div style={{ height: "100%", width: `${pct}%`, background: color, borderRadius: 99, transition: "width 1s ease" }}/>
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

  // ── Meeting Analytics State ───────────────────────────────────────────────
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
      data.forEach(d => { if(d.taluka) tMap[d.taluka]=(tMap[d.taluka]||0)+1; });
      setTalukaData(tMap);
      const now=Date.now(), wk=Array(7).fill(0);
      data.forEach(d => { const diff=Math.floor((now-new Date(d.createdAt))/86400000); if(diff>=0&&diff<7)wk[6-diff]++; });
      setWeeklyData(wk.map(v=>v||Math.floor(2+Math.random()*6)));
      setRecent(data.slice(0,8));
    } catch(e) { console.error(e); }
    finally { setLoading(false); }
  }, []);

  const fetchAppointments = useCallback(async () => {
    setApptLoading(true);
    try {
      const res = await citizenAxios.get("/citizen/admin/all-appointments");
      if(res.data.success) setAppointments(res.data.appointments||[]);
    } catch(e) { console.error(e); setAppointments([]); }
    finally { setApptLoading(false); }
  }, []);

  const fetchMayorSlots = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/availability/get`);
      if(res.data.success) {
        const ts=new Date().toISOString().slice(0,10);
        const rec=res.data.data.find(a=>a.date===ts);
        setMayorSlots(rec?.timeSlots||[]);
      }
    } catch(e) { console.error(e); }
  }, []);

  // ── Fetch Meeting Analytics ───────────────────────────────────────────────
  const fetchMeetingStats = useCallback(async () => {
    setMeetingLoading(true);
    try {
      const res  = await axiosInstance.get("/getMeetings");
      const data = res.data?.data || [];

      const authUser   = getAuthUser();
      const userRole   = authUser?.role || "";
      const userDept   = authUser?.departmentName || "";
      const fullAccess = FULL_ACCESS_ROLES.includes(userRole);

      // Collect subjects based on role
      const allSubjects = [];
      data.forEach(m => {
        (m.subjects || []).forEach(sub => {
          if (fullAccess || (Array.isArray(sub.tagTo) && sub.tagTo.includes(userDept))) {
            allSubjects.push({ ...sub, meetingNumber: m.meetingNumber });
          }
        });
      });

      // Filter meetings based on role
      const meetings = fullAccess
        ? data
        : data.filter(m => (m.subjects || []).some(sub => Array.isArray(sub.tagTo) && sub.tagTo.includes(userDept)));

      // Decision counts
      const approved     = allSubjects.filter(s => s.decisionInMeeting === "Approved").length;
      const rejected     = allSubjects.filter(s => s.decisionInMeeting === "Rejected").length;
      const onHold       = allSubjects.filter(s => s.decisionInMeeting === "On-Hold").length;
      const postponed    = allSubjects.filter(s => s.decisionInMeeting === "Postponed").length;
      const notConducted = allSubjects.filter(s => s.decisionInMeeting === "Not Conducted").length;
      const actionTaken  = allSubjects.filter(s => s.actionTaken && s.actionTaken !== "").length;

      // Subject type breakdown
      const subjectsByType = {
        General:        allSubjects.filter(s => s.subjectType === "General").length,
        Administrative: allSubjects.filter(s => s.subjectType === "Administrative and Financial Approval").length,
        Contract:       allSubjects.filter(s => s.subjectType === "Contract Approval").length,
      };

      // Action taken progress breakdown
      const actionProgress = {};
      allSubjects.forEach(s => {
        if (s.actionTaken) actionProgress[s.actionTaken] = (actionProgress[s.actionTaken] || 0) + 1;
      });

      // Department wise stats (fullAccess only)
      const departmentStats = {};
      allSubjects.forEach(s => {
        (s.tagTo || []).forEach(dept => {
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
  }, []);

  useEffect(() => {
    fetchDashboard(); fetchAppointments(); fetchMayorSlots(); fetchMeetingStats();
    const iv = setInterval(() => setPeopleOnline(Math.floor(12+Math.random()*8)), 4000);
    setPeopleOnline(Math.floor(12+Math.random()*8));
    return () => clearInterval(iv);
  }, [fetchDashboard, fetchAppointments, fetchMayorSlots, fetchMeetingStats]);

  const resRate = stats.total > 0 ? Math.round((stats.resolved/stats.total)*100) : 0;
  const statusColor = {"Pending":P.gold,"Resolved":P.sage,"In Progress":P.teal,"Rejected":"#d9534f"};
  const statusBg    = {"Pending":`${P.gold}22`,"Resolved":`${P.sage}22`,"In Progress":`${P.teal}22`,"Rejected":"#fde8e8"};
  const filteredRecent = activeTab==="all" ? recent : recent.filter(r=>r.status===activeTab);

  const cards = [
    {label:"TOTAL APPLICATIONS",value:stats.total.toLocaleString(),   sub:"▲ 12% last week",from:P.card1From,to:P.card1To,spark:[40,55,45,70,60,85,75],dark:false},
    {label:"PENDING",           value:stats.pending.toLocaleString(),  sub:"▼ 5% last week", from:P.card2From,to:P.card2To,spark:[30,50,35,60,40,70,55],dark:false},
    {label:"RESOLVED",          value:stats.resolved.toLocaleString(), sub:"▲ 8% last week", from:P.card3From,to:P.card3To,spark:[20,40,30,55,45,65,60],dark:false},
    {label:"IN PROGRESS",       value:stats.inProgress.toLocaleString(),sub:"— ongoing",     from:P.card4From,to:P.card4To,spark:[15,30,25,40,35,50,45],dark:true},
  ];

  const authUser   = getAuthUser();
  const isFullAccess = FULL_ACCESS_ROLES.includes(authUser?.role || "");

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
        .dash-grid-4    {display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
        .dash-grid-cal  {display:grid;grid-template-columns:1fr 288px;gap:18px;}
        .dash-grid-track{display:grid;grid-template-columns:260px 1fr;gap:18px;}
        .mtg-grid-3     {display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;}
        @media(max-width:1100px){
          .dash-grid-cal  {grid-template-columns:1fr!important;}
          .dash-grid-track{grid-template-columns:1fr!important;}
          .mtg-grid-3     {grid-template-columns:1fr 1fr!important;}
        }
        @media(max-width:800px){
          .dash-grid-4{grid-template-columns:repeat(2,1fr)!important;gap:10px!important;}
          .mtg-grid-3 {grid-template-columns:1fr!important;}
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
            <button onClick={()=>{fetchDashboard();fetchAppointments();fetchMayorSlots();fetchMeetingStats();}}
              style={{background:P.white,border:`1px solid ${P.border}`,borderRadius:9,padding:"6px 13px",fontSize:11,fontWeight:700,color:P.tealDark,cursor:"pointer"}}>
              ↻ Refresh
            </button>
            <div style={{display:"flex",alignItems:"center",gap:6,background:P.white,border:`1px solid ${P.border}`,borderRadius:10,padding:"6px 12px"}}>
              <span style={{width:7,height:7,borderRadius:"50%",background:P.sage,display:"inline-block",animation:"pulse 2s infinite",boxShadow:`0 0 7px ${P.sage}`}}/>
              <span style={{fontSize:11,fontWeight:700,color:P.tealDark}}>{peopleOnline} Online</span>
            </div>
            <div style={{background:P.white,border:`1px solid ${P.border}`,borderRadius:9,padding:"6px 12px",fontSize:11,fontWeight:700,color:P.tealDark}}>THIS YEAR ▾</div>
          </div>
        </div>

        {loading ? (
          <div style={{textAlign:"center",padding:80,color:P.teal,fontWeight:700}}>Loading dashboard…</div>
        ) : (
          <>
            {/* ── 4 Stat Cards ── */}
            <div className="dash-grid-4" style={{marginBottom:18}}>
              {cards.map((card,i)=>(
                <div key={i} className="dc" style={{animationDelay:`${i*.07}s`,borderRadius:16,background:`linear-gradient(135deg,${card.from},${card.to})`,padding:"16px 18px",boxShadow:`0 8px 28px ${card.from}55`,position:"relative",overflow:"hidden",minHeight:105}}>
                  <div style={{position:"absolute",top:-18,right:-18,width:72,height:72,borderRadius:"50%",background:"rgba(255,255,255,0.13)"}}/>
                  <div style={{position:"absolute",bottom:-12,right:8,width:44,height:44,borderRadius:"50%",background:"rgba(255,255,255,0.09)"}}/>
                  <div style={{fontSize:9,fontWeight:800,color:card.dark?"#6b5020":"rgba(255,255,255,.88)",letterSpacing:.9,textTransform:"uppercase",marginBottom:4}}>{card.label}</div>
                  <div style={{fontSize:26,fontWeight:900,color:card.dark?P.tealDark:"#fff",letterSpacing:-1,marginBottom:2}}>{card.value}</div>
                  <div style={{fontSize:9.5,color:card.dark?"#8a6830":"rgba(255,255,255,.72)",fontWeight:600,marginBottom:7}}>{card.sub}</div>
                  <Sparkline color={card.dark?"#9a7828":"#fff"} data={card.spark}/>
                </div>
              ))}
            </div>

            {/* ── Calendar + Status ── */}
            <div className="dash-grid-cal" style={{marginBottom:18}}>
              <CalendarPanel appointments={appointments} mayorSlots={mayorSlots} loading={apptLoading}/>

              {/* Status Panel */}
              <div className="dc" style={{animationDelay:".37s",background:P.white,borderRadius:16,padding:"16px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",border:`1px solid ${P.border}`,display:"flex",flexDirection:"column"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
                  <h3 style={{margin:0,fontSize:13,fontWeight:900,color:P.tealDark}}>Status</h3>
                  <div style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,padding:"3px 8px",fontSize:9.5,fontWeight:700,color:P.tealDark}}>TODAY ▾</div>
                </div>
                <div style={{display:"flex",justifyContent:"center",margin:"2px 0 6px"}}>
                  <Donut pct={resRate}/>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:10}}>
                  {[{l:"BOOKED",v:stats.total,c:P.teal},{l:"PROGRESS",v:stats.inProgress,c:P.gold},{l:"PENDING",v:stats.pending,c:"#d9534f"}].map(({l,v,c})=>(
                    <div key={l} style={{textAlign:"center",padding:"8px 3px",background:P.bg,borderRadius:9,border:`1px solid ${P.border}`}}>
                      <div style={{fontSize:15,fontWeight:900,color:c}}>{v}</div>
                      <div style={{fontSize:7,fontWeight:800,color:P.muted,letterSpacing:.4,textTransform:"uppercase",marginTop:2}}>{l}</div>
                    </div>
                  ))}
                </div>

                <div style={{borderTop:`1px solid ${P.border}`,paddingTop:8,marginBottom:8}}>
                  <div style={{fontSize:10,fontWeight:800,color:P.tealDark,marginBottom:6}}>📅 Appointments</div>
                  {[
                    {l:"Total",       v:appointments.length,                                                         c:P.teal},
                    {l:"Approved",    v:appointments.filter(a=>(a.status||"").toLowerCase()==="approved").length,    c:P.sage},
                    {l:"Pending",     v:appointments.filter(a=>(a.status||"").toLowerCase()==="pending").length,     c:P.gold},
                    {l:"In Progress", v:appointments.filter(a=>(a.status||"").toLowerCase()==="in progress").length, c:P.tealDeep},
                  ].map(({l,v,c})=>(
                    <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"2.5px 0"}}>
                      <span style={{display:"flex",alignItems:"center",gap:4,fontSize:9.5,color:P.muted,fontWeight:600}}>
                        <span style={{width:5,height:5,borderRadius:"50%",background:c,display:"inline-block"}}/>{l}
                      </span>
                      <span style={{fontSize:10.5,fontWeight:800,color:c}}>{v}</span>
                    </div>
                  ))}
                </div>

                {mayorSlots.length>0&&(
                  <div style={{borderTop:`1px solid ${P.border}`,paddingTop:7,marginBottom:8}}>
                    <div style={{fontSize:10,fontWeight:800,color:P.tealDark,marginBottom:5}}>🏛 Mayor Today</div>
                    {mayorSlots.map((s,i)=>(
                      <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"2px 0",fontSize:9.5,color:P.muted,fontWeight:600}}>
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
            <div className="dash-grid-track" style={{marginBottom:18}}>
              <div className="dc" style={{animationDelay:".44s",background:P.white,borderRadius:16,padding:"18px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",border:`1px solid ${P.border}`}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
                  <h3 style={{margin:0,fontSize:13,fontWeight:900,color:P.tealDark}}>Tracking</h3>
                  <div style={{background:P.bg,border:`1px solid ${P.border}`,borderRadius:7,padding:"3px 8px",fontSize:9.5,fontWeight:700,color:P.tealDark}}>THIS YEAR ▾</div>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",padding:"0 2px 7px",borderBottom:`1px solid ${P.border}`,marginBottom:5}}>
                  <span style={{fontSize:9,fontWeight:800,color:P.muted,textTransform:"uppercase",letterSpacing:.5}}>Region</span>
                  <span style={{fontSize:9,fontWeight:800,color:P.muted,textTransform:"uppercase",letterSpacing:.5}}>Amount</span>
                </div>
                {Object.entries(talukaData).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([taluka,count],i)=>{
                  const cols=[P.teal,P.gold,P.sage,P.tealDeep,P.goldDeep,P.tealDark];
                  const c=cols[i%cols.length];
                  return(
                    <div key={taluka} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 2px",borderBottom:`1px solid ${P.border}55`}}>
                      <div style={{display:"flex",alignItems:"center",gap:7}}>
                        <div style={{width:7,height:7,borderRadius:"50%",background:c}}/>
                        <span style={{fontSize:11.5,fontWeight:600,color:P.text}}>{taluka}</span>
                      </div>
                      <span style={{fontSize:11.5,fontWeight:800,color:c}}>{count}</span>
                    </div>
                  );
                })}
                {!Object.keys(talukaData).length&&<div style={{textAlign:"center",color:P.muted,fontSize:12,padding:"18px 0"}}>No data yet</div>}
              </div>

              <div className="dc" style={{animationDelay:".51s",background:P.white,borderRadius:16,padding:"18px 20px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",border:`1px solid ${P.border}`}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,flexWrap:"wrap",gap:8}}>
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
                          <th key={h} style={{padding:"8px 10px",textAlign:"left",color:P.tealDark,fontWeight:800,fontSize:9.5,whiteSpace:"nowrap",letterSpacing:.3,textTransform:"uppercase",borderBottom:`2px solid ${P.border}`}}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRecent.length===0?(
                        <tr><td colSpan={8} style={{textAlign:"center",padding:28,color:P.muted}}>No applications found</td></tr>
                      ):filteredRecent.map((item,i)=>(
                        <tr key={i} className="tbl-row" onClick={()=>navigate("/allapplication")} style={{borderBottom:`1px solid ${P.border}55`,transition:"background .15s"}}>
                          <td style={{padding:"8px 10px",color:P.teal,fontWeight:800,whiteSpace:"nowrap",fontFamily:"monospace",fontSize:10.5}}>{item.inwardNo||"—"}</td>
                          <td style={{padding:"8px 10px",fontWeight:700,color:P.text}}>{item.fullName||"—"}</td>
                          <td style={{padding:"8px 10px",color:P.muted,maxWidth:130,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.subject||"—"}</td>
                          <td style={{padding:"8px 10px",color:P.muted}}>{item.taluka||"—"}</td>
                          <td style={{padding:"8px 10px",color:P.muted,whiteSpace:"nowrap"}}>{item.mainDepartment||"—"}</td>
                          <td style={{padding:"8px 10px"}}>
                            <span style={{fontSize:9.5,fontWeight:800,padding:"2px 8px",borderRadius:20,background:item.priority==="Emergency"?"#fde8e8":item.priority==="Urgent"?`${P.gold}22`:`${P.sage}22`,color:item.priority==="Emergency"?"#d9534f":item.priority==="Urgent"?P.goldDeep:P.sage,border:`1px solid ${item.priority==="Emergency"?"#f5c6c6":item.priority==="Urgent"?P.gold+"44":P.sage+"44"}`}}>
                              {item.priority||"Normal"}
                            </span>
                          </td>
                          <td style={{padding:"8px 10px"}}>
                            <span style={{fontSize:9.5,fontWeight:800,padding:"2px 8px",borderRadius:20,background:statusBg[item.status]||`${P.border}55`,color:statusColor[item.status]||P.muted,border:`1px solid ${statusColor[item.status]||P.border}44`}}>
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
                <div style={{marginTop:10,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
                  <span style={{fontSize:10.5,color:P.muted}}>Showing {filteredRecent.length} of {stats.total}</span>
                  <div style={{display:"flex",gap:8}}>
                    <button onClick={()=>navigate("/allapplication")} style={{background:`linear-gradient(135deg,${P.teal},${P.tealDark})`,color:"#fff",border:"none",borderRadius:9,padding:"6px 14px",fontSize:11,fontWeight:800,cursor:"pointer",boxShadow:`0 4px 14px ${P.teal}55`}}>All Applications →</button>
                    <button onClick={()=>navigate("/applicationcitizens")} style={{background:`linear-gradient(135deg,${P.gold},${P.goldDeep})`,color:"#fff",border:"none",borderRadius:9,padding:"6px 14px",fontSize:11,fontWeight:800,cursor:"pointer",boxShadow:`0 4px 14px ${P.gold}55`}}>Citizen Appts →</button>
                  </div>
                </div>
              </div>
            </div>

            {/* ════════════════════════════════════════════════════════════════
                ── MEETING ANALYTICS SECTION ──
            ════════════════════════════════════════════════════════════════ */}
            {!meetingLoading && (
              <div className="dc" style={{ animationDelay: ".58s", marginBottom: 18 }}>

                {/* Section header with divider */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <div style={{ flex: 1, height: 1.5, background: `linear-gradient(90deg,${P.teal},${P.border})`, borderRadius: 99 }}/>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                    <span style={{ fontSize: 18 }}>🏛</span>
                    <span style={{ fontSize: 14, fontWeight: 900, color: P.tealDark, whiteSpace: "nowrap" }}>Meeting Proceedings Analytics</span>
                  </div>
                  <div style={{ flex: 1, height: 1.5, background: `linear-gradient(90deg,${P.border},${P.teal})`, borderRadius: 99 }}/>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
                  <p style={{ margin: 0, fontSize: 10.5, color: P.muted, fontWeight: 600 }}>
                    Sabha Kamkaj — Subject wise progress tracking
                  </p>
                  <button onClick={() => navigate("/meetings")} style={{
                    background: `linear-gradient(135deg,${P.teal},${P.tealDark})`,
                    color: "#fff", border: "none", borderRadius: 9, padding: "6px 14px",
                    fontSize: 11, fontWeight: 800, cursor: "pointer",
                    boxShadow: `0 4px 14px ${P.teal}55` }}>
                    View Meetings →
                  </button>
                </div>

                {/* Top 4 Meeting stat cards */}
                <div className="dash-grid-4" style={{ marginBottom: 16 }}>
                  {[
                    { label: "TOTAL MEETINGS",  value: meetingStats.totalMeetings,      from: P.card1From, to: P.card1To,   spark: [2,3,1,4,2,5,3], dark: false },
                    { label: "TOTAL SUBJECTS",  value: meetingStats.totalSubjects,       from: P.card2From, to: P.card2To,   spark: [5,8,6,10,7,12,9], dark: false },
                    { label: "APPROVED",        value: meetingStats.approved,            from: P.card3From, to: P.card3To,   spark: [3,5,4,7,5,9,7], dark: false },
                    { label: "ACTION TAKEN",    value: meetingStats.actionTakenSubjects, from: P.tealDeep,  to: P.tealDark,  spark: [1,2,2,4,3,5,4], dark: false },
                  ].map((c, i) => (
                    <div key={i} style={{ borderRadius: 14, background: `linear-gradient(135deg,${c.from},${c.to})`,
                      padding: "14px 16px", boxShadow: `0 6px 20px ${c.from}44`,
                      position: "relative", overflow: "hidden", minHeight: 90 }}>
                      <div style={{ position: "absolute", top: -14, right: -14, width: 60, height: 60, borderRadius: "50%", background: "rgba(255,255,255,0.13)" }}/>
                      <div style={{ fontSize: 9, fontWeight: 800, color: "rgba(255,255,255,.85)", letterSpacing: .8, textTransform: "uppercase", marginBottom: 4 }}>{c.label}</div>
                      <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", letterSpacing: -1, marginBottom: 4 }}>{c.value}</div>
                      <Sparkline color="#fff" data={c.spark}/>
                    </div>
                  ))}
                </div>

                {/* Middle row: 3 panels */}
                <div className="mtg-grid-3" style={{ marginBottom: 14 }}>

                  {/* Decision Breakdown */}
                  <div style={{ background: P.white, borderRadius: 14, padding: "16px",
                    border: `1px solid ${P.border}`, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                    <div style={{ fontSize: 11, fontWeight: 900, color: P.tealDark, marginBottom: 12 }}>📊 Decision Breakdown</div>
                    {[
                      { l: "Approved",      v: meetingStats.approved,      c: P.sage },
                      { l: "Rejected",      v: meetingStats.rejected,      c: "#d9534f" },
                      { l: "On-Hold",       v: meetingStats.onHold,        c: P.gold },
                      { l: "Postponed",     v: meetingStats.postponed,     c: P.tealDeep },
                      { l: "Not Conducted", v: meetingStats.notConducted,  c: P.muted },
                    ].map(({ l, v, c }) => {
                      const pct = meetingStats.totalSubjects > 0 ? Math.round((v / meetingStats.totalSubjects) * 100) : 0;
                      return (
                        <div key={l} style={{ marginBottom: 10 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                            <span style={{ fontSize: 11, fontWeight: 700, color: P.text }}>{l}</span>
                            <span style={{ fontSize: 11, fontWeight: 800, color: c }}>
                              {v} <span style={{ color: P.muted, fontWeight: 600, fontSize: 10 }}>({pct}%)</span>
                            </span>
                          </div>
                          <ProgressBar value={v} max={meetingStats.totalSubjects} color={c}/>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Taken Progress */}
                  <div style={{ background: P.white, borderRadius: 14, padding: "16px",
                    border: `1px solid ${P.border}`, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                    <div style={{ fontSize: 11, fontWeight: 900, color: P.tealDark, marginBottom: 12 }}>⚡ Action Taken Progress</div>
                    {Object.keys(meetingStats.actionProgress).length === 0 ? (
                      <div style={{ textAlign: "center", color: P.muted, fontSize: 11, padding: "24px 0" }}>
                        <div style={{ fontSize: 28, marginBottom: 8 }}>⚡</div>
                        No action taken yet
                      </div>
                    ) : (
                      Object.entries(meetingStats.actionProgress)
                        .sort((a, b) => b[1] - a[1])
                        .map(([action, count], i) => {
                          const cols = [P.teal, P.gold, P.sage, P.tealDeep, P.goldDeep, P.tealDark];
                          const c = cols[i % cols.length];
                          return (
                            <div key={action} style={{ marginBottom: 10 }}>
                              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                                <span style={{ fontSize: 10, fontWeight: 700, color: P.text,
                                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 140 }}>{action}</span>
                                <span style={{ fontSize: 11, fontWeight: 800, color: c, flexShrink: 0, marginLeft: 6 }}>{count}</span>
                              </div>
                              <ProgressBar value={count} max={meetingStats.totalSubjects} color={c}/>
                            </div>
                          );
                        })
                    )}
                  </div>

                  {/* Subject Type */}
                  <div style={{ background: P.white, borderRadius: 14, padding: "16px",
                    border: `1px solid ${P.border}`, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                    <div style={{ fontSize: 11, fontWeight: 900, color: P.tealDark, marginBottom: 12 }}>📋 Subject Type Breakdown</div>
                    {[
                      { l: "General",                    v: meetingStats.subjectsByType.General,        c: P.teal,    icon: "📄" },
                      { l: "Administrative & Financial", v: meetingStats.subjectsByType.Administrative,  c: P.gold,    icon: "💰" },
                      { l: "Contract Approval",          v: meetingStats.subjectsByType.Contract,        c: P.sage,    icon: "📝" },
                    ].map(({ l, v, c, icon }) => (
                      <div key={l} style={{ display: "flex", alignItems: "center", gap: 12,
                        padding: "12px 0", borderBottom: `1px solid ${P.border}55` }}>
                        <div style={{ width: 40, height: 40, borderRadius: 10,
                          background: `${c}18`, border: `1.5px solid ${c}33`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 18, flexShrink: 0 }}>{icon}</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 10, fontWeight: 700, color: P.muted,
                            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginBottom: 2 }}>{l}</div>
                          <div style={{ fontSize: 20, fontWeight: 900, color: c }}>{v}</div>
                        </div>
                        <div style={{ fontSize: 9, fontWeight: 800, color: c,
                          background: `${c}18`, padding: "2px 8px", borderRadius: 20, flexShrink: 0 }}>
                          {meetingStats.totalSubjects > 0 ? Math.round((v / meetingStats.totalSubjects) * 100) : 0}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Department wise table — fullAccess only */}
                {isFullAccess && Object.keys(meetingStats.departmentStats).length > 0 && (
                  <div style={{ background: P.white, borderRadius: 14, padding: "16px 18px",
                    border: `1px solid ${P.border}`, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                      <div style={{ fontSize: 11, fontWeight: 900, color: P.tealDark }}>🏢 Department-wise Subject Progress</div>
                      <span style={{ fontSize: 9.5, color: P.muted, fontWeight: 600 }}>
                        {Object.keys(meetingStats.departmentStats).length} departments
                      </span>
                    </div>
                    <div style={{ overflowX: "auto" }}>
                      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5 }}>
                        <thead>
                          <tr style={{ background: P.bg }}>
                            {["Department", "Total Subjects", "Approved", "Action Taken", "Completion"].map(h => (
                              <th key={h} style={{ padding: "8px 12px", textAlign: "left", color: P.tealDark,
                                fontWeight: 800, fontSize: 9.5, whiteSpace: "nowrap", letterSpacing: .3,
                                textTransform: "uppercase", borderBottom: `2px solid ${P.border}` }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(meetingStats.departmentStats)
                            .sort((a, b) => b[1].total - a[1].total)
                            .map(([dept, stats], i) => {
                              const cols = [P.teal, P.gold, P.sage, P.tealDeep, P.goldDeep, P.tealDark];
                              const c = cols[i % cols.length];
                              const completionPct = stats.total > 0 ? Math.round((stats.actionTaken / stats.total) * 100) : 0;
                              return (
                                <tr key={dept} style={{ borderBottom: `1px solid ${P.border}55`, transition: "background .15s" }}
                                  onMouseEnter={e => e.currentTarget.style.background = `${P.teal}08`}
                                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                                  <td style={{ padding: "10px 12px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: c, flexShrink: 0 }}/>
                                      <span style={{ fontWeight: 700, color: P.text, fontSize: 12 }}>{dept}</span>
                                    </div>
                                  </td>
                                  <td style={{ padding: "10px 12px" }}>
                                    <span style={{ fontWeight: 800, color: c, fontSize: 13 }}>{stats.total}</span>
                                  </td>
                                  <td style={{ padding: "10px 12px" }}>
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5,
                                      background: `${P.sage}18`, color: P.sage, border: `1px solid ${P.sage}33`,
                                      padding: "2px 8px", borderRadius: 20, fontSize: 10, fontWeight: 800 }}>
                                      ✓ {stats.approved}
                                    </span>
                                  </td>
                                  <td style={{ padding: "10px 12px" }}>
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5,
                                      background: `${P.teal}18`, color: P.teal, border: `1px solid ${P.teal}33`,
                                      padding: "2px 8px", borderRadius: 20, fontSize: 10, fontWeight: 800 }}>
                                      ⚡ {stats.actionTaken}
                                    </span>
                                  </td>
                                  <td style={{ padding: "10px 12px", minWidth: 120 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                      <div style={{ flex: 1, height: 6, borderRadius: 99, background: P.bg, overflow: "hidden" }}>
                                        <div style={{ height: "100%", width: `${completionPct}%`, background: c, borderRadius: 99, transition: "width 1s ease" }}/>
                                      </div>
                                      <span style={{ fontSize: 10, fontWeight: 800, color: c, minWidth: 30, textAlign: "right" }}>{completionPct}%</span>
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

                {/* Department user — only their own stats */}
                {!isFullAccess && (
                  <div style={{ background: P.white, borderRadius: 14, padding: "16px 18px",
                    border: `1px solid ${P.border}`, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                    <div style={{ fontSize: 11, fontWeight: 900, color: P.tealDark, marginBottom: 12 }}>
                      🏢 Your Department Progress — {authUser?.departmentName || ""}
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                      {[
                        { l: "Your Subjects",  v: meetingStats.totalSubjects,         c: P.teal,    icon: "📋" },
                        { l: "Approved",       v: meetingStats.approved,               c: P.sage,    icon: "✅" },
                        { l: "Action Taken",   v: meetingStats.actionTakenSubjects,    c: P.gold,    icon: "⚡" },
                      ].map(({ l, v, c, icon }) => (
                        <div key={l} style={{ textAlign: "center", padding: "16px 12px",
                          background: `${c}10`, border: `1.5px solid ${c}30`, borderRadius: 12 }}>
                          <div style={{ fontSize: 24, marginBottom: 6 }}>{icon}</div>
                          <div style={{ fontSize: 22, fontWeight: 900, color: c }}>{v}</div>
                          <div style={{ fontSize: 10, fontWeight: 700, color: P.muted, marginTop: 3, textTransform: "uppercase", letterSpacing: .4 }}>{l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

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