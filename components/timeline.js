import React, { useState } from "react";

const Timeline_card = () => {
  const [round, setRound] = useState(1);
  return (
    <div className="EventsTimeline-container">
      <div className="EventsTimeline-header">TIMELINE</div>
      <div className="EventsTimeline-subcontainer">
        <div className="EventsTimeline-subcontainer-rounds-heading">
          <div
            className="EventsTimeline-subcontainer-rounds-heading-icon"
            onClick={() => setRound(1)}
          >
            <img
              className={` ${
                round === 1 ? "Timeline-img" : "Timeline-nodisplay"
              }`}
              src="Group.svg"
            />
            <div
              className={`Rounds-container ${
                round === 1 ? "timelineRounds-active" : null
              }`}
            >
              ROUND 1
            </div>
          </div>

          <img className="Timeline-Intersect" src="Intersect.svg" />

          <div
            className="EventsTimeline-subcontainer-rounds-heading-icon"
            onClick={() => setRound(2)}
          >
            <img
              className={` ${
                round === 2 ? "Timeline-img" : "Timeline-nodisplay"
              }`}
              src="Group.svg"
            />
            <div
              className={`Rounds-container ${
                round === 2 ? "timelineRounds-active" : null
              }`}
            >
              ROUND 2
            </div>
          </div>
          <img className="Timeline-Intersect" src="Intersect.svg" />

          <div
            className="EventsTimeline-subcontainer-rounds-heading-icon"
            onClick={() => setRound(3)}
          >
            <img
              className={` ${
                round === 3 ? "Timeline-img" : "Timeline-nodisplay"
              }`}
              src="Group.svg"
            />
            <div
              className={`Rounds-container ${
                round === 3 ? "timelineRounds-active" : null
              }`}
            >
              ROUND 3
            </div>
          </div>

          <img className="Timeline-Intersect" src="Intersect.svg" />

          <div
            className="EventsTimeline-subcontainer-rounds-heading-icon"
            onClick={() => setRound(4)}
          >
            <img
              className={` ${
                round === 4 ? "Timeline-img" : "Timeline-nodisplay"
              }`}
              src="Group.svg"
            />
            <div
              className={`Rounds-container ${
                round === 4 ? "timelineRounds-active" : null
              }`}
            >
              ROUND 4
            </div>
          </div>
        </div>

        <div className="EventsTimeline-subcontainer-rounds-description">
          <div id="rounds-description-heading">Round {round}</div>

          <div id="rounds-description-content">
            E-Summit being the flagship event of ECell, is held annually brings
            together the academic community, venture capitalists, new age
            entrepreneurs and all those passionate about entrepreneurship to
            common grounds. E-Summit being the flagship event of ECell, is held
            annually brings together the academic community, venture
            capitalists. E-Summit being the flagship event of ECell, is held
            annually brings together the academic community, venture
            capitalists, and new age entrepreneurs.
          </div>
        </div>
        <div className="EventsTimeline-subcontainer-round-details">
          <div className="EventsTimeline-subcontainer-round-details-content">
            <div className="EventsTimeline-subcontainer-round-details-content-heading">
              EVENT TYPE
            </div>
            <div className="EventsTimeline-subcontainer-round-details-content-description">
              Idea Building Competiton
            </div>
          </div>
          <div className="EventsTimeline-subcontainer-round-details-content">
            <div className="EventsTimeline-subcontainer-round-details-content-heading">
              REGISTRATION
            </div>
            <div className="EventsTimeline-subcontainer-round-details-content-description">
              Registrations close: 7th November
            </div>
          </div>
          <div className="EventsTimeline-subcontainer-round-details-content">
            <div className="EventsTimeline-subcontainer-round-details-content-heading">
              DATE
            </div>
            <div className="EventsTimeline-subcontainer-round-details-content-description">
              7th January
            </div>
          </div>
        </div>
        <div className="EventsTimeline-subcontainer-round-logo">
          <img
            className="EventsTimeline-subcontainer-round-logo-image"
            src="timelineicon.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline_card;
