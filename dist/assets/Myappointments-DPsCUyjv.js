import{u as P,a as l,j as e}from"./vendor-react-BwQSrn6v.js";import{c as R}from"./citizenAxios-nN87ILv3.js";import"./vendor-utils-CRNBIpRx.js";function O(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"—"}function U(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}function $(n){return n?new Date(n).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}const E={pending:{bg:"#fef9c3",color:"#92400e",border:"#fde68a",label:"⏳ Pending"},approved:{bg:"#dcfce7",color:"#166534",border:"#86efac",label:"✅ Approved"},rejected:{bg:"#fee2e2",color:"#991b1b",border:"#fca5a5",label:"❌ Rejected"},expired:{bg:"#f3f4f6",color:"#6b7280",border:"#e5e7eb",label:"🕰️ Expired"}};function A({name:n,photo:i,size:s=40}){const[x,f]=l.useState(!1),a=n?n.split(" ").map(v=>v[0]).join("").toUpperCase().slice(0,2):"?",t=["#0d9488","#0891b2","#7c3aed","#db2777","#ea580c","#16a34a"],u=n?n.charCodeAt(0)%t.length:0,d=i?i.startsWith("http")?i.replace("http://localhost:5000","https://jansamvad.saavi.co.in"):`https://jansamvad.saavi.co.in/${i}`:null;return d&&!x?e.jsx("img",{src:d,alt:n,onError:()=>f(!0),style:{width:s,height:s,borderRadius:"50%",objectFit:"cover",border:"2px solid #e2e8f0",flexShrink:0}}):e.jsx("div",{style:{width:s,height:s,borderRadius:"50%",background:t[u],color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:s*.35,fontWeight:700,fontFamily:"'DM Sans',sans-serif",flexShrink:0,border:"2px solid rgba(255,255,255,0.3)"},children:a})}function _({appt:n,onView:i}){const[s,x]=l.useState(!1),f=l.useRef();return l.useEffect(()=>{const a=t=>{f.current&&!f.current.contains(t.target)&&x(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]),e.jsxs("div",{ref:f,style:{position:"relative",display:"flex",justifyContent:"center"},children:[e.jsx("button",{onClick:a=>{a.stopPropagation(),x(t=>!t)},style:{background:"none",border:"1px solid #e2e8f0",cursor:"pointer",padding:"4px 8px",borderRadius:6,color:"#6b7280",fontSize:18,lineHeight:1,display:"flex",alignItems:"center",transition:"all .15s"},onMouseEnter:a=>{a.target.style.borderColor="#16a34a",a.target.style.color="#16a34a"},onMouseLeave:a=>{a.target.style.borderColor="#e2e8f0",a.target.style.color="#6b7280"},title:"Actions",children:"⋮"}),s&&e.jsx("div",{style:{position:"absolute",right:0,top:"110%",background:"#fff",border:"1px solid #e5e7eb",borderRadius:10,boxShadow:"0 8px 24px rgba(0,0,0,0.12)",zIndex:100,minWidth:150,overflow:"hidden"},children:e.jsx("button",{onClick:a=>{a.stopPropagation(),i(n),x(!1)},style:{display:"block",width:"100%",padding:"10px 16px",background:"none",border:"none",textAlign:"left",cursor:"pointer",fontSize:13,color:"#374151",fontFamily:"'DM Sans',sans-serif",fontWeight:500},onMouseEnter:a=>a.target.style.background="#f9fafb",onMouseLeave:a=>a.target.style.background="none",children:"👁 View Details"})})]})}const W=[10,25,50],D="160px minmax(150px,1fr) 115px 120px 150px 120px 56px";function Q(){const n=P(),i=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),[s,x]=l.useState([]),[f,a]=l.useState(!0),[t,u]=l.useState(null),[d,v]=l.useState("all"),[j,B]=l.useState([]),[V,T]=l.useState(!1),[m,M]=l.useState(""),[c,h]=l.useState(1),[w,I]=l.useState(10);l.useEffect(()=>{if(!i){n("/login");return}C()},[]);const C=async()=>{try{a(!0);const o=await R.get("/citizen/my-appointments",{params:{citizenId:i._id,mobileNumber:i.mobileNumber}});o.data.success&&x(o.data.appointments||[])}catch{}finally{a(!1)}},y=s.filter(o=>d==="all"||o.status===d).filter(o=>{if(!m)return!0;const r=m.toLowerCase();return o.tokenId?.toLowerCase().includes(r)||o.purpose?.toLowerCase().includes(r)||o.fullName?.toLowerCase().includes(r)}),p=Math.max(1,Math.ceil(y.length/w)),S=y.slice((c-1)*w,c*w),F=o=>E[o?.toLowerCase()]||E.pending,L=()=>p<=5?Array.from({length:p},(o,r)=>r+1):c<=3?[1,2,3,"...",p]:c>=p-2?[1,"...",p-2,p-1,p]:[1,"...",c-1,c,c+1,"...",p],z=()=>u(null);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800&family=Mukta:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }

        .ma-root {
          min-height: calc(100vh - 64px);
          background: #f0ece0;
          padding: 32px 24px;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
        }

        /* ── inner 90% centered ── */
        .ma-inner {
          width: 95%;
          max-width: 95%;
          margin: 0 auto;
        }

        /* ── Header ── */
        .ma-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 14px;
        }
        .ma-title {
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #2c4a2e;
          letter-spacing: 0px;
          line-height: 1.3;
        }
        .ma-sub {
          font-size: 14px;
          color: #5a5a3a;
          margin-top: 5px;
          font-weight: 500;
        }
        .ma-actions {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .ma-icon-btn {
          width: 42px; height: 42px;
          border-radius: 10px;
          border: 1.5px solid #d4b870;
          background: #fffef8;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 17px;
          transition: all .15s;
          color: #3a3a2a;
        }
        .ma-icon-btn:hover { border-color: #3a9aaf; background: #edf9fc; color: #1d6e80; }
        .ma-book-btn {
          padding: 11px 22px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, #3a9aaf, #2e8a9e);
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          display: flex; align-items: center; gap: 7px;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          transition: all .2s;
          white-space: nowrap;
          box-shadow: 0 3px 12px rgba(58,154,175,0.35);
        }
        .ma-book-btn:hover { background: linear-gradient(135deg, #2e8a9e, #1d6e80); transform: translateY(-1px); box-shadow: 0 5px 16px rgba(58,154,175,0.45); }

        /* ── Search ── */
        .search-wrap { position: relative; }
        .search-input {
          height: 42px;
          padding: 0 16px 0 40px;
          border: 1.5px solid #d4b870;
          border-radius: 10px;
          font-size: 13px;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          background: #fffef8;
          outline: none;
          width: 240px;
          transition: border-color .2s, box-shadow .2s;
          color: #3a3a2a;
        }
        .search-input:focus { border-color: #3a9aaf; box-shadow: 0 0 0 3px rgba(58,154,175,0.12); }
        .search-icon {
          position: absolute; left: 12px; top: 50%;
          transform: translateY(-50%);
          color: #a09060; font-size: 15px; pointer-events: none;
        }

        /* ── Filter row ── */
        .filter-search-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 10px;
        }
        .filter-tabs { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .filter-label { font-size: 12px; font-weight: 700; color: #6a5a30; text-transform: uppercase; letter-spacing: .5px; }
        .ftab {
          padding: 7px 18px;
          border-radius: 20px;
          border: 1.5px solid #d4b870;
          background: #fffef8;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all .15s;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          color: #5a5a3a;
        }
        .ftab:hover { border-color: #3a9aaf; color: #1d6e80; background: #edf9fc; }
        .ftab.active { background: linear-gradient(135deg, #3a9aaf, #2e8a9e); border-color: #3a9aaf; color: #fff; }

        /* ── Table card ── */
        .table-card {
          background: #fffef8;
          border-radius: 14px;
          border: 1.5px solid #d4b870;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          width: 100%;
        }

        /* ── FIX: Horizontal scroll wrapper for small screens ── */
        .table-scroll-wrapper {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .table-scroll-inner {
          min-width: 880px;
        }

        /* ── Table header ── */
        .tbl-head {
          display: grid;
          grid-template-columns: ${D};
          align-items: center;
          padding: 0 24px;
          background: linear-gradient(135deg, #3a9aaf, #2a7a8e);
          min-height: 52px;
          width: 100%;
        }
        .tbl-head-cell {
          font-size: 12px;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: .8px;
          display: flex;
          align-items: center;
          gap: 5px;
          user-select: none;
        }
        .sort-icon { font-size: 11px; opacity: .7; cursor: pointer; }

        /* ── Table rows — same grid ── */
        .tbl-row {
          display: grid;
          grid-template-columns: ${D};
          align-items: center;
          padding: 0 24px;
          min-height: 72px;
          border-bottom: 1px solid #e8dfa0;
          cursor: pointer;
          transition: background .12s;
          width: 100%;
        }
        .tbl-row:last-child { border-bottom: none; }
        .tbl-row:hover { background: #fdf8ee; }
        .tbl-row.row-checked { background: #edf9fc; }

        /* ── Cells ── */
        .cell-token {
          font-size: 13px;
          font-weight: 700;
          color: #2c4a2e;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          letter-spacing: -0.2px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .cell-purpose-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-right: 16px;
          overflow: hidden;
          min-width: 0;
        }
        .cell-purpose-text { overflow: hidden; min-width: 0; }
        .cell-purpose-text .purpose-title {
          font-size: 15px;
          font-weight: 700;
          color: #2c3e28;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.3;
        }
        .cell-purpose-text .purpose-sub {
          font-size: 12px;
          color: #8a7a50;
          margin-top: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .cell-date {
          font-size: 14px;
          font-weight: 600;
          color: #3a3a2a;
        }
        .cell-slot {
          font-size: 13px;
          color: #3a3a2a;
          font-weight: 500;
        }
        .status-badge {
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
          border: 1.5px solid;
        }

        /* ── Footer ── */
        .tbl-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          border-top: 1px solid #e8dfa0;
          flex-wrap: wrap;
          gap: 10px;
          background: #fffef8;
          border-radius: 0 0 14px 14px;
          width: 100%;
        }
        .footer-left {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #6a5a30;
          font-weight: 500;
        }
        .page-size-select {
          height: 32px;
          padding: 0 8px;
          border: 1.5px solid #d4b870;
          border-radius: 8px;
          font-size: 13px;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          background: #fffef8;
          cursor: pointer;
          outline: none;
          color: #3a3a2a;
          font-weight: 600;
        }
        .pagination { display: flex; align-items: center; gap: 6px; }
        .pg-btn {
          width: 34px; height: 34px;
          border-radius: 8px;
          border: 1.5px solid #d4b870;
          background: #fffef8;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          color: #3a3a2a;
          transition: all .15s;
          display: flex; align-items: center; justify-content: center;
        }
        .pg-btn:hover:not(:disabled):not(.pg-ellipsis) { border-color: #3a9aaf; color: #1d6e80; background: #edf9fc; }
        .pg-btn.active { background: linear-gradient(135deg, #3a9aaf, #2e8a9e); border-color: #3a9aaf; color: #fff; }
        .pg-btn:disabled { opacity: .4; cursor: not-allowed; }
        .pg-btn.pg-ellipsis { border-color: transparent; background: none; cursor: default; pointer-events: none; }
        .pg-arrow { font-size: 16px; }

        /* ── Empty ── */
        .empty-box { padding: 64px 32px; text-align: center; }

        /* ── FIX: Modal overlay — sits below navbar (64px) and scrolls within remaining viewport ── */
        .modal-overlay {
          position: fixed;
          top: 64px;        /* offset for navbar height */
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15,23,42,0.6);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          backdrop-filter: blur(4px);
          overflow-y: auto;  /* allow scroll if modal is taller than remaining space */
        }
        .modal-card {
          background: #fffef8;
          border-radius: 18px;
          width: 100%;
          max-width: 500px;
          max-height: calc(100vh - 96px); /* viewport minus navbar (64px) minus some padding (32px) */
          overflow-y: auto;
          box-shadow: 0 24px 64px rgba(0,0,0,0.25);
          border: 1.5px solid #d4b870;
          position: relative; /* ensure it stacks correctly above overlay */
        }
        .modal-header {
          background: linear-gradient(135deg, #3a9aaf 0%, #2a7a8e 60%, #C9963A 100%);
          padding: 22px 24px;
          color: #fff;
          border-radius: 18px 18px 0 0;
          display: flex; justify-content: space-between; align-items: center;
        }
        /* ── FIX: Close button — explicit type, pointer-events ensured ── */
        .modal-close {
          background: rgba(255,255,255,0.15);
          border: none;
          color: #fff;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 18px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background .15s;
          flex-shrink: 0;
          pointer-events: all;
          line-height: 1;
          padding: 0;
        }
        .modal-close:hover { background: rgba(255,255,255,0.3); }
        .modal-body { padding: 24px; }
        .modal-row {
          display: flex; justify-content: space-between;
          padding: 10px 0; border-bottom: 1px solid #e8dfa0;
          font-size: 13px;
        }
        .modal-row:last-child { border-bottom: none; }
        .modal-key { color: #7a6a3a; font-weight: 600; }
        .modal-val { color: #2c3e28; font-weight: 700; text-align: right; max-width: 60%; word-break: break-word; }

        @keyframes spin { to { transform: rotate(360deg) } }
        @keyframes fadeIn { from { opacity:0; transform:translateY(6px) } to { opacity:1; transform:translateY(0) } }
        .tbl-row { animation: fadeIn .2s ease both; }


        /* ══════════════════════════════════════════════════════════════
           TEAL THEME — Meetings page सारखे रंग
           Teal #176F7C · Dark teal #07545F · Secondary #238C9A · Light aqua #E5F2F3
           Border #DCEBED · Text #174B57 / #66818A · Orange accent #F39A18
        ══════════════════════════════════════════════════════════════ */
        .ma-root { background: linear-gradient(160deg,#F2F9FA 0%,#F7FAFA 45%,#EEF7F8 100%); }
        .ma-title { color:#07545F; font-size:24px; font-weight:800; display:flex; align-items:center; gap:10px; }
        .ma-title::before { content:''; width:4px; height:22px; border-radius:3px; background:#F39A18; flex-shrink:0; }
        .ma-sub { color:#66818A; }
        .ma-icon-btn { border:1.5px solid #DCEBED; background:#fff; color:#176F7C; box-shadow:0 2px 8px rgba(7,84,95,0.06); }
        .ma-icon-btn:hover { border-color:#176F7C; background:#E5F2F3; color:#07545F; }
        .ma-book-btn { background:linear-gradient(135deg,#238C9A 0%,#176F7C 55%,#07545F 100%); box-shadow:0 6px 16px rgba(23,111,124,0.28); }
        .ma-book-btn:hover { background:linear-gradient(135deg,#238C9A 0%,#176F7C 55%,#07545F 100%); box-shadow:0 8px 20px rgba(23,111,124,0.36); }

        .search-input { border:1.5px solid #DCEBED; background:#fff; color:#174B57; }
        .search-input:focus { border-color:#176F7C; box-shadow:0 0 0 3px rgba(23,111,124,0.12); }
        .search-input::placeholder { color:#8AA6AB; }
        .search-icon { color:#176F7C; }

        .filter-label { color:#174B57; }
        .ftab { border:1.5px solid #BFDDE1; background:#fff; color:#174B57; }
        .ftab:hover { border-color:#176F7C; color:#07545F; background:#E5F2F3; }
        .ftab.active { background:linear-gradient(135deg,#238C9A,#176F7C); border-color:#176F7C; color:#fff; }

        .table-card { background:#fff; border:1px solid #DCEBED; box-shadow:0 4px 20px rgba(7,84,95,0.06); }
        .tbl-head { background:#E5F2F3; }
        .tbl-head-cell { color:#07545F; }
        .tbl-row { border-bottom:1px solid #EEF5F6; }
        .tbl-row:hover { background:#F3FAFA; }
        .tbl-row.row-checked { background:#E5F2F3; }
        .cell-token { color:#07545F; overflow-wrap:anywhere; }
        .cell-purpose-text .purpose-title { color:#174B57; }
        .cell-purpose-text .purpose-sub { color:#66818A; }
        .cell-date, .cell-slot { color:#174B57; }

        .tbl-footer { background:#fff; border-top:1px solid #EEF5F6; }
        .footer-left { color:#66818A; }
        .page-size-select { border:1.5px solid #DCEBED; background:#fff; color:#174B57; }
        .pg-btn { border:1.5px solid #DCEBED; background:#fff; color:#174B57; }
        .pg-btn:hover:not(:disabled):not(.pg-ellipsis) { border-color:#176F7C; color:#07545F; background:#E5F2F3; }
        .pg-btn.active { background:linear-gradient(135deg,#238C9A,#176F7C); border-color:#176F7C; color:#fff; }

        .modal-card { background:#fff; border:1px solid #DCEBED; }
        .modal-header { background:linear-gradient(135deg,#238C9A 0%,#176F7C 55%,#07545F 100%); }
        .modal-row { border-bottom:1px solid #EEF5F6; }
        .modal-key { color:#66818A; }
        .modal-val { color:#174B57; }

        /* ══════════════════════════════════════════════════════════════
           RESPONSIVE — Laptop/Desktop (≥1025) = table तसाच
           Tablet (768–1024) = table, स्क्रीनमध्ये बसेल असा · Mobile (≤767) = cards
        ══════════════════════════════════════════════════════════════ */

        /* Tablet landscape + portrait */
        @media (max-width:1024px){
          .ma-root { padding:24px 18px; }
          .ma-inner { width:100%; max-width:100%; }
          .filter-search-row { flex-direction:column; align-items:stretch; }
          .search-wrap { width:100%; }
          .search-input { width:100%; }
          .tbl-head, .tbl-row { padding:0 14px; column-gap:10px;
            grid-template-columns:136px minmax(140px,1fr) 98px 92px 122px 112px 54px; }
          .table-scroll-inner { min-width:0; }
          .cell-token { white-space:normal; word-break:break-word; line-height:1.35; font-size:12.5px; }
          .cell-purpose-text .purpose-title { white-space:normal; font-size:14px; }
          .cell-date { font-size:13px; }
          .cell-slot { font-size:12.5px; }
          .status-badge { padding:4px 10px; font-size:11.5px; }
          .tbl-head-cell { font-size:10.5px; letter-spacing:.2px; white-space:normal; overflow-wrap:anywhere; line-height:1.3; }
          .tbl-head { min-height:56px; }
        }
        @media (max-width:899px){
          .tbl-head, .tbl-row { grid-template-columns:112px minmax(110px,1fr) 82px 76px 108px 98px 52px; column-gap:8px; padding:0 12px; }
          .status-badge { padding:4px 8px; font-size:11px; }
          .cell-purpose-wrap { gap:8px; padding-right:4px; }
          .tbl-head-cell { font-size:10px; letter-spacing:0; }
        }

        /* Mobile — appointment cards (सगळी माहिती दिसते) */
        @media (max-width:767px){
          .ma-root { padding:18px 12px; }
          .ma-header { flex-direction:column; align-items:stretch; gap:12px; margin-bottom:16px; }
          .ma-title { font-size:21px; }
          .ma-sub { font-size:13px; }
          .ma-actions { width:100%; }
          .ma-book-btn { flex:1; justify-content:center; min-height:44px; }
          .ma-icon-btn { width:44px; height:44px; flex-shrink:0; }
          .filter-tabs { gap:8px; }
          .filter-label { width:100%; }
          .ftab { padding:8px 14px; font-size:12.5px; min-height:36px; }
          .search-input { height:44px; }

          .table-card { background:transparent; border:none; box-shadow:none; overflow:visible; }
          .table-scroll-wrapper { overflow:visible; }
          .tbl-head { display:none; }
          .tbl-row {
            display:grid; grid-template-columns:minmax(0,1fr) auto;
            grid-template-areas:"token status" "purpose actions" "date date" "slot slot" "time time";
            column-gap:10px; row-gap:8px; align-items:center;
            padding:14px; margin-bottom:12px; min-height:0;
            background:#fff; border:1px solid #DCEBED; border-radius:14px;
            box-shadow:0 4px 14px rgba(7,84,95,0.06);
          }
          .tbl-row:last-child { border-bottom:1px solid #DCEBED; }
          .cell-token { grid-area:token; font-size:14px; white-space:normal; word-break:break-word; }
          .cell-status { grid-area:status; justify-self:end; }
          .cell-purpose-wrap { grid-area:purpose; padding-right:0; }
          .cell-purpose-text .purpose-title { white-space:normal; font-size:14px; }
          .cell-actions { grid-area:actions; align-self:center; }
          .cell-date { grid-area:date; }
          .c-slot { grid-area:slot; }
          .c-time { grid-area:time; }
          .cell-date, .c-slot, .c-time { font-size:13px; font-weight:600; color:#174B57; display:flex; gap:6px; align-items:baseline;
            background:#F5FAFA; border-radius:8px; padding:7px 10px; margin:0; }
          .cell-date { margin-top:2px; }
          .cell-date::before { content:'📅 Date:'; }
          .c-slot::before { content:'🕒 Slot:'; }
          .c-time::before { content:'⏰ Appointment Time:'; }
          .cell-date::before, .c-slot::before, .c-time::before { font-weight:500; color:#66818A; white-space:nowrap; }

          .tbl-footer { background:#fff; border:1px solid #DCEBED; border-radius:14px; padding:12px; justify-content:center; }
          .footer-left { flex-wrap:wrap; justify-content:center; }
          .pagination { flex-wrap:wrap; justify-content:center; }
          .pg-btn { width:38px; height:38px; }
          .empty-box { background:#fff; border:1px solid #DCEBED; border-radius:14px; padding:44px 18px; }

          /* Modal — mobile navbar उंच असल्याने full screen overlay */
          .modal-overlay { top:0; z-index:1100; padding:12px; }
          .modal-card { max-height:calc(100vh - 24px); }
          .modal-row { flex-direction:column; gap:3px; }
          .modal-val { text-align:left; max-width:100%; }
        }
        @media (max-width:360px){
          .ftab { padding:7px 11px; font-size:12px; }
          .cell-date, .c-slot, .c-time { flex-wrap:wrap; }
        }
      `}),e.jsx("div",{className:"ma-root",children:e.jsxs("div",{className:"ma-inner",children:[e.jsxs("div",{className:"ma-header",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"ma-title",children:"My Appointments"}),e.jsxs("p",{className:"ma-sub",children:["Hello,",i?.fullName||`Citizen  ${i?.citizenId||""}`," 👋 — all your appointments are here."]})]}),e.jsxs("div",{className:"ma-actions",children:[e.jsx("button",{className:"ma-icon-btn",title:"Refresh",onClick:C,children:"↻"}),e.jsxs("button",{className:"ma-book-btn",onClick:()=>n("/book-appointment"),children:[e.jsx("span",{style:{fontSize:18,lineHeight:1},children:"+"})," New Appointment"]})]})]}),e.jsxs("div",{className:"filter-search-row",children:[e.jsxs("div",{className:"filter-tabs",children:[e.jsx("span",{className:"filter-label",children:"Status"}),[{key:"all",label:"All"},{key:"pending",label:"Pending"},{key:"approved",label:"Approved"},{key:"rejected",label:"Rejected"},{key:"expired",label:"Expired"}].map(o=>e.jsxs("button",{className:`ftab${d===o.key?" active":""}`,onClick:()=>{v(o.key),B([]),T(!1),h(1)},children:[o.label," (",o.key==="all"?s.length:s.filter(r=>r.status===o.key).length,")"]},o.key))]}),e.jsxs("div",{className:"search-wrap",children:[e.jsx("span",{className:"search-icon",children:"🔍"}),e.jsx("input",{className:"search-input",type:"text",placeholder:"Search appointment",value:m,onChange:o=>{M(o.target.value),h(1)}})]})]}),e.jsxs("div",{className:"table-card",children:[e.jsx("div",{className:"table-scroll-wrapper",children:e.jsxs("div",{className:"table-scroll-inner",children:[e.jsxs("div",{className:"tbl-head",children:[e.jsxs("div",{className:"tbl-head-cell",children:["# TOKEN ID ",e.jsx("span",{className:"sort-icon",children:"⇅"})]}),e.jsx("div",{className:"tbl-head-cell",children:"PURPOSE"}),e.jsxs("div",{className:"tbl-head-cell",children:["DATE ",e.jsx("span",{className:"sort-icon",children:"⇅"})]}),e.jsx("div",{className:"tbl-head-cell",children:"SLOT"}),e.jsx("div",{className:"tbl-head-cell",children:"APPOINTMENT_TIME"}),e.jsxs("div",{className:"tbl-head-cell",children:["STATUS ",e.jsx("span",{className:"sort-icon",children:"⇅"})]}),e.jsx("div",{className:"tbl-head-cell",children:"ACTIONS"})]}),f?e.jsxs("div",{style:{textAlign:"center",padding:"56px 0"},children:[e.jsx("div",{style:{width:34,height:34,border:"3px solid #e2e8f0",borderTopColor:"#16a34a",borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 14px"}}),e.jsx("p",{style:{color:"#94a3b8",fontSize:14},children:"Appointments लोड होत आहेत..."})]}):S.length===0?e.jsxs("div",{className:"empty-box",children:[e.jsx("div",{style:{fontSize:48,marginBottom:14},children:"📅"}),e.jsx("p",{style:{color:"#374151",fontWeight:700,fontSize:16,marginBottom:6},children:d==="all"&&!m?"कोणतेही appointments नाहीत":`No ${d!=="all"?d:""} appointments found`}),e.jsx("p",{style:{color:"#94a3b8",fontSize:14,marginBottom:20},children:d==="all"&&!m?"Book your first appointment to get started.":"Try a different filter or search term."}),d==="all"&&!m&&e.jsx("button",{className:"ma-book-btn",style:{margin:"0 auto",display:"inline-flex"},onClick:()=>n("/book-appointment"),children:"+ Book Appointment"})]}):S.map((o,r)=>{const b=F(o.status),N=j.includes(r),k=o.purpose?o.purpose.length>40?o.purpose.slice(0,40)+"…":o.purpose:"—";return e.jsxs("div",{className:`tbl-row${N?" row-checked":""}`,style:{animationDelay:`${r*40}ms`},onClick:()=>u(o),children:[e.jsx("div",{className:"cell-token",children:o.tokenId||"—"}),e.jsxs("div",{className:"cell-purpose-wrap",children:[e.jsx(A,{name:o.fullName,photo:o.visitorPhoto,size:38}),e.jsxs("div",{className:"cell-purpose-text",children:[e.jsx("div",{className:"purpose-title",children:k}),e.jsx("div",{className:"purpose-sub",children:o.fullName||"नागरिक"})]})]}),e.jsx("div",{className:"cell-date",children:U(o.preferredDate)}),e.jsx("div",{className:"cell-slot c-slot",children:o.slotTime||"—"}),e.jsx("div",{className:"cell-slot c-time",children:o.microSlot||"—"}),e.jsx("div",{className:"cell-status",children:e.jsx("span",{className:"status-badge",style:{background:b.bg,color:b.color,borderColor:b.border},children:b.label})}),e.jsx("div",{className:"cell-actions",onClick:g=>g.stopPropagation(),children:e.jsx(_,{appt:o,onView:u})})]},r)})]})}),!f&&y.length>0&&e.jsxs("div",{className:"tbl-footer",children:[e.jsxs("div",{className:"footer-left",children:[e.jsx("span",{children:"Show"}),e.jsx("select",{className:"page-size-select",value:w,onChange:o=>{I(Number(o.target.value)),h(1)},children:W.map(o=>e.jsx("option",{value:o,children:o},o))}),e.jsxs("span",{children:["of ",e.jsx("strong",{children:y.length})," results"]}),j.length>0&&e.jsxs("span",{style:{color:"#16a34a",fontWeight:700},children:["· ",j.length," selected"]})]}),e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"pg-btn",onClick:()=>h(o=>Math.max(1,o-1)),disabled:c===1,children:e.jsx("span",{className:"pg-arrow",children:"‹"})}),L().map((o,r)=>o==="..."?e.jsx("button",{className:"pg-btn pg-ellipsis",children:"…"},`ell-${r}`):e.jsx("button",{className:`pg-btn${c===o?" active":""}`,onClick:()=>h(o),children:o},o)),e.jsx("button",{className:"pg-btn",onClick:()=>h(o=>Math.min(p,o+1)),disabled:c===p,children:e.jsx("span",{className:"pg-arrow",children:"›"})})]})]})]})]})}),t&&e.jsx("div",{className:"modal-overlay",onClick:z,children:e.jsxs("div",{className:"modal-card",onClick:o=>o.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:0,fontSize:10,opacity:.6,textTransform:"uppercase",letterSpacing:1},children:"Appointment Details"}),e.jsx("h3",{style:{margin:"4px 0 0",fontSize:19,fontWeight:800,fontFamily:"'Syne',sans-serif"},children:t.tokenId})]}),e.jsx("button",{type:"button",className:"modal-close",onClick:z,children:"✕"})]}),e.jsxs("div",{className:"modal-body",children:[e.jsx("div",{style:{textAlign:"center",marginBottom:20},children:e.jsx(A,{name:t.fullName,photo:t.visitorPhoto,size:80})}),(()=>{const o=F(t.status);return e.jsx("div",{style:{textAlign:"center",marginBottom:16},children:e.jsx("span",{className:"status-badge",style:{background:o.bg,color:o.color,borderColor:o.border,fontSize:13,padding:"6px 20px"},children:o.label})})})(),[["Name",t.fullName],["Mobile",t.mobileNumber],["Email",t.email||"—"],["Address",t.address||"—"],["Date",O(t.preferredDate)],["Slot",t.slotTime],["Purpose",t.purpose],["Visitors",t.numberOfVisitors],["Visited Before",t.visitedBefore?"Yes":"No"],["Ward",t.ward||"—"],["Booked On",$(t.createdAt)]].map(([o,r])=>r?e.jsxs("div",{className:"modal-row",children:[e.jsx("span",{className:"modal-key",children:o}),e.jsx("span",{className:"modal-val",children:r})]},o):null),t.adminNote&&e.jsxs("div",{style:{background:"#fef9c3",border:"1px solid #fde68a",borderRadius:8,padding:"10px 14px",marginTop:12,fontSize:13,color:"#92400e"},children:[e.jsx("strong",{children:"Admin Note:"})," ",t.adminNote]}),t.replyDocument&&e.jsxs("div",{style:{background:"#f0fdf4",border:"1px solid #86efac",borderRadius:8,padding:"10px 14px",marginTop:8,fontSize:13},children:[e.jsx("p",{style:{color:"#166534",fontWeight:700,margin:"0 0 6px"},children:"📎 Document from Admin"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx("button",{onClick:()=>{if(t.replyDocument?.toLowerCase().includes(".pdf")||t.replyDocument?.toLowerCase().includes("inward_pdf")){const r=`https://docs.google.com/gview?url=${encodeURIComponent(t.replyDocument)}&embedded=true`;window.open(r,"_blank")}else window.open(t.replyDocument,"_blank")},style:{color:"#16a34a",fontWeight:600,fontSize:13,background:"none",border:"none",cursor:"pointer",textDecoration:"underline",padding:0},children:"📄 View Document"}),e.jsx("button",{onClick:async()=>{try{const r=await(await fetch(t.replyDocument)).blob(),b=t.replyDocument?.toLowerCase().includes(".pdf")||t.replyDocument?.toLowerCase().includes("inward_pdf"),N=new Blob([r],{type:b?"application/pdf":r.type}),k=window.URL.createObjectURL(N),g=document.createElement("a");g.href=k,g.download=b?"document.pdf":"document",document.body.appendChild(g),g.click(),document.body.removeChild(g),window.URL.revokeObjectURL(k)}catch(o){console.error("Download failed",o)}},style:{color:"#64748b",background:"none",border:"none",cursor:"pointer",fontSize:16},title:"Download",children:"⬇"})]})]}),t.qrCode&&e.jsxs("div",{style:{textAlign:"center",marginTop:20,paddingTop:16,borderTop:"1px solid #f1f5f9"},children:[e.jsx("p",{style:{fontSize:12,color:"#94a3b8",marginBottom:8},children:"QR Code — भेटीच्या दिवशी दाखवा"}),e.jsx("img",{src:t.qrCode,alt:"QR",style:{width:130,height:130}})]})]})]})})]})}export{Q as default};
