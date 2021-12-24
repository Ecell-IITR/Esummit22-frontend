import NoncaNavbar from "../../components/nonca/nonca_navbar";
import React, { useEffect, useState } from "react";
import FetchApi from "../../utils/fetchAPI";
import { ALL_EVENTS_API } from "../../utils/APIs";
import { getAuthToken } from "../../utils";

import EventDashboardCard from "../../components/dashboard/dashboardEventCard";
import CustomGradientBtn from "../../components/customGradientBtn";

const Event = () => {
  let isregistered = true;
  const [Dashboard_arr, setDashboard_arr] = useState();
  useEffect(() => {
    FetchApi(
      "get",
      ALL_EVENTS_API,
      null,
      "25a86f755e46dc4784e1949518e0be2ce6fb45f8"
    )
      .then((res) => {
        setDashboard_arr(res.data.CompetitiveEvents);
        console.log(res.data.CompetitiveEvents);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="Dashboard-events-main-container">
        <div className="Dashboard-events-nav-container">
      <NoncaNavbar />
      </div>
      <div className="Dashboard-events-content-container" >
        {Dashboard_arr?.map((det, id) => {
          return(<>
            
             <EventDashboardCard  title={det.event_name} desc={det.description}/>
            
             </>
          )
        })}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
      </div>
    </>
  );
};

export default Event;
