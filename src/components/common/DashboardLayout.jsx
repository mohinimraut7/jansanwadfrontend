


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



import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar - TOP (hidden on small screens) */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        {/* Page Content - RIGHT */}
        <div className="flex-1 overflow-auto bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
}