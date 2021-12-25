import React, { useState } from "react";
import Profile from "../cap/cap_profile";
import { NProfile } from "./noncaprofile";
export default function NoncaNavbar() {
  const [activelist, setactivelist] = useState([true, false, false, false]);

  return (
    <div className="Ca_sidebar">
      <div className="noncanav-items">
        <NProfile />
        <ul>
          <li>
            <div
              className={
                activelist[0]
                  ? "nav-text-container-active"
                  : "nav-text-container-inactive"
              }
            >
              <div
                className="nav_item_text"
                onClick={() => {
                  setactivelist([true, false, false, false]);
                }}
              >
                <div className={activelist[0] ? "text_black" : ""}>Events</div>
              </div>
            </div>
          </li>

          <li>
            <div
              className={
                activelist[2]
                  ? "nav-text-container-active"
                  : "nav-text-container-inactive"
              }
            >
              <div
                className="nav_item_text"
                onClick={() => {
                  setactivelist([false, false, true, false]);
                }}
              >
                <div className={activelist[2] ? "text_black" : ""}>
                  Resources
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
