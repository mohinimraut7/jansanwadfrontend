// // // ─────────────────────────────────────────────────────────────
// // // AgendaPdfViewer — Agenda File Viewer मधला PDF viewer
// // // Mozilla pdf.js (pdfjs-dist) वापरून PDF थेट page मध्ये render होतो.
// // // Toolbar (search, pages, zoom, annotation, print, save, fullscreen, more)
// // // आता बाहेरच्या VVCMC modal मध्ये आहे — आतला वेगळा iframe/toolbar नाही.
// // // Install:  npm i pdfjs-dist@4.10.38
// // // ─────────────────────────────────────────────────────────────
// // import { useEffect, useRef, useState, useCallback } from "react";
// // import * as pdfjsLib from "pdfjs-dist";
// // import { AnnotationEditorType, AnnotationEditorParamsType } from "pdfjs-dist";
// // import { EventBus, PDFLinkService, PDFFindController, PDFViewer } from "pdfjs-dist/web/pdf_viewer.mjs";
// // import "pdfjs-dist/web/pdf_viewer.css";
// // import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
// // import {
// //   FiSidebar, FiSearch, FiChevronUp, FiChevronDown, FiMinus, FiPlus, FiPrinter,
// //   FiSave, FiMaximize, FiMinimize, FiMoreVertical, FiType, FiEdit3, FiImage,
// //   FiX, FiRotateCw, FiRotateCcw, FiChevronsUp, FiChevronsDown, FiMousePointer,
// //   FiMove, FiInfo, FiCheck,
// // } from "react-icons/fi";
// // import { BiHighlight } from "react-icons/bi";

// // pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

// // const APV_CSS = `
// // .apv-root{display:flex;flex-direction:column;height:100%;min-height:0;font-family:'Nunito Sans',sans-serif;color:#174B58;}
// // .apv-toolbar{position:relative;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 14px;
// //   background:#E5F2F3;border-bottom:1px solid #DCEAEC;flex-shrink:0;flex-wrap:nowrap;overflow-x:auto;overflow-y:visible;scrollbar-width:none;}
// // .apv-toolbar::-webkit-scrollbar{display:none;}
// // .apv-group{display:flex;align-items:center;gap:4px;flex-shrink:0;}
// // .apv-sep{width:1px;height:22px;background:#C9DFE2;margin:0 6px;flex-shrink:0;}
// // .apv-btn{width:34px;height:34px;display:inline-flex;align-items:center;justify-content:center;border-radius:9px;border:1px solid transparent;
// //   background:transparent;color:#174B58;cursor:pointer;font-size:17px;transition:background .15s,color .15s,border-color .15s;flex-shrink:0;padding:0;}
// // .apv-btn:hover:not(:disabled){background:#FFFFFF;border-color:#DCEAEC;color:#078D9B;}
// // .apv-btn.active{background:#FFFFFF;border-color:#078D9B;color:#078D9B;box-shadow:0 1px 4px rgba(7,141,155,.18);}
// // .apv-btn:disabled{opacity:.38;cursor:not-allowed;}
// // .apv-btn:focus-visible,.apv-select:focus-visible,.apv-page-input:focus{outline:none;box-shadow:0 0 0 3px rgba(7,141,155,.22);border-color:#078D9B;}
// // .apv-page-input{width:46px;height:32px;text-align:center;border:1px solid #DCEAEC;border-radius:8px;background:#fff;color:#075568;
// //   font:700 13.5px 'Nunito Sans',sans-serif;margin-left:4px;}
// // .apv-of{font-size:13px;font-weight:700;color:#5f7f86;margin:0 4px 0 6px;white-space:nowrap;}
// // .apv-select{height:34px;border:1px solid #DCEAEC;border-radius:9px;background:#fff;color:#075568;font:700 13px 'Nunito Sans',sans-serif;
// //   padding:0 30px 0 12px;cursor:pointer;appearance:none;margin-left:4px;
// //   background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23078D9B' stroke-width='3'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
// //   background-repeat:no-repeat;background-position:right 10px center;}
// // .apv-pop{position:fixed;z-index:3100;background:#fff;border:1px solid #DCEAEC;border-radius:14px;padding:12px;min-width:220px;
// //   box-shadow:0 14px 40px rgba(7,85,104,.18);animation:apvPop .14s ease-out;}
// // @keyframes apvPop{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
// // .apv-pop-title{display:flex;align-items:center;justify-content:space-between;font-size:13px;font-weight:800;color:#075568;margin-bottom:10px;}
// // .apv-find{width:340px;max-width:calc(100vw - 24px);}
// // .apv-find-row{display:flex;gap:4px;align-items:center;}
// // .apv-find-input{flex:1;height:36px;border:1px solid #DCEAEC;border-radius:9px;padding:0 12px;font:600 13.5px 'Nunito Sans',sans-serif;color:#174B58;background:#EFF7F7;outline:none;min-width:0;}
// // .apv-find-input:focus{border-color:#078D9B;background:#fff;box-shadow:0 0 0 3px rgba(7,141,155,.15);}
// // .apv-find-opts{display:flex;flex-wrap:wrap;gap:6px 14px;margin-top:10px;font-size:12.5px;font-weight:700;color:#174B58;}
// // .apv-find-opts label,.apv-check{display:inline-flex;align-items:center;gap:6px;cursor:pointer;}
// // .apv-find-opts input,.apv-check input{accent-color:#078D9B;}
// // .apv-find-msg{margin-top:8px;font-size:12px;font-weight:700;color:#078D9B;}
// // .apv-field{display:flex;flex-direction:column;gap:6px;font-size:12.5px;font-weight:700;color:#174B58;margin-bottom:10px;}
// // .apv-field b{color:#078D9B;}
// // .apv-field input[type=range]{accent-color:#078D9B;width:100%;}
// // .apv-field input[type=color]{width:100%;height:30px;border:1px solid #DCEAEC;border-radius:8px;padding:2px;background:#fff;cursor:pointer;}
// // .apv-swatches{display:flex;gap:8px;margin-bottom:10px;}
// // .apv-swatch{width:26px;height:26px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #DCEAEC;cursor:pointer;}
// // .apv-swatch:hover{box-shadow:0 0 0 2px #078D9B;}
// // .apv-check{font-size:12.5px;font-weight:700;}
// // .apv-hint{margin-top:8px;font-size:11.5px;color:#5f7f86;font-weight:600;}
// // .apv-menu{padding:6px;min-width:250px;max-height:70vh;overflow:auto;}
// // .apv-menu button{width:100%;display:flex;align-items:center;gap:10px;background:none;border:none;border-radius:8px;padding:8px 10px;
// //   font:700 13px 'Nunito Sans',sans-serif;color:#174B58;cursor:pointer;text-align:left;}
// // .apv-menu button:hover:not(:disabled){background:#E5F2F3;color:#075568;}
// // .apv-menu button.on{color:#078D9B;}
// // .apv-menu button:disabled{opacity:.4;cursor:not-allowed;}
// // .apv-menu svg{font-size:15px;flex-shrink:0;}
// // .apv-tick{margin-left:auto;}
// // .apv-menu hr{border:none;border-top:1px solid #DCEAEC;margin:4px 6px;}
// // .apv-props{width:320px;max-width:calc(100vw - 24px);}
// // .apv-prop{display:flex;justify-content:space-between;gap:12px;padding:6px 0;border-bottom:1px solid #EFF7F7;font-size:12.5px;}
// // .apv-prop span{color:#5f7f86;font-weight:700;white-space:nowrap;}
// // .apv-prop b{color:#174B58;font-weight:700;text-align:right;word-break:break-word;}
// // .apv-body{flex:1;display:flex;min-height:0;background:#EFF7F7;}
// // .apv-sidebar{width:160px;flex-shrink:0;overflow-y:auto;background:#F6FBFB;border-right:1px solid #DCEAEC;padding:14px 10px;display:flex;flex-direction:column;align-items:center;gap:14px;}
// // .apv-thumb{display:flex;flex-direction:column;align-items:center;gap:6px;background:none;border:none;cursor:pointer;padding:6px;border-radius:10px;}
// // .apv-thumb img,.apv-thumb-ph{width:110px;border:1px solid #DCEAEC;border-radius:4px;background:#fff;box-shadow:0 2px 8px rgba(7,85,104,.08);}
// // .apv-thumb-ph{height:150px;display:block;}
// // .apv-thumb:hover{background:#E5F2F3;}
// // .apv-thumb.active{background:#E5F2F3;}
// // .apv-thumb.active img{border:2px solid #078D9B;}
// // .apv-thumb-no{font-size:12px;font-weight:800;color:#5f7f86;}
// // .apv-thumb.active .apv-thumb-no{color:#078D9B;}
// // .apv-stage{flex:1;position:relative;min-width:0;}
// // .apv-container{position:absolute;inset:0;overflow:auto;}
// // .apv-container.apv-hand{cursor:grab;}
// // .apv-container.apv-hand .textLayer{pointer-events:none;}
// // .apv-container.apv-grabbing{cursor:grabbing;}
// // .apv-container .pdfViewer{--page-margin:18px auto;--page-border:0 solid transparent;padding:2px 0 10px;}
// // .apv-container .pdfViewer .page{box-shadow:0 0 0 1px #DCEAEC,0 4px 18px rgba(7,85,104,.10);}
// // .apv-container .pdfViewer.scrollHorizontal .page,.apv-container .pdfViewer.scrollWrapped .page,.apv-container .pdfViewer .spread .page{margin:18px 9px;}
// // .apv-state{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:#EFF7F7;text-align:center;padding:24px;}
// // .apv-state p{margin:0;font-size:14.5px;font-weight:800;color:#075568;}
// // .apv-state small{font-size:12.5px;color:#5f7f86;font-weight:600;}
// // .apv-err-icon{font-size:40px;width:76px;height:76px;border-radius:18px;background:#E5F2F3;display:flex;align-items:center;justify-content:center;}
// // .apv-spinner{width:38px;height:38px;border-radius:50%;border:3px solid #DCEAEC;border-top-color:#078D9B;animation:apvSpin .8s linear infinite;}
// // @keyframes apvSpin{to{transform:rotate(360deg)}}
// // :fullscreen.vm-box{border-radius:0;width:100vw!important;height:100vh!important;max-width:none!important;}
// // @media (max-width:1024px){ .apv-sidebar{width:140px;} .apv-thumb img,.apv-thumb-ph{width:96px;} }
// // @media (max-width:640px){
// //   .apv-toolbar{padding:6px 8px;gap:6px;justify-content:flex-start;}
// //   .apv-btn{width:32px;height:32px;font-size:16px;}
// //   .apv-select{height:32px;font-size:12px;padding:0 26px 0 8px;}
// //   .apv-sidebar{position:absolute;z-index:5;top:0;bottom:0;left:0;box-shadow:6px 0 18px rgba(7,85,104,.12);}
// //   .apv-body{position:relative;}
// //   .apv-container .pdfViewer{--page-margin:10px auto;}
// // }
// // `;

// // const ZOOM_OPTIONS = [
// //   { value: "auto", label: "Automatic Zoom" },
// //   { value: "page-actual", label: "Actual Size" },
// //   { value: "page-fit", label: "Page Fit" },
// //   { value: "page-width", label: "Page Width" },
// //   { value: "0.5", label: "50%" },
// //   { value: "0.75", label: "75%" },
// //   { value: "1", label: "100%" },
// //   { value: "1.25", label: "125%" },
// //   { value: "1.5", label: "150%" },
// //   { value: "2", label: "200%" },
// //   { value: "3", label: "300%" },
// //   { value: "4", label: "400%" },
// // ];
// // const MIN_SCALE = 0.1, MAX_SCALE = 10;
// // const HIGHLIGHT_COLORS = "yellow=#FFFF98,green=#53FFBC,blue=#80EBFF,pink=#FFCBE6,red=#FF4F5F";
// // const SCROLL = { VERTICAL: 0, HORIZONTAL: 1, WRAPPED: 2, PAGE: 3 };
// // const SPREAD = { NONE: 0, ODD: 1, EVEN: 2 };

// // // Toolbar button (component बाहेर — re-render वर remount होत नाही)
// // function Btn({ title, onClick, active, disabled, children, ready, className = "" }) {
// //   return (
// //     <button type="button" className={`apv-btn ${active ? "active" : ""} ${className}`} title={title} aria-label={title}
// //       aria-pressed={active || undefined} onClick={onClick} disabled={disabled || !ready}>{children}</button>
// //   );
// // }

// // export default function AgendaPdfViewer({ url, fileName = "document.pdf" }) {
// //   const rootRef      = useRef(null);
// //   const containerRef = useRef(null);
// //   const viewerElRef  = useRef(null);
// //   const viewerRef    = useRef(null);
// //   const eventBusRef  = useRef(null);
// //   const docRef       = useRef(null);
// //   const findInputRef = useRef(null);
// //   const pendingStamp = useRef(false);
// //   const toolbarRef   = useRef(null);
// //   const thumbsRotRef = useRef(null);
// //   const [tbRect, setTbRect] = useState(null);

// //   const [status, setStatus]         = useState("loading"); // loading | ready | error
// //   const [progress, setProgress]     = useState(0);
// //   const [numPages, setNumPages]     = useState(0);
// //   const [page, setPage]             = useState(1);
// //   const [pageInput, setPageInput]   = useState("1");
// //   const [scaleValue, setScaleValue] = useState("auto");
// //   const [scalePct, setScalePct]     = useState(100);
// //   const [editorMode, setEditorMode] = useState(AnnotationEditorType.NONE);
// //   const [panel, setPanel]           = useState(null);   // search | text | draw | highlight | more | props
// //   const [sidebar, setSidebar]       = useState(false);
// //   const [thumbs, setThumbs]         = useState([]);
// //   const [fullscreen, setFullscreen] = useState(false);
// //   const [rotation, setRotation]     = useState(0);
// //   const [scrollMode, setScrollMode] = useState(SCROLL.VERTICAL);
// //   const [spreadMode, setSpreadMode] = useState(SPREAD.NONE);
// //   const [handTool, setHandTool]     = useState(false);
// //   const [props, setProps]           = useState(null);

// //   // find
// //   const [query, setQuery]               = useState("");
// //   const [highlightAll, setHighlightAll] = useState(true);
// //   const [matchCase, setMatchCase]       = useState(false);
// //   const [wholeWord, setWholeWord]       = useState(false);
// //   const [matches, setMatches]           = useState({ current: 0, total: 0 });
// //   const [findMsg, setFindMsg]           = useState("");

// //   // editor params
// //   const [textColor, setTextColor] = useState("#000000");
// //   const [textSize, setTextSize]   = useState(10);
// //   const [inkColor, setInkColor]   = useState("#000000");
// //   const [inkThick, setInkThick]   = useState(1);
// //   const [inkOpacity, setInkOpacity] = useState(100);
// //   const [hlShowAll, setHlShowAll] = useState(true);

// //   // ── Load document ──
// //   useEffect(() => {
// //     if (!url || !containerRef.current) return;
// //     let cancelled = false;
// //     setStatus("loading"); setProgress(0); setThumbs([]); setPanel(null);

// //     const eventBus = new EventBus();
// //     const linkService = new PDFLinkService({ eventBus, externalLinkTarget: 2 /* BLANK */ });
// //     const findController = new PDFFindController({ eventBus, linkService });
// //     const viewer = new PDFViewer({
// //       container: containerRef.current,
// //       viewer: viewerElRef.current,
// //       eventBus, linkService, findController,
// //       annotationEditorMode: AnnotationEditorType.NONE,
// //       annotationEditorHighlightColors: HIGHLIGHT_COLORS,
// //       enableHighlightFloatingButton: false,
// //     });
// //     linkService.setViewer(viewer);
// //     viewerRef.current = viewer;
// //     eventBusRef.current = eventBus;

// //     eventBus.on("pagesinit", () => { viewer.currentScaleValue = "auto"; });
// //     eventBus.on("pagechanging", e => { setPage(e.pageNumber); setPageInput(String(e.pageNumber)); });
// //     eventBus.on("scalechanging", e => {
// //       setScalePct(Math.round(e.scale * 100));
// //       setScaleValue(e.presetValue || String(e.scale));
// //     });
// //     eventBus.on("rotationchanging", e => setRotation(e.pagesRotation));
// //     eventBus.on("annotationeditormodechanged", e => {
// //       setEditorMode(e.mode);
// //       if (e.mode === AnnotationEditorType.STAMP && pendingStamp.current) {
// //         pendingStamp.current = false;
// //         eventBus.dispatch("switchannotationeditorparams", { source: null, type: AnnotationEditorParamsType.CREATE });
// //       }
// //     });
// //     // pdf.js स्वतः mode बदलायला सांगतो (उदा. annotation वर double-click)
// //     eventBus.on("switchannotationeditormode", e => {
// //       try { viewer.annotationEditorMode = { mode: e.mode, editId: e.editId ?? null }; } catch {}
// //     });
// //     eventBus.on("updatefindmatchescount", e => setMatches(e.matchesCount || { current: 0, total: 0 }));
// //     eventBus.on("updatefindcontrolstate", e => {
// //       if (e.matchesCount) setMatches(e.matchesCount);
// //       setFindMsg(e.state === 1 ? "Not found" : e.state === 2 ? (e.previous ? "Reached top, continued from bottom" : "Reached end, continued from top") : "");
// //     });

// //     const task = pdfjsLib.getDocument({ url });
// //     task.onProgress = ({ loaded, total }) => total && setProgress(Math.min(100, Math.round((loaded / total) * 100)));
// //     task.onPassword = (updatePassword, reason) => {
// //       const pwd = window.prompt(reason === 2 ? "Incorrect password. Enter PDF password:" : "This PDF is password protected. Enter password:");
// //       if (pwd === null) { task.destroy(); setStatus("error"); } else updatePassword(pwd);
// //     };
// //     task.promise.then(doc => {
// //       if (cancelled) return;
// //       docRef.current = doc;
// //       viewer.setDocument(doc);
// //       linkService.setDocument(doc, null);
// //       setNumPages(doc.numPages);
// //       setStatus("ready");
// //     }).catch(() => { if (!cancelled) setStatus("error"); });

// //     return () => {
// //       cancelled = true;
// //       try { viewer.setDocument(null); } catch {}
// //       try { linkService.setDocument(null); } catch {}
// //       task.destroy();
// //       docRef.current = null;
// //       viewerRef.current = null;
// //     };
// //   }, [url]);

// //   // ── Popover position (toolbar च्या खाली) ──
// //   useEffect(() => {
// //     if (!panel) return;
// //     const upd = () => toolbarRef.current && setTbRect(toolbarRef.current.getBoundingClientRect());
// //     upd();
// //     window.addEventListener("resize", upd);
// //     return () => window.removeEventListener("resize", upd);
// //   }, [panel, fullscreen]);
// //   const popStyle = side => {
// //     if (!tbRect) return { visibility: "hidden" };
// //     const top = tbRect.bottom + 6;
// //     return side === "left"
// //       ? { top, left: Math.max(8, tbRect.left + 10) }
// //       : { top, right: Math.max(8, window.innerWidth - tbRect.right + 10) };
// //   };

// //   // ── Fullscreen sync ──
// //   useEffect(() => {
// //     const onFs = () => setFullscreen(!!document.fullscreenElement);
// //     document.addEventListener("fullscreenchange", onFs);
// //     return () => document.removeEventListener("fullscreenchange", onFs);
// //   }, []);

// //   // ── Thumbnails (sidebar उघडल्यावरच) ──
// //   useEffect(() => {
// //     const doc = docRef.current;
// //     if (!sidebar || !doc) return;
// //     if (thumbs.length && thumbsRotRef.current === rotation) return;
// //     thumbsRotRef.current = rotation;
// //     let stop = false;
// //     (async () => {
// //       const out = [];
// //       for (let i = 1; i <= doc.numPages && !stop; i++) {
// //         try {
// //           const p = await doc.getPage(i);
// //           const vp0 = p.getViewport({ scale: 1, rotation });
// //           const vp = p.getViewport({ scale: 110 / vp0.width, rotation });
// //           const c = document.createElement("canvas");
// //           c.width = vp.width; c.height = vp.height;
// //           await p.render({ canvasContext: c.getContext("2d"), viewport: vp }).promise;
// //           out.push(c.toDataURL());
// //           if (!stop) setThumbs([...out]);
// //         } catch { out.push(null); }
// //       }
// //     })();
// //     return () => { stop = true; };
// //   }, [sidebar, status, rotation]); // eslint-disable-line

// //   // ── Hand tool (drag to scroll) ──
// //   useEffect(() => {
// //     const el = containerRef.current;
// //     if (!el || !handTool) return;
// //     let sx, sy, sl, st, down = false;
// //     const md = e => { if (e.button !== 0) return; down = true; sx = e.clientX; sy = e.clientY; sl = el.scrollLeft; st = el.scrollTop; el.classList.add("apv-grabbing"); e.preventDefault(); };
// //     const mm = e => { if (!down) return; el.scrollLeft = sl - (e.clientX - sx); el.scrollTop = st - (e.clientY - sy); };
// //     const mu = () => { down = false; el.classList.remove("apv-grabbing"); };
// //     el.addEventListener("mousedown", md); window.addEventListener("mousemove", mm); window.addEventListener("mouseup", mu);
// //     return () => { el.removeEventListener("mousedown", md); window.removeEventListener("mousemove", mm); window.removeEventListener("mouseup", mu); };
// //   }, [handTool]);

// //   // ── Helpers ──
// //   const v = () => viewerRef.current;
// //   const ready = status === "ready";

// //   const goTo = n => { if (!v()) return; const p = Math.max(1, Math.min(numPages, n)); v().currentPageNumber = p; };
// //   const commitPageInput = () => { const n = parseInt(pageInput, 10); if (Number.isFinite(n)) goTo(n); else setPageInput(String(page)); };

// //   const zoomBy = dir => {
// //     if (!v()) return;
// //     const cur = v().currentScale;
// //     const next = dir > 0 ? Math.min(MAX_SCALE, Math.round(cur * 1.1 * 100) / 100) : Math.max(MIN_SCALE, Math.round((cur / 1.1) * 100) / 100);
// //     v().currentScaleValue = String(next);
// //   };
// //   const setZoom = val => { if (v()) v().currentScaleValue = val; };
// //   const zoomSelectValue = ZOOM_OPTIONS.some(o => o.value === scaleValue) ? scaleValue : "custom";

// //   const runFind = useCallback((type = "", findPrevious = false, overrides = {}) => {
// //     eventBusRef.current?.dispatch("find", {
// //       source: null, type, query: overrides.query ?? query,
// //       caseSensitive: overrides.matchCase ?? matchCase, entireWord: overrides.wholeWord ?? wholeWord,
// //       highlightAll: overrides.highlightAll ?? highlightAll, findPrevious, matchDiacritics: false,
// //     });
// //   }, [query, matchCase, wholeWord, highlightAll]);

// //   const setMode = mode => {
// //     if (!v()) return;
// //     const next = editorMode === mode ? AnnotationEditorType.NONE : mode;
// //     try { v().annotationEditorMode = { mode: next }; } catch {}
// //     const map = { [AnnotationEditorType.FREETEXT]: "text", [AnnotationEditorType.INK]: "draw", [AnnotationEditorType.HIGHLIGHT]: "highlight" };
// //     setPanel(next === AnnotationEditorType.NONE ? null : map[next] || null);
// //   };
// //   const addImage = () => {
// //     if (!v()) return;
// //     if (editorMode === AnnotationEditorType.STAMP) {
// //       eventBusRef.current.dispatch("switchannotationeditorparams", { source: null, type: AnnotationEditorParamsType.CREATE });
// //     } else {
// //       pendingStamp.current = true;
// //       try { v().annotationEditorMode = { mode: AnnotationEditorType.STAMP }; } catch { pendingStamp.current = false; }
// //     }
// //     setPanel(null);
// //   };
// //   const editorParam = (type, value) => eventBusRef.current?.dispatch("switchannotationeditorparams", { source: null, type, value });

// //   const getBytes = async () => {
// //     const doc = docRef.current;
// //     if (!doc) return null;
// //     try { return doc.annotationStorage.size > 0 ? await doc.saveDocument() : await doc.getData(); }
// //     catch { return await doc.getData(); }
// //   };
// //   const handleSave = async () => {
// //     const bytes = await getBytes(); if (!bytes) return;
// //     const blobUrl = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
// //     const a = document.createElement("a"); a.href = blobUrl; a.download = fileName; document.body.appendChild(a); a.click(); a.remove();
// //     setTimeout(() => URL.revokeObjectURL(blobUrl), 30000);
// //   };
// //   const handlePrint = async () => {
// //     const bytes = await getBytes(); if (!bytes) return;
// //     const blobUrl = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
// //     const frame = document.createElement("iframe");
// //     frame.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0;";
// //     frame.src = blobUrl;
// //     frame.onload = () => { try { frame.contentWindow.focus(); frame.contentWindow.print(); } catch { window.open(blobUrl, "_blank"); } };
// //     document.body.appendChild(frame);
// //     setTimeout(() => { frame.remove(); URL.revokeObjectURL(blobUrl); }, 60000);
// //   };
// //   const toggleFullscreen = () => {
// //     const box = rootRef.current?.closest(".vm-box") || rootRef.current;
// //     if (document.fullscreenElement) document.exitFullscreen?.();
// //     else box?.requestFullscreen?.();
// //   };
// //   const rotate = d => { if (v()) v().pagesRotation = (rotation + d + 360) % 360; };
// //   const changeScroll = m => { if (v()) { v().scrollMode = m; setScrollMode(m); if (m === SCROLL.HORIZONTAL && spreadMode !== SPREAD.NONE) setSpreadMode(SPREAD.NONE); } };
// //   const changeSpread = m => { if (v()) { v().spreadMode = m; setSpreadMode(m); } };
// //   const openProps = async () => {
// //     setPanel("props");
// //     const doc = docRef.current; if (!doc) return;
// //     try {
// //       const { info } = await doc.getMetadata();
// //       const { length } = await doc.getDownloadInfo();
// //       const fmt = d => { const m = d && /D:(\d{4})(\d{2})(\d{2})(\d{2})?(\d{2})?/.exec(d); return m ? `${m[3]}/${m[2]}/${m[1]}${m[4] ? ` ${m[4]}:${m[5] || "00"}` : ""}` : "-"; };
// //       setProps([
// //         ["File name", fileName], ["File size", length ? `${(length / 1024).toFixed(0)} KB` : "-"],
// //         ["Title", info?.Title || "-"], ["Author", info?.Author || "-"], ["Subject", info?.Subject || "-"],
// //         ["Creator", info?.Creator || "-"], ["PDF Producer", info?.Producer || "-"],
// //         ["Created", fmt(info?.CreationDate)], ["Modified", fmt(info?.ModDate)],
// //         ["PDF Version", info?.PDFFormatVersion || "-"], ["Pages", String(doc.numPages)],
// //       ]);
// //     } catch { setProps([["File name", fileName], ["Pages", String(doc.numPages)]]); }
// //   };

// //   // Ctrl+F → आपला search (viewer उघडा असताना)
// //   useEffect(() => {
// //     const onKey = e => {
// //       if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "f") {
// //         e.preventDefault(); setPanel("search"); setTimeout(() => findInputRef.current?.select(), 0);
// //       } else if (e.key === "Escape" && panel) { e.stopPropagation(); setPanel(null); }
// //     };
// //     window.addEventListener("keydown", onKey, true);
// //     return () => window.removeEventListener("keydown", onKey, true);
// //   }, [panel]);


// //   return (
// //     <div className="apv-root" ref={rootRef}>
// //       <style>{APV_CSS}</style>
// //       {/* ── Toolbar (बाहेरच्या frame मध्ये) ── */}
// //       <div className="apv-toolbar" ref={toolbarRef} role="toolbar" aria-label="PDF tools">
// //         <div className="apv-group">
// //           <Btn ready={ready} title="Toggle Sidebar" active={sidebar} onClick={() => setSidebar(s => !s)}><FiSidebar /></Btn>
// //           <Btn ready={ready} title="Find in Document" active={panel === "search"} onClick={() => { setPanel(p => p === "search" ? null : "search"); setTimeout(() => findInputRef.current?.focus(), 0); }}><FiSearch /></Btn>
// //           <span className="apv-sep" />
// //           <Btn ready={ready} title="Previous Page" disabled={page <= 1} onClick={() => goTo(page - 1)}><FiChevronUp /></Btn>
// //           <Btn ready={ready} title="Next Page" disabled={page >= numPages} onClick={() => goTo(page + 1)}><FiChevronDown /></Btn>
// //           <input className="apv-page-input" aria-label="Page" value={pageInput} disabled={!ready}
// //             onChange={e => setPageInput(e.target.value.replace(/\D/g, ""))}
// //             onBlur={commitPageInput} onKeyDown={e => e.key === "Enter" && commitPageInput()} />
// //           <span className="apv-of">of {numPages || "–"}</span>
// //         </div>

// //         <div className="apv-group apv-zoom">
// //           <Btn ready={ready} title="Zoom Out" onClick={() => zoomBy(-1)}><FiMinus /></Btn>
// //           <Btn ready={ready} title="Zoom In" onClick={() => zoomBy(1)}><FiPlus /></Btn>
// //           <select className="apv-select" aria-label="Zoom" value={zoomSelectValue} disabled={!ready} onChange={e => setZoom(e.target.value)}>
// //             {ZOOM_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
// //             {zoomSelectValue === "custom" && <option value="custom" disabled>{scalePct}%</option>}
// //           </select>
// //         </div>

// //         <div className="apv-group">
// //           <Btn ready={ready} title="Highlight" active={editorMode === AnnotationEditorType.HIGHLIGHT} onClick={() => setMode(AnnotationEditorType.HIGHLIGHT)}><BiHighlight /></Btn>
// //           <Btn ready={ready} title="Text" active={editorMode === AnnotationEditorType.FREETEXT} onClick={() => setMode(AnnotationEditorType.FREETEXT)}><FiType /></Btn>
// //           <Btn ready={ready} title="Draw" active={editorMode === AnnotationEditorType.INK} onClick={() => setMode(AnnotationEditorType.INK)}><FiEdit3 /></Btn>
// //           <Btn ready={ready} title="Add or edit images" active={editorMode === AnnotationEditorType.STAMP} onClick={addImage}><FiImage /></Btn>
// //           <span className="apv-sep" />
// //           <Btn ready={ready} title="Print" onClick={handlePrint}><FiPrinter /></Btn>
// //           <Btn ready={ready} title="Save (with annotations)" onClick={handleSave}><FiSave /></Btn>
// //           <Btn ready={ready} title={fullscreen ? "Exit Fullscreen" : "Fullscreen"} onClick={toggleFullscreen}>{fullscreen ? <FiMinimize /> : <FiMaximize />}</Btn>
// //           <Btn ready={ready} title="Tools" active={panel === "more" || panel === "props"} onClick={() => setPanel(p => p === "more" ? null : "more")}><FiMoreVertical /></Btn>
// //         </div>

// //         {/* ── Popovers ── */}
// //         {panel === "search" && (
// //           <div className="apv-pop apv-pop-left apv-find" style={popStyle("left")}>
// //             <div className="apv-find-row">
// //               <input ref={findInputRef} className="apv-find-input" placeholder="Find in document…" value={query}
// //                 onChange={e => { setQuery(e.target.value); runFind("", false, { query: e.target.value }); }}
// //                 onKeyDown={e => { if (e.key === "Enter") runFind("again", e.shiftKey); }} />
// //               <button type="button" className="apv-btn" title="Previous match" onClick={() => runFind("again", true)}><FiChevronUp /></button>
// //               <button type="button" className="apv-btn" title="Next match" onClick={() => runFind("again", false)}><FiChevronDown /></button>
// //             </div>
// //             <div className="apv-find-opts">
// //               <label><input type="checkbox" checked={highlightAll} onChange={e => { setHighlightAll(e.target.checked); runFind("highlightallchange", false, { highlightAll: e.target.checked }); }} /> Highlight All</label>
// //               <label><input type="checkbox" checked={matchCase} onChange={e => { setMatchCase(e.target.checked); runFind("casesensitivitychange", false, { matchCase: e.target.checked }); }} /> Match Case</label>
// //               <label><input type="checkbox" checked={wholeWord} onChange={e => { setWholeWord(e.target.checked); runFind("entirewordchange", false, { wholeWord: e.target.checked }); }} /> Whole Words</label>
// //             </div>
// //             {query && <div className="apv-find-msg">{matches.total ? `${matches.current} of ${matches.total} matches` : findMsg || "Searching…"}{matches.total && findMsg ? ` · ${findMsg}` : ""}</div>}
// //           </div>
// //         )}

// //         {panel === "text" && (
// //           <div className="apv-pop apv-pop-right" style={popStyle("right")}>
// //             <div className="apv-pop-title">Text</div>
// //             <label className="apv-field">Color<input type="color" value={textColor} onChange={e => { setTextColor(e.target.value); editorParam(AnnotationEditorParamsType.FREETEXT_COLOR, e.target.value); }} /></label>
// //             <label className="apv-field">Size <b>{textSize}</b><input type="range" min="5" max="100" value={textSize} onChange={e => { setTextSize(+e.target.value); editorParam(AnnotationEditorParamsType.FREETEXT_SIZE, +e.target.value); }} /></label>
// //           </div>
// //         )}
// //         {panel === "draw" && (
// //           <div className="apv-pop apv-pop-right" style={popStyle("right")}>
// //             <div className="apv-pop-title">Draw</div>
// //             <label className="apv-field">Color<input type="color" value={inkColor} onChange={e => { setInkColor(e.target.value); editorParam(AnnotationEditorParamsType.INK_COLOR, e.target.value); }} /></label>
// //             <label className="apv-field">Thickness <b>{inkThick}</b><input type="range" min="1" max="20" value={inkThick} onChange={e => { setInkThick(+e.target.value); editorParam(AnnotationEditorParamsType.INK_THICKNESS, +e.target.value); }} /></label>
// //             <label className="apv-field">Opacity <b>{inkOpacity}%</b><input type="range" min="1" max="100" value={inkOpacity} onChange={e => { setInkOpacity(+e.target.value); editorParam(AnnotationEditorParamsType.INK_OPACITY, +e.target.value / 100); }} /></label>
// //           </div>
// //         )}
// //         {panel === "highlight" && (
// //           <div className="apv-pop apv-pop-right" style={popStyle("right")}>
// //             <div className="apv-pop-title">Highlight</div>
// //             <div className="apv-swatches">
// //               {HIGHLIGHT_COLORS.split(",").map(s => { const [name, hex] = s.split("="); return (
// //                 <button key={name} type="button" className="apv-swatch" title={name} style={{ background: hex }}
// //                   onClick={() => editorParam(AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR, hex)} />
// //               ); })}
// //             </div>
// //             <label className="apv-check"><input type="checkbox" checked={hlShowAll} onChange={e => { setHlShowAll(e.target.checked); editorParam(AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL, e.target.checked); }} /> Show all</label>
// //             <div className="apv-hint">Text select करा → highlight होईल</div>
// //           </div>
// //         )}
// //         {panel === "more" && (
// //           <div className="apv-pop apv-pop-right apv-menu" style={popStyle("right")}>
// //             <button type="button" onClick={() => { goTo(1); setPanel(null); }}><FiChevronsUp /> Go to First Page</button>
// //             <button type="button" onClick={() => { goTo(numPages); setPanel(null); }}><FiChevronsDown /> Go to Last Page</button>
// //             <hr />
// //             <button type="button" onClick={() => rotate(90)}><FiRotateCw /> Rotate Clockwise</button>
// //             <button type="button" onClick={() => rotate(-90)}><FiRotateCcw /> Rotate Counterclockwise</button>
// //             <hr />
// //             <button type="button" className={!handTool ? "on" : ""} onClick={() => setHandTool(false)}><FiMousePointer /> Text Selection Tool {!handTool && <FiCheck className="apv-tick" />}</button>
// //             <button type="button" className={handTool ? "on" : ""} onClick={() => setHandTool(true)}><FiMove /> Hand Tool {handTool && <FiCheck className="apv-tick" />}</button>
// //             <hr />
// //             {[["Page Scrolling", SCROLL.PAGE], ["Vertical Scrolling", SCROLL.VERTICAL], ["Horizontal Scrolling", SCROLL.HORIZONTAL], ["Wrapped Scrolling", SCROLL.WRAPPED]].map(([l, m]) => (
// //               <button key={l} type="button" className={scrollMode === m ? "on" : ""} onClick={() => changeScroll(m)}>{l} {scrollMode === m && <FiCheck className="apv-tick" />}</button>
// //             ))}
// //             <hr />
// //             {[["No Spreads", SPREAD.NONE], ["Odd Spreads", SPREAD.ODD], ["Even Spreads", SPREAD.EVEN]].map(([l, m]) => (
// //               <button key={l} type="button" className={spreadMode === m ? "on" : ""} disabled={scrollMode === SCROLL.HORIZONTAL && m !== SPREAD.NONE} onClick={() => changeSpread(m)}>{l} {spreadMode === m && <FiCheck className="apv-tick" />}</button>
// //             ))}
// //             <hr />
// //             <button type="button" onClick={openProps}><FiInfo /> Document Properties…</button>
// //           </div>
// //         )}
// //         {panel === "props" && (
// //           <div className="apv-pop apv-pop-right apv-props" style={popStyle("right")}>
// //             <div className="apv-pop-title">Document Properties <button type="button" className="apv-btn" title="Close" onClick={() => setPanel(null)}><FiX /></button></div>
// //             {(props || [["", "Loading…"]]).map(([k, val]) => <div key={k} className="apv-prop"><span>{k}</span><b>{val}</b></div>)}
// //           </div>
// //         )}
// //       </div>

// //       {/* ── Body: sidebar + pages ── */}
// //       <div className="apv-body">
// //         {sidebar && (
// //           <aside className="apv-sidebar">
// //             {Array.from({ length: numPages }, (_, i) => (
// //               <button type="button" key={i} className={`apv-thumb ${page === i + 1 ? "active" : ""}`} onClick={() => goTo(i + 1)} title={`Page ${i + 1}`}>
// //                 {thumbs[i] ? <img src={thumbs[i]} alt={`Page ${i + 1}`} /> : <span className="apv-thumb-ph" />}
// //                 <span className="apv-thumb-no">{i + 1}</span>
// //               </button>
// //             ))}
// //           </aside>
// //         )}
// //         <div className="apv-stage">
// //           <div ref={containerRef} className={`apv-container ${handTool ? "apv-hand" : ""}`} onClick={() => panel && panel !== "search" && setPanel(null)}>
// //             <div ref={viewerElRef} className="pdfViewer" />
// //           </div>
// //           {status === "loading" && (
// //             <div className="apv-state"><div className="apv-spinner" /><p>Loading document… {progress ? `${progress}%` : ""}</p></div>
// //           )}
// //           {status === "error" && (
// //             <div className="apv-state"><span className="apv-err-icon">📄</span><p>PDF preview लोड झाला नाही</p><small>वरील Download बटण वापरा</small></div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




// // ─────────────────────────────────────────────────────────────
// // AgendaPdfViewer — Agenda File Viewer मधला PDF viewer
// // Mozilla pdf.js (pdfjs-dist) वापरून PDF थेट page मध्ये render होतो.
// // Toolbar (search, pages, zoom, annotation, print, save, fullscreen, more)
// // आता बाहेरच्या VVCMC modal मध्ये आहे — आतला वेगळा iframe/toolbar नाही.
// // Install:  npm i pdfjs-dist@4.10.38
// // ─────────────────────────────────────────────────────────────
// import { useEffect, useRef, useState, useCallback } from "react";
// import * as pdfjsLib from "pdfjs-dist";
// import { AnnotationEditorType, AnnotationEditorParamsType } from "pdfjs-dist";
// import { EventBus, PDFLinkService, PDFFindController, PDFViewer } from "pdfjs-dist/web/pdf_viewer.mjs";
// import "pdfjs-dist/web/pdf_viewer.css";
// import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
// import {
//   FiSidebar, FiSearch, FiChevronUp, FiChevronDown, FiMinus, FiPlus, FiPrinter,
//   FiSave, FiMaximize, FiMinimize, FiMoreVertical, FiType, FiEdit3, FiImage,
//   FiX, FiRotateCw, FiRotateCcw, FiChevronsUp, FiChevronsDown, FiMousePointer,
//   FiMove, FiInfo, FiCheck,
// } from "react-icons/fi";
// import { BiHighlight } from "react-icons/bi";

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

// const APV_CSS = `
// .apv-root{display:flex;flex-direction:column;height:100%;min-height:0;font-family:'Nunito Sans',sans-serif;color:#174B58;}
// .apv-toolbar{position:relative;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 14px;
//   background:#E5F2F3;border-bottom:1px solid #DCEAEC;flex-shrink:0;flex-wrap:nowrap;overflow-x:auto;overflow-y:visible;scrollbar-width:none;}
// .apv-toolbar::-webkit-scrollbar{display:none;}
// .apv-group{display:flex;align-items:center;gap:4px;flex-shrink:0;}
// .apv-sep{width:1px;height:22px;background:#C9DFE2;margin:0 6px;flex-shrink:0;}
// .apv-btn{width:34px;height:34px;display:inline-flex;align-items:center;justify-content:center;border-radius:9px;border:1px solid transparent;
//   background:transparent;color:#174B58;cursor:pointer;font-size:17px;transition:background .15s,color .15s,border-color .15s;flex-shrink:0;padding:0;}
// .apv-btn:hover:not(:disabled){background:#FFFFFF;border-color:#DCEAEC;color:#078D9B;}
// .apv-btn.active{background:#FFFFFF;border-color:#078D9B;color:#078D9B;box-shadow:0 1px 4px rgba(7,141,155,.18);}
// .apv-btn:disabled{opacity:.38;cursor:not-allowed;}
// .apv-btn:focus-visible,.apv-select:focus-visible,.apv-page-input:focus{outline:none;box-shadow:0 0 0 3px rgba(7,141,155,.22);border-color:#078D9B;}
// .apv-page-input{width:46px;height:32px;text-align:center;border:1px solid #DCEAEC;border-radius:8px;background:#fff;color:#075568;
//   font:700 13.5px 'Nunito Sans',sans-serif;margin-left:4px;}
// .apv-of{font-size:13px;font-weight:700;color:#5f7f86;margin:0 4px 0 6px;white-space:nowrap;}
// .apv-select{height:34px;border:1px solid #DCEAEC;border-radius:9px;background:#fff;color:#075568;font:700 13px 'Nunito Sans',sans-serif;
//   padding:0 30px 0 12px;cursor:pointer;appearance:none;margin-left:4px;
//   background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23078D9B' stroke-width='3'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
//   background-repeat:no-repeat;background-position:right 10px center;}
// .apv-pop{position:fixed;z-index:3100;background:#fff;border:1px solid #DCEAEC;border-radius:14px;padding:12px;min-width:220px;
//   box-shadow:0 14px 40px rgba(7,85,104,.18);animation:apvPop .14s ease-out;}
// @keyframes apvPop{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
// .apv-pop-title{display:flex;align-items:center;justify-content:space-between;font-size:13px;font-weight:800;color:#075568;margin-bottom:10px;}
// .apv-find{width:340px;max-width:calc(100vw - 24px);}
// .apv-find-row{display:flex;gap:4px;align-items:center;}
// .apv-find-input{flex:1;height:36px;border:1px solid #DCEAEC;border-radius:9px;padding:0 12px;font:600 13.5px 'Nunito Sans',sans-serif;color:#174B58;background:#EFF7F7;outline:none;min-width:0;}
// .apv-find-input:focus{border-color:#078D9B;background:#fff;box-shadow:0 0 0 3px rgba(7,141,155,.15);}
// .apv-find-opts{display:flex;flex-wrap:wrap;gap:6px 14px;margin-top:10px;font-size:12.5px;font-weight:700;color:#174B58;}
// .apv-find-opts label,.apv-check{display:inline-flex;align-items:center;gap:6px;cursor:pointer;}
// .apv-find-opts input,.apv-check input{accent-color:#078D9B;}
// .apv-find-msg{margin-top:8px;font-size:12px;font-weight:700;color:#078D9B;}
// .apv-field{display:flex;flex-direction:column;gap:6px;font-size:12.5px;font-weight:700;color:#174B58;margin-bottom:10px;}
// .apv-field b{color:#078D9B;}
// .apv-field input[type=range]{accent-color:#078D9B;width:100%;}
// .apv-field input[type=color]{width:100%;height:30px;border:1px solid #DCEAEC;border-radius:8px;padding:2px;background:#fff;cursor:pointer;}
// .apv-swatches{display:flex;gap:8px;margin-bottom:10px;}
// .apv-swatch{width:26px;height:26px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #DCEAEC;cursor:pointer;}
// .apv-swatch:hover{box-shadow:0 0 0 2px #078D9B;}
// .apv-check{font-size:12.5px;font-weight:700;}
// .apv-hint{margin-top:8px;font-size:11.5px;color:#5f7f86;font-weight:600;}
// .apv-menu{padding:6px;min-width:250px;max-height:70vh;overflow:auto;}
// .apv-menu button{width:100%;display:flex;align-items:center;gap:10px;background:none;border:none;border-radius:8px;padding:8px 10px;
//   font:700 13px 'Nunito Sans',sans-serif;color:#174B58;cursor:pointer;text-align:left;}
// .apv-menu button:hover:not(:disabled){background:#E5F2F3;color:#075568;}
// .apv-menu button.on{color:#078D9B;}
// .apv-menu button:disabled{opacity:.4;cursor:not-allowed;}
// .apv-menu svg{font-size:15px;flex-shrink:0;}
// .apv-tick{margin-left:auto;}
// .apv-menu hr{border:none;border-top:1px solid #DCEAEC;margin:4px 6px;}
// .apv-props{width:320px;max-width:calc(100vw - 24px);}
// .apv-prop{display:flex;justify-content:space-between;gap:12px;padding:6px 0;border-bottom:1px solid #EFF7F7;font-size:12.5px;}
// .apv-prop span{color:#5f7f86;font-weight:700;white-space:nowrap;}
// .apv-prop b{color:#174B58;font-weight:700;text-align:right;word-break:break-word;}
// .apv-body{flex:1;display:flex;min-height:0;background:#EFF7F7;}
// .apv-sidebar{width:160px;flex-shrink:0;overflow-y:auto;background:#F6FBFB;border-right:1px solid #DCEAEC;padding:14px 10px;display:flex;flex-direction:column;align-items:center;gap:14px;}
// .apv-thumb{display:flex;flex-direction:column;align-items:center;gap:6px;background:none;border:none;cursor:pointer;padding:6px;border-radius:10px;}
// .apv-thumb img,.apv-thumb-ph{width:110px;border:1px solid #DCEAEC;border-radius:4px;background:#fff;box-shadow:0 2px 8px rgba(7,85,104,.08);}
// .apv-thumb-ph{height:150px;display:block;}
// .apv-thumb:hover{background:#E5F2F3;}
// .apv-thumb.active{background:#E5F2F3;}
// .apv-thumb.active img{border:2px solid #078D9B;}
// .apv-thumb-no{font-size:12px;font-weight:800;color:#5f7f86;}
// .apv-thumb.active .apv-thumb-no{color:#078D9B;}
// .apv-stage{flex:1;position:relative;min-width:0;}
// .apv-container{position:absolute;inset:0;overflow:auto;}
// .apv-container.apv-hand{cursor:grab;}
// .apv-container.apv-hand .textLayer{pointer-events:none;}
// .apv-container.apv-grabbing{cursor:grabbing;}
// .apv-container .pdfViewer{--page-margin:18px auto;--page-border:0 solid transparent;padding:2px 0 10px;}
// .apv-container .pdfViewer .page{box-shadow:0 0 0 1px #DCEAEC,0 4px 18px rgba(7,85,104,.10);}
// .apv-container .pdfViewer.scrollHorizontal .page,.apv-container .pdfViewer.scrollWrapped .page,.apv-container .pdfViewer .spread .page{margin:18px 9px;}
// .apv-state{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:#EFF7F7;text-align:center;padding:24px;}
// .apv-state p{margin:0;font-size:14.5px;font-weight:800;color:#075568;}
// .apv-state small{font-size:12.5px;color:#5f7f86;font-weight:600;}
// .apv-err-icon{font-size:40px;width:76px;height:76px;border-radius:18px;background:#E5F2F3;display:flex;align-items:center;justify-content:center;}
// .apv-spinner{width:38px;height:38px;border-radius:50%;border:3px solid #DCEAEC;border-top-color:#078D9B;animation:apvSpin .8s linear infinite;}
// @keyframes apvSpin{to{transform:rotate(360deg)}}
// :fullscreen.vm-box{border-radius:0;width:100vw!important;height:100vh!important;max-width:none!important;}
// @media (max-width:1024px){ .apv-sidebar{width:140px;} .apv-thumb img,.apv-thumb-ph{width:96px;} }
// @media (max-width:640px){
//   .apv-toolbar{padding:6px 8px;gap:6px;justify-content:flex-start;}
//   .apv-btn{width:32px;height:32px;font-size:16px;}
//   .apv-select{height:32px;font-size:12px;padding:0 26px 0 8px;}
//   .apv-sidebar{position:absolute;z-index:5;top:0;bottom:0;left:0;box-shadow:6px 0 18px rgba(7,85,104,.12);}
//   .apv-body{position:relative;}
//   .apv-container .pdfViewer{--page-margin:10px auto;}
// }
// `;

// const ZOOM_OPTIONS = [
//   { value: "auto", label: "Automatic Zoom" },
//   { value: "page-actual", label: "Actual Size" },
//   { value: "page-fit", label: "Page Fit" },
//   { value: "page-width", label: "Page Width" },
//   { value: "0.5", label: "50%" },
//   { value: "0.75", label: "75%" },
//   { value: "1", label: "100%" },
//   { value: "1.25", label: "125%" },
//   { value: "1.5", label: "150%" },
//   { value: "2", label: "200%" },
//   { value: "3", label: "300%" },
//   { value: "4", label: "400%" },
// ];
// const MIN_SCALE = 0.1, MAX_SCALE = 10;
// const HIGHLIGHT_COLORS = "yellow=#FFFF98,green=#53FFBC,blue=#80EBFF,pink=#FFCBE6,red=#FF4F5F";
// const SCROLL = { VERTICAL: 0, HORIZONTAL: 1, WRAPPED: 2, PAGE: 3 };
// const SPREAD = { NONE: 0, ODD: 1, EVEN: 2 };

// // Toolbar button (component बाहेर — re-render वर remount होत नाही)
// function Btn({ title, onClick, active, disabled, children, ready, className = "" }) {
//   return (
//     <button type="button" className={`apv-btn ${active ? "active" : ""} ${className}`} title={title} aria-label={title}
//       aria-pressed={active || undefined} onClick={onClick} disabled={disabled || !ready}>{children}</button>
//   );
// }

// // canAnnotate=false → View access: Highlight / Text / Draw / Image options दिसत नाहीत
// export default function AgendaPdfViewer({ url, fileName = "document.pdf", canAnnotate = true }) {
//   const rootRef      = useRef(null);
//   const containerRef = useRef(null);
//   const viewerElRef  = useRef(null);
//   const viewerRef    = useRef(null);
//   const eventBusRef  = useRef(null);
//   const docRef       = useRef(null);
//   const findInputRef = useRef(null);
//   const pendingStamp = useRef(false);
//   const toolbarRef   = useRef(null);
//   const thumbsRotRef = useRef(null);
//   const [tbRect, setTbRect] = useState(null);

//   const [status, setStatus]         = useState("loading"); // loading | ready | error
//   const [progress, setProgress]     = useState(0);
//   const [numPages, setNumPages]     = useState(0);
//   const [page, setPage]             = useState(1);
//   const [pageInput, setPageInput]   = useState("1");
//   const [scaleValue, setScaleValue] = useState("auto");
//   const [scalePct, setScalePct]     = useState(100);
//   const [editorMode, setEditorMode] = useState(AnnotationEditorType.NONE);
//   const [panel, setPanel]           = useState(null);   // search | text | draw | highlight | more | props
//   const [sidebar, setSidebar]       = useState(false);
//   const [thumbs, setThumbs]         = useState([]);
//   const [fullscreen, setFullscreen] = useState(false);
//   const [rotation, setRotation]     = useState(0);
//   const [scrollMode, setScrollMode] = useState(SCROLL.VERTICAL);
//   const [spreadMode, setSpreadMode] = useState(SPREAD.NONE);
//   const [handTool, setHandTool]     = useState(false);
//   const [props, setProps]           = useState(null);

//   // find
//   const [query, setQuery]               = useState("");
//   const [highlightAll, setHighlightAll] = useState(true);
//   const [matchCase, setMatchCase]       = useState(false);
//   const [wholeWord, setWholeWord]       = useState(false);
//   const [matches, setMatches]           = useState({ current: 0, total: 0 });
//   const [findMsg, setFindMsg]           = useState("");

//   // editor params
//   const [textColor, setTextColor] = useState("#000000");
//   const [textSize, setTextSize]   = useState(10);
//   const [inkColor, setInkColor]   = useState("#000000");
//   const [inkThick, setInkThick]   = useState(1);
//   const [inkOpacity, setInkOpacity] = useState(100);
//   const [hlShowAll, setHlShowAll] = useState(true);

//   // ── Load document ──
//   useEffect(() => {
//     if (!url || !containerRef.current) return;
//     let cancelled = false;
//     setStatus("loading"); setProgress(0); setThumbs([]); setPanel(null);

//     const eventBus = new EventBus();
//     const linkService = new PDFLinkService({ eventBus, externalLinkTarget: 2 /* BLANK */ });
//     const findController = new PDFFindController({ eventBus, linkService });
//     const viewer = new PDFViewer({
//       container: containerRef.current,
//       viewer: viewerElRef.current,
//       eventBus, linkService, findController,
//       annotationEditorMode: canAnnotate ? AnnotationEditorType.NONE : AnnotationEditorType.DISABLE,
//       annotationEditorHighlightColors: HIGHLIGHT_COLORS,
//       enableHighlightFloatingButton: false,
//     });
//     linkService.setViewer(viewer);
//     viewerRef.current = viewer;
//     eventBusRef.current = eventBus;

//     eventBus.on("pagesinit", () => { viewer.currentScaleValue = "auto"; });
//     eventBus.on("pagechanging", e => { setPage(e.pageNumber); setPageInput(String(e.pageNumber)); });
//     eventBus.on("scalechanging", e => {
//       setScalePct(Math.round(e.scale * 100));
//       setScaleValue(e.presetValue || String(e.scale));
//     });
//     eventBus.on("rotationchanging", e => setRotation(e.pagesRotation));
//     eventBus.on("annotationeditormodechanged", e => {
//       setEditorMode(e.mode);
//       if (e.mode === AnnotationEditorType.STAMP && pendingStamp.current) {
//         pendingStamp.current = false;
//         eventBus.dispatch("switchannotationeditorparams", { source: null, type: AnnotationEditorParamsType.CREATE });
//       }
//     });
//     // pdf.js स्वतः mode बदलायला सांगतो (उदा. annotation वर double-click)
//     eventBus.on("switchannotationeditormode", e => {
//       try { viewer.annotationEditorMode = { mode: e.mode, editId: e.editId ?? null }; } catch {}
//     });
//     eventBus.on("updatefindmatchescount", e => setMatches(e.matchesCount || { current: 0, total: 0 }));
//     eventBus.on("updatefindcontrolstate", e => {
//       if (e.matchesCount) setMatches(e.matchesCount);
//       setFindMsg(e.state === 1 ? "Not found" : e.state === 2 ? (e.previous ? "Reached top, continued from bottom" : "Reached end, continued from top") : "");
//     });

//     const task = pdfjsLib.getDocument({ url });
//     task.onProgress = ({ loaded, total }) => total && setProgress(Math.min(100, Math.round((loaded / total) * 100)));
//     task.onPassword = (updatePassword, reason) => {
//       const pwd = window.prompt(reason === 2 ? "Incorrect password. Enter PDF password:" : "This PDF is password protected. Enter password:");
//       if (pwd === null) { task.destroy(); setStatus("error"); } else updatePassword(pwd);
//     };
//     task.promise.then(doc => {
//       if (cancelled) return;
//       docRef.current = doc;
//       viewer.setDocument(doc);
//       linkService.setDocument(doc, null);
//       setNumPages(doc.numPages);
//       setStatus("ready");
//     }).catch(() => { if (!cancelled) setStatus("error"); });

//     return () => {
//       cancelled = true;
//       try { viewer.setDocument(null); } catch {}
//       try { linkService.setDocument(null); } catch {}
//       task.destroy();
//       docRef.current = null;
//       viewerRef.current = null;
//     };
//   }, [url, canAnnotate]);

//   // ── Popover position (toolbar च्या खाली) ──
//   useEffect(() => {
//     if (!panel) return;
//     const upd = () => toolbarRef.current && setTbRect(toolbarRef.current.getBoundingClientRect());
//     upd();
//     window.addEventListener("resize", upd);
//     return () => window.removeEventListener("resize", upd);
//   }, [panel, fullscreen]);
//   const popStyle = side => {
//     if (!tbRect) return { visibility: "hidden" };
//     const top = tbRect.bottom + 6;
//     return side === "left"
//       ? { top, left: Math.max(8, tbRect.left + 10) }
//       : { top, right: Math.max(8, window.innerWidth - tbRect.right + 10) };
//   };

//   // ── Fullscreen sync ──
//   useEffect(() => {
//     const onFs = () => setFullscreen(!!document.fullscreenElement);
//     document.addEventListener("fullscreenchange", onFs);
//     return () => document.removeEventListener("fullscreenchange", onFs);
//   }, []);

//   // ── Thumbnails (sidebar उघडल्यावरच) ──
//   useEffect(() => {
//     const doc = docRef.current;
//     if (!sidebar || !doc) return;
//     if (thumbs.length && thumbsRotRef.current === rotation) return;
//     thumbsRotRef.current = rotation;
//     let stop = false;
//     (async () => {
//       const out = [];
//       for (let i = 1; i <= doc.numPages && !stop; i++) {
//         try {
//           const p = await doc.getPage(i);
//           const vp0 = p.getViewport({ scale: 1, rotation });
//           const vp = p.getViewport({ scale: 110 / vp0.width, rotation });
//           const c = document.createElement("canvas");
//           c.width = vp.width; c.height = vp.height;
//           await p.render({ canvasContext: c.getContext("2d"), viewport: vp }).promise;
//           out.push(c.toDataURL());
//           if (!stop) setThumbs([...out]);
//         } catch { out.push(null); }
//       }
//     })();
//     return () => { stop = true; };
//   }, [sidebar, status, rotation]); // eslint-disable-line

//   // ── Hand tool (drag to scroll) ──
//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el || !handTool) return;
//     let sx, sy, sl, st, down = false;
//     const md = e => { if (e.button !== 0) return; down = true; sx = e.clientX; sy = e.clientY; sl = el.scrollLeft; st = el.scrollTop; el.classList.add("apv-grabbing"); e.preventDefault(); };
//     const mm = e => { if (!down) return; el.scrollLeft = sl - (e.clientX - sx); el.scrollTop = st - (e.clientY - sy); };
//     const mu = () => { down = false; el.classList.remove("apv-grabbing"); };
//     el.addEventListener("mousedown", md); window.addEventListener("mousemove", mm); window.addEventListener("mouseup", mu);
//     return () => { el.removeEventListener("mousedown", md); window.removeEventListener("mousemove", mm); window.removeEventListener("mouseup", mu); };
//   }, [handTool]);

//   // ── Helpers ──
//   const v = () => viewerRef.current;
//   const ready = status === "ready";

//   const goTo = n => { if (!v()) return; const p = Math.max(1, Math.min(numPages, n)); v().currentPageNumber = p; };
//   const commitPageInput = () => { const n = parseInt(pageInput, 10); if (Number.isFinite(n)) goTo(n); else setPageInput(String(page)); };

//   const zoomBy = dir => {
//     if (!v()) return;
//     const cur = v().currentScale;
//     const next = dir > 0 ? Math.min(MAX_SCALE, Math.round(cur * 1.1 * 100) / 100) : Math.max(MIN_SCALE, Math.round((cur / 1.1) * 100) / 100);
//     v().currentScaleValue = String(next);
//   };
//   const setZoom = val => { if (v()) v().currentScaleValue = val; };
//   const zoomSelectValue = ZOOM_OPTIONS.some(o => o.value === scaleValue) ? scaleValue : "custom";

//   const runFind = useCallback((type = "", findPrevious = false, overrides = {}) => {
//     eventBusRef.current?.dispatch("find", {
//       source: null, type, query: overrides.query ?? query,
//       caseSensitive: overrides.matchCase ?? matchCase, entireWord: overrides.wholeWord ?? wholeWord,
//       highlightAll: overrides.highlightAll ?? highlightAll, findPrevious, matchDiacritics: false,
//     });
//   }, [query, matchCase, wholeWord, highlightAll]);

//   const setMode = mode => {
//     if (!v()) return;
//     const next = editorMode === mode ? AnnotationEditorType.NONE : mode;
//     try { v().annotationEditorMode = { mode: next }; } catch {}
//     const map = { [AnnotationEditorType.FREETEXT]: "text", [AnnotationEditorType.INK]: "draw", [AnnotationEditorType.HIGHLIGHT]: "highlight" };
//     setPanel(next === AnnotationEditorType.NONE ? null : map[next] || null);
//   };
//   const addImage = () => {
//     if (!v()) return;
//     if (editorMode === AnnotationEditorType.STAMP) {
//       eventBusRef.current.dispatch("switchannotationeditorparams", { source: null, type: AnnotationEditorParamsType.CREATE });
//     } else {
//       pendingStamp.current = true;
//       try { v().annotationEditorMode = { mode: AnnotationEditorType.STAMP }; } catch { pendingStamp.current = false; }
//     }
//     setPanel(null);
//   };
//   const editorParam = (type, value) => eventBusRef.current?.dispatch("switchannotationeditorparams", { source: null, type, value });

//   const getBytes = async () => {
//     const doc = docRef.current;
//     if (!doc) return null;
//     try { return doc.annotationStorage.size > 0 ? await doc.saveDocument() : await doc.getData(); }
//     catch { return await doc.getData(); }
//   };
//   const handleSave = async () => {
//     const bytes = await getBytes(); if (!bytes) return;
//     const blobUrl = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
//     const a = document.createElement("a"); a.href = blobUrl; a.download = fileName; document.body.appendChild(a); a.click(); a.remove();
//     setTimeout(() => URL.revokeObjectURL(blobUrl), 30000);
//   };
//   const handlePrint = async () => {
//     const bytes = await getBytes(); if (!bytes) return;
//     const blobUrl = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
//     const frame = document.createElement("iframe");
//     frame.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0;";
//     frame.src = blobUrl;
//     frame.onload = () => { try { frame.contentWindow.focus(); frame.contentWindow.print(); } catch { window.open(blobUrl, "_blank"); } };
//     document.body.appendChild(frame);
//     setTimeout(() => { frame.remove(); URL.revokeObjectURL(blobUrl); }, 60000);
//   };
//   const toggleFullscreen = () => {
//     const box = rootRef.current?.closest(".vm-box") || rootRef.current;
//     if (document.fullscreenElement) document.exitFullscreen?.();
//     else box?.requestFullscreen?.();
//   };
//   const rotate = d => { if (v()) v().pagesRotation = (rotation + d + 360) % 360; };
//   const changeScroll = m => { if (v()) { v().scrollMode = m; setScrollMode(m); if (m === SCROLL.HORIZONTAL && spreadMode !== SPREAD.NONE) setSpreadMode(SPREAD.NONE); } };
//   const changeSpread = m => { if (v()) { v().spreadMode = m; setSpreadMode(m); } };
//   const openProps = async () => {
//     setPanel("props");
//     const doc = docRef.current; if (!doc) return;
//     try {
//       const { info } = await doc.getMetadata();
//       const { length } = await doc.getDownloadInfo();
//       const fmt = d => { const m = d && /D:(\d{4})(\d{2})(\d{2})(\d{2})?(\d{2})?/.exec(d); return m ? `${m[3]}/${m[2]}/${m[1]}${m[4] ? ` ${m[4]}:${m[5] || "00"}` : ""}` : "-"; };
//       setProps([
//         ["File name", fileName], ["File size", length ? `${(length / 1024).toFixed(0)} KB` : "-"],
//         ["Title", info?.Title || "-"], ["Author", info?.Author || "-"], ["Subject", info?.Subject || "-"],
//         ["Creator", info?.Creator || "-"], ["PDF Producer", info?.Producer || "-"],
//         ["Created", fmt(info?.CreationDate)], ["Modified", fmt(info?.ModDate)],
//         ["PDF Version", info?.PDFFormatVersion || "-"], ["Pages", String(doc.numPages)],
//       ]);
//     } catch { setProps([["File name", fileName], ["Pages", String(doc.numPages)]]); }
//   };

//   // Ctrl+F → आपला search (viewer उघडा असताना)
//   useEffect(() => {
//     const onKey = e => {
//       if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "f") {
//         e.preventDefault(); setPanel("search"); setTimeout(() => findInputRef.current?.select(), 0);
//       } else if (e.key === "Escape" && panel) { e.stopPropagation(); setPanel(null); }
//     };
//     window.addEventListener("keydown", onKey, true);
//     return () => window.removeEventListener("keydown", onKey, true);
//   }, [panel]);


//   return (
//     <div className="apv-root" ref={rootRef}>
//       <style>{APV_CSS}</style>
//       {/* ── Toolbar (बाहेरच्या frame मध्ये) ── */}
//       <div className="apv-toolbar" ref={toolbarRef} role="toolbar" aria-label="PDF tools">
//         <div className="apv-group">
//           <Btn ready={ready} title="Toggle Sidebar" active={sidebar} onClick={() => setSidebar(s => !s)}><FiSidebar /></Btn>
//           <Btn ready={ready} title="Find in Document" active={panel === "search"} onClick={() => { setPanel(p => p === "search" ? null : "search"); setTimeout(() => findInputRef.current?.focus(), 0); }}><FiSearch /></Btn>
//           <span className="apv-sep" />
//           <Btn ready={ready} title="Previous Page" disabled={page <= 1} onClick={() => goTo(page - 1)}><FiChevronUp /></Btn>
//           <Btn ready={ready} title="Next Page" disabled={page >= numPages} onClick={() => goTo(page + 1)}><FiChevronDown /></Btn>
//           <input className="apv-page-input" aria-label="Page" value={pageInput} disabled={!ready}
//             onChange={e => setPageInput(e.target.value.replace(/\D/g, ""))}
//             onBlur={commitPageInput} onKeyDown={e => e.key === "Enter" && commitPageInput()} />
//           <span className="apv-of">of {numPages || "–"}</span>
//         </div>

//         <div className="apv-group apv-zoom">
//           <Btn ready={ready} title="Zoom Out" onClick={() => zoomBy(-1)}><FiMinus /></Btn>
//           <Btn ready={ready} title="Zoom In" onClick={() => zoomBy(1)}><FiPlus /></Btn>
//           <select className="apv-select" aria-label="Zoom" value={zoomSelectValue} disabled={!ready} onChange={e => setZoom(e.target.value)}>
//             {ZOOM_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
//             {zoomSelectValue === "custom" && <option value="custom" disabled>{scalePct}%</option>}
//           </select>
//         </div>

//         <div className="apv-group">
//           {canAnnotate && (<>
//           <Btn ready={ready} title="Highlight" active={editorMode === AnnotationEditorType.HIGHLIGHT} onClick={() => setMode(AnnotationEditorType.HIGHLIGHT)}><BiHighlight /></Btn>
//           <Btn ready={ready} title="Text" active={editorMode === AnnotationEditorType.FREETEXT} onClick={() => setMode(AnnotationEditorType.FREETEXT)}><FiType /></Btn>
//           <Btn ready={ready} title="Draw" active={editorMode === AnnotationEditorType.INK} onClick={() => setMode(AnnotationEditorType.INK)}><FiEdit3 /></Btn>
//           <Btn ready={ready} title="Add or edit images" active={editorMode === AnnotationEditorType.STAMP} onClick={addImage}><FiImage /></Btn>
//           <span className="apv-sep" />
//           </>)}
//           <Btn ready={ready} title="Print" onClick={handlePrint}><FiPrinter /></Btn>
//           <Btn ready={ready} title="Save (with annotations)" onClick={handleSave}><FiSave /></Btn>
//           <Btn ready={ready} title={fullscreen ? "Exit Fullscreen" : "Fullscreen"} onClick={toggleFullscreen}>{fullscreen ? <FiMinimize /> : <FiMaximize />}</Btn>
//           <Btn ready={ready} title="Tools" active={panel === "more" || panel === "props"} onClick={() => setPanel(p => p === "more" ? null : "more")}><FiMoreVertical /></Btn>
//         </div>

//         {/* ── Popovers ── */}
//         {panel === "search" && (
//           <div className="apv-pop apv-pop-left apv-find" style={popStyle("left")}>
//             <div className="apv-find-row">
//               <input ref={findInputRef} className="apv-find-input" placeholder="Find in document…" value={query}
//                 onChange={e => { setQuery(e.target.value); runFind("", false, { query: e.target.value }); }}
//                 onKeyDown={e => { if (e.key === "Enter") runFind("again", e.shiftKey); }} />
//               <button type="button" className="apv-btn" title="Previous match" onClick={() => runFind("again", true)}><FiChevronUp /></button>
//               <button type="button" className="apv-btn" title="Next match" onClick={() => runFind("again", false)}><FiChevronDown /></button>
//             </div>
//             <div className="apv-find-opts">
//               <label><input type="checkbox" checked={highlightAll} onChange={e => { setHighlightAll(e.target.checked); runFind("highlightallchange", false, { highlightAll: e.target.checked }); }} /> Highlight All</label>
//               <label><input type="checkbox" checked={matchCase} onChange={e => { setMatchCase(e.target.checked); runFind("casesensitivitychange", false, { matchCase: e.target.checked }); }} /> Match Case</label>
//               <label><input type="checkbox" checked={wholeWord} onChange={e => { setWholeWord(e.target.checked); runFind("entirewordchange", false, { wholeWord: e.target.checked }); }} /> Whole Words</label>
//             </div>
//             {query && <div className="apv-find-msg">{matches.total ? `${matches.current} of ${matches.total} matches` : findMsg || "Searching…"}{matches.total && findMsg ? ` · ${findMsg}` : ""}</div>}
//           </div>
//         )}

//         {panel === "text" && (
//           <div className="apv-pop apv-pop-right" style={popStyle("right")}>
//             <div className="apv-pop-title">Text</div>
//             <label className="apv-field">Color<input type="color" value={textColor} onChange={e => { setTextColor(e.target.value); editorParam(AnnotationEditorParamsType.FREETEXT_COLOR, e.target.value); }} /></label>
//             <label className="apv-field">Size <b>{textSize}</b><input type="range" min="5" max="100" value={textSize} onChange={e => { setTextSize(+e.target.value); editorParam(AnnotationEditorParamsType.FREETEXT_SIZE, +e.target.value); }} /></label>
//           </div>
//         )}
//         {panel === "draw" && (
//           <div className="apv-pop apv-pop-right" style={popStyle("right")}>
//             <div className="apv-pop-title">Draw</div>
//             <label className="apv-field">Color<input type="color" value={inkColor} onChange={e => { setInkColor(e.target.value); editorParam(AnnotationEditorParamsType.INK_COLOR, e.target.value); }} /></label>
//             <label className="apv-field">Thickness <b>{inkThick}</b><input type="range" min="1" max="20" value={inkThick} onChange={e => { setInkThick(+e.target.value); editorParam(AnnotationEditorParamsType.INK_THICKNESS, +e.target.value); }} /></label>
//             <label className="apv-field">Opacity <b>{inkOpacity}%</b><input type="range" min="1" max="100" value={inkOpacity} onChange={e => { setInkOpacity(+e.target.value); editorParam(AnnotationEditorParamsType.INK_OPACITY, +e.target.value / 100); }} /></label>
//           </div>
//         )}
//         {panel === "highlight" && (
//           <div className="apv-pop apv-pop-right" style={popStyle("right")}>
//             <div className="apv-pop-title">Highlight</div>
//             <div className="apv-swatches">
//               {HIGHLIGHT_COLORS.split(",").map(s => { const [name, hex] = s.split("="); return (
//                 <button key={name} type="button" className="apv-swatch" title={name} style={{ background: hex }}
//                   onClick={() => editorParam(AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR, hex)} />
//               ); })}
//             </div>
//             <label className="apv-check"><input type="checkbox" checked={hlShowAll} onChange={e => { setHlShowAll(e.target.checked); editorParam(AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL, e.target.checked); }} /> Show all</label>
//             <div className="apv-hint">Text select करा → highlight होईल</div>
//           </div>
//         )}
//         {panel === "more" && (
//           <div className="apv-pop apv-pop-right apv-menu" style={popStyle("right")}>
//             <button type="button" onClick={() => { goTo(1); setPanel(null); }}><FiChevronsUp /> Go to First Page</button>
//             <button type="button" onClick={() => { goTo(numPages); setPanel(null); }}><FiChevronsDown /> Go to Last Page</button>
//             <hr />
//             <button type="button" onClick={() => rotate(90)}><FiRotateCw /> Rotate Clockwise</button>
//             <button type="button" onClick={() => rotate(-90)}><FiRotateCcw /> Rotate Counterclockwise</button>
//             <hr />
//             <button type="button" className={!handTool ? "on" : ""} onClick={() => setHandTool(false)}><FiMousePointer /> Text Selection Tool {!handTool && <FiCheck className="apv-tick" />}</button>
//             <button type="button" className={handTool ? "on" : ""} onClick={() => setHandTool(true)}><FiMove /> Hand Tool {handTool && <FiCheck className="apv-tick" />}</button>
//             <hr />
//             {[["Page Scrolling", SCROLL.PAGE], ["Vertical Scrolling", SCROLL.VERTICAL], ["Horizontal Scrolling", SCROLL.HORIZONTAL], ["Wrapped Scrolling", SCROLL.WRAPPED]].map(([l, m]) => (
//               <button key={l} type="button" className={scrollMode === m ? "on" : ""} onClick={() => changeScroll(m)}>{l} {scrollMode === m && <FiCheck className="apv-tick" />}</button>
//             ))}
//             <hr />
//             {[["No Spreads", SPREAD.NONE], ["Odd Spreads", SPREAD.ODD], ["Even Spreads", SPREAD.EVEN]].map(([l, m]) => (
//               <button key={l} type="button" className={spreadMode === m ? "on" : ""} disabled={scrollMode === SCROLL.HORIZONTAL && m !== SPREAD.NONE} onClick={() => changeSpread(m)}>{l} {spreadMode === m && <FiCheck className="apv-tick" />}</button>
//             ))}
//             <hr />
//             <button type="button" onClick={openProps}><FiInfo /> Document Properties…</button>
//           </div>
//         )}
//         {panel === "props" && (
//           <div className="apv-pop apv-pop-right apv-props" style={popStyle("right")}>
//             <div className="apv-pop-title">Document Properties <button type="button" className="apv-btn" title="Close" onClick={() => setPanel(null)}><FiX /></button></div>
//             {(props || [["", "Loading…"]]).map(([k, val]) => <div key={k} className="apv-prop"><span>{k}</span><b>{val}</b></div>)}
//           </div>
//         )}
//       </div>

//       {/* ── Body: sidebar + pages ── */}
//       <div className="apv-body">
//         {sidebar && (
//           <aside className="apv-sidebar">
//             {Array.from({ length: numPages }, (_, i) => (
//               <button type="button" key={i} className={`apv-thumb ${page === i + 1 ? "active" : ""}`} onClick={() => goTo(i + 1)} title={`Page ${i + 1}`}>
//                 {thumbs[i] ? <img src={thumbs[i]} alt={`Page ${i + 1}`} /> : <span className="apv-thumb-ph" />}
//                 <span className="apv-thumb-no">{i + 1}</span>
//               </button>
//             ))}
//           </aside>
//         )}
//         <div className="apv-stage">
//           <div ref={containerRef} className={`apv-container ${handTool ? "apv-hand" : ""}`} onClick={() => panel && panel !== "search" && setPanel(null)}>
//             <div ref={viewerElRef} className="pdfViewer" />
//           </div>
//           {status === "loading" && (
//             <div className="apv-state"><div className="apv-spinner" /><p>Loading document… {progress ? `${progress}%` : ""}</p></div>
//           )}
//           {status === "error" && (
//             <div className="apv-state"><span className="apv-err-icon">📄</span><p>PDF preview लोड झाला नाही</p><small>वरील Download बटण वापरा</small></div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



// // ─────────────────────────────────────────────────────────────
// // AgendaPdfViewer — Agenda File Viewer मधला PDF viewer
// // Mozilla pdf.js (pdfjs-dist) वापरून PDF थेट page मध्ये render होतो.
// // Toolbar (search, pages, zoom, annotation, print, save, fullscreen, more)
// // आता बाहेरच्या VVCMC modal मध्ये आहे — आतला वेगळा iframe/toolbar नाही.
// // Install:  npm i pdfjs-dist@4.10.38
// // ─────────────────────────────────────────────────────────────
// import { useEffect, useRef, useState, useCallback } from "react";
// import * as pdfjsLib from "pdfjs-dist";
// import { AnnotationEditorType, AnnotationEditorParamsType } from "pdfjs-dist";
// import { EventBus, PDFLinkService, PDFFindController, PDFViewer } from "pdfjs-dist/web/pdf_viewer.mjs";
// import "pdfjs-dist/web/pdf_viewer.css";
// import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
// import {
//   FiSidebar, FiSearch, FiChevronUp, FiChevronDown, FiMinus, FiPlus, FiPrinter,
//   FiSave, FiMaximize, FiMinimize, FiMoreVertical, FiType, FiEdit3, FiImage,
//   FiX, FiRotateCw, FiRotateCcw, FiChevronsUp, FiChevronsDown, FiMousePointer,
//   FiMove, FiInfo, FiCheck,
// } from "react-icons/fi";
// import { BiHighlight } from "react-icons/bi";

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

// const APV_CSS = `
// .apv-root{display:flex;flex-direction:column;height:100%;min-height:0;font-family:'Nunito Sans',sans-serif;color:#174B58;}
// .apv-toolbar{position:relative;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 14px;
//   background:#E5F2F3;border-bottom:1px solid #DCEAEC;flex-shrink:0;flex-wrap:nowrap;overflow-x:auto;overflow-y:visible;scrollbar-width:none;}
// .apv-toolbar::-webkit-scrollbar{display:none;}
// .apv-group{display:flex;align-items:center;gap:4px;flex-shrink:0;}
// .apv-sep{width:1px;height:22px;background:#C9DFE2;margin:0 6px;flex-shrink:0;}
// .apv-btn{width:34px;height:34px;display:inline-flex;align-items:center;justify-content:center;border-radius:9px;border:1px solid transparent;
//   background:transparent;color:#174B58;cursor:pointer;font-size:17px;transition:background .15s,color .15s,border-color .15s;flex-shrink:0;padding:0;}
// .apv-btn:hover:not(:disabled){background:#FFFFFF;border-color:#DCEAEC;color:#078D9B;}
// .apv-btn.active{background:#FFFFFF;border-color:#078D9B;color:#078D9B;box-shadow:0 1px 4px rgba(7,141,155,.18);}
// .apv-btn:disabled{opacity:.38;cursor:not-allowed;}
// .apv-btn:focus-visible,.apv-select:focus-visible,.apv-page-input:focus{outline:none;box-shadow:0 0 0 3px rgba(7,141,155,.22);border-color:#078D9B;}
// .apv-page-input{width:46px;height:32px;text-align:center;border:1px solid #DCEAEC;border-radius:8px;background:#fff;color:#075568;
//   font:700 13.5px 'Nunito Sans',sans-serif;margin-left:4px;}
// .apv-of{font-size:13px;font-weight:700;color:#5f7f86;margin:0 4px 0 6px;white-space:nowrap;}
// .apv-select{height:34px;border:1px solid #DCEAEC;border-radius:9px;background:#fff;color:#075568;font:700 13px 'Nunito Sans',sans-serif;
//   padding:0 30px 0 12px;cursor:pointer;appearance:none;margin-left:4px;
//   background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23078D9B' stroke-width='3'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
//   background-repeat:no-repeat;background-position:right 10px center;}
// .apv-pop{position:fixed;z-index:3100;background:#fff;border:1px solid #DCEAEC;border-radius:14px;padding:12px;min-width:220px;
//   box-shadow:0 14px 40px rgba(7,85,104,.18);animation:apvPop .14s ease-out;}
// @keyframes apvPop{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
// .apv-pop-title{display:flex;align-items:center;justify-content:space-between;font-size:13px;font-weight:800;color:#075568;margin-bottom:10px;}
// .apv-find{width:340px;max-width:calc(100vw - 24px);}
// .apv-find-row{display:flex;gap:4px;align-items:center;}
// .apv-find-input{flex:1;height:36px;border:1px solid #DCEAEC;border-radius:9px;padding:0 12px;font:600 13.5px 'Nunito Sans',sans-serif;color:#174B58;background:#EFF7F7;outline:none;min-width:0;}
// .apv-find-input:focus{border-color:#078D9B;background:#fff;box-shadow:0 0 0 3px rgba(7,141,155,.15);}
// .apv-find-opts{display:flex;flex-wrap:wrap;gap:6px 14px;margin-top:10px;font-size:12.5px;font-weight:700;color:#174B58;}
// .apv-find-opts label,.apv-check{display:inline-flex;align-items:center;gap:6px;cursor:pointer;}
// .apv-find-opts input,.apv-check input{accent-color:#078D9B;}
// .apv-find-msg{margin-top:8px;font-size:12px;font-weight:700;color:#078D9B;}
// .apv-field{display:flex;flex-direction:column;gap:6px;font-size:12.5px;font-weight:700;color:#174B58;margin-bottom:10px;}
// .apv-field b{color:#078D9B;}
// .apv-field input[type=range]{accent-color:#078D9B;width:100%;}
// .apv-field input[type=color]{width:100%;height:30px;border:1px solid #DCEAEC;border-radius:8px;padding:2px;background:#fff;cursor:pointer;}
// .apv-swatches{display:flex;gap:8px;margin-bottom:10px;}
// .apv-swatch{width:26px;height:26px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #DCEAEC;cursor:pointer;}
// .apv-swatch:hover{box-shadow:0 0 0 2px #078D9B;}
// .apv-check{font-size:12.5px;font-weight:700;}
// .apv-hint{margin-top:8px;font-size:11.5px;color:#5f7f86;font-weight:600;}
// .apv-menu{padding:6px;min-width:250px;max-height:70vh;overflow:auto;}
// .apv-menu button{width:100%;display:flex;align-items:center;gap:10px;background:none;border:none;border-radius:8px;padding:8px 10px;
//   font:700 13px 'Nunito Sans',sans-serif;color:#174B58;cursor:pointer;text-align:left;}
// .apv-menu button:hover:not(:disabled){background:#E5F2F3;color:#075568;}
// .apv-menu button.on{color:#078D9B;}
// .apv-menu button:disabled{opacity:.4;cursor:not-allowed;}
// .apv-menu svg{font-size:15px;flex-shrink:0;}
// .apv-tick{margin-left:auto;}
// .apv-menu hr{border:none;border-top:1px solid #DCEAEC;margin:4px 6px;}
// .apv-props{width:320px;max-width:calc(100vw - 24px);}
// .apv-prop{display:flex;justify-content:space-between;gap:12px;padding:6px 0;border-bottom:1px solid #EFF7F7;font-size:12.5px;}
// .apv-prop span{color:#5f7f86;font-weight:700;white-space:nowrap;}
// .apv-prop b{color:#174B58;font-weight:700;text-align:right;word-break:break-word;}
// .apv-body{flex:1;display:flex;min-height:0;background:#EFF7F7;}
// .apv-sidebar{width:160px;flex-shrink:0;overflow-y:auto;background:#F6FBFB;border-right:1px solid #DCEAEC;padding:14px 10px;display:flex;flex-direction:column;align-items:center;gap:14px;}
// .apv-thumb{display:flex;flex-direction:column;align-items:center;gap:6px;background:none;border:none;cursor:pointer;padding:6px;border-radius:10px;}
// .apv-thumb img,.apv-thumb-ph{width:110px;border:1px solid #DCEAEC;border-radius:4px;background:#fff;box-shadow:0 2px 8px rgba(7,85,104,.08);}
// .apv-thumb-ph{height:150px;display:block;}
// .apv-thumb:hover{background:#E5F2F3;}
// .apv-thumb.active{background:#E5F2F3;}
// .apv-thumb.active img{border:2px solid #078D9B;}
// .apv-thumb-no{font-size:12px;font-weight:800;color:#5f7f86;}
// .apv-thumb.active .apv-thumb-no{color:#078D9B;}
// .apv-stage{flex:1;position:relative;min-width:0;}
// .apv-container{position:absolute;inset:0;overflow:auto;}
// .apv-container.apv-hand{cursor:grab;}
// .apv-container.apv-hand .textLayer{pointer-events:none;}
// .apv-container.apv-grabbing{cursor:grabbing;}
// .apv-container .pdfViewer{--page-margin:18px auto;--page-border:0 solid transparent;padding:2px 0 10px;}
// .apv-container .pdfViewer .page{box-shadow:0 0 0 1px #DCEAEC,0 4px 18px rgba(7,85,104,.10);}
// .apv-container .pdfViewer.scrollHorizontal .page,.apv-container .pdfViewer.scrollWrapped .page,.apv-container .pdfViewer .spread .page{margin:18px 9px;}
// .apv-state{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:#EFF7F7;text-align:center;padding:24px;}
// .apv-state p{margin:0;font-size:14.5px;font-weight:800;color:#075568;}
// .apv-state small{font-size:12.5px;color:#5f7f86;font-weight:600;}
// .apv-err-icon{font-size:40px;width:76px;height:76px;border-radius:18px;background:#E5F2F3;display:flex;align-items:center;justify-content:center;}
// .apv-spinner{width:38px;height:38px;border-radius:50%;border:3px solid #DCEAEC;border-top-color:#078D9B;animation:apvSpin .8s linear infinite;}
// @keyframes apvSpin{to{transform:rotate(360deg)}}
// :fullscreen.vm-box{border-radius:0;width:100vw!important;height:100vh!important;max-width:none!important;}
// @media (max-width:1024px){ .apv-sidebar{width:140px;} .apv-thumb img,.apv-thumb-ph{width:96px;} }
// @media (max-width:640px){
//   .apv-toolbar{padding:6px 8px;gap:6px;justify-content:flex-start;}
//   .apv-btn{width:32px;height:32px;font-size:16px;}
//   .apv-select{height:32px;font-size:12px;padding:0 26px 0 8px;}
//   .apv-sidebar{position:absolute;z-index:5;top:0;bottom:0;left:0;box-shadow:6px 0 18px rgba(7,85,104,.12);}
//   .apv-body{position:relative;}
//   .apv-container .pdfViewer{--page-margin:10px auto;}
// }
// `;

// const ZOOM_OPTIONS = [
//   { value: "auto", label: "Automatic Zoom" },
//   { value: "page-actual", label: "Actual Size" },
//   { value: "page-fit", label: "Page Fit" },
//   { value: "page-width", label: "Page Width" },
//   { value: "0.5", label: "50%" },
//   { value: "0.75", label: "75%" },
//   { value: "1", label: "100%" },
//   { value: "1.25", label: "125%" },
//   { value: "1.5", label: "150%" },
//   { value: "2", label: "200%" },
//   { value: "3", label: "300%" },
//   { value: "4", label: "400%" },
// ];
// const MIN_SCALE = 0.1, MAX_SCALE = 10;
// const HIGHLIGHT_COLORS = "yellow=#FFFF98,green=#53FFBC,blue=#80EBFF,pink=#FFCBE6,red=#FF4F5F";
// const SCROLL = { VERTICAL: 0, HORIZONTAL: 1, WRAPPED: 2, PAGE: 3 };
// const SPREAD = { NONE: 0, ODD: 1, EVEN: 2 };

// // Toolbar button (component बाहेर — re-render वर remount होत नाही)
// function Btn({ title, onClick, active, disabled, children, ready, className = "" }) {
//   return (
//     <button type="button" className={`apv-btn ${active ? "active" : ""} ${className}`} title={title} aria-label={title}
//       aria-pressed={active || undefined} onClick={onClick} disabled={disabled || !ready}>{children}</button>
//   );
// }

// export default function AgendaPdfViewer({ url, fileName = "document.pdf" }) {
//   const rootRef      = useRef(null);
//   const containerRef = useRef(null);
//   const viewerElRef  = useRef(null);
//   const viewerRef    = useRef(null);
//   const eventBusRef  = useRef(null);
//   const docRef       = useRef(null);
//   const findInputRef = useRef(null);
//   const pendingStamp = useRef(false);
//   const toolbarRef   = useRef(null);
//   const thumbsRotRef = useRef(null);
//   const [tbRect, setTbRect] = useState(null);

//   const [status, setStatus]         = useState("loading"); // loading | ready | error
//   const [progress, setProgress]     = useState(0);
//   const [numPages, setNumPages]     = useState(0);
//   const [page, setPage]             = useState(1);
//   const [pageInput, setPageInput]   = useState("1");
//   const [scaleValue, setScaleValue] = useState("auto");
//   const [scalePct, setScalePct]     = useState(100);
//   const [editorMode, setEditorMode] = useState(AnnotationEditorType.NONE);
//   const [panel, setPanel]           = useState(null);   // search | text | draw | highlight | more | props
//   const [sidebar, setSidebar]       = useState(false);
//   const [thumbs, setThumbs]         = useState([]);
//   const [fullscreen, setFullscreen] = useState(false);
//   const [rotation, setRotation]     = useState(0);
//   const [scrollMode, setScrollMode] = useState(SCROLL.VERTICAL);
//   const [spreadMode, setSpreadMode] = useState(SPREAD.NONE);
//   const [handTool, setHandTool]     = useState(false);
//   const [props, setProps]           = useState(null);

//   // find
//   const [query, setQuery]               = useState("");
//   const [highlightAll, setHighlightAll] = useState(true);
//   const [matchCase, setMatchCase]       = useState(false);
//   const [wholeWord, setWholeWord]       = useState(false);
//   const [matches, setMatches]           = useState({ current: 0, total: 0 });
//   const [findMsg, setFindMsg]           = useState("");

//   // editor params
//   const [textColor, setTextColor] = useState("#000000");
//   const [textSize, setTextSize]   = useState(10);
//   const [inkColor, setInkColor]   = useState("#000000");
//   const [inkThick, setInkThick]   = useState(1);
//   const [inkOpacity, setInkOpacity] = useState(100);
//   const [hlShowAll, setHlShowAll] = useState(true);

//   // ── Load document ──
//   useEffect(() => {
//     if (!url || !containerRef.current) return;
//     let cancelled = false;
//     setStatus("loading"); setProgress(0); setThumbs([]); setPanel(null);

//     const eventBus = new EventBus();
//     const linkService = new PDFLinkService({ eventBus, externalLinkTarget: 2 /* BLANK */ });
//     const findController = new PDFFindController({ eventBus, linkService });
//     const viewer = new PDFViewer({
//       container: containerRef.current,
//       viewer: viewerElRef.current,
//       eventBus, linkService, findController,
//       annotationEditorMode: AnnotationEditorType.NONE,
//       annotationEditorHighlightColors: HIGHLIGHT_COLORS,
//       enableHighlightFloatingButton: false,
//     });
//     linkService.setViewer(viewer);
//     viewerRef.current = viewer;
//     eventBusRef.current = eventBus;

//     eventBus.on("pagesinit", () => { viewer.currentScaleValue = "auto"; });
//     eventBus.on("pagechanging", e => { setPage(e.pageNumber); setPageInput(String(e.pageNumber)); });
//     eventBus.on("scalechanging", e => {
//       setScalePct(Math.round(e.scale * 100));
//       setScaleValue(e.presetValue || String(e.scale));
//     });
//     eventBus.on("rotationchanging", e => setRotation(e.pagesRotation));
//     eventBus.on("annotationeditormodechanged", e => {
//       setEditorMode(e.mode);
//       if (e.mode === AnnotationEditorType.STAMP && pendingStamp.current) {
//         pendingStamp.current = false;
//         eventBus.dispatch("switchannotationeditorparams", { source: null, type: AnnotationEditorParamsType.CREATE });
//       }
//     });
//     // pdf.js स्वतः mode बदलायला सांगतो (उदा. annotation वर double-click)
//     eventBus.on("switchannotationeditormode", e => {
//       try { viewer.annotationEditorMode = { mode: e.mode, editId: e.editId ?? null }; } catch {}
//     });
//     eventBus.on("updatefindmatchescount", e => setMatches(e.matchesCount || { current: 0, total: 0 }));
//     eventBus.on("updatefindcontrolstate", e => {
//       if (e.matchesCount) setMatches(e.matchesCount);
//       setFindMsg(e.state === 1 ? "Not found" : e.state === 2 ? (e.previous ? "Reached top, continued from bottom" : "Reached end, continued from top") : "");
//     });

//     const task = pdfjsLib.getDocument({ url });
//     task.onProgress = ({ loaded, total }) => total && setProgress(Math.min(100, Math.round((loaded / total) * 100)));
//     task.onPassword = (updatePassword, reason) => {
//       const pwd = window.prompt(reason === 2 ? "Incorrect password. Enter PDF password:" : "This PDF is password protected. Enter password:");
//       if (pwd === null) { task.destroy(); setStatus("error"); } else updatePassword(pwd);
//     };
//     task.promise.then(doc => {
//       if (cancelled) return;
//       docRef.current = doc;
//       viewer.setDocument(doc);
//       linkService.setDocument(doc, null);
//       setNumPages(doc.numPages);
//       setStatus("ready");
//     }).catch(() => { if (!cancelled) setStatus("error"); });

//     return () => {
//       cancelled = true;
//       try { viewer.setDocument(null); } catch {}
//       try { linkService.setDocument(null); } catch {}
//       task.destroy();
//       docRef.current = null;
//       viewerRef.current = null;
//     };
//   }, [url]);

//   // ── Popover position (toolbar च्या खाली) ──
//   useEffect(() => {
//     if (!panel) return;
//     const upd = () => toolbarRef.current && setTbRect(toolbarRef.current.getBoundingClientRect());
//     upd();
//     window.addEventListener("resize", upd);
//     return () => window.removeEventListener("resize", upd);
//   }, [panel, fullscreen]);
//   const popStyle = side => {
//     if (!tbRect) return { visibility: "hidden" };
//     const top = tbRect.bottom + 6;
//     return side === "left"
//       ? { top, left: Math.max(8, tbRect.left + 10) }
//       : { top, right: Math.max(8, window.innerWidth - tbRect.right + 10) };
//   };

//   // ── Fullscreen sync ──
//   useEffect(() => {
//     const onFs = () => setFullscreen(!!document.fullscreenElement);
//     document.addEventListener("fullscreenchange", onFs);
//     return () => document.removeEventListener("fullscreenchange", onFs);
//   }, []);

//   // ── Thumbnails (sidebar उघडल्यावरच) ──
//   useEffect(() => {
//     const doc = docRef.current;
//     if (!sidebar || !doc) return;
//     if (thumbs.length && thumbsRotRef.current === rotation) return;
//     thumbsRotRef.current = rotation;
//     let stop = false;
//     (async () => {
//       const out = [];
//       for (let i = 1; i <= doc.numPages && !stop; i++) {
//         try {
//           const p = await doc.getPage(i);
//           const vp0 = p.getViewport({ scale: 1, rotation });
//           const vp = p.getViewport({ scale: 110 / vp0.width, rotation });
//           const c = document.createElement("canvas");
//           c.width = vp.width; c.height = vp.height;
//           await p.render({ canvasContext: c.getContext("2d"), viewport: vp }).promise;
//           out.push(c.toDataURL());
//           if (!stop) setThumbs([...out]);
//         } catch { out.push(null); }
//       }
//     })();
//     return () => { stop = true; };
//   }, [sidebar, status, rotation]); // eslint-disable-line

//   // ── Hand tool (drag to scroll) ──
//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el || !handTool) return;
//     let sx, sy, sl, st, down = false;
//     const md = e => { if (e.button !== 0) return; down = true; sx = e.clientX; sy = e.clientY; sl = el.scrollLeft; st = el.scrollTop; el.classList.add("apv-grabbing"); e.preventDefault(); };
//     const mm = e => { if (!down) return; el.scrollLeft = sl - (e.clientX - sx); el.scrollTop = st - (e.clientY - sy); };
//     const mu = () => { down = false; el.classList.remove("apv-grabbing"); };
//     el.addEventListener("mousedown", md); window.addEventListener("mousemove", mm); window.addEventListener("mouseup", mu);
//     return () => { el.removeEventListener("mousedown", md); window.removeEventListener("mousemove", mm); window.removeEventListener("mouseup", mu); };
//   }, [handTool]);

//   // ── Helpers ──
//   const v = () => viewerRef.current;
//   const ready = status === "ready";

//   const goTo = n => { if (!v()) return; const p = Math.max(1, Math.min(numPages, n)); v().currentPageNumber = p; };
//   const commitPageInput = () => { const n = parseInt(pageInput, 10); if (Number.isFinite(n)) goTo(n); else setPageInput(String(page)); };

//   const zoomBy = dir => {
//     if (!v()) return;
//     const cur = v().currentScale;
//     const next = dir > 0 ? Math.min(MAX_SCALE, Math.round(cur * 1.1 * 100) / 100) : Math.max(MIN_SCALE, Math.round((cur / 1.1) * 100) / 100);
//     v().currentScaleValue = String(next);
//   };
//   const setZoom = val => { if (v()) v().currentScaleValue = val; };
//   const zoomSelectValue = ZOOM_OPTIONS.some(o => o.value === scaleValue) ? scaleValue : "custom";

//   const runFind = useCallback((type = "", findPrevious = false, overrides = {}) => {
//     eventBusRef.current?.dispatch("find", {
//       source: null, type, query: overrides.query ?? query,
//       caseSensitive: overrides.matchCase ?? matchCase, entireWord: overrides.wholeWord ?? wholeWord,
//       highlightAll: overrides.highlightAll ?? highlightAll, findPrevious, matchDiacritics: false,
//     });
//   }, [query, matchCase, wholeWord, highlightAll]);

//   const setMode = mode => {
//     if (!v()) return;
//     const next = editorMode === mode ? AnnotationEditorType.NONE : mode;
//     try { v().annotationEditorMode = { mode: next }; } catch {}
//     const map = { [AnnotationEditorType.FREETEXT]: "text", [AnnotationEditorType.INK]: "draw", [AnnotationEditorType.HIGHLIGHT]: "highlight" };
//     setPanel(next === AnnotationEditorType.NONE ? null : map[next] || null);
//   };
//   const addImage = () => {
//     if (!v()) return;
//     if (editorMode === AnnotationEditorType.STAMP) {
//       eventBusRef.current.dispatch("switchannotationeditorparams", { source: null, type: AnnotationEditorParamsType.CREATE });
//     } else {
//       pendingStamp.current = true;
//       try { v().annotationEditorMode = { mode: AnnotationEditorType.STAMP }; } catch { pendingStamp.current = false; }
//     }
//     setPanel(null);
//   };
//   const editorParam = (type, value) => eventBusRef.current?.dispatch("switchannotationeditorparams", { source: null, type, value });

//   const getBytes = async () => {
//     const doc = docRef.current;
//     if (!doc) return null;
//     try { return doc.annotationStorage.size > 0 ? await doc.saveDocument() : await doc.getData(); }
//     catch { return await doc.getData(); }
//   };
//   const handleSave = async () => {
//     const bytes = await getBytes(); if (!bytes) return;
//     const blobUrl = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
//     const a = document.createElement("a"); a.href = blobUrl; a.download = fileName; document.body.appendChild(a); a.click(); a.remove();
//     setTimeout(() => URL.revokeObjectURL(blobUrl), 30000);
//   };
//   const handlePrint = async () => {
//     const bytes = await getBytes(); if (!bytes) return;
//     const blobUrl = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
//     const frame = document.createElement("iframe");
//     frame.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0;";
//     frame.src = blobUrl;
//     frame.onload = () => { try { frame.contentWindow.focus(); frame.contentWindow.print(); } catch { window.open(blobUrl, "_blank"); } };
//     document.body.appendChild(frame);
//     setTimeout(() => { frame.remove(); URL.revokeObjectURL(blobUrl); }, 60000);
//   };
//   const toggleFullscreen = () => {
//     const box = rootRef.current?.closest(".vm-box") || rootRef.current;
//     if (document.fullscreenElement) document.exitFullscreen?.();
//     else box?.requestFullscreen?.();
//   };
//   const rotate = d => { if (v()) v().pagesRotation = (rotation + d + 360) % 360; };
//   const changeScroll = m => { if (v()) { v().scrollMode = m; setScrollMode(m); if (m === SCROLL.HORIZONTAL && spreadMode !== SPREAD.NONE) setSpreadMode(SPREAD.NONE); } };
//   const changeSpread = m => { if (v()) { v().spreadMode = m; setSpreadMode(m); } };
//   const openProps = async () => {
//     setPanel("props");
//     const doc = docRef.current; if (!doc) return;
//     try {
//       const { info } = await doc.getMetadata();
//       const { length } = await doc.getDownloadInfo();
//       const fmt = d => { const m = d && /D:(\d{4})(\d{2})(\d{2})(\d{2})?(\d{2})?/.exec(d); return m ? `${m[3]}/${m[2]}/${m[1]}${m[4] ? ` ${m[4]}:${m[5] || "00"}` : ""}` : "-"; };
//       setProps([
//         ["File name", fileName], ["File size", length ? `${(length / 1024).toFixed(0)} KB` : "-"],
//         ["Title", info?.Title || "-"], ["Author", info?.Author || "-"], ["Subject", info?.Subject || "-"],
//         ["Creator", info?.Creator || "-"], ["PDF Producer", info?.Producer || "-"],
//         ["Created", fmt(info?.CreationDate)], ["Modified", fmt(info?.ModDate)],
//         ["PDF Version", info?.PDFFormatVersion || "-"], ["Pages", String(doc.numPages)],
//       ]);
//     } catch { setProps([["File name", fileName], ["Pages", String(doc.numPages)]]); }
//   };

//   // Ctrl+F → आपला search (viewer उघडा असताना)
//   useEffect(() => {
//     const onKey = e => {
//       if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "f") {
//         e.preventDefault(); setPanel("search"); setTimeout(() => findInputRef.current?.select(), 0);
//       } else if (e.key === "Escape" && panel) { e.stopPropagation(); setPanel(null); }
//     };
//     window.addEventListener("keydown", onKey, true);
//     return () => window.removeEventListener("keydown", onKey, true);
//   }, [panel]);


//   return (
//     <div className="apv-root" ref={rootRef}>
//       <style>{APV_CSS}</style>
//       {/* ── Toolbar (बाहेरच्या frame मध्ये) ── */}
//       <div className="apv-toolbar" ref={toolbarRef} role="toolbar" aria-label="PDF tools">
//         <div className="apv-group">
//           <Btn ready={ready} title="Toggle Sidebar" active={sidebar} onClick={() => setSidebar(s => !s)}><FiSidebar /></Btn>
//           <Btn ready={ready} title="Find in Document" active={panel === "search"} onClick={() => { setPanel(p => p === "search" ? null : "search"); setTimeout(() => findInputRef.current?.focus(), 0); }}><FiSearch /></Btn>
//           <span className="apv-sep" />
//           <Btn ready={ready} title="Previous Page" disabled={page <= 1} onClick={() => goTo(page - 1)}><FiChevronUp /></Btn>
//           <Btn ready={ready} title="Next Page" disabled={page >= numPages} onClick={() => goTo(page + 1)}><FiChevronDown /></Btn>
//           <input className="apv-page-input" aria-label="Page" value={pageInput} disabled={!ready}
//             onChange={e => setPageInput(e.target.value.replace(/\D/g, ""))}
//             onBlur={commitPageInput} onKeyDown={e => e.key === "Enter" && commitPageInput()} />
//           <span className="apv-of">of {numPages || "–"}</span>
//         </div>

//         <div className="apv-group apv-zoom">
//           <Btn ready={ready} title="Zoom Out" onClick={() => zoomBy(-1)}><FiMinus /></Btn>
//           <Btn ready={ready} title="Zoom In" onClick={() => zoomBy(1)}><FiPlus /></Btn>
//           <select className="apv-select" aria-label="Zoom" value={zoomSelectValue} disabled={!ready} onChange={e => setZoom(e.target.value)}>
//             {ZOOM_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
//             {zoomSelectValue === "custom" && <option value="custom" disabled>{scalePct}%</option>}
//           </select>
//         </div>

//         <div className="apv-group">
//           <Btn ready={ready} title="Highlight" active={editorMode === AnnotationEditorType.HIGHLIGHT} onClick={() => setMode(AnnotationEditorType.HIGHLIGHT)}><BiHighlight /></Btn>
//           <Btn ready={ready} title="Text" active={editorMode === AnnotationEditorType.FREETEXT} onClick={() => setMode(AnnotationEditorType.FREETEXT)}><FiType /></Btn>
//           <Btn ready={ready} title="Draw" active={editorMode === AnnotationEditorType.INK} onClick={() => setMode(AnnotationEditorType.INK)}><FiEdit3 /></Btn>
//           <Btn ready={ready} title="Add or edit images" active={editorMode === AnnotationEditorType.STAMP} onClick={addImage}><FiImage /></Btn>
//           <span className="apv-sep" />
//           <Btn ready={ready} title="Print" onClick={handlePrint}><FiPrinter /></Btn>
//           <Btn ready={ready} title="Save (with annotations)" onClick={handleSave}><FiSave /></Btn>
//           <Btn ready={ready} title={fullscreen ? "Exit Fullscreen" : "Fullscreen"} onClick={toggleFullscreen}>{fullscreen ? <FiMinimize /> : <FiMaximize />}</Btn>
//           <Btn ready={ready} title="Tools" active={panel === "more" || panel === "props"} onClick={() => setPanel(p => p === "more" ? null : "more")}><FiMoreVertical /></Btn>
//         </div>

//         {/* ── Popovers ── */}
//         {panel === "search" && (
//           <div className="apv-pop apv-pop-left apv-find" style={popStyle("left")}>
//             <div className="apv-find-row">
//               <input ref={findInputRef} className="apv-find-input" placeholder="Find in document…" value={query}
//                 onChange={e => { setQuery(e.target.value); runFind("", false, { query: e.target.value }); }}
//                 onKeyDown={e => { if (e.key === "Enter") runFind("again", e.shiftKey); }} />
//               <button type="button" className="apv-btn" title="Previous match" onClick={() => runFind("again", true)}><FiChevronUp /></button>
//               <button type="button" className="apv-btn" title="Next match" onClick={() => runFind("again", false)}><FiChevronDown /></button>
//             </div>
//             <div className="apv-find-opts">
//               <label><input type="checkbox" checked={highlightAll} onChange={e => { setHighlightAll(e.target.checked); runFind("highlightallchange", false, { highlightAll: e.target.checked }); }} /> Highlight All</label>
//               <label><input type="checkbox" checked={matchCase} onChange={e => { setMatchCase(e.target.checked); runFind("casesensitivitychange", false, { matchCase: e.target.checked }); }} /> Match Case</label>
//               <label><input type="checkbox" checked={wholeWord} onChange={e => { setWholeWord(e.target.checked); runFind("entirewordchange", false, { wholeWord: e.target.checked }); }} /> Whole Words</label>
//             </div>
//             {query && <div className="apv-find-msg">{matches.total ? `${matches.current} of ${matches.total} matches` : findMsg || "Searching…"}{matches.total && findMsg ? ` · ${findMsg}` : ""}</div>}
//           </div>
//         )}

//         {panel === "text" && (
//           <div className="apv-pop apv-pop-right" style={popStyle("right")}>
//             <div className="apv-pop-title">Text</div>
//             <label className="apv-field">Color<input type="color" value={textColor} onChange={e => { setTextColor(e.target.value); editorParam(AnnotationEditorParamsType.FREETEXT_COLOR, e.target.value); }} /></label>
//             <label className="apv-field">Size <b>{textSize}</b><input type="range" min="5" max="100" value={textSize} onChange={e => { setTextSize(+e.target.value); editorParam(AnnotationEditorParamsType.FREETEXT_SIZE, +e.target.value); }} /></label>
//           </div>
//         )}
//         {panel === "draw" && (
//           <div className="apv-pop apv-pop-right" style={popStyle("right")}>
//             <div className="apv-pop-title">Draw</div>
//             <label className="apv-field">Color<input type="color" value={inkColor} onChange={e => { setInkColor(e.target.value); editorParam(AnnotationEditorParamsType.INK_COLOR, e.target.value); }} /></label>
//             <label className="apv-field">Thickness <b>{inkThick}</b><input type="range" min="1" max="20" value={inkThick} onChange={e => { setInkThick(+e.target.value); editorParam(AnnotationEditorParamsType.INK_THICKNESS, +e.target.value); }} /></label>
//             <label className="apv-field">Opacity <b>{inkOpacity}%</b><input type="range" min="1" max="100" value={inkOpacity} onChange={e => { setInkOpacity(+e.target.value); editorParam(AnnotationEditorParamsType.INK_OPACITY, +e.target.value / 100); }} /></label>
//           </div>
//         )}
//         {panel === "highlight" && (
//           <div className="apv-pop apv-pop-right" style={popStyle("right")}>
//             <div className="apv-pop-title">Highlight</div>
//             <div className="apv-swatches">
//               {HIGHLIGHT_COLORS.split(",").map(s => { const [name, hex] = s.split("="); return (
//                 <button key={name} type="button" className="apv-swatch" title={name} style={{ background: hex }}
//                   onClick={() => editorParam(AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR, hex)} />
//               ); })}
//             </div>
//             <label className="apv-check"><input type="checkbox" checked={hlShowAll} onChange={e => { setHlShowAll(e.target.checked); editorParam(AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL, e.target.checked); }} /> Show all</label>
//             <div className="apv-hint">Text select करा → highlight होईल</div>
//           </div>
//         )}
//         {panel === "more" && (
//           <div className="apv-pop apv-pop-right apv-menu" style={popStyle("right")}>
//             <button type="button" onClick={() => { goTo(1); setPanel(null); }}><FiChevronsUp /> Go to First Page</button>
//             <button type="button" onClick={() => { goTo(numPages); setPanel(null); }}><FiChevronsDown /> Go to Last Page</button>
//             <hr />
//             <button type="button" onClick={() => rotate(90)}><FiRotateCw /> Rotate Clockwise</button>
//             <button type="button" onClick={() => rotate(-90)}><FiRotateCcw /> Rotate Counterclockwise</button>
//             <hr />
//             <button type="button" className={!handTool ? "on" : ""} onClick={() => setHandTool(false)}><FiMousePointer /> Text Selection Tool {!handTool && <FiCheck className="apv-tick" />}</button>
//             <button type="button" className={handTool ? "on" : ""} onClick={() => setHandTool(true)}><FiMove /> Hand Tool {handTool && <FiCheck className="apv-tick" />}</button>
//             <hr />
//             {[["Page Scrolling", SCROLL.PAGE], ["Vertical Scrolling", SCROLL.VERTICAL], ["Horizontal Scrolling", SCROLL.HORIZONTAL], ["Wrapped Scrolling", SCROLL.WRAPPED]].map(([l, m]) => (
//               <button key={l} type="button" className={scrollMode === m ? "on" : ""} onClick={() => changeScroll(m)}>{l} {scrollMode === m && <FiCheck className="apv-tick" />}</button>
//             ))}
//             <hr />
//             {[["No Spreads", SPREAD.NONE], ["Odd Spreads", SPREAD.ODD], ["Even Spreads", SPREAD.EVEN]].map(([l, m]) => (
//               <button key={l} type="button" className={spreadMode === m ? "on" : ""} disabled={scrollMode === SCROLL.HORIZONTAL && m !== SPREAD.NONE} onClick={() => changeSpread(m)}>{l} {spreadMode === m && <FiCheck className="apv-tick" />}</button>
//             ))}
//             <hr />
//             <button type="button" onClick={openProps}><FiInfo /> Document Properties…</button>
//           </div>
//         )}
//         {panel === "props" && (
//           <div className="apv-pop apv-pop-right apv-props" style={popStyle("right")}>
//             <div className="apv-pop-title">Document Properties <button type="button" className="apv-btn" title="Close" onClick={() => setPanel(null)}><FiX /></button></div>
//             {(props || [["", "Loading…"]]).map(([k, val]) => <div key={k} className="apv-prop"><span>{k}</span><b>{val}</b></div>)}
//           </div>
//         )}
//       </div>

//       {/* ── Body: sidebar + pages ── */}
//       <div className="apv-body">
//         {sidebar && (
//           <aside className="apv-sidebar">
//             {Array.from({ length: numPages }, (_, i) => (
//               <button type="button" key={i} className={`apv-thumb ${page === i + 1 ? "active" : ""}`} onClick={() => goTo(i + 1)} title={`Page ${i + 1}`}>
//                 {thumbs[i] ? <img src={thumbs[i]} alt={`Page ${i + 1}`} /> : <span className="apv-thumb-ph" />}
//                 <span className="apv-thumb-no">{i + 1}</span>
//               </button>
//             ))}
//           </aside>
//         )}
//         <div className="apv-stage">
//           <div ref={containerRef} className={`apv-container ${handTool ? "apv-hand" : ""}`} onClick={() => panel && panel !== "search" && setPanel(null)}>
//             <div ref={viewerElRef} className="pdfViewer" />
//           </div>
//           {status === "loading" && (
//             <div className="apv-state"><div className="apv-spinner" /><p>Loading document… {progress ? `${progress}%` : ""}</p></div>
//           )}
//           {status === "error" && (
//             <div className="apv-state"><span className="apv-err-icon">📄</span><p>PDF preview लोड झाला नाही</p><small>वरील Download बटण वापरा</small></div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




// ─────────────────────────────────────────────────────────────
// AgendaPdfViewer — Agenda File Viewer मधला PDF viewer
// Mozilla pdf.js (pdfjs-dist) वापरून PDF थेट page मध्ये render होतो.
// Toolbar (search, pages, zoom, annotation, print, save, fullscreen, more)
// आता बाहेरच्या VVCMC modal मध्ये आहे — आतला वेगळा iframe/toolbar नाही.
// Install:  npm i pdfjs-dist@4.10.38
// ─────────────────────────────────────────────────────────────
import { useEffect, useRef, useState, useCallback } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { AnnotationEditorType, AnnotationEditorParamsType } from "pdfjs-dist";
import { EventBus, PDFLinkService, PDFFindController, PDFViewer } from "pdfjs-dist/web/pdf_viewer.mjs";
import "pdfjs-dist/web/pdf_viewer.css";
import {
  FiSidebar, FiSearch, FiChevronUp, FiChevronDown, FiMinus, FiPlus, FiPrinter,
  FiSave, FiMaximize, FiMinimize, FiMoreVertical, FiType, FiEdit3, FiImage,
  FiX, FiRotateCw, FiRotateCcw, FiChevronsUp, FiChevronsDown, FiMousePointer,
  FiMove, FiInfo, FiCheck,
} from "react-icons/fi";
import { BiHighlight } from "react-icons/bi";

// ✅ LIVE FIX: worker आता ".mjs" ऐवजी ".js" file म्हणून build होतो.
//    Live server (nginx) .mjs ला चुकीचा MIME type देतो → worker load होत नव्हता
//    → "PDF preview लोड झाला नाही". हा pattern कोणत्याही server वर चालतो.
function ensurePdfWorker() {
  if (pdfjsLib.GlobalWorkerOptions.workerPort) return;
  try {
    pdfjsLib.GlobalWorkerOptions.workerPort = new Worker(
      new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url),
      { type: "module" }
    );
  } catch (e) {
    console.error("[AgendaPdfViewer] PDF worker start झाला नाही:", e);
  }
}

const APV_CSS = `
.apv-root{display:flex;flex-direction:column;height:100%;min-height:0;font-family:'Nunito Sans',sans-serif;color:#174B58;}
.apv-toolbar{position:relative;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 14px;
  background:#E5F2F3;border-bottom:1px solid #DCEAEC;flex-shrink:0;flex-wrap:nowrap;overflow-x:auto;overflow-y:visible;scrollbar-width:none;}
.apv-toolbar::-webkit-scrollbar{display:none;}
.apv-group{display:flex;align-items:center;gap:4px;flex-shrink:0;}
.apv-sep{width:1px;height:22px;background:#C9DFE2;margin:0 6px;flex-shrink:0;}
.apv-btn{width:34px;height:34px;display:inline-flex;align-items:center;justify-content:center;border-radius:9px;border:1px solid transparent;
  background:transparent;color:#174B58;cursor:pointer;font-size:17px;transition:background .15s,color .15s,border-color .15s;flex-shrink:0;padding:0;}
.apv-btn:hover:not(:disabled){background:#FFFFFF;border-color:#DCEAEC;color:#078D9B;}
.apv-btn.active{background:#FFFFFF;border-color:#078D9B;color:#078D9B;box-shadow:0 1px 4px rgba(7,141,155,.18);}
.apv-btn:disabled{opacity:.38;cursor:not-allowed;}
.apv-btn:focus-visible,.apv-select:focus-visible,.apv-page-input:focus{outline:none;box-shadow:0 0 0 3px rgba(7,141,155,.22);border-color:#078D9B;}
.apv-page-input{width:46px;height:32px;text-align:center;border:1px solid #DCEAEC;border-radius:8px;background:#fff;color:#075568;
  font:700 13.5px 'Nunito Sans',sans-serif;margin-left:4px;}
.apv-of{font-size:13px;font-weight:700;color:#5f7f86;margin:0 4px 0 6px;white-space:nowrap;}
.apv-select{height:34px;border:1px solid #DCEAEC;border-radius:9px;background:#fff;color:#075568;font:700 13px 'Nunito Sans',sans-serif;
  padding:0 30px 0 12px;cursor:pointer;appearance:none;margin-left:4px;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23078D9B' stroke-width='3'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat:no-repeat;background-position:right 10px center;}
.apv-pop{position:fixed;z-index:3100;background:#fff;border:1px solid #DCEAEC;border-radius:14px;padding:12px;min-width:220px;
  box-shadow:0 14px 40px rgba(7,85,104,.18);animation:apvPop .14s ease-out;}
@keyframes apvPop{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
.apv-pop-title{display:flex;align-items:center;justify-content:space-between;font-size:13px;font-weight:800;color:#075568;margin-bottom:10px;}
.apv-find{width:340px;max-width:calc(100vw - 24px);}
.apv-find-row{display:flex;gap:4px;align-items:center;}
.apv-find-input{flex:1;height:36px;border:1px solid #DCEAEC;border-radius:9px;padding:0 12px;font:600 13.5px 'Nunito Sans',sans-serif;color:#174B58;background:#EFF7F7;outline:none;min-width:0;}
.apv-find-input:focus{border-color:#078D9B;background:#fff;box-shadow:0 0 0 3px rgba(7,141,155,.15);}
.apv-find-opts{display:flex;flex-wrap:wrap;gap:6px 14px;margin-top:10px;font-size:12.5px;font-weight:700;color:#174B58;}
.apv-find-opts label,.apv-check{display:inline-flex;align-items:center;gap:6px;cursor:pointer;}
.apv-find-opts input,.apv-check input{accent-color:#078D9B;}
.apv-find-msg{margin-top:8px;font-size:12px;font-weight:700;color:#078D9B;}
.apv-field{display:flex;flex-direction:column;gap:6px;font-size:12.5px;font-weight:700;color:#174B58;margin-bottom:10px;}
.apv-field b{color:#078D9B;}
.apv-field input[type=range]{accent-color:#078D9B;width:100%;}
.apv-field input[type=color]{width:100%;height:30px;border:1px solid #DCEAEC;border-radius:8px;padding:2px;background:#fff;cursor:pointer;}
.apv-swatches{display:flex;gap:8px;margin-bottom:10px;}
.apv-swatch{width:26px;height:26px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #DCEAEC;cursor:pointer;}
.apv-swatch:hover{box-shadow:0 0 0 2px #078D9B;}
.apv-check{font-size:12.5px;font-weight:700;}
.apv-hint{margin-top:8px;font-size:11.5px;color:#5f7f86;font-weight:600;}
.apv-menu{padding:6px;min-width:250px;max-height:70vh;overflow:auto;}
.apv-menu button{width:100%;display:flex;align-items:center;gap:10px;background:none;border:none;border-radius:8px;padding:8px 10px;
  font:700 13px 'Nunito Sans',sans-serif;color:#174B58;cursor:pointer;text-align:left;}
.apv-menu button:hover:not(:disabled){background:#E5F2F3;color:#075568;}
.apv-menu button.on{color:#078D9B;}
.apv-menu button:disabled{opacity:.4;cursor:not-allowed;}
.apv-menu svg{font-size:15px;flex-shrink:0;}
.apv-tick{margin-left:auto;}
.apv-menu hr{border:none;border-top:1px solid #DCEAEC;margin:4px 6px;}
.apv-props{width:320px;max-width:calc(100vw - 24px);}
.apv-prop{display:flex;justify-content:space-between;gap:12px;padding:6px 0;border-bottom:1px solid #EFF7F7;font-size:12.5px;}
.apv-prop span{color:#5f7f86;font-weight:700;white-space:nowrap;}
.apv-prop b{color:#174B58;font-weight:700;text-align:right;word-break:break-word;}
.apv-body{flex:1;display:flex;min-height:0;background:#EFF7F7;}
.apv-sidebar{width:160px;flex-shrink:0;overflow-y:auto;background:#F6FBFB;border-right:1px solid #DCEAEC;padding:14px 10px;display:flex;flex-direction:column;align-items:center;gap:14px;}
.apv-thumb{display:flex;flex-direction:column;align-items:center;gap:6px;background:none;border:none;cursor:pointer;padding:6px;border-radius:10px;}
.apv-thumb img,.apv-thumb-ph{width:110px;border:1px solid #DCEAEC;border-radius:4px;background:#fff;box-shadow:0 2px 8px rgba(7,85,104,.08);}
.apv-thumb-ph{height:150px;display:block;}
.apv-thumb:hover{background:#E5F2F3;}
.apv-thumb.active{background:#E5F2F3;}
.apv-thumb.active img{border:2px solid #078D9B;}
.apv-thumb-no{font-size:12px;font-weight:800;color:#5f7f86;}
.apv-thumb.active .apv-thumb-no{color:#078D9B;}
.apv-stage{flex:1;position:relative;min-width:0;}
.apv-container{position:absolute;inset:0;overflow:auto;}
.apv-container.apv-hand{cursor:grab;}
.apv-container.apv-hand .textLayer{pointer-events:none;}
.apv-container.apv-grabbing{cursor:grabbing;}
.apv-container .pdfViewer{--page-margin:18px auto;--page-border:0 solid transparent;padding:2px 0 10px;}
.apv-container .pdfViewer .page{box-shadow:0 0 0 1px #DCEAEC,0 4px 18px rgba(7,85,104,.10);}
.apv-container .pdfViewer.scrollHorizontal .page,.apv-container .pdfViewer.scrollWrapped .page,.apv-container .pdfViewer .spread .page{margin:18px 9px;}
.apv-state{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:#EFF7F7;text-align:center;padding:24px;}
.apv-state p{margin:0;font-size:14.5px;font-weight:800;color:#075568;}
.apv-state small{font-size:12.5px;color:#5f7f86;font-weight:600;}
.apv-err-icon{font-size:40px;width:76px;height:76px;border-radius:18px;background:#E5F2F3;display:flex;align-items:center;justify-content:center;}
.apv-spinner{width:38px;height:38px;border-radius:50%;border:3px solid #DCEAEC;border-top-color:#078D9B;animation:apvSpin .8s linear infinite;}
@keyframes apvSpin{to{transform:rotate(360deg)}}
:fullscreen.vm-box{border-radius:0;width:100vw!important;height:100vh!important;max-width:none!important;}
@media (max-width:1024px){ .apv-sidebar{width:140px;} .apv-thumb img,.apv-thumb-ph{width:96px;} }
@media (max-width:640px){
  .apv-toolbar{padding:6px 8px;gap:6px;justify-content:flex-start;}
  .apv-btn{width:32px;height:32px;font-size:16px;}
  .apv-select{height:32px;font-size:12px;padding:0 26px 0 8px;}
  .apv-sidebar{position:absolute;z-index:5;top:0;bottom:0;left:0;box-shadow:6px 0 18px rgba(7,85,104,.12);}
  .apv-body{position:relative;}
  .apv-container .pdfViewer{--page-margin:10px auto;}
}
`;

const ZOOM_OPTIONS = [
  { value: "auto", label: "Automatic Zoom" },
  { value: "page-actual", label: "Actual Size" },
  { value: "page-fit", label: "Page Fit" },
  { value: "page-width", label: "Page Width" },
  { value: "0.5", label: "50%" },
  { value: "0.75", label: "75%" },
  { value: "1", label: "100%" },
  { value: "1.25", label: "125%" },
  { value: "1.5", label: "150%" },
  { value: "2", label: "200%" },
  { value: "3", label: "300%" },
  { value: "4", label: "400%" },
];
const MIN_SCALE = 0.1, MAX_SCALE = 10;
const HIGHLIGHT_COLORS = "yellow=#FFFF98,green=#53FFBC,blue=#80EBFF,pink=#FFCBE6,red=#FF4F5F";
const SCROLL = { VERTICAL: 0, HORIZONTAL: 1, WRAPPED: 2, PAGE: 3 };
const SPREAD = { NONE: 0, ODD: 1, EVEN: 2 };

// Toolbar button (component बाहेर — re-render वर remount होत नाही)
function Btn({ title, onClick, active, disabled, children, ready, className = "" }) {
  return (
    <button type="button" className={`apv-btn ${active ? "active" : ""} ${className}`} title={title} aria-label={title}
      aria-pressed={active || undefined} onClick={onClick} disabled={disabled || !ready}>{children}</button>
  );
}

// canAnnotate=false → View access: Highlight / Text / Draw / Image options दिसत नाहीत
export default function AgendaPdfViewer({ url, fileName = "document.pdf", canAnnotate = true }) {
  const rootRef      = useRef(null);
  const containerRef = useRef(null);
  const viewerElRef  = useRef(null);
  const viewerRef    = useRef(null);
  const eventBusRef  = useRef(null);
  const docRef       = useRef(null);
  const findInputRef = useRef(null);
  const pendingStamp = useRef(false);
  const toolbarRef   = useRef(null);
  const thumbsRotRef = useRef(null);
  const [tbRect, setTbRect] = useState(null);

  const [status, setStatus]         = useState("loading"); // loading | ready | error
  const [progress, setProgress]     = useState(0);
  const [numPages, setNumPages]     = useState(0);
  const [page, setPage]             = useState(1);
  const [pageInput, setPageInput]   = useState("1");
  const [scaleValue, setScaleValue] = useState("auto");
  const [scalePct, setScalePct]     = useState(100);
  const [editorMode, setEditorMode] = useState(AnnotationEditorType.NONE);
  const [panel, setPanel]           = useState(null);   // search | text | draw | highlight | more | props
  const [sidebar, setSidebar]       = useState(false);
  const [thumbs, setThumbs]         = useState([]);
  const [fullscreen, setFullscreen] = useState(false);
  const [rotation, setRotation]     = useState(0);
  const [scrollMode, setScrollMode] = useState(SCROLL.VERTICAL);
  const [spreadMode, setSpreadMode] = useState(SPREAD.NONE);
  const [handTool, setHandTool]     = useState(false);
  const [props, setProps]           = useState(null);

  // find
  const [query, setQuery]               = useState("");
  const [highlightAll, setHighlightAll] = useState(true);
  const [matchCase, setMatchCase]       = useState(false);
  const [wholeWord, setWholeWord]       = useState(false);
  const [matches, setMatches]           = useState({ current: 0, total: 0 });
  const [findMsg, setFindMsg]           = useState("");

  // editor params
  const [textColor, setTextColor] = useState("#000000");
  const [textSize, setTextSize]   = useState(10);
  const [inkColor, setInkColor]   = useState("#000000");
  const [inkThick, setInkThick]   = useState(1);
  const [inkOpacity, setInkOpacity] = useState(100);
  const [hlShowAll, setHlShowAll] = useState(true);

  // ── Load document ──
  useEffect(() => {
    if (!url || !containerRef.current) return;
    let cancelled = false;
    setStatus("loading"); setProgress(0); setThumbs([]); setPanel(null);

    const eventBus = new EventBus();
    const linkService = new PDFLinkService({ eventBus, externalLinkTarget: 2 /* BLANK */ });
    const findController = new PDFFindController({ eventBus, linkService });
    const viewer = new PDFViewer({
      container: containerRef.current,
      viewer: viewerElRef.current,
      eventBus, linkService, findController,
      annotationEditorMode: canAnnotate ? AnnotationEditorType.NONE : AnnotationEditorType.DISABLE,
      annotationEditorHighlightColors: HIGHLIGHT_COLORS,
      enableHighlightFloatingButton: false,
    });
    linkService.setViewer(viewer);
    viewerRef.current = viewer;
    eventBusRef.current = eventBus;

    eventBus.on("pagesinit", () => { viewer.currentScaleValue = "auto"; });
    eventBus.on("pagechanging", e => { setPage(e.pageNumber); setPageInput(String(e.pageNumber)); });
    eventBus.on("scalechanging", e => {
      setScalePct(Math.round(e.scale * 100));
      setScaleValue(e.presetValue || String(e.scale));
    });
    eventBus.on("rotationchanging", e => setRotation(e.pagesRotation));
    eventBus.on("annotationeditormodechanged", e => {
      setEditorMode(e.mode);
      if (e.mode === AnnotationEditorType.STAMP && pendingStamp.current) {
        pendingStamp.current = false;
        eventBus.dispatch("switchannotationeditorparams", { source: null, type: AnnotationEditorParamsType.CREATE });
      }
    });
    // pdf.js स्वतः mode बदलायला सांगतो (उदा. annotation वर double-click)
    eventBus.on("switchannotationeditormode", e => {
      try { viewer.annotationEditorMode = { mode: e.mode, editId: e.editId ?? null }; } catch {}
    });
    eventBus.on("updatefindmatchescount", e => setMatches(e.matchesCount || { current: 0, total: 0 }));
    eventBus.on("updatefindcontrolstate", e => {
      if (e.matchesCount) setMatches(e.matchesCount);
      setFindMsg(e.state === 1 ? "Not found" : e.state === 2 ? (e.previous ? "Reached top, continued from bottom" : "Reached end, continued from top") : "");
    });

    ensurePdfWorker();
    const task = pdfjsLib.getDocument({ url });
    task.onProgress = ({ loaded, total }) => total && setProgress(Math.min(100, Math.round((loaded / total) * 100)));
    task.onPassword = (updatePassword, reason) => {
      const pwd = window.prompt(reason === 2 ? "Incorrect password. Enter PDF password:" : "This PDF is password protected. Enter password:");
      if (pwd === null) { task.destroy(); setStatus("error"); } else updatePassword(pwd);
    };
    task.promise.then(doc => {
      if (cancelled) return;
      docRef.current = doc;
      viewer.setDocument(doc);
      linkService.setDocument(doc, null);
      setNumPages(doc.numPages);
      setStatus("ready");
    }).catch((err) => {
      // खरं कारण console मध्ये दिसेल (CORS / 401 / worker / invalid PDF)
      console.error("[AgendaPdfViewer] PDF load failed:", err?.name, err?.message, "URL:", url);
      if (!cancelled) setStatus("error");
    });

    return () => {
      cancelled = true;
      try { viewer.setDocument(null); } catch {}
      try { linkService.setDocument(null); } catch {}
      task.destroy();
      docRef.current = null;
      viewerRef.current = null;
    };
  }, [url, canAnnotate]);

  // ── Popover position (toolbar च्या खाली) ──
  useEffect(() => {
    if (!panel) return;
    const upd = () => toolbarRef.current && setTbRect(toolbarRef.current.getBoundingClientRect());
    upd();
    window.addEventListener("resize", upd);
    return () => window.removeEventListener("resize", upd);
  }, [panel, fullscreen]);
  const popStyle = side => {
    if (!tbRect) return { visibility: "hidden" };
    const top = tbRect.bottom + 6;
    return side === "left"
      ? { top, left: Math.max(8, tbRect.left + 10) }
      : { top, right: Math.max(8, window.innerWidth - tbRect.right + 10) };
  };

  // ── Fullscreen sync ──
  useEffect(() => {
    const onFs = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  // ── Thumbnails (sidebar उघडल्यावरच) ──
  useEffect(() => {
    const doc = docRef.current;
    if (!sidebar || !doc) return;
    if (thumbs.length && thumbsRotRef.current === rotation) return;
    thumbsRotRef.current = rotation;
    let stop = false;
    (async () => {
      const out = [];
      for (let i = 1; i <= doc.numPages && !stop; i++) {
        try {
          const p = await doc.getPage(i);
          const vp0 = p.getViewport({ scale: 1, rotation });
          const vp = p.getViewport({ scale: 110 / vp0.width, rotation });
          const c = document.createElement("canvas");
          c.width = vp.width; c.height = vp.height;
          await p.render({ canvasContext: c.getContext("2d"), viewport: vp }).promise;
          out.push(c.toDataURL());
          if (!stop) setThumbs([...out]);
        } catch { out.push(null); }
      }
    })();
    return () => { stop = true; };
  }, [sidebar, status, rotation]); // eslint-disable-line

  // ── Hand tool (drag to scroll) ──
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !handTool) return;
    let sx, sy, sl, st, down = false;
    const md = e => { if (e.button !== 0) return; down = true; sx = e.clientX; sy = e.clientY; sl = el.scrollLeft; st = el.scrollTop; el.classList.add("apv-grabbing"); e.preventDefault(); };
    const mm = e => { if (!down) return; el.scrollLeft = sl - (e.clientX - sx); el.scrollTop = st - (e.clientY - sy); };
    const mu = () => { down = false; el.classList.remove("apv-grabbing"); };
    el.addEventListener("mousedown", md); window.addEventListener("mousemove", mm); window.addEventListener("mouseup", mu);
    return () => { el.removeEventListener("mousedown", md); window.removeEventListener("mousemove", mm); window.removeEventListener("mouseup", mu); };
  }, [handTool]);

  // ── Helpers ──
  const v = () => viewerRef.current;
  const ready = status === "ready";

  const goTo = n => { if (!v()) return; const p = Math.max(1, Math.min(numPages, n)); v().currentPageNumber = p; };
  const commitPageInput = () => { const n = parseInt(pageInput, 10); if (Number.isFinite(n)) goTo(n); else setPageInput(String(page)); };

  const zoomBy = dir => {
    if (!v()) return;
    const cur = v().currentScale;
    const next = dir > 0 ? Math.min(MAX_SCALE, Math.round(cur * 1.1 * 100) / 100) : Math.max(MIN_SCALE, Math.round((cur / 1.1) * 100) / 100);
    v().currentScaleValue = String(next);
  };
  const setZoom = val => { if (v()) v().currentScaleValue = val; };
  const zoomSelectValue = ZOOM_OPTIONS.some(o => o.value === scaleValue) ? scaleValue : "custom";

  const runFind = useCallback((type = "", findPrevious = false, overrides = {}) => {
    eventBusRef.current?.dispatch("find", {
      source: null, type, query: overrides.query ?? query,
      caseSensitive: overrides.matchCase ?? matchCase, entireWord: overrides.wholeWord ?? wholeWord,
      highlightAll: overrides.highlightAll ?? highlightAll, findPrevious, matchDiacritics: false,
    });
  }, [query, matchCase, wholeWord, highlightAll]);

  const setMode = mode => {
    if (!v()) return;
    const next = editorMode === mode ? AnnotationEditorType.NONE : mode;
    try { v().annotationEditorMode = { mode: next }; } catch {}
    const map = { [AnnotationEditorType.FREETEXT]: "text", [AnnotationEditorType.INK]: "draw", [AnnotationEditorType.HIGHLIGHT]: "highlight" };
    setPanel(next === AnnotationEditorType.NONE ? null : map[next] || null);
  };
  const addImage = () => {
    if (!v()) return;
    if (editorMode === AnnotationEditorType.STAMP) {
      eventBusRef.current.dispatch("switchannotationeditorparams", { source: null, type: AnnotationEditorParamsType.CREATE });
    } else {
      pendingStamp.current = true;
      try { v().annotationEditorMode = { mode: AnnotationEditorType.STAMP }; } catch { pendingStamp.current = false; }
    }
    setPanel(null);
  };
  const editorParam = (type, value) => eventBusRef.current?.dispatch("switchannotationeditorparams", { source: null, type, value });

  const getBytes = async () => {
    const doc = docRef.current;
    if (!doc) return null;
    try { return doc.annotationStorage.size > 0 ? await doc.saveDocument() : await doc.getData(); }
    catch { return await doc.getData(); }
  };
  const handleSave = async () => {
    const bytes = await getBytes(); if (!bytes) return;
    const blobUrl = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
    const a = document.createElement("a"); a.href = blobUrl; a.download = fileName; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(blobUrl), 30000);
  };
  const handlePrint = async () => {
    const bytes = await getBytes(); if (!bytes) return;
    const blobUrl = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
    const frame = document.createElement("iframe");
    frame.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0;";
    frame.src = blobUrl;
    frame.onload = () => { try { frame.contentWindow.focus(); frame.contentWindow.print(); } catch { window.open(blobUrl, "_blank"); } };
    document.body.appendChild(frame);
    setTimeout(() => { frame.remove(); URL.revokeObjectURL(blobUrl); }, 60000);
  };
  const toggleFullscreen = () => {
    const box = rootRef.current?.closest(".vm-box") || rootRef.current;
    if (document.fullscreenElement) document.exitFullscreen?.();
    else box?.requestFullscreen?.();
  };
  const rotate = d => { if (v()) v().pagesRotation = (rotation + d + 360) % 360; };
  const changeScroll = m => { if (v()) { v().scrollMode = m; setScrollMode(m); if (m === SCROLL.HORIZONTAL && spreadMode !== SPREAD.NONE) setSpreadMode(SPREAD.NONE); } };
  const changeSpread = m => { if (v()) { v().spreadMode = m; setSpreadMode(m); } };
  const openProps = async () => {
    setPanel("props");
    const doc = docRef.current; if (!doc) return;
    try {
      const { info } = await doc.getMetadata();
      const { length } = await doc.getDownloadInfo();
      const fmt = d => { const m = d && /D:(\d{4})(\d{2})(\d{2})(\d{2})?(\d{2})?/.exec(d); return m ? `${m[3]}/${m[2]}/${m[1]}${m[4] ? ` ${m[4]}:${m[5] || "00"}` : ""}` : "-"; };
      setProps([
        ["File name", fileName], ["File size", length ? `${(length / 1024).toFixed(0)} KB` : "-"],
        ["Title", info?.Title || "-"], ["Author", info?.Author || "-"], ["Subject", info?.Subject || "-"],
        ["Creator", info?.Creator || "-"], ["PDF Producer", info?.Producer || "-"],
        ["Created", fmt(info?.CreationDate)], ["Modified", fmt(info?.ModDate)],
        ["PDF Version", info?.PDFFormatVersion || "-"], ["Pages", String(doc.numPages)],
      ]);
    } catch { setProps([["File name", fileName], ["Pages", String(doc.numPages)]]); }
  };

  // Ctrl+F → आपला search (viewer उघडा असताना)
  useEffect(() => {
    const onKey = e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "f") {
        e.preventDefault(); setPanel("search"); setTimeout(() => findInputRef.current?.select(), 0);
      } else if (e.key === "Escape" && panel) { e.stopPropagation(); setPanel(null); }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [panel]);


  return (
    <div className="apv-root" ref={rootRef}>
      <style>{APV_CSS}</style>
      {/* ── Toolbar (बाहेरच्या frame मध्ये) ── */}
      <div className="apv-toolbar" ref={toolbarRef} role="toolbar" aria-label="PDF tools">
        <div className="apv-group">
          <Btn ready={ready} title="Toggle Sidebar" active={sidebar} onClick={() => setSidebar(s => !s)}><FiSidebar /></Btn>
          <Btn ready={ready} title="Find in Document" active={panel === "search"} onClick={() => { setPanel(p => p === "search" ? null : "search"); setTimeout(() => findInputRef.current?.focus(), 0); }}><FiSearch /></Btn>
          <span className="apv-sep" />
          <Btn ready={ready} title="Previous Page" disabled={page <= 1} onClick={() => goTo(page - 1)}><FiChevronUp /></Btn>
          <Btn ready={ready} title="Next Page" disabled={page >= numPages} onClick={() => goTo(page + 1)}><FiChevronDown /></Btn>
          <input className="apv-page-input" aria-label="Page" value={pageInput} disabled={!ready}
            onChange={e => setPageInput(e.target.value.replace(/\D/g, ""))}
            onBlur={commitPageInput} onKeyDown={e => e.key === "Enter" && commitPageInput()} />
          <span className="apv-of">of {numPages || "–"}</span>
        </div>

        <div className="apv-group apv-zoom">
          <Btn ready={ready} title="Zoom Out" onClick={() => zoomBy(-1)}><FiMinus /></Btn>
          <Btn ready={ready} title="Zoom In" onClick={() => zoomBy(1)}><FiPlus /></Btn>
          <select className="apv-select" aria-label="Zoom" value={zoomSelectValue} disabled={!ready} onChange={e => setZoom(e.target.value)}>
            {ZOOM_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            {zoomSelectValue === "custom" && <option value="custom" disabled>{scalePct}%</option>}
          </select>
        </div>

        <div className="apv-group">
          {canAnnotate && (<>
          <Btn ready={ready} title="Highlight" active={editorMode === AnnotationEditorType.HIGHLIGHT} onClick={() => setMode(AnnotationEditorType.HIGHLIGHT)}><BiHighlight /></Btn>
          <Btn ready={ready} title="Text" active={editorMode === AnnotationEditorType.FREETEXT} onClick={() => setMode(AnnotationEditorType.FREETEXT)}><FiType /></Btn>
          <Btn ready={ready} title="Draw" active={editorMode === AnnotationEditorType.INK} onClick={() => setMode(AnnotationEditorType.INK)}><FiEdit3 /></Btn>
          <Btn ready={ready} title="Add or edit images" active={editorMode === AnnotationEditorType.STAMP} onClick={addImage}><FiImage /></Btn>
          <span className="apv-sep" />
          </>)}
          <Btn ready={ready} title="Print" onClick={handlePrint}><FiPrinter /></Btn>
          <Btn ready={ready} title="Save (with annotations)" onClick={handleSave}><FiSave /></Btn>
          <Btn ready={ready} title={fullscreen ? "Exit Fullscreen" : "Fullscreen"} onClick={toggleFullscreen}>{fullscreen ? <FiMinimize /> : <FiMaximize />}</Btn>
          <Btn ready={ready} title="Tools" active={panel === "more" || panel === "props"} onClick={() => setPanel(p => p === "more" ? null : "more")}><FiMoreVertical /></Btn>
        </div>

        {/* ── Popovers ── */}
        {panel === "search" && (
          <div className="apv-pop apv-pop-left apv-find" style={popStyle("left")}>
            <div className="apv-find-row">
              <input ref={findInputRef} className="apv-find-input" placeholder="Find in document…" value={query}
                onChange={e => { setQuery(e.target.value); runFind("", false, { query: e.target.value }); }}
                onKeyDown={e => { if (e.key === "Enter") runFind("again", e.shiftKey); }} />
              <button type="button" className="apv-btn" title="Previous match" onClick={() => runFind("again", true)}><FiChevronUp /></button>
              <button type="button" className="apv-btn" title="Next match" onClick={() => runFind("again", false)}><FiChevronDown /></button>
            </div>
            <div className="apv-find-opts">
              <label><input type="checkbox" checked={highlightAll} onChange={e => { setHighlightAll(e.target.checked); runFind("highlightallchange", false, { highlightAll: e.target.checked }); }} /> Highlight All</label>
              <label><input type="checkbox" checked={matchCase} onChange={e => { setMatchCase(e.target.checked); runFind("casesensitivitychange", false, { matchCase: e.target.checked }); }} /> Match Case</label>
              <label><input type="checkbox" checked={wholeWord} onChange={e => { setWholeWord(e.target.checked); runFind("entirewordchange", false, { wholeWord: e.target.checked }); }} /> Whole Words</label>
            </div>
            {query && <div className="apv-find-msg">{matches.total ? `${matches.current} of ${matches.total} matches` : findMsg || "Searching…"}{matches.total && findMsg ? ` · ${findMsg}` : ""}</div>}
          </div>
        )}

        {panel === "text" && (
          <div className="apv-pop apv-pop-right" style={popStyle("right")}>
            <div className="apv-pop-title">Text</div>
            <label className="apv-field">Color<input type="color" value={textColor} onChange={e => { setTextColor(e.target.value); editorParam(AnnotationEditorParamsType.FREETEXT_COLOR, e.target.value); }} /></label>
            <label className="apv-field">Size <b>{textSize}</b><input type="range" min="5" max="100" value={textSize} onChange={e => { setTextSize(+e.target.value); editorParam(AnnotationEditorParamsType.FREETEXT_SIZE, +e.target.value); }} /></label>
          </div>
        )}
        {panel === "draw" && (
          <div className="apv-pop apv-pop-right" style={popStyle("right")}>
            <div className="apv-pop-title">Draw</div>
            <label className="apv-field">Color<input type="color" value={inkColor} onChange={e => { setInkColor(e.target.value); editorParam(AnnotationEditorParamsType.INK_COLOR, e.target.value); }} /></label>
            <label className="apv-field">Thickness <b>{inkThick}</b><input type="range" min="1" max="20" value={inkThick} onChange={e => { setInkThick(+e.target.value); editorParam(AnnotationEditorParamsType.INK_THICKNESS, +e.target.value); }} /></label>
            <label className="apv-field">Opacity <b>{inkOpacity}%</b><input type="range" min="1" max="100" value={inkOpacity} onChange={e => { setInkOpacity(+e.target.value); editorParam(AnnotationEditorParamsType.INK_OPACITY, +e.target.value / 100); }} /></label>
          </div>
        )}
        {panel === "highlight" && (
          <div className="apv-pop apv-pop-right" style={popStyle("right")}>
            <div className="apv-pop-title">Highlight</div>
            <div className="apv-swatches">
              {HIGHLIGHT_COLORS.split(",").map(s => { const [name, hex] = s.split("="); return (
                <button key={name} type="button" className="apv-swatch" title={name} style={{ background: hex }}
                  onClick={() => editorParam(AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR, hex)} />
              ); })}
            </div>
            <label className="apv-check"><input type="checkbox" checked={hlShowAll} onChange={e => { setHlShowAll(e.target.checked); editorParam(AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL, e.target.checked); }} /> Show all</label>
            <div className="apv-hint">Text select करा → highlight होईल</div>
          </div>
        )}
        {panel === "more" && (
          <div className="apv-pop apv-pop-right apv-menu" style={popStyle("right")}>
            <button type="button" onClick={() => { goTo(1); setPanel(null); }}><FiChevronsUp /> Go to First Page</button>
            <button type="button" onClick={() => { goTo(numPages); setPanel(null); }}><FiChevronsDown /> Go to Last Page</button>
            <hr />
            <button type="button" onClick={() => rotate(90)}><FiRotateCw /> Rotate Clockwise</button>
            <button type="button" onClick={() => rotate(-90)}><FiRotateCcw /> Rotate Counterclockwise</button>
            <hr />
            <button type="button" className={!handTool ? "on" : ""} onClick={() => setHandTool(false)}><FiMousePointer /> Text Selection Tool {!handTool && <FiCheck className="apv-tick" />}</button>
            <button type="button" className={handTool ? "on" : ""} onClick={() => setHandTool(true)}><FiMove /> Hand Tool {handTool && <FiCheck className="apv-tick" />}</button>
            <hr />
            {[["Page Scrolling", SCROLL.PAGE], ["Vertical Scrolling", SCROLL.VERTICAL], ["Horizontal Scrolling", SCROLL.HORIZONTAL], ["Wrapped Scrolling", SCROLL.WRAPPED]].map(([l, m]) => (
              <button key={l} type="button" className={scrollMode === m ? "on" : ""} onClick={() => changeScroll(m)}>{l} {scrollMode === m && <FiCheck className="apv-tick" />}</button>
            ))}
            <hr />
            {[["No Spreads", SPREAD.NONE], ["Odd Spreads", SPREAD.ODD], ["Even Spreads", SPREAD.EVEN]].map(([l, m]) => (
              <button key={l} type="button" className={spreadMode === m ? "on" : ""} disabled={scrollMode === SCROLL.HORIZONTAL && m !== SPREAD.NONE} onClick={() => changeSpread(m)}>{l} {spreadMode === m && <FiCheck className="apv-tick" />}</button>
            ))}
            <hr />
            <button type="button" onClick={openProps}><FiInfo /> Document Properties…</button>
          </div>
        )}
        {panel === "props" && (
          <div className="apv-pop apv-pop-right apv-props" style={popStyle("right")}>
            <div className="apv-pop-title">Document Properties <button type="button" className="apv-btn" title="Close" onClick={() => setPanel(null)}><FiX /></button></div>
            {(props || [["", "Loading…"]]).map(([k, val]) => <div key={k} className="apv-prop"><span>{k}</span><b>{val}</b></div>)}
          </div>
        )}
      </div>

      {/* ── Body: sidebar + pages ── */}
      <div className="apv-body">
        {sidebar && (
          <aside className="apv-sidebar">
            {Array.from({ length: numPages }, (_, i) => (
              <button type="button" key={i} className={`apv-thumb ${page === i + 1 ? "active" : ""}`} onClick={() => goTo(i + 1)} title={`Page ${i + 1}`}>
                {thumbs[i] ? <img src={thumbs[i]} alt={`Page ${i + 1}`} /> : <span className="apv-thumb-ph" />}
                <span className="apv-thumb-no">{i + 1}</span>
              </button>
            ))}
          </aside>
        )}
        <div className="apv-stage">
          <div ref={containerRef} className={`apv-container ${handTool ? "apv-hand" : ""}`} onClick={() => panel && panel !== "search" && setPanel(null)}>
            <div ref={viewerElRef} className="pdfViewer" />
          </div>
          {status === "loading" && (
            <div className="apv-state"><div className="apv-spinner" /><p>Loading document… {progress ? `${progress}%` : ""}</p></div>
          )}
          {status === "error" && (
            <div className="apv-state"><span className="apv-err-icon">📄</span><p>PDF preview लोड झाला नाही</p><small>वरील Download बटण वापरा</small></div>
          )}
        </div>
      </div>
    </div>
  );
}