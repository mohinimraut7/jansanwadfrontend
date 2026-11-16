import{u as U,a as s,j as e}from"./vendor-react-BwQSrn6v.js";import{c as k}from"./citizenAxios-nN87ILv3.js";import{h as G}from"./bg1-CoL5AQNs.js";import{m as W}from"./ajivir5-0Blai2zW.js";import{l as J}from"./logo2new-B4VGcLNc.js";import"./vendor-utils-CRNBIpRx.js";function _(){const b=U(),[f,M]=s.useState("password"),[i,A]=s.useState({username:"",password:""}),[j,N]=s.useState(!1),[z,r]=s.useState(""),[h,O]=s.useState(!1),[S,u]=s.useState("mobile"),[x,T]=s.useState(""),[n,l]=s.useState(["","","","","",""]),[E,L]=s.useState(""),[c,v]=s.useState(0),[R,P]=s.useState(!1),[m,d]=s.useState(!1),p=s.useRef([]),C=a=>t=>A(o=>({...o,[a]:t.target.value}));s.useEffect(()=>{if(c<=0){P(!0);return}const a=setTimeout(()=>v(t=>t-1),1e3);return()=>clearTimeout(a)},[c]);const I=a=>`${String(Math.floor(a/60)).padStart(2,"0")}:${String(a%60).padStart(2,"0")}`,F=async a=>{if(a.preventDefault(),r(""),!i.username||!i.password){r("Please fill in all required fields. ❌");return}try{N(!0);const t=await k.post("/citizen/login",{username:i.username.trim(),password:i.password});if(!t.data.success){r(t.data.message||"Login failed ❌");return}localStorage.setItem("citizenUser",JSON.stringify(t.data.citizen)),localStorage.setItem("citizenToken",t.data.token||""),b("/my-appointments")}catch(t){r(t?.response?.data?.message||"Server Error ❌")}finally{N(!1)}},y=async()=>{const a=x.trim();if(!/^[0-9]{10}$/.test(a)){r("Please enter a valid mobile number.");return}r(""),d(!0);try{const g=await k.post("/citizen/check-mobile",{mobileNo:a});if(!g.data.success){r(g.data.message||"Mobile number is not registered. ❌"),d(!1);return}}catch(g){r(g?.response?.data?.message||"Mobile number is not registered. Please register first."),d(!1);return}const t=Math.floor(1e5+Math.random()*9e5).toString();L(t),v(60),P(!1),l(["","","","","",""]);const o=`Dear Citizen, Your OTP for VVCMC Jan Samvaad Portal login is ${t}. This OTP is valid for 60 seconds. Do not share this OTP with anyone. SAAVI INFINET`,w=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379315&number=${a}&message=${o}`;fetch(w,{method:"GET",mode:"no-cors"}).catch(()=>{}),u("otp"),d(!1),setTimeout(()=>p.current[0]?.focus(),120)},Y=async()=>{const a=n.join("");if(a.length<6){r("Please enter the 6-digit OTP.");return}if(c<=0){r("OTP has expired. Please request a new OTP.");return}if(a!==E){r("❌ Invalid OTP. Please try again."),l(["","","","","",""]),setTimeout(()=>p.current[0]?.focus(),50);return}try{d(!0),r("");const t=await k.post("/citizen/citizenLoginByMobile",{mobileNo:x.trim()});if(!t.data.success){r(t.data.message||"Login failed ❌");return}localStorage.setItem("citizenUser",JSON.stringify(t.data.citizen)),localStorage.setItem("citizenToken",t.data.token||""),b("/my-appointments")}catch(t){r(t?.response?.data?.message||"Server Error ❌")}finally{d(!1)}},B=(a,t)=>{if(!/^[0-9]?$/.test(t))return;const o=[...n];o[a]=t,l(o),t&&a<5&&p.current[a+1]?.focus()},V=(a,t)=>{t.key==="Backspace"&&!n[a]&&a>0&&p.current[a-1]?.focus()},$=a=>{a.preventDefault();const t=a.clipboardData.getData("text").replace(/\D/g,"").slice(0,6),o=[...n];t.split("").forEach((w,g)=>{o[g]=w}),l(o),p.current[Math.min(t.length,5)]?.focus()},D=a=>{M(a),r(""),u("mobile"),l(["","","","","",""]),T(""),v(0),O(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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

        .cl-root {
          min-height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
        }

        .cl-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: brightness(0.75) saturate(1.15);
          transition: transform 14s ease;
        }
        .cl-root:hover .cl-bg { transform: scale(1.02); }

        .cl-overlay {
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

        .cl-stripe {
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
        .cl-wrapper {
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
        .cl-card {
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
        .cl-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
        }

        /* ── Logo row ── */
        .cl-logo-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(202,157,40,0.22);
          position: relative;
        }
        .cl-logo-row::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 55px; height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          border-radius: 2px;
        }
        .cl-logo-img {
          width: 54px; height: 54px;
          object-fit: cover;
          border-radius: 50%;
          border: 2px solid var(--gold-light);
          box-shadow:
            0 0 0 3px rgba(202,157,40,0.15),
            0 4px 20px rgba(0,0,0,0.32);
          flex-shrink: 0;
        }
        .cl-logo-texts { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
        .cl-logo-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 15px;
          font-weight: 700;
          color: var(--gold-light);
          line-height: 1.3;
          text-shadow: 0 1px 10px rgba(0,0,0,0.4);
        }
        .cl-logo-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13px;
          font-weight: 500;
          color: rgba(245,231,194,0.60);
          letter-spacing: 0.4px;
        }

        /* ── Page title ── */
        .cl-page-title {
          font-size: 26px;
          font-weight: 800;
          color: var(--cream);
          margin-bottom: 4px;
          font-family: 'Outfit', sans-serif;
          letter-spacing: -0.5px;
          text-shadow: 0 1px 12px rgba(0,0,0,0.3);
        }
        .cl-page-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13px;
          color: rgba(245,231,194,0.55);
          margin-bottom: 18px;
        }

        /* ── TABS ── */
        .cl-tabs {
          display: flex;
          gap: 0;
          margin-bottom: 18px;
          background: rgba(0,0,0,0.34);
          border-radius: 14px;
          padding: 4px;
          border: 1px solid rgba(76,171,193,0.16);
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.22);
        }
        .cl-tab {
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
        .cl-tab.active {
          background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
          color: #fff;
          box-shadow:
            0 2px 14px rgba(76,171,193,0.42),
            inset 0 1px 0 rgba(245,231,194,0.14);
          font-weight: 700;
        }
        .cl-tab:not(.active):hover {
          color: var(--cream);
          background: rgba(76,171,193,0.12);
        }

        /* ── ERROR BOX ── */
        .cl-error {
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

        /* ── FORM FIELDS ── */
        .cl-fld { margin-bottom: 14px; }

        .cl-flbl {
          display: block;
          font-size: 11.5px;
          font-weight: 700;
          color: rgba(245,231,194,0.72);
          margin-bottom: 7px;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .cl-fwrap { position: relative; }

        .cl-finput {
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
        .cl-finput:focus {
          background: rgba(24,116,128,0.62);
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(76,171,193,0.18), inset 0 1px 0 rgba(245,231,194,0.08);
        }
        .cl-finput::placeholder { color: rgba(245,231,194,0.28); font-size: 13px; font-family: 'Tiro Devanagari Marathi', serif; }
        .cl-finput.has-icon { padding-left: 42px; }

        .cl-ficon {
          position: absolute;
          left: 14px; top: 50%;
          transform: translateY(-50%);
          font-size: 15px;
          pointer-events: none;
          opacity: 0.48;
        }
        .cl-pbtn {
          position: absolute;
          right: 13px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          cursor: pointer; font-size: 15px;
          color: rgba(245,231,194,0.42);
          padding: 0; display: flex; align-items: center;
          transition: color .2s;
        }
        .cl-pbtn:hover { color: var(--cream); }

        .cl-prefix {
          position: absolute;
          left: 14px; top: 50%;
          transform: translateY(-50%);
          font-size: 12px; font-weight: 700;
          color: rgba(245,231,194,0.68);
          pointer-events: none; white-space: nowrap;
        }
        .cl-finput.with-prefix { padding-left: 74px; }

        /* ── BUTTONS ── */
        .cl-sbtn {
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
        .cl-sbtn::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
        }
        .cl-sbtn::after {
          content: '';
          position: absolute; top: 0; left: -120%;
          width: 80%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
          transform: skewX(-20deg);
          transition: left 0.55s ease;
        }
        .cl-sbtn:hover::after { left: 140%; }
        .cl-sbtn:hover:not(:disabled) {
          background: linear-gradient(135deg, #3796ae 0%, var(--teal) 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(76,171,193,0.52);
        }
        .cl-sbtn:active:not(:disabled) { transform: translateY(0); }
        .cl-sbtn:disabled { opacity: 0.42; cursor: not-allowed; }

        .cl-sbtn.orange {
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          box-shadow: 0 4px 20px rgba(202,157,40,0.40);
        }
        .cl-sbtn.orange:hover:not(:disabled) {
          background: linear-gradient(135deg, #b5841f 0%, var(--gold) 100%);
          box-shadow: 0 10px 28px rgba(202,157,40,0.52);
        }

        .cl-sbtn.green {
          background: linear-gradient(135deg, #4e9148 0%, var(--green) 100%);
          box-shadow: 0 4px 20px rgba(102,169,98,0.40);
        }
        .cl-sbtn.green:hover:not(:disabled) {
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
        .cl-or {
          display: flex; align-items: center;
          gap: 10px; margin: 16px 0 0;
        }
        .cl-orl { flex: 1; height: 1px; background: rgba(202,157,40,0.18); }
        .cl-or span {
          font-size: 10.5px; color: rgba(245,231,194,0.36);
          letter-spacing: 0.8px; text-transform: uppercase;
        }

        /* ── Register link ── */
        .cl-reg {
          margin-top: 12px; text-align: center;
          font-size: 13px; color: rgba(245,231,194,0.58);
          font-family: 'Outfit', sans-serif;
        }
        .cl-reg a, .cl-reg span.cl-link {
          color: var(--cream); font-weight: 700;
          text-decoration: none; margin-left: 5px;
          padding-bottom: 1px;
          border-bottom: 1.5px solid var(--gold-light);
          transition: all .2s;
          cursor: pointer;
        }
        .cl-reg a:hover, .cl-reg span.cl-link:hover { color: var(--gold-light); border-color: var(--gold); }

        /* ── Card footer ── */
        .cl-cfooter {
          margin-top: auto; padding-top: 16px;
          border-top: 1px solid rgba(202,157,40,0.14);
          display: flex; align-items: center;
          justify-content: center; gap: 7px;
        }
        .cl-cfdot {
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
        .cl-cfooter span {
          font-size: 10.5px; color: rgba(245,231,194,0.28);
          letter-spacing: 0.3px;
        }

        /* ══════════════════════════════════════
           MAYOR PANEL
        ══════════════════════════════════════ */
        .cl-mayor-panel {
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

        .cl-mayor-panel::before {
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

        .cl-mayor-panel::after {
          content: '';
          position: absolute; top: 42%; left: 50%;
          transform: translate(-50%, -50%);
          width: 250px; height: 250px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(76,171,193,0.16) 0%, transparent 68%);
          pointer-events: none;
        }

        .cl-mp-icon {
          position: absolute; font-size: 30px;
          opacity: 0.14;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          transition: opacity .35s;
        }
        .cl-mayor-panel:hover .cl-mp-icon { opacity: 0.24; }
        .cl-mp-icon.tl { top: 26px;  left: 20px; }
        .cl-mp-icon.tr { top: 26px;  right: 20px; }
        .cl-mp-icon.bl { bottom: 48px; left: 20px; }
        .cl-mp-icon.br { bottom: 48px; right: 20px; }

        .cl-mayor-photo-wrap {
          position: relative; margin-bottom: 20px; z-index: 2;
        }
        .cl-mayor-ring {
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
        .cl-mayor-photo {
          width: 100%; height: 100%;
          border-radius: 50%;
          object-fit: cover; object-position: top center;
          border: 3px solid rgba(255,255,255,0.92);
          display: block;
        }
        .cl-mayor-badge {
          position: absolute; bottom: 3px; right: 3px;
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg, #fff 0%, var(--cream) 100%);
          display: flex; align-items: center; justify-content: center;
          font-size: 17px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.28);
          border: 2px solid rgba(255,255,255,0.95);
        }

        .cl-mayor-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 21px; font-weight: 700;
          color: #fff; text-align: center;
          margin-bottom: 6px;
          text-shadow: 0 2px 14px rgba(0,0,0,0.30);
          line-height: 1.3; z-index: 2; position: relative;
        }
        .cl-mayor-title {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 11.5px;
          color: rgba(245,231,194,0.72);
          text-align: center; line-height: 1.6;
          margin-bottom: 22px; z-index: 2; position: relative;
        }

        .cl-mayor-bar-wrap {
          width: 110px; height: 5px;
          background: rgba(255,255,255,0.14);
          border-radius: 999px; overflow: hidden;
          z-index: 2; position: relative;
        }
        .cl-mayor-bar {
          width: 65%; height: 100%;
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
          .cl-mayor-panel { display: none; }
          .cl-card {
            border-right: 1px solid rgba(76,171,193,0.20);
            border-radius: 24px; width: 92%; max-width: 410px;
          }
          .cl-wrapper { border-radius: 24px; }
        }
      `}),e.jsxs("div",{className:"cl-root",children:[e.jsx("div",{className:"cl-bg",style:{backgroundImage:`url(${G})`}}),e.jsx("div",{className:"cl-overlay"}),e.jsx("div",{className:"cl-stripe"}),e.jsxs("div",{className:"cl-wrapper",children:[e.jsxs("div",{className:"cl-card",children:[e.jsxs("div",{className:"cl-logo-row",children:[e.jsx("img",{src:J,alt:"VVCMC",className:"cl-logo-img"}),e.jsxs("div",{className:"cl-logo-texts",children:[e.jsx("div",{className:"cl-logo-name",children:"वसई-विरार शहर महानगरपालिका"}),e.jsx("div",{className:"cl-logo-sub",children:"जन संवाद · Citizen Portal"})]})]}),e.jsx("p",{className:"cl-page-title",children:"Welcome Back"}),e.jsx("p",{className:"cl-page-sub",children:"Sign in to the Mayor Appointment Portal."}),e.jsxs("div",{className:"cl-tabs",children:[e.jsx("button",{className:`cl-tab ${f==="password"?"active":""}`,onClick:()=>D("password"),children:"🔒 Password Login"}),e.jsx("button",{className:`cl-tab ${f==="otp"?"active":""}`,onClick:()=>D("otp"),children:"📱 OTP Login"})]}),z&&e.jsxs("div",{className:"cl-error",children:["⚠️ ",z]}),f==="password"&&e.jsxs("div",{className:"fade-up",children:[e.jsxs("form",{onSubmit:F,children:[e.jsxs("div",{className:"cl-fld",children:[e.jsx("label",{className:"cl-flbl",children:"Username"}),e.jsxs("div",{className:"cl-fwrap",children:[e.jsx("span",{className:"cl-ficon",children:"👤"}),e.jsx("input",{className:"cl-finput has-icon",type:"text",placeholder:"Enter your username",value:i.username,onChange:C("username"),autoComplete:"username",autoFocus:!0})]})]}),e.jsxs("div",{className:"cl-fld",children:[e.jsx("label",{className:"cl-flbl",children:"Password"}),e.jsxs("div",{className:"cl-fwrap",children:[e.jsx("span",{className:"cl-ficon",children:"🔒"}),e.jsx("input",{className:"cl-finput has-icon",type:h?"text":"password",placeholder:"Enter your password",value:i.password,onChange:C("password"),autoComplete:"current-password",style:{paddingRight:42}}),e.jsx("button",{type:"button",className:"cl-pbtn",onClick:()=>O(!h),tabIndex:-1,children:h?"🙈":"👁️"})]})]}),e.jsx("button",{type:"submit",className:"cl-sbtn",disabled:j||!i.username||!i.password,children:j?"⏳ Logging in...":"🔐 SIGN IN →"})]}),e.jsxs("div",{className:"cl-or",children:[e.jsx("div",{className:"cl-orl"}),e.jsx("span",{children:"or"}),e.jsx("div",{className:"cl-orl"})]}),e.jsxs("p",{className:"cl-reg",children:["Don't have an account?",e.jsx("span",{className:"cl-link",onClick:()=>b("/citizen-registration"),children:"Register"})]})]}),f==="otp"&&e.jsxs("div",{className:"fade-up",children:[S==="mobile"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cl-fld",children:[e.jsx("label",{className:"cl-flbl",children:"Mobile Number"}),e.jsxs("div",{className:"cl-fwrap",children:[e.jsx("span",{className:"cl-prefix",children:"🇮🇳 +91"}),e.jsx("input",{className:"cl-finput with-prefix",type:"tel",maxLength:10,placeholder:"Enter 10-digit mobile number",value:x,onChange:a=>T(a.target.value.replace(/\D/g,"").slice(0,10)),onKeyDown:a=>a.key==="Enter"&&y(),autoFocus:!0})]})]}),e.jsx("button",{className:"cl-sbtn orange",onClick:y,disabled:x.length!==10||m,children:m?"⏳ Sending...":"Send OTP →"}),e.jsxs("div",{className:"cl-or",children:[e.jsx("div",{className:"cl-orl"}),e.jsx("span",{children:"or"}),e.jsx("div",{className:"cl-orl"})]}),e.jsxs("p",{className:"cl-reg",children:["Account नाही?",e.jsx("span",{className:"cl-link",onClick:()=>b("/register"),children:"Register करा"})]})]}),S==="otp"&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"otp-back",onClick:()=>{u("mobile"),l(["","","","","",""]),r("")},children:"← मागे जा"}),e.jsxs("p",{style:{fontSize:12.5,color:"rgba(245,231,194,0.62)",marginBottom:16,fontFamily:"'Outfit',sans-serif"},children:[e.jsxs("span",{style:{color:"#CE9A54",fontWeight:700},children:["+91 ******",x.slice(-3)]})," ","OTP has been sent to"]}),e.jsx("div",{className:"otp-row",onPaste:$,children:n.map((a,t)=>e.jsx("input",{ref:o=>p.current[t]=o,className:"otp-box",type:"tel",maxLength:1,value:a,placeholder:"·",onChange:o=>B(t,o.target.value),onKeyDown:o=>V(t,o)},t))}),e.jsxs("div",{className:"otp-timer",children:[c>0?e.jsxs(e.Fragment,{children:["OTP expires in:"," ",e.jsx("strong",{style:{color:c<=15?"#ff6b6b":"#CE9A54"},children:I(c)})]}):e.jsx("span",{style:{color:"#ff6b6b",fontWeight:600},children:"OTP has expired!"}),e.jsxs("div",{style:{marginTop:6},children:["Didn't receive the OTP?"," ",e.jsx("button",{className:"resend-btn",onClick:y,disabled:!R,children:"Resend OTP"})]})]}),e.jsx("button",{className:"cl-sbtn green",onClick:Y,disabled:n.join("").length<6||m,children:m?"⏳ Verifying...":"✅ Verify & Login"})]})]}),e.jsxs("div",{className:"cl-cfooter",children:[e.jsx("div",{className:"cl-cfdot"}),e.jsx("span",{children:"Secure Citizen Portal · All rights reserved"})]})]}),e.jsxs("div",{className:"cl-mayor-panel",children:[e.jsx("span",{className:"cl-mp-icon tl",children:"🏛️"}),e.jsx("span",{className:"cl-mp-icon tr",children:"🤝"}),e.jsx("span",{className:"cl-mp-icon bl",children:"🏢"}),e.jsx("span",{className:"cl-mp-icon br",children:"🏙️"}),e.jsx("div",{className:"cl-mayor-photo-wrap",children:e.jsx("div",{className:"cl-mayor-ring",children:e.jsx("img",{src:W,alt:"Mayor",className:"cl-mayor-photo"})})}),e.jsx("p",{className:"cl-mayor-name",children:"मा. श्री.अजीव पाटील"}),e.jsx("p",{className:"cl-mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),e.jsx("div",{className:"cl-mayor-bar-wrap",children:e.jsx("div",{className:"cl-mayor-bar"})})]})]})]})]})}export{_ as default};
