import NoncaNavbar from "../../components/nonca/nonca_navbar";

import React, { useEffect, useState } from "react";
import FetchApi from "../../utils/fetchAPI";
import { DASHBOARD_EVENT_API, NON_CA_PROFILE_API } from "../../utils/APIs";

import { getAuthToken } from "../../utils";

import EventDashboardCard from "../../components/dashboard/dashboardEventCard";
import CustomGradientBtn from "../../components/customGradientBtn";

const Event = () => {

  let isregistered = true;
  const [dashboardArr, setdashboardArr] = useState([]);
  const [registeredArr, setregisteredArr] = useState([]);
  useEffect(() => {
    FetchApi("get", DASHBOARD_EVENT_API, null, getAuthToken())
      .then((res) => {
        setdashboardArr(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    FetchApi(
      "get",
      NON_CA_PROFILE_API,
      null,
      getAuthToken()
    )
      .then((res) => {
        setregisteredArr(
          res.data[0].profile.dashboard_eventdashboardcard_registered_profile_of
        );
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="Dashboard-event-head">Competitions</div>
      <div className="Dashboard-underline"></div>
      <div className="Dashboard-events-main-container">
        <div className="Dashboard-events-nav-container">
          <NoncaNavbar />
        </div>

        <div className="Dashboard-events-content-container">
          {dashboardArr?.map((det, id) => {
            function IsRegisteredChecker() {
              for (let i = 0; i < registeredArr.length; i++) {
                if (
                  registeredArr[i].EventCompetitive.id ==
                  det.EventCompetitive.id
                ) {
                  return true;
                }
              }
              return false;
            }
            return (
              <>
                <EventDashboardCard
                  title={det.EventCompetitive.event_name}
                  desc={det.EventCompetitive.card_description}
                  isregistered={IsRegisteredChecker()}
                  link={det.EventCompetitive.end_point}
                />
              </>
            );
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
