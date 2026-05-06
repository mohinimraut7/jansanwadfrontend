


// import { useState, useEffect, useRef } from "react";
// import axiosInstance from "../services/axiosInstance";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// // ─────────────────────────────────────────────────────────────
// // ✅ NEW HELPER — meeting time reached check
// // meetingDate: "2026-05-08"  meetingTime: "14:20" (24h, from buildTimeString)
// // Returns true if today >= meetingDate AND now >= meetingTime
// // ─────────────────────────────────────────────────────────────
// function isMeetingTimeReached(meetingDate, meetingHour, meetingMinute, meetingAmpm) {
//   if (!meetingDate || !meetingHour || !meetingMinute) return false;

//   const now = new Date();

//   // Build meeting datetime
//   const [year, month, day] = meetingDate.split("-").map(Number);
//   let hour = parseInt(meetingHour, 10);
//   if (meetingAmpm === "PM" && hour !== 12) hour += 12;
//   if (meetingAmpm === "AM" && hour === 12) hour = 0;
//   const meetingDT = new Date(year, month - 1, day, hour, parseInt(meetingMinute, 10), 0);

//   return now >= meetingDT;
// }

// // ─────────────────────────────────────────────────────────────
// // MeetingRecorder (inline — no separate file needed)
// // ─────────────────────────────────────────────────────────────
// function MeetingRecorder({ onDecisionExtracted, onTranscriptUpdate, onRecordingReady }) {
//   const [sessionActive, setSessionActive]       = useState(false);
//   const [isSpeaking, setIsSpeaking]             = useState(false);
//   const [recordingEnabled, setRecordingEnabled] = useState(false);
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
//               setStatus("👂 Waiting for someone to speak...");
//             }
//           }, SILENCE_DELAY);
//         }
//       }
//     };
//     loop();
//   };

//   const startSession = async () => {
//     setMicError(null);
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       micStreamRef.current = stream;
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
//           onRecordingReady?.(url);
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
//     micStreamRef.current?.getTracks().forEach(t => t.stop());
//     if (mediaRecorderRef.current?.state === "recording") mediaRecorderRef.current.stop();
//     speakingRef.current      = false;
//     sessionActiveRef.current = false;
//     setIsSpeaking(false);
//     setSessionActive(false);
//     setStatus("⏹️ Session ended.");
//   };

//   const resetAll = () => {
//     stopSession();
//     setAiDecision("");
//     setRecordingURL(null);
//     setRecordingReady(false);
//     transcriptRef.current = "";
//     setStatus("");
//   };

//   const extractDecisions = async () => {
//     if (!transcriptRef.current.trim()) { setStatus("⚠️ Transcript is empty."); return; }
//     setAiLoading(true);
//     setStatus("🤖 Claude AI extracting decisions...");
//     try {
//       const res = await fetch(`${BASE_URL}/extractDecisions`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ transcript: transcriptRef.current }),
//       });
//       const data = await res.json();
//       if (data.success) {
//         setAiDecision(data.decision);
//         setStatus("✅ Decisions extracted!");
//       } else {
//         setStatus("❌ " + data.message);
//       }
//     } catch {
//       setStatus("❌ AI error. Please try again.");
//     } finally {
//       setAiLoading(false);
//     }
//   };

//   return (
//     <div className="mr-wrap">
//       <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 12 }}>
//         <div className={`mr-vad-ring ${isSpeaking ? "speaking" : ""}`}>
//           {isSpeaking ? "🗣️" : sessionActive ? "👂" : "🎙️"}
//         </div>

//         <div style={{ flex: 1 }}>
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

//           <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//             {!sessionActive
//               ? <button className="mr-btn mr-btn-green" onClick={startSession}>▶ Start Session</button>
//               : <button className="mr-btn mr-btn-grey"  onClick={stopSession}>⏹ Stop Session</button>
//             }
//             <button className="mr-btn mr-btn-red" onClick={resetAll} disabled={sessionActive}>🔄 Reset</button>
//           </div>
//         </div>
//       </div>

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

//       <div className="mr-status" style={{ marginBottom: 10 }}>{status}</div>

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
//   const aiExtractedDecisionRef = useRef("");
//   const [meetingRecording, setMeetingRecording]       = useState(null);
//   const meetingRecordingRef = useRef(null);
//   const [manualRecordingFile, setManualRecordingFile] = useState(null);

//   // ── Assign to Department state (from JansanwadAppform) ────────────────────
//   const [departments, setDepartments]       = useState([]);
//   const [departmentUsers, setDepartmentUsers] = useState([]);

//   // ✅ Live clock — re-renders every minute so the gate re-evaluates automatically
//   const [now, setNow] = useState(new Date());
//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 60000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const onResize = () => setIsMobile(window.innerWidth < 640);
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   // ── Fetch departments (same logic as JansanwadAppform) ────────────────────
//   useEffect(() => {
//     const fetchDepartments = async () => {
//       try {
//         const res = await axiosInstance.get("/getUsers");
//         console.log("res>>>>>>>>", res.data);
//         if (res.data.success) {
//           const users = res.data.users;
//           setDepartmentUsers(users);
//           const uniqueDepts = [...new Set(
//             res.data.users.map((u) => u.departmentName).filter(Boolean)
//           )];
//           setDepartments(uniqueDepts);
//         }
//       } catch (err) {
//         console.error("Department fetch error:", err);
//       }
//     };
//     fetchDepartments();
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
//     tagTo: [], // ── Assign to Department
//   });

//   // ✅ Derived boolean — used to gate "Record Meeting" button & "Auto-recording saved" badge
//   const meetingTimeReached = isMeetingTimeReached(
//     formData.meetingDate,
//     formData.meetingHour,
//     formData.meetingMinute,
//     formData.meetingAmpm
//   );

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

//   // ── handleTagChange (same as JansanwadAppform) ────────────────────────────
//   const handleTagChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       const newTagTo = [...new Set([...formData.tagTo, value])];
//       setFormData({ ...formData, tagTo: newTagTo });
//     } else {
//       setFormData({ ...formData, tagTo: formData.tagTo.filter((item) => item !== value) });
//     }
//   };

//   const emptyForm = {
//     meetingNumber: "", meetingType: "", meetingDate: "",
//     meetingHour: "", meetingMinute: "", meetingAmpm: "AM",
//     subjectId: "", subjectType: "", subjectName: "", decisionInMeeting: "",
//     tagTo: [],
//   };

//   const openCreateModal = () => {
//     setEditId(null);
//     setFormData(emptyForm);
//     setShowRecorder(false);
//     setAiExtractedDecision(""); aiExtractedDecisionRef.current = "";
//     setMeetingRecording(null);  meetingRecordingRef.current = null;
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
//       tagTo: Array.isArray(m.tagTo) ? m.tagTo : [],
//     });
//     setShowRecorder(false);

//     const existingAi = m.aiExtractedDecision || "";
//     aiExtractedDecisionRef.current = existingAi;
//     setAiExtractedDecision(existingAi);

//     meetingRecordingRef.current = m.meetingRecording || null;
//     setMeetingRecording(m.meetingRecording || null);

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
//       const fd = new FormData();

//       fd.append("meetingNumber", formData.meetingNumber);
//       fd.append("meetingType",   formData.meetingType);
//       if (formData.meetingDate)        fd.append("meetingDate",        formData.meetingDate);
//       if (buildTimeString())           fd.append("meetingTime",        buildTimeString());
//       if (formData.subjectId)          fd.append("subjectId",          formData.subjectId);
//       if (formData.subjectType)        fd.append("subjectType",        formData.subjectType);
//       if (formData.subjectName)        fd.append("subjectName",        formData.subjectName);
//       if (formData.decisionInMeeting)  fd.append("decisionInMeeting",  formData.decisionInMeeting);
//       formData.tagTo.forEach((dept) => fd.append("tagTo[]", dept));

//       const aiText = aiExtractedDecisionRef.current?.trim();
//       if (aiText) fd.append("aiExtractedDecision", aiText);

//       if (manualRecordingFile) fd.append("meetingRecording", manualRecordingFile);

//       const blobUrl = meetingRecordingRef.current?.trim();
//       if (blobUrl) {
//         try {
//           const blobRes  = await fetch(blobUrl);
//           const blobData = await blobRes.blob();
//           const file     = new File([blobData], "auto-recording.webm", { type: "audio/webm" });
//           fd.append("meetingRecordingBlob", file);
//         } catch (err) {
//           console.error("Blob fetch failed:", err);
//         }
//       }

//       const res  = await fetch(`${BASE_URL}/createMeeting`, { method: "POST", body: fd });
//       const data = await res.json();
//       if (data.success) { setShowModal(false); showToast("Meeting created successfully"); fetchMeetings(search); }
//       else showToast(data.message || "Failed to create meeting", "error");
//     } catch { showToast("Server error. Please try again.", "error"); }
//     finally { setLoading(false); }
//   };

//   const handleUpdate = async () => {
//     try {
//       setLoading(true);
//       const fd = new FormData();

//       fd.append("meetingNumber", formData.meetingNumber);
//       fd.append("meetingType",   formData.meetingType);
//       if (formData.meetingDate)        fd.append("meetingDate",        formData.meetingDate);
//       if (buildTimeString())           fd.append("meetingTime",        buildTimeString());
//       if (formData.subjectId)          fd.append("subjectId",          formData.subjectId);
//       if (formData.subjectType)        fd.append("subjectType",        formData.subjectType);
//       if (formData.subjectName)        fd.append("subjectName",        formData.subjectName);
//       if (formData.decisionInMeeting)  fd.append("decisionInMeeting",  formData.decisionInMeeting);
//       formData.tagTo.forEach((dept) => fd.append("tagTo[]", dept));

//       const aiText = aiExtractedDecisionRef.current?.trim();
//       if (aiText) fd.append("aiExtractedDecision", aiText);

//       if (manualRecordingFile) fd.append("meetingRecording", manualRecordingFile);

//       const recordingVal = meetingRecordingRef.current;
//       if (recordingVal && recordingVal.startsWith("blob:")) {
//         try {
//           const blobRes  = await fetch(recordingVal);
//           const blobData = await blobRes.blob();
//           const file     = new File([blobData], "auto-recording.webm", { type: "audio/webm" });
//           fd.append("meetingRecordingBlob", file);
//         } catch (err) {
//           console.error("❌ Blob convert failed:", err);
//         }
//       } else if (recordingVal && !manualRecordingFile) {
//         fd.append("existingRecordingUrl", recordingVal);
//       }

//       const res  = await fetch(`${BASE_URL}/updateMeeting/${editId}`, { method: "PUT", body: fd });
//       const data = await res.json();
//       if (data.success) {
//         setShowModal(false); setEditId(null);
//         showToast("Meeting updated successfully"); fetchMeetings(search);
//       } else {
//         showToast(data.message || "Failed to update meeting", "error");
//       }
//     } catch (err) {
//       console.error(err);
//       showToast("Server error. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
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

//         /* MeetingRecorder styles */
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

//         .pm-recorder-toggle {
//           display: flex; align-items: center; gap: 8px;
//           font-family: 'Nunito Sans', sans-serif; font-size: 13px; font-weight: 700;
//           background: #f0f7f2; color: #1a5a38; border: 1.5px solid #c8e0cc;
//           border-radius: 8px; padding: 8px 14px; cursor: pointer;
//           transition: background 0.15s, border-color 0.15s;
//         }
//         .pm-recorder-toggle:hover { background: #e4f2e8; border-color: #1a7a4a; }
//         .pm-recorder-toggle.active { background: #e6f4ec; border-color: #1a7a4a; color: #1a4a2e; }

//         .pm-recorder-section {
//           border: 1.5px solid #d6ede0; border-radius: 10px;
//           padding: 14px; background: #f7fbf8; margin-top: 4px;
//           grid-column: span 2;
//         }

//         /* ✅ Locked state for recording section — shown when time not reached */
//         .pm-recording-locked {
//           border: 1.5px dashed #e0c99a; border-radius: 8px;
//           padding: 12px 14px; background: #fffbf2;
//           display: flex; align-items: center; gap: 10;
//           font-size: 13px; font-weight: 600; color: #9a7a30;
//         }

//         /* ── Assign to Department styles ── */
//         .dept-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 6px;
//           max-height: 180px;
//           overflow-y: auto;
//           border: 1.5px solid #c8e0cc;
//           border-radius: 8px;
//           padding: 10px;
//           background: #f7fbf8;
//         }
//         @media (max-width: 480px) {
//           .dept-grid { grid-template-columns: 1fr; }
//         }
//         .dept-item {
//           display: flex; align-items: center; gap: 8px;
//           background: #fff; padding: 8px 10px; border-radius: 7px;
//           border: 1.5px solid #e0ede5; cursor: pointer;
//           font-size: 13px; font-weight: 500; color: #2d3d35;
//           transition: border-color 0.15s, background 0.15s;
//         }
//         .dept-item:hover { background: #f0f7f2; border-color: #1a7a4a; }
//         .dept-item.checked { background: #e6f4ec; border-color: #1a7a4a; color: #1a4a2e; font-weight: 700; }
//         .dept-item input[type="checkbox"] { accent-color: #1a7a4a; width: 15px; height: 15px; flex-shrink: 0; }
//       `}</style>

//       <div className="pm-wrap" style={{ background: "#f0f4f0", minHeight: "100vh", padding: isMobile ? 12 : 24 }}>

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

//         <div style={{ marginBottom: 16 }}>
//           <h1 className="pm-title">Meeting Proceedings</h1>
//           <p className="pm-subtitle">Sabha Kamkaj manage करा</p>
//           <button className="pm-btn-primary" onClick={openCreateModal}>+ Create Meeting</button>
//         </div>

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

//           {isMobile ? (
//             <div>
//               {loading ? (
//                 <div style={{ textAlign: "center", padding: 20, color: "#8a9a90" }}>Loading...</div>
//               ) : meetings.length === 0 ? (
//                 <div style={{ textAlign: "center", padding: 20, color: "#8a9a90" }}>No records found</div>
//               ) : (
//                 meetings.map((m, i) => (
//                   <div className="pm-card" key={m._id}>
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
//                       <span style={{ fontWeight: 800, color: "#1a4a2e", fontSize: 14 }}>
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
//                     {Array.isArray(m.tagTo) && m.tagTo.length > 0 && (
//                       <div className="pm-card-row">
//                         <span className="pm-card-label">Departments</span>
//                         <span style={{ fontSize: 12, color: "#1a6640", fontWeight: 600 }}>{m.tagTo.join(", ")}</span>
//                       </div>
//                     )}
//                   </div>
//                 ))
//               )}
//             </div>
//           ) : (
//             <table className="pm-table" style={{ width: "100%", borderCollapse: "collapse" }}>
//               <thead>
//                 <tr>
//                   {["#","Meeting No","Type","Date","Time","Subject ID","Subject Type","Subject Name","Decision In Meeting","Departments","Actions"].map(h => (
//                     <th key={h}>{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr><td colSpan={11} style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>Loading...</td></tr>
//                 ) : meetings.length === 0 ? (
//                   <tr><td colSpan={11} style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>No records found</td></tr>
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
//                       <td style={{ maxWidth: 160 }}>
//                         {Array.isArray(m.tagTo) && m.tagTo.length > 0 ? (
//                           <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
//                             {m.tagTo.map((d, di) => (
//                               <span key={di} style={{ background: "#e6f4ec", color: "#1a6640", fontSize: 11, fontWeight: 700, padding: "2px 7px", borderRadius: 6 }}>{d}</span>
//                             ))}
//                           </div>
//                         ) : <span style={{ color: "#ccc" }}>—</span>}
//                       </td>
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

               
//                 {/* ── Edit-only section — ALL gated by meetingTimeReached ── */}
//                 {editId && (
//                   <>
//                     {meetingTimeReached ? (
//                       <>
//                         {/* Decision In Meeting */}
//                         <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
//                           <label className="pm-label">Decision In Meeting</label>
//                           <select className="pm-input" name="decisionInMeeting" value={formData.decisionInMeeting} onChange={handleChange}>
//                             <option value="">Select Decision</option>
//                             <option value="Approved">Approved</option>
//                             <option value="Rejected">Rejected</option>
//                             <option value="On-Hold">On-Hold</option>
//                             <option value="Not Conducted">Not Conducted</option>
//                             <option value="Postponed">Postponed</option>
//                           </select>
//                         </div>


//                          {/* ── Assign to Department — only when Decision = Approved ── */}
//                 {formData.decisionInMeeting === "Approved" && (
//                 <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
//                   <label className="pm-label" style={{ marginBottom: 8 }}>Assign to Department</label>
//                   <div className="dept-grid">
//                     {departments.length === 0 ? (
//                       <div style={{ gridColumn: "span 2", textAlign: "center", color: "#8a9a90", fontSize: 13, padding: 10 }}>
//                         Loading departments...
//                       </div>
//                     ) : (
//                       departments.map((dept, i) => (
//                         <label
//                           key={i}
//                           className={`dept-item ${formData.tagTo.includes(dept) ? "checked" : ""}`}
//                         >
//                           <input
//                             type="checkbox"
//                             value={dept}
//                             checked={formData.tagTo.includes(dept)}
//                             onChange={handleTagChange}
//                           />
//                           <span>{dept}</span>
//                         </label>
//                       ))
//                     )}
//                   </div>
//                   {formData.tagTo.length > 0 && (
//                     <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 5 }}>
//                       {formData.tagTo.map((d, di) => (
//                         <span key={di} style={{ background: "#e6f4ec", color: "#1a6640", fontSize: 11.5, fontWeight: 700, padding: "3px 9px", borderRadius: 20, border: "1px solid #a8d5b5" }}>
//                           ✅ {d}
//                         </span>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//                 )} {/* end decisionInMeeting === "Approved" */}


//                         {/* Record Meeting button */}
//                         <div style={{ gridColumn: isMobile ? "1" : "span 2" }}>
//                           <button
//                             className={`pm-recorder-toggle ${showRecorder ? "active" : ""}`}
//                             onClick={() => setShowRecorder(v => !v)}
//                             type="button"
//                           >
//                             {showRecorder ? "Hide Meeting Recorder" : "Record Meeting"}
//                           </button>
//                         </div>

//                         {/* Upload section */}
//                         <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
//                           <label className="pm-label">Upload Meeting Recording (optional)</label>
//                           <div style={{
//                             border: "1.5px dashed #c8e0cc", borderRadius: 8,
//                             padding: "10px 14px", background: "#f7fbf8",
//                             display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
//                           }}>
//                             <label style={{
//                               fontFamily: "'Nunito Sans', sans-serif", fontSize: 13, fontWeight: 700,
//                               background: "#e6f4ec", color: "#1a6640", border: "1.5px solid #c8e0cc",
//                               borderRadius: 7, padding: "6px 14px", cursor: "pointer",
//                             }}>
//                               📁 Choose File
//                               <input
//                                 type="file"
//                                 accept="audio/*,video/webm"
//                                 style={{ display: "none" }}
//                                 onChange={(e) => {
//                                   const file = e.target.files[0];
//                                   if (file) setManualRecordingFile(file);
//                                 }}
//                               />
//                             </label>
//                             {manualRecordingFile ? (
//                               <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
//                                 <span style={{ fontSize: 12.5, fontWeight: 600, color: "#1a4a2e" }}>
//                                   🎵 {manualRecordingFile.name}
//                                 </span>
//                                 <button
//                                   type="button"
//                                   onClick={() => setManualRecordingFile(null)}
//                                   style={{
//                                     background: "#fdecea", color: "#c0392b", border: "none",
//                                     borderRadius: 5, padding: "3px 8px", cursor: "pointer",
//                                     fontSize: 11, fontWeight: 700,
//                                   }}
//                                 >✕ Remove</button>
//                               </div>
//                             ) : meetingRecording ? (
//                               <span style={{ fontSize: 12.5, fontWeight: 600, color: "#1a4a2e" }}>
//                                 🔴 Auto-recording saved
//                               </span>
//                             ) : (
//                               <span style={{ fontSize: 12.5, color: "#9ab5a0", fontWeight: 500 }}>
//                                 No file chosen — or use recorder below
//                               </span>
//                             )}
//                           </div>
//                         </div>

//                         {/* Recorder collapsible */}
//                         {showRecorder && (
//                           <div className="pm-recorder-section" style={{ gridColumn: isMobile ? "1" : "span 2" }}>
//                             <MeetingRecorder
//                               onDecisionExtracted={(text) => {
//                                 const trimmed = text?.trim() || "";
//                                 aiExtractedDecisionRef.current = trimmed;
//                                 setAiExtractedDecision(trimmed);
//                                 showToast("AI decisions saved! ✅");
//                               }}
//                               onRecordingReady={(url) => {
//                                 meetingRecordingRef.current = url;
//                                 setMeetingRecording(url);
//                                 showToast("Recording auto-saved! 🔴");
//                               }}
//                               onTranscriptUpdate={() => {}}
//                             />
//                             {aiExtractedDecision && (
//                               <div style={{
//                                 marginTop: 10, background: "#eaf4ff", border: "1.5px solid #b3d4f0",
//                                 borderRadius: 8, padding: "10px 12px",
//                                 fontSize: 13, fontWeight: 500, color: "#1a3a5a",
//                                 lineHeight: 1.7, whiteSpace: "pre-wrap",
//                               }}>
//                                 <div style={{ fontWeight: 800, color: "#1565a8", marginBottom: 4, fontSize: 11.5, textTransform: "uppercase", letterSpacing: "0.5px" }}>
//                                   ✅ AI Extracted Decision (will be saved)
//                                 </div>
//                                 {aiExtractedDecision}
//                               </div>
//                             )}
//                             {meetingRecording && !manualRecordingFile && (
//                               <div style={{
//                                 marginTop: 8, background: "#e6f4ec", border: "1.5px solid #c8e0cc",
//                                 borderRadius: 8, padding: "8px 12px",
//                                 fontSize: 12.5, fontWeight: 600, color: "#1a4a2e",
//                                 display: "flex", alignItems: "center", gap: 6,
//                               }}>
//                                 🔴 Auto-recording captured and will be saved with this meeting
//                               </div>
//                             )}
//                           </div>
//                         )}
//                       </>
//                     ) : (
//                       /* ── Locked state — meeting time not yet reached ── */
//                       <div style={{ gridColumn: isMobile ? "1" : "span 2" }}>
//                         <div className="pm-recording-locked">
//                           🔒 Decision, Recording options — available at scheduled meeting time
//                           {formData.meetingDate && formData.meetingHour && (
//                             <span style={{ marginLeft: 6, color: "#b07a00" }}>
//                               ({formData.meetingDate} {formData.meetingHour}:{formData.meetingMinute || "00"} {formData.meetingAmpm})
//                             </span>
//                           )}
//                         </div>
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
import axiosInstance from "../services/axiosInstance";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

function isMeetingTimeReached(meetingDate, meetingHour, meetingMinute, meetingAmpm) {
  if (!meetingDate || !meetingHour || !meetingMinute) return false;
  const now = new Date();
  const [year, month, day] = meetingDate.split("-").map(Number);
  let hour = parseInt(meetingHour, 10);
  if (meetingAmpm === "PM" && hour !== 12) hour += 12;
  if (meetingAmpm === "AM" && hour === 12) hour = 0;
  const meetingDT = new Date(year, month - 1, day, hour, parseInt(meetingMinute, 10), 0);
  return now >= meetingDT;
}

function MeetingRecorder({ onDecisionExtracted, onTranscriptUpdate, onRecordingReady }) {
  const [sessionActive, setSessionActive]       = useState(false);
  const [isSpeaking, setIsSpeaking]             = useState(false);
  const [recordingEnabled, setRecordingEnabled] = useState(false);
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
              setStatus("👂 Waiting for someone to speak...");
            }
          }, SILENCE_DELAY);
        }
      }
    };
    loop();
  };

  const startSession = async () => {
    setMicError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micStreamRef.current = stream;
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
          onRecordingReady?.(url);
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
    micStreamRef.current?.getTracks().forEach(t => t.stop());
    if (mediaRecorderRef.current?.state === "recording") mediaRecorderRef.current.stop();
    speakingRef.current      = false;
    sessionActiveRef.current = false;
    setIsSpeaking(false);
    setSessionActive(false);
    setStatus("⏹️ Session ended.");
  };

  const resetAll = () => {
    stopSession();
    setAiDecision("");
    setRecordingURL(null);
    setRecordingReady(false);
    transcriptRef.current = "";
    setStatus("");
  };

  const extractDecisions = async () => {
    if (!transcriptRef.current.trim()) { setStatus("⚠️ Transcript is empty."); return; }
    setAiLoading(true);
    setStatus("🤖 Claude AI extracting decisions...");
    try {
      const res = await fetch(`${BASE_URL}/extractDecisions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transcript: transcriptRef.current }),
      });
      const data = await res.json();
      if (data.success) {
        setAiDecision(data.decision);
        setStatus("✅ Decisions extracted!");
      } else {
        setStatus("❌ " + data.message);
      }
    } catch {
      setStatus("❌ AI error. Please try again.");
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="mr-wrap">
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 12 }}>
        <div className={`mr-vad-ring ${isSpeaking ? "speaking" : ""}`}>
          {isSpeaking ? "🗣️" : sessionActive ? "👂" : "🎙️"}
        </div>

        <div style={{ flex: 1 }}>
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

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {!sessionActive
              ? <button className="mr-btn mr-btn-green" onClick={startSession}>▶ Start Session</button>
              : <button className="mr-btn mr-btn-grey"  onClick={stopSession}>⏹ Stop Session</button>
            }
            <button className="mr-btn mr-btn-red" onClick={resetAll} disabled={sessionActive}>🔄 Reset</button>
          </div>
        </div>
      </div>

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

      <div className="mr-status" style={{ marginBottom: 10 }}>{status}</div>

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
  const aiExtractedDecisionRef = useRef("");
  const [meetingRecording, setMeetingRecording]       = useState(null);
  const meetingRecordingRef = useRef(null);
  const [manualRecordingFile, setManualRecordingFile] = useState(null);

  const [departments, setDepartments]       = useState([]);
  const [departmentUsers, setDepartmentUsers] = useState([]);

  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await axiosInstance.get("/getUsers");
        if (res.data.success) {
          const users = res.data.users;
          setDepartmentUsers(users);
          const uniqueDepts = [...new Set(
            res.data.users.map((u) => u.departmentName).filter(Boolean)
          )];
          setDepartments(uniqueDepts);
        }
      } catch (err) {
        console.error("Department fetch error:", err);
      }
    };
    fetchDepartments();
  }, []);

  const emptyForm = {
    meetingNumber: "", meetingType: "", meetingDate: "",
    meetingHour: "", meetingMinute: "", meetingAmpm: "AM",
    subjects: [{ subjectId: "", subjectName: "", subjectType: "" }],
    decisionInMeeting: "",
    tagTo: [],
  };

  const [formData, setFormData] = useState(emptyForm);

  // ── Subject helpers ────────────────────────────────────────
  const addSubject = () =>
    setFormData(f => ({ ...f, subjects: [...f.subjects, { subjectId: "", subjectName: "", subjectType: "" }] }));

  const removeSubject = (i) =>
    setFormData(f => ({ ...f, subjects: f.subjects.filter((_, idx) => idx !== i) }));

  const handleSubjectChange = (i, field, val) =>
    setFormData(f => {
      const updated = [...f.subjects];
      updated[i] = { ...updated[i], [field]: val };
      return { ...f, subjects: updated };
    });
  // ──────────────────────────────────────────────────────────

  const meetingTimeReached = isMeetingTimeReached(
    formData.meetingDate,
    formData.meetingHour,
    formData.meetingMinute,
    formData.meetingAmpm
  );

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

  const handleTagChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      const newTagTo = [...new Set([...formData.tagTo, value])];
      setFormData({ ...formData, tagTo: newTagTo });
    } else {
      setFormData({ ...formData, tagTo: formData.tagTo.filter((item) => item !== value) });
    }
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
      subjects: Array.isArray(m.subjects) && m.subjects.length > 0
        ? m.subjects
        : [{ subjectId: m.subjectId || "", subjectName: m.subjectName || "", subjectType: m.subjectType || "" }],
      decisionInMeeting: m.decisionInMeeting || "",
      tagTo: Array.isArray(m.tagTo) ? m.tagTo : [],
    });
    setShowRecorder(false);

    const existingAi = m.aiExtractedDecision || "";
    aiExtractedDecisionRef.current = existingAi;
    setAiExtractedDecision(existingAi);

    meetingRecordingRef.current = m.meetingRecording || null;
    setMeetingRecording(m.meetingRecording || null);

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

  const handleCreate = async () => {
    try {
      setLoading(true);
      const fd = new FormData();

      fd.append("meetingNumber", formData.meetingNumber);
      fd.append("meetingType",   formData.meetingType);
      if (formData.meetingDate)       fd.append("meetingDate",       formData.meetingDate);
      if (buildTimeString())          fd.append("meetingTime",       buildTimeString());
      fd.append("subjects", JSON.stringify(formData.subjects));
      if (formData.decisionInMeeting) fd.append("decisionInMeeting", formData.decisionInMeeting);
      formData.tagTo.forEach((dept) => fd.append("tagTo[]", dept));

      const aiText = aiExtractedDecisionRef.current?.trim();
      if (aiText) fd.append("aiExtractedDecision", aiText);

      if (manualRecordingFile) fd.append("meetingRecording", manualRecordingFile);

      const blobUrl = meetingRecordingRef.current?.trim();
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
      if (formData.meetingDate)       fd.append("meetingDate",       formData.meetingDate);
      if (buildTimeString())          fd.append("meetingTime",       buildTimeString());
      fd.append("subjects", JSON.stringify(formData.subjects));
      if (formData.decisionInMeeting) fd.append("decisionInMeeting", formData.decisionInMeeting);
      formData.tagTo.forEach((dept) => fd.append("tagTo[]", dept));

      const aiText = aiExtractedDecisionRef.current?.trim();
      if (aiText) fd.append("aiExtractedDecision", aiText);

      if (manualRecordingFile) fd.append("meetingRecording", manualRecordingFile);

      const recordingVal = meetingRecordingRef.current;
      if (recordingVal && recordingVal.startsWith("blob:")) {
        try {
          const blobRes  = await fetch(recordingVal);
          const blobData = await blobRes.blob();
          const file     = new File([blobData], "auto-recording.webm", { type: "audio/webm" });
          fd.append("meetingRecordingBlob", file);
        } catch (err) {
          console.error("❌ Blob convert failed:", err);
        }
      } else if (recordingVal && !manualRecordingFile) {
        fd.append("existingRecordingUrl", recordingVal);
      }

      const res  = await fetch(`${BASE_URL}/updateMeeting/${editId}`, { method: "PUT", body: fd });
      const data = await res.json();
      if (data.success) {
        setShowModal(false); setEditId(null);
        showToast("Meeting updated successfully"); fetchMeetings(search);
      } else {
        showToast(data.message || "Failed to update meeting", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Server error. Please try again.", "error");
    } finally {
      setLoading(false);
    }
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

        /* MeetingRecorder styles */
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

        .pm-recorder-toggle {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Nunito Sans', sans-serif; font-size: 13px; font-weight: 700;
          background: #f0f7f2; color: #1a5a38; border: 1.5px solid #c8e0cc;
          border-radius: 8px; padding: 8px 14px; cursor: pointer;
          transition: background 0.15s, border-color 0.15s;
        }
        .pm-recorder-toggle:hover { background: #e4f2e8; border-color: #1a7a4a; }
        .pm-recorder-toggle.active { background: #e6f4ec; border-color: #1a7a4a; color: #1a4a2e; }

        .pm-recorder-section {
          border: 1.5px solid #d6ede0; border-radius: 10px;
          padding: 14px; background: #f7fbf8; margin-top: 4px;
          grid-column: span 2;
        }

        .pm-recording-locked {
          border: 1.5px dashed #e0c99a; border-radius: 8px;
          padding: 12px 14px; background: #fffbf2;
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; font-weight: 600; color: #9a7a30;
        }

        /* ── Subject row styles ── */
        .subject-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr auto;
          gap: 10px;
          background: #f7fbf8;
          border: 1px solid #d6ede0;
          border-radius: 8px;
          padding: 12px 12px 8px;
          margin-bottom: 10px;
          align-items: end;
        }
        @media (max-width: 639px) {
          .subject-row { grid-template-columns: 1fr; }
        }

        /* ── Assign to Department styles ── */
        .dept-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          max-height: 180px;
          overflow-y: auto;
          border: 1.5px solid #c8e0cc;
          border-radius: 8px;
          padding: 10px;
          background: #f7fbf8;
        }
        @media (max-width: 480px) {
          .dept-grid { grid-template-columns: 1fr; }
        }
        .dept-item {
          display: flex; align-items: center; gap: 8px;
          background: #fff; padding: 8px 10px; border-radius: 7px;
          border: 1.5px solid #e0ede5; cursor: pointer;
          font-size: 13px; font-weight: 500; color: #2d3d35;
          transition: border-color 0.15s, background 0.15s;
        }
        .dept-item:hover { background: #f0f7f2; border-color: #1a7a4a; }
        .dept-item.checked { background: #e6f4ec; border-color: #1a7a4a; color: #1a4a2e; font-weight: 700; }
        .dept-item input[type="checkbox"] { accent-color: #1a7a4a; width: 15px; height: 15px; flex-shrink: 0; }
      `}</style>

      <div className="pm-wrap" style={{ background: "#f0f4f0", minHeight: "100vh", padding: isMobile ? 12 : 24 }}>

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

        <div style={{ marginBottom: 16 }}>
          <h1 className="pm-title">Meeting Proceedings</h1>
          <p className="pm-subtitle">Sabha Kamkaj manage करा</p>
          <button className="pm-btn-primary" onClick={openCreateModal}>+ Create Meeting</button>
        </div>

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

          {isMobile ? (
            <div>
              {loading ? (
                <div style={{ textAlign: "center", padding: 20, color: "#8a9a90" }}>Loading...</div>
              ) : meetings.length === 0 ? (
                <div style={{ textAlign: "center", padding: 20, color: "#8a9a90" }}>No records found</div>
              ) : (
                meetings.map((m, i) => (
                  <div className="pm-card" key={m._id}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontWeight: 800, color: "#1a4a2e", fontSize: 14 }}>
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
                    {Array.isArray(m.subjects) && m.subjects.length > 0 ? (
                      m.subjects.map((sub, si) => (
                        <div key={si}>
                          <div className="pm-card-row"><span className="pm-card-label">Subject ID {si + 1}</span><span>{sub.subjectId || "-"}</span></div>
                          <div className="pm-card-row"><span className="pm-card-label">Subject Type {si + 1}</span><span className="subject-type-pill">{sub.subjectType || "-"}</span></div>
                          <div className="pm-card-row"><span className="pm-card-label">Subject Name {si + 1}</span><span>{sub.subjectName || "-"}</span></div>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="pm-card-row"><span className="pm-card-label">Subject ID</span><span>{m.subjectId || "-"}</span></div>
                        <div className="pm-card-row"><span className="pm-card-label">Subject Type</span><span className="subject-type-pill">{m.subjectType || "-"}</span></div>
                        <div className="pm-card-row"><span className="pm-card-label">Subject Name</span><span>{m.subjectName || "-"}</span></div>
                      </>
                    )}
                    <div className="pm-card-row"><span className="pm-card-label">Decision</span><span>{decisionBadge(m.decisionInMeeting)}</span></div>
                    {Array.isArray(m.tagTo) && m.tagTo.length > 0 && (
                      <div className="pm-card-row">
                        <span className="pm-card-label">Departments</span>
                        <span style={{ fontSize: 12, color: "#1a6640", fontWeight: 600 }}>{m.tagTo.join(", ")}</span>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          ) : (
            <table className="pm-table" style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["#","Meeting No","Type","Date","Time","Subjects","Decision In Meeting","Departments","Actions"].map(h => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={9} style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>Loading...</td></tr>
                ) : meetings.length === 0 ? (
                  <tr><td colSpan={9} style={{ textAlign: "center", padding: 24, color: "#8a9a90" }}>No records found</td></tr>
                ) : (
                  meetings.map((m, i) => (
                    <tr key={m._id}>
                      <td>{i + 1}</td>
                      <td><span className="meeting-no-badge">{m.meetingNumber}</span></td>
                      <td>{m.meetingType}</td>
                      <td>{m.meetingDate ? new Date(m.meetingDate).toLocaleDateString("en-IN") : "-"}</td>
                      <td><span className="time-badge">{formatTime(m.meetingTime)}</span></td>
                      <td style={{ minWidth: 180 }}>
                        {Array.isArray(m.subjects) && m.subjects.length > 0 ? (
                          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            {m.subjects.map((sub, si) => (
                              <div key={si} style={{ fontSize: 12, color: "#2d3d35" }}>
                                <span style={{ fontWeight: 700, color: "#1a4a2e" }}>{sub.subjectId}</span>
                                {sub.subjectName && <span> — {sub.subjectName}</span>}
                                {sub.subjectType && <span className="subject-type-pill" style={{ marginLeft: 4 }}>{sub.subjectType}</span>}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div style={{ fontSize: 12, color: "#2d3d35" }}>
                            <span style={{ fontWeight: 700, color: "#1a4a2e" }}>{m.subjectId}</span>
                            {m.subjectName && <span> — {m.subjectName}</span>}
                            {m.subjectType && <span className="subject-type-pill" style={{ marginLeft: 4 }}>{m.subjectType}</span>}
                          </div>
                        )}
                      </td>
                      <td>{decisionBadge(m.decisionInMeeting)}</td>
                      <td style={{ maxWidth: 160 }}>
                        {Array.isArray(m.tagTo) && m.tagTo.length > 0 ? (
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                            {m.tagTo.map((d, di) => (
                              <span key={di} style={{ background: "#e6f4ec", color: "#1a6640", fontSize: 11, fontWeight: 700, padding: "2px 7px", borderRadius: 6 }}>{d}</span>
                            ))}
                          </div>
                        ) : <span style={{ color: "#ccc" }}>—</span>}
                      </td>
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

        {/* ── Create / Edit Modal ── */}
        {showModal && (
          <div style={modalOverlay}>
            <div style={{
              background: "#fff", borderRadius: 12, padding: isMobile ? 16 : 25,
              width: isMobile ? "95%" : "80%",
              maxWidth: 900,
              maxHeight: "90vh", overflowY: "auto",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                <h3 className="pm-modal-title">{editId ? "Edit Meeting" : "Create Meeting"}</h3>
                <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "#8a9a90" }}>✕</button>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>

                {/* Meeting Number */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label className="pm-label">Meeting Number</label>
                  <input className="pm-input" name="meetingNumber" placeholder="Meeting Number" value={formData.meetingNumber} onChange={handleChange} />
                </div>

                {/* Type Of Meeting */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label className="pm-label">Type Of Meeting</label>
                  <select className="pm-input" name="meetingType" value={formData.meetingType} onChange={handleChange}>
                    <option value="">Select Type</option>
                    <option>General Body</option>
                    <option>Standing Committee</option>
                  </select>
                </div>

                {/* Meeting Date */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label className="pm-label">Meeting Date</label>
                  <input className="pm-input" name="meetingDate" type="date" value={formData.meetingDate} onChange={handleChange} />
                </div>

                {/* Meeting Time */}
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

                {/* ── Subjects Section ── */}
                <div style={{ gridColumn: isMobile ? "1" : "span 2" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <label className="pm-label" style={{ marginBottom: 0, fontSize: 13, fontWeight: 800, color: "#3a6b50", textTransform: "uppercase", letterSpacing: "0.4px" }}>
                      Subjects
                    </label>
                    <button
                      type="button"
                      className="pm-btn-primary"
                      style={{ padding: "6px 14px", fontSize: 12.5, display: "flex", alignItems: "center", gap: 4 }}
                      onClick={addSubject}
                    >
                      + Add Subject
                    </button>
                  </div>

                  {formData.subjects.map((sub, i) => (
                    <div key={i} className="subject-row">
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label className="pm-label">Subject ID</label>
                        <input
                          className="pm-input"
                          placeholder="e.g. SUB-001"
                          value={sub.subjectId}
                          onChange={e => handleSubjectChange(i, "subjectId", e.target.value)}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label className="pm-label">Subject Name</label>
                        <input
                          className="pm-input"
                          placeholder="Subject name"
                          value={sub.subjectName}
                          onChange={e => handleSubjectChange(i, "subjectName", e.target.value)}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label className="pm-label">Subject Type</label>
                        <select
                          className="pm-input"
                          value={sub.subjectType}
                          onChange={e => handleSubjectChange(i, "subjectType", e.target.value)}
                        >
                          <option value="">Select Type</option>
                          <option>General</option>
                          <option>Administrative and Financial Approval</option>
                          <option>Contract Approval</option>
                        </select>
                      </div>
                      {formData.subjects.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSubject(i)}
                          style={{
                            background: "#fdecea", color: "#c0392b", border: "none",
                            borderRadius: 8, padding: "8px 12px", cursor: "pointer",
                            fontWeight: 700, fontSize: 16, alignSelf: "flex-end",
                            minWidth: 36,
                          }}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* ── Edit-only section — ALL gated by meetingTimeReached ── */}
                {editId && (
                  <>
                    {meetingTimeReached ? (
                      <>
                        {/* Decision In Meeting */}
                        <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
                          <label className="pm-label">Decision In Meeting</label>
                          <select className="pm-input" name="decisionInMeeting" value={formData.decisionInMeeting} onChange={handleChange}>
                            <option value="">Select Decision</option>
                            <option value="Approved">Approved</option>
                            <option value="Rejected">Rejected</option>
                            <option value="On-Hold">On-Hold</option>
                            <option value="Not Conducted">Not Conducted</option>
                            <option value="Postponed">Postponed</option>
                          </select>
                        </div>

                        {/* Assign to Department — only when Decision = Approved */}
                        {formData.decisionInMeeting === "Approved" && (
                          <div style={{ display: "flex", flexDirection: "column", gridColumn: isMobile ? "1" : "span 2" }}>
                            <label className="pm-label" style={{ marginBottom: 8 }}>Assign to Department</label>
                            <div className="dept-grid">
                              {departments.length === 0 ? (
                                <div style={{ gridColumn: "span 2", textAlign: "center", color: "#8a9a90", fontSize: 13, padding: 10 }}>
                                  Loading departments...
                                </div>
                              ) : (
                                departments.map((dept, i) => (
                                  <label
                                    key={i}
                                    className={`dept-item ${formData.tagTo.includes(dept) ? "checked" : ""}`}
                                  >
                                    <input
                                      type="checkbox"
                                      value={dept}
                                      checked={formData.tagTo.includes(dept)}
                                      onChange={handleTagChange}
                                    />
                                    <span>{dept}</span>
                                  </label>
                                ))
                              )}
                            </div>
                            {formData.tagTo.length > 0 && (
                              <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 5 }}>
                                {formData.tagTo.map((d, di) => (
                                  <span key={di} style={{ background: "#e6f4ec", color: "#1a6640", fontSize: 11.5, fontWeight: 700, padding: "3px 9px", borderRadius: 20, border: "1px solid #a8d5b5" }}>
                                    ✅ {d}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Record Meeting button */}
                        <div style={{ gridColumn: isMobile ? "1" : "span 2" }}>
                          <button
                            className={`pm-recorder-toggle ${showRecorder ? "active" : ""}`}
                            onClick={() => setShowRecorder(v => !v)}
                            type="button"
                          >
                            {showRecorder ? "Hide Meeting Recorder" : "Record Meeting"}
                          </button>
                        </div>

                        {/* Upload section */}
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

                        {/* Recorder collapsible */}
                        {showRecorder && (
                          <div className="pm-recorder-section" style={{ gridColumn: isMobile ? "1" : "span 2" }}>
                            <MeetingRecorder
                              onDecisionExtracted={(text) => {
                                const trimmed = text?.trim() || "";
                                aiExtractedDecisionRef.current = trimmed;
                                setAiExtractedDecision(trimmed);
                                showToast("AI decisions saved! ✅");
                              }}
                              onRecordingReady={(url) => {
                                meetingRecordingRef.current = url;
                                setMeetingRecording(url);
                                showToast("Recording auto-saved! 🔴");
                              }}
                              onTranscriptUpdate={() => {}}
                            />
                            {aiExtractedDecision && (
                              <div style={{
                                marginTop: 10, background: "#eaf4ff", border: "1.5px solid #b3d4f0",
                                borderRadius: 8, padding: "10px 12px",
                                fontSize: 13, fontWeight: 500, color: "#1a3a5a",
                                lineHeight: 1.7, whiteSpace: "pre-wrap",
                              }}>
                                <div style={{ fontWeight: 800, color: "#1565a8", marginBottom: 4, fontSize: 11.5, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                  ✅ AI Extracted Decision (will be saved)
                                </div>
                                {aiExtractedDecision}
                              </div>
                            )}
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
                    ) : (
                      /* Locked state */
                      <div style={{ gridColumn: isMobile ? "1" : "span 2" }}>
                        <div className="pm-recording-locked">
                          🔒 Decision, Recording options — available at scheduled meeting time
                          {formData.meetingDate && formData.meetingHour && (
                            <span style={{ marginLeft: 6, color: "#b07a00" }}>
                              ({formData.meetingDate} {formData.meetingHour}:{formData.meetingMinute || "00"} {formData.meetingAmpm})
                            </span>
                          )}
                        </div>
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