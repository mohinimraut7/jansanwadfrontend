// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import logo from "../assets/vvcmclogo.jpg";
// // import bgImage from "../assets/bg1.jpeg";

// // export default function PortalSelect() {
// //   const navigate = useNavigate();

// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Outfit:wght@400;600;700;800&display=swap');

// //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// //         :root {
// //           --teal: #4CABC1; --teal-dark: #49ACC3;
// //           --gold: #CA9D28; --gold-light: #CE9A54;
// //           --cream: #F5E7C2; --green: #66A962;
// //         }

// //         .ps-root {
// //           min-height: 100vh; width: 100%;
// //           position: relative; display: flex;
// //           align-items: center; justify-content: center;
// //           font-family: 'Outfit', sans-serif; overflow: hidden;
// //         }
// //         .ps-bg {
// //           position: absolute; inset: 0;
// //           background-size: cover; background-position: 68% center;
// //           filter: brightness(0.72) saturate(1.15);
// //           transition: transform 14s ease;
// //         }
// //         .ps-root:hover .ps-bg { transform: scale(1.02); }
// //         .ps-overlay {
// //           position: absolute; inset: 0;
// //           background: linear-gradient(125deg,
// //             rgba(24,116,128,0.50) 0%, rgba(73,172,195,0.38) 30%,
// //             rgba(24,116,128,0.60) 60%, rgba(12,70,80,0.85) 100%);
// //         }
// //         .ps-stripe {
// //           position: absolute; top: 0; left: 0; right: 0; height: 4px;
// //           background: linear-gradient(90deg,
// //             var(--gold) 0%, var(--gold-light) 22%, var(--teal) 45%,
// //             var(--teal-dark) 65%, var(--green) 85%, var(--cream) 100%);
// //           z-index: 20;
// //         }
// //         .ps-box {
// //           position: relative; z-index: 10;
// //           display: flex; flex-direction: column;
// //           align-items: center; gap: 32px;
// //           animation: wrapIn .5s cubic-bezier(.22,.9,.36,1) both;
// //         }
// //         @keyframes wrapIn {
// //           from { opacity:0; transform:translateY(26px) scale(0.98); }
// //           to   { opacity:1; transform:translateY(0) scale(1); }
// //         }
// //         .ps-header {
// //           display: flex; flex-direction: column;
// //           align-items: center; gap: 14px; text-align: center;
// //         }
// //         .ps-logo-ring {
// //           width: 88px; height: 88px; border-radius: 50%; padding: 4px;
// //           background: conic-gradient(#CA9D28 0deg,#CE9A54 90deg,#F5E7C2 180deg,#CE9A54 260deg,#CA9D28 360deg);
// //           box-shadow: 0 8px 32px rgba(0,0,0,0.40);
// //         }
// //         .ps-logo-ring img {
// //           width: 100%; height: 100%; border-radius: 50%; object-fit: cover;
// //           border: 3px solid rgba(255,255,255,0.90); display: block;
// //         }
// //         .ps-title {
// //           font-family: 'Tiro Devanagari Marathi', serif;
// //           font-size: 26px; font-weight: 800; color: #F5E7C2;
// //           text-shadow: 0 2px 16px rgba(0,0,0,0.35); line-height: 1.25;
// //         }
// //         .ps-sub {
// //           font-family: 'Tiro Devanagari Marathi', serif;
// //           font-size: 14px; color: rgba(245,231,194,0.60); margin-top: 6px;
// //         }
// //         .ps-cards {
// //           display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;
// //         }
// //         .ps-card {
// //           width: 240px;
// //           background: rgba(12,68,80,0.78);
// //           backdrop-filter: blur(32px); border-radius: 24px;
// //           border: 1.5px solid rgba(76,171,193,0.20);
// //           padding: 36px 24px 28px;
// //           display: flex; flex-direction: column; align-items: center; gap: 12px;
// //           cursor: pointer; transition: all 0.28s cubic-bezier(.22,.9,.36,1);
// //           position: relative; overflow: hidden;
// //           box-shadow: 0 16px 48px rgba(0,0,0,0.32);
// //         }
// //         .ps-card::before {
// //           content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
// //           border-radius: 24px 24px 0 0;
// //         }
// //         .ps-card.admin::before  { background: linear-gradient(90deg,#CA9D28,#CE9A54,#F5E7C2); }
// //         .ps-card.citizen::before { background: linear-gradient(90deg,#4CABC1,#66A962,#4CABC1); }
// //         .ps-card:hover { transform: translateY(-8px) scale(1.025); box-shadow: 0 28px 64px rgba(0,0,0,0.42); }
// //         .ps-card.admin:hover   { border-color: rgba(202,157,40,0.60); }
// //         .ps-card.citizen:hover { border-color: rgba(76,171,193,0.60); }
// //         .ps-icon-wrap {
// //           width: 70px; height: 70px; border-radius: 50%;
// //           display: flex; align-items: center; justify-content: center; font-size: 30px;
// //           box-shadow: 0 6px 20px rgba(0,0,0,0.28);
// //         }
// //         .ps-card.admin   .ps-icon-wrap { background: linear-gradient(135deg,#CA9D28,#CE9A54); }
// //         .ps-card.citizen .ps-icon-wrap { background: linear-gradient(135deg,#4CABC1,#66A962); }
// //         .ps-card-title {
// //           font-family: 'Outfit', sans-serif; font-size: 17px; font-weight: 800;
// //           color: #F5E7C2; text-align: center;
// //         }
// //         .ps-card-sub {
// //           font-family: 'Tiro Devanagari Marathi', serif; font-size: 12px;
// //           color: rgba(245,231,194,0.55); text-align: center; line-height: 1.65;
// //         }
// //         .ps-card-btn {
// //           margin-top:auto; padding: 11px 0; border: none; border-radius: 12px;
// //           font-family: 'Outfit', sans-serif; font-size: 12px; font-weight: 800;
// //           letter-spacing: 0.8px; text-transform: uppercase;
// //           cursor: pointer; width: 100%; color: #fff; transition: all .22s;
// //         }
// //         .ps-card.admin   .ps-card-btn {
// //           background: linear-gradient(135deg,#CA9D28,#CE9A54);
// //           box-shadow: 0 4px 16px rgba(202,157,40,0.40);
// //         }
// //         .ps-card.citizen .ps-card-btn {
// //           background: linear-gradient(135deg,#4CABC1,#49ACC3);
// //           box-shadow: 0 4px 16px rgba(76,171,193,0.40);
// //         }
// //         .ps-card-btn:hover { transform: translateY(-2px); filter: brightness(1.1); }
// //         .ps-footer {
// //           font-size: 11px; color: rgba(245,231,194,0.25);
// //           font-family: 'Outfit', sans-serif;
// //           display: flex; align-items: center; gap: 8px;
// //         }
// //         .ps-dot {
// //           width: 5px; height: 5px; border-radius: 50%;
// //           background: #66A962; box-shadow: 0 0 6px #66A962;
// //           animation: pulse 2.5s infinite;
// //         }
// //         @keyframes pulse {
// //           0%,100%{opacity:1;transform:scale(1)}
// //           50%{opacity:.4;transform:scale(1.7)}
// //         }
// //         @media(max-width:560px){
// //           .ps-cards { flex-direction:column; align-items:center; }
// //           .ps-card  { width:88vw; max-width:300px; }
// //           .ps-title { font-size:20px; }
// //         }
// //       `}</style>

// //       <div className="ps-root">
// //         <div className="ps-bg" style={{ backgroundImage: `url(${bgImage})` }} />
// //         <div className="ps-overlay" />
// //         <div className="ps-stripe" />

// //         <div className="ps-box">

// //           {/* Header */}
// //           <div className="ps-header">
// //             <div className="ps-logo-ring">
// //               <img src={logo} alt="VVCMC" />
// //             </div>
// //             <div>
// //               <div className="ps-title">वसई-विरार शहर महानगरपालिका</div>
// //               <div className="ps-title" style={{ fontSize: 20, color: "#CE9A54", marginTop: 2 }}>
// //                 जन संवाद
// //               </div>
// //               <div className="ps-sub">Please select a portal to log in.</div>
// //             </div>
// //           </div>

// //           {/* Cards */}
// //           <div className="ps-cards">

// //             {/* Admin Card */}
// //             <div className="ps-card admin" onClick={() => navigate("/admin-login")}>
// //               <div className="ps-icon-wrap">🏛️</div>
// //               <div className="ps-card-title">Official Login</div>
// //               <div className="ps-card-sub">
// //                For Municipal Corporation Officers, Employees, and Administrative Staff.
// //               </div>
// //               <button className="ps-card-btn">Admin Login →</button>
// //             </div>

// //             {/* Citizen Card */}
// //             <div className="ps-card citizen" onClick={() => navigate("/citizen-login")}>
// //               <div className="ps-icon-wrap">👤</div>
// //               <div className="ps-card-title">Citizen Portal</div>
// //               <div className="ps-card-sub">
// //               For Citizens — To Book an Appointment with the Mayor.
// //               </div>
// //               <button className="ps-card-btn">Citizen Login →</button>
// //             </div>

// //           </div>

// //           {/* Footer */}
// //           <div className="ps-footer">
// //             <div className="ps-dot" />
// //             Secure Government Portal · All rights reserved
// //           </div>

// //         </div>
// //       </div>
// //     </>
// //   );
// // }



// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/vvcmclogo.jpg";
// import bgImage from "../assets/bg1.jpeg";

// export default function PortalSelect() {
//   const navigate = useNavigate();
//   const particlesRef = useRef(null);

//   // Floating particles effect
//   useEffect(() => {
//     const canvas = particlesRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const particles = Array.from({ length: 38 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       r: Math.random() * 2.2 + 0.4,
//       dx: (Math.random() - 0.5) * 0.35,
//       dy: -Math.random() * 0.5 - 0.15,
//       o: Math.random() * 0.45 + 0.08,
//       color: Math.random() > 0.5 ? "#CA9D28" : "#4CABC1",
//     }));

//     let raf;
//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach(p => {
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = p.color;
//         ctx.globalAlpha = p.o;
//         ctx.fill();
//         p.x += p.dx; p.y += p.dy;
//         if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
//         if (p.x < -10) p.x = canvas.width + 10;
//         if (p.x > canvas.width + 10) p.x = -10;
//       });
//       ctx.globalAlpha = 1;
//       raf = requestAnimationFrame(draw);
//     };
//     draw();

//     const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
//     window.addEventListener("resize", resize);
//     return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Cinzel:wght@500;700&family=Outfit:wght@300;400;600;700;800&display=swap');

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         :root {
//           --teal: #4CABC1;
//           --teal-dark: #2d8fa8;
//           --gold: #CA9D28;
//           --gold-light: #CE9A54;
//           --gold-pale: #F5E7C2;
//           --cream: #F5E7C2;
//           --green: #66A962;
//           --deep: #061e28;
//         }

//         .ps-root {
//           min-height: 100vh; width: 100%;
//           position: relative;
//           display: flex; align-items: center; justify-content: center;
//           font-family: 'Outfit', sans-serif;
//           overflow: hidden;
//         }

//         /* Background */
//         .ps-bg {
//           position: absolute; inset: 0;
//           background-size: cover; background-position: 65% center;
//           filter: brightness(0.55) saturate(1.2);
//           transform: scale(1.04);
//           transition: transform 18s ease;
//         }
//         .ps-root:hover .ps-bg { transform: scale(1.07); }

//         /* Layered overlay for depth */
//         .ps-overlay {
//           position: absolute; inset: 0;
//           background:
//             radial-gradient(ellipse 80% 60% at 50% 0%, rgba(76,171,193,0.18) 0%, transparent 70%),
//             radial-gradient(ellipse 60% 80% at 0% 100%, rgba(202,157,40,0.14) 0%, transparent 60%),
//             linear-gradient(160deg,
//               rgba(6,30,40,0.72) 0%,
//               rgba(13,65,80,0.60) 35%,
//               rgba(6,30,40,0.82) 100%);
//         }

//         /* Top gold stripe */
//         .ps-stripe {
//           position: absolute; top: 0; left: 0; right: 0; height: 3px;
//           background: linear-gradient(90deg,
//             transparent 0%, var(--gold) 15%, var(--gold-light) 35%,
//             var(--teal) 55%, var(--green) 75%, var(--gold-pale) 90%, transparent 100%);
//           z-index: 20;
//         }

//         /* Bottom stripe mirror */
//         .ps-stripe-bottom {
//           position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
//           background: linear-gradient(90deg,
//             transparent 0%, var(--teal) 20%, var(--gold) 50%, var(--teal) 80%, transparent 100%);
//           z-index: 20; opacity: 0.5;
//         }

//         /* Particle canvas */
//         .ps-canvas {
//           position: absolute; inset: 0; pointer-events: none; z-index: 5;
//         }

//         /* Decorative corner rings */
//         .ps-corner {
//           position: absolute; width: 180px; height: 180px; border-radius: 50%;
//           border: 1px solid rgba(76,171,193,0.12);
//           pointer-events: none; z-index: 6;
//         }
//         .ps-corner::after {
//           content: ''; position: absolute; inset: 14px; border-radius: 50%;
//           border: 1px solid rgba(202,157,40,0.10);
//         }
//         .ps-corner.tl { top: -70px; left: -70px; }
//         .ps-corner.br { bottom: -70px; right: -70px; border-color: rgba(202,157,40,0.12); }

//         /* Main content box */
//         .ps-box {
//           position: relative; z-index: 10;
//           display: flex; flex-direction: column; align-items: center; gap: 36px;
//           padding: 20px 16px;
//           animation: wrapIn .65s cubic-bezier(.22,.9,.36,1) both;
//         }
//         @keyframes wrapIn {
//           from { opacity:0; transform:translateY(32px) scale(0.97); }
//           to   { opacity:1; transform:translateY(0)   scale(1);    }
//         }

//         /* Header */
//         .ps-header { display:flex; flex-direction:column; align-items:center; gap:16px; text-align:center; }

//         /* Logo with animated gold ring */
//         .ps-logo-outer {
//           width: 100px; height: 100px; border-radius: 50%; padding: 3px;
//           background: conic-gradient(
//             #CA9D28 0deg, #F5E7C2 80deg, #CE9A54 160deg,
//             #4CABC1 220deg, #66A962 280deg, #CE9A54 330deg, #CA9D28 360deg
//           );
//           box-shadow: 0 0 0 1px rgba(202,157,40,0.25), 0 12px 48px rgba(0,0,0,0.55), 0 0 40px rgba(76,171,193,0.20);
//           animation: spinRing 18s linear infinite;
//         }
//         @keyframes spinRing {
//           from { filter: hue-rotate(0deg); }
//           to   { filter: hue-rotate(360deg); }
//         }
//         .ps-logo-inner {
//           width: 100%; height: 100%; border-radius: 50%;
//           background: rgba(6,30,40,0.6);
//           padding: 4px; display: flex; align-items: center; justify-content: center;
//         }
//         .ps-logo-inner img {
//           width: 100%; height: 100%; border-radius: 50%; object-fit: cover;
//           border: 2px solid rgba(255,255,255,0.85); display: block;
//         }

//         /* Title text */
//         .ps-title-marathi {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 28px; font-weight: 700;
//           color: var(--cream);
//           text-shadow: 0 2px 20px rgba(0,0,0,0.5);
//           line-height: 1.2; letter-spacing: 0.5px;
//         }
//         .ps-title-jan {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 22px; color: var(--gold-light);
//           text-shadow: 0 2px 12px rgba(202,157,40,0.40);
//           margin-top: 4px;
//         }
//         .ps-divider {
//           width: 120px; height: 1px; margin: 6px auto;
//           background: linear-gradient(90deg, transparent, var(--gold-light), var(--teal), transparent);
//           opacity: 0.7;
//         }
//         .ps-sub {
//           font-family: 'Outfit', sans-serif;
//           font-size: 13px; color: rgba(245,231,194,0.55);
//           letter-spacing: 0.5px;
//         }

//         /* Cards row */
//         .ps-cards {
//           display: flex; gap: 24px; flex-wrap: wrap; justify-content: center;
//           align-items: stretch;
//         }

//         /* Individual card */
//         .ps-card {
//           width: 250px; min-height: 310px;
//           border-radius: 24px;
//           padding: 36px 24px 28px;
//           display: flex; flex-direction: column;
//           align-items: center; gap: 14px;
//           cursor: pointer;
//           transition: transform 0.30s cubic-bezier(.22,.9,.36,1), box-shadow 0.30s ease, border-color 0.30s ease;
//           position: relative; overflow: hidden;
//           animation: cardIn .7s cubic-bezier(.22,.9,.36,1) both;
//         }
//         .ps-card:nth-child(1) { animation-delay: .1s; }
//         .ps-card:nth-child(2) { animation-delay: .22s; }
//         @keyframes cardIn {
//           from { opacity:0; transform:translateY(24px) scale(0.96); }
//           to   { opacity:1; transform:translateY(0)    scale(1);    }
//         }

//         /* Glass morphism base */
//         .ps-card.admin {
//           background: linear-gradient(145deg, rgba(24,70,30,0.55) 0%, rgba(10,45,20,0.72) 100%);
//           backdrop-filter: blur(28px);
//           border: 1.5px solid rgba(202,157,40,0.25);
//           box-shadow: 0 20px 60px rgba(0,0,0,0.40), inset 0 1px 0 rgba(202,157,40,0.15);
//         }
//         .ps-card.citizen {
//           background: linear-gradient(145deg, rgba(12,60,80,0.55) 0%, rgba(6,35,55,0.72) 100%);
//           backdrop-filter: blur(28px);
//           border: 1.5px solid rgba(76,171,193,0.25);
//           box-shadow: 0 20px 60px rgba(0,0,0,0.40), inset 0 1px 0 rgba(76,171,193,0.15);
//         }

//         /* Top accent bar */
//         .ps-card::before {
//           content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
//           border-radius: 24px 24px 0 0; transition: opacity .3s;
//         }
//         .ps-card.admin::before  { background: linear-gradient(90deg, #CA9D28, #F5E7C2, #CE9A54); }
//         .ps-card.citizen::before { background: linear-gradient(90deg, #4CABC1, #66A962, #4CABC1); }

//         /* Glow orb behind icon */
//         .ps-card::after {
//           content: ''; position: absolute; top: 20px; left: 50%; transform: translateX(-50%);
//           width: 110px; height: 110px; border-radius: 50%;
//           opacity: 0.10; pointer-events: none; transition: opacity .3s;
//         }
//         .ps-card.admin::after   { background: radial-gradient(circle, #CA9D28, transparent); }
//         .ps-card.citizen::after { background: radial-gradient(circle, #4CABC1, transparent); }

//         /* Hover states */
//         .ps-card:hover {
//           transform: translateY(-10px) scale(1.03);
//         }
//         .ps-card.admin:hover {
//           box-shadow: 0 32px 80px rgba(0,0,0,0.50), 0 0 40px rgba(202,157,40,0.18), inset 0 1px 0 rgba(202,157,40,0.25);
//           border-color: rgba(202,157,40,0.55);
//         }
//         .ps-card.citizen:hover {
//           box-shadow: 0 32px 80px rgba(0,0,0,0.50), 0 0 40px rgba(76,171,193,0.18), inset 0 1px 0 rgba(76,171,193,0.25);
//           border-color: rgba(76,171,193,0.55);
//         }
//         .ps-card:hover::after { opacity: 0.20; }

//         /* Icon circle */
//         .ps-icon-wrap {
//           width: 76px; height: 76px; border-radius: 50%;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 32px; position: relative; z-index: 2;
//           transition: transform .3s cubic-bezier(.22,.9,.36,1);
//         }
//         .ps-card.admin   .ps-icon-wrap {
//           background: linear-gradient(135deg, #CA9D28 0%, #CE9A54 60%, #F5E7C2 100%);
//           box-shadow: 0 8px 28px rgba(202,157,40,0.45), 0 0 0 4px rgba(202,157,40,0.12);
//         }
//         .ps-card.citizen .ps-icon-wrap {
//           background: linear-gradient(135deg, #4CABC1 0%, #2d9ab8 60%, #66A962 100%);
//           box-shadow: 0 8px 28px rgba(76,171,193,0.45), 0 0 0 4px rgba(76,171,193,0.12);
//         }
//         .ps-card:hover .ps-icon-wrap { transform: scale(1.10) rotate(-4deg); }

//         /* Card texts */
//         .ps-card-title {
//           font-family: 'Cinzel', serif;
//           font-size: 16px; font-weight: 700;
//           color: var(--cream); text-align: center;
//           letter-spacing: 0.5px; position: relative; z-index: 2;
//         }
//         .ps-card-sub {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 12.5px; color: rgba(245,231,194,0.55);
//           text-align: center; line-height: 1.7;
//           position: relative; z-index: 2; flex: 1;
//         }
//         .ps-card-sep {
//           width: 40px; height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(245,231,194,0.3), transparent);
//         }

//         /* Button */
//         .ps-card-btn {
//           margin-top: auto; padding: 12px 0;
//           border: none; border-radius: 14px;
//           font-family: 'Cinzel', serif;
//           font-size: 11px; font-weight: 700;
//           letter-spacing: 1.2px; text-transform: uppercase;
//           cursor: pointer; width: 100%; color: #fff;
//           position: relative; z-index: 2; overflow: hidden;
//           transition: transform .22s, filter .22s, box-shadow .22s;
//         }
//         .ps-card-btn::before {
//           content: ''; position: absolute; inset: 0;
//           background: rgba(255,255,255,0); transition: background .22s;
//         }
//         .ps-card-btn:hover::before { background: rgba(255,255,255,0.10); }
//         .ps-card.admin   .ps-card-btn {
//           background: linear-gradient(135deg, #CA9D28 0%, #CE9A54 100%);
//           box-shadow: 0 4px 18px rgba(202,157,40,0.45);
//         }
//         .ps-card.citizen .ps-card-btn {
//           background: linear-gradient(135deg, #4CABC1 0%, #2d9ab8 100%);
//           box-shadow: 0 4px 18px rgba(76,171,193,0.45);
//         }
//         .ps-card-btn:hover {
//           transform: translateY(-2px);
//           filter: brightness(1.12);
//           box-shadow: 0 8px 28px rgba(0,0,0,0.35);
//         }
//         .ps-card-btn:active { transform: translateY(0); filter: brightness(0.95); }

//         /* Footer */
//         .ps-footer {
//           font-size: 11px; color: rgba(245,231,194,0.28);
//           font-family: 'Outfit', sans-serif;
//           display: flex; align-items: center; gap: 10px;
//           letter-spacing: 0.3px;
//         }
//         .ps-dot {
//           width: 6px; height: 6px; border-radius: 50%;
//           background: var(--green); box-shadow: 0 0 8px var(--green);
//           animation: pulse 2.5s infinite;
//         }
//         @keyframes pulse {
//           0%,100%{opacity:1;transform:scale(1)}
//           50%{opacity:.35;transform:scale(1.8)}
//         }

//         /* Responsive */
//         @media(max-width:600px){
//           .ps-cards { flex-direction:column; align-items:center; }
//           .ps-card  { width:88vw; max-width:310px; min-height:auto; }
//           .ps-title-marathi { font-size:22px; }
//           .ps-title-jan { font-size:18px; }
//         }
//       `}</style>

//       <div className="ps-root">
//         {/* Layers */}
//         <div className="ps-bg" style={{ backgroundImage:`url(${bgImage})` }} />
//         <div className="ps-overlay" />
//         <div className="ps-stripe" />
//         <div className="ps-stripe-bottom" />
//         <canvas className="ps-canvas" ref={particlesRef} />
//         <div className="ps-corner tl" />
//         <div className="ps-corner br" />

//         <div className="ps-box">

//           {/* ── Header ── */}
//           <div className="ps-header">
//             <div className="ps-logo-outer">
//               <div className="ps-logo-inner">
//                 <img src={logo} alt="VVCMC" />
//               </div>
//             </div>
//             <div>
//               <div className="ps-title-marathi">वसई-विरार शहर महानगरपालिका</div>
//               <div className="ps-title-jan">जन संवाद</div>
//               <div className="ps-divider" />
//               <div className="ps-sub">Please select a portal to continue</div>
//             </div>
//           </div>

//           {/* ── Cards ── */}
//           <div className="ps-cards">

//             {/* Admin */}
//             <div className="ps-card admin" onClick={() => navigate("/admin-login")}>
//               <div className="ps-icon-wrap">🏛️</div>
//               <div className="ps-card-title">Official Login</div>
//               <div className="ps-card-sep" />
//               <div className="ps-card-sub">
//                 For Municipal Corporation Officers, Employees & Administrative Staff
//               </div>
//               <button className="ps-card-btn">Admin Login →</button>
//             </div>

//             {/* Citizen */}
//             <div className="ps-card citizen" onClick={() => navigate("/citizen-login")}>
//               <div className="ps-icon-wrap">👤</div>
//               <div className="ps-card-title">Citizen Portal</div>
//               <div className="ps-card-sep" />
//               <div className="ps-card-sub">
//                 For Citizens — To Book an Appointment with the Mayor
//               </div>
//               <button className="ps-card-btn">Citizen Login →</button>
//             </div>

//           </div>

//           {/* ── Footer ── */}
//           <div className="ps-footer">
//             <div className="ps-dot" />
//             Secure Government Portal · VVCMC Jan Samvaad · All rights reserved
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }



import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/vvcmclogo.jpg";
import bgImage from "../assets/bg1.jpeg";

export default function PortalSelect() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Outfit:wght@400;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --teal: #4CABC1; --teal-dark: #49ACC3;
          --gold: #CA9D28; --gold-light: #CE9A54;
          --cream: #F5E7C2; --green: #66A962;
        }

        .ps-root {
          min-height: 100vh; width: 100%;
          position: relative; display: flex;
          align-items: center; justify-content: center;
          font-family: 'Outfit', sans-serif; overflow: hidden;
        }

        .ps-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: 68% center;
          filter: brightness(0.62) saturate(1.15);
          transition: transform 14s ease;
        }
        .ps-root:hover .ps-bg { transform: scale(1.03); }

        /* Richer overlay — same teal/dark tones */
        .ps-overlay {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 50% -10%, rgba(76,171,193,0.22) 0%, transparent 65%),
            radial-gradient(ellipse 50% 70% at 100% 100%, rgba(202,157,40,0.12) 0%, transparent 55%),
            linear-gradient(150deg,
              rgba(10,55,65,0.68) 0%,
              rgba(20,90,105,0.52) 40%,
              rgba(8,40,50,0.80) 100%);
        }

        /* Top accent stripe */
        .ps-stripe {
          position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg,
            var(--gold) 0%, var(--gold-light) 22%, var(--teal) 45%,
            var(--teal-dark) 65%, var(--green) 85%, var(--cream) 100%);
          z-index: 20;
        }

        /* Subtle corner glow orbs */
        .ps-glow-tl {
          position: absolute; top: -120px; left: -120px;
          width: 320px; height: 320px; border-radius: 50%;
          background: radial-gradient(circle, rgba(76,171,193,0.14) 0%, transparent 70%);
          pointer-events: none; z-index: 5;
        }
        .ps-glow-br {
          position: absolute; bottom: -120px; right: -120px;
          width: 320px; height: 320px; border-radius: 50%;
          background: radial-gradient(circle, rgba(202,157,40,0.12) 0%, transparent 70%);
          pointer-events: none; z-index: 5;
        }

        /* Floating dots decoration */
        .ps-dots {
          position: absolute; inset: 0; pointer-events: none; z-index: 4;
          background-image:
            radial-gradient(circle, rgba(76,171,193,0.18) 1px, transparent 1px),
            radial-gradient(circle, rgba(202,157,40,0.12) 1px, transparent 1px);
          background-size: 48px 48px, 72px 72px;
          background-position: 0 0, 24px 24px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
        }

        .ps-box {
          position: relative; z-index: 10;
          display: flex; flex-direction: column;
          align-items: center; gap: 34px;
          animation: wrapIn .55s cubic-bezier(.22,.9,.36,1) both;
        }
        @keyframes wrapIn {
          from { opacity:0; transform:translateY(28px) scale(0.97); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }

        /* ── Header ── */
        .ps-header {
          display: flex; flex-direction: column;
          align-items: center; gap: 14px; text-align: center;
        }

        /* Logo — layered rings */
  /* ps-logo-wrap */
.ps-logo-wrap {
  width: 100px; height: 100px;
  border-radius: 50%;
  padding: 4px;
  background: conic-gradient(
    #4CABC1 0deg,
    #66A962 80deg,
    #F5E7C2 150deg,
    #CE9A54 220deg,
    #CA9D28 280deg,
    #CE9A54 320deg,
    #4CABC1 360deg
  );
  box-shadow: 0 8px 32px rgba(0,0,0,0.45), 0 0 20px rgba(76,171,193,0.20);
}

/* ps-logo-img */
.ps-logo-img {
  width: 100%; height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
.ps-logo-ring1 {
  position: absolute; inset: 0; border-radius: 50%;
  background: conic-gradient(#CA9D28 0deg,#CE9A54 90deg,#F5E7C2 180deg,#CE9A54 260deg,#CA9D28 360deg);
  animation: spinSlow 24s linear infinite;
  padding: 3px;
}
.ps-logo-ring2 {
  position: absolute; inset: 3px; border-radius: 50%;
  background: rgba(8,40,50,0.90);
}



        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Title */
        .ps-title {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 27px; font-weight: 700; color: var(--cream);
          text-shadow: 0 2px 18px rgba(0,0,0,0.38);
          line-height: 1.25;
        }
        .ps-title-jan {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 21px; color: var(--gold-light);
          text-shadow: 0 2px 14px rgba(202,157,40,0.35);
          margin-top: 3px;
        }
        .ps-hr {
          width: 110px; height: 1.5px; margin: 8px auto;
          background: linear-gradient(90deg, transparent, var(--gold-light), var(--teal), transparent);
          opacity: 0.6;
        }
        .ps-sub {
          font-family: 'Outfit', sans-serif;
          font-size: 19px; color: rgba(255,255,255,0.52);
          letter-spacing: 0.4px;
        }

        /* ── Cards ── */
        .ps-cards {
          display: flex; gap: 22px;
          flex-wrap: wrap; justify-content: center;
          align-items: stretch;
        }

        .ps-card {
          width: 248px; min-height: 316px;
          border-radius: 22px;
          padding: 34px 22px 26px;
          display: flex; flex-direction: column;
          align-items: center; gap: 12px;
          cursor: pointer;
          transition: transform .28s cubic-bezier(.22,.9,.36,1), box-shadow .28s ease, border-color .28s ease;
          position: relative; overflow: hidden;
          animation: cardIn .65s cubic-bezier(.22,.9,.36,1) both;
        }
        .ps-card:nth-child(1) { animation-delay: .1s; }
        .ps-card:nth-child(2) { animation-delay: .2s; }
        @keyframes cardIn {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* Glass background */
        .ps-card.admin {
          // background: linear-gradient(155deg,
          //   rgba(30,80,35,0.62) 0%,
          //   rgba(12,50,18,0.78) 100%);
          // backdrop-filter: blur(30px);
          // border: 1.5px solid rgba(202,157,40,0.28);
          // box-shadow:
          //   0 20px 56px rgba(0,0,0,0.42),
          //   inset 0 1px 0 rgba(202,157,40,0.18),
          //   inset 0 -1px 0 rgba(0,0,0,0.20);

           background: linear-gradient(155deg,
            rgba(12,65,85,0.62) 0%,
            rgba(6,38,58,0.78) 100%);
          backdrop-filter: blur(30px);
          border: 1.5px solid rgba(76,171,193,0.28);
          box-shadow:
            0 20px 56px rgba(0,0,0,0.42),
            inset 0 1px 0 rgba(76,171,193,0.18),
            inset 0 -1px 0 rgba(0,0,0,0.20);
        }
        .ps-card.citizen {
          background: linear-gradient(155deg,
            rgba(12,65,85,0.62) 0%,
            rgba(6,38,58,0.78) 100%);
          backdrop-filter: blur(30px);
          border: 1.5px solid rgba(76,171,193,0.28);
          box-shadow:
            0 20px 56px rgba(0,0,0,0.42),
            inset 0 1px 0 rgba(76,171,193,0.18),
            inset 0 -1px 0 rgba(0,0,0,0.20);
        }

        /* Top bar */
        .ps-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          border-radius: 22px 22px 0 0;
        }
        .ps-card.admin::before  { background: linear-gradient(90deg,#CA9D28,#F5E7C2,#CE9A54); }
        .ps-card.citizen::before { background: linear-gradient(90deg,#4CABC1,#66A962,#4CABC1); }

        /* Inner glow blob */
        .ps-card::after {
          content: ''; position: absolute;
          top: -30px; left: 50%; transform: translateX(-50%);
          width: 150px; height: 150px; border-radius: 50%;
          opacity: 0.08; pointer-events: none; transition: opacity .3s;
          filter: blur(20px);
        }
        .ps-card.admin::after   { background: #CA9D28; }
        .ps-card.citizen::after { background: #4CABC1; }

        .ps-card:hover { transform: translateY(-10px) scale(1.025); }
        .ps-card.admin:hover {
          box-shadow: 0 32px 80px rgba(0,0,0,0.50),
            0 0 0 1px rgba(202,157,40,0.45),
            0 0 40px rgba(202,157,40,0.15),
            inset 0 1px 0 rgba(202,157,40,0.30);
          border-color: rgba(202,157,40,0.55);
        }
        .ps-card.citizen:hover {
          box-shadow: 0 32px 80px rgba(0,0,0,0.50),
            0 0 0 1px rgba(76,171,193,0.45),
            0 0 40px rgba(76,171,193,0.15),
            inset 0 1px 0 rgba(76,171,193,0.30);
          border-color: rgba(76,171,193,0.55);
        }
        .ps-card:hover::after { opacity: 0.16; }

        /* Icon */
        .ps-icon-wrap {
          width: 74px; height: 74px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 31px; position: relative; z-index: 2;
          transition: transform .28s cubic-bezier(.22,.9,.36,1), box-shadow .28s;
        }
        .ps-card.admin .ps-icon-wrap {
          background: linear-gradient(135deg, #CA9D28, #CE9A54, #F5E7C2);
          box-shadow: 0 8px 24px rgba(202,157,40,0.50), 0 0 0 5px rgba(202,157,40,0.10);
        }
        .ps-card.citizen .ps-icon-wrap {
          background: linear-gradient(135deg, #4CABC1, #49ACC3, #66A962);
          box-shadow: 0 8px 24px rgba(76,171,193,0.50), 0 0 0 5px rgba(76,171,193,0.10);
        }
        .ps-card:hover .ps-icon-wrap {
          transform: translateY(-4px) scale(1.08);
        }
        .ps-card.admin:hover .ps-icon-wrap {
          box-shadow: 0 14px 36px rgba(202,157,40,0.60), 0 0 0 5px rgba(202,157,40,0.18);
        }
        .ps-card.citizen:hover .ps-icon-wrap {
          box-shadow: 0 14px 36px rgba(76,171,193,0.60), 0 0 0 5px rgba(76,171,193,0.18);
        }

        .ps-card-title {
          font-family: 'Outfit', sans-serif;
          font-size: 17px; font-weight: 800;
          color: var(--cream); text-align: center;
          letter-spacing: 0.2px; position: relative; z-index: 2;
        }
        .ps-card-sep {
          width: 36px; height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.35), transparent);
        }
        .ps-card-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          // font-size: 12.5px; color: rgba(245,231,194,0.52);
          font-size: 15px; color: rgba(255,255,255,0.52);
          text-align: center; line-height: 1.7;
          position: relative; z-index: 2; flex: 1;
        }

        /* Button */
        .ps-card-btn {
          margin-top: auto; padding: 12px 0;
          border: none; border-radius: 13px;
          font-family: 'Outfit', sans-serif;
          font-size: 12px; font-weight: 800;
          letter-spacing: 0.9px; text-transform: uppercase;
          cursor: pointer; width: 100%; color: #fff;
          position: relative; z-index: 2;
          transition: transform .20s, filter .20s, box-shadow .20s;
        }
        .ps-card.admin .ps-card-btn {
          background: linear-gradient(135deg,#CA9D28,#CE9A54);
          box-shadow: 0 4px 18px rgba(202,157,40,0.45);
        }
        .ps-card.citizen .ps-card-btn {
          background: linear-gradient(135deg,#4CABC1,#49ACC3);
          box-shadow: 0 4px 18px rgba(76,171,193,0.45);
        }
        .ps-card-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.12);
        }
        .ps-card-btn:active { transform: translateY(0); filter: brightness(0.94); }

        /* Footer */
        .ps-footer {
          font-size: 11px; color: rgba(245,231,194,0.24);
          font-family: 'Outfit', sans-serif;
          display: flex; align-items: center; gap: 8px;
        }
        .ps-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #66A962; box-shadow: 0 0 7px #66A962;
          animation: pulse 2.5s infinite;
        }
        @keyframes pulse {
          0%,100%{opacity:1;transform:scale(1)}
          50%{opacity:.35;transform:scale(1.8)}
        }

        @media(max-width:560px){
          .ps-cards { flex-direction:column; align-items:center; }
          .ps-card  { width:88vw; max-width:300px; }
          .ps-title { font-size:21px; }
          .ps-title-jan { font-size:18px; }
        }
      `}</style>

      <div className="ps-root">
        <div className="ps-bg" style={{ backgroundImage:`url(${bgImage})` }} />
        <div className="ps-overlay" />
        <div className="ps-stripe" />
        <div className="ps-glow-tl" />
        <div className="ps-glow-br" />
        <div className="ps-dots" />

        <div className="ps-box">

          {/* Header */}
          <div className="ps-header">
            {/* <div className="ps-logo-wrap">
              <div className="ps-logo-ring1" />
              <div className="ps-logo-ring2" />
              <img className="ps-logo-img" src={logo} alt="VVCMC" />
            </div> */}

            <div className="ps-logo-wrap">
  <img className="ps-logo-img" src={logo} alt="VVCMC" />
</div>
            <div>
              <div className="ps-title">वसई-विरार शहर महानगरपालिका</div>
              <div className="ps-title-jan">जन संवाद</div>
              <div className="ps-hr" />
              <div className="ps-sub">Please select a portal to log in.</div>
            </div>
          </div>

          {/* Cards */}
          <div className="ps-cards">
            <div className="ps-card admin" onClick={() => navigate("/admin-login")}>
              <div className="ps-icon-wrap">🏛️</div>
              <div className="ps-card-title">Official Login</div>
              <div className="ps-card-sep" />
              <div className="ps-card-sub">
                For Municipal Corporation Officers, Employees, and Administrative Staff.
              </div>
              <button className="ps-card-btn">Official Login →</button>
            </div>

            <div className="ps-card citizen" onClick={() => navigate("/citizen-login")}>
              <div className="ps-icon-wrap">👤</div>
              <div className="ps-card-title">Citizen Login</div>
              <div className="ps-card-sep" />
              <div className="ps-card-sub">
                For Citizens — To Book an Appointment with the Mayor.
              </div>
              <button className="ps-card-btn">Citizen Login →</button>
            </div>
          </div>

          {/* Footer */}
          <div className="ps-footer">
            <div className="ps-dot" />
            Secure Government Portal · All rights reserved
          </div>

        </div>
      </div>
    </>
  );
}