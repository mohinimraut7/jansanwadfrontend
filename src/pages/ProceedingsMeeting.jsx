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




// import { useState, useEffect } from "react";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// export default function ProceedingsMeeting() {
//   const [meetings, setMeetings] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [toast, setToast] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [deleteConfirm, setDeleteConfirm] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

//   useEffect(() => {
//     const onResize = () => setIsMobile(window.innerWidth < 640);
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

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

//   const showToast = (msg, type = "success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3000);
//   };

//   // "14:30" → "2:30 PM"
//   const formatTime = (time) => {
//     if (!time) return "-";
//     const [hourStr, minute] = time.split(":");
//     let hour = parseInt(hourStr, 10);
//     const ampm = hour >= 12 ? "PM" : "AM";
//     hour = hour % 12 || 12;
//     return `${hour}:${minute} ${ampm}`;
//   };

//   // ─── Fetch ────────────────────────────────────────────────────
//   const fetchMeetings = async (searchVal = "") => {
//     try {
//       setLoading(true);
//       const url = searchVal
//         ? `${BASE_URL}/getMeetings?search=${searchVal}`
//         : `${BASE_URL}/getMeetings`;
//       const res = await fetch(url);
//       const data = await res.json();
//       if (data.success) setMeetings(data.data);
//       else showToast(data.message || "Failed to fetch meetings", "error");
//     } catch {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { fetchMeetings(); }, []);
//   useEffect(() => {
//     const timer = setTimeout(() => fetchMeetings(search), 400);
//     return () => clearTimeout(timer);
//   }, [search]);

//   // ─── Handlers ────────────────────────────────────────────────
//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const emptyForm = {
//     meetingNumber: "", meetingType: "", meetingDate: "",
//     meetingHour: "", meetingMinute: "", meetingAmpm: "AM",
//     subjectId: "", subjectType: "", subjectName: "",
//   };

//   const openCreateModal = () => { setEditId(null); setFormData(emptyForm); setShowModal(true); };

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

//   const buildTimeString = () => {
//     if (!formData.meetingHour || !formData.meetingMinute) return "";
//     let hour = parseInt(formData.meetingHour, 10);
//     if (formData.meetingAmpm === "PM" && hour !== 12) hour += 12;
//     if (formData.meetingAmpm === "AM" && hour === 12) hour = 0;
//     return `${String(hour).padStart(2, "0")}:${formData.meetingMinute}`;
//   };

//   const handleCreate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/createMeeting`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, meetingTime: buildTimeString() }),
//       });
//       const data = await res.json();
//       if (data.success) { setShowModal(false); showToast("Meeting created successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to create meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   const handleUpdate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/updateMeeting/${editId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, meetingTime: buildTimeString() }),
//       });
//       const data = await res.json();
//       if (data.success) { setShowModal(false); setEditId(null); showToast("Meeting updated successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to update meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   const handleSubmit = () => {
//     if (!formData.meetingNumber || !formData.meetingType) { showToast("Please fill required fields", "error"); return; }
//     editId ? handleUpdate() : handleCreate();
//   };

//   const handleDelete = async (id) => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/deleteMeeting/${id}`, { method: "DELETE" });
//       const data = await res.json();
//       if (data.success) { setDeleteConfirm(null); showToast("Meeting deleted successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to delete meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   // ─── UI ──────────────────────────────────────────────────────
//   return (
//     <div style={{ background: "#f0f4f0", minHeight: "100vh", padding: isMobile ? 12 : 24 }}>

//       {/* Toast */}
//       {toast && (
//         <div style={{
//           position: "fixed", top: 16, right: 16, left: isMobile ? 16 : "auto",
//           background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
//           color: "#fff", padding: "10px 18px", borderRadius: 8, fontWeight: 600, zIndex: 9999,
//         }}>
//           {toast.msg}
//         </div>
//       )}

//       {/* Header */}
//       <div style={{ marginBottom: 16 }}>
//         <h1 style={{ color: "#1a4a2e", margin: 0, fontSize: isMobile ? 20 : 26 }}>Meeting Proceedings</h1>
//         <p style={{ color: "#5a7a6a", margin: "4px 0 10px" }}>Sabha Kamkaj manage करा</p>
//         <button onClick={openCreateModal} style={primaryBtn}>+ Create Meeting</button>
//       </div>

//       {/* Table card */}
//       <div style={{ background: "#fff", borderRadius: 12, padding: isMobile ? 12 : 20, overflowX: "auto" }}>

//         {/* Records header + search */}
//         <div style={{
//           display: "flex", flexDirection: isMobile ? "column" : "row",
//           justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center",
//           gap: 10, marginBottom: 15,
//         }}>
//           <h3 style={{ margin: 0 }}>Records ({meetings.length})</h3>
//           <input
//             placeholder="Search meeting no..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             style={{ ...searchInput, width: isMobile ? "100%" : "auto" }}
//           />
//         </div>

//         {/* Mobile: card view / Desktop: table */}
//         {isMobile ? (
//           <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//             {loading ? (
//               <div style={{ textAlign: "center", padding: 20, color: "#888" }}>Loading...</div>
//             ) : meetings.length === 0 ? (
//               <div style={{ textAlign: "center", padding: 20 }}>No records found</div>
//             ) : (
//               meetings.map((m, i) => (
//                 <div key={m._id} style={{
//                   border: "1px solid #e0ede5", borderRadius: 10, padding: 12,
//                   background: "#f9fdf9",
//                 }}>
//                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
//                     <span style={{ fontWeight: 700, color: "#1a4a2e", fontSize: 15 }}>
//                       #{i + 1} — {m.meetingNumber}
//                     </span>
//                     <div style={{ display: "flex", gap: 6 }}>
//                       <button onClick={() => openEditModal(m)} style={editBtn}>✏️</button>
//                       <button onClick={() => setDeleteConfirm(m._id)} style={deleteBtn}>🗑️</button>
//                     </div>
//                   </div>
//                   <div style={cardRow}><span style={cardLabel}>Type</span><span>{m.meetingType || "-"}</span></div>
//                   <div style={cardRow}><span style={cardLabel}>Date</span><span>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</span></div>
//                   <div style={cardRow}><span style={cardLabel}>Time</span><span>{formatTime(m.meetingTime)}</span></div>
//                   <div style={cardRow}><span style={cardLabel}>Subject ID</span><span>{m.subjectId || "-"}</span></div>
//                   <div style={cardRow}><span style={cardLabel}>Subject Type</span><span>{m.subjectType || "-"}</span></div>
//                   <div style={cardRow}><span style={cardLabel}>Subject Name</span><span>{m.subjectName || "-"}</span></div>
//                 </div>
//               ))
//             )}
//           </div>
//         ) : (
//           <table style={{ width: "100%", borderCollapse: "collapse" }}>
//             <thead>
//               <tr style={{ background: "#f0f7f2" }}>
//                 {["#", "Meeting No", "Type", "Date", "Time", "Subject ID", "Subject Type", "Subject Name", "Actions"].map(h => (
//                   <th key={h} style={th}>{h}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <tr><td colSpan={9} style={{ textAlign: "center", padding: 20, color: "#888" }}>Loading...</td></tr>
//               ) : meetings.length === 0 ? (
//                 <tr><td colSpan={9} style={{ textAlign: "center", padding: 20 }}>No records found</td></tr>
//               ) : (
//                 meetings.map((m, i) => (
//                   <tr key={m._id} style={{ borderBottom: "1px solid #eee" }}>
//                     <td style={td}>{i + 1}</td>
//                     <td style={td}>{m.meetingNumber}</td>
//                     <td style={td}>{m.meetingType}</td>
//                     <td style={td}>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</td>
//                     <td style={td}>{formatTime(m.meetingTime)}</td>
//                     <td style={td}>{m.subjectId}</td>
//                     <td style={td}>{m.subjectType}</td>
//                     <td style={td}>{m.subjectName}</td>
//                     <td style={td}>
//                       <div style={{ display: "flex", gap: 6 }}>
//                         <button onClick={() => openEditModal(m)} style={editBtn}>✏️ Edit</button>
//                         <button onClick={() => setDeleteConfirm(m._id)} style={deleteBtn}>🗑️ Delete</button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         )}
//       </div>

     
//       {/* {showModal && (
//         <div style={modalOverlay}>
//           <div style={{
//             ...modalBox,
//             maxHeight: "90vh",
//             overflowY: "auto",
//             width: isMobile ? "95%" : "100%",
//             padding: isMobile ? 16 : 25,
//           }}>
//             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
//               <h3 style={{ margin: 0 }}>{editId ? "Edit Meeting" : "Create Meeting"}</h3>
//               <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer" }}>✕</button>
//             </div>

//             <div style={{ ...grid, gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}>
//               <input name="meetingNumber" placeholder="Meeting Number" value={formData.meetingNumber} onChange={handleChange} style={input} />

//               <select name="meetingType" value={formData.meetingType} onChange={handleChange} style={input}>
//                 <option value="">Type Of Meeting</option>
//                 <option>General Body</option>
//                 <option>Standing Committee</option>
//               </select>

            
//               <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//                 <label style={labelStyle}>Meeting Date</label>
//                 <input name="meetingDate" type="date" value={formData.meetingDate} onChange={handleChange} style={input} />
//               </div>

          
//               <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//                 <label style={labelStyle}>Meeting Time</label>
//                 <div style={{ display: "flex", gap: 6 }}>
//                   <select name="meetingHour" value={formData.meetingHour} onChange={handleChange} style={{ ...input, flex: 1, padding: "10px 4px" }}>
//                     <option value="">HH</option>
//                     {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")).map(h => (
//                       <option key={h} value={h}>{h}</option>
//                     ))}
//                   </select>
//                   <select name="meetingMinute" value={formData.meetingMinute} onChange={handleChange} style={{ ...input, flex: 1, padding: "10px 4px" }}>
//                     <option value="">MM</option>
//                     {["00","05","10","15","20","25","30","35","40","45","50","55"].map(m => (
//                       <option key={m} value={m}>{m}</option>
//                     ))}
//                   </select>
//                   <select name="meetingAmpm" value={formData.meetingAmpm} onChange={handleChange} style={{ ...input, flex: 1, padding: "10px 4px" }}>
//                     <option value="AM">AM</option>
//                     <option value="PM">PM</option>
//                   </select>
//                 </div>
//               </div>

//               <input name="subjectId" placeholder="Subject ID" value={formData.subjectId} onChange={handleChange} style={input} />

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
//                 style={{ ...input, gridColumn: isMobile ? "1" : "span 2" }}
//               />
//             </div>

//             <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
//               <button onClick={() => setShowModal(false)} style={cancelBtn}>Cancel</button>
//               <button onClick={handleSubmit} style={primaryBtn} disabled={loading}>
//                 {loading ? "Saving..." : editId ? "Update" : "Save"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )} */}


// {showModal && (
//   <div style={modalOverlay}>
//     <div style={{
//       ...modalBox,
//       maxHeight: "90vh",
//       overflowY: "auto",
//       width: isMobile ? "95%" : "100%",
//       padding: isMobile ? 16 : 25,
//     }}>
//       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
//         <h3 style={{ margin: 0 }}>{editId ? "Edit Meeting" : "Create Meeting"}</h3>
//         <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer" }}>✕</button>
//       </div>

//       <div style={{ ...grid, gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}>

//         {/* Meeting Number */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//           <label style={labelStyle}>Meeting Number</label>
//           <input name="meetingNumber" placeholder="Meeting Number" value={formData.meetingNumber} onChange={handleChange} style={input} />
//         </div>

//         {/* Meeting Type */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//           <label style={labelStyle}>Type Of Meeting</label>
//           <select name="meetingType" value={formData.meetingType} onChange={handleChange} style={input}>
//             <option value="">Select Type</option>
//             <option>General Body</option>
//             <option>Standing Committee</option>
//           </select>
//         </div>

//         {/* Meeting Date */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//           <label style={labelStyle}>Meeting Date</label>
//           <input name="meetingDate" type="date" value={formData.meetingDate} onChange={handleChange} style={input} />
//         </div>

//         {/* Meeting Time */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//           <label style={labelStyle}>Meeting Time</label>
//           <div style={{ display: "flex", gap: 6 }}>
//             <select name="meetingHour" value={formData.meetingHour} onChange={handleChange} style={{ ...input, flex: 1, padding: "10px 4px" }}>
//               <option value="">HH</option>
//               {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")).map(h => (
//                 <option key={h} value={h}>{h}</option>
//               ))}
//             </select>
//             <select name="meetingMinute" value={formData.meetingMinute} onChange={handleChange} style={{ ...input, flex: 1, padding: "10px 4px" }}>
//               <option value="">MM</option>
//               {["00","05","10","15","20","25","30","35","40","45","50","55"].map(m => (
//                 <option key={m} value={m}>{m}</option>
//               ))}
//             </select>
//             <select name="meetingAmpm" value={formData.meetingAmpm} onChange={handleChange} style={{ ...input, flex: 1, padding: "10px 4px" }}>
//               <option value="AM">AM</option>
//               <option value="PM">PM</option>
//             </select>
//           </div>
//         </div>

//         {/* Subject ID */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//           <label style={labelStyle}>Subject ID</label>
//           <input name="subjectId" placeholder="Subject ID" value={formData.subjectId} onChange={handleChange} style={input} />
//         </div>

//         {/* Subject Type */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//           <label style={labelStyle}>Subject Type</label>
//           <select name="subjectType" value={formData.subjectType} onChange={handleChange} style={input}>
//             <option value="">Select Subject Type</option>
//             <option>General</option>
//             <option>Administrative and Financial Approval</option>
//             <option>Contract Approval</option>
//           </select>
//         </div>

//         {/* Subject Name */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 4, gridColumn: isMobile ? "1" : "span 2" }}>
//           <label style={labelStyle}>Subject Name</label>
//           <input
//             name="subjectName"
//             placeholder="Subject Name"
//             value={formData.subjectName}
//             onChange={handleChange}
//             style={{ ...input, gridColumn: isMobile ? "1" : "span 2" }}
//           />
//         </div>

//       </div>

//       <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
//         <button onClick={() => setShowModal(false)} style={cancelBtn}>Cancel</button>
//         <button onClick={handleSubmit} style={primaryBtn} disabled={loading}>
//           {loading ? "Saving..." : editId ? "Update" : "Save"}
//         </button>
//       </div>
//     </div>
//   </div>
// )}


//       {/* Delete Confirm Modal */}
//       {deleteConfirm && (
//         <div style={modalOverlay}>
//           <div style={{ ...modalBox, maxWidth: 380, textAlign: "center", width: isMobile ? "90%" : "100%" }}>
//             <p style={{ fontSize: 18, fontWeight: 600, color: "#1a4a2e", marginBottom: 8 }}>Delete Meeting?</p>
//             <p style={{ color: "#888", marginBottom: 20 }}>He record permanently delete होईल. Sure aahes ka?</p>
//             <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
//               <button onClick={() => setDeleteConfirm(null)} style={cancelBtn}>Cancel</button>
//               <button onClick={() => handleDelete(deleteConfirm)} style={{ ...primaryBtn, background: "#c0392b" }} disabled={loading}>
//                 {loading ? "Deleting..." : "Yes, Delete"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// /* ── Styles ── */
// const primaryBtn = {
//   background: "#1a7a4a", color: "#fff", border: "none",
//   borderRadius: 8, padding: "10px 18px", cursor: "pointer", fontWeight: 600,
// };
// const cancelBtn = {
//   background: "#eee", border: "none",
//   borderRadius: 8, padding: "10px 18px", cursor: "pointer",
// };
// const editBtn = {
//   background: "#e8f4fd", color: "#1a6aaa", border: "none",
//   borderRadius: 6, padding: "5px 10px", cursor: "pointer", fontSize: 13,
// };
// const deleteBtn = {
//   background: "#fdecea", color: "#c0392b", border: "none",
//   borderRadius: 6, padding: "5px 10px", cursor: "pointer", fontSize: 13,
// };
// const searchInput = {
//   border: "1px solid #ccc", borderRadius: 8, padding: "8px 12px",
// };
// const th = { padding: 10, textAlign: "left", color: "#1a4a2e" };
// const td = { padding: 10 };
// const modalOverlay = {
//   position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
//   display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000,
//   padding: 16,
// };
// const modalBox = {
//   background: "#fff", padding: 25, borderRadius: 12, width: "100%", maxWidth: 500,
// };
// const input = {
//   width: "100%", padding: "10px", borderRadius: 8,
//   border: "1px solid #c8e0cc", boxSizing: "border-box",
// };
// const grid = {
//   display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
// };
// const labelStyle = {
//   fontSize: 12, fontWeight: 600, color: "#5a7a6a",
// };
// const cardRow = {
//   display: "flex", justifyContent: "space-between",
//   fontSize: 13, padding: "3px 0", borderBottom: "1px solid #eef4ee",
// };
// const cardLabel = {
//   color: "#5a7a6a", fontWeight: 600, minWidth: 100,
// };



// import { useState, useEffect } from "react";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// export default function ProceedingsMeeting() {
//   const [meetings, setMeetings] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [toast, setToast] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [deleteConfirm, setDeleteConfirm] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

//   useEffect(() => {
//     const onResize = () => setIsMobile(window.innerWidth < 640);
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

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

//   const showToast = (msg, type = "success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3000);
//   };

//   const formatTime = (time) => {
//     if (!time) return "-";
//     const [hourStr, minute] = time.split(":");
//     let hour = parseInt(hourStr, 10);
//     const ampm = hour >= 12 ? "PM" : "AM";
//     hour = hour % 12 || 12;
//     return `${hour}:${minute} ${ampm}`;
//   };

//   const fetchMeetings = async (searchVal = "") => {
//     try {
//       setLoading(true);
//       const url = searchVal
//         ? `${BASE_URL}/getMeetings?search=${searchVal}`
//         : `${BASE_URL}/getMeetings`;
//       const res = await fetch(url);
//       const data = await res.json();
//       if (data.success) setMeetings(data.data);
//       else showToast(data.message || "Failed to fetch meetings", "error");
//     } catch {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { fetchMeetings(); }, []);
//   useEffect(() => {
//     const timer = setTimeout(() => fetchMeetings(search), 400);
//     return () => clearTimeout(timer);
//   }, [search]);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const emptyForm = {
//     meetingNumber: "", meetingType: "", meetingDate: "",
//     meetingHour: "", meetingMinute: "", meetingAmpm: "AM",
//     subjectId: "", subjectType: "", subjectName: "",
//   };

//   const openCreateModal = () => { setEditId(null); setFormData(emptyForm); setShowModal(true); };

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

//   const buildTimeString = () => {
//     if (!formData.meetingHour || !formData.meetingMinute) return "";
//     let hour = parseInt(formData.meetingHour, 10);
//     if (formData.meetingAmpm === "PM" && hour !== 12) hour += 12;
//     if (formData.meetingAmpm === "AM" && hour === 12) hour = 0;
//     return `${String(hour).padStart(2, "0")}:${formData.meetingMinute}`;
//   };

//   const handleCreate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/createMeeting`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, meetingTime: buildTimeString() }),
//       });
//       const data = await res.json();
//       if (data.success) { setShowModal(false); showToast("Meeting created successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to create meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   const handleUpdate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/updateMeeting/${editId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, meetingTime: buildTimeString() }),
//       });
//       const data = await res.json();
//       if (data.success) { setShowModal(false); setEditId(null); showToast("Meeting updated successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to update meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   const handleSubmit = () => {
//     if (!formData.meetingNumber || !formData.meetingType) { showToast("Please fill required fields", "error"); return; }
//     editId ? handleUpdate() : handleCreate();
//   };

//   const handleDelete = async (id) => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/deleteMeeting/${id}`, { method: "DELETE" });
//       const data = await res.json();
//       if (data.success) { setDeleteConfirm(null); showToast("Meeting deleted successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to delete meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   return (
//     <>
//       {/* Google Font — Nunito Sans (matches screenshot's clean govt-app look) */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700&display=swap');

//         .pm-wrap * {
//           font-family: 'Nunito Sans', sans-serif;
//           box-sizing: border-box;
//         }

//         /* Table rows hover */
//         .pm-table tbody tr:hover {
//           background: #f4faf6;
//         }

//         /* Meeting Number badge */
//         .meeting-no-badge {
//           display: inline-block;
//           background: #e6f4ec;
//           color: #1a6640;
//           font-weight: 700;
//           font-size: 12.5px;
//           padding: 3px 10px;
//           border-radius: 6px;
//           letter-spacing: 0.3px;
//         }

//         /* Subject Type pill */
//         .subject-type-pill {
//           display: inline-block;
//           background: #eaf3fb;
//           color: #1565a8;
//           font-size: 12px;
//           font-weight: 600;
//           padding: 3px 9px;
//           border-radius: 20px;
//         }

//         /* Time badge */
//         .time-badge {
//           display: inline-block;
//           background: #e6f4ec;
//           color: #1a6640;
//           font-size: 12.5px;
//           font-weight: 700;
//           padding: 3px 10px;
//           border-radius: 6px;
//         }

//         /* Table header */
//         .pm-table th {
//           font-size: 13px;
//           font-weight: 700;
//           color: #3a6b50;
//           padding: 11px 14px;
//           text-align: left;
//           background: #f0f7f2;
//           border-bottom: 2px solid #d6ede0;
//           white-space: nowrap;
//         }

//         /* Table cells */
//         .pm-table td {
//           font-size: 13.5px;
//           font-weight: 500;
//           color: #2d3d35;
//           padding: 11px 14px;
//           border-bottom: 1px solid #eef4ee;
//           vertical-align: middle;
//         }

//         /* Serial number */
//         .pm-table td:first-child {
//           color: #8aaa95;
//           font-weight: 600;
//           font-size: 13px;
//         }

//         /* Search input */
//         .pm-search {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 13.5px;
//           font-weight: 500;
//           color: #2d3d35;
//           border: 1.5px solid #c8e0cc;
//           border-radius: 8px;
//           padding: 8px 13px;
//           outline: none;
//           transition: border-color 0.2s;
//         }
//         .pm-search:focus { border-color: #1a7a4a; }

//         /* Modal inputs */
//         .pm-input {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 13.5px;
//           font-weight: 500;
//           width: 100%;
//           padding: 10px 12px;
//           border-radius: 8px;
//           border: 1.5px solid #c8e0cc;
//           outline: none;
//           color: #2d3d35;
//           transition: border-color 0.2s;
//         }
//         .pm-input:focus { border-color: #1a7a4a; }

//         /* Labels */
//         .pm-label {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 12px;
//           font-weight: 700;
//           color: #5a7a6a;
//           margin-bottom: 4px;
//           display: block;
//         }

//         /* Buttons */
//         .pm-btn-primary {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 13.5px;
//           font-weight: 700;
//           background: #1a7a4a;
//           color: #fff;
//           border: none;
//           border-radius: 8px;
//           padding: 10px 20px;
//           cursor: pointer;
//           letter-spacing: 0.2px;
//           transition: background 0.15s;
//         }
//         .pm-btn-primary:hover { background: #155e39; }
//         .pm-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

//         .pm-btn-cancel {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 13.5px;
//           font-weight: 600;
//           background: #eef2ee;
//           color: #4a6a5a;
//           border: none;
//           border-radius: 8px;
//           padding: 10px 20px;
//           cursor: pointer;
//         }
//         .pm-btn-cancel:hover { background: #e0e8e2; }

//         .pm-btn-edit {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 12.5px;
//           font-weight: 600;
//           background: #e8f4fd;
//           color: #1a6aaa;
//           border: none;
//           border-radius: 6px;
//           padding: 5px 11px;
//           cursor: pointer;
//         }
//         .pm-btn-edit:hover { background: #d0e8f8; }

//         .pm-btn-delete {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 12.5px;
//           font-weight: 600;
//           background: #fdecea;
//           color: #c0392b;
//           border: none;
//           border-radius: 6px;
//           padding: 5px 11px;
//           cursor: pointer;
//         }
//         .pm-btn-delete:hover { background: #fad4d0; }

//         /* Mobile card */
//         .pm-card {
//           border: 1px solid #e0ede5;
//           border-radius: 10px;
//           padding: 13px;
//           background: #f9fdf9;
//           margin-bottom: 10px;
//         }
//         .pm-card-row {
//           display: flex;
//           justify-content: space-between;
//           font-size: 13px;
//           font-weight: 500;
//           padding: 4px 0;
//           border-bottom: 1px solid #eef4ee;
//           color: #2d3d35;
//         }
//         .pm-card-label {
//           color: #5a7a6a;
//           font-weight: 700;
//           min-width: 110px;
//           font-size: 12.5px;
//         }

//         /* Page title */
//         .pm-title {
//           font-size: 22px;
//           font-weight: 800;
//           color: #1a4a2e;
//           margin: 0 0 3px 0;
//           letter-spacing: -0.3px;
//         }
//         .pm-subtitle {
//           font-size: 13px;
//           font-weight: 500;
//           color: #7a9a88;
//           margin: 0 0 14px 0;
//         }

//         /* Section title */
//         .pm-section-title {
//           font-size: 15px;
//           font-weight: 800;
//           color: #1a4a2e;
//           margin: 0;
//         }

//         /* Modal title */
//         .pm-modal-title {
//           font-size: 17px;
//           font-weight: 800;
//           color: #1a4a2e;
//           margin: 0;
//         }

//         /* Delete modal text */
//         .pm-delete-title {
//           font-size: 17px;
//           font-weight: 700;
//           color: #1a4a2e;
//           margin-bottom: 6px;
//         }
//         .pm-delete-sub {
//           font-size: 13.5px;
//           color: #8a9a90;
//           margin-bottom: 20px;
//           font-weight: 500;
//         }
//       `}</style>

//       <div className="pm-wrap" style={{ background: "#f0f4f0", minHeight: "100vh", padding: isMobile ? 12 : 24 }}>

//         {/* Toast */}
//         {toast && (
//           <div style={{
//             position: "fixed", top: 16, right: 16, left: isMobile ? 16 : "auto",
//             background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
//             color: "#fff", padding: "10px 18px", borderRadius: 8, fontWeight: 700,
//             fontSize: 13.5, zIndex: 9999, fontFamily: "'Nunito Sans', sans-serif",
//           }}>
//             {toast.msg}
//           </div>
//         )}

//         {/* Header */}
//         <div style={{ marginBottom: 16 }}>
//           <h1 className="pm-title">Meeting Proceedings</h1>
//           <p className="pm-subtitle">Sabha Kamkaj manage करा</p>
//           <button className="pm-btn-primary" onClick={openCreateModal}>+ Create Meeting</button>
//         </div>

//         {/* Table card */}
//         <div style={{ background: "#fff", borderRadius: 12, padding: isMobile ? 12 : 20, overflowX: "auto" }}>

//           <div style={{
//             display: "flex", flexDirection: isMobile ? "column" : "row",
//             justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center",
//             gap: 10, marginBottom: 15,
//           }}>
//             <h3 className="pm-section-title">Records ({meetings.length})</h3>
//             <input
//               className="pm-search"
//               placeholder="Search meeting no..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               style={{ width: isMobile ? "100%" : "auto" }}
//             />
//           </div>

//           {/* Mobile card view */}
//           {isMobile ? (
//             <div>
//               {loading ? (
//                 <div style={{ textAlign: "center", padding: 20, color: "#8a9a90", fontFamily: "'Nunito Sans', sans-serif" }}>Loading...</div>
//               ) : meetings.length === 0 ? (
//                 <div style={{ textAlign: "center", padding: 20, fontFamily: "'Nunito Sans', sans-serif", color: "#8a9a90" }}>No records found</div>
//               ) : (
//                 meetings.map((m, i) => (
//                   <div className="pm-card" key={m._id}>
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
//                       <span style={{ fontWeight: 800, color: "#1a4a2e", fontSize: 14, fontFamily: "'Nunito Sans', sans-serif" }}>
//                         #{i + 1} — <span className="meeting-no-badge">{m.meetingNumber}</span>
//                       </span>
//                       <div style={{ display: "flex", gap: 6 }}>
//                         <button className="pm-btn-edit" onClick={() => openEditModal(m)}>✏️</button>
//                         <button className="pm-btn-delete" onClick={() => setDeleteConfirm(m._id)}>🗑️</button>
//                       </div>
//                     </div>
//                     <div className="pm-card-row"><span className="pm-card-label">Type</span><span>{m.meetingType || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Date</span><span>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Time</span><span className="time-badge">{formatTime(m.meetingTime)}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Subject ID</span><span>{m.subjectId || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Subject Type</span><span className="subject-type-pill">{m.subjectType || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Subject Name</span><span>{m.subjectName || "-"}</span></div>
//                   </div>
//                 ))
//               )}
//             </div>
//           ) : (
//             /* Desktop table */
//             <table className="pm-table" style={{ width: "100%", borderCollapse: "collapse" }}>
//               <thead>
//                 <tr>
//                   {["#", "Meeting No", "Type", "Date", "Time", "Subject ID", "Subject Type", "Subject Name", "Actions"].map(h => (
//                     <th key={h}>{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr><td colSpan={9} style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>Loading...</td></tr>
//                 ) : meetings.length === 0 ? (
//                   <tr><td colSpan={9} style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>No records found</td></tr>
//                 ) : (
//                   meetings.map((m, i) => (
//                     <tr key={m._id}>
//                       <td>{i + 1}</td>
//                       <td><span className="meeting-no-badge">{m.meetingNumber}</span></td>
//                       <td>{m.meetingType}</td>
//                       <td>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</td>
//                       <td><span className="time-badge">{formatTime(m.meetingTime)}</span></td>
//                       <td>{m.subjectId}</td>
//                       <td><span className="subject-type-pill">{m.subjectType || "-"}</span></td>
//                       <td>{m.subjectName}</td>
//                       <td>
//                         <div style={{ display: "flex", gap: 6 }}>
//                           <button className="pm-btn-edit" onClick={() => openEditModal(m)}>✏️ Edit</button>
//                           <button className="pm-btn-delete" onClick={() => setDeleteConfirm(m._id)}>🗑️ Delete</button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>

//         {/* Create / Edit Modal */}
//         {showModal && (
//           <div style={modalOverlay}>
//             <div style={{
//               background: "#fff", borderRadius: 12, padding: isMobile ? 16 : 25,
//               width: isMobile ? "95%" : "100%", maxWidth: 500,
//               maxHeight: "90vh", overflowY: "auto",
//             }}>
//               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
//                 <h3 className="pm-modal-title">{editId ? "Edit Meeting" : "Create Meeting"}</h3>
//                 <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "#8a9a90" }}>✕</button>
//               </div>

//               <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Meeting Number</label>
//                   <input className="pm-input" name="meetingNumber" placeholder="Meeting Number" value={formData.meetingNumber} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Type Of Meeting</label>
//                   <select className="pm-input" name="meetingType" value={formData.meetingType} onChange={handleChange}>
//                     <option value="">Select Type</option>
//                     <option>General Body</option>
//                     <option>Standing Committee</option>
//                   </select>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Meeting Date</label>
//                   <input className="pm-input" name="meetingDate" type="date" value={formData.meetingDate} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Meeting Time</label>
//                   <div style={{ display: "flex", gap: 6 }}>
//                     <select className="pm-input" name="meetingHour" value={formData.meetingHour} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
//                       <option value="">HH</option>
//                       {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")).map(h => (
//                         <option key={h} value={h}>{h}</option>
//                       ))}
//                     </select>
//                     <select className="pm-input" name="meetingMinute" value={formData.meetingMinute} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
//                       <option value="">MM</option>
//                       {["00","05","10","15","20","25","30","35","40","45","50","55"].map(m => (
//                         <option key={m} value={m}>{m}</option>
//                       ))}
//                     </select>
//                     <select className="pm-input" name="meetingAmpm" value={formData.meetingAmpm} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
//                       <option value="AM">AM</option>
//                       <option value="PM">PM</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Subject ID</label>
//                   <input className="pm-input" name="subjectId" placeholder="Subject ID" value={formData.subjectId} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Subject Type</label>
//                   <select className="pm-input" name="subjectType" value={formData.subjectType} onChange={handleChange}>
//                     <option value="">Select Subject Type</option>
//                     <option>General</option>
//                     <option>Administrative and Financial Approval</option>
//                     <option>Contract Approval</option>
//                   </select>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
//                   <label className="pm-label">Subject Name</label>
//                   <input className="pm-input" name="subjectName" placeholder="Subject Name" value={formData.subjectName} onChange={handleChange} />
//                 </div>

//               </div>

//               <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
//                 <button className="pm-btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
//                 <button className="pm-btn-primary" onClick={handleSubmit} disabled={loading}>
//                   {loading ? "Saving..." : editId ? "Update" : "Save"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Delete Confirm Modal */}
//         {deleteConfirm && (
//           <div style={modalOverlay}>
//             <div style={{
//               background: "#fff", padding: 28, borderRadius: 12,
//               maxWidth: 380, width: isMobile ? "90%" : "100%", textAlign: "center",
//             }}>
//               <p className="pm-delete-title">Delete Meeting?</p>
//               <p className="pm-delete-sub">He record permanently delete होईल. Sure aahes ka?</p>
//               <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
//                 <button className="pm-btn-cancel" onClick={() => setDeleteConfirm(null)}>Cancel</button>
//                 <button
//                   className="pm-btn-primary"
//                   style={{ background: "#c0392b" }}
//                   onClick={() => handleDelete(deleteConfirm)}
//                   disabled={loading}
//                 >
//                   {loading ? "Deleting..." : "Yes, Delete"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
//     </>
//   );
// }

// const modalOverlay = {
//   position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
//   display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000,
//   padding: 16,
// };



// import { useState, useEffect } from "react";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// export default function ProceedingsMeeting() {
//   const [meetings, setMeetings] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [toast, setToast] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [deleteConfirm, setDeleteConfirm] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
//   const [isEditMode, setIsEditMode] = useState(false);
//   useEffect(() => {
//     const onResize = () => setIsMobile(window.innerWidth < 640);
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

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
//     decisionInMeeting: "",
//   });

//   const showToast = (msg, type = "success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3000);
//   };

//   const formatTime = (time) => {
//     if (!time) return "-";
//     const [hourStr, minute] = time.split(":");
//     let hour = parseInt(hourStr, 10);
//     const ampm = hour >= 12 ? "PM" : "AM";
//     hour = hour % 12 || 12;
//     return `${hour}:${minute} ${ampm}`;
//   };

//   const fetchMeetings = async (searchVal = "") => {
//     try {
//       setLoading(true);
//       const url = searchVal
//         ? `${BASE_URL}/getMeetings?search=${searchVal}`
//         : `${BASE_URL}/getMeetings`;
//       const res = await fetch(url);
//       const data = await res.json();
//       if (data.success) setMeetings(data.data);
//       else showToast(data.message || "Failed to fetch meetings", "error");
//     } catch {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { fetchMeetings(); }, []);
//   useEffect(() => {
//     const timer = setTimeout(() => fetchMeetings(search), 400);
//     return () => clearTimeout(timer);
//   }, [search]);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const emptyForm = {
//     meetingNumber: "", meetingType: "", meetingDate: "",
//     meetingHour: "", meetingMinute: "", meetingAmpm: "AM",
//     subjectId: "", subjectType: "", subjectName: "", decisionInMeeting: "",
//   };

//   const openCreateModal = () => { setEditId(null); setFormData(emptyForm); setShowModal(true); };

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
//       decisionInMeeting: m.decisionInMeeting || "",
//     });
//     setShowModal(true);
//   };

//   const buildTimeString = () => {
//     if (!formData.meetingHour || !formData.meetingMinute) return "";
//     let hour = parseInt(formData.meetingHour, 10);
//     if (formData.meetingAmpm === "PM" && hour !== 12) hour += 12;
//     if (formData.meetingAmpm === "AM" && hour === 12) hour = 0;
//     return `${String(hour).padStart(2, "0")}:${formData.meetingMinute}`;
//   };

//   const handleCreate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/createMeeting`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, meetingTime: buildTimeString() }),
//       });
//       const data = await res.json();
//       if (data.success) { setShowModal(false); showToast("Meeting created successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to create meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   const handleUpdate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/updateMeeting/${editId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, meetingTime: buildTimeString() }),
//       });
//       const data = await res.json();
//       if (data.success) { setShowModal(false); setEditId(null); showToast("Meeting updated successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to update meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   const handleSubmit = () => {
//     if (!formData.meetingNumber || !formData.meetingType) { showToast("Please fill required fields", "error"); return; }
//     editId ? handleUpdate() : handleCreate();
//   };

//   const handleDelete = async (id) => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/deleteMeeting/${id}`, { method: "DELETE" });
//       const data = await res.json();
//       if (data.success) { setDeleteConfirm(null); showToast("Meeting deleted successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to delete meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   return (
//     <>
//       {/* Google Font — Nunito Sans (matches screenshot's clean govt-app look) */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700&display=swap');

//         .pm-wrap * {
//           font-family: 'Nunito Sans', sans-serif;
//           box-sizing: border-box;
//         }

//         /* Table rows hover */
//         .pm-table tbody tr:hover {
//           background: #f4faf6;
//         }

//         /* Meeting Number badge */
//         .meeting-no-badge {
//           display: inline-block;
//           background: #e6f4ec;
//           color: #1a6640;
//           font-weight: 700;
//           font-size: 12.5px;
//           padding: 3px 10px;
//           border-radius: 6px;
//           letter-spacing: 0.3px;
//         }

//         /* Subject Type pill */
//         .subject-type-pill {
//           display: inline-block;
//           background: #eaf3fb;
//           color: #1565a8;
//           font-size: 12px;
//           font-weight: 600;
//           padding: 3px 9px;
//           border-radius: 20px;
//         }

//         /* Time badge */
//         .time-badge {
//           display: inline-block;
//           background: #e6f4ec;
//           color: #1a6640;
//           font-size: 12.5px;
//           font-weight: 700;
//           padding: 3px 10px;
//           border-radius: 6px;
//         }

//         /* Table header */
//         .pm-table th {
//           font-size: 13px;
//           font-weight: 700;
//           color: #3a6b50;
//           padding: 11px 14px;
//           text-align: left;
//           background: #f0f7f2;
//           border-bottom: 2px solid #d6ede0;
//           white-space: nowrap;
//         }

//         /* Table cells */
//         .pm-table td {
//           font-size: 13.5px;
//           font-weight: 500;
//           color: #2d3d35;
//           padding: 11px 14px;
//           border-bottom: 1px solid #eef4ee;
//           vertical-align: middle;
//         }

//         /* Serial number */
//         .pm-table td:first-child {
//           color: #8aaa95;
//           font-weight: 600;
//           font-size: 13px;
//         }

//         /* Search input */
//         .pm-search {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 13.5px;
//           font-weight: 500;
//           color: #2d3d35;
//           border: 1.5px solid #c8e0cc;
//           border-radius: 8px;
//           padding: 8px 13px;
//           outline: none;
//           transition: border-color 0.2s;
//         }
//         .pm-search:focus { border-color: #1a7a4a; }

//         /* Modal inputs */
//         .pm-input {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 13.5px;
//           font-weight: 500;
//           width: 100%;
//           padding: 10px 12px;
//           border-radius: 8px;
//           border: 1.5px solid #c8e0cc;
//           outline: none;
//           color: #2d3d35;
//           transition: border-color 0.2s;
//         }
//         .pm-input:focus { border-color: #1a7a4a; }

//         /* Labels */
//         .pm-label {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 12px;
//           font-weight: 700;
//           color: #5a7a6a;
//           margin-bottom: 4px;
//           display: block;
//         }

//         /* Buttons */
//         .pm-btn-primary {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 13.5px;
//           font-weight: 700;
//           background: #1a7a4a;
//           color: #fff;
//           border: none;
//           border-radius: 8px;
//           padding: 10px 20px;
//           cursor: pointer;
//           letter-spacing: 0.2px;
//           transition: background 0.15s;
//         }
//         .pm-btn-primary:hover { background: #155e39; }
//         .pm-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

//         .pm-btn-cancel {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 13.5px;
//           font-weight: 600;
//           background: #eef2ee;
//           color: #4a6a5a;
//           border: none;
//           border-radius: 8px;
//           padding: 10px 20px;
//           cursor: pointer;
//         }
//         .pm-btn-cancel:hover { background: #e0e8e2; }

//         .pm-btn-edit {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 12.5px;
//           font-weight: 600;
//           background: #e8f4fd;
//           color: #1a6aaa;
//           border: none;
//           border-radius: 6px;
//           padding: 5px 11px;
//           cursor: pointer;
//         }
//         .pm-btn-edit:hover { background: #d0e8f8; }

//         .pm-btn-delete {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 12.5px;
//           font-weight: 600;
//           background: #fdecea;
//           color: #c0392b;
//           border: none;
//           border-radius: 6px;
//           padding: 5px 11px;
//           cursor: pointer;
//         }
//         .pm-btn-delete:hover { background: #fad4d0; }

//         /* Mobile card */
//         .pm-card {
//           border: 1px solid #e0ede5;
//           border-radius: 10px;
//           padding: 13px;
//           background: #f9fdf9;
//           margin-bottom: 10px;
//         }
//         .pm-card-row {
//           display: flex;
//           justify-content: space-between;
//           font-size: 13px;
//           font-weight: 500;
//           padding: 4px 0;
//           border-bottom: 1px solid #eef4ee;
//           color: #2d3d35;
//         }
//         .pm-card-label {
//           color: #5a7a6a;
//           font-weight: 700;
//           min-width: 110px;
//           font-size: 12.5px;
//         }

//         /* Page title */
//         .pm-title {
//           font-size: 22px;
//           font-weight: 800;
//           color: #1a4a2e;
//           margin: 0 0 3px 0;
//           letter-spacing: -0.3px;
//         }
//         .pm-subtitle {
//           font-size: 13px;
//           font-weight: 500;
//           color: #7a9a88;
//           margin: 0 0 14px 0;
//         }

//         /* Section title */
//         .pm-section-title {
//           font-size: 15px;
//           font-weight: 800;
//           color: #1a4a2e;
//           margin: 0;
//         }

//         /* Modal title */
//         .pm-modal-title {
//           font-size: 17px;
//           font-weight: 800;
//           color: #1a4a2e;
//           margin: 0;
//         }

//         /* Delete modal text */
//         .pm-delete-title {
//           font-size: 17px;
//           font-weight: 700;
//           color: #1a4a2e;
//           margin-bottom: 6px;
//         }
//         .pm-delete-sub {
//           font-size: 13.5px;
//           color: #8a9a90;
//           margin-bottom: 20px;
//           font-weight: 500;
//         }
//       `}</style>

//       <div className="pm-wrap" style={{ background: "#f0f4f0", minHeight: "100vh", padding: isMobile ? 12 : 24 }}>

//         {/* Toast */}
//         {toast && (
//           <div style={{
//             position: "fixed", top: 16, right: 16, left: isMobile ? 16 : "auto",
//             background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
//             color: "#fff", padding: "10px 18px", borderRadius: 8, fontWeight: 700,
//             fontSize: 13.5, zIndex: 9999, fontFamily: "'Nunito Sans', sans-serif",
//           }}>
//             {toast.msg}
//           </div>
//         )}

//         {/* Header */}
//         <div style={{ marginBottom: 16 }}>
//           <h1 className="pm-title">Meeting Proceedings</h1>
//           <p className="pm-subtitle">Sabha Kamkaj manage करा</p>
//           <button className="pm-btn-primary" onClick={openCreateModal}>+ Create Meeting</button>
//         </div>

//         {/* Table card */}
//         <div style={{ background: "#fff", borderRadius: 12, padding: isMobile ? 12 : 20, overflowX: "auto" }}>

//           <div style={{
//             display: "flex", flexDirection: isMobile ? "column" : "row",
//             justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center",
//             gap: 10, marginBottom: 15,
//           }}>
//             <h3 className="pm-section-title">Records ({meetings.length})</h3>
//             <input
//               className="pm-search"
//               placeholder="Search meeting no..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               style={{ width: isMobile ? "100%" : "auto" }}
//             />
//           </div>

//           {/* Mobile card view */}
//           {isMobile ? (
//             <div>
//               {loading ? (
//                 <div style={{ textAlign: "center", padding: 20, color: "#8a9a90", fontFamily: "'Nunito Sans', sans-serif" }}>Loading...</div>
//               ) : meetings.length === 0 ? (
//                 <div style={{ textAlign: "center", padding: 20, fontFamily: "'Nunito Sans', sans-serif", color: "#8a9a90" }}>No records found</div>
//               ) : (
//                 meetings.map((m, i) => (
//                   <div className="pm-card" key={m._id}>
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
//                       <span style={{ fontWeight: 800, color: "#1a4a2e", fontSize: 14, fontFamily: "'Nunito Sans', sans-serif" }}>
//                         #{i + 1} — <span className="meeting-no-badge">{m.meetingNumber}</span>
//                       </span>
//                       <div style={{ display: "flex", gap: 6 }}>
//                         <button className="pm-btn-edit" onClick={() => openEditModal(m)}>✏️</button>
//                         <button className="pm-btn-delete" onClick={() => setDeleteConfirm(m._id)}>🗑️</button>
//                       </div>
//                     </div>
//                     <div className="pm-card-row"><span className="pm-card-label">Type</span><span>{m.meetingType || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Date</span><span>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Time</span><span className="time-badge">{formatTime(m.meetingTime)}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Subject ID</span><span>{m.subjectId || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Subject Type</span><span className="subject-type-pill">{m.subjectType || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Subject Name</span><span>{m.subjectName || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Decision</span><span>{m.decisionInMeeting || "-"}</span></div>
//                   </div>
//                 ))
//               )}
//             </div>
//           ) : (
//             /* Desktop table */
//             <table className="pm-table" style={{ width: "100%", borderCollapse: "collapse" }}>
//               <thead>
//                 <tr>
//                   {["#", "Meeting No", "Type", "Date", "Time", "Subject ID", "Subject Type", "Subject Name", "Decision In Meeting", "Actions"].map(h => (
//                     <th key={h}>{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr><td colSpan={10} style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>Loading...</td></tr>
//                 ) : meetings.length === 0 ? (
//                   <tr><td colSpan={10} style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>No records found</td></tr>
//                 ) : (
//                   meetings.map((m, i) => (
//                     <tr key={m._id}>
//                       <td>{i + 1}</td>
//                       <td><span className="meeting-no-badge">{m.meetingNumber}</span></td>
//                       <td>{m.meetingType}</td>
//                       <td>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</td>
//                       <td><span className="time-badge">{formatTime(m.meetingTime)}</span></td>
//                       <td>{m.subjectId}</td>
//                       <td><span className="subject-type-pill">{m.subjectType || "-"}</span></td>
//                       <td>{m.subjectName}</td>
//                       <td>{m.decisionInMeeting || "-"}</td>
//                       <td>
//                         <div style={{ display: "flex", gap: 6 }}>
//                           <button className="pm-btn-edit" onClick={() => openEditModal(m)}>✏️ Edit</button>
//                           <button className="pm-btn-delete" onClick={() => setDeleteConfirm(m._id)}>🗑️ Delete</button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>

//         {/* Create / Edit Modal */}
//         {showModal && (
//           <div style={modalOverlay}>
//             <div style={{
//               background: "#fff", borderRadius: 12, padding: isMobile ? 16 : 25,
//               width: isMobile ? "95%" : "100%", maxWidth: 500,
//               maxHeight: "90vh", overflowY: "auto",
//             }}>
//               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
//                 <h3 className="pm-modal-title">{editId ? "Edit Meeting" : "Create Meeting"}</h3>
//                 <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "#8a9a90" }}>✕</button>
//               </div>

//               <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Meeting Number</label>
//                   <input className="pm-input" name="meetingNumber" placeholder="Meeting Number" value={formData.meetingNumber} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Type Of Meeting</label>
//                   <select className="pm-input" name="meetingType" value={formData.meetingType} onChange={handleChange}>
//                     <option value="">Select Type</option>
//                     <option>General Body</option>
//                     <option>Standing Committee</option>
//                   </select>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Meeting Date</label>
//                   <input className="pm-input" name="meetingDate" type="date" value={formData.meetingDate} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Meeting Time</label>
//                   <div style={{ display: "flex", gap: 6 }}>
//                     <select className="pm-input" name="meetingHour" value={formData.meetingHour} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
//                       <option value="">HH</option>
//                       {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")).map(h => (
//                         <option key={h} value={h}>{h}</option>
//                       ))}
//                     </select>
//                     <select className="pm-input" name="meetingMinute" value={formData.meetingMinute} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
//                       <option value="">MM</option>
//                       {["00","05","10","15","20","25","30","35","40","45","50","55"].map(m => (
//                         <option key={m} value={m}>{m}</option>
//                       ))}
//                     </select>
//                     <select className="pm-input" name="meetingAmpm" value={formData.meetingAmpm} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
//                       <option value="AM">AM</option>
//                       <option value="PM">PM</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Subject ID</label>
//                   <input className="pm-input" name="subjectId" placeholder="Subject ID" value={formData.subjectId} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Subject Type</label>
//                   <select className="pm-input" name="subjectType" value={formData.subjectType} onChange={handleChange}>
//                     <option value="">Select Subject Type</option>
//                     <option>General</option>
//                     <option>Administrative and Financial Approval</option>
//                     <option>Contract Approval</option>
//                   </select>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
//                   <label className="pm-label">Subject Name</label>
//                   <input className="pm-input" name="subjectName" placeholder="Subject Name" value={formData.subjectName} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
//                   <label className="pm-label">Decision In Meeting</label>
//                   <textarea
//                     className="pm-input"
//                     name="decisionInMeeting"
//                     placeholder="Enter decision taken in meeting..."
//                     value={formData.decisionInMeeting}
//                     onChange={handleChange}
//                     rows={3}
//                     style={{ resize: "vertical" }}
//                   />
//                 </div>

//               </div>

//               <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
//                 <button className="pm-btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
//                 <button className="pm-btn-primary" onClick={handleSubmit} disabled={loading}>
//                   {loading ? "Saving..." : editId ? "Update" : "Save"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Delete Confirm Modal */}
//         {deleteConfirm && (
//           <div style={modalOverlay}>
//             <div style={{
//               background: "#fff", padding: 28, borderRadius: 12,
//               maxWidth: 380, width: isMobile ? "90%" : "100%", textAlign: "center",
//             }}>
//               <p className="pm-delete-title">Delete Meeting?</p>
//               <p className="pm-delete-sub">He record permanently delete होईल. Sure aahes ka?</p>
//               <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
//                 <button className="pm-btn-cancel" onClick={() => setDeleteConfirm(null)}>Cancel</button>
//                 <button
//                   className="pm-btn-primary"
//                   style={{ background: "#c0392b" }}
//                   onClick={() => handleDelete(deleteConfirm)}
//                   disabled={loading}
//                 >
//                   {loading ? "Deleting..." : "Yes, Delete"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
//     </>
//   );
// }

// const modalOverlay = {
//   position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
//   display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000,
//   padding: 16,
// };



// import { useState, useEffect } from "react";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// export default function ProceedingsMeeting() {
//   const [meetings, setMeetings] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [toast, setToast] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [deleteConfirm, setDeleteConfirm] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

//   useEffect(() => {
//     const onResize = () => setIsMobile(window.innerWidth < 640);
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

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
//     decisionInMeeting: "",
//   });

//   const showToast = (msg, type = "success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3000);
//   };

//   const formatTime = (time) => {
//     if (!time) return "-";
//     const [hourStr, minute] = time.split(":");
//     let hour = parseInt(hourStr, 10);
//     const ampm = hour >= 12 ? "PM" : "AM";
//     hour = hour % 12 || 12;
//     return `${hour}:${minute} ${ampm}`;
//   };

//   const fetchMeetings = async (searchVal = "") => {
//     try {
//       setLoading(true);
//       const url = searchVal
//         ? `${BASE_URL}/getMeetings?search=${searchVal}`
//         : `${BASE_URL}/getMeetings`;
//       const res = await fetch(url);
//       const data = await res.json();
//       if (data.success) setMeetings(data.data);
//       else showToast(data.message || "Failed to fetch meetings", "error");
//     } catch {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { fetchMeetings(); }, []);
//   useEffect(() => {
//     const timer = setTimeout(() => fetchMeetings(search), 400);
//     return () => clearTimeout(timer);
//   }, [search]);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const emptyForm = {
//     meetingNumber: "", meetingType: "", meetingDate: "",
//     meetingHour: "", meetingMinute: "", meetingAmpm: "AM",
//     subjectId: "", subjectType: "", subjectName: "", decisionInMeeting: "",
//   };

//   const openCreateModal = () => { setEditId(null); setFormData(emptyForm); setShowModal(true); };

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
//       decisionInMeeting: m.decisionInMeeting || "",
//     });
//     setShowModal(true);
//   };

//   const buildTimeString = () => {
//     if (!formData.meetingHour || !formData.meetingMinute) return "";
//     let hour = parseInt(formData.meetingHour, 10);
//     if (formData.meetingAmpm === "PM" && hour !== 12) hour += 12;
//     if (formData.meetingAmpm === "AM" && hour === 12) hour = 0;
//     return `${String(hour).padStart(2, "0")}:${formData.meetingMinute}`;
//   };

//   const handleCreate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/createMeeting`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, meetingTime: buildTimeString() }),
//       });
//       const data = await res.json();
//       if (data.success) { setShowModal(false); showToast("Meeting created successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to create meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   const handleUpdate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/updateMeeting/${editId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, meetingTime: buildTimeString() }),
//       });
//       const data = await res.json();
//       if (data.success) { setShowModal(false); setEditId(null); showToast("Meeting updated successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to update meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   const handleSubmit = () => {
//     if (!formData.meetingNumber || !formData.meetingType) { showToast("Please fill required fields", "error"); return; }
//     editId ? handleUpdate() : handleCreate();
//   };

//   const handleDelete = async (id) => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/deleteMeeting/${id}`, { method: "DELETE" });
//       const data = await res.json();
//       if (data.success) { setDeleteConfirm(null); showToast("Meeting deleted successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to delete meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   return (
//     <>
//       {/* Google Font — Nunito Sans (matches screenshot's clean govt-app look) */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700&display=swap');

//         .pm-wrap * {
//           font-family: 'Nunito Sans', sans-serif;
//           box-sizing: border-box;
//         }

//         /* Table rows hover */
//         .pm-table tbody tr:hover {
//           background: #f4faf6;
//         }

//         /* Meeting Number badge */
//         .meeting-no-badge {
//           display: inline-block;
//           background: #e6f4ec;
//           color: #1a6640;
//           font-weight: 700;
//           font-size: 12.5px;
//           padding: 3px 10px;
//           border-radius: 6px;
//           letter-spacing: 0.3px;
//         }

//         /* Subject Type pill */
//         .subject-type-pill {
//           display: inline-block;
//           background: #eaf3fb;
//           color: #1565a8;
//           font-size: 12px;
//           font-weight: 600;
//           padding: 3px 9px;
//           border-radius: 20px;
//         }

//         /* Time badge */
//         .time-badge {
//           display: inline-block;
//           background: #e6f4ec;
//           color: #1a6640;
//           font-size: 12.5px;
//           font-weight: 700;
//           padding: 3px 10px;
//           border-radius: 6px;
//         }

//         /* Table header */
//         .pm-table th {
//           font-size: 13px;
//           font-weight: 700;
//           color: #3a6b50;
//           padding: 11px 14px;
//           text-align: left;
//           background: #f0f7f2;
//           border-bottom: 2px solid #d6ede0;
//           white-space: nowrap;
//         }

//         /* Table cells */
//         .pm-table td {
//           font-size: 13.5px;
//           font-weight: 500;
//           color: #2d3d35;
//           padding: 11px 14px;
//           border-bottom: 1px solid #eef4ee;
//           vertical-align: middle;
//         }

//         /* Serial number */
//         .pm-table td:first-child {
//           color: #8aaa95;
//           font-weight: 600;
//           font-size: 13px;
//         }

//         /* Search input */
//         .pm-search {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 13.5px;
//           font-weight: 500;
//           color: #2d3d35;
//           border: 1.5px solid #c8e0cc;
//           border-radius: 8px;
//           padding: 8px 13px;
//           outline: none;
//           transition: border-color 0.2s;
//         }
//         .pm-search:focus { border-color: #1a7a4a; }

//         /* Modal inputs */
//         .pm-input {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 13.5px;
//           font-weight: 500;
//           width: 100%;
//           padding: 10px 12px;
//           border-radius: 8px;
//           border: 1.5px solid #c8e0cc;
//           outline: none;
//           color: #2d3d35;
//           transition: border-color 0.2s;
//         }
//         .pm-input:focus { border-color: #1a7a4a; }

//         /* Labels */
//         .pm-label {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 12px;
//           font-weight: 700;
//           color: #5a7a6a;
//           margin-bottom: 4px;
//           display: block;
//         }

//         /* Buttons */
//         .pm-btn-primary {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 13.5px;
//           font-weight: 700;
//           background: #1a7a4a;
//           color: #fff;
//           border: none;
//           border-radius: 8px;
//           padding: 10px 20px;
//           cursor: pointer;
//           letter-spacing: 0.2px;
//           transition: background 0.15s;
//         }
//         .pm-btn-primary:hover { background: #155e39; }
//         .pm-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

//         .pm-btn-cancel {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 13.5px;
//           font-weight: 600;
//           background: #eef2ee;
//           color: #4a6a5a;
//           border: none;
//           border-radius: 8px;
//           padding: 10px 20px;
//           cursor: pointer;
//         }
//         .pm-btn-cancel:hover { background: #e0e8e2; }

//         .pm-btn-edit {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 12.5px;
//           font-weight: 600;
//           background: #e8f4fd;
//           color: #1a6aaa;
//           border: none;
//           border-radius: 6px;
//           padding: 5px 11px;
//           cursor: pointer;
//         }
//         .pm-btn-edit:hover { background: #d0e8f8; }

//         .pm-btn-delete {
//           font-family: 'Nunito Sans', sans-serif;
//           font-size: 12.5px;
//           font-weight: 600;
//           background: #fdecea;
//           color: #c0392b;
//           border: none;
//           border-radius: 6px;
//           padding: 5px 11px;
//           cursor: pointer;
//         }
//         .pm-btn-delete:hover { background: #fad4d0; }

//         /* Mobile card */
//         .pm-card {
//           border: 1px solid #e0ede5;
//           border-radius: 10px;
//           padding: 13px;
//           background: #f9fdf9;
//           margin-bottom: 10px;
//         }
//         .pm-card-row {
//           display: flex;
//           justify-content: space-between;
//           font-size: 13px;
//           font-weight: 500;
//           padding: 4px 0;
//           border-bottom: 1px solid #eef4ee;
//           color: #2d3d35;
//         }
//         .pm-card-label {
//           color: #5a7a6a;
//           font-weight: 700;
//           min-width: 110px;
//           font-size: 12.5px;
//         }

//         /* Page title */
//         .pm-title {
//           font-size: 22px;
//           font-weight: 800;
//           color: #1a4a2e;
//           margin: 0 0 3px 0;
//           letter-spacing: -0.3px;
//         }
//         .pm-subtitle {
//           font-size: 13px;
//           font-weight: 500;
//           color: #7a9a88;
//           margin: 0 0 14px 0;
//         }

//         /* Section title */
//         .pm-section-title {
//           font-size: 15px;
//           font-weight: 800;
//           color: #1a4a2e;
//           margin: 0;
//         }

//         /* Modal title */
//         .pm-modal-title {
//           font-size: 17px;
//           font-weight: 800;
//           color: #1a4a2e;
//           margin: 0;
//         }

//         /* Delete modal text */
//         .pm-delete-title {
//           font-size: 17px;
//           font-weight: 700;
//           color: #1a4a2e;
//           margin-bottom: 6px;
//         }
//         .pm-delete-sub {
//           font-size: 13.5px;
//           color: #8a9a90;
//           margin-bottom: 20px;
//           font-weight: 500;
//         }
//       `}</style>

//       <div className="pm-wrap" style={{ background: "#f0f4f0", minHeight: "100vh", padding: isMobile ? 12 : 24 }}>

//         {/* Toast */}
//         {toast && (
//           <div style={{
//             position: "fixed", top: 16, right: 16, left: isMobile ? 16 : "auto",
//             background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
//             color: "#fff", padding: "10px 18px", borderRadius: 8, fontWeight: 700,
//             fontSize: 13.5, zIndex: 9999, fontFamily: "'Nunito Sans', sans-serif",
//           }}>
//             {toast.msg}
//           </div>
//         )}

//         {/* Header */}
//         <div style={{ marginBottom: 16 }}>
//           <h1 className="pm-title">Meeting Proceedings</h1>
//           <p className="pm-subtitle">Sabha Kamkaj manage करा</p>
//           <button className="pm-btn-primary" onClick={openCreateModal}>+ Create Meeting</button>
//         </div>

//         {/* Table card */}
//         <div style={{ background: "#fff", borderRadius: 12, padding: isMobile ? 12 : 20, overflowX: "auto" }}>

//           <div style={{
//             display: "flex", flexDirection: isMobile ? "column" : "row",
//             justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center",
//             gap: 10, marginBottom: 15,
//           }}>
//             <h3 className="pm-section-title">Records ({meetings.length})</h3>
//             <input
//               className="pm-search"
//               placeholder="Search meeting no..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               style={{ width: isMobile ? "100%" : "auto" }}
//             />
//           </div>

//           {/* Mobile card view */}
//           {isMobile ? (
//             <div>
//               {loading ? (
//                 <div style={{ textAlign: "center", padding: 20, color: "#8a9a90", fontFamily: "'Nunito Sans', sans-serif" }}>Loading...</div>
//               ) : meetings.length === 0 ? (
//                 <div style={{ textAlign: "center", padding: 20, fontFamily: "'Nunito Sans', sans-serif", color: "#8a9a90" }}>No records found</div>
//               ) : (
//                 meetings.map((m, i) => (
//                   <div className="pm-card" key={m._id}>
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
//                       <span style={{ fontWeight: 800, color: "#1a4a2e", fontSize: 14, fontFamily: "'Nunito Sans', sans-serif" }}>
//                         #{i + 1} — <span className="meeting-no-badge">{m.meetingNumber}</span>
//                       </span>
//                       <div style={{ display: "flex", gap: 6 }}>
//                         <button className="pm-btn-edit" onClick={() => openEditModal(m)}>✏️</button>
//                         <button className="pm-btn-delete" onClick={() => setDeleteConfirm(m._id)}>🗑️</button>
//                       </div>
//                     </div>
//                     <div className="pm-card-row"><span className="pm-card-label">Type</span><span>{m.meetingType || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Date</span><span>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Time</span><span className="time-badge">{formatTime(m.meetingTime)}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Subject ID</span><span>{m.subjectId || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Subject Type</span><span className="subject-type-pill">{m.subjectType || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Subject Name</span><span>{m.subjectName || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Decision</span><span>{m.decisionInMeeting || "-"}</span></div>
//                   </div>
//                 ))
//               )}
//             </div>
//           ) : (
//             /* Desktop table */
//             <table className="pm-table" style={{ width: "100%", borderCollapse: "collapse" }}>
//               <thead>
//                 <tr>
//                   {["#", "Meeting No", "Type", "Date", "Time", "Subject ID", "Subject Type", "Subject Name", "Decision In Meeting", "Actions"].map(h => (
//                     <th key={h}>{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr><td colSpan={10} style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>Loading...</td></tr>
//                 ) : meetings.length === 0 ? (
//                   <tr><td colSpan={10} style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>No records found</td></tr>
//                 ) : (
//                   meetings.map((m, i) => (
//                     <tr key={m._id}>
//                       <td>{i + 1}</td>
//                       <td><span className="meeting-no-badge">{m.meetingNumber}</span></td>
//                       <td>{m.meetingType}</td>
//                       <td>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</td>
//                       <td><span className="time-badge">{formatTime(m.meetingTime)}</span></td>
//                       <td>{m.subjectId}</td>
//                       <td><span className="subject-type-pill">{m.subjectType || "-"}</span></td>
//                       <td>{m.subjectName}</td>
//                       <td>{m.decisionInMeeting || "-"}</td>
//                       <td>
//                         <div style={{ display: "flex", gap: 6 }}>
//                           <button className="pm-btn-edit" onClick={() => openEditModal(m)}>✏️ Edit</button>
//                           <button className="pm-btn-delete" onClick={() => setDeleteConfirm(m._id)}>🗑️ Delete</button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>

//         {/* Create / Edit Modal */}
//         {showModal && (
//           <div style={modalOverlay}>
//             <div style={{
//               background: "#fff", borderRadius: 12, padding: isMobile ? 16 : 25,
//               width: isMobile ? "95%" : "100%", maxWidth: 500,
//               maxHeight: "90vh", overflowY: "auto",
//             }}>
//               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
//                 <h3 className="pm-modal-title">{editId ? "Edit Meeting" : "Create Meeting"}</h3>
//                 <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "#8a9a90" }}>✕</button>
//               </div>

//               <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Meeting Number</label>
//                   <input className="pm-input" name="meetingNumber" placeholder="Meeting Number" value={formData.meetingNumber} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Type Of Meeting</label>
//                   <select className="pm-input" name="meetingType" value={formData.meetingType} onChange={handleChange}>
//                     <option value="">Select Type</option>
//                     <option>General Body</option>
//                     <option>Standing Committee</option>
//                   </select>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Meeting Date</label>
//                   <input className="pm-input" name="meetingDate" type="date" value={formData.meetingDate} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Meeting Time</label>
//                   <div style={{ display: "flex", gap: 6 }}>
//                     <select className="pm-input" name="meetingHour" value={formData.meetingHour} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
//                       <option value="">HH</option>
//                       {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")).map(h => (
//                         <option key={h} value={h}>{h}</option>
//                       ))}
//                     </select>
//                     <select className="pm-input" name="meetingMinute" value={formData.meetingMinute} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
//                       <option value="">MM</option>
//                       {["00","05","10","15","20","25","30","35","40","45","50","55"].map(m => (
//                         <option key={m} value={m}>{m}</option>
//                       ))}
//                     </select>
//                     <select className="pm-input" name="meetingAmpm" value={formData.meetingAmpm} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
//                       <option value="AM">AM</option>
//                       <option value="PM">PM</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Subject ID</label>
//                   <input className="pm-input" name="subjectId" placeholder="Subject ID" value={formData.subjectId} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Subject Type</label>
//                   <select className="pm-input" name="subjectType" value={formData.subjectType} onChange={handleChange}>
//                     <option value="">Select Subject Type</option>
//                     <option>General</option>
//                     <option>Administrative and Financial Approval</option>
//                     <option>Contract Approval</option>
//                   </select>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
//                   <label className="pm-label">Subject Name</label>
//                   <input className="pm-input" name="subjectName" placeholder="Subject Name" value={formData.subjectName} onChange={handleChange} />
//                 </div>

//                 {editId && (
//                   <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
//                     <label className="pm-label">Decision In Meeting</label>
//                     <textarea
//                       className="pm-input"
//                       name="decisionInMeeting"
//                       placeholder="Enter decision taken in meeting..."
//                       value={formData.decisionInMeeting}
//                       onChange={handleChange}
//                       rows={3}
//                       style={{ resize: "vertical" }}
//                     />
//                   </div>
//                 )}

//               </div>

//               <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
//                 <button className="pm-btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
//                 <button className="pm-btn-primary" onClick={handleSubmit} disabled={loading}>
//                   {loading ? "Saving..." : editId ? "Update" : "Save"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Delete Confirm Modal */}
//         {deleteConfirm && (
//           <div style={modalOverlay}>
//             <div style={{
//               background: "#fff", padding: 28, borderRadius: 12,
//               maxWidth: 380, width: isMobile ? "90%" : "100%", textAlign: "center",
//             }}>
//               <p className="pm-delete-title">Delete Meeting?</p>
//               <p className="pm-delete-sub">He record permanently delete होईल. Sure aahes ka?</p>
//               <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
//                 <button className="pm-btn-cancel" onClick={() => setDeleteConfirm(null)}>Cancel</button>
//                 <button
//                   className="pm-btn-primary"
//                   style={{ background: "#c0392b" }}
//                   onClick={() => handleDelete(deleteConfirm)}
//                   disabled={loading}
//                 >
//                   {loading ? "Deleting..." : "Yes, Delete"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
//     </>
//   );
// }

// const modalOverlay = {
//   position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
//   display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000,
//   padding: 16,
// };







// import { useState, useEffect, useRef } from "react";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// // ─────────────────────────────────────────────────────────────
// // MeetingRecorder (inline — no separate file needed)
// // ─────────────────────────────────────────────────────────────
// function MeetingRecorder({ onDecisionExtracted, onTranscriptUpdate }) {
//   const [sessionActive, setSessionActive]       = useState(false);
//   const [isSpeaking, setIsSpeaking]             = useState(false);
//   const [recordingEnabled, setRecordingEnabled] = useState(false);
//   const [transcript, setTranscript]             = useState("");
//   const [interimText, setInterimText]           = useState("");
//   const [aiDecision, setAiDecision]             = useState("");
//   const [aiLoading, setAiLoading]               = useState(false);
//   const [status, setStatus]                     = useState("");
//   const [recordingReady, setRecordingReady]     = useState(false);
//   const [recordingURL, setRecordingURL]         = useState(null);
//   const [micError, setMicError]                 = useState(null);

//   const audioCtxRef      = useRef(null);
//   const analyserRef      = useRef(null);
//   const micStreamRef     = useRef(null);
//   const mediaRecorderRef = useRef(null);
//   const recordedChunks   = useRef([]);
//   const vadRafRef        = useRef(null);
//   const silenceTimerRef  = useRef(null);
//   const recognitionRef   = useRef(null);
//   const transcriptRef    = useRef("");
//   const isRecognizingRef = useRef(false);
//   const speakingRef      = useRef(false);
//   const sessionActiveRef = useRef(false);

//   const SILENCE_DB    = -42;
//   const SILENCE_DELAY = 2000;

//   const buildRecognition = () => {
//     const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SR) return null;
//     const rec = new SR();
//     rec.continuous     = true;
//     rec.interimResults = true;
//     rec.lang           = "hi-IN";

//     rec.onresult = (e) => {
//       let final = transcriptRef.current;
//       let interim = "";
//       for (let i = e.resultIndex; i < e.results.length; i++) {
//         if (e.results[i].isFinal) final += e.results[i][0].transcript + " ";
//         else interim = e.results[i][0].transcript;
//       }
//       transcriptRef.current = final;
//       setTranscript(final);
//       setInterimText(interim);
//       onTranscriptUpdate?.(final);
//     };

//     rec.onend = () => {
//       isRecognizingRef.current = false;
//       setInterimText("");
//       if (speakingRef.current && sessionActiveRef.current) {
//         try { rec.start(); isRecognizingRef.current = true; } catch {}
//       }
//     };

//     rec.onerror = (e) => {
//       if (["no-speech", "aborted", "network"].includes(e.error)) return;
//       setStatus(`⚠️ ${e.error}`);
//       isRecognizingRef.current = false;
//     };

//     return rec;
//   };

//   const startVAD = (stream) => {
//     const ctx = new (window.AudioContext || window.webkitAudioContext)();
//     const analyser = ctx.createAnalyser();
//     analyser.fftSize = 512;
//     ctx.createMediaStreamSource(stream).connect(analyser);
//     audioCtxRef.current  = ctx;
//     analyserRef.current  = analyser;

//     const data = new Uint8Array(analyser.frequencyBinCount);
//     const loop = () => {
//       vadRafRef.current = requestAnimationFrame(loop);
//       analyser.getByteFrequencyData(data);
//       const avg = data.reduce((a, b) => a + b, 0) / data.length;
//       const db  = avg === 0 ? -Infinity : 20 * Math.log10(avg / 255);
//       const speaking = db > SILENCE_DB;

//       if (speaking !== speakingRef.current) {
//         speakingRef.current = speaking;
//         setIsSpeaking(speaking);

//         if (speaking) {
//           clearTimeout(silenceTimerRef.current);
//           setStatus("🗣️ Speaking — transcribing...");
//           if (!isRecognizingRef.current && recognitionRef.current) {
//             try { recognitionRef.current.start(); isRecognizingRef.current = true; } catch {}
//           }
//         } else {
//           setStatus("🤫 Silence detected... pausing in 2s");
//           silenceTimerRef.current = setTimeout(() => {
//             if (!speakingRef.current && isRecognizingRef.current) {
//               try { recognitionRef.current?.stop(); } catch {}
//               isRecognizingRef.current = false;
//               setStatus("👂 Waiting for someone to speak...");
//             }
//           }, SILENCE_DELAY);
//         }
//       }
//     };
//     loop();
//   };

//   const startSession = async () => {
//     const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SR) { setStatus("❌ Please use Chrome browser."); return; }
//     setMicError(null);
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       micStreamRef.current = stream;

//       const rec = buildRecognition();
//       recognitionRef.current = rec;
//       startVAD(stream);

//       if (recordingEnabled) {
//         recordedChunks.current = [];
//         setRecordingReady(false);
//         setRecordingURL(null);
//         const mr = new MediaRecorder(stream);
//         mr.ondataavailable = (e) => { if (e.data.size > 0) recordedChunks.current.push(e.data); };
//         mr.onstop = () => {
//           const blob = new Blob(recordedChunks.current, { type: "audio/webm" });
//           setRecordingURL(URL.createObjectURL(blob));
//           setRecordingReady(true);
//         };
//         mr.start();
//         mediaRecorderRef.current = mr;
//       }

//       sessionActiveRef.current = true;
//       setSessionActive(true);
//       setStatus("👂 Waiting for someone to speak...");
//     } catch (err) {
//       const isDenied   = err?.name === "NotAllowedError" || err?.name === "PermissionDeniedError";
//       const isNotFound = err?.name === "NotFoundError";
//       setMicError(isNotFound ? "notfound" : isDenied ? "denied" : "other");
//       setStatus("");
//     }
//   };

//   const stopSession = () => {
//     cancelAnimationFrame(vadRafRef.current);
//     clearTimeout(silenceTimerRef.current);
//     audioCtxRef.current?.close();
//     try { recognitionRef.current?.stop(); } catch {}
//     isRecognizingRef.current = false;
//     micStreamRef.current?.getTracks().forEach(t => t.stop());
//     if (mediaRecorderRef.current?.state === "recording") mediaRecorderRef.current.stop();
//     speakingRef.current      = false;
//     sessionActiveRef.current = false;
//     setIsSpeaking(false);
//     setSessionActive(false);
//     setInterimText("");
//     setStatus("⏹️ Session ended.");
//   };

//   const resetAll = () => {
//     stopSession();
//     setTranscript("");
//     setAiDecision("");
//     setRecordingURL(null);
//     setRecordingReady(false);
//     transcriptRef.current = "";
//     setStatus("");
//   };

//   const extractDecisions = async () => {
//     if (!transcript.trim()) { setStatus("⚠️ Transcript is empty."); return; }
//     setAiLoading(true);
//     setStatus("🤖 Claude AI extracting decisions...");
//     try {
//       const res = await fetch("https://api.anthropic.com/v1/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           model: "claude-sonnet-4-20250514",
//           max_tokens: 1000,
//           messages: [{
//             role: "user",
//             content: `You are a meeting minutes expert. Extract only the key decisions from the transcript below.

// Rules:
// - Write each decision on a new line with a number (1. 2. 3.)
// - Decisions only, nothing else
// - Reply in the same language as the transcript

// Transcript:
// ${transcript}`
//           }]
//         })
//       });
//       const data = await res.json();
//       const decision = data.content?.map(b => b.text || "").join("") || "No decisions found.";
//       setAiDecision(decision);
//       setStatus("✅ Decisions extracted!");
//     } catch {
//       setStatus("❌ AI error. Please try again.");
//     } finally {
//       setAiLoading(false);
//     }
//   };

//   return (
//     <div className="mr-wrap">
//       {/* VAD ring + controls */}
//       <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 12 }}>
//         <div className={`mr-vad-ring ${isSpeaking ? "speaking" : ""}`}>
//           {isSpeaking ? "🗣️" : sessionActive ? "👂" : "🎙️"}
//         </div>

//         <div style={{ flex: 1 }}>
//           {/* Recording toggle */}
//           <label className="mr-toggle">
//             <input
//               type="checkbox"
//               checked={recordingEnabled}
//               onChange={e => setRecordingEnabled(e.target.checked)}
//               disabled={sessionActive}
//               style={{ display: "none" }}
//             />
//             <div className={`mr-toggle-track ${recordingEnabled ? "on" : ""}`}>
//               <div className="mr-toggle-thumb" />
//             </div>
//             <span style={{ fontSize: 13, fontWeight: 600, color: "#3a6b50" }}>
//               {recordingEnabled
//                 ? <><span className="mr-rec-dot" />Audio Recording ON</>
//                 : "Audio Recording (optional)"}
//             </span>
//           </label>

//           {/* Session buttons */}
//           <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//             {!sessionActive
//               ? <button className="mr-btn mr-btn-green" onClick={startSession}>▶ Start Session</button>
//               : <button className="mr-btn mr-btn-grey"  onClick={stopSession}>⏹ Stop Session</button>
//             }
//             <button className="mr-btn mr-btn-red" onClick={resetAll} disabled={sessionActive}>🔄 Reset</button>
//           </div>
//         </div>
//       </div>

//       {/* Mic Error Banner */}
//       {micError && (
//         <div style={{
//           background: micError === "notfound" ? "#fff8e1" : "#fdecea",
//           border: `1.5px solid ${micError === "notfound" ? "#ffe082" : "#f5c6c2"}`,
//           borderRadius: 10, padding: "12px 14px", marginBottom: 12,
//           fontSize: 13, fontWeight: 500, color: "#3a2a2a", lineHeight: 1.7,
//         }}>
//           {micError === "denied" && (
//             <>
//               <div style={{ fontWeight: 800, color: "#c0392b", marginBottom: 6 }}>🚫 Microphone Permission Denied</div>
//               <div>Browser has blocked the microphone. To fix this:</div>
//               <ol style={{ margin: "6px 0 0 18px", padding: 0 }}>
//                 <li>Click the <b>🔒 Lock icon</b> in the address bar</li>
//                 <li>Open <b>Site settings</b></li>
//                 <li>Set <b>Microphone → Allow</b></li>
//                 <li>Press <b>Refresh</b> (F5)</li>
//               </ol>
//             </>
//           )}
//           {micError === "notfound" && (
//             <>
//               <div style={{ fontWeight: 800, color: "#b07a00", marginBottom: 6 }}>🎤 Microphone Not Found</div>
//               <div>No microphone detected. Please check your device or connect a headset / external mic.</div>
//             </>
//           )}
//           {micError === "other" && (
//             <>
//               <div style={{ fontWeight: 800, color: "#c0392b", marginBottom: 6 }}>❌ Microphone Could Not Start</div>
//               <div>Please refresh the page (F5) and try again.</div>
//             </>
//           )}
//         </div>
//       )}

//       {/* Status */}
//       <div className="mr-status" style={{ marginBottom: 10 }}>{status}</div>

//       {/* Transcript */}
//       <div className="mr-lbl">Live Transcript</div>
//       <div className="mr-transcript-box">
//         {transcript
//           ? <>{transcript}{interimText && <span className="mr-interim"> {interimText}</span>}</>
//           : <span style={{ color: "#b0c8b8" }}>Start a session to see the transcript here...</span>
//         }
//       </div>

//       {/* Recording player + download */}
//       {recordingReady && recordingURL && (
//         <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
//           <span style={{ fontSize: 13, fontWeight: 700, color: "#1a4a2e" }}>🔴 Recording ready:</span>
//           <a href={recordingURL} download="meeting-recording.webm"
//              className="mr-btn mr-btn-teal" style={{ textDecoration: "none" }}>
//             ⬇ Download
//           </a>
//           <audio controls src={recordingURL} style={{ height: 32, flex: 1, minWidth: 120 }} />
//         </div>
//       )}

//       {/* AI extract */}
//       {transcript.trim().length > 10 && (
//         <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
//           <button
//             className="mr-btn mr-btn-blue"
//             onClick={extractDecisions}
//             disabled={aiLoading}
//             style={{ alignSelf: "flex-start" }}
//           >
//             {aiLoading
//               ? <><span className="mr-spinner" /> AI is working...</>
//               : "🤖 Extract Decisions with AI"}
//           </button>

//           {aiDecision && (
//             <>
//               <div className="mr-lbl">AI Extracted Decisions</div>
//               <div className="mr-decision-box">{aiDecision}</div>
//               <button
//                 className="mr-use-btn"
//                 onClick={() => onDecisionExtracted?.(aiDecision)}
//               >
//                 ✅ Save to "Decision In Meeting"
//               </button>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────
// // ProceedingsMeeting (main component)
// // ─────────────────────────────────────────────────────────────
// export default function ProceedingsMeeting() {
//   const [meetings, setMeetings]         = useState([]);
//   const [search, setSearch]             = useState("");
//   const [showModal, setShowModal]       = useState(false);
//   const [toast, setToast]               = useState(null);
//   const [loading, setLoading]           = useState(false);
//   const [editId, setEditId]             = useState(null);
//   const [deleteConfirm, setDeleteConfirm] = useState(null);
//   const [isMobile, setIsMobile]         = useState(window.innerWidth < 640);
//   const [showRecorder, setShowRecorder] = useState(false);

//   useEffect(() => {
//     const onResize = () => setIsMobile(window.innerWidth < 640);
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

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
//     decisionInMeeting: "",
//   });

//   const showToast = (msg, type = "success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3000);
//   };

//   const formatTime = (time) => {
//     if (!time) return "-";
//     const [hourStr, minute] = time.split(":");
//     let hour = parseInt(hourStr, 10);
//     const ampm = hour >= 12 ? "PM" : "AM";
//     hour = hour % 12 || 12;
//     return `${hour}:${minute} ${ampm}`;
//   };

//   const fetchMeetings = async (searchVal = "") => {
//     try {
//       setLoading(true);
//       const url = searchVal
//         ? `${BASE_URL}/getMeetings?search=${searchVal}`
//         : `${BASE_URL}/getMeetings`;
//       const res  = await fetch(url);
//       const data = await res.json();
//       if (data.success) setMeetings(data.data);
//       else showToast(data.message || "Failed to fetch meetings", "error");
//     } catch {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { fetchMeetings(); }, []);
//   useEffect(() => {
//     const timer = setTimeout(() => fetchMeetings(search), 400);
//     return () => clearTimeout(timer);
//   }, [search]);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const emptyForm = {
//     meetingNumber: "", meetingType: "", meetingDate: "",
//     meetingHour: "", meetingMinute: "", meetingAmpm: "AM",
//     subjectId: "", subjectType: "", subjectName: "", decisionInMeeting: "",
//   };

//   const openCreateModal = () => {
//     setEditId(null);
//     setFormData(emptyForm);
//     setShowRecorder(false);
//     setShowModal(true);
//   };

//   const openEditModal = (m) => {
//     setEditId(m._id);
//     setFormData({
//       meetingNumber: m.meetingNumber,
//       meetingType:   m.meetingType,
//       meetingDate:   m.meetingDate ? m.meetingDate.slice(0, 10) : "",
//       meetingHour:   m.meetingTime ? (() => { const h = parseInt(m.meetingTime.split(":")[0], 10); return String(h % 12 || 12).padStart(2, "0"); })() : "",
//       meetingMinute: m.meetingTime ? m.meetingTime.split(":")[1] : "",
//       meetingAmpm:   m.meetingTime ? (parseInt(m.meetingTime.split(":")[0], 10) >= 12 ? "PM" : "AM") : "AM",
//       subjectId:     m.subjectId || "",
//       subjectType:   m.subjectType || "",
//       subjectName:   m.subjectName || "",
//       decisionInMeeting: m.decisionInMeeting || "",
//     });
//     setShowRecorder(false);
//     setShowModal(true);
//   };

//   const buildTimeString = () => {
//     if (!formData.meetingHour || !formData.meetingMinute) return "";
//     let hour = parseInt(formData.meetingHour, 10);
//     if (formData.meetingAmpm === "PM" && hour !== 12) hour += 12;
//     if (formData.meetingAmpm === "AM" && hour === 12) hour = 0;
//     return `${String(hour).padStart(2, "0")}:${formData.meetingMinute}`;
//   };

//   const handleCreate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/createMeeting`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, meetingTime: buildTimeString() }),
//       });
//       const data = await res.json();
//       if (data.success) { setShowModal(false); showToast("Meeting created successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to create meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   const handleUpdate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/updateMeeting/${editId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, meetingTime: buildTimeString() }),
//       });
//       const data = await res.json();
//       if (data.success) { setShowModal(false); setEditId(null); showToast("Meeting updated successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to update meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   const handleSubmit = () => {
//     if (!formData.meetingNumber || !formData.meetingType) { showToast("Please fill required fields", "error"); return; }
//     editId ? handleUpdate() : handleCreate();
//   };

//   const handleDelete = async (id) => {
//     try {
//       setLoading(true);
//       const res  = await fetch(`${BASE_URL}/deleteMeeting/${id}`, { method: "DELETE" });
//       const data = await res.json();
//       if (data.success) { setDeleteConfirm(null); showToast("Meeting deleted successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to delete meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap');

//         .pm-wrap * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }

//         .pm-table tbody tr:hover { background: #f4faf6; }

//         .meeting-no-badge {
//           display: inline-block; background: #e6f4ec; color: #1a6640;
//           font-weight: 700; font-size: 12.5px; padding: 3px 10px;
//           border-radius: 6px; letter-spacing: 0.3px;
//         }
//         .subject-type-pill {
//           display: inline-block; background: #eaf3fb; color: #1565a8;
//           font-size: 12px; font-weight: 600; padding: 3px 9px; border-radius: 20px;
//         }
//         .time-badge {
//           display: inline-block; background: #e6f4ec; color: #1a6640;
//           font-size: 12.5px; font-weight: 700; padding: 3px 10px; border-radius: 6px;
//         }

//         .pm-table th {
//           font-size: 13px; font-weight: 700; color: #3a6b50;
//           padding: 11px 14px; text-align: left; background: #f0f7f2;
//           border-bottom: 2px solid #d6ede0; white-space: nowrap;
//         }
//         .pm-table td {
//           font-size: 13.5px; font-weight: 500; color: #2d3d35;
//           padding: 11px 14px; border-bottom: 1px solid #eef4ee; vertical-align: middle;
//         }
//         .pm-table td:first-child { color: #8aaa95; font-weight: 600; font-size: 13px; }

//         .pm-search {
//           font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 500;
//           color: #2d3d35; border: 1.5px solid #c8e0cc; border-radius: 8px;
//           padding: 8px 13px; outline: none; transition: border-color 0.2s;
//         }
//         .pm-search:focus { border-color: #1a7a4a; }

//         .pm-input {
//           font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 500;
//           width: 100%; padding: 10px 12px; border-radius: 8px;
//           border: 1.5px solid #c8e0cc; outline: none; color: #2d3d35;
//           transition: border-color 0.2s;
//         }
//         .pm-input:focus { border-color: #1a7a4a; }

//         .pm-label {
//           font-family: 'Nunito Sans', sans-serif; font-size: 12px; font-weight: 700;
//           color: #5a7a6a; margin-bottom: 4px; display: block;
//         }

//         .pm-btn-primary {
//           font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 700;
//           background: #1a7a4a; color: #fff; border: none; border-radius: 8px;
//           padding: 10px 20px; cursor: pointer; letter-spacing: 0.2px; transition: background 0.15s;
//         }
//         .pm-btn-primary:hover { background: #155e39; }
//         .pm-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

//         .pm-btn-cancel {
//           font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 600;
//           background: #eef2ee; color: #4a6a5a; border: none; border-radius: 8px;
//           padding: 10px 20px; cursor: pointer;
//         }
//         .pm-btn-cancel:hover { background: #e0e8e2; }

//         .pm-btn-edit {
//           font-family: 'Nunito Sans', sans-serif; font-size: 12.5px; font-weight: 600;
//           background: #e8f4fd; color: #1a6aaa; border: none; border-radius: 6px;
//           padding: 5px 11px; cursor: pointer;
//         }
//         .pm-btn-edit:hover { background: #d0e8f8; }

//         .pm-btn-delete {
//           font-family: 'Nunito Sans', sans-serif; font-size: 12.5px; font-weight: 600;
//           background: #fdecea; color: #c0392b; border: none; border-radius: 6px;
//           padding: 5px 11px; cursor: pointer;
//         }
//         .pm-btn-delete:hover { background: #fad4d0; }

//         .pm-card {
//           border: 1px solid #e0ede5; border-radius: 10px;
//           padding: 13px; background: #f9fdf9; margin-bottom: 10px;
//         }
//         .pm-card-row {
//           display: flex; justify-content: space-between; font-size: 13px;
//           font-weight: 500; padding: 4px 0; border-bottom: 1px solid #eef4ee; color: #2d3d35;
//         }
//         .pm-card-label { color: #5a7a6a; font-weight: 700; min-width: 110px; font-size: 12.5px; }

//         .pm-title { font-size: 22px; font-weight: 800; color: #1a4a2e; margin: 0 0 3px 0; letter-spacing: -0.3px; }
//         .pm-subtitle { font-size: 13px; font-weight: 500; color: #7a9a88; margin: 0 0 14px 0; }
//         .pm-section-title { font-size: 15px; font-weight: 800; color: #1a4a2e; margin: 0; }
//         .pm-modal-title { font-size: 17px; font-weight: 800; color: #1a4a2e; margin: 0; }
//         .pm-delete-title { font-size: 17px; font-weight: 700; color: #1a4a2e; margin-bottom: 6px; }
//         .pm-delete-sub { font-size: 13.5px; color: #8a9a90; margin-bottom: 20px; font-weight: 500; }

//         /* ── MeetingRecorder styles ── */
//         .mr-wrap * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }

//         .mr-vad-ring {
//           width: 62px; height: 62px; border-radius: 50%; border: 3px solid #d6ede0;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 24px; background: #f7fbf8; flex-shrink: 0;
//           transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
//         }
//         .mr-vad-ring.speaking {
//           border-color: #1a7a4a; background: #e6f4ec;
//           animation: mrRingPulse 1s ease-in-out infinite;
//         }
//         @keyframes mrRingPulse {
//           0%, 100% { box-shadow: 0 0 0 4px rgba(26,122,74,0.18), 0 0 0 10px rgba(26,122,74,0.07); }
//           50%       { box-shadow: 0 0 0 9px rgba(26,122,74,0.22), 0 0 0 18px rgba(26,122,74,0.04); }
//         }

//         .mr-rec-dot {
//           display: inline-block; width: 8px; height: 8px; background: #e53935;
//           border-radius: 50%; animation: mrRecPulse 1s infinite; margin-right: 5px; vertical-align: middle;
//         }
//         @keyframes mrRecPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }

//         .mr-transcript-box {
//           background: #f7fbf8; border: 1.5px solid #d6ede0; border-radius: 10px;
//           padding: 12px; min-height: 80px; max-height: 150px; overflow-y: auto;
//           font-size: 13.5px; font-weight: 500; color: #2d3d35; line-height: 1.75;
//           white-space: pre-wrap;
//         }
//         .mr-interim { color: #9ab5a0; font-style: italic; }

//         .mr-decision-box {
//           background: #eaf4ff; border: 1.5px solid #b3d4f0; border-radius: 10px;
//           padding: 12px; font-size: 13.5px; font-weight: 500;
//           color: #1a3a5a; line-height: 1.75; white-space: pre-wrap;
//         }

//         .mr-btn {
//           font-family: 'Nunito Sans', sans-serif; font-weight: 700; font-size: 13px;
//           border: none; border-radius: 8px; padding: 8px 16px;
//           cursor: pointer; display: inline-flex; align-items: center; gap: 5px;
//           transition: background 0.15s, opacity 0.15s;
//         }
//         .mr-btn:disabled { opacity: 0.45; cursor: not-allowed; }
//         .mr-btn-green { background: #1a7a4a; color: #fff; }
//         .mr-btn-green:hover:not(:disabled) { background: #155e39; }
//         .mr-btn-grey  { background: #eef2ee; color: #4a6a5a; }
//         .mr-btn-grey:hover:not(:disabled)  { background: #e0e8e2; }
//         .mr-btn-blue  { background: #e8f4fd; color: #1565a8; }
//         .mr-btn-blue:hover:not(:disabled)  { background: #cce4f8; }
//         .mr-btn-red   { background: #fdecea; color: #c0392b; }
//         .mr-btn-red:hover:not(:disabled)   { background: #fbd0cc; }
//         .mr-btn-teal  { background: #e0f7f4; color: #00695c; }
//         .mr-btn-teal:hover:not(:disabled)  { background: #b2ebf2; }

//         .mr-toggle {
//           display: inline-flex; align-items: center; gap: 8px;
//           background: #f0f7f2; border-radius: 8px; padding: 7px 12px;
//           cursor: pointer; user-select: none; margin-bottom: 8px;
//         }
//         .mr-toggle-track {
//           width: 36px; height: 20px; border-radius: 20px; background: #c8d8c8;
//           position: relative; transition: background 0.2s; flex-shrink: 0;
//         }
//         .mr-toggle-track.on { background: #1a7a4a; }
//         .mr-toggle-thumb {
//           width: 16px; height: 16px; border-radius: 50%; background: #fff;
//           position: absolute; top: 2px; left: 2px;
//           transition: transform 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.2);
//         }
//         .mr-toggle-track.on .mr-toggle-thumb { transform: translateX(16px); }

//         .mr-lbl {
//           font-size: 11.5px; font-weight: 800; color: #5a7a6a;
//           text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 5px;
//         }
//         .mr-status { font-size: 12px; font-weight: 600; color: #7a9a88; min-height: 16px; }

//         .mr-spinner {
//           display: inline-block; width: 13px; height: 13px;
//           border: 2px solid #b3d4f0; border-top-color: #1565a8;
//           border-radius: 50%; animation: mrSpin 0.7s linear infinite;
//         }
//         @keyframes mrSpin { to { transform: rotate(360deg); } }

//         .mr-use-btn {
//           font-family: 'Nunito Sans', sans-serif; font-weight: 700; font-size: 13px;
//           background: #1a7a4a; color: #fff; border: none; border-radius: 7px;
//           padding: 7px 16px; cursor: pointer; margin-top: 8px; display: inline-block;
//         }
//         .mr-use-btn:hover { background: #155e39; }

//         /* Recorder toggle button in Edit Modal */
//         .pm-recorder-toggle {
//           display: flex; align-items: center; gap: 8px;
//           font-family: 'Nunito Sans', sans-serif; font-size: 13px; font-weight: 700;
//           background: #f0f7f2; color: #1a5a38; border: 1.5px solid #c8e0cc;
//           border-radius: 8px; padding: 8px 14px; cursor: pointer;
//           transition: background 0.15s, border-color 0.15s;
//         }
//         .pm-recorder-toggle:hover { background: #e4f2e8; border-color: #1a7a4a; }
//         .pm-recorder-toggle.active { background: #e6f4ec; border-color: #1a7a4a; color: #1a4a2e; }

//         /* Recorder section in modal */
//         .pm-recorder-section {
//           border: 1.5px solid #d6ede0; border-radius: 10px;
//           padding: 14px; background: #f7fbf8; margin-top: 4px;
//           grid-column: span 2;
//         }
//       `}</style>

//       <div className="pm-wrap" style={{ background: "#f0f4f0", minHeight: "100vh", padding: isMobile ? 12 : 24 }}>

//         {/* Toast */}
//         {toast && (
//           <div style={{
//             position: "fixed", top: 16, right: 16, left: isMobile ? 16 : "auto",
//             background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
//             color: "#fff", padding: "10px 18px", borderRadius: 8, fontWeight: 700,
//             fontSize: 13.5, zIndex: 9999, fontFamily: "'Nunito Sans', sans-serif",
//           }}>
//             {toast.msg}
//           </div>
//         )}

//         {/* Header */}
//         <div style={{ marginBottom: 16 }}>
//           <h1 className="pm-title">Meeting Proceedings</h1>
//           <p className="pm-subtitle">Sabha Kamkaj manage करा</p>
//           <button className="pm-btn-primary" onClick={openCreateModal}>+ Create Meeting</button>
//         </div>

//         {/* Table card */}
//         <div style={{ background: "#fff", borderRadius: 12, padding: isMobile ? 12 : 20, overflowX: "auto" }}>
//           <div style={{
//             display: "flex", flexDirection: isMobile ? "column" : "row",
//             justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center",
//             gap: 10, marginBottom: 15,
//           }}>
//             <h3 className="pm-section-title">Records ({meetings.length})</h3>
//             <input
//               className="pm-search"
//               placeholder="Search meeting no..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               style={{ width: isMobile ? "100%" : "auto" }}
//             />
//           </div>

//           {/* Mobile cards */}
//           {isMobile ? (
//             <div>
//               {loading ? (
//                 <div style={{ textAlign: "center", padding: 20, color: "#8a9a90", fontFamily: "'Nunito Sans', sans-serif" }}>Loading...</div>
//               ) : meetings.length === 0 ? (
//                 <div style={{ textAlign: "center", padding: 20, fontFamily: "'Nunito Sans', sans-serif", color: "#8a9a90" }}>No records found</div>
//               ) : (
//                 meetings.map((m, i) => (
//                   <div className="pm-card" key={m._id}>
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
//                       <span style={{ fontWeight: 800, color: "#1a4a2e", fontSize: 14, fontFamily: "'Nunito Sans', sans-serif" }}>
//                         #{i + 1} — <span className="meeting-no-badge">{m.meetingNumber}</span>
//                       </span>
//                       <div style={{ display: "flex", gap: 6 }}>
//                         <button className="pm-btn-edit" onClick={() => openEditModal(m)}>✏️</button>
//                         <button className="pm-btn-delete" onClick={() => setDeleteConfirm(m._id)}>🗑️</button>
//                       </div>
//                     </div>
//                     <div className="pm-card-row"><span className="pm-card-label">Type</span><span>{m.meetingType || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Date</span><span>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Time</span><span className="time-badge">{formatTime(m.meetingTime)}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Subject ID</span><span>{m.subjectId || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Subject Type</span><span className="subject-type-pill">{m.subjectType || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Subject Name</span><span>{m.subjectName || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Decision</span><span>{m.decisionInMeeting || "-"}</span></div>
//                   </div>
//                 ))
//               )}
//             </div>
//           ) : (
//             /* Desktop table */
//             <table className="pm-table" style={{ width: "100%", borderCollapse: "collapse" }}>
//               <thead>
//                 <tr>
//                   {["#", "Meeting No", "Type", "Date", "Time", "Subject ID", "Subject Type", "Subject Name", "Decision In Meeting", "Actions"].map(h => (
//                     <th key={h}>{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr><td colSpan={10} style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>Loading...</td></tr>
//                 ) : meetings.length === 0 ? (
//                   <tr><td colSpan={10} style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>No records found</td></tr>
//                 ) : (
//                   meetings.map((m, i) => (
//                     <tr key={m._id}>
//                       <td>{i + 1}</td>
//                       <td><span className="meeting-no-badge">{m.meetingNumber}</span></td>
//                       <td>{m.meetingType}</td>
//                       <td>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</td>
//                       <td><span className="time-badge">{formatTime(m.meetingTime)}</span></td>
//                       <td>{m.subjectId}</td>
//                       <td><span className="subject-type-pill">{m.subjectType || "-"}</span></td>
//                       <td>{m.subjectName}</td>
//                       <td>{m.decisionInMeeting || "-"}</td>
//                       <td>
//                         <div style={{ display: "flex", gap: 6 }}>
//                           <button className="pm-btn-edit" onClick={() => openEditModal(m)}>✏️ Edit</button>
//                           <button className="pm-btn-delete" onClick={() => setDeleteConfirm(m._id)}>🗑️ Delete</button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>

//         {/* Create / Edit Modal */}
//         {showModal && (
//           <div style={modalOverlay}>
//             <div style={{
//               background: "#fff", borderRadius: 12, padding: isMobile ? 16 : 25,
//               width: isMobile ? "95%" : "100%", maxWidth: 560,
//               maxHeight: "90vh", overflowY: "auto",
//             }}>
//               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
//                 <h3 className="pm-modal-title">{editId ? "Edit Meeting" : "Create Meeting"}</h3>
//                 <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "#8a9a90" }}>✕</button>
//               </div>

//               <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Meeting Number</label>
//                   <input className="pm-input" name="meetingNumber" placeholder="Meeting Number" value={formData.meetingNumber} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Type Of Meeting</label>
//                   <select className="pm-input" name="meetingType" value={formData.meetingType} onChange={handleChange}>
//                     <option value="">Select Type</option>
//                     <option>General Body</option>
//                     <option>Standing Committee</option>
//                   </select>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Meeting Date</label>
//                   <input className="pm-input" name="meetingDate" type="date" value={formData.meetingDate} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Meeting Time</label>
//                   <div style={{ display: "flex", gap: 6 }}>
//                     <select className="pm-input" name="meetingHour" value={formData.meetingHour} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
//                       <option value="">HH</option>
//                       {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")).map(h => (
//                         <option key={h} value={h}>{h}</option>
//                       ))}
//                     </select>
//                     <select className="pm-input" name="meetingMinute" value={formData.meetingMinute} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
//                       <option value="">MM</option>
//                       {["00","05","10","15","20","25","30","35","40","45","50","55"].map(m => (
//                         <option key={m} value={m}>{m}</option>
//                       ))}
//                     </select>
//                     <select className="pm-input" name="meetingAmpm" value={formData.meetingAmpm} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
//                       <option value="AM">AM</option>
//                       <option value="PM">PM</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Subject ID</label>
//                   <input className="pm-input" name="subjectId" placeholder="Subject ID" value={formData.subjectId} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Subject Type</label>
//                   <select className="pm-input" name="subjectType" value={formData.subjectType} onChange={handleChange}>
//                     <option value="">Select Subject Type</option>
//                     <option>General</option>
//                     <option>Administrative and Financial Approval</option>
//                     <option>Contract Approval</option>
//                   </select>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
//                   <label className="pm-label">Subject Name</label>
//                   <input className="pm-input" name="subjectName" placeholder="Subject Name" value={formData.subjectName} onChange={handleChange} />
//                 </div>

//                 {/* Decision In Meeting — only in Edit Modal */}
//                 {editId && (
//                   <>
//                     <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
//                       <label className="pm-label">Decision In Meeting</label>
//                       <textarea
//                         className="pm-input"
//                         name="decisionInMeeting"
//                         placeholder="Enter decision taken in meeting..."
//                         value={formData.decisionInMeeting}
//                         onChange={handleChange}
//                         rows={3}
//                         style={{ resize: "vertical" }}
//                       />
//                     </div>

//                     {/* Meeting Recorder toggle */}
//                     <div style={{ gridColumn: isMobile ? "1" : "span 2" }}>
//                       <button
//                         className={`pm-recorder-toggle ${showRecorder ? "active" : ""}`}
//                         onClick={() => setShowRecorder(v => !v)}
//                         type="button"
//                       >
//                         🎙️ {showRecorder ? "Hide Meeting Recorder" : "Record Meeting & Auto-Extract Decisions"}
//                       </button>
//                     </div>

//                     {/* Recorder section (collapsible) */}
//                     {showRecorder && (
//                       <div className="pm-recorder-section" style={{ gridColumn: isMobile ? "1" : "span 2" }}>
//                         <MeetingRecorder
//                           onDecisionExtracted={(text) => {
//                             setFormData(prev => ({ ...prev, decisionInMeeting: text }));
//                             setShowRecorder(false);
//                           }}
//                           onTranscriptUpdate={() => {}}
//                         />
//                       </div>
//                     )}
//                   </>
//                 )}

//               </div>

//               <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
//                 <button className="pm-btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
//                 <button className="pm-btn-primary" onClick={handleSubmit} disabled={loading}>
//                   {loading ? "Saving..." : editId ? "Update" : "Save"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Delete Confirm Modal */}
//         {deleteConfirm && (
//           <div style={modalOverlay}>
//             <div style={{
//               background: "#fff", padding: 28, borderRadius: 12,
//               maxWidth: 380, width: isMobile ? "90%" : "100%", textAlign: "center",
//             }}>
//               <p className="pm-delete-title">Delete Meeting?</p>
//               <p className="pm-delete-sub">He record permanently delete होईल. Sure aahes ka?</p>
//               <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
//                 <button className="pm-btn-cancel" onClick={() => setDeleteConfirm(null)}>Cancel</button>
//                 <button
//                   className="pm-btn-primary"
//                   style={{ background: "#c0392b" }}
//                   onClick={() => handleDelete(deleteConfirm)}
//                   disabled={loading}
//                 >
//                   {loading ? "Deleting..." : "Yes, Delete"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
//     </>
//   );
// }

// const modalOverlay = {
//   position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
//   display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000,
//   padding: 16,
// };







// import { useState, useEffect, useRef } from "react";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// // ─────────────────────────────────────────────────────────────
// // MeetingRecorder (inline — no separate file needed)
// // ─────────────────────────────────────────────────────────────
// function MeetingRecorder({ onDecisionExtracted, onTranscriptUpdate }) {
//   const [sessionActive, setSessionActive]       = useState(false);
//   const [isSpeaking, setIsSpeaking]             = useState(false);
//   const [recordingEnabled, setRecordingEnabled] = useState(false);
//   const [transcript, setTranscript]             = useState("");
//   const [interimText, setInterimText]           = useState("");
//   const [aiDecision, setAiDecision]             = useState("");
//   const [aiLoading, setAiLoading]               = useState(false);
//   const [status, setStatus]                     = useState("");
//   const [recordingReady, setRecordingReady]     = useState(false);
//   const [recordingURL, setRecordingURL]         = useState(null);
//   const [micError, setMicError]                 = useState(null);

//   const audioCtxRef      = useRef(null);
//   const analyserRef      = useRef(null);
//   const micStreamRef     = useRef(null);
//   const mediaRecorderRef = useRef(null);
//   const recordedChunks   = useRef([]);
//   const vadRafRef        = useRef(null);
//   const silenceTimerRef  = useRef(null);
//   const recognitionRef   = useRef(null);
//   const transcriptRef    = useRef("");
//   const isRecognizingRef = useRef(false);
//   const speakingRef      = useRef(false);
//   const sessionActiveRef = useRef(false);

//   const SILENCE_DB    = -42;
//   const SILENCE_DELAY = 2000;

//   const buildRecognition = () => {
//     const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SR) return null;
//     const rec = new SR();
//     rec.continuous     = true;
//     rec.interimResults = true;
//     rec.lang           = "hi-IN";

//     rec.onresult = (e) => {
//       let final = transcriptRef.current;
//       let interim = "";
//       for (let i = e.resultIndex; i < e.results.length; i++) {
//         if (e.results[i].isFinal) final += e.results[i][0].transcript + " ";
//         else interim = e.results[i][0].transcript;
//       }
//       transcriptRef.current = final;
//       setTranscript(final);
//       setInterimText(interim);
//       onTranscriptUpdate?.(final);
//     };

//     rec.onend = () => {
//       isRecognizingRef.current = false;
//       setInterimText("");
//       if (speakingRef.current && sessionActiveRef.current) {
//         try { rec.start(); isRecognizingRef.current = true; } catch {}
//       }
//     };

//     rec.onerror = (e) => {
//       if (["no-speech", "aborted", "network"].includes(e.error)) return;
//       setStatus(`⚠️ ${e.error}`);
//       isRecognizingRef.current = false;
//     };

//     return rec;
//   };

//   const startVAD = (stream) => {
//     const ctx = new (window.AudioContext || window.webkitAudioContext)();
//     const analyser = ctx.createAnalyser();
//     analyser.fftSize = 512;
//     ctx.createMediaStreamSource(stream).connect(analyser);
//     audioCtxRef.current  = ctx;
//     analyserRef.current  = analyser;

//     const data = new Uint8Array(analyser.frequencyBinCount);
//     const loop = () => {
//       vadRafRef.current = requestAnimationFrame(loop);
//       analyser.getByteFrequencyData(data);
//       const avg = data.reduce((a, b) => a + b, 0) / data.length;
//       const db  = avg === 0 ? -Infinity : 20 * Math.log10(avg / 255);
//       const speaking = db > SILENCE_DB;

//       if (speaking !== speakingRef.current) {
//         speakingRef.current = speaking;
//         setIsSpeaking(speaking);

//         if (speaking) {
//           clearTimeout(silenceTimerRef.current);
//           setStatus("🗣️ Speaking — transcribing...");
//           if (!isRecognizingRef.current && recognitionRef.current) {
//             try { recognitionRef.current.start(); isRecognizingRef.current = true; } catch {}
//           }
//         } else {
//           setStatus("🤫 Silence detected... pausing in 2s");
//           silenceTimerRef.current = setTimeout(() => {
//             if (!speakingRef.current && isRecognizingRef.current) {
//               try { recognitionRef.current?.stop(); } catch {}
//               isRecognizingRef.current = false;
//               setStatus("👂 Waiting for someone to speak...");
//             }
//           }, SILENCE_DELAY);
//         }
//       }
//     };
//     loop();
//   };

//   const startSession = async () => {
//     const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SR) { setStatus("❌ Please use Chrome browser."); return; }
//     setMicError(null);
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       micStreamRef.current = stream;

//       const rec = buildRecognition();
//       recognitionRef.current = rec;
//       startVAD(stream);

//       if (recordingEnabled) {
//         recordedChunks.current = [];
//         setRecordingReady(false);
//         setRecordingURL(null);
//         const mr = new MediaRecorder(stream);
//         mr.ondataavailable = (e) => { if (e.data.size > 0) recordedChunks.current.push(e.data); };
//         mr.onstop = () => {
//           const blob = new Blob(recordedChunks.current, { type: "audio/webm" });
//           setRecordingURL(URL.createObjectURL(blob));
//           setRecordingReady(true);
//         };
//         mr.start();
//         mediaRecorderRef.current = mr;
//       }

//       sessionActiveRef.current = true;
//       setSessionActive(true);
//       setStatus("👂 Waiting for someone to speak...");
//     } catch (err) {
//       const isDenied   = err?.name === "NotAllowedError" || err?.name === "PermissionDeniedError";
//       const isNotFound = err?.name === "NotFoundError";
//       setMicError(isNotFound ? "notfound" : isDenied ? "denied" : "other");
//       setStatus("");
//     }
//   };

//   const stopSession = () => {
//     cancelAnimationFrame(vadRafRef.current);
//     clearTimeout(silenceTimerRef.current);
//     audioCtxRef.current?.close();
//     try { recognitionRef.current?.stop(); } catch {}
//     isRecognizingRef.current = false;
//     micStreamRef.current?.getTracks().forEach(t => t.stop());
//     if (mediaRecorderRef.current?.state === "recording") mediaRecorderRef.current.stop();
//     speakingRef.current      = false;
//     sessionActiveRef.current = false;
//     setIsSpeaking(false);
//     setSessionActive(false);
//     setInterimText("");
//     setStatus("⏹️ Session ended.");
//   };

//   const resetAll = () => {
//     stopSession();
//     setTranscript("");
//     setAiDecision("");
//     setRecordingURL(null);
//     setRecordingReady(false);
//     transcriptRef.current = "";
//     setStatus("");
//   };

//   const extractDecisions = async () => {
//     if (!transcript.trim()) { setStatus("⚠️ Transcript is empty."); return; }
//     setAiLoading(true);
//     setStatus("🤖 Claude AI extracting decisions...");
//     try {
//       const res = await fetch("https://api.anthropic.com/v1/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           model: "claude-sonnet-4-20250514",
//           max_tokens: 1000,
//           messages: [{
//             role: "user",
//             content: `You are a meeting minutes expert. Extract only the key decisions from the transcript below.

// Rules:
// - Write each decision on a new line with a number (1. 2. 3.)
// - Decisions only, nothing else
// - Reply in the same language as the transcript

// Transcript:
// ${transcript}`
//           }]
//         })
//       });
//       const data = await res.json();
//       const decision = data.content?.map(b => b.text || "").join("") || "No decisions found.";
//       setAiDecision(decision);
//       setStatus("✅ Decisions extracted!");
//     } catch {
//       setStatus("❌ AI error. Please try again.");
//     } finally {
//       setAiLoading(false);
//     }
//   };

//   return (
//     <div className="mr-wrap">
//       {/* VAD ring + controls */}
//       <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 12 }}>
//         <div className={`mr-vad-ring ${isSpeaking ? "speaking" : ""}`}>
//           {isSpeaking ? "🗣️" : sessionActive ? "👂" : "🎙️"}
//         </div>

//         <div style={{ flex: 1 }}>
//           {/* Recording toggle */}
//           <label className="mr-toggle">
//             <input
//               type="checkbox"
//               checked={recordingEnabled}
//               onChange={e => setRecordingEnabled(e.target.checked)}
//               disabled={sessionActive}
//               style={{ display: "none" }}
//             />
//             <div className={`mr-toggle-track ${recordingEnabled ? "on" : ""}`}>
//               <div className="mr-toggle-thumb" />
//             </div>
//             <span style={{ fontSize: 13, fontWeight: 600, color: "#3a6b50" }}>
//               {recordingEnabled
//                 ? <><span className="mr-rec-dot" />Audio Recording ON</>
//                 : "Audio Recording (optional)"}
//             </span>
//           </label>

//           {/* Session buttons */}
//           <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//             {!sessionActive
//               ? <button className="mr-btn mr-btn-green" onClick={startSession}>▶ Start Session</button>
//               : <button className="mr-btn mr-btn-grey"  onClick={stopSession}>⏹ Stop Session</button>
//             }
//             <button className="mr-btn mr-btn-red" onClick={resetAll} disabled={sessionActive}>🔄 Reset</button>
//           </div>
//         </div>
//       </div>

//       {/* Mic Error Banner */}
//       {micError && (
//         <div style={{
//           background: micError === "notfound" ? "#fff8e1" : "#fdecea",
//           border: `1.5px solid ${micError === "notfound" ? "#ffe082" : "#f5c6c2"}`,
//           borderRadius: 10, padding: "12px 14px", marginBottom: 12,
//           fontSize: 13, fontWeight: 500, color: "#3a2a2a", lineHeight: 1.7,
//         }}>
//           {micError === "denied" && (
//             <>
//               <div style={{ fontWeight: 800, color: "#c0392b", marginBottom: 6 }}>🚫 Microphone Permission Denied</div>
//               <div>Browser has blocked the microphone. To fix this:</div>
//               <ol style={{ margin: "6px 0 0 18px", padding: 0 }}>
//                 <li>Click the <b>🔒 Lock icon</b> in the address bar</li>
//                 <li>Open <b>Site settings</b></li>
//                 <li>Set <b>Microphone → Allow</b></li>
//                 <li>Press <b>Refresh</b> (F5)</li>
//               </ol>
//             </>
//           )}
//           {micError === "notfound" && (
//             <>
//               <div style={{ fontWeight: 800, color: "#b07a00", marginBottom: 6 }}>🎤 Microphone Not Found</div>
//               <div>No microphone detected. Please check your device or connect a headset / external mic.</div>
//             </>
//           )}
//           {micError === "other" && (
//             <>
//               <div style={{ fontWeight: 800, color: "#c0392b", marginBottom: 6 }}>❌ Microphone Could Not Start</div>
//               <div>Please refresh the page (F5) and try again.</div>
//             </>
//           )}
//         </div>
//       )}

//       {/* Status */}
//       <div className="mr-status" style={{ marginBottom: 10 }}>{status}</div>

//       {/* Transcript */}
//       <div className="mr-lbl">Live Transcript</div>
//       <div className="mr-transcript-box">
//         {transcript
//           ? <>{transcript}{interimText && <span className="mr-interim"> {interimText}</span>}</>
//           : <span style={{ color: "#b0c8b8" }}>Start a session to see the transcript here...</span>
//         }
//       </div>

//       {/* Recording player + download */}
//       {recordingReady && recordingURL && (
//         <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
//           <span style={{ fontSize: 13, fontWeight: 700, color: "#1a4a2e" }}>🔴 Recording ready:</span>
//           <a href={recordingURL} download="meeting-recording.webm"
//              className="mr-btn mr-btn-teal" style={{ textDecoration: "none" }}>
//             ⬇ Download
//           </a>
//           <audio controls src={recordingURL} style={{ height: 32, flex: 1, minWidth: 120 }} />
//         </div>
//       )}

//       {/* AI extract */}
//       {transcript.trim().length > 10 && (
//         <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
//           <button
//             className="mr-btn mr-btn-blue"
//             onClick={extractDecisions}
//             disabled={aiLoading}
//             style={{ alignSelf: "flex-start" }}
//           >
//             {aiLoading
//               ? <><span className="mr-spinner" /> AI is working...</>
//               : "🤖 Extract Decisions with AI"}
//           </button>

//           {aiDecision && (
//             <>
//               <div className="mr-lbl">AI Extracted Decisions</div>
//               <div className="mr-decision-box">{aiDecision}</div>
//               <button
//                 className="mr-use-btn"
//                 onClick={() => onDecisionExtracted?.(aiDecision)}
//               >
//                 ✅ Save to "Decision In Meeting"
//               </button>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────
// // ProceedingsMeeting (main component)
// // ─────────────────────────────────────────────────────────────
// export default function ProceedingsMeeting() {
//   const [meetings, setMeetings]         = useState([]);
//   const [search, setSearch]             = useState("");
//   const [showModal, setShowModal]       = useState(false);
//   const [toast, setToast]               = useState(null);
//   const [loading, setLoading]           = useState(false);
//   const [editId, setEditId]             = useState(null);
//   const [deleteConfirm, setDeleteConfirm] = useState(null);
//   const [isMobile, setIsMobile]         = useState(window.innerWidth < 640);
//   const [showRecorder, setShowRecorder] = useState(false);
//   const [aiExtractedDecision, setAiExtractedDecision] = useState("");

//   useEffect(() => {
//     const onResize = () => setIsMobile(window.innerWidth < 640);
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

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
//     decisionInMeeting: "",
//   });

//   const showToast = (msg, type = "success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3000);
//   };

//   const formatTime = (time) => {
//     if (!time) return "-";
//     const [hourStr, minute] = time.split(":");
//     let hour = parseInt(hourStr, 10);
//     const ampm = hour >= 12 ? "PM" : "AM";
//     hour = hour % 12 || 12;
//     return `${hour}:${minute} ${ampm}`;
//   };

//   const fetchMeetings = async (searchVal = "") => {
//     try {
//       setLoading(true);
//       const url = searchVal
//         ? `${BASE_URL}/getMeetings?search=${searchVal}`
//         : `${BASE_URL}/getMeetings`;
//       const res  = await fetch(url);
//       const data = await res.json();
//       if (data.success) setMeetings(data.data);
//       else showToast(data.message || "Failed to fetch meetings", "error");
//     } catch {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { fetchMeetings(); }, []);
//   useEffect(() => {
//     const timer = setTimeout(() => fetchMeetings(search), 400);
//     return () => clearTimeout(timer);
//   }, [search]);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const emptyForm = {
//     meetingNumber: "", meetingType: "", meetingDate: "",
//     meetingHour: "", meetingMinute: "", meetingAmpm: "AM",
//     subjectId: "", subjectType: "", subjectName: "", decisionInMeeting: "",
//   };

//   const openCreateModal = () => {
//     setEditId(null);
//     setFormData(emptyForm);
//     setShowRecorder(false);
//     setAiExtractedDecision("");
//     setShowModal(true);
//   };

//   const openEditModal = (m) => {
//     setEditId(m._id);
//     setFormData({
//       meetingNumber: m.meetingNumber,
//       meetingType:   m.meetingType,
//       meetingDate:   m.meetingDate ? m.meetingDate.slice(0, 10) : "",
//       meetingHour:   m.meetingTime ? (() => { const h = parseInt(m.meetingTime.split(":")[0], 10); return String(h % 12 || 12).padStart(2, "0"); })() : "",
//       meetingMinute: m.meetingTime ? m.meetingTime.split(":")[1] : "",
//       meetingAmpm:   m.meetingTime ? (parseInt(m.meetingTime.split(":")[0], 10) >= 12 ? "PM" : "AM") : "AM",
//       subjectId:     m.subjectId || "",
//       subjectType:   m.subjectType || "",
//       subjectName:   m.subjectName || "",
//       decisionInMeeting: m.decisionInMeeting || "",
//     });
//     setShowRecorder(false);
//     setAiExtractedDecision("");
//     setShowModal(true);
//   };

//   const buildTimeString = () => {
//     if (!formData.meetingHour || !formData.meetingMinute) return "";
//     let hour = parseInt(formData.meetingHour, 10);
//     if (formData.meetingAmpm === "PM" && hour !== 12) hour += 12;
//     if (formData.meetingAmpm === "AM" && hour === 12) hour = 0;
//     return `${String(hour).padStart(2, "0")}:${formData.meetingMinute}`;
//   };

//   const handleCreate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/createMeeting`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, meetingTime: buildTimeString(), aiExtractedDecision }),
//       });
//       const data = await res.json();
//       if (data.success) { setShowModal(false); showToast("Meeting created successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to create meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   const handleUpdate = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/updateMeeting/${editId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, meetingTime: buildTimeString(), aiExtractedDecision }),
//       });
//       const data = await res.json();
//       if (data.success) { setShowModal(false); setEditId(null); showToast("Meeting updated successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to update meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   const handleSubmit = () => {
//     if (!formData.meetingNumber || !formData.meetingType) { showToast("Please fill required fields", "error"); return; }
//     editId ? handleUpdate() : handleCreate();
//   };

//   const handleDelete = async (id) => {
//     try {
//       setLoading(true);
//       const res  = await fetch(`${BASE_URL}/deleteMeeting/${id}`, { method: "DELETE" });
//       const data = await res.json();
//       if (data.success) { setDeleteConfirm(null); showToast("Meeting deleted successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to delete meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   const decisionBadge = (val) => {
//     const map = {
//       "Approved":      "approved",
//       "Rejected":      "rejected",
//       "On-Hold":       "on-hold",
//       "Not Conducted": "not-conducted",
//       "Postponed":     "postponed",
//     };
//     const cls = map[val] || "empty";
//     return <span className={`decision-badge ${cls}`}>{val || "-"}</span>;
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap');

//         .pm-wrap * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }

//         .pm-table tbody tr:hover { background: #f4faf6; }

//         .meeting-no-badge {
//           display: inline-block; background: #e6f4ec; color: #1a6640;
//           font-weight: 700; font-size: 12.5px; padding: 3px 10px;
//           border-radius: 6px; letter-spacing: 0.3px;
//         }
//         .subject-type-pill {
//           display: inline-block; background: #eaf3fb; color: #1565a8;
//           font-size: 12px; font-weight: 600; padding: 3px 9px; border-radius: 20px;
//         }
//         .time-badge {
//           display: inline-block; background: #e6f4ec; color: #1a6640;
//           font-size: 12.5px; font-weight: 700; padding: 3px 10px; border-radius: 6px;
//         }

//         .decision-badge {
//           display: inline-block; font-size: 12px; font-weight: 700;
//           padding: 3px 10px; border-radius: 20px; white-space: nowrap;
//         }
//         .decision-badge.approved    { background: #e6f4ec; color: #1a6640; }
//         .decision-badge.rejected    { background: #fdecea; color: #c0392b; }
//         .decision-badge.on-hold     { background: #fff8e1; color: #b07a00; }
//         .decision-badge.not-conducted { background: #f3f3f3; color: #6a6a6a; }
//         .decision-badge.postponed   { background: #eee8ff; color: #6a3ab0; }
//         .decision-badge.empty       { background: #f3f3f3; color: #aaa; }

//         .pm-table th {
//           font-size: 13px; font-weight: 700; color: #3a6b50;
//           padding: 11px 14px; text-align: left; background: #f0f7f2;
//           border-bottom: 2px solid #d6ede0; white-space: nowrap;
//         }
//         .pm-table td {
//           font-size: 13.5px; font-weight: 500; color: #2d3d35;
//           padding: 11px 14px; border-bottom: 1px solid #eef4ee; vertical-align: middle;
//         }
//         .pm-table td:first-child { color: #8aaa95; font-weight: 600; font-size: 13px; }

//         .pm-search {
//           font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 500;
//           color: #2d3d35; border: 1.5px solid #c8e0cc; border-radius: 8px;
//           padding: 8px 13px; outline: none; transition: border-color 0.2s;
//         }
//         .pm-search:focus { border-color: #1a7a4a; }

//         .pm-input {
//           font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 500;
//           width: 100%; padding: 10px 12px; border-radius: 8px;
//           border: 1.5px solid #c8e0cc; outline: none; color: #2d3d35;
//           transition: border-color 0.2s;
//         }
//         .pm-input:focus { border-color: #1a7a4a; }

//         .pm-label {
//           font-family: 'Nunito Sans', sans-serif; font-size: 12px; font-weight: 700;
//           color: #5a7a6a; margin-bottom: 4px; display: block;
//         }

//         .pm-btn-primary {
//           font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 700;
//           background: #1a7a4a; color: #fff; border: none; border-radius: 8px;
//           padding: 10px 20px; cursor: pointer; letter-spacing: 0.2px; transition: background 0.15s;
//         }
//         .pm-btn-primary:hover { background: #155e39; }
//         .pm-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

//         .pm-btn-cancel {
//           font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 600;
//           background: #eef2ee; color: #4a6a5a; border: none; border-radius: 8px;
//           padding: 10px 20px; cursor: pointer;
//         }
//         .pm-btn-cancel:hover { background: #e0e8e2; }

//         .pm-btn-edit {
//           font-family: 'Nunito Sans', sans-serif; font-size: 12.5px; font-weight: 600;
//           background: #e8f4fd; color: #1a6aaa; border: none; border-radius: 6px;
//           padding: 5px 11px; cursor: pointer;
//         }
//         .pm-btn-edit:hover { background: #d0e8f8; }

//         .pm-btn-delete {
//           font-family: 'Nunito Sans', sans-serif; font-size: 12.5px; font-weight: 600;
//           background: #fdecea; color: #c0392b; border: none; border-radius: 6px;
//           padding: 5px 11px; cursor: pointer;
//         }
//         .pm-btn-delete:hover { background: #fad4d0; }

//         .pm-card {
//           border: 1px solid #e0ede5; border-radius: 10px;
//           padding: 13px; background: #f9fdf9; margin-bottom: 10px;
//         }
//         .pm-card-row {
//           display: flex; justify-content: space-between; font-size: 13px;
//           font-weight: 500; padding: 4px 0; border-bottom: 1px solid #eef4ee; color: #2d3d35;
//         }
//         .pm-card-label { color: #5a7a6a; font-weight: 700; min-width: 110px; font-size: 12.5px; }

//         .pm-title { font-size: 22px; font-weight: 800; color: #1a4a2e; margin: 0 0 3px 0; letter-spacing: -0.3px; }
//         .pm-subtitle { font-size: 13px; font-weight: 500; color: #7a9a88; margin: 0 0 14px 0; }
//         .pm-section-title { font-size: 15px; font-weight: 800; color: #1a4a2e; margin: 0; }
//         .pm-modal-title { font-size: 17px; font-weight: 800; color: #1a4a2e; margin: 0; }
//         .pm-delete-title { font-size: 17px; font-weight: 700; color: #1a4a2e; margin-bottom: 6px; }
//         .pm-delete-sub { font-size: 13.5px; color: #8a9a90; margin-bottom: 20px; font-weight: 500; }

//         /* ── MeetingRecorder styles ── */
//         .mr-wrap * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }

//         .mr-vad-ring {
//           width: 62px; height: 62px; border-radius: 50%; border: 3px solid #d6ede0;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 24px; background: #f7fbf8; flex-shrink: 0;
//           transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
//         }
//         .mr-vad-ring.speaking {
//           border-color: #1a7a4a; background: #e6f4ec;
//           animation: mrRingPulse 1s ease-in-out infinite;
//         }
//         @keyframes mrRingPulse {
//           0%, 100% { box-shadow: 0 0 0 4px rgba(26,122,74,0.18), 0 0 0 10px rgba(26,122,74,0.07); }
//           50%       { box-shadow: 0 0 0 9px rgba(26,122,74,0.22), 0 0 0 18px rgba(26,122,74,0.04); }
//         }

//         .mr-rec-dot {
//           display: inline-block; width: 8px; height: 8px; background: #e53935;
//           border-radius: 50%; animation: mrRecPulse 1s infinite; margin-right: 5px; vertical-align: middle;
//         }
//         @keyframes mrRecPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }

//         .mr-transcript-box {
//           background: #f7fbf8; border: 1.5px solid #d6ede0; border-radius: 10px;
//           padding: 12px; min-height: 80px; max-height: 150px; overflow-y: auto;
//           font-size: 13.5px; font-weight: 500; color: #2d3d35; line-height: 1.75;
//           white-space: pre-wrap;
//         }
//         .mr-interim { color: #9ab5a0; font-style: italic; }

//         .mr-decision-box {
//           background: #eaf4ff; border: 1.5px solid #b3d4f0; border-radius: 10px;
//           padding: 12px; font-size: 13.5px; font-weight: 500;
//           color: #1a3a5a; line-height: 1.75; white-space: pre-wrap;
//         }

//         .mr-btn {
//           font-family: 'Nunito Sans', sans-serif; font-weight: 700; font-size: 13px;
//           border: none; border-radius: 8px; padding: 8px 16px;
//           cursor: pointer; display: inline-flex; align-items: center; gap: 5px;
//           transition: background 0.15s, opacity 0.15s;
//         }
//         .mr-btn:disabled { opacity: 0.45; cursor: not-allowed; }
//         .mr-btn-green { background: #1a7a4a; color: #fff; }
//         .mr-btn-green:hover:not(:disabled) { background: #155e39; }
//         .mr-btn-grey  { background: #eef2ee; color: #4a6a5a; }
//         .mr-btn-grey:hover:not(:disabled)  { background: #e0e8e2; }
//         .mr-btn-blue  { background: #e8f4fd; color: #1565a8; }
//         .mr-btn-blue:hover:not(:disabled)  { background: #cce4f8; }
//         .mr-btn-red   { background: #fdecea; color: #c0392b; }
//         .mr-btn-red:hover:not(:disabled)   { background: #fbd0cc; }
//         .mr-btn-teal  { background: #e0f7f4; color: #00695c; }
//         .mr-btn-teal:hover:not(:disabled)  { background: #b2ebf2; }

//         .mr-toggle {
//           display: inline-flex; align-items: center; gap: 8px;
//           background: #f0f7f2; border-radius: 8px; padding: 7px 12px;
//           cursor: pointer; user-select: none; margin-bottom: 8px;
//         }
//         .mr-toggle-track {
//           width: 36px; height: 20px; border-radius: 20px; background: #c8d8c8;
//           position: relative; transition: background 0.2s; flex-shrink: 0;
//         }
//         .mr-toggle-track.on { background: #1a7a4a; }
//         .mr-toggle-thumb {
//           width: 16px; height: 16px; border-radius: 50%; background: #fff;
//           position: absolute; top: 2px; left: 2px;
//           transition: transform 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.2);
//         }
//         .mr-toggle-track.on .mr-toggle-thumb { transform: translateX(16px); }

//         .mr-lbl {
//           font-size: 11.5px; font-weight: 800; color: #5a7a6a;
//           text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 5px;
//         }
//         .mr-status { font-size: 12px; font-weight: 600; color: #7a9a88; min-height: 16px; }

//         .mr-spinner {
//           display: inline-block; width: 13px; height: 13px;
//           border: 2px solid #b3d4f0; border-top-color: #1565a8;
//           border-radius: 50%; animation: mrSpin 0.7s linear infinite;
//         }
//         @keyframes mrSpin { to { transform: rotate(360deg); } }

//         .mr-use-btn {
//           font-family: 'Nunito Sans', sans-serif; font-weight: 700; font-size: 13px;
//           background: #1a7a4a; color: #fff; border: none; border-radius: 7px;
//           padding: 7px 16px; cursor: pointer; margin-top: 8px; display: inline-block;
//         }
//         .mr-use-btn:hover { background: #155e39; }

//         /* Recorder toggle button in Edit Modal */
//         .pm-recorder-toggle {
//           display: flex; align-items: center; gap: 8px;
//           font-family: 'Nunito Sans', sans-serif; font-size: 13px; font-weight: 700;
//           background: #f0f7f2; color: #1a5a38; border: 1.5px solid #c8e0cc;
//           border-radius: 8px; padding: 8px 14px; cursor: pointer;
//           transition: background 0.15s, border-color 0.15s;
//         }
//         .pm-recorder-toggle:hover { background: #e4f2e8; border-color: #1a7a4a; }
//         .pm-recorder-toggle.active { background: #e6f4ec; border-color: #1a7a4a; color: #1a4a2e; }

//         /* Recorder section in modal */
//         .pm-recorder-section {
//           border: 1.5px solid #d6ede0; border-radius: 10px;
//           padding: 14px; background: #f7fbf8; margin-top: 4px;
//           grid-column: span 2;
//         }
//       `}</style>

//       <div className="pm-wrap" style={{ background: "#f0f4f0", minHeight: "100vh", padding: isMobile ? 12 : 24 }}>

//         {/* Toast */}
//         {toast && (
//           <div style={{
//             position: "fixed", top: 16, right: 16, left: isMobile ? 16 : "auto",
//             background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
//             color: "#fff", padding: "10px 18px", borderRadius: 8, fontWeight: 700,
//             fontSize: 13.5, zIndex: 9999, fontFamily: "'Nunito Sans', sans-serif",
//           }}>
//             {toast.msg}
//           </div>
//         )}

//         {/* Header */}
//         <div style={{ marginBottom: 16 }}>
//           <h1 className="pm-title">Meeting Proceedings</h1>
//           <p className="pm-subtitle">Sabha Kamkaj manage करा</p>
//           <button className="pm-btn-primary" onClick={openCreateModal}>+ Create Meeting</button>
//         </div>

//         {/* Table card */}
//         <div style={{ background: "#fff", borderRadius: 12, padding: isMobile ? 12 : 20, overflowX: "auto" }}>
//           <div style={{
//             display: "flex", flexDirection: isMobile ? "column" : "row",
//             justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center",
//             gap: 10, marginBottom: 15,
//           }}>
//             <h3 className="pm-section-title">Records ({meetings.length})</h3>
//             <input
//               className="pm-search"
//               placeholder="Search meeting no..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               style={{ width: isMobile ? "100%" : "auto" }}
//             />
//           </div>

//           {/* Mobile cards */}
//           {isMobile ? (
//             <div>
//               {loading ? (
//                 <div style={{ textAlign: "center", padding: 20, color: "#8a9a90", fontFamily: "'Nunito Sans', sans-serif" }}>Loading...</div>
//               ) : meetings.length === 0 ? (
//                 <div style={{ textAlign: "center", padding: 20, fontFamily: "'Nunito Sans', sans-serif", color: "#8a9a90" }}>No records found</div>
//               ) : (
//                 meetings.map((m, i) => (
//                   <div className="pm-card" key={m._id}>
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
//                       <span style={{ fontWeight: 800, color: "#1a4a2e", fontSize: 14, fontFamily: "'Nunito Sans', sans-serif" }}>
//                         #{i + 1} — <span className="meeting-no-badge">{m.meetingNumber}</span>
//                       </span>
//                       <div style={{ display: "flex", gap: 6 }}>
//                         <button className="pm-btn-edit" onClick={() => openEditModal(m)}>✏️</button>
//                         <button className="pm-btn-delete" onClick={() => setDeleteConfirm(m._id)}>🗑️</button>
//                       </div>
//                     </div>
//                     <div className="pm-card-row"><span className="pm-card-label">Type</span><span>{m.meetingType || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Date</span><span>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Time</span><span className="time-badge">{formatTime(m.meetingTime)}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Subject ID</span><span>{m.subjectId || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Subject Type</span><span className="subject-type-pill">{m.subjectType || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Subject Name</span><span>{m.subjectName || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Decision</span><span>{decisionBadge(m.decisionInMeeting)}</span></div>
//                   </div>
//                 ))
//               )}
//             </div>
//           ) : (
//             /* Desktop table */
//             <table className="pm-table" style={{ width: "100%", borderCollapse: "collapse" }}>
//               <thead>
//                 <tr>
//                   {["#", "Meeting No", "Type", "Date", "Time", "Subject ID", "Subject Type", "Subject Name", "Decision In Meeting", "Actions"].map(h => (
//                     <th key={h}>{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr><td colSpan={10} style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>Loading...</td></tr>
//                 ) : meetings.length === 0 ? (
//                   <tr><td colSpan={10} style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>No records found</td></tr>
//                 ) : (
//                   meetings.map((m, i) => (
//                     <tr key={m._id}>
//                       <td>{i + 1}</td>
//                       <td><span className="meeting-no-badge">{m.meetingNumber}</span></td>
//                       <td>{m.meetingType}</td>
//                       <td>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</td>
//                       <td><span className="time-badge">{formatTime(m.meetingTime)}</span></td>
//                       <td>{m.subjectId}</td>
//                       <td><span className="subject-type-pill">{m.subjectType || "-"}</span></td>
//                       <td>{m.subjectName}</td>
//                       <td>{decisionBadge(m.decisionInMeeting)}</td>
//                       <td>
//                         <div style={{ display: "flex", gap: 6 }}>
//                           <button className="pm-btn-edit" onClick={() => openEditModal(m)}>✏️ Edit</button>
//                           <button className="pm-btn-delete" onClick={() => setDeleteConfirm(m._id)}>🗑️ Delete</button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>

//         {/* Create / Edit Modal */}
//         {showModal && (
//           <div style={modalOverlay}>
//             <div style={{
//               background: "#fff", borderRadius: 12, padding: isMobile ? 16 : 25,
//               width: isMobile ? "95%" : "100%", maxWidth: 560,
//               maxHeight: "90vh", overflowY: "auto",
//             }}>
//               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
//                 <h3 className="pm-modal-title">{editId ? "Edit Meeting" : "Create Meeting"}</h3>
//                 <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "#8a9a90" }}>✕</button>
//               </div>

//               <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Meeting Number</label>
//                   <input className="pm-input" name="meetingNumber" placeholder="Meeting Number" value={formData.meetingNumber} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Type Of Meeting</label>
//                   <select className="pm-input" name="meetingType" value={formData.meetingType} onChange={handleChange}>
//                     <option value="">Select Type</option>
//                     <option>General Body</option>
//                     <option>Standing Committee</option>
//                   </select>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Meeting Date</label>
//                   <input className="pm-input" name="meetingDate" type="date" value={formData.meetingDate} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Meeting Time</label>
//                   <div style={{ display: "flex", gap: 6 }}>
//                     <select className="pm-input" name="meetingHour" value={formData.meetingHour} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
//                       <option value="">HH</option>
//                       {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")).map(h => (
//                         <option key={h} value={h}>{h}</option>
//                       ))}
//                     </select>
//                     <select className="pm-input" name="meetingMinute" value={formData.meetingMinute} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
//                       <option value="">MM</option>
//                       {["00","05","10","15","20","25","30","35","40","45","50","55"].map(m => (
//                         <option key={m} value={m}>{m}</option>
//                       ))}
//                     </select>
//                     <select className="pm-input" name="meetingAmpm" value={formData.meetingAmpm} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
//                       <option value="AM">AM</option>
//                       <option value="PM">PM</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Subject ID</label>
//                   <input className="pm-input" name="subjectId" placeholder="Subject ID" value={formData.subjectId} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Subject Type</label>
//                   <select className="pm-input" name="subjectType" value={formData.subjectType} onChange={handleChange}>
//                     <option value="">Select Subject Type</option>
//                     <option>General</option>
//                     <option>Administrative and Financial Approval</option>
//                     <option>Contract Approval</option>
//                   </select>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
//                   <label className="pm-label">Subject Name</label>
//                   <input className="pm-input" name="subjectName" placeholder="Subject Name" value={formData.subjectName} onChange={handleChange} />
//                 </div>

//                 {/* Decision In Meeting — only in Edit Modal */}
//                 {editId && (
//                   <>
//                     <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
//                       <label className="pm-label">Decision In Meeting</label>
//                       <select
//                         className="pm-input"
//                         name="decisionInMeeting"
//                         value={formData.decisionInMeeting}
//                         onChange={handleChange}
//                       >
//                         <option value="">Select Decision</option>
//                         <option value="Approved">Approved</option>
//                         <option value="Rejected">Rejected</option>
//                         <option value="On-Hold">On-Hold</option>
//                         <option value="Not Conducted">Not Conducted</option>
//                         <option value="Postponed">Postponed</option>
//                       </select>
//                     </div>

//                     {/* Meeting Recorder toggle */}
//                     <div style={{ gridColumn: isMobile ? "1" : "span 2" }}>
//                       <button
//                         className={`pm-recorder-toggle ${showRecorder ? "active" : ""}`}
//                         onClick={() => setShowRecorder(v => !v)}
//                         type="button"
//                       >
//                         🎙️ {showRecorder ? "Hide Meeting Recorder" : "Record Meeting & Auto-Extract Decisions"}
//                       </button>
//                     </div>

//                     {/* Recorder section (collapsible) */}
//                     {showRecorder && (
//                       <div className="pm-recorder-section" style={{ gridColumn: isMobile ? "1" : "span 2" }}>
//                         <MeetingRecorder
//                           onDecisionExtracted={(text) => {
//                             setAiExtractedDecision(text);
//                             showToast("AI decisions saved to payload! ✅");
//                           }}
//                           onTranscriptUpdate={() => {}}
//                         />
//                         {/* Show saved AI decision preview */}
//                         {aiExtractedDecision && (
//                           <div style={{
//                             marginTop: 10, background: "#eaf4ff", border: "1.5px solid #b3d4f0",
//                             borderRadius: 8, padding: "10px 12px",
//                             fontSize: 13, fontWeight: 500, color: "#1a3a5a", lineHeight: 1.7,
//                             whiteSpace: "pre-wrap"
//                           }}>
//                             <div style={{ fontWeight: 800, color: "#1565a8", marginBottom: 4, fontSize: 11.5, textTransform: "uppercase", letterSpacing: "0.5px" }}>
//                               ✅ AI Extracted Decision (will be saved)
//                             </div>
//                             {aiExtractedDecision}
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </>
//                 )}

//               </div>

//               <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
//                 <button className="pm-btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
//                 <button className="pm-btn-primary" onClick={handleSubmit} disabled={loading}>
//                   {loading ? "Saving..." : editId ? "Update" : "Save"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Delete Confirm Modal */}
//         {deleteConfirm && (
//           <div style={modalOverlay}>
//             <div style={{
//               background: "#fff", padding: 28, borderRadius: 12,
//               maxWidth: 380, width: isMobile ? "90%" : "100%", textAlign: "center",
//             }}>
//               <p className="pm-delete-title">Delete Meeting?</p>
//               <p className="pm-delete-sub">He record permanently delete होईल. Sure aahes ka?</p>
//               <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
//                 <button className="pm-btn-cancel" onClick={() => setDeleteConfirm(null)}>Cancel</button>
//                 <button
//                   className="pm-btn-primary"
//                   style={{ background: "#c0392b" }}
//                   onClick={() => handleDelete(deleteConfirm)}
//                   disabled={loading}
//                 >
//                   {loading ? "Deleting..." : "Yes, Delete"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
//     </>
//   );
// }

// const modalOverlay = {
//   position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
//   display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000,
//   padding: 16,
// };




// import { useState, useEffect, useRef } from "react";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// // ─────────────────────────────────────────────────────────────
// // MeetingRecorder (inline — no separate file needed)
// // ─────────────────────────────────────────────────────────────
// function MeetingRecorder({ onDecisionExtracted, onTranscriptUpdate, onRecordingReady }) {
//   const [sessionActive, setSessionActive]       = useState(false);
//   const [isSpeaking, setIsSpeaking]             = useState(false);
//   const [recordingEnabled, setRecordingEnabled] = useState(false);
//   const [transcript, setTranscript]             = useState("");
//   const [interimText, setInterimText]           = useState("");
//   const [aiDecision, setAiDecision]             = useState("");
//   const [aiLoading, setAiLoading]               = useState(false);
//   const [status, setStatus]                     = useState("");
//   const [recordingReady, setRecordingReady]     = useState(false);
//   const [recordingURL, setRecordingURL]         = useState(null);
//   const [micError, setMicError]                 = useState(null);

//   const audioCtxRef      = useRef(null);
//   const analyserRef      = useRef(null);
//   const micStreamRef     = useRef(null);
//   const mediaRecorderRef = useRef(null);
//   const recordedChunks   = useRef([]);
//   const vadRafRef        = useRef(null);
//   const silenceTimerRef  = useRef(null);
//   const recognitionRef   = useRef(null);
//   const transcriptRef    = useRef("");
//   const isRecognizingRef = useRef(false);
//   const speakingRef      = useRef(false);
//   const sessionActiveRef = useRef(false);

//   const SILENCE_DB    = -42;
//   const SILENCE_DELAY = 2000;

//   const buildRecognition = () => {
//     const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SR) return null;
//     const rec = new SR();
//     rec.continuous     = true;
//     rec.interimResults = true;
//     rec.lang           = "hi-IN";

//     rec.onresult = (e) => {
//       let final = transcriptRef.current;
//       let interim = "";
//       for (let i = e.resultIndex; i < e.results.length; i++) {
//         if (e.results[i].isFinal) final += e.results[i][0].transcript + " ";
//         else interim = e.results[i][0].transcript;
//       }
//       transcriptRef.current = final;
//       setTranscript(final);
//       setInterimText(interim);
//       onTranscriptUpdate?.(final);
//     };

//     rec.onend = () => {
//       isRecognizingRef.current = false;
//       setInterimText("");
//       if (speakingRef.current && sessionActiveRef.current) {
//         try { rec.start(); isRecognizingRef.current = true; } catch {}
//       }
//     };

//     rec.onerror = (e) => {
//       if (["no-speech", "aborted", "network"].includes(e.error)) return;
//       setStatus(`⚠️ ${e.error}`);
//       isRecognizingRef.current = false;
//     };

//     return rec;
//   };

//   const startVAD = (stream) => {
//     const ctx = new (window.AudioContext || window.webkitAudioContext)();
//     const analyser = ctx.createAnalyser();
//     analyser.fftSize = 512;
//     ctx.createMediaStreamSource(stream).connect(analyser);
//     audioCtxRef.current  = ctx;
//     analyserRef.current  = analyser;

//     const data = new Uint8Array(analyser.frequencyBinCount);
//     const loop = () => {
//       vadRafRef.current = requestAnimationFrame(loop);
//       analyser.getByteFrequencyData(data);
//       const avg = data.reduce((a, b) => a + b, 0) / data.length;
//       const db  = avg === 0 ? -Infinity : 20 * Math.log10(avg / 255);
//       const speaking = db > SILENCE_DB;

//       if (speaking !== speakingRef.current) {
//         speakingRef.current = speaking;
//         setIsSpeaking(speaking);

//         if (speaking) {
//           clearTimeout(silenceTimerRef.current);
//           setStatus("🗣️ Speaking — transcribing...");
//           if (!isRecognizingRef.current && recognitionRef.current) {
//             try { recognitionRef.current.start(); isRecognizingRef.current = true; } catch {}
//           }
//         } else {
//           setStatus("🤫 Silence detected... pausing in 2s");
//           silenceTimerRef.current = setTimeout(() => {
//             if (!speakingRef.current && isRecognizingRef.current) {
//               try { recognitionRef.current?.stop(); } catch {}
//               isRecognizingRef.current = false;
//               setStatus("👂 Waiting for someone to speak...");
//             }
//           }, SILENCE_DELAY);
//         }
//       }
//     };
//     loop();
//   };

//   const startSession = async () => {
//     const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SR) { setStatus("❌ Please use Chrome browser."); return; }
//     setMicError(null);
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       micStreamRef.current = stream;

//       const rec = buildRecognition();
//       recognitionRef.current = rec;
//       startVAD(stream);

//       if (recordingEnabled) {
//         recordedChunks.current = [];
//         setRecordingReady(false);
//         setRecordingURL(null);
//         const mr = new MediaRecorder(stream);
//         mr.ondataavailable = (e) => { if (e.data.size > 0) recordedChunks.current.push(e.data); };
//         mr.onstop = () => {
//           const blob = new Blob(recordedChunks.current, { type: "audio/webm" });
//           const url = URL.createObjectURL(blob);
//           setRecordingURL(url);
//           setRecordingReady(true);
//           onRecordingReady?.(url);  // ← auto-save URL to parent
//         };
//         mr.start();
//         mediaRecorderRef.current = mr;
//       }

//       sessionActiveRef.current = true;
//       setSessionActive(true);
//       setStatus("👂 Waiting for someone to speak...");
//     } catch (err) {
//       const isDenied   = err?.name === "NotAllowedError" || err?.name === "PermissionDeniedError";
//       const isNotFound = err?.name === "NotFoundError";
//       setMicError(isNotFound ? "notfound" : isDenied ? "denied" : "other");
//       setStatus("");
//     }
//   };

//   const stopSession = () => {
//     cancelAnimationFrame(vadRafRef.current);
//     clearTimeout(silenceTimerRef.current);
//     audioCtxRef.current?.close();
//     try { recognitionRef.current?.stop(); } catch {}
//     isRecognizingRef.current = false;
//     micStreamRef.current?.getTracks().forEach(t => t.stop());
//     if (mediaRecorderRef.current?.state === "recording") mediaRecorderRef.current.stop();
//     speakingRef.current      = false;
//     sessionActiveRef.current = false;
//     setIsSpeaking(false);
//     setSessionActive(false);
//     setInterimText("");
//     setStatus("⏹️ Session ended.");
//   };

//   const resetAll = () => {
//     stopSession();
//     setTranscript("");
//     setAiDecision("");
//     setRecordingURL(null);
//     setRecordingReady(false);
//     transcriptRef.current = "";
//     setStatus("");
//   };

//   const extractDecisions = async () => {
//     if (!transcript.trim()) { setStatus("⚠️ Transcript is empty."); return; }
//     setAiLoading(true);
//     setStatus("🤖 Claude AI extracting decisions...");
//     try {
//       const res = await fetch("https://api.anthropic.com/v1/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           model: "claude-sonnet-4-20250514",
//           max_tokens: 1000,
//           messages: [{
//             role: "user",
//             content: `You are a meeting minutes expert. Extract only the key decisions from the transcript below.

// Rules:
// - Write each decision on a new line with a number (1. 2. 3.)
// - Decisions only, nothing else
// - Reply in the same language as the transcript

// Transcript:
// ${transcript}`
//           }]
//         })
//       });
//       const data = await res.json();
//       const decision = data.content?.map(b => b.text || "").join("") || "No decisions found.";
//       setAiDecision(decision);
//       setStatus("✅ Decisions extracted!");
//     } catch {
//       setStatus("❌ AI error. Please try again.");
//     } finally {
//       setAiLoading(false);
//     }
//   };

//   return (
//     <div className="mr-wrap">
//       {/* VAD ring + controls */}
//       <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 12 }}>
//         <div className={`mr-vad-ring ${isSpeaking ? "speaking" : ""}`}>
//           {isSpeaking ? "🗣️" : sessionActive ? "👂" : "🎙️"}
//         </div>

//         <div style={{ flex: 1 }}>
//           {/* Recording toggle */}
//           <label className="mr-toggle">
//             <input
//               type="checkbox"
//               checked={recordingEnabled}
//               onChange={e => setRecordingEnabled(e.target.checked)}
//               disabled={sessionActive}
//               style={{ display: "none" }}
//             />
//             <div className={`mr-toggle-track ${recordingEnabled ? "on" : ""}`}>
//               <div className="mr-toggle-thumb" />
//             </div>
//             <span style={{ fontSize: 13, fontWeight: 600, color: "#3a6b50" }}>
//               {recordingEnabled
//                 ? <><span className="mr-rec-dot" />Audio Recording ON</>
//                 : "Audio Recording (optional)"}
//             </span>
//           </label>

//           {/* Session buttons */}
//           <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//             {!sessionActive
//               ? <button className="mr-btn mr-btn-green" onClick={startSession}>▶ Start Session</button>
//               : <button className="mr-btn mr-btn-grey"  onClick={stopSession}>⏹ Stop Session</button>
//             }
//             <button className="mr-btn mr-btn-red" onClick={resetAll} disabled={sessionActive}>🔄 Reset</button>
//           </div>
//         </div>
//       </div>

//       {/* Mic Error Banner */}
//       {micError && (
//         <div style={{
//           background: micError === "notfound" ? "#fff8e1" : "#fdecea",
//           border: `1.5px solid ${micError === "notfound" ? "#ffe082" : "#f5c6c2"}`,
//           borderRadius: 10, padding: "12px 14px", marginBottom: 12,
//           fontSize: 13, fontWeight: 500, color: "#3a2a2a", lineHeight: 1.7,
//         }}>
//           {micError === "denied" && (
//             <>
//               <div style={{ fontWeight: 800, color: "#c0392b", marginBottom: 6 }}>🚫 Microphone Permission Denied</div>
//               <div>Browser has blocked the microphone. To fix this:</div>
//               <ol style={{ margin: "6px 0 0 18px", padding: 0 }}>
//                 <li>Click the <b>🔒 Lock icon</b> in the address bar</li>
//                 <li>Open <b>Site settings</b></li>
//                 <li>Set <b>Microphone → Allow</b></li>
//                 <li>Press <b>Refresh</b> (F5)</li>
//               </ol>
//             </>
//           )}
//           {micError === "notfound" && (
//             <>
//               <div style={{ fontWeight: 800, color: "#b07a00", marginBottom: 6 }}>🎤 Microphone Not Found</div>
//               <div>No microphone detected. Please check your device or connect a headset / external mic.</div>
//             </>
//           )}
//           {micError === "other" && (
//             <>
//               <div style={{ fontWeight: 800, color: "#c0392b", marginBottom: 6 }}>❌ Microphone Could Not Start</div>
//               <div>Please refresh the page (F5) and try again.</div>
//             </>
//           )}
//         </div>
//       )}

//       {/* Status */}
//       <div className="mr-status" style={{ marginBottom: 10 }}>{status}</div>

//       {/* Transcript */}
//       <div className="mr-lbl">Live Transcript</div>
//       <div className="mr-transcript-box">
//         {transcript
//           ? <>{transcript}{interimText && <span className="mr-interim"> {interimText}</span>}</>
//           : <span style={{ color: "#b0c8b8" }}>Start a session to see the transcript here...</span>
//         }
//       </div>

//       {/* Recording player + download */}
//       {recordingReady && recordingURL && (
//         <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
//           <span style={{ fontSize: 13, fontWeight: 700, color: "#1a4a2e" }}>🔴 Recording ready:</span>
//           <a href={recordingURL} download="meeting-recording.webm"
//              className="mr-btn mr-btn-teal" style={{ textDecoration: "none" }}>
//             ⬇ Download
//           </a>
//           <audio controls src={recordingURL} style={{ height: 32, flex: 1, minWidth: 120 }} />
//         </div>
//       )}

//       {/* AI extract */}
//       {transcript.trim().length > 10 && (
//         <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
//           <button
//             className="mr-btn mr-btn-blue"
//             onClick={extractDecisions}
//             disabled={aiLoading}
//             style={{ alignSelf: "flex-start" }}
//           >
//             {aiLoading
//               ? <><span className="mr-spinner" /> AI is working...</>
//               : "🤖 Extract Decisions with AI"}
//           </button>

//           {aiDecision && (
//             <>
//               <div className="mr-lbl">AI Extracted Decisions</div>
//               <div className="mr-decision-box">{aiDecision}</div>
//               <button
//                 className="mr-use-btn"
//                 onClick={() => onDecisionExtracted?.(aiDecision)}
//               >
//                 ✅ Save to "Decision In Meeting"
//               </button>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────
// // ProceedingsMeeting (main component)
// // ─────────────────────────────────────────────────────────────
// export default function ProceedingsMeeting() {
//   const [meetings, setMeetings]         = useState([]);
//   const [search, setSearch]             = useState("");
//   const [showModal, setShowModal]       = useState(false);
//   const [toast, setToast]               = useState(null);
//   const [loading, setLoading]           = useState(false);
//   const [editId, setEditId]             = useState(null);
//   const [deleteConfirm, setDeleteConfirm] = useState(null);
//   const [isMobile, setIsMobile]         = useState(window.innerWidth < 640);
//   const [showRecorder, setShowRecorder] = useState(false);
//   const [aiExtractedDecision, setAiExtractedDecision] = useState("");
//   const [meetingRecording, setMeetingRecording]       = useState(null);  // auto from VAD recorder
//   const [manualRecordingFile, setManualRecordingFile] = useState(null);  // manual upload

//   useEffect(() => {
//     const onResize = () => setIsMobile(window.innerWidth < 640);
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

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
//     decisionInMeeting: "",
//   });

//   const showToast = (msg, type = "success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3000);
//   };

//   const formatTime = (time) => {
//     if (!time) return "-";
//     const [hourStr, minute] = time.split(":");
//     let hour = parseInt(hourStr, 10);
//     const ampm = hour >= 12 ? "PM" : "AM";
//     hour = hour % 12 || 12;
//     return `${hour}:${minute} ${ampm}`;
//   };

//   const fetchMeetings = async (searchVal = "") => {
//     try {
//       setLoading(true);
//       const url = searchVal
//         ? `${BASE_URL}/getMeetings?search=${searchVal}`
//         : `${BASE_URL}/getMeetings`;
//       const res  = await fetch(url);
//       const data = await res.json();
//       if (data.success) setMeetings(data.data);
//       else showToast(data.message || "Failed to fetch meetings", "error");
//     } catch {
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { fetchMeetings(); }, []);
//   useEffect(() => {
//     const timer = setTimeout(() => fetchMeetings(search), 400);
//     return () => clearTimeout(timer);
//   }, [search]);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const emptyForm = {
//     meetingNumber: "", meetingType: "", meetingDate: "",
//     meetingHour: "", meetingMinute: "", meetingAmpm: "AM",
//     subjectId: "", subjectType: "", subjectName: "", decisionInMeeting: "",
//   };

//   const openCreateModal = () => {
//     setEditId(null);
//     setFormData(emptyForm);
//     setShowRecorder(false);
//     setAiExtractedDecision("");
//     setMeetingRecording(null);
//     setManualRecordingFile(null);
//     setShowModal(true);
//   };

//   const openEditModal = (m) => {
//     setEditId(m._id);
//     setFormData({
//       meetingNumber: m.meetingNumber,
//       meetingType:   m.meetingType,
//       meetingDate:   m.meetingDate ? m.meetingDate.slice(0, 10) : "",
//       meetingHour:   m.meetingTime ? (() => { const h = parseInt(m.meetingTime.split(":")[0], 10); return String(h % 12 || 12).padStart(2, "0"); })() : "",
//       meetingMinute: m.meetingTime ? m.meetingTime.split(":")[1] : "",
//       meetingAmpm:   m.meetingTime ? (parseInt(m.meetingTime.split(":")[0], 10) >= 12 ? "PM" : "AM") : "AM",
//       subjectId:     m.subjectId || "",
//       subjectType:   m.subjectType || "",
//       subjectName:   m.subjectName || "",
//       decisionInMeeting: m.decisionInMeeting || "",
//     });
//     setShowRecorder(false);
//     setAiExtractedDecision("");
//     setMeetingRecording(null);
//     setManualRecordingFile(null);
//     setShowModal(true);
//   };

//   const buildTimeString = () => {
//     if (!formData.meetingHour || !formData.meetingMinute) return "";
//     let hour = parseInt(formData.meetingHour, 10);
//     if (formData.meetingAmpm === "PM" && hour !== 12) hour += 12;
//     if (formData.meetingAmpm === "AM" && hour === 12) hour = 0;
//     return `${String(hour).padStart(2, "0")}:${formData.meetingMinute}`;
//   };

//   const handleCreate = async () => {
//     try {
//       setLoading(true);
//       const recordingValue = manualRecordingFile ? manualRecordingFile.name : (meetingRecording || null);
//       const res = await fetch(`${BASE_URL}/createMeeting`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, meetingTime: buildTimeString(), aiExtractedDecision, meetingRecording: recordingValue }),
//       });
//       const data = await res.json();
//       if (data.success) { setShowModal(false); showToast("Meeting created successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to create meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   const handleUpdate = async () => {
//     try {
//       setLoading(true);
//       const recordingValue = manualRecordingFile ? manualRecordingFile.name : (meetingRecording || null);
//       const res = await fetch(`${BASE_URL}/updateMeeting/${editId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, meetingTime: buildTimeString(), aiExtractedDecision, meetingRecording: recordingValue }),
//       });
//       const data = await res.json();
//       if (data.success) { setShowModal(false); setEditId(null); showToast("Meeting updated successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to update meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   const handleSubmit = () => {
//     if (!formData.meetingNumber || !formData.meetingType) { showToast("Please fill required fields", "error"); return; }
//     editId ? handleUpdate() : handleCreate();
//   };

//   const handleDelete = async (id) => {
//     try {
//       setLoading(true);
//       const res  = await fetch(`${BASE_URL}/deleteMeeting/${id}`, { method: "DELETE" });
//       const data = await res.json();
//       if (data.success) { setDeleteConfirm(null); showToast("Meeting deleted successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to delete meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   const decisionBadge = (val) => {
//     const map = {
//       "Approved":      "approved",
//       "Rejected":      "rejected",
//       "On-Hold":       "on-hold",
//       "Not Conducted": "not-conducted",
//       "Postponed":     "postponed",
//     };
//     const cls = map[val] || "empty";
//     return <span className={`decision-badge ${cls}`}>{val || "-"}</span>;
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap');

//         .pm-wrap * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }

//         .pm-table tbody tr:hover { background: #f4faf6; }

//         .meeting-no-badge {
//           display: inline-block; background: #e6f4ec; color: #1a6640;
//           font-weight: 700; font-size: 12.5px; padding: 3px 10px;
//           border-radius: 6px; letter-spacing: 0.3px;
//         }
//         .subject-type-pill {
//           display: inline-block; background: #eaf3fb; color: #1565a8;
//           font-size: 12px; font-weight: 600; padding: 3px 9px; border-radius: 20px;
//         }
//         .time-badge {
//           display: inline-block; background: #e6f4ec; color: #1a6640;
//           font-size: 12.5px; font-weight: 700; padding: 3px 10px; border-radius: 6px;
//         }

//         .decision-badge {
//           display: inline-block; font-size: 12px; font-weight: 700;
//           padding: 3px 10px; border-radius: 20px; white-space: nowrap;
//         }
//         .decision-badge.approved    { background: #e6f4ec; color: #1a6640; }
//         .decision-badge.rejected    { background: #fdecea; color: #c0392b; }
//         .decision-badge.on-hold     { background: #fff8e1; color: #b07a00; }
//         .decision-badge.not-conducted { background: #f3f3f3; color: #6a6a6a; }
//         .decision-badge.postponed   { background: #eee8ff; color: #6a3ab0; }
//         .decision-badge.empty       { background: #f3f3f3; color: #aaa; }

//         .pm-table th {
//           font-size: 13px; font-weight: 700; color: #3a6b50;
//           padding: 11px 14px; text-align: left; background: #f0f7f2;
//           border-bottom: 2px solid #d6ede0; white-space: nowrap;
//         }
//         .pm-table td {
//           font-size: 13.5px; font-weight: 500; color: #2d3d35;
//           padding: 11px 14px; border-bottom: 1px solid #eef4ee; vertical-align: middle;
//         }
//         .pm-table td:first-child { color: #8aaa95; font-weight: 600; font-size: 13px; }

//         .pm-search {
//           font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 500;
//           color: #2d3d35; border: 1.5px solid #c8e0cc; border-radius: 8px;
//           padding: 8px 13px; outline: none; transition: border-color 0.2s;
//         }
//         .pm-search:focus { border-color: #1a7a4a; }

//         .pm-input {
//           font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 500;
//           width: 100%; padding: 10px 12px; border-radius: 8px;
//           border: 1.5px solid #c8e0cc; outline: none; color: #2d3d35;
//           transition: border-color 0.2s;
//         }
//         .pm-input:focus { border-color: #1a7a4a; }

//         .pm-label {
//           font-family: 'Nunito Sans', sans-serif; font-size: 12px; font-weight: 700;
//           color: #5a7a6a; margin-bottom: 4px; display: block;
//         }

//         .pm-btn-primary {
//           font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 700;
//           background: #1a7a4a; color: #fff; border: none; border-radius: 8px;
//           padding: 10px 20px; cursor: pointer; letter-spacing: 0.2px; transition: background 0.15s;
//         }
//         .pm-btn-primary:hover { background: #155e39; }
//         .pm-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

//         .pm-btn-cancel {
//           font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 600;
//           background: #eef2ee; color: #4a6a5a; border: none; border-radius: 8px;
//           padding: 10px 20px; cursor: pointer;
//         }
//         .pm-btn-cancel:hover { background: #e0e8e2; }

//         .pm-btn-edit {
//           font-family: 'Nunito Sans', sans-serif; font-size: 12.5px; font-weight: 600;
//           background: #e8f4fd; color: #1a6aaa; border: none; border-radius: 6px;
//           padding: 5px 11px; cursor: pointer;
//         }
//         .pm-btn-edit:hover { background: #d0e8f8; }

//         .pm-btn-delete {
//           font-family: 'Nunito Sans', sans-serif; font-size: 12.5px; font-weight: 600;
//           background: #fdecea; color: #c0392b; border: none; border-radius: 6px;
//           padding: 5px 11px; cursor: pointer;
//         }
//         .pm-btn-delete:hover { background: #fad4d0; }

//         .pm-card {
//           border: 1px solid #e0ede5; border-radius: 10px;
//           padding: 13px; background: #f9fdf9; margin-bottom: 10px;
//         }
//         .pm-card-row {
//           display: flex; justify-content: space-between; font-size: 13px;
//           font-weight: 500; padding: 4px 0; border-bottom: 1px solid #eef4ee; color: #2d3d35;
//         }
//         .pm-card-label { color: #5a7a6a; font-weight: 700; min-width: 110px; font-size: 12.5px; }

//         .pm-title { font-size: 22px; font-weight: 800; color: #1a4a2e; margin: 0 0 3px 0; letter-spacing: -0.3px; }
//         .pm-subtitle { font-size: 13px; font-weight: 500; color: #7a9a88; margin: 0 0 14px 0; }
//         .pm-section-title { font-size: 15px; font-weight: 800; color: #1a4a2e; margin: 0; }
//         .pm-modal-title { font-size: 17px; font-weight: 800; color: #1a4a2e; margin: 0; }
//         .pm-delete-title { font-size: 17px; font-weight: 700; color: #1a4a2e; margin-bottom: 6px; }
//         .pm-delete-sub { font-size: 13.5px; color: #8a9a90; margin-bottom: 20px; font-weight: 500; }

//         /* ── MeetingRecorder styles ── */
//         .mr-wrap * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }

//         .mr-vad-ring {
//           width: 62px; height: 62px; border-radius: 50%; border: 3px solid #d6ede0;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 24px; background: #f7fbf8; flex-shrink: 0;
//           transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
//         }
//         .mr-vad-ring.speaking {
//           border-color: #1a7a4a; background: #e6f4ec;
//           animation: mrRingPulse 1s ease-in-out infinite;
//         }
//         @keyframes mrRingPulse {
//           0%, 100% { box-shadow: 0 0 0 4px rgba(26,122,74,0.18), 0 0 0 10px rgba(26,122,74,0.07); }
//           50%       { box-shadow: 0 0 0 9px rgba(26,122,74,0.22), 0 0 0 18px rgba(26,122,74,0.04); }
//         }

//         .mr-rec-dot {
//           display: inline-block; width: 8px; height: 8px; background: #e53935;
//           border-radius: 50%; animation: mrRecPulse 1s infinite; margin-right: 5px; vertical-align: middle;
//         }
//         @keyframes mrRecPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }

//         .mr-transcript-box {
//           background: #f7fbf8; border: 1.5px solid #d6ede0; border-radius: 10px;
//           padding: 12px; min-height: 80px; max-height: 150px; overflow-y: auto;
//           font-size: 13.5px; font-weight: 500; color: #2d3d35; line-height: 1.75;
//           white-space: pre-wrap;
//         }
//         .mr-interim { color: #9ab5a0; font-style: italic; }

//         .mr-decision-box {
//           background: #eaf4ff; border: 1.5px solid #b3d4f0; border-radius: 10px;
//           padding: 12px; font-size: 13.5px; font-weight: 500;
//           color: #1a3a5a; line-height: 1.75; white-space: pre-wrap;
//         }

//         .mr-btn {
//           font-family: 'Nunito Sans', sans-serif; font-weight: 700; font-size: 13px;
//           border: none; border-radius: 8px; padding: 8px 16px;
//           cursor: pointer; display: inline-flex; align-items: center; gap: 5px;
//           transition: background 0.15s, opacity 0.15s;
//         }
//         .mr-btn:disabled { opacity: 0.45; cursor: not-allowed; }
//         .mr-btn-green { background: #1a7a4a; color: #fff; }
//         .mr-btn-green:hover:not(:disabled) { background: #155e39; }
//         .mr-btn-grey  { background: #eef2ee; color: #4a6a5a; }
//         .mr-btn-grey:hover:not(:disabled)  { background: #e0e8e2; }
//         .mr-btn-blue  { background: #e8f4fd; color: #1565a8; }
//         .mr-btn-blue:hover:not(:disabled)  { background: #cce4f8; }
//         .mr-btn-red   { background: #fdecea; color: #c0392b; }
//         .mr-btn-red:hover:not(:disabled)   { background: #fbd0cc; }
//         .mr-btn-teal  { background: #e0f7f4; color: #00695c; }
//         .mr-btn-teal:hover:not(:disabled)  { background: #b2ebf2; }

//         .mr-toggle {
//           display: inline-flex; align-items: center; gap: 8px;
//           background: #f0f7f2; border-radius: 8px; padding: 7px 12px;
//           cursor: pointer; user-select: none; margin-bottom: 8px;
//         }
//         .mr-toggle-track {
//           width: 36px; height: 20px; border-radius: 20px; background: #c8d8c8;
//           position: relative; transition: background 0.2s; flex-shrink: 0;
//         }
//         .mr-toggle-track.on { background: #1a7a4a; }
//         .mr-toggle-thumb {
//           width: 16px; height: 16px; border-radius: 50%; background: #fff;
//           position: absolute; top: 2px; left: 2px;
//           transition: transform 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.2);
//         }
//         .mr-toggle-track.on .mr-toggle-thumb { transform: translateX(16px); }

//         .mr-lbl {
//           font-size: 11.5px; font-weight: 800; color: #5a7a6a;
//           text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 5px;
//         }
//         .mr-status { font-size: 12px; font-weight: 600; color: #7a9a88; min-height: 16px; }

//         .mr-spinner {
//           display: inline-block; width: 13px; height: 13px;
//           border: 2px solid #b3d4f0; border-top-color: #1565a8;
//           border-radius: 50%; animation: mrSpin 0.7s linear infinite;
//         }
//         @keyframes mrSpin { to { transform: rotate(360deg); } }

//         .mr-use-btn {
//           font-family: 'Nunito Sans', sans-serif; font-weight: 700; font-size: 13px;
//           background: #1a7a4a; color: #fff; border: none; border-radius: 7px;
//           padding: 7px 16px; cursor: pointer; margin-top: 8px; display: inline-block;
//         }
//         .mr-use-btn:hover { background: #155e39; }

//         /* Recorder toggle button in Edit Modal */
//         .pm-recorder-toggle {
//           display: flex; align-items: center; gap: 8px;
//           font-family: 'Nunito Sans', sans-serif; font-size: 13px; font-weight: 700;
//           background: #f0f7f2; color: #1a5a38; border: 1.5px solid #c8e0cc;
//           border-radius: 8px; padding: 8px 14px; cursor: pointer;
//           transition: background 0.15s, border-color 0.15s;
//         }
//         .pm-recorder-toggle:hover { background: #e4f2e8; border-color: #1a7a4a; }
//         .pm-recorder-toggle.active { background: #e6f4ec; border-color: #1a7a4a; color: #1a4a2e; }

//         /* Recorder section in modal */
//         .pm-recorder-section {
//           border: 1.5px solid #d6ede0; border-radius: 10px;
//           padding: 14px; background: #f7fbf8; margin-top: 4px;
//           grid-column: span 2;
//         }
//       `}</style>

//       <div className="pm-wrap" style={{ background: "#f0f4f0", minHeight: "100vh", padding: isMobile ? 12 : 24 }}>

//         {/* Toast */}
//         {toast && (
//           <div style={{
//             position: "fixed", top: 16, right: 16, left: isMobile ? 16 : "auto",
//             background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
//             color: "#fff", padding: "10px 18px", borderRadius: 8, fontWeight: 700,
//             fontSize: 13.5, zIndex: 9999, fontFamily: "'Nunito Sans', sans-serif",
//           }}>
//             {toast.msg}
//           </div>
//         )}

//         {/* Header */}
//         <div style={{ marginBottom: 16 }}>
//           <h1 className="pm-title">Meeting Proceedings</h1>
//           <p className="pm-subtitle">Sabha Kamkaj manage करा</p>
//           <button className="pm-btn-primary" onClick={openCreateModal}>+ Create Meeting</button>
//         </div>

//         {/* Table card */}
//         <div style={{ background: "#fff", borderRadius: 12, padding: isMobile ? 12 : 20, overflowX: "auto" }}>
//           <div style={{
//             display: "flex", flexDirection: isMobile ? "column" : "row",
//             justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center",
//             gap: 10, marginBottom: 15,
//           }}>
//             <h3 className="pm-section-title">Records ({meetings.length})</h3>
//             <input
//               className="pm-search"
//               placeholder="Search meeting no..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               style={{ width: isMobile ? "100%" : "auto" }}
//             />
//           </div>

//           {/* Mobile cards */}
//           {isMobile ? (
//             <div>
//               {loading ? (
//                 <div style={{ textAlign: "center", padding: 20, color: "#8a9a90", fontFamily: "'Nunito Sans', sans-serif" }}>Loading...</div>
//               ) : meetings.length === 0 ? (
//                 <div style={{ textAlign: "center", padding: 20, fontFamily: "'Nunito Sans', sans-serif", color: "#8a9a90" }}>No records found</div>
//               ) : (
//                 meetings.map((m, i) => (
//                   <div className="pm-card" key={m._id}>
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
//                       <span style={{ fontWeight: 800, color: "#1a4a2e", fontSize: 14, fontFamily: "'Nunito Sans', sans-serif" }}>
//                         #{i + 1} — <span className="meeting-no-badge">{m.meetingNumber}</span>
//                       </span>
//                       <div style={{ display: "flex", gap: 6 }}>
//                         <button className="pm-btn-edit" onClick={() => openEditModal(m)}>✏️</button>
//                         <button className="pm-btn-delete" onClick={() => setDeleteConfirm(m._id)}>🗑️</button>
//                       </div>
//                     </div>
//                     <div className="pm-card-row"><span className="pm-card-label">Type</span><span>{m.meetingType || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Date</span><span>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Time</span><span className="time-badge">{formatTime(m.meetingTime)}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Subject ID</span><span>{m.subjectId || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Subject Type</span><span className="subject-type-pill">{m.subjectType || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Subject Name</span><span>{m.subjectName || "-"}</span></div>
//                     <div className="pm-card-row"><span className="pm-card-label">Decision</span><span>{decisionBadge(m.decisionInMeeting)}</span></div>
//                   </div>
//                 ))
//               )}
//             </div>
//           ) : (
//             /* Desktop table */
//             <table className="pm-table" style={{ width: "100%", borderCollapse: "collapse" }}>
//               <thead>
//                 <tr>
//                   {["#", "Meeting No", "Type", "Date", "Time", "Subject ID", "Subject Type", "Subject Name", "Decision In Meeting", "Actions"].map(h => (
//                     <th key={h}>{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr><td colSpan={10} style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>Loading...</td></tr>
//                 ) : meetings.length === 0 ? (
//                   <tr><td colSpan={10} style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>No records found</td></tr>
//                 ) : (
//                   meetings.map((m, i) => (
//                     <tr key={m._id}>
//                       <td>{i + 1}</td>
//                       <td><span className="meeting-no-badge">{m.meetingNumber}</span></td>
//                       <td>{m.meetingType}</td>
//                       <td>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</td>
//                       <td><span className="time-badge">{formatTime(m.meetingTime)}</span></td>
//                       <td>{m.subjectId}</td>
//                       <td><span className="subject-type-pill">{m.subjectType || "-"}</span></td>
//                       <td>{m.subjectName}</td>
//                       <td>{decisionBadge(m.decisionInMeeting)}</td>
//                       <td>
//                         <div style={{ display: "flex", gap: 6 }}>
//                           <button className="pm-btn-edit" onClick={() => openEditModal(m)}>✏️ Edit</button>
//                           <button className="pm-btn-delete" onClick={() => setDeleteConfirm(m._id)}>🗑️ Delete</button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>

//         {/* Create / Edit Modal */}
//         {showModal && (
//           <div style={modalOverlay}>
//             <div style={{
//               background: "#fff", borderRadius: 12, padding: isMobile ? 16 : 25,
//               width: isMobile ? "95%" : "100%", maxWidth: 560,
//               maxHeight: "90vh", overflowY: "auto",
//             }}>
//               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
//                 <h3 className="pm-modal-title">{editId ? "Edit Meeting" : "Create Meeting"}</h3>
//                 <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "#8a9a90" }}>✕</button>
//               </div>

//               <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Meeting Number</label>
//                   <input className="pm-input" name="meetingNumber" placeholder="Meeting Number" value={formData.meetingNumber} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Type Of Meeting</label>
//                   <select className="pm-input" name="meetingType" value={formData.meetingType} onChange={handleChange}>
//                     <option value="">Select Type</option>
//                     <option>General Body</option>
//                     <option>Standing Committee</option>
//                   </select>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Meeting Date</label>
//                   <input className="pm-input" name="meetingDate" type="date" value={formData.meetingDate} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Meeting Time</label>
//                   <div style={{ display: "flex", gap: 6 }}>
//                     <select className="pm-input" name="meetingHour" value={formData.meetingHour} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
//                       <option value="">HH</option>
//                       {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")).map(h => (
//                         <option key={h} value={h}>{h}</option>
//                       ))}
//                     </select>
//                     <select className="pm-input" name="meetingMinute" value={formData.meetingMinute} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
//                       <option value="">MM</option>
//                       {["00","05","10","15","20","25","30","35","40","45","50","55"].map(m => (
//                         <option key={m} value={m}>{m}</option>
//                       ))}
//                     </select>
//                     <select className="pm-input" name="meetingAmpm" value={formData.meetingAmpm} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
//                       <option value="AM">AM</option>
//                       <option value="PM">PM</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Subject ID</label>
//                   <input className="pm-input" name="subjectId" placeholder="Subject ID" value={formData.subjectId} onChange={handleChange} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <label className="pm-label">Subject Type</label>
//                   <select className="pm-input" name="subjectType" value={formData.subjectType} onChange={handleChange}>
//                     <option value="">Select Subject Type</option>
//                     <option>General</option>
//                     <option>Administrative and Financial Approval</option>
//                     <option>Contract Approval</option>
//                   </select>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
//                   <label className="pm-label">Subject Name</label>
//                   <input className="pm-input" name="subjectName" placeholder="Subject Name" value={formData.subjectName} onChange={handleChange} />
//                 </div>

//                 {/* Decision In Meeting — only in Edit Modal */}
//                 {editId && (
//                   <>
//                     <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
//                       <label className="pm-label">Decision In Meeting</label>
//                       <select
//                         className="pm-input"
//                         name="decisionInMeeting"
//                         value={formData.decisionInMeeting}
//                         onChange={handleChange}
//                       >
//                         <option value="">Select Decision</option>
//                         <option value="Approved">Approved</option>
//                         <option value="Rejected">Rejected</option>
//                         <option value="On-Hold">On-Hold</option>
//                         <option value="Not Conducted">Not Conducted</option>
//                         <option value="Postponed">Postponed</option>
//                       </select>
//                     </div>

//                     {/* Meeting Recorder toggle */}
//                     <div style={{ gridColumn: isMobile ? "1" : "span 2" }}>
//                       <button
//                         className={`pm-recorder-toggle ${showRecorder ? "active" : ""}`}
//                         onClick={() => setShowRecorder(v => !v)}
//                         type="button"
//                       >
//                         🎙️ {showRecorder ? "Hide Meeting Recorder" : "Record Meeting & Auto-Extract Decisions"}
//                       </button>
//                     </div>

//                     {/* Manual audio file upload */}
//                     <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
//                       <label className="pm-label">Upload Meeting Recording (optional)</label>
//                       <div style={{
//                         border: "1.5px dashed #c8e0cc", borderRadius: 8,
//                         padding: "10px 14px", background: "#f7fbf8",
//                         display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
//                       }}>
//                         <label style={{
//                           fontFamily: "'Nunito Sans', sans-serif", fontSize: 13, fontWeight: 700,
//                           background: "#e6f4ec", color: "#1a6640", border: "1.5px solid #c8e0cc",
//                           borderRadius: 7, padding: "6px 14px", cursor: "pointer",
//                         }}>
//                           📁 Choose File
//                           <input
//                             type="file"
//                             accept="audio/*,video/webm"
//                             style={{ display: "none" }}
//                             onChange={(e) => {
//                               const file = e.target.files[0];
//                               if (file) setManualRecordingFile(file);
//                             }}
//                           />
//                         </label>
//                         {manualRecordingFile ? (
//                           <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
//                             <span style={{ fontSize: 12.5, fontWeight: 600, color: "#1a4a2e" }}>
//                               🎵 {manualRecordingFile.name}
//                             </span>
//                             <button
//                               type="button"
//                               onClick={() => setManualRecordingFile(null)}
//                               style={{
//                                 background: "#fdecea", color: "#c0392b", border: "none",
//                                 borderRadius: 5, padding: "3px 8px", cursor: "pointer",
//                                 fontSize: 11, fontWeight: 700,
//                               }}
//                             >✕ Remove</button>
//                           </div>
//                         ) : meetingRecording ? (
//                           <span style={{ fontSize: 12.5, fontWeight: 600, color: "#1a4a2e" }}>
//                             🔴 Auto-recording saved
//                           </span>
//                         ) : (
//                           <span style={{ fontSize: 12.5, color: "#9ab5a0", fontWeight: 500 }}>
//                             No file chosen — or use recorder below
//                           </span>
//                         )}
//                       </div>
//                     </div>

//                     {/* Recorder section (collapsible) */}
//                     {showRecorder && (
//                       <div className="pm-recorder-section" style={{ gridColumn: isMobile ? "1" : "span 2" }}>
//                         <MeetingRecorder
//                           onDecisionExtracted={(text) => {
//                             setAiExtractedDecision(text);
//                             showToast("AI decisions saved! ✅");
//                           }}
//                           onRecordingReady={(url) => {
//                             setMeetingRecording(url);
//                             showToast("Recording auto-saved! 🔴");
//                           }}
//                           onTranscriptUpdate={() => {}}
//                         />
//                         {/* AI decision preview */}
//                         {aiExtractedDecision && (
//                           <div style={{
//                             marginTop: 10, background: "#eaf4ff", border: "1.5px solid #b3d4f0",
//                             borderRadius: 8, padding: "10px 12px",
//                             fontSize: 13, fontWeight: 500, color: "#1a3a5a", lineHeight: 1.7,
//                             whiteSpace: "pre-wrap"
//                           }}>
//                             <div style={{ fontWeight: 800, color: "#1565a8", marginBottom: 4, fontSize: 11.5, textTransform: "uppercase", letterSpacing: "0.5px" }}>
//                               ✅ AI Extracted Decision (will be saved)
//                             </div>
//                             {aiExtractedDecision}
//                           </div>
//                         )}
//                         {/* Auto recording indicator */}
//                         {meetingRecording && !manualRecordingFile && (
//                           <div style={{
//                             marginTop: 8, background: "#e6f4ec", border: "1.5px solid #c8e0cc",
//                             borderRadius: 8, padding: "8px 12px",
//                             fontSize: 12.5, fontWeight: 600, color: "#1a4a2e",
//                             display: "flex", alignItems: "center", gap: 6,
//                           }}>
//                             🔴 Auto-recording captured and will be saved with this meeting
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </>
//                 )}

//               </div>

//               <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
//                 <button className="pm-btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
//                 <button className="pm-btn-primary" onClick={handleSubmit} disabled={loading}>
//                   {loading ? "Saving..." : editId ? "Update" : "Save"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Delete Confirm Modal */}
//         {deleteConfirm && (
//           <div style={modalOverlay}>
//             <div style={{
//               background: "#fff", padding: 28, borderRadius: 12,
//               maxWidth: 380, width: isMobile ? "90%" : "100%", textAlign: "center",
//             }}>
//               <p className="pm-delete-title">Delete Meeting?</p>
//               <p className="pm-delete-sub">He record permanently delete होईल. Sure aahes ka?</p>
//               <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
//                 <button className="pm-btn-cancel" onClick={() => setDeleteConfirm(null)}>Cancel</button>
//                 <button
//                   className="pm-btn-primary"
//                   style={{ background: "#c0392b" }}
//                   onClick={() => handleDelete(deleteConfirm)}
//                   disabled={loading}
//                 >
//                   {loading ? "Deleting..." : "Yes, Delete"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
//     </>
//   );
// }

// const modalOverlay = {
//   position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
//   display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000,
//   padding: 16,
// };






import { useState, useEffect, useRef } from "react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// ─────────────────────────────────────────────────────────────
// MeetingRecorder (inline — no separate file needed)
// ─────────────────────────────────────────────────────────────
function MeetingRecorder({ onDecisionExtracted, onTranscriptUpdate, onRecordingReady }) {
  const [sessionActive, setSessionActive]       = useState(false);
  const [isSpeaking, setIsSpeaking]             = useState(false);
  const [recordingEnabled, setRecordingEnabled] = useState(false);
  const [transcript, setTranscript]             = useState("");
  const [interimText, setInterimText]           = useState("");
  const [aiDecision, setAiDecision]             = useState("");
  const [aiLoading, setAiLoading]               = useState(false);
  const [status, setStatus]                     = useState("");
  const [recordingReady, setRecordingReady]     = useState(false);
  const [recordingURL, setRecordingURL]         = useState(null);
  const [micError, setMicError]                 = useState(null);

  const audioCtxRef      = useRef(null);
  const analyserRef      = useRef(null);
  const micStreamRef     = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunks   = useRef([]);
  const vadRafRef        = useRef(null);
  const silenceTimerRef  = useRef(null);
  const recognitionRef   = useRef(null);
  const transcriptRef    = useRef("");
  const isRecognizingRef = useRef(false);
  const speakingRef      = useRef(false);
  const sessionActiveRef = useRef(false);

  const SILENCE_DB    = -42;
  const SILENCE_DELAY = 2000;

  const buildRecognition = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return null;
    const rec = new SR();
    rec.continuous     = true;
    rec.interimResults = true;
    rec.lang           = "hi-IN";

    rec.onresult = (e) => {
      let final = transcriptRef.current;
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) final += e.results[i][0].transcript + " ";
        else interim = e.results[i][0].transcript;
      }
      transcriptRef.current = final;
      setTranscript(final);
      setInterimText(interim);
      onTranscriptUpdate?.(final);
    };

    rec.onend = () => {
      isRecognizingRef.current = false;
      setInterimText("");
      if (speakingRef.current && sessionActiveRef.current) {
        try { rec.start(); isRecognizingRef.current = true; } catch {}
      }
    };

    rec.onerror = (e) => {
      if (["no-speech", "aborted", "network"].includes(e.error)) return;
      setStatus(`⚠️ ${e.error}`);
      isRecognizingRef.current = false;
    };

    return rec;
  };

  const startVAD = (stream) => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 512;
    ctx.createMediaStreamSource(stream).connect(analyser);
    audioCtxRef.current  = ctx;
    analyserRef.current  = analyser;

    const data = new Uint8Array(analyser.frequencyBinCount);
    const loop = () => {
      vadRafRef.current = requestAnimationFrame(loop);
      analyser.getByteFrequencyData(data);
      const avg = data.reduce((a, b) => a + b, 0) / data.length;
      const db  = avg === 0 ? -Infinity : 20 * Math.log10(avg / 255);
      const speaking = db > SILENCE_DB;

      if (speaking !== speakingRef.current) {
        speakingRef.current = speaking;
        setIsSpeaking(speaking);

        if (speaking) {
          clearTimeout(silenceTimerRef.current);
          setStatus("🗣️ Speaking — transcribing...");
          if (!isRecognizingRef.current && recognitionRef.current) {
            try { recognitionRef.current.start(); isRecognizingRef.current = true; } catch {}
          }
        } else {
          setStatus("🤫 Silence detected... pausing in 2s");
          silenceTimerRef.current = setTimeout(() => {
            if (!speakingRef.current && isRecognizingRef.current) {
              try { recognitionRef.current?.stop(); } catch {}
              isRecognizingRef.current = false;
              setStatus("👂 Waiting for someone to speak...");
            }
          }, SILENCE_DELAY);
        }
      }
    };
    loop();
  };

  const startSession = async () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { setStatus("❌ Please use Chrome browser."); return; }
    setMicError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micStreamRef.current = stream;

      const rec = buildRecognition();
      recognitionRef.current = rec;
      startVAD(stream);

      if (recordingEnabled) {
        recordedChunks.current = [];
        setRecordingReady(false);
        setRecordingURL(null);
        const mr = new MediaRecorder(stream);
        mr.ondataavailable = (e) => { if (e.data.size > 0) recordedChunks.current.push(e.data); };
        mr.onstop = () => {
          const blob = new Blob(recordedChunks.current, { type: "audio/webm" });
          const url = URL.createObjectURL(blob);
          setRecordingURL(url);
          setRecordingReady(true);
          onRecordingReady?.(url);  // ← auto-save URL to parent
        };
        mr.start();
        mediaRecorderRef.current = mr;
      }

      sessionActiveRef.current = true;
      setSessionActive(true);
      setStatus("👂 Waiting for someone to speak...");
    } catch (err) {
      const isDenied   = err?.name === "NotAllowedError" || err?.name === "PermissionDeniedError";
      const isNotFound = err?.name === "NotFoundError";
      setMicError(isNotFound ? "notfound" : isDenied ? "denied" : "other");
      setStatus("");
    }
  };

  const stopSession = () => {
    cancelAnimationFrame(vadRafRef.current);
    clearTimeout(silenceTimerRef.current);
    audioCtxRef.current?.close();
    try { recognitionRef.current?.stop(); } catch {}
    isRecognizingRef.current = false;
    micStreamRef.current?.getTracks().forEach(t => t.stop());
    if (mediaRecorderRef.current?.state === "recording") mediaRecorderRef.current.stop();
    speakingRef.current      = false;
    sessionActiveRef.current = false;
    setIsSpeaking(false);
    setSessionActive(false);
    setInterimText("");
    setStatus("⏹️ Session ended.");
  };

  const resetAll = () => {
    stopSession();
    setTranscript("");
    setAiDecision("");
    setRecordingURL(null);
    setRecordingReady(false);
    transcriptRef.current = "";
    setStatus("");
  };

  const extractDecisions = async () => {
    if (!transcript.trim()) { setStatus("⚠️ Transcript is empty."); return; }
    setAiLoading(true);
    setStatus("🤖 Claude AI extracting decisions...");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{
            role: "user",
            content: `You are a meeting minutes expert. Extract only the key decisions from the transcript below.

Rules:
- Write each decision on a new line with a number (1. 2. 3.)
- Decisions only, nothing else
- Reply in the same language as the transcript

Transcript:
${transcript}`
          }]
        })
      });
      const data = await res.json();
      const decision = data.content?.map(b => b.text || "").join("") || "No decisions found.";
      setAiDecision(decision);
      setStatus("✅ Decisions extracted!");
    } catch {
      setStatus("❌ AI error. Please try again.");
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="mr-wrap">
      {/* VAD ring + controls */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 12 }}>
        <div className={`mr-vad-ring ${isSpeaking ? "speaking" : ""}`}>
          {isSpeaking ? "🗣️" : sessionActive ? "👂" : "🎙️"}
        </div>

        <div style={{ flex: 1 }}>
          {/* Recording toggle */}
          <label className="mr-toggle">
            <input
              type="checkbox"
              checked={recordingEnabled}
              onChange={e => setRecordingEnabled(e.target.checked)}
              disabled={sessionActive}
              style={{ display: "none" }}
            />
            <div className={`mr-toggle-track ${recordingEnabled ? "on" : ""}`}>
              <div className="mr-toggle-thumb" />
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#3a6b50" }}>
              {recordingEnabled
                ? <><span className="mr-rec-dot" />Audio Recording ON</>
                : "Audio Recording (optional)"}
            </span>
          </label>

          {/* Session buttons */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {!sessionActive
              ? <button className="mr-btn mr-btn-green" onClick={startSession}>▶ Start Session</button>
              : <button className="mr-btn mr-btn-grey"  onClick={stopSession}>⏹ Stop Session</button>
            }
            <button className="mr-btn mr-btn-red" onClick={resetAll} disabled={sessionActive}>🔄 Reset</button>
          </div>
        </div>
      </div>

      {/* Mic Error Banner */}
      {micError && (
        <div style={{
          background: micError === "notfound" ? "#fff8e1" : "#fdecea",
          border: `1.5px solid ${micError === "notfound" ? "#ffe082" : "#f5c6c2"}`,
          borderRadius: 10, padding: "12px 14px", marginBottom: 12,
          fontSize: 13, fontWeight: 500, color: "#3a2a2a", lineHeight: 1.7,
        }}>
          {micError === "denied" && (
            <>
              <div style={{ fontWeight: 800, color: "#c0392b", marginBottom: 6 }}>🚫 Microphone Permission Denied</div>
              <div>Browser has blocked the microphone. To fix this:</div>
              <ol style={{ margin: "6px 0 0 18px", padding: 0 }}>
                <li>Click the <b>🔒 Lock icon</b> in the address bar</li>
                <li>Open <b>Site settings</b></li>
                <li>Set <b>Microphone → Allow</b></li>
                <li>Press <b>Refresh</b> (F5)</li>
              </ol>
            </>
          )}
          {micError === "notfound" && (
            <>
              <div style={{ fontWeight: 800, color: "#b07a00", marginBottom: 6 }}>🎤 Microphone Not Found</div>
              <div>No microphone detected. Please check your device or connect a headset / external mic.</div>
            </>
          )}
          {micError === "other" && (
            <>
              <div style={{ fontWeight: 800, color: "#c0392b", marginBottom: 6 }}>❌ Microphone Could Not Start</div>
              <div>Please refresh the page (F5) and try again.</div>
            </>
          )}
        </div>
      )}

      {/* Status */}
      <div className="mr-status" style={{ marginBottom: 10 }}>{status}</div>

      {/* Transcript */}
      <div className="mr-lbl">Live Transcript</div>
      <div className="mr-transcript-box">
        {transcript
          ? <>{transcript}{interimText && <span className="mr-interim"> {interimText}</span>}</>
          : <span style={{ color: "#b0c8b8" }}>Start a session to see the transcript here...</span>
        }
      </div>

      {/* Recording player + download */}
      {recordingReady && recordingURL && (
        <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#1a4a2e" }}>🔴 Recording ready:</span>
          <a href={recordingURL} download="meeting-recording.webm"
             className="mr-btn mr-btn-teal" style={{ textDecoration: "none" }}>
            ⬇ Download
          </a>
          <audio controls src={recordingURL} style={{ height: 32, flex: 1, minWidth: 120 }} />
        </div>
      )}

      {/* AI extract */}
      {transcript.trim().length > 10 && (
        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
          <button
            className="mr-btn mr-btn-blue"
            onClick={extractDecisions}
            disabled={aiLoading}
            style={{ alignSelf: "flex-start" }}
          >
            {aiLoading
              ? <><span className="mr-spinner" /> AI is working...</>
              : "🤖 Extract Decisions with AI"}
          </button>

          {aiDecision && (
            <>
              <div className="mr-lbl">AI Extracted Decisions</div>
              <div className="mr-decision-box">{aiDecision}</div>
              <button
                className="mr-use-btn"
                onClick={() => onDecisionExtracted?.(aiDecision)}
              >
                ✅ Save to "Decision In Meeting"
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// ProceedingsMeeting (main component)
// ─────────────────────────────────────────────────────────────
export default function ProceedingsMeeting() {
  const [meetings, setMeetings]         = useState([]);
  const [search, setSearch]             = useState("");
  const [showModal, setShowModal]       = useState(false);
  const [toast, setToast]               = useState(null);
  const [loading, setLoading]           = useState(false);
  const [editId, setEditId]             = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [isMobile, setIsMobile]         = useState(window.innerWidth < 640);
  const [showRecorder, setShowRecorder] = useState(false);
  const [aiExtractedDecision, setAiExtractedDecision] = useState("");
  const aiExtractedDecisionRef = useRef("");  // always holds latest value
  const [meetingRecording, setMeetingRecording]       = useState(null);
  const meetingRecordingRef = useRef(null);           // always holds latest value
  const [manualRecordingFile, setManualRecordingFile] = useState(null);

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
    decisionInMeeting: "",
  });

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const formatTime = (time) => {
    if (!time) return "-";
    const [hourStr, minute] = time.split(":");
    let hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${ampm}`;
  };

  const fetchMeetings = async (searchVal = "") => {
    try {
      setLoading(true);
      const url = searchVal
        ? `${BASE_URL}/getMeetings?search=${searchVal}`
        : `${BASE_URL}/getMeetings`;
      const res  = await fetch(url);
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

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const emptyForm = {
    meetingNumber: "", meetingType: "", meetingDate: "",
    meetingHour: "", meetingMinute: "", meetingAmpm: "AM",
    subjectId: "", subjectType: "", subjectName: "", decisionInMeeting: "",
  };

  const openCreateModal = () => {
    setEditId(null);
    setFormData(emptyForm);
    setShowRecorder(false);
    setAiExtractedDecision(""); aiExtractedDecisionRef.current = "";
    setMeetingRecording(null);  meetingRecordingRef.current = null;
    setManualRecordingFile(null);
    setShowModal(true);
  };

  const openEditModal = (m) => {
    setEditId(m._id);
    setFormData({
      meetingNumber: m.meetingNumber,
      meetingType:   m.meetingType,
      meetingDate:   m.meetingDate ? m.meetingDate.slice(0, 10) : "",
      meetingHour:   m.meetingTime ? (() => { const h = parseInt(m.meetingTime.split(":")[0], 10); return String(h % 12 || 12).padStart(2, "0"); })() : "",
      meetingMinute: m.meetingTime ? m.meetingTime.split(":")[1] : "",
      meetingAmpm:   m.meetingTime ? (parseInt(m.meetingTime.split(":")[0], 10) >= 12 ? "PM" : "AM") : "AM",
      subjectId:     m.subjectId || "",
      subjectType:   m.subjectType || "",
      subjectName:   m.subjectName || "",
      decisionInMeeting: m.decisionInMeeting || "",
    });
    setShowRecorder(false);
    setAiExtractedDecision(""); aiExtractedDecisionRef.current = "";
    setMeetingRecording(null);  meetingRecordingRef.current = null;
    setManualRecordingFile(null);
    setShowModal(true);
  };

  const buildTimeString = () => {
    if (!formData.meetingHour || !formData.meetingMinute) return "";
    let hour = parseInt(formData.meetingHour, 10);
    if (formData.meetingAmpm === "PM" && hour !== 12) hour += 12;
    if (formData.meetingAmpm === "AM" && hour === 12) hour = 0;
    return `${String(hour).padStart(2, "0")}:${formData.meetingMinute}`;
  };

  // const handleCreate = async () => {
  //   try {
  //     setLoading(true);
  //     const recordingValue = manualRecordingFile ? manualRecordingFile.name : (meetingRecordingRef.current || null);
  //     const res = await fetch(`${BASE_URL}/createMeeting`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         ...formData,
  //         meetingTime: buildTimeString(),
  //         aiExtractedDecision: aiExtractedDecisionRef.current || null,
  //         meetingRecording: recordingValue,
  //       }),
  //     });
  //     const data = await res.json();
  //     if (data.success) { setShowModal(false); showToast("Meeting created successfully"); fetchMeetings(search); }
  //     else showToast(data.message || "Failed to create meeting", "error");
  //   } catch { showToast("Server error. Please try again.", "error"); }
  //   finally { setLoading(false); }
  // };

  // const handleUpdate = async () => {
  //   try {
  //     setLoading(true);
  //     const recordingValue = manualRecordingFile ? manualRecordingFile.name : (meetingRecordingRef.current || null);
  //     const res = await fetch(`${BASE_URL}/updateMeeting/${editId}`, {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         ...formData,
  //         meetingTime: buildTimeString(),
  //         aiExtractedDecision: aiExtractedDecisionRef.current || null,
  //         meetingRecording: recordingValue,
  //       }),
  //     });
  //     const data = await res.json();
  //     if (data.success) { setShowModal(false); setEditId(null); showToast("Meeting updated successfully"); fetchMeetings(search); }
  //     else showToast(data.message || "Failed to update meeting", "error");
  //   } catch { showToast("Server error. Please try again.", "error"); }
  //   finally { setLoading(false); }
  // };

  
  
// const handleCreate = async () => {
//   try {
//     setLoading(true);
//     const fd = new FormData();

//     // Only backend-needed fields — manually listed (no meetingHour/Minute junk)
//     fd.append("meetingNumber",     formData.meetingNumber);
//     fd.append("meetingType",       formData.meetingType);
//     if (formData.meetingDate)      fd.append("meetingDate",    formData.meetingDate);
//     if (buildTimeString())         fd.append("meetingTime",    buildTimeString());
//     if (formData.subjectId)        fd.append("subjectId",      formData.subjectId);
//     if (formData.subjectType)      fd.append("subjectType",    formData.subjectType);
//     if (formData.subjectName)      fd.append("subjectName",    formData.subjectName);
//     if (formData.decisionInMeeting) fd.append("decisionInMeeting", formData.decisionInMeeting);

//     // AI decision — ref वापरा (state lag होतो)
//     const aiText = aiExtractedDecisionRef.current?.trim();
//     if (aiText) fd.append("aiExtractedDecision", aiText);

//     // Recording — manual file only (actual File object, field name = multer चा "meetingRecording")
//     if (manualRecordingFile) fd.append("meetingRecording", manualRecordingFile);

//     const res  = await fetch(`${BASE_URL}/createMeeting`, { method: "POST", body: fd });
//     const data = await res.json();
//     if (data.success) { setShowModal(false); showToast("Meeting created successfully"); fetchMeetings(search); }
//     else showToast(data.message || "Failed to create meeting", "error");
//   } catch { showToast("Server error. Please try again.", "error"); }
//   finally { setLoading(false); }
// };

// const handleUpdate = async () => {
//   try {
//     setLoading(true);
//     const fd = new FormData();

//     fd.append("meetingNumber",     formData.meetingNumber);
//     fd.append("meetingType",       formData.meetingType);
//     if (formData.meetingDate)      fd.append("meetingDate",    formData.meetingDate);
//     if (buildTimeString())         fd.append("meetingTime",    buildTimeString());
//     if (formData.subjectId)        fd.append("subjectId",      formData.subjectId);
//     if (formData.subjectType)      fd.append("subjectType",    formData.subjectType);
//     if (formData.subjectName)      fd.append("subjectName",    formData.subjectName);
//     if (formData.decisionInMeeting) fd.append("decisionInMeeting", formData.decisionInMeeting);

//     // AI decision — ref वापरा
//     const aiText = aiExtractedDecisionRef.current?.trim();
//     if (aiText) fd.append("aiExtractedDecision", aiText);

//     // Recording — manual file only
//     if (manualRecordingFile) fd.append("meetingRecording", manualRecordingFile);

//     const res  = await fetch(`${BASE_URL}/updateMeeting/${editId}`, { method: "PUT", body: fd });
//     const data = await res.json();
//     if (data.success) { setShowModal(false); setEditId(null); showToast("Meeting updated successfully"); fetchMeetings(search); }
//     else showToast(data.message || "Failed to update meeting", "error");
//   } catch { showToast("Server error. Please try again.", "error"); }
//   finally { setLoading(false); }
// };

  
  const handleCreate = async () => {
  try {
    setLoading(true);
    const fd = new FormData();

    fd.append("meetingNumber", formData.meetingNumber);
    fd.append("meetingType",   formData.meetingType);
    if (formData.meetingDate)        fd.append("meetingDate",        formData.meetingDate);
    if (buildTimeString())           fd.append("meetingTime",        buildTimeString());
    if (formData.subjectId)          fd.append("subjectId",          formData.subjectId);
    if (formData.subjectType)        fd.append("subjectType",        formData.subjectType);
    if (formData.subjectName)        fd.append("subjectName",        formData.subjectName);
    if (formData.decisionInMeeting)  fd.append("decisionInMeeting",  formData.decisionInMeeting);

    // ✅ AI Extracted Decision
    const aiText = aiExtractedDecisionRef.current?.trim();
    console.log("aiText →", aiText); // debug
    if (aiText) fd.append("aiExtractedDecision", aiText);

    // ✅ Manual file upload → Cloudinary via multer
    if (manualRecordingFile) {
      console.log("manualRecordingFile →", manualRecordingFile.name); // debug
      fd.append("meetingRecording", manualRecordingFile);
    }

    // ✅ Auto recorder blob → File object → Cloudinary via multer
    const blobUrl = meetingRecordingRef.current?.trim();
    console.log("blobUrl →", blobUrl); // debug
    if (blobUrl) {
      try {
        const blobRes  = await fetch(blobUrl);
        const blobData = await blobRes.blob();
        const file     = new File([blobData], "auto-recording.webm", { type: "audio/webm" });
        fd.append("meetingRecordingBlob", file);
      } catch (err) {
        console.error("Blob fetch failed:", err);
      }
    }

    // debug — payload check
    for (let [k, v] of fd.entries()) console.log("FD →", k, v);

    const res  = await fetch(`${BASE_URL}/createMeeting`, { method: "POST", body: fd });
    const data = await res.json();
    if (data.success) { setShowModal(false); showToast("Meeting created successfully"); fetchMeetings(search); }
    else showToast(data.message || "Failed to create meeting", "error");
  } catch { showToast("Server error. Please try again.", "error"); }
  finally { setLoading(false); }
};

const handleUpdate = async () => {
  try {
    setLoading(true);
    const fd = new FormData();

    fd.append("meetingNumber", formData.meetingNumber);
    fd.append("meetingType",   formData.meetingType);
    if (formData.meetingDate)        fd.append("meetingDate",        formData.meetingDate);
    if (buildTimeString())           fd.append("meetingTime",        buildTimeString());
    if (formData.subjectId)          fd.append("subjectId",          formData.subjectId);
    if (formData.subjectType)        fd.append("subjectType",        formData.subjectType);
    if (formData.subjectName)        fd.append("subjectName",        formData.subjectName);
    if (formData.decisionInMeeting)  fd.append("decisionInMeeting",  formData.decisionInMeeting);

    // ✅ AI Extracted Decision
    const aiText = aiExtractedDecisionRef.current?.trim();
    console.log("aiText →", aiText); // debug
    if (aiText) fd.append("aiExtractedDecision", aiText);

    // ✅ Manual file upload → Cloudinary via multer
    if (manualRecordingFile) {
      console.log("manualRecordingFile →", manualRecordingFile.name); // debug
      fd.append("meetingRecording", manualRecordingFile);
    }

    // ✅ Auto recorder blob → File object → Cloudinary via multer
    const blobUrl = meetingRecordingRef.current?.trim();
    console.log("blobUrl →", blobUrl); // debug
    if (blobUrl) {
      try {
        const blobRes  = await fetch(blobUrl);
        const blobData = await blobRes.blob();
        const file     = new File([blobData], "auto-recording.webm", { type: "audio/webm" });
        fd.append("meetingRecordingBlob", file);
      } catch (err) {
        console.error("Blob fetch failed:", err);
      }
    }

    // debug — payload check
    for (let [k, v] of fd.entries()) console.log("FD →", k, v);

    const res  = await fetch(`${BASE_URL}/updateMeeting/${editId}`, { method: "PUT", body: fd });
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
      const res  = await fetch(`${BASE_URL}/deleteMeeting/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) { setDeleteConfirm(null); showToast("Meeting deleted successfully"); fetchMeetings(search); }
      else showToast(data.message || "Failed to delete meeting", "error");
    } catch { showToast("Server error. Please try again.", "error"); }
    finally { setLoading(false); }
  };

  const decisionBadge = (val) => {
    const map = {
      "Approved":      "approved",
      "Rejected":      "rejected",
      "On-Hold":       "on-hold",
      "Not Conducted": "not-conducted",
      "Postponed":     "postponed",
    };
    const cls = map[val] || "empty";
    return <span className={`decision-badge ${cls}`}>{val || "-"}</span>;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap');

        .pm-wrap * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }

        .pm-table tbody tr:hover { background: #f4faf6; }

        .meeting-no-badge {
          display: inline-block; background: #e6f4ec; color: #1a6640;
          font-weight: 700; font-size: 12.5px; padding: 3px 10px;
          border-radius: 6px; letter-spacing: 0.3px;
        }
        .subject-type-pill {
          display: inline-block; background: #eaf3fb; color: #1565a8;
          font-size: 12px; font-weight: 600; padding: 3px 9px; border-radius: 20px;
        }
        .time-badge {
          display: inline-block; background: #e6f4ec; color: #1a6640;
          font-size: 12.5px; font-weight: 700; padding: 3px 10px; border-radius: 6px;
        }

        .decision-badge {
          display: inline-block; font-size: 12px; font-weight: 700;
          padding: 3px 10px; border-radius: 20px; white-space: nowrap;
        }
        .decision-badge.approved    { background: #e6f4ec; color: #1a6640; }
        .decision-badge.rejected    { background: #fdecea; color: #c0392b; }
        .decision-badge.on-hold     { background: #fff8e1; color: #b07a00; }
        .decision-badge.not-conducted { background: #f3f3f3; color: #6a6a6a; }
        .decision-badge.postponed   { background: #eee8ff; color: #6a3ab0; }
        .decision-badge.empty       { background: #f3f3f3; color: #aaa; }

        .pm-table th {
          font-size: 13px; font-weight: 700; color: #3a6b50;
          padding: 11px 14px; text-align: left; background: #f0f7f2;
          border-bottom: 2px solid #d6ede0; white-space: nowrap;
        }
        .pm-table td {
          font-size: 13.5px; font-weight: 500; color: #2d3d35;
          padding: 11px 14px; border-bottom: 1px solid #eef4ee; vertical-align: middle;
        }
        .pm-table td:first-child { color: #8aaa95; font-weight: 600; font-size: 13px; }

        .pm-search {
          font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 500;
          color: #2d3d35; border: 1.5px solid #c8e0cc; border-radius: 8px;
          padding: 8px 13px; outline: none; transition: border-color 0.2s;
        }
        .pm-search:focus { border-color: #1a7a4a; }

        .pm-input {
          font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 500;
          width: 100%; padding: 10px 12px; border-radius: 8px;
          border: 1.5px solid #c8e0cc; outline: none; color: #2d3d35;
          transition: border-color 0.2s;
        }
        .pm-input:focus { border-color: #1a7a4a; }

        .pm-label {
          font-family: 'Nunito Sans', sans-serif; font-size: 12px; font-weight: 700;
          color: #5a7a6a; margin-bottom: 4px; display: block;
        }

        .pm-btn-primary {
          font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 700;
          background: #1a7a4a; color: #fff; border: none; border-radius: 8px;
          padding: 10px 20px; cursor: pointer; letter-spacing: 0.2px; transition: background 0.15s;
        }
        .pm-btn-primary:hover { background: #155e39; }
        .pm-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

        .pm-btn-cancel {
          font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 600;
          background: #eef2ee; color: #4a6a5a; border: none; border-radius: 8px;
          padding: 10px 20px; cursor: pointer;
        }
        .pm-btn-cancel:hover { background: #e0e8e2; }

        .pm-btn-edit {
          font-family: 'Nunito Sans', sans-serif; font-size: 12.5px; font-weight: 600;
          background: #e8f4fd; color: #1a6aaa; border: none; border-radius: 6px;
          padding: 5px 11px; cursor: pointer;
        }
        .pm-btn-edit:hover { background: #d0e8f8; }

        .pm-btn-delete {
          font-family: 'Nunito Sans', sans-serif; font-size: 12.5px; font-weight: 600;
          background: #fdecea; color: #c0392b; border: none; border-radius: 6px;
          padding: 5px 11px; cursor: pointer;
        }
        .pm-btn-delete:hover { background: #fad4d0; }

        .pm-card {
          border: 1px solid #e0ede5; border-radius: 10px;
          padding: 13px; background: #f9fdf9; margin-bottom: 10px;
        }
        .pm-card-row {
          display: flex; justify-content: space-between; font-size: 13px;
          font-weight: 500; padding: 4px 0; border-bottom: 1px solid #eef4ee; color: #2d3d35;
        }
        .pm-card-label { color: #5a7a6a; font-weight: 700; min-width: 110px; font-size: 12.5px; }

        .pm-title { font-size: 22px; font-weight: 800; color: #1a4a2e; margin: 0 0 3px 0; letter-spacing: -0.3px; }
        .pm-subtitle { font-size: 13px; font-weight: 500; color: #7a9a88; margin: 0 0 14px 0; }
        .pm-section-title { font-size: 15px; font-weight: 800; color: #1a4a2e; margin: 0; }
        .pm-modal-title { font-size: 17px; font-weight: 800; color: #1a4a2e; margin: 0; }
        .pm-delete-title { font-size: 17px; font-weight: 700; color: #1a4a2e; margin-bottom: 6px; }
        .pm-delete-sub { font-size: 13.5px; color: #8a9a90; margin-bottom: 20px; font-weight: 500; }

        /* ── MeetingRecorder styles ── */
        .mr-wrap * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }

        .mr-vad-ring {
          width: 62px; height: 62px; border-radius: 50%; border: 3px solid #d6ede0;
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; background: #f7fbf8; flex-shrink: 0;
          transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
        }
        .mr-vad-ring.speaking {
          border-color: #1a7a4a; background: #e6f4ec;
          animation: mrRingPulse 1s ease-in-out infinite;
        }
        @keyframes mrRingPulse {
          0%, 100% { box-shadow: 0 0 0 4px rgba(26,122,74,0.18), 0 0 0 10px rgba(26,122,74,0.07); }
          50%       { box-shadow: 0 0 0 9px rgba(26,122,74,0.22), 0 0 0 18px rgba(26,122,74,0.04); }
        }

        .mr-rec-dot {
          display: inline-block; width: 8px; height: 8px; background: #e53935;
          border-radius: 50%; animation: mrRecPulse 1s infinite; margin-right: 5px; vertical-align: middle;
        }
        @keyframes mrRecPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }

        .mr-transcript-box {
          background: #f7fbf8; border: 1.5px solid #d6ede0; border-radius: 10px;
          padding: 12px; min-height: 80px; max-height: 150px; overflow-y: auto;
          font-size: 13.5px; font-weight: 500; color: #2d3d35; line-height: 1.75;
          white-space: pre-wrap;
        }
        .mr-interim { color: #9ab5a0; font-style: italic; }

        .mr-decision-box {
          background: #eaf4ff; border: 1.5px solid #b3d4f0; border-radius: 10px;
          padding: 12px; font-size: 13.5px; font-weight: 500;
          color: #1a3a5a; line-height: 1.75; white-space: pre-wrap;
        }

        .mr-btn {
          font-family: 'Nunito Sans', sans-serif; font-weight: 700; font-size: 13px;
          border: none; border-radius: 8px; padding: 8px 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 5px;
          transition: background 0.15s, opacity 0.15s;
        }
        .mr-btn:disabled { opacity: 0.45; cursor: not-allowed; }
        .mr-btn-green { background: #1a7a4a; color: #fff; }
        .mr-btn-green:hover:not(:disabled) { background: #155e39; }
        .mr-btn-grey  { background: #eef2ee; color: #4a6a5a; }
        .mr-btn-grey:hover:not(:disabled)  { background: #e0e8e2; }
        .mr-btn-blue  { background: #e8f4fd; color: #1565a8; }
        .mr-btn-blue:hover:not(:disabled)  { background: #cce4f8; }
        .mr-btn-red   { background: #fdecea; color: #c0392b; }
        .mr-btn-red:hover:not(:disabled)   { background: #fbd0cc; }
        .mr-btn-teal  { background: #e0f7f4; color: #00695c; }
        .mr-btn-teal:hover:not(:disabled)  { background: #b2ebf2; }

        .mr-toggle {
          display: inline-flex; align-items: center; gap: 8px;
          background: #f0f7f2; border-radius: 8px; padding: 7px 12px;
          cursor: pointer; user-select: none; margin-bottom: 8px;
        }
        .mr-toggle-track {
          width: 36px; height: 20px; border-radius: 20px; background: #c8d8c8;
          position: relative; transition: background 0.2s; flex-shrink: 0;
        }
        .mr-toggle-track.on { background: #1a7a4a; }
        .mr-toggle-thumb {
          width: 16px; height: 16px; border-radius: 50%; background: #fff;
          position: absolute; top: 2px; left: 2px;
          transition: transform 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
        .mr-toggle-track.on .mr-toggle-thumb { transform: translateX(16px); }

        .mr-lbl {
          font-size: 11.5px; font-weight: 800; color: #5a7a6a;
          text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 5px;
        }
        .mr-status { font-size: 12px; font-weight: 600; color: #7a9a88; min-height: 16px; }

        .mr-spinner {
          display: inline-block; width: 13px; height: 13px;
          border: 2px solid #b3d4f0; border-top-color: #1565a8;
          border-radius: 50%; animation: mrSpin 0.7s linear infinite;
        }
        @keyframes mrSpin { to { transform: rotate(360deg); } }

        .mr-use-btn {
          font-family: 'Nunito Sans', sans-serif; font-weight: 700; font-size: 13px;
          background: #1a7a4a; color: #fff; border: none; border-radius: 7px;
          padding: 7px 16px; cursor: pointer; margin-top: 8px; display: inline-block;
        }
        .mr-use-btn:hover { background: #155e39; }

        /* Recorder toggle button in Edit Modal */
        .pm-recorder-toggle {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Nunito Sans', sans-serif; font-size: 13px; font-weight: 700;
          background: #f0f7f2; color: #1a5a38; border: 1.5px solid #c8e0cc;
          border-radius: 8px; padding: 8px 14px; cursor: pointer;
          transition: background 0.15s, border-color 0.15s;
        }
        .pm-recorder-toggle:hover { background: #e4f2e8; border-color: #1a7a4a; }
        .pm-recorder-toggle.active { background: #e6f4ec; border-color: #1a7a4a; color: #1a4a2e; }

        /* Recorder section in modal */
        .pm-recorder-section {
          border: 1.5px solid #d6ede0; border-radius: 10px;
          padding: 14px; background: #f7fbf8; margin-top: 4px;
          grid-column: span 2;
        }
      `}</style>

      <div className="pm-wrap" style={{ background: "#f0f4f0", minHeight: "100vh", padding: isMobile ? 12 : 24 }}>

        {/* Toast */}
        {toast && (
          <div style={{
            position: "fixed", top: 16, right: 16, left: isMobile ? 16 : "auto",
            background: toast.type === "success" ? "#1a7a4a" : "#c0392b",
            color: "#fff", padding: "10px 18px", borderRadius: 8, fontWeight: 700,
            fontSize: 13.5, zIndex: 9999, fontFamily: "'Nunito Sans', sans-serif",
          }}>
            {toast.msg}
          </div>
        )}

        {/* Header */}
        <div style={{ marginBottom: 16 }}>
          <h1 className="pm-title">Meeting Proceedings</h1>
          <p className="pm-subtitle">Sabha Kamkaj manage करा</p>
          <button className="pm-btn-primary" onClick={openCreateModal}>+ Create Meeting</button>
        </div>

        {/* Table card */}
        <div style={{ background: "#fff", borderRadius: 12, padding: isMobile ? 12 : 20, overflowX: "auto" }}>
          <div style={{
            display: "flex", flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center",
            gap: 10, marginBottom: 15,
          }}>
            <h3 className="pm-section-title">Records ({meetings.length})</h3>
            <input
              className="pm-search"
              placeholder="Search meeting no..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: isMobile ? "100%" : "auto" }}
            />
          </div>

          {/* Mobile cards */}
          {isMobile ? (
            <div>
              {loading ? (
                <div style={{ textAlign: "center", padding: 20, color: "#8a9a90", fontFamily: "'Nunito Sans', sans-serif" }}>Loading...</div>
              ) : meetings.length === 0 ? (
                <div style={{ textAlign: "center", padding: 20, fontFamily: "'Nunito Sans', sans-serif", color: "#8a9a90" }}>No records found</div>
              ) : (
                meetings.map((m, i) => (
                  <div className="pm-card" key={m._id}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontWeight: 800, color: "#1a4a2e", fontSize: 14, fontFamily: "'Nunito Sans', sans-serif" }}>
                        #{i + 1} — <span className="meeting-no-badge">{m.meetingNumber}</span>
                      </span>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button className="pm-btn-edit" onClick={() => openEditModal(m)}>✏️</button>
                        <button className="pm-btn-delete" onClick={() => setDeleteConfirm(m._id)}>🗑️</button>
                      </div>
                    </div>
                    <div className="pm-card-row"><span className="pm-card-label">Type</span><span>{m.meetingType || "-"}</span></div>
                    <div className="pm-card-row"><span className="pm-card-label">Date</span><span>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</span></div>
                    <div className="pm-card-row"><span className="pm-card-label">Time</span><span className="time-badge">{formatTime(m.meetingTime)}</span></div>
                    <div className="pm-card-row"><span className="pm-card-label">Subject ID</span><span>{m.subjectId || "-"}</span></div>
                    <div className="pm-card-row"><span className="pm-card-label">Subject Type</span><span className="subject-type-pill">{m.subjectType || "-"}</span></div>
                    <div className="pm-card-row"><span className="pm-card-label">Subject Name</span><span>{m.subjectName || "-"}</span></div>
                    <div className="pm-card-row"><span className="pm-card-label">Decision</span><span>{decisionBadge(m.decisionInMeeting)}</span></div>
                  </div>
                ))
              )}
            </div>
          ) : (
            /* Desktop table */
            <table className="pm-table" style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["#", "Meeting No", "Type", "Date", "Time", "Subject ID", "Subject Type", "Subject Name", "Decision In Meeting", "Actions"].map(h => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={10} style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>Loading...</td></tr>
                ) : meetings.length === 0 ? (
                  <tr><td colSpan={10} style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>No records found</td></tr>
                ) : (
                  meetings.map((m, i) => (
                    <tr key={m._id}>
                      <td>{i + 1}</td>
                      <td><span className="meeting-no-badge">{m.meetingNumber}</span></td>
                      <td>{m.meetingType}</td>
                      <td>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</td>
                      <td><span className="time-badge">{formatTime(m.meetingTime)}</span></td>
                      <td>{m.subjectId}</td>
                      <td><span className="subject-type-pill">{m.subjectType || "-"}</span></td>
                      <td>{m.subjectName}</td>
                      <td>{decisionBadge(m.decisionInMeeting)}</td>
                      <td>
                        <div style={{ display: "flex", gap: 6 }}>
                          <button className="pm-btn-edit" onClick={() => openEditModal(m)}>✏️ Edit</button>
                          <button className="pm-btn-delete" onClick={() => setDeleteConfirm(m._id)}>🗑️ Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>

        {/* Create / Edit Modal */}
        {showModal && (
          <div style={modalOverlay}>
            <div style={{
              background: "#fff", borderRadius: 12, padding: isMobile ? 16 : 25,
              width: isMobile ? "95%" : "100%", maxWidth: 560,
              maxHeight: "90vh", overflowY: "auto",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                <h3 className="pm-modal-title">{editId ? "Edit Meeting" : "Create Meeting"}</h3>
                <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "#8a9a90" }}>✕</button>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label className="pm-label">Meeting Number</label>
                  <input className="pm-input" name="meetingNumber" placeholder="Meeting Number" value={formData.meetingNumber} onChange={handleChange} />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label className="pm-label">Type Of Meeting</label>
                  <select className="pm-input" name="meetingType" value={formData.meetingType} onChange={handleChange}>
                    <option value="">Select Type</option>
                    <option>General Body</option>
                    <option>Standing Committee</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label className="pm-label">Meeting Date</label>
                  <input className="pm-input" name="meetingDate" type="date" value={formData.meetingDate} onChange={handleChange} />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label className="pm-label">Meeting Time</label>
                  <div style={{ display: "flex", gap: 6 }}>
                    <select className="pm-input" name="meetingHour" value={formData.meetingHour} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
                      <option value="">HH</option>
                      {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")).map(h => (
                        <option key={h} value={h}>{h}</option>
                      ))}
                    </select>
                    <select className="pm-input" name="meetingMinute" value={formData.meetingMinute} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
                      <option value="">MM</option>
                      {["00","05","10","15","20","25","30","35","40","45","50","55"].map(m => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                    <select className="pm-input" name="meetingAmpm" value={formData.meetingAmpm} onChange={handleChange} style={{ flex: 1, padding: "10px 4px" }}>
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label className="pm-label">Subject ID</label>
                  <input className="pm-input" name="subjectId" placeholder="Subject ID" value={formData.subjectId} onChange={handleChange} />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label className="pm-label">Subject Type</label>
                  <select className="pm-input" name="subjectType" value={formData.subjectType} onChange={handleChange}>
                    <option value="">Select Subject Type</option>
                    <option>General</option>
                    <option>Administrative and Financial Approval</option>
                    <option>Contract Approval</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
                  <label className="pm-label">Subject Name</label>
                  <input className="pm-input" name="subjectName" placeholder="Subject Name" value={formData.subjectName} onChange={handleChange} />
                </div>

                {/* Decision In Meeting — only in Edit Modal */}
                {editId && (
                  <>
                    <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
                      <label className="pm-label">Decision In Meeting</label>
                      <select
                        className="pm-input"
                        name="decisionInMeeting"
                        value={formData.decisionInMeeting}
                        onChange={handleChange}
                      >
                        <option value="">Select Decision</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                        <option value="On-Hold">On-Hold</option>
                        <option value="Not Conducted">Not Conducted</option>
                        <option value="Postponed">Postponed</option>
                      </select>
                    </div>

                    {/* Meeting Recorder toggle */}
                    <div style={{ gridColumn: isMobile ? "1" : "span 2" }}>
                      <button
                        className={`pm-recorder-toggle ${showRecorder ? "active" : ""}`}
                        onClick={() => setShowRecorder(v => !v)}
                        type="button"
                      >
                        🎙️ {showRecorder ? "Hide Meeting Recorder" : "Record Meeting & Auto-Extract Decisions"}
                      </button>
                    </div>

                    {/* Manual audio file upload */}
                    <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
                      <label className="pm-label">Upload Meeting Recording (optional)</label>
                      <div style={{
                        border: "1.5px dashed #c8e0cc", borderRadius: 8,
                        padding: "10px 14px", background: "#f7fbf8",
                        display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
                      }}>
                        <label style={{
                          fontFamily: "'Nunito Sans', sans-serif", fontSize: 13, fontWeight: 700,
                          background: "#e6f4ec", color: "#1a6640", border: "1.5px solid #c8e0cc",
                          borderRadius: 7, padding: "6px 14px", cursor: "pointer",
                        }}>
                          📁 Choose File
                          <input
                            type="file"
                            accept="audio/*,video/webm"
                            style={{ display: "none" }}
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) setManualRecordingFile(file);
                            }}
                          />
                        </label>
                        {manualRecordingFile ? (
                          <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
                            <span style={{ fontSize: 12.5, fontWeight: 600, color: "#1a4a2e" }}>
                              🎵 {manualRecordingFile.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => setManualRecordingFile(null)}
                              style={{
                                background: "#fdecea", color: "#c0392b", border: "none",
                                borderRadius: 5, padding: "3px 8px", cursor: "pointer",
                                fontSize: 11, fontWeight: 700,
                              }}
                            >✕ Remove</button>
                          </div>
                        ) : meetingRecording ? (
                          <span style={{ fontSize: 12.5, fontWeight: 600, color: "#1a4a2e" }}>
                            🔴 Auto-recording saved
                          </span>
                        ) : (
                          <span style={{ fontSize: 12.5, color: "#9ab5a0", fontWeight: 500 }}>
                            No file chosen — or use recorder below
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Recorder section (collapsible) */}
                    {showRecorder && (
                      <div className="pm-recorder-section" style={{ gridColumn: isMobile ? "1" : "span 2" }}>
                        <MeetingRecorder
                          // onDecisionExtracted={(text) => {
                          //   aiExtractedDecisionRef.current = text;
                          //   setAiExtractedDecision(text);
                          //   showToast("AI decisions saved! ✅");
                          // }}

// Modal मधला MeetingRecorder component — हे बदला
// onDecisionExtracted={(text) => {
//   const trimmed = text?.trim() || "";
//   aiExtractedDecisionRef.current = trimmed;   // ← ref लगेच update
//   setAiExtractedDecision(trimmed);            // ← state for UI
//   showToast("AI decisions saved! ✅");
// }}

onDecisionExtracted={(text) => {
  const trimmed = text?.trim() || "";
  aiExtractedDecisionRef.current = trimmed; // ← हे आधी
  setAiExtractedDecision(trimmed);
  showToast("AI decisions saved! ✅");
}}




                          // onRecordingReady={(url) => {
                          //   meetingRecordingRef.current = url;
                          //   setMeetingRecording(url);
                          //   showToast("Recording auto-saved! 🔴");
                          // }}

onRecordingReady={(url) => {
  meetingRecordingRef.current = url; // ← हे आधी
  setMeetingRecording(url);
  showToast("Recording auto-saved! 🔴");
}}

                          onTranscriptUpdate={() => {}}
                        />
                        {/* AI decision preview */}
                        {aiExtractedDecision && (
                          <div style={{
                            marginTop: 10, background: "#eaf4ff", border: "1.5px solid #b3d4f0",
                            borderRadius: 8, padding: "10px 12px",
                            fontSize: 13, fontWeight: 500, color: "#1a3a5a", lineHeight: 1.7,
                            whiteSpace: "pre-wrap"
                          }}>
                            <div style={{ fontWeight: 800, color: "#1565a8", marginBottom: 4, fontSize: 11.5, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                              ✅ AI Extracted Decision (will be saved)
                            </div>
                            {aiExtractedDecision}
                          </div>
                        )}
                        {/* Auto recording indicator */}
                        {meetingRecording && !manualRecordingFile && (
                          <div style={{
                            marginTop: 8, background: "#e6f4ec", border: "1.5px solid #c8e0cc",
                            borderRadius: 8, padding: "8px 12px",
                            fontSize: 12.5, fontWeight: 600, color: "#1a4a2e",
                            display: "flex", alignItems: "center", gap: 6,
                          }}>
                            🔴 Auto-recording captured and will be saved with this meeting
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}

              </div>

              <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
                <button className="pm-btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="pm-btn-primary" onClick={handleSubmit} disabled={loading}>
                  {loading ? "Saving..." : editId ? "Update" : "Save"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirm Modal */}
        {deleteConfirm && (
          <div style={modalOverlay}>
            <div style={{
              background: "#fff", padding: 28, borderRadius: 12,
              maxWidth: 380, width: isMobile ? "90%" : "100%", textAlign: "center",
            }}>
              <p className="pm-delete-title">Delete Meeting?</p>
              <p className="pm-delete-sub">He record permanently delete होईल. Sure aahes ka?</p>
              <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                <button className="pm-btn-cancel" onClick={() => setDeleteConfirm(null)}>Cancel</button>
                <button
                  className="pm-btn-primary"
                  style={{ background: "#c0392b" }}
                  onClick={() => handleDelete(deleteConfirm)}
                  disabled={loading}
                >
                  {loading ? "Deleting..." : "Yes, Delete"}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}

const modalOverlay = {
  position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
  display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000,
  padding: 16,
};