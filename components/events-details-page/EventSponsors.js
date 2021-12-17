import React from "react";

export const EventSponsor = ({ detailsEvents }) => {
  return (
    <div className="sponsor_main">
      <div className="img_div_behind">
        <div className="img_div_front">
          <img src={detailsEvents[0].event_partners[0].image} alt=" "></img>
        </div>
      </div>
      <div className="title_sponsor">
        <h1>{detailsEvents[0].event_partners[0].title}</h1>
      </div>
    </div>
  );
};

export default EventSponsor;
