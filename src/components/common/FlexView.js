import React from "react";

export default function FlexView({ children, styles }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        ...styles,
      }}
    >
      {children}
    </div>
  );
}
