import { useState, useEffect, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";


// ── Role & Auth helpers ─────────────────────────────────────
const FULL_ACCESS_ROLES = ["Super Admin", "Guardian Minister", "Mayor", "Admin"];

const getAuthUser = () => {
  try { return JSON.parse(localStorage.getItem("authUser") || "{}"); }
  catch { return {}; }
};

// ── Auto Subject ID generator ──────────────────────────────
const getSubjectId = (meetingNumber, index) => {
  if (!meetingNumber) return `SUB-${String(index + 1).padStart(2, "0")}`;
  return `${meetingNumber}-SUB-${String(index + 1).padStart(2, "0")}`;
};


// ── Decision Badge ─────────────────────────────────────────
const DecisionBadge = ({ val }) => {
  const map = {
    "Approved":      { bg: "#e6f4ec", color: "#1a6640" },
    "Rejected":      { bg: "#fdecea", color: "#c0392b" },
    "On-Hold":       { bg: "#fff8e1", color: "#b07a00" },
    "Not Conducted": { bg: "#f3f3f3", color: "#6a6a6a" },
    "Postponed":     { bg: "#eee8ff", color: "#6a3ab0" },
  };
  const style = map[val] || { bg: "#f3f3f3", color: "#aaa" };
  return (
    <span style={{ display: "inline-block", fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: style.bg, color: style.color, whiteSpace: "nowrap" }}>
      {val || "-"}
    </span>
  );
};

export default function SpecificMeetingSubjects() {
  const { meetingId } = useParams();
  const location      = useLocation();
  const navigate      = useNavigate();

  // Meeting info from navigation state OR fetch
  const [meetingInfo, setMeetingInfo] = useState(location.state || null);

  // Selected meeting
  const [selectedMeetingId, setSelectedMeetingId] = useState(meetingId || null);

  // Subject search
  const [subjectSearch, setSubjectSearch] = useState("");

  // Subjects for selected meeting
  const [subjects, setSubjects]   = useState([]);
  const [loading, setLoading]     = useState(false);
  const [toast, setToast]         = useState(null);
  const [isMobile, setIsMobile]   = useState(window.innerWidth < 640);

  // Departments for tag
  const [departments, setDepartments] = useState([]);

  // Modal state
  const [showModal, setShowModal]         = useState(false);
  const [editSubjectIdx, setEditSubjectIdx] = useState(null);
  const emptySubjectForm = { subjectName: "", subjectType: "", decisionInMeeting: "", tagTo: [] };
  const [subjectForm, setSubjectForm] = useState(emptySubjectForm);

  // Delete confirm
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  // States nanter he add kara:
const authUser     = getAuthUser();
const userRole     = authUser?.role || "";
const isFullAccess = FULL_ACCESS_ROLES.includes(userRole);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Fetch departments
  useEffect(() => {
    const fetchDepts = async () => {
      try {
        const res = await axiosInstance.get("/getUsers");
        if (res.data.success) {
          const uniqueDepts = [...new Set(res.data.users.map(u => u.departmentName).filter(Boolean))];
          setDepartments(uniqueDepts);
        }
      } catch {}
    };
    fetchDepts();
  }, []);

  // Fetch subjects for selected meeting
  // const fetchSubjects = async (mId) => {
  //   if (!mId) return;
  //   try {
  //     setLoading(true);
  //     const res  = await fetch(`${BASE_URL}/getMeetings`);
  //     const data = await res.json();
  //     if (data.success) {
  //       const meeting = data.data.find(m => m._id === mId);
  //       if (meeting) {
  //         setMeetingInfo({ meetingNumber: meeting.meetingNumber, meetingType: meeting.meetingType, meetingDate: meeting.meetingDate, meetingTime: meeting.meetingTime });
  //         setSubjects(Array.isArray(meeting.subjects) ? meeting.subjects : []);
  //       }
  //     }
  //   } catch { showToast("Failed to load subjects", "error"); }
  //   finally { setLoading(false); }
  // };

  const fetchSubjects = async (mId) => {
  if (!mId) return;
  try {
    setLoading(true);
    const res  = await fetch(`${BASE_URL}/getMeetings`);
    const data = await res.json();
    if (data.success) {
      const authUser     = getAuthUser();
      const userRole     = authUser?.role           || "";
      const userDept     = authUser?.departmentName || "";
      const isFullAccess = FULL_ACCESS_ROLES.includes(userRole);

      const meeting = data.data.find(m => m._id === mId);
      if (meeting) {
        setMeetingInfo({
          meetingNumber: meeting.meetingNumber,
          meetingType:   meeting.meetingType,
          meetingDate:   meeting.meetingDate,
          meetingTime:   meeting.meetingTime,
        });

        const allSubjects = Array.isArray(meeting.subjects) ? meeting.subjects : [];

        if (isFullAccess) {
          // ── Super Admin / Mayor etc → सगळे subjects ──
          setSubjects(allSubjects);
        } else {
          // ── Department user → फक्त tagTo मध्ये त्यांचा dept असलेले ──
          const filtered = allSubjects.filter(sub =>
            Array.isArray(sub.tagTo) && sub.tagTo.includes(userDept)
          );
          setSubjects(filtered);
        }
      }
    }
  } catch { showToast("Failed to load subjects", "error"); }
  finally { setLoading(false); }
};

  useEffect(() => {
    if (selectedMeetingId) fetchSubjects(selectedMeetingId);
  }, [selectedMeetingId]);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const formatDate = (d) => d ? new Date(d).toLocaleDateString("en-IN") : "-";
  const formatTime = (time) => {
    if (!time) return "-";
    const [hourStr, minute] = time.split(":");
    let hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${ampm}`;
  };

  // ── Filtered subjects by subject ID search ─────────────────
  const filteredSubjects = subjects.filter(sub =>
    !subjectSearch ||
    (sub.subjectId || "").toLowerCase().includes(subjectSearch.toLowerCase())
  );

  // ── Open Add Modal ─────────────────────────────────────────
  const openAddModal = () => {
    setEditSubjectIdx(null);
    setSubjectForm(emptySubjectForm);
    setShowModal(true);
  };

  // ── Open Edit Modal ────────────────────────────────────────
  const openEditModal = (sub, idx) => {
    setEditSubjectIdx(idx);
    setSubjectForm({
      subjectName:        sub.subjectName || "",
      subjectType:        sub.subjectType || "",
      decisionInMeeting:  sub.decisionInMeeting || "",
      tagTo:              Array.isArray(sub.tagTo) ? sub.tagTo : [],
    });
    setShowModal(true);
  };

  // ── Save Subject (Add or Edit) ─────────────────────────────
  // const handleSaveSubject = async () => {
  //   if (!subjectForm.subjectName.trim()) { showToast("Subject Name is required", "error"); return; }

  //   try {
  //     setLoading(true);

  //     let updatedSubjects;
  //     if (editSubjectIdx === null) {
  //       const newSubject = {
  //         subjectId:         getSubjectId(meetingInfo?.meetingNumber, subjects.length),
  //         subjectName:       subjectForm.subjectName,
  //         subjectType:       subjectForm.subjectType,
  //         decisionInMeeting: subjectForm.decisionInMeeting,
  //         tagTo:             subjectForm.tagTo,
  //       };
  //       updatedSubjects = [...subjects, newSubject];
  //     } else {
  //       updatedSubjects = subjects.map((sub, i) =>
  //         i === editSubjectIdx
  //           ? { ...sub, subjectName: subjectForm.subjectName, subjectType: subjectForm.subjectType, decisionInMeeting: subjectForm.decisionInMeeting, tagTo: subjectForm.tagTo }
  //           : sub
  //       );
  //     }

  //     const fd = new FormData();
  //     fd.append("subjects", JSON.stringify(updatedSubjects));
  //     if (meetingInfo?.meetingNumber) fd.append("meetingNumber", meetingInfo.meetingNumber);
  //     if (meetingInfo?.meetingType)   fd.append("meetingType",   meetingInfo.meetingType);

  //     const res  = await fetch(`${BASE_URL}/updateMeeting/${selectedMeetingId}`, { method: "PUT", body: fd });
  //     const data = await res.json();
  //     if (data.success) {
  //       showToast(editSubjectIdx === null ? "Subject added!" : "Subject updated!");
  //       setShowModal(false);
  //       fetchSubjects(selectedMeetingId);
  //     } else {
  //       showToast(data.message || "Failed to save", "error");
  //     }
  //   } catch { showToast("Server error", "error"); }
  //   finally { setLoading(false); }
  // };

  // ── Save Subject (Add or Edit) ─────────────────────────────
const handleSaveSubject = async () => {
  if (!subjectForm.subjectName.trim()) { showToast("Subject Name is required", "error"); return; }

  try {
    setLoading(true);

    // ── EDIT: new dedicated updateSubject endpoint ─────────
    if (editSubjectIdx !== null) {
      const subjectId = subjects[editSubjectIdx]?.subjectId;
      if (!subjectId) { showToast("Subject ID missing", "error"); return; }

      const fd = new FormData();
      fd.append("subjectName",       subjectForm.subjectName);
      fd.append("subjectType",       subjectForm.subjectType       || "");
      fd.append("decisionInMeeting", subjectForm.decisionInMeeting || "");
      fd.append("tagTo",             JSON.stringify(subjectForm.tagTo));

      const res  = await fetch(`${BASE_URL}/updateMeeting/updateSubject/${subjectId}`, { method: "PUT", body: fd });
      const data = await res.json();

      if (data.success) {
        showToast("Subject updated!");
        setShowModal(false);
        fetchSubjects(selectedMeetingId);
      } else {
        showToast(data.message || "Failed to update", "error");
      }

    // ── ADD: existing full-subjects array logic (unchanged) ─
    } else {
      const newSubject = {
        subjectId:         getSubjectId(meetingInfo?.meetingNumber, subjects.length),
        subjectName:       subjectForm.subjectName,
        subjectType:       subjectForm.subjectType,
        decisionInMeeting: subjectForm.decisionInMeeting,
        tagTo:             subjectForm.tagTo,
      };
      const updatedSubjects = [...subjects, newSubject];

      const fd = new FormData();
      fd.append("subjects", JSON.stringify(updatedSubjects));
      if (meetingInfo?.meetingNumber) fd.append("meetingNumber", meetingInfo.meetingNumber);
      if (meetingInfo?.meetingType)   fd.append("meetingType",   meetingInfo.meetingType);

      const res  = await fetch(`${BASE_URL}/updateMeeting/${selectedMeetingId}`, { method: "PUT", body: fd });
      const data = await res.json();

      if (data.success) {
        showToast("Subject added!");
        setShowModal(false);
        fetchSubjects(selectedMeetingId);
      } else {
        showToast(data.message || "Failed to save", "error");
      }
    }

  } catch { showToast("Server error", "error"); }
  finally { setLoading(false); }
};

  // ── Delete Subject ─────────────────────────────────────────
  const handleDeleteSubject = async (idx) => {
    try {
      setLoading(true);
      const updatedSubjects = subjects.filter((_, i) => i !== idx);
      const fd = new FormData();
      fd.append("subjects", JSON.stringify(updatedSubjects));
      if (meetingInfo?.meetingNumber) fd.append("meetingNumber", meetingInfo.meetingNumber);
      if (meetingInfo?.meetingType)   fd.append("meetingType",   meetingInfo.meetingType);

      const res  = await fetch(`${BASE_URL}/updateMeeting/${selectedMeetingId}`, { method: "PUT", body: fd });
      const data = await res.json();
      if (data.success) { showToast("Subject deleted!"); setDeleteConfirm(null); fetchSubjects(selectedMeetingId); }
      else showToast(data.message || "Failed", "error");
    } catch { showToast("Server error", "error"); }
    finally { setLoading(false); }
  };

  const handleTagChange = (dept) => {
    setSubjectForm(f => ({
      ...f,
      tagTo: f.tagTo.includes(dept) ? f.tagTo.filter(d => d !== dept) : [...f.tagTo, dept],
    }));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap');
        .sms-wrap * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }

        .sms-title      { font-size: 22px; font-weight: 800; color: #1a4a2e; margin: 0 0 3px; letter-spacing: -0.3px; }
        .sms-subtitle   { font-size: 13px; font-weight: 500; color: #7a9a88; margin: 0 0 16px; }

        .sms-meeting-card {
          background: #fff; border: 1.5px solid #d6ede0; border-radius: 12px;
          padding: 14px 18px; margin-bottom: 18px;
          display: flex; flex-wrap: wrap; gap: 18px; align-items: center;
        }
        .sms-meeting-chip { display: flex; flex-direction: column; gap: 2px; }
        .sms-chip-label { font-size: 10.5px; font-weight: 800; color: #8aaa95; text-transform: uppercase; letter-spacing: 0.5px; }
        .sms-chip-value { font-size: 14px; font-weight: 700; color: #1a4a2e; }
        .sms-chip-badge {
          display: inline-block; background: #e6f4ec; color: #1a6640;
          font-weight: 700; font-size: 13px; padding: 3px 10px; border-radius: 6px;
        }

        .sms-search-input {
          font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 500;
          color: #2d3d35; border: 1.5px solid #c8e0cc; border-radius: 8px;
          padding: 9px 13px; outline: none; transition: border-color 0.2s; width: 260px;
        }
        .sms-search-input:focus { border-color: #1a7a4a; }

        .sms-table th {
          font-size: 12.5px; font-weight: 700; color: #3a6b50;
          padding: 10px 14px; text-align: left; background: #f0f7f2;
          border-bottom: 2px solid #d6ede0; white-space: nowrap;
        }
        .sms-table td {
          font-size: 13px; font-weight: 500; color: #2d3d35;
          padding: 11px 14px; border-bottom: 1px solid #eef4ee; vertical-align: middle;
        }
        .sms-table tbody tr:hover { background: #f4faf6; }
        .sms-table td:first-child { color: #8aaa95; font-weight: 600; font-size: 12.5px; }

        .sms-sub-id {
          display: inline-block; background: #eaf3fb; color: #1565a8;
          font-weight: 700; font-size: 11.5px; padding: 2px 8px;
          border-radius: 5px; letter-spacing: 0.2px; font-family: monospace;
        }

        .sms-type-pill {
          display: inline-block; background: #f3f0ff; color: #6a3ab0;
          font-size: 11.5px; font-weight: 600; padding: 2px 8px; border-radius: 20px;
        }

        .sms-dept-chips { display: flex; flex-wrap: wrap; gap: 4px; }
        .sms-dept-chip {
          background: #e6f4ec; color: #1a6640; font-size: 11px;
          font-weight: 700; padding: 2px 7px; border-radius: 5px;
        }

        .sms-btn-primary {
          font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 700;
          background: #1a7a4a; color: #fff; border: none; border-radius: 8px;
          padding: 10px 20px; cursor: pointer; transition: background 0.15s;
        }
        .sms-btn-primary:hover { background: #155e39; }
        .sms-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

        .sms-btn-cancel {
          font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 600;
          background: #eef2ee; color: #4a6a5a; border: none; border-radius: 8px;
          padding: 10px 20px; cursor: pointer;
        }
        .sms-btn-cancel:hover { background: #e0e8e2; }

        .sms-btn-edit {
          font-family: 'Nunito Sans', sans-serif; font-size: 12px; font-weight: 600;
          background: #e8f4fd; color: #1a6aaa; border: none; border-radius: 6px;
          padding: 5px 10px; cursor: pointer;
        }
        .sms-btn-edit:hover { background: #d0e8f8; }

        .sms-btn-delete {
          font-family: 'Nunito Sans', sans-serif; font-size: 12px; font-weight: 600;
          background: #fdecea; color: #c0392b; border: none; border-radius: 6px;
          padding: 5px 10px; cursor: pointer;
        }
        .sms-btn-delete:hover { background: #fad4d0; }

        .sms-input {
          font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 500;
          width: 100%; padding: 10px 12px; border-radius: 8px;
          border: 1.5px solid #c8e0cc; outline: none; color: #2d3d35; transition: border-color 0.2s;
        }
        .sms-input:focus { border-color: #1a7a4a; }
        .sms-input-readonly {
          font-family: 'Nunito Sans', sans-serif; font-size: 13px; font-weight: 700;
          width: 100%; padding: 10px 12px; border-radius: 8px;
          border: 1.5px solid #a8d5b5; outline: none;
          color: #1a4a2e; background: #f0f9f3; cursor: not-allowed;
          letter-spacing: 0.2px; font-family: monospace;
        }
        .sms-label {
          font-family: 'Nunito Sans', sans-serif; font-size: 12px; font-weight: 700;
          color: #5a7a6a; margin-bottom: 4px; display: block;
        }
        .sms-auto-badge {
          display: inline-block; background: #d4edda; color: #1a6640;
          font-size: 10px; font-weight: 800; padding: 2px 7px;
          border-radius: 20px; margin-left: 6px; text-transform: uppercase;
        }

        .sms-dept-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 6px;
          max-height: 180px; overflow-y: auto;
          border: 1.5px solid #c8e0cc; border-radius: 8px; padding: 10px; background: #f7fbf8;
        }
        @media (max-width: 480px) { .sms-dept-grid { grid-template-columns: 1fr; } }
        .sms-dept-item {
          display: flex; align-items: center; gap: 8px;
          background: #fff; padding: 8px 10px; border-radius: 7px;
          border: 1.5px solid #e0ede5; cursor: pointer;
          font-size: 13px; font-weight: 500; color: #2d3d35; transition: border-color 0.15s, background 0.15s;
        }
        .sms-dept-item:hover { background: #f0f7f2; border-color: #1a7a4a; }
        .sms-dept-item.checked { background: #e6f4ec; border-color: #1a7a4a; color: #1a4a2e; font-weight: 700; }
        .sms-dept-item input[type="checkbox"] { accent-color: #1a7a4a; width: 15px; height: 15px; flex-shrink: 0; }

        .sms-card {
          border: 1px solid #e0ede5; border-radius: 10px;
          padding: 13px; background: #f9fdf9; margin-bottom: 10px;
        }
        .sms-card-row {
          display: flex; justify-content: space-between; font-size: 13px;
          font-weight: 500; padding: 5px 0; border-bottom: 1px solid #eef4ee; color: #2d3d35;
        }
        .sms-card-row:last-child { border-bottom: none; }
        .sms-card-label { color: #5a7a6a; font-weight: 700; min-width: 110px; font-size: 12px; }

        .sms-empty {
          text-align: center; padding: 40px 20px; color: #8a9a90;
          font-size: 14px; font-weight: 500;
        }
        .sms-empty-icon { font-size: 36px; margin-bottom: 10px; }

        .sms-back-btn {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Nunito Sans', sans-serif; font-size: 13px; font-weight: 700;
          color: #3a6b50; background: #f0f7f2; border: 1.5px solid #c8e0cc;
          border-radius: 8px; padding: 6px 14px; cursor: pointer; margin-bottom: 14px;
          text-decoration: none; transition: background 0.15s;
        }
        .sms-back-btn:hover { background: #e4f2e8; border-color: #1a7a4a; }
      `}</style>

      <div className="sms-wrap" style={{ background: "#f0f4f0", minHeight: "100vh", padding: isMobile ? 12 : 24 }}>

        {/* Toast */}
        {toast && (
          <div style={{ position: "fixed", top: 16, right: 16, left: isMobile ? 16 : "auto", background: toast.type === "success" ? "#1a7a4a" : "#c0392b", color: "#fff", padding: "10px 18px", borderRadius: 8, fontWeight: 700, fontSize: 13.5, zIndex: 9999 }}>
            {toast.msg}
          </div>
        )}

        {/* Header */}
        <button className="sms-back-btn" onClick={() => navigate("/meetings")}>
          ← Back to Meetings
        </button>
        <h1 className="sms-title">Meeting Subjects</h1>

        {/* Search Subject ID + Add Button */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18, flexWrap: "wrap" }}>
          <input
            className="sms-search-input"
            placeholder="🔍 Search subject ID..."
            value={subjectSearch}
            onChange={e => setSubjectSearch(e.target.value)}
          />
          {selectedMeetingId && isFullAccess && (
            <button className="sms-btn-primary" onClick={openAddModal} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              + Add Subject
            </button>
          )}
        </div>

        {/* Meeting Info Card */}
        {meetingInfo && selectedMeetingId && (
          <div className="sms-meeting-card">
            <div className="sms-meeting-chip">
              <span className="sms-chip-label">Meeting No</span>
              <span className="sms-chip-badge">{meetingInfo.meetingNumber}</span>
            </div>
            <div className="sms-meeting-chip">
              <span className="sms-chip-label">Type</span>
              <span className="sms-chip-value">{meetingInfo.meetingType || "-"}</span>
            </div>
            <div className="sms-meeting-chip">
              <span className="sms-chip-label">Date</span>
              <span className="sms-chip-value">{formatDate(meetingInfo.meetingDate)}</span>
            </div>
            <div className="sms-meeting-chip">
              <span className="sms-chip-label">Time</span>
              <span className="sms-chip-value">{formatTime(meetingInfo.meetingTime)}</span>
            </div>
            <div className="sms-meeting-chip">
              <span className="sms-chip-label">Subjects</span>
              <span className="sms-chip-value" style={{ color: "#1a7a4a", fontWeight: 800 }}>{filteredSubjects.length}</span>
            </div>
          </div>
        )}

        {/* Subjects List */}
        {!selectedMeetingId ? (
          <div style={{ background: "#fff", borderRadius: 12, padding: 20 }}>
            <div className="sms-empty">
              <div className="sms-empty-icon">🔍</div>
              <div>कोणतीही meeting उपलब्ध नाही</div>
              <div style={{ fontSize: 12, color: "#aaa", marginTop: 4 }}>Meetings page वरून meeting number वर click करा</div>
            </div>
          </div>
        ) : (
          <div style={{ background: "#fff", borderRadius: 12, padding: isMobile ? 12 : 20, overflowX: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1a4a2e", margin: 0 }}>
                Subjects ({filteredSubjects.length})
              </h3>
            </div>

            {loading ? (
              <div style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>Loading...</div>
            ) : filteredSubjects.length === 0 ? (
              <div className="sms-empty">
                <div className="sms-empty-icon">📋</div>
                <div>{subjectSearch ? "कोणताही subject सापडला नाही" : "कोणतेही subjects नाहीत"}</div>
                <div style={{ fontSize: 12, color: "#aaa", marginTop: 4 }}>
                  {subjectSearch ? "वेगळा Subject ID search करा" : "+ Add Subject button वापरून subjects add करा"}
                </div>
              </div>
            ) : isMobile ? (
              <div>
                {filteredSubjects.map((sub, i) => {
                  const realIdx = subjects.indexOf(sub);
                  return (
                    <div className="sms-card" key={i}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                        <span className="sms-sub-id">{sub.subjectId || getSubjectId(meetingInfo?.meetingNumber, realIdx)}</span>
                        <div style={{ display: "flex", gap: 5 }}>
                          <button className="sms-btn-edit" onClick={() => openEditModal(sub, realIdx)}>✏️</button>
                          <button className="sms-btn-delete" onClick={() => setDeleteConfirm(realIdx)}>🗑️</button>
                        </div>
                      </div>
                      <div className="sms-card-row"><span className="sms-card-label">Subject Name</span><span style={{ fontWeight: 600 }}>{sub.subjectName || "-"}</span></div>
                      <div className="sms-card-row"><span className="sms-card-label">Subject Type</span><span className="sms-type-pill">{sub.subjectType || "-"}</span></div>
                      <div className="sms-card-row"><span className="sms-card-label">Decision</span><DecisionBadge val={sub.decisionInMeeting} /></div>
                      {Array.isArray(sub.tagTo) && sub.tagTo.length > 0 && (
                        <div className="sms-card-row">
                          <span className="sms-card-label">Departments</span>
                          <div className="sms-dept-chips">{sub.tagTo.map((d, di) => <span key={di} className="sms-dept-chip">{d}</span>)}</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <table className="sms-table" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  {/* <tr>
                    {["#", "Subject ID", "Subject Name", "Subject Type", "Decision", "Departments", "Actions"].map(h => <th key={h}>{h}</th>)}
                  </tr> */}
                <tr>
                 {["#", "Subject ID", "Subject Name", "Subject Type", "Decision", "Departments"].map(h => <th key={h}>{h}</th>)}
                 {isFullAccess && <th>Actions</th>}
                </tr>


                </thead>
                <tbody>
                  {filteredSubjects.map((sub, i) => {
                    const realIdx = subjects.indexOf(sub);
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td><span className="sms-sub-id">{sub.subjectId || getSubjectId(meetingInfo?.meetingNumber, realIdx)}</span></td>
                        <td style={{ maxWidth: 260, fontWeight: 600 }}>{sub.subjectName || "-"}</td>
                        <td><span className="sms-type-pill">{sub.subjectType || "-"}</span></td>
                        <td><DecisionBadge val={sub.decisionInMeeting} /></td>
                        <td style={{ maxWidth: 180 }}>
                          {Array.isArray(sub.tagTo) && sub.tagTo.length > 0
                            ? <div className="sms-dept-chips">{sub.tagTo.map((d, di) => <span key={di} className="sms-dept-chip">{d}</span>)}</div>
                            : <span style={{ color: "#ccc" }}>—</span>
                          }
                        </td>
                        {isFullAccess && 
                        <td>
                          <div style={{ display: "flex", gap: 6 }}>
                            <button className="sms-btn-edit" onClick={() => openEditModal(sub, realIdx)}>✏️ Edit</button>
                            <button className="sms-btn-delete" onClick={() => setDeleteConfirm(realIdx)}>🗑️ Delete</button>
                          </div>
                        </td>
                  }
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* ── Add / Edit Subject Modal ── */}
        {showModal && (
          <div style={modalOverlay}>
            <div style={{ background: "#fff", borderRadius: 12, padding: isMobile ? 16 : 25, width: isMobile ? "95%" : "65%", maxWidth: 720, maxHeight: "90vh", overflowY: "auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: "#1a4a2e", margin: 0 }}>
                  {editSubjectIdx === null ? "Add Subject" : "Edit Subject"}
                </h3>
                <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "#8a9a90" }}>✕</button>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>

                {/* Subject ID — Auto */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label className="sms-label">
                    Subject ID
                    <span className="sms-auto-badge">Auto</span>
                  </label>
                  <input
                    className="sms-input-readonly"
                    value={
                      editSubjectIdx !== null
                        ? (subjects[editSubjectIdx]?.subjectId || getSubjectId(meetingInfo?.meetingNumber, editSubjectIdx))
                        : getSubjectId(meetingInfo?.meetingNumber, subjects.length)
                    }
                    readOnly
                  />
                </div>

                {/* Subject Type */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label className="sms-label">Subject Type</label>
                  <select className="sms-input" value={subjectForm.subjectType} onChange={e => setSubjectForm(f => ({ ...f, subjectType: e.target.value }))}>
                    <option value="">Select Type</option>
                    <option>General</option>
                    <option>Administrative and Financial Approval</option>
                    <option>Contract Approval</option>
                  </select>
                </div>

                {/* Subject Name — full width */}
                <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
                  <label className="sms-label">Subject Name <span style={{ color: "#c0392b" }}>*</span></label>
                  <input
                    className="sms-input"
                    placeholder="Subject name टाका..."
                    value={subjectForm.subjectName}
                    onChange={e => setSubjectForm(f => ({ ...f, subjectName: e.target.value }))}
                  />
                </div>

                {/* Decision In Meeting */}
                <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
                  <label className="sms-label">Decision In Meeting</label>
                  <select className="sms-input" value={subjectForm.decisionInMeeting} onChange={e => setSubjectForm(f => ({ ...f, decisionInMeeting: e.target.value, tagTo: e.target.value !== "Approved" ? [] : f.tagTo }))}>
                    <option value="">Select Decision</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                    <option value="On-Hold">On-Hold</option>
                    <option value="Not Conducted">Not Conducted</option>
                    <option value="Postponed">Postponed</option>
                  </select>
                </div>

                {/* Department Tag — only when Approved */}
                {subjectForm.decisionInMeeting === "Approved" && (
                  <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
                    <label className="sms-label" style={{ marginBottom: 8 }}>Assign to Department</label>
                    <div className="sms-dept-grid">
                      {departments.length === 0 ? (
                        <div style={{ gridColumn: "span 2", textAlign: "center", color: "#8a9a90", fontSize: 13, padding: 10 }}>Loading departments...</div>
                      ) : (
                        departments.map((dept, i) => (
                          <label key={i} className={`sms-dept-item ${subjectForm.tagTo.includes(dept) ? "checked" : ""}`}>
                            <input type="checkbox" checked={subjectForm.tagTo.includes(dept)} onChange={() => handleTagChange(dept)} />
                            <span>{dept}</span>
                          </label>
                        ))
                      )}
                    </div>
                    {subjectForm.tagTo.length > 0 && (
                      <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 5 }}>
                        {subjectForm.tagTo.map((d, di) => (
                          <span key={di} style={{ background: "#e6f4ec", color: "#1a6640", fontSize: 11.5, fontWeight: 700, padding: "3px 9px", borderRadius: 20, border: "1px solid #a8d5b5" }}>
                            ✅ {d}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

              </div>

              <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
                <button className="sms-btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="sms-btn-primary" onClick={handleSaveSubject} disabled={loading}>
                  {loading ? "Saving..." : editSubjectIdx === null ? "Add Subject" : "Update Subject"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirm */}
        {deleteConfirm !== null && (
          <div style={modalOverlay}>
            <div style={{ background: "#fff", padding: 28, borderRadius: 12, maxWidth: 380, width: isMobile ? "90%" : "100%", textAlign: "center" }}>
              <p style={{ fontSize: 17, fontWeight: 700, color: "#1a4a2e", marginBottom: 6 }}>Delete Subject?</p>
              <p style={{ fontSize: 13.5, color: "#8a9a90", marginBottom: 20, fontWeight: 500 }}>He subject permanently delete होईल.</p>
              <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                <button className="sms-btn-cancel" onClick={() => setDeleteConfirm(null)}>Cancel</button>
                <button className="sms-btn-primary" style={{ background: "#c0392b" }} onClick={() => handleDeleteSubject(deleteConfirm)} disabled={loading}>
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

const modalOverlay = { position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000, padding: 16 };