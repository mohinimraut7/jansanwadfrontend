import React, { useState, useEffect } from "react";
import axiosInstance from "../services/axiosInstance";
import { toast } from "react-toastify";

// ── Color Theme (Users page शी same) ──────────────────────────────────────────
const G = {
  primary:      "#1a5c45",
  primaryHov:   "#154d3a",
  primaryLight: "#e8f5f0",
  primaryBorder:"#b2d8cc",
  primaryMid:   "#2d7a5f",
};

// ── Corporator (नगरसेवक) helpers ──────────────────────────────────────────────
// Role / designation नेहमी small मध्ये "corporator" save होतात
const CORPORATOR = "corporator";
const isCorporator = (r) => ["corporator", "ward councillor"].includes(String(r || "").trim().toLowerCase());
const normDesignation = (d) => String(d || "").trim().toLowerCase() === CORPORATOR ? CORPORATOR : (d || "");

// Designation (backend PREDEFINED_DESIGNATIONS शी same) — value small, label display साठी
const DESIGNATIONS = [
  { value: "corporator",                  label: "Corporator" },
  { value: "Mayor",                       label: "Mayor" },
  { value: "Deputy Mayor",                label: "Deputy Mayor" },
  { value: "Standing Committee Chairman", label: "Standing Committee Chairman" },
  { value: "Leader of House",             label: "Leader of House" },
  { value: "Leader of Opposition",        label: "Leader of Opposition" },
];
const designationLabel = (d) => {
  const v = normDesignation(d) || CORPORATOR;
  return DESIGNATIONS.find((x) => x.value === v)?.label || v;
};

// ── Shared field styles (Users page शी same) ──────────────────────────────────
const fieldCls = { border:"1px solid #d1e8df", borderRadius:8, padding:"10px 14px", transition:"border-color .2s", backgroundColor:"#fff" };
const labelSt  = { display:"block", fontSize:".75rem", color:"#5a8a74", marginBottom:3, fontWeight:600, letterSpacing:".02em" };
const inputSt  = { width:"100%", outline:"none", fontSize:".875rem", color:"#1a2e25", background:"transparent", border:"none", fontFamily:"inherit" };

// Yes / No toggle (General Body / Standing Committee)
function YesNo({ label, value, onChange }) {
  const btn = (v, txt) => (
    <button type="button" onClick={() => onChange(v)} style={{
      flex:1, padding:"7px 0", borderRadius:6, fontSize:".8rem", fontWeight:600, cursor:"pointer",
      border:`1px solid ${value === v ? G.primary : G.primaryBorder}`,
      background: value === v ? G.primary : "#fff", color: value === v ? "#fff" : G.primary,
    }}>{txt}</button>
  );
  return (
    <div style={{ flex:1, minWidth:150 }}>
      <label style={labelSt}>{label}</label>
      <div style={{ display:"flex", gap:6 }}>{btn(true, "Yes")}{btn(false, "No")}</div>
    </div>
  );
}

const pill = (yes) => (
  <span style={{ display:"inline-block", minWidth:44, textAlign:"center", padding:"3px 10px", borderRadius:20, fontSize:".78rem", fontWeight:700,
    background: yes ? "#e6f6ec" : "#fdeeee", color: yes ? "#1f7a45" : "#c0392b", border:`1px solid ${yes ? "#b7e2c6" : "#f3c4bd"}` }}>
    {yes ? "Yes" : "No"}
  </span>
);

// ── Add / Edit Corporator Modal ───────────────────────────────────────────────
function CorporatorModal({ corporator, onClose, onSuccess }) {
  const isEdit = !!corporator;
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    wardNo:                    corporator?.wardNo        || "",
    fullName:                  corporator?.fullName      || "",
    mobileNumber:              corporator?.mobileNumber  || "",
    designation:               normDesignation(corporator?.designation) || CORPORATOR,
    isGeneralBodyMember:       corporator ? corporator.isGeneralBodyMember !== false : true,
    isStandingCommitteeMember: corporator ? !!corporator.isStandingCommitteeMember : false,
    password:                  "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const mobileOk = /^\d{10}$/.test(form.mobileNumber.trim());
  const canSave  = form.wardNo.trim() && form.fullName.trim() && mobileOk && (isEdit || form.password) && !submitting;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSave) { toast.warn("सर्व fields भरा ❌"); return; }
    const mobile = form.mobileNumber.trim();
    const common = {
      role:                      CORPORATOR,
      wardNo:                    form.wardNo.trim(),
      fullName:                  form.fullName.trim(),
      mobileNumber:              mobile,
      designation:               form.designation,
      isGeneralBodyMember:       form.isGeneralBodyMember,
      isStandingCommitteeMember: form.isStandingCommitteeMember,
    };
    try {
      setSubmitting(true);
      let res;
      if (isEdit) {
        // username = जुना mobile असेल तर नवीन mobile प्रमाणे username पण बदला (login साठी)
        const payload = { ...common };
        if (!corporator.userName || corporator.userName === corporator.mobileNumber) payload.userName = mobile;
        res = await axiosInstance.patch(`/users/${corporator._id}`, payload);
      } else {
        // Login: Username = mobile number + password, किंवा mobile OTP
        res = await axiosInstance.post("/register", { ...common, userName: mobile, password: form.password });
      }
      if (!res.data.success) { toast.error(res.data.message || "Save failed ❌"); return; }
      toast.success(isEdit ? "Corporator Updated Successfully ✅" : "Corporator Added Successfully ✅");
      onSuccess(); onClose();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Server Error ❌");
    } finally { setSubmitting(false); }
  };

  const box = { ...inputSt };
  return (
    <div style={{ position:"fixed", inset:0, zIndex:50, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(0,0,0,.45)", backdropFilter:"blur(4px)", padding:16 }}>
      <div style={{ background:"#fff", borderRadius:16, boxShadow:"0 20px 60px rgba(0,0,0,.2)", width:"100%", maxWidth:460, maxHeight:"90vh", overflowY:"auto" }}>
        <div style={{ background:`linear-gradient(135deg, ${G.primary} 0%, ${G.primaryMid} 100%)`, borderRadius:"16px 16px 0 0", padding:"18px 24px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div>
            <p style={{ fontSize:".7rem", color:"rgba(255,255,255,.7)", fontWeight:600, letterSpacing:".08em", textTransform:"uppercase", marginBottom:2 }}>Corporators / नगरसेवक</p>
            <h2 style={{ fontSize:"1.1rem", fontWeight:700, color:"#fff", margin:0 }}>{isEdit ? `Edit — ${corporator.fullName}` : "Add Corporator"}</h2>
          </div>
          <button onClick={onClose} style={{ width:30, height:30, borderRadius:"50%", background:"rgba(255,255,255,.2)", border:"none", color:"#fff", fontWeight:700, cursor:"pointer", fontSize:".875rem", display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>
        </div>
        <div style={{ padding:"24px 28px" }}>
          <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:12 }}>
            <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
              <div style={{ ...fieldCls, flex:"0 0 130px" }}>
                <label style={labelSt}>Ward seat no.</label>
                <input name="wardNo" value={form.wardNo} onChange={handleChange} placeholder="e.g. 1A" style={box} />
              </div>
              <div style={{ ...fieldCls, flex:1, minWidth:180 }}>
                <label style={labelSt}>Name of corporator</label>
                <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Enter full name" style={box} />
              </div>
            </div>
            <div style={fieldCls}>
              <label style={labelSt}>Mobile number</label>
              <input type="tel" name="mobileNumber" value={form.mobileNumber} onChange={handleChange} placeholder="10 digit mobile number" maxLength={10} style={box} />
            </div>
            <div style={fieldCls}>
              <label style={labelSt}>Designation</label>
              <select name="designation" value={form.designation} onChange={handleChange} style={{ ...box, cursor:"pointer" }}>
                {DESIGNATIONS.map((d) => <option key={d.value} value={d.value}>{d.label}</option>)}
              </select>
            </div>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <YesNo label="General Body" value={form.isGeneralBodyMember}
                onChange={(v) => setForm({ ...form, isGeneralBodyMember: v })} />
              <YesNo label="Standing Committee" value={form.isStandingCommitteeMember}
                onChange={(v) => setForm({ ...form, isStandingCommitteeMember: v })} />
            </div>
            {!isEdit && (
              <div style={fieldCls}>
                <label style={labelSt}>Password</label>
                <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter password" style={box} />
              </div>
            )}
            {/* <div style={{ fontSize:".75rem", color:"#5a8a74", background:G.primaryLight, borderRadius:8, padding:"8px 12px" }}>
              Login: Username = mobile number{isEdit ? "" : " + वरील password"}, किंवा mobile number वर OTP.
            </div> */}
            <div style={{ display:"flex", gap:10, paddingTop:4 }}>
              <button type="button" onClick={onClose} style={{ flex:1, padding:"11px 0", borderRadius:8, border:`1px solid ${G.primaryBorder}`, background:"#fff", color:G.primary, fontWeight:600, fontSize:".875rem", cursor:"pointer" }}>
                Cancel
              </button>
              <button type="submit" disabled={!canSave} style={{ flex:1, padding:"11px 0", borderRadius:8, border:"none", background: canSave ? G.primary : "#ccc", color:"#fff", fontWeight:600, fontSize:".875rem", cursor: canSave ? "pointer" : "not-allowed", opacity: canSave ? 1 : .65 }}>
                {submitting ? "Saving..." : isEdit ? "💾 Save Changes" : "+ Add Corporator"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ── Main Corporators Page ─────────────────────────────────────────────────────
export default function Corporators() {
  const [users, setUsers]           = useState([]);
  const [loading, setLoading]       = useState(true);
  const [search, setSearch]         = useState("");
  const [showAdd, setShowAdd]       = useState(false);
  const [editItem, setEditItem]     = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => { fetchCorporators(); }, []);

  const fetchCorporators = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/getUsers");
      if (res.data.success) setUsers((res.data.users || []).filter((u) => isCorporator(u.role)));
      else toast.error(res.data.message || "Corporators fetch failed ❌");
    } catch {
      toast.error("Corporators fetch करताना error आला ❌");
    } finally { setLoading(false); }
  };

  const handleDelete = async (u) => {
    if (!window.confirm(`"${u.fullName}" ला delete करायचे आहे का?`)) return;
    try {
      setDeletingId(u._id);
      const res = await axiosInstance.delete(`/deleteUser/${u._id}`);
      if (res.data.success) {
        setUsers((prev) => prev.filter((x) => x._id !== u._id));
        toast.success(`"${u.fullName}" Deleted Successfully ✅`);
      } else { toast.error(res.data.message || "Delete failed ❌"); }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Server Error ❌");
    } finally { setDeletingId(null); }
  };

  const q = search.trim().toLowerCase();
  const list = users
    .filter((u) => !q
      || u.fullName?.toLowerCase().includes(q)
      || u.mobileNumber?.includes(q)
      || String(u.wardNo || "").toLowerCase().includes(q)
      || designationLabel(u.designation).toLowerCase().includes(q))
    .sort((a, b) => String(a.wardNo || "").localeCompare(String(b.wardNo || ""), "en", { numeric: true }));

  const gbCount = users.filter((u) => u.isGeneralBodyMember !== false).length;
  const scCount = users.filter((u) => u.isStandingCommitteeMember).length;

  return (
    <div style={{ minHeight:"100vh", background:"#f0f7f4", padding:24 }}>
      <style>{`
        @keyframes cspin { to { transform:rotate(360deg) } }
        .c-th { padding:0 16px; height:50px; font-weight:600; font-size:.8rem; color:${G.primary}; text-align:left; white-space:nowrap; background:${G.primaryLight}; border-bottom:1px solid ${G.primaryBorder}; letter-spacing:.04em; text-transform:uppercase; }
        .c-tr { border-bottom:1px solid #e8f2ee; transition:background .12s; }
        .c-tr:last-child { border-bottom:none; }
        .c-tr:hover { background:#e8f5f0 !important; }
        .c-td { padding:0 16px; height:54px; vertical-align:middle; font-size:.875rem; }
        .c-mono { display:inline-block; padding:2px 8px; background:${G.primaryLight}; border:1px solid ${G.primaryBorder}; border-radius:4px; font-family:monospace; font-size:.8rem; color:${G.primary}; font-weight:600; }
        .c-footer { display:flex; align-items:center; justify-content:space-between; padding:0 16px; height:46px; border-top:1px solid ${G.primaryBorder}; background:${G.primaryLight}; font-size:.8125rem; color:${G.primaryMid}; }
        .c-edit-btn { display:inline-flex; align-items:center; gap:4px; padding:5px 10px; border-radius:6px; font-size:.78rem; font-weight:600; border:1px solid #6ee7b7; background:#f0fdf4; color:#065f46; cursor:pointer; transition:all .15s; }
        .c-edit-btn:hover { background:#d1fae5 !important; border-color:#6ee7b7 !important; }
        .c-del-btn { display:inline-flex; align-items:center; gap:4px; padding:5px 10px; border-radius:6px; font-size:.78rem; font-weight:600; border:1px solid #fca5a5; background:#fff5f5; color:#dc2626; cursor:pointer; transition:all .15s; }
        .c-del-btn:hover:not(:disabled) { background:#fee2e2 !important; border-color:#f87171 !important; }
        .c-del-btn:disabled { opacity:.5; cursor:not-allowed; }
        .c-ref-btn:hover { background:#e8f5f0 !important; color:#1a5c45 !important; border-color:#b2d8cc !important; }
        .c-add-btn:hover { background:#154d3a !important; }
        .c-search-input:focus { border-color:#1a5c45 !important; box-shadow:0 0 0 3px rgba(26,92,69,.12) !important; }
      `}</style>

      <div style={{ maxWidth:1280, margin:"0 auto" }}>

        {/* ── Page Header ── */}
        <div style={{ marginBottom:24 }}>
          <h1 style={{ fontSize:"1.6rem", fontWeight:800, color:"#1a2e25", margin:0, display:"flex", alignItems:"center", gap:12 }}>
            Corporators
            <span style={{ fontSize:".8125rem", fontWeight:700, color:G.primary, background:G.primaryLight, border:`1px solid ${G.primaryBorder}`, padding:"2px 10px", borderRadius:20 }}>
              {users.length}
            </span>
          </h1>
          <p style={{ color:"#5a8a74", fontSize:".9rem", fontWeight:500, marginTop:4 }}>
            General Body <strong style={{ color:G.primary }}>{gbCount}</strong> · Standing Committee <strong style={{ color:G.primary }}>{scCount}</strong>
          </p>
        </div>

        {/* ── Action Bar ── */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, marginBottom:16, flexWrap:"wrap" }}>
          <div style={{ position:"relative", flex:"1 1 300px", maxWidth:480 }}>
            <span style={{ position:"absolute", left:12, top:"50%", transform:"translateY(-50%)", color:"#5a8a74", fontSize:".9rem" }}>🔍</span>
            <input type="text" placeholder="Search by name, ward, mobile, designation..." value={search}
              onChange={(e) => setSearch(e.target.value)} className="c-search-input"
              style={{ width:"100%", paddingLeft:36, paddingRight:14, paddingTop:9, paddingBottom:9, fontSize:".875rem", border:`1px solid ${G.primaryBorder}`, borderRadius:8, outline:"none", background:"#fff", color:"#1a2e25", transition:"border-color .2s, box-shadow .2s", boxSizing:"border-box" }} />
          </div>
          <div style={{ display:"flex", gap:10, flexShrink:0 }}>
            <button onClick={fetchCorporators} className="c-ref-btn"
              style={{ display:"flex", alignItems:"center", gap:6, padding:"9px 16px", border:`1px solid ${G.primaryBorder}`, borderRadius:8, background:"#fff", color:"#3a6b57", fontWeight:600, fontSize:".8125rem", cursor:"pointer", transition:"all .15s" }}>
              🔄 Refresh
            </button>
            <button onClick={() => setShowAdd(true)} className="c-add-btn"
              style={{ display:"flex", alignItems:"center", gap:6, padding:"9px 18px", border:"none", borderRadius:8, background:G.primary, color:"#fff", fontWeight:600, fontSize:".8125rem", cursor:"pointer", transition:"background .15s" }}>
              + Add Corporator
            </button>
          </div>
        </div>

        {/* ── Table Card ── */}
        <div style={{ background:"#fff", border:`1px solid ${G.primaryBorder}`, borderRadius:10, overflow:"hidden", boxShadow:"0 2px 8px rgba(26,92,69,.08)" }}>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse" }}>
              <thead>
                <tr>
                  {["Sr. No.","Ward seat no.","Names of corporators","Mobile number","Designation","General Body","Standing Committee","Action"].map((h) => (
                    <th key={h} className="c-th">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={8} style={{ textAlign:"center", padding:"64px 0", color:"#5a8a74" }}>
                    <div style={{ width:32, height:32, margin:"0 auto 12px", border:`3px solid ${G.primaryBorder}`, borderTopColor:G.primary, borderRadius:"50%", animation:"cspin .8s linear infinite" }} />
                    <div style={{ fontWeight:500 }}>Loading corporators…</div>
                  </td></tr>
                ) : list.length === 0 ? (
                  <tr><td colSpan={8} style={{ textAlign:"center", padding:"64px 0", color:"#5a8a74" }}>
                    <div style={{ fontSize:40, marginBottom:8 }}>🏛</div>
                    <div style={{ fontWeight:500 }}>No corporators found — "+ Add Corporator" वर click करा</div>
                  </td></tr>
                ) : list.map((u, i) => (
                  <tr key={u._id} className="c-tr" style={{ background: i % 2 === 0 ? "#fff" : "#fafcfb" }}>
                    <td className="c-td" style={{ width:70, fontWeight:600, color:"#5a8a74" }}>{i + 1}</td>
                    <td className="c-td" style={{ width:120 }}><span className="c-mono">{u.wardNo || "—"}</span></td>
                    <td className="c-td" style={{ minWidth:200, fontWeight:600, color:"#1a2e25" }}>{u.fullName || "—"}</td>
                    <td className="c-td" style={{ width:140, color:"#2d5a45" }}>{u.mobileNumber || "—"}</td>
                    <td className="c-td" style={{ minWidth:140, color:"#2d5a45" }}>{designationLabel(u.designation)}</td>
                    <td className="c-td" style={{ width:120 }}>{pill(u.isGeneralBodyMember !== false)}</td>
                    <td className="c-td" style={{ width:150 }}>{pill(!!u.isStandingCommitteeMember)}</td>
                    <td className="c-td" style={{ width:170 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                        <button className="c-edit-btn" onClick={() => setEditItem(u)}>✏️ Edit</button>
                        <button className="c-del-btn" disabled={deletingId === u._id} onClick={() => handleDelete(u)}>
                          {deletingId === u._id ? (
                            <><span style={{ width:11, height:11, border:"2px solid #fca5a5", borderTopColor:"#dc2626", borderRadius:"50%", display:"inline-block", animation:"cspin .7s linear infinite" }} />Deleting…</>
                          ) : <>🗑️ Delete</>}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {!loading && list.length > 0 && (
            <div className="c-footer">
              <span>Showing <strong style={{ color:G.primary }}>{list.length}</strong> of <strong style={{ color:G.primary }}>{users.length}</strong> corporators</span>
            </div>
          )}
        </div>
      </div>

      {showAdd  && <CorporatorModal onClose={() => setShowAdd(false)} onSuccess={fetchCorporators} />}
      {editItem && <CorporatorModal corporator={editItem} onClose={() => setEditItem(null)} onSuccess={fetchCorporators} />}
    </div>
  );
}
