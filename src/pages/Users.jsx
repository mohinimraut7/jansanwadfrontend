import React, { useState, useEffect } from "react";
import axiosInstance from "../services/axiosInstance";
import { toast } from "react-toastify";

// ── Helpers ───────────────────────────────────────────────────────────────────
const avatarColors = [
  "bg-blue-500","bg-teal-500","bg-violet-500","bg-pink-500",
  "bg-amber-500","bg-cyan-500","bg-emerald-500","bg-rose-500",
];

function Avatar({ name = "", index }) {
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase() || "?";
  return (
    <div className={`w-10 h-10 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm ring-2 ring-white`}>
      {initials}
    </div>
  );
}

function formatDate(dateStr) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" });
}

// ── Detail Modal ──────────────────────────────────────────────────────────────
function DetailModal({ user, onClose }) {
  if (!user) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl">
          <div>
            <p className="text-xs text-blue-200 font-medium tracking-wide uppercase">User Detail</p>
            <h2 className="text-lg font-bold text-white">{user.fullName}</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white font-bold transition-colors text-sm">✕</button>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-gray-50 rounded-xl px-4 py-3 grid grid-cols-2 gap-x-6 gap-y-3">
            {[
              ["Full Name",     user.fullName],
              ["Username",      user.userName],
              ["Mobile Number", user.mobileNumber],
              ["Email",         user.email],
              ["Created At",    formatDate(user.createdAt)],
              ["Updated At",    formatDate(user.updatedAt)],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs text-gray-400">{label}</p>
                <p className="text-sm text-gray-800 font-medium">{value || "—"}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Edit User Modal ───────────────────────────────────────────────────────────
function EditUserModal({ user, onClose, onSuccess }) {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName:     user.fullName     || "",
    userName:     user.userName     || "",
    mobileNumber: user.mobileNumber || "",
    email:        user.email        || "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!form.fullName || !form.userName || !form.mobileNumber || !form.email) {
      toast.warn("All required fields fill करा ❌");
      return;
    }
    try {
      setSubmitting(true);
      const res = await axiosInstance.patch(`/users/${user._id}`, form);
      const data = res.data;
      if (!data.success) { toast.error(data.message || "Update failed ❌"); return; }
      toast.success("User Updated Successfully ✅");
      onSuccess();
      onClose();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Server Error ❌");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldCls = "border border-gray-200 rounded-lg px-4 py-3 focus-within:border-blue-500 transition-all";
  const labelCls = "block text-xs text-gray-400 mb-1";
  const inputCls = "w-full outline-none text-gray-800 text-sm bg-transparent";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-amber-500 to-orange-500 rounded-t-2xl">
          <div>
            <p className="text-xs text-amber-100 font-medium tracking-wide uppercase">User Management</p>
            <h2 className="text-lg font-bold text-white">Edit User — {user.fullName}</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white font-bold transition-colors text-sm">✕</button>
        </div>
        <div className="px-8 py-6">
          <form onSubmit={handleUpdate} className="space-y-4">
            <div className={fieldCls}>
              <label className={labelCls}>Full Name</label>
              <input type="text" name="fullName" value={form.fullName} onChange={handleChange} className={inputCls} placeholder="Enter full name" />
            </div>
            <div className={fieldCls}>
              <label className={labelCls}>Username</label>
              <input type="text" name="userName" value={form.userName} onChange={handleChange} className={inputCls} placeholder="Enter username" />
            </div>
            <div className={fieldCls}>
              <label className={labelCls}>Mobile Number</label>
              <input type="tel" name="mobileNumber" value={form.mobileNumber} onChange={handleChange} className={inputCls} placeholder="Enter mobile number" maxLength={10} />
            </div>
            <div className={fieldCls}>
              <label className={labelCls}>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className={inputCls} placeholder="Enter email" />
            </div>
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={onClose}
                className="flex-1 py-3 text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-all">
                Cancel
              </button>
              <button type="submit"
                disabled={!form.fullName || !form.userName || !form.mobileNumber || !form.email || submitting}
                className={`flex-1 py-3 font-semibold rounded-lg transition-all ${
                  !form.fullName || !form.userName || !form.mobileNumber || !form.email || submitting
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed opacity-60"
                    : "bg-amber-500 text-white hover:bg-amber-600"
                }`}>
                {submitting ? "Saving..." : "💾 Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ── Add User Modal ────────────────────────────────────────────────────────────
function AddUserModal({ onClose, onSuccess }) {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: "", userName: "", mobileNumber: "", email: "", password: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!form.fullName || !form.userName || !form.mobileNumber || !form.email || !form.password) {
      toast.warn("All fields required ❌");
      return;
    }
    try {
      setSubmitting(true);
      const res = await axiosInstance.post("/register", form);
      if (!res.data.success) { toast.error(res.data.message || "Registration failed ❌"); return; }
      toast.success("User Added Successfully ✅");
      onSuccess();
      onClose();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Server Error ❌");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldCls = "border border-gray-200 rounded-lg px-4 py-3 focus-within:border-blue-500 transition-all";
  const labelCls = "block text-xs text-gray-400 mb-1";
  const inputCls = "w-full outline-none text-gray-800 text-sm bg-transparent";

  const isDisabled = !form.fullName || !form.userName || !form.mobileNumber || !form.email || !form.password || submitting;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl">
          <div>
            <p className="text-xs text-blue-200 font-medium tracking-wide uppercase">User Management</p>
            <h2 className="text-lg font-bold text-white">Add New User</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white font-bold transition-colors text-sm">✕</button>
        </div>
        <div className="px-8 py-6">
          <form onSubmit={handleRegister} className="space-y-4">
            <div className={fieldCls}>
              <label className={labelCls}>Full Name</label>
              <input type="text" name="fullName" placeholder="Enter full name" value={form.fullName} onChange={handleChange} className={inputCls} />
            </div>
            <div className={fieldCls}>
              <label className={labelCls}>Username</label>
              <input type="text" name="userName" placeholder="Enter username" value={form.userName} onChange={handleChange} className={inputCls} />
            </div>
            <div className={fieldCls}>
              <label className={labelCls}>Mobile Number</label>
              <input type="tel" name="mobileNumber" placeholder="Enter mobile number" value={form.mobileNumber} onChange={handleChange} className={inputCls} maxLength={10} />
            </div>
            <div className={fieldCls}>
              <label className={labelCls}>Email</label>
              <input type="email" name="email" placeholder="Enter email" value={form.email} onChange={handleChange} className={inputCls} />
            </div>
            <div className={fieldCls}>
              <label className={labelCls}>Password</label>
              <input type="password" name="password" placeholder="Enter password" value={form.password} onChange={handleChange} className={inputCls} />
            </div>
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={onClose}
                className="flex-1 py-3 text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-all">
                Cancel
              </button>
              <button type="submit" disabled={isDisabled}
                className={`flex-1 py-3 font-semibold rounded-lg transition-all ${isDisabled ? "bg-gray-300 text-gray-600 cursor-not-allowed opacity-60" : "bg-green-600 text-white hover:bg-green-700"}`}>
                {submitting ? "Creating..." : "CREATE USER"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ── Main Users Component ──────────────────────────────────────────────────────
export default function Users() {
  const [users, setUsers]             = useState([]);
  const [loading, setLoading]         = useState(true);
  const [search, setSearch]           = useState("");
  const [selected, setSelected]       = useState(null);
  const [showAddUser, setShowAddUser] = useState(false);
  const [deletingId, setDeletingId]   = useState(null);
  const [editUser, setEditUser]       = useState(null);

  useEffect(() => { fetchUsers(); }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/getUsers");
      if (res.data.success) setUsers(res.data.users || []);
      else toast.error(res.data.message || "Users fetch failed ❌");
    } catch (err) {
      toast.error("Users fetch करताना error आला ❌");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (e, userId, fullName) => {
    e.stopPropagation();
    if (!window.confirm(`"${fullName}" ला delete करायचे आहे का?`)) return;
    try {
      setDeletingId(userId);
      const res = await axiosInstance.delete(`/deleteUser/${userId}`);
      if (res.data.success) {
        setUsers((prev) => prev.filter((u) => u._id !== userId));
        toast.success(`"${fullName}" Deleted Successfully ✅`);
      } else {
        toast.error(res.data.message || "Delete failed ❌");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Server Error ❌");
    } finally {
      setDeletingId(null);
    }
  };

  const filtered = users.filter((u) => {
    return (
      !search ||
      u.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      u.userName?.toLowerCase().includes(search.toLowerCase()) ||
      u.mobileNumber?.includes(search) ||
      u.email?.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
              All Users
              <span className="text-base font-bold text-blue-600 bg-blue-100 px-3 py-0.5 rounded-full border border-blue-200">{users.length}</span>
            </h1>
            <p className="text-base font-medium text-gray-500 mt-1">Janata Darbar — User Management</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={fetchUsers}
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 shadow-sm transition-all">
              🔄 Refresh
            </button>
            <button onClick={() => setShowAddUser(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 rounded-xl text-sm font-semibold text-white hover:bg-blue-700 shadow-sm transition-all">
              <span className="text-lg leading-none">+</span> Add User
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-4 mb-5">
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            <input type="text" placeholder="Search by name, username, mobile, email..." value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm font-medium border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50" />
          </div>
        </div>

        {/* Table */}
        <div style={{ background:"#fff", border:"1px solid #e0e0e0", borderRadius:4, overflow:"hidden", boxShadow:"0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 1px 3px rgba(0,0,0,.12)", fontFamily:"'Roboto','Segoe UI',sans-serif" }}>
          <style>{`
            .u-th { padding:0 16px; height:56px; font-weight:500; font-size:.875rem; color:rgba(0,0,0,.87); text-align:left; white-space:nowrap; background:#fff; border-bottom:1px solid rgba(224,224,224,1); }
            .u-tr { border-bottom:1px solid rgba(224,224,224,1); cursor:pointer; transition:background .15s; }
            .u-tr:last-child { border-bottom:none; }
            .u-tr:hover { background:rgba(0,0,0,.04) !important; }
            .u-td { padding:0 16px; height:52px; vertical-align:middle; font-size:.875rem; }
            .u-mono { display:inline-block; padding:2px 8px; background:#f5f5f5; border:1px solid #e0e0e0; border-radius:4px; font-family:monospace; font-size:.8125rem; color:rgba(0,0,0,.7); }
            .u-footer { display:flex; align-items:center; justify-content:space-between; padding:0 16px; height:52px; border-top:1px solid rgba(224,224,224,1); font-size:.875rem; color:rgba(0,0,0,.6); }
            .u-del-btn { display:inline-flex; align-items:center; gap:4px; padding:5px 10px; border-radius:6px; font-size:.78rem; font-weight:600; border:1px solid #fca5a5; background:#fff5f5; color:#dc2626; cursor:pointer; transition:all .15s; }
            .u-del-btn:hover:not(:disabled) { background:#fee2e2; border-color:#f87171; }
            .u-del-btn:disabled { opacity:.5; cursor:not-allowed; }
            .u-edit-btn { display:inline-flex; align-items:center; gap:4px; padding:5px 10px; border-radius:6px; font-size:.78rem; font-weight:600; border:1px solid #fcd34d; background:#fffbeb; color:#d97706; cursor:pointer; transition:all .15s; }
            .u-edit-btn:hover { background:#fef3c7; border-color:#fbbf24; }
            @keyframes uspin { to { transform:rotate(360deg) } }
          `}</style>

          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse" }}>
              <thead>
                <tr>
                  {["#","User","Username","Mobile","Email","Joined","Action"].map((h) => (
                    <th key={h} className="u-th">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} style={{ textAlign:"center", padding:"64px 0", color:"rgba(0,0,0,.38)" }}>
                      <div style={{ width:32, height:32, margin:"0 auto 12px", border:"3px solid #e0e0e0", borderTopColor:"#1976d2", borderRadius:"50%", animation:"uspin .8s linear infinite" }}/>
                      <div>Loading users…</div>
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} style={{ textAlign:"center", padding:"64px 0", color:"rgba(0,0,0,.38)" }}>
                      <div style={{ fontSize:40, marginBottom:8 }}>👤</div>
                      <div>No users found</div>
                    </td>
                  </tr>
                ) : (
                  filtered.map((user, index) => (
                    <tr key={user._id} className="u-tr"
                      style={{ background: index % 2 === 0 ? "#fff" : "#fafafa" }}
                      onClick={() => setSelected(user)}>
                      <td className="u-td" style={{ color:"rgba(0,0,0,.54)", width:60 }}>{index + 1}</td>
                      <td className="u-td" style={{ minWidth:180 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                          <Avatar name={user.fullName} index={index} />
                          <div>
                            <div style={{ fontSize:".875rem", fontWeight:500, color:"rgba(0,0,0,.87)", lineHeight:1.4 }}>{user.fullName}</div>
                            <div style={{ fontSize:".75rem", color:"rgba(0,0,0,.54)", marginTop:1 }}>ID: {user._id?.slice(-6)}</div>
                          </div>
                        </div>
                      </td>
                      <td className="u-td" style={{ width:140 }}><span className="u-mono">@{user.userName}</span></td>
                      <td className="u-td" style={{ width:140 }}>
                        <div style={{ fontSize:".875rem", color:"rgba(0,0,0,.7)" }}>{user.mobileNumber || "—"}</div>
                      </td>
                      <td className="u-td" style={{ minWidth:180 }}>
                        <div style={{ fontSize:".875rem", color:"rgba(0,0,0,.7)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", maxWidth:200 }}>{user.email || "—"}</div>
                      </td>
                      <td className="u-td" style={{ width:120, whiteSpace:"nowrap" }}>{formatDate(user.createdAt)}</td>
                      <td className="u-td" style={{ width:160 }} onClick={(e) => e.stopPropagation()}>
                        <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                          <button className="u-edit-btn" onClick={(e) => { e.stopPropagation(); setEditUser(user); }}>✏️ Edit</button>
                          <button className="u-del-btn" disabled={deletingId === user._id}
                            onClick={(e) => handleDelete(e, user._id, user.fullName)}>
                            {deletingId === user._id ? (
                              <><span style={{ width:11, height:11, border:"2px solid #fca5a5", borderTopColor:"#dc2626", borderRadius:"50%", display:"inline-block", animation:"uspin .7s linear infinite" }} />Deleting…</>
                            ) : <>🗑️ Delete</>}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {!loading && filtered.length > 0 && (
            <div className="u-footer">
              <span>Showing <strong style={{ color:"rgba(0,0,0,.87)" }}>{filtered.length}</strong> of <strong style={{ color:"rgba(0,0,0,.87)" }}>{users.length}</strong> users</span>
              <span style={{ color:"rgba(0,0,0,.38)", fontSize:".8125rem" }}>👆 Click any row to view full details</span>
            </div>
          )}
        </div>
      </div>

      {selected   && <DetailModal  user={selected}  onClose={() => setSelected(null)} />}
      {showAddUser && <AddUserModal onClose={() => setShowAddUser(false)} onSuccess={fetchUsers} />}
      {editUser   && <EditUserModal user={editUser}  onClose={() => setEditUser(null)} onSuccess={fetchUsers} />}
    </div>
  );
}