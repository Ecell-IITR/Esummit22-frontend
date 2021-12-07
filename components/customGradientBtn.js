import React from "react";

export const CustomGradientBtn = ({ text, color }) => {
  return <div className="custom-gradient-btn-container" style={color ? {color:color} : null}>{text}</div>;
};

export default CustomGradientBtn;
