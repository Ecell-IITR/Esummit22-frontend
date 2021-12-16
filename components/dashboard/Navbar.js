import React, { useState } from "react";
export default function Navbar() {
  const [activelist, setactivelist] = useState([true, false, false]);

  return (
    <div className="Ca_sidebar">
      <div className="nav-items">
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
                  setactivelist([true, false, false]);
                }}
              >
                <div className={activelist[0] ? "text_black" : ""}>Tasks</div>
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
                  setactivelist([false, true, false]);
                }}
              >
                <div className={activelist[1] ? "text_black" : ""}>
                  Leaderboard
                </div>
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
                  setactivelist([false, false, true]);
                }}
              >
                <div className={activelist[2] ? "text_black" : ""}>
                  CA Rulebook
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
