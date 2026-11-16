import{u as e,j as a}from"./vendor-react-BwQSrn6v.js";import{l as i}from"./index-CMWya2SN.js";import{h as s}from"./bg1-CoL5AQNs.js";import"./vendor-redux-BzC0OSN9.js";import"./vendor-icons-MDKyb3au.js";import"./vendor-utils-CRNBIpRx.js";function c(){const r=e();return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"ps-root",children:[a.jsx("div",{className:"ps-bg",style:{backgroundImage:`url(${s})`}}),a.jsx("div",{className:"ps-overlay"}),a.jsx("div",{className:"ps-stripe"}),a.jsx("div",{className:"ps-glow-tl"}),a.jsx("div",{className:"ps-glow-br"}),a.jsx("div",{className:"ps-dots"}),a.jsxs("div",{className:"ps-box",children:[a.jsxs("div",{className:"ps-header",children:[a.jsx("div",{className:"ps-logo-wrap",children:a.jsx("img",{className:"ps-logo-img",src:i,alt:"VVCMC"})}),a.jsxs("div",{children:[a.jsx("div",{className:"ps-title",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{className:"ps-title-jan",children:"जन संवाद"}),a.jsx("div",{className:"ps-hr"}),a.jsx("div",{className:"ps-sub",children:"Please select a portal to log in."})]})]}),a.jsxs("div",{className:"ps-cards",children:[a.jsxs("div",{className:"ps-card admin",onClick:()=>r("/admin-login"),children:[a.jsx("div",{className:"ps-icon-wrap",children:"🏛️"}),a.jsx("div",{className:"ps-card-title",children:"Official Login"}),a.jsx("div",{className:"ps-card-sep"}),a.jsx("div",{className:"ps-card-sub",children:"For Municipal Corporation Officers, Employees, and Administrative Staff."}),a.jsx("button",{className:"ps-card-btn",children:"Official Login →"})]}),a.jsxs("div",{className:"ps-card citizen",onClick:()=>r("/citizen-login"),children:[a.jsx("div",{className:"ps-icon-wrap",children:"👤"}),a.jsx("div",{className:"ps-card-title",children:"Citizen Login"}),a.jsx("div",{className:"ps-card-sep"}),a.jsx("div",{className:"ps-card-sub",children:"For Citizens — To Book an Appointment with the Mayor."}),a.jsx("button",{className:"ps-card-btn",children:"Citizen Login →"})]})]}),a.jsxs("div",{className:"ps-footer",children:[a.jsx("div",{className:"ps-dot"}),"Secure Government Portal · All rights reserved"]})]})]})]})}export{c as default};
