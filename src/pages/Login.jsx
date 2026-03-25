// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/slices/authSlice";
// import { useNavigate, Link } from "react-router-dom";
// import bgImage from "../assets/vasaivirarmahangarpalika.jpg";
// import logo from "../assets/vvcmclogo.jpg";
// import ganeshji from "../assets/ganeshnaiklogo.jfif";
// import axiosInstance from "../services/axiosInstance";
// import Loader from "../components/common/Loader";
// import { toast } from "react-toastify";

// export default function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({ userName: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [showPass, setShowPass] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!form.userName.trim()) { toast.error("Username टाका ✅"); return; }
//     if (!form.password)        { toast.error("Password टाका ✅"); return; }
//     try {
//       setLoading(true);
//       const res  = await axiosInstance.post("/login", { userName: form.userName, password: form.password });
//       const data = res.data;
//       if (!data.success) { toast.error(data.message); return; }
//       const userPayload = {
//         id:                 data.user.id,
//         fullName:           data.user.fullName,
//         userName:           data.user.userName,
//         role:               data.user.role,
//         departmentName:     data.user.departmentName,
//         office:             data.user.office,
//         departmentCategory: data.user.departmentCategory,
//       };
//       if (data.token) localStorage.setItem("token", data.token);
//       dispatch(loginSuccess(userPayload));
//       localStorage.setItem("authUser", JSON.stringify(userPayload));
//       localStorage.setItem("userRole", data.user.role);
//       toast.success("Login successful ✅");
//       navigate("/dashboard");
//     } catch (error) {
//       const msg = error?.response?.data?.message || "Server error. Backend चालू आहे का?";
//       toast.error(msg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {loading && <Loader />}

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

//         *{box-sizing:border-box;margin:0;padding:0;}

//         .lp-root{
//           min-height:100vh;width:100%;position:relative;
//           display:flex;align-items:center;justify-content:flex-end;
//           font-family:'DM Sans',sans-serif;overflow:hidden;
//         }
//         .lp-bg{
//           position:absolute;inset:0;
//           background-size:cover;background-position:center;
//           filter:brightness(0.6) saturate(1.05);
//           transition:transform 10s ease;
//         }
//         .lp-root:hover .lp-bg{transform:scale(1.025);}
//         .lp-overlay{
//           position:absolute;inset:0;
//           background:linear-gradient(
//             108deg,
//             rgba(4,12,30,0.04) 0%,
//             rgba(4,12,30,0.1) 30%,
//             rgba(4,12,30,0.68) 62%,
//             rgba(4,12,30,0.9) 100%
//           );
//         }
//         .lp-stripe{
//           position:absolute;top:0;left:0;right:0;height:4px;
//           background:linear-gradient(90deg,#ff6b00 0%,#ff9900 30%,#1e40af 70%,#3b82f6 100%);
//           z-index:10;
//         }

//         /* HERO LEFT */
//         .lp-hero{
//           position:absolute;left:56px;bottom:56px;
//           z-index:5;max-width:460px;
//         }
//         .lp-badge{
//           display:inline-flex;align-items:center;gap:7px;
//           background:rgba(255,255,255,0.11);backdrop-filter:blur(10px);
//           border:1px solid rgba(255,255,255,0.2);border-radius:100px;
//           padding:5px 14px;margin-bottom:16px;
//         }
//         .lp-bdot{
//           width:6px;height:6px;border-radius:50%;
//           background:#4ade80;box-shadow:0 0 7px #4ade80;
//           animation:blink 2s infinite;
//         }
//         @keyframes blink{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.45;transform:scale(1.6);}}
//         .lp-badge span{font-size:11px;color:rgba(255,255,255,0.88);font-weight:500;letter-spacing:0.4px;}
//         .lp-title{
//           font-family:'Crimson Pro',serif;font-size:50px;font-weight:700;
//           color:#fff;line-height:1.1;text-shadow:0 2px 24px rgba(0,0,0,0.55);
//           margin-bottom:6px;
//         }
//         .lp-title em{color:#fbbf24;font-style:normal;}
//         .lp-sub{font-size:13px;color:rgba(255,255,255,0.58);margin-bottom:22px;letter-spacing:0.2px;}
//         .lp-stats{display:flex;gap:18px;}
//         .lp-stat{display:flex;flex-direction:column;gap:2px;}
//         .lp-snum{font-family:'Crimson Pro',serif;font-size:24px;font-weight:700;color:#fbbf24;line-height:1;}
//         .lp-slbl{font-size:9.5px;color:rgba(255,255,255,0.42);text-transform:uppercase;letter-spacing:0.9px;}
//         .lp-ssep{width:1px;background:rgba(255,255,255,0.14);align-self:stretch;}

//         /* FLOATING CARD */
//         .lp-card{
//           position:relative;z-index:10;
//           width:340px;margin-right:72px;
//           background:#fff;border-radius:18px;
//           padding:28px 28px 24px;
//           box-shadow:0 28px 64px rgba(0,0,0,0.48),0 0 0 1px rgba(255,255,255,0.06);
//         }
//         // .lp-card-bar{
//         //   position:absolute;top:0;left:0;right:0;height:3px;
//         //   background:linear-gradient(90deg,#1e40af,#3b82f6,#ff9900);
//         //   border-radius:18px 18px 0 0;
//         // }

//         /* logo */
//         .lp-logo-row{display:flex;align-items:center;gap:11px;margin-bottom:18px;}
//         .lp-logo-img{width:48px;height:48px;object-fit:contain;flex-shrink:0;}
//         .lp-logo-name{
//           font-family:'Tiro Devanagari Marathi',serif;
//           font-size:14.5px;font-weight:700;color:#1e3a5f;line-height:1.28;
//         }
//         .lp-hr{height:1px;background:#f0f1f3;margin-bottom:18px;}

//         /* form title */
//         .lp-ftitle{font-size:16px;font-weight:700;color:#111827;margin-bottom:16px;}

//         /* fields */
//         .lp-fld{margin-bottom:12px;}
//         .lp-flbl{
//           display:block;font-size:10px;font-weight:600;
//           color:#374151;letter-spacing:0.55px;text-transform:uppercase;margin-bottom:5px;
//         }
//         .lp-fwrap{position:relative;}
//         .lp-ficon{
//           position:absolute;left:10px;top:50%;transform:translateY(-50%);
//           font-size:12px;color:#adb5bd;pointer-events:none;
//         }
//         .lp-finput{
//           width:100%;padding:9.5px 10px 9.5px 32px;
//           border:1.5px solid #e5e7eb;border-radius:8px;
//           font-size:12.5px;color:#111827;background:#f8f9fb;
//           outline:none;transition:all 0.18s;
//           font-family:'DM Sans',sans-serif;
//         }
//         .lp-finput:focus{border-color:#3b82f6;background:#fff;box-shadow:0 0 0 3px rgba(59,130,246,0.1);}
//         .lp-finput::placeholder{color:#c8cdd5;font-size:12px;}
//         .lp-pbtn{
//           position:absolute;right:10px;top:50%;transform:translateY(-50%);
//           background:none;border:none;cursor:pointer;font-size:13px;color:#adb5bd;padding:0;
//           display:flex;align-items:center;
//         }
//         .lp-pbtn:hover{color:#6b7280;}

//         /* submit btn */
//         .lp-sbtn{
//           width:100%;padding:10.5px;margin-top:6px;
//           background:linear-gradient(135deg,#1e3fa3 0%,#3b82f6 100%);
//           color:#fff;font-size:12.5px;font-weight:600;letter-spacing:0.6px;
//           border:none;border-radius:8px;cursor:pointer;
//           transition:all 0.22s;position:relative;overflow:hidden;
//           box-shadow:0 4px 14px rgba(59,130,246,0.36);
//           font-family:'DM Sans',sans-serif;
//         }
//         .lp-sbtn::after{
//           content:'';position:absolute;top:0;left:-100%;
//           width:100%;height:100%;
//           background:linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent);
//           transition:left 0.45s;
//         }
//         .lp-sbtn:hover::after{left:100%;}
//         .lp-sbtn:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(59,130,246,0.46);}
//         .lp-sbtn:active{transform:translateY(0);}

//         /* or / register */
//         .lp-or{display:flex;align-items:center;gap:9px;margin:13px 0 0;}
//         .lp-orl{flex:1;height:1px;background:#ebebeb;}
//         .lp-or span{font-size:10.5px;color:#b5bcc8;}
//         .lp-reg{margin-top:11px;text-align:center;font-size:11.5px;color:#6b7280;}
//         .lp-reg a{color:#1e40af;font-weight:600;text-decoration:none;margin-left:3px;}
//         .lp-reg a:hover{text-decoration:underline;}

//         /* card footer */
//         .lp-cfooter{
//           margin-top:16px;padding-top:13px;border-top:1px solid #f3f4f6;
//           display:flex;align-items:center;justify-content:center;gap:5px;
//         }
//         .lp-cfdot{width:5px;height:5px;border-radius:50%;background:#4ade80;box-shadow:0 0 5px #4ade80;}
//         .lp-cfooter span{font-size:10px;color:#b5bcc8;letter-spacing:0.25px;}

//         @media(max-width:768px){
//           .lp-hero{display:none;}
//           .lp-card{margin-right:0;width:88%;max-width:360px;}
//           .lp-root{justify-content:center;}
//         }
//       `}</style>

//       <div className="lp-root">
//         <div className="lp-bg" style={{ backgroundImage: `url(${bgImage})` }} />
//         <div className="lp-overlay" />
//         <div className="lp-stripe" />

//         {/* Hero Left */}
//         <div className="lp-hero">
//           <div className="lp-badge">
//             <div className="lp-bdot" />
//             <span>Official Government Portal</span>
//           </div>
//           <h1 className="lp-title">
//             जन संवाद<br />
//             <em>Admin Panel</em>
//           </h1>
//           <p className="lp-sub">Vasai-Virar City Municipal Corporation</p>
//           <div className="lp-stats">
//             <div className="lp-stat">
//               <span className="lp-snum">8</span>
//               <span className="lp-slbl">Talukas</span>
//             </div>
//             <div className="lp-ssep" />
//             <div className="lp-stat">
//               <span className="lp-snum">2009</span>
//               <span className="lp-slbl">Established</span>
//             </div>
//             <div className="lp-ssep" />
//             <div className="lp-stat">
//               <span className="lp-snum">24/7</span>
//               <span className="lp-slbl">Service</span>
//             </div>
//           </div>
//         </div>

//         {/* Floating Card */}
//         <div className="lp-card">
//           <div className="lp-card-bar" />

//           <div className="lp-logo-row">
//             <img src={logo} alt="VVCMC" className="lp-logo-img" />
//             <div className="lp-logo-name">वसई-विरार शहर<br />महानगरपालिका</div>
//           </div>

//           <div className="lp-hr" />

//           <p className="lp-ftitle">Sign In to Continue</p>

//           <form onSubmit={handleLogin}>
//             <div className="lp-fld">
//               <label className="lp-flbl">Username</label>
//               <div className="lp-fwrap">
//                 <span className="lp-ficon">👤</span>
//                 <input className="lp-finput" name="userName"
//                   placeholder="Enter your username"
//                   value={form.userName} onChange={handleChange}
//                   autoComplete="username" />
//               </div>
//             </div>

//             <div className="lp-fld">
//               <label className="lp-flbl">Password</label>
//               <div className="lp-fwrap">
//                 <span className="lp-ficon">🔒</span>
//                 <input className="lp-finput"
//                   type={showPass ? "text" : "password"}
//                   name="password"
//                   placeholder="Enter your password"
//                   value={form.password} onChange={handleChange}
//                   autoComplete="current-password" />
//                 <button type="button" className="lp-pbtn"
//                   onClick={() => setShowPass(!showPass)} tabIndex={-1}>
//                   {showPass ? "🙈" : "👁️"}
//                 </button>
//               </div>
//             </div>

//             <button type="submit" className="lp-sbtn">SIGN IN →</button>
//           </form>

//           <div className="lp-or">
//             <div className="lp-orl" /><span>or</span><div className="lp-orl" />
//           </div>

//           <p className="lp-reg">
//             Don't have an account?
//             <Link to="/register">Create account</Link>
//           </p>

//           <div className="lp-cfooter">
//             <div className="lp-cfdot" />
//             <span>Secure Government Portal · All rights reserved</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



// import React, { useState, useEffect, useRef } from "react";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/slices/authSlice";
// import { useNavigate, Link } from "react-router-dom";
// import bgImage from "../assets/vasaivirarmahangarpalika.jpg";
// import logo from "../assets/vvcmclogo.jpg";
// import axiosInstance from "../services/axiosInstance";
// import Loader from "../components/common/Loader";
// import { toast } from "react-toastify";

// export default function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // ── Tab: "password" | "otp" ──────────────────────────────────────────────────
//   const [tab, setTab] = useState("password");

//   // ── Password Login State ──────────────────────────────────────────────────────
//   const [form, setForm]         = useState({ userName: "", password: "" });
//   const [loading, setLoading]   = useState(false);
//   const [showPass, setShowPass] = useState(false);

//   // ── OTP Login State ───────────────────────────────────────────────────────────
//   const [otpStep, setOtpStep]           = useState("mobile"); // "mobile" | "otp"
//   const [mobileNo, setMobileNo]         = useState("");
//   const [otp, setOtp]                   = useState(["", "", "", "", "", ""]);
//   const [generatedOtp, setGeneratedOtp] = useState("");
//   const [timeLeft, setTimeLeft]         = useState(0);
//   const [canResend, setCanResend]       = useState(false);
//   const [otpLoading, setOtpLoading]     = useState(false);
//   const otpRefs = useRef([]);

//   // ── Countdown Timer ───────────────────────────────────────────────────────────
//   useEffect(() => {
//     if (timeLeft <= 0) { setCanResend(true); return; }
//     const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
//     return () => clearTimeout(t);
//   }, [timeLeft]);

//   const formatTime = (s) =>
//     `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

//   // ── Password Login ────────────────────────────────────────────────────────────
//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!form.userName.trim()) { toast.error("Username टाका ✅"); return; }
//     if (!form.password)        { toast.error("Password टाका ✅"); return; }
//     try {
//       setLoading(true);
//       const res  = await axiosInstance.post("/login", { userName: form.userName, password: form.password });
//       const data = res.data;
//       if (!data.success) { toast.error(data.message); return; }
//       const userPayload = {
//         id:                 data.user.id,
//         fullName:           data.user.fullName,
//         userName:           data.user.userName,
//         role:               data.user.role,
//         departmentName:     data.user.departmentName,
//         office:             data.user.office,
//         departmentCategory: data.user.departmentCategory,
//       };
//       if (data.token) localStorage.setItem("token", data.token);
//       dispatch(loginSuccess(userPayload));
//       localStorage.setItem("authUser", JSON.stringify(userPayload));
//       localStorage.setItem("userRole", data.user.role);
//       toast.success("Login successful ✅");
//       navigate("/dashboard");
//     } catch (error) {
//       const msg = error?.response?.data?.message || "Server error. Backend चालू आहे का?";
//       toast.error(msg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ── Send OTP ──────────────────────────────────────────────────────────────────
//   const sendOtp = async () => {
//     const mobile = mobileNo.trim();
//     if (!/^[0-9]{10}$/.test(mobile)) { toast.error("10 अंकी valid mobile number टाका!"); return; }

//     setOtpLoading(true);
//     const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
//     setGeneratedOtp(newOtp);
//     setTimeLeft(60);
//     setCanResend(false);
//     setOtp(["", "", "", "", "", ""]);

//     const smsText = `Dear Citizen ${newOtp} is OTP for VVCMC Divyang Kalyan Management System login for citizen registration.VVCMC`;
//     const smsApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=67e12059b220a&route=&sender=VVMCDM&mobileno=${mobile}&text=${encodeURIComponent(smsText)}`;

//     try {
//       await fetch(smsApiUrl, { method: "GET", mode: "no-cors" });
//       toast.success(`OTP पाठवला ******${mobile.slice(-3)} वर`);
//       setOtpStep("otp");
//       setTimeout(() => otpRefs.current[0]?.focus(), 120);
//     } catch (err) {
//       console.error("Send OTP Error:", err);
//       toast.error("OTP पाठवण्यात अयशस्वी");
//     } finally {
//       setOtpLoading(false);
//     }
//   };

//   // ── OTP Box Handlers ──────────────────────────────────────────────────────────
//   const handleOtpChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;
//     const next = [...otp]; next[index] = value; setOtp(next);
//     if (value && index < 5) otpRefs.current[index + 1]?.focus();
//   };
//   const handleOtpKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) otpRefs.current[index - 1]?.focus();
//   };
//   const handleOtpPaste = (e) => {
//     e.preventDefault();
//     const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
//     const next = [...otp];
//     pasted.split("").forEach((ch, i) => { next[i] = ch; });
//     setOtp(next);
//     otpRefs.current[Math.min(pasted.length, 5)]?.focus();
//   };

//   // ── Verify OTP → Login ────────────────────────────────────────────────────────
//   const verifyOtp = async () => {
//     const entered = otp.join("");
//     if (entered.length < 6) { toast.error("6 अंकी OTP टाका!"); return; }
//     if (timeLeft <= 0)       { toast.error("OTP expire झाला! पुन्हा पाठवा."); return; }

//     if (entered !== generatedOtp) {
//       toast.error("❌ चुकीचा OTP!");
//       setOtp(["", "", "", "", "", ""]);
//       otpRefs.current[0]?.focus();
//       return;
//     }

//     // OTP matched → fetch user by mobile & login
//     try {
//       setOtpLoading(true);
//       const res  = await axiosInstance.post("/loginByMobile", { mobileNo: mobileNo.trim() });
//       const data = res.data;
//       if (!data.success) { toast.error(data.message || "Mobile number नोंदणीकृत नाही"); return; }
//       const userPayload = {
//         id:                 data.user.id,
//         fullName:           data.user.fullName,
//         userName:           data.user.userName,
//         role:               data.user.role,
//         departmentName:     data.user.departmentName,
//         office:             data.user.office,
//         departmentCategory: data.user.departmentCategory,
//       };
//       if (data.token) localStorage.setItem("token", data.token);
//       dispatch(loginSuccess(userPayload));
//       localStorage.setItem("authUser", JSON.stringify(userPayload));
//       localStorage.setItem("userRole", data.user.role);
//       toast.success("✅ Login यशस्वी!");
//       navigate("/dashboard");
//     } catch (err) {
//       const msg = err?.response?.data?.message || "Server error";
//       toast.error(msg);
//     } finally {
//       setOtpLoading(false);
//     }
//   };

//   const switchTab = (t) => {
//     setTab(t);
//     setOtpStep("mobile");
//     setOtp(["", "", "", "", "", ""]);
//     setMobileNo("");
//     setTimeLeft(0);
//   };

//   return (
//     <>
//       {(loading || otpLoading) && <Loader />}

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

//         *{box-sizing:border-box;margin:0;padding:0;}

//         .lp-root{
//           min-height:100vh;width:100%;position:relative;
//           display:flex;align-items:center;justify-content:flex-end;
//           font-family:'DM Sans',sans-serif;overflow:hidden;
//         }
//         .lp-bg{
//           position:absolute;inset:0;
//           background-size:cover;background-position:center;
//           filter:brightness(0.6) saturate(1.05);
//           transition:transform 10s ease;
//         }
//         .lp-root:hover .lp-bg{transform:scale(1.025);}
//         .lp-overlay{
//           position:absolute;inset:0;
//           background:linear-gradient(
//             108deg,
//             rgba(4,12,30,0.04) 0%,
//             rgba(4,12,30,0.1) 30%,
//             rgba(4,12,30,0.68) 62%,
//             rgba(4,12,30,0.9) 100%
//           );
//         }
//         .lp-stripe{
//           position:absolute;top:0;left:0;right:0;height:4px;
//           background:linear-gradient(90deg,#ff6b00 0%,#ff9900 30%,#1e40af 70%,#3b82f6 100%);
//           z-index:10;
//         }

//         .lp-hero{position:absolute;left:56px;bottom:56px;z-index:5;max-width:460px;}
//         .lp-badge{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,0.11);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.2);border-radius:100px;padding:5px 14px;margin-bottom:16px;}
//         .lp-bdot{width:6px;height:6px;border-radius:50%;background:#4ade80;box-shadow:0 0 7px #4ade80;animation:blink 2s infinite;}
//         @keyframes blink{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.45;transform:scale(1.6);}}
//         .lp-badge span{font-size:11px;color:rgba(255,255,255,0.88);font-weight:500;letter-spacing:0.4px;}
//         .lp-title{font-family:'Crimson Pro',serif;font-size:50px;font-weight:700;color:#fff;line-height:1.1;text-shadow:0 2px 24px rgba(0,0,0,0.55);margin-bottom:6px;}
//         .lp-title em{color:#fbbf24;font-style:normal;}
//         .lp-sub{font-size:13px;color:rgba(255,255,255,0.58);margin-bottom:22px;letter-spacing:0.2px;}
//         .lp-stats{display:flex;gap:18px;}
//         .lp-stat{display:flex;flex-direction:column;gap:2px;}
//         .lp-snum{font-family:'Crimson Pro',serif;font-size:24px;font-weight:700;color:#fbbf24;line-height:1;}
//         .lp-slbl{font-size:9.5px;color:rgba(255,255,255,0.42);text-transform:uppercase;letter-spacing:0.9px;}
//         .lp-ssep{width:1px;background:rgba(255,255,255,0.14);align-self:stretch;}

//         .lp-card{
//           position:relative;z-index:10;
//           width:340px;margin-right:72px;
//           background:#fff;border-radius:18px;
//           padding:28px 28px 24px;
//           box-shadow:0 28px 64px rgba(0,0,0,0.48),0 0 0 1px rgba(255,255,255,0.06);
//         }

//         .lp-logo-row{display:flex;align-items:center;gap:11px;margin-bottom:18px;}
//         .lp-logo-img{width:48px;height:48px;object-fit:contain;flex-shrink:0;}
//         .lp-logo-name{font-family:'Tiro Devanagari Marathi',serif;font-size:14.5px;font-weight:700;color:#1e3a5f;line-height:1.28;}
//         .lp-hr{height:1px;background:#f0f1f3;margin-bottom:16px;}

//         /* ── TABS ── */
//         .lp-tabs{display:flex;gap:0;margin-bottom:18px;background:#f1f5f9;border-radius:10px;padding:3px;}
//         .lp-tab{
//           flex:1;padding:8px 0;border:none;border-radius:8px;
//           font-size:11.5px;font-weight:600;font-family:'DM Sans',sans-serif;
//           cursor:pointer;transition:all .2s;color:#64748b;background:transparent;
//         }
//         .lp-tab.active{
//           background:#fff;color:#1e40af;
//           box-shadow:0 1px 6px rgba(0,0,0,0.10);
//         }

//         .lp-ftitle{font-size:14px;font-weight:700;color:#111827;margin-bottom:14px;}

//         .lp-fld{margin-bottom:12px;}
//         .lp-flbl{display:block;font-size:10px;font-weight:600;color:#374151;letter-spacing:0.55px;text-transform:uppercase;margin-bottom:5px;}
//         .lp-fwrap{position:relative;}
//         .lp-ficon{position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:12px;color:#adb5bd;pointer-events:none;}
//         .lp-finput{
//           width:100%;padding:9.5px 10px 9.5px 32px;
//           border:1.5px solid #e5e7eb;border-radius:8px;
//           font-size:12.5px;color:#111827;background:#f8f9fb;
//           outline:none;transition:all 0.18s;font-family:'DM Sans',sans-serif;
//         }
//         .lp-finput:focus{border-color:#3b82f6;background:#fff;box-shadow:0 0 0 3px rgba(59,130,246,0.1);}
//         .lp-finput::placeholder{color:#c8cdd5;font-size:12px;}
//         .lp-pbtn{position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:13px;color:#adb5bd;padding:0;display:flex;align-items:center;}
//         .lp-pbtn:hover{color:#6b7280;}

//         /* mobile prefix */
//         .lp-prefix{position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:11px;font-weight:700;color:#374151;pointer-events:none;}
//         .lp-finput.with-prefix{padding-left:52px;}

//         /* OTP boxes */
//         .otp-row{display:flex;gap:6px;justify-content:center;margin-bottom:14px;}
//         .otp-box{
//           width:40px;height:46px;border:1.5px solid #e5e7eb;border-radius:10px;
//           font-size:20px;font-weight:800;text-align:center;color:#111827;
//           font-family:'DM Sans',sans-serif;outline:none;background:#f8f9fb;
//           transition:all .18s;
//         }
//         .otp-box:focus{border-color:#3b82f6;background:#fff;box-shadow:0 0 0 3px rgba(59,130,246,0.1);}
//         .otp-box:not(:placeholder-shown){border-color:#16a34a;background:#f0fdf4;}

//         /* timer */
//         .otp-timer{text-align:center;font-size:11.5px;color:#64748b;margin-bottom:10px;}
//         .otp-timer strong{font-size:13px;}
//         .resend-btn{background:none;border:none;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;cursor:pointer;transition:all .2s;}
//         .resend-btn:disabled{color:#94a3b8;cursor:not-allowed;}
//         .resend-btn:not(:disabled){color:#f97316;}
//         .resend-btn:not(:disabled):hover{text-decoration:underline;}

//         /* back link */
//         .otp-back{background:none;border:none;font-family:'DM Sans',sans-serif;font-size:11.5px;font-weight:600;color:#64748b;cursor:pointer;display:flex;align-items:center;gap:3px;margin-bottom:12px;padding:0;transition:color .2s;}
//         .otp-back:hover{color:#f97316;}

//         .lp-sbtn{
//           width:100%;padding:10.5px;margin-top:4px;
//           background:linear-gradient(135deg,#1e3fa3 0%,#3b82f6 100%);
//           color:#fff;font-size:12.5px;font-weight:600;letter-spacing:0.6px;
//           border:none;border-radius:8px;cursor:pointer;
//           transition:all 0.22s;position:relative;overflow:hidden;
//           box-shadow:0 4px 14px rgba(59,130,246,0.36);
//           font-family:'DM Sans',sans-serif;
//         }
//         .lp-sbtn::after{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent);transition:left 0.45s;}
//         .lp-sbtn:hover::after{left:100%;}
//         .lp-sbtn:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 6px 20px rgba(59,130,246,0.46);}
//         .lp-sbtn:disabled{opacity:0.55;cursor:not-allowed;}
//         .lp-sbtn.green{background:linear-gradient(135deg,#16a34a,#22c55e);box-shadow:0 4px 14px rgba(22,163,74,0.36);}
//         .lp-sbtn.orange{background:linear-gradient(135deg,#f97316,#ea580c);box-shadow:0 4px 14px rgba(249,115,22,0.36);}

//         .lp-or{display:flex;align-items:center;gap:9px;margin:13px 0 0;}
//         .lp-orl{flex:1;height:1px;background:#ebebeb;}
//         .lp-or span{font-size:10.5px;color:#b5bcc8;}
//         .lp-reg{margin-top:11px;text-align:center;font-size:11.5px;color:#6b7280;}
//         .lp-reg a{color:#1e40af;font-weight:600;text-decoration:none;margin-left:3px;}
//         .lp-reg a:hover{text-decoration:underline;}

//         .lp-cfooter{margin-top:16px;padding-top:13px;border-top:1px solid #f3f4f6;display:flex;align-items:center;justify-content:center;gap:5px;}
//         .lp-cfdot{width:5px;height:5px;border-radius:50%;background:#4ade80;box-shadow:0 0 5px #4ade80;}
//         .lp-cfooter span{font-size:10px;color:#b5bcc8;letter-spacing:0.25px;}

//         @keyframes fadeUp{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
//         .fade-up{animation:fadeUp .28s ease both;}

//         @media(max-width:768px){
//           .lp-hero{display:none;}
//           .lp-card{margin-right:0;width:88%;max-width:360px;}
//           .lp-root{justify-content:center;}
//         }
//       `}</style>

//       <div className="lp-root">
//         <div className="lp-bg" style={{ backgroundImage: `url(${bgImage})` }} />
//         <div className="lp-overlay" />
//         <div className="lp-stripe" />

//         {/* Hero Left — unchanged */}
//         <div className="lp-hero">
//           <div className="lp-badge">
//             <div className="lp-bdot" />
//             <span>Official Government Portal</span>
//           </div>
//           <h1 className="lp-title">
//             जन संवाद<br />
//             <em>Admin Panel</em>
//           </h1>
//           <p className="lp-sub">Vasai-Virar City Municipal Corporation</p>
//           <div className="lp-stats">
//             <div className="lp-stat">
//               <span className="lp-snum">8</span>
//               <span className="lp-slbl">Talukas</span>
//             </div>
//             <div className="lp-ssep" />
//             <div className="lp-stat">
//               <span className="lp-snum">2009</span>
//               <span className="lp-slbl">Established</span>
//             </div>
//             <div className="lp-ssep" />
//             <div className="lp-stat">
//               <span className="lp-snum">24/7</span>
//               <span className="lp-slbl">Service</span>
//             </div>
//           </div>
//         </div>

//         {/* Floating Card */}
//         <div className="lp-card">
//           <div className="lp-logo-row">
//             <img src={logo} alt="VVCMC" className="lp-logo-img" />
//             <div className="lp-logo-name">वसई-विरार शहर<br />महानगरपालिका</div>
//           </div>
//           <div className="lp-hr" />

//           {/* ── TABS ── */}
//           <div className="lp-tabs">
//             <button className={`lp-tab ${tab === "password" ? "active" : ""}`} onClick={() => switchTab("password")}>
//               🔒 Password Login
//             </button>
//             <button className={`lp-tab ${tab === "otp" ? "active" : ""}`} onClick={() => switchTab("otp")}>
//               📱 OTP Login
//             </button>
//           </div>

//           {/* ════════ PASSWORD TAB ════════ */}
//           {tab === "password" && (
//             <div className="fade-up">
//               <p className="lp-ftitle">Sign In to Continue</p>
//               <form onSubmit={handleLogin}>
//                 <div className="lp-fld">
//                   <label className="lp-flbl">Username</label>
//                   <div className="lp-fwrap">
//                     <span className="lp-ficon">👤</span>
//                     <input className="lp-finput" name="userName"
//                       placeholder="Enter your username"
//                       value={form.userName} onChange={handleChange}
//                       autoComplete="username" />
//                   </div>
//                 </div>
//                 <div className="lp-fld">
//                   <label className="lp-flbl">Password</label>
//                   <div className="lp-fwrap">
//                     <span className="lp-ficon">🔒</span>
//                     <input className="lp-finput"
//                       type={showPass ? "text" : "password"}
//                       name="password"
//                       placeholder="Enter your password"
//                       value={form.password} onChange={handleChange}
//                       autoComplete="current-password" />
//                     <button type="button" className="lp-pbtn"
//                       onClick={() => setShowPass(!showPass)} tabIndex={-1}>
//                       {showPass ? "🙈" : "👁️"}
//                     </button>
//                   </div>
//                 </div>
//                 <button type="submit" className="lp-sbtn">SIGN IN →</button>
//               </form>
//             </div>
//           )}

//           {/* ════════ OTP TAB ════════ */}
//           {tab === "otp" && (
//             <div className="fade-up">

//               {/* STEP 1: Mobile Number */}
//               {otpStep === "mobile" && (
//                 <>
//                   <p className="lp-ftitle">Mobile OTP Login</p>
//                   <div className="lp-fld">
//                     <label className="lp-flbl">Mobile Number</label>
//                     <div className="lp-fwrap">
//                       <span className="lp-prefix">🇮🇳 +91</span>
//                       <input
//                         className="lp-finput with-prefix"
//                         type="tel"
//                         maxLength={10}
//                         placeholder="10 अंकी नंबर"
//                         value={mobileNo}
//                         onChange={(e) => setMobileNo(e.target.value.replace(/\D/g, "").slice(0, 10))}
//                         onKeyDown={(e) => e.key === "Enter" && sendOtp()}
//                       />
//                     </div>
//                   </div>
//                   <button
//                     className="lp-sbtn orange"
//                     onClick={sendOtp}
//                     disabled={mobileNo.length !== 10 || otpLoading}
//                   >
//                     {otpLoading ? "⏳ पाठवत आहे..." : "OTP पाठवा →"}
//                   </button>
//                 </>
//               )}

//               {/* STEP 2: Enter OTP */}
//               {otpStep === "otp" && (
//                 <>
//                   <button className="otp-back" onClick={() => { setOtpStep("mobile"); setOtp(["","","","","",""]); }}>
//                     ← मागे जा
//                   </button>
//                   <p className="lp-ftitle">OTP व्हेरिफाय करा</p>
//                   <div style={{ fontSize: 11.5, color: "#64748b", marginBottom: 14 }}>
//                     <span style={{ color: "#f97316", fontWeight: 700 }}>+91 ******{mobileNo.slice(-3)}</span> वर OTP पाठवला
//                   </div>

//                   {/* 6-box OTP input */}
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

//                   {/* Timer & Resend */}
//                   <div className="otp-timer">
//                     {timeLeft > 0 ? (
//                       <>
//                         OTP expire होईल:{" "}
//                         <strong style={{ color: timeLeft <= 15 ? "#dc2626" : "#f97316" }}>
//                           {formatTime(timeLeft)}
//                         </strong>
//                       </>
//                     ) : (
//                       <span style={{ color: "#dc2626", fontWeight: 600 }}>OTP expire झाला!</span>
//                     )}
//                     <div style={{ marginTop: 5 }}>
//                       OTP नाही मिळाला?{" "}
//                       <button className="resend-btn" onClick={sendOtp} disabled={!canResend}>
//                         पुन्हा पाठवा
//                       </button>
//                     </div>
//                   </div>

//                   <button
//                     className="lp-sbtn green"
//                     onClick={verifyOtp}
//                     disabled={otp.join("").length < 6 || otpLoading}
//                   >
//                     {otpLoading ? "⏳ Verifying..." : "✅ Verify & Login"}
//                   </button>
//                 </>
//               )}
//             </div>
//           )}

//           {/* OR + Register — same as original */}
//           <div className="lp-or">
//             <div className="lp-orl" /><span>or</span><div className="lp-orl" />
//           </div>
//           <p className="lp-reg">
//             Don't have an account?
//             <Link to="/register">Create account</Link>
//           </p>

//           <div className="lp-cfooter">
//             <div className="lp-cfdot" />
//             <span>Secure Government Portal · All rights reserved</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



// import React, { useState, useEffect, useRef } from "react";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/slices/authSlice";
// import { useNavigate, Link } from "react-router-dom";
// import bgImage from "../assets/vasaivirarmahangarpalika.jpg";
// import logo from "../assets/vvcmclogo.jpg";
// import axiosInstance from "../services/axiosInstance";
// import Loader from "../components/common/Loader";
// import { toast } from "react-toastify";

// export default function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [tab, setTab] = useState("password");

//   const [form, setForm]         = useState({ userName: "", password: "" });
//   const [loading, setLoading]   = useState(false);
//   const [showPass, setShowPass] = useState(false);

//   const [otpStep, setOtpStep]           = useState("mobile");
//   const [mobileNo, setMobileNo]         = useState("");
//   const [otp, setOtp]                   = useState(["", "", "", "", "", ""]);
//   const [generatedOtp, setGeneratedOtp] = useState("");
//   const [timeLeft, setTimeLeft]         = useState(0);
//   const [canResend, setCanResend]       = useState(false);
//   const [otpLoading, setOtpLoading]     = useState(false);
//   const otpRefs = useRef([]);

//   useEffect(() => {
//     if (timeLeft <= 0) { setCanResend(true); return; }
//     const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
//     return () => clearTimeout(t);
//   }, [timeLeft]);

//   const formatTime = (s) =>
//     `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!form.userName.trim()) { toast.error("Username टाका ✅"); return; }
//     if (!form.password)        { toast.error("Password टाका ✅"); return; }
//     try {
//       setLoading(true);
//       const res  = await axiosInstance.post("/login", { userName: form.userName, password: form.password });
//       const data = res.data;
//       if (!data.success) { toast.error(data.message); return; }
//       const userPayload = {
//         id:                 data.user.id,
//         fullName:           data.user.fullName,
//         userName:           data.user.userName,
//         role:               data.user.role,
//         departmentName:     data.user.departmentName,
//         office:             data.user.office,
//         departmentCategory: data.user.departmentCategory,
//       };
//       if (data.token) localStorage.setItem("token", data.token);
//       dispatch(loginSuccess(userPayload));
//       localStorage.setItem("authUser", JSON.stringify(userPayload));
//       localStorage.setItem("userRole", data.user.role);
//       toast.success("Login successful ✅");
//       navigate("/dashboard");
//     } catch (error) {
//       const msg = error?.response?.data?.message || "Server error. Backend चालू आहे का?";
//       toast.error(msg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const sendOtp = async () => {
//     const mobile = mobileNo.trim();
//     if (!/^[0-9]{10}$/.test(mobile)) { toast.error("10 अंकी valid mobile number टाका!"); return; }
//     setOtpLoading(true);
//     const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
//     setGeneratedOtp(newOtp);
//     setTimeLeft(60);
//     setCanResend(false);
//     setOtp(["", "", "", "", "", ""]);
//     const smsText = `Dear Citizen ${newOtp} is OTP for VVCMC Divyang Kalyan Management System login for citizen registration.VVCMC`;
//     const smsApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=67e12059b220a&route=&sender=VVMCDM&mobileno=${mobile}&text=${encodeURIComponent(smsText)}`;
//     try {
//       await fetch(smsApiUrl, { method: "GET", mode: "no-cors" });
//       toast.success(`OTP पाठवला ******${mobile.slice(-3)} वर`);
//       setOtpStep("otp");
//       setTimeout(() => otpRefs.current[0]?.focus(), 120);
//     } catch (err) {
//       console.error("Send OTP Error:", err);
//       toast.error("OTP पाठवण्यात अयशस्वी");
//     } finally {
//       setOtpLoading(false);
//     }
//   };

//   const handleOtpChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;
//     const next = [...otp]; next[index] = value; setOtp(next);
//     if (value && index < 5) otpRefs.current[index + 1]?.focus();
//   };
//   const handleOtpKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) otpRefs.current[index - 1]?.focus();
//   };
//   const handleOtpPaste = (e) => {
//     e.preventDefault();
//     const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
//     const next = [...otp];
//     pasted.split("").forEach((ch, i) => { next[i] = ch; });
//     setOtp(next);
//     otpRefs.current[Math.min(pasted.length, 5)]?.focus();
//   };

//   const verifyOtp = async () => {
//     const entered = otp.join("");
//     if (entered.length < 6) { toast.error("6 अंकी OTP टाका!"); return; }
//     if (timeLeft <= 0)       { toast.error("OTP expire झाला! पुन्हा पाठवा."); return; }
//     if (entered !== generatedOtp) {
//       toast.error("❌ चुकीचा OTP!");
//       setOtp(["", "", "", "", "", ""]);
//       otpRefs.current[0]?.focus();
//       return;
//     }
//     try {
//       setOtpLoading(true);
//       const res  = await axiosInstance.post("/loginByMobile", { mobileNo: mobileNo.trim() });
//       const data = res.data;
//       if (!data.success) { toast.error(data.message || "Mobile number नोंदणीकृत नाही"); return; }
//       const userPayload = {
//         id:                 data.user.id,
//         fullName:           data.user.fullName,
//         userName:           data.user.userName,
//         role:               data.user.role,
//         departmentName:     data.user.departmentName,
//         office:             data.user.office,
//         departmentCategory: data.user.departmentCategory,
//       };
//       if (data.token) localStorage.setItem("token", data.token);
//       dispatch(loginSuccess(userPayload));
//       localStorage.setItem("authUser", JSON.stringify(userPayload));
//       localStorage.setItem("userRole", data.user.role);
//       toast.success("✅ Login यशस्वी!");
//       navigate("/dashboard");
//     } catch (err) {
//       const msg = err?.response?.data?.message || "Server error";
//       toast.error(msg);
//     } finally {
//       setOtpLoading(false);
//     }
//   };

//   const switchTab = (t) => {
//     setTab(t);
//     setOtpStep("mobile");
//     setOtp(["", "", "", "", "", ""]);
//     setMobileNo("");
//     setTimeLeft(0);
//   };

//   return (
//     <>
//       {(loading || otpLoading) && <Loader />}

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Playfair+Display:wght@500;700;900&family=Outfit:wght@300;400;500;600;700&display=swap');

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         /* ── ROOT — full viewport, bg image ── */
//         .lp-root {
//           min-height: 100vh;
//           width: 100%;
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: flex-end;
//           font-family: 'Outfit', sans-serif;
//           overflow: hidden;
//         }

//         /* Background photo */
//         .lp-bg {
//           position: absolute;
//           inset: 0;
//           background-size: cover;
//           background-position: center;
//           filter: brightness(0.82) saturate(1.1);
//           transition: transform 14s ease;
//         }
//         .lp-root:hover .lp-bg { transform: scale(1.02); }

//         /* ── OVERLAY — #105A67 tint, same opacity levels as before ── */
//         .lp-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             115deg,
//             rgba(16, 90, 103, 0.38) 0%,
//             rgba(16, 90, 103, 0.48) 35%,
//             rgba(16, 90, 103, 0.62) 65%,
//             rgba(16, 90, 103, 0.80) 100%
//           );
//         }

//         /* Thin top accent stripe */
//         .lp-stripe {
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 3px;
//           background: linear-gradient(90deg, #CA9D28 0%, #C9973A 35%, #4CABC1 70%, #5A9E56 100%);
//           z-index: 10;
//         }

//         /* ── HERO LEFT (title + stats) ── */
//         .lp-hero {
//           position: absolute;
//           left: 60px;
//           top: 50%;
//           transform: translateY(-50%);
//           z-index: 5;
//           max-width: 460px;
//         }
//         .lp-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 7px;
//           background: rgba(255,255,255,0.10);
//           backdrop-filter: blur(8px);
//           border: 1px solid rgba(255,255,255,0.22);
//           border-radius: 100px;
//           padding: 4px 14px;
//           margin-bottom: 20px;
//         }
//         .lp-bdot {
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           background: #5dde62;
//           box-shadow: 0 0 7px #5dde62;
//           animation: blink 2s infinite;
//         }
//         @keyframes blink {
//           0%,100% { opacity:1; transform:scale(1); }
//           50%      { opacity:0.35; transform:scale(1.8); }
//         }
//         .lp-badge span {
//           font-size: 11px;
//           color: rgba(255,255,255,0.85);
//           font-weight: 500;
//           letter-spacing: 0.4px;
//         }
//         .lp-title {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 58px;
//           font-weight: 700;
//           color: #fff;
//           line-height: 1.08;
//           text-shadow: 0 2px 28px rgba(0,0,0,0.5);
//           margin-bottom: 8px;
//         }
//         .lp-title em {
//           display: block;
//           font-family: 'Playfair Display', serif;
//           font-size: 38px;
//           font-weight: 500;
//           font-style: normal;
//           color: #F5E7C2;
//           margin-top: 2px;
//         }
//         .lp-sub {
//           font-size: 13px;
//           color: rgba(255,255,255,0.60);
//           margin-bottom: 28px;
//           letter-spacing: 0.25px;
//         }
//         .lp-stats { display: flex; gap: 24px; align-items: center; }
//         .lp-stat  { display: flex; flex-direction: column; gap: 3px; }
//         .lp-snum  {
//           font-family: 'Playfair Display', serif;
//           font-size: 30px;
//           font-weight: 700;
//           color: #C9973A;
//           line-height: 1;
//         }
//         .lp-slbl {
//           font-size: 9px;
//           color: rgba(255,255,255,0.40);
//           text-transform: uppercase;
//           letter-spacing: 1.3px;
//         }
//         .lp-ssep {
//           width: 1px; height: 38px;
//           background: rgba(255,255,255,0.15);
//         }

//         /* ══════════════════════════════════════
//            CARD — matches reference screenshot:
//            frosted glass, rounded, right-aligned,
//            labels outside white inputs, no inner panel
//         ══════════════════════════════════════ */
//         .lp-card {
//           position: relative;
//           z-index: 10;
//           width: 400px;
//           margin-right: 80px;
//           background: rgba(16, 90, 103, 0.28);
//           backdrop-filter: blur(28px) saturate(1.6);
//           -webkit-backdrop-filter: blur(28px) saturate(1.6);
//           border-radius: 24px;
//           border: 1px solid rgba(255,255,255,0.18);
//           padding: 36px 34px 30px;
//           box-shadow:
//             0 24px 64px rgba(0,0,0,0.45),
//             inset 0 1px 0 rgba(255,255,255,0.12);
//           animation: cardSlideIn .4s cubic-bezier(.22,.9,.36,1) both;
//         }
//         @keyframes cardSlideIn {
//           from { opacity:0; transform:translateX(28px); }
//           to   { opacity:1; transform:translateX(0); }
//         }

//         /* ── Logo row ── */
//         .lp-logo-row {
//           display: flex;
//           align-items: center;
//           gap: 13px;
//           margin-bottom: 22px;
//           padding-bottom: 18px;
//           border-bottom: 1px solid rgba(255,255,255,0.12);
//         }
//         .lp-logo-img {
//           width: 52px; height: 52px;
//           object-fit: contain;
//           border-radius: 50%;
//           border: 2px solid rgba(76,171,193,0.55);
//           box-shadow: 0 0 16px rgba(76,171,193,0.3);
//           flex-shrink: 0;
//         }
//         .lp-logo-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 14.5px;
//           font-weight: 700;
//           color: #fff;
//           line-height: 1.32;
//           text-shadow: 0 1px 8px rgba(0,0,0,0.3);
//         }

//         /* ── TABS — pill style like reference ── */
//         .lp-tabs {
//           display: flex;
//           gap: 0;
//           margin-bottom: 24px;
//           background: rgba(0,0,0,0.22);
//           border-radius: 12px;
//           padding: 4px;
//           border: 1px solid rgba(255,255,255,0.10);
//         }
//         .lp-tab {
//           flex: 1;
//           padding: 9px 0;
//           border: none;
//           border-radius: 9px;
//           font-size: 12px;
//           font-weight: 600;
//           font-family: 'Outfit', sans-serif;
//           cursor: pointer;
//           transition: all .22s;
//           color: rgba(255,255,255,0.52);
//           background: transparent;
//           letter-spacing: 0.15px;
//         }
//         .lp-tab.active {
//           background: rgba(255,255,255,0.92);
//           color: #105A67;
//           box-shadow: 0 2px 12px rgba(0,0,0,0.18);
//           font-weight: 700;
//         }
//         .lp-tab:not(.active):hover {
//           color: rgba(255,255,255,0.85);
//           background: rgba(255,255,255,0.08);
//         }

//         /* ── FORM — label + white input, like reference ── */
//         .lp-ftitle {
//           font-size: 20px;
//           font-weight: 700;
//           color: #fff;
//           margin-bottom: 20px;
//           font-family: 'Outfit', sans-serif;
//           letter-spacing: -0.2px;
//         }

//         .lp-fld { margin-bottom: 16px; }

//         /* Label: white, above input, like reference */
//         .lp-flbl {
//           display: block;
//           font-size: 13px;
//           font-weight: 500;
//           color: rgba(255,255,255,0.88);
//           margin-bottom: 7px;
//           font-family: 'Outfit', sans-serif;
//         }

//         .lp-fwrap { position: relative; }

//         /* Pure white input like reference screenshot */
//         .lp-finput {
//           width: 100%;
//           padding: 13px 16px 13px 16px;
//           border: none;
//           border-radius: 10px;
//           font-size: 14px;
//           color: #1a1a1a;
//           background: rgba(255,255,255,0.96);
//           outline: none;
//           transition: all 0.18s;
//           font-family: 'Outfit', sans-serif;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.12);
//         }
//         .lp-finput:focus {
//           background: #fff;
//           box-shadow: 0 0 0 3px rgba(76,171,193,0.45), 0 2px 8px rgba(0,0,0,0.10);
//         }
//         .lp-finput::placeholder { color: #aab8b8; font-size: 13.5px; }

//         /* input with left icon padding */
//         .lp-finput.has-icon { padding-left: 42px; }

//         .lp-ficon {
//           position: absolute;
//           left: 14px;
//           top: 50%;
//           transform: translateY(-50%);
//           font-size: 15px;
//           pointer-events: none;
//           opacity: 0.55;
//         }
//         .lp-pbtn {
//           position: absolute;
//           right: 13px;
//           top: 50%;
//           transform: translateY(-50%);
//           background: none;
//           border: none;
//           cursor: pointer;
//           font-size: 15px;
//           color: #888;
//           padding: 0;
//           display: flex;
//           align-items: center;
//           transition: color .2s;
//         }
//         .lp-pbtn:hover { color: #105A67; }

//         /* mobile prefix */
//         .lp-prefix {
//           position: absolute;
//           left: 14px;
//           top: 50%;
//           transform: translateY(-50%);
//           font-size: 12px;
//           font-weight: 700;
//           color: #555;
//           pointer-events: none;
//           white-space: nowrap;
//         }
//         .lp-finput.with-prefix { padding-left: 72px; }

//         /* ── MAIN BUTTON — solid white like reference SIGN IN ── */
//         .lp-sbtn {
//           width: 100%;
//           padding: 13px;
//           margin-top: 6px;
//           background: #4CABC1;
//           color: #fff;
//           font-size: 13.5px;
//           font-weight: 700;
//           letter-spacing: 1px;
//           border: none;
//           border-radius: 10px;
//           cursor: pointer;
//           transition: all 0.22s;
//           position: relative;
//           overflow: hidden;
//           box-shadow: 0 4px 18px rgba(76,171,193,0.5);
//           font-family: 'Outfit', sans-serif;
//           text-transform: uppercase;
//         }
//         .lp-sbtn::after {
//           content: '';
//           position: absolute;
//           top: 0; left: -100%;
//           width: 100%; height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.20), transparent);
//           transition: left 0.4s;
//         }
//         .lp-sbtn:hover::after { left: 100%; }
//         .lp-sbtn:hover:not(:disabled) {
//           background: #3796ae;
//           transform: translateY(-1px);
//           box-shadow: 0 8px 24px rgba(76,171,193,0.6);
//         }
//         .lp-sbtn:disabled { opacity: 0.52; cursor: not-allowed; }

//         /* Gold — Send OTP */
//         .lp-sbtn.orange {
//           background: #C9973A;
//           box-shadow: 0 4px 18px rgba(201,151,58,0.48);
//         }
//         .lp-sbtn.orange:hover:not(:disabled) {
//           background: #b5841f;
//           box-shadow: 0 8px 24px rgba(201,151,58,0.6);
//         }

//         /* Green — Verify */
//         .lp-sbtn.green {
//           background: #5A9E56;
//           box-shadow: 0 4px 18px rgba(90,158,86,0.48);
//         }
//         .lp-sbtn.green:hover:not(:disabled) {
//           background: #4a8a46;
//           box-shadow: 0 8px 24px rgba(90,158,86,0.6);
//         }

//         /* ── OTP boxes ── */
//         .otp-row {
//           display: flex;
//           gap: 8px;
//           justify-content: center;
//           margin-bottom: 16px;
//         }
//         .otp-box {
//           width: 44px; height: 50px;
//           border: none;
//           border-radius: 10px;
//           font-size: 22px;
//           font-weight: 800;
//           text-align: center;
//           color: #1a1a1a;
//           font-family: 'Outfit', sans-serif;
//           outline: none;
//           background: rgba(255,255,255,0.95);
//           transition: all .18s;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.12);
//         }
//         .otp-box:focus {
//           background: #fff;
//           box-shadow: 0 0 0 3px rgba(76,171,193,0.45);
//         }
//         .otp-box:not(:placeholder-shown) {
//           background: #fff;
//           box-shadow: 0 0 0 2px #5A9E56, 0 2px 8px rgba(0,0,0,0.10);
//         }

//         /* ── Timer & resend ── */
//         .otp-timer {
//           text-align: center;
//           font-size: 12px;
//           color: rgba(255,255,255,0.72);
//           margin-bottom: 12px;
//           font-family: 'Outfit', sans-serif;
//         }
//         .otp-timer strong { font-size: 13.5px; }
//         .resend-btn {
//           background: none;
//           border: none;
//           font-family: 'Outfit', sans-serif;
//           font-size: 12.5px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all .2s;
//         }
//         .resend-btn:disabled { color: rgba(255,255,255,0.30); cursor: not-allowed; }
//         .resend-btn:not(:disabled) { color: #C9973A; }
//         .resend-btn:not(:disabled):hover { text-decoration: underline; }

//         /* ── Back button ── */
//         .otp-back {
//           background: none;
//           border: none;
//           font-family: 'Outfit', sans-serif;
//           font-size: 12px;
//           font-weight: 600;
//           color: rgba(255,255,255,0.65);
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           gap: 4px;
//           margin-bottom: 14px;
//           padding: 0;
//           transition: color .2s;
//         }
//         .otp-back:hover { color: #4CABC1; }

//         /* ── OR divider ── */
//         .lp-or {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           margin: 18px 0 0;
//         }
//         .lp-orl { flex: 1; height: 1px; background: rgba(255,255,255,0.22); }
//         .lp-or span { font-size: 12px; color: rgba(255,255,255,0.55); }

//         /* ── Register link ── */
//         .lp-reg {
//           margin-top: 14px;
//           text-align: center;
//           font-size: 13px;
//           color: rgba(255,255,255,0.70);
//           font-family: 'Outfit', sans-serif;
//         }
//         .lp-reg a {
//           color: #fff;
//           font-weight: 700;
//           text-decoration: underline;
//           text-underline-offset: 2px;
//           margin-left: 4px;
//           transition: color .2s;
//         }
//         .lp-reg a:hover { color: #4CABC1; }

//         /* ── Card footer ── */
//         .lp-cfooter {
//           margin-top: 22px;
//           padding-top: 16px;
//           border-top: 1px solid rgba(255,255,255,0.10);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 6px;
//         }
//         .lp-cfdot {
//           width: 5px; height: 5px;
//           border-radius: 50%;
//           background: #5A9E56;
//           box-shadow: 0 0 6px #5A9E56;
//         }
//         .lp-cfooter span {
//           font-size: 10.5px;
//           color: rgba(255,255,255,0.38);
//           letter-spacing: 0.2px;
//         }

//         /* ── Animations ── */
//         @keyframes fadeUp {
//           from { opacity:0; transform:translateY(10px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .fade-up { animation: fadeUp .26s ease both; }

//         /* ── Responsive ── */
//         @media (max-width: 768px) {
//           .lp-hero { display: none; }
//           .lp-card { margin-right: 0; width: 90%; max-width: 400px; }
//           .lp-root { justify-content: center; }
//         }
//       `}</style>

//       <div className="lp-root">
//         {/* Background */}
//         <div className="lp-bg" style={{ backgroundImage: `url(${bgImage})` }} />
//         <div className="lp-overlay" />
//         <div className="lp-stripe" />

//         {/* ── HERO LEFT ── */}
//         <div className="lp-hero">
//           <div className="lp-badge">
//             <div className="lp-bdot" />
//             <span>Official Government Portal</span>
//           </div>
//           <h1 className="lp-title">
//             जन संवाद
//             <em>Admin Panel</em>
//           </h1>
//           <p className="lp-sub">Vasai-Virar City Municipal Corporation</p>
//           <div className="lp-stats">
//             <div className="lp-stat">
//               <span className="lp-snum">8</span>
//               <span className="lp-slbl">Talukas</span>
//             </div>
//             <div className="lp-ssep" />
//             <div className="lp-stat">
//               <span className="lp-snum">2009</span>
//               <span className="lp-slbl">Established</span>
//             </div>
//             <div className="lp-ssep" />
//             <div className="lp-stat">
//               <span className="lp-snum">24/7</span>
//               <span className="lp-slbl">Service</span>
//             </div>
//           </div>
//         </div>

//         {/* ── GLASS CARD ── */}
//         <div className="lp-card">

//           {/* Logo */}
//           <div className="lp-logo-row">
//             <img src={logo} alt="VVCMC" className="lp-logo-img" />
//             <div className="lp-logo-name">वसई-विरार शहर<br />महानगरपालिका</div>
//           </div>

//           {/* Tabs */}
//           <div className="lp-tabs">
//             <button
//               className={`lp-tab ${tab === "password" ? "active" : ""}`}
//               onClick={() => switchTab("password")}
//             >
//               🔒 Password Login
//             </button>
//             <button
//               className={`lp-tab ${tab === "otp" ? "active" : ""}`}
//               onClick={() => switchTab("otp")}
//             >
//               📱 OTP Login
//             </button>
//           </div>

//           {/* ════ PASSWORD TAB ════ */}
//           {tab === "password" && (
//             <div className="fade-up">
//               <p className="lp-ftitle">Sign In to Continue</p>
//               <form onSubmit={handleLogin}>
//                 <div className="lp-fld">
//                   <label className="lp-flbl">Username</label>
//                   <div className="lp-fwrap">
//                     <span className="lp-ficon">👤</span>
//                     <input
//                       className="lp-finput has-icon"
//                       name="userName"
//                       placeholder="Enter your username"
//                       value={form.userName}
//                       onChange={handleChange}
//                       autoComplete="username"
//                     />
//                   </div>
//                 </div>
//                 <div className="lp-fld">
//                   <label className="lp-flbl">Password</label>
//                   <div className="lp-fwrap">
//                     <span className="lp-ficon">🔒</span>
//                     <input
//                       className="lp-finput has-icon"
//                       type={showPass ? "text" : "password"}
//                       name="password"
//                       placeholder="Enter your password"
//                       value={form.password}
//                       onChange={handleChange}
//                       autoComplete="current-password"
//                       style={{ paddingRight: 42 }}
//                     />
//                     <button
//                       type="button"
//                       className="lp-pbtn"
//                       onClick={() => setShowPass(!showPass)}
//                       tabIndex={-1}
//                     >
//                       {showPass ? "🙈" : "👁️"}
//                     </button>
//                   </div>
//                 </div>
//                 <button type="submit" className="lp-sbtn">SIGN IN →</button>
//               </form>

//               <div className="lp-or">
//                 <div className="lp-orl" /><span>or</span><div className="lp-orl" />
//               </div>
//               <p className="lp-reg">
//                 Don't have an account?
//                 <Link to="/register">Create account</Link>
//               </p>
//             </div>
//           )}

//           {/* ════ OTP TAB ════ */}
//           {tab === "otp" && (
//             <div className="fade-up">

//               {/* STEP 1 — Mobile */}
//               {otpStep === "mobile" && (
//                 <>
//                   <p className="lp-ftitle">Mobile OTP Login</p>
//                   <div className="lp-fld">
//                     <label className="lp-flbl">Mobile Number</label>
//                     <div className="lp-fwrap">
//                       <span className="lp-prefix">🇮🇳 +91</span>
//                       <input
//                         className="lp-finput with-prefix"
//                         type="tel"
//                         maxLength={10}
//                         placeholder="10 अंकी नंबर"
//                         value={mobileNo}
//                         onChange={(e) => setMobileNo(e.target.value.replace(/\D/g, "").slice(0, 10))}
//                         onKeyDown={(e) => e.key === "Enter" && sendOtp()}
//                       />
//                     </div>
//                   </div>
//                   <button
//                     className="lp-sbtn orange"
//                     onClick={sendOtp}
//                     disabled={mobileNo.length !== 10 || otpLoading}
//                   >
//                     {otpLoading ? "⏳ पाठवत आहे..." : "OTP पाठवा →"}
//                   </button>

//                   <div className="lp-or">
//                     <div className="lp-orl" /><span>or</span><div className="lp-orl" />
//                   </div>
//                   <p className="lp-reg">
//                     Don't have an account?
//                     <Link to="/register">Create account</Link>
//                   </p>
//                 </>
//               )}

//               {/* STEP 2 — OTP entry */}
//               {otpStep === "otp" && (
//                 <>
//                   <button
//                     className="otp-back"
//                     onClick={() => { setOtpStep("mobile"); setOtp(["","","","","",""]); }}
//                   >
//                     ← मागे जा
//                   </button>
//                   <p className="lp-ftitle">OTP व्हेरिफाय करा</p>
//                   <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.68)", marginBottom: 16, fontFamily: "'Outfit',sans-serif" }}>
//                     <span style={{ color: "#C9973A", fontWeight: 700 }}>+91 ******{mobileNo.slice(-3)}</span> वर OTP पाठवला
//                   </p>

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
//                         OTP expire होईल:{" "}
//                         <strong style={{ color: timeLeft <= 15 ? "#ff6b6b" : "#C9973A" }}>
//                           {formatTime(timeLeft)}
//                         </strong>
//                       </>
//                     ) : (
//                       <span style={{ color: "#ff6b6b", fontWeight: 600 }}>OTP expire झाला!</span>
//                     )}
//                     <div style={{ marginTop: 6 }}>
//                       OTP नाही मिळाला?{" "}
//                       <button className="resend-btn" onClick={sendOtp} disabled={!canResend}>
//                         पुन्हा पाठवा
//                       </button>
//                     </div>
//                   </div>

//                   <button
//                     className="lp-sbtn green"
//                     onClick={verifyOtp}
//                     disabled={otp.join("").length < 6 || otpLoading}
//                   >
//                     {otpLoading ? "⏳ Verifying..." : "✅ Verify & Login"}
//                   </button>
//                 </>
//               )}
//             </div>
//           )}

//           {/* Footer */}
//           <div className="lp-cfooter">
//             <div className="lp-cfdot" />
//             <span>Secure Government Portal · All rights reserved</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";
import { useNavigate, Link } from "react-router-dom";
import bgImage from "../assets/vasaivirarmahangarpalika.jpg";
import logo from "../assets/vvcmclogo.jpg";
import axiosInstance from "../services/axiosInstance";
import Loader from "../components/common/Loader";
import { toast } from "react-toastify";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tab, setTab] = useState("password");

  const [form, setForm]         = useState({ userName: "", password: "" });
  const [loading, setLoading]   = useState(false);
  const [showPass, setShowPass] = useState(false);

  const [otpStep, setOtpStep]           = useState("mobile");
  const [mobileNo, setMobileNo]         = useState("");
  const [otp, setOtp]                   = useState(["", "", "", "", "", ""]);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [timeLeft, setTimeLeft]         = useState(0);
  const [canResend, setCanResend]       = useState(false);
  const [otpLoading, setOtpLoading]     = useState(false);
  const otpRefs = useRef([]);

  useEffect(() => {
    if (timeLeft <= 0) { setCanResend(true); return; }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft]);

  const formatTime = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!form.userName.trim()) { toast.error("Username टाका ✅"); return; }
    if (!form.password)        { toast.error("Password टाका ✅"); return; }
    try {
      setLoading(true);
      const res  = await axiosInstance.post("/login", { userName: form.userName, password: form.password });
      const data = res.data;
      if (!data.success) { toast.error(data.message); return; }
      const userPayload = {
        id:                 data.user.id,
        fullName:           data.user.fullName,
        userName:           data.user.userName,
        role:               data.user.role,
        departmentName:     data.user.departmentName,
        office:             data.user.office,
        departmentCategory: data.user.departmentCategory,
      };
      if (data.token) localStorage.setItem("token", data.token);
      dispatch(loginSuccess(userPayload));
      localStorage.setItem("authUser", JSON.stringify(userPayload));
      localStorage.setItem("userRole", data.user.role);
      toast.success("Login successful ✅");
      navigate("/dashboard");
    } catch (error) {
      const msg = error?.response?.data?.message || "Server error. Backend चालू आहे का?";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const sendOtp = async () => {
    const mobile = mobileNo.trim();
    if (!/^[0-9]{10}$/.test(mobile)) { toast.error("10 अंकी valid mobile number टाका!"); return; }
    setOtpLoading(true);
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    setTimeLeft(60);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    const smsText = `Dear Citizen ${newOtp} is OTP for VVCMC Divyang Kalyan Management System login for citizen registration.VVCMC`;
    const smsApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=67e12059b220a&route=&sender=VVMCDM&mobileno=${mobile}&text=${encodeURIComponent(smsText)}`;
    try {
      await fetch(smsApiUrl, { method: "GET", mode: "no-cors" });
      toast.success(`OTP पाठवला ******${mobile.slice(-3)} वर`);
      setOtpStep("otp");
      setTimeout(() => otpRefs.current[0]?.focus(), 120);
    } catch (err) {
      console.error("Send OTP Error:", err);
      toast.error("OTP पाठवण्यात अयशस्वी");
    } finally {
      setOtpLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const next = [...otp]; next[index] = value; setOtp(next);
    if (value && index < 5) otpRefs.current[index + 1]?.focus();
  };
  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) otpRefs.current[index - 1]?.focus();
  };
  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const next = [...otp];
    pasted.split("").forEach((ch, i) => { next[i] = ch; });
    setOtp(next);
    otpRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const verifyOtp = async () => {
    const entered = otp.join("");
    if (entered.length < 6) { toast.error("6 अंकी OTP टाका!"); return; }
    if (timeLeft <= 0)       { toast.error("OTP expire झाला! पुन्हा पाठवा."); return; }
    if (entered !== generatedOtp) {
      toast.error("❌ चुकीचा OTP!");
      setOtp(["", "", "", "", "", ""]);
      otpRefs.current[0]?.focus();
      return;
    }
    try {
      setOtpLoading(true);
      const res  = await axiosInstance.post("/loginByMobile", { mobileNo: mobileNo.trim() });
      const data = res.data;
      if (!data.success) { toast.error(data.message || "Mobile number नोंदणीकृत नाही"); return; }
      const userPayload = {
        id:                 data.user.id,
        fullName:           data.user.fullName,
        userName:           data.user.userName,
        role:               data.user.role,
        departmentName:     data.user.departmentName,
        office:             data.user.office,
        departmentCategory: data.user.departmentCategory,
      };
      if (data.token) localStorage.setItem("token", data.token);
      dispatch(loginSuccess(userPayload));
      localStorage.setItem("authUser", JSON.stringify(userPayload));
      localStorage.setItem("userRole", data.user.role);
      toast.success("✅ Login यशस्वी!");
      navigate("/dashboard");
    } catch (err) {
      const msg = err?.response?.data?.message || "Server error";
      toast.error(msg);
    } finally {
      setOtpLoading(false);
    }
  };

  const switchTab = (t) => {
    setTab(t);
    setOtpStep("mobile");
    setOtp(["", "", "", "", "", ""]);
    setMobileNo("");
    setTimeLeft(0);
  };

  return (
    <>
      {(loading || otpLoading) && <Loader />}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Playfair+Display:wght@500;700;900&family=Outfit:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── ROOT — full viewport, bg image ── */
        .lp-root {
          min-height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
        }

        /* Background photo */
        .lp-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: brightness(0.82) saturate(1.1);
          transition: transform 14s ease;
        }
        .lp-root:hover .lp-bg { transform: scale(1.02); }

        /* ── OVERLAY — #105A67 tint, same opacity levels as before ── */
        .lp-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            115deg,
            rgba(16, 90, 103, 0.38) 0%,
            rgba(16, 90, 103, 0.48) 35%,
            rgba(16, 90, 103, 0.62) 65%,
            rgba(16, 90, 103, 0.80) 100%
          );
        }

        /* Thin top accent stripe */
        .lp-stripe {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #CA9D28 0%, #C9973A 35%, #4CABC1 70%, #5A9E56 100%);
          z-index: 10;
        }

        /* ── HERO LEFT (title + stats) ── */
        .lp-hero {
          position: absolute;
          left: 60px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 5;
          max-width: 460px;
        }
        .lp-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(255,255,255,0.10);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 100px;
          padding: 4px 14px;
          margin-bottom: 20px;
        }
        .lp-bdot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #5dde62;
          box-shadow: 0 0 7px #5dde62;
          animation: blink 2s infinite;
        }
        @keyframes blink {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.35; transform:scale(1.8); }
        }
        .lp-badge span {
          font-size: 11px;
          color: rgba(255,255,255,0.85);
          font-weight: 500;
          letter-spacing: 0.4px;
        }
        .lp-title {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 58px;
          font-weight: 700;
          color: #fff;
          line-height: 1.08;
          text-shadow: 0 2px 28px rgba(0,0,0,0.5);
          margin-bottom: 8px;
        }
        .lp-title em {
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: 38px;
          font-weight: 500;
          font-style: normal;
          color: #F5E7C2;
          margin-top: 2px;
        }
        .lp-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.60);
          margin-bottom: 28px;
          letter-spacing: 0.25px;
        }
        .lp-stats { display: flex; gap: 24px; align-items: center; }
        .lp-stat  { display: flex; flex-direction: column; gap: 3px; }
        .lp-snum  {
          font-family: 'Playfair Display', serif;
          font-size: 30px;
          font-weight: 700;
          color: #C9973A;
          line-height: 1;
        }
        .lp-slbl {
          font-size: 9px;
          color: rgba(255,255,255,0.40);
          text-transform: uppercase;
          letter-spacing: 1.3px;
        }
        .lp-ssep {
          width: 1px; height: 38px;
          background: rgba(255,255,255,0.15);
        }

        /* ══════════════════════════════════════
           CARD — matches reference screenshot:
           frosted glass, rounded, right-aligned,
           labels outside white inputs, no inner panel
        ══════════════════════════════════════ */
        .lp-card {
          position: relative;
          z-index: 10;
          width: 400px;
          margin-right: 80px;
          background: rgba(16, 90, 103, 0.30);
          backdrop-filter: blur(32px) saturate(1.8);
          -webkit-backdrop-filter: blur(32px) saturate(1.8);
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.10);
          padding: 36px 34px 30px;
          box-shadow:
            0 20px 60px rgba(0,0,0,0.35),
            inset 0 1px 0 rgba(255,255,255,0.08);
          animation: cardSlideIn .4s cubic-bezier(.22,.9,.36,1) both;
        }
        @keyframes cardSlideIn {
          from { opacity:0; transform:translateX(28px); }
          to   { opacity:1; transform:translateX(0); }
        }

        /* ── Logo row ── */
        .lp-logo-row {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 22px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }
        .lp-logo-img {
          width: 52px; height: 52px;
          object-fit: contain;
          border-radius: 50%;
          border: 2px solid rgba(76,171,193,0.55);
          box-shadow: 0 0 16px rgba(76,171,193,0.3);
          flex-shrink: 0;
        }
        .lp-logo-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 14.5px;
          font-weight: 700;
          color: #fff;
          line-height: 1.32;
          text-shadow: 0 1px 8px rgba(0,0,0,0.3);
        }

        /* ── TABS — pill style like reference ── */
        .lp-tabs {
          display: flex;
          gap: 0;
          margin-bottom: 24px;
          background: rgba(0,0,0,0.28);
          border-radius: 12px;
          padding: 4px;
          border: 1px solid rgba(255,255,255,0.10);
        }
        .lp-tab {
          flex: 1;
          padding: 9px 0;
          border: none;
          border-radius: 9px;
          font-size: 12px;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          transition: all .22s;
          color: rgba(255,255,255,0.52);
          background: transparent;
          letter-spacing: 0.15px;
        }
        .lp-tab.active {
          background: rgba(255,255,255,0.92);
          color: #105A67;
          box-shadow: 0 2px 12px rgba(0,0,0,0.18);
          font-weight: 700;
        }
        .lp-tab:not(.active):hover {
          color: rgba(255,255,255,0.85);
          background: rgba(255,255,255,0.08);
        }

        /* ── FORM — label + white input, like reference ── */
        .lp-ftitle {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 20px;
          font-family: 'Outfit', sans-serif;
          letter-spacing: -0.2px;
        }

        .lp-fld { margin-bottom: 16px; }

        /* Label: white, above input, like reference */
        .lp-flbl {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.88);
          margin-bottom: 7px;
          font-family: 'Outfit', sans-serif;
        }

        .lp-fwrap { position: relative; }

        /* Frosted glass inputs — same blur effect as card, like reference */
        .lp-finput {
          width: 100%;
          padding: 13px 16px 13px 16px;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          color: #fff;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          outline: none;
          transition: all 0.18s;
          font-family: 'Outfit', sans-serif;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.20), 0 2px 6px rgba(0,0,0,0.10);
        }
        .lp-finput:focus {
          background: rgba(255,255,255,0.26);
          box-shadow: 0 0 0 2px rgba(76,171,193,0.60), inset 0 1px 0 rgba(255,255,255,0.25);
        }
        .lp-finput::placeholder { color: rgba(255,255,255,0.45); font-size: 13.5px; }

        /* input with left icon padding */
        .lp-finput.has-icon { padding-left: 42px; }

        .lp-ficon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 15px;
          pointer-events: none;
          opacity: 0.55;
        }
        .lp-pbtn {
          position: absolute;
          right: 13px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          font-size: 15px;
          color: rgba(255,255,255,0.55);
          padding: 0;
          display: flex;
          align-items: center;
          transition: color .2s;
        }
        .lp-pbtn:hover { color: #fff; }

        /* mobile prefix */
        .lp-prefix {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,0.75);
          pointer-events: none;
          white-space: nowrap;
        }
        .lp-finput.with-prefix { padding-left: 72px; }

        /* ── MAIN BUTTON — solid white like reference SIGN IN ── */
        .lp-sbtn {
          width: 100%;
          padding: 13px;
          margin-top: 6px;
          background: #4CABC1;
          color: #fff;
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 1px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.22s;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 18px rgba(76,171,193,0.5);
          font-family: 'Outfit', sans-serif;
          text-transform: uppercase;
        }
        .lp-sbtn::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.20), transparent);
          transition: left 0.4s;
        }
        .lp-sbtn:hover::after { left: 100%; }
        .lp-sbtn:hover:not(:disabled) {
          background: #3796ae;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(76,171,193,0.6);
        }
        .lp-sbtn:disabled { opacity: 0.52; cursor: not-allowed; }

        /* Gold — Send OTP */
        .lp-sbtn.orange {
          background: #C9973A;
          box-shadow: 0 4px 18px rgba(201,151,58,0.48);
        }
        .lp-sbtn.orange:hover:not(:disabled) {
          background: #b5841f;
          box-shadow: 0 8px 24px rgba(201,151,58,0.6);
        }

        /* Green — Verify */
        .lp-sbtn.green {
          background: #5A9E56;
          box-shadow: 0 4px 18px rgba(90,158,86,0.48);
        }
        .lp-sbtn.green:hover:not(:disabled) {
          background: #4a8a46;
          box-shadow: 0 8px 24px rgba(90,158,86,0.6);
        }

        /* ── OTP boxes ── */
        .otp-row {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-bottom: 16px;
        }
        .otp-box {
          width: 44px; height: 50px;
          border: none;
          border-radius: 10px;
          font-size: 22px;
          font-weight: 800;
          text-align: center;
          color: #fff;
          font-family: 'Outfit', sans-serif;
          outline: none;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all .18s;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.22);
        }
        .otp-box:focus {
          background: rgba(255,255,255,0.28);
          box-shadow: 0 0 0 2px rgba(76,171,193,0.65), inset 0 1px 0 rgba(255,255,255,0.25);
        }
        .otp-box:not(:placeholder-shown) {
          background: rgba(255,255,255,0.24);
          box-shadow: 0 0 0 2px rgba(90,158,86,0.70);
        }

        /* ── Timer & resend ── */
        .otp-timer {
          text-align: center;
          font-size: 12px;
          color: rgba(255,255,255,0.72);
          margin-bottom: 12px;
          font-family: 'Outfit', sans-serif;
        }
        .otp-timer strong { font-size: 13.5px; }
        .resend-btn {
          background: none;
          border: none;
          font-family: 'Outfit', sans-serif;
          font-size: 12.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all .2s;
        }
        .resend-btn:disabled { color: rgba(255,255,255,0.30); cursor: not-allowed; }
        .resend-btn:not(:disabled) { color: #C9973A; }
        .resend-btn:not(:disabled):hover { text-decoration: underline; }

        /* ── Back button ── */
        .otp-back {
          background: none;
          border: none;
          font-family: 'Outfit', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.65);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 14px;
          padding: 0;
          transition: color .2s;
        }
        .otp-back:hover { color: #4CABC1; }

        /* ── OR divider ── */
        .lp-or {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 18px 0 0;
        }
        .lp-orl { flex: 1; height: 1px; background: rgba(255,255,255,0.22); }
        .lp-or span { font-size: 12px; color: rgba(255,255,255,0.55); }

        /* ── Register link ── */
        .lp-reg {
          margin-top: 14px;
          text-align: center;
          font-size: 13px;
          color: rgba(255,255,255,0.70);
          font-family: 'Outfit', sans-serif;
        }
        .lp-reg a {
          color: #fff;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 2px;
          margin-left: 4px;
          transition: color .2s;
        }
        .lp-reg a:hover { color: #4CABC1; }

        /* ── Card footer ── */
        .lp-cfooter {
          margin-top: 22px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.10);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        .lp-cfdot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #5A9E56;
          box-shadow: 0 0 6px #5A9E56;
        }
        .lp-cfooter span {
          font-size: 10.5px;
          color: rgba(255,255,255,0.38);
          letter-spacing: 0.2px;
        }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation: fadeUp .26s ease both; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .lp-hero { display: none; }
          .lp-card { margin-right: 0; width: 90%; max-width: 400px; }
          .lp-root { justify-content: center; }
        }
      `}</style>

      <div className="lp-root">
        {/* Background */}
        <div className="lp-bg" style={{ backgroundImage: `url(${bgImage})` }} />
        <div className="lp-overlay" />
        <div className="lp-stripe" />

        {/* ── HERO LEFT ── */}
        <div className="lp-hero">
          <div className="lp-badge">
            <div className="lp-bdot" />
            <span>Official Government Portal</span>
          </div>
          <h1 className="lp-title">
            जन संवाद
            <em>Admin Panel</em>
          </h1>
          <p className="lp-sub">Vasai-Virar City Municipal Corporation</p>
          <div className="lp-stats">
            <div className="lp-stat">
              <span className="lp-snum">8</span>
              <span className="lp-slbl">Talukas</span>
            </div>
            <div className="lp-ssep" />
            <div className="lp-stat">
              <span className="lp-snum">2009</span>
              <span className="lp-slbl">Established</span>
            </div>
            <div className="lp-ssep" />
            <div className="lp-stat">
              <span className="lp-snum">24/7</span>
              <span className="lp-slbl">Service</span>
            </div>
          </div>
        </div>

        {/* ── GLASS CARD ── */}
        <div className="lp-card">

          {/* Logo */}
          <div className="lp-logo-row">
            <img src={logo} alt="VVCMC" className="lp-logo-img" />
            <div className="lp-logo-name">वसई-विरार शहर<br />महानगरपालिका</div>
          </div>

          {/* Tabs */}
          <div className="lp-tabs">
            <button
              className={`lp-tab ${tab === "password" ? "active" : ""}`}
              onClick={() => switchTab("password")}
            >
              🔒 Password Login
            </button>
            <button
              className={`lp-tab ${tab === "otp" ? "active" : ""}`}
              onClick={() => switchTab("otp")}
            >
              📱 OTP Login
            </button>
          </div>

          {/* ════ PASSWORD TAB ════ */}
          {tab === "password" && (
            <div className="fade-up">
              <p className="lp-ftitle">Sign In to Continue</p>
              <form onSubmit={handleLogin}>
                <div className="lp-fld">
                  <label className="lp-flbl">Username</label>
                  <div className="lp-fwrap">
                    <span className="lp-ficon">👤</span>
                    <input
                      className="lp-finput has-icon"
                      name="userName"
                      placeholder="Enter your username"
                      value={form.userName}
                      onChange={handleChange}
                      autoComplete="username"
                    />
                  </div>
                </div>
                <div className="lp-fld">
                  <label className="lp-flbl">Password</label>
                  <div className="lp-fwrap">
                    <span className="lp-ficon">🔒</span>
                    <input
                      className="lp-finput has-icon"
                      type={showPass ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      value={form.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      style={{ paddingRight: 42 }}
                    />
                    <button
                      type="button"
                      className="lp-pbtn"
                      onClick={() => setShowPass(!showPass)}
                      tabIndex={-1}
                    >
                      {showPass ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>
                <button type="submit" className="lp-sbtn">SIGN IN →</button>
              </form>

              <div className="lp-or">
                <div className="lp-orl" /><span>or</span><div className="lp-orl" />
              </div>
              <p className="lp-reg">
                Don't have an account?
                <Link to="/register">Create account</Link>
              </p>
            </div>
          )}

          {/* ════ OTP TAB ════ */}
          {tab === "otp" && (
            <div className="fade-up">

              {/* STEP 1 — Mobile */}
              {otpStep === "mobile" && (
                <>
                  <p className="lp-ftitle">Mobile OTP Login</p>
                  <div className="lp-fld">
                    <label className="lp-flbl">Mobile Number</label>
                    <div className="lp-fwrap">
                      <span className="lp-prefix">🇮🇳 +91</span>
                      <input
                        className="lp-finput with-prefix"
                        type="tel"
                        maxLength={10}
                        placeholder="10 अंकी नंबर"
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value.replace(/\D/g, "").slice(0, 10))}
                        onKeyDown={(e) => e.key === "Enter" && sendOtp()}
                      />
                    </div>
                  </div>
                  <button
                    className="lp-sbtn orange"
                    onClick={sendOtp}
                    disabled={mobileNo.length !== 10 || otpLoading}
                  >
                    {otpLoading ? "⏳ पाठवत आहे..." : "OTP पाठवा →"}
                  </button>

                  <div className="lp-or">
                    <div className="lp-orl" /><span>or</span><div className="lp-orl" />
                  </div>
                  <p className="lp-reg">
                    Don't have an account?
                    <Link to="/register">Create account</Link>
                  </p>
                </>
              )}

              {/* STEP 2 — OTP entry */}
              {otpStep === "otp" && (
                <>
                  <button
                    className="otp-back"
                    onClick={() => { setOtpStep("mobile"); setOtp(["","","","","",""]); }}
                  >
                    ← मागे जा
                  </button>
                  <p className="lp-ftitle">OTP व्हेरिफाय करा</p>
                  <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.68)", marginBottom: 16, fontFamily: "'Outfit',sans-serif" }}>
                    <span style={{ color: "#C9973A", fontWeight: 700 }}>+91 ******{mobileNo.slice(-3)}</span> वर OTP पाठवला
                  </p>

                  <div className="otp-row" onPaste={handleOtpPaste}>
                    {otp.map((digit, i) => (
                      <input
                        key={i}
                        ref={(el) => (otpRefs.current[i] = el)}
                        className="otp-box"
                        type="tel"
                        maxLength={1}
                        value={digit}
                        placeholder="·"
                        onChange={(e) => handleOtpChange(i, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(i, e)}
                      />
                    ))}
                  </div>

                  <div className="otp-timer">
                    {timeLeft > 0 ? (
                      <>
                        OTP expire होईल:{" "}
                        <strong style={{ color: timeLeft <= 15 ? "#ff6b6b" : "#C9973A" }}>
                          {formatTime(timeLeft)}
                        </strong>
                      </>
                    ) : (
                      <span style={{ color: "#ff6b6b", fontWeight: 600 }}>OTP expire झाला!</span>
                    )}
                    <div style={{ marginTop: 6 }}>
                      OTP नाही मिळाला?{" "}
                      <button className="resend-btn" onClick={sendOtp} disabled={!canResend}>
                        पुन्हा पाठवा
                      </button>
                    </div>
                  </div>

                  <button
                    className="lp-sbtn green"
                    onClick={verifyOtp}
                    disabled={otp.join("").length < 6 || otpLoading}
                  >
                    {otpLoading ? "⏳ Verifying..." : "✅ Verify & Login"}
                  </button>
                </>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="lp-cfooter">
            <div className="lp-cfdot" />
            <span>Secure Government Portal · All rights reserved</span>
          </div>
        </div>
      </div>
    </>
  );
}