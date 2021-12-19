import React from "react";
import Profile from "../../components/cap/cap_profile";
import Navbar from "../../components/dashboard/Navbar";
import { useMobile, useUpdateMobile } from "../../utils/MobileContext";
import { useEffect, useState } from "react";
import FetchApi from "../../utils/fetchAPI";
import { CA_PROFILE_API } from "../../utils/APIs";
import { getAuthToken } from "../../utils";
const CapLayout = ({ children }) => {
  const [Api_Arr, setApi_Arr] = useState(3);

  FetchApi("get", CA_PROFILE_API, null, getAuthToken())
  .then((res) => {
  
      setApi_Arr(res.data[0]);
      console.log(Api_Arr)
  
      
    
  
  })
  .catch((err) => {
    console.log(err);
  });





  const setMobile = useUpdateMobile();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setMobile();
  });
  return (
    <div className="cap-main-container">
      {useMobile().isMobile ? null : <Navbar />}

      <div className="cap-right-outer-container">
        {Api_Arr.length}
        <div className="cap-profile-container">
        {   /*Api_Arr.profile.full_name*/}
          <Profile name={   Api_Arr.profile.full_name}  points={Api_Arr.points_obtained} id={Api_Arr.esummit_id}/>
        </div>
        {children}
      </div>
    </div>
  );
};

export default CapLayout;
