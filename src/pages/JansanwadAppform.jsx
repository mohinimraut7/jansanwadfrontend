// *** Jansanwad ***




// import React, { useState, useRef,useEffect } from "react";
// import axiosInstance from "../services/axiosInstance";
// import {
//   officeTopAuthority,
//   categoryHeads,
//   departmentsData,
// } from "../data/officeData";
//  import { useNavigate } from "react-router-dom";

// // ✅ talukas at top level
// const talukas = ["Palghar","Vasai","Dahanu","Talasari","Jawhar","Mokhada","Vikramgad","Wada"];

// const Input = ({ label, name, value, onChange, type = "text" }) => (
//   <div className="mb-4">
//     <label className="block text-sm font-medium mb-1">{label}</label>
//     <input type={type} name={name} value={value} onChange={onChange}
//       className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
//   </div>
// );

// const Textarea = ({ label, name, value, onChange }) => (
//   <div className="mb-4">
//     <label className="block text-sm font-medium mb-1">{label}</label>
//     <textarea name={name} value={value} onChange={onChange} rows="3"
//       className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
//   </div>
// );

// const Select = ({ label, name, value, onChange, options, disabled = false }) => (
//   <div className="mb-4">
//     <label className="block text-sm font-medium mb-1">{label}</label>
//     <select name={name} value={value} onChange={onChange} disabled={disabled}
//       className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}>
//       <option value="">Select {label}</option>
//       {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
//     </select>
//   </div>
// );

// const SectionTitle = ({ title }) => (
//   <div className="mb-4 mt-6 first:mt-0">
//     <h3 className="text-sm font-semibold text-blue-700 uppercase tracking-wider border-b border-blue-100 pb-2">{title}</h3>
//   </div>
// );

// export default function JansanwadAppform({ onClose }) {
//   const navigate = useNavigate();

//    const handleClose = onClose || (() => navigate(-1));

//   const generateReferenceNumber = () => {
//     const today = new Date();
//     return `JD/${today.getFullYear()}/${String(today.getMonth()+1).padStart(2,"0")}/${String(today.getDate()).padStart(2,"0")}/${Math.floor(100+Math.random()*900)}`;
//   };

//   const [showCamera, setShowCamera] = useState(false);
//   const [cameraError, setCameraError] = useState("");
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const streamRef = useRef(null);

//   const videoRef2  = useRef(null);
// const canvasRef2 = useRef(null);
// const streamRef2 = useRef(null);
// const [showCamera2, setShowCamera2] = useState(false);
// const [cameraError2, setCameraError2] = useState("");

//   const [formData, setFormData] = useState({
//     inwardNo: generateReferenceNumber(),
//     submissionDate: new Date().toISOString().split("T")[0],
//     fullName: "", mobile: "", email: "", wardNo: "", address: "", pincode: "",
//     category: "", identityType: "", identityNumber: "", taluka: "", district: "",
//     subject: "", description: "", office: "Mahanagarpalika Office", mainDepartment: "", subDepartment: "",
//     priority: "Normal", tagTo: [], followUp: "Yes",
//     documents: null, status: "Pending",
//       visitorPhoto: null,   // ✅ ADD
//   photoPreview: null,   // ✅ ADD
//   });
// const [departments, setDepartments] = useState([]);



// useEffect(() => {
//   const fetchDepartments = async () => {
//     try {
//       const res = await axiosInstance.get("/getUsers");
//       if (res.data.success) {
//         // Extract unique departmentNames
//         const uniqueDepts = [...new Set(
//           res.data.users
//             .map((u) => u.departmentName)
//             .filter(Boolean)
//         )];
//         setDepartments(uniqueDepts);
//       }
//     } catch (err) {
//       console.error("Department fetch error:", err);
//     }
//   };
//   fetchDepartments();
// }, []);





//   const wards = ["Ward-A","Ward-B","Ward-C","Ward-D","Ward-E","Ward-F","Ward-G","Ward-H","Ward-I","General"];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleTagChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       const top = officeTopAuthority[formData.office];
//       const sub = categoryHeads[formData.office]?.[formData.mainDepartment];
//       const autoInclude = (value === sub && top && top !== value) ? [top] : [];
//       const newTagTo = [...new Set([...formData.tagTo, ...autoInclude, value])];
//       setFormData({ ...formData, tagTo: newTagTo });
//     } else {
//       setFormData({ ...formData, tagTo: formData.tagTo.filter((item) => item !== value) });
//     }
//   };

//   const startCamera = async () => {
//     setCameraError("");
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       streamRef.current = stream;
//       setShowCamera(true);
//       setTimeout(() => {
//         if (videoRef.current) { videoRef.current.srcObject = stream; videoRef.current.play(); }
//       }, 100);
//     } catch (err) {
//       setCameraError("Camera access denied. Please allow camera permission.");
//     }
//   };

//   const capturePhoto = () => {
//     const video = videoRef.current;
//     const canvas = canvasRef.current;
//     if (!video || !canvas) return;
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     canvas.getContext("2d").drawImage(video, 0, 0);
//     canvas.toBlob((blob) => {
//       const file = new File([blob], `captured-photo-${Date.now()}.jpg`, { type: "image/jpeg" });
//       setFormData({ ...formData, documents: file });
//       stopCamera();
//     }, "image/jpeg");
//   };

//   const stopCamera = () => {
//     if (streamRef.current) { streamRef.current.getTracks().forEach((t) => t.stop()); streamRef.current = null; }
//     setShowCamera(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (!formData.fullName || !formData.mobile || !formData.subject) {
//         alert("Required fields missing: Full Name, Mobile, and Subject are required"); return;
//       }
//       if (!formData.documents) {
//         alert("Document file is required. Please upload a file before submitting."); return;
//       }

//       const authUserRaw = localStorage.getItem("authUser");
//       const authUser = authUserRaw ? JSON.parse(authUserRaw) : null;

//       const formPayload = new FormData();
//       // Object.keys(formData).forEach((key) => {
//       //   if (key !== "documents") {
//       //     if (Array.isArray(formData[key])) formPayload.append(key, JSON.stringify(formData[key]));
//       //     else formPayload.append(key, formData[key]);
//       //   }
//       // });

//       Object.keys(formData).forEach((key) => {
//   if (key === "documents" || key === "visitorPhoto" || key === "photoPreview") return;
//   if (Array.isArray(formData[key])) formPayload.append(key, JSON.stringify(formData[key]));
//   else if (formData[key] !== null && formData[key] !== undefined) formPayload.append(key, formData[key]);
// });
//       if (formData.documents) formPayload.append("documents", formData.documents);
//       if (formData.visitorPhoto && typeof formData.visitorPhoto !== "string") {
//   formPayload.append("visitorPhoto", formData.visitorPhoto);
// }

//       if (authUser) {
//         formPayload.append("submittedById",       authUser.id             || "");
//         formPayload.append("submittedByName",     authUser.fullName       || "");
//         formPayload.append("submittedByRole",     authUser.role           || "");
//         formPayload.append("submittedByUserName", authUser.userName       || "");
//         formPayload.append("submittedByDept",     authUser.departmentName || "");
//       }

//       const res = await axiosInstance.post("/inwardAdd", formPayload, { headers: { "Content-Type": "multipart/form-data" } });
//       const data = res.data;
//       if (!data.success) { alert(data.message || "Something went wrong"); return; }
//       // alert("Inward Application Added Successfully");
//       // alert(`✅ Application submitted successfully!\nToken Number: ${data.tokenNo}`);
//       // setFormData({
//         alert(`✅ Application submitted successfully!\nToken Number: ${data.tokenNo}`);
//       if (onClose) onClose();
//       setFormData({
//         inwardNo: generateReferenceNumber(), submissionDate: new Date().toISOString().split("T")[0],
//         fullName: "", mobile: "", email: "", wardNo: "", address: "", pincode: "",
//         category: "", identityType: "", identityNumber: "", taluka: "",ward:"",district: "",
//         subject: "", description: "", office: "Mahanagarpalika Office", mainDepartment: "", subDepartment: "",
//         priority: "Normal", tagTo: [], followUp: "Yes", documents: null, status: "Pending",
//       });
//     } catch (error) {
//       alert(error?.response?.data?.message || "Server Error");
//     }
//   };



//   const startCamera2 = async () => {
//   setCameraError2("");
//   try {
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//     streamRef2.current = stream;
//     setShowCamera2(true);
//     setTimeout(() => {
//       if (videoRef2.current) { videoRef2.current.srcObject = stream; videoRef2.current.play(); }
//     }, 100);
//   } catch (err) {
//     setCameraError2("Camera access denied. Please allow camera permission.");
//   }
// };

// const capturePhoto2 = () => {
//   const video = videoRef2.current;
//   const canvas = canvasRef2.current;
//   if (!video || !canvas) return;
//   canvas.width = video.videoWidth;
//   canvas.height = video.videoHeight;
//   canvas.getContext("2d").drawImage(video, 0, 0);
//   canvas.toBlob((blob) => {
//     const file    = new File([blob], `visitor-photo-${Date.now()}.jpg`, { type: "image/jpeg" });
//     const preview = URL.createObjectURL(blob);
//     setFormData(prev => ({ ...prev, visitorPhoto: file, photoPreview: preview }));
//     stopCamera2();
//   }, "image/jpeg");
// };

// const stopCamera2 = () => {
//   if (streamRef2.current) { streamRef2.current.getTracks().forEach(t => t.stop()); streamRef2.current = null; }
//   setShowCamera2(false);
// };

//   return (

//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//       <div className="bg-white shadow-2xl rounded-xl w-full max-w-3xl max-h-[95vh] flex flex-col">

//         {/* Header */}
//        <div className="px-8 py-5 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
//   <div>
//     <h2 className="text-lg font-bold text-gray-800">Application Form</h2>
//     {/* <p className="text-xs text-gray-400 mt-0.5">Vasai-Virar City Municipal Corporation</p> */}
//   </div>

//   {/* ✅ Always show X button */}
//   <button
//     onClick={handleClose}
//     className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold transition-colors text-sm"
//   >
//     ✕
//   </button>
// </div>

//         {/* Scrollable Form Body */}
//         {/* <div className="px-8 py-6 overflow-y-auto" style={{ maxHeight: "calc(100vh - 180px)" }}> */}
//         <div className="px-8 py-6 overflow-y-auto flex-1">
//           <form onSubmit={handleSubmit}>

//             {/* ── Citizen Details ── */}
//             {/* <SectionTitle title="Citizen Details" /> */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
//               <Input label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange}/>
//               <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange}/>
//               <Input label="Email" name="email" value={formData.email} onChange={handleChange}/>
//               <Select label="Category" name="category" value={formData.category} onChange={handleChange} options={["Company","NGO","Individual","Other"]}/>
//             </div>
//             <Textarea label="Address" name="address" value={formData.address} onChange={handleChange}/>
            

//             {/* ── Location ── */}
//             {/* <SectionTitle title="Location" /> */}

//             {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
//               <Select label="Taluka" name="taluka" value={formData.taluka} onChange={handleChange} options={talukas}/>
//             </div> */}

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
//   <Select
//     label="Ward"
//     name="ward"
//     value={formData.ward}
//     onChange={handleChange}
//     options={wards}
//   />
// </div>

//             {/* ── Complaint ── */}
//             {/* <SectionTitle title="Complaint" /> */}
//             <Input label="Complaint Subject" name="subject" value={formData.subject} onChange={handleChange}/>
//             <Textarea label="Complaint Description" name="description" value={formData.description} onChange={handleChange}/>

//             {/* ── Office & Workflow ── */}
//             {/* <SectionTitle title="Office & Workflow" /> */}
//             {/* Office hardcoded as Mahanagarpalika Office */}


//             {/* {(departmentsData[formData.office] || []).length > 0 && (
//               <Select label="Department" name="mainDepartment" value={formData.mainDepartment}
//                 onChange={(e) => setFormData(prev => ({ ...prev, mainDepartment: e.target.value, tagTo: [] }))}
//                 options={departmentsData[formData.office] || []}/>
//             )} */}

//   {/* Department Multi-Select */}
// <div className="mb-4">
//   <label className="block text-sm font-medium mb-2">Assign to Department</label>
//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-3 bg-gray-50">
//     {departments.map((dept, i) => (
//       <label key={i} className="flex items-center gap-2 bg-white p-2 rounded-lg border cursor-pointer hover:bg-blue-50 text-sm">
//         <input
//           type="checkbox"
//           value={dept}
//           checked={formData.tagTo.includes(dept)}
//           onChange={handleTagChange}
//           className="accent-blue-600 w-4 h-4"
//         />
//         <span>{dept}</span>
//       </label>
//     ))}
//   </div>
// </div>





//             {(formData.mainDepartment || (departmentsData[formData.office] || []).length === 0) && (
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-2">Tag To (Authority)</label>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   {[officeTopAuthority[formData.office], categoryHeads[formData.office]?.[formData.mainDepartment]]
//                     .filter(Boolean).filter((v, i, a) => a.indexOf(v) === i)
//                     .map((role, i) => (
//                       <label key={i} className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg border cursor-pointer hover:bg-blue-50">
//                         <input type="checkbox" value={role} checked={formData.tagTo.includes(role)} onChange={handleTagChange} className="accent-blue-600 w-4 h-4"/>
//                         <span className="text-sm">{role}</span>
//                       </label>
//                     ))}
//                 </div>
//               </div>
//             )}
//             <Select label="Priority" name="priority" value={formData.priority} onChange={handleChange} options={["Low","Medium","High"]}/>

//             {/* ── Visitor Photo ── */}
// <SectionTitle title="Visitor Photo" />

// <div className="flex gap-3 mb-4">
//   <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg cursor-pointer hover:bg-blue-700 transition">
//     📁 Upload Photo
//     <input type="file" accept="image/*" style={{ display:"none" }}
//       onChange={(e) => {
//         const f = e.target.files[0];
//         if (f) setFormData(prev => ({ ...prev, visitorPhoto: f, photoPreview: URL.createObjectURL(f) }));
//       }} />
//   </label>
//   <button type="button" onClick={startCamera2}
//     className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-700 bg-white text-sm font-semibold rounded-lg hover:bg-blue-50 transition">
//     📷 Use Camera
//   </button>
// </div>

// {showCamera2 ? (
//   <div className="mb-4 relative border-2 border-blue-500 rounded-lg overflow-hidden bg-black">
//     <button type="button" onClick={stopCamera2}
//       className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-sm shadow-lg">✕</button>
//     <video ref={videoRef2} autoPlay playsInline className="w-full" style={{ maxHeight:"300px", objectFit:"cover", display:"block" }} />
//     <canvas ref={canvasRef2} className="hidden" />
//     <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex justify-center">
//       <button type="button" onClick={capturePhoto2}
//         className="px-8 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-lg">
//         📸 Capture Photo
//       </button>
//     </div>
//   </div>
// ) : (
//   <div className="mb-4 p-4 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50 text-center">
//     {formData.photoPreview ? (
//       <>
//         <img src={formData.photoPreview} alt="visitor"
//           className="w-24 h-24 rounded-full object-cover border-4 border-blue-400 mx-auto mb-2 shadow-md" />
//         <p className="text-green-700 text-sm font-semibold">✅ Photo selected</p>
//         <p className="text-gray-400 text-xs mt-1">Click "Upload Photo" to change</p>
//       </>
//     ) : (
//       <>
//         <div className="text-4xl mb-2 text-blue-300">📷</div>
//         <p className="text-gray-500 text-sm font-medium">Upload करा किंवा camera वापरा</p>
//       </>
//     )}
//   </div>
// )}
// {cameraError2 && <p className="text-red-600 text-xs mb-2">{cameraError2}</p>}

// {/* ── Documents ── */}
// <SectionTitle title="Documents" />

//             {/* ── Documents ── */}
//             <SectionTitle title="Documents" />
//             {showCamera ? (
//               <div className="mb-4 relative border-2 border-blue-500 rounded-lg overflow-hidden bg-black">
//                 <button type="button" onClick={stopCamera} className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-sm shadow-lg">✕</button>
//                 <video ref={videoRef} autoPlay playsInline className="w-full" style={{ maxHeight:"360px", objectFit:"cover", display:"block" }}/>
//                 <canvas ref={canvasRef} className="hidden"/>
//                 <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex justify-center">
//                   <button type="button" onClick={capturePhoto} className="px-8 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-lg">📸 Capture Photo</button>
//                 </div>
//               </div>
//             ) : (
//               <div className="mb-4 p-4 border-2 border-dashed border-blue-400 rounded-lg bg-blue-50">
//                 <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
//                   <input type="file" onChange={(e) => setFormData(prev => ({ ...prev, documents: e.target.files[0] }))} className="flex-1 text-sm"/>
//                   <button type="button" onClick={startCamera} className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 whitespace-nowrap">📷 Camera</button>
//                 </div>
//               </div>
//             )}
//             {cameraError && <p className="text-red-600 text-xs mb-2">{cameraError}</p>}
//             {formData.documents ? (
//               <div className="bg-green-50 border border-green-300 rounded-lg p-3 mb-4">
//                 <p className="text-green-800 text-sm font-medium">✅ File Selected: {formData.documents.name}</p>
//                 <p className="text-green-700 text-xs">Size: {(formData.documents.size / 1024).toFixed(2)} KB</p>
//               </div>
//             ) : (
//               <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 mb-4">
//                 <p className="text-yellow-800 text-sm">Please upload a file to proceed with submission</p>
//               </div>
//             )}

//             {/* ── Submit ── */}
//             <div className="pt-2 pb-2">
//               <button type="submit" disabled={!formData.documents}
//                 className={`w-full py-3 rounded-lg text-white font-semibold text-sm transition ${formData.documents ? "bg-green-600 hover:bg-green-700 cursor-pointer" : "bg-gray-300 cursor-not-allowed opacity-60"}`}>
//                 {formData.documents ? "✔ Submit Application" : "Upload Document to Submit"}
//               </button>
//             </div>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



// *** Jansanwad ***

// import React, { useState, useRef, useEffect } from "react";
// import axiosInstance from "../services/axiosInstance";
// import {
//   officeTopAuthority,
//   categoryHeads,
//   departmentsData,
// } from "../data/officeData";
// import { useNavigate } from "react-router-dom";

// const talukas = ["Palghar","Vasai","Dahanu","Talasari","Jawhar","Mokhada","Vikramgad","Wada"];

// const Input = ({ label, name, value, onChange, type = "text" }) => (
//   <div className="mb-4">
//     <label className="block text-sm font-medium mb-1">{label}</label>
//     <input type={type} name={name} value={value} onChange={onChange}
//       className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
//   </div>
// );

// const Textarea = ({ label, name, value, onChange }) => (
//   <div className="mb-4">
//     <label className="block text-sm font-medium mb-1">{label}</label>
//     <textarea name={name} value={value} onChange={onChange} rows="3"
//       className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
//   </div>
// );

// const Select = ({ label, name, value, onChange, options, disabled = false }) => (
//   <div className="mb-4">
//     <label className="block text-sm font-medium mb-1">{label}</label>
//     <select name={name} value={value} onChange={onChange} disabled={disabled}
//       className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}>
//       <option value="">Select {label}</option>
//       {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
//     </select>
//   </div>
// );

// const SectionTitle = ({ title }) => (
//   <div className="mb-4 mt-6 first:mt-0">
//     <h3 className="text-sm font-semibold text-blue-700 uppercase tracking-wider border-b border-blue-100 pb-2">{title}</h3>
//   </div>
// );

// // ── helper: build initial form state ─────────────────────────────────────────
// function buildInitialForm(prefillData) {
//   const today = new Date().toISOString().split("T")[0];
//   const generateReferenceNumber = () => {
//     const d = new Date();
//     return `JD/${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,"0")}/${String(d.getDate()).padStart(2,"0")}/${Math.floor(100+Math.random()*900)}`;
//   };

//   return {
//     inwardNo:        generateReferenceNumber(),
//     submissionDate:  today,
//     // ── prefilled from token (if available) ──
//     fullName:        prefillData?.fullName  || "",
//     mobile:          prefillData?.mobile    || "",
//     email:           prefillData?.email     || "",
//     address:         prefillData?.address   || "",
//     pincode:         prefillData?.pincode   || "",
//     wardNo:          prefillData?.wardNo    || "",
//     ward:            prefillData?.wardNo    || "",   // maps to ward select
//     // ── rest empty ──
//     category:        "",
//     identityType:    "",
//     identityNumber:  "",
//     taluka:          "",
//     district:        "",
//     subject:         "",
//     description:     "",
//     office:          "Mahanagarpalika Office",
//     mainDepartment:  "",
//     subDepartment:   "",
//     priority:        "Normal",
//     tagTo:           [],
//     followUp:        "Yes",
//     documents:       null,
//     status:          "Pending",
//     visitorPhoto:    null,
//     photoPreview:    null,
//   };
// }

// // ─────────────────────────────────────────────────────────────────────────────
// //  MAIN COMPONENT
// // ─────────────────────────────────────────────────────────────────────────────
// export default function JansanwadAppform({ onClose, prefillData }) {
//   const navigate = useNavigate();
//   const handleClose = onClose || (() => navigate(-1));

//   // ── camera refs / state (documents) ──────────────────────────────────────
//   const [showCamera, setShowCamera]   = useState(false);
//   const [cameraError, setCameraError] = useState("");
//   const videoRef  = useRef(null);
//   const canvasRef = useRef(null);
//   const streamRef = useRef(null);

//   // ── camera refs / state (visitor photo) ──────────────────────────────────
//   const videoRef2   = useRef(null);
//   const canvasRef2  = useRef(null);
//   const streamRef2  = useRef(null);
//   const [showCamera2, setShowCamera2]   = useState(false);
//   const [cameraError2, setCameraError2] = useState("");

//   // ── form state — initialised with prefill if provided ────────────────────
//   const [formData, setFormData] = useState(() => buildInitialForm(prefillData));

//   // ── if prefillData changes (shouldn't normally, but guard anyway) ─────────
//   useEffect(() => {
//     if (prefillData) {
//       setFormData(buildInitialForm(prefillData));
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const [departments, setDepartments] = useState([]);

//   useEffect(() => {
//     const fetchDepartments = async () => {
//       try {
//         const res = await axiosInstance.get("/getUsers");
//         if (res.data.success) {
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

//   const wards = ["Ward-A","Ward-B","Ward-C","Ward-D","Ward-E","Ward-F","Ward-G","Ward-H","Ward-I","General"];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleTagChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       const top = officeTopAuthority[formData.office];
//       const sub = categoryHeads[formData.office]?.[formData.mainDepartment];
//       const autoInclude = (value === sub && top && top !== value) ? [top] : [];
//       const newTagTo = [...new Set([...formData.tagTo, ...autoInclude, value])];
//       setFormData({ ...formData, tagTo: newTagTo });
//     } else {
//       setFormData({ ...formData, tagTo: formData.tagTo.filter((item) => item !== value) });
//     }
//   };

//   // ── document camera ───────────────────────────────────────────────────────
//   const startCamera = async () => {
//     setCameraError("");
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       streamRef.current = stream;
//       setShowCamera(true);
//       setTimeout(() => {
//         if (videoRef.current) { videoRef.current.srcObject = stream; videoRef.current.play(); }
//       }, 100);
//     } catch (err) {
//       setCameraError("Camera access denied. Please allow camera permission.");
//     }
//   };

//   const capturePhoto = () => {
//     const video = videoRef.current;
//     const canvas = canvasRef.current;
//     if (!video || !canvas) return;
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     canvas.getContext("2d").drawImage(video, 0, 0);
//     canvas.toBlob((blob) => {
//       const file = new File([blob], `captured-photo-${Date.now()}.jpg`, { type: "image/jpeg" });
//       setFormData({ ...formData, documents: file });
//       stopCamera();
//     }, "image/jpeg");
//   };

//   const stopCamera = () => {
//     if (streamRef.current) { streamRef.current.getTracks().forEach((t) => t.stop()); streamRef.current = null; }
//     setShowCamera(false);
//   };

//   // ── visitor photo camera ──────────────────────────────────────────────────
//   const startCamera2 = async () => {
//     setCameraError2("");
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       streamRef2.current = stream;
//       setShowCamera2(true);
//       setTimeout(() => {
//         if (videoRef2.current) { videoRef2.current.srcObject = stream; videoRef2.current.play(); }
//       }, 100);
//     } catch (err) {
//       setCameraError2("Camera access denied. Please allow camera permission.");
//     }
//   };

//   const capturePhoto2 = () => {
//     const video = videoRef2.current;
//     const canvas = canvasRef2.current;
//     if (!video || !canvas) return;
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     canvas.getContext("2d").drawImage(video, 0, 0);
//     canvas.toBlob((blob) => {
//       const file    = new File([blob], `visitor-photo-${Date.now()}.jpg`, { type: "image/jpeg" });
//       const preview = URL.createObjectURL(blob);
//       setFormData(prev => ({ ...prev, visitorPhoto: file, photoPreview: preview }));
//       stopCamera2();
//     }, "image/jpeg");
//   };

//   const stopCamera2 = () => {
//     if (streamRef2.current) { streamRef2.current.getTracks().forEach(t => t.stop()); streamRef2.current = null; }
//     setShowCamera2(false);
//   };

//   // ── submit ────────────────────────────────────────────────────────────────
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (!formData.fullName || !formData.mobile || !formData.subject) {
//         alert("Required fields missing: Full Name, Mobile, and Subject are required"); return;
//       }
//       if (!formData.documents) {
//         alert("Document file is required. Please upload a file before submitting."); return;
//       }

//       const authUserRaw = localStorage.getItem("authUser");
//       const authUser = authUserRaw ? JSON.parse(authUserRaw) : null;

//       const formPayload = new FormData();

//       Object.keys(formData).forEach((key) => {
//         if (key === "documents" || key === "visitorPhoto" || key === "photoPreview") return;
//         if (Array.isArray(formData[key])) formPayload.append(key, JSON.stringify(formData[key]));
//         else if (formData[key] !== null && formData[key] !== undefined) formPayload.append(key, formData[key]);
//       });

//       if (formData.documents) formPayload.append("documents", formData.documents);
//       if (formData.visitorPhoto && typeof formData.visitorPhoto !== "string") {
//         formPayload.append("visitorPhoto", formData.visitorPhoto);
//       }

//       if (authUser) {
//         formPayload.append("submittedById",       authUser.id             || "");
//         formPayload.append("submittedByName",     authUser.fullName       || "");
//         formPayload.append("submittedByRole",     authUser.role           || "");
//         formPayload.append("submittedByUserName", authUser.userName       || "");
//         formPayload.append("submittedByDept",     authUser.departmentName || "");
//       }

//       const res = await axiosInstance.post("/inwardAdd", formPayload, { headers: { "Content-Type": "multipart/form-data" } });
//       const data = res.data;
//       if (!data.success) { alert(data.message || "Something went wrong"); return; }

//       alert(`✅ Application submitted successfully!\nToken Number: ${data.tokenNo}`);
//       if (onClose) onClose();

//       setFormData(buildInitialForm(null));
//     } catch (error) {
//       alert(error?.response?.data?.message || "Server Error");
//     }
//   };

//   // ── render ────────────────────────────────────────────────────────────────
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//       <div className="bg-white shadow-2xl rounded-xl w-full max-w-3xl max-h-[95vh] flex flex-col">

//         {/* Header */}
//         <div className="px-8 py-5 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
//           <div>
//             <h2 className="text-lg font-bold text-gray-800">Application Form</h2>
//             {/* ── show prefill badge if data came from token ── */}
//             {prefillData && (
//               <p className="text-xs text-blue-600 font-semibold mt-0.5">
//                 ✅ Pre-filled from token: <span className="font-bold">{prefillData._tokenId}</span>
//               </p>
//             )}
//           </div>
//           <button
//             onClick={handleClose}
//             className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold transition-colors text-sm"
//           >✕</button>
//         </div>

//         {/* Scrollable Form Body */}
//         <div className="px-8 py-6 overflow-y-auto flex-1">
//           <form onSubmit={handleSubmit}>

//             {/* ── Citizen Details ── */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
//               <Input label="Mobile"   name="mobile"   value={formData.mobile}   onChange={handleChange}/>
//               <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange}/>
//               <Input label="Email"    name="email"    value={formData.email}    onChange={handleChange}/>
//               <Select label="Category" name="category" value={formData.category} onChange={handleChange} options={["Company","NGO","Individual","Other"]}/>
//             </div>
//             <Textarea label="Address" name="address" value={formData.address} onChange={handleChange}/>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
//               <Select label="Ward" name="ward" value={formData.ward} onChange={handleChange} options={wards}/>
//             </div>

//             {/* ── Complaint ── */}
//             <Input    label="Complaint Subject"     name="subject"     value={formData.subject}     onChange={handleChange}/>
//             <Textarea label="Complaint Description" name="description" value={formData.description} onChange={handleChange}/>

//             {/* ── Assign to Department ── */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2">Assign to Department</label>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-3 bg-gray-50">
//                 {departments.map((dept, i) => (
//                   <label key={i} className="flex items-center gap-2 bg-white p-2 rounded-lg border cursor-pointer hover:bg-blue-50 text-sm">
//                     <input
//                       type="checkbox"
//                       value={dept}
//                       checked={formData.tagTo.includes(dept)}
//                       onChange={handleTagChange}
//                       className="accent-blue-600 w-4 h-4"
//                     />
//                     <span>{dept}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {(formData.mainDepartment || (departmentsData[formData.office] || []).length === 0) && (
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-2">Tag To (Authority)</label>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   {[officeTopAuthority[formData.office], categoryHeads[formData.office]?.[formData.mainDepartment]]
//                     .filter(Boolean).filter((v, i, a) => a.indexOf(v) === i)
//                     .map((role, i) => (
//                       <label key={i} className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg border cursor-pointer hover:bg-blue-50">
//                         <input type="checkbox" value={role} checked={formData.tagTo.includes(role)} onChange={handleTagChange} className="accent-blue-600 w-4 h-4"/>
//                         <span className="text-sm">{role}</span>
//                       </label>
//                     ))}
//                 </div>
//               </div>
//             )}

//             <Select label="Priority" name="priority" value={formData.priority} onChange={handleChange} options={["Low","Medium","High"]}/>

//             {/* ── Visitor Photo ── */}
//             <SectionTitle title="Visitor Photo" />
//             <div className="flex gap-3 mb-4">
//               <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg cursor-pointer hover:bg-blue-700 transition">
//                 📁 Upload Photo
//                 <input type="file" accept="image/*" style={{ display:"none" }}
//                   onChange={(e) => {
//                     const f = e.target.files[0];
//                     if (f) setFormData(prev => ({ ...prev, visitorPhoto: f, photoPreview: URL.createObjectURL(f) }));
//                   }} />
//               </label>
//               <button type="button" onClick={startCamera2}
//                 className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-700 bg-white text-sm font-semibold rounded-lg hover:bg-blue-50 transition">
//                 📷 Use Camera
//               </button>
//             </div>

//             {showCamera2 ? (
//               <div className="mb-4 relative border-2 border-blue-500 rounded-lg overflow-hidden bg-black">
//                 <button type="button" onClick={stopCamera2}
//                   className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-sm shadow-lg">✕</button>
//                 <video ref={videoRef2} autoPlay playsInline className="w-full" style={{ maxHeight:"300px", objectFit:"cover", display:"block" }} />
//                 <canvas ref={canvasRef2} className="hidden" />
//                 <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex justify-center">
//                   <button type="button" onClick={capturePhoto2}
//                     className="px-8 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-lg">
//                     📸 Capture Photo
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="mb-4 p-4 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50 text-center">
//                 {formData.photoPreview ? (
//                   <>
//                     <img src={formData.photoPreview} alt="visitor"
//                       className="w-24 h-24 rounded-full object-cover border-4 border-blue-400 mx-auto mb-2 shadow-md" />
//                     <p className="text-green-700 text-sm font-semibold">✅ Photo selected</p>
//                     <p className="text-gray-400 text-xs mt-1">Click "Upload Photo" to change</p>
//                   </>
//                 ) : (
//                   <>
//                     <div className="text-4xl mb-2 text-blue-300">📷</div>
//                     <p className="text-gray-500 text-sm font-medium">Upload करा किंवा camera वापरा</p>
//                   </>
//                 )}
//               </div>
//             )}
//             {cameraError2 && <p className="text-red-600 text-xs mb-2">{cameraError2}</p>}

//             {/* ── Documents ── */}
//             <SectionTitle title="Documents" />
//             {showCamera ? (
//               <div className="mb-4 relative border-2 border-blue-500 rounded-lg overflow-hidden bg-black">
//                 <button type="button" onClick={stopCamera} className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-sm shadow-lg">✕</button>
//                 <video ref={videoRef} autoPlay playsInline className="w-full" style={{ maxHeight:"360px", objectFit:"cover", display:"block" }}/>
//                 <canvas ref={canvasRef} className="hidden"/>
//                 <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex justify-center">
//                   <button type="button" onClick={capturePhoto} className="px-8 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-lg">📸 Capture Photo</button>
//                 </div>
//               </div>
//             ) : (
//               <div className="mb-4 p-4 border-2 border-dashed border-blue-400 rounded-lg bg-blue-50">
//                 <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
//                   <input type="file" onChange={(e) => setFormData(prev => ({ ...prev, documents: e.target.files[0] }))} className="flex-1 text-sm"/>
//                   <button type="button" onClick={startCamera} className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 whitespace-nowrap">📷 Camera</button>
//                 </div>
//               </div>
//             )}
//             {cameraError && <p className="text-red-600 text-xs mb-2">{cameraError}</p>}
//             {formData.documents ? (
//               <div className="bg-green-50 border border-green-300 rounded-lg p-3 mb-4">
//                 <p className="text-green-800 text-sm font-medium">✅ File Selected: {formData.documents.name}</p>
//                 <p className="text-green-700 text-xs">Size: {(formData.documents.size / 1024).toFixed(2)} KB</p>
//               </div>
//             ) : (
//               <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 mb-4">
//                 <p className="text-yellow-800 text-sm">Please upload a file to proceed with submission</p>
//               </div>
//             )}

//             {/* ── Submit ── */}
//             <div className="pt-2 pb-2">
//               <button type="submit" disabled={!formData.documents}
//                 className={`w-full py-3 rounded-lg text-white font-semibold text-sm transition ${formData.documents ? "bg-green-600 hover:bg-green-700 cursor-pointer" : "bg-gray-300 cursor-not-allowed opacity-60"}`}>
//                 {formData.documents ? "✔ Submit Application" : "Upload Document to Submit"}
//               </button>
//             </div>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


// ===============================


// *** Jansanwad ***

import React, { useState, useRef, useEffect } from "react";
import axiosInstance from "../services/axiosInstance";
import {
  officeTopAuthority,
  categoryHeads,
  departmentsData,
} from "../data/officeData";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


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

// ── helper: build initial form state ─────────────────────────────────────────
function buildInitialForm(prefillData) {
  const today = new Date().toISOString().split("T")[0];
  const generateReferenceNumber = () => {
    const d = new Date();
    return `JD/${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,"0")}/${String(d.getDate()).padStart(2,"0")}/${Math.floor(100+Math.random()*900)}`;
  };

  return {
    inwardNo:        generateReferenceNumber(),
    submissionDate:  today,
    // ── prefilled from token (if available) ──
    fullName:        prefillData?.fullName  || "",
    mobile:          prefillData?.mobile    || "",
    email:           prefillData?.email     || "",
    address:         prefillData?.address   || "",
    pincode:         prefillData?.pincode   || "",
    wardNo:          prefillData?.wardNo    || "",
    ward:            prefillData?.ward      || prefillData?.wardNo || "",  // from appointment
    // ── existing photo URL from token (server path) ──
    existingPhotoUrl: prefillData?.visitorPhoto || "",
    // ── rest empty ──
    category:        "",
    identityType:    "",
    identityNumber:  "",
    taluka:          "",
    district:        "",
    subject:         "",
    description:     "",
    office:          "Mahanagarpalika Office",
    mainDepartment:  "",
    subDepartment:   "",
    priority:        "Normal",
    tagTo:           [],
    followUp:        "Yes",
    documents:       null,
    status:          "Pending",
    visitorPhoto:    null,
    photoPreview:    null,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function JansanwadAppform({ onClose, prefillData }) {
  const navigate = useNavigate();
  const handleClose = onClose || (() => navigate(-1));

  // ── camera refs / state (documents) ──────────────────────────────────────
  const [showCamera, setShowCamera]   = useState(false);
  const [cameraError, setCameraError] = useState("");
  const videoRef  = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  // ── camera refs / state (visitor photo) ──────────────────────────────────
  const videoRef2   = useRef(null);
  const canvasRef2  = useRef(null);
  const streamRef2  = useRef(null);
  const [showCamera2, setShowCamera2]   = useState(false);
  const [cameraError2, setCameraError2] = useState("");

  // ── form state — initialised with prefill if provided ────────────────────
  const [formData, setFormData] = useState(() => buildInitialForm(prefillData));

  // ── if prefillData changes (shouldn't normally, but guard anyway) ─────────
  useEffect(() => {
    if (prefillData) {
      setFormData(buildInitialForm(prefillData));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [departments, setDepartments] = useState([]);
const [departmentUsers, setDepartmentUsers] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await axiosInstance.get("/getUsers");
        console.log("res>>>>>>>>",res.data)
        if (res.data.success) {
           // ← नवीन: सगळे users store करा (mobile number साठी)
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

  const wards = ["Ward-A","Ward-B","Ward-C","Ward-D","Ward-E","Ward-F","Ward-G","Ward-H","Ward-I","General"];

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

  // ── document camera ───────────────────────────────────────────────────────
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

  // ── visitor photo camera ──────────────────────────────────────────────────
  const startCamera2 = async () => {
    setCameraError2("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef2.current = stream;
      setShowCamera2(true);
      setTimeout(() => {
        if (videoRef2.current) { videoRef2.current.srcObject = stream; videoRef2.current.play(); }
      }, 100);
    } catch (err) {
      setCameraError2("Camera access denied. Please allow camera permission.");
    }
  };

  const capturePhoto2 = () => {
    const video = videoRef2.current;
    const canvas = canvasRef2.current;
    if (!video || !canvas) return;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    canvas.toBlob((blob) => {
      const file    = new File([blob], `visitor-photo-${Date.now()}.jpg`, { type: "image/jpeg" });
      const preview = URL.createObjectURL(blob);
      setFormData(prev => ({ ...prev, visitorPhoto: file, photoPreview: preview }));
      stopCamera2();
    }, "image/jpeg");
  };

  const stopCamera2 = () => {
    if (streamRef2.current) { streamRef2.current.getTracks().forEach(t => t.stop()); streamRef2.current = null; }
    setShowCamera2(false);
  };


//   const sendWhatsAppToTaggedDepts = (taggedDepts, tokenNo) => {
//   // तुमचा portal URL — OTP login page
//   // const portalLink = `https://yourdomain.com/login`; // ← तुमचा URL टाका
//   // const portalLink = `${axiosInstance.defaults.baseURL?.replace("/api", "")}/login`;
//   const portalLink = `${import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173"}/login`;

//   taggedDepts.forEach((deptName) => {
//     // त्या department चे सगळे users शोधा
//     const deptUsersList = departmentUsers.filter(
//       (u) => u.departmentName === deptName && u.mobileNumber
//     );

//     deptUsersList.forEach((user) => {
//       const mobile = user.mobileNumber.replace(/\D/g, ""); // फक्त numbers

//       const message = 
// `नमस्कार ${user.fullName || ""},

// नवीन तक्रार नोंदवली गेली आहे.
// 🔖 Token: ${tokenNo}
// 🏢 Department: ${deptName}

// कृपया खालील link वर click करून login करा:
// 👉 ${portalLink}?mobile=${mobile}

// (OTP तुमच्या ${mobile} नंबरवर येईल)`;

//       const encoded = encodeURIComponent(message);
//       const waUrl = `https://wa.me/91${mobile}?text=${encoded}`;
//       window.open(waUrl, "_blank");
//     });
//   });
// };


// const sendWhatsAppToTaggedDepts = (taggedDepts, tokenNo) => {
//   const portalLink = `${import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173"}/login`;
//   const apkey = "67e12059b220a";        // same key jo OTP साठी वापरतो
//   const platformShort = "VVMCDM";      // same sender

//   taggedDepts.forEach((deptName) => {
//     const deptUsersList = departmentUsers.filter(
//       (u) => u.departmentName === deptName && u.mobileNumber
//     );

//     deptUsersList.forEach((user) => {
//       const mobile = user.mobileNumber.replace(/\D/g, "");
//       const loginLink = `${portalLink}?mobile=${mobile}`;

//       const smsText = `Hello ${user.fullName || ""},\nNew complaint assigned.\nToken: ${tokenNo}\nDept: ${deptName}\nLogin: ${loginLink}\nVVCMC`;

//       const smsApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=${apkey}&route=&sender=${platformShort}&mobileno=${mobile}&text=${encodeURIComponent(smsText)}`;

//       // Automatically sends — no click needed
//       fetch(smsApiUrl, { method: "GET", mode: "no-cors" })
//         .then(() => console.log(`SMS sent to ${mobile}`))
//         .catch((err) => console.error("SMS error:", err));
//     });
//   });
// };

  // ── submit ────────────────────────────────────────────────────────────────
  
  
//   const sendWhatsAppToTaggedDepts = (taggedDepts, tokenNo) => {
//   const portalLink = `${import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173"}/login`;
//   const apkey = "67e12059b220a";      // same key
//   const platformShort = "VVCMCJS";    // same sender

//   taggedDepts.forEach((deptName) => {
//     const deptUsersList = departmentUsers.filter(
//       (u) => u.departmentName === deptName && u.mobileNumber
//     );

//     deptUsersList.forEach((user) => {
//       const mobile = user.mobileNumber.replace(/\D/g, "");
//       // const loginLink = `${portalLink}?mobile=${mobile}`;
//       const displayMobile = `******${mobile.slice(-4)}`;
//             const loginLink = `${portalLink}`;


//       const waText = `Hello ${user.fullName || ""},\nNew complaint assigned.\nToken: ${tokenNo}\nDept: ${deptName}\n\nकृपया खालील link वर OTP Login करा:\n${loginLink}\n\n OTP तुमच्या ${displayMobile} नंबरवर येईल.\n\n(Register करू नका - OTP Login वापरा)\nVVCMC`;

//       // ✅ WhatsApp साठी फक्त route=w (WhatsApp route)
//       const waApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=${apkey}&route=w&sender=VVCMCJS&mobileno=91${mobile}&text=${encodeURIComponent(waText)}`;

//       fetch(waApiUrl, { method: "GET", mode: "no-cors" })
//         .then(() => console.log(`WhatsApp sent to ${mobile}`))
//         .catch((err) => console.error("WhatsApp error:", err));
//     });
//   });
// };




// const sendWhatsAppToTaggedDepts = (taggedDepts, tokenNo) => {
//   // Portal login URL — fetched from environment variable or fallback to localhost
//   const portalLink = `${import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173"}/login`;
  
//   // RapidSMS API credentials
//   const apkey = "67e12059b220a";
//   const platformShort = "VVCMCJS";

//   // Loop through all selected departments
//   taggedDepts.forEach((deptName) => {
    
//     // Find all users belonging to this department who have a mobile number
//     const deptUsersList = departmentUsers.filter(
//       (u) => u.departmentName === deptName && u.mobileNumber
//     );

//     // If no users found for this department, skip
//     if (deptUsersList.length === 0) {
//       console.warn(`No users found for department: ${deptName}`);
//       return;
//     }

//     // Send WhatsApp message to each user in the department
//     deptUsersList.forEach((user) => {
      
//       // Remove all non-numeric characters from mobile number
//       const mobile = user.mobileNumber.replace(/\D/g, "");

//       // Skip if mobile number is invalid (less than 10 digits)
//       if (mobile.length < 10) {
//         console.warn(`Invalid mobile number for user: ${user.fullName}`);
//         return;
//       }

//       // Mask mobile number for display — show only last 4 digits
//       const displayMobile = `******${mobile.slice(-4)}`;

//       // Portal login link (same for all users)
//       const loginLink = `${portalLink}`;

//       // WhatsApp message body — informs officer about new complaint
//       const waText = `Hello ${user.userName || ""},\nA new complaint has been assigned to you.\nToken No: ${tokenNo}\nDepartment: ${deptName}\n\nPlease login to the portal using OTP Login:\n${loginLink}\n\nYour OTP will be sent to your registered mobile number ${displayMobile}.\n\nNote: Do not Register. Use OTP Login only.\n\nVVCMC Jan Samvaad`;

//       // Build RapidSMS WhatsApp API URL with encoded message
//       const waApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=${apkey}&route=w&sender=VVCMCJS&mobileno=91${mobile}&text=${encodeURIComponent(waText)}`;

//       // Send WhatsApp message via RapidSMS API (no-cors mode)
//       fetch(waApiUrl, { method: "GET", mode: "no-cors" })
//         .then(() => console.log(`✅ WhatsApp sent to ${user.fullName} (${displayMobile})`))
//         .catch((err) => console.error(`❌ WhatsApp error for ${user.fullName} (${displayMobile}):`, err));
//     });
//   });
// };


// const sendWhatsAppToTaggedDepts = (taggedDepts, tokenNo) => {

//   // Portal login URL
//   const portalLink = `${import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173"}/login`;

//   // Your API details (from your curl command)
//   const API_URL = "https://wafortius.in.net/V23.0/1091751790690187/messages";
//   const BEARER_TOKEN = "633744b1-4b58-484c-abf0-a46d878e413d";

//   // Loop through each selected department
//   taggedDepts.forEach((deptName) => {

//     // Find users of this department
//     const deptUsersList = departmentUsers.filter(
//       (u) => u.departmentName === deptName && u.mobileNumber
//     );

//     if (deptUsersList.length === 0) {
//       console.warn(`No users found for: ${deptName}`);
//       return;
//     }

//     // Send WhatsApp to each user
//     deptUsersList.forEach((user) => {

//       // Clean mobile number - remove spaces, dashes etc
//       const mobile = user.mobileNumber.replace(/\D/g, "");

//       if (mobile.length < 10) {
//         console.warn(`Invalid mobile for: ${user.fullName}`);
//         return;
//       }

//       // Mask mobile - show only last 4 digits
//       const displayMobile = `******${mobile.slice(-4)}`;

//       // Build the payload (same as curl -d '...')
//       const payload = {
//         messaging_product: "whatsapp",
//         recipient_type: "individual",
//         to: `91${mobile}`,              // 91 + 10 digit number
//         type: "template",
//         template: {
//           name: "complaint_assigned",   // your template name
//           language: { code: "en" },
//           components: [
//             {
//               type: "body",
//               parameters: [
//                 { type: "text", text: user.userName || "Officer" }, // {{1}} name
//                 { type: "text", text: tokenNo },                    // {{2}} token
//                 { type: "text", text: deptName },                   // {{3}} dept
//                 { type: "text", text: portalLink },                 // {{4}} link
//                 { type: "text", text: displayMobile },              // {{5}} mobile
//               ],
//             },
//           ],
//         },
//       };

//       // Send API call (same as curl but in JavaScript)
//       fetch(API_URL, {
//         method: "POST",
//         mode: "no-cors",   // ← हे add करा
//         headers: {
//           "Authorization": `Bearer ${BEARER_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(`✅ WhatsApp sent to ${user.fullName}`, data);
//         })
//         .catch((err) => {
//           console.error(`❌ WhatsApp error for ${user.fullName}`, err);
//         });
//     });
//   });
// };



const sendWhatsAppToTaggedDepts = (taggedDepts, tokenNo) => {
  const portalLink = `${"https://jansamvad.saavi.co.in" || "https://jansamvad.saavi.co.in"}`;

  taggedDepts.forEach((deptName) => {
    const deptUsersList = departmentUsers.filter(
      (u) => u.departmentName === deptName && u.mobileNumber
    );
    if (deptUsersList.length === 0) return;

    deptUsersList.forEach((user) => {
      const mobile = user.mobileNumber.replace(/\D/g, "");
      if (mobile.length < 10) return;
      const displayMobile = `******${mobile.slice(-4)}`;

      // ✅ आपल्याच backend ला call
      axiosInstance.post("/sendWhatsApp", {
        mobile,
        userName: user.userName || "Officer",
        tokenNo,
        deptName,
        portalLink,
        displayMobile,
      })
        .then((res) => console.log(`✅ WhatsApp sent to ${user.fullName}`, res.data))
        .catch((err) => console.error(`❌ Error for ${user.fullName}`, err));
    });
  });
};


const sendSmsToTaggedDepts = (taggedDepts, tokenNo) => {
  // const portalLink = `${import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173"}/login`;
  const portalLink = `${"https://jansamvad.saavi.co.in" || "https://jansamvad.saavi.co.in"}`;

  // SMS API credentials
  const apiKey    = "dWaYXxSkYneCVvUL";
  const senderId  = "SAAVIT";
  const templateId = "1607100000000379323";
// const newOtp="121212"

  taggedDepts.forEach((deptName) => {
    const deptUsersList = departmentUsers.filter(
      (u) => u.departmentName === deptName && u.mobileNumber
    );

    if (deptUsersList.length === 0) {
      console.warn(`No users found for department: ${deptName}`);
      return;
    }

    deptUsersList.forEach((user) => {
      const mobile = user.mobileNumber.replace(/\D/g, "");
      const usern=user.userName;

      if (mobile.length < 10) {
        console.warn(`Invalid mobile: ${user.fullName}`);
        return;
      }

      const displayMobile = `******${mobile.slice(-4)}`;

      const message = `Hello ${usern}, A new complaint has been assigned to you. Token No: ${tokenNo} Department: ${deptName} Please login to the portal using OTP Login: ${portalLink} Your OTP will be sent to your registered mobile number ${displayMobile}. Note: Do not Register. Use OTP Login only. SAAVI INFINET`;

      const smsUrl = `https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379323&number=${mobile}&message=${encodeURIComponent(message)}`;

      fetch(smsUrl, { method: "GET", mode: "no-cors" })
        .then(() => console.log(`✅ SMS sent to ${user.fullName} (${displayMobile})`))
        .catch((err) => console.error(`❌ SMS error for ${user.fullName}:`, err));
    });
  });
};
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.fullName || !formData.mobile || !formData.subject) {
        toast.error("Required fields missing: Full Name, Mobile, and Subject are required"); return;
      }
      if (!formData.documents) {
        toast.error("Document file is required. Please upload a file before submitting."); return;
      }

      const authUserRaw = localStorage.getItem("authUser");
      const authUser = authUserRaw ? JSON.parse(authUserRaw) : null;

      const formPayload = new FormData();

      Object.keys(formData).forEach((key) => {
        if (key === "documents" || key === "visitorPhoto" || key === "photoPreview") return;
        if (Array.isArray(formData[key])) formPayload.append(key, JSON.stringify(formData[key]));
        else if (formData[key] !== null && formData[key] !== undefined) formPayload.append(key, formData[key]);
      });

      if (formData.documents) formPayload.append("documents", formData.documents);
      if (formData.visitorPhoto && typeof formData.visitorPhoto !== "string") {
        formPayload.append("visitorPhoto", formData.visitorPhoto);
      }

      if (authUser) {
        formPayload.append("submittedById",       authUser.id             || "");
        formPayload.append("submittedByName",     authUser.fullName       || "");
        formPayload.append("submittedByRole",     authUser.role           || "");
        formPayload.append("submittedByUserName", authUser.userName       || "");
        formPayload.append("submittedByDept",     authUser.departmentName || "");
      }

     if (prefillData?._tokenId) {
      formPayload.append("existingTokenNo", prefillData._tokenId);
    }

      const res = await axiosInstance.post("/inwardAdd", formPayload, { headers: { "Content-Type": "multipart/form-data" } });
      const data = res.data;
      if (!data.success) { toast.error(data.message || "Something went wrong"); return; }




      // ✅ Show existing token if no new one was generated
    const displayToken = prefillData?._tokenId || data.tokenNo;
    toast.success(`✅ Application submitted successfully!\nToken Number: ${displayToken}`);
    if (onClose) onClose();
//    if (formData.tagTo.length > 0) {
//   sendWhatsAppToTaggedDepts(formData.tagTo, displayToken);
// }

// if (formData.tagTo.length > 0) {
//   sendSmsToTaggedDepts(formData.tagTo, displayToken);
// }


if (formData.tagTo.length > 0) {
  sendSmsToTaggedDepts(formData.tagTo, displayToken);       // existing SMS
  sendWhatsAppToTaggedDepts(formData.tagTo, displayToken);  // ← ADD THIS
}




      setFormData(buildInitialForm(null));
    } catch (error) {
      alert(error?.response?.data?.message || "Server Error");
    }
  };

  // ── render ────────────────────────────────────────────────────────────────
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-3xl max-h-[95vh] flex flex-col">

        {/* Header */}
        <div className="px-8 py-5 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Application Form</h2>
            {/* ── show prefill badge if data came from token ── */}
            {prefillData && (
              <p className="text-xs text-blue-600 font-semibold mt-0.5">
                ✅ Pre-filled from token: <span className="font-bold">{prefillData._tokenId}</span>
              </p>
            )}
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold transition-colors text-sm"
          >✕</button>
        </div>

        {/* Scrollable Form Body */}
        <div className="px-8 py-6 overflow-y-auto flex-1">
          <form onSubmit={handleSubmit}>

            {/* ── Citizen Details ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <Input label="Mobile"   name="mobile"   value={formData.mobile}   onChange={handleChange}/>
              <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange}/>
              <Input label="Email"    name="email"    value={formData.email}    onChange={handleChange}/>
              <Select label="Category" name="category" value={formData.category} onChange={handleChange} options={["Company","NGO","Individual","Other"]}/>
            </div>
            <Textarea label="Address" name="address" value={formData.address} onChange={handleChange}/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <Select label="Ward" name="ward" value={formData.ward} onChange={handleChange} options={wards}/>
            </div>

            {/* ── Complaint ── */}
            <Input    label="Complaint Subject"     name="subject"     value={formData.subject}     onChange={handleChange}/>
            <Textarea label="Complaint Description" name="description" value={formData.description} onChange={handleChange}/>

            {/* ── Assign to Department ── */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Assign to Department</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-3 bg-gray-50">
                {departments.map((dept, i) => (
                  <label key={i} className="flex items-center gap-2 bg-white p-2 rounded-lg border cursor-pointer hover:bg-blue-50 text-sm">
                    <input
                      type="checkbox"
                      value={dept}
                      checked={formData.tagTo.includes(dept)}
                      onChange={handleTagChange}
                      className="accent-blue-600 w-4 h-4"
                    />
                    <span>{dept}</span>
                  </label>
                ))}
              </div>
            </div>

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

            <Select label="Priority" name="priority" value={formData.priority} onChange={handleChange} options={["Low","Medium","High"]}/>

            {/* ── Visitor Photo ── */}
            <SectionTitle title="Visitor Photo" />

            {/* Show existing photo fetched from token */}
            {formData.existingPhotoUrl && !formData.photoPreview && (
              <div className="mb-4 p-4 border-2 border-green-300 rounded-lg bg-green-50 text-center">
                <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-2">✅ Token वरून Photo मिळाला</p>
                {/* <img
                  src={`${axiosInstance.defaults.baseURL?.replace("/api", "") || ""}/${formData.existingPhotoUrl.replace(/\\/g, "/")}`}
                  alt="existing visitor"
                  className="w-24 h-24 rounded-full object-cover border-4 border-green-400 mx-auto mb-2 shadow-md"
                  onError={(e) => { e.target.style.display = "none"; }}
                /> */}

<img
  src={
    formData.existingPhotoUrl.startsWith("http")
      ? formData.existingPhotoUrl
      : `${axiosInstance.defaults.baseURL?.replace("/api", "") || ""}/${formData.existingPhotoUrl.replace(/\\/g, "/")}`
  }
  alt="existing visitor"
  className="w-24 h-24 rounded-full object-cover border-4 border-green-400 mx-auto mb-2 shadow-md"
  onError={(e) => { e.target.style.display = "none"; }}
/>

                <p className="text-green-700 text-sm font-semibold">Citizen चा photo</p>
                <p className="text-gray-400 text-xs mt-1">बदलायचा असेल तरच खाली Upload/Camera वापरा</p>
              </div>
            )}

            <div className="flex gap-3 mb-4">
              <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg cursor-pointer hover:bg-blue-700 transition">
                📁 {formData.existingPhotoUrl ? "Photo बदला" : "Upload Photo"}
                <input type="file" accept="image/*" style={{ display:"none" }}
                  onChange={(e) => {
                    const f = e.target.files[0];
                    if (f) setFormData(prev => ({ ...prev, visitorPhoto: f, photoPreview: URL.createObjectURL(f) }));
                  }} />
              </label>
              <button type="button" onClick={startCamera2}
                className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-700 bg-white text-sm font-semibold rounded-lg hover:bg-blue-50 transition">
                📷 Use Camera
              </button>
            </div>

            {showCamera2 ? (
              <div className="mb-4 relative border-2 border-blue-500 rounded-lg overflow-hidden bg-black">
                <button type="button" onClick={stopCamera2}
                  className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-sm shadow-lg">✕</button>
                <video ref={videoRef2} autoPlay playsInline className="w-full" style={{ maxHeight:"300px", objectFit:"cover", display:"block" }} />
                <canvas ref={canvasRef2} className="hidden" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex justify-center">
                  <button type="button" onClick={capturePhoto2}
                    className="px-8 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-lg">
                    📸 Capture Photo
                  </button>
                </div>
              </div>
            ) : formData.photoPreview ? (
              /* New photo chosen by user — replace preview */
              <div className="mb-4 p-4 border-2 border-blue-300 rounded-lg bg-blue-50 text-center">
                <img src={formData.photoPreview} alt="new visitor"
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-400 mx-auto mb-2 shadow-md" />
                <p className="text-blue-700 text-sm font-semibold">✅ नवीन Photo निवडला</p>
                <p className="text-gray-400 text-xs mt-1">
                  {formData.existingPhotoUrl ? "हा जुन्या photo ऐवजी वापरला जाईल" : "Click \"Photo बदला\" to change"}
                </p>
              </div>
            ) : !formData.existingPhotoUrl ? (
              /* No existing photo, none chosen yet — show placeholder */
              <div className="mb-4 p-4 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50 text-center">
                <div className="text-4xl mb-2 text-blue-300">📷</div>
                <p className="text-gray-500 text-sm font-medium">Upload करा किंवा camera वापरा</p>
              </div>
            ) : null}
            {cameraError2 && <p className="text-red-600 text-xs mb-2">{cameraError2}</p>}

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