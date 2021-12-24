import CustomGradientBtn from "./../customGradientBtn";
import Link from 'next/link'
export const EventDashboardCard = ({title,isregistered,desc,link}) => {
let x="/events/"+link
  return (
    <div className="dashboard-event-main-container">
      <div className="dashboard-event-head">
        <div className="dashboard-event-name">{title}</div>
        <div className={isregistered ? "dashboard-registered-event" : null}>
          <p>{isregistered ? "Registered" : null}</p>
        </div>
      </div>
      <div className="dashboard-event-desc" dangerouslySetInnerHTML={{
                      __html: desc,
                    }}>
        
      </div>
      <div className="dashboard-event-visit-page">
        <div className="dashboard-event-CustomGradientBtn">
          {console.log("/events/"+link)}
          <Link href={x}><div><CustomGradientBtn color="black" text="Visit Page" /></div></Link>
        </div>
      </div>
    </div>
  );
};

export default EventDashboardCard;

