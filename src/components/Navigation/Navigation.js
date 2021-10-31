import React from "react";
import "./index.css";

function Navigation({ children }) {
  return (
    <nav className="nav" aria-label="Sidebar">
      {children}
    </nav>
  );
}

export { Navigation };
