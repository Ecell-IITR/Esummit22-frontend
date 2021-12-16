import TransparentGradientButton from "../../transparentGradientButton";
export const EventHead = ({ detailsEvents }) => {
  return (
    <div className="event-head">
      <div className="event-image-container">
        <img
          className="event-image"
          src={detailsEvents[0].background_image}
          alt="ideastorm"
        />
        <div>
          <button className="previous-event-button" >
            <img className="previous-next" src="/previous.png" alt="previous" />
            previous
          </button>
        </div>
        <div>
          <button className="next-event-button">
            <img className="previous-next" src="/next.png" alt="next" />
            next
          </button>
        </div>
        <div className="centered">
          <div className="event-name">{detailsEvents[0].event_name}</div>
          <div
            className="event-desc"
            dangerouslySetInnerHTML={{
              __html: detailsEvents[0].card_description,
            }}
          />
          <TransparentGradientButton text="apply now" />
        </div>
      </div>
    </div>
  );
};

export default EventHead;
