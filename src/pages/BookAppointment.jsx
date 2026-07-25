import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import citizenAxios from "../services/citizenAxios";

const STEPS = [
  { label:"Personal Details", icon:"👤" },
  { label:"Appointment",      icon:"📅" },
  { label:"Details",          icon:"ℹ️"  },
  { label:"Photo",            icon:"📷" },
  { label:"Review & Submit",  icon:"📋" },
];

function formatShortDate(d) {
  if (!d) return "—";
  return new Date(d + "T00:00:00").toLocaleDateString("en-IN", { weekday:"short", day:"numeric", month:"short", year:"numeric" });
}

// ── Auto-generate 15-min slots from "HH:MM - HH:MM" slotTime string ─────────
function generateMicroSlots(slotTime) {
  if (!slotTime) return [];
  const match = slotTime.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);
  if (!match) return [];
  const startH = parseInt(match[1]), startM = parseInt(match[2]);
  const endH   = parseInt(match[3]), endM   = parseInt(match[4]);

  const slots = [];
  let cur = startH * 60 + startM;
  const end = endH * 60 + endM;

  while (cur + 15 <= end) {
    const sh = String(Math.floor(cur / 60)).padStart(2, "0");
    const sm = String(cur % 60).padStart(2, "0");
    const nh = String(Math.floor((cur + 15) / 60)).padStart(2, "0");
    const nm = String((cur + 15) % 60).padStart(2, "0");
    slots.push(`${sh}:${sm} - ${nh}:${nm}`);
    cur += 15;
  }
  return slots;
}

export default function BookAppointment() {
  const navigate = useNavigate();
  const citizen  = (() => { try { return JSON.parse(localStorage.getItem("citizenUser")||"null"); } catch { return null; } })();

  const [step, setStep]             = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [availability, setAvail]    = useState([]);
  const [toast, setToast]           = useState(null);
  const [booked, setBooked]         = useState(null);
  const [animDir, setAnimDir]       = useState("forward");

  // ── Micro slot state ──────────────────────────────────────────────────────
  const [microSlots,    setMicroSlots]    = useState([]);
  const [microLoading,  setMicroLoading]  = useState(false);
  const [allSlotsFull,  setAllSlotsFull]  = useState(false);

  // ✅ citizenId-based lookup state (replaces username lookup)
  const [citizenLoading,  setCitizenLoading]  = useState(false);
  const [citizenFound,    setCitizenFound]    = useState(false);
  const [visitCount,      setVisitCount]      = useState(null);
  const [lastPhotoPreview, setLastPhotoPreview] = useState(null); // ✅ photo from last appointment

  const showToast = (msg, type="success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const [form, setForm] = useState({
    username:         citizen?.username     || "",
    fullName:         citizen?.fullName     || "",
    mobileNumber:     citizen?.mobileNumber || "",
    email:            citizen?.email        || "",
    address:          "",
    pincode:          "",
    preferredDate:    "",
    slotTime:         "",
    slotStart:        "",
    slotEnd:          "",
    microSlot:        "",
    purpose:          "",
    numberOfVisitors: "1",
    visitedBefore:    false,
    ward:             "",
    visitorPhoto:     null,
    photoPreview:     null,
  });

  const ch = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

  // ── Ref to always have latest microSlot inside setInterval without re-running effect ──
  const microSlotRef = useRef("");
  useEffect(() => { microSlotRef.current = form.microSlot; }, [form.microSlot]);

  // ── ✅ On mount: fetch citizen data by citizenId (from localStorage) ──────
  useEffect(() => {
    if (!citizen?._id) return;

    const fetchCitizenById = async () => {
      try {
        setCitizenLoading(true);
        const res = await citizenAxios.get(`/citizen/by-id/${citizen._id}`);

        if (res.data?.success && res.data?.citizen) {
          const c = res.data.citizen;

          setForm(prev => ({
            ...prev,
            username:     c.username     || prev.username,
            fullName:     c.fullName     || prev.fullName,
            mobileNumber: c.mobileNumber || prev.mobileNumber,
            email:        c.email        || prev.email,
            pincode:      c.pincode      || prev.pincode,
            address:      c.address      || prev.address,
            ward:         res.data.lastWard || prev.ward,
          }));

          if (res.data.lastPhoto) {
            setLastPhotoPreview(res.data.lastPhoto);
          }

          setVisitCount(res.data.nextVisitNumber);
          setCitizenFound(true);
        }
      } catch {
        // Silently fail — user can fill manually
      } finally {
        setCitizenLoading(false);
      }
    };

    fetchCitizenById();
  }, []);

  // ── Fetch availability ────────────────────────────────────────────────────
  useEffect(() => {
    citizenAxios.get("/availability/get")
      .then(r => { if (r.data) setAvail(Array.isArray(r.data) ? r.data : r.data.data || []); })
      .catch(() => {});
  }, []);

  // ── Normalize slot string ─────────────────────────────────────────────────
  const normalizeSlot = (s) => (s || "").replace(/\s*-\s*/g, "-").trim();

  // ── Build bookedSet from API response ─────────────────────────────────────
  const extractBookedSet = (responseData) => {
    if (responseData?.success === false) return new Set();
    const slots = responseData?.data?.slots || responseData?.slots || [];
    return new Set(slots.filter(s => s.booked).map(s => normalizeSlot(s.microSlot)));
  };

  // ── Fetch + merge booked status into generated slots ──────────────────────
  const refreshMicroSlots = async (date, slotTime, generated, currentMicroSlot) => {
    try {
      const safeDate     = date.replace(/ /g, "%20");
      const safeSlotTime = slotTime.replace(/ /g, "%20");
      const r = await citizenAxios.get(`/citizen/micro-slots?date=${safeDate}&slotTime=${safeSlotTime}`);
      const bookedSet = extractBookedSet(r.data);

      const merged = generated.map(s => ({
        ...s,
        booked: bookedSet.has(normalizeSlot(s.microSlot)),
      }));

      setMicroSlots(merged);
      setAllSlotsFull(merged.length > 0 && merged.every(s => s.booked));

      if (currentMicroSlot && bookedSet.has(normalizeSlot(currentMicroSlot))) {
        showToast("⚠️ तुम्ही निवडलेला slot आत्ताच book झाला. कृपया दुसरा slot निवडा.", "error");
        setForm(prev => ({ ...prev, microSlot: "" }));
      }

      return bookedSet;
    } catch {
      return new Set();
    }
  };

  // ── Generate + fetch slots when date/slotTime changes ────────────────────
  useEffect(() => {
    if (step !== 1 || !form.preferredDate || !form.slotTime) {
      if (!form.preferredDate || !form.slotTime) {
        setMicroSlots([]); setAllSlotsFull(false);
      }
      return;
    }

    let cancelled = false;
    const capturedDate     = form.preferredDate;
    const capturedSlotTime = form.slotTime;

    const generated = generateMicroSlots(capturedSlotTime).map(s => ({ microSlot: s, booked: false }));
    setMicroSlots(generated);
    setAllSlotsFull(false);

    setMicroLoading(true);
    refreshMicroSlots(capturedDate, capturedSlotTime, generated, microSlotRef.current)
      .finally(() => { if (!cancelled) setMicroLoading(false); });

    const poll = setInterval(() => {
      if (cancelled) return;
      const gen = generateMicroSlots(capturedSlotTime).map(s => ({ microSlot: s, booked: false }));
      refreshMicroSlots(capturedDate, capturedSlotTime, gen, microSlotRef.current);
    }, 30000);

    return () => { cancelled = true; clearInterval(poll); };
  }, [form.preferredDate, form.slotTime, step]);

  // ── Camera ────────────────────────────────────────────────────────────────
  const videoRef  = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const [showCam, setShowCam] = useState(false);
  const [camErr,  setCamErr]  = useState("");

  const startCam = async () => {
    setCamErr("");
    try {
      const s = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = s;
      setShowCam(true);
      setTimeout(() => { if (videoRef.current) { videoRef.current.srcObject = s; videoRef.current.play(); } }, 100);
    } catch { setCamErr("Camera access denied. Browser permission द्या."); }
  };
  const capturePic = () => {
    const v = videoRef.current, c = canvasRef.current;
    if (!v||!c) return;
    c.width = v.videoWidth; c.height = v.videoHeight;
    c.getContext("2d").drawImage(v, 0, 0);
    c.toBlob(blob => {
      const file    = new File([blob], `photo-${Date.now()}.jpg`, { type:"image/jpeg" });
      const preview = URL.createObjectURL(blob);
      setForm(p => ({ ...p, visitorPhoto:file, photoPreview:preview }));
      stopCam();
    }, "image/jpeg");
  };
  const stopCam = () => {
    if (streamRef.current) { streamRef.current.getTracks().forEach(t => t.stop()); streamRef.current = null; }
    setShowCam(false);
  };

  const today          = new Date().toISOString().split("T")[0];
  const futureAvail    = availability.filter(a => a.date >= today);
  const selectedRecord = futureAvail.find(a => a.date === form.preferredDate);
  const availableSlots = selectedRecord?.timeSlots || [];

  // ── Step validation ───────────────────────────────────────────────────────
  const nextDisabled = (() => {
    if (step===0) return !form.fullName || !form.mobileNumber || !form.address;
    if (step===1) return !form.preferredDate || !form.slotTime || !form.microSlot;
    if (step===2) return !form.purpose || !form.ward;
    if (step===3) return !form.visitorPhoto;
    return false;
  })();

  const goNext = () => { setAnimDir("forward"); setStep(s=>s+1); };
  const goBack = () => { setAnimDir("back");    setStep(s=>s-1); };

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    if (!citizen) { navigate("/login"); return; }
    try {
      setSubmitting(true);

      try {
        const generated = generateMicroSlots(form.slotTime).map(s => ({ microSlot: s, booked: false }));
        const safeDate2     = form.preferredDate.replace(/ /g, "%20");
        const safeSlotTime2 = form.slotTime.replace(/ /g, "%20");
        const r = await citizenAxios.get(`/citizen/micro-slots?date=${safeDate2}&slotTime=${safeSlotTime2}`);
        const bookedSet = extractBookedSet(r.data);

        const merged = generated.map(s => ({ ...s, booked: bookedSet.has(normalizeSlot(s.microSlot)) }));
        setMicroSlots(merged);

        if (bookedSet.has(normalizeSlot(form.microSlot))) {
          showToast("❌ हा slot आत्ताच दुसऱ्याने book केला. कृपया दुसरा slot निवडा.", "error");
          setForm(prev => ({ ...prev, microSlot: "" }));
          setSubmitting(false);
          return;
        }
      } catch {
        // Pre-check failed — backend will be the final guard
      }

      // ✅ FIXED: Ensure citizenId is a valid non-empty string, never "undefined"
      const resolvedCitizenId = citizen?._id && citizen._id !== "undefined" ? citizen._id : "";

      const fd = new FormData();
      fd.append("citizenId",        resolvedCitizenId);
      fd.append("fullName",         form.fullName);
      fd.append("mobileNumber",     form.mobileNumber);
      fd.append("email",            form.email           || "");
      fd.append("address",          form.address);
      fd.append("pincode",          form.pincode         || "");
      fd.append("preferredDate",    form.preferredDate);
      fd.append("slotTime",         form.slotTime);
      fd.append("microSlot",        form.microSlot);
      fd.append("purpose",          form.purpose);
      fd.append("numberOfVisitors", form.numberOfVisitors);
      fd.append("visitedBefore",    String(form.visitedBefore));
      fd.append("ward",             form.ward);
      fd.append("submittedById",    resolvedCitizenId);
      fd.append("submittedByName",  citizen.fullName     || "");
      if (form.visitorPhoto) fd.append("visitorPhoto", form.visitorPhoto);

      const res = await citizenAxios.post("/citizen/book-appointment", fd, {
        headers: { "Content-Type": undefined },
      });
      if (!res.data.success) { showToast(res.data.message || "Booking failed ❌","error"); return; }

// const appt = res.data.data;
//       const mobile = appt.mobileNumber || form.mobileNumber;
const appt = res.data.data;
      const mobile = appt.mobileNumber || form.mobileNumber;
       const fName = appt.fullName || form.fullName;

      const formatShort = (d) => {
        if (!d) return "—";
        return new Date(d + "T00:00:00").toLocaleDateString("en-IN", {
          weekday:"short", day:"numeric", month:"short", year:"numeric"
        });
      };

      const statusMessage = {
        pending:   `Pending — Awaiting Mayor's Approval`,
        approved:  `Approved by Respected Mayor Ajiv Patil Sir`,
        rejected:  `Rejected by Admin`,
        cancelled: `Cancelled`
      }[appt.status] || appt.status;

  
    
      // const whatsupText = `Dear ${appt.fullName}, Your appointment with Respected Mayor Ajiv Patil Sir at Vasai Virar City Municipal Corporation has been successfully booked. Appointment Status: ${statusMessage}. Date: ${formatShort(appt.preferredDate)}, Time Slot: ${appt.microSlot || appt.slotTime}, Token No: ${appt.tokenId}. Please carry this Token No on your visit day. VVCMC Jan Samvaad`;

const whatsupText = `Dear ${fName}, Your appointment with Respected Mayor Ajiv Patil Sir at Vasai Virar City Municipal Corporation has been successfully booked. Appointment Status: ${statusMessage} Date: ${formatShort(appt.preferredDate)} Time Slot: ${appt.microSlot} Token No: ${appt.tokenId} Please carry this Token No on your visit day. SAAVI INFINET`;
    
    
    
      // await fetch(waApiUrl);
      const waApiUrl = `https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379324&number=${mobile}&message=${encodeURIComponent(whatsupText)}`;

fetch(waApiUrl, { method: "GET", mode: "no-cors" })
  .then(() => console.log(`✅ SMS sent to ${mobile}`))
  .catch((err) => console.error("SMS error:", err));


      setBooked(appt);

      // setBooked(res.data.data);
    } catch(e) {
      showToast(e?.response?.data?.message || "Server Error ❌","error");
    } finally { setSubmitting(false); }
  };

  // ── Success screen ────────────────────────────────────────────────────────
  if (booked) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          .book-root { min-height:calc(100vh - 64px); background:#f0f4f8; display:flex; align-items:center; justify-content:center; padding:32px 16px; font-family:'Plus Jakarta Sans',sans-serif; }
          @keyframes successPop { 0%{transform:scale(0.7);opacity:0} 70%{transform:scale(1.08)} 100%{transform:scale(1);opacity:1} }
          @keyframes fadeUpIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
        `}</style>
        <div className="book-root">
          <div style={{ background:"#fff", borderRadius:20, padding:"48px 40px", maxWidth:520, width:"100%", textAlign:"center", boxShadow:"0 8px 40px rgba(76,171,193,0.18)", border:"1.5px solid #b2e4ee", animation:"fadeUpIn .5s ease" }}>
            <div style={{ width:90, height:90, borderRadius:"50%", background:"linear-gradient(135deg,#4CABC1,#66A962)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:44, margin:"0 auto 20px", animation:"successPop .5s cubic-bezier(.34,1.56,.64,1) both", boxShadow:"0 8px 24px rgba(76,171,193,0.35)" }}>✅</div>
            <h2 style={{ fontSize:26, fontWeight:800, color:"#187488", marginBottom:8, fontFamily:"'Plus Jakarta Sans',sans-serif", background:"linear-gradient(135deg,#4CABC1,#66A962)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Appointment Booked!</h2>
            <p style={{ color:"#4a5568", marginBottom:24, fontSize:14, fontWeight:500 }}>तुमची appointment successfully book झाली आहे</p>
            <div style={{ background:"linear-gradient(135deg,#f0faf9,#f5fef5)", border:"1.5px solid #b2e4ee", borderRadius:12, padding:"20px 24px", marginBottom:24, textAlign:"left" }}>
              {[
                ["Token ID",   booked.tokenId],
                ["Date",       formatShortDate(booked.preferredDate)],
                ["Slot",       booked.slotTime],
                ["Your Time",  booked.microSlot || "—"],
                ["Status",     "⏳ Pending — Admin approval बाकी आहे"],
              ].map(([k,v]) => (
                <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"9px 0", borderBottom:"1px solid #d4eff5", fontSize:13 }}>
                  <span style={{ color:"#5a7a88", fontWeight:600 }}>{k}</span>
                  <span style={{ color:"#187488", fontWeight:700 }}>{v}</span>
                </div>
              ))}
            </div>
            {booked.qrCode && (
              <div style={{ marginBottom:20 }}>
                <p style={{ fontSize:12, color:"#6b7280", marginBottom:8, fontWeight:600 }}>QR Code — भेटीच्या दिवशी दाखवा</p>
                <img src={booked.qrCode} alt="QR" style={{ width:130, height:130 }} />
              </div>
            )}
            <button onClick={() => navigate("/my-appointments")} style={{ width:"100%", padding:"13px", borderRadius:10, border:"none", background:"linear-gradient(135deg,#4CABC1,#49ACC3)", color:"#fff", fontWeight:700, fontSize:15, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", boxShadow:"0 4px 16px rgba(76,171,193,0.4)", transition:"transform .15s" }}
              onMouseEnter={e=>e.target.style.transform="translateY(-1px)"}
              onMouseLeave={e=>e.target.style.transform="none"}
            >
              📋 My Appointments बघा
            </button>
          </div>
        </div>
      </>
    );
  }

  // ── Main form ─────────────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing:border-box; }

        :root {
          --teal:    #3a9aaf;
          --teal2:   #2e8a9e;
          --teal-dk: #1d6e80;
          --gold:    #C9963A;
          --gold2:   #b8851f;
          --gold-lt: #e8c47a;
          --green:   #5a9656;
          --cream:   #F5E7C2;
          --cream2:  #fdf6e3;
          --text-hd: #2c4a2e;
          --text-bd: #3a3a2a;
          --text-sm: #5a5a3a;
          --border:  #d4b870;
          --bg-form: #fdf8ee;
        }

        .book-root {
          min-height: calc(100vh - 64px);
          background: #f0ece0;
          padding: 32px 24px;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
        }

        .book-wrapper {
          width: 90%;
          margin: 0 auto;
          background: var(--cream2);
          border-radius: 14px;
          box-shadow: 0 6px 40px rgba(0,0,0,0.15);
          border: 1.5px solid #c8b870;
          overflow: hidden;
        }

        .book-titlebar {
          padding: 26px 40px 0;
          border-bottom: 2px solid #c8b870;
          background: linear-gradient(135deg, #3a9aaf 0%, #2a7a8e 100%);
        }
        .book-titlebar h1 {
          font-size: 22px; font-weight: 800; color: #ffffff;
          margin: 0 0 20px; position: relative; display: inline-block;
          text-shadow: 0 1px 4px rgba(0,0,0,0.2);
        }
        .book-titlebar h1::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 48px; height: 3px; background: var(--gold); border-radius: 2px;
        }

        .stepper { display: flex; gap: 6px; padding-bottom: 0; }
        .step-tab {
          display: flex; align-items: center; gap: 8px; padding: 10px 20px;
          font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.65);
          border-bottom: 3px solid transparent; cursor: default; white-space: nowrap;
          transition: all .25s; margin-bottom: -2px; border-radius: 8px 8px 0 0;
          background: rgba(255,255,255,0.1);
        }
        .step-tab.done   { background: rgba(255,255,255,0.15); color: #c8e8d0; }
        .step-tab.active { background: var(--cream); color: var(--teal-dk); border-bottom-color: var(--gold); }
        .step-dot {
          width: 22px; height: 22px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 800; flex-shrink: 0; transition: all .25s;
        }
        .step-dot.done    { background: var(--green); color: #fff; }
        .step-dot.active  { background: var(--gold); color: #fff; box-shadow: 0 2px 8px rgba(201,150,58,0.5); }
        .step-dot.pending { background: rgba(255,255,255,0.25); color: rgba(255,255,255,0.7); }

        .book-body { padding: 32px 40px 0; background: var(--cream2); }
        .section-title { font-size: 17px; font-weight: 800; color: var(--text-hd); margin: 0 0 5px; }
        .section-sub   { font-size: 13px; color: var(--text-sm); font-weight: 500; margin: 0 0 24px; }

        .field { margin-bottom: 20px; }
        .field label { display: block; font-size: 13px; font-weight: 700; color: var(--text-hd); margin-bottom: 7px; }
        .field label .req { color: #c0392b; margin-left: 2px; }

        .f-input {
          width: 100%; padding: 11px 14px; font-size: 14px; font-weight: 500;
          border: 1.5px solid var(--border); border-radius: 8px; outline: none;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
          box-sizing: border-box; transition: border-color .18s, box-shadow .18s;
          background: #fffef8; color: var(--text-bd);
        }
        .f-input:focus { border-color: var(--teal); box-shadow: 0 0 0 3px rgba(58,154,175,0.14); background: #fff; }
        .f-input::placeholder { color: #b0a070; font-weight: 400; }

        .f-grid-2     { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0 20px; }
        .f-grid-2-col { display: grid; grid-template-columns: 1fr 1fr; gap: 0 20px; }
        @media(max-width:640px){ .f-grid-2{ grid-template-columns:1fr; } .f-grid-2-col{ grid-template-columns:1fr; } }

        .date-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px,1fr)); gap: 10px; }
        .date-btn {
          padding: 11px 14px; border-radius: 8px; cursor: pointer; font-weight: 700;
          font-size: 13px; border: 1.5px solid var(--border); background: #fffef8;
          color: var(--text-bd); transition: all .18s; text-align: left;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
        }
        .date-btn:hover { border-color: var(--teal); background: #edf9f0; color: var(--teal-dk); transform: translateY(-1px); box-shadow: 0 3px 10px rgba(58,154,175,0.15); }
        .date-btn.sel   { border-color: var(--teal); background: #dff2f6; color: var(--teal-dk); box-shadow: 0 3px 10px rgba(58,154,175,0.2); font-weight: 800; }
        .date-btn .sub  { font-size: 11.5px; color: #8a7a50; font-weight: 500; margin-top: 3px; }

        .slot-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px,1fr)); gap: 10px; }
        .slot-btn {
          padding: 10px 12px; border-radius: 8px; cursor: pointer; font-weight: 700;
          font-size: 12.5px; border: 1.5px solid var(--border); background: #fffef8;
          color: var(--text-bd); transition: all .18s;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
        }
        .slot-btn:hover { border-color: var(--teal); background: #edf9f0; color: var(--teal-dk); transform: translateY(-1px); }
        .slot-btn.sel   { border-color: var(--teal); background: #dff2f6; color: var(--teal-dk); box-shadow: 0 2px 8px rgba(58,154,175,0.2); font-weight: 800; }

        .info-box { background: #edf6f9; border: 1.5px solid #8acada; border-radius: 8px; padding: 11px 16px; font-size: 13px; font-weight: 600; color: #1a5f7a; margin-bottom: 16px; }
        .selected-box { background: #eaf7ee; border: 1.5px solid #7ec89a; border-radius: 8px; padding: 11px 16px; font-weight: 700; color: #1a5e2a; font-size: 13px; margin-bottom: 16px; }
        .empty-box { background: linear-gradient(135deg,#fffbeb,#fef3c7); border: 1.5px solid #e8c070; border-radius: 10px; padding: 28px; text-align: center; margin-bottom: 16px; }

        .review-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media(max-width:640px){ .review-grid{ grid-template-columns:1fr; } }
        .review-card { background: #fffef5; border: 1.5px solid #d4c070; border-radius: 10px; padding: 16px 18px; }
        .review-card-title { font-size: 11.5px; font-weight: 800; color: var(--teal-dk); text-transform: uppercase; letter-spacing: .8px; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }
        .review-card-title::before { content:''; display:inline-block; width:14px; height:3px; background:var(--gold); border-radius:2px; }
        .review-row { display:flex; justify-content:space-between; padding:7px 0; border-bottom:1px solid #e8dfa0; font-size:13.5px; }
        .review-row:last-child { border-bottom:none; }
        .review-key { color:#6a5a30; font-weight:600; }
        .review-val { color:var(--text-hd); font-weight:700; text-align:right; max-width:55%; word-break:break-word; }

        .form-note { font-size:12.5px; color:#7a6a3a; font-weight:500; margin:12px 0 0; }

        .book-nav {
          display: flex; justify-content: flex-end; align-items: center; gap: 12px;
          padding: 24px 40px 32px; border-top: 1.5px solid #d4c070; margin-top: 28px; background: #fdf8ee;
        }
        .nav-cancel { padding: 11px 30px; border-radius: 8px; border: 1.5px solid #c0a850; background: #fffef0; color: var(--text-sm); font-weight: 700; font-size: 13.5px; cursor: pointer; font-family: 'Noto Sans','Mukta','Plus Jakarta Sans',sans-serif; transition: all .18s; }
        .nav-cancel:hover { background:#f5edd0; border-color:var(--gold); color:var(--gold2); }
        .nav-continue { padding: 11px 34px; border-radius: 8px; border: none; background: linear-gradient(135deg,#3a9aaf,#2e8a9e); color: #fff; font-weight: 800; font-size: 13.5px; cursor: pointer; font-family: 'Noto Sans','Mukta','Plus Jakarta Sans',sans-serif; display: flex; align-items: center; gap: 7px; transition: all .2s; box-shadow: 0 4px 14px rgba(58,154,175,0.4); letter-spacing: 0.2px; }
        .nav-continue:hover:not(:disabled) { background:linear-gradient(135deg,#2e8a9e,#1d6e80); transform:translateY(-1px); box-shadow:0 6px 18px rgba(58,154,175,0.45); }
        .nav-continue:disabled { background:#c8c0a0; cursor:not-allowed; box-shadow:none; color:#888070; }

        .step-progress-bar  { height:4px; background:#e8dfa0; }
        .step-progress-fill { height:100%; background:linear-gradient(90deg,var(--teal),var(--gold)); transition:width .4s cubic-bezier(.4,0,.2,1); }

        @keyframes slideInForward { from{opacity:0;transform:translateX(28px)} to{opacity:1;transform:none} }
        @keyframes slideInBack    { from{opacity:0;transform:translateX(-28px)} to{opacity:1;transform:none} }
        .step-body-forward { animation: slideInForward .3s cubic-bezier(.4,0,.2,1) both; }
        .step-body-back    { animation: slideInBack    .3s cubic-bezier(.4,0,.2,1) both; }

        .toast { position:fixed; top:80px; right:20px; z-index:9999; padding:12px 24px; border-radius:10px; font-weight:700; font-size:14px; color:#fff; box-shadow:0 6px 24px rgba(0,0,0,0.18); animation:toastIn .3s; font-family:'Plus Jakarta Sans',sans-serif; }
        @keyframes toastIn { from{opacity:0;transform:translateY(-10px) scale(.95)} to{opacity:1;transform:none} }
        @keyframes spin     { to{transform:rotate(360deg)} }

        .photo-btn-primary { padding:11px 24px; border-radius:8px; background:linear-gradient(135deg,#3a9aaf,#2e8a9e); color:#fff; font-weight:700; font-size:13.5px; cursor:pointer; font-family:'Noto Sans','Mukta','Plus Jakarta Sans',sans-serif; border:none; box-shadow:0 3px 10px rgba(58,154,175,0.3); transition:all .18s; }
        .photo-btn-primary:hover { transform:translateY(-1px); box-shadow:0 5px 14px rgba(58,154,175,0.4); }
        .photo-btn-secondary { padding:11px 24px; border-radius:8px; border:1.5px solid var(--teal); background:#fffef8; color:var(--teal-dk); font-weight:700; font-size:13.5px; cursor:pointer; font-family:'Noto Sans','Mukta','Plus Jakarta Sans',sans-serif; transition:all .18s; }
        .photo-btn-secondary:hover { background:#dff2f6; }

        .radio-group { display:flex; gap:16px; margin-top:8px; }
        .radio-label { display:flex; align-items:center; gap:8px; cursor:pointer; font-size:14px; font-weight:700; color:var(--text-bd); padding:8px 20px; border-radius:8px; border:1.5px solid var(--border); background:#fffef8; transition:all .15s; }
        .radio-label.selected { border-color:var(--teal); background:#dff2f6; color:var(--teal-dk); }
        .radio-label input { accentColor:var(--teal); width:15px; height:15px; }

        .visit-badge { display:inline-flex; align-items:center; gap:8px; background:linear-gradient(135deg,#1d6e80,#3a9aaf); color:#fff; padding:10px 18px; border-radius:10px; font-size:13.5px; font-weight:700; margin-top:4px; box-shadow:0 3px 12px rgba(58,154,175,0.35); letter-spacing:0.2px; }
        .visit-badge .badge-number { background:var(--gold); color:#fff; font-size:15px; font-weight:800; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 6px rgba(201,150,58,0.5); flex-shrink:0; }

        .last-photo-hint { display:flex; align-items:center; gap:10px; background:#edf9f0; border:1.5px solid #7ec89a; border-radius:10px; padding:10px 14px; margin-bottom:14px; font-size:13px; font-weight:600; color:#1a5e2a; }
      `}</style>

      {toast && <div className="toast" style={{ background: toast.type==="success" ? "var(--teal)" : "#dc2626" }}>{toast.msg}</div>}

      <div className="book-root">
        <div className="book-wrapper">

          {/* ── Title bar + Stepper ── */}
          <div className="book-titlebar">
            <h1>जनसंपर्क – Application Form</h1>
            <div className="stepper">
              {STEPS.map((s, i) => {
                const state = i < step ? "done" : i === step ? "active" : "pending";
                return (
                  <div key={i} className={`step-tab ${state}`}>
                    <div className={`step-dot ${state}`}>{state === "done" ? "✓" : i+1}</div>
                    {s.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Progress bar ── */}
          <div className="step-progress-bar">
            <div className="step-progress-fill" style={{ width:`${((step+1)/STEPS.length)*100}%` }} />
          </div>

          {/* ── Form body ── */}
          <div className="book-body">
            <div className={animDir === "forward" ? "step-body-forward" : "step-body-back"} key={step}>

              {/* ── Step 0: Personal Details ── */}
              {step===0 && (
                <div>
                  <p className="section-title">Personal Information</p>
                  <p className="section-sub">Please provide your basic details to proceed</p>

                  {citizenLoading && (
                    <div style={{ display:"flex", alignItems:"center", gap:8, color:"var(--teal)", fontSize:13, fontWeight:600, marginBottom:16 }}>
                      <span style={{ width:14, height:14, border:"2px solid rgba(58,154,175,0.3)", borderTopColor:"var(--teal)", borderRadius:"50%", animation:"spin .7s linear infinite", display:"inline-block" }}/>
                      माहिती लोड होत आहे...
                    </div>
                  )}

                  {citizenFound && visitCount !== null && (
                    <div className="visit-badge" style={{ marginBottom:20, display:"inline-flex" }}>
                      <span className="badge-number">{visitCount}</span>
                      <span>
                        {visitCount === 1
                          ? "हे या नागरिकाचे पहिले भेट असेल 🎉"
                          : `हे या नागरिकाचे ${visitCount}वे भेट असेल`}
                      </span>
                    </div>
                  )}

                  <div className="f-grid-2">
                    <div className="field">
                      <label>User Name</label>
                      <input className="f-input" value={form.username} onChange={ch("username")} placeholder="Username" />
                    </div>
                    <div className="field">
                      <label>Full Name <span className="req">*</span></label>
                      <input className="f-input" value={form.fullName} onChange={ch("fullName")} placeholder="आपले पूर्ण नाव" />
                    </div>
                    <div className="field">
                      <label>Mobile Number <span className="req">*</span></label>
                      <input className="f-input" type="tel" value={form.mobileNumber} onChange={ch("mobileNumber")} maxLength={10} placeholder="10 digit mobile" />
                    </div>
                  </div>
                  <div className="f-grid-2">
                    <div className="field">
                      <label>Email Address</label>
                      <input className="f-input" type="email" value={form.email} onChange={ch("email")} placeholder="Email (optional)" />
                    </div>
                    <div className="field">
                      <label>Pincode</label>
                      <input className="f-input" value={form.pincode} onChange={ch("pincode")} maxLength={6} placeholder="Pincode" />
                    </div>
                    <div className="field">
                      <label>Address <span className="req">*</span></label>
                      <input className="f-input" value={form.address} onChange={ch("address")} placeholder="पूर्ण पत्ता" />
                    </div>
                  </div>
                  <p className="form-note">* In order to process your appointment, all fields marked with an asterisk (*) are required.</p>
                </div>
              )}

              {/* ── Step 1: Appointment ── */}
              {step===1 && (
                <div>
                  <p className="section-title">Appointment Scheduling</p>
                  <p className="section-sub">Select your preferred date, time slot, and 15-minute appointment window</p>

                  {futureAvail.length === 0 ? (
                    <div className="empty-box">
                      <div style={{ fontSize:36, marginBottom:8 }}>📅</div>
                      <p style={{ color:"#92400e", fontWeight:700, margin:"0 0 4px", fontSize:15 }}>सध्या कोणत्याही dates available नाहीत</p>
                      <p style={{ color:"#a16207", fontSize:13.5, margin:0, fontWeight:500 }}>Admin कडून availability add होण्याची वाट पाहा</p>
                    </div>
                  ) : (
                    <>
                      <div className="field">
                        <label>Available Dates <span className="req">*</span></label>
                        <div className="date-grid">
                          {futureAvail.map((av, i) => (
                            <button key={i} type="button"
                              className={`date-btn${form.preferredDate===av.date?" sel":""}`}
                              onClick={() => setForm(p => ({ ...p, preferredDate: av.date, slotTime: "", slotStart: "", slotEnd: "", microSlot: "" }))}>
                              📅 {formatShortDate(av.date)}
                              <div className="sub">{av.timeSlots?.length} slot{av.timeSlots?.length!==1?"s":""} available</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {form.preferredDate && (
                        <div className="field">
                          <label>Select Time Slot <span className="req">*</span></label>
                          <div className="slot-grid">
                            {availableSlots.map((slot, i) => {
                              const str = `${slot.start} - ${slot.end}`;
                              return (
                                <button key={i} type="button"
                                  className={`slot-btn${form.slotTime===str?" sel":""}`}
                                  onClick={() => setForm(p => ({ ...p, slotTime: str, slotStart: slot.start, slotEnd: slot.end, microSlot: "" }))}>
                                  ⏰ {str}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {form.preferredDate && form.slotTime && (
                        <div className="field">
                          <label>15-Minute Appointment Slot निवडा <span className="req">*</span></label>
                          {microLoading ? (
                            <div style={{ color:"var(--teal)", fontSize:13, fontWeight:600, padding:"12px 0", display:"flex", alignItems:"center", gap:8 }}>
                              <span style={{ width:14, height:14, border:"2px solid rgba(58,154,175,0.3)", borderTopColor:"var(--teal)", borderRadius:"50%", animation:"spin .7s linear infinite", display:"inline-block" }}/>
                              Slots loading...
                            </div>
                          ) : allSlotsFull ? (
                            <div style={{ background:"#fee2e2", border:"1.5px solid #f87171", borderRadius:8, padding:"12px 16px", color:"#dc2626", fontWeight:700, fontSize:13 }}>
                              ❌ या slot साठी सर्व 15-minute appointments भरले आहेत. कृपया दुसरा slot निवडा.
                            </div>
                          ) : (
                            <>
                              <select className="f-input" style={{ cursor:"pointer" }} value={form.microSlot}
                                onChange={e => {
                                  const chosen = e.target.value;
                                  const slot = microSlots.find(s => s.microSlot === chosen);
                                  if (slot?.booked) { showToast("❌ हा slot आधीच book झाला आहे. कृपया दुसरा निवडा.", "error"); return; }
                                  setForm(p => ({ ...p, microSlot: chosen }));
                                }}>
                                <option value="">-- 15-minute slot निवडा --</option>
                                {microSlots.map(slot => (
                                  <option key={slot.microSlot} value={slot.microSlot} disabled={slot.booked}>
                                    {slot.booked ? "🔴" : "🟢"} {slot.microSlot}{slot.booked ? " (Booked)" : ""}
                                  </option>
                                ))}
                              </select>
                              {microSlots.length > 0 && (
                                <p style={{ fontSize:12, color:"var(--text-sm)", marginTop:8, fontWeight:500 }}>
                                  🟢 Available &nbsp;|&nbsp; 🔴 Booked &nbsp;|&nbsp;
                                  <strong>{microSlots.filter(s=>!s.booked).length}</strong> of <strong>{microSlots.length}</strong> slots available
                                </p>
                              )}
                              {form.microSlot && (
                                <div className="selected-box" style={{ marginTop:10, marginBottom:0 }}>
                                  ✅ तुमचा appointment time: <strong>{form.microSlot}</strong>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      )}

                      {form.preferredDate && form.slotTime && form.microSlot && (
                        <div className="selected-box">
                          📅 {formatShortDate(form.preferredDate)} &nbsp;|&nbsp; ⏰ {form.slotTime} &nbsp;|&nbsp; 🕐 {form.microSlot}
                        </div>
                      )}
                    </>
                  )}

                  <div className="info-box">ℹ️ <strong>Date निवडण्यासाठी:</strong> वरील available dates मधून date निवडा → time slot निवडा → 15-minute window निवडा</div>
                </div>
              )}

              {/* ── Step 2: Details ── */}
              {step===2 && (
                <div>
                  <p className="section-title">Visit Information</p>
                  <p className="section-sub">Provide details about your visit to the Mayor</p>
                  <div className="field">
                    <label>Reason for Visit <span className="req">*</span></label>
                    <textarea className="f-input" rows={4} value={form.purpose} onChange={ch("purpose")} placeholder="Mayor ला भेटण्याचे कारण विस्ताराने लिहा — आपली समस्या स्पष्टपणे मांडा" style={{ resize:"vertical" }} />
                  </div>
                  <div className="f-grid-2">
                    <div className="field">
                      <label>Number of Visitors <span className="req">*</span></label>
                      <input className="f-input" type="number" min="1" max="10" value={form.numberOfVisitors} onChange={ch("numberOfVisitors")} />
                    </div>
                    <div className="field">
                      <label>Ward <span className="req">*</span></label>
                      <select className="f-input" value={form.ward} onChange={ch("ward")} style={{ cursor:"pointer" }}>
                        <option value="">Select Ward</option>
                        {["Ward A","Ward B","Ward C","Ward D","Ward E","Ward F","Ward G","Ward H","Ward I","Ward J","General"].map(w => <option key={w}>{w}</option>)}
                      </select>
                      {form.ward && citizenFound && (
                        <p style={{ fontSize:12, color:"#16a34a", fontWeight:600, marginTop:4 }}>✅ मागील भेटीवरून auto-filled</p>
                      )}
                    </div>
                    <div className="field">
                      <label>Have you visited before? <span className="req">*</span></label>
                      <div className="radio-group">
                        {["No","Yes"].map(v => (
                          <label key={v} className={`radio-label${form.visitedBefore===(v==="Yes")?" selected":""}`}>
                            <input type="radio" name="vb" value={v}
                              checked={form.visitedBefore===(v==="Yes")}
                              onChange={() => setForm(p=>({...p,visitedBefore:v==="Yes"}))}
                              style={{ accentColor:"var(--teal)", width:15, height:15 }} />
                            {v}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Step 3: Photo ── */}
              {step===3 && (
                <div>
                  <p className="section-title">Visitor Photo</p>
                  <p className="section-sub">Please upload or capture a clear photo for identification at the Mayor's office</p>

                  {lastPhotoPreview && !form.photoPreview && (
                    <div className="last-photo-hint">
                      {/* <img src={`${import.meta.env.VITE_BASE_URL || "http://localhost:4200"}/${lastPhotoPreview}`} */}
                        <img src={`${lastPhotoPreview}`}
                        alt="last visit"
                        style={{ width:48, height:48, borderRadius:"50%", objectFit:"cover", border:"2px solid #7ec89a", flexShrink:0 }}
                        onError={e => { e.target.style.display="none"; }}
                      />
                      <div>
                        <p style={{ margin:0, fontWeight:700, fontSize:13 }}>मागील भेटीचा फोटो उपलब्ध आहे</p>
                        <button type="button"
                          style={{ marginTop:4, fontSize:12, color:"var(--teal)", fontWeight:700, background:"none", border:"none", cursor:"pointer", padding:0, textDecoration:"underline" }}
                          // onClick={() => {
                          //   setForm(p => ({ ...p, photoPreview: `${import.meta.env.VITE_BASE_URL || "http://localhost:4200"}/${lastPhotoPreview}`, visitorPhoto: lastPhotoPreview }));
                          // }}
                          onClick={() => {
  setForm(p => ({
    ...p,
    photoPreview: lastPhotoPreview,   // ✅ direct Cloudinary URL
    visitorPhoto: lastPhotoPreview
  }));
}}
                          >
                          हाच फोटो वापरा ↗
                        </button>
                      </div>
                    </div>
                  )}

                  <div style={{ display:"flex", gap:12, marginBottom:20 }}>
                    <label className="photo-btn-primary">
                      📁 Upload Photo
                      <input type="file" accept="image/*" style={{ display:"none" }} onChange={e => { const f=e.target.files[0]; if(f) setForm(p=>({...p,visitorPhoto:f,photoPreview:URL.createObjectURL(f)})); }} />
                    </label>
                    <button type="button" onClick={startCam} className="photo-btn-secondary">📷 Use Webcam</button>
                  </div>
                  {showCam ? (
                    <div style={{ position:"relative", borderRadius:12, overflow:"hidden", border:"2px solid var(--border)", marginBottom:16 }}>
                      <button type="button" onClick={stopCam} style={{ position:"absolute", top:10, right:10, zIndex:10, width:30, height:30, borderRadius:"50%", background:"#ef4444", color:"#fff", border:"none", cursor:"pointer", fontWeight:800 }}>✕</button>
                      <video ref={videoRef} autoPlay playsInline style={{ width:"100%", maxHeight:340, objectFit:"cover", display:"block" }} />
                      <canvas ref={canvasRef} style={{ display:"none" }} />
                      <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:16, background:"linear-gradient(transparent,rgba(0,0,0,0.55))", display:"flex", justifyContent:"center" }}>
                        <button type="button" onClick={capturePic} style={{ padding:"11px 30px", borderRadius:9, border:"none", background:"linear-gradient(135deg,var(--teal),var(--green))", color:"#fff", fontWeight:800, fontSize:14, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", boxShadow:"0 4px 16px rgba(76,171,193,0.4)" }}>📸 Capture Photo</button>
                      </div>
                    </div>
                  ) : (
                    <div style={{ border:"2.5px dashed #b2d8e4", borderRadius:14, padding:36, textAlign:"center", background:"linear-gradient(135deg,#f7fcfe,#f5fef5)", marginBottom:16, transition:"all .2s" }}>
                      {form.photoPreview ? (
                        <>
                          <img src={form.photoPreview} alt="preview" style={{ width:110, height:110, borderRadius:"50%", objectFit:"cover", border:"3px solid var(--teal)", marginBottom:14, boxShadow:"0 4px 20px rgba(76,171,193,0.3)" }} />
                          <p style={{ color:"var(--green)", fontWeight:700, fontSize:14, margin:"0 0 4px" }}>✅ Photo selected</p>
                          <p style={{ color:"#6a9aaa", fontSize:12.5, margin:0, fontWeight:500 }}>Click "Upload Photo" to change</p>
                        </>
                      ) : (
                        <>
                          <div style={{ fontSize:44, marginBottom:12, color:"#b2d8e4" }}>📷</div>
                          <p style={{ color:"#6a9aaa", fontSize:14, margin:0, fontWeight:600 }}>Upload किंवा camera वापरून photo द्या</p>
                        </>
                      )}
                    </div>
                  )}
                  {camErr && <p style={{ color:"#ef4444", fontSize:13, marginTop:4, fontWeight:600 }}>{camErr}</p>}
                </div>
              )}

              {/* ── Step 4: Review ── */}
              {step===4 && (
                <div>
                  <p className="section-title">Review & Submit</p>
                  <p className="section-sub">सर्व माहिती verify करा आणि submit करा</p>
                  <div className="review-grid">
                    {[
                      { title:"Personal Info", rows:[
                          ["Name",    form.fullName],
                          ["Mobile",  form.mobileNumber],
                          ["Email",   form.email||"—"],
                          ["Address", form.address],
                          ["Pincode", form.pincode||"—"],
                        ]
                      },
                      { title:"Appointment", rows:[
                          ["Date",      formatShortDate(form.preferredDate)],
                          ["Slot",      form.slotTime],
                          ["My Time",   form.microSlot],
                        ]
                      },
                      { title:"Visit Details", rows:[
                          ["Purpose",        form.purpose],
                          ["Visitors",       form.numberOfVisitors],
                          ["Visited Before", form.visitedBefore?"Yes":"No"],
                          ["Ward",           form.ward],
                          ...(visitCount !== null ? [["Visit Number", `#${visitCount}`]] : []),
                        ]
                      },
                    ].map((sec,i) => (
                      <div key={i} className="review-card" style={{ animationDelay:`${i*80}ms` }}>
                        <div className="review-card-title">{sec.title}</div>
                        {sec.rows.map(([k,v]) => <div key={k} className="review-row"><span className="review-key">{k}</span><span className="review-val">{v}</span></div>)}
                      </div>
                    ))}
                    {form.photoPreview && (
                      <div className="review-card" style={{ textAlign:"center" }}>
                        <div className="review-card-title">Visitor Photo</div>
                        <img src={form.photoPreview} alt="v" style={{ width:88, height:88, borderRadius:"50%", objectFit:"cover", border:"3px solid var(--teal)", marginTop:8, boxShadow:"0 4px 16px rgba(76,171,193,0.25)" }} />
                      </div>
                    )}
                  </div>
                  <div style={{ background:"linear-gradient(135deg,#fffbeb,#fef3c7)", border:"1.5px solid #fcd34d", borderRadius:10, padding:"13px 18px", margin:"16px 0 0", fontSize:13.5, color:"#92400e", fontWeight:600 }}>
                    ⚠️ Submit केल्यानंतर Admin approval नंतर appointment confirm होईल.
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* ── Nav ── */}
          <div className="book-nav">
            <button className="nav-cancel" onClick={() => step > 0 ? goBack() : navigate(-1)}>
              {step > 0 ? "← Back" : "CANCEL"}
            </button>
            {step < STEPS.length-1 ? (
              <button className="nav-continue" disabled={nextDisabled} onClick={goNext}>CONTINUE →</button>
            ) : (
              <button className="nav-continue" disabled={submitting} onClick={handleSubmit}>
                {submitting
                  ? <><span style={{ width:14, height:14, border:"2px solid rgba(255,255,255,0.4)", borderTopColor:"#fff", borderRadius:"50%", animation:"spin .7s linear infinite", display:"inline-block" }} /> Submitting...</>
                  : "✔ Submit Appointment"}
              </button>
            )}
          </div>

        </div>
      </div>
    </>
  );
}