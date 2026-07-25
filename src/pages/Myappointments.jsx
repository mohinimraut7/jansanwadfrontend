import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import citizenAxios from "../services/citizenAxios";
import getPhotoUrl from "../services/getPhotoUrl";

function formatDate(d) {
  if (!d) return "—";
  return new Date(d + "T00:00:00").toLocaleDateString("en-IN", { weekday:"long", day:"numeric", month:"long", year:"numeric" });
}
function formatShort(d) {
  if (!d) return "—";
  return new Date(d + "T00:00:00").toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" });
}
function formatCreated(d) {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric", hour:"2-digit", minute:"2-digit" });
}

const STATUS_CFG = {
  pending:  { bg:"#fef9c3", color:"#92400e", border:"#fde68a",  label:"⏳ Pending"  },
  approved: { bg:"#dcfce7", color:"#166534", border:"#86efac",  label:"✅ Approved" },
  rejected: { bg:"#fee2e2", color:"#991b1b", border:"#fca5a5",  label:"❌ Rejected" },
  expired:  { bg:"#f3f4f6", color:"#6b7280", border:"#e5e7eb",  label:"🕰️ Expired"  },
};

// function Avatar({ name, photo, size = 40 }) {
//    const [imgError, setImgError] = useState(false); // ✅ ADD
//   const initials = name ? name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0,2) : "?";
//   const colors = ["#0d9488","#0891b2","#7c3aed","#db2777","#ea580c","#16a34a"];
//   const colorIdx = name ? name.charCodeAt(0) % colors.length : 0;
//   if (photo) {
//     return (
//       <img
//         src={photo.startsWith("http") ? photo : `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/${photo}`}
//         alt={name}
//         style={{ width:size, height:size, borderRadius:"50%", objectFit:"cover", border:"2px solid #e2e8f0", flexShrink:0 }}
//       />
//     );
//   }
//   return (
//     <div style={{
//       width:size, height:size, borderRadius:"50%", background:colors[colorIdx],
//       color:"#fff", display:"flex", alignItems:"center", justifyContent:"center",
//       fontSize: size * 0.35, fontWeight:700, fontFamily:"'DM Sans',sans-serif",
//       flexShrink:0, border:"2px solid rgba(255,255,255,0.3)"
//     }}>{initials}</div>
//   );
// }


function Avatar({ name, photo, size = 40 }) {
  const [imgError, setImgError] = useState(false); // ✅ ADD

  const initials = name ? name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0,2) : "?";
  const colors = ["#0d9488","#0891b2","#7c3aed","#db2777","#ea580c","#16a34a"];
  const colorIdx = name ? name.charCodeAt(0) % colors.length : 0;

  // const photoUrl = photo
  //   ? photo.startsWith("http")
  //     ? photo
  //     : `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/${photo}`
  //   : null;

  const photoUrl = photo
    ? photo.startsWith("http")
      ? photo.replace("http://localhost:5000", import.meta.env.VITE_FILE_BASE_URL)
      : `${import.meta.env.VITE_FILE_BASE_URL}/${photo}`
    : null;

  if (photoUrl && !imgError) { // ✅ check imgError
    return (
      <img
        src={photoUrl}
        alt={name}
        onError={() => setImgError(true)} // ✅ fallback to initials on 404
        style={{ width:size, height:size, borderRadius:"50%", objectFit:"cover", border:"2px solid #e2e8f0", flexShrink:0 }}
      />
    );
  }

  return (
    <div style={{
      width:size, height:size, borderRadius:"50%", background:colors[colorIdx],
      color:"#fff", display:"flex", alignItems:"center", justifyContent:"center",
      fontSize: size * 0.35, fontWeight:700, fontFamily:"'DM Sans',sans-serif",
      flexShrink:0, border:"2px solid rgba(255,255,255,0.3)"
    }}>{initials}</div>
  );
}

function ActionMenu({ appt, onView }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return (
    <div ref={ref} style={{ position:"relative", display:"flex", justifyContent:"center" }}>
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(o => !o); }}
        style={{
          background:"none", border:"1px solid #e2e8f0", cursor:"pointer",
          padding:"4px 8px", borderRadius:6, color:"#6b7280", fontSize:18,
          lineHeight:1, display:"flex", alignItems:"center", transition:"all .15s"
        }}
        onMouseEnter={e => { e.target.style.borderColor="#16a34a"; e.target.style.color="#16a34a"; }}
        onMouseLeave={e => { e.target.style.borderColor="#e2e8f0"; e.target.style.color="#6b7280"; }}
        title="Actions"
      >⋮</button>
      {open && (
        <div style={{
          position:"absolute", right:0, top:"110%", background:"#fff",
          border:"1px solid #e5e7eb", borderRadius:10,
          boxShadow:"0 8px 24px rgba(0,0,0,0.12)", zIndex:100,
          minWidth:150, overflow:"hidden"
        }}>
          <button
            onClick={(e) => { e.stopPropagation(); onView(appt); setOpen(false); }}
            style={{
              display:"block", width:"100%", padding:"10px 16px",
              background:"none", border:"none", textAlign:"left",
              cursor:"pointer", fontSize:13, color:"#374151",
              fontFamily:"'DM Sans',sans-serif", fontWeight:500
            }}
            onMouseEnter={e => e.target.style.background="#f9fafb"}
            onMouseLeave={e => e.target.style.background="none"}
          >👁 View Details</button>
        </div>
      )}
    </div>
  );
}

const PAGE_SIZE_OPTIONS = [10, 25, 50];

const COL_TEMPLATE = "160px 1fr 130px 200px 150px 60px";

export default function MyAppointments() {
  const navigate = useNavigate();
  const citizen = (() => { try { return JSON.parse(localStorage.getItem("citizenUser")||"null"); } catch { return null; } })();

  const [appts, setAppts]         = useState([]);
  const [loading, setLoading]     = useState(true);
  const [selected, setSelected]   = useState(null);
  const [filter, setFilter]       = useState("all");
  const [checked, setChecked]     = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage]           = useState(1);
  const [pageSize, setPageSize]   = useState(10);

  useEffect(() => {
    if (!citizen) { navigate("/login"); return; }
    fetchAppts();
  }, []);

  const fetchAppts = async () => {
    try {
      setLoading(true);
      const res = await citizenAxios.get("/citizen/my-appointments", {
        params: { citizenId: citizen._id, mobileNumber: citizen.mobileNumber },
      });
      if (res.data.success) setAppts(res.data.appointments || []);
    } catch (e) { /* silent */ }
    finally { setLoading(false); }
  };

  const filtered = appts
    .filter(a => filter === "all" || a.status === filter)
    .filter(a => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        a.tokenId?.toLowerCase().includes(q) ||
        a.purpose?.toLowerCase().includes(q) ||
        a.fullName?.toLowerCase().includes(q)
      );
    });

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paginated = filtered.slice((page-1)*pageSize, page*pageSize);

  const statusCfg = (s) => STATUS_CFG[s?.toLowerCase()] || STATUS_CFG.pending;

  const toggleAll = () => {
    if (allChecked) { setChecked([]); setAllChecked(false); }
    else { setChecked(paginated.map((_, i) => i)); setAllChecked(true); }
  };
  const toggleOne = (i) => {
    setChecked(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  const getPaginationPages = () => {
    if (totalPages <= 5) return Array.from({length:totalPages},(_,i)=>i+1);
    if (page <= 3) return [1,2,3,"...",totalPages];
    if (page >= totalPages-2) return [1,"...",totalPages-2,totalPages-1,totalPages];
    return [1,"...",page-1,page,page+1,"...",totalPages];
  };

  /* ── Close modal handler ── */
  const closeModal = () => setSelected(null);

  return (
    <>
      <style>{`
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
          grid-template-columns: ${COL_TEMPLATE};
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
          grid-template-columns: ${COL_TEMPLATE};
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
      `}</style>

      <div className="ma-root">
        <div className="ma-inner">

          {/* ── Header ── */}
          <div className="ma-header">
            <div>
              <h1 className="ma-title">My Appointments</h1>
              <p className="ma-sub">Hello,{citizen?.fullName || `Citizen  ${citizen?.citizenId || ""}`} 👋 — all your appointments are here.</p>
            </div>
            <div className="ma-actions">
              <button className="ma-icon-btn" title="Refresh" onClick={fetchAppts}>↻</button>
              <button className="ma-book-btn" onClick={() => navigate("/book-appointment")}>
                <span style={{ fontSize:18, lineHeight:1 }}>+</span> New Appointment
              </button>
            </div>
          </div>

          {/* ── Filter + Search row ── */}
          <div className="filter-search-row">
            <div className="filter-tabs">
              <span className="filter-label">Status</span>
              {[
                { key:"all",      label:"All"      },
                { key:"pending",  label:"Pending"  },
                { key:"approved", label:"Approved" },
                { key:"rejected", label:"Rejected" },
                { key:"expired",  label:"Expired"  },
              ].map(t => (
                <button
                  key={t.key}
                  className={`ftab${filter===t.key?" active":""}`}
                  onClick={() => { setFilter(t.key); setChecked([]); setAllChecked(false); setPage(1); }}
                >
                  {t.label} ({t.key==="all" ? appts.length : appts.filter(a=>a.status===t.key).length})
                </button>
              ))}
            </div>

            <div className="search-wrap">
              <span className="search-icon">🔍</span>
              <input
                className="search-input"
                type="text"
                placeholder="Search appointment"
                value={searchQuery}
                onChange={e => { setSearchQuery(e.target.value); setPage(1); }}
              />
            </div>
          </div>

          {/* ── Table ── */}
          <div className="table-card">

            {/* FIX: Horizontal scroll wrapper for small devices */}
            <div className="table-scroll-wrapper">
              <div className="table-scroll-inner">

                {/* Header */}
                <div className="tbl-head">
                  <div className="tbl-head-cell"># TOKEN ID <span className="sort-icon">⇅</span></div>
                  <div className="tbl-head-cell">PURPOSE</div>
                  <div className="tbl-head-cell">DATE <span className="sort-icon">⇅</span></div>
                  <div className="tbl-head-cell">SLOT</div>
                   <div className="tbl-head-cell">APPOINTMENT_TIME</div>
                  <div className="tbl-head-cell">STATUS <span className="sort-icon">⇅</span></div>
                  <div className="tbl-head-cell">ACTIONS</div>
                </div>

                {/* Body */}
                {loading ? (
                  <div style={{ textAlign:"center", padding:"56px 0" }}>
                    <div style={{
                      width:34, height:34,
                      border:"3px solid #e2e8f0", borderTopColor:"#16a34a",
                      borderRadius:"50%", animation:"spin .8s linear infinite",
                      margin:"0 auto 14px"
                    }} />
                    <p style={{ color:"#94a3b8", fontSize:14 }}>Appointments लोड होत आहेत...</p>
                  </div>
                ) : paginated.length === 0 ? (
                  <div className="empty-box">
                    <div style={{ fontSize:48, marginBottom:14 }}>📅</div>
                    <p style={{ color:"#374151", fontWeight:700, fontSize:16, marginBottom:6 }}>
                      {filter==="all" && !searchQuery ? "कोणतेही appointments नाहीत" : `No ${filter !== "all" ? filter : ""} appointments found`}
                    </p>
                    <p style={{ color:"#94a3b8", fontSize:14, marginBottom:20 }}>
                      {filter==="all" && !searchQuery
                        ? "Book your first appointment to get started."
                        : "Try a different filter or search term."}
                    </p>
                    {filter==="all" && !searchQuery && (
                      <button className="ma-book-btn" style={{ margin:"0 auto", display:"inline-flex" }} onClick={() => navigate("/book-appointment")}>
                        + Book Appointment
                      </button>
                    )}
                  </div>
                ) : (
                  paginated.map((a, i) => {
                    const sc = statusCfg(a.status);
                    const isChecked = checked.includes(i);
                    const purposeTitle = a.purpose
                      ? (a.purpose.length > 40 ? a.purpose.slice(0,40)+"…" : a.purpose)
                      : "—";
                    return (
                      <div
                        key={i}
                        className={`tbl-row${isChecked ? " row-checked" : ""}`}
                        style={{ animationDelay:`${i*40}ms` }}
                        onClick={() => setSelected(a)}
                      >
                        <div className="cell-token">{a.tokenId || "—"}</div>

                        <div className="cell-purpose-wrap">
                          <Avatar name={a.fullName} photo={a.visitorPhoto} size={38} />
                          <div className="cell-purpose-text">
                            <div className="purpose-title">{purposeTitle}</div>
                            <div className="purpose-sub">{a.fullName || "नागरिक"}</div>
                          </div>
                        </div>

                        <div className="cell-date">{formatShort(a.preferredDate)}</div>
                        <div className="cell-slot">{a.slotTime || "—"}</div>
                          <div className="cell-slot">{a.microSlot || "—"}</div>

                        <div>
                          <span
                            className="status-badge"
                            style={{ background:sc.bg, color:sc.color, borderColor:sc.border }}
                          >{sc.label}</span>
                        </div>

                        <div onClick={e => e.stopPropagation()}>
                          <ActionMenu appt={a} onView={setSelected} />
                        </div>
                      </div>
                    );
                  })
                )}

              </div>{/* end table-scroll-inner */}
            </div>{/* end table-scroll-wrapper */}

            {/* Footer — outside scroll wrapper so it always spans full card width */}
            {!loading && filtered.length > 0 && (
              <div className="tbl-footer">
                <div className="footer-left">
                  <span>Show</span>
                  <select
                    className="page-size-select"
                    value={pageSize}
                    onChange={e => { setPageSize(Number(e.target.value)); setPage(1); }}
                  >
                    {PAGE_SIZE_OPTIONS.map(n => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                  <span>of <strong>{filtered.length}</strong> results</span>
                  {checked.length > 0 && (
                    <span style={{ color:"#16a34a", fontWeight:700 }}>
                      · {checked.length} selected
                    </span>
                  )}
                </div>

                <div className="pagination">
                  <button
                    className="pg-btn"
                    onClick={() => setPage(p => Math.max(1, p-1))}
                    disabled={page===1}
                  ><span className="pg-arrow">‹</span></button>

                  {getPaginationPages().map((p, idx) =>
                    p === "..." ? (
                      <button key={`ell-${idx}`} className="pg-btn pg-ellipsis">…</button>
                    ) : (
                      <button
                        key={p}
                        className={`pg-btn${page===p?" active":""}`}
                        onClick={() => setPage(p)}
                      >{p}</button>
                    )
                  )}

                  <button
                    className="pg-btn"
                    onClick={() => setPage(p => Math.min(totalPages, p+1))}
                    disabled={page===totalPages}
                  ><span className="pg-arrow">›</span></button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ── Detail Modal ── */}
      {selected && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <p style={{ margin:0, fontSize:10, opacity:.6, textTransform:"uppercase", letterSpacing:1 }}>Appointment Details</p>
                <h3 style={{ margin:"4px 0 0", fontSize:19, fontWeight:800, fontFamily:"'Syne',sans-serif" }}>{selected.tokenId}</h3>
              </div>
              {/* FIX: type="button" prevents any accidental form submission; closeModal is called directly */}
              <button type="button" className="modal-close" onClick={closeModal}>✕</button>
            </div>
            <div className="modal-body">
              <div style={{ textAlign:"center", marginBottom:20 }}>
                <Avatar name={selected.fullName} photo={selected.visitorPhoto} size={80} />
              </div>

              {(() => { const sc = statusCfg(selected.status); return (
                <div style={{ textAlign:"center", marginBottom:16 }}>
                  <span className="status-badge" style={{ background:sc.bg, color:sc.color, borderColor:sc.border, fontSize:13, padding:"6px 20px" }}>
                    {sc.label}
                  </span>
                </div>
              );})()}

              {[
                ["Name",           selected.fullName],
                ["Mobile",         selected.mobileNumber],
                ["Email",          selected.email || "—"],
                ["Address",        selected.address || "—"],
                ["Date",           formatDate(selected.preferredDate)],
                ["Slot",           selected.slotTime],
                ["Purpose",        selected.purpose],
                ["Visitors",       selected.numberOfVisitors],
                ["Visited Before", selected.visitedBefore ? "Yes" : "No"],
                ["Ward",           selected.ward || "—"],
                ["Booked On",      formatCreated(selected.createdAt)],
              ].map(([k,v]) => v ? (
                <div key={k} className="modal-row">
                  <span className="modal-key">{k}</span>
                  <span className="modal-val">{v}</span>
                </div>
              ) : null)}

              {selected.adminNote && (
                <div style={{ background:"#fef9c3", border:"1px solid #fde68a", borderRadius:8, padding:"10px 14px", marginTop:12, fontSize:13, color:"#92400e" }}>
                  <strong>Admin Note:</strong> {selected.adminNote}
                </div>
              )}

       {selected.replyDocument && (
  <div style={{ background:"#f0fdf4", border:"1px solid #86efac", borderRadius:8, padding:"10px 14px", marginTop:8, fontSize:13 }}>
    <p style={{ color:"#166534", fontWeight:700, margin:"0 0 6px" }}>📎 Document from Admin</p>
    <div style={{ display:"flex", alignItems:"center", gap:10 }}>

      {/* ✅ Preview — Google Viewer for PDF, direct for images */}
      <button
        onClick={() => {
          const isPdf = selected.replyDocument?.toLowerCase().includes(".pdf") || selected.replyDocument?.toLowerCase().includes("inward_pdf");
          if (isPdf) {
            const previewUrl = `https://docs.google.com/gview?url=${encodeURIComponent(selected.replyDocument)}&embedded=true`;
            window.open(previewUrl, "_blank");
          } else {
            window.open(selected.replyDocument, "_blank");
          }
        }}
        style={{ color:"#16a34a", fontWeight:600, fontSize:13, background:"none", border:"none", cursor:"pointer", textDecoration:"underline", padding:0 }}
      >
        📄 View Document
      </button>

      {/* ✅ Download */}
      <button
        onClick={async () => {
          try {
            const response = await fetch(selected.replyDocument);
            const fileBlob = await response.blob();
            const isPdf = selected.replyDocument?.toLowerCase().includes(".pdf") || selected.replyDocument?.toLowerCase().includes("inward_pdf");
            const blob = new Blob([fileBlob], { type: isPdf ? "application/pdf" : fileBlob.type });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = isPdf ? "document.pdf" : "document";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
          } catch (err) {
            console.error("Download failed", err);
          }
        }}
        style={{ color:"#64748b", background:"none", border:"none", cursor:"pointer", fontSize:16 }}
        title="Download"
      >
        ⬇
      </button>

    </div>
  </div>
)}


              {selected.qrCode && (
                <div style={{ textAlign:"center", marginTop:20, paddingTop:16, borderTop:"1px solid #f1f5f9" }}>
                  <p style={{ fontSize:12, color:"#94a3b8", marginBottom:8 }}>QR Code — भेटीच्या दिवशी दाखवा</p>
                  <img src={selected.qrCode} alt="QR" style={{ width:130, height:130 }} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}