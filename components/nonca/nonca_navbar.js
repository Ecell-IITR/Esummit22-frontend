import React, { useState } from "react";
export default function NoncaNavbar() {
  const [activelist, setactivelist] = useState([true, false, false, false]);

  return (
    <div className="Ca_sidebar">
      <div className="noncanav-items">
        <div className="nav-profile">
          <div className="nav-profile-photo">
            <img src="eventImg.png"></img>
          </div>
          <div className="nav-profile-name">Harpreet Singh</div>
          <div className="nav-profile-college">
            Indian Institute of Technology, Roorkee
          </div>
          <div className="nav-profile-summitid">
            <div>ESummit ID</div>
            <div>ES21CA1234</div>
          </div>
        </div>
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
                activelist[1]
                  ? "nav-text-container-active"
                  : "nav-text-container-inactive"
              }
            >
              <div
                className="nav_item_text"
                onClick={() => {
                  setactivelist([false, true, false, false]);
                }}
              >
                <div className={activelist[1] ? "text_black" : ""}>Payment</div>
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
          <li>
            <div
              className={
                activelist[3]
                  ? "nav-text-container-active"
                  : "nav-text-container-inactive"
              }
            >
              <div
                className="nav_item_text"
                onClick={() => {
                  setactivelist([false, false, false, true]);
                }}
              >
                <div className={activelist[3] ? "text_black" : ""}>Profile</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
