// import { useState, useEffect } from "react";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// export default function ProceedingsMeeting() {
//   const [meetings, setMeetings] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [toast, setToast] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     meetingNumber: "",
//     meetingType: "",
//     subjectId: "",
//     subjectType: "",
//     subjectName: "",
//   });

//   const isMobile = window.innerWidth < 640;

//   const showToast = (msg, type = "success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3000);
//   };

//   // ─── Fetch all meetings ───────────────────────────────────────
//   const fetchMeetings = async (searchVal = "") => {
//     try {
//       setLoading(true);
//       const url = searchVal
//         ? `${BASE_URL}/getMeetings?search=${searchVal}`
//         : `${BASE_URL}/getMeetings`;

//       const res = await fetch(url);
//       const data = await res.json();

//       if (data.success) {
//         setMeetings(data.data);
//       } else {
//         showToast(data.message || "Failed to fetch meetings", "error");
//       }
//     } catch (err) {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // fetch on mount
//   useEffect(() => {
//     fetchMeetings();
//   }, []);

//   // search with debounce
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       fetchMeetings(search);
//     }, 400);
//     return () => clearTimeout(timer);
//   }, [search]);

//   // ─── Handlers ────────────────────────────────────────────────
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     if (!formData.meetingNumber || !formData.meetingType) {
//       showToast("Please fill required fields", "error");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/createMeeting`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setFormData({
//           meetingNumber: "",
//           meetingType: "",
//           subjectId: "",
//           subjectType: "",
//           subjectName: "",
//         });
//         setShowModal(false);
//         showToast("Meeting created successfully");
//         fetchMeetings(search);
//       } else {
//         showToast(data.message || "Failed to create meeting", "error");
//       }
//     } catch (err) {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ─── UI (exactly same as original) ───────────────────────────
//   return (
//     <div style={{ background: "#f0f4f0", minHeight: "100vh", padding: isMobile ? 16 : 24 }}>

//       {/* Toast */}
//       {toast && (
//         <div style={{
//           position: "fixed",
//           top: 20,
//           right: 20,
//           background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
//           color: "#fff",
//           padding: "10px 18px",
//           borderRadius: 8,
//           fontWeight: 600,
//           zIndex: 9999,
//         }}>
//           {toast.msg}
//         </div>
//       )}

//       {/* Header */}
//       <div style={{ marginBottom: 20 }}>
//         <h1 style={{ color: "#1a4a2e", margin: 0 }}>Meeting Proceedings</h1>
//         <p style={{ color: "#5a7a6a" }}>Sabha Kamkaj manage करा</p>

//         <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
//           <button onClick={() => setShowModal(true)} style={primaryBtn}>
//             + Create Meeting
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <div style={{ background: "#fff", borderRadius: 12, padding: 20 }}>
//         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15 }}>
//           <h3 style={{ margin: 0 }}>
//             Records ({meetings.length})
//           </h3>

//           <input
//             placeholder="Search meeting no..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             style={searchInput}
//           />
//         </div>

//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr style={{ background: "#f0f7f2" }}>
//               {["#", "Meeting No", "Type", "Subject ID", "Subject Type", "Subject Name"].map(h => (
//                 <th key={h} style={th}>{h}</th>
//               ))}
//             </tr>
//           </thead>

//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan={6} style={{ textAlign: "center", padding: 20, color: "#888" }}>
//                   Loading...
//                 </td>
//               </tr>
//             ) : meetings.length === 0 ? (
//               <tr>
//                 <td colSpan={6} style={{ textAlign: "center", padding: 20 }}>
//                   No records found
//                 </td>
//               </tr>
//             ) : (
//               meetings.map((m, i) => (
//                 <tr key={m._id} style={{ borderBottom: "1px solid #eee" }}>
//                   <td style={td}>{i + 1}</td>
//                   <td style={td}>{m.meetingNumber}</td>
//                   <td style={td}>{m.meetingType}</td>
//                   <td style={td}>{m.subjectId}</td>
//                   <td style={td}>{m.subjectType}</td>
//                   <td style={td}>{m.subjectName}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div style={modalOverlay}>
//           <div style={modalBox}>
//             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
//               <h3 style={{ margin: 0 }}>Create Meeting</h3>
//               <button onClick={() => setShowModal(false)}>✕</button>
//             </div>

//             <div style={grid}>
//               <input
//                 name="meetingNumber"
//                 placeholder="Meeting Number"
//                 value={formData.meetingNumber}
//                 onChange={handleChange}
//                 style={input}
//               />

//               <select name="meetingType" value={formData.meetingType} onChange={handleChange} style={input}>
//                 <option value="">Type Of Meeting</option>
//                 <option>General Body</option>
//                 <option>Standing Committee</option>
//               </select>

//               <input
//                 name="subjectId"
//                 placeholder="Subject ID"
//                 value={formData.subjectId}
//                 onChange={handleChange}
//                 style={input}
//               />

//               <select name="subjectType" value={formData.subjectType} onChange={handleChange} style={input}>
//                 <option value="">Subject Type</option>
//                 <option>General</option>
//                 <option>Administrative and Financial Approval</option>
//                 <option>Contract Approval</option>
//               </select>

//               <input
//                 name="subjectName"
//                 placeholder="Subject Name"
//                 value={formData.subjectName}
//                 onChange={handleChange}
//                 style={{ ...input, gridColumn: "span 2" }}
//               />
//             </div>

//             <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
//               <button onClick={() => setShowModal(false)} style={cancelBtn}>
//                 Cancel
//               </button>
//               <button onClick={handleSubmit} style={primaryBtn} disabled={loading}>
//                 {loading ? "Saving..." : "Save"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// /* Styles — exactly same as original */
// const primaryBtn = {
//   background: "#1a7a4a",
//   color: "#fff",
//   border: "none",
//   borderRadius: 8,
//   padding: "10px 18px",
//   cursor: "pointer",
//   fontWeight: 600,
// };

// const cancelBtn = {
//   background: "#eee",
//   border: "none",
//   borderRadius: 8,
//   padding: "10px 18px",
//   cursor: "pointer",
// };

// const searchInput = {
//   border: "1px solid #ccc",
//   borderRadius: 8,
//   padding: "8px 12px",
// };

// const th = {
//   padding: 10,
//   textAlign: "left",
//   color: "#1a4a2e",
// };

// const td = {
//   padding: 10,
// };

// const modalOverlay = {
//   position: "fixed",
//   inset: 0,
//   background: "rgba(0,0,0,0.4)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

// const modalBox = {
//   background: "#fff",
//   padding: 25,
//   borderRadius: 12,
//   width: "100%",
//   maxWidth: 500,
// };

// const input = {
//   width: "100%",
//   padding: "10px",
//   borderRadius: 8,
//   border: "1px solid #c8e0cc",
// };

// const grid = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   gap: 12,
// };




// import { useState, useEffect } from "react";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// export default function ProceedingsMeeting() {
//   const [meetings, setMeetings] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [toast, setToast] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [editId, setEditId] = useState(null); // null = create mode, id = edit mode
//   const [deleteConfirm, setDeleteConfirm] = useState(null); // meeting _id to delete

//   const [formData, setFormData] = useState({
//     meetingNumber: "",
//     meetingType: "",
//     subjectId: "",
//     subjectType: "",
//     subjectName: "",
//   });

//   const isMobile = window.innerWidth < 640;

//   const showToast = (msg, type = "success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3000);
//   };

//   // ─── Fetch all meetings ───────────────────────────────────────
//   const fetchMeetings = async (searchVal = "") => {
//     try {
//       setLoading(true);
//       const url = searchVal
//         ? `${BASE_URL}/getMeetings?search=${searchVal}`
//         : `${BASE_URL}/getMeetings`;

//       const res = await fetch(url);
//       const data = await res.json();

//       if (data.success) {
//         setMeetings(data.data);
//       } else {
//         showToast(data.message || "Failed to fetch meetings", "error");
//       }
//     } catch (err) {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMeetings();
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       fetchMeetings(search);
//     }, 400);
//     return () => clearTimeout(timer);
//   }, [search]);

//   // ─── Handlers ────────────────────────────────────────────────
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const openCreateModal = () => {
//     setEditId(null);
//     setFormData({
//       meetingNumber: "",
//       meetingType: "",
//       subjectId: "",
//       subjectType: "",
//       subjectName: "",
//     });
//     setShowModal(true);
//   };

//   const openEditModal = (m) => {
//     setEditId(m._id);
//     setFormData({
//       meetingNumber: m.meetingNumber,
//       meetingType: m.meetingType,
//       subjectId: m.subjectId || "",
//       subjectType: m.subjectType || "",
//       subjectName: m.subjectName || "",
//     });
//     setShowModal(true);
//   };

//   // ─── Create ───────────────────────────────────────────────────
//   const handleCreate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/createMeeting`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();

//       if (data.success) {
//         setShowModal(false);
//         showToast("Meeting created successfully");
//         fetchMeetings(search);
//       } else {
//         showToast(data.message || "Failed to create meeting", "error");
//       }
//     } catch (err) {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ─── Update ───────────────────────────────────────────────────
//   const handleUpdate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/updateMeeting/${editId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();

//       if (data.success) {
//         setShowModal(false);
//         setEditId(null);
//         showToast("Meeting updated successfully");
//         fetchMeetings(search);
//       } else {
//         showToast(data.message || "Failed to update meeting", "error");
//       }
//     } catch (err) {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = () => {
//     if (!formData.meetingNumber || !formData.meetingType) {
//       showToast("Please fill required fields", "error");
//       return;
//     }
//     editId ? handleUpdate() : handleCreate();
//   };

//   // ─── Delete ───────────────────────────────────────────────────
//   const handleDelete = async (id) => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/deleteMeeting/${id}`, {
//         method: "DELETE",
//       });
//       const data = await res.json();

//       if (data.success) {
//         setDeleteConfirm(null);
//         showToast("Meeting deleted successfully");
//         fetchMeetings(search);
//       } else {
//         showToast(data.message || "Failed to delete meeting", "error");
//       }
//     } catch (err) {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ─── UI ──────────────────────────────────────────────────────
//   return (
//     <div style={{ background: "#f0f4f0", minHeight: "100vh", padding: isMobile ? 16 : 24 }}>

//       {/* Toast */}
//       {toast && (
//         <div style={{
//           position: "fixed",
//           top: 20,
//           right: 20,
//           background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
//           color: "#fff",
//           padding: "10px 18px",
//           borderRadius: 8,
//           fontWeight: 600,
//           zIndex: 9999,
//         }}>
//           {toast.msg}
//         </div>
//       )}

//       {/* Header */}
//       <div style={{ marginBottom: 20 }}>
//         <h1 style={{ color: "#1a4a2e", margin: 0 }}>Meeting Proceedings</h1>
//         <p style={{ color: "#5a7a6a" }}>Sabha Kamkaj manage करा</p>

//         <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
//           <button onClick={openCreateModal} style={primaryBtn}>
//             + Create Meeting
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <div style={{ background: "#fff", borderRadius: 12, padding: 20 }}>
//         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15 }}>
//           <h3 style={{ margin: 0 }}>
//             Records ({meetings.length})
//           </h3>

//           <input
//             placeholder="Search meeting no..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             style={searchInput}
//           />
//         </div>

//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr style={{ background: "#f0f7f2" }}>
//               {["#", "Meeting No", "Type", "Subject ID", "Subject Type", "Subject Name", "Actions"].map(h => (
//                 <th key={h} style={th}>{h}</th>
//               ))}
//             </tr>
//           </thead>

//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan={7} style={{ textAlign: "center", padding: 20, color: "#888" }}>
//                   Loading...
//                 </td>
//               </tr>
//             ) : meetings.length === 0 ? (
//               <tr>
//                 <td colSpan={7} style={{ textAlign: "center", padding: 20 }}>
//                   No records found
//                 </td>
//               </tr>
//             ) : (
//               meetings.map((m, i) => (
//                 <tr key={m._id} style={{ borderBottom: "1px solid #eee" }}>
//                   <td style={td}>{i + 1}</td>
//                   <td style={td}>{m.meetingNumber}</td>
//                   <td style={td}>{m.meetingType}</td>
//                   <td style={td}>{m.subjectId}</td>
//                   <td style={td}>{m.subjectType}</td>
//                   <td style={td}>{m.subjectName}</td>
//                   <td style={td}>
//                     <div style={{ display: "flex", gap: 6 }}>
//                       <button onClick={() => openEditModal(m)} style={editBtn}>
//                         ✏️ Edit
//                       </button>
//                       <button onClick={() => setDeleteConfirm(m._id)} style={deleteBtn}>
//                         🗑️ Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Create / Edit Modal */}
//       {showModal && (
//         <div style={modalOverlay}>
//           <div style={modalBox}>
//             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
//               <h3 style={{ margin: 0 }}>{editId ? "Edit Meeting" : "Create Meeting"}</h3>
//               <button onClick={() => setShowModal(false)}>✕</button>
//             </div>

//             <div style={grid}>
//               <input
//                 name="meetingNumber"
//                 placeholder="Meeting Number"
//                 value={formData.meetingNumber}
//                 onChange={handleChange}
//                 style={input}
//               />

//               <select name="meetingType" value={formData.meetingType} onChange={handleChange} style={input}>
//                 <option value="">Type Of Meeting</option>
//                 <option>General Body</option>
//                 <option>Standing Committee</option>
//               </select>

//               <input
//                 name="subjectId"
//                 placeholder="Subject ID"
//                 value={formData.subjectId}
//                 onChange={handleChange}
//                 style={input}
//               />

//               <select name="subjectType" value={formData.subjectType} onChange={handleChange} style={input}>
//                 <option value="">Subject Type</option>
//                 <option>General</option>
//                 <option>Administrative and Financial Approval</option>
//                 <option>Contract Approval</option>
//               </select>

//               <input
//                 name="subjectName"
//                 placeholder="Subject Name"
//                 value={formData.subjectName}
//                 onChange={handleChange}
//                 style={{ ...input, gridColumn: "span 2" }}
//               />
//             </div>

//             <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
//               <button onClick={() => setShowModal(false)} style={cancelBtn}>
//                 Cancel
//               </button>
//               <button onClick={handleSubmit} style={primaryBtn} disabled={loading}>
//                 {loading ? "Saving..." : editId ? "Update" : "Save"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete Confirm Modal */}
//       {deleteConfirm && (
//         <div style={modalOverlay}>
//           <div style={{ ...modalBox, maxWidth: 380, textAlign: "center" }}>
//             <p style={{ fontSize: 18, fontWeight: 600, color: "#1a4a2e", marginBottom: 8 }}>
//               Delete Meeting?
//             </p>
//             <p style={{ color: "#888", marginBottom: 20 }}>
//               He record permanently delete होईल. Sure aahes ka?
//             </p>
//             <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
//               <button onClick={() => setDeleteConfirm(null)} style={cancelBtn}>
//                 Cancel
//               </button>
//               <button
//                 onClick={() => handleDelete(deleteConfirm)}
//                 style={{ ...primaryBtn, background: "#c0392b" }}
//                 disabled={loading}
//               >
//                 {loading ? "Deleting..." : "Yes, Delete"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// /* Styles — as it is */
// const primaryBtn = {
//   background: "#1a7a4a",
//   color: "#fff",
//   border: "none",
//   borderRadius: 8,
//   padding: "10px 18px",
//   cursor: "pointer",
//   fontWeight: 600,
// };

// const cancelBtn = {
//   background: "#eee",
//   border: "none",
//   borderRadius: 8,
//   padding: "10px 18px",
//   cursor: "pointer",
// };

// const editBtn = {
//   background: "#e8f4fd",
//   color: "#1a6aaa",
//   border: "none",
//   borderRadius: 6,
//   padding: "5px 10px",
//   cursor: "pointer",
//   fontSize: 13,
// };

// const deleteBtn = {
//   background: "#fdecea",
//   color: "#c0392b",
//   border: "none",
//   borderRadius: 6,
//   padding: "5px 10px",
//   cursor: "pointer",
//   fontSize: 13,
// };

// const searchInput = {
//   border: "1px solid #ccc",
//   borderRadius: 8,
//   padding: "8px 12px",
// };

// const th = {
//   padding: 10,
//   textAlign: "left",
//   color: "#1a4a2e",
// };

// const td = {
//   padding: 10,
// };

// const modalOverlay = {
//   position: "fixed",
//   inset: 0,
//   background: "rgba(0,0,0,0.4)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

// const modalBox = {
//   background: "#fff",
//   padding: 25,
//   borderRadius: 12,
//   width: "100%",
//   maxWidth: 500,
// };

// const input = {
//   width: "100%",
//   padding: "10px",
//   borderRadius: 8,
//   border: "1px solid #c8e0cc",
// };

// const grid = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   gap: 12,
// };





// import { useState, useEffect } from "react";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// export default function ProceedingsMeeting() {
//   const [meetings, setMeetings] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [toast, setToast] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [editId, setEditId] = useState(null); // null = create mode, id = edit mode
//   const [deleteConfirm, setDeleteConfirm] = useState(null); // meeting _id to delete

//   const [formData, setFormData] = useState({
//     meetingNumber: "",
//     meetingType: "",
//     meetingDate: "",
//     meetingTime: "",
//     subjectId: "",
//     subjectType: "",
//     subjectName: "",
//   });

//   const isMobile = window.innerWidth < 640;

//   const showToast = (msg, type = "success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3000);
//   };

//   // ─── Fetch all meetings ───────────────────────────────────────
//   const fetchMeetings = async (searchVal = "") => {
//     try {
//       setLoading(true);
//       const url = searchVal
//         ? `${BASE_URL}/getMeetings?search=${searchVal}`
//         : `${BASE_URL}/getMeetings`;

//       const res = await fetch(url);
//       const data = await res.json();

//       if (data.success) {
//         setMeetings(data.data);
//       } else {
//         showToast(data.message || "Failed to fetch meetings", "error");
//       }
//     } catch (err) {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMeetings();
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       fetchMeetings(search);
//     }, 400);
//     return () => clearTimeout(timer);
//   }, [search]);

//   // ─── Handlers ────────────────────────────────────────────────
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const openCreateModal = () => {
//     setEditId(null);
//     setFormData({
//       meetingNumber: "",
//       meetingType: "",
//       meetingDate: "",
//       meetingTime: "",
//       subjectId: "",
//       subjectType: "",
//       subjectName: "",
//     });
//     setShowModal(true);
//   };

//   const openEditModal = (m) => {
//     setEditId(m._id);
//     setFormData({
//       meetingNumber: m.meetingNumber,
//       meetingType: m.meetingType,
//       meetingDate: m.meetingDate ? m.meetingDate.slice(0, 10) : "",
//       meetingTime: m.meetingTime || "",
//       subjectId: m.subjectId || "",
//       subjectType: m.subjectType || "",
//       subjectName: m.subjectName || "",
//     });
//     setShowModal(true);
//   };

//   // ─── Create ───────────────────────────────────────────────────
//   const handleCreate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/createMeeting`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();

//       if (data.success) {
//         setShowModal(false);
//         showToast("Meeting created successfully");
//         fetchMeetings(search);
//       } else {
//         showToast(data.message || "Failed to create meeting", "error");
//       }
//     } catch (err) {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ─── Update ───────────────────────────────────────────────────
//   const handleUpdate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/updateMeeting/${editId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();

//       if (data.success) {
//         setShowModal(false);
//         setEditId(null);
//         showToast("Meeting updated successfully");
//         fetchMeetings(search);
//       } else {
//         showToast(data.message || "Failed to update meeting", "error");
//       }
//     } catch (err) {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = () => {
//     if (!formData.meetingNumber || !formData.meetingType) {
//       showToast("Please fill required fields", "error");
//       return;
//     }
//     editId ? handleUpdate() : handleCreate();
//   };

//   // ─── Delete ───────────────────────────────────────────────────
//   const handleDelete = async (id) => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/deleteMeeting/${id}`, {
//         method: "DELETE",
//       });
//       const data = await res.json();

//       if (data.success) {
//         setDeleteConfirm(null);
//         showToast("Meeting deleted successfully");
//         fetchMeetings(search);
//       } else {
//         showToast(data.message || "Failed to delete meeting", "error");
//       }
//     } catch (err) {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ─── UI ──────────────────────────────────────────────────────
//   return (
//     <div style={{ background: "#f0f4f0", minHeight: "100vh", padding: isMobile ? 16 : 24 }}>

//       {/* Toast */}
//       {toast && (
//         <div style={{
//           position: "fixed",
//           top: 20,
//           right: 20,
//           background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
//           color: "#fff",
//           padding: "10px 18px",
//           borderRadius: 8,
//           fontWeight: 600,
//           zIndex: 9999,
//         }}>
//           {toast.msg}
//         </div>
//       )}

//       {/* Header */}
//       <div style={{ marginBottom: 20 }}>
//         <h1 style={{ color: "#1a4a2e", margin: 0 }}>Meeting Proceedings</h1>
//         <p style={{ color: "#5a7a6a" }}>Sabha Kamkaj manage करा</p>

//         <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
//           <button onClick={openCreateModal} style={primaryBtn}>
//             + Create Meeting
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <div style={{ background: "#fff", borderRadius: 12, padding: 20 }}>
//         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15 }}>
//           <h3 style={{ margin: 0 }}>
//             Records ({meetings.length})
//           </h3>

//           <input
//             placeholder="Search meeting no..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             style={searchInput}
//           />
//         </div>

//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr style={{ background: "#f0f7f2" }}>
//               {["#", "Meeting No", "Type", "Date", "Time", "Subject ID", "Subject Type", "Subject Name", "Actions"].map(h => (
//                 <th key={h} style={th}>{h}</th>
//               ))}
//             </tr>
//           </thead>

//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan={9} style={{ textAlign: "center", padding: 20, color: "#888" }}>
//                   Loading...
//                 </td>
//               </tr>
//             ) : meetings.length === 0 ? (
//               <tr>
//                 <td colSpan={9} style={{ textAlign: "center", padding: 20 }}>
//                   No records found
//                 </td>
//               </tr>
//             ) : (
//               meetings.map((m, i) => (
//                 <tr key={m._id} style={{ borderBottom: "1px solid #eee" }}>
//                   <td style={td}>{i + 1}</td>
//                   <td style={td}>{m.meetingNumber}</td>
//                   <td style={td}>{m.meetingType}</td>
//                   <td style={td}>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</td>
//                   <td style={td}>{m.meetingTime || "-"}</td>
//                   <td style={td}>{m.subjectId}</td>
//                   <td style={td}>{m.subjectType}</td>
//                   <td style={td}>{m.subjectName}</td>
//                   <td style={td}>
//                     <div style={{ display: "flex", gap: 6 }}>
//                       <button onClick={() => openEditModal(m)} style={editBtn}>
//                         ✏️ Edit
//                       </button>
//                       <button onClick={() => setDeleteConfirm(m._id)} style={deleteBtn}>
//                         🗑️ Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Create / Edit Modal */}
//       {showModal && (
//         <div style={modalOverlay}>
//           <div style={modalBox}>
//             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
//               <h3 style={{ margin: 0 }}>{editId ? "Edit Meeting" : "Create Meeting"}</h3>
//               <button onClick={() => setShowModal(false)}>✕</button>
//             </div>

//             <div style={grid}>
//               <input
//                 name="meetingNumber"
//                 placeholder="Meeting Number"
//                 value={formData.meetingNumber}
//                 onChange={handleChange}
//                 style={input}
//               />

//               <select name="meetingType" value={formData.meetingType} onChange={handleChange} style={input}>
//                 <option value="">Type Of Meeting</option>
//                 <option>General Body</option>
//                 <option>Standing Committee</option>
//               </select>

//               <input
//                 name="meetingDate"
//                 type="date"
//                 value={formData.meetingDate}
//                 onChange={handleChange}
//                 style={input}
//               />

//               <input
//                 name="meetingTime"
//                 type="time"
//                 value={formData.meetingTime}
//                 onChange={handleChange}
//                 style={input}
//               />

//               <input
//                 name="subjectId"
//                 placeholder="Subject ID"
//                 value={formData.subjectId}
//                 onChange={handleChange}
//                 style={input}
//               />

//               <select name="subjectType" value={formData.subjectType} onChange={handleChange} style={input}>
//                 <option value="">Subject Type</option>
//                 <option>General</option>
//                 <option>Administrative and Financial Approval</option>
//                 <option>Contract Approval</option>
//               </select>

//               <input
//                 name="subjectName"
//                 placeholder="Subject Name"
//                 value={formData.subjectName}
//                 onChange={handleChange}
//                 style={{ ...input, gridColumn: "span 2" }}
//               />
//             </div>

//             <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
//               <button onClick={() => setShowModal(false)} style={cancelBtn}>
//                 Cancel
//               </button>
//               <button onClick={handleSubmit} style={primaryBtn} disabled={loading}>
//                 {loading ? "Saving..." : editId ? "Update" : "Save"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete Confirm Modal */}
//       {deleteConfirm && (
//         <div style={modalOverlay}>
//           <div style={{ ...modalBox, maxWidth: 380, textAlign: "center" }}>
//             <p style={{ fontSize: 18, fontWeight: 600, color: "#1a4a2e", marginBottom: 8 }}>
//               Delete Meeting?
//             </p>
//             <p style={{ color: "#888", marginBottom: 20 }}>
//               He record permanently delete होईल. Sure aahes ka?
//             </p>
//             <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
//               <button onClick={() => setDeleteConfirm(null)} style={cancelBtn}>
//                 Cancel
//               </button>
//               <button
//                 onClick={() => handleDelete(deleteConfirm)}
//                 style={{ ...primaryBtn, background: "#c0392b" }}
//                 disabled={loading}
//               >
//                 {loading ? "Deleting..." : "Yes, Delete"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// /* Styles — as it is */
// const primaryBtn = {
//   background: "#1a7a4a",
//   color: "#fff",
//   border: "none",
//   borderRadius: 8,
//   padding: "10px 18px",
//   cursor: "pointer",
//   fontWeight: 600,
// };

// const cancelBtn = {
//   background: "#eee",
//   border: "none",
//   borderRadius: 8,
//   padding: "10px 18px",
//   cursor: "pointer",
// };

// const editBtn = {
//   background: "#e8f4fd",
//   color: "#1a6aaa",
//   border: "none",
//   borderRadius: 6,
//   padding: "5px 10px",
//   cursor: "pointer",
//   fontSize: 13,
// };

// const deleteBtn = {
//   background: "#fdecea",
//   color: "#c0392b",
//   border: "none",
//   borderRadius: 6,
//   padding: "5px 10px",
//   cursor: "pointer",
//   fontSize: 13,
// };

// const searchInput = {
//   border: "1px solid #ccc",
//   borderRadius: 8,
//   padding: "8px 12px",
// };

// const th = {
//   padding: 10,
//   textAlign: "left",
//   color: "#1a4a2e",
// };

// const td = {
//   padding: 10,
// };

// const modalOverlay = {
//   position: "fixed",
//   inset: 0,
//   background: "rgba(0,0,0,0.4)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

// const modalBox = {
//   background: "#fff",
//   padding: 25,
//   borderRadius: 12,
//   width: "100%",
//   maxWidth: 500,
// };

// const input = {
//   width: "100%",
//   padding: "10px",
//   borderRadius: 8,
//   border: "1px solid #c8e0cc",
// };

// const grid = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   gap: 12,
// };



// import { useState, useEffect } from "react";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// export default function ProceedingsMeeting() {
//   const [meetings, setMeetings] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [toast, setToast] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [editId, setEditId] = useState(null); // null = create mode, id = edit mode
//   const [deleteConfirm, setDeleteConfirm] = useState(null); // meeting _id to delete

//   const [formData, setFormData] = useState({
//     meetingNumber: "",
//     meetingType: "",
//     meetingDate: "",
//     meetingTime: "",
//     subjectId: "",
//     subjectType: "",
//     subjectName: "",
//   });

//   const isMobile = window.innerWidth < 640;

//   const showToast = (msg, type = "success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3000);
//   };

//   // "10:30" u2192 "10:30 AM" / "14:30" u2192 "2:30 PM"
//   const formatTime = (time) => {
//     if (!time) return "-";
//     const [hourStr, minute] = time.split(":");
//     let hour = parseInt(hourStr, 10);
//     const ampm = hour >= 12 ? "PM" : "AM";
//     hour = hour % 12 || 12;
//     return `${hour}:${minute} ${ampm}`;
//   };

//   // ─── Fetch all meetings ───────────────────────────────────────
//   const fetchMeetings = async (searchVal = "") => {
//     try {
//       setLoading(true);
//       const url = searchVal
//         ? `${BASE_URL}/getMeetings?search=${searchVal}`
//         : `${BASE_URL}/getMeetings`;

//       const res = await fetch(url);
//       const data = await res.json();

//       if (data.success) {
//         setMeetings(data.data);
//       } else {
//         showToast(data.message || "Failed to fetch meetings", "error");
//       }
//     } catch (err) {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMeetings();
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       fetchMeetings(search);
//     }, 400);
//     return () => clearTimeout(timer);
//   }, [search]);

//   // ─── Handlers ────────────────────────────────────────────────
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const openCreateModal = () => {
//     setEditId(null);
//     setFormData({
//       meetingNumber: "",
//       meetingType: "",
//       meetingDate: "",
//       meetingTime: "",
//       subjectId: "",
//       subjectType: "",
//       subjectName: "",
//     });
//     setShowModal(true);
//   };

//   const openEditModal = (m) => {
//     setEditId(m._id);
//     setFormData({
//       meetingNumber: m.meetingNumber,
//       meetingType: m.meetingType,
//       meetingDate: m.meetingDate ? m.meetingDate.slice(0, 10) : "",
//       meetingTime: m.meetingTime || "",
//       subjectId: m.subjectId || "",
//       subjectType: m.subjectType || "",
//       subjectName: m.subjectName || "",
//     });
//     setShowModal(true);
//   };

//   // ─── Create ───────────────────────────────────────────────────
//   const handleCreate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/createMeeting`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();

//       if (data.success) {
//         setShowModal(false);
//         showToast("Meeting created successfully");
//         fetchMeetings(search);
//       } else {
//         showToast(data.message || "Failed to create meeting", "error");
//       }
//     } catch (err) {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ─── Update ───────────────────────────────────────────────────
//   const handleUpdate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/updateMeeting/${editId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();

//       if (data.success) {
//         setShowModal(false);
//         setEditId(null);
//         showToast("Meeting updated successfully");
//         fetchMeetings(search);
//       } else {
//         showToast(data.message || "Failed to update meeting", "error");
//       }
//     } catch (err) {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = () => {
//     if (!formData.meetingNumber || !formData.meetingType) {
//       showToast("Please fill required fields", "error");
//       return;
//     }
//     editId ? handleUpdate() : handleCreate();
//   };

//   // ─── Delete ───────────────────────────────────────────────────
//   const handleDelete = async (id) => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/deleteMeeting/${id}`, {
//         method: "DELETE",
//       });
//       const data = await res.json();

//       if (data.success) {
//         setDeleteConfirm(null);
//         showToast("Meeting deleted successfully");
//         fetchMeetings(search);
//       } else {
//         showToast(data.message || "Failed to delete meeting", "error");
//       }
//     } catch (err) {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ─── UI ──────────────────────────────────────────────────────
//   return (
//     <div style={{ background: "#f0f4f0", minHeight: "100vh", padding: isMobile ? 16 : 24 }}>

//       {/* Toast */}
//       {toast && (
//         <div style={{
//           position: "fixed",
//           top: 20,
//           right: 20,
//           background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
//           color: "#fff",
//           padding: "10px 18px",
//           borderRadius: 8,
//           fontWeight: 600,
//           zIndex: 9999,
//         }}>
//           {toast.msg}
//         </div>
//       )}

//       {/* Header */}
//       <div style={{ marginBottom: 20 }}>
//         <h1 style={{ color: "#1a4a2e", margin: 0 }}>Meeting Proceedings</h1>
//         <p style={{ color: "#5a7a6a" }}>Sabha Kamkaj manage करा</p>

//         <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
//           <button onClick={openCreateModal} style={primaryBtn}>
//             + Create Meeting
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <div style={{ background: "#fff", borderRadius: 12, padding: 20 }}>
//         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15 }}>
//           <h3 style={{ margin: 0 }}>
//             Records ({meetings.length})
//           </h3>

//           <input
//             placeholder="Search meeting no..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             style={searchInput}
//           />
//         </div>

//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr style={{ background: "#f0f7f2" }}>
//               {["#", "Meeting No", "Type", "Date", "Time", "Subject ID", "Subject Type", "Subject Name", "Actions"].map(h => (
//                 <th key={h} style={th}>{h}</th>
//               ))}
//             </tr>
//           </thead>

//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan={9} style={{ textAlign: "center", padding: 20, color: "#888" }}>
//                   Loading...
//                 </td>
//               </tr>
//             ) : meetings.length === 0 ? (
//               <tr>
//                 <td colSpan={9} style={{ textAlign: "center", padding: 20 }}>
//                   No records found
//                 </td>
//               </tr>
//             ) : (
//               meetings.map((m, i) => (
//                 <tr key={m._id} style={{ borderBottom: "1px solid #eee" }}>
//                   <td style={td}>{i + 1}</td>
//                   <td style={td}>{m.meetingNumber}</td>
//                   <td style={td}>{m.meetingType}</td>
//                   <td style={td}>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</td>
//                   <td style={td}>{formatTime(m.meetingTime)}</td>
//                   <td style={td}>{m.subjectId}</td>
//                   <td style={td}>{m.subjectType}</td>
//                   <td style={td}>{m.subjectName}</td>
//                   <td style={td}>
//                     <div style={{ display: "flex", gap: 6 }}>
//                       <button onClick={() => openEditModal(m)} style={editBtn}>
//                         ✏️ Edit
//                       </button>
//                       <button onClick={() => setDeleteConfirm(m._id)} style={deleteBtn}>
//                         🗑️ Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Create / Edit Modal */}
//       {showModal && (
//         <div style={modalOverlay}>
//           <div style={modalBox}>
//             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
//               <h3 style={{ margin: 0 }}>{editId ? "Edit Meeting" : "Create Meeting"}</h3>
//               <button onClick={() => setShowModal(false)}>✕</button>
//             </div>

//             <div style={grid}>
//               <input
//                 name="meetingNumber"
//                 placeholder="Meeting Number"
//                 value={formData.meetingNumber}
//                 onChange={handleChange}
//                 style={input}
//               />

//               <select name="meetingType" value={formData.meetingType} onChange={handleChange} style={input}>
//                 <option value="">Type Of Meeting</option>
//                 <option>General Body</option>
//                 <option>Standing Committee</option>
//               </select>

//               <input
//                 name="meetingDate"
//                 type="date"
//                 value={formData.meetingDate}
//                 onChange={handleChange}
//                 style={input}
//               />

//               <input
//                 name="meetingTime"
//                 type="time"
//                 value={formData.meetingTime}
//                 onChange={handleChange}
//                 style={input}
//               />

//               <input
//                 name="subjectId"
//                 placeholder="Subject ID"
//                 value={formData.subjectId}
//                 onChange={handleChange}
//                 style={input}
//               />

//               <select name="subjectType" value={formData.subjectType} onChange={handleChange} style={input}>
//                 <option value="">Subject Type</option>
//                 <option>General</option>
//                 <option>Administrative and Financial Approval</option>
//                 <option>Contract Approval</option>
//               </select>

//               <input
//                 name="subjectName"
//                 placeholder="Subject Name"
//                 value={formData.subjectName}
//                 onChange={handleChange}
//                 style={{ ...input, gridColumn: "span 2" }}
//               />
//             </div>

//             <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
//               <button onClick={() => setShowModal(false)} style={cancelBtn}>
//                 Cancel
//               </button>
//               <button onClick={handleSubmit} style={primaryBtn} disabled={loading}>
//                 {loading ? "Saving..." : editId ? "Update" : "Save"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete Confirm Modal */}
//       {deleteConfirm && (
//         <div style={modalOverlay}>
//           <div style={{ ...modalBox, maxWidth: 380, textAlign: "center" }}>
//             <p style={{ fontSize: 18, fontWeight: 600, color: "#1a4a2e", marginBottom: 8 }}>
//               Delete Meeting?
//             </p>
//             <p style={{ color: "#888", marginBottom: 20 }}>
//               He record permanently delete होईल. Sure aahes ka?
//             </p>
//             <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
//               <button onClick={() => setDeleteConfirm(null)} style={cancelBtn}>
//                 Cancel
//               </button>
//               <button
//                 onClick={() => handleDelete(deleteConfirm)}
//                 style={{ ...primaryBtn, background: "#c0392b" }}
//                 disabled={loading}
//               >
//                 {loading ? "Deleting..." : "Yes, Delete"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// /* Styles — as it is */
// const primaryBtn = {
//   background: "#1a7a4a",
//   color: "#fff",
//   border: "none",
//   borderRadius: 8,
//   padding: "10px 18px",
//   cursor: "pointer",
//   fontWeight: 600,
// };

// const cancelBtn = {
//   background: "#eee",
//   border: "none",
//   borderRadius: 8,
//   padding: "10px 18px",
//   cursor: "pointer",
// };

// const editBtn = {
//   background: "#e8f4fd",
//   color: "#1a6aaa",
//   border: "none",
//   borderRadius: 6,
//   padding: "5px 10px",
//   cursor: "pointer",
//   fontSize: 13,
// };

// const deleteBtn = {
//   background: "#fdecea",
//   color: "#c0392b",
//   border: "none",
//   borderRadius: 6,
//   padding: "5px 10px",
//   cursor: "pointer",
//   fontSize: 13,
// };

// const searchInput = {
//   border: "1px solid #ccc",
//   borderRadius: 8,
//   padding: "8px 12px",
// };

// const th = {
//   padding: 10,
//   textAlign: "left",
//   color: "#1a4a2e",
// };

// const td = {
//   padding: 10,
// };

// const modalOverlay = {
//   position: "fixed",
//   inset: 0,
//   background: "rgba(0,0,0,0.4)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

// const modalBox = {
//   background: "#fff",
//   padding: 25,
//   borderRadius: 12,
//   width: "100%",
//   maxWidth: 500,
// };

// const input = {
//   width: "100%",
//   padding: "10px",
//   borderRadius: 8,
//   border: "1px solid #c8e0cc",
// };

// const grid = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   gap: 12,
// };




// import { useState, useEffect } from "react";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// export default function ProceedingsMeeting() {
//   const [meetings, setMeetings] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [toast, setToast] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [editId, setEditId] = useState(null); // null = create mode, id = edit mode
//   const [deleteConfirm, setDeleteConfirm] = useState(null); // meeting _id to delete

//   const [formData, setFormData] = useState({
//     meetingNumber: "",
//     meetingType: "",
//     meetingDate: "",
//     meetingHour: "",
//     meetingMinute: "",
//     meetingAmpm: "AM",
//     subjectId: "",
//     subjectType: "",
//     subjectName: "",
//   });

//   const isMobile = window.innerWidth < 640;

//   const showToast = (msg, type = "success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3000);
//   };

//   // "10:30" u2192 "10:30 AM" / "14:30" u2192 "2:30 PM"
//   const formatTime = (time) => {
//     if (!time) return "-";
//     const [hourStr, minute] = time.split(":");
//     let hour = parseInt(hourStr, 10);
//     const ampm = hour >= 12 ? "PM" : "AM";
//     hour = hour % 12 || 12;
//     return `${hour}:${minute} ${ampm}`;
//   };

//   // ─── Fetch all meetings ───────────────────────────────────────
//   const fetchMeetings = async (searchVal = "") => {
//     try {
//       setLoading(true);
//       const url = searchVal
//         ? `${BASE_URL}/getMeetings?search=${searchVal}`
//         : `${BASE_URL}/getMeetings`;

//       const res = await fetch(url);
//       const data = await res.json();

//       if (data.success) {
//         setMeetings(data.data);
//       } else {
//         showToast(data.message || "Failed to fetch meetings", "error");
//       }
//     } catch (err) {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMeetings();
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       fetchMeetings(search);
//     }, 400);
//     return () => clearTimeout(timer);
//   }, [search]);

//   // ─── Handlers ────────────────────────────────────────────────
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const openCreateModal = () => {
//     setEditId(null);
//     setFormData({
//       meetingNumber: "",
//       meetingType: "",
//       meetingDate: "",
//       meetingHour: "",
//       meetingMinute: "",
//       meetingAmpm: "AM",
//       subjectId: "",
//       subjectType: "",
//       subjectName: "",
//     });
//     setShowModal(true);
//   };

//   const openEditModal = (m) => {
//     setEditId(m._id);
//     setFormData({
//       meetingNumber: m.meetingNumber,
//       meetingType: m.meetingType,
//       meetingDate: m.meetingDate ? m.meetingDate.slice(0, 10) : "",
//       meetingHour: m.meetingTime ? (() => { const h = parseInt(m.meetingTime.split(":")[0], 10); return String(h % 12 || 12).padStart(2, "0"); })() : "",
//       meetingMinute: m.meetingTime ? m.meetingTime.split(":")[1] : "",
//       meetingAmpm: m.meetingTime ? (parseInt(m.meetingTime.split(":")[0], 10) >= 12 ? "PM" : "AM") : "AM",
//       subjectId: m.subjectId || "",
//       subjectType: m.subjectType || "",
//       subjectName: m.subjectName || "",
//     });
//     setShowModal(true);
//   };

//   // ─── Create ───────────────────────────────────────────────────
//   const handleCreate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/createMeeting`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, meetingTime: buildTimeString() }),
//       });
//       const data = await res.json();

//       if (data.success) {
//         setShowModal(false);
//         showToast("Meeting created successfully");
//         fetchMeetings(search);
//       } else {
//         showToast(data.message || "Failed to create meeting", "error");
//       }
//     } catch (err) {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ─── Update ───────────────────────────────────────────────────
//   const handleUpdate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/updateMeeting/${editId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, meetingTime: buildTimeString() }),
//       });
//       const data = await res.json();

//       if (data.success) {
//         setShowModal(false);
//         setEditId(null);
//         showToast("Meeting updated successfully");
//         fetchMeetings(search);
//       } else {
//         showToast(data.message || "Failed to update meeting", "error");
//       }
//     } catch (err) {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Build "HH:MM" 24hr string from hour/minute/ampm before sending to API
//   const buildTimeString = () => {
//     if (!formData.meetingHour || !formData.meetingMinute) return "";
//     let hour = parseInt(formData.meetingHour, 10);
//     if (formData.meetingAmpm === "PM" && hour !== 12) hour += 12;
//     if (formData.meetingAmpm === "AM" && hour === 12) hour = 0;
//     return `${String(hour).padStart(2, "0")}:${formData.meetingMinute}`;
//   };

//   const handleSubmit = () => {
//     if (!formData.meetingNumber || !formData.meetingType) {
//       showToast("Please fill required fields", "error");
//       return;
//     }
//     editId ? handleUpdate() : handleCreate();
//   };

//   // ─── Delete ───────────────────────────────────────────────────
//   const handleDelete = async (id) => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/deleteMeeting/${id}`, {
//         method: "DELETE",
//       });
//       const data = await res.json();

//       if (data.success) {
//         setDeleteConfirm(null);
//         showToast("Meeting deleted successfully");
//         fetchMeetings(search);
//       } else {
//         showToast(data.message || "Failed to delete meeting", "error");
//       }
//     } catch (err) {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ─── UI ──────────────────────────────────────────────────────
//   return (
//     <div style={{ background: "#f0f4f0", minHeight: "100vh", padding: isMobile ? 16 : 24 }}>

//       {/* Toast */}
//       {toast && (
//         <div style={{
//           position: "fixed",
//           top: 20,
//           right: 20,
//           background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
//           color: "#fff",
//           padding: "10px 18px",
//           borderRadius: 8,
//           fontWeight: 600,
//           zIndex: 9999,
//         }}>
//           {toast.msg}
//         </div>
//       )}

//       {/* Header */}
//       <div style={{ marginBottom: 20 }}>
//         <h1 style={{ color: "#1a4a2e", margin: 0 }}>Meeting Proceedings</h1>
//         <p style={{ color: "#5a7a6a" }}>Sabha Kamkaj manage करा</p>

//         <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
//           <button onClick={openCreateModal} style={primaryBtn}>
//             + Create Meeting
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <div style={{ background: "#fff", borderRadius: 12, padding: 20 }}>
//         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15 }}>
//           <h3 style={{ margin: 0 }}>
//             Records ({meetings.length})
//           </h3>

//           <input
//             placeholder="Search meeting no..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             style={searchInput}
//           />
//         </div>

//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr style={{ background: "#f0f7f2" }}>
//               {["#", "Meeting No", "Type", "Date", "Time", "Subject ID", "Subject Type", "Subject Name", "Actions"].map(h => (
//                 <th key={h} style={th}>{h}</th>
//               ))}
//             </tr>
//           </thead>

//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan={9} style={{ textAlign: "center", padding: 20, color: "#888" }}>
//                   Loading...
//                 </td>
//               </tr>
//             ) : meetings.length === 0 ? (
//               <tr>
//                 <td colSpan={9} style={{ textAlign: "center", padding: 20 }}>
//                   No records found
//                 </td>
//               </tr>
//             ) : (
//               meetings.map((m, i) => (
//                 <tr key={m._id} style={{ borderBottom: "1px solid #eee" }}>
//                   <td style={td}>{i + 1}</td>
//                   <td style={td}>{m.meetingNumber}</td>
//                   <td style={td}>{m.meetingType}</td>
//                   <td style={td}>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</td>
//                   <td style={td}>{formatTime(m.meetingTime)}</td>
//                   <td style={td}>{m.subjectId}</td>
//                   <td style={td}>{m.subjectType}</td>
//                   <td style={td}>{m.subjectName}</td>
//                   <td style={td}>
//                     <div style={{ display: "flex", gap: 6 }}>
//                       <button onClick={() => openEditModal(m)} style={editBtn}>
//                         ✏️ Edit
//                       </button>
//                       <button onClick={() => setDeleteConfirm(m._id)} style={deleteBtn}>
//                         🗑️ Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Create / Edit Modal */}
//       {showModal && (
//         <div style={modalOverlay}>
//           <div style={modalBox}>
//             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
//               <h3 style={{ margin: 0 }}>{editId ? "Edit Meeting" : "Create Meeting"}</h3>
//               <button onClick={() => setShowModal(false)}>✕</button>
//             </div>

//             <div style={grid}>
//               <input
//                 name="meetingNumber"
//                 placeholder="Meeting Number"
//                 value={formData.meetingNumber}
//                 onChange={handleChange}
//                 style={input}
//               />

//               <select name="meetingType" value={formData.meetingType} onChange={handleChange} style={input}>
//                 <option value="">Type Of Meeting</option>
//                 <option>General Body</option>
//                 <option>Standing Committee</option>
//               </select>

//               {/* Meeting Date with label */}
//               <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//                 <label style={labelStyle}>Meeting Date</label>
//                 <input
//                   name="meetingDate"
//                   type="date"
//                   value={formData.meetingDate}
//                   onChange={handleChange}
//                   style={input}
//                 />
//               </div>

//               {/* Meeting Time with label + AM/PM */}
//               <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//                 <label style={labelStyle}>Meeting Time</label>
//                 <div style={{ display: "flex", gap: 6 }}>
//                   <select
//                     name="meetingHour"
//                     value={formData.meetingHour}
//                     onChange={handleChange}
//                     style={{ ...input, flex: 1 }}
//                   >
//                     <option value="">HH</option>
//                     {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")).map(h => (
//                       <option key={h} value={h}>{h}</option>
//                     ))}
//                   </select>
//                   <select
//                     name="meetingMinute"
//                     value={formData.meetingMinute}
//                     onChange={handleChange}
//                     style={{ ...input, flex: 1 }}
//                   >
//                     <option value="">MM</option>
//                     {["00","05","10","15","20","25","30","35","40","45","50","55"].map(m => (
//                       <option key={m} value={m}>{m}</option>
//                     ))}
//                   </select>
//                   <select
//                     name="meetingAmpm"
//                     value={formData.meetingAmpm}
//                     onChange={handleChange}
//                     style={{ ...input, flex: 1 }}
//                   >
//                     <option value="AM">AM</option>
//                     <option value="PM">PM</option>
//                   </select>
//                 </div>
//               </div>

//               <input
//                 name="subjectId"
//                 placeholder="Subject ID"
//                 value={formData.subjectId}
//                 onChange={handleChange}
//                 style={input}
//               />

//               <select name="subjectType" value={formData.subjectType} onChange={handleChange} style={input}>
//                 <option value="">Subject Type</option>
//                 <option>General</option>
//                 <option>Administrative and Financial Approval</option>
//                 <option>Contract Approval</option>
//               </select>

//               <input
//                 name="subjectName"
//                 placeholder="Subject Name"
//                 value={formData.subjectName}
//                 onChange={handleChange}
//                 style={{ ...input, gridColumn: "span 2" }}
//               />
//             </div>

//             <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
//               <button onClick={() => setShowModal(false)} style={cancelBtn}>
//                 Cancel
//               </button>
//               <button onClick={handleSubmit} style={primaryBtn} disabled={loading}>
//                 {loading ? "Saving..." : editId ? "Update" : "Save"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete Confirm Modal */}
//       {deleteConfirm && (
//         <div style={modalOverlay}>
//           <div style={{ ...modalBox, maxWidth: 380, textAlign: "center" }}>
//             <p style={{ fontSize: 18, fontWeight: 600, color: "#1a4a2e", marginBottom: 8 }}>
//               Delete Meeting?
//             </p>
//             <p style={{ color: "#888", marginBottom: 20 }}>
//               He record permanently delete होईल. Sure aahes ka?
//             </p>
//             <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
//               <button onClick={() => setDeleteConfirm(null)} style={cancelBtn}>
//                 Cancel
//               </button>
//               <button
//                 onClick={() => handleDelete(deleteConfirm)}
//                 style={{ ...primaryBtn, background: "#c0392b" }}
//                 disabled={loading}
//               >
//                 {loading ? "Deleting..." : "Yes, Delete"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// /* Styles — as it is */
// const primaryBtn = {
//   background: "#1a7a4a",
//   color: "#fff",
//   border: "none",
//   borderRadius: 8,
//   padding: "10px 18px",
//   cursor: "pointer",
//   fontWeight: 600,
// };

// const cancelBtn = {
//   background: "#eee",
//   border: "none",
//   borderRadius: 8,
//   padding: "10px 18px",
//   cursor: "pointer",
// };

// const editBtn = {
//   background: "#e8f4fd",
//   color: "#1a6aaa",
//   border: "none",
//   borderRadius: 6,
//   padding: "5px 10px",
//   cursor: "pointer",
//   fontSize: 13,
// };

// const deleteBtn = {
//   background: "#fdecea",
//   color: "#c0392b",
//   border: "none",
//   borderRadius: 6,
//   padding: "5px 10px",
//   cursor: "pointer",
//   fontSize: 13,
// };

// const searchInput = {
//   border: "1px solid #ccc",
//   borderRadius: 8,
//   padding: "8px 12px",
// };

// const th = {
//   padding: 10,
//   textAlign: "left",
//   color: "#1a4a2e",
// };

// const td = {
//   padding: 10,
// };

// const modalOverlay = {
//   position: "fixed",
//   inset: 0,
//   background: "rgba(0,0,0,0.4)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

// const modalBox = {
//   background: "#fff",
//   padding: 25,
//   borderRadius: 12,
//   width: "100%",
//   maxWidth: 500,
// };

// const input = {
//   width: "100%",
//   padding: "10px",
//   borderRadius: 8,
//   border: "1px solid #c8e0cc",
// };

// const grid = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   gap: 12,
// };

// const labelStyle = {
//   fontSize: 12,
//   fontWeight: 600,
//   color: "#5a7a6a",
// };




import { useState, useEffect } from "react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export default function ProceedingsMeeting() {
  const [meetings, setMeetings] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const [formData, setFormData] = useState({
    meetingNumber: "",
    meetingType: "",
    meetingDate: "",
    meetingHour: "",
    meetingMinute: "",
    meetingAmpm: "AM",
    subjectId: "",
    subjectType: "",
    subjectName: "",
  });

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  // "14:30" → "2:30 PM"
  const formatTime = (time) => {
    if (!time) return "-";
    const [hourStr, minute] = time.split(":");
    let hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${ampm}`;
  };

  // ─── Fetch ────────────────────────────────────────────────────
  const fetchMeetings = async (searchVal = "") => {
    try {
      setLoading(true);
      const url = searchVal
        ? `${BASE_URL}/getMeetings?search=${searchVal}`
        : `${BASE_URL}/getMeetings`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) setMeetings(data.data);
      else showToast(data.message || "Failed to fetch meetings", "error");
    } catch {
      showToast("Server error. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchMeetings(); }, []);
  useEffect(() => {
    const timer = setTimeout(() => fetchMeetings(search), 400);
    return () => clearTimeout(timer);
  }, [search]);

  // ─── Handlers ────────────────────────────────────────────────
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const emptyForm = {
    meetingNumber: "", meetingType: "", meetingDate: "",
    meetingHour: "", meetingMinute: "", meetingAmpm: "AM",
    subjectId: "", subjectType: "", subjectName: "",
  };

  const openCreateModal = () => { setEditId(null); setFormData(emptyForm); setShowModal(true); };

  const openEditModal = (m) => {
    setEditId(m._id);
    setFormData({
      meetingNumber: m.meetingNumber,
      meetingType: m.meetingType,
      meetingDate: m.meetingDate ? m.meetingDate.slice(0, 10) : "",
      meetingHour: m.meetingTime ? (() => { const h = parseInt(m.meetingTime.split(":")[0], 10); return String(h % 12 || 12).padStart(2, "0"); })() : "",
      meetingMinute: m.meetingTime ? m.meetingTime.split(":")[1] : "",
      meetingAmpm: m.meetingTime ? (parseInt(m.meetingTime.split(":")[0], 10) >= 12 ? "PM" : "AM") : "AM",
      subjectId: m.subjectId || "",
      subjectType: m.subjectType || "",
      subjectName: m.subjectName || "",
    });
    setShowModal(true);
  };

  const buildTimeString = () => {
    if (!formData.meetingHour || !formData.meetingMinute) return "";
    let hour = parseInt(formData.meetingHour, 10);
    if (formData.meetingAmpm === "PM" && hour !== 12) hour += 12;
    if (formData.meetingAmpm === "AM" && hour === 12) hour = 0;
    return `${String(hour).padStart(2, "0")}:${formData.meetingMinute}`;
  };

  const handleCreate = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/createMeeting`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, meetingTime: buildTimeString() }),
      });
      const data = await res.json();
      if (data.success) { setShowModal(false); showToast("Meeting created successfully"); fetchMeetings(search); }
      else showToast(data.message || "Failed to create meeting", "error");
    } catch { showToast("Server error. Please try again.", "error"); }
    finally { setLoading(false); }
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/updateMeeting/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, meetingTime: buildTimeString() }),
      });
      const data = await res.json();
      if (data.success) { setShowModal(false); setEditId(null); showToast("Meeting updated successfully"); fetchMeetings(search); }
      else showToast(data.message || "Failed to update meeting", "error");
    } catch { showToast("Server error. Please try again.", "error"); }
    finally { setLoading(false); }
  };

  const handleSubmit = () => {
    if (!formData.meetingNumber || !formData.meetingType) { showToast("Please fill required fields", "error"); return; }
    editId ? handleUpdate() : handleCreate();
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/deleteMeeting/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) { setDeleteConfirm(null); showToast("Meeting deleted successfully"); fetchMeetings(search); }
      else showToast(data.message || "Failed to delete meeting", "error");
    } catch { showToast("Server error. Please try again.", "error"); }
    finally { setLoading(false); }
  };

  // ─── UI ──────────────────────────────────────────────────────
  return (
    <div style={{ background: "#f0f4f0", minHeight: "100vh", padding: isMobile ? 12 : 24 }}>

      {/* Toast */}
      {toast && (
        <div style={{
          position: "fixed", top: 16, right: 16, left: isMobile ? 16 : "auto",
          background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
          color: "#fff", padding: "10px 18px", borderRadius: 8, fontWeight: 600, zIndex: 9999,
        }}>
          {toast.msg}
        </div>
      )}

      {/* Header */}
      <div style={{ marginBottom: 16 }}>
        <h1 style={{ color: "#1a4a2e", margin: 0, fontSize: isMobile ? 20 : 26 }}>Meeting Proceedings</h1>
        <p style={{ color: "#5a7a6a", margin: "4px 0 10px" }}>Sabha Kamkaj manage करा</p>
        <button onClick={openCreateModal} style={primaryBtn}>+ Create Meeting</button>
      </div>

      {/* Table card */}
      <div style={{ background: "#fff", borderRadius: 12, padding: isMobile ? 12 : 20, overflowX: "auto" }}>

        {/* Records header + search */}
        <div style={{
          display: "flex", flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center",
          gap: 10, marginBottom: 15,
        }}>
          <h3 style={{ margin: 0 }}>Records ({meetings.length})</h3>
          <input
            placeholder="Search meeting no..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ ...searchInput, width: isMobile ? "100%" : "auto" }}
          />
        </div>

        {/* Mobile: card view / Desktop: table */}
        {isMobile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {loading ? (
              <div style={{ textAlign: "center", padding: 20, color: "#888" }}>Loading...</div>
            ) : meetings.length === 0 ? (
              <div style={{ textAlign: "center", padding: 20 }}>No records found</div>
            ) : (
              meetings.map((m, i) => (
                <div key={m._id} style={{
                  border: "1px solid #e0ede5", borderRadius: 10, padding: 12,
                  background: "#f9fdf9",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span style={{ fontWeight: 700, color: "#1a4a2e", fontSize: 15 }}>
                      #{i + 1} — {m.meetingNumber}
                    </span>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button onClick={() => openEditModal(m)} style={editBtn}>✏️</button>
                      <button onClick={() => setDeleteConfirm(m._id)} style={deleteBtn}>🗑️</button>
                    </div>
                  </div>
                  <div style={cardRow}><span style={cardLabel}>Type</span><span>{m.meetingType || "-"}</span></div>
                  <div style={cardRow}><span style={cardLabel}>Date</span><span>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</span></div>
                  <div style={cardRow}><span style={cardLabel}>Time</span><span>{formatTime(m.meetingTime)}</span></div>
                  <div style={cardRow}><span style={cardLabel}>Subject ID</span><span>{m.subjectId || "-"}</span></div>
                  <div style={cardRow}><span style={cardLabel}>Subject Type</span><span>{m.subjectType || "-"}</span></div>
                  <div style={cardRow}><span style={cardLabel}>Subject Name</span><span>{m.subjectName || "-"}</span></div>
                </div>
              ))
            )}
          </div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f0f7f2" }}>
                {["#", "Meeting No", "Type", "Date", "Time", "Subject ID", "Subject Type", "Subject Name", "Actions"].map(h => (
                  <th key={h} style={th}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={9} style={{ textAlign: "center", padding: 20, color: "#888" }}>Loading...</td></tr>
              ) : meetings.length === 0 ? (
                <tr><td colSpan={9} style={{ textAlign: "center", padding: 20 }}>No records found</td></tr>
              ) : (
                meetings.map((m, i) => (
                  <tr key={m._id} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={td}>{i + 1}</td>
                    <td style={td}>{m.meetingNumber}</td>
                    <td style={td}>{m.meetingType}</td>
                    <td style={td}>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</td>
                    <td style={td}>{formatTime(m.meetingTime)}</td>
                    <td style={td}>{m.subjectId}</td>
                    <td style={td}>{m.subjectType}</td>
                    <td style={td}>{m.subjectName}</td>
                    <td style={td}>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button onClick={() => openEditModal(m)} style={editBtn}>✏️ Edit</button>
                        <button onClick={() => setDeleteConfirm(m._id)} style={deleteBtn}>🗑️ Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>

     
      {/* {showModal && (
        <div style={modalOverlay}>
          <div style={{
            ...modalBox,
            maxHeight: "90vh",
            overflowY: "auto",
            width: isMobile ? "95%" : "100%",
            padding: isMobile ? 16 : 25,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
              <h3 style={{ margin: 0 }}>{editId ? "Edit Meeting" : "Create Meeting"}</h3>
              <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer" }}>✕</button>
            </div>

            <div style={{ ...grid, gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}>
              <input name="meetingNumber" placeholder="Meeting Number" value={formData.meetingNumber} onChange={handleChange} style={input} />

              <select name="meetingType" value={formData.meetingType} onChange={handleChange} style={input}>
                <option value="">Type Of Meeting</option>
                <option>General Body</option>
                <option>Standing Committee</option>
              </select>

            
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={labelStyle}>Meeting Date</label>
                <input name="meetingDate" type="date" value={formData.meetingDate} onChange={handleChange} style={input} />
              </div>

          
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={labelStyle}>Meeting Time</label>
                <div style={{ display: "flex", gap: 6 }}>
                  <select name="meetingHour" value={formData.meetingHour} onChange={handleChange} style={{ ...input, flex: 1, padding: "10px 4px" }}>
                    <option value="">HH</option>
                    {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")).map(h => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                  <select name="meetingMinute" value={formData.meetingMinute} onChange={handleChange} style={{ ...input, flex: 1, padding: "10px 4px" }}>
                    <option value="">MM</option>
                    {["00","05","10","15","20","25","30","35","40","45","50","55"].map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <select name="meetingAmpm" value={formData.meetingAmpm} onChange={handleChange} style={{ ...input, flex: 1, padding: "10px 4px" }}>
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>

              <input name="subjectId" placeholder="Subject ID" value={formData.subjectId} onChange={handleChange} style={input} />

              <select name="subjectType" value={formData.subjectType} onChange={handleChange} style={input}>
                <option value="">Subject Type</option>
                <option>General</option>
                <option>Administrative and Financial Approval</option>
                <option>Contract Approval</option>
              </select>

              <input
                name="subjectName"
                placeholder="Subject Name"
                value={formData.subjectName}
                onChange={handleChange}
                style={{ ...input, gridColumn: isMobile ? "1" : "span 2" }}
              />
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <button onClick={() => setShowModal(false)} style={cancelBtn}>Cancel</button>
              <button onClick={handleSubmit} style={primaryBtn} disabled={loading}>
                {loading ? "Saving..." : editId ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )} */}


{showModal && (
  <div style={modalOverlay}>
    <div style={{
      ...modalBox,
      maxHeight: "90vh",
      overflowY: "auto",
      width: isMobile ? "95%" : "100%",
      padding: isMobile ? 16 : 25,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <h3 style={{ margin: 0 }}>{editId ? "Edit Meeting" : "Create Meeting"}</h3>
        <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer" }}>✕</button>
      </div>

      <div style={{ ...grid, gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}>

        {/* Meeting Number */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label style={labelStyle}>Meeting Number</label>
          <input name="meetingNumber" placeholder="Meeting Number" value={formData.meetingNumber} onChange={handleChange} style={input} />
        </div>

        {/* Meeting Type */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label style={labelStyle}>Type Of Meeting</label>
          <select name="meetingType" value={formData.meetingType} onChange={handleChange} style={input}>
            <option value="">Select Type</option>
            <option>General Body</option>
            <option>Standing Committee</option>
          </select>
        </div>

        {/* Meeting Date */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label style={labelStyle}>Meeting Date</label>
          <input name="meetingDate" type="date" value={formData.meetingDate} onChange={handleChange} style={input} />
        </div>

        {/* Meeting Time */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label style={labelStyle}>Meeting Time</label>
          <div style={{ display: "flex", gap: 6 }}>
            <select name="meetingHour" value={formData.meetingHour} onChange={handleChange} style={{ ...input, flex: 1, padding: "10px 4px" }}>
              <option value="">HH</option>
              {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")).map(h => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
            <select name="meetingMinute" value={formData.meetingMinute} onChange={handleChange} style={{ ...input, flex: 1, padding: "10px 4px" }}>
              <option value="">MM</option>
              {["00","05","10","15","20","25","30","35","40","45","50","55"].map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <select name="meetingAmpm" value={formData.meetingAmpm} onChange={handleChange} style={{ ...input, flex: 1, padding: "10px 4px" }}>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>

        {/* Subject ID */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label style={labelStyle}>Subject ID</label>
          <input name="subjectId" placeholder="Subject ID" value={formData.subjectId} onChange={handleChange} style={input} />
        </div>

        {/* Subject Type */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label style={labelStyle}>Subject Type</label>
          <select name="subjectType" value={formData.subjectType} onChange={handleChange} style={input}>
            <option value="">Select Subject Type</option>
            <option>General</option>
            <option>Administrative and Financial Approval</option>
            <option>Contract Approval</option>
          </select>
        </div>

        {/* Subject Name */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4, gridColumn: isMobile ? "1" : "span 2" }}>
          <label style={labelStyle}>Subject Name</label>
          <input
            name="subjectName"
            placeholder="Subject Name"
            value={formData.subjectName}
            onChange={handleChange}
            style={{ ...input, gridColumn: isMobile ? "1" : "span 2" }}
          />
        </div>

      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <button onClick={() => setShowModal(false)} style={cancelBtn}>Cancel</button>
        <button onClick={handleSubmit} style={primaryBtn} disabled={loading}>
          {loading ? "Saving..." : editId ? "Update" : "Save"}
        </button>
      </div>
    </div>
  </div>
)}


      {/* Delete Confirm Modal */}
      {deleteConfirm && (
        <div style={modalOverlay}>
          <div style={{ ...modalBox, maxWidth: 380, textAlign: "center", width: isMobile ? "90%" : "100%" }}>
            <p style={{ fontSize: 18, fontWeight: 600, color: "#1a4a2e", marginBottom: 8 }}>Delete Meeting?</p>
            <p style={{ color: "#888", marginBottom: 20 }}>He record permanently delete होईल. Sure aahes ka?</p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <button onClick={() => setDeleteConfirm(null)} style={cancelBtn}>Cancel</button>
              <button onClick={() => handleDelete(deleteConfirm)} style={{ ...primaryBtn, background: "#c0392b" }} disabled={loading}>
                {loading ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

/* ── Styles ── */
const primaryBtn = {
  background: "#1a7a4a", color: "#fff", border: "none",
  borderRadius: 8, padding: "10px 18px", cursor: "pointer", fontWeight: 600,
};
const cancelBtn = {
  background: "#eee", border: "none",
  borderRadius: 8, padding: "10px 18px", cursor: "pointer",
};
const editBtn = {
  background: "#e8f4fd", color: "#1a6aaa", border: "none",
  borderRadius: 6, padding: "5px 10px", cursor: "pointer", fontSize: 13,
};
const deleteBtn = {
  background: "#fdecea", color: "#c0392b", border: "none",
  borderRadius: 6, padding: "5px 10px", cursor: "pointer", fontSize: 13,
};
const searchInput = {
  border: "1px solid #ccc", borderRadius: 8, padding: "8px 12px",
};
const th = { padding: 10, textAlign: "left", color: "#1a4a2e" };
const td = { padding: 10 };
const modalOverlay = {
  position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
  display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000,
  padding: 16,
};
const modalBox = {
  background: "#fff", padding: 25, borderRadius: 12, width: "100%", maxWidth: 500,
};
const input = {
  width: "100%", padding: "10px", borderRadius: 8,
  border: "1px solid #c8e0cc", boxSizing: "border-box",
};
const grid = {
  display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
};
const labelStyle = {
  fontSize: 12, fontWeight: 600, color: "#5a7a6a",
};
const cardRow = {
  display: "flex", justifyContent: "space-between",
  fontSize: 13, padding: "3px 0", borderBottom: "1px solid #eef4ee",
};
const cardLabel = {
  color: "#5a7a6a", fontWeight: 600, minWidth: 100,
};