import React from "react";

export const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img id="avatar" src="v.png" />
      </div>

      <div className="profile-details">
        <div className="profile-details-name">
          <div className="profile-details-name-one">Vaibhav Khandelwal</div>
          <div className="profile-details-name-points">110 points</div>
        </div>
        <div className="profile-details-name2">
          <div className="white-text">Campus Ambassador</div>
          <img className="profile-circle" src="circle.png" />
          <div className="white-text"> IIT Roorkee</div>
        </div>
        <div className="profile-details-name2">
          <div className="white-text">ESummit ID</div>
          <div className="golden-text">ES21CA1234</div>
          <img className="profile-circle" src="circle.png" />
          <div className="white-text">Rank</div>
          <div className="golden-text">286</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
