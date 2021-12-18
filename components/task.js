import { useState } from "react";
import CustomGradientBtn from "./customGradientBtn";
import Share from "./dashboard/share_popup";
import Upload from "./dashboard/upload_popup";

export const Task = ({ description, Due_date, points }) => {
  const [changeShareModal, setChangeShareModal] = useState(false);
  const [changeUploadModal, setChangeUploadModal] = useState(false);

  return (
    <div>
      <div
        className="tasks-container"
        style={{
          filter: changeShareModal || changeUploadModal ? "blur(2px)" : "none",
        }}
      >
        <div className="tasks-container-discription">{description}</div>
        <div className="tasks-container-date">
          Due Date: {new Date(Due_date).toDateString()}
        </div>
        <div className="tasks-container-share">
          <div
            className="tasks-container-share-button"
            onClick={() => {
              setChangeShareModal(true);
            }}
          >
            <CustomGradientBtn text="Share" color="black" />
          </div>
          <div className="tasks-container-share-score">{points} points</div>
          <div
            className="tasks-container-share-button"
            onClick={() => {
              setChangeUploadModal(true);
            }}
          >
            <CustomGradientBtn text="Upload" color="black" />
          </div>
        </div>
      </div>
      <div>
        <div>
          {changeShareModal && <Share closeShareModal={setChangeShareModal} />}
        </div>
        <div>
          {changeUploadModal && (
            <Upload closeUploadModal={setChangeUploadModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
