// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// // import logo from "../../assets/vvcmclogo.jpg";
// import logo from "../../assets/vvcmclogo.jpg";
// import LanguageToggle from "../../i18n/LanguageToggle";

// export default function NavbarLanding() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [menu, setMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("citizenUser");
//     navigate("/login");
//     setMenu(false);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:wght@400&family=Noto+Sans+Devanagari:wght@600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

//         .cn-outer {
//           padding: 10px 20px;
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.4s ease;
//         }
//         .cn-outer.scrolled { padding: 6px 20px; }

//         /* ── Main pill navbar ── */
//         .cn-nav {
//           background: linear-gradient(135deg, #187484 0%, #114e59 100%);
//           padding: 0 16px 0 0;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 90px;
//           border-radius: 100px;
//           width: 97%;
//           max-width: 1300px;
//           border: 2px solid rgba(202,157,40,0.5);
//           box-shadow: 0 10px 36px rgba(0,0,0,0.3);
//           transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
//           overflow: visible;
//         }
//         .cn-outer.scrolled .cn-nav {
//           height: 70px;
//           width: 93%;
//         }

//         /* ── Brand pill — large protruding left section ── */
//         .cn-brand {
//           display: flex;
//           align-items: center;
//           gap: 18px;
//           cursor: pointer;
//           background: linear-gradient(135deg, #1c8fa3 0%, #145f6f 100%);
//           border: 2.5px solid rgba(202,157,40,0.75);
//           border-radius: 100px;
//           /* big protrusion top and bottom */
//           padding: 10px 32px 10px 10px;
//           margin-left: -3px;
//           height: 110px;
//           box-shadow:
//             0 10px 30px rgba(0,0,0,0.4),
//             0 0 0 5px rgba(202,157,40,0.1),
//             inset 0 1px 0 rgba(255,255,255,0.15);
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//           position: relative;
//           z-index: 2;
//         }
//         .cn-outer.scrolled .cn-brand {
//           height: 86px;
//           padding: 8px 26px 8px 8px;
//           gap: 14px;
//         }
//         .cn-brand:hover {
//           background: linear-gradient(135deg, #22a8bf 0%, #187080 100%);
//           box-shadow: 0 12px 36px rgba(0,0,0,0.45), 0 0 0 5px rgba(202,157,40,0.22);
//           transform: translateY(-2px);
//         }

//         /* ── Logo — VERY BIG ── */
//         .cn-logo-wrap {
//           width: 86px;
//           height: 86px;
//           border-radius: 50%;
//           overflow: hidden;
//           border: 3.5px solid #CA9D28;
//           background: #fff;
//           flex-shrink: 0;
//           transition: all 0.3s ease;
//           box-shadow:
//             0 0 0 5px rgba(202,157,40,0.2),
//             0 0 0 8px rgba(202,157,40,0.07),
//             0 6px 20px rgba(0,0,0,0.35);
//         }
//         .cn-outer.scrolled .cn-logo-wrap {
//           width: 66px;
//           height: 66px;
//         }
//         .cn-logo-wrap img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         /* ── Brand text ── */
//         .cn-brand-text {
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//         }

//         /* "वसई-विरार शहर महानगरपालिका" — very large bold */
//         .cn-brand-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 24px;
//           font-weight: 700;
//           color: #ffffff;
//           line-height: 1.2;
//           white-space: nowrap;
//           letter-spacing: 0.3px;
//           text-shadow: 0 2px 8px rgba(0,0,0,0.4);
//         }
//         .cn-outer.scrolled .cn-brand-name { font-size: 19px; }

//         /* "जन संवाद" — large bold golden */
//         .cn-brand-sub {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 20px;
//           font-weight: 700;
//           color: #F5C030;
//           line-height: 1.2;
//           letter-spacing: 0.5px;
//           text-shadow: 0 1px 6px rgba(0,0,0,0.3);
//         }
//         .cn-outer.scrolled .cn-brand-sub { font-size: 15px; }

//         /* ── Nav Links ── */
//         .cn-links {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }
//         .cn-link {
//           padding: 9px 20px;
//           border-radius: 50px;
//           font-size: 14px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           border: none;
//           background: transparent;
//           color: rgba(245,231,194,0.88);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }
//         .cn-link:hover { color: #CA9D28; background: rgba(255,255,255,0.07); }
//         .cn-link.active {
//           background: #CA9D28;
//           color: #114e59;
//           font-weight: 800;
//           box-shadow: 0 4px 12px rgba(202,157,40,0.35);
//         }

//         .cn-citizen-name {
//           font-size: 14px;
//           color: #F5E7C2;
//           font-weight: 700;
//           padding: 0 8px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }

//         /* ── Buttons ── */
//         .cn-btn-solid {
//           padding: 9px 24px;
//           border-radius: 50px;
//           border: none;
//           background: linear-gradient(135deg, #CA9D28 0%, #CE9A54 100%);
//           color: #1a3a44;
//           font-size: 13.5px;
//           font-weight: 800;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px rgba(202,157,40,0.3);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//           white-space: nowrap;
//         }
//         .cn-btn-solid:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 6px 20px rgba(202,157,40,0.5);
//           filter: brightness(1.1);
//         }
//         .cn-btn-outline {
//           padding: 9px 22px;
//           border-radius: 50px;
//           border: 1.5px solid #CA9D28;
//           background: transparent;
//           color: #CA9D28;
//           font-size: 13.5px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }
//         .cn-btn-outline:hover { background: rgba(202,157,40,0.1); transform: translateY(-2px); }

//         .cn-btn-danger {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           border: 1.5px solid rgba(248,113,113,0.5);
//           background: rgba(248,113,113,0.1);
//           color: #f87171;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//         }
//         .cn-btn-danger:hover { background: #dc2626; color: #fff; border-color: #dc2626; transform: rotate(90deg); }

//         /* ── Hamburger ── */
//         .cn-ham {
//           display: none;
//           background: rgba(255,255,255,0.1);
//           border: 1.5px solid #CA9D28;
//           color: #CA9D28;
//           font-size: 20px;
//           cursor: pointer;
//           padding: 6px 14px;
//           border-radius: 50px;
//           margin-right: 4px;
//           flex-shrink: 0;
//         }

//                 /* ── Language toggle (mobile menu) ── */
//         .cn-lang-mobile { display: flex; justify-content: center; padding: 2px 0 6px; }

//         /* ── Mobile dropdown ── */
//         .cn-mobile-menu {
//           display: none;
//           position: fixed;
//           top: 112px;
//           left: 16px;
//           right: 16px;
//           background: #187484;
//           z-index: 999;
//           padding: 14px;
//           border-radius: 24px;
//           box-shadow: 0 15px 40px rgba(0,0,0,0.4);
//           flex-direction: column;
//           gap: 8px;
//           border: 1.5px solid #CA9D28;
//           animation: slideUp 0.3s ease;
//         }
//         @keyframes slideUp {
//           from { opacity:0; transform:translateY(10px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .cn-mobile-menu.open { display: flex; }
//         .cn-mobile-link {
//           padding: 12px 20px;
//           border-radius: 14px;
//           font-size: 14px;
//           font-weight: 600;
//           color: #F5E7C2;
//           background: rgba(255,255,255,0.05);
//           border: none;
//           text-align: left;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }
//         .cn-mobile-link:hover { background: rgba(255,255,255,0.1); }
//         .cn-mobile-link.active { background: #CA9D28; color: #187484; font-weight: 800; }

//         /* ── सगळी navbar बटणं एकाच size ची (language, Login/Register, + Book, Logout) ── */
//         .cn-links { gap: 10px; }
//         .cn-links .cn-btn-solid,
//         .cn-links .cn-btn-outline,
//         .cn-links > [data-no-translate] {
//           height: 42px;
//           width: 126px;
//           box-sizing: border-box;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           padding-top: 0;
//           padding-bottom: 0;
//           font-size: 13.5px;
//         }
//         .cn-links > [data-no-translate] { padding: 3px; }
//         .cn-links > [data-no-translate] > button {
//           flex: 1;
//           height: 100%;
//           font-size: 13.5px;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .cn-links .cn-btn-danger { width: 42px; height: 42px; box-sizing: border-box; }

//         /* ══ Reference design — फक्त navbar UI (text / logo / functionality तसेच) ══ */
//         .cn-nav { height:78px; padding:0 20px 0 0; background:linear-gradient(90deg,#0f5f69 0%,#0c4f58 55%,#0f5d67 100%); border:1.5px solid rgba(232,190,90,0.35); box-shadow:0 8px 28px rgba(0,0,0,0.22); }
//         .cn-outer.scrolled .cn-nav { height:66px; }
//         .cn-brand { height:96px; padding:8px 40px 8px 8px; gap:16px; background:linear-gradient(135deg,#1b8c9c 0%,#11606d 60%,#0d5260 100%); border:2px solid rgba(232,190,90,0.9); box-shadow:0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.12); }
//         .cn-brand:hover { background:linear-gradient(135deg,#20a0b2 0%,#137080 60%,#0f5d6b 100%); box-shadow:0 10px 28px rgba(0,0,0,0.35); }
//         .cn-outer.scrolled .cn-brand { height:80px; padding:6px 32px 6px 6px; }
//         .cn-logo-wrap { width:78px; height:78px; border:3px solid #fff; box-shadow:0 0 0 2px #E8BE5A, 0 4px 14px rgba(0,0,0,0.3); }
//         .cn-outer.scrolled .cn-logo-wrap { width:64px; height:64px; }
//         .cn-brand-text { gap:2px; }
//         .cn-brand-name { font-family:'Noto Sans Devanagari','Plus Jakarta Sans',sans-serif; font-size:22px; font-weight:700; letter-spacing:0; text-shadow:0 1px 4px rgba(0,0,0,0.3); }
//         .cn-outer.scrolled .cn-brand-name { font-size:18px; }
//         .cn-brand-sub { font-family:'Noto Sans Devanagari','Plus Jakarta Sans',sans-serif; font-size:20px; font-weight:700; color:#F5C451; letter-spacing:0; }
//         .cn-outer.scrolled .cn-brand-sub { font-size:16px; }
//         .cn-links { gap:14px; }
//         .cn-link { color:#fff; font-size:15px; }
//         .cn-link:hover { color:#F5C451; }
//         .cn-link.active { background:#F5C451; color:#0f3b3b; }
//         .cn-citizen-name { color:#fff; }
//         .cn-btn-outline { border:1.5px solid rgba(255,255,255,0.85); color:#fff; }
//         .cn-btn-outline:hover { background:rgba(255,255,255,0.12); }
//         .cn-btn-solid { background:linear-gradient(180deg,#FBD36B 0%,#EDB53F 100%); color:#0f3b3b; box-shadow:0 4px 14px rgba(237,181,63,0.35); }
//         .cn-links .cn-btn-solid, .cn-links .cn-btn-outline, .cn-links > [data-no-translate] { height:42px; font-size:15px; }
//         .cn-links .cn-btn-solid, .cn-links .cn-btn-outline { width:auto; min-width:110px; padding:0 26px; }

//         /* ── Responsive ── */
//         @media(max-width:960px){
//           .cn-links { display: none; }
//           .cn-ham { display: block; }
//           .cn-nav { width: 96%; height: 80px; }
//           .cn-brand { height: 96px; padding: 8px 24px 8px 8px; gap: 14px; }
//           .cn-logo-wrap { width: 72px; height: 72px; }
//           .cn-brand-name { font-size: 19px; }
//           .cn-brand-sub { font-size: 16px; }
//         }
//         @media(max-width:640px){
//           .cn-outer { padding: 8px 10px; }
//           .cn-nav { width: 100%; height: 72px; }
//           .cn-brand { height: 86px; padding: 7px 20px 7px 7px; gap: 12px; }
//           .cn-logo-wrap { width: 62px; height: 62px; }
//           .cn-brand-name { font-size: 16px; }
//           .cn-brand-sub { font-size: 14px; }
//         }
//         @media(max-width:420px){
//           .cn-brand { height: 80px; padding: 6px 16px 6px 6px; gap: 10px; }
//           .cn-logo-wrap { width: 54px; height: 54px; }
//           .cn-brand-name { font-size: 14px; }
//           .cn-brand-sub { font-size: 12px; }
//         }
//       `}</style>

//       <div className={`cn-outer${scrolled ? " scrolled" : ""}`}>
//         <nav className="cn-nav">

//           {/* ── Brand pill ── */}
//           <div className="cn-brand" onClick={() => navigate("/")}>
//             <div className="cn-logo-wrap">
//               <img src={logo} alt="VVCMC" />
//             </div>
//             <div className="cn-brand-text">
//               <span className="cn-brand-name">वसई-विरार शहर महानगरपालिका</span>
//               <span className="cn-brand-sub">जन संवाद</span>
//             </div>
//           </div>

//           {/* ── Desktop links ── */}
//                     <div className="cn-links">
//             <LanguageToggle variant="dark" single />
//             {/* Home link काढला — "/" वर default Home page च दिसतो, आणि logo click ने Home ला जाता येते */}

//             {citizen && (
//               <button
//                 className={`cn-link${isActive("/my-appointments") ? " active" : ""}`}
//                 onClick={() => navigate("/my-appointments")}
//               >My Appointments</button>
//             )}

//             {citizen ? (
//               <>
//                 <span className="cn-citizen-name">👋 {citizen.fullName?.split(" ")[0]}</span>
//                 <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ Book</button>
//                 <button className="cn-btn-danger" onClick={logout} title="Logout">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/>
//                     <line x1="12" y1="2" x2="12" y2="12"/>
//                   </svg>
//                 </button>
//               </>
//             ) : (
//               <>
//                 {/* एकच बटण — Login page वर "Register", बाकी सगळीकडे "Login" */}
//                 {isActive("/login") ? (
//                   <button className="cn-btn-solid" onClick={() => navigate("/register")}>Register</button>
//                 ) : (
//                   <button className="cn-btn-outline" onClick={() => navigate("/login")}>Login</button>
//                 )}
//               </>
//             )}
//           </div>

//           <button className="cn-ham" onClick={() => setMenu(m => !m)}>
//             {menu ? "✕" : "☰"}
//           </button>
//         </nav>
//       </div>

//       {/* ── Mobile menu ── */}
//             <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
//         <div className="cn-lang-mobile"><LanguageToggle variant="dark" single /></div>

//         {citizen && (
//           <button
//             className={`cn-mobile-link${isActive("/my-appointments") ? " active" : ""}`}
//             onClick={() => { navigate("/my-appointments"); setMenu(false); }}
//           >📅 My Appointments</button>
//         )}

//         {citizen ? (
//           <>
//             <button
//               className="cn-mobile-link"
//               style={{ color: "#CA9D28" }}
//               onClick={() => { navigate("/book-appointment"); setMenu(false); }}
//             >+ Book Appointment</button>
//             <button
//               className="cn-mobile-link"
//               style={{ color: "#f87171" }}
//               onClick={logout}
//             >🚪 Logout</button>
//           </>
//         ) : (
//           <>
//             {isActive("/login") ? (
//               <button className="cn-mobile-link" onClick={() => { navigate("/register"); setMenu(false); }}>📝 Register</button>
//             ) : (
//               <button className="cn-mobile-link" onClick={() => { navigate("/login"); setMenu(false); }}>🔐 Login</button>
//             )}
//           </>
//         )}
//       </div>
//     </>
//   );
// }


// // import React, { useState, useEffect } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";
// // // import logo from "../../assets/vvcmclogo.jpg";
// // import logo from "../../assets/vvcmclogo.jpg";
// // import LanguageToggle from "../../i18n/LanguageToggle";

// // export default function NavbarLanding() {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const [menu, setMenu] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   const citizen = (() => {
// //     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
// //   })();

// //   useEffect(() => {
// //     const handleScroll = () => setScrolled(window.scrollY > 20);
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const logout = () => {
// //     localStorage.removeItem("citizenUser");
// //     navigate("/login");
// //     setMenu(false);
// //   };

// //   const isActive = (path) => location.pathname === path;

// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:wght@400&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

// //         .cn-outer {
// //           padding: 10px 20px;
// //           position: sticky;
// //           top: 0;
// //           z-index: 1000;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           transition: all 0.4s ease;
// //         }
// //         .cn-outer.scrolled { padding: 6px 20px; }

// //         /* ── Main pill navbar ── */
// //         .cn-nav {
// //           background: linear-gradient(135deg, #187484 0%, #114e59 100%);
// //           padding: 0 16px 0 0;
// //           display: flex;
// //           align-items: center;
// //           justify-content: space-between;
// //           height: 90px;
// //           border-radius: 100px;
// //           width: 97%;
// //           max-width: 1300px;
// //           border: 2px solid rgba(202,157,40,0.5);
// //           box-shadow: 0 10px 36px rgba(0,0,0,0.3);
// //           transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
// //           overflow: visible;
// //         }
// //         .cn-outer.scrolled .cn-nav {
// //           height: 70px;
// //           width: 93%;
// //         }

// //         /* ── Brand pill — large protruding left section ── */
// //         .cn-brand {
// //           display: flex;
// //           align-items: center;
// //           gap: 18px;
// //           cursor: pointer;
// //           background: linear-gradient(135deg, #1c8fa3 0%, #145f6f 100%);
// //           border: 2.5px solid rgba(202,157,40,0.75);
// //           border-radius: 100px;
// //           /* big protrusion top and bottom */
// //           padding: 10px 32px 10px 10px;
// //           margin-left: -3px;
// //           height: 110px;
// //           box-shadow:
// //             0 10px 30px rgba(0,0,0,0.4),
// //             0 0 0 5px rgba(202,157,40,0.1),
// //             inset 0 1px 0 rgba(255,255,255,0.15);
// //           transition: all 0.3s ease;
// //           flex-shrink: 0;
// //           position: relative;
// //           z-index: 2;
// //         }
// //         .cn-outer.scrolled .cn-brand {
// //           height: 86px;
// //           padding: 8px 26px 8px 8px;
// //           gap: 14px;
// //         }
// //         .cn-brand:hover {
// //           background: linear-gradient(135deg, #22a8bf 0%, #187080 100%);
// //           box-shadow: 0 12px 36px rgba(0,0,0,0.45), 0 0 0 5px rgba(202,157,40,0.22);
// //           transform: translateY(-2px);
// //         }

// //         /* ── Logo — VERY BIG ── */
// //         .cn-logo-wrap {
// //           width: 86px;
// //           height: 86px;
// //           border-radius: 50%;
// //           overflow: hidden;
// //           border: 3.5px solid #CA9D28;
// //           background: #fff;
// //           flex-shrink: 0;
// //           transition: all 0.3s ease;
// //           box-shadow:
// //             0 0 0 5px rgba(202,157,40,0.2),
// //             0 0 0 8px rgba(202,157,40,0.07),
// //             0 6px 20px rgba(0,0,0,0.35);
// //         }
// //         .cn-outer.scrolled .cn-logo-wrap {
// //           width: 66px;
// //           height: 66px;
// //         }
// //         .cn-logo-wrap img {
// //           width: 100%;
// //           height: 100%;
// //           object-fit: cover;
// //           display: block;
// //         }

// //         /* ── Brand text ── */
// //         .cn-brand-text {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 5px;
// //         }

// //         /* "वसई-विरार शहर महानगरपालिका" — very large bold */
// //         .cn-brand-name {
// //           font-family: 'Tiro Devanagari Marathi', serif;
// //           font-size: 24px;
// //           font-weight: 700;
// //           color: #ffffff;
// //           line-height: 1.2;
// //           white-space: nowrap;
// //           letter-spacing: 0.3px;
// //           text-shadow: 0 2px 8px rgba(0,0,0,0.4);
// //         }
// //         .cn-outer.scrolled .cn-brand-name { font-size: 19px; }

// //         /* "जन संवाद" — large bold golden */
// //         .cn-brand-sub {
// //           font-family: 'Tiro Devanagari Marathi', serif;
// //           font-size: 20px;
// //           font-weight: 700;
// //           color: #F5C030;
// //           line-height: 1.2;
// //           letter-spacing: 0.5px;
// //           text-shadow: 0 1px 6px rgba(0,0,0,0.3);
// //         }
// //         .cn-outer.scrolled .cn-brand-sub { font-size: 15px; }

// //         /* ── Nav Links ── */
// //         .cn-links {
// //           display: flex;
// //           align-items: center;
// //           gap: 6px;
// //         }
// //         .cn-link {
// //           padding: 9px 20px;
// //           border-radius: 50px;
// //           font-size: 14px;
// //           font-weight: 600;
// //           cursor: pointer;
// //           transition: all 0.3s ease;
// //           border: none;
// //           background: transparent;
// //           color: rgba(245,231,194,0.88);
// //           font-family: 'Plus Jakarta Sans', sans-serif;
// //           white-space: nowrap;
// //         }
// //         .cn-link:hover { color: #CA9D28; background: rgba(255,255,255,0.07); }
// //         .cn-link.active {
// //           background: #CA9D28;
// //           color: #114e59;
// //           font-weight: 800;
// //           box-shadow: 0 4px 12px rgba(202,157,40,0.35);
// //         }

// //         .cn-citizen-name {
// //           font-size: 14px;
// //           color: #F5E7C2;
// //           font-weight: 700;
// //           padding: 0 8px;
// //           font-family: 'Plus Jakarta Sans', sans-serif;
// //           white-space: nowrap;
// //         }

// //         /* ── Buttons ── */
// //         .cn-btn-solid {
// //           padding: 9px 24px;
// //           border-radius: 50px;
// //           border: none;
// //           background: linear-gradient(135deg, #CA9D28 0%, #CE9A54 100%);
// //           color: #1a3a44;
// //           font-size: 13.5px;
// //           font-weight: 800;
// //           cursor: pointer;
// //           transition: all 0.3s ease;
// //           box-shadow: 0 4px 15px rgba(202,157,40,0.3);
// //           font-family: 'Plus Jakarta Sans', sans-serif;
// //           text-transform: uppercase;
// //           letter-spacing: 0.5px;
// //           white-space: nowrap;
// //         }
// //         .cn-btn-solid:hover {
// //           transform: translateY(-2px);
// //           box-shadow: 0 6px 20px rgba(202,157,40,0.5);
// //           filter: brightness(1.1);
// //         }
// //         .cn-btn-outline {
// //           padding: 9px 22px;
// //           border-radius: 50px;
// //           border: 1.5px solid #CA9D28;
// //           background: transparent;
// //           color: #CA9D28;
// //           font-size: 13.5px;
// //           font-weight: 700;
// //           cursor: pointer;
// //           transition: all 0.3s ease;
// //           font-family: 'Plus Jakarta Sans', sans-serif;
// //           white-space: nowrap;
// //         }
// //         .cn-btn-outline:hover { background: rgba(202,157,40,0.1); transform: translateY(-2px); }

// //         .cn-btn-danger {
// //           width: 40px;
// //           height: 40px;
// //           border-radius: 50%;
// //           border: 1.5px solid rgba(248,113,113,0.5);
// //           background: rgba(248,113,113,0.1);
// //           color: #f87171;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           cursor: pointer;
// //           transition: all 0.3s ease;
// //           flex-shrink: 0;
// //         }
// //         .cn-btn-danger:hover { background: #dc2626; color: #fff; border-color: #dc2626; transform: rotate(90deg); }

// //         /* ── Hamburger ── */
// //         .cn-ham {
// //           display: none;
// //           background: rgba(255,255,255,0.1);
// //           border: 1.5px solid #CA9D28;
// //           color: #CA9D28;
// //           font-size: 20px;
// //           cursor: pointer;
// //           padding: 6px 14px;
// //           border-radius: 50px;
// //           margin-right: 4px;
// //           flex-shrink: 0;
// //         }

// //                 /* ── Language toggle (mobile menu) ── */
// //         .cn-lang-mobile { display: flex; justify-content: center; padding: 2px 0 6px; }

// //         /* ── Mobile dropdown ── */
// //         .cn-mobile-menu {
// //           display: none;
// //           position: fixed;
// //           top: 112px;
// //           left: 16px;
// //           right: 16px;
// //           background: #187484;
// //           z-index: 999;
// //           padding: 14px;
// //           border-radius: 24px;
// //           box-shadow: 0 15px 40px rgba(0,0,0,0.4);
// //           flex-direction: column;
// //           gap: 8px;
// //           border: 1.5px solid #CA9D28;
// //           animation: slideUp 0.3s ease;
// //         }
// //         @keyframes slideUp {
// //           from { opacity:0; transform:translateY(10px); }
// //           to   { opacity:1; transform:translateY(0); }
// //         }
// //         .cn-mobile-menu.open { display: flex; }
// //         .cn-mobile-link {
// //           padding: 12px 20px;
// //           border-radius: 14px;
// //           font-size: 14px;
// //           font-weight: 600;
// //           color: #F5E7C2;
// //           background: rgba(255,255,255,0.05);
// //           border: none;
// //           text-align: left;
// //           cursor: pointer;
// //           transition: all 0.2s ease;
// //           font-family: 'Plus Jakarta Sans', sans-serif;
// //         }
// //         .cn-mobile-link:hover { background: rgba(255,255,255,0.1); }
// //         .cn-mobile-link.active { background: #CA9D28; color: #187484; font-weight: 800; }

// //         /* ── Responsive ── */
// //         @media(max-width:960px){
// //           .cn-links { display: none; }
// //           .cn-ham { display: block; }
// //           .cn-nav { width: 96%; height: 80px; }
// //           .cn-brand { height: 96px; padding: 8px 24px 8px 8px; gap: 14px; }
// //           .cn-logo-wrap { width: 72px; height: 72px; }
// //           .cn-brand-name { font-size: 19px; }
// //           .cn-brand-sub { font-size: 16px; }
// //         }
// //         @media(max-width:640px){
// //           .cn-outer { padding: 8px 10px; }
// //           .cn-nav { width: 100%; height: 72px; }
// //           .cn-brand { height: 86px; padding: 7px 20px 7px 7px; gap: 12px; }
// //           .cn-logo-wrap { width: 62px; height: 62px; }
// //           .cn-brand-name { font-size: 16px; }
// //           .cn-brand-sub { font-size: 14px; }
// //         }
// //         @media(max-width:420px){
// //           .cn-brand { height: 80px; padding: 6px 16px 6px 6px; gap: 10px; }
// //           .cn-logo-wrap { width: 54px; height: 54px; }
// //           .cn-brand-name { font-size: 14px; }
// //           .cn-brand-sub { font-size: 12px; }
// //         }
// //       `}</style>

// //       <div className={`cn-outer${scrolled ? " scrolled" : ""}`}>
// //         <nav className="cn-nav">

// //           {/* ── Brand pill ── */}
// //           <div className="cn-brand" onClick={() => navigate("/")}>
// //             <div className="cn-logo-wrap">
// //               <img src={logo} alt="VVCMC" />
// //             </div>
// //             <div className="cn-brand-text">
// //               <span className="cn-brand-name">वसई-विरार शहर महानगरपालिका</span>
// //               <span className="cn-brand-sub">जन संवाद</span>
// //             </div>
// //           </div>

// //           {/* ── Desktop links ── */}
// //                     <div className="cn-links">
// //             <LanguageToggle variant="dark" />
// //             <button
// //               className={`cn-link${isActive("/") ? " active" : ""}`}
// //               onClick={() => navigate("/")}
// //             >Home</button>

// //             {citizen && (
// //               <button
// //                 className={`cn-link${isActive("/my-appointments") ? " active" : ""}`}
// //                 onClick={() => navigate("/my-appointments")}
// //               >My Appointments</button>
// //             )}

// //             {citizen ? (
// //               <>
// //                 <span className="cn-citizen-name">👋 {citizen.fullName?.split(" ")[0]}</span>
// //                 <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ Book</button>
// //                 <button className="cn-btn-danger" onClick={logout} title="Logout">
// //                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
// //                     <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/>
// //                     <line x1="12" y1="2" x2="12" y2="12"/>
// //                   </svg>
// //                 </button>
// //               </>
// //             ) : (
// //               <>
// //                 <button className="cn-btn-outline" onClick={() => navigate("/login")}>Login</button>
// //                 <button className="cn-btn-solid" onClick={() => navigate("/register")}>Register</button>
// //               </>
// //             )}
// //           </div>

// //           <button className="cn-ham" onClick={() => setMenu(m => !m)}>
// //             {menu ? "✕" : "☰"}
// //           </button>
// //         </nav>
// //       </div>

// //       {/* ── Mobile menu ── */}
// //             <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
// //         <div className="cn-lang-mobile"><LanguageToggle variant="dark" /></div>
// //         <button
// //           className={`cn-mobile-link${isActive("/") ? " active" : ""}`}
// //           onClick={() => { navigate("/"); setMenu(false); }}
// //         >🏠 Home</button>

// //         {citizen && (
// //           <button
// //             className={`cn-mobile-link${isActive("/my-appointments") ? " active" : ""}`}
// //             onClick={() => { navigate("/my-appointments"); setMenu(false); }}
// //           >📅 My Appointments</button>
// //         )}

// //         {citizen ? (
// //           <>
// //             <button
// //               className="cn-mobile-link"
// //               style={{ color: "#CA9D28" }}
// //               onClick={() => { navigate("/book-appointment"); setMenu(false); }}
// //             >+ Book Appointment</button>
// //             <button
// //               className="cn-mobile-link"
// //               style={{ color: "#f87171" }}
// //               onClick={logout}
// //             >🚪 Logout</button>
// //           </>
// //         ) : (
// //           <>
// //             <button className="cn-mobile-link" onClick={() => { navigate("/login"); setMenu(false); }}>🔐 Login</button>
// //             <button className="cn-mobile-link" onClick={() => { navigate("/register"); setMenu(false); }}>📝 Register</button>
// //           </>
// //         )}
// //       </div>
// //     </>
// //   );
// // }


// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// // import logo from "../../assets/vvcmclogo.jpg";
// import logo from "../../assets/vvcmclogo.jpg";
// import LanguageToggle from "../../i18n/LanguageToggle";

// export default function NavbarLanding() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [menu, setMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("citizenUser");
//     navigate("/login");
//     setMenu(false);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:wght@400&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

//         .cn-outer {
//           padding: 10px 20px;
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.4s ease;
//         }
//         .cn-outer.scrolled { padding: 6px 20px; }

//         /* ── Main pill navbar ── */
//         .cn-nav {
//           background: linear-gradient(135deg, #187484 0%, #114e59 100%);
//           padding: 0 16px 0 0;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 90px;
//           border-radius: 100px;
//           width: 97%;
//           max-width: 1300px;
//           border: 2px solid rgba(202,157,40,0.5);
//           box-shadow: 0 10px 36px rgba(0,0,0,0.3);
//           transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
//           overflow: visible;
//         }
//         .cn-outer.scrolled .cn-nav {
//           height: 70px;
//           width: 93%;
//         }

//         /* ── Brand pill — large protruding left section ── */
//         .cn-brand {
//           display: flex;
//           align-items: center;
//           gap: 18px;
//           cursor: pointer;
//           background: linear-gradient(135deg, #1c8fa3 0%, #145f6f 100%);
//           border: 2.5px solid rgba(202,157,40,0.75);
//           border-radius: 100px;
//           /* big protrusion top and bottom */
//           padding: 10px 32px 10px 10px;
//           margin-left: -3px;
//           height: 110px;
//           box-shadow:
//             0 10px 30px rgba(0,0,0,0.4),
//             0 0 0 5px rgba(202,157,40,0.1),
//             inset 0 1px 0 rgba(255,255,255,0.15);
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//           position: relative;
//           z-index: 2;
//         }
//         .cn-outer.scrolled .cn-brand {
//           height: 86px;
//           padding: 8px 26px 8px 8px;
//           gap: 14px;
//         }
//         .cn-brand:hover {
//           background: linear-gradient(135deg, #22a8bf 0%, #187080 100%);
//           box-shadow: 0 12px 36px rgba(0,0,0,0.45), 0 0 0 5px rgba(202,157,40,0.22);
//           transform: translateY(-2px);
//         }

//         /* ── Logo — VERY BIG ── */
//         .cn-logo-wrap {
//           width: 86px;
//           height: 86px;
//           border-radius: 50%;
//           overflow: hidden;
//           border: 3.5px solid #CA9D28;
//           background: #fff;
//           flex-shrink: 0;
//           transition: all 0.3s ease;
//           box-shadow:
//             0 0 0 5px rgba(202,157,40,0.2),
//             0 0 0 8px rgba(202,157,40,0.07),
//             0 6px 20px rgba(0,0,0,0.35);
//         }
//         .cn-outer.scrolled .cn-logo-wrap {
//           width: 66px;
//           height: 66px;
//         }
//         .cn-logo-wrap img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         /* ── Brand text ── */
//         .cn-brand-text {
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//         }

//         /* "वसई-विरार शहर महानगरपालिका" — very large bold */
//         .cn-brand-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 24px;
//           font-weight: 700;
//           color: #ffffff;
//           line-height: 1.2;
//           white-space: nowrap;
//           letter-spacing: 0.3px;
//           text-shadow: 0 2px 8px rgba(0,0,0,0.4);
//         }
//         .cn-outer.scrolled .cn-brand-name { font-size: 19px; }

//         /* "जन संवाद" — large bold golden */
//         .cn-brand-sub {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 20px;
//           font-weight: 700;
//           color: #F5C030;
//           line-height: 1.2;
//           letter-spacing: 0.5px;
//           text-shadow: 0 1px 6px rgba(0,0,0,0.3);
//         }
//         .cn-outer.scrolled .cn-brand-sub { font-size: 15px; }

//         /* ── Nav Links ── */
//         .cn-links {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }
//         .cn-link {
//           padding: 9px 20px;
//           border-radius: 50px;
//           font-size: 14px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           border: none;
//           background: transparent;
//           color: rgba(245,231,194,0.88);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }
//         .cn-link:hover { color: #CA9D28; background: rgba(255,255,255,0.07); }
//         .cn-link.active {
//           background: #CA9D28;
//           color: #114e59;
//           font-weight: 800;
//           box-shadow: 0 4px 12px rgba(202,157,40,0.35);
//         }

//         .cn-citizen-name {
//           font-size: 14px;
//           color: #F5E7C2;
//           font-weight: 700;
//           padding: 0 8px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }

//         /* ── Buttons ── */
//         .cn-btn-solid {
//           padding: 9px 24px;
//           border-radius: 50px;
//           border: none;
//           background: linear-gradient(135deg, #CA9D28 0%, #CE9A54 100%);
//           color: #1a3a44;
//           font-size: 13.5px;
//           font-weight: 800;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px rgba(202,157,40,0.3);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//           white-space: nowrap;
//         }
//         .cn-btn-solid:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 6px 20px rgba(202,157,40,0.5);
//           filter: brightness(1.1);
//         }
//         .cn-btn-outline {
//           padding: 9px 22px;
//           border-radius: 50px;
//           border: 1.5px solid #CA9D28;
//           background: transparent;
//           color: #CA9D28;
//           font-size: 13.5px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }
//         .cn-btn-outline:hover { background: rgba(202,157,40,0.1); transform: translateY(-2px); }

//         .cn-btn-danger {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           border: 1.5px solid rgba(248,113,113,0.5);
//           background: rgba(248,113,113,0.1);
//           color: #f87171;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//         }
//         .cn-btn-danger:hover { background: #dc2626; color: #fff; border-color: #dc2626; transform: rotate(90deg); }

//         /* ── Hamburger ── */
//         .cn-ham {
//           display: none;
//           background: rgba(255,255,255,0.1);
//           border: 1.5px solid #CA9D28;
//           color: #CA9D28;
//           font-size: 20px;
//           cursor: pointer;
//           padding: 6px 14px;
//           border-radius: 50px;
//           margin-right: 4px;
//           flex-shrink: 0;
//         }

//                 /* ── Language toggle (mobile menu) ── */
//         .cn-lang-mobile { display: flex; justify-content: center; padding: 2px 0 6px; }

//         /* ── Mobile dropdown ── */
//         .cn-mobile-menu {
//           display: none;
//           position: fixed;
//           top: 112px;
//           left: 16px;
//           right: 16px;
//           background: #187484;
//           z-index: 999;
//           padding: 14px;
//           border-radius: 24px;
//           box-shadow: 0 15px 40px rgba(0,0,0,0.4);
//           flex-direction: column;
//           gap: 8px;
//           border: 1.5px solid #CA9D28;
//           animation: slideUp 0.3s ease;
//         }
//         @keyframes slideUp {
//           from { opacity:0; transform:translateY(10px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .cn-mobile-menu.open { display: flex; }
//         .cn-mobile-link {
//           padding: 12px 20px;
//           border-radius: 14px;
//           font-size: 14px;
//           font-weight: 600;
//           color: #F5E7C2;
//           background: rgba(255,255,255,0.05);
//           border: none;
//           text-align: left;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }
//         .cn-mobile-link:hover { background: rgba(255,255,255,0.1); }
//         .cn-mobile-link.active { background: #CA9D28; color: #187484; font-weight: 800; }

//         /* ── Responsive ── */
//         @media(max-width:960px){
//           .cn-links { display: none; }
//           .cn-ham { display: block; }
//           .cn-nav { width: 96%; height: 80px; }
//           .cn-brand { height: 96px; padding: 8px 24px 8px 8px; gap: 14px; }
//           .cn-logo-wrap { width: 72px; height: 72px; }
//           .cn-brand-name { font-size: 19px; }
//           .cn-brand-sub { font-size: 16px; }
//         }
//         @media(max-width:640px){
//           .cn-outer { padding: 8px 10px; }
//           .cn-nav { width: 100%; height: 72px; }
//           .cn-brand { height: 86px; padding: 7px 20px 7px 7px; gap: 12px; }
//           .cn-logo-wrap { width: 62px; height: 62px; }
//           .cn-brand-name { font-size: 16px; }
//           .cn-brand-sub { font-size: 14px; }
//         }
//         @media(max-width:420px){
//           .cn-brand { height: 80px; padding: 6px 16px 6px 6px; gap: 10px; }
//           .cn-logo-wrap { width: 54px; height: 54px; }
//           .cn-brand-name { font-size: 14px; }
//           .cn-brand-sub { font-size: 12px; }
//         }
//       `}</style>

//       <div className={`cn-outer${scrolled ? " scrolled" : ""}`}>
//         <nav className="cn-nav">

//           {/* ── Brand pill ── */}
//           <div className="cn-brand" onClick={() => navigate("/")}>
//             <div className="cn-logo-wrap">
//               <img src={logo} alt="VVCMC" />
//             </div>
//             <div className="cn-brand-text">
//               <span className="cn-brand-name">वसई-विरार शहर महानगरपालिका</span>
//               <span className="cn-brand-sub">जन संवाद</span>
//             </div>
//           </div>

//           {/* ── Desktop links ── */}
//                     <div className="cn-links">
//             <LanguageToggle variant="dark" single />
//             {/* Home link काढला — "/" वर default Home page च दिसतो, आणि logo click ने Home ला जाता येते */}

//             {citizen && (
//               <button
//                 className={`cn-link${isActive("/my-appointments") ? " active" : ""}`}
//                 onClick={() => navigate("/my-appointments")}
//               >My Appointments</button>
//             )}

//             {citizen ? (
//               <>
//                 <span className="cn-citizen-name">👋 {citizen.fullName?.split(" ")[0]}</span>
//                 <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ Book</button>
//                 <button className="cn-btn-danger" onClick={logout} title="Logout">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/>
//                     <line x1="12" y1="2" x2="12" y2="12"/>
//                   </svg>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button className="cn-btn-outline" onClick={() => navigate("/login")}>Login</button>
//                 <button className="cn-btn-solid" onClick={() => navigate("/register")}>Register</button>
//               </>
//             )}
//           </div>

//           <button className="cn-ham" onClick={() => setMenu(m => !m)}>
//             {menu ? "✕" : "☰"}
//           </button>
//         </nav>
//       </div>

//       {/* ── Mobile menu ── */}
//             <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
//         <div className="cn-lang-mobile"><LanguageToggle variant="dark" single /></div>

//         {citizen && (
//           <button
//             className={`cn-mobile-link${isActive("/my-appointments") ? " active" : ""}`}
//             onClick={() => { navigate("/my-appointments"); setMenu(false); }}
//           >📅 My Appointments</button>
//         )}

//         {citizen ? (
//           <>
//             <button
//               className="cn-mobile-link"
//               style={{ color: "#CA9D28" }}
//               onClick={() => { navigate("/book-appointment"); setMenu(false); }}
//             >+ Book Appointment</button>
//             <button
//               className="cn-mobile-link"
//               style={{ color: "#f87171" }}
//               onClick={logout}
//             >🚪 Logout</button>
//           </>
//         ) : (
//           <>
//             <button className="cn-mobile-link" onClick={() => { navigate("/login"); setMenu(false); }}>🔐 Login</button>
//             <button className="cn-mobile-link" onClick={() => { navigate("/register"); setMenu(false); }}>📝 Register</button>
//           </>
//         )}
//       </div>
//     </>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// // import logo from "../../assets/vvcmclogo.jpg";
// import logo from "../../assets/vvcmclogo.jpg";
// import LanguageToggle from "../../i18n/LanguageToggle";

// export default function NavbarLanding() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [menu, setMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("citizenUser");
//     navigate("/login");
//     setMenu(false);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:wght@400&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

//         .cn-outer {
//           padding: 10px 20px;
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.4s ease;
//         }
//         .cn-outer.scrolled { padding: 6px 20px; }

//         /* ── Main pill navbar ── */
//         .cn-nav {
//           background: linear-gradient(135deg, #187484 0%, #114e59 100%);
//           padding: 0 16px 0 0;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 90px;
//           border-radius: 100px;
//           width: 97%;
//           max-width: 1300px;
//           border: 2px solid rgba(202,157,40,0.5);
//           box-shadow: 0 10px 36px rgba(0,0,0,0.3);
//           transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
//           overflow: visible;
//         }
//         .cn-outer.scrolled .cn-nav {
//           height: 70px;
//           width: 93%;
//         }

//         /* ── Brand pill — large protruding left section ── */
//         .cn-brand {
//           display: flex;
//           align-items: center;
//           gap: 18px;
//           cursor: pointer;
//           background: linear-gradient(135deg, #1c8fa3 0%, #145f6f 100%);
//           border: 2.5px solid rgba(202,157,40,0.75);
//           border-radius: 100px;
//           /* big protrusion top and bottom */
//           padding: 10px 32px 10px 10px;
//           margin-left: -3px;
//           height: 110px;
//           box-shadow:
//             0 10px 30px rgba(0,0,0,0.4),
//             0 0 0 5px rgba(202,157,40,0.1),
//             inset 0 1px 0 rgba(255,255,255,0.15);
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//           position: relative;
//           z-index: 2;
//         }
//         .cn-outer.scrolled .cn-brand {
//           height: 86px;
//           padding: 8px 26px 8px 8px;
//           gap: 14px;
//         }
//         .cn-brand:hover {
//           background: linear-gradient(135deg, #22a8bf 0%, #187080 100%);
//           box-shadow: 0 12px 36px rgba(0,0,0,0.45), 0 0 0 5px rgba(202,157,40,0.22);
//           transform: translateY(-2px);
//         }

//         /* ── Logo — VERY BIG ── */
//         .cn-logo-wrap {
//           width: 86px;
//           height: 86px;
//           border-radius: 50%;
//           overflow: hidden;
//           border: 3.5px solid #CA9D28;
//           background: #fff;
//           flex-shrink: 0;
//           transition: all 0.3s ease;
//           box-shadow:
//             0 0 0 5px rgba(202,157,40,0.2),
//             0 0 0 8px rgba(202,157,40,0.07),
//             0 6px 20px rgba(0,0,0,0.35);
//         }
//         .cn-outer.scrolled .cn-logo-wrap {
//           width: 66px;
//           height: 66px;
//         }
//         .cn-logo-wrap img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         /* ── Brand text ── */
//         .cn-brand-text {
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//         }

//         /* "वसई-विरार शहर महानगरपालिका" — very large bold */
//         .cn-brand-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 24px;
//           font-weight: 700;
//           color: #ffffff;
//           line-height: 1.2;
//           white-space: nowrap;
//           letter-spacing: 0.3px;
//           text-shadow: 0 2px 8px rgba(0,0,0,0.4);
//         }
//         .cn-outer.scrolled .cn-brand-name { font-size: 19px; }

//         /* "जन संवाद" — large bold golden */
//         .cn-brand-sub {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 20px;
//           font-weight: 700;
//           color: #F5C030;
//           line-height: 1.2;
//           letter-spacing: 0.5px;
//           text-shadow: 0 1px 6px rgba(0,0,0,0.3);
//         }
//         .cn-outer.scrolled .cn-brand-sub { font-size: 15px; }

//         /* ── Nav Links ── */
//         .cn-links {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }
//         .cn-link {
//           padding: 9px 20px;
//           border-radius: 50px;
//           font-size: 14px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           border: none;
//           background: transparent;
//           color: rgba(245,231,194,0.88);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }
//         .cn-link:hover { color: #CA9D28; background: rgba(255,255,255,0.07); }
//         .cn-link.active {
//           background: #CA9D28;
//           color: #114e59;
//           font-weight: 800;
//           box-shadow: 0 4px 12px rgba(202,157,40,0.35);
//         }

//         .cn-citizen-name {
//           font-size: 14px;
//           color: #F5E7C2;
//           font-weight: 700;
//           padding: 0 8px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }

//         /* ── Buttons ── */
//         .cn-btn-solid {
//           padding: 9px 24px;
//           border-radius: 50px;
//           border: none;
//           background: linear-gradient(135deg, #CA9D28 0%, #CE9A54 100%);
//           color: #1a3a44;
//           font-size: 13.5px;
//           font-weight: 800;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px rgba(202,157,40,0.3);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//           white-space: nowrap;
//         }
//         .cn-btn-solid:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 6px 20px rgba(202,157,40,0.5);
//           filter: brightness(1.1);
//         }
//         .cn-btn-outline {
//           padding: 9px 22px;
//           border-radius: 50px;
//           border: 1.5px solid #CA9D28;
//           background: transparent;
//           color: #CA9D28;
//           font-size: 13.5px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }
//         .cn-btn-outline:hover { background: rgba(202,157,40,0.1); transform: translateY(-2px); }

//         .cn-btn-danger {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           border: 1.5px solid rgba(248,113,113,0.5);
//           background: rgba(248,113,113,0.1);
//           color: #f87171;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//         }
//         .cn-btn-danger:hover { background: #dc2626; color: #fff; border-color: #dc2626; transform: rotate(90deg); }

//         /* ── Hamburger ── */
//         .cn-ham {
//           display: none;
//           background: rgba(255,255,255,0.1);
//           border: 1.5px solid #CA9D28;
//           color: #CA9D28;
//           font-size: 20px;
//           cursor: pointer;
//           padding: 6px 14px;
//           border-radius: 50px;
//           margin-right: 4px;
//           flex-shrink: 0;
//         }

//                 /* ── Language toggle (mobile menu) ── */
//         .cn-lang-mobile { display: flex; justify-content: center; padding: 2px 0 6px; }

//         /* ── Mobile dropdown ── */
//         .cn-mobile-menu {
//           display: none;
//           position: fixed;
//           top: 112px;
//           left: 16px;
//           right: 16px;
//           background: #187484;
//           z-index: 999;
//           padding: 14px;
//           border-radius: 24px;
//           box-shadow: 0 15px 40px rgba(0,0,0,0.4);
//           flex-direction: column;
//           gap: 8px;
//           border: 1.5px solid #CA9D28;
//           animation: slideUp 0.3s ease;
//         }
//         @keyframes slideUp {
//           from { opacity:0; transform:translateY(10px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .cn-mobile-menu.open { display: flex; }
//         .cn-mobile-link {
//           padding: 12px 20px;
//           border-radius: 14px;
//           font-size: 14px;
//           font-weight: 600;
//           color: #F5E7C2;
//           background: rgba(255,255,255,0.05);
//           border: none;
//           text-align: left;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }
//         .cn-mobile-link:hover { background: rgba(255,255,255,0.1); }
//         .cn-mobile-link.active { background: #CA9D28; color: #187484; font-weight: 800; }

//         /* ── सगळी navbar बटणं एकाच size ची (language, Login/Register, + Book, Logout) ── */
//         .cn-links { gap: 10px; }
//         .cn-links .cn-btn-solid,
//         .cn-links .cn-btn-outline,
//         .cn-links > [data-no-translate] {
//           height: 42px;
//           width: 126px;
//           box-sizing: border-box;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           padding-top: 0;
//           padding-bottom: 0;
//           font-size: 13.5px;
//         }
//         .cn-links > [data-no-translate] { padding: 3px; }
//         .cn-links > [data-no-translate] > button {
//           flex: 1;
//           height: 100%;
//           font-size: 13.5px;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .cn-links .cn-btn-danger { width: 42px; height: 42px; box-sizing: border-box; }

//         /* ── Responsive ── */
//         @media(max-width:960px){
//           .cn-links { display: none; }
//           .cn-ham { display: block; }
//           .cn-nav { width: 96%; height: 80px; }
//           .cn-brand { height: 96px; padding: 8px 24px 8px 8px; gap: 14px; }
//           .cn-logo-wrap { width: 72px; height: 72px; }
//           .cn-brand-name { font-size: 19px; }
//           .cn-brand-sub { font-size: 16px; }
//         }
//         @media(max-width:640px){
//           .cn-outer { padding: 8px 10px; }
//           .cn-nav { width: 100%; height: 72px; }
//           .cn-brand { height: 86px; padding: 7px 20px 7px 7px; gap: 12px; }
//           .cn-logo-wrap { width: 62px; height: 62px; }
//           .cn-brand-name { font-size: 16px; }
//           .cn-brand-sub { font-size: 14px; }
//         }
//         @media(max-width:420px){
//           .cn-brand { height: 80px; padding: 6px 16px 6px 6px; gap: 10px; }
//           .cn-logo-wrap { width: 54px; height: 54px; }
//           .cn-brand-name { font-size: 14px; }
//           .cn-brand-sub { font-size: 12px; }
//         }
//       `}</style>

//       <div className={`cn-outer${scrolled ? " scrolled" : ""}`}>
//         <nav className="cn-nav">

//           {/* ── Brand pill ── */}
//           <div className="cn-brand" onClick={() => navigate("/")}>
//             <div className="cn-logo-wrap">
//               <img src={logo} alt="VVCMC" />
//             </div>
//             <div className="cn-brand-text">
//               <span className="cn-brand-name">वसई-विरार शहर महानगरपालिका</span>
//               <span className="cn-brand-sub">जन संवाद</span>
//             </div>
//           </div>

//           {/* ── Desktop links ── */}
//                     <div className="cn-links">
//             <LanguageToggle variant="dark" single />
//             {/* Home link काढला — "/" वर default Home page च दिसतो, आणि logo click ने Home ला जाता येते */}

//             {citizen && (
//               <button
//                 className={`cn-link${isActive("/my-appointments") ? " active" : ""}`}
//                 onClick={() => navigate("/my-appointments")}
//               >My Appointments</button>
//             )}

//             {citizen ? (
//               <>
//                 <span className="cn-citizen-name">👋 {citizen.fullName?.split(" ")[0]}</span>
//                 <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ Book</button>
//                 <button className="cn-btn-danger" onClick={logout} title="Logout">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/>
//                     <line x1="12" y1="2" x2="12" y2="12"/>
//                   </svg>
//                 </button>
//               </>
//             ) : (
//               <>
//                 {/* एकच बटण — Login page वर "Register", बाकी सगळीकडे "Login" */}
//                 {isActive("/login") ? (
//                   <button className="cn-btn-solid" onClick={() => navigate("/register")}>Register</button>
//                 ) : (
//                   <button className="cn-btn-outline" onClick={() => navigate("/login")}>Login</button>
//                 )}
//               </>
//             )}
//           </div>

//           <button className="cn-ham" onClick={() => setMenu(m => !m)}>
//             {menu ? "✕" : "☰"}
//           </button>
//         </nav>
//       </div>

//       {/* ── Mobile menu ── */}
//             <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
//         <div className="cn-lang-mobile"><LanguageToggle variant="dark" single /></div>

//         {citizen && (
//           <button
//             className={`cn-mobile-link${isActive("/my-appointments") ? " active" : ""}`}
//             onClick={() => { navigate("/my-appointments"); setMenu(false); }}
//           >📅 My Appointments</button>
//         )}

//         {citizen ? (
//           <>
//             <button
//               className="cn-mobile-link"
//               style={{ color: "#CA9D28" }}
//               onClick={() => { navigate("/book-appointment"); setMenu(false); }}
//             >+ Book Appointment</button>
//             <button
//               className="cn-mobile-link"
//               style={{ color: "#f87171" }}
//               onClick={logout}
//             >🚪 Logout</button>
//           </>
//         ) : (
//           <>
//             {isActive("/login") ? (
//               <button className="cn-mobile-link" onClick={() => { navigate("/register"); setMenu(false); }}>📝 Register</button>
//             ) : (
//               <button className="cn-mobile-link" onClick={() => { navigate("/login"); setMenu(false); }}>🔐 Login</button>
//             )}
//           </>
//         )}
//       </div>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../../assets/vvcmclogo.jpg";
import logo from "../../assets/vvcmclogo.jpg";
import LanguageToggle from "../../i18n/LanguageToggle";

export default function NavbarLanding() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const citizen = (() => {
    try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
  })();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = () => {
    localStorage.removeItem("citizenUser");
    navigate("/login");
    setMenu(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:wght@400&family=Noto+Sans+Devanagari:wght@600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

        .cn-outer {
          padding: 10px 20px;
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }
        .cn-outer.scrolled { padding: 6px 20px; }

        /* ── Main pill navbar ── */
        .cn-nav {
          background: linear-gradient(135deg, #187484 0%, #114e59 100%);
          padding: 0 16px 0 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 90px;
          border-radius: 100px;
          width: 97%;
          max-width: 1300px;
          border: 2px solid rgba(202,157,40,0.5);
          box-shadow: 0 10px 36px rgba(0,0,0,0.3);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          overflow: visible;
        }
        .cn-outer.scrolled .cn-nav {
          height: 70px;
          width: 93%;
        }

        /* ── Brand pill — large protruding left section ── */
        .cn-brand {
          display: flex;
          align-items: center;
          gap: 18px;
          cursor: pointer;
          background: linear-gradient(135deg, #1c8fa3 0%, #145f6f 100%);
          border: 2.5px solid rgba(202,157,40,0.75);
          border-radius: 100px;
          /* big protrusion top and bottom */
          padding: 10px 32px 10px 10px;
          margin-left: -3px;
          height: 110px;
          box-shadow:
            0 10px 30px rgba(0,0,0,0.4),
            0 0 0 5px rgba(202,157,40,0.1),
            inset 0 1px 0 rgba(255,255,255,0.15);
          transition: all 0.3s ease;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }
        .cn-outer.scrolled .cn-brand {
          height: 86px;
          padding: 8px 26px 8px 8px;
          gap: 14px;
        }
        .cn-brand:hover {
          background: linear-gradient(135deg, #22a8bf 0%, #187080 100%);
          box-shadow: 0 12px 36px rgba(0,0,0,0.45), 0 0 0 5px rgba(202,157,40,0.22);
          transform: translateY(-2px);
        }

        /* ── Logo — VERY BIG ── */
        .cn-logo-wrap {
          width: 86px;
          height: 86px;
          border-radius: 50%;
          overflow: hidden;
          border: 3.5px solid #CA9D28;
          background: #fff;
          flex-shrink: 0;
          transition: all 0.3s ease;
          box-shadow:
            0 0 0 5px rgba(202,157,40,0.2),
            0 0 0 8px rgba(202,157,40,0.07),
            0 6px 20px rgba(0,0,0,0.35);
        }
        .cn-outer.scrolled .cn-logo-wrap {
          width: 66px;
          height: 66px;
        }
        .cn-logo-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── Brand text ── */
        .cn-brand-text {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        /* "वसई-विरार शहर महानगरपालिका" — very large bold */
        .cn-brand-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          white-space: nowrap;
          letter-spacing: 0.3px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }
        .cn-outer.scrolled .cn-brand-name { font-size: 19px; }

        /* "जन संवाद" — large bold golden */
        .cn-brand-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 20px;
          font-weight: 700;
          color: #F5C030;
          line-height: 1.2;
          letter-spacing: 0.5px;
          text-shadow: 0 1px 6px rgba(0,0,0,0.3);
        }
        .cn-outer.scrolled .cn-brand-sub { font-size: 15px; }

        /* ── Nav Links ── */
        .cn-links {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .cn-link {
          padding: 9px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          background: transparent;
          color: rgba(245,231,194,0.88);
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
        }
        .cn-link:hover { color: #CA9D28; background: rgba(255,255,255,0.07); }
        .cn-link.active {
          background: #CA9D28;
          color: #114e59;
          font-weight: 800;
          box-shadow: 0 4px 12px rgba(202,157,40,0.35);
        }

        .cn-citizen-name {
          font-size: 14px;
          color: #F5E7C2;
          font-weight: 700;
          padding: 0 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
        }

        /* ── Buttons ── */
        .cn-btn-solid {
          padding: 9px 24px;
          border-radius: 50px;
          border: none;
          background: linear-gradient(135deg, #CA9D28 0%, #CE9A54 100%);
          color: #1a3a44;
          font-size: 13.5px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(202,157,40,0.3);
          font-family: 'Plus Jakarta Sans', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }
        .cn-btn-solid:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(202,157,40,0.5);
          filter: brightness(1.1);
        }
        .cn-btn-outline {
          padding: 9px 22px;
          border-radius: 50px;
          border: 1.5px solid #CA9D28;
          background: transparent;
          color: #CA9D28;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
        }
        .cn-btn-outline:hover { background: rgba(202,157,40,0.1); transform: translateY(-2px); }

        .cn-btn-danger {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(248,113,113,0.5);
          background: rgba(248,113,113,0.1);
          color: #f87171;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .cn-btn-danger:hover { background: #dc2626; color: #fff; border-color: #dc2626; transform: rotate(90deg); }

        /* ── Hamburger ── */
        .cn-ham {
          display: none;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid #CA9D28;
          color: #CA9D28;
          font-size: 20px;
          cursor: pointer;
          padding: 6px 14px;
          border-radius: 50px;
          margin-right: 4px;
          flex-shrink: 0;
        }

                /* ── Language toggle (mobile menu) ── */
        .cn-lang-mobile { display: flex; justify-content: center; padding: 2px 0 6px; }

        /* ── Mobile dropdown ── */
        .cn-mobile-menu {
          display: none;
          position: fixed;
          top: 112px;
          left: 16px;
          right: 16px;
          background: #187484;
          z-index: 999;
          padding: 14px;
          border-radius: 24px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
          flex-direction: column;
          gap: 8px;
          border: 1.5px solid #CA9D28;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .cn-mobile-menu.open { display: flex; }
        .cn-mobile-link {
          padding: 12px 20px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 600;
          color: #F5E7C2;
          background: rgba(255,255,255,0.05);
          border: none;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .cn-mobile-link:hover { background: rgba(255,255,255,0.1); }
        .cn-mobile-link.active { background: #CA9D28; color: #187484; font-weight: 800; }

        /* ── सगळी navbar बटणं एकाच size ची (language, Login/Register, + Book, Logout) ── */
        .cn-links { gap: 10px; }
        .cn-links .cn-btn-solid,
        .cn-links .cn-btn-outline,
        .cn-links > [data-no-translate] {
          height: 42px;
          width: 126px;
          box-sizing: border-box;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding-top: 0;
          padding-bottom: 0;
          font-size: 13.5px;
        }
        .cn-links > [data-no-translate] { padding: 3px; }
        .cn-links > [data-no-translate] > button {
          flex: 1;
          height: 100%;
          font-size: 13.5px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .cn-links .cn-btn-danger { width: 42px; height: 42px; box-sizing: border-box; }

        /* ══ Reference design — फक्त navbar UI (text / logo / functionality तसेच) ══ */
        .cn-nav { height:78px; padding:0 20px 0 0; background:linear-gradient(90deg,#0f5f69 0%,#0c4f58 55%,#0f5d67 100%); border:1.5px solid rgba(232,190,90,0.35); box-shadow:0 8px 28px rgba(0,0,0,0.22); }
        .cn-outer.scrolled .cn-nav { height:66px; }
        .cn-brand { height:96px; padding:8px 40px 8px 8px; gap:16px; background:linear-gradient(135deg,#1b8c9c 0%,#11606d 60%,#0d5260 100%); border:2px solid rgba(232,190,90,0.9); box-shadow:0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.12); }
        .cn-brand:hover { background:linear-gradient(135deg,#20a0b2 0%,#137080 60%,#0f5d6b 100%); box-shadow:0 10px 28px rgba(0,0,0,0.35); }
        .cn-outer.scrolled .cn-brand { height:80px; padding:6px 32px 6px 6px; }
        .cn-logo-wrap { width:78px; height:78px; border:3px solid #fff; box-shadow:0 0 0 2px #E8BE5A, 0 4px 14px rgba(0,0,0,0.3); }
        .cn-outer.scrolled .cn-logo-wrap { width:64px; height:64px; }
        .cn-brand-text { gap:2px; }
        .cn-brand-name { font-family:'Noto Sans Devanagari','Plus Jakarta Sans',sans-serif; font-size:22px; font-weight:700; letter-spacing:0; text-shadow:0 1px 4px rgba(0,0,0,0.3); }
        .cn-outer.scrolled .cn-brand-name { font-size:18px; }
        .cn-brand-sub { font-family:'Noto Sans Devanagari','Plus Jakarta Sans',sans-serif; font-size:20px; font-weight:700; color:#F5C451; letter-spacing:0; }
        .cn-outer.scrolled .cn-brand-sub { font-size:16px; }
        .cn-links { gap:14px; }
        .cn-link { color:#fff; font-size:15px; }
        .cn-link:hover { color:#F5C451; }
        .cn-link.active { background:#F5C451; color:#0f3b3b; }
        .cn-citizen-name { color:#fff; }
        .cn-btn-outline { border:1.5px solid rgba(255,255,255,0.85); color:#fff; }
        .cn-btn-outline:hover { background:rgba(255,255,255,0.12); }
        .cn-btn-solid { background:linear-gradient(180deg,#FBD36B 0%,#EDB53F 100%); color:#0f3b3b; box-shadow:0 4px 14px rgba(237,181,63,0.35); }
        .cn-links .cn-btn-solid, .cn-links .cn-btn-outline, .cn-links > [data-no-translate] { height:42px; font-size:15px; }
        .cn-links .cn-btn-solid, .cn-links .cn-btn-outline { width:auto; min-width:110px; padding:0 26px; }

        /* ── Responsive ── */
        @media(max-width:960px){
          .cn-nav { width: 96%; height: 80px; }
          .cn-brand { height: 96px; padding: 8px 24px 8px 8px; gap: 14px; }
          .cn-logo-wrap { width: 72px; height: 72px; }
          .cn-brand-name { font-size: 19px; }
          .cn-brand-sub { font-size: 16px; }
        }
        @media(max-width:640px){
          .cn-outer { padding: 8px 10px; }
          .cn-nav { width: 100%; height: 72px; }
          .cn-brand { height: 86px; padding: 7px 20px 7px 7px; gap: 12px; }
          .cn-logo-wrap { width: 62px; height: 62px; }
          .cn-brand-name { font-size: 16px; }
          .cn-brand-sub { font-size: 14px; }
        }
        @media(max-width:420px){
          .cn-brand { height: 80px; padding: 6px 16px 6px 6px; gap: 10px; }
          .cn-logo-wrap { width: 54px; height: 54px; }
          .cn-brand-name { font-size: 14px; }
          .cn-brand-sub { font-size: 12px; }
        }

        /* Small tablets (768–839): English नाव लांब असल्याने Login बटणासाठी जागा */
        @media (min-width:768px) and (max-width:839px){
          .cn-brand { padding-right:18px; gap:12px; }
          .cn-brand-name { font-size:17px; }
        }
        /* ══ MOBILE NAVBAR (≤767px) — reference design. Tablet / desktop (≥768) जसेच्या तसे ══ */
        @media (min-width:768px){
          .cn-mobile-menu, .cn-mobile-menu.open { display:none !important; }
        }
        @media (max-width:767px){
          .cn-links { display:none; }
          .cn-outer, .cn-outer.scrolled { padding:8px 10px; }
          .cn-nav, .cn-outer.scrolled .cn-nav {
            width:100%; height:auto; padding:10px 12px 10px 10px; gap:10px; border-radius:26px;
            background:linear-gradient(135deg,#0f5f69 0%,#0c4f58 100%);
            border:1.5px solid rgba(232,190,90,0.6); box-shadow:0 8px 24px rgba(0,0,0,0.20);
          }
          .cn-brand, .cn-outer.scrolled .cn-brand {
            flex:1; min-width:0; height:auto; padding:0; margin:0; gap:12px;
            background:none; border:none; box-shadow:none;
          }
          .cn-brand:hover { background:none; box-shadow:none; transform:none; }
          .cn-logo-wrap, .cn-outer.scrolled .cn-logo-wrap { width:64px; height:64px; border:3px solid #fff; box-shadow:0 0 0 2px #E8BE5A, 0 4px 12px rgba(0,0,0,0.25); }
          .cn-brand-text { min-width:0; gap:3px; }
          .cn-brand-name, .cn-outer.scrolled .cn-brand-name { white-space:normal; font-size:16px; line-height:1.25; }
          .cn-brand-sub, .cn-outer.scrolled .cn-brand-sub { font-size:16px; line-height:1.2; color:#F5C451; }

          .cn-ham {
            display:flex; align-items:center; justify-content:center; flex-shrink:0;
            width:52px; height:52px; padding:0; margin:0; border-radius:14px;
            border:2px solid #E8BE5A; background:rgba(255,255,255,0.04); color:#fff; font-size:24px; line-height:1;
            transition:background .2s, transform .2s;
          }
          .cn-ham:active { transform:scale(0.95); }

          /* Dropdown — white card, rounded, soft shadow, smooth open/close */
          .cn-mobile-menu {
            display:flex; position:absolute; top:calc(100% + 6px); left:14px; right:14px;
            flex-direction:column; gap:12px; padding:16px;
            background:#fff; border:1px solid rgba(15,95,105,0.10); border-radius:22px;
            box-shadow:0 18px 40px rgba(11,63,82,0.22);
            opacity:0; visibility:hidden; pointer-events:none;
            transform:translateY(-8px) scale(0.98); transform-origin:top right;
            transition:opacity .22s ease, transform .22s ease, visibility .22s;
            animation:none; z-index:999;
          }
          .cn-mobile-menu.open { opacity:1; visibility:visible; pointer-events:auto; transform:none; }
          .cn-mobile-menu::before {
            content:''; position:absolute; top:-8px; right:28px; width:16px; height:16px; background:#fff;
            border-left:1px solid rgba(15,95,105,0.10); border-top:1px solid rgba(15,95,105,0.10);
            transform:rotate(45deg); border-radius:3px 0 0 0;
          }
          .cn-lang-mobile { padding:0; }
          .cn-lang-mobile > [data-no-translate] { width:100%; padding:0 !important; border:none !important; background:none !important; border-radius:14px !important; }
          .cn-lang-mobile > [data-no-translate] > button {
            width:100%; height:54px; border-radius:14px !important;
            background:linear-gradient(180deg,#FBD36B 0%,#EDB53F 100%) !important; color:#0f3b3b !important;
            font-size:18px !important; font-weight:800 !important; box-shadow:0 4px 14px rgba(237,181,63,0.35);
          }
          .cn-mobile-link {
            min-height:54px; display:flex; align-items:center; justify-content:center; text-align:center;
            padding:0 16px; border-radius:14px; font-size:17px; font-weight:800;
            background:linear-gradient(135deg,#0f5f69 0%,#0c4f58 100%); color:#fff;
          }
          .cn-mobile-link:hover { background:linear-gradient(135deg,#137080 0%,#0f5d67 100%); }
          .cn-mobile-link.active { background:#F5C451; color:#0f3b3b; }
        }
        @media (max-width:360px){
          .cn-logo-wrap, .cn-outer.scrolled .cn-logo-wrap { width:54px; height:54px; }
          .cn-brand { gap:10px; }
          .cn-brand-name, .cn-outer.scrolled .cn-brand-name, .cn-brand-sub, .cn-outer.scrolled .cn-brand-sub { font-size:14.5px; }
          .cn-ham { width:46px; height:46px; font-size:22px; }
        }
      `}</style>

      <div className={`cn-outer${scrolled ? " scrolled" : ""}`}>
        <nav className="cn-nav">

          {/* ── Brand pill ── */}
          <div className="cn-brand" onClick={() => navigate("/")}>
            <div className="cn-logo-wrap">
              <img src={logo} alt="VVCMC" />
            </div>
            <div className="cn-brand-text">
              <span className="cn-brand-name">वसई-विरार शहर महानगरपालिका</span>
              <span className="cn-brand-sub">जन संवाद</span>
            </div>
          </div>

          {/* ── Desktop links ── */}
                    <div className="cn-links">
            <LanguageToggle variant="dark" single />
            {/* Home link काढला — "/" वर default Home page च दिसतो, आणि logo click ने Home ला जाता येते */}

            {citizen && (
              <button
                className={`cn-link${isActive("/my-appointments") ? " active" : ""}`}
                onClick={() => navigate("/my-appointments")}
              >My Appointments</button>
            )}

            {citizen ? (
              <>
                <span className="cn-citizen-name">👋 {citizen.fullName?.split(" ")[0]}</span>
                <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ Book</button>
                <button className="cn-btn-danger" onClick={logout} title="Logout">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/>
                    <line x1="12" y1="2" x2="12" y2="12"/>
                  </svg>
                </button>
              </>
            ) : (
              <>
                {/* एकच बटण — Login page वर "Register", बाकी सगळीकडे "Login" */}
                {isActive("/login") ? (
                  <button className="cn-btn-solid" onClick={() => navigate("/register")}>Register</button>
                ) : (
                  <button className="cn-btn-outline" onClick={() => navigate("/login")}>Login</button>
                )}
              </>
            )}
          </div>

          <button className="cn-ham" onClick={() => setMenu(m => !m)} aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu}>
            {menu ? "✕" : "☰"}
          </button>
        </nav>

        {/* ── Mobile menu ── */}
              <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
          <div className="cn-lang-mobile"><LanguageToggle variant="dark" single /></div>

          {citizen && (
            <button
              className={`cn-mobile-link${isActive("/my-appointments") ? " active" : ""}`}
              onClick={() => { navigate("/my-appointments"); setMenu(false); }}
            >📅 My Appointments</button>
          )}

          {citizen ? (
            <>
              <button
                className="cn-mobile-link"
                style={{ color: "#CA9D28" }}
                onClick={() => { navigate("/book-appointment"); setMenu(false); }}
              >+ Book Appointment</button>
              <button
                className="cn-mobile-link"
                style={{ color: "#f87171" }}
                onClick={logout}
              >🚪 Logout</button>
            </>
          ) : (
            <>
              {isActive("/login") ? (
                <button className="cn-mobile-link" onClick={() => { navigate("/register"); setMenu(false); }}>📝 Register</button>
              ) : (
                <button className="cn-mobile-link" onClick={() => { navigate("/login"); setMenu(false); }}>🔐 Login</button>
              )}
            </>
          )}
        </div>
      </div>

    </>
  );
}