// import React, { createContext, useContext, useState } from "react";

// const SidebarContext = createContext();

// export function SidebarProvider({ children }) {
//   const [mode, setMode] = useState("open");
//   return (
//     <SidebarContext.Provider value={{ mode, setMode }}>
//       {children}
//     </SidebarContext.Provider>
//   );
// }

// export function useSidebar() {
//   return useContext(SidebarContext);
// }



import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  // Tablet / mobile (≤1024px) start with the compact sidebar; desktop stays "open" as before
  const [mode, setMode] = useState(() =>
    typeof window !== "undefined" && window.innerWidth <= 1024 ? "collapsed" : "open"
  );
  return (
    <SidebarContext.Provider value={{ mode, setMode }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}