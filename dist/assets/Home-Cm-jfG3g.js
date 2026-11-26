import{u as A,a as o,R as w,j as e}from"./vendor-react-BwQSrn6v.js";import{i as N,$ as D,a0 as S,k as B,b as L,a1 as C,a2 as T}from"./vendor-icons-NNWxJ0Do.js";import{l as W}from"./logo2new-B4VGcLNc.js";const I="/assets/ajivsir1-DtAuu40c.jpeg",R="/assets/ajivp3-DRbgKewo.png",P="/assets/herosectioBG-BgvYd2Vh.png",O="/assets/heroSectionTab1-sj9IRNR9.png",Y="/assets/herosectionMobile1-BfOdfKLa.png",H="/assets/meeting2-BpgpR0FZ.jpeg",V="/assets/tree-BGxUfGTP.jfif",$="/assets/pani3-tuXII5q-.jpg",U="/assets/narangibridgeahani-Ct7_szRG.jpeg";function _({src:l,style:g,loop:x=!0}){const n=o.useRef(null);return o.useEffect(()=>{let s;const c=()=>{window.lottie&&n.current&&(n.current.innerHTML="",s=window.lottie.loadAnimation({container:n.current,renderer:"svg",loop:x,autoplay:!0,path:l}))};if(window.lottie)c();else{const r=document.createElement("script");r.src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js",r.onload=c,document.head.appendChild(r)}return()=>s&&s.destroy()},[l]),e.jsx("div",{ref:n,style:g})}function G(){const l=A(),g=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),x=o.useRef(null),[n,s]=o.useState(0),[c,r]=o.useState(!0),[m,b]=w.useState(0),[u,h]=w.useState(!0),j=()=>window.innerWidth<=600?1:window.innerWidth<=900?2:3,[y,M]=w.useState(j);o.useEffect(()=>{const t=()=>M(j());return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const p=[{icon:"🌉",tag:"पायाभूत सुविधा",title:"नारंगी उड्डाणपूल प्रकल्प पाहणी",desc:"नारंगी येथील उड्डाणपुलाच्या कामाची मा. महापौर श्री. अजीव पाटील यांनी प्रत्यक्ष पाहणी केली. या पाहणीदरम्यान संबंधित अधिकारी, रेल्वे अधिकारी, कंत्राटदार व उपकंत्राटदार यांच्याशी चर्चा करून कामाची प्रगती व अडचणी जाणून घेतल्या. तसेच कामाला अधिक गती देण्याच्या सूचना दिल्या.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 42 कोटी",deadline:"डिसेंबर 2025",stat:"",statLbl:"मार्च २०२६ अखेर वाहतुकीसाठी खुले",accent:"#51ABAC",bgimg:U},{icon:"🏛️",tag:"प्रशासन",title:"समिती गठनाबाबत चर्चा",desc:"स्थायी समितीच्या महत्त्वाच्या विषयांवर तसेच प्रभाग समित्यांच्या गठनाबाबत चर्चा सुरू आहे.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 85 कोटी",deadline:"मार्च 2026",stat:"",statLbl:"",accent:"#028945",bgimg:H},{icon:"💧",tag:"पाणीपुरवठा",title:"24×7 पाणीपुरवठा योजना — वसई विभाग",desc:"वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 85 कोटी",deadline:"मार्च 2026",stat:"1.2 लाख",statLbl:"लाभार्थी कुटुंबे",accent:"#028945",bgimg:$},{icon:"🌳",tag:"पर्यावरण",title:"हरित वसई-विरार — वृक्षारोपण मोहीम",desc:"महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 8 कोटी",deadline:"ऑगस्ट 2025",stat:"5 लाख",statLbl:"झाडे लावणार",accent:"#028945",bgimg:V}];o.useEffect(()=>{if(!c)return;const t=setInterval(()=>{s(a=>(a+1)%p.length)},4e3);return()=>clearInterval(t)},[c,p.length]);const E=[{icon:e.jsx(C,{size:32,color:"#fff"}),lottie:"https://assets3.lottiefiles.com/packages/lf20_jbb3xnwi.json",title:"नोंदणी करा",desc:"Mobile number वापरून account तयार करा."},{lottie:"https://assets4.lottiefiles.com/packages/lf20_tljjahng.json",title:"तारीख निवडा",desc:"मा. श्री महापौर यांच्या available dates आणि time slots मधून निवडा"},{lottie:"https://assets9.lottiefiles.com/packages/lf20_xyadoh9h.json",title:"तपशील भरा",desc:"भेटीचे कारण, visitors संख्या आणि photo द्या"},{lottie:"https://assets10.lottiefiles.com/packages/lf20_attdh2fv.json",title:"टोकन मिळवा",desc:"Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा"}],i=p[n],F=()=>{const t=document.querySelector(".hiw-section");t&&t.scrollIntoView({behavior:"smooth",block:"start"})},v=[{tag:"🌿 शिबिर प्रदर्शन",title:"घनकचरा व्यवस्थापन शिबिर-प्रदर्शन उद्घाटन",rows:["घनकचरा व्यवस्थापन प्रदर्शन","खत निर्मिती तंत्रज्ञान प्रदर्शन"],date:"२८ फेब्रुवारी २०२६",accent:"#4CABC1",bg:"linear-gradient(160deg,#b8e2ec 0%,#d0eff7 40%,#aad8e8 100%)",dotColors:["#4CABC1","#66A962"]},{tag:"🧹 स्वच्छता आढावा",title:"दैनंदिन कचरा संकलन व स्वच्छता बैठक",rows:["कचरा संकलन व वर्गीकरण","गटार व नाले साफसफाई"],date:"११ मार्च २०२६",accent:"#66A962",bg:"linear-gradient(160deg,#b5d9b3 0%,#d2edd0 40%,#a8cfaa 100%)",dotColors:["#66A962","#CA9D28"]},{tag:"🛣️ रस्ते विकास",title:"रस्ते दुरुस्ती व पायाभूत सुविधा नियोजन बैठक",rows:["रस्ते दुरुस्ती व बांधकाम","फुटपाथ उभारणी नियोजन"],date:"१० मार्च २०२६",accent:"#CA9D28",bg:"linear-gradient(160deg,#f0d6a8 0%,#f7e6c2 40%,#e8c87a 100%)",dotColors:["#CA9D28","#CE9A54"]},{tag:"⚡ वीज विकास",title:"MSEDCL वसई मंडळ आढावा बैठक",rows:["MSEDCL विकास कामे आढावा","महापौर व नगर सेवक बैठक"],date:"५ मार्च २०२६",accent:"#49ACC3",bg:"linear-gradient(160deg,#a8d4dc 0%,#c8e8f0 40%,#8ec4d0 100%)",dotColors:["#49ACC3","#187480"]}],d=Math.max(0,v.length-y),k=Math.min(m,d);return o.useEffect(()=>{if(!u)return;const t=setInterval(()=>{b(a=>a>=d?0:a+1)},5e3);return()=>clearInterval(t)},[u,d]),o.useEffect(()=>{if(!x.current)return;const t=x.current,a=t.querySelector(".news-card"),f=a?a.offsetWidth:(t.offsetWidth-40)/3;t.scrollTo({left:Math.min(m,d)*(f+20),behavior:"smooth"})},[m,d,y]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&family=Montserrat:wght@500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        :root { --teal:#51ABAC; --green:#028945; --gold:#F5E6BF; --blue:#4CABBF; }






        /* ══ HERO — Jan Samwad (reference design) ══ */
        .jsh { position:relative; overflow:hidden; min-height:clamp(560px, calc(100vh - 64px), 820px); display:flex; align-items:stretch;
          background-color:#EAF6F8; background-image:url(${P}); background-size:cover; background-position:center center; background-repeat:no-repeat; }
        /* Hero background — Tablet (768–1024) साठी herobgtab, Mobile (≤767) साठी herobgmob. Desktop वर herobg तसाच. */
        @media (max-width:1024px){ .jsh { background-image:url(${O}); background-position:center center; } }
        @media (max-width:767px){ .jsh { background-image:url(${Y}); background-position:center center; } }
        .jsh-inner { position:relative; z-index:1; width:100%; display:grid; grid-template-columns:minmax(0,1.22fr) minmax(0,0.78fr); align-items:stretch; }
        .jsh-left { display:flex; flex-direction:column; justify-content:center; padding:clamp(40px,6vh,72px) 2vw clamp(40px,6vh,72px) 6vw; position:relative; z-index:2; }
        .jsh-eyebrow { display:flex; align-items:center; gap:14px; font-family:'Montserrat','DM Sans',sans-serif; font-weight:600; font-size:clamp(15px,1.35vw,22px); color:#C47F22; margin-bottom:clamp(10px,1.6vh,18px); }
        .jsh-eyebrow-line { width:clamp(36px,4vw,60px); height:2px; background:#C47F22; border-radius:2px; flex-shrink:0; }
        .jsh-title { font-family:'Montserrat','DM Sans',sans-serif; font-weight:800; font-size:clamp(46px,5.4vw,104px); line-height:1.04; letter-spacing:-1.5px; margin:0 0 clamp(14px,2.2vh,24px); display:flex; align-items:center; flex-wrap:nowrap; white-space:nowrap; gap:0 .26em; }
        .jsh-t1 { color:#0B3F52; }
        .jsh-t2 { background:linear-gradient(180deg,#14939E 0%,#0E7383 100%); -webkit-background-clip:text; background-clip:text; color:transparent; -webkit-text-fill-color:transparent; }
        .jsh-chat { width:.92em; height:.92em; flex-shrink:0; margin-left:.04em; filter:drop-shadow(0 4px 10px rgba(201,140,40,0.18)); }
        .jsh-desc { font-family:'Montserrat','DM Sans',sans-serif; font-weight:500; font-size:clamp(16px,1.55vw,25px); line-height:1.5; color:#16323C; max-width:34em; margin:0 0 clamp(16px,2.4vh,26px); }
        .jsh-gold { width:clamp(90px,8vw,140px); height:4px; border-radius:4px; background:#E39A2D; margin-bottom:clamp(20px,3.4vh,40px); }
        .jsh-btns { display:flex; gap:clamp(12px,1.4vw,22px); flex-wrap:wrap; margin-bottom:clamp(24px,4.2vh,48px); }
        .jsh-btn { display:inline-flex; align-items:center; justify-content:center; gap:12px; font-family:'Montserrat','DM Sans',sans-serif; font-weight:700; font-size:clamp(15px,1.25vw,20px); border-radius:16px; padding:clamp(13px,1.4vw,20px) clamp(22px,2.4vw,40px); cursor:pointer; transition:transform .2s, box-shadow .2s, background .2s; white-space:nowrap; }
        .jsh-btn svg { flex-shrink:0; }
        .jsh-btn-primary { border:none; color:#fff; background:linear-gradient(135deg,#1C8E9C 0%,#147886 55%,#0F6474 100%); box-shadow:0 10px 24px rgba(15,100,116,0.28); }
        .jsh-btn-primary:hover { transform:translateY(-2px); box-shadow:0 14px 30px rgba(15,100,116,0.36); }
        .jsh-btn-outline { background:rgba(255,255,255,0.88); color:#0B3F52; border:1.5px solid #0E5A6B; box-shadow:0 6px 18px rgba(11,63,82,0.08); }
        .jsh-btn-outline:hover { transform:translateY(-2px); background:#fff; }
        .jsh-services-head { display:flex; align-items:center; gap:18px; font-family:'Montserrat','DM Sans',sans-serif; font-weight:700; font-size:clamp(17px,1.5vw,24px); color:#0E5A6B; margin-bottom:clamp(14px,2vh,22px); }
        .jsh-services-line { flex:1; height:1.5px; background:linear-gradient(90deg,rgba(14,90,107,0.7),rgba(14,90,107,0.15)); max-width:640px; }
        .jsh-services { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:clamp(12px,1.3vw,22px); max-width:760px; }
        .jsh-svc { display:flex; align-items:center; gap:clamp(8px,0.9vw,18px); background:rgba(255,255,255,0.94); border:1px solid rgba(14,90,107,0.06); border-radius:18px; padding:clamp(12px,1.3vw,22px) clamp(12px,1.3vw,26px); box-shadow:0 10px 28px rgba(11,63,82,0.08); font-family:'Montserrat','DM Sans',sans-serif; font-weight:500; font-size:clamp(13px,1.15vw,21px); color:#16323C; min-width:0; }
        .jsh-svc span { min-width:0; overflow-wrap:anywhere; line-height:1.25; }
        .jsh-svc svg { flex-shrink:0; width:clamp(24px,2.2vw,40px); height:clamp(24px,2.2vw,40px); }

        .jsh-right { position:relative; display:flex; align-items:flex-end; justify-content:center; min-height:100%; }
.jsh-mayor { position:absolute; bottom:0; right:clamp(-140px,-5vw,-30px); height:88%; max-height:740px;        
        width:auto; max-width:100%; object-fit:contain; object-position:bottom center; display:block; user-select:none; filter:drop-shadow(0 18px 36px rgba(11,63,82,0.18)); }
        .jsh-badge { position:absolute; right:clamp(8px,2.5vw,48px); bottom:clamp(40px,11%,110px); z-index:3; background:rgba(255,255,255,0.97); border-radius:18px; padding:clamp(12px,1.2vw,18px) clamp(18px,1.8vw,30px) clamp(12px,1.2vw,18px) clamp(20px,2vw,32px); box-shadow:0 14px 34px rgba(11,63,82,0.16); border-left:6px solid #E8892B; font-family:'Montserrat','DM Sans',sans-serif; }
        .jsh-badge-role { display:block; font-size:clamp(12px,1vw,16px); font-weight:500; color:#4A5E66; margin-bottom:4px; }
        .jsh-badge-name { display:block; font-size:clamp(16px,1.55vw,26px); font-weight:800; color:#0B3F52; white-space:nowrap; }

        /* Laptop */
        @media(max-width:1440px){ .jsh-mayor{right:0} }
        @media(max-width:1280px){ .jsh-left{padding-left:5vw} }

        /* Tablet landscape (900–1024) */
        @media(max-width:1024px){
          .jsh { min-height:clamp(540px, 78vh, 700px); }
          .jsh-inner { grid-template-columns:minmax(0,1.2fr) minmax(0,0.8fr); }
          .jsh-left { padding:44px 1vw 44px 4vw; }
          .jsh-title { font-size:clamp(42px,5.6vw,58px); }
          .jsh-desc { font-size:clamp(16px,1.9vw,19px); }
          .jsh-btn { font-size:15px; padding:14px 22px; border-radius:14px; }
          .jsh-svc { padding:12px 10px; font-size:14px; border-radius:16px; gap:8px; }
          .jsh-svc svg { width:26px; height:26px; }
          .jsh-mayor { height:90%; right:0; }
          .jsh-badge { right:12px; bottom:36px; }
          .jsh-badge-name { font-size:17px; }
        }

        /* Tablet portrait (768–899) : content on top, portrait below */
        @media(max-width:899px){
          .jsh { min-height:0; background-position:center center; }
          .jsh-inner { grid-template-columns:1fr; }
          .jsh-left { padding:48px 6vw 12px; }
          .jsh-title { font-size:clamp(44px,8.4vw,68px); }
          .jsh-desc { font-size:18px; max-width:30em; }
          .jsh-services { max-width:none; }
          .jsh-right { height:clamp(380px,56vw,520px); min-height:0; }
          .jsh-mayor { position:relative; right:auto; height:100%; max-height:none; }
          .jsh-badge { right:6vw; bottom:28px; }
        }

        /* Mobile */
        @media(max-width:767px){
          .jsh-left { padding:36px 18px 8px; }
          .jsh-eyebrow { font-size:14px; gap:10px; }
          .jsh-eyebrow-line { width:28px; }
          .jsh-title { font-size:clamp(36px,10.5vw,54px); letter-spacing:-1px; flex-wrap:wrap; white-space:normal; }
          .jsh-desc { font-size:16px; }
          .jsh-gold { margin-bottom:22px; }
          .jsh-btns { flex-direction:column; align-items:stretch; margin-bottom:28px; }
          .jsh-btn { width:100%; min-height:50px; font-size:16px; }
          .jsh-services-head { font-size:17px; gap:12px; }
          .jsh-services { gap:10px; }
          .jsh-svc { flex-direction:column; justify-content:center; text-align:center; gap:8px; padding:14px 6px; font-size:13px; border-radius:14px; }
          .jsh-svc svg { width:28px; height:28px; }
          .jsh-right { height:clamp(330px,92vw,440px); }
          .jsh-badge { right:14px; bottom:18px; padding:10px 16px 10px 16px; border-left-width:5px; border-radius:14px; }
          .jsh-badge-role { font-size:12px; }
          .jsh-badge-name { font-size:16px; }
        }
        @media(max-width:360px){
          .jsh-svc { font-size:12px; }
          .jsh-svc span { white-space:normal; }
        }

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
        .mayor-section { width:100%; display:flex; align-items:stretch; min-height:480px; overflow:hidden; }
        .mayor-left { flex:0 0 42%; background:#f5ead8; padding:60px 52px 60px 56px; display:flex; flex-direction:column; justify-content:center; position:relative; overflow:hidden; }
        .mayor-left::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at 10% 20%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(200,160,80,0.08) 0%, transparent 50%); pointer-events:none; }
        .mayor-heading-line1 { font-family:'Tiro Devanagari Marathi',serif; font-size:clamp(32px,4.2vw,56px); font-weight:800; color:#1a5050; line-height:1.15; margin:0 0 2px 0; position:relative; z-index:1; }
        .mayor-heading-line2 { font-family:'Tiro Devanagari Marathi',serif; font-size:clamp(32px,4.2vw,56px); font-weight:800; color:#C8922A; line-height:1.15; margin:0 0 28px 0; position:relative; z-index:1; }
        .mayor-bio { font-family:'Tiro Devanagari Marathi',serif; font-size:13.5px; color:#3a3a3a; line-height:1.9; margin-bottom:36px; max-width:400px; position:relative; z-index:1; }
        .mayor-btn-primary { display:inline-flex; align-items:center; gap:8px; padding:13px 28px; border-radius:8px; border:none; background:#028945; color:#fff; font-weight:700; font-size:14px; font-family:'DM Sans',sans-serif; cursor:pointer; transition:all .2s; box-shadow:0 4px 16px rgba(2,137,69,0.35); width:fit-content; position:relative; z-index:1; }
        .mayor-btn-primary:hover { background:#016d38; transform:translateY(-2px); box-shadow:0 8px 22px rgba(2,137,69,0.45); }

        .mayor-right { flex:1; background:linear-gradient(145deg,#1e7a7a 0%,#155e5e 40%,#0d4040 100%); position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center; padding:32px 24px; min-height:480px; }
        .mayor-right::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,transparent,#C9963A 20%,#e8b84b 60%,transparent 100%); z-index:4; }

        .mayor-chevrons { position:absolute; top:0; right:0; width:200px; height:200px; pointer-events:none; z-index:2; }
        .mayor-diamond-tl { position:absolute; top:18%; left:6%; pointer-events:none; z-index:2; }
        .mayor-diamond-mid { position:absolute; top:48%; left:3%; pointer-events:none; z-index:2; }
        .mayor-gold-tri { position:absolute; bottom:0; right:0; pointer-events:none; z-index:2; }
        .mayor-sparkle { position:absolute; bottom:12%; right:2%; pointer-events:none; z-index:3; }
        .mayor-phone-glow { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:320px; height:320px; border-radius:50%; background:radial-gradient(circle,rgba(81,200,200,0.15) 0%,transparent 65%); pointer-events:none; z-index:1; }

        .mayor-content-wrap { position:relative; z-index:4; display:flex; flex-direction:column; align-items:center; width:100%; }
        .mayor-brand-row { display:flex; align-items:center; gap:14px; margin-bottom:22px; padding-bottom:16px; border-bottom:1px solid rgba(255,255,255,0.18); width:100%; justify-content:center; }
        .mayor-brand-logo-wrap { width:56px; height:56px; border-radius:50%; background:rgba(255,255,255,0.15); border:2px solid rgba(255,255,255,0.4); display:flex; align-items:center; justify-content:center; overflow:hidden; flex-shrink:0; box-shadow:0 4px 16px rgba(0,0,0,0.25); }
        .mayor-brand-logo-wrap img { width:100%; height:100%; object-fit:cover; }
        .mayor-brand-text { font-family:'Tiro Devanagari Marathi',serif; font-size:15px; font-weight:700; color:rgba(255,255,255,0.95); line-height:1.5; max-width:260px; }

        .mayor-bottom-row { display:flex; align-items:center; gap:18px; width:100%; justify-content:center; }
        .mayor-data-col { display:flex; flex-direction:column; gap:8px; width:120px; flex-shrink:0; }
        .mayor-data-col-head { font-family:'Tiro Devanagari Marathi',serif; font-size:9.5px; font-weight:700; color:#F5D87A; text-transform:uppercase; letter-spacing:0.5px; border-bottom:1px solid rgba(245,216,122,0.35); padding-bottom:5px; margin-bottom:2px; }
        .mayor-data-text { font-family:'Tiro Devanagari Marathi',serif; font-size:10px; color:rgba(255,255,255,0.78); line-height:1.75; padding:7px 9px; background:rgba(255,255,255,0.07); border-radius:7px; border:1px solid rgba(255,255,255,0.12); }

        .mayor-phone-center { display:flex; align-items:center; gap:14px; flex-shrink:0; }
        .mayor-bubbles-col { display:flex; flex-direction:column; gap:16px; flex-shrink:0; z-index:4; }
        .mayor-bubble-item { width:58px; height:58px; border-radius:50%; background:rgba(255,255,255,0.12); backdrop-filter:blur(10px); border:1.5px solid rgba(255,255,255,0.22); display:flex; align-items:center; justify-content:center; box-shadow:0 6px 18px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.12); animation:mBob 3.5s ease-in-out infinite; cursor:default; }
        .mayor-bubble-item:nth-child(1){animation-delay:0s}
        .mayor-bubble-item:nth-child(2){animation-delay:0.75s}
        .mayor-bubble-item:nth-child(3){animation-delay:1.5s}
        @keyframes mBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}

        .mayor-phone-wrap { position:relative; z-index:4; flex-shrink:0; }
        .mayor-phone { width:195px; background:#051515; border-radius:34px; padding:8px; position:relative; box-shadow:0 0 0 2px rgba(100,210,210,0.5), 0 0 0 5px rgba(81,171,172,0.12), 0 28px 70px rgba(0,0,0,0.55), 0 6px 20px rgba(0,0,0,0.3); transform:rotate(-2deg); }
        .mayor-phone::before { content:''; position:absolute; top:14px; left:50%; transform:translateX(-50%); width:44px; height:5px; background:#051515; border-radius:3px; z-index:5; }
        .mayor-phone-inner { border-radius:28px; overflow:hidden; background:#fff; }
        .mayor-phone-img { width:100%; height:240px; object-fit:cover; object-position:top center; display:block; }
        .mayor-phone-badge { padding:10px 12px 12px; background:#fff; border-top:1px solid #f0f0f0; }
        .mayor-phone-badge-name { font-family:'Tiro Devanagari Marathi',serif; font-size:11px; font-weight:800; color:#1a1a1a; line-height:1.4; }
        .mayor-phone-badge-title { font-size:9px; color:#51ABAC; font-weight:700; margin-top:2px; text-transform:uppercase; letter-spacing:0.4px; }

        /* ══ PROJECTS ══ */
        .projects-section { padding:80px 32px; background:linear-gradient(160deg,#eef8f4 0%,#FFFCF2 50%,#fff 100%); position:relative; overflow:hidden; }
        .projects-section::before { content:''; position:absolute; top:-80px; left:-80px; width:320px; height:320px; border-radius:50%; background:radial-gradient(circle,rgba(76,171,193,0.12) 0%,transparent 70%); pointer-events:none; }
        .projects-section::after { content:''; position:absolute; bottom:-60px; right:-60px; width:280px; height:280px; border-radius:50%; background:radial-gradient(circle,rgba(202,157,40,0.10) 0%,transparent 70%); pointer-events:none; }
        .projects-inner { max-width:1060px; margin:0 auto; position:relative; z-index:1; }
        .section-header { text-align:center; margin-bottom:48px; }
        .section-tag { display:inline-block; background:linear-gradient(135deg,rgba(76,171,193,0.15),rgba(202,157,40,0.12)); color:#187480; font-size:12px; font-weight:700; padding:6px 18px; border-radius:999px; margin-bottom:14px; letter-spacing:0.6px; text-transform:uppercase; border:1px solid rgba(76,171,193,0.3); }
        .section-title { font-family:'Crimson Pro',serif; font-size:clamp(28px,4vw,42px); font-weight:800; color:#1a4a2e; margin-bottom:8px; text-shadow:0 2px 8px rgba(0,0,0,0.06); }
        .section-sub { color:#6b7280; font-size:15px; }

        .proj-card { display:flex; border-radius:28px; overflow:hidden; box-shadow:0 4px 0 0 rgba(76,171,193,0.35), 0 16px 56px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06); min-height:320px; transition:box-shadow .35s, transform .35s; background:#fff; border:1.5px solid rgba(76,171,193,0.18); }
        .proj-card:hover { transform:translateY(-6px); box-shadow:0 4px 0 0 rgba(76,171,193,0.5), 0 28px 72px rgba(0,0,0,0.14), 0 8px 24px rgba(0,0,0,0.08); }
        .proj-left { flex:1; padding:44px 48px; display:flex; flex-direction:column; justify-content:center; border-radius:28px 0 0 28px; background-size:cover; background-position:top; background-repeat:no-repeat; }
        .proj-tag { display:inline-flex; align-items:center; gap:6px; font-size:11px; font-weight:700; padding:5px 16px; border-radius:999px; text-transform:uppercase; letter-spacing:0.6px; margin-bottom:16px; width:fit-content; box-shadow:0 2px 8px rgba(0,0,0,0.08); }
        .proj-title { font-family:'Tiro Devanagari Marathi',serif; font-size:clamp(18px,2.4vw,26px); font-weight:800; color:#1a1a1a; margin-bottom:14px; line-height:1.35; }
        .proj-desc { font-family:'Tiro Devanagari Marathi',serif; font-size:13.5px; color:#555; line-height:1.85; margin-bottom:24px; max-width:480px; }
        .proj-progress-row { display:flex; justify-content:space-between; margin-bottom:8px; }
        .proj-progress-lbl { font-size:12px; font-weight:700; color:#4b5563; letter-spacing:0.3px; }
        .proj-progress-pct { font-size:13px; font-weight:800; }
        .proj-bar { height:12px; background:rgba(0,0,0,0.06); border-radius:999px; overflow:hidden; margin-bottom:22px; box-shadow:inset 0 2px 4px rgba(0,0,0,0.08); }
        .proj-bar-fill { height:100%; border-radius:999px; transition:width 0.7s cubic-bezier(0.22,1,0.36,1); box-shadow:0 2px 8px rgba(0,0,0,0.2); position:relative; }
        .proj-bar-fill::after { content:''; position:absolute; inset:0; background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.35) 50%,transparent 100%); background-size:200% 100%; animation:barShimmer 2s ease-in-out infinite; border-radius:999px; }
        @keyframes barShimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        .proj-meta { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
        .proj-meta-item { font-size:12.5px; color:#6b7280; display:flex; align-items:center; gap:5px; background:rgba(0,0,0,0.04); padding:4px 10px; border-radius:8px; border:1px solid rgba(0,0,0,0.06); }
        .proj-meta-item strong { color:#1a1a1a; }
        .proj-chip { font-size:11px; font-weight:700; padding:5px 14px; border-radius:999px; text-transform:uppercase; letter-spacing:0.4px; }
        .chip-ongoing  { background:rgba(102,169,98,0.15); color:#1a7a40; border:1px solid rgba(102,169,98,0.3); }
        .chip-planning { background:rgba(202,157,40,0.15); color:#8a6010; border:1px solid rgba(202,157,40,0.3); }

        .proj-right { width:230px; flex-shrink:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:16px; padding:36px 20px; border-radius:0 28px 28px 0; transition:background 0.5s; position:relative; overflow:hidden; }
        .proj-right::before { content:''; position:absolute; inset:0; background:repeating-linear-gradient(-45deg,rgba(255,255,255,0.06) 0px,rgba(255,255,255,0.06) 1px,transparent 1px,transparent 18px); pointer-events:none; }
        .proj-right::after { content:'✦'; position:absolute; top:16px; right:18px; font-size:18px; color:rgba(255,255,255,0.35); pointer-events:none; }
        .proj-icon { font-size:68px; line-height:1; filter:drop-shadow(0 6px 16px rgba(0,0,0,0.2)); animation:iconFloat 3s ease-in-out infinite; }
        @keyframes iconFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        .proj-stat-num { font-family:'Crimson Pro',serif; font-size:40px; font-weight:800; color:#fff; text-align:center; line-height:1; text-shadow:0 2px 12px rgba(0,0,0,0.2); }
        .proj-stat-lbl { font-size:11px; color:rgba(255,255,255,0.88); font-weight:700; text-transform:uppercase; letter-spacing:0.5px; text-align:center; line-height:1.5; }

        .proj-nav { display:flex; align-items:center; justify-content:center; gap:14px; margin-top:32px; }
        .proj-btn { width:44px; height:44px; border-radius:50%; border:1.5px solid rgba(76,171,193,0.35); background:rgba(255,255,255,0.9); color:#187480; font-size:20px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .2s; box-shadow:0 2px 12px rgba(76,171,193,0.15); backdrop-filter:blur(4px); }
        .proj-btn:hover { background:linear-gradient(135deg,#4CABC1,#187480); color:#fff; border-color:transparent; transform:scale(1.1); box-shadow:0 6px 20px rgba(76,171,193,0.35); }
        .proj-dots { display:flex; gap:7px; align-items:center; }
        .proj-dot { width:9px; height:9px; border-radius:50%; background:rgba(76,171,193,0.25); border:none; cursor:pointer; padding:0; transition:all .3s; }
        .proj-dot.active { background:linear-gradient(135deg,#4CABC1,#CA9D28); width:28px; border-radius:5px; box-shadow:0 2px 8px rgba(76,171,193,0.4); }
        .proj-counter { font-size:12px; font-weight:700; color:#187480; font-family:'DM Sans',sans-serif; background:rgba(76,171,193,0.1); padding:3px 10px; border-radius:20px; border:1px solid rgba(76,171,193,0.2); }

        /* ══ NOTICE ══ */
        .notice{background:linear-gradient(135deg,#fef9c3,#fef3c7);border:1px solid #fde68a;border-radius:16px;padding:24px 28px;margin:40px auto;display:flex;gap:16px;align-items:flex-start;max-width:1036px}
        .notice-icon{font-size:28px;flex-shrink:0}
        .notice-title{font-weight:700;color:#92400e;font-size:15px;margin-bottom:6px}
        .notice-text{font-size:13px;color:#a16207;line-height:1.6}

        /* ══ RESPONSIVE ══ */
        @media(max-width:1100px){
          .mayor-data-col{width:100px}
          .mayor-data-text{font-size:9.5px}
          .mayor-brand-text{font-size:13px}
          .mayor-phone{width:175px}
          .mayor-phone-img{height:210px}
        }
        @media(max-width:1024px){
          .hiw-grid{grid-template-columns:repeat(2,1fr);gap:20px}
          .hiw-connector{display:none}
          .mayor-left{padding:48px 36px 48px 40px}
        }
        @media(max-width:767px){
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

        /* ══ NEWS SLIDER ══ */
        @keyframes cardSlideIn {
          0%   { opacity:0; transform:translateX(40px); }
          100% { opacity:1; transform:translateX(0); }
        }
        .news-card { animation:cardSlideIn 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .news-card:nth-child(1) { animation-delay:0s; }
        .news-card:nth-child(2) { animation-delay:1s; }
        .news-card:nth-child(3) { animation-delay:2s; }
        .news-card:nth-child(4) { animation-delay:3s; }

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

        @media(max-width:900px) {
          .news-section { padding:56px 24px 64px; }
          .news-card { flex:0 0 calc(50% - 10px); }
        }
        @media(max-width:600px) {
          .news-section { padding:48px 16px 56px; }
          .news-title { font-size:22px; }
          .news-sub { font-size:13px; }
          .news-header { margin-bottom:32px; }
          .news-card { flex:0 0 calc(100% - 0px); min-height:260px; }
          .nc-widget { margin:16px 16px 0; padding:12px 14px 14px; }
          .nc-widget-day { font-size:26px; margin-bottom:10px; }
          .nc-widget-row { font-size:11px; }
          .nc-caption { padding:14px 16px 16px; }
          .nc-title { font-size:13.5px; }
          .nc-date { font-size:10.5px; }
          .nc-arrow { width:26px; height:26px; font-size:12px; }
          .news-nav { gap:10px; margin-top:24px; }
          .news-btn { width:38px; height:38px; font-size:18px; }
          .news-counter { font-size:11px; }
        }
        @media(max-width:400px) {
          .news-section { padding:40px 12px 48px; }
          .news-title { font-size:20px; }
          .news-card { border-radius:18px; }
          .nc-widget { border-radius:12px; }
        }


        /* ══════════════════════════════════════════════════════════════
           RESPONSIVE — whole Home page after the hero (layout only)
           Mobile ≤480 · Large mobile 481–767 · Tablet portrait 768–899
           Tablet landscape 900–1024 · Laptop/Desktop ≥1025 = unchanged
        ══════════════════════════════════════════════════════════════ */
        .home-root { overflow-x:hidden; }

        /* Tablet landscape + portrait (≤1024) */
        @media(max-width:1024px){
          .hiw-section{padding:60px 24px 68px}
          .hiw-header{margin-bottom:40px}
          /* Mayor — side by side still fits at 900–1024 */
          .mayor-left{flex:0 0 40%;padding:48px 32px 48px 36px}
          .mayor-right{padding:28px 16px}
          .mayor-bottom-row{gap:14px}
          .mayor-data-col,.mayor-data-col:last-child{display:flex;width:110px}
          .mayor-data-text{font-size:10px}
          .mayor-phone{width:165px}
          .mayor-phone-img{height:200px}
          .mayor-bubble-item{width:50px;height:50px}
          .mayor-phone-center{gap:12px}
          /* Projects */
          .projects-section{padding:64px 24px}
          .section-header{margin-bottom:36px}
          .proj-left{padding:36px 32px}
          .proj-right{width:200px}
          .proj-icon{font-size:58px}
          /* Notice — keep side space */
          .notice{margin:32px 24px;max-width:none}
          /* News */
          .news-section{padding:60px 24px 68px}
          .news-header{margin-bottom:36px}
        }

        /* Tablet portrait (768–899): mayor intro on top, infographic below — no squeezing */
        @media(max-width:899px){
          .mayor-section{flex-direction:column}
          .mayor-left{flex:0 0 auto;width:100%;padding:48px 6vw}
          .mayor-bio{max-width:640px}
          .mayor-right{flex:0 0 auto;width:100%;min-height:440px;padding:36px 24px}
          .mayor-data-col,.mayor-data-col:last-child{width:150px}
          .mayor-data-col-head{font-size:10.5px}
          .mayor-data-text{font-size:11px}
          .mayor-phone{width:180px}
          .mayor-phone-img{height:220px}
          .mayor-brand-text{font-size:14px;max-width:340px}
        }

        /* Large mobile + mobile (≤767) */
        @media(max-width:767px){
          .hiw-header{margin-bottom:32px}
          .hiw-title{font-size:clamp(26px,6.5vw,34px)}
          .hiw-sub{font-size:14px}
          .mayor-left{padding:40px 20px}
          .mayor-heading-line1,.mayor-heading-line2{font-size:clamp(28px,7.5vw,44px)}
          .mayor-right{min-height:0;padding:32px 16px}
          /* phone on top, both info columns side by side below — nothing hidden */
          .mayor-bottom-row{flex-direction:row;flex-wrap:wrap;justify-content:center;gap:14px}
          .mayor-phone-center{order:-1;flex-basis:100%;justify-content:center}
          .mayor-data-col,.mayor-data-col:last-child{display:flex;width:calc(50% - 7px);max-width:260px}
          .mayor-data-text{font-size:11.5px}
          .projects-section{padding:48px 16px}
          .proj-left{padding:26px 20px;background:rgba(255,255,255,0.86)!important}  /* text readable over project photo */
          .proj-desc{font-size:13.5px;max-width:none}
          .proj-title{font-size:clamp(18px,5vw,22px)}
          .proj-nav{gap:10px;margin-top:24px}
          .notice{margin:24px 16px;padding:18px 16px;gap:12px}
          .notice-icon{font-size:24px}
          .notice-title{font-size:14.5px}
          .notice-text{font-size:13px}
          .news-section{padding:48px 16px 56px}
          .proj-btn,.news-btn{width:44px;height:44px}
        }

        /* Small mobile (≤480) */
        @media(max-width:480px){
          .mayor-bottom-row{flex-direction:row}
          .mayor-data-col,.mayor-data-col:last-child{display:flex;width:100%;max-width:none}
          .mayor-phone{width:160px}
          .mayor-phone-img{height:196px}
          .mayor-bubble-item{width:44px;height:44px}
          .proj-right{flex-direction:column;gap:10px;padding:18px 16px}
          .proj-meta{gap:8px}
        }

        /* Touch screens: no "lift" hover that sticks after a tap */
        @media(hover:none){
          .hiw-card:hover,.proj-card:hover,.news-card:hover{transform:none}
        }

        /* ══════════════════════════════════════════════════════════════
           COLOR HARMONY — non-hero sections use the hero palette
           (dark teal #0B3F52 · teal #14939E→#0E7383 · gold #E39A2D/#C47F22 · aqua #EAF6F8)
           जुने रंग परत हवे असतील तर फक्त हा block delete करा.
        ══════════════════════════════════════════════════════════════ */
        .hiw-title{color:#0B3F52}
        .hiw-title-bar{background:linear-gradient(90deg,#E39A2D,#F5C451)}
        .hiw-card{border-color:rgba(20,147,158,0.18)}
        .hiw-card::before{background:linear-gradient(90deg,#14939E,#0E7383)}
        .hiw-icon-wrap{background:linear-gradient(135deg,#14939E,#0E7383);box-shadow:0 6px 20px rgba(14,115,131,0.30)}
        .hiw-num{background:linear-gradient(135deg,#14939E,#0E7383)}
        .hiw-step-title{color:#0B3F52}
        .hiw-connector{background:linear-gradient(90deg,rgba(20,147,158,0.3),rgba(20,147,158,0.6),rgba(20,147,158,0.3))}

        .mayor-left{background:linear-gradient(160deg,#EAF6F8 0%,#F5FBFB 55%,#FBF6EA 100%)}
        .mayor-heading-line1{color:#0B3F52}
        .mayor-heading-line2{color:#C47F22}
        .mayor-bio{color:#2B4650}
        .mayor-btn-primary{background:linear-gradient(135deg,#1C8E9C 0%,#147886 55%,#0F6474 100%);box-shadow:0 8px 20px rgba(15,100,116,0.28)}
        .mayor-btn-primary:hover{background:linear-gradient(135deg,#1C8E9C 0%,#147886 55%,#0F6474 100%);box-shadow:0 12px 26px rgba(15,100,116,0.36)}
        .mayor-right{background:linear-gradient(145deg,#147886 0%,#0F6474 45%,#0B3F52 100%)}

        .projects-section{background:linear-gradient(160deg,#EAF6F8 0%,#F7FBFC 50%,#FFFFFF 100%)!important}
        .section-title{color:#0B3F52}
        .section-tag{color:#0E7383;border-color:rgba(20,147,158,0.3)}
        .proj-btn{color:#0E7383;border-color:rgba(20,147,158,0.35)}
        .proj-btn:hover{background:linear-gradient(135deg,#14939E,#0E7383)}
        .proj-dot.active{background:linear-gradient(135deg,#14939E,#E39A2D)}
        .proj-counter{color:#0E7383}

        .news-section{background:linear-gradient(160deg,#F2FAFB 0%,#F8F6EE 55%,#FBF3E2 100%)}
        .news-title{color:#0B3F52}
        .news-title-bar{background:linear-gradient(90deg,#E39A2D,#F5C451)}
        .news-section-tag{color:#9A6216;background:rgba(227,154,45,0.14)}
        .news-sub{color:#5C7A82}
        .news-dot.active{background:#E39A2D}
        .news-btn:hover{border-color:#E39A2D;color:#C47F22}


        /* ══════════════════════════════════════════════════════════════
           REFERENCE LAYOUT — फक्त Tablet portrait (768–899) आणि Mobile (≤767)
           Desktop / laptop / tablet landscape (≥900) ला हात लावलेला नाही.
           Content, रंग, images, data, buttons आणि clicks जसेच्या तसे.
        ══════════════════════════════════════════════════════════════ */

        /* ── HERO : tablet portrait — content डावीकडे, mayor उजवीकडे (reference प्रमाणे) ── */
        @media (min-width:768px) and (max-width:899px){
          .jsh { min-height:0; background-position:center center; }
          .jsh-inner { grid-template-columns:minmax(0,1.12fr) minmax(0,0.88fr); }
          .jsh-left { padding:40px 2vw 40px 5vw; }
          .jsh-eyebrow { font-size:14px; }
          .jsh-title { font-size:clamp(36px,5.4vw,46px); }
          .jsh-desc { font-size:16px; }
          .jsh-btns { flex-direction:column; align-items:stretch; max-width:340px; }
          .jsh-btn { width:100%; font-size:15px; padding:13px 18px; }
          .jsh-svc { flex-direction:column; justify-content:center; text-align:center; gap:6px; padding:12px 6px; font-size:13px; }
          .jsh-right { height:auto; min-height:100%; }
          .jsh-mayor { position:absolute; right:-3vw; bottom:0; height:84%; max-height:none; }
          .jsh-badge { right:14px; bottom:22px; }
          .jsh-badge-name { font-size:16px; }
        }
        /* ── HERO : mobile — mayor खाली लहान, badge त्यावर ── */
        @media (max-width:767px){
          .jsh-right { height:clamp(250px,70vw,330px); }
          .jsh-badge { right:auto; left:50%; transform:translateX(-4%); bottom:14px; }
        }

        /* ── HOW IT WORKS : mobile — reference सारख्या compact rows (icon · title/desc · step no.) ── */
        @media (max-width:767px){
          .hiw-grid { grid-template-columns:1fr; gap:12px; }
          .hiw-card { display:grid; grid-template-columns:52px minmax(0,1fr); column-gap:14px; row-gap:2px; align-items:center;
                      text-align:left; padding:14px 52px 14px 16px; border-radius:16px; }
          .hiw-card::before { top:0; bottom:0; left:0; right:auto; width:4px; height:auto; border-radius:16px 0 0 16px; }
          .hiw-icon-wrap { grid-row:1 / span 2; width:52px; height:52px; margin:0; }
          .hiw-icon-wrap > svg { width:26px; height:26px; }
          .hiw-icon-wrap > div { width:32px !important; height:32px !important; }
          .hiw-step-title { grid-column:2; align-self:end; margin:0; font-size:14.5px; }
          .hiw-step-desc { grid-column:2; align-self:start; font-size:12.5px; line-height:1.5; }
          .hiw-num { top:50%; right:14px; transform:translateY(-50%); }
        }

        /* ── MAYOR SECTION : tablet portrait — एकच rounded card, intro डावीकडे · infographic उजवीकडे ── */
        @media (min-width:768px) and (max-width:899px){
          .mayor-section { flex-direction:row; width:auto; margin:28px 24px; border-radius:24px; min-height:0; box-shadow:0 14px 36px rgba(11,63,82,0.14); }
          .mayor-left { flex:0 0 40%; width:auto; padding:34px 24px 34px 28px; }
          .mayor-heading-line1,.mayor-heading-line2 { font-size:clamp(26px,4vw,34px); }
          .mayor-heading-line2 { margin-bottom:16px; }
          .mayor-bio { font-size:12.5px; line-height:1.8; margin-bottom:22px; max-width:none; }
          .mayor-btn-primary { padding:11px 20px; font-size:13px; }
          .mayor-right { flex:1; width:auto; min-height:0; padding:22px 12px; }
          .mayor-brand-row { margin-bottom:14px; padding-bottom:12px; gap:10px; }
          .mayor-brand-logo-wrap { width:44px; height:44px; }
          .mayor-brand-text { font-size:12.5px; }
          .mayor-bottom-row { gap:10px; flex-wrap:nowrap; }
          .mayor-bubbles-col { display:none; }   /* फक्त सजावटीचे icons — जागा कमी असल्याने लपवले */
          .mayor-phone { width:148px; transform:none; }
          .mayor-phone-img { height:178px; }
          .mayor-data-col,.mayor-data-col:last-child { display:flex; width:104px; }
          .mayor-data-col-head { font-size:9.5px; }
          .mayor-data-text { font-size:10px; line-height:1.6; padding:6px 8px; }
        }
        /* ── MAYOR SECTION : mobile — rounded card, सगळी माहिती दिसते ── */
        @media (max-width:767px){
          .mayor-section { width:auto; margin:24px 16px; border-radius:20px; box-shadow:0 12px 30px rgba(11,63,82,0.14); }
          .mayor-left { padding:28px 20px; }
          .mayor-heading-line1,.mayor-heading-line2 { font-size:clamp(26px,7vw,34px); }
          .mayor-heading-line2 { margin-bottom:14px; }
          .mayor-bio { margin-bottom:20px; }
          .mayor-right { padding:22px 14px; }
          .mayor-brand-row { margin-bottom:14px; }
          .mayor-phone { width:140px; transform:none; }
          .mayor-phone-img { height:170px; }
          .mayor-bubble-item { width:42px; height:42px; }
          .mayor-bubbles-col { gap:12px; }
        }

        /* ── PROJECTS : mobile — reference सारखा compact row card (text · icon panel) ── */
        @media (max-width:767px){
          .proj-card { flex-direction:row; min-height:0; border-radius:20px; }
          .proj-left { border-radius:0; padding:18px 14px 18px 16px; }
          .proj-title { font-size:17px; margin-bottom:8px; }
          .proj-desc { font-size:12.5px; line-height:1.7; margin-bottom:12px; }
          .proj-bar { height:9px; margin-bottom:14px; }
          .proj-meta-item { font-size:11px; padding:3px 8px; }
          .proj-chip { font-size:10px; padding:4px 10px; }
          .proj-right { width:88px; flex-direction:column; justify-content:center; gap:6px; padding:14px 6px; border-radius:0; }
          .proj-right::after { display:none; }
          .proj-icon { font-size:34px; }
          .proj-stat-num { font-size:17px; }
          .proj-stat-lbl { font-size:9px; letter-spacing:.2px; }
        }

        /* ── NEWS : tablet portrait + mobile — reference प्रमाणे list (सगळ्या बातम्या एकाखाली एक) ── */
        @media (max-width:899px){
          .news-viewport { overflow:visible; }
          .news-track { flex-direction:column; gap:14px; }
          .news-card { flex:0 0 auto; width:100%; min-height:0; flex-direction:row; align-items:stretch; border-radius:18px; animation:none; }
          .nc-caption { order:1; flex:1; margin-top:0; padding:16px 18px; display:flex; flex-direction:column; justify-content:center; }
          .nc-widget { order:2; flex:0 0 42%; margin:14px 14px 14px 0; align-self:center; }
          .nc-widget-day:empty { display:none; }
          .nc-widget-row { font-size:13px; }
          .news-nav { display:none; }   /* list मध्ये सगळ्या बातम्या आधीच दिसतात */
        }
        @media (max-width:600px){
          .news-card { flex-direction:column; }
          .nc-caption { padding:14px 16px 8px; }
          .nc-widget { flex:0 0 auto; margin:0 14px 14px; align-self:stretch; }
          .nc-widget-row { font-size:12px; }
        }
      `}),e.jsxs("div",{className:"home-root",children:[e.jsx("section",{className:"jsh",children:e.jsxs("div",{className:"jsh-inner",children:[e.jsxs("div",{className:"jsh-left",children:[e.jsxs("div",{className:"jsh-eyebrow",children:[e.jsx("span",{className:"jsh-eyebrow-line","aria-hidden":"true"}),"Vasai-Virar City Municipal Corporation"]}),e.jsxs("h1",{className:"jsh-title",children:[e.jsx("span",{className:"jsh-t1",children:"Jan"}),e.jsx("span",{className:"jsh-t2",children:"Samwad"}),e.jsxs("svg",{className:"jsh-chat",viewBox:"0 0 64 64",fill:"none","aria-hidden":"true",children:[e.jsx("path",{d:"M12 6h40a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H30l-12 11v-11h-6a8 8 0 0 1-8-8V14a8 8 0 0 1 8-8z",stroke:"#E39A2D",strokeWidth:"3.4",strokeLinejoin:"round",fill:"rgba(255,255,255,0.55)"}),e.jsx("circle",{cx:"24.5",cy:"20.5",r:"5",fill:"#0E6F80"}),e.jsx("path",{d:"M14.5 36c0-5.6 4.5-9 10-9s10 3.4 10 9z",fill:"#0E6F80"}),e.jsx("circle",{cx:"40",cy:"20.5",r:"5",fill:"#0E6F80"}),e.jsx("path",{d:"M33 36c.4-5.3 3.6-9 8.5-9 5.5 0 9 3.4 9 9z",fill:"#0E6F80"})]})]}),e.jsx("p",{className:"jsh-desc",children:"A platform created to take citizens' problems and suggestions directly to Hon. Mayor Shri. Ajiv Patil."}),e.jsx("div",{className:"jsh-gold","aria-hidden":"true"}),e.jsxs("div",{className:"jsh-btns",children:[e.jsxs("button",{className:"jsh-btn jsh-btn-primary",onClick:()=>l("/book-appointment"),children:[e.jsx(N,{size:24})," Book Appointment"]}),e.jsxs("button",{className:"jsh-btn jsh-btn-outline",onClick:F,children:[e.jsx(D,{size:26})," How It Works"]}),g&&e.jsxs("button",{className:"jsh-btn jsh-btn-outline",onClick:()=>l("/my-appointments"),children:[e.jsx(S,{size:22})," My Appointments"]})]}),e.jsxs("div",{className:"jsh-services-head",children:["Citizen Services",e.jsx("span",{className:"jsh-services-line","aria-hidden":"true"})]}),e.jsxs("div",{className:"jsh-services",children:[e.jsxs("div",{className:"jsh-svc",children:[e.jsx(B,{color:"#3F7FE0"}),e.jsx("span",{children:"Applications"})]}),e.jsxs("div",{className:"jsh-svc",children:[e.jsx(N,{color:"#E08A2C"}),e.jsx("span",{children:"Meetings"})]}),e.jsxs("div",{className:"jsh-svc",children:[e.jsx(L,{color:"#4FA53B"}),e.jsx("span",{children:"Updates"})]})]})]}),e.jsxs("div",{className:"jsh-right",children:[e.jsx("img",{src:R,alt:"Hon. Mayor Shri. Ajiv Patil",className:"jsh-mayor"}),e.jsxs("div",{className:"jsh-badge",children:[e.jsx("span",{className:"jsh-badge-role",children:"Hon. Mayor"}),e.jsx("span",{className:"jsh-badge-name",children:"Shri. Ajiv Patil"})]})]})]})}),e.jsx("div",{className:"hiw-section",children:e.jsxs("div",{className:"hiw-inner",children:[e.jsxs("div",{className:"hiw-header",children:[e.jsx("h2",{className:"hiw-title",children:"कसे काम करते?"}),e.jsx("div",{className:"hiw-title-bar"}),e.jsx("p",{className:"hiw-sub",children:"४ टप्प्यांमध्ये महापौरांची भेट बुक करा."})]}),e.jsxs("div",{className:"hiw-grid-wrap",children:[e.jsx("div",{className:"hiw-connector","aria-hidden":"true"}),e.jsx("div",{className:"hiw-grid",children:E.map((t,a)=>e.jsxs("div",{className:"hiw-card",children:[e.jsx("div",{className:"hiw-num",children:a+1}),e.jsx("div",{className:"hiw-icon-wrap",children:a===0?e.jsx(C,{size:32,color:"#fff"}):a===3?e.jsx(T,{size:34,color:"#fff"}):e.jsx(_,{src:t.lottie,style:{width:44,height:44}})}),e.jsx("div",{className:"hiw-step-title",children:t.title}),e.jsx("div",{className:"hiw-step-desc",children:t.desc})]},a))})]})]})}),e.jsxs("div",{className:"mayor-section",children:[e.jsxs("div",{className:"mayor-left",children:[e.jsx("p",{className:"mayor-heading-line1",children:"मा. महापौर"}),e.jsx("p",{className:"mayor-heading-line2",children:"श्री. अजीव पाटील"}),e.jsx("p",{className:"mayor-bio",children:"३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे."}),e.jsx("button",{className:"mayor-btn-primary",onClick:()=>l(g?"/book-appointment":"/register"),children:"📅 Appointment बुक करा"})]}),e.jsxs("div",{className:"mayor-right",children:[e.jsx("div",{className:"mayor-chevrons","aria-hidden":"true",children:e.jsxs("svg",{width:"200",height:"200",viewBox:"0 0 200 200",fill:"none",children:[e.jsxs("g",{opacity:"0.2",stroke:"#7edede",strokeWidth:"1.4",fill:"none",children:[e.jsx("polyline",{points:"160,8 178,26 160,44"}),e.jsx("polyline",{points:"142,8 160,26 142,44"}),e.jsx("polyline",{points:"124,8 142,26 124,44"}),e.jsx("polyline",{points:"160,44 178,62 160,80"}),e.jsx("polyline",{points:"142,44 160,62 142,80"}),e.jsx("polyline",{points:"124,44 142,62 124,80"}),e.jsx("polyline",{points:"168,80 186,98 168,116"}),e.jsx("polyline",{points:"150,80 168,98 150,116"}),e.jsx("polyline",{points:"168,116 186,134 168,152"}),e.jsx("polyline",{points:"150,116 168,134 150,152"})]}),e.jsx("circle",{cx:"182",cy:"18",r:"16",fill:"rgba(81,200,200,0.3)",stroke:"rgba(81,200,200,0.4)",strokeWidth:"1"}),e.jsx("rect",{x:"108",y:"4",width:"10",height:"10",rx:"1",transform:"rotate(45 113 9)",fill:"#7edede",opacity:"0.3"})]})}),e.jsx("div",{className:"mayor-diamond-tl","aria-hidden":"true",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:e.jsx("rect",{x:"2",y:"2",width:"12",height:"12",rx:"1",transform:"rotate(45 8 8)",fill:"#7edede",opacity:"0.45"})})}),e.jsx("div",{className:"mayor-diamond-mid","aria-hidden":"true",children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",children:e.jsx("rect",{x:"1.5",y:"1.5",width:"9",height:"9",rx:"1",transform:"rotate(45 6 6)",fill:"#c9a040",opacity:"0.4"})})}),e.jsx("div",{className:"mayor-gold-tri","aria-hidden":"true",children:e.jsxs("svg",{width:"160",height:"110",viewBox:"0 0 160 110",fill:"none",children:[e.jsx("polygon",{points:"160,110 160,0 50,110",fill:"#C9963A",opacity:"0.25"}),e.jsx("polygon",{points:"160,110 160,40 95,110",fill:"#e8b84b",opacity:"0.18"})]})}),e.jsx("div",{className:"mayor-sparkle","aria-hidden":"true",children:e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:e.jsx("path",{d:"M14 2 L15.5 12.5 L26 14 L15.5 15.5 L14 26 L12.5 15.5 L2 14 L12.5 12.5 Z",fill:"white",opacity:"0.7"})})}),e.jsx("div",{className:"mayor-phone-glow","aria-hidden":"true"}),e.jsxs("div",{className:"mayor-content-wrap",children:[e.jsxs("div",{className:"mayor-brand-row",children:[e.jsx("div",{className:"mayor-brand-logo-wrap",children:e.jsx("img",{src:W,alt:"VVCMC Logo"})}),e.jsx("div",{className:"mayor-brand-text",children:"वसई-विरार शहर महानगरपालिका, जन संवाद"})]}),e.jsxs("div",{className:"mayor-bottom-row",children:[e.jsxs("div",{className:"mayor-data-col",children:[e.jsx("div",{className:"mayor-data-col-head",children:"नागरिक सहभाग"}),e.jsx("div",{className:"mayor-data-text",children:"नागरिकांचा सक्रिय सहभाग वाढवून शहर विकासात त्यांचे मत आणि सूचना महत्वाच्या ठरत आहेत."}),e.jsx("div",{className:"mayor-data-col-head",style:{marginTop:"6px"},children:"वसई स्मार्ट सिटी प्रकल्प"}),e.jsx("div",{className:"mayor-data-text",children:"वसई स्मार्ट सिटी प्रकल्पांतर्गत शहराचा डिजिटल, सुरक्षित आणि सुसज्ज विकास करण्यावर भर देण्यात आला आहे."})]}),e.jsxs("div",{className:"mayor-phone-center",children:[e.jsxs("div",{className:"mayor-bubbles-col",children:[e.jsx("div",{className:"mayor-bubble-item",children:e.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[e.jsx("rect",{x:"4",y:"4",width:"18",height:"13",rx:"3",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",fill:"none"}),e.jsx("path",{d:"M8 20 L8 17",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7 7h12M7 10h8M7 13h10",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",strokeLinecap:"round"}),e.jsx("circle",{cx:"19",cy:"6",r:"4",fill:"#028945",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1"}),e.jsx("path",{d:"M17 6h4M19 4v4",stroke:"white",strokeWidth:"1",strokeLinecap:"round"})]})}),e.jsx("div",{className:"mayor-bubble-item",children:e.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[e.jsx("polyline",{points:"5,19 10,12 15,15 21,7",stroke:"rgba(255,255,255,0.88)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),e.jsx("polyline",{points:"17,7 21,7 21,11",stroke:"rgba(255,255,255,0.88)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),e.jsx("line",{x1:"5",y1:"21",x2:"21",y2:"21",stroke:"rgba(255,255,255,0.45)",strokeWidth:"1.2",strokeLinecap:"round"})]})}),e.jsx("div",{className:"mayor-bubble-item",children:e.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[e.jsx("circle",{cx:"13",cy:"8",r:"3.2",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",fill:"none"}),e.jsx("path",{d:"M7 21 C7 16.5 19 16.5 19 21",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"}),e.jsx("circle",{cx:"6.5",cy:"10",r:"2.2",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",fill:"none"}),e.jsx("path",{d:"M3 20 C3 16.8 10 16.8 10 20",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1.2",strokeLinecap:"round",fill:"none"}),e.jsx("circle",{cx:"19.5",cy:"10",r:"2.2",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",fill:"none"}),e.jsx("path",{d:"M16 20 C16 16.8 23 16.8 23 20",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1.2",strokeLinecap:"round",fill:"none"}),e.jsx("path",{d:"M10 22.5 Q13 25 16 22.5",stroke:"rgba(255,255,255,0.35)",strokeWidth:"1",strokeLinecap:"round",fill:"none"})]})})]}),e.jsx("div",{className:"mayor-phone-wrap",children:e.jsx("div",{className:"mayor-phone",children:e.jsxs("div",{className:"mayor-phone-inner",children:[e.jsx("img",{src:I,alt:"मा. महापौर श्री. अजीव पाटील",className:"mayor-phone-img"}),e.jsxs("div",{className:"mayor-phone-badge",children:[e.jsx("div",{className:"mayor-phone-badge-name",children:"मा. महापौर श्री. अजीव पाटील"}),e.jsx("div",{className:"mayor-phone-badge-title",children:"वसई-विरार शहर महानगरपालिका"})]})]})})})]}),e.jsxs("div",{className:"mayor-data-col",children:[e.jsx("div",{className:"mayor-data-col-head",children:"पायाभूत सुविधा"}),e.jsx("div",{className:"mayor-data-text",children:"वसई-विरार शहर महानगरपालिका महापौर, आरोग्य, विरार शहर, सुधार बैठक, कार्यालय उपाध्यक्ष"}),e.jsx("div",{className:"mayor-data-col-head",style:{marginTop:"6px"},children:"सुरक्षित व स्वच्छ शहर"}),e.jsx("div",{className:"mayor-data-text",children:"सुरक्षितता, स्वच्छता आणि पर्यावरणपूरक उपक्रमांद्वारे शहर अधिक राहण्यायोग्य बनवले जात आहे."})]})]})]})]})]}),e.jsx("div",{className:"projects-section",style:{backgroundColor:"#F9FCFB"},children:e.jsxs("div",{className:"projects-inner",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("div",{className:"section-tag",children:"✦ सध्या सुरू"}),e.jsx("h2",{className:"section-title",children:"चालू प्रकल्प"}),e.jsx("p",{className:"section-sub",children:"वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प"})]}),e.jsxs("div",{className:"proj-card",onMouseEnter:()=>r(!1),onMouseLeave:()=>r(!0),style:i.bgimg?{backgroundImage:`linear-gradient(to right, rgba(255,255,255,0.92) 55%, ${i.accent}99 100%), url(${i.bgimg})`,backgroundSize:"cover",backgroundPosition:"center"}:{},children:[e.jsxs("div",{className:"proj-left",style:{background:"transparent",border:i.bgimg?"none":"1px solid rgba(81,171,172,0.12)",borderRight:"none"},children:[e.jsxs("div",{className:"proj-tag",style:{background:`${i.accent}18`,color:i.accent},children:[i.icon," ",i.tag]}),e.jsx("div",{className:"proj-title",children:i.title}),e.jsx("p",{className:"proj-desc",children:i.desc}),e.jsxs("div",{className:"proj-progress-row",children:[e.jsx("span",{className:"proj-progress-lbl",children:"प्रगती"}),e.jsx("span",{className:"proj-progress-pct",style:{color:i.accent},children:i.progress})]}),e.jsx("div",{className:"proj-bar",children:e.jsx("div",{className:"proj-bar-fill",style:{width:`${i.progress}%`,background:`linear-gradient(90deg,${i.accent}88,${i.accent})`}})}),e.jsxs("div",{className:"proj-meta",children:[e.jsxs("div",{className:"proj-meta-item",children:["💰 ",e.jsx("strong",{children:i.budget})]}),e.jsxs("div",{className:"proj-meta-item",children:["📅 ",e.jsx("strong",{children:i.deadline})]}),e.jsx("span",{className:`proj-chip ${i.status==="ongoing"?"chip-ongoing":"chip-planning"}`,children:i.statusLabel})]})]}),e.jsxs("div",{className:"proj-right",style:{background:`linear-gradient(160deg,${i.accent},${i.accent}bb)`},children:[e.jsx("div",{className:"proj-icon",children:i.icon}),e.jsxs("div",{children:[e.jsx("div",{className:"proj-stat-num",children:i.stat}),e.jsx("div",{className:"proj-stat-lbl",children:i.statLbl})]})]})]}),e.jsxs("div",{className:"proj-nav",children:[e.jsx("button",{className:"proj-btn",onClick:()=>{r(!1),s(t=>(t-1+p.length)%p.length)},children:"‹"}),e.jsx("div",{className:"proj-dots",children:p.map((t,a)=>e.jsx("button",{className:`proj-dot${n===a?" active":""}`,onClick:()=>{r(!1),s(a)}},a))}),e.jsxs("span",{className:"proj-counter",children:[n+1," / ",p.length]}),e.jsx("button",{className:"proj-btn",onClick:()=>{r(!1),s(t=>(t+1)%p.length)},children:"›"})]})]})}),e.jsxs("div",{className:"notice",children:[e.jsx("span",{className:"notice-icon",children:"⚠️"}),e.jsxs("div",{children:[e.jsx("div",{className:"notice-title",children:"महत्त्वाची सूचना"}),e.jsx("div",{className:"notice-text",children:"भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही. Appointment confirm होण्यासाठी admin approval आवश्यक आहे. कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा."})]})]}),e.jsx("div",{className:"cta"}),e.jsx("div",{className:"news-section",children:e.jsxs("div",{className:"news-inner",children:[e.jsxs("div",{className:"news-header",children:[e.jsx("div",{className:"news-section-tag",children:"✦ ताज्या बातम्या"}),e.jsx("h2",{className:"news-title",children:"महापौर कार्यालयाच्या ताज्या बातम्या"}),e.jsx("div",{className:"news-title-bar"}),e.jsx("p",{className:"news-sub",children:"Mayor's Office Latest Updates & Activities"})]}),e.jsx("div",{className:"news-viewport",ref:x,onMouseEnter:()=>h(!1),onMouseLeave:()=>h(!0),children:e.jsx("div",{className:"news-track",children:v.map((t,a)=>e.jsxs("div",{className:"news-card",style:{background:t.bg,"--nc-accent":t.accent},children:[e.jsxs("div",{className:"nc-widget",children:[e.jsx("div",{className:"nc-widget-day",children:t.day}),e.jsx("div",{className:"nc-widget-rows",children:t.rows.map((f,z)=>e.jsxs("div",{className:"nc-widget-row",children:[e.jsx("span",{className:"nc-dot",style:{background:t.dotColors[z]}}),f]},z))})]}),e.jsxs("div",{className:"nc-caption",children:[e.jsx("div",{className:"nc-tag",children:t.tag}),e.jsx("div",{className:"nc-title",children:t.title}),e.jsxs("div",{className:"nc-date-row",children:[e.jsxs("div",{className:"nc-date",children:["📅 ",t.date]}),e.jsx("div",{className:"nc-arrow",children:"→"})]})]})]},a))},m)}),e.jsxs("div",{className:"news-nav",children:[e.jsx("button",{className:"news-btn",onClick:()=>{h(!1),b(t=>Math.max(0,t-1))},children:"‹"}),e.jsx("div",{className:"news-dots",children:Array.from({length:d+1}).map((t,a)=>e.jsx("button",{className:`news-dot${k===a?" active":""}`,onClick:()=>{h(!1),b(a)}},a))}),e.jsxs("span",{className:"news-counter",children:[k+1," / ",d+1]}),e.jsx("button",{className:"news-btn",onClick:()=>{h(!1),b(t=>Math.min(d,t+1))},children:"›"})]})]})})]})]})}export{G as default};
