// ─────────────────────────────────────────────────────────────
//  Jan Samvad — Bilingual "find & replace" engine
//  Add  data-no-translate  to any element to keep it untouched.
// ─────────────────────────────────────────────────────────────
import translations from "./translations";

export const LANG_KEY = "appLang";
export const LANGS = ["en", "mr"];
const DEFAULT_LANG = "en";

const ATTRS = ["placeholder", "title", "alt", "aria-label"];
const SKIP_SELECTOR =
  "[data-no-translate], script, style, noscript, textarea, code, pre, [contenteditable='true']";

// edges = anything that is not a letter (emoji incl. variation selectors, digits, symbols, spaces)
const EDGE = "(?:[^\\p{L}\\p{M}]|[\\uFE0E\\uFE0F\\u200D\\u20E3])*";
const SPLIT_RE = new RegExp("^(" + EDGE + ")([\\s\\S]*?)(" + EDGE + ")$", "u");
const split = (s) => {
  const m = SPLIT_RE.exec(s);
  return m ? [m[1], m[2], m[3]] : ["", s, ""];
};
const norm = (s) => s.replace(/\s+/g, " ").trim().toLowerCase();
const isUpperLatin = (s) => /[A-Z]/.test(s) && !/[a-z]/.test(s);

const lookup = new Map();
const fullLookup = new Map();
(() => {
  const put = (variant, entry, full) => {
    const k = norm(split(variant)[1]);
    if (k && !lookup.has(k)) lookup.set(k, entry);
    const fk = norm(variant);
    if (fk && !fullLookup.has(fk)) fullLookup.set(fk, full);
  };
  translations.forEach((row) => {
    const entry = [split(row[0])[1], split(row[1])[1]];
    const full = [row[0], row[1]];
    row.forEach((v, j) => j < 2 && put(v, entry, full));
  });
  translations.forEach((row) => {
    const entry = [split(row[0])[1], split(row[1])[1]];
    row.slice(2).forEach((a) => put(a, entry, [row[0], row[1]]));
  });
})();

let currentLang = (() => {
  try {
    const l = localStorage.getItem(LANG_KEY);
    return LANGS.includes(l) ? l : DEFAULT_LANG;
  } catch { return DEFAULT_LANG; }
})();

export const getLang = () => currentLang;

const DATE_WORDS = [
  "January","February","March","April","May","June","July","August","September","October","November","December",
  "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
  "Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Mon","Tue","Wed","Thu","Fri","Sat","Sun",
];
const SHORT_MR = { jan:"जाने", feb:"फेब्रु", mar:"मार्च", apr:"एप्रि", jun:"जून", jul:"जुलै", aug:"ऑग", sep:"सप्टें", oct:"ऑक्टो", nov:"नोव्हें", dec:"डिसें" };
const DATE_RE = new RegExp("\\b(" + DATE_WORDS.join("|") + ")\\b", "g");
function translateDate(str, lang) {
  if (lang !== "mr" || !/\d/.test(str) || !DATE_RE.test(str)) return null;
  DATE_RE.lastIndex = 0;
  const out = str.replace(DATE_RE, (w) => {
    const e = lookup.get(w.toLowerCase());
    return e ? e[1] : SHORT_MR[w.toLowerCase()] || w;
  });
  return out.replace(/\b(AM|PM)\b/g, (m) => (m === "AM" ? "सकाळी" : "सायं"));
}

export function translateText(str, lang = currentLang) {
  if (str == null || typeof str !== "string" || !/[\p{L}]/u.test(str)) return str;
  const idx = lang === "mr" ? 1 : 0;
  const whole = fullLookup.get(norm(str));
  if (whole && whole[idx]) {
    const lead = str.match(/^\s*/)[0], trail = str.match(/\s*$/)[0];
    let v = whole[idx];
    if (lang === "en" && isUpperLatin(str)) v = v.toUpperCase();
    return lead + v + trail;
  }
  const [pre, core, suf] = split(str);
  if (!core) return str;
  const entry = lookup.get(norm(core));
  if (!entry) return translateDate(str, lang) ?? str;
  let val = entry[idx];
  if (!val) return str;
  if (lang === "en" && isUpperLatin(core)) val = val.toUpperCase();
  return pre + val + suf;
}

const translateMessage = (msg) =>
  typeof msg === "string"
    ? String(translateText(msg)).split("\n").map((l) => translateText(l)).join("\n")
    : msg;

const textState = new WeakMap();
const attrState = new WeakMap();

const skipped = (el) => !el || (el.closest && el.closest(SKIP_SELECTOR));

function originalText(node) {
  const rec = textState.get(node);
  return rec && node.nodeValue === rec.applied ? rec.orig : node.nodeValue;
}

// <option> without a value attribute submits its text — keep original text as value
function pinOptionValue(opt) {
  if (opt.hasAttribute("value") && !opt.hasAttribute("data-i18n-autovalue")) return;
  const orig = Array.from(opt.childNodes)
    .map((n) => (n.nodeType === 3 ? originalText(n) : n.textContent))
    .join("").replace(/\s+/g, " ").trim();
  if (opt.getAttribute("value") !== orig) {
    opt.setAttribute("value", orig);
    opt.setAttribute("data-i18n-autovalue", "");
  }
}

function processText(node) {
  const parent = node.parentElement;
  if (skipped(parent)) return;
  let rec = textState.get(node);
  if (!rec || node.nodeValue !== rec.applied) rec = { orig: node.nodeValue };
  if (parent.tagName === "OPTION") {
    textState.set(node, { orig: rec.orig, applied: node.nodeValue });
    pinOptionValue(parent);
  }
  const out = translateText(rec.orig);
  rec.applied = out;
  textState.set(node, rec);
  if (node.nodeValue !== out) node.nodeValue = out;
}

function processAttrs(el) {
  if (skipped(el)) return;
  let st = attrState.get(el);
  const attrs = ATTRS.slice();
  if (el.tagName === "INPUT" && /^(button|submit|reset)$/i.test(el.type)) attrs.push("value");
  for (const a of attrs) {
    if (!el.hasAttribute(a)) continue;
    const cur = el.getAttribute(a);
    if (!st) { st = {}; attrState.set(el, st); }
    let rec = st[a];
    if (!rec || cur !== rec.applied) rec = { orig: cur };
    const out = translateText(rec.orig);
    rec.applied = out;
    st[a] = rec;
    if (cur !== out) el.setAttribute(a, out);
  }
}

function walk(root) {
  if (!root) return;
  if (root.nodeType === 3) { processText(root); return; }
  if (root.nodeType !== 1 && root.nodeType !== 11) return;
  if (root.nodeType === 1) {
    if (skipped(root)) return;
    processAttrs(root);
  }
  const tw = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
    acceptNode: (n) =>
      n.nodeType === 1 && n.matches(SKIP_SELECTOR) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
  });
  let n = tw.nextNode();
  while (n) {
    if (n.nodeType === 3) processText(n);
    else processAttrs(n);
    n = tw.nextNode();
  }
}

let origTitle = null, appliedTitle = null;
function processTitle() {
  if (origTitle === null || document.title !== appliedTitle) origTitle = document.title;
  appliedTitle = translateText(origTitle);
  if (document.title !== appliedTitle) document.title = appliedTitle;
}

let started = false;

export function startTranslator() {
  if (started || typeof window === "undefined") return;
  started = true;

  const { alert: a, confirm: c, prompt: p } = window;
  window.alert = (m) => a.call(window, translateMessage(m));
  window.confirm = (m) => c.call(window, translateMessage(m));
  window.prompt = (m, d) => p.call(window, translateMessage(m), d);

  document.documentElement.lang = currentLang;

  // Devanagari breaks apart with letter-spacing → disable it only in Marathi mode
  const st = document.createElement("style");
  st.setAttribute("data-i18n", "");
  st.textContent = 'html[lang="mr"] body *{letter-spacing:normal !important;}';
  document.head.appendChild(st);

  const run = () => {
    walk(document.body);
    processTitle();
    new MutationObserver((muts) => {
      for (const m of muts) {
        if (m.type === "characterData") processText(m.target);
        else if (m.type === "attributes") processAttrs(m.target);
        else m.addedNodes.forEach(walk);
      }
    }).observe(document.body, {
      subtree: true, childList: true, characterData: true,
      attributes: true, attributeFilter: [...ATTRS, "value"],
    });
    const t = document.querySelector("title");
    if (t) new MutationObserver(processTitle).observe(t, { childList: true, characterData: true, subtree: true });
  };
  if (document.body) run();
  else document.addEventListener("DOMContentLoaded", run);
}

export function setLang(lang) {
  if (!LANGS.includes(lang) || lang === currentLang) return;
  currentLang = lang;
  try { localStorage.setItem(LANG_KEY, lang); } catch { /* ignore */ }
  document.documentElement.lang = lang;
  walk(document.body);
  processTitle();
  window.dispatchEvent(new CustomEvent("app-langchange", { detail: lang }));
}