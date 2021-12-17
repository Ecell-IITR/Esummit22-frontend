import { useState } from "react";
import CustomGradientBtn from "./customGradientBtn";
import Share from "./dashboard/share_popup";

export const Task = ({ description, Due_date, points }) => {
  const [changeModal, setChangeModal] = useState(false);
  
  return (
    <div className="tasks-container">
      <div className="tasks-container-discription">{description}</div>
      <div className="tasks-container-date">Due Date: {(new Date(Due_date)).toDateString()}</div>
      <div className="tasks-container-share">
        <div className="tasks-container-share-button" onClick={() => {
              setChangeModal(true);
            }}>
          <CustomGradientBtn text="Share" color="black" />
        </div>
        <div className="tasks-container-share-score">{points} points</div>
        <div className="tasks-container-share-button" >
          <CustomGradientBtn text="Upload" color="black" />

        </div>
      </div>
      <div>{changeModal && <Share closeModal={setChangeModal} />}</div>
    </div>
  );
};

export default Task;
