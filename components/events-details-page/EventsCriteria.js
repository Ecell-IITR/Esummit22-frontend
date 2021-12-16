import React from "react";

function EventCriteria({ detailsEvents }) {
  return (
    <div className="Event-rules-main-container">
      <div className="Event-rules-list">
        {detailsEvents[0].event_rounds.map((det) => {
          return (
            <div className="event_rule_loop">
              <img src="/Ellipse91.png" className="Event_ellipse_rule" alt="" />{" "}
              <div
                className="Event_rule_text"
                dangerouslySetInnerHTML={{
                  __html: det.round_eligibility,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EventCriteria;
