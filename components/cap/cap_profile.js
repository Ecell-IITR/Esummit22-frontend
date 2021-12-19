import React from "react";
import { useState } from "react";
import FetchApi from "../../utils/fetchAPI";
import { CA_PROFILE_API } from "../../utils/APIs";
import { getAuthToken } from "../../utils";
export const Profile = ({name,points,id}) => {
  const [Api_Arr, setApi_Arr] = useState();
  const [Api_caller, setApi_caller] = useState(true);
  const [Loop_breaker, setLoop_breaker] = useState(true)
  
  
  

  return (
    <div className="profile-container">
      <div className="profile-image">
        <img id="avatar" src="v.png" />
      </div>

      <div className="profile-details">
        <div className="profile-details-name">
          <div className="profile-details-name-one"> { name }  </div>
          <div className="profile-details-name-points">{points}</div>
        </div>
        <div className="profile-details-name2">
          <div className="profile-white-text">Campus Ambassador</div>
          <img className="profile-circle" src="circle.png" />
          <div className="profile-white-text"> IIT Roorkee</div>
        </div>
        <div className="profile-details-name3">
          <div className="profile-white-text">ESummit ID</div>
          <div className="profile-golden-text">{id}</div>
          <img className="profile-circle" src="circle.png" />
          <div className="profile-white-text">Rank</div>
          <div className="profile-golden-text">286</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
