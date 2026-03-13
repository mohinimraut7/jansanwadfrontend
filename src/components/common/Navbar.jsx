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

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { FiBell, FiHelpCircle, FiLogOut } from "react-icons/fi";
import logo from "../../assets/vvcmclogo.jpg";

function Avatar({ name, color }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div style={{
      width: 34, height: 34, borderRadius: "50%",
      background: color || "linear-gradient(135deg,#15803d,#a16207)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 13, fontWeight: 800, color: "#fff",
      border: "2px solid #fde68a", flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <style>{`
        .vv-nav { background: linear-gradient(135deg, #14532d 0%, #166534 60%, #15803d 100%); border-bottom: 2px solid #a16207; display:flex; align-items:center; justify-content:space-between; padding: 0 28px; height: 62px; box-shadow: 0 3px 16px #14532d44; position:relative; z-index:100; }
        .vv-gold-line { position:absolute; bottom:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,#a16207,#fde68a,#ca8a04,#fde68a,#a16207,transparent); }
        .vv-nav-icon { color:#86efac; cursor:pointer; transition:color .2s,transform .2s; }
        .vv-nav-icon:hover { color:#fde68a; transform:scale(1.15); }
        .vv-logout { display:flex; align-items:center; gap:6px; background:#ffffff15; color:#fca5a5; border:1px solid #f8717160; padding:6px 14px; border-radius:8px; font-weight:700; font-size:13px; cursor:pointer; transition:all .2s; font-family:inherit; }
        .vv-logout:hover { background:#dc262620; color:#fff; border-color:#f87171; }
        .vv-user-chip { display:flex; align-items:center; gap:8px; background:#ffffff12; border-radius:24px; padding:4px 14px 4px 4px; border:1px solid #ffffff20; }
      `}</style>

      <div className="vv-nav">
        <div className="vv-gold-line"/>

        {/* ── Logo + Brand ── */}
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <div style={{ width:46, height:46, borderRadius:12, overflow:"hidden", border:"2px solid #a16207", flexShrink:0, background:"#fff" }}>
            <img src={logo} alt="VVCMC" style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
          </div>
          <div style={{ lineHeight:1.25 }}>
            <div style={{ fontSize:15, fontWeight:800, color:"#fef9c3", letterSpacing:0.2 }}>जन संवाद</div>
            <div style={{ fontSize:10, color:"#86efac", fontWeight:600, letterSpacing:1.5, textTransform:"uppercase" }}>Admin Panel · VVCMC</div>
          </div>
          {/* Gold divider */}
          <div style={{ width:1, height:32, background:"linear-gradient(to bottom,transparent,#a16207,transparent)", marginLeft:8 }}/>
          <div style={{ fontSize:11, color:"#a3a3a3", color:"#86efac88", maxWidth:180 }}>
            वसई-विरार शहर महानगरपालिका
          </div>
        </div>

        {/* ── Right Side ── */}
        <div style={{ display:"flex", alignItems:"center", gap:14 }}>

          {/* Bell */}
          <div className="vv-nav-icon">
            <FiBell size={19}/>
          </div>

          {/* Help */}
          <div className="vv-nav-icon">
            <FiHelpCircle size={19}/>
          </div>

          {/* Separator */}
          <div style={{ width:1, height:28, background:"#ffffff20" }}/>

          {/* User Chip */}
          <div className="vv-user-chip">
            <Avatar name={user?.fullName || "Admin User"} />
            <div>
              <div style={{ fontSize:13, fontWeight:700, color:"#fff", whiteSpace:"nowrap" }}>
                {user?.fullName || "Admin User"}
              </div>
              <div style={{ fontSize:10, color:"#86efac", fontWeight:500 }}>{user?.role || "Admin"}</div>
            </div>
          </div>

          {/* Logout */}
          <button onClick={handleLogout} className="vv-logout">
            <FiLogOut size={15}/>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;