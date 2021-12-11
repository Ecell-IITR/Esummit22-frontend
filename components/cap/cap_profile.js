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
          <div className="profile-white-text">Campus Ambassador</div>
          <img className="profile-circle" src="circle.png" />
          <div className="profile-white-text"> IIT Roorkee</div>
        </div>
        <div className="profile-details-name3">
          <div className="profile-white-text">ESummit ID</div>
          <div className="profile-golden-text">ES21CA1234</div>
          <img className="profile-circle" src="circle.png" />
          <div className="profile-white-text">Rank</div>
          <div className="profile-golden-text">286</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
