


// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

// import { Outlet } from "react-router-dom";

// export default function DashboardLayout() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar - TOP */}
//       <Navbar />

    
//       <div className="flex flex-1 overflow-hidden">
     
//         <Sidebar />

//         {/* Page Content - RIGHT */}
//         <div className="flex-1 overflow-auto bg-gray-100">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }



// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import { Outlet } from "react-router-dom";

// export default function DashboardLayout() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar - TOP (hidden on small screens) */}
//       <div className="hidden md:block">
//         <Navbar />
//       </div>

//       <div className="flex flex-1 overflow-hidden">
//         <Sidebar />

//         {/* Page Content - RIGHT */}
//         <div className="flex-1 overflow-auto bg-gray-100">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }



// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import { Outlet } from "react-router-dom";

// export default function DashboardLayout() {
//   return (
//     <div style={{ display: "flex", minHeight: "100vh", position: "relative" }}>

//       {/* Sidebar - LEFT, full height, on top (z-index higher than navbar) */}
//       <div style={{
//         position: "sticky",
//         top: 0,
//         height: "100vh",
//         zIndex: 50,
//         flexShrink: 0,
//       }}>
//         <Sidebar />
//       </div>

//       {/* Right side: Navbar on top + content below */}
//       <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

//         {/* Navbar - behind sidebar (z-index lower) */}
//         <div style={{ position: "sticky", top: 0, zIndex: 40 }} className="hidden md:block">
//           <Navbar />
//         </div>

//         {/* Page Content */}
//         <div style={{ flex: 1, overflowY: "auto", background: "#f3f4f6" }}>
//           <Outlet />
//         </div>

//       </div>
//     </div>
//   );
// }

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "./SidebarContext";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <div style={{ display: "flex", minHeight: "100vh", position: "relative" }}>

        {/* Sidebar - LEFT, full height, in front */}
        <div style={{ position: "sticky", top: 0, height: "100vh", zIndex: 50, flexShrink: 0 }}>
          <Sidebar />
        </div>
        

        {/* Right: Navbar + Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ position: "sticky", top: 0, zIndex: 40 }} className="hidden md:block">
            <Navbar />
          </div>
          <div style={{ flex: 1, overflowY: "auto", background: "#f3f4f6" }}>
            <Outlet />
          </div>
        </div>

      </div>
    </SidebarProvider>
  );
}