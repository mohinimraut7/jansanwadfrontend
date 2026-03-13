
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { FiChevronLeft, FiLayout, FiFileText, FiSend, FiSettings } from "react-icons/fi";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [mode, setMode] = useState("open");

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

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group
     ${
       isActive
         ? "bg-indigo-50 text-indigo-700 font-bold"
         : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-semibold"
     }`;

  if (mode === "hidden") {
    return (
      <button
        onClick={() => setMode("open")}
        className="fixed top-5 left-5 z-50 bg-white text-indigo-600 p-3 rounded-xl shadow-lg border border-gray-200 hover:scale-110 transition-all"
      >
        <FiSettings size={22} />
      </button>
    );
  }

  return (
    <aside
      className={`${
        mode === "open" ? "w-[220px]" : "w-[72px]"
      } min-h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 overflow-hidden shadow-sm`}
    >
      {/* Header */}
      <div className="px-5 pt-7 pb-5 flex items-center justify-between">
        {/* <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="h-9 w-9 flex-shrink-0 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-extrabold text-base shadow">
           JD 
          </div>
          {mode === "open" && (
            <div className="flex flex-col">
              <h2 className="text-gray-900 font-extrabold text-base tracking-tight whitespace-nowrap leading-tight">
                Janata Darbar
              </h2>
              <p className="text-[10px] uppercase tracking-widest text-indigo-500 font-bold">
                Admin Panel
              </p>
            </div>
          )}
        </div> */}
        <div className="flex items-center gap-2.5 overflow-hidden lg:hidden">
  <div className="h-9 w-9 flex-shrink-0 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-extrabold text-base shadow">
    JD
  </div>

  {mode === "open" && (
    <div className="flex flex-col">
      <h2 className="text-gray-900 font-extrabold text-base tracking-tight whitespace-nowrap leading-tight">
        Janata Darbar
      </h2>
      <p className="text-[10px] uppercase tracking-widest text-indigo-500 font-bold">
        Admin Panel
      </p>
    </div>
  )}
</div>

        <button
          onClick={toggleSidebar}
          className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
        >
          {mode === "open" ? <FiChevronLeft size={18} /> : <span className="text-xs font-bold">›</span>}
        </button>
      </div>

      {/* Divider */}
      <div className="mx-4 border-t border-gray-100 mb-3" />

      {/* Nav */}
      <nav className="flex-1 px-3 flex flex-col gap-1">
        <NavLink to="/dashboard" className={linkClass}>
          <FiLayout size={18} className="flex-shrink-0" />
          {mode === "open" && <span className="text-[14px]">Dashboard</span>}
        </NavLink>

        <NavLink to="/availability" className={linkClass}>
          <FiFileText size={18} className="flex-shrink-0" />
          {mode === "open" && <span className="text-[14px]">Availability</span>}
        </NavLink>

        <NavLink to="/allapplication" className={linkClass}>
          <FiFileText size={18} className="flex-shrink-0" />
          {mode === "open" && <span className="text-[14px]">All Application</span>}
        </NavLink>

        {FULL_ACCESS_ROLES.includes(user?.role) && (
        <NavLink to="/Janatadarbarcomplaintform" className={linkClass}>
          <FiSend size={18} className="flex-shrink-0" />
          {mode === "open" && <span className="text-[14px]">Application Form</span>}
        </NavLink>
        )}
            {FULL_ACCESS_ROLES.includes(user?.role) && (
           <NavLink to="/users" className={linkClass}>
          <FiSend size={18} className="flex-shrink-0" />
          {mode === "open" && <span className="text-[14px]">Users</span>}
        </NavLink>
        )}
      </nav>

      {/* User Profile */}
      <div className="p-4 mt-auto">
        <div className="border-t border-gray-100 pt-4">
          {mode === "open" ? (
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-extrabold text-sm flex-shrink-0">
                  {(user?.fullName || user?.userName || "A")[0].toUpperCase()}
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-extrabold text-gray-900 truncate leading-tight">
                    {user?.fullName || user?.userName || "Admin User"}
                  </p>
                  <p className="text-[11px] text-gray-500 font-semibold truncate">
                    {user?.role}
                  </p>
                </div>
              </div>
              {user?.departmentName && (
                <p className="text-[11px] text-gray-500 font-semibold mb-3">
                  Dept: <span className="text-gray-800 font-bold">{user.departmentName}</span>
                </p>
              )}
              <button
                onClick={handleLogout}
                className="w-full bg-red-50 text-red-600 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider hover:bg-red-600 hover:text-white transition-all duration-200 border border-red-100"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full flex justify-center py-3 text-red-500 hover:bg-red-50 rounded-lg transition-all"
            >
              <FiSettings size={18} />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}