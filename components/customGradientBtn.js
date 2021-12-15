import React from "react";

export const CustomGradientBtn = ({ text, color, size }) => {
  return (
    <div
      className="custom-gradient-btn-container"
      style={
        (color ? { color: color } : null,
        size === "sm" ? { fontSize: 15 } : null)
      }
    >
      {text}
    </div>
  );
};

export default CustomGradientBtn;
