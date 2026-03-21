
// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../redux/slices/authSlice";
// import { FiChevronLeft, FiLayout, FiFileText, FiSend, FiSettings,FiChevronRight } from "react-icons/fi";


// import logo from "../../assets/vvcmclogo.jpg";


// export default function Sidebar() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.auth);

//   const [mode, setMode] = useState("open");

//   const FULL_ACCESS_ROLES = ["Super Admin", "Guardian Minister"];

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   const toggleSidebar = () => {
//     if (mode === "open") setMode("collapsed");
//     else if (mode === "collapsed") setMode("hidden");
//     else setMode("open");
//   };

//   const linkClass = ({ isActive }) =>
//     `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group
//      ${
//        isActive
//          ? "bg-indigo-50 text-indigo-700 font-bold"
//          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-semibold"
//      }`;

//   if (mode === "hidden") {
//     return (
//       <button
//         onClick={() => setMode("open")}
//         className="fixed top-5 left-5 z-50 bg-white text-indigo-600 p-3 rounded-xl shadow-lg border border-gray-200 hover:scale-110 transition-all"
//       >
//         <FiChevronRight size={22} />
//       </button>
//     );
//   }

//   return (
//     <aside
//       className={`${
//         mode === "open" ? "w-[220px]" : "w-[72px]"
//       } min-h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 overflow-hidden shadow-sm`}
//     >
//       {/* Header */}
//       <div className="px-5 pt-7 pb-5 flex items-center justify-between">
//         {/* <div className="flex items-center gap-2.5 overflow-hidden">
//           <div className="h-9 w-9 flex-shrink-0 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-extrabold text-base shadow">
//            JD 
//           </div>
//           {mode === "open" && (
//             <div className="flex flex-col">
//               <h2 className="text-gray-900 font-extrabold text-base tracking-tight whitespace-nowrap leading-tight">
//                 Janata Darbar
//               </h2>
//               <p className="text-[10px] uppercase tracking-widest text-indigo-500 font-bold">
//                 Admin Panel
//               </p>
//             </div>
//           )}
//         </div> */}
//         {/* >>>>> */}
//         {/* <div className="flex items-center gap-2.5 overflow-hidden lg:hidden">
//   <div className="h-9 w-9 flex-shrink-0 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-extrabold text-base shadow">
//     JD
//   </div>

//   {mode === "open" && (
//     <div className="flex flex-col">
//       <h2 className="text-gray-900 font-extrabold text-base tracking-tight whitespace-nowrap leading-tight">
//         जन संवाद
//       </h2>
//       <p className="text-[10px] uppercase tracking-widest text-indigo-500 font-bold">
//         Admin Panel
//       </p>
//     </div>
//   )}
// </div> */}

// {/* ++++++++++ */}

// <div className="flex items-center gap-2.5 overflow-hidden lg:hidden">
//   <div className="h-9 w-9 flex-shrink-0 rounded-xl overflow-hidden border-2 border-indigo-200 shadow bg-white">
//     <img src={logo} alt="VVCMC" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
//   </div>

//   {mode === "open" && (
//     <div className="flex flex-col">
//       <h2 className="text-gray-900 font-extrabold text-base tracking-tight whitespace-nowrap leading-tight">
//         जन संवाद
//       </h2>
//       <p className="text-[10px] uppercase tracking-widest text-indigo-500 font-bold">
//         Admin Panel · VVCMC
//       </p>
//     </div>
//   )}
// </div>

//         <button
//           onClick={toggleSidebar}
//           className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
//         >
//           {mode === "open" ? <FiChevronLeft size={18} /> : <span className="text-xs font-bold">›</span>}
//         </button>
//       </div>

//       {/* Divider */}
//       <div className="mx-4 border-t border-gray-100 mb-3" />

//       {/* Nav */}
//       <nav className="flex-1 px-3 flex flex-col gap-1">
//         <NavLink to="/dashboard" className={linkClass}>
//           <FiLayout size={18} className="flex-shrink-0" />
//           {mode === "open" && <span className="text-[14px]">Dashboard</span>}
//         </NavLink>

//         <NavLink to="/availability" className={linkClass}>
//           <FiFileText size={18} className="flex-shrink-0" />
//           {mode === "open" && <span className="text-[14px]">Availability</span>}
//         </NavLink>

//         <NavLink to="/allapplication" className={linkClass}>
//           <FiFileText size={18} className="flex-shrink-0" />
//           {mode === "open" && <span className="text-[14px]">All Application</span>}
//         </NavLink>

//         <NavLink to="/allapplicationcitizens" className={linkClass}>
//           <FiFileText size={18} className="flex-shrink-0" />
//           {mode === "open" && <span className="text-[14px]">All Application Citizens</span>}
//         </NavLink>

//         {FULL_ACCESS_ROLES.includes(user?.role) && (
//         <NavLink to="/Janatadarbarcomplaintform" className={linkClass}>
//           <FiSend size={18} className="flex-shrink-0" />
//           {mode === "open" && <span className="text-[14px]">Application Form</span>}
//         </NavLink>
//         )}
//             {FULL_ACCESS_ROLES.includes(user?.role) && (
//            <NavLink to="/users" className={linkClass}>
//           <FiSend size={18} className="flex-shrink-0" />
//           {mode === "open" && <span className="text-[14px]">Users</span>}
//         </NavLink>
//         )}
//       </nav>

//       {/* User Profile */}
//       <div className="p-4 mt-auto">
//         <div className="border-t border-gray-100 pt-4">
//           {mode === "open" ? (
//             <div>
//               <div className="flex items-center gap-2.5 mb-3">
//                 <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-extrabold text-sm flex-shrink-0">
//                   {(user?.fullName || user?.userName || "A")[0].toUpperCase()}
//                 </div>
//                 <div className="overflow-hidden">
//                   <p className="text-sm font-extrabold text-gray-900 truncate leading-tight">
//                     {user?.fullName || user?.userName || "Admin User"}
//                   </p>
//                   <p className="text-[11px] text-gray-500 font-semibold truncate">
//                     {user?.role}
//                   </p>
//                 </div>
//               </div>
//               {user?.departmentName && (
//                 <p className="text-[11px] text-gray-500 font-semibold mb-3">
//                   Dept: <span className="text-gray-800 font-bold">{user.departmentName}</span>
//                 </p>
//               )}
//               <button
//                 onClick={handleLogout}
//                 className="w-full bg-red-50 text-red-600 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider hover:bg-red-600 hover:text-white transition-all duration-200 border border-red-100"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="w-full flex justify-center py-3 text-red-500 hover:bg-red-50 rounded-lg transition-all"
//             >
//               <FiSettings size={18} />
//             </button>
//           )}
//         </div>
//       </div>
//     </aside>
//   );
// }




// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../redux/slices/authSlice";
// import { FiChevronLeft, FiLayout, FiFileText, FiSend, FiSettings, FiChevronRight, FiLogOut, FiUsers, FiCalendar } from "react-icons/fi";
// import logo from "../../assets/vvcmclogo.jpg";

// const TEAL_FROM = "#187484";
// const TEAL_TO   = "#0d4f5c";
// const GOLD      = "#CE9A54";
// const CREAM     = "#F5E7C2";
// const ACTIVE_BG = "rgba(255,255,255,0.15)";
// const ACTIVE_BORDER = "#CE9A54";

// export default function Sidebar() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.auth);
//   const [mode, setMode] = useState("open");

//   const FULL_ACCESS_ROLES = ["Super Admin", "Guardian Minister"];

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   const toggleSidebar = () => {
//     if (mode === "open") setMode("collapsed");
//     else if (mode === "collapsed") setMode("hidden");
//     else setMode("open");
//   };

//   if (mode === "hidden") {
//     return (
//       <button
//         onClick={() => setMode("open")}
//         style={{
//           position: "fixed", top: 20, left: 20, zIndex: 50,
//           background: `linear-gradient(135deg, ${TEAL_FROM}, ${TEAL_TO})`,
//           color: "#fff", padding: "10px 12px", borderRadius: 12,
//           boxShadow: "0 4px 16px rgba(24,116,132,0.4)",
//           border: "none", cursor: "pointer",
//           display: "flex", alignItems: "center", justifyContent: "center",
//         }}
//       >
//         <FiChevronRight size={20} />
//       </button>
//     );
//   }

//   const isOpen = mode === "open";

//   const navItems = [
//     { to: "/dashboard",               icon: <FiLayout size={18}/>,   label: "Dashboard" },
//     { to: "/availability",            icon: <FiCalendar size={18}/>, label: "Availability" },
//     { to: "/allapplication",          icon: <FiFileText size={18}/>, label: "All Application" },
//     { to: "/allapplicationcitizens",  icon: <FiFileText size={18}/>, label: "All Application Citizens" },
//   ];

//   const fullAccessItems = [
//     { to: "/Janatadarbarcomplaintform", icon: <FiSend size={18}/>,  label: "Application Form" },
//     { to: "/users",                     icon: <FiUsers size={18}/>, label: "Users" },
//   ];

//   return (
//     <aside style={{
//       width: isOpen ? 230 : 72,
//       minHeight: "100vh",
//       background: `linear-gradient(175deg, ${TEAL_FROM} 0%, ${TEAL_TO} 100%)`,
//       display: "flex",
//       flexDirection: "column",
//       transition: "width 0.3s ease",
//       overflow: "hidden",
//       boxShadow: "4px 0 24px rgba(13,79,92,0.35)",
//       position: "relative",
//       flexShrink: 0,
//     }}>

//       {/* Decorative circles */}
//       <div style={{ position:"absolute", top:-40, right:-40, width:130, height:130, borderRadius:"50%", background:"rgba(255,255,255,0.06)", pointerEvents:"none" }}/>
//       <div style={{ position:"absolute", bottom:120, left:-30, width:100, height:100, borderRadius:"50%", background:"rgba(255,255,255,0.04)", pointerEvents:"none" }}/>
//       <div style={{ position:"absolute", bottom:-20, right:-20, width:80, height:80, borderRadius:"50%", background:"rgba(255,255,255,0.05)", pointerEvents:"none" }}/>

//       <style>{`
//         .sb-link {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           padding: 10px 16px;
//           border-radius: 12px;
//           margin: 2px 10px;
//           text-decoration: none;
//           color: rgba(255,255,255,0.72);
//           font-size: 13.5px;
//           font-weight: 600;
//           font-family: 'Nunito','Segoe UI',sans-serif;
//           transition: all 0.2s ease;
//           border-left: 3px solid transparent;
//           white-space: nowrap;
//           overflow: hidden;
//         }
//         .sb-link:hover {
//           background: rgba(255,255,255,0.1);
//           color: #fff;
//         }
//         .sb-link.active {
//           background: rgba(255,255,255,0.16);
//           color: #fff;
//           font-weight: 800;
//           border-left: 3px solid ${GOLD};
//           box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
//         }
//         .sb-link .sb-icon {
//           flex-shrink: 0;
//           opacity: 0.8;
//         }
//         .sb-link.active .sb-icon {
//           opacity: 1;
//         }
//         .sb-badge {
//           margin-left: auto;
//           background: ${GOLD};
//           color: #fff;
//           border-radius: 20px;
//           font-size: 10px;
//           font-weight: 800;
//           padding: 2px 8px;
//           flex-shrink: 0;
//         }
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
//       `}</style>

//       {/* ── Header ── */}
//       <div style={{ padding: isOpen ? "24px 18px 18px" : "24px 10px 18px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:10 }}>
//         {isOpen ? (
//           <div style={{ display:"flex", alignItems:"center", gap:12, overflow:"hidden" }}>
//             {/* Logo box like screenshot - gold square with icon */}
//             <div style={{
//               width: 42, height: 42, borderRadius: 12, flexShrink: 0,
//               background: `linear-gradient(135deg, ${GOLD}, #b8832e)`,
//               boxShadow: `0 4px 14px ${GOLD}77`,
//               overflow: "hidden",
//               border: "2px solid rgba(255,255,255,0.2)",
//               display:"flex", alignItems:"center", justifyContent:"center",
//             }}>
//               <img src={logo} alt="VVCMC" style={{ width:"100%", height:"100%", objectFit:"cover" }}
//                 onError={e => { e.target.style.display="none"; e.target.parentNode.innerHTML='<span style="font-size:20px">⚖️</span>'; }}/>
//             </div>
//             <div style={{ overflow:"hidden" }}>
//               <div style={{ color:"#fff", fontSize:20, fontWeight:900, letterSpacing:0.3, fontFamily:"'Nunito',sans-serif", lineHeight:1.2 }}>VVCMC</div>
//               <div style={{ color:"rgba(255,255,255,0.6)", fontSize:17, fontWeight:600, letterSpacing:0.3 }}>जन संवाद</div>
//             </div>
//           </div>
//         ) : (
//           <div style={{
//             width:40, height:40, borderRadius:10, flexShrink:0, margin:"0 auto",
//             background:`linear-gradient(135deg,${GOLD},#b8832e)`,
//             boxShadow:`0 4px 14px ${GOLD}77`,
//             overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center",
//           }}>
//             <img src={logo} alt="VVCMC" style={{ width:"100%", height:"100%", objectFit:"cover" }}
//               onError={e => { e.target.style.display="none"; e.target.parentNode.innerHTML='<span style="font-size:18px">⚖️</span>'; }}/>
//           </div>
//         )}

//         {isOpen && (
//           <button onClick={toggleSidebar} style={{
//             background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.15)",
//             borderRadius:8, padding:"5px 7px", cursor:"pointer", color:"rgba(255,255,255,0.7)",
//             display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
//             transition:"all .2s",
//           }}>
//             <FiChevronLeft size={16}/>
//           </button>
//         )}
//         {!isOpen && (
//           <button onClick={toggleSidebar} style={{
//             position:"absolute", top:20, right:-1,
//             background: TEAL_FROM, border:"none",
//             width:18, height:18, borderRadius:"0 6px 6px 0",
//             cursor:"pointer", color:"#fff", fontSize:10, fontWeight:700,
//             display:"flex", alignItems:"center", justifyContent:"center",
//           }}>›</button>
//         )}
//       </div>

//       {/* Top label like "CABANG YOG ▾" */}
//       {isOpen && (
//         <div style={{ padding:"0 18px 10px" }}>
//           <div style={{ fontSize:9.5, color:"rgba(255,255,255,0.4)", fontWeight:700, letterSpacing:1.8, textTransform:"uppercase", fontFamily:"'Nunito',sans-serif" }}>
//             CABANG YOG ▾
//           </div>
//         </div>
//       )}

//       {/* Divider */}
//       <div style={{ margin:"0 16px 10px", borderTop:"1px solid rgba(255,255,255,0.1)" }}/>

//       {/* ── Nav ── */}
//       <nav style={{ flex:1, display:"flex", flexDirection:"column", gap:2, paddingTop:4, overflowY:"auto", overflowX:"hidden" }}>

//         <NavLink to="/dashboard" className={({isActive})=>`sb-link${isActive?" active":""}`}>
//           <span className="sb-icon"><FiLayout size={18}/></span>
//           {isOpen && <span>Dashboard</span>}
//         </NavLink>

//         <NavLink to="/availability" className={({isActive})=>`sb-link${isActive?" active":""}`}>
//           <span className="sb-icon"><FiCalendar size={18}/></span>
//           {isOpen && <span>Availability</span>}
//         </NavLink>

//         <NavLink to="/allapplication" className={({isActive})=>`sb-link${isActive?" active":""}`}>
//           <span className="sb-icon"><FiFileText size={18}/></span>
//           {isOpen && <span>All Application</span>}
//         </NavLink>

//         <NavLink to="/allapplicationcitizens" className={({isActive})=>`sb-link${isActive?" active":""}`}>
//           <span className="sb-icon"><FiFileText size={18}/></span>
//           {isOpen && <span>All Application Citizens</span>}
//         </NavLink>

//         {FULL_ACCESS_ROLES.includes(user?.role) && (
//           <NavLink to="/Janatadarbarcomplaintform" className={({isActive})=>`sb-link${isActive?" active":""}`}>
//             <span className="sb-icon"><FiSend size={18}/></span>
//             {isOpen && <span>Application Form</span>}
//           </NavLink>
//         )}

//         {FULL_ACCESS_ROLES.includes(user?.role) && (
//           <NavLink to="/users" className={({isActive})=>`sb-link${isActive?" active":""}`}>
//             <span className="sb-icon"><FiUsers size={18}/></span>
//             {isOpen && <span>Users</span>}
//           </NavLink>
//         )}
//       </nav>

//       {/* ── Bottom Settings + User ── */}
//       <div style={{ marginTop:"auto" }}>

//         {/* Settings link */}
//         <div style={{ margin:"0 10px 4px" }}>
//           <NavLink to="/settings" className={({isActive})=>`sb-link${isActive?" active":""}`} style={{ margin:0 }}>
//             <span className="sb-icon"><FiSettings size={18}/></span>
//             {isOpen && <span>Settings</span>}
//           </NavLink>
//         </div>

//         {/* Divider */}
//         <div style={{ margin:"6px 16px", borderTop:"1px solid rgba(255,255,255,0.1)" }}/>

//         {/* User block */}
//         <div style={{ padding: isOpen ? "10px 16px 20px" : "10px 10px 20px" }}>
//           {isOpen ? (
//             <div>
//               <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
//                 <div style={{
//                   width:34, height:34, borderRadius:"50%", flexShrink:0,
//                   background:`linear-gradient(135deg,${GOLD},#b8832e)`,
//                   display:"flex", alignItems:"center", justifyContent:"center",
//                   color:"#fff", fontSize:14, fontWeight:900,
//                   boxShadow:`0 3px 10px ${GOLD}66`,
//                   fontFamily:"'Nunito',sans-serif",
//                 }}>
//                   {(user?.fullName || user?.userName || "A")[0].toUpperCase()}
//                 </div>
//                 <div style={{ overflow:"hidden" }}>
//                   <div style={{ color:"#fff", fontSize:12.5, fontWeight:800, lineHeight:1.2, fontFamily:"'Nunito',sans-serif", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:130 }}>
//                     {user?.fullName || user?.userName || "Admin User"}
//                   </div>
//                   <div style={{ color:"rgba(255,255,255,0.55)", fontSize:10.5, fontWeight:600 }}>{user?.role}</div>
//                 </div>
//               </div>
//               {user?.departmentName && (
//                 <div style={{ fontSize:10.5, color:"rgba(255,255,255,0.45)", fontWeight:600, marginBottom:10, paddingLeft:2 }}>
//                   Dept: <span style={{ color:"rgba(255,255,255,0.75)", fontWeight:700 }}>{user.departmentName}</span>
//                 </div>
//               )}
//               <button onClick={handleLogout} style={{
//                 width:"100%",
//                 background:"rgba(255,255,255,0.1)",
//                 color:"rgba(255,255,255,0.85)",
//                 border:"1px solid rgba(255,255,255,0.2)",
//                 borderRadius:10, padding:"8px",
//                 fontSize:11, fontWeight:800, cursor:"pointer",
//                 letterSpacing:0.8, textTransform:"uppercase",
//                 display:"flex", alignItems:"center", justifyContent:"center", gap:7,
//                 transition:"all .2s",
//                 fontFamily:"'Nunito',sans-serif",
//               }}
//               onMouseEnter={e => { e.currentTarget.style.background="rgba(220,50,50,0.3)"; e.currentTarget.style.borderColor="rgba(220,50,50,0.4)"; }}
//               onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.2)"; }}
//               >
//                 <FiLogOut size={13}/>
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10 }}>
//               <div style={{
//                 width:34, height:34, borderRadius:"50%",
//                 background:`linear-gradient(135deg,${GOLD},#b8832e)`,
//                 display:"flex", alignItems:"center", justifyContent:"center",
//                 color:"#fff", fontSize:13, fontWeight:900,
//               }}>
//                 {(user?.fullName || user?.userName || "A")[0].toUpperCase()}
//               </div>
//               <button onClick={handleLogout} style={{
//                 background:"transparent", border:"none", cursor:"pointer",
//                 color:"rgba(255,255,255,0.5)", padding:6, borderRadius:8,
//                 display:"flex", alignItems:"center", justifyContent:"center",
//                 transition:"all .2s",
//               }}
//               onMouseEnter={e => e.currentTarget.style.color="#fff"}
//               onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.5)"}
//               >
//                 <FiLogOut size={17}/>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </aside>
//   );
// }

// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../redux/slices/authSlice";
// import { FiChevronLeft, FiLayout, FiFileText, FiSend, FiSettings, FiChevronRight, FiLogOut, FiUsers, FiCalendar } from "react-icons/fi";
// import logo from "../../assets/vvcmclogo.jpg";
// import { useSidebar } from "./SidebarContext";

// const TEAL_FROM = "#187484";
// const TEAL_TO   = "#0d4f5c";
// const GOLD      = "#CE9A54";
// const CREAM     = "#F5E7C2";
// const ACTIVE_BG = "rgba(255,255,255,0.15)";
// const ACTIVE_BORDER = "#CE9A54";

// export default function Sidebar() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.auth);
//   const { mode, setMode } = useSidebar();

//   const FULL_ACCESS_ROLES = ["Super Admin", "Guardian Minister"];

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   const toggleSidebar = () => {
//     if (mode === "open") setMode("collapsed");
//     else if (mode === "collapsed") setMode("hidden");
//     else setMode("open");
//   };

//   if (mode === "hidden") {
//     return (
//       <button
//         onClick={() => setMode("open")}
//         style={{
//           position: "fixed", top: 20, left: 20, zIndex: 50,
//           background: `linear-gradient(135deg, ${TEAL_FROM}, ${TEAL_TO})`,
//           color: "#fff", padding: "10px 12px", borderRadius: 12,
//           boxShadow: "0 4px 16px rgba(24,116,132,0.4)",
//           border: "none", cursor: "pointer",
//           display: "flex", alignItems: "center", justifyContent: "center",
//         }}
//       >
//         <FiChevronRight size={20} />
//       </button>
//     );
//   }

//   const isOpen = mode === "open";

//   const navItems = [
//     { to: "/dashboard",               icon: <FiLayout size={18}/>,   label: "Dashboard" },
//     { to: "/availability",            icon: <FiCalendar size={18}/>, label: "Availability" },
//     { to: "/allapplication",          icon: <FiFileText size={18}/>, label: "All Application" },
//     { to: "/allapplicationcitizens",  icon: <FiFileText size={18}/>, label: "All Application Citizens" },
//   ];

//   const fullAccessItems = [
//     { to: "/Janatadarbarcomplaintform", icon: <FiSend size={18}/>,  label: "Application Form" },
//     { to: "/users",                     icon: <FiUsers size={18}/>, label: "Users" },
//   ];

//   return (
//     <aside style={{
//       width: isOpen ? 230 : 72,
//       minHeight: "100vh",
//       background: `linear-gradient(175deg, ${TEAL_FROM} 0%, ${TEAL_TO} 100%)`,
//       display: "flex",
//       flexDirection: "column",
//       transition: "width 0.3s ease",
//       overflow: "hidden",
//       boxShadow: "4px 0 24px rgba(13,79,92,0.35)",
//       position: "relative",
//       flexShrink: 0,
//     }}>

//       {/* Decorative circles */}
//       <div style={{ position:"absolute", top:-40, right:-40, width:130, height:130, borderRadius:"50%", background:"rgba(255,255,255,0.06)", pointerEvents:"none" }}/>
//       <div style={{ position:"absolute", bottom:120, left:-30, width:100, height:100, borderRadius:"50%", background:"rgba(255,255,255,0.04)", pointerEvents:"none" }}/>
//       <div style={{ position:"absolute", bottom:-20, right:-20, width:80, height:80, borderRadius:"50%", background:"rgba(255,255,255,0.05)", pointerEvents:"none" }}/>

//       <style>{`
//         .sb-link {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           padding: 10px 16px;
//           border-radius: 12px;
//           margin: 2px 10px;
//           text-decoration: none;
//           color: rgba(255,255,255,0.72);
//           font-size: 13.5px;
//           font-weight: 600;
//           font-family: 'Nunito','Segoe UI',sans-serif;
//           transition: all 0.2s ease;
//           border-left: 3px solid transparent;
//           white-space: nowrap;
//           overflow: hidden;
//         }
//         .sb-link:hover {
//           background: rgba(255,255,255,0.1);
//           color: #fff;
//         }
//         .sb-link.active {
//           background: rgba(255,255,255,0.16);
//           color: #fff;
//           font-weight: 800;
//           border-left: 3px solid ${GOLD};
//           box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
//         }
//         .sb-link .sb-icon {
//           flex-shrink: 0;
//           opacity: 0.8;
//         }
//         .sb-link.active .sb-icon {
//           opacity: 1;
//         }
//         .sb-badge {
//           margin-left: auto;
//           background: ${GOLD};
//           color: #fff;
//           border-radius: 20px;
//           font-size: 10px;
//           font-weight: 800;
//           padding: 2px 8px;
//           flex-shrink: 0;
//         }
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
//       `}</style>

//       {/* ── Header ── */}
//       <div style={{ padding: isOpen ? "24px 18px 18px" : "24px 10px 18px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:10 }}>
//         {isOpen ? (
//           <div style={{ display:"flex", alignItems:"center", gap:12, overflow:"hidden" }}>
//             {/* Logo box like screenshot - gold square with icon */}
//             <div style={{
//               width: 42, height: 42, borderRadius: 12, flexShrink: 0,
//               background: `linear-gradient(135deg, ${GOLD}, #b8832e)`,
//               boxShadow: `0 4px 14px ${GOLD}77`,
//               overflow: "hidden",
//               border: "2px solid rgba(255,255,255,0.2)",
//               display:"flex", alignItems:"center", justifyContent:"center",
//             }}>
//               <img src={logo} alt="VVCMC" style={{ width:"100%", height:"100%", objectFit:"cover" }}
//                 onError={e => { e.target.style.display="none"; e.target.parentNode.innerHTML='<span style="font-size:20px">⚖️</span>'; }}/>
//             </div>
//             <div style={{ overflow:"hidden" }}>
//               <div style={{ color:"#fff", fontSize:16, fontWeight:900, letterSpacing:0.3, fontFamily:"'Nunito',sans-serif", lineHeight:1.2 }}>जन संवाद</div>
//               <div style={{ color:"rgba(255,255,255,0.6)", fontSize:10, fontWeight:600, letterSpacing:0.3 }}>ADMIN PANEL · VVCMC</div>
//             </div>
//           </div>
//         ) : (
//           <div style={{
//             width:40, height:40, borderRadius:10, flexShrink:0, margin:"0 auto",
//             background:`linear-gradient(135deg,${GOLD},#b8832e)`,
//             boxShadow:`0 4px 14px ${GOLD}77`,
//             overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center",
//           }}>
//             <img src={logo} alt="जन संवाद" style={{ width:"100%", height:"100%", objectFit:"cover" }}
//               onError={e => { e.target.style.display="none"; e.target.parentNode.innerHTML='<span style="font-size:18px">⚖️</span>'; }}/>
//           </div>
//         )}

//         {isOpen && (
//           <button onClick={toggleSidebar} style={{
//             background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.15)",
//             borderRadius:8, padding:"5px 7px", cursor:"pointer", color:"rgba(255,255,255,0.7)",
//             display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
//             transition:"all .2s",
//           }}>
//             <FiChevronLeft size={16}/>
//           </button>
//         )}
//         {!isOpen && (
//           <button onClick={toggleSidebar} style={{
//             position:"absolute", top:20, right:-1,
//             background: TEAL_FROM, border:"none",
//             width:18, height:18, borderRadius:"0 6px 6px 0",
//             cursor:"pointer", color:"#fff", fontSize:10, fontWeight:700,
//             display:"flex", alignItems:"center", justifyContent:"center",
//           }}>›</button>
//         )}
//       </div>

//       {/* Top label like "CABANG YOG ▾" */}
//       {isOpen && (
//         <div style={{ padding:"0 18px 10px" }}>
//           <div style={{ fontSize:9.5, color:"rgba(255,255,255,0.4)", fontWeight:700, letterSpacing:1.8, textTransform:"uppercase", fontFamily:"'Nunito',sans-serif" }}>
//             CABANG YOG ▾
//           </div>
//         </div>
//       )}

//       {/* Divider */}
//       <div style={{ margin:"0 16px 10px", borderTop:"1px solid rgba(255,255,255,0.1)" }}/>

//       {/* ── Nav ── */}
//       <nav style={{ flex:1, display:"flex", flexDirection:"column", gap:2, paddingTop:4, overflowY:"auto", overflowX:"hidden" }}>

//         <NavLink to="/dashboard" className={({isActive})=>`sb-link${isActive?" active":""}`}>
//           <span className="sb-icon"><FiLayout size={18}/></span>
//           {isOpen && <span>Dashboard</span>}
//         </NavLink>

//         <NavLink to="/availability" className={({isActive})=>`sb-link${isActive?" active":""}`}>
//           <span className="sb-icon"><FiCalendar size={18}/></span>
//           {isOpen && <span>Availability</span>}
//         </NavLink>

//         <NavLink to="/allapplication" className={({isActive})=>`sb-link${isActive?" active":""}`}>
//           <span className="sb-icon"><FiFileText size={18}/></span>
//           {isOpen && <span>All Application</span>}
//         </NavLink>

//         <NavLink to="/allapplicationcitizens" className={({isActive})=>`sb-link${isActive?" active":""}`}>
//           <span className="sb-icon"><FiFileText size={18}/></span>
//           {isOpen && <span>All Application Citizens</span>}
//         </NavLink>

//         {FULL_ACCESS_ROLES.includes(user?.role) && (
//           <NavLink to="/Janatadarbarcomplaintform" className={({isActive})=>`sb-link${isActive?" active":""}`}>
//             <span className="sb-icon"><FiSend size={18}/></span>
//             {isOpen && <span>Application Form</span>}
//           </NavLink>
//         )}

//         {FULL_ACCESS_ROLES.includes(user?.role) && (
//           <NavLink to="/users" className={({isActive})=>`sb-link${isActive?" active":""}`}>
//             <span className="sb-icon"><FiUsers size={18}/></span>
//             {isOpen && <span>Users</span>}
//           </NavLink>
//         )}
//       </nav>

//       {/* ── Bottom Settings + User ── */}
//       <div style={{ marginTop:"auto" }}>

//         {/* Settings link */}
//         <div style={{ margin:"0 10px 4px" }}>
//           <NavLink to="/settings" className={({isActive})=>`sb-link${isActive?" active":""}`} style={{ margin:0 }}>
//             <span className="sb-icon"><FiSettings size={18}/></span>
//             {isOpen && <span>Settings</span>}
//           </NavLink>
//         </div>

//         {/* Divider */}
//         <div style={{ margin:"6px 16px", borderTop:"1px solid rgba(255,255,255,0.1)" }}/>

//         {/* User block */}
//         <div style={{ padding: isOpen ? "10px 16px 20px" : "10px 10px 20px" }}>
//           {isOpen ? (
//             <div>
//               <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
//                 <div style={{
//                   width:34, height:34, borderRadius:"50%", flexShrink:0,
//                   background:`linear-gradient(135deg,${GOLD},#b8832e)`,
//                   display:"flex", alignItems:"center", justifyContent:"center",
//                   color:"#fff", fontSize:14, fontWeight:900,
//                   boxShadow:`0 3px 10px ${GOLD}66`,
//                   fontFamily:"'Nunito',sans-serif",
//                 }}>
//                   {(user?.fullName || user?.userName || "A")[0].toUpperCase()}
//                 </div>
//                 <div style={{ overflow:"hidden" }}>
//                   <div style={{ color:"#fff", fontSize:12.5, fontWeight:800, lineHeight:1.2, fontFamily:"'Nunito',sans-serif", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:130 }}>
//                     {user?.fullName || user?.userName || "Admin User"}
//                   </div>
//                   <div style={{ color:"rgba(255,255,255,0.55)", fontSize:10.5, fontWeight:600 }}>{user?.role}</div>
//                 </div>
//               </div>
//               {user?.departmentName && (
//                 <div style={{ fontSize:10.5, color:"rgba(255,255,255,0.45)", fontWeight:600, marginBottom:10, paddingLeft:2 }}>
//                   Dept: <span style={{ color:"rgba(255,255,255,0.75)", fontWeight:700 }}>{user.departmentName}</span>
//                 </div>
//               )}
//               <button onClick={handleLogout} style={{
//                 width:"100%",
//                 background:"rgba(255,255,255,0.1)",
//                 color:"rgba(255,255,255,0.85)",
//                 border:"1px solid rgba(255,255,255,0.2)",
//                 borderRadius:10, padding:"8px",
//                 fontSize:11, fontWeight:800, cursor:"pointer",
//                 letterSpacing:0.8, textTransform:"uppercase",
//                 display:"flex", alignItems:"center", justifyContent:"center", gap:7,
//                 transition:"all .2s",
//                 fontFamily:"'Nunito',sans-serif",
//               }}
//               onMouseEnter={e => { e.currentTarget.style.background="rgba(220,50,50,0.3)"; e.currentTarget.style.borderColor="rgba(220,50,50,0.4)"; }}
//               onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.2)"; }}
//               >
//                 <FiLogOut size={13}/>
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10 }}>
//               <div style={{
//                 width:34, height:34, borderRadius:"50%",
//                 background:`linear-gradient(135deg,${GOLD},#b8832e)`,
//                 display:"flex", alignItems:"center", justifyContent:"center",
//                 color:"#fff", fontSize:13, fontWeight:900,
//               }}>
//                 {(user?.fullName || user?.userName || "A")[0].toUpperCase()}
//               </div>
//               <button onClick={handleLogout} style={{
//                 background:"transparent", border:"none", cursor:"pointer",
//                 color:"rgba(255,255,255,0.5)", padding:6, borderRadius:8,
//                 display:"flex", alignItems:"center", justifyContent:"center",
//                 transition:"all .2s",
//               }}
//               onMouseEnter={e => e.currentTarget.style.color="#fff"}
//               onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.5)"}
//               >
//                 <FiLogOut size={17}/>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </aside>
//   );
// }





// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../redux/slices/authSlice";
// import { FiChevronLeft, FiLayout, FiFileText, FiSend, FiSettings, FiChevronRight, FiLogOut, FiUsers, FiCalendar } from "react-icons/fi";
// import logo from "../../assets/vvcmclogo.jpg";
// import { useSidebar } from "./SidebarContext";

// const TEAL_FROM = "#187484";
// const TEAL_TO   = "#0d4f5c";
// const GOLD      = "#CE9A54";
// const CREAM     = "#F5E7C2";
// const ACTIVE_BG = "rgba(255,255,255,0.15)";
// const ACTIVE_BORDER = "#CE9A54";

// export default function Sidebar() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.auth);
//   const { mode, setMode } = useSidebar();

//   const FULL_ACCESS_ROLES = ["Super Admin", "Guardian Minister"];

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   const toggleSidebar = () => {
//     if (mode === "open") setMode("collapsed");
//     else if (mode === "collapsed") setMode("hidden");
//     else setMode("open");
//   };

//   if (mode === "hidden") {
//     return (
//       <button
//         onClick={() => setMode("open")}
//         style={{
//           position: "fixed", top: 20, left: 20, zIndex: 50,
//           background: `linear-gradient(135deg, ${TEAL_FROM}, ${TEAL_TO})`,
//           color: "#fff", padding: "10px 12px", borderRadius: 12,
//           boxShadow: "0 4px 16px rgba(24,116,132,0.4)",
//           border: "none", cursor: "pointer",
//           display: "flex", alignItems: "center", justifyContent: "center",
//         }}
//       >
//         <FiChevronRight size={20} />
//       </button>
//     );
//   }

//   const isOpen = mode === "open";

//   const navItems = [
//     { to: "/dashboard",               icon: <FiLayout size={18}/>,   label: "Dashboard" },
//     { to: "/availability",            icon: <FiCalendar size={18}/>, label: "Availability" },
//     { to: "/allapplication",          icon: <FiFileText size={18}/>, label: "All Application" },
//     { to: "/allapplicationcitizens",  icon: <FiFileText size={18}/>, label: "All Application Citizens" },
//   ];

//   const fullAccessItems = [
//     { to: "/Janatadarbarcomplaintform", icon: <FiSend size={18}/>,  label: "Application Form" },
//     { to: "/users",                     icon: <FiUsers size={18}/>, label: "Users" },
//   ];

//   return (
//     <aside style={{
//       width: isOpen ? 230 : 72,
//       minHeight: "100vh",
//       background: `linear-gradient(175deg, ${TEAL_FROM} 0%, ${TEAL_TO} 100%)`,
//       display: "flex",
//       flexDirection: "column",
//       transition: "width 0.3s ease",
//       overflow: "hidden",
//       boxShadow: "4px 0 24px rgba(13,79,92,0.35)",
//       position: "relative",
//       flexShrink: 0,
//     }}>

//       {/* Decorative circles */}
//       <div style={{ position:"absolute", top:-40, right:-40, width:130, height:130, borderRadius:"50%", background:"rgba(255,255,255,0.06)", pointerEvents:"none" }}/>
//       <div style={{ position:"absolute", bottom:120, left:-30, width:100, height:100, borderRadius:"50%", background:"rgba(255,255,255,0.04)", pointerEvents:"none" }}/>
//       <div style={{ position:"absolute", bottom:-20, right:-20, width:80, height:80, borderRadius:"50%", background:"rgba(255,255,255,0.05)", pointerEvents:"none" }}/>

//       <style>{`
//         .sb-link {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           padding: 10px 16px;
//           border-radius: 12px;
//           margin: 2px 10px;
//           text-decoration: none;
//           color: rgba(255,255,255,0.72);
//           font-size: 13.5px;
//           font-weight: 600;
//           font-family: 'Nunito','Segoe UI',sans-serif;
//           transition: all 0.2s ease;
//           border-left: 3px solid transparent;
//           white-space: nowrap;
//           overflow: hidden;
//         }
//         .sb-link:hover {
//           background: rgba(255,255,255,0.1);
//           color: #fff;
//         }
//         .sb-link.active {
//           background: rgba(255,255,255,0.16);
//           color: #fff;
//           font-weight: 800;
//           border-left: 3px solid ${GOLD};
//           box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
//         }
//         .sb-link .sb-icon {
//           flex-shrink: 0;
//           opacity: 0.8;
//         }
//         .sb-link.active .sb-icon {
//           opacity: 1;
//         }
//         .sb-badge {
//           margin-left: auto;
//           background: ${GOLD};
//           color: #fff;
//           border-radius: 20px;
//           font-size: 10px;
//           font-weight: 800;
//           padding: 2px 8px;
//           flex-shrink: 0;
//         }
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
//       `}</style>

//       {/* ── Header ── */}
//       <div style={{ padding: isOpen ? "24px 18px 18px" : "24px 10px 18px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:10 }}>
//         {isOpen ? (
//           <div style={{ display:"flex", alignItems:"center", gap:12, overflow:"hidden" }}>
//             {/* Logo box like screenshot - gold square with icon */}
//             <div style={{
//               width: 50, height: 50, borderRadius: 14, flexShrink: 0,
//               background: `linear-gradient(135deg, ${GOLD}, #b8832e)`,
//               boxShadow: `0 4px 16px ${GOLD}88`,
//               overflow: "hidden",
//               border: "2px solid rgba(255,255,255,0.25)",
//               display:"flex", alignItems:"center", justifyContent:"center",
//             }}>
//               <img src={logo} alt="VVCMC" style={{ width:"100%", height:"100%", objectFit:"cover" }}
//                 onError={e => { e.target.style.display="none"; e.target.parentNode.innerHTML='<span style="font-size:22px">⚖️</span>'; }}/>
//             </div>
//             <div style={{ overflow:"hidden" }}>
//               <div style={{ color:"rgba(255,255,255,0.75)", fontSize:10, fontWeight:700, letterSpacing:0.3, fontFamily:"'Noto Sans Devanagari','Nunito',sans-serif", lineHeight:1.3 }}>वसई-विरार शहर महानगरपालिका</div>
//               <div style={{ color:"#fff", fontSize:18, fontWeight:900, letterSpacing:0.4, fontFamily:"'Noto Sans Devanagari','Nunito',sans-serif", lineHeight:1.15 }}>जन संवाद</div>
//             </div>
//           </div>
//         ) : (
//           <div style={{
//             width:40, height:40, borderRadius:10, flexShrink:0, margin:"0 auto",
//             background:`linear-gradient(135deg,${GOLD},#b8832e)`,
//             boxShadow:`0 4px 14px ${GOLD}77`,
//             overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center",
//           }}>
//             <img src={logo} alt="जन संवाद" style={{ width:"100%", height:"100%", objectFit:"cover" }}
//               onError={e => { e.target.style.display="none"; e.target.parentNode.innerHTML='<span style="font-size:18px">⚖️</span>'; }}/>
//           </div>
//         )}

//         {isOpen && (
//           <button onClick={toggleSidebar} style={{
//             background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.15)",
//             borderRadius:8, padding:"5px 7px", cursor:"pointer", color:"rgba(255,255,255,0.7)",
//             display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
//             transition:"all .2s",
//           }}>
//             <FiChevronLeft size={16}/>
//           </button>
//         )}
//         {!isOpen && (
//           <button onClick={toggleSidebar} style={{
//             position:"absolute", top:20, right:-1,
//             background: TEAL_FROM, border:"none",
//             width:18, height:18, borderRadius:"0 6px 6px 0",
//             cursor:"pointer", color:"#fff", fontSize:10, fontWeight:700,
//             display:"flex", alignItems:"center", justifyContent:"center",
//           }}>›</button>
//         )}
//       </div>

//       {/* Top label like "CABANG YOG ▾" */}
//       {isOpen && (
//         <div style={{ padding:"0 18px 10px" }}>
//           <div style={{ fontSize:9.5, color:"rgba(255,255,255,0.4)", fontWeight:700, letterSpacing:1.8, textTransform:"uppercase", fontFamily:"'Nunito',sans-serif" }}>
//             CABANG YOG ▾
//           </div>
//         </div>
//       )}

//       {/* Divider */}
//       <div style={{ margin:"0 16px 10px", borderTop:"1px solid rgba(255,255,255,0.1)" }}/>

//       {/* ── Nav ── */}
//       <nav style={{ flex:1, display:"flex", flexDirection:"column", gap:2, paddingTop:4, overflowY:"auto", overflowX:"hidden" }}>

//         <NavLink to="/dashboard" className={({isActive})=>`sb-link${isActive?" active":""}`}>
//           <span className="sb-icon"><FiLayout size={18}/></span>
//           {isOpen && <span>Dashboard</span>}
//         </NavLink>

//         <NavLink to="/availability" className={({isActive})=>`sb-link${isActive?" active":""}`}>
//           <span className="sb-icon"><FiCalendar size={18}/></span>
//           {isOpen && <span>Availability</span>}
//         </NavLink>

//         <NavLink to="/allapplication" className={({isActive})=>`sb-link${isActive?" active":""}`}>
//           <span className="sb-icon"><FiFileText size={18}/></span>
//           {isOpen && <span>All Application</span>}
//         </NavLink>

//         <NavLink to="/allapplicationcitizens" className={({isActive})=>`sb-link${isActive?" active":""}`}>
//           <span className="sb-icon"><FiFileText size={18}/></span>
//           {isOpen && <span>All Application Citizens</span>}
//         </NavLink>

//         {FULL_ACCESS_ROLES.includes(user?.role) && (
//           <NavLink to="/Janatadarbarcomplaintform" className={({isActive})=>`sb-link${isActive?" active":""}`}>
//             <span className="sb-icon"><FiSend size={18}/></span>
//             {isOpen && <span>Application Form</span>}
//           </NavLink>
//         )}

//         {FULL_ACCESS_ROLES.includes(user?.role) && (
//           <NavLink to="/users" className={({isActive})=>`sb-link${isActive?" active":""}`}>
//             <span className="sb-icon"><FiUsers size={18}/></span>
//             {isOpen && <span>Users</span>}
//           </NavLink>
//         )}
//       </nav>

//       {/* ── Bottom Settings + User ── */}
//       <div style={{ marginTop:"auto" }}>

//         {/* Settings link */}
//         <div style={{ margin:"0 10px 4px" }}>
//           <NavLink to="/settings" className={({isActive})=>`sb-link${isActive?" active":""}`} style={{ margin:0 }}>
//             <span className="sb-icon"><FiSettings size={18}/></span>
//             {isOpen && <span>Settings</span>}
//           </NavLink>
//         </div>

//         {/* Divider */}
//         <div style={{ margin:"6px 16px", borderTop:"1px solid rgba(255,255,255,0.1)" }}/>

//         {/* User block */}
//         <div style={{ padding: isOpen ? "10px 16px 20px" : "10px 10px 20px" }}>
//           {isOpen ? (
//             <div>
//               <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
//                 <div style={{
//                   width:34, height:34, borderRadius:"50%", flexShrink:0,
//                   background:`linear-gradient(135deg,${GOLD},#b8832e)`,
//                   display:"flex", alignItems:"center", justifyContent:"center",
//                   color:"#fff", fontSize:14, fontWeight:900,
//                   boxShadow:`0 3px 10px ${GOLD}66`,
//                   fontFamily:"'Nunito',sans-serif",
//                 }}>
//                   {(user?.fullName || user?.userName || "A")[0].toUpperCase()}
//                 </div>
//                 <div style={{ overflow:"hidden" }}>
//                   <div style={{ color:"#fff", fontSize:12.5, fontWeight:800, lineHeight:1.2, fontFamily:"'Nunito',sans-serif", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:130 }}>
//                     {user?.fullName || user?.userName || "Admin User"}
//                   </div>
//                   <div style={{ color:"rgba(255,255,255,0.55)", fontSize:10.5, fontWeight:600 }}>{user?.role}</div>
//                 </div>
//               </div>
//               {user?.departmentName && (
//                 <div style={{ fontSize:10.5, color:"rgba(255,255,255,0.45)", fontWeight:600, marginBottom:10, paddingLeft:2 }}>
//                   Dept: <span style={{ color:"rgba(255,255,255,0.75)", fontWeight:700 }}>{user.departmentName}</span>
//                 </div>
//               )}
//               <button onClick={handleLogout} style={{
//                 width:"100%",
//                 background:"rgba(255,255,255,0.1)",
//                 color:"rgba(255,255,255,0.85)",
//                 border:"1px solid rgba(255,255,255,0.2)",
//                 borderRadius:10, padding:"8px",
//                 fontSize:11, fontWeight:800, cursor:"pointer",
//                 letterSpacing:0.8, textTransform:"uppercase",
//                 display:"flex", alignItems:"center", justifyContent:"center", gap:7,
//                 transition:"all .2s",
//                 fontFamily:"'Nunito',sans-serif",
//               }}
//               onMouseEnter={e => { e.currentTarget.style.background="rgba(220,50,50,0.3)"; e.currentTarget.style.borderColor="rgba(220,50,50,0.4)"; }}
//               onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.2)"; }}
//               >
//                 <FiLogOut size={13}/>
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10 }}>
//               <div style={{
//                 width:34, height:34, borderRadius:"50%",
//                 background:`linear-gradient(135deg,${GOLD},#b8832e)`,
//                 display:"flex", alignItems:"center", justifyContent:"center",
//                 color:"#fff", fontSize:13, fontWeight:900,
//               }}>
//                 {(user?.fullName || user?.userName || "A")[0].toUpperCase()}
//               </div>
//               <button onClick={handleLogout} style={{
//                 background:"transparent", border:"none", cursor:"pointer",
//                 color:"rgba(255,255,255,0.5)", padding:6, borderRadius:8,
//                 display:"flex", alignItems:"center", justifyContent:"center",
//                 transition:"all .2s",
//               }}
//               onMouseEnter={e => e.currentTarget.style.color="#fff"}
//               onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.5)"}
//               >
//                 <FiLogOut size={17}/>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </aside>
//   );
// }


import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { FiChevronLeft, FiLayout, FiFileText, FiSend, FiSettings, FiChevronRight, FiLogOut, FiUsers, FiCalendar } from "react-icons/fi";
import logo from "../../assets/vvcmclogo.jpg";
import { useSidebar } from "./SidebarContext";

const TEAL_FROM = "#187484";
const TEAL_TO   = "#0d4f5c";
const GOLD      = "#CE9A54";
const CREAM     = "#F5E7C2";
const ACTIVE_BG = "rgba(255,255,255,0.15)";
const ACTIVE_BORDER = "#CE9A54";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { mode, setMode } = useSidebar();

  const FULL_ACCESS_ROLES = ["Super Admin", "Guardian Minister"];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const toggleSidebar = () => {
    if (mode === "open") setMode("collapsed");
    else if (mode === "collapsed") setMode("hidden");
    else setMode("open");
  };

  if (mode === "hidden") {
    return (
      <button
        onClick={() => setMode("open")}
        style={{
          position: "fixed", top: 20, left: 20, zIndex: 50,
          background: `linear-gradient(135deg, ${TEAL_FROM}, ${TEAL_TO})`,
          color: "#fff", padding: "10px 12px", borderRadius: 12,
          boxShadow: "0 4px 16px rgba(24,116,132,0.4)",
          border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <FiChevronRight size={20} />
      </button>
    );
  }

  const isOpen = mode === "open";

  const navItems = [
    { to: "/dashboard",               icon: <FiLayout size={18}/>,   label: "Dashboard" },
    { to: "/availability",            icon: <FiCalendar size={18}/>, label: "Availability" },
    { to: "/allapplication",          icon: <FiFileText size={18}/>, label: "All Application" },
    { to: "/allapplicationcitizens",  icon: <FiFileText size={18}/>, label: "All Application Citizens" },
  ];

  const fullAccessItems = [
    { to: "/Janatadarbarcomplaintform", icon: <FiSend size={18}/>,  label: "Application Form" },
    { to: "/users",                     icon: <FiUsers size={18}/>, label: "Users" },
  ];

  return (
    <aside style={{
      width: isOpen ? 230 : 72,
      minHeight: "100vh",
      background: `linear-gradient(175deg, ${TEAL_FROM} 0%, ${TEAL_TO} 100%)`,
      display: "flex",
      flexDirection: "column",
      transition: "width 0.3s ease",
      overflow: "hidden",
      boxShadow: "4px 0 24px rgba(13,79,92,0.35)",
      position: "relative",
      flexShrink: 0,
    }}>

      {/* Decorative circles */}
      <div style={{ position:"absolute", top:-40, right:-40, width:130, height:130, borderRadius:"50%", background:"rgba(255,255,255,0.06)", pointerEvents:"none" }}/>
      <div style={{ position:"absolute", bottom:120, left:-30, width:100, height:100, borderRadius:"50%", background:"rgba(255,255,255,0.04)", pointerEvents:"none" }}/>
      <div style={{ position:"absolute", bottom:-20, right:-20, width:80, height:80, borderRadius:"50%", background:"rgba(255,255,255,0.05)", pointerEvents:"none" }}/>

      <style>{`
        .sb-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          border-radius: 12px;
          margin: 2px 10px;
          text-decoration: none;
          color: rgba(255,255,255,0.72);
          font-size: 13.5px;
          font-weight: 600;
          font-family: 'Nunito','Segoe UI',sans-serif;
          transition: all 0.2s ease;
          border-left: 3px solid transparent;
          white-space: nowrap;
          overflow: hidden;
        }
        .sb-link:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
        }
        .sb-link.active {
          background: rgba(255,255,255,0.16);
          color: #fff;
          font-weight: 800;
          border-left: 3px solid ${GOLD};
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
        }
        .sb-link .sb-icon {
          flex-shrink: 0;
          opacity: 0.8;
        }
        .sb-link.active .sb-icon {
          opacity: 1;
        }
        .sb-badge {
          margin-left: auto;
          background: ${GOLD};
          color: #fff;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 800;
          padding: 2px 8px;
          flex-shrink: 0;
        }
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
      `}</style>

      {/* ── Header ── */}
      <div style={{ padding: isOpen ? "24px 18px 18px" : "24px 10px 18px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:10 }}>
        {isOpen ? (
          // <div style={{ display:"flex", alignItems:"center", gap:10, overflow:"hidden" }}>
          //   {/* Logo */}
          //   <div style={{
          //     width: 46, height: 46, borderRadius: 12, flexShrink: 0,
          //     background: `linear-gradient(135deg, ${GOLD}, #b8832e)`,
          //     boxShadow: `0 4px 14px ${GOLD}88`,
          //     overflow: "hidden",
          //     border: "2px solid rgba(255,255,255,0.25)",
          //     display:"flex", alignItems:"center", justifyContent:"center",
          //   }}>
          //     <img src={logo} alt="VVCMC" style={{ width:"100%", height:"100%", objectFit:"cover" }}
          //       onError={e => { e.target.style.display="none"; e.target.parentNode.innerHTML='<span style="font-size:20px">⚖️</span>'; }}/>
          //   </div>

          //   {/* Text */}
          //   <div style={{ overflow:"hidden", display:"flex", flexDirection:"column", gap:0 }}>

          //     {/* वसई-विरार शहर */}
          //     <div style={{
          //       color: `${GOLD}dd`,
          //       fontSize: 9.5, fontWeight: 800,
          //       fontFamily:"'Noto Sans Devanagari','Nunito',sans-serif",
          //       whiteSpace:"nowrap", letterSpacing: 0.2, lineHeight: 1.4,
          //     }}>
          //       वसई-विरार शहर
          //     </div>

          //     {/* महानगरपालिका */}
          //     <div style={{
          //       color: "rgba(255,255,255,0.92)",
          //       fontSize: 11.5, fontWeight: 900,
          //       fontFamily:"'Noto Sans Devanagari','Nunito',sans-serif",
          //       whiteSpace:"nowrap", letterSpacing: 0.2, lineHeight: 1.3,
          //     }}>
          //       महानगरपालिका
          //     </div>

          //     {/* जन संवाद */}
          //     <div style={{
          //       color: "#fff",
          //       fontSize: 17, fontWeight: 900,
          //       fontFamily:"'Noto Sans Devanagari','Nunito',sans-serif",
          //       whiteSpace:"nowrap", letterSpacing: 0.3, lineHeight: 1.15,
          //       textShadow: `0 2px 10px ${GOLD}55`,
          //     }}>
          //       जन संवाद
          //     </div>
          //   </div>
          // </div>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>

  {/* Line 1: वसई-विरार शहर महानगरपालिका */}
  <div style={{
    color: `${GOLD}dd`,
    fontSize: 15,
    fontWeight: 800,
    fontFamily: "'Noto Sans Devanagari','Nunito',sans-serif",
    whiteSpace: "nowrap",
    letterSpacing: 0.1,
    lineHeight: 1.3,
  }}>
    वसई-विरार शहर महानगरपालिका
  </div>
   <div style={{
      color: "#fff",
      fontSize: 24,
      fontWeight: 900,
      fontFamily: "'Noto Sans Devanagari','Nunito',sans-serif",
      whiteSpace: "nowrap",
      letterSpacing: 0.3,
      lineHeight: 1,
      textShadow: `0 2px 10px ${GOLD}55`,
      textAlign:'center',
      // border:'1px solid red'
    }}>
      जन संवाद
    </div>

  {/* Line 2: Logo + जन संवाद side by side */}
  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>

    {/* Logo */}
    <div style={{
      width: 160, height: 160, borderRadius: "5%", flexShrink: 0,
      background: `linear-gradient(135deg, ${GOLD}, #b8832e)`,
      boxShadow: `0 4px 14px ${GOLD}88`,
      overflow: "hidden",
      border: "2px solid rgba(255,255,255,0.25)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <img
        src={logo} alt="VVCMC"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        onError={e => {
          e.target.style.display = "none";
          e.target.parentNode.innerHTML = '<span style="font-size:18px">⚖️</span>';
        }}
      />
    </div>

    {/* जन संवाद */}
   

  </div>
</div>
          
        ) : (
          <div style={{
            width:40, height:40, borderRadius:10, flexShrink:0, margin:"0 auto",
            background:`linear-gradient(135deg,${GOLD},#b8832e)`,
            boxShadow:`0 4px 14px ${GOLD}77`,
            overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center",
          }}>
            <img src={logo} alt="जन संवाद" style={{ width:"100%", height:"100%", objectFit:"cover" }}
              onError={e => { e.target.style.display="none"; e.target.parentNode.innerHTML='<span style="font-size:18px">⚖️</span>'; }}/>
          </div>
        )}

        {isOpen && (
          <button onClick={toggleSidebar} style={{
            background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.15)",
            borderRadius:8, padding:"5px 7px", cursor:"pointer", color:"rgba(255,255,255,0.7)",
            display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
            transition:"all .2s",
          }}>
            <FiChevronLeft size={16}/>
          </button>
        )}
        {!isOpen && (
          <button onClick={toggleSidebar} style={{
            position:"absolute", top:20, right:-1,
            background: TEAL_FROM, border:"none",
            width:18, height:18, borderRadius:"0 6px 6px 0",
            cursor:"pointer", color:"#fff", fontSize:10, fontWeight:700,
            display:"flex", alignItems:"center", justifyContent:"center",
          }}>›</button>
        )}
      </div>

      {/* Top label like "CABANG YOG ▾" */}
      {/* {isOpen && (
        <div style={{ padding:"0 18px 10px" }}>
          <div style={{ fontSize:9.5, color:"rgba(255,255,255,0.4)", fontWeight:700, letterSpacing:1.8, textTransform:"uppercase", fontFamily:"'Nunito',sans-serif" }}>
            CABANG YOG ▾
          </div>
        </div>
      )} */}

      {/* Divider */}
      <div style={{ margin:"0 16px 10px", borderTop:"1px solid rgba(255,255,255,0.1)" }}/>

      {/* ── Nav ── */}
      <nav style={{ flex:1, display:"flex", flexDirection:"column", gap:2, paddingTop:4, overflowY:"auto", overflowX:"hidden" }}>

        <NavLink to="/dashboard" className={({isActive})=>`sb-link${isActive?" active":""}`}>
          <span className="sb-icon"><FiLayout size={18}/></span>
          {isOpen && <span>Dashboard</span>}
        </NavLink>

        <NavLink to="/availability" className={({isActive})=>`sb-link${isActive?" active":""}`}>
          <span className="sb-icon"><FiCalendar size={18}/></span>
          {isOpen && <span>Availability</span>}
        </NavLink>

        <NavLink to="/allapplication" className={({isActive})=>`sb-link${isActive?" active":""}`}>
          <span className="sb-icon"><FiFileText size={18}/></span>
          {isOpen && <span>All Application</span>}
        </NavLink>

        <NavLink to="/allapplicationcitizens" className={({isActive})=>`sb-link${isActive?" active":""}`}>
          <span className="sb-icon"><FiFileText size={18}/></span>
          {isOpen && <span>All Application Citizens</span>}
        </NavLink>

        {/* {FULL_ACCESS_ROLES.includes(user?.role) && (
          <NavLink to="/Jansanwadappform" className={({isActive})=>`sb-link${isActive?" active":""}`}>
            <span className="sb-icon"><FiSend size={18}/></span>
            {isOpen && <span>Application Form</span>}
          </NavLink>
        )} */}

        {FULL_ACCESS_ROLES.includes(user?.role) && (
          <NavLink to="/users" className={({isActive})=>`sb-link${isActive?" active":""}`}>
            <span className="sb-icon"><FiUsers size={18}/></span>
            {isOpen && <span>Users</span>}
          </NavLink>
        )}
      </nav>

      {/* ── Bottom Settings + User ── */}
      <div style={{ marginTop:"auto" }}>

        {/* Settings link */}
        <div style={{ margin:"0 10px 4px" }}>
          <NavLink to="/settings" className={({isActive})=>`sb-link${isActive?" active":""}`} style={{ margin:0 }}>
            <span className="sb-icon"><FiSettings size={18}/></span>
            {isOpen && <span>Settings</span>}
          </NavLink>
        </div>

        {/* Divider */}
        <div style={{ margin:"6px 16px", borderTop:"1px solid rgba(255,255,255,0.1)" }}/>

        {/* User block */}
        <div style={{ padding: isOpen ? "10px 16px 20px" : "10px 10px 20px" }}>
          {isOpen ? (
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                <div style={{
                  width:34, height:34, borderRadius:"50%", flexShrink:0,
                  background:`linear-gradient(135deg,${GOLD},#b8832e)`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  color:"#fff", fontSize:14, fontWeight:900,
                  boxShadow:`0 3px 10px ${GOLD}66`,
                  fontFamily:"'Nunito',sans-serif",
                }}>
                  {(user?.fullName || user?.userName || "A")[0].toUpperCase()}
                </div>
                <div style={{ overflow:"hidden" }}>
                  <div style={{ color:"#fff", fontSize:12.5, fontWeight:800, lineHeight:1.2, fontFamily:"'Nunito',sans-serif", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:130 }}>
                    {user?.fullName || user?.userName || "Admin User"}
                  </div>
                  <div style={{ color:"rgba(255,255,255,0.55)", fontSize:10.5, fontWeight:600 }}>{user?.role}</div>
                </div>
              </div>
              {user?.departmentName && (
                <div style={{ fontSize:10.5, color:"rgba(255,255,255,0.45)", fontWeight:600, marginBottom:10, paddingLeft:2 }}>
                  Dept: <span style={{ color:"rgba(255,255,255,0.75)", fontWeight:700 }}>{user.departmentName}</span>
                </div>
              )}
              <button onClick={handleLogout} style={{
                width:"100%",
                background:"rgba(255,255,255,0.1)",
                color:"rgba(255,255,255,0.85)",
                border:"1px solid rgba(255,255,255,0.2)",
                borderRadius:10, padding:"8px",
                fontSize:11, fontWeight:800, cursor:"pointer",
                letterSpacing:0.8, textTransform:"uppercase",
                display:"flex", alignItems:"center", justifyContent:"center", gap:7,
                transition:"all .2s",
                fontFamily:"'Nunito',sans-serif",
              }}
              onMouseEnter={e => { e.currentTarget.style.background="rgba(220,50,50,0.3)"; e.currentTarget.style.borderColor="rgba(220,50,50,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.2)"; }}
              >
                <FiLogOut size={13}/>
                Logout
              </button>
            </div>
          ) : (
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10 }}>
              <div style={{
                width:34, height:34, borderRadius:"50%",
                background:`linear-gradient(135deg,${GOLD},#b8832e)`,
                display:"flex", alignItems:"center", justifyContent:"center",
                color:"#fff", fontSize:13, fontWeight:900,
              }}>
                {(user?.fullName || user?.userName || "A")[0].toUpperCase()}
              </div>
              <button onClick={handleLogout} style={{
                background:"transparent", border:"none", cursor:"pointer",
                color:"rgba(255,255,255,0.5)", padding:6, borderRadius:8,
                display:"flex", alignItems:"center", justifyContent:"center",
                transition:"all .2s",
              }}
              onMouseEnter={e => e.currentTarget.style.color="#fff"}
              onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.5)"}
              >
                <FiLogOut size={17}/>
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}