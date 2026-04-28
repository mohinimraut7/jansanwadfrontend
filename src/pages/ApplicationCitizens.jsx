import React, { useState, useEffect, useRef } from "react";
import citizenAxios from "../services/citizenAxios";

// ── Helpers ──────────────────────────────────────────────────────────────────
function formatShort(d) {
  if (!d) return "—";
  return new Date(d + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric",
  });
}
function formatCreated(d) {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}
function formatDate(d) {
  if (!d) return "—";
  return new Date(d + "T00:00:00").toLocaleDateString("en-IN", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });
}
function initials(name) {
  if (!name) return "?";
  return name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
}
const AVATAR_COLORS = ["#6366f1","#0ea5e9","#f59e0b","#10b981","#ef4444","#8b5cf6","#ec4899","#14b8a6"];
function avatarColor(name) {
  let h = 0;
  for (let i = 0; i < (name||"").length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}

const STATUS_CFG = {
  pending:      { bg:"#fff8e1", color:"#b26a00", border:"#ffe082", dot:"#f59e0b", label:"Pending"     },
  approved:     { bg:"#d4edda", color:"#1a7a4a", border:"#a8d5b5", dot:"#1a7a4a", label:"Approved"    },
  rejected:     { bg:"#fdecea", color:"#c0392b", border:"#f5c6cb", dot:"#c0392b", label:"Rejected"    },
  "in progress":{ bg:"#e8f0fe", color:"#1a4a8a", border:"#93c5fd", dot:"#3b82f6", label:"In Progress" },
  resolved:     { bg:"#e8f5ee", color:"#1a4a2e", border:"#a8d5b5", dot:"#22c55e", label:"Resolved"    },
  expired:      { bg:"#f3f4f6", color:"#6b7280", border:"#e5e7eb", dot:"#9ca3af", label:"Expired"     },
};
function sc(status) {
  return STATUS_CFG[(status||"pending").toLowerCase()] || STATUS_CFG.pending;
}

// ── Reply / Action Modal ──────────────────────────────────────────────────────
function ActionModal({ appt, onClose, onRefresh, showToast }) {
  const [note, setNote]             = useState(appt.adminNote || "");
  const [status, setStatus]         = useState(appt.status || "pending");
  const [saving, setSaving]         = useState(false);
  const [replyDocument, setReplyDocument] = useState(null);

  // const handleSave = async () => {
  //   try {
  //     setSaving(true);
  //     const formData = new FormData();
  //     formData.append("status", status);
  //     formData.append("adminNote", note);
  //     if (replyDocument) formData.append("replyDocument", replyDocument);
  //     await citizenAxios.patch(`/citizen/admin/update-status/${appt._id}`, formData, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });
  //     showToast(`Status updated to "${status}" & citizen notified!`, "success");
  //     onRefresh();
  //     onClose();
  //   } catch (e) {
  //     showToast(e?.response?.data?.message || "Update failed", "error");
  //   } finally { setSaving(false); }
  // };

  
  const handleSave = async () => {
    try {
      setSaving(true);
      const formData = new FormData();
      formData.append("status", status);
      formData.append("adminNote", note);
      if (replyDocument) formData.append("replyDocument", replyDocument);
      
      await citizenAxios.patch(`/citizen/admin/update-status/${appt._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // ── WhatsApp Notification to Citizen ──────────────────────────
      const mobile = appt.mobileNumber?.replace(/\D/g, "").slice(-10);
      const platform="Jan Samvaad";
      const corporation="VVCMC";
      const sender="VVCMCJS";
      const fnamecorporation="Vasai Virar City Municipal Corporation";
      const fullName=appt.fullName;
      const apptCitizenStart=appt.microStart;
        const apptCitizenEnd=appt.microEnd;
       const tokID = appt.tokenId;

//       const statusMessage = {
//   pending: `Pending — Awaiting Mayor's Approval`,
//   approved: `Approved by Respected Mayor Ajiv Patil Sir`,
//   rejected: `Rejected by Admin`,
//   cancelled: `Cancelled`
// }[appt.status] || appt.status;



const statusMessage = {
  pending:   `Pending — Awaiting Mayor's Approval`,
  approved:  `Approved by Respected Mayor Ajiv Patil Sir`,
  rejected:  `Rejected by Respected Mayor Ajiv Patil Sir`,
  cancelled: `Cancelled`
}[status] || status; // ✅ 'appt.status' नाही — 'status' वापरा (नवीन updated status)





    
      if (mobile) {
        const officerName="Repected Mayor Ajiv Patil Sir"
          console.log("mobile>>>>",mobile,platform,corporation,officerName,sender,appt.preferredDate,formatShort(appt.preferredDate),appt.microSlot,appt.slotTime,appt.tokenId)
        // const whatsupText = `Dear ${appt.fullName}, Your appointment with ${officerName} at ${fnamecorporation} has been successfully booked. Date: ${formatShort(appt.preferredDate)}, Time Slot: ${appt.microSlot || appt.slotTime}, Token No: ${appt.tokenId}. - ${corporation} ${platform}`;
        
        // const waApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=67e12059b220a&route=&sender=${sender}&mobileno=${mobile}&text=${encodeURIComponent(whatsupText)}`;


//   const whatsupText = `Dear ${appt.fullName}, Your appointment with Repected Mayor Ajiv Patil Sir at Vasai Virar City Municipal Corporation has been successfully booked.
// Appointment is ${statusMessage}.${formatShort(appt.preferredDate)}, Time Slot: ${appt.microSlot || appt.slotTime}, Token No: ${appt.tokenId}. - VVCMC Jan Samvaad`;
        
// const waApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=67e12059b220a&route=&sender=VVCMCJS&mobileno=${mobile}&text=${encodeURIComponent(whatsupText)}`;
        
//         fetch(waApiUrl, { method: "GET", mode: "no-cors" }).catch(() => {});




// const whatsupText = `Dear ${appt.fullName}, Your appointment with Respected Mayor Ajiv Patil Sir at Vasai Virar City Municipal Corporation has been updated. Appointment Status: ${statusMessage}. Date: ${formatShort(appt.preferredDate)}, Time Slot: ${appt.microSlot || appt.slotTime}, Token No: ${appt.tokenId}. Please carry this Token No on your visit day. VVCMC Jan Samvaad`;

// const waApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=67e12059b220a&route=&sender=VVCMCJS&mobileno=${mobile}&text=${encodeURIComponent(whatsupText)}`;

const smsText =`Dear ${appt.fullName}, Your appointment with Respected Mayor Ajiv Patil Sir at Vasai Virar City Municipal Corporation has been updated. Appointment Status: ${statusMessage} Date: ${formatShort(appt.preferredDate)} Time Slot: ${apptCitizenStart} - ${apptCitizenEnd} Token No: ${tokID} Please carry this Token No on your visit day. SAAVI INFINET` 
const waApiUrl = `https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379326&number=${mobile}&message=${encodeURIComponent(smsText)}`;

fetch(waApiUrl, { method: "GET", mode: "no-cors" }).catch(() => {});
      }
      // ─────────────────────────────────────────────────────────────

      showToast(`Status updated to "${status}" & citizen notified!`, "success");
      onRefresh();
      onClose();
    } catch (e) {
      showToast(e?.response?.data?.message || "Update failed", "error");
    } finally { setSaving(false); }
  };
  
  
  
  const statusCfg = sc(status);

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1000,
      display: "flex", alignItems: "center", justifyContent: "center", padding: 16
    }} onClick={onClose}>
      <div style={{
        background: "#fff", borderRadius: 16, width: "100%", maxWidth: 560,
        maxHeight: "92vh", overflowY: "auto",
        boxShadow: "0 8px 48px rgba(0,0,0,0.2)",
        fontFamily: "'Segoe UI', sans-serif"
      }} onClick={e => e.stopPropagation()}>

        {/* Modal Header — matches Availability modal style */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 28px", borderBottom: "2px solid #d4edda",
          background: "#f0f7f2", borderRadius: "16px 16px 0 0"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 44, height: 44, borderRadius: "50%",
              background: avatarColor(appt.fullName),
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 800, fontSize: 16
            }}>
              {initials(appt.fullName)}
            </div>
            <div>
              <p style={{ margin: 0, fontSize: 11, color: "#5a7a6a", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Application Details</p>
              <h3 style={{ margin: "3px 0 0", fontSize: 18, fontWeight: 700, color: "#1a4a2e" }}>
                {appt.tokenId || appt._id?.slice(-8)}
              </h3>
            </div>
          </div>
          <button onClick={onClose} style={{
            background: "#e8f5ee", border: "none", borderRadius: 8,
            width: 36, height: 36, cursor: "pointer", fontSize: 18, color: "#1a4a2e"
          }}>✕</button>
        </div>

        <div style={{ padding: "22px 28px" }}>
          {/* Visitor photo */}
          {appt.visitorPhoto && (
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              <img
                src={appt.visitorPhoto.startsWith("http") ? appt.visitorPhoto : `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/${appt.visitorPhoto}`}
                alt="visitor"
                style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover", border: "3px solid #1a7a4a" }}
              />
            </div>
          )}

          {/* Info rows */}
          <div style={{ border: "1.5px solid #d4edda", borderRadius: 10, overflow: "hidden", marginBottom: 16 }}>
            {[
              ["Applicant",      appt.fullName],
              ["Mobile",         appt.mobileNumber],
              ["Email",          appt.email || "—"],
              ["Ward",           appt.ward || "—"],
              ["Address",        appt.address || "—"],
              ["Preferred Date", formatDate(appt.preferredDate)],
              ["Time Slot",      appt.slotTime || "—"],
              ["Visitors",       appt.numberOfVisitors],
              ["Visited Before", appt.visitedBefore ? "Yes" : "No"],
              ["Purpose",        appt.purpose],
              ["Submitted On",   formatCreated(appt.createdAt)],
            ].filter(([,v]) => v).map(([k, v]) => (
              <div key={k} style={{
                display: "flex", justifyContent: "space-between",
                padding: "9px 14px", borderBottom: "1px solid #eef4ee", fontSize: 13
              }}>
                <span style={{ color: "#5a7a6a", fontWeight: 600, flexShrink: 0, width: 130 }}>{k}</span>
                <span style={{ color: "#1a4a2e", fontWeight: 700, textAlign: "right", wordBreak: "break-word" }}>{v}</span>
              </div>
            ))}
          </div>

          {/* QR Code */}
          {appt.qrCode && (
            <div style={{ textAlign: "center", padding: "12px 0 8px", borderTop: "1px solid #eef4ee", marginBottom: 12 }}>
              <p style={{ fontSize: 11, color: "#5a7a6a", marginBottom: 6, fontWeight: 600 }}>QR Code</p>
              <img src={appt.qrCode} alt="QR" style={{ width: 110, height: 110 }} />
            </div>
          )}

          {/* Status selector */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: "#1a4a2e", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.4 }}>
              Update Status
            </label>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["pending","approved","rejected"].map(s => {
                const cfg = sc(s);
                const active = status === s;
                return (
                  <button key={s} onClick={() => setStatus(s)} style={{
                    padding: "6px 16px", borderRadius: 20,
                    border: `1.5px solid ${active ? cfg.border : "#c8e0cc"}`,
                    background: active ? cfg.bg : "#f8fdf8",
                    color: active ? cfg.color : "#5a7a6a",
                    fontWeight: 700, fontSize: 12, cursor: "pointer", transition: "all .15s"
                  }}>
                    <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: active ? cfg.dot : "#a8c8b0", marginRight: 5, verticalAlign: "middle" }} />
                    {cfg.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Admin note */}
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: "#1a4a2e", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.4 }}>
              Reply / Note to Citizen
            </label>
            <textarea
              value={note}
              onChange={e => setNote(e.target.value)}
              placeholder="Write a note or reply that will be sent to the citizen as acknowledgement..."
              rows={4}
              style={{
                width: "100%", padding: "10px 14px", fontSize: 13,
                border: "1.5px solid #c8e0cc", borderRadius: 8, outline: "none",
                fontFamily: "'Segoe UI', sans-serif", resize: "vertical",
                boxSizing: "border-box", color: "#1a4a2e", background: "#f8fdf8", transition: "border-color .15s"
              }}
              onFocus={e => e.target.style.borderColor = "#1a7a4a"}
              onBlur={e => e.target.style.borderColor = "#c8e0cc"}
            />
          </div>

          {/* File upload */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: "#1a4a2e", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.4 }}>
              Attach Reply Document
            </label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.webp"
              onChange={(e) => setReplyDocument(e.target.files[0])}
              style={{
                border: "1.5px solid #c8e0cc", borderRadius: 8, padding: "8px 12px",
                fontSize: 13, color: "#1a4a2e", background: "#f8fdf8", width: "100%", boxSizing: "border-box"
              }}
            />
          </div>

          {/* Info note */}
          <div style={{
            background: "#e8f5ee", border: "1.5px solid #a8d5b5", borderRadius: 8,
            padding: "10px 14px", marginBottom: 16, fontSize: 12, color: "#1a4a2e"
          }}>
            ℹ️ Saving will update the citizen's application status and send an acknowledgement notification automatically.
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={onClose} style={{
              flex: 1, background: "#f0f4f0", border: "none", borderRadius: 8,
              padding: "12px 0", fontWeight: 600, cursor: "pointer", color: "#1a4a2e", fontSize: 14
            }}>Cancel</button>
            <button onClick={handleSave} disabled={saving} style={{
              flex: 2, background: saving ? "#888" : "#1a7a4a", color: "#fff",
              border: "none", borderRadius: 8, padding: "12px 0",
              fontWeight: 700, cursor: saving ? "not-allowed" : "pointer", fontSize: 14,
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8
            }}>
              {saving
                ? <><span style={{ width: 13, height: 13, border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin .7s linear infinite", display: "inline-block" }} /> Saving...</>
                : "✔ Save & Notify Citizen"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function ApplicationCitizens() {
  const [apps, setApps]         = useState([]);
  const [loading, setLoading]   = useState(true);
  const [search, setSearch]     = useState("");
  const [filter, setFilter]     = useState("all");
  const [selected, setSelected] = useState(null);
  const [toast, setToast]       = useState(null);
  const [checked, setChecked]   = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const fetchApps = async () => {
    try {
      setLoading(true);
      const res = await citizenAxios.get("/citizen/admin/all-appointments");
      if (res.data.success) setApps(res.data.appointments || []);
    } catch (e) { /* silent */ }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchApps(); }, []);

  const counts = {
    all:           apps.length,
    pending:       apps.filter(a => a.status?.toLowerCase() === "pending").length,
    "in progress": apps.filter(a => a.status?.toLowerCase() === "in progress").length,
    approved:      apps.filter(a => a.status?.toLowerCase() === "approved").length,
    rejected:      apps.filter(a => a.status?.toLowerCase() === "rejected").length,
    resolved:      apps.filter(a => a.status?.toLowerCase() === "resolved").length,
  };

  const filtered = apps.filter(a => {
    const matchFilter = filter === "all" || a.status?.toLowerCase() === filter;
    const q = search.toLowerCase();
    const matchSearch = !q ||
      a.fullName?.toLowerCase().includes(q) ||
      a.tokenId?.toLowerCase().includes(q) ||
      a.purpose?.toLowerCase().includes(q) ||
      a.mobileNumber?.includes(q) ||
      a.ward?.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  const toggleAll = () => {
    if (allChecked) { setChecked([]); setAllChecked(false); }
    else { setChecked(filtered.map((_, i) => i)); setAllChecked(true); }
  };
  const toggleOne = (i) => setChecked(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#f0f4f0", minHeight: "100vh", padding: "24px" }}>

      {/* Toast */}
      {toast && (
        <div style={{
          position: "fixed", top: 20, right: 20, zIndex: 9999,
          background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
          color: "#fff", padding: "12px 20px", borderRadius: 8,
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)", fontSize: 14, fontWeight: 600,
          animation: "fadeIn 0.3s ease"
        }}>{toast.msg}</div>
      )}

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: "#1a4a2e", display: "flex", alignItems: "center", gap: 10 }}>
            All Applications
            <span style={{ background: "#d4edda", color: "#1a7a4a", borderRadius: 20, padding: "2px 10px", fontSize: 13, fontWeight: 700 }}>{apps.length}</span>
          </h1>
          <p style={{ margin: "4px 0 0", color: "#5a7a6a", fontSize: 14 }}>CitizenBridge — Inward Records · All citizen appointment requests</p>
        </div>
        <button onClick={fetchApps} style={{
          background: "#fff", color: "#1a7a4a", border: "2px solid #1a7a4a",
          borderRadius: 8, padding: "10px 20px", fontWeight: 600, fontSize: 14, cursor: "pointer",
          display: "flex", alignItems: "center", gap: 7
        }}>↻ Refresh</button>
      </div>

      {/* Search */}
      <div style={{ position: "relative", marginBottom: 16 }}>
        <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 15, color: "#5a7a6a" }}>🔍</span>
        <input
          type="text"
          placeholder="Search by name, token ID, mobile, purpose, ward..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: "100%", padding: "10px 14px 10px 40px", fontSize: 13,
            border: "1.5px solid #c8e0cc", borderRadius: 8, outline: "none",
            fontFamily: "'Segoe UI', sans-serif", background: "#fff", color: "#1a4a2e",
            boxSizing: "border-box"
          }}
        />
      </div>

      {/* Filter tabs */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
        {[
          { key: "all",          label: "All",         count: counts.all },
          { key: "pending",      label: "Pending",     count: counts.pending },
          { key: "in progress",  label: "In Progress", count: counts["in progress"] },
          { key: "approved",     label: "Approved",    count: counts.approved },
          { key: "resolved",     label: "Resolved",    count: counts.resolved },
          { key: "rejected",     label: "Rejected",    count: counts.rejected },
        ].map(t => (
          <button
            key={t.key}
            onClick={() => { setFilter(t.key); setChecked([]); setAllChecked(false); }}
            style={{
              padding: "7px 18px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer",
              border: filter === t.key ? "none" : "1.5px solid #c8e0cc",
              background: filter === t.key ? "#1a7a4a" : "#fff",
              color: filter === t.key ? "#fff" : "#5a7a6a",
              transition: "all .15s"
            }}
          >
            {t.label} {t.count}
          </button>
        ))}
        {filter !== "all" && (
          <button onClick={() => setFilter("all")} style={{
            marginLeft: "auto", fontSize: 12, color: "#1a7a4a", background: "none",
            border: "none", cursor: "pointer", fontWeight: 600
          }}>CLEAR</button>
        )}
      </div>

      {/* Table */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 0, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", overflowX: "auto" }}>

        {/* Table header info row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px 12px", borderBottom: "2px solid #d4edda" }}>
          <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: "#1a4a2e" }}>
            Application Records
            <span style={{ background: "#d4edda", color: "#1a7a4a", borderRadius: 20, padding: "2px 10px", fontSize: 13, marginLeft: 8 }}>{apps.length}</span>
          </h3>
        </div>

        {loading ? (
          <div style={{ textAlign: "center", padding: 60, color: "#888" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
            Loading applications...
          </div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 1100 }}>
            <thead>
              <tr style={{ background: "#f0f7f2" }}>
                <th style={thStyle}>
                  <input type="checkbox" checked={allChecked} onChange={toggleAll}
                    style={{ width: 15, height: 15, cursor: "pointer", accentColor: "#1a7a4a" }} />
                </th>
                {["Reply", "#", "Applicant", "Token / Inward No", "Purpose / Subject", "Status", "Date", "Slot", ""].map(h => (
                  <th key={h} style={thStyle}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={10} style={{ textAlign: "center", padding: 48, color: "#888", fontSize: 14 }}>
                    <div style={{ fontSize: 36, marginBottom: 10 }}>📋</div>
                    {search ? "No matching applications found." : "No applications yet."}
                  </td>
                </tr>
              ) : (
                filtered.map((a, i) => {
                  const cfg = sc(a.status);
                  const isChecked = checked.includes(i);
                  const color = avatarColor(a.fullName);
                  return (
                    <tr key={a._id || i}
                      style={{ borderBottom: "1px solid #eef4ee", background: isChecked ? "#f0f7f2" : "transparent", cursor: "pointer" }}
                      onMouseOver={e => { if (!isChecked) e.currentTarget.style.background = "#f8fdf8"; }}
                      onMouseOut={e => { e.currentTarget.style.background = isChecked ? "#f0f7f2" : "transparent"; }}
                      onClick={() => setSelected(a)}
                    >
                      {/* Checkbox */}
                      <td style={tdStyle} onClick={e => e.stopPropagation()}>
                        <input type="checkbox" checked={isChecked} onChange={() => toggleOne(i)}
                          style={{ width: 15, height: 15, cursor: "pointer", accentColor: "#1a7a4a" }} />
                      </td>

                      {/* Reply button */}
                      <td style={tdStyle} onClick={e => e.stopPropagation()}>
                        <button onClick={() => setSelected(a)} style={{
                          background: "#e8f5ee", border: "1.5px solid #1a7a4a", borderRadius: 7,
                          padding: "5px 12px", cursor: "pointer", color: "#1a7a4a", fontSize: 12, fontWeight: 700
                        }}>Reply</button>
                      </td>

                      {/* # */}
                      <td style={{ ...tdStyle, color: "#888", fontSize: 13 }}>{i + 1}</td>

                      {/* Applicant */}
                      <td style={tdStyle}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{
                            width: 36, height: 36, borderRadius: "50%", background: color,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: "#fff", fontWeight: 800, fontSize: 13, flexShrink: 0
                          }}>{initials(a.fullName)}</div>
                          <div>
                            <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#1a4a2e" }}>{a.fullName || "—"}</p>
                            <p style={{ margin: 0, fontSize: 11, color: "#5a7a6a" }}>{a.mobileNumber || "—"}</p>
                          </div>
                        </div>
                      </td>

                      {/* Token */}
                      <td style={tdStyle}>
                        <span style={{ background: "#e8f5ee", color: "#1a7a4a", borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 600 }}>
                          {a.tokenId || a._id?.slice(-10) || "—"}
                        </span>
                      </td>

                      {/* Purpose */}
                      <td style={{ ...tdStyle, maxWidth: 240 }}>
                        <span style={{ fontSize: 13, color: "#1a4a2e", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block" }} title={a.purpose}>
                          {a.purpose?.length > 50 ? a.purpose.slice(0, 50) + "…" : a.purpose || "—"}
                        </span>
                      </td>

                      {/* Status */}
                      <td style={tdStyle}>
                        <span style={{
                          background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}`,
                          borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 700,
                          display: "inline-flex", alignItems: "center", gap: 5, whiteSpace: "nowrap"
                        }}>
                          <span style={{ width: 7, height: 7, borderRadius: "50%", background: cfg.dot, display: "inline-block" }} />
                          {cfg.label}
                        </span>
                      </td>

                      {/* Date */}
                      <td style={{ ...tdStyle, fontSize: 12, color: "#5a7a6a" }}>{formatShort(a.preferredDate)}</td>

                      {/* Slot */}
                      <td style={tdStyle}>
                        <span style={{ fontSize: 12, color: "#1a7a4a", background: "#e8f5ee", padding: "3px 10px", borderRadius: 20, fontWeight: 600, whiteSpace: "nowrap" }}>
                          {a.slotTime || "—"}
                        </span>
                      </td>

                      {/* Ward */}
                      <td style={{ ...tdStyle, fontSize: 12, color: "#5a7a6a" }}>{a.ward || "—"}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        )}

        {/* Footer */}
        {!loading && filtered.length > 0 && (
          <div style={{ padding: "12px 20px", borderTop: "1px solid #eef4ee", fontSize: 12, color: "#5a7a6a", display: "flex", justifyContent: "space-between" }}>
            <span>
              Showing <strong style={{ color: "#1a4a2e" }}>{filtered.length}</strong> of <strong style={{ color: "#1a4a2e" }}>{apps.length}</strong> applications
              {checked.length > 0 && <span style={{ color: "#1a7a4a", fontWeight: 700 }}> · {checked.length} selected</span>}
            </span>
            <span>💡 Click any row to view full details & reply</span>
          </div>
        )}
      </div>

      {/* Action Modal */}
      {selected && (
        <ActionModal
          appt={selected}
          onClose={() => setSelected(null)}
          onRefresh={fetchApps}
          showToast={showToast}
        />
      )}

      <style>{`@keyframes fadeIn { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } } @keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

const thStyle = {
  padding: "12px 14px", textAlign: "left", fontSize: 13, fontWeight: 700,
  color: "#1a4a2e", borderBottom: "2px solid #d4edda", whiteSpace: "nowrap"
};
const tdStyle = {
  padding: "12px 14px", fontSize: 14, color: "#1a4a2e"
};