import React from "react";
import ResourcesCard from "../dashboard/resources_card";

export default function CA_Resources({ resources_list }) {
  return (
    <div>
      <div className="CA_main_container">
        {resources_list ? (
          <div className="CA_Profile_content">
            <div className="CA_Profile_heading">Joining Letters</div>
            <div
              className="CA_Profile_heading_underline"
              style={{ width: "10vw" }}
            ></div>
            <div className="CA_Profile_Resources_container">
              <ResourcesCard
                fileName_={resources_list.resource_name}
                file_={resources_list.uploaded_file}
              />
            </div>
          </div>
        ) : null}
        <div className="CA_Profile_content">
          <div className="CA_Profile_heading">Rulebook</div>
          <div
            className="CA_Profile_heading_underline"
            style={{ width: "6.5vw" }}
          ></div>
          <div className="CA_Profile_Resources_container">
            <ResourcesCard />
            <ResourcesCard />
            <ResourcesCard />
            <ResourcesCard />
          </div>
        </div>
      </div>
    </div>
  );
}
