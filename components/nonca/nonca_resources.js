import React from "react";
import ResourcesCard from "../dashboard/resources_card";

const NonCAResources = (nonCA_resources_list) => {
  return (
    <div>
      <div className="nonCA_main_container">
        {nonCA_resources_list ? (
          <div className="nonCA_Profile_content">
            <div className="nonCA_Profile_heading">Joining Letters</div>
            <div
              className="nonCA_Profile_heading_underline"
              style={{ width: "12%" }}
            ></div>
            <div className="nonCA_Profile_Resources_container">
              <ResourcesCard
                fileName_={nonCA_resources_list.resource_name}
                file_={nonCA_resources_list.uploaded_file}
              />
            </div>
          </div>
        ) : null}
        <div className="nonCA_Profile_content">
          <div className="nonCA_Profile_heading">E-summit Brochure</div>
          <div
            className="nonCA_Profile_heading_underline"
            style={{ width: "16%" }}
          ></div>
          <div className="nonCA_Profile_Resources_container">
            <ResourcesCard />
            <ResourcesCard />
            <ResourcesCard />
            <ResourcesCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonCAResources;
