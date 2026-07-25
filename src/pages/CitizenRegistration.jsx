import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import citizenAxios from "../services/citizenAxios";
import heroBg from "../assets/bg1.jpeg";
import mayorImg from "../assets/ajivir5.jpeg";

export default function CitizenRegistration() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "", userName: "", mobileNumber: "",
    email: "", address: "", pincode: "",
    password: "", confirmPassword: "",
  });
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const [success, setSuccess]   = useState(false);
  const [showPass, setShowPass]             = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [animated, setAnimated]             = useState(false);

  // ── OTP State ──────────────────────────────────────────────────────────────
  const [otpStep, setOtpStep]           = useState("form"); // "form" | "otp"
  const [otp, setOtp]                   = useState(["", "", "", "", "", ""]);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [timeLeft, setTimeLeft]         = useState(0);
  const [canResend, setCanResend]       = useState(false);
  const [otpLoading, setOtpLoading]     = useState(false);
  const otpRefs = useRef([]);

  const ch = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

  // Entrance animation
  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 60);
    return () => clearTimeout(t);
  }, []);

  // ── Countdown Timer ────────────────────────────────────────────────────────
  useEffect(() => {
    if (timeLeft <= 0) { setCanResend(true); return; }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft]);

  const formatTime = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  // ── Step 1: Validate form & Send OTP ──────────────────────────────────────
  const handleSendOtp = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setError("");

    if (!form.fullName || !form.mobileNumber || !form.password) {
      setError("All required fields must be filled ❌"); return;
    }
    if (!/^\d{10}$/.test(form.mobileNumber)) {
      setError("Mobile number must be 10 digits ❌"); return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters ❌"); return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match ❌"); return;
    }

    // ✅ Check if mobile already registered BEFORE sending OTP
    try {
      setOtpLoading(true);
      const checkRes = await citizenAxios.post("/citizen/check-mobile", { mobileNo: form.mobileNumber });
      if (checkRes.data.success) {
        setError("हा mobile number already registered आहे ❌ Please Login करा.");
        setOtpLoading(false);
        return;
      }
    } catch (err) {
      // 404 = not registered = good, continue sending OTP
      if (err?.response?.status !== 404) {
        setError("Server Error. Please try again ❌");
        setOtpLoading(false);
        return;
      }
    }

    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    setTimeLeft(60);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);

    const smsText = `Dear Citizen ${newOtp} is OTP for VVCMC Jan Samvaad Portal login for citizen registration.VVCMC SAAVI INFINET`;
    const smsApiUrl = `https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379312&number=${form.mobileNumber}&message=${encodeURIComponent(smsText)}`;

    fetch(smsApiUrl, { method: "GET", mode: "no-cors" }).catch(() => {});

    setOtpStep("otp");
    setOtpLoading(false);
    setTimeout(() => otpRefs.current[0]?.focus(), 120);
  };

  // ── Step 2: Verify OTP & Register ─────────────────────────────────────────
  const handleRegister = async () => {
    const entered = otp.join("");
    if (entered.length < 6) { setError("Enter 6 digit OTP ❌"); return; }
    if (timeLeft <= 0)       { setError("OTP expired! Please resend ❌"); return; }
    if (entered !== generatedOtp) {
      setError("Wrong OTP! Please try again ❌");
      setOtp(["", "", "", "", "", ""]);
      setTimeout(() => otpRefs.current[0]?.focus(), 50);
      return;
    }

    try {
      setLoading(true);
      setError("");
      const res = await citizenAxios.post("/citizen/register", {
        fullName: form.fullName, userName: form.userName,
        mobileNumber: form.mobileNumber, address: form.address,
        pincode: form.pincode, email: form.email, password: form.password,
      });
      if (!res.data.success) { setError(res.data.message || "Registration failed ❌"); return; }
      setSuccess(true);
      setTimeout(() => navigate("/citizen-login"), 2000);
    } catch (e) {
      setError(e?.response?.data?.message || "Server Error ❌");
    } finally { setLoading(false); }
  };

  // ── OTP Box Handlers ───────────────────────────────────────────────────────
  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const next = [...otp]; next[index] = value; setOtp(next);
    if (value && index < 5) otpRefs.current[index + 1]?.focus();
  };
  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0)
      otpRefs.current[index - 1]?.focus();
  };
  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const next = [...otp];
    pasted.split("").forEach((ch, i) => { next[i] = ch; });
    setOtp(next);
    otpRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  return (
    <>
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

        .rp-root {
          min-height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
          padding: 24px 0;
        }

        .rp-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
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
          transition: transform 0.85s cubic-bezier(0.22,0.9,0.36,1),
                      opacity   0.60s ease;
        }

        /* ── LEFT CARD ── */
        .rp-card {
          width: 500px;
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
          overflow-y: auto;
          max-height: 96vh;
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
          flex-shrink: 0;
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
          width: 50px; height: 50px;
          object-fit: cover;
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
          color: rgba(245,231,194,0.60); letter-spacing: 0.4px;
        }

        /* Page heading */
        .rp-page-title {
          font-size: 24px; font-weight: 800;
          color: var(--cream); margin-bottom: 2px;
          font-family: 'Outfit', sans-serif; letter-spacing: -0.5px;
          text-shadow: 0 1px 12px rgba(0,0,0,0.3);
        }
        .rp-page-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13px;
          color: rgba(245,231,194,0.52);
          margin-bottom: 16px;
        }

        /* ── ERROR / SUCCESS boxes ── */
        .rp-error {
          background: rgba(220,38,38,0.18);
          border: 1px solid rgba(220,38,38,0.38);
          border-radius: 10px;
          padding: 11px 14px;
          font-size: 12.5px;
          color: #fca5a5;
          margin-bottom: 14px;
          font-weight: 500;
          font-family: 'Outfit', sans-serif;
        }
        .rp-success {
          background: rgba(102,169,98,0.18);
          border: 1px solid rgba(102,169,98,0.40);
          border-radius: 12px;
          padding: 20px;
          font-size: 14px;
          color: #86efac;
          font-weight: 600;
          text-align: center;
          margin-bottom: 16px;
          font-family: 'Outfit', sans-serif;
        }

        /* ── 2-column grid ── */
        .rp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 16px;
        }
        .rp-fld      { margin-bottom: 12px; }
        .rp-fld.full { grid-column: 1 / -1; }

        .rp-flbl {
          display: block; font-size: 11px; font-weight: 700;
          color: rgba(245,231,194,0.72); margin-bottom: 6px;
          font-family: 'Outfit', sans-serif; letter-spacing: 0.8px;
          text-transform: uppercase;
        }
        .rp-req { color: #fca5a5; margin-left: 2px; }

        .rp-fwrap { position: relative; }

        .rp-finput {
          width: 100%;
          padding: 10px 14px 10px 40px;
          border: 1px solid rgba(76,171,193,0.20);
          border-radius: 10px;
          font-size: 13px; color: #fff;
          background: rgba(12,68,80,0.58);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          outline: none; transition: all 0.2s;
          font-family: 'Outfit', sans-serif;
          box-shadow: inset 0 1px 0 rgba(245,231,194,0.06), 0 2px 8px rgba(0,0,0,0.14);
        }
        .rp-finput:focus {
          background: rgba(24,116,128,0.62);
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(76,171,193,0.18), inset 0 1px 0 rgba(245,231,194,0.08);
        }
        .rp-finput::placeholder { color: rgba(245,231,194,0.28); font-size: 12px; font-family: 'Tiro Devanagari Marathi', serif; }
        .rp-finput.no-icon { padding-left: 14px; }

        .rp-ficon {
          position: absolute; left: 12px; top: 50%;
          transform: translateY(-50%); font-size: 14px;
          pointer-events: none; opacity: 0.48;
        }
        .rp-pbtn {
          position: absolute; right: 11px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none; cursor: pointer; font-size: 14px;
          color: rgba(245,231,194,0.42); padding: 0;
          display: flex; align-items: center; transition: color .2s;
        }
        .rp-pbtn:hover { color: var(--cream); }

        .rp-input-hint {
          font-size: 10.5px;
          color: rgba(245,231,194,0.32);
          margin-top: 4px;
          font-family: 'Outfit', sans-serif;
        }

        /* ── BUTTONS ── */
        .rp-sbtn {
          width: 100%; padding: 13px; margin-top: 6px;
          background: linear-gradient(135deg, var(--green) 0%, #4e9148 100%);
          color: #fff; font-size: 13px; font-weight: 800; letter-spacing: 1.2px;
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
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(102,169,98,0.52);
        }
        .rp-sbtn:active:not(:disabled) { transform: translateY(0); }
        .rp-sbtn:disabled { opacity: 0.42; cursor: not-allowed; }

        .rp-sbtn.teal {
          background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
          box-shadow: 0 4px 20px rgba(76,171,193,0.42);
        }
        .rp-sbtn.teal:hover:not(:disabled) {
          background: linear-gradient(135deg, #3796ae 0%, var(--teal) 100%);
          box-shadow: 0 10px 28px rgba(76,171,193,0.52);
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

        /* Timer */
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

        /* Back btn */
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

        /* Footer */
        .rp-signin {
          margin-top: 14px; text-align: center; font-size: 13px;
          color: rgba(245,231,194,0.58); font-family: 'Outfit', sans-serif;
        }
        .rp-signin span.rp-link {
          color: var(--cream); font-weight: 700;
          text-decoration: none; margin-left: 5px; padding-bottom: 1px;
          border-bottom: 1.5px solid var(--gold-light); transition: all .2s; cursor: pointer;
        }
        .rp-signin span.rp-link:hover { color: var(--gold-light); border-color: var(--gold); }

        .rp-cfooter {
          margin-top: auto; padding-top: 14px; flex-shrink: 0;
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
          transition: transform 0.80s cubic-bezier(0.22,0.9,0.36,1) 0.10s,
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
          margin-bottom: 18px; z-index: 2; position: relative;
        }

        /* Info card in mayor panel */
        .rp-mayor-info {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 14px;
          padding: 14px 16px;
          width: 100%;
          z-index: 2; position: relative;
        }
        .rp-mayor-info-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 12.5px;
          color: rgba(245,231,194,0.88);
          font-family: 'Tiro Devanagari Marathi', serif;
          padding: 7px 0;
        }
        .rp-mayor-info-item:not(:last-child) {
          border-bottom: 1px solid rgba(255,255,255,0.10);
        }
        .rp-mayor-info-icon { font-size: 17px; flex-shrink: 0; }

        .rp-mayor-bar-wrap {
          width: 110px; height: 5px; background: rgba(255,255,255,0.14);
          border-radius: 999px; overflow: hidden; z-index: 2; position: relative;
          margin-bottom: 18px;
        }
        .rp-mayor-bar {
          width: 65%; height: 100%;
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
          .rp-card { border-right: 1px solid rgba(76,171,193,0.20); border-radius: 24px; width: 92%; max-width: 500px; }
          .rp-wrapper { border-radius: 24px; }
          .rp-grid { grid-template-columns: 1fr; }
          .rp-fld.full { grid-column: 1; }
        }
      `}</style>

      <div className="rp-root">
        <div className="rp-bg" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="rp-overlay" />
        <div className="rp-stripe" />

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
              <img src={mayorImg} alt="VVCMC" className="rp-logo-img" style={{ objectPosition: "top center" }} />
              <div className="rp-logo-texts">
                <div className="rp-logo-name">वसई-विरार शहर महानगरपालिका</div>
                <div className="rp-logo-sub">जन संवाद · Citizen Portal</div>
              </div>
            </div>

            <div className="fade-up">
              <p className="rp-page-title">Account तयार करा</p>
              <p className="rp-page-sub">Mayor Appointment बुक करण्यासाठी register करा</p>

              {/* ════ SUCCESS ════ */}
              {success ? (
                <div className="rp-success">
                  ✅ Registration successful!<br />
                  <span style={{ fontSize: 13, fontWeight: 400, opacity: 0.8 }}>
                    Login page वर redirect होत आहे...
                  </span>
                </div>

              ) : otpStep === "otp" ? (

                /* ════ OTP VERIFICATION STEP ════ */
                <>
                  <button
                    className="otp-back"
                    onClick={() => { setOtpStep("form"); setOtp(["","","","","",""]); setError(""); }}
                  >
                    ← Go Back
                  </button>

                  <p style={{ fontSize: 12.5, color: "rgba(245,231,194,0.62)", marginBottom: 16, fontFamily: "'Outfit',sans-serif" }}>
                    OTP sent to{" "}
                    <span style={{ color: "#CE9A54", fontWeight: 700 }}>
                      +91 ******{form.mobileNumber.slice(-3)}
                    </span>
                  </p>

                  {error && <div className="rp-error">⚠️ {error}</div>}

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
                        OTP expires in:{" "}
                        <strong style={{ color: timeLeft <= 15 ? "#ff6b6b" : "#CE9A54" }}>
                          {formatTime(timeLeft)}
                        </strong>
                      </>
                    ) : (
                      <span style={{ color: "#ff6b6b", fontWeight: 600 }}>OTP expired!</span>
                    )}
                    <div style={{ marginTop: 6 }}>
                      Did not receive OTP?{" "}
                      <button className="resend-btn" onClick={handleSendOtp} disabled={!canResend}>
                        Resend OTP
                      </button>
                    </div>
                  </div>

                  <button
                    className="rp-sbtn teal"
                    onClick={handleRegister}
                    disabled={otp.join("").length < 6 || loading}
                  >
                    {loading ? "⏳ Registering..." : "✅ Verify & Register"}
                  </button>
                </>

              ) : (

                /* ════ REGISTRATION FORM STEP ════ */
                <>
                  {error && <div className="rp-error">⚠️ {error}</div>}

                  <form onSubmit={handleSendOtp}>
                    <div className="rp-grid">

                      {/* Full Name */}
                      <div className="rp-fld">
                        <label className="rp-flbl">Full Name <span className="rp-req">*</span></label>
                        <div className="rp-fwrap">
                          <span className="rp-ficon">👤</span>
                          <input
                            className="rp-finput"
                            type="text"
                            placeholder="आपले पूर्ण नाव"
                            value={form.fullName}
                            onChange={ch("fullName")}
                            autoFocus
                          />
                        </div>
                      </div>

                      {/* User Name */}
                      <div className="rp-fld">
                        <label className="rp-flbl">User Name</label>
                        <div className="rp-fwrap">
                          <span className="rp-ficon">🪪</span>
                          <input
                            className="rp-finput"
                            type="text"
                            placeholder="Username"
                            value={form.userName}
                            onChange={ch("userName")}
                          />
                        </div>
                      </div>

                      {/* Mobile */}
                      <div className="rp-fld">
                        <label className="rp-flbl">Mobile Number <span className="rp-req">*</span></label>
                        <div className="rp-fwrap">
                          <span className="rp-ficon">📱</span>
                          <input
                            className="rp-finput"
                            type="tel"
                            placeholder="10 digit mobile"
                            value={form.mobileNumber}
                            onChange={ch("mobileNumber")}
                            maxLength={10}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="rp-fld">
                        <label className="rp-flbl">Email</label>
                        <div className="rp-fwrap">
                          <span className="rp-ficon">✉️</span>
                          <input
                            className="rp-finput"
                            type="email"
                            placeholder="Email (optional)"
                            value={form.email}
                            onChange={ch("email")}
                          />
                        </div>
                      </div>

                      {/* Address */}
                      <div className="rp-fld">
                        <label className="rp-flbl">Address</label>
                        <div className="rp-fwrap">
                          <span className="rp-ficon">🏠</span>
                          <input
                            className="rp-finput"
                            type="text"
                            placeholder="Address"
                            value={form.address}
                            onChange={ch("address")}
                          />
                        </div>
                      </div>

                      {/* Pincode */}
                      <div className="rp-fld">
                        <label className="rp-flbl">Pincode</label>
                        <div className="rp-fwrap">
                          <span className="rp-ficon">📍</span>
                          <input
                            className="rp-finput"
                            type="text"
                            placeholder="Pincode"
                            value={form.pincode}
                            onChange={ch("pincode")}
                            maxLength={6}
                          />
                        </div>
                      </div>

                      {/* Password */}
                      <div className="rp-fld">
                        <label className="rp-flbl">Password <span className="rp-req">*</span></label>
                        <div className="rp-fwrap">
                          <span className="rp-ficon">🔒</span>
                          <input
                            className="rp-finput"
                            type={showPass ? "text" : "password"}
                            placeholder="Min. 6 characters"
                            value={form.password}
                            onChange={ch("password")}
                            style={{ paddingRight: 38 }}
                          />
                          <button type="button" className="rp-pbtn"
                            onClick={() => setShowPass(!showPass)} tabIndex={-1}>
                            {showPass ? "🙈" : "👁️"}
                          </button>
                        </div>
                        <div className="rp-input-hint">किमान 6 characters</div>
                      </div>

                      {/* Confirm Password */}
                      <div className="rp-fld">
                        <label className="rp-flbl">Confirm Password <span className="rp-req">*</span></label>
                        <div className="rp-fwrap">
                          <span className="rp-ficon">🔐</span>
                          <input
                            className="rp-finput"
                            type={showConfirmPass ? "text" : "password"}
                            placeholder="Password परत टाका"
                            value={form.confirmPassword}
                            onChange={ch("confirmPassword")}
                            style={{ paddingRight: 38 }}
                          />
                          <button type="button" className="rp-pbtn"
                            onClick={() => setShowConfirmPass(!showConfirmPass)} tabIndex={-1}>
                            {showConfirmPass ? "🙈" : "👁️"}
                          </button>
                        </div>
                      </div>

                    </div>

                    <button
                      type="submit"
                      className="rp-sbtn"
                      disabled={
                        otpLoading ||
                        !form.fullName || !form.mobileNumber ||
                        !form.password || !form.confirmPassword
                      }
                    >
                      {otpLoading ? "⏳ Sending OTP..." : "📱 Send OTP & Register"}
                    </button>
                  </form>

                  <p className="rp-signin">
                    Already have an account?
                    <span className="rp-link" onClick={() => navigate("/login")}>Login</span>
                  </p>
                </>
              )}
            </div>

            <div className="rp-cfooter">
              <div className="rp-cfdot" />
              <span>Secure Citizen Portal · All rights reserved</span>
            </div>
          </div>

          {/* ── RIGHT: MAYOR PANEL ── */}
          <div
            className="rp-mayor-panel"
            style={{
              opacity:   animated ? 1 : 0,
              transform: animated ? 'translate(0,0)' : 'translate(80px,-60px)',
            }}
          >
            <span className="rp-mp-icon tl">🏛️</span>
            <span className="rp-mp-icon tr">🤝</span>
            <span className="rp-mp-icon bl">🏢</span>
            <span className="rp-mp-icon br">🏙️</span>

            <div className="rp-mayor-photo-wrap">
              <div className="rp-mayor-ring">
                <img src={mayorImg} alt="Mayor" className="rp-mayor-photo" />
              </div>
              <div className="rp-mayor-badge">🪑</div>
            </div>

            <p className="rp-mayor-name">मा. श्री.अजीव पाटील</p>
            <p className="rp-mayor-title">मा. महापौर, वसई विरार शहर महानगरपालिका</p>

            <div className="rp-mayor-bar-wrap">
              <div className="rp-mayor-bar" />
            </div>

            <div className="rp-mayor-info">
              <div className="rp-mayor-info-item">
                <span className="rp-mayor-info-icon">📅</span>
                <span>Appointment सहज बुक करा</span>
              </div>
              <div className="rp-mayor-info-item">
                <span className="rp-mayor-info-icon">🔔</span>
                <span>SMS द्वारे notification मिळवा</span>
              </div>
              <div className="rp-mayor-info-item">
                <span className="rp-mayor-info-icon">🛡️</span>
                <span>Secure Government Portal</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}