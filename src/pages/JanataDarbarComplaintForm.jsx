
import React, { useState, useRef } from "react";
import axiosInstance from "../services/axiosInstance";
import {
  officeTopAuthority,
  categoryHeads,
  departmentsData,
} from "../data/officeData";

// ✅ talukas at top level
const talukas = ["Palghar","Vasai","Dahanu","Talasari","Jawhar","Mokhada","Vikramgad","Wada"];

const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input type={type} name={name} value={value} onChange={onChange}
      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
  </div>
);

const Textarea = ({ label, name, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <textarea name={name} value={value} onChange={onChange} rows="3"
      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
  </div>
);

const Select = ({ label, name, value, onChange, options, disabled = false }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <select name={name} value={value} onChange={onChange} disabled={disabled}
      className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}>
      <option value="">Select {label}</option>
      {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
    </select>
  </div>
);

const SectionTitle = ({ title }) => (
  <div className="mb-4 mt-6 first:mt-0">
    <h3 className="text-sm font-semibold text-blue-700 uppercase tracking-wider border-b border-blue-100 pb-2">{title}</h3>
  </div>
);

export default function JanataDarbarComplaintForm() {
  const generateReferenceNumber = () => {
    const today = new Date();
    return `JD/${today.getFullYear()}/${String(today.getMonth()+1).padStart(2,"0")}/${String(today.getDate()).padStart(2,"0")}/${Math.floor(100+Math.random()*900)}`;
  };

  const [showCamera, setShowCamera] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const [formData, setFormData] = useState({
    inwardNo: generateReferenceNumber(),
    submissionDate: new Date().toISOString().split("T")[0],
    fullName: "", mobile: "", email: "", wardNo: "", address: "", pincode: "",
    category: "", identityType: "", identityNumber: "", taluka: "", district: "",
    subject: "", description: "", office: "Mahanagarpalika Office", mainDepartment: "", subDepartment: "",
    priority: "Normal", tagTo: [], followUp: "Yes",
    documents: null, status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      const top = officeTopAuthority[formData.office];
      const sub = categoryHeads[formData.office]?.[formData.mainDepartment];
      const autoInclude = (value === sub && top && top !== value) ? [top] : [];
      const newTagTo = [...new Set([...formData.tagTo, ...autoInclude, value])];
      setFormData({ ...formData, tagTo: newTagTo });
    } else {
      setFormData({ ...formData, tagTo: formData.tagTo.filter((item) => item !== value) });
    }
  };

  const startCamera = async () => {
    setCameraError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      setShowCamera(true);
      setTimeout(() => {
        if (videoRef.current) { videoRef.current.srcObject = stream; videoRef.current.play(); }
      }, 100);
    } catch (err) {
      setCameraError("Camera access denied. Please allow camera permission.");
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    canvas.toBlob((blob) => {
      const file = new File([blob], `captured-photo-${Date.now()}.jpg`, { type: "image/jpeg" });
      setFormData({ ...formData, documents: file });
      stopCamera();
    }, "image/jpeg");
  };

  const stopCamera = () => {
    if (streamRef.current) { streamRef.current.getTracks().forEach((t) => t.stop()); streamRef.current = null; }
    setShowCamera(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.fullName || !formData.mobile || !formData.subject) {
        alert("Required fields missing: Full Name, Mobile, and Subject are required"); return;
      }
      if (!formData.documents) {
        alert("Document file is required. Please upload a file before submitting."); return;
      }

      const authUserRaw = localStorage.getItem("authUser");
      const authUser = authUserRaw ? JSON.parse(authUserRaw) : null;

      const formPayload = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key !== "documents") {
          if (Array.isArray(formData[key])) formPayload.append(key, JSON.stringify(formData[key]));
          else formPayload.append(key, formData[key]);
        }
      });
      if (formData.documents) formPayload.append("documents", formData.documents);

      if (authUser) {
        formPayload.append("submittedById",       authUser.id             || "");
        formPayload.append("submittedByName",     authUser.fullName       || "");
        formPayload.append("submittedByRole",     authUser.role           || "");
        formPayload.append("submittedByUserName", authUser.userName       || "");
        formPayload.append("submittedByDept",     authUser.departmentName || "");
      }

      const res = await axiosInstance.post("/inwardAdd", formPayload, { headers: { "Content-Type": "multipart/form-data" } });
      const data = res.data;
      if (!data.success) { alert(data.message || "Something went wrong"); return; }
      alert("Inward Application Added Successfully");
      setFormData({
        inwardNo: generateReferenceNumber(), submissionDate: new Date().toISOString().split("T")[0],
        fullName: "", mobile: "", email: "", wardNo: "", address: "", pincode: "",
        category: "", identityType: "", identityNumber: "", taluka: "", district: "",
        subject: "", description: "", office: "Mahanagarpalika Office", mainDepartment: "", subDepartment: "",
        priority: "Normal", tagTo: [], followUp: "Yes", documents: null, status: "Pending",
      });
    } catch (error) {
      alert(error?.response?.data?.message || "Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-4 md:p-6">
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-3xl">

        {/* Header */}
        <div className="px-8 py-5 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800">Application Form</h2>
          <p className="text-xs text-gray-400 mt-0.5">Vasai-Virar City Municipal Corporation</p>
        </div>

        {/* Scrollable Form Body */}
        <div className="px-8 py-6 overflow-y-auto" style={{ maxHeight: "calc(100vh - 180px)" }}>
          <form onSubmit={handleSubmit}>

            {/* ── Citizen Details ── */}
            {/* <SectionTitle title="Citizen Details" /> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <Input label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange}/>
              <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange}/>
              <Input label="Email" name="email" value={formData.email} onChange={handleChange}/>
              <Select label="Category" name="category" value={formData.category} onChange={handleChange} options={["Company","NGO","Individual","Other"]}/>
            </div>
            <Textarea label="Address" name="address" value={formData.address} onChange={handleChange}/>

            {/* ── Location ── */}
            {/* <SectionTitle title="Location" /> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <Select label="Taluka" name="taluka" value={formData.taluka} onChange={handleChange} options={talukas}/>
            </div>

            {/* ── Complaint ── */}
            {/* <SectionTitle title="Complaint" /> */}
            <Input label="Complaint Subject" name="subject" value={formData.subject} onChange={handleChange}/>
            <Textarea label="Complaint Description" name="description" value={formData.description} onChange={handleChange}/>

            {/* ── Office & Workflow ── */}
            {/* <SectionTitle title="Office & Workflow" /> */}
            {/* Office hardcoded as Mahanagarpalika Office */}
            {(departmentsData[formData.office] || []).length > 0 && (
              <Select label="Department" name="mainDepartment" value={formData.mainDepartment}
                onChange={(e) => setFormData(prev => ({ ...prev, mainDepartment: e.target.value, tagTo: [] }))}
                options={departmentsData[formData.office] || []}/>
            )}
            {(formData.mainDepartment || (departmentsData[formData.office] || []).length === 0) && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Tag To (Authority)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[officeTopAuthority[formData.office], categoryHeads[formData.office]?.[formData.mainDepartment]]
                    .filter(Boolean).filter((v, i, a) => a.indexOf(v) === i)
                    .map((role, i) => (
                      <label key={i} className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg border cursor-pointer hover:bg-blue-50">
                        <input type="checkbox" value={role} checked={formData.tagTo.includes(role)} onChange={handleTagChange} className="accent-blue-600 w-4 h-4"/>
                        <span className="text-sm">{role}</span>
                      </label>
                    ))}
                </div>
              </div>
            )}
            <Select label="Priority" name="priority" value={formData.priority} onChange={handleChange} options={["Normal","Urgent","Emergency"]}/>

            {/* ── Documents ── */}
            <SectionTitle title="Documents" />
            {showCamera ? (
              <div className="mb-4 relative border-2 border-blue-500 rounded-lg overflow-hidden bg-black">
                <button type="button" onClick={stopCamera} className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-sm shadow-lg">✕</button>
                <video ref={videoRef} autoPlay playsInline className="w-full" style={{ maxHeight:"360px", objectFit:"cover", display:"block" }}/>
                <canvas ref={canvasRef} className="hidden"/>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex justify-center">
                  <button type="button" onClick={capturePhoto} className="px-8 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-lg">📸 Capture Photo</button>
                </div>
              </div>
            ) : (
              <div className="mb-4 p-4 border-2 border-dashed border-blue-400 rounded-lg bg-blue-50">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <input type="file" onChange={(e) => setFormData(prev => ({ ...prev, documents: e.target.files[0] }))} className="flex-1 text-sm"/>
                  <button type="button" onClick={startCamera} className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 whitespace-nowrap">📷 Camera</button>
                </div>
              </div>
            )}
            {cameraError && <p className="text-red-600 text-xs mb-2">{cameraError}</p>}
            {formData.documents ? (
              <div className="bg-green-50 border border-green-300 rounded-lg p-3 mb-4">
                <p className="text-green-800 text-sm font-medium">✅ File Selected: {formData.documents.name}</p>
                <p className="text-green-700 text-xs">Size: {(formData.documents.size / 1024).toFixed(2)} KB</p>
              </div>
            ) : (
              <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 mb-4">
                <p className="text-yellow-800 text-sm">Please upload a file to proceed with submission</p>
              </div>
            )}

            {/* ── Submit ── */}
            <div className="pt-2 pb-2">
              <button type="submit" disabled={!formData.documents}
                className={`w-full py-3 rounded-lg text-white font-semibold text-sm transition ${formData.documents ? "bg-green-600 hover:bg-green-700 cursor-pointer" : "bg-gray-300 cursor-not-allowed opacity-60"}`}>
                {formData.documents ? "✔ Submit Application" : "Upload Document to Submit"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}