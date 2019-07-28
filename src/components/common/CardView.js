import React from "react";

const CardView = props => {
  const { children, styles } = props;
  return (
    <div
      style={{
        borderRadius: "5px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        ...styles
      }}
    >
      {children}
    </div>
  );
};

export default CardView;
