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

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import bgImage from "../assets/vasaivirarmahangarpalika.jpg";
import logo from "../assets/vvcmclogo.jpg";

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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!form.fullName || !form.userName || !form.mobileNumber || !form.email || !form.password) {
      alert("All fields required ❌"); return;
    }
    try {
      const res = await axiosInstance.post("/register", form);
      const data = res.data;
      if (!data.success) { alert(data.message); return; }
      dispatch(loginSuccess(data.user));
      localStorage.setItem("authUser", JSON.stringify(data.user));
      alert("Registration Success ✅");
      navigate("/dashboard");
    } catch (error) {
      alert(error?.response?.data?.message || "Server Error ❌");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        .rp-root{
          min-height:100vh;width:100%;position:relative;
          display:flex;align-items:center;justify-content:flex-end;
          font-family:'DM Sans',sans-serif;overflow:hidden;
        }
        .rp-bg{
          position:absolute;inset:0;
          background-size:cover;background-position:center;
          filter:brightness(0.6) saturate(1.05);
          transition:transform 10s ease;
        }
        .rp-root:hover .rp-bg{transform:scale(1.025);}
        .rp-overlay{
          position:absolute;inset:0;
          background:linear-gradient(
            108deg,
            rgba(4,12,30,0.04) 0%,
            rgba(4,12,30,0.1) 30%,
            rgba(4,12,30,0.68) 62%,
            rgba(4,12,30,0.9) 100%
          );
        }
        .rp-hero{
          position:absolute;left:56px;bottom:56px;
          z-index:5;max-width:460px;
        }
        .rp-badge{
          display:inline-flex;align-items:center;gap:7px;
          background:rgba(255,255,255,0.11);backdrop-filter:blur(10px);
          border:1px solid rgba(255,255,255,0.2);border-radius:100px;
          padding:5px 14px;margin-bottom:16px;
        }
        .rp-bdot{
          width:6px;height:6px;border-radius:50%;
          background:#4ade80;box-shadow:0 0 7px #4ade80;
          animation:rblink 2s infinite;
        }
        @keyframes rblink{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.45;transform:scale(1.6);}}
        .rp-badge span{font-size:11px;color:rgba(255,255,255,0.88);font-weight:500;letter-spacing:0.4px;}
        .rp-title{
          font-family:'Crimson Pro',serif;font-size:50px;font-weight:700;
          color:#fff;line-height:1.1;text-shadow:0 2px 24px rgba(0,0,0,0.55);
          margin-bottom:6px;
        }
        .rp-title em{color:#fbbf24;font-style:normal;}
        .rp-sub{font-size:13px;color:rgba(255,255,255,0.58);margin-bottom:22px;letter-spacing:0.2px;}
        .rp-stats{display:flex;gap:18px;}
        .rp-stat{display:flex;flex-direction:column;gap:2px;}
        .rp-snum{font-family:'Crimson Pro',serif;font-size:24px;font-weight:700;color:#fbbf24;line-height:1;}
        .rp-slbl{font-size:9.5px;color:rgba(255,255,255,0.42);text-transform:uppercase;letter-spacing:0.9px;}
        .rp-ssep{width:1px;background:rgba(255,255,255,0.14);align-self:stretch;}

        .rp-card{
          position:relative;z-index:10;
          width:350px;margin-right:72px;
          background:#fff;border-radius:18px;
          padding:26px 28px 22px;
          box-shadow:0 28px 64px rgba(0,0,0,0.48),0 0 0 1px rgba(255,255,255,0.06);
        }

        .rp-logo-row{display:flex;align-items:center;gap:11px;margin-bottom:16px;}
        .rp-logo-img{width:46px;height:46px;object-fit:contain;flex-shrink:0;}
        .rp-logo-name{
          font-family:'Tiro Devanagari Marathi',serif;
          font-size:13.5px;font-weight:700;color:#1e3a5f;line-height:1.3;
          white-space:nowrap;
        }
        .rp-hr{height:1px;background:#f0f1f3;margin-bottom:16px;}
        .rp-ftitle{font-size:15px;font-weight:700;color:#111827;margin-bottom:14px;}

        .rp-fld{margin-bottom:10px;}
        .rp-flbl{
          display:block;font-size:10px;font-weight:600;
          color:#374151;letter-spacing:0.55px;text-transform:uppercase;margin-bottom:4px;
        }
        .rp-fwrap{position:relative;}
        .rp-ficon{
          position:absolute;left:10px;top:50%;transform:translateY(-50%);
          font-size:12px;color:#adb5bd;pointer-events:none;
        }
        .rp-finput{
          width:100%;padding:9px 10px 9px 32px;
          border:1.5px solid #e5e7eb;border-radius:8px;
          font-size:12.5px;color:#111827;background:#f8f9fb;
          outline:none;transition:all 0.18s;
          font-family:'DM Sans',sans-serif;
        }
        .rp-finput:focus{
          border-color:#3b82f6;background:#fff;box-shadow:0 0 0 3px rgba(59,130,246,0.1);
        }
        .rp-finput::placeholder{color:#c8cdd5;font-size:12px;}

        .rp-submit-btn{
          width:100%;margin-top:14px;padding:10px;
          background:linear-gradient(135deg,#15803d 0%,#22c55e 100%);
          color:#fff;font-size:13px;font-weight:600;letter-spacing:0.5px;
          border:none;border-radius:8px;cursor:pointer;
          transition:all 0.22s;
          box-shadow:0 4px 14px rgba(34,197,94,0.36);
          font-family:'DM Sans',sans-serif;
        }
        .rp-submit-btn:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(34,197,94,0.46);}
        .rp-submit-btn:active{transform:translateY(0);}
        .rp-submit-btn:disabled{background:#d1d5db;box-shadow:none;cursor:not-allowed;transform:none;}

        .rp-signin{margin-top:12px;text-align:center;font-size:11.5px;color:#6b7280;}
        .rp-signin span{color:#1e40af;font-weight:600;cursor:pointer;margin-left:3px;}
        .rp-signin span:hover{text-decoration:underline;}

        .rp-cfooter{
          margin-top:14px;padding-top:12px;border-top:1px solid #f3f4f6;
          display:flex;align-items:center;justify-content:center;gap:5px;
        }
        .rp-cfdot{width:5px;height:5px;border-radius:50%;background:#4ade80;box-shadow:0 0 5px #4ade80;}
        .rp-cfooter span{font-size:10px;color:#b5bcc8;letter-spacing:0.25px;}

        @media(max-width:768px){
          .rp-hero{display:none;}
          .rp-card{margin-right:0;width:88%;max-width:360px;}
          .rp-root{justify-content:center;}
        }
      `}</style>

      <div className="rp-root">
        <div className="rp-bg" style={{ backgroundImage: `url(${bgImage})` }} />
        <div className="rp-overlay" />

        {/* Hero Left */}
        <div className="rp-hero">
          <div className="rp-badge">
            <div className="rp-bdot" />
            <span>Official Government Portal</span>
          </div>
          <h1 className="rp-title">
            जन संवाद<br />
            <em>Admin Panel</em>
          </h1>
          <p className="rp-sub">Vasai-Virar City Municipal Corporation</p>
          <div className="rp-stats">
            <div className="rp-stat">
              <span className="rp-snum">8</span>
              <span className="rp-slbl">Talukas</span>
            </div>
            <div className="rp-ssep" />
            <div className="rp-stat">
              <span className="rp-snum">2009</span>
              <span className="rp-slbl">Established</span>
            </div>
            <div className="rp-ssep" />
            <div className="rp-stat">
              <span className="rp-snum">24/7</span>
              <span className="rp-slbl">Service</span>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="rp-card">
          {/* Logo */}
          <div className="rp-logo-row">
            <img src={logo} alt="VVCMC" className="rp-logo-img" />
            <div className="rp-logo-name">वसई-विरार शहर महानगरपालिका</div>
          </div>

          <div className="rp-hr" />
          <p className="rp-ftitle">Create Account</p>

          <form onSubmit={handleRegister}>
            <div className="rp-fld">
              <label className="rp-flbl">Full Name</label>
              <div className="rp-fwrap">
                <span className="rp-ficon">👤</span>
                <input className="rp-finput" type="text" name="fullName"
                  placeholder="Enter your full name"
                  value={form.fullName} onChange={handleChange} />
              </div>
            </div>

            <div className="rp-fld">
              <label className="rp-flbl">Username</label>
              <div className="rp-fwrap">
                <span className="rp-ficon">🪪</span>
                <input className="rp-finput" type="text" name="userName"
                  placeholder="Enter your username"
                  value={form.userName} onChange={handleChange} />
              </div>
            </div>

            <div className="rp-fld">
              <label className="rp-flbl">Mobile Number</label>
              <div className="rp-fwrap">
                <span className="rp-ficon">📱</span>
                <input className="rp-finput" type="tel" name="mobileNumber"
                  placeholder="Enter your mobile number"
                  maxLength={10}
                  value={form.mobileNumber} onChange={handleChange} />
              </div>
            </div>

            <div className="rp-fld">
              <label className="rp-flbl">Email</label>
              <div className="rp-fwrap">
                <span className="rp-ficon">✉️</span>
                <input className="rp-finput" type="email" name="email"
                  placeholder="Enter your email"
                  value={form.email} onChange={handleChange} />
              </div>
            </div>

               {/* <div className="rp-fld">
              <label className="rp-flbl"></label>
              <div className="rp-fwrap">
                <span className="rp-ficon">📱</span>
                <input className="rp-finput" type="tel" name="pincode"
                  placeholder="Enter your pincode"
                  maxLength={10}
                  value={form.pincode} onChange={handleChange} />
              </div>
            </div> */}

             {/* <div className="rp-fld">
              <label className="rp-flbl"></label>
              <div className="rp-fwrap">
                <span className="rp-ficon">📱</span>
                <input className="rp-finput" type="tel" name="address"
                  placeholder="Enter your address"
                  maxLength={10}
                  value={form.address} onChange={handleChange} />
              </div>
            </div> */}


            

            <div className="rp-fld">
              <label className="rp-flbl">Password</label>
              <div className="rp-fwrap">
                <span className="rp-ficon">🔒</span>
                <input className="rp-finput" type="password" name="password"
                  placeholder="Enter your password"
                  value={form.password} onChange={handleChange} />
              </div>
            </div>

            <button type="submit" className="rp-submit-btn"
              disabled={!form.fullName || !form.userName || !form.mobileNumber || !form.email || !form.password}>
              CREATE ACCOUNT
            </button>
          </form>

          <p className="rp-signin">
            Already have an account?
            <span onClick={() => navigate("/login")}>Sign in</span>
          </p>

          <div className="rp-cfooter">
            <div className="rp-cfdot" />
            <span>Secure Government Portal · All rights reserved</span>
          </div>
        </div>
      </div>
    </>
  );
}