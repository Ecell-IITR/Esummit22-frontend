import React from "react";
import Profile from "../../components/cap/cap_profile";
import Navbar from "../../components/dashboard/Navbar";
import { useMobile, useUpdateMobile } from "../../utils/MobileContext";
import { useEffect, useState } from "react";
import FetchApi from "../../utils/fetchAPI";
import { CA_PROFILE_API, CA_PROFILE_RANK_API } from "../../utils/APIs";
import { getAuthToken } from "../../utils";
const CapLayout = ({ children }) => {
  const [apiArr, setApiArr] = useState({});
  const [rank, setRank] = useState("");

  const setMobile = useUpdateMobile();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setMobile();
  });

  useEffect(() => {
    FetchApi("get", CA_PROFILE_API, null, getAuthToken())
      .then((res) => {
        setApiArr(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    FetchApi("get", CA_PROFILE_RANK_API, null, getAuthToken())
      .then((res) => {
        setRank(res.data.rank);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="cap-main-container">
    
      {useMobile().isMobile ? null : <Navbar />}
      <div className="cap-right-outer-container">
        <div className="cap-profile-container">
          <Profile
            name={apiArr?.profile?.full_name}
            points={apiArr?.points_obtained}
            id={apiArr?.esummit_id}
            college={apiArr?.college}
            rank={rank}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default CapLayout;
