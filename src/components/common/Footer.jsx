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
        /* Tablet (768–1100): 2 columns above · Mobile (≤767): single column */
        @media (max-width: 767px) {
          .jf-body { grid-template-columns: 1fr; padding: 40px 20px 28px; row-gap: 30px; }
          .jf-col, .jf-col:first-child, .jf-col:last-child { padding: 0; }
          .jf-col + .jf-col { border-left: none; border-top: 1px solid var(--jf-line); padding-top: 24px; }
          .jf-brand-name { font-size: 19px; }
          .jf-logo { width: 68px; height: 68px; }
          .jf-cards { grid-template-columns: 1fr; }
          .jf-bottom { padding: 18px 20px; flex-direction: column; align-items: flex-start; }
          .jf-strip { font-size: 12.5px; }
          .jf-wa-btn { width: 100%; justify-content: center; }
          .jf-link { padding-top: 10px; padding-bottom: 10px; font-size: 14.5px; }
          .jf-links { display: grid; grid-template-columns: 1fr 1fr; column-gap: 8px; }  /* compact — reference प्रमाणे */
        }
        @media (max-width: 1100px) and (min-width: 768px) {
          .jf-body { padding: 48px 28px 36px; }
          .jf-col { padding: 0 28px; }
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