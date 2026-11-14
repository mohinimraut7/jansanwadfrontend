// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../redux/slices/authSlice";
// import { FiBell, FiHelpCircle, FiLogOut } from "react-icons/fi";
// // import logo from "../../assets/logokamal.jpg";
// import logo from "../../assets/vvcmclogo.jpg";

// function Avatar({ name, color }) {
//   const initials = name
//     .split(" ")
//     .map((n) => n[0])
//     .join("")
//     .slice(0, 2)
//     .toUpperCase();

//   return (
//     <div
//       style={{
//         width: 32,
//         height: 32,
//         borderRadius: "50%",
//         background: color || "#6366f1",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontSize: 12,
//         fontWeight: 700,
//         color: "#fff",
//       }}
//     >
//       {initials}
//     </div>
//   );
// }

// const Navbar = () => {
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   const navItems = [
//     { name: "Dashboard", path: "/dashboard" },
//     { name: "All Application", path: "/allapplication" },
//     { name: "Application Form", path: "/Janatadarbarcomplaintform" },
//   ];

//   return (
//     <div
//       style={{
//         background: "#fff",
//         borderBottom: "1px solid #f3f4f6",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "0 32px",
//         height: 60,
//       }}
//     >
      
//       {/* Logo + Text */}
//       <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//         <div
//           style={{
//             width: 50,
//             height: 50,
//             borderRadius: 10,
//             // background: "#111827",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontSize: 13,
//             fontWeight: 800,
//             color: "#fff",
//           }}
//         >
//          <img src={logo} alt="logo" style={{ width: "100%", height: "100%" }} />
//         </div>

//         <div style={{ lineHeight: 1.1 }}>
//           <div style={{ fontSize: 15, fontWeight: 700, color: "#111827" }}>
//             जन संवाद
//           </div>
//           <div style={{ fontSize: 11, color: "#6366f1", fontWeight: 600 }}>
//             Admin Panel
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       {/* <div style={{ display: "flex", gap: 6 }}>
//         {navItems.map((item) => (
//           <NavLink
//             key={item.name}
//             to={item.path}
//             style={({ isActive }) => ({
//               padding: "7px 20px",
//               borderRadius: 24,
//               textDecoration: "none",
//               background: isActive ? "#111827" : "transparent",
//               color: isActive ? "#fff" : "#6b7280",
//               fontSize: 14,
//               fontWeight: 500,
//             })}
//           >
//             {item.name}
//           </NavLink>
//         ))}
//       </div> */}

//       {/* Right Side */}
//       <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
//         <FiBell size={18} />
//         <FiHelpCircle size={18} />

//         <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//           <Avatar name={user?.fullName || "Admin User"} />
//           <div>
//             <div style={{ fontSize: 13, fontWeight: 600 }}>
//               {user?.fullName || "Admin User"}
//             </div>
//             <div style={{ fontSize: 11, color: "#9ca3af" }}>{user?.role}</div>
//           </div>
//         </div>

//         {/* Logout Button */}
//         <button
//           onClick={handleLogout}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: 6,
//             background: "#fee2e2",
//             color: "#dc2626",
//             border: "none",
//             padding: "6px 12px",
//             borderRadius: 8,
//             fontWeight: 600,
//             cursor: "pointer",
//           }}
//         >
//           <FiLogOut size={16} />
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// ===========================

// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../redux/slices/authSlice";
// import { FiBell, FiHelpCircle, FiLogOut } from "react-icons/fi";
// import logo from "../../assets/vvcmclogo.jpg";

// function Avatar({ name, color }) {
//   const initials = name
//     .split(" ")
//     .map((n) => n[0])
//     .join("")
//     .slice(0, 2)
//     .toUpperCase();

//   return (
//     <div style={{
//       width: 34, height: 34, borderRadius: "50%",
//       background: color || "linear-gradient(135deg,#15803d,#a16207)",
//       display: "flex", alignItems: "center", justifyContent: "center",
//       fontSize: 13, fontWeight: 800, color: "#fff",
//       border: "2px solid #fde68a", flexShrink: 0,
//     }}>
//       {initials}
//     </div>
//   );
// }

// const Navbar = () => {
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   return (
//     <>
//       <style>{`
//         .vv-nav { background: linear-gradient(135deg, #14532d 0%, #166534 60%, #15803d 100%); border-bottom: 2px solid #a16207; display:flex; align-items:center; justify-content:space-between; padding: 0 28px; height: 62px; box-shadow: 0 3px 16px #14532d44; position:relative; z-index:100; }
//         .vv-gold-line { position:absolute; bottom:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,#a16207,#fde68a,#ca8a04,#fde68a,#a16207,transparent); }
//         .vv-nav-icon { color:#86efac; cursor:pointer; transition:color .2s,transform .2s; }
//         .vv-nav-icon:hover { color:#fde68a; transform:scale(1.15); }
//         .vv-logout { display:flex; align-items:center; gap:6px; background:#ffffff15; color:#fca5a5; border:1px solid #f8717160; padding:6px 14px; border-radius:8px; font-weight:700; font-size:13px; cursor:pointer; transition:all .2s; font-family:inherit; }
//         .vv-logout:hover { background:#dc262620; color:#fff; border-color:#f87171; }
//         .vv-user-chip { display:flex; align-items:center; gap:8px; background:#ffffff12; border-radius:24px; padding:4px 14px 4px 4px; border:1px solid #ffffff20; }
//       `}</style>

//       <div className="vv-nav">
//         <div className="vv-gold-line"/>

//         {/* ── Logo + Brand ── */}
//         <div style={{ display:"flex", alignItems:"center", gap:12 }}>
//           <div style={{ width:46, height:46, borderRadius:12, overflow:"hidden", border:"2px solid #a16207", flexShrink:0, background:"#fff" }}>
//             <img src={logo} alt="VVCMC" style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
//           </div>
//           <div style={{ lineHeight:1.25 }}>
//             <div style={{ fontSize:15, fontWeight:800, color:"#fef9c3", letterSpacing:0.2 }}>जन संवाद</div>
//             <div style={{ fontSize:10, color:"#86efac", fontWeight:600, letterSpacing:1.5, textTransform:"uppercase" }}>Admin Panel · VVCMC</div>
//           </div>
//           {/* Gold divider */}
//           <div style={{ width:1, height:32, background:"linear-gradient(to bottom,transparent,#a16207,transparent)", marginLeft:8 }}/>
//           <div style={{ fontSize:11, color:"#a3a3a3", color:"#86efac88", maxWidth:180 }}>
//             वसई-विरार शहर महानगरपालिका
//           </div>
//         </div>

//         {/* ── Right Side ── */}
//         <div style={{ display:"flex", alignItems:"center", gap:14 }}>

//           {/* Bell */}
//           <div className="vv-nav-icon">
//             <FiBell size={19}/>
//           </div>

//           {/* Help */}
//           <div className="vv-nav-icon">
//             <FiHelpCircle size={19}/>
//           </div>

//           {/* Separator */}
//           <div style={{ width:1, height:28, background:"#ffffff20" }}/>

//           {/* User Chip */}
//           <div className="vv-user-chip">
//             <Avatar name={user?.fullName || "Admin User"} />
//             <div>
//               <div style={{ fontSize:13, fontWeight:700, color:"#fff", whiteSpace:"nowrap" }}>
//                 {user?.fullName || "Admin User"}
//               </div>
//               <div style={{ fontSize:10, color:"#86efac", fontWeight:500 }}>{user?.role || "Admin"}</div>
//             </div>
//           </div>

//           {/* Logout */}
//           <button onClick={handleLogout} className="vv-logout">
//             <FiLogOut size={15}/>
//             Logout
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../redux/slices/authSlice";
// import { FiBell, FiHelpCircle, FiLogOut } from "react-icons/fi";
// import logo from "../../assets/vvcmclogo.jpg";

// const TEAL_FROM  = "#187484";
// const TEAL_TO    = "#0d4f5c";
// const GOLD       = "#CE9A54";
// const GOLD_DEEP  = "#CA9D28";
// const CREAM      = "#F5E7C2";

// function Avatar({ name }) {
//   const initials = (name || "A")
//     .split(" ")
//     .map((n) => n[0])
//     .join("")
//     .slice(0, 2)
//     .toUpperCase();
//   return (
//     <div style={{
//       width: 34, height: 34, borderRadius: "50%",
//       background: `linear-gradient(135deg, ${GOLD}, #b8832e)`,
//       display: "flex", alignItems: "center", justifyContent: "center",
//       fontSize: 13, fontWeight: 900, color: "#fff",
//       border: "2px solid rgba(255,255,255,0.3)",
//       flexShrink: 0,
//       boxShadow: `0 2px 10px ${GOLD}66`,
//       fontFamily: "'Nunito','Segoe UI',sans-serif",
//     }}>
//       {initials}
//     </div>
//   );
// }

// const Navbar = () => {
//   const { user }  = useSelector((state) => state.auth);
//   const dispatch  = useDispatch();
//   const navigate  = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Noto+Sans+Devanagari:wght@400;700;900&display=swap');

//         .nb-icon-btn {
//           width: 38px; height: 38px;
//           border-radius: 10px;
//           background: rgba(255,255,255,0.1);
//           border: 1px solid rgba(255,255,255,0.15);
//           display: flex; align-items: center; justify-content: center;
//           cursor: pointer;
//           color: rgba(255,255,255,0.8);
//           transition: all 0.2s ease;
//           flex-shrink: 0;
//         }
//         .nb-icon-btn:hover {
//           background: rgba(255,255,255,0.2);
//           color: #fff;
//           transform: scale(1.05);
//         }
//         .nb-logout {
//           display: flex; align-items: center; gap: 7px;
//           background: rgba(255,255,255,0.1);
//           border: 1px solid rgba(255,255,255,0.2);
//           border-radius: 10px;
//           padding: 8px 16px;
//           color: #fff;
//           font-size: 12px;
//           font-weight: 800;
//           cursor: pointer;
//           letter-spacing: 0.5px;
//           font-family: 'Nunito','Segoe UI',sans-serif;
//           transition: all 0.2s ease;
//         }
//         .nb-logout:hover {
//           background: rgba(220,50,50,0.35);
//           border-color: rgba(220,50,50,0.5);
//         }
//         .nb-user-chip {
//           display: flex; align-items: center; gap: 9px;
//           background: rgba(255,255,255,0.12);
//           border: 1px solid rgba(255,255,255,0.2);
//           border-radius: 40px;
//           padding: 4px 16px 4px 4px;
//           transition: background 0.2s;
//         }
//         .nb-user-chip:hover {
//           background: rgba(255,255,255,0.18);
//         }
//         .nb-sep {
//           width: 1px; height: 32px;
//           background: rgba(255,255,255,0.18);
//           flex-shrink: 0;
//         }
//       `}</style>

//       <nav style={{
//         background: `linear-gradient(90deg, ${TEAL_FROM} 0%, #156878 50%, ${TEAL_TO} 100%)`,
//         height: 64,
//         display: "flex",
//         alignItems: "center",
//         padding: "0 24px",
//         boxShadow: "0 3px 20px rgba(13,79,92,0.4)",
//         position: "relative",
//         zIndex: 40,
//         gap: 14,
//         fontFamily: "'Nunito','Segoe UI',sans-serif",
//       }}>

//         {/* Gold bottom accent line */}
//         <div style={{
//           position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
//           background: `linear-gradient(90deg, transparent, ${GOLD}, ${GOLD_DEEP}, ${CREAM}, ${GOLD_DEEP}, ${GOLD}, transparent)`,
//           pointerEvents: "none",
//         }}/>

//         {/* ── Brand ── */}
//         <div style={{ display:"flex", alignItems:"center", gap:12, marginRight:"auto" }}>

//           {/* Logo */}
//           <div style={{
//             width: 44, height: 44, borderRadius: 12, flexShrink: 0,
//             background: `linear-gradient(135deg, ${GOLD}, #b8832e)`,
//             boxShadow: `0 4px 16px ${GOLD}88`,
//             overflow: "hidden",
//             border: "2px solid rgba(255,255,255,0.28)",
//             display: "flex", alignItems: "center", justifyContent: "center",
//           }}>
//             <img
//               src={logo}
//               alt="जन संवाद"
//               style={{ width:"100%", height:"100%", objectFit:"cover" }}
//               onError={e => {
//                 e.target.style.display = "none";
//                 e.target.parentNode.innerHTML = '<span style="font-size:20px">⚖️</span>';
//               }}
//             />
//           </div>

//           {/* Title */}
//           <div style={{ lineHeight: 1.2 }}>
//             <div style={{
//               fontSize: 22,
//               fontWeight: 900,
//               color: "#ffffff",
//               letterSpacing: 0.5,
//               fontFamily: "'Noto Sans Devanagari','Nunito','Segoe UI',sans-serif",
//             }}>
//               जन संवाद
//             </div>
//             <div style={{
//               fontSize: 9.5,
//               fontWeight: 700,
//               color: "rgba(255,255,255,0.55)",
//               letterSpacing: 1.7,
//               textTransform: "uppercase",
//               fontFamily: "'Nunito','Segoe UI',sans-serif",
//             }}>
//               ADMIN PANEL · VVCMC
//             </div>
//           </div>

//           {/* Vertical divider */}
//           <div className="nb-sep" style={{ margin:"0 6px" }}/>

//           {/* Marathi subtitle */}
//           <div style={{
//             fontSize: 12.5,
//             color: "rgba(255,255,255,0.65)",
//             fontFamily: "'Noto Sans Devanagari','Segoe UI',sans-serif",
//             fontWeight: 500,
//           }}>
//             वसई-विरार शहर महानगरपालिका
//           </div>
//         </div>

//         {/* ── Right Actions ── */}
//         <div style={{ display:"flex", alignItems:"center", gap:10 }}>

//           {/* Bell */}
//           <button className="nb-icon-btn">
//             <FiBell size={17}/>
//           </button>

//           {/* Help */}
//           <button className="nb-icon-btn">
//             <FiHelpCircle size={17}/>
//           </button>

//           <div className="nb-sep"/>

//           {/* User chip */}
//           <div className="nb-user-chip">
//             <Avatar name={user?.fullName || user?.userName || "Admin User"}/>
//             <div>
//               <div style={{
//                 fontSize: 13, fontWeight: 800, color: "#fff",
//                 whiteSpace: "nowrap", lineHeight: 1.2,
//                 fontFamily: "'Nunito','Segoe UI',sans-serif",
//               }}>
//                 {user?.fullName || user?.userName || "Admin User"}
//               </div>
//               <div style={{
//                 fontSize: 10, fontWeight: 600,
//                 color: `${CREAM}cc`,
//                 fontFamily: "'Nunito','Segoe UI',sans-serif",
//               }}>
//                 {user?.role || "Admin"}
//               </div>
//             </div>
//           </div>

//           {/* Logout */}
//           <button onClick={handleLogout} className="nb-logout">
//             <FiLogOut size={14}/>
//             Logout
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../redux/slices/authSlice";
// import { FiBell, FiHelpCircle, FiLogOut } from "react-icons/fi";
// import logo from "../../assets/vvcmclogo.jpg";
// import { useSidebar } from "./SidebarContext";

// const TEAL_FROM  = "#187484";
// const TEAL_TO    = "#0d4f5c";
// const GOLD       = "#CE9A54";
// const GOLD_DEEP  = "#CA9D28";
// const CREAM      = "#F5E7C2";

// function Avatar({ name }) {
//   const initials = (name || "A")
//     .split(" ")
//     .map((n) => n[0])
//     .join("")
//     .slice(0, 2)
//     .toUpperCase();
//   return (
//     <div style={{
//       width: 34, height: 34, borderRadius: "50%",
//       background: `linear-gradient(135deg, ${GOLD}, #b8832e)`,
//       display: "flex", alignItems: "center", justifyContent: "center",
//       fontSize: 13, fontWeight: 900, color: "#fff",
//       border: "2px solid rgba(255,255,255,0.3)",
//       flexShrink: 0,
//       boxShadow: `0 2px 10px ${GOLD}66`,
//       fontFamily: "'Nunito','Segoe UI',sans-serif",
//     }}>
//       {initials}
//     </div>
//   );
// }

// const Navbar = () => {
//   const { user }   = useSelector((state) => state.auth);
//   const dispatch   = useDispatch();
//   const navigate   = useNavigate();
//   const { mode }   = useSidebar();
//   const showBrand  = mode === "hidden";

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Noto+Sans+Devanagari:wght@400;700;900&display=swap');

//         .nb-icon-btn {
//           width: 38px; height: 38px;
//           border-radius: 10px;
//           background: rgba(255,255,255,0.1);
//           border: 1px solid rgba(255,255,255,0.15);
//           display: flex; align-items: center; justify-content: center;
//           cursor: pointer;
//           color: rgba(255,255,255,0.8);
//           transition: all 0.2s ease;
//           flex-shrink: 0;
//         }
//         .nb-icon-btn:hover {
//           background: rgba(255,255,255,0.2);
//           color: #fff;
//           transform: scale(1.05);
//         }
//         .nb-logout {
//           display: flex; align-items: center; gap: 7px;
//           background: rgba(255,255,255,0.1);
//           border: 1px solid rgba(255,255,255,0.2);
//           border-radius: 10px;
//           padding: 8px 16px;
//           color: #fff;
//           font-size: 12px;
//           font-weight: 800;
//           cursor: pointer;
//           letter-spacing: 0.5px;
//           font-family: 'Nunito','Segoe UI',sans-serif;
//           transition: all 0.2s ease;
//         }
//         .nb-logout:hover {
//           background: rgba(220,50,50,0.35);
//           border-color: rgba(220,50,50,0.5);
//         }
//         .nb-user-chip {
//           display: flex; align-items: center; gap: 9px;
//           background: rgba(255,255,255,0.12);
//           border: 1px solid rgba(255,255,255,0.2);
//           border-radius: 40px;
//           padding: 4px 16px 4px 4px;
//           transition: background 0.2s;
//         }
//         .nb-user-chip:hover {
//           background: rgba(255,255,255,0.18);
//         }
//         .nb-sep {
//           width: 1px; height: 32px;
//           background: rgba(255,255,255,0.18);
//           flex-shrink: 0;
//         }
//       `}</style>

//       <nav style={{
//         background: `linear-gradient(90deg, ${TEAL_FROM} 0%, #156878 50%, ${TEAL_TO} 100%)`,
//         height: 64,
//         display: "flex",
//         alignItems: "center",
//         padding: "0 24px",
//         boxShadow: "0 3px 20px rgba(13,79,92,0.4)",
//         position: "relative",
//         zIndex: 40,
//         gap: 14,
//         fontFamily: "'Nunito','Segoe UI',sans-serif",
//       }}>

//         {/* Gold bottom accent line */}
//         <div style={{
//           position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
//           background: `linear-gradient(90deg, transparent, ${GOLD}, ${GOLD_DEEP}, ${CREAM}, ${GOLD_DEEP}, ${GOLD}, transparent)`,
//           pointerEvents: "none",
//         }}/>

//         {/* ── Brand — only visible when sidebar is hidden ── */}
//         <div style={{ marginRight:"auto", display:"flex", alignItems:"center", gap:12, overflow:"hidden" }}>
//           {showBrand && (
//             <>
//               {/* Logo */}
//               <div style={{
//                 width: 44, height: 44, borderRadius: 12, flexShrink: 0,
//                 background: `linear-gradient(135deg, ${GOLD}, #b8832e)`,
//                 boxShadow: `0 4px 16px ${GOLD}88`,
//                 overflow: "hidden",
//                 border: "2px solid rgba(255,255,255,0.28)",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//               }}>
//                 <img
//                   src={logo}
//                   alt="जन संवाद"
//                   style={{ width:"100%", height:"100%", objectFit:"cover" }}
//                   onError={e => {
//                     e.target.style.display = "none";
//                     e.target.parentNode.innerHTML = '<span style="font-size:20px">⚖️</span>';
//                   }}
//                 />
//               </div>

//               {/* Title */}
//               <div style={{ lineHeight: 1.2 }}>
//                 <div style={{
//                   fontSize: 22, fontWeight: 900, color: "#ffffff",
//                   letterSpacing: 0.5,
//                   fontFamily: "'Noto Sans Devanagari','Nunito','Segoe UI',sans-serif",
//                 }}>
//                   जन संवाद
//                 </div>
//                 <div style={{
//                   fontSize: 9.5, fontWeight: 700,
//                   color: "rgba(255,255,255,0.55)",
//                   letterSpacing: 1.7, textTransform: "uppercase",
//                   fontFamily: "'Nunito','Segoe UI',sans-serif",
//                 }}>
//                   ADMIN PANEL · VVCMC
//                 </div>
//               </div>

//               {/* Vertical divider */}
//               <div className="nb-sep" style={{ margin:"0 6px" }}/>

//               {/* Marathi subtitle */}
//               <div style={{
//                 fontSize: 12.5, color: "rgba(255,255,255,0.65)",
//                 fontFamily: "'Noto Sans Devanagari','Segoe UI',sans-serif",
//                 fontWeight: 500,
//               }}>
//                 वसई-विरार शहर महानगरपालिका
//               </div>
//             </>
//           )}
//         </div>

//         {/* ── Right Actions ── */}
//         <div style={{ display:"flex", alignItems:"center", gap:10 }}>

//           {/* Bell */}
//           <button className="nb-icon-btn">
//             <FiBell size={17}/>
//           </button>

//           {/* Help */}
//           <button className="nb-icon-btn">
//             <FiHelpCircle size={17}/>
//           </button>

//           <div className="nb-sep"/>

//           {/* User chip */}
//           <div className="nb-user-chip">
//             <Avatar name={user?.fullName || user?.userName || "Admin User"}/>
//             <div>
//               <div style={{
//                 fontSize: 13, fontWeight: 800, color: "#fff",
//                 whiteSpace: "nowrap", lineHeight: 1.2,
//                 fontFamily: "'Nunito','Segoe UI',sans-serif",
//               }}>
//                 {user?.fullName || user?.userName || "Admin User"}
//               </div>
//               <div style={{
//                 fontSize: 10, fontWeight: 600,
//                 color: `${CREAM}cc`,
//                 fontFamily: "'Nunito','Segoe UI',sans-serif",
//               }}>
//                 {user?.role || "Admin"}
//               </div>
//             </div>
//           </div>

//           {/* Logout */}
//           <button onClick={handleLogout} className="nb-logout">
//             <FiLogOut size={14}/>
//             Logout
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../redux/slices/authSlice";
// import { FiBell, FiHelpCircle, FiLogOut, FiSearch, FiChevronDown } from "react-icons/fi";
// import logo from "../../assets/vvcmclogo.jpg";
// import { useSidebar } from "./SidebarContext";

// const TEAL    = "#187484";
// const TEAL_TO = "#0d4f5c";
// const GOLD    = "#CE9A54";
// const GOLD_DP = "#CA9D28";
// const CREAM   = "#F5E7C2";

// function Avatar({ name }) {
//   const initials = (name || "A")
//     .split(" ")
//     .map((n) => n[0])
//     .join("")
//     .slice(0, 2)
//     .toUpperCase();
//   return (
//     <div style={{
//       width: 36, height: 36, borderRadius: "50%",
//       background: `linear-gradient(135deg, ${TEAL}, ${TEAL_TO})`,
//       display: "flex", alignItems: "center", justifyContent: "center",
//       fontSize: 13, fontWeight: 900, color: "#fff",
//       flexShrink: 0,
//       fontFamily: "'Nunito','Segoe UI',sans-serif",
//       cursor: "pointer",
//       boxShadow: `0 2px 8px ${TEAL}55`,
//     }}>
//       {initials}
//     </div>
//   );
// }

// const Navbar = () => {
//   const { user }       = useSelector((state) => state.auth);
//   const dispatch       = useDispatch();
//   const navigate       = useNavigate();
//   const { mode }       = useSidebar();
//   const showBrand      = mode === "hidden";
//   const [dropdown, setDropdown] = useState(false);
//   const [peopleOnline, setPeopleOnline] = useState(16);
//   const dropRef        = useRef(null);

//   useEffect(() => {
//     const iv = setInterval(() => setPeopleOnline(Math.floor(12 + Math.random() * 8)), 4000);
//     return () => clearInterval(iv);
//   }, []);

//   useEffect(() => {
//     const handler = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setDropdown(false); };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Noto+Sans+Devanagari:wght@400;700;900&display=swap');

//         .nb-wrap {
//           background: #ffffff;
//           height: 56px;
//           display: flex;
//           align-items: center;
//           padding: 0 20px;
//           gap: 12px;
//           border-bottom: 2px solid transparent;
//           border-image: linear-gradient(90deg, transparent, ${GOLD}, ${GOLD_DP}, ${CREAM}, ${GOLD_DP}, ${GOLD}, transparent) 1;
//           box-shadow: 0 2px 12px rgba(24,116,132,0.08);
//           font-family: 'Nunito','Segoe UI',sans-serif;
//           position: relative;
//           z-index: 40;
//         }

//         .nb-search-box {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           background: #f0f7f9;
//           border: 1.5px solid #d8edf1;
//           border-radius: 10px;
//           padding: 7px 14px;
//           min-width: 260px;
//           transition: border-color 0.2s, box-shadow 0.2s;
//         }
//         .nb-search-box:focus-within {
//           border-color: ${TEAL};
//           box-shadow: 0 0 0 3px ${TEAL}18;
//         }
//         .nb-search-input {
//           border: none;
//           background: transparent;
//           outline: none;
//           font-size: 13px;
//           color: #1a3a40;
//           font-family: 'Nunito','Segoe UI',sans-serif;
//           width: 100%;
//         }
//         .nb-search-input::placeholder { color: #9bb5ba; font-weight: 500; }

//         .nb-category-btn {
//           display: flex; align-items: center; gap: 4px;
//           background: transparent; border: none; cursor: pointer;
//           color: #187484; font-size: 12px; font-weight: 700;
//           font-family: 'Nunito','Segoe UI',sans-serif;
//           padding: 0; white-space: nowrap;
//         }
//         .nb-category-btn:hover { color: ${GOLD_DP}; }

//         .nb-sep { width: 1px; height: 16px; background: #d8edf1; flex-shrink: 0; }

//         .nb-online {
//           display: flex; align-items: center; gap: 6px;
//           font-size: 13px; font-weight: 700;
//           color: #1a3a40;
//           white-space: nowrap;
//           font-family: 'Nunito','Segoe UI',sans-serif;
//         }
//         .nb-online-dot {
//           width: 8px; height: 8px; border-radius: 50%;
//           background: #66A962;
//           box-shadow: 0 0 6px #66A96288;
//           animation: nb-pulse 2s infinite;
//           flex-shrink: 0;
//         }
//         @keyframes nb-pulse { 0%,100%{opacity:1} 50%{opacity:.4} }

//         .nb-avatar-wrap { position: relative; }
//         .nb-dropdown {
//           position: absolute; top: calc(100% + 10px); right: 0;
//           background: #fff;
//           border: 1px solid #d8edf1;
//           border-radius: 14px;
//           box-shadow: 0 8px 32px rgba(24,116,132,0.14);
//           min-width: 200px;
//           z-index: 100;
//           overflow: hidden;
//           animation: nb-drop .18s ease;
//         }
//         @keyframes nb-drop { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:none} }

//         .nb-dropdown-user {
//           padding: 14px 16px 12px;
//           border-bottom: 1px solid #f0f7f9;
//           background: linear-gradient(135deg, ${TEAL}0a, ${GOLD}0a);
//         }
//         .nb-dropdown-item {
//           display: flex; align-items: center; gap: 10px;
//           padding: 10px 16px;
//           font-size: 13px; font-weight: 600;
//           color: #1a3a40;
//           cursor: pointer;
//           transition: background 0.15s;
//           font-family: 'Nunito','Segoe UI',sans-serif;
//         }
//         .nb-dropdown-item:hover { background: #f0f7f9; }
//         .nb-dropdown-item.danger { color: #d9534f; }
//         .nb-dropdown-item.danger:hover { background: #fde8e8; }

//         .nb-brand-block {
//           display: flex; align-items: center; gap: 10px;
//           animation: nb-drop .25s ease;
//         }
//       `}</style>

//       <div className="nb-wrap">

//         {/* ── Brand — only when sidebar hidden ── */}
//         {showBrand && (
//           <div className="nb-brand-block" style={{ marginRight: 16 }}>
//             <div style={{
//               width: 36, height: 36, borderRadius: 10, flexShrink: 0,
//               background: `linear-gradient(135deg, ${GOLD}, #b8832e)`,
//               overflow: "hidden", border: `1.5px solid ${GOLD}66`,
//               display: "flex", alignItems: "center", justifyContent: "center",
//               boxShadow: `0 3px 10px ${GOLD}55`,
//             }}>
//               <img src={logo} alt="जन संवाद" style={{ width:"100%", height:"100%", objectFit:"cover" }}
//                 onError={e => { e.target.style.display="none"; e.target.parentNode.innerHTML='<span style="font-size:16px">⚖️</span>'; }}/>
//             </div>
//             <div style={{ lineHeight: 1.2 }}>
//               <div style={{ fontSize:16, fontWeight:900, color: TEAL, fontFamily:"'Noto Sans Devanagari','Nunito',sans-serif" }}>जन संवाद</div>
//               <div style={{ fontSize:9, fontWeight:700, color:"#9bb5ba", letterSpacing:1.4, textTransform:"uppercase" }}>ADMIN PANEL · VVCMC</div>
//             </div>
//             <div style={{ fontSize:12, color:"#9bb5ba", fontWeight:500, marginLeft:4 }}>वसई-विरार शहर महानगरपालिका</div>
//             <div className="nb-sep" style={{ margin:"0 8px" }}/>
//           </div>
//         )}

//         {/* ── Search Box ── */}
//         <div className="nb-search-box">
//           <FiSearch size={14} color="#9bb5ba"/>
//           <div className="nb-sep"/>
//           <button className="nb-category-btn">
//             All Category <FiChevronDown size={12}/>
//           </button>
//           <div className="nb-sep"/>
//           <input className="nb-search-input" placeholder="Search here…"/>
//         </div>

//         {/* Spacer */}
//         <div style={{ flex: 1 }}/>

//         {/* ── Online count ── */}
//         <div className="nb-online">
//           <span className="nb-online-dot"/>
//           {peopleOnline} Online
//         </div>

//         <div className="nb-sep"/>

//         {/* ── Avatar + Dropdown ── */}
//         <div className="nb-avatar-wrap" ref={dropRef}>
//           <div onClick={() => setDropdown(p => !p)}>
//             <Avatar name={user?.fullName || user?.userName || "Admin User"}/>
//           </div>

//           {dropdown && (
//             <div className="nb-dropdown">
//               {/* User info */}
//               <div className="nb-dropdown-user">
//                 <div style={{ fontSize:13, fontWeight:800, color:"#1a3a40" }}>
//                   {user?.fullName || user?.userName || "Admin User"}
//                 </div>
//                 <div style={{ fontSize:11, color:"#9bb5ba", fontWeight:600, marginTop:2 }}>{user?.role || "Admin"}</div>
//                 {user?.departmentName && (
//                   <div style={{ fontSize:11, color:"#9bb5ba", fontWeight:600, marginTop:1 }}>
//                     Dept: <span style={{ color: TEAL, fontWeight:700 }}>{user.departmentName}</span>
//                   </div>
//                 )}
//               </div>

//               {/* Bell */}
//               <div className="nb-dropdown-item">
//                 <FiBell size={14} color={TEAL}/>
//                 Notifications
//               </div>

//               {/* Help */}
//               <div className="nb-dropdown-item">
//                 <FiHelpCircle size={14} color={TEAL}/>
//                 Help
//               </div>

//               {/* Logout */}
//               <div className="nb-dropdown-item danger" onClick={handleLogout}>
//                 <FiLogOut size={14}/>
//                 Logout
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../redux/slices/authSlice";
// import { FiBell, FiHelpCircle, FiLogOut, FiSearch, FiChevronDown } from "react-icons/fi";
// import logo from "../../assets/vvcmclogo.jpg";
// import { useSidebar } from "./SidebarContext";

// const TEAL    = "#187484";
// const TEAL_TO = "#0d4f5c";
// const GOLD    = "#CE9A54";
// const GOLD_DP = "#CA9D28";
// const CREAM   = "#F5E7C2";

// function Avatar({ name }) {
//   const initials = (name || "A")
//     .split(" ")
//     .map((n) => n[0])
//     .join("")
//     .slice(0, 2)
//     .toUpperCase();
//   return (
//     <div style={{
//       width: 36, height: 36, borderRadius: "50%",
//       background: `linear-gradient(135deg, ${TEAL}, ${TEAL_TO})`,
//       display: "flex", alignItems: "center", justifyContent: "center",
//       fontSize: 13, fontWeight: 900, color: "#fff",
//       flexShrink: 0,
//       fontFamily: "'Nunito','Segoe UI',sans-serif",
//       cursor: "pointer",
//       boxShadow: `0 2px 8px ${TEAL}55`,
//     }}>
//       {initials}
//     </div>
//   );
// }

// const Navbar = () => {
//   const { user }       = useSelector((state) => state.auth);
//   const dispatch       = useDispatch();
//   const navigate       = useNavigate();
//   const { mode }       = useSidebar();
//   const showBrand      = mode === "hidden";
//   const [dropdown, setDropdown] = useState(false);
//   const [peopleOnline, setPeopleOnline] = useState(16);
//   const dropRef        = useRef(null);

//   useEffect(() => {
//     const iv = setInterval(() => setPeopleOnline(Math.floor(12 + Math.random() * 8)), 4000);
//     return () => clearInterval(iv);
//   }, []);

//   useEffect(() => {
//     const handler = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setDropdown(false); };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Noto+Sans+Devanagari:wght@400;700;900&display=swap');

//         .nb-wrap {
//           background: #ffffff;
//           height: 56px;
//           display: flex;
//           align-items: center;
//           padding: 0 20px;
//           gap: 12px;
//           border-bottom: 2px solid transparent;
//           border-image: linear-gradient(90deg, transparent, ${GOLD}, ${GOLD_DP}, ${CREAM}, ${GOLD_DP}, ${GOLD}, transparent) 1;
//           box-shadow: 0 2px 12px rgba(24,116,132,0.08);
//           font-family: 'Nunito','Segoe UI',sans-serif;
//           position: relative;
//           z-index: 40;
//         }

//         .nb-search-box {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           background: #f0f7f9;
//           border: 1.5px solid #d8edf1;
//           border-radius: 10px;
//           padding: 7px 14px;
//           min-width: 260px;
//           transition: border-color 0.2s, box-shadow 0.2s;
//         }
//         .nb-search-box:focus-within {
//           border-color: ${TEAL};
//           box-shadow: 0 0 0 3px ${TEAL}18;
//         }
//         .nb-search-input {
//           border: none;
//           background: transparent;
//           outline: none;
//           font-size: 13px;
//           color: #1a3a40;
//           font-family: 'Nunito','Segoe UI',sans-serif;
//           width: 100%;
//         }
//         .nb-search-input::placeholder { color: #9bb5ba; font-weight: 500; }

//         .nb-category-btn {
//           display: flex; align-items: center; gap: 4px;
//           background: transparent; border: none; cursor: pointer;
//           color: #187484; font-size: 12px; font-weight: 700;
//           font-family: 'Nunito','Segoe UI',sans-serif;
//           padding: 0; white-space: nowrap;
//         }
//         .nb-category-btn:hover { color: ${GOLD_DP}; }

//         .nb-sep { width: 1px; height: 16px; background: #d8edf1; flex-shrink: 0; }

//         .nb-online {
//           display: flex; align-items: center; gap: 6px;
//           font-size: 13px; font-weight: 700;
//           color: #1a3a40;
//           white-space: nowrap;
//           font-family: 'Nunito','Segoe UI',sans-serif;
//         }
//         .nb-online-dot {
//           width: 8px; height: 8px; border-radius: 50%;
//           background: #66A962;
//           box-shadow: 0 0 6px #66A96288;
//           animation: nb-pulse 2s infinite;
//           flex-shrink: 0;
//         }
//         @keyframes nb-pulse { 0%,100%{opacity:1} 50%{opacity:.4} }

//         .nb-avatar-wrap { position: relative; }
//         .nb-dropdown {
//           position: absolute; top: calc(100% + 10px); right: 0;
//           background: #fff;
//           border: 1px solid #d8edf1;
//           border-radius: 14px;
//           box-shadow: 0 8px 32px rgba(24,116,132,0.14);
//           min-width: 200px;
//           z-index: 100;
//           overflow: hidden;
//           animation: nb-drop .18s ease;
//         }
//         @keyframes nb-drop { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:none} }

//         .nb-dropdown-user {
//           padding: 14px 16px 12px;
//           border-bottom: 1px solid #f0f7f9;
//           background: linear-gradient(135deg, ${TEAL}0a, ${GOLD}0a);
//         }
//         .nb-dropdown-item {
//           display: flex; align-items: center; gap: 10px;
//           padding: 10px 16px;
//           font-size: 13px; font-weight: 600;
//           color: #1a3a40;
//           cursor: pointer;
//           transition: background 0.15s;
//           font-family: 'Nunito','Segoe UI',sans-serif;
//         }
//         .nb-dropdown-item:hover { background: #f0f7f9; }
//         .nb-dropdown-item.danger { color: #d9534f; }
//         .nb-dropdown-item.danger:hover { background: #fde8e8; }

//         .nb-brand-block {
//           display: flex; align-items: center; gap: 10px;
//           animation: nb-drop .25s ease;
//         }
//       `}</style>

//       <div className="nb-wrap">

//         {/* ── Brand — only when sidebar hidden ── */}
//         {showBrand && (
//           <div className="nb-brand-block" style={{ marginRight: 16 }}>
//             {/* Bigger Logo */}
//             <div style={{
//               width: 50, height: 50, borderRadius: 13, flexShrink: 0,
//               background: `linear-gradient(135deg, ${GOLD}, #b8832e)`,
//               overflow: "hidden", border: `2px solid ${GOLD}88`,
//               display: "flex", alignItems: "center", justifyContent: "center",
//               boxShadow: `0 4px 14px ${GOLD}66`,
//             }}>
//               <img src={logo} alt="जन संवाद" style={{ width:"100%", height:"100%", objectFit:"cover" }}
//                 onError={e => { e.target.style.display="none"; e.target.parentNode.innerHTML='<span style="font-size:22px">⚖️</span>'; }}/>
//             </div>

//             {/* Text block */}
//             <div style={{ lineHeight: 1.25 }}>
//               {/* वसई-विरार first — large bold */}
//               <div style={{
//                 fontSize: 15, fontWeight: 900, color: TEAL,
//                 fontFamily: "'Noto Sans Devanagari','Nunito',sans-serif",
//                 letterSpacing: 0.2,
//               }}>
//                 वसई-विरार शहर महानगरपालिका
//               </div>
//               {/* जन संवाद second — larger bold */}
//               <div style={{
//                 fontSize: 20, fontWeight: 900, color: TEAL_TO,
//                 fontFamily: "'Noto Sans Devanagari','Nunito',sans-serif",
//                 letterSpacing: 0.4, lineHeight: 1.1,
//               }}>
//                 जन संवाद
//               </div>
//               <div style={{ fontSize: 9, fontWeight: 700, color: "#9bb5ba", letterSpacing: 1.4, textTransform: "uppercase", marginTop: 1 }}>
//                 ADMIN PANEL · VVCMC
//               </div>
//             </div>

//             <div className="nb-sep" style={{ margin: "0 12px", height: 40 }}/>
//           </div>
//         )}

//         {/* ── Search Box ── */}
//         <div className="nb-search-box">
//           <FiSearch size={14} color="#9bb5ba"/>
//           <div className="nb-sep"/>
//           <button className="nb-category-btn">
//             All Category <FiChevronDown size={12}/>
//           </button>
//           <div className="nb-sep"/>
//           <input className="nb-search-input" placeholder="Search here…"/>
//         </div>

//         {/* Spacer */}
//         <div style={{ flex: 1 }}/>

//         {/* ── Online count ── */}
//         {/* <div className="nb-online">
//           <span className="nb-online-dot"/>
//           {peopleOnline} Online
//         </div> */}

//         <div className="nb-sep"/>

//         {/* ── Avatar + Dropdown ── */}
//         <div className="nb-avatar-wrap" ref={dropRef}>
//           <div onClick={() => setDropdown(p => !p)}>
//             <Avatar name={user?.fullName || user?.userName || "Admin User"}/>
//           </div>

//           {dropdown && (
//             <div className="nb-dropdown">
//               {/* User info */}
//               <div className="nb-dropdown-user">
//                 <div style={{ fontSize:13, fontWeight:800, color:"#1a3a40" }}>
//                   {user?.fullName || user?.userName || "Admin User"}
//                 </div>
//                 <div style={{ fontSize:11, color:"#9bb5ba", fontWeight:600, marginTop:2 }}>{user?.role || "Admin"}</div>
//                 {user?.departmentName && (
//                   <div style={{ fontSize:11, color:"#9bb5ba", fontWeight:600, marginTop:1 }}>
//                     Dept: <span style={{ color: TEAL, fontWeight:700 }}>{user.departmentName}</span>
//                   </div>
//                 )}
//               </div>

//               {/* Bell */}
//               <div className="nb-dropdown-item">
//                 <FiBell size={14} color={TEAL}/>
//                 Notifications
//               </div>

//               {/* Help */}
//               <div className="nb-dropdown-item">
//                 <FiHelpCircle size={14} color={TEAL}/>
//                 Help
//               </div>

//               {/* Logout */}
//               <div className="nb-dropdown-item danger" onClick={handleLogout}>
//                 <FiLogOut size={14}/>
//                 Logout
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { FiBell, FiHelpCircle, FiLogOut, FiSearch, FiChevronDown } from "react-icons/fi";
import logo from "../../assets/vvcmclogo.jpg";
import { useSidebar } from "./SidebarContext";
import LanguageToggle from "../../i18n/LanguageToggle";

// ── Palette: White + Soft Teal + Subtle Gold ──
const WHITE         = "#FFFFFF";
const SEARCH_BG     = "#F1F7F8";
const SEARCH_BORDER = "#E5EEEE";
const TEAL          = "#087F8C";
const TEAL_TO       = "#0d4f5c";   // existing dark teal (matches sidebar)
const GOLD          = "#D8B66A";
const TEXT_DARK     = "#1a3a40";   // existing text colour
const MUTED         = "#8AA5AB";

function Avatar({ name }) {
  const initials = (name || "A")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className="nb-avatar" style={{
      width: 38, height: 38, borderRadius: "50%",
      background: TEAL,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 13.5, fontWeight: 700, color: WHITE,
      flexShrink: 0,
      fontFamily: "'Montserrat','Segoe UI',sans-serif",
      cursor: "pointer",
      border: `2px solid ${WHITE}`,
      userSelect: "none",
    }}>
      {initials}
    </div>
  );
}

const Navbar = () => {
  const { user }       = useSelector((state) => state.auth);
  const dispatch       = useDispatch();
  const navigate       = useNavigate();
  const { mode }       = useSidebar();
  const showBrand      = mode === "hidden";
  const [dropdown, setDropdown] = useState(false);
  const [peopleOnline, setPeopleOnline] = useState(16);
  const dropRef        = useRef(null);

  useEffect(() => {
    const iv = setInterval(() => setPeopleOnline(Math.floor(12 + Math.random() * 8)), 4000);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const handler = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setDropdown(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Noto+Sans+Devanagari:wght@600;700&display=swap');

        .nb-wrap {
          background: ${WHITE};
          height: 60px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          padding: 0 24px;
          gap: 14px;
          border-bottom: 1px solid ${SEARCH_BORDER};
          box-shadow: 0 1px 4px rgba(8,127,140,0.05);
          font-family: 'Montserrat','Segoe UI',sans-serif;
          position: relative;
          z-index: 40;
        }

        .nb-search-box {
          display: flex;
          align-items: center;
          gap: 10px;
          height: 40px;
          box-sizing: border-box;
          background: ${SEARCH_BG};
          border: 1px solid ${SEARCH_BORDER};
          border-radius: 10px;
          padding: 0 14px;
          flex: 0 1 420px;
          min-width: 0;
          transition: border-color 200ms ease, box-shadow 200ms ease, background 200ms ease;
        }
        .nb-search-box:hover { border-color: #D5E4E6; }
        .nb-search-box:focus-within {
          background: ${WHITE};
          border-color: ${TEAL};
          box-shadow: 0 0 0 3px rgba(8,127,140,0.10);
        }
        .nb-search-input {
          border: none;
          background: transparent;
          outline: none;
          font-size: 13px;
          font-weight: 500;
          color: ${TEXT_DARK};
          font-family: 'Montserrat','Segoe UI',sans-serif;
          width: 100%;
          min-width: 0;
          height: 100%;
        }
        .nb-search-input::placeholder { color: ${MUTED}; font-weight: 500; }

        .nb-category-btn {
          display: flex; align-items: center; gap: 4px;
          background: transparent; border: none; cursor: pointer;
          color: ${TEAL}; font-size: 12.5px; font-weight: 600;
          font-family: 'Montserrat','Segoe UI',sans-serif;
          padding: 0; white-space: nowrap; flex-shrink: 0;
          transition: color 200ms ease;
        }
        .nb-category-btn:hover { color: ${GOLD}; }

        .nb-sep { width: 1px; height: 18px; background: ${SEARCH_BORDER}; flex-shrink: 0; }

        .nb-online {
          display: flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 600;
          color: ${TEXT_DARK};
          white-space: nowrap;
          font-family: 'Montserrat','Segoe UI',sans-serif;
        }
        .nb-online-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #66A962;
          box-shadow: 0 0 6px #66A96288;
          animation: nb-pulse 2s infinite;
          flex-shrink: 0;
        }
        @keyframes nb-pulse { 0%,100%{opacity:1} 50%{opacity:.4} }

        .nb-avatar-wrap {
          position: relative;
          display: flex; align-items: center;
          flex-shrink: 0;
        }
        .nb-avatar {
          box-shadow: 0 0 0 1px ${GOLD}, 0 2px 6px rgba(8,127,140,0.18);
          transition: box-shadow 200ms ease;
        }
        .nb-avatar:hover {
          box-shadow: 0 0 0 1px ${GOLD}, 0 4px 12px rgba(8,127,140,0.28);
        }

        .nb-dropdown {
          position: absolute; top: calc(100% + 10px); right: 0;
          background: ${WHITE};
          border: 1px solid ${SEARCH_BORDER};
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(8,127,140,0.10);
          min-width: 210px;
          z-index: 100;
          overflow: hidden;
          animation: nb-drop 200ms ease;
        }
        @keyframes nb-drop { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:none} }

        .nb-dropdown-user {
          padding: 14px 16px 12px;
          border-bottom: 1px solid ${SEARCH_BORDER};
          border-top: 2px solid ${GOLD};
          background: ${SEARCH_BG};
        }
        .nb-dropdown-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 16px;
          font-size: 13px; font-weight: 500;
          color: ${TEXT_DARK};
          cursor: pointer;
          transition: background 200ms ease, color 200ms ease;
          font-family: 'Montserrat','Segoe UI',sans-serif;
        }
        .nb-dropdown-item:hover { background: ${SEARCH_BG}; color: ${TEAL}; }
        .nb-dropdown-item.danger { color: #d9534f; }
        .nb-dropdown-item.danger:hover { background: #fdf0f0; color: #d9534f; }

        .nb-brand-block {
          display: flex; align-items: center; gap: 10px;
          flex-shrink: 0;
          animation: nb-drop 200ms ease;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .nb-wrap { padding: 0 18px; gap: 12px; }
          .nb-search-box { flex-basis: 340px; }
        }
        @media (max-width: 767px) {
          /* room for the fixed "open sidebar" button at top-left */
          .nb-wrap { padding: 0 12px 0 52px; gap: 10px; }
          .nb-search-box { flex: 1 1 auto; padding: 0 10px; gap: 8px; }
          .nb-brand-block { display: none; }
        }
      `}</style>

      <div className="nb-wrap">

        {/* ── Brand — only when sidebar hidden ── */}
        {showBrand && (
          <div className="nb-brand-block" style={{ marginRight: 8 }}>
            {/* Bigger Logo */}
            <div style={{
              width: 44, height: 44, borderRadius: 10, flexShrink: 0,
              background: WHITE,
              overflow: "hidden", border: `1px solid ${GOLD}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 2px 6px rgba(8,127,140,0.10)",
            }}>
              <img src={logo} alt="जन संवाद" style={{ width:"100%", height:"100%", objectFit:"cover" }}
                onError={e => { e.target.style.display="none"; e.target.parentNode.innerHTML='<span style="font-size:22px">⚖️</span>'; }}/>
            </div>

            {/* Text block */}
            <div style={{ lineHeight: 1.25 }}>
              {/* वसई-विरार first — large bold */}
              <div style={{
                fontSize: 14, fontWeight: 700, color: TEAL,
                fontFamily: "'Noto Sans Devanagari','Montserrat',sans-serif",
                letterSpacing: 0.1, whiteSpace: "nowrap",
              }}>
                वसई-विरार शहर महानगरपालिका
              </div>
              {/* जन संवाद second — larger bold */}
              <div style={{
                fontSize: 19, fontWeight: 700, color: TEAL_TO,
                fontFamily: "'Noto Sans Devanagari','Montserrat',sans-serif",
                letterSpacing: 0.2, lineHeight: 1.15, whiteSpace: "nowrap",
              }}>
                जन संवाद
              </div>
              <div style={{ fontSize: 9, fontWeight: 600, color: MUTED, letterSpacing: 1.4, textTransform: "uppercase", marginTop: 1, whiteSpace: "nowrap" }}>
                ADMIN PANEL · VVCMC
              </div>
            </div>

            <div className="nb-sep" style={{ margin: "0 8px 0 14px", height: 32 }}/>
          </div>
        )}

        {/* ── Search Box ── */}
        <div className="nb-search-box">
          <FiSearch size={15} color={TEAL} style={{ flexShrink: 0 }}/>
          <div className="nb-sep"/>
          <button className="nb-category-btn">
            All Category <FiChevronDown size={12}/>
          </button>
          <div className="nb-sep"/>
          <input className="nb-search-input" placeholder="Search here…"/>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }}/>

        {/* ── Online count ── */}
        {/* <div className="nb-online">
          <span className="nb-online-dot"/>
          {peopleOnline} Online
        </div> */}

        <div className="nb-sep"/>

              {/* ── Language toggle ── */}
        <LanguageToggle variant="light" />

        <div className="nb-sep"/>

        {/* ── Avatar + Dropdown ── */}
        <div className="nb-avatar-wrap" ref={dropRef}>
          <div onClick={() => setDropdown(p => !p)}>
            <Avatar name={user?.fullName || user?.userName || "Admin User"}/>
          </div>

          {dropdown && (
            <div className="nb-dropdown">
              {/* User info */}
              <div className="nb-dropdown-user">
                <div style={{ fontSize:13, fontWeight:700, color:TEXT_DARK }}>
                  {user?.fullName || user?.userName || "Admin User"}
                </div>
                <div style={{ fontSize:11, color:MUTED, fontWeight:500, marginTop:2 }}>{user?.role || "Admin"}</div>
                {user?.departmentName && (
                  <div style={{ fontSize:11, color:MUTED, fontWeight:500, marginTop:1 }}>
                    Dept: <span style={{ color: TEAL, fontWeight:600 }}>{user.departmentName}</span>
                  </div>
                )}
              </div>

              {/* Bell */}
              <div className="nb-dropdown-item">
                <FiBell size={14} color={TEAL}/>
                Notifications
              </div>

              {/* Help */}
              <div className="nb-dropdown-item">
                <FiHelpCircle size={14} color={TEAL}/>
                Help
              </div>

              {/* Logout */}
              <div className="nb-dropdown-item danger" onClick={handleLogout}>
                <FiLogOut size={14}/>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;