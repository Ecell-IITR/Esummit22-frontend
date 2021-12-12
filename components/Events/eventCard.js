// import Link from "next/link"
// export const EventCard = () => {
//     return(
//         <div className="event-container">
//               <img src= "eventImg.png" className="event-card-image" alt="event" />
//                    <div className="event-hovered">
//                      <div className="event-card-name" id="hovered-name-event-card">
//                          IDEASTORM
//                      </div>
//                      <div className="event-card-para">
//                          <div
//                          className="event-card-para-des"
//                          dangerouslySetInnerHTML={{ __html: "<p>THERE IS 1 NEW MESSAGE IN YOUR EMAIL QUARANTINE SINCE YOU RECEIVED YOUR LAST SPAM QUARANTINE</p>" }}
//                          />
//                          <div className="View_more">View More</div>
//                      </div>
//                     </div>
//          </div>
//     );
// }

// export default EventCard;

import Link from "next/link";

export const EventCard = ({ background_image, event_name, card_description }) => {
  return (
    <div className="event-container">
      <img src={background_image} className="event-card-image" alt="event" />
      <div className="event-hovered">
        <div className="event-card-name">{event_name}</div>
        <div className="event-card-para">
          <div
            className="event-card-para-des"
            dangerouslySetInnerHTML={{
              __html: card_description,
            }}
          />
          <div className="View_more">View More</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
