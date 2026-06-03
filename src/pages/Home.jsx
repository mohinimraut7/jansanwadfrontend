


// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import heroBg from "../assets/vvcmcbuildingbanner.png";
// import mayorPhoto from "../assets/ajivsir1.jpeg";
// // import meeting from "../assets/meeting.jpeg";
// import meeting from "../assets/meeting2.jpeg";
// import narangibridgepahani from "../assets/narangibridgeahani.jpeg";
// // conditional import — file नसेल तर null
// // let narangibridgepahani = null;
// // try { narangibridgepahani = require("../assets/narangibridgeahani.jpeg"); } catch {}


// /* ── Lottie loader ─────────────────────────────────────── */
// function LottiePlayer({ src, style, loop = true }) {
//   const ref = useRef(null);
//   useEffect(() => {
//     let anim;
//     const init = () => {
//       if (window.lottie && ref.current) {
//         ref.current.innerHTML = "";
//         anim = window.lottie.loadAnimation({
//           container: ref.current,
//           renderer: "svg",
//           loop,
//           autoplay: true,
//           path: src,
//         });
//       }
//     };
//     if (!window.lottie) {
//       const s = document.createElement("script");
//       s.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js";
//       s.onload = init;
//       document.head.appendChild(s);
//     } else {
//       init();
//     }
//     return () => anim && anim.destroy();
//   }, [src]);
//   return <div ref={ref} style={style} />;
// }

// export default function Home() {
//   const navigate = useNavigate();
//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();
//   const [faqOpen, setFaqOpen] = useState(null);
  
//   const [projIdx, setProjIdx]   = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);

//   const projects = [
//     {
//       icon: ":🌉", tag: "पायाभूत सुविधा",
//       title: "नारंगी उड्डाणपूल प्रकल्प पाहणी",
//       desc: "नारंगी येथील उड्डाणपुलाच्या कामाची मा. महापौर श्री. अजीव पाटील यांनी प्रत्यक्ष पाहणी केली. या पाहणीदरम्यान संबंधित अधिकारी, रेल्वे अधिकारी, कंत्राटदार व उपकंत्राटदार यांच्याशी चर्चा करून कामाची प्रगती व अडचणी जाणून घेतल्या. तसेच कामाला अधिक गती देण्याच्या सूचना दिल्या. हा उड्डाणपूल चालू महिन्याच्या अखेरीपर्यंत वाहतुकीसाठी खुला करण्याचा प्रयत्न सुरू आहे.",
//       progress: 68, status: "ongoing", statusLabel: "सुरू आहे",
//       budget: "₹ 42 कोटी", deadline: "डिसेंबर 2025",
//       stat: "", statLbl: "मार्च २०२६ अखेर वाहतुकीसाठी खुले",
//       accent: "#51ABAC", bg: "#e8f7f7",
//       bgimg:narangibridgepahani
//     },
//     {
//       icon: "🏛️",
//       title: "समिती गठनाबाबत चर्चा",
//       desc: "स्थायी समितीच्या महत्त्वाच्या विषयांवर तसेच प्रभाग समित्यांच्या गठनाबाबत  चर्चा सुरू आहे.",
//       progress: 45, status: "ongoing", statusLabel: "सुरू आहे",
//       budget: "₹ 85 कोटी", deadline: "मार्च 2026",
//       stat: "", statLbl: "",
//       accent: "#028945", bg: "#e8f5ef",
//       bgimg:meeting
//     },

//     {
//       icon: "💧", tag: "पाणीपुरवठा",
//       title: "24×7 पाणीपुरवठा योजना — वसई विभाग",
//       desc: "वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे.",
//       progress: 45, status: "ongoing", statusLabel: "सुरू आहे",
//       budget: "₹ 85 कोटी", deadline: "मार्च 2026",
//       stat: "1.2 लाख", statLbl: "लाभार्थी कुटुंबे",
//       accent: "#028945", bg: "#e8f5ef",
//     },
//     {
//       icon: "🏫", tag: "शिक्षण",
//       title: "VVCMC शाळा डिजिटलायझेशन उपक्रम",
//       desc: "महानगरपालिकेच्या सर्व शाळांमध्ये स्मार्ट बोर्ड, संगणक लॅब आणि इंटरनेट सुविधा उपलब्ध करणे. विद्यार्थ्यांना डिजिटल शिक्षण देण्यासाठी हा उपक्रम राबवला जात आहे.",
//       progress: 30, status: "planning", statusLabel: "नियोजन",
//       budget: "₹ 18 कोटी", deadline: "जून 2026",
//       stat: "94", statLbl: "शाळा डिजिटल",
//       accent: "#D09A50", bg: "#fdf3e0",
//     },
//     {
//       icon: "🌳", tag: "पर्यावरण",
//       title: "हरित वसई-विरार — वृक्षारोपण मोहीम",
//       desc: "महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट.",
//       progress: 55, status: "ongoing", statusLabel: "सुरू आहे",
//       budget: "₹ 8 कोटी", deadline: "ऑगस्ट 2025",
//       stat: "5 लाख", statLbl: "झाडे लावणार",
//       accent: "#028945", bg: "#e8f5ef",
//     },
//   ];

//   /* Auto-advance carousel */
//   useEffect(() => {
//     if (!autoPlay) return;
//     const t = setInterval(() => {
//       setProjIdx(i => (i + 1) % projects.length);
//     }, 4000);
//     return () => clearInterval(t);
//   }, [autoPlay, projects.length]);


//   const faqs = [
//     {q:"शहराचा विचार केला तर फेरीवाला धोरण अजूनही राबवण्यात आलेले नाही. त्यामुळे वाहतूक कोंडीचा मोठा सामना करावा लागत आहे आणि लोकांना त्रास होत आहे. यामधून आपण कसा मार्ग काढणार आहोत?",a:"वाहतूक कोंडी कमी करण्यासाठी आणि स्टेशन परिसरातील समस्या सोडवण्यासाठी न्यायालयाच्या मार्गदर्शक तत्त्वांनुसार लवकरात लवकर कारवाई करण्यात येईल. संपूर्ण स्टेशन परिसर टप्प्याटप्प्याने मोकळा करून नागरिकांना होणारा त्रास कमी करण्यावर भर दिला जाईल."},
//     { q: "Appointment बुक करण्यासाठी काय करावे लागेल?", a: "प्रथम Register करा, त्यानंतर उपलब्ध date आणि time slot निवडा, आवश्यक माहिती भरा आणि Submit करा. Admin approval नंतर तुम्हाला Confirmation Token मिळेल." },
//     { q: "Appointment confirm होण्यासाठी किती वेळ लागतो?", a: "Appointment submit केल्यानंतर Admin द्वारे review केले जाते. साधारणतः 1-2 कार्यालयीन दिवसांत confirmation दिली जाते. SMS आणि Portal वर status दिसेल." },
//     { q: "भेटीच्या दिवशी काय घेऊन यावे?", a: "भेटीच्या दिवशी तुमचा Confirmation Token आणि एक valid ओळखपत्र (Aadhar Card, Voter ID इ.) सोबत आणावे. Token शिवाय भेट होणार नाही." },
//     { q: "Appointment Cancel किंवा Reschedule करता येते का?", a: "होय, तुम्ही 'My Appointments' section मध्ये जाऊन Appointment cancel किंवा reschedule करू शकता. भेटीच्या 24 तास आधी बदल करणे आवश्यक आहे." },
//     { q: "एका दिवशी किती नागरिक भेट घेऊ शकतात?", a: "Mayor साहेबांच्या schedule नुसार प्रत्येक दिवशी मर्यादित slots उपलब्ध असतात. Slots संपल्यावर त्या दिवसाचे booking बंद होते, त्यामुळे लवकर बुक करा." },
//   ];

//   const steps = [
//     { lottie: "https://assets3.lottiefiles.com/packages/lf20_jbb3xnwi.json", title: "Register करा",  desc: "Mobile number वापरून account तयार करा — फक्त 1 मिनिट" },
//     { lottie: "https://assets4.lottiefiles.com/packages/lf20_tljjahng.json", title: "Date निवडा",    desc: "Mayor च्या available dates आणि time slots मधून निवडा" },
//     { lottie: "https://assets9.lottiefiles.com/packages/lf20_xyadoh9h.json", title: "Details भरा",   desc: "भेटीचे कारण, visitors संख्या आणि photo द्या" },
//     { lottie: "https://assets10.lottiefiles.com/packages/lf20_attdh2fv.json",title: "Token मिळवा",   desc: "Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा" },
//   ];

//     const p = projects[projIdx];

//   return (
//     <>
//       <style>{`
        

//           @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');

//         .hero {
//           position: relative;
//           min-height: calc(100vh - 64px);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           text-align: center;
//           padding: 80px 32px 72px;
//           overflow: hidden;
//         }

//         /* Building background image */
//         .hero::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image: url(${heroBg});
//           background-size: cover;
//           background-position: center top;
//           background-repeat: no-repeat;
//           z-index: 0;
//         }

//         /* #51ABAC teal overlay with opacity */
//         .hero::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: rgba(81, 171, 172, 0.5);
//           z-index: 1;
//         }

//         /* All direct children above overlay */
//         .hero > * {
//           position: relative;
//           z-index: 2;
//         }

//         .hero-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           background: rgba(255,255,255,0.15);
//           backdrop-filter: blur(8px);
//           border: 1px solid rgba(255,255,255,0.3);
//           border-radius: 999px;
//           padding: 6px 16px;
//           font-size: 13px;
//           font-weight: 600;
//           color: #fff;
//           margin-bottom: 28px;
//           letter-spacing: 0.3px;
//         }

//         .hero-dot {
//           width: 7px;
//           height: 7px;
//           border-radius: 50%;
//           background: #fff;
//           box-shadow: 0 0 8px #fff;
//           animation: pulse 2s infinite;
//           flex-shrink: 0;
//         }

//         @keyframes pulse {
//           0%   { opacity:1; transform:scale(1); }
//           50%  { opacity:.5; transform:scale(1.5); }
//           100% { opacity:1; transform:scale(1); }
//         }

//         /* जन संवाद — big white bold */
//         .hero-jansanwad {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(48px, 9vw, 88px);
//           font-weight: 800;
//           color: #ffffff;
//           line-height: 1.1;
//           margin-bottom: 20px;
//           text-shadow: 0 4px 24px rgba(0,0,0,0.25);
//           letter-spacing: -1px;
//         }

//         /* Description — white bold */
//         .hero-desc {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(16px, 2.4vw, 22px);
//           font-weight: 700;
//           color: #ffffff;
//           max-width: 680px;
//           margin: 0 auto 36px;
//           line-height: 1.65;
//           text-shadow: 0 2px 12px rgba(0,0,0,0.2);
//         }

//         .hero-btns {
//           display: flex;
//           gap: 14px;
//           justify-content: center;
//           flex-wrap: wrap;
//         }

//         .hero-btn-primary {
//           padding: 14px 36px;
//           border-radius: 10px;
//           border: none;
//           background: #ffffff;
//           color: #028945;
//           font-weight: 700;
//           font-size: 15px;
//           cursor: pointer;
//           transition: all .2s;
//           box-shadow: 0 4px 20px rgba(0,0,0,0.18);
//         }
//         .hero-btn-primary:hover { background: #f0fdf4; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.22); }

//         .hero-btn-outline {
//           padding: 14px 36px;
//           border-radius: 10px;
//           border: 2px solid rgba(255,255,255,0.8);
//           background: transparent;
//           color: #ffffff;
//           font-weight: 700;
//           font-size: 15px;
//           cursor: pointer;
//           transition: all .2s;
//         }
//         .hero-btn-outline:hover { background: rgba(255,255,255,0.15); transform: translateY(-2px); }

//         @media(max-width:600px) {
//           .hero { padding: 60px 20px 60px; }
//           .hero-btns { flex-direction: column; align-items: center; }
//           .hero-btn-primary, .hero-btn-outline { width: 100%; max-width: 280px; }
//         }

//         /* ══ MAYOR SECTION ═════════════════════════════════════ */
//         .mayor-section {
//           width: 100%; display: flex; align-items: stretch; min-height: 540px;
//         }
//         .mayor-left {
//           flex: 1; background: var(--gold);
//           padding: 72px 56px;
//           display: flex; flex-direction: column; justify-content: center;
//           position: relative; overflow: hidden;
//         }
//         .mayor-left::before {
//           content: ''; position: absolute; top: -60px; left: -60px;
//           width: 220px; height: 220px; border-radius: 50%;
//           border: 2px solid rgba(208,154,80,0.3);
//         }
//         .mayor-left::after {
//           content: ''; position: absolute; bottom: -40px; right: 40px;
//           width: 130px; height: 130px; border-radius: 50%;
//           border: 2px solid rgba(208,154,80,0.22);
//         }
//         /* Lottie decoration in mayor left */
//         .mayor-lottie-deco {
//           position: absolute; bottom: 24px; right: 60px;
//           width: 90px; height: 90px; opacity: 0.35; pointer-events: none;
//         }

//         .mayor-tag {
//           display: inline-flex; align-items: center; gap: 6px;
//           background: rgba(208,154,80,0.2); color: #b8860b;
//           font-size: 12px; font-weight: 700; padding: 5px 14px;
//           border-radius: 999px; margin-bottom: 14px; letter-spacing: 0.5px;
//           text-transform: uppercase; width: fit-content;
//         }
//         .mayor-date { font-size: 13px; color: #a16207; font-weight: 600; margin-bottom: 10px; }
//         .mayor-heading {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(28px, 3.8vw, 48px); font-weight: 800;
//           color: #1a1a1a; line-height: 1.2; margin-bottom: 6px;
//         }
//         .mayor-heading span { color: var(--green); position: relative; }
//         .mayor-heading span::after {
//           content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
//           height: 3px; background: linear-gradient(90deg,#D09A50,var(--green)); border-radius: 2px;
//         }
//         .mayor-org {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 15px; color: var(--teal); font-weight: 600; margin-bottom: 20px;
//         }
//         .mayor-divider {
//           width: 56px; height: 4px;
//           background: linear-gradient(90deg,#D09A50,var(--green));
//           border-radius: 2px; margin-bottom: 22px;
//         }
//         .mayor-bio {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 15px; color: #4b5563; line-height: 1.9;
//           margin-bottom: 36px; max-width: 520px;
//         }
//         .mayor-btns { display: flex; gap: 14px; flex-wrap: wrap; }
//         .mayor-btn-primary {
//           padding: 14px 32px; border-radius: 12px; border: none;
//           background: var(--green); color: #fff; font-weight: 700; font-size: 14px;
//           cursor: pointer; transition: all .2s; box-shadow: 0 4px 16px rgba(2,137,69,0.3);
//         }
//         .mayor-btn-primary:hover { background: #016d38; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(2,137,69,0.4); }

//         .mayor-right {
//           width: 42%; flex-shrink: 0; background: var(--teal);
//           position: relative; overflow: hidden;
//           display: flex; align-items: flex-end; justify-content: center;
//         }
//         .mayor-right-decor1 { position: absolute; top: 20px; right: 20px; width: 90px; height: 90px; border-radius: 50%; background: rgba(255,255,255,0.08); }
//         .mayor-right-decor2 { position: absolute; bottom: 30px; right: 30px; width: 60px; height: 60px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.15); }
//         .mayor-right-decor3 { position: absolute; top: 40px; left: 30px; width: 40px; height: 40px; border-radius: 50%; background: rgba(245,230,191,0.15); }
//         .mayor-right-stripe {
//           position: absolute; top: 0; bottom: 0; right: 0; width: 55%;
//           background: repeating-linear-gradient(-45deg,rgba(255,255,255,0.04) 0px,rgba(255,255,255,0.04) 2px,transparent 2px,transparent 12px);
//         }
//         .mayor-card { position: relative; z-index: 2; width: 85%; max-width: 300px; margin-bottom: 0; }
//         .mayor-card img {
//           width: 100%; display: block; object-fit: cover; object-position: top;
//           height: 460px; border-radius: 20px 20px 0 0;
//           box-shadow: 0 -8px 40px rgba(0,0,0,0.2);
//         }
//         .mayor-card-badge { padding: 16px 20px; background: #fff; border-radius: 0 0 16px 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
//         .mayor-card-name { font-family: 'Tiro Devanagari Marathi', serif; font-size: 15px; font-weight: 800; color: #1a1a1a; }
//         .mayor-card-title { font-size: 11px; color: var(--teal); font-weight: 600; margin-top: 3px; text-transform: uppercase; letter-spacing: 0.4px; }

//         /* ══ HOW IT WORKS ══════════════════════════════════════ */
//         .section {
//           padding: 80px 32px; max-width: 1100px; margin: 0 auto;
//         }
//         .section-header { text-align: center; margin-bottom: 56px; }
//         .section-tag {
//           display: inline-block; background: rgba(76,171,191,0.12);
//           color: var(--blue); font-size: 12px; font-weight: 700;
//           padding: 5px 16px; border-radius: 999px; margin-bottom: 14px;
//           letter-spacing: 0.6px; text-transform: uppercase;
//         }
//         .section-title { font-family: 'Crimson Pro', serif; font-size: clamp(28px,4vw,40px); font-weight: 800; color: #1a4a2e; margin-bottom: 8px; }
//         .section-sub { color: #6b7280; font-size: 15px; }
//         .steps-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap: 28px; }
//         .step-card {
//           background: #fff; border-radius: 20px; padding: 32px 24px;
//           text-align: center;
//           border: 1px solid rgba(76,171,191,0.15);
//           box-shadow: 0 4px 20px rgba(0,0,0,0.05);
//           transition: transform .25s, box-shadow .25s;
//           position: relative; overflow: hidden;
//         }
//         .step-card::before {
//           content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
//           background: linear-gradient(90deg, var(--teal), var(--green));
//         }
//         .step-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(76,171,191,0.2); }
//         .step-num {
//           position: absolute; top: 16px; right: 16px;
//           width: 26px; height: 26px; border-radius: 50%;
//           background: linear-gradient(135deg, var(--teal), var(--green));
//           color: #fff; font-size: 12px; font-weight: 800;
//           display: flex; align-items: center; justify-content: center;
//         }
//         .step-lottie { width: 88px; height: 88px; margin: 0 auto 16px; }
//         .step-title { font-weight: 700; color: #1a4a2e; font-size: 15px; margin-bottom: 8px; }
//         .step-desc { font-size: 13px; color: #6b7280; line-height: 1.6; }

//         /* ══ FAQ ═══════════════════════════════════════════════ */
//         .faq-section {
//           width: 100%; background: var(--teal);
//           padding: 80px 24px; position: relative; overflow: hidden;
//         }
//         .faq-section::before {
//           content: ''; position: absolute; top: -80px; left: 50%;
//           transform: translateX(-50%); width: 700px; height: 500px;
//           background: radial-gradient(ellipse,rgba(255,255,255,0.12) 0%,transparent 70%);
//           pointer-events: none;
//         }
//         /* Lottie side decorations */
//         .faq-lottie-l {
//           position: absolute; left: 30px; top: 50%;
//           transform: translateY(-50%);
//           width: 120px; height: 120px; opacity: 0.2; pointer-events: none;
//         }
//         .faq-lottie-r {
//           position: absolute; right: 30px; top: 50%;
//           transform: translateY(-50%);
//           width: 120px; height: 120px; opacity: 0.2; pointer-events: none;
//         }
//         .faq-inner { max-width: 720px; margin: 0 auto; position: relative; z-index: 1; }
//         .faq-label { text-align: center; font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.75); letter-spacing: 1.2px; text-transform: uppercase; margin-bottom: 14px; }
//         .faq-title { font-family: 'Crimson Pro', serif; font-size: clamp(26px,4vw,42px); font-weight: 800; color: #fff; text-align: center; line-height: 1.25; margin-bottom: 48px; }
//         .faq-list { display: flex; flex-direction: column; gap: 12px; }
//         .faq-item {
//           background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.22);
//           border-radius: 16px; overflow: hidden; transition: all 0.25s;
//         }
//         .faq-item.faq-active { background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.5); }
//         .faq-q { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; background: none; border: none; cursor: pointer; text-align: left; gap: 16px; }
//         .faq-q-text { font-family: 'Tiro Devanagari Marathi', serif; font-size: 16px; font-weight: 600; color: #fff; line-height: 1.5; flex: 1; }
//         .faq-icon { flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%; border: 1.5px solid rgba(255,255,255,0.55); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: 300; transition: transform 0.3s, background 0.3s; }
//         .faq-item.faq-active .faq-icon { background: #fff; color: var(--teal); transform: rotate(45deg); }
//         .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.3s; padding: 0 24px; }
//         .faq-item.faq-active .faq-answer { max-height: 300px; padding: 0 24px 20px; }
//         .faq-a-text { font-family: 'Tiro Devanagari Marathi', serif; font-size: 14px; color: rgba(255,255,255,0.88); line-height: 1.85; border-top: 1px solid rgba(255,255,255,0.18); padding-top: 16px; }

       
//         /* ══ PROJECTS CAROUSEL ══ */
//         .projects-section {
//           padding: 72px 32px;
//           background: #fff;
//           border-top: 1px solid rgba(81,171,172,0.1);
//           border-bottom: 1px solid rgba(81,171,172,0.1);
//         }
//         .projects-inner { max-width: 1060px; margin: 0 auto; }

//         /* big card — left text + right colored panel */
//         .proj-card {
//           display: flex;
//           border-radius: 24px;
//           overflow: hidden;
//           box-shadow: 0 12px 48px rgba(0,0,0,0.1);
//           min-height: 300px;
//           transition: box-shadow .3s;
//           background:#fff;
//         }
//         .proj-left {
//           flex: 1;
//           padding: 44px 48px;
//            background: transparent;  /* semicolon add केला */
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           border: 1px solid rgba(81,171,172,0.12);
//           border-right: none;
//           border-radius: 24px 0 0 24px;
//           background-size: cover;          /* 👈 ADD */
//          background-position: top;        /* 👈 ADD (MOST IMPORTANT) */
//          background-repeat: no-repeat;    /* 👈 ADD */

//         }
//         .proj-tag {
//           display: inline-flex; align-items: center; gap: 6px;
//           font-size: 11px; font-weight: 700;
//           padding: 4px 14px; border-radius: 999px;
//           text-transform: uppercase; letter-spacing: 0.6px;
//           margin-bottom: 16px; width: fit-content;
//         }
//         .proj-title {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(17px,2.4vw,24px);
//           font-weight: 800; color: #1a1a1a;
//           margin-bottom: 14px; line-height: 1.35;
//         }
//         .proj-desc {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 13.5px; color: #6b7280;
//           line-height: 1.8; margin-bottom: 22px;
//           max-width: 480px;
//         }
//         .proj-progress-row { display:flex; justify-content:space-between; margin-bottom:6px; }
//         .proj-progress-lbl { font-size:12px; font-weight:600; color:#4b5563; }
//         .proj-progress-pct { font-size:13px; font-weight:800; }
//         .proj-bar { height:10px; background:#f1f5f9; border-radius:999px; overflow:hidden; margin-bottom:20px; }
//         .proj-bar-fill { height:100%; border-radius:999px; transition: width 0.6s ease; }
//         .proj-meta { display:flex; align-items:center; gap:16px; flex-wrap:wrap; }
//         .proj-meta-item { font-size:12.5px; color:#6b7280; display:flex; align-items:center; gap:5px; }
//         .proj-meta-item strong { color:#1a1a1a; }
//         .proj-chip { font-size:11px; font-weight:700; padding:4px 12px; border-radius:999px; text-transform:uppercase; }
//         .chip-ongoing  { background:rgba(2,137,69,0.1);   color:#028945; }
//         .chip-planning { background:rgba(208,154,80,0.15); color:#b8860b; }

//         .proj-right {
//           width: 220px;
//           flex-shrink: 0;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 18px;
//           padding: 32px 20px;
//           border-radius: 0 24px 24px 0;
//           transition: background 0.5s;
//            background-size: cover;          /* 👈 ADD */
//          background-position: top;        /* 👈 ADD (MOST IMPORTANT) */
//          background-repeat: no-repeat;    /* 👈 ADD */
//         }
//         .proj-icon { font-size: 64px; line-height: 1; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15)); }
//         .proj-stat-num { font-family:'Crimson Pro',serif; font-size:38px; font-weight:800; color:#fff; text-align:center; line-height:1; }
//         .proj-stat-lbl { font-size:11px; color:rgba(255,255,255,0.82); font-weight:700; text-transform:uppercase; letter-spacing:0.5px; text-align:center; }

//         /* nav */
//         .proj-nav { display:flex; align-items:center; justify-content:center; gap:14px; margin-top:28px; }
//         .proj-btn {
//           width:42px; height:42px; border-radius:50%;
//           border:1.5px solid rgba(81,171,172,0.4);
//           background:#fff; color:#51ABAC;
//           font-size:20px; cursor:pointer;
//           display:flex; align-items:center; justify-content:center;
//           transition:all .2s; box-shadow:0 2px 8px rgba(0,0,0,0.06);
//         }
//         .proj-btn:hover { background:#51ABAC; color:#fff; border-color:#51ABAC; transform:scale(1.08); }
//         .proj-dots { display:flex; gap:7px; align-items:center; }
//         .proj-dot { width:9px; height:9px; border-radius:50%; background:rgba(81,171,172,0.3); border:none; cursor:pointer; padding:0; transition:all .25s; }
//         .proj-dot.active { background:#51ABAC; width:26px; border-radius:5px; }
//         .proj-counter { font-size:12px; font-weight:600; color:#9ca3af; }

//         /* ══ FAQ ══ */
//         .faq-section { width:100%; background:var(--teal); padding:80px 24px; position:relative; overflow:hidden; }
//         .faq-section::before { content:''; position:absolute; top:-80px; left:50%; transform:translateX(-50%); width:700px; height:500px; background:radial-gradient(ellipse,rgba(255,255,255,0.12) 0%,transparent 70%); pointer-events:none; }
//         .faq-inner { max-width:720px; margin:0 auto; position:relative; z-index:1; }
//         .faq-label { text-align:center; font-size:13px; font-weight:700; color:rgba(255,255,255,0.75); letter-spacing:1.2px; text-transform:uppercase; margin-bottom:14px; }
//         .faq-title { font-family:'Crimson Pro',serif; font-size:clamp(26px,4vw,42px); font-weight:800; color:#fff; text-align:center; line-height:1.25; margin-bottom:48px; }
//         .faq-list { display:flex; flex-direction:column; gap:12px; }
//         .faq-item { background:rgba(255,255,255,0.1); border:1.5px solid rgba(255,255,255,0.22); border-radius:16px; overflow:hidden; transition:all 0.25s; }
//         .faq-item.faq-active { background:rgba(255,255,255,0.18); border-color:rgba(255,255,255,0.5); }
//         .faq-q { width:100%; display:flex; align-items:center; justify-content:space-between; padding:20px 24px; background:none; border:none; cursor:pointer; text-align:left; gap:16px; }
//         .faq-q-text { font-family:'Tiro Devanagari Marathi',serif; font-size:16px; font-weight:600; color:#fff; line-height:1.5; flex:1; }
//         .faq-icon { flex-shrink:0; width:32px; height:32px; border-radius:50%; border:1.5px solid rgba(255,255,255,0.55); display:flex; align-items:center; justify-content:center; color:#fff; font-size:20px; font-weight:300; transition:transform 0.3s,background 0.3s; }
//         .faq-item.faq-active .faq-icon { background:#fff; color:var(--teal); transform:rotate(45deg); }
//         .faq-answer { max-height:0; overflow:hidden; transition:max-height 0.4s ease,padding 0.3s; padding:0 24px; }
//         .faq-item.faq-active .faq-answer { max-height:300px; padding:0 24px 20px; }
//         .faq-a-text { font-family:'Tiro Devanagari Marathi',serif; font-size:14px; color:rgba(255,255,255,0.88); line-height:1.85; border-top:1px solid rgba(255,255,255,0.18); padding-top:16px; }

       
       
//         /* ══ NOTICE ════════════════════════════════════════════ */
//         .notice {
//           background: linear-gradient(135deg,#fef9c3,#fef3c7);
//           border: 1px solid #fde68a; border-radius: 16px;
//           padding: 24px 28px; margin: 40px auto;
//           display: flex; gap: 16px; align-items: flex-start; max-width: 1036px;
//         }
//         .notice-icon { font-size: 28px; flex-shrink: 0; }
//         .notice-title { font-weight: 700; color: #92400e; font-size: 15px; margin-bottom: 6px; }
//         .notice-text { font-size: 13px; color: #a16207; line-height: 1.6; }

//         /* ══ CTA ═══════════════════════════════════════════════ */
//         .cta {
//           background: linear-gradient(135deg, var(--green) 0%, #014d28 100%);
//           color: #fff; padding: 72px 32px; text-align: center;
//           position: relative; overflow: hidden;
//         }
//         .cta::before {
//           content: ''; position: absolute; inset: 0;
//           background: radial-gradient(ellipse at 50% 0%, rgba(76,171,191,0.25) 0%, transparent 65%);
//           pointer-events: none;
//         }
//         .cta-lottie-l { position: absolute; left: 60px; top: 50%; transform: translateY(-50%); width: 150px; height: 150px; opacity: 0.12; pointer-events: none; }
//         .cta-lottie-r { position: absolute; right: 60px; top: 50%; transform: translateY(-50%); width: 150px; height: 150px; opacity: 0.12; pointer-events: none; }
//         .cta-inner { position: relative; z-index: 1; }
//         .cta-title { font-family: 'Crimson Pro', serif; font-size: clamp(28px,4vw,40px); font-weight: 800; margin-bottom: 12px; }
//         .cta-sub { color: rgba(255,255,255,0.8); font-size: 16px; margin-bottom: 36px; }
//         .cta-btn {
//           padding: 15px 48px; border-radius: 14px; border: none;
//           background: #fff; color: var(--green);
//           font-weight: 800; font-size: 16px; cursor: pointer;
//           box-shadow: 0 8px 28px rgba(0,0,0,0.18); transition: all .2s;
//         }
//         .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(0,0,0,0.25); }

//         /* ══ RESPONSIVE ════════════════════════════════════════ */
//         @media(max-width:900px){
//           .mayor-section { flex-direction: column; }
//           .mayor-left { padding: 48px 24px; }
//           .mayor-right { width: 100%; min-height: 400px; padding-top: 40px; }
//           .mayor-card { width: 70%; max-width: 260px; }
//           .mayor-card img { height: 360px; }
//           .faq-lottie-l, .faq-lottie-r, .cta-lottie-l, .cta-lottie-r { display: none; }
//         }
//         @media(max-width:600px){
//           .hero { padding: 60px 20px 60px; }
//           .hero-btns { flex-direction: column; align-items: center; }
//           .hero-btn-primary, .hero-btn-outline { width: 100%; max-width: 280px; }
//           .hero-lottie-left, .hero-lottie-right { display: none; }
//           .mayor-btns { flex-direction: column; }
//           .mayor-btn-primary { width: 100%; text-align: center; }
//           .mayor-card { width: 85%; }
//           .section { padding: 56px 20px; }
//           .notice { margin: 32px 16px; }
//         }
//       `}</style>

//       <div className="home-root">

      





//             <div className="hero">
       

//         {/* जन संवाद — big white bold */}
//         <h1 className="hero-jansanwad">जन संवाद</h1>

//         {/* Description replacing old marathi sub text */}
//         <p className="hero-desc">
//           नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ
//         </p>

//         <div className="hero-btns">
//           {citizen ? (
//             <>
//               <button className="hero-btn-primary" onClick={() => navigate("/book-appointment")}>
//                 📅 Book Appointment
//               </button>
//               <button className="hero-btn-outline" onClick={() => navigate("/my-appointments")}>
//                 📋 My Appointments
//               </button>
//             </>
//           ) : (
//             <>
//               <button className="hero-btn-primary" onClick={() => navigate("/register")}>
//                 🚀 Get Started — Register
//               </button>
//               <button className="hero-btn-outline" onClick={() => navigate("/login")}>
//                 Login करा
//               </button>
//             </>
//           )}
//         </div>
//       </div>


//         {/* ── How it Works ──────────────────────────────── */}
//         <div className="section">
//           <div className="section-header">
//             <div className="section-tag">✦ Process</div>
//             <h2 className="section-title">कसे काम करते?</h2>
//             <p className="section-sub">फक्त 4 सोप्या steps मध्ये Mayor ची भेट बुक करा</p>
//           </div>
//           <div className="steps-grid">
//             {steps.map((s,i) => (
//               <div key={i} className="step-card">
//                 <div className="step-num">{i+1}</div>
//                 <LottiePlayer src={s.lottie} style={{ width:88, height:88, margin:"0 auto 16px" }} />
//                 <div className="step-title">{s.title}</div>
//                 <div className="step-desc">{s.desc}</div>
//               </div>
//             ))}
//           </div>
//         </div>


//         {/* ── Mayor Section ─────────────────────────────── */}
//         <div className="mayor-section">
//           <div className="mayor-left">
//             <LottiePlayer
//               src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
//               style={{ position:"absolute", bottom:24, right:60, width:90, height:90, opacity:0.3, pointerEvents:"none" }}
//             />
//             <div className="mayor-tag">✦ Our Leadership</div>
//             <div className="mayor-date">३ फेब्रुवारी २०२६ पासून कार्यरत</div>
//             <h2 className="mayor-heading">
//               मा. महापौर<br />
//               <span>श्री. अजीव पाटील</span>
//             </h2>
//             <div className="mayor-org">वसई-विरार शहर महानगरपालिका</div>
//             <div className="mayor-divider" />
//             <p className="mayor-bio">
//               ३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे.
//             </p>
//             <div className="mayor-btns">
//               <button className="mayor-btn-primary" onClick={() => navigate(citizen ? "/book-appointment" : "/register")}>
//                 📅 Appointment बुक करा
//               </button>
//             </div>
//           </div>
//           <div className="mayor-right">
//             <div className="mayor-right-decor1" />
//             <div className="mayor-right-decor2" />
//             <div className="mayor-right-decor3" />
//             <div className="mayor-right-stripe" />
//             <div className="mayor-card">
//               <img src={mayorPhoto} alt="मा. महापौर श्री. अजीव पाटील" />
//               <div className="mayor-card-badge">
//                 <div className="mayor-card-name">मा. महापौर श्री. अजीव पाटील</div>
//                 <div className="mayor-card-title">वसई-विरार शहर महानगरपालिका</div>
//               </div>
//             </div>
//           </div>
//         </div>

      

//  {/* ══ PROJECTS CAROUSEL ══ */}
//         <div className="projects-section">
//           <div className="projects-inner">
//             <div className="section-header">
//               <div className="section-tag">✦ सध्या सुरू</div>
//               <h2 className="section-title">चालू प्रकल्प</h2>
//               <p className="section-sub">वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प</p>
//             </div>

            
//             <div
//   className="proj-card"
//   onMouseEnter={() => setAutoPlay(false)}
//   onMouseLeave={() => setAutoPlay(true)}
//   style={p.bgimg ? {
//     backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.92) 55%, ${p.accent}99 100%), url(${p.bgimg})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   } : {}}
// > 
//               {/* Left */}
//               <div className="proj-left" 
//   style={{
//     background: 'transparent',
//     border: p.bgimg ? 'none' : '1px solid rgba(81,171,172,0.12)',  // ← bgimg असेल तर border काढा
//     borderRight: 'none'
//   }}>
//                 <div className="proj-tag" style={{ background:`${p.accent}18`, color:p.accent }}>
//                   {p.icon} {p.tag}
//                 </div>
//                 <div className="proj-title">{p.title}</div>
//                 <p className="proj-desc">{p.desc}</p>
//                 <div className="proj-progress-row">
//                   <span className="proj-progress-lbl">प्रगती</span>
//                   <span className="proj-progress-pct" style={{ color:p.accent }}>{p.progress}%</span>
//                 </div>
//                 <div className="proj-bar">
//                   <div className="proj-bar-fill" style={{ width:`${p.progress}%`, background:`linear-gradient(90deg,${p.accent}88,${p.accent})` }} />
//                 </div>
//                 <div className="proj-meta">
//                   <div className="proj-meta-item">💰 <strong>{p.budget}</strong></div>
//                   <div className="proj-meta-item">📅 <strong>{p.deadline}</strong></div>
//                   <span className={`proj-chip ${p.status==="ongoing"?"chip-ongoing":"chip-planning"}`}>{p.statusLabel}</span>
//                 </div>
//               </div>

//               {/* Right colored panel */}
//               <div className="proj-right" style={{ background:`linear-gradient(160deg,${p.accent},${p.accent}bb)` }}>
//                 <div className="proj-icon">{p.icon}</div>
//                 <div>
//                   <div className="proj-stat-num">{p.stat}</div>
//                   <div className="proj-stat-lbl">{p.statLbl}</div>
//                 </div>
//               </div>
//             </div>

//             {/* Nav */}
//             <div className="proj-nav">
//               <button className="proj-btn" onClick={() => { setAutoPlay(false); setProjIdx(i => (i-1+projects.length)%projects.length); }}>‹</button>
//               <div className="proj-dots">
//                 {projects.map((_,i) => (
//                   <button key={i} className={`proj-dot${projIdx===i?" active":""}`} onClick={() => { setAutoPlay(false); setProjIdx(i); }} />
//                 ))}
//               </div>
//               <span className="proj-counter">{projIdx+1} / {projects.length}</span>
//               <button className="proj-btn" onClick={() => { setAutoPlay(false); setProjIdx(i => (i+1)%projects.length); }}>›</button>
//             </div>
//           </div>
//         </div>
         
      
//         {/* ── FAQ ───────────────────────────────────────── */}
//         <div className="faq-section">
//           <LottiePlayer
//             src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
//             style={{ position:"absolute", left:30, top:"50%", transform:"translateY(-50%)", width:120, height:120, opacity:0.18, pointerEvents:"none" }}
//           />
//           <LottiePlayer
//             src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
//             style={{ position:"absolute", right:30, top:"50%", transform:"translateY(-50%)", width:120, height:120, opacity:0.18, pointerEvents:"none" }}
//           />
//           <div className="faq-inner">
//             <div className="faq-label">FAQ</div>
//             <h2 className="faq-title">वारंवार विचारले जाणारे प्रश्न</h2>
//             <div className="faq-list">
//               {faqs.map((f, i) => (
//                 <div key={i} className={`faq-item${faqOpen === i ? " faq-active" : ""}`}>
//                   <button className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
//                     <span className="faq-q-text">{f.q}</span>
//                     <span className="faq-icon">+</span>
//                   </button>
//                   <div className="faq-answer">
//                     <p className="faq-a-text">{f.a}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ── Notice ────────────────────────────────────── */}
//         <div className="notice">
//           <span className="notice-icon">⚠️</span>
//           <div>
//             <div className="notice-title">महत्त्वाची सूचना</div>
//             <div className="notice-text">
//               भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही.
//               Appointment confirm होण्यासाठी admin approval आवश्यक आहे.
//               कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा.
//             </div>
//           </div>
//         </div>

//         {/* ── CTA ───────────────────────────────────────── */}
//         <div className="cta">
//           <LottiePlayer
//             src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
//             style={{ position:"absolute", left:60, top:"50%", transform:"translateY(-50%)", width:150, height:150, opacity:0.1, pointerEvents:"none" }}
//           />
//           <LottiePlayer
//             src="https://assets9.lottiefiles.com/packages/lf20_touohxv0.json"
//             style={{ position:"absolute", right:60, top:"50%", transform:"translateY(-50%)", width:150, height:150, opacity:0.1, pointerEvents:"none" }}
//           />
        
//         </div>

//       </div>
//     </>
//   );
// }






// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import heroBg from "../assets/vvcmcbuildingbanner.png";
// import mayorPhoto from "../assets/ajivsir1.jpeg";
// // import meeting from "../assets/meeting.jpeg";
// import meeting from "../assets/meeting2.jpeg";
// import narangibridgepahani from "../assets/narangibridgeahani.jpeg";

// /* ── Lottie loader ─────────────────────────────────────── */
// function LottiePlayer({ src, style, loop = true }) {
//   const ref = useRef(null);
//   useEffect(() => {
//     let anim;
//     const init = () => {
//       if (window.lottie && ref.current) {
//         ref.current.innerHTML = "";
//         anim = window.lottie.loadAnimation({
//           container: ref.current,
//           renderer: "svg",
//           loop,
//           autoplay: true,
//           path: src,
//         });
//       }
//     };
//     if (!window.lottie) {
//       const s = document.createElement("script");
//       s.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js";
//       s.onload = init;
//       document.head.appendChild(s);
//     } else {
//       init();
//     }
//     return () => anim && anim.destroy();
//   }, [src]);
//   return <div ref={ref} style={style} />;
// }

// export default function Home() {
//   const navigate = useNavigate();
//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();
//   const [faqOpen, setFaqOpen] = useState(null);
  
//   const [projIdx, setProjIdx]   = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);

//   const projects = [
//     {
//       icon: ":🌉", tag: "पायाभूत सुविधा",
//       title: "नारंगी उड्डाणपूल प्रकल्प पाहणी",
//       desc: "नारंगी येथील उड्डाणपुलाच्या कामाची मा. महापौर श्री. अजीव पाटील यांनी प्रत्यक्ष पाहणी केली. या पाहणीदरम्यान संबंधित अधिकारी, रेल्वे अधिकारी, कंत्राटदार व उपकंत्राटदार यांच्याशी चर्चा करून कामाची प्रगती व अडचणी जाणून घेतल्या. तसेच कामाला अधिक गती देण्याच्या सूचना दिल्या. हा उड्डाणपूल चालू महिन्याच्या अखेरीपर्यंत वाहतुकीसाठी खुला करण्याचा प्रयत्न सुरू आहे.",
//       progress: 68, status: "ongoing", statusLabel: "सुरू आहे",
//       budget: "₹ 42 कोटी", deadline: "डिसेंबर 2025",
//       stat: "", statLbl: "मार्च २०२६ अखेर वाहतुकीसाठी खुले",
//       accent: "#51ABAC", bg: "#e8f7f7",
//       bgimg:narangibridgepahani
//     },
//     {
//       icon: "🏛️",
//       title: "समिती गठनाबाबत चर्चा",
//       desc: "स्थायी समितीच्या महत्त्वाच्या विषयांवर तसेच प्रभाग समित्यांच्या गठनाबाबत  चर्चा सुरू आहे.",
//       progress: 45, status: "ongoing", statusLabel: "सुरू आहे",
//       budget: "₹ 85 कोटी", deadline: "मार्च 2026",
//       stat: "", statLbl: "",
//       accent: "#028945", bg: "#e8f5ef",
//       bgimg:meeting
//     },
//     {
//       icon: "💧", tag: "पाणीपुरवठा",
//       title: "24×7 पाणीपुरवठा योजना — वसई विभाग",
//       desc: "वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे.",
//       progress: 45, status: "ongoing", statusLabel: "सुरू आहे",
//       budget: "₹ 85 कोटी", deadline: "मार्च 2026",
//       stat: "1.2 लाख", statLbl: "लाभार्थी कुटुंबे",
//       accent: "#028945", bg: "#e8f5ef",
//     },
//     {
//       icon: "🏫", tag: "शिक्षण",
//       title: "VVCMC शाळा डिजिटलायझेशन उपक्रम",
//       desc: "महानगरपालिकेच्या सर्व शाळांमध्ये स्मार्ट बोर्ड, संगणक लॅब आणि इंटरनेट सुविधा उपलब्ध करणे. विद्यार्थ्यांना डिजिटल शिक्षण देण्यासाठी हा उपक्रम राबवला जात आहे.",
//       progress: 30, status: "planning", statusLabel: "नियोजन",
//       budget: "₹ 18 कोटी", deadline: "जून 2026",
//       stat: "94", statLbl: "शाळा डिजिटल",
//       accent: "#D09A50", bg: "#fdf3e0",
//     },
//     {
//       icon: "🌳", tag: "पर्यावरण",
//       title: "हरित वसई-विरार — वृक्षारोपण मोहीम",
//       desc: "महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट.",
//       progress: 55, status: "ongoing", statusLabel: "सुरू आहे",
//       budget: "₹ 8 कोटी", deadline: "ऑगस्ट 2025",
//       stat: "5 लाख", statLbl: "झाडे लावणार",
//       accent: "#028945", bg: "#e8f5ef",
//     },
//   ];

//   /* Auto-advance carousel */
//   useEffect(() => {
//     if (!autoPlay) return;
//     const t = setInterval(() => {
//       setProjIdx(i => (i + 1) % projects.length);
//     }, 4000);
//     return () => clearInterval(t);
//   }, [autoPlay, projects.length]);


//   const faqs = [
//     {q:"शहराचा विचार केला तर फेरीवाला धोरण अजूनही राबवण्यात आलेले नाही. त्यामुळे वाहतूक कोंडीचा मोठा सामना करावा लागत आहे आणि लोकांना त्रास होत आहे. यामधून आपण कसा मार्ग काढणार आहोत?",a:"वाहतूक कोंडी कमी करण्यासाठी आणि स्टेशन परिसरातील समस्या सोडवण्यासाठी न्यायालयाच्या मार्गदर्शक तत्त्वांनुसार लवकरात लवकर कारवाई करण्यात येईल. संपूर्ण स्टेशन परिसर टप्प्याटप्प्याने मोकळा करून नागरिकांना होणारा त्रास कमी करण्यावर भर दिला जाईल."},
//     { q: "Appointment बुक करण्यासाठी काय करावे लागेल?", a: "प्रथम Register करा, त्यानंतर उपलब्ध date आणि time slot निवडा, आवश्यक माहिती भरा आणि Submit करा. Admin approval नंतर तुम्हाला Confirmation Token मिळेल." },
//     { q: "Appointment confirm होण्यासाठी किती वेळ लागतो?", a: "Appointment submit केल्यानंतर Admin द्वारे review केले जाते. साधारणतः 1-2 कार्यालयीन दिवसांत confirmation दिली जाते. SMS आणि Portal वर status दिसेल." },
//     { q: "भेटीच्या दिवशी काय घेऊन यावे?", a: "भेटीच्या दिवशी तुमचा Confirmation Token आणि एक valid ओळखपत्र (Aadhar Card, Voter ID इ.) सोबत आणावे. Token शिवाय भेट होणार नाही." },
//     { q: "Appointment Cancel किंवा Reschedule करता येते का?", a: "होय, तुम्ही 'My Appointments' section मध्ये जाऊन Appointment cancel किंवा reschedule करू शकता. भेटीच्या 24 तास आधी बदल करणे आवश्यक आहे." },
//     { q: "एका दिवशी किती नागरिक भेट घेऊ शकतात?", a: "Mayor साहेबांच्या schedule नुसार प्रत्येक दिवशी मर्यादित slots उपलब्ध असतात. Slots संपल्यावर त्या दिवसाचे booking बंद होते, त्यामुळे लवकर बुक करा." },
//   ];

//   const steps = [
//     { lottie: "https://assets3.lottiefiles.com/packages/lf20_jbb3xnwi.json", title: "Register करा",  desc: "Mobile number वापरून account तयार करा — फक्त 1 मिनिट" },
//     { lottie: "https://assets4.lottiefiles.com/packages/lf20_tljjahng.json", title: "Date निवडा",    desc: "Mayor च्या available dates आणि time slots मधून निवडा" },
//     { lottie: "https://assets9.lottiefiles.com/packages/lf20_xyadoh9h.json", title: "Details भरा",   desc: "भेटीचे कारण, visitors संख्या आणि photo द्या" },
//     { lottie: "https://assets10.lottiefiles.com/packages/lf20_attdh2fv.json",title: "Token मिळवा",   desc: "Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा" },
//   ];

//   const p = projects[projIdx];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         :root {
//           --teal:  #51ABAC;
//           --green: #028945;
//           --gold:  #F5E6BF;
//           --blue:  #4CABBF;
//         }

//         /* ══════════════════════════════════════════════════════
//            HERO SECTION — matches screenshot exactly
//         ══════════════════════════════════════════════════════ */
//         .hero {
//           position: relative;
//           min-height: calc(100vh - 64px);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           text-align: center;
//           padding: 80px 24px 72px;
//           overflow: hidden;
//         }

//         /* Building background */
//         .hero::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image: url(${heroBg});
//           background-size: cover;
//           background-position: center top;
//           background-repeat: no-repeat;
//           z-index: 0;
//         }

//         /* Teal overlay — matches screenshot tone */
//         .hero::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: rgba(40, 120, 120, 0.72);
//           z-index: 1;
//         }

//         .hero > * { position: relative; z-index: 2; }

//         /* Floating orbit dots — matches screenshot floating icons */
//         .hero-orbit {
//           position: absolute;
//           inset: 0;
//           z-index: 2;
//           pointer-events: none;
//         }
//         .hero-float {
//           position: absolute;
//           background: rgba(208, 154, 80, 0.92);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 18px;
//           box-shadow: 0 4px 20px rgba(0,0,0,0.25);
//           animation: floatBob 3s ease-in-out infinite;
//         }
//         .hero-float.f1 { width:52px; height:52px; top:28%; left:8%;  animation-delay:0s;   }
//         .hero-float.f2 { width:44px; height:44px; top:60%; left:16%; animation-delay:0.7s; }
//         .hero-float.f3 { width:52px; height:52px; top:22%; right:8%; animation-delay:1.1s; }
//         .hero-float.f4 { width:44px; height:44px; top:58%; right:14%;animation-delay:0.4s; }

//         @keyframes floatBob {
//           0%,100% { transform: translateY(0px);   }
//           50%      { transform: translateY(-10px); }
//         }

//         /* Live dot badge */
//         .hero-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           background: rgba(255,255,255,0.12);
//           backdrop-filter: blur(8px);
//           border: 1px solid rgba(255,255,255,0.28);
//           border-radius: 999px;
//           padding: 6px 18px;
//           font-size: 13px;
//           font-weight: 600;
//           color: #fff;
//           margin-bottom: 24px;
//           letter-spacing: 0.3px;
//         }
//         .hero-dot {
//           width: 8px; height: 8px; border-radius: 50%;
//           background: #fff;
//           box-shadow: 0 0 8px #fff;
//           animation: pulse 2s infinite;
//           flex-shrink: 0;
//         }
//         @keyframes pulse {
//           0%,100% { opacity:1; transform:scale(1);   }
//           50%      { opacity:.5; transform:scale(1.5); }
//         }

//         /* जन संवाद — big golden bold (matches screenshot golden text) */
//         .hero-jansanwad {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(52px, 10vw, 96px);
//           font-weight: 800;
//           color: #F5D87A;
//           line-height: 1.05;
//           margin-bottom: 18px;
//           text-shadow: 0 4px 32px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2);
//           letter-spacing: -1px;
//         }

//         /* Underline accent below जन संवाद */
//         .hero-title-underline {
//           width: 80px;
//           height: 4px;
//           background: linear-gradient(90deg, #D09A50, #F5D87A, #D09A50);
//           border-radius: 2px;
//           margin: 0 auto 22px;
//           animation: shimmer 2.5s ease-in-out infinite;
//         }
//         @keyframes shimmer {
//           0%,100% { opacity:1; }
//           50%      { opacity:0.6; }
//         }

//         /* Description */
//         .hero-desc {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(14px, 2.2vw, 19px);
//           font-weight: 600;
//           color: rgba(255,255,255,0.93);
//           max-width: 620px;
//           margin: 0 auto 40px;
//           line-height: 1.7;
//           text-shadow: 0 2px 12px rgba(0,0,0,0.25);
//         }

//         /* Buttons — matches screenshot green filled + outlined gold */
//         .hero-btns {
//           display: flex;
//           gap: 14px;
//           justify-content: center;
//           flex-wrap: wrap;
//         }
//         .hero-btn-primary {
//           padding: 14px 36px;
//           border-radius: 12px;
//           border: none;
//           background: #028945;
//           color: #fff;
//           font-weight: 700;
//           font-size: 15px;
//           font-family: 'DM Sans', sans-serif;
//           cursor: pointer;
//           transition: all .2s;
//           box-shadow: 0 4px 20px rgba(2,137,69,0.45);
//           letter-spacing: 0.2px;
//         }
//         .hero-btn-primary:hover {
//           background: #016d38;
//           transform: translateY(-2px);
//           box-shadow: 0 8px 28px rgba(2,137,69,0.55);
//         }
//         .hero-btn-outline {
//           padding: 14px 36px;
//           border-radius: 12px;
//           border: 2px solid rgba(245,216,122,0.85);
//           background: transparent;
//           color: #F5D87A;
//           font-weight: 700;
//           font-size: 15px;
//           font-family: 'DM Sans', sans-serif;
//           cursor: pointer;
//           transition: all .2s;
//         }
//         .hero-btn-outline:hover {
//           background: rgba(245,216,122,0.15);
//           transform: translateY(-2px);
//           border-color: #F5D87A;
//         }

//         /* ══════════════════════════════════════════════════════
//            HOW IT WORKS SECTION — matches screenshot white bg,
//            teal icon circles, clean cards
//         ══════════════════════════════════════════════════════ */
//         .hiw-section {
//           padding: 72px 24px 80px;
//           background: #ffffff;
//           position: relative;
//         }

//         /* subtle background pattern */
//         .hiw-section::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image:
//             radial-gradient(circle at 15% 50%, rgba(81,171,172,0.06) 0%, transparent 55%),
//             radial-gradient(circle at 85% 20%, rgba(2,137,69,0.05) 0%, transparent 50%);
//           pointer-events: none;
//         }

//         .hiw-inner {
//           max-width: 1080px;
//           margin: 0 auto;
//           position: relative;
//           z-index: 1;
//         }

//         .hiw-header {
//           text-align: center;
//           margin-bottom: 52px;
//         }

//         /* "How it Works" heading — matches screenshot large bold black */
//         .hiw-title {
//           font-family: 'Crimson Pro', serif;
//           font-size: clamp(28px, 4.5vw, 44px);
//           font-weight: 800;
//           color: #1a1a1a;
//           margin-bottom: 12px;
//           line-height: 1.2;
//         }

//         /* Gold underline bar below heading — matches screenshot */
//         .hiw-title-bar {
//           width: 64px;
//           height: 4px;
//           background: linear-gradient(90deg, #D09A50, #F5D87A);
//           border-radius: 2px;
//           margin: 0 auto 14px;
//         }

//         .hiw-sub {
//           font-family: 'DM Sans', sans-serif;
//           color: #6b7280;
//           font-size: 15px;
//           font-weight: 400;
//         }

//         /* Steps grid */
//         .hiw-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 24px;
//           align-items: stretch;
//         }

//         /* Step connector line between cards */
//         .hiw-grid-wrap {
//           position: relative;
//         }
//         .hiw-connector {
//           position: absolute;
//           top: 52px; /* aligned with icon center */
//           left: calc(12.5% + 20px);
//           right: calc(12.5% + 20px);
//           height: 2px;
//           background: linear-gradient(90deg, rgba(81,171,172,0.3), rgba(81,171,172,0.6), rgba(81,171,172,0.3));
//           z-index: 0;
//           pointer-events: none;
//         }

//         .hiw-card {
//           background: #ffffff;
//           border-radius: 20px;
//           padding: 36px 22px 28px;
//           text-align: center;
//           border: 1.5px solid rgba(81,171,172,0.18);
//           box-shadow: 0 4px 24px rgba(81,171,172,0.10), 0 1px 4px rgba(0,0,0,0.04);
//           transition: transform .25s, box-shadow .25s, border-color .25s;
//           position: relative;
//           z-index: 1;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         /* Top teal accent strip */
//         .hiw-card::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 4px;
//           background: linear-gradient(90deg, var(--teal), var(--green));
//           border-radius: 20px 20px 0 0;
//         }

//         .hiw-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 16px 40px rgba(81,171,172,0.22), 0 4px 12px rgba(0,0,0,0.06);
//           border-color: rgba(81,171,172,0.4);
//         }

//         /* Teal circular icon bg — matches screenshot teal circles */
//         .hiw-icon-wrap {
//           width: 72px;
//           height: 72px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #51ABAC, #028945);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin: 0 auto 20px;
//           box-shadow: 0 6px 20px rgba(81,171,172,0.35);
//           flex-shrink: 0;
//         }

//         /* Step number badge (top-right) */
//         .hiw-num {
//           position: absolute;
//           top: 14px;
//           right: 16px;
//           width: 26px;
//           height: 26px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, var(--teal), var(--green));
//           color: #fff;
//           font-size: 11px;
//           font-weight: 800;
//           font-family: 'DM Sans', sans-serif;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .hiw-step-lottie {
//           width: 44px;
//           height: 44px;
//         }

//         .hiw-step-title {
//           font-family: 'DM Sans', sans-serif;
//           font-weight: 700;
//           color: #1a4a2e;
//           font-size: 15px;
//           margin-bottom: 10px;
//           line-height: 1.3;
//         }

//         .hiw-step-desc {
//           font-family: 'DM Sans', sans-serif;
//           font-size: 13px;
//           color: #6b7280;
//           line-height: 1.65;
//           flex: 1;
//         }

//         /* ══════════════════════════════════════════════════════
//            MAYOR SECTION — unchanged
//         ══════════════════════════════════════════════════════ */
//         // .mayor-section {
//         //   width: 100%; display: flex; align-items: stretch; min-height: 540px;
//         // }
//         // .mayor-left {
//         //   flex: 1; background: var(--gold);
//         //   padding: 72px 56px;
//         //   display: flex; flex-direction: column; justify-content: center;
//         //   position: relative; overflow: hidden;
//         // }
//         // .mayor-left::before {
//         //   content: ''; position: absolute; top: -60px; left: -60px;
//         //   width: 220px; height: 220px; border-radius: 50%;
//         //   border: 2px solid rgba(208,154,80,0.3);
//         // }
//         // .mayor-left::after {
//         //   content: ''; position: absolute; bottom: -40px; right: 40px;
//         //   width: 130px; height: 130px; border-radius: 50%;
//         //   border: 2px solid rgba(208,154,80,0.22);
//         // }
//         // .mayor-tag {
//         //   display: inline-flex; align-items: center; gap: 6px;
//         //   background: rgba(208,154,80,0.2); color: #b8860b;
//         //   font-size: 12px; font-weight: 700; padding: 5px 14px;
//         //   border-radius: 999px; margin-bottom: 14px; letter-spacing: 0.5px;
//         //   text-transform: uppercase; width: fit-content;
//         // }
//         // .mayor-date { font-size: 13px; color: #a16207; font-weight: 600; margin-bottom: 10px; }
//         // .mayor-heading {
//         //   font-family: 'Tiro Devanagari Marathi', serif;
//         //   font-size: clamp(28px, 3.8vw, 48px); font-weight: 800;
//         //   color: #1a1a1a; line-height: 1.2; margin-bottom: 6px;
//         // }
//         // .mayor-heading span { color: var(--green); position: relative; }
//         // .mayor-heading span::after {
//         //   content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
//         //   height: 3px; background: linear-gradient(90deg,#D09A50,var(--green)); border-radius: 2px;
//         // }
//         // .mayor-org {
//         //   font-family: 'Tiro Devanagari Marathi', serif;
//         //   font-size: 15px; color: var(--teal); font-weight: 600; margin-bottom: 20px;
//         // }
//         // .mayor-divider {
//         //   width: 56px; height: 4px;
//         //   background: linear-gradient(90deg,#D09A50,var(--green));
//         //   border-radius: 2px; margin-bottom: 22px;
//         // }
//         // .mayor-bio {
//         //   font-family: 'Tiro Devanagari Marathi', serif;
//         //   font-size: 15px; color: #4b5563; line-height: 1.9;
//         //   margin-bottom: 36px; max-width: 520px;
//         // }
//         // .mayor-btns { display: flex; gap: 14px; flex-wrap: wrap; }
//         // .mayor-btn-primary {
//         //   padding: 14px 32px; border-radius: 12px; border: none;
//         //   background: var(--green); color: #fff; font-weight: 700; font-size: 14px;
//         //   cursor: pointer; transition: all .2s; box-shadow: 0 4px 16px rgba(2,137,69,0.3);
//         // }
//         // .mayor-btn-primary:hover { background: #016d38; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(2,137,69,0.4); }
//         // .mayor-right {
//         //   width: 42%; flex-shrink: 0; background: var(--teal);
//         //   position: relative; overflow: hidden;
//         //   display: flex; align-items: flex-end; justify-content: center;
//         // }
//         // .mayor-right-decor1 { position: absolute; top: 20px; right: 20px; width: 90px; height: 90px; border-radius: 50%; background: rgba(255,255,255,0.08); }
//         // .mayor-right-decor2 { position: absolute; bottom: 30px; right: 30px; width: 60px; height: 60px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.15); }
//         // .mayor-right-decor3 { position: absolute; top: 40px; left: 30px; width: 40px; height: 40px; border-radius: 50%; background: rgba(245,230,191,0.15); }
//         // .mayor-right-stripe {
//         //   position: absolute; top: 0; bottom: 0; right: 0; width: 55%;
//         //   background: repeating-linear-gradient(-45deg,rgba(255,255,255,0.04) 0px,rgba(255,255,255,0.04) 2px,transparent 2px,transparent 12px);
//         // }
//         // .mayor-card { position: relative; z-index: 2; width: 85%; max-width: 300px; margin-bottom: 0; }
//         // .mayor-card img {
//         //   width: 100%; display: block; object-fit: cover; object-position: top;
//         //   height: 460px; border-radius: 20px 20px 0 0;
//         //   box-shadow: 0 -8px 40px rgba(0,0,0,0.2);
//         // }
//         // .mayor-card-badge { padding: 16px 20px; background: #fff; border-radius: 0 0 16px 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
//         // .mayor-card-name { font-family: 'Tiro Devanagari Marathi', serif; font-size: 15px; font-weight: 800; color: #1a1a1a; }
//         // .mayor-card-title { font-size: 11px; color: var(--teal); font-weight: 600; margin-top: 3px; text-transform: uppercase; letter-spacing: 0.4px; }

      
      
      
      
      
      
      
//        /* ══════════════════════════════════════════════════════
//            MAYOR SECTION — dark teal, left text, right phone+bubbles
//            Matches screenshot design
//         ══════════════════════════════════════════════════════ */
//         .mayor-section {
//           width: 100%;
//           position: relative;
//           background: linear-gradient(135deg, #1b6e6e 0%, #134f4f 55%, #0d3b3b 100%);
//           overflow: hidden;
//           display: flex;
//           align-items: center;
//           min-height: 540px;
//           padding: 72px 6%;
//         }
//         /* diagonal stripe texture */
//         .mayor-section::before {
//           content: ''; position: absolute; inset: 0;
//           background: repeating-linear-gradient(
//             -45deg,
//             rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px,
//             transparent 1px, transparent 30px
//           );
//           pointer-events: none; z-index: 0;
//         }
//         /* radial glow top-right */
//         .mayor-section::after {
//           content: ''; position: absolute;
//           top: -120px; right: -80px;
//           width: 480px; height: 480px; border-radius: 50%;
//           background: radial-gradient(circle, rgba(81,171,172,0.2) 0%, transparent 65%);
//           pointer-events: none; z-index: 0;
//         }

//         /* LEFT content */
//         .mayor-left {
//           position: relative; z-index: 2;
//           flex: 1; padding-right: 40px;
//           display: flex; flex-direction: column; justify-content: center;
//           /* remove old gold bg */
//           background: transparent !important;
//         }
//         .mayor-left::before { display: none; }
//         .mayor-left::after  { display: none; }

//         .mayor-tag {
//           display: inline-flex; align-items: center; gap: 6px;
//           background: rgba(208,154,80,0.18); color: #D09A50;
//           font-size: 11px; font-weight: 700; padding: 5px 14px;
//           border-radius: 999px; margin-bottom: 18px; letter-spacing: 0.6px;
//           text-transform: uppercase; width: fit-content;
//           border: 1px solid rgba(208,154,80,0.35);
//         }
//         .mayor-date {
//           font-size: 13px; color: rgba(255,255,255,0.55);
//           font-weight: 500; margin-bottom: 10px;
//           font-family: 'DM Sans', sans-serif;
//         }
//         /* Big white heading — white line1, golden line2 */
//         .mayor-heading {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(30px, 4.5vw, 54px); font-weight: 800;
//           color: #ffffff; line-height: 1.18; margin-bottom: 8px;
//           text-shadow: 0 2px 24px rgba(0,0,0,0.25);
//         }
//         .mayor-heading span {
//           color: #D09A50;
//           display: block;
//           /* remove old underline pseudoelement */
//           position: static;
//         }
//         .mayor-heading span::after { display: none; }

//         .mayor-org {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 14px; color: rgba(81,171,172,0.85);
//           font-weight: 600; margin-bottom: 18px;
//         }
//         .mayor-divider {
//           width: 52px; height: 4px;
//           background: linear-gradient(90deg, #D09A50, #51ABAC);
//           border-radius: 2px; margin-bottom: 22px;
//         }
//         .mayor-bio {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 14px; color: rgba(255,255,255,0.72);
//           line-height: 1.9; margin-bottom: 36px; max-width: 480px;
//         }
//         .mayor-btns { display: flex; gap: 14px; flex-wrap: wrap; }
//         .mayor-btn-primary {
//           padding: 14px 32px; border-radius: 10px; border: none;
//           background: #028945; color: #fff; font-weight: 700; font-size: 14px;
//           font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all .2s;
//           box-shadow: 0 4px 20px rgba(2,137,69,0.42);
//         }
//         .mayor-btn-primary:hover { background: #016d38; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(2,137,69,0.5); }

//         /* RIGHT: floating bubbles + phone */
//         .mayor-right {
//           position: relative; z-index: 2;
//           width: 46%; flex-shrink: 0;
//           display: flex; align-items: center; justify-content: center;
//           min-height: 420px;
//           /* remove old teal bg */
//           background: transparent !important;
//         }
//         /* remove old decor elements — hidden via display:none on old class */
//         .mayor-right-decor1,
//         .mayor-right-decor2,
//         .mayor-right-decor3,
//         .mayor-right-stripe { display: none; }

//         /* Floating icon bubbles */
//         .mayor-bubble {
//           position: absolute;
//           background: rgba(255,255,255,0.13);
//           backdrop-filter: blur(8px);
//           border: 1.5px solid rgba(255,255,255,0.22);
//           border-radius: 50%;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 22px;
//           box-shadow: 0 8px 28px rgba(0,0,0,0.22);
//           animation: mayorBob 3.5s ease-in-out infinite;
//           z-index: 4;
//         }
//         .mayor-bubble.b1 { width:58px; height:58px; top:8%;  left:4%;  animation-delay:0s;   }
//         .mayor-bubble.b2 { width:52px; height:52px; top:44%; left:0%;  animation-delay:0.9s; }
//         .mayor-bubble.b3 { width:58px; height:58px; top:76%; left:5%;  animation-delay:1.6s; }
//         @keyframes mayorBob { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-12px); } }

//         /* Glow halo behind phone */
//         .mayor-phone-glow {
//           position: absolute; top: 50%; left: 50%;
//           transform: translate(-50%, -50%);
//           width: 300px; height: 300px; border-radius: 50%;
//           background: radial-gradient(circle, rgba(81,171,172,0.2) 0%, transparent 68%);
//           pointer-events: none; z-index: 1;
//         }

//         /* Phone mockup — matches screenshot sleek phone holding style */
//         .mayor-phone-wrap { position: relative; z-index: 3; margin-left: 50px; }
//         .mayor-phone {
//           width: 196px;
//           background: #071e1e;
//           border-radius: 34px;
//           padding: 10px;
//           box-shadow:
//             0 0 0 2px rgba(81,171,172,0.55),
//             0 0 0 4px rgba(81,171,172,0.15),
//             0 28px 72px rgba(0,0,0,0.55),
//             0 6px 20px rgba(0,0,0,0.35);
//           position: relative;
//         }
//         /* notch */
//         .mayor-phone::before {
//           content: '';
//           position: absolute; top: 14px; left: 50%; transform: translateX(-50%);
//           width: 44px; height: 5px; background: #071e1e;
//           border-radius: 3px; z-index: 5;
//         }
//         .mayor-phone-inner { border-radius: 26px; overflow: hidden; background: #fff; }
//         .mayor-phone-img {
//           width: 100%; height: 240px;
//           object-fit: cover; object-position: top center;
//           display: block;
//         }
//         .mayor-phone-badge { padding: 12px 14px 14px; background: #fff; }
//         .mayor-phone-badge-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 12px; font-weight: 800; color: #1a1a1a; line-height: 1.4;
//         }
//         .mayor-phone-badge-title {
//           font-size: 9.5px; color: #51ABAC; font-weight: 700;
//           margin-top: 3px; text-transform: uppercase; letter-spacing: 0.4px;
//         }

//         /* Old mayor-card — hide since we replaced */
//         .mayor-card { display: none; }

//         /* ══ PROJECTS ══ */
//         .projects-section { padding: 72px 32px; background: #fff; border-top: 1px solid rgba(81,171,172,0.1); border-bottom: 1px solid rgba(81,171,172,0.1); }
//         .projects-inner { max-width: 1060px; margin: 0 auto; }
//         .section-header { text-align: center; margin-bottom: 56px; }
//         .section-tag { display: inline-block; background: rgba(76,171,191,0.12); color: var(--blue); font-size: 12px; font-weight: 700; padding: 5px 16px; border-radius: 999px; margin-bottom: 14px; letter-spacing: 0.6px; text-transform: uppercase; }
//         .section-title { font-family: 'Crimson Pro', serif; font-size: clamp(28px,4vw,40px); font-weight: 800; color: #1a4a2e; margin-bottom: 8px; }
//         .section-sub { color: #6b7280; font-size: 15px; }
//         .proj-card { display: flex; border-radius: 24px; overflow: hidden; box-shadow: 0 12px 48px rgba(0,0,0,0.1); min-height: 300px; transition: box-shadow .3s; background:#fff; }
//         .proj-left { flex: 1; padding: 44px 48px; background: transparent; display: flex; flex-direction: column; justify-content: center; border: 1px solid rgba(81,171,172,0.12); border-right: none; border-radius: 24px 0 0 24px; background-size: cover; background-position: top; background-repeat: no-repeat; }
//         .proj-tag { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; padding: 4px 14px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 16px; width: fit-content; }
//         .proj-title { font-family: 'Tiro Devanagari Marathi', serif; font-size: clamp(17px,2.4vw,24px); font-weight: 800; color: #1a1a1a; margin-bottom: 14px; line-height: 1.35; }
//         .proj-desc { font-family: 'Tiro Devanagari Marathi', serif; font-size: 13.5px; color: #6b7280; line-height: 1.8; margin-bottom: 22px; max-width: 480px; }
//         .proj-progress-row { display:flex; justify-content:space-between; margin-bottom:6px; }
//         .proj-progress-lbl { font-size:12px; font-weight:600; color:#4b5563; }
//         .proj-progress-pct { font-size:13px; font-weight:800; }
//         .proj-bar { height:10px; background:#f1f5f9; border-radius:999px; overflow:hidden; margin-bottom:20px; }
//         .proj-bar-fill { height:100%; border-radius:999px; transition: width 0.6s ease; }
//         .proj-meta { display:flex; align-items:center; gap:16px; flex-wrap:wrap; }
//         .proj-meta-item { font-size:12.5px; color:#6b7280; display:flex; align-items:center; gap:5px; }
//         .proj-meta-item strong { color:#1a1a1a; }
//         .proj-chip { font-size:11px; font-weight:700; padding:4px 12px; border-radius:999px; text-transform:uppercase; }
//         .chip-ongoing  { background:rgba(2,137,69,0.1); color:#028945; }
//         .chip-planning { background:rgba(208,154,80,0.15); color:#b8860b; }
//         .proj-right { width: 220px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; padding: 32px 20px; border-radius: 0 24px 24px 0; transition: background 0.5s; }
//         .proj-icon { font-size: 64px; line-height: 1; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15)); }
//         .proj-stat-num { font-family:'Crimson Pro',serif; font-size:38px; font-weight:800; color:#fff; text-align:center; line-height:1; }
//         .proj-stat-lbl { font-size:11px; color:rgba(255,255,255,0.82); font-weight:700; text-transform:uppercase; letter-spacing:0.5px; text-align:center; }
//         .proj-nav { display:flex; align-items:center; justify-content:center; gap:14px; margin-top:28px; }
//         .proj-btn { width:42px; height:42px; border-radius:50%; border:1.5px solid rgba(81,171,172,0.4); background:#fff; color:#51ABAC; font-size:20px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .2s; box-shadow:0 2px 8px rgba(0,0,0,0.06); }
//         .proj-btn:hover { background:#51ABAC; color:#fff; border-color:#51ABAC; transform:scale(1.08); }
//         .proj-dots { display:flex; gap:7px; align-items:center; }
//         .proj-dot { width:9px; height:9px; border-radius:50%; background:rgba(81,171,172,0.3); border:none; cursor:pointer; padding:0; transition:all .25s; }
//         .proj-dot.active { background:#51ABAC; width:26px; border-radius:5px; }
//         .proj-counter { font-size:12px; font-weight:600; color:#9ca3af; }

//         /* ══ FAQ ══ */
//         .faq-section { width:100%; background:var(--teal); padding:80px 24px; position:relative; overflow:hidden; }
//         .faq-section::before { content:''; position:absolute; top:-80px; left:50%; transform:translateX(-50%); width:700px; height:500px; background:radial-gradient(ellipse,rgba(255,255,255,0.12) 0%,transparent 70%); pointer-events:none; }
//         .faq-inner { max-width:720px; margin:0 auto; position:relative; z-index:1; }
//         .faq-label { text-align:center; font-size:13px; font-weight:700; color:rgba(255,255,255,0.75); letter-spacing:1.2px; text-transform:uppercase; margin-bottom:14px; }
//         .faq-title { font-family:'Crimson Pro',serif; font-size:clamp(26px,4vw,42px); font-weight:800; color:#fff; text-align:center; line-height:1.25; margin-bottom:48px; }
//         .faq-list { display:flex; flex-direction:column; gap:12px; }
//         .faq-item { background:rgba(255,255,255,0.1); border:1.5px solid rgba(255,255,255,0.22); border-radius:16px; overflow:hidden; transition:all 0.25s; }
//         .faq-item.faq-active { background:rgba(255,255,255,0.18); border-color:rgba(255,255,255,0.5); }
//         .faq-q { width:100%; display:flex; align-items:center; justify-content:space-between; padding:20px 24px; background:none; border:none; cursor:pointer; text-align:left; gap:16px; }
//         .faq-q-text { font-family:'Tiro Devanagari Marathi',serif; font-size:16px; font-weight:600; color:#fff; line-height:1.5; flex:1; }
//         .faq-icon { flex-shrink:0; width:32px; height:32px; border-radius:50%; border:1.5px solid rgba(255,255,255,0.55); display:flex; align-items:center; justify-content:center; color:#fff; font-size:20px; font-weight:300; transition:transform 0.3s,background 0.3s; }
//         .faq-item.faq-active .faq-icon { background:#fff; color:var(--teal); transform:rotate(45deg); }
//         .faq-answer { max-height:0; overflow:hidden; transition:max-height 0.4s ease,padding 0.3s; padding:0 24px; }
//         .faq-item.faq-active .faq-answer { max-height:300px; padding:0 24px 20px; }
//         .faq-a-text { font-family:'Tiro Devanagari Marathi',serif; font-size:14px; color:rgba(255,255,255,0.88); line-height:1.85; border-top:1px solid rgba(255,255,255,0.18); padding-top:16px; }

//         /* ══ NOTICE ══ */
//         .notice { background: linear-gradient(135deg,#fef9c3,#fef3c7); border: 1px solid #fde68a; border-radius: 16px; padding: 24px 28px; margin: 40px auto; display: flex; gap: 16px; align-items: flex-start; max-width: 1036px; }
//         .notice-icon { font-size: 28px; flex-shrink: 0; }
//         .notice-title { font-weight: 700; color: #92400e; font-size: 15px; margin-bottom: 6px; }
//         .notice-text { font-size: 13px; color: #a16207; line-height: 1.6; }

//         /* ══ CTA ══ */
//         .cta { background: linear-gradient(135deg, var(--green) 0%, #014d28 100%); color: #fff; padding: 72px 32px; text-align: center; position: relative; overflow: hidden; }
//         .cta::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 0%, rgba(76,171,191,0.25) 0%, transparent 65%); pointer-events: none; }
//         .cta-inner { position: relative; z-index: 1; }
//         .cta-title { font-family: 'Crimson Pro', serif; font-size: clamp(28px,4vw,40px); font-weight: 800; margin-bottom: 12px; }
//         .cta-sub { color: rgba(255,255,255,0.8); font-size: 16px; margin-bottom: 36px; }
//         .cta-btn { padding: 15px 48px; border-radius: 14px; border: none; background: #fff; color: var(--green); font-weight: 800; font-size: 16px; cursor: pointer; box-shadow: 0 8px 28px rgba(0,0,0,0.18); transition: all .2s; }
//         .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(0,0,0,0.25); }

//         /* ══ RESPONSIVE ══ */
//         @media (max-width: 1024px) {
//           .hiw-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
//           .hiw-connector { display: none; }
//           .mayor-phone { width: 172px; }
//           .mayor-phone-img { height: 210px; }
//         }
//         @media (max-width: 768px) {
//           .hero { min-height: calc(100svh - 64px); padding: 60px 20px 56px; }
//           .hero-float.f1,.hero-float.f2 { left:3%; }
//           .hero-float.f3,.hero-float.f4 { right:3%; }
//           .hero-float.f1,.hero-float.f3 { width:40px; height:40px; font-size:15px; }
//           .hero-float.f2,.hero-float.f4 { width:36px; height:36px; font-size:13px; }
//           .hiw-section { padding: 52px 16px 60px; }
//           .hiw-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
//           .hiw-card { padding: 28px 16px 22px; }
//           .hiw-icon-wrap { width: 60px; height: 60px; }

//           .mayor-section { flex-direction: column; padding: 48px 24px 56px; }
//           .mayor-left { padding-right: 0; margin-bottom: 44px; max-width: 100%; }
//           .mayor-right { width: 100%; justify-content: flex-start; min-height: unset; }
//           .mayor-phone-wrap { margin-left: 64px; }

//           .proj-card { flex-direction: column; }
//           .proj-left { border-radius: 24px 24px 0 0; border-right: 1px solid rgba(81,171,172,0.12); border-bottom: none; padding: 28px 24px; }
//           .proj-right { width: 100%; border-radius: 0 0 24px 24px; flex-direction: row; justify-content: center; gap: 24px; padding: 20px 24px; }
//           .notice { margin: 24px 16px; }
//           .faq-section { padding: 60px 16px; }
//         }
//         @media (max-width: 480px) {
//           .hero { padding: 48px 16px 48px; }
//           .hero-btns { flex-direction: column; align-items: center; }
//           .hero-btn-primary,.hero-btn-outline { width: 100%; max-width: 300px; text-align: center; }
//           .hiw-section { padding: 44px 14px 52px; }
//           .hiw-grid { grid-template-columns: 1fr; gap: 14px; }
//           .hiw-connector { display: none; }
//           .hiw-title { font-size: 26px; }
//           .mayor-section { padding: 40px 20px 48px; }
//           .mayor-heading { font-size: clamp(26px, 7.5vw, 40px); }
//           .mayor-right { justify-content: center; }
//           .mayor-phone-wrap { margin-left: 50px; }
//           .mayor-phone { width: 154px; }
//           .mayor-phone-img { height: 185px; }
//           .mayor-bubble.b1 { width:46px; height:46px; font-size:18px; }
//           .mayor-bubble.b2,.mayor-bubble.b3 { width:42px; height:42px; font-size:16px; }
//           .mayor-btns { flex-direction: column; }
//           .mayor-btn-primary { width: 100%; text-align: center; }
//           .proj-right { flex-direction: column; gap: 12px; }
//           .proj-stat-num { font-size: 28px; }
//           .faq-q-text { font-size: 14px; }
//         }
//         @media (max-width: 360px) {
//           .hero-jansanwad { font-size: 40px; }
//           .hero-float { display: none; }
//           .mayor-bubble { display: none; }
//           .mayor-phone-wrap { margin-left: 20px; }
//         }

      
      
      
      
      
      
      
      
//         /* ══ PROJECTS CAROUSEL ══ */
//         .projects-section {
//           padding: 72px 32px;
//           background: #fff;
//           border-top: 1px solid rgba(81,171,172,0.1);
//           border-bottom: 1px solid rgba(81,171,172,0.1);
//         }
//         .projects-inner { max-width: 1060px; margin: 0 auto; }
//         .section-header { text-align: center; margin-bottom: 56px; }
//         .section-tag {
//           display: inline-block; background: rgba(76,171,191,0.12);
//           color: var(--blue); font-size: 12px; font-weight: 700;
//           padding: 5px 16px; border-radius: 999px; margin-bottom: 14px;
//           letter-spacing: 0.6px; text-transform: uppercase;
//         }
//         .section-title { font-family: 'Crimson Pro', serif; font-size: clamp(28px,4vw,40px); font-weight: 800; color: #1a4a2e; margin-bottom: 8px; }
//         .section-sub { color: #6b7280; font-size: 15px; }

//         .proj-card {
//           display: flex;
//           border-radius: 24px;
//           overflow: hidden;
//           box-shadow: 0 12px 48px rgba(0,0,0,0.1);
//           min-height: 300px;
//           transition: box-shadow .3s;
//           background:#fff;
//         }
//         .proj-left {
//           flex: 1;
//           padding: 44px 48px;
//           background: transparent;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           border: 1px solid rgba(81,171,172,0.12);
//           border-right: none;
//           border-radius: 24px 0 0 24px;
//           background-size: cover;
//           background-position: top;
//           background-repeat: no-repeat;
//         }
//         .proj-tag {
//           display: inline-flex; align-items: center; gap: 6px;
//           font-size: 11px; font-weight: 700;
//           padding: 4px 14px; border-radius: 999px;
//           text-transform: uppercase; letter-spacing: 0.6px;
//           margin-bottom: 16px; width: fit-content;
//         }
//         .proj-title {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(17px,2.4vw,24px);
//           font-weight: 800; color: #1a1a1a;
//           margin-bottom: 14px; line-height: 1.35;
//         }
//         .proj-desc {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 13.5px; color: #6b7280;
//           line-height: 1.8; margin-bottom: 22px;
//           max-width: 480px;
//         }
//         .proj-progress-row { display:flex; justify-content:space-between; margin-bottom:6px; }
//         .proj-progress-lbl { font-size:12px; font-weight:600; color:#4b5563; }
//         .proj-progress-pct { font-size:13px; font-weight:800; }
//         .proj-bar { height:10px; background:#f1f5f9; border-radius:999px; overflow:hidden; margin-bottom:20px; }
//         .proj-bar-fill { height:100%; border-radius:999px; transition: width 0.6s ease; }
//         .proj-meta { display:flex; align-items:center; gap:16px; flex-wrap:wrap; }
//         .proj-meta-item { font-size:12.5px; color:#6b7280; display:flex; align-items:center; gap:5px; }
//         .proj-meta-item strong { color:#1a1a1a; }
//         .proj-chip { font-size:11px; font-weight:700; padding:4px 12px; border-radius:999px; text-transform:uppercase; }
//         .chip-ongoing  { background:rgba(2,137,69,0.1);   color:#028945; }
//         .chip-planning { background:rgba(208,154,80,0.15); color:#b8860b; }
//         .proj-right {
//           width: 220px;
//           flex-shrink: 0;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 18px;
//           padding: 32px 20px;
//           border-radius: 0 24px 24px 0;
//           transition: background 0.5s;
//           background-size: cover;
//           background-position: top;
//           background-repeat: no-repeat;
//         }
//         .proj-icon { font-size: 64px; line-height: 1; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15)); }
//         .proj-stat-num { font-family:'Crimson Pro',serif; font-size:38px; font-weight:800; color:#fff; text-align:center; line-height:1; }
//         .proj-stat-lbl { font-size:11px; color:rgba(255,255,255,0.82); font-weight:700; text-transform:uppercase; letter-spacing:0.5px; text-align:center; }
//         .proj-nav { display:flex; align-items:center; justify-content:center; gap:14px; margin-top:28px; }
//         .proj-btn {
//           width:42px; height:42px; border-radius:50%;
//           border:1.5px solid rgba(81,171,172,0.4);
//           background:#fff; color:#51ABAC;
//           font-size:20px; cursor:pointer;
//           display:flex; align-items:center; justify-content:center;
//           transition:all .2s; box-shadow:0 2px 8px rgba(0,0,0,0.06);
//         }
//         .proj-btn:hover { background:#51ABAC; color:#fff; border-color:#51ABAC; transform:scale(1.08); }
//         .proj-dots { display:flex; gap:7px; align-items:center; }
//         .proj-dot { width:9px; height:9px; border-radius:50%; background:rgba(81,171,172,0.3); border:none; cursor:pointer; padding:0; transition:all .25s; }
//         .proj-dot.active { background:#51ABAC; width:26px; border-radius:5px; }
//         .proj-counter { font-size:12px; font-weight:600; color:#9ca3af; }

//         /* ══ FAQ ══ */
//         .faq-section { width:100%; background:var(--teal); padding:80px 24px; position:relative; overflow:hidden; }
//         .faq-section::before { content:''; position:absolute; top:-80px; left:50%; transform:translateX(-50%); width:700px; height:500px; background:radial-gradient(ellipse,rgba(255,255,255,0.12) 0%,transparent 70%); pointer-events:none; }
//         .faq-inner { max-width:720px; margin:0 auto; position:relative; z-index:1; }
//         .faq-label { text-align:center; font-size:13px; font-weight:700; color:rgba(255,255,255,0.75); letter-spacing:1.2px; text-transform:uppercase; margin-bottom:14px; }
//         .faq-title { font-family:'Crimson Pro',serif; font-size:clamp(26px,4vw,42px); font-weight:800; color:#fff; text-align:center; line-height:1.25; margin-bottom:48px; }
//         .faq-list { display:flex; flex-direction:column; gap:12px; }
//         .faq-item { background:rgba(255,255,255,0.1); border:1.5px solid rgba(255,255,255,0.22); border-radius:16px; overflow:hidden; transition:all 0.25s; }
//         .faq-item.faq-active { background:rgba(255,255,255,0.18); border-color:rgba(255,255,255,0.5); }
//         .faq-q { width:100%; display:flex; align-items:center; justify-content:space-between; padding:20px 24px; background:none; border:none; cursor:pointer; text-align:left; gap:16px; }
//         .faq-q-text { font-family:'Tiro Devanagari Marathi',serif; font-size:16px; font-weight:600; color:#fff; line-height:1.5; flex:1; }
//         .faq-icon { flex-shrink:0; width:32px; height:32px; border-radius:50%; border:1.5px solid rgba(255,255,255,0.55); display:flex; align-items:center; justify-content:center; color:#fff; font-size:20px; font-weight:300; transition:transform 0.3s,background 0.3s; }
//         .faq-item.faq-active .faq-icon { background:#fff; color:var(--teal); transform:rotate(45deg); }
//         .faq-answer { max-height:0; overflow:hidden; transition:max-height 0.4s ease,padding 0.3s; padding:0 24px; }
//         .faq-item.faq-active .faq-answer { max-height:300px; padding:0 24px 20px; }
//         .faq-a-text { font-family:'Tiro Devanagari Marathi',serif; font-size:14px; color:rgba(255,255,255,0.88); line-height:1.85; border-top:1px solid rgba(255,255,255,0.18); padding-top:16px; }

//         /* ══ NOTICE ══ */
//         .notice {
//           background: linear-gradient(135deg,#fef9c3,#fef3c7);
//           border: 1px solid #fde68a; border-radius: 16px;
//           padding: 24px 28px; margin: 40px auto;
//           display: flex; gap: 16px; align-items: flex-start; max-width: 1036px;
//         }
//         .notice-icon { font-size: 28px; flex-shrink: 0; }
//         .notice-title { font-weight: 700; color: #92400e; font-size: 15px; margin-bottom: 6px; }
//         .notice-text { font-size: 13px; color: #a16207; line-height: 1.6; }

//         /* ══ CTA ══ */
//         .cta {
//           background: linear-gradient(135deg, var(--green) 0%, #014d28 100%);
//           color: #fff; padding: 72px 32px; text-align: center;
//           position: relative; overflow: hidden;
//         }
//         .cta::before {
//           content: ''; position: absolute; inset: 0;
//           background: radial-gradient(ellipse at 50% 0%, rgba(76,171,191,0.25) 0%, transparent 65%);
//           pointer-events: none;
//         }
//         .cta-inner { position: relative; z-index: 1; }
//         .cta-title { font-family: 'Crimson Pro', serif; font-size: clamp(28px,4vw,40px); font-weight: 800; margin-bottom: 12px; }
//         .cta-sub { color: rgba(255,255,255,0.8); font-size: 16px; margin-bottom: 36px; }
//         .cta-btn {
//           padding: 15px 48px; border-radius: 14px; border: none;
//           background: #fff; color: var(--green);
//           font-weight: 800; font-size: 16px; cursor: pointer;
//           box-shadow: 0 8px 28px rgba(0,0,0,0.18); transition: all .2s;
//         }
//         .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(0,0,0,0.25); }

//         /* ══════════════════════════════════════════════════════
//            RESPONSIVE — all breakpoints
//         ══════════════════════════════════════════════════════ */

//         /* Tablet: 2 columns for steps */
//         @media (max-width: 1024px) {
//           .hiw-grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 20px;
//           }
//           .hiw-connector { display: none; }
//         }

//         /* Small tablet / large mobile */
//         @media (max-width: 768px) {
//           .hero { min-height: calc(100svh - 64px); padding: 60px 20px 56px; }
//           .hero-float.f1, .hero-float.f2 { left: 3%; }
//           .hero-float.f3, .hero-float.f4 { right: 3%; }
//           .hero-float.f1, .hero-float.f3 { width:40px; height:40px; font-size:15px; }
//           .hero-float.f2, .hero-float.f4 { width:36px; height:36px; font-size:13px; }

//           .hiw-section { padding: 52px 16px 60px; }
//           .hiw-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
//           .hiw-card { padding: 28px 16px 22px; }
//           .hiw-icon-wrap { width: 60px; height: 60px; }

//           .mayor-section { flex-direction: column; }
//           .mayor-left { padding: 48px 24px; }
//           .mayor-right { width: 100%; min-height: 400px; padding-top: 40px; }
//           .mayor-card { width: 70%; max-width: 260px; }
//           .mayor-card img { height: 360px; }

//           .proj-card { flex-direction: column; }
//           .proj-left { border-radius: 24px 24px 0 0; border-right: 1px solid rgba(81,171,172,0.12); border-bottom: none; padding: 28px 24px; }
//           .proj-right { width: 100%; border-radius: 0 0 24px 24px; flex-direction: row; justify-content: center; gap: 24px; padding: 20px 24px; }

//           .notice { margin: 24px 16px; }
//           .faq-section { padding: 60px 16px; }
//         }

//         /* Mobile */
//         @media (max-width: 480px) {
//           .hero { padding: 48px 16px 48px; }
//           .hero-badge { font-size: 12px; padding: 5px 14px; }
//           .hero-btns { flex-direction: column; align-items: center; }
//           .hero-btn-primary, .hero-btn-outline { width: 100%; max-width: 300px; text-align: center; }

//           .hiw-section { padding: 44px 14px 52px; }
//           .hiw-grid { grid-template-columns: 1fr; gap: 14px; }
//           .hiw-connector { display: none; }
//           .hiw-title { font-size: 26px; }

//           .mayor-btns { flex-direction: column; }
//           .mayor-btn-primary { width: 100%; text-align: center; }
//           .mayor-card { width: 85%; }
//           .mayor-left { padding: 36px 20px; }

//           .proj-right { flex-direction: column; gap: 12px; }
//           .proj-stat-num { font-size: 28px; }

//           .faq-q-text { font-size: 14px; }
//         }

//         /* Very small screens */
//         @media (max-width: 360px) {
//           .hero-jansanwad { font-size: 40px; }
//           .hero-float { display: none; }
//         }
//       `}</style>

//       <div className="home-root">

//         {/* ══ HERO SECTION ══ */}
//         <div className="hero">
//           {/* Floating orbit icons */}
//           <div className="hero-orbit" aria-hidden="true">
//             <div className="hero-float f1">📅</div>
//             <div className="hero-float f2">👥</div>
//             <div className="hero-float f3">📅</div>
//             <div className="hero-float f4">👤</div>
//           </div>

//           {/* जन संवाद — golden big bold */}
//           <h1 className="hero-jansanwad">जन संवाद</h1>
//           <div className="hero-title-underline" />

//           {/* Description */}
//           <p className="hero-desc">
//             नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ
//           </p>

//           <div className="hero-btns">
//             {citizen ? (
//               <>
//                 <button className="hero-btn-primary" onClick={() => navigate("/book-appointment")}>
//                   📅 Book Appointment
//                 </button>
//                 <button className="hero-btn-outline" onClick={() => navigate("/my-appointments")}>
//                   📋 My Appointments
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button className="hero-btn-primary" onClick={() => navigate("/register")}>
//                   🚀 Get Started — Register
//                 </button>
//                 <button className="hero-btn-outline" onClick={() => navigate("/login")}>
//                   Login करा
//                 </button>
//               </>
//             )}
//           </div>
//         </div>

//         {/* ══ HOW IT WORKS SECTION ══ */}
//         <div className="hiw-section">
//           <div className="hiw-inner">
//             <div className="hiw-header">
//               <h2 className="hiw-title">कसे काम करते?</h2>
//               <div className="hiw-title-bar" />
//               <p className="hiw-sub">फक्त 4 सोप्या steps मध्ये Mayor ची भेट बुक करा</p>
//             </div>

//             <div className="hiw-grid-wrap">
//               <div className="hiw-connector" aria-hidden="true" />
//               <div className="hiw-grid">
//                 {steps.map((s, i) => (
//                   <div key={i} className="hiw-card">
//                     <div className="hiw-num">{i + 1}</div>
//                     <div className="hiw-icon-wrap">
//                       <LottiePlayer src={s.lottie} style={{ width: 44, height: 44 }} />
//                     </div>
//                     <div className="hiw-step-title">{s.title}</div>
//                     <div className="hiw-step-desc">{s.desc}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ══ MAYOR SECTION — unchanged ══ */}
//         {/* <div className="mayor-section">
//           <div className="mayor-left">
//             <LottiePlayer
//               src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
//               style={{ position:"absolute", bottom:24, right:60, width:90, height:90, opacity:0.3, pointerEvents:"none" }}
//             />
//             <div className="mayor-tag">✦ Our Leadership</div>
//             <div className="mayor-date">३ फेब्रुवारी २०२६ पासून कार्यरत</div>
//             <h2 className="mayor-heading">
//               मा. महापौर<br />
//               <span>श्री. अजीव पाटील</span>
//             </h2>
//             <div className="mayor-org">वसई-विरार शहर महानगरपालिका</div>
//             <div className="mayor-divider" />
//             <p className="mayor-bio">
//               ३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे.
//             </p>
//             <div className="mayor-btns">
//               <button className="mayor-btn-primary" onClick={() => navigate(citizen ? "/book-appointment" : "/register")}>
//                 📅 Appointment बुक करा
//               </button>
//             </div>
//           </div>
//           <div className="mayor-right">
//             <div className="mayor-right-decor1" />
//             <div className="mayor-right-decor2" />
//             <div className="mayor-right-decor3" />
//             <div className="mayor-right-stripe" />
//             <div className="mayor-card">
//               <img src={mayorPhoto} alt="मा. महापौर श्री. अजीव पाटील" />
//               <div className="mayor-card-badge">
//                 <div className="mayor-card-name">मा. महापौर श्री. अजीव पाटील</div>
//                 <div className="mayor-card-title">वसई-विरार शहर महानगरपालिका</div>
//               </div>
//             </div>
//           </div>
//         </div> */}


//         {/* ══ MAYOR SECTION — redesigned to match screenshot ══ */}
//         <div className="mayor-section">

//           {/* LEFT: text */}
//           <div className="mayor-left">
//             <LottiePlayer
//               src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
//               style={{ position:"absolute", bottom:24, right:60, width:90, height:90, opacity:0.15, pointerEvents:"none" }}
//             />
//             <div className="mayor-tag">✦ Our Leadership</div>
//             <div className="mayor-date">३ फेब्रुवारी २०२६ पासून कार्यरत</div>
//             <h2 className="mayor-heading">
//               मा. महापौर
//               <span>श्री. अजीव पाटील</span>
//             </h2>
//             <div className="mayor-org">वसई-विरार शहर महानगरपालिका</div>
//             <div className="mayor-divider" />
//             <p className="mayor-bio">
//               ३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे.
//             </p>
//             <div className="mayor-btns">
//               <button className="mayor-btn-primary" onClick={() => navigate(citizen ? "/book-appointment" : "/register")}>
//                 📅 Appointment बुक करा
//               </button>
//             </div>
//           </div>

//           {/* RIGHT: bubbles + phone */}
//           <div className="mayor-right">
//             {/* Floating bubbles */}
//             <div className="mayor-bubble b1">💬</div>
//             <div className="mayor-bubble b2">📈</div>
//             <div className="mayor-bubble b3">👥</div>

//             {/* Glow halo */}
//             <div className="mayor-phone-glow" />

//             {/* Phone mockup */}
//             <div className="mayor-phone-wrap">
//               <div className="mayor-phone">
//                 <div className="mayor-phone-inner">
//                   <img
//                     src={mayorPhoto}
//                     alt="मा. महापौर श्री. अजीव पाटील"
//                     className="mayor-phone-img"
//                   />
//                   <div className="mayor-phone-badge">
//                     <div className="mayor-phone-badge-name">मा. महापौर श्री. अजीव पाटील</div>
//                     <div className="mayor-phone-badge-title">वसई-विरार शहर महानगरपालिका</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ══ PROJECTS CAROUSEL — unchanged ══ */}
//         <div className="projects-section">
//           <div className="projects-inner">
//             <div className="section-header">
//               <div className="section-tag">✦ सध्या सुरू</div>
//               <h2 className="section-title">चालू प्रकल्प</h2>
//               <p className="section-sub">वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प</p>
//             </div>

//             <div
//               className="proj-card"
//               onMouseEnter={() => setAutoPlay(false)}
//               onMouseLeave={() => setAutoPlay(true)}
//               style={p.bgimg ? {
//                 backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.92) 55%, ${p.accent}99 100%), url(${p.bgimg})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               } : {}}
//             >
//               <div className="proj-left"
//                 style={{
//                   background: 'transparent',
//                   border: p.bgimg ? 'none' : '1px solid rgba(81,171,172,0.12)',
//                   borderRight: 'none'
//                 }}>
//                 <div className="proj-tag" style={{ background:`${p.accent}18`, color:p.accent }}>
//                   {p.icon} {p.tag}
//                 </div>
//                 <div className="proj-title">{p.title}</div>
//                 <p className="proj-desc">{p.desc}</p>
//                 <div className="proj-progress-row">
//                   <span className="proj-progress-lbl">प्रगती</span>
//                   <span className="proj-progress-pct" style={{ color:p.accent }}>{p.progress}%</span>
//                 </div>
//                 <div className="proj-bar">
//                   <div className="proj-bar-fill" style={{ width:`${p.progress}%`, background:`linear-gradient(90deg,${p.accent}88,${p.accent})` }} />
//                 </div>
//                 <div className="proj-meta">
//                   <div className="proj-meta-item">💰 <strong>{p.budget}</strong></div>
//                   <div className="proj-meta-item">📅 <strong>{p.deadline}</strong></div>
//                   <span className={`proj-chip ${p.status==="ongoing"?"chip-ongoing":"chip-planning"}`}>{p.statusLabel}</span>
//                 </div>
//               </div>
//               <div className="proj-right" style={{ background:`linear-gradient(160deg,${p.accent},${p.accent}bb)` }}>
//                 <div className="proj-icon">{p.icon}</div>
//                 <div>
//                   <div className="proj-stat-num">{p.stat}</div>
//                   <div className="proj-stat-lbl">{p.statLbl}</div>
//                 </div>
//               </div>
//             </div>

//             <div className="proj-nav">
//               <button className="proj-btn" onClick={() => { setAutoPlay(false); setProjIdx(i => (i-1+projects.length)%projects.length); }}>‹</button>
//               <div className="proj-dots">
//                 {projects.map((_,i) => (
//                   <button key={i} className={`proj-dot${projIdx===i?" active":""}`} onClick={() => { setAutoPlay(false); setProjIdx(i); }} />
//                 ))}
//               </div>
//               <span className="proj-counter">{projIdx+1} / {projects.length}</span>
//               <button className="proj-btn" onClick={() => { setAutoPlay(false); setProjIdx(i => (i+1)%projects.length); }}>›</button>
//             </div>
//           </div>
//         </div>

//         {/* ══ FAQ — unchanged ══ */}
//         <div className="faq-section">
//           <LottiePlayer
//             src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
//             style={{ position:"absolute", left:30, top:"50%", transform:"translateY(-50%)", width:120, height:120, opacity:0.18, pointerEvents:"none" }}
//           />
//           <LottiePlayer
//             src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
//             style={{ position:"absolute", right:30, top:"50%", transform:"translateY(-50%)", width:120, height:120, opacity:0.18, pointerEvents:"none" }}
//           />
//           <div className="faq-inner">
//             <div className="faq-label">FAQ</div>
//             <h2 className="faq-title">वारंवार विचारले जाणारे प्रश्न</h2>
//             <div className="faq-list">
//               {faqs.map((f, i) => (
//                 <div key={i} className={`faq-item${faqOpen === i ? " faq-active" : ""}`}>
//                   <button className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
//                     <span className="faq-q-text">{f.q}</span>
//                     <span className="faq-icon">+</span>
//                   </button>
//                   <div className="faq-answer">
//                     <p className="faq-a-text">{f.a}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ══ NOTICE — unchanged ══ */}
//         <div className="notice">
//           <span className="notice-icon">⚠️</span>
//           <div>
//             <div className="notice-title">महत्त्वाची सूचना</div>
//             <div className="notice-text">
//               भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही.
//               Appointment confirm होण्यासाठी admin approval आवश्यक आहे.
//               कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा.
//             </div>
//           </div>
//         </div>

//         {/* ══ CTA — unchanged ══ */}
//         <div className="cta">
//           <LottiePlayer
//             src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
//             style={{ position:"absolute", left:60, top:"50%", transform:"translateY(-50%)", width:150, height:150, opacity:0.1, pointerEvents:"none" }}
//           />
//           <LottiePlayer
//             src="https://assets9.lottiefiles.com/packages/lf20_touohxv0.json"
//             style={{ position:"absolute", right:60, top:"50%", transform:"translateY(-50%)", width:150, height:150, opacity:0.1, pointerEvents:"none" }}
//           />
//         </div>

//       </div>
//     </>
//   );
// }



// ===========================

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import heroBg from "../assets/vvcmcbuildingbanner.png";
// import mayorPhoto from "../assets/ajivsir1.jpeg";
// import meeting from "../assets/meeting2.jpeg";
// import narangibridgepahani from "../assets/narangibridgeahani.jpeg";

// /* ── Lottie loader ─────────────────────────────────────── */
// function LottiePlayer({ src, style, loop = true }) {
//   const ref = useRef(null);
//   useEffect(() => {
//     let anim;
//     const init = () => {
//       if (window.lottie && ref.current) {
//         ref.current.innerHTML = "";
//         anim = window.lottie.loadAnimation({
//           container: ref.current,
//           renderer: "svg",
//           loop,
//           autoplay: true,
//           path: src,
//         });
//       }
//     };
//     if (!window.lottie) {
//       const s = document.createElement("script");
//       s.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js";
//       s.onload = init;
//       document.head.appendChild(s);
//     } else {
//       init();
//     }
//     return () => anim && anim.destroy();
//   }, [src]);
//   return <div ref={ref} style={style} />;
// }

// export default function Home() {
//   const navigate = useNavigate();
//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();
//   const [faqOpen, setFaqOpen] = useState(null);
//   const [projIdx, setProjIdx] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);

//   const projects = [
//     {
//       icon: ":🌉", tag: "पायाभूत सुविधा",
//       title: "नारंगी उड्डाणपूल प्रकल्प पाहणी",
//       desc: "नारंगी येथील उड्डाणपुलाच्या कामाची मा. महापौर श्री. अजीव पाटील यांनी प्रत्यक्ष पाहणी केली. या पाहणीदरम्यान संबंधित अधिकारी, रेल्वे अधिकारी, कंत्राटदार व उपकंत्राटदार यांच्याशी चर्चा करून कामाची प्रगती व अडचणी जाणून घेतल्या. तसेच कामाला अधिक गती देण्याच्या सूचना दिल्या. हा उड्डाणपूल चालू महिन्याच्या अखेरीपर्यंत वाहतुकीसाठी खुला करण्याचा प्रयत्न सुरू आहे.",
//       progress: 68, status: "ongoing", statusLabel: "सुरू आहे",
//       budget: "₹ 42 कोटी", deadline: "डिसेंबर 2025",
//       stat: "", statLbl: "मार्च २०२६ अखेर वाहतुकीसाठी खुले",
//       accent: "#51ABAC", bg: "#e8f7f7", bgimg: narangibridgepahani
//     },
//     {
//       icon: "🏛️",
//       title: "समिती गठनाबाबत चर्चा",
//       desc: "स्थायी समितीच्या महत्त्वाच्या विषयांवर तसेच प्रभाग समित्यांच्या गठनाबाबत  चर्चा सुरू आहे.",
//       progress: 45, status: "ongoing", statusLabel: "सुरू आहे",
//       budget: "₹ 85 कोटी", deadline: "मार्च 2026",
//       stat: "", statLbl: "",
//       accent: "#028945", bg: "#e8f5ef", bgimg: meeting
//     },
//     {
//       icon: "💧", tag: "पाणीपुरवठा",
//       title: "24×7 पाणीपुरवठा योजना — वसई विभाग",
//       desc: "वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे.",
//       progress: 45, status: "ongoing", statusLabel: "सुरू आहे",
//       budget: "₹ 85 कोटी", deadline: "मार्च 2026",
//       stat: "1.2 लाख", statLbl: "लाभार्थी कुटुंबे",
//       accent: "#028945", bg: "#e8f5ef",
//     },
//     {
//       icon: "🏫", tag: "शिक्षण",
//       title: "VVCMC शाळा डिजिटलायझेशन उपक्रम",
//       desc: "महानगरपालिकेच्या सर्व शाळांमध्ये स्मार्ट बोर्ड, संगणक लॅब आणि इंटरनेट सुविधा उपलब्ध करणे. विद्यार्थ्यांना डिजिटल शिक्षण देण्यासाठी हा उपक्रम राबवला जात आहे.",
//       progress: 30, status: "planning", statusLabel: "नियोजन",
//       budget: "₹ 18 कोटी", deadline: "जून 2026",
//       stat: "94", statLbl: "शाळा डिजिटल",
//       accent: "#D09A50", bg: "#fdf3e0",
//     },
//     {
//       icon: "🌳", tag: "पर्यावरण",
//       title: "हरित वसई-विरार — वृक्षारोपण मोहीम",
//       desc: "महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट.",
//       progress: 55, status: "ongoing", statusLabel: "सुरू आहे",
//       budget: "₹ 8 कोटी", deadline: "ऑगस्ट 2025",
//       stat: "5 लाख", statLbl: "झाडे लावणार",
//       accent: "#028945", bg: "#e8f5ef",
//     },
//   ];

//   useEffect(() => {
//     if (!autoPlay) return;
//     const t = setInterval(() => { setProjIdx(i => (i + 1) % projects.length); }, 4000);
//     return () => clearInterval(t);
//   }, [autoPlay, projects.length]);

//   const faqs = [
//     { q: "शहराचा विचार केला तर फेरीवाला धोरण अजूनही राबवण्यात आलेले नाही. त्यामुळे वाहतूक कोंडीचा मोठा सामना करावा लागत आहे आणि लोकांना त्रास होत आहे. यामधून आपण कसा मार्ग काढणार आहोत?", a: "वाहतूक कोंडी कमी करण्यासाठी आणि स्टेशन परिसरातील समस्या सोडवण्यासाठी न्यायालयाच्या मार्गदर्शक तत्त्वांनुसार लवकरात लवकर कारवाई करण्यात येईल. संपूर्ण स्टेशन परिसर टप्प्याटप्प्याने मोकळा करून नागरिकांना होणारा त्रास कमी करण्यावर भर दिला जाईल." },
//     { q: "Appointment बुक करण्यासाठी काय करावे लागेल?", a: "प्रथम Register करा, त्यानंतर उपलब्ध date आणि time slot निवडा, आवश्यक माहिती भरा आणि Submit करा. Admin approval नंतर तुम्हाला Confirmation Token मिळेल." },
//     { q: "Appointment confirm होण्यासाठी किती वेळ लागतो?", a: "Appointment submit केल्यानंतर Admin द्वारे review केले जाते. साधारणतः 1-2 कार्यालयीन दिवसांत confirmation दिली जाते. SMS आणि Portal वर status दिसेल." },
//     { q: "भेटीच्या दिवशी काय घेऊन यावे?", a: "भेटीच्या दिवशी तुमचा Confirmation Token आणि एक valid ओळखपत्र (Aadhar Card, Voter ID इ.) सोबत आणावे. Token शिवाय भेट होणार नाही." },
//     { q: "Appointment Cancel किंवा Reschedule करता येते का?", a: "होय, तुम्ही 'My Appointments' section मध्ये जाऊन Appointment cancel किंवा reschedule करू शकता. भेटीच्या 24 तास आधी बदल करणे आवश्यक आहे." },
//     { q: "एका दिवशी किती नागरिक भेट घेऊ शकतात?", a: "Mayor साहेबांच्या schedule नुसार प्रत्येक दिवशी मर्यादित slots उपलब्ध असतात. Slots संपल्यावर त्या दिवसाचे booking बंद होते, त्यामुळे लवकर बुक करा." },
//   ];

//   const steps = [
//     { lottie: "https://assets3.lottiefiles.com/packages/lf20_jbb3xnwi.json", title: "Register करा", desc: "Mobile number वापरून account तयार करा — फक्त 1 मिनिट" },
//     { lottie: "https://assets4.lottiefiles.com/packages/lf20_tljjahng.json", title: "Date निवडा", desc: "Mayor च्या available dates आणि time slots मधून निवडा" },
//     { lottie: "https://assets9.lottiefiles.com/packages/lf20_xyadoh9h.json", title: "Details भरा", desc: "भेटीचे कारण, visitors संख्या आणि photo द्या" },
//     { lottie: "https://assets10.lottiefiles.com/packages/lf20_attdh2fv.json", title: "Token मिळवा", desc: "Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा" },
//   ];

//   const p = projects[projIdx];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         :root {
//           --teal:  #51ABAC;
//           --green: #028945;
//           --gold:  #F5E6BF;
//           --blue:  #4CABBF;
//         }

//         /* ══ HERO ══ */
//         .hero {
//           position: relative; min-height: calc(100vh - 64px);
//           display: flex; flex-direction: column;
//           align-items: center; justify-content: center;
//           text-align: center; padding: 80px 24px 72px; overflow: hidden;
//         }
//         .hero::before {
//           content: ''; position: absolute; inset: 0;
//           background-image: url(${heroBg});
//           background-size: cover; background-position: center top;
//           background-repeat: no-repeat; z-index: 0;
//         }
//         .hero::after {
//           content: ''; position: absolute; inset: 0;
//           background: rgba(40, 120, 120, 0.72); z-index: 1;
//         }
//         .hero > * { position: relative; z-index: 2; }
//         .hero-orbit { position: absolute; inset: 0; z-index: 2; pointer-events: none; }
//         .hero-float {
//           position: absolute; background: rgba(208,154,80,0.92); border-radius: 50%;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 18px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);
//           animation: floatBob 3s ease-in-out infinite;
//         }
//         .hero-float.f1 { width:52px; height:52px; top:28%; left:8%; animation-delay:0s; }
//         .hero-float.f2 { width:44px; height:44px; top:60%; left:16%; animation-delay:0.7s; }
//         .hero-float.f3 { width:52px; height:52px; top:22%; right:8%; animation-delay:1.1s; }
//         .hero-float.f4 { width:44px; height:44px; top:58%; right:14%; animation-delay:0.4s; }
//         @keyframes floatBob { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-10px); } }
//         .hero-jansanwad {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(52px, 10vw, 96px); font-weight: 800; color: #F5D87A;
//           line-height: 1.05; margin-bottom: 18px;
//           text-shadow: 0 4px 32px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2); letter-spacing: -1px;
//         }
//         .hero-title-underline {
//           width: 80px; height: 4px;
//           background: linear-gradient(90deg, #D09A50, #F5D87A, #D09A50);
//           border-radius: 2px; margin: 0 auto 22px;
//           animation: shimmer 2.5s ease-in-out infinite;
//         }
//         @keyframes shimmer { 0%,100% { opacity:1; } 50% { opacity:0.6; } }
//         .hero-desc {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(14px, 2.2vw, 19px); font-weight: 600;
//           color: rgba(255,255,255,0.93); max-width: 620px;
//           margin: 0 auto 40px; line-height: 1.7;
//           text-shadow: 0 2px 12px rgba(0,0,0,0.25);
//         }
//         .hero-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
//         .hero-btn-primary {
//           padding: 14px 36px; border-radius: 12px; border: none;
//           background: #028945; color: #fff; font-weight: 700; font-size: 15px;
//           font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all .2s;
//           box-shadow: 0 4px 20px rgba(2,137,69,0.45); letter-spacing: 0.2px;
//         }
//         .hero-btn-primary:hover { background: #016d38; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(2,137,69,0.55); }
//         .hero-btn-outline {
//           padding: 14px 36px; border-radius: 12px;
//           border: 2px solid rgba(245,216,122,0.85); background: transparent;
//           color: #F5D87A; font-weight: 700; font-size: 15px;
//           font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all .2s;
//         }
//         .hero-btn-outline:hover { background: rgba(245,216,122,0.15); transform: translateY(-2px); border-color: #F5D87A; }

//         /* ══ HOW IT WORKS ══ */
//         .hiw-section { padding: 72px 24px 80px; background: #ffffff; position: relative; }
//         .hiw-section::before {
//           content: ''; position: absolute; inset: 0;
//           background-image:
//             radial-gradient(circle at 15% 50%, rgba(81,171,172,0.06) 0%, transparent 55%),
//             radial-gradient(circle at 85% 20%, rgba(2,137,69,0.05) 0%, transparent 50%);
//           pointer-events: none;
//         }
//         .hiw-inner { max-width: 1080px; margin: 0 auto; position: relative; z-index: 1; }
//         .hiw-header { text-align: center; margin-bottom: 52px; }
//         .hiw-title { font-family: 'Crimson Pro', serif; font-size: clamp(28px, 4.5vw, 44px); font-weight: 800; color: #1a1a1a; margin-bottom: 12px; line-height: 1.2; }
//         .hiw-title-bar { width: 64px; height: 4px; background: linear-gradient(90deg, #D09A50, #F5D87A); border-radius: 2px; margin: 0 auto 14px; }
//         .hiw-sub { font-family: 'DM Sans', sans-serif; color: #6b7280; font-size: 15px; font-weight: 400; }
//         .hiw-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; align-items: stretch; }
//         .hiw-grid-wrap { position: relative; }
//         .hiw-connector {
//           position: absolute; top: 52px;
//           left: calc(12.5% + 20px); right: calc(12.5% + 20px); height: 2px;
//           background: linear-gradient(90deg, rgba(81,171,172,0.3), rgba(81,171,172,0.6), rgba(81,171,172,0.3));
//           z-index: 0; pointer-events: none;
//         }
//         .hiw-card {
//           background: #ffffff; border-radius: 20px; padding: 36px 22px 28px;
//           text-align: center; border: 1.5px solid rgba(81,171,172,0.18);
//           box-shadow: 0 4px 24px rgba(81,171,172,0.10), 0 1px 4px rgba(0,0,0,0.04);
//           transition: transform .25s, box-shadow .25s, border-color .25s;
//           position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center;
//         }
//         .hiw-card::before {
//           content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
//           background: linear-gradient(90deg, var(--teal), var(--green));
//           border-radius: 20px 20px 0 0;
//         }
//         .hiw-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(81,171,172,0.22), 0 4px 12px rgba(0,0,0,0.06); border-color: rgba(81,171,172,0.4); }
//         .hiw-icon-wrap {
//           width: 72px; height: 72px; border-radius: 50%;
//           background: linear-gradient(135deg, #51ABAC, #028945);
//           display: flex; align-items: center; justify-content: center;
//           margin: 0 auto 20px; box-shadow: 0 6px 20px rgba(81,171,172,0.35); flex-shrink: 0;
//         }
//         .hiw-num {
//           position: absolute; top: 14px; right: 16px; width: 26px; height: 26px;
//           border-radius: 50%; background: linear-gradient(135deg, var(--teal), var(--green));
//           color: #fff; font-size: 11px; font-weight: 800; font-family: 'DM Sans', sans-serif;
//           display: flex; align-items: center; justify-content: center;
//         }
//         .hiw-step-title { font-family: 'DM Sans', sans-serif; font-weight: 700; color: #1a4a2e; font-size: 15px; margin-bottom: 10px; line-height: 1.3; }
//         .hiw-step-desc { font-family: 'DM Sans', sans-serif; font-size: 13px; color: #6b7280; line-height: 1.65; flex: 1; }

//         /* ══════════════════════════════════════════════════════
//            MAYOR SECTION — dark teal, left text, right phone+bubbles
//            Matches screenshot design
//         ══════════════════════════════════════════════════════ */
//         .mayor-section {
//           width: 100%;
//           position: relative;
//           background: linear-gradient(135deg, #1b6e6e 0%, #134f4f 55%, #0d3b3b 100%);
//           overflow: hidden;
//           display: flex;
//           align-items: center;
//           min-height: 540px;
//           padding: 72px 6%;
//         }
//         /* diagonal stripe texture */
//         .mayor-section::before {
//           content: ''; position: absolute; inset: 0;
//           background: repeating-linear-gradient(
//             -45deg,
//             rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px,
//             transparent 1px, transparent 30px
//           );
//           pointer-events: none; z-index: 0;
//         }
//         /* radial glow top-right */
//         .mayor-section::after {
//           content: ''; position: absolute;
//           top: -120px; right: -80px;
//           width: 480px; height: 480px; border-radius: 50%;
//           background: radial-gradient(circle, rgba(81,171,172,0.2) 0%, transparent 65%);
//           pointer-events: none; z-index: 0;
//         }

//         /* LEFT content */
//         .mayor-left {
//           position: relative; z-index: 2;
//           flex: 1; padding-right: 40px;
//           display: flex; flex-direction: column; justify-content: center;
//           /* remove old gold bg */
//           background: transparent !important;
//         }
//         .mayor-left::before { display: none; }
//         .mayor-left::after  { display: none; }

//         .mayor-tag {
//           display: inline-flex; align-items: center; gap: 6px;
//           background: rgba(208,154,80,0.18); color: #D09A50;
//           font-size: 11px; font-weight: 700; padding: 5px 14px;
//           border-radius: 999px; margin-bottom: 18px; letter-spacing: 0.6px;
//           text-transform: uppercase; width: fit-content;
//           border: 1px solid rgba(208,154,80,0.35);
//         }
//         .mayor-date {
//           font-size: 13px; color: rgba(255,255,255,0.55);
//           font-weight: 500; margin-bottom: 10px;
//           font-family: 'DM Sans', sans-serif;
//         }
//         /* Big white heading — white line1, golden line2 */
//         .mayor-heading {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(30px, 4.5vw, 54px); font-weight: 800;
//           color: #ffffff; line-height: 1.18; margin-bottom: 8px;
//           text-shadow: 0 2px 24px rgba(0,0,0,0.25);
//         }
//         .mayor-heading span {
//           color: #D09A50;
//           display: block;
//           /* remove old underline pseudoelement */
//           position: static;
//         }
//         .mayor-heading span::after { display: none; }

//         .mayor-org {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 14px; color: rgba(81,171,172,0.85);
//           font-weight: 600; margin-bottom: 18px;
//         }
//         .mayor-divider {
//           width: 52px; height: 4px;
//           background: linear-gradient(90deg, #D09A50, #51ABAC);
//           border-radius: 2px; margin-bottom: 22px;
//         }
//         .mayor-bio {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 14px; color: rgba(255,255,255,0.72);
//           line-height: 1.9; margin-bottom: 36px; max-width: 480px;
//         }
//         .mayor-btns { display: flex; gap: 14px; flex-wrap: wrap; }
//         .mayor-btn-primary {
//           padding: 14px 32px; border-radius: 10px; border: none;
//           background: #028945; color: #fff; font-weight: 700; font-size: 14px;
//           font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all .2s;
//           box-shadow: 0 4px 20px rgba(2,137,69,0.42);
//         }
//         .mayor-btn-primary:hover { background: #016d38; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(2,137,69,0.5); }

//         /* RIGHT: floating bubbles + phone */
//         .mayor-right {
//           position: relative; z-index: 2;
//           width: 46%; flex-shrink: 0;
//           display: flex; align-items: center; justify-content: center;
//           min-height: 420px;
//           /* remove old teal bg */
//           background: transparent !important;
//         }
//         /* remove old decor elements — hidden via display:none on old class */
//         .mayor-right-decor1,
//         .mayor-right-decor2,
//         .mayor-right-decor3,
//         .mayor-right-stripe { display: none; }

//         /* Floating icon bubbles */
//         .mayor-bubble {
//           position: absolute;
//           background: rgba(255,255,255,0.13);
//           backdrop-filter: blur(8px);
//           border: 1.5px solid rgba(255,255,255,0.22);
//           border-radius: 50%;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 22px;
//           box-shadow: 0 8px 28px rgba(0,0,0,0.22);
//           animation: mayorBob 3.5s ease-in-out infinite;
//           z-index: 4;
//         }
//         .mayor-bubble.b1 { width:58px; height:58px; top:8%;  left:4%;  animation-delay:0s;   }
//         .mayor-bubble.b2 { width:52px; height:52px; top:44%; left:0%;  animation-delay:0.9s; }
//         .mayor-bubble.b3 { width:58px; height:58px; top:76%; left:5%;  animation-delay:1.6s; }
//         @keyframes mayorBob { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-12px); } }

//         /* Glow halo behind phone */
//         .mayor-phone-glow {
//           position: absolute; top: 50%; left: 50%;
//           transform: translate(-50%, -50%);
//           width: 300px; height: 300px; border-radius: 50%;
//           background: radial-gradient(circle, rgba(81,171,172,0.2) 0%, transparent 68%);
//           pointer-events: none; z-index: 1;
//         }

//         /* Phone mockup — matches screenshot sleek phone holding style */
//         .mayor-phone-wrap { position: relative; z-index: 3; margin-left: 50px; }
//         .mayor-phone {
//           width: 196px;
//           background: #071e1e;
//           border-radius: 34px;
//           padding: 10px;
//           box-shadow:
//             0 0 0 2px rgba(81,171,172,0.55),
//             0 0 0 4px rgba(81,171,172,0.15),
//             0 28px 72px rgba(0,0,0,0.55),
//             0 6px 20px rgba(0,0,0,0.35);
//           position: relative;
//         }
//         /* notch */
//         .mayor-phone::before {
//           content: '';
//           position: absolute; top: 14px; left: 50%; transform: translateX(-50%);
//           width: 44px; height: 5px; background: #071e1e;
//           border-radius: 3px; z-index: 5;
//         }
//         .mayor-phone-inner { border-radius: 26px; overflow: hidden; background: #fff; }
//         .mayor-phone-img {
//           width: 100%; height: 240px;
//           object-fit: cover; object-position: top center;
//           display: block;
//         }
//         .mayor-phone-badge { padding: 12px 14px 14px; background: #fff; }
//         .mayor-phone-badge-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 12px; font-weight: 800; color: #1a1a1a; line-height: 1.4;
//         }
//         .mayor-phone-badge-title {
//           font-size: 9.5px; color: #51ABAC; font-weight: 700;
//           margin-top: 3px; text-transform: uppercase; letter-spacing: 0.4px;
//         }

//         /* Old mayor-card — hide since we replaced */
//         .mayor-card { display: none; }

//         /* ══ PROJECTS ══ */
//         .projects-section { padding: 72px 32px; background: #fff; border-top: 1px solid rgba(81,171,172,0.1); border-bottom: 1px solid rgba(81,171,172,0.1); }
//         .projects-inner { max-width: 1060px; margin: 0 auto; }
//         .section-header { text-align: center; margin-bottom: 56px; }
//         .section-tag { display: inline-block; background: rgba(76,171,191,0.12); color: var(--blue); font-size: 12px; font-weight: 700; padding: 5px 16px; border-radius: 999px; margin-bottom: 14px; letter-spacing: 0.6px; text-transform: uppercase; }
//         .section-title { font-family: 'Crimson Pro', serif; font-size: clamp(28px,4vw,40px); font-weight: 800; color: #1a4a2e; margin-bottom: 8px; }
//         .section-sub { color: #6b7280; font-size: 15px; }
//         .proj-card { display: flex; border-radius: 24px; overflow: hidden; box-shadow: 0 12px 48px rgba(0,0,0,0.1); min-height: 300px; transition: box-shadow .3s; background:#fff; }
//         .proj-left { flex: 1; padding: 44px 48px; background: transparent; display: flex; flex-direction: column; justify-content: center; border: 1px solid rgba(81,171,172,0.12); border-right: none; border-radius: 24px 0 0 24px; background-size: cover; background-position: top; background-repeat: no-repeat; }
//         .proj-tag { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; padding: 4px 14px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 16px; width: fit-content; }
//         .proj-title { font-family: 'Tiro Devanagari Marathi', serif; font-size: clamp(17px,2.4vw,24px); font-weight: 800; color: #1a1a1a; margin-bottom: 14px; line-height: 1.35; }
//         .proj-desc { font-family: 'Tiro Devanagari Marathi', serif; font-size: 13.5px; color: #6b7280; line-height: 1.8; margin-bottom: 22px; max-width: 480px; }
//         .proj-progress-row { display:flex; justify-content:space-between; margin-bottom:6px; }
//         .proj-progress-lbl { font-size:12px; font-weight:600; color:#4b5563; }
//         .proj-progress-pct { font-size:13px; font-weight:800; }
//         .proj-bar { height:10px; background:#f1f5f9; border-radius:999px; overflow:hidden; margin-bottom:20px; }
//         .proj-bar-fill { height:100%; border-radius:999px; transition: width 0.6s ease; }
//         .proj-meta { display:flex; align-items:center; gap:16px; flex-wrap:wrap; }
//         .proj-meta-item { font-size:12.5px; color:#6b7280; display:flex; align-items:center; gap:5px; }
//         .proj-meta-item strong { color:#1a1a1a; }
//         .proj-chip { font-size:11px; font-weight:700; padding:4px 12px; border-radius:999px; text-transform:uppercase; }
//         .chip-ongoing  { background:rgba(2,137,69,0.1); color:#028945; }
//         .chip-planning { background:rgba(208,154,80,0.15); color:#b8860b; }
//         .proj-right { width: 220px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; padding: 32px 20px; border-radius: 0 24px 24px 0; transition: background 0.5s; }
//         .proj-icon { font-size: 64px; line-height: 1; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15)); }
//         .proj-stat-num { font-family:'Crimson Pro',serif; font-size:38px; font-weight:800; color:#fff; text-align:center; line-height:1; }
//         .proj-stat-lbl { font-size:11px; color:rgba(255,255,255,0.82); font-weight:700; text-transform:uppercase; letter-spacing:0.5px; text-align:center; }
//         .proj-nav { display:flex; align-items:center; justify-content:center; gap:14px; margin-top:28px; }
//         .proj-btn { width:42px; height:42px; border-radius:50%; border:1.5px solid rgba(81,171,172,0.4); background:#fff; color:#51ABAC; font-size:20px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .2s; box-shadow:0 2px 8px rgba(0,0,0,0.06); }
//         .proj-btn:hover { background:#51ABAC; color:#fff; border-color:#51ABAC; transform:scale(1.08); }
//         .proj-dots { display:flex; gap:7px; align-items:center; }
//         .proj-dot { width:9px; height:9px; border-radius:50%; background:rgba(81,171,172,0.3); border:none; cursor:pointer; padding:0; transition:all .25s; }
//         .proj-dot.active { background:#51ABAC; width:26px; border-radius:5px; }
//         .proj-counter { font-size:12px; font-weight:600; color:#9ca3af; }

//         /* ══ FAQ ══ */
//         .faq-section { width:100%; background:var(--teal); padding:80px 24px; position:relative; overflow:hidden; }
//         .faq-section::before { content:''; position:absolute; top:-80px; left:50%; transform:translateX(-50%); width:700px; height:500px; background:radial-gradient(ellipse,rgba(255,255,255,0.12) 0%,transparent 70%); pointer-events:none; }
//         .faq-inner { max-width:720px; margin:0 auto; position:relative; z-index:1; }
//         .faq-label { text-align:center; font-size:13px; font-weight:700; color:rgba(255,255,255,0.75); letter-spacing:1.2px; text-transform:uppercase; margin-bottom:14px; }
//         .faq-title { font-family:'Crimson Pro',serif; font-size:clamp(26px,4vw,42px); font-weight:800; color:#fff; text-align:center; line-height:1.25; margin-bottom:48px; }
//         .faq-list { display:flex; flex-direction:column; gap:12px; }
//         .faq-item { background:rgba(255,255,255,0.1); border:1.5px solid rgba(255,255,255,0.22); border-radius:16px; overflow:hidden; transition:all 0.25s; }
//         .faq-item.faq-active { background:rgba(255,255,255,0.18); border-color:rgba(255,255,255,0.5); }
//         .faq-q { width:100%; display:flex; align-items:center; justify-content:space-between; padding:20px 24px; background:none; border:none; cursor:pointer; text-align:left; gap:16px; }
//         .faq-q-text { font-family:'Tiro Devanagari Marathi',serif; font-size:16px; font-weight:600; color:#fff; line-height:1.5; flex:1; }
//         .faq-icon { flex-shrink:0; width:32px; height:32px; border-radius:50%; border:1.5px solid rgba(255,255,255,0.55); display:flex; align-items:center; justify-content:center; color:#fff; font-size:20px; font-weight:300; transition:transform 0.3s,background 0.3s; }
//         .faq-item.faq-active .faq-icon { background:#fff; color:var(--teal); transform:rotate(45deg); }
//         .faq-answer { max-height:0; overflow:hidden; transition:max-height 0.4s ease,padding 0.3s; padding:0 24px; }
//         .faq-item.faq-active .faq-answer { max-height:300px; padding:0 24px 20px; }
//         .faq-a-text { font-family:'Tiro Devanagari Marathi',serif; font-size:14px; color:rgba(255,255,255,0.88); line-height:1.85; border-top:1px solid rgba(255,255,255,0.18); padding-top:16px; }

//         /* ══ NOTICE ══ */
//         .notice { background: linear-gradient(135deg,#fef9c3,#fef3c7); border: 1px solid #fde68a; border-radius: 16px; padding: 24px 28px; margin: 40px auto; display: flex; gap: 16px; align-items: flex-start; max-width: 1036px; }
//         .notice-icon { font-size: 28px; flex-shrink: 0; }
//         .notice-title { font-weight: 700; color: #92400e; font-size: 15px; margin-bottom: 6px; }
//         .notice-text { font-size: 13px; color: #a16207; line-height: 1.6; }

//         /* ══ CTA ══ */
//         .cta { background: linear-gradient(135deg, var(--green) 0%, #014d28 100%); color: #fff; padding: 72px 32px; text-align: center; position: relative; overflow: hidden; }
//         .cta::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 0%, rgba(76,171,191,0.25) 0%, transparent 65%); pointer-events: none; }
//         .cta-inner { position: relative; z-index: 1; }
//         .cta-title { font-family: 'Crimson Pro', serif; font-size: clamp(28px,4vw,40px); font-weight: 800; margin-bottom: 12px; }
//         .cta-sub { color: rgba(255,255,255,0.8); font-size: 16px; margin-bottom: 36px; }
//         .cta-btn { padding: 15px 48px; border-radius: 14px; border: none; background: #fff; color: var(--green); font-weight: 800; font-size: 16px; cursor: pointer; box-shadow: 0 8px 28px rgba(0,0,0,0.18); transition: all .2s; }
//         .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(0,0,0,0.25); }

//         /* ══ RESPONSIVE ══ */
//         @media (max-width: 1024px) {
//           .hiw-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
//           .hiw-connector { display: none; }
//           .mayor-phone { width: 172px; }
//           .mayor-phone-img { height: 210px; }
//         }
//         @media (max-width: 768px) {
//           .hero { min-height: calc(100svh - 64px); padding: 60px 20px 56px; }
//           .hero-float.f1,.hero-float.f2 { left:3%; }
//           .hero-float.f3,.hero-float.f4 { right:3%; }
//           .hero-float.f1,.hero-float.f3 { width:40px; height:40px; font-size:15px; }
//           .hero-float.f2,.hero-float.f4 { width:36px; height:36px; font-size:13px; }
//           .hiw-section { padding: 52px 16px 60px; }
//           .hiw-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
//           .hiw-card { padding: 28px 16px 22px; }
//           .hiw-icon-wrap { width: 60px; height: 60px; }

//           .mayor-section { flex-direction: column; padding: 48px 24px 56px; }
//           .mayor-left { padding-right: 0; margin-bottom: 44px; max-width: 100%; }
//           .mayor-right { width: 100%; justify-content: flex-start; min-height: unset; }
//           .mayor-phone-wrap { margin-left: 64px; }

//           .proj-card { flex-direction: column; }
//           .proj-left { border-radius: 24px 24px 0 0; border-right: 1px solid rgba(81,171,172,0.12); border-bottom: none; padding: 28px 24px; }
//           .proj-right { width: 100%; border-radius: 0 0 24px 24px; flex-direction: row; justify-content: center; gap: 24px; padding: 20px 24px; }
//           .notice { margin: 24px 16px; }
//           .faq-section { padding: 60px 16px; }
//         }
//         @media (max-width: 480px) {
//           .hero { padding: 48px 16px 48px; }
//           .hero-btns { flex-direction: column; align-items: center; }
//           .hero-btn-primary,.hero-btn-outline { width: 100%; max-width: 300px; text-align: center; }
//           .hiw-section { padding: 44px 14px 52px; }
//           .hiw-grid { grid-template-columns: 1fr; gap: 14px; }
//           .hiw-connector { display: none; }
//           .hiw-title { font-size: 26px; }
//           .mayor-section { padding: 40px 20px 48px; }
//           .mayor-heading { font-size: clamp(26px, 7.5vw, 40px); }
//           .mayor-right { justify-content: center; }
//           .mayor-phone-wrap { margin-left: 50px; }
//           .mayor-phone { width: 154px; }
//           .mayor-phone-img { height: 185px; }
//           .mayor-bubble.b1 { width:46px; height:46px; font-size:18px; }
//           .mayor-bubble.b2,.mayor-bubble.b3 { width:42px; height:42px; font-size:16px; }
//           .mayor-btns { flex-direction: column; }
//           .mayor-btn-primary { width: 100%; text-align: center; }
//           .proj-right { flex-direction: column; gap: 12px; }
//           .proj-stat-num { font-size: 28px; }
//           .faq-q-text { font-size: 14px; }
//         }
//         @media (max-width: 360px) {
//           .hero-jansanwad { font-size: 40px; }
//           .hero-float { display: none; }
//           .mayor-bubble { display: none; }
//           .mayor-phone-wrap { margin-left: 20px; }
//         }
//       `}</style>

//       <div className="home-root">

//         {/* ══ HERO ══ */}
//         <div className="hero">
//           <div className="hero-orbit" aria-hidden="true">
//             <div className="hero-float f1">📅</div>
//             <div className="hero-float f2">👥</div>
//             <div className="hero-float f3">📅</div>
//             <div className="hero-float f4">👤</div>
//           </div>
//           <h1 className="hero-jansanwad">जन संवाद</h1>
//           <div className="hero-title-underline" />
//           <p className="hero-desc">
//             नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ
//           </p>
//           <div className="hero-btns">
//             {citizen ? (
//               <>
//                 <button className="hero-btn-primary" onClick={() => navigate("/book-appointment")}>📅 Book Appointment</button>
//                 <button className="hero-btn-outline" onClick={() => navigate("/my-appointments")}>📋 My Appointments</button>
//               </>
//             ) : (
//               <>
//                 <button className="hero-btn-primary" onClick={() => navigate("/register")}>🚀 Get Started — Register</button>
//                 <button className="hero-btn-outline" onClick={() => navigate("/login")}>Login करा</button>
//               </>
//             )}
//           </div>
//         </div>

//         {/* ══ HOW IT WORKS ══ */}
//         <div className="hiw-section">
//           <div className="hiw-inner">
//             <div className="hiw-header">
//               <h2 className="hiw-title">कसे काम करते?</h2>
//               <div className="hiw-title-bar" />
//               <p className="hiw-sub">फक्त 4 सोप्या steps मध्ये Mayor ची भेट बुक करा</p>
//             </div>
//             <div className="hiw-grid-wrap">
//               <div className="hiw-connector" aria-hidden="true" />
//               <div className="hiw-grid">
//                 {steps.map((s, i) => (
//                   <div key={i} className="hiw-card">
//                     <div className="hiw-num">{i + 1}</div>
//                     <div className="hiw-icon-wrap">
//                       <LottiePlayer src={s.lottie} style={{ width: 44, height: 44 }} />
//                     </div>
//                     <div className="hiw-step-title">{s.title}</div>
//                     <div className="hiw-step-desc">{s.desc}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ══ MAYOR SECTION — redesigned to match screenshot ══ */}
//         <div className="mayor-section">

//           {/* LEFT: text */}
//           <div className="mayor-left">
//             <LottiePlayer
//               src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
//               style={{ position:"absolute", bottom:24, right:60, width:90, height:90, opacity:0.15, pointerEvents:"none" }}
//             />
//             <div className="mayor-tag">✦ Our Leadership</div>
//             <div className="mayor-date">३ फेब्रुवारी २०२६ पासून कार्यरत</div>
//             <h2 className="mayor-heading">
//               मा. महापौर
//               <span>श्री. अजीव पाटील</span>
//             </h2>
//             <div className="mayor-org">वसई-विरार शहर महानगरपालिका</div>
//             <div className="mayor-divider" />
//             <p className="mayor-bio">
//               ३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे.
//             </p>
//             <div className="mayor-btns">
//               <button className="mayor-btn-primary" onClick={() => navigate(citizen ? "/book-appointment" : "/register")}>
//                 📅 Appointment बुक करा
//               </button>
//             </div>
//           </div>

//           {/* RIGHT: bubbles + phone */}
//           <div className="mayor-right">
//             {/* Floating bubbles */}
//             <div className="mayor-bubble b1">💬</div>
//             <div className="mayor-bubble b2">📈</div>
//             <div className="mayor-bubble b3">👥</div>

//             {/* Glow halo */}
//             <div className="mayor-phone-glow" />

//             {/* Phone mockup */}
//             <div className="mayor-phone-wrap">
//               <div className="mayor-phone">
//                 <div className="mayor-phone-inner">
//                   <img
//                     src={mayorPhoto}
//                     alt="मा. महापौर श्री. अजीव पाटील"
//                     className="mayor-phone-img"
//                   />
//                   <div className="mayor-phone-badge">
//                     <div className="mayor-phone-badge-name">मा. महापौर श्री. अजीव पाटील</div>
//                     <div className="mayor-phone-badge-title">वसई-विरार शहर महानगरपालिका</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ══ PROJECTS CAROUSEL ══ */}
//         <div className="projects-section">
//           <div className="projects-inner">
//             <div className="section-header">
//               <div className="section-tag">✦ सध्या सुरू</div>
//               <h2 className="section-title">चालू प्रकल्प</h2>
//               <p className="section-sub">वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प</p>
//             </div>
//             <div
//               className="proj-card"
//               onMouseEnter={() => setAutoPlay(false)}
//               onMouseLeave={() => setAutoPlay(true)}
//               style={p.bgimg ? {
//                 backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.92) 55%, ${p.accent}99 100%), url(${p.bgimg})`,
//                 backgroundSize: "cover", backgroundPosition: "center",
//               } : {}}
//             >
//               <div className="proj-left" style={{ background:'transparent', border: p.bgimg ? 'none' : '1px solid rgba(81,171,172,0.12)', borderRight:'none' }}>
//                 <div className="proj-tag" style={{ background:`${p.accent}18`, color:p.accent }}>{p.icon} {p.tag}</div>
//                 <div className="proj-title">{p.title}</div>
//                 <p className="proj-desc">{p.desc}</p>
//                 <div className="proj-progress-row">
//                   <span className="proj-progress-lbl">प्रगती</span>
//                   <span className="proj-progress-pct" style={{ color:p.accent }}>{p.progress}%</span>
//                 </div>
//                 <div className="proj-bar">
//                   <div className="proj-bar-fill" style={{ width:`${p.progress}%`, background:`linear-gradient(90deg,${p.accent}88,${p.accent})` }} />
//                 </div>
//                 <div className="proj-meta">
//                   <div className="proj-meta-item">💰 <strong>{p.budget}</strong></div>
//                   <div className="proj-meta-item">📅 <strong>{p.deadline}</strong></div>
//                   <span className={`proj-chip ${p.status==="ongoing"?"chip-ongoing":"chip-planning"}`}>{p.statusLabel}</span>
//                 </div>
//               </div>
//               <div className="proj-right" style={{ background:`linear-gradient(160deg,${p.accent},${p.accent}bb)` }}>
//                 <div className="proj-icon">{p.icon}</div>
//                 <div>
//                   <div className="proj-stat-num">{p.stat}</div>
//                   <div className="proj-stat-lbl">{p.statLbl}</div>
//                 </div>
//               </div>
//             </div>
//             <div className="proj-nav">
//               <button className="proj-btn" onClick={() => { setAutoPlay(false); setProjIdx(i => (i-1+projects.length)%projects.length); }}>‹</button>
//               <div className="proj-dots">
//                 {projects.map((_,i) => (
//                   <button key={i} className={`proj-dot${projIdx===i?" active":""}`} onClick={() => { setAutoPlay(false); setProjIdx(i); }} />
//                 ))}
//               </div>
//               <span className="proj-counter">{projIdx+1} / {projects.length}</span>
//               <button className="proj-btn" onClick={() => { setAutoPlay(false); setProjIdx(i => (i+1)%projects.length); }}>›</button>
//             </div>
//           </div>
//         </div>

//         {/* ══ FAQ ══ */}
//         <div className="faq-section">
//           <LottiePlayer src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" style={{ position:"absolute", left:30, top:"50%", transform:"translateY(-50%)", width:120, height:120, opacity:0.18, pointerEvents:"none" }} />
//           <LottiePlayer src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" style={{ position:"absolute", right:30, top:"50%", transform:"translateY(-50%)", width:120, height:120, opacity:0.18, pointerEvents:"none" }} />
//           <div className="faq-inner">
//             <div className="faq-label">FAQ</div>
//             <h2 className="faq-title">वारंवार विचारले जाणारे प्रश्न</h2>
//             <div className="faq-list">
//               {faqs.map((f, i) => (
//                 <div key={i} className={`faq-item${faqOpen === i ? " faq-active" : ""}`}>
//                   <button className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
//                     <span className="faq-q-text">{f.q}</span>
//                     <span className="faq-icon">+</span>
//                   </button>
//                   <div className="faq-answer">
//                     <p className="faq-a-text">{f.a}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ══ NOTICE ══ */}
//         <div className="notice">
//           <span className="notice-icon">⚠️</span>
//           <div>
//             <div className="notice-title">महत्त्वाची सूचना</div>
//             <div className="notice-text">
//               भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही.
//               Appointment confirm होण्यासाठी admin approval आवश्यक आहे.
//               कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा.
//             </div>
//           </div>
//         </div>

//         {/* ══ CTA ══ */}
//         <div className="cta">
//           <LottiePlayer src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" style={{ position:"absolute", left:60, top:"50%", transform:"translateY(-50%)", width:150, height:150, opacity:0.1, pointerEvents:"none" }} />
//           <LottiePlayer src="https://assets9.lottiefiles.com/packages/lf20_touohxv0.json" style={{ position:"absolute", right:60, top:"50%", transform:"translateY(-50%)", width:150, height:150, opacity:0.1, pointerEvents:"none" }} />
//         </div>

//       </div>
//     </>
//   );
// }


// =================================
// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import heroBg from "../assets/vvcmcbuildingbanner.png";
// import mayorPhoto from "../assets/ajivsir1.jpeg";
// import meeting from "../assets/meeting2.jpeg";
// import narangibridgepahani from "../assets/narangibridgeahani.jpeg";

// function LottiePlayer({ src, style, loop = true }) {
//   const ref = useRef(null);
//   useEffect(() => {
//     let anim;
//     const init = () => {
//       if (window.lottie && ref.current) {
//         ref.current.innerHTML = "";
//         anim = window.lottie.loadAnimation({ container: ref.current, renderer: "svg", loop, autoplay: true, path: src });
//       }
//     };
//     if (!window.lottie) {
//       const s = document.createElement("script");
//       s.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js";
//       s.onload = init;
//       document.head.appendChild(s);
//     } else { init(); }
//     return () => anim && anim.destroy();
//   }, [src]);
//   return <div ref={ref} style={style} />;
// }

// export default function Home() {
//   const navigate = useNavigate();
//   const citizen = (() => { try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; } })();
//   const [faqOpen, setFaqOpen] = useState(null);
//   const [projIdx, setProjIdx] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);

//   const projects = [
//     { icon: ":🌉", tag: "पायाभूत सुविधा", title: "नारंगी उड्डाणपूल प्रकल्प पाहणी", desc: "नारंगी येथील उड्डाणपुलाच्या कामाची मा. महापौर श्री. अजीव पाटील यांनी प्रत्यक्ष पाहणी केली. या पाहणीदरम्यान संबंधित अधिकारी, रेल्वे अधिकारी, कंत्राटदार व उपकंत्राटदार यांच्याशी चर्चा करून कामाची प्रगती व अडचणी जाणून घेतल्या. तसेच कामाला अधिक गती देण्याच्या सूचना दिल्या. हा उड्डाणपूल चालू महिन्याच्या अखेरीपर्यंत वाहतुकीसाठी खुला करण्याचा प्रयत्न सुरू आहे.", progress: 68, status: "ongoing", statusLabel: "सुरू आहे", budget: "₹ 42 कोटी", deadline: "डिसेंबर 2025", stat: "", statLbl: "मार्च २०२६ अखेर वाहतुकीसाठी खुले", accent: "#51ABAC", bg: "#e8f7f7", bgimg: narangibridgepahani },
//     { icon: "🏛️", title: "समिती गठनाबाबत चर्चा", desc: "स्थायी समितीच्या महत्त्वाच्या विषयांवर तसेच प्रभाग समित्यांच्या गठनाबाबत  चर्चा सुरू आहे.", progress: 45, status: "ongoing", statusLabel: "सुरू आहे", budget: "₹ 85 कोटी", deadline: "मार्च 2026", stat: "", statLbl: "", accent: "#028945", bg: "#e8f5ef", bgimg: meeting },
//     { icon: "💧", tag: "पाणीपुरवठा", title: "24×7 पाणीपुरवठा योजना — वसई विभाग", desc: "वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे.", progress: 45, status: "ongoing", statusLabel: "सुरू आहे", budget: "₹ 85 कोटी", deadline: "मार्च 2026", stat: "1.2 लाख", statLbl: "लाभार्थी कुटुंबे", accent: "#028945", bg: "#e8f5ef" },
//     { icon: "🏫", tag: "शिक्षण", title: "VVCMC शाळा डिजिटलायझेशन उपक्रम", desc: "महानगरपालिकेच्या सर्व शाळांमध्ये स्मार्ट बोर्ड, संगणक लॅब आणि इंटरनेट सुविधा उपलब्ध करणे. विद्यार्थ्यांना डिजिटल शिक्षण देण्यासाठी हा उपक्रम राबवला जात आहे.", progress: 30, status: "planning", statusLabel: "नियोजन", budget: "₹ 18 कोटी", deadline: "जून 2026", stat: "94", statLbl: "शाळा डिजिटल", accent: "#D09A50", bg: "#fdf3e0" },
//     { icon: "🌳", tag: "पर्यावरण", title: "हरित वसई-विरार — वृक्षारोपण मोहीम", desc: "महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट.", progress: 55, status: "ongoing", statusLabel: "सुरू आहे", budget: "₹ 8 कोटी", deadline: "ऑगस्ट 2025", stat: "5 लाख", statLbl: "झाडे लावणार", accent: "#028945", bg: "#e8f5ef" },
//   ];

//   useEffect(() => {
//     if (!autoPlay) return;
//     const t = setInterval(() => { setProjIdx(i => (i + 1) % projects.length); }, 4000);
//     return () => clearInterval(t);
//   }, [autoPlay, projects.length]);

//   const faqs = [
//     { q: "शहराचा विचार केला तर फेरीवाला धोरण अजूनही राबवण्यात आलेले नाही. त्यामुळे वाहतूक कोंडीचा मोठा सामना करावा लागत आहे आणि लोकांना त्रास होत आहे. यामधून आपण कसा मार्ग काढणार आहोत?", a: "वाहतूक कोंडी कमी करण्यासाठी आणि स्टेशन परिसरातील समस्या सोडवण्यासाठी न्यायालयाच्या मार्गदर्शक तत्त्वांनुसार लवकरात लवकर कारवाई करण्यात येईल. संपूर्ण स्टेशन परिसर टप्प्याटप्प्याने मोकळा करून नागरिकांना होणारा त्रास कमी करण्यावर भर दिला जाईल." },
//     { q: "Appointment बुक करण्यासाठी काय करावे लागेल?", a: "प्रथम Register करा, त्यानंतर उपलब्ध date आणि time slot निवडा, आवश्यक माहिती भरा आणि Submit करा. Admin approval नंतर तुम्हाला Confirmation Token मिळेल." },
//     { q: "Appointment confirm होण्यासाठी किती वेळ लागतो?", a: "Appointment submit केल्यानंतर Admin द्वारे review केले जाते. साधारणतः 1-2 कार्यालयीन दिवसांत confirmation दिली जाते. SMS आणि Portal वर status दिसेल." },
//     { q: "भेटीच्या दिवशी काय घेऊन यावे?", a: "भेटीच्या दिवशी तुमचा Confirmation Token आणि एक valid ओळखपत्र (Aadhar Card, Voter ID इ.) सोबत आणावे. Token शिवाय भेट होणार नाही." },
//     { q: "Appointment Cancel किंवा Reschedule करता येते का?", a: "होय, तुम्ही 'My Appointments' section मध्ये जाऊन Appointment cancel किंवा reschedule करू शकता. भेटीच्या 24 तास आधी बदल करणे आवश्यक आहे." },
//     { q: "एका दिवशी किती नागरिक भेट घेऊ शकतात?", a: "Mayor साहेबांच्या schedule नुसार प्रत्येक दिवशी मर्यादित slots उपलब्ध असतात. Slots संपल्यावर त्या दिवसाचे booking बंद होते, त्यामुळे लवकर बुक करा." },
//   ];

//   const steps = [
//     { lottie: "https://assets3.lottiefiles.com/packages/lf20_jbb3xnwi.json", title: "Register करा", desc: "Mobile number वापरून account तयार करा — फक्त 1 मिनिट" },
//     { lottie: "https://assets4.lottiefiles.com/packages/lf20_tljjahng.json", title: "Date निवडा", desc: "Mayor च्या available dates आणि time slots मधून निवडा" },
//     { lottie: "https://assets9.lottiefiles.com/packages/lf20_xyadoh9h.json", title: "Details भरा", desc: "भेटीचे कारण, visitors संख्या आणि photo द्या" },
//     { lottie: "https://assets10.lottiefiles.com/packages/lf20_attdh2fv.json", title: "Token मिळवा", desc: "Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा" },
//   ];

//   const p = projects[projIdx];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         :root { --teal:#51ABAC; --green:#028945; --gold:#F5E6BF; --blue:#4CABBF; }

//         /* ══ HERO ══ */
//         .hero { position:relative; min-height:calc(100vh - 64px); display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:80px 24px 72px; overflow:hidden; }
//         .hero::before { content:''; position:absolute; inset:0; background-image:url(${heroBg}); background-size:cover; background-position:center top; background-repeat:no-repeat; z-index:0; }
//         .hero::after { content:''; position:absolute; inset:0; background:rgba(40,120,120,0.72); z-index:1; }
//         .hero > * { position:relative; z-index:2; }
//         .hero-orbit { position:absolute; inset:0; z-index:2; pointer-events:none; }
//         .hero-float { position:absolute; background:rgba(208,154,80,0.92); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:18px; box-shadow:0 4px 20px rgba(0,0,0,0.25); animation:floatBob 3s ease-in-out infinite; }
//         .hero-float.f1{width:52px;height:52px;top:28%;left:8%;animation-delay:0s}
//         .hero-float.f2{width:44px;height:44px;top:60%;left:16%;animation-delay:0.7s}
//         .hero-float.f3{width:52px;height:52px;top:22%;right:8%;animation-delay:1.1s}
//         .hero-float.f4{width:44px;height:44px;top:58%;right:14%;animation-delay:0.4s}
//         @keyframes floatBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
//         .hero-jansanwad { font-family:'Tiro Devanagari Marathi',serif; font-size:clamp(52px,10vw,96px); font-weight:800; color:#F5D87A; line-height:1.05; margin-bottom:18px; text-shadow:0 4px 32px rgba(0,0,0,0.3),0 2px 8px rgba(0,0,0,0.2); letter-spacing:-1px; }
//         .hero-title-underline { width:80px; height:4px; background:linear-gradient(90deg,#D09A50,#F5D87A,#D09A50); border-radius:2px; margin:0 auto 22px; animation:shimmer 2.5s ease-in-out infinite; }
//         @keyframes shimmer{0%,100%{opacity:1}50%{opacity:0.6}}
//         .hero-desc { font-family:'Tiro Devanagari Marathi',serif; font-size:clamp(14px,2.2vw,19px); font-weight:600; color:rgba(255,255,255,0.93); max-width:620px; margin:0 auto 40px; line-height:1.7; text-shadow:0 2px 12px rgba(0,0,0,0.25); }
//         .hero-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
//         .hero-btn-primary { padding:14px 36px; border-radius:12px; border:none; background:#028945; color:#fff; font-weight:700; font-size:15px; font-family:'DM Sans',sans-serif; cursor:pointer; transition:all .2s; box-shadow:0 4px 20px rgba(2,137,69,0.45); letter-spacing:0.2px; }
//         .hero-btn-primary:hover { background:#016d38; transform:translateY(-2px); box-shadow:0 8px 28px rgba(2,137,69,0.55); }
//         .hero-btn-outline { padding:14px 36px; border-radius:12px; border:2px solid rgba(245,216,122,0.85); background:transparent; color:#F5D87A; font-weight:700; font-size:15px; font-family:'DM Sans',sans-serif; cursor:pointer; transition:all .2s; }
//         .hero-btn-outline:hover { background:rgba(245,216,122,0.15); transform:translateY(-2px); border-color:#F5D87A; }

//         /* ══ HOW IT WORKS ══ */
//         .hiw-section { padding:72px 24px 80px; background:#ffffff; position:relative; }
//         .hiw-section::before { content:''; position:absolute; inset:0; background-image:radial-gradient(circle at 15% 50%,rgba(81,171,172,0.06) 0%,transparent 55%),radial-gradient(circle at 85% 20%,rgba(2,137,69,0.05) 0%,transparent 50%); pointer-events:none; }
//         .hiw-inner { max-width:1080px; margin:0 auto; position:relative; z-index:1; }
//         .hiw-header { text-align:center; margin-bottom:52px; }
//         .hiw-title { font-family:'Crimson Pro',serif; font-size:clamp(28px,4.5vw,44px); font-weight:800; color:#1a1a1a; margin-bottom:12px; line-height:1.2; }
//         .hiw-title-bar { width:64px; height:4px; background:linear-gradient(90deg,#D09A50,#F5D87A); border-radius:2px; margin:0 auto 14px; }
//         .hiw-sub { font-family:'DM Sans',sans-serif; color:#6b7280; font-size:15px; font-weight:400; }
//         .hiw-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; align-items:stretch; }
//         .hiw-grid-wrap { position:relative; }
//         .hiw-connector { position:absolute; top:52px; left:calc(12.5% + 20px); right:calc(12.5% + 20px); height:2px; background:linear-gradient(90deg,rgba(81,171,172,0.3),rgba(81,171,172,0.6),rgba(81,171,172,0.3)); z-index:0; pointer-events:none; }
//         .hiw-card { background:#ffffff; border-radius:20px; padding:36px 22px 28px; text-align:center; border:1.5px solid rgba(81,171,172,0.18); box-shadow:0 4px 24px rgba(81,171,172,0.10),0 1px 4px rgba(0,0,0,0.04); transition:transform .25s,box-shadow .25s,border-color .25s; position:relative; z-index:1; display:flex; flex-direction:column; align-items:center; }
//         .hiw-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg,var(--teal),var(--green)); border-radius:20px 20px 0 0; }
//         .hiw-card:hover { transform:translateY(-8px); box-shadow:0 16px 40px rgba(81,171,172,0.22),0 4px 12px rgba(0,0,0,0.06); border-color:rgba(81,171,172,0.4); }
//         .hiw-icon-wrap { width:72px; height:72px; border-radius:50%; background:linear-gradient(135deg,#51ABAC,#028945); display:flex; align-items:center; justify-content:center; margin:0 auto 20px; box-shadow:0 6px 20px rgba(81,171,172,0.35); flex-shrink:0; }
//         .hiw-num { position:absolute; top:14px; right:16px; width:26px; height:26px; border-radius:50%; background:linear-gradient(135deg,var(--teal),var(--green)); color:#fff; font-size:11px; font-weight:800; font-family:'DM Sans',sans-serif; display:flex; align-items:center; justify-content:center; }
//         .hiw-step-title { font-family:'DM Sans',sans-serif; font-weight:700; color:#1a4a2e; font-size:15px; margin-bottom:10px; line-height:1.3; }
//         .hiw-step-desc { font-family:'DM Sans',sans-serif; font-size:13px; color:#6b7280; line-height:1.65; flex:1; }

//         /* ══════════════════════════════════════
//            MAYOR SECTION — pixel-perfect screenshot
//            Layout: LEFT text | MIDDLE bubbles | RIGHT phone
//            BG: dark teal gradient + chevron arrows top-right + diamonds + gold triangle bottom-right
//         ══════════════════════════════════════ */
//         .mayor-section {
//           width: 100%;
//           position: relative;
//           background: linear-gradient(135deg, #1e7575 0%, #155858 40%, #0d3e3e 100%);
//           overflow: hidden;
//           display: flex;
//           align-items: center;
//           min-height: 520px;
//           padding: 64px 5% 64px 6%;
//           gap: 0;
//         }

//         /* Gold top border line */
//         .mayor-section::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 3px;
//           background: linear-gradient(90deg, transparent 0%, #C9963A 20%, #e8b84b 50%, #C9963A 80%, transparent 100%);
//           z-index: 5;
//         }

//         /* Chevron/arrow pattern — top right */
//         .mayor-chevrons {
//           position: absolute;
//           top: 0; right: 0;
//           width: 260px;
//           height: 240px;
//           pointer-events: none;
//           z-index: 1;
//           overflow: hidden;
//         }

//         /* Small diamond shapes scattered */
//         .mayor-diamond {
//           position: absolute;
//           pointer-events: none;
//           z-index: 1;
//         }
//         .mayor-diamond svg { opacity: 0.45; }

//         /* Gold triangle accent — bottom right */
//         .mayor-gold-tri {
//           position: absolute;
//           bottom: 0; right: 0;
//           width: 180px; height: 120px;
//           pointer-events: none;
//           z-index: 1;
//           overflow: hidden;
//         }

//         /* Subtle radial glow center-right */
//         .mayor-glow {
//           position: absolute;
//           top: 50%; right: 30%;
//           transform: translateY(-50%);
//           width: 400px; height: 400px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(81,171,172,0.12) 0%, transparent 70%);
//           pointer-events: none;
//           z-index: 1;
//         }

//         /* ── LEFT: text content ── */
//         .mayor-left {
//           position: relative;
//           z-index: 3;
//           flex: 0 0 auto;
//           width: 42%;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           padding-right: 16px;
//         }

//         /* Big white line 1 */
//         .mayor-heading-line1 {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(36px, 5.5vw, 68px);
//           font-weight: 800;
//           color: #ffffff;
//           line-height: 1.1;
//           margin: 0;
//           text-shadow: 0 3px 20px rgba(0,0,0,0.3);
//           letter-spacing: -0.5px;
//         }

//         /* Big golden line 2 */
//         .mayor-heading-line2 {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(36px, 5.5vw, 68px);
//           font-weight: 800;
//           color: #D4A843;
//           line-height: 1.1;
//           margin: 0 0 28px 0;
//           text-shadow: 0 3px 20px rgba(0,0,0,0.25);
//           letter-spacing: -0.5px;
//         }

//         .mayor-bio {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 14px;
//           color: rgba(255,255,255,0.78);
//           line-height: 1.85;
//           margin-bottom: 36px;
//           max-width: 440px;
//         }

//         .mayor-btn-primary {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 13px 30px;
//           border-radius: 8px;
//           border: none;
//           background: #028945;
//           color: #fff;
//           font-weight: 700;
//           font-size: 14px;
//           font-family: 'DM Sans', sans-serif;
//           cursor: pointer;
//           transition: all .2s;
//           box-shadow: 0 4px 18px rgba(2,137,69,0.4);
//           width: fit-content;
//         }
//         .mayor-btn-primary:hover { background: #016d38; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(2,137,69,0.5); }

//         /* ── MIDDLE: 3 icon bubbles ── */
//         .mayor-bubbles {
//           position: relative;
//           z-index: 3;
//           flex: 0 0 auto;
//           width: 100px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 18px;
//           margin: 0 16px;
//         }

//         .mayor-bubble-item {
//           width: 62px;
//           height: 62px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.12);
//           backdrop-filter: blur(10px);
//           border: 1.5px solid rgba(255,255,255,0.25);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 6px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.15);
//           animation: mBob 3.5s ease-in-out infinite;
//           flex-shrink: 0;
//         }
//         .mayor-bubble-item:nth-child(1) { animation-delay: 0s; }
//         .mayor-bubble-item:nth-child(2) { animation-delay: 0.7s; }
//         .mayor-bubble-item:nth-child(3) { animation-delay: 1.4s; }
//         @keyframes mBob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }

//         /* ── RIGHT: phone mockup ── */
//         .mayor-right {
//           position: relative;
//           z-index: 3;
//           flex: 1;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           min-height: 400px;
//         }

//         /* Teal glow behind phone */
//         .mayor-phone-glow {
//           position: absolute;
//           top: 50%; left: 50%;
//           transform: translate(-50%, -50%);
//           width: 320px; height: 320px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(81,171,172,0.22) 0%, transparent 65%);
//           pointer-events: none;
//           z-index: 1;
//         }

//         /* Phone frame */
//         .mayor-phone {
//           position: relative;
//           z-index: 2;
//           width: 210px;
//           background: #061a1a;
//           border-radius: 36px;
//           padding: 8px;
//           box-shadow:
//             0 0 0 2px rgba(100,200,200,0.5),
//             0 0 0 5px rgba(81,171,172,0.15),
//             0 32px 80px rgba(0,0,0,0.6),
//             0 8px 24px rgba(0,0,0,0.4);
//           transform: rotate(-2deg);
//         }

//         /* Notch bar */
//         .mayor-phone::before {
//           content: '';
//           position: absolute;
//           top: 14px; left: 50%;
//           transform: translateX(-50%);
//           width: 46px; height: 5px;
//           background: #061a1a;
//           border-radius: 3px;
//           z-index: 5;
//         }

//         .mayor-phone-inner {
//           border-radius: 30px;
//           overflow: hidden;
//           background: #fff;
//         }

//         .mayor-phone-img {
//           width: 100%;
//           height: 260px;
//           object-fit: cover;
//           object-position: top center;
//           display: block;
//         }

//         .mayor-phone-badge {
//           padding: 10px 12px 13px;
//           background: #fff;
//           border-top: 1px solid #f0f0f0;
//         }

//         .mayor-phone-badge-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 11.5px;
//           font-weight: 800;
//           color: #1a1a1a;
//           line-height: 1.4;
//         }

//         .mayor-phone-badge-title {
//           font-size: 9px;
//           color: #51ABAC;
//           font-weight: 700;
//           margin-top: 2px;
//           text-transform: uppercase;
//           letter-spacing: 0.4px;
//         }

//         /* ══ PROJECTS ══ */
//         .projects-section { padding:72px 32px; background:#fff; border-top:1px solid rgba(81,171,172,0.1); border-bottom:1px solid rgba(81,171,172,0.1); }
//         .projects-inner { max-width:1060px; margin:0 auto; }
//         .section-header { text-align:center; margin-bottom:56px; }
//         .section-tag { display:inline-block; background:rgba(76,171,191,0.12); color:var(--blue); font-size:12px; font-weight:700; padding:5px 16px; border-radius:999px; margin-bottom:14px; letter-spacing:0.6px; text-transform:uppercase; }
//         .section-title { font-family:'Crimson Pro',serif; font-size:clamp(28px,4vw,40px); font-weight:800; color:#1a4a2e; margin-bottom:8px; }
//         .section-sub { color:#6b7280; font-size:15px; }
//         .proj-card { display:flex; border-radius:24px; overflow:hidden; box-shadow:0 12px 48px rgba(0,0,0,0.1); min-height:300px; transition:box-shadow .3s; background:#fff; }
//         .proj-left { flex:1; padding:44px 48px; background:transparent; display:flex; flex-direction:column; justify-content:center; border:1px solid rgba(81,171,172,0.12); border-right:none; border-radius:24px 0 0 24px; background-size:cover; background-position:top; background-repeat:no-repeat; }
//         .proj-tag { display:inline-flex; align-items:center; gap:6px; font-size:11px; font-weight:700; padding:4px 14px; border-radius:999px; text-transform:uppercase; letter-spacing:0.6px; margin-bottom:16px; width:fit-content; }
//         .proj-title { font-family:'Tiro Devanagari Marathi',serif; font-size:clamp(17px,2.4vw,24px); font-weight:800; color:#1a1a1a; margin-bottom:14px; line-height:1.35; }
//         .proj-desc { font-family:'Tiro Devanagari Marathi',serif; font-size:13.5px; color:#6b7280; line-height:1.8; margin-bottom:22px; max-width:480px; }
//         .proj-progress-row { display:flex; justify-content:space-between; margin-bottom:6px; }
//         .proj-progress-lbl { font-size:12px; font-weight:600; color:#4b5563; }
//         .proj-progress-pct { font-size:13px; font-weight:800; }
//         .proj-bar { height:10px; background:#f1f5f9; border-radius:999px; overflow:hidden; margin-bottom:20px; }
//         .proj-bar-fill { height:100%; border-radius:999px; transition:width 0.6s ease; }
//         .proj-meta { display:flex; align-items:center; gap:16px; flex-wrap:wrap; }
//         .proj-meta-item { font-size:12.5px; color:#6b7280; display:flex; align-items:center; gap:5px; }
//         .proj-meta-item strong { color:#1a1a1a; }
//         .proj-chip { font-size:11px; font-weight:700; padding:4px 12px; border-radius:999px; text-transform:uppercase; }
//         .chip-ongoing { background:rgba(2,137,69,0.1); color:#028945; }
//         .chip-planning { background:rgba(208,154,80,0.15); color:#b8860b; }
//         .proj-right { width:220px; flex-shrink:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:18px; padding:32px 20px; border-radius:0 24px 24px 0; transition:background 0.5s; }
//         .proj-icon { font-size:64px; line-height:1; filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15)); }
//         .proj-stat-num { font-family:'Crimson Pro',serif; font-size:38px; font-weight:800; color:#fff; text-align:center; line-height:1; }
//         .proj-stat-lbl { font-size:11px; color:rgba(255,255,255,0.82); font-weight:700; text-transform:uppercase; letter-spacing:0.5px; text-align:center; }
//         .proj-nav { display:flex; align-items:center; justify-content:center; gap:14px; margin-top:28px; }
//         .proj-btn { width:42px; height:42px; border-radius:50%; border:1.5px solid rgba(81,171,172,0.4); background:#fff; color:#51ABAC; font-size:20px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .2s; box-shadow:0 2px 8px rgba(0,0,0,0.06); }
//         .proj-btn:hover { background:#51ABAC; color:#fff; border-color:#51ABAC; transform:scale(1.08); }
//         .proj-dots { display:flex; gap:7px; align-items:center; }
//         .proj-dot { width:9px; height:9px; border-radius:50%; background:rgba(81,171,172,0.3); border:none; cursor:pointer; padding:0; transition:all .25s; }
//         .proj-dot.active { background:#51ABAC; width:26px; border-radius:5px; }
//         .proj-counter { font-size:12px; font-weight:600; color:#9ca3af; }

//         /* ══ FAQ ══ */
//         .faq-section { width:100%; background:var(--teal); padding:80px 24px; position:relative; overflow:hidden; }
//         .faq-section::before { content:''; position:absolute; top:-80px; left:50%; transform:translateX(-50%); width:700px; height:500px; background:radial-gradient(ellipse,rgba(255,255,255,0.12) 0%,transparent 70%); pointer-events:none; }
//         .faq-inner { max-width:720px; margin:0 auto; position:relative; z-index:1; }
//         .faq-label { text-align:center; font-size:13px; font-weight:700; color:rgba(255,255,255,0.75); letter-spacing:1.2px; text-transform:uppercase; margin-bottom:14px; }
//         .faq-title { font-family:'Crimson Pro',serif; font-size:clamp(26px,4vw,42px); font-weight:800; color:#fff; text-align:center; line-height:1.25; margin-bottom:48px; }
//         .faq-list { display:flex; flex-direction:column; gap:12px; }
//         .faq-item { background:rgba(255,255,255,0.1); border:1.5px solid rgba(255,255,255,0.22); border-radius:16px; overflow:hidden; transition:all 0.25s; }
//         .faq-item.faq-active { background:rgba(255,255,255,0.18); border-color:rgba(255,255,255,0.5); }
//         .faq-q { width:100%; display:flex; align-items:center; justify-content:space-between; padding:20px 24px; background:none; border:none; cursor:pointer; text-align:left; gap:16px; }
//         .faq-q-text { font-family:'Tiro Devanagari Marathi',serif; font-size:16px; font-weight:600; color:#fff; line-height:1.5; flex:1; }
//         .faq-icon { flex-shrink:0; width:32px; height:32px; border-radius:50%; border:1.5px solid rgba(255,255,255,0.55); display:flex; align-items:center; justify-content:center; color:#fff; font-size:20px; font-weight:300; transition:transform 0.3s,background 0.3s; }
//         .faq-item.faq-active .faq-icon { background:#fff; color:var(--teal); transform:rotate(45deg); }
//         .faq-answer { max-height:0; overflow:hidden; transition:max-height 0.4s ease,padding 0.3s; padding:0 24px; }
//         .faq-item.faq-active .faq-answer { max-height:300px; padding:0 24px 20px; }
//         .faq-a-text { font-family:'Tiro Devanagari Marathi',serif; font-size:14px; color:rgba(255,255,255,0.88); line-height:1.85; border-top:1px solid rgba(255,255,255,0.18); padding-top:16px; }

//         /* ══ NOTICE ══ */
//         .notice { background:linear-gradient(135deg,#fef9c3,#fef3c7); border:1px solid #fde68a; border-radius:16px; padding:24px 28px; margin:40px auto; display:flex; gap:16px; align-items:flex-start; max-width:1036px; }
//         .notice-icon { font-size:28px; flex-shrink:0; }
//         .notice-title { font-weight:700; color:#92400e; font-size:15px; margin-bottom:6px; }
//         .notice-text { font-size:13px; color:#a16207; line-height:1.6; }

//         /* ══ CTA ══ */
//         .cta { background:linear-gradient(135deg,var(--green) 0%,#014d28 100%); color:#fff; padding:72px 32px; text-align:center; position:relative; overflow:hidden; }
//         .cta::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse at 50% 0%,rgba(76,171,191,0.25) 0%,transparent 65%); pointer-events:none; }
//         .cta-inner { position:relative; z-index:1; }
//         .cta-title { font-family:'Crimson Pro',serif; font-size:clamp(28px,4vw,40px); font-weight:800; margin-bottom:12px; }
//         .cta-sub { color:rgba(255,255,255,0.8); font-size:16px; margin-bottom:36px; }
//         .cta-btn { padding:15px 48px; border-radius:14px; border:none; background:#fff; color:var(--green); font-weight:800; font-size:16px; cursor:pointer; box-shadow:0 8px 28px rgba(0,0,0,0.18); transition:all .2s; }
//         .cta-btn:hover { transform:translateY(-3px); box-shadow:0 14px 36px rgba(0,0,0,0.25); }

//         /* ══ RESPONSIVE ══ */
//         @media(max-width:1024px){
//           .hiw-grid{grid-template-columns:repeat(2,1fr);gap:20px}
//           .hiw-connector{display:none}
//           .mayor-phone{width:185px}
//           .mayor-phone-img{height:230px}
//           .mayor-bubbles{width:80px;gap:14px}
//           .mayor-bubble-item{width:54px;height:54px}
//         }
//         @media(max-width:768px){
//           .hero{min-height:calc(100svh - 64px);padding:60px 20px 56px}
//           .hero-float.f1,.hero-float.f2{left:3%}
//           .hero-float.f3,.hero-float.f4{right:3%}
//           .hero-float.f1,.hero-float.f3{width:40px;height:40px;font-size:15px}
//           .hero-float.f2,.hero-float.f4{width:36px;height:36px;font-size:13px}
//           .hiw-section{padding:52px 16px 60px}
//           .hiw-grid{grid-template-columns:repeat(2,1fr);gap:16px}
//           .hiw-card{padding:28px 16px 22px}
//           .hiw-icon-wrap{width:60px;height:60px}

//           .mayor-section{flex-direction:column;padding:48px 24px 56px;gap:36px}
//           .mayor-left{width:100%;padding-right:0}
//           .mayor-bubbles{flex-direction:row;width:100%;justify-content:flex-start;gap:14px;margin:0}
//           .mayor-right{width:100%;min-height:unset;justify-content:flex-start}
//           .mayor-phone{transform:none}

//           .proj-card{flex-direction:column}
//           .proj-left{border-radius:24px 24px 0 0;border-right:1px solid rgba(81,171,172,0.12);border-bottom:none;padding:28px 24px}
//           .proj-right{width:100%;border-radius:0 0 24px 24px;flex-direction:row;justify-content:center;gap:24px;padding:20px 24px}
//           .notice{margin:24px 16px}
//           .faq-section{padding:60px 16px}
//         }
//         @media(max-width:480px){
//           .hero{padding:48px 16px 48px}
//           .hero-btns{flex-direction:column;align-items:center}
//           .hero-btn-primary,.hero-btn-outline{width:100%;max-width:300px;text-align:center}
//           .hiw-section{padding:44px 14px 52px}
//           .hiw-grid{grid-template-columns:1fr;gap:14px}
//           .hiw-connector{display:none}
//           .hiw-title{font-size:26px}
//           .mayor-section{padding:36px 20px 44px}
//           .mayor-heading-line1,.mayor-heading-line2{font-size:clamp(28px,8vw,44px)}
//           .mayor-phone{width:160px}
//           .mayor-phone-img{height:200px}
//           .mayor-btn-primary{width:100%;justify-content:center}
//           .proj-right{flex-direction:column;gap:12px}
//           .proj-stat-num{font-size:28px}
//           .faq-q-text{font-size:14px}
//         }
//         @media(max-width:360px){
//           .hero-jansanwad{font-size:40px}
//           .hero-float{display:none}
//           .mayor-bubble-item{width:44px;height:44px}
//         }
//       `}</style>

//       <div className="home-root">

//         {/* ══ HERO ══ */}
//         <div className="hero">
//           <div className="hero-orbit" aria-hidden="true">
//             <div className="hero-float f1">📅</div>
//             <div className="hero-float f2">👥</div>
//             <div className="hero-float f3">📅</div>
//             <div className="hero-float f4">👤</div>
//           </div>
//           <h1 className="hero-jansanwad">जन संवाद</h1>
//           <div className="hero-title-underline" />
//           <p className="hero-desc">नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ</p>
//           <div className="hero-btns">
//             {citizen ? (
//               <>
//                 <button className="hero-btn-primary" onClick={() => navigate("/book-appointment")}>📅 Book Appointment</button>
//                 <button className="hero-btn-outline" onClick={() => navigate("/my-appointments")}>📋 My Appointments</button>
//               </>
//             ) : (
//               <>
//                 <button className="hero-btn-primary" onClick={() => navigate("/register")}>🚀 Get Started — Register</button>
//                 <button className="hero-btn-outline" onClick={() => navigate("/login")}>Login करा</button>
//               </>
//             )}
//           </div>
//         </div>

//         {/* ══ HOW IT WORKS ══ */}
//         <div className="hiw-section">
//           <div className="hiw-inner">
//             <div className="hiw-header">
//               <h2 className="hiw-title">कसे काम करते?</h2>
//               <div className="hiw-title-bar" />
//               <p className="hiw-sub">फक्त 4 सोप्या steps मध्ये Mayor ची भेट बुक करा</p>
//             </div>
//             <div className="hiw-grid-wrap">
//               <div className="hiw-connector" aria-hidden="true" />
//               <div className="hiw-grid">
//                 {steps.map((s, i) => (
//                   <div key={i} className="hiw-card">
//                     <div className="hiw-num">{i + 1}</div>
//                     <div className="hiw-icon-wrap">
//                       <LottiePlayer src={s.lottie} style={{ width: 44, height: 44 }} />
//                     </div>
//                     <div className="hiw-step-title">{s.title}</div>
//                     <div className="hiw-step-desc">{s.desc}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ══ MAYOR SECTION — pixel-perfect screenshot ══ */}
//         <div className="mayor-section">

//           {/* Chevron arrows — top right (matches screenshot) */}
//           <div className="mayor-chevrons" aria-hidden="true">
//             <svg width="260" height="240" viewBox="0 0 260 240" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <g opacity="0.18" stroke="#7ecece" strokeWidth="1.5" fill="none">
//                 <polyline points="220,10 240,30 220,50"/>
//                 <polyline points="200,10 220,30 200,50"/>
//                 <polyline points="180,10 200,30 180,50"/>
//                 <polyline points="220,50 240,70 220,90"/>
//                 <polyline points="200,50 220,70 200,90"/>
//                 <polyline points="180,50 200,70 180,90"/>
//                 <polyline points="220,90 240,110 220,130"/>
//                 <polyline points="200,90 220,110 200,130"/>
//                 <polyline points="230,130 250,150 230,170"/>
//                 <polyline points="210,130 230,150 210,170"/>
//               </g>
//               {/* Small diamonds */}
//               <rect x="140" y="20" width="10" height="10" rx="1" transform="rotate(45 145 25)" fill="#7ecece" opacity="0.25"/>
//               <rect x="100" y="60" width="8" height="8" rx="1" transform="rotate(45 104 64)" fill="#7ecece" opacity="0.2"/>
//               <rect x="160" y="100" width="7" height="7" rx="1" transform="rotate(45 163 103)" fill="#c9a040" opacity="0.3"/>
//             </svg>
//           </div>

//           {/* Small scattered diamond */}
//           <div className="mayor-diamond" style={{left:'44%', top:'15%'}}>
//             <svg width="14" height="14" viewBox="0 0 14 14"><rect x="1" y="1" width="12" height="12" rx="1" transform="rotate(45 7 7)" fill="#7ecece" opacity="0.5"/></svg>
//           </div>
//           <div className="mayor-diamond" style={{left:'47%', bottom:'20%'}}>
//             <svg width="10" height="10" viewBox="0 0 10 10"><rect x="1" y="1" width="8" height="8" rx="1" transform="rotate(45 5 5)" fill="#7ecece" opacity="0.4"/></svg>
//           </div>

//           {/* Gold triangle — bottom right */}
//           <div className="mayor-gold-tri" aria-hidden="true">
//             <svg width="180" height="120" viewBox="0 0 180 120" fill="none">
//               <polygon points="180,120 180,0 60,120" fill="#C9963A" opacity="0.22"/>
//               <polygon points="180,120 180,40 100,120" fill="#e8b84b" opacity="0.15"/>
//               {/* white sparkle */}
//               <circle cx="168" cy="108" r="4" fill="white" opacity="0.5"/>
//               <circle cx="168" cy="108" r="1.5" fill="white" opacity="0.9"/>
//             </svg>
//           </div>

//           {/* Radial glow */}
//           <div className="mayor-glow" aria-hidden="true" />

//           {/* LEFT: text */}
//           <div className="mayor-left">
//             <p className="mayor-heading-line1">मा. महापौर</p>
//             <p className="mayor-heading-line2">श्री. अजीव पाटील</p>
//             <p className="mayor-bio">
//               ३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे.
//             </p>
//             <button className="mayor-btn-primary" onClick={() => navigate(citizen ? "/book-appointment" : "/register")}>
//               📅 Appointment बुक करा
//             </button>
//           </div>

//           {/* MIDDLE: 3 teal icon bubbles (chat, chart, people) */}
//           <div className="mayor-bubbles">
//             {/* Bubble 1 — chat icon */}
//             <div className="mayor-bubble-item">
//               <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
//                 <circle cx="14" cy="13" r="9" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" fill="none"/>
//                 <path d="M9 13 Q14 8 19 13" stroke="rgba(255,255,255,0.85)" strokeWidth="1.3" fill="none"/>
//                 <path d="M10 16h8M10 19h5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round"/>
//                 <path d="M11 22 L13 25 L15 22" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none"/>
//                 <circle cx="10" cy="10" r="2" fill="rgba(255,255,255,0.4)"/>
//                 <circle cx="18" cy="10" r="2" fill="rgba(255,255,255,0.4)"/>
//               </svg>
//             </div>

//             {/* Bubble 2 — chart/growth icon */}
//             <div className="mayor-bubble-item">
//               <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
//                 <polyline points="6,20 11,13 16,16 22,8" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//                 <polyline points="18,8 22,8 22,12" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//                 <line x1="6" y1="22" x2="22" y2="22" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round"/>
//               </svg>
//             </div>

//             {/* Bubble 3 — people/community icon */}
//             <div className="mayor-bubble-item">
//               <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
//                 <circle cx="14" cy="9" r="3.5" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" fill="none"/>
//                 <path d="M8 22 C8 17 20 17 20 22" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
//                 <circle cx="7" cy="11" r="2.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none"/>
//                 <path d="M3 21 C3 17.5 11 17.5 11 21" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
//                 <circle cx="21" cy="11" r="2.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none"/>
//                 <path d="M17 21 C17 17.5 25 17.5 25 21" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
//                 {/* hand below */}
//                 <path d="M11 23 Q14 26 17 23" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round" fill="none"/>
//               </svg>
//             </div>
//           </div>

//           {/* RIGHT: phone mockup */}
//           <div className="mayor-right">
//             <div className="mayor-phone-glow" />
//             <div className="mayor-phone">
//               <div className="mayor-phone-inner">
//                 <img src={mayorPhoto} alt="मा. महापौर श्री. अजीव पाटील" className="mayor-phone-img" />
//                 <div className="mayor-phone-badge">
//                   <div className="mayor-phone-badge-name">मा. महापौर श्री. अजीव पाटील</div>
//                   <div className="mayor-phone-badge-title">वसई-विरार शहर महानगरपालिका</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ══ PROJECTS CAROUSEL ══ */}
//         <div className="projects-section">
//           <div className="projects-inner">
//             <div className="section-header">
//               <div className="section-tag">✦ सध्या सुरू</div>
//               <h2 className="section-title">चालू प्रकल्प</h2>
//               <p className="section-sub">वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प</p>
//             </div>
//             <div className="proj-card" onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)}
//               style={p.bgimg ? { backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.92) 55%, ${p.accent}99 100%), url(${p.bgimg})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}>
//               <div className="proj-left" style={{ background: 'transparent', border: p.bgimg ? 'none' : '1px solid rgba(81,171,172,0.12)', borderRight: 'none' }}>
//                 <div className="proj-tag" style={{ background: `${p.accent}18`, color: p.accent }}>{p.icon} {p.tag}</div>
//                 <div className="proj-title">{p.title}</div>
//                 <p className="proj-desc">{p.desc}</p>
//                 <div className="proj-progress-row">
//                   <span className="proj-progress-lbl">प्रगती</span>
//                   <span className="proj-progress-pct" style={{ color: p.accent }}>{p.progress}%</span>
//                 </div>
//                 <div className="proj-bar"><div className="proj-bar-fill" style={{ width: `${p.progress}%`, background: `linear-gradient(90deg,${p.accent}88,${p.accent})` }} /></div>
//                 <div className="proj-meta">
//                   <div className="proj-meta-item">💰 <strong>{p.budget}</strong></div>
//                   <div className="proj-meta-item">📅 <strong>{p.deadline}</strong></div>
//                   <span className={`proj-chip ${p.status === "ongoing" ? "chip-ongoing" : "chip-planning"}`}>{p.statusLabel}</span>
//                 </div>
//               </div>
//               <div className="proj-right" style={{ background: `linear-gradient(160deg,${p.accent},${p.accent}bb)` }}>
//                 <div className="proj-icon">{p.icon}</div>
//                 <div><div className="proj-stat-num">{p.stat}</div><div className="proj-stat-lbl">{p.statLbl}</div></div>
//               </div>
//             </div>
//             <div className="proj-nav">
//               <button className="proj-btn" onClick={() => { setAutoPlay(false); setProjIdx(i => (i - 1 + projects.length) % projects.length); }}>‹</button>
//               <div className="proj-dots">{projects.map((_, i) => (<button key={i} className={`proj-dot${projIdx === i ? " active" : ""}`} onClick={() => { setAutoPlay(false); setProjIdx(i); }} />))}</div>
//               <span className="proj-counter">{projIdx + 1} / {projects.length}</span>
//               <button className="proj-btn" onClick={() => { setAutoPlay(false); setProjIdx(i => (i + 1) % projects.length); }}>›</button>
//             </div>
//           </div>
//         </div>

//         {/* ══ FAQ ══ */}
//         <div className="faq-section">
//           <LottiePlayer src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" style={{ position: "absolute", left: 30, top: "50%", transform: "translateY(-50%)", width: 120, height: 120, opacity: 0.18, pointerEvents: "none" }} />
//           <LottiePlayer src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" style={{ position: "absolute", right: 30, top: "50%", transform: "translateY(-50%)", width: 120, height: 120, opacity: 0.18, pointerEvents: "none" }} />
//           <div className="faq-inner">
//             <div className="faq-label">FAQ</div>
//             <h2 className="faq-title">वारंवार विचारले जाणारे प्रश्न</h2>
//             <div className="faq-list">
//               {faqs.map((f, i) => (
//                 <div key={i} className={`faq-item${faqOpen === i ? " faq-active" : ""}`}>
//                   <button className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
//                     <span className="faq-q-text">{f.q}</span>
//                     <span className="faq-icon">+</span>
//                   </button>
//                   <div className="faq-answer"><p className="faq-a-text">{f.a}</p></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ══ NOTICE ══ */}
//         <div className="notice">
//           <span className="notice-icon">⚠️</span>
//           <div>
//             <div className="notice-title">महत्त्वाची सूचना</div>
//             <div className="notice-text">भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही. Appointment confirm होण्यासाठी admin approval आवश्यक आहे. कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा.</div>
//           </div>
//         </div>

//         {/* ══ CTA ══ */}
//         <div className="cta">
//           <LottiePlayer src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" style={{ position: "absolute", left: 60, top: "50%", transform: "translateY(-50%)", width: 150, height: 150, opacity: 0.1, pointerEvents: "none" }} />
//           <LottiePlayer src="https://assets9.lottiefiles.com/packages/lf20_touohxv0.json" style={{ position: "absolute", right: 60, top: "50%", transform: "translateY(-50%)", width: 150, height: 150, opacity: 0.1, pointerEvents: "none" }} />
//         </div>

//       </div>
//     </>
//   );
// }

// =========================

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import heroBg from "../assets/vvcmcbuildingbanner.png";
// import mayorPhoto from "../assets/ajivsir1.jpeg";
// import meeting from "../assets/meeting2.jpeg";
// import narangibridgepahani from "../assets/narangibridgeahani.jpeg";

// function LottiePlayer({ src, style, loop = true }) {
//   const ref = useRef(null);
//   useEffect(() => {
//     let anim;
//     const init = () => {
//       if (window.lottie && ref.current) {
//         ref.current.innerHTML = "";
//         anim = window.lottie.loadAnimation({ container: ref.current, renderer: "svg", loop, autoplay: true, path: src });
//       }
//     };
//     if (!window.lottie) {
//       const s = document.createElement("script");
//       s.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js";
//       s.onload = init;
//       document.head.appendChild(s);
//     } else { init(); }
//     return () => anim && anim.destroy();
//   }, [src]);
//   return <div ref={ref} style={style} />;
// }

// export default function Home() {
//   const navigate = useNavigate();
//   const citizen = (() => { try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; } })();
//   const [faqOpen, setFaqOpen] = useState(null);
//   const [projIdx, setProjIdx] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);

//   const projects = [
//     { icon: ":🌉", tag: "पायाभूत सुविधा", title: "नारंगी उड्डाणपूल प्रकल्प पाहणी", desc: "नारंगी येथील उड्डाणपुलाच्या कामाची मा. महापौर श्री. अजीव पाटील यांनी प्रत्यक्ष पाहणी केली. या पाहणीदरम्यान संबंधित अधिकारी, रेल्वे अधिकारी, कंत्राटदार व उपकंत्राटदार यांच्याशी चर्चा करून कामाची प्रगती व अडचणी जाणून घेतल्या. तसेच कामाला अधिक गती देण्याच्या सूचना दिल्या. हा उड्डाणपूल चालू महिन्याच्या अखेरीपर्यंत वाहतुकीसाठी खुला करण्याचा प्रयत्न सुरू आहे.", progress: 68, status: "ongoing", statusLabel: "सुरू आहे", budget: "₹ 42 कोटी", deadline: "डिसेंबर 2025", stat: "", statLbl: "मार्च २०२६ अखेर वाहतुकीसाठी खुले", accent: "#51ABAC", bg: "#e8f7f7", bgimg: narangibridgepahani },
//     { icon: "🏛️", title: "समिती गठनाबाबत चर्चा", desc: "स्थायी समितीच्या महत्त्वाच्या विषयांवर तसेच प्रभाग समित्यांच्या गठनाबाबत  चर्चा सुरू आहे.", progress: 45, status: "ongoing", statusLabel: "सुरू आहे", budget: "₹ 85 कोटी", deadline: "मार्च 2026", stat: "", statLbl: "", accent: "#028945", bg: "#e8f5ef", bgimg: meeting },
//     { icon: "💧", tag: "पाणीपुरवठा", title: "24×7 पाणीपुरवठा योजना — वसई विभाग", desc: "वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे.", progress: 45, status: "ongoing", statusLabel: "सुरू आहे", budget: "₹ 85 कोटी", deadline: "मार्च 2026", stat: "1.2 लाख", statLbl: "लाभार्थी कुटुंबे", accent: "#028945", bg: "#e8f5ef" },
//     // { icon: "🏫", tag: "शिक्षण", title: "VVCMC शाळा डिजिटलायझेशन उपक्रम", desc: "महानगरपालिकेच्या सर्व शाळांमध्ये स्मार्ट बोर्ड, संगणक लॅब आणि इंटरनेट सुविधा उपलब्ध करणे. विद्यार्थ्यांना डिजिटल शिक्षण देण्यासाठी हा उपक्रम राबवला जात आहे.", progress: 30, status: "planning", statusLabel: "नियोजन", budget: "₹ 18 कोटी", deadline: "जून 2026", stat: "94", statLbl: "शाळा डिजिटल", accent: "#D09A50", bg: "#fdf3e0" },
//     { icon: "🌳", tag: "पर्यावरण", title: "हरित वसई-विरार — वृक्षारोपण मोहीम", desc: "महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट.", progress: 55, status: "ongoing", statusLabel: "सुरू आहे", budget: "₹ 8 कोटी", deadline: "ऑगस्ट 2025", stat: "5 लाख", statLbl: "झाडे लावणार", accent: "#028945", bg: "#e8f5ef" },
//   ];

//   useEffect(() => {
//     if (!autoPlay) return;
//     const t = setInterval(() => { setProjIdx(i => (i + 1) % projects.length); }, 4000);
//     return () => clearInterval(t);
//   }, [autoPlay, projects.length]);

//   const faqs = [
//     { q: "शहराचा विचार केला तर फेरीवाला धोरण अजूनही राबवण्यात आलेले नाही. त्यामुळे वाहतूक कोंडीचा मोठा सामना करावा लागत आहे आणि लोकांना त्रास होत आहे. यामधून आपण कसा मार्ग काढणार आहोत?", a: "वाहतूक कोंडी कमी करण्यासाठी आणि स्टेशन परिसरातील समस्या सोडवण्यासाठी न्यायालयाच्या मार्गदर्शक तत्त्वांनुसार लवकरात लवकर कारवाई करण्यात येईल. संपूर्ण स्टेशन परिसर टप्प्याटप्प्याने मोकळा करून नागरिकांना होणारा त्रास कमी करण्यावर भर दिला जाईल." },
//     { q: "Appointment बुक करण्यासाठी काय करावे लागेल?", a: "प्रथम नोंदणी करा, त्यानंतर उपलब्ध date आणि time slot निवडा, आवश्यक माहिती भरा आणि Submit करा. Admin approval नंतर तुम्हाला Confirmation Token मिळेल." },
//     { q: "Appointment confirm होण्यासाठी किती वेळ लागतो?", a: "Appointment submit केल्यानंतर Admin द्वारे review केले जाते. साधारणतः 1-2 कार्यालयीन दिवसांत confirmation दिली जाते. SMS आणि Portal वर status दिसेल." },
//     { q: "भेटीच्या दिवशी काय घेऊन यावे?", a: "भेटीच्या दिवशी तुमचा Confirmation Token आणि एक valid ओळखपत्र (Aadhar Card, Voter ID इ.) सोबत आणावे. Token शिवाय भेट होणार नाही." },
//     { q: "Appointment Cancel किंवा Reschedule करता येते का?", a: "होय, तुम्ही 'My Appointments' section मध्ये जाऊन Appointment cancel किंवा reschedule करू शकता. भेटीच्या 24 तास आधी बदल करणे आवश्यक आहे." },
//     { q: "एका दिवशी किती नागरिक भेट घेऊ शकतात?", a: "Mayor साहेबांच्या schedule नुसार प्रत्येक दिवशी मर्यादित slots उपलब्ध असतात. Slots संपल्यावर त्या दिवसाचे booking बंद होते, त्यामुळे लवकर बुक करा." },
//   ];

//   const steps = [
//     { lottie: "https://assets3.lottiefiles.com/packages/lf20_jbb3xnwi.json", title: "नोंदणी करा", desc: "Mobile number वापरून account तयार करा." },
//     { lottie: "https://assets4.lottiefiles.com/packages/lf20_tljjahng.json", title: "तारीख निवडा", desc: "Mayor च्या available dates आणि time slots मधून निवडा" },
//     { lottie: "https://assets9.lottiefiles.com/packages/lf20_xyadoh9h.json", title: "तपशील भरा", desc: "भेटीचे कारण, visitors संख्या आणि photo द्या" },
//     { lottie: "https://assets10.lottiefiles.com/packages/lf20_attdh2fv.json", title: "टोकन मिळवा", desc: "Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा" },
//   ];

//   const p = projects[projIdx];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');
//         *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
//         :root { --teal:#51ABAC; --green:#028945; --gold:#F5E6BF; --blue:#4CABBF; }

//         /* ══ HERO ══ */
//         .hero { position:relative; min-height:calc(100vh - 64px); display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:80px 24px 72px; overflow:hidden; }
//         .hero::before { content:''; position:absolute; inset:0; background-image:url(${heroBg}); background-size:cover; background-position:center top; background-repeat:no-repeat; z-index:0; }
//         .hero::after { content:''; position:absolute; inset:0; background:rgba(40,120,120,0.72); z-index:1; }
//         .hero > * { position:relative; z-index:2; }
//         .hero-orbit { position:absolute; inset:0; z-index:2; pointer-events:none; }
//         .hero-float { position:absolute; background:rgba(208,154,80,0.92); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:18px; box-shadow:0 4px 20px rgba(0,0,0,0.25); animation:floatBob 3s ease-in-out infinite; }
//         .hero-float.f1{width:52px;height:52px;top:28%;left:8%;animation-delay:0s}
//         .hero-float.f2{width:44px;height:44px;top:60%;left:16%;animation-delay:0.7s}
//         .hero-float.f3{width:52px;height:52px;top:22%;right:8%;animation-delay:1.1s}
//         .hero-float.f4{width:44px;height:44px;top:58%;right:14%;animation-delay:0.4s}
//         @keyframes floatBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
//         .hero-jansanwad { font-family:'Tiro Devanagari Marathi',serif; font-size:clamp(52px,10vw,96px); font-weight:800; color:#F5D87A; line-height:1.05; margin-bottom:18px; text-shadow:0 4px 32px rgba(0,0,0,0.3),0 2px 8px rgba(0,0,0,0.2); letter-spacing:-1px; }
//         .hero-title-underline { width:80px; height:4px; background:linear-gradient(90deg,#D09A50,#F5D87A,#D09A50); border-radius:2px; margin:0 auto 22px; animation:shimmer 2.5s ease-in-out infinite; }
//         @keyframes shimmer{0%,100%{opacity:1}50%{opacity:0.6}}
//         .hero-desc { font-family:'Tiro Devanagari Marathi',serif; font-size:clamp(14px,2.2vw,19px); font-weight:600; color:rgba(255,255,255,0.93); max-width:620px; margin:0 auto 40px; line-height:1.7; text-shadow:0 2px 12px rgba(0,0,0,0.25); }
//         .hero-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
//         .hero-btn-primary { padding:14px 36px; border-radius:12px; border:none; background:#028945; color:#fff; font-weight:700; font-size:15px; font-family:'DM Sans',sans-serif; cursor:pointer; transition:all .2s; box-shadow:0 4px 20px rgba(2,137,69,0.45); }
//         .hero-btn-primary:hover { background:#016d38; transform:translateY(-2px); }
//         .hero-btn-outline { padding:14px 36px; border-radius:12px; border:2px solid rgba(245,216,122,0.85); background:transparent; color:#F5D87A; font-weight:700; font-size:15px; font-family:'DM Sans',sans-serif; cursor:pointer; transition:all .2s; }
//         .hero-btn-outline:hover { background:rgba(245,216,122,0.15); transform:translateY(-2px); }

//         /* ══ HOW IT WORKS ══ */
//         .hiw-section { padding:72px 24px 80px; background:#ffffff; position:relative; }
//         .hiw-section::before { content:''; position:absolute; inset:0; background-image:radial-gradient(circle at 15% 50%,rgba(81,171,172,0.06) 0%,transparent 55%),radial-gradient(circle at 85% 20%,rgba(2,137,69,0.05) 0%,transparent 50%); pointer-events:none; }
//         .hiw-inner { max-width:1080px; margin:0 auto; position:relative; z-index:1; }
//         .hiw-header { text-align:center; margin-bottom:52px; }
//         .hiw-title { font-family:'Crimson Pro',serif; font-size:clamp(28px,4.5vw,44px); font-weight:800; color:#1a1a1a; margin-bottom:12px; line-height:1.2; }
//         .hiw-title-bar { width:64px; height:4px; background:linear-gradient(90deg,#D09A50,#F5D87A); border-radius:2px; margin:0 auto 14px; }
//         .hiw-sub { font-family:'DM Sans',sans-serif; color:#6b7280; font-size:15px; }
//         .hiw-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; align-items:stretch; }
//         .hiw-grid-wrap { position:relative; }
//         .hiw-connector { position:absolute; top:52px; left:calc(12.5% + 20px); right:calc(12.5% + 20px); height:2px; background:linear-gradient(90deg,rgba(81,171,172,0.3),rgba(81,171,172,0.6),rgba(81,171,172,0.3)); z-index:0; pointer-events:none; }
//         .hiw-card { background:#ffffff; border-radius:20px; padding:36px 22px 28px; text-align:center; border:1.5px solid rgba(81,171,172,0.18); box-shadow:0 4px 24px rgba(81,171,172,0.10),0 1px 4px rgba(0,0,0,0.04); transition:transform .25s,box-shadow .25s,border-color .25s; position:relative; z-index:1; display:flex; flex-direction:column; align-items:center; }
//         .hiw-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg,var(--teal),var(--green)); border-radius:20px 20px 0 0; }
//         .hiw-card:hover { transform:translateY(-8px); box-shadow:0 16px 40px rgba(81,171,172,0.22),0 4px 12px rgba(0,0,0,0.06); border-color:rgba(81,171,172,0.4); }
//         .hiw-icon-wrap { width:72px; height:72px; border-radius:50%; background:linear-gradient(135deg,#51ABAC,#028945); display:flex; align-items:center; justify-content:center; margin:0 auto 20px; box-shadow:0 6px 20px rgba(81,171,172,0.35); flex-shrink:0; }
//         .hiw-num { position:absolute; top:14px; right:16px; width:26px; height:26px; border-radius:50%; background:linear-gradient(135deg,var(--teal),var(--green)); color:#fff; font-size:11px; font-weight:800; font-family:'DM Sans',sans-serif; display:flex; align-items:center; justify-content:center; }
//         .hiw-step-title { font-family:'DM Sans',sans-serif; font-weight:700; color:#1a4a2e; font-size:15px; margin-bottom:10px; line-height:1.3; }
//         .hiw-step-desc { font-family:'DM Sans',sans-serif; font-size:13px; color:#6b7280; line-height:1.65; flex:1; }

//         /* ══════════════════════════════════════════════════
//            MAYOR SECTION — EXACT SCREENSHOT MATCH
//            LEFT: cream/beige bg | RIGHT: dark teal bg
//         ══════════════════════════════════════════════════ */
//         .mayor-section {
//           width: 100%;
//           display: flex;
//           align-items: stretch;
//           min-height: 480px;
//           overflow: hidden;
//         }

//         /* ── LEFT PANEL: cream/beige background ── */
//         .mayor-left {
//           flex: 0 0 48%;
//           background: #f5ead8;
//           padding: 60px 52px 60px 56px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           position: relative;
//           overflow: hidden;
//         }

//         /* subtle warm texture on left */
//         .mayor-left::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background:
//             radial-gradient(circle at 10% 20%, rgba(255,255,255,0.4) 0%, transparent 50%),
//             radial-gradient(circle at 90% 80%, rgba(200,160,80,0.08) 0%, transparent 50%);
//           pointer-events: none;
//         }

//         /* Dark teal heading line 1 — "मा. महापौर" */
//         .mayor-heading-line1 {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(32px, 4.2vw, 56px);
//           font-weight: 800;
//           color: #1a5050;
//           line-height: 1.15;
//           margin: 0 0 2px 0;
//           position: relative;
//           z-index: 1;
//         }

//         /* Golden heading line 2 — "श्री. अजीव पाटील" */
//         .mayor-heading-line2 {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(32px, 4.2vw, 56px);
//           font-weight: 800;
//           color: #C8922A;
//           line-height: 1.15;
//           margin: 0 0 28px 0;
//           position: relative;
//           z-index: 1;
//         }

//         .mayor-bio {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 13.5px;
//           color: #3a3a3a;
//           line-height: 1.9;
//           margin-bottom: 36px;
//           max-width: 400px;
//           position: relative;
//           z-index: 1;
//         }

//         .mayor-btn-primary {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 13px 28px;
//           border-radius: 8px;
//           border: none;
//           background: #028945;
//           color: #fff;
//           font-weight: 700;
//           font-size: 14px;
//           font-family: 'DM Sans', sans-serif;
//           cursor: pointer;
//           transition: all .2s;
//           box-shadow: 0 4px 16px rgba(2,137,69,0.35);
//           width: fit-content;
//           position: relative;
//           z-index: 1;
//         }
//         .mayor-btn-primary:hover { background:#016d38; transform:translateY(-2px); box-shadow:0 8px 22px rgba(2,137,69,0.45); }

//         /* ── RIGHT PANEL: dark teal background ── */
//         .mayor-right {
//           flex: 1;
//           background: linear-gradient(145deg, #1e7a7a 0%, #155e5e 40%, #0d4040 100%);
//           position: relative;
//           overflow: hidden;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 40px 20px 40px 0;
//         }

//         /* Gold top border line on right panel */
//         .mayor-right::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 3px;
//           background: linear-gradient(90deg, transparent, #C9963A 20%, #e8b84b 60%, transparent 100%);
//           z-index: 4;
//         }

//         /* Chevron arrows — top right of right panel */
//         .mayor-chevrons {
//           position: absolute;
//           top: 0; right: 0;
//           width: 200px; height: 200px;
//           pointer-events: none;
//           z-index: 2;
//         }

//         /* Small diamond decorations */
//         .mayor-diamond-tl {
//           position: absolute;
//           top: 18%; left: 6%;
//           pointer-events: none; z-index: 2;
//         }
//         .mayor-diamond-mid {
//           position: absolute;
//           top: 48%; left: 3%;
//           pointer-events: none; z-index: 2;
//         }

//         /* Teal circle decoration top-right corner */
//         .mayor-circle-tr {
//           position: absolute;
//           top: -30px; right: -30px;
//           width: 100px; height: 100px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(81,200,200,0.35) 0%, transparent 70%);
//           pointer-events: none; z-index: 2;
//         }

//         /* Gold triangle — bottom right */
//         .mayor-gold-tri {
//           position: absolute;
//           bottom: 0; right: 0;
//           pointer-events: none; z-index: 2;
//         }

//         /* White sparkle — bottom right */
//         .mayor-sparkle {
//           position: absolute;
//           bottom: 12%; right: 2%;
//           pointer-events: none; z-index: 3;
//         }

//         /* Teal glow behind phone */
//         .mayor-phone-glow {
//           position: absolute;
//           top: 50%; left: 50%;
//           transform: translate(-40%, -50%);
//           width: 280px; height: 280px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(81,200,200,0.18) 0%, transparent 65%);
//           pointer-events: none; z-index: 1;
//         }

//         /* 3 bubbles column — left of phone */
//         .mayor-bubbles-col {
//           position: relative;
//           z-index: 4;
//           display: flex;
//           flex-direction: column;
//           gap: 20px;
//           margin-right: 20px;
//           flex-shrink: 0;
//         }

//         .mayor-bubble-item {
//           width: 60px;
//           height: 60px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.12);
//           backdrop-filter: blur(10px);
//           border: 1.5px solid rgba(255,255,255,0.22);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 6px 18px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.12);
//           animation: mBob 3.5s ease-in-out infinite;
//           cursor: default;
//         }
//         .mayor-bubble-item:nth-child(1){animation-delay:0s}
//         .mayor-bubble-item:nth-child(2){animation-delay:0.75s}
//         .mayor-bubble-item:nth-child(3){animation-delay:1.5s}
//         @keyframes mBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}

//         /* Phone mockup */
//         .mayor-phone-wrap {
//           position: relative;
//           z-index: 4;
//           flex-shrink: 0;
//         }

//         .mayor-phone {
//           width: 200px;
//           background: #051515;
//           border-radius: 34px;
//           padding: 8px;
//           box-shadow:
//             0 0 0 2px rgba(100,210,210,0.5),
//             0 0 0 5px rgba(81,171,172,0.12),
//             0 28px 70px rgba(0,0,0,0.55),
//             0 6px 20px rgba(0,0,0,0.3);
//           transform: rotate(-2deg);
//         }

//         /* Phone notch */
//         .mayor-phone::before {
//           content: '';
//           position: absolute;
//           top: 14px; left: 50%;
//           transform: translateX(-50%);
//           width: 44px; height: 5px;
//           background: #051515;
//           border-radius: 3px;
//           z-index: 5;
//         }

//         .mayor-phone-inner {
//           border-radius: 28px;
//           overflow: hidden;
//           background: #fff;
//         }

//         .mayor-phone-img {
//           width: 100%;
//           height: 250px;
//           object-fit: cover;
//           object-position: top center;
//           display: block;
//         }

//         .mayor-phone-badge {
//           padding: 10px 12px 12px;
//           background: #fff;
//           border-top: 1px solid #f0f0f0;
//         }

//         .mayor-phone-badge-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 11px;
//           font-weight: 800;
//           color: #1a1a1a;
//           line-height: 1.4;
//         }

//         .mayor-phone-badge-title {
//           font-size: 9px;
//           color: #51ABAC;
//           font-weight: 700;
//           margin-top: 2px;
//           text-transform: uppercase;
//           letter-spacing: 0.4px;
//         }

//         /* ══ PROJECTS ══ */
//         .projects-section{padding:72px 32px;background:#fff;border-top:1px solid rgba(81,171,172,0.1);border-bottom:1px solid rgba(81,171,172,0.1)}
//         .projects-inner{max-width:1060px;margin:0 auto}
//         .section-header{text-align:center;margin-bottom:56px}
//         .section-tag{display:inline-block;background:rgba(76,171,191,0.12);color:var(--blue);font-size:12px;font-weight:700;padding:5px 16px;border-radius:999px;margin-bottom:14px;letter-spacing:0.6px;text-transform:uppercase}
//         .section-title{font-family:'Crimson Pro',serif;font-size:clamp(28px,4vw,40px);font-weight:800;color:#1a4a2e;margin-bottom:8px}
//         .section-sub{color:#6b7280;font-size:15px}
//         .proj-card{display:flex;border-radius:24px;overflow:hidden;box-shadow:0 12px 48px rgba(0,0,0,0.1);min-height:300px;transition:box-shadow .3s;background:#fff}
//         .proj-left{flex:1;padding:44px 48px;background:transparent;display:flex;flex-direction:column;justify-content:center;border:1px solid rgba(81,171,172,0.12);border-right:none;border-radius:24px 0 0 24px;background-size:cover;background-position:top;background-repeat:no-repeat}
//         .proj-tag{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:700;padding:4px 14px;border-radius:999px;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:16px;width:fit-content}
//         .proj-title{font-family:'Tiro Devanagari Marathi',serif;font-size:clamp(17px,2.4vw,24px);font-weight:800;color:#1a1a1a;margin-bottom:14px;line-height:1.35}
//         .proj-desc{font-family:'Tiro Devanagari Marathi',serif;font-size:13.5px;color:#6b7280;line-height:1.8;margin-bottom:22px;max-width:480px}
//         .proj-progress-row{display:flex;justify-content:space-between;margin-bottom:6px}
//         .proj-progress-lbl{font-size:12px;font-weight:600;color:#4b5563}
//         .proj-progress-pct{font-size:13px;font-weight:800}
//         .proj-bar{height:10px;background:#f1f5f9;border-radius:999px;overflow:hidden;margin-bottom:20px}
//         .proj-bar-fill{height:100%;border-radius:999px;transition:width 0.6s ease}
//         .proj-meta{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
//         .proj-meta-item{font-size:12.5px;color:#6b7280;display:flex;align-items:center;gap:5px}
//         .proj-meta-item strong{color:#1a1a1a}
//         .proj-chip{font-size:11px;font-weight:700;padding:4px 12px;border-radius:999px;text-transform:uppercase}
//         .chip-ongoing{background:rgba(2,137,69,0.1);color:#028945}
//         .chip-planning{background:rgba(208,154,80,0.15);color:#b8860b}
//         .proj-right{width:220px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;padding:32px 20px;border-radius:0 24px 24px 0;transition:background 0.5s}
//         .proj-icon{font-size:64px;line-height:1;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15))}
//         .proj-stat-num{font-family:'Crimson Pro',serif;font-size:38px;font-weight:800;color:#fff;text-align:center;line-height:1}
//         .proj-stat-lbl{font-size:11px;color:rgba(255,255,255,0.82);font-weight:700;text-transform:uppercase;letter-spacing:0.5px;text-align:center}
//         .proj-nav{display:flex;align-items:center;justify-content:center;gap:14px;margin-top:28px}
//         .proj-btn{width:42px;height:42px;border-radius:50%;border:1.5px solid rgba(81,171,172,0.4);background:#fff;color:#51ABAC;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;box-shadow:0 2px 8px rgba(0,0,0,0.06)}
//         .proj-btn:hover{background:#51ABAC;color:#fff;border-color:#51ABAC;transform:scale(1.08)}
//         .proj-dots{display:flex;gap:7px;align-items:center}
//         .proj-dot{width:9px;height:9px;border-radius:50%;background:rgba(81,171,172,0.3);border:none;cursor:pointer;padding:0;transition:all .25s}
//         .proj-dot.active{background:#51ABAC;width:26px;border-radius:5px}
//         .proj-counter{font-size:12px;font-weight:600;color:#9ca3af}

//         /* ══ FAQ ══ */
//         .faq-section{width:100%;background:var(--teal);padding:80px 24px;position:relative;overflow:hidden}
//         .faq-section::before{content:'';position:absolute;top:-80px;left:50%;transform:translateX(-50%);width:700px;height:500px;background:radial-gradient(ellipse,rgba(255,255,255,0.12) 0%,transparent 70%);pointer-events:none}
//         .faq-inner{max-width:720px;margin:0 auto;position:relative;z-index:1}
//         .faq-label{text-align:center;font-size:13px;font-weight:700;color:rgba(255,255,255,0.75);letter-spacing:1.2px;text-transform:uppercase;margin-bottom:14px}
//         .faq-title{font-family:'Crimson Pro',serif;font-size:clamp(26px,4vw,42px);font-weight:800;color:#fff;text-align:center;line-height:1.25;margin-bottom:48px}
//         .faq-list{display:flex;flex-direction:column;gap:12px}
//         .faq-item{background:rgba(255,255,255,0.1);border:1.5px solid rgba(255,255,255,0.22);border-radius:16px;overflow:hidden;transition:all 0.25s}
//         .faq-item.faq-active{background:rgba(255,255,255,0.18);border-color:rgba(255,255,255,0.5)}
//         .faq-q{width:100%;display:flex;align-items:center;justify-content:space-between;padding:20px 24px;background:none;border:none;cursor:pointer;text-align:left;gap:16px}
//         .faq-q-text{font-family:'Tiro Devanagari Marathi',serif;font-size:16px;font-weight:600;color:#fff;line-height:1.5;flex:1}
//         .faq-icon{flex-shrink:0;width:32px;height:32px;border-radius:50%;border:1.5px solid rgba(255,255,255,0.55);display:flex;align-items:center;justify-content:center;color:#fff;font-size:20px;font-weight:300;transition:transform 0.3s,background 0.3s}
//         .faq-item.faq-active .faq-icon{background:#fff;color:var(--teal);transform:rotate(45deg)}
//         .faq-answer{max-height:0;overflow:hidden;transition:max-height 0.4s ease,padding 0.3s;padding:0 24px}
//         .faq-item.faq-active .faq-answer{max-height:300px;padding:0 24px 20px}
//         .faq-a-text{font-family:'Tiro Devanagari Marathi',serif;font-size:14px;color:rgba(255,255,255,0.88);line-height:1.85;border-top:1px solid rgba(255,255,255,0.18);padding-top:16px}

//         /* ══ NOTICE ══ */
//         .notice{background:linear-gradient(135deg,#fef9c3,#fef3c7);border:1px solid #fde68a;border-radius:16px;padding:24px 28px;margin:40px auto;display:flex;gap:16px;align-items:flex-start;max-width:1036px}
//         .notice-icon{font-size:28px;flex-shrink:0}
//         .notice-title{font-weight:700;color:#92400e;font-size:15px;margin-bottom:6px}
//         .notice-text{font-size:13px;color:#a16207;line-height:1.6}

//         /* ══ CTA ══ */
//         .cta{background:linear-gradient(135deg,var(--green) 0%,#014d28 100%);color:#fff;padding:72px 32px;text-align:center;position:relative;overflow:hidden}
//         .cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(76,171,191,0.25) 0%,transparent 65%);pointer-events:none}
//         .cta-inner{position:relative;z-index:1}
//         .cta-title{font-family:'Crimson Pro',serif;font-size:clamp(28px,4vw,40px);font-weight:800;margin-bottom:12px}
//         .cta-sub{color:rgba(255,255,255,0.8);font-size:16px;margin-bottom:36px}
//         .cta-btn{padding:15px 48px;border-radius:14px;border:none;background:#fff;color:var(--green);font-weight:800;font-size:16px;cursor:pointer;box-shadow:0 8px 28px rgba(0,0,0,0.18);transition:all .2s}
//         .cta-btn:hover{transform:translateY(-3px);box-shadow:0 14px 36px rgba(0,0,0,0.25)}

//         /* ══ RESPONSIVE ══ */
//         @media(max-width:1024px){
//           .hiw-grid{grid-template-columns:repeat(2,1fr);gap:20px}
//           .hiw-connector{display:none}
//           .mayor-phone{width:175px}
//           .mayor-phone-img{height:220px}
//           .mayor-bubble-item{width:52px;height:52px}
//           .mayor-left{padding:48px 36px 48px 40px}
//         }
//         @media(max-width:768px){
//           .hero{min-height:calc(100svh - 64px);padding:60px 20px 56px}
//           .hero-float.f1,.hero-float.f2{left:3%}
//           .hero-float.f3,.hero-float.f4{right:3%}
//           .hero-float.f1,.hero-float.f3{width:40px;height:40px;font-size:15px}
//           .hero-float.f2,.hero-float.f4{width:36px;height:36px;font-size:13px}
//           .hiw-section{padding:52px 16px 60px}
//           .hiw-grid{grid-template-columns:repeat(2,1fr);gap:16px}
//           .hiw-card{padding:28px 16px 22px}
//           .hiw-icon-wrap{width:60px;height:60px}

//           /* Mayor stacks vertically on tablet */
//           .mayor-section{flex-direction:column}
//           .mayor-left{flex:0 0 auto;width:100%;padding:44px 28px}
//           .mayor-right{flex:0 0 auto;width:100%;min-height:420px;padding:40px 20px}
//           .mayor-bubbles-col{flex-direction:row;gap:14px;margin-right:0;margin-bottom:20px}
//           .mayor-right{flex-direction:column;align-items:center;justify-content:center;gap:0}

//           .proj-card{flex-direction:column}
//           .proj-left{border-radius:24px 24px 0 0;border-right:1px solid rgba(81,171,172,0.12);border-bottom:none;padding:28px 24px}
//           .proj-right{width:100%;border-radius:0 0 24px 24px;flex-direction:row;justify-content:center;gap:24px;padding:20px 24px}
//           .notice{margin:24px 16px}
//           .faq-section{padding:60px 16px}
//         }
//         @media(max-width:480px){
//           .hero{padding:48px 16px 48px}
//           .hero-btns{flex-direction:column;align-items:center}
//           .hero-btn-primary,.hero-btn-outline{width:100%;max-width:300px;text-align:center}
//           .hiw-section{padding:44px 14px 52px}
//           .hiw-grid{grid-template-columns:1fr;gap:14px}
//           .hiw-connector{display:none}
//           .hiw-title{font-size:26px}
//           .mayor-left{padding:36px 20px}
//           .mayor-heading-line1,.mayor-heading-line2{font-size:clamp(26px,7.5vw,40px)}
//           .mayor-phone{width:155px;transform:none}
//           .mayor-phone-img{height:190px}
//           .mayor-btn-primary{width:100%;justify-content:center}
//           .proj-right{flex-direction:column;gap:12px}
//           .proj-stat-num{font-size:28px}
//           .faq-q-text{font-size:14px}
//         }
//         @media(max-width:360px){
//           .hero-jansanwad{font-size:40px}
//           .hero-float{display:none}
//           .mayor-bubble-item{width:44px;height:44px}
//         }
//       `}</style>

//       <div className="home-root">

//         {/* ══ HERO ══ */}
//         <div className="hero">
//           <div className="hero-orbit" aria-hidden="true">
//             <div className="hero-float f1">📅</div>
//             <div className="hero-float f2">👥</div>
//             <div className="hero-float f3">📅</div>
//             <div className="hero-float f4">👤</div>
//           </div>
//           <h1 className="hero-jansanwad">जन संवाद</h1>
//           <div className="hero-title-underline" />
//           <p className="hero-desc">नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ</p>
//           <div className="hero-btns">
//             {citizen ? (
//               <>
//                 <button className="hero-btn-primary" onClick={() => navigate("/book-appointment")}>📅 Book Appointment</button>
//                 <button className="hero-btn-outline" onClick={() => navigate("/my-appointments")}>📋 My Appointments</button>
//               </>
//             ) : (
//               <>
//                 <button className="hero-btn-primary" onClick={() => navigate("/register")}>🚀 Get Started — Register</button>
//                 <button className="hero-btn-outline" onClick={() => navigate("/login")}>Login करा</button>
//               </>
//             )}
//           </div>
//         </div>

//         {/* ══ HOW IT WORKS ══ */}
//         <div className="hiw-section">
//           <div className="hiw-inner">
//             <div className="hiw-header">
//               <h2 className="hiw-title">कसे काम करते?</h2>
//               <div className="hiw-title-bar" />
//               <p className="hiw-sub">४ टप्प्यांमध्ये महापौरांची भेट बुक करा.</p>
//             </div>
//             <div className="hiw-grid-wrap">
//               <div className="hiw-connector" aria-hidden="true" />
//               <div className="hiw-grid">
//                 {steps.map((s, i) => (
//                   <div key={i} className="hiw-card">
//                     <div className="hiw-num">{i + 1}</div>
//                     <div className="hiw-icon-wrap">
//                       <LottiePlayer src={s.lottie} style={{ width: 44, height: 44 }} />
//                     </div>
//                     <div className="hiw-step-title">{s.title}</div>
//                     <div className="hiw-step-desc">{s.desc}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ══ MAYOR SECTION — exact screenshot split layout ══ */}
//         <div className="mayor-section">

        
//           <div className="mayor-left">
//             <p className="mayor-heading-line1">मा. महापौर</p>
//             <p className="mayor-heading-line2">श्री. अजीव पाटील</p>
//             <p className="mayor-bio">
//               ३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे.
//             </p>
//             <button className="mayor-btn-primary" onClick={() => navigate(citizen ? "/book-appointment" : "/register")}>
//               📅 Appointment बुक करा
//             </button>
//           </div>

       
//           <div className="mayor-right">

//             <div className="mayor-chevrons" aria-hidden="true">
//               <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
//                 <g opacity="0.2" stroke="#7edede" strokeWidth="1.4" fill="none">
//                   <polyline points="160,8 178,26 160,44"/>
//                   <polyline points="142,8 160,26 142,44"/>
//                   <polyline points="124,8 142,26 124,44"/>
//                   <polyline points="160,44 178,62 160,80"/>
//                   <polyline points="142,44 160,62 142,80"/>
//                   <polyline points="124,44 142,62 124,80"/>
//                   <polyline points="168,80 186,98 168,116"/>
//                   <polyline points="150,80 168,98 150,116"/>
//                   <polyline points="168,116 186,134 168,152"/>
//                   <polyline points="150,116 168,134 150,152"/>
//                 </g>
             
//                 <circle cx="182" cy="18" r="16" fill="rgba(81,200,200,0.3)" stroke="rgba(81,200,200,0.4)" strokeWidth="1"/>
               
//                 <rect x="108" y="4" width="10" height="10" rx="1" transform="rotate(45 113 9)" fill="#7edede" opacity="0.3"/>
//               </svg>
//             </div>

         
//             <div className="mayor-diamond-tl" aria-hidden="true">
//               <svg width="16" height="16" viewBox="0 0 16 16">
//                 <rect x="2" y="2" width="12" height="12" rx="1" transform="rotate(45 8 8)" fill="#7edede" opacity="0.45"/>
//               </svg>
//             </div>

           
//             <div className="mayor-diamond-mid" aria-hidden="true">
//               <svg width="12" height="12" viewBox="0 0 12 12">
//                 <rect x="1.5" y="1.5" width="9" height="9" rx="1" transform="rotate(45 6 6)" fill="#c9a040" opacity="0.4"/>
//               </svg>
//             </div>

            
//             <div className="mayor-gold-tri" aria-hidden="true">
//               <svg width="160" height="110" viewBox="0 0 160 110" fill="none">
//                 <polygon points="160,110 160,0 50,110" fill="#C9963A" opacity="0.25"/>
//                 <polygon points="160,110 160,40 95,110" fill="#e8b84b" opacity="0.18"/>
//               </svg>
//             </div>

           
//             <div className="mayor-sparkle" aria-hidden="true">
//               <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
//                 <path d="M14 2 L15.5 12.5 L26 14 L15.5 15.5 L14 26 L12.5 15.5 L2 14 L12.5 12.5 Z" fill="white" opacity="0.7"/>
//               </svg>
//             </div>

          
//             <div className="mayor-phone-glow" aria-hidden="true"/>

            
//             <div className="mayor-bubbles-col">
            
//               <div className="mayor-bubble-item">
//                 <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
//                   <rect x="4" y="4" width="18" height="13" rx="3" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" fill="none"/>
//                   <path d="M8 20 L8 17" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
//                   <path d="M7 7h12M7 10h8M7 13h10" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round"/>
//                   <circle cx="19" cy="6" r="4" fill="#028945" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
//                   <path d="M17 6h4M19 4v4" stroke="white" strokeWidth="1" strokeLinecap="round"/>
//                 </svg>
//               </div>
             
//               <div className="mayor-bubble-item">
//                 <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
//                   <polyline points="5,19 10,12 15,15 21,7" stroke="rgba(255,255,255,0.88)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//                   <polyline points="17,7 21,7 21,11" stroke="rgba(255,255,255,0.88)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//                   <line x1="5" y1="21" x2="21" y2="21" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" strokeLinecap="round"/>
//                 </svg>
//               </div>
           
//               <div className="mayor-bubble-item">
//                 <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
//                   <circle cx="13" cy="8" r="3.2" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" fill="none"/>
//                   <path d="M7 21 C7 16.5 19 16.5 19 21" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
//                   <circle cx="6.5" cy="10" r="2.2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none"/>
//                   <path d="M3 20 C3 16.8 10 16.8 10 20" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
//                   <circle cx="19.5" cy="10" r="2.2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none"/>
//                   <path d="M16 20 C16 16.8 23 16.8 23 20" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
//                   <path d="M10 22.5 Q13 25 16 22.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1" strokeLinecap="round" fill="none"/>
//                 </svg>
//               </div>
//             </div>

         
//             <div className="mayor-phone-wrap">
//               <div className="mayor-phone">
//                 <div className="mayor-phone-inner">
//                   <img src={mayorPhoto} alt="मा. महापौर श्री. अजीव पाटील" className="mayor-phone-img"/>
//                   <div className="mayor-phone-badge">
//                     <div className="mayor-phone-badge-name">मा. महापौर श्री. अजीव पाटील</div>
//                     <div className="mayor-phone-badge-title">वसई-विरार शहर महानगरपालिका</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ══ PROJECTS CAROUSEL ══ */}
//         <div className="projects-section">
//           <div className="projects-inner">
//             <div className="section-header">
//               <div className="section-tag">✦ सध्या सुरू</div>
//               <h2 className="section-title">चालू प्रकल्प</h2>
//               <p className="section-sub">वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प</p>
//             </div>
//             <div className="proj-card" onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)}
//               style={p.bgimg ? { backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.92) 55%, ${p.accent}99 100%), url(${p.bgimg})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}>
//               <div className="proj-left" style={{ background: 'transparent', border: p.bgimg ? 'none' : '1px solid rgba(81,171,172,0.12)', borderRight: 'none' }}>
//                 <div className="proj-tag" style={{ background: `${p.accent}18`, color: p.accent }}>{p.icon} {p.tag}</div>
//                 <div className="proj-title">{p.title}</div>
//                 <p className="proj-desc">{p.desc}</p>
//                 <div className="proj-progress-row">
//                   <span className="proj-progress-lbl">प्रगती</span>
//                   <span className="proj-progress-pct" style={{ color: p.accent }}>{p.progress}%</span>
//                 </div>
//                 <div className="proj-bar"><div className="proj-bar-fill" style={{ width: `${p.progress}%`, background: `linear-gradient(90deg,${p.accent}88,${p.accent})` }} /></div>
//                 <div className="proj-meta">
//                   <div className="proj-meta-item">💰 <strong>{p.budget}</strong></div>
//                   <div className="proj-meta-item">📅 <strong>{p.deadline}</strong></div>
//                   <span className={`proj-chip ${p.status === "ongoing" ? "chip-ongoing" : "chip-planning"}`}>{p.statusLabel}</span>
//                 </div>
//               </div>
//               <div className="proj-right" style={{ background: `linear-gradient(160deg,${p.accent},${p.accent}bb)` }}>
//                 <div className="proj-icon">{p.icon}</div>
//                 <div><div className="proj-stat-num">{p.stat}</div><div className="proj-stat-lbl">{p.statLbl}</div></div>
//               </div>
//             </div>
//             <div className="proj-nav">
//               <button className="proj-btn" onClick={() => { setAutoPlay(false); setProjIdx(i => (i - 1 + projects.length) % projects.length); }}>‹</button>
//               <div className="proj-dots">{projects.map((_, i) => (<button key={i} className={`proj-dot${projIdx === i ? " active" : ""}`} onClick={() => { setAutoPlay(false); setProjIdx(i); }} />))}</div>
//               <span className="proj-counter">{projIdx + 1} / {projects.length}</span>
//               <button className="proj-btn" onClick={() => { setAutoPlay(false); setProjIdx(i => (i + 1) % projects.length); }}>›</button>
//             </div>
//           </div>
//         </div>

//         {/* ══ FAQ ══ */}
//         {/* <div className="faq-section">
//           <LottiePlayer src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" style={{ position:"absolute", left:30, top:"50%", transform:"translateY(-50%)", width:120, height:120, opacity:0.18, pointerEvents:"none" }} />
//           <LottiePlayer src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" style={{ position:"absolute", right:30, top:"50%", transform:"translateY(-50%)", width:120, height:120, opacity:0.18, pointerEvents:"none" }} />
//           <div className="faq-inner">
//             <div className="faq-label">FAQ</div>
//             <h2 className="faq-title">वारंवार विचारले जाणारे प्रश्न</h2>
//             <div className="faq-list">
//               {faqs.map((f, i) => (
//                 <div key={i} className={`faq-item${faqOpen === i ? " faq-active" : ""}`}>
//                   <button className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
//                     <span className="faq-q-text">{f.q}</span>
//                     <span className="faq-icon">+</span>
//                   </button>
//                   <div className="faq-answer"><p className="faq-a-text">{f.a}</p></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div> */}

//         {/* ══ NOTICE ══ */}
//         <div className="notice">
//           <span className="notice-icon">⚠️</span>
//           <div>
//             <div className="notice-title">महत्त्वाची सूचना</div>
//             <div className="notice-text">भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही. Appointment confirm होण्यासाठी admin approval आवश्यक आहे. कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा.</div>
//           </div>
//         </div>

//         {/* ══ CTA ══ */}
//         <div className="cta">
//           <LottiePlayer src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" style={{ position:"absolute", left:60, top:"50%", transform:"translateY(-50%)", width:150, height:150, opacity:0.1, pointerEvents:"none" }} />
//           <LottiePlayer src="https://assets9.lottiefiles.com/packages/lf20_touohxv0.json" style={{ position:"absolute", right:60, top:"50%", transform:"translateY(-50%)", width:150, height:150, opacity:0.1, pointerEvents:"none" }} />
//         </div>

//       </div>
//     </>
//   );
// }



import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import heroBg from "../assets/vvcmcbuildingbanner.png";
import heroBg from "../assets/ajivsir8.jpeg";

import mayorPhoto from "../assets/ajivsir1.jpeg";
import meeting from "../assets/meeting2.jpeg";
import tree from "../assets/tree.jfif";
import pani from "../assets/pani3.jpg";
import narangibridgepahani from "../assets/narangibridgeahani.jpeg";
import logo from "../assets/logo2new.jpeg";

function LottiePlayer({ src, style, loop = true }) {
  const ref = useRef(null);
  useEffect(() => {
    let anim;
    const init = () => {
      if (window.lottie && ref.current) {
        ref.current.innerHTML = "";
        anim = window.lottie.loadAnimation({ container: ref.current, renderer: "svg", loop, autoplay: true, path: src });
      }
    };
    if (!window.lottie) {
      const s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js";
      s.onload = init;
      document.head.appendChild(s);
    } else { init(); }
    return () => anim && anim.destroy();
  }, [src]);
  return <div ref={ref} style={style} />;
}

export default function Home() {
  const navigate = useNavigate();
  const citizen = (() => { try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; } })();
  const newsViewport = useRef(null);

  const [projIdx, setProjIdx] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const [newsIdx, setNewsIdx] = React.useState(0);
  const [newsAuto, setNewsAuto] = React.useState(true);


  const projects = [
    { icon: "🌉", tag: "पायाभूत सुविधा", title: "नारंगी उड्डाणपूल प्रकल्प पाहणी", desc: "नारंगी येथील उड्डाणपुलाच्या कामाची मा. महापौर श्री. अजीव पाटील यांनी प्रत्यक्ष पाहणी केली. या पाहणीदरम्यान संबंधित अधिकारी, रेल्वे अधिकारी, कंत्राटदार व उपकंत्राटदार यांच्याशी चर्चा करून कामाची प्रगती व अडचणी जाणून घेतल्या. तसेच कामाला अधिक गती देण्याच्या सूचना दिल्या.", progress:'', status: "ongoing", statusLabel: "सुरू आहे", budget: "₹ 42 कोटी", deadline: "डिसेंबर 2025", stat: "", statLbl: "मार्च २०२६ अखेर वाहतुकीसाठी खुले", accent: "#51ABAC", bgimg: narangibridgepahani },
    { icon: "🏛️", tag: "प्रशासन", title: "समिती गठनाबाबत चर्चा", desc: "स्थायी समितीच्या महत्त्वाच्या विषयांवर तसेच प्रभाग समित्यांच्या गठनाबाबत चर्चा सुरू आहे.", progress: '', status: "ongoing", statusLabel: "सुरू आहे", budget: "₹ 85 कोटी", deadline: "मार्च 2026", stat: "", statLbl: "", accent: "#028945", bgimg: meeting },
    { icon: "💧", tag: "पाणीपुरवठा", title: "24×7 पाणीपुरवठा योजना — वसई विभाग", desc: "वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे.", progress:'', status: "ongoing", statusLabel: "सुरू आहे", budget: "₹ 85 कोटी", deadline: "मार्च 2026", stat: "1.2 लाख", statLbl: "लाभार्थी कुटुंबे", accent: "#028945",bgimg:pani },
    { icon: "🌳", tag: "पर्यावरण", title: "हरित वसई-विरार — वृक्षारोपण मोहीम", desc: "महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट.", progress:'', status: "ongoing", statusLabel: "सुरू आहे", budget: "₹ 8 कोटी", deadline: "ऑगस्ट 2025", stat: "5 लाख", statLbl: "झाडे लावणार", accent: "#028945",bgimg:tree},
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => { setProjIdx(i => (i + 1) % projects.length); }, 4000);
    return () => clearInterval(t);
  }, [autoPlay, projects.length]);

  // ADD THIS — news auto-play timer
// useEffect(() => {
//   if (!newsAuto) return;
//   const t = setInterval(() => {
//     setNewsIdx(i => i >= newsMaxIdx ? 0 : i + 1);
//   }, 4000);
//   return () => clearInterval(t);
// }, [newsAuto]);


useEffect(() => {
  if (!newsAuto) return;
  const t = setInterval(() => {
    setNewsIdx(i => i >= newsMaxIdx ? 0 : i + 1);
  }, 5000); // 5 seconds - gives time for all 4 cards to animate (4 cards × 1s delay + animation time)
  return () => clearInterval(t);
}, [newsAuto]);


//   useEffect(() => {
//   if (!newsViewport.current) return;
//   const vp = newsViewport.current;
//   const cardW = (vp.offsetWidth - 40) / 3;
//   vp.scrollTo({ left: newsIdx * (cardW + 20), behavior: "smooth" });
// }, [newsIdx]);


useEffect(() => {
  if (!newsViewport.current) return;
  const vp = newsViewport.current;
  const cardW = (vp.offsetWidth - 40) / 3;
  vp.scrollTo({ left: newsIdx * (cardW + 20), behavior: "smooth" });
}, [newsIdx]);


  const steps = [
    { lottie: "https://assets3.lottiefiles.com/packages/lf20_jbb3xnwi.json", title: "नोंदणी करा", desc: "Mobile number वापरून account तयार करा." },
    { lottie: "https://assets4.lottiefiles.com/packages/lf20_tljjahng.json", title: "तारीख निवडा", desc: "मा. श्री महापौर यांच्या available dates आणि time slots मधून निवडा" },
    { lottie: "https://assets9.lottiefiles.com/packages/lf20_xyadoh9h.json", title: "तपशील भरा", desc: "भेटीचे कारण, visitors संख्या आणि photo द्या" },
    { lottie: "https://assets10.lottiefiles.com/packages/lf20_attdh2fv.json", title: "टोकन मिळवा", desc: "Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा" },
  ];

  const p = projects[projIdx];

   const newsItems = [
    {
      // day: "28",
      tag: "🌿 शिबिर प्रदर्शन",
      title: "घनकचरा व्यवस्थापन शिबिर-प्रदर्शन उद्घाटन",
      rows: ["घनकचरा व्यवस्थापन प्रदर्शन", "खत निर्मिती तंत्रज्ञान प्रदर्शन"],
      date: "२८ फेब्रुवारी २०२६",
      accent: "#4CABC1",
      bg: "linear-gradient(160deg,#b8e2ec 0%,#d0eff7 40%,#aad8e8 100%)",
      dotColors: ["#4CABC1", "#66A962"],
    },
    {
      // day: "11",
      tag: "🧹 स्वच्छता आढावा",
      title: "दैनंदिन कचरा संकलन व स्वच्छता बैठक",
      rows: ["कचरा संकलन व वर्गीकरण", "गटार व नाले साफसफाई"],
      date: "११ मार्च २०२६",
      accent: "#66A962",
      bg: "linear-gradient(160deg,#b5d9b3 0%,#d2edd0 40%,#a8cfaa 100%)",
      dotColors: ["#66A962", "#CA9D28"],
    },
    {
      // day: "10",
      tag: "🛣️ रस्ते विकास",
      title: "रस्ते दुरुस्ती व पायाभूत सुविधा नियोजन बैठक",
      rows: ["रस्ते दुरुस्ती व बांधकाम", "फुटपाथ उभारणी नियोजन"],
      date: "१० मार्च २०२६",
      accent: "#CA9D28",
      bg: "linear-gradient(160deg,#f0d6a8 0%,#f7e6c2 40%,#e8c87a 100%)",
      dotColors: ["#CA9D28", "#CE9A54"],
    },
    {
      // day: "05",
      tag: "⚡ वीज विकास",
      title: "MSEDCL वसई मंडळ आढावा बैठक",
      rows: ["MSEDCL विकास कामे आढावा", "महापौर व नगर सेवक बैठक"],
      date: "५ मार्च २०२६",
      accent: "#49ACC3",
      bg: "linear-gradient(160deg,#a8d4dc 0%,#c8e8f0 40%,#8ec4d0 100%)",
      dotColors: ["#49ACC3", "#187480"],
    },
  ];

  
  // visible cards: show 3 at a time (desktop), shift by 1
  const visibleCount = 3;
  // const maxIdx = newsItems.length - visibleCount;
  // const clampedIdx = Math.min(newsIdx, maxIdx);
  const cardW = `calc(33.333% - 14px)`;
  // const translateX = `calc(${clampedIdx} * (${cardW} + 20px))`;
  const newsMaxIdx = 1;
const clampedNewsIdx = Math.min(newsIdx, newsMaxIdx);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        :root { --teal:#51ABAC; --green:#028945; --gold:#F5E6BF; --blue:#4CABBF; }

        /* ══ HERO ══ */
        .hero { position:relative; min-height:calc(100vh - 64px); display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:80px 24px 72px; overflow:hidden; }
        .hero::before { content:''; position:absolute; inset:0; background-image:url(${heroBg}); background-size:cover; background-position:left; background-repeat:no-repeat; z-index:0; }
        .hero::after { content:''; position:absolute; inset:0; background:rgba(40,120,120,0.72); z-index:1; }
        .hero > * { position:relative; z-index:2; }
        .hero-orbit { position:absolute; inset:0; z-index:2; pointer-events:none; }
        .hero-float { position:absolute; background:rgba(208,154,80,0.92); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:18px; box-shadow:0 4px 20px rgba(0,0,0,0.25); animation:floatBob 3s ease-in-out infinite; }
        .hero-float.f1{width:52px;height:52px;top:28%;left:8%;animation-delay:0s}
        .hero-float.f2{width:44px;height:44px;top:60%;left:16%;animation-delay:0.7s}
        .hero-float.f3{width:52px;height:52px;top:22%;right:8%;animation-delay:1.1s}
        .hero-float.f4{width:44px;height:44px;top:58%;right:14%;animation-delay:0.4s}
        @keyframes floatBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        .hero-jansanwad { font-family:'Tiro Devanagari Marathi',serif; font-size:clamp(52px,10vw,96px); font-weight:800; color:#F5D87A; line-height:1.05; margin-bottom:18px; text-shadow:0 4px 32px rgba(0,0,0,0.3),0 2px 8px rgba(0,0,0,0.2); letter-spacing:-1px; }
        .hero-title-underline { width:80px; height:4px; background:linear-gradient(90deg,#D09A50,#F5D87A,#D09A50); border-radius:2px; margin:0 auto 22px; animation:shimmer 2.5s ease-in-out infinite; }
        @keyframes shimmer{0%,100%{opacity:1}50%{opacity:0.6}}
        .hero-desc { font-family:'Tiro Devanagari Marathi',serif; font-size:clamp(14px,2.2vw,19px); font-weight:600; color:rgba(255,255,255,0.93); max-width:620px; margin:0 auto 40px; line-height:1.7; text-shadow:0 2px 12px rgba(0,0,0,0.25); }
        .hero-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
        .hero-btn-primary { padding:14px 36px; border-radius:12px; border:none; background:#028945; color:#fff; font-weight:700; font-size:15px; font-family:'DM Sans',sans-serif; cursor:pointer; transition:all .2s; box-shadow:0 4px 20px rgba(2,137,69,0.45); }
        .hero-btn-primary:hover { background:#016d38; transform:translateY(-2px); }
        .hero-btn-outline { padding:14px 36px; border-radius:12px; border:2px solid rgba(245,216,122,0.85); background:transparent; color:#F5D87A; font-weight:700; font-size:15px; font-family:'DM Sans',sans-serif; cursor:pointer; transition:all .2s; }
        .hero-btn-outline:hover { background:rgba(245,216,122,0.15); transform:translateY(-2px); }

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
          .hiw-grid{grid-template-columns:repeat(2,1fr);gap:20px}
          .hiw-connector{display:none}
          .mayor-left{padding:48px 36px 48px 40px}
        }
        @media(max-width:900px){
          .mayor-data-col:last-child{display:none}
        }
        @media(max-width:768px){
          .hero{min-height:calc(100svh - 64px);padding:60px 20px 56px}
          .hero-float.f1,.hero-float.f2{left:3%}
          .hero-float.f3,.hero-float.f4{right:3%}
          .hero-float.f1,.hero-float.f3{width:40px;height:40px;font-size:15px}
          .hero-float.f2,.hero-float.f4{width:36px;height:36px;font-size:13px}
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

      `}</style>

      <div className="home-root">

        {/* ══ HERO ══ */}
        <div className="hero">
          <div className="hero-orbit" aria-hidden="true">
            <div className="hero-float f1">📅</div>
            <div className="hero-float f2">👥</div>
            <div className="hero-float f3">📅</div>
            <div className="hero-float f4">👤</div>
          </div>
          <h1 className="hero-jansanwad">जन संवाद</h1>
          <div className="hero-title-underline" />
          <p className="hero-desc">नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ</p>
          <div className="hero-btns">
            {citizen ? (
              <>
                <button className="hero-btn-primary" onClick={() => navigate("/book-appointment")}>📅 Book Appointment</button>
                <button className="hero-btn-outline" onClick={() => navigate("/my-appointments")}>📋 My Appointments</button>
              </>
            ) : (
              <>
                <button className="hero-btn-primary" onClick={() => navigate("/register")}>🚀 Get Started — Register</button>
                <button className="hero-btn-outline" onClick={() => navigate("/login")}>Login करा</button>
              </>
            )}
          </div>
        </div>

        {/* ══ HOW IT WORKS ══ */}
        <div className="hiw-section">
          <div className="hiw-inner">
            <div className="hiw-header">
              <h2 className="hiw-title">कसे काम करते?</h2>
              <div className="hiw-title-bar" />
              <p className="hiw-sub">४ टप्प्यांमध्ये महापौरांची भेट बुक करा.</p>
            </div>
            <div className="hiw-grid-wrap">
              <div className="hiw-connector" aria-hidden="true" />
              <div className="hiw-grid">
                {steps.map((s, i) => (
                  <div key={i} className="hiw-card">
                    <div className="hiw-num">{i + 1}</div>
                    <div className="hiw-icon-wrap">
                      <LottiePlayer src={s.lottie} style={{ width: 44, height: 44 }} />
                    </div>
                    <div className="hiw-step-title">{s.title}</div>
                    <div className="hiw-step-desc">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══ MAYOR SECTION ══ */}
        <div className="mayor-section">

          {/* ── LEFT: cream bg ── */}
          <div className="mayor-left">
            <p className="mayor-heading-line1">मा. महापौर</p>
            <p className="mayor-heading-line2">श्री. अजीव पाटील</p>
            <p className="mayor-bio">
              ३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे.
            </p>
            <button className="mayor-btn-primary" onClick={() => navigate(citizen ? "/book-appointment" : "/register")}>
              📅 Appointment बुक करा
            </button>
          </div>

          {/* ── RIGHT: dark teal bg ── */}
          <div className="mayor-right">

            {/* Decorations */}
            <div className="mayor-chevrons" aria-hidden="true">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                <g opacity="0.2" stroke="#7edede" strokeWidth="1.4" fill="none">
                  <polyline points="160,8 178,26 160,44"/>
                  <polyline points="142,8 160,26 142,44"/>
                  <polyline points="124,8 142,26 124,44"/>
                  <polyline points="160,44 178,62 160,80"/>
                  <polyline points="142,44 160,62 142,80"/>
                  <polyline points="124,44 142,62 124,80"/>
                  <polyline points="168,80 186,98 168,116"/>
                  <polyline points="150,80 168,98 150,116"/>
                  <polyline points="168,116 186,134 168,152"/>
                  <polyline points="150,116 168,134 150,152"/>
                </g>
                <circle cx="182" cy="18" r="16" fill="rgba(81,200,200,0.3)" stroke="rgba(81,200,200,0.4)" strokeWidth="1"/>
                <rect x="108" y="4" width="10" height="10" rx="1" transform="rotate(45 113 9)" fill="#7edede" opacity="0.3"/>
              </svg>
            </div>
            <div className="mayor-diamond-tl" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16">
                <rect x="2" y="2" width="12" height="12" rx="1" transform="rotate(45 8 8)" fill="#7edede" opacity="0.45"/>
              </svg>
            </div>
            <div className="mayor-diamond-mid" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 12 12">
                <rect x="1.5" y="1.5" width="9" height="9" rx="1" transform="rotate(45 6 6)" fill="#c9a040" opacity="0.4"/>
              </svg>
            </div>
            <div className="mayor-gold-tri" aria-hidden="true">
              <svg width="160" height="110" viewBox="0 0 160 110" fill="none">
                <polygon points="160,110 160,0 50,110" fill="#C9963A" opacity="0.25"/>
                <polygon points="160,110 160,40 95,110" fill="#e8b84b" opacity="0.18"/>
              </svg>
            </div>
            <div className="mayor-sparkle" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 2 L15.5 12.5 L26 14 L15.5 15.5 L14 26 L12.5 15.5 L2 14 L12.5 12.5 Z" fill="white" opacity="0.7"/>
              </svg>
            </div>
            <div className="mayor-phone-glow" aria-hidden="true"/>

            {/* ── MAIN CONTENT ── */}
            <div className="mayor-content-wrap">

              {/* Brand row: logo + title */}
              <div className="mayor-brand-row">
                <div className="mayor-brand-logo-wrap">
                  <img src={logo} alt="VVCMC Logo"/>
                </div>
                <div className="mayor-brand-text">
                  वसई-विरार शहर महानगरपालिका, जन संवाद
                </div>
              </div>

              {/* Bottom row: data col 1 | bubbles + phone | data col 2 */}
              <div className="mayor-bottom-row">

                {/* DATA COL LEFT */}
                <div className="mayor-data-col">
                  <div className="mayor-data-col-head">नागरिक सहभाग</div>
                  <div className="mayor-data-text">
                    नागरिकांचा सक्रिय सहभाग वाढवून शहर विकासात त्यांचे मत आणि सूचना महत्वाच्या ठरत आहेत.
                  </div>
                  <div className="mayor-data-col-head" style={{marginTop:'6px'}}>वसई स्मार्ट सिटी प्रकल्प</div>
                  <div className="mayor-data-text">
                 वसई स्मार्ट सिटी प्रकल्पांतर्गत शहराचा डिजिटल, सुरक्षित आणि सुसज्ज विकास करण्यावर भर देण्यात आला आहे.
                  </div>
                </div>

                {/* CENTER: bubbles + phone */}
                <div className="mayor-phone-center">
                  <div className="mayor-bubbles-col">
                    <div className="mayor-bubble-item">
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <rect x="4" y="4" width="18" height="13" rx="3" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" fill="none"/>
                        <path d="M8 20 L8 17" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M7 7h12M7 10h8M7 13h10" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round"/>
                        <circle cx="19" cy="6" r="4" fill="#028945" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
                        <path d="M17 6h4M19 4v4" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="mayor-bubble-item">
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <polyline points="5,19 10,12 15,15 21,7" stroke="rgba(255,255,255,0.88)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        <polyline points="17,7 21,7 21,11" stroke="rgba(255,255,255,0.88)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        <line x1="5" y1="21" x2="21" y2="21" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="mayor-bubble-item">
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <circle cx="13" cy="8" r="3.2" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" fill="none"/>
                        <path d="M7 21 C7 16.5 19 16.5 19 21" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                        <circle cx="6.5" cy="10" r="2.2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none"/>
                        <path d="M3 20 C3 16.8 10 16.8 10 20" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                        <circle cx="19.5" cy="10" r="2.2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none"/>
                        <path d="M16 20 C16 16.8 23 16.8 23 20" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                        <path d="M10 22.5 Q13 25 16 22.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1" strokeLinecap="round" fill="none"/>
                      </svg>
                    </div>
                  </div>

                  <div className="mayor-phone-wrap">
                    <div className="mayor-phone">
                      <div className="mayor-phone-inner">
                        <img src={mayorPhoto} alt="मा. महापौर श्री. अजीव पाटील" className="mayor-phone-img"/>
                        <div className="mayor-phone-badge">
                          <div className="mayor-phone-badge-name">मा. महापौर श्री. अजीव पाटील</div>
                          <div className="mayor-phone-badge-title">वसई-विरार शहर महानगरपालिका</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DATA COL RIGHT */}
                <div className="mayor-data-col">
                  <div className="mayor-data-col-head">पायाभूत सुविधा</div>
                  <div className="mayor-data-text">
                    वसई-विरार शहर महानगरपालिका महापौर, आरोग्य, विरार शहर, सुधार बैठक, कार्यालय उपाध्यक्ष
                  </div>
                  <div className="mayor-data-col-head" style={{marginTop:'6px'}}>सुरक्षित व स्वच्छ शहर</div>
                  <div className="mayor-data-text">
                   सुरक्षितता, स्वच्छता आणि पर्यावरणपूरक उपक्रमांद्वारे शहर अधिक राहण्यायोग्य बनवले जात आहे.
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ══ PROJECTS CAROUSEL ══ */}
        <div className="projects-section" style={{backgroundColor:"#F9FCFB"}}>
          <div className="projects-inner">
            <div className="section-header">
              <div className="section-tag">✦ सध्या सुरू</div>
              <h2 className="section-title">चालू प्रकल्प</h2>
              <p className="section-sub">वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प</p>
            </div>
            <div
              className="proj-card"
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
              style={p.bgimg ? {
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.92) 55%, ${p.accent}99 100%), url(${p.bgimg})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              } : {}}
            >
              <div className="proj-left" style={{
                background: 'transparent',
                border: p.bgimg ? 'none' : '1px solid rgba(81,171,172,0.12)',
                borderRight: 'none'
              }}>
                <div className="proj-tag" style={{ background: `${p.accent}18`, color: p.accent }}>{p.icon} {p.tag}</div>
                <div className="proj-title">{p.title}</div>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-progress-row">
                  <span className="proj-progress-lbl">प्रगती</span>
                  {/* <span className="proj-progress-pct" style={{ color: p.accent }}>{p.progress}%</span> */}
                    <span className="proj-progress-pct" style={{ color: p.accent }}>{p.progress}</span>

                </div>
                <div className="proj-bar">
                  <div className="proj-bar-fill" style={{ width: `${p.progress}%`, background: `linear-gradient(90deg,${p.accent}88,${p.accent})` }} />
                </div>
                <div className="proj-meta">
                  <div className="proj-meta-item">💰 <strong>{p.budget}</strong></div>
                  <div className="proj-meta-item">📅 <strong>{p.deadline}</strong></div>
                  <span className={`proj-chip ${p.status === "ongoing" ? "chip-ongoing" : "chip-planning"}`}>{p.statusLabel}</span>
                </div>
              </div>
              <div className="proj-right" style={{ background: `linear-gradient(160deg,${p.accent},${p.accent}bb)` }}>
                <div className="proj-icon">{p.icon}</div>
                <div>
                  <div className="proj-stat-num">{p.stat}</div>
                  <div className="proj-stat-lbl">{p.statLbl}</div>
                </div>
              </div>
            </div>
            <div className="proj-nav">
              <button className="proj-btn" onClick={() => { setAutoPlay(false); setProjIdx(i => (i - 1 + projects.length) % projects.length); }}>‹</button>
              <div className="proj-dots">
                {projects.map((_, i) => (
                  <button key={i} className={`proj-dot${projIdx === i ? " active" : ""}`} onClick={() => { setAutoPlay(false); setProjIdx(i); }} />
                ))}
              </div>
              <span className="proj-counter">{projIdx + 1} / {projects.length}</span>
              <button className="proj-btn" onClick={() => { setAutoPlay(false); setProjIdx(i => (i + 1) % projects.length); }}>›</button>
            </div>
          </div>
        </div>

        {/* ══ NOTICE ══ */}
        
        <div className="notice" >
          <span className="notice-icon">⚠️</span>
          <div>
            <div className="notice-title">महत्त्वाची सूचना</div>
            <div className="notice-text">भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही. Appointment confirm होण्यासाठी admin approval आवश्यक आहे. कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा.</div>
          </div>
        </div>

        {/* ══ CTA ══ */}
        <div className="cta">
          <LottiePlayer src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" style={{ position:"absolute", left:60, top:"50%", transform:"translateY(-50%)", width:150, height:150, opacity:0.1, pointerEvents:"none" }} />
          <LottiePlayer src="https://assets9.lottiefiles.com/packages/lf20_touohxv0.json" style={{ position:"absolute", right:60, top:"50%", transform:"translateY(-50%)", width:150, height:150, opacity:0.1, pointerEvents:"none" }} />
        </div>

         {/* ══ NEWS SLIDER ══ */}
        <div className="news-section">
          <div className="news-inner">
            <div className="news-header">
              <div className="news-section-tag">✦ ताज्या बातम्या</div>
              <h2 className="news-title">महापौर कार्यालयाच्या ताज्या बातम्या</h2>
              <div className="news-title-bar" />
              <p className="news-sub">Mayor's Office Latest Updates &amp; Activities</p>
            </div>
           <div className="news-viewport" ref={newsViewport}
  onMouseEnter={() => setNewsAuto(false)} onMouseLeave={() => setNewsAuto(true)}>
  {/* <div className="news-track"> */}
  <div className="news-track" key={newsIdx}>
                {newsItems.map((n, i) => (
                  <div key={i} className="news-card" style={{ background: n.bg, "--nc-accent": n.accent }}>
                    <div className="nc-widget">
                      <div className="nc-widget-day">{n.day}</div>
                      <div className="nc-widget-rows">
                        {n.rows.map((row, ri) => (
                          <div key={ri} className="nc-widget-row">
                            <span className="nc-dot" style={{ background: n.dotColors[ri] }} />
                            {row}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="nc-caption">
                      <div className="nc-tag">{n.tag}</div>
                      <div className="nc-title">{n.title}</div>
                      <div className="nc-date-row">
                        <div className="nc-date">📅 {n.date}</div>
                        <div className="nc-arrow">→</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
           <div className="news-nav">
  <button className="news-btn" onClick={() => { setNewsAuto(false); setNewsIdx(i => Math.max(0, i - 1)); }}>‹</button>
  <div className="news-dots">
    {Array.from({ length: 2 }).map((_, i) => (
      <button key={i} className={`news-dot${clampedNewsIdx === i ? " active" : ""}`}
        onClick={() => { setNewsAuto(false); setNewsIdx(i); }} />
    ))}
  </div>
  <span className="news-counter">{clampedNewsIdx + 1} / 2</span>
  <button className="news-btn" onClick={() => { setNewsAuto(false); setNewsIdx(i => Math.min(newsMaxIdx, i + 1)); }}>›</button>
</div>
          </div>
        </div>

      </div>
    </>
  );
}