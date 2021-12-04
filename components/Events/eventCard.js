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

export const EventCard = () => {
  return (
    <div className="event-container">
      <img src="eventImg.png" className="event-card-image" alt="event" />
      <div className="event-hovered">
        <div className="event-card-name">IDEASTORM</div>
        <div className="event-card-para">
          <div
            className="event-card-para-des"
            dangerouslySetInnerHTML={{
              __html:
                "Lorem Ispum ajfbiau augfhuas asuifau aiusfa ajwo abjfia asbfja afbjoa  jafsaf",
            }}
          />
          <div className="View_more">View More</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
