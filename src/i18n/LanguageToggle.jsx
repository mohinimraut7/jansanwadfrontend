import { useEffect, useState } from "react";
import { getLang, setLang } from "./domTranslator";

/** Current language ("en" | "mr") that re-renders on change. */
export function useLang() {
  const [lang, set] = useState(getLang());
  useEffect(() => {
    const h = (e) => set(e.detail);
    window.addEventListener("app-langchange", h);
    return () => window.removeEventListener("app-langchange", h);
  }, []);
  return lang;
}

/**
 * EN | मराठी switch.
 *  variant="dark"  → for the teal landing navbar
 *  variant="light" → for the white admin navbar
 */
export default function LanguageToggle({ variant = "dark", style }) {
  const lang = useLang();
  const dark = variant === "dark";

  const wrap = {
    display: "inline-flex",
    alignItems: "center",
    padding: 3,
    borderRadius: 50,
    border: dark ? "1.5px solid rgba(202,157,40,0.75)" : "1px solid #E5EEEE",
    background: dark ? "rgba(255,255,255,0.08)" : "#F1F7F8",
    flexShrink: 0,
    gap: 2,
    ...style,
  };
  const btn = (active) => ({
    border: "none",
    cursor: "pointer",
    borderRadius: 50,
    padding: "6px 12px",
    fontSize: 12.5,
    fontWeight: 700,
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    fontFamily: "'Plus Jakarta Sans','Noto Sans Devanagari','Montserrat',sans-serif",
    transition: "all 0.25s ease",
    background: active ? (dark ? "#CA9D28" : "#087F8C") : "transparent",
    color: active ? (dark ? "#114e59" : "#FFFFFF") : (dark ? "rgba(245,231,194,0.88)" : "#087F8C"),
  });

  return (
    <div data-no-translate style={wrap} role="group" aria-label="Language / भाषा">
      <button type="button" style={btn(lang === "en")} onClick={() => setLang("en")} aria-pressed={lang === "en"}>
        EN
      </button>
      <button type="button" style={btn(lang === "mr")} onClick={() => setLang("mr")} aria-pressed={lang === "mr"}>
        मराठी
      </button>
    </div>
  );
}