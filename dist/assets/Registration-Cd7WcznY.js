import{u as v,a as o,j as r}from"./vendor-react-BwQSrn6v.js";import{a as y}from"./vendor-redux-BzC0OSN9.js";import{l as w,a as N}from"./index-lQwxFhQu.js";import{m as j}from"./ajivir5-0Blai2zW.js";import{h as k}from"./bg1-CoL5AQNs.js";import{a as C}from"./axiosInstance-CJqsiSYB.js";import{L as z}from"./Loader-D5US2avv.js";import{y as n}from"./vendor-utils-CRNBIpRx.js";import"./vendor-icons-NNWxJ0Do.js";function L(){const m=y(),d=v(),[e,x]=o.useState({fullName:"",userName:"",mobileNumber:"",email:"",password:""}),[p,c]=o.useState(!1),[l,f]=o.useState(!1),[i,b]=o.useState(!1);o.useEffect(()=>{const a=setTimeout(()=>b(!0),60);return()=>clearTimeout(a)},[]);const t=a=>x({...e,[a.target.name]:a.target.value}),h=async a=>{if(a.preventDefault(),!e.fullName||!e.userName||!e.mobileNumber||!e.email||!e.password){n.error("All fields required ❌");return}try{c(!0);const s=(await C.post("/register",e)).data;if(!s.success){n.error(s.message);return}m(N(s.user)),localStorage.setItem("authUser",JSON.stringify(s.user)),n.success("Registration Success ✅"),d("/dashboard")}catch(g){n.error(g?.response?.data?.message||"Server Error ❌")}finally{c(!1)}},u=e.fullName&&e.userName&&e.mobileNumber&&e.email&&e.password;return r.jsxs(r.Fragment,{children:[p&&r.jsx(z,{}),r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"rp-root",children:[r.jsx("div",{className:"rp-bg",style:{backgroundImage:`url(${k})`}}),r.jsx("div",{className:"rp-overlay"}),r.jsx("div",{className:"rp-stripe"}),r.jsxs("div",{className:"rp-wrapper",style:{opacity:i?1:0,transform:i?"translateX(0)":"translateX(160px)"},children:[r.jsxs("div",{className:"rp-card",children:[r.jsxs("div",{className:"rp-logo-row",children:[r.jsx("img",{src:w,alt:"VVCMC",className:"rp-logo-img"}),r.jsxs("div",{className:"rp-logo-texts",children:[r.jsx("div",{className:"rp-logo-name",children:"वसई-विरार शहर महानगरपालिका"}),r.jsx("div",{className:"rp-logo-sub",children:"जन संवाद"})]})]}),r.jsxs("div",{className:"fade-up",children:[r.jsx("p",{className:"rp-ftitle",children:"Create Account"}),r.jsxs("form",{onSubmit:h,children:[r.jsxs("div",{className:"rp-fld",children:[r.jsx("label",{className:"rp-flbl",children:"Full Name"}),r.jsxs("div",{className:"rp-fwrap",children:[r.jsx("span",{className:"rp-ficon",children:"👤"}),r.jsx("input",{className:"rp-finput has-icon",type:"text",name:"fullName",placeholder:"Enter your full name",value:e.fullName,onChange:t,autoComplete:"name"})]})]}),r.jsxs("div",{className:"rp-fld",children:[r.jsx("label",{className:"rp-flbl",children:"Username"}),r.jsxs("div",{className:"rp-fwrap",children:[r.jsx("span",{className:"rp-ficon",children:"🪪"}),r.jsx("input",{className:"rp-finput has-icon",type:"text",name:"userName",placeholder:"Enter your username",value:e.userName,onChange:t,autoComplete:"username"})]})]}),r.jsxs("div",{className:"rp-fld",children:[r.jsx("label",{className:"rp-flbl",children:"Mobile Number"}),r.jsxs("div",{className:"rp-fwrap",children:[r.jsx("span",{className:"rp-ficon",children:"📱"}),r.jsx("input",{className:"rp-finput has-icon",type:"tel",name:"mobileNumber",placeholder:"Enter your mobile number",maxLength:10,value:e.mobileNumber,onChange:t})]})]}),r.jsxs("div",{className:"rp-fld",children:[r.jsx("label",{className:"rp-flbl",children:"Email"}),r.jsxs("div",{className:"rp-fwrap",children:[r.jsx("span",{className:"rp-ficon",children:"✉️"}),r.jsx("input",{className:"rp-finput has-icon",type:"email",name:"email",placeholder:"Enter your email",value:e.email,onChange:t,autoComplete:"email"})]})]}),r.jsxs("div",{className:"rp-fld",children:[r.jsx("label",{className:"rp-flbl",children:"Password"}),r.jsxs("div",{className:"rp-fwrap",children:[r.jsx("span",{className:"rp-ficon",children:"🔒"}),r.jsx("input",{className:"rp-finput has-icon",type:l?"text":"password",name:"password",placeholder:"Enter your password",value:e.password,onChange:t,autoComplete:"new-password",style:{paddingRight:42}}),r.jsx("button",{type:"button",className:"rp-pbtn",onClick:()=>f(!l),tabIndex:-1,children:l?"🙈":"👁️"})]})]}),r.jsx("button",{type:"submit",className:"rp-sbtn",disabled:!u||p,children:p?"⏳ Creating...":"CREATE ACCOUNT →"})]}),r.jsxs("p",{className:"rp-signin",children:["Already have an account?",r.jsx("a",{onClick:()=>d("/login"),children:"Sign in"})]})]}),r.jsxs("div",{className:"rp-cfooter",children:[r.jsx("div",{className:"rp-cfdot"}),r.jsx("span",{children:"Secure Government Portal · All rights reserved"})]})]}),r.jsxs("div",{className:"rp-mayor-panel",style:{opacity:i?1:0,transform:i?"translate(0, 0)":"translate(80px, -60px)"},children:[r.jsx("span",{className:"rp-mp-icon tl",children:"🏛️"}),r.jsx("span",{className:"rp-mp-icon tr",children:"🏥"}),r.jsx("span",{className:"rp-mp-icon bl",children:"🏗️"}),r.jsx("span",{className:"rp-mp-icon br",children:"🏢"}),r.jsxs("div",{className:"rp-mayor-photo-wrap",children:[r.jsx("div",{className:"rp-mayor-ring",children:r.jsx("img",{src:j,alt:"Mayor",className:"rp-mayor-photo"})}),r.jsx("div",{className:"rp-mayor-badge",children:"🪑"})]}),r.jsx("p",{className:"rp-mayor-name",children:"मा. श्री.अजीव पाटील"}),r.jsx("p",{className:"rp-mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),r.jsx("div",{className:"rp-mayor-bar-wrap",children:r.jsx("div",{className:"rp-mayor-bar"})})]})]})]})]})}export{L as default};
