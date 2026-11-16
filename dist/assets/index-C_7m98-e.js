const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-DccabDZ8.js","assets/vendor-react-BwQSrn6v.js","assets/vendor-redux-BzC0OSN9.js","assets/ajivir5-0Blai2zW.js","assets/bg1-CoL5AQNs.js","assets/axiosInstance-CJqsiSYB.js","assets/vendor-utils-CRNBIpRx.js","assets/vendor-utils-VYesxZYF.css","assets/Loader-D5US2avv.js","assets/vendor-icons-MDKyb3au.js","assets/CitizenLogin-CuWQZiEg.js","assets/citizenAxios-nN87ILv3.js","assets/logo2new-B4VGcLNc.js","assets/PortalSelect-CB91JJFb.js","assets/Registration-BGv-gzj2.js","assets/Dashboard-DnKjWMYb.js","assets/Allapplication-3GGa4Fli.js","assets/JansanwadAppform-DGPeZph2.js","assets/jansamwadBg-atIhJqPO.js","assets/Users-Bn4mscl-.js","assets/Corporators-D-IO2vf6.js","assets/Availability-NxJKkAzx.js","assets/ApplicationCitizens-DDwgwWNL.js","assets/Meetings-CP8l9R4J.js","assets/Meetings-BO1KNuiL.css","assets/SpecificMeetingSubjects-B73atceX.js","assets/Home-BkBiboi5.js","assets/BookAppointment-Cp-FBUVM.js","assets/Myappointments-tLEa_u7y.js","assets/CitizenRegistration-CNoYNreJ.js"])))=>i.map(i=>d[i]);
import{a as l,j as e,u as V,N as b,O as Me,b as De,c as Te,d as u,e as _,f as Pe,R as Ee,B as Oe}from"./vendor-react-BwQSrn6v.js";import{c as Fe,u as H,a as te,b as Re,P as ze}from"./vendor-redux-BzC0OSN9.js";import{F as Le,a as Ie,b as Ve,c as _e,d as Y,e as He,f as We,g as ie,h as W,i as P,j as ne,k as ae}from"./vendor-icons-MDKyb3au.js";import{L as Ue}from"./vendor-utils-CRNBIpRx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();const Be="modulepreload",$e=function(t){return"/"+t},re={},f=function(o,i,n){let s=Promise.resolve();if(i&&i.length>0){let x=function(c){return Promise.all(c.map(g=>Promise.resolve(g).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=d?.nonce||d?.getAttribute("nonce");s=x(i.map(c=>{if(c=$e(c),c in re)return;re[c]=!0;const g=c.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${m}`))return;const a=document.createElement("link");if(a.rel=g?"stylesheet":Be,g||(a.as="script"),a.crossOrigin="",a.href=c,p&&a.setAttribute("nonce",p),document.head.appendChild(a),g)return new Promise((Ce,Ne)=>{a.addEventListener("load",Ce),a.addEventListener("error",()=>Ne(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(d){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=d,window.dispatchEvent(p),!p.defaultPrevented)throw d}return s.then(d=>{for(const p of d||[])p.status==="rejected"&&r(p.reason);return o().catch(r)})},Ge={user:null,isLoggedIn:!1},xe=Fe({name:"auth",initialState:Ge,reducers:{loginSuccess:(t,o)=>{t.user=o.payload,t.isLoggedIn=!0},logout:t=>{t.user=null,t.isLoggedIn=!1,localStorage.removeItem("authUser"),localStorage.removeItem("token"),localStorage.removeItem("userRole")}}}),{loginSuccess:Je,logout:be}=xe.actions,Ye=xe.reducer,M="/assets/vvcmclogo-C6hbLrf7.jpg",ye=l.createContext();function qe({children:t}){const[o,i]=l.useState("open");return e.jsx(ye.Provider,{value:{mode:o,setMode:i},children:t})}function ve(){return l.useContext(ye)}const se=[["Vasai-Virar City Municipal Corporation","वसई-विरार शहर महानगरपालिका","Vasai Virar City Municipal Corporation"],["Jan Samvad","जन संवाद","Jan Samvaad"],["VVCMC — Jan Samvad","वविशम — जन संवाद"],["Vasai-Virar City Municipal Corporation, Jan Samvad","वसई-विरार शहर महानगरपालिका, जन संवाद"],["Jan Samvad · Citizen Portal","जन संवाद · नागरिक पोर्टल","जन संवाद · Citizen Portal"],["Jan Samvad - Applications","जन संवाद - अर्ज","जन संवाद - Applications"],["Public Relations – Application Form","जनसंपर्क – अर्ज नमुना","जनसंपर्क – Application Form"],["ADMIN PANEL · VVCMC","प्रशासन पॅनेल · वविशम"],["Admin Panel","प्रशासन पॅनेल"],["Vasai-Virar City","वसई-विरार शहर"],["Vasai-Virar City Municipal Corporation · Janata Darbar System","वसई-विरार शहर महानगरपालिका · जनता दरबार प्रणाली"],["Vasai-Virar City Municipal Corporation. All rights reserved","वसई-विरार शहर महानगरपालिका. सर्व हक्क राखीव"],["Designed & Developed for Vasai Virar City Municipal Corporation (VVCMC) — Jan Samvad","वसई विरार शहर महानगरपालिका (वविशम) साठी डिझाइन व विकसित — जन संवाद"],["Secure Citizen Portal · All rights reserved","सुरक्षित नागरिक पोर्टल · सर्व हक्क राखीव"],["Secure Government Portal · All rights reserved","सुरक्षित शासकीय पोर्टल · सर्व हक्क राखीव"],["Secure Government Portal","सुरक्षित शासकीय पोर्टल"],["Hon. Mayor","मा. महापौर","मा. महापौर"],["Hon. Mayor Shri. Ajiv Patil","मा. महापौर श्री. अजीव पाटील"],["Hon. Mayor, Vasai Virar City Municipal Corporation","मा. महापौर, वसई विरार शहर महानगरपालिका"],["Hon. Shri. Ajiv Patil","मा. श्री.अजीव पाटील"],["Shri. Ajiv Patil","श्री. अजीव पाटील"],["Respected Mayor Ajiv Patil Sir","आदरणीय महापौर अजीव पाटील साहेब","Repected Mayor Ajiv Patil Sir"],["Approved by Respected Mayor Ajiv Patil Sir","आदरणीय महापौर अजीव पाटील साहेबांनी मंजूर केले"],["Rejected by Respected Mayor Ajiv Patil Sir","आदरणीय महापौर अजीव पाटील साहेबांनी नाकारले"],["Established : 3 July 2009","स्थापना : ३ जुलै २००९"],["Mayor","महापौर"],["Deputy Mayor","उपमहापौर"],["Mayor Today","आज महापौर"],["Mayor's Office Latest Updates & Activities","महापौर कार्यालयाच्या ताज्या घडामोडी व उपक्रम"],["Latest news from the Mayor's office","महापौर कार्यालयाच्या ताज्या बातम्या"],["Latest News","ताज्या बातम्या"],["Currently Ongoing","सध्या सुरू"],["Home","मुख्यपृष्ठ"],["My Appointments","माझ्या भेटी"],["View My Appointments","माझ्या भेटी बघा","My Appointments बघा"],["Book","बुक करा"],["Book Appointment","भेट बुक करा","Appointment बुक करा"],["Login","लॉगिन"],["Logout","लॉगआउट"],["Register","नोंदणी करा","Register करा","नोंदणी करा"],["Dashboard","डॅशबोर्ड"],["Notifications","सूचना"],["Help","मदत"],["Settings","सेटिंग्ज"],["Back","मागे"],["Go Back","मागे जा","मागे जा"],["Back to Meetings","सभांकडे परत"],["Back to Top","वर जा"],["Collapse sidebar","साइडबार लहान करा"],["Hide sidebar","साइडबार लपवा"],["Open sidebar","साइडबार उघडा"],["All Category","सर्व वर्ग"],["Search here","येथे शोधा"],["Search","शोधा"],["Prev","मागील"],["Next","पुढील"],["Previous week","मागील आठवडा"],["Next week","पुढील आठवडा"],["Contact Us","संपर्क करा"],["Follow Us","आम्हाला फॉलो करा"],["Site Map","साइट नकाशा"],["Helpline","हेल्पलाइन"],["WhatsApp Chatbot","व्हॉट्सअ‍ॅप चॅटबॉट"],["Virat Nagar, Near MHADA Colony","विराट नगर, म्हाडा कॉलनीजवळ"],["Virar West. PIN: 401303","विरार पश्चिम. पिन: ४०१३०३"],["Book an appointment easily","भेट सहज बुक करा","Appointment सहज बुक करा"],["How does it work","कसे काम करते"],["Book a meeting with the Mayor in 4 steps.","४ टप्प्यांमध्ये महापौरांची भेट बुक करा."],["Get Started — Register","सुरुवात करा — नोंदणी"],["Register to book a Mayor appointment","महापौर भेट बुक करण्यासाठी नोंदणी करा","Mayor Appointment बुक करण्यासाठी register करा"],["Create an account using your mobile number","मोबाईल नंबर वापरून खाते तयार करा","Mobile number वापरून account तयार करा"],["Choose from the available dates and time slots of the Hon. Mayor","मा. महापौर यांच्या उपलब्ध तारखा आणि वेळांमधून निवडा","मा. श्री महापौर यांच्या available dates आणि time slots मधून निवडा"],["Fill in details","तपशील भरा"],["Give reason for visit, number of visitors and photo","भेटीचे कारण, अभ्यागत संख्या आणि फोटो द्या","भेटीचे कारण, visitors संख्या आणि photo द्या"],["You will get a confirmation token and QR code — show it on the day of the visit","पुष्टी टोकन आणि QR कोड मिळेल — भेटीच्या दिवशी दाखवा","Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा"],["Get Token","टोकन मिळवा"],["Choose Date","तारीख निवडा"],["A platform created to take citizens' problems and suggestions directly to Hon. Mayor Shri. Ajiv Patil","नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ"],["Since taking charge as Mayor on 3 February 2026, Hon. Mayor Shri. Ajiv Patil has set up this Jan Samvad platform to communicate directly with citizens. This transparent, simple and fast online medium has been created so that citizens' problems, suggestions and complaints reach the Mayor directly.","३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे."],["For the citizens, by the citizens — committed to transparent, fast and digital public services","नागरिकांसाठी, नागरिकांकडून — पारदर्शक, जलद आणि डिजिटल लोकसेवेसाठी कटिबद्ध"],["Ongoing Projects","चालू प्रकल्प"],["Important ongoing projects of Vasai-Virar Municipal Corporation","वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प"],["Progress","प्रगती"],["In progress","सुरू आहे","सुरू आहे"],["Citizen Participation","नागरिक सहभाग"],["By increasing active participation of citizens, their opinions and suggestions are becoming important in city development.","नागरिकांचा सक्रिय सहभाग वाढवून शहर विकासात त्यांचे मत आणि सूचना महत्वाच्या ठरत आहेत."],["Safe & Clean City","सुरक्षित व स्वच्छ शहर"],["The city is being made more liveable through safety, cleanliness and eco-friendly initiatives.","सुरक्षितता, स्वच्छता आणि पर्यावरणपूरक उपक्रमांद्वारे शहर अधिक राहण्यायोग्य बनवले जात आहे."],["Vasai Smart City Project","वसई स्मार्ट सिटी प्रकल्प"],["Under the Vasai Smart City project, emphasis is on digital, safe and well-equipped development of the city.","वसई स्मार्ट सिटी प्रकल्पांतर्गत शहराचा डिजिटल, सुरक्षित आणि सुसज्ज विकास करण्यावर भर देण्यात आला आहे."],["Green Vasai-Virar — Tree Plantation Drive","हरित वसई-विरार — वृक्षारोपण मोहीम"],["Resolution to plant 5 lakh trees in the corporation area. The project aims to develop gardens, plant trees on both sides of roads and maintain environmental balance.","महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट."],["24×7 Water Supply Scheme — Vasai Division","24×7 पाणीपुरवठा योजना — वसई विभाग"],["Laying new water lines, renewing old pipelines and building new water tanks to provide 24-hour clean water to citizens of Vasai division.","वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे."],["Naringi Flyover Project Inspection","नारंगी उड्डाणपूल प्रकल्प पाहणी"],["Hon. Mayor Shri. Ajiv Patil personally inspected the work of the flyover at Naringi. During the inspection, he discussed the progress and difficulties of the work with the concerned officials, railway officials, contractors and sub-contractors, and gave instructions to speed up the work.","नारंगी येथील उड्डाणपुलाच्या कामाची मा. महापौर श्री. अजीव पाटील यांनी प्रत्यक्ष पाहणी केली. या पाहणीदरम्यान संबंधित अधिकारी, रेल्वे अधिकारी, कंत्राटदार व उपकंत्राटदार यांच्याशी चर्चा करून कामाची प्रगती व अडचणी जाणून घेतल्या. तसेच कामाला अधिक गती देण्याच्या सूचना दिल्या."],["Open for traffic by end of March 2026","मार्च २०२६ अखेर वाहतुकीसाठी खुले"],["Discussion on forming committees","समिती गठनाबाबत चर्चा"],["Discussion is ongoing on important subjects of the Standing Committee and on forming ward committees.","स्थायी समितीच्या महत्त्वाच्या विषयांवर तसेच प्रभाग समित्यांच्या गठनाबाबत चर्चा सुरू आहे."],["Mayor and Corporators Meeting","महापौर व नगर सेवक बैठक"],["Daily Garbage Collection & Cleanliness Meeting","दैनंदिन कचरा संकलन व स्वच्छता बैठक"],["Road Repair & Infrastructure Planning Meeting","रस्ते दुरुस्ती व पायाभूत सुविधा नियोजन बैठक"],["Road Repair & Construction","रस्ते दुरुस्ती व बांधकाम"],["Garbage Collection & Segregation","कचरा संकलन व वर्गीकरण"],["Gutter & Drain Cleaning","गटार व नाले साफसफाई"],["Footpath Construction Planning","फुटपाथ उभारणी नियोजन"],["Compost Production Technology Exhibition","खत निर्मिती तंत्रज्ञान प्रदर्शन"],["Solid Waste Management Exhibition","घनकचरा व्यवस्थापन प्रदर्शन"],["Inauguration of Solid Waste Management Camp-Exhibition","घनकचरा व्यवस्थापन शिबिर-प्रदर्शन उद्घाटन"],["Camp Exhibition","शिबिर प्रदर्शन"],["Cleanliness Review","स्वच्छता आढावा"],["Road Development","रस्ते विकास"],["Electricity Development","वीज विकास"],["MSEDCL Vasai Circle Review Meeting","MSEDCL वसई मंडळ आढावा बैठक"],["MSEDCL Development Works Review","MSEDCL विकास कामे आढावा"],["Trees to be planted","झाडे लावणार"],["Beneficiary Families","लाभार्थी कुटुंबे"],["Citizens","नागरिक","नागरिक"],["Environment","पर्यावरण"],["Water Supply","पाणीपुरवठा"],["Infrastructure","पायाभूत सुविधा"],["Administration","प्रशासन","प्रशासन"],["Crore","कोटी"],["Lakh","लाख"],["Vasai-Virar City Municipal Corporation Mayor, Health, Virar City, Improvement Meeting, Office Vice President","वसई-विरार शहर महानगरपालिका महापौर, आरोग्य, विरार शहर, सुधार बैठक, कार्यालय उपाध्यक्ष"],["January","जानेवारी"],["February","फेब्रुवारी"],["March","मार्च"],["April","एप्रिल"],["May","मे"],["June","जून"],["July","जुलै"],["August","ऑगस्ट"],["September","सप्टेंबर"],["October","ऑक्टोबर"],["November","नोव्हेंबर"],["December","डिसेंबर"],["August 2025","ऑगस्ट 2025"],["December 2025","डिसेंबर 2025"],["March 2026","मार्च 2026"],["10 March 2026","१० मार्च २०२६"],["11 March 2026","११ मार्च २०२६"],["28 February 2026","२८ फेब्रुवारी २०२६"],["5 March 2026","५ मार्च २०२६"],["Mon","सोम"],["Tue","मंगळ"],["Wed","बुध"],["Thu","गुरु"],["Fri","शुक्र"],["Sat","शनि"],["Sun","रवि"],["Today","आज"],["Day","दिवस"],["Week","आठवडा"],["This year","हे वर्ष"],["Date","दिनांक"],["Time","वेळ"],["Official Login","अधिकारी लॉगिन"],["Citizen Login","नागरिक लॉगिन"],["For Citizens — To Book an Appointment with the Mayor.","नागरिकांसाठी — महापौरांची भेट बुक करण्यासाठी."],["For Municipal Corporation Officers, Employees, and Administrative Staff.","महानगरपालिका अधिकारी, कर्मचारी आणि प्रशासकीय कर्मचाऱ्यांसाठी."],["Welcome Back","पुन्हा स्वागत आहे"],["Sign in","साइन इन"],["SIGN IN","साइन इन"],["Sign In to Continue","पुढे जाण्यासाठी साइन इन करा"],["Sign in to the Mayor Appointment Portal.","महापौर भेट पोर्टलवर साइन इन करा."],["Continue","पुढे चला"],["Login now","लॉगिन करा","Login करा"],["Logging in","लॉगिन होत आहे"],["Login successful","लॉगिन यशस्वी","Login यशस्वी"],["Login failed","लॉगिन अयशस्वी"],["Redirecting to login page","लॉगिन पेजवर जात आहे","Login page वर redirect होत आहे"],["Username","वापरकर्ता नाव"],["User Name","वापरकर्ता नाव"],["Password","पासवर्ड"],["Confirm Password","पासवर्डची पुष्टी करा"],["Re-enter password","पासवर्ड परत टाका","Password परत टाका"],["Password Login","पासवर्ड लॉगिन"],["OTP Login","OTP लॉगिन"],["Mobile OTP Login","मोबाईल OTP लॉगिन"],["Send OTP","OTP पाठवा"],["Send OTP & Register","OTP पाठवा व नोंदणी करा"],["Sending OTP","OTP पाठवत आहे"],["Verify OTP","OTP पडताळा"],["Verifying","पडताळणी सुरू"],["Verify & Login","पडताळा व लॉगिन करा"],["Verify & Register","पडताळा व नोंदणी करा"],["Resend OTP","OTP पुन्हा पाठवा"],["Did not receive OTP","OTP मिळाला नाही"],["Didn't receive the OTP","OTP मिळाला नाही"],["OTP expired","OTP ची मुदत संपली"],["OTP has expired","OTP ची मुदत संपली आहे"],["OTP expires in","OTP ची मुदत संपेल"],["OTP has been sent to","OTP पाठवला आहे"],["OTP sent to","OTP पाठवला"],["Invalid OTP. Please try again.","चुकीचा OTP. कृपया पुन्हा प्रयत्न करा."],["Enter 6 digit OTP","६ अंकी OTP टाका"],["Your OTP will be sent to your registered mobile number","तुमचा OTP नोंदणीकृत मोबाईल नंबरवर पाठवला जाईल"],["via WhatsApp","व्हॉट्सअ‍ॅपद्वारे"],["Create account","खाते तयार करा","Account तयार करा"],["Create Account","खाते तयार करा"],["Don't have an account","खाते नाही","Account नाही"],["Already have an account","आधीच खाते आहे"],["Registering","नोंदणी सुरू आहे"],["Registration successful","नोंदणी यशस्वी"],["Registration Success","नोंदणी यशस्वी"],["Registration failed","नोंदणी अयशस्वी"],["Mobile number is not registered.","मोबाईल नंबर नोंदणीकृत नाही."],["Mobile number not registered","मोबाईल नंबर नोंदणीकृत नाही","Mobile number नोंदणीकृत नाही"],["Mobile number must be 10 digits","मोबाईल नंबर १० अंकी असावा"],["Password must be at least 6 characters","पासवर्ड किमान ६ अक्षरांचा असावा"],["Passwords do not match","पासवर्ड जुळत नाहीत"],["Min. 6 characters","किमान ६ अक्षरे"],["Minimum 6 characters","किमान 6 अक्षरे","किमान 6 characters"],["characters","अक्षरे"],["Enter 10-digit mobile number","१० अंकी मोबाईल नंबर टाका"],["digit mobile","अंकी मोबाईल"],["digit mobile number","अंकी मोबाईल नंबर"],["Enter email","ईमेल टाका"],["Enter full name","पूर्ण नाव टाका"],["Enter mobile number","मोबाईल नंबर टाका"],["Enter name","नाव टाका"],["Enter order number","आदेश क्रमांक टाका"],["Enter password","पासवर्ड टाका"],["Enter total revenue","एकूण महसूल टाका"],["Enter username","वापरकर्ता नाव टाका"],["Enter valid amount","योग्य रक्कम टाका"],["Enter your email","तुमचा ईमेल टाका"],["Enter your full name","तुमचे पूर्ण नाव टाका"],["Enter your mobile number","तुमचा मोबाईल नंबर टाका"],["Enter your password","तुमचा पासवर्ड टाका"],["Enter your username","तुमचे वापरकर्ता नाव टाका"],["Your full name","आपले पूर्ण नाव","आपले पूर्ण नाव"],["Full address","पूर्ण पत्ता","पूर्ण पत्ता"],["Get SMS notification","SMS द्वारे सूचना मिळवा","SMS द्वारे notification मिळवा"],["Full Name","पूर्ण नाव"],["Name","नाव"],["Mobile","मोबाईल"],["Mobile number","मोबाईल नंबर"],["Mobile Number","मोबाईल नंबर"],["Email","ईमेल"],["Email (optional)","ईमेल (ऐच्छिक)"],["Email Address","ईमेल पत्ता"],["Address","पत्ता"],["Pincode","पिनकोड"],["Ward","प्रभाग"],["Ward No","प्रभाग क्रमांक"],["Ward seat no","प्रभाग जागा क्रमांक"],["ward councillor","प्रभाग नगरसेवक"],["Select Ward","प्रभाग निवडा"],["Ward A","प्रभाग A"],["Ward B","प्रभाग B"],["Ward C","प्रभाग C"],["Ward D","प्रभाग D"],["Ward E","प्रभाग E"],["Ward F","प्रभाग F"],["Ward G","प्रभाग G"],["Ward H","प्रभाग H"],["Ward I","प्रभाग I"],["Ward J","प्रभाग J"],["Ward-A","प्रभाग-A"],["Ward-B","प्रभाग-B"],["Ward-C","प्रभाग-C"],["Ward-D","प्रभाग-D"],["Ward-E","प्रभाग-E"],["Ward-F","प्रभाग-F"],["Ward-G","प्रभाग-G"],["Ward-H","प्रभाग-H"],["Ward-I","प्रभाग-I"],["Taluka","तालुका"],["District","जिल्हा"],["Region","विभाग"],["Designation","पदनाम"],["Role","भूमिका"],["Department","विभाग"],["Departments","विभाग"],["departments","विभाग"],["Department Name","विभागाचे नाव"],["Main Department","मुख्य विभाग"],["Sub Department","उप विभाग"],["Select","निवडा"],["Select Department","विभाग निवडा"],["Select Role","भूमिका निवडा"],["Select Type","प्रकार निवडा"],["Select Decision","निर्णय निवडा"],["Select Financial Year","आर्थिक वर्ष निवडा"],["Select Time Slot","वेळ निवडा"],["Type","प्रकार"],["Category","वर्ग"],["Priority","प्राधान्य"],["Change Priority","प्राधान्य बदला","Priority बदला"],["Status","स्थिती"],["Change Status","स्थिती बदला","Status बदला"],["Update Status","स्थिती अद्ययावत करा"],["Description","वर्णन"],["Details","तपशील"],["Purpose","उद्देश"],["Purpose / Subject","उद्देश / विषय"],["Subject","विषय"],["subject","विषय"],["Subjects","विषय"],["Document","दस्तऐवज"],["Documents","दस्तऐवज"],["File","फाईल"],["Image","प्रतिमा"],["Image File","प्रतिमा फाईल"],["Photo","फोटो"],["Amount","रक्कम"],["Total","एकूण"],["Number","क्रमांक"],["Identity","ओळख"],["Company","कंपनी"],["Individual","वैयक्तिक"],["Other","इतर"],["Office","कार्यालय"],["Officer","अधिकारी"],["Citizen","नागरिक"],["User","वापरकर्ता"],["Users","वापरकर्ते"],["users","वापरकर्ते"],["Admin","प्रशासक"],["Admin User","प्रशासक वापरकर्ता"],["Super Admin","सुपर प्रशासक"],["Department User","विभाग वापरकर्ता"],["Personal Details","वैयक्तिक तपशील"],["Personal Info","वैयक्तिक माहिती"],["Personal Information","वैयक्तिक माहिती"],["Created At","तयार दिनांक"],["Updated At","अद्ययावत दिनांक"],["Joined","सामील दिनांक"],["ID","आयडी"],["Sr. No","अ.क्र"],["Show","दाखवा"],["Show all","सर्व दाखवा"],["Show less","कमी दाखवा"],["Showing","दाखवत आहे"],["Rows per page","प्रति पान ओळी"],["of","पैकी"],["to","ते"],["or","किंवा"],["more","अधिक"],["results","निकाल"],["selected","निवडले"],["Records","नोंदी"],["Replies","उत्तरे"],["Yes","होय"],["No","नाही"],["Not yet","अजून नाही"],["All","सर्व"],["Auto","स्वयं"],["Auto Generated","स्वयं निर्मित"],["Good","शुभ"],["Hello","नमस्कार"],["Dear","प्रिय"],["Dear Citizen","प्रिय नागरिक"],["Important Notice","महत्त्वाची सूचना","महत्त्वाची सूचना"],["Save","जतन करा"],["Save Changes","बदल जतन करा"],["Saving","जतन होत आहे"],["Cancel","रद्द करा"],["Close","बंद करा"],["Delete","हटवा"],["Yes, Delete","होय, हटवा"],["Deleting","हटवत आहे"],["Edit","संपादित करा"],["Update","अद्ययावत करा"],["View","पहा"],["View Details","तपशील पहा"],["View File","फाईल पहा"],["View Document","दस्तऐवज पहा"],["Doc","दस्तऐवज"],["Download","डाउनलोड करा","Download करा"],["Download below","खाली डाउनलोड करा","खाली download करा"],["Download failed","डाउनलोड अयशस्वी"],["Export CSV","CSV निर्यात करा"],["Refresh","रिफ्रेश करा"],["Reset","रीसेट करा"],["Fetch","मिळवा"],["Add","जोडा"],["Adding","जोडत आहे"],["Open Form","फॉर्म उघडा"],["Clear Filters","फिल्टर काढा"],["CLEAR","साफ करा"],["Submit Application","अर्ज सादर करा"],["Submit Appointment","भेट विनंती सादर करा"],["Submitting","सादर करत आहे"],["Review & Submit","तपासा व सादर करा"],["Verify all information and submit","सर्व माहिती तपासा आणि सादर करा","सर्व माहिती verify करा आणि submit करा"],["Choose File","फाईल निवडा"],["Choose Files","फाईल्स निवडा"],["No file chosen","कोणतीही फाईल निवडली नाही"],["No files","फाईल्स नाहीत"],["Upload Photo","फोटो अपलोड करा"],["Change Photo","फोटो बदला","Photo बदला"],["Upload Attachment","संलग्नक अपलोड करा"],["Upload Document to Submit","सादर करण्यासाठी दस्तऐवज अपलोड करा"],["Upload Excel File","Excel फाईल अपलोड करा"],["Attach document","दस्तऐवज जोडा"],["Camera","कॅमेरा"],["Use Camera","कॅमेरा वापरा"],["Use Webcam","वेबकॅम वापरा"],["Capture Photo","फोटो घ्या"],["Upload or use camera","अपलोड करा किंवा कॅमेरा वापरा","Upload करा किंवा camera वापरा"],["Provide photo by upload or camera","अपलोड किंवा कॅमेरा वापरून फोटो द्या","Upload किंवा camera वापरून photo द्या"],["Use Upload/Camera below only if you want to change it","बदलायचा असेल तरच खाली अपलोड/कॅमेरा वापरा","बदलायचा असेल तरच खाली Upload/Camera वापरा"],['Click "Change Photo" to change','बदलण्यासाठी "फोटो बदला" वर क्लिक करा','Click "Photo बदला" to change'],['Click "Upload Photo" to change','बदलण्यासाठी "फोटो अपलोड करा" वर क्लिक करा'],["Photo selected","फोटो निवडला"],["New photo selected","नवीन फोटो निवडला","नवीन Photo निवडला"],["This will be used instead of the old photo","हा जुन्या फोटोऐवजी वापरला जाईल","हा जुन्या photo ऐवजी वापरला जाईल"],["Use this photo","हाच फोटो वापरा","हाच फोटो वापरा"],["Photo from previous visit is available","मागील भेटीचा फोटो उपलब्ध आहे","मागील भेटीचा फोटो उपलब्ध आहे"],["Citizen's photo","नागरिकाचा फोटो","Citizen चा photo"],["Photo received from token","टोकनवरून फोटो मिळाला","Token वरून Photo मिळाला"],["Visitor Photo","अभ्यागत फोटो"],["File Selected","फाईल निवडली"],["Preview not available","पूर्वावलोकन उपलब्ध नाही","Preview उपलब्ध नाही"],["Maximum 12 files allowed","जास्तीत जास्त १२ फाईल्स परवानगी"],["PDF, Word, Excel, PNG, JPG — max 12, optional","PDF, Word, Excel, PNG, JPG — कमाल १२, ऐच्छिक"],["PDF, DOC, or Image","PDF, DOC किंवा प्रतिमा"],["PDF Document","PDF दस्तऐवज"],["Word Document","Word दस्तऐवज"],["Excel / Spreadsheet","Excel / स्प्रेडशीट"],["Existing Files","विद्यमान फाईल्स"],["Size","आकार"],["Duration","कालावधी"],["Pending","प्रलंबित"],["Approved","मंजूर"],["Rejected","नाकारले"],["Rejected by Admin","प्रशासकाने नाकारले"],["Cancelled","रद्द"],["Completed","पूर्ण"],["Resolved","निकाली"],["Expired","मुदत संपली"],["Failed","अयशस्वी"],["In Progress","प्रगतीपथावर"],["Not Started","सुरू नाही"],["Not Conducted","घेतली नाही"],["On-Hold","स्थगित"],["Postponed","पुढे ढकलले"],["Follow Up","पाठपुरावा"],["Booked","बुक केले"],["Available","उपलब्ध"],["available","उपलब्ध"],["High","उच्च"],["Medium","मध्यम"],["Low","कमी"],["Normal","सामान्य"],["Urgent","तातडीचे"],["Emergency","आणीबाणी"],["Pending — Admin approval is awaited","प्रलंबित — प्रशासक मंजुरी बाकी आहे","Pending — Admin approval बाकी आहे"],["Pending — Awaiting Mayor's Approval","प्रलंबित — महापौरांच्या मंजुरीची प्रतीक्षा"],["Pending (Activities)","प्रलंबित (उपक्रम)"],["Pending Amount","प्रलंबित रक्कम"],["Remaining","उर्वरित"],["Allocated","वाटप"],["Utilized","वापरले"],["Appointment","भेट"],["Appointments","भेटी"],["All Appointments","सर्व भेटी"],["New Appointment","नवीन भेट"],["Appointment Details","भेटीचा तपशील"],["Appointment Booked","भेट बुक झाली"],["Appointment Scheduling","भेट वेळापत्रक"],["Appointment Applications","भेट अर्ज"],["Applications For Appointment","भेटीसाठी अर्ज"],["Today's appointments","आजच्या भेटी"],["No appointments today","आज कोणत्याही भेटी नाहीत"],["No appointments","कोणत्याही भेटी नाहीत","कोणतेही appointments नाहीत"],["appointments found","भेटी सापडल्या"],["total appointments","एकूण भेटी"],["Loading appointments","भेटी लोड होत आहेत","Appointments लोड होत आहेत"],["all your appointments are here.","तुमच्या सर्व भेटी येथे आहेत."],["Book your first appointment to get started.","सुरुवात करण्यासाठी तुमची पहिली भेट बुक करा."],["Your appointment has been booked successfully","तुमची भेट यशस्वीरित्या बुक झाली आहे","तुमची appointment successfully book झाली आहे"],["Your appointment time","तुमची भेटीची वेळ","तुमचा appointment time"],["Booking failed","बुकिंग अयशस्वी"],["Booked On","बुक दिनांक"],["Preferred Date","पसंतीची तारीख"],["Available Dates","उपलब्ध तारखा"],["Allowed Date Range","परवानगी असलेली तारीख श्रेणी"],["To choose a date","तारीख निवडण्यासाठी","Date निवडण्यासाठी"],["Select Date","तारीख निवडा","Date Select करा"],["Select Time Slot","वेळ स्लॉट निवडा","Time Slot Select करा"],["Select 15-Minute Appointment Slot","१५ मिनिटांचा भेट स्लॉट निवडा","15-Minute Appointment Slot निवडा"],["Select 15-minute slot","१५ मिनिटांचा स्लॉट निवडा","15-minute slot निवडा"],["Select Start Time","सुरुवातीची वेळ निवडा","Start Time निवडा"],["Select End Time","समाप्तीची वेळ निवडा","End Time निवडा"],["Select Start Time!","सुरुवातीची वेळ निवडा!","Start Time select करा!"],["Select End Time!","समाप्तीची वेळ निवडा!","End Time select करा!"],["Select date first","आधी तारीख निवडा","आधी date select करा"],["Please select a date!","कृपया तारीख निवडा!","कृपया date select करा!"],["Select your preferred date, time slot, and 15-minute appointment window","तुमची पसंतीची तारीख, वेळ स्लॉट आणि १५ मिनिटांची भेट वेळ निवडा"],["Choose a date from the available dates above → choose time slot → choose 15-minute window","वरील उपलब्ध तारखांमधून तारीख निवडा → वेळ स्लॉट निवडा → १५ मिनिटांची वेळ निवडा","वरील available dates मधून date निवडा → time slot निवडा → 15-minute window निवडा"],["No dates available at the moment","सध्या कोणत्याही तारखा उपलब्ध नाहीत","सध्या कोणत्याही dates available नाहीत"],["Wait for admin to add availability","प्रशासकाकडून उपलब्धता जोडली जाण्याची वाट पाहा","Admin कडून availability add होण्याची वाट पाहा"],["Time Slot","वेळ स्लॉट"],["Time Slots","वेळ स्लॉट"],["TIME SLOTS","वेळ स्लॉट"],["Slot","स्लॉट"],["slot","स्लॉट"],["SLOT PREVIEW","स्लॉट पूर्वावलोकन"],["slots available","स्लॉट उपलब्ध"],["Slots loading","स्लॉट लोड होत आहेत"],["Start Time","सुरुवातीची वेळ"],["End Time","समाप्तीची वेळ"],["My Time","माझी वेळ"],["Your Time","तुमची वेळ"],["Mayor Available","महापौर उपलब्ध"],["Available | Booked |","उपलब्ध | बुक |"],["The slot you selected was just booked. Please choose another slot.","तुम्ही निवडलेला स्लॉट आत्ताच बुक झाला. कृपया दुसरा स्लॉट निवडा.","तुम्ही निवडलेला slot आत्ताच book झाला. कृपया दुसरा slot निवडा."],["All 15-minute appointments for this slot are full. Please choose another slot.","या स्लॉटसाठी सर्व १५ मिनिटांच्या भेटी भरल्या आहेत. कृपया दुसरा स्लॉट निवडा.","या slot साठी सर्व 15-minute appointments भरले आहेत. कृपया दुसरा slot निवडा."],["This slot was just booked by someone else. Please choose another slot.","हा स्लॉट आत्ताच दुसऱ्याने बुक केला. कृपया दुसरा स्लॉट निवडा.","हा slot आत्ताच दुसऱ्याने book केला. कृपया दुसरा slot निवडा."],["This slot is already booked. Please choose another.","हा स्लॉट आधीच बुक झाला आहे. कृपया दुसरा निवडा.","हा slot आधीच book झाला आहे. कृपया दुसरा निवडा."],["After submission, the appointment will be confirmed after Admin approval.","सादर केल्यानंतर प्रशासकाच्या मंजुरीनंतर भेट निश्चित होईल.","Submit केल्यानंतर Admin approval नंतर appointment confirm होईल."],["Arrive on time on the day of the visit. The visit will not happen without token confirmation. Admin approval is required to confirm the appointment. For any difficulty contact the VVCMC office.","भेटीच्या दिवशी वेळेवर या. टोकन निश्चित झाल्याशिवाय भेट होणार नाही. भेट निश्चित होण्यासाठी प्रशासक मंजुरी आवश्यक आहे. कोणत्याही अडचणीसाठी वविशम कार्यालयाशी संपर्क करा.","भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही. Appointment confirm होण्यासाठी admin approval आवश्यक आहे. कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा."],["In order to process your appointment, all fields marked with an asterisk (*) are required.","तुमची भेट प्रक्रिया करण्यासाठी तारांकित (*) सर्व माहिती आवश्यक आहे."],["Provide details about your visit to the Mayor","महापौरांच्या भेटीबद्दल तपशील द्या"],["Write the reason for meeting the Mayor in detail — state your problem clearly","महापौरांना भेटण्याचे कारण विस्ताराने लिहा — आपली समस्या स्पष्टपणे मांडा","Mayor ला भेटण्याचे कारण विस्ताराने लिहा — आपली समस्या स्पष्टपणे मांडा"],["Reason for Visit","भेटीचे कारण"],["Visit Details","भेटीचा तपशील"],["Visit Information","भेटीची माहिती"],["Visit Number","भेट क्रमांक"],["Visited Before","आधी भेट दिली"],["Have you visited before","तुम्ही आधी भेट दिली आहे का"],["Number of Visitors","अभ्यागतांची संख्या"],["Visitors","अभ्यागत"],["existing visitor","जुने अभ्यागत"],["new visitor","नवीन अभ्यागत"],["last visit","शेवटची भेट"],["This citizen's","हे या नागरिकाचे","हे या नागरिकाचे"],["This will be this citizen's first visit","हे या नागरिकाचे पहिले भेट असेल","हे या नागरिकाचे पहिले भेट असेल"],["visit will be","वे भेट असेल","वे भेट असेल"],["Auto-filled from previous visit","मागील भेटीवरून स्वयं भरले","मागील भेटीवरून auto-filled"],["Already have token? (Has the citizen taken an appointment before?)","आधीच टोकन आहे? (नागरिकाने आधी भेट घेतली आहे का?)","Already have token? (Citizen ने आधी appointment घेतली आहे का?)"],["Do you have a token","टोकन आहे का","Token आहे का"],["Token","टोकन"],["Token ID","टोकन आयडी"],["Token No","टोकन क्रमांक"],["Token Number","टोकन क्रमांक"],["Token / Inward No","टोकन / आवक क्रमांक"],["Pre-filled from token","टोकनवरून आधीच भरले"],["Fetch Token first.","आधी टोकन मिळवा.","आधी Token Fetch करा."],["Please enter Token Number.","कृपया टोकन क्रमांक टाका.","कृपया Token Number टाका."],["Token not found","टोकन सापडले नाही","Token सापडले नाही"],["Token No not found","टोकन क्रमांक सापडला नाही","Token No सापडले नाही"],["Error while fetching token","टोकन मिळवताना त्रुटी आली","Token fetch करताना error आला"],["Citizen found","नागरिक सापडला","Citizen सापडला"],["Citizen Appointment not found","नागरिकाची भेट सापडली नाही","Citizen Appointment सापडले नाही"],["A blank form will open. Citizen's information will have to be filled manually.","रिकामा फॉर्म उघडेल. नागरिकाची माहिती स्वतः भरावी लागेल.","रिकामा form उघडेल. Citizen ची माहिती manually भरावी लागेल."],["QR Code","QR कोड"],["QR Code — show on the day of the visit","QR कोड — भेटीच्या दिवशी दाखवा","QR Code — भेटीच्या दिवशी दाखवा"],["Information is loading","माहिती लोड होत आहे","माहिती लोड होत आहे"],["Camera access denied. Give browser permission.","कॅमेरा परवानगी नाकारली. ब्राउझर परवानगी द्या.","Camera access denied. Browser permission द्या."],["Application Form","अर्ज नमुना"],["Application Detail","अर्ज तपशील"],["Application Details","अर्ज तपशील"],["Application Records","अर्ज नोंदी"],["Applications","अर्ज"],["applications","अर्ज"],["All Applications","सर्व अर्ज"],["New Application","नवीन अर्ज"],["Recent Applications","अलीकडील अर्ज"],["Applicant","अर्जदार"],["Application submitted successfully! Token Number","अर्ज यशस्वीरित्या सादर झाला! टोकन क्रमांक"],["Loading applications","अर्ज लोड होत आहेत"],["No applications yet","अद्याप कोणतेही अर्ज नाहीत"],["No matching applications found.","जुळणारे अर्ज सापडले नाहीत."],["Error fetching applications","अर्ज मिळवताना त्रुटी"],["Citizen Details","नागरिक तपशील"],["Citizen Appts","नागरिक भेटी"],["Complaint","तक्रार"],["Complaint Subject","तक्रारीचा विषय"],["Complaint Description","तक्रारीचे वर्णन"],["Latest inward complaints","नवीन आवक तक्रारी"],["New inward complaints will show up here.","नवीन आवक तक्रारी येथे दिसतील."],["Counts appear once inward applications are tracked.","आवक अर्ज नोंदवल्यानंतर संख्या दिसेल."],["Inward No","आवक क्रमांक"],["CitizenBridge — Inward Records · All citizen appointment requests","CitizenBridge — आवक नोंदी · सर्व नागरिक भेट विनंत्या"],["Submitted By","सादरकर्ता"],["Submitted On","सादर दिनांक"],["Assign to Department","विभागाकडे सोपवा"],["Tag To","यांच्याकडे टॅग करा"],["Tag To (Authority)","यांच्याकडे टॅग करा (प्राधिकारी)"],["Tagged To","टॅग केलेले"],["Subjects tagged to","यांच्याकडे टॅग केलेले विषय"],["Click any row to view full details","पूर्ण तपशील पाहण्यासाठी कोणत्याही ओळीवर क्लिक करा"],["Click any row to view full details & reply","पूर्ण तपशील व उत्तरासाठी कोणत्याही ओळीवर क्लिक करा"],["Search by name, inward no, subject","नाव, आवक क्रमांक, विषयानुसार शोधा"],["Search by name, token ID, mobile, purpose, ward","नाव, टोकन आयडी, मोबाईल, उद्देश, प्रभागानुसार शोधा"],["Search by name, username, mobile, email","नाव, वापरकर्ता नाव, मोबाईल, ईमेलनुसार शोधा"],["Search by name, ward, mobile, designation","नाव, प्रभाग, मोबाईल, पदनामानुसार शोधा"],["Search by date","तारखेनुसार शोधा"],["Search subject ID","विषय आयडी शोधा"],["Search appointment","भेट शोधा"],["Search appointments","भेटी शोधा"],["Search meeting no","सभा क्रमांक शोधा"],["Search meetings","सभा शोधा"],["Search Order No","आदेश क्रमांक शोधा"],["Try a different filter or search term.","वेगळा फिल्टर किंवा शोध शब्द वापरा."],["Try another filter or search.","दुसरा फिल्टर किंवा शोध वापरा."],["No records found","कोणत्याही नोंदी सापडल्या नाहीत"],["Reply","उत्तर"],["Send Reply","उत्तर पाठवा"],["Reply Message","उत्तर संदेश"],["Reply Document","उत्तर दस्तऐवज"],["Attach Reply Document","उत्तर दस्तऐवज जोडा"],["Reply to Application","अर्जाला उत्तर द्या"],["Reply / Note to Citizen","नागरिकाला उत्तर / टीप"],["Reply By","उत्तरदाता"],["Write a reply message to the applicant","अर्जदाराला उत्तर संदेश लिहा","Applicant ला reply message लिहा"],["Please write a reply message.","कृपया उत्तर संदेश लिहा.","कृपया reply message लिहा."],["Reply sent successfully!","उत्तर यशस्वीरित्या पाठवले!","Reply यशस्वीरित्या पाठवली!"],["Error while sending reply","उत्तर पाठवताना त्रुटी आली","Reply पाठवताना error आला"],["Reply error","उत्तर त्रुटी"],["Write a note or reply that will be sent to the citizen as acknowledgement","नागरिकाला पोचपावती म्हणून पाठवली जाणारी टीप किंवा उत्तर लिहा"],["Saving will update the citizen's application status and send an acknowledgement notification automatically.","जतन केल्यावर नागरिकाच्या अर्जाची स्थिती अद्ययावत होईल आणि पोचपावती सूचना आपोआप पाठवली जाईल."],["Save & Notify Citizen","जतन करा व नागरिकाला कळवा"],["& citizen notified!","व नागरिकाला कळवले!"],["Status updated to","स्थिती अद्ययावत केली"],["Document from Admin","प्रशासकाकडून दस्तऐवज"],["Admin Note","प्रशासक टीप"],["SMS sent to","SMS पाठवला"],["WhatsApp sent to","व्हॉट्सअ‍ॅप पाठवला"],["SMS error for","SMS त्रुटी"],["SMS error","SMS त्रुटी"],["Error for","त्रुटी"],["Invalid mobile","चुकीचा मोबाईल"],["Availability","उपलब्धता"],["Mayor Availability","महापौर उपलब्धता"],["Set Mayor Availability","महापौर उपलब्धता ठरवा"],["Availability Details","उपलब्धता तपशील"],["Availability Records","उपलब्धता नोंदी"],["Add Availability","उपलब्धता जोडा"],["Manage Mayor's available dates and time slots","महापौरांच्या उपलब्ध तारखा व वेळ स्लॉट व्यवस्थापित करा","Mayor च्या available dates व time slots manage करा"],["Add Slot","स्लॉट जोडा"],["Remove slot","स्लॉट काढा"],["Slot removed.","स्लॉट काढला."],["Availability removed.","उपलब्धता काढली."],["Delete Availability","उपलब्धता हटवायची"],["all availability will be removed.","ची सर्व उपलब्धता काढली जाईल.","ची सर्व availability remove होईल."],["Existing slots","विद्यमान स्लॉट"],["No availability records found.","कोणत्याही उपलब्धता नोंदी सापडल्या नाहीत."],["Loading availability","उपलब्धता लोड होत आहे"],["Failed to load availability data","उपलब्धता माहिती लोड करण्यात अयशस्वी"],["Failed to add slot","स्लॉट जोडण्यात अयशस्वी"],["Failed to remove slot","स्लॉट काढण्यात अयशस्वी"],["Switch to Week view to browse other days.","इतर दिवस पाहण्यासाठी आठवडा दृश्य निवडा."],["Live · 8:00 AM – 6:00 PM","थेट · सकाळी 8:00 – सायं 6:00"],["Meeting","सभा"],["Meetings","सभा"],["Create Meeting","सभा तयार करा"],["Edit Meeting","सभा संपादित करा"],["Delete Meeting","सभा हटवायची"],["Meeting created","सभा तयार झाली"],["Meeting updated","सभा अद्ययावत झाली"],["Meeting deleted","सभा हटवली"],["Meeting Date","सभेचा दिनांक"],["Meeting Time","सभेची वेळ"],["Meeting No","सभा क्रमांक"],["Meeting Number","सभा क्रमांक"],["Meeting Proceedings","सभा कामकाज"],["Meeting Subjects","सभा विषय"],["Type Of Meeting","सभेचा प्रकार"],["Meeting / subject","सभा / विषय"],["Open meeting","सभा उघडा"],["View Meetings","सभा पहा"],["Meetings assigned to you","तुम्हाला सोपवलेल्या सभा"],["Meetings and their subjects will appear here.","सभा व त्यांचे विषय येथे दिसतील."],["meetings · all departments","सभा · सर्व विभाग"],["All meetings · progress = subjects with action taken","सर्व सभा · प्रगती = कार्यवाही झालेले विषय"],["Progress = subjects with action taken","प्रगती = कार्यवाही झालेले विषय"],["No meetings match this filter","या फिल्टरशी जुळणाऱ्या सभा नाहीत"],["No meetings to show yet","अद्याप दाखवण्यासाठी सभा नाहीत"],["No meeting available","कोणतीही सभा उपलब्ध नाही","कोणतीही meeting उपलब्ध नाही"],["No meeting subjects assigned yet","अद्याप कोणतेही सभा विषय सोपवलेले नाहीत"],["Click on the meeting number from the Meetings page","सभा पेजवरून सभा क्रमांकावर क्लिक करा","Meetings page वरून meeting number वर click करा"],["After saving the meeting, click on the Meeting Number and add Subjects","सभा जतन केल्यावर सभा क्रमांकावर क्लिक करून विषय जोडा","Meeting save केल्यावर Meeting Number वर click करून Subjects add करा"],["Click to view/add subjects","विषय पाहण्यासाठी/जोडण्यासाठी क्लिक करा"],["tap → subjects","टॅप करा → विषय"],["Manage Sabha Kamkaj","सभा कामकाज व्यवस्थापित करा","Sabha Kamkaj manage करा"],["Sabha Kamkaj — Subject wise progress tracking","सभा कामकाज — विषयनिहाय प्रगती मागोवा"],["— subjects of all departments of the selected meetings will appear on the dashboard","— निवडलेल्या सभांचे सर्व विभागांचे विषय डॅशबोर्डवर दिसतील","— निवडलेल्या सभांचे सर्व विभागांचे विषय dashboard वर दिसतील"],["General Body","महासभा"],["General Body (महासभा)","महासभा (General Body)"],["Standing Committee","स्थायी समिती"],["Standing Committee (स्थायी समिती)","स्थायी समिती (Standing Committee)"],["Standing Committee Chairman","स्थायी समिती सभापती"],["Not a member of General Body / Standing Committee","महासभा / स्थायी समिती सदस्य नाही","General Body / Standing Committee सदस्य नाही"],["No committee","समिती नाही"],["General","सर्वसाधारण"],["Administrative","प्रशासकीय"],["Administrative & Financial","प्रशासकीय व आर्थिक"],["Administrative and Financial Approval","प्रशासकीय व आर्थिक मान्यता"],["Contract Approval","करार मान्यता"],["Nivida Samiti Rate Approval","निविदा समिती दर मान्यता"],["Prashaskiy","प्रशासकीय"],["Samvida","संविदा"],["Agenda","कार्यसूची"],["Decision","निर्णय"],["Decision In Meeting","सभेतील निर्णय"],["Decision Breakdown","निर्णय विभागणी"],["Decision pending","निर्णय प्रलंबित"],["Decided, action pending","निर्णय झाला, कार्यवाही प्रलंबित"],["Proceedings","कामकाज"],["Subject ID","विषय आयडी"],["Subject Name","विषयाचे नाव"],["Subject Type","विषय प्रकार"],["Subject Type Breakdown","विषय प्रकार विभागणी"],["Add Subject","विषय जोडा"],["Edit Subject","विषय संपादित करा"],["Update Subject","विषय अद्ययावत करा"],["Delete Subject","विषय हटवायचा"],["Subject added","विषय जोडला"],["Subject updated","विषय अद्ययावत झाला"],["Subject deleted","विषय हटवला"],["Subject ID missing","विषय आयडी नाही"],["Subject Name is required","विषयाचे नाव आवश्यक आहे"],["Enter subject name","विषयाचे नाव टाका","Subject name टाका"],["No Subjects","विषय नाहीत"],["No subjects","कोणतेही विषय नाहीत","कोणतेही subjects नाहीत"],["No subject found","कोणताही विषय सापडला नाही","कोणताही subject सापडला नाही"],["Search a different Subject ID","वेगळा विषय आयडी शोधा","वेगळा Subject ID search करा"],["No subjects added to this meeting yet.","या सभेत अद्याप विषय जोडलेले नाहीत."],["Add subjects using the + Add Subject button","+ विषय जोडा बटण वापरून विषय जोडा","Add Subject button वापरून subjects add करा"],["Failed to load subjects","विषय लोड करण्यात अयशस्वी"],["Total Subjects","एकूण विषय"],["TOTAL MEETINGS","एकूण सभा"],["Department-wise Subject Progress","विभागनिहाय विषय प्रगती"],["Meeting-wise Subject Progress","सभानिहाय विषय प्रगती"],["Your Department Progress","तुमच्या विभागाची प्रगती"],["Action","कार्यवाही"],["Actions","क्रिया"],["Action taken","केलेली कार्यवाही"],["action taken","केलेली कार्यवाही"],["Action Taken Progress","कार्यवाही प्रगती"],["Action Taken saved","केलेली कार्यवाही जतन झाली"],["Save Action Taken","केलेली कार्यवाही जतन करा"],["No action taken yet","अद्याप कार्यवाही नाही"],["Open a subject to record its next step.","पुढील टप्पा नोंदवण्यासाठी विषय उघडा."],["Completion","पूर्तता"],["Completion Rate","पूर्तता दर"],["Here's where your meetings and applications stand today.","तुमच्या सभा आणि अर्जांची आजची स्थिती येथे आहे."],["Record Meeting","सभा रेकॉर्ड करा"],["Record Meeting — available at scheduled meeting time","सभा रेकॉर्ड करा — नियोजित सभेच्या वेळी उपलब्ध"],["Hide Recorder","रेकॉर्डर लपवा"],["Start Session","सत्र सुरू करा"],["Stop Session","सत्र थांबवा"],["Session ended.","सत्र संपले."],["Audio Recording (optional)","ऑडिओ रेकॉर्डिंग (ऐच्छिक)"],["Audio Recording ON","ऑडिओ रेकॉर्डिंग सुरू"],["Upload Meeting Recording (optional)","सभेचे रेकॉर्डिंग अपलोड करा (ऐच्छिक)"],["Recording saved","रेकॉर्डिंग जतन झाले"],["Recording ready","रेकॉर्डिंग तयार"],["Auto-recording saved","स्वयं-रेकॉर्डिंग जतन झाले"],["Waiting for someone to speak","कोणी बोलण्याची प्रतीक्षा"],["Waiting","प्रतीक्षा"],["Speaking","बोलत आहे"],["Silence","शांतता"],["Microphone Not Found","मायक्रोफोन सापडला नाही"],["Microphone Permission Denied","मायक्रोफोन परवानगी नाकारली"],["Microphone Could Not Start — Refresh page","मायक्रोफोन सुरू झाला नाही — पेज रिफ्रेश करा"],["1st Envelope Opened","पहिला लिफाफा उघडला"],["2nd Envelope Opened","दुसरा लिफाफा उघडला"],["Ghoshwara Ready","घोषवारा तयार"],["LOI Issued","LOI जारी"],["SD Submitted","SD सादर"],["Tender Floated","निविदा प्रसिद्ध"],["Work Order Issued","कार्यादेश जारी"],["Work Started","काम सुरू"],["Work Progress - Financial Progress","कामाची प्रगती - आर्थिक प्रगती"],["Work Progress - Physical Progress","कामाची प्रगती - भौतिक प्रगती"],["Tracking","मागोवा"],["Weekly Trend","साप्ताहिक कल"],["Analytics","विश्लेषण"],["Analytic overview","विश्लेषण आढावा"],["No regional data yet","अद्याप प्रादेशिक माहिती नाही"],["will appear here.","येथे दिसतील."],["User Management","वापरकर्ता व्यवस्थापन"],["Janata Darbar — User Management","जनता दरबार — वापरकर्ता व्यवस्थापन"],["All Users","सर्व वापरकर्ते"],["All Roles","सर्व भूमिका"],["Add User","वापरकर्ता जोडा"],["Add New User","नवीन वापरकर्ता जोडा"],["Edit User","वापरकर्ता संपादित करा"],["User Detail","वापरकर्ता तपशील"],["User Added Successfully","वापरकर्ता यशस्वीरित्या जोडला"],["User Updated Successfully","वापरकर्ता यशस्वीरित्या अद्ययावत झाला"],["Loading users","वापरकर्ते लोड होत आहेत"],["No users found","वापरकर्ते सापडले नाहीत"],["No users found for department","या विभागासाठी वापरकर्ते सापडले नाहीत"],["Users fetch failed","वापरकर्ते मिळवण्यात अयशस्वी"],["Error while fetching users","वापरकर्ते मिळवताना त्रुटी आली","Users fetch करताना error आला"],["Corporator","नगरसेवक"],["Corporators","नगरसेवक"],["corporators","नगरसेवक"],["Corporators / Nagarsevak","नगरसेवक / Corporators","Corporators / नगरसेवक"],["Add Corporator","नगरसेवक जोडा"],["Name of corporator","नगरसेवकाचे नाव"],["Names of corporators","नगरसेवकांची नावे"],["Corporator Added Successfully","नगरसेवक यशस्वीरित्या जोडला"],["Corporator Updated Successfully","नगरसेवक यशस्वीरित्या अद्ययावत झाला"],["Loading corporators","नगरसेवक लोड होत आहेत"],["Corporators fetch failed","नगरसेवक मिळवण्यात अयशस्वी"],["Error while fetching corporators","नगरसेवक मिळवताना त्रुटी आली","Corporators fetch करताना error आला"],['No corporators found — click on "+ Add Corporator"','नगरसेवक सापडले नाहीत — "+ नगरसेवक जोडा" वर क्लिक करा','No corporators found — "+ Add Corporator" वर click करा'],["Corporators & Office Bearers","नगरसेवक व पदाधिकारी"],["Office Bearers","पदाधिकारी"],["Dy. Mayor","उपमहापौर"],["Standing Chairman","स्थायी समिती सभापती"],["Not assigned","नियुक्त नाही"],["Member","सदस्य"],["Members","सदस्य"],["Add Member","सदस्य जोडा"],["Member Added Successfully","सदस्य यशस्वीरित्या जोडला"],["Member Updated Successfully","सदस्य यशस्वीरित्या अद्ययावत झाला"],["Loading members","सदस्य लोड होत आहेत"],["Members fetch failed","सदस्य मिळवण्यात अयशस्वी"],["Error while fetching members","सदस्य मिळवताना त्रुटी आली"],['No members found — click on "+ Add Member"','सदस्य सापडले नाहीत — "+ सदस्य जोडा" वर क्लिक करा'],["e.g. 1A","उदा. 1A"],["10 digit mobile number","१० अंकी मोबाईल नंबर"],["Deleted Successfully","यशस्वीरित्या हटवले"],["Do you want to delete","हटवायचे आहे का","ला delete करायचे आहे का"],["This record will be permanently deleted. Are you sure?","ही नोंद कायमची हटवली जाईल. खात्री आहे का?","He record permanently delete होईल. Sure aahes ka?"],["This subject will be permanently deleted.","हा विषय कायमचा हटवला जाईल.","He subject permanently delete होईल."],["Leader of House","सभागृह नेते"],["Leader of Opposition","विरोधी पक्षनेते"],["Municipal Commissioner","महानगरपालिका आयुक्त"],["Additional Commissioner","अतिरिक्त आयुक्त"],["Secretary","सचिव"],["Collector","जिल्हाधिकारी"],["Collector Office","जिल्हाधिकारी कार्यालय"],["Deputy Collector","उपजिल्हाधिकारी"],["CEO","मुख्य कार्यकारी अधिकारी"],["Deputy CEO","उप मुख्य कार्यकारी अधिकारी"],["Chief Officer","मुख्याधिकारी"],["Deputy Chief Officer","उप मुख्याधिकारी"],["Guardian Minister","पालकमंत्री"],["Gram Sevak","ग्रामसेवक"],["Sarpanch","सरपंच"],["Grampanchayat","ग्रामपंचायत"],["Municipal Corporation","महानगरपालिका"],["Corporation / NagarPalika","महानगरपालिका / नगरपालिका"],["Mahanagarpalika Office","महानगरपालिका कार्यालय"],["Head Office","मुख्य कार्यालय"],["Main Office","मुख्य कार्यालय"],["NGO","स्वयंसेवी संस्था"],["Palghar","पालघर"],["Vasai","वसई"],["Dahanu","डहाणू"],["Jawhar","जव्हार"],["Mokhada","मोखाडा"],["Talasari","तलासरी"],["Vikramgad","विक्रमगड"],["Wada","वाडा"],["Accounts & Finance","लेखा व वित्त"],["Finance & Accounts","वित्त व लेखा"],["Finance & Audit","वित्त व लेखापरीक्षण"],["Agriculture & Allied","कृषी व संलग्न"],["Agriculture & Allied Services","कृषी व संलग्न सेवा"],["Disaster Management","आपत्ती व्यवस्थापन"],["Education","शिक्षण"],["Engineering & Works","अभियांत्रिकी व बांधकाम"],["Governance & Law","प्रशासन व कायदा"],["Health","आरोग्य"],["Health & Sanitation","आरोग्य व स्वच्छता"],["Health & Social Welfare","आरोग्य व समाजकल्याण"],["Health & Welfare","आरोग्य व कल्याण"],["Infrastructure & Utilities","पायाभूत सुविधा व सेवा"],["Legal Department","विधी विभाग"],["Office & Workflow","कार्यालय व कार्यपद्धती"],["Planning & Statistics","नियोजन व सांख्यिकी"],["Revenue & Tax","महसूल व कर"],["Rural & Development","ग्रामीण व विकास"],["Rural Development","ग्रामविकास"],["Social Welfare","समाजकल्याण"],["Supply & Control","पुरवठा व नियंत्रण"],["Supply & Food","पुरवठा व अन्न"],["Village Development","गाव विकास"],["Water & Sanitation","पाणी व स्वच्छता"],["Water & Sewerage","पाणी व मलनिःसारण"],["IT DEPARTMENT","माहिती तंत्रज्ञान विभाग"],["Accounting Department HO","लेखा विभाग मु.का."],["Accounting Department, (A) HO","लेखा विभाग, (अ) मु.का."],["Advertisement Tax Department HO","जाहिरात कर विभाग मु.का."],["Audit Department HO","लेखापरीक्षण विभाग मु.का."],["Birth and Death Department HO","जन्म व मृत्यू विभाग मु.का."],["Commissioner Office HO","आयुक्त कार्यालय मु.का."],["Construction department HO","बांधकाम विभाग मु.का."],["Department of Hygiene Disorder Management HO","स्वच्छता व्यवस्थापन विभाग मु.का."],["Disaster Management Departmengt HO","आपत्ती व्यवस्थापन विभाग मु.का."],["Diwabatti Department HO","दिवाबत्ती विभाग मु.का."],["Environment / Tree Authority / Forests / Parks Department / Election Department / Census Department HO","पर्यावरण / वृक्ष प्राधिकरण / वने / उद्यान विभाग / निवडणूक विभाग / जनगणना विभाग मु.का."],["Establishment Department HO","आस्थापना विभाग मु.का."],["Fire Brigade Department HO","अग्निशमन विभाग मु.का."],["General Administration Department / Records Department HO","सामान्य प्रशासन विभाग / अभिलेख विभाग मु.का."],["Handicapped welfare Department HO","दिव्यांग कल्याण विभाग मु.का."],["Health Department HO","आरोग्य विभाग मु.का."],["Inward-out Department HO","आवक-जावक विभाग मु.का."],["Library department HO","ग्रंथालय विभाग मु.का."],["Local Body Tax Department HO","स्थानिक संस्था कर विभाग मु.का."],["Market Recovery Department HO","बाजार वसुली विभाग मु.का."],["Marriage Registration Department HO","विवाह नोंदणी विभाग मु.का."],["Medical Health Department HO","वैद्यकीय आरोग्य विभाग मु.का."],["Meeting Department HO","सभा विभाग मु.का."],["Mud and Bhuibhade Department HO","माती व भुईभाडे विभाग मु.का."],["Naharkat / License Certificates Department HO","ना-हरकत / परवाना प्रमाणपत्र विभाग मु.का."],["Nulm department / hawker policy department HO","NULM विभाग / फेरीवाला धोरण विभाग मु.का."],["Satellite City Department HO","उपनगर विभाग मु.का."],["Special Planning Authority Department HO","विशेष नियोजन प्राधिकरण विभाग मु.का."],["Tax department HO","कर विभाग मु.का."],["Town Planning Department HO","नगररचना विभाग मु.का."],["Transportation / Vehicle Department HO","परिवहन / वाहन विभाग मु.का."],["Unauthorized Construction Committee HO","अनधिकृत बांधकाम समिती मु.का."],["Unauthorized Construction Department HO","अनधिकृत बांधकाम विभाग मु.का."],["Water Supply Department HO","पाणीपुरवठा विभाग मु.का."],["Women and Child welfare Department HO","महिला व बालकल्याण विभाग मु.का."],["Revenue Allocation","महसूल वाटप"],["Super Admin – Revenue Allocation","सुपर प्रशासक – महसूल वाटप"],["Add Revenue","महसूल जोडा"],["Save Revenue","महसूल जतन करा"],["Total Revenue","एकूण महसूल"],["Revenue Activity","महसूल उपक्रम"],["Add Revenue Activity","महसूल उपक्रम जोडा"],["Revenue Doc","महसूल दस्तऐवज"],["Revenue added successfully","महसूल यशस्वीरित्या जोडला"],["No revenue found","महसूल सापडला नाही"],["Matched revenue","जुळलेला महसूल"],["Add Activity","उपक्रम जोडा"],["Save Activity","उपक्रम जतन करा"],["Activity History","उपक्रम इतिहास"],["Activity added successfully","उपक्रम यशस्वीरित्या जोडला"],["Activity saved successfully","उपक्रम यशस्वीरित्या जतन झाला"],["No activities found","उपक्रम सापडले नाहीत"],["Error fetching activities","उपक्रम मिळवताना त्रुटी"],["Failed to add activity","उपक्रम जोडण्यात अयशस्वी"],["Failed to save activity","उपक्रम जतन करण्यात अयशस्वी"],["Add Disbursement","वितरण जोडा"],["Disburse Amount","वितरित रक्कम"],["Disburse Amt","वितरित रक्कम"],["Amount exceeds pending","रक्कम प्रलंबित रकमेपेक्षा जास्त आहे"],["Amount Sanctioned (₹)","मंजूर रक्कम (₹)"],["Sanctioned","मंजूर"],["Sanctioned Amt","मंजूर रक्कम"],["Sanctioned Order Date","मंजुरी आदेश दिनांक"],["Sanctioned Order No","मंजुरी आदेश क्रमांक"],["Add sanctioned & expenditure details","मंजूर व खर्च तपशील जोडा"],["Record sanctioned & spent details","मंजूर व खर्च झालेले तपशील नोंदवा"],["Order Date","आदेश दिनांक"],["Order No","आदेश क्रमांक"],["Financial Year","आर्थिक वर्ष"],["FY","आ.व."],["Financial year & role wise consolidated report","आर्थिक वर्ष व भूमिकानिहाय एकत्रित अहवाल"],["Bill","बिल"],["Bill / UC Upload","बिल / UC अपलोड"],["Resolved By","निकाली काढणारे"],["Resolved On","निकाली दिनांक"],["Resolved Role","निकाली काढणाऱ्याची भूमिका"],["Loading","लोड होत आहे"],["Loading dashboard","डॅशबोर्ड लोड होत आहे"],["Loading departments","विभाग लोड होत आहेत"],["Creating","तयार होत आहे"],["Sending","पाठवत आहे"],["added successfully","यशस्वीरित्या जोडले"],["Something went wrong","काहीतरी चूक झाली"],["Server error","सर्व्हर त्रुटी"],["Server error. Is the backend running?","सर्व्हर त्रुटी. बॅकएंड चालू आहे का?","Server error. Backend चालू आहे का?"],["All fields required","सर्व माहिती आवश्यक"],["Fill all fields","सर्व माहिती भरा","सर्व fields भरा"],["Fill all required fields","सर्व आवश्यक माहिती भरा","All required fields fill करा"],["All required fields must be filled","सर्व आवश्यक माहिती भरली पाहिजे"],["Required fields missing: Full Name, Mobile, and Subject are required","आवश्यक माहिती अपूर्ण: पूर्ण नाव, मोबाईल आणि विषय आवश्यक आहेत"],["Failed to fetch","मिळवण्यात अयशस्वी"],["Failed to save","जतन करण्यात अयशस्वी"],["Failed to update","अद्ययावत करण्यात अयशस्वी"],["Failed to delete","हटवण्यात अयशस्वी"],["Save failed","जतन अयशस्वी"],["Update failed","अद्ययावत अयशस्वी"],["Delete failed","हटवणे अयशस्वी"],["Department fetch error","विभाग मिळवताना त्रुटी"],["Camera access denied. Please allow camera permission.","कॅमेरा परवानगी नाकारली. कृपया कॅमेरा परवानगी द्या."],["Document file is required. Please upload a file before submitting.","दस्तऐवज फाईल आवश्यक आहे. सादर करण्यापूर्वी कृपया फाईल अपलोड करा."],["Failed to send OTP. Please try again.","OTP पाठवण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा."],["Financial year not found. Please add revenue first.","आर्थिक वर्ष सापडले नाही. कृपया आधी महसूल जोडा."],["Mobile number is not registered. Please register first.","मोबाईल नंबर नोंदणीकृत नाही. कृपया आधी नोंदणी करा."],["OTP expired! Please resend","OTP ची मुदत संपली! कृपया पुन्हा पाठवा"],["OTP has expired. Please request a new OTP.","OTP ची मुदत संपली आहे. कृपया नवीन OTP मागवा."],["Please enter a valid 10-digit mobile number.","कृपया योग्य १० अंकी मोबाईल नंबर टाका."],["Please enter a valid mobile number.","कृपया योग्य मोबाईल नंबर टाका."],["Please enter the 6-digit OTP.","कृपया ६ अंकी OTP टाका."],["Please enter your password.","कृपया तुमचा पासवर्ड टाका."],["Please enter your username.","कृपया तुमचे वापरकर्ता नाव टाका."],["Please fill all required fields","कृपया सर्व आवश्यक माहिती भरा"],["Please fill in all required fields.","कृपया सर्व आवश्यक माहिती भरा."],["Please fill required fields","कृपया आवश्यक माहिती भरा"],["Please login to the portal using OTP Login","कृपया OTP लॉगिन वापरून पोर्टलवर लॉगिन करा"],["Please provide your basic details to proceed","पुढे जाण्यासाठी कृपया तुमची मूलभूत माहिती द्या"],["Please select a portal to log in.","लॉगिन करण्यासाठी कृपया पोर्टल निवडा."],["Please select Financial Year","कृपया आर्थिक वर्ष निवडा"],["Please select Order Date","कृपया आदेश दिनांक निवडा"],["Please upload a file to proceed with submission","सादर करण्यासाठी कृपया फाईल अपलोड करा"],["Please upload Bill / UC document","कृपया बिल / UC दस्तऐवज अपलोड करा"],["Please upload or capture a clear photo for identification at the Mayor's office","महापौर कार्यालयात ओळखीसाठी कृपया स्पष्ट फोटो अपलोड करा किंवा काढा"],["Server Error. Please try again","सर्व्हर त्रुटी. कृपया पुन्हा प्रयत्न करा"],["Wrong OTP! Please try again","चुकीचा OTP! कृपया पुन्हा प्रयत्न करा"],["This mobile number is already registered. Please Login.","हा मोबाईल नंबर आधीच नोंदणीकृत आहे. कृपया लॉगिन करा.","हा mobile number already registered आहे ❌ Please Login करा."],["morning","सकाळ"],["afternoon","दुपार"],["evening","संध्याकाळ"],["Appointment Time","भेटीची वेळ","APPOINTMENT_TIME"],["Saturday","शनिवार"],["Sunday","रविवार"],["Monday","सोमवार"],["Tuesday","मंगळवार"],["Wednesday","बुधवार"],["Thursday","गुरुवार"],["Friday","शुक्रवार"]],we="appLang",je=["en","mr"],le="en",Se=["placeholder","title","alt","aria-label"],ke="[data-no-translate], script, style, noscript, textarea, code, pre, [contenteditable='true']",de="(?:[^\\p{L}\\p{M}]|[\\uFE0E\\uFE0F\\u200D\\u20E3])*",Qe=new RegExp("^("+de+")([\\s\\S]*?)("+de+")$","u"),k=t=>{const o=Qe.exec(t);return o?[o[1],o[2],o[3]]:["",t,""]},z=t=>t.replace(/\s+/g," ").trim().toLowerCase(),ce=t=>/[A-Z]/.test(t)&&!/[a-z]/.test(t),L=new Map,q=new Map;(()=>{const t=(o,i,n)=>{const s=z(k(o)[1]);s&&!L.has(s)&&L.set(s,i);const r=z(o);r&&!q.has(r)&&q.set(r,n)};se.forEach(o=>{const i=[k(o[0])[1],k(o[1])[1]],n=[o[0],o[1]];o.forEach((s,r)=>r<2&&t(s,i,n))}),se.forEach(o=>{const i=[k(o[0])[1],k(o[1])[1]];o.slice(2).forEach(n=>t(n,i,[o[0],o[1]]))})})();let D=(()=>{try{const t=localStorage.getItem(we);return je.includes(t)?t:le}catch{return le}})();const Ke=()=>D,Xe=["January","February","March","April","May","June","July","August","September","October","November","December","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Ze={jan:"जाने",feb:"फेब्रु",mar:"मार्च",apr:"एप्रि",jun:"जून",jul:"जुलै",aug:"ऑग",sep:"सप्टें",oct:"ऑक्टो",nov:"नोव्हें",dec:"डिसें"},U=new RegExp("\\b("+Xe.join("|")+")\\b","g");function et(t,o){return o!=="mr"||!/\d/.test(t)||!U.test(t)?null:(U.lastIndex=0,t.replace(U,n=>{const s=L.get(n.toLowerCase());return s?s[1]:Ze[n.toLowerCase()]||n}).replace(/\b(AM|PM)\b/g,n=>n==="AM"?"सकाळी":"सायं"))}function T(t,o=D){if(t==null||typeof t!="string"||!/[\p{L}]/u.test(t))return t;const i=o==="mr"?1:0,n=q.get(z(t));if(n&&n[i]){const c=t.match(/^\s*/)[0],g=t.match(/\s*$/)[0];let m=n[i];return o==="en"&&ce(t)&&(m=m.toUpperCase()),c+m+g}const[s,r,d]=k(t);if(!r)return t;const p=L.get(z(r));if(!p)return et(t,o)??t;let x=p[i];return x?(o==="en"&&ce(r)&&(x=x.toUpperCase()),s+x+d):t}const B=t=>typeof t=="string"?String(T(t)).split(`
`).map(o=>T(o)).join(`
`):t,R=new WeakMap,pe=new WeakMap,oe=t=>!t||t.closest&&t.closest(ke);function tt(t){const o=R.get(t);return o&&t.nodeValue===o.applied?o.orig:t.nodeValue}function ot(t){if(t.hasAttribute("value")&&!t.hasAttribute("data-i18n-autovalue"))return;const o=Array.from(t.childNodes).map(i=>i.nodeType===3?tt(i):i.textContent).join("").replace(/\s+/g," ").trim();t.getAttribute("value")!==o&&(t.setAttribute("value",o),t.setAttribute("data-i18n-autovalue",""))}function Q(t){const o=t.parentElement;if(oe(o))return;let i=R.get(t);(!i||t.nodeValue!==i.applied)&&(i={orig:t.nodeValue}),o.tagName==="OPTION"&&(R.set(t,{orig:i.orig,applied:t.nodeValue}),ot(o));const n=T(i.orig);i.applied=n,R.set(t,i),t.nodeValue!==n&&(t.nodeValue=n)}function K(t){if(oe(t))return;let o=pe.get(t);const i=Se.slice();t.tagName==="INPUT"&&/^(button|submit|reset)$/i.test(t.type)&&i.push("value");for(const n of i){if(!t.hasAttribute(n))continue;const s=t.getAttribute(n);o||(o={},pe.set(t,o));let r=o[n];(!r||s!==r.applied)&&(r={orig:s});const d=T(r.orig);r.applied=d,o[n]=r,s!==d&&t.setAttribute(n,d)}}function X(t){if(!t)return;if(t.nodeType===3){Q(t);return}if(t.nodeType!==1&&t.nodeType!==11)return;if(t.nodeType===1){if(oe(t))return;K(t)}const o=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,{acceptNode:n=>n.nodeType===1&&n.matches(ke)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});let i=o.nextNode();for(;i;)i.nodeType===3?Q(i):K(i),i=o.nextNode()}let $=null,E=null;function Z(){($===null||document.title!==E)&&($=document.title),E=T($),document.title!==E&&(document.title=E)}let me=!1;function it(){if(me||typeof window>"u")return;me=!0;const{alert:t,confirm:o,prompt:i}=window;window.alert=r=>t.call(window,B(r)),window.confirm=r=>o.call(window,B(r)),window.prompt=(r,d)=>i.call(window,B(r),d),document.documentElement.lang=D;const n=document.createElement("style");n.setAttribute("data-i18n",""),n.textContent='html[lang="mr"] body *{letter-spacing:normal !important;}',document.head.appendChild(n);const s=()=>{X(document.body),Z(),new MutationObserver(d=>{for(const p of d)p.type==="characterData"?Q(p.target):p.type==="attributes"?K(p.target):p.addedNodes.forEach(X)}).observe(document.body,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:[...Se,"value"]});const r=document.querySelector("title");r&&new MutationObserver(Z).observe(r,{childList:!0,characterData:!0,subtree:!0})};document.body?s():document.addEventListener("DOMContentLoaded",s)}function ue(t){if(!(!je.includes(t)||t===D)){D=t;try{localStorage.setItem(we,t)}catch{}document.documentElement.lang=t,X(document.body),Z(),window.dispatchEvent(new CustomEvent("app-langchange",{detail:t}))}}function nt(){const[t,o]=l.useState(Ke());return l.useEffect(()=>{const i=n=>o(n.detail);return window.addEventListener("app-langchange",i),()=>window.removeEventListener("app-langchange",i)},[]),t}function I({variant:t="dark",style:o}){const i=nt(),n=t==="dark",s={display:"inline-flex",alignItems:"center",padding:3,borderRadius:50,border:n?"1.5px solid rgba(202,157,40,0.75)":"1px solid #E5EEEE",background:n?"rgba(255,255,255,0.08)":"#F1F7F8",flexShrink:0,gap:2,...o},r=d=>({border:"none",cursor:"pointer",borderRadius:50,padding:"6px 12px",fontSize:12.5,fontWeight:700,lineHeight:1.2,whiteSpace:"nowrap",fontFamily:"'Plus Jakarta Sans','Noto Sans Devanagari','Montserrat',sans-serif",transition:"all 0.25s ease",background:d?n?"#CA9D28":"#087F8C":"transparent",color:d?n?"#114e59":"#FFFFFF":n?"rgba(245,231,194,0.88)":"#087F8C"});return e.jsxs("div",{"data-no-translate":!0,style:s,role:"group","aria-label":"Language / भाषा",children:[e.jsx("button",{type:"button",style:r(i==="en"),onClick:()=>ue("en"),"aria-pressed":i==="en",children:"EN"}),e.jsx("button",{type:"button",style:r(i==="mr"),onClick:()=>ue("mr"),"aria-pressed":i==="mr",children:"मराठी"})]})}const A="#FFFFFF",G="#F1F7F8",C="#E5EEEE",v="#087F8C",at="#0d4f5c",N="#D8B66A",O="#1a3a40",F="#8AA5AB";function rt({name:t}){const o=(t||"A").split(" ").map(i=>i[0]).join("").slice(0,2).toUpperCase();return e.jsx("div",{className:"nb-avatar",style:{width:38,height:38,borderRadius:"50%",background:v,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13.5,fontWeight:700,color:A,flexShrink:0,fontFamily:"'Montserrat','Segoe UI',sans-serif",cursor:"pointer",border:`2px solid ${A}`,userSelect:"none"},children:o})}const st=()=>{const{user:t}=H(m=>m.auth),o=te(),i=V(),{mode:n}=ve(),s=n==="hidden",[r,d]=l.useState(!1),[p,x]=l.useState(16),c=l.useRef(null);l.useEffect(()=>{const m=setInterval(()=>x(Math.floor(12+Math.random()*8)),4e3);return()=>clearInterval(m)},[]),l.useEffect(()=>{const m=a=>{c.current&&!c.current.contains(a.target)&&d(!1)};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[]);const g=()=>{o(be()),i("/login")};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Noto+Sans+Devanagari:wght@600;700&display=swap');

        .nb-wrap {
          background: ${A};
          height: 60px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          padding: 0 24px;
          gap: 14px;
          border-bottom: 1px solid ${C};
          box-shadow: 0 1px 4px rgba(8,127,140,0.05);
          font-family: 'Montserrat','Segoe UI',sans-serif;
          position: relative;
          z-index: 40;
        }

        .nb-search-box {
          display: flex;
          align-items: center;
          gap: 10px;
          height: 40px;
          box-sizing: border-box;
          background: ${G};
          border: 1px solid ${C};
          border-radius: 10px;
          padding: 0 14px;
          flex: 0 1 420px;
          min-width: 0;
          transition: border-color 200ms ease, box-shadow 200ms ease, background 200ms ease;
        }
        .nb-search-box:hover { border-color: #D5E4E6; }
        .nb-search-box:focus-within {
          background: ${A};
          border-color: ${v};
          box-shadow: 0 0 0 3px rgba(8,127,140,0.10);
        }
        .nb-search-input {
          border: none;
          background: transparent;
          outline: none;
          font-size: 13px;
          font-weight: 500;
          color: ${O};
          font-family: 'Montserrat','Segoe UI',sans-serif;
          width: 100%;
          min-width: 0;
          height: 100%;
        }
        .nb-search-input::placeholder { color: ${F}; font-weight: 500; }

        .nb-category-btn {
          display: flex; align-items: center; gap: 4px;
          background: transparent; border: none; cursor: pointer;
          color: ${v}; font-size: 12.5px; font-weight: 600;
          font-family: 'Montserrat','Segoe UI',sans-serif;
          padding: 0; white-space: nowrap; flex-shrink: 0;
          transition: color 200ms ease;
        }
        .nb-category-btn:hover { color: ${N}; }

        .nb-sep { width: 1px; height: 18px; background: ${C}; flex-shrink: 0; }

        .nb-online {
          display: flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 600;
          color: ${O};
          white-space: nowrap;
          font-family: 'Montserrat','Segoe UI',sans-serif;
        }
        .nb-online-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #66A962;
          box-shadow: 0 0 6px #66A96288;
          animation: nb-pulse 2s infinite;
          flex-shrink: 0;
        }
        @keyframes nb-pulse { 0%,100%{opacity:1} 50%{opacity:.4} }

        .nb-avatar-wrap {
          position: relative;
          display: flex; align-items: center;
          flex-shrink: 0;
        }
        .nb-avatar {
          box-shadow: 0 0 0 1px ${N}, 0 2px 6px rgba(8,127,140,0.18);
          transition: box-shadow 200ms ease;
        }
        .nb-avatar:hover {
          box-shadow: 0 0 0 1px ${N}, 0 4px 12px rgba(8,127,140,0.28);
        }

        .nb-dropdown {
          position: absolute; top: calc(100% + 10px); right: 0;
          background: ${A};
          border: 1px solid ${C};
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(8,127,140,0.10);
          min-width: 210px;
          z-index: 100;
          overflow: hidden;
          animation: nb-drop 200ms ease;
        }
        @keyframes nb-drop { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:none} }

        .nb-dropdown-user {
          padding: 14px 16px 12px;
          border-bottom: 1px solid ${C};
          border-top: 2px solid ${N};
          background: ${G};
        }
        .nb-dropdown-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 16px;
          font-size: 13px; font-weight: 500;
          color: ${O};
          cursor: pointer;
          transition: background 200ms ease, color 200ms ease;
          font-family: 'Montserrat','Segoe UI',sans-serif;
        }
        .nb-dropdown-item:hover { background: ${G}; color: ${v}; }
        .nb-dropdown-item.danger { color: #d9534f; }
        .nb-dropdown-item.danger:hover { background: #fdf0f0; color: #d9534f; }

        .nb-brand-block {
          display: flex; align-items: center; gap: 10px;
          flex-shrink: 0;
          animation: nb-drop 200ms ease;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .nb-wrap { padding: 0 18px; gap: 12px; }
          .nb-search-box { flex-basis: 340px; }
        }
        @media (max-width: 767px) {
          /* room for the fixed "open sidebar" button at top-left */
          .nb-wrap { padding: 0 12px 0 52px; gap: 10px; }
          .nb-search-box { flex: 1 1 auto; padding: 0 10px; gap: 8px; }
          .nb-brand-block { display: none; }
        }
      `}),e.jsxs("div",{className:"nb-wrap",children:[s&&e.jsxs("div",{className:"nb-brand-block",style:{marginRight:8},children:[e.jsx("div",{style:{width:44,height:44,borderRadius:10,flexShrink:0,background:A,overflow:"hidden",border:`1px solid ${N}`,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 6px rgba(8,127,140,0.10)"},children:e.jsx("img",{src:M,alt:"जन संवाद",style:{width:"100%",height:"100%",objectFit:"cover"},onError:m=>{m.target.style.display="none",m.target.parentNode.innerHTML='<span style="font-size:22px">⚖️</span>'}})}),e.jsxs("div",{style:{lineHeight:1.25},children:[e.jsx("div",{style:{fontSize:14,fontWeight:700,color:v,fontFamily:"'Noto Sans Devanagari','Montserrat',sans-serif",letterSpacing:.1,whiteSpace:"nowrap"},children:"वसई-विरार शहर महानगरपालिका"}),e.jsx("div",{style:{fontSize:19,fontWeight:700,color:at,fontFamily:"'Noto Sans Devanagari','Montserrat',sans-serif",letterSpacing:.2,lineHeight:1.15,whiteSpace:"nowrap"},children:"जन संवाद"}),e.jsx("div",{style:{fontSize:9,fontWeight:600,color:F,letterSpacing:1.4,textTransform:"uppercase",marginTop:1,whiteSpace:"nowrap"},children:"ADMIN PANEL · VVCMC"})]}),e.jsx("div",{className:"nb-sep",style:{margin:"0 8px 0 14px",height:32}})]}),e.jsxs("div",{className:"nb-search-box",children:[e.jsx(Le,{size:15,color:v,style:{flexShrink:0}}),e.jsx("div",{className:"nb-sep"}),e.jsxs("button",{className:"nb-category-btn",children:["All Category ",e.jsx(Ie,{size:12})]}),e.jsx("div",{className:"nb-sep"}),e.jsx("input",{className:"nb-search-input",placeholder:"Search here…"})]}),e.jsx("div",{style:{flex:1}}),e.jsx("div",{className:"nb-sep"}),e.jsx(I,{variant:"light"}),e.jsx("div",{className:"nb-sep"}),e.jsxs("div",{className:"nb-avatar-wrap",ref:c,children:[e.jsx("div",{onClick:()=>d(m=>!m),children:e.jsx(rt,{name:t?.fullName||t?.userName||"Admin User"})}),r&&e.jsxs("div",{className:"nb-dropdown",children:[e.jsxs("div",{className:"nb-dropdown-user",children:[e.jsx("div",{style:{fontSize:13,fontWeight:700,color:O},children:t?.fullName||t?.userName||"Admin User"}),e.jsx("div",{style:{fontSize:11,color:F,fontWeight:500,marginTop:2},children:t?.role||"Admin"}),t?.departmentName&&e.jsxs("div",{style:{fontSize:11,color:F,fontWeight:500,marginTop:1},children:["Dept: ",e.jsx("span",{style:{color:v,fontWeight:600},children:t.departmentName})]})]}),e.jsxs("div",{className:"nb-dropdown-item",children:[e.jsx(Ve,{size:14,color:v}),"Notifications"]}),e.jsxs("div",{className:"nb-dropdown-item",children:[e.jsx(_e,{size:14,color:v}),"Help"]}),e.jsxs("div",{className:"nb-dropdown-item danger",onClick:g,children:[e.jsx(Y,{size:14}),"Logout"]})]})]})]})]})},lt=["mayor","महापौर","dy mayor","deputy mayor","dymayor","उपमहापौर","उप महापौर","corporator","ward councillor","councillor","नगरसेवक"],dt=t=>String(t||"").toLowerCase().replace(/[._\-]+/g," ").replace(/\s+/g," ").trim(),ct=t=>{if(t)return t;try{return JSON.parse(localStorage.getItem("authUser")||"null")}catch{return null}},ee=t=>{const o=ct(t);return o?![o.role,o.designation,o.post,o.officeBearerType].map(dt).some(n=>lt.includes(n)):!1},ge="#187484",pt="#0d4f5c",y="#CE9A54",S=["Super Admin","Guardian Minister","Mayor","Admin"];function mt(){const t=te(),o=V(),{user:i}=H(a=>a.auth),{mode:n,setMode:s}=ve(),[r,d]=l.useState(window.innerWidth<768);if(l.useEffect(()=>{const a=()=>d(window.innerWidth<768);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),!i)return null;const p=()=>{t(be()),o("/login")},x=()=>s("open"),c=()=>s("collapsed"),g=n==="open",m=!g;return e.jsxs(e.Fragment,{children:[r&&g&&e.jsx("div",{onClick:c,style:{position:"fixed",inset:0,zIndex:90}}),e.jsxs("aside",{style:{width:g?230:64,minHeight:"100vh",background:`linear-gradient(175deg, ${ge} 0%, ${pt} 100%)`,display:"flex",flexDirection:"column",transition:"width 0.3s ease",overflow:"visible",boxShadow:"4px 0 24px rgba(13,79,92,0.35)",position:r?"fixed":"relative",top:0,left:0,zIndex:r?100:"auto",height:r?"100vh":"auto",flexShrink:0,fontFamily:"'Montserrat','Noto Sans Devanagari','Segoe UI',sans-serif"},children:[e.jsx("div",{style:{position:"absolute",top:-40,right:-40,width:130,height:130,borderRadius:"50%",background:"rgba(255,255,255,0.06)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",bottom:120,left:-30,width:100,height:100,borderRadius:"50%",background:"rgba(255,255,255,0.04)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",bottom:-20,right:-20,width:80,height:80,borderRadius:"50%",background:"rgba(255,255,255,0.05)",pointerEvents:"none"}}),e.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap');

          .sb-link {
            display: flex; align-items: center; gap: 12px;
            border-radius: 12px;
            // padding: 10px 16px;
            // margin: 2px 10px;

            padding: 10px 16px 10px 11px;  /* left padding 16 → 11px */
            margin: 2px 10px 2px 5px;
            text-decoration: none; color: #D1E5E9;
            font-size: 14px; font-weight: 500;
            font-family: 'Montserrat','Segoe UI',sans-serif;
            transition: all 200ms ease; border-left: 3px solid transparent;
            white-space: nowrap; overflow: hidden;
          }
          .sb-link:hover  { background: rgba(255,255,255,0.10); color:#FFFFFF; }
          .sb-link.active {
            background: rgba(255,255,255,0.16); color:#FFFFFF;
            font-size: 14px; font-weight:700;
            border-left: 3px solid ${y};
            box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.14);
          }
          .sb-link .sb-label {
            display: block; max-width: 150px; min-width: 0;
            overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
          }
          .sb-link .sb-icon        { flex-shrink:0; opacity:0.8; color:inherit; transition: all 200ms ease; }
          .sb-link:hover .sb-icon,
          .sb-link.active .sb-icon { opacity:1; color:#FFFFFF; }

          .sb-link-collapsed {
            display: flex; align-items: center; justify-content: center;
            padding: 10px 0; border-radius: 12px; margin: 2px 8px;
            text-decoration: none; color: #D1E5E9;
            transition: all 200ms ease; border-left: 3px solid transparent;
          }
          .sb-link-collapsed:hover  { background: rgba(255,255,255,0.10); color:#FFFFFF; }
          .sb-link-collapsed.active {
            background: rgba(255,255,255,0.16); color:#FFFFFF;
            border-left: 3px solid ${y};
            box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.14);
          }

          .sb-pill-btn {
            position: absolute; top: 50%; right: -14px;
            transform: translateY(-50%);
            width: 28px; height: 28px; border-radius: 50%;
            background: ${ge};
            border: 2px solid rgba(255,255,255,0.3);
            box-shadow: 0 2px 10px rgba(13,79,92,0.5);
            color: #fff; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            transition: background 0.2s; z-index: 60;
          }
          .sb-pill-btn:hover { background: ${y}; border-color: ${y}; }
        `}),g&&e.jsx("button",{className:"sb-pill-btn",onClick:c,title:"Collapse sidebar",children:e.jsx(He,{size:14})}),m&&e.jsx("button",{className:"sb-pill-btn",onClick:x,title:"Expand sidebar",children:e.jsx(We,{size:14})}),g?e.jsxs("div",{style:{padding:"24px 18px 18px",paddingTop:r?"46px":"24px",display:"flex",flexDirection:"column",alignItems:"center",gap:6,overflow:"hidden"},children:[e.jsxs("div",{style:{color:`${y}dd`,fontSize:15,fontWeight:700,fontFamily:"'Montserrat','Noto Sans Devanagari',sans-serif",whiteSpace:"nowrap",letterSpacing:.1,lineHeight:1.3,textAlign:"center"},children:["वसई-विरार शहर",e.jsx("br",{}),"महानगरपालिका"]}),e.jsx("div",{style:{color:"#fff",fontSize:21,fontWeight:800,fontFamily:"'Montserrat','Noto Sans Devanagari',sans-serif",whiteSpace:"nowrap",letterSpacing:.3,lineHeight:1,textShadow:`0 2px 10px ${y}55`,textAlign:"center"},children:"जन संवाद"}),e.jsx("div",{style:{width:140,height:140,borderRadius:"5%",background:`linear-gradient(135deg,${y},#b8832e)`,boxShadow:`0 4px 14px ${y}88`,overflow:"hidden",border:"2px solid rgba(255,255,255,0.25)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("img",{src:M,alt:"VVCMC",style:{width:"100%",height:"100%",objectFit:"cover"},onError:a=>{a.target.style.display="none",a.target.parentNode.innerHTML='<span style="font-size:24px">⚖️</span>'}})})]}):e.jsx("div",{style:{width:"100%",padding:"20px 0",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:40,height:40,borderRadius:10,background:`linear-gradient(135deg,${y},#b8832e)`,boxShadow:`0 4px 14px ${y}77`,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("img",{src:M,alt:"जन संवाद",style:{width:"100%",height:"100%",objectFit:"cover"},onError:a=>{a.target.style.display="none",a.target.parentNode.innerHTML='<span style="font-size:18px">⚖️</span>'}})})}),e.jsx("div",{style:{margin:"0 16px 10px",borderTop:"1px solid rgba(255,255,255,0.1)"}}),e.jsx("nav",{style:{flex:1,display:"flex",flexDirection:"column",gap:2,paddingTop:4,overflowY:"auto",overflowX:"hidden"},children:g?e.jsxs(e.Fragment,{children:[e.jsxs(b,{to:"/dashboard",title:"Dashboard",className:({isActive:a})=>`sb-link${a?" active":""}`,children:[e.jsx("span",{className:"sb-icon",children:e.jsx(ie,{size:18})}),e.jsx("span",{className:"sb-label",children:"Dashboard"})]}),e.jsxs(b,{to:"/meetings",title:"Meetings",className:({isActive:a})=>`sb-link${a?" active":""}`,children:[e.jsx("span",{className:"sb-icon",children:e.jsx(W,{size:18})}),e.jsx("span",{className:"sb-label",children:"Meetings"})]}),S.includes(i?.role)&&e.jsxs(b,{to:"/availability",title:"Availability",className:({isActive:a})=>`sb-link${a?" active":""}`,children:[e.jsx("span",{className:"sb-icon",children:e.jsx(W,{size:18})}),e.jsx("span",{className:"sb-label",children:"Availability"})]}),ee(i)&&e.jsxs(b,{to:"/allapplication",title:"Applications",className:({isActive:a})=>`sb-link${a?" active":""}`,children:[e.jsx("span",{className:"sb-icon",children:e.jsx(P,{size:18})}),e.jsx("span",{className:"sb-label",children:"Applications"})]}),S.includes(i?.role)&&e.jsxs(b,{to:"/allapplicationcitizens",title:"Appointment Applications",className:({isActive:a})=>`sb-link${a?" active":""}`,children:[e.jsx("span",{className:"sb-icon",children:e.jsx(P,{size:18})}),e.jsx("span",{className:"sb-label",children:"Appointment Applications"})]}),S.includes(i?.role)&&e.jsxs(b,{to:"/users",title:"Users",className:({isActive:a})=>`sb-link${a?" active":""}`,children:[e.jsx("span",{className:"sb-icon",children:e.jsx(ne,{size:18})}),e.jsx("span",{className:"sb-label",children:"Users"})]}),S.includes(i?.role)&&e.jsxs(b,{to:"/corporators",title:"Corporators & Office Bearers",className:({isActive:a})=>`sb-link${a?" active":""}`,children:[e.jsx("span",{className:"sb-icon",children:e.jsx(ae,{size:18})}),e.jsx("span",{className:"sb-label",style:{whiteSpace:"normal",lineHeight:1.25},children:"Corporators & Office Bearers"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(b,{to:"/dashboard",className:({isActive:a})=>`sb-link-collapsed${a?" active":""}`,children:e.jsx(ie,{size:18})}),e.jsx(b,{to:"/availability",className:({isActive:a})=>`sb-link-collapsed${a?" active":""}`,children:e.jsx(W,{size:18})}),ee(i)&&e.jsx(b,{to:"/allapplication",className:({isActive:a})=>`sb-link-collapsed${a?" active":""}`,children:e.jsx(P,{size:18})}),e.jsx(b,{to:"/allapplicationcitizens",className:({isActive:a})=>`sb-link-collapsed${a?" active":""}`,children:e.jsx(P,{size:18})}),S.includes(i?.role)&&e.jsx(b,{to:"/users",className:({isActive:a})=>`sb-link-collapsed${a?" active":""}`,children:e.jsx(ne,{size:18})}),S.includes(i?.role)&&e.jsx(b,{to:"/corporators",title:"Corporators & Office Bearers",className:({isActive:a})=>`sb-link-collapsed${a?" active":""}`,children:e.jsx(ae,{size:18})})]})}),e.jsxs("div",{style:{marginTop:"auto"},children:[e.jsx("div",{style:{margin:"6px 16px",borderTop:"1px solid rgba(255,255,255,0.1)"}}),e.jsx("div",{style:{padding:g?"10px 16px 20px":"10px 0 20px"},children:g?e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:[e.jsx("div",{style:{width:34,height:34,borderRadius:"50%",flexShrink:0,background:`linear-gradient(135deg,${y},#b8832e)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:14,fontWeight:900,boxShadow:`0 3px 10px ${y}66`,fontFamily:"'Montserrat',sans-serif"},children:(i?.fullName||i?.userName||"A")[0].toUpperCase()}),e.jsxs("div",{style:{overflow:"hidden"},children:[e.jsx("div",{style:{color:"#fff",fontSize:14,fontWeight:700,lineHeight:1.2,fontFamily:"'Montserrat',sans-serif",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:130},children:i?.fullName||i?.userName||"Admin User"}),e.jsx("div",{style:{color:"#B8D5DB",fontSize:11,fontWeight:500,fontFamily:"'Montserrat',sans-serif"},children:i?.role})]})]}),i?.departmentName&&e.jsxs("div",{style:{fontSize:10.5,color:"rgba(255,255,255,0.45)",fontWeight:600,marginBottom:10,paddingLeft:2},children:["Dept: ",e.jsx("span",{style:{color:"rgba(255,255,255,0.75)",fontWeight:700},children:i.departmentName})]}),r&&e.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:10},children:e.jsx(I,{variant:"dark"})}),e.jsxs("button",{onClick:p,style:{width:"100%",background:"rgba(255,255,255,0.1)",color:"rgba(255,255,255,0.85)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:10,padding:"8px",fontSize:12,fontWeight:600,cursor:"pointer",letterSpacing:.8,textTransform:"uppercase",display:"flex",alignItems:"center",justifyContent:"center",gap:7,transition:"all 200ms ease",fontFamily:"'Montserrat',sans-serif"},onMouseEnter:a=>{a.currentTarget.style.background="rgba(220,50,50,0.3)",a.currentTarget.style.borderColor="rgba(220,50,50,0.4)"},onMouseLeave:a=>{a.currentTarget.style.background="rgba(255,255,255,0.1)",a.currentTarget.style.borderColor="rgba(255,255,255,0.2)"},children:[e.jsx(Y,{size:13})," Logout"]})]}):e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:10},children:[e.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:`linear-gradient(135deg,${y},#b8832e)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:13,fontWeight:900},children:(i?.fullName||i?.userName||"A")[0].toUpperCase()}),e.jsx("button",{onClick:p,style:{background:"transparent",border:"none",cursor:"pointer",color:"rgba(255,255,255,0.5)",padding:6,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 200ms ease"},onMouseEnter:a=>a.currentTarget.style.color="#fff",onMouseLeave:a=>a.currentTarget.style.color="rgba(255,255,255,0.5)",children:e.jsx(Y,{size:17})})]})})]})]})]})}function Ae({fullScreen:t=!1}){return e.jsxs("div",{style:{minHeight:t?"100vh":"60vh",display:"flex",alignItems:"center",justifyContent:"center",background:"transparent"},children:[e.jsx("style",{children:"@keyframes pl-spin { to { transform: rotate(360deg) } }"}),e.jsx("div",{role:"status","aria-label":"Loading",style:{width:36,height:36,border:"3px solid #BFDDE1",borderTopColor:"#187484",borderRadius:"50%",animation:"pl-spin .8s linear infinite"}})]})}function ut(){return e.jsx(qe,{children:e.jsxs("div",{style:{display:"flex",minHeight:"100vh",position:"relative"},children:[e.jsx("div",{style:{position:"sticky",top:0,height:"100vh",zIndex:50,flexShrink:0},children:e.jsx(mt,{})}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[e.jsx("div",{style:{position:"sticky",top:0,zIndex:40},className:"hidden md:block",children:e.jsx(st,{})}),e.jsx("div",{style:{flex:1,overflowY:"auto",background:"#f3f4f6"},children:e.jsx(l.Suspense,{fallback:e.jsx(Ae,{}),children:e.jsx(Me,{})})})]})]})})}function w(){const t=V(),o=new Date().getFullYear(),i=()=>window.scrollTo({top:0,behavior:"smooth"});return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        :root {
          --foot-bg:    #0d2e2a;
          --foot-line:  rgba(81,171,172,0.18);
          --gold:       #F5E6BF;
          --teal:       #51ABAC;
          --gold-strip: #D09A50;
        }

        /* ══ FOOTER WRAPPER ═══════════════════════════════════ */
        .footer {
          background: var(--foot-bg);
          color: rgba(255,255,255,0.82);
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* top teal accent line */
        .footer::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, var(--teal) 30%, var(--gold-strip) 70%, transparent 100%);
        }

        /* diagonal line texture */
        .footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image:
            linear-gradient(135deg, rgba(81,171,172,0.04) 0%, transparent 50%),
            repeating-linear-gradient(
              135deg,
              transparent 0px, transparent 80px,
              rgba(81,171,172,0.04) 80px, rgba(81,171,172,0.04) 81px
            );
          pointer-events: none;
          z-index: 0;
        }

        /* ══ BODY GRID — 3 columns ════════════════════════════ */
        .footer-body {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          padding: 68px 48px 48px;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1.15fr;
          gap: 56px;
        }

        /* ── Col 1: Brand + Address ── */
        .footer-logo-row {
          display: flex; align-items: center; gap: 14px;
          margin-bottom: 22px;
        }
        .cn-logo-wrap {
          width: 62px; height: 62px; border-radius: 50%;
          overflow: hidden; flex-shrink: 0;
          border: 2px solid rgba(81,171,172,0.45);
          box-shadow: 0 0 0 4px rgba(81,171,172,0.1);
        }
        .cn-logo-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .footer-brand-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 19px; font-weight: 700;
          color: var(--gold); line-height: 1.35;
        }
        .footer-brand-sub {
          font-size: 11px; color: var(--teal);
          letter-spacing: 1.2px; text-transform: uppercase;
          font-weight: 600; margin-top: 4px;
        }

        .footer-tagline {
          font-size: 15px; color: rgba(255,255,255,0.58);
          line-height: 1.85; margin-bottom: 26px;
          max-width: 310px;
          border-left: 2px solid rgba(81,171,172,0.35);
          padding-left: 14px;
        }

        .footer-address { margin-bottom: 22px; }
        .footer-address-title {
          font-size: 11.5px; font-weight: 700; color: var(--teal);
          text-transform: uppercase; letter-spacing: 1px;
          margin-bottom: 10px;
          display: flex; align-items: center; gap: 6px;
        }
        .footer-address-title::after {
          content: ''; flex: 1; height: 1px;
          background: rgba(81,171,172,0.25);
        }
        .footer-address-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px; color: rgba(255,255,255,0.72);
          line-height: 1.9;
        }

        .footer-contacts { display: flex; flex-direction: column; gap: 10px; }
        .footer-contact-row {
          display: flex; align-items: flex-start; gap: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(81,171,172,0.1);
          border-radius: 10px;
          padding: 9px 12px;
        }
        .footer-contact-icon { font-size: 16px; flex-shrink: 0; margin-top: 1px; }
        .footer-contact-label {
          color: rgba(255,255,255,0.42); font-size: 11.5px;
          margin-bottom: 2px; font-weight: 500;
        }
        .footer-contact-num {
          font-size: 14.5px; color: rgba(255,255,255,0.82);
          font-weight: 500;
        }

        /* ── Col 2 & 3: Titles ── */
        .footer-col-title {
          font-size: 13.5px; font-weight: 700; color: #fff;
          letter-spacing: 0.5px; margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--foot-line);
          display: flex; align-items: center; gap: 8px;
        }
        .footer-col-title-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--teal); flex-shrink: 0;
        }

        /* ── Nav Links ── */
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 4px; padding: 0; margin: 0; }
        .footer-links li a,
        .footer-links li button {
          font-size: 15px; color: rgba(255,255,255,0.62);
          text-decoration: none; background: none; border: none;
          cursor: pointer; padding: 7px 10px;
          transition: color .18s, background .18s, padding-left .18s;
          display: flex; align-items: center; gap: 8px;
          border-radius: 8px; width: 100%;
          font-family: 'DM Sans', sans-serif;
        }
        .footer-links li a:hover,
        .footer-links li button:hover {
          color: var(--teal);
          background: rgba(81,171,172,0.08);
          padding-left: 14px;
        }
        .footer-links li a::before,
        .footer-links li button::before {
          content: '›'; color: var(--teal); font-size: 18px; line-height: 1;
        }

        /* ── Social ── */
        .footer-social { display: flex; gap: 10px; margin-bottom: 24px; flex-wrap: wrap; }
        .footer-social-btn {
          width: 42px; height: 42px; border-radius: 50%;
          border: 1px solid rgba(81,171,172,0.3);
          background: rgba(81,171,172,0.08);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.65); font-size: 16px;
          cursor: pointer; transition: all .2s; text-decoration: none;
        }
        .footer-social-btn:hover {
          background: var(--teal); color: #fff;
          border-color: var(--teal);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(81,171,172,0.35);
        }

        /* ── WhatsApp Chip ── */
        .footer-whatsapp-chip {
          display: inline-flex; align-items: center; gap: 9px;
          background: rgba(37,211,102,0.1);
          border: 1px solid rgba(37,211,102,0.28);
          border-radius: 999px; padding: 10px 18px;
          font-size: 14.5px; color: #25d366; font-weight: 600;
          text-decoration: none; transition: all .2s;
          margin-bottom: 18px; width: fit-content;
        }
        .footer-whatsapp-chip:hover {
          background: rgba(37,211,102,0.2);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37,211,102,0.2);
        }

        /* ══ DIVIDER ══════════════════════════════════════════ */
        .footer-divider {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          height: 1px; background: var(--foot-line);
          margin-left: 48px; margin-right: 48px;
        }

        /* ══ FOOTER BOTTOM ════════════════════════════════════ */
        .footer-bottom {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          padding: 22px 48px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .footer-copy {
          font-size: 13px; color: rgba(255,255,255,0.4);
        }
        .footer-back-top {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid rgba(81,171,172,0.35);
          background: transparent;
          border-radius: 999px; padding: 9px 22px;
          font-size: 12.5px; font-weight: 700; color: var(--teal);
          cursor: pointer; transition: all .2s; letter-spacing: 0.5px;
          text-transform: uppercase; font-family: 'DM Sans', sans-serif;
        }
        .footer-back-top:hover {
          background: rgba(81,171,172,0.12);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(81,171,172,0.2);
        }
        .footer-back-top svg { transition: transform .2s; }
        .footer-back-top:hover svg { transform: translateY(-3px); }

        /* ══ GOLD STRIP ════════════════════════════════════════ */
        .footer-gold-strip {
          background: var(--gold-strip);
          text-align: center; padding: 9px 24px;
          font-size: 12px; color: rgba(0,0,0,0.55);
          font-weight: 600; letter-spacing: 0.4px;
        }

        /* ══ RESPONSIVE ════════════════════════════════════════ */
        @media(max-width:1024px){
          .footer-body { grid-template-columns: 1fr 1fr; gap: 36px; }
        }
        @media(max-width:640px){
          .footer-body { grid-template-columns: 1fr; padding: 48px 24px 32px; }
          .footer-bottom { padding: 16px 24px; flex-direction: column; align-items: flex-start; }
          .footer-divider { margin-left: 24px; margin-right: 24px; }
        }
      `}),e.jsxs("footer",{className:"footer",children:[e.jsxs("div",{className:"footer-body",children:[e.jsxs("div",{className:"footer-brand",children:[e.jsxs("div",{className:"footer-logo-row",children:[e.jsx("div",{className:"cn-logo-wrap",children:e.jsx("img",{src:M,alt:"VVCMC"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"footer-brand-name",children:["Vasai-Virar City",e.jsx("br",{}),"Municipal Corporation"]}),e.jsx("div",{className:"footer-brand-sub",children:"VVCMC — Jan Samvad"})]})]}),e.jsx("p",{className:"footer-tagline",children:"For the citizens, by the citizens — committed to transparent, fast and digital public services."}),e.jsxs("div",{className:"footer-address",children:[e.jsx("div",{className:"footer-address-title",children:"Head Office"}),e.jsxs("div",{className:"footer-address-text",children:["Virat Nagar, Near MHADA Colony,",e.jsx("br",{}),"Virar West. PIN: 401303"]})]}),e.jsxs("div",{className:"footer-contacts",children:[e.jsxs("div",{className:"footer-contact-row",children:[e.jsx("span",{className:"footer-contact-icon",children:"📞"}),e.jsxs("div",{children:[e.jsx("div",{className:"footer-contact-label",children:"Main Office"}),e.jsx("div",{className:"footer-contact-num",children:"0250-6630000"})]})]}),e.jsxs("div",{className:"footer-contact-row",children:[e.jsx("span",{className:"footer-contact-icon",children:"🚨"}),e.jsxs("div",{children:[e.jsx("div",{className:"footer-contact-label",children:"Disaster Management"}),e.jsx("div",{className:"footer-contact-num",children:"0250-2334546 / 0250-2334547"})]})]}),e.jsxs("div",{className:"footer-contact-row",children:[e.jsx("span",{className:"footer-contact-icon",children:"📱"}),e.jsxs("div",{children:[e.jsx("div",{className:"footer-contact-label",children:"Helpline"}),e.jsx("div",{className:"footer-contact-num",children:"7058911125 / 7058991430 / 8446427643"})]})]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"footer-col-title",children:[e.jsx("span",{className:"footer-col-title-dot"}),"Site Map"]}),e.jsxs("ul",{className:"footer-links",children:[e.jsx("li",{children:e.jsx("button",{onClick:()=>t("/"),children:"Home"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>t("/book-appointment"),children:"Book Appointment"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>t("/my-appointments"),children:"My Appointments"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>t("/register"),children:"Register"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>t("/login"),children:"Login"})})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"footer-col-title",children:[e.jsx("span",{className:"footer-col-title-dot"}),"Contact Us"]}),e.jsxs("a",{className:"footer-whatsapp-chip",href:"https://wa.me/919665877727",target:"_blank",rel:"noreferrer",children:[e.jsx("span",{children:"💬"})," WhatsApp Chatbot"]}),e.jsxs("div",{className:"footer-contact-row",style:{marginBottom:"20px"},children:[e.jsx("span",{className:"footer-contact-icon",children:"💬"}),e.jsxs("div",{children:[e.jsx("div",{className:"footer-contact-label",children:"WhatsApp"}),e.jsx("div",{className:"footer-contact-num",children:"9665877727"})]})]}),e.jsxs("div",{className:"footer-col-title",style:{marginTop:"20px"},children:[e.jsx("span",{className:"footer-col-title-dot"}),"Follow Us"]}),e.jsxs("div",{className:"footer-social",children:[e.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Facebook",children:"𝑓"}),e.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Twitter",children:"𝕏"}),e.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Instagram",children:"◎"}),e.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"YouTube",children:"▶"})]})]})]}),e.jsx("div",{className:"footer-divider"}),e.jsxs("div",{className:"footer-bottom",children:[e.jsxs("div",{className:"footer-copy",children:["© ",o," Vasai-Virar City Municipal Corporation. All rights reserved."]}),e.jsxs("button",{className:"footer-back-top",onClick:i,children:[e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{d:"M6 10V2M6 2L2 6M6 2L10 6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),"Back to Top"]})]}),e.jsx("div",{className:"footer-gold-strip",children:"Designed & Developed for Vasai Virar City Municipal Corporation (VVCMC) — Jan Samvad"})]})]})}function j(){const t=V(),o=De(),[i,n]=l.useState(!1),[s,r]=l.useState(!1),d=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})();l.useEffect(()=>{const c=()=>r(window.scrollY>20);return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const p=()=>{localStorage.removeItem("citizenUser"),t("/login"),n(!1)},x=c=>o.pathname===c;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:wght@400&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

        .cn-outer {
          padding: 10px 20px;
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }
        .cn-outer.scrolled { padding: 6px 20px; }

        /* ── Main pill navbar ── */
        .cn-nav {
          background: linear-gradient(135deg, #187484 0%, #114e59 100%);
          padding: 0 16px 0 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 90px;
          border-radius: 100px;
          width: 97%;
          max-width: 1300px;
          border: 2px solid rgba(202,157,40,0.5);
          box-shadow: 0 10px 36px rgba(0,0,0,0.3);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          overflow: visible;
        }
        .cn-outer.scrolled .cn-nav {
          height: 70px;
          width: 93%;
        }

        /* ── Brand pill — large protruding left section ── */
        .cn-brand {
          display: flex;
          align-items: center;
          gap: 18px;
          cursor: pointer;
          background: linear-gradient(135deg, #1c8fa3 0%, #145f6f 100%);
          border: 2.5px solid rgba(202,157,40,0.75);
          border-radius: 100px;
          /* big protrusion top and bottom */
          padding: 10px 32px 10px 10px;
          margin-left: -3px;
          height: 110px;
          box-shadow:
            0 10px 30px rgba(0,0,0,0.4),
            0 0 0 5px rgba(202,157,40,0.1),
            inset 0 1px 0 rgba(255,255,255,0.15);
          transition: all 0.3s ease;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }
        .cn-outer.scrolled .cn-brand {
          height: 86px;
          padding: 8px 26px 8px 8px;
          gap: 14px;
        }
        .cn-brand:hover {
          background: linear-gradient(135deg, #22a8bf 0%, #187080 100%);
          box-shadow: 0 12px 36px rgba(0,0,0,0.45), 0 0 0 5px rgba(202,157,40,0.22);
          transform: translateY(-2px);
        }

        /* ── Logo — VERY BIG ── */
        .cn-logo-wrap {
          width: 86px;
          height: 86px;
          border-radius: 50%;
          overflow: hidden;
          border: 3.5px solid #CA9D28;
          background: #fff;
          flex-shrink: 0;
          transition: all 0.3s ease;
          box-shadow:
            0 0 0 5px rgba(202,157,40,0.2),
            0 0 0 8px rgba(202,157,40,0.07),
            0 6px 20px rgba(0,0,0,0.35);
        }
        .cn-outer.scrolled .cn-logo-wrap {
          width: 66px;
          height: 66px;
        }
        .cn-logo-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── Brand text ── */
        .cn-brand-text {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        /* "वसई-विरार शहर महानगरपालिका" — very large bold */
        .cn-brand-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          white-space: nowrap;
          letter-spacing: 0.3px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }
        .cn-outer.scrolled .cn-brand-name { font-size: 19px; }

        /* "जन संवाद" — large bold golden */
        .cn-brand-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 20px;
          font-weight: 700;
          color: #F5C030;
          line-height: 1.2;
          letter-spacing: 0.5px;
          text-shadow: 0 1px 6px rgba(0,0,0,0.3);
        }
        .cn-outer.scrolled .cn-brand-sub { font-size: 15px; }

        /* ── Nav Links ── */
        .cn-links {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .cn-link {
          padding: 9px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          background: transparent;
          color: rgba(245,231,194,0.88);
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
        }
        .cn-link:hover { color: #CA9D28; background: rgba(255,255,255,0.07); }
        .cn-link.active {
          background: #CA9D28;
          color: #114e59;
          font-weight: 800;
          box-shadow: 0 4px 12px rgba(202,157,40,0.35);
        }

        .cn-citizen-name {
          font-size: 14px;
          color: #F5E7C2;
          font-weight: 700;
          padding: 0 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
        }

        /* ── Buttons ── */
        .cn-btn-solid {
          padding: 9px 24px;
          border-radius: 50px;
          border: none;
          background: linear-gradient(135deg, #CA9D28 0%, #CE9A54 100%);
          color: #1a3a44;
          font-size: 13.5px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(202,157,40,0.3);
          font-family: 'Plus Jakarta Sans', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }
        .cn-btn-solid:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(202,157,40,0.5);
          filter: brightness(1.1);
        }
        .cn-btn-outline {
          padding: 9px 22px;
          border-radius: 50px;
          border: 1.5px solid #CA9D28;
          background: transparent;
          color: #CA9D28;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
        }
        .cn-btn-outline:hover { background: rgba(202,157,40,0.1); transform: translateY(-2px); }

        .cn-btn-danger {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(248,113,113,0.5);
          background: rgba(248,113,113,0.1);
          color: #f87171;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .cn-btn-danger:hover { background: #dc2626; color: #fff; border-color: #dc2626; transform: rotate(90deg); }

        /* ── Hamburger ── */
        .cn-ham {
          display: none;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid #CA9D28;
          color: #CA9D28;
          font-size: 20px;
          cursor: pointer;
          padding: 6px 14px;
          border-radius: 50px;
          margin-right: 4px;
          flex-shrink: 0;
        }

                /* ── Language toggle (mobile menu) ── */
        .cn-lang-mobile { display: flex; justify-content: center; padding: 2px 0 6px; }

        /* ── Mobile dropdown ── */
        .cn-mobile-menu {
          display: none;
          position: fixed;
          top: 112px;
          left: 16px;
          right: 16px;
          background: #187484;
          z-index: 999;
          padding: 14px;
          border-radius: 24px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
          flex-direction: column;
          gap: 8px;
          border: 1.5px solid #CA9D28;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .cn-mobile-menu.open { display: flex; }
        .cn-mobile-link {
          padding: 12px 20px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 600;
          color: #F5E7C2;
          background: rgba(255,255,255,0.05);
          border: none;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .cn-mobile-link:hover { background: rgba(255,255,255,0.1); }
        .cn-mobile-link.active { background: #CA9D28; color: #187484; font-weight: 800; }

        /* ── Responsive ── */
        @media(max-width:960px){
          .cn-links { display: none; }
          .cn-ham { display: block; }
          .cn-nav { width: 96%; height: 80px; }
          .cn-brand { height: 96px; padding: 8px 24px 8px 8px; gap: 14px; }
          .cn-logo-wrap { width: 72px; height: 72px; }
          .cn-brand-name { font-size: 19px; }
          .cn-brand-sub { font-size: 16px; }
        }
        @media(max-width:640px){
          .cn-outer { padding: 8px 10px; }
          .cn-nav { width: 100%; height: 72px; }
          .cn-brand { height: 86px; padding: 7px 20px 7px 7px; gap: 12px; }
          .cn-logo-wrap { width: 62px; height: 62px; }
          .cn-brand-name { font-size: 16px; }
          .cn-brand-sub { font-size: 14px; }
        }
        @media(max-width:420px){
          .cn-brand { height: 80px; padding: 6px 16px 6px 6px; gap: 10px; }
          .cn-logo-wrap { width: 54px; height: 54px; }
          .cn-brand-name { font-size: 14px; }
          .cn-brand-sub { font-size: 12px; }
        }
      `}),e.jsx("div",{className:`cn-outer${s?" scrolled":""}`,children:e.jsxs("nav",{className:"cn-nav",children:[e.jsxs("div",{className:"cn-brand",onClick:()=>t("/"),children:[e.jsx("div",{className:"cn-logo-wrap",children:e.jsx("img",{src:M,alt:"VVCMC"})}),e.jsxs("div",{className:"cn-brand-text",children:[e.jsx("span",{className:"cn-brand-name",children:"वसई-विरार शहर महानगरपालिका"}),e.jsx("span",{className:"cn-brand-sub",children:"जन संवाद"})]})]}),e.jsxs("div",{className:"cn-links",children:[e.jsx(I,{variant:"dark"}),e.jsx("button",{className:`cn-link${x("/")?" active":""}`,onClick:()=>t("/"),children:"Home"}),d&&e.jsx("button",{className:`cn-link${x("/my-appointments")?" active":""}`,onClick:()=>t("/my-appointments"),children:"My Appointments"}),d?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"cn-citizen-name",children:["👋 ",d.fullName?.split(" ")[0]]}),e.jsx("button",{className:"cn-btn-solid",onClick:()=>t("/book-appointment"),children:"+ Book"}),e.jsx("button",{className:"cn-btn-danger",onClick:p,title:"Logout",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M18.36 6.64A9 9 0 1 1 5.64 6.64"}),e.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]})})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"cn-btn-outline",onClick:()=>t("/login"),children:"Login"}),e.jsx("button",{className:"cn-btn-solid",onClick:()=>t("/register"),children:"Register"})]})]}),e.jsx("button",{className:"cn-ham",onClick:()=>n(c=>!c),children:i?"✕":"☰"})]})}),e.jsxs("div",{className:`cn-mobile-menu${i?" open":""}`,children:[e.jsx("div",{className:"cn-lang-mobile",children:e.jsx(I,{variant:"dark"})}),e.jsx("button",{className:`cn-mobile-link${x("/")?" active":""}`,onClick:()=>{t("/"),n(!1)},children:"🏠 Home"}),d&&e.jsx("button",{className:`cn-mobile-link${x("/my-appointments")?" active":""}`,onClick:()=>{t("/my-appointments"),n(!1)},children:"📅 My Appointments"}),d?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"cn-mobile-link",style:{color:"#CA9D28"},onClick:()=>{t("/book-appointment"),n(!1)},children:"+ Book Appointment"}),e.jsx("button",{className:"cn-mobile-link",style:{color:"#f87171"},onClick:p,children:"🚪 Logout"})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"cn-mobile-link",onClick:()=>{t("/login"),n(!1)},children:"🔐 Login"}),e.jsx("button",{className:"cn-mobile-link",onClick:()=>{t("/register"),n(!1)},children:"📝 Register"})]})]})]})}const h={Login:()=>f(()=>import("./Login-DccabDZ8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])),CitizenLogin:()=>f(()=>import("./CitizenLogin-CuWQZiEg.js"),__vite__mapDeps([10,1,11,6,7,4,3,12])),PortalSelect:()=>f(()=>import("./PortalSelect-CB91JJFb.js"),__vite__mapDeps([13,1,4,2,9,6,7])),Registration:()=>f(()=>import("./Registration-BGv-gzj2.js"),__vite__mapDeps([14,1,2,3,4,5,6,7,8,9])),Dashboard:()=>f(()=>import("./Dashboard-DnKjWMYb.js"),__vite__mapDeps([15,1,2,5,6,7,11])),AllApplication:()=>f(()=>import("./Allapplication-3GGa4Fli.js"),__vite__mapDeps([16,1,17,5,6,7,9,18])),Users:()=>f(()=>import("./Users-Bn4mscl-.js"),__vite__mapDeps([19,1,5,6,7])),Corporators:()=>f(()=>import("./Corporators-D-IO2vf6.js"),__vite__mapDeps([20,1,5,6,7,9,2])),Availability:()=>f(()=>import("./Availability-NxJKkAzx.js"),__vite__mapDeps([21,1,6,7,9,18])),ApplicationCitizens:()=>f(()=>import("./ApplicationCitizens-DDwgwWNL.js"),__vite__mapDeps([22,1,11,6,7,9])),JansanwadAppform:()=>f(()=>import("./JansanwadAppform-DGPeZph2.js"),__vite__mapDeps([17,1,5,6,7])),Meetings:()=>f(()=>import("./Meetings-CP8l9R4J.js"),__vite__mapDeps([23,1,5,6,7,9,18,24])),SpecificMeetingSubjects:()=>f(()=>import("./SpecificMeetingSubjects-B73atceX.js"),__vite__mapDeps([25,1,5,6,7])),Home:()=>f(()=>import("./Home-BkBiboi5.js"),__vite__mapDeps([26,1,9,12])),BookAppointment:()=>f(()=>import("./BookAppointment-Cp-FBUVM.js"),__vite__mapDeps([27,1,11,6,7])),Myappointments:()=>f(()=>import("./Myappointments-tLEa_u7y.js"),__vite__mapDeps([28,1,11,6,7])),CitizenRegistration:()=>f(()=>import("./CitizenRegistration-CNoYNreJ.js"),__vite__mapDeps([29,1,11,6,7,4,3]))},gt=l.lazy(h.Login),ht=l.lazy(h.CitizenLogin),ft=l.lazy(h.PortalSelect),xt=l.lazy(h.Registration),bt=l.lazy(h.Dashboard),yt=l.lazy(h.AllApplication),vt=l.lazy(h.Users),wt=l.lazy(h.Corporators),jt=l.lazy(h.Availability),St=l.lazy(h.ApplicationCitizens),kt=l.lazy(h.JansanwadAppform),At=l.lazy(h.Meetings),J=l.lazy(h.SpecificMeetingSubjects),he=l.lazy(h.Home),Ct=l.lazy(h.BookAppointment),Nt=l.lazy(h.Myappointments),Mt=l.lazy(h.CitizenRegistration);function Dt(){l.useEffect(()=>{const t=()=>Object.values(h).forEach(i=>i().catch(()=>{}));if("requestIdleCallback"in window){const i=window.requestIdleCallback(t,{timeout:4e3});return()=>window.cancelIdleCallback?.(i)}const o=setTimeout(t,2500);return()=>clearTimeout(o)},[])}function fe({children:t}){return localStorage.getItem("citizenUser")?t:e.jsx(_,{to:"/citizen-login",replace:!0})}function Tt({children:t}){const{user:o}=H(i=>i.auth);return ee(o)?t:e.jsx(_,{to:"/dashboard",replace:!0})}function Pt(){const{isLoggedIn:t}=H(i=>i.auth),o=localStorage.getItem("authUser");return t||o?e.jsx(ut,{}):e.jsx(_,{to:"/login",replace:!0})}function Et(){const t=te();return l.useEffect(()=>{const o=localStorage.getItem("authUser");o&&t(Je(JSON.parse(o)))},[t]),Dt(),e.jsxs(e.Fragment,{children:[e.jsx(Ue,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),e.jsx(l.Suspense,{fallback:e.jsx(Ae,{fullScreen:!0}),children:e.jsxs(Te,{children:[e.jsx(u,{path:"/",element:e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsx(he,{}),e.jsx(w,{})]})}),e.jsx(u,{path:"/home",element:e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsx(he,{}),e.jsx(w,{})]})}),e.jsx(u,{path:"/login",element:e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsx(ft,{}),e.jsx(w,{})]})}),e.jsx(u,{path:"/admin-login",element:e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsx(gt,{}),e.jsx(w,{})]})}),e.jsx(u,{path:"/citizen-login",element:e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsx(ht,{}),e.jsx(w,{})]})}),e.jsx(u,{path:"/citizen-registration",element:e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsx(Mt,{}),e.jsx(w,{})]})}),e.jsx(u,{path:"/register",element:e.jsx(xt,{})}),e.jsx(u,{path:"/book-appointment",element:e.jsx(fe,{children:e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsx(Ct,{}),e.jsx(w,{})]})})}),e.jsx(u,{path:"/my-appointments",element:e.jsx(fe,{children:e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsx(Nt,{}),e.jsx(w,{})]})})}),e.jsxs(u,{element:e.jsx(Pt,{}),children:[e.jsx(u,{path:"/dashboard",element:e.jsx(bt,{})}),e.jsx(u,{path:"/meetings",element:e.jsx(At,{})}),e.jsx(u,{path:"/meetingsubjects",element:e.jsx(J,{})}),e.jsx(u,{path:"/proceedingsmeeting/:meetingId",element:e.jsx(J,{})}),e.jsx(u,{path:"/proceedingsmeeting",element:e.jsx(J,{})}),e.jsx(u,{path:"/allapplication",element:e.jsx(Tt,{children:e.jsx(yt,{})})}),e.jsx(u,{path:"/allapplicationcitizens",element:e.jsx(St,{})}),e.jsx(u,{path:"/availability",element:e.jsx(jt,{})}),e.jsx(u,{path:"/Jansanwadappform",element:e.jsx(kt,{})}),e.jsx(u,{path:"/users",element:e.jsx(vt,{})}),e.jsx(u,{path:"/corporators",element:e.jsx(wt,{})})]}),e.jsx(u,{path:"*",element:e.jsx(_,{to:"/",replace:!0})})]})})]})}const Ot=Re({reducer:{auth:Ye}});it();Pe.createRoot(document.getElementById("root")).render(e.jsx(Ee.StrictMode,{children:e.jsx(ze,{store:Ot,children:e.jsx(Oe,{children:e.jsx(Et,{})})})}));export{Je as a,Ke as g,M as l,T as t};
