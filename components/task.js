import CustomGradientBtn from "./customGradientBtn";

export const Task = () => {
  return (
    <div className="tasks-container">
      <div className="tasks-container-discription">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. It is the standard dummy text.Lorem Ipsum is simply dummy text
        of the printing and typesetting industry. It is the standard dummy text.
      </div>
      <div className="tasks-container-date">Due Date: 25/11/20</div>
      <div className="tasks-container-share">
        <div className="tasks-container-share-button">
          <CustomGradientBtn text="Share" color="black"/>
        </div>
        <div className="tasks-container-share-score">10 points</div>
        <div className="tasks-container-share-button">
          <CustomGradientBtn text="Upload" color="black" />
        </div>
      </div>
    </div>
  );
};

export default Task;
