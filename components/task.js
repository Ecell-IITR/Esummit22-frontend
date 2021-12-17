import CustomGradientBtn from "./customGradientBtn";

export const Task = ({description,Due_date,points}) => {
  return (
    <div className="tasks-container">
      <div className="tasks-container-discription">
        {description}
      </div>
      <div className="tasks-container-date">Due Date: {Due_date}</div>
      <div className="tasks-container-share">
        <div className="tasks-container-share-button">
          <CustomGradientBtn text="Share" color="black" />
        </div>
        <div className="tasks-container-share-score">{points} points</div>
        <div className="tasks-container-share-button">
          <CustomGradientBtn text="Upload" color="black" />
        </div>
      </div>
    </div>
  );
};

export default Task;
