// // import React, { useState } from "react";
// // import { useDispatch } from "react-redux";
// // import { loginSuccess } from "../redux/slices/authSlice";
// // import { useNavigate } from "react-router-dom";
// // import axiosInstance from "../services/axiosInstance";
// // import { departmentsData, officeRoles } from "../data/officeData";
// // import ganeshji from "../assets/ganeshnaiklogo.jfif";
// // import logo from "../assets/logokamal.jpg";

// // export default function Registration() {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const [step, setStep] = useState(1);

// //   const [form, setForm] = useState({
// //     fullName: "",
// //     userName: "",
// //     password: "",
// //     role: "",
// //     office: "",
// //     departmentCategory: "",
// //   });

// //   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// //   const handleOfficeChange = (e) => setForm({ ...form, office: e.target.value, departmentCategory: "", role: "" });

// //   const isGuardianMinisterOffice = form.office === "Guardian Minister Office";

// //   const nextStep = () => {
// //     if (step === 1 && form.fullName && form.userName && form.office) {
// //       setStep(isGuardianMinisterOffice ? 3 : 2);
// //     } else if (step === 2 && form.departmentCategory) {
// //       setStep(3);
// //     }
// //   };

// //   const prevStep = () => {
// //     if (step === 3 && isGuardianMinisterOffice) setStep(1);
// //     else if (step > 1) setStep(step - 1);
// //   };

// //   const handleRegister = async (e) => {
// //     e.preventDefault();
// //     if (!form.fullName || !form.userName || !form.password || !form.role) {
// //       alert("All fields required ❌"); return;
// //     }
// //     try {
// //       const res = await axiosInstance.post("/register", form);
// //       const data = res.data;
// //       if (!data.success) { alert(data.message); return; }
// //       dispatch(loginSuccess(data.user));
// //       localStorage.setItem("authUser", JSON.stringify(data.user));
// //       alert("Registration Success ✅");
// //       navigate("/dashboard");
// //     } catch (error) {
// //       alert(error?.response?.data?.message || "Server Error ❌");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center relative"
// //       style={{ backgroundColor: "#dde1f5", backgroundImage: `radial-gradient(circle at 15% 50%, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(circle at 85% 30%, rgba(99,102,241,0.1) 0%, transparent 50%)` }}>

// //       <div className="absolute top-1/4 left-4 w-10 h-10 bg-green-400 rounded-full opacity-80"></div>
// //       <div className="absolute top-1/3 left-12 w-6 h-6 bg-blue-600 rounded-full opacity-90"></div>
// //       <div className="absolute bottom-1/3 left-6 w-8 h-8 bg-blue-600 rounded-full opacity-90"></div>
// //       <div className="absolute top-1/2 right-4 w-8 h-8 bg-blue-600 rounded-full opacity-90"></div>
// //       <div className="absolute bottom-1/4 right-8 w-6 h-6 bg-blue-500 rounded-full opacity-80"></div>
// //       <div className="absolute top-1/4 right-16 w-4 h-4 bg-blue-400 rounded-full opacity-70"></div>
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         <svg className="absolute top-0 left-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
// //           <line x1="5%" y1="20%" x2="40%" y2="60%" stroke="#6366f1" strokeWidth="1"/>
// //           <line x1="10%" y1="70%" x2="35%" y2="30%" stroke="#6366f1" strokeWidth="1"/>
// //           <line x1="60%" y1="10%" x2="95%" y2="50%" stroke="#6366f1" strokeWidth="1"/>
// //           <line x1="65%" y1="80%" x2="90%" y2="40%" stroke="#6366f1" strokeWidth="1"/>
// //         </svg>
// //       </div>

// //       <div className="relative z-10 flex w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden">
// //         {/* LEFT - Form */}
// //         <div className="w-full md:w-1/2 bg-white px-10 py-12 flex flex-col justify-center">
// //           {/* <div className="flex items-center gap-3 mb-8">
// //             <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
// //               <span className="text-white font-bold text-sm">JD</span>
// //             </div>
// //             <div>
// //               <p className="font-bold text-gray-800 text-sm leading-tight">Janata</p>
// //               <p className="font-bold text-gray-800 text-sm leading-tight">Darbar</p>
// //             </div>
// //           </div> */}
// //           <div className="flex items-center gap-3 mb-8">
// //                         <div className="flex items-center justify-center">
// //                        <img src={logo} alt="Kamal" className="w-20 h-20 object-contain" />
          
// //                         </div>
// //                         <div>
// //                           <p className="text-2xl font-extrabold text-gray-900">JANATA DARBAR</p>
                        
// //                         </div>
// //                       </div>

// //           {/* <h2 className="text-4xl font-extrabold text-gray-900 mb-1">Get started</h2> */}
        

// //           {/* Step Indicator */}
// //           <div className="mb-8 flex items-center justify-center gap-2">
// //             {[1, 2, 3].map((num) => {
// //               if (isGuardianMinisterOffice && num === 2) return null;
// //               const displayNum = isGuardianMinisterOffice && num === 3 ? 2 : num;
// //               const isActive = isGuardianMinisterOffice
// //                 ? (step === 1 && num === 1) || (step === 3 && num === 3)
// //                 : step >= num;
// //               return (
// //                 <div key={num} className="flex items-center">
// //                   <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${isActive ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}>
// //                     {displayNum}
// //                   </div>
// //                   {((isGuardianMinisterOffice && num === 1) || (!isGuardianMinisterOffice && num < 3)) && (
// //                     <div className={`w-12 h-1 mx-1 transition-all ${(isGuardianMinisterOffice && step === 3) || (!isGuardianMinisterOffice && step > num) ? "bg-blue-600" : "bg-gray-200"}`}></div>
// //                   )}
// //                 </div>
// //               );
// //             })}
// //           </div>

// //           <form onSubmit={handleRegister} className="space-y-4">
// //             {/* Step 1 - Basic Info + Office */}
// //             {step === 1 && (
// //               <>
// //                 <div className="border border-gray-200 rounded-lg px-4 py-3 focus-within:border-blue-500 transition-all">
// //                   <label className="block text-xs text-gray-400 mb-1">Full Name</label>
// //                   <input type="text" name="fullName" placeholder="Enter your full name" value={form.fullName} onChange={handleChange}
// //                     className="w-full outline-none text-gray-800 text-sm bg-transparent" />
// //                 </div>
// //                 <div className="border border-gray-200 rounded-lg px-4 py-3 focus-within:border-blue-500 transition-all">
// //                   <label className="block text-xs text-gray-400 mb-1">Username</label>
// //                   <input type="text" name="userName" placeholder="Enter your username" value={form.userName} onChange={handleChange}
// //                     className="w-full outline-none text-gray-800 text-sm bg-transparent" />
// //                 </div>
// //                 <div className="border border-gray-200 rounded-lg px-4 py-3 focus-within:border-blue-500 transition-all">
// //                   <label className="block text-xs text-gray-400 mb-1">Office</label>
// //                   <select name="office" value={form.office} onChange={handleOfficeChange}
// //                     className="w-full outline-none text-gray-800 text-sm bg-transparent">
// //                     <option value="">Select Office</option>
// //                     {Object.keys(departmentsData).map((office, i) => (
// //                       <option key={i} value={office}>{office}</option>
// //                     ))}
// //                   </select>
// //                 </div>
// //               </>
// //             )}

// //             {/* Step 2 - Department Category (not for Guardian Minister) */}
// //             {step === 2 && !isGuardianMinisterOffice && (
// //               <div className="border border-gray-200 rounded-lg px-4 py-3 focus-within:border-blue-500 transition-all">
// //                 <label className="block text-xs text-gray-400 mb-1">Department</label>
// //                 <select name="departmentCategory" value={form.departmentCategory} onChange={handleChange}
// //                   className="w-full outline-none text-gray-800 text-sm bg-transparent">
// //                   <option value="">Select Department</option>
// //                   {(departmentsData[form.office] || []).map((cat, i) => (
// //                     <option key={i} value={cat}>{cat}</option>
// //                   ))}
// //                 </select>
// //               </div>
// //             )}

// //             {/* Step 3 - Role & Password */}
// //             {step === 3 && (
// //               <>
// //                 <div className="border border-gray-200 rounded-lg px-4 py-3 focus-within:border-blue-500 transition-all">
// //                   <label className="block text-xs text-gray-400 mb-1">Role</label>
// //                   <select name="role" value={form.role} onChange={handleChange}
// //                     className="w-full outline-none text-gray-800 text-sm bg-transparent">
// //                     <option value="">Select Role</option>
// //                     {(officeRoles[form.office] || []).map((role, i) => (
// //                       <option key={i} value={role}>{role}</option>
// //                     ))}
// //                   </select>
// //                 </div>
// //                 <div className="border border-gray-200 rounded-lg px-4 py-3 focus-within:border-blue-500 transition-all">
// //                   <label className="block text-xs text-gray-400 mb-1">Password</label>
// //                   <input type="password" name="password" placeholder="Enter your password" value={form.password} onChange={handleChange}
// //                     className="w-full outline-none text-gray-800 text-sm bg-transparent" />
// //                 </div>
// //               </>
// //             )}

// //             {/* Buttons */}
// //             <div className="flex justify-between items-center mt-8 gap-3">
// //               {step > 1 && (
// //                 <button type="button" onClick={prevStep}
// //                   className="flex-1 py-3 text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-all">
// //                   Back
// //                 </button>
// //               )}
// //               {step < 3 ? (
// //                 <button type="button" onClick={nextStep}
// //                   disabled={
// //                     (step === 1 && (!form.fullName || !form.userName || !form.office)) ||
// //                     (step === 2 && !form.departmentCategory)
// //                   }
// //                   className={`flex-1 py-3 font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
// //                     (step === 1 && (!form.fullName || !form.userName || !form.office)) ||
// //                     (step === 2 && !form.departmentCategory)
// //                       ? "bg-gray-300 text-gray-600 cursor-not-allowed opacity-60"
// //                       : "bg-blue-600 text-white hover:bg-blue-700"
// //                   }`}>
// //                   Next <span className="text-lg">→</span>
// //                 </button>
// //               ) : (
// //                 <button type="submit" disabled={!form.password || !form.role}
// //                   className={`flex-1 py-3 font-semibold rounded-lg transition-all ${!form.password || !form.role ? "bg-gray-300 text-gray-600 cursor-not-allowed opacity-60" : "bg-green-600 text-white hover:bg-green-700"}`}>
// //                   CREATE ACCOUNT
// //                 </button>
                
// //               )}
              
// //             </div>
// //             <p className="text-sm text-gray-500 mb-8 flex items-center justify-center text-center">
// //   Already have an account?{" "}
// //   <span
// //     onClick={() => navigate("/login")}
// //     className="text-blue-600 font-medium cursor-pointer ml-1"
// //   >
// //     Sign in
// //   </span>
// // </p>
// //           </form>
// //         </div>

// //         {/* RIGHT - Blue Side */}
// //         <div className="hidden md:flex w-1/2 flex-col items-center justify-center relative"
// //           style={{ background: "linear-gradient(135deg, #3b4de8 0%, #5b6cf5 100%)" }}>
// //           <div className="absolute top-6 left-6 w-2 h-2 bg-yellow-300 rounded-full"></div>
// //           <div className="absolute top-12 right-10 w-3 h-3 bg-green-400 rounded-full"></div>
// //           <div className="absolute bottom-20 left-8 w-2 h-2 bg-pink-400 rounded-full"></div>
// //           <div className="absolute bottom-10 right-12 w-2 h-2 bg-yellow-300 rounded-full"></div>
// //           <div className="absolute top-1/3 left-4 text-white text-xs opacity-40">✦</div>
// //           <div className="absolute top-1/4 right-6 text-white text-xs opacity-40">✦</div>
// //           <div className="w-44 h-44 rounded-full border-4 border-white/40 shadow-2xl overflow-hidden mb-5"
// //           style={{ boxShadow: "0 0 0 6px rgba(255,255,255,0.15), 0 20px 50px rgba(0,0,0,0.3)" }}>
// //           <img
// //             src={ganeshji}
// //             alt="Shri Ganesh Naik"
// //             style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
// //           />
// //         </div>
// //              <p className="text-white text-xl font-bold text-center px-8 leading-snug mb-1">
// //              Shri Ganesh Naik
// //             </p>
// //             {/* <p className="text-yellow-300 text-sm font-semibold text-center mb-1">
// //               Shri Ganesh Naik
// //             </p> */}
// //             <p className="text-white/70 text-xs text-center mb-4">
// //               Guardian Minister , Palghar
// //             </p>
// //           <p className="text-white/70 text-sm text-center mt-2 px-10">Admin Panel — Secure Registration</p>
// //           <div className="flex gap-2 mt-8">
// //             <div className="w-6 h-1.5 bg-white rounded-full"></div>
// //             <div className="w-2 h-1.5 bg-white/40 rounded-full"></div>
// //             <div className="w-2 h-1.5 bg-white/40 rounded-full"></div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // =====================================

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/slices/authSlice";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../services/axiosInstance";
// import { departmentsData, officeRoles } from "../data/officeData";
// import bgImage from "../assets/vasaivirarmahangarpalika.jpg";
// import logo from "../assets/vvcmclogo.jpg";
// import ganeshji from "../assets/ganeshnaiklogo.jfif";

// export default function Registration() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);

//   const [form, setForm] = useState({
//     fullName: "",
//     userName: "",
//     password: "",
//     role: "",
//     office: "",
//     departmentCategory: "",
//   });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleOfficeChange = (e) => setForm({ ...form, office: e.target.value, departmentCategory: "", role: "" });

//   const isGuardianMinisterOffice = form.office === "Guardian Minister Office";

//   const nextStep = () => {
//     if (step === 1 && form.fullName && form.userName && form.office) {
//       setStep(isGuardianMinisterOffice ? 3 : 2);
//     } else if (step === 2 && form.departmentCategory) {
//       setStep(3);
//     }
//   };

//   const prevStep = () => {
//     if (step === 3 && isGuardianMinisterOffice) setStep(1);
//     else if (step > 1) setStep(step - 1);
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (!form.fullName || !form.userName || !form.password || !form.role) {
//       alert("All fields required ❌"); return;
//     }
//     try {
//       const res = await axiosInstance.post("/register", form);
//       const data = res.data;
//       if (!data.success) { alert(data.message); return; }
//       dispatch(loginSuccess(data.user));
//       localStorage.setItem("authUser", JSON.stringify(data.user));
//       alert("Registration Success ✅");
//       navigate("/dashboard");
//     } catch (error) {
//       alert(error?.response?.data?.message || "Server Error ❌");
//     }
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

//         *{box-sizing:border-box;margin:0;padding:0;}

//         .rp-root{
//           min-height:100vh;width:100%;position:relative;
//           display:flex;align-items:center;justify-content:flex-end;
//           font-family:'DM Sans',sans-serif;overflow:hidden;
//         }
//         .rp-bg{
//           position:absolute;inset:0;
//           background-size:cover;background-position:center;
//           filter:brightness(0.6) saturate(1.05);
//           transition:transform 10s ease;
//         }
//         .rp-root:hover .rp-bg{transform:scale(1.025);}
//         .rp-overlay{
//           position:absolute;inset:0;
//           background:linear-gradient(
//             108deg,
//             rgba(4,12,30,0.04) 0%,
//             rgba(4,12,30,0.1) 30%,
//             rgba(4,12,30,0.68) 62%,
//             rgba(4,12,30,0.9) 100%
//           );
//         }
//         .rp-stripe{
//           position:absolute;top:0;left:0;right:0;height:4px;
//           background:#2563eb;
//           z-index:10;
//         }

//         /* HERO LEFT */
//         .rp-hero{
//           position:absolute;left:56px;bottom:56px;
//           z-index:5;max-width:460px;
//         }
//         .rp-badge{
//           display:inline-flex;align-items:center;gap:7px;
//           background:rgba(255,255,255,0.11);backdrop-filter:blur(10px);
//           border:1px solid rgba(255,255,255,0.2);border-radius:100px;
//           padding:5px 14px;margin-bottom:16px;
//         }
//         .rp-bdot{
//           width:6px;height:6px;border-radius:50%;
//           background:#4ade80;box-shadow:0 0 7px #4ade80;
//           animation:rblink 2s infinite;
//         }
//         @keyframes rblink{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.45;transform:scale(1.6);}}
//         .rp-badge span{font-size:11px;color:rgba(255,255,255,0.88);font-weight:500;letter-spacing:0.4px;}
//         .rp-title{
//           font-family:'Crimson Pro',serif;font-size:50px;font-weight:700;
//           color:#fff;line-height:1.1;text-shadow:0 2px 24px rgba(0,0,0,0.55);
//           margin-bottom:6px;
//         }
//         .rp-title em{color:#fbbf24;font-style:normal;}
//         .rp-sub{font-size:13px;color:rgba(255,255,255,0.58);margin-bottom:22px;letter-spacing:0.2px;}
//         .rp-stats{display:flex;gap:18px;}
//         .rp-stat{display:flex;flex-direction:column;gap:2px;}
//         .rp-snum{font-family:'Crimson Pro',serif;font-size:24px;font-weight:700;color:#fbbf24;line-height:1;}
//         .rp-slbl{font-size:9.5px;color:rgba(255,255,255,0.42);text-transform:uppercase;letter-spacing:0.9px;}
//         .rp-ssep{width:1px;background:rgba(255,255,255,0.14);align-self:stretch;}

//         /* FLOATING CARD */
//         .rp-card{
//           position:relative;z-index:10;
//           width:350px;margin-right:72px;
//           background:#fff;border-radius:18px;
//           padding:26px 28px 22px;
//           box-shadow:0 28px 64px rgba(0,0,0,0.48),0 0 0 1px rgba(255,255,255,0.06);
//         }
//         .rp-card-bar{
//           position:absolute;top:0;left:0;right:0;height:3px;
//           background:#2563eb;
//           border-radius:18px 18px 0 0;
//         }

//         /* logo */
//         .rp-logo-row{display:flex;align-items:center;gap:11px;margin-bottom:16px;}
//         .rp-logo-img{width:46px;height:46px;object-fit:contain;flex-shrink:0;}
//         .rp-logo-name{
//           font-family:'Tiro Devanagari Marathi',serif;
//           font-size:13.5px;font-weight:700;color:#1e3a5f;line-height:1.28;
//         }
//         .rp-hr{height:1px;background:#f0f1f3;margin-bottom:16px;}

//         /* form title */
//         .rp-ftitle{font-size:15px;font-weight:700;color:#111827;margin-bottom:14px;}

//         /* step indicator */
//         .rp-steps{display:flex;align-items:center;justify-content:center;gap:0;margin-bottom:16px;}
//         .rp-step-circle{
//           width:26px;height:26px;border-radius:50%;
//           display:flex;align-items:center;justify-content:center;
//           font-size:11px;font-weight:700;transition:all 0.2s;
//           flex-shrink:0;
//         }
//         .rp-step-active{background:#2563eb;color:#fff;}
//         .rp-step-done{background:#22c55e;color:#fff;}
//         .rp-step-inactive{background:#e5e7eb;color:#9ca3af;}
//         .rp-step-line{width:28px;height:2px;transition:background 0.2s;}
//         .rp-step-line-done{background:#22c55e;}
//         .rp-step-line-inactive{background:#e5e7eb;}

//         /* fields */
//         .rp-fld{margin-bottom:10px;}
//         .rp-flbl{
//           display:block;font-size:10px;font-weight:600;
//           color:#374151;letter-spacing:0.55px;text-transform:uppercase;margin-bottom:4px;
//         }
//         .rp-fwrap{position:relative;}
//         .rp-ficon{
//           position:absolute;left:10px;top:50%;transform:translateY(-50%);
//           font-size:12px;color:#adb5bd;pointer-events:none;
//         }
//         .rp-finput, .rp-fselect{
//           width:100%;padding:9px 10px 9px 32px;
//           border:1.5px solid #e5e7eb;border-radius:8px;
//           font-size:12.5px;color:#111827;background:#f8f9fb;
//           outline:none;transition:all 0.18s;
//           font-family:'DM Sans',sans-serif;
//           appearance:none;-webkit-appearance:none;
//         }
//         .rp-finput:focus, .rp-fselect:focus{
//           border-color:#3b82f6;background:#fff;box-shadow:0 0 0 3px rgba(59,130,246,0.1);
//         }
//         .rp-finput::placeholder{color:#c8cdd5;font-size:12px;}

//         /* buttons */
//         .rp-btn-row{display:flex;gap:8px;margin-top:14px;}
//         .rp-back-btn{
//           flex:1;padding:9.5px;
//           background:#fff;color:#374151;font-size:12.5px;font-weight:600;
//           border:1.5px solid #e5e7eb;border-radius:8px;cursor:pointer;
//           transition:all 0.18s;font-family:'DM Sans',sans-serif;
//         }
//         .rp-back-btn:hover{background:#f9fafb;border-color:#d1d5db;}
//         .rp-next-btn{
//           flex:1;padding:9.5px;
//           background:linear-gradient(135deg,#1e3fa3 0%,#3b82f6 100%);
//           color:#fff;font-size:12.5px;font-weight:600;letter-spacing:0.5px;
//           border:none;border-radius:8px;cursor:pointer;
//           transition:all 0.22s;position:relative;overflow:hidden;
//           box-shadow:0 4px 14px rgba(59,130,246,0.36);
//           font-family:'DM Sans',sans-serif;
//         }
//         .rp-next-btn:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(59,130,246,0.46);}
//         .rp-next-btn:active{transform:translateY(0);}
//         .rp-next-btn:disabled{background:#d1d5db;box-shadow:none;cursor:not-allowed;transform:none;}
//         .rp-submit-btn{
//           flex:1;padding:9.5px;
//           background:linear-gradient(135deg,#15803d 0%,#22c55e 100%);
//           color:#fff;font-size:12.5px;font-weight:600;letter-spacing:0.5px;
//           border:none;border-radius:8px;cursor:pointer;
//           transition:all 0.22s;
//           box-shadow:0 4px 14px rgba(34,197,94,0.36);
//           font-family:'DM Sans',sans-serif;
//         }
//         .rp-submit-btn:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(34,197,94,0.46);}
//         .rp-submit-btn:active{transform:translateY(0);}
//         .rp-submit-btn:disabled{background:#d1d5db;box-shadow:none;cursor:not-allowed;transform:none;}

//         .rp-signin{margin-top:12px;text-align:center;font-size:11.5px;color:#6b7280;}
//         .rp-signin span{color:#1e40af;font-weight:600;cursor:pointer;margin-left:3px;}
//         .rp-signin span:hover{text-decoration:underline;}

//         /* card footer */
//         .rp-cfooter{
//           margin-top:14px;padding-top:12px;border-top:1px solid #f3f4f6;
//           display:flex;align-items:center;justify-content:center;gap:5px;
//         }
//         .rp-cfdot{width:5px;height:5px;border-radius:50%;background:#4ade80;box-shadow:0 0 5px #4ade80;}
//         .rp-cfooter span{font-size:10px;color:#b5bcc8;letter-spacing:0.25px;}

//         @media(max-width:768px){
//           .rp-hero{display:none;}
//           .rp-card{margin-right:0;width:88%;max-width:360px;}
//           .rp-root{justify-content:center;}
//         }
//       `}</style>

//       <div className="rp-root">
//         <div className="rp-bg" style={{ backgroundImage: `url(${bgImage})` }} />
//         <div className="rp-overlay" />
//         <div className="rp-stripe" />

//         {/* Hero Left */}
//         <div className="rp-hero">
//           <div className="rp-badge">
//             <div className="rp-bdot" />
//             <span>Official Government Portal</span>
//           </div>
//           <h1 className="rp-title">
//             जन संवाद<br />
//             <em>Admin Panel</em>
//           </h1>
//           <p className="rp-sub">Vasai-Virar City Municipal Corporation</p>
//           <div className="rp-stats">
//             <div className="rp-stat">
//               <span className="rp-snum">8</span>
//               <span className="rp-slbl">Talukas</span>
//             </div>
//             <div className="rp-ssep" />
//             <div className="rp-stat">
//               <span className="rp-snum">2009</span>
//               <span className="rp-slbl">Established</span>
//             </div>
//             <div className="rp-ssep" />
//             <div className="rp-stat">
//               <span className="rp-snum">24/7</span>
//               <span className="rp-slbl">Service</span>
//             </div>
//           </div>
//         </div>

//         {/* Floating Card */}
//         <div className="rp-card">
//           <div className="rp-card-bar" />

//           {/* Logo */}
//           <div className="rp-logo-row">
//             <img src={logo} alt="VVCMC" className="rp-logo-img" />
//             <div className="rp-logo-name">वसई-विरार शहर<br />महानगरपालिका</div>
//           </div>

//           <div className="rp-hr" />

//           <p className="rp-ftitle">Create Account</p>

//           {/* Step Indicator */}
//           <div className="rp-steps">
//             {[1, 2, 3].map((num) => {
//               if (isGuardianMinisterOffice && num === 2) return null;
//               const displayNum = isGuardianMinisterOffice && num === 3 ? 2 : num;
//               const isDone = isGuardianMinisterOffice
//                 ? (step === 3 && num === 1)
//                 : step > num;
//               const isActive = isGuardianMinisterOffice
//                 ? (step === 1 && num === 1) || (step === 3 && num === 3)
//                 : step === num;
//               const showLine = (isGuardianMinisterOffice && num === 1) ||
//                                (!isGuardianMinisterOffice && num < 3);
//               const lineDone = (isGuardianMinisterOffice && step === 3 && num === 1) ||
//                                (!isGuardianMinisterOffice && step > num);
//               return (
//                 <React.Fragment key={num}>
//                   <div className={`rp-step-circle ${isDone ? "rp-step-done" : isActive ? "rp-step-active" : "rp-step-inactive"}`}>
//                     {isDone ? "✓" : displayNum}
//                   </div>
//                   {showLine && (
//                     <div className={`rp-step-line ${lineDone ? "rp-step-line-done" : "rp-step-line-inactive"}`} />
//                   )}
//                 </React.Fragment>
//               );
//             })}
//           </div>

//           <form onSubmit={handleRegister}>
//             {/* Step 1 */}
//             {step === 1 && (
//               <>
//                 <div className="rp-fld">
//                   <label className="rp-flbl">Full Name</label>
//                   <div className="rp-fwrap">
//                     <span className="rp-ficon">👤</span>
//                     <input className="rp-finput" type="text" name="fullName"
//                       placeholder="Enter your full name"
//                       value={form.fullName} onChange={handleChange} />
//                   </div>
//                 </div>
//                 <div className="rp-fld">
//                   <label className="rp-flbl">Username</label>
//                   <div className="rp-fwrap">
//                     <span className="rp-ficon">🪪</span>
//                     <input className="rp-finput" type="text" name="userName"
//                       placeholder="Enter your username"
//                       value={form.userName} onChange={handleChange} />
//                   </div>
//                 </div>
//                 <div className="rp-fld">
//                   <label className="rp-flbl">Office</label>
//                   <div className="rp-fwrap">
//                     <span className="rp-ficon">🏛️</span>
//                     <select className="rp-fselect" name="office"
//                       value={form.office} onChange={handleOfficeChange}>
//                       <option value="">Select Office</option>
//                       {Object.keys(departmentsData).map((office, i) => (
//                         <option key={i} value={office}>{office}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               </>
//             )}

//             {/* Step 2 - Department */}
//             {step === 2 && !isGuardianMinisterOffice && (
//               <div className="rp-fld">
//                 <label className="rp-flbl">Department</label>
//                 <div className="rp-fwrap">
//                   <span className="rp-ficon">🗂️</span>
//                   <select className="rp-fselect" name="departmentCategory"
//                     value={form.departmentCategory} onChange={handleChange}>
//                     <option value="">Select Department</option>
//                     {(departmentsData[form.office] || []).map((cat, i) => (
//                       <option key={i} value={cat}>{cat}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             )}

//             {/* Step 3 - Role & Password */}
//             {step === 3 && (
//               <>
//                 <div className="rp-fld">
//                   <label className="rp-flbl">Role</label>
//                   <div className="rp-fwrap">
//                     <span className="rp-ficon">⭐</span>
//                     <select className="rp-fselect" name="role"
//                       value={form.role} onChange={handleChange}>
//                       <option value="">Select Role</option>
//                       {(officeRoles[form.office] || []).map((role, i) => (
//                         <option key={i} value={role}>{role}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//                 <div className="rp-fld">
//                   <label className="rp-flbl">Password</label>
//                   <div className="rp-fwrap">
//                     <span className="rp-ficon">🔒</span>
//                     <input className="rp-finput" type="password" name="password"
//                       placeholder="Enter your password"
//                       value={form.password} onChange={handleChange} />
//                   </div>
//                 </div>
//               </>
//             )}

//             {/* Buttons */}
//             <div className="rp-btn-row">
//               {step > 1 && (
//                 <button type="button" onClick={prevStep} className="rp-back-btn">
//                   ← Back
//                 </button>
//               )}
//               {step < 3 ? (
//                 <button type="button" onClick={nextStep} className="rp-next-btn"
//                   disabled={
//                     (step === 1 && (!form.fullName || !form.userName || !form.office)) ||
//                     (step === 2 && !form.departmentCategory)
//                   }>
//                   Next →
//                 </button>
//               ) : (
//                 <button type="submit" className="rp-submit-btn"
//                   disabled={!form.password || !form.role}>
//                   CREATE ACCOUNT
//                 </button>
//               )}
//             </div>
//           </form>

//           <p className="rp-signin">
//             Already have an account?
//             <span onClick={() => navigate("/login")}>Sign in</span>
//           </p>

//           <div className="rp-cfooter">
//             <div className="rp-cfdot" />
//             <span>Secure Government Portal · All rights reserved</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// ===================
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/slices/authSlice";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../services/axiosInstance";
// import { departmentsData, officeRoles } from "../data/officeData";
// import bgImage from "../assets/vasaivirarmahangarpalika.jpg";
// import logo from "../assets/vvcmclogo.jpg";
// import ganeshji from "../assets/ganeshnaiklogo.jfif";

// export default function Registration() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);

//   const [form, setForm] = useState({
//     fullName: "",
//     userName: "",
//     mobileNumber: "",
//     password: "",
//     role: "",
//     office: "Mahanagarpalika Office", // hardcoded — hidden from UI
//     departmentCategory: "",
//   });

//   const roles = [
//   "Mayor",
//   "Deputy Mayor",
//   "Municipal Commissioner",
//   "Additional Commissioner",
//   "Deputy Commissioner",
//   "Assistant Commissioner",
//   "Senior Clerk",
//   "Junior Clerk",
//   "Other"
// ];

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   // office is fixed, no handleOfficeChange needed
//   // isGuardianMinisterOffice always false now
//   const isGuardianMinisterOffice = false;

//   const nextStep = () => {
//     if (step === 1 && form.fullName && form.userName && form.mobileNumber) {
//       setStep(2);
//     } else if (step === 2 && form.departmentCategory) {
//       setStep(3);
//     }
//   };

//   const prevStep = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (!form.fullName || !form.userName || !form.mobileNumber || !form.password || !form.role) {
//       alert("All fields required ❌"); return;
//     }
//     try {
//       const res = await axiosInstance.post("/register", form);
//       const data = res.data;
//       if (!data.success) { alert(data.message); return; }
//       dispatch(loginSuccess(data.user));
//       localStorage.setItem("authUser", JSON.stringify(data.user));
//       alert("Registration Success ✅");
//       navigate("/dashboard");
//     } catch (error) {
//       alert(error?.response?.data?.message || "Server Error ❌");
//     }
//   };
  

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

//         *{box-sizing:border-box;margin:0;padding:0;}

//         .rp-root{
//           min-height:100vh;width:100%;position:relative;
//           display:flex;align-items:center;justify-content:flex-end;
//           font-family:'DM Sans',sans-serif;overflow:hidden;
//         }
//         .rp-bg{
//           position:absolute;inset:0;
//           background-size:cover;background-position:center;
//           filter:brightness(0.6) saturate(1.05);
//           transition:transform 10s ease;
//         }
//         .rp-root:hover .rp-bg{transform:scale(1.025);}
//         .rp-overlay{
//           position:absolute;inset:0;
//           background:linear-gradient(
//             108deg,
//             rgba(4,12,30,0.04) 0%,
//             rgba(4,12,30,0.1) 30%,
//             rgba(4,12,30,0.68) 62%,
//             rgba(4,12,30,0.9) 100%
//           );
//         }
//         .rp-stripe{
//           position:absolute;top:0;left:0;right:0;height:4px;
//           background:#2563eb;
//           z-index:10;
//         }

//         /* HERO LEFT */
//         .rp-hero{
//           position:absolute;left:56px;bottom:56px;
//           z-index:5;max-width:460px;
//         }
//         .rp-badge{
//           display:inline-flex;align-items:center;gap:7px;
//           background:rgba(255,255,255,0.11);backdrop-filter:blur(10px);
//           border:1px solid rgba(255,255,255,0.2);border-radius:100px;
//           padding:5px 14px;margin-bottom:16px;
//         }
//         .rp-bdot{
//           width:6px;height:6px;border-radius:50%;
//           background:#4ade80;box-shadow:0 0 7px #4ade80;
//           animation:rblink 2s infinite;
//         }
//         @keyframes rblink{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.45;transform:scale(1.6);}}
//         .rp-badge span{font-size:11px;color:rgba(255,255,255,0.88);font-weight:500;letter-spacing:0.4px;}
//         .rp-title{
//           font-family:'Crimson Pro',serif;font-size:50px;font-weight:700;
//           color:#fff;line-height:1.1;text-shadow:0 2px 24px rgba(0,0,0,0.55);
//           margin-bottom:6px;
//         }
//         .rp-title em{color:#fbbf24;font-style:normal;}
//         .rp-sub{font-size:13px;color:rgba(255,255,255,0.58);margin-bottom:22px;letter-spacing:0.2px;}
//         .rp-stats{display:flex;gap:18px;}
//         .rp-stat{display:flex;flex-direction:column;gap:2px;}
//         .rp-snum{font-family:'Crimson Pro',serif;font-size:24px;font-weight:700;color:#fbbf24;line-height:1;}
//         .rp-slbl{font-size:9.5px;color:rgba(255,255,255,0.42);text-transform:uppercase;letter-spacing:0.9px;}
//         .rp-ssep{width:1px;background:rgba(255,255,255,0.14);align-self:stretch;}

//         /* FLOATING CARD */
//         .rp-card{
//           position:relative;z-index:10;
//           width:350px;margin-right:72px;
//           background:#fff;border-radius:18px;
//           padding:26px 28px 22px;
//           box-shadow:0 28px 64px rgba(0,0,0,0.48),0 0 0 1px rgba(255,255,255,0.06);
//         }

//         /* logo */
//         .rp-logo-row{display:flex;align-items:center;gap:11px;margin-bottom:16px;}
//         .rp-logo-img{width:46px;height:46px;object-fit:contain;flex-shrink:0;}
//         .rp-logo-name{
//           font-family:'Tiro Devanagari Marathi',serif;
//           font-size:13.5px;font-weight:700;color:#1e3a5f;line-height:1.28;
//         }
//         .rp-hr{height:1px;background:#f0f1f3;margin-bottom:16px;}

//         /* form title */
//         .rp-ftitle{font-size:15px;font-weight:700;color:#111827;margin-bottom:14px;}

//         /* step indicator */
//         .rp-steps{display:flex;align-items:center;justify-content:center;gap:0;margin-bottom:16px;}
//         .rp-step-circle{
//           width:26px;height:26px;border-radius:50%;
//           display:flex;align-items:center;justify-content:center;
//           font-size:11px;font-weight:700;transition:all 0.2s;
//           flex-shrink:0;
//         }
//         .rp-step-active{background:#2563eb;color:#fff;}
//         .rp-step-done{background:#22c55e;color:#fff;}
//         .rp-step-inactive{background:#e5e7eb;color:#9ca3af;}
//         .rp-step-line{width:28px;height:2px;transition:background 0.2s;}
//         .rp-step-line-done{background:#22c55e;}
//         .rp-step-line-inactive{background:#e5e7eb;}

//         /* fields */
//         .rp-fld{margin-bottom:10px;}
//         .rp-flbl{
//           display:block;font-size:10px;font-weight:600;
//           color:#374151;letter-spacing:0.55px;text-transform:uppercase;margin-bottom:4px;
//         }
//         .rp-fwrap{position:relative;}
//         .rp-ficon{
//           position:absolute;left:10px;top:50%;transform:translateY(-50%);
//           font-size:12px;color:#adb5bd;pointer-events:none;
//         }
//         .rp-finput, .rp-fselect{
//           width:100%;padding:9px 10px 9px 32px;
//           border:1.5px solid #e5e7eb;border-radius:8px;
//           font-size:12.5px;color:#111827;background:#f8f9fb;
//           outline:none;transition:all 0.18s;
//           font-family:'DM Sans',sans-serif;
//           appearance:none;-webkit-appearance:none;
//         }
//         .rp-finput:focus, .rp-fselect:focus{
//           border-color:#3b82f6;background:#fff;box-shadow:0 0 0 3px rgba(59,130,246,0.1);
//         }
//         .rp-finput::placeholder{color:#c8cdd5;font-size:12px;}

//         /* buttons */
//         .rp-btn-row{display:flex;gap:8px;margin-top:14px;}
//         .rp-back-btn{
//           flex:1;padding:9.5px;
//           background:#fff;color:#374151;font-size:12.5px;font-weight:600;
//           border:1.5px solid #e5e7eb;border-radius:8px;cursor:pointer;
//           transition:all 0.18s;font-family:'DM Sans',sans-serif;
//         }
//         .rp-back-btn:hover{background:#f9fafb;border-color:#d1d5db;}
//         .rp-next-btn{
//           flex:1;padding:9.5px;
//           background:linear-gradient(135deg,#1e3fa3 0%,#3b82f6 100%);
//           color:#fff;font-size:12.5px;font-weight:600;letter-spacing:0.5px;
//           border:none;border-radius:8px;cursor:pointer;
//           transition:all 0.22s;position:relative;overflow:hidden;
//           box-shadow:0 4px 14px rgba(59,130,246,0.36);
//           font-family:'DM Sans',sans-serif;
//         }
//         .rp-next-btn:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(59,130,246,0.46);}
//         .rp-next-btn:active{transform:translateY(0);}
//         .rp-next-btn:disabled{background:#d1d5db;box-shadow:none;cursor:not-allowed;transform:none;}
//         .rp-submit-btn{
//           flex:1;padding:9.5px;
//           background:linear-gradient(135deg,#15803d 0%,#22c55e 100%);
//           color:#fff;font-size:12.5px;font-weight:600;letter-spacing:0.5px;
//           border:none;border-radius:8px;cursor:pointer;
//           transition:all 0.22s;
//           box-shadow:0 4px 14px rgba(34,197,94,0.36);
//           font-family:'DM Sans',sans-serif;
//         }
//         .rp-submit-btn:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(34,197,94,0.46);}
//         .rp-submit-btn:active{transform:translateY(0);}
//         .rp-submit-btn:disabled{background:#d1d5db;box-shadow:none;cursor:not-allowed;transform:none;}

//         .rp-signin{margin-top:12px;text-align:center;font-size:11.5px;color:#6b7280;}
//         .rp-signin span{color:#1e40af;font-weight:600;cursor:pointer;margin-left:3px;}
//         .rp-signin span:hover{text-decoration:underline;}

//         /* card footer */
//         .rp-cfooter{
//           margin-top:14px;padding-top:12px;border-top:1px solid #f3f4f6;
//           display:flex;align-items:center;justify-content:center;gap:5px;
//         }
//         .rp-cfdot{width:5px;height:5px;border-radius:50%;background:#4ade80;box-shadow:0 0 5px #4ade80;}
//         .rp-cfooter span{font-size:10px;color:#b5bcc8;letter-spacing:0.25px;}

//         @media(max-width:768px){
//           .rp-hero{display:none;}
//           .rp-card{margin-right:0;width:88%;max-width:360px;}
//           .rp-root{justify-content:center;}
//         }
//       `}</style>

//       <div className="rp-root">
//         <div className="rp-bg" style={{ backgroundImage: `url(${bgImage})` }} />
//         <div className="rp-overlay" />
//         <div className="rp-stripe" />

//         {/* Hero Left */}
//         <div className="rp-hero">
//           <div className="rp-badge">
//             <div className="rp-bdot" />
//             <span>Official Government Portal</span>
//           </div>
//           <h1 className="rp-title">
//             जन संवाद<br />
//             <em>Admin Panel</em>
//           </h1>
//           <p className="rp-sub">Vasai-Virar City Municipal Corporation</p>
//           <div className="rp-stats">
//             <div className="rp-stat">
//               <span className="rp-snum">8</span>
//               <span className="rp-slbl">Talukas</span>
//             </div>
//             <div className="rp-ssep" />
//             <div className="rp-stat">
//               <span className="rp-snum">2009</span>
//               <span className="rp-slbl">Established</span>
//             </div>
//             <div className="rp-ssep" />
//             <div className="rp-stat">
//               <span className="rp-snum">24/7</span>
//               <span className="rp-slbl">Service</span>
//             </div>
//           </div>
//         </div>

//         {/* Floating Card */}
//         <div className="rp-card">
//           <div className="rp-card-bar" />

//           {/* Logo */}
//           <div className="rp-logo-row">
//             <img src={logo} alt="VVCMC" className="rp-logo-img" />
//             <div className="rp-logo-name">वसई-विरार शहर<br />महानगरपालिका</div>
//           </div>

//           <div className="rp-hr" />

//           <p className="rp-ftitle">Create Account</p>

//           {/* Step Indicator — always 3 steps (office fixed, no skip) */}
//           <div className="rp-steps">
//             {[1, 2, 3].map((num) => {
//               const isDone = step > num;
//               const isActive = step === num;
//               const showLine = num < 3;
//               const lineDone = step > num;
//               return (
//                 <React.Fragment key={num}>
//                   <div className={`rp-step-circle ${isDone ? "rp-step-done" : isActive ? "rp-step-active" : "rp-step-inactive"}`}>
//                     {isDone ? "✓" : num}
//                   </div>
//                   {showLine && (
//                     <div className={`rp-step-line ${lineDone ? "rp-step-line-done" : "rp-step-line-inactive"}`} />
//                   )}
//                 </React.Fragment>
//               );
//             })}
//           </div>

//           <form onSubmit={handleRegister}>

//             {/* Step 1 — Basic Info */}
//             {step === 1 && (
//               <>
//                 <div className="rp-fld">
//                   <label className="rp-flbl">Full Name</label>
//                   <div className="rp-fwrap">
//                     <span className="rp-ficon">👤</span>
//                     <input className="rp-finput" type="text" name="fullName"
//                       placeholder="Enter your full name"
//                       value={form.fullName} onChange={handleChange} />
//                   </div>
//                 </div>
//                 <div className="rp-fld">
//                   <label className="rp-flbl">Username</label>
//                   <div className="rp-fwrap">
//                     <span className="rp-ficon">🪪</span>
//                     <input className="rp-finput" type="text" name="userName"
//                       placeholder="Enter your username"
//                       value={form.userName} onChange={handleChange} />
//                   </div>
//                 </div>
//                 <div className="rp-fld">
//                   <label className="rp-flbl">Mobile Number</label>
//                   <div className="rp-fwrap">
//                     <span className="rp-ficon">📱</span>
//                     <input className="rp-finput" type="tel" name="mobileNumber"
//                       placeholder="Enter your mobile number"
//                       maxLength={10}
//                       value={form.mobileNumber} onChange={handleChange} />
//                   </div>
//                 </div>
//               </>
//             )}

//             {/* Step 2 — Department */}
//             {step === 2 && (
//               <div className="rp-fld">
//                 <label className="rp-flbl">Department</label>
//                 <div className="rp-fwrap">
//                   <span className="rp-ficon">🗂️</span>
//                   <select className="rp-fselect" name="departmentCategory"
//                     value={form.departmentCategory} onChange={handleChange}>
//                     <option value="">Select Department</option>
//                     {(departmentsData[form.office] || []).map((cat, i) => (
//                       <option key={i} value={cat}>{cat}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             )}

//             {/* Step 3 — Role & Password */}
//             {step === 3 && (
//               <>
//                 {/* <div className="rp-fld">
//                   <label className="rp-flbl">Role</label>
//                   <div className="rp-fwrap">
//                     <span className="rp-ficon">⭐</span>
//                     <select className="rp-fselect" name="role"
//                       value={form.role} onChange={handleChange}>
//                       <option value="">Select Role</option>
//                       {(officeRoles[form.office] || []).map((role, i) => (
//                         <option key={i} value={role}>{role}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div> */}
//                 <div className="rp-fld">
//   <label className="rp-flbl">Role</label>

//   <div className="rp-fwrap">
//     <span className="rp-ficon">⭐</span>

//     <select
//       className="rp-fselect"
//       name="role"
//       value={form.role}
//       onChange={handleChange}
//     >
//       <option value="">Select Role</option>

//       {roles.map((role, i) => (
//         <option key={i} value={role}>
//           {role}
//         </option>
//       ))}
//     </select>
//   </div>

//   {/* Other textbox */}
//   {form.role === "Other" && (
//     <input
//       type="text"
//       name="otherRole"
//       placeholder="Enter Role"
//       value={form.otherRole || ""}
//       onChange={handleChange}
//       className="rp-finput"
//       style={{ marginTop: "8px" }}
//     />
//   )}
// </div>
//                 <div className="rp-fld">
//                   <label className="rp-flbl">Password</label>
//                   <div className="rp-fwrap">
//                     <span className="rp-ficon">🔒</span>
//                     <input className="rp-finput" type="password" name="password"
//                       placeholder="Enter your password"
//                       value={form.password} onChange={handleChange} />
//                   </div>
//                 </div>
//               </>
//             )}

//             {/* Buttons */}
//             <div className="rp-btn-row">
//               {step > 1 && (
//                 <button type="button" onClick={prevStep} className="rp-back-btn">
//                   ← Back
//                 </button>
//               )}
//               {step < 3 ? (
//                 <button type="button" onClick={nextStep} className="rp-next-btn"
//                   disabled={
//                     (step === 1 && (!form.fullName || !form.userName || !form.mobileNumber)) ||
//                     (step === 2 && !form.departmentCategory)
//                   }>
//                   Next →
//                 </button>
//               ) : (
//                 <button type="submit" className="rp-submit-btn"
//                   disabled={!form.password || !form.role}>
//                   CREATE ACCOUNT
//                 </button>
//               )}
//             </div>
//           </form>

//           <p className="rp-signin">
//             Already have an account?
//             <span onClick={() => navigate("/login")}>Sign in</span>
//           </p>

//           <div className="rp-cfooter">
//             <div className="rp-cfdot" />
//             <span>Secure Government Portal · All rights reserved</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// ===========================

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/slices/authSlice";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../services/axiosInstance";
// import bgImage from "../assets/vasaivirarmahangarpalika.jpg";
// import logo from "../assets/vvcmclogo.jpg";

// export default function Registration() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     fullName: "",
//     userName: "",
//     mobileNumber: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (!form.fullName || !form.userName || !form.mobileNumber || !form.email || !form.password) {
//       alert("All fields required ❌"); return;
//     }
//     try {
//       const res = await axiosInstance.post("/register", form);
//       const data = res.data;
//       if (!data.success) { alert(data.message); return; }
//       dispatch(loginSuccess(data.user));
//       localStorage.setItem("authUser", JSON.stringify(data.user));
//       alert("Registration Success ✅");
//       navigate("/dashboard");
//     } catch (error) {
//       alert(error?.response?.data?.message || "Server Error ❌");
//     }
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
//         *{box-sizing:border-box;margin:0;padding:0;}
//         .rp-root{
//           min-height:100vh;width:100%;position:relative;
//           display:flex;align-items:center;justify-content:flex-end;
//           font-family:'DM Sans',sans-serif;overflow:hidden;
//         }
//         .rp-bg{
//           position:absolute;inset:0;
//           background-size:cover;background-position:center;
//           filter:brightness(0.6) saturate(1.05);
//           transition:transform 10s ease;
//         }
//         .rp-root:hover .rp-bg{transform:scale(1.025);}
//         .rp-overlay{
//           position:absolute;inset:0;
//           background:linear-gradient(
//             108deg,
//             rgba(4,12,30,0.04) 0%,
//             rgba(4,12,30,0.1) 30%,
//             rgba(4,12,30,0.68) 62%,
//             rgba(4,12,30,0.9) 100%
//           );
//         }
//         .rp-hero{
//           position:absolute;left:56px;bottom:56px;
//           z-index:5;max-width:460px;
//         }
//         .rp-badge{
//           display:inline-flex;align-items:center;gap:7px;
//           background:rgba(255,255,255,0.11);backdrop-filter:blur(10px);
//           border:1px solid rgba(255,255,255,0.2);border-radius:100px;
//           padding:5px 14px;margin-bottom:16px;
//         }
//         .rp-bdot{
//           width:6px;height:6px;border-radius:50%;
//           background:#4ade80;box-shadow:0 0 7px #4ade80;
//           animation:rblink 2s infinite;
//         }
//         @keyframes rblink{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.45;transform:scale(1.6);}}
//         .rp-badge span{font-size:11px;color:rgba(255,255,255,0.88);font-weight:500;letter-spacing:0.4px;}
//         .rp-title{
//           font-family:'Crimson Pro',serif;font-size:50px;font-weight:700;
//           color:#fff;line-height:1.1;text-shadow:0 2px 24px rgba(0,0,0,0.55);
//           margin-bottom:6px;
//         }
//         .rp-title em{color:#fbbf24;font-style:normal;}
//         .rp-sub{font-size:13px;color:rgba(255,255,255,0.58);margin-bottom:22px;letter-spacing:0.2px;}
//         .rp-stats{display:flex;gap:18px;}
//         .rp-stat{display:flex;flex-direction:column;gap:2px;}
//         .rp-snum{font-family:'Crimson Pro',serif;font-size:24px;font-weight:700;color:#fbbf24;line-height:1;}
//         .rp-slbl{font-size:9.5px;color:rgba(255,255,255,0.42);text-transform:uppercase;letter-spacing:0.9px;}
//         .rp-ssep{width:1px;background:rgba(255,255,255,0.14);align-self:stretch;}

//         .rp-card{
//           position:relative;z-index:10;
//           width:350px;margin-right:72px;
//           background:#fff;border-radius:18px;
//           padding:26px 28px 22px;
//           box-shadow:0 28px 64px rgba(0,0,0,0.48),0 0 0 1px rgba(255,255,255,0.06);
//         }

//         .rp-logo-row{display:flex;align-items:center;gap:11px;margin-bottom:16px;}
//         .rp-logo-img{width:46px;height:46px;object-fit:contain;flex-shrink:0;}
//         .rp-logo-name{
//           font-family:'Tiro Devanagari Marathi',serif;
//           font-size:13.5px;font-weight:700;color:#1e3a5f;line-height:1.3;
//           white-space:nowrap;
//         }
//         .rp-hr{height:1px;background:#f0f1f3;margin-bottom:16px;}
//         .rp-ftitle{font-size:15px;font-weight:700;color:#111827;margin-bottom:14px;}

//         .rp-fld{margin-bottom:10px;}
//         .rp-flbl{
//           display:block;font-size:10px;font-weight:600;
//           color:#374151;letter-spacing:0.55px;text-transform:uppercase;margin-bottom:4px;
//         }
//         .rp-fwrap{position:relative;}
//         .rp-ficon{
//           position:absolute;left:10px;top:50%;transform:translateY(-50%);
//           font-size:12px;color:#adb5bd;pointer-events:none;
//         }
//         .rp-finput{
//           width:100%;padding:9px 10px 9px 32px;
//           border:1.5px solid #e5e7eb;border-radius:8px;
//           font-size:12.5px;color:#111827;background:#f8f9fb;
//           outline:none;transition:all 0.18s;
//           font-family:'DM Sans',sans-serif;
//         }
//         .rp-finput:focus{
//           border-color:#3b82f6;background:#fff;box-shadow:0 0 0 3px rgba(59,130,246,0.1);
//         }
//         .rp-finput::placeholder{color:#c8cdd5;font-size:12px;}

//         .rp-submit-btn{
//           width:100%;margin-top:14px;padding:10px;
//           background:linear-gradient(135deg,#15803d 0%,#22c55e 100%);
//           color:#fff;font-size:13px;font-weight:600;letter-spacing:0.5px;
//           border:none;border-radius:8px;cursor:pointer;
//           transition:all 0.22s;
//           box-shadow:0 4px 14px rgba(34,197,94,0.36);
//           font-family:'DM Sans',sans-serif;
//         }
//         .rp-submit-btn:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(34,197,94,0.46);}
//         .rp-submit-btn:active{transform:translateY(0);}
//         .rp-submit-btn:disabled{background:#d1d5db;box-shadow:none;cursor:not-allowed;transform:none;}

//         .rp-signin{margin-top:12px;text-align:center;font-size:11.5px;color:#6b7280;}
//         .rp-signin span{color:#1e40af;font-weight:600;cursor:pointer;margin-left:3px;}
//         .rp-signin span:hover{text-decoration:underline;}

//         .rp-cfooter{
//           margin-top:14px;padding-top:12px;border-top:1px solid #f3f4f6;
//           display:flex;align-items:center;justify-content:center;gap:5px;
//         }
//         .rp-cfdot{width:5px;height:5px;border-radius:50%;background:#4ade80;box-shadow:0 0 5px #4ade80;}
//         .rp-cfooter span{font-size:10px;color:#b5bcc8;letter-spacing:0.25px;}

//         @media(max-width:768px){
//           .rp-hero{display:none;}
//           .rp-card{margin-right:0;width:88%;max-width:360px;}
//           .rp-root{justify-content:center;}
//         }
//       `}</style>

//       <div className="rp-root">
//         <div className="rp-bg" style={{ backgroundImage: `url(${bgImage})` }} />
//         <div className="rp-overlay" />

//         {/* Hero Left */}
//         <div className="rp-hero">
//           <div className="rp-badge">
//             <div className="rp-bdot" />
//             <span>Official Government Portal</span>
//           </div>
//           <h1 className="rp-title">
//             जन संवाद<br />
//             <em>Admin Panel</em>
//           </h1>
//           <p className="rp-sub">Vasai-Virar City Municipal Corporation</p>
//           <div className="rp-stats">
//             <div className="rp-stat">
//               <span className="rp-snum">8</span>
//               <span className="rp-slbl">Talukas</span>
//             </div>
//             <div className="rp-ssep" />
//             <div className="rp-stat">
//               <span className="rp-snum">2009</span>
//               <span className="rp-slbl">Established</span>
//             </div>
//             <div className="rp-ssep" />
//             <div className="rp-stat">
//               <span className="rp-snum">24/7</span>
//               <span className="rp-slbl">Service</span>
//             </div>
//           </div>
//         </div>

//         {/* Card */}
//         <div className="rp-card">
//           {/* Logo */}
//           <div className="rp-logo-row">
//             <img src={logo} alt="VVCMC" className="rp-logo-img" />
//             <div className="rp-logo-name">वसई-विरार शहर महानगरपालिका</div>
//           </div>

//           <div className="rp-hr" />
//           <p className="rp-ftitle">Create Account</p>

//           <form onSubmit={handleRegister}>
//             <div className="rp-fld">
//               <label className="rp-flbl">Full Name</label>
//               <div className="rp-fwrap">
//                 <span className="rp-ficon">👤</span>
//                 <input className="rp-finput" type="text" name="fullName"
//                   placeholder="Enter your full name"
//                   value={form.fullName} onChange={handleChange} />
//               </div>
//             </div>

//             <div className="rp-fld">
//               <label className="rp-flbl">Username</label>
//               <div className="rp-fwrap">
//                 <span className="rp-ficon">🪪</span>
//                 <input className="rp-finput" type="text" name="userName"
//                   placeholder="Enter your username"
//                   value={form.userName} onChange={handleChange} />
//               </div>
//             </div>

//             <div className="rp-fld">
//               <label className="rp-flbl">Mobile Number</label>
//               <div className="rp-fwrap">
//                 <span className="rp-ficon">📱</span>
//                 <input className="rp-finput" type="tel" name="mobileNumber"
//                   placeholder="Enter your mobile number"
//                   maxLength={10}
//                   value={form.mobileNumber} onChange={handleChange} />
//               </div>
//             </div>

//             <div className="rp-fld">
//               <label className="rp-flbl">Email</label>
//               <div className="rp-fwrap">
//                 <span className="rp-ficon">✉️</span>
//                 <input className="rp-finput" type="email" name="email"
//                   placeholder="Enter your email"
//                   value={form.email} onChange={handleChange} />
//               </div>
//             </div>

//                {/* <div className="rp-fld">
//               <label className="rp-flbl"></label>
//               <div className="rp-fwrap">
//                 <span className="rp-ficon">📱</span>
//                 <input className="rp-finput" type="tel" name="pincode"
//                   placeholder="Enter your pincode"
//                   maxLength={10}
//                   value={form.pincode} onChange={handleChange} />
//               </div>
//             </div> */}

//              {/* <div className="rp-fld">
//               <label className="rp-flbl"></label>
//               <div className="rp-fwrap">
//                 <span className="rp-ficon">📱</span>
//                 <input className="rp-finput" type="tel" name="address"
//                   placeholder="Enter your address"
//                   maxLength={10}
//                   value={form.address} onChange={handleChange} />
//               </div>
//             </div> */}


            

//             <div className="rp-fld">
//               <label className="rp-flbl">Password</label>
//               <div className="rp-fwrap">
//                 <span className="rp-ficon">🔒</span>
//                 <input className="rp-finput" type="password" name="password"
//                   placeholder="Enter your password"
//                   value={form.password} onChange={handleChange} />
//               </div>
//             </div>

//             <button type="submit" className="rp-submit-btn"
//               disabled={!form.fullName || !form.userName || !form.mobileNumber || !form.email || !form.password}>
//               CREATE ACCOUNT
//             </button>
//           </form>

//           <p className="rp-signin">
//             Already have an account?
//             <span onClick={() => navigate("/login")}>Sign in</span>
//           </p>

//           <div className="rp-cfooter">
//             <div className="rp-cfdot" />
//             <span>Secure Government Portal · All rights reserved</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// ==================================

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/slices/authSlice";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/vvcmclogo.jpg";
// import mayorPhoto from "../assets/ajivir5.jpeg";
// import bgImage from "../assets/bg1.jpeg";
// import axiosInstance from "../services/axiosInstance";
// import Loader from "../components/common/Loader";
// import { toast } from "react-toastify";

// export default function Registration() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     fullName: "",
//     userName: "",
//     mobileNumber: "",
//     email: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [showPass, setShowPass] = useState(false);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (!form.fullName || !form.userName || !form.mobileNumber || !form.email || !form.password) {
//       toast.error("All fields required ❌"); return;
//     }
//     try {
//       setLoading(true);
//       const res = await axiosInstance.post("/register", form);
//       const data = res.data;
//       if (!data.success) { toast.error(data.message); return; }
//       dispatch(loginSuccess(data.user));
//       localStorage.setItem("authUser", JSON.stringify(data.user));
//       toast.success("Registration Success ✅");
//       navigate("/dashboard");
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Server Error ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const isFormValid = form.fullName && form.userName && form.mobileNumber && form.email && form.password;

//   return (
//     <>
//       {loading && <Loader />}

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Playfair+Display:wght@500;700;900&family=Outfit:wght@300;400;500;600;700&display=swap');

//         :root {
//           --teal:       #4CABC1;
//           --teal-dark:  #49ACC3;
//           --gold:       #CA9D28;
//           --gold-light: #CE9A54;
//           --cream:      #F5E7C2;
//           --green:      #66A962;
//           --deep:       #187480;
//         }

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         .rp-root {
//           min-height: 100vh;
//           width: 100%;
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: flex-end;
//           padding-right: 60px;
//           font-family: 'Outfit', sans-serif;
//           overflow: hidden;
//         }

//         .rp-bg {
//           position: absolute;
//           inset: 0;
//           background-size: cover;
//           background-position: left center;
//           filter: brightness(0.75) saturate(1.15);
//           transition: transform 14s ease;
//         }
//         .rp-root:hover .rp-bg { transform: scale(1.02); }

//         .rp-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             125deg,
//             rgba(24,116,128,0.45) 0%,
//             rgba(73,172,195,0.38) 30%,
//             rgba(24,116,128,0.60) 60%,
//             rgba(12,70,80,0.82) 100%
//           );
//         }

//         /* Multi-color top stripe */
//         .rp-stripe {
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 4px;
//           background: linear-gradient(90deg,
//             var(--gold) 0%,
//             var(--gold-light) 22%,
//             var(--teal) 45%,
//             var(--teal-dark) 65%,
//             var(--green) 85%,
//             var(--cream) 100%
//           );
//           z-index: 20;
//         }

//         /* ── WRAPPER ── */
//         .rp-wrapper {
//           position: relative;
//           z-index: 10;
//           display: flex;
//           align-items: stretch;
//           border-radius: 28px;
//           overflow: hidden;
//           box-shadow:
//             0 32px 80px rgba(0,0,0,0.52),
//             0 0 0 1px rgba(202,157,40,0.20),
//             inset 0 1px 0 rgba(245,231,194,0.07);
//           animation: wrapperIn .5s cubic-bezier(.22,.9,.36,1) both;
//         }
//         @keyframes wrapperIn {
//           from { opacity:0; transform:translateY(26px) scale(0.98); }
//           to   { opacity:1; transform:translateY(0) scale(1); }
//         }

//         /* ── LEFT CARD ── */
//         .rp-card {
//           width: 410px;
//           background: linear-gradient(
//             160deg,
//             rgba(12,68,80,0.80) 0%,
//             rgba(24,116,128,0.62) 50%,
//             rgba(12,68,80,0.85) 100%
//           );
//           backdrop-filter: blur(38px) saturate(2);
//           -webkit-backdrop-filter: blur(38px) saturate(2);
//           border: 1px solid rgba(76,171,193,0.20);
//           border-right: 1px solid rgba(202,157,40,0.18);
//           padding: 28px 32px 24px;
//           display: flex;
//           flex-direction: column;
//           position: relative;
//         }
//         .rp-card::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
//         }

//         /* ── Logo row ── */
//         .rp-logo-row {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           margin-bottom: 18px;
//           padding-bottom: 16px;
//           border-bottom: 1px solid rgba(202,157,40,0.22);
//           position: relative;
//         }
//         .rp-logo-row::after {
//           content: '';
//           position: absolute;
//           bottom: -1px; left: 0;
//           width: 55px; height: 2px;
//           background: linear-gradient(90deg, var(--gold), var(--gold-light));
//           border-radius: 2px;
//         }
//         .rp-logo-img {
//           width: 54px; height: 54px;
//           object-fit: contain;
//           border-radius: 50%;
//           border: 2px solid var(--gold-light);
//           box-shadow:
//             0 0 0 3px rgba(202,157,40,0.15),
//             0 4px 20px rgba(0,0,0,0.32);
//           flex-shrink: 0;
//         }
//         .rp-logo-texts { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
//         .rp-logo-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 15px;
//           font-weight: 700;
//           color: var(--gold-light);
//           line-height: 1.3;
//           text-shadow: 0 1px 10px rgba(0,0,0,0.4);
//         }
//         .rp-logo-sub {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 13px;
//           font-weight: 500;
//           color: rgba(245,231,194,0.72);
//           letter-spacing: 0.4px;
//         }

//         /* ── FORM TITLE ── */
//         .rp-ftitle {
//           font-size: 21px;
//           font-weight: 700;
//           color: var(--cream);
//           margin-bottom: 16px;
//           font-family: 'Outfit', sans-serif;
//           letter-spacing: -0.3px;
//           text-shadow: 0 1px 12px rgba(0,0,0,0.3);
//         }

//         .rp-fld { margin-bottom: 12px; }

//         .rp-flbl {
//           display: block;
//           font-size: 11.5px;
//           font-weight: 700;
//           color: rgba(245,231,194,0.72);
//           margin-bottom: 6px;
//           font-family: 'Outfit', sans-serif;
//           letter-spacing: 0.8px;
//           text-transform: uppercase;
//         }

//         .rp-fwrap { position: relative; }

//         .rp-finput {
//           width: 100%;
//           padding: 11px 16px;
//           border: 1px solid rgba(76,171,193,0.20);
//           border-radius: 12px;
//           font-size: 13.5px;
//           color: #fff;
//           background: rgba(12,68,80,0.58);
//           backdrop-filter: blur(10px);
//           -webkit-backdrop-filter: blur(10px);
//           outline: none;
//           transition: all 0.2s;
//           font-family: 'Outfit', sans-serif;
//           box-shadow: inset 0 1px 0 rgba(245,231,194,0.06), 0 2px 8px rgba(0,0,0,0.14);
//         }
//         .rp-finput:focus {
//           background: rgba(24,116,128,0.62);
//           border-color: var(--teal);
//           box-shadow: 0 0 0 3px rgba(76,171,193,0.18), inset 0 1px 0 rgba(245,231,194,0.08);
//         }
//         .rp-finput::placeholder { color: rgba(245,231,194,0.28); font-size: 12.5px; }
//         .rp-finput.has-icon { padding-left: 42px; }

//         .rp-ficon {
//           position: absolute;
//           left: 14px; top: 50%;
//           transform: translateY(-50%);
//           font-size: 15px;
//           pointer-events: none;
//           opacity: 0.48;
//         }
//         .rp-pbtn {
//           position: absolute;
//           right: 13px; top: 50%;
//           transform: translateY(-50%);
//           background: none; border: none;
//           cursor: pointer; font-size: 15px;
//           color: rgba(245,231,194,0.42);
//           padding: 0; display: flex; align-items: center;
//           transition: color .2s;
//         }
//         .rp-pbtn:hover { color: var(--cream); }

//         /* ── SUBMIT BUTTON ── */
//         .rp-sbtn {
//           width: 100%;
//           padding: 13px;
//           margin-top: 8px;
//           background: linear-gradient(135deg, var(--green) 0%, #4e9148 100%);
//           color: #fff;
//           font-size: 13px; font-weight: 800;
//           letter-spacing: 1.5px;
//           border: none; border-radius: 12px;
//           cursor: pointer; transition: all 0.22s;
//           position: relative; overflow: hidden;
//           box-shadow: 0 4px 20px rgba(102,169,98,0.42), inset 0 1px 0 rgba(245,231,194,0.10);
//           font-family: 'Outfit', sans-serif;
//           text-transform: uppercase;
//         }
//         .rp-sbtn::before {
//           content: '';
//           position: absolute; top: 0; left: 0; right: 0; height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
//         }
//         .rp-sbtn::after {
//           content: '';
//           position: absolute; top: 0; left: -120%;
//           width: 80%; height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
//           transform: skewX(-20deg);
//           transition: left 0.55s ease;
//         }
//         .rp-sbtn:hover::after { left: 140%; }
//         .rp-sbtn:hover:not(:disabled) {
//           background: linear-gradient(135deg, #3d7a39 0%, var(--green) 100%);
//           transform: translateY(-2px);
//           box-shadow: 0 10px 28px rgba(102,169,98,0.52);
//         }
//         .rp-sbtn:active:not(:disabled) { transform: translateY(0); }
//         .rp-sbtn:disabled { opacity: 0.42; cursor: not-allowed; }

//         /* ── Sign in link ── */
//         .rp-signin {
//           margin-top: 12px;
//           text-align: center;
//           font-size: 13px;
//           color: rgba(245,231,194,0.58);
//           font-family: 'Outfit', sans-serif;
//         }
//         .rp-signin a {
//           color: var(--cream); font-weight: 700;
//           text-decoration: none; margin-left: 5px;
//           padding-bottom: 1px;
//           border-bottom: 1.5px solid var(--gold-light);
//           transition: all .2s;
//           cursor: pointer;
//         }
//         .rp-signin a:hover { color: var(--gold-light); border-color: var(--gold); }

//         /* ── Card footer ── */
//         .rp-cfooter {
//           margin-top: auto; padding-top: 14px;
//           border-top: 1px solid rgba(202,157,40,0.14);
//           display: flex; align-items: center;
//           justify-content: center; gap: 7px;
//         }
//         .rp-cfdot {
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           background: var(--green);
//           box-shadow: 0 0 8px var(--green);
//           animation: dotPulse 2.5s infinite;
//         }
//         @keyframes dotPulse {
//           0%,100% { opacity:1; transform:scale(1); }
//           50% { opacity:0.45; transform:scale(1.7); }
//         }
//         .rp-cfooter span {
//           font-size: 10.5px; color: rgba(245,231,194,0.28);
//           letter-spacing: 0.3px;
//         }

//         /* ══════════════════════════════════════
//            MAYOR PANEL — identical to Login
//         ══════════════════════════════════════ */
//         .rp-mayor-panel {
//           width: 300px;
//           background: linear-gradient(
//             155deg,
//             var(--teal-dark) 0%,
//             var(--deep) 38%,
//             #0b5e6b 72%,
//             #093e4a 100%
//           );
//           display: flex; flex-direction: column;
//           align-items: center; justify-content: center;
//           padding: 40px 26px;
//           position: relative; overflow: hidden;
//         }

//         .rp-mayor-panel::before {
//           content: '';
//           position: absolute; top: 0; left: 0; right: 0; height: 3px;
//           background: linear-gradient(90deg,
//             var(--gold), var(--gold-light), var(--cream),
//             var(--gold-light), var(--gold)
//           );
//           background-size: 250%;
//           animation: shimmerBar 3.5s linear infinite;
//         }
//         @keyframes shimmerBar {
//           from { background-position: 0% center; }
//           to   { background-position: 250% center; }
//         }

//         .rp-mayor-panel::after {
//           content: '';
//           position: absolute; top: 42%; left: 50%;
//           transform: translate(-50%, -50%);
//           width: 250px; height: 250px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(76,171,193,0.16) 0%, transparent 68%);
//           pointer-events: none;
//         }

//         .rp-mp-icon {
//           position: absolute; font-size: 30px;
//           opacity: 0.14;
//           filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
//           transition: opacity .35s;
//         }
//         .rp-mayor-panel:hover .rp-mp-icon { opacity: 0.24; }
//         .rp-mp-icon.tl { top: 26px;  left: 20px; }
//         .rp-mp-icon.tr { top: 26px;  right: 20px; }
//         .rp-mp-icon.bl { bottom: 48px; left: 20px; }
//         .rp-mp-icon.br { bottom: 48px; right: 20px; }

//         .rp-mayor-photo-wrap {
//           position: relative; margin-bottom: 20px; z-index: 2;
//         }
//         .rp-mayor-ring {
//           width: 152px; height: 152px;
//           border-radius: 50%; padding: 5px;
//           background: conic-gradient(
//             var(--gold) 0deg,
//             var(--gold-light) 90deg,
//             var(--cream) 180deg,
//             var(--gold-light) 260deg,
//             var(--gold) 360deg
//           );
//           box-shadow:
//             0 8px 36px rgba(0,0,0,0.38),
//             0 0 0 3px rgba(202,157,40,0.18);
//         }
//         .rp-mayor-photo {
//           width: 100%; height: 100%;
//           border-radius: 50%;
//           object-fit: cover; object-position: top center;
//           border: 3px solid rgba(255,255,255,0.92);
//           display: block;
//         }
//         .rp-mayor-badge {
//           position: absolute; bottom: 3px; right: 3px;
//           width: 36px; height: 36px; border-radius: 50%;
//           background: linear-gradient(135deg, #fff 0%, var(--cream) 100%);
//           display: flex; align-items: center; justify-content: center;
//           font-size: 17px;
//           box-shadow: 0 3px 10px rgba(0,0,0,0.28);
//           border: 2px solid rgba(255,255,255,0.95);
//         }

//         .rp-mayor-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 21px; font-weight: 700;
//           color: #fff; text-align: center;
//           margin-bottom: 6px;
//           text-shadow: 0 2px 14px rgba(0,0,0,0.30);
//           line-height: 1.3; z-index: 2; position: relative;
//         }
//         .rp-mayor-title {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 11.5px;
//           color: rgba(245,231,194,0.72);
//           text-align: center; line-height: 1.6;
//           margin-bottom: 22px; z-index: 2; position: relative;
//         }

//         .rp-mayor-bar-wrap {
//           width: 110px; height: 5px;
//           background: rgba(255,255,255,0.14);
//           border-radius: 999px; overflow: hidden;
//           z-index: 2; position: relative;
//         }
//         .rp-mayor-bar {
//           width: 55%; height: 100%;
//           background: linear-gradient(90deg, var(--green), #7dd87a);
//           border-radius: 999px;
//           box-shadow: 0 0 10px rgba(102,169,98,0.65);
//           animation: barGlow 2.5s ease-in-out infinite;
//         }
//         @keyframes barGlow {
//           0%,100% { opacity:1; }
//           50% { opacity:0.60; }
//         }

//         @keyframes fadeUp {
//           from { opacity:0; transform:translateY(10px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .fade-up { animation: fadeUp .28s ease both; }

//         /* ── Responsive ── */
//         @media (max-width: 768px) {
//           .rp-mayor-panel { display: none; }
//           .rp-card {
//             border-right: 1px solid rgba(76,171,193,0.20);
//             border-radius: 24px; width: 92%; max-width: 410px;
//           }
//           .rp-wrapper { border-radius: 24px; }
//           .rp-root { justify-content: center; padding-right: 0; }
//         }
//       `}</style>

//       <div className="rp-root">
//         <div className="rp-bg" style={{ backgroundImage: `url(${bgImage})` }} />
//         <div className="rp-overlay" />
//         <div className="rp-stripe" />

//         <div className="rp-wrapper">

//           {/* ── LEFT: REGISTRATION CARD ── */}
//           <div className="rp-card">

//             {/* Logo */}
//             <div className="rp-logo-row">
//               <img src={logo} alt="VVCMC" className="rp-logo-img" />
//               <div className="rp-logo-texts">
//                 <div className="rp-logo-name">वसई-विरार शहर महानगरपालिका</div>
//                 <div className="rp-logo-sub">जन संवाद</div>
//               </div>
//             </div>

//             <div className="fade-up">
//               <p className="rp-ftitle">Create Account</p>

//               <form onSubmit={handleRegister}>

//                 <div className="rp-fld">
//                   <label className="rp-flbl">Full Name</label>
//                   <div className="rp-fwrap">
//                     <span className="rp-ficon">👤</span>
//                     <input
//                       className="rp-finput has-icon"
//                       type="text"
//                       name="fullName"
//                       placeholder="Enter your full name"
//                       value={form.fullName}
//                       onChange={handleChange}
//                       autoComplete="name"
//                     />
//                   </div>
//                 </div>

//                 <div className="rp-fld">
//                   <label className="rp-flbl">Username</label>
//                   <div className="rp-fwrap">
//                     <span className="rp-ficon">🪪</span>
//                     <input
//                       className="rp-finput has-icon"
//                       type="text"
//                       name="userName"
//                       placeholder="Enter your username"
//                       value={form.userName}
//                       onChange={handleChange}
//                       autoComplete="username"
//                     />
//                   </div>
//                 </div>

//                 <div className="rp-fld">
//                   <label className="rp-flbl">Mobile Number</label>
//                   <div className="rp-fwrap">
//                     <span className="rp-ficon">📱</span>
//                     <input
//                       className="rp-finput has-icon"
//                       type="tel"
//                       name="mobileNumber"
//                       placeholder="Enter your mobile number"
//                       maxLength={10}
//                       value={form.mobileNumber}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 <div className="rp-fld">
//                   <label className="rp-flbl">Email</label>
//                   <div className="rp-fwrap">
//                     <span className="rp-ficon">✉️</span>
//                     <input
//                       className="rp-finput has-icon"
//                       type="email"
//                       name="email"
//                       placeholder="Enter your email"
//                       value={form.email}
//                       onChange={handleChange}
//                       autoComplete="email"
//                     />
//                   </div>
//                 </div>

//                 <div className="rp-fld">
//                   <label className="rp-flbl">Password</label>
//                   <div className="rp-fwrap">
//                     <span className="rp-ficon">🔒</span>
//                     <input
//                       className="rp-finput has-icon"
//                       type={showPass ? "text" : "password"}
//                       name="password"
//                       placeholder="Enter your password"
//                       value={form.password}
//                       onChange={handleChange}
//                       autoComplete="new-password"
//                       style={{ paddingRight: 42 }}
//                     />
//                     <button
//                       type="button"
//                       className="rp-pbtn"
//                       onClick={() => setShowPass(!showPass)}
//                       tabIndex={-1}
//                     >
//                       {showPass ? "🙈" : "👁️"}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="rp-sbtn"
//                   disabled={!isFormValid || loading}
//                 >
//                   {loading ? "⏳ Creating..." : "CREATE ACCOUNT →"}
//                 </button>
//               </form>

//               <p className="rp-signin">
//                 Already have an account?
//                 <a onClick={() => navigate("/login")}>Sign in</a>
//               </p>
//             </div>

//             {/* Footer */}
//             <div className="rp-cfooter">
//               <div className="rp-cfdot" />
//               <span>Secure Government Portal · All rights reserved</span>
//             </div>
//           </div>

//           {/* ── RIGHT: MAYOR PANEL ── */}
//           <div className="rp-mayor-panel">
//             <span className="rp-mp-icon tl">🏛️</span>
//             <span className="rp-mp-icon tr">🏥</span>
//             <span className="rp-mp-icon bl">🏗️</span>
//             <span className="rp-mp-icon br">🏢</span>

//             <div className="rp-mayor-photo-wrap">
//               <div className="rp-mayor-ring">
//                 <img src={mayorPhoto} alt="Mayor" className="rp-mayor-photo" />
//               </div>
//               <div className="rp-mayor-badge">🪑</div>
//             </div>

//             <p className="rp-mayor-name">मा. श्री.अजीव पाटील</p>
//             <p className="rp-mayor-title">मा. महापौर, वसई विरार शहर महानगरपालिका</p>

//             <div className="rp-mayor-bar-wrap">
//               <div className="rp-mayor-bar" />
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// ==================================
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import logo from "../assets/vvcmclogo.jpg";
import mayorPhoto from "../assets/ajivir5.jpeg";
import bgImage from "../assets/bg1.jpeg";
import axiosInstance from "../services/axiosInstance";
import Loader from "../components/common/Loader";
import { toast } from "react-toastify";

export default function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    userName: "",
    mobileNumber: "",
    email: "",
    password: "",
  });
  const [loading, setLoading]   = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [animated, setAnimated] = useState(false);

  // Trigger entrance animation after first paint
  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 60);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!form.fullName || !form.userName || !form.mobileNumber || !form.email || !form.password) {
      toast.error("All fields required ❌"); return;
    }
    try {
      setLoading(true);
      const res  = await axiosInstance.post("/register", form);
      const data = res.data;
      if (!data.success) { toast.error(data.message); return; }
      dispatch(loginSuccess(data.user));
      localStorage.setItem("authUser", JSON.stringify(data.user));
      toast.success("Registration Success ✅");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Server Error ❌");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = form.fullName && form.userName && form.mobileNumber && form.email && form.password;

  return (
    <>
      {loading && <Loader />}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Playfair+Display:wght@500;700;900&family=Outfit:wght@300;400;500;600;700&display=swap');

        :root {
          --teal:       #4CABC1;
          --teal-dark:  #49ACC3;
          --gold:       #CA9D28;
          --gold-light: #CE9A54;
          --cream:      #F5E7C2;
          --green:      #66A962;
          --deep:       #187480;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── ROOT — always centered ── */
        .rp-root {
          min-height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
        }

        .rp-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: left center;
          filter: brightness(0.75) saturate(1.15);
          transition: transform 14s ease;
        }
        .rp-root:hover .rp-bg { transform: scale(1.02); }

        .rp-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            125deg,
            rgba(24,116,128,0.45) 0%,
            rgba(73,172,195,0.38) 30%,
            rgba(24,116,128,0.60) 60%,
            rgba(12,70,80,0.82) 100%
          );
        }

        .rp-stripe {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg,
            var(--gold) 0%, var(--gold-light) 22%,
            var(--teal) 45%, var(--teal-dark) 65%,
            var(--green) 85%, var(--cream) 100%
          );
          z-index: 20;
        }

        /* ── WRAPPER ── */
        .rp-wrapper {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: stretch;
          border-radius: 28px;
          overflow: hidden;
          box-shadow:
            0 32px 80px rgba(0,0,0,0.52),
            0 0 0 1px rgba(202,157,40,0.20),
            inset 0 1px 0 rgba(245,231,194,0.07);
          /* JS-driven: transition from off-right to center */
          transition: transform 0.85s cubic-bezier(0.22, 0.9, 0.36, 1),
                      opacity   0.60s ease;
        }

        /* ── LEFT CARD ── */
        .rp-card {
          width: 410px;
          background: linear-gradient(
            160deg,
            rgba(12,68,80,0.80) 0%,
            rgba(24,116,128,0.62) 50%,
            rgba(12,68,80,0.85) 100%
          );
          backdrop-filter: blur(38px) saturate(2);
          -webkit-backdrop-filter: blur(38px) saturate(2);
          border: 1px solid rgba(76,171,193,0.20);
          border-right: 1px solid rgba(202,157,40,0.18);
          padding: 28px 32px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .rp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
        }

        /* ── Logo row ── */
        .rp-logo-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(202,157,40,0.22);
          position: relative;
        }
        .rp-logo-row::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 55px; height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          border-radius: 2px;
        }
        .rp-logo-img {
          width: 54px; height: 54px;
          object-fit: contain;
          border-radius: 50%;
          border: 2px solid var(--gold-light);
          box-shadow: 0 0 0 3px rgba(202,157,40,0.15), 0 4px 20px rgba(0,0,0,0.32);
          flex-shrink: 0;
        }
        .rp-logo-texts { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
        .rp-logo-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 15px; font-weight: 700;
          color: var(--gold-light); line-height: 1.3;
          text-shadow: 0 1px 10px rgba(0,0,0,0.4);
        }
        .rp-logo-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13px; font-weight: 500;
          color: rgba(245,231,194,0.72); letter-spacing: 0.4px;
        }

        .rp-ftitle {
          font-size: 21px; font-weight: 700;
          color: var(--cream); margin-bottom: 16px;
          font-family: 'Outfit', sans-serif; letter-spacing: -0.3px;
          text-shadow: 0 1px 12px rgba(0,0,0,0.3);
        }

        .rp-fld { margin-bottom: 12px; }

        .rp-flbl {
          display: block; font-size: 11.5px; font-weight: 700;
          color: rgba(245,231,194,0.72); margin-bottom: 6px;
          font-family: 'Outfit', sans-serif; letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .rp-fwrap { position: relative; }

        .rp-finput {
          width: 100%; padding: 11px 16px;
          border: 1px solid rgba(76,171,193,0.20);
          border-radius: 12px; font-size: 13.5px; color: #fff;
          background: rgba(12,68,80,0.58);
          backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
          outline: none; transition: all 0.2s; font-family: 'Outfit', sans-serif;
          box-shadow: inset 0 1px 0 rgba(245,231,194,0.06), 0 2px 8px rgba(0,0,0,0.14);
        }
        .rp-finput:focus {
          background: rgba(24,116,128,0.62); border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(76,171,193,0.18), inset 0 1px 0 rgba(245,231,194,0.08);
        }
        .rp-finput::placeholder { color: rgba(245,231,194,0.28); font-size: 12.5px; }
        .rp-finput.has-icon { padding-left: 42px; }

        .rp-ficon {
          position: absolute; left: 14px; top: 50%;
          transform: translateY(-50%); font-size: 15px;
          pointer-events: none; opacity: 0.48;
        }
        .rp-pbtn {
          position: absolute; right: 13px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none; cursor: pointer; font-size: 15px;
          color: rgba(245,231,194,0.42); padding: 0;
          display: flex; align-items: center; transition: color .2s;
        }
        .rp-pbtn:hover { color: var(--cream); }

        .rp-sbtn {
          width: 100%; padding: 13px; margin-top: 8px;
          background: linear-gradient(135deg, var(--green) 0%, #4e9148 100%);
          color: #fff; font-size: 13px; font-weight: 800; letter-spacing: 1.5px;
          border: none; border-radius: 12px; cursor: pointer; transition: all 0.22s;
          position: relative; overflow: hidden;
          box-shadow: 0 4px 20px rgba(102,169,98,0.42), inset 0 1px 0 rgba(245,231,194,0.10);
          font-family: 'Outfit', sans-serif; text-transform: uppercase;
        }
        .rp-sbtn::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
        }
        .rp-sbtn::after {
          content: ''; position: absolute; top: 0; left: -120%;
          width: 80%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
          transform: skewX(-20deg); transition: left 0.55s ease;
        }
        .rp-sbtn:hover::after { left: 140%; }
        .rp-sbtn:hover:not(:disabled) {
          background: linear-gradient(135deg, #3d7a39 0%, var(--green) 100%);
          transform: translateY(-2px); box-shadow: 0 10px 28px rgba(102,169,98,0.52);
        }
        .rp-sbtn:active:not(:disabled) { transform: translateY(0); }
        .rp-sbtn:disabled { opacity: 0.42; cursor: not-allowed; }

        .rp-signin {
          margin-top: 12px; text-align: center; font-size: 13px;
          color: rgba(245,231,194,0.58); font-family: 'Outfit', sans-serif;
        }
        .rp-signin a {
          color: var(--cream); font-weight: 700;
          text-decoration: none; margin-left: 5px; padding-bottom: 1px;
          border-bottom: 1.5px solid var(--gold-light); transition: all .2s; cursor: pointer;
        }
        .rp-signin a:hover { color: var(--gold-light); border-color: var(--gold); }

        .rp-cfooter {
          margin-top: auto; padding-top: 14px;
          border-top: 1px solid rgba(202,157,40,0.14);
          display: flex; align-items: center; justify-content: center; gap: 7px;
        }
        .rp-cfdot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--green); box-shadow: 0 0 8px var(--green);
          animation: dotPulse 2.5s infinite;
        }
        @keyframes dotPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.45; transform:scale(1.7); }
        }
        .rp-cfooter span { font-size: 10.5px; color: rgba(245,231,194,0.28); letter-spacing: 0.3px; }

        /* ══════════════ MAYOR PANEL ══════════════ */
        .rp-mayor-panel {
          width: 300px;
          background: linear-gradient(155deg, var(--teal-dark) 0%, var(--deep) 38%, #0b5e6b 72%, #093e4a 100%);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 40px 26px;
          position: relative; overflow: hidden;
          /* JS-driven slide from top-right */
          transition: transform 0.80s cubic-bezier(0.22, 0.9, 0.36, 1) 0.10s,
                      opacity   0.65s ease 0.10s;
        }

        .rp-mayor-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light), var(--cream), var(--gold-light), var(--gold));
          background-size: 250%;
          animation: shimmerBar 3.5s linear infinite;
        }
        @keyframes shimmerBar {
          from { background-position: 0% center; }
          to   { background-position: 250% center; }
        }

        .rp-mayor-panel::after {
          content: '';
          position: absolute; top: 42%; left: 50%;
          transform: translate(-50%, -50%);
          width: 250px; height: 250px; border-radius: 50%;
          background: radial-gradient(circle, rgba(76,171,193,0.16) 0%, transparent 68%);
          pointer-events: none;
        }

        .rp-mp-icon {
          position: absolute; font-size: 30px; opacity: 0.14;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)); transition: opacity .35s;
        }
        .rp-mayor-panel:hover .rp-mp-icon { opacity: 0.24; }
        .rp-mp-icon.tl { top: 26px;  left: 20px; }
        .rp-mp-icon.tr { top: 26px;  right: 20px; }
        .rp-mp-icon.bl { bottom: 48px; left: 20px; }
        .rp-mp-icon.br { bottom: 48px; right: 20px; }

        .rp-mayor-photo-wrap { position: relative; margin-bottom: 20px; z-index: 2; }
        .rp-mayor-ring {
          width: 152px; height: 152px; border-radius: 50%; padding: 5px;
          background: conic-gradient(var(--gold) 0deg, var(--gold-light) 90deg, var(--cream) 180deg, var(--gold-light) 260deg, var(--gold) 360deg);
          box-shadow: 0 8px 36px rgba(0,0,0,0.38), 0 0 0 3px rgba(202,157,40,0.18);
        }
        .rp-mayor-photo {
          width: 100%; height: 100%; border-radius: 50%;
          object-fit: cover; object-position: top center;
          border: 3px solid rgba(255,255,255,0.92); display: block;
        }
        .rp-mayor-badge {
          position: absolute; bottom: 3px; right: 3px;
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg, #fff 0%, var(--cream) 100%);
          display: flex; align-items: center; justify-content: center; font-size: 17px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.28); border: 2px solid rgba(255,255,255,0.95);
        }

        .rp-mayor-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 21px; font-weight: 700; color: #fff; text-align: center;
          margin-bottom: 6px; text-shadow: 0 2px 14px rgba(0,0,0,0.30);
          line-height: 1.3; z-index: 2; position: relative;
        }
        .rp-mayor-title {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 11.5px; color: rgba(245,231,194,0.72);
          text-align: center; line-height: 1.6;
          margin-bottom: 22px; z-index: 2; position: relative;
        }

        .rp-mayor-bar-wrap {
          width: 110px; height: 5px; background: rgba(255,255,255,0.14);
          border-radius: 999px; overflow: hidden; z-index: 2; position: relative;
        }
        .rp-mayor-bar {
          width: 55%; height: 100%;
          background: linear-gradient(90deg, var(--green), #7dd87a);
          border-radius: 999px; box-shadow: 0 0 10px rgba(102,169,98,0.65);
          animation: barGlow 2.5s ease-in-out infinite;
        }
        @keyframes barGlow { 0%,100% { opacity:1; } 50% { opacity:0.60; } }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation: fadeUp .28s ease both; }

        @media (max-width: 768px) {
          .rp-mayor-panel { display: none; }
          .rp-card { border-right: 1px solid rgba(76,171,193,0.20); border-radius: 24px; width: 92%; max-width: 410px; }
          .rp-wrapper { border-radius: 24px; }
        }
      `}</style>

      <div className="rp-root">
        <div className="rp-bg" style={{ backgroundImage: `url(${bgImage})` }} />
        <div className="rp-overlay" />
        <div className="rp-stripe" />

        {/* Wrapper: starts 160px right + invisible → slides to center */}
        <div
          className="rp-wrapper"
          style={{
            opacity:   animated ? 1 : 0,
            transform: animated ? 'translateX(0)' : 'translateX(160px)',
          }}
        >
          {/* ── LEFT: REGISTRATION CARD ── */}
          <div className="rp-card">

            <div className="rp-logo-row">
              <img src={logo} alt="VVCMC" className="rp-logo-img" />
              <div className="rp-logo-texts">
                <div className="rp-logo-name">वसई-विरार शहर महानगरपालिका</div>
                <div className="rp-logo-sub">जन संवाद</div>
              </div>
            </div>

            <div className="fade-up">
              <p className="rp-ftitle">Create Account</p>

              <form onSubmit={handleRegister}>

                <div className="rp-fld">
                  <label className="rp-flbl">Full Name</label>
                  <div className="rp-fwrap">
                    <span className="rp-ficon">👤</span>
                    <input
                      className="rp-finput has-icon"
                      type="text" name="fullName"
                      placeholder="Enter your full name"
                      value={form.fullName} onChange={handleChange}
                      autoComplete="name"
                    />
                  </div>
                </div>

                <div className="rp-fld">
                  <label className="rp-flbl">Username</label>
                  <div className="rp-fwrap">
                    <span className="rp-ficon">🪪</span>
                    <input
                      className="rp-finput has-icon"
                      type="text" name="userName"
                      placeholder="Enter your username"
                      value={form.userName} onChange={handleChange}
                      autoComplete="username"
                    />
                  </div>
                </div>

                <div className="rp-fld">
                  <label className="rp-flbl">Mobile Number</label>
                  <div className="rp-fwrap">
                    <span className="rp-ficon">📱</span>
                    <input
                      className="rp-finput has-icon"
                      type="tel" name="mobileNumber"
                      placeholder="Enter your mobile number"
                      maxLength={10}
                      value={form.mobileNumber} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="rp-fld">
                  <label className="rp-flbl">Email</label>
                  <div className="rp-fwrap">
                    <span className="rp-ficon">✉️</span>
                    <input
                      className="rp-finput has-icon"
                      type="email" name="email"
                      placeholder="Enter your email"
                      value={form.email} onChange={handleChange}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="rp-fld">
                  <label className="rp-flbl">Password</label>
                  <div className="rp-fwrap">
                    <span className="rp-ficon">🔒</span>
                    <input
                      className="rp-finput has-icon"
                      type={showPass ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      value={form.password} onChange={handleChange}
                      autoComplete="new-password"
                      style={{ paddingRight: 42 }}
                    />
                    <button
                      type="button" className="rp-pbtn"
                      onClick={() => setShowPass(!showPass)} tabIndex={-1}
                    >
                      {showPass ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>

                <button
                  type="submit" className="rp-sbtn"
                  disabled={!isFormValid || loading}
                >
                  {loading ? "⏳ Creating..." : "CREATE ACCOUNT →"}
                </button>
              </form>

              <p className="rp-signin">
                Already have an account?
                <a onClick={() => navigate("/login")}>Sign in</a>
              </p>
            </div>

            <div className="rp-cfooter">
              <div className="rp-cfdot" />
              <span>Secure Government Portal · All rights reserved</span>
            </div>
          </div>

          {/* ── RIGHT: MAYOR PANEL — slides from top-right ── */}
          <div
            className="rp-mayor-panel"
            style={{
              opacity:   animated ? 1 : 0,
              transform: animated ? 'translate(0, 0)' : 'translate(80px, -60px)',
            }}
          >
            <span className="rp-mp-icon tl">🏛️</span>
            <span className="rp-mp-icon tr">🏥</span>
            <span className="rp-mp-icon bl">🏗️</span>
            <span className="rp-mp-icon br">🏢</span>

            <div className="rp-mayor-photo-wrap">
              <div className="rp-mayor-ring">
                <img src={mayorPhoto} alt="Mayor" className="rp-mayor-photo" />
              </div>
              <div className="rp-mayor-badge">🪑</div>
            </div>

            <p className="rp-mayor-name">मा. श्री.अजीव पाटील</p>
            <p className="rp-mayor-title">मा. महापौर, वसई विरार शहर महानगरपालिका</p>

            <div className="rp-mayor-bar-wrap">
              <div className="rp-mayor-bar" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}


// =====================================
// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import citizenAxios from "../services/citizenAxios";
// import heroBg from "../assets/bg1.jpeg";
// import mayorImg from "../assets/ajivir5.jpeg";

// export default function Register() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     fullName: "", userName: "", mobileNumber: "",
//     email: "", address: "", pincode: "",
//     password: "", confirmPassword: "",
//   });
//   const [loading, setLoading]   = useState(false);
//   const [error, setError]       = useState("");
//   const [success, setSuccess]   = useState(false);
//   const [showPass, setShowPass]             = useState(false);
//   const [showConfirmPass, setShowConfirmPass] = useState(false);
//   const [animated, setAnimated]             = useState(false);

//   // ── OTP State ──────────────────────────────────────────────────────────────
//   const [otpStep, setOtpStep]           = useState("form"); // "form" | "otp"
//   const [otp, setOtp]                   = useState(["", "", "", "", "", ""]);
//   const [generatedOtp, setGeneratedOtp] = useState("");
//   const [timeLeft, setTimeLeft]         = useState(0);
//   const [canResend, setCanResend]       = useState(false);
//   const [otpLoading, setOtpLoading]     = useState(false);
//   const otpRefs = useRef([]);

//   const ch = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

//   // Entrance animation
//   useEffect(() => {
//     const t = setTimeout(() => setAnimated(true), 60);
//     return () => clearTimeout(t);
//   }, []);

//   // ── Countdown Timer ────────────────────────────────────────────────────────
//   useEffect(() => {
//     if (timeLeft <= 0) { setCanResend(true); return; }
//     const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
//     return () => clearTimeout(t);
//   }, [timeLeft]);

//   const formatTime = (s) =>
//     `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

//   // ── Step 1: Validate form & Send OTP ──────────────────────────────────────
//   const handleSendOtp = async (e) => {
//     if (e && e.preventDefault) e.preventDefault();
//     setError("");

//     if (!form.fullName || !form.mobileNumber || !form.password) {
//       setError("All required fields must be filled ❌"); return;
//     }
//     if (!/^\d{10}$/.test(form.mobileNumber)) {
//       setError("Mobile number must be 10 digits ❌"); return;
//     }
//     if (form.password.length < 6) {
//       setError("Password must be at least 6 characters ❌"); return;
//     }
//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match ❌"); return;
//     }

//     // ✅ Check if mobile already registered BEFORE sending OTP
//     try {
//       setOtpLoading(true);
//       const checkRes = await citizenAxios.post("/citizen/check-mobile", { mobileNo: form.mobileNumber });
//       if (checkRes.data.success) {
//         setError("हा mobile number already registered आहे ❌ Please Login करा.");
//         setOtpLoading(false);
//         return;
//       }
//     } catch (err) {
//       // 404 = not registered = good, continue sending OTP
//       if (err?.response?.status !== 404) {
//         setError("Server Error. Please try again ❌");
//         setOtpLoading(false);
//         return;
//       }
//     }

//     const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
//     setGeneratedOtp(newOtp);
//     setTimeLeft(60);
//     setCanResend(false);
//     setOtp(["", "", "", "", "", ""]);

//     const smsText = `Dear Citizen ${newOtp} is OTP for VVCMC Jan Samvaad Portal login for citizen registration.VVCMC SAAVI INFINET`;
//     const smsApiUrl = `https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379312&number=${form.mobileNumber}&message=${encodeURIComponent(smsText)}`;

//     fetch(smsApiUrl, { method: "GET", mode: "no-cors" }).catch(() => {});

//     setOtpStep("otp");
//     setOtpLoading(false);
//     setTimeout(() => otpRefs.current[0]?.focus(), 120);
//   };

//   // ── Step 2: Verify OTP & Register ─────────────────────────────────────────
//   const handleRegister = async () => {
//     const entered = otp.join("");
//     if (entered.length < 6) { setError("Enter 6 digit OTP ❌"); return; }
//     if (timeLeft <= 0)       { setError("OTP expired! Please resend ❌"); return; }
//     if (entered !== generatedOtp) {
//       setError("Wrong OTP! Please try again ❌");
//       setOtp(["", "", "", "", "", ""]);
//       setTimeout(() => otpRefs.current[0]?.focus(), 50);
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");
//       const res = await citizenAxios.post("/citizen/register", {
//         fullName: form.fullName, userName: form.userName,
//         mobileNumber: form.mobileNumber, address: form.address,
//         pincode: form.pincode, email: form.email, password: form.password,
//       });
//       if (!res.data.success) { setError(res.data.message || "Registration failed ❌"); return; }
//       setSuccess(true);
//       setTimeout(() => navigate("/login"), 2000);
//     } catch (e) {
//       setError(e?.response?.data?.message || "Server Error ❌");
//     } finally { setLoading(false); }
//   };

//   // ── OTP Box Handlers ───────────────────────────────────────────────────────
//   const handleOtpChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;
//     const next = [...otp]; next[index] = value; setOtp(next);
//     if (value && index < 5) otpRefs.current[index + 1]?.focus();
//   };
//   const handleOtpKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0)
//       otpRefs.current[index - 1]?.focus();
//   };
//   const handleOtpPaste = (e) => {
//     e.preventDefault();
//     const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
//     const next = [...otp];
//     pasted.split("").forEach((ch, i) => { next[i] = ch; });
//     setOtp(next);
//     otpRefs.current[Math.min(pasted.length, 5)]?.focus();
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Playfair+Display:wght@500;700;900&family=Outfit:wght@300;400;500;600;700&display=swap');

//         :root {
//           --teal:       #4CABC1;
//           --teal-dark:  #49ACC3;
//           --gold:       #CA9D28;
//           --gold-light: #CE9A54;
//           --cream:      #F5E7C2;
//           --green:      #66A962;
//           --deep:       #187480;
//         }

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         .rp-root {
//           min-height: 100vh;
//           width: 100%;
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-family: 'Outfit', sans-serif;
//           overflow: hidden;
//           padding: 24px 0;
//         }

//         .rp-bg {
//           position: absolute;
//           inset: 0;
//           background-size: cover;
//           background-position: center;
//           filter: brightness(0.75) saturate(1.15);
//           transition: transform 14s ease;
//         }
//         .rp-root:hover .rp-bg { transform: scale(1.02); }

//         .rp-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             125deg,
//             rgba(24,116,128,0.45) 0%,
//             rgba(73,172,195,0.38) 30%,
//             rgba(24,116,128,0.60) 60%,
//             rgba(12,70,80,0.82) 100%
//           );
//         }

//         .rp-stripe {
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 4px;
//           background: linear-gradient(90deg,
//             var(--gold) 0%, var(--gold-light) 22%,
//             var(--teal) 45%, var(--teal-dark) 65%,
//             var(--green) 85%, var(--cream) 100%
//           );
//           z-index: 20;
//         }

//         /* ── WRAPPER ── */
//         .rp-wrapper {
//           position: relative;
//           z-index: 10;
//           display: flex;
//           align-items: stretch;
//           border-radius: 28px;
//           overflow: hidden;
//           box-shadow:
//             0 32px 80px rgba(0,0,0,0.52),
//             0 0 0 1px rgba(202,157,40,0.20),
//             inset 0 1px 0 rgba(245,231,194,0.07);
//           transition: transform 0.85s cubic-bezier(0.22,0.9,0.36,1),
//                       opacity   0.60s ease;
//         }

//         /* ── LEFT CARD ── */
//         .rp-card {
//           width: 500px;
//           background: linear-gradient(
//             160deg,
//             rgba(12,68,80,0.80) 0%,
//             rgba(24,116,128,0.62) 50%,
//             rgba(12,68,80,0.85) 100%
//           );
//           backdrop-filter: blur(38px) saturate(2);
//           -webkit-backdrop-filter: blur(38px) saturate(2);
//           border: 1px solid rgba(76,171,193,0.20);
//           border-right: 1px solid rgba(202,157,40,0.18);
//           padding: 28px 32px 24px;
//           display: flex;
//           flex-direction: column;
//           position: relative;
//           overflow-y: auto;
//           max-height: 96vh;
//         }
//         .rp-card::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0; height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
//         }

//         /* ── Logo row ── */
//         .rp-logo-row {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           margin-bottom: 18px;
//           padding-bottom: 16px;
//           border-bottom: 1px solid rgba(202,157,40,0.22);
//           position: relative;
//           flex-shrink: 0;
//         }
//         .rp-logo-row::after {
//           content: '';
//           position: absolute;
//           bottom: -1px; left: 0;
//           width: 55px; height: 2px;
//           background: linear-gradient(90deg, var(--gold), var(--gold-light));
//           border-radius: 2px;
//         }
//         .rp-logo-img {
//           width: 50px; height: 50px;
//           object-fit: cover;
//           border-radius: 50%;
//           border: 2px solid var(--gold-light);
//           box-shadow: 0 0 0 3px rgba(202,157,40,0.15), 0 4px 20px rgba(0,0,0,0.32);
//           flex-shrink: 0;
//         }
//         .rp-logo-texts { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
//         .rp-logo-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 15px; font-weight: 700;
//           color: var(--gold-light); line-height: 1.3;
//           text-shadow: 0 1px 10px rgba(0,0,0,0.4);
//         }
//         .rp-logo-sub {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 13px; font-weight: 500;
//           color: rgba(245,231,194,0.60); letter-spacing: 0.4px;
//         }

//         /* Page heading */
//         .rp-page-title {
//           font-size: 24px; font-weight: 800;
//           color: var(--cream); margin-bottom: 2px;
//           font-family: 'Outfit', sans-serif; letter-spacing: -0.5px;
//           text-shadow: 0 1px 12px rgba(0,0,0,0.3);
//         }
//         .rp-page-sub {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 13px;
//           color: rgba(245,231,194,0.52);
//           margin-bottom: 16px;
//         }

//         /* ── ERROR / SUCCESS boxes ── */
//         .rp-error {
//           background: rgba(220,38,38,0.18);
//           border: 1px solid rgba(220,38,38,0.38);
//           border-radius: 10px;
//           padding: 11px 14px;
//           font-size: 12.5px;
//           color: #fca5a5;
//           margin-bottom: 14px;
//           font-weight: 500;
//           font-family: 'Outfit', sans-serif;
//         }
//         .rp-success {
//           background: rgba(102,169,98,0.18);
//           border: 1px solid rgba(102,169,98,0.40);
//           border-radius: 12px;
//           padding: 20px;
//           font-size: 14px;
//           color: #86efac;
//           font-weight: 600;
//           text-align: center;
//           margin-bottom: 16px;
//           font-family: 'Outfit', sans-serif;
//         }

//         /* ── 2-column grid ── */
//         .rp-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 0 16px;
//         }
//         .rp-fld      { margin-bottom: 12px; }
//         .rp-fld.full { grid-column: 1 / -1; }

//         .rp-flbl {
//           display: block; font-size: 11px; font-weight: 700;
//           color: rgba(245,231,194,0.72); margin-bottom: 6px;
//           font-family: 'Outfit', sans-serif; letter-spacing: 0.8px;
//           text-transform: uppercase;
//         }
//         .rp-req { color: #fca5a5; margin-left: 2px; }

//         .rp-fwrap { position: relative; }

//         .rp-finput {
//           width: 100%;
//           padding: 10px 14px 10px 40px;
//           border: 1px solid rgba(76,171,193,0.20);
//           border-radius: 10px;
//           font-size: 13px; color: #fff;
//           background: rgba(12,68,80,0.58);
//           backdrop-filter: blur(10px);
//           -webkit-backdrop-filter: blur(10px);
//           outline: none; transition: all 0.2s;
//           font-family: 'Outfit', sans-serif;
//           box-shadow: inset 0 1px 0 rgba(245,231,194,0.06), 0 2px 8px rgba(0,0,0,0.14);
//         }
//         .rp-finput:focus {
//           background: rgba(24,116,128,0.62);
//           border-color: var(--teal);
//           box-shadow: 0 0 0 3px rgba(76,171,193,0.18), inset 0 1px 0 rgba(245,231,194,0.08);
//         }
//         .rp-finput::placeholder { color: rgba(245,231,194,0.28); font-size: 12px; font-family: 'Tiro Devanagari Marathi', serif; }
//         .rp-finput.no-icon { padding-left: 14px; }

//         .rp-ficon {
//           position: absolute; left: 12px; top: 50%;
//           transform: translateY(-50%); font-size: 14px;
//           pointer-events: none; opacity: 0.48;
//         }
//         .rp-pbtn {
//           position: absolute; right: 11px; top: 50%;
//           transform: translateY(-50%);
//           background: none; border: none; cursor: pointer; font-size: 14px;
//           color: rgba(245,231,194,0.42); padding: 0;
//           display: flex; align-items: center; transition: color .2s;
//         }
//         .rp-pbtn:hover { color: var(--cream); }

//         .rp-input-hint {
//           font-size: 10.5px;
//           color: rgba(245,231,194,0.32);
//           margin-top: 4px;
//           font-family: 'Outfit', sans-serif;
//         }

//         /* ── BUTTONS ── */
//         .rp-sbtn {
//           width: 100%; padding: 13px; margin-top: 6px;
//           background: linear-gradient(135deg, var(--green) 0%, #4e9148 100%);
//           color: #fff; font-size: 13px; font-weight: 800; letter-spacing: 1.2px;
//           border: none; border-radius: 12px; cursor: pointer; transition: all 0.22s;
//           position: relative; overflow: hidden;
//           box-shadow: 0 4px 20px rgba(102,169,98,0.42), inset 0 1px 0 rgba(245,231,194,0.10);
//           font-family: 'Outfit', sans-serif; text-transform: uppercase;
//         }
//         .rp-sbtn::before {
//           content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
//         }
//         .rp-sbtn::after {
//           content: ''; position: absolute; top: 0; left: -120%;
//           width: 80%; height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
//           transform: skewX(-20deg); transition: left 0.55s ease;
//         }
//         .rp-sbtn:hover::after { left: 140%; }
//         .rp-sbtn:hover:not(:disabled) {
//           background: linear-gradient(135deg, #3d7a39 0%, var(--green) 100%);
//           transform: translateY(-2px);
//           box-shadow: 0 10px 28px rgba(102,169,98,0.52);
//         }
//         .rp-sbtn:active:not(:disabled) { transform: translateY(0); }
//         .rp-sbtn:disabled { opacity: 0.42; cursor: not-allowed; }

//         .rp-sbtn.teal {
//           background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
//           box-shadow: 0 4px 20px rgba(76,171,193,0.42);
//         }
//         .rp-sbtn.teal:hover:not(:disabled) {
//           background: linear-gradient(135deg, #3796ae 0%, var(--teal) 100%);
//           box-shadow: 0 10px 28px rgba(76,171,193,0.52);
//         }

//         /* ── OTP boxes ── */
//         .otp-row {
//           display: flex; gap: 8px;
//           justify-content: center; margin-bottom: 16px;
//         }
//         .otp-box {
//           width: 46px; height: 52px;
//           border: 1px solid rgba(76,171,193,0.22);
//           border-radius: 12px;
//           font-size: 22px; font-weight: 800;
//           text-align: center;
//           color: var(--cream);
//           font-family: 'Outfit', sans-serif;
//           outline: none;
//           background: rgba(12,68,80,0.58);
//           backdrop-filter: blur(10px);
//           transition: all .18s;
//           box-shadow: inset 0 1px 0 rgba(245,231,194,0.06);
//         }
//         .otp-box:focus {
//           background: rgba(24,116,128,0.65);
//           border-color: var(--teal);
//           box-shadow: 0 0 0 3px rgba(76,171,193,0.20);
//           color: #fff;
//         }
//         .otp-box:not(:placeholder-shown) {
//           background: rgba(24,116,128,0.55);
//           border-color: var(--green);
//           box-shadow: 0 0 0 2px rgba(102,169,98,0.28);
//         }

//         /* Timer */
//         .otp-timer {
//           text-align: center; font-size: 12px;
//           color: rgba(245,231,194,0.60);
//           margin-bottom: 12px;
//           font-family: 'Outfit', sans-serif;
//         }
//         .otp-timer strong { font-size: 13.5px; }
//         .resend-btn {
//           background: none; border: none;
//           font-family: 'Outfit', sans-serif;
//           font-size: 12.5px; font-weight: 700;
//           cursor: pointer; transition: all .2s;
//         }
//         .resend-btn:disabled { color: rgba(245,231,194,0.22); cursor: not-allowed; }
//         .resend-btn:not(:disabled) { color: var(--gold-light); }
//         .resend-btn:not(:disabled):hover { color: var(--gold); text-decoration: underline; }

//         /* Back btn */
//         .otp-back {
//           background: none; border: none;
//           font-family: 'Outfit', sans-serif;
//           font-size: 12px; font-weight: 600;
//           color: rgba(245,231,194,0.52);
//           cursor: pointer;
//           display: flex; align-items: center; gap: 4px;
//           margin-bottom: 14px; padding: 0;
//           transition: color .2s;
//         }
//         .otp-back:hover { color: var(--teal); }

//         /* Footer */
//         .rp-signin {
//           margin-top: 14px; text-align: center; font-size: 13px;
//           color: rgba(245,231,194,0.58); font-family: 'Outfit', sans-serif;
//         }
//         .rp-signin span.rp-link {
//           color: var(--cream); font-weight: 700;
//           text-decoration: none; margin-left: 5px; padding-bottom: 1px;
//           border-bottom: 1.5px solid var(--gold-light); transition: all .2s; cursor: pointer;
//         }
//         .rp-signin span.rp-link:hover { color: var(--gold-light); border-color: var(--gold); }

//         .rp-cfooter {
//           margin-top: auto; padding-top: 14px; flex-shrink: 0;
//           border-top: 1px solid rgba(202,157,40,0.14);
//           display: flex; align-items: center; justify-content: center; gap: 7px;
//         }
//         .rp-cfdot {
//           width: 6px; height: 6px; border-radius: 50%;
//           background: var(--green); box-shadow: 0 0 8px var(--green);
//           animation: dotPulse 2.5s infinite;
//         }
//         @keyframes dotPulse {
//           0%,100% { opacity:1; transform:scale(1); }
//           50% { opacity:0.45; transform:scale(1.7); }
//         }
//         .rp-cfooter span { font-size: 10.5px; color: rgba(245,231,194,0.28); letter-spacing: 0.3px; }

//         /* ══════════════ MAYOR PANEL ══════════════ */
//         .rp-mayor-panel {
//           width: 300px;
//           background: linear-gradient(155deg, var(--teal-dark) 0%, var(--deep) 38%, #0b5e6b 72%, #093e4a 100%);
//           display: flex; flex-direction: column;
//           align-items: center; justify-content: center;
//           padding: 40px 26px;
//           position: relative; overflow: hidden;
//           transition: transform 0.80s cubic-bezier(0.22,0.9,0.36,1) 0.10s,
//                       opacity   0.65s ease 0.10s;
//         }

//         .rp-mayor-panel::before {
//           content: '';
//           position: absolute; top: 0; left: 0; right: 0; height: 3px;
//           background: linear-gradient(90deg, var(--gold), var(--gold-light), var(--cream), var(--gold-light), var(--gold));
//           background-size: 250%;
//           animation: shimmerBar 3.5s linear infinite;
//         }
//         @keyframes shimmerBar {
//           from { background-position: 0% center; }
//           to   { background-position: 250% center; }
//         }

//         .rp-mayor-panel::after {
//           content: '';
//           position: absolute; top: 42%; left: 50%;
//           transform: translate(-50%, -50%);
//           width: 250px; height: 250px; border-radius: 50%;
//           background: radial-gradient(circle, rgba(76,171,193,0.16) 0%, transparent 68%);
//           pointer-events: none;
//         }

//         .rp-mp-icon {
//           position: absolute; font-size: 30px; opacity: 0.14;
//           filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)); transition: opacity .35s;
//         }
//         .rp-mayor-panel:hover .rp-mp-icon { opacity: 0.24; }
//         .rp-mp-icon.tl { top: 26px;  left: 20px; }
//         .rp-mp-icon.tr { top: 26px;  right: 20px; }
//         .rp-mp-icon.bl { bottom: 48px; left: 20px; }
//         .rp-mp-icon.br { bottom: 48px; right: 20px; }

//         .rp-mayor-photo-wrap { position: relative; margin-bottom: 20px; z-index: 2; }
//         .rp-mayor-ring {
//           width: 152px; height: 152px; border-radius: 50%; padding: 5px;
//           background: conic-gradient(var(--gold) 0deg, var(--gold-light) 90deg, var(--cream) 180deg, var(--gold-light) 260deg, var(--gold) 360deg);
//           box-shadow: 0 8px 36px rgba(0,0,0,0.38), 0 0 0 3px rgba(202,157,40,0.18);
//         }
//         .rp-mayor-photo {
//           width: 100%; height: 100%; border-radius: 50%;
//           object-fit: cover; object-position: top center;
//           border: 3px solid rgba(255,255,255,0.92); display: block;
//         }
//         .rp-mayor-badge {
//           position: absolute; bottom: 3px; right: 3px;
//           width: 36px; height: 36px; border-radius: 50%;
//           background: linear-gradient(135deg, #fff 0%, var(--cream) 100%);
//           display: flex; align-items: center; justify-content: center; font-size: 17px;
//           box-shadow: 0 3px 10px rgba(0,0,0,0.28); border: 2px solid rgba(255,255,255,0.95);
//         }

//         .rp-mayor-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 21px; font-weight: 700; color: #fff; text-align: center;
//           margin-bottom: 6px; text-shadow: 0 2px 14px rgba(0,0,0,0.30);
//           line-height: 1.3; z-index: 2; position: relative;
//         }
//         .rp-mayor-title {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 11.5px; color: rgba(245,231,194,0.72);
//           text-align: center; line-height: 1.6;
//           margin-bottom: 18px; z-index: 2; position: relative;
//         }

//         /* Info card in mayor panel */
//         .rp-mayor-info {
//           background: rgba(255,255,255,0.08);
//           border: 1px solid rgba(255,255,255,0.14);
//           border-radius: 14px;
//           padding: 14px 16px;
//           width: 100%;
//           z-index: 2; position: relative;
//         }
//         .rp-mayor-info-item {
//           display: flex; align-items: center; gap: 10px;
//           font-size: 12.5px;
//           color: rgba(245,231,194,0.88);
//           font-family: 'Tiro Devanagari Marathi', serif;
//           padding: 7px 0;
//         }
//         .rp-mayor-info-item:not(:last-child) {
//           border-bottom: 1px solid rgba(255,255,255,0.10);
//         }
//         .rp-mayor-info-icon { font-size: 17px; flex-shrink: 0; }

//         .rp-mayor-bar-wrap {
//           width: 110px; height: 5px; background: rgba(255,255,255,0.14);
//           border-radius: 999px; overflow: hidden; z-index: 2; position: relative;
//           margin-bottom: 18px;
//         }
//         .rp-mayor-bar {
//           width: 65%; height: 100%;
//           background: linear-gradient(90deg, var(--green), #7dd87a);
//           border-radius: 999px; box-shadow: 0 0 10px rgba(102,169,98,0.65);
//           animation: barGlow 2.5s ease-in-out infinite;
//         }
//         @keyframes barGlow { 0%,100% { opacity:1; } 50% { opacity:0.60; } }

//         @keyframes fadeUp {
//           from { opacity:0; transform:translateY(10px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .fade-up { animation: fadeUp .28s ease both; }

//         @media (max-width: 768px) {
//           .rp-mayor-panel { display: none; }
//           .rp-card { border-right: 1px solid rgba(76,171,193,0.20); border-radius: 24px; width: 92%; max-width: 500px; }
//           .rp-wrapper { border-radius: 24px; }
//           .rp-grid { grid-template-columns: 1fr; }
//           .rp-fld.full { grid-column: 1; }
//         }
//       `}</style>

//       <div className="rp-root">
//         <div className="rp-bg" style={{ backgroundImage: `url(${heroBg})` }} />
//         <div className="rp-overlay" />
//         <div className="rp-stripe" />

//         <div
//           className="rp-wrapper"
//           style={{
//             opacity:   animated ? 1 : 0,
//             transform: animated ? 'translateX(0)' : 'translateX(160px)',
//           }}
//         >
//           {/* ── LEFT: REGISTRATION CARD ── */}
//           <div className="rp-card">

//             <div className="rp-logo-row">
//               <img src={mayorImg} alt="VVCMC" className="rp-logo-img" style={{ objectPosition: "top center" }} />
//               <div className="rp-logo-texts">
//                 <div className="rp-logo-name">वसई-विरार शहर महानगरपालिका</div>
//                 <div className="rp-logo-sub">जन संवाद · Citizen Portal</div>
//               </div>
//             </div>

//             <div className="fade-up">
//               <p className="rp-page-title">Account तयार करा</p>
//               <p className="rp-page-sub">Mayor Appointment बुक करण्यासाठी register करा</p>

//               {/* ════ SUCCESS ════ */}
//               {success ? (
//                 <div className="rp-success">
//                   ✅ Registration successful!<br />
//                   <span style={{ fontSize: 13, fontWeight: 400, opacity: 0.8 }}>
//                     Login page वर redirect होत आहे...
//                   </span>
//                 </div>

//               ) : otpStep === "otp" ? (

//                 /* ════ OTP VERIFICATION STEP ════ */
//                 <>
//                   <button
//                     className="otp-back"
//                     onClick={() => { setOtpStep("form"); setOtp(["","","","","",""]); setError(""); }}
//                   >
//                     ← Go Back
//                   </button>

//                   <p style={{ fontSize: 12.5, color: "rgba(245,231,194,0.62)", marginBottom: 16, fontFamily: "'Outfit',sans-serif" }}>
//                     OTP sent to{" "}
//                     <span style={{ color: "#CE9A54", fontWeight: 700 }}>
//                       +91 ******{form.mobileNumber.slice(-3)}
//                     </span>
//                   </p>

//                   {error && <div className="rp-error">⚠️ {error}</div>}

//                   <div className="otp-row" onPaste={handleOtpPaste}>
//                     {otp.map((digit, i) => (
//                       <input
//                         key={i}
//                         ref={(el) => (otpRefs.current[i] = el)}
//                         className="otp-box"
//                         type="tel"
//                         maxLength={1}
//                         value={digit}
//                         placeholder="·"
//                         onChange={(e) => handleOtpChange(i, e.target.value)}
//                         onKeyDown={(e) => handleOtpKeyDown(i, e)}
//                       />
//                     ))}
//                   </div>

//                   <div className="otp-timer">
//                     {timeLeft > 0 ? (
//                       <>
//                         OTP expires in:{" "}
//                         <strong style={{ color: timeLeft <= 15 ? "#ff6b6b" : "#CE9A54" }}>
//                           {formatTime(timeLeft)}
//                         </strong>
//                       </>
//                     ) : (
//                       <span style={{ color: "#ff6b6b", fontWeight: 600 }}>OTP expired!</span>
//                     )}
//                     <div style={{ marginTop: 6 }}>
//                       Did not receive OTP?{" "}
//                       <button className="resend-btn" onClick={handleSendOtp} disabled={!canResend}>
//                         Resend OTP
//                       </button>
//                     </div>
//                   </div>

//                   <button
//                     className="rp-sbtn teal"
//                     onClick={handleRegister}
//                     disabled={otp.join("").length < 6 || loading}
//                   >
//                     {loading ? "⏳ Registering..." : "✅ Verify & Register"}
//                   </button>
//                 </>

//               ) : (

//                 /* ════ REGISTRATION FORM STEP ════ */
//                 <>
//                   {error && <div className="rp-error">⚠️ {error}</div>}

//                   <form onSubmit={handleSendOtp}>
//                     <div className="rp-grid">

//                       {/* Full Name */}
//                       <div className="rp-fld">
//                         <label className="rp-flbl">Full Name <span className="rp-req">*</span></label>
//                         <div className="rp-fwrap">
//                           <span className="rp-ficon">👤</span>
//                           <input
//                             className="rp-finput"
//                             type="text"
//                             placeholder="आपले पूर्ण नाव"
//                             value={form.fullName}
//                             onChange={ch("fullName")}
//                             autoFocus
//                           />
//                         </div>
//                       </div>

//                       {/* User Name */}
//                       <div className="rp-fld">
//                         <label className="rp-flbl">User Name</label>
//                         <div className="rp-fwrap">
//                           <span className="rp-ficon">🪪</span>
//                           <input
//                             className="rp-finput"
//                             type="text"
//                             placeholder="Username"
//                             value={form.userName}
//                             onChange={ch("userName")}
//                           />
//                         </div>
//                       </div>

//                       {/* Mobile */}
//                       <div className="rp-fld">
//                         <label className="rp-flbl">Mobile Number <span className="rp-req">*</span></label>
//                         <div className="rp-fwrap">
//                           <span className="rp-ficon">📱</span>
//                           <input
//                             className="rp-finput"
//                             type="tel"
//                             placeholder="10 digit mobile"
//                             value={form.mobileNumber}
//                             onChange={ch("mobileNumber")}
//                             maxLength={10}
//                           />
//                         </div>
//                       </div>

//                       {/* Email */}
//                       <div className="rp-fld">
//                         <label className="rp-flbl">Email</label>
//                         <div className="rp-fwrap">
//                           <span className="rp-ficon">✉️</span>
//                           <input
//                             className="rp-finput"
//                             type="email"
//                             placeholder="Email (optional)"
//                             value={form.email}
//                             onChange={ch("email")}
//                           />
//                         </div>
//                       </div>

//                       {/* Address */}
//                       <div className="rp-fld">
//                         <label className="rp-flbl">Address</label>
//                         <div className="rp-fwrap">
//                           <span className="rp-ficon">🏠</span>
//                           <input
//                             className="rp-finput"
//                             type="text"
//                             placeholder="Address"
//                             value={form.address}
//                             onChange={ch("address")}
//                           />
//                         </div>
//                       </div>

//                       {/* Pincode */}
//                       <div className="rp-fld">
//                         <label className="rp-flbl">Pincode</label>
//                         <div className="rp-fwrap">
//                           <span className="rp-ficon">📍</span>
//                           <input
//                             className="rp-finput"
//                             type="text"
//                             placeholder="Pincode"
//                             value={form.pincode}
//                             onChange={ch("pincode")}
//                             maxLength={6}
//                           />
//                         </div>
//                       </div>

//                       {/* Password */}
//                       <div className="rp-fld">
//                         <label className="rp-flbl">Password <span className="rp-req">*</span></label>
//                         <div className="rp-fwrap">
//                           <span className="rp-ficon">🔒</span>
//                           <input
//                             className="rp-finput"
//                             type={showPass ? "text" : "password"}
//                             placeholder="Min. 6 characters"
//                             value={form.password}
//                             onChange={ch("password")}
//                             style={{ paddingRight: 38 }}
//                           />
//                           <button type="button" className="rp-pbtn"
//                             onClick={() => setShowPass(!showPass)} tabIndex={-1}>
//                             {showPass ? "🙈" : "👁️"}
//                           </button>
//                         </div>
//                         <div className="rp-input-hint">किमान 6 characters</div>
//                       </div>

//                       {/* Confirm Password */}
//                       <div className="rp-fld">
//                         <label className="rp-flbl">Confirm Password <span className="rp-req">*</span></label>
//                         <div className="rp-fwrap">
//                           <span className="rp-ficon">🔐</span>
//                           <input
//                             className="rp-finput"
//                             type={showConfirmPass ? "text" : "password"}
//                             placeholder="Password परत टाका"
//                             value={form.confirmPassword}
//                             onChange={ch("confirmPassword")}
//                             style={{ paddingRight: 38 }}
//                           />
//                           <button type="button" className="rp-pbtn"
//                             onClick={() => setShowConfirmPass(!showConfirmPass)} tabIndex={-1}>
//                             {showConfirmPass ? "🙈" : "👁️"}
//                           </button>
//                         </div>
//                       </div>

//                     </div>

//                     <button
//                       type="submit"
//                       className="rp-sbtn"
//                       disabled={
//                         otpLoading ||
//                         !form.fullName || !form.mobileNumber ||
//                         !form.password || !form.confirmPassword
//                       }
//                     >
//                       {otpLoading ? "⏳ Sending OTP..." : "📱 Send OTP & Register"}
//                     </button>
//                   </form>

//                   <p className="rp-signin">
//                     Already have an account?
//                     <span className="rp-link" onClick={() => navigate("/login")}>Login</span>
//                   </p>
//                 </>
//               )}
//             </div>

//             <div className="rp-cfooter">
//               <div className="rp-cfdot" />
//               <span>Secure Citizen Portal · All rights reserved</span>
//             </div>
//           </div>

//           {/* ── RIGHT: MAYOR PANEL ── */}
//           <div
//             className="rp-mayor-panel"
//             style={{
//               opacity:   animated ? 1 : 0,
//               transform: animated ? 'translate(0,0)' : 'translate(80px,-60px)',
//             }}
//           >
//             <span className="rp-mp-icon tl">🏛️</span>
//             <span className="rp-mp-icon tr">🤝</span>
//             <span className="rp-mp-icon bl">🏢</span>
//             <span className="rp-mp-icon br">🏙️</span>

//             <div className="rp-mayor-photo-wrap">
//               <div className="rp-mayor-ring">
//                 <img src={mayorImg} alt="Mayor" className="rp-mayor-photo" />
//               </div>
//               <div className="rp-mayor-badge">🪑</div>
//             </div>

//             <p className="rp-mayor-name">मा. श्री.अजीव पाटील</p>
//             <p className="rp-mayor-title">मा. महापौर, वसई विरार शहर महानगरपालिका</p>

//             <div className="rp-mayor-bar-wrap">
//               <div className="rp-mayor-bar" />
//             </div>

//             <div className="rp-mayor-info">
//               <div className="rp-mayor-info-item">
//                 <span className="rp-mayor-info-icon">📅</span>
//                 <span>Appointment सहज बुक करा</span>
//               </div>
//               <div className="rp-mayor-info-item">
//                 <span className="rp-mayor-info-icon">🔔</span>
//                 <span>SMS द्वारे notification मिळवा</span>
//               </div>
//               <div className="rp-mayor-info-item">
//                 <span className="rp-mayor-info-icon">🛡️</span>
//                 <span>Secure Government Portal</span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }