import React from "react";
import ResourcesCard from "../dashboard/resources_card";

const NonCAResources = () => {
  return (
    <div>
      <div className="nonCA_main_container">
        <div className="nonCA_Profile_content">
          <div className="nonCA_Profile_heading">E-summit Brochure</div>
          <div
            className="nonCA_Profile_heading_underline"
            style={{ width: "16%" }}
          ></div>
          <div className="nonCA_Profile_Resources_container">
            <ResourcesCard nonca={true}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonCAResources;
