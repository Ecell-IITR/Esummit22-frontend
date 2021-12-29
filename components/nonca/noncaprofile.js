import React from "react";
import { useState, useEffect } from "react";
import FetchApi from "../../utils/fetchAPI";
import { NON_CA_PROFILE_API } from "../../utils/APIs";
import { getAuthToken } from "../../utils";

export const NProfile = ({ name = "", points, id, college, rank }) => {
  const [caData, setcaData] = useState([]);
  useEffect(() => {
    FetchApi("get", NON_CA_PROFILE_API, null, getAuthToken())
      .then((res) => {
        setcaData(res.data[0]);
       // console.log(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="nprofile-container">
        <div class="dot"></div>
        <div class="dot1"></div>
        <div className="nprofile-image">
          <p>{caData?.profile?.full_name[0]}</p>
        </div>
        <div className="nprofile-details-name-one">
          {caData?.profile?.full_name}
        </div>

        <div className="nprofile-white-text"> {caData?.college}</div>

        <div className="nprofile-white-text2">
          <div className="nprofile-white-text3">ESummit ID </div>{" "}
          {caData?.esummit_id}
        </div>
      </div>
    </>
  );
};

export default NProfile;
