// import React from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../../assets/vvcmclogo.jpg";

// export default function Footer() {
//   const navigate = useNavigate();
//   const year = new Date().getFullYear();

//   const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

//         :root {
//           --foot-bg:    #0d2e2a;
//           --foot-line:  rgba(81,171,172,0.18);
//           --gold:       #F5E6BF;
//           --teal:       #51ABAC;
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

//         /* top teal accent line */
//         .footer::after {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 3px;
//           background: linear-gradient(90deg, transparent 0%, var(--teal) 30%, var(--gold-strip) 70%, transparent 100%);
//         }

//         /* diagonal line texture */
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

//         /* ══ BODY GRID — 3 columns ════════════════════════════ */
//         .footer-body {
//           position: relative; z-index: 1;
//           max-width: 1200px; margin: 0 auto;
//           padding: 68px 48px 48px;
//           display: grid;
//           grid-template-columns: 1.8fr 1fr 1.15fr;
//           gap: 56px;
//         }

//         /* ── Col 1: Brand + Address ── */
//         .footer-logo-row {
//           display: flex; align-items: center; gap: 14px;
//           margin-bottom: 22px;
//         }
//         .cn-logo-wrap {
//           width: 62px; height: 62px; border-radius: 50%;
//           overflow: hidden; flex-shrink: 0;
//           border: 2px solid rgba(81,171,172,0.45);
//           box-shadow: 0 0 0 4px rgba(81,171,172,0.1);
//         }
//         .cn-logo-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }

//         .footer-brand-name {
//           font-family: 'DM Sans', sans-serif;
//           font-size: 19px; font-weight: 700;
//           color: var(--gold); line-height: 1.35;
//         }
//         .footer-brand-sub {
//           font-size: 11px; color: var(--teal);
//           letter-spacing: 1.2px; text-transform: uppercase;
//           font-weight: 600; margin-top: 4px;
//         }

//         .footer-tagline {
//           font-size: 15px; color: rgba(255,255,255,0.58);
//           line-height: 1.85; margin-bottom: 26px;
//           max-width: 310px;
//           border-left: 2px solid rgba(81,171,172,0.35);
//           padding-left: 14px;
//         }

//         .footer-address { margin-bottom: 22px; }
//         .footer-address-title {
//           font-size: 11.5px; font-weight: 700; color: var(--teal);
//           text-transform: uppercase; letter-spacing: 1px;
//           margin-bottom: 10px;
//           display: flex; align-items: center; gap: 6px;
//         }
//         .footer-address-title::after {
//           content: ''; flex: 1; height: 1px;
//           background: rgba(81,171,172,0.25);
//         }
//         .footer-address-text {
//           font-family: 'DM Sans', sans-serif;
//           font-size: 15px; color: rgba(255,255,255,0.72);
//           line-height: 1.9;
//         }

//         .footer-contacts { display: flex; flex-direction: column; gap: 10px; }
//         .footer-contact-row {
//           display: flex; align-items: flex-start; gap: 10px;
//           background: rgba(255,255,255,0.03);
//           border: 1px solid rgba(81,171,172,0.1);
//           border-radius: 10px;
//           padding: 9px 12px;
//         }
//         .footer-contact-icon { font-size: 16px; flex-shrink: 0; margin-top: 1px; }
//         .footer-contact-label {
//           color: rgba(255,255,255,0.42); font-size: 11.5px;
//           margin-bottom: 2px; font-weight: 500;
//         }
//         .footer-contact-num {
//           font-size: 14.5px; color: rgba(255,255,255,0.82);
//           font-weight: 500;
//         }

//         /* ── Col 2 & 3: Titles ── */
//         .footer-col-title {
//           font-size: 13.5px; font-weight: 700; color: #fff;
//           letter-spacing: 0.5px; margin-bottom: 20px;
//           padding-bottom: 12px;
//           border-bottom: 1px solid var(--foot-line);
//           display: flex; align-items: center; gap: 8px;
//         }
//         .footer-col-title-dot {
//           width: 6px; height: 6px; border-radius: 50%;
//           background: var(--teal); flex-shrink: 0;
//         }

//         /* ── Nav Links ── */
//         .footer-links { list-style: none; display: flex; flex-direction: column; gap: 4px; padding: 0; margin: 0; }
//         .footer-links li a,
//         .footer-links li button {
//           font-size: 15px; color: rgba(255,255,255,0.62);
//           text-decoration: none; background: none; border: none;
//           cursor: pointer; padding: 7px 10px;
//           transition: color .18s, background .18s, padding-left .18s;
//           display: flex; align-items: center; gap: 8px;
//           border-radius: 8px; width: 100%;
//           font-family: 'DM Sans', sans-serif;
//         }
//         .footer-links li a:hover,
//         .footer-links li button:hover {
//           color: var(--teal);
//           background: rgba(81,171,172,0.08);
//           padding-left: 14px;
//         }
//         .footer-links li a::before,
//         .footer-links li button::before {
//           content: '›'; color: var(--teal); font-size: 18px; line-height: 1;
//         }

//         /* ── Social ── */
//         .footer-social { display: flex; gap: 10px; margin-bottom: 24px; flex-wrap: wrap; }
//         .footer-social-btn {
//           width: 42px; height: 42px; border-radius: 50%;
//           border: 1px solid rgba(81,171,172,0.3);
//           background: rgba(81,171,172,0.08);
//           display: flex; align-items: center; justify-content: center;
//           color: rgba(255,255,255,0.65); font-size: 16px;
//           cursor: pointer; transition: all .2s; text-decoration: none;
//         }
//         .footer-social-btn:hover {
//           background: var(--teal); color: #fff;
//           border-color: var(--teal);
//           transform: translateY(-3px);
//           box-shadow: 0 6px 20px rgba(81,171,172,0.35);
//         }

//         /* ── WhatsApp Chip ── */
//         .footer-whatsapp-chip {
//           display: inline-flex; align-items: center; gap: 9px;
//           background: rgba(37,211,102,0.1);
//           border: 1px solid rgba(37,211,102,0.28);
//           border-radius: 999px; padding: 10px 18px;
//           font-size: 14.5px; color: #25d366; font-weight: 600;
//           text-decoration: none; transition: all .2s;
//           margin-bottom: 18px; width: fit-content;
//         }
//         .footer-whatsapp-chip:hover {
//           background: rgba(37,211,102,0.2);
//           transform: translateY(-2px);
//           box-shadow: 0 6px 20px rgba(37,211,102,0.2);
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
//           padding: 22px 48px;
//           display: flex; align-items: center; justify-content: space-between;
//           flex-wrap: wrap; gap: 12px;
//         }
//         .footer-copy {
//           font-size: 13px; color: rgba(255,255,255,0.4);
//         }
//         .footer-back-top {
//           display: inline-flex; align-items: center; gap: 8px;
//           border: 1px solid rgba(81,171,172,0.35);
//           background: transparent;
//           border-radius: 999px; padding: 9px 22px;
//           font-size: 12.5px; font-weight: 700; color: var(--teal);
//           cursor: pointer; transition: all .2s; letter-spacing: 0.5px;
//           text-transform: uppercase; font-family: 'DM Sans', sans-serif;
//         }
//         .footer-back-top:hover {
//           background: rgba(81,171,172,0.12);
//           transform: translateY(-2px);
//           box-shadow: 0 4px 16px rgba(81,171,172,0.2);
//         }
//         .footer-back-top svg { transition: transform .2s; }
//         .footer-back-top:hover svg { transform: translateY(-3px); }

//         /* ══ GOLD STRIP ════════════════════════════════════════ */
//         .footer-gold-strip {
//           background: var(--gold-strip);
//           text-align: center; padding: 9px 24px;
//           font-size: 12px; color: rgba(0,0,0,0.55);
//           font-weight: 600; letter-spacing: 0.4px;
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
//               <div className="cn-logo-wrap">
//                 <img src={logo} alt="VVCMC" />
//               </div>
//               <div>
//                 <div className="footer-brand-name">Vasai-Virar City<br />Municipal Corporation</div>
//                 <div className="footer-brand-sub">VVCMC — Jan Samvad</div>
//               </div>
//             </div>

//             <p className="footer-tagline">
//               For the citizens, by the citizens — committed to transparent, fast and digital public services.
//             </p>

//             <div className="footer-address">
//               <div className="footer-address-title">Head Office</div>
//               <div className="footer-address-text">
//                 Virat Nagar, Near MHADA Colony,<br />
//                 Virar West. PIN: 401303
//               </div>
//             </div>

//             <div className="footer-contacts">
//               <div className="footer-contact-row">
//                 <span className="footer-contact-icon">📞</span>
//                 <div>
//                   <div className="footer-contact-label">Main Office</div>
//                   <div className="footer-contact-num">0250-6630000</div>
//                 </div>
//               </div>
//               <div className="footer-contact-row">
//                 <span className="footer-contact-icon">🚨</span>
//                 <div>
//                   <div className="footer-contact-label">Disaster Management</div>
//                   <div className="footer-contact-num">0250-2334546 / 0250-2334547</div>
//                 </div>
//               </div>
//               <div className="footer-contact-row">
//                 <span className="footer-contact-icon">📱</span>
//                 <div>
//                   <div className="footer-contact-label">Helpline</div>
//                   <div className="footer-contact-num">7058911125 / 7058991430 / 8446427643</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Col 2 — Site Map */}
//           <div>
//             <div className="footer-col-title">
//               <span className="footer-col-title-dot" />
//               Site Map
//             </div>
//             <ul className="footer-links">
//               <li><button onClick={() => navigate("/")}>Home</button></li>
//               <li><button onClick={() => navigate("/book-appointment")}>Book Appointment</button></li>
//               <li><button onClick={() => navigate("/my-appointments")}>My Appointments</button></li>
//               <li><button onClick={() => navigate("/register")}>Register</button></li>
//               <li><button onClick={() => navigate("/login")}>Login</button></li>
//             </ul>
//           </div>

//           {/* Col 3 — Contact & Social */}
//           <div>
//             <div className="footer-col-title">
//               <span className="footer-col-title-dot" />
//               Contact Us
//             </div>

//             <a
//               className="footer-whatsapp-chip"
//               href="https://wa.me/919665877727"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <span>💬</span> WhatsApp Chatbot
//             </a>

//             <div className="footer-contact-row" style={{ marginBottom: "20px" }}>
//               <span className="footer-contact-icon">💬</span>
//               <div>
//                 <div className="footer-contact-label">WhatsApp</div>
//                 <div className="footer-contact-num">9665877727</div>
//               </div>
//             </div>

//             <div className="footer-col-title" style={{ marginTop: "20px" }}>
//               <span className="footer-col-title-dot" />
//               Follow Us
//             </div>
//             <div className="footer-social">
//               <a className="footer-social-btn" href="#" aria-label="Facebook">𝑓</a>
//               <a className="footer-social-btn" href="#" aria-label="Twitter">𝕏</a>
//               <a className="footer-social-btn" href="#" aria-label="Instagram">◎</a>
//               <a className="footer-social-btn" href="#" aria-label="YouTube">▶</a>
//             </div>

//             {/* <div className="footer-col-title" style={{ marginTop: "8px" }}>
//               <span className="footer-col-title-dot" />
//               Legal
//             </div>
//             <ul className="footer-links">
//               <li><a href="#">Privacy Policy</a></li>
//               <li><a href="#">Terms of Service</a></li>
//               <li><a href="#">RTI Information</a></li>
//             </ul> */}
//           </div>

//         </div>

//         {/* ── Divider ──────────────────────────────────────── */}
//         <div className="footer-divider" />

//         {/* ── Bottom Bar ───────────────────────────────────── */}
//         <div className="footer-bottom">
//           <div className="footer-copy">
//             © {year} Vasai-Virar City Municipal Corporation. All rights reserved.
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
//           Designed & Developed for Vasai Virar City Municipal Corporation (VVCMC) — Jan Samvad
//         </div>

//       </footer>
//     </>
//   );
// }




import React from "react";
import { useNavigate } from "react-router-dom";
import { FiMapPin, FiPhoneCall, FiAlertTriangle, FiHeadphones, FiChevronRight, FiArrowUp } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/vvcmclogo.jpg";

// ── Footer data (text / numbers / routes — आधीसारखेच) ──
const SITE_MAP = [
  { label: "Home",                         to: "/" },
  { label: "Dashboard",                    to: "/dashboard" },
  { label: "Meetings",                     to: "/meetings" },
  { label: "Availability",                 to: "/availability" },
  { label: "Applications",                 to: "/allapplication" },
  { label: "Appointment Applications",     to: "/allapplicationcitizens" },
  { label: "Users",                        to: "/users" },
  { label: "Corporators & Office Bearers", to: "/corporators" },
];

// आधीच्या footer मधल्या citizen links — जशाच्या तशा ठेवल्या आहेत
const CITIZEN_LINKS = [
  { label: "Book Appointment", to: "/book-appointment" },
  { label: "My Appointments",  to: "/my-appointments" },
  { label: "Register",         to: "/register" },
  { label: "Login",            to: "/login" },
];

const CONTACTS = [
  { icon: <FiPhoneCall />,     label: "Main Office",         value: "0250-6630000" },
  { icon: <FiAlertTriangle />, label: "Disaster Management", value: "0250-2334546 / 0250-2334547" },
  { icon: <FiHeadphones />,    label: "Helpline",            value: "7058911125 / 7058991430 / 8446427643" },
];

const SOCIAL = [
  { icon: <FaFacebookF />, label: "Facebook" },
  { icon: <FaXTwitter />,  label: "Twitter" },
  { icon: <FaInstagram />, label: "Instagram" },
  { icon: <FaYoutube />,   label: "YouTube" },
];

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ⚠️ आधीचे global variables + .cn-logo-wrap — इतर pages / NavbarLanding वापरतात, म्हणून जसेच्या तसे ठेवले */
        :root {
          --foot-bg:    #0d2e2a;
          --foot-line:  rgba(81,171,172,0.18);
          --gold:       #F5E6BF;
          --teal:       #51ABAC;
          --gold-strip: #D09A50;
        }
        .cn-logo-wrap {
          width: 62px; height: 62px; border-radius: 50%;
          overflow: hidden; flex-shrink: 0;
          border: 2px solid rgba(81,171,172,0.45);
          box-shadow: 0 0 0 4px rgba(81,171,172,0.1);
        }
        .cn-logo-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* ══ NEW FOOTER — सगळे styles .jf मध्येच scoped ══ */
        .jf {
          --jf-primary:   #006B73;
          --jf-deep:      #004D56;
          --jf-secondary: #008C95;
          --jf-cyan:      #DFF4F4;
          --jf-gold:      #CE9A54;
          --jf-white:     #FFFFFF;
          --jf-line:      rgba(223,244,244,0.14);
          --jf-card:      rgba(255,255,255,0.04);
          --jf-card-bd:   rgba(223,244,244,0.16);

          position: relative; overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          color: rgba(255,255,255,0.86);
          background: linear-gradient(160deg, var(--jf-primary) 0%, var(--jf-deep) 55%, #003A42 100%);
        }
        .jf *, .jf *::before, .jf *::after { box-sizing: border-box; }

        /* gold → cyan accent line on top */
        .jf-topline {
          position: relative; z-index: 2; height: 3px;
          background: linear-gradient(90deg, var(--jf-gold) 0%, #E9C98F 45%, rgba(223,244,244,0.7) 100%);
        }

        /* decorative waves (pure CSS) */
        .jf-wave {
          position: absolute; border-radius: 50%; pointer-events: none; z-index: 0;
        }
        .jf-wave-1 {
          width: 900px; height: 900px; left: -420px; top: -520px;
          background: radial-gradient(closest-side, rgba(0,140,149,0.30), transparent 70%);
        }
        .jf-wave-2 {
          width: 1100px; height: 520px; right: -380px; bottom: -300px;
          border: 1px solid rgba(223,244,244,0.07);
          box-shadow: inset 0 0 0 40px rgba(0,140,149,0.06);
        }
        .jf-wave-3 {
          width: 700px; height: 340px; right: -160px; bottom: -220px;
          border: 1px solid rgba(206,154,84,0.10);
        }

        /* ── Body grid ── */
        .jf-body {
          position: relative; z-index: 1;
          max-width: 1240px; margin: 0 auto;
          padding: 56px 40px 44px;
          display: grid;
          grid-template-columns: 1.35fr 1fr 1fr;
        }
        .jf-col { padding: 0 40px; }
        .jf-col:first-child { padding-left: 0; }
        .jf-col:last-child  { padding-right: 0; }
        .jf-col + .jf-col { border-left: 1px solid var(--jf-line); }

        /* ── Col 1: brand ── */
        .jf-brand { display: flex; align-items: center; gap: 16px; margin-bottom: 22px; }
        .jf-logo {
          width: 84px; height: 84px; flex-shrink: 0;
          background: #fff; border-radius: 14px; padding: 6px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.18);
        }
        .jf-logo img { width: 100%; height: 100%; object-fit: contain; display: block; border-radius: 8px; }
        .jf-brand-name { font-size: 22px; font-weight: 700; color: var(--jf-white); line-height: 1.3; margin: 0; }
        .jf-brand-sub  { font-size: 15px; font-weight: 600; color: #8FE0E3; margin-top: 4px; }

        .jf-tagline {
          font-size: 15px; line-height: 1.75; color: rgba(255,255,255,0.80);
          border-left: 3px solid var(--jf-gold);
          padding-left: 16px; margin: 0 0 24px; max-width: 400px;
        }

        .jf-addr-title {
          display: flex; align-items: center; gap: 12px;
          font-size: 16px; font-weight: 700; color: #8FE0E3; margin-bottom: 10px;
        }
        .jf-addr-title::after { content: ''; flex: 1; height: 1px; background: var(--jf-line); }
        .jf-addr {
          display: flex; gap: 12px; align-items: flex-start;
          font-size: 15px; line-height: 1.7; color: rgba(255,255,255,0.88); margin-bottom: 18px;
        }
        .jf-addr svg { color: var(--jf-gold); font-size: 20px; flex-shrink: 0; margin-top: 3px; }

        .jf-cards { display: flex; flex-direction: column; gap: 10px; }
        .jf-card {
          display: flex; align-items: center; gap: 14px;
          background: var(--jf-card); border: 1px solid var(--jf-card-bd);
          border-radius: 12px; padding: 11px 16px;
          transition: border-color .2s, background .2s;
        }
        .jf-card:hover { border-color: rgba(143,224,227,0.40); background: rgba(255,255,255,0.07); }
        .jf-card-icon {
          width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(206,154,84,0.14); color: #F0C27E; font-size: 17px;
        }
        .jf-card-label { font-size: 12.5px; color: rgba(223,244,244,0.70); font-weight: 500; }
        .jf-card-value { font-size: 15px; color: var(--jf-white); font-weight: 600; word-break: break-word; }

        /* ── Column titles ── */
        .jf-title {
          display: flex; align-items: center; gap: 10px;
          font-size: 19px; font-weight: 700; color: var(--jf-white);
          padding-bottom: 14px; margin: 6px 0 16px;
          border-bottom: 1px solid var(--jf-line);
        }
        .jf-title-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--jf-gold); flex-shrink: 0; }
        .jf-title.sm { font-size: 16px; margin-top: 26px; }

        /* ── Links ── */
        .jf-links { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; }
        .jf-link {
          width: 100%; display: flex; align-items: center; gap: 10px;
          background: none; border: none; cursor: pointer; text-align: left;
          font-family: inherit; font-size: 15.5px; color: rgba(255,255,255,0.86);
          padding: 8px 10px; border-radius: 8px;
          transition: color .18s, background .18s, padding-left .18s;
        }
        .jf-link svg { color: #8FE0E3; font-size: 15px; flex-shrink: 0; transition: transform .18s; }
        .jf-link:hover { color: var(--jf-white); background: rgba(223,244,244,0.08); padding-left: 14px; }
        .jf-link:hover svg { transform: translateX(2px); color: var(--jf-gold); }
        .jf-link:focus-visible, .jf-wa-btn:focus-visible, .jf-social a:focus-visible, .jf-top:focus-visible {
          outline: 2px solid var(--jf-gold); outline-offset: 2px;
        }

        /* ── Contact column ── */
        .jf-wa-btn {
          display: inline-flex; align-items: center; gap: 12px;
          padding: 13px 26px; border-radius: 999px; margin-bottom: 14px;
          background: rgba(37,211,102,0.14); border: 1px solid rgba(37,211,102,0.40);
          color: var(--jf-white); font-size: 16px; font-weight: 700; text-decoration: none;
          transition: background .2s, transform .2s;
        }
        .jf-wa-btn svg { color: #25D366; font-size: 22px; }
        .jf-wa-btn:hover { background: rgba(37,211,102,0.24); transform: translateY(-2px); }
        .jf-card .jf-card-icon.wa { background: rgba(37,211,102,0.14); color: #25D366; font-size: 20px; }

        .jf-social { display: flex; gap: 12px; flex-wrap: wrap; }
        .jf-social a {
          width: 48px; height: 48px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(223,244,244,0.30); background: rgba(255,255,255,0.03);
          color: var(--jf-white); font-size: 18px; text-decoration: none;
          transition: background .2s, border-color .2s, transform .2s, color .2s;
        }
        .jf-social a:hover { background: var(--jf-secondary); border-color: var(--jf-secondary); transform: translateY(-3px); }

        /* ── Bottom bar ── */
        .jf-bottom {
          position: relative; z-index: 1;
          max-width: 1240px; margin: 0 auto; padding: 20px 40px;
          border-top: 1px solid var(--jf-line);
          display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap;
        }
        .jf-copy { font-size: 14.5px; color: rgba(255,255,255,0.82); }
        .jf-top {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 24px; border-radius: 999px; cursor: pointer;
          background: transparent; border: 1px solid rgba(223,244,244,0.55);
          color: var(--jf-white); font-family: inherit; font-size: 13.5px; font-weight: 700;
          letter-spacing: .6px; text-transform: uppercase;
          transition: background .2s, border-color .2s;
        }
        .jf-top svg { transition: transform .2s; }
        .jf-top:hover { background: rgba(223,244,244,0.10); border-color: var(--jf-cyan); }
        .jf-top:hover svg { transform: translateY(-2px); }

        .jf-strip {
          position: relative; z-index: 1;
          background: linear-gradient(90deg, #C68E45 0%, #E2B06C 50%, #C68E45 100%);
          color: var(--jf-deep); text-align: center;
          padding: 11px 20px; font-size: 14px; font-weight: 600; letter-spacing: .2px;
        }

        /* ══ Responsive ══ */
        @media (max-width: 1100px) {
          .jf-body { grid-template-columns: 1fr 1fr; row-gap: 36px; }
          .jf-col:first-child { grid-column: 1 / -1; padding-right: 0; }
          .jf-col:nth-child(2) { border-left: none; padding-left: 0; }
          .jf-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
        }
        @media (max-width: 680px) {
          .jf-body { grid-template-columns: 1fr; padding: 40px 20px 28px; row-gap: 30px; }
          .jf-col, .jf-col:first-child, .jf-col:last-child { padding: 0; }
          .jf-col + .jf-col { border-left: none; border-top: 1px solid var(--jf-line); padding-top: 24px; }
          .jf-brand-name { font-size: 19px; }
          .jf-logo { width: 68px; height: 68px; }
          .jf-cards { grid-template-columns: 1fr; }
          .jf-bottom { padding: 18px 20px; flex-direction: column; align-items: flex-start; }
          .jf-strip { font-size: 12.5px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .jf * { transition: none !important; }
        }
      `}</style>

      <footer className="jf">
        <div className="jf-topline" />
        <span className="jf-wave jf-wave-1" aria-hidden="true" />
        <span className="jf-wave jf-wave-2" aria-hidden="true" />
        <span className="jf-wave jf-wave-3" aria-hidden="true" />

        <div className="jf-body">

          {/* ── Col 1 — Corporation info ── */}
          <div className="jf-col">
            <div className="jf-brand">
              <div className="jf-logo">
                <img src={logo} alt="VVCMC" />
              </div>
              <div>
                <p className="jf-brand-name">Vasai-Virar City<br />Municipal Corporation</p>
                <div className="jf-brand-sub">VVCMC — Jan Samvad</div>
              </div>
            </div>

            <p className="jf-tagline">
              For the citizens, by the citizens — committed to transparent, fast and digital public services.
            </p>

            <div className="jf-addr-title">Head Office</div>
            <div className="jf-addr">
              <FiMapPin />
              <span>Virat Nagar, Near MHADA Colony,<br />Virar West. PIN: 401303</span>
            </div>

            <div className="jf-cards">
              {CONTACTS.map((c) => (
                <div className="jf-card" key={c.label}>
                  <span className="jf-card-icon">{c.icon}</span>
                  <div>
                    <div className="jf-card-label">{c.label}</div>
                    <div className="jf-card-value">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Col 2 — Site Map ── */}
          <div className="jf-col">
            <div className="jf-title"><span className="jf-title-dot" />Site Map</div>
            <ul className="jf-links">
              {SITE_MAP.map((l) => (
                <li key={l.to}>
                  <button type="button" className="jf-link" onClick={() => navigate(l.to)}>
                    <FiChevronRight />{l.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="jf-title sm"><span className="jf-title-dot" />Citizen Services</div>
            <ul className="jf-links">
              {CITIZEN_LINKS.map((l) => (
                <li key={l.to}>
                  <button type="button" className="jf-link" onClick={() => navigate(l.to)}>
                    <FiChevronRight />{l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3 — Contact Us ── */}
          <div className="jf-col">
            <div className="jf-title"><span className="jf-title-dot" />Contact Us</div>

            <a className="jf-wa-btn" href="https://wa.me/919665877727" target="_blank" rel="noreferrer">
              <FaWhatsapp /> WhatsApp Chatbot
            </a>

            <div className="jf-card">
              <span className="jf-card-icon wa"><FaWhatsapp /></span>
              <div>
                <div className="jf-card-label">WhatsApp</div>
                <div className="jf-card-value">9665877727</div>
              </div>
            </div>

            <div className="jf-title sm"><span className="jf-title-dot" />Follow Us</div>
            <div className="jf-social">
              {SOCIAL.map((s) => (
                <a key={s.label} href="#" aria-label={s.label} title={s.label}>{s.icon}</a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="jf-bottom">
          <div className="jf-copy">© {year} Vasai-Virar City Municipal Corporation. All rights reserved.</div>
          <button type="button" className="jf-top" onClick={scrollTop}>
            <FiArrowUp size={15} /> Back to Top
          </button>
        </div>

        {/* ── Gold strip ── */}
        <div className="jf-strip">
          Designed &amp; Developed for Vasai Virar City Municipal Corporation (VVCMC) — Jan Samvad
        </div>
      </footer>
    </>
  );
}