// // import { Routes, Route, Navigate } from "react-router-dom";
// // import { useSelector, useDispatch } from "react-redux";
// // import { useEffect } from "react";

// // import Login from "./pages/Login";
// // import Registration from "./pages/Registration";
// // import Dashboard from "./pages/Dashboard";
// // import RevenueAllocation from "./pages/RevenueAllocation";
// // import DashboardLayout from "./components/common/DashboardLayout";

// // import { loginSuccess } from "./redux/slices/authSlice"; // ✅ import
// // import AddRevenueActivity from "./pages/AddRevenueActivity";

// // import { ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import RevenueAllocationViewSP from "./pages/RevenueAllocationViewSP";
// // import RevenueAllocationDisburseAmount from "./pages/RevenueAllocationDisburseAmount";
// // import JanataDarbarComplaintForm from "./pages/JansanwadAppform";
// // import AllApplication from "./pages/Allapplication";
// // import Users from "./pages/Users";
// // import Availability from "./pages/Availability";
// // import ApplicationCitizens from "./pages/ApplicationCitizens";
// // import JansanwadAppform from "./pages/JansanwadAppform";
// // import Meetings from "./pages/Meetings";
// // import SpecificMeetingSubjects from "./pages/SpecificMeetingSubjects";



// // function ProtectedRoute() {
// //   const { isLoggedIn } = useSelector((state) => state.auth);

  
// //   const storedUser = localStorage.getItem("authUser");

  
// //   if (isLoggedIn || storedUser) {
// //     return <DashboardLayout />;
// //   }

// //   return <Navigate to="/" replace />;
// // }

// // export default function App() {
// //   const dispatch = useDispatch();

 
// //   useEffect(() => {
// //     const storedUser = localStorage.getItem("authUser");

// //     if (storedUser) {
// //       dispatch(loginSuccess(JSON.parse(storedUser)));
// //     }
// //   }, [dispatch]);

// //   return (
// //     <>
// //        <ToastContainer
// //         position="top-right"
// //         autoClose={3000}
// //         hideProgressBar={false}
// //         closeOnClick
// //         pauseOnHover
// //         draggable
// //       />

// //        <Routes>
// //       <Route path="/" element={<Navigate to="/login"/>} />
    
// //       <Route path="/login" element={<Login />} />
// //       <Route path="/register" element={<Registration />} />

    
// //       <Route element={<ProtectedRoute />}>
// //         <Route path="/dashboard" element={<Dashboard />} />

// //                 <Route path="/meetings" element={<Meetings />} />
// //                    {/* <Route path="/meetingsubjects" element={<SpecificMeetingSubjects />} /> */}

// // <Route path="/meetingsubjects" element={<SpecificMeetingSubjects />} />
// // <Route path="/proceedingsmeeting/:meetingId" element={<SpecificMeetingSubjects />} />
// // <Route path="/proceedingsmeeting" element={<SpecificMeetingSubjects />} />
        
// //           <Route path="/allapplication" element={<AllApplication />} />

// //           <Route path="/allapplicationcitizens" element={<ApplicationCitizens/>} />


         
          
// //           <Route path="/availability" element={<Availability />} />

          
// //         <Route path="/revenue-allocation" element={<RevenueAllocation />} />
// //         {/* <Route path="/revenue-allocation-sp" element={<RevenueAllocationViewSP />} /> */}
// //    <Route path="/revenue-allocation-disburse" element={<RevenueAllocationDisburseAmount />} />

// //     <Route path="/Jansanwadappform" element={<JansanwadAppform/>} />
// //      {/* <Route path="/Janatadarbarcomplaintform" element={<JanataDarbarComplaintForm />} /> */}
// //      <Route path="/users" element={<Users />} />

// // {/*      
// //         <Route
// //         path="/revenue/:revenueId/activity"
// //        element={<AddRevenueActivity />}
// //        /> */}



       
// //         <Route
// //         path="/revenue/addactivity"
// //        element={<AddRevenueActivity />}
// //        />
// //       </Route>

     
// //       <Route path="*" element={<Navigate to="/" replace />} />
// //     </Routes>
    
// //     </>
   
// //   );
// // }

// // =====================

// import { Routes, Route, Navigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";

// import Login from "./pages/Login";
// import CitizenLogin from "./pages/CitizenLogin";
// import PortalSelect from "./pages/PortalSelect";
// import Registration from "./pages/Registration";
// import Dashboard from "./pages/Dashboard";
// import RevenueAllocation from "./pages/RevenueAllocation";
// import DashboardLayout from "./components/common/DashboardLayout";
// import { loginSuccess } from "./redux/slices/authSlice";
// import AddRevenueActivity from "./pages/AddRevenueActivity";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import RevenueAllocationDisburseAmount from "./pages/RevenueAllocationDisburseAmount";
// import AllApplication from "./pages/Allapplication";
// import Users from "./pages/Users";
// import Availability from "./pages/Availability";
// import ApplicationCitizens from "./pages/ApplicationCitizens";
// import JansanwadAppform from "./pages/JansanwadAppform";
// import Meetings from "./pages/Meetings";
// import SpecificMeetingSubjects from "./pages/SpecificMeetingSubjects";
// import Home from "./pages/Home";
// import Footer from "./components/common/Footer";
// import NavbarLanding from "./components/common/NavbarLanding";

// function ProtectedRoute() {
//   const { isLoggedIn } = useSelector((state) => state.auth);
//   const storedUser = localStorage.getItem("authUser");
//   if (isLoggedIn || storedUser) return <DashboardLayout />;
//   return <Navigate to="/login" replace />;
// }

// export default function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const storedUser = localStorage.getItem("authUser");
//     if (storedUser) dispatch(loginSuccess(JSON.parse(storedUser)));
//   }, [dispatch]);

//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={3000}
//         hideProgressBar={false} closeOnClick pauseOnHover draggable />

//       <Routes>
//         <Route path="/"            element={<><NavbarLanding /><Home /><Footer /></>} />
//         <Route path="/home"        element={<><NavbarLanding /><Home /><Footer /></>} />
//         <Route path="/login"       element={<PortalSelect />} />
//         <Route path="/admin-login" element={<Login />} />
//         <Route path="/citizen-login" element={<CitizenLogin />} />
//         <Route path="/register"    element={<Registration />} />

//         <Route element={<ProtectedRoute />}>
//           <Route path="/dashboard"                  element={<Dashboard />} />
//           <Route path="/meetings"                   element={<Meetings />} />
//           <Route path="/meetingsubjects"            element={<SpecificMeetingSubjects />} />
//           <Route path="/proceedingsmeeting/:meetingId" element={<SpecificMeetingSubjects />} />
//           <Route path="/proceedingsmeeting"         element={<SpecificMeetingSubjects />} />
//           <Route path="/allapplication"             element={<AllApplication />} />
//           <Route path="/allapplicationcitizens"     element={<ApplicationCitizens />} />
//           <Route path="/availability"               element={<Availability />} />
//           <Route path="/revenue-allocation"         element={<RevenueAllocation />} />
//           <Route path="/revenue-allocation-disburse" element={<RevenueAllocationDisburseAmount />} />
//           <Route path="/Jansanwadappform"           element={<JansanwadAppform />} />
//           <Route path="/users"                      element={<Users />} />
//           <Route path="/revenue/addactivity"        element={<AddRevenueActivity />} />
//         </Route>

//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </>
//   );
// }





import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Login from "./pages/Login";
import CitizenLogin from "./pages/CitizenLogin";
import PortalSelect from "./pages/PortalSelect";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import RevenueAllocation from "./pages/RevenueAllocation";
import DashboardLayout from "./components/common/DashboardLayout";
import { loginSuccess } from "./redux/slices/authSlice";
import AddRevenueActivity from "./pages/AddRevenueActivity";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RevenueAllocationDisburseAmount from "./pages/RevenueAllocationDisburseAmount";
import AllApplication from "./pages/Allapplication";
import Users from "./pages/Users";
import Availability from "./pages/Availability";
import ApplicationCitizens from "./pages/ApplicationCitizens";
import JansanwadAppform from "./pages/JansanwadAppform";
import Meetings from "./pages/Meetings";
import SpecificMeetingSubjects from "./pages/SpecificMeetingSubjects";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import NavbarLanding from "./components/common/NavbarLanding";
import BookAppointment from "./pages/BookAppointment";
import Myappointments from "./pages/Myappointments";
import CitizenRegistration from "./pages/CitizenRegistration";

function CitizenProtectedRoute({ children }) {
  const citizen = localStorage.getItem("citizenUser");
  return citizen ? children : <Navigate to="/citizen-login" replace />;
}

function ProtectedRoute() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const storedUser = localStorage.getItem("authUser");
  if (isLoggedIn || storedUser) return <DashboardLayout />;
  return <Navigate to="/login" replace />;
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) dispatch(loginSuccess(JSON.parse(storedUser)));
  }, [dispatch]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000}
        hideProgressBar={false} closeOnClick pauseOnHover draggable />

      <Routes>
        <Route path="/"              element={<><NavbarLanding /><Home /><Footer /></>} />
        <Route path="/home"          element={<><NavbarLanding /><Home /><Footer /></>} />

        <Route path="/login" element={<><NavbarLanding /><PortalSelect /><Footer /></>} />


        {/* <Route path="/login"         element={<PortalSelect />} /> */}
        {/* <Route path="/admin-login"   element={<Login />} /> */}
        <Route path="/admin-login" element={<><NavbarLanding /><Login /><Footer /></>} />

       <Route path="/citizen-login" element={<><NavbarLanding /><CitizenLogin /><Footer /></>} />

       <Route path="/citizen-registration" element={<><NavbarLanding /><CitizenRegistration /><Footer /></>} />

        {/* <Route path="/citizen-login" element={<CitizenLogin />} /> */}
        <Route path="/register"      element={<Registration />} />

        {/* ── Citizen Routes ── */}
      {/* ── Citizen Routes ── */}
<Route path="/book-appointment" element={
  <CitizenProtectedRoute>
    <><NavbarLanding /><BookAppointment /><Footer /></>
  </CitizenProtectedRoute>
} />
<Route path="/my-appointments" element={
  <CitizenProtectedRoute>
    <><NavbarLanding /><Myappointments /><Footer /></>
  </CitizenProtectedRoute>
} />

        {/* ── Admin Routes ── */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard"                     element={<Dashboard />} />
          <Route path="/meetings"                      element={<Meetings />} />
          <Route path="/meetingsubjects"               element={<SpecificMeetingSubjects />} />
          <Route path="/proceedingsmeeting/:meetingId" element={<SpecificMeetingSubjects />} />
          <Route path="/proceedingsmeeting"            element={<SpecificMeetingSubjects />} />
          <Route path="/allapplication"                element={<AllApplication />} />
          <Route path="/allapplicationcitizens"        element={<ApplicationCitizens />} />
          <Route path="/availability"                  element={<Availability />} />
          {/* <Route path="/revenue-allocation-disburse"   element={<RevenueAllocationDisburseAmount />} /> */}
          <Route path="/Jansanwadappform"              element={<JansanwadAppform />} />
          <Route path="/users"                         element={<Users />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}