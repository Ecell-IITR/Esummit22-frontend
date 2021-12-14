import React from "react";
import Navbar from "../components/dashboard/Navbar";
import Profile from "../components/cap/cap_profile";
import Resources from "../components/dashboard/resources_component";

export default function CA_Rulebook() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        style={{
          marginTop: "10rem",
          marginBottom: "5rem",
          marginLeft: "15rem",
        }}
      >
        <Profile />
      </div>
      <div
        style={{ marginTop: "5rem", marginBottom: "5rem", marginLeft: "15rem" }}
      >
        <div>
          <div style={{ color: "white" }} className="ca_Rulebook_Headings">
            Joining Letter
          </div>
          <img
            id="ca_rulebook_border"
            src="Border_line_caDashboard.png"
            alt=""
            style={{width:"11.2vw"}}
          />
        </div>
        <Resources />
      </div>
      <div
        style={{ marginTop: "5rem", marginBottom: "5rem", marginLeft: "15rem" }}
      >
        <div style={{ color: "white" }} className="ca_Rulebook_Headings">
          Rulebook
        </div>
        <img id="ca_rulebook_border" src="Border_line_caDashboard.png" alt="" style={{width:"8vw"}}/>
        <Resources />
      </div>
      <div
        style={{ marginTop: "5rem", marginBottom: "5rem", marginLeft: "15rem" }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ color: "white" }} className="ca_Rulebook_Headings">
            Certificate
          </div>
          <img
            id="ca_rulebook_border"
            src="Border_line_caDashboard.png"
            alt=""
          />
        </div>
        <Resources />
      </div>
    </div>
  );
}
