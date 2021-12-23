import CustomGradientBtn from "../customGradientBtn";
export const EventDashboardCard = ({title,desc,isregistered}) => {
  
  return (
    <div className="dashboard-event-main-container">
      <div className="dashboard-event-head">
        <div className="dashboard-event-name">{title}</div>
        <div className={isregistered ? "dashboard-registered-event" : null}>
          <p>{isregistered ? "Registered" : null}</p>
        </div>
      </div>
      <div className="dashboard-event-desc">
        {desc}
      </div>
      <div className="dashboard-event-visit-page">
        <div className="dashboard-event-CustomGradientBtn">
          <CustomGradientBtn color="black" text="Visit Page" />
        </div>
      </div>
    </div>
  );
};

export default EventDashboardCard;
