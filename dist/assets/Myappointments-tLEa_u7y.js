import{u as O,a as s,j as e}from"./vendor-react-BwQSrn6v.js";import{c as B}from"./citizenAxios-nN87ILv3.js";import"./vendor-utils-CRNBIpRx.js";function F(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"—"}function U(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}function $(n){return n?new Date(n).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}const D={pending:{bg:"#fef9c3",color:"#92400e",border:"#fde68a",label:"⏳ Pending"},approved:{bg:"#dcfce7",color:"#166534",border:"#86efac",label:"✅ Approved"},rejected:{bg:"#fee2e2",color:"#991b1b",border:"#fca5a5",label:"❌ Rejected"},expired:{bg:"#f3f4f6",color:"#6b7280",border:"#e5e7eb",label:"🕰️ Expired"}};function T({name:n,photo:i,size:l=40}){const[x,f]=s.useState(!1),a=n?n.split(" ").map(j=>j[0]).join("").toUpperCase().slice(0,2):"?",o=["#0d9488","#0891b2","#7c3aed","#db2777","#ea580c","#16a34a"],u=n?n.charCodeAt(0)%o.length:0,d=i?i.startsWith("http")?i.replace("http://localhost:5000","https://jansamvad.saavi.co.in"):`https://jansamvad.saavi.co.in/${i}`:null;return d&&!x?e.jsx("img",{src:d,alt:n,onError:()=>f(!0),style:{width:l,height:l,borderRadius:"50%",objectFit:"cover",border:"2px solid #e2e8f0",flexShrink:0}}):e.jsx("div",{style:{width:l,height:l,borderRadius:"50%",background:o[u],color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:l*.35,fontWeight:700,fontFamily:"'DM Sans',sans-serif",flexShrink:0,border:"2px solid rgba(255,255,255,0.3)"},children:a})}function _({appt:n,onView:i}){const[l,x]=s.useState(!1),f=s.useRef();return s.useEffect(()=>{const a=o=>{f.current&&!f.current.contains(o.target)&&x(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]),e.jsxs("div",{ref:f,style:{position:"relative",display:"flex",justifyContent:"center"},children:[e.jsx("button",{onClick:a=>{a.stopPropagation(),x(o=>!o)},style:{background:"none",border:"1px solid #e2e8f0",cursor:"pointer",padding:"4px 8px",borderRadius:6,color:"#6b7280",fontSize:18,lineHeight:1,display:"flex",alignItems:"center",transition:"all .15s"},onMouseEnter:a=>{a.target.style.borderColor="#16a34a",a.target.style.color="#16a34a"},onMouseLeave:a=>{a.target.style.borderColor="#e2e8f0",a.target.style.color="#6b7280"},title:"Actions",children:"⋮"}),l&&e.jsx("div",{style:{position:"absolute",right:0,top:"110%",background:"#fff",border:"1px solid #e5e7eb",borderRadius:10,boxShadow:"0 8px 24px rgba(0,0,0,0.12)",zIndex:100,minWidth:150,overflow:"hidden"},children:e.jsx("button",{onClick:a=>{a.stopPropagation(),i(n),x(!1)},style:{display:"block",width:"100%",padding:"10px 16px",background:"none",border:"none",textAlign:"left",cursor:"pointer",fontSize:13,color:"#374151",fontFamily:"'DM Sans',sans-serif",fontWeight:500},onMouseEnter:a=>a.target.style.background="#f9fafb",onMouseLeave:a=>a.target.style.background="none",children:"👁 View Details"})})]})}const W=[10,25,50],M="160px 1fr 130px 200px 150px 60px";function q(){const n=O(),i=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),[l,x]=s.useState([]),[f,a]=s.useState(!0),[o,u]=s.useState(null),[d,j]=s.useState("all"),[k,I]=s.useState([]),[V,E]=s.useState(!1),[h,L]=s.useState(""),[c,b]=s.useState(1),[w,P]=s.useState(10);s.useEffect(()=>{if(!i){n("/login");return}S()},[]);const S=async()=>{try{a(!0);const t=await B.get("/citizen/my-appointments",{params:{citizenId:i._id,mobileNumber:i.mobileNumber}});t.data.success&&x(t.data.appointments||[])}catch{}finally{a(!1)}},y=l.filter(t=>d==="all"||t.status===d).filter(t=>{if(!h)return!0;const r=h.toLowerCase();return t.tokenId?.toLowerCase().includes(r)||t.purpose?.toLowerCase().includes(r)||t.fullName?.toLowerCase().includes(r)}),p=Math.max(1,Math.ceil(y.length/w)),C=y.slice((c-1)*w,c*w),z=t=>D[t?.toLowerCase()]||D.pending,R=()=>p<=5?Array.from({length:p},(t,r)=>r+1):c<=3?[1,2,3,"...",p]:c>=p-2?[1,"...",p-2,p-1,p]:[1,"...",c-1,c,c+1,"...",p],A=()=>u(null);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
          min-width: 780px;
        }

        /* ── Table header ── */
        .tbl-head {
          display: grid;
          grid-template-columns: ${M};
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
          grid-template-columns: ${M};
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
      `}),e.jsx("div",{className:"ma-root",children:e.jsxs("div",{className:"ma-inner",children:[e.jsxs("div",{className:"ma-header",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"ma-title",children:"My Appointments"}),e.jsxs("p",{className:"ma-sub",children:["Hello,",i?.fullName||`Citizen  ${i?.citizenId||""}`," 👋 — all your appointments are here."]})]}),e.jsxs("div",{className:"ma-actions",children:[e.jsx("button",{className:"ma-icon-btn",title:"Refresh",onClick:S,children:"↻"}),e.jsxs("button",{className:"ma-book-btn",onClick:()=>n("/book-appointment"),children:[e.jsx("span",{style:{fontSize:18,lineHeight:1},children:"+"})," New Appointment"]})]})]}),e.jsxs("div",{className:"filter-search-row",children:[e.jsxs("div",{className:"filter-tabs",children:[e.jsx("span",{className:"filter-label",children:"Status"}),[{key:"all",label:"All"},{key:"pending",label:"Pending"},{key:"approved",label:"Approved"},{key:"rejected",label:"Rejected"},{key:"expired",label:"Expired"}].map(t=>e.jsxs("button",{className:`ftab${d===t.key?" active":""}`,onClick:()=>{j(t.key),I([]),E(!1),b(1)},children:[t.label," (",t.key==="all"?l.length:l.filter(r=>r.status===t.key).length,")"]},t.key))]}),e.jsxs("div",{className:"search-wrap",children:[e.jsx("span",{className:"search-icon",children:"🔍"}),e.jsx("input",{className:"search-input",type:"text",placeholder:"Search appointment",value:h,onChange:t=>{L(t.target.value),b(1)}})]})]}),e.jsxs("div",{className:"table-card",children:[e.jsx("div",{className:"table-scroll-wrapper",children:e.jsxs("div",{className:"table-scroll-inner",children:[e.jsxs("div",{className:"tbl-head",children:[e.jsxs("div",{className:"tbl-head-cell",children:["# TOKEN ID ",e.jsx("span",{className:"sort-icon",children:"⇅"})]}),e.jsx("div",{className:"tbl-head-cell",children:"PURPOSE"}),e.jsxs("div",{className:"tbl-head-cell",children:["DATE ",e.jsx("span",{className:"sort-icon",children:"⇅"})]}),e.jsx("div",{className:"tbl-head-cell",children:"SLOT"}),e.jsx("div",{className:"tbl-head-cell",children:"APPOINTMENT_TIME"}),e.jsxs("div",{className:"tbl-head-cell",children:["STATUS ",e.jsx("span",{className:"sort-icon",children:"⇅"})]}),e.jsx("div",{className:"tbl-head-cell",children:"ACTIONS"})]}),f?e.jsxs("div",{style:{textAlign:"center",padding:"56px 0"},children:[e.jsx("div",{style:{width:34,height:34,border:"3px solid #e2e8f0",borderTopColor:"#16a34a",borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 14px"}}),e.jsx("p",{style:{color:"#94a3b8",fontSize:14},children:"Appointments लोड होत आहेत..."})]}):C.length===0?e.jsxs("div",{className:"empty-box",children:[e.jsx("div",{style:{fontSize:48,marginBottom:14},children:"📅"}),e.jsx("p",{style:{color:"#374151",fontWeight:700,fontSize:16,marginBottom:6},children:d==="all"&&!h?"कोणतेही appointments नाहीत":`No ${d!=="all"?d:""} appointments found`}),e.jsx("p",{style:{color:"#94a3b8",fontSize:14,marginBottom:20},children:d==="all"&&!h?"Book your first appointment to get started.":"Try a different filter or search term."}),d==="all"&&!h&&e.jsx("button",{className:"ma-book-btn",style:{margin:"0 auto",display:"inline-flex"},onClick:()=>n("/book-appointment"),children:"+ Book Appointment"})]}):C.map((t,r)=>{const m=z(t.status),N=k.includes(r),v=t.purpose?t.purpose.length>40?t.purpose.slice(0,40)+"…":t.purpose:"—";return e.jsxs("div",{className:`tbl-row${N?" row-checked":""}`,style:{animationDelay:`${r*40}ms`},onClick:()=>u(t),children:[e.jsx("div",{className:"cell-token",children:t.tokenId||"—"}),e.jsxs("div",{className:"cell-purpose-wrap",children:[e.jsx(T,{name:t.fullName,photo:t.visitorPhoto,size:38}),e.jsxs("div",{className:"cell-purpose-text",children:[e.jsx("div",{className:"purpose-title",children:v}),e.jsx("div",{className:"purpose-sub",children:t.fullName||"नागरिक"})]})]}),e.jsx("div",{className:"cell-date",children:U(t.preferredDate)}),e.jsx("div",{className:"cell-slot",children:t.slotTime||"—"}),e.jsx("div",{className:"cell-slot",children:t.microSlot||"—"}),e.jsx("div",{children:e.jsx("span",{className:"status-badge",style:{background:m.bg,color:m.color,borderColor:m.border},children:m.label})}),e.jsx("div",{onClick:g=>g.stopPropagation(),children:e.jsx(_,{appt:t,onView:u})})]},r)})]})}),!f&&y.length>0&&e.jsxs("div",{className:"tbl-footer",children:[e.jsxs("div",{className:"footer-left",children:[e.jsx("span",{children:"Show"}),e.jsx("select",{className:"page-size-select",value:w,onChange:t=>{P(Number(t.target.value)),b(1)},children:W.map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsxs("span",{children:["of ",e.jsx("strong",{children:y.length})," results"]}),k.length>0&&e.jsxs("span",{style:{color:"#16a34a",fontWeight:700},children:["· ",k.length," selected"]})]}),e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"pg-btn",onClick:()=>b(t=>Math.max(1,t-1)),disabled:c===1,children:e.jsx("span",{className:"pg-arrow",children:"‹"})}),R().map((t,r)=>t==="..."?e.jsx("button",{className:"pg-btn pg-ellipsis",children:"…"},`ell-${r}`):e.jsx("button",{className:`pg-btn${c===t?" active":""}`,onClick:()=>b(t),children:t},t)),e.jsx("button",{className:"pg-btn",onClick:()=>b(t=>Math.min(p,t+1)),disabled:c===p,children:e.jsx("span",{className:"pg-arrow",children:"›"})})]})]})]})]})}),o&&e.jsx("div",{className:"modal-overlay",onClick:A,children:e.jsxs("div",{className:"modal-card",onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:0,fontSize:10,opacity:.6,textTransform:"uppercase",letterSpacing:1},children:"Appointment Details"}),e.jsx("h3",{style:{margin:"4px 0 0",fontSize:19,fontWeight:800,fontFamily:"'Syne',sans-serif"},children:o.tokenId})]}),e.jsx("button",{type:"button",className:"modal-close",onClick:A,children:"✕"})]}),e.jsxs("div",{className:"modal-body",children:[e.jsx("div",{style:{textAlign:"center",marginBottom:20},children:e.jsx(T,{name:o.fullName,photo:o.visitorPhoto,size:80})}),(()=>{const t=z(o.status);return e.jsx("div",{style:{textAlign:"center",marginBottom:16},children:e.jsx("span",{className:"status-badge",style:{background:t.bg,color:t.color,borderColor:t.border,fontSize:13,padding:"6px 20px"},children:t.label})})})(),[["Name",o.fullName],["Mobile",o.mobileNumber],["Email",o.email||"—"],["Address",o.address||"—"],["Date",F(o.preferredDate)],["Slot",o.slotTime],["Purpose",o.purpose],["Visitors",o.numberOfVisitors],["Visited Before",o.visitedBefore?"Yes":"No"],["Ward",o.ward||"—"],["Booked On",$(o.createdAt)]].map(([t,r])=>r?e.jsxs("div",{className:"modal-row",children:[e.jsx("span",{className:"modal-key",children:t}),e.jsx("span",{className:"modal-val",children:r})]},t):null),o.adminNote&&e.jsxs("div",{style:{background:"#fef9c3",border:"1px solid #fde68a",borderRadius:8,padding:"10px 14px",marginTop:12,fontSize:13,color:"#92400e"},children:[e.jsx("strong",{children:"Admin Note:"})," ",o.adminNote]}),o.replyDocument&&e.jsxs("div",{style:{background:"#f0fdf4",border:"1px solid #86efac",borderRadius:8,padding:"10px 14px",marginTop:8,fontSize:13},children:[e.jsx("p",{style:{color:"#166534",fontWeight:700,margin:"0 0 6px"},children:"📎 Document from Admin"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx("button",{onClick:()=>{if(o.replyDocument?.toLowerCase().includes(".pdf")||o.replyDocument?.toLowerCase().includes("inward_pdf")){const r=`https://docs.google.com/gview?url=${encodeURIComponent(o.replyDocument)}&embedded=true`;window.open(r,"_blank")}else window.open(o.replyDocument,"_blank")},style:{color:"#16a34a",fontWeight:600,fontSize:13,background:"none",border:"none",cursor:"pointer",textDecoration:"underline",padding:0},children:"📄 View Document"}),e.jsx("button",{onClick:async()=>{try{const r=await(await fetch(o.replyDocument)).blob(),m=o.replyDocument?.toLowerCase().includes(".pdf")||o.replyDocument?.toLowerCase().includes("inward_pdf"),N=new Blob([r],{type:m?"application/pdf":r.type}),v=window.URL.createObjectURL(N),g=document.createElement("a");g.href=v,g.download=m?"document.pdf":"document",document.body.appendChild(g),g.click(),document.body.removeChild(g),window.URL.revokeObjectURL(v)}catch(t){console.error("Download failed",t)}},style:{color:"#64748b",background:"none",border:"none",cursor:"pointer",fontSize:16},title:"Download",children:"⬇"})]})]}),o.qrCode&&e.jsxs("div",{style:{textAlign:"center",marginTop:20,paddingTop:16,borderTop:"1px solid #f1f5f9"},children:[e.jsx("p",{style:{fontSize:12,color:"#94a3b8",marginBottom:8},children:"QR Code — भेटीच्या दिवशी दाखवा"}),e.jsx("img",{src:o.qrCode,alt:"QR",style:{width:130,height:130}})]})]})]})})]})}export{q as default};
