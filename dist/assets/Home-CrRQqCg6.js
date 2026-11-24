import{u as C,a as l,R as y,j as e}from"./vendor-react-BwQSrn6v.js";import{_ as j,$ as A}from"./vendor-icons-BTbXG4ns.js";import{l as D}from"./logo2new-B4VGcLNc.js";const M="/assets/ajivsir3-Cz5V0xvO.png",L="/assets/heroBg-B4Qm-rGu.png",S="/assets/newapplications-Bg0kXa2S.png",E="/assets/newservice-CI2Zulv9.png",F="/assets/newmeetings-DmO8_Dou.png",B="/assets/newupdates-CccLsufR.png",I="/assets/building-tR6pAx4w.png",R="/assets/ajivsir1-DtAuu40c.jpeg",T="/assets/meeting2-BpgpR0FZ.jpeg",W="/assets/tree-BGxUfGTP.jfif",P="/assets/pani3-tuXII5q-.jpg",G="/assets/narangibridgeahani-Ct7_szRG.jpeg";function O({src:p,style:h,loop:d=!0}){const a=l.useRef(null);return l.useEffect(()=>{let n;const c=()=>{window.lottie&&a.current&&(a.current.innerHTML="",n=window.lottie.loadAnimation({container:a.current,renderer:"svg",loop:d,autoplay:!0,path:p}))};if(window.lottie)c();else{const r=document.createElement("script");r.src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js",r.onload=c,document.head.appendChild(r)}return()=>n&&n.destroy()},[p]),e.jsx("div",{ref:a,style:h})}function V(){const p=C(),h=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),d=l.useRef(null),[a,n]=l.useState(0),[c,r]=l.useState(!0),[g,f]=y.useState(0),[b,x]=y.useState(!0),s=[{icon:"🌉",tag:"पायाभूत सुविधा",title:"नारंगी उड्डाणपूल प्रकल्प पाहणी",desc:"नारंगी येथील उड्डाणपुलाच्या कामाची मा. महापौर श्री. अजीव पाटील यांनी प्रत्यक्ष पाहणी केली. या पाहणीदरम्यान संबंधित अधिकारी, रेल्वे अधिकारी, कंत्राटदार व उपकंत्राटदार यांच्याशी चर्चा करून कामाची प्रगती व अडचणी जाणून घेतल्या. तसेच कामाला अधिक गती देण्याच्या सूचना दिल्या.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 42 कोटी",deadline:"डिसेंबर 2025",stat:"",statLbl:"मार्च २०२६ अखेर वाहतुकीसाठी खुले",accent:"#51ABAC",bgimg:G},{icon:"🏛️",tag:"प्रशासन",title:"समिती गठनाबाबत चर्चा",desc:"स्थायी समितीच्या महत्त्वाच्या विषयांवर तसेच प्रभाग समित्यांच्या गठनाबाबत चर्चा सुरू आहे.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 85 कोटी",deadline:"मार्च 2026",stat:"",statLbl:"",accent:"#028945",bgimg:T},{icon:"💧",tag:"पाणीपुरवठा",title:"24×7 पाणीपुरवठा योजना — वसई विभाग",desc:"वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 85 कोटी",deadline:"मार्च 2026",stat:"1.2 लाख",statLbl:"लाभार्थी कुटुंबे",accent:"#028945",bgimg:P},{icon:"🌳",tag:"पर्यावरण",title:"हरित वसई-विरार — वृक्षारोपण मोहीम",desc:"महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 8 कोटी",deadline:"ऑगस्ट 2025",stat:"5 लाख",statLbl:"झाडे लावणार",accent:"#028945",bgimg:W}];l.useEffect(()=>{if(!c)return;const t=setInterval(()=>{n(i=>(i+1)%s.length)},4e3);return()=>clearInterval(t)},[c,s.length]),l.useEffect(()=>{if(!b)return;const t=setInterval(()=>{f(i=>i>=m?0:i+1)},5e3);return()=>clearInterval(t)},[b]),l.useEffect(()=>{if(!d.current)return;const t=d.current,i=(t.offsetWidth-40)/3;t.scrollTo({left:g*(i+20),behavior:"smooth"})},[g]);const v=[{icon:e.jsx(j,{size:32,color:"#fff"}),lottie:"https://assets3.lottiefiles.com/packages/lf20_jbb3xnwi.json",title:"नोंदणी करा",desc:"Mobile number वापरून account तयार करा."},{lottie:"https://assets4.lottiefiles.com/packages/lf20_tljjahng.json",title:"तारीख निवडा",desc:"मा. श्री महापौर यांच्या available dates आणि time slots मधून निवडा"},{lottie:"https://assets9.lottiefiles.com/packages/lf20_xyadoh9h.json",title:"तपशील भरा",desc:"भेटीचे कारण, visitors संख्या आणि photo द्या"},{lottie:"https://assets10.lottiefiles.com/packages/lf20_attdh2fv.json",title:"टोकन मिळवा",desc:"Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा"}],o=s[a],k=()=>{const t=document.querySelector(".hiw-section");t&&t.scrollIntoView({behavior:"smooth",block:"start"})},N=[{tag:"🌿 शिबिर प्रदर्शन",title:"घनकचरा व्यवस्थापन शिबिर-प्रदर्शन उद्घाटन",rows:["घनकचरा व्यवस्थापन प्रदर्शन","खत निर्मिती तंत्रज्ञान प्रदर्शन"],date:"२८ फेब्रुवारी २०२६",accent:"#4CABC1",bg:"linear-gradient(160deg,#b8e2ec 0%,#d0eff7 40%,#aad8e8 100%)",dotColors:["#4CABC1","#66A962"]},{tag:"🧹 स्वच्छता आढावा",title:"दैनंदिन कचरा संकलन व स्वच्छता बैठक",rows:["कचरा संकलन व वर्गीकरण","गटार व नाले साफसफाई"],date:"११ मार्च २०२६",accent:"#66A962",bg:"linear-gradient(160deg,#b5d9b3 0%,#d2edd0 40%,#a8cfaa 100%)",dotColors:["#66A962","#CA9D28"]},{tag:"🛣️ रस्ते विकास",title:"रस्ते दुरुस्ती व पायाभूत सुविधा नियोजन बैठक",rows:["रस्ते दुरुस्ती व बांधकाम","फुटपाथ उभारणी नियोजन"],date:"१० मार्च २०२६",accent:"#CA9D28",bg:"linear-gradient(160deg,#f0d6a8 0%,#f7e6c2 40%,#e8c87a 100%)",dotColors:["#CA9D28","#CE9A54"]},{tag:"⚡ वीज विकास",title:"MSEDCL वसई मंडळ आढावा बैठक",rows:["MSEDCL विकास कामे आढावा","महापौर व नगर सेवक बैठक"],date:"५ मार्च २०२६",accent:"#49ACC3",bg:"linear-gradient(160deg,#a8d4dc 0%,#c8e8f0 40%,#8ec4d0 100%)",dotColors:["#49ACC3","#187480"]}],m=1,u=Math.min(g,m);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        :root { --teal:#51ABAC; --green:#028945; --gold:#F5E6BF; --blue:#4CABBF; }

        /* ══ HERO ══ */
        .hero { position:relative; min-height:calc(100vh - 64px); display:flex; flex-direction:row; align-items:stretch; justify-content:space-between; gap:24px; text-align:left; padding:0 5vw; overflow:hidden; }
        .hero::before { content:''; position:absolute; inset:0; background-image:url(${L}); background-size:cover; background-position:left; background-repeat:no-repeat; z-index:0; }
        .hero::after { content:''; position:absolute; inset:0; background:linear-gradient(90deg,rgba(4,58,62,0.62) 0%,rgba(6,72,76,0.40) 50%,rgba(6,72,76,0.18) 100%); z-index:1; }
        .hero > * { position:relative; z-index:2; }
        .hero > .hero-orbit { position:absolute; }
        .hero > .hero-building { position:absolute; left:3%; bottom:16px; width:min(520px,32vw); height:auto; opacity:1; z-index:5; pointer-events:none; user-select:none; -webkit-mask-image:linear-gradient(to bottom,#000 0%,#000 10%,rgba(0,0,0,0.55) 15%,rgba(0,0,0,0.55) 100%); mask-image:linear-gradient(to bottom,#000 0%,#000 10%,rgba(0,0,0,0.55) 15%,rgba(0,0,0,0.55) 100%); filter:drop-shadow(0 1px 1.5px rgba(0,0,0,0.55)); }
        .hero > .hero-content { z-index:6; }
        .hero-orbit { position:absolute; inset:0; z-index:2; pointer-events:none; }
        /* Service icons — images, animation नाही */
        .hero-float { position:absolute; width:110px; height:auto; display:block; user-select:none; filter:drop-shadow(0 0 12px rgba(242,193,78,0.40)) drop-shadow(0 6px 16px rgba(0,0,0,0.30)); }
        .hero-float.f1{top:22%;left:7%}
        .hero-float.f2{top:56%;left:13%}
        .hero-float.f3{top:18%;right:7%}
        .hero-float.f4{top:54%;right:12%}

        /* Logo + corporation name (reference प्रमाणे) */
        .hero-logo { width:96px; height:96px; border-radius:50%; background:#fff; padding:4px; margin:0 auto 14px; box-shadow:0 0 0 3px rgba(242,193,78,0.85), 0 0 24px rgba(242,193,78,0.35), 0 8px 22px rgba(0,0,0,0.3); }
        .hero-logo img { width:100%; height:100%; object-fit:cover; border-radius:50%; display:block; }
        .hero-org { font-family:'DM Sans',sans-serif; font-size:clamp(16px,1.8vw,22px); font-weight:600; color:#fff; text-shadow:0 2px 8px rgba(0,0,0,0.3); }
        .hero-sub { display:flex; align-items:center; justify-content:center; gap:14px; margin:6px 0 10px; font-family:'DM Sans',sans-serif; font-size:clamp(16px,1.7vw,21px); font-weight:700; color:#F5D87A; }
        .hero-sub::before, .hero-sub::after { content:''; width:clamp(36px,7vw,100px); height:2px; background:linear-gradient(90deg,transparent,#F5D87A); }
        .hero-sub::after { background:linear-gradient(90deg,#F5D87A,transparent); }
        .hero-btn-primary, .hero-btn-outline { display:inline-flex; align-items:center; justify-content:center; gap:10px; }
        .hero-jansanwad { font-family:'Tiro Devanagari Marathi',serif; font-size:clamp(52px,10vw,96px); font-weight:800; color:#F5D87A; line-height:1.05; margin-bottom:18px; text-shadow:0 4px 32px rgba(0,0,0,0.3),0 2px 8px rgba(0,0,0,0.2); letter-spacing:-1px; }
        .hero-title-underline { width:80px; height:4px; background:linear-gradient(90deg,#D09A50,#F5D87A,#D09A50); border-radius:2px; margin:0 auto 22px; animation:shimmer 2.5s ease-in-out infinite; }
        @keyframes shimmer{0%,100%{opacity:1}50%{opacity:0.6}}
        .hero-desc { font-family:'Tiro Devanagari Marathi',serif; font-size:clamp(14px,2.2vw,19px); font-weight:600; color:rgba(255,255,255,0.93); max-width:620px; margin:0 auto 40px; line-height:1.7; text-shadow:0 2px 12px rgba(0,0,0,0.25); }
        .hero-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
        .hero-btn-primary { padding:14px 36px; border-radius:12px; border:none; background:#028945; color:#fff; font-weight:700; font-size:15px; font-family:'DM Sans',sans-serif; cursor:pointer; transition:all .2s; box-shadow:0 4px 20px rgba(2,137,69,0.45); }
        .hero-btn-primary:hover { background:#016d38; transform:translateY(-2px); }
        .hero-btn-outline { padding:14px 36px; border-radius:12px; border:2px solid rgba(245,216,122,0.85); background:transparent; color:#F5D87A; font-weight:700; font-size:15px; font-family:'DM Sans',sans-serif; cursor:pointer; transition:all .2s; }
        .hero-btn-outline:hover { background:rgba(245,216,122,0.15); transform:translateY(-2px); }

        /* ══ HERO — reference design (LEFT content + RIGHT mayor) ══ */
        .hero-content { flex:0 1 52%; display:grid; grid-template-columns:auto; justify-content:start; justify-items:start; align-content:center; text-align:left; padding:40px 0 170px 2vw; }
        .hero-content .hero-logo { width:108px; height:108px; margin:0 auto 18px; }
        .hero-content .hero-org { font-size:clamp(18px,1.7vw,24px); font-weight:600; color:#fff; }
        .hero-content .hero-sub { justify-content:center; margin:8px 0 14px; color:#F2C14E; font-size:clamp(17px,1.6vw,22px); }
        .hero-content .hero-sub::before, .hero-content .hero-sub::after { width:clamp(40px,7vw,110px); height:1.5px; }
        .hero-content .hero-jansanwad { font-size:clamp(56px,7.2vw,110px); line-height:1.08; margin-bottom:16px; background:linear-gradient(180deg,#FFE9A8 0%,#F5C451 45%,#D9962B 100%); -webkit-background-clip:text; background-clip:text; color:transparent; -webkit-text-fill-color:transparent; text-shadow:none; filter:drop-shadow(0 4px 14px rgba(0,0,0,0.35)); }
        .hero-content .hero-title-underline { width:100px; height:5px; margin:0 0 26px; justify-self:center; background:linear-gradient(90deg,#F5C451,#FFE08A,#F5C451); }
        .hero-content .hero-desc { font-size:clamp(16px,1.6vw,22px); font-weight:500; color:#fff; max-width:600px; margin:0 0 36px; line-height:1.55; text-align:left; }
        .hero-content .hero-btns { justify-content:flex-start; gap:28px; }
        .hero-content .hero-btn-primary { padding:16px 34px; border-radius:999px; background:linear-gradient(180deg,#FBD36B,#EDB53F); color:#0f3b3b; font-size:17px; box-shadow:0 8px 24px rgba(237,181,63,0.35); }
        .hero-content .hero-btn-primary:hover { background:linear-gradient(180deg,#FFDB7E,#F0BC4A); }
        .hero-content .hero-btn-outline { padding:15px 34px; border-radius:999px; border:1.5px solid rgba(255,255,255,0.9); color:#fff; font-size:17px; }
        .hero-content .hero-btn-outline:hover { background:rgba(255,255,255,0.12); }

        .hero-leader { flex:0 1 48%; position:relative; display:flex; justify-content:center; align-items:flex-end; min-height:520px; padding-right:calc(clamp(72px,6vw,112px) + 4vw); }
        .hero-arc { position:absolute; left:50%; top:16%; width:min(520px,36vw); aspect-ratio:1; transform:translateX(-50%); border-radius:50%; border:3px solid rgba(245,196,81,0.85); background:radial-gradient(circle,rgba(120,220,200,0.22) 0%,rgba(120,220,200,0.08) 45%,transparent 70%); box-shadow:0 0 40px rgba(245,196,81,0.35), inset 0 0 40px rgba(245,196,81,0.18); -webkit-mask-image:linear-gradient(to bottom,#000 50%,transparent 72%); mask-image:linear-gradient(to bottom,#000 50%,transparent 72%); pointer-events:none; z-index:0; }
        .hero-leader-img { position:relative; left:-25px; top:-30px; z-index:1;
        
        display:block; height:calc(100vh - 104px); max-height:820px; min-height:460px; width:auto; max-width:100%; object-fit:contain; object-position:bottom; filter:drop-shadow(0 18px 40px rgba(0,0,0,0.35)); }
        .hero-leader .hero-float { position:absolute; z-index:2; width:118px; bottom:auto; }
        .hero-leader .hero-float.f1 { top:26%; left:6%; right:auto; }
        .hero-leader .hero-float.f2 { top:47%; left:1%; right:auto; }
        .hero-leader .hero-float.f3 { top:24%; right:5%; left:auto; }
        .hero-leader .hero-float.f4 { top:45%; right:0; left:auto; }
        /* Icons — photo च्या right side ला vertical column */
        .hero-icons-col { position:absolute; right:2vw; top:46%; transform:translateY(-50%); display:flex; flex-direction:column; align-items:center; gap:clamp(14px,1.4vw,22px); z-index:3; }
        .hero-icons-col .hero-float { position:static; width:clamp(72px,6vw,112px); }
        /* Bottom golden ribbon — photo च्या वरून (reference प्रमाणे) */
        .hero > .hero-ribbon { position:absolute; left:0; right:0; bottom:-1px; width:100%; height:240px; z-index:4; pointer-events:none; display:block; }

        /* ══ HOW IT WORKS ══ */
        .hiw-section { padding:72px 24px 80px; background:#ffffff; position:relative; }
        .hiw-section::before { content:''; position:absolute; inset:0; background-image:radial-gradient(circle at 15% 50%,rgba(81,171,172,0.06) 0%,transparent 55%),radial-gradient(circle at 85% 20%,rgba(2,137,69,0.05) 0%,transparent 50%); pointer-events:none; }
        .hiw-inner { max-width:1080px; margin:0 auto; position:relative; z-index:1; }
        .hiw-header { text-align:center; margin-bottom:52px; }
        .hiw-title { font-family:'Crimson Pro',serif; font-size:clamp(28px,4.5vw,44px); font-weight:800; color:#1a1a1a; margin-bottom:12px; line-height:1.2; }
        .hiw-title-bar { width:64px; height:4px; background:linear-gradient(90deg,#D09A50,#F5D87A); border-radius:2px; margin:0 auto 14px; }
        .hiw-sub { font-family:'DM Sans',sans-serif; color:#6b7280; font-size:15px; }
        .hiw-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; align-items:stretch; }
        .hiw-grid-wrap { position:relative; }
        .hiw-connector { position:absolute; top:52px; left:calc(12.5% + 20px); right:calc(12.5% + 20px); height:2px; background:linear-gradient(90deg,rgba(81,171,172,0.3),rgba(81,171,172,0.6),rgba(81,171,172,0.3)); z-index:0; pointer-events:none; }
        .hiw-card { background:#ffffff; border-radius:20px; padding:36px 22px 28px; text-align:center; border:1.5px solid rgba(81,171,172,0.18); box-shadow:0 4px 24px rgba(81,171,172,0.10),0 1px 4px rgba(0,0,0,0.04); transition:transform .25s,box-shadow .25s,border-color .25s; position:relative; z-index:1; display:flex; flex-direction:column; align-items:center; }
        .hiw-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg,var(--teal),var(--green)); border-radius:20px 20px 0 0; }
        .hiw-card:hover { transform:translateY(-8px); box-shadow:0 16px 40px rgba(81,171,172,0.22),0 4px 12px rgba(0,0,0,0.06); border-color:rgba(81,171,172,0.4); }
        .hiw-icon-wrap { width:72px; height:72px; border-radius:50%; background:linear-gradient(135deg,#51ABAC,#028945); display:flex; align-items:center; justify-content:center; margin:0 auto 20px; box-shadow:0 6px 20px rgba(81,171,172,0.35); flex-shrink:0; }
        .hiw-num { position:absolute; top:14px; right:16px; width:26px; height:26px; border-radius:50%; background:linear-gradient(135deg,var(--teal),var(--green)); color:#fff; font-size:11px; font-weight:800; font-family:'DM Sans',sans-serif; display:flex; align-items:center; justify-content:center; }
        .hiw-step-title { font-family:'DM Sans',sans-serif; font-weight:700; color:#1a4a2e; font-size:15px; margin-bottom:10px; line-height:1.3; }
        .hiw-step-desc { font-family:'DM Sans',sans-serif; font-size:13px; color:#6b7280; line-height:1.65; flex:1; }

        /* ══ MAYOR SECTION ══ */
        .mayor-section {
          width: 100%;
          display: flex;
          align-items: stretch;
          min-height: 480px;
          overflow: hidden;
        }

        /* ── LEFT PANEL ── */
        .mayor-left {
          flex: 0 0 42%;
          background: #f5ead8;
          padding: 60px 52px 60px 56px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .mayor-left::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 10% 20%, rgba(255,255,255,0.4) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(200,160,80,0.08) 0%, transparent 50%);
          pointer-events: none;
        }
        .mayor-heading-line1 {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: clamp(32px, 4.2vw, 56px);
          font-weight: 800;
          color: #1a5050;
          line-height: 1.15;
          margin: 0 0 2px 0;
          position: relative;
          z-index: 1;
        }
        .mayor-heading-line2 {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: clamp(32px, 4.2vw, 56px);
          font-weight: 800;
          color: #C8922A;
          line-height: 1.15;
          margin: 0 0 28px 0;
          position: relative;
          z-index: 1;
        }
        .mayor-bio {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13.5px;
          color: #3a3a3a;
          line-height: 1.9;
          margin-bottom: 36px;
          max-width: 400px;
          position: relative;
          z-index: 1;
        }
        .mayor-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          border-radius: 8px;
          border: none;
          background: #028945;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: all .2s;
          box-shadow: 0 4px 16px rgba(2,137,69,0.35);
          width: fit-content;
          position: relative;
          z-index: 1;
        }
        .mayor-btn-primary:hover { background:#016d38; transform:translateY(-2px); box-shadow:0 8px 22px rgba(2,137,69,0.45); }

        /* ── RIGHT PANEL ── */
        .mayor-right {
          flex: 1;
          background: linear-gradient(145deg, #1e7a7a 0%, #155e5e 40%, #0d4040 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 24px;
          min-height: 480px;
        }
        .mayor-right::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #C9963A 20%, #e8b84b 60%, transparent 100%);
          z-index: 4;
        }

        /* Decorations */
        .mayor-chevrons { position:absolute; top:0; right:0; width:200px; height:200px; pointer-events:none; z-index:2; }
        .mayor-diamond-tl { position:absolute; top:18%; left:6%; pointer-events:none; z-index:2; }
        .mayor-diamond-mid { position:absolute; top:48%; left:3%; pointer-events:none; z-index:2; }
        .mayor-gold-tri { position:absolute; bottom:0; right:0; pointer-events:none; z-index:2; }
        .mayor-sparkle { position:absolute; bottom:12%; right:2%; pointer-events:none; z-index:3; }
        .mayor-phone-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 320px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(81,200,200,0.15) 0%, transparent 65%);
          pointer-events: none; z-index: 1;
        }

        /* Content wrap */
        .mayor-content-wrap {
          position: relative;
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        /* Brand row */
        .mayor-brand-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.18);
          width: 100%;
          justify-content: center;
        }
        .mayor-brand-logo-wrap {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: 2px solid rgba(255,255,255,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(0,0,0,0.25);
        }
        .mayor-brand-logo-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .mayor-brand-text {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 15px;
          font-weight: 700;
          color: rgba(255,255,255,0.95);
          line-height: 1.5;
          max-width: 260px;
        }

        /* Bottom row */
        .mayor-bottom-row {
          display: flex;
          align-items: center;
          gap: 18px;
          width: 100%;
          justify-content: center;
        }

        /* Data columns */
        .mayor-data-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 120px;
          flex-shrink: 0;
        }
        .mayor-data-col-head {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 9.5px;
          font-weight: 700;
          color: #F5D87A;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid rgba(245,216,122,0.35);
          padding-bottom: 5px;
          margin-bottom: 2px;
        }
        .mayor-data-text {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 10px;
          color: rgba(255,255,255,0.78);
          line-height: 1.75;
          padding: 7px 9px;
          background: rgba(255,255,255,0.07);
          border-radius: 7px;
          border: 1px solid rgba(255,255,255,0.12);
        }

        /* Center phone area */
        .mayor-phone-center {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
        }

        /* Bubbles */
        .mayor-bubbles-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex-shrink: 0;
          z-index: 4;
        }
        .mayor-bubble-item {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(255,255,255,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.12);
          animation: mBob 3.5s ease-in-out infinite;
          cursor: default;
        }
        .mayor-bubble-item:nth-child(1){animation-delay:0s}
        .mayor-bubble-item:nth-child(2){animation-delay:0.75s}
        .mayor-bubble-item:nth-child(3){animation-delay:1.5s}
        @keyframes mBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}

        /* Phone mockup */
        .mayor-phone-wrap { position:relative; z-index:4; flex-shrink:0; }
        .mayor-phone {
          width: 195px;
          background: #051515;
          border-radius: 34px;
          padding: 8px;
          position: relative;
          box-shadow:
            0 0 0 2px rgba(100,210,210,0.5),
            0 0 0 5px rgba(81,171,172,0.12),
            0 28px 70px rgba(0,0,0,0.55),
            0 6px 20px rgba(0,0,0,0.3);
          transform: rotate(-2deg);
        }
        .mayor-phone::before {
          content: '';
          position: absolute;
          top: 14px; left: 50%;
          transform: translateX(-50%);
          width: 44px; height: 5px;
          background: #051515;
          border-radius: 3px;
          z-index: 5;
        }
        .mayor-phone-inner { border-radius:28px; overflow:hidden; background:#fff; }
        .mayor-phone-img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          object-position: top center;
          display: block;
        }
        .mayor-phone-badge { padding:10px 12px 12px; background:#fff; border-top:1px solid #f0f0f0; }
        .mayor-phone-badge-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 11px;
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.4;
        }
        .mayor-phone-badge-title {
          font-size: 9px;
          color: #51ABAC;
          font-weight: 700;
          margin-top: 2px;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

       
       /* ══ PROJECTS ══ */
.projects-section {
  padding: 80px 32px;
  background: linear-gradient(160deg, #eef8f4 0%, #FFFCF2 50%, #fff 100%);
  position: relative;
  overflow: hidden;
}

/* Decorative background blobs */
.projects-section::before {
  content: '';
  position: absolute;
  top: -80px; left: -80px;
  width: 320px; height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(76,171,193,0.12) 0%, transparent 70%);
  pointer-events: none;
}
.projects-section::after {
  content: '';
  position: absolute;
  bottom: -60px; right: -60px;
  width: 280px; height: 280px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(202,157,40,0.10) 0%, transparent 70%);
  pointer-events: none;
}

.projects-inner { max-width:1060px; margin:0 auto; position:relative; z-index:1; }

.section-header { text-align:center; margin-bottom:48px; }
.section-tag {
  display: inline-block;
  background: linear-gradient(135deg, rgba(76,171,193,0.15), rgba(202,157,40,0.12));
  color: #187480;
  font-size: 12px; font-weight: 700;
  padding: 6px 18px; border-radius: 999px;
  margin-bottom: 14px; letter-spacing: 0.6px; text-transform: uppercase;
  border: 1px solid rgba(76,171,193,0.3);
}
.section-title {
  font-family: 'Crimson Pro', serif;
  font-size: clamp(28px,4vw,42px); font-weight: 800;
  color: #1a4a2e; margin-bottom: 8px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.section-sub { color: #6b7280; font-size: 15px; }

/* ── CARD ── */
.proj-card {
  display: flex;
  border-radius: 28px;
  overflow: hidden;
  box-shadow:
    0 4px 0 0 rgba(76,171,193,0.35),
    0 16px 56px rgba(0,0,0,0.10),
    0 4px 16px rgba(0,0,0,0.06);
  min-height: 320px;
  transition: box-shadow .35s, transform .35s;
  background: #fff;
  border: 1.5px solid rgba(76,171,193,0.18);
}
.proj-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 4px 0 0 rgba(76,171,193,0.5),
    0 28px 72px rgba(0,0,0,0.14),
    0 8px 24px rgba(0,0,0,0.08);
}

.proj-left {
  flex: 1; padding: 44px 48px;
  display: flex; flex-direction: column; justify-content: center;
  border-radius: 28px 0 0 28px;
  background-size: cover; background-position: top; background-repeat: no-repeat;
}

.proj-tag {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 11px; font-weight: 700;
  padding: 5px 16px; border-radius: 999px;
  text-transform: uppercase; letter-spacing: 0.6px;
  margin-bottom: 16px; width: fit-content;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.proj-title {
  font-family: 'Tiro Devanagari Marathi', serif;
  font-size: clamp(18px,2.4vw,26px); font-weight: 800;
  color: #1a1a1a; margin-bottom: 14px; line-height: 1.35;
}

.proj-desc {
  font-family: 'Tiro Devanagari Marathi', serif;
  font-size: 13.5px; color: #555;
  line-height: 1.85; margin-bottom: 24px; max-width: 480px;
}

.proj-progress-row { display:flex; justify-content:space-between; margin-bottom:8px; }
.proj-progress-lbl { font-size:12px; font-weight:700; color:#4b5563; letter-spacing:0.3px; }
.proj-progress-pct { font-size:13px; font-weight:800; }

.proj-bar {
  height: 12px;
  background: rgba(0,0,0,0.06);
  border-radius: 999px; overflow: hidden;
  margin-bottom: 22px;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.08);
}
.proj-bar-fill {
  height: 100%; border-radius: 999px;
  transition: width 0.7s cubic-bezier(0.22,1,0.36,1);
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  position: relative;
}
/* shimmer on bar */
.proj-bar-fill::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%);
  background-size: 200% 100%;
  animation: barShimmer 2s ease-in-out infinite;
  border-radius: 999px;
}
@keyframes barShimmer {
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
}

.proj-meta { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
.proj-meta-item {
  font-size: 12.5px; color: #6b7280;
  display: flex; align-items: center; gap: 5px;
  background: rgba(0,0,0,0.04);
  padding: 4px 10px; border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.06);
}
.proj-meta-item strong { color:#1a1a1a; }

.proj-chip {
  font-size: 11px; font-weight: 700;
  padding: 5px 14px; border-radius: 999px; text-transform: uppercase;
  letter-spacing: 0.4px;
}
.chip-ongoing  { background: rgba(102,169,98,0.15); color:#1a7a40; border:1px solid rgba(102,169,98,0.3); }
.chip-planning { background: rgba(202,157,40,0.15); color:#8a6010; border:1px solid rgba(202,157,40,0.3); }

/* ── RIGHT PANEL ── */
.proj-right {
  width: 230px; flex-shrink: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 16px; padding: 36px 20px;
  border-radius: 0 28px 28px 0;
  transition: background 0.5s;
  position: relative; overflow: hidden;
}
/* diagonal pattern overlay */
.proj-right::before {
  content: '';
  position: absolute; inset: 0;
  background: repeating-linear-gradient(
    -45deg,
    rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px,
    transparent 1px, transparent 18px
  );
  pointer-events: none;
}
/* sparkle top-right */
.proj-right::after {
  content: '✦';
  position: absolute; top: 16px; right: 18px;
  font-size: 18px; color: rgba(255,255,255,0.35);
  pointer-events: none;
}

.proj-icon {
  font-size: 68px; line-height: 1;
  filter: drop-shadow(0 6px 16px rgba(0,0,0,0.2));
  animation: iconFloat 3s ease-in-out infinite;
}
@keyframes iconFloat {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
}

.proj-stat-num {
  font-family: 'Crimson Pro', serif;
  font-size: 40px; font-weight: 800; color: #fff;
  text-align: center; line-height: 1;
  text-shadow: 0 2px 12px rgba(0,0,0,0.2);
}
.proj-stat-lbl {
  font-size: 11px; color: rgba(255,255,255,0.88);
  font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.5px; text-align: center;
  line-height: 1.5;
}

/* ── NAV ── */
.proj-nav { display:flex; align-items:center; justify-content:center; gap:14px; margin-top:32px; }

.proj-btn {
  width: 44px; height: 44px; border-radius: 50%;
  border: 1.5px solid rgba(76,171,193,0.35);
  background: rgba(255,255,255,0.9);
  color: #187480; font-size: 20px; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all .2s;
  box-shadow: 0 2px 12px rgba(76,171,193,0.15);
  backdrop-filter: blur(4px);
}
.proj-btn:hover {
  background: linear-gradient(135deg, #4CABC1, #187480);
  color: #fff; border-color: transparent;
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(76,171,193,0.35);
}

.proj-dots { display:flex; gap:7px; align-items:center; }
.proj-dot {
  width: 9px; height: 9px; border-radius: 50%;
  background: rgba(76,171,193,0.25); border: none;
  cursor: pointer; padding: 0; transition: all .3s;
}
.proj-dot.active {
  background: linear-gradient(135deg, #4CABC1, #CA9D28);
  width: 28px; border-radius: 5px;
  box-shadow: 0 2px 8px rgba(76,171,193,0.4);
}

.proj-counter {
  font-size: 12px; font-weight: 700;
  color: #187480; font-family: 'DM Sans', sans-serif;
  background: rgba(76,171,193,0.1);
  padding: 3px 10px; border-radius: 20px;
  border: 1px solid rgba(76,171,193,0.2);
}

        /* ══ NOTICE ══ */
        .notice{background:linear-gradient(135deg,#fef9c3,#fef3c7);border:1px solid #fde68a;border-radius:16px;padding:24px 28px;margin:40px auto;display:flex;gap:16px;align-items:flex-start;max-width:1036px}
        .notice-icon{font-size:28px;flex-shrink:0}
        .notice-title{font-weight:700;color:#92400e;font-size:15px;margin-bottom:6px}
        .notice-text{font-size:13px;color:#a16207;line-height:1.6}

        /* ══ CTA ══ */
        // .cta{background:linear-gradient(135deg,var(--green) 0%,#014d28 100%);color:#fff;padding:72px 32px;text-align:center;position:relative;overflow:hidden}
        // .cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(76,171,191,0.25) 0%,transparent 65%);pointer-events:none}
        // .cta-inner{position:relative;z-index:1}
        // .cta-title{font-family:'Crimson Pro',serif;font-size:clamp(28px,4vw,40px);font-weight:800;margin-bottom:12px}
        // .cta-sub{color:rgba(255,255,255,0.8);font-size:16px;margin-bottom:36px}
        // .cta-btn{padding:15px 48px;border-radius:14px;border:none;background:#fff;color:var(--green);font-weight:800;font-size:16px;cursor:pointer;box-shadow:0 8px 28px rgba(0,0,0,0.18);transition:all .2s}
        // .cta-btn:hover{transform:translateY(-3px);box-shadow:0 14px 36px rgba(0,0,0,0.25)}

        /* ══ RESPONSIVE ══ */
        @media(max-width:1100px){
          .mayor-data-col{width:100px}
          .mayor-data-text{font-size:9.5px}
          .mayor-brand-text{font-size:13px}
          .mayor-phone{width:175px}
          .mayor-phone-img{height:210px}
        }
        @media(max-width:1024px){
          .hero{padding:0 3vw;gap:12px}
          .hero-content{padding:40px 0 140px 1vw}
          .hero-leader{padding-right:92px}
          .hero-icons-col .hero-float{width:76px}
          .hero-content .hero-btns{gap:14px}
          .hero-content .hero-btn-primary,.hero-content .hero-btn-outline{padding:14px 24px;font-size:15px}
          .hero-leader-img{max-height:640px;min-height:0}
          .hiw-grid{grid-template-columns:repeat(2,1fr);gap:20px}
          .hiw-connector{display:none}
          .mayor-left{padding:48px 36px 48px 40px}
        }
        @media(max-width:900px){
          .mayor-data-col:last-child{display:none}
        }
        @media(max-width:768px){
          .hero{min-height:auto;flex-direction:column;align-items:center;padding:40px 20px 0;gap:8px}
          .hero-content{padding:0;width:100%;justify-content:center;justify-items:center;text-align:center}
          .hero-content .hero-desc{text-align:center;margin:0 auto 28px}
          .hero-content .hero-logo{width:84px;height:84px}
          .hero-content .hero-jansanwad{font-size:clamp(48px,13vw,72px)}
          .hero-content .hero-btns{gap:14px;justify-content:center}
          .hero-content .hero-btn-primary,.hero-content .hero-btn-outline{padding:13px 26px;font-size:15px}
          .hero-leader{width:100%;min-height:0;flex:0 0 auto;padding-right:0;flex-direction:column;align-items:center}
          .hero-arc{width:78vw;top:8%}
          .hero-leader-img{height:auto;max-height:440px;max-width:92%;min-height:0;left:0;top:0}
          .hero-leader .hero-float{width:66px}
          .hero-leader .hero-float.f1{top:14%;left:0}
          .hero-leader .hero-float.f2{top:44%;left:0}
          .hero-leader .hero-float.f3{top:12%;right:0}
          .hero-leader .hero-float.f4{top:42%;right:0}
          .hero-icons-col{position:static;transform:none;order:-1;flex-direction:row;justify-content:center;flex-wrap:wrap;gap:12px;margin:20px 0 12px}
          .hero-icons-col .hero-float{width:64px}
          .hero > .hero-ribbon{height:110px}
          .hero > .hero-building{width:70vw;left:15vw;bottom:auto;top:40%;opacity:0.2;z-index:1}
          .hero-float.f1,.hero-float.f2{left:2%}
          .hero-float.f3,.hero-float.f4{right:2%}
          .hero-float{width:64px}
          .hero-float.f1,.hero-float.f3{top:6%}
          .hero-float.f2,.hero-float.f4{top:auto;bottom:4%}
          .hero-logo{width:76px;height:76px}
          .hiw-section{padding:52px 16px 60px}
          .hiw-grid{grid-template-columns:repeat(2,1fr);gap:16px}
          .hiw-card{padding:28px 16px 22px}
          .hiw-icon-wrap{width:60px;height:60px}
          .mayor-section{flex-direction:column}
          .mayor-left{flex:0 0 auto;width:100%;padding:44px 28px}
          .mayor-right{flex:0 0 auto;width:100%;min-height:460px;padding:36px 16px}
          .mayor-data-col:last-child{display:flex}
          .mayor-data-col{width:90px}
          .proj-card{flex-direction:column}
          .proj-left{border-radius:24px 24px 0 0;border-right:1px solid rgba(81,171,172,0.12);border-bottom:none;padding:28px 24px}
          .proj-right{width:100%;border-radius:0 0 24px 24px;flex-direction:row;justify-content:center;gap:24px;padding:20px 24px}
          .notice{margin:24px 16px}
        }
        @media(max-width:480px){
          .hero{padding:48px 16px 48px}
          .hero-btns{flex-direction:column;align-items:center}
          .hero-btn-primary,.hero-btn-outline{width:100%;max-width:300px;text-align:center}
          .hiw-section{padding:44px 14px 52px}
          .hiw-grid{grid-template-columns:1fr;gap:14px}
          .hiw-connector{display:none}
          .hiw-title{font-size:26px}
          .mayor-left{padding:36px 20px}
          .mayor-heading-line1,.mayor-heading-line2{font-size:clamp(26px,7.5vw,40px)}
          .mayor-btn-primary{width:100%;justify-content:center}
          .mayor-bottom-row{flex-direction:column;align-items:center}
          .mayor-data-col{display:none}
          .mayor-phone{width:155px;transform:none}
          .mayor-phone-img{height:190px}
          .mayor-bubble-item{width:48px;height:48px}
          .mayor-brand-text{font-size:12px;max-width:200px}
          .mayor-brand-logo-wrap{width:46px;height:46px}
          .proj-right{flex-direction:column;gap:12px}
          .proj-stat-num{font-size:28px}
        }
        @media(max-width:360px){
          .hero-jansanwad{font-size:40px}
          .hero-float{display:none}
        }

        /* ══ NEWS SLIDER ══ */
        /* ══ STAGGERED CARD ANIMATION ══ */

/* ══ NEWS SLIDER ══ */
/* ══ STAGGERED CARD ANIMATION ══ */

@keyframes cardSlideIn {
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.news-card {
  animation: cardSlideIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}

/* Staggered delays - each card appears 1 second after the previous */
.news-card:nth-child(1) { animation-delay: 0s;    }
.news-card:nth-child(2) { animation-delay: 1s;    }
.news-card:nth-child(3) { animation-delay: 2s;    }
.news-card:nth-child(4) { animation-delay: 3s;    }

        .news-section { background:#F4E7BE; padding:72px 32px 80px; position:relative; overflow:hidden; }
        .news-section::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at 15% 60%,rgba(76,171,193,0.08) 0%,transparent 50%),radial-gradient(circle at 85% 20%,rgba(102,169,98,0.07) 0%,transparent 50%); pointer-events:none; }
        .news-inner { max-width:1060px; margin:0 auto; position:relative; z-index:1; }
        .news-header { text-align:center; margin-bottom:48px; }
        .news-section-tag { display:inline-block; background:rgba(202,157,40,0.15); color:#8a6010; font-size:12px; font-weight:700; padding:5px 16px; border-radius:999px; margin-bottom:14px; letter-spacing:0.6px; text-transform:uppercase; }
        .news-title { font-family:'Crimson Pro',serif; font-size:clamp(28px,4vw,40px); font-weight:800; color:#1a3a2a; margin-bottom:8px; }
        .news-title-bar { width:64px; height:4px; background:linear-gradient(90deg,#CA9D28,#F5D87A); border-radius:2px; margin:0 auto 10px; }
        .news-sub { color:#7a6535; font-size:15px; }
       .news-viewport { overflow-x:scroll; scrollbar-width:none; -ms-overflow-style:none; }
.news-viewport::-webkit-scrollbar { display:none; }
/* REPLACE current .news-track — remove transition and will-change */
.news-track { display:flex; gap:20px; }
        .news-card { flex:0 0 calc(33.333% - 14px); border-radius:24px; overflow:hidden; position:relative; cursor:pointer; transition:transform .35s,box-shadow .35s; display:flex; flex-direction:column; min-height:300px; box-shadow:0 4px 20px rgba(0,0,0,0.07); }
        .news-card:hover { transform:translateY(-8px); box-shadow:0 20px 48px rgba(0,0,0,0.13); }
        .news-card::before { content:''; position:absolute; width:110px; height:110px; border-radius:20px; top:8px; right:-18px; opacity:0.18; filter:blur(3px); transform:rotate(15deg); background:var(--nc-accent); }
        .news-card::after { content:''; position:absolute; width:72px; height:72px; border-radius:14px; top:52px; right:18px; opacity:0.12; filter:blur(4px); transform:rotate(8deg); background:var(--nc-accent); }
        .nc-widget { margin:20px 20px 0; background:rgba(255,255,255,0.82); border-radius:16px; padding:14px 16px 16px; backdrop-filter:blur(8px); position:relative; z-index:2; box-shadow:0 4px 20px rgba(0,0,0,0.08); flex-shrink:0; }
        .nc-widget-day { font-family:'Crimson Pro',serif; font-size:32px; font-weight:800; color:#1a2a2a; line-height:1; margin-bottom:12px; }
        .nc-widget-rows { display:flex; flex-direction:column; gap:8px; }
        .nc-widget-row { display:flex; align-items:center; gap:8px; font-family:'DM Sans',sans-serif; font-size:16px; font-weight:600; color:#2a3a3a; }
        .nc-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
        .nc-caption { margin-top:auto; padding:16px 20px 20px; position:relative; z-index:2; }
        .nc-tag { display:inline-flex; align-items:center; gap:5px; background:rgba(255,255,255,0.55); border:1px solid rgba(255,255,255,0.8); color:#1a3a3a; font-size:10px; font-weight:700; padding:3px 10px; border-radius:20px; margin-bottom:9px; letter-spacing:.5px; text-transform:uppercase; backdrop-filter:blur(4px); font-family:'DM Sans',sans-serif; }
        .nc-title { font-family:'Tiro Devanagari Marathi',serif; font-size:14.5px; font-weight:700; color:#1a2a2a; line-height:1.45; margin-bottom:10px; }
        .nc-date-row { display:flex; align-items:center; justify-content:space-between; }
        .nc-date { font-family:'DM Sans',sans-serif; font-size:11px; font-weight:700; color:#3a2a0a; opacity:0.65; display:flex; align-items:center; gap:5px; }
        .nc-arrow { width:30px; height:30px; background:rgba(255,255,255,0.7); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:14px; color:#1a3a3a; transition:background .2s,transform .2s; border:1px solid rgba(255,255,255,0.9); }
        .news-card:hover .nc-arrow { background:#fff; transform:translateX(3px); }
        .news-nav { display:flex; align-items:center; justify-content:center; gap:14px; margin-top:32px; }
        .news-btn { width:42px; height:42px; border-radius:50%; border:1.5px solid rgba(26,42,42,0.2); background:rgba(255,255,255,0.7); color:#1a2a2a; font-size:20px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .2s; box-shadow:0 2px 8px rgba(0,0,0,0.06); backdrop-filter:blur(4px); }
        .news-btn:hover { border-color:#CA9D28; color:#CA9D28; background:rgba(255,255,255,0.95); }
        .news-dots { display:flex; gap:7px; align-items:center; }
        .news-dot { width:9px; height:9px; border-radius:50%; background:rgba(26,42,42,0.2); border:none; cursor:pointer; padding:0; transition:all .25s; }
        .news-dot.active { background:#CA9D28; width:26px; border-radius:5px; }
        .news-counter { font-size:12px; font-weight:600; color:#9ca3af; font-family:'DM Sans',sans-serif; }
        /* ══ NEWS SLIDER — MOBILE RESPONSIVE ══ */
@media(max-width: 900px) {
  .news-section { padding: 56px 24px 64px; }
  .news-card { flex: 0 0 calc(50% - 10px); }
}

@media(max-width: 600px) {
  .news-section { padding: 48px 16px 56px; }
  .news-title { font-size: 22px; }
  .news-sub { font-size: 13px; }
  .news-header { margin-bottom: 32px; }

  /* Single card — full width on mobile */
  .news-card { flex: 0 0 calc(100% - 0px); min-height: 260px; }

  .nc-widget { margin: 16px 16px 0; padding: 12px 14px 14px; }
  .nc-widget-day { font-size: 26px; margin-bottom: 10px; }
  .nc-widget-row { font-size: 11px; }

  .nc-caption { padding: 14px 16px 16px; }
  .nc-title { font-size: 13.5px; }
  .nc-date { font-size: 10.5px; }
  .nc-arrow { width: 26px; height: 26px; font-size: 12px; }

  .news-nav { gap: 10px; margin-top: 24px; }
  .news-btn { width: 38px; height: 38px; font-size: 18px; }
  .news-counter { font-size: 11px; }
}

@media(max-width: 400px) {
  .news-section { padding: 40px 12px 48px; }
  .news-title { font-size: 20px; }
  .news-card { border-radius: 18px; }
  .nc-widget { border-radius: 12px; }
}

      `}),e.jsxs("div",{className:"home-root",children:[e.jsxs("div",{className:"hero",children:[e.jsx("div",{className:"hero-orbit"}),e.jsx("img",{src:I,alt:"","aria-hidden":"true",className:"hero-building"}),e.jsxs("div",{className:"hero-content",children:[e.jsx("h1",{className:"hero-jansanwad",children:"जन संवाद"}),e.jsx("div",{className:"hero-title-underline"}),e.jsx("p",{className:"hero-desc",children:"नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ"}),e.jsxs("div",{className:"hero-btns",children:[e.jsx("button",{className:"hero-btn-primary",onClick:()=>p("/book-appointment"),children:"📅 Book Appointment →"}),e.jsx("button",{className:"hero-btn-outline",onClick:k,children:"▶ How It Works"}),h&&e.jsx("button",{className:"hero-btn-outline",onClick:()=>p("/my-appointments"),children:"📋 My Appointments"})]})]}),e.jsxs("div",{className:"hero-leader",children:[e.jsx("img",{src:M,alt:"मा. महापौर श्री. अजीव पाटील",className:"hero-leader-img"}),e.jsxs("div",{className:"hero-icons-col",children:[e.jsx("img",{src:E,alt:"Citizen Services",className:"hero-float f1"}),e.jsx("img",{src:S,alt:"Applications",className:"hero-float f2"}),e.jsx("img",{src:F,alt:"Meetings",className:"hero-float f3"}),e.jsx("img",{src:B,alt:"Updates",className:"hero-float f4"})]})]}),e.jsxs("svg",{className:"hero-ribbon",viewBox:"0 0 1440 240",preserveAspectRatio:"none","aria-hidden":"true",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"heroRibbonFill",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#0f6b74"}),e.jsx("stop",{offset:"100%",stopColor:"#0a4f57"})]}),e.jsxs("linearGradient",{id:"heroRibbonGold",x1:"0",y1:"0",x2:"1",y2:"0",children:[e.jsx("stop",{offset:"0%",stopColor:"#F5C451",stopOpacity:"0.15"}),e.jsx("stop",{offset:"35%",stopColor:"#F5C451",stopOpacity:"0.9"}),e.jsx("stop",{offset:"70%",stopColor:"#FFE9A8",stopOpacity:"1"}),e.jsx("stop",{offset:"100%",stopColor:"#F5C451",stopOpacity:"0.9"})]}),e.jsxs("filter",{id:"heroRibbonGlow",x:"-10%",y:"-50%",width:"120%",height:"200%",children:[e.jsx("feGaussianBlur",{stdDeviation:"4",result:"b"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"b"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),e.jsx("path",{d:"M0,110 C200,120 380,185 560,182 C760,178 900,160 1050,138 C1200,116 1330,100 1440,95 L1440,240 L0,240 Z",fill:"url(#heroRibbonFill)"}),e.jsx("path",{d:"M0,165 C260,200 560,222 860,205 C1100,194 1300,170 1440,155 L1440,240 L0,240 Z",fill:"#0e6670",opacity:"0.55"}),e.jsx("path",{d:"M0,110 C200,120 380,185 560,182 C760,178 900,160 1050,138 C1200,116 1330,100 1440,95",fill:"none",stroke:"url(#heroRibbonGold)",strokeWidth:"3",filter:"url(#heroRibbonGlow)"}),e.jsx("path",{d:"M780,177 C900,166 980,150 1050,138 C1200,116 1330,100 1440,95 L1440,119 C1330,124 1200,140 1050,160 C980,170 900,176 780,178 Z",fill:"url(#heroRibbonGold)",filter:"url(#heroRibbonGlow)"})]})]}),e.jsx("div",{className:"hiw-section",children:e.jsxs("div",{className:"hiw-inner",children:[e.jsxs("div",{className:"hiw-header",children:[e.jsx("h2",{className:"hiw-title",children:"कसे काम करते?"}),e.jsx("div",{className:"hiw-title-bar"}),e.jsx("p",{className:"hiw-sub",children:"४ टप्प्यांमध्ये महापौरांची भेट बुक करा."})]}),e.jsxs("div",{className:"hiw-grid-wrap",children:[e.jsx("div",{className:"hiw-connector","aria-hidden":"true"}),e.jsx("div",{className:"hiw-grid",children:v.map((t,i)=>e.jsxs("div",{className:"hiw-card",children:[e.jsx("div",{className:"hiw-num",children:i+1}),e.jsx("div",{className:"hiw-icon-wrap",children:i===0?e.jsx(j,{size:32,color:"#fff"}):i===3?e.jsx(A,{size:34,color:"#fff"}):e.jsx(O,{src:t.lottie,style:{width:44,height:44}})}),e.jsx("div",{className:"hiw-step-title",children:t.title}),e.jsx("div",{className:"hiw-step-desc",children:t.desc})]},i))})]})]})}),e.jsxs("div",{className:"mayor-section",children:[e.jsxs("div",{className:"mayor-left",children:[e.jsx("p",{className:"mayor-heading-line1",children:"मा. महापौर"}),e.jsx("p",{className:"mayor-heading-line2",children:"श्री. अजीव पाटील"}),e.jsx("p",{className:"mayor-bio",children:"३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे."}),e.jsx("button",{className:"mayor-btn-primary",onClick:()=>p(h?"/book-appointment":"/register"),children:"📅 Appointment बुक करा"})]}),e.jsxs("div",{className:"mayor-right",children:[e.jsx("div",{className:"mayor-chevrons","aria-hidden":"true",children:e.jsxs("svg",{width:"200",height:"200",viewBox:"0 0 200 200",fill:"none",children:[e.jsxs("g",{opacity:"0.2",stroke:"#7edede",strokeWidth:"1.4",fill:"none",children:[e.jsx("polyline",{points:"160,8 178,26 160,44"}),e.jsx("polyline",{points:"142,8 160,26 142,44"}),e.jsx("polyline",{points:"124,8 142,26 124,44"}),e.jsx("polyline",{points:"160,44 178,62 160,80"}),e.jsx("polyline",{points:"142,44 160,62 142,80"}),e.jsx("polyline",{points:"124,44 142,62 124,80"}),e.jsx("polyline",{points:"168,80 186,98 168,116"}),e.jsx("polyline",{points:"150,80 168,98 150,116"}),e.jsx("polyline",{points:"168,116 186,134 168,152"}),e.jsx("polyline",{points:"150,116 168,134 150,152"})]}),e.jsx("circle",{cx:"182",cy:"18",r:"16",fill:"rgba(81,200,200,0.3)",stroke:"rgba(81,200,200,0.4)",strokeWidth:"1"}),e.jsx("rect",{x:"108",y:"4",width:"10",height:"10",rx:"1",transform:"rotate(45 113 9)",fill:"#7edede",opacity:"0.3"})]})}),e.jsx("div",{className:"mayor-diamond-tl","aria-hidden":"true",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:e.jsx("rect",{x:"2",y:"2",width:"12",height:"12",rx:"1",transform:"rotate(45 8 8)",fill:"#7edede",opacity:"0.45"})})}),e.jsx("div",{className:"mayor-diamond-mid","aria-hidden":"true",children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",children:e.jsx("rect",{x:"1.5",y:"1.5",width:"9",height:"9",rx:"1",transform:"rotate(45 6 6)",fill:"#c9a040",opacity:"0.4"})})}),e.jsx("div",{className:"mayor-gold-tri","aria-hidden":"true",children:e.jsxs("svg",{width:"160",height:"110",viewBox:"0 0 160 110",fill:"none",children:[e.jsx("polygon",{points:"160,110 160,0 50,110",fill:"#C9963A",opacity:"0.25"}),e.jsx("polygon",{points:"160,110 160,40 95,110",fill:"#e8b84b",opacity:"0.18"})]})}),e.jsx("div",{className:"mayor-sparkle","aria-hidden":"true",children:e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:e.jsx("path",{d:"M14 2 L15.5 12.5 L26 14 L15.5 15.5 L14 26 L12.5 15.5 L2 14 L12.5 12.5 Z",fill:"white",opacity:"0.7"})})}),e.jsx("div",{className:"mayor-phone-glow","aria-hidden":"true"}),e.jsxs("div",{className:"mayor-content-wrap",children:[e.jsxs("div",{className:"mayor-brand-row",children:[e.jsx("div",{className:"mayor-brand-logo-wrap",children:e.jsx("img",{src:D,alt:"VVCMC Logo"})}),e.jsx("div",{className:"mayor-brand-text",children:"वसई-विरार शहर महानगरपालिका, जन संवाद"})]}),e.jsxs("div",{className:"mayor-bottom-row",children:[e.jsxs("div",{className:"mayor-data-col",children:[e.jsx("div",{className:"mayor-data-col-head",children:"नागरिक सहभाग"}),e.jsx("div",{className:"mayor-data-text",children:"नागरिकांचा सक्रिय सहभाग वाढवून शहर विकासात त्यांचे मत आणि सूचना महत्वाच्या ठरत आहेत."}),e.jsx("div",{className:"mayor-data-col-head",style:{marginTop:"6px"},children:"वसई स्मार्ट सिटी प्रकल्प"}),e.jsx("div",{className:"mayor-data-text",children:"वसई स्मार्ट सिटी प्रकल्पांतर्गत शहराचा डिजिटल, सुरक्षित आणि सुसज्ज विकास करण्यावर भर देण्यात आला आहे."})]}),e.jsxs("div",{className:"mayor-phone-center",children:[e.jsxs("div",{className:"mayor-bubbles-col",children:[e.jsx("div",{className:"mayor-bubble-item",children:e.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[e.jsx("rect",{x:"4",y:"4",width:"18",height:"13",rx:"3",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",fill:"none"}),e.jsx("path",{d:"M8 20 L8 17",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7 7h12M7 10h8M7 13h10",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",strokeLinecap:"round"}),e.jsx("circle",{cx:"19",cy:"6",r:"4",fill:"#028945",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1"}),e.jsx("path",{d:"M17 6h4M19 4v4",stroke:"white",strokeWidth:"1",strokeLinecap:"round"})]})}),e.jsx("div",{className:"mayor-bubble-item",children:e.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[e.jsx("polyline",{points:"5,19 10,12 15,15 21,7",stroke:"rgba(255,255,255,0.88)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),e.jsx("polyline",{points:"17,7 21,7 21,11",stroke:"rgba(255,255,255,0.88)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),e.jsx("line",{x1:"5",y1:"21",x2:"21",y2:"21",stroke:"rgba(255,255,255,0.45)",strokeWidth:"1.2",strokeLinecap:"round"})]})}),e.jsx("div",{className:"mayor-bubble-item",children:e.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[e.jsx("circle",{cx:"13",cy:"8",r:"3.2",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",fill:"none"}),e.jsx("path",{d:"M7 21 C7 16.5 19 16.5 19 21",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"}),e.jsx("circle",{cx:"6.5",cy:"10",r:"2.2",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",fill:"none"}),e.jsx("path",{d:"M3 20 C3 16.8 10 16.8 10 20",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1.2",strokeLinecap:"round",fill:"none"}),e.jsx("circle",{cx:"19.5",cy:"10",r:"2.2",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",fill:"none"}),e.jsx("path",{d:"M16 20 C16 16.8 23 16.8 23 20",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1.2",strokeLinecap:"round",fill:"none"}),e.jsx("path",{d:"M10 22.5 Q13 25 16 22.5",stroke:"rgba(255,255,255,0.35)",strokeWidth:"1",strokeLinecap:"round",fill:"none"})]})})]}),e.jsx("div",{className:"mayor-phone-wrap",children:e.jsx("div",{className:"mayor-phone",children:e.jsxs("div",{className:"mayor-phone-inner",children:[e.jsx("img",{src:R,alt:"मा. महापौर श्री. अजीव पाटील",className:"mayor-phone-img"}),e.jsxs("div",{className:"mayor-phone-badge",children:[e.jsx("div",{className:"mayor-phone-badge-name",children:"मा. महापौर श्री. अजीव पाटील"}),e.jsx("div",{className:"mayor-phone-badge-title",children:"वसई-विरार शहर महानगरपालिका"})]})]})})})]}),e.jsxs("div",{className:"mayor-data-col",children:[e.jsx("div",{className:"mayor-data-col-head",children:"पायाभूत सुविधा"}),e.jsx("div",{className:"mayor-data-text",children:"वसई-विरार शहर महानगरपालिका महापौर, आरोग्य, विरार शहर, सुधार बैठक, कार्यालय उपाध्यक्ष"}),e.jsx("div",{className:"mayor-data-col-head",style:{marginTop:"6px"},children:"सुरक्षित व स्वच्छ शहर"}),e.jsx("div",{className:"mayor-data-text",children:"सुरक्षितता, स्वच्छता आणि पर्यावरणपूरक उपक्रमांद्वारे शहर अधिक राहण्यायोग्य बनवले जात आहे."})]})]})]})]})]}),e.jsx("div",{className:"projects-section",style:{backgroundColor:"#F9FCFB"},children:e.jsxs("div",{className:"projects-inner",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("div",{className:"section-tag",children:"✦ सध्या सुरू"}),e.jsx("h2",{className:"section-title",children:"चालू प्रकल्प"}),e.jsx("p",{className:"section-sub",children:"वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प"})]}),e.jsxs("div",{className:"proj-card",onMouseEnter:()=>r(!1),onMouseLeave:()=>r(!0),style:o.bgimg?{backgroundImage:`linear-gradient(to right, rgba(255,255,255,0.92) 55%, ${o.accent}99 100%), url(${o.bgimg})`,backgroundSize:"cover",backgroundPosition:"center"}:{},children:[e.jsxs("div",{className:"proj-left",style:{background:"transparent",border:o.bgimg?"none":"1px solid rgba(81,171,172,0.12)",borderRight:"none"},children:[e.jsxs("div",{className:"proj-tag",style:{background:`${o.accent}18`,color:o.accent},children:[o.icon," ",o.tag]}),e.jsx("div",{className:"proj-title",children:o.title}),e.jsx("p",{className:"proj-desc",children:o.desc}),e.jsxs("div",{className:"proj-progress-row",children:[e.jsx("span",{className:"proj-progress-lbl",children:"प्रगती"}),e.jsx("span",{className:"proj-progress-pct",style:{color:o.accent},children:o.progress})]}),e.jsx("div",{className:"proj-bar",children:e.jsx("div",{className:"proj-bar-fill",style:{width:`${o.progress}%`,background:`linear-gradient(90deg,${o.accent}88,${o.accent})`}})}),e.jsxs("div",{className:"proj-meta",children:[e.jsxs("div",{className:"proj-meta-item",children:["💰 ",e.jsx("strong",{children:o.budget})]}),e.jsxs("div",{className:"proj-meta-item",children:["📅 ",e.jsx("strong",{children:o.deadline})]}),e.jsx("span",{className:`proj-chip ${o.status==="ongoing"?"chip-ongoing":"chip-planning"}`,children:o.statusLabel})]})]}),e.jsxs("div",{className:"proj-right",style:{background:`linear-gradient(160deg,${o.accent},${o.accent}bb)`},children:[e.jsx("div",{className:"proj-icon",children:o.icon}),e.jsxs("div",{children:[e.jsx("div",{className:"proj-stat-num",children:o.stat}),e.jsx("div",{className:"proj-stat-lbl",children:o.statLbl})]})]})]}),e.jsxs("div",{className:"proj-nav",children:[e.jsx("button",{className:"proj-btn",onClick:()=>{r(!1),n(t=>(t-1+s.length)%s.length)},children:"‹"}),e.jsx("div",{className:"proj-dots",children:s.map((t,i)=>e.jsx("button",{className:`proj-dot${a===i?" active":""}`,onClick:()=>{r(!1),n(i)}},i))}),e.jsxs("span",{className:"proj-counter",children:[a+1," / ",s.length]}),e.jsx("button",{className:"proj-btn",onClick:()=>{r(!1),n(t=>(t+1)%s.length)},children:"›"})]})]})}),e.jsxs("div",{className:"notice",children:[e.jsx("span",{className:"notice-icon",children:"⚠️"}),e.jsxs("div",{children:[e.jsx("div",{className:"notice-title",children:"महत्त्वाची सूचना"}),e.jsx("div",{className:"notice-text",children:"भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही. Appointment confirm होण्यासाठी admin approval आवश्यक आहे. कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा."})]})]}),e.jsx("div",{className:"cta"}),e.jsx("div",{className:"news-section",children:e.jsxs("div",{className:"news-inner",children:[e.jsxs("div",{className:"news-header",children:[e.jsx("div",{className:"news-section-tag",children:"✦ ताज्या बातम्या"}),e.jsx("h2",{className:"news-title",children:"महापौर कार्यालयाच्या ताज्या बातम्या"}),e.jsx("div",{className:"news-title-bar"}),e.jsx("p",{className:"news-sub",children:"Mayor's Office Latest Updates & Activities"})]}),e.jsx("div",{className:"news-viewport",ref:d,onMouseEnter:()=>x(!1),onMouseLeave:()=>x(!0),children:e.jsx("div",{className:"news-track",children:N.map((t,i)=>e.jsxs("div",{className:"news-card",style:{background:t.bg,"--nc-accent":t.accent},children:[e.jsxs("div",{className:"nc-widget",children:[e.jsx("div",{className:"nc-widget-day",children:t.day}),e.jsx("div",{className:"nc-widget-rows",children:t.rows.map((z,w)=>e.jsxs("div",{className:"nc-widget-row",children:[e.jsx("span",{className:"nc-dot",style:{background:t.dotColors[w]}}),z]},w))})]}),e.jsxs("div",{className:"nc-caption",children:[e.jsx("div",{className:"nc-tag",children:t.tag}),e.jsx("div",{className:"nc-title",children:t.title}),e.jsxs("div",{className:"nc-date-row",children:[e.jsxs("div",{className:"nc-date",children:["📅 ",t.date]}),e.jsx("div",{className:"nc-arrow",children:"→"})]})]})]},i))},g)}),e.jsxs("div",{className:"news-nav",children:[e.jsx("button",{className:"news-btn",onClick:()=>{x(!1),f(t=>Math.max(0,t-1))},children:"‹"}),e.jsx("div",{className:"news-dots",children:Array.from({length:2}).map((t,i)=>e.jsx("button",{className:`news-dot${u===i?" active":""}`,onClick:()=>{x(!1),f(i)}},i))}),e.jsxs("span",{className:"news-counter",children:[u+1," / 2"]}),e.jsx("button",{className:"news-btn",onClick:()=>{x(!1),f(t=>Math.min(m,t+1))},children:"›"})]})]})})]})]})}export{V as default};
