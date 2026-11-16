// // // import { useState, useEffect } from "react";
// // // import axios from "axios";

// // // // const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
// // // // ✅ CORRECT
// // // const BASE_URL = import.meta.env.VITE_FILE_BASE_URL || "http://localhost:5000";

// // // const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// // // const MONTHS = [
// // //   "January", "February", "March", "April", "May", "June",
// // //   "July", "August", "September", "October", "November", "December",
// // // ];

// // // const TIMES = [];
// // // for (let h = 7; h <= 20; h++) {
// // //   TIMES.push(`${String(h).padStart(2, "0")}:00`);
// // //   if (h < 20) TIMES.push(`${String(h).padStart(2, "0")}:30`);
// // // }

// // // function getDaysInMonth(year, month) {
// // //   return new Date(year, month + 1, 0).getDate();
// // // }
// // // function getFirstDayOfMonth(year, month) {
// // //   let d = new Date(year, month, 1).getDay();
// // //   return d === 0 ? 6 : d - 1;
// // // }
// // // function formatDate(y, m, d) {
// // //   return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
// // // }
// // // function displayDate(dateStr) {
// // //   const d = new Date(dateStr + "T00:00:00");
// // //   return d.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
// // // }
// // // function timeToMin(t) {
// // //   const [h, m] = t.split(":").map(Number);
// // //   return h * 60 + m;
// // // }
// // // function getDuration(start, end) {
// // //   const diff = timeToMin(end) - timeToMin(start);
// // //   return `${Math.floor(diff / 60)}h${diff % 60 > 0 ? " " + diff % 60 + "m" : ""}`;
// // // }

// // // export default function MayorAvailability() {
// // //   const today = new Date();
// // //   const [availabilities, setAvailabilities] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [submitting, setSubmitting] = useState(false);
// // //   const [search, setSearch] = useState("");
// // //   const [toast, setToast] = useState(null);
// // //   const [viewModal, setViewModal] = useState(null);
// // //   const [deleteConfirm, setDeleteConfirm] = useState(null);
// // //   const [addModal, setAddModal] = useState(false);
// // //   const [modalYear, setModalYear] = useState(today.getFullYear());
// // //   const [modalMonth, setModalMonth] = useState(today.getMonth());
// // //   const [selectedDate, setSelectedDate] = useState(null);
// // //   const [startTime, setStartTime] = useState("");
// // //   const [endTime, setEndTime] = useState("");

// // //   const showToast = (msg, type = "success") => {
// // //     setToast({ msg, type });
// // //     setTimeout(() => setToast(null), 3500);
// // //   };

// // //   // ── FETCH all availability records ──
// // //   const fetchAvailability = async () => {
// // //     try {
// // //       setLoading(true);
// // //       const res = await axios.get(`${BASE_URL}/api/availability/get`);
// // //       if (res.data.success) setAvailabilities(res.data.data);
// // //     } catch (err) {
// // //       showToast("Failed to load availability data", "error");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchAvailability();
// // //   }, []);

// // //   const markedDates = new Set(availabilities.map((a) => a.date));
// // //   const endTimeOptions = startTime ? TIMES.filter((t) => timeToMin(t) > timeToMin(startTime)) : [];

// // //   // ── ADD SLOT ──
// // //   const handleAddSlot = async () => {
// // //     if (!selectedDate) return showToast("कृपया date select करा!", "error");
// // //     if (!startTime) return showToast("Start Time select करा!", "error");
// // //     if (!endTime) return showToast("End Time select करा!", "error");

// // //     try {
// // //       setSubmitting(true);
// // //       const res = await axios.post(`${BASE_URL}/api/availability/add-slot`, {
// // //         date: selectedDate,
// // //         start: startTime,
// // //         end: endTime,
// // //       });

// // //       if (res.data.success) {
// // //         showToast(`Slot ${startTime}–${endTime} added successfully!`);
// // //         await fetchAvailability();
// // //         setStartTime(""); setEndTime(""); setSelectedDate(null); setAddModal(false);
// // //       }
// // //     } catch (err) {
// // //       const msg = err.response?.data?.message || "Failed to add slot";
// // //       showToast(msg, "error");
// // //     } finally {
// // //       setSubmitting(false);
// // //     }
// // //   };

// // //   // ── DELETE ONE SLOT ──
// // //   const handleDeleteSlot = async (dateId, slotIndex) => {
// // //     try {
// // //       const res = await axios.delete(`${BASE_URL}/api/availability/delete-slot/${dateId}`, {
// // //         data: { slotIndex },
// // //       });
// // //       if (res.data.success) {
// // //         showToast("Slot removed.", "error");
// // //         await fetchAvailability();
// // //       }
// // //     } catch (err) {
// // //       showToast("Failed to remove slot", "error");
// // //     }
// // //   };

// // //   // ── DELETE ENTIRE DATE ──
// // //   const handleDeleteDate = async (id) => {
// // //     try {
// // //       const res = await axios.delete(`${BASE_URL}/api/availability/delete/${id}`);
// // //       if (res.data.success) {
// // //         showToast("Availability removed.", "error");
// // //         setDeleteConfirm(null);
// // //         await fetchAvailability();
// // //       }
// // //     } catch (err) {
// // //       showToast("Failed to delete", "error");
// // //     }
// // //   };

// // //   // ── EXPORT CSV ──
// // //   const handleExportCSV = () => {
// // //     const csv = [
// // //       "Date,Start Time,End Time,Status",
// // //       ...availabilities.flatMap((a) =>
// // //         a.timeSlots.map((s) => `"${displayDate(a.date)}","${s.start}","${s.end}","${a.status}"`)
// // //       ),
// // //     ].join("\n");
// // //     const blob = new Blob([csv], { type: "text/csv" });
// // //     const url = URL.createObjectURL(blob);
// // //     const link = document.createElement("a");
// // //     link.href = url; link.download = "mayor_availability.csv"; link.click();
// // //   };

// // //   const filtered = availabilities.filter((a) =>
// // //     displayDate(a.date).toLowerCase().includes(search.toLowerCase())
// // //   );

// // //   const prevModalMonth = () => {
// // //     if (modalMonth === 0) { setModalMonth(11); setModalYear((y) => y - 1); }
// // //     else setModalMonth((m) => m - 1);
// // //   };
// // //   const nextModalMonth = () => {
// // //     if (modalMonth === 11) { setModalMonth(0); setModalYear((y) => y + 1); }
// // //     else setModalMonth((m) => m + 1);
// // //   };

// // //   const selectStyle = {
// // //     border: "1.5px solid #c8e0cc", borderRadius: 8, padding: "10px 12px",
// // //     fontSize: 14, color: "#1a4a2e", background: "#f8fdf8",
// // //     outline: "none", cursor: "pointer", width: "100%", fontWeight: 600,
// // //   };

// // //   return (
// // //     <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#f0f4f0", minHeight: "100vh", padding: "24px" }}>

// // //       {/* Toast */}
// // //       {toast && (
// // //         <div style={{
// // //           position: "fixed", top: 20, right: 20, zIndex: 9999,
// // //           background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
// // //           color: "#fff", padding: "12px 20px", borderRadius: 8,
// // //           boxShadow: "0 4px 16px rgba(0,0,0,0.2)", fontSize: 14, fontWeight: 600,
// // //           animation: "fadeIn 0.3s ease"
// // //         }}>{toast.msg}</div>
// // //       )}

// // //       {/* Header */}
// // //       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
// // //         <div>
// // //           <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: "#1a4a2e" }}>Mayor Availability</h1>
// // //           <p style={{ margin: "4px 0 0", color: "#5a7a6a", fontSize: 14 }}>Mayor च्या available dates व time slots manage करा</p>
// // //         </div>
// // //         <div style={{ display: "flex", gap: 12 }}>
// // //           <button
// // //             onClick={() => { setSelectedDate(null); setStartTime(""); setEndTime(""); setModalYear(today.getFullYear()); setModalMonth(today.getMonth()); setAddModal(true); }}
// // //             style={{ background: "#1a7a4a", color: "#fff", border: "none", borderRadius: 8, padding: "10px 20px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}
// // //           >+ Add Availability</button>
// // //           <button onClick={handleExportCSV}
// // //             style={{ background: "#fff", color: "#1a7a4a", border: "2px solid #1a7a4a", borderRadius: 8, padding: "10px 20px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}
// // //           >⬇ Export CSV</button>
// // //         </div>
// // //       </div>

// // //       {/* Table */}
// // //       <div style={{ background: "#fff", borderRadius: 12, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
// // //         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
// // //           <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: "#1a4a2e" }}>
// // //             Availability Records
// // //             <span style={{ background: "#d4edda", color: "#1a7a4a", borderRadius: 20, padding: "2px 10px", fontSize: 13, marginLeft: 8 }}>{availabilities.length}</span>
// // //           </h3>
// // //           <input type="text" placeholder="🔍 Search by date..." value={search}
// // //             onChange={e => setSearch(e.target.value)}
// // //             style={{ border: "1.5px solid #d0e0d0", borderRadius: 8, padding: "8px 14px", fontSize: 13, outline: "none", width: 220, color: "#1a4a2e" }}
// // //           />
// // //         </div>

// // //         {loading ? (
// // //           <div style={{ textAlign: "center", padding: 60, color: "#888" }}>
// // //             <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
// // //             Loading availability...
// // //           </div>
// // //         ) : (
// // //           <table style={{ width: "100%", borderCollapse: "collapse" }}>
// // //             <thead>
// // //               <tr style={{ background: "#f0f7f2" }}>
// // //                 {["#", "Date", "Day", "Time Slots", "Status", "Actions"].map(h => (
// // //                   <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontSize: 13, fontWeight: 700, color: "#1a4a2e", borderBottom: "2px solid #d4edda" }}>{h}</th>
// // //                 ))}
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {filtered.length === 0 ? (
// // //                 <tr><td colSpan={6} style={{ textAlign: "center", padding: 40, color: "#888", fontSize: 14 }}>No availability records found.</td></tr>
// // //               ) : (
// // //                 filtered.map((item, idx) => {
// // //                   const d = new Date(item.date + "T00:00:00");
// // //                   return (
// // //                     <tr key={item._id} style={{ borderBottom: "1px solid #eef4ee" }}
// // //                       onMouseOver={e => e.currentTarget.style.background = "#f8fdf8"}
// // //                       onMouseOut={e => e.currentTarget.style.background = "transparent"}>
// // //                       <td style={{ padding: "12px 14px", fontSize: 13, color: "#888" }}>{idx + 1}</td>
// // //                       <td style={{ padding: "12px 14px", fontSize: 14, fontWeight: 600, color: "#1a4a2e" }}>
// // //                         {d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
// // //                       </td>
// // //                       <td style={{ padding: "12px 14px", fontSize: 13, color: "#5a7a6a" }}>
// // //                         {d.toLocaleDateString("en-IN", { weekday: "long" })}
// // //                       </td>
// // //                       <td style={{ padding: "12px 14px" }}>
// // //                         <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
// // //                           {item.timeSlots.map((slot, i) => (
// // //                             <span key={i} style={{ background: "#e8f5ee", color: "#1a7a4a", borderRadius: 6, padding: "4px 10px", fontSize: 12, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 5 }}>
// // //                               🕐 {slot.start} – {slot.end}
// // //                               <span onClick={() => handleDeleteSlot(item._id, i)} title="Remove slot"
// // //                                 style={{ cursor: "pointer", color: "#c0392b", fontWeight: 800, fontSize: 15, lineHeight: 1, marginLeft: 2 }}>×</span>
// // //                             </span>
// // //                           ))}
// // //                         </div>
// // //                       </td>
// // //                       <td style={{ padding: "12px 14px" }}>
// // //                         <span style={{ background: "#d4edda", color: "#1a7a4a", borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 700 }}>✓ {item.status}</span>
// // //                       </td>
// // //                       <td style={{ padding: "12px 14px" }}>
// // //                         <div style={{ display: "flex", gap: 8 }}>
// // //                           <button onClick={() => setViewModal(item)}
// // //                             style={{ background: "#e8f5ee", border: "none", borderRadius: 7, padding: "7px 10px", cursor: "pointer", color: "#1a7a4a", fontSize: 14 }}>👁</button>
// // //                           <button onClick={() => setDeleteConfirm(item)}
// // //                             style={{ background: "#fdecea", border: "none", borderRadius: 7, padding: "7px 10px", cursor: "pointer", color: "#c0392b", fontSize: 14 }}>🗑</button>
// // //                         </div>
// // //                       </td>
// // //                     </tr>
// // //                   );
// // //                 })
// // //               )}
// // //             </tbody>
// // //           </table>
// // //         )}
// // //       </div>

// // //       {/* ADD MODAL */}
// // //       {addModal && (
// // //         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
// // //           <div style={{ background: "#fff", borderRadius: 16, padding: 32, width: 740, maxWidth: "95vw", boxShadow: "0 8px 48px rgba(0,0,0,0.2)", maxHeight: "90vh", overflowY: "auto" }}>
// // //             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
// // //               <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#1a4a2e" }}>📅 Set Mayor Availability</h3>
// // //               <button onClick={() => setAddModal(false)} style={{ background: "#f0f4f0", border: "none", borderRadius: 8, width: 36, height: 36, cursor: "pointer", fontSize: 18 }}>✕</button>
// // //             </div>

// // //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
// // //               {/* Calendar */}
// // //               <div>
// // //                 <h4 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#1a4a2e" }}>① Date Select करा</h4>
// // //                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
// // //                   <button onClick={prevModalMonth} style={{ background: "#f0f4f0", border: "none", borderRadius: 6, width: 32, height: 32, cursor: "pointer", fontSize: 16 }}>←</button>
// // //                   <span style={{ fontWeight: 700, fontSize: 15, color: "#1a4a2e" }}>{MONTHS[modalMonth]} {modalYear}</span>
// // //                   <button onClick={nextModalMonth} style={{ background: "#f0f4f0", border: "none", borderRadius: 6, width: 32, height: 32, cursor: "pointer", fontSize: 16 }}>→</button>
// // //                 </div>
// // //                 <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3, marginBottom: 6 }}>
// // //                   {DAYS.map(d => <div key={d} style={{ textAlign: "center", fontSize: 11, fontWeight: 700, color: "#5a7a6a" }}>{d}</div>)}
// // //                 </div>
// // //                 <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3 }}>
// // //                   {Array(getFirstDayOfMonth(modalYear, modalMonth)).fill(null).map((_, i) => <div key={"e" + i} />)}
// // //                   {Array(getDaysInMonth(modalYear, modalMonth)).fill(null).map((_, i) => {
// // //                     const day = i + 1;
// // //                     const dateStr = formatDate(modalYear, modalMonth, day);
// // //                     const isSelected = selectedDate === dateStr;
// // //                     const isMarked = markedDates.has(dateStr);
// // //                     const isPast = new Date(dateStr) < new Date(today.toDateString());
// // //                     return (
// // //                       <button key={day}
// // //                         onClick={() => { if (!isPast) { setSelectedDate(dateStr); setStartTime(""); setEndTime(""); } }}
// // //                         style={{
// // //                           border: "none", borderRadius: 7, padding: "7px 0", cursor: isPast ? "not-allowed" : "pointer",
// // //                           fontWeight: isSelected ? 700 : 500, fontSize: 12,
// // //                           background: isSelected ? "#1a7a4a" : isMarked ? "#d4edda" : "#f8faf8",
// // //                           color: isSelected ? "#fff" : isMarked ? "#1a7a4a" : isPast ? "#ccc" : "#1a4a2e",
// // //                           position: "relative", transition: "all 0.15s"
// // //                         }}>
// // //                         {day}
// // //                         {isMarked && !isSelected && (
// // //                           <span style={{ position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: "#1a7a4a", display: "block" }} />
// // //                         )}
// // //                       </button>
// // //                     );
// // //                   })}
// // //                 </div>
// // //                 {selectedDate && (
// // //                   <div style={{ marginTop: 12, padding: "9px 12px", background: "#e8f5ee", borderRadius: 8, fontSize: 12, color: "#1a4a2e", fontWeight: 600 }}>
// // //                     ✓ {displayDate(selectedDate)}
// // //                   </div>
// // //                 )}
// // //               </div>

// // //               {/* Time Slot Picker */}
// // //               <div>
// // //                 <h4 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#1a4a2e" }}>② Time Slot Select करा</h4>
// // //                 {!selectedDate ? (
// // //                   <div style={{ background: "#f8faf8", borderRadius: 10, padding: 24, textAlign: "center", color: "#aaa", fontSize: 13, border: "2px dashed #d0e0d0" }}>
// // //                     ← आधी date select करा
// // //                   </div>
// // //                 ) : (
// // //                   <>
// // //                     {/* Existing slots */}
// // //                     {availabilities.find(a => a.date === selectedDate)?.timeSlots.length > 0 && (
// // //                       <div style={{ marginBottom: 14, padding: "10px 12px", background: "#fff8e1", borderRadius: 8, fontSize: 12, color: "#b26a00" }}>
// // //                         <strong>⚠ Existing slots:</strong>
// // //                         <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 5 }}>
// // //                           {availabilities.find(a => a.date === selectedDate)?.timeSlots.map((s, i) => (
// // //                             <span key={i} style={{ background: "#ffe082", color: "#7a4a00", borderRadius: 6, padding: "3px 8px", fontSize: 12, fontWeight: 600 }}>
// // //                               {s.start} – {s.end}
// // //                             </span>
// // //                           ))}
// // //                         </div>
// // //                       </div>
// // //                     )}

// // //                     {/* Start Time */}
// // //                     <div style={{ marginBottom: 16 }}>
// // //                       <label style={{ fontSize: 12, fontWeight: 700, color: "#5a7a6a", display: "block", marginBottom: 6 }}>START TIME</label>
// // //                       <select value={startTime} onChange={e => { setStartTime(e.target.value); setEndTime(""); }} style={selectStyle}>
// // //                         <option value="">-- Start Time निवडा --</option>
// // //                         {TIMES.slice(0, -1).map(t => <option key={t} value={t}>{t}</option>)}
// // //                       </select>
// // //                     </div>

// // //                     {/* End Time */}
// // //                     <div style={{ marginBottom: 16 }}>
// // //                       <label style={{ fontSize: 12, fontWeight: 700, color: "#5a7a6a", display: "block", marginBottom: 6 }}>END TIME</label>
// // //                       <select value={endTime} onChange={e => setEndTime(e.target.value)}
// // //                         style={{ ...selectStyle, opacity: startTime ? 1 : 0.5, cursor: startTime ? "pointer" : "not-allowed" }}
// // //                         disabled={!startTime}>
// // //                         <option value="">-- End Time निवडा --</option>
// // //                         {endTimeOptions.map(t => <option key={t} value={t}>{t}</option>)}
// // //                       </select>
// // //                     </div>

// // //                     {/* Preview */}
// // //                     {startTime && endTime && (
// // //                       <div style={{ padding: "14px 16px", background: "#e8f5ee", borderRadius: 10, border: "2px solid #1a7a4a" }}>
// // //                         <div style={{ fontSize: 11, color: "#5a7a6a", fontWeight: 700, marginBottom: 4, letterSpacing: 1 }}>SLOT PREVIEW</div>
// // //                         <div style={{ fontSize: 20, fontWeight: 700, color: "#1a4a2e" }}>🕐 {startTime} → {endTime}</div>
// // //                         <div style={{ fontSize: 12, color: "#5a7a6a", marginTop: 4 }}>Duration: {getDuration(startTime, endTime)}</div>
// // //                       </div>
// // //                     )}
// // //                   </>
// // //                 )}
// // //               </div>
// // //             </div>

// // //             <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
// // //               <button onClick={() => setAddModal(false)}
// // //                 style={{ flex: 1, background: "#f0f4f0", border: "none", borderRadius: 8, padding: "12px 0", fontWeight: 600, cursor: "pointer", color: "#1a4a2e", fontSize: 14 }}>
// // //                 Cancel
// // //               </button>
// // //               <button onClick={handleAddSlot} disabled={submitting}
// // //                 style={{ flex: 2, background: submitting ? "#888" : "#1a7a4a", color: "#fff", border: "none", borderRadius: 8, padding: "12px 0", fontWeight: 700, cursor: submitting ? "not-allowed" : "pointer", fontSize: 14 }}>
// // //                 {submitting ? "Adding..." : "+ Add Slot"}
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* VIEW MODAL */}
// // //       {viewModal && (
// // //         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
// // //           <div style={{ background: "#fff", borderRadius: 14, padding: 32, width: 420, boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
// // //             <h3 style={{ margin: "0 0 20px", color: "#1a4a2e", fontSize: 18 }}>📅 Availability Details</h3>
// // //             <div style={{ marginBottom: 12 }}>
// // //               <span style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>DATE</span>
// // //               <p style={{ margin: "4px 0 0", fontWeight: 700, color: "#1a4a2e", fontSize: 15 }}>{displayDate(viewModal.date)}</p>
// // //             </div>
// // //             <div style={{ marginBottom: 20 }}>
// // //               <span style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>TIME SLOTS</span>
// // //               <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
// // //                 {viewModal.timeSlots.map((s, i) => (
// // //                   <div key={i} style={{ background: "#e8f5ee", borderRadius: 8, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
// // //                     <span style={{ fontSize: 16 }}>🕐</span>
// // //                     <span style={{ fontWeight: 700, color: "#1a4a2e", fontSize: 15 }}>{s.start} – {s.end}</span>
// // //                     <span style={{ fontSize: 12, color: "#5a7a6a", marginLeft: "auto" }}>{getDuration(s.start, s.end)}</span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //             <button onClick={() => setViewModal(null)}
// // //               style={{ width: "100%", background: "#1a7a4a", color: "#fff", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 700, cursor: "pointer", fontSize: 14 }}>
// // //               Close
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* DELETE MODAL */}
// // //       {deleteConfirm && (
// // //         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
// // //           <div style={{ background: "#fff", borderRadius: 14, padding: 32, width: 380, boxShadow: "0 8px 40px rgba(0,0,0,0.2)", textAlign: "center" }}>
// // //             <div style={{ fontSize: 40, marginBottom: 12 }}>🗑</div>
// // //             <h3 style={{ margin: "0 0 8px", color: "#1a4a2e" }}>Delete Availability?</h3>
// // //             <p style={{ color: "#666", fontSize: 14, marginBottom: 24 }}>
// // //               <strong>{displayDate(deleteConfirm.date)}</strong> ची सर्व availability remove होईल.
// // //             </p>
// // //             <div style={{ display: "flex", gap: 12 }}>
// // //               <button onClick={() => setDeleteConfirm(null)}
// // //                 style={{ flex: 1, background: "#f0f4f0", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 600, cursor: "pointer", color: "#1a4a2e" }}>Cancel</button>
// // //               <button onClick={() => handleDeleteDate(deleteConfirm._id)}
// // //                 style={{ flex: 1, background: "#c0392b", color: "#fff", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 700, cursor: "pointer" }}>Delete</button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       <style>{`@keyframes fadeIn { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }`}</style>
// // //     </div>
// // //   );
// // // }







// // // ====================================




// // // import { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import { toast } from "react-toastify";


// // // const BASE_URL = import.meta.env.VITE_FILE_BASE_URL || "http://localhost:5000";

// // // const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// // // const MONTHS = [
// // //   "January", "February", "March", "April", "May", "June",
// // //   "July", "August", "September", "October", "November", "December",
// // // ];

// // // const TIMES = [];
// // // for (let h = 7; h <= 20; h++) {
// // //   TIMES.push(`${String(h).padStart(2, "0")}:00`);
// // //   if (h < 20) TIMES.push(`${String(h).padStart(2, "0")}:30`);
// // // }

// // // function getDaysInMonth(year, month) {
// // //   return new Date(year, month + 1, 0).getDate();
// // // }
// // // function getFirstDayOfMonth(year, month) {
// // //   let d = new Date(year, month, 1).getDay();
// // //   return d === 0 ? 6 : d - 1;
// // // }
// // // function formatDate(y, m, d) {
// // //   return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
// // // }
// // // function displayDate(dateStr) {
// // //   const d = new Date(dateStr + "T00:00:00");
// // //   return d.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
// // // }
// // // function timeToMin(t) {
// // //   const [h, m] = t.split(":").map(Number);
// // //   return h * 60 + m;
// // // }
// // // function getDuration(start, end) {
// // //   const diff = timeToMin(end) - timeToMin(start);
// // //   return `${Math.floor(diff / 60)}h${diff % 60 > 0 ? " " + diff % 60 + "m" : ""}`;
// // // }

// // // export default function MayorAvailability() {
// // //   const today = new Date();
// // //   const [availabilities, setAvailabilities] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [submitting, setSubmitting] = useState(false);
// // //   const [search, setSearch] = useState("");
// // //   const [toast, setToast] = useState(null);
// // //   const [viewModal, setViewModal] = useState(null);
// // //   const [deleteConfirm, setDeleteConfirm] = useState(null);
// // //   const [addModal, setAddModal] = useState(false);
// // //   const [modalYear, setModalYear] = useState(today.getFullYear());
// // //   const [modalMonth, setModalMonth] = useState(today.getMonth());
// // //   const [selectedDate, setSelectedDate] = useState(null);
// // //   const [startTime, setStartTime] = useState("");
// // //   const [endTime, setEndTime] = useState("");
// // //   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

// // //   useEffect(() => {
// // //     const onResize = () => setIsMobile(window.innerWidth < 640);
// // //     window.addEventListener("resize", onResize);
// // //     return () => window.removeEventListener("resize", onResize);
// // //   }, []);

// // //   const showToast = (msg, type = "success") => {
// // //     setToast({ msg, type });
// // //     setTimeout(() => setToast(null), 3500);
// // //   };

// // //   const fetchAvailability = async () => {
// // //     try {
// // //       setLoading(true);
// // //       const res = await axios.get(`${BASE_URL}/api/availability/get`);
// // //       if (res.data.success) setAvailabilities(res.data.data);
// // //     } catch (err) {
// // //       showToast("Failed to load availability data", "error");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => { fetchAvailability(); }, []);

// // //   const markedDates = new Set(availabilities.map((a) => a.date));
// // //   const endTimeOptions = startTime ? TIMES.filter((t) => timeToMin(t) > timeToMin(startTime)) : [];

// // //   const handleAddSlot = async () => {
// // //     if (!selectedDate) return showToast("कृपया date select करा!", "error");
// // //     if (!startTime) return showToast("Start Time select करा!", "error");
// // //     if (!endTime) return showToast("End Time select करा!", "error");
// // //     try {
// // //       setSubmitting(true);
// // //       const res = await axios.post(`${BASE_URL}/api/availability/add-slot`, {
// // //         date: selectedDate, start: startTime, end: endTime,
// // //       });
// // //       if (res.data.success) {
// // //         showToast(`Slot ${startTime}–${endTime} added successfully!`);
// // //         await fetchAvailability();
// // //         setStartTime(""); setEndTime(""); setSelectedDate(null); setAddModal(false);
// // //       }
// // //     } catch (err) {
// // //       showToast(err.response?.data?.message || "Failed to add slot", "error");
// // //     } finally {
// // //       setSubmitting(false);
// // //     }
// // //   };

// // //   const handleDeleteSlot = async (dateId, slotIndex) => {
// // //     try {
// // //       const res = await axios.delete(`${BASE_URL}/api/availability/delete-slot/${dateId}`, { data: { slotIndex } });
// // //       if (res.data.success) { showToast("Slot removed.", "error"); await fetchAvailability(); }
// // //     } catch (err) { showToast("Failed to remove slot", "error"); }
// // //   };

// // //   const handleDeleteDate = async (id) => {
// // //     try {
// // //       const res = await axios.delete(`${BASE_URL}/api/availability/delete/${id}`);
// // //       if (res.data.success) { showToast("Availability removed.", "error"); setDeleteConfirm(null); await fetchAvailability(); }
// // //     } catch (err) { showToast("Failed to delete", "error"); }
// // //   };

// // //   const handleExportCSV = () => {
// // //     const csv = [
// // //       "Date,Start Time,End Time,Status",
// // //       ...availabilities.flatMap((a) =>
// // //         a.timeSlots.map((s) => `"${displayDate(a.date)}","${s.start}","${s.end}","${a.status}"`)
// // //       ),
// // //     ].join("\n");
// // //     const blob = new Blob([csv], { type: "text/csv" });
// // //     const url = URL.createObjectURL(blob);
// // //     const link = document.createElement("a");
// // //     link.href = url; link.download = "mayor_availability.csv"; link.click();
// // //   };

// // //   const filtered = availabilities.filter((a) =>
// // //     displayDate(a.date).toLowerCase().includes(search.toLowerCase())
// // //   );

// // //   const prevModalMonth = () => {
// // //     if (modalMonth === 0) { setModalMonth(11); setModalYear((y) => y - 1); }
// // //     else setModalMonth((m) => m - 1);
// // //   };
// // //   const nextModalMonth = () => {
// // //     if (modalMonth === 11) { setModalMonth(0); setModalYear((y) => y + 1); }
// // //     else setModalMonth((m) => m + 1);
// // //   };

// // //   const selectStyle = {
// // //     border: "1.5px solid #c8e0cc", borderRadius: 8, padding: "10px 12px",
// // //     fontSize: 14, color: "#1a4a2e", background: "#f8fdf8",
// // //     outline: "none", cursor: "pointer", width: "100%", fontWeight: 600,
// // //   };

// // //   return (
// // //     <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#f0f4f0", minHeight: "100vh", padding: isMobile ? "16px 12px" : "24px" }}>

// // //       {/* Responsive styles */}
// // //       <style>{`
// // //         @keyframes fadeIn { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }
// // //         .avail-table-wrap { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
// // //         .avail-table { width: 100%; border-collapse: collapse; min-width: 560px; }
// // //         .avail-card { background:#fff; border-radius:10px; padding:14px; margin-bottom:12px; box-shadow:0 1px 6px rgba(0,0,0,0.07); }
// // //         .avail-card-row { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px; }
// // //         .modal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
// // //         @media (max-width: 639px) {
// // //           .modal-grid { grid-template-columns: 1fr; gap: 20px; }
// // //         }
// // //       `}</style>

// // //       {/* Toast */}
// // //       {toast && (
// // //         <div style={{
// // //           position: "fixed", top: 20, right: isMobile ? 12 : 20, left: isMobile ? 12 : "auto", zIndex: 9999,
// // //           background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
// // //           color: "#fff", padding: "12px 20px", borderRadius: 8,
// // //           boxShadow: "0 4px 16px rgba(0,0,0,0.2)", fontSize: 14, fontWeight: 600,
// // //           animation: "fadeIn 0.3s ease"
// // //         }}>{toast.msg}</div>
// // //       )}

// // //       {/* Header */}
// // //       <div style={{ marginBottom: 20 }}>
// // //         <div style={{ marginBottom: 12 }}>
// // //           <h1 style={{ margin: 0, fontSize: isMobile ? 20 : 26, fontWeight: 700, color: "#1a4a2e" }}>Mayor Availability</h1>
// // //           <p style={{ margin: "4px 0 0", color: "#5a7a6a", fontSize: isMobile ? 12 : 14 }}>Mayor च्या available dates व time slots manage करा</p>
// // //         </div>
// // //         <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
// // //           <button
// // //             onClick={() => { setSelectedDate(null); setStartTime(""); setEndTime(""); setModalYear(today.getFullYear()); setModalMonth(today.getMonth()); setAddModal(true); }}
// // //             style={{ background: "#1a7a4a", color: "#fff", border: "none", borderRadius: 8, padding: isMobile ? "9px 14px" : "10px 20px", fontWeight: 600, fontSize: isMobile ? 13 : 14, cursor: "pointer", flex: isMobile ? 1 : "none" }}
// // //           >+ Add Availability</button>
// // //           <button onClick={handleExportCSV}
// // //             style={{ background: "#fff", color: "#1a7a4a", border: "2px solid #1a7a4a", borderRadius: 8, padding: isMobile ? "9px 14px" : "10px 20px", fontWeight: 600, fontSize: isMobile ? 13 : 14, cursor: "pointer", flex: isMobile ? 1 : "none" }}
// // //           >⬇ Export CSV</button>
// // //         </div>
// // //       </div>

// // //       {/* Table / Cards */}
// // //       <div style={{ background: "#fff", borderRadius: 12, padding: isMobile ? 14 : 24, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
// // //         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 10 }}>
// // //           <h3 style={{ margin: 0, fontSize: isMobile ? 15 : 17, fontWeight: 700, color: "#1a4a2e" }}>
// // //             Availability Records
// // //             <span style={{ background: "#d4edda", color: "#1a7a4a", borderRadius: 20, padding: "2px 10px", fontSize: 13, marginLeft: 8 }}>{availabilities.length}</span>
// // //           </h3>
// // //           <input type="text" placeholder="🔍 Search by date..." value={search}
// // //             onChange={e => setSearch(e.target.value)}
// // //             style={{ border: "1.5px solid #d0e0d0", borderRadius: 8, padding: "8px 14px", fontSize: 13, outline: "none", width: isMobile ? "100%" : 220, color: "#1a4a2e" }}
// // //           />
// // //         </div>

// // //         {loading ? (
// // //           <div style={{ textAlign: "center", padding: 60, color: "#888" }}>
// // //             <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
// // //             Loading availability...
// // //           </div>
// // //         ) : isMobile ? (
// // //           /* ── Mobile card view ── */
// // //           <div>
// // //             {filtered.length === 0 ? (
// // //               <div style={{ textAlign: "center", padding: 40, color: "#888", fontSize: 14 }}>No availability records found.</div>
// // //             ) : filtered.map((item, idx) => {
// // //               const d = new Date(item.date + "T00:00:00");
// // //               return (
// // //                 <div key={item._id} className="avail-card">
// // //                   <div className="avail-card-row">
// // //                     <div>
// // //                       <div style={{ fontSize: 15, fontWeight: 700, color: "#1a4a2e" }}>
// // //                         {d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
// // //                       </div>
// // //                       <div style={{ fontSize: 12, color: "#5a7a6a", marginTop: 2 }}>
// // //                         {d.toLocaleDateString("en-IN", { weekday: "long" })}
// // //                       </div>
// // //                     </div>
// // //                     <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
// // //                       <span style={{ background: "#d4edda", color: "#1a7a4a", borderRadius: 20, padding: "4px 10px", fontSize: 11, fontWeight: 700 }}>✓ {item.status}</span>
// // //                     </div>
// // //                   </div>
// // //                   <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
// // //                     {item.timeSlots.map((slot, i) => (
// // //                       <span key={i} style={{ background: "#e8f5ee", color: "#1a7a4a", borderRadius: 6, padding: "4px 10px", fontSize: 12, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 5 }}>
// // //                         🕐 {slot.start} – {slot.end}
// // //                         <span onClick={() => handleDeleteSlot(item._id, i)} title="Remove slot"
// // //                           style={{ cursor: "pointer", color: "#c0392b", fontWeight: 800, fontSize: 15, lineHeight: 1, marginLeft: 2 }}>×</span>
// // //                       </span>
// // //                     ))}
// // //                   </div>
// // //                   <div style={{ display: "flex", gap: 8 }}>
// // //                     <button onClick={() => setViewModal(item)}
// // //                       style={{ flex: 1, background: "#e8f5ee", border: "none", borderRadius: 7, padding: "8px 0", cursor: "pointer", color: "#1a7a4a", fontSize: 13, fontWeight: 600 }}>👁 View</button>
// // //                     <button onClick={() => setDeleteConfirm(item)}
// // //                       style={{ flex: 1, background: "#fdecea", border: "none", borderRadius: 7, padding: "8px 0", cursor: "pointer", color: "#c0392b", fontSize: 13, fontWeight: 600 }}>🗑 Delete</button>
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         ) : (
// // //           /* ── Desktop table view ── */
// // //           <div className="avail-table-wrap">
// // //             <table className="avail-table">
// // //               <thead>
// // //                 <tr style={{ background: "#f0f7f2" }}>
// // //                   {["#", "Date", "Day", "Time Slots", "Status", "Actions"].map(h => (
// // //                     <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontSize: 13, fontWeight: 700, color: "#1a4a2e", borderBottom: "2px solid #d4edda" }}>{h}</th>
// // //                   ))}
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {filtered.length === 0 ? (
// // //                   <tr><td colSpan={6} style={{ textAlign: "center", padding: 40, color: "#888", fontSize: 14 }}>No availability records found.</td></tr>
// // //                 ) : (
// // //                   filtered.map((item, idx) => {
// // //                     const d = new Date(item.date + "T00:00:00");
// // //                     return (
// // //                       <tr key={item._id} style={{ borderBottom: "1px solid #eef4ee" }}
// // //                         onMouseOver={e => e.currentTarget.style.background = "#f8fdf8"}
// // //                         onMouseOut={e => e.currentTarget.style.background = "transparent"}>
// // //                         <td style={{ padding: "12px 14px", fontSize: 13, color: "#888" }}>{idx + 1}</td>
// // //                         <td style={{ padding: "12px 14px", fontSize: 14, fontWeight: 600, color: "#1a4a2e" }}>
// // //                           {d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
// // //                         </td>
// // //                         <td style={{ padding: "12px 14px", fontSize: 13, color: "#5a7a6a" }}>
// // //                           {d.toLocaleDateString("en-IN", { weekday: "long" })}
// // //                         </td>
// // //                         <td style={{ padding: "12px 14px" }}>
// // //                           <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
// // //                             {item.timeSlots.map((slot, i) => (
// // //                               <span key={i} style={{ background: "#e8f5ee", color: "#1a7a4a", borderRadius: 6, padding: "4px 10px", fontSize: 12, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 5 }}>
// // //                                 🕐 {slot.start} – {slot.end}
// // //                                 <span onClick={() => handleDeleteSlot(item._id, i)} title="Remove slot"
// // //                                   style={{ cursor: "pointer", color: "#c0392b", fontWeight: 800, fontSize: 15, lineHeight: 1, marginLeft: 2 }}>×</span>
// // //                               </span>
// // //                             ))}
// // //                           </div>
// // //                         </td>
// // //                         <td style={{ padding: "12px 14px" }}>
// // //                           <span style={{ background: "#d4edda", color: "#1a7a4a", borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 700 }}>✓ {item.status}</span>
// // //                         </td>
// // //                         <td style={{ padding: "12px 14px" }}>
// // //                           <div style={{ display: "flex", gap: 8 }}>
// // //                             <button onClick={() => setViewModal(item)}
// // //                               style={{ background: "#e8f5ee", border: "none", borderRadius: 7, padding: "7px 10px", cursor: "pointer", color: "#1a7a4a", fontSize: 14 }}>👁</button>
// // //                             <button onClick={() => setDeleteConfirm(item)}
// // //                               style={{ background: "#fdecea", border: "none", borderRadius: 7, padding: "7px 10px", cursor: "pointer", color: "#c0392b", fontSize: 14 }}>🗑</button>
// // //                           </div>
// // //                         </td>
// // //                       </tr>
// // //                     );
// // //                   })
// // //                 )}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* ADD MODAL */}
// // //       {addModal && (
// // //         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "12px" : "0" }}>
// // //           <div style={{ background: "#fff", borderRadius: 16, padding: isMobile ? 20 : 32, width: "100%", maxWidth: 740, boxShadow: "0 8px 48px rgba(0,0,0,0.2)", maxHeight: "90vh", overflowY: "auto" }}>
// // //             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
// // //               <h3 style={{ margin: 0, fontSize: isMobile ? 16 : 20, fontWeight: 700, color: "#1a4a2e" }}>📅 Set Mayor Availability</h3>
// // //               <button onClick={() => setAddModal(false)} style={{ background: "#f0f4f0", border: "none", borderRadius: 8, width: 36, height: 36, cursor: "pointer", fontSize: 18 }}>✕</button>
// // //             </div>

// // //             <div className="modal-grid">
// // //               {/* Calendar */}
// // //               <div>
// // //                 <h4 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#1a4a2e" }}>① Date Select करा</h4>
// // //                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
// // //                   <button onClick={prevModalMonth} style={{ background: "#f0f4f0", border: "none", borderRadius: 6, width: 32, height: 32, cursor: "pointer", fontSize: 16 }}>←</button>
// // //                   <span style={{ fontWeight: 700, fontSize: 15, color: "#1a4a2e" }}>{MONTHS[modalMonth]} {modalYear}</span>
// // //                   <button onClick={nextModalMonth} style={{ background: "#f0f4f0", border: "none", borderRadius: 6, width: 32, height: 32, cursor: "pointer", fontSize: 16 }}>→</button>
// // //                 </div>
// // //                 <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3, marginBottom: 6 }}>
// // //                   {DAYS.map(d => <div key={d} style={{ textAlign: "center", fontSize: 11, fontWeight: 700, color: "#5a7a6a" }}>{d}</div>)}
// // //                 </div>
// // //                 <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3 }}>
// // //                   {Array(getFirstDayOfMonth(modalYear, modalMonth)).fill(null).map((_, i) => <div key={"e" + i} />)}
// // //                   {Array(getDaysInMonth(modalYear, modalMonth)).fill(null).map((_, i) => {
// // //                     const day = i + 1;
// // //                     const dateStr = formatDate(modalYear, modalMonth, day);
// // //                     const isSelected = selectedDate === dateStr;
// // //                     const isMarked = markedDates.has(dateStr);
// // //                     const isPast = new Date(dateStr) < new Date(today.toDateString());
// // //                     return (
// // //                       <button key={day}
// // //                         onClick={() => { if (!isPast) { setSelectedDate(dateStr); setStartTime(""); setEndTime(""); } }}
// // //                         style={{
// // //                           border: "none", borderRadius: 7, padding: "7px 0", cursor: isPast ? "not-allowed" : "pointer",
// // //                           fontWeight: isSelected ? 700 : 500, fontSize: 12,
// // //                           background: isSelected ? "#1a7a4a" : isMarked ? "#d4edda" : "#f8faf8",
// // //                           color: isSelected ? "#fff" : isMarked ? "#1a7a4a" : isPast ? "#ccc" : "#1a4a2e",
// // //                           position: "relative", transition: "all 0.15s"
// // //                         }}>
// // //                         {day}
// // //                         {isMarked && !isSelected && (
// // //                           <span style={{ position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: "#1a7a4a", display: "block" }} />
// // //                         )}
// // //                       </button>
// // //                     );
// // //                   })}
// // //                 </div>
// // //                 {selectedDate && (
// // //                   <div style={{ marginTop: 12, padding: "9px 12px", background: "#e8f5ee", borderRadius: 8, fontSize: 12, color: "#1a4a2e", fontWeight: 600 }}>
// // //                     ✓ {displayDate(selectedDate)}
// // //                   </div>
// // //                 )}
// // //               </div>

// // //               {/* Time Slot Picker */}
// // //               <div>
// // //                 <h4 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#1a4a2e" }}>② Time Slot Select करा</h4>
// // //                 {!selectedDate ? (
// // //                   <div style={{ background: "#f8faf8", borderRadius: 10, padding: 24, textAlign: "center", color: "#aaa", fontSize: 13, border: "2px dashed #d0e0d0" }}>
// // //                     ← आधी date select करा
// // //                   </div>
// // //                 ) : (
// // //                   <>
// // //                     {availabilities.find(a => a.date === selectedDate)?.timeSlots.length > 0 && (
// // //                       <div style={{ marginBottom: 14, padding: "10px 12px", background: "#fff8e1", borderRadius: 8, fontSize: 12, color: "#b26a00" }}>
// // //                         <strong>⚠ Existing slots:</strong>
// // //                         <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 5 }}>
// // //                           {availabilities.find(a => a.date === selectedDate)?.timeSlots.map((s, i) => (
// // //                             <span key={i} style={{ background: "#ffe082", color: "#7a4a00", borderRadius: 6, padding: "3px 8px", fontSize: 12, fontWeight: 600 }}>
// // //                               {s.start} – {s.end}
// // //                             </span>
// // //                           ))}
// // //                         </div>
// // //                       </div>
// // //                     )}
// // //                     <div style={{ marginBottom: 16 }}>
// // //                       <label style={{ fontSize: 12, fontWeight: 700, color: "#5a7a6a", display: "block", marginBottom: 6 }}>START TIME</label>
// // //                       <select value={startTime} onChange={e => { setStartTime(e.target.value); setEndTime(""); }} style={selectStyle}>
// // //                         <option value="">-- Start Time निवडा --</option>
// // //                         {TIMES.slice(0, -1).map(t => <option key={t} value={t}>{t}</option>)}
// // //                       </select>
// // //                     </div>
// // //                     <div style={{ marginBottom: 16 }}>
// // //                       <label style={{ fontSize: 12, fontWeight: 700, color: "#5a7a6a", display: "block", marginBottom: 6 }}>END TIME</label>
// // //                       <select value={endTime} onChange={e => setEndTime(e.target.value)}
// // //                         style={{ ...selectStyle, opacity: startTime ? 1 : 0.5, cursor: startTime ? "pointer" : "not-allowed" }}
// // //                         disabled={!startTime}>
// // //                         <option value="">-- End Time निवडा --</option>
// // //                         {endTimeOptions.map(t => <option key={t} value={t}>{t}</option>)}
// // //                       </select>
// // //                     </div>
// // //                     {startTime && endTime && (
// // //                       <div style={{ padding: "14px 16px", background: "#e8f5ee", borderRadius: 10, border: "2px solid #1a7a4a" }}>
// // //                         <div style={{ fontSize: 11, color: "#5a7a6a", fontWeight: 700, marginBottom: 4, letterSpacing: 1 }}>SLOT PREVIEW</div>
// // //                         <div style={{ fontSize: isMobile ? 16 : 20, fontWeight: 700, color: "#1a4a2e" }}>🕐 {startTime} → {endTime}</div>
// // //                         <div style={{ fontSize: 12, color: "#5a7a6a", marginTop: 4 }}>Duration: {getDuration(startTime, endTime)}</div>
// // //                       </div>
// // //                     )}
// // //                   </>
// // //                 )}
// // //               </div>
// // //             </div>

// // //             <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
// // //               <button onClick={() => setAddModal(false)}
// // //                 style={{ flex: 1, background: "#f0f4f0", border: "none", borderRadius: 8, padding: "12px 0", fontWeight: 600, cursor: "pointer", color: "#1a4a2e", fontSize: 14 }}>
// // //                 Cancel
// // //               </button>
// // //               <button onClick={handleAddSlot} disabled={submitting}
// // //                 style={{ flex: 2, background: submitting ? "#888" : "#1a7a4a", color: "#fff", border: "none", borderRadius: 8, padding: "12px 0", fontWeight: 700, cursor: submitting ? "not-allowed" : "pointer", fontSize: 14 }}>
// // //                 {submitting ? "Adding..." : "+ Add Slot"}
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* VIEW MODAL */}
// // //       {viewModal && (
// // //         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "12px" : "0" }}>
// // //           <div style={{ background: "#fff", borderRadius: 14, padding: isMobile ? 20 : 32, width: "100%", maxWidth: 420, boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
// // //             <h3 style={{ margin: "0 0 20px", color: "#1a4a2e", fontSize: isMobile ? 16 : 18 }}>📅 Availability Details</h3>
// // //             <div style={{ marginBottom: 12 }}>
// // //               <span style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>DATE</span>
// // //               <p style={{ margin: "4px 0 0", fontWeight: 700, color: "#1a4a2e", fontSize: isMobile ? 13 : 15 }}>{displayDate(viewModal.date)}</p>
// // //             </div>
// // //             <div style={{ marginBottom: 20 }}>
// // //               <span style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>TIME SLOTS</span>
// // //               <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
// // //                 {viewModal.timeSlots.map((s, i) => (
// // //                   <div key={i} style={{ background: "#e8f5ee", borderRadius: 8, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
// // //                     <span style={{ fontSize: 16 }}>🕐</span>
// // //                     <span style={{ fontWeight: 700, color: "#1a4a2e", fontSize: isMobile ? 13 : 15 }}>{s.start} – {s.end}</span>
// // //                     <span style={{ fontSize: 12, color: "#5a7a6a", marginLeft: "auto" }}>{getDuration(s.start, s.end)}</span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //             <button onClick={() => setViewModal(null)}
// // //               style={{ width: "100%", background: "#1a7a4a", color: "#fff", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 700, cursor: "pointer", fontSize: 14 }}>
// // //               Close
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* DELETE MODAL */}
// // //       {deleteConfirm && (
// // //         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "12px" : "0" }}>
// // //           <div style={{ background: "#fff", borderRadius: 14, padding: isMobile ? 20 : 32, width: "100%", maxWidth: 380, boxShadow: "0 8px 40px rgba(0,0,0,0.2)", textAlign: "center" }}>
// // //             <div style={{ fontSize: 40, marginBottom: 12 }}>🗑</div>
// // //             <h3 style={{ margin: "0 0 8px", color: "#1a4a2e", fontSize: isMobile ? 16 : 18 }}>Delete Availability?</h3>
// // //             <p style={{ color: "#666", fontSize: isMobile ? 13 : 14, marginBottom: 24 }}>
// // //               <strong>{displayDate(deleteConfirm.date)}</strong> ची सर्व availability remove होईल.
// // //             </p>
// // //             <div style={{ display: "flex", gap: 12 }}>
// // //               <button onClick={() => setDeleteConfirm(null)}
// // //                 style={{ flex: 1, background: "#f0f4f0", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 600, cursor: "pointer", color: "#1a4a2e" }}>Cancel</button>
// // //               <button onClick={() => handleDeleteDate(deleteConfirm._id)}
// // //                 style={{ flex: 1, background: "#c0392b", color: "#fff", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 700, cursor: "pointer" }}>Delete</button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }




// // import { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import { toast } from "react-toastify";
// // // import { FiCalendar, FiClock, FiEye, FiTrash2, FiPlus, FiSearch, FiDownload } from "react-icons/fi";


// // // const BASE_URL = import.meta.env.VITE_FILE_BASE_URL || "http://localhost:5000";

// // // const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// // // const MONTHS = [
// // //   "January", "February", "March", "April", "May", "June",
// // //   "July", "August", "September", "October", "November", "December",
// // // ];

// // // const TIMES = [];
// // // for (let h = 7; h <= 20; h++) {
// // //   TIMES.push(`${String(h).padStart(2, "0")}:00`);
// // //   if (h < 20) TIMES.push(`${String(h).padStart(2, "0")}:30`);
// // // }

// // // function getDaysInMonth(year, month) {
// // //   return new Date(year, month + 1, 0).getDate();
// // // }
// // // function getFirstDayOfMonth(year, month) {
// // //   let d = new Date(year, month, 1).getDay();
// // //   return d === 0 ? 6 : d - 1;
// // // }
// // // function formatDate(y, m, d) {
// // //   return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
// // // }
// // // function displayDate(dateStr) {
// // //   const d = new Date(dateStr + "T00:00:00");
// // //   return d.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
// // // }
// // // function timeToMin(t) {
// // //   const [h, m] = t.split(":").map(Number);
// // //   return h * 60 + m;
// // // }
// // // function getDuration(start, end) {
// // //   const diff = timeToMin(end) - timeToMin(start);
// // //   return `${Math.floor(diff / 60)}h${diff % 60 > 0 ? " " + diff % 60 + "m" : ""}`;
// // // }

// // // export default function MayorAvailability() {
// // //   const today = new Date();
// // //   const [availabilities, setAvailabilities] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [submitting, setSubmitting] = useState(false);
// // //   const [search, setSearch] = useState("");
// // //   const [toast, setToast] = useState(null);
// // //   const [viewModal, setViewModal] = useState(null);
// // //   const [deleteConfirm, setDeleteConfirm] = useState(null);
// // //   const [addModal, setAddModal] = useState(false);
// // //   const [modalYear, setModalYear] = useState(today.getFullYear());
// // //   const [modalMonth, setModalMonth] = useState(today.getMonth());
// // //   const [selectedDate, setSelectedDate] = useState(null);
// // //   const [startTime, setStartTime] = useState("");
// // //   const [endTime, setEndTime] = useState("");
// // //   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

// // //   useEffect(() => {
// // //     const onResize = () => setIsMobile(window.innerWidth < 640);
// // //     window.addEventListener("resize", onResize);
// // //     return () => window.removeEventListener("resize", onResize);
// // //   }, []);

// // //   const showToast = (msg, type = "success") => {
// // //     setToast({ msg, type });
// // //     setTimeout(() => setToast(null), 3500);
// // //   };

// // //   const fetchAvailability = async () => {
// // //     try {
// // //       setLoading(true);
// // //       const res = await axios.get(`${BASE_URL}/api/availability/get`);
// // //       if (res.data.success) setAvailabilities(res.data.data);
// // //     } catch (err) {
// // //       showToast("Failed to load availability data", "error");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => { fetchAvailability(); }, []);

// // //   const markedDates = new Set(availabilities.map((a) => a.date));
// // //   const endTimeOptions = startTime ? TIMES.filter((t) => timeToMin(t) > timeToMin(startTime)) : [];

// // //   const handleAddSlot = async () => {
// // //     if (!selectedDate) return showToast("कृपया date select करा!", "error");
// // //     if (!startTime) return showToast("Start Time select करा!", "error");
// // //     if (!endTime) return showToast("End Time select करा!", "error");
// // //     try {
// // //       setSubmitting(true);
// // //       const res = await axios.post(`${BASE_URL}/api/availability/add-slot`, {
// // //         date: selectedDate, start: startTime, end: endTime,
// // //       });
// // //       if (res.data.success) {
// // //         showToast(`Slot ${startTime}–${endTime} added successfully!`);
// // //         await fetchAvailability();
// // //         setStartTime(""); setEndTime(""); setSelectedDate(null); setAddModal(false);
// // //       }
// // //     } catch (err) {
// // //       showToast(err.response?.data?.message || "Failed to add slot", "error");
// // //     } finally {
// // //       setSubmitting(false);
// // //     }
// // //   };

// // //   const handleDeleteSlot = async (dateId, slotIndex) => {
// // //     try {
// // //       const res = await axios.delete(`${BASE_URL}/api/availability/delete-slot/${dateId}`, { data: { slotIndex } });
// // //       if (res.data.success) { showToast("Slot removed.", "error"); await fetchAvailability(); }
// // //     } catch (err) { showToast("Failed to remove slot", "error"); }
// // //   };

// // //   const handleDeleteDate = async (id) => {
// // //     try {
// // //       const res = await axios.delete(`${BASE_URL}/api/availability/delete/${id}`);
// // //       if (res.data.success) { showToast("Availability removed.", "error"); setDeleteConfirm(null); await fetchAvailability(); }
// // //     } catch (err) { showToast("Failed to delete", "error"); }
// // //   };

// // //   const handleExportCSV = () => {
// // //     const csv = [
// // //       "Date,Start Time,End Time,Status",
// // //       ...availabilities.flatMap((a) =>
// // //         a.timeSlots.map((s) => `"${displayDate(a.date)}","${s.start}","${s.end}","${a.status}"`)
// // //       ),
// // //     ].join("\n");
// // //     const blob = new Blob([csv], { type: "text/csv" });
// // //     const url = URL.createObjectURL(blob);
// // //     const link = document.createElement("a");
// // //     link.href = url; link.download = "mayor_availability.csv"; link.click();
// // //   };

// // //   const filtered = availabilities.filter((a) =>
// // //     displayDate(a.date).toLowerCase().includes(search.toLowerCase())
// // //   );

// // //   const prevModalMonth = () => {
// // //     if (modalMonth === 0) { setModalMonth(11); setModalYear((y) => y - 1); }
// // //     else setModalMonth((m) => m - 1);
// // //   };
// // //   const nextModalMonth = () => {
// // //     if (modalMonth === 11) { setModalMonth(0); setModalYear((y) => y + 1); }
// // //     else setModalMonth((m) => m + 1);
// // //   };

// // //   const selectStyle = {
// // //     border: "1.5px solid #c8e0cc", borderRadius: 8, padding: "10px 12px",
// // //     fontSize: 14, color: "#1a4a2e", background: "#f8fdf8",
// // //     outline: "none", cursor: "pointer", width: "100%", fontWeight: 600,
// // //   };

// // //   return (
// // //     <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "linear-gradient(180deg, #F0F7F7 0%, #EAF4F5 100%)", minHeight: "100vh", padding: isMobile ? "16px 12px" : "24px" }}>

// // //       {/* Responsive styles */}
// // //       <style>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap');
// // //         @keyframes fadeIn { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }
// // //         .avail-table-wrap { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
// // //         .avail-table { width: 100%; border-collapse: separate; border-spacing: 0; min-width: 720px; }
// // //         .avail-card { background:#fff; border:1px solid #E3EFF0; border-radius:14px; padding:14px; margin-bottom:12px; box-shadow:0 2px 10px rgba(13,79,92,0.05); }
// // //         .avail-card-row { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px; }
// // //         .modal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
// // //         @media (max-width: 639px) {
// // //           .modal-grid { grid-template-columns: 1fr; gap: 20px; }
// // //         }

// // //         /* ── Body redesign (matches Meetings / Dashboard) ── */
// // //         .av-body, .av-body * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }
// // //         .av-eyebrow { display:flex; align-items:center; gap:10px; margin-bottom:14px; }
// // //         .av-eyebrow-line { height:2px; background:#E9A23B; border-radius:2px; }
// // //         .av-eyebrow-text { font-size:12.5px; font-weight:800; letter-spacing:1.4px; color:#E08A1E; text-transform:uppercase; white-space:nowrap; }
// // //         .av-head { display:flex; align-items:center; gap:14px; margin-bottom:18px; }
// // //         .av-head-icon { width:54px; height:54px; border-radius:14px; background:#fff; color:#187484; display:flex; align-items:center; justify-content:center; border:1px solid #E3EFF0; box-shadow:0 4px 14px rgba(13,79,92,0.10); flex-shrink:0; }
// // //         .av-title { margin:0 0 3px; font-size:26px; font-weight:800; color:#0d4f5c; letter-spacing:-0.3px; line-height:1.2; }
// // //         .av-subtitle { margin:0; font-size:13.5px; font-weight:500; color:#5f7f86; }
// // //         .av-btn-add { display:inline-flex; align-items:center; justify-content:center; gap:8px; font-size:14px; font-weight:800; color:#fff; background:linear-gradient(135deg,#1f8a9b 0%,#187484 55%,#0d4f5c 100%); border:none; border-radius:12px; padding:11px 22px; cursor:pointer; box-shadow:0 6px 16px rgba(24,116,132,0.28); transition:transform .15s, box-shadow .15s; }
// // //         .av-btn-add:hover { transform:translateY(-1px); box-shadow:0 8px 20px rgba(24,116,132,0.36); }
// // //         .av-btn-export { display:inline-flex; align-items:center; justify-content:center; gap:8px; font-size:14px; font-weight:800; color:#187484; background:#fff; border:1.5px solid #BFDDE1; border-radius:12px; padding:10px 20px; cursor:pointer; box-shadow:0 2px 8px rgba(13,79,92,0.06); transition:background .15s, border-color .15s; }
// // //         .av-btn-export:hover { background:#F2F9F9; border-color:#187484; }
// // //         .av-records-card { background:#fff; border:1px solid #E3EFF0; border-radius:16px; box-shadow:0 4px 20px rgba(13,79,92,0.06); }
// // //         .av-section-title { margin:0; font-size:17px; font-weight:800; color:#0d4f5c; display:flex; align-items:center; gap:10px; }
// // //         .av-section-bar { width:4px; height:22px; border-radius:3px; background:#E9A23B; display:inline-block; }
// // //         .av-count { background:#E3F4F1; color:#0d4f5c; border-radius:20px; padding:2px 10px; font-size:13px; font-weight:800; }
// // //         .av-search-wrap { position:relative; }
// // //         .av-search-icon { position:absolute; left:13px; top:50%; transform:translateY(-50%); color:#187484; pointer-events:none; }
// // //         .av-search { font-size:13.5px; font-weight:500; color:#24424a; background:#F2F9F9; border:1px solid #D6E9EB; border-radius:12px; padding:10px 14px 10px 38px; outline:none; transition:border-color .2s, box-shadow .2s, background .2s; }
// // //         .av-search::placeholder { color:#8AA6AB; }
// // //         .av-search:focus { border-color:#187484; background:#fff; box-shadow:0 0 0 3px rgba(24,116,132,0.12); }
// // //         .avail-table th { padding:13px 16px; text-align:left; font-size:12.5px; font-weight:800; color:#0d4f5c; background:#E4F1F2; text-transform:uppercase; letter-spacing:0.6px; white-space:nowrap; }
// // //         .avail-table th:first-child { border-radius:10px 0 0 10px; }
// // //         .avail-table th:last-child  { border-radius:0 10px 10px 0; }
// // //         .avail-table td { padding:12px 16px; border-bottom:1px solid #EEF5F6; vertical-align:middle; font-size:14px; color:#24424a; }
// // //         .avail-table tbody tr { transition:background .15s; }
// // //         .avail-table tbody tr:hover td { background:#F3FAFA; }
// // //         .avail-table tbody tr:last-child td { border-bottom:none; }
// // //         .av-date-badge { display:inline-flex; align-items:center; gap:8px; background:#EEF6F8; color:#0d4f5c; font-size:13.5px; font-weight:800; padding:6px 12px; border-radius:8px; white-space:nowrap; }
// // //         .av-date-badge svg { color:#187484; flex-shrink:0; }
// // //         .av-slot { display:inline-flex; align-items:center; gap:6px; background:#EEF6F8; color:#24424a; border:1px solid #DCEBEE; border-radius:8px; padding:5px 10px; font-size:12.5px; font-weight:700; white-space:nowrap; }
// // //         .av-slot svg { color:#187484; }
// // //         .av-slot-x { cursor:pointer; color:#C62F3B; font-weight:800; font-size:15px; line-height:1; margin-left:2px; }
// // //         .av-slot-x:hover { color:#8f1d27; }
// // //         .av-status { display:inline-flex; align-items:center; gap:5px; background:#E3F4F1; color:#0d6b5c; border-radius:20px; padding:5px 12px; font-size:12px; font-weight:800; white-space:nowrap; }
// // //         .av-btn-view { display:inline-flex; align-items:center; justify-content:center; gap:6px; font-size:13px; font-weight:700; color:#fff; background:linear-gradient(135deg,#1f8a9b 0%,#187484 55%,#0d4f5c 100%); border:none; border-radius:8px; padding:7px 14px; cursor:pointer; box-shadow:0 3px 10px rgba(24,116,132,0.22); transition:filter .15s, transform .15s; }
// // //         .av-btn-view:hover { filter:brightness(1.08); transform:translateY(-1px); }
// // //         .av-btn-delete { display:inline-flex; align-items:center; justify-content:center; gap:6px; font-size:13px; font-weight:700; background:#FDECEE; color:#C62F3B; border:1px solid #F8D5D9; border-radius:8px; padding:7px 14px; cursor:pointer; transition:background .15s; }
// // //         .av-btn-delete:hover { background:#FBDADE; }
// // //         @media (max-width: 639px) { .av-title { font-size:21px; } .av-head-icon { width:46px; height:46px; } }
// // //       `}</style>

// // //       {/* Toast */}
// // //       {toast && (
// // //         <div style={{
// // //           position: "fixed", top: 20, right: isMobile ? 12 : 20, left: isMobile ? 12 : "auto", zIndex: 9999,
// // //           background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
// // //           color: "#fff", padding: "12px 20px", borderRadius: 8,
// // //           boxShadow: "0 4px 16px rgba(0,0,0,0.2)", fontSize: 14, fontWeight: 600,
// // //           animation: "fadeIn 0.3s ease"
// // //         }}>{toast.msg}</div>
// // //       )}

// // //       <div className="av-body">
// // //       {/* Header */}
// // //       <div style={{ marginBottom: 20 }}>
// // //         <div className="av-head">
// // //           <div className="av-head-icon"><FiCalendar size={isMobile ? 21 : 24} /></div>
// // //           <div>
// // //             <h1 className="av-title">Mayor Availability</h1>
// // //             <p className="av-subtitle">Mayor च्या available dates व time slots manage करा</p>
// // //           </div>
// // //         </div>
// // //         <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
// // //           <button
// // //             className="av-btn-add"
// // //             onClick={() => { setSelectedDate(null); setStartTime(""); setEndTime(""); setModalYear(today.getFullYear()); setModalMonth(today.getMonth()); setAddModal(true); }}
// // //             style={{ flex: isMobile ? 1 : "none" }}
// // //           ><FiPlus size={17} /> Add Availability</button>
// // //           <button onClick={handleExportCSV} className="av-btn-export" style={{ flex: isMobile ? 1 : "none" }}
// // //           ><FiDownload size={16} /> Export CSV</button>
// // //         </div>
// // //       </div>

// // //       {/* Table / Cards */}
// // //       <div className="av-records-card" style={{ padding: isMobile ? 14 : 22 }}>
// // //         <div style={{ display: "flex", alignItems: isMobile ? "stretch" : "center", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", marginBottom: 16, gap: 12 }}>
// // //           <h3 className="av-section-title">
// // //             <span className="av-section-bar" />
// // //             Availability Records
// // //             <span className="av-count">{availabilities.length}</span>
// // //           </h3>
// // //           <div className="av-search-wrap" style={{ width: isMobile ? "100%" : "auto" }}>
// // //             <FiSearch className="av-search-icon" size={16} />
// // //             <input type="text" className="av-search" placeholder="Search by date..." value={search}
// // //               onChange={e => setSearch(e.target.value)}
// // //               style={{ width: isMobile ? "100%" : 300 }}
// // //             />
// // //           </div>
// // //         </div>

// // //         {loading ? (
// // //           <div style={{ textAlign: "center", padding: 60, color: "#5f7f86" }}>
// // //             <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
// // //             Loading availability...
// // //           </div>
// // //         ) : isMobile ? (
// // //           /* ── Mobile card view ── */
// // //           <div>
// // //             {filtered.length === 0 ? (
// // //               <div style={{ textAlign: "center", padding: 40, color: "#5f7f86", fontSize: 14 }}>No availability records found.</div>
// // //             ) : filtered.map((item, idx) => {
// // //               const d = new Date(item.date + "T00:00:00");
// // //               return (
// // //                 <div key={item._id} className="avail-card">
// // //                   <div className="avail-card-row">
// // //                     <div>
// // //                       <span className="av-date-badge">
// // //                         <FiCalendar size={14} />
// // //                         {d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
// // //                       </span>
// // //                       <div style={{ fontSize: 12, color: "#5f7f86", marginTop: 6, fontWeight: 600 }}>
// // //                         {d.toLocaleDateString("en-IN", { weekday: "long" })}
// // //                       </div>
// // //                     </div>
// // //                     <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
// // //                       <span className="av-status" style={{ fontSize: 11 }}>✓ {item.status}</span>
// // //                     </div>
// // //                   </div>
// // //                   <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
// // //                     {item.timeSlots.map((slot, i) => (
// // //                       <span key={i} className="av-slot">
// // //                         <FiClock size={13} /> {slot.start} – {slot.end}
// // //                         <span onClick={() => handleDeleteSlot(item._id, i)} title="Remove slot" className="av-slot-x">×</span>
// // //                       </span>
// // //                     ))}
// // //                   </div>
// // //                   <div style={{ display: "flex", gap: 8 }}>
// // //                     <button onClick={() => setViewModal(item)} className="av-btn-view" style={{ flex: 1 }}><FiEye size={15} /> View</button>
// // //                     <button onClick={() => setDeleteConfirm(item)} className="av-btn-delete" style={{ flex: 1 }}><FiTrash2 size={14} /> Delete</button>
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         ) : (
// // //           /* ── Desktop table view ── */
// // //           <div className="avail-table-wrap">
// // //             <table className="avail-table">
// // //               <thead>
// // //                 <tr>
// // //                   {["#", "Date", "Day", "Time Slots", "Status", "Actions"].map(h => (
// // //                     <th key={h}>{h}</th>
// // //                   ))}
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {filtered.length === 0 ? (
// // //                   <tr><td colSpan={6} style={{ textAlign: "center", padding: 40, color: "#5f7f86", fontSize: 14 }}>No availability records found.</td></tr>
// // //                 ) : (
// // //                   filtered.map((item, idx) => {
// // //                     const d = new Date(item.date + "T00:00:00");
// // //                     return (
// // //                       <tr key={item._id}>
// // //                         <td style={{ fontSize: 13.5, color: "#5f7f86", fontWeight: 700 }}>{idx + 1}</td>
// // //                         <td>
// // //                           <span className="av-date-badge">
// // //                             <FiCalendar size={15} />
// // //                             {d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
// // //                           </span>
// // //                         </td>
// // //                         <td style={{ fontSize: 13.5, color: "#5f7f86", fontWeight: 600 }}>
// // //                           {d.toLocaleDateString("en-IN", { weekday: "long" })}
// // //                         </td>
// // //                         <td>
// // //                           <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
// // //                             {item.timeSlots.map((slot, i) => (
// // //                               <span key={i} className="av-slot">
// // //                                 <FiClock size={14} /> {slot.start} – {slot.end}
// // //                                 <span onClick={() => handleDeleteSlot(item._id, i)} title="Remove slot" className="av-slot-x">×</span>
// // //                               </span>
// // //                             ))}
// // //                           </div>
// // //                         </td>
// // //                         <td>
// // //                           <span className="av-status">✓ {item.status}</span>
// // //                         </td>
// // //                         <td>
// // //                           <div style={{ display: "flex", gap: 8 }}>
// // //                             <button onClick={() => setViewModal(item)} className="av-btn-view" title="View" style={{ padding: "8px 11px" }}><FiEye size={15} /></button>
// // //                             <button onClick={() => setDeleteConfirm(item)} className="av-btn-delete" title="Delete" style={{ padding: "8px 11px" }}><FiTrash2 size={15} /></button>
// // //                           </div>
// // //                         </td>
// // //                       </tr>
// // //                     );
// // //                   })
// // //                 )}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         )}
// // //       </div>
// // //       </div>

// // //       {/* ADD MODAL */}
// // //       {addModal && (
// // //         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "12px" : "0" }}>
// // //           <div style={{ background: "#fff", borderRadius: 16, padding: isMobile ? 20 : 32, width: "100%", maxWidth: 740, boxShadow: "0 8px 48px rgba(0,0,0,0.2)", maxHeight: "90vh", overflowY: "auto" }}>
// // //             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
// // //               <h3 style={{ margin: 0, fontSize: isMobile ? 16 : 20, fontWeight: 700, color: "#1a4a2e" }}>📅 Set Mayor Availability</h3>
// // //               <button onClick={() => setAddModal(false)} style={{ background: "#f0f4f0", border: "none", borderRadius: 8, width: 36, height: 36, cursor: "pointer", fontSize: 18 }}>✕</button>
// // //             </div>

// // //             <div className="modal-grid">
// // //               {/* Calendar */}
// // //               <div>
// // //                 <h4 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#1a4a2e" }}>① Date Select करा</h4>
// // //                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
// // //                   <button onClick={prevModalMonth} style={{ background: "#f0f4f0", border: "none", borderRadius: 6, width: 32, height: 32, cursor: "pointer", fontSize: 16 }}>←</button>
// // //                   <span style={{ fontWeight: 700, fontSize: 15, color: "#1a4a2e" }}>{MONTHS[modalMonth]} {modalYear}</span>
// // //                   <button onClick={nextModalMonth} style={{ background: "#f0f4f0", border: "none", borderRadius: 6, width: 32, height: 32, cursor: "pointer", fontSize: 16 }}>→</button>
// // //                 </div>
// // //                 <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3, marginBottom: 6 }}>
// // //                   {DAYS.map(d => <div key={d} style={{ textAlign: "center", fontSize: 11, fontWeight: 700, color: "#5a7a6a" }}>{d}</div>)}
// // //                 </div>
// // //                 <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3 }}>
// // //                   {Array(getFirstDayOfMonth(modalYear, modalMonth)).fill(null).map((_, i) => <div key={"e" + i} />)}
// // //                   {Array(getDaysInMonth(modalYear, modalMonth)).fill(null).map((_, i) => {
// // //                     const day = i + 1;
// // //                     const dateStr = formatDate(modalYear, modalMonth, day);
// // //                     const isSelected = selectedDate === dateStr;
// // //                     const isMarked = markedDates.has(dateStr);
// // //                     const isPast = new Date(dateStr) < new Date(today.toDateString());
// // //                     return (
// // //                       <button key={day}
// // //                         onClick={() => { if (!isPast) { setSelectedDate(dateStr); setStartTime(""); setEndTime(""); } }}
// // //                         style={{
// // //                           border: "none", borderRadius: 7, padding: "7px 0", cursor: isPast ? "not-allowed" : "pointer",
// // //                           fontWeight: isSelected ? 700 : 500, fontSize: 12,
// // //                           background: isSelected ? "#1a7a4a" : isMarked ? "#d4edda" : "#f8faf8",
// // //                           color: isSelected ? "#fff" : isMarked ? "#1a7a4a" : isPast ? "#ccc" : "#1a4a2e",
// // //                           position: "relative", transition: "all 0.15s"
// // //                         }}>
// // //                         {day}
// // //                         {isMarked && !isSelected && (
// // //                           <span style={{ position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: "#1a7a4a", display: "block" }} />
// // //                         )}
// // //                       </button>
// // //                     );
// // //                   })}
// // //                 </div>
// // //                 {selectedDate && (
// // //                   <div style={{ marginTop: 12, padding: "9px 12px", background: "#e8f5ee", borderRadius: 8, fontSize: 12, color: "#1a4a2e", fontWeight: 600 }}>
// // //                     ✓ {displayDate(selectedDate)}
// // //                   </div>
// // //                 )}
// // //               </div>

// // //               {/* Time Slot Picker */}
// // //               <div>
// // //                 <h4 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#1a4a2e" }}>② Time Slot Select करा</h4>
// // //                 {!selectedDate ? (
// // //                   <div style={{ background: "#f8faf8", borderRadius: 10, padding: 24, textAlign: "center", color: "#aaa", fontSize: 13, border: "2px dashed #d0e0d0" }}>
// // //                     ← आधी date select करा
// // //                   </div>
// // //                 ) : (
// // //                   <>
// // //                     {availabilities.find(a => a.date === selectedDate)?.timeSlots.length > 0 && (
// // //                       <div style={{ marginBottom: 14, padding: "10px 12px", background: "#fff8e1", borderRadius: 8, fontSize: 12, color: "#b26a00" }}>
// // //                         <strong>⚠ Existing slots:</strong>
// // //                         <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 5 }}>
// // //                           {availabilities.find(a => a.date === selectedDate)?.timeSlots.map((s, i) => (
// // //                             <span key={i} style={{ background: "#ffe082", color: "#7a4a00", borderRadius: 6, padding: "3px 8px", fontSize: 12, fontWeight: 600 }}>
// // //                               {s.start} – {s.end}
// // //                             </span>
// // //                           ))}
// // //                         </div>
// // //                       </div>
// // //                     )}
// // //                     <div style={{ marginBottom: 16 }}>
// // //                       <label style={{ fontSize: 12, fontWeight: 700, color: "#5a7a6a", display: "block", marginBottom: 6 }}>START TIME</label>
// // //                       <select value={startTime} onChange={e => { setStartTime(e.target.value); setEndTime(""); }} style={selectStyle}>
// // //                         <option value="">-- Start Time निवडा --</option>
// // //                         {TIMES.slice(0, -1).map(t => <option key={t} value={t}>{t}</option>)}
// // //                       </select>
// // //                     </div>
// // //                     <div style={{ marginBottom: 16 }}>
// // //                       <label style={{ fontSize: 12, fontWeight: 700, color: "#5a7a6a", display: "block", marginBottom: 6 }}>END TIME</label>
// // //                       <select value={endTime} onChange={e => setEndTime(e.target.value)}
// // //                         style={{ ...selectStyle, opacity: startTime ? 1 : 0.5, cursor: startTime ? "pointer" : "not-allowed" }}
// // //                         disabled={!startTime}>
// // //                         <option value="">-- End Time निवडा --</option>
// // //                         {endTimeOptions.map(t => <option key={t} value={t}>{t}</option>)}
// // //                       </select>
// // //                     </div>
// // //                     {startTime && endTime && (
// // //                       <div style={{ padding: "14px 16px", background: "#e8f5ee", borderRadius: 10, border: "2px solid #1a7a4a" }}>
// // //                         <div style={{ fontSize: 11, color: "#5a7a6a", fontWeight: 700, marginBottom: 4, letterSpacing: 1 }}>SLOT PREVIEW</div>
// // //                         <div style={{ fontSize: isMobile ? 16 : 20, fontWeight: 700, color: "#1a4a2e" }}>🕐 {startTime} → {endTime}</div>
// // //                         <div style={{ fontSize: 12, color: "#5a7a6a", marginTop: 4 }}>Duration: {getDuration(startTime, endTime)}</div>
// // //                       </div>
// // //                     )}
// // //                   </>
// // //                 )}
// // //               </div>
// // //             </div>

// // //             <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
// // //               <button onClick={() => setAddModal(false)}
// // //                 style={{ flex: 1, background: "#f0f4f0", border: "none", borderRadius: 8, padding: "12px 0", fontWeight: 600, cursor: "pointer", color: "#1a4a2e", fontSize: 14 }}>
// // //                 Cancel
// // //               </button>
// // //               <button onClick={handleAddSlot} disabled={submitting}
// // //                 style={{ flex: 2, background: submitting ? "#888" : "#1a7a4a", color: "#fff", border: "none", borderRadius: 8, padding: "12px 0", fontWeight: 700, cursor: submitting ? "not-allowed" : "pointer", fontSize: 14 }}>
// // //                 {submitting ? "Adding..." : "+ Add Slot"}
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* VIEW MODAL */}
// // //       {viewModal && (
// // //         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "12px" : "0" }}>
// // //           <div style={{ background: "#fff", borderRadius: 14, padding: isMobile ? 20 : 32, width: "100%", maxWidth: 420, boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
// // //             <h3 style={{ margin: "0 0 20px", color: "#1a4a2e", fontSize: isMobile ? 16 : 18 }}>📅 Availability Details</h3>
// // //             <div style={{ marginBottom: 12 }}>
// // //               <span style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>DATE</span>
// // //               <p style={{ margin: "4px 0 0", fontWeight: 700, color: "#1a4a2e", fontSize: isMobile ? 13 : 15 }}>{displayDate(viewModal.date)}</p>
// // //             </div>
// // //             <div style={{ marginBottom: 20 }}>
// // //               <span style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>TIME SLOTS</span>
// // //               <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
// // //                 {viewModal.timeSlots.map((s, i) => (
// // //                   <div key={i} style={{ background: "#e8f5ee", borderRadius: 8, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
// // //                     <span style={{ fontSize: 16 }}>🕐</span>
// // //                     <span style={{ fontWeight: 700, color: "#1a4a2e", fontSize: isMobile ? 13 : 15 }}>{s.start} – {s.end}</span>
// // //                     <span style={{ fontSize: 12, color: "#5a7a6a", marginLeft: "auto" }}>{getDuration(s.start, s.end)}</span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //             <button onClick={() => setViewModal(null)}
// // //               style={{ width: "100%", background: "#1a7a4a", color: "#fff", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 700, cursor: "pointer", fontSize: 14 }}>
// // //               Close
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* DELETE MODAL */}
// // //       {deleteConfirm && (
// // //         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "12px" : "0" }}>
// // //           <div style={{ background: "#fff", borderRadius: 14, padding: isMobile ? 20 : 32, width: "100%", maxWidth: 380, boxShadow: "0 8px 40px rgba(0,0,0,0.2)", textAlign: "center" }}>
// // //             <div style={{ fontSize: 40, marginBottom: 12 }}>🗑</div>
// // //             <h3 style={{ margin: "0 0 8px", color: "#1a4a2e", fontSize: isMobile ? 16 : 18 }}>Delete Availability?</h3>
// // //             <p style={{ color: "#666", fontSize: isMobile ? 13 : 14, marginBottom: 24 }}>
// // //               <strong>{displayDate(deleteConfirm.date)}</strong> ची सर्व availability remove होईल.
// // //             </p>
// // //             <div style={{ display: "flex", gap: 12 }}>
// // //               <button onClick={() => setDeleteConfirm(null)}
// // //                 style={{ flex: 1, background: "#f0f4f0", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 600, cursor: "pointer", color: "#1a4a2e" }}>Cancel</button>
// // //               <button onClick={() => handleDeleteDate(deleteConfirm._id)}
// // //                 style={{ flex: 1, background: "#c0392b", color: "#fff", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 700, cursor: "pointer" }}>Delete</button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }





// // import axios from "axios";
// // import { toast } from "react-toastify";
// // import { FiCalendar, FiClock, FiEye, FiTrash2, FiPlus, FiSearch, FiDownload } from "react-icons/fi";
// // import backgroundJS from "../assets/jansamwadBg.png";


// // const BASE_URL = import.meta.env.VITE_FILE_BASE_URL || "http://localhost:5000";

// // const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// // const MONTHS = [
// //   "January", "February", "March", "April", "May", "June",
// //   "July", "August", "September", "October", "November", "December",
// // ];

// // const TIMES = [];
// // for (let h = 7; h <= 20; h++) {
// //   TIMES.push(`${String(h).padStart(2, "0")}:00`);
// //   if (h < 20) TIMES.push(`${String(h).padStart(2, "0")}:30`);
// // }

// // function getDaysInMonth(year, month) {
// //   return new Date(year, month + 1, 0).getDate();
// // }
// // function getFirstDayOfMonth(year, month) {
// //   let d = new Date(year, month, 1).getDay();
// //   return d === 0 ? 6 : d - 1;
// // }
// // function formatDate(y, m, d) {
// //   return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
// // }
// // function displayDate(dateStr) {
// //   const d = new Date(dateStr + "T00:00:00");
// //   return d.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
// // }
// // function timeToMin(t) {
// //   const [h, m] = t.split(":").map(Number);
// //   return h * 60 + m;
// // }
// // function getDuration(start, end) {
// //   const diff = timeToMin(end) - timeToMin(start);
// //   return `${Math.floor(diff / 60)}h${diff % 60 > 0 ? " " + diff % 60 + "m" : ""}`;
// // }

// // export default function MayorAvailability() {
// //   const today = new Date();
// //   const [availabilities, setAvailabilities] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [submitting, setSubmitting] = useState(false);
// //   const [search, setSearch] = useState("");
// //   const [toast, setToast] = useState(null);
// //   const [viewModal, setViewModal] = useState(null);
// //   const [deleteConfirm, setDeleteConfirm] = useState(null);
// //   const [addModal, setAddModal] = useState(false);
// //   const [modalYear, setModalYear] = useState(today.getFullYear());
// //   const [modalMonth, setModalMonth] = useState(today.getMonth());
// //   const [selectedDate, setSelectedDate] = useState(null);
// //   const [startTime, setStartTime] = useState("");
// //   const [endTime, setEndTime] = useState("");
// //   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

// //   useEffect(() => {
// //     const onResize = () => setIsMobile(window.innerWidth < 640);
// //     window.addEventListener("resize", onResize);
// //     return () => window.removeEventListener("resize", onResize);
// //   }, []);

// //   const showToast = (msg, type = "success") => {
// //     setToast({ msg, type });
// //     setTimeout(() => setToast(null), 3500);
// //   };

// //   const fetchAvailability = async () => {
// //     try {
// //       setLoading(true);
// //       const res = await axios.get(`${BASE_URL}/api/availability/get`);
// //       if (res.data.success) setAvailabilities(res.data.data);
// //     } catch (err) {
// //       showToast("Failed to load availability data", "error");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => { fetchAvailability(); }, []);

// //   const markedDates = new Set(availabilities.map((a) => a.date));
// //   const endTimeOptions = startTime ? TIMES.filter((t) => timeToMin(t) > timeToMin(startTime)) : [];

// //   const handleAddSlot = async () => {
// //     if (!selectedDate) return showToast("कृपया date select करा!", "error");
// //     if (!startTime) return showToast("Start Time select करा!", "error");
// //     if (!endTime) return showToast("End Time select करा!", "error");
// //     try {
// //       setSubmitting(true);
// //       const res = await axios.post(`${BASE_URL}/api/availability/add-slot`, {
// //         date: selectedDate, start: startTime, end: endTime,
// //       });
// //       if (res.data.success) {
// //         showToast(`Slot ${startTime}–${endTime} added successfully!`);
// //         await fetchAvailability();
// //         setStartTime(""); setEndTime(""); setSelectedDate(null); setAddModal(false);
// //       }
// //     } catch (err) {
// //       showToast(err.response?.data?.message || "Failed to add slot", "error");
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   const handleDeleteSlot = async (dateId, slotIndex) => {
// //     try {
// //       const res = await axios.delete(`${BASE_URL}/api/availability/delete-slot/${dateId}`, { data: { slotIndex } });
// //       if (res.data.success) { showToast("Slot removed.", "error"); await fetchAvailability(); }
// //     } catch (err) { showToast("Failed to remove slot", "error"); }
// //   };

// //   const handleDeleteDate = async (id) => {
// //     try {
// //       const res = await axios.delete(`${BASE_URL}/api/availability/delete/${id}`);
// //       if (res.data.success) { showToast("Availability removed.", "error"); setDeleteConfirm(null); await fetchAvailability(); }
// //     } catch (err) { showToast("Failed to delete", "error"); }
// //   };

// //   const handleExportCSV = () => {
// //     const csv = [
// //       "Date,Start Time,End Time,Status",
// //       ...availabilities.flatMap((a) =>
// //         a.timeSlots.map((s) => `"${displayDate(a.date)}","${s.start}","${s.end}","${a.status}"`)
// //       ),
// //     ].join("\n");
// //     const blob = new Blob([csv], { type: "text/csv" });
// //     const url = URL.createObjectURL(blob);
// //     const link = document.createElement("a");
// //     link.href = url; link.download = "mayor_availability.csv"; link.click();
// //   };

// //   const filtered = availabilities.filter((a) =>
// //     displayDate(a.date).toLowerCase().includes(search.toLowerCase())
// //   );

// //   const prevModalMonth = () => {
// //     if (modalMonth === 0) { setModalMonth(11); setModalYear((y) => y - 1); }
// //     else setModalMonth((m) => m - 1);
// //   };
// //   const nextModalMonth = () => {
// //     if (modalMonth === 11) { setModalMonth(0); setModalYear((y) => y + 1); }
// //     else setModalMonth((m) => m + 1);
// //   };

// //   const selectStyle = {
// //     border: "1.5px solid #c8e0cc", borderRadius: 8, padding: "10px 12px",
// //     fontSize: 14, color: "#1a4a2e", background: "#f8fdf8",
// //     outline: "none", cursor: "pointer", width: "100%", fontWeight: 600,
// //   };

// //   return (
// //     <div style={{
// //       fontFamily: "'Segoe UI', sans-serif",
// //       // ✅ Background image — Meetings page प्रमाणेच (content भागात पूर्ण बसते)
// //       // Image हलकी करायची असेल तर 0.15 वाढवा (उदा. 0.4), अजून ठळक हवी असेल तर 0 करा
// //       backgroundImage: `linear-gradient(180deg, rgba(240,247,247,0.15) 0%, rgba(234,244,245,0.15) 100%), url(${backgroundJS})`,
// //       backgroundSize: "cover",
// //       backgroundPosition: "top center",
// //       backgroundRepeat: "no-repeat",
// //       backgroundColor: "#EAF7F8",
// //       minHeight: "100vh",
// //       padding: isMobile ? "16px 12px" : "24px",
// //     }}>

// //       {/* Responsive styles */}
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap');
// //         @keyframes fadeIn { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }
// //         .avail-table-wrap { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
// //         .avail-table { width: 100%; border-collapse: separate; border-spacing: 0; min-width: 720px; }
// //         .avail-card { background:#fff; border:1px solid #E3EFF0; border-radius:14px; padding:14px; margin-bottom:12px; box-shadow:0 2px 10px rgba(13,79,92,0.05); }
// //         .avail-card-row { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px; }
// //         .modal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
// //         @media (max-width: 639px) {
// //           .modal-grid { grid-template-columns: 1fr; gap: 20px; }
// //         }

// //         /* ── Body redesign (matches Meetings / Dashboard) ── */
// //         .av-body, .av-body * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }
// //         .av-eyebrow { display:flex; align-items:center; gap:10px; margin-bottom:14px; }
// //         .av-eyebrow-line { height:2px; background:#E9A23B; border-radius:2px; }
// //         .av-eyebrow-text { font-size:12.5px; font-weight:800; letter-spacing:1.4px; color:#E08A1E; text-transform:uppercase; white-space:nowrap; }
// //         .av-head { display:flex; align-items:center; gap:14px; margin-bottom:18px; }
// //         .av-head-icon { width:54px; height:54px; border-radius:14px; background:#fff; color:#187484; display:flex; align-items:center; justify-content:center; border:1px solid #E3EFF0; box-shadow:0 4px 14px rgba(13,79,92,0.10); flex-shrink:0; }
// //         .av-title { margin:0 0 3px; font-size:26px; font-weight:800; color:#0d4f5c; letter-spacing:-0.3px; line-height:1.2; }
// //         .av-subtitle { margin:0; font-size:13.5px; font-weight:500; color:#5f7f86; }
// //         .av-btn-add { display:inline-flex; align-items:center; justify-content:center; gap:8px; font-size:14px; font-weight:800; color:#fff; background:linear-gradient(135deg,#1f8a9b 0%,#187484 55%,#0d4f5c 100%); border:none; border-radius:12px; padding:11px 22px; cursor:pointer; box-shadow:0 6px 16px rgba(24,116,132,0.28); transition:transform .15s, box-shadow .15s; }
// //         .av-btn-add:hover { transform:translateY(-1px); box-shadow:0 8px 20px rgba(24,116,132,0.36); }
// //         .av-btn-export { display:inline-flex; align-items:center; justify-content:center; gap:8px; font-size:14px; font-weight:800; color:#187484; background:#fff; border:1.5px solid #BFDDE1; border-radius:12px; padding:10px 20px; cursor:pointer; box-shadow:0 2px 8px rgba(13,79,92,0.06); transition:background .15s, border-color .15s; }
// //         .av-btn-export:hover { background:#F2F9F9; border-color:#187484; }
// //         .av-records-card { background:#fff; border:1px solid #E3EFF0; border-radius:16px; box-shadow:0 4px 20px rgba(13,79,92,0.06); }
// //         .av-section-title { margin:0; font-size:17px; font-weight:800; color:#0d4f5c; display:flex; align-items:center; gap:10px; }
// //         .av-section-bar { width:4px; height:22px; border-radius:3px; background:#E9A23B; display:inline-block; }
// //         .av-count { background:#E3F4F1; color:#0d4f5c; border-radius:20px; padding:2px 10px; font-size:13px; font-weight:800; }
// //         .av-search-wrap { position:relative; }
// //         .av-search-icon { position:absolute; left:13px; top:50%; transform:translateY(-50%); color:#187484; pointer-events:none; }
// //         .av-search { font-size:13.5px; font-weight:500; color:#24424a; background:#F2F9F9; border:1px solid #D6E9EB; border-radius:12px; padding:10px 14px 10px 38px; outline:none; transition:border-color .2s, box-shadow .2s, background .2s; }
// //         .av-search::placeholder { color:#8AA6AB; }
// //         .av-search:focus { border-color:#187484; background:#fff; box-shadow:0 0 0 3px rgba(24,116,132,0.12); }
// //         .avail-table th { padding:13px 16px; text-align:left; font-size:12.5px; font-weight:800; color:#0d4f5c; background:#E4F1F2; text-transform:uppercase; letter-spacing:0.6px; white-space:nowrap; }
// //         .avail-table th:first-child { border-radius:10px 0 0 10px; }
// //         .avail-table th:last-child  { border-radius:0 10px 10px 0; }
// //         .avail-table td { padding:12px 16px; border-bottom:1px solid #EEF5F6; vertical-align:middle; font-size:14px; color:#24424a; }
// //         .avail-table tbody tr { transition:background .15s; }
// //         .avail-table tbody tr:hover td { background:#F3FAFA; }
// //         .avail-table tbody tr:last-child td { border-bottom:none; }
// //         .av-date-badge { display:inline-flex; align-items:center; gap:8px; background:#EEF6F8; color:#0d4f5c; font-size:13.5px; font-weight:800; padding:6px 12px; border-radius:8px; white-space:nowrap; }
// //         .av-date-badge svg { color:#187484; flex-shrink:0; }
// //         .av-slot { display:inline-flex; align-items:center; gap:6px; background:#EEF6F8; color:#24424a; border:1px solid #DCEBEE; border-radius:8px; padding:5px 10px; font-size:12.5px; font-weight:700; white-space:nowrap; }
// //         .av-slot svg { color:#187484; }
// //         .av-slot-x { cursor:pointer; color:#C62F3B; font-weight:800; font-size:15px; line-height:1; margin-left:2px; }
// //         .av-slot-x:hover { color:#8f1d27; }
// //         .av-status { display:inline-flex; align-items:center; gap:5px; background:#E3F4F1; color:#0d6b5c; border-radius:20px; padding:5px 12px; font-size:12px; font-weight:800; white-space:nowrap; }
// //         .av-btn-view { display:inline-flex; align-items:center; justify-content:center; gap:6px; font-size:13px; font-weight:700; color:#fff; background:linear-gradient(135deg,#1f8a9b 0%,#187484 55%,#0d4f5c 100%); border:none; border-radius:8px; padding:7px 14px; cursor:pointer; box-shadow:0 3px 10px rgba(24,116,132,0.22); transition:filter .15s, transform .15s; }
// //         .av-btn-view:hover { filter:brightness(1.08); transform:translateY(-1px); }
// //         .av-btn-delete { display:inline-flex; align-items:center; justify-content:center; gap:6px; font-size:13px; font-weight:700; background:#FDECEE; color:#C62F3B; border:1px solid #F8D5D9; border-radius:8px; padding:7px 14px; cursor:pointer; transition:background .15s; }
// //         .av-btn-delete:hover { background:#FBDADE; }
// //         @media (max-width: 639px) { .av-title { font-size:21px; } .av-head-icon { width:46px; height:46px; } }
// //       `}</style>

// //       {/* Toast */}
// //       {toast && (
// //         <div style={{
// //           position: "fixed", top: 20, right: isMobile ? 12 : 20, left: isMobile ? 12 : "auto", zIndex: 9999,
// //           background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
// //           color: "#fff", padding: "12px 20px", borderRadius: 8,
// //           boxShadow: "0 4px 16px rgba(0,0,0,0.2)", fontSize: 14, fontWeight: 600,
// //           animation: "fadeIn 0.3s ease"
// //         }}>{toast.msg}</div>
// //       )}

// //       <div className="av-body">
// //       {/* Header */}
// //       <div style={{ marginBottom: 20 }}>
// //         <div className="av-head">
// //           <div className="av-head-icon"><FiCalendar size={isMobile ? 21 : 24} /></div>
// //           <div>
// //             <h1 className="av-title">Mayor Availability</h1>
// //             <p className="av-subtitle">Mayor च्या available dates व time slots manage करा</p>
// //           </div>
// //         </div>
// //         <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
// //           <button
// //             className="av-btn-add"
// //             onClick={() => { setSelectedDate(null); setStartTime(""); setEndTime(""); setModalYear(today.getFullYear()); setModalMonth(today.getMonth()); setAddModal(true); }}
// //             style={{ flex: isMobile ? 1 : "none" }}
// //           ><FiPlus size={17} /> Add Availability</button>
// //           <button onClick={handleExportCSV} className="av-btn-export" style={{ flex: isMobile ? 1 : "none" }}
// //           ><FiDownload size={16} /> Export CSV</button>
// //         </div>
// //       </div>

// //       {/* Table / Cards */}
// //       <div className="av-records-card" style={{ padding: isMobile ? 14 : 22 }}>
// //         <div style={{ display: "flex", alignItems: isMobile ? "stretch" : "center", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", marginBottom: 16, gap: 12 }}>
// //           <h3 className="av-section-title">
// //             <span className="av-section-bar" />
// //             Availability Records
// //             <span className="av-count">{availabilities.length}</span>
// //           </h3>
// //           <div className="av-search-wrap" style={{ width: isMobile ? "100%" : "auto" }}>
// //             <FiSearch className="av-search-icon" size={16} />
// //             <input type="text" className="av-search" placeholder="Search by date..." value={search}
// //               onChange={e => setSearch(e.target.value)}
// //               style={{ width: isMobile ? "100%" : 300 }}
// //             />
// //           </div>
// //         </div>

// //         {loading ? (
// //           <div style={{ textAlign: "center", padding: 60, color: "#5f7f86" }}>
// //             <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
// //             Loading availability...
// //           </div>
// //         ) : isMobile ? (
// //           /* ── Mobile card view ── */
// //           <div>
// //             {filtered.length === 0 ? (
// //               <div style={{ textAlign: "center", padding: 40, color: "#5f7f86", fontSize: 14 }}>No availability records found.</div>
// //             ) : filtered.map((item, idx) => {
// //               const d = new Date(item.date + "T00:00:00");
// //               return (
// //                 <div key={item._id} className="avail-card">
// //                   <div className="avail-card-row">
// //                     <div>
// //                       <span className="av-date-badge">
// //                         <FiCalendar size={14} />
// //                         {d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
// //                       </span>
// //                       <div style={{ fontSize: 12, color: "#5f7f86", marginTop: 6, fontWeight: 600 }}>
// //                         {d.toLocaleDateString("en-IN", { weekday: "long" })}
// //                       </div>
// //                     </div>
// //                     <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
// //                       <span className="av-status" style={{ fontSize: 11 }}>✓ {item.status}</span>
// //                     </div>
// //                   </div>
// //                   <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
// //                     {item.timeSlots.map((slot, i) => (
// //                       <span key={i} className="av-slot">
// //                         <FiClock size={13} /> {slot.start} – {slot.end}
// //                         <span onClick={() => handleDeleteSlot(item._id, i)} title="Remove slot" className="av-slot-x">×</span>
// //                       </span>
// //                     ))}
// //                   </div>
// //                   <div style={{ display: "flex", gap: 8 }}>
// //                     <button onClick={() => setViewModal(item)} className="av-btn-view" style={{ flex: 1 }}><FiEye size={15} /> View</button>
// //                     <button onClick={() => setDeleteConfirm(item)} className="av-btn-delete" style={{ flex: 1 }}><FiTrash2 size={14} /> Delete</button>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         ) : (
// //           /* ── Desktop table view ── */
// //           <div className="avail-table-wrap">
// //             <table className="avail-table">
// //               <thead>
// //                 <tr>
// //                   {["#", "Date", "Day", "Time Slots", "Status", "Actions"].map(h => (
// //                     <th key={h}>{h}</th>
// //                   ))}
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {filtered.length === 0 ? (
// //                   <tr><td colSpan={6} style={{ textAlign: "center", padding: 40, color: "#5f7f86", fontSize: 14 }}>No availability records found.</td></tr>
// //                 ) : (
// //                   filtered.map((item, idx) => {
// //                     const d = new Date(item.date + "T00:00:00");
// //                     return (
// //                       <tr key={item._id}>
// //                         <td style={{ fontSize: 13.5, color: "#5f7f86", fontWeight: 700 }}>{idx + 1}</td>
// //                         <td>
// //                           <span className="av-date-badge">
// //                             <FiCalendar size={15} />
// //                             {d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
// //                           </span>
// //                         </td>
// //                         <td style={{ fontSize: 13.5, color: "#5f7f86", fontWeight: 600 }}>
// //                           {d.toLocaleDateString("en-IN", { weekday: "long" })}
// //                         </td>
// //                         <td>
// //                           <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
// //                             {item.timeSlots.map((slot, i) => (
// //                               <span key={i} className="av-slot">
// //                                 <FiClock size={14} /> {slot.start} – {slot.end}
// //                                 <span onClick={() => handleDeleteSlot(item._id, i)} title="Remove slot" className="av-slot-x">×</span>
// //                               </span>
// //                             ))}
// //                           </div>
// //                         </td>
// //                         <td>
// //                           <span className="av-status">✓ {item.status}</span>
// //                         </td>
// //                         <td>
// //                           <div style={{ display: "flex", gap: 8 }}>
// //                             <button onClick={() => setViewModal(item)} className="av-btn-view" title="View" style={{ padding: "8px 11px" }}><FiEye size={15} /></button>
// //                             <button onClick={() => setDeleteConfirm(item)} className="av-btn-delete" title="Delete" style={{ padding: "8px 11px" }}><FiTrash2 size={15} /></button>
// //                           </div>
// //                         </td>
// //                       </tr>
// //                     );
// //                   })
// //                 )}
// //               </tbody>
// //             </table>
// //           </div>
// //         )}
// //       </div>
// //       </div>

// //       {/* ADD MODAL */}
// //       {addModal && (
// //         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "12px" : "0" }}>
// //           <div style={{ background: "#fff", borderRadius: 16, padding: isMobile ? 20 : 32, width: "100%", maxWidth: 740, boxShadow: "0 8px 48px rgba(0,0,0,0.2)", maxHeight: "90vh", overflowY: "auto" }}>
// //             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
// //               <h3 style={{ margin: 0, fontSize: isMobile ? 16 : 20, fontWeight: 700, color: "#1a4a2e" }}>📅 Set Mayor Availability</h3>
// //               <button onClick={() => setAddModal(false)} style={{ background: "#f0f4f0", border: "none", borderRadius: 8, width: 36, height: 36, cursor: "pointer", fontSize: 18 }}>✕</button>
// //             </div>

// //             <div className="modal-grid">
// //               {/* Calendar */}
// //               <div>
// //                 <h4 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#1a4a2e" }}>① Date Select करा</h4>
// //                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
// //                   <button onClick={prevModalMonth} style={{ background: "#f0f4f0", border: "none", borderRadius: 6, width: 32, height: 32, cursor: "pointer", fontSize: 16 }}>←</button>
// //                   <span style={{ fontWeight: 700, fontSize: 15, color: "#1a4a2e" }}>{MONTHS[modalMonth]} {modalYear}</span>
// //                   <button onClick={nextModalMonth} style={{ background: "#f0f4f0", border: "none", borderRadius: 6, width: 32, height: 32, cursor: "pointer", fontSize: 16 }}>→</button>
// //                 </div>
// //                 <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3, marginBottom: 6 }}>
// //                   {DAYS.map(d => <div key={d} style={{ textAlign: "center", fontSize: 11, fontWeight: 700, color: "#5a7a6a" }}>{d}</div>)}
// //                 </div>
// //                 <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3 }}>
// //                   {Array(getFirstDayOfMonth(modalYear, modalMonth)).fill(null).map((_, i) => <div key={"e" + i} />)}
// //                   {Array(getDaysInMonth(modalYear, modalMonth)).fill(null).map((_, i) => {
// //                     const day = i + 1;
// //                     const dateStr = formatDate(modalYear, modalMonth, day);
// //                     const isSelected = selectedDate === dateStr;
// //                     const isMarked = markedDates.has(dateStr);
// //                     const isPast = new Date(dateStr) < new Date(today.toDateString());
// //                     return (
// //                       <button key={day}
// //                         onClick={() => { if (!isPast) { setSelectedDate(dateStr); setStartTime(""); setEndTime(""); } }}
// //                         style={{
// //                           border: "none", borderRadius: 7, padding: "7px 0", cursor: isPast ? "not-allowed" : "pointer",
// //                           fontWeight: isSelected ? 700 : 500, fontSize: 12,
// //                           background: isSelected ? "#1a7a4a" : isMarked ? "#d4edda" : "#f8faf8",
// //                           color: isSelected ? "#fff" : isMarked ? "#1a7a4a" : isPast ? "#ccc" : "#1a4a2e",
// //                           position: "relative", transition: "all 0.15s"
// //                         }}>
// //                         {day}
// //                         {isMarked && !isSelected && (
// //                           <span style={{ position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: "#1a7a4a", display: "block" }} />
// //                         )}
// //                       </button>
// //                     );
// //                   })}
// //                 </div>
// //                 {selectedDate && (
// //                   <div style={{ marginTop: 12, padding: "9px 12px", background: "#e8f5ee", borderRadius: 8, fontSize: 12, color: "#1a4a2e", fontWeight: 600 }}>
// //                     ✓ {displayDate(selectedDate)}
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Time Slot Picker */}
// //               <div>
// //                 <h4 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#1a4a2e" }}>② Time Slot Select करा</h4>
// //                 {!selectedDate ? (
// //                   <div style={{ background: "#f8faf8", borderRadius: 10, padding: 24, textAlign: "center", color: "#aaa", fontSize: 13, border: "2px dashed #d0e0d0" }}>
// //                     ← आधी date select करा
// //                   </div>
// //                 ) : (
// //                   <>
// //                     {availabilities.find(a => a.date === selectedDate)?.timeSlots.length > 0 && (
// //                       <div style={{ marginBottom: 14, padding: "10px 12px", background: "#fff8e1", borderRadius: 8, fontSize: 12, color: "#b26a00" }}>
// //                         <strong>⚠ Existing slots:</strong>
// //                         <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 5 }}>
// //                           {availabilities.find(a => a.date === selectedDate)?.timeSlots.map((s, i) => (
// //                             <span key={i} style={{ background: "#ffe082", color: "#7a4a00", borderRadius: 6, padding: "3px 8px", fontSize: 12, fontWeight: 600 }}>
// //                               {s.start} – {s.end}
// //                             </span>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     )}
// //                     <div style={{ marginBottom: 16 }}>
// //                       <label style={{ fontSize: 12, fontWeight: 700, color: "#5a7a6a", display: "block", marginBottom: 6 }}>START TIME</label>
// //                       <select value={startTime} onChange={e => { setStartTime(e.target.value); setEndTime(""); }} style={selectStyle}>
// //                         <option value="">-- Start Time निवडा --</option>
// //                         {TIMES.slice(0, -1).map(t => <option key={t} value={t}>{t}</option>)}
// //                       </select>
// //                     </div>
// //                     <div style={{ marginBottom: 16 }}>
// //                       <label style={{ fontSize: 12, fontWeight: 700, color: "#5a7a6a", display: "block", marginBottom: 6 }}>END TIME</label>
// //                       <select value={endTime} onChange={e => setEndTime(e.target.value)}
// //                         style={{ ...selectStyle, opacity: startTime ? 1 : 0.5, cursor: startTime ? "pointer" : "not-allowed" }}
// //                         disabled={!startTime}>
// //                         <option value="">-- End Time निवडा --</option>
// //                         {endTimeOptions.map(t => <option key={t} value={t}>{t}</option>)}
// //                       </select>
// //                     </div>
// //                     {startTime && endTime && (
// //                       <div style={{ padding: "14px 16px", background: "#e8f5ee", borderRadius: 10, border: "2px solid #1a7a4a" }}>
// //                         <div style={{ fontSize: 11, color: "#5a7a6a", fontWeight: 700, marginBottom: 4, letterSpacing: 1 }}>SLOT PREVIEW</div>
// //                         <div style={{ fontSize: isMobile ? 16 : 20, fontWeight: 700, color: "#1a4a2e" }}>🕐 {startTime} → {endTime}</div>
// //                         <div style={{ fontSize: 12, color: "#5a7a6a", marginTop: 4 }}>Duration: {getDuration(startTime, endTime)}</div>
// //                       </div>
// //                     )}
// //                   </>
// //                 )}
// //               </div>
// //             </div>

// //             <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
// //               <button onClick={() => setAddModal(false)}
// //                 style={{ flex: 1, background: "#f0f4f0", border: "none", borderRadius: 8, padding: "12px 0", fontWeight: 600, cursor: "pointer", color: "#1a4a2e", fontSize: 14 }}>
// //                 Cancel
// //               </button>
// //               <button onClick={handleAddSlot} disabled={submitting}
// //                 style={{ flex: 2, background: submitting ? "#888" : "#1a7a4a", color: "#fff", border: "none", borderRadius: 8, padding: "12px 0", fontWeight: 700, cursor: submitting ? "not-allowed" : "pointer", fontSize: 14 }}>
// //                 {submitting ? "Adding..." : "+ Add Slot"}
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* VIEW MODAL */}
// //       {viewModal && (
// //         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "12px" : "0" }}>
// //           <div style={{ background: "#fff", borderRadius: 14, padding: isMobile ? 20 : 32, width: "100%", maxWidth: 420, boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
// //             <h3 style={{ margin: "0 0 20px", color: "#1a4a2e", fontSize: isMobile ? 16 : 18 }}>📅 Availability Details</h3>
// //             <div style={{ marginBottom: 12 }}>
// //               <span style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>DATE</span>
// //               <p style={{ margin: "4px 0 0", fontWeight: 700, color: "#1a4a2e", fontSize: isMobile ? 13 : 15 }}>{displayDate(viewModal.date)}</p>
// //             </div>
// //             <div style={{ marginBottom: 20 }}>
// //               <span style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>TIME SLOTS</span>
// //               <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
// //                 {viewModal.timeSlots.map((s, i) => (
// //                   <div key={i} style={{ background: "#e8f5ee", borderRadius: 8, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
// //                     <span style={{ fontSize: 16 }}>🕐</span>
// //                     <span style={{ fontWeight: 700, color: "#1a4a2e", fontSize: isMobile ? 13 : 15 }}>{s.start} – {s.end}</span>
// //                     <span style={{ fontSize: 12, color: "#5a7a6a", marginLeft: "auto" }}>{getDuration(s.start, s.end)}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //             <button onClick={() => setViewModal(null)}
// //               style={{ width: "100%", background: "#1a7a4a", color: "#fff", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 700, cursor: "pointer", fontSize: 14 }}>
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       {/* DELETE MODAL */}
// //       {deleteConfirm && (
// //         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "12px" : "0" }}>
// //           <div style={{ background: "#fff", borderRadius: 14, padding: isMobile ? 20 : 32, width: "100%", maxWidth: 380, boxShadow: "0 8px 40px rgba(0,0,0,0.2)", textAlign: "center" }}>
// //             <div style={{ fontSize: 40, marginBottom: 12 }}>🗑</div>
// //             <h3 style={{ margin: "0 0 8px", color: "#1a4a2e", fontSize: isMobile ? 16 : 18 }}>Delete Availability?</h3>
// //             <p style={{ color: "#666", fontSize: isMobile ? 13 : 14, marginBottom: 24 }}>
// //               <strong>{displayDate(deleteConfirm.date)}</strong> ची सर्व availability remove होईल.
// //             </p>
// //             <div style={{ display: "flex", gap: 12 }}>
// //               <button onClick={() => setDeleteConfirm(null)}
// //                 style={{ flex: 1, background: "#f0f4f0", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 600, cursor: "pointer", color: "#1a4a2e" }}>Cancel</button>
// //               <button onClick={() => handleDeleteDate(deleteConfirm._id)}
// //                 style={{ flex: 1, background: "#c0392b", color: "#fff", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 700, cursor: "pointer" }}>Delete</button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }




// import { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { FiCalendar, FiClock, FiEye, FiTrash2, FiPlus, FiSearch, FiDownload } from "react-icons/fi";
// import backgroundJS from "../assets/jansamwadBg.png";


// const BASE_URL = import.meta.env.VITE_FILE_BASE_URL || "http://localhost:5000";

// const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// const MONTHS = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December",
// ];

// const TIMES = [];
// for (let h = 7; h <= 20; h++) {
//   TIMES.push(`${String(h).padStart(2, "0")}:00`);
//   if (h < 20) TIMES.push(`${String(h).padStart(2, "0")}:30`);
// }

// function getDaysInMonth(year, month) {
//   return new Date(year, month + 1, 0).getDate();
// }
// function getFirstDayOfMonth(year, month) {
//   let d = new Date(year, month, 1).getDay();
//   return d === 0 ? 6 : d - 1;
// }
// function formatDate(y, m, d) {
//   return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
// }
// function displayDate(dateStr) {
//   const d = new Date(dateStr + "T00:00:00");
//   return d.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
// }
// function timeToMin(t) {
//   const [h, m] = t.split(":").map(Number);
//   return h * 60 + m;
// }
// function getDuration(start, end) {
//   const diff = timeToMin(end) - timeToMin(start);
//   return `${Math.floor(diff / 60)}h${diff % 60 > 0 ? " " + diff % 60 + "m" : ""}`;
// }

// export default function MayorAvailability() {
//   const today = new Date();
//   const [availabilities, setAvailabilities] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);
//   const [search, setSearch] = useState("");
//   const [toast, setToast] = useState(null);
//   const [viewModal, setViewModal] = useState(null);
//   const [deleteConfirm, setDeleteConfirm] = useState(null);
//   const [addModal, setAddModal] = useState(false);
//   const [modalYear, setModalYear] = useState(today.getFullYear());
//   const [modalMonth, setModalMonth] = useState(today.getMonth());
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

//   useEffect(() => {
//     const onResize = () => setIsMobile(window.innerWidth < 640);
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   const showToast = (msg, type = "success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3500);
//   };

//   const fetchAvailability = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`${BASE_URL}/api/availability/get`);
//       if (res.data.success) setAvailabilities(res.data.data);
//     } catch (err) {
//       showToast("Failed to load availability data", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { fetchAvailability(); }, []);

//   const markedDates = new Set(availabilities.map((a) => a.date));
//   const endTimeOptions = startTime ? TIMES.filter((t) => timeToMin(t) > timeToMin(startTime)) : [];

//   const handleAddSlot = async () => {
//     if (!selectedDate) return showToast("कृपया date select करा!", "error");
//     if (!startTime) return showToast("Start Time select करा!", "error");
//     if (!endTime) return showToast("End Time select करा!", "error");
//     try {
//       setSubmitting(true);
//       const res = await axios.post(`${BASE_URL}/api/availability/add-slot`, {
//         date: selectedDate, start: startTime, end: endTime,
//       });
//       if (res.data.success) {
//         showToast(`Slot ${startTime}–${endTime} added successfully!`);
//         await fetchAvailability();
//         setStartTime(""); setEndTime(""); setSelectedDate(null); setAddModal(false);
//       }
//     } catch (err) {
//       showToast(err.response?.data?.message || "Failed to add slot", "error");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const handleDeleteSlot = async (dateId, slotIndex) => {
//     try {
//       const res = await axios.delete(`${BASE_URL}/api/availability/delete-slot/${dateId}`, { data: { slotIndex } });
//       if (res.data.success) { showToast("Slot removed.", "error"); await fetchAvailability(); }
//     } catch (err) { showToast("Failed to remove slot", "error"); }
//   };

//   const handleDeleteDate = async (id) => {
//     try {
//       const res = await axios.delete(`${BASE_URL}/api/availability/delete/${id}`);
//       if (res.data.success) { showToast("Availability removed.", "error"); setDeleteConfirm(null); await fetchAvailability(); }
//     } catch (err) { showToast("Failed to delete", "error"); }
//   };

//   const handleExportCSV = () => {
//     const csv = [
//       "Date,Start Time,End Time,Status",
//       ...availabilities.flatMap((a) =>
//         a.timeSlots.map((s) => `"${displayDate(a.date)}","${s.start}","${s.end}","${a.status}"`)
//       ),
//     ].join("\n");
//     const blob = new Blob([csv], { type: "text/csv" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url; link.download = "mayor_availability.csv"; link.click();
//   };

//   const filtered = availabilities.filter((a) =>
//     displayDate(a.date).toLowerCase().includes(search.toLowerCase())
//   );

//   const prevModalMonth = () => {
//     if (modalMonth === 0) { setModalMonth(11); setModalYear((y) => y - 1); }
//     else setModalMonth((m) => m - 1);
//   };
//   const nextModalMonth = () => {
//     if (modalMonth === 11) { setModalMonth(0); setModalYear((y) => y + 1); }
//     else setModalMonth((m) => m + 1);
//   };

//   const selectStyle = {
//     border: "1px solid #D6E9EB", borderRadius: 10, padding: "10px 12px",
//     fontSize: 14, color: "#24424a", background: "#F2F9F9",
//     outline: "none", cursor: "pointer", width: "100%", fontWeight: 600,
//   };

//   return (
//     <div style={{
//       fontFamily: "'Segoe UI', sans-serif",
//       // ✅ Background image — Meetings page प्रमाणेच (content भागात पूर्ण बसते)
//       // Image हलकी करायची असेल तर 0.15 वाढवा (उदा. 0.4), अजून ठळक हवी असेल तर 0 करा
//       backgroundImage: `linear-gradient(180deg, rgba(240,247,247,0.15) 0%, rgba(234,244,245,0.15) 100%), url(${backgroundJS})`,
//       backgroundSize: "cover",
//       backgroundPosition: "top center",
//       backgroundRepeat: "no-repeat",
//       backgroundColor: "#EAF7F8",
//       minHeight: "100vh",
//       padding: isMobile ? "16px 12px" : "24px",
//     }}>

//       {/* Responsive styles */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap');
//         @keyframes fadeIn { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }
//         .avail-table-wrap { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
//         .avail-table { width: 100%; border-collapse: separate; border-spacing: 0; min-width: 720px; }
//         .avail-card { background:#fff; border:1px solid #E3EFF0; border-radius:14px; padding:14px; margin-bottom:12px; box-shadow:0 2px 10px rgba(13,79,92,0.05); }
//         .avail-card-row { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px; }
//         .modal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
//         @media (max-width: 639px) {
//           .modal-grid { grid-template-columns: 1fr; gap: 20px; }
//         }

//         /* ── Body redesign (matches Meetings / Dashboard) ── */
//         .av-body, .av-body * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }
//         .av-eyebrow { display:flex; align-items:center; gap:10px; margin-bottom:14px; }
//         .av-eyebrow-line { height:2px; background:#E9A23B; border-radius:2px; }
//         .av-eyebrow-text { font-size:12.5px; font-weight:800; letter-spacing:1.4px; color:#E08A1E; text-transform:uppercase; white-space:nowrap; }
//         .av-head { display:flex; align-items:center; gap:14px; margin-bottom:18px; }
//         .av-head-icon { width:54px; height:54px; border-radius:14px; background:#fff; color:#187484; display:flex; align-items:center; justify-content:center; border:1px solid #E3EFF0; box-shadow:0 4px 14px rgba(13,79,92,0.10); flex-shrink:0; }
//         .av-title { margin:0 0 3px; font-size:26px; font-weight:800; color:#0d4f5c; letter-spacing:-0.3px; line-height:1.2; }
//         .av-subtitle { margin:0; font-size:13.5px; font-weight:500; color:#5f7f86; }
//         .av-btn-add { display:inline-flex; align-items:center; justify-content:center; gap:8px; font-size:14px; font-weight:800; color:#fff; background:linear-gradient(135deg,#1f8a9b 0%,#187484 55%,#0d4f5c 100%); border:none; border-radius:12px; padding:11px 22px; cursor:pointer; box-shadow:0 6px 16px rgba(24,116,132,0.28); transition:transform .15s, box-shadow .15s; }
//         .av-btn-add:hover { transform:translateY(-1px); box-shadow:0 8px 20px rgba(24,116,132,0.36); }
//         .av-btn-export { display:inline-flex; align-items:center; justify-content:center; gap:8px; font-size:14px; font-weight:800; color:#187484; background:#fff; border:1.5px solid #BFDDE1; border-radius:12px; padding:10px 20px; cursor:pointer; box-shadow:0 2px 8px rgba(13,79,92,0.06); transition:background .15s, border-color .15s; }
//         .av-btn-export:hover { background:#F2F9F9; border-color:#187484; }
//         .av-records-card { background:#fff; border:1px solid #E3EFF0; border-radius:16px; box-shadow:0 4px 20px rgba(13,79,92,0.06); }
//         .av-section-title { margin:0; font-size:17px; font-weight:800; color:#0d4f5c; display:flex; align-items:center; gap:10px; }
//         .av-section-bar { width:4px; height:22px; border-radius:3px; background:#E9A23B; display:inline-block; }
//         .av-count { background:#E3F4F1; color:#0d4f5c; border-radius:20px; padding:2px 10px; font-size:13px; font-weight:800; }
//         .av-search-wrap { position:relative; }
//         .av-search-icon { position:absolute; left:13px; top:50%; transform:translateY(-50%); color:#187484; pointer-events:none; }
//         .av-search { font-size:13.5px; font-weight:500; color:#24424a; background:#F2F9F9; border:1px solid #D6E9EB; border-radius:12px; padding:10px 14px 10px 38px; outline:none; transition:border-color .2s, box-shadow .2s, background .2s; }
//         .av-search::placeholder { color:#8AA6AB; }
//         .av-search:focus { border-color:#187484; background:#fff; box-shadow:0 0 0 3px rgba(24,116,132,0.12); }
//         .avail-table th { padding:13px 16px; text-align:left; font-size:12.5px; font-weight:800; color:#0d4f5c; background:#E4F1F2; text-transform:uppercase; letter-spacing:0.6px; white-space:nowrap; }
//         .avail-table th:first-child { border-radius:10px 0 0 10px; }
//         .avail-table th:last-child  { border-radius:0 10px 10px 0; }
//         .avail-table td { padding:12px 16px; border-bottom:1px solid #EEF5F6; vertical-align:middle; font-size:14px; color:#24424a; }
//         .avail-table tbody tr { transition:background .15s; }
//         .avail-table tbody tr:hover td { background:#F3FAFA; }
//         .avail-table tbody tr:last-child td { border-bottom:none; }
//         .av-date-badge { display:inline-flex; align-items:center; gap:8px; background:#EEF6F8; color:#0d4f5c; font-size:13.5px; font-weight:800; padding:6px 12px; border-radius:8px; white-space:nowrap; }
//         .av-date-badge svg { color:#187484; flex-shrink:0; }
//         .av-slot { display:inline-flex; align-items:center; gap:6px; background:#EEF6F8; color:#24424a; border:1px solid #DCEBEE; border-radius:8px; padding:5px 10px; font-size:12.5px; font-weight:700; white-space:nowrap; }
//         .av-slot svg { color:#187484; }
//         .av-slot-x { cursor:pointer; color:#C62F3B; font-weight:800; font-size:15px; line-height:1; margin-left:2px; }
//         .av-slot-x:hover { color:#8f1d27; }
//         .av-status { display:inline-flex; align-items:center; gap:5px; background:#E3F4F1; color:#0d6b5c; border-radius:20px; padding:5px 12px; font-size:12px; font-weight:800; white-space:nowrap; }
//         .av-btn-view { display:inline-flex; align-items:center; justify-content:center; gap:6px; font-size:13px; font-weight:700; color:#fff; background:linear-gradient(135deg,#1f8a9b 0%,#187484 55%,#0d4f5c 100%); border:none; border-radius:8px; padding:7px 14px; cursor:pointer; box-shadow:0 3px 10px rgba(24,116,132,0.22); transition:filter .15s, transform .15s; }
//         .av-btn-view:hover { filter:brightness(1.08); transform:translateY(-1px); }
//         .av-btn-delete { display:inline-flex; align-items:center; justify-content:center; gap:6px; font-size:13px; font-weight:700; background:#FDECEE; color:#C62F3B; border:1px solid #F8D5D9; border-radius:8px; padding:7px 14px; cursor:pointer; transition:background .15s; }
//         .av-btn-delete:hover { background:#FBDADE; }
//         @media (max-width: 639px) { .av-title { font-size:21px; } .av-head-icon { width:46px; height:46px; } }

//         /* ── Set Mayor Availability modal — Create Meeting modal सारखा teal theme ── */
//         .avm-box, .avm-box * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }
//         .avm-box { border:1px solid #E3EFF0; box-shadow:0 20px 60px rgba(13,79,92,0.22) !important; }
//         .avm-head { padding-bottom:14px; border-bottom:1px solid #E3EFF0; }
//         .avm-title { margin:0; font-weight:800; color:#0d4f5c; display:flex; align-items:center; gap:10px; }
//         .avm-title::before { content:""; width:4px; height:20px; border-radius:3px; background:#E9A23B; display:inline-block; }
//         .avm-close { width:32px; height:32px; border-radius:8px; background:#F2F9F9; color:#5f7f86; border:1px solid #D6E9EB; display:flex; align-items:center; justify-content:center; font-size:15px; cursor:pointer; transition:background .15s, color .15s; }
//         .avm-close:hover { background:#FDECEE; color:#C62F3B; border-color:#F8D5D9; }
//         .avm-step { margin:0 0 14px; font-size:14px; font-weight:800; color:#0d4f5c; }
//         .avm-nav { width:32px; height:32px; border-radius:8px; background:#fff; color:#187484; border:1px solid #BFDDE1; cursor:pointer; font-size:16px; transition:background .15s, border-color .15s; }
//         .avm-nav:hover { background:#E3F4F1; border-color:#187484; }
//         .avm-month { font-weight:800; font-size:15px; color:#0d4f5c; }
//         .avm-dow { text-align:center; font-size:11px; font-weight:800; color:#5f7f86; text-transform:uppercase; letter-spacing:0.3px; }
//         .avm-label { font-size:12px; font-weight:700; color:#0d4f5c; display:block; margin-bottom:6px; }
//         .avm-box select:focus { border-color:#187484 !important; background:#fff !important; box-shadow:0 0 0 3px rgba(24,116,132,0.12); }
//         .avm-btn-cancel { flex:1; background:#fff; color:#187484; border:1.5px solid #BFDDE1; border-radius:10px; padding:12px 0; font-weight:700; font-size:14px; cursor:pointer; transition:background .15s, border-color .15s; }
//         .avm-btn-cancel:hover { background:#F2F9F9; border-color:#187484; }
//         .avm-btn-save { flex:2; color:#fff; border:none; border-radius:10px; padding:12px 0; font-weight:800; font-size:14px; background:linear-gradient(135deg, #1f8a9b 0%, #187484 55%, #0d4f5c 100%); box-shadow:0 6px 16px rgba(24,116,132,0.28); cursor:pointer; transition:transform .15s, box-shadow .15s; }
//         .avm-btn-save:hover:not(:disabled) { transform:translateY(-1px); box-shadow:0 8px 20px rgba(24,116,132,0.36); }
//         .avm-btn-save:disabled { background:#888; box-shadow:none; cursor:not-allowed; }
//       `}</style>

//       {/* Toast */}
//       {toast && (
//         <div style={{
//           position: "fixed", top: 20, right: isMobile ? 12 : 20, left: isMobile ? 12 : "auto", zIndex: 9999,
//           background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
//           color: "#fff", padding: "12px 20px", borderRadius: 8,
//           boxShadow: "0 4px 16px rgba(0,0,0,0.2)", fontSize: 14, fontWeight: 600,
//           animation: "fadeIn 0.3s ease"
//         }}>{toast.msg}</div>
//       )}

//       <div className="av-body">
//       {/* Header */}
//       <div style={{ marginBottom: 20 }}>
//         <div className="av-head">
//           <div className="av-head-icon"><FiCalendar size={isMobile ? 21 : 24} /></div>
//           <div>
//             <h1 className="av-title">Mayor Availability</h1>
//             <p className="av-subtitle">Mayor च्या available dates व time slots manage करा</p>
//           </div>
//         </div>
//         <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
//           <button
//             className="av-btn-add"
//             onClick={() => { setSelectedDate(null); setStartTime(""); setEndTime(""); setModalYear(today.getFullYear()); setModalMonth(today.getMonth()); setAddModal(true); }}
//             style={{ flex: isMobile ? 1 : "none" }}
//           ><FiPlus size={17} /> Add Availability</button>
//           <button onClick={handleExportCSV} className="av-btn-export" style={{ flex: isMobile ? 1 : "none" }}
//           ><FiDownload size={16} /> Export CSV</button>
//         </div>
//       </div>

//       {/* Table / Cards */}
//       <div className="av-records-card" style={{ padding: isMobile ? 14 : 22 }}>
//         <div style={{ display: "flex", alignItems: isMobile ? "stretch" : "center", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", marginBottom: 16, gap: 12 }}>
//           <h3 className="av-section-title">
//             <span className="av-section-bar" />
//             Availability Records
//             <span className="av-count">{availabilities.length}</span>
//           </h3>
//           <div className="av-search-wrap" style={{ width: isMobile ? "100%" : "auto" }}>
//             <FiSearch className="av-search-icon" size={16} />
//             <input type="text" className="av-search" placeholder="Search by date..." value={search}
//               onChange={e => setSearch(e.target.value)}
//               style={{ width: isMobile ? "100%" : 300 }}
//             />
//           </div>
//         </div>

//         {loading ? (
//           <div style={{ textAlign: "center", padding: 60, color: "#5f7f86" }}>
//             <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
//             Loading availability...
//           </div>
//         ) : isMobile ? (
//           /* ── Mobile card view ── */
//           <div>
//             {filtered.length === 0 ? (
//               <div style={{ textAlign: "center", padding: 40, color: "#5f7f86", fontSize: 14 }}>No availability records found.</div>
//             ) : filtered.map((item, idx) => {
//               const d = new Date(item.date + "T00:00:00");
//               return (
//                 <div key={item._id} className="avail-card">
//                   <div className="avail-card-row">
//                     <div>
//                       <span className="av-date-badge">
//                         <FiCalendar size={14} />
//                         {d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
//                       </span>
//                       <div style={{ fontSize: 12, color: "#5f7f86", marginTop: 6, fontWeight: 600 }}>
//                         {d.toLocaleDateString("en-IN", { weekday: "long" })}
//                       </div>
//                     </div>
//                     <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//                       <span className="av-status" style={{ fontSize: 11 }}>✓ {item.status}</span>
//                     </div>
//                   </div>
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
//                     {item.timeSlots.map((slot, i) => (
//                       <span key={i} className="av-slot">
//                         <FiClock size={13} /> {slot.start} – {slot.end}
//                         <span onClick={() => handleDeleteSlot(item._id, i)} title="Remove slot" className="av-slot-x">×</span>
//                       </span>
//                     ))}
//                   </div>
//                   <div style={{ display: "flex", gap: 8 }}>
//                     <button onClick={() => setViewModal(item)} className="av-btn-view" style={{ flex: 1 }}><FiEye size={15} /> View</button>
//                     <button onClick={() => setDeleteConfirm(item)} className="av-btn-delete" style={{ flex: 1 }}><FiTrash2 size={14} /> Delete</button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           /* ── Desktop table view ── */
//           <div className="avail-table-wrap">
//             <table className="avail-table">
//               <thead>
//                 <tr>
//                   {["#", "Date", "Day", "Time Slots", "Status", "Actions"].map(h => (
//                     <th key={h}>{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {filtered.length === 0 ? (
//                   <tr><td colSpan={6} style={{ textAlign: "center", padding: 40, color: "#5f7f86", fontSize: 14 }}>No availability records found.</td></tr>
//                 ) : (
//                   filtered.map((item, idx) => {
//                     const d = new Date(item.date + "T00:00:00");
//                     return (
//                       <tr key={item._id}>
//                         <td style={{ fontSize: 13.5, color: "#5f7f86", fontWeight: 700 }}>{idx + 1}</td>
//                         <td>
//                           <span className="av-date-badge">
//                             <FiCalendar size={15} />
//                             {d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
//                           </span>
//                         </td>
//                         <td style={{ fontSize: 13.5, color: "#5f7f86", fontWeight: 600 }}>
//                           {d.toLocaleDateString("en-IN", { weekday: "long" })}
//                         </td>
//                         <td>
//                           <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
//                             {item.timeSlots.map((slot, i) => (
//                               <span key={i} className="av-slot">
//                                 <FiClock size={14} /> {slot.start} – {slot.end}
//                                 <span onClick={() => handleDeleteSlot(item._id, i)} title="Remove slot" className="av-slot-x">×</span>
//                               </span>
//                             ))}
//                           </div>
//                         </td>
//                         <td>
//                           <span className="av-status">✓ {item.status}</span>
//                         </td>
//                         <td>
//                           <div style={{ display: "flex", gap: 8 }}>
//                             <button onClick={() => setViewModal(item)} className="av-btn-view" title="View" style={{ padding: "8px 11px" }}><FiEye size={15} /></button>
//                             <button onClick={() => setDeleteConfirm(item)} className="av-btn-delete" title="Delete" style={{ padding: "8px 11px" }}><FiTrash2 size={15} /></button>
//                           </div>
//                         </td>
//                       </tr>
//                     );
//                   })
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//       </div>

//       {/* ADD MODAL */}
//       {addModal && (
//         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "12px" : "0" }}>
//           <div className="avm-box" style={{ background: "#fff", borderRadius: 16, padding: isMobile ? 20 : 28, width: "100%", maxWidth: 740, maxHeight: "90vh", overflowY: "auto" }}>
//             <div className="avm-head" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
//               <h3 className="avm-title" style={{ fontSize: isMobile ? 16 : 18 }}>Set Mayor Availability</h3>
//               <button className="avm-close" onClick={() => setAddModal(false)}>✕</button>
//             </div>

//             <div className="modal-grid">
//               {/* Calendar */}
//               <div>
//                 <h4 className="avm-step">① Date Select करा</h4>
//                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
//                   <button className="avm-nav" onClick={prevModalMonth}>←</button>
//                   <span className="avm-month">{MONTHS[modalMonth]} {modalYear}</span>
//                   <button className="avm-nav" onClick={nextModalMonth}>→</button>
//                 </div>
//                 <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3, marginBottom: 6 }}>
//                   {DAYS.map(d => <div key={d} className="avm-dow">{d}</div>)}
//                 </div>
//                 <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3 }}>
//                   {Array(getFirstDayOfMonth(modalYear, modalMonth)).fill(null).map((_, i) => <div key={"e" + i} />)}
//                   {Array(getDaysInMonth(modalYear, modalMonth)).fill(null).map((_, i) => {
//                     const day = i + 1;
//                     const dateStr = formatDate(modalYear, modalMonth, day);
//                     const isSelected = selectedDate === dateStr;
//                     const isMarked = markedDates.has(dateStr);
//                     const isPast = new Date(dateStr) < new Date(today.toDateString());
//                     return (
//                       <button key={day}
//                         onClick={() => { if (!isPast) { setSelectedDate(dateStr); setStartTime(""); setEndTime(""); } }}
//                         style={{
//                           border: isSelected ? "1px solid transparent" : isMarked ? "1px solid #BFDDE1" : "1px solid #EEF5F6",
//                           borderRadius: 8, padding: "7px 0", cursor: isPast ? "not-allowed" : "pointer",
//                           fontWeight: isSelected ? 800 : 600, fontSize: 12,
//                           background: isSelected ? "linear-gradient(135deg, #1f8a9b 0%, #187484 55%, #0d4f5c 100%)" : isMarked ? "#E3F4F1" : "#F2F9F9",
//                           color: isSelected ? "#fff" : isMarked ? "#187484" : isPast ? "#BCCFD2" : "#0d4f5c",
//                           boxShadow: isSelected ? "0 4px 10px rgba(24,116,132,0.28)" : "none",
//                           position: "relative", transition: "all 0.15s"
//                         }}>
//                         {day}
//                         {isMarked && !isSelected && (
//                           <span style={{ position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: "#187484", display: "block" }} />
//                         )}
//                       </button>
//                     );
//                   })}
//                 </div>
//                 {selectedDate && (
//                   <div style={{ marginTop: 12, padding: "9px 12px", background: "#E3F4F1", border: "1px solid #BFDDE1", borderRadius: 10, fontSize: 12.5, color: "#0d4f5c", fontWeight: 700 }}>
//                     ✓ {displayDate(selectedDate)}
//                   </div>
//                 )}
//               </div>

//               {/* Time Slot Picker */}
//               <div>
//                 <h4 className="avm-step">② Time Slot Select करा</h4>
//                 {!selectedDate ? (
//                   <div style={{ background: "#F2F9F9", borderRadius: 10, padding: 24, textAlign: "center", color: "#8AA6AB", fontSize: 13, fontWeight: 600, border: "1.5px dashed #BFDDE1" }}>
//                     ← आधी date select करा
//                   </div>
//                 ) : (
//                   <>
//                     {availabilities.find(a => a.date === selectedDate)?.timeSlots.length > 0 && (
//                       <div style={{ marginBottom: 14, padding: "10px 12px", background: "#fff8e1", borderRadius: 8, fontSize: 12, color: "#b26a00" }}>
//                         <strong>⚠ Existing slots:</strong>
//                         <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 5 }}>
//                           {availabilities.find(a => a.date === selectedDate)?.timeSlots.map((s, i) => (
//                             <span key={i} style={{ background: "#ffe082", color: "#7a4a00", borderRadius: 6, padding: "3px 8px", fontSize: 12, fontWeight: 600 }}>
//                               {s.start} – {s.end}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                     <div style={{ marginBottom: 16 }}>
//                       <label className="avm-label">START TIME</label>
//                       <select value={startTime} onChange={e => { setStartTime(e.target.value); setEndTime(""); }} style={selectStyle}>
//                         <option value="">-- Start Time निवडा --</option>
//                         {TIMES.slice(0, -1).map(t => <option key={t} value={t}>{t}</option>)}
//                       </select>
//                     </div>
//                     <div style={{ marginBottom: 16 }}>
//                       <label className="avm-label">END TIME</label>
//                       <select value={endTime} onChange={e => setEndTime(e.target.value)}
//                         style={{ ...selectStyle, opacity: startTime ? 1 : 0.5, cursor: startTime ? "pointer" : "not-allowed" }}
//                         disabled={!startTime}>
//                         <option value="">-- End Time निवडा --</option>
//                         {endTimeOptions.map(t => <option key={t} value={t}>{t}</option>)}
//                       </select>
//                     </div>
//                     {startTime && endTime && (
//                       <div style={{ padding: "14px 16px", background: "#E3F4F1", borderRadius: 10, border: "1.5px solid #187484" }}>
//                         <div style={{ fontSize: 11, color: "#5f7f86", fontWeight: 800, marginBottom: 4, letterSpacing: 1 }}>SLOT PREVIEW</div>
//                         <div style={{ fontSize: isMobile ? 16 : 20, fontWeight: 800, color: "#0d4f5c" }}>🕐 {startTime} → {endTime}</div>
//                         <div style={{ fontSize: 12, color: "#5f7f86", marginTop: 4, fontWeight: 600 }}>Duration: {getDuration(startTime, endTime)}</div>
//                       </div>
//                     )}
//                   </>
//                 )}
//               </div>
//             </div>

//             <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
//               <button className="avm-btn-cancel" onClick={() => setAddModal(false)}>
//                 Cancel
//               </button>
//               <button className="avm-btn-save" onClick={handleAddSlot} disabled={submitting}>
//                 {submitting ? "Adding..." : "+ Add Slot"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* VIEW MODAL */}
//       {viewModal && (
//         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "12px" : "0" }}>
//           <div style={{ background: "#fff", borderRadius: 14, padding: isMobile ? 20 : 32, width: "100%", maxWidth: 420, boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
//             <h3 style={{ margin: "0 0 20px", color: "#1a4a2e", fontSize: isMobile ? 16 : 18 }}>📅 Availability Details</h3>
//             <div style={{ marginBottom: 12 }}>
//               <span style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>DATE</span>
//               <p style={{ margin: "4px 0 0", fontWeight: 700, color: "#1a4a2e", fontSize: isMobile ? 13 : 15 }}>{displayDate(viewModal.date)}</p>
//             </div>
//             <div style={{ marginBottom: 20 }}>
//               <span style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>TIME SLOTS</span>
//               <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
//                 {viewModal.timeSlots.map((s, i) => (
//                   <div key={i} style={{ background: "#e8f5ee", borderRadius: 8, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
//                     <span style={{ fontSize: 16 }}>🕐</span>
//                     <span style={{ fontWeight: 700, color: "#1a4a2e", fontSize: isMobile ? 13 : 15 }}>{s.start} – {s.end}</span>
//                     <span style={{ fontSize: 12, color: "#5a7a6a", marginLeft: "auto" }}>{getDuration(s.start, s.end)}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <button onClick={() => setViewModal(null)}
//               style={{ width: "100%", background: "#1a7a4a", color: "#fff", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 700, cursor: "pointer", fontSize: 14 }}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* DELETE MODAL */}
//       {deleteConfirm && (
//         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "12px" : "0" }}>
//           <div style={{ background: "#fff", borderRadius: 14, padding: isMobile ? 20 : 32, width: "100%", maxWidth: 380, boxShadow: "0 8px 40px rgba(0,0,0,0.2)", textAlign: "center" }}>
//             <div style={{ fontSize: 40, marginBottom: 12 }}>🗑</div>
//             <h3 style={{ margin: "0 0 8px", color: "#1a4a2e", fontSize: isMobile ? 16 : 18 }}>Delete Availability?</h3>
//             <p style={{ color: "#666", fontSize: isMobile ? 13 : 14, marginBottom: 24 }}>
//               <strong>{displayDate(deleteConfirm.date)}</strong> ची सर्व availability remove होईल.
//             </p>
//             <div style={{ display: "flex", gap: 12 }}>
//               <button onClick={() => setDeleteConfirm(null)}
//                 style={{ flex: 1, background: "#f0f4f0", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 600, cursor: "pointer", color: "#1a4a2e" }}>Cancel</button>
//               <button onClick={() => handleDeleteDate(deleteConfirm._id)}
//                 style={{ flex: 1, background: "#c0392b", color: "#fff", border: "none", borderRadius: 8, padding: "11px 0", fontWeight: 700, cursor: "pointer" }}>Delete</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FiCalendar, FiClock, FiEye, FiTrash2, FiPlus, FiSearch, FiDownload } from "react-icons/fi";
import backgroundJS from "../assets/jansamwadBg.png";


const BASE_URL = import.meta.env.VITE_FILE_BASE_URL || "http://localhost:5000";

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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

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

  useEffect(() => { fetchAvailability(); }, []);

  const markedDates = new Set(availabilities.map((a) => a.date));
  const endTimeOptions = startTime ? TIMES.filter((t) => timeToMin(t) > timeToMin(startTime)) : [];

  const handleAddSlot = async () => {
    if (!selectedDate) return showToast("कृपया date select करा!", "error");
    if (!startTime) return showToast("Start Time select करा!", "error");
    if (!endTime) return showToast("End Time select करा!", "error");
    try {
      setSubmitting(true);
      const res = await axios.post(`${BASE_URL}/api/availability/add-slot`, {
        date: selectedDate, start: startTime, end: endTime,
      });
      if (res.data.success) {
        showToast(`Slot ${startTime}–${endTime} added successfully!`);
        await fetchAvailability();
        setStartTime(""); setEndTime(""); setSelectedDate(null); setAddModal(false);
      }
    } catch (err) {
      showToast(err.response?.data?.message || "Failed to add slot", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteSlot = async (dateId, slotIndex) => {
    try {
      const res = await axios.delete(`${BASE_URL}/api/availability/delete-slot/${dateId}`, { data: { slotIndex } });
      if (res.data.success) { showToast("Slot removed.", "error"); await fetchAvailability(); }
    } catch (err) { showToast("Failed to remove slot", "error"); }
  };

  const handleDeleteDate = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/api/availability/delete/${id}`);
      if (res.data.success) { showToast("Availability removed.", "error"); setDeleteConfirm(null); await fetchAvailability(); }
    } catch (err) { showToast("Failed to delete", "error"); }
  };

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
    border: "1px solid #D6E9EB", borderRadius: 10, padding: "10px 12px",
    fontSize: 14, color: "#24424a", background: "#F2F9F9",
    outline: "none", cursor: "pointer", width: "100%", fontWeight: 600,
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', sans-serif",
      // ✅ Background image — Meetings page प्रमाणेच (content भागात पूर्ण बसते)
      // Image हलकी करायची असेल तर 0.15 वाढवा (उदा. 0.4), अजून ठळक हवी असेल तर 0 करा
      backgroundImage: `linear-gradient(180deg, rgba(240,247,247,0.15) 0%, rgba(234,244,245,0.15) 100%), url(${backgroundJS})`,
      backgroundSize: "cover",
      backgroundPosition: "top center",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#EAF7F8",
      minHeight: "100vh",
      padding: isMobile ? "16px 12px" : "24px",
    }}>

      {/* Responsive styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap');
        @keyframes fadeIn { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }
        .avail-table-wrap { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .avail-table { width: 100%; border-collapse: separate; border-spacing: 0; min-width: 720px; }
        .avail-card { background:#fff; border:1px solid #E3EFF0; border-radius:14px; padding:14px; margin-bottom:12px; box-shadow:0 2px 10px rgba(13,79,92,0.05); }
        .avail-card-row { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px; }
        .modal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
        @media (max-width: 639px) {
          .modal-grid { grid-template-columns: 1fr; gap: 20px; }
        }

        /* ── Body redesign (matches Meetings / Dashboard) ── */
        .av-body, .av-body * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }
        .av-eyebrow { display:flex; align-items:center; gap:10px; margin-bottom:14px; }
        .av-eyebrow-line { height:2px; background:#E9A23B; border-radius:2px; }
        .av-eyebrow-text { font-size:12.5px; font-weight:800; letter-spacing:1.4px; color:#E08A1E; text-transform:uppercase; white-space:nowrap; }
        .av-head { display:flex; align-items:center; gap:14px; margin-bottom:18px; }
        .av-head-icon { width:54px; height:54px; border-radius:14px; background:#fff; color:#187484; display:flex; align-items:center; justify-content:center; border:1px solid #E3EFF0; box-shadow:0 4px 14px rgba(13,79,92,0.10); flex-shrink:0; }
        .av-title { margin:0 0 3px; font-size:26px; font-weight:800; color:#0d4f5c; letter-spacing:-0.3px; line-height:1.2; }
        .av-subtitle { margin:0; font-size:13.5px; font-weight:500; color:#5f7f86; }
        .av-btn-add { display:inline-flex; align-items:center; justify-content:center; gap:8px; font-size:14px; font-weight:800; color:#fff; background:linear-gradient(135deg,#1f8a9b 0%,#187484 55%,#0d4f5c 100%); border:none; border-radius:12px; padding:11px 22px; cursor:pointer; box-shadow:0 6px 16px rgba(24,116,132,0.28); transition:transform .15s, box-shadow .15s; }
        .av-btn-add:hover { transform:translateY(-1px); box-shadow:0 8px 20px rgba(24,116,132,0.36); }
        .av-btn-export { display:inline-flex; align-items:center; justify-content:center; gap:8px; font-size:14px; font-weight:800; color:#187484; background:#fff; border:1.5px solid #BFDDE1; border-radius:12px; padding:10px 20px; cursor:pointer; box-shadow:0 2px 8px rgba(13,79,92,0.06); transition:background .15s, border-color .15s; }
        .av-btn-export:hover { background:#F2F9F9; border-color:#187484; }
        .av-records-card { background:#fff; border:1px solid #E3EFF0; border-radius:16px; box-shadow:0 4px 20px rgba(13,79,92,0.06); }
        .av-section-title { margin:0; font-size:17px; font-weight:800; color:#0d4f5c; display:flex; align-items:center; gap:10px; }
        .av-section-bar { width:4px; height:22px; border-radius:3px; background:#E9A23B; display:inline-block; }
        .av-count { background:#E3F4F1; color:#0d4f5c; border-radius:20px; padding:2px 10px; font-size:13px; font-weight:800; }
        .av-search-wrap { position:relative; }
        .av-search-icon { position:absolute; left:13px; top:50%; transform:translateY(-50%); color:#187484; pointer-events:none; }
        .av-search { font-size:13.5px; font-weight:500; color:#24424a; background:#F2F9F9; border:1px solid #D6E9EB; border-radius:12px; padding:10px 14px 10px 38px; outline:none; transition:border-color .2s, box-shadow .2s, background .2s; }
        .av-search::placeholder { color:#8AA6AB; }
        .av-search:focus { border-color:#187484; background:#fff; box-shadow:0 0 0 3px rgba(24,116,132,0.12); }
        .avail-table th { padding:13px 16px; text-align:left; font-size:12.5px; font-weight:800; color:#0d4f5c; background:#E4F1F2; text-transform:uppercase; letter-spacing:0.6px; white-space:nowrap; }
        .avail-table th:first-child { border-radius:10px 0 0 10px; }
        .avail-table th:last-child  { border-radius:0 10px 10px 0; }
        .avail-table td { padding:12px 16px; border-bottom:1px solid #EEF5F6; vertical-align:middle; font-size:14px; color:#24424a; }
        .avail-table tbody tr { transition:background .15s; }
        .avail-table tbody tr:hover td { background:#F3FAFA; }
        .avail-table tbody tr:last-child td { border-bottom:none; }
        .av-date-badge { display:inline-flex; align-items:center; gap:8px; background:#EEF6F8; color:#0d4f5c; font-size:13.5px; font-weight:800; padding:6px 12px; border-radius:8px; white-space:nowrap; }
        .av-date-badge svg { color:#187484; flex-shrink:0; }
        .av-slot { display:inline-flex; align-items:center; gap:6px; background:#EEF6F8; color:#24424a; border:1px solid #DCEBEE; border-radius:8px; padding:5px 10px; font-size:12.5px; font-weight:700; white-space:nowrap; }
        .av-slot svg { color:#187484; }
        .av-slot-x { cursor:pointer; color:#C62F3B; font-weight:800; font-size:15px; line-height:1; margin-left:2px; }
        .av-slot-x:hover { color:#8f1d27; }
        .av-status { display:inline-flex; align-items:center; gap:5px; background:#E3F4F1; color:#0d6b5c; border-radius:20px; padding:5px 12px; font-size:12px; font-weight:800; white-space:nowrap; }
        .av-btn-view { display:inline-flex; align-items:center; justify-content:center; gap:6px; font-size:13px; font-weight:700; color:#fff; background:linear-gradient(135deg,#1f8a9b 0%,#187484 55%,#0d4f5c 100%); border:none; border-radius:8px; padding:7px 14px; cursor:pointer; box-shadow:0 3px 10px rgba(24,116,132,0.22); transition:filter .15s, transform .15s; }
        .av-btn-view:hover { filter:brightness(1.08); transform:translateY(-1px); }
        .av-btn-delete { display:inline-flex; align-items:center; justify-content:center; gap:6px; font-size:13px; font-weight:700; background:#FDECEE; color:#C62F3B; border:1px solid #F8D5D9; border-radius:8px; padding:7px 14px; cursor:pointer; transition:background .15s; }
        .av-btn-delete:hover { background:#FBDADE; }
        @media (max-width: 639px) { .av-title { font-size:21px; } .av-head-icon { width:46px; height:46px; } }

        /* ── Set Mayor Availability modal — Create Meeting modal सारखा teal theme ── */
        .avm-box, .avm-box * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }
        .avm-box { border:1px solid #E3EFF0; box-shadow:0 20px 60px rgba(13,79,92,0.22) !important; }
        .avm-head { padding-bottom:14px; border-bottom:1px solid #E3EFF0; }
        .avm-title { margin:0; font-weight:800; color:#0d4f5c; display:flex; align-items:center; gap:10px; }
        .avm-title::before { content:""; width:4px; height:20px; border-radius:3px; background:#E9A23B; display:inline-block; }
        .avm-close { width:32px; height:32px; border-radius:8px; background:#F2F9F9; color:#5f7f86; border:1px solid #D6E9EB; display:flex; align-items:center; justify-content:center; font-size:15px; cursor:pointer; transition:background .15s, color .15s; }
        .avm-close:hover { background:#FDECEE; color:#C62F3B; border-color:#F8D5D9; }
        .avm-step { margin:0 0 14px; font-size:14px; font-weight:800; color:#0d4f5c; }
        .avm-nav { width:32px; height:32px; border-radius:8px; background:#fff; color:#187484; border:1px solid #BFDDE1; cursor:pointer; font-size:16px; transition:background .15s, border-color .15s; }
        .avm-nav:hover { background:#E3F4F1; border-color:#187484; }
        .avm-month { font-weight:800; font-size:15px; color:#0d4f5c; }
        .avm-dow { text-align:center; font-size:11px; font-weight:800; color:#5f7f86; text-transform:uppercase; letter-spacing:0.3px; }
        .avm-label { font-size:12px; font-weight:700; color:#0d4f5c; display:block; margin-bottom:6px; }
        .avm-box select:focus { border-color:#187484 !important; background:#fff !important; box-shadow:0 0 0 3px rgba(24,116,132,0.12); }
        .avm-btn-cancel { flex:1; background:#fff; color:#187484; border:1.5px solid #BFDDE1; border-radius:10px; padding:12px 0; font-weight:700; font-size:14px; cursor:pointer; transition:background .15s, border-color .15s; }
        .avm-btn-cancel:hover { background:#F2F9F9; border-color:#187484; }
        .avm-btn-save { flex:2; color:#fff; border:none; border-radius:10px; padding:12px 0; font-weight:800; font-size:14px; background:linear-gradient(135deg, #1f8a9b 0%, #187484 55%, #0d4f5c 100%); box-shadow:0 6px 16px rgba(24,116,132,0.28); cursor:pointer; transition:transform .15s, box-shadow .15s; }
        .avm-btn-save:hover:not(:disabled) { transform:translateY(-1px); box-shadow:0 8px 20px rgba(24,116,132,0.36); }
        .avm-btn-save:disabled { background:#888; box-shadow:none; cursor:not-allowed; }

        /* ── View (Availability Details) modal ── */
        .avm-view-label { font-size:11.5px; font-weight:800; color:#5f7f86; letter-spacing:0.8px; }
        .avm-view-date { display:flex; align-items:center; gap:10px; margin-top:6px; padding:11px 14px; background:#F2F9F9; border:1px solid #D6E9EB; border-radius:10px; color:#0d4f5c; font-weight:800; font-size:14.5px; }
        .avm-view-date svg { color:#187484; flex-shrink:0; }
        .avm-view-slot { display:flex; align-items:center; gap:12px; background:#E3F4F1; border:1px solid #BFDDE1; border-radius:10px; padding:10px 14px; }
        .avm-view-slot-icon { width:32px; height:32px; border-radius:8px; background:#fff; color:#187484; display:flex; align-items:center; justify-content:center; border:1px solid #D6E9EB; flex-shrink:0; }
        .avm-view-dur { margin-left:auto; font-size:12px; font-weight:800; color:#187484; background:#fff; border:1px solid #BFDDE1; border-radius:20px; padding:3px 10px; white-space:nowrap; }
      `}</style>

      {/* Toast */}
      {toast && (
        <div style={{
          position: "fixed", top: 20, right: isMobile ? 12 : 20, left: isMobile ? 12 : "auto", zIndex: 9999,
          background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
          color: "#fff", padding: "12px 20px", borderRadius: 8,
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)", fontSize: 14, fontWeight: 600,
          animation: "fadeIn 0.3s ease"
        }}>{toast.msg}</div>
      )}

      <div className="av-body">
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <div className="av-head">
          <div className="av-head-icon"><FiCalendar size={isMobile ? 21 : 24} /></div>
          <div>
            <h1 className="av-title">Mayor Availability</h1>
            <p className="av-subtitle">Mayor च्या available dates व time slots manage करा</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            className="av-btn-add"
            onClick={() => { setSelectedDate(null); setStartTime(""); setEndTime(""); setModalYear(today.getFullYear()); setModalMonth(today.getMonth()); setAddModal(true); }}
            style={{ flex: isMobile ? 1 : "none" }}
          ><FiPlus size={17} /> Add Availability</button>
          <button onClick={handleExportCSV} className="av-btn-export" style={{ flex: isMobile ? 1 : "none" }}
          ><FiDownload size={16} /> Export CSV</button>
        </div>
      </div>

      {/* Table / Cards */}
      <div className="av-records-card" style={{ padding: isMobile ? 14 : 22 }}>
        <div style={{ display: "flex", alignItems: isMobile ? "stretch" : "center", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", marginBottom: 16, gap: 12 }}>
          <h3 className="av-section-title">
            <span className="av-section-bar" />
            Availability Records
            <span className="av-count">{availabilities.length}</span>
          </h3>
          <div className="av-search-wrap" style={{ width: isMobile ? "100%" : "auto" }}>
            <FiSearch className="av-search-icon" size={16} />
            <input type="text" className="av-search" placeholder="Search by date..." value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: isMobile ? "100%" : 300 }}
            />
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: "center", padding: 60, color: "#5f7f86" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
            Loading availability...
          </div>
        ) : isMobile ? (
          /* ── Mobile card view ── */
          <div>
            {filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: 40, color: "#5f7f86", fontSize: 14 }}>No availability records found.</div>
            ) : filtered.map((item, idx) => {
              const d = new Date(item.date + "T00:00:00");
              return (
                <div key={item._id} className="avail-card">
                  <div className="avail-card-row">
                    <div>
                      <span className="av-date-badge">
                        <FiCalendar size={14} />
                        {d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                      </span>
                      <div style={{ fontSize: 12, color: "#5f7f86", marginTop: 6, fontWeight: 600 }}>
                        {d.toLocaleDateString("en-IN", { weekday: "long" })}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span className="av-status" style={{ fontSize: 11 }}>✓ {item.status}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                    {item.timeSlots.map((slot, i) => (
                      <span key={i} className="av-slot">
                        <FiClock size={13} /> {slot.start} – {slot.end}
                        <span onClick={() => handleDeleteSlot(item._id, i)} title="Remove slot" className="av-slot-x">×</span>
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => setViewModal(item)} className="av-btn-view" style={{ flex: 1 }}><FiEye size={15} /> View</button>
                    <button onClick={() => setDeleteConfirm(item)} className="av-btn-delete" style={{ flex: 1 }}><FiTrash2 size={14} /> Delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* ── Desktop table view ── */
          <div className="avail-table-wrap">
            <table className="avail-table">
              <thead>
                <tr>
                  {["#", "Date", "Day", "Time Slots", "Status", "Actions"].map(h => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan={6} style={{ textAlign: "center", padding: 40, color: "#5f7f86", fontSize: 14 }}>No availability records found.</td></tr>
                ) : (
                  filtered.map((item, idx) => {
                    const d = new Date(item.date + "T00:00:00");
                    return (
                      <tr key={item._id}>
                        <td style={{ fontSize: 13.5, color: "#5f7f86", fontWeight: 700 }}>{idx + 1}</td>
                        <td>
                          <span className="av-date-badge">
                            <FiCalendar size={15} />
                            {d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                          </span>
                        </td>
                        <td style={{ fontSize: 13.5, color: "#5f7f86", fontWeight: 600 }}>
                          {d.toLocaleDateString("en-IN", { weekday: "long" })}
                        </td>
                        <td>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                            {item.timeSlots.map((slot, i) => (
                              <span key={i} className="av-slot">
                                <FiClock size={14} /> {slot.start} – {slot.end}
                                <span onClick={() => handleDeleteSlot(item._id, i)} title="Remove slot" className="av-slot-x">×</span>
                              </span>
                            ))}
                          </div>
                        </td>
                        <td>
                          <span className="av-status">✓ {item.status}</span>
                        </td>
                        <td>
                          <div style={{ display: "flex", gap: 8 }}>
                            <button onClick={() => setViewModal(item)} className="av-btn-view" title="View" style={{ padding: "8px 11px" }}><FiEye size={15} /></button>
                            <button onClick={() => setDeleteConfirm(item)} className="av-btn-delete" title="Delete" style={{ padding: "8px 11px" }}><FiTrash2 size={15} /></button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
      </div>

      {/* ADD MODAL */}
      {addModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "12px" : "0" }}>
          <div className="avm-box" style={{ background: "#fff", borderRadius: 16, padding: isMobile ? 20 : 28, width: "100%", maxWidth: 740, maxHeight: "90vh", overflowY: "auto" }}>
            <div className="avm-head" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <h3 className="avm-title" style={{ fontSize: isMobile ? 16 : 18 }}>Set Mayor Availability</h3>
              <button className="avm-close" onClick={() => setAddModal(false)}>✕</button>
            </div>

            <div className="modal-grid">
              {/* Calendar */}
              <div>
                <h4 className="avm-step">① Date Select करा</h4>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <button className="avm-nav" onClick={prevModalMonth}>←</button>
                  <span className="avm-month">{MONTHS[modalMonth]} {modalYear}</span>
                  <button className="avm-nav" onClick={nextModalMonth}>→</button>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3, marginBottom: 6 }}>
                  {DAYS.map(d => <div key={d} className="avm-dow">{d}</div>)}
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
                          border: isSelected ? "1px solid transparent" : isMarked ? "1px solid #BFDDE1" : "1px solid #EEF5F6",
                          borderRadius: 8, padding: "7px 0", cursor: isPast ? "not-allowed" : "pointer",
                          fontWeight: isSelected ? 800 : 600, fontSize: 12,
                          background: isSelected ? "linear-gradient(135deg, #1f8a9b 0%, #187484 55%, #0d4f5c 100%)" : isMarked ? "#E3F4F1" : "#F2F9F9",
                          color: isSelected ? "#fff" : isMarked ? "#187484" : isPast ? "#BCCFD2" : "#0d4f5c",
                          boxShadow: isSelected ? "0 4px 10px rgba(24,116,132,0.28)" : "none",
                          position: "relative", transition: "all 0.15s"
                        }}>
                        {day}
                        {isMarked && !isSelected && (
                          <span style={{ position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: "#187484", display: "block" }} />
                        )}
                      </button>
                    );
                  })}
                </div>
                {selectedDate && (
                  <div style={{ marginTop: 12, padding: "9px 12px", background: "#E3F4F1", border: "1px solid #BFDDE1", borderRadius: 10, fontSize: 12.5, color: "#0d4f5c", fontWeight: 700 }}>
                    ✓ {displayDate(selectedDate)}
                  </div>
                )}
              </div>

              {/* Time Slot Picker */}
              <div>
                <h4 className="avm-step">② Time Slot Select करा</h4>
                {!selectedDate ? (
                  <div style={{ background: "#F2F9F9", borderRadius: 10, padding: 24, textAlign: "center", color: "#8AA6AB", fontSize: 13, fontWeight: 600, border: "1.5px dashed #BFDDE1" }}>
                    ← आधी date select करा
                  </div>
                ) : (
                  <>
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
                    <div style={{ marginBottom: 16 }}>
                      <label className="avm-label">START TIME</label>
                      <select value={startTime} onChange={e => { setStartTime(e.target.value); setEndTime(""); }} style={selectStyle}>
                        <option value="">-- Start Time निवडा --</option>
                        {TIMES.slice(0, -1).map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <label className="avm-label">END TIME</label>
                      <select value={endTime} onChange={e => setEndTime(e.target.value)}
                        style={{ ...selectStyle, opacity: startTime ? 1 : 0.5, cursor: startTime ? "pointer" : "not-allowed" }}
                        disabled={!startTime}>
                        <option value="">-- End Time निवडा --</option>
                        {endTimeOptions.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    {startTime && endTime && (
                      <div style={{ padding: "14px 16px", background: "#E3F4F1", borderRadius: 10, border: "1.5px solid #187484" }}>
                        <div style={{ fontSize: 11, color: "#5f7f86", fontWeight: 800, marginBottom: 4, letterSpacing: 1 }}>SLOT PREVIEW</div>
                        <div style={{ fontSize: isMobile ? 16 : 20, fontWeight: 800, color: "#0d4f5c" }}>🕐 {startTime} → {endTime}</div>
                        <div style={{ fontSize: 12, color: "#5f7f86", marginTop: 4, fontWeight: 600 }}>Duration: {getDuration(startTime, endTime)}</div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              <button className="avm-btn-cancel" onClick={() => setAddModal(false)}>
                Cancel
              </button>
              <button className="avm-btn-save" onClick={handleAddSlot} disabled={submitting}>
                {submitting ? "Adding..." : "+ Add Slot"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODAL — Set Mayor Availability modal सारखा teal theme, close icon वर उजवीकडे */}
      {viewModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "12px" : "0" }}>
          <div className="avm-box" style={{ background: "#fff", borderRadius: 16, padding: isMobile ? 20 : 28, width: "100%", maxWidth: 440 }}>
            <div className="avm-head" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
              <h3 className="avm-title" style={{ fontSize: isMobile ? 16 : 18 }}>Availability Details</h3>
              <button className="avm-close" onClick={() => setViewModal(null)} title="Close" aria-label="Close">✕</button>
            </div>
            <div style={{ marginBottom: 16 }}>
              <span className="avm-view-label">DATE</span>
              <div className="avm-view-date">
                <FiCalendar size={16} />
                <span>{displayDate(viewModal.date)}</span>
              </div>
            </div>
            <div>
              <span className="avm-view-label">TIME SLOTS</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
                {viewModal.timeSlots.map((s, i) => (
                  <div key={i} className="avm-view-slot">
                    <span className="avm-view-slot-icon"><FiClock size={16} /></span>
                    <span style={{ fontWeight: 800, color: "#0d4f5c", fontSize: isMobile ? 13.5 : 15 }}>{s.start} – {s.end}</span>
                    <span className="avm-view-dur">{getDuration(s.start, s.end)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DELETE MODAL */}
      {deleteConfirm && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "12px" : "0" }}>
          <div style={{ background: "#fff", borderRadius: 14, padding: isMobile ? 20 : 32, width: "100%", maxWidth: 380, boxShadow: "0 8px 40px rgba(0,0,0,0.2)", textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🗑</div>
            <h3 style={{ margin: "0 0 8px", color: "#1a4a2e", fontSize: isMobile ? 16 : 18 }}>Delete Availability?</h3>
            <p style={{ color: "#666", fontSize: isMobile ? 13 : 14, marginBottom: 24 }}>
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
    </div>
  );
}