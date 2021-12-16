import React, { useEffect } from "react";
import Navbar from "../../components/dashboard/Navbar";
import Profile from "../../components/cap/cap_profile";
import Resources from "../../components/dashboard/resources_component";
import { useMobile, useUpdateMobile } from "../../utils/MobileContext";

export default function CA_Rulebook() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const setMobile = useUpdateMobile();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setMobile();
  });

  return (
    <div>
      {useMobile().isMobile ? null : <Navbar />}
      <div className="CA_main_container">
        <div className="CA_Profile_container">
          <Profile />
        </div>
        <div className="CA_Profile_content">
          <div className="CA_Profile_heading">Joining Letters</div>
          <div
            className="CA_Profile_heading_underline"
            style={{ width: "10vw" }}
          ></div>
          <div className="CA_Profile_Resources_container">
            <Resources />
          </div>
        </div>
        <div className="CA_Profile_content">
          <div className="CA_Profile_heading">Rulebook</div>
          <div
            className="CA_Profile_heading_underline"
            style={{ width: "6.5vw" }}
          ></div>
          <div className="CA_Profile_Resources_container">
            <Resources />
          </div>
        </div>
        <div className="CA_Profile_content">
          <div className="CA_Profile_heading">Certificate</div>
          <div
            className="CA_Profile_heading_underline"
            style={{ width: "7vw" }}
          ></div>
          <div className="CA_Profile_Resources_container">
            <Resources />
          </div>
        </div>
      </div>
    </div>
  );
}
