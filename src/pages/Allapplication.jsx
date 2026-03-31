// // ***JANSANWAD***

// import React, { useState, useEffect } from "react";
// import JansanwadAppform from "./JansanwadAppform";
// import axiosInstance from "../services/axiosInstance";
// import { useNavigate } from "react-router-dom";
// const statusConfig = {
//   Pending:      { dot: "bg-yellow-400", text: "text-yellow-700", bg: "bg-yellow-50",  border: "border-yellow-200", label: "Pending"     },
//   Resolved:     { dot: "bg-green-500",  text: "text-green-700",  bg: "bg-green-50",   border: "border-green-200",  label: "Resolved"    },
//   Rejected:     { dot: "bg-red-500",    text: "text-red-700",    bg: "bg-red-50",     border: "border-red-200",    label: "Rejected"    },
//   "In Progress":{ dot: "bg-blue-500",   text: "text-blue-700",   bg: "bg-blue-50",    border: "border-blue-200",   label: "In Progress" },
// };

// const priorityConfig = {
//   Normal:    { color: "text-gray-600",   bg: "bg-gray-100",    border: "border-gray-200"   },
//   Urgent:    { color: "text-orange-700", bg: "bg-orange-50",   border: "border-orange-200" },
//   Emergency: { color: "text-red-700",    bg: "bg-red-50",      border: "border-red-200"    },
//   High:      { color: "text-red-700",    bg: "bg-red-50",      border: "border-red-200"    },
// };

// const avatarColors = [
//   "bg-blue-500","bg-teal-500","bg-violet-500",
//   "bg-pink-500","bg-amber-500","bg-cyan-500","bg-emerald-500","bg-rose-500",
// ];

// function Avatar({ name, index }) {
//   const initials = name ? name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase() : "?";
//   const color = avatarColors[index % avatarColors.length];
//   return (
//     <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm ring-2 ring-white`}>
//       {initials}
//     </div>
//   );
// }

// function StatusBadge({ status }) {
//   const cfg = statusConfig[status] || statusConfig["Pending"];
//   return (
//     <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
//       <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
//       {cfg.label}
//     </span>
//   );
// }

// function PriorityBadge({ priority }) {
//   const cfg = priorityConfig[priority] || priorityConfig["Normal"];
//   const icon = (priority === "Urgent" || priority === "Emergency" || priority === "High") ? "🔴" : "⚪";
//   return (
//     <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-bold border ${cfg.bg} ${cfg.color} ${cfg.border}`}>
//       {icon} {priority}
//     </span>
//   );
// }

// function formatDate(dateStr) {
//   if (!dateStr) return "--";
//   const d = new Date(dateStr);
//   return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
// }

// // ─────────────────────────────────────────────
// //  REPLY MODAL
// // ─────────────────────────────────────────────
// function ReplyModal({ record, onClose, onSubmit }) {
//   const [replyText, setReplyText]     = useState("");
//   const [newStatus, setNewStatus]     = useState(record.status || "Pending");
//   const [newPriority, setNewPriority] = useState(record.priority || "Normal");
//   const [submitting, setSubmitting]   = useState(false);

//   if (!record) return null;

//   const handleSubmit = async () => {
//     if (!replyText.trim()) {
//       alert("कृपया reply message लिहा.");
//       return;
//     }
//     setSubmitting(true);
//     await onSubmit({
//       applicationId: record._id,
//       replyMessage:  replyText,
//       status:        newStatus,
//       priority:      newPriority,
//     });
//     setSubmitting(false);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-indigo-600 to-blue-600 rounded-t-2xl">
//           <div>
//             <p className="text-xs text-indigo-200 font-medium tracking-wide uppercase">Reply to Application</p>
//             <h2 className="text-lg font-bold text-white">{record.inwardNo} — {record.fullName}</h2>
//           </div>
//           <button
//             onClick={onClose}
//             className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white font-bold transition-colors text-sm"
//           >✕</button>
//         </div>

//         <div className="p-6 space-y-5">

//           {/* Applicant quick info */}
//           <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
//             <div>
//               <p className="text-xs text-gray-400">Applicant</p>
//               <p className="font-medium text-gray-800">{record.fullName || "--"}</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Mobile</p>
//               <p className="font-medium text-gray-800">{record.mobile || "--"}</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Subject</p>
//               <p className="font-medium text-gray-800">{record.subject || "--"}</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Office</p>
//               <p className="font-medium text-gray-800">{record.office || "--"}</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Submitted By</p>
//               <p className="font-medium text-gray-800">
//                 {record.submittedByName || "--"}
//                 {record.submittedByRole && (
//                   <span className="ml-1.5 text-xs text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
//                     {record.submittedByRole}
//                   </span>
//                 )}
//               </p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Submitted On</p>
//               <p className="font-medium text-gray-800">{record.submissionDate ? new Date(record.submissionDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "--"}</p>
//             </div>
//           </div>

//           {/* Status Change */}
//           <div>
//             <label className="block text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1.5">
//               Status बदला
//             </label>
//             <div className="flex flex-wrap gap-2">
//               {["Pending", "In Progress", "Resolved", "Rejected"].map((s) => {
//                 const cfg = statusConfig[s];
//                 const active = newStatus === s;
//                 return (
//                   <button
//                     key={s}
//                     onClick={() => setNewStatus(s)}
//                     className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all
//                       ${active ? `${cfg.bg} ${cfg.text} ${cfg.border} ring-2 ring-offset-1 ring-blue-400` : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`}
//                   >
//                     <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
//                     {s}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Priority Change — Resolved असेल तर लपवा */}
//           {newStatus !== "Resolved" && (
//           <div>
//             <label className="block text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1.5">
//               Priority बदला
//             </label>
//             <div className="flex flex-wrap gap-2">
//               {["Normal", "High", "Urgent", "Emergency"].map((p) => {
//                 const cfg = priorityConfig[p];
//                 const active = newPriority === p;
//                 return (
//                   <button
//                     key={p}
//                     onClick={() => setNewPriority(p)}
//                     className={`inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-bold border transition-all
//                       ${active ? `${cfg.bg} ${cfg.color} ${cfg.border} ring-2 ring-offset-1 ring-blue-400` : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`}
//                   >
//                     {p === "Normal" ? "⚪" : "🔴"} {p}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//           )}

//           {/* Reply Message */}
//           <div>
//             <label className="block text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1.5">
//               Reply Message <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               rows={5}
//               placeholder="Applicant ला reply message लिहा..."
//               value={replyText}
//               onChange={(e) => setReplyText(e.target.value)}
//               className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 resize-none"
//             />
//             <p className="text-xs text-gray-400 mt-1 text-right">{replyText.length} characters</p>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex items-center justify-end gap-3 pt-2">
//             <button
//               onClick={onClose}
//               className="px-5 py-2.5 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSubmit}
//               disabled={submitting}
//               className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl hover:from-indigo-700 hover:to-blue-700 disabled:opacity-60 transition-all shadow-md flex items-center gap-2"
//             >
//               {submitting ? (
//                 <>
//                   <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                   Sending…
//                 </>
//               ) : (
//                 <>📨 Send Reply</>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// //  DETAIL MODAL (unchanged)
// // ─────────────────────────────────────────────
// function DetailModal({ record, onClose }) {
//   if (!record) return null;
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl">
//           <div>
//             <p className="text-xs text-blue-200 font-medium tracking-wide uppercase">Application Detail</p>
//             <h2 className="text-lg font-bold text-white">{record.inwardNo}</h2>
//           </div>
//           <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white font-bold transition-colors text-sm">✕</button>
//         </div>
//         <div className="p-6 space-y-5">
//           <Section title="Citizen Details">
//             <Row label="Full Name"  value={record.fullName} />
//             <Row label="Mobile"     value={record.mobile} />
//             <Row label="Email"      value={record.email} />
//             <Row label="Category"   value={record.category} />
//             <Row label="Ward No"    value={record.wardNo} />
//             <Row label="Address"    value={record.address} />
//             <Row label="Pincode"    value={record.pincode} />
//             <Row label="Taluka"     value={record.taluka} />
//             <Row label="District"   value={record.district} />
//           </Section>
//           <Section title="Identity">
//             <Row label="Type"   value={record.identityType} />
//             <Row label="Number" value={record.identityNumber} />
//           </Section>
//           <Section title="Complaint">
//             <Row label="Subject"     value={record.subject} />
//             <Row label="Description" value={record.description} />
//           </Section>
//           <Section title="Office & Workflow">
//             <Row label="Office"          value={record.office} />
//             <Row label="Main Department" value={record.mainDepartment} />
//             <Row label="Sub Department"  value={record.subDepartment} />
//             {record.status !== "Resolved" && <Row label="Priority" value={record.priority} />}
//             <Row label="Tag To"          value={Array.isArray(record.tagTo) ? record.tagTo.join(", ") : record.tagTo} />
//             <Row label="Follow Up"       value={record.followUp} />
//             <Row label="Status"          value={record.status} />
//             <Row label="Submitted On"    value={formatDate(record.submissionDate)} />
//             {/* Resolved By */}
//             {record.status === "Resolved" && (() => {
//               const resolvedReply = record.replies?.find((r) => r.status === "Resolved");
//               if (!resolvedReply) return null;
//               return (
//                 <>
//                   <Row label="Resolved By"   value={resolvedReply.repliedByName || "—"} />
//                   <Row label="Resolved Role"  value={resolvedReply.repliedByRole || "—"} />
//                   <Row label="Resolved On"    value={resolvedReply.createdAt ? new Date(resolvedReply.createdAt).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" }) : "—"} />
//                 </>
//               );
//             })()}
//           </Section>
//           {record.documents && (
//             <Section title="Document">
//               <a href={record.documents} target="_blank" rel="noreferrer"
//                 className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
//                 📄 View Document
//               </a>
//             </Section>
//           )}

//           {/* ── REPLIES / RESOLVED BY ── */}
//           {record.replies && record.replies.length > 0 && (
//             <div>
//               <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
//                 Replies ({record.replies.length})
//               </p>
//               <div className="space-y-3">
//                 {record.replies.map((reply, i) => {
//                   const cfg = statusConfig[reply.status] || statusConfig["Pending"];
//                   const isResolved = reply.status === "Resolved";
//                   return (
//                     <div key={i} className={`rounded-xl border px-4 py-3 ${isResolved ? "bg-green-50 border-green-300" : "bg-gray-50 border-gray-200"}`}>
//                       <div className="flex items-center justify-between mb-2">
//                         <div className="flex items-center gap-2">
//                           {/* Avatar */}
//                           <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${isResolved ? "bg-green-500" : "bg-indigo-500"}`}>
//                             {reply.repliedByName ? reply.repliedByName.split(" ").map(w => w[0]).join("").slice(0,2).toUpperCase() : "?"}
//                           </div>
//                           <div>
//                             <div className="text-sm font-bold text-gray-800 leading-tight">
//                               {reply.repliedByName || "—"}
//                             </div>
//                             {reply.repliedByRole && (
//                               <div className="text-xs text-indigo-600 font-semibold">{reply.repliedByRole}</div>
//                             )}
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           {reply.status && (
//                             <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
//                               <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
//                               {reply.status}
//                             </span>
//                           )}
//                           <span className="text-xs text-gray-400">
//                             {reply.createdAt ? new Date(reply.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : ""}
//                           </span>
//                         </div>
//                       </div>
//                       <p className={`text-sm leading-relaxed pl-9 ${isResolved ? "text-green-800" : "text-gray-700"}`}>
//                         {reply.replyMessage}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function Section({ title, children }) {
//   return (
//     <div>
//       <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">{title}</p>
//       <div className="bg-gray-50 rounded-xl px-4 py-3 grid grid-cols-2 gap-x-6 gap-y-2">{children}</div>
//     </div>
//   );
// }

// function Row({ label, value }) {
//   return (
//     <div>
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="text-sm text-gray-800 font-medium">{value || "--"}</p>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// //  MAIN COMPONENT
// // ─────────────────────────────────────────────
// export default function AllApplication() {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading]           = useState(true);
//   const [search, setSearch]             = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [selected, setSelected]         = useState(null);   // Detail Modal
//   const [replyTarget, setReplyTarget]   = useState(null);   // Reply Modal

//   const navigate = useNavigate();

//   useEffect(() => { fetchApplications(); }, []);

//   const fetchApplications = async () => {
//     try {
//       setLoading(true);
//       const authUserRaw = localStorage.getItem("authUser");
//       const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;

//       const res = await axiosInstance.get("/getAllApplications", {
//         params: {
//           role:                   authUser?.role,
//           userId:                 authUser?.id,
//           userOffice:             authUser?.office,
//           userDepartmentCategory: authUser?.departmentCategory,
//         }
//       });

//       const data = res.data;
//       if (data.success) setApplications(data.data || []);
//     } catch (err) {
//       console.error("Error fetching applications:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ── Reply Submit ──
//   const handleReplySubmit = async ({ applicationId, replyMessage, status, priority }) => {
//     try {
//       const authUserRaw = localStorage.getItem("authUser");
//       const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;

//       // authUser मध्ये submittedByName / submittedByRole keys आहेत
//       const repliedByName = authUser?.submittedByName || authUser?.name || authUser?.fullName || "";
//       const repliedByRole = authUser?.submittedByRole || authUser?.role || "";
//       const repliedById   = authUser?.submittedById   || authUser?.id  || "";

//       await axiosInstance.post("/replyApplication", {
//         applicationId,
//         replyMessage,
//         status,
//         priority,
//         repliedBy:     repliedById,
//         repliedByName: repliedByName,
//         repliedByRole: repliedByRole,
//       });

//       // Local state update
//       const newReply = {
//         replyMessage,
//         status,
//         priority,
//         repliedBy:     repliedById,
//         repliedByName: repliedByName,
//         repliedByRole: repliedByRole,
//         createdAt:     new Date().toISOString(),
//       };
//       setApplications((prev) =>
//         prev.map((app) =>
//           app._id === applicationId
//             ? { ...app, status, priority, replies: [...(app.replies || []), newReply] }
//             : app
//         )
//       );

//       alert("✅ Reply यशस्वीरित्या पाठवली!");
//       setReplyTarget(null);
//     } catch (err) {
//       console.error("Reply error:", err);
//       alert("❌ Reply पाठवताना error आला. पुन्हा try करा.");
//     }
//   };

//   const filtered = applications.filter((app) => {
//     const matchSearch =
//       !search ||
//       app.fullName?.toLowerCase().includes(search.toLowerCase()) ||
//       app.inwardNo?.toLowerCase().includes(search.toLowerCase()) ||
//       app.subject?.toLowerCase().includes(search.toLowerCase()) ||
//       app.mobile?.includes(search);
//     const matchStatus = statusFilter === "All" || app.status === statusFilter;
//     return matchSearch && matchStatus;
//   });

//   const statusCounts = ["All", "Pending", "In Progress", "Resolved", "Rejected"].map((s) => ({
//     label: s,
//     count: s === "All" ? applications.length : applications.filter((a) => a.status === s).length,
//   }));

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
//               All Applications
//               <span className="text-base font-bold text-blue-600 bg-blue-100 px-3 py-0.5 rounded-full border border-blue-200">
//                 {applications.length}
//               </span>
//             </h1>
//             <p className="text-base font-medium text-gray-500 mt-1">Janata Darbar — Inward Records</p>
//           </div>
//           {/* <button onClick={fetchApplications}
//             className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 shadow-sm transition-all">
//             🔄 Refresh
//           </button> */}
//           <div className="flex items-center gap-3">
//   <button onClick={fetchApplications}
//     className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 shadow-sm transition-all">
//     🔄 Refresh
//   </button>
//   <button onClick={() => navigate("/Jansanwadappform")}
//   className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 shadow-sm transition-all">
//   ➕ Add
// </button>
// </div>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-4 mb-5 flex flex-wrap items-center gap-4">
//           <div className="relative flex-1 min-w-[200px]">
//             <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
//             <input type="text" placeholder="Search by name, inward no, subject..." value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full pl-10 pr-4 py-2.5 text-sm font-medium border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50" />
//           </div>
//           <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
//             {statusCounts.map(({ label, count }) => (
//               <button key={label} onClick={() => setStatusFilter(label)}
//                 className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${statusFilter === label ? "bg-white text-blue-600 shadow-md" : "text-gray-500 hover:text-gray-700"}`}>
//                 {label}
//                 <span className={`ml-1.5 text-xs font-bold px-1.5 py-0.5 rounded-full ${statusFilter === label ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-500"}`}>
//                   {count}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Table */}
//         <div style={{ background: "#fff", border: "1px solid #e0e0e0", borderRadius: 4, overflow: "hidden", boxShadow: "0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 1px 3px rgba(0,0,0,.12)", fontFamily: "'Roboto','Segoe UI',sans-serif" }}>
//           <style>{`
//             .mui-th { padding: 0 16px; height: 56px; font-weight: 500; font-size: .875rem; color: rgba(0,0,0,.87); text-align: left; white-space: nowrap; background: #fff; border-bottom: 1px solid rgba(224,224,224,1); }
//             .mui-tr { border-bottom: 1px solid rgba(224,224,224,1); cursor: pointer; transition: background .15s; }
//             .mui-tr:last-child { border-bottom: none; }
//             .mui-tr:hover { background: rgba(0,0,0,.04) !important; }
//             .mui-td { padding: 0 16px; height: 52px; vertical-align: middle; font-size: .875rem; }
//             .inward-chip { display:inline-block; padding: 2px 8px; background:#f5f5f5; border:1px solid #e0e0e0; border-radius:4px; font-family:monospace; font-size:.8125rem; color:rgba(0,0,0,.7); }
//             .doc-link { display:inline-flex; align-items:center; gap:4px; color:#1976d2; font-size:.875rem; font-weight:500; text-decoration:none; padding:4px 8px; border-radius:4px; }
//             .doc-link:hover { background:rgba(25,118,210,.08); }
//             .reply-btn { display:inline-flex; align-items:center; gap:4px; color:#fff; background:#4f46e5; font-size:.8125rem; font-weight:600; border:none; padding:5px 12px; border-radius:6px; cursor:pointer; transition:background .15s; }
//             .reply-btn:hover { background:#4338ca; }
//             .mui-footer { display:flex; align-items:center; justify-content:space-between; padding:0 16px; height:52px; border-top:1px solid rgba(224,224,224,1); font-size:.875rem; color:rgba(0,0,0,.6); }
//           `}</style>

//           <div style={{ overflowX: "auto" }}>
//             <table style={{ width: "100%", borderCollapse: "collapse" }}>
//               <thead>
//                 <tr>
//                   {["Reply","#","Applicant","Inward No","Status","Subject","Priority","Date","Submitted By","Reply By","Document"].map((h) => (
//                     <th key={h} className="mui-th">{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td colSpan={12} style={{ textAlign: "center", padding: "64px 0", color: "rgba(0,0,0,.38)" }}>
//                       <div style={{ width: 32, height: 32, margin: "0 auto 12px", border: "3px solid #e0e0e0", borderTopColor: "#1976d2", borderRadius: "50%", animation: "spin .8s linear infinite" }} />
//                       <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
//                       <div>Loading applications…</div>
//                     </td>
//                   </tr>
//                 ) : filtered.length === 0 ? (
//                   <tr>
//                     <td colSpan={12} style={{ textAlign: "center", padding: "64px 0", color: "rgba(0,0,0,.38)" }}>
//                       <div style={{ fontSize: 40, marginBottom: 8 }}>📭</div>
//                       <div>No applications found</div>
//                     </td>
//                   </tr>
//                 ) : (
//                   filtered.map((app, index) => {
//                     // शेवटची reply शोधा (resolvedBy साठी)
//                     const lastReply = app.replies && app.replies.length > 0
//                       ? app.replies[app.replies.length - 1]
//                       : null;
//                     const resolvedReply = app.replies?.find((r) => r.status === "Resolved") || null;

//                     return (
//                     <tr
//                       key={app._id}
//                       onClick={() => setSelected(app)}
//                       className="mui-tr"
//                       style={{ background: index % 2 === 0 ? "#fff" : "#fafafa" }}
//                     >
//                       {/* ── REPLY BUTTON — पहिला column ── */}
//                       <td className="mui-td" style={{ width: 90 }} onClick={(e) => e.stopPropagation()}>
//                         <button
//                           className="reply-btn"
//                           onClick={() => setReplyTarget(app)}
//                         >
//                           📨 Reply
//                         </button>
//                       </td>

//                       <td className="mui-td" style={{ color: "rgba(0,0,0,.54)", width: 60 }}>{index + 1}</td>
//                       <td className="mui-td" style={{ minWidth: 180 }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                           <Avatar name={app.fullName} index={index} />
//                           <div>
//                             <div style={{ fontSize: ".75rem", color: "rgba(0,0,0,.54)", marginTop: 1 }}>{app.mobile}</div>
//                             <div style={{ fontSize: ".875rem", fontWeight: 400, color: "rgba(0,0,0,.87)", lineHeight: 1.4 }}>{app.fullName}</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="mui-td" style={{ width: 130 }}><span className="inward-chip">{app.inwardNo}</span></td>
//                       <td className="mui-td" style={{ width: 110 }}><StatusBadge status={app.status} /></td>
//                       <td className="mui-td" style={{ minWidth: 160, maxWidth: 200 }}>
//                         <div style={{ fontSize: ".875rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 180 }}>{app.subject || "—"}</div>
//                         {/* <div style={{ fontSize: ".75rem", color: "rgba(0,0,0,.54)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 180 }}>{app.office}</div> */}
//                       </td>
//                       <td className="mui-td" style={{ minWidth: 140, maxWidth: 180 }}>
//                         <div style={{ fontSize: ".875rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 160 }}>{app.mainDepartment || "—"}</div>
//                         <div style={{ fontSize: ".75rem", color: "rgba(0,0,0,.54)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 160 }}>{app.subDepartment}</div>
//                       </td>
//                       <td className="mui-td" style={{ width: 100 }}>{app.status !== "Resolved" ? <PriorityBadge priority={app.priority} /> : <span style={{ color: "rgba(0,0,0,.26)" }}>—</span>}</td>
//                       <td className="mui-td" style={{ width: 110, whiteSpace: "nowrap" }}>{formatDate(app.submissionDate)}</td>

//                       {/* ── SUBMITTED BY ── */}
//                       <td className="mui-td" style={{ minWidth: 150 }}>
//                         {app.submittedByName ? (
//                           <div>
//                             <div style={{ fontSize: ".8125rem", fontWeight: 600, color: "rgba(0,0,0,.8)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 130 }}>
//                               {app.submittedByName}
//                             </div>
//                             {app.submittedByRole && (
//                               <div style={{ fontSize: ".7rem", color: "rgba(0,0,0,.4)", whiteSpace: "nowrap" }}>
//                                 {app.submittedByRole}
//                               </div>
//                             )}
//                           </div>
//                         ) : (
//                           <span style={{ color: "rgba(0,0,0,.26)" }}>—</span>
//                         )}
//                       </td>

//                       {/* ── REPLY BY — फक्त पहिला ── */}
//                       <td className="mui-td" style={{ minWidth: 150 }}>
//                         {app.replies && app.replies.length > 0 ? (() => {
//                           const firstReply = app.replies[0];
//                           const isResolved = firstReply.status === "Resolved";
//                           const moreCount  = app.replies.length - 1;
//                           return (
//                             <div>
//                               <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
//                                 <span style={{ width: 7, height: 7, borderRadius: "50%", flexShrink: 0, background: isResolved ? "#22c55e" : "#6366f1", display: "inline-block" }} />
//                                 <div style={{ fontSize: ".8125rem", fontWeight: 600, color: isResolved ? "#15803d" : "rgba(0,0,0,.8)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 120 }}>
//                                   {firstReply.repliedByName || "—"}
//                                 </div>
//                               </div>
//                               {firstReply.repliedByRole && (
//                                 <div style={{ fontSize: ".7rem", color: "rgba(0,0,0,.4)", whiteSpace: "nowrap", paddingLeft: 11 }}>
//                                   {firstReply.repliedByRole}
//                                 </div>
//                               )}
//                               {moreCount > 0 && (
//                                 <div style={{ fontSize: ".7rem", color: "#6366f1", fontWeight: 600, paddingLeft: 11, marginTop: 1 }}>
//                                   +{moreCount} more
//                                 </div>
//                               )}
//                             </div>
//                           );
//                         })() : (
//                           <span style={{ color: "rgba(0,0,0,.26)" }}>—</span>
//                         )}
//                       </td>

//                       <td className="mui-td" style={{ width: 80 }} onClick={(e) => e.stopPropagation()}>
//                         {app.documents ? (
//                           <a href={app.documents} target="_blank" rel="noreferrer" className="doc-link">
//                             <svg viewBox="0 0 24 24" width="16" height="16" fill="#1976d2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
//                             View
//                           </a>
//                         ) : (
//                           <span style={{ color: "rgba(0,0,0,.26)" }}>—</span>
//                         )}
//                       </td>
//                     </tr>
//                     );
//                   })
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {!loading && filtered.length > 0 && (
//             <div className="mui-footer">
//               <span>Showing <strong style={{ color: "rgba(0,0,0,.87)" }}>{filtered.length}</strong> of{" "}
//                 <strong style={{ color: "rgba(0,0,0,.87)" }}>{applications.length}</strong> applications</span>
//               <span style={{ color: "rgba(0,0,0,.38)", fontSize: ".8125rem" }}>👆 Click any row to view full details</span>
//             </div>
//           )}
//         </div>

//       </div>

//       {/* Detail Modal */}
//       {selected && <DetailModal record={selected} onClose={() => setSelected(null)} />}

//       {/* Reply Modal */}
//       {replyTarget && (
//         <ReplyModal
//           record={replyTarget}
//           onClose={() => setReplyTarget(null)}
//           onSubmit={handleReplySubmit}
//         />
//       )}
//     </div>
//   );
// }





// ***JANSANWAD***

// import React, { useState, useEffect } from "react";
// import JansanwadAppform from "./JansanwadAppform";
// import axiosInstance from "../services/axiosInstance";
// import { useNavigate } from "react-router-dom";

// const statusConfig = {
//   Pending:      { dot: "bg-yellow-400", text: "text-yellow-700", bg: "bg-yellow-50",  border: "border-yellow-200", label: "Pending"     },
//   Resolved:     { dot: "bg-green-500",  text: "text-green-700",  bg: "bg-green-50",   border: "border-green-200",  label: "Resolved"    },
//   Rejected:     { dot: "bg-red-500",    text: "text-red-700",    bg: "bg-red-50",     border: "border-red-200",    label: "Rejected"    },
//   "In Progress":{ dot: "bg-blue-500",   text: "text-blue-700",   bg: "bg-blue-50",    border: "border-blue-200",   label: "In Progress" },
// };

// const priorityConfig = {
//   Normal:    { color: "text-gray-600",   bg: "bg-gray-100",    border: "border-gray-200"   },
//   Urgent:    { color: "text-orange-700", bg: "bg-orange-50",   border: "border-orange-200" },
//   Emergency: { color: "text-red-700",    bg: "bg-red-50",      border: "border-red-200"    },
//   High:      { color: "text-red-700",    bg: "bg-red-50",      border: "border-red-200"    },
// };

// const avatarColors = [
//   "bg-blue-500","bg-teal-500","bg-violet-500",
//   "bg-pink-500","bg-amber-500","bg-cyan-500","bg-emerald-500","bg-rose-500",
// ];

// function Avatar({ name, index }) {
//   const initials = name ? name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase() : "?";
//   const color = avatarColors[index % avatarColors.length];
//   return (
//     <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm ring-2 ring-white`}>
//       {initials}
//     </div>
//   );
// }

// function StatusBadge({ status }) {
//   const cfg = statusConfig[status] || statusConfig["Pending"];
//   return (
//     <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
//       <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
//       {cfg.label}
//     </span>
//   );
// }

// function PriorityBadge({ priority }) {
//   const cfg = priorityConfig[priority] || priorityConfig["Normal"];
//   const icon = (priority === "Urgent" || priority === "Emergency" || priority === "High") ? "🔴" : "⚪";
//   return (
//     <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-bold border ${cfg.bg} ${cfg.color} ${cfg.border}`}>
//       {icon} {priority}
//     </span>
//   );
// }

// function formatDate(dateStr) {
//   if (!dateStr) return "--";
//   const d = new Date(dateStr);
//   return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
// }

// // ─────────────────────────────────────────────
// //  REPLY MODAL
// // ─────────────────────────────────────────────
// function ReplyModal({ record, onClose, onSubmit }) {
//   const [replyText, setReplyText]     = useState("");
//   const [newStatus, setNewStatus]     = useState(record.status || "Pending");
//   const [newPriority, setNewPriority] = useState(record.priority || "Normal");
//   const [submitting, setSubmitting]   = useState(false);

//   if (!record) return null;

//   const handleSubmit = async () => {
//     if (!replyText.trim()) {
//       alert("कृपया reply message लिहा.");
//       return;
//     }
//     setSubmitting(true);
//     await onSubmit({
//       applicationId: record._id,
//       replyMessage:  replyText,
//       status:        newStatus,
//       priority:      newPriority,
//     });
//     setSubmitting(false);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-indigo-600 to-blue-600 rounded-t-2xl">
//           <div>
//             <p className="text-xs text-indigo-200 font-medium tracking-wide uppercase">Reply to Application</p>
//             <h2 className="text-lg font-bold text-white">{record.inwardNo} — {record.fullName}</h2>
//           </div>
//           <button
//             onClick={onClose}
//             className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white font-bold transition-colors text-sm"
//           >✕</button>
//         </div>

//         <div className="p-6 space-y-5">

//           {/* Applicant quick info */}
//           <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
//             <div>
//               <p className="text-xs text-gray-400">Applicant</p>
//               <p className="font-medium text-gray-800">{record.fullName || "--"}</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Mobile</p>
//               <p className="font-medium text-gray-800">{record.mobile || "--"}</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Subject</p>
//               <p className="font-medium text-gray-800">{record.subject || "--"}</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Office</p>
//               <p className="font-medium text-gray-800">{record.office || "--"}</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Submitted By</p>
//               <p className="font-medium text-gray-800">
//                 {record.submittedByName || "--"}
//                 {record.submittedByRole && (
//                   <span className="ml-1.5 text-xs text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
//                     {record.submittedByRole}
//                   </span>
//                 )}
//               </p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Submitted On</p>
//               <p className="font-medium text-gray-800">
//                 {record.submissionDate
//                   ? new Date(record.submissionDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
//                   : "--"}
//               </p>
//             </div>
//           </div>

//           {/* Status Change */}
//           <div>
//             <label className="block text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1.5">
//               Status बदला
//             </label>
//             <div className="flex flex-wrap gap-2">
//               {["Pending", "In Progress", "Resolved", "Rejected"].map((s) => {
//                 const cfg = statusConfig[s];
//                 const active = newStatus === s;
//                 return (
//                   <button
//                     key={s}
//                     onClick={() => setNewStatus(s)}
//                     className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all
//                       ${active ? `${cfg.bg} ${cfg.text} ${cfg.border} ring-2 ring-offset-1 ring-blue-400` : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`}
//                   >
//                     <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
//                     {s}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Priority Change — Resolved असेल तर लपवा */}
//           {newStatus !== "Resolved" && (
//             <div>
//               <label className="block text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1.5">
//                 Priority बदला
//               </label>
//               <div className="flex flex-wrap gap-2">
//                 {["Normal", "High", "Urgent", "Emergency"].map((p) => {
//                   const cfg = priorityConfig[p];
//                   const active = newPriority === p;
//                   return (
//                     <button
//                       key={p}
//                       onClick={() => setNewPriority(p)}
//                       className={`inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-bold border transition-all
//                         ${active ? `${cfg.bg} ${cfg.color} ${cfg.border} ring-2 ring-offset-1 ring-blue-400` : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`}
//                     >
//                       {p === "Normal" ? "⚪" : "🔴"} {p}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           )}

//           {/* Reply Message */}
//           <div>
//             <label className="block text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1.5">
//               Reply Message <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               rows={5}
//               placeholder="Applicant ला reply message लिहा..."
//               value={replyText}
//               onChange={(e) => setReplyText(e.target.value)}
//               className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 resize-none"
//             />
//             <p className="text-xs text-gray-400 mt-1 text-right">{replyText.length} characters</p>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex items-center justify-end gap-3 pt-2">
//             <button
//               onClick={onClose}
//               className="px-5 py-2.5 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSubmit}
//               disabled={submitting}
//               className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl hover:from-indigo-700 hover:to-blue-700 disabled:opacity-60 transition-all shadow-md flex items-center gap-2"
//             >
//               {submitting ? (
//                 <>
//                   <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                   Sending…
//                 </>
//               ) : (
//                 <>📨 Send Reply</>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// //  DETAIL MODAL
// // ─────────────────────────────────────────────
// function DetailModal({ record, onClose }) {
//   if (!record) return null;
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl">
//           <div>
//             <p className="text-xs text-blue-200 font-medium tracking-wide uppercase">Application Detail</p>
//             <h2 className="text-lg font-bold text-white">{record.inwardNo}</h2>
//           </div>
//           <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white font-bold transition-colors text-sm">✕</button>
//         </div>
//         <div className="p-6 space-y-5">
//           <Section title="Citizen Details">
//             <Row label="Full Name"  value={record.fullName} />
//             <Row label="Mobile"     value={record.mobile} />
//             <Row label="Email"      value={record.email} />
//             <Row label="Category"   value={record.category} />
//             <Row label="Ward No"    value={record.wardNo} />
//             <Row label="Address"    value={record.address} />
//             <Row label="Pincode"    value={record.pincode} />
//             <Row label="Taluka"     value={record.taluka} />
//             <Row label="District"   value={record.district} />
//           </Section>
//           <Section title="Identity">
//             <Row label="Type"   value={record.identityType} />
//             <Row label="Number" value={record.identityNumber} />
//           </Section>
//           <Section title="Complaint">
//             <Row label="Subject"     value={record.subject} />
//             <Row label="Description" value={record.description} />
//           </Section>
//           <Section title="Office & Workflow">
//             <Row label="Office"          value={record.office} />
//             <Row label="Main Department" value={record.mainDepartment} />
//             <Row label="Sub Department"  value={record.subDepartment} />
//             {record.status !== "Resolved" && <Row label="Priority" value={record.priority} />}
//             <Row label="Tag To"          value={Array.isArray(record.tagTo) ? record.tagTo.join(", ") : record.tagTo} />
//             <Row label="Follow Up"       value={record.followUp} />
//             <Row label="Status"          value={record.status} />
//             <Row label="Submitted On"    value={formatDate(record.submissionDate)} />
//             {record.status === "Resolved" && (() => {
//               const resolvedReply = record.replies?.find((r) => r.status === "Resolved");
//               if (!resolvedReply) return null;
//               return (
//                 <>
//                   <Row label="Resolved By"   value={resolvedReply.repliedByName || "—"} />
//                   <Row label="Resolved Role"  value={resolvedReply.repliedByRole || "—"} />
//                   <Row label="Resolved On"    value={resolvedReply.createdAt ? new Date(resolvedReply.createdAt).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" }) : "—"} />
//                 </>
//               );
//             })()}
//           </Section>
//           {record.documents && (
//             <Section title="Document">
//               <a href={record.documents} target="_blank" rel="noreferrer"
//                 className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
//                 📄 View Document
//               </a>
//             </Section>
//           )}

//           {record.replies && record.replies.length > 0 && (
//             <div>
//               <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
//                 Replies ({record.replies.length})
//               </p>
//               <div className="space-y-3">
//                 {record.replies.map((reply, i) => {
//                   const cfg = statusConfig[reply.status] || statusConfig["Pending"];
//                   const isResolved = reply.status === "Resolved";
//                   return (
//                     <div key={i} className={`rounded-xl border px-4 py-3 ${isResolved ? "bg-green-50 border-green-300" : "bg-gray-50 border-gray-200"}`}>
//                       <div className="flex items-center justify-between mb-2">
//                         <div className="flex items-center gap-2">
//                           <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${isResolved ? "bg-green-500" : "bg-indigo-500"}`}>
//                             {reply.repliedByName ? reply.repliedByName.split(" ").map(w => w[0]).join("").slice(0,2).toUpperCase() : "?"}
//                           </div>
//                           <div>
//                             <div className="text-sm font-bold text-gray-800 leading-tight">{reply.repliedByName || "—"}</div>
//                             {reply.repliedByRole && (
//                               <div className="text-xs text-indigo-600 font-semibold">{reply.repliedByRole}</div>
//                             )}
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           {reply.status && (
//                             <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
//                               <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
//                               {reply.status}
//                             </span>
//                           )}
//                           <span className="text-xs text-gray-400">
//                             {reply.createdAt ? new Date(reply.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : ""}
//                           </span>
//                         </div>
//                       </div>
//                       <p className={`text-sm leading-relaxed pl-9 ${isResolved ? "text-green-800" : "text-gray-700"}`}>
//                         {reply.replyMessage}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function Section({ title, children }) {
//   return (
//     <div>
//       <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">{title}</p>
//       <div className="bg-gray-50 rounded-xl px-4 py-3 grid grid-cols-2 gap-x-6 gap-y-2">{children}</div>
//     </div>
//   );
// }

// function Row({ label, value }) {
//   return (
//     <div>
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="text-sm text-gray-800 font-medium">{value || "--"}</p>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// //  MAIN COMPONENT
// // ─────────────────────────────────────────────
// export default function AllApplication() {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading]           = useState(true);
//   const [search, setSearch]             = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [selected, setSelected]         = useState(null);
//   const [replyTarget, setReplyTarget]   = useState(null);

//   const navigate = useNavigate();

//   useEffect(() => { fetchApplications(); }, []);

//   const fetchApplications = async () => {
//     try {
//       setLoading(true);
//       const authUserRaw = localStorage.getItem("authUser");
//       const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;

//       const res = await axiosInstance.get("/getAllApplications", {
//         params: {
//           role:                   authUser?.role,
//           userId:                 authUser?.id,
//           userOffice:             authUser?.office,
//           userDepartmentCategory: authUser?.departmentCategory,
//           // ── NEW: pass departmentName for case-insensitive tagTo matching ──
//           userDepartmentName:     authUser?.departmentName,
//         },
//       });

//       const data = res.data;
//       if (data.success) setApplications(data.data || []);
//     } catch (err) {
//       console.error("Error fetching applications:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ── Reply Submit ──
//   const handleReplySubmit = async ({ applicationId, replyMessage, status, priority }) => {
//     try {
//       const authUserRaw = localStorage.getItem("authUser");
//       const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;

//       const repliedByName = authUser?.submittedByName || authUser?.name || authUser?.fullName || "";
//       const repliedByRole = authUser?.submittedByRole || authUser?.role || "";
//       const repliedById   = authUser?.submittedById   || authUser?.id  || "";

//       await axiosInstance.post("/replyApplication", {
//         applicationId,
//         replyMessage,
//         status,
//         priority,
//         repliedBy:     repliedById,
//         repliedByName: repliedByName,
//         repliedByRole: repliedByRole,
//       });

//       const newReply = {
//         replyMessage,
//         status,
//         priority,
//         repliedBy:     repliedById,
//         repliedByName: repliedByName,
//         repliedByRole: repliedByRole,
//         createdAt:     new Date().toISOString(),
//       };

//       setApplications((prev) =>
//         prev.map((app) =>
//           app._id === applicationId
//             ? { ...app, status, priority, replies: [...(app.replies || []), newReply] }
//             : app
//         )
//       );

//       alert("✅ Reply यशस्वीरित्या पाठवली!");
//       setReplyTarget(null);
//     } catch (err) {
//       console.error("Reply error:", err);
//       alert("❌ Reply पाठवताना error आला. पुन्हा try करा.");
//     }
//   };

//   const filtered = applications.filter((app) => {
//     const matchSearch =
//       !search ||
//       app.fullName?.toLowerCase().includes(search.toLowerCase()) ||
//       app.inwardNo?.toLowerCase().includes(search.toLowerCase()) ||
//       app.subject?.toLowerCase().includes(search.toLowerCase()) ||
//       app.mobile?.includes(search);
//     const matchStatus = statusFilter === "All" || app.status === statusFilter;
//     return matchSearch && matchStatus;
//   });

//   const statusCounts = ["All", "Pending", "In Progress", "Resolved", "Rejected"].map((s) => ({
//     label: s,
//     count: s === "All" ? applications.length : applications.filter((a) => a.status === s).length,
//   }));

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
//               All Applications
//               <span className="text-base font-bold text-blue-600 bg-blue-100 px-3 py-0.5 rounded-full border border-blue-200">
//                 {applications.length}
//               </span>
//             </h1>
//             <p className="text-base font-medium text-gray-500 mt-1">Janata Darbar — Inward Records</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <button onClick={fetchApplications}
//               className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 shadow-sm transition-all">
//               🔄 Refresh
//             </button>
//             <button onClick={() => navigate("/Jansanwadappform")}
//               className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 shadow-sm transition-all">
//               ➕ Add
//             </button>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-4 mb-5 flex flex-wrap items-center gap-4">
//           <div className="relative flex-1 min-w-[200px]">
//             <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
//             <input type="text" placeholder="Search by name, inward no, subject..." value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full pl-10 pr-4 py-2.5 text-sm font-medium border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50" />
//           </div>
//           <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
//             {statusCounts.map(({ label, count }) => (
//               <button key={label} onClick={() => setStatusFilter(label)}
//                 className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${statusFilter === label ? "bg-white text-blue-600 shadow-md" : "text-gray-500 hover:text-gray-700"}`}>
//                 {label}
//                 <span className={`ml-1.5 text-xs font-bold px-1.5 py-0.5 rounded-full ${statusFilter === label ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-500"}`}>
//                   {count}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Table */}
//         <div style={{ background: "#fff", border: "1px solid #e0e0e0", borderRadius: 4, overflow: "hidden", boxShadow: "0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 1px 3px rgba(0,0,0,.12)", fontFamily: "'Roboto','Segoe UI',sans-serif" }}>
//           <style>{`
//             .mui-th { padding: 0 16px; height: 56px; font-weight: 500; font-size: .875rem; color: rgba(0,0,0,.87); text-align: left; white-space: nowrap; background: #fff; border-bottom: 1px solid rgba(224,224,224,1); }
//             .mui-tr { border-bottom: 1px solid rgba(224,224,224,1); cursor: pointer; transition: background .15s; }
//             .mui-tr:last-child { border-bottom: none; }
//             .mui-tr:hover { background: rgba(0,0,0,.04) !important; }
//             .mui-td { padding: 0 16px; height: 52px; vertical-align: middle; font-size: .875rem; }
//             .inward-chip { display:inline-block; padding: 2px 8px; background:#f5f5f5; border:1px solid #e0e0e0; border-radius:4px; font-family:monospace; font-size:.8125rem; color:rgba(0,0,0,.7); }
//             .doc-link { display:inline-flex; align-items:center; gap:4px; color:#1976d2; font-size:.875rem; font-weight:500; text-decoration:none; padding:4px 8px; border-radius:4px; }
//             .doc-link:hover { background:rgba(25,118,210,.08); }
//             .reply-btn { display:inline-flex; align-items:center; gap:4px; color:#fff; background:#4f46e5; font-size:.8125rem; font-weight:600; border:none; padding:5px 12px; border-radius:6px; cursor:pointer; transition:background .15s; }
//             .reply-btn:hover { background:#4338ca; }
//             .mui-footer { display:flex; align-items:center; justify-content:space-between; padding:0 16px; height:52px; border-top:1px solid rgba(224,224,224,1); font-size:.875rem; color:rgba(0,0,0,.6); }
//           `}</style>

//           <div style={{ overflowX: "auto" }}>
//             <table style={{ width: "100%", borderCollapse: "collapse" }}>
//               <thead>
//                 <tr>
//                   {["Reply","#","Applicant","Inward No","Status","Subject","Priority","Date","Submitted By","Reply By","Document"].map((h) => (
//                     <th key={h} className="mui-th">{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td colSpan={12} style={{ textAlign: "center", padding: "64px 0", color: "rgba(0,0,0,.38)" }}>
//                       <div style={{ width: 32, height: 32, margin: "0 auto 12px", border: "3px solid #e0e0e0", borderTopColor: "#1976d2", borderRadius: "50%", animation: "spin .8s linear infinite" }} />
//                       <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
//                       <div>Loading applications…</div>
//                     </td>
//                   </tr>
//                 ) : filtered.length === 0 ? (
//                   <tr>
//                     <td colSpan={12} style={{ textAlign: "center", padding: "64px 0", color: "rgba(0,0,0,.38)" }}>
//                       <div style={{ fontSize: 40, marginBottom: 8 }}>📭</div>
//                       <div>No applications found</div>
//                     </td>
//                   </tr>
//                 ) : (
//                   filtered.map((app, index) => {
//                     const lastReply     = app.replies && app.replies.length > 0 ? app.replies[app.replies.length - 1] : null;
//                     const resolvedReply = app.replies?.find((r) => r.status === "Resolved") || null;

//                     return (
//                       <tr
//                         key={app._id}
//                         onClick={() => setSelected(app)}
//                         className="mui-tr"
//                         style={{ background: index % 2 === 0 ? "#fff" : "#fafafa" }}
//                       >
//                         {/* ── REPLY BUTTON ── */}
//                         <td className="mui-td" style={{ width: 90 }} onClick={(e) => e.stopPropagation()}>
//                           <button className="reply-btn" onClick={() => setReplyTarget(app)}>
//                             📨 Reply
//                           </button>
//                         </td>

//                         <td className="mui-td" style={{ color: "rgba(0,0,0,.54)", width: 60 }}>{index + 1}</td>
//                         <td className="mui-td" style={{ minWidth: 180 }}>
//                           <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                             <Avatar name={app.fullName} index={index} />
//                             <div>
//                               <div style={{ fontSize: ".75rem", color: "rgba(0,0,0,.54)", marginTop: 1 }}>{app.mobile}</div>
//                               <div style={{ fontSize: ".875rem", fontWeight: 400, color: "rgba(0,0,0,.87)", lineHeight: 1.4 }}>{app.fullName}</div>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="mui-td" style={{ width: 130 }}><span className="inward-chip">{app.inwardNo}</span></td>
//                         <td className="mui-td" style={{ width: 110 }}><StatusBadge status={app.status} /></td>
//                         <td className="mui-td" style={{ minWidth: 160, maxWidth: 200 }}>
//                           <div style={{ fontSize: ".875rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 180 }}>{app.subject || "—"}</div>
//                         </td>
//                         <td className="mui-td" style={{ minWidth: 140, maxWidth: 180 }}>
//                           <div style={{ fontSize: ".875rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 160 }}>{app.mainDepartment || "—"}</div>
//                           <div style={{ fontSize: ".75rem", color: "rgba(0,0,0,.54)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 160 }}>{app.subDepartment}</div>
//                         </td>
//                         <td className="mui-td" style={{ width: 100 }}>
//                           {app.status !== "Resolved"
//                             ? <PriorityBadge priority={app.priority} />
//                             : <span style={{ color: "rgba(0,0,0,.26)" }}>—</span>}
//                         </td>
//                         <td className="mui-td" style={{ width: 110, whiteSpace: "nowrap" }}>{formatDate(app.submissionDate)}</td>

//                         {/* ── SUBMITTED BY ── */}
//                         <td className="mui-td" style={{ minWidth: 150 }}>
//                           {app.submittedByName ? (
//                             <div>
//                               <div style={{ fontSize: ".8125rem", fontWeight: 600, color: "rgba(0,0,0,.8)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 130 }}>
//                                 {app.submittedByName}
//                               </div>
//                               {app.submittedByRole && (
//                                 <div style={{ fontSize: ".7rem", color: "rgba(0,0,0,.4)", whiteSpace: "nowrap" }}>
//                                   {app.submittedByRole}
//                                 </div>
//                               )}
//                             </div>
//                           ) : (
//                             <span style={{ color: "rgba(0,0,0,.26)" }}>—</span>
//                           )}
//                         </td>

//                         {/* ── REPLY BY — first reply only ── */}
//                         <td className="mui-td" style={{ minWidth: 150 }}>
//                           {app.replies && app.replies.length > 0 ? (() => {
//                             const firstReply = app.replies[0];
//                             const isResolved = firstReply.status === "Resolved";
//                             const moreCount  = app.replies.length - 1;
//                             return (
//                               <div>
//                                 <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
//                                   <span style={{ width: 7, height: 7, borderRadius: "50%", flexShrink: 0, background: isResolved ? "#22c55e" : "#6366f1", display: "inline-block" }} />
//                                   <div style={{ fontSize: ".8125rem", fontWeight: 600, color: isResolved ? "#15803d" : "rgba(0,0,0,.8)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 120 }}>
//                                     {firstReply.repliedByName || "—"}
//                                   </div>
//                                 </div>
//                                 {firstReply.repliedByRole && (
//                                   <div style={{ fontSize: ".7rem", color: "rgba(0,0,0,.4)", whiteSpace: "nowrap", paddingLeft: 11 }}>
//                                     {firstReply.repliedByRole}
//                                   </div>
//                                 )}
//                                 {moreCount > 0 && (
//                                   <div style={{ fontSize: ".7rem", color: "#6366f1", fontWeight: 600, paddingLeft: 11, marginTop: 1 }}>
//                                     +{moreCount} more
//                                   </div>
//                                 )}
//                               </div>
//                             );
//                           })() : (
//                             <span style={{ color: "rgba(0,0,0,.26)" }}>—</span>
//                           )}
//                         </td>

//                         <td className="mui-td" style={{ width: 80 }} onClick={(e) => e.stopPropagation()}>
//                           {app.documents ? (
//                             <a href={app.documents} target="_blank" rel="noreferrer" className="doc-link">
//                               <svg viewBox="0 0 24 24" width="16" height="16" fill="#1976d2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
//                               View
//                             </a>
//                           ) : (
//                             <span style={{ color: "rgba(0,0,0,.26)" }}>—</span>
//                           )}
//                         </td>
//                       </tr>
//                     );
//                   })
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {!loading && filtered.length > 0 && (
//             <div className="mui-footer">
//               <span>Showing <strong style={{ color: "rgba(0,0,0,.87)" }}>{filtered.length}</strong> of{" "}
//                 <strong style={{ color: "rgba(0,0,0,.87)" }}>{applications.length}</strong> applications</span>
//               <span style={{ color: "rgba(0,0,0,.38)", fontSize: ".8125rem" }}>👆 Click any row to view full details</span>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Detail Modal */}
//       {selected && <DetailModal record={selected} onClose={() => setSelected(null)} />}

//       {/* Reply Modal */}
//       {replyTarget && (
//         <ReplyModal
//           record={replyTarget}
//           onClose={() => setReplyTarget(null)}
//           onSubmit={handleReplySubmit}
//         />
//       )}
//     </div>
//   );
// }


// ============================================


// import React, { useState, useEffect } from "react";
// import JansanwadAppform from "./JansanwadAppform";
// import axiosInstance from "../services/axiosInstance";
// import { useNavigate } from "react-router-dom";

// const statusConfig = {
//   Pending:      { dot: "bg-yellow-400", text: "text-yellow-700", bg: "bg-yellow-50",  border: "border-yellow-200", label: "Pending"     },
//   Resolved:     { dot: "bg-green-500",  text: "text-green-700",  bg: "bg-green-50",   border: "border-green-200",  label: "Resolved"    },
//   Rejected:     { dot: "bg-red-500",    text: "text-red-700",    bg: "bg-red-50",     border: "border-red-200",    label: "Rejected"    },
//   "In Progress":{ dot: "bg-blue-500",   text: "text-blue-700",   bg: "bg-blue-50",    border: "border-blue-200",   label: "In Progress" },
// };

// const priorityConfig = {
//   Normal:    { color: "text-gray-600",   bg: "bg-gray-100",    border: "border-gray-200"   },
//   Urgent:    { color: "text-orange-700", bg: "bg-orange-50",   border: "border-orange-200" },
//   Emergency: { color: "text-red-700",    bg: "bg-red-50",      border: "border-red-200"    },
//   High:      { color: "text-red-700",    bg: "bg-red-50",      border: "border-red-200"    },
// };

// const avatarColors = [
//   "bg-blue-500","bg-teal-500","bg-violet-500",
//   "bg-pink-500","bg-amber-500","bg-cyan-500","bg-emerald-500","bg-rose-500",
// ];

// function Avatar({ name, index }) {
//   const initials = name ? name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase() : "?";
//   const color = avatarColors[index % avatarColors.length];
//   return (
//     <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm ring-2 ring-white`}>
//       {initials}
//     </div>
//   );
// }

// function StatusBadge({ status }) {
//   const cfg = statusConfig[status] || statusConfig["Pending"];
//   return (
//     <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
//       <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
//       {cfg.label}
//     </span>
//   );
// }

// function PriorityBadge({ priority }) {
//   const cfg = priorityConfig[priority] || priorityConfig["Normal"];
//   const icon = (priority === "Urgent" || priority === "Emergency" || priority === "High") ? "🔴" : "⚪";
//   return (
//     <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-bold border ${cfg.bg} ${cfg.color} ${cfg.border}`}>
//       {icon} {priority}
//     </span>
//   );
// }

// function formatDate(dateStr) {
//   if (!dateStr) return "--";
//   const d = new Date(dateStr);
//   return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
// }

// // ─────────────────────────────────────────────
// //  TOKEN PRE-CHECK MODAL  ← NEW
// // ─────────────────────────────────────────────
// function TokenCheckModal({ onClose, onProceed }) {
//   const [hasToken, setHasToken]       = useState(null);   // null | "yes" | "no"
//   const [tokenInput, setTokenInput]   = useState("");
//   const [fetching, setFetching]       = useState(false);
//   const [fetchError, setFetchError]   = useState("");
//   const [citizenData, setCitizenData] = useState(null);

//   const handleFetchToken = async () => {
//     if (!tokenInput.trim()) {
//       setFetchError("कृपया Token Number टाका.");
//       return;
//     }
//     setFetching(true);
//     setFetchError("");
//     setCitizenData(null);
//     try {
//       const res = await axiosInstance.get(`/citizen/appointment/token/${tokenInput.trim()}`);
//       if (res.data.success && res.data.appointment) {
//         setCitizenData(res.data.appointment);
//       } else {
//         setFetchError("Token सापडले नाही ❌");
//       }
//     } catch (err) {
//       setFetchError(
//         err?.response?.data?.message || "Token fetch करताना error आला ❌"
//       );
//     } finally {
//       setFetching(false);
//     }
//   };

//   const handleProceed = () => {
//     if (hasToken === "yes") {
//       if (!citizenData) { setFetchError("आधी Token Fetch करा."); return; }
//       onProceed(citizenData);   // pass prefill data
//     } else {
//       onProceed(null);          // open blank form
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">

//         {/* Header */}
//         <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl">
//           <div>
//             <p className="text-xs text-blue-200 font-medium tracking-wide uppercase">New Application</p>
//             <h2 className="text-lg font-bold text-white">Token आहे का?</h2>
//           </div>
//           <button
//             onClick={onClose}
//             className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white font-bold transition-colors text-sm"
//           >✕</button>
//         </div>

//         <div className="p-6 space-y-5">

//           {/* Yes / No choice */}
//           <p className="text-sm font-medium text-gray-600">
//             Already have token? (Citizen ने आधी appointment घेतली आहे का?)
//           </p>

//           <div className="flex gap-3">
//             {/* YES */}
//             <button
//               onClick={() => { setHasToken("yes"); setFetchError(""); setCitizenData(null); setTokenInput(""); }}
//               className={`flex-1 py-3 rounded-xl text-sm font-bold border-2 transition-all
//                 ${hasToken === "yes"
//                   ? "bg-blue-600 text-white border-blue-600 shadow-md"
//                   : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600"}`}
//             >
//               ✅ Yes
//             </button>
//             {/* NO */}
//             <button
//               onClick={() => { setHasToken("no"); setFetchError(""); setCitizenData(null); setTokenInput(""); }}
//               className={`flex-1 py-3 rounded-xl text-sm font-bold border-2 transition-all
//                 ${hasToken === "no"
//                   ? "bg-gray-700 text-white border-gray-700 shadow-md"
//                   : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-700"}`}
//             >
//               ❌ No
//             </button>
//           </div>

//           {/* Token input — shown only when Yes */}
//           {hasToken === "yes" && (
//             <div className="space-y-3">
//               <div>
//                 <label className="block text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1.5">
//                   Token Number
//                 </label>
//                 <div className="flex gap-2">
//                   <input
//                     type="text"
//                     placeholder="e.g. VVCMC-20260323-0008"
//                     value={tokenInput}
//                     onChange={(e) => { setTokenInput(e.target.value); setFetchError(""); setCitizenData(null); }}
//                     onKeyDown={(e) => { if (e.key === "Enter") handleFetchToken(); }}
//                     className="flex-1 px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
//                   />
//                   <button
//                     onClick={handleFetchToken}
//                     disabled={fetching}
//                     className="px-4 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 disabled:opacity-60 transition-all flex items-center gap-1.5 whitespace-nowrap"
//                   >
//                     {fetching ? (
//                       <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                     ) : "🔍 Fetch"}
//                   </button>
//                 </div>
//                 {fetchError && (
//                   <p className="text-red-500 text-xs mt-1.5 font-medium">{fetchError}</p>
//                 )}
//               </div>

//               {/* Citizen data preview */}
//               {citizenData && (
//                 <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 space-y-1.5">
//                   <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-1">✅ Citizen सापडला</p>
//                   <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
//                     <div>
//                       <span className="text-xs text-gray-400">Name</span>
//                       <p className="font-semibold text-gray-800">{citizenData.fullName || "--"}</p>
//                     </div>
//                     <div>
//                       <span className="text-xs text-gray-400">Mobile</span>
//                       <p className="font-semibold text-gray-800">{citizenData.mobileNumber || "--"}</p>
//                     </div>
//                     <div>
//                       <span className="text-xs text-gray-400">Token</span>
//                       <p className="font-semibold text-gray-800">{citizenData.tokenId || "--"}</p>
//                     </div>
//                     <div>
//                       <span className="text-xs text-gray-400">Ward</span>
//                       <p className="font-semibold text-gray-800">{citizenData.ward || "--"}</p>
//                     </div>
//                     <div>
//                       <span className="text-xs text-gray-400">Date</span>
//                       <p className="font-semibold text-gray-800">{citizenData.preferredDate || "--"}</p>
//                     </div>
//                     <div>
//                       <span className="text-xs text-gray-400">Slot</span>
//                       <p className="font-semibold text-gray-800">{citizenData.microSlot || citizenData.slotTime || "--"}</p>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* No selection info */}
//           {hasToken === "no" && (
//             <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600">
//               📝 रिकामा form उघडेल. Citizen ची माहिती manually भरावी लागेल.
//             </div>
//           )}

//           {/* Action buttons */}
//           {hasToken !== null && (
//             <div className="flex items-center justify-end gap-3 pt-1">
//               <button
//                 onClick={onClose}
//                 className="px-5 py-2.5 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleProceed}
//                 disabled={hasToken === "yes" && !citizenData}
//                 className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
//               >
//                 ➕ Open Form
//               </button>
//             </div>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// //  REPLY MODAL
// // ─────────────────────────────────────────────
// function ReplyModal({ record, onClose, onSubmit }) {
//   const [replyText, setReplyText]     = useState("");
//   const [newStatus, setNewStatus]     = useState(record.status || "Pending");
//   const [newPriority, setNewPriority] = useState(record.priority || "Normal");
//   const [submitting, setSubmitting]   = useState(false);

//   if (!record) return null;

//   const handleSubmit = async () => {
//     if (!replyText.trim()) {
//       alert("कृपया reply message लिहा.");
//       return;
//     }
//     setSubmitting(true);
//     await onSubmit({
//       applicationId: record._id,
//       replyMessage:  replyText,
//       status:        newStatus,
//       priority:      newPriority,
//     });
//     setSubmitting(false);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-indigo-600 to-blue-600 rounded-t-2xl">
//           <div>
//             <p className="text-xs text-indigo-200 font-medium tracking-wide uppercase">Reply to Application</p>
//             <h2 className="text-lg font-bold text-white">{record.inwardNo} — {record.fullName}</h2>
//           </div>
//           <button
//             onClick={onClose}
//             className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white font-bold transition-colors text-sm"
//           >✕</button>
//         </div>

//         <div className="p-6 space-y-5">

//           {/* Applicant quick info */}
//           <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
//             <div>
//               <p className="text-xs text-gray-400">Applicant</p>
//               <p className="font-medium text-gray-800">{record.fullName || "--"}</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Mobile</p>
//               <p className="font-medium text-gray-800">{record.mobile || "--"}</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Subject</p>
//               <p className="font-medium text-gray-800">{record.subject || "--"}</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Office</p>
//               <p className="font-medium text-gray-800">{record.office || "--"}</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Submitted By</p>
//               <p className="font-medium text-gray-800">
//                 {record.submittedByName || "--"}
//                 {record.submittedByRole && (
//                   <span className="ml-1.5 text-xs text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
//                     {record.submittedByRole}
//                   </span>
//                 )}
//               </p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Submitted On</p>
//               <p className="font-medium text-gray-800">
//                 {record.submissionDate
//                   ? new Date(record.submissionDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
//                   : "--"}
//               </p>
//             </div>
//           </div>

//           {/* Status Change */}
//           <div>
//             <label className="block text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1.5">
//               Status बदला
//             </label>
//             <div className="flex flex-wrap gap-2">
//               {["Pending", "In Progress", "Resolved", "Rejected"].map((s) => {
//                 const cfg = statusConfig[s];
//                 const active = newStatus === s;
//                 return (
//                   <button
//                     key={s}
//                     onClick={() => setNewStatus(s)}
//                     className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all
//                       ${active ? `${cfg.bg} ${cfg.text} ${cfg.border} ring-2 ring-offset-1 ring-blue-400` : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`}
//                   >
//                     <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
//                     {s}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Priority Change */}
//           {newStatus !== "Resolved" && (
//             <div>
//               <label className="block text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1.5">
//                 Priority बदला
//               </label>
//               <div className="flex flex-wrap gap-2">
//                 {["Normal", "High", "Urgent", "Emergency"].map((p) => {
//                   const cfg = priorityConfig[p];
//                   const active = newPriority === p;
//                   return (
//                     <button
//                       key={p}
//                       onClick={() => setNewPriority(p)}
//                       className={`inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-bold border transition-all
//                         ${active ? `${cfg.bg} ${cfg.color} ${cfg.border} ring-2 ring-offset-1 ring-blue-400` : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`}
//                     >
//                       {p === "Normal" ? "⚪" : "🔴"} {p}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           )}

//           {/* Reply Message */}
//           <div>
//             <label className="block text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1.5">
//               Reply Message <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               rows={5}
//               placeholder="Applicant ला reply message लिहा..."
//               value={replyText}
//               onChange={(e) => setReplyText(e.target.value)}
//               className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 resize-none"
//             />
//             <p className="text-xs text-gray-400 mt-1 text-right">{replyText.length} characters</p>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex items-center justify-end gap-3 pt-2">
//             <button
//               onClick={onClose}
//               className="px-5 py-2.5 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSubmit}
//               disabled={submitting}
//               className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl hover:from-indigo-700 hover:to-blue-700 disabled:opacity-60 transition-all shadow-md flex items-center gap-2"
//             >
//               {submitting ? (
//                 <>
//                   <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                   Sending…
//                 </>
//               ) : (
//                 <>📨 Send Reply</>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// //  DETAIL MODAL
// // ─────────────────────────────────────────────
// function DetailModal({ record, onClose }) {
//   if (!record) return null;
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl">
//           <div>
//             <p className="text-xs text-blue-200 font-medium tracking-wide uppercase">Application Detail</p>
//             <h2 className="text-lg font-bold text-white">{record.inwardNo}</h2>
//           </div>
//           <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white font-bold transition-colors text-sm">✕</button>
//         </div>
//         <div className="p-6 space-y-5">
//           <Section title="Citizen Details">
//             <Row label="Full Name"  value={record.fullName} />
//             <Row label="Mobile"     value={record.mobile} />
//             <Row label="Email"      value={record.email} />
//             <Row label="Category"   value={record.category} />
//             <Row label="Ward No"    value={record.wardNo} />
//             <Row label="Address"    value={record.address} />
//             <Row label="Pincode"    value={record.pincode} />
//             <Row label="Taluka"     value={record.taluka} />
//             <Row label="District"   value={record.district} />
//           </Section>
//           <Section title="Identity">
//             <Row label="Type"   value={record.identityType} />
//             <Row label="Number" value={record.identityNumber} />
//           </Section>
//           <Section title="Complaint">
//             <Row label="Subject"     value={record.subject} />
//             <Row label="Description" value={record.description} />
//           </Section>
//           <Section title="Office & Workflow">
//             <Row label="Office"          value={record.office} />
//             <Row label="Main Department" value={record.mainDepartment} />
//             <Row label="Sub Department"  value={record.subDepartment} />
//             {record.status !== "Resolved" && <Row label="Priority" value={record.priority} />}
//             <Row label="Tag To"          value={Array.isArray(record.tagTo) ? record.tagTo.join(", ") : record.tagTo} />
//             <Row label="Follow Up"       value={record.followUp} />
//             <Row label="Status"          value={record.status} />
//             <Row label="Submitted On"    value={formatDate(record.submissionDate)} />
//             {record.status === "Resolved" && (() => {
//               const resolvedReply = record.replies?.find((r) => r.status === "Resolved");
//               if (!resolvedReply) return null;
//               return (
//                 <>
//                   <Row label="Resolved By"   value={resolvedReply.repliedByName || "—"} />
//                   <Row label="Resolved Role"  value={resolvedReply.repliedByRole || "—"} />
//                   <Row label="Resolved On"    value={resolvedReply.createdAt ? new Date(resolvedReply.createdAt).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" }) : "—"} />
//                 </>
//               );
//             })()}
//           </Section>
//           {record.documents && (
//             <Section title="Document">
//               <a href={record.documents} target="_blank" rel="noreferrer"
//                 className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
//                 📄 View Document
//               </a>
//             </Section>
//           )}

//           {record.replies && record.replies.length > 0 && (
//             <div>
//               <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
//                 Replies ({record.replies.length})
//               </p>
//               <div className="space-y-3">
//                 {record.replies.map((reply, i) => {
//                   const cfg = statusConfig[reply.status] || statusConfig["Pending"];
//                   const isResolved = reply.status === "Resolved";
//                   return (
//                     <div key={i} className={`rounded-xl border px-4 py-3 ${isResolved ? "bg-green-50 border-green-300" : "bg-gray-50 border-gray-200"}`}>
//                       <div className="flex items-center justify-between mb-2">
//                         <div className="flex items-center gap-2">
//                           <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${isResolved ? "bg-green-500" : "bg-indigo-500"}`}>
//                             {reply.repliedByName ? reply.repliedByName.split(" ").map(w => w[0]).join("").slice(0,2).toUpperCase() : "?"}
//                           </div>
//                           <div>
//                             <div className="text-sm font-bold text-gray-800 leading-tight">{reply.repliedByName || "—"}</div>
//                             {reply.repliedByRole && (
//                               <div className="text-xs text-indigo-600 font-semibold">{reply.repliedByRole}</div>
//                             )}
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           {reply.status && (
//                             <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
//                               <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
//                               {reply.status}
//                             </span>
//                           )}
//                           <span className="text-xs text-gray-400">
//                             {reply.createdAt ? new Date(reply.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : ""}
//                           </span>
//                         </div>
//                       </div>
//                       <p className={`text-sm leading-relaxed pl-9 ${isResolved ? "text-green-800" : "text-gray-700"}`}>
//                         {reply.replyMessage}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function Section({ title, children }) {
//   return (
//     <div>
//       <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">{title}</p>
//       <div className="bg-gray-50 rounded-xl px-4 py-3 grid grid-cols-2 gap-x-6 gap-y-2">{children}</div>
//     </div>
//   );
// }

// function Row({ label, value }) {
//   return (
//     <div>
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="text-sm text-gray-800 font-medium">{value || "--"}</p>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// //  MAIN COMPONENT
// // ─────────────────────────────────────────────
// export default function AllApplication() {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading]           = useState(true);
//   const [search, setSearch]             = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [selected, setSelected]         = useState(null);
//   const [replyTarget, setReplyTarget]   = useState(null);

//   // ── NEW: token check modal + form state ──────────────────────────────────
//   const [showTokenCheck, setShowTokenCheck] = useState(false);
//   const [showForm, setShowForm]             = useState(false);
//   const [prefillData, setPrefillData]       = useState(null);
//   // ─────────────────────────────────────────────────────────────────────────

//   const navigate = useNavigate();

//   useEffect(() => { fetchApplications(); }, []);

//   const fetchApplications = async () => {
//     try {
//       setLoading(true);
//       const authUserRaw = localStorage.getItem("authUser");
//       const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;

//       const res = await axiosInstance.get("/getAllApplications", {
//         params: {
//           role:                   authUser?.role,
//           userId:                 authUser?.id,
//           userOffice:             authUser?.office,
//           userDepartmentCategory: authUser?.departmentCategory,
//           userDepartmentName:     authUser?.departmentName,
//         },
//       });

//       const data = res.data;
//       if (data.success) setApplications(data.data || []);
//     } catch (err) {
//       console.error("Error fetching applications:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ── NEW: handle Add button click ─────────────────────────────────────────
//   const handleAddClick = () => {
//     setShowTokenCheck(true);
//   };

//   // ── NEW: called from TokenCheckModal when user clicks "Open Form" ────────
//   const handleTokenCheckProceed = (citizenAppointment) => {
//     setShowTokenCheck(false);
//     if (citizenAppointment) {
//       // Map appointment fields → form fields for JansanwadAppform prefill
//       setPrefillData({
//         fullName:  citizenAppointment.fullName        || "",
//         mobile:    citizenAppointment.mobileNumber    || "",
//         email:     citizenAppointment.email           || "",
//         address:   citizenAppointment.address         || "",
//         pincode:   citizenAppointment.pincode         || "",
//         wardNo:    citizenAppointment.ward            || "",
//         // pass raw appointment reference fields for convenience
//         _tokenId:      citizenAppointment.tokenId        || "",
//         _citizenId:    citizenAppointment.citizenId      || "",
//         _preferredDate: citizenAppointment.preferredDate || "",
//         _slotTime:      citizenAppointment.slotTime      || "",
//         _microSlot:     citizenAppointment.microSlot     || "",
//       });
//     } else {
//       setPrefillData(null);   // blank form
//     }
//     setShowForm(true);
//   };

//   // ── NEW: close form ───────────────────────────────────────────────────────
//   const handleFormClose = () => {
//     setShowForm(false);
//     setPrefillData(null);
//     fetchApplications();   // refresh list after potential submission
//   };
//   // ─────────────────────────────────────────────────────────────────────────

//   // ── Reply Submit ──
//   const handleReplySubmit = async ({ applicationId, replyMessage, status, priority }) => {
//     try {
//       const authUserRaw = localStorage.getItem("authUser");
//       const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;

//       const repliedByName = authUser?.submittedByName || authUser?.name || authUser?.fullName || "";
//       const repliedByRole = authUser?.submittedByRole || authUser?.role || "";
//       const repliedById   = authUser?.submittedById   || authUser?.id  || "";

//       await axiosInstance.post("/replyApplication", {
//         applicationId,
//         replyMessage,
//         status,
//         priority,
//         repliedBy:     repliedById,
//         repliedByName: repliedByName,
//         repliedByRole: repliedByRole,
//       });

//       const newReply = {
//         replyMessage,
//         status,
//         priority,
//         repliedBy:     repliedById,
//         repliedByName: repliedByName,
//         repliedByRole: repliedByRole,
//         createdAt:     new Date().toISOString(),
//       };

//       setApplications((prev) =>
//         prev.map((app) =>
//           app._id === applicationId
//             ? { ...app, status, priority, replies: [...(app.replies || []), newReply] }
//             : app
//         )
//       );

//       alert("✅ Reply यशस्वीरित्या पाठवली!");
//       setReplyTarget(null);
//     } catch (err) {
//       console.error("Reply error:", err);
//       alert("❌ Reply पाठवताना error आला. पुन्हा try करा.");
//     }
//   };

//   const filtered = applications.filter((app) => {
//     const matchSearch =
//       !search ||
//       app.fullName?.toLowerCase().includes(search.toLowerCase()) ||
//       app.inwardNo?.toLowerCase().includes(search.toLowerCase()) ||
//       app.subject?.toLowerCase().includes(search.toLowerCase()) ||
//       app.mobile?.includes(search);
//     const matchStatus = statusFilter === "All" || app.status === statusFilter;
//     return matchSearch && matchStatus;
//   });

//   const statusCounts = ["All", "Pending", "In Progress", "Resolved", "Rejected"].map((s) => ({
//     label: s,
//     count: s === "All" ? applications.length : applications.filter((a) => a.status === s).length,
//   }));

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
//               All Applications
//               <span className="text-base font-bold text-blue-600 bg-blue-100 px-3 py-0.5 rounded-full border border-blue-200">
//                 {applications.length}
//               </span>
//             </h1>
//             <p className="text-base font-medium text-gray-500 mt-1">Janata Darbar — Inward Records</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <button onClick={fetchApplications}
//               className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 shadow-sm transition-all">
//               🔄 Refresh
//             </button>
//             {/* ── MODIFIED: now opens TokenCheckModal instead of navigating ── */}
//             <button
//               onClick={handleAddClick}
//               className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 shadow-sm transition-all">
//               ➕ Add
//             </button>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-4 mb-5 flex flex-wrap items-center gap-4">
//           <div className="relative flex-1 min-w-[200px]">
//             <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
//             <input type="text" placeholder="Search by name, inward no, subject..." value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full pl-10 pr-4 py-2.5 text-sm font-medium border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50" />
//           </div>
//           <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
//             {statusCounts.map(({ label, count }) => (
//               <button key={label} onClick={() => setStatusFilter(label)}
//                 className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${statusFilter === label ? "bg-white text-blue-600 shadow-md" : "text-gray-500 hover:text-gray-700"}`}>
//                 {label}
//                 <span className={`ml-1.5 text-xs font-bold px-1.5 py-0.5 rounded-full ${statusFilter === label ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-500"}`}>
//                   {count}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Table */}
//         <div style={{ background: "#fff", border: "1px solid #e0e0e0", borderRadius: 4, overflow: "hidden", boxShadow: "0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 1px 3px rgba(0,0,0,.12)", fontFamily: "'Roboto','Segoe UI',sans-serif" }}>
//           <style>{`
//             .mui-th { padding: 0 16px; height: 56px; font-weight: 500; font-size: .875rem; color: rgba(0,0,0,.87); text-align: left; white-space: nowrap; background: #fff; border-bottom: 1px solid rgba(224,224,224,1); }
//             .mui-tr { border-bottom: 1px solid rgba(224,224,224,1); cursor: pointer; transition: background .15s; }
//             .mui-tr:last-child { border-bottom: none; }
//             .mui-tr:hover { background: rgba(0,0,0,.04) !important; }
//             .mui-td { padding: 0 16px; height: 52px; vertical-align: middle; font-size: .875rem; }
//             .inward-chip { display:inline-block; padding: 2px 8px; background:#f5f5f5; border:1px solid #e0e0e0; border-radius:4px; font-family:monospace; font-size:.8125rem; color:rgba(0,0,0,.7); }
//             .doc-link { display:inline-flex; align-items:center; gap:4px; color:#1976d2; font-size:.875rem; font-weight:500; text-decoration:none; padding:4px 8px; border-radius:4px; }
//             .doc-link:hover { background:rgba(25,118,210,.08); }
//             .reply-btn { display:inline-flex; align-items:center; gap:4px; color:#fff; background:#4f46e5; font-size:.8125rem; font-weight:600; border:none; padding:5px 12px; border-radius:6px; cursor:pointer; transition:background .15s; }
//             .reply-btn:hover { background:#4338ca; }
//             .mui-footer { display:flex; align-items:center; justify-content:space-between; padding:0 16px; height:52px; border-top:1px solid rgba(224,224,224,1); font-size:.875rem; color:rgba(0,0,0,.6); }
//           `}</style>

//           <div style={{ overflowX: "auto" }}>
//             <table style={{ width: "100%", borderCollapse: "collapse" }}>
//               <thead>
//                 <tr>
//                   {["Reply","#","Applicant","Inward No","Status","Subject","Priority","Date","Submitted By","Reply By","Document"].map((h) => (
//                     <th key={h} className="mui-th">{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td colSpan={12} style={{ textAlign: "center", padding: "64px 0", color: "rgba(0,0,0,.38)" }}>
//                       <div style={{ width: 32, height: 32, margin: "0 auto 12px", border: "3px solid #e0e0e0", borderTopColor: "#1976d2", borderRadius: "50%", animation: "spin .8s linear infinite" }} />
//                       <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
//                       <div>Loading applications…</div>
//                     </td>
//                   </tr>
//                 ) : filtered.length === 0 ? (
//                   <tr>
//                     <td colSpan={12} style={{ textAlign: "center", padding: "64px 0", color: "rgba(0,0,0,.38)" }}>
//                       <div style={{ fontSize: 40, marginBottom: 8 }}>📭</div>
//                       <div>No applications found</div>
//                     </td>
//                   </tr>
//                 ) : (
//                   filtered.map((app, index) => {
//                     return (
//                       <tr
//                         key={app._id}
//                         onClick={() => setSelected(app)}
//                         className="mui-tr"
//                         style={{ background: index % 2 === 0 ? "#fff" : "#fafafa" }}
//                       >
//                         {/* ── REPLY BUTTON ── */}
//                         <td className="mui-td" style={{ width: 90 }} onClick={(e) => e.stopPropagation()}>
//                           <button className="reply-btn" onClick={() => setReplyTarget(app)}>
//                             📨 Reply
//                           </button>
//                         </td>

//                         <td className="mui-td" style={{ color: "rgba(0,0,0,.54)", width: 60 }}>{index + 1}</td>
//                         <td className="mui-td" style={{ minWidth: 180 }}>
//                           <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                             <Avatar name={app.fullName} index={index} />
//                             <div>
//                               <div style={{ fontSize: ".75rem", color: "rgba(0,0,0,.54)", marginTop: 1 }}>{app.mobile}</div>
//                               <div style={{ fontSize: ".875rem", fontWeight: 400, color: "rgba(0,0,0,.87)", lineHeight: 1.4 }}>{app.fullName}</div>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="mui-td" style={{ width: 130 }}><span className="inward-chip">{app.inwardNo}</span></td>
//                         <td className="mui-td" style={{ width: 110 }}><StatusBadge status={app.status} /></td>
//                         <td className="mui-td" style={{ minWidth: 160, maxWidth: 200 }}>
//                           <div style={{ fontSize: ".875rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 180 }}>{app.subject || "—"}</div>
//                         </td>
//                         <td className="mui-td" style={{ minWidth: 140, maxWidth: 180 }}>
//                           <div style={{ fontSize: ".875rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 160 }}>{app.mainDepartment || "—"}</div>
//                           <div style={{ fontSize: ".75rem", color: "rgba(0,0,0,.54)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 160 }}>{app.subDepartment}</div>
//                         </td>
//                         <td className="mui-td" style={{ width: 100 }}>
//                           {app.status !== "Resolved"
//                             ? <PriorityBadge priority={app.priority} />
//                             : <span style={{ color: "rgba(0,0,0,.26)" }}>—</span>}
//                         </td>
//                         <td className="mui-td" style={{ width: 110, whiteSpace: "nowrap" }}>{formatDate(app.submissionDate)}</td>

//                         {/* ── SUBMITTED BY ── */}
//                         <td className="mui-td" style={{ minWidth: 150 }}>
//                           {app.submittedByName ? (
//                             <div>
//                               <div style={{ fontSize: ".8125rem", fontWeight: 600, color: "rgba(0,0,0,.8)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 130 }}>
//                                 {app.submittedByName}
//                               </div>
//                               {app.submittedByRole && (
//                                 <div style={{ fontSize: ".7rem", color: "rgba(0,0,0,.4)", whiteSpace: "nowrap" }}>
//                                   {app.submittedByRole}
//                                 </div>
//                               )}
//                             </div>
//                           ) : (
//                             <span style={{ color: "rgba(0,0,0,.26)" }}>—</span>
//                           )}
//                         </td>

//                         {/* ── REPLY BY ── */}
//                         <td className="mui-td" style={{ minWidth: 150 }}>
//                           {app.replies && app.replies.length > 0 ? (() => {
//                             const firstReply = app.replies[0];
//                             const isResolved = firstReply.status === "Resolved";
//                             const moreCount  = app.replies.length - 1;
//                             return (
//                               <div>
//                                 <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
//                                   <span style={{ width: 7, height: 7, borderRadius: "50%", flexShrink: 0, background: isResolved ? "#22c55e" : "#6366f1", display: "inline-block" }} />
//                                   <div style={{ fontSize: ".8125rem", fontWeight: 600, color: isResolved ? "#15803d" : "rgba(0,0,0,.8)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 120 }}>
//                                     {firstReply.repliedByName || "—"}
//                                   </div>
//                                 </div>
//                                 {firstReply.repliedByRole && (
//                                   <div style={{ fontSize: ".7rem", color: "rgba(0,0,0,.4)", whiteSpace: "nowrap", paddingLeft: 11 }}>
//                                     {firstReply.repliedByRole}
//                                   </div>
//                                 )}
//                                 {moreCount > 0 && (
//                                   <div style={{ fontSize: ".7rem", color: "#6366f1", fontWeight: 600, paddingLeft: 11, marginTop: 1 }}>
//                                     +{moreCount} more
//                                   </div>
//                                 )}
//                               </div>
//                             );
//                           })() : (
//                             <span style={{ color: "rgba(0,0,0,.26)" }}>—</span>
//                           )}
//                         </td>

//                         <td className="mui-td" style={{ width: 80 }} onClick={(e) => e.stopPropagation()}>
//                           {app.documents ? (
//                             <a href={app.documents} target="_blank" rel="noreferrer" className="doc-link">
//                               <svg viewBox="0 0 24 24" width="16" height="16" fill="#1976d2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
//                               View
//                             </a>
//                           ) : (
//                             <span style={{ color: "rgba(0,0,0,.26)" }}>—</span>
//                           )}
//                         </td>
//                       </tr>
//                     );
//                   })
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {!loading && filtered.length > 0 && (
//             <div className="mui-footer">
//               <span>Showing <strong style={{ color: "rgba(0,0,0,.87)" }}>{filtered.length}</strong> of{" "}
//                 <strong style={{ color: "rgba(0,0,0,.87)" }}>{applications.length}</strong> applications</span>
//               <span style={{ color: "rgba(0,0,0,.38)", fontSize: ".8125rem" }}>👆 Click any row to view full details</span>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Detail Modal */}
//       {selected && <DetailModal record={selected} onClose={() => setSelected(null)} />}

//       {/* Reply Modal */}
//       {replyTarget && (
//         <ReplyModal
//           record={replyTarget}
//           onClose={() => setReplyTarget(null)}
//           onSubmit={handleReplySubmit}
//         />
//       )}

//       {/* ── NEW: Token Check Modal ── */}
//       {showTokenCheck && (
//         <TokenCheckModal
//           onClose={() => setShowTokenCheck(false)}
//           onProceed={handleTokenCheckProceed}
//         />
//       )}

//       {/* ── NEW: Application Form (with optional prefill) ── */}
//       {showForm && (
//         <JansanwadAppform
//           onClose={handleFormClose}
//           prefillData={prefillData}
//         />
//       )}
//     </div>
//   );
// }


// ================================

// import React, { useState, useEffect } from "react";
// import JansanwadAppform from "./JansanwadAppform";
// import axiosInstance from "../services/axiosInstance";
// import { useNavigate } from "react-router-dom";

// const statusConfig = {
//   Pending:      { dot: "bg-yellow-400", text: "text-yellow-700", bg: "bg-yellow-50",  border: "border-yellow-200", label: "Pending"     },
//   Resolved:     { dot: "bg-green-500",  text: "text-green-700",  bg: "bg-green-50",   border: "border-green-200",  label: "Resolved"    },
//   Rejected:     { dot: "bg-red-500",    text: "text-red-700",    bg: "bg-red-50",     border: "border-red-200",    label: "Rejected"    },
//   "In Progress":{ dot: "bg-blue-500",   text: "text-blue-700",   bg: "bg-blue-50",    border: "border-blue-200",   label: "In Progress" },
// };

// const priorityConfig = {
//   Normal:    { color: "text-gray-600",   bg: "bg-gray-100",    border: "border-gray-200"   },
//   Urgent:    { color: "text-orange-700", bg: "bg-orange-50",   border: "border-orange-200" },
//   Emergency: { color: "text-red-700",    bg: "bg-red-50",      border: "border-red-200"    },
//   High:      { color: "text-red-700",    bg: "bg-red-50",      border: "border-red-200"    },
// };

// const avatarColors = [
//   "bg-blue-500","bg-teal-500","bg-violet-500",
//   "bg-pink-500","bg-amber-500","bg-cyan-500","bg-emerald-500","bg-rose-500",
// ];

// function Avatar({ name, index }) {
//   const initials = name ? name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase() : "?";
//   const color = avatarColors[index % avatarColors.length];
//   return (
//     <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm ring-2 ring-white`}>
//       {initials}
//     </div>
//   );
// }

// function StatusBadge({ status }) {
//   const cfg = statusConfig[status] || statusConfig["Pending"];
//   return (
//     <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
//       <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
//       {cfg.label}
//     </span>
//   );
// }

// function PriorityBadge({ priority }) {
//   const cfg = priorityConfig[priority] || priorityConfig["Normal"];
//   const icon = (priority === "Urgent" || priority === "Emergency" || priority === "High") ? "🔴" : "⚪";
//   return (
//     <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-bold border ${cfg.bg} ${cfg.color} ${cfg.border}`}>
//       {icon} {priority}
//     </span>
//   );
// }

// function formatDate(dateStr) {
//   if (!dateStr) return "--";
//   const d = new Date(dateStr);
//   return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
// }

// // ─────────────────────────────────────────────
// //  TOKEN PRE-CHECK MODAL  ← NEW
// // ─────────────────────────────────────────────
// function TokenCheckModal({ onClose, onProceed }) {
//   const [hasToken, setHasToken]       = useState(null);   // null | "yes" | "no"
//   const [tokenInput, setTokenInput]   = useState("");
//   const [fetching, setFetching]       = useState(false);
//   const [fetchError, setFetchError]   = useState("");
//   const [citizenData, setCitizenData] = useState(null);

//   const handleFetchToken = async () => {
//     if (!tokenInput.trim()) {
//       setFetchError("कृपया Token Number टाका.");
//       return;
//     }
//     setFetching(true);
//     setFetchError("");
//     setCitizenData(null);
//     try {
//       const res = await axiosInstance.get(`/citizen/appointment/token/${tokenInput.trim()}`);
//       if (res.data.success && res.data.appointment) {
//         setCitizenData(res.data.appointment);
//       } else {
//         setFetchError("Token सापडले नाही ❌");
//       }
//     } catch (err) {
//       setFetchError(
//         err?.response?.data?.message || "Token fetch करताना error आला ❌"
//       );
//     } finally {
//       setFetching(false);
//     }
//   };

//   const handleProceed = () => {
//     if (hasToken === "yes") {
//       if (!citizenData) { setFetchError("आधी Token Fetch करा."); return; }
//       onProceed(citizenData);   // pass prefill data
//     } else {
//       onProceed(null);          // open blank form
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">

//         {/* Header */}
//         <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl">
//           <div>
//             <p className="text-xs text-blue-200 font-medium tracking-wide uppercase">New Application</p>
//             <h2 className="text-lg font-bold text-white">Token आहे का?</h2>
//           </div>
//           <button
//             onClick={onClose}
//             className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white font-bold transition-colors text-sm"
//           >✕</button>
//         </div>

//         <div className="p-6 space-y-5">

//           {/* Yes / No choice */}
//           <p className="text-sm font-medium text-gray-600">
//             Already have token? (Citizen ने आधी appointment घेतली आहे का?)
//           </p>

//           <div className="flex gap-3">
//             {/* YES */}
//             <button
//               onClick={() => { setHasToken("yes"); setFetchError(""); setCitizenData(null); setTokenInput(""); }}
//               className={`flex-1 py-3 rounded-xl text-sm font-bold border-2 transition-all
//                 ${hasToken === "yes"
//                   ? "bg-blue-600 text-white border-blue-600 shadow-md"
//                   : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600"}`}
//             >
//               ✅ Yes
//             </button>
//             {/* NO */}
//             <button
//               onClick={() => { setHasToken("no"); setFetchError(""); setCitizenData(null); setTokenInput(""); }}
//               className={`flex-1 py-3 rounded-xl text-sm font-bold border-2 transition-all
//                 ${hasToken === "no"
//                   ? "bg-gray-700 text-white border-gray-700 shadow-md"
//                   : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-700"}`}
//             >
//               ❌ No
//             </button>
//           </div>

//           {/* Token input — shown only when Yes */}
//           {hasToken === "yes" && (
//             <div className="space-y-3">
//               <div>
//                 <label className="block text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1.5">
//                   Token Number
//                 </label>
//                 <div className="flex gap-2">
//                   <input
//                     type="text"
//                     placeholder="e.g. VVCMC-20260323-0008"
//                     value={tokenInput}
//                     onChange={(e) => { setTokenInput(e.target.value); setFetchError(""); setCitizenData(null); }}
//                     onKeyDown={(e) => { if (e.key === "Enter") handleFetchToken(); }}
//                     className="flex-1 px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
//                   />
//                   <button
//                     onClick={handleFetchToken}
//                     disabled={fetching}
//                     className="px-4 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 disabled:opacity-60 transition-all flex items-center gap-1.5 whitespace-nowrap"
//                   >
//                     {fetching ? (
//                       <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                     ) : "🔍 Fetch"}
//                   </button>
//                 </div>
//                 {fetchError && (
//                   <p className="text-red-500 text-xs mt-1.5 font-medium">{fetchError}</p>
//                 )}
//               </div>

//               {/* Citizen data preview */}
//               {citizenData && (
//                 <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 space-y-1.5">
//                   <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-1">✅ Citizen सापडला</p>
//                   <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
//                     <div>
//                       <span className="text-xs text-gray-400">Name</span>
//                       <p className="font-semibold text-gray-800">{citizenData.fullName || "--"}</p>
//                     </div>
//                     <div>
//                       <span className="text-xs text-gray-400">Mobile</span>
//                       <p className="font-semibold text-gray-800">{citizenData.mobileNumber || "--"}</p>
//                     </div>
//                     <div>
//                       <span className="text-xs text-gray-400">Token</span>
//                       <p className="font-semibold text-gray-800">{citizenData.tokenId || "--"}</p>
//                     </div>
//                     <div>
//                       <span className="text-xs text-gray-400">Ward</span>
//                       <p className="font-semibold text-gray-800">{citizenData.ward || "--"}</p>
//                     </div>
//                     <div>
//                       <span className="text-xs text-gray-400">Date</span>
//                       <p className="font-semibold text-gray-800">{citizenData.preferredDate || "--"}</p>
//                     </div>
//                     <div>
//                       <span className="text-xs text-gray-400">Slot</span>
//                       <p className="font-semibold text-gray-800">{citizenData.microSlot || citizenData.slotTime || "--"}</p>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* No selection info */}
//           {hasToken === "no" && (
//             <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600">
//               📝 रिकामा form उघडेल. Citizen ची माहिती manually भरावी लागेल.
//             </div>
//           )}

//           {/* Action buttons */}
//           {hasToken !== null && (
//             <div className="flex items-center justify-end gap-3 pt-1">
//               <button
//                 onClick={onClose}
//                 className="px-5 py-2.5 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleProceed}
//                 disabled={hasToken === "yes" && !citizenData}
//                 className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
//               >
//                 ➕ Open Form
//               </button>
//             </div>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// //  REPLY MODAL
// // ─────────────────────────────────────────────
// function ReplyModal({ record, onClose, onSubmit }) {
//   const [replyText, setReplyText]     = useState("");
//   const [newStatus, setNewStatus]     = useState(record.status || "Pending");
//   const [newPriority, setNewPriority] = useState(record.priority || "Normal");
//   const [submitting, setSubmitting]   = useState(false);
//  const [replyDoc, setReplyDoc]           = useState(null);  // ✅ file state
//   if (!record) return null;

//   const handleSubmit = async () => {
//     if (!replyText.trim()) {
//       alert("कृपया reply message लिहा.");
//       return;
//     }
//     setSubmitting(true);
//     await onSubmit({
//       applicationId: record._id,
//       replyMessage:  replyText,
//       status:        newStatus,
//       priority:      newPriority,
//       replyDocument: replyDoc,   // ✅ pass file
//     });
//     setSubmitting(false);
//   };


  

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-indigo-600 to-blue-600 rounded-t-2xl">
//           <div>
//             <p className="text-xs text-indigo-200 font-medium tracking-wide uppercase">Reply to Application</p>
//             <h2 className="text-lg font-bold text-white">{record.tokenNo} — {record.fullName}</h2>
//           </div>
//           <button
//             onClick={onClose}
//             className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white font-bold transition-colors text-sm"
//           >✕</button>
//         </div>

//         <div className="p-6 space-y-5">

//           {/* Applicant quick info */}
//           <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
//             <div>
//               <p className="text-xs text-gray-400">Applicant</p>
//               <p className="font-medium text-gray-800">{record.fullName || "--"}</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Mobile</p>
//               <p className="font-medium text-gray-800">{record.mobile || "--"}</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Subject</p>
//               <p className="font-medium text-gray-800">{record.subject || "--"}</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Office</p>
//               <p className="font-medium text-gray-800">{record.office || "--"}</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Submitted By</p>
//               <p className="font-medium text-gray-800">
//                 {record.submittedByName || "--"}
//                 {record.submittedByRole && (
//                   <span className="ml-1.5 text-xs text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
//                     {record.submittedByRole}
//                   </span>
//                 )}
//               </p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400">Submitted On</p>
//               <p className="font-medium text-gray-800">
//                 {record.submissionDate
//                   ? new Date(record.submissionDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
//                   : "--"}
//               </p>
//             </div>
//           </div>

//           {/* Status Change */}
//           <div>
//             <label className="block text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1.5">
//               Status बदला
//             </label>
//             <div className="flex flex-wrap gap-2">
//               {["Pending", "In Progress", "Resolved", "Rejected"].map((s) => {
//                 const cfg = statusConfig[s];
//                 const active = newStatus === s;
//                 return (
//                   <button
//                     key={s}
//                     onClick={() => setNewStatus(s)}
//                     className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all
//                       ${active ? `${cfg.bg} ${cfg.text} ${cfg.border} ring-2 ring-offset-1 ring-blue-400` : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`}
//                   >
//                     <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
//                     {s}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Priority Change */}
//           {newStatus !== "Resolved" && (
//             <div>
//               <label className="block text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1.5">
//                 Priority बदला
//               </label>
//               <div className="flex flex-wrap gap-2">
//                 {["Normal", "High", "Urgent", "Emergency"].map((p) => {
//                   const cfg = priorityConfig[p];
//                   const active = newPriority === p;
//                   return (
//                     <button
//                       key={p}
//                       onClick={() => setNewPriority(p)}
//                       className={`inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-bold border transition-all
//                         ${active ? `${cfg.bg} ${cfg.color} ${cfg.border} ring-2 ring-offset-1 ring-blue-400` : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`}
//                     >
//                       {p === "Normal" ? "⚪" : "🔴"} {p}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           )}

//           {/* Reply Message */}
//           <div>
//             <label className="block text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1.5">
//               Reply Message <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               rows={5}
//               placeholder="Applicant ला reply message लिहा..."
//               value={replyText}
//               onChange={(e) => setReplyText(e.target.value)}
//               className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 resize-none"
//             />
//             <p className="text-xs text-gray-400 mt-1 text-right">{replyText.length} characters</p>
//           </div>




//   {/* ✅ Reply Document Upload */}
//           <div>
//             <label className="block text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1.5">
//               Reply Document <span className="text-gray-400 text-xs font-normal">(Optional)</span>
//             </label>
//             <div className="border-2 border-dashed border-indigo-200 rounded-xl p-4 bg-indigo-50">
//               <label className="flex items-center gap-3 cursor-pointer">
//                 <div className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition whitespace-nowrap">
//                   📎 Choose File
//                   <input type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
//                     style={{ display: "none" }}
//                     onChange={(e) => setReplyDoc(e.target.files[0] || null)} />
//                 </div>
//                 <span className="text-sm text-gray-500 truncate">
//                   {replyDoc ? replyDoc.name : "PDF, DOC, or Image"}
//                 </span>
//               </label>
//               {replyDoc && (
//                 <div className="mt-3 flex items-center justify-between bg-white border border-indigo-200 rounded-lg px-3 py-2">
//                   <div>
//                     <p className="text-sm font-semibold text-indigo-700">✅ {replyDoc.name}</p>
//                     <p className="text-xs text-gray-400">{(replyDoc.size / 1024).toFixed(1)} KB</p>
//                   </div>
//                   <button onClick={() => setReplyDoc(null)}
//                     className="text-red-400 hover:text-red-600 text-lg font-bold transition">✕</button>
//                 </div>
//               )}
//             </div>
//           </div>




//           {/* Action Buttons */}
//           <div className="flex items-center justify-end gap-3 pt-2">
//             <button
//               onClick={onClose}
//               className="px-5 py-2.5 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSubmit}
//               disabled={submitting}
//               className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl hover:from-indigo-700 hover:to-blue-700 disabled:opacity-60 transition-all shadow-md flex items-center gap-2"
//             >
//               {submitting ? (
//                 <>
//                   <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                   Sending…
//                 </>
//               ) : (
//                 <>📨 Send Reply</>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// //  DETAIL MODAL
// // ─────────────────────────────────────────────
// function DetailModal({ record, onClose }) {
//   if (!record) return null;
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl">
//           <div>
//             <p className="text-xs text-blue-200 font-medium tracking-wide uppercase">Application Detail</p>
//             <h2 className="text-lg font-bold text-white">{record.tokenNo}</h2>
//           </div>
//           <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white font-bold transition-colors text-sm">✕</button>
//         </div>
//         <div className="p-6 space-y-5">
//           <Section title="Citizen Details">
//             <Row label="Full Name"  value={record.fullName} />
//             <Row label="Mobile"     value={record.mobile} />
//             <Row label="Email"      value={record.email} />
//             <Row label="Category"   value={record.category} />
//             <Row label="Ward No"    value={record.wardNo} />
//             <Row label="Address"    value={record.address} />
//             <Row label="Pincode"    value={record.pincode} />
//             <Row label="Taluka"     value={record.taluka} />
//             <Row label="District"   value={record.district} />
//           </Section>
//           <Section title="Identity">
//             <Row label="Type"   value={record.identityType} />
//             <Row label="Number" value={record.identityNumber} />
//           </Section>
//           <Section title="Complaint">
//             <Row label="Subject"     value={record.subject} />
//             <Row label="Description" value={record.description} />
//           </Section>
//           <Section title="Office & Workflow">
//             <Row label="Office"          value={record.office} />
//             <Row label="Main Department" value={record.mainDepartment} />
//             <Row label="Sub Department"  value={record.subDepartment} />
//             {record.status !== "Resolved" && <Row label="Priority" value={record.priority} />}
//             <Row label="Tag To"          value={Array.isArray(record.tagTo) ? record.tagTo.join(", ") : record.tagTo} />
//             <Row label="Follow Up"       value={record.followUp} />
//             <Row label="Status"          value={record.status} />
//             <Row label="Submitted On"    value={formatDate(record.submissionDate)} />
//             {record.status === "Resolved" && (() => {
//               const resolvedReply = record.replies?.find((r) => r.status === "Resolved");
//               if (!resolvedReply) return null;
//               return (
//                 <>
//                   <Row label="Resolved By"   value={resolvedReply.repliedByName || "—"} />
//                   <Row label="Resolved Role"  value={resolvedReply.repliedByRole || "—"} />
//                   <Row label="Resolved On"    value={resolvedReply.createdAt ? new Date(resolvedReply.createdAt).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" }) : "—"} />
//                 </>
//               );
//             })()}
//           </Section>
//           {record.documents && (
//             <Section title="Document">
//               <a href={record.documents} target="_blank" rel="noreferrer"
//                 className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
//                 📄 View Document
//               </a>
//             </Section>
//           )}

//           {record.replies && record.replies.length > 0 && (
//             <div>
//               <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
//                 Replies ({record.replies.length})
//               </p>
//               <div className="space-y-3">
//                 {record.replies.map((reply, i) => {
//                   const cfg = statusConfig[reply.status] || statusConfig["Pending"];
//                   const isResolved = reply.status === "Resolved";
//                   return (
//                     <div key={i} className={`rounded-xl border px-4 py-3 ${isResolved ? "bg-green-50 border-green-300" : "bg-gray-50 border-gray-200"}`}>
//                       <div className="flex items-center justify-between mb-2">
//                         <div className="flex items-center gap-2">
//                           <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${isResolved ? "bg-green-500" : "bg-indigo-500"}`}>
//                             {reply.repliedByName ? reply.repliedByName.split(" ").map(w => w[0]).join("").slice(0,2).toUpperCase() : "?"}
//                           </div>
//                           <div>
//                             <div className="text-sm font-bold text-gray-800 leading-tight">{reply.repliedByName || "—"}</div>
//                             {reply.repliedByRole && (
//                               <div className="text-xs text-indigo-600 font-semibold">{reply.repliedByRole}</div>
//                             )}
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           {reply.status && (
//                             <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
//                               <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
//                               {reply.status}
//                             </span>
//                           )}
//                           <span className="text-xs text-gray-400">
//                             {reply.createdAt ? new Date(reply.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : ""}
//                           </span>
//                         </div>
//                       </div>
//                       <p className={`text-sm leading-relaxed pl-9 ${isResolved ? "text-green-800" : "text-gray-700"}`}>
//                         {reply.replyMessage}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function Section({ title, children }) {
//   return (
//     <div>
//       <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">{title}</p>
//       <div className="bg-gray-50 rounded-xl px-4 py-3 grid grid-cols-2 gap-x-6 gap-y-2">{children}</div>
//     </div>
//   );
// }

// function Row({ label, value }) {
//   return (
//     <div>
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="text-sm text-gray-800 font-medium">{value || "--"}</p>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// //  MAIN COMPONENT
// // ─────────────────────────────────────────────
// export default function AllApplication() {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading]           = useState(true);
//   const [search, setSearch]             = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [selected, setSelected]         = useState(null);
//   const [replyTarget, setReplyTarget]   = useState(null);

//   // ── NEW: token check modal + form state ──────────────────────────────────
//   const [showTokenCheck, setShowTokenCheck] = useState(false);
//   const [showForm, setShowForm]             = useState(false);
//   const [prefillData, setPrefillData]       = useState(null);
//   // ─────────────────────────────────────────────────────────────────────────

//   const navigate = useNavigate();

//   useEffect(() => { fetchApplications(); }, []);

//   const fetchApplications = async () => {
//     try {
//       setLoading(true);
//       const authUserRaw = localStorage.getItem("authUser");
//       const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;

//       const res = await axiosInstance.get("/getAllApplications", {
//         params: {
//           role:                   authUser?.role,
//           userId:                 authUser?.id,
//           userOffice:             authUser?.office,
//           userDepartmentCategory: authUser?.departmentCategory,
//           userDepartmentName:     authUser?.departmentName,
//         },
//       });

//       const data = res.data;
//       if (data.success) setApplications(data.data || []);
//     } catch (err) {
//       console.error("Error fetching applications:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ── NEW: handle Add button click ─────────────────────────────────────────
//   const handleAddClick = () => {
//     setShowTokenCheck(true);
//   };

//   // ── NEW: called from TokenCheckModal when user clicks "Open Form" ────────
//   const handleTokenCheckProceed = (citizenAppointment) => {
//     setShowTokenCheck(false);
//     if (citizenAppointment) {


//       const normalizeWard = (ward) => {
//   if (!ward) return "";
//   // "Ward A" → "Ward-A"
//   return ward.replace(/Ward\s+/i, "Ward-");
// };

//       // Map appointment fields → form fields for JansanwadAppform prefill



//       setPrefillData({
//         fullName:     citizenAppointment.fullName        || "",
//         mobile:       citizenAppointment.mobileNumber    || "",
//         email:        citizenAppointment.email           || "",
//         address:      citizenAppointment.address         || "",
//         pincode:      citizenAppointment.pincode         || "",
//         wardNo:       citizenAppointment.ward            || "",
//         // ward:         citizenAppointment.ward            || "",   // ✅ ward from appointment
//           ward:         normalizeWard(citizenAppointment.ward), // ✅ "Ward A" → "Ward-A"
//         visitorPhoto: citizenAppointment.visitorPhoto    || "",   // ✅ existing photo path
//         // pass raw appointment reference fields for convenience
//         _tokenId:       citizenAppointment.tokenId        || "",
//         _citizenId:     citizenAppointment.citizenId      || "",
//         _preferredDate: citizenAppointment.preferredDate  || "",
//         _slotTime:      citizenAppointment.slotTime        || "",
//         _microSlot:     citizenAppointment.microSlot       || "",
//       });
//     } else {
//       setPrefillData(null);   // blank form
//     }
//     setShowForm(true);
//   };

//   // ── NEW: close form ───────────────────────────────────────────────────────
//   const handleFormClose = () => {
//     setShowForm(false);
//     setPrefillData(null);
//     fetchApplications();   // refresh list after potential submission
//   };
//   // ─────────────────────────────────────────────────────────────────────────

//   // ── Reply Submit ──
//   // const handleReplySubmit = async ({ applicationId, replyMessage, status, priority }) => {
//   //   try {
//   //     const authUserRaw = localStorage.getItem("authUser");
//   //     const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;

//   //     const repliedByName = authUser?.submittedByName || authUser?.name || authUser?.fullName || "";
//   //     const repliedByRole = authUser?.submittedByRole || authUser?.role || "";
//   //     const repliedById   = authUser?.submittedById   || authUser?.id  || "";

//   //     await axiosInstance.post("/replyApplication", {
//   //       applicationId,
//   //       replyMessage,
//   //       status,
//   //       priority,
//   //       repliedBy:     repliedById,
//   //       repliedByName: repliedByName,
//   //       repliedByRole: repliedByRole,
//   //     });

//   //     const newReply = {
//   //       replyMessage,
//   //       status,
//   //       priority,
//   //       repliedBy:     repliedById,
//   //       repliedByName: repliedByName,
//   //       repliedByRole: repliedByRole,
//   //       createdAt:     new Date().toISOString(),
//   //     };

//   //     setApplications((prev) =>
//   //       prev.map((app) =>
//   //         app._id === applicationId
//   //           ? { ...app, status, priority, replies: [...(app.replies || []), newReply] }
//   //           : app
//   //       )
//   //     );

//   //     alert("✅ Reply यशस्वीरित्या पाठवली!");
//   //     setReplyTarget(null);
//   //   } catch (err) {
//   //     console.error("Reply error:", err);
//   //     alert("❌ Reply पाठवताना error आला. पुन्हा try करा.");
//   //   }
//   // };





// //   const handleReplySubmit = async ({ applicationId, replyMessage, status, priority, replyDocument }) => {
// //   try {
// //     const authUserRaw = localStorage.getItem("authUser");
// //     const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;

// //     const repliedByName = authUser?.submittedByName || authUser?.name || authUser?.fullName || "";
// //     const repliedByRole = authUser?.submittedByRole || authUser?.role || "";
// //     const repliedById   = authUser?.submittedById   || authUser?.id  || "";

// //     // ✅ Use FormData to support file upload
// //     const payload = new FormData();
// //     payload.append("applicationId",  applicationId);
// //     payload.append("replyMessage",   replyMessage);
// //     payload.append("status",         status);
// //     payload.append("priority",       priority);
// //     payload.append("repliedBy",      repliedById);
// //     payload.append("repliedByName",  repliedByName);
// //     payload.append("repliedByRole",  repliedByRole);
// //     if (replyDocument) {
// //       payload.append("replyDocument", replyDocument);  // ✅ attach file
// //     }

// //     await axiosInstance.post("/replyApplication", payload, {
// //       headers: { "Content-Type": "multipart/form-data" },
// //     });

// //     const newReply = {
// //       replyMessage,
// //       status,
// //       priority,
// //       repliedBy:     repliedById,
// //       repliedByName: repliedByName,
// //       repliedByRole: repliedByRole,
// //       createdAt:     new Date().toISOString(),
// //     };

// //     setApplications((prev) =>
// //       prev.map((app) =>
// //         app._id === applicationId
// //           ? { ...app, status, priority, replies: [...(app.replies || []), newReply] }
// //           : app
// //       )
// //     );

// //     alert("✅ Reply यशस्वीरित्या पाठवली!");
// //     setReplyTarget(null);
// //   } catch (err) {
// //     console.error("Reply error:", err);
// //     alert("❌ Reply पाठवताना error आला. पुन्हा try करा.");
// //   }
// // };


// // const handleReplySubmit = async ({ applicationId, replyMessage, status, priority, replyDocument }) => {
// //   try {
// //     const authUserRaw = localStorage.getItem("authUser");
// //     const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;

// //     const repliedByName = authUser?.submittedByName || authUser?.name || authUser?.fullName || "";
// //     const repliedByRole = authUser?.submittedByRole || authUser?.role || "";
// //     const repliedById   = authUser?.submittedById   || authUser?.id  || "";

// //     // ✅ Find the record to get tokenNo
// //     const record = applications.find(a => a._id === applicationId);
// //     const tokenNo = record?.tokenNo;

// //     if (!tokenNo) {
// //       alert("❌ Token No सापडले नाही.");
// //       return;
// //     }

// //     // ✅ FormData with file support
// //     const payload = new FormData();
// //     payload.append("replyMessage",   replyMessage);
// //     payload.append("status",         status);
// //     payload.append("priority",       priority);
// //     payload.append("repliedBy",      repliedById);
// //     payload.append("repliedByName",  repliedByName);
// //     payload.append("repliedByRole",  repliedByRole);
// //     if (replyDocument) {
// //       payload.append("replyDocument", replyDocument); // ✅ attach file
// //     }

// //     // ✅ PATCH /replyApplication/:tokenNo  (same as ApplicationCitizens pattern)

 


// //     // await axiosInstance.patch(`/replyApplication/${tokenNo}`, payload, {
// //     //   headers: { "Content-Type": "multipart/form-data" },
// //     // });



// //     // ✅ Also sync CitizenAppointment via updateAppointmentStatus (same as ApplicationCitizens)
// // const appointment = await axiosInstance.get(`/citizen/appointment/token/${tokenNo}`).catch(() => null);
// // if (appointment?.data?.appointment?._id) {
// //   const syncPayload = new FormData();
// //   syncPayload.append("status",    status.toLowerCase());
// //   syncPayload.append("adminNote", replyMessage);
// //   if (replyDocument) syncPayload.append("replyDocument", replyDocument);

// //   await axiosInstance.patch(
// //     `/citizen/admin/update-status/${appointment.data.appointment._id}`,
// //     syncPayload,
// //     { headers: { "Content-Type": "multipart/form-data" } }
// //   ).catch(() => null); // silent fail — main reply already succeeded
// // }

// //     const newReply = {
// //       replyMessage,
// //       status,
// //       priority,
// //       repliedBy:     repliedById,
// //       repliedByName: repliedByName,
// //       repliedByRole: repliedByRole,
// //       createdAt:     new Date().toISOString(),
// //     };

// //     setApplications((prev) =>
// //       prev.map((app) =>
// //         app._id === applicationId
// //           ? { ...app, status, priority, replies: [...(app.replies || []), newReply] }
// //           : app
// //       )
// //     );

// //     alert("✅ Reply यशस्वीरित्या पाठवली!");
// //     setReplyTarget(null);
// //   } catch (err) {
// //     console.error("Reply error:", err);
// //     alert(err?.response?.data?.message || "❌ Reply पाठवताना error आला. पुन्हा try करा.");
// //   }
// // };

// // const handleReplySubmit = async ({ applicationId, replyMessage, status, priority, replyDocument }) => {
// //   try {
// //     const authUserRaw = localStorage.getItem("authUser");
// //     const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;

// //     const repliedByName = authUser?.submittedByName || authUser?.name || authUser?.fullName || "";
// //     const repliedByRole = authUser?.submittedByRole || authUser?.role || "";
// //     const repliedById   = authUser?.submittedById   || authUser?.id  || "";

// //     const record  = applications.find(a => a._id === applicationId);
// //     const tokenNo = record?.tokenNo;

// //     if (!tokenNo) {
// //       alert("❌ Token No सापडले नाही.");
// //       return;
// //     }

// //     // ── Step 1: replyApplication ──────────────────────────────────────────
// //     const payload = new FormData();
// //     payload.append("replyMessage",  replyMessage);
// //     payload.append("status",        status);
// //     payload.append("priority",      priority);
// //     payload.append("repliedBy",     repliedById);
// //     payload.append("repliedByName", repliedByName);
// //     payload.append("repliedByRole", repliedByRole);
// //     if (replyDocument) payload.append("replyDocument", replyDocument);

// //     await axiosInstance.patch(`/citizen/admin/update-status/${record._id}`, payload, {
// //       headers: { "Content-Type": "multipart/form-data" },
// //     });

// //     // ── Step 2: sync CitizenAppointment (only valid statuses) ─────────────
// //     const validCitizenStatuses = ["pending", "approved", "rejected", "expired"];
// //     const citizenStatus = status.toLowerCase();

// //     if (validCitizenStatuses.includes(citizenStatus)) {
// //       const apptRes = await axiosInstance.get(`/citizen/appointment/token/${tokenNo}`).catch(() => null);
// //       if (apptRes?.data?.appointment?._id) {
// //         const syncPayload = new FormData();
// //         syncPayload.append("status",    citizenStatus);
// //         syncPayload.append("adminNote", replyMessage);
// //         if (replyDocument) syncPayload.append("replyDocument", replyDocument);

// //         await axiosInstance.patch(
// //           `/citizen/admin/update-status/${record._id}`,
// //           syncPayload,
// //           { headers: { "Content-Type": "multipart/form-data" } }
// //         ).catch(() => null); // silent fail
// //       }
// //     }

// //     // ── Step 3: update local state ────────────────────────────────────────
// //     const newReply = {
// //       replyMessage,
// //       status,
// //       priority,
// //       repliedBy:     repliedById,
// //       repliedByName: repliedByName,
// //       repliedByRole: repliedByRole,
// //       createdAt:     new Date().toISOString(),
// //     };

// //     setApplications((prev) =>
// //       prev.map((app) =>
// //         app._id === applicationId
// //           ? { ...app, status, priority, replies: [...(app.replies || []), newReply] }
// //           : app
// //       )
// //     );

// //     alert("✅ Reply यशस्वीरित्या पाठवली!");
// //     setReplyTarget(null);
// //   } catch (err) {
// //     console.error("Reply error:", err);
// //     alert(err?.response?.data?.message || "❌ Reply पाठवताना error आला. पुन्हा try करा.");
// //   }
// // };


// // const handleReplySubmit = async ({ applicationId, replyMessage, status, priority, replyDocument }) => {
// //   try {
// //     const authUserRaw = localStorage.getItem("authUser");
// //     const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;

// //     const repliedByName = authUser?.submittedByName || authUser?.name || authUser?.fullName || "";
// //     const repliedByRole = authUser?.submittedByRole || authUser?.role || "";
// //     const repliedById   = authUser?.submittedById   || authUser?.id  || "";

// //     const foundApp = applications.find(a => a._id === applicationId);
// //     const tokenNo  = foundApp?.tokenNo;

// //     if (!tokenNo) {
// //       alert("❌ Token No सापडले नाही.");
// //       return;
// //     }

// //     // ── Step 1: replyApplication (InwardApplication) ──────────────────────
// //     const payload = new FormData();
// //     payload.append("replyMessage",  replyMessage);
// //     payload.append("status",        status);
// //     payload.append("priority",      priority);
// //     payload.append("repliedBy",     repliedById);
// //     payload.append("repliedByName", repliedByName);
// //     payload.append("repliedByRole", repliedByRole);
// //     if (replyDocument) payload.append("replyDocument", replyDocument);

// //     await axiosInstance.patch(`/replyApplication/${tokenNo}`, payload, {
// //       headers: { "Content-Type": "multipart/form-data" },
// //     });

// //     // ── Step 2: updateAppointmentStatus (CitizenAppointment) ──────────────
// //     const validCitizenStatuses = ["pending", "approved", "rejected", "expired"];
// //     const citizenStatus = status.toLowerCase();

// //     if (validCitizenStatuses.includes(citizenStatus)) {
// //       const apptRes = await axiosInstance.get(`/citizen/appointment/token/${tokenNo}`).catch(() => null);
// //       if (apptRes?.data?.appointment?._id) {

// //         // ✅ same pattern as handleSave in ApplicationCitizens
// //         const syncPayload = new FormData();
// //         syncPayload.append("status",    citizenStatus);
// //         syncPayload.append("adminNote", replyMessage);
// //         if (replyDocument) syncPayload.append("replyDocument", replyDocument);

// //         await axiosInstance.patch(
// //           `/citizen/admin/update-status/${apptRes.data.appointment._id}`,
// //           syncPayload,
// //           { headers: { "Content-Type": "multipart/form-data" } }
// //         ).catch(() => null); // ✅ silent fail — main reply already succeeded
// //       }
// //     }

// //     // ── Step 3: update local state ────────────────────────────────────────
// //     const newReply = {
// //       replyMessage, status, priority,
// //       repliedBy:     repliedById,
// //       repliedByName: repliedByName,
// //       repliedByRole: repliedByRole,
// //       createdAt:     new Date().toISOString(),
// //     };

// //     setApplications((prev) =>
// //       prev.map((app) =>
// //         app._id === applicationId
// //           ? { ...app, status, priority, replies: [...(app.replies || []), newReply] }
// //           : app
// //       )
// //     );

// //     alert("✅ Reply यशस्वीरित्या पाठवली!");
// //     setReplyTarget(null);
// //   } catch (err) {
// //     console.error("Reply error:", err);
// //     alert(err?.response?.data?.message || "❌ Reply पाठवताना error आला. पुन्हा try करा.");
// //   }
// // };


// const handleReplySubmit = async ({ applicationId, replyMessage, status, priority, replyDocument }) => {
//   try {
//     const authUserRaw = localStorage.getItem("authUser");
//     const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;

//     const repliedByName = authUser?.submittedByName || authUser?.name || authUser?.fullName || "";
//     const repliedByRole = authUser?.submittedByRole || authUser?.role || "";
//     const repliedById   = authUser?.submittedById   || authUser?.id  || "";

//     const foundApp = applications.find(a => a._id === applicationId);
//     const tokenNo  = foundApp?.tokenNo;

//     if (!tokenNo) {
//       alert("❌ Token No सापडले नाही.");
//       return;
//     }

//     // ── Get CitizenAppointment _id via tokenNo ────────────────────────────
//     const apptRes = await axiosInstance.get(`/citizen/appointment/token/${tokenNo}`).catch(() => null);

//     if (!apptRes?.data?.appointment?._id) {
//       alert("❌ Citizen Appointment सापडले नाही.");
//       return;
//     }

//     const citizenApptId = apptRes.data.appointment._id;

//     // ── Same API as ApplicationCitizens handleSave ────────────────────────
//     const formData = new FormData();
//     formData.append("status",        status.toLowerCase());
//     formData.append("adminNote",     replyMessage);
//     formData.append("replyMessage",  replyMessage);
//     formData.append("priority",      priority);
//     formData.append("repliedBy",     repliedById);
//     formData.append("repliedByName", repliedByName);
//     formData.append("repliedByRole", repliedByRole);
//     if (replyDocument) formData.append("replyDocument", replyDocument);

//     await axiosInstance.patch(
//       `/citizen/admin/update-status/${citizenApptId}`, // ✅ same API as ApplicationCitizens
//       formData,
//       { headers: { "Content-Type": "multipart/form-data" } }
//     );

//     // ── Update local state ────────────────────────────────────────────────
//     const newReply = {
//       replyMessage, status, priority,
//       repliedBy:     repliedById,
//       repliedByName: repliedByName,
//       repliedByRole: repliedByRole,
//       createdAt:     new Date().toISOString(),
//     };

//     setApplications((prev) =>
//       prev.map((app) =>
//         app._id === applicationId
//           ? { ...app, status, priority, replies: [...(app.replies || []), newReply] }
//           : app
//       )
//     );

//     alert("✅ Reply यशस्वीरित्या पाठवली!");
//     setReplyTarget(null);
//   } catch (err) {
//     console.error("Reply error:", err);
//     alert(err?.response?.data?.message || "❌ Reply पाठवताना error आला. पुन्हा try करा.");
//   }
// };

//   const filtered = applications.filter((app) => {
//     const matchSearch =
//       !search ||
//       app.fullName?.toLowerCase().includes(search.toLowerCase()) ||
//       app.inwardNo?.toLowerCase().includes(search.toLowerCase()) ||
//       app.subject?.toLowerCase().includes(search.toLowerCase()) ||
//       app.mobile?.includes(search);
//     const matchStatus = statusFilter === "All" || app.status === statusFilter;
//     return matchSearch && matchStatus;
//   });

//   const statusCounts = ["All", "Pending", "In Progress", "Resolved", "Rejected"].map((s) => ({
//     label: s,
//     count: s === "All" ? applications.length : applications.filter((a) => a.status === s).length,
//   }));

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
//               All Applications
//               <span className="text-base font-bold text-blue-600 bg-blue-100 px-3 py-0.5 rounded-full border border-blue-200">
//                 {applications.length}
//               </span>
//             </h1>
//             <p className="text-base font-medium text-gray-500 mt-1">जन संवाद - Applications</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <button onClick={fetchApplications}
//               className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 shadow-sm transition-all">
//               🔄 Refresh
//             </button>
//             {/* ── MODIFIED: now opens TokenCheckModal instead of navigating ── */}
//             <button
//               onClick={handleAddClick}
//               className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 shadow-sm transition-all">
//               ➕ Add
//             </button>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-4 mb-5 flex flex-wrap items-center gap-4">
//           <div className="relative flex-1 min-w-[200px]">
//             <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
//             <input type="text" placeholder="Search by name, inward no, subject..." value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full pl-10 pr-4 py-2.5 text-sm font-medium border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50" />
//           </div>
//           <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
//             {statusCounts.map(({ label, count }) => (
//               <button key={label} onClick={() => setStatusFilter(label)}
//                 className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${statusFilter === label ? "bg-white text-blue-600 shadow-md" : "text-gray-500 hover:text-gray-700"}`}>
//                 {label}
//                 <span className={`ml-1.5 text-xs font-bold px-1.5 py-0.5 rounded-full ${statusFilter === label ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-500"}`}>
//                   {count}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Table */}
//         <div style={{ background: "#fff", border: "1px solid #e0e0e0", borderRadius: 4, overflow: "hidden", boxShadow: "0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 1px 3px rgba(0,0,0,.12)", fontFamily: "'Roboto','Segoe UI',sans-serif" }}>
//           <style>{`
//             .mui-th { padding: 0 16px; height: 56px; font-weight: 500; font-size: .875rem; color: rgba(0,0,0,.87); text-align: left; white-space: nowrap; background: #fff; border-bottom: 1px solid rgba(224,224,224,1); }
//             .mui-tr { border-bottom: 1px solid rgba(224,224,224,1); cursor: pointer; transition: background .15s; }
//             .mui-tr:last-child { border-bottom: none; }
//             .mui-tr:hover { background: rgba(0,0,0,.04) !important; }
//             .mui-td { padding: 0 16px; height: 52px; vertical-align: middle; font-size: .875rem; }
//             .inward-chip { display:inline-block; padding: 2px 8px; background:#f5f5f5; border:1px solid #e0e0e0; border-radius:4px; font-family:monospace; font-size:.8125rem; color:rgba(0,0,0,.7); }
//             .doc-link { display:inline-flex; align-items:center; gap:4px; color:#1976d2; font-size:.875rem; font-weight:500; text-decoration:none; padding:4px 8px; border-radius:4px; }
//             .doc-link:hover { background:rgba(25,118,210,.08); }
//             .reply-btn { display:inline-flex; align-items:center; gap:4px; color:#fff; background:#4f46e5; font-size:.8125rem; font-weight:600; border:none; padding:5px 12px; border-radius:6px; cursor:pointer; transition:background .15s; }
//             .reply-btn:hover { background:#4338ca; }
//             .mui-footer { display:flex; align-items:center; justify-content:space-between; padding:0 16px; height:52px; border-top:1px solid rgba(224,224,224,1); font-size:.875rem; color:rgba(0,0,0,.6); }
//           `}</style>

//           <div style={{ overflowX: "auto" }}>
//             <table style={{ width: "100%", borderCollapse: "collapse" }}>
//               <thead>
//                 <tr>
//                   {["Reply","#","Applicant","tokenNo","Status","Subject","Priority","Date","Submitted By","Reply By","Document"].map((h) => (
//                     <th key={h} className="mui-th">{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td colSpan={12} style={{ textAlign: "center", padding: "64px 0", color: "rgba(0,0,0,.38)" }}>
//                       <div style={{ width: 32, height: 32, margin: "0 auto 12px", border: "3px solid #e0e0e0", borderTopColor: "#1976d2", borderRadius: "50%", animation: "spin .8s linear infinite" }} />
//                       <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
//                       <div>Loading applications…</div>
//                     </td>
//                   </tr>
//                 ) : filtered.length === 0 ? (
//                   <tr>
//                     <td colSpan={12} style={{ textAlign: "center", padding: "64px 0", color: "rgba(0,0,0,.38)" }}>
//                       <div style={{ fontSize: 40, marginBottom: 8 }}>📭</div>
//                       <div>No applications found</div>
//                     </td>
//                   </tr>
//                 ) : (
//                   filtered.map((app, index) => {
//                     return (
//                       <tr
//                         key={app._id}
//                         onClick={() => setSelected(app)}
//                         className="mui-tr"
//                         style={{ background: index % 2 === 0 ? "#fff" : "#fafafa" }}
//                       >
//                         {/* ── REPLY BUTTON ── */}
//                         <td className="mui-td" style={{ width: 90 }} onClick={(e) => e.stopPropagation()}>
//                           <button className="reply-btn" onClick={() => setReplyTarget(app)}>
//                             📨 Reply
//                           </button>
//                         </td>

//                         <td className="mui-td" style={{ color: "rgba(0,0,0,.54)", width: 60 }}>{index + 1}</td>
//                         <td className="mui-td" style={{ minWidth: 180 }}>
//                           <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                             <Avatar name={app.fullName} index={index} />
//                             <div>
//                               <div style={{ fontSize: ".75rem", color: "rgba(0,0,0,.54)", marginTop: 1 }}>{app.mobile}</div>
//                               <div style={{ fontSize: ".875rem", fontWeight: 400, color: "rgba(0,0,0,.87)", lineHeight: 1.4 }}>{app.fullName}</div>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="mui-td" style={{ width: 130 }}><span className="inward-chip">{app.tokenNo}</span></td>
//                         <td className="mui-td" style={{ width: 110 }}><StatusBadge status={app.status} /></td>
//                         <td className="mui-td" style={{ minWidth: 160, maxWidth: 200 }}>
//                           <div style={{ fontSize: ".875rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 180 }}>{app.subject || "—"}</div>
//                         </td>
//                         <td className="mui-td" style={{ minWidth: 140, maxWidth: 180 }}>
//                           <div style={{ fontSize: ".875rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 160 }}>{app.mainDepartment || "—"}</div>
//                           <div style={{ fontSize: ".75rem", color: "rgba(0,0,0,.54)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 160 }}>{app.subDepartment}</div>
//                         </td>
//                         <td className="mui-td" style={{ width: 100 }}>
//                           {app.status !== "Resolved"
//                             ? <PriorityBadge priority={app.priority} />
//                             : <span style={{ color: "rgba(0,0,0,.26)" }}>—</span>}
//                         </td>
//                         <td className="mui-td" style={{ width: 110, whiteSpace: "nowrap" }}>{formatDate(app.submissionDate)}</td>

//                         {/* ── SUBMITTED BY ── */}
//                         <td className="mui-td" style={{ minWidth: 150 }}>
//                           {app.submittedByName ? (
//                             <div>
//                               <div style={{ fontSize: ".8125rem", fontWeight: 600, color: "rgba(0,0,0,.8)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 130 }}>
//                                 {app.submittedByName}
//                               </div>
//                               {app.submittedByRole && (
//                                 <div style={{ fontSize: ".7rem", color: "rgba(0,0,0,.4)", whiteSpace: "nowrap" }}>
//                                   {app.submittedByRole}
//                                 </div>
//                               )}
//                             </div>
//                           ) : (
//                             <span style={{ color: "rgba(0,0,0,.26)" }}>—</span>
//                           )}
//                         </td>

//                         {/* ── REPLY BY ── */}
//                         <td className="mui-td" style={{ minWidth: 150 }}>
//                           {app.replies && app.replies.length > 0 ? (() => {
//                             const firstReply = app.replies[0];
//                             const isResolved = firstReply.status === "Resolved";
//                             const moreCount  = app.replies.length - 1;
//                             return (
//                               <div>
//                                 <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
//                                   <span style={{ width: 7, height: 7, borderRadius: "50%", flexShrink: 0, background: isResolved ? "#22c55e" : "#6366f1", display: "inline-block" }} />
//                                   <div style={{ fontSize: ".8125rem", fontWeight: 600, color: isResolved ? "#15803d" : "rgba(0,0,0,.8)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 120 }}>
//                                     {firstReply.repliedByName || "—"}
//                                   </div>
//                                 </div>
//                                 {firstReply.repliedByRole && (
//                                   <div style={{ fontSize: ".7rem", color: "rgba(0,0,0,.4)", whiteSpace: "nowrap", paddingLeft: 11 }}>
//                                     {firstReply.repliedByRole}
//                                   </div>
//                                 )}
//                                 {moreCount > 0 && (
//                                   <div style={{ fontSize: ".7rem", color: "#6366f1", fontWeight: 600, paddingLeft: 11, marginTop: 1 }}>
//                                     +{moreCount} more
//                                   </div>
//                                 )}
//                               </div>
//                             );
//                           })() : (
//                             <span style={{ color: "rgba(0,0,0,.26)" }}>—</span>
//                           )}
//                         </td>

//                         <td className="mui-td" style={{ width: 80 }} onClick={(e) => e.stopPropagation()}>
//                           {app.documents ? (
//                             <a href={app.documents} target="_blank" rel="noreferrer" className="doc-link">
//                               <svg viewBox="0 0 24 24" width="16" height="16" fill="#1976d2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
//                               View
//                             </a>
//                           ) : (
//                             <span style={{ color: "rgba(0,0,0,.26)" }}>—</span>
//                           )}
//                         </td>
//                       </tr>
//                     );
//                   })
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {!loading && filtered.length > 0 && (
//             <div className="mui-footer">
//               <span>Showing <strong style={{ color: "rgba(0,0,0,.87)" }}>{filtered.length}</strong> of{" "}
//                 <strong style={{ color: "rgba(0,0,0,.87)" }}>{applications.length}</strong> applications</span>
//               <span style={{ color: "rgba(0,0,0,.38)", fontSize: ".8125rem" }}>👆 Click any row to view full details</span>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Detail Modal */}
//       {selected && <DetailModal record={selected} onClose={() => setSelected(null)} />}

//       {/* Reply Modal */}
//       {replyTarget && (
//         <ReplyModal
//           record={replyTarget}
//           onClose={() => setReplyTarget(null)}
//           onSubmit={handleReplySubmit}
//         />
//       )}

//       {/* ── NEW: Token Check Modal ── */}
//       {showTokenCheck && (
//         <TokenCheckModal
//           onClose={() => setShowTokenCheck(false)}
//           onProceed={handleTokenCheckProceed}
//         />
//       )}

//       {/* ── NEW: Application Form (with optional prefill) ── */}
//       {showForm && (
//         <JansanwadAppform
//           onClose={handleFormClose}
//           prefillData={prefillData}
//         />
//       )}
//     </div>
//   );
// }

// ============================================

// import React, { useState, useEffect } from "react";
// import JansanwadAppform from "./JansanwadAppform";
// import axiosInstance from "../services/axiosInstance";
// import { useNavigate } from "react-router-dom";

// // ── Style constants (Availability.jsx palette) ────────────────────────────────
// const C = {
//   bg:         "#f0f4f0",
//   white:      "#fff",
//   dark:       "#1a4a2e",
//   green:      "#1a7a4a",
//   greenLight: "#e8f5ee",
//   greenBadge: "#d4edda",
//   greenBorder:"#c8e0cc",
//   muted:      "#5a7a6a",
//   rowHover:   "#f8fdf8",
//   rowBorder:  "#eef4ee",
//   red:        "#c0392b",
//   redLight:   "#fdecea",
// };

// // ── Status config ─────────────────────────────────────────────────────────────
// const statusConfig = {
//   Pending:      { bg:"#fff8e1", color:"#b26a00", border:"#ffe082", dot:"#f59e0b", label:"Pending"     },
//   Resolved:     { bg:C.greenLight, color:C.green, border:"#a8d5b5", dot:"#22c55e", label:"Resolved"   },
//   Rejected:     { bg:C.redLight, color:C.red, border:"#f5c6cb", dot:C.red, label:"Rejected"           },
//   "In Progress":{ bg:"#e8f0fe", color:"#1a4a8a", border:"#93c5fd", dot:"#3b82f6", label:"In Progress" },
// };
// function sc(status) { return statusConfig[status] || statusConfig["Pending"]; }

// const priorityConfig = {
//   Normal:    { color: C.muted,   bg: "#f0f4f0",  border: C.greenBorder },
//   Urgent:    { color: "#b26a00", bg: "#fff8e1",  border: "#ffe082"     },
//   Emergency: { color: C.red,     bg: C.redLight, border: "#f5c6cb"     },
//   High:      { color: C.red,     bg: C.redLight, border: "#f5c6cb"     },
// };

// const AVATAR_COLORS = ["#6366f1","#0ea5e9","#f59e0b","#10b981","#ef4444","#8b5cf6","#ec4899","#14b8a6"];
// function avatarColor(name) {
//   let h = 0;
//   for (let i = 0; i < (name||"").length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
//   return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
// }
// function initials(name) {
//   if (!name) return "?";
//   return name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
// }
// function formatDate(dateStr) {
//   if (!dateStr) return "--";
//   return new Date(dateStr).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" });
// }

// // ── Badges ────────────────────────────────────────────────────────────────────
// function StatusBadge({ status }) {
//   const cfg = sc(status);
//   return (
//     <span style={{ display:"inline-flex", alignItems:"center", gap:5, padding:"4px 10px", borderRadius:20, fontSize:11, fontWeight:700, background:cfg.bg, color:cfg.color, border:`1px solid ${cfg.border}`, whiteSpace:"nowrap" }}>
//       <span style={{ width:6, height:6, borderRadius:"50%", background:cfg.dot, display:"inline-block" }} />{cfg.label}
//     </span>
//   );
// }
// function PriorityBadge({ priority }) {
//   const cfg = priorityConfig[priority] || priorityConfig["Normal"];
//   return (
//     <span style={{ display:"inline-flex", alignItems:"center", gap:4, padding:"3px 9px", borderRadius:8, fontSize:11, fontWeight:700, background:cfg.bg, color:cfg.color, border:`1px solid ${cfg.border}` }}>
//       {(priority==="Urgent"||priority==="Emergency"||priority==="High")?"🔴":"⚪"} {priority}
//     </span>
//   );
// }

// // ── Mobile Card ───────────────────────────────────────────────────────────────
// function AppCard({ app, onReply, onView }) {
//   const cfg   = sc(app.status);
//   const color = avatarColor(app.fullName);
//   return (
//     <div style={{ background:C.white, borderRadius:12, border:`1.5px solid ${C.greenBorder}`, padding:"14px 16px", marginBottom:10, boxShadow:"0 1px 6px rgba(0,0,0,0.06)" }}
//       onClick={() => onView(app)}>
//       {/* Top */}
//       <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:10 }}>
//         <div style={{ display:"flex", alignItems:"center", gap:10 }}>
//           <div style={{ width:40, height:40, borderRadius:"50%", background:color, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:800, fontSize:14, flexShrink:0 }}>
//             {initials(app.fullName)}
//           </div>
//           <div>
//             <p style={{ margin:0, fontSize:14, fontWeight:700, color:C.dark }}>{app.fullName||"—"}</p>
//             <p style={{ margin:0, fontSize:12, color:C.muted }}>{app.mobile||"—"}</p>
//           </div>
//         </div>
//         <StatusBadge status={app.status} />
//       </div>
//       {/* Chips */}
//       <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8, flexWrap:"wrap" }}>
//         <span style={{ background:C.greenLight, color:C.green, borderRadius:6, padding:"2px 9px", fontSize:11, fontWeight:700, fontFamily:"monospace" }}>{app.tokenNo||"—"}</span>
//         {app.status!=="Resolved"&&app.priority&&<PriorityBadge priority={app.priority}/>}
//       </div>
//       {app.subject&&<p style={{ margin:"0 0 8px", fontSize:13, color:C.dark, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{app.subject}</p>}
//       {/* Meta */}
//       <div style={{ display:"flex", flexWrap:"wrap", gap:"3px 10px", fontSize:11, color:C.muted, marginBottom:12 }}>
//         {app.mainDepartment&&<span>🏢 {app.mainDepartment}</span>}
//         {app.submissionDate&&<span>📅 {formatDate(app.submissionDate)}</span>}
//         {app.submittedByName&&<span>👤 {app.submittedByName}</span>}
//       </div>
//       {/* Actions */}
//       <div style={{ display:"flex", gap:8 }} onClick={e=>e.stopPropagation()}>
//         <button onClick={()=>onReply(app)} style={{ flex:1, background:C.greenLight, border:`1.5px solid ${C.green}`, borderRadius:8, padding:"8px 0", cursor:"pointer", color:C.green, fontSize:13, fontWeight:700 }}>📨 Reply</button>
//         <button onClick={()=>onView(app)}  style={{ flex:1, background:"#f8fdf8",    border:`1.5px solid ${C.greenBorder}`, borderRadius:8, padding:"8px 0", cursor:"pointer", color:C.dark,  fontSize:13, fontWeight:600 }}>👁 View</button>
//         {app.documents&&(
//           <a href={app.documents} target="_blank" rel="noreferrer" style={{ flex:1, background:C.greenLight, border:`1.5px solid ${C.greenBorder}`, borderRadius:8, padding:"8px 0", cursor:"pointer", color:C.green, fontSize:13, fontWeight:600, textDecoration:"none", textAlign:"center" }}>📄 Doc</a>
//         )}
//       </div>
//     </div>
//   );
// }

// // ── TOKEN CHECK MODAL ─────────────────────────────────────────────────────────
// function TokenCheckModal({ onClose, onProceed }) {
//   const [hasToken, setHasToken]       = useState(null);
//   const [tokenInput, setTokenInput]   = useState("");
//   const [fetching, setFetching]       = useState(false);
//   const [fetchError, setFetchError]   = useState("");
//   const [citizenData, setCitizenData] = useState(null);

//   const handleFetchToken = async () => {
//     if (!tokenInput.trim()) { setFetchError("कृपया Token Number टाका."); return; }
//     setFetching(true); setFetchError(""); setCitizenData(null);
//     try {
//       const res = await axiosInstance.get(`/citizen/appointment/token/${tokenInput.trim()}`);
//       if (res.data.success && res.data.appointment) setCitizenData(res.data.appointment);
//       else setFetchError("Token सापडले नाही ❌");
//     } catch (err) { setFetchError(err?.response?.data?.message || "Token fetch करताना error आला ❌"); }
//     finally { setFetching(false); }
//   };

//   const handleProceed = () => {
//     if (hasToken === "yes") { if (!citizenData) { setFetchError("आधी Token Fetch करा."); return; } onProceed(citizenData); }
//     else { onProceed(null); }
//   };

//   return (
//     <div style={{ position:"fixed", inset:0, zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(0,0,0,0.45)", padding:16 }}>
//       <div style={{ background:C.white, borderRadius:16, width:"100%", maxWidth:440, maxHeight:"92vh", overflowY:"auto", boxShadow:"0 8px 48px rgba(0,0,0,0.2)", fontFamily:"'Segoe UI', sans-serif" }}>
//         <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 20px", borderBottom:`2px solid ${C.greenBadge}`, background:C.greenLight, borderRadius:"16px 16px 0 0" }}>
//           <div>
//             <p style={{ margin:0, fontSize:11, color:C.muted, fontWeight:700, textTransform:"uppercase", letterSpacing:1 }}>New Application</p>
//             <h3 style={{ margin:"3px 0 0", fontSize:18, fontWeight:700, color:C.dark }}>Token आहे का?</h3>
//           </div>
//           <button onClick={onClose} style={{ background:C.white, border:"none", borderRadius:8, width:36, height:36, cursor:"pointer", fontSize:18, color:C.dark }}>✕</button>
//         </div>
//         <div style={{ padding:20 }}>
//           <p style={{ margin:"0 0 14px", fontSize:13, fontWeight:600, color:C.muted }}>Already have token? (Citizen ने आधी appointment घेतली आहे का?)</p>
//           <div style={{ display:"flex", gap:10, marginBottom:16 }}>
//             {[["yes","✅ Yes"],["no","❌ No"]].map(([v,label])=>(
//               <button key={v} onClick={()=>{setHasToken(v);setFetchError("");setCitizenData(null);setTokenInput("");}}
//                 style={{ flex:1, padding:"10px 0", borderRadius:8, fontSize:13, fontWeight:700, cursor:"pointer", border:`1.5px solid ${C.greenBorder}`, transition:"all .15s", background:hasToken===v?(v==="yes"?C.green:C.dark):C.white, color:hasToken===v?"#fff":C.muted }}>
//                 {label}
//               </button>
//             ))}
//           </div>

//           {hasToken === "yes" && (
//             <div style={{ marginBottom:14 }}>
//               <label style={{ fontSize:12, fontWeight:700, color:C.dark, display:"block", marginBottom:6, textTransform:"uppercase", letterSpacing:0.4 }}>Token Number</label>
//               <div style={{ display:"flex", gap:8 }}>
//                 <input type="text" placeholder="e.g. VVCMC-20260323-0008" value={tokenInput}
//                   onChange={e=>{setTokenInput(e.target.value);setFetchError("");setCitizenData(null);}}
//                   onKeyDown={e=>{if(e.key==="Enter")handleFetchToken();}}
//                   style={{ flex:1, padding:"9px 12px", fontSize:13, border:`1.5px solid ${C.greenBorder}`, borderRadius:8, outline:"none", color:C.dark, background:"#f8fdf8", fontFamily:"'Segoe UI', sans-serif", minWidth:0 }}
//                 />
//                 <button onClick={handleFetchToken} disabled={fetching}
//                   style={{ padding:"9px 14px", background:fetching?"#888":C.green, color:"#fff", border:"none", borderRadius:8, fontSize:13, fontWeight:700, cursor:fetching?"not-allowed":"pointer", flexShrink:0 }}>
//                   {fetching?"...":"🔍 Fetch"}
//                 </button>
//               </div>
//               {fetchError&&<p style={{ color:C.red, fontSize:12, marginTop:6, fontWeight:600 }}>{fetchError}</p>}
//               {citizenData&&(
//                 <div style={{ marginTop:12, background:C.greenLight, border:`1.5px solid ${C.greenBorder}`, borderRadius:10, padding:"12px 14px" }}>
//                   <p style={{ fontSize:11, fontWeight:700, color:C.green, textTransform:"uppercase", letterSpacing:1, marginBottom:8 }}>✅ Citizen सापडला</p>
//                   <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px 14px", fontSize:12 }}>
//                     {[["Name",citizenData.fullName],["Mobile",citizenData.mobileNumber],["Token",citizenData.tokenId],["Ward",citizenData.ward],["Date",citizenData.preferredDate],["Slot",citizenData.microSlot||citizenData.slotTime]].map(([k,v])=>(
//                       <div key={k}><span style={{ color:C.muted, fontSize:11 }}>{k}</span><p style={{ margin:"2px 0 0", fontWeight:700, color:C.dark }}>{v||"--"}</p></div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//           {hasToken === "no" && (
//             <div style={{ background:"#f8fdf8", border:`1.5px solid ${C.greenBorder}`, borderRadius:10, padding:"12px 14px", fontSize:13, color:C.muted, marginBottom:14 }}>
//               📝 रिकामा form उघडेल. Citizen ची माहिती manually भरावी लागेल.
//             </div>
//           )}
//           {hasToken !== null && (
//             <div style={{ display:"flex", gap:10, marginTop:8 }}>
//               <button onClick={onClose} style={{ flex:1, background:"#f0f4f0", border:"none", borderRadius:8, padding:"11px 0", fontWeight:600, cursor:"pointer", color:C.dark, fontSize:13 }}>Cancel</button>
//               <button onClick={handleProceed} disabled={hasToken==="yes"&&!citizenData}
//                 style={{ flex:2, background:(hasToken==="yes"&&!citizenData)?"#888":C.green, color:"#fff", border:"none", borderRadius:8, padding:"11px 0", fontWeight:700, cursor:(hasToken==="yes"&&!citizenData)?"not-allowed":"pointer", fontSize:13 }}>
//                 ➕ Open Form
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── REPLY MODAL (bottom sheet on mobile) ─────────────────────────────────────
// function ReplyModal({ record, onClose, onSubmit }) {
//   const [replyText, setReplyText]     = useState("");
//   const [newStatus, setNewStatus]     = useState(record.status || "Pending");
//   const [newPriority, setNewPriority] = useState(record.priority || "Normal");
//   const [submitting, setSubmitting]   = useState(false);
//   const [replyDoc, setReplyDoc]       = useState(null);

//   if (!record) return null;

//   const handleSubmit = async () => {
//     if (!replyText.trim()) { alert("कृपया reply message लिहा."); return; }
//     setSubmitting(true);
//     await onSubmit({ applicationId:record._id, replyMessage:replyText, status:newStatus, priority:newPriority, replyDocument:replyDoc });
//     setSubmitting(false);
//   };

//   return (
//     <div style={{ position:"fixed", inset:0, zIndex:1000, display:"flex", alignItems:"flex-end", justifyContent:"center", background:"rgba(0,0,0,0.45)" }}
//       onClick={onClose}>
//       <div style={{ background:C.white, borderRadius:"20px 20px 0 0", width:"100%", maxWidth:640, maxHeight:"95vh", overflowY:"auto", boxShadow:"0 -8px 48px rgba(0,0,0,0.2)", fontFamily:"'Segoe UI', sans-serif" }}
//         onClick={e=>e.stopPropagation()}>

//         {/* Drag handle */}
//         <div style={{ width:40, height:4, borderRadius:2, background:C.greenBorder, margin:"10px auto 0" }} />

//         <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 20px", borderBottom:`2px solid ${C.greenBadge}`, background:C.greenLight }}>
//           <div style={{ minWidth:0 }}>
//             <p style={{ margin:0, fontSize:11, color:C.muted, fontWeight:700, textTransform:"uppercase", letterSpacing:1 }}>Reply to Application</p>
//             <h3 style={{ margin:"3px 0 0", fontSize:15, fontWeight:700, color:C.dark, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{record.tokenNo} — {record.fullName}</h3>
//           </div>
//           <button onClick={onClose} style={{ background:C.white, border:"none", borderRadius:8, width:34, height:34, cursor:"pointer", fontSize:16, color:C.dark, flexShrink:0, marginLeft:10 }}>✕</button>
//         </div>

//         <div style={{ padding:"16px 20px" }}>
//           {/* Quick info */}
//           <div style={{ border:`1.5px solid ${C.greenBorder}`, borderRadius:10, overflow:"hidden", marginBottom:16 }}>
//             {[["Applicant",record.fullName],["Mobile",record.mobile],["Subject",record.subject],["Office",record.office],
//               ["Submitted By",record.submittedByName+(record.submittedByRole?` (${record.submittedByRole})`:"")] ,
//               ["Submitted On",record.submissionDate?new Date(record.submissionDate).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"--"]
//             ].filter(([,v])=>v).map(([k,v])=>(
//               <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"7px 14px", borderBottom:`1px solid ${C.rowBorder}`, fontSize:13, gap:8 }}>
//                 <span style={{ color:C.muted, fontWeight:600, flexShrink:0, minWidth:100 }}>{k}</span>
//                 <span style={{ color:C.dark, fontWeight:700, textAlign:"right", wordBreak:"break-word" }}>{v}</span>
//               </div>
//             ))}
//           </div>

//           {/* Status */}
//           <div style={{ marginBottom:14 }}>
//             <label style={{ fontSize:12, fontWeight:700, color:C.dark, display:"block", marginBottom:8, textTransform:"uppercase", letterSpacing:0.4 }}>Status बदला</label>
//             <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
//               {["Pending","In Progress","Resolved","Rejected"].map(s=>{
//                 const cfg=sc(s); const active=newStatus===s;
//                 return <button key={s} onClick={()=>setNewStatus(s)} style={{ padding:"6px 14px", borderRadius:20, fontSize:12, fontWeight:700, cursor:"pointer", border:`1.5px solid ${active?cfg.border:C.greenBorder}`, background:active?cfg.bg:"#f8fdf8", color:active?cfg.color:C.muted, transition:"all .15s" }}>
//                   <span style={{ display:"inline-block", width:6, height:6, borderRadius:"50%", background:active?cfg.dot:"#a8c8b0", marginRight:4, verticalAlign:"middle" }}/>{s}
//                 </button>;
//               })}
//             </div>
//           </div>

//           {/* Priority */}
//           {newStatus !== "Resolved" && (
//             <div style={{ marginBottom:14 }}>
//               <label style={{ fontSize:12, fontWeight:700, color:C.dark, display:"block", marginBottom:8, textTransform:"uppercase", letterSpacing:0.4 }}>Priority बदला</label>
//               <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
//                 {["Normal","High","Urgent","Emergency"].map(p=>{
//                   const cfg=priorityConfig[p]||priorityConfig["Normal"]; const active=newPriority===p;
//                   return <button key={p} onClick={()=>setNewPriority(p)} style={{ padding:"6px 12px", borderRadius:8, fontSize:12, fontWeight:700, cursor:"pointer", border:`1.5px solid ${active?cfg.border:C.greenBorder}`, background:active?cfg.bg:"#f8fdf8", color:active?cfg.color:C.muted, transition:"all .15s" }}>
//                     {p==="Normal"?"⚪":"🔴"} {p}
//                   </button>;
//                 })}
//               </div>
//             </div>
//           )}

//           {/* Reply text */}
//           <div style={{ marginBottom:14 }}>
//             <label style={{ fontSize:12, fontWeight:700, color:C.dark, display:"block", marginBottom:8, textTransform:"uppercase", letterSpacing:0.4 }}>Reply Message <span style={{ color:C.red }}>*</span></label>
//             <textarea rows={4} placeholder="Applicant ला reply message लिहा..." value={replyText} onChange={e=>setReplyText(e.target.value)}
//               style={{ width:"100%", padding:"10px 14px", fontSize:13, border:`1.5px solid ${C.greenBorder}`, borderRadius:8, outline:"none", fontFamily:"'Segoe UI', sans-serif", resize:"vertical", boxSizing:"border-box", color:C.dark, background:"#f8fdf8" }}
//               onFocus={e=>e.target.style.borderColor=C.green} onBlur={e=>e.target.style.borderColor=C.greenBorder}
//             />
//             <p style={{ fontSize:11, color:C.muted, textAlign:"right", margin:"4px 0 0" }}>{replyText.length} characters</p>
//           </div>

//           {/* File upload */}
//           <div style={{ marginBottom:16 }}>
//             <label style={{ fontSize:12, fontWeight:700, color:C.dark, display:"block", marginBottom:8, textTransform:"uppercase", letterSpacing:0.4 }}>
//               Reply Document <span style={{ color:C.muted, fontWeight:400, fontSize:11 }}>(Optional)</span>
//             </label>
//             <div style={{ border:`2px dashed ${C.greenBorder}`, borderRadius:10, padding:14, background:"#f8fdf8" }}>
//               <label style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer", flexWrap:"wrap" }}>
//                 <span style={{ padding:"7px 14px", background:C.green, color:"#fff", fontSize:12, fontWeight:700, borderRadius:8, whiteSpace:"nowrap" }}>
//                   📎 Choose File
//                   <input type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" style={{ display:"none" }} onChange={e=>setReplyDoc(e.target.files[0]||null)} />
//                 </span>
//                 <span style={{ fontSize:13, color:C.muted, wordBreak:"break-all" }}>{replyDoc?replyDoc.name:"PDF, DOC, or Image"}</span>
//               </label>
//               {replyDoc&&(
//                 <div style={{ marginTop:10, display:"flex", alignItems:"center", justifyContent:"space-between", background:C.white, border:`1.5px solid ${C.greenBorder}`, borderRadius:8, padding:"8px 12px" }}>
//                   <div style={{ minWidth:0 }}>
//                     <p style={{ margin:0, fontSize:12, fontWeight:700, color:C.green, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>✅ {replyDoc.name}</p>
//                     <p style={{ margin:0, fontSize:11, color:C.muted }}>{(replyDoc.size/1024).toFixed(1)} KB</p>
//                   </div>
//                   <button onClick={()=>setReplyDoc(null)} style={{ background:"none", border:"none", cursor:"pointer", color:C.red, fontSize:18, fontWeight:700, flexShrink:0, marginLeft:8 }}>✕</button>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Buttons */}
//           <div style={{ display:"flex", gap:10 }}>
//             <button onClick={onClose} style={{ flex:1, background:"#f0f4f0", border:"none", borderRadius:8, padding:"12px 0", fontWeight:600, cursor:"pointer", color:C.dark, fontSize:14 }}>Cancel</button>
//             <button onClick={handleSubmit} disabled={submitting} style={{ flex:2, background:submitting?"#888":C.green, color:"#fff", border:"none", borderRadius:8, padding:"12px 0", fontWeight:700, cursor:submitting?"not-allowed":"pointer", fontSize:14, display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
//               {submitting?<><span style={{ width:13, height:13, border:"2px solid rgba(255,255,255,0.4)", borderTopColor:"#fff", borderRadius:"50%", animation:"spin .7s linear infinite", display:"inline-block" }}/>Sending…</>:"📨 Send Reply"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── DETAIL MODAL (bottom sheet) ───────────────────────────────────────────────
// function DetailModal({ record, onClose }) {
//   if (!record) return null;

//   const InfoRow = ({ label, value }) => (
//     <div style={{ display:"flex", justifyContent:"space-between", padding:"8px 14px", borderBottom:`1px solid ${C.rowBorder}`, fontSize:13, gap:8 }}>
//       <span style={{ color:C.muted, fontWeight:600, flexShrink:0, minWidth:110 }}>{label}</span>
//       <span style={{ color:C.dark, fontWeight:700, textAlign:"right", wordBreak:"break-word" }}>{value||"--"}</span>
//     </div>
//   );
//   const SectionTitle = ({ title }) => (
//     <div style={{ padding:"8px 14px 6px", background:C.greenLight, borderBottom:`1px solid ${C.greenBorder}` }}>
//       <span style={{ fontSize:11, fontWeight:700, color:C.green, textTransform:"uppercase", letterSpacing:1 }}>{title}</span>
//     </div>
//   );

//   return (
//     <div style={{ position:"fixed", inset:0, zIndex:1000, display:"flex", alignItems:"flex-end", justifyContent:"center", background:"rgba(0,0,0,0.45)" }}
//       onClick={onClose}>
//       <div style={{ background:C.white, borderRadius:"20px 20px 0 0", width:"100%", maxWidth:640, maxHeight:"95vh", overflowY:"auto", boxShadow:"0 -8px 48px rgba(0,0,0,0.2)", fontFamily:"'Segoe UI', sans-serif" }}
//         onClick={e=>e.stopPropagation()}>

//         <div style={{ width:40, height:4, borderRadius:2, background:C.greenBorder, margin:"10px auto 0" }} />

//         <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 20px", borderBottom:`2px solid ${C.greenBadge}`, background:C.greenLight }}>
//           <div>
//             <p style={{ margin:0, fontSize:11, color:C.muted, fontWeight:700, textTransform:"uppercase", letterSpacing:1 }}>Application Detail</p>
//             <h3 style={{ margin:"3px 0 0", fontSize:16, fontWeight:700, color:C.dark }}>{record.tokenNo}</h3>
//           </div>
//           <button onClick={onClose} style={{ background:C.white, border:"none", borderRadius:8, width:34, height:34, cursor:"pointer", fontSize:16, color:C.dark }}>✕</button>
//         </div>

//         <div style={{ padding:"0 0 20px" }}>
//           {[
//             ["Citizen Details",[["Full Name",record.fullName],["Mobile",record.mobile],["Email",record.email],["Category",record.category],["Ward No",record.wardNo],["Address",record.address],["Pincode",record.pincode],["Taluka",record.taluka],["District",record.district]]],
//             ["Identity",       [["Type",record.identityType],["Number",record.identityNumber]]],
//             ["Complaint",      [["Subject",record.subject],["Description",record.description]]],
//             ["Office & Workflow",[
//               ["Office",record.office],["Main Department",record.mainDepartment],["Sub Department",record.subDepartment],
//               ...(record.status!=="Resolved"?[["Priority",record.priority]]:[]),
//               ["Tag To",Array.isArray(record.tagTo)?record.tagTo.join(", "):record.tagTo],
//               ["Follow Up",record.followUp],["Status",record.status],["Submitted On",formatDate(record.submissionDate)],
//               ...(record.status==="Resolved"?(()=>{const r=record.replies?.find(r=>r.status==="Resolved");return r?[["Resolved By",r.repliedByName],["Resolved Role",r.repliedByRole],["Resolved On",r.createdAt?new Date(r.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"]]:[];})():[]),
//             ]],
//           ].map(([title,rows])=>(
//             <div key={title} style={{ border:`1.5px solid ${C.greenBorder}`, borderRadius:10, overflow:"hidden", margin:"14px 16px 0" }}>
//               <SectionTitle title={title}/>
//               {rows.filter(([,v])=>v).map(([k,v])=><InfoRow key={k} label={k} value={v}/>)}
//             </div>
//           ))}

//           {record.documents&&(
//             <div style={{ margin:"14px 16px 0", padding:"12px 14px", background:C.greenLight, border:`1.5px solid ${C.greenBorder}`, borderRadius:10 }}>
//               <p style={{ margin:"0 0 8px", fontSize:11, fontWeight:700, color:C.green, textTransform:"uppercase", letterSpacing:1 }}>Document</p>
//               <a href={record.documents} target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"7px 14px", background:C.green, color:"#fff", borderRadius:8, fontSize:13, fontWeight:600, textDecoration:"none" }}>📄 View Document</a>
//             </div>
//           )}

//           {record.replies&&record.replies.length>0&&(
//             <div style={{ margin:"14px 16px 0" }}>
//               <p style={{ fontSize:11, fontWeight:700, color:C.green, textTransform:"uppercase", letterSpacing:1, marginBottom:10 }}>Replies ({record.replies.length})</p>
//               {record.replies.map((reply,i)=>{
//                 const cfg=sc(reply.status); const isResolved=reply.status==="Resolved";
//                 return (
//                   <div key={i} style={{ borderRadius:10, border:`1.5px solid ${isResolved?"#a8d5b5":C.greenBorder}`, padding:"12px 14px", background:isResolved?C.greenLight:"#f8fdf8", marginBottom:8 }}>
//                     <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:8, flexWrap:"wrap", gap:6 }}>
//                       <div style={{ display:"flex", alignItems:"center", gap:8 }}>
//                         <div style={{ width:28, height:28, borderRadius:"50%", background:isResolved?C.green:"#6366f1", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:11, fontWeight:700 }}>
//                           {reply.repliedByName?reply.repliedByName.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase():"?"}
//                         </div>
//                         <div>
//                           <div style={{ fontSize:13, fontWeight:700, color:C.dark }}>{reply.repliedByName||"—"}</div>
//                           {reply.repliedByRole&&<div style={{ fontSize:11, color:C.green, fontWeight:600 }}>{reply.repliedByRole}</div>}
//                         </div>
//                       </div>
//                       <div style={{ display:"flex", alignItems:"center", gap:6 }}>
//                         {reply.status&&<span style={{ display:"inline-flex", alignItems:"center", gap:4, padding:"3px 9px", borderRadius:20, fontSize:11, fontWeight:700, background:cfg.bg, color:cfg.color, border:`1px solid ${cfg.border}` }}><span style={{ width:5,height:5,borderRadius:"50%",background:cfg.dot }}/>{reply.status}</span>}
//                         <span style={{ fontSize:11, color:C.muted }}>{reply.createdAt?new Date(reply.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""}</span>
//                       </div>
//                     </div>
//                     <p style={{ fontSize:13, color:isResolved?C.green:C.dark, margin:0, paddingLeft:36 }}>{reply.replyMessage}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── MAIN COMPONENT ────────────────────────────────────────────────────────────
// export default function AllApplication() {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading]           = useState(true);
//   const [search, setSearch]             = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [selected, setSelected]         = useState(null);
//   const [replyTarget, setReplyTarget]   = useState(null);
//   const [showTokenCheck, setShowTokenCheck] = useState(false);
//   const [showForm, setShowForm]             = useState(false);
//   const [prefillData, setPrefillData]       = useState(null);
//   const [toast, setToast]               = useState(null);

//   const navigate = useNavigate();

//   const showToast = (msg, type="success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3500);
//   };

//   useEffect(() => { fetchApplications(); }, []);

//   const fetchApplications = async () => {
//     try {
//       setLoading(true);
//       const authUserRaw = localStorage.getItem("authUser");
//       const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;
//       const res = await axiosInstance.get("/getAllApplications", {
//         params: {
//           role:                   authUser?.role,
//           userId:                 authUser?.id,
//           userOffice:             authUser?.office,
//           userDepartmentCategory: authUser?.departmentCategory,
//           userDepartmentName:     authUser?.departmentName,
//         },
//       });
//       if (res.data.success) setApplications(res.data.data || []);
//     } catch (err) { console.error("Error fetching applications:", err); }
//     finally { setLoading(false); }
//   };

//   const handleAddClick = () => setShowTokenCheck(true);

//   const handleTokenCheckProceed = (citizenAppointment) => {
//     setShowTokenCheck(false);
//     if (citizenAppointment) {
//       const normalizeWard = (ward) => ward ? ward.replace(/Ward\s+/i, "Ward-") : "";
//       setPrefillData({
//         fullName:     citizenAppointment.fullName     || "",
//         mobile:       citizenAppointment.mobileNumber || "",
//         email:        citizenAppointment.email        || "",
//         address:      citizenAppointment.address      || "",
//         pincode:      citizenAppointment.pincode      || "",
//         wardNo:       citizenAppointment.ward         || "",
//         ward:         normalizeWard(citizenAppointment.ward),
//         visitorPhoto: citizenAppointment.visitorPhoto || "",
//         _tokenId:       citizenAppointment.tokenId        || "",
//         _citizenId:     citizenAppointment.citizenId      || "",
//         _preferredDate: citizenAppointment.preferredDate  || "",
//         _slotTime:      citizenAppointment.slotTime        || "",
//         _microSlot:     citizenAppointment.microSlot       || "",
//       });
//     } else { setPrefillData(null); }
//     setShowForm(true);
//   };

//   const handleFormClose = () => {
//     setShowForm(false);
//     setPrefillData(null);
//     fetchApplications();
//   };

//   const handleReplySubmit = async ({ applicationId, replyMessage, status, priority, replyDocument }) => {
//     try {
//       const authUserRaw = localStorage.getItem("authUser");
//       const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;
//       const repliedByName = authUser?.submittedByName || authUser?.name || authUser?.fullName || "";
//       const repliedByRole = authUser?.submittedByRole || authUser?.role || "";
//       const repliedById   = authUser?.submittedById   || authUser?.id  || "";
//       const foundApp = applications.find(a => a._id === applicationId);
//       const tokenNo  = foundApp?.tokenNo;
//       if (!tokenNo) { showToast("Token No सापडले नाही ❌", "error"); return; }
//       const apptRes = await axiosInstance.get(`/citizen/appointment/token/${tokenNo}`).catch(() => null);
//       if (!apptRes?.data?.appointment?._id) { showToast("Citizen Appointment सापडले नाही ❌", "error"); return; }
//       const citizenApptId = apptRes.data.appointment._id;
//       const formData = new FormData();
//       formData.append("status",        status.toLowerCase());
//       formData.append("adminNote",     replyMessage);
//       formData.append("replyMessage",  replyMessage);
//       formData.append("priority",      priority);
//       formData.append("repliedBy",     repliedById);
//       formData.append("repliedByName", repliedByName);
//       formData.append("repliedByRole", repliedByRole);
//       if (replyDocument) formData.append("replyDocument", replyDocument);
//       await axiosInstance.patch(`/citizen/admin/update-status/${citizenApptId}`, formData, { headers:{"Content-Type":"multipart/form-data"} });
//       const newReply = { replyMessage, status, priority, repliedBy:repliedById, repliedByName, repliedByRole, createdAt:new Date().toISOString() };
//       setApplications(prev => prev.map(app => app._id===applicationId ? { ...app, status, priority, replies:[...(app.replies||[]),newReply] } : app));
//       showToast("Reply यशस्वीरित्या पाठवली! ✅");
//       setReplyTarget(null);
//     } catch (err) {
//       console.error("Reply error:", err);
//       showToast(err?.response?.data?.message || "Reply पाठवताना error आला ❌", "error");
//     }
//   };

//   const filtered = applications.filter(app => {
//     const matchSearch = !search ||
//       app.fullName?.toLowerCase().includes(search.toLowerCase()) ||
//       app.inwardNo?.toLowerCase().includes(search.toLowerCase()) ||
//       app.subject?.toLowerCase().includes(search.toLowerCase()) ||
//       app.mobile?.includes(search);
//     const matchStatus = statusFilter === "All" || app.status === statusFilter;
//     return matchSearch && matchStatus;
//   });

//   const statusCounts = ["All","Pending","In Progress","Resolved","Rejected"].map(s => ({
//     label: s,
//     count: s==="All" ? applications.length : applications.filter(a=>a.status===s).length,
//   }));

//   return (
//     <div style={{ fontFamily:"'Segoe UI', sans-serif", background:C.bg, minHeight:"100vh", padding:"16px" }}>

//       <style>{`
//         @keyframes fadeIn { from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)} }
//         @keyframes spin { to{transform:rotate(360deg)} }

//         /* Desktop: show table, hide cards */
//         .desk-table { display: block; }
//         .mob-cards   { display: none; }

//         @media (max-width: 768px) {
//           /* Switch table → cards */
//           .desk-table { display: none !important; }
//           .mob-cards  { display: block !important; }

//           /* Header stacks vertically */
//           .hdr-row   { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
//           .hdr-btns  { width: 100%; display: flex !important; gap: 8px; }
//           .hdr-btns button { flex: 1; }

//           /* Filter bar stacks */
//           .flt-bar   { flex-direction: column !important; gap: 10px !important; }
//           .flt-tabs  { overflow-x: auto !important; flex-wrap: nowrap !important; padding-bottom: 4px; -webkit-overflow-scrolling: touch; }
//           .flt-tabs::-webkit-scrollbar { height: 3px; }
//           .flt-tabs::-webkit-scrollbar-thumb { background: #c8e0cc; border-radius: 2px; }

//           /* Search full width */
//           .srch-wrap { width: 100% !important; }

//           /* Toast full-width on mobile */
//           .toast-box { left: 12px !important; right: 12px !important; }
//         }

//         @media (max-width: 480px) {
//           .page-title { font-size: 20px !important; }
//         }
//       `}</style>

//       {/* Toast */}
//       {toast && (
//         <div className="toast-box" style={{ position:"fixed", top:16, right:16, zIndex:9999, background:toast.type==="success"?C.green:C.red, color:"#fff", padding:"12px 18px", borderRadius:10, boxShadow:"0 4px 16px rgba(0,0,0,0.2)", fontSize:14, fontWeight:600, animation:"fadeIn 0.3s ease" }}>
//           {toast.msg}
//         </div>
//       )}

//       {/* ── HEADER ── */}
//       <div className="hdr-row" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:18 }}>
//         <div>
//           <h1 className="page-title" style={{ margin:0, fontSize:24, fontWeight:700, color:C.dark, display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
//             All Applications
//             <span style={{ background:C.greenBadge, color:C.green, borderRadius:20, padding:"2px 10px", fontSize:13, fontWeight:700 }}>{applications.length}</span>
//           </h1>
//           <p style={{ margin:"4px 0 0", color:C.muted, fontSize:13 }}>जन संवाद - Applications</p>
//         </div>
//         <div className="hdr-btns" style={{ display:"flex", gap:10 }}>
//           <button onClick={fetchApplications} style={{ background:C.white, color:C.green, border:`2px solid ${C.green}`, borderRadius:8, padding:"9px 16px", fontWeight:600, fontSize:13, cursor:"pointer" }}>🔄 Refresh</button>
//           <button onClick={handleAddClick}    style={{ background:C.green, color:"#fff", border:"none", borderRadius:8, padding:"9px 16px", fontWeight:600, fontSize:13, cursor:"pointer" }}>➕ Add</button>
//         </div>
//       </div>

//       {/* ── SEARCH + FILTERS ── */}
//       <div style={{ background:C.white, borderRadius:12, padding:"12px 16px", marginBottom:14, boxShadow:"0 2px 8px rgba(0,0,0,0.05)" }}>
//         <div className="flt-bar" style={{ display:"flex", alignItems:"center", gap:10 }}>
//           <div className="srch-wrap" style={{ position:"relative", flex:1 }}>
//             <span style={{ position:"absolute", left:10, top:"50%", transform:"translateY(-50%)", fontSize:14, color:C.muted }}>🔍</span>
//             <input type="text" placeholder="Search by name, inward no, subject..." value={search} onChange={e=>setSearch(e.target.value)}
//               style={{ width:"100%", padding:"9px 12px 9px 32px", fontSize:13, border:`1.5px solid ${C.greenBorder}`, borderRadius:8, outline:"none", color:C.dark, background:"#f8fdf8", boxSizing:"border-box", fontFamily:"'Segoe UI', sans-serif" }}
//             />
//           </div>
//           <div className="flt-tabs" style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
//             {statusCounts.map(({label,count})=>(
//               <button key={label} onClick={()=>setStatusFilter(label)}
//                 style={{ padding:"7px 14px", borderRadius:20, fontSize:12, fontWeight:600, cursor:"pointer", border:statusFilter===label?"none":`1.5px solid ${C.greenBorder}`, background:statusFilter===label?C.green:C.white, color:statusFilter===label?"#fff":C.muted, transition:"all .15s", whiteSpace:"nowrap" }}>
//                 {label} <span style={{ marginLeft:4, fontSize:11, fontWeight:700, background:statusFilter===label?"rgba(255,255,255,0.25)":C.greenBadge, color:statusFilter===label?"#fff":C.green, padding:"1px 6px", borderRadius:10 }}>{count}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── DESKTOP TABLE ── */}
//       <div className="desk-table" style={{ background:C.white, borderRadius:12, boxShadow:"0 2px 12px rgba(0,0,0,0.07)", overflowX:"auto" }}>
//         <div style={{ display:"flex", alignItems:"center", padding:"14px 20px 12px", borderBottom:`2px solid ${C.greenBadge}` }}>
//           <h3 style={{ margin:0, fontSize:16, fontWeight:700, color:C.dark }}>
//             Application Records
//             <span style={{ background:C.greenBadge, color:C.green, borderRadius:20, padding:"2px 10px", fontSize:12, marginLeft:8 }}>{applications.length}</span>
//           </h3>
//         </div>

//         {loading ? (
//           <div style={{ textAlign:"center", padding:60, color:"#888" }}><div style={{ fontSize:32, marginBottom:12 }}>⏳</div>Loading applications...</div>
//         ) : (
//           <table style={{ width:"100%", borderCollapse:"collapse", minWidth:1200 }}>
//             <thead>
//               <tr style={{ background:"#f0f7f2" }}>
//                 {["Reply","#","Applicant","Token No","Status","Subject","Department","Priority","Date","Submitted By","Reply By","Document"].map(h=>(
//                   <th key={h} style={{ padding:"12px 14px", textAlign:"left", fontSize:12, fontWeight:700, color:C.dark, borderBottom:`2px solid ${C.greenBadge}`, whiteSpace:"nowrap" }}>{h}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {filtered.length===0 ? (
//                 <tr><td colSpan={12} style={{ textAlign:"center", padding:48, color:"#888", fontSize:14 }}>
//                   <div style={{ fontSize:36, marginBottom:10 }}>📭</div>
//                   {search?"No matching applications found.":"No applications yet."}
//                 </td></tr>
//               ) : filtered.map((app,index)=>(
//                 <tr key={app._id} style={{ borderBottom:`1px solid ${C.rowBorder}`, cursor:"pointer" }}
//                   onMouseOver={e=>e.currentTarget.style.background=C.rowHover}
//                   onMouseOut={e=>e.currentTarget.style.background="transparent"}
//                   onClick={()=>setSelected(app)}>

//                   <td style={{ padding:"10px 12px" }} onClick={e=>e.stopPropagation()}>
//                     <button onClick={()=>setReplyTarget(app)} style={{ background:C.greenLight, border:`1.5px solid ${C.green}`, borderRadius:7, padding:"5px 11px", cursor:"pointer", color:C.green, fontSize:12, fontWeight:700 }}>📨 Reply</button>
//                   </td>
//                   <td style={{ padding:"10px 12px", fontSize:13, color:"#888" }}>{index+1}</td>
//                   <td style={{ padding:"10px 12px", minWidth:160 }}>
//                     <div style={{ display:"flex", alignItems:"center", gap:9 }}>
//                       <div style={{ width:34, height:34, borderRadius:"50%", background:avatarColor(app.fullName), display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:800, fontSize:12, flexShrink:0 }}>{initials(app.fullName)}</div>
//                       <div><p style={{ margin:0, fontSize:13, fontWeight:700, color:C.dark }}>{app.fullName||"—"}</p><p style={{ margin:0, fontSize:11, color:C.muted }}>{app.mobile}</p></div>
//                     </div>
//                   </td>
//                   <td style={{ padding:"10px 12px" }}><span style={{ background:C.greenLight, color:C.green, borderRadius:6, padding:"2px 9px", fontSize:11, fontWeight:700, fontFamily:"monospace" }}>{app.tokenNo||"—"}</span></td>
//                   <td style={{ padding:"10px 12px" }}><StatusBadge status={app.status}/></td>
//                   <td style={{ padding:"10px 12px", maxWidth:180 }}><span style={{ display:"block", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:170, fontSize:13, color:C.dark }} title={app.subject}>{app.subject||"—"}</span></td>
//                   <td style={{ padding:"10px 12px", maxWidth:160 }}>
//                     <div style={{ fontSize:12, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:150, color:C.dark }}>{app.mainDepartment||"—"}</div>
//                     {app.subDepartment&&<div style={{ fontSize:11, color:C.muted, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:150 }}>{app.subDepartment}</div>}
//                   </td>
//                   <td style={{ padding:"10px 12px" }}>{app.status!=="Resolved"?<PriorityBadge priority={app.priority}/>:<span style={{ color:"#ccc" }}>—</span>}</td>
//                   <td style={{ padding:"10px 12px", whiteSpace:"nowrap", fontSize:12, color:C.muted }}>{formatDate(app.submissionDate)}</td>
//                   <td style={{ padding:"10px 12px", minWidth:130 }}>
//                     {app.submittedByName?<div><div style={{ fontSize:12, fontWeight:700, color:C.dark, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:120 }}>{app.submittedByName}</div>{app.submittedByRole&&<div style={{ fontSize:11, color:C.muted }}>{app.submittedByRole}</div>}</div>:<span style={{ color:"#ccc" }}>—</span>}
//                   </td>
//                   <td style={{ padding:"10px 12px", minWidth:130 }}>
//                     {app.replies&&app.replies.length>0?(()=>{
//                       const first=app.replies[0]; const isResolved=first.status==="Resolved"; const more=app.replies.length-1;
//                       return <div>
//                         <div style={{ display:"flex", alignItems:"center", gap:5 }}><span style={{ width:7,height:7,borderRadius:"50%",background:isResolved?"#22c55e":"#6366f1",display:"inline-block",flexShrink:0 }}/><div style={{ fontSize:12,fontWeight:700,color:isResolved?C.green:C.dark,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:110 }}>{first.repliedByName||"—"}</div></div>
//                         {first.repliedByRole&&<div style={{ fontSize:11,color:C.muted,paddingLeft:12 }}>{first.repliedByRole}</div>}
//                         {more>0&&<div style={{ fontSize:11,color:"#6366f1",fontWeight:700,paddingLeft:12 }}>+{more} more</div>}
//                       </div>;
//                     })():<span style={{ color:"#ccc" }}>—</span>}
//                   </td>
//                   <td style={{ padding:"10px 12px" }} onClick={e=>e.stopPropagation()}>
//                     {app.documents?<a href={app.documents} target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:4, color:C.green, fontSize:12, fontWeight:600, padding:"4px 8px", borderRadius:6, background:C.greenLight, textDecoration:"none" }}>📄 View</a>:<span style={{ color:"#ccc" }}>—</span>}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}

//         {!loading&&filtered.length>0&&(
//           <div style={{ padding:"10px 20px", borderTop:`1px solid ${C.rowBorder}`, fontSize:12, color:C.muted, display:"flex", justifyContent:"space-between" }}>
//             <span>Showing <strong style={{ color:C.dark }}>{filtered.length}</strong> of <strong style={{ color:C.dark }}>{applications.length}</strong> applications</span>
//             <span>💡 Click any row to view full details</span>
//           </div>
//         )}
//       </div>

//       {/* ── MOBILE CARDS ── */}
//       <div className="mob-cards">
//         {loading ? (
//           <div style={{ textAlign:"center", padding:48, color:"#888" }}><div style={{ fontSize:32, marginBottom:12 }}>⏳</div>Loading applications...</div>
//         ) : filtered.length===0 ? (
//           <div style={{ textAlign:"center", padding:48, color:"#888" }}>
//             <div style={{ fontSize:36, marginBottom:10 }}>📭</div>
//             {search?"No matching applications found.":"No applications yet."}
//           </div>
//         ) : (
//           <>
//             <div style={{ fontSize:12, color:C.muted, marginBottom:10, padding:"0 2px" }}>
//               Showing <strong style={{ color:C.dark }}>{filtered.length}</strong> of <strong style={{ color:C.dark }}>{applications.length}</strong> applications
//             </div>
//             {filtered.map((app,index)=>(
//               <AppCard key={app._id||index} app={app} index={index}
//                 onReply={a=>setReplyTarget(a)}
//                 onView={a=>setSelected(a)}
//               />
//             ))}
//           </>
//         )}
//       </div>

//       {/* Modals */}
//       {selected      && <DetailModal record={selected}     onClose={()=>setSelected(null)}    />}
//       {replyTarget   && <ReplyModal  record={replyTarget}  onClose={()=>setReplyTarget(null)} onSubmit={handleReplySubmit} />}
//       {showTokenCheck && <TokenCheckModal onClose={()=>setShowTokenCheck(false)} onProceed={handleTokenCheckProceed} />}
//       {showForm       && <JansanwadAppform onClose={handleFormClose} prefillData={prefillData} />}
//     </div>
//   );
// }

// ============================

// import React, { useState, useEffect } from "react";
// import JansanwadAppform from "./JansanwadAppform";
// import axiosInstance from "../services/axiosInstance";
// import { useNavigate } from "react-router-dom";

// // ── Style constants (Availability.jsx palette) ────────────────────────────────
// const C = {
//   bg:         "#f0f4f0",
//   white:      "#fff",
//   dark:       "#1a4a2e",
//   green:      "#1a7a4a",
//   greenLight: "#e8f5ee",
//   greenBadge: "#d4edda",
//   greenBorder:"#c8e0cc",
//   muted:      "#5a7a6a",
//   rowHover:   "#f8fdf8",
//   rowBorder:  "#eef4ee",
//   red:        "#c0392b",
//   redLight:   "#fdecea",
// };

// // ── Status config ─────────────────────────────────────────────────────────────
// const statusConfig = {
//   Pending:      { bg:"#fff8e1", color:"#b26a00", border:"#ffe082", dot:"#f59e0b", label:"Pending"     },
//   Resolved:     { bg:C.greenLight, color:C.green, border:"#a8d5b5", dot:"#22c55e", label:"Resolved"   },
//   Rejected:     { bg:C.redLight, color:C.red, border:"#f5c6cb", dot:C.red, label:"Rejected"           },
//   "In Progress":{ bg:"#e8f0fe", color:"#1a4a8a", border:"#93c5fd", dot:"#3b82f6", label:"In Progress" },
// };
// function sc(status) { return statusConfig[status] || statusConfig["Pending"]; }

// const priorityConfig = {
//   Normal:    { color: C.muted,   bg: "#f0f4f0",  border: C.greenBorder },
//   Urgent:    { color: "#b26a00", bg: "#fff8e1",  border: "#ffe082"     },
//   Emergency: { color: C.red,     bg: C.redLight, border: "#f5c6cb"     },
//   High:      { color: C.red,     bg: C.redLight, border: "#f5c6cb"     },
// };

// const AVATAR_COLORS = ["#6366f1","#0ea5e9","#f59e0b","#10b981","#ef4444","#8b5cf6","#ec4899","#14b8a6"];
// function avatarColor(name) {
//   let h = 0;
//   for (let i = 0; i < (name||"").length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
//   return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
// }
// function initials(name) {
//   if (!name) return "?";
//   return name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
// }
// function formatDate(dateStr) {
//   if (!dateStr) return "--";
//   return new Date(dateStr).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" });
// }

// // ── Badges ────────────────────────────────────────────────────────────────────
// function StatusBadge({ status }) {
//   const cfg = sc(status);
//   return (
//     <span style={{ display:"inline-flex", alignItems:"center", gap:5, padding:"4px 10px", borderRadius:20, fontSize:11, fontWeight:700, background:cfg.bg, color:cfg.color, border:`1px solid ${cfg.border}`, whiteSpace:"nowrap" }}>
//       <span style={{ width:6, height:6, borderRadius:"50%", background:cfg.dot, display:"inline-block" }} />{cfg.label}
//     </span>
//   );
// }
// function PriorityBadge({ priority }) {
//   const cfg = priorityConfig[priority] || priorityConfig["Normal"];
//   return (
//     <span style={{ display:"inline-flex", alignItems:"center", gap:4, padding:"3px 9px", borderRadius:8, fontSize:11, fontWeight:700, background:cfg.bg, color:cfg.color, border:`1px solid ${cfg.border}` }}>
//       {(priority==="Urgent"||priority==="Emergency"||priority==="High")?"🔴":"⚪"} {priority}
//     </span>
//   );
// }

// // ── Mobile Card ───────────────────────────────────────────────────────────────
// function AppCard({ app, onReply, onView }) {
//   const cfg   = sc(app.status);
//   const color = avatarColor(app.fullName);
//   return (
//     <div style={{ background:C.white, borderRadius:12, border:`1.5px solid ${C.greenBorder}`, padding:"14px 16px", marginBottom:10, boxShadow:"0 1px 6px rgba(0,0,0,0.06)" }}
//       onClick={() => onView(app)}>
//       {/* Top */}
//       <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:10 }}>
//         <div style={{ display:"flex", alignItems:"center", gap:10 }}>
//           <div style={{ width:40, height:40, borderRadius:"50%", background:color, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:800, fontSize:14, flexShrink:0 }}>
//             {initials(app.fullName)}
//           </div>
//           <div>
//             <p style={{ margin:0, fontSize:14, fontWeight:700, color:C.dark }}>{app.fullName||"—"}</p>
//             <p style={{ margin:0, fontSize:12, color:C.muted }}>{app.mobile||"—"}</p>
//           </div>
//         </div>
//         <StatusBadge status={app.status} />
//       </div>
//       {/* Chips */}
//       <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8, flexWrap:"wrap" }}>
//         <span style={{ background:C.greenLight, color:C.green, borderRadius:6, padding:"2px 9px", fontSize:11, fontWeight:700, fontFamily:"monospace" }}>{app.tokenNo||"—"}</span>
//         {app.status!=="Resolved"&&app.priority&&<PriorityBadge priority={app.priority}/>}
//       </div>
//       {app.subject&&<p style={{ margin:"0 0 8px", fontSize:13, color:C.dark, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{app.subject}</p>}
//       {/* Meta */}
//       <div style={{ display:"flex", flexWrap:"wrap", gap:"3px 10px", fontSize:11, color:C.muted, marginBottom:12 }}>
//         {app.mainDepartment&&<span>🏢 {app.mainDepartment}</span>}
//         {app.submissionDate&&<span>📅 {formatDate(app.submissionDate)}</span>}
//         {app.submittedByName&&<span>👤 {app.submittedByName}</span>}
//       </div>
//       {/* Actions */}
//       <div style={{ display:"flex", gap:8 }} onClick={e=>e.stopPropagation()}>
//         <button onClick={()=>onReply(app)} style={{ flex:1, background:C.greenLight, border:`1.5px solid ${C.green}`, borderRadius:8, padding:"8px 0", cursor:"pointer", color:C.green, fontSize:13, fontWeight:700 }}>📨 Reply</button>
//         <button onClick={()=>onView(app)}  style={{ flex:1, background:"#f8fdf8",    border:`1.5px solid ${C.greenBorder}`, borderRadius:8, padding:"8px 0", cursor:"pointer", color:C.dark,  fontSize:13, fontWeight:600 }}>👁 View</button>
//         {app.documents&&(
//           <a href={app.documents} target="_blank" rel="noreferrer" style={{ flex:1, background:C.greenLight, border:`1.5px solid ${C.greenBorder}`, borderRadius:8, padding:"8px 0", cursor:"pointer", color:C.green, fontSize:13, fontWeight:600, textDecoration:"none", textAlign:"center" }}>📄 Doc</a>
//         )}
//       </div>
//     </div>
//   );
// }

// // ── TOKEN CHECK MODAL ─────────────────────────────────────────────────────────
// function TokenCheckModal({ onClose, onProceed }) {
//   const [hasToken, setHasToken]       = useState(null);
//   const [tokenInput, setTokenInput]   = useState("");
//   const [fetching, setFetching]       = useState(false);
//   const [fetchError, setFetchError]   = useState("");
//   const [citizenData, setCitizenData] = useState(null);

//   const handleFetchToken = async () => {
//     if (!tokenInput.trim()) { setFetchError("कृपया Token Number टाका."); return; }
//     setFetching(true); setFetchError(""); setCitizenData(null);
//     try {
//       const res = await axiosInstance.get(`/citizen/appointment/token/${tokenInput.trim()}`);
//       if (res.data.success && res.data.appointment) setCitizenData(res.data.appointment);
//       else setFetchError("Token सापडले नाही ❌");
//     } catch (err) { setFetchError(err?.response?.data?.message || "Token fetch करताना error आला ❌"); }
//     finally { setFetching(false); }
//   };

//   const handleProceed = () => {
//     if (hasToken === "yes") { if (!citizenData) { setFetchError("आधी Token Fetch करा."); return; } onProceed(citizenData); }
//     else { onProceed(null); }
//   };

//   return (
//     <div style={{ position:"fixed", inset:0, zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(0,0,0,0.45)", padding:16 }}>
//       <div style={{ background:C.white, borderRadius:16, width:"100%", maxWidth:440, maxHeight:"92vh", overflowY:"auto", boxShadow:"0 8px 48px rgba(0,0,0,0.2)", fontFamily:"'Segoe UI', sans-serif" }}>
//         <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 20px", borderBottom:`2px solid ${C.greenBadge}`, background:C.greenLight, borderRadius:"16px 16px 0 0" }}>
//           <div>
//             <p style={{ margin:0, fontSize:11, color:C.muted, fontWeight:700, textTransform:"uppercase", letterSpacing:1 }}>New Application</p>
//             <h3 style={{ margin:"3px 0 0", fontSize:18, fontWeight:700, color:C.dark }}>Token आहे का?</h3>
//           </div>
//           <button onClick={onClose} style={{ background:C.white, border:"none", borderRadius:8, width:36, height:36, cursor:"pointer", fontSize:18, color:C.dark }}>✕</button>
//         </div>
//         <div style={{ padding:20 }}>
//           <p style={{ margin:"0 0 14px", fontSize:13, fontWeight:600, color:C.muted }}>Already have token? (Citizen ने आधी appointment घेतली आहे का?)</p>
//           <div style={{ display:"flex", gap:10, marginBottom:16 }}>
//             {[["yes","✅ Yes"],["no","❌ No"]].map(([v,label])=>(
//               <button key={v} onClick={()=>{setHasToken(v);setFetchError("");setCitizenData(null);setTokenInput("");}}
//                 style={{ flex:1, padding:"10px 0", borderRadius:8, fontSize:13, fontWeight:700, cursor:"pointer", border:`1.5px solid ${C.greenBorder}`, transition:"all .15s", background:hasToken===v?(v==="yes"?C.green:C.dark):C.white, color:hasToken===v?"#fff":C.muted }}>
//                 {label}
//               </button>
//             ))}
//           </div>

//           {hasToken === "yes" && (
//             <div style={{ marginBottom:14 }}>
//               <label style={{ fontSize:12, fontWeight:700, color:C.dark, display:"block", marginBottom:6, textTransform:"uppercase", letterSpacing:0.4 }}>Token Number</label>
//               <div style={{ display:"flex", gap:8 }}>
//                 <input type="text" placeholder="e.g. VVCMC-20260323-0008" value={tokenInput}
//                   onChange={e=>{setTokenInput(e.target.value);setFetchError("");setCitizenData(null);}}
//                   onKeyDown={e=>{if(e.key==="Enter")handleFetchToken();}}
//                   style={{ flex:1, padding:"9px 12px", fontSize:13, border:`1.5px solid ${C.greenBorder}`, borderRadius:8, outline:"none", color:C.dark, background:"#f8fdf8", fontFamily:"'Segoe UI', sans-serif", minWidth:0 }}
//                 />
//                 <button onClick={handleFetchToken} disabled={fetching}
//                   style={{ padding:"9px 14px", background:fetching?"#888":C.green, color:"#fff", border:"none", borderRadius:8, fontSize:13, fontWeight:700, cursor:fetching?"not-allowed":"pointer", flexShrink:0 }}>
//                   {fetching?"...":"🔍 Fetch"}
//                 </button>
//               </div>
//               {fetchError&&<p style={{ color:C.red, fontSize:12, marginTop:6, fontWeight:600 }}>{fetchError}</p>}
//               {citizenData&&(
//                 <div style={{ marginTop:12, background:C.greenLight, border:`1.5px solid ${C.greenBorder}`, borderRadius:10, padding:"12px 14px" }}>
//                   <p style={{ fontSize:11, fontWeight:700, color:C.green, textTransform:"uppercase", letterSpacing:1, marginBottom:8 }}>✅ Citizen सापडला</p>
//                   <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px 14px", fontSize:12 }}>
//                     {[["Name",citizenData.fullName],["Mobile",citizenData.mobileNumber],["Token",citizenData.tokenId],["Ward",citizenData.ward],["Date",citizenData.preferredDate],["Slot",citizenData.microSlot||citizenData.slotTime]].map(([k,v])=>(
//                       <div key={k}><span style={{ color:C.muted, fontSize:11 }}>{k}</span><p style={{ margin:"2px 0 0", fontWeight:700, color:C.dark }}>{v||"--"}</p></div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//           {hasToken === "no" && (
//             <div style={{ background:"#f8fdf8", border:`1.5px solid ${C.greenBorder}`, borderRadius:10, padding:"12px 14px", fontSize:13, color:C.muted, marginBottom:14 }}>
//               📝 रिकामा form उघडेल. Citizen ची माहिती manually भरावी लागेल.
//             </div>
//           )}
//           {hasToken !== null && (
//             <div style={{ display:"flex", gap:10, marginTop:8 }}>
//               <button onClick={onClose} style={{ flex:1, background:"#f0f4f0", border:"none", borderRadius:8, padding:"11px 0", fontWeight:600, cursor:"pointer", color:C.dark, fontSize:13 }}>Cancel</button>
//               <button onClick={handleProceed} disabled={hasToken==="yes"&&!citizenData}
//                 style={{ flex:2, background:(hasToken==="yes"&&!citizenData)?"#888":C.green, color:"#fff", border:"none", borderRadius:8, padding:"11px 0", fontWeight:700, cursor:(hasToken==="yes"&&!citizenData)?"not-allowed":"pointer", fontSize:13 }}>
//                 ➕ Open Form
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── REPLY MODAL (bottom sheet on mobile) ─────────────────────────────────────
// function ReplyModal({ record, onClose, onSubmit }) {
//   const [replyText, setReplyText]     = useState("");
//   const [newStatus, setNewStatus]     = useState(record.status || "Pending");
//   const [newPriority, setNewPriority] = useState(record.priority || "Normal");
//   const [submitting, setSubmitting]   = useState(false);
//   const [replyDoc, setReplyDoc]       = useState(null);

//   if (!record) return null;

//   const handleSubmit = async () => {
//     if (!replyText.trim()) { alert("कृपया reply message लिहा."); return; }
//     setSubmitting(true);
//     await onSubmit({ applicationId:record._id, replyMessage:replyText, status:newStatus, priority:newPriority, replyDocument:replyDoc });
//     setSubmitting(false);
//   };

//   return (
//     <div style={{ position:"fixed", inset:0, zIndex:1000, display:"flex", alignItems:"flex-end", justifyContent:"center", background:"rgba(0,0,0,0.45)" }}
//       onClick={onClose}>
//       <div style={{ background:C.white, borderRadius:"20px 20px 0 0", width:"100%", maxWidth:640, maxHeight:"95vh", overflowY:"auto", boxShadow:"0 -8px 48px rgba(0,0,0,0.2)", fontFamily:"'Segoe UI', sans-serif" }}
//         onClick={e=>e.stopPropagation()}>

//         {/* Drag handle */}
//         <div style={{ width:40, height:4, borderRadius:2, background:C.greenBorder, margin:"10px auto 0" }} />

//         <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 20px", borderBottom:`2px solid ${C.greenBadge}`, background:C.greenLight }}>
//           <div style={{ minWidth:0 }}>
//             <p style={{ margin:0, fontSize:11, color:C.muted, fontWeight:700, textTransform:"uppercase", letterSpacing:1 }}>Reply to Application</p>
//             <h3 style={{ margin:"3px 0 0", fontSize:15, fontWeight:700, color:C.dark, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{record.tokenNo} — {record.fullName}</h3>
//           </div>
//           <button onClick={onClose} style={{ background:C.white, border:"none", borderRadius:8, width:34, height:34, cursor:"pointer", fontSize:16, color:C.dark, flexShrink:0, marginLeft:10 }}>✕</button>
//         </div>

//         <div style={{ padding:"16px 20px" }}>
//           {/* Quick info */}
//           <div style={{ border:`1.5px solid ${C.greenBorder}`, borderRadius:10, overflow:"hidden", marginBottom:16 }}>
//             {[["Applicant",record.fullName],["Mobile",record.mobile],["Subject",record.subject],["Office",record.office],
//               ["Submitted By",record.submittedByName+(record.submittedByRole?` (${record.submittedByRole})`:"")] ,
//               ["Submitted On",record.submissionDate?new Date(record.submissionDate).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"--"]
//             ].filter(([,v])=>v).map(([k,v])=>(
//               <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"7px 14px", borderBottom:`1px solid ${C.rowBorder}`, fontSize:13, gap:8 }}>
//                 <span style={{ color:C.muted, fontWeight:600, flexShrink:0, minWidth:100 }}>{k}</span>
//                 <span style={{ color:C.dark, fontWeight:700, textAlign:"right", wordBreak:"break-word" }}>{v}</span>
//               </div>
//             ))}
//           </div>

//           {/* Status */}
//           <div style={{ marginBottom:14 }}>
//             <label style={{ fontSize:12, fontWeight:700, color:C.dark, display:"block", marginBottom:8, textTransform:"uppercase", letterSpacing:0.4 }}>Status बदला</label>
//             <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
//               {["Pending","In Progress","Resolved","Rejected"].map(s=>{
//                 const cfg=sc(s); const active=newStatus===s;
//                 return <button key={s} onClick={()=>setNewStatus(s)} style={{ padding:"6px 14px", borderRadius:20, fontSize:12, fontWeight:700, cursor:"pointer", border:`1.5px solid ${active?cfg.border:C.greenBorder}`, background:active?cfg.bg:"#f8fdf8", color:active?cfg.color:C.muted, transition:"all .15s" }}>
//                   <span style={{ display:"inline-block", width:6, height:6, borderRadius:"50%", background:active?cfg.dot:"#a8c8b0", marginRight:4, verticalAlign:"middle" }}/>{s}
//                 </button>;
//               })}
//             </div>
//           </div>

//           {/* Priority */}
//           {newStatus !== "Resolved" && (
//             <div style={{ marginBottom:14 }}>
//               <label style={{ fontSize:12, fontWeight:700, color:C.dark, display:"block", marginBottom:8, textTransform:"uppercase", letterSpacing:0.4 }}>Priority बदला</label>
//               <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
//                 {["Normal","High","Urgent","Emergency"].map(p=>{
//                   const cfg=priorityConfig[p]||priorityConfig["Normal"]; const active=newPriority===p;
//                   return <button key={p} onClick={()=>setNewPriority(p)} style={{ padding:"6px 12px", borderRadius:8, fontSize:12, fontWeight:700, cursor:"pointer", border:`1.5px solid ${active?cfg.border:C.greenBorder}`, background:active?cfg.bg:"#f8fdf8", color:active?cfg.color:C.muted, transition:"all .15s" }}>
//                     {p==="Normal"?"⚪":"🔴"} {p}
//                   </button>;
//                 })}
//               </div>
//             </div>
//           )}

//           {/* Reply text */}
//           <div style={{ marginBottom:14 }}>
//             <label style={{ fontSize:12, fontWeight:700, color:C.dark, display:"block", marginBottom:8, textTransform:"uppercase", letterSpacing:0.4 }}>Reply Message <span style={{ color:C.red }}>*</span></label>
//             <textarea rows={4} placeholder="Applicant ला reply message लिहा..." value={replyText} onChange={e=>setReplyText(e.target.value)}
//               style={{ width:"100%", padding:"10px 14px", fontSize:13, border:`1.5px solid ${C.greenBorder}`, borderRadius:8, outline:"none", fontFamily:"'Segoe UI', sans-serif", resize:"vertical", boxSizing:"border-box", color:C.dark, background:"#f8fdf8" }}
//               onFocus={e=>e.target.style.borderColor=C.green} onBlur={e=>e.target.style.borderColor=C.greenBorder}
//             />
//             <p style={{ fontSize:11, color:C.muted, textAlign:"right", margin:"4px 0 0" }}>{replyText.length} characters</p>
//           </div>

//           {/* File upload */}
//           <div style={{ marginBottom:16 }}>
//             <label style={{ fontSize:12, fontWeight:700, color:C.dark, display:"block", marginBottom:8, textTransform:"uppercase", letterSpacing:0.4 }}>
//               Reply Document <span style={{ color:C.muted, fontWeight:400, fontSize:11 }}>(Optional)</span>
//             </label>
//             <div style={{ border:`2px dashed ${C.greenBorder}`, borderRadius:10, padding:14, background:"#f8fdf8" }}>
//               <label style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer", flexWrap:"wrap" }}>
//                 <span style={{ padding:"7px 14px", background:C.green, color:"#fff", fontSize:12, fontWeight:700, borderRadius:8, whiteSpace:"nowrap" }}>
//                   📎 Choose File
//                   <input type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" style={{ display:"none" }} onChange={e=>setReplyDoc(e.target.files[0]||null)} />
//                 </span>
//                 <span style={{ fontSize:13, color:C.muted, wordBreak:"break-all" }}>{replyDoc?replyDoc.name:"PDF, DOC, or Image"}</span>
//               </label>
//               {replyDoc&&(
//                 <div style={{ marginTop:10, display:"flex", alignItems:"center", justifyContent:"space-between", background:C.white, border:`1.5px solid ${C.greenBorder}`, borderRadius:8, padding:"8px 12px" }}>
//                   <div style={{ minWidth:0 }}>
//                     <p style={{ margin:0, fontSize:12, fontWeight:700, color:C.green, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>✅ {replyDoc.name}</p>
//                     <p style={{ margin:0, fontSize:11, color:C.muted }}>{(replyDoc.size/1024).toFixed(1)} KB</p>
//                   </div>
//                   <button onClick={()=>setReplyDoc(null)} style={{ background:"none", border:"none", cursor:"pointer", color:C.red, fontSize:18, fontWeight:700, flexShrink:0, marginLeft:8 }}>✕</button>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Buttons */}
//           <div style={{ display:"flex", gap:10 }}>
//             <button onClick={onClose} style={{ flex:1, background:"#f0f4f0", border:"none", borderRadius:8, padding:"12px 0", fontWeight:600, cursor:"pointer", color:C.dark, fontSize:14 }}>Cancel</button>
//             <button onClick={handleSubmit} disabled={submitting} style={{ flex:2, background:submitting?"#888":C.green, color:"#fff", border:"none", borderRadius:8, padding:"12px 0", fontWeight:700, cursor:submitting?"not-allowed":"pointer", fontSize:14, display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
//               {submitting?<><span style={{ width:13, height:13, border:"2px solid rgba(255,255,255,0.4)", borderTopColor:"#fff", borderRadius:"50%", animation:"spin .7s linear infinite", display:"inline-block" }}/>Sending…</>:"📨 Send Reply"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── DETAIL MODAL (bottom sheet) ───────────────────────────────────────────────
// function DetailModal({ record, onClose }) {
//   if (!record) return null;

//   const InfoRow = ({ label, value }) => (
//     <div style={{ display:"flex", justifyContent:"space-between", padding:"8px 14px", borderBottom:`1px solid ${C.rowBorder}`, fontSize:13, gap:8 }}>
//       <span style={{ color:C.muted, fontWeight:600, flexShrink:0, minWidth:110 }}>{label}</span>
//       <span style={{ color:C.dark, fontWeight:700, textAlign:"right", wordBreak:"break-word" }}>{value||"--"}</span>
//     </div>
//   );
//   const SectionTitle = ({ title }) => (
//     <div style={{ padding:"8px 14px 6px", background:C.greenLight, borderBottom:`1px solid ${C.greenBorder}` }}>
//       <span style={{ fontSize:11, fontWeight:700, color:C.green, textTransform:"uppercase", letterSpacing:1 }}>{title}</span>
//     </div>
//   );

//   return (
//     <div style={{ position:"fixed", inset:0, zIndex:1000, display:"flex", alignItems:"flex-end", justifyContent:"center", background:"rgba(0,0,0,0.45)" }}
//       onClick={onClose}>
//       <div style={{ background:C.white, borderRadius:"20px 20px 0 0", width:"100%", maxWidth:640, maxHeight:"95vh", overflowY:"auto", boxShadow:"0 -8px 48px rgba(0,0,0,0.2)", fontFamily:"'Segoe UI', sans-serif" }}
//         onClick={e=>e.stopPropagation()}>

//         <div style={{ width:40, height:4, borderRadius:2, background:C.greenBorder, margin:"10px auto 0" }} />

//         <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 20px", borderBottom:`2px solid ${C.greenBadge}`, background:C.greenLight }}>
//           <div>
//             <p style={{ margin:0, fontSize:11, color:C.muted, fontWeight:700, textTransform:"uppercase", letterSpacing:1 }}>Application Detail</p>
//             <h3 style={{ margin:"3px 0 0", fontSize:16, fontWeight:700, color:C.dark }}>{record.tokenNo}</h3>
//           </div>
//           <button onClick={onClose} style={{ background:C.white, border:"none", borderRadius:8, width:34, height:34, cursor:"pointer", fontSize:16, color:C.dark }}>✕</button>
//         </div>

//         <div style={{ padding:"0 0 20px" }}>
//           {[
//             ["Citizen Details",[["Full Name",record.fullName],["Mobile",record.mobile],["Email",record.email],["Category",record.category],["Ward No",record.wardNo],["Address",record.address],["Pincode",record.pincode],["Taluka",record.taluka],["District",record.district]]],
//             ["Identity",       [["Type",record.identityType],["Number",record.identityNumber]]],
//             ["Complaint",      [["Subject",record.subject],["Description",record.description]]],
//             ["Office & Workflow",[
//               ["Office",record.office],["Main Department",record.mainDepartment],["Sub Department",record.subDepartment],
//               ...(record.status!=="Resolved"?[["Priority",record.priority]]:[]),
//               ["Tag To",Array.isArray(record.tagTo)?record.tagTo.join(", "):record.tagTo],
//               ["Follow Up",record.followUp],["Status",record.status],["Submitted On",formatDate(record.submissionDate)],
//               ...(record.status==="Resolved"?(()=>{const r=record.replies?.find(r=>r.status==="Resolved");return r?[["Resolved By",r.repliedByName],["Resolved Role",r.repliedByRole],["Resolved On",r.createdAt?new Date(r.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"]]:[];})():[]),
//             ]],
//           ].map(([title,rows])=>(
//             <div key={title} style={{ border:`1.5px solid ${C.greenBorder}`, borderRadius:10, overflow:"hidden", margin:"14px 16px 0" }}>
//               <SectionTitle title={title}/>
//               {rows.filter(([,v])=>v).map(([k,v])=><InfoRow key={k} label={k} value={v}/>)}
//             </div>
//           ))}

//           {record.documents&&(
//             <div style={{ margin:"14px 16px 0", padding:"12px 14px", background:C.greenLight, border:`1.5px solid ${C.greenBorder}`, borderRadius:10 }}>
//               <p style={{ margin:"0 0 8px", fontSize:11, fontWeight:700, color:C.green, textTransform:"uppercase", letterSpacing:1 }}>Document</p>
//               <a href={record.documents} target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"7px 14px", background:C.green, color:"#fff", borderRadius:8, fontSize:13, fontWeight:600, textDecoration:"none" }}>📄 View Document</a>
//             </div>
//           )}

//           {record.replies&&record.replies.length>0&&(
//             <div style={{ margin:"14px 16px 0" }}>
//               <p style={{ fontSize:11, fontWeight:700, color:C.green, textTransform:"uppercase", letterSpacing:1, marginBottom:10 }}>Replies ({record.replies.length})</p>
//               {record.replies.map((reply,i)=>{
//                 const cfg=sc(reply.status); const isResolved=reply.status==="Resolved";
//                 return (
//                   <div key={i} style={{ borderRadius:10, border:`1.5px solid ${isResolved?"#a8d5b5":C.greenBorder}`, padding:"12px 14px", background:isResolved?C.greenLight:"#f8fdf8", marginBottom:8 }}>
//                     <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:8, flexWrap:"wrap", gap:6 }}>
//                       <div style={{ display:"flex", alignItems:"center", gap:8 }}>
//                         <div style={{ width:28, height:28, borderRadius:"50%", background:isResolved?C.green:"#6366f1", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:11, fontWeight:700 }}>
//                           {reply.repliedByName?reply.repliedByName.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase():"?"}
//                         </div>
//                         <div>
//                           <div style={{ fontSize:13, fontWeight:700, color:C.dark }}>{reply.repliedByName||"—"}</div>
//                           {reply.repliedByRole&&<div style={{ fontSize:11, color:C.green, fontWeight:600 }}>{reply.repliedByRole}</div>}
//                         </div>
//                       </div>
//                       <div style={{ display:"flex", alignItems:"center", gap:6 }}>
//                         {reply.status&&<span style={{ display:"inline-flex", alignItems:"center", gap:4, padding:"3px 9px", borderRadius:20, fontSize:11, fontWeight:700, background:cfg.bg, color:cfg.color, border:`1px solid ${cfg.border}` }}><span style={{ width:5,height:5,borderRadius:"50%",background:cfg.dot }}/>{reply.status}</span>}
//                         <span style={{ fontSize:11, color:C.muted }}>{reply.createdAt?new Date(reply.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""}</span>
//                       </div>
//                     </div>
//                     <p style={{ fontSize:13, color:isResolved?C.green:C.dark, margin:0, paddingLeft:36 }}>{reply.replyMessage}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── PAGINATION COMPONENT ──────────────────────────────────────────────────────
// function Pagination({ page, totalPages, onPageChange }) {
//   if (totalPages <= 1) return null;

//   const pages = [];
//   const delta = 2;
//   const left  = Math.max(1, page - delta);
//   const right = Math.min(totalPages, page + delta);

//   if (left > 1)          { pages.push(1); if (left > 2) pages.push("..."); }
//   for (let i = left; i <= right; i++) pages.push(i);
//   if (right < totalPages){ if (right < totalPages - 1) pages.push("..."); pages.push(totalPages); }

//   const btnBase = { padding:"6px 12px", borderRadius:7, fontSize:13, fontWeight:600, cursor:"pointer", border:`1.5px solid ${C.greenBorder}`, transition:"all .15s", minWidth:36, textAlign:"center" };

//   return (
//     <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:6, padding:"14px 20px", borderTop:`1px solid ${C.rowBorder}`, flexWrap:"wrap" }}>
//       <button onClick={()=>onPageChange(page-1)} disabled={page===1}
//         style={{ ...btnBase, background:page===1?"#f0f4f0":C.white, color:page===1?"#aaa":C.green, cursor:page===1?"not-allowed":"pointer" }}>
//         ‹ Prev
//       </button>

//       {pages.map((p,i)=>
//         p === "..." ? (
//           <span key={`dot-${i}`} style={{ padding:"6px 4px", fontSize:13, color:C.muted }}>…</span>
//         ) : (
//           <button key={p} onClick={()=>onPageChange(p)}
//             style={{ ...btnBase, background:p===page?C.green:C.white, color:p===page?"#fff":C.dark, border:`1.5px solid ${p===page?C.green:C.greenBorder}` }}>
//             {p}
//           </button>
//         )
//       )}

//       <button onClick={()=>onPageChange(page+1)} disabled={page===totalPages}
//         style={{ ...btnBase, background:page===totalPages?"#f0f4f0":C.white, color:page===totalPages?"#aaa":C.green, cursor:page===totalPages?"not-allowed":"pointer" }}>
//         Next ›
//       </button>
//     </div>
//   );
// }

// // ── MAIN COMPONENT ────────────────────────────────────────────────────────────
// export default function AllApplication() {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading]           = useState(true);
//   const [search, setSearch]             = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [selected, setSelected]         = useState(null);
//   const [replyTarget, setReplyTarget]   = useState(null);
//   const [showTokenCheck, setShowTokenCheck] = useState(false);
//   const [showForm, setShowForm]             = useState(false);
//   const [prefillData, setPrefillData]       = useState(null);
//   const [toast, setToast]               = useState(null);

//   // ── Pagination state ──
//   const [page, setPage]           = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [total, setTotal]         = useState(0);
//   const LIMIT = 20;

//   const navigate = useNavigate();

//   const showToast = (msg, type="success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3500);
//   };

//   useEffect(() => { fetchApplications(1); }, []);

//   const fetchApplications = async (pageNum = page) => {
//     try {
//       setLoading(true);
//       const authUserRaw = localStorage.getItem("authUser");
//       const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;
//       const res = await axiosInstance.get("/getAllApplications", {
//         params: {
//           role:                   authUser?.role,
//           userId:                 authUser?.id,
//           userOffice:             authUser?.office,
//           userDepartmentCategory: authUser?.departmentCategory,
//           userDepartmentName:     authUser?.departmentName,
//           page:                   pageNum,
//           limit:                  LIMIT,
//         },
//       });
//       if (res.data.success) {
//         setApplications(res.data.data || []);
//         setTotal(res.data.total || 0);
//         setTotalPages(res.data.totalPages || 1);
//         setPage(pageNum);
//       }
//     } catch (err) { console.error("Error fetching applications:", err); }
//     finally { setLoading(false); }
//   };

//   const handlePageChange = (newPage) => {
//     if (newPage < 1 || newPage > totalPages) return;
//     fetchApplications(newPage);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleAddClick = () => setShowTokenCheck(true);

//   const handleTokenCheckProceed = (citizenAppointment) => {
//     setShowTokenCheck(false);
//     if (citizenAppointment) {
//       const normalizeWard = (ward) => ward ? ward.replace(/Ward\s+/i, "Ward-") : "";
//       setPrefillData({
//         fullName:     citizenAppointment.fullName     || "",
//         mobile:       citizenAppointment.mobileNumber || "",
//         email:        citizenAppointment.email        || "",
//         address:      citizenAppointment.address      || "",
//         pincode:      citizenAppointment.pincode      || "",
//         wardNo:       citizenAppointment.ward         || "",
//         ward:         normalizeWard(citizenAppointment.ward),
//         visitorPhoto: citizenAppointment.visitorPhoto || "",
//         _tokenId:       citizenAppointment.tokenId        || "",
//         _citizenId:     citizenAppointment.citizenId      || "",
//         _preferredDate: citizenAppointment.preferredDate  || "",
//         _slotTime:      citizenAppointment.slotTime        || "",
//         _microSlot:     citizenAppointment.microSlot       || "",
//       });
//     } else { setPrefillData(null); }
//     setShowForm(true);
//   };

//   const handleFormClose = () => {
//     setShowForm(false);
//     setPrefillData(null);
//     fetchApplications(page);
//   };

//   const handleReplySubmit = async ({ applicationId, replyMessage, status, priority, replyDocument }) => {
//     try {
//       const authUserRaw = localStorage.getItem("authUser");
//       const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;
//       const repliedByName = authUser?.submittedByName || authUser?.name || authUser?.fullName || "";
//       const repliedByRole = authUser?.submittedByRole || authUser?.role || "";
//       const repliedById   = authUser?.submittedById   || authUser?.id  || "";
//       const foundApp = applications.find(a => a._id === applicationId);
//       const tokenNo  = foundApp?.tokenNo;
//       if (!tokenNo) { showToast("Token No सापडले नाही ❌", "error"); return; }
//       const apptRes = await axiosInstance.get(`/citizen/appointment/token/${tokenNo}`).catch(() => null);
//       if (!apptRes?.data?.appointment?._id) { showToast("Citizen Appointment सापडले नाही ❌", "error"); return; }
//       const citizenApptId = apptRes.data.appointment._id;
//       const formData = new FormData();
//       formData.append("status",        status.toLowerCase());
//       formData.append("adminNote",     replyMessage);
//       formData.append("replyMessage",  replyMessage);
//       formData.append("priority",      priority);
//       formData.append("repliedBy",     repliedById);
//       formData.append("repliedByName", repliedByName);
//       formData.append("repliedByRole", repliedByRole);
//       if (replyDocument) formData.append("replyDocument", replyDocument);
//       await axiosInstance.patch(`/citizen/admin/update-status/${citizenApptId}`, formData, { headers:{"Content-Type":"multipart/form-data"} });
//       const newReply = { replyMessage, status, priority, repliedBy:repliedById, repliedByName, repliedByRole, createdAt:new Date().toISOString() };
//       setApplications(prev => prev.map(app => app._id===applicationId ? { ...app, status, priority, replies:[...(app.replies||[]),newReply] } : app));
//       showToast("Reply यशस्वीरित्या पाठवली! ✅");
//       setReplyTarget(null);
//     } catch (err) {
//       console.error("Reply error:", err);
//       showToast(err?.response?.data?.message || "Reply पाठवताना error आला ❌", "error");
//     }
//   };

//   const filtered = applications.filter(app => {
//     const matchSearch = !search ||
//       app.fullName?.toLowerCase().includes(search.toLowerCase()) ||
//       app.inwardNo?.toLowerCase().includes(search.toLowerCase()) ||
//       app.subject?.toLowerCase().includes(search.toLowerCase()) ||
//       app.mobile?.includes(search);
//     const matchStatus = statusFilter === "All" || app.status === statusFilter;
//     return matchSearch && matchStatus;
//   });

//   const statusCounts = ["All","Pending","In Progress","Resolved","Rejected"].map(s => ({
//     label: s,
//     count: s==="All" ? total : applications.filter(a=>a.status===s).length,
//   }));

//   return (
//     <div style={{ fontFamily:"'Segoe UI', sans-serif", background:C.bg, minHeight:"100vh", padding:"16px" }}>

//       <style>{`
//         @keyframes fadeIn { from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)} }
//         @keyframes spin { to{transform:rotate(360deg)} }

//         /* Desktop: show table, hide cards */
//         .desk-table { display: block; }
//         .mob-cards   { display: none; }

//         @media (max-width: 768px) {
//           /* Switch table → cards */
//           .desk-table { display: none !important; }
//           .mob-cards  { display: block !important; }

//           /* Header stacks vertically */
//           .hdr-row   { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
//           .hdr-btns  { width: 100%; display: flex !important; gap: 8px; }
//           .hdr-btns button { flex: 1; }

//           /* Filter bar stacks */
//           .flt-bar   { flex-direction: column !important; gap: 10px !important; }
//           .flt-tabs  { overflow-x: auto !important; flex-wrap: nowrap !important; padding-bottom: 4px; -webkit-overflow-scrolling: touch; }
//           .flt-tabs::-webkit-scrollbar { height: 3px; }
//           .flt-tabs::-webkit-scrollbar-thumb { background: #c8e0cc; border-radius: 2px; }

//           /* Search full width */
//           .srch-wrap { width: 100% !important; }

//           /* Toast full-width on mobile */
//           .toast-box { left: 12px !important; right: 12px !important; }
//         }

//         @media (max-width: 480px) {
//           .page-title { font-size: 20px !important; }
//         }
//       `}</style>

//       {/* Toast */}
//       {toast && (
//         <div className="toast-box" style={{ position:"fixed", top:16, right:16, zIndex:9999, background:toast.type==="success"?C.green:C.red, color:"#fff", padding:"12px 18px", borderRadius:10, boxShadow:"0 4px 16px rgba(0,0,0,0.2)", fontSize:14, fontWeight:600, animation:"fadeIn 0.3s ease" }}>
//           {toast.msg}
//         </div>
//       )}

//       {/* ── HEADER ── */}
//       <div className="hdr-row" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:18 }}>
//         <div>
//           <h1 className="page-title" style={{ margin:0, fontSize:24, fontWeight:700, color:C.dark, display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
//             All Applications
//             <span style={{ background:C.greenBadge, color:C.green, borderRadius:20, padding:"2px 10px", fontSize:13, fontWeight:700 }}>{total}</span>
//           </h1>
//           <p style={{ margin:"4px 0 0", color:C.muted, fontSize:13 }}>जन संवाद - Applications</p>
//         </div>
//         <div className="hdr-btns" style={{ display:"flex", gap:10 }}>
//           <button onClick={()=>fetchApplications(page)} style={{ background:C.white, color:C.green, border:`2px solid ${C.green}`, borderRadius:8, padding:"9px 16px", fontWeight:600, fontSize:13, cursor:"pointer" }}>🔄 Refresh</button>
//           <button onClick={handleAddClick}              style={{ background:C.green, color:"#fff", border:"none", borderRadius:8, padding:"9px 16px", fontWeight:600, fontSize:13, cursor:"pointer" }}>➕ Add</button>
//         </div>
//       </div>

//       {/* ── SEARCH + FILTERS ── */}
//       <div style={{ background:C.white, borderRadius:12, padding:"12px 16px", marginBottom:14, boxShadow:"0 2px 8px rgba(0,0,0,0.05)" }}>
//         <div className="flt-bar" style={{ display:"flex", alignItems:"center", gap:10 }}>
//           <div className="srch-wrap" style={{ position:"relative", flex:1 }}>
//             <span style={{ position:"absolute", left:10, top:"50%", transform:"translateY(-50%)", fontSize:14, color:C.muted }}>🔍</span>
//             <input type="text" placeholder="Search by name, inward no, subject..." value={search} onChange={e=>setSearch(e.target.value)}
//               style={{ width:"100%", padding:"9px 12px 9px 32px", fontSize:13, border:`1.5px solid ${C.greenBorder}`, borderRadius:8, outline:"none", color:C.dark, background:"#f8fdf8", boxSizing:"border-box", fontFamily:"'Segoe UI', sans-serif" }}
//             />
//           </div>
//           <div className="flt-tabs" style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
//             {statusCounts.map(({label,count})=>(
//               <button key={label} onClick={()=>setStatusFilter(label)}
//                 style={{ padding:"7px 14px", borderRadius:20, fontSize:12, fontWeight:600, cursor:"pointer", border:statusFilter===label?"none":`1.5px solid ${C.greenBorder}`, background:statusFilter===label?C.green:C.white, color:statusFilter===label?"#fff":C.muted, transition:"all .15s", whiteSpace:"nowrap" }}>
//                 {label} <span style={{ marginLeft:4, fontSize:11, fontWeight:700, background:statusFilter===label?"rgba(255,255,255,0.25)":C.greenBadge, color:statusFilter===label?"#fff":C.green, padding:"1px 6px", borderRadius:10 }}>{count}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── DESKTOP TABLE ── */}
//       <div className="desk-table" style={{ background:C.white, borderRadius:12, boxShadow:"0 2px 12px rgba(0,0,0,0.07)", overflowX:"auto" }}>
//         <div style={{ display:"flex", alignItems:"center", padding:"14px 20px 12px", borderBottom:`2px solid ${C.greenBadge}` }}>
//           <h3 style={{ margin:0, fontSize:16, fontWeight:700, color:C.dark }}>
//             Application Records
//             <span style={{ background:C.greenBadge, color:C.green, borderRadius:20, padding:"2px 10px", fontSize:12, marginLeft:8 }}>{total}</span>
//           </h3>
//         </div>

//         {loading ? (
//           <div style={{ textAlign:"center", padding:60, color:"#888" }}><div style={{ fontSize:32, marginBottom:12 }}>⏳</div>Loading applications...</div>
//         ) : (
//           <table style={{ width:"100%", borderCollapse:"collapse", minWidth:1200 }}>
//             <thead>
//               <tr style={{ background:"#f0f7f2" }}>
//                 {["Reply","#","Applicant","Token No","Status","Subject","Department","Priority","Date","Submitted By","Reply By","Document"].map(h=>(
//                   <th key={h} style={{ padding:"12px 14px", textAlign:"left", fontSize:12, fontWeight:700, color:C.dark, borderBottom:`2px solid ${C.greenBadge}`, whiteSpace:"nowrap" }}>{h}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {filtered.length===0 ? (
//                 <tr><td colSpan={12} style={{ textAlign:"center", padding:48, color:"#888", fontSize:14 }}>
//                   <div style={{ fontSize:36, marginBottom:10 }}>📭</div>
//                   {search?"No matching applications found.":"No applications yet."}
//                 </td></tr>
//               ) : filtered.map((app,index)=>(
//                 <tr key={app._id} style={{ borderBottom:`1px solid ${C.rowBorder}`, cursor:"pointer" }}
//                   onMouseOver={e=>e.currentTarget.style.background=C.rowHover}
//                   onMouseOut={e=>e.currentTarget.style.background="transparent"}
//                   onClick={()=>setSelected(app)}>

//                   <td style={{ padding:"10px 12px" }} onClick={e=>e.stopPropagation()}>
//                     <button onClick={()=>setReplyTarget(app)} style={{ background:C.greenLight, border:`1.5px solid ${C.green}`, borderRadius:7, padding:"5px 11px", cursor:"pointer", color:C.green, fontSize:12, fontWeight:700 }}>📨 Reply</button>
//                   </td>
//                   <td style={{ padding:"10px 12px", fontSize:13, color:"#888" }}>{(page-1)*LIMIT + index + 1}</td>
//                   <td style={{ padding:"10px 12px", minWidth:160 }}>
//                     <div style={{ display:"flex", alignItems:"center", gap:9 }}>
//                       <div style={{ width:34, height:34, borderRadius:"50%", background:avatarColor(app.fullName), display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:800, fontSize:12, flexShrink:0 }}>{initials(app.fullName)}</div>
//                       <div><p style={{ margin:0, fontSize:13, fontWeight:700, color:C.dark }}>{app.fullName||"—"}</p><p style={{ margin:0, fontSize:11, color:C.muted }}>{app.mobile}</p></div>
//                     </div>
//                   </td>
//                   <td style={{ padding:"10px 12px" }}><span style={{ background:C.greenLight, color:C.green, borderRadius:6, padding:"2px 9px", fontSize:11, fontWeight:700, fontFamily:"monospace" }}>{app.tokenNo||"—"}</span></td>
//                   <td style={{ padding:"10px 12px" }}><StatusBadge status={app.status}/></td>
//                   <td style={{ padding:"10px 12px", maxWidth:180 }}><span style={{ display:"block", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:170, fontSize:13, color:C.dark }} title={app.subject}>{app.subject||"—"}</span></td>
//                   <td style={{ padding:"10px 12px", maxWidth:160 }}>
//                     <div style={{ fontSize:12, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:150, color:C.dark }}>{app.mainDepartment||"—"}</div>
//                     {app.subDepartment&&<div style={{ fontSize:11, color:C.muted, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:150 }}>{app.subDepartment}</div>}
//                   </td>
//                   <td style={{ padding:"10px 12px" }}>{app.status!=="Resolved"?<PriorityBadge priority={app.priority}/>:<span style={{ color:"#ccc" }}>—</span>}</td>
//                   <td style={{ padding:"10px 12px", whiteSpace:"nowrap", fontSize:12, color:C.muted }}>{formatDate(app.submissionDate)}</td>
//                   <td style={{ padding:"10px 12px", minWidth:130 }}>
//                     {app.submittedByName?<div><div style={{ fontSize:12, fontWeight:700, color:C.dark, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:120 }}>{app.submittedByName}</div>{app.submittedByRole&&<div style={{ fontSize:11, color:C.muted }}>{app.submittedByRole}</div>}</div>:<span style={{ color:"#ccc" }}>—</span>}
//                   </td>
//                   <td style={{ padding:"10px 12px", minWidth:130 }}>
//                     {app.replies&&app.replies.length>0?(()=>{
//                       const first=app.replies[0]; const isResolved=first.status==="Resolved"; const more=app.replies.length-1;
//                       return <div>
//                         <div style={{ display:"flex", alignItems:"center", gap:5 }}><span style={{ width:7,height:7,borderRadius:"50%",background:isResolved?"#22c55e":"#6366f1",display:"inline-block",flexShrink:0 }}/><div style={{ fontSize:12,fontWeight:700,color:isResolved?C.green:C.dark,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:110 }}>{first.repliedByName||"—"}</div></div>
//                         {first.repliedByRole&&<div style={{ fontSize:11,color:C.muted,paddingLeft:12 }}>{first.repliedByRole}</div>}
//                         {more>0&&<div style={{ fontSize:11,color:"#6366f1",fontWeight:700,paddingLeft:12 }}>+{more} more</div>}
//                       </div>;
//                     })():<span style={{ color:"#ccc" }}>—</span>}
//                   </td>
//                   <td style={{ padding:"10px 12px" }} onClick={e=>e.stopPropagation()}>
//                     {app.documents?<a href={app.documents} target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:4, color:C.green, fontSize:12, fontWeight:600, padding:"4px 8px", borderRadius:6, background:C.greenLight, textDecoration:"none" }}>📄 View</a>:<span style={{ color:"#ccc" }}>—</span>}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}

//         {!loading && (
//           <div style={{ padding:"10px 20px", borderTop:`1px solid ${C.rowBorder}`, fontSize:12, color:C.muted, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:8 }}>
//             <span>Showing <strong style={{ color:C.dark }}>{(page-1)*LIMIT+1}–{Math.min(page*LIMIT,total)}</strong> of <strong style={{ color:C.dark }}>{total}</strong> applications</span>
//             <Pagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />
//           </div>
//         )}
//       </div>

//       {/* ── MOBILE CARDS ── */}
//       <div className="mob-cards">
//         {loading ? (
//           <div style={{ textAlign:"center", padding:48, color:"#888" }}><div style={{ fontSize:32, marginBottom:12 }}>⏳</div>Loading applications...</div>
//         ) : filtered.length===0 ? (
//           <div style={{ textAlign:"center", padding:48, color:"#888" }}>
//             <div style={{ fontSize:36, marginBottom:10 }}>📭</div>
//             {search?"No matching applications found.":"No applications yet."}
//           </div>
//         ) : (
//           <>
//             <div style={{ fontSize:12, color:C.muted, marginBottom:10, padding:"0 2px" }}>
//               Showing <strong style={{ color:C.dark }}>{(page-1)*LIMIT+1}–{Math.min(page*LIMIT,total)}</strong> of <strong style={{ color:C.dark }}>{total}</strong> applications
//             </div>
//             {filtered.map((app,index)=>(
//               <AppCard key={app._id||index} app={app} index={index}
//                 onReply={a=>setReplyTarget(a)}
//                 onView={a=>setSelected(a)}
//               />
//             ))}
//             <Pagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />
//           </>
//         )}
//       </div>

//       {/* Modals */}
//       {selected      && <DetailModal record={selected}     onClose={()=>setSelected(null)}    />}
//       {replyTarget   && <ReplyModal  record={replyTarget}  onClose={()=>setReplyTarget(null)} onSubmit={handleReplySubmit} />}
//       {showTokenCheck && <TokenCheckModal onClose={()=>setShowTokenCheck(false)} onProceed={handleTokenCheckProceed} />}
//       {showForm       && <JansanwadAppform onClose={handleFormClose} prefillData={prefillData} />}
//     </div>
//   );
// }

// ====================================================

import React, { useState, useEffect } from "react";
import JansanwadAppform from "./JansanwadAppform";
import axiosInstance from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";

// ── Style constants (Availability.jsx palette) ────────────────────────────────
const C = {
  bg:         "#f0f4f0",
  white:      "#fff",
  dark:       "#1a4a2e",
  green:      "#1a7a4a",
  greenLight: "#e8f5ee",
  greenBadge: "#d4edda",
  greenBorder:"#c8e0cc",
  muted:      "#5a7a6a",
  rowHover:   "#f8fdf8",
  rowBorder:  "#eef4ee",
  red:        "#c0392b",
  redLight:   "#fdecea",
};

// ── Status config ─────────────────────────────────────────────────────────────
const statusConfig = {
  Pending:      { bg:"#fff8e1", color:"#b26a00", border:"#ffe082", dot:"#f59e0b", label:"Pending"     },
  Resolved:     { bg:C.greenLight, color:C.green, border:"#a8d5b5", dot:"#22c55e", label:"Resolved"   },
  Rejected:     { bg:C.redLight, color:C.red, border:"#f5c6cb", dot:C.red, label:"Rejected"           },
  "In Progress":{ bg:"#e8f0fe", color:"#1a4a8a", border:"#93c5fd", dot:"#3b82f6", label:"In Progress" },
};
function sc(status) { return statusConfig[status] || statusConfig["Pending"]; }

const priorityConfig = {
  Normal:    { color: C.muted,   bg: "#f0f4f0",  border: C.greenBorder },
  Urgent:    { color: "#b26a00", bg: "#fff8e1",  border: "#ffe082"     },
  Emergency: { color: C.red,     bg: C.redLight, border: "#f5c6cb"     },
  High:      { color: C.red,     bg: C.redLight, border: "#f5c6cb"     },
};

const AVATAR_COLORS = ["#6366f1","#0ea5e9","#f59e0b","#10b981","#ef4444","#8b5cf6","#ec4899","#14b8a6"];
function avatarColor(name) {
  let h = 0;
  for (let i = 0; i < (name||"").length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}
function initials(name) {
  if (!name) return "?";
  return name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
}
function formatDate(dateStr) {
  if (!dateStr) return "--";
  return new Date(dateStr).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" });
}

// ── Badges ────────────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  const cfg = sc(status);
  return (
    <span style={{ display:"inline-flex", alignItems:"center", gap:5, padding:"4px 10px", borderRadius:20, fontSize:11, fontWeight:700, background:cfg.bg, color:cfg.color, border:`1px solid ${cfg.border}`, whiteSpace:"nowrap" }}>
      <span style={{ width:6, height:6, borderRadius:"50%", background:cfg.dot, display:"inline-block" }} />{cfg.label}
    </span>
  );
}
function PriorityBadge({ priority }) {
  const cfg = priorityConfig[priority] || priorityConfig["Normal"];
  return (
    <span style={{ display:"inline-flex", alignItems:"center", gap:4, padding:"3px 9px", borderRadius:8, fontSize:11, fontWeight:700, background:cfg.bg, color:cfg.color, border:`1px solid ${cfg.border}` }}>
      {(priority==="Urgent"||priority==="Emergency"||priority==="High")?"🔴":"⚪"} {priority}
    </span>
  );
}

// ── Mobile Card ───────────────────────────────────────────────────────────────
function AppCard({ app, onReply, onView }) {
  const cfg   = sc(app.status);
  const color = avatarColor(app.fullName);
  return (
    <div style={{ background:C.white, borderRadius:12, border:`1.5px solid ${C.greenBorder}`, padding:"14px 16px", marginBottom:10, boxShadow:"0 1px 6px rgba(0,0,0,0.06)" }}
      onClick={() => onView(app)}>
      {/* Top */}
      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:10 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:40, height:40, borderRadius:"50%", background:color, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:800, fontSize:14, flexShrink:0 }}>
            {initials(app.fullName)}
          </div>
          <div>
            <p style={{ margin:0, fontSize:14, fontWeight:700, color:C.dark }}>{app.fullName||"—"}</p>
            <p style={{ margin:0, fontSize:12, color:C.muted }}>{app.mobile||"—"}</p>
          </div>
        </div>
        <StatusBadge status={app.status} />
      </div>
      {/* Chips */}
      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8, flexWrap:"wrap" }}>
        <span style={{ background:C.greenLight, color:C.green, borderRadius:6, padding:"2px 9px", fontSize:11, fontWeight:700, fontFamily:"monospace" }}>{app.tokenNo||"—"}</span>
        {app.status!=="Resolved"&&app.priority&&<PriorityBadge priority={app.priority}/>}
      </div>
      {app.subject&&<p style={{ margin:"0 0 8px", fontSize:13, color:C.dark, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{app.subject}</p>}
      {/* Meta */}
      <div style={{ display:"flex", flexWrap:"wrap", gap:"3px 10px", fontSize:11, color:C.muted, marginBottom:12 }}>
        {app.mainDepartment&&<span>🏢 {app.mainDepartment}</span>}
        {app.submissionDate&&<span>📅 {formatDate(app.submissionDate)}</span>}
        {app.submittedByName&&<span>👤 {app.submittedByName}</span>}
      </div>
      {/* Actions */}
      <div style={{ display:"flex", gap:8 }} onClick={e=>e.stopPropagation()}>
        <button onClick={()=>onReply(app)} style={{ flex:1, background:C.greenLight, border:`1.5px solid ${C.green}`, borderRadius:8, padding:"8px 0", cursor:"pointer", color:C.green, fontSize:13, fontWeight:700 }}>📨 Reply</button>
        <button onClick={()=>onView(app)}  style={{ flex:1, background:"#f8fdf8",    border:`1.5px solid ${C.greenBorder}`, borderRadius:8, padding:"8px 0", cursor:"pointer", color:C.dark,  fontSize:13, fontWeight:600 }}>👁 View</button>
        {app.documents&&(
          <a href={app.documents} target="_blank" rel="noreferrer" style={{ flex:1, background:C.greenLight, border:`1.5px solid ${C.greenBorder}`, borderRadius:8, padding:"8px 0", cursor:"pointer", color:C.green, fontSize:13, fontWeight:600, textDecoration:"none", textAlign:"center" }}>📄 Doc</a>
        )}
      </div>
    </div>
  );
}

// ── TOKEN CHECK MODAL ─────────────────────────────────────────────────────────
function TokenCheckModal({ onClose, onProceed }) {
  const [hasToken, setHasToken]       = useState(null);
  const [tokenInput, setTokenInput]   = useState("");
  const [fetching, setFetching]       = useState(false);
  const [fetchError, setFetchError]   = useState("");
  const [citizenData, setCitizenData] = useState(null);

  const handleFetchToken = async () => {
    if (!tokenInput.trim()) { setFetchError("कृपया Token Number टाका."); return; }
    setFetching(true); setFetchError(""); setCitizenData(null);
    try {
      const res = await axiosInstance.get(`/citizen/appointment/token/${tokenInput.trim()}`);
      if (res.data.success && res.data.appointment) setCitizenData(res.data.appointment);
      else setFetchError("Token सापडले नाही ❌");
    } catch (err) { setFetchError(err?.response?.data?.message || "Token fetch करताना error आला ❌"); }
    finally { setFetching(false); }
  };

  const handleProceed = () => {
    if (hasToken === "yes") { if (!citizenData) { setFetchError("आधी Token Fetch करा."); return; } onProceed(citizenData); }
    else { onProceed(null); }
  };

  return (
    <div style={{ position:"fixed", inset:0, zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(0,0,0,0.45)", padding:16 }}>
      <div style={{ background:C.white, borderRadius:16, width:"100%", maxWidth:440, maxHeight:"92vh", overflowY:"auto", boxShadow:"0 8px 48px rgba(0,0,0,0.2)", fontFamily:"'Segoe UI', sans-serif" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 20px", borderBottom:`2px solid ${C.greenBadge}`, background:C.greenLight, borderRadius:"16px 16px 0 0" }}>
          <div>
            <p style={{ margin:0, fontSize:11, color:C.muted, fontWeight:700, textTransform:"uppercase", letterSpacing:1 }}>New Application</p>
            <h3 style={{ margin:"3px 0 0", fontSize:18, fontWeight:700, color:C.dark }}>Token आहे का?</h3>
          </div>
          <button onClick={onClose} style={{ background:C.white, border:"none", borderRadius:8, width:36, height:36, cursor:"pointer", fontSize:18, color:C.dark }}>✕</button>
        </div>
        <div style={{ padding:20 }}>
          <p style={{ margin:"0 0 14px", fontSize:13, fontWeight:600, color:C.muted }}>Already have token? (Citizen ने आधी appointment घेतली आहे का?)</p>
          <div style={{ display:"flex", gap:10, marginBottom:16 }}>
            {[["yes","✅ Yes"],["no","❌ No"]].map(([v,label])=>(
              <button key={v} onClick={()=>{setHasToken(v);setFetchError("");setCitizenData(null);setTokenInput("");}}
                style={{ flex:1, padding:"10px 0", borderRadius:8, fontSize:13, fontWeight:700, cursor:"pointer", border:`1.5px solid ${C.greenBorder}`, transition:"all .15s", background:hasToken===v?(v==="yes"?C.green:C.dark):C.white, color:hasToken===v?"#fff":C.muted }}>
                {label}
              </button>
            ))}
          </div>

          {hasToken === "yes" && (
            <div style={{ marginBottom:14 }}>
              <label style={{ fontSize:12, fontWeight:700, color:C.dark, display:"block", marginBottom:6, textTransform:"uppercase", letterSpacing:0.4 }}>Token Number</label>
              <div style={{ display:"flex", gap:8 }}>
                <input type="text" placeholder="e.g. VVCMC-20260323-0008" value={tokenInput}
                  onChange={e=>{setTokenInput(e.target.value);setFetchError("");setCitizenData(null);}}
                  onKeyDown={e=>{if(e.key==="Enter")handleFetchToken();}}
                  style={{ flex:1, padding:"9px 12px", fontSize:13, border:`1.5px solid ${C.greenBorder}`, borderRadius:8, outline:"none", color:C.dark, background:"#f8fdf8", fontFamily:"'Segoe UI', sans-serif", minWidth:0 }}
                />
                <button onClick={handleFetchToken} disabled={fetching}
                  style={{ padding:"9px 14px", background:fetching?"#888":C.green, color:"#fff", border:"none", borderRadius:8, fontSize:13, fontWeight:700, cursor:fetching?"not-allowed":"pointer", flexShrink:0 }}>
                  {fetching?"...":"🔍 Fetch"}
                </button>
              </div>
              {fetchError&&<p style={{ color:C.red, fontSize:12, marginTop:6, fontWeight:600 }}>{fetchError}</p>}
              {citizenData&&(
                <div style={{ marginTop:12, background:C.greenLight, border:`1.5px solid ${C.greenBorder}`, borderRadius:10, padding:"12px 14px" }}>
                  <p style={{ fontSize:11, fontWeight:700, color:C.green, textTransform:"uppercase", letterSpacing:1, marginBottom:8 }}>✅ Citizen सापडला</p>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px 14px", fontSize:12 }}>
                    {[["Name",citizenData.fullName],["Mobile",citizenData.mobileNumber],["Token",citizenData.tokenId],["Ward",citizenData.ward],["Date",citizenData.preferredDate],["Slot",citizenData.microSlot||citizenData.slotTime]].map(([k,v])=>(
                      <div key={k}><span style={{ color:C.muted, fontSize:11 }}>{k}</span><p style={{ margin:"2px 0 0", fontWeight:700, color:C.dark }}>{v||"--"}</p></div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          {hasToken === "no" && (
            <div style={{ background:"#f8fdf8", border:`1.5px solid ${C.greenBorder}`, borderRadius:10, padding:"12px 14px", fontSize:13, color:C.muted, marginBottom:14 }}>
              📝 रिकामा form उघडेल. Citizen ची माहिती manually भरावी लागेल.
            </div>
          )}
          {hasToken !== null && (
            <div style={{ display:"flex", gap:10, marginTop:8 }}>
              <button onClick={onClose} style={{ flex:1, background:"#f0f4f0", border:"none", borderRadius:8, padding:"11px 0", fontWeight:600, cursor:"pointer", color:C.dark, fontSize:13 }}>Cancel</button>
              <button onClick={handleProceed} disabled={hasToken==="yes"&&!citizenData}
                style={{ flex:2, background:(hasToken==="yes"&&!citizenData)?"#888":C.green, color:"#fff", border:"none", borderRadius:8, padding:"11px 0", fontWeight:700, cursor:(hasToken==="yes"&&!citizenData)?"not-allowed":"pointer", fontSize:13 }}>
                ➕ Open Form
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── REPLY MODAL (bottom sheet on mobile) ─────────────────────────────────────
function ReplyModal({ record, onClose, onSubmit }) {
  const [replyText, setReplyText]     = useState("");
  const [newStatus, setNewStatus]     = useState(record.status || "Pending");
  const [newPriority, setNewPriority] = useState(record.priority || "Normal");
  const [submitting, setSubmitting]   = useState(false);
  const [replyDoc, setReplyDoc]       = useState(null);

  if (!record) return null;

  const handleSubmit = async () => {
    if (!replyText.trim()) { alert("कृपया reply message लिहा."); return; }
    setSubmitting(true);
    await onSubmit({ applicationId:record._id, replyMessage:replyText, status:newStatus, priority:newPriority, replyDocument:replyDoc });
    setSubmitting(false);
  };

  return (
    <div style={{ position:"fixed", inset:0, zIndex:1000, display:"flex", alignItems:"flex-end", justifyContent:"center", background:"rgba(0,0,0,0.45)" }}
      onClick={onClose}>
      <div style={{ background:C.white, borderRadius:"20px 20px 0 0", width:"100%", maxWidth:640, maxHeight:"95vh", overflowY:"auto", boxShadow:"0 -8px 48px rgba(0,0,0,0.2)", fontFamily:"'Segoe UI', sans-serif" }}
        onClick={e=>e.stopPropagation()}>

        {/* Drag handle */}
        <div style={{ width:40, height:4, borderRadius:2, background:C.greenBorder, margin:"10px auto 0" }} />

        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 20px", borderBottom:`2px solid ${C.greenBadge}`, background:C.greenLight }}>
          <div style={{ minWidth:0 }}>
            <p style={{ margin:0, fontSize:11, color:C.muted, fontWeight:700, textTransform:"uppercase", letterSpacing:1 }}>Reply to Application</p>
            <h3 style={{ margin:"3px 0 0", fontSize:15, fontWeight:700, color:C.dark, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{record.tokenNo} — {record.fullName}</h3>
          </div>
          <button onClick={onClose} style={{ background:C.white, border:"none", borderRadius:8, width:34, height:34, cursor:"pointer", fontSize:16, color:C.dark, flexShrink:0, marginLeft:10 }}>✕</button>
        </div>

        <div style={{ padding:"16px 20px" }}>
          {/* Quick info */}
          <div style={{ border:`1.5px solid ${C.greenBorder}`, borderRadius:10, overflow:"hidden", marginBottom:16 }}>
            {[["Applicant",record.fullName],["Mobile",record.mobile],["Subject",record.subject],["Office",record.office],
              ["Submitted By",record.submittedByName+(record.submittedByRole?` (${record.submittedByRole})`:"")] ,
              ["Submitted On",record.submissionDate?new Date(record.submissionDate).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"--"]
            ].filter(([,v])=>v).map(([k,v])=>(
              <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"7px 14px", borderBottom:`1px solid ${C.rowBorder}`, fontSize:13, gap:8 }}>
                <span style={{ color:C.muted, fontWeight:600, flexShrink:0, minWidth:100 }}>{k}</span>
                <span style={{ color:C.dark, fontWeight:700, textAlign:"right", wordBreak:"break-word" }}>{v}</span>
              </div>
            ))}
          </div>

          {/* Status */}
          <div style={{ marginBottom:14 }}>
            <label style={{ fontSize:12, fontWeight:700, color:C.dark, display:"block", marginBottom:8, textTransform:"uppercase", letterSpacing:0.4 }}>Status बदला</label>
            <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
              {["Pending","In Progress","Resolved","Rejected"].map(s=>{
                const cfg=sc(s); const active=newStatus===s;
                return <button key={s} onClick={()=>setNewStatus(s)} style={{ padding:"6px 14px", borderRadius:20, fontSize:12, fontWeight:700, cursor:"pointer", border:`1.5px solid ${active?cfg.border:C.greenBorder}`, background:active?cfg.bg:"#f8fdf8", color:active?cfg.color:C.muted, transition:"all .15s" }}>
                  <span style={{ display:"inline-block", width:6, height:6, borderRadius:"50%", background:active?cfg.dot:"#a8c8b0", marginRight:4, verticalAlign:"middle" }}/>{s}
                </button>;
              })}
            </div>
          </div>

          {/* Priority */}
          {newStatus !== "Resolved" && (
            <div style={{ marginBottom:14 }}>
              <label style={{ fontSize:12, fontWeight:700, color:C.dark, display:"block", marginBottom:8, textTransform:"uppercase", letterSpacing:0.4 }}>Priority बदला</label>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {["Normal","High","Urgent","Emergency"].map(p=>{
                  const cfg=priorityConfig[p]||priorityConfig["Normal"]; const active=newPriority===p;
                  return <button key={p} onClick={()=>setNewPriority(p)} style={{ padding:"6px 12px", borderRadius:8, fontSize:12, fontWeight:700, cursor:"pointer", border:`1.5px solid ${active?cfg.border:C.greenBorder}`, background:active?cfg.bg:"#f8fdf8", color:active?cfg.color:C.muted, transition:"all .15s" }}>
                    {p==="Normal"?"⚪":"🔴"} {p}
                  </button>;
                })}
              </div>
            </div>
          )}

          {/* Reply text */}
          <div style={{ marginBottom:14 }}>
            <label style={{ fontSize:12, fontWeight:700, color:C.dark, display:"block", marginBottom:8, textTransform:"uppercase", letterSpacing:0.4 }}>Reply Message <span style={{ color:C.red }}>*</span></label>
            <textarea rows={4} placeholder="Applicant ला reply message लिहा..." value={replyText} onChange={e=>setReplyText(e.target.value)}
              style={{ width:"100%", padding:"10px 14px", fontSize:13, border:`1.5px solid ${C.greenBorder}`, borderRadius:8, outline:"none", fontFamily:"'Segoe UI', sans-serif", resize:"vertical", boxSizing:"border-box", color:C.dark, background:"#f8fdf8" }}
              onFocus={e=>e.target.style.borderColor=C.green} onBlur={e=>e.target.style.borderColor=C.greenBorder}
            />
            <p style={{ fontSize:11, color:C.muted, textAlign:"right", margin:"4px 0 0" }}>{replyText.length} characters</p>
          </div>

          {/* File upload */}
          <div style={{ marginBottom:16 }}>
            <label style={{ fontSize:12, fontWeight:700, color:C.dark, display:"block", marginBottom:8, textTransform:"uppercase", letterSpacing:0.4 }}>
              Reply Document <span style={{ color:C.muted, fontWeight:400, fontSize:11 }}>(Optional)</span>
            </label>
            <div style={{ border:`2px dashed ${C.greenBorder}`, borderRadius:10, padding:14, background:"#f8fdf8" }}>
              <label style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer", flexWrap:"wrap" }}>
                <span style={{ padding:"7px 14px", background:C.green, color:"#fff", fontSize:12, fontWeight:700, borderRadius:8, whiteSpace:"nowrap" }}>
                  📎 Choose File
                  <input type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" style={{ display:"none" }} onChange={e=>setReplyDoc(e.target.files[0]||null)} />
                </span>
                <span style={{ fontSize:13, color:C.muted, wordBreak:"break-all" }}>{replyDoc?replyDoc.name:"PDF, DOC, or Image"}</span>
              </label>
              {replyDoc&&(
                <div style={{ marginTop:10, display:"flex", alignItems:"center", justifyContent:"space-between", background:C.white, border:`1.5px solid ${C.greenBorder}`, borderRadius:8, padding:"8px 12px" }}>
                  <div style={{ minWidth:0 }}>
                    <p style={{ margin:0, fontSize:12, fontWeight:700, color:C.green, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>✅ {replyDoc.name}</p>
                    <p style={{ margin:0, fontSize:11, color:C.muted }}>{(replyDoc.size/1024).toFixed(1)} KB</p>
                  </div>
                  <button onClick={()=>setReplyDoc(null)} style={{ background:"none", border:"none", cursor:"pointer", color:C.red, fontSize:18, fontWeight:700, flexShrink:0, marginLeft:8 }}>✕</button>
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display:"flex", gap:10 }}>
            <button onClick={onClose} style={{ flex:1, background:"#f0f4f0", border:"none", borderRadius:8, padding:"12px 0", fontWeight:600, cursor:"pointer", color:C.dark, fontSize:14 }}>Cancel</button>
            <button onClick={handleSubmit} disabled={submitting} style={{ flex:2, background:submitting?"#888":C.green, color:"#fff", border:"none", borderRadius:8, padding:"12px 0", fontWeight:700, cursor:submitting?"not-allowed":"pointer", fontSize:14, display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
              {submitting?<><span style={{ width:13, height:13, border:"2px solid rgba(255,255,255,0.4)", borderTopColor:"#fff", borderRadius:"50%", animation:"spin .7s linear infinite", display:"inline-block" }}/>Sending…</>:"📨 Send Reply"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── DETAIL MODAL (bottom sheet) ───────────────────────────────────────────────
function DetailModal({ record, onClose }) {
  if (!record) return null;

  const InfoRow = ({ label, value }) => (
    <div style={{ display:"flex", justifyContent:"space-between", padding:"8px 14px", borderBottom:`1px solid ${C.rowBorder}`, fontSize:13, gap:8 }}>
      <span style={{ color:C.muted, fontWeight:600, flexShrink:0, minWidth:110 }}>{label}</span>
      <span style={{ color:C.dark, fontWeight:700, textAlign:"right", wordBreak:"break-word" }}>{value||"--"}</span>
    </div>
  );
  const SectionTitle = ({ title }) => (
    <div style={{ padding:"8px 14px 6px", background:C.greenLight, borderBottom:`1px solid ${C.greenBorder}` }}>
      <span style={{ fontSize:11, fontWeight:700, color:C.green, textTransform:"uppercase", letterSpacing:1 }}>{title}</span>
    </div>
  );

  return (
    <div style={{ position:"fixed", inset:0, zIndex:1000, display:"flex", alignItems:"flex-end", justifyContent:"center", background:"rgba(0,0,0,0.45)" }}
      onClick={onClose}>
      <div style={{ background:C.white, borderRadius:"20px 20px 0 0", width:"100%", maxWidth:640, maxHeight:"95vh", overflowY:"auto", boxShadow:"0 -8px 48px rgba(0,0,0,0.2)", fontFamily:"'Segoe UI', sans-serif" }}
        onClick={e=>e.stopPropagation()}>

        <div style={{ width:40, height:4, borderRadius:2, background:C.greenBorder, margin:"10px auto 0" }} />

        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 20px", borderBottom:`2px solid ${C.greenBadge}`, background:C.greenLight }}>
          <div>
            <p style={{ margin:0, fontSize:11, color:C.muted, fontWeight:700, textTransform:"uppercase", letterSpacing:1 }}>Application Detail</p>
            <h3 style={{ margin:"3px 0 0", fontSize:16, fontWeight:700, color:C.dark }}>{record.tokenNo}</h3>
          </div>
          <button onClick={onClose} style={{ background:C.white, border:"none", borderRadius:8, width:34, height:34, cursor:"pointer", fontSize:16, color:C.dark }}>✕</button>
        </div>

        <div style={{ padding:"0 0 20px" }}>
          {[
            ["Citizen Details",[["Full Name",record.fullName],["Mobile",record.mobile],["Email",record.email],["Category",record.category],["Ward No",record.wardNo],["Address",record.address],["Pincode",record.pincode],["Taluka",record.taluka],["District",record.district]]],
            ["Identity",       [["Type",record.identityType],["Number",record.identityNumber]]],
            ["Complaint",      [["Subject",record.subject],["Description",record.description]]],
            ["Office & Workflow",[
              ["Office",record.office],["Main Department",record.mainDepartment],["Sub Department",record.subDepartment],
              ...(record.status!=="Resolved"?[["Priority",record.priority]]:[]),
              ["Tag To",Array.isArray(record.tagTo)?record.tagTo.join(", "):record.tagTo],
              ["Follow Up",record.followUp],["Status",record.status],["Submitted On",formatDate(record.submissionDate)],
              ...(record.status==="Resolved"?(()=>{const r=record.replies?.find(r=>r.status==="Resolved");return r?[["Resolved By",r.repliedByName],["Resolved Role",r.repliedByRole],["Resolved On",r.createdAt?new Date(r.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"]]:[];})():[]),
            ]],
          ].map(([title,rows])=>(
            <div key={title} style={{ border:`1.5px solid ${C.greenBorder}`, borderRadius:10, overflow:"hidden", margin:"14px 16px 0" }}>
              <SectionTitle title={title}/>
              {rows.filter(([,v])=>v).map(([k,v])=><InfoRow key={k} label={k} value={v}/>)}
            </div>
          ))}

          {record.documents&&(
            <div style={{ margin:"14px 16px 0", padding:"12px 14px", background:C.greenLight, border:`1.5px solid ${C.greenBorder}`, borderRadius:10 }}>
              <p style={{ margin:"0 0 8px", fontSize:11, fontWeight:700, color:C.green, textTransform:"uppercase", letterSpacing:1 }}>Document</p>
              <a href={record.documents} target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"7px 14px", background:C.green, color:"#fff", borderRadius:8, fontSize:13, fontWeight:600, textDecoration:"none" }}>📄 View Document</a>
            </div>
          )}

          {record.replies&&record.replies.length>0&&(
            <div style={{ margin:"14px 16px 0" }}>
              <p style={{ fontSize:11, fontWeight:700, color:C.green, textTransform:"uppercase", letterSpacing:1, marginBottom:10 }}>Replies ({record.replies.length})</p>
              {record.replies.map((reply,i)=>{
                const cfg=sc(reply.status); const isResolved=reply.status==="Resolved";
                return (
                  <div key={i} style={{ borderRadius:10, border:`1.5px solid ${isResolved?"#a8d5b5":C.greenBorder}`, padding:"12px 14px", background:isResolved?C.greenLight:"#f8fdf8", marginBottom:8 }}>
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:8, flexWrap:"wrap", gap:6 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                        <div style={{ width:28, height:28, borderRadius:"50%", background:isResolved?C.green:"#6366f1", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:11, fontWeight:700 }}>
                          {reply.repliedByName?reply.repliedByName.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase():"?"}
                        </div>
                        <div>
                          <div style={{ fontSize:13, fontWeight:700, color:C.dark }}>{reply.repliedByName||"—"}</div>
                          {reply.repliedByRole&&<div style={{ fontSize:11, color:C.green, fontWeight:600 }}>{reply.repliedByRole}</div>}
                        </div>
                      </div>
                      <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                        {reply.status&&<span style={{ display:"inline-flex", alignItems:"center", gap:4, padding:"3px 9px", borderRadius:20, fontSize:11, fontWeight:700, background:cfg.bg, color:cfg.color, border:`1px solid ${cfg.border}` }}><span style={{ width:5,height:5,borderRadius:"50%",background:cfg.dot }}/>{reply.status}</span>}
                        <span style={{ fontSize:11, color:C.muted }}>{reply.createdAt?new Date(reply.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""}</span>
                      </div>
                    </div>
                    <p style={{ fontSize:13, color:isResolved?C.green:C.dark, margin:0, paddingLeft:36 }}>{reply.replyMessage}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── PAGINATION COMPONENT ──────────────────────────────────────────────────────
function Pagination({ page, totalPages, total, limit, onPageChange, onLimitChange }) {
  if (totalPages <= 1 && total <= 10) return null;

  const pages = [];
  const delta = 2;
  const left  = Math.max(1, page - delta);
  const right = Math.min(totalPages, page + delta);

  if (left > 1)          { pages.push(1); if (left > 2) pages.push("..."); }
  for (let i = left; i <= right; i++) pages.push(i);
  if (right < totalPages){ if (right < totalPages - 1) pages.push("..."); pages.push(totalPages); }

  const btnBase = { padding:"6px 12px", borderRadius:7, fontSize:13, fontWeight:600, cursor:"pointer", border:`1.5px solid ${C.greenBorder}`, transition:"all .15s", minWidth:36, textAlign:"center" };

  return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 20px", borderTop:`1px solid ${C.rowBorder}`, flexWrap:"wrap", gap:10 }}>

      {/* ── Rows per page selector ── */}
      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
        <span style={{ fontSize:12, color:C.muted, fontWeight:600, whiteSpace:"nowrap" }}>Rows per page:</span>
        <select value={limit} onChange={e => onLimitChange(Number(e.target.value))}
          style={{ padding:"5px 10px", fontSize:13, border:`1.5px solid ${C.greenBorder}`, borderRadius:7, outline:"none", color:C.dark, background:C.white, cursor:"pointer", fontFamily:"'Segoe UI', sans-serif" }}>
          {[10, 20, 50, 100].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        <span style={{ fontSize:12, color:C.muted, whiteSpace:"nowrap" }}>
          of <strong style={{ color:C.dark }}>{total}</strong>
        </span>
      </div>

      {/* ── Page buttons ── */}
      {totalPages > 1 && (
        <div style={{ display:"flex", alignItems:"center", gap:6, flexWrap:"wrap" }}>
          <button onClick={()=>onPageChange(page-1)} disabled={page===1}
            style={{ ...btnBase, background:page===1?"#f0f4f0":C.white, color:page===1?"#aaa":C.green, cursor:page===1?"not-allowed":"pointer" }}>
            ‹ Prev
          </button>

          {pages.map((p,i)=>
            p === "..." ? (
              <span key={`dot-${i}`} style={{ padding:"6px 4px", fontSize:13, color:C.muted }}>…</span>
            ) : (
              <button key={p} onClick={()=>onPageChange(p)}
                style={{ ...btnBase, background:p===page?C.green:C.white, color:p===page?"#fff":C.dark, border:`1.5px solid ${p===page?C.green:C.greenBorder}` }}>
                {p}
              </button>
            )
          )}

          <button onClick={()=>onPageChange(page+1)} disabled={page===totalPages}
            style={{ ...btnBase, background:page===totalPages?"#f0f4f0":C.white, color:page===totalPages?"#aaa":C.green, cursor:page===totalPages?"not-allowed":"pointer" }}>
            Next ›
          </button>
        </div>
      )}
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function AllApplication() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading]           = useState(true);
  const [search, setSearch]             = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selected, setSelected]         = useState(null);
  const [replyTarget, setReplyTarget]   = useState(null);
  const [showTokenCheck, setShowTokenCheck] = useState(false);
  const [showForm, setShowForm]             = useState(false);
  const [prefillData, setPrefillData]       = useState(null);
  const [toast, setToast]               = useState(null);

  // ── Pagination state ──
  const [page, setPage]             = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal]           = useState(0);
  const [limit, setLimit]           = useState(20);   // ← was const LIMIT = 20

  const navigate = useNavigate();

  const showToast = (msg, type="success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  useEffect(() => { fetchApplications(1, 20); }, []);

  // ── accepts both pageNum and limitNum ──
  const fetchApplications = async (pageNum = page, limitNum = limit) => {
    try {
      setLoading(true);
      const authUserRaw = localStorage.getItem("authUser");
      const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;
      const res = await axiosInstance.get("/getAllApplications", {
        params: {
          role:                   authUser?.role,
          userId:                 authUser?.id,
          userOffice:             authUser?.office,
          userDepartmentCategory: authUser?.departmentCategory,
          userDepartmentName:     authUser?.departmentName,
          page:                   pageNum,
          limit:                  limitNum,
        },
      });
      if (res.data.success) {
        setApplications(res.data.data || []);
        setTotal(res.data.total || 0);
        setTotalPages(res.data.totalPages || 1);
        setPage(pageNum);
      }
    } catch (err) { console.error("Error fetching applications:", err); }
    finally { setLoading(false); }
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    fetchApplications(newPage, limit);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ── NEW: reset to page 1 when limit changes ──
  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
    fetchApplications(1, newLimit);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddClick = () => setShowTokenCheck(true);

  const handleTokenCheckProceed = (citizenAppointment) => {
    setShowTokenCheck(false);
    if (citizenAppointment) {
      const normalizeWard = (ward) => ward ? ward.replace(/Ward\s+/i, "Ward-") : "";
      setPrefillData({
        fullName:     citizenAppointment.fullName     || "",
        mobile:       citizenAppointment.mobileNumber || "",
        email:        citizenAppointment.email        || "",
        address:      citizenAppointment.address      || "",
        pincode:      citizenAppointment.pincode      || "",
        wardNo:       citizenAppointment.ward         || "",
        ward:         normalizeWard(citizenAppointment.ward),
        visitorPhoto: citizenAppointment.visitorPhoto || "",
        _tokenId:       citizenAppointment.tokenId        || "",
        _citizenId:     citizenAppointment.citizenId      || "",
        _preferredDate: citizenAppointment.preferredDate  || "",
        _slotTime:      citizenAppointment.slotTime        || "",
        _microSlot:     citizenAppointment.microSlot       || "",
      });
    } else { setPrefillData(null); }
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setPrefillData(null);
    fetchApplications(page, limit);
  };

  const handleReplySubmit = async ({ applicationId, replyMessage, status, priority, replyDocument }) => {
    try {
      const authUserRaw = localStorage.getItem("authUser");
      const authUser    = authUserRaw ? JSON.parse(authUserRaw) : null;
      const repliedByName = authUser?.submittedByName || authUser?.name || authUser?.fullName || "";
      const repliedByRole = authUser?.submittedByRole || authUser?.role || "";
      const repliedById   = authUser?.submittedById   || authUser?.id  || "";
      const foundApp = applications.find(a => a._id === applicationId);
      const tokenNo  = foundApp?.tokenNo;
      if (!tokenNo) { showToast("Token No सापडले नाही ❌", "error"); return; }
      const apptRes = await axiosInstance.get(`/citizen/appointment/token/${tokenNo}`).catch(() => null);
      if (!apptRes?.data?.appointment?._id) { showToast("Citizen Appointment सापडले नाही ❌", "error"); return; }
      const citizenApptId = apptRes.data.appointment._id;
      const formData = new FormData();
      formData.append("status",        status.toLowerCase());
      formData.append("adminNote",     replyMessage);
      formData.append("replyMessage",  replyMessage);
      formData.append("priority",      priority);
      formData.append("repliedBy",     repliedById);
      formData.append("repliedByName", repliedByName);
      formData.append("repliedByRole", repliedByRole);
      if (replyDocument) formData.append("replyDocument", replyDocument);
      await axiosInstance.patch(`/citizen/admin/update-status/${citizenApptId}`, formData, { headers:{"Content-Type":"multipart/form-data"} });
      const newReply = { replyMessage, status, priority, repliedBy:repliedById, repliedByName, repliedByRole, createdAt:new Date().toISOString() };
      setApplications(prev => prev.map(app => app._id===applicationId ? { ...app, status, priority, replies:[...(app.replies||[]),newReply] } : app));
      showToast("Reply यशस्वीरित्या पाठवली! ✅");
      setReplyTarget(null);
    } catch (err) {
      console.error("Reply error:", err);
      showToast(err?.response?.data?.message || "Reply पाठवताना error आला ❌", "error");
    }
  };

  const filtered = applications.filter(app => {
    const matchSearch = !search ||
      app.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      app.inwardNo?.toLowerCase().includes(search.toLowerCase()) ||
      app.subject?.toLowerCase().includes(search.toLowerCase()) ||
      app.mobile?.includes(search);
    const matchStatus = statusFilter === "All" || app.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const statusCounts = ["All","Pending","In Progress","Resolved","Rejected"].map(s => ({
    label: s,
    count: s==="All" ? total : applications.filter(a=>a.status===s).length,
  }));

  return (
    <div style={{ fontFamily:"'Segoe UI', sans-serif", background:C.bg, minHeight:"100vh", padding:"16px" }}>

      <style>{`
        @keyframes fadeIn { from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)} }
        @keyframes spin { to{transform:rotate(360deg)} }

        .desk-table { display: block; }
        .mob-cards   { display: none; }

        @media (max-width: 768px) {
          .desk-table { display: none !important; }
          .mob-cards  { display: block !important; }
          .hdr-row   { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
          .hdr-btns  { width: 100%; display: flex !important; gap: 8px; }
          .hdr-btns button { flex: 1; }
          .flt-bar   { flex-direction: column !important; gap: 10px !important; }
          .flt-tabs  { overflow-x: auto !important; flex-wrap: nowrap !important; padding-bottom: 4px; -webkit-overflow-scrolling: touch; }
          .flt-tabs::-webkit-scrollbar { height: 3px; }
          .flt-tabs::-webkit-scrollbar-thumb { background: #c8e0cc; border-radius: 2px; }
          .srch-wrap { width: 100% !important; }
          .toast-box { left: 12px !important; right: 12px !important; }
        }

        @media (max-width: 480px) {
          .page-title { font-size: 20px !important; }
        }
      `}</style>

      {/* Toast */}
      {toast && (
        <div className="toast-box" style={{ position:"fixed", top:16, right:16, zIndex:9999, background:toast.type==="success"?C.green:C.red, color:"#fff", padding:"12px 18px", borderRadius:10, boxShadow:"0 4px 16px rgba(0,0,0,0.2)", fontSize:14, fontWeight:600, animation:"fadeIn 0.3s ease" }}>
          {toast.msg}
        </div>
      )}

      {/* ── HEADER ── */}
      <div className="hdr-row" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:18 }}>
        <div>
          <h1 className="page-title" style={{ margin:0, fontSize:24, fontWeight:700, color:C.dark, display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
            All Applications
            <span style={{ background:C.greenBadge, color:C.green, borderRadius:20, padding:"2px 10px", fontSize:13, fontWeight:700 }}>{total}</span>
          </h1>
          <p style={{ margin:"4px 0 0", color:C.muted, fontSize:13 }}>जन संवाद - Applications</p>
        </div>
        <div className="hdr-btns" style={{ display:"flex", gap:10 }}>
          <button onClick={()=>fetchApplications(page, limit)} style={{ background:C.white, color:C.green, border:`2px solid ${C.green}`, borderRadius:8, padding:"9px 16px", fontWeight:600, fontSize:13, cursor:"pointer" }}>🔄 Refresh</button>
          <button onClick={handleAddClick}                     style={{ background:C.green, color:"#fff", border:"none", borderRadius:8, padding:"9px 16px", fontWeight:600, fontSize:13, cursor:"pointer" }}>➕ Add</button>
        </div>
      </div>

      {/* ── SEARCH + FILTERS ── */}
      <div style={{ background:C.white, borderRadius:12, padding:"12px 16px", marginBottom:14, boxShadow:"0 2px 8px rgba(0,0,0,0.05)" }}>
        <div className="flt-bar" style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div className="srch-wrap" style={{ position:"relative", flex:1 }}>
            <span style={{ position:"absolute", left:10, top:"50%", transform:"translateY(-50%)", fontSize:14, color:C.muted }}>🔍</span>
            <input type="text" placeholder="Search by name, inward no, subject..." value={search} onChange={e=>setSearch(e.target.value)}
              style={{ width:"100%", padding:"9px 12px 9px 32px", fontSize:13, border:`1.5px solid ${C.greenBorder}`, borderRadius:8, outline:"none", color:C.dark, background:"#f8fdf8", boxSizing:"border-box", fontFamily:"'Segoe UI', sans-serif" }}
            />
          </div>
          <div className="flt-tabs" style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
            {statusCounts.map(({label,count})=>(
              <button key={label} onClick={()=>setStatusFilter(label)}
                style={{ padding:"7px 14px", borderRadius:20, fontSize:12, fontWeight:600, cursor:"pointer", border:statusFilter===label?"none":`1.5px solid ${C.greenBorder}`, background:statusFilter===label?C.green:C.white, color:statusFilter===label?"#fff":C.muted, transition:"all .15s", whiteSpace:"nowrap" }}>
                {label} <span style={{ marginLeft:4, fontSize:11, fontWeight:700, background:statusFilter===label?"rgba(255,255,255,0.25)":C.greenBadge, color:statusFilter===label?"#fff":C.green, padding:"1px 6px", borderRadius:10 }}>{count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP TABLE ── */}
      <div className="desk-table" style={{ background:C.white, borderRadius:12, boxShadow:"0 2px 12px rgba(0,0,0,0.07)", overflowX:"auto" }}>
        <div style={{ display:"flex", alignItems:"center", padding:"14px 20px 12px", borderBottom:`2px solid ${C.greenBadge}` }}>
          <h3 style={{ margin:0, fontSize:16, fontWeight:700, color:C.dark }}>
            Application Records
            <span style={{ background:C.greenBadge, color:C.green, borderRadius:20, padding:"2px 10px", fontSize:12, marginLeft:8 }}>{total}</span>
          </h3>
        </div>

        {loading ? (
          <div style={{ textAlign:"center", padding:60, color:"#888" }}><div style={{ fontSize:32, marginBottom:12 }}>⏳</div>Loading applications...</div>
        ) : (
          <table style={{ width:"100%", borderCollapse:"collapse", minWidth:1200 }}>
            <thead>
              <tr style={{ background:"#f0f7f2" }}>
                {["Reply","#","Applicant","Token No","Status","Subject","Department","Priority","Date","Submitted By","Reply By","Document"].map(h=>(
                  <th key={h} style={{ padding:"12px 14px", textAlign:"left", fontSize:12, fontWeight:700, color:C.dark, borderBottom:`2px solid ${C.greenBadge}`, whiteSpace:"nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length===0 ? (
                <tr><td colSpan={12} style={{ textAlign:"center", padding:48, color:"#888", fontSize:14 }}>
                  <div style={{ fontSize:36, marginBottom:10 }}>📭</div>
                  {search?"No matching applications found.":"No applications yet."}
                </td></tr>
              ) : filtered.map((app,index)=>(
                <tr key={app._id} style={{ borderBottom:`1px solid ${C.rowBorder}`, cursor:"pointer" }}
                  onMouseOver={e=>e.currentTarget.style.background=C.rowHover}
                  onMouseOut={e=>e.currentTarget.style.background="transparent"}
                  onClick={()=>setSelected(app)}>

                  <td style={{ padding:"10px 12px" }} onClick={e=>e.stopPropagation()}>
                    <button onClick={()=>setReplyTarget(app)} style={{ background:C.greenLight, border:`1.5px solid ${C.green}`, borderRadius:7, padding:"5px 11px", cursor:"pointer", color:C.green, fontSize:12, fontWeight:700 }}>📨 Reply</button>
                  </td>
                  <td style={{ padding:"10px 12px", fontSize:13, color:"#888" }}>{(page-1)*limit + index + 1}</td>
                  <td style={{ padding:"10px 12px", minWidth:160 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:9 }}>
                      <div style={{ width:34, height:34, borderRadius:"50%", background:avatarColor(app.fullName), display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:800, fontSize:12, flexShrink:0 }}>{initials(app.fullName)}</div>
                      <div><p style={{ margin:0, fontSize:13, fontWeight:700, color:C.dark }}>{app.fullName||"—"}</p><p style={{ margin:0, fontSize:11, color:C.muted }}>{app.mobile}</p></div>
                    </div>
                  </td>
                  <td style={{ padding:"10px 12px" }}><span style={{ background:C.greenLight, color:C.green, borderRadius:6, padding:"2px 9px", fontSize:11, fontWeight:700, fontFamily:"monospace" }}>{app.tokenNo||"—"}</span></td>
                  <td style={{ padding:"10px 12px" }}><StatusBadge status={app.status}/></td>
                  <td style={{ padding:"10px 12px", maxWidth:180 }}><span style={{ display:"block", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:170, fontSize:13, color:C.dark }} title={app.subject}>{app.subject||"—"}</span></td>
                  <td style={{ padding:"10px 12px", maxWidth:160 }}>
                    <div style={{ fontSize:12, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:150, color:C.dark }}>{app.mainDepartment||"—"}</div>
                    {app.subDepartment&&<div style={{ fontSize:11, color:C.muted, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:150 }}>{app.subDepartment}</div>}
                  </td>
                  <td style={{ padding:"10px 12px" }}>{app.status!=="Resolved"?<PriorityBadge priority={app.priority}/>:<span style={{ color:"#ccc" }}>—</span>}</td>
                  <td style={{ padding:"10px 12px", whiteSpace:"nowrap", fontSize:12, color:C.muted }}>{formatDate(app.submissionDate)}</td>
                  <td style={{ padding:"10px 12px", minWidth:130 }}>
                    {app.submittedByName?<div><div style={{ fontSize:12, fontWeight:700, color:C.dark, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:120 }}>{app.submittedByName}</div>{app.submittedByRole&&<div style={{ fontSize:11, color:C.muted }}>{app.submittedByRole}</div>}</div>:<span style={{ color:"#ccc" }}>—</span>}
                  </td>
                  <td style={{ padding:"10px 12px", minWidth:130 }}>
                    {app.replies&&app.replies.length>0?(()=>{
                      const first=app.replies[0]; const isResolved=first.status==="Resolved"; const more=app.replies.length-1;
                      return <div>
                        <div style={{ display:"flex", alignItems:"center", gap:5 }}><span style={{ width:7,height:7,borderRadius:"50%",background:isResolved?"#22c55e":"#6366f1",display:"inline-block",flexShrink:0 }}/><div style={{ fontSize:12,fontWeight:700,color:isResolved?C.green:C.dark,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:110 }}>{first.repliedByName||"—"}</div></div>
                        {first.repliedByRole&&<div style={{ fontSize:11,color:C.muted,paddingLeft:12 }}>{first.repliedByRole}</div>}
                        {more>0&&<div style={{ fontSize:11,color:"#6366f1",fontWeight:700,paddingLeft:12 }}>+{more} more</div>}
                      </div>;
                    })():<span style={{ color:"#ccc" }}>—</span>}
                  </td>
                  <td style={{ padding:"10px 12px" }} onClick={e=>e.stopPropagation()}>
                    {app.documents?<a href={app.documents} target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:4, color:C.green, fontSize:12, fontWeight:600, padding:"4px 8px", borderRadius:6, background:C.greenLight, textDecoration:"none" }}>📄 View</a>:<span style={{ color:"#ccc" }}>—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!loading && (
          <Pagination
            page={page} totalPages={totalPages} total={total} limit={limit}
            onPageChange={handlePageChange} onLimitChange={handleLimitChange}
          />
        )}
      </div>

      {/* ── MOBILE CARDS ── */}
      <div className="mob-cards">
        {loading ? (
          <div style={{ textAlign:"center", padding:48, color:"#888" }}><div style={{ fontSize:32, marginBottom:12 }}>⏳</div>Loading applications...</div>
        ) : filtered.length===0 ? (
          <div style={{ textAlign:"center", padding:48, color:"#888" }}>
            <div style={{ fontSize:36, marginBottom:10 }}>📭</div>
            {search?"No matching applications found.":"No applications yet."}
          </div>
        ) : (
          <>
            <div style={{ fontSize:12, color:C.muted, marginBottom:10, padding:"0 2px" }}>
              Showing <strong style={{ color:C.dark }}>{(page-1)*limit+1}–{Math.min(page*limit,total)}</strong> of <strong style={{ color:C.dark }}>{total}</strong> applications
            </div>
            {filtered.map((app,index)=>(
              <AppCard key={app._id||index} app={app} index={index}
                onReply={a=>setReplyTarget(a)}
                onView={a=>setSelected(a)}
              />
            ))}
            <Pagination
              page={page} totalPages={totalPages} total={total} limit={limit}
              onPageChange={handlePageChange} onLimitChange={handleLimitChange}
            />
          </>
        )}
      </div>

      {/* Modals */}
      {selected      && <DetailModal record={selected}     onClose={()=>setSelected(null)}    />}
      {replyTarget   && <ReplyModal  record={replyTarget}  onClose={()=>setReplyTarget(null)} onSubmit={handleReplySubmit} />}
      {showTokenCheck && <TokenCheckModal onClose={()=>setShowTokenCheck(false)} onProceed={handleTokenCheckProceed} />}
      {showForm       && <JansanwadAppform onClose={handleFormClose} pretillData={prefillData} />}
    </div>
  );
}