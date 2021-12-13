import CustomGradientBtn from "../customGradientBtn";
export const EventDashboardCard = () => {
  let isregistered = true;
  return (
    <div className="dashboard-event-main-container">
      <div className="dashboard-event-head">
        <div className="dashboard-event-name">Ideastorm</div>
        <div className={isregistered ? "dashboard-registered-event" : null}>
          <p>{isregistered ? "Registered" : null}</p>
        </div>
      </div>
      <div className="dashboard-event-desc">
        E-Summit being the flagship event of ECell, is held annually brings
        together the academic community, venture capitalists, new age
        entrepreneurs and all those passionate about entrepreneurship to common
        grounds and suggestions.
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
