import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const TIMES = [];
for (let h = 7; h <= 20; h++) {
  TIMES.push(`${String(h).padStart(2, "0")}:00`);
  if (h < 20) TIMES.push(`${String(h).padStart(2, "0")}:30`);
}

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
  let d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1;
}
function formatDate(y, m, d) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}
function displayDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}
function timeToMin(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}
function getDuration(start, end) {
  const diff = timeToMin(end) - timeToMin(start);
  return `${Math.floor(diff / 60)}h${diff % 60 > 0 ? " " + diff % 60 + "m" : ""}`;
}

export default function MayorAvailability() {
  const today = new Date();
  const [availabilities, setAvailabilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState(null);
  const [viewModal, setViewModal] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [addModal, setAddModal] = useState(false);
  const [modalYear, setModalYear] = useState(today.getFullYear());
  const [modalMonth, setModalMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  // ── FETCH all availability records ──
  const fetchAvailability = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/api/availability/get`);
      if (res.data.success) setAvailabilities(res.data.data);
    } catch (err) {
      showToast("Failed to load availability data", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAvailability();
  }, []);

  const markedDates = new Set(availabilities.map((a) => a.date));
  const endTimeOptions = startTime ? TIMES.filter((t) => timeToMin(t) > timeToMin(startTime)) : [];

  // ── ADD SLOT ──
  const handleAddSlot = async () => {
    if (!selectedDate) return showToast("कृपया date select करा!", "error");
    if (!startTime) return showToast("Start Time select करा!", "error");
    if (!endTime) return showToast("End Time select करा!", "error");

    try {
      setSubmitting(true);
      const res = await axios.post(`${BASE_URL}/api/availability/add-slot`, {
        date: selectedDate,
        start: startTime,
        end: endTime,
      });

      if (res.data.success) {
        showToast(`Slot ${startTime}–${endTime} added successfully!`);
        await fetchAvailability();
        setStartTime(""); setEndTime(""); setSelectedDate(null); setAddModal(false);
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Failed to add slot";
      showToast(msg, "error");
    } finally {
      setSubmitting(false);
    }
  };

  // ── DELETE ONE SLOT ──
  const handleDeleteSlot = async (dateId, slotIndex) => {
    try {
      const res = await axios.delete(`${BASE_URL}/api/availability/delete-slot/${dateId}`, {
        data: { slotIndex },
      });
      if (res.data.success) {
        showToast("Slot removed.", "error");
        await fetchAvailability();
      }
    } catch (err) {
      showToast("Failed to remove slot", "error");
    }
  };

  // ── DELETE ENTIRE DATE ──
  const handleDeleteDate = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/api/availability/delete/${id}`);
      if (res.data.success) {
        showToast("Availability removed.", "error");
        setDeleteConfirm(null);
        await fetchAvailability();
      }
    } catch (err) {
      showToast("Failed to delete", "error");
    }
  };

  // ── EXPORT CSV ──
  const handleExportCSV = () => {
    const csv = [
      "Date,Start Time,End Time,Status",
      ...availabilities.flatMap((a) =>
        a.timeSlots.map((s) => `"${displayDate(a.date)}","${s.start}","${s.end}","${a.status}"`)
      ),
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = "mayor_availability.csv"; link.click();
  };

  const filtered = availabilities.filter((a) =>
    displayDate(a.date).toLowerCase().includes(search.toLowerCase())
  );

  const prevModalMonth = () => {
    if (modalMonth === 0) { setModalMonth(11); setModalYear((y) => y - 1); }
    else setModalMonth((m) => m - 1);
  };
  const nextModalMonth = () => {
    if (modalMonth === 11) { setModalMonth(0); setModalYear((y) => y + 1); }
    else setModalMonth((m) => m + 1);
  };

  const selectStyle = {
    border: "1.5px solid #c8e0cc", borderRadius: 8, padding: "10px 12px",
    fontSize: 14, color: "#1a4a2e", background: "#f8fdf8",
    outline: "none", cursor: "pointer", width: "100%", fontWeight: 600,
  };

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
          <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: "#1a4a2e" }}>Mayor Availability</h1>
          <p style={{ margin: "4px 0 0", color: "#5a7a6a", fontSize: 14 }}>Mayor च्या available dates व time slots manage करा</p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button
            onClick={() => { setSelectedDate(null); setStartTime(""); setEndTime(""); setModalYear(today.getFullYear()); setModalMonth(today.getMonth()); setAddModal(true); }}
            style={{ background: "#1a7a4a", color: "#fff", border: "none", borderRadius: 8, padding: "10px 20px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}
          >+ Add Availability</button>
          <button onClick={handleExportCSV}
            style={{ background: "#fff", color: "#1a7a4a", border: "2px solid #1a7a4a", borderRadius: 8, padding: "10px 20px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}
          >⬇ Export CSV</button>
        </div>
      </div>

      {/* Table */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: "#1a4a2e" }}>
            Availability Records
            <span style={{ background: "#d4edda", color: "#1a7a4a", borderRadius: 20, padding: "2px 10px", fontSize: 13, marginLeft: 8 }}>{availabilities.length}</span>
          </h3>
          <input type="text" placeholder="🔍 Search by date..." value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ border: "1.5px solid #d0e0d0", borderRadius: 8, padding: "8px 14px", fontSize: 13, outline: "none", width: 220, color: "#1a4a2e" }}
          />
        </div>

        {loading ? (
          <div style={{ textAlign: "center", padding: 60, color: "#888" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
            Loading availability...
          </div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f0f7f2" }}>
                {["#", "Date", "Day", "Time Slots", "Status", "Actions"].map(h => (
                  <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontSize: 13, fontWeight: 700, color: "#1a4a2e", borderBottom: "2px solid #d4edda" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={6} style={{ textAlign: "center", padding: 40, color: "#888", fontSize: 14 }}>No availability records found.</td></tr>
              ) : (
                filtered.map((item, idx) => {
                  const d = new Date(item.date + "T00:00:00");
                  return (
                    <tr key={item._id} style={{ borderBottom: "1px solid #eef4ee" }}
                      onMouseOver={e => e.currentTarget.style.background = "#f8fdf8"}
                      onMouseOut={e => e.currentTarget.style.background = "transparent"}>
                      <td style={{ padding: "12px 14px", fontSize: 13, color: "#888" }}>{idx + 1}</td>
                      <td style={{ padding: "12px 14px", fontSize: 14, fontWeight: 600, color: "#1a4a2e" }}>
                        {d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                      </td>
                      <td style={{ padding: "12px 14px", fontSize: 13, color: "#5a7a6a" }}>
                        {d.toLocaleDateString("en-IN", { weekday: "long" })}
                      </td>
                      <td style={{ padding: "12px 14px" }}>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {item.timeSlots.map((slot, i) => (
                            <span key={i} style={{ background: "#e8f5ee", color: "#1a7a4a", borderRadius: 6, padding: "4px 10px", fontSize: 12, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 5 }}>
                              🕐 {slot.start} – {slot.end}
                              <span onClick={() => handleDeleteSlot(item._id, i)} title="Remove slot"
                                style={{ cursor: "pointer", color: "#c0392b", fontWeight: 800, fontSize: 15, lineHeight: 1, marginLeft: 2 }}>×</span>
                            </span>
                          ))}
                        </div>
                      </td>
                      <td style={{ padding: "12px 14px" }}>
                        <span style={{ background: "#d4edda", color: "#1a7a4a", borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 700 }}>✓ {item.status}</span>
                      </td>
                      <td style={{ padding: "12px 14px" }}>
                        <div style={{ display: "flex", gap: 8 }}>
                          <button onClick={() => setViewModal(item)}
                            style={{ background: "#e8f5ee", border: "none", borderRadius: 7, padding: "7px 10px", cursor: "pointer", color: "#1a7a4a", fontSize: 14 }}>👁</button>
                          <button onClick={() => setDeleteConfirm(item)}
                            style={{ background: "#fdecea", border: "none", borderRadius: 7, padding: "7px 10px", cursor: "pointer", color: "#c0392b", fontSize: 14 }}>🗑</button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* ADD MODAL */}
      {addModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", borderRadius: 16, padding: 32, width: 740, maxWidth: "95vw", boxShadow: "0 8px 48px rgba(0,0,0,0.2)", maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#1a4a2e" }}>📅 Set Mayor Availability</h3>
              <button onClick={() => setAddModal(false)} style={{ background: "#f0f4f0", border: "none", borderRadius: 8, width: 36, height: 36, cursor: "pointer", fontSize: 18 }}>✕</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
              {/* Calendar */}
              <div>
                <h4 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#1a4a2e" }}>① Date Select करा</h4>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <button onClick={prevModalMonth} style={{ background: "#f0f4f0", border: "none", borderRadius: 6, width: 32, height: 32, cursor: "pointer", fontSize: 16 }}>←</button>
                  <span style={{ fontWeight: 700, fontSize: 15, color: "#1a4a2e" }}>{MONTHS[modalMonth]} {modalYear}</span>
                  <button onClick={nextModalMonth} style={{ background: "#f0f4f0", border: "none", borderRadius: 6, width: 32, height: 32, cursor: "pointer", fontSize: 16 }}>→</button>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3, marginBottom: 6 }}>
                  {DAYS.map(d => <div key={d} style={{ textAlign: "center", fontSize: 11, fontWeight: 700, color: "#5a7a6a" }}>{d}</div>)}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3 }}>
                  {Array(getFirstDayOfMonth(modalYear, modalMonth)).fill(null).map((_, i) => <div key={"e" + i} />)}
                  {Array(getDaysInMonth(modalYear, modalMonth)).fill(null).map((_, i) => {
                    const day = i + 1;
                    const dateStr = formatDate(modalYear, modalMonth, day);
                    const isSelected = selectedDate === dateStr;
                    const isMarked = markedDates.has(dateStr);
                    const isPast = new Date(dateStr) < new Date(today.toDateString());
                    return (
                      <button key={day}
                        onClick={() => { if (!isPast) { setSelectedDate(dateStr); setStartTime(""); setEndTime(""); } }}
                        style={{
                          border: "none", borderRadius: 7, padding: "7px 0", cursor: isPast ? "not-allowed" : "pointer",
                          fontWeight: isSelected ? 700 : 500, fontSize: 12,
                          background: isSelected ? "#1a7a4a" : isMarked ? "#d4edda" : "#f8faf8",
                          color: isSelected ? "#fff" : isMarked ? "#1a7a4a" : isPast ? "#ccc" : "#1a4a2e",
                          position: "relative", transition: "all 0.15s"
                        }}>
                        {day}
                        {isMarked && !isSelected && (
                          <span style={{ position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: "#1a7a4a", display: "block" }} />
                        )}
                      </button>
                    );
                  })}
                </div>
                {selectedDate && (
                  <div style={{ marginTop: 12, padding: "9px 12px", background: "#e8f5ee", borderRadius: 8, fontSize: 12, color: "#1a4a2e", fontWeight: 600 }}>
                    ✓ {displayDate(selectedDate)}
                  </div>
                )}
              </div>

              {/* Time Slot Picker */}
              <div>
                <h4 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#1a4a2e" }}>② Time Slot Select करा</h4>
                {!selectedDate ? (
                  <div style={{ background: "#f8faf8", borderRadius: 10, padding: 24, textAlign: "center", color: "#aaa", fontSize: 13, border: "2px dashed #d0e0d0" }}>
                    ← आधी date select करा
                  </div>
                ) : (
                  <>
                    {/* Existing slots */}
                    {availabilities.find(a => a.date === selectedDate)?.timeSlots.length > 0 && (
                      <div style={{ marginBottom: 14, padding: "10px 12px", background: "#fff8e1", borderRadius: 8, fontSize: 12, color: "#b26a00" }}>
                        <strong>⚠ Existing slots:</strong>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 5 }}>
                          {availabilities.find(a => a.date === selectedDate)?.timeSlots.map((s, i) => (
                            <span key={i} style={{ background: "#ffe082", color: "#7a4a00", borderRadius: 6, padding: "3px 8px", fontSize: 12, fontWeight: 600 }}>
                              {s.start} – {s.end}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Start Time */}
                    <div style={{ marginBottom: 16 }}>
                      <label style={{ fontSize: 12, fontWeight: 700, color: "#5a7a6a", display: "block", marginBottom: 6 }}>START TIME</label>
                      <select value={startTime} onChange={e => { setStartTime(e.target.value); setEndTime(""); }} style={selectStyle}>
                        <option value="">-- Start Time निवडा --</option>
                        {TIMES.slice(0, -1).map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    {/* End Time */}
                    <div style={{ marginBottom: 16 }}>
                      <label style={{ fontSize: 12, fontWeight: 700, color: "#5a7a6a", display: "block", marginBottom: 6 }}>END TIME</label>
                      <select value={endTime} onChange={e => setEndTime(e.target.value)}
                        style={{ ...selectStyle, opacity: startTime ? 1 : 0.5, cursor: startTime ? "pointer" : "not-allowed" }}
                        disabled={!startTime}>
                        <option value="">-- End Time निवडा --</option>
                        {endTimeOptions.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    {/* Preview */}
                    {startTime && endTime && (
                      <div style={{ padding: "14px 16px", background: "#e8f5ee", borderRadius: 10, border: "2px solid #1a7a4a" }}>
                        <div style={{ fontSize: 11, color: "#5a7a6a", fontWeight: 700, marginBottom: 4, letterSpacing: 1 }}>SLOT PREVIEW</div>
                        <div style={{ fontSize: 20, fontWeight: 700, color: "#1a4a2e" }}>🕐 {startTime} → {endTime}</div>
                        <div style={{ fontSize: 12, color: "#5a7a6a", marginTop: 4 }}>Duration: {getDuration(startTime, endTime)}</div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              <button onClick={() => setAddModal(false)}
                style={{ flex: 1, background: "#f0f4f0", border: "none", borderRadius: 8, padding: "12px 0", fontWeight: 600, cursor: "pointer", color: "#1a4a2e", fontSize: 14 }}>
                Cancel
              </button>
              <button onClick={handleAddSlot} disabled={submitting}
                style={{ flex: 2, background: submitting ? "#888" : "#1a7a4a", color: "#fff", border: "none", borderRadius: 8, padding: "12px 0", fontWeight: 700, cursor: submitting ? "not-allowed" : "pointer", fontSize: 14 }}>
                {submitting ? "Adding..." : "+ Add Slot"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODAL */}
      {viewModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", borderRadius: 14, padding: 32, width: 420, boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
            <h3 style={{ margin: "0 0 20px", color: "#1a4a2e", fontSize: 18 }}>📅 Availability Details</h3>
            <div style={{ marginBottom: 12 }}>
              <span style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>DATE</span>
              <p style={{ margin: "4px 0 0", fontWeight: 700, color: "#1a4a2e", fontSize: 15 }}>{displayDate(viewModal.date)}</p>
            </div>
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>TIME SLOTS</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
                {viewModal.timeSlots.map((s, i) => (
                  <div key={i} style={{ background: "#e8f5ee", borderRadius: 8, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 16 }}>🕐</span>
                    <span style={{ fontWeight: 700, color: "#1a4a2e", fontSize: 15 }}>{s.start} – {s.end}</span>
                    <span style={{ fontSize: 12, color: "#5a7a6a", marginLeft: "auto" }}>{getDuration(s.start, s.end)}</span>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => setViewModal(null)}
              style={{ width: "100%", background: "#1a7a4a", color: "#fff", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 700, cursor: "pointer", fontSize: 14 }}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* DELETE MODAL */}
      {deleteConfirm && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", borderRadius: 14, padding: 32, width: 380, boxShadow: "0 8px 40px rgba(0,0,0,0.2)", textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🗑</div>
            <h3 style={{ margin: "0 0 8px", color: "#1a4a2e" }}>Delete Availability?</h3>
            <p style={{ color: "#666", fontSize: 14, marginBottom: 24 }}>
              <strong>{displayDate(deleteConfirm.date)}</strong> ची सर्व availability remove होईल.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => setDeleteConfirm(null)}
                style={{ flex: 1, background: "#f0f4f0", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 600, cursor: "pointer", color: "#1a4a2e" }}>Cancel</button>
              <button onClick={() => handleDeleteDate(deleteConfirm._id)}
                style={{ flex: 1, background: "#c0392b", color: "#fff", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 700, cursor: "pointer" }}>Delete</button>
            </div>
          </div>
        </div>
      )}

      <style>{`@keyframes fadeIn { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </div>
  );
}