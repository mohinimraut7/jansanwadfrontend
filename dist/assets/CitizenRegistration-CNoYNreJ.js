import{u as q,a as s,j as e}from"./vendor-react-BwQSrn6v.js";import{c as C}from"./citizenAxios-nN87ILv3.js";import{h as G}from"./bg1-CoL5AQNs.js";import{m as S}from"./ajivir5-0Blai2zW.js";import"./vendor-utils-CRNBIpRx.js";function Q(){const v=q(),[r,O]=s.useState({fullName:"",userName:"",mobileNumber:"",email:"",address:"",pincode:"",password:"",confirmPassword:""}),[y,N]=s.useState(!1),[g,i]=s.useState(""),[T,A]=s.useState(!1),[b,R]=s.useState(!1),[h,E]=s.useState(!1),[m,M]=s.useState(!1),[D,j]=s.useState("form"),[l,c]=s.useState(["","","","","",""]),[L,F]=s.useState(""),[p,w]=s.useState(0),[V,k]=s.useState(!1),[z,f]=s.useState(!1),d=s.useRef([]),n=a=>t=>O(o=>({...o,[a]:t.target.value}));s.useEffect(()=>{const a=setTimeout(()=>M(!0),60);return()=>clearTimeout(a)},[]),s.useEffect(()=>{if(p<=0){k(!0);return}const a=setTimeout(()=>w(t=>t-1),1e3);return()=>clearTimeout(a)},[p]);const I=a=>`${String(Math.floor(a/60)).padStart(2,"0")}:${String(a%60).padStart(2,"0")}`,P=async a=>{if(a&&a.preventDefault&&a.preventDefault(),i(""),!r.fullName||!r.mobileNumber||!r.password){i("All required fields must be filled ❌");return}if(!/^\d{10}$/.test(r.mobileNumber)){i("Mobile number must be 10 digits ❌");return}if(r.password.length<6){i("Password must be at least 6 characters ❌");return}if(r.password!==r.confirmPassword){i("Passwords do not match ❌");return}try{if(f(!0),(await C.post("/citizen/check-mobile",{mobileNo:r.mobileNumber})).data.success){i("हा mobile number already registered आहे ❌ Please Login करा."),f(!1);return}}catch(x){if(x?.response?.status!==404){i("Server Error. Please try again ❌"),f(!1);return}}const t=Math.floor(1e5+Math.random()*9e5).toString();F(t),w(60),k(!1),c(["","","","","",""]);const o=`Dear Citizen ${t} is OTP for VVCMC Jan Samvaad Portal login for citizen registration.VVCMC SAAVI INFINET`,u=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379312&number=${r.mobileNumber}&message=${encodeURIComponent(o)}`;fetch(u,{method:"GET",mode:"no-cors"}).catch(()=>{}),j("otp"),f(!1),setTimeout(()=>d.current[0]?.focus(),120)},B=async()=>{const a=l.join("");if(a.length<6){i("Enter 6 digit OTP ❌");return}if(p<=0){i("OTP expired! Please resend ❌");return}if(a!==L){i("Wrong OTP! Please try again ❌"),c(["","","","","",""]),setTimeout(()=>d.current[0]?.focus(),50);return}try{N(!0),i("");const t=await C.post("/citizen/register",{fullName:r.fullName,userName:r.userName,mobileNumber:r.mobileNumber,address:r.address,pincode:r.pincode,email:r.email,password:r.password});if(!t.data.success){i(t.data.message||"Registration failed ❌");return}A(!0),setTimeout(()=>v("/citizen-login"),2e3)}catch(t){i(t?.response?.data?.message||"Server Error ❌")}finally{N(!1)}},U=(a,t)=>{if(!/^[0-9]?$/.test(t))return;const o=[...l];o[a]=t,c(o),t&&a<5&&d.current[a+1]?.focus()},Y=(a,t)=>{t.key==="Backspace"&&!l[a]&&a>0&&d.current[a-1]?.focus()},$=a=>{a.preventDefault();const t=a.clipboardData.getData("text").replace(/\D/g,"").slice(0,6),o=[...l];t.split("").forEach((u,x)=>{o[x]=u}),c(o),d.current[Math.min(t.length,5)]?.focus()};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"rp-root",children:[e.jsx("div",{className:"rp-bg",style:{backgroundImage:`url(${G})`}}),e.jsx("div",{className:"rp-overlay"}),e.jsx("div",{className:"rp-stripe"}),e.jsxs("div",{className:"rp-wrapper",style:{opacity:m?1:0,transform:m?"translateX(0)":"translateX(160px)"},children:[e.jsxs("div",{className:"rp-card",children:[e.jsxs("div",{className:"rp-logo-row",children:[e.jsx("img",{src:S,alt:"VVCMC",className:"rp-logo-img",style:{objectPosition:"top center"}}),e.jsxs("div",{className:"rp-logo-texts",children:[e.jsx("div",{className:"rp-logo-name",children:"वसई-विरार शहर महानगरपालिका"}),e.jsx("div",{className:"rp-logo-sub",children:"जन संवाद · Citizen Portal"})]})]}),e.jsxs("div",{className:"fade-up",children:[e.jsx("p",{className:"rp-page-title",children:"Account तयार करा"}),e.jsx("p",{className:"rp-page-sub",children:"Mayor Appointment बुक करण्यासाठी register करा"}),T?e.jsxs("div",{className:"rp-success",children:["✅ Registration successful!",e.jsx("br",{}),e.jsx("span",{style:{fontSize:13,fontWeight:400,opacity:.8},children:"Login page वर redirect होत आहे..."})]}):D==="otp"?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"otp-back",onClick:()=>{j("form"),c(["","","","","",""]),i("")},children:"← Go Back"}),e.jsxs("p",{style:{fontSize:12.5,color:"rgba(245,231,194,0.62)",marginBottom:16,fontFamily:"'Outfit',sans-serif"},children:["OTP sent to"," ",e.jsxs("span",{style:{color:"#CE9A54",fontWeight:700},children:["+91 ******",r.mobileNumber.slice(-3)]})]}),g&&e.jsxs("div",{className:"rp-error",children:["⚠️ ",g]}),e.jsx("div",{className:"otp-row",onPaste:$,children:l.map((a,t)=>e.jsx("input",{ref:o=>d.current[t]=o,className:"otp-box",type:"tel",maxLength:1,value:a,placeholder:"·",onChange:o=>U(t,o.target.value),onKeyDown:o=>Y(t,o)},t))}),e.jsxs("div",{className:"otp-timer",children:[p>0?e.jsxs(e.Fragment,{children:["OTP expires in:"," ",e.jsx("strong",{style:{color:p<=15?"#ff6b6b":"#CE9A54"},children:I(p)})]}):e.jsx("span",{style:{color:"#ff6b6b",fontWeight:600},children:"OTP expired!"}),e.jsxs("div",{style:{marginTop:6},children:["Did not receive OTP?"," ",e.jsx("button",{className:"resend-btn",onClick:P,disabled:!V,children:"Resend OTP"})]})]}),e.jsx("button",{className:"rp-sbtn teal",onClick:B,disabled:l.join("").length<6||y,children:y?"⏳ Registering...":"✅ Verify & Register"})]}):e.jsxs(e.Fragment,{children:[g&&e.jsxs("div",{className:"rp-error",children:["⚠️ ",g]}),e.jsxs("form",{onSubmit:P,children:[e.jsxs("div",{className:"rp-grid",children:[e.jsxs("div",{className:"rp-fld",children:[e.jsxs("label",{className:"rp-flbl",children:["Full Name ",e.jsx("span",{className:"rp-req",children:"*"})]}),e.jsxs("div",{className:"rp-fwrap",children:[e.jsx("span",{className:"rp-ficon",children:"👤"}),e.jsx("input",{className:"rp-finput",type:"text",placeholder:"आपले पूर्ण नाव",value:r.fullName,onChange:n("fullName"),autoFocus:!0})]})]}),e.jsxs("div",{className:"rp-fld",children:[e.jsx("label",{className:"rp-flbl",children:"User Name"}),e.jsxs("div",{className:"rp-fwrap",children:[e.jsx("span",{className:"rp-ficon",children:"🪪"}),e.jsx("input",{className:"rp-finput",type:"text",placeholder:"Username",value:r.userName,onChange:n("userName")})]})]}),e.jsxs("div",{className:"rp-fld",children:[e.jsxs("label",{className:"rp-flbl",children:["Mobile Number ",e.jsx("span",{className:"rp-req",children:"*"})]}),e.jsxs("div",{className:"rp-fwrap",children:[e.jsx("span",{className:"rp-ficon",children:"📱"}),e.jsx("input",{className:"rp-finput",type:"tel",placeholder:"10 digit mobile",value:r.mobileNumber,onChange:n("mobileNumber"),maxLength:10})]})]}),e.jsxs("div",{className:"rp-fld",children:[e.jsx("label",{className:"rp-flbl",children:"Email"}),e.jsxs("div",{className:"rp-fwrap",children:[e.jsx("span",{className:"rp-ficon",children:"✉️"}),e.jsx("input",{className:"rp-finput",type:"email",placeholder:"Email (optional)",value:r.email,onChange:n("email")})]})]}),e.jsxs("div",{className:"rp-fld",children:[e.jsx("label",{className:"rp-flbl",children:"Address"}),e.jsxs("div",{className:"rp-fwrap",children:[e.jsx("span",{className:"rp-ficon",children:"🏠"}),e.jsx("input",{className:"rp-finput",type:"text",placeholder:"Address",value:r.address,onChange:n("address")})]})]}),e.jsxs("div",{className:"rp-fld",children:[e.jsx("label",{className:"rp-flbl",children:"Pincode"}),e.jsxs("div",{className:"rp-fwrap",children:[e.jsx("span",{className:"rp-ficon",children:"📍"}),e.jsx("input",{className:"rp-finput",type:"text",placeholder:"Pincode",value:r.pincode,onChange:n("pincode"),maxLength:6})]})]}),e.jsxs("div",{className:"rp-fld",children:[e.jsxs("label",{className:"rp-flbl",children:["Password ",e.jsx("span",{className:"rp-req",children:"*"})]}),e.jsxs("div",{className:"rp-fwrap",children:[e.jsx("span",{className:"rp-ficon",children:"🔒"}),e.jsx("input",{className:"rp-finput",type:b?"text":"password",placeholder:"Min. 6 characters",value:r.password,onChange:n("password"),style:{paddingRight:38}}),e.jsx("button",{type:"button",className:"rp-pbtn",onClick:()=>R(!b),tabIndex:-1,children:b?"🙈":"👁️"})]}),e.jsx("div",{className:"rp-input-hint",children:"किमान 6 characters"})]}),e.jsxs("div",{className:"rp-fld",children:[e.jsxs("label",{className:"rp-flbl",children:["Confirm Password ",e.jsx("span",{className:"rp-req",children:"*"})]}),e.jsxs("div",{className:"rp-fwrap",children:[e.jsx("span",{className:"rp-ficon",children:"🔐"}),e.jsx("input",{className:"rp-finput",type:h?"text":"password",placeholder:"Password परत टाका",value:r.confirmPassword,onChange:n("confirmPassword"),style:{paddingRight:38}}),e.jsx("button",{type:"button",className:"rp-pbtn",onClick:()=>E(!h),tabIndex:-1,children:h?"🙈":"👁️"})]})]})]}),e.jsx("button",{type:"submit",className:"rp-sbtn",disabled:z||!r.fullName||!r.mobileNumber||!r.password||!r.confirmPassword,children:z?"⏳ Sending OTP...":"📱 Send OTP & Register"})]}),e.jsxs("p",{className:"rp-signin",children:["Already have an account?",e.jsx("span",{className:"rp-link",onClick:()=>v("/login"),children:"Login"})]})]})]}),e.jsxs("div",{className:"rp-cfooter",children:[e.jsx("div",{className:"rp-cfdot"}),e.jsx("span",{children:"Secure Citizen Portal · All rights reserved"})]})]}),e.jsxs("div",{className:"rp-mayor-panel",style:{opacity:m?1:0,transform:m?"translate(0,0)":"translate(80px,-60px)"},children:[e.jsx("span",{className:"rp-mp-icon tl",children:"🏛️"}),e.jsx("span",{className:"rp-mp-icon tr",children:"🤝"}),e.jsx("span",{className:"rp-mp-icon bl",children:"🏢"}),e.jsx("span",{className:"rp-mp-icon br",children:"🏙️"}),e.jsxs("div",{className:"rp-mayor-photo-wrap",children:[e.jsx("div",{className:"rp-mayor-ring",children:e.jsx("img",{src:S,alt:"Mayor",className:"rp-mayor-photo"})}),e.jsx("div",{className:"rp-mayor-badge",children:"🪑"})]}),e.jsx("p",{className:"rp-mayor-name",children:"मा. श्री.अजीव पाटील"}),e.jsx("p",{className:"rp-mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),e.jsx("div",{className:"rp-mayor-bar-wrap",children:e.jsx("div",{className:"rp-mayor-bar"})}),e.jsxs("div",{className:"rp-mayor-info",children:[e.jsxs("div",{className:"rp-mayor-info-item",children:[e.jsx("span",{className:"rp-mayor-info-icon",children:"📅"}),e.jsx("span",{children:"Appointment सहज बुक करा"})]}),e.jsxs("div",{className:"rp-mayor-info-item",children:[e.jsx("span",{className:"rp-mayor-info-icon",children:"🔔"}),e.jsx("span",{children:"SMS द्वारे notification मिळवा"})]}),e.jsxs("div",{className:"rp-mayor-info-item",children:[e.jsx("span",{className:"rp-mayor-info-icon",children:"🛡️"}),e.jsx("span",{children:"Secure Government Portal"})]})]})]})]})]})]})}export{Q as default};
