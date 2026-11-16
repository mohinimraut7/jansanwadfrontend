// Lazy-loaded page चा code येईपर्यंत दिसणारा छोटा loader (project च्या teal रंगात)
export default function PageLoader({ fullScreen = false }) {
  return (
    <div
      style={{
        minHeight: fullScreen ? "100vh" : "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      <style>{`@keyframes pl-spin { to { transform: rotate(360deg) } }`}</style>
      <div
        role="status"
        aria-label="Loading"
        style={{
          width: 36,
          height: 36,
          border: "3px solid #BFDDE1",
          borderTopColor: "#187484",
          borderRadius: "50%",
          animation: "pl-spin .8s linear infinite",
        }}
      />
    </div>
  );
}