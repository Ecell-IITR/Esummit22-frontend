import React, { useState } from "react";
import moment from "moment";

const Timeline_card = ({ detailsEvents }) => {
  const [round, setRound] = useState(1);
  return (
    <div className="EventsTimeline-container">
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
              src="/Group.svg"
              alt="timeline icon"
            />
            <div
              className={`Rounds-container ${
                round === 1 ? "timelineRounds-active" : null
              }`}
            >
              ROUND 1
            </div>
          </div>
          {detailsEvents[0].event_rounds.length - 1 > 0 ? (
            <>
              <img
                className="Timeline-Intersect"
                src="/Intersect.svg"
                alt="timeline intersect image"
              />

              <div
                className="EventsTimeline-subcontainer-rounds-heading-icon"
                onClick={() => setRound(2)}
              >
                <img
                  className={` ${
                    round === 2 ? "Timeline-img" : "Timeline-nodisplay"
                  }`}
                  src="/Group.svg"
                  alt="timeline icon"
                />
                <div
                  className={`Rounds-container ${
                    round === 2 ? "timelineRounds-active" : null
                  }`}
                >
                  ROUND 2
                </div>
              </div>
              {detailsEvents[0].event_rounds.length - 2 > 0 ? (
                <>
                  <img className="Timeline-Intersect" src="/Intersect.svg" />

                  <div
                    className="EventsTimeline-subcontainer-rounds-heading-icon"
                    onClick={() => setRound(3)}
                  >
                    <img
                      className={` ${
                        round === 3 ? "Timeline-img" : "Timeline-nodisplay"
                      }`}
                      src="/Group.svg"
                      alt="timeline icon"
                    />
                    <div
                      className={`Rounds-container ${
                        round === 3 ? "timelineRounds-active" : null
                      }`}
                    >
                      ROUND 3
                    </div>
                  </div>
                </>
              ) : null}
            </>
          ) : null}
        </div>

        <div className="EventsTimeline-subcontainer-rounds-description">
          <div id="rounds-description-heading">Round {round}</div>

          <div
            id="rounds-description-content"
            dangerouslySetInnerHTML={{
              __html: detailsEvents[0].event_rounds[round - 1].tasks,
            }}
          />
        </div>

        <div className={"EventsTimeline-subcontainer-round-details"}>
          <div className="EventsTimeline-subcontainer-round-details-content">
            <div className="EventsTimeline-subcontainer-round-details-content-heading">
              EVENT TYPE
            </div>
            <div className="EventsTimeline-subcontainer-round-details-content-description">
              {detailsEvents[0].tagline}
            </div>
          </div>
          <div className="EventsTimeline-subcontainer-round-details-content">
            <div className="EventsTimeline-subcontainer-round-details-content-heading">
              REGISTRATION STARTS
            </div>
            <div className="EventsTimeline-subcontainer-round-details-content-description">
              Registrations starts:{" "}
              {moment(
                detailsEvents[0].event_rounds[
                  round - 1
                ].start_date_time.toLocaleString("en-US")
              ).format("Do MMMM")}
            </div>
          </div>
          <div className="EventsTimeline-subcontainer-round-details-content">
            <div className="EventsTimeline-subcontainer-round-details-content-heading">
              REGISTRATION CLOSES
            </div>
            <div className="EventsTimeline-subcontainer-round-details-content-description">
              Registrations closes:{" "}
              {moment(
                detailsEvents[0].event_rounds[
                  round - 1
                ].end_date_time.toLocaleString("en-US")
              ).format("Do MMMM")}
            </div>
          </div>
        </div>
        <div className="EventsTimeline-subcontainer-round-logo">
          <img
            className="EventsTimeline-subcontainer-round-logo-image"
            src="/timelineicon.png"
            alt="timeline icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline_card;
