import{u as K,a as s,j as e,L as z}from"./vendor-react-BwQSrn6v.js";import{a as J}from"./vendor-redux-BzC0OSN9.js";import{l as q,a as M}from"./index-lQwxFhQu.js";import{m as X}from"./ajivir5-0Blai2zW.js";import{h as H}from"./bg1-CoL5AQNs.js";import{a as w}from"./axiosInstance-CJqsiSYB.js";import{L as Q}from"./Loader-D5US2avv.js";import{y as o}from"./vendor-utils-CRNBIpRx.js";import"./vendor-icons-NNWxJ0Do.js";function ie(){const N=J(),j=K(),[i,L]=s.useState({userName:"",password:""}),[D,k]=s.useState(!1),[u,R]=s.useState(!1),[O,v]=s.useState("mobile"),g=new URLSearchParams(window.location.search).get("mobile")||"",[x,A]=s.useState(g?"otp":"password"),[m,S]=s.useState(g),[l,p]=s.useState(["","","","","",""]),[B,E]=s.useState(""),[d,y]=s.useState(0),[I,C]=s.useState(!1),[b,f]=s.useState(!1),c=s.useRef([]);s.useEffect(()=>{g&&g.length===10&&setTimeout(()=>{h()},800)},[]),s.useEffect(()=>{if(d<=0){C(!0);return}const a=setTimeout(()=>y(t=>t-1),1e3);return()=>clearTimeout(a)},[d]);const F=a=>`${String(Math.floor(a/60)).padStart(2,"0")}:${String(a%60).padStart(2,"0")}`,P=a=>L({...i,[a.target.name]:a.target.value}),Y=async a=>{if(a.preventDefault(),!i.userName.trim()){o.error("Please enter your username.");return}if(!i.password){o.error("Please enter your password.");return}try{k(!0);const r=(await w.post("/login",{userName:i.userName,password:i.password})).data;if(!r.success){o.error(r.message);return}const n={id:r.user.id,fullName:r.user.fullName,userName:r.user.userName,role:r.user.role,departmentName:r.user.departmentName,office:r.user.office,departmentCategory:r.user.departmentCategory,isStandingCommitteeMember:!!r.user.isStandingCommitteeMember,isGeneralBodyMember:r.user.isGeneralBodyMember!==!1,wardNo:r.user.wardNo,designation:r.user.designation};r.token&&localStorage.setItem("token",r.token),N(M(n)),localStorage.setItem("authUser",JSON.stringify(n)),localStorage.setItem("userRole",r.user.role),o.success("Login successful ✅"),j("/dashboard")}catch(t){const r=t?.response?.data?.message||"Server error. Backend चालू आहे का?";o.error(r)}finally{k(!1)}},h=async()=>{const a=m.trim();if(!/^[0-9]{10}$/.test(a)){o.error("Please enter a valid 10-digit mobile number.");return}f(!0);try{const r=(await w.post("/sendOtp",{mobileNo:a})).data;if(!r.success){o.error(r.message||"Failed to send OTP. Please try again.");return}const n=r.otp;E(n),y(60),C(!1),p(["","","","","",""]),o.success(`OTP has been sent to ******${a.slice(-3)} via WhatsApp.`),v("otp"),setTimeout(()=>c.current[0]?.focus(),120)}catch(t){const r=t?.response?.data?.message||"Server error ❌";o.error(r)}finally{f(!1)}},G=(a,t)=>{if(!/^[0-9]?$/.test(t))return;const r=[...l];r[a]=t,p(r),t&&a<5&&c.current[a+1]?.focus()},U=(a,t)=>{t.key==="Backspace"&&!l[a]&&a>0&&c.current[a-1]?.focus()},$=a=>{a.preventDefault();const t=a.clipboardData.getData("text").replace(/\D/g,"").slice(0,6),r=[...l];t.split("").forEach((n,W)=>{r[W]=n}),p(r),c.current[Math.min(t.length,5)]?.focus()},V=async()=>{const a=l.join("");if(a.length<6){o.error("Please enter the 6-digit OTP.");return}if(d<=0){o.error("OTP has expired. Please request a new OTP.");return}if(a!==B){o.error("❌ Invalid OTP. Please try again."),p(["","","","","",""]),c.current[0]?.focus();return}try{f(!0);const r=(await w.post("/loginByMobile",{mobileNo:m.trim()})).data;if(!r.success){o.error(r.message||"Mobile number नोंदणीकृत नाही");return}const n={id:r.user.id,fullName:r.user.fullName,userName:r.user.userName,role:r.user.role,departmentName:r.user.departmentName,office:r.user.office,departmentCategory:r.user.departmentCategory,isStandingCommitteeMember:!!r.user.isStandingCommitteeMember,isGeneralBodyMember:r.user.isGeneralBodyMember!==!1,wardNo:r.user.wardNo,designation:r.user.designation};r.token&&localStorage.setItem("token",r.token),N(M(n)),localStorage.setItem("authUser",JSON.stringify(n)),localStorage.setItem("userRole",r.user.role),o.success("✅ Login यशस्वी!"),j("/dashboard")}catch(t){const r=t?.response?.data?.message||"Server error";o.error(r)}finally{f(!1)}},T=a=>{A(a),v("mobile"),p(["","","","","",""]),S(a==="otp"?g:""),y(0)};return e.jsxs(e.Fragment,{children:[(D||b)&&e.jsx(Q,{}),e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"lp-root",children:[e.jsx("div",{className:"lp-bg",style:{backgroundImage:`url(${H})`}}),e.jsx("div",{className:"lp-overlay"}),e.jsx("div",{className:"lp-stripe"}),e.jsxs("div",{className:"lp-wrapper",children:[e.jsxs("div",{className:"lp-card",children:[e.jsxs("div",{className:"lp-logo-row",children:[e.jsx("img",{src:q,alt:"VVCMC",className:"lp-logo-img"}),e.jsxs("div",{className:"lp-logo-texts",children:[e.jsx("div",{className:"lp-logo-name",children:"वसई-विरार शहर महानगरपालिका"}),e.jsx("div",{className:"lp-logo-sub",children:"जन संवाद"})]})]}),e.jsxs("div",{className:"lp-tabs",children:[e.jsx("button",{className:`lp-tab ${x==="password"?"active":""}`,onClick:()=>T("password"),children:"🔒 Password Login"}),e.jsx("button",{className:`lp-tab ${x==="otp"?"active":""}`,onClick:()=>T("otp"),children:"📱 OTP Login"})]}),x==="password"&&e.jsxs("div",{className:"fade-up",children:[e.jsx("p",{className:"lp-ftitle",children:"Sign In to Continue"}),e.jsxs("form",{onSubmit:Y,children:[e.jsxs("div",{className:"lp-fld",children:[e.jsx("label",{className:"lp-flbl",children:"Username"}),e.jsxs("div",{className:"lp-fwrap",children:[e.jsx("span",{className:"lp-ficon",children:"👤"}),e.jsx("input",{className:"lp-finput has-icon",name:"userName",placeholder:"Enter your username",value:i.userName,onChange:P,autoComplete:"username"})]})]}),e.jsxs("div",{className:"lp-fld",children:[e.jsx("label",{className:"lp-flbl",children:"Password"}),e.jsxs("div",{className:"lp-fwrap",children:[e.jsx("span",{className:"lp-ficon",children:"🔒"}),e.jsx("input",{className:"lp-finput has-icon",type:u?"text":"password",name:"password",placeholder:"Enter your password",value:i.password,onChange:P,autoComplete:"current-password",style:{paddingRight:42}}),e.jsx("button",{type:"button",className:"lp-pbtn",onClick:()=>R(!u),tabIndex:-1,children:u?"🙈":"👁️"})]})]}),e.jsx("button",{type:"submit",className:"lp-sbtn",children:"SIGN IN →"})]}),e.jsxs("div",{className:"lp-or",children:[e.jsx("div",{className:"lp-orl"}),e.jsx("span",{children:"or"}),e.jsx("div",{className:"lp-orl"})]}),e.jsxs("p",{className:"lp-reg",children:["Don't have an account?",e.jsx(z,{to:"/register",children:"Create account"})]})]}),x==="otp"&&e.jsxs("div",{className:"fade-up",children:[O==="mobile"&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"lp-ftitle",children:"Mobile OTP Login"}),e.jsxs("div",{className:"lp-fld",children:[e.jsx("label",{className:"lp-flbl",children:"Mobile Number"}),e.jsxs("div",{className:"lp-fwrap",children:[e.jsx("span",{className:"lp-prefix",children:"🇮🇳 +91"}),e.jsx("input",{className:"lp-finput with-prefix",type:"tel",maxLength:10,placeholder:"Enter mobile number",value:m,onChange:a=>S(a.target.value.replace(/\D/g,"").slice(0,10)),onKeyDown:a=>a.key==="Enter"&&h()})]})]}),e.jsx("button",{className:"lp-sbtn orange",onClick:h,disabled:m.length!==10||b,children:b?"⏳ Sending...":"Send OTP →"}),e.jsxs("div",{className:"lp-or",children:[e.jsx("div",{className:"lp-orl"}),e.jsx("span",{children:"or"}),e.jsx("div",{className:"lp-orl"})]}),e.jsxs("p",{className:"lp-reg",children:["Don't have an account?",e.jsx(z,{to:"/register",children:"Create account"})]})]}),O==="otp"&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"otp-back",onClick:()=>{v("mobile"),p(["","","","","",""])},children:"← Back"}),e.jsx("p",{className:"lp-ftitle",children:"Verify OTP"}),e.jsxs("p",{style:{fontSize:12.5,color:"rgba(245,231,194,0.62)",marginBottom:16,fontFamily:"'Outfit',sans-serif"},children:[e.jsxs("span",{style:{color:"#CE9A54",fontWeight:700},children:["+91 ******",m.slice(-3)]})," OTP has been sent to"]}),e.jsx("div",{className:"otp-row",onPaste:$,children:l.map((a,t)=>e.jsx("input",{ref:r=>c.current[t]=r,className:"otp-box",type:"tel",maxLength:1,value:a,placeholder:"·",onChange:r=>G(t,r.target.value),onKeyDown:r=>U(t,r)},t))}),e.jsxs("div",{className:"otp-timer",children:[d>0?e.jsxs(e.Fragment,{children:["OTP expires in:"," ",e.jsx("strong",{style:{color:d<=15?"#ff6b6b":"#CE9A54"},children:F(d)})]}):e.jsx("span",{style:{color:"#ff6b6b",fontWeight:600},children:"OTP has expired!"}),e.jsxs("div",{style:{marginTop:6},children:["Didn't receive the OTP?"," ",e.jsx("button",{className:"resend-btn",onClick:h,disabled:!I,children:"Resend OTP"})]})]}),e.jsx("button",{className:"lp-sbtn green",onClick:V,disabled:l.join("").length<6||b,children:b?"⏳ Verifying...":"✅ Verify & Login"})]})]}),e.jsxs("div",{className:"lp-cfooter",children:[e.jsx("div",{className:"lp-cfdot"}),e.jsx("span",{children:"Secure Government Portal · All rights reserved"})]})]}),e.jsxs("div",{className:"lp-mayor-panel",children:[e.jsx("span",{className:"lp-mp-icon tl",children:"🏛️"}),e.jsx("span",{className:"lp-mp-icon tr",children:"🏥"}),e.jsx("span",{className:"lp-mp-icon bl",children:"🏗️"}),e.jsx("span",{className:"lp-mp-icon br",children:"🏢"}),e.jsxs("div",{className:"lp-mayor-photo-wrap",children:[e.jsx("div",{className:"lp-mayor-ring",children:e.jsx("img",{src:X,alt:"Mayor",className:"lp-mayor-photo"})}),e.jsx("div",{className:"lp-mayor-badge",children:"🪑"})]}),e.jsx("p",{className:"lp-mayor-name",children:"मा. श्री.अजीव पाटील"}),e.jsx("p",{className:"lp-mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),e.jsx("div",{className:"lp-mayor-bar-wrap",children:e.jsx("div",{className:"lp-mayor-bar"})})]})]})]})]})}export{ie as default};
