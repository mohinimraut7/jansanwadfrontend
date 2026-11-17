import{g as ue,b as fe,u as xe,a as o,j as e}from"./vendor-react-BwQSrn6v.js";import{a as N}from"./axiosInstance-CJqsiSYB.js";import"./vendor-utils-CRNBIpRx.js";const X=["Super Admin","Guardian Minister","Mayor","Admin"],K=()=>{try{return JSON.parse(localStorage.getItem("authUser")||"{}")}catch{return{}}},I=(x,m)=>x?`${x}-SUB-${String(m+1).padStart(2,"0")}`:`SUB-${String(m+1).padStart(2,"0")}`,Q=({val:x})=>{const z={Approved:{bg:"#e6f4ec",color:"#1a6640"},Rejected:{bg:"#fdecea",color:"#c0392b"},"On-Hold":{bg:"#fff8e1",color:"#b07a00"},"Not Conducted":{bg:"#f3f3f3",color:"#6a6a6a"},Postponed:{bg:"#eee8ff",color:"#6a3ab0"}}[x]||{bg:"#f3f3f3",color:"#aaa"};return e.jsx("span",{style:{display:"inline-block",fontSize:12,fontWeight:700,padding:"3px 10px",borderRadius:20,background:z.bg,color:z.color,whiteSpace:"nowrap"},children:x||"-"})};function Se(){const{meetingId:x}=ue(),m=fe(),z=xe(),[a,Z]=o.useState(m.state?{meetingNumber:m.state.meetingNumber||null,meetingType:m.state.meetingType||null,meetingDate:m.state.meetingDate||null,meetingTime:m.state.meetingTime||null}:null),[p,be]=o.useState(x||null),[v,ee]=o.useState(""),[g,M]=o.useState([]),[T,j]=o.useState(!1),[W,B]=o.useState(null),[d,se]=o.useState(window.innerWidth<640),[E,te]=o.useState([]),[ne,y]=o.useState(!1),[b,P]=o.useState(null),$={subjectName:"",subjectType:"",decisionInMeeting:"",tagTo:[]},[r,S]=o.useState($),[U,C]=o.useState(null),[u,D]=o.useState(null),[f,Y]=o.useState(""),[H,G]=o.useState(!1),R=K(),ae=R?.role||"",F=X.includes(ae);o.useEffect(()=>{const s=()=>se(window.innerWidth<640);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),o.useEffect(()=>{(async()=>{try{const t=await N.get("/getUsers");if(t.data.success){const n=[...new Set(t.data.users.map(i=>i.departmentName).filter(Boolean))];te(n)}}catch{}})()},[]);const k=async s=>{if(s)try{j(!0);const n=(await N.get("/getMeetings")).data;if(n.success){const i=K(),c=i?.role||"",q=i?.departmentName||"",O=X.includes(c),h=n.data.find(A=>A._id===s);if(h){Z({meetingNumber:h.meetingNumber||null,meetingType:h.meetingType||null,meetingDate:h.meetingDate||null,meetingTime:h.meetingTime||null});const A=Array.isArray(h.subjects)?h.subjects:[];if(O)M(A);else if(["corporator","ward councillor"].includes(c.toLowerCase()))M(A);else{const ge=A.filter(V=>Array.isArray(V.tagTo)&&V.tagTo.includes(q));M(ge)}}}}catch{l("Failed to load subjects","error")}finally{j(!1)}};o.useEffect(()=>{p&&k(p)},[p]);const l=(s,t="success")=>{B({msg:s,type:t}),setTimeout(()=>B(null),3e3)},ie=s=>s?new Date(s).toLocaleDateString("en-IN"):"-",oe=s=>{if(!s)return"-";const[t,n]=s.split(":");let i=parseInt(t,10);const c=i>=12?"PM":"AM";return i=i%12||12,`${i}:${n} ${c}`},w=g.filter(s=>!v||(s.subjectId||"").toLowerCase().includes(v.toLowerCase())),re=()=>{P(null),S($),y(!0)},J=(s,t)=>{P(t),S({subjectName:s.subjectName||"",subjectType:s.subjectType||"",decisionInMeeting:s.decisionInMeeting||"",tagTo:Array.isArray(s.tagTo)?s.tagTo:[]}),y(!0)},le=async()=>{if(!r.subjectName.trim()){l("Subject Name is required","error");return}try{if(j(!0),b!==null){const s=g[b]?.subjectId;if(!s){l("Subject ID missing","error");return}const t=new FormData;t.append("subjectName",r.subjectName),t.append("subjectType",r.subjectType||""),t.append("decisionInMeeting",r.decisionInMeeting||""),t.append("tagTo",JSON.stringify(r.tagTo));const i=(await N.put(`/updateMeeting/updateSubject/${s}`,t)).data;i.success?(l("Subject updated!"),y(!1),k(p)):l(i.message||"Failed to update","error")}else{const s={subjectId:I(a?.meetingNumber,g.length),subjectName:r.subjectName,subjectType:r.subjectType,decisionInMeeting:r.decisionInMeeting,tagTo:r.tagTo},t=[...g,s],n=new FormData;n.append("subjects",JSON.stringify(t)),a?.meetingNumber&&n.append("meetingNumber",a.meetingNumber),a?.meetingType&&n.append("meetingType",a.meetingType),a?.meetingDate&&n.append("meetingDate",a.meetingDate),a?.meetingTime&&n.append("meetingTime",a.meetingTime);const c=(await N.put(`/updateMeeting/${p}`,n)).data;c.success?(l("Subject added!"),y(!1),k(p)):l(c.message||"Failed to save","error")}}catch{l("Server error","error")}finally{j(!1)}},ce=async s=>{try{j(!0);const t=g.filter((q,O)=>O!==s),n=new FormData;n.append("subjects",JSON.stringify(t)),a?.meetingNumber&&n.append("meetingNumber",a.meetingNumber),a?.meetingType&&n.append("meetingType",a.meetingType),a?.meetingDate&&n.append("meetingDate",a.meetingDate),a?.meetingTime&&n.append("meetingTime",a.meetingTime);const c=(await N.put(`/updateMeeting/${p}`,n)).data;c.success?(l("Subject deleted!"),C(null),k(p)):l(c.message||"Failed","error")}catch{l("Server error","error")}finally{j(!1)}},de=s=>{S(t=>({...t,tagTo:t.tagTo.includes(s)?t.tagTo.filter(n=>n!==s):[...t.tagTo,s]}))},pe=s=>s==="Administrative and Financial Approval"?["Tender Floated","1st Envelope Opened","2nd Envelope Opened","Nivida Samiti Rate Approval","Ghoshwara Ready"]:s==="Contract Approval"?["LOI Issued","SD Submitted","Work Order Issued","Work Started","Work Progress - Physical Progress","Work Progress - Financial Progress"]:["Yes","No"],_=s=>{D(s),Y(s.actionTaken||"")},me=async()=>{if(u)try{G(!0);const s=u;if(!s.subjectId){l("Subject ID missing","error");return}const t=new FormData;t.append("subjectName",s.subjectName||""),t.append("subjectType",s.subjectType||""),t.append("decisionInMeeting",s.decisionInMeeting||""),t.append("tagTo",JSON.stringify(s.tagTo||[])),t.append("actionTaken",f);const i=(await N.put(`/updateMeeting/updateSubject/${s.subjectId}`,t)).data;i.success?(l("Action Taken saved!"),D(null),k(p)):l(i.message||"Failed","error")}catch{l("Server error","error")}finally{G(!1)}};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"sms-wrap",style:{background:"#f0f4f0",minHeight:"100vh",padding:d?12:24},children:[W&&e.jsx("div",{style:{position:"fixed",top:16,right:16,left:d?16:"auto",background:W.type==="success"?"#1a7a4a":"#c0392b",color:"#fff",padding:"10px 18px",borderRadius:8,fontWeight:700,fontSize:13.5,zIndex:9999},children:W.msg}),e.jsx("button",{className:"sms-back-btn",onClick:()=>z("/meetings"),children:"← Back to Meetings"}),e.jsx("h1",{className:"sms-title",children:"Meeting Subjects"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:18,flexWrap:"wrap"},children:[e.jsx("input",{className:"sms-search-input",placeholder:"🔍 Search subject ID...",value:v,onChange:s=>ee(s.target.value)}),p&&F&&e.jsx("button",{className:"sms-btn-primary",onClick:re,style:{display:"flex",alignItems:"center",gap:6},children:"+ Add Subject"})]}),a&&p&&e.jsxs("div",{className:"sms-meeting-card",children:[e.jsxs("div",{className:"sms-meeting-chip",children:[e.jsx("span",{className:"sms-chip-label",children:"Meeting No"}),e.jsx("span",{className:"sms-chip-badge",children:a.meetingNumber})]}),e.jsxs("div",{className:"sms-meeting-chip",children:[e.jsx("span",{className:"sms-chip-label",children:"Type"}),e.jsx("span",{className:"sms-chip-value",children:a.meetingType||"-"})]}),e.jsxs("div",{className:"sms-meeting-chip",children:[e.jsx("span",{className:"sms-chip-label",children:"Date"}),e.jsx("span",{className:"sms-chip-value",children:ie(a.meetingDate)})]}),e.jsxs("div",{className:"sms-meeting-chip",children:[e.jsx("span",{className:"sms-chip-label",children:"Time"}),e.jsx("span",{className:"sms-chip-value",children:oe(a.meetingTime)})]}),e.jsxs("div",{className:"sms-meeting-chip",children:[e.jsx("span",{className:"sms-chip-label",children:"Subjects"}),e.jsx("span",{className:"sms-chip-value",style:{color:"#1a7a4a",fontWeight:800},children:w.length})]})]}),p?e.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:d?12:20,overflowX:"auto"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},children:e.jsxs("h3",{style:{fontSize:15,fontWeight:800,color:"#1a4a2e",margin:0},children:["Subjects (",w.length,")"]})}),T?e.jsx("div",{style:{textAlign:"center",padding:24,color:"#8a9a90"},children:"Loading..."}):w.length===0?e.jsxs("div",{className:"sms-empty",children:[e.jsx("div",{className:"sms-empty-icon",children:"📋"}),e.jsx("div",{children:v?"कोणताही subject सापडला नाही":"कोणतेही subjects नाहीत"}),e.jsx("div",{style:{fontSize:12,color:"#aaa",marginTop:4},children:v?"वेगळा Subject ID search करा":"+ Add Subject button वापरून subjects add करा"})]}):d?e.jsx("div",{children:w.map((s,t)=>{const n=g.indexOf(s);return e.jsxs("div",{className:"sms-card",children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8},children:[e.jsx("span",{className:"sms-sub-id",children:s.subjectId||I(a?.meetingNumber,n)}),e.jsxs("div",{style:{display:"flex",gap:5},children:[e.jsx("button",{className:"sms-btn-edit",onClick:()=>J(s,n),children:"✏️"}),e.jsx("button",{className:"sms-btn-delete",onClick:()=>C(n),children:"🗑️"})]})]}),e.jsxs("div",{className:"sms-card-row",children:[e.jsx("span",{className:"sms-card-label",children:"Subject Name"}),e.jsx("span",{style:{fontWeight:600},children:s.subjectName||"-"})]}),e.jsxs("div",{className:"sms-card-row",children:[e.jsx("span",{className:"sms-card-label",children:"Subject Type"}),e.jsx("span",{className:"sms-type-pill",children:s.subjectType||"-"})]}),e.jsxs("div",{className:"sms-card-row",children:[e.jsx("span",{className:"sms-card-label",children:"Decision"}),e.jsx(Q,{val:s.decisionInMeeting})]}),e.jsxs("div",{className:"sms-card-row",children:[e.jsx("span",{className:"sms-card-label",children:"Action Taken"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-end"},children:[s.actionTaken&&e.jsx("span",{style:{background:s.actionTaken==="Yes"?"#e6f4ec":s.actionTaken==="No"?"#fdecea":"#f0f0ff",color:s.actionTaken==="Yes"?"#1a6640":s.actionTaken==="No"?"#c0392b":"#3a3ab0",fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20},children:s.actionTaken}),Array.isArray(s.tagTo)&&s.tagTo.includes(R?.departmentName)&&e.jsx("button",{style:{fontFamily:"'Nunito Sans', sans-serif",fontSize:11.5,fontWeight:700,background:"#fff8e1",color:"#b07a00",border:"1.5px solid #ffe082",borderRadius:6,padding:"3px 8px",cursor:"pointer"},onClick:()=>_(s),children:"⚡ Action"})]})]}),Array.isArray(s.tagTo)&&s.tagTo.length>0&&e.jsxs("div",{className:"sms-card-row",children:[e.jsx("span",{className:"sms-card-label",children:"Departments"}),e.jsx("div",{className:"sms-dept-chips",children:s.tagTo.map((i,c)=>e.jsx("span",{className:"sms-dept-chip",children:i},c))})]})]},t)})}):e.jsxs("table",{className:"sms-table",style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsx("tr",{children:["#","Subject ID","Subject Name","Subject Type","Decision","Departments","Action Taken","Actions"].map(s=>e.jsx("th",{children:s},s))})}),e.jsx("tbody",{children:w.map((s,t)=>{const n=g.indexOf(s);return e.jsxs("tr",{children:[e.jsx("td",{children:t+1}),e.jsx("td",{children:e.jsx("span",{className:"sms-sub-id",children:s.subjectId||I(a?.meetingNumber,n)})}),e.jsx("td",{style:{maxWidth:260,fontWeight:600},children:s.subjectName||"-"}),e.jsx("td",{children:e.jsx("span",{className:"sms-type-pill",children:s.subjectType||"-"})}),e.jsx("td",{children:e.jsx(Q,{val:s.decisionInMeeting})}),e.jsx("td",{style:{maxWidth:180},children:Array.isArray(s.tagTo)&&s.tagTo.length>0?e.jsx("div",{className:"sms-dept-chips",children:s.tagTo.map((i,c)=>e.jsx("span",{className:"sms-dept-chip",children:i},c))}):e.jsx("span",{style:{color:"#ccc"},children:"—"})}),e.jsx("td",{style:{maxWidth:260,fontWeight:600},children:s.actionTaken||"-"}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",gap:6},children:[e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-start"},children:Array.isArray(s.tagTo)&&s.tagTo.includes(R?.departmentName)&&e.jsx("button",{style:{fontFamily:"'Nunito Sans', sans-serif",fontSize:11.5,fontWeight:700,background:"#fff8e1",color:"#b07a00",border:"1.5px solid #ffe082",borderRadius:6,padding:"3px 10px",cursor:"pointer",whiteSpace:"nowrap"},onClick:()=>_(s),children:"⚡ Action"})}),F&&e.jsx("button",{className:"sms-btn-edit",onClick:()=>J(s,n),children:"✏️ Edit"}),F&&e.jsx("button",{className:"sms-btn-delete",onClick:()=>C(n),children:"🗑️ Delete"})]})})]},t)})})]})]}):e.jsx("div",{style:{background:"#fff",borderRadius:12,padding:20},children:e.jsxs("div",{className:"sms-empty",children:[e.jsx("div",{className:"sms-empty-icon",children:"🔍"}),e.jsx("div",{children:"कोणतीही meeting उपलब्ध नाही"}),e.jsx("div",{style:{fontSize:12,color:"#aaa",marginTop:4},children:"Meetings page वरून meeting number वर click करा"})]})}),ne&&e.jsx("div",{style:L,children:e.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:d?16:25,width:d?"95%":"65%",maxWidth:720,maxHeight:"90vh",overflowY:"auto"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:20},children:[e.jsx("h3",{style:{fontSize:17,fontWeight:800,color:"#1a4a2e",margin:0},children:b===null?"Add Subject":"Edit Subject"}),e.jsx("button",{onClick:()=>y(!1),style:{background:"none",border:"none",fontSize:18,cursor:"pointer",color:"#8a9a90"},children:"✕"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:d?"1fr":"1fr 1fr",gap:14},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsxs("label",{className:"sms-label",children:["Subject ID",e.jsx("span",{className:"sms-auto-badge",children:"Auto"})]}),e.jsx("input",{className:"sms-input-readonly",value:b!==null?g[b]?.subjectId||I(a?.meetingNumber,b):I(a?.meetingNumber,g.length),readOnly:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("label",{className:"sms-label",children:"Subject Type"}),e.jsxs("select",{className:"sms-input",value:r.subjectType,onChange:s=>S(t=>({...t,subjectType:s.target.value})),children:[e.jsx("option",{value:"",children:"Select Type"}),e.jsx("option",{children:"General"}),e.jsx("option",{children:"Administrative and Financial Approval"}),e.jsx("option",{children:"Contract Approval"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gridColumn:d?"1":"span 2"},children:[e.jsxs("label",{className:"sms-label",children:["Subject Name ",e.jsx("span",{style:{color:"#c0392b"},children:"*"})]}),e.jsx("input",{className:"sms-input",placeholder:"Subject name टाका...",value:r.subjectName,onChange:s=>S(t=>({...t,subjectName:s.target.value}))})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gridColumn:d?"1":"span 2"},children:[e.jsx("label",{className:"sms-label",children:"Decision In Meeting"}),e.jsxs("select",{className:"sms-input",value:r.decisionInMeeting,onChange:s=>S(t=>({...t,decisionInMeeting:s.target.value,tagTo:s.target.value!=="Approved"?[]:t.tagTo})),children:[e.jsx("option",{value:"",children:"Select Decision"}),e.jsx("option",{value:"Approved",children:"Approved"}),e.jsx("option",{value:"Rejected",children:"Rejected"}),e.jsx("option",{value:"On-Hold",children:"On-Hold"}),e.jsx("option",{value:"Not Conducted",children:"Not Conducted"}),e.jsx("option",{value:"Postponed",children:"Postponed"})]})]}),r.decisionInMeeting==="Approved"&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gridColumn:d?"1":"span 2"},children:[e.jsx("label",{className:"sms-label",style:{marginBottom:8},children:"Assign to Department"}),e.jsx("div",{className:"sms-dept-grid",children:E.length===0?e.jsx("div",{style:{gridColumn:"span 2",textAlign:"center",color:"#8a9a90",fontSize:13,padding:10},children:"Loading departments..."}):E.map((s,t)=>e.jsxs("label",{className:`sms-dept-item ${r.tagTo.includes(s)?"checked":""}`,children:[e.jsx("input",{type:"checkbox",checked:r.tagTo.includes(s),onChange:()=>de(s)}),e.jsx("span",{children:s})]},t))}),r.tagTo.length>0&&e.jsx("div",{style:{marginTop:8,display:"flex",flexWrap:"wrap",gap:5},children:r.tagTo.map((s,t)=>e.jsxs("span",{style:{background:"#e6f4ec",color:"#1a6640",fontSize:11.5,fontWeight:700,padding:"3px 9px",borderRadius:20,border:"1px solid #a8d5b5"},children:["✅ ",s]},t))})]})]}),e.jsxs("div",{style:{display:"flex",gap:10,marginTop:22},children:[e.jsx("button",{className:"sms-btn-cancel",onClick:()=>y(!1),children:"Cancel"}),e.jsx("button",{className:"sms-btn-primary",onClick:le,disabled:T,children:T?"Saving...":b===null?"Add Subject":"Update Subject"})]})]})}),U!==null&&e.jsx("div",{style:L,children:e.jsxs("div",{style:{background:"#fff",padding:28,borderRadius:12,maxWidth:380,width:d?"90%":"100%",textAlign:"center"},children:[e.jsx("p",{style:{fontSize:17,fontWeight:700,color:"#1a4a2e",marginBottom:6},children:"Delete Subject?"}),e.jsx("p",{style:{fontSize:13.5,color:"#8a9a90",marginBottom:20,fontWeight:500},children:"He subject permanently delete होईल."}),e.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center"},children:[e.jsx("button",{className:"sms-btn-cancel",onClick:()=>C(null),children:"Cancel"}),e.jsx("button",{className:"sms-btn-primary",style:{background:"#c0392b"},onClick:()=>ce(U),disabled:T,children:T?"Deleting...":"Yes, Delete"})]})]})}),u&&e.jsx("div",{style:L,children:e.jsxs("div",{style:{background:"#fff",borderRadius:14,padding:d?18:28,width:d?"95%":"480px",maxWidth:520,boxShadow:"0 8px 32px rgba(0,0,0,0.12)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx("span",{style:{fontSize:22},children:"⚡"}),e.jsx("h3",{style:{fontSize:16,fontWeight:800,color:"#1a4a2e",margin:0},children:"Action Taken"})]}),e.jsx("button",{onClick:()=>D(null),style:{background:"none",border:"none",fontSize:18,cursor:"pointer",color:"#8a9a90"},children:"✕"})]}),e.jsxs("div",{style:{background:"#f7fbf8",border:"1.5px solid #d6ede0",borderRadius:10,padding:"12px 16px",marginBottom:18,display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13},children:[e.jsx("span",{style:{fontWeight:700,color:"#5a7a6a"},children:"Meeting No"}),e.jsx("span",{style:{background:"#e6f4ec",color:"#1a6640",fontWeight:700,fontSize:12.5,padding:"2px 10px",borderRadius:6},children:a?.meetingNumber||"-"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,borderTop:"1px solid #eef4ee",paddingTop:8},children:[e.jsx("span",{style:{fontWeight:700,color:"#5a7a6a"},children:"Subject ID"}),e.jsx("span",{style:{background:"#eaf3fb",color:"#1565a8",fontWeight:700,fontSize:12,padding:"2px 8px",borderRadius:5,fontFamily:"monospace"},children:u.subjectId||"-"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,borderTop:"1px solid #eef4ee",paddingTop:8},children:[e.jsx("span",{style:{fontWeight:700,color:"#5a7a6a"},children:"Subject Name"}),e.jsx("span",{style:{fontWeight:600,color:"#2d3d35",maxWidth:220,textAlign:"right"},children:u.subjectName||"-"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,borderTop:"1px solid #eef4ee",paddingTop:8},children:[e.jsx("span",{style:{fontWeight:700,color:"#5a7a6a"},children:"Subject Type"}),e.jsx("span",{style:{background:"#f3f0ff",color:"#6a3ab0",fontSize:11.5,fontWeight:600,padding:"2px 8px",borderRadius:20},children:u.subjectType||"General"})]})]}),e.jsxs("div",{style:{marginBottom:22},children:[e.jsxs("label",{className:"sms-label",style:{marginBottom:6},children:["Action Taken",e.jsx("span",{style:{display:"inline-block",background:"#fff8e1",color:"#b07a00",fontSize:10,fontWeight:800,padding:"2px 7px",borderRadius:20,marginLeft:6,textTransform:"uppercase"},children:u.subjectType==="Administrative and Financial Approval"?"Prashaskiy":u.subjectType==="Contract Approval"?"Samvida":"General"})]}),e.jsxs("select",{className:"sms-input",value:f,onChange:s=>Y(s.target.value),children:[e.jsx("option",{value:"",children:"-- Select --"}),pe(u.subjectType).map((s,t)=>e.jsx("option",{value:s,children:s},t))]}),f&&e.jsx("div",{style:{marginTop:10},children:e.jsxs("span",{style:{background:f==="Yes"?"#e6f4ec":f==="No"?"#fdecea":"#f0f0ff",color:f==="Yes"?"#1a6640":f==="No"?"#c0392b":"#3a3ab0",fontSize:12,fontWeight:700,padding:"4px 12px",borderRadius:20},children:["✅ ",f]})})]}),e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsx("button",{className:"sms-btn-cancel",onClick:()=>D(null),children:"Cancel"}),e.jsx("button",{className:"sms-btn-primary",onClick:me,disabled:H||!f,children:H?"Saving...":"Save Action Taken"})]})]})})]})]})}const L={position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,padding:16};export{Se as default};
