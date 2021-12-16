import React from "react";
import Profile from "../../components/cap/cap_profile";
import Navbar from "../../components/dashboard/Navbar";
import { useMobile, useUpdateMobile } from "../../utils/MobileContext";
import { useEffect, useState } from "react";

const CapLayout = ({ children }) => {
  const setMobile = useUpdateMobile();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setMobile();
  });
  return (
    <div className="cap-main-container">
      {useMobile().isMobile ? null : <Navbar />}
      <div className="cap-right-outer-container">
        <div className="cap-profile-container">
          <Profile />
        </div>
        {children}
      </div>
    </div>
  );
};

export default CapLayout;
