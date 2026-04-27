

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
//           justify-content: center;
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
//           background: rgba(16, 90, 103, 0.30);
//           backdrop-filter: blur(32px) saturate(1.8);
//           -webkit-backdrop-filter: blur(32px) saturate(1.8);
//           border-radius: 24px;
//           border: 1px solid rgba(255,255,255,0.10);
//           padding: 36px 34px 30px;
//           box-shadow:
//             0 20px 60px rgba(0,0,0,0.35),
//             inset 0 1px 0 rgba(255,255,255,0.08);
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
//           background: rgba(0,0,0,0.28);
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

//         /* Frosted glass inputs — same blur effect as card, like reference */
//         .lp-finput {
//           width: 100%;
//           padding: 13px 16px 13px 16px;
//           border: none;
//           border-radius: 10px;
//           font-size: 14px;
//           color: #fff;
//           background: rgba(255,255,255,0.18);
//           backdrop-filter: blur(12px);
//           -webkit-backdrop-filter: blur(12px);
//           outline: none;
//           transition: all 0.18s;
//           font-family: 'Outfit', sans-serif;
//           box-shadow: inset 0 1px 0 rgba(255,255,255,0.20), 0 2px 6px rgba(0,0,0,0.10);
//         }
//         .lp-finput:focus {
//           background: rgba(255,255,255,0.26);
//           box-shadow: 0 0 0 2px rgba(76,171,193,0.60), inset 0 1px 0 rgba(255,255,255,0.25);
//         }
//         .lp-finput::placeholder { color: rgba(255,255,255,0.45); font-size: 13.5px; }

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
//           color: rgba(255,255,255,0.55);
//           padding: 0;
//           display: flex;
//           align-items: center;
//           transition: color .2s;
//         }
//         .lp-pbtn:hover { color: #fff; }

//         /* mobile prefix */
//         .lp-prefix {
//           position: absolute;
//           left: 14px;
//           top: 50%;
//           transform: translateY(-50%);
//           font-size: 12px;
//           font-weight: 700;
//           color: rgba(255,255,255,0.75);
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
//           color: #fff;
//           font-family: 'Outfit', sans-serif;
//           outline: none;
//           background: rgba(255,255,255,0.18);
//           backdrop-filter: blur(12px);
//           -webkit-backdrop-filter: blur(12px);
//           transition: all .18s;
//           box-shadow: inset 0 1px 0 rgba(255,255,255,0.22);
//         }
//         .otp-box:focus {
//           background: rgba(255,255,255,0.28);
//           box-shadow: 0 0 0 2px rgba(76,171,193,0.65), inset 0 1px 0 rgba(255,255,255,0.25);
//         }
//         .otp-box:not(:placeholder-shown) {
//           background: rgba(255,255,255,0.24);
//           box-shadow: 0 0 0 2px rgba(90,158,86,0.70);
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


// ============================================


// import React, { useState, useEffect, useRef } from "react";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/slices/authSlice";
// import { useNavigate, Link } from "react-router-dom";
// import bgImage from "../assets/vasaivirarmahangarpalika.jpg";
// import logo from "../assets/vvcmclogo.jpg";
// import mayorPhoto from "../assets/ajivir5.jpeg"; // ✅ add mayor photo asset







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

//         .lp-root {
//           min-height: 100vh;
//           width: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-family: 'Outfit', sans-serif;
//           position: relative;
//           overflow: hidden;
//         }
//         .lp-bg {
//           position: absolute;
//           inset: 0;
//           background-size: cover;
//           background-position: center;
//           filter: brightness(0.75) saturate(1.1);
//         }
//         .lp-overlay {
//           position: absolute;
//           inset: 0;
//           background: rgba(10, 60, 70, 0.55);
//         }

//         /* ── TWO-PANEL CARD ── */
//         .lp-panel {
//           position: relative;
//           z-index: 10;
//           display: flex;
//           width: 860px;
//           max-width: 96vw;
//           min-height: 520px;
//           border-radius: 20px;
//           overflow: hidden;
//           box-shadow: 0 32px 80px rgba(0,0,0,0.45);
//         }

//         /* LEFT — white form panel */
//         .lp-left {
//           width: 52%;
//           background: #fff;
//           padding: 36px 38px 32px;
//           display: flex;
//           flex-direction: column;
//         }

//         /* Logo row */
//         .lp-logo-row {
//           display: flex;
//           align-items: center;
//           gap: 11px;
//           margin-bottom: 24px;
//           padding-bottom: 18px;
//           border-bottom: 1px solid #f0f0f0;
//         }
//         .lp-logo-img {
//           width: 46px; height: 46px;
//           object-fit: contain;
//           border-radius: 50%;
//           border: 2px solid #C9973A;
//           flex-shrink: 0;
//         }
//         .lp-logo-name {
//           font-family: 'Outfit', sans-serif;
//           font-size: 13px;
//           font-weight: 700;
//           color: #C9973A;
//           line-height: 1.35;
//         }
//         .lp-logo-sub {
//           font-size: 11px;
//           color: #888;
//           font-weight: 400;
//         }

//         /* Tabs */
//         .lp-tabs {
//           display: flex;
//           gap: 0;
//           margin-bottom: 22px;
//           background: #f4f4f4;
//           border-radius: 10px;
//           padding: 4px;
//         }
//         .lp-tab {
//           flex: 1;
//           padding: 8px 0;
//           border: none;
//           border-radius: 7px;
//           font-size: 12px;
//           font-weight: 600;
//           font-family: 'Outfit', sans-serif;
//           cursor: pointer;
//           transition: all .2s;
//           color: #888;
//           background: transparent;
//         }
//         .lp-tab.active {
//           background: #fff;
//           color: #105A67;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.12);
//           font-weight: 700;
//         }

//         /* Form title */
//         .lp-ftitle {
//           font-size: 22px;
//           font-weight: 700;
//           color: #1a1a1a;
//           margin-bottom: 18px;
//           font-family: 'Outfit', sans-serif;
//         }

//         .lp-fld { margin-bottom: 14px; }
//         .lp-flbl {
//           display: block;
//           font-size: 13px;
//           font-weight: 500;
//           color: #444;
//           margin-bottom: 6px;
//         }
//         .lp-fwrap { position: relative; }
//         .lp-finput {
//           width: 100%;
//           padding: 11px 14px 11px 40px;
//           border: 1.5px solid #e8e8e8;
//           border-radius: 9px;
//           font-size: 14px;
//           color: #1a1a1a;
//           background: #fafafa;
//           outline: none;
//           transition: all 0.18s;
//           font-family: 'Outfit', sans-serif;
//         }
//         .lp-finput:focus {
//           border-color: #4CABC1;
//           background: #fff;
//           box-shadow: 0 0 0 3px rgba(76,171,193,0.12);
//         }
//         .lp-finput::placeholder { color: #bbb; font-size: 13px; }
//         .lp-ficon {
//           position: absolute;
//           left: 13px;
//           top: 50%;
//           transform: translateY(-50%);
//           font-size: 14px;
//           opacity: 0.45;
//           pointer-events: none;
//         }
//         .lp-pbtn {
//           position: absolute;
//           right: 12px;
//           top: 50%;
//           transform: translateY(-50%);
//           background: none;
//           border: none;
//           cursor: pointer;
//           font-size: 14px;
//           color: #aaa;
//           padding: 0;
//         }
//         .lp-prefix {
//           position: absolute;
//           left: 13px;
//           top: 50%;
//           transform: translateY(-50%);
//           font-size: 12px;
//           font-weight: 700;
//           color: #666;
//           pointer-events: none;
//         }
//         .lp-finput.with-prefix { padding-left: 70px; }
//         .lp-finput.no-icon { padding-left: 14px; }

//         /* Buttons */
//         .lp-sbtn {
//           width: 100%;
//           padding: 12px;
//           margin-top: 4px;
//           background: #105A67;
//           color: #fff;
//           font-size: 13.5px;
//           font-weight: 700;
//           letter-spacing: 0.5px;
//           border: none;
//           border-radius: 9px;
//           cursor: pointer;
//           transition: all 0.2s;
//           font-family: 'Outfit', sans-serif;
//         }
//         .lp-sbtn:hover:not(:disabled) { background: #0d4a56; transform: translateY(-1px); }
//         .lp-sbtn:disabled { opacity: 0.5; cursor: not-allowed; }
//         .lp-sbtn.orange { background: #C9973A; }
//         .lp-sbtn.orange:hover:not(:disabled) { background: #b5841f; }
//         .lp-sbtn.green  { background: #5A9E56; }
//         .lp-sbtn.green:hover:not(:disabled)  { background: #4a8a46; }

//         /* Register link */
//         .lp-reg {
//           margin-top: 14px;
//           text-align: center;
//           font-size: 13px;
//           color: #888;
//         }
//         .lp-reg a { color: #105A67; font-weight: 700; margin-left: 4px; }

//         /* OTP boxes */
//         .otp-row {
//           display: flex;
//           gap: 7px;
//           justify-content: center;
//           margin-bottom: 14px;
//         }
//         .otp-box {
//           width: 42px; height: 48px;
//           border: 1.5px solid #e0e0e0;
//           border-radius: 9px;
//           font-size: 20px;
//           font-weight: 800;
//           text-align: center;
//           color: #1a1a1a;
//           font-family: 'Outfit', sans-serif;
//           outline: none;
//           background: #fafafa;
//           transition: all .18s;
//         }
//         .otp-box:focus { border-color: #4CABC1; box-shadow: 0 0 0 3px rgba(76,171,193,0.12); background: #fff; }

//         .otp-timer { text-align: center; font-size: 12px; color: #888; margin-bottom: 12px; }
//         .otp-timer strong { font-size: 13px; color: #C9973A; }
//         .resend-btn { background: none; border: none; font-size: 12.5px; font-weight: 700; cursor: pointer; color: #C9973A; font-family: 'Outfit', sans-serif; }
//         .resend-btn:disabled { color: #ccc; cursor: not-allowed; }
//         .otp-back {
//           background: none; border: none;
//           font-size: 12px; font-weight: 600;
//           color: #888; cursor: pointer;
//           display: flex; align-items: center; gap: 4px;
//           margin-bottom: 12px; padding: 0;
//           font-family: 'Outfit', sans-serif;
//         }
//         .otp-back:hover { color: #4CABC1; }

//         /* RIGHT — teal mayor panel */
//         .lp-right {
//           width: 48%;
//           background: linear-gradient(160deg, #105A67 0%, #0d8a9e 50%, #4CABC1 100%);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           padding: 40px 30px;
//           position: relative;
//           overflow: hidden;
//         }
//         .lp-right::before {
//           content: '';
//           position: absolute;
//           top: -60px; right: -60px;
//           width: 200px; height: 200px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.06);
//         }
//         .lp-right::after {
//           content: '';
//           position: absolute;
//           bottom: -40px; left: -40px;
//           width: 160px; height: 160px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.06);
//         }
//         .lp-mayor-photo-wrap {
//           width: 130px; height: 130px;
//           border-radius: 50%;
//           border: 4px solid #C9973A;
//           overflow: hidden;
//           margin-bottom: 18px;
//           position: relative;
//           z-index: 1;
//           box-shadow: 0 8px 24px rgba(0,0,0,0.25);
//         }
//         .lp-mayor-photo-wrap img {
//           width: 100%; height: 100%;
//           object-fit: cover;
//         }
//         .lp-mayor-badge {
//           position: absolute;
//           bottom: 4px; right: 4px;
//           width: 28px; height: 28px;
//           background: #fff;
//           border-radius: 50%;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 14px;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.2);
//         }
//         .lp-mayor-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 22px;
//           font-weight: 700;
//           color: #fff;
//           text-align: center;
//           margin-bottom: 6px;
//           position: relative; z-index: 1;
//           text-shadow: 0 2px 12px rgba(0,0,0,0.2);
//         }
//         .lp-mayor-title {
//           font-size: 12px;
//           color: rgba(255,255,255,0.75);
//           text-align: center;
//           margin-bottom: 28px;
//           position: relative; z-index: 1;
//         }
//         .lp-progress {
//           width: 120px;
//           height: 4px;
//           background: rgba(255,255,255,0.2);
//           border-radius: 4px;
//           overflow: hidden;
//           margin-bottom: 28px;
//           position: relative; z-index: 1;
//         }
//         .lp-progress-bar {
//           height: 100%;
//           width: 60%;
//           background: #5dde62;
//           border-radius: 4px;
//           animation: progressPulse 2s ease-in-out infinite;
//         }
//         @keyframes progressPulse {
//           0%,100% { width: 55%; }
//           50% { width: 75%; }
//         }
//         .lp-icons-row {
//           display: flex;
//           gap: 20px;
//           position: relative; z-index: 1;
//         }
//         .lp-icon-box {
//           width: 52px; height: 52px;
//           background: rgba(255,255,255,0.12);
//           border: 1px solid rgba(255,255,255,0.2);
//           border-radius: 14px;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 22px;
//         }

//         /* Responsive */
//         @media (max-width: 700px) {
//           .lp-right { display: none; }
//           .lp-left  { width: 100%; }
//           .lp-panel { width: 95vw; }
//         }
//       `}</style>

//       <div className="lp-root">
//         <div className="lp-bg" style={{ backgroundImage: `url(${bgImage})` }} />
//         <div className="lp-overlay" />

//         <div className="lp-panel">

//           {/* ── LEFT — FORM ── */}
//           <div className="lp-left">

//             {/* Logo */}
//             <div className="lp-logo-row">
//               <img src={logo} alt="VVCMC" className="lp-logo-img" />
//               <div>
//                 <div className="lp-logo-name">Vasai-Virar City Municipal Corporation</div>
//                 <div className="lp-logo-sub">जन संवाद</div>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="lp-tabs">
//               <button className={`lp-tab ${tab === "password" ? "active" : ""}`} onClick={() => switchTab("password")}>
//                 🔒 Password Login
//               </button>
//               <button className={`lp-tab ${tab === "otp" ? "active" : ""}`} onClick={() => switchTab("otp")}>
//                 📱 OTP Login
//               </button>
//             </div>

//             {/* ── PASSWORD TAB ── */}
//             {tab === "password" && (
//               <div>
//                 <p className="lp-ftitle">Welcome Back</p>
//                 <p style={{ fontSize: 13, color: "#888", marginBottom: 18, marginTop: -12 }}>Mayor Appointment Portal वर login करा</p>
//                 <form onSubmit={handleLogin}>
//                   <div className="lp-fld">
//                     <label className="lp-flbl">Username</label>
//                     <div className="lp-fwrap">
//                       <span className="lp-ficon">👤</span>
//                       <input className="lp-finput" name="userName" placeholder="Username टाका" value={form.userName} onChange={handleChange} autoComplete="username" />
//                     </div>
//                   </div>
//                   <div className="lp-fld">
//                     <label className="lp-flbl">Password</label>
//                     <div className="lp-fwrap">
//                       <span className="lp-ficon">🔒</span>
//                       <input className="lp-finput" type={showPass ? "text" : "password"} name="password" placeholder="Password टाका" value={form.password} onChange={handleChange} autoComplete="current-password" style={{ paddingRight: 40 }} />
//                       <button type="button" className="lp-pbtn" onClick={() => setShowPass(!showPass)} tabIndex={-1}>
//                         {showPass ? "🙈" : "👁️"}
//                       </button>
//                     </div>
//                   </div>
//                   <button type="submit" className="lp-sbtn">🔐 Login</button>
//                 </form>
//                 <p className="lp-reg">Account नाही? <Link to="/register"><strong>Register करा</strong></Link></p>
//               </div>
//             )}

//             {/* ── OTP TAB ── */}
//             {tab === "otp" && (
//               <div>
//                 {otpStep === "mobile" && (
//                   <>
//                     <p className="lp-ftitle">Mobile OTP Login</p>
//                     <div className="lp-fld">
//                       <label className="lp-flbl">Mobile Number</label>
//                       <div className="lp-fwrap">
//                         <span className="lp-prefix">🇮🇳 +91</span>
//                         <input className="lp-finput with-prefix" type="tel" maxLength={10} placeholder="10 अंकी नंबर" value={mobileNo} onChange={(e) => setMobileNo(e.target.value.replace(/\D/g, "").slice(0, 10))} onKeyDown={(e) => e.key === "Enter" && sendOtp()} />
//                       </div>
//                     </div>
//                     <button className="lp-sbtn orange" onClick={sendOtp} disabled={mobileNo.length !== 10 || otpLoading}>
//                       {otpLoading ? "⏳ पाठवत आहे..." : "OTP पाठवा →"}
//                     </button>
//                     <p className="lp-reg">Account नाही? <Link to="/register"><strong>Register करा</strong></Link></p>
//                   </>
//                 )}
//                 {otpStep === "otp" && (
//                   <>
//                     <button className="otp-back" onClick={() => { setOtpStep("mobile"); setOtp(["","","","","",""]); }}>← मागे जा</button>
//                     <p className="lp-ftitle">OTP व्हेरिफाय करा</p>
//                     <p style={{ fontSize: 12.5, color: "#888", marginBottom: 14, marginTop: -10 }}>
//                       <span style={{ color: "#C9973A", fontWeight: 700 }}>+91 ******{mobileNo.slice(-3)}</span> वर OTP पाठवला
//                     </p>
//                     <div className="otp-row" onPaste={handleOtpPaste}>
//                       {otp.map((digit, i) => (
//                         <input key={i} ref={(el) => (otpRefs.current[i] = el)} className="otp-box" type="tel" maxLength={1} value={digit} placeholder="·" onChange={(e) => handleOtpChange(i, e.target.value)} onKeyDown={(e) => handleOtpKeyDown(i, e)} />
//                       ))}
//                     </div>
//                     <div className="otp-timer">
//                       {timeLeft > 0
//                         ? <><strong style={{ color: timeLeft <= 15 ? "#e55" : "#C9973A" }}>{formatTime(timeLeft)}</strong> मध्ये expire</>
//                         : <span style={{ color: "#e55", fontWeight: 600 }}>OTP expire झाला!</span>}
//                       <div style={{ marginTop: 6 }}>OTP नाही मिळाला? <button className="resend-btn" onClick={sendOtp} disabled={!canResend}>पुन्हा पाठवा</button></div>
//                     </div>
//                     <button className="lp-sbtn green" onClick={verifyOtp} disabled={otp.join("").length < 6 || otpLoading}>
//                       {otpLoading ? "⏳ Verifying..." : "✅ Verify & Login"}
//                     </button>
//                   </>
//                 )}
//               </div>
//             )}

//           </div>

//           {/* ── RIGHT — MAYOR PANEL ── */}
//           <div className="lp-right">
//             <div className="lp-mayor-photo-wrap">
//               <img src={mayorPhoto} alt="Mayor" />
//               <div className="lp-mayor-badge">🏛️</div>
//             </div>
//             <p className="lp-mayor-name">मा. श्री.अजीव पाटील</p>
//             <p className="lp-mayor-title">मा. महापौर, वसई विरार शहर महानगरपालिका</p>
//             <div className="lp-progress"><div className="lp-progress-bar" /></div>
//             <div className="lp-icons-row">
//               <div className="lp-icon-box">🏛️</div>
//               <div className="lp-icon-box">🗺️</div>
//               <div className="lp-icon-box">🏗️</div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// =====================


// import React, { useState, useEffect, useRef } from "react";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/slices/authSlice";
// import { useNavigate, Link } from "react-router-dom";
// import bgImage from "../assets/vasaivirarmahangarpalika.jpg";
// // import logo from "../assets/vvcmclogo.jpg";
// // import mayorPhoto from "../assets/mayorPhoto.jpg"; // ✅ add your mayor photo here
// import logo from "../assets/vvcmclogo.jpg";
// import mayorPhoto from "../assets/ajivir5.jpeg"; // ✅ add mayor photo asset

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
//         id: data.user.id, fullName: data.user.fullName, userName: data.user.userName,
//         role: data.user.role, departmentName: data.user.departmentName,
//         office: data.user.office, departmentCategory: data.user.departmentCategory,
//       };
//       if (data.token) localStorage.setItem("token", data.token);
//       dispatch(loginSuccess(userPayload));
//       localStorage.setItem("authUser", JSON.stringify(userPayload));
//       localStorage.setItem("userRole", data.user.role);
//       toast.success("Login successful ✅");
//       navigate("/dashboard");
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Server error. Backend चालू आहे का?");
//     } finally { setLoading(false); }
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
//       toast.error("OTP पाठवण्यात अयशस्वी");
//     } finally { setOtpLoading(false); }
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
//         id: data.user.id, fullName: data.user.fullName, userName: data.user.userName,
//         role: data.user.role, departmentName: data.user.departmentName,
//         office: data.user.office, departmentCategory: data.user.departmentCategory,
//       };
//       if (data.token) localStorage.setItem("token", data.token);
//       dispatch(loginSuccess(userPayload));
//       localStorage.setItem("authUser", JSON.stringify(userPayload));
//       localStorage.setItem("userRole", data.user.role);
//       toast.success("✅ Login यशस्वी!");
//       navigate("/dashboard");
//     } catch (err) {
//       toast.error(err?.response?.data?.message || "Server error");
//     } finally { setOtpLoading(false); }
//   };

//   const switchTab = (t) => {
//     setTab(t); setOtpStep("mobile");
//     setOtp(["", "", "", "", "", ""]); setMobileNo(""); setTimeLeft(0);
//   };

//   return (
//     <>
//       {(loading || otpLoading) && <Loader />}

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Playfair+Display:wght@500;700;900&family=Outfit:wght@300;400;500;600;700&display=swap');
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         .lp-root {
//           min-height: 100vh; width: 100%;
//           position: relative; display: flex;
//           align-items: center; justify-content: center;
//           font-family: 'Outfit', sans-serif; overflow: hidden;
//         }
//         .lp-bg {
//           position: absolute; inset: 0;
//           background-size: cover; background-position: center;
//           filter: brightness(0.82) saturate(1.1);
//           transition: transform 14s ease;
//         }
//         .lp-root:hover .lp-bg { transform: scale(1.02); }
//         .lp-overlay {
//           position: absolute; inset: 0;
//           background: linear-gradient(115deg,
//             rgba(16,90,103,0.38) 0%, rgba(16,90,103,0.48) 35%,
//             rgba(16,90,103,0.62) 65%, rgba(16,90,103,0.80) 100%);
//         }
//         .lp-stripe {
//           position: absolute; top:0; left:0; right:0; height:3px;
//           background: linear-gradient(90deg,#CA9D28 0%,#C9973A 35%,#4CABC1 70%,#5A9E56 100%);
//           z-index: 10;
//         }

//         /* ── TWO-PANEL CARD ── */
//         .lp-panel {
//           position: relative; z-index: 10;
//           display: flex; width: 860px; max-width: 96vw;
//           min-height: 520px; border-radius: 20px; overflow: hidden;
//           box-shadow: 0 32px 80px rgba(0,0,0,0.45);
//           animation: cardSlideIn .4s cubic-bezier(.22,.9,.36,1) both;
//         }
//         @keyframes cardSlideIn {
//           from { opacity:0; transform:translateY(20px); }
//           to   { opacity:1; transform:translateY(0); }
//         }

//         /* ── LEFT — white form ── */
//         .lp-left {
//           width: 55%; background: #fff;
//           padding: 36px 38px 32px;
//           display: flex; flex-direction: column;
//         }
//         .lp-logo-row {
//           display: flex; align-items: center; gap: 13px;
//           margin-bottom: 22px; padding-bottom: 18px;
//           border-bottom: 1px solid #f0f0f0;
//         }
//         .lp-logo-img {
//           width: 50px; height: 50px; object-fit: contain;
//           border-radius: 50%; border: 2px solid #C9973A; flex-shrink: 0;
//         }
//         .lp-logo-name { font-size: 13.5px; font-weight: 700; color: #C9973A; line-height: 1.32; }
//         .lp-logo-sub  { font-size: 11px; color: #888; font-weight: 400; }

//         /* Tabs */
//         .lp-tabs {
//           display: flex; gap: 0; margin-bottom: 22px;
//           background: #f4f4f4; border-radius: 12px; padding: 4px;
//         }
//         .lp-tab {
//           flex: 1; padding: 9px 0; border: none; border-radius: 9px;
//           font-size: 12px; font-weight: 600; font-family: 'Outfit', sans-serif;
//           cursor: pointer; transition: all .22s; color: #888; background: transparent;
//         }
//         .lp-tab.active {
//           background: #fff; color: #105A67;
//           box-shadow: 0 2px 12px rgba(0,0,0,0.12); font-weight: 700;
//         }

//         /* Form fields */
//         .lp-ftitle { font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 4px; }
//         .lp-fsub   { font-size: 13px; color: #888; margin-bottom: 18px; }
//         .lp-fld    { margin-bottom: 14px; }
//         .lp-flbl   { display: block; font-size: 13px; font-weight: 500; color: #444; margin-bottom: 6px; }
//         .lp-fwrap  { position: relative; }
//         .lp-finput {
//           width: 100%; padding: 11px 14px 11px 40px;
//           border: 1.5px solid #e8e8e8; border-radius: 9px;
//           font-size: 14px; color: #1a1a1a; background: #fafafa;
//           outline: none; transition: all 0.18s; font-family: 'Outfit', sans-serif;
//         }
//         .lp-finput:focus { border-color: #4CABC1; background: #fff; box-shadow: 0 0 0 3px rgba(76,171,193,0.12); }
//         .lp-finput::placeholder { color: #bbb; font-size: 13px; }
//         .lp-ficon  { position: absolute; left: 13px; top: 50%; transform: translateY(-50%); font-size: 14px; opacity: 0.4; pointer-events: none; }
//         .lp-pbtn   { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; font-size: 14px; color: #aaa; padding: 0; }
//         .lp-prefix { position: absolute; left: 13px; top: 50%; transform: translateY(-50%); font-size: 12px; font-weight: 700; color: #666; pointer-events: none; }
//         .lp-finput.with-prefix { padding-left: 72px; }

//         /* Buttons */
//         .lp-sbtn {
//           width: 100%; padding: 12px; margin-top: 4px;
//           background: #105A67; color: #fff; font-size: 14px; font-weight: 700;
//           border: none; border-radius: 9px; cursor: pointer;
//           transition: all 0.22s; font-family: 'Outfit', sans-serif;
//           position: relative; overflow: hidden;
//         }
//         .lp-sbtn::after {
//           content:''; position:absolute; top:0; left:-100%;
//           width:100%; height:100%;
//           background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);
//           transition:left 0.4s;
//         }
//         .lp-sbtn:hover::after { left:100%; }
//         .lp-sbtn:hover:not(:disabled) { background:#0d4a56; transform:translateY(-1px); }
//         .lp-sbtn:disabled { opacity:0.5; cursor:not-allowed; }
//         .lp-sbtn.orange { background:#C9973A; }
//         .lp-sbtn.orange:hover:not(:disabled) { background:#b5841f; }
//         .lp-sbtn.green  { background:#5A9E56; }
//         .lp-sbtn.green:hover:not(:disabled)  { background:#4a8a46; }

//         .lp-reg { margin-top:14px; text-align:center; font-size:13px; color:#888; }
//         .lp-reg a { color:#105A67; font-weight:700; margin-left:4px; }

//         /* OTP */
//         .otp-row { display:flex; gap:7px; justify-content:center; margin-bottom:14px; }
//         .otp-box {
//           width:42px; height:48px; border:1.5px solid #e0e0e0; border-radius:9px;
//           font-size:20px; font-weight:800; text-align:center; color:#1a1a1a;
//           font-family:'Outfit',sans-serif; outline:none; background:#fafafa; transition:all .18s;
//         }
//         .otp-box:focus { border-color:#4CABC1; box-shadow:0 0 0 3px rgba(76,171,193,0.12); }
//         .otp-timer { text-align:center; font-size:12px; color:#888; margin-bottom:12px; }
//         .otp-timer strong { color:#C9973A; }
//         .resend-btn { background:none; border:none; font-size:12.5px; font-weight:700; cursor:pointer; color:#C9973A; font-family:'Outfit',sans-serif; }
//         .resend-btn:disabled { color:#ccc; cursor:not-allowed; }
//         .otp-back { background:none; border:none; font-size:12px; font-weight:600; color:#888; cursor:pointer; display:flex; align-items:center; gap:4px; margin-bottom:12px; padding:0; font-family:'Outfit',sans-serif; }
//         .otp-back:hover { color:#4CABC1; }
//         .fade-up { animation:fadeUp .26s ease both; }
//         @keyframes fadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }

//         /* ── RIGHT — teal mayor panel ── */
//         .lp-right {
//           width:45%;
//           background: linear-gradient(160deg,#105A67 0%,#0d8a9e 50%,#4CABC1 100%);
//           display:flex; flex-direction:column; align-items:center; justify-content:center;
//           padding:40px 28px; position:relative; overflow:hidden;
//         }
//         .lp-right::before {
//           content:''; position:absolute; top:-60px; right:-60px;
//           width:200px; height:200px; border-radius:50%; background:rgba(255,255,255,0.06);
//         }
//         .lp-right::after {
//           content:''; position:absolute; bottom:-40px; left:-40px;
//           width:160px; height:160px; border-radius:50%; background:rgba(255,255,255,0.06);
//         }
//         .lp-mayor-wrap {
//           width:130px; height:130px; border-radius:50%;
//           border:4px solid #C9973A; overflow:hidden;
//           margin-bottom:18px; position:relative; z-index:1;
//           box-shadow:0 8px 24px rgba(0,0,0,0.25);
//         }
//         .lp-mayor-wrap img { width:100%; height:100%; object-fit:cover; }
//         .lp-mayor-badge {
//           position:absolute; bottom:4px; right:4px;
//           width:28px; height:28px; background:#fff; border-radius:50%;
//           display:flex; align-items:center; justify-content:center;
//           font-size:14px; box-shadow:0 2px 8px rgba(0,0,0,0.2);
//         }
//         .lp-mayor-name {
//           font-family:'Tiro Devanagari Marathi',serif;
//           font-size:22px; font-weight:700; color:#fff;
//           text-align:center; margin-bottom:6px;
//           position:relative; z-index:1;
//           text-shadow:0 2px 12px rgba(0,0,0,0.2);
//         }
//         .lp-mayor-title {
//           font-size:12px; color:rgba(255,255,255,0.75);
//           text-align:center; margin-bottom:24px;
//           position:relative; z-index:1; line-height:1.5;
//         }
//         .lp-progress {
//           width:120px; height:4px; background:rgba(255,255,255,0.2);
//           border-radius:4px; overflow:hidden; margin-bottom:24px;
//           position:relative; z-index:1;
//         }
//         .lp-progress-bar {
//           height:100%; width:60%; background:#5dde62;
//           border-radius:4px; animation:progressPulse 2s ease-in-out infinite;
//         }
//         @keyframes progressPulse { 0%,100%{width:55%} 50%{width:75%} }
//         .lp-icons-row { display:flex; gap:16px; position:relative; z-index:1; }
//         .lp-icon-box {
//           width:52px; height:52px; background:rgba(255,255,255,0.12);
//           border:1px solid rgba(255,255,255,0.2); border-radius:14px;
//           display:flex; align-items:center; justify-content:center; font-size:22px;
//         }

//         @media (max-width:700px) {
//           .lp-right { display:none; }
//           .lp-left  { width:100%; }
//           .lp-panel { width:95vw; }
//         }
//       `}</style>

//       <div className="lp-root">
//         <div className="lp-bg" style={{ backgroundImage: `url(${bgImage})` }} />
//         <div className="lp-overlay" />
//         <div className="lp-stripe" />

//         <div className="lp-panel">

//           {/* ── LEFT ── */}
//           <div className="lp-left">
//             <div className="lp-logo-row">
//               <img src={logo} alt="VVCMC" className="lp-logo-img" />
//               <div>
//                 <div className="lp-logo-name">Vasai-Virar City Municipal Corporation</div>
//                 <div className="lp-logo-sub">जन संवाद</div>
//               </div>
//             </div>

//             <div className="lp-tabs">
//               <button className={`lp-tab ${tab==="password"?"active":""}`} onClick={() => switchTab("password")}>🔒 Password Login</button>
//               <button className={`lp-tab ${tab==="otp"?"active":""}`}      onClick={() => switchTab("otp")}>📱 OTP Login</button>
//             </div>

//             {tab === "password" && (
//               <div className="fade-up">
//                 <p className="lp-ftitle">Welcome Back</p>
//                 <p className="lp-fsub">Mayor Appointment Portal वर login करा</p>
//                 <form onSubmit={handleLogin}>
//                   <div className="lp-fld">
//                     <label className="lp-flbl">Username</label>
//                     <div className="lp-fwrap">
//                       <span className="lp-ficon">👤</span>
//                       <input className="lp-finput" name="userName" placeholder="Username टाका" value={form.userName} onChange={handleChange} autoComplete="username" />
//                     </div>
//                   </div>
//                   <div className="lp-fld">
//                     <label className="lp-flbl">Password</label>
//                     <div className="lp-fwrap">
//                       <span className="lp-ficon">🔒</span>
//                       <input className="lp-finput" type={showPass?"text":"password"} name="password" placeholder="Password टाका" value={form.password} onChange={handleChange} autoComplete="current-password" style={{ paddingRight:40 }} />
//                       <button type="button" className="lp-pbtn" onClick={() => setShowPass(!showPass)} tabIndex={-1}>{showPass?"🙈":"👁️"}</button>
//                     </div>
//                   </div>
//                   <button type="submit" className="lp-sbtn">🔐 Login</button>
//                 </form>
//                 <p className="lp-reg">Account नाही? <Link to="/register"><strong>Register करा</strong></Link></p>
//               </div>
//             )}

//             {tab === "otp" && (
//               <div className="fade-up">
//                 {otpStep === "mobile" && (
//                   <>
//                     <p className="lp-ftitle">Mobile OTP Login</p>
//                     <p className="lp-fsub">Mobile number टाका, OTP पाठवला जाईल</p>
//                     <div className="lp-fld">
//                       <label className="lp-flbl">Mobile Number</label>
//                       <div className="lp-fwrap">
//                         <span className="lp-prefix">🇮🇳 +91</span>
//                         <input className="lp-finput with-prefix" type="tel" maxLength={10} placeholder="10 अंकी नंबर" value={mobileNo} onChange={(e) => setMobileNo(e.target.value.replace(/\D/g,"").slice(0,10))} onKeyDown={(e) => e.key==="Enter" && sendOtp()} />
//                       </div>
//                     </div>
//                     <button className="lp-sbtn orange" onClick={sendOtp} disabled={mobileNo.length!==10||otpLoading}>{otpLoading?"⏳ पाठवत आहे...":"OTP पाठवा →"}</button>
//                     <p className="lp-reg">Account नाही? <Link to="/register"><strong>Register करा</strong></Link></p>
//                   </>
//                 )}
//                 {otpStep === "otp" && (
//                   <>
//                     <button className="otp-back" onClick={() => { setOtpStep("mobile"); setOtp(["","","","","",""]); }}>← मागे जा</button>
//                     <p className="lp-ftitle">OTP व्हेरिफाय करा</p>
//                     <p className="lp-fsub"><span style={{ color:"#C9973A",fontWeight:700 }}>+91 ******{mobileNo.slice(-3)}</span> वर OTP पाठवला</p>
//                     <div className="otp-row" onPaste={handleOtpPaste}>
//                       {otp.map((digit, i) => (
//                         <input key={i} ref={(el) => (otpRefs.current[i]=el)} className="otp-box" type="tel" maxLength={1} value={digit} placeholder="·" onChange={(e) => handleOtpChange(i,e.target.value)} onKeyDown={(e) => handleOtpKeyDown(i,e)} />
//                       ))}
//                     </div>
//                     <div className="otp-timer">
//                       {timeLeft>0
//                         ? <><strong style={{ color:timeLeft<=15?"#e55":"#C9973A" }}>{formatTime(timeLeft)}</strong> मध्ये expire</>
//                         : <span style={{ color:"#e55",fontWeight:600 }}>OTP expire झाला!</span>}
//                       <div style={{ marginTop:6 }}>OTP नाही मिळाला? <button className="resend-btn" onClick={sendOtp} disabled={!canResend}>पुन्हा पाठवा</button></div>
//                     </div>
//                     <button className="lp-sbtn green" onClick={verifyOtp} disabled={otp.join("").length<6||otpLoading}>{otpLoading?"⏳ Verifying...":"✅ Verify & Login"}</button>
//                   </>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* ── RIGHT — MAYOR PANEL ── */}
//           <div className="lp-right">
//             <div className="lp-mayor-wrap">
//               <img src={mayorPhoto} alt="Mayor" />
//               <div className="lp-mayor-badge">🏛️</div>
//             </div>
//             <p className="lp-mayor-name">मा. श्री.अजीव पाटील</p>
//             <p className="lp-mayor-title">मा. महापौर, वसई विरार शहर महानगरपालिका</p>
//             <div className="lp-progress"><div className="lp-progress-bar" /></div>
//             <div className="lp-icons-row">
//               <div className="lp-icon-box">🏛️</div>
//               <div className="lp-icon-box">🗺️</div>
//               <div className="lp-icon-box">🏗️</div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }



// ======================================

// import React, { useState, useEffect, useRef } from "react";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/slices/authSlice";
// import { useNavigate, Link } from "react-router-dom";
// // import bgImage from "../assets/vasaivirarmahangarpalika.jpg";
// import logo from "../assets/vvcmclogo.jpg";
// import mayorPhoto from "../assets/ajivir5.jpeg"; // ✅ add mayor photo asset
// // import bgImage from "../assets/meeting.jpeg"; // ✅ add mayor photo asset
// import bgImage from "../assets/meeting.jpeg"; // ✅ add mayor photo asset
// // import bgImage from "../assets/bg1.jpeg"; // ✅ add mayor photo asset




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
//           justify-content: center;
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

//         /* ── OVERLAY ── */
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

//         /* ══════════════════════════════════════
//            OUTER WRAPPER — login card + mayor panel side by side
//         ══════════════════════════════════════ */
//         .lp-wrapper {
//           position: relative;
//           z-index: 10;
//           display: flex;
//           align-items: stretch;
//           border-radius: 24px;
//           overflow: hidden;
//           box-shadow: 0 24px 70px rgba(0,0,0,0.40);
//           animation: cardSlideIn .4s cubic-bezier(.22,.9,.36,1) both;
//         }
//         @keyframes cardSlideIn {
//           from { opacity:0; transform:translateY(20px); }
//           to   { opacity:1; transform:translateY(0); }
//         }

//         /* ══════════════════════════════════════
//            CARD — left login panel
//         ══════════════════════════════════════ */
//         .lp-card {
//           width: 400px;
//           background: rgba(16, 90, 103, 0.30);
//           backdrop-filter: blur(32px) saturate(1.8);
//           -webkit-backdrop-filter: blur(32px) saturate(1.8);
//           border: 1px solid rgba(255,255,255,0.10);
//           border-right: none;
//           padding: 36px 34px 30px;
//           display: flex;
//           flex-direction: column;
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
//           font-size: 18px;
//           font-weight: 700;
//           color: #CE9A54;
//           line-height: 1.32;
//           text-shadow: 0 1px 8px rgba(0,0,0,0.3);
//         }

//         /* ── TABS ── */
//         .lp-tabs {
//           display: flex;
//           gap: 0;
//           margin-bottom: 24px;
//           background: rgba(0,0,0,0.28);
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

//         /* ── FORM ── */
//         .lp-ftitle {
//           font-size: 20px;
//           font-weight: 700;
//           color: #fff;
//           margin-bottom: 20px;
//           font-family: 'Outfit', sans-serif;
//           letter-spacing: -0.2px;
//         }

//         .lp-fld { margin-bottom: 16px; }

//         .lp-flbl {
//           display: block;
//           font-size: 13px;
//           font-weight: 500;
//           color: rgba(255,255,255,0.88);
//           margin-bottom: 7px;
//           font-family: 'Outfit', sans-serif;
//         }

//         .lp-fwrap { position: relative; }

//         .lp-finput {
//           width: 100%;
//           padding: 13px 16px 13px 16px;
//           border: none;
//           border-radius: 10px;
//           font-size: 14px;
//           color: #fff;
//           background: rgba(255,255,255,0.18);
//           backdrop-filter: blur(12px);
//           -webkit-backdrop-filter: blur(12px);
//           outline: none;
//           transition: all 0.18s;
//           font-family: 'Outfit', sans-serif;
//           box-shadow: inset 0 1px 0 rgba(255,255,255,0.20), 0 2px 6px rgba(0,0,0,0.10);
//         }
//         .lp-finput:focus {
//           background: rgba(255,255,255,0.26);
//           box-shadow: 0 0 0 2px rgba(76,171,193,0.60), inset 0 1px 0 rgba(255,255,255,0.25);
//         }
//         .lp-finput::placeholder { color: rgba(255,255,255,0.45); font-size: 13.5px; }
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
//           color: rgba(255,255,255,0.55);
//           padding: 0;
//           display: flex;
//           align-items: center;
//           transition: color .2s;
//         }
//         .lp-pbtn:hover { color: #fff; }

//         .lp-prefix {
//           position: absolute;
//           left: 14px;
//           top: 50%;
//           transform: translateY(-50%);
//           font-size: 12px;
//           font-weight: 700;
//           color: rgba(255,255,255,0.75);
//           pointer-events: none;
//           white-space: nowrap;
//         }
//         .lp-finput.with-prefix { padding-left: 72px; }

//         /* ── BUTTONS ── */
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

//         .lp-sbtn.orange {
//           background: #C9973A;
//           box-shadow: 0 4px 18px rgba(201,151,58,0.48);
//         }
//         .lp-sbtn.orange:hover:not(:disabled) {
//           background: #b5841f;
//           box-shadow: 0 8px 24px rgba(201,151,58,0.6);
//         }

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
//           color: #fff;
//           font-family: 'Outfit', sans-serif;
//           outline: none;
//           background: rgba(255,255,255,0.18);
//           backdrop-filter: blur(12px);
//           -webkit-backdrop-filter: blur(12px);
//           transition: all .18s;
//           box-shadow: inset 0 1px 0 rgba(255,255,255,0.22);
//         }
//         .otp-box:focus {
//           background: rgba(255,255,255,0.28);
//           box-shadow: 0 0 0 2px rgba(76,171,193,0.65), inset 0 1px 0 rgba(255,255,255,0.25);
//         }
//         .otp-box:not(:placeholder-shown) {
//           background: rgba(255,255,255,0.24);
//           box-shadow: 0 0 0 2px rgba(90,158,86,0.70);
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
//           margin-top: auto;
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

//         /* ══════════════════════════════════════
//            MAYOR PANEL — right side teal gradient
//         ══════════════════════════════════════ */
//         .lp-mayor-panel {
//           width: 300px;
//           background: linear-gradient(160deg, #1ab5c4 0%, #0e8f9e 40%, #0a7a88 100%);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           padding: 40px 28px;
//           position: relative;
//           overflow: hidden;
//         }

//         /* Decorative floating building/institution icons */
//         .lp-mayor-panel::before,
//         .lp-mayor-panel::after {
//           content: '';
//           position: absolute;
//           border-radius: 12px;
//           opacity: 0.12;
//         }

//         /* Floating icon tiles */
//         .lp-mp-icon {
//           position: absolute;
//           font-size: 32px;
//           opacity: 0.18;
//           filter: drop-shadow(0 2px 6px rgba(0,0,0,0.2));
//         }
//         .lp-mp-icon.tl { top: 28px;  left: 22px; }
//         .lp-mp-icon.tr { top: 28px;  right: 22px; }
//         .lp-mp-icon.bl { bottom: 50px; left: 22px; }
//         .lp-mp-icon.br { bottom: 50px; right: 22px; }

//         /* Mayor photo ring */
//         .lp-mayor-photo-wrap {
//           position: relative;
//           margin-bottom: 22px;
//         }
//         .lp-mayor-ring {
//           width: 148px; height: 148px;
//           border-radius: 50%;
//           padding: 5px;
//           background: conic-gradient(#f59e0b 0deg, #f59e0b 270deg, rgba(255,255,255,0.15) 270deg);
//           box-shadow: 0 8px 32px rgba(0,0,0,0.28);
//         }
//         .lp-mayor-photo {
//           width: 100%; height: 100%;
//           border-radius: 50%;
//           object-fit: cover;
//           object-position: top center;
//           border: 3px solid #fff;
//           display: block;
//         }

//         /* Small badge icon bottom-right of photo */
//         .lp-mayor-badge {
//           position: absolute;
//           bottom: 2px;
//           right: 2px;
//           width: 34px; height: 34px;
//           border-radius: 50%;
//           background: #fff;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 16px;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.22);
//           border: 2px solid rgba(255,255,255,0.9);
//         }

//         /* Mayor name & title */
//         .lp-mayor-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 22px;
//           font-weight: 700;
//           color: #fff;
//           text-align: center;
//           margin-bottom: 6px;
//           text-shadow: 0 2px 12px rgba(0,0,0,0.25);
//           line-height: 1.3;
//         }
//         .lp-mayor-title {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 12px;
//           color: rgba(255,255,255,0.80);
//           text-align: center;
//           line-height: 1.55;
//           margin-bottom: 20px;
//         }

//         /* Green progress bar */
//         .lp-mayor-bar-wrap {
//           width: 100px;
//           height: 5px;
//           background: rgba(255,255,255,0.20);
//           border-radius: 999px;
//           overflow: hidden;
//         }
//         .lp-mayor-bar {
//           width: 55%;
//           height: 100%;
//           background: #4ade80;
//           border-radius: 999px;
//           box-shadow: 0 0 8px rgba(74,222,128,0.6);
//         }

//         /* ── Animations ── */
//         @keyframes fadeUp {
//           from { opacity:0; transform:translateY(10px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .fade-up { animation: fadeUp .26s ease both; }

//         /* ── Responsive ── */
//         @media (max-width: 768px) {
//           .lp-mayor-panel { display: none; }
//           .lp-card {
//             border-right: 1px solid rgba(255,255,255,0.10);
//             border-radius: 24px;
//             width: 90%;
//             max-width: 400px;
//           }
//           .lp-wrapper { border-radius: 24px; }
//         }
//       `}</style>

//       <div className="lp-root">
//         {/* Background */}
//         <div className="lp-bg" style={{ backgroundImage: `url(${bgImage})` }} />
//         <div className="lp-overlay" />
//         <div className="lp-stripe" />

//         {/* ── OUTER WRAPPER (card + mayor panel) ── */}
//         <div className="lp-wrapper">

//           {/* ── LEFT: GLASS LOGIN CARD ── */}
//           <div className="lp-card">

//             {/* Logo */}
//             <div className="lp-logo-row">
//               <img src={logo} alt="VVCMC" className="lp-logo-img" />
//               <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
//                 <div className="lp-logo-name">वसई-विरार शहर महानगरपालिका</div>
//                 <div style={{color:"#fff"}}>जन संवाद</div> 
                
//               </div>
               
//             </div>

//             {/* Tabs */}
//             <div className="lp-tabs">
//               <button
//                 className={`lp-tab ${tab === "password" ? "active" : ""}`}
//                 onClick={() => switchTab("password")}
//               >
//                 🔒 Password Login
//               </button>
//               <button
//                 className={`lp-tab ${tab === "otp" ? "active" : ""}`}
//                 onClick={() => switchTab("otp")}
//               >
//                 📱 OTP Login
//               </button>
//             </div>

//             {/* ════ PASSWORD TAB ════ */}
//             {tab === "password" && (
//               <div className="fade-up">
//                 <p className="lp-ftitle">Sign In to Continue</p>
//                 <form onSubmit={handleLogin}>
//                   <div className="lp-fld">
//                     <label className="lp-flbl">Username</label>
//                     <div className="lp-fwrap">
//                       <span className="lp-ficon">👤</span>
//                       <input
//                         className="lp-finput has-icon"
//                         name="userName"
//                         placeholder="Enter your username"
//                         value={form.userName}
//                         onChange={handleChange}
//                         autoComplete="username"
//                       />
//                     </div>
//                   </div>
//                   <div className="lp-fld">
//                     <label className="lp-flbl">Password</label>
//                     <div className="lp-fwrap">
//                       <span className="lp-ficon">🔒</span>
//                       <input
//                         className="lp-finput has-icon"
//                         type={showPass ? "text" : "password"}
//                         name="password"
//                         placeholder="Enter your password"
//                         value={form.password}
//                         onChange={handleChange}
//                         autoComplete="current-password"
//                         style={{ paddingRight: 42 }}
//                       />
//                       <button
//                         type="button"
//                         className="lp-pbtn"
//                         onClick={() => setShowPass(!showPass)}
//                         tabIndex={-1}
//                       >
//                         {showPass ? "🙈" : "👁️"}
//                       </button>
//                     </div>
//                   </div>
//                   <button type="submit" className="lp-sbtn">SIGN IN →</button>
//                 </form>

//                 <div className="lp-or">
//                   <div className="lp-orl" /><span>or</span><div className="lp-orl" />
//                 </div>
//                 <p className="lp-reg">
//                   Don't have an account?
//                   <Link to="/register">Create account</Link>
//                 </p>
//               </div>
//             )}

//             {/* ════ OTP TAB ════ */}
//             {tab === "otp" && (
//               <div className="fade-up">

//                 {/* STEP 1 — Mobile */}
//                 {otpStep === "mobile" && (
//                   <>
//                     <p className="lp-ftitle">Mobile OTP Login</p>
//                     <div className="lp-fld">
//                       <label className="lp-flbl">Mobile Number</label>
//                       <div className="lp-fwrap">
//                         <span className="lp-prefix">🇮🇳 +91</span>
//                         <input
//                           className="lp-finput with-prefix"
//                           type="tel"
//                           maxLength={10}
//                           placeholder="10 अंकी नंबर"
//                           value={mobileNo}
//                           onChange={(e) => setMobileNo(e.target.value.replace(/\D/g, "").slice(0, 10))}
//                           onKeyDown={(e) => e.key === "Enter" && sendOtp()}
//                         />
//                       </div>
//                     </div>
//                     <button
//                       className="lp-sbtn orange"
//                       onClick={sendOtp}
//                       disabled={mobileNo.length !== 10 || otpLoading}
//                     >
//                       {otpLoading ? "⏳ पाठवत आहे..." : "OTP पाठवा →"}
//                     </button>

//                     <div className="lp-or">
//                       <div className="lp-orl" /><span>or</span><div className="lp-orl" />
//                     </div>
//                     <p className="lp-reg">
//                       Don't have an account?
//                       <Link to="/register">Create account</Link>
//                     </p>
//                   </>
//                 )}

//                 {/* STEP 2 — OTP entry */}
//                 {otpStep === "otp" && (
//                   <>
//                     <button
//                       className="otp-back"
//                       onClick={() => { setOtpStep("mobile"); setOtp(["","","","","",""]); }}
//                     >
//                       ← मागे जा
//                     </button>
//                     <p className="lp-ftitle">OTP व्हेरिफाय करा</p>
//                     <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.68)", marginBottom: 16, fontFamily: "'Outfit',sans-serif" }}>
//                       <span style={{ color: "#C9973A", fontWeight: 700 }}>+91 ******{mobileNo.slice(-3)}</span> वर OTP पाठवला
//                     </p>

//                     <div className="otp-row" onPaste={handleOtpPaste}>
//                       {otp.map((digit, i) => (
//                         <input
//                           key={i}
//                           ref={(el) => (otpRefs.current[i] = el)}
//                           className="otp-box"
//                           type="tel"
//                           maxLength={1}
//                           value={digit}
//                           placeholder="·"
//                           onChange={(e) => handleOtpChange(i, e.target.value)}
//                           onKeyDown={(e) => handleOtpKeyDown(i, e)}
//                         />
//                       ))}
//                     </div>

//                     <div className="otp-timer">
//                       {timeLeft > 0 ? (
//                         <>
//                           OTP expire होईल:{" "}
//                           <strong style={{ color: timeLeft <= 15 ? "#ff6b6b" : "#C9973A" }}>
//                             {formatTime(timeLeft)}
//                           </strong>
//                         </>
//                       ) : (
//                         <span style={{ color: "#ff6b6b", fontWeight: 600 }}>OTP expire झाला!</span>
//                       )}
//                       <div style={{ marginTop: 6 }}>
//                         OTP नाही मिळाला?{" "}
//                         <button className="resend-btn" onClick={sendOtp} disabled={!canResend}>
//                           पुन्हा पाठवा
//                         </button>
//                       </div>
//                     </div>

//                     <button
//                       className="lp-sbtn green"
//                       onClick={verifyOtp}
//                       disabled={otp.join("").length < 6 || otpLoading}
//                     >
//                       {otpLoading ? "⏳ Verifying..." : "✅ Verify & Login"}
//                     </button>
//                   </>
//                 )}
//               </div>
//             )}

//             {/* Footer */}
//             <div className="lp-cfooter">
//               <div className="lp-cfdot" />
//               <span>Secure Government Portal · All rights reserved</span>
//             </div>
//           </div>

//           {/* ── RIGHT: MAYOR PANEL ── */}
//           <div className="lp-mayor-panel">
//             {/* Floating decorative icons */}
//             <span className="lp-mp-icon tl">🏛️</span>
//             <span className="lp-mp-icon tr">🏥</span>
//             <span className="lp-mp-icon bl">🏗️</span>
//             <span className="lp-mp-icon br">🏢</span>

//             {/* Mayor photo with orange ring */}
//             <div className="lp-mayor-photo-wrap">
//               <div className="lp-mayor-ring">
//                 <img src={mayorPhoto} alt="Mayor" className="lp-mayor-photo" />
//               </div>
//               <div className="lp-mayor-badge">🪑</div>
//             </div>

//             {/* Name & title */}
//             <p className="lp-mayor-name">मा. श्री.अजीव पाटील</p>
//             <p className="lp-mayor-title">मा. महापौर, वसई विरार शहर महानगरपालिका</p>

//             {/* Green progress bar */}
//             <div className="lp-mayor-bar-wrap">
//               <div className="lp-mayor-bar" />
//             </div>
//           </div>

//         </div>{/* end lp-wrapper */}
//       </div>
//     </>
//   );
// }


// ===============================
// import React, { useState, useEffect, useRef } from "react";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/slices/authSlice";
// import { useNavigate, Link } from "react-router-dom";
// import logo from "../assets/vvcmclogo.jpg";
// import mayorPhoto from "../assets/ajivir5.jpeg";
// import bgImage from "../assets/bg1.jpeg";
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

//         .lp-root {
//           min-height: 100vh;
//           width: 100%;
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-family: 'Outfit', sans-serif;
//           overflow: hidden;
//         }

//         .lp-bg {
//           position: absolute;
//           inset: 0;
//           background-size: cover;
//           background-position: 25% center;
//           filter: brightness(0.75) saturate(1.15);
//           transition: transform 14s ease;
//         }
//         .lp-root:hover .lp-bg { transform: scale(1.02); }

//         .lp-overlay {
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
//         .lp-stripe {
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
//         .lp-wrapper {
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
//         .lp-card {
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
//           padding: 34px 32px 28px;
//           display: flex;
//           flex-direction: column;
//           position: relative;
//         }
//         .lp-card::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
//         }

//         /* ── Logo row ── */
//         .lp-logo-row {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           margin-bottom: 20px;
//           padding-bottom: 18px;
//           border-bottom: 1px solid rgba(202,157,40,0.22);
//           position: relative;
//         }
//         .lp-logo-row::after {
//           content: '';
//           position: absolute;
//           bottom: -1px; left: 0;
//           width: 55px; height: 2px;
//           background: linear-gradient(90deg, var(--gold), var(--gold-light));
//           border-radius: 2px;
//         }
//         .lp-logo-img {
//           width: 54px; height: 54px;
//           object-fit: contain;
//           border-radius: 50%;
//           border: 2px solid var(--gold-light);
//           box-shadow:
//             0 0 0 3px rgba(202,157,40,0.15),
//             0 4px 20px rgba(0,0,0,0.32);
//           flex-shrink: 0;
//         }
//         .lp-logo-texts { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
//         .lp-logo-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 15px;
//           font-weight: 700;
//           color: var(--gold-light);
//           line-height: 1.3;
//           text-shadow: 0 1px 10px rgba(0,0,0,0.4);
//         }
//         .lp-logo-sub {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 13px;
//           font-weight: 500;
//           color: rgba(245,231,194,0.72);
//           letter-spacing: 0.4px;
//         }

//         /* ── TABS ── */
//         .lp-tabs {
//           display: flex;
//           gap: 0;
//           margin-bottom: 22px;
//           background: rgba(0,0,0,0.34);
//           border-radius: 14px;
//           padding: 4px;
//           border: 1px solid rgba(76,171,193,0.16);
//           box-shadow: inset 0 2px 8px rgba(0,0,0,0.22);
//         }
//         .lp-tab {
//           flex: 1;
//           padding: 9px 0;
//           border: none;
//           border-radius: 11px;
//           font-size: 12px;
//           font-weight: 600;
//           font-family: 'Outfit', sans-serif;
//           cursor: pointer;
//           transition: all .25s;
//           color: rgba(245,231,194,0.48);
//           background: transparent;
//           letter-spacing: 0.2px;
//         }
//         .lp-tab.active {
//           background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
//           color: #fff;
//           box-shadow:
//             0 2px 14px rgba(76,171,193,0.42),
//             inset 0 1px 0 rgba(245,231,194,0.14);
//           font-weight: 700;
//         }
//         .lp-tab:not(.active):hover {
//           color: var(--cream);
//           background: rgba(76,171,193,0.12);
//         }

//         /* ── FORM ── */
//         .lp-ftitle {
//           font-size: 21px;
//           font-weight: 700;
//           color: var(--cream);
//           margin-bottom: 18px;
//           font-family: 'Outfit', sans-serif;
//           letter-spacing: -0.3px;
//           text-shadow: 0 1px 12px rgba(0,0,0,0.3);
//         }

//         .lp-fld { margin-bottom: 14px; }

//         .lp-flbl {
//           display: block;
//           font-size: 11.5px;
//           font-weight: 700;
//           color: rgba(245,231,194,0.72);
//           margin-bottom: 7px;
//           font-family: 'Outfit', sans-serif;
//           letter-spacing: 0.8px;
//           text-transform: uppercase;
//         }

//         .lp-fwrap { position: relative; }

//         .lp-finput {
//           width: 100%;
//           padding: 12px 16px;
//           border: 1px solid rgba(76,171,193,0.20);
//           border-radius: 12px;
//           font-size: 14px;
//           color: #fff;
//           background: rgba(12,68,80,0.58);
//           backdrop-filter: blur(10px);
//           -webkit-backdrop-filter: blur(10px);
//           outline: none;
//           transition: all 0.2s;
//           font-family: 'Outfit', sans-serif;
//           box-shadow: inset 0 1px 0 rgba(245,231,194,0.06), 0 2px 8px rgba(0,0,0,0.14);
//         }
//         .lp-finput:focus {
//           background: rgba(24,116,128,0.62);
//           border-color: var(--teal);
//           box-shadow: 0 0 0 3px rgba(76,171,193,0.18), inset 0 1px 0 rgba(245,231,194,0.08);
//         }
//         .lp-finput::placeholder { color: rgba(245,231,194,0.28); font-size: 13px; }
//         .lp-finput.has-icon { padding-left: 42px; }

//         .lp-ficon {
//           position: absolute;
//           left: 14px; top: 50%;
//           transform: translateY(-50%);
//           font-size: 15px;
//           pointer-events: none;
//           opacity: 0.48;
//         }
//         .lp-pbtn {
//           position: absolute;
//           right: 13px; top: 50%;
//           transform: translateY(-50%);
//           background: none; border: none;
//           cursor: pointer; font-size: 15px;
//           color: rgba(245,231,194,0.42);
//           padding: 0; display: flex; align-items: center;
//           transition: color .2s;
//         }
//         .lp-pbtn:hover { color: var(--cream); }

//         .lp-prefix {
//           position: absolute;
//           left: 14px; top: 50%;
//           transform: translateY(-50%);
//           font-size: 12px; font-weight: 700;
//           color: rgba(245,231,194,0.68);
//           pointer-events: none; white-space: nowrap;
//         }
//         .lp-finput.with-prefix { padding-left: 74px; }

//         /* ── BUTTONS ── */
//         .lp-sbtn {
//           width: 100%;
//           padding: 13px;
//           margin-top: 6px;
//           background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
//           color: #fff;
//           font-size: 13px; font-weight: 800;
//           letter-spacing: 1.5px;
//           border: none; border-radius: 12px;
//           cursor: pointer; transition: all 0.22s;
//           position: relative; overflow: hidden;
//           box-shadow: 0 4px 20px rgba(76,171,193,0.42), inset 0 1px 0 rgba(245,231,194,0.10);
//           font-family: 'Outfit', sans-serif;
//           text-transform: uppercase;
//         }
//         .lp-sbtn::before {
//           content: '';
//           position: absolute; top: 0; left: 0; right: 0; height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
//         }
//         .lp-sbtn::after {
//           content: '';
//           position: absolute; top: 0; left: -120%;
//           width: 80%; height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
//           transform: skewX(-20deg);
//           transition: left 0.55s ease;
//         }
//         .lp-sbtn:hover::after { left: 140%; }
//         .lp-sbtn:hover:not(:disabled) {
//           background: linear-gradient(135deg, #3796ae 0%, var(--teal) 100%);
//           transform: translateY(-2px);
//           box-shadow: 0 10px 28px rgba(76,171,193,0.52);
//         }
//         .lp-sbtn:active:not(:disabled) { transform: translateY(0); }
//         .lp-sbtn:disabled { opacity: 0.42; cursor: not-allowed; }

//         .lp-sbtn.orange {
//           background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
//           box-shadow: 0 4px 20px rgba(202,157,40,0.40);
//         }
//         .lp-sbtn.orange:hover:not(:disabled) {
//           background: linear-gradient(135deg, #b5841f 0%, var(--gold) 100%);
//           box-shadow: 0 10px 28px rgba(202,157,40,0.52);
//         }

//         .lp-sbtn.green {
//           background: linear-gradient(135deg, #4e9148 0%, var(--green) 100%);
//           box-shadow: 0 4px 20px rgba(102,169,98,0.40);
//         }
//         .lp-sbtn.green:hover:not(:disabled) {
//           background: linear-gradient(135deg, #3d7a39 0%, #4e9148 100%);
//           box-shadow: 0 10px 28px rgba(102,169,98,0.52);
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

//         /* ── Timer & resend ── */
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

//         /* ── Back button ── */
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

//         /* ── OR divider ── */
//         .lp-or {
//           display: flex; align-items: center;
//           gap: 10px; margin: 16px 0 0;
//         }
//         .lp-orl { flex: 1; height: 1px; background: rgba(202,157,40,0.18); }
//         .lp-or span {
//           font-size: 10.5px; color: rgba(245,231,194,0.36);
//           letter-spacing: 0.8px; text-transform: uppercase;
//         }

//         /* ── Register link ── */
//         .lp-reg {
//           margin-top: 12px; text-align: center;
//           font-size: 13px; color: rgba(245,231,194,0.58);
//           font-family: 'Outfit', sans-serif;
//         }
//         .lp-reg a {
//           color: var(--cream); font-weight: 700;
//           text-decoration: none; margin-left: 5px;
//           padding-bottom: 1px;
//           border-bottom: 1.5px solid var(--gold-light);
//           transition: all .2s;
//         }
//         .lp-reg a:hover { color: var(--gold-light); border-color: var(--gold); }

//         /* ── Card footer ── */
//         .lp-cfooter {
//           margin-top: auto; padding-top: 16px;
//           border-top: 1px solid rgba(202,157,40,0.14);
//           display: flex; align-items: center;
//           justify-content: center; gap: 7px;
//         }
//         .lp-cfdot {
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
//         .lp-cfooter span {
//           font-size: 10.5px; color: rgba(245,231,194,0.28);
//           letter-spacing: 0.3px;
//         }

//         /* ══════════════════════════════════════
//            MAYOR PANEL
//         ══════════════════════════════════════ */
//         .lp-mayor-panel {
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

//         /* Animated gold shimmer top */
//         .lp-mayor-panel::before {
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

//         /* Soft radial glow behind photo */
//         .lp-mayor-panel::after {
//           content: '';
//           position: absolute; top: 42%; left: 50%;
//           transform: translate(-50%, -50%);
//           width: 250px; height: 250px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(76,171,193,0.16) 0%, transparent 68%);
//           pointer-events: none;
//         }

//         .lp-mp-icon {
//           position: absolute; font-size: 30px;
//           opacity: 0.14;
//           filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
//           transition: opacity .35s;
//         }
//         .lp-mayor-panel:hover .lp-mp-icon { opacity: 0.24; }
//         .lp-mp-icon.tl { top: 26px;  left: 20px; }
//         .lp-mp-icon.tr { top: 26px;  right: 20px; }
//         .lp-mp-icon.bl { bottom: 48px; left: 20px; }
//         .lp-mp-icon.br { bottom: 48px; right: 20px; }

//         /* Mayor photo */
//         .lp-mayor-photo-wrap {
//           position: relative; margin-bottom: 20px; z-index: 2;
//         }
//         .lp-mayor-ring {
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
//         .lp-mayor-photo {
//           width: 100%; height: 100%;
//           border-radius: 50%;
//           object-fit: cover; object-position: top center;
//           border: 3px solid rgba(255,255,255,0.92);
//           display: block;
//         }
//         .lp-mayor-badge {
//           position: absolute; bottom: 3px; right: 3px;
//           width: 36px; height: 36px; border-radius: 50%;
//           background: linear-gradient(135deg, #fff 0%, var(--cream) 100%);
//           display: flex; align-items: center; justify-content: center;
//           font-size: 17px;
//           box-shadow: 0 3px 10px rgba(0,0,0,0.28);
//           border: 2px solid rgba(255,255,255,0.95);
//         }

//         .lp-mayor-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 21px; font-weight: 700;
//           color: #fff; text-align: center;
//           margin-bottom: 6px;
//           text-shadow: 0 2px 14px rgba(0,0,0,0.30);
//           line-height: 1.3; z-index: 2; position: relative;
//         }
//         .lp-mayor-title {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 11.5px;
//           color: rgba(245,231,194,0.72);
//           text-align: center; line-height: 1.6;
//           margin-bottom: 22px; z-index: 2; position: relative;
//         }

//         .lp-mayor-bar-wrap {
//           width: 110px; height: 5px;
//           background: rgba(255,255,255,0.14);
//           border-radius: 999px; overflow: hidden;
//           z-index: 2; position: relative;
//         }
//         .lp-mayor-bar {
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

//         /* ── Animations ── */
//         @keyframes fadeUp {
//           from { opacity:0; transform:translateY(10px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .fade-up { animation: fadeUp .28s ease both; }

//         /* ── Responsive ── */
//         @media (max-width: 768px) {
//           .lp-mayor-panel { display: none; }
//           .lp-card {
//             border-right: 1px solid rgba(76,171,193,0.20);
//             border-radius: 24px; width: 92%; max-width: 410px;
//           }
//           .lp-wrapper { border-radius: 24px; }
//         }
//       `}</style>

//       <div className="lp-root">
//         <div className="lp-bg" style={{ backgroundImage: `url(${bgImage})` }} />
//         <div className="lp-overlay" />
//         <div className="lp-stripe" />

//         <div className="lp-wrapper">

//           {/* ── LEFT: LOGIN CARD ── */}
//           <div className="lp-card">

//             <div className="lp-logo-row">
//               <img src={logo} alt="VVCMC" className="lp-logo-img" />
//               <div className="lp-logo-texts">
//                 <div className="lp-logo-name">वसई-विरार शहर महानगरपालिका</div>
//                 <div className="lp-logo-sub">जन संवाद</div>
//               </div>
//             </div>

//             <div className="lp-tabs">
//               <button
//                 className={`lp-tab ${tab === "password" ? "active" : ""}`}
//                 onClick={() => switchTab("password")}
//               >
//                 🔒 Password Login
//               </button>
//               <button
//                 className={`lp-tab ${tab === "otp" ? "active" : ""}`}
//                 onClick={() => switchTab("otp")}
//               >
//                 📱 OTP Login
//               </button>
//             </div>

//             {/* ════ PASSWORD TAB ════ */}
//             {tab === "password" && (
//               <div className="fade-up">
//                 <p className="lp-ftitle">Sign In to Continue</p>
//                 <form onSubmit={handleLogin}>
//                   <div className="lp-fld">
//                     <label className="lp-flbl">Username</label>
//                     <div className="lp-fwrap">
//                       <span className="lp-ficon">👤</span>
//                       <input
//                         className="lp-finput has-icon"
//                         name="userName"
//                         placeholder="Enter your username"
//                         value={form.userName}
//                         onChange={handleChange}
//                         autoComplete="username"
//                       />
//                     </div>
//                   </div>
//                   <div className="lp-fld">
//                     <label className="lp-flbl">Password</label>
//                     <div className="lp-fwrap">
//                       <span className="lp-ficon">🔒</span>
//                       <input
//                         className="lp-finput has-icon"
//                         type={showPass ? "text" : "password"}
//                         name="password"
//                         placeholder="Enter your password"
//                         value={form.password}
//                         onChange={handleChange}
//                         autoComplete="current-password"
//                         style={{ paddingRight: 42 }}
//                       />
//                       <button
//                         type="button"
//                         className="lp-pbtn"
//                         onClick={() => setShowPass(!showPass)}
//                         tabIndex={-1}
//                       >
//                         {showPass ? "🙈" : "👁️"}
//                       </button>
//                     </div>
//                   </div>
//                   <button type="submit" className="lp-sbtn">SIGN IN →</button>
//                 </form>
//                 <div className="lp-or">
//                   <div className="lp-orl" /><span>or</span><div className="lp-orl" />
//                 </div>
//                 <p className="lp-reg">
//                   Don't have an account?
//                   <Link to="/register">Create account</Link>
//                 </p>
//               </div>
//             )}

//             {/* ════ OTP TAB ════ */}
//             {tab === "otp" && (
//               <div className="fade-up">
//                 {otpStep === "mobile" && (
//                   <>
//                     <p className="lp-ftitle">Mobile OTP Login</p>
//                     <div className="lp-fld">
//                       <label className="lp-flbl">Mobile Number</label>
//                       <div className="lp-fwrap">
//                         <span className="lp-prefix">🇮🇳 +91</span>
//                         <input
//                           className="lp-finput with-prefix"
//                           type="tel"
//                           maxLength={10}
//                           placeholder="10 अंकी नंबर"
//                           value={mobileNo}
//                           onChange={(e) => setMobileNo(e.target.value.replace(/\D/g, "").slice(0, 10))}
//                           onKeyDown={(e) => e.key === "Enter" && sendOtp()}
//                         />
//                       </div>
//                     </div>
//                     <button
//                       className="lp-sbtn orange"
//                       onClick={sendOtp}
//                       disabled={mobileNo.length !== 10 || otpLoading}
//                     >
//                       {otpLoading ? "⏳ पाठवत आहे..." : "OTP पाठवा →"}
//                     </button>
//                     <div className="lp-or">
//                       <div className="lp-orl" /><span>or</span><div className="lp-orl" />
//                     </div>
//                     <p className="lp-reg">
//                       Don't have an account?
//                       <Link to="/register">Create account</Link>
//                     </p>
//                   </>
//                 )}

//                 {otpStep === "otp" && (
//                   <>
//                     <button
//                       className="otp-back"
//                       onClick={() => { setOtpStep("mobile"); setOtp(["","","","","",""]); }}
//                     >
//                       ← मागे जा
//                     </button>
//                     <p className="lp-ftitle">OTP व्हेरिफाय करा</p>
//                     <p style={{ fontSize: 12.5, color: "rgba(245,231,194,0.62)", marginBottom: 16, fontFamily: "'Outfit',sans-serif" }}>
//                       <span style={{ color: "#CE9A54", fontWeight: 700 }}>+91 ******{mobileNo.slice(-3)}</span> वर OTP पाठवला
//                     </p>
//                     <div className="otp-row" onPaste={handleOtpPaste}>
//                       {otp.map((digit, i) => (
//                         <input
//                           key={i}
//                           ref={(el) => (otpRefs.current[i] = el)}
//                           className="otp-box"
//                           type="tel"
//                           maxLength={1}
//                           value={digit}
//                           placeholder="·"
//                           onChange={(e) => handleOtpChange(i, e.target.value)}
//                           onKeyDown={(e) => handleOtpKeyDown(i, e)}
//                         />
//                       ))}
//                     </div>
//                     <div className="otp-timer">
//                       {timeLeft > 0 ? (
//                         <>
//                           OTP expire होईल:{" "}
//                           <strong style={{ color: timeLeft <= 15 ? "#ff6b6b" : "#CE9A54" }}>
//                             {formatTime(timeLeft)}
//                           </strong>
//                         </>
//                       ) : (
//                         <span style={{ color: "#ff6b6b", fontWeight: 600 }}>OTP expire झाला!</span>
//                       )}
//                       <div style={{ marginTop: 6 }}>
//                         OTP नाही मिळाला?{" "}
//                         <button className="resend-btn" onClick={sendOtp} disabled={!canResend}>
//                           पुन्हा पाठवा
//                         </button>
//                       </div>
//                     </div>
//                     <button
//                       className="lp-sbtn green"
//                       onClick={verifyOtp}
//                       disabled={otp.join("").length < 6 || otpLoading}
//                     >
//                       {otpLoading ? "⏳ Verifying..." : "✅ Verify & Login"}
//                     </button>
//                   </>
//                 )}
//               </div>
//             )}

//             <div className="lp-cfooter">
//               <div className="lp-cfdot" />
//               <span>Secure Government Portal · All rights reserved</span>
//             </div>
//           </div>

//           {/* ── RIGHT: MAYOR PANEL ── */}
//           <div className="lp-mayor-panel">
//             <span className="lp-mp-icon tl">🏛️</span>
//             <span className="lp-mp-icon tr">🏥</span>
//             <span className="lp-mp-icon bl">🏗️</span>
//             <span className="lp-mp-icon br">🏢</span>

//             <div className="lp-mayor-photo-wrap">
//               <div className="lp-mayor-ring">
//                 <img src={mayorPhoto} alt="Mayor" className="lp-mayor-photo" />
//               </div>
//               <div className="lp-mayor-badge">🪑</div>
//             </div>

//             <p className="lp-mayor-name">मा. श्री.अजीव पाटील</p>
//             <p className="lp-mayor-title">मा. महापौर, वसई विरार शहर महानगरपालिका</p>

//             <div className="lp-mayor-bar-wrap">
//               <div className="lp-mayor-bar" />
//             </div>
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
import logo from "../assets/vvcmclogo.jpg";
import mayorPhoto from "../assets/ajivir5.jpeg";
import bgImage from "../assets/bg1.jpeg";
import axiosInstance from "../services/axiosInstance";
import Loader from "../components/common/Loader";
import { toast } from "react-toastify";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [tab, setTab] = useState("password");

  const [form, setForm]         = useState({ userName: "", password: "" });
  const [loading, setLoading]   = useState(false);
  const [showPass, setShowPass] = useState(false);

  const [otpStep, setOtpStep]           = useState("mobile");
  // const [mobileNo, setMobileNo]         = useState("");


// Read mobile from WhatsApp link if present
const mobileFromUrl = new URLSearchParams(window.location.search).get("mobile") || "";

const [tab, setTab] = useState(mobileFromUrl ? "otp" : "password");  // ← changed

const [mobileNo, setMobileNo] = useState(mobileFromUrl);  // ← changed


  const [otp, setOtp]                   = useState(["", "", "", "", "", ""]);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [timeLeft, setTimeLeft]         = useState(0);
  const [canResend, setCanResend]       = useState(false);
  const [otpLoading, setOtpLoading]     = useState(false);
  const otpRefs = useRef([]);

  // ── Auto-send OTP if mobile came from WhatsApp link ──
useEffect(() => {
  if (mobileFromUrl && mobileFromUrl.length === 10) {
    setTimeout(() => {
      sendOtp();
    }, 800);
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

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
    const corporation="VVCMC";
    const platformShort="VVMCDM"
    const usr="citizen"
    const platform="Divyang Kalyan Management System"
    const apkey="67e12059b220a"
    const fullName="Citizen"
    setGeneratedOtp(newOtp);
    setTimeLeft(60);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    const smsText = `Dear ${fullName} ${newOtp} is OTP for ${corporation} ${platform} login for ${usr} registration.${corporation}`;
    const smsApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=${apkey}&route=&sender=${platformShort}&mobileno=${mobile}&text=${encodeURIComponent(smsText)}`;
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
    // setMobileNo("");
     setMobileNo(t === "otp" ? mobileFromUrl : "");
    setTimeLeft(0);
  };

  return (
    <>
      {(loading || otpLoading) && <Loader />}

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

        .lp-root {
          min-height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
        }

        .lp-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: 68% center;
          filter: brightness(0.75) saturate(1.15);
          transition: transform 14s ease;
        }
        .lp-root:hover .lp-bg { transform: scale(1.02); }

        .lp-overlay {
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

        /* Multi-color top stripe */
        .lp-stripe {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg,
            var(--gold) 0%,
            var(--gold-light) 22%,
            var(--teal) 45%,
            var(--teal-dark) 65%,
            var(--green) 85%,
            var(--cream) 100%
          );
          z-index: 20;
        }

        /* ── WRAPPER ── */
        .lp-wrapper {
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
          animation: wrapperIn .5s cubic-bezier(.22,.9,.36,1) both;
        }
        @keyframes wrapperIn {
          from { opacity:0; transform:translateY(26px) scale(0.98); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }

        /* ── LEFT CARD ── */
        .lp-card {
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
          padding: 34px 32px 28px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .lp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
        }

        /* ── Logo row ── */
        .lp-logo-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(202,157,40,0.22);
          position: relative;
        }
        .lp-logo-row::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 55px; height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          border-radius: 2px;
        }
        .lp-logo-img {
          width: 54px; height: 54px;
          object-fit: contain;
          border-radius: 50%;
          border: 2px solid var(--gold-light);
          box-shadow:
            0 0 0 3px rgba(202,157,40,0.15),
            0 4px 20px rgba(0,0,0,0.32);
          flex-shrink: 0;
        }
        .lp-logo-texts { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
        .lp-logo-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--gold-light);
          line-height: 1.3;
          text-shadow: 0 1px 10px rgba(0,0,0,0.4);
        }
        .lp-logo-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 17px;
          font-weight: 500;
          color: rgba(245,231,194,0.72);
          letter-spacing: 0.4px;
        }

        /* ── TABS ── */
        .lp-tabs {
          display: flex;
          gap: 0;
          margin-bottom: 22px;
          background: rgba(0,0,0,0.34);
          border-radius: 14px;
          padding: 4px;
          border: 1px solid rgba(76,171,193,0.16);
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.22);
        }
        .lp-tab {
          flex: 1;
          padding: 9px 0;
          border: none;
          border-radius: 11px;
          font-size: 12px;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          transition: all .25s;
          color: rgba(245,231,194,0.48);
          background: transparent;
          letter-spacing: 0.2px;
        }
        .lp-tab.active {
          background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
          color: #fff;
          box-shadow:
            0 2px 14px rgba(76,171,193,0.42),
            inset 0 1px 0 rgba(245,231,194,0.14);
          font-weight: 700;
        }
        .lp-tab:not(.active):hover {
          color: var(--cream);
          background: rgba(76,171,193,0.12);
        }

        /* ── FORM ── */
        .lp-ftitle {
          font-size: 21px;
          font-weight: 700;
          color: var(--cream);
          margin-bottom: 18px;
          font-family: 'Outfit', sans-serif;
          letter-spacing: -0.3px;
          text-shadow: 0 1px 12px rgba(0,0,0,0.3);
        }

        .lp-fld { margin-bottom: 14px; }

        .lp-flbl {
          display: block;
          font-size: 11.5px;
          font-weight: 700;
          color: rgba(245,231,194,0.72);
          margin-bottom: 7px;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .lp-fwrap { position: relative; }

        .lp-finput {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid rgba(76,171,193,0.20);
          border-radius: 12px;
          font-size: 14px;
          color: #fff;
          background: rgba(12,68,80,0.58);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          outline: none;
          transition: all 0.2s;
          font-family: 'Outfit', sans-serif;
          box-shadow: inset 0 1px 0 rgba(245,231,194,0.06), 0 2px 8px rgba(0,0,0,0.14);
        }
        .lp-finput:focus {
          background: rgba(24,116,128,0.62);
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(76,171,193,0.18), inset 0 1px 0 rgba(245,231,194,0.08);
        }
        .lp-finput::placeholder { color: rgba(245,231,194,0.28); font-size: 13px; }
        .lp-finput.has-icon { padding-left: 42px; }

        .lp-ficon {
          position: absolute;
          left: 14px; top: 50%;
          transform: translateY(-50%);
          font-size: 15px;
          pointer-events: none;
          opacity: 0.48;
        }
        .lp-pbtn {
          position: absolute;
          right: 13px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          cursor: pointer; font-size: 15px;
          color: rgba(245,231,194,0.42);
          padding: 0; display: flex; align-items: center;
          transition: color .2s;
        }
        .lp-pbtn:hover { color: var(--cream); }

        .lp-prefix {
          position: absolute;
          left: 14px; top: 50%;
          transform: translateY(-50%);
          font-size: 12px; font-weight: 700;
          color: rgba(245,231,194,0.68);
          pointer-events: none; white-space: nowrap;
        }
        .lp-finput.with-prefix { padding-left: 74px; }

        /* ── BUTTONS ── */
        .lp-sbtn {
          width: 100%;
          padding: 13px;
          margin-top: 6px;
          background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
          color: #fff;
          font-size: 13px; font-weight: 800;
          letter-spacing: 1.5px;
          border: none; border-radius: 12px;
          cursor: pointer; transition: all 0.22s;
          position: relative; overflow: hidden;
          box-shadow: 0 4px 20px rgba(76,171,193,0.42), inset 0 1px 0 rgba(245,231,194,0.10);
          font-family: 'Outfit', sans-serif;
          text-transform: uppercase;
        }
        .lp-sbtn::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
        }
        .lp-sbtn::after {
          content: '';
          position: absolute; top: 0; left: -120%;
          width: 80%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
          transform: skewX(-20deg);
          transition: left 0.55s ease;
        }
        .lp-sbtn:hover::after { left: 140%; }
        .lp-sbtn:hover:not(:disabled) {
          background: linear-gradient(135deg, #3796ae 0%, var(--teal) 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(76,171,193,0.52);
        }
        .lp-sbtn:active:not(:disabled) { transform: translateY(0); }
        .lp-sbtn:disabled { opacity: 0.42; cursor: not-allowed; }

        .lp-sbtn.orange {
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          box-shadow: 0 4px 20px rgba(202,157,40,0.40);
        }
        .lp-sbtn.orange:hover:not(:disabled) {
          background: linear-gradient(135deg, #b5841f 0%, var(--gold) 100%);
          box-shadow: 0 10px 28px rgba(202,157,40,0.52);
        }

        .lp-sbtn.green {
          background: linear-gradient(135deg, #4e9148 0%, var(--green) 100%);
          box-shadow: 0 4px 20px rgba(102,169,98,0.40);
        }
        .lp-sbtn.green:hover:not(:disabled) {
          background: linear-gradient(135deg, #3d7a39 0%, #4e9148 100%);
          box-shadow: 0 10px 28px rgba(102,169,98,0.52);
        }

        /* ── OTP boxes ── */
        .otp-row {
          display: flex; gap: 8px;
          justify-content: center; margin-bottom: 16px;
        }
        .otp-box {
          width: 46px; height: 52px;
          border: 1px solid rgba(76,171,193,0.22);
          border-radius: 12px;
          font-size: 22px; font-weight: 800;
          text-align: center;
          color: var(--cream);
          font-family: 'Outfit', sans-serif;
          outline: none;
          background: rgba(12,68,80,0.58);
          backdrop-filter: blur(10px);
          transition: all .18s;
          box-shadow: inset 0 1px 0 rgba(245,231,194,0.06);
        }
        .otp-box:focus {
          background: rgba(24,116,128,0.65);
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(76,171,193,0.20);
          color: #fff;
        }
        .otp-box:not(:placeholder-shown) {
          background: rgba(24,116,128,0.55);
          border-color: var(--green);
          box-shadow: 0 0 0 2px rgba(102,169,98,0.28);
        }

        /* ── Timer & resend ── */
        .otp-timer {
          text-align: center; font-size: 12px;
          color: rgba(245,231,194,0.60);
          margin-bottom: 12px;
          font-family: 'Outfit', sans-serif;
        }
        .otp-timer strong { font-size: 13.5px; }
        .resend-btn {
          background: none; border: none;
          font-family: 'Outfit', sans-serif;
          font-size: 12.5px; font-weight: 700;
          cursor: pointer; transition: all .2s;
        }
        .resend-btn:disabled { color: rgba(245,231,194,0.22); cursor: not-allowed; }
        .resend-btn:not(:disabled) { color: var(--gold-light); }
        .resend-btn:not(:disabled):hover { color: var(--gold); text-decoration: underline; }

        /* ── Back button ── */
        .otp-back {
          background: none; border: none;
          font-family: 'Outfit', sans-serif;
          font-size: 12px; font-weight: 600;
          color: rgba(245,231,194,0.52);
          cursor: pointer;
          display: flex; align-items: center; gap: 4px;
          margin-bottom: 14px; padding: 0;
          transition: color .2s;
        }
        .otp-back:hover { color: var(--teal); }

        /* ── OR divider ── */
        .lp-or {
          display: flex; align-items: center;
          gap: 10px; margin: 16px 0 0;
        }
        .lp-orl { flex: 1; height: 1px; background: rgba(202,157,40,0.18); }
        .lp-or span {
          font-size: 10.5px; color: rgba(245,231,194,0.36);
          letter-spacing: 0.8px; text-transform: uppercase;
        }

        /* ── Register link ── */
        .lp-reg {
          margin-top: 12px; text-align: center;
          font-size: 13px; color: rgba(245,231,194,0.58);
          font-family: 'Outfit', sans-serif;
        }
        .lp-reg a {
          color: var(--cream); font-weight: 700;
          text-decoration: none; margin-left: 5px;
          padding-bottom: 1px;
          border-bottom: 1.5px solid var(--gold-light);
          transition: all .2s;
        }
        .lp-reg a:hover { color: var(--gold-light); border-color: var(--gold); }

        /* ── Card footer ── */
        .lp-cfooter {
          margin-top: auto; padding-top: 16px;
          border-top: 1px solid rgba(202,157,40,0.14);
          display: flex; align-items: center;
          justify-content: center; gap: 7px;
        }
        .lp-cfdot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 8px var(--green);
          animation: dotPulse 2.5s infinite;
        }
        @keyframes dotPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.45; transform:scale(1.7); }
        }
        .lp-cfooter span {
          font-size: 10.5px; color: rgba(245,231,194,0.28);
          letter-spacing: 0.3px;
        }

        /* ══════════════════════════════════════
           MAYOR PANEL
        ══════════════════════════════════════ */
        .lp-mayor-panel {
          width: 300px;
          background: linear-gradient(
            155deg,
            var(--teal-dark) 0%,
            var(--deep) 38%,
            #0b5e6b 72%,
            #093e4a 100%
          );
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 40px 26px;
          position: relative; overflow: hidden;
        }

        /* Animated gold shimmer top */
        .lp-mayor-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg,
            var(--gold), var(--gold-light), var(--cream),
            var(--gold-light), var(--gold)
          );
          background-size: 250%;
          animation: shimmerBar 3.5s linear infinite;
        }
        @keyframes shimmerBar {
          from { background-position: 0% center; }
          to   { background-position: 250% center; }
        }

        /* Soft radial glow behind photo */
        .lp-mayor-panel::after {
          content: '';
          position: absolute; top: 42%; left: 50%;
          transform: translate(-50%, -50%);
          width: 250px; height: 250px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(76,171,193,0.16) 0%, transparent 68%);
          pointer-events: none;
        }

        .lp-mp-icon {
          position: absolute; font-size: 30px;
          opacity: 0.14;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          transition: opacity .35s;
        }
        .lp-mayor-panel:hover .lp-mp-icon { opacity: 0.24; }
        .lp-mp-icon.tl { top: 26px;  left: 20px; }
        .lp-mp-icon.tr { top: 26px;  right: 20px; }
        .lp-mp-icon.bl { bottom: 48px; left: 20px; }
        .lp-mp-icon.br { bottom: 48px; right: 20px; }

        /* Mayor photo */
        .lp-mayor-photo-wrap {
          position: relative; margin-bottom: 20px; z-index: 2;
        }
        .lp-mayor-ring {
          width: 152px; height: 152px;
          border-radius: 50%; padding: 5px;
          background: conic-gradient(
            var(--gold) 0deg,
            var(--gold-light) 90deg,
            var(--cream) 180deg,
            var(--gold-light) 260deg,
            var(--gold) 360deg
          );
          box-shadow:
            0 8px 36px rgba(0,0,0,0.38),
            0 0 0 3px rgba(202,157,40,0.18);
        }
        .lp-mayor-photo {
          width: 100%; height: 100%;
          border-radius: 50%;
          object-fit: cover; object-position: top center;
          border: 3px solid rgba(255,255,255,0.92);
          display: block;
        }
        .lp-mayor-badge {
          position: absolute; bottom: 3px; right: 3px;
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg, #fff 0%, var(--cream) 100%);
          display: flex; align-items: center; justify-content: center;
          font-size: 17px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.28);
          border: 2px solid rgba(255,255,255,0.95);
        }

        .lp-mayor-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 21px; font-weight: 700;
          color: #fff; text-align: center;
          margin-bottom: 6px;
          text-shadow: 0 2px 14px rgba(0,0,0,0.30);
          line-height: 1.3; z-index: 2; position: relative;
        }
        .lp-mayor-title {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 11.5px;
          color: rgba(245,231,194,0.72);
          text-align: center; line-height: 1.6;
          margin-bottom: 22px; z-index: 2; position: relative;
        }

        .lp-mayor-bar-wrap {
          width: 110px; height: 5px;
          background: rgba(255,255,255,0.14);
          border-radius: 999px; overflow: hidden;
          z-index: 2; position: relative;
        }
        .lp-mayor-bar {
          width: 55%; height: 100%;
          background: linear-gradient(90deg, var(--green), #7dd87a);
          border-radius: 999px;
          box-shadow: 0 0 10px rgba(102,169,98,0.65);
          animation: barGlow 2.5s ease-in-out infinite;
        }
        @keyframes barGlow {
          0%,100% { opacity:1; }
          50% { opacity:0.60; }
        }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation: fadeUp .28s ease both; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .lp-mayor-panel { display: none; }
          .lp-card {
            border-right: 1px solid rgba(76,171,193,0.20);
            border-radius: 24px; width: 92%; max-width: 410px;
          }
          .lp-wrapper { border-radius: 24px; }
        }
      `}</style>

      <div className="lp-root">
        <div className="lp-bg" style={{ backgroundImage: `url(${bgImage})` }} />
        <div className="lp-overlay" />
        <div className="lp-stripe" />

        <div className="lp-wrapper">

          {/* ── LEFT: LOGIN CARD ── */}
          <div className="lp-card">

            <div className="lp-logo-row">
              <img src={logo} alt="VVCMC" className="lp-logo-img" />
              <div className="lp-logo-texts">
                <div className="lp-logo-name">वसई-विरार शहर महानगरपालिका</div>
                <div className="lp-logo-sub">जन संवाद</div>
              </div>
            </div>

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

                {otpStep === "otp" && (
                  <>
                    <button
                      className="otp-back"
                      onClick={() => { setOtpStep("mobile"); setOtp(["","","","","",""]); }}
                    >
                      ← मागे जा
                    </button>
                    <p className="lp-ftitle">OTP व्हेरिफाय करा</p>
                    <p style={{ fontSize: 12.5, color: "rgba(245,231,194,0.62)", marginBottom: 16, fontFamily: "'Outfit',sans-serif" }}>
                      <span style={{ color: "#CE9A54", fontWeight: 700 }}>+91 ******{mobileNo.slice(-3)}</span> वर OTP पाठवला
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
                          <strong style={{ color: timeLeft <= 15 ? "#ff6b6b" : "#CE9A54" }}>
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

            <div className="lp-cfooter">
              <div className="lp-cfdot" />
              <span>Secure Government Portal · All rights reserved</span>
            </div>
          </div>

          {/* ── RIGHT: MAYOR PANEL ── */}
          <div className="lp-mayor-panel">
            <span className="lp-mp-icon tl">🏛️</span>
            <span className="lp-mp-icon tr">🏥</span>
            <span className="lp-mp-icon bl">🏗️</span>
            <span className="lp-mp-icon br">🏢</span>

            <div className="lp-mayor-photo-wrap">
              <div className="lp-mayor-ring">
                <img src={mayorPhoto} alt="Mayor" className="lp-mayor-photo" />
              </div>
              <div className="lp-mayor-badge">🪑</div>
            </div>

            <p className="lp-mayor-name">मा. श्री.अजीव पाटील</p>
            <p className="lp-mayor-title">मा. महापौर, वसई विरार शहर महानगरपालिका</p>

            <div className="lp-mayor-bar-wrap">
              <div className="lp-mayor-bar" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}