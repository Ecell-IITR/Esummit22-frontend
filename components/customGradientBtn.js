import React from "react";

export const CustomGradientBtn = ({ text, color = "black", size }) => {
  console.log(text, color, size);
  return (
    <div
      className="custom-gradient-btn-container"
      style={{ color: color, fontSize: size === "sm" ? 15 : null }}
    >
      {text}
    </div>
  );
};

export default CustomGradientBtn;
