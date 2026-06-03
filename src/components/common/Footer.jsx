// Map image remove kel
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import vvcmcMap from "../../assets/vvcmcmap.png"; // image 3 - vasai virar map
// import logo from "../../assets/vvcmclogo.jpg";


// export default function Footer() {
//   const navigate = useNavigate();
//   const year = new Date().getFullYear();

//   const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=DM+Sans:wght@300;400;500;600;700&display=swap');

//         :root {
//           --foot-bg:    #0d2e2a;
//           --foot-mid:   #102e2b;
//           --foot-line:  rgba(81,171,172,0.18);
//           --gold:       #F5E6BF;
//           --teal:       #51ABAC;
//           --blue:       #4CABBF;
//           --green:      #028945;
//           --gold-strip: #D09A50;
//         }

//         /* ══ FOOTER WRAPPER ═══════════════════════════════════ */
//         .footer {
//           background: var(--foot-bg);
//           color: rgba(255,255,255,0.82);
//           font-family: 'DM Sans', sans-serif;
//           position: relative;
//           overflow: hidden;
//         }

//         /* subtle diagonal line decoration like Ataraxis */
//         .footer::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0; bottom: 0;
//           background-image:
//             linear-gradient(135deg, rgba(81,171,172,0.04) 0%, transparent 50%),
//             repeating-linear-gradient(
//               135deg,
//               transparent 0px, transparent 80px,
//               rgba(81,171,172,0.04) 80px, rgba(81,171,172,0.04) 81px
//             );
//           pointer-events: none;
//           z-index: 0;
//         }

//         .footer-body {
//           position: relative; z-index: 1;
//           max-width: 1200px; margin: 0 auto;
//           padding: 72px 48px 48px;
//           display: grid;
//           grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
//           gap: 48px;
//         }

//         /* ── Column 1: Brand + address ── */
//         .footer-brand { }
//         .footer-logo-row {
//           display: flex; align-items: center; gap: 12px;
//           margin-bottom: 20px;
//         }
//         .footer-logo-circle {
//           width: 48px; height: 48px; border-radius: 50%;
//           background: var(--teal);
//           display: flex; align-items: center; justify-content: center;
//           font-size: 22px; flex-shrink: 0;
//           box-shadow: 0 4px 16px rgba(81,171,172,0.3);
//         }
//         .footer-brand-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 15px; font-weight: 700;
//           color: var(--gold); line-height: 1.3;
//         }
//         .footer-brand-sub {
//           font-size: 10px; color: var(--teal);
//           letter-spacing: 1px; text-transform: uppercase;
//           font-weight: 600; margin-top: 2px;
//         }

//         .footer-tagline {
//           font-size: 13px; color: rgba(255,255,255,0.55);
//           line-height: 1.75; margin-bottom: 24px;
//           max-width: 280px;
//         }

//         /* address block */
//         .footer-address { margin-bottom: 24px; }
//         .footer-address-title {
//           font-size: 11px; font-weight: 700; color: var(--teal);
//           text-transform: uppercase; letter-spacing: 0.8px;
//           margin-bottom: 10px;
//         }
//         .footer-address-text {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 13px; color: rgba(255,255,255,0.7);
//           line-height: 1.85;
//         }

//         /* contact numbers */
//         .footer-contacts { display: flex; flex-direction: column; gap: 6px; }
//         .footer-contact-row {
//           display: flex; align-items: flex-start; gap: 8px;
//           font-size: 12.5px; color: rgba(255,255,255,0.65);
//         }
//         .footer-contact-icon { color: var(--teal); font-size: 14px; flex-shrink: 0; margin-top: 1px; }
//         .footer-contact-label { color: rgba(255,255,255,0.4); font-size: 11px; }

//         /* ── Column 2: Site Map ── */
//         .footer-col-title {
//           font-size: 13px; font-weight: 700; color: #fff;
//           letter-spacing: 0.5px; margin-bottom: 20px;
//           padding-bottom: 10px;
//           border-bottom: 1px solid var(--foot-line);
//         }
//         .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
//         .footer-links li a,
//         .footer-links li button {
//           font-size: 13px; color: rgba(255,255,255,0.6);
//           text-decoration: none; background: none; border: none;
//           cursor: pointer; padding: 0;
//           transition: color .18s, padding-left .18s;
//           display: flex; align-items: center; gap: 6px;
//         }
//         .footer-links li a:hover,
//         .footer-links li button:hover { color: var(--teal); padding-left: 4px; }
//         .footer-links li a::before,
//         .footer-links li button::before { content: '›'; color: var(--teal); font-size: 15px; }

//         /* ── Column 3: Contact / Social ── */
//         .footer-social { display: flex; gap: 10px; margin-bottom: 24px; }
//         .footer-social-btn {
//           width: 36px; height: 36px; border-radius: 50%;
//           border: 1px solid rgba(81,171,172,0.3);
//           background: rgba(81,171,172,0.08);
//           display: flex; align-items: center; justify-content: center;
//           color: rgba(255,255,255,0.6); font-size: 15px;
//           cursor: pointer; transition: all .18s; text-decoration: none;
//         }
//         .footer-social-btn:hover { background: var(--teal); color: #fff; border-color: var(--teal); }

//         .footer-whatsapp-chip {
//           display: inline-flex; align-items: center; gap: 8px;
//           background: rgba(37,211,102,0.12);
//           border: 1px solid rgba(37,211,102,0.25);
//           border-radius: 999px; padding: 8px 16px;
//           font-size: 13px; color: #25d366; font-weight: 600;
//           text-decoration: none; transition: all .18s;
//           margin-bottom: 16px;
//         }
//         .footer-whatsapp-chip:hover { background: rgba(37,211,102,0.22); }

//         /* ── Column 4: Map ── */
//         .footer-map-wrap {
//           border-radius: 14px; overflow: hidden;
//           border: 1px solid rgba(81,171,172,0.2);
//           box-shadow: 0 8px 32px rgba(0,0,0,0.3);
//           position: relative;
//         }
//         .footer-map-wrap img { width: 100%; display: block; object-fit: cover; height: 220px; opacity: 0.85; }
//         .footer-map-label {
//           position: absolute; bottom: 0; left: 0; right: 0;
//           background: linear-gradient(0deg, rgba(13,46,42,0.95) 0%, transparent 100%);
//           padding: 14px 14px 10px;
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 12px; color: var(--gold); font-weight: 600;
//           text-align: center;
//         }

//         /* ══ DIVIDER ══════════════════════════════════════════ */
//         .footer-divider {
//           position: relative; z-index: 1;
//           max-width: 1200px; margin: 0 auto;
//           height: 1px; background: var(--foot-line);
//           margin-left: 48px; margin-right: 48px;
//         }

//         /* ══ FOOTER BOTTOM ════════════════════════════════════ */
//         .footer-bottom {
//           position: relative; z-index: 1;
//           max-width: 1200px; margin: 0 auto;
//           padding: 20px 48px;
//           display: flex; align-items: center; justify-content: space-between;
//           flex-wrap: wrap; gap: 12px;
//         }
//         .footer-copy {
//           font-size: 12px; color: rgba(255,255,255,0.38);
//         }
//         .footer-back-top {
//           display: inline-flex; align-items: center; gap: 8px;
//           border: 1px solid rgba(81,171,172,0.35);
//           background: transparent;
//           border-radius: 999px; padding: 8px 20px;
//           font-size: 12px; font-weight: 700; color: var(--teal);
//           cursor: pointer; transition: all .2s; letter-spacing: 0.5px;
//           text-transform: uppercase;
//         }
//         .footer-back-top:hover { background: rgba(81,171,172,0.12); transform: translateY(-2px); }
//         .footer-back-top svg { transition: transform .2s; }
//         .footer-back-top:hover svg { transform: translateY(-3px); }

//         /* ══ GOLD STRIP at very bottom ════════════════════════ */
//         .footer-gold-strip {
//           background: var(--gold-strip);
//           text-align: center; padding: 8px 24px;
//           font-size: 11px; color: rgba(0,0,0,0.55);
//           font-weight: 600; letter-spacing: 0.3px;
//         }

//         /* ══ RESPONSIVE ════════════════════════════════════════ */
//         @media(max-width:1024px){
//           .footer-body { grid-template-columns: 1fr 1fr; gap: 36px; }
//         }
//         @media(max-width:640px){
//           .footer-body { grid-template-columns: 1fr; padding: 48px 24px 32px; }
//           .footer-bottom { padding: 16px 24px; flex-direction: column; align-items: flex-start; }
//           .footer-divider { margin-left: 24px; margin-right: 24px; }
//         }
//       `}</style>

//       <footer className="footer">

//         {/* ── Main Body ─────────────────────────────────────── */}
//         <div className="footer-body">

//           {/* Col 1 — Brand + Address */}
//           <div className="footer-brand">
//             <div className="footer-logo-row">
//             <div className="cn-logo-wrap">
//                           <img src={logo} alt="VVCMC" />
//                         </div>
//               <div>
//                 <div className="footer-brand-name">वसई-विरार शहर<br />महानगरपालिका</div>
//                 <div className="footer-brand-sub">VVCMC — जन संवाद</div>
//               </div>
//             </div>

//             <p className="footer-tagline">
//               नागरिकांसाठी, नागरिकांकडून — पारदर्शक, जलद आणि डिजिटल सेवा देण्यासाठी वचनबद्ध.
//             </p>

//             <div className="footer-address">
//               <div className="footer-address-title">मुख्य कार्यालय</div>
//               <div className="footer-address-text">
//                 विराट नगर, म्हाडा कॉलनी जवळ,<br />
//                 विरार पश्चिम.<br />
//                 पिन : 401303
//               </div>
//             </div>

//             <div className="footer-contacts">
//               <div className="footer-contact-row">
//                 <span className="footer-contact-icon">📞</span>
//                 <div>
//                   <div className="footer-contact-label">मुख्य कार्यालय</div>
//                   <div>0250-6630000</div>
//                 </div>
//               </div>
//               <div className="footer-contact-row">
//                 <span className="footer-contact-icon">🚨</span>
//                 <div>
//                   <div className="footer-contact-label">आपत्ती व्यवस्थापन</div>
//                   <div>0250-2334546 / 0250-2334547</div>
//                 </div>
//               </div>
//               <div className="footer-contact-row">
//                 <span className="footer-contact-icon">📱</span>
//                 <div>
//                   <div className="footer-contact-label">Helpline</div>
//                   <div>7058911125 / 7058991430 / 8446427643</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Col 2 — Site Map */}
//           <div>
//             <div className="footer-col-title">Site Map</div>
//             <ul className="footer-links">
//               <li><button onClick={() => navigate("/")}>Home</button></li>
//               <li><button onClick={() => navigate("/book-appointment")}>Appointment बुक करा</button></li>
//               <li><button onClick={() => navigate("/my-appointments")}>My Appointments</button></li>
//               <li><button onClick={() => navigate("/register")}>Register</button></li>
//               <li><button onClick={() => navigate("/login")}>Login</button></li>
//             </ul>
//           </div>

//           {/* Col 3 — Contact & Social */}
//           <div>
//             <div className="footer-col-title">संपर्क साधा</div>

//             <a
//               className="footer-whatsapp-chip"
//               href="https://wa.me/919665877727"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <span>💬</span> WhatsApp Chatbot
//             </a>

//             <div className="footer-contact-row" style={{ marginBottom:"14px" }}>
//               <span className="footer-contact-icon">💬</span>
//               <div>
//                 <div className="footer-contact-label">WhatsApp</div>
//                 <div>9665877727</div>
//               </div>
//             </div>

//             <div className="footer-col-title" style={{ marginTop:"20px" }}>Follow Us</div>
//             <div className="footer-social">
//               <a className="footer-social-btn" href="#" aria-label="Facebook">𝑓</a>
//               <a className="footer-social-btn" href="#" aria-label="Twitter">𝕏</a>
//               <a className="footer-social-btn" href="#" aria-label="Instagram">◎</a>
//               <a className="footer-social-btn" href="#" aria-label="YouTube">▶</a>
//             </div>

//             <div className="footer-col-title" style={{ marginTop:"8px" }}>Legal</div>
//             <ul className="footer-links">
//               <li><a href="#">Privacy Policy</a></li>
//               <li><a href="#">Terms of Service</a></li>
//               <li><a href="#">RTI माहिती</a></li>
//             </ul>
//           </div>

//           {/* Col 4 — Map */}
//           <div>
//             {/* <div className="footer-col-title">VVCMC क्षेत्र नकाशा</div> */}
//             {/* <div className="footer-map-wrap">
//               <img src={vvcmcMap} alt="वसई विरार महानगरपालिका नकाशा" />
//               <div className="footer-map-label">वसई-विरार शहर महानगरपालिका — Ward Map</div>
//             </div> */}
//           </div>

//         </div>

//         {/* ── Divider ──────────────────────────────────────── */}
//         <div className="footer-divider" />

//         {/* ── Bottom Bar ───────────────────────────────────── */}
//         <div className="footer-bottom">
//           <div className="footer-copy">
//             © {year} वसई-विरार शहर महानगरपालिका. सर्व हक्क राखीव.
//           </div>
//           <button className="footer-back-top" onClick={scrollTop}>
//             <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//               <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//             Back to Top
//           </button>
//         </div>

//         {/* ── Gold Strip ───────────────────────────────────── */}
//         <div className="footer-gold-strip">
//           Designed & Developed for Vasai Virar City Municipal Corporation (VVCMC) — जन संवाद
//         </div>

//       </footer>
//     </>
//   );
// }




import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/vvcmclogo.jpg";

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        :root {
          --foot-bg:    #0d2e2a;
          --foot-line:  rgba(81,171,172,0.18);
          --gold:       #F5E6BF;
          --teal:       #51ABAC;
          --gold-strip: #D09A50;
        }

        /* ══ FOOTER WRAPPER ═══════════════════════════════════ */
        .footer {
          background: var(--foot-bg);
          color: rgba(255,255,255,0.82);
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* top teal accent line */
        .footer::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, var(--teal) 30%, var(--gold-strip) 70%, transparent 100%);
        }

        /* diagonal line texture */
        .footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image:
            linear-gradient(135deg, rgba(81,171,172,0.04) 0%, transparent 50%),
            repeating-linear-gradient(
              135deg,
              transparent 0px, transparent 80px,
              rgba(81,171,172,0.04) 80px, rgba(81,171,172,0.04) 81px
            );
          pointer-events: none;
          z-index: 0;
        }

        /* ══ BODY GRID — 3 columns ════════════════════════════ */
        .footer-body {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          padding: 68px 48px 48px;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1.15fr;
          gap: 56px;
        }

        /* ── Col 1: Brand + Address ── */
        .footer-logo-row {
          display: flex; align-items: center; gap: 14px;
          margin-bottom: 22px;
        }
        .cn-logo-wrap {
          width: 62px; height: 62px; border-radius: 50%;
          overflow: hidden; flex-shrink: 0;
          border: 2px solid rgba(81,171,172,0.45);
          box-shadow: 0 0 0 4px rgba(81,171,172,0.1);
        }
        .cn-logo-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .footer-brand-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 19px; font-weight: 700;
          color: var(--gold); line-height: 1.35;
        }
        .footer-brand-sub {
          font-size: 11px; color: var(--teal);
          letter-spacing: 1.2px; text-transform: uppercase;
          font-weight: 600; margin-top: 4px;
        }

        .footer-tagline {
          font-size: 15px; color: rgba(255,255,255,0.58);
          line-height: 1.85; margin-bottom: 26px;
          max-width: 310px;
          border-left: 2px solid rgba(81,171,172,0.35);
          padding-left: 14px;
        }

        .footer-address { margin-bottom: 22px; }
        .footer-address-title {
          font-size: 11.5px; font-weight: 700; color: var(--teal);
          text-transform: uppercase; letter-spacing: 1px;
          margin-bottom: 10px;
          display: flex; align-items: center; gap: 6px;
        }
        .footer-address-title::after {
          content: ''; flex: 1; height: 1px;
          background: rgba(81,171,172,0.25);
        }
        .footer-address-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px; color: rgba(255,255,255,0.72);
          line-height: 1.9;
        }

        .footer-contacts { display: flex; flex-direction: column; gap: 10px; }
        .footer-contact-row {
          display: flex; align-items: flex-start; gap: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(81,171,172,0.1);
          border-radius: 10px;
          padding: 9px 12px;
        }
        .footer-contact-icon { font-size: 16px; flex-shrink: 0; margin-top: 1px; }
        .footer-contact-label {
          color: rgba(255,255,255,0.42); font-size: 11.5px;
          margin-bottom: 2px; font-weight: 500;
        }
        .footer-contact-num {
          font-size: 14.5px; color: rgba(255,255,255,0.82);
          font-weight: 500;
        }

        /* ── Col 2 & 3: Titles ── */
        .footer-col-title {
          font-size: 13.5px; font-weight: 700; color: #fff;
          letter-spacing: 0.5px; margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--foot-line);
          display: flex; align-items: center; gap: 8px;
        }
        .footer-col-title-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--teal); flex-shrink: 0;
        }

        /* ── Nav Links ── */
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 4px; padding: 0; margin: 0; }
        .footer-links li a,
        .footer-links li button {
          font-size: 15px; color: rgba(255,255,255,0.62);
          text-decoration: none; background: none; border: none;
          cursor: pointer; padding: 7px 10px;
          transition: color .18s, background .18s, padding-left .18s;
          display: flex; align-items: center; gap: 8px;
          border-radius: 8px; width: 100%;
          font-family: 'DM Sans', sans-serif;
        }
        .footer-links li a:hover,
        .footer-links li button:hover {
          color: var(--teal);
          background: rgba(81,171,172,0.08);
          padding-left: 14px;
        }
        .footer-links li a::before,
        .footer-links li button::before {
          content: '›'; color: var(--teal); font-size: 18px; line-height: 1;
        }

        /* ── Social ── */
        .footer-social { display: flex; gap: 10px; margin-bottom: 24px; flex-wrap: wrap; }
        .footer-social-btn {
          width: 42px; height: 42px; border-radius: 50%;
          border: 1px solid rgba(81,171,172,0.3);
          background: rgba(81,171,172,0.08);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.65); font-size: 16px;
          cursor: pointer; transition: all .2s; text-decoration: none;
        }
        .footer-social-btn:hover {
          background: var(--teal); color: #fff;
          border-color: var(--teal);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(81,171,172,0.35);
        }

        /* ── WhatsApp Chip ── */
        .footer-whatsapp-chip {
          display: inline-flex; align-items: center; gap: 9px;
          background: rgba(37,211,102,0.1);
          border: 1px solid rgba(37,211,102,0.28);
          border-radius: 999px; padding: 10px 18px;
          font-size: 14.5px; color: #25d366; font-weight: 600;
          text-decoration: none; transition: all .2s;
          margin-bottom: 18px; width: fit-content;
        }
        .footer-whatsapp-chip:hover {
          background: rgba(37,211,102,0.2);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37,211,102,0.2);
        }

        /* ══ DIVIDER ══════════════════════════════════════════ */
        .footer-divider {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          height: 1px; background: var(--foot-line);
          margin-left: 48px; margin-right: 48px;
        }

        /* ══ FOOTER BOTTOM ════════════════════════════════════ */
        .footer-bottom {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          padding: 22px 48px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .footer-copy {
          font-size: 13px; color: rgba(255,255,255,0.4);
        }
        .footer-back-top {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid rgba(81,171,172,0.35);
          background: transparent;
          border-radius: 999px; padding: 9px 22px;
          font-size: 12.5px; font-weight: 700; color: var(--teal);
          cursor: pointer; transition: all .2s; letter-spacing: 0.5px;
          text-transform: uppercase; font-family: 'DM Sans', sans-serif;
        }
        .footer-back-top:hover {
          background: rgba(81,171,172,0.12);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(81,171,172,0.2);
        }
        .footer-back-top svg { transition: transform .2s; }
        .footer-back-top:hover svg { transform: translateY(-3px); }

        /* ══ GOLD STRIP ════════════════════════════════════════ */
        .footer-gold-strip {
          background: var(--gold-strip);
          text-align: center; padding: 9px 24px;
          font-size: 12px; color: rgba(0,0,0,0.55);
          font-weight: 600; letter-spacing: 0.4px;
        }

        /* ══ RESPONSIVE ════════════════════════════════════════ */
        @media(max-width:1024px){
          .footer-body { grid-template-columns: 1fr 1fr; gap: 36px; }
        }
        @media(max-width:640px){
          .footer-body { grid-template-columns: 1fr; padding: 48px 24px 32px; }
          .footer-bottom { padding: 16px 24px; flex-direction: column; align-items: flex-start; }
          .footer-divider { margin-left: 24px; margin-right: 24px; }
        }
      `}</style>

      <footer className="footer">

        {/* ── Main Body ─────────────────────────────────────── */}
        <div className="footer-body">

          {/* Col 1 — Brand + Address */}
          <div className="footer-brand">
            <div className="footer-logo-row">
              <div className="cn-logo-wrap">
                <img src={logo} alt="VVCMC" />
              </div>
              <div>
                <div className="footer-brand-name">Vasai-Virar City<br />Municipal Corporation</div>
                <div className="footer-brand-sub">VVCMC — Jan Samvad</div>
              </div>
            </div>

            <p className="footer-tagline">
              For the citizens, by the citizens — committed to transparent, fast and digital public services.
            </p>

            <div className="footer-address">
              <div className="footer-address-title">Head Office</div>
              <div className="footer-address-text">
                Virat Nagar, Near MHADA Colony,<br />
                Virar West. PIN: 401303
              </div>
            </div>

            <div className="footer-contacts">
              <div className="footer-contact-row">
                <span className="footer-contact-icon">📞</span>
                <div>
                  <div className="footer-contact-label">Main Office</div>
                  <div className="footer-contact-num">0250-6630000</div>
                </div>
              </div>
              <div className="footer-contact-row">
                <span className="footer-contact-icon">🚨</span>
                <div>
                  <div className="footer-contact-label">Disaster Management</div>
                  <div className="footer-contact-num">0250-2334546 / 0250-2334547</div>
                </div>
              </div>
              <div className="footer-contact-row">
                <span className="footer-contact-icon">📱</span>
                <div>
                  <div className="footer-contact-label">Helpline</div>
                  <div className="footer-contact-num">7058911125 / 7058991430 / 8446427643</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2 — Site Map */}
          <div>
            <div className="footer-col-title">
              <span className="footer-col-title-dot" />
              Site Map
            </div>
            <ul className="footer-links">
              <li><button onClick={() => navigate("/")}>Home</button></li>
              <li><button onClick={() => navigate("/book-appointment")}>Book Appointment</button></li>
              <li><button onClick={() => navigate("/my-appointments")}>My Appointments</button></li>
              <li><button onClick={() => navigate("/register")}>Register</button></li>
              <li><button onClick={() => navigate("/login")}>Login</button></li>
            </ul>
          </div>

          {/* Col 3 — Contact & Social */}
          <div>
            <div className="footer-col-title">
              <span className="footer-col-title-dot" />
              Contact Us
            </div>

            <a
              className="footer-whatsapp-chip"
              href="https://wa.me/919665877727"
              target="_blank"
              rel="noreferrer"
            >
              <span>💬</span> WhatsApp Chatbot
            </a>

            <div className="footer-contact-row" style={{ marginBottom: "20px" }}>
              <span className="footer-contact-icon">💬</span>
              <div>
                <div className="footer-contact-label">WhatsApp</div>
                <div className="footer-contact-num">9665877727</div>
              </div>
            </div>

            <div className="footer-col-title" style={{ marginTop: "20px" }}>
              <span className="footer-col-title-dot" />
              Follow Us
            </div>
            <div className="footer-social">
              <a className="footer-social-btn" href="#" aria-label="Facebook">𝑓</a>
              <a className="footer-social-btn" href="#" aria-label="Twitter">𝕏</a>
              <a className="footer-social-btn" href="#" aria-label="Instagram">◎</a>
              <a className="footer-social-btn" href="#" aria-label="YouTube">▶</a>
            </div>

            {/* <div className="footer-col-title" style={{ marginTop: "8px" }}>
              <span className="footer-col-title-dot" />
              Legal
            </div>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">RTI Information</a></li>
            </ul> */}
          </div>

        </div>

        {/* ── Divider ──────────────────────────────────────── */}
        <div className="footer-divider" />

        {/* ── Bottom Bar ───────────────────────────────────── */}
        <div className="footer-bottom">
          <div className="footer-copy">
            © {year} Vasai-Virar City Municipal Corporation. All rights reserved.
          </div>
          <button className="footer-back-top" onClick={scrollTop}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Top
          </button>
        </div>

        {/* ── Gold Strip ───────────────────────────────────── */}
        <div className="footer-gold-strip">
          Designed & Developed for Vasai Virar City Municipal Corporation (VVCMC) — Jan Samvad
        </div>

      </footer>
    </>
  );
}