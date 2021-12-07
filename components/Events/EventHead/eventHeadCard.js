import TransparentGradientButton from "../../transparentGradientButton";
export const EventHead = () => {
  return (
    <div className="event-head">
      <div className="event-image-container">
        <img className="event-image" src="ideastorm.png" alt="ideastorm" />
        <div>
          <button className="previous-event-button">
            <img className="previous-next" src="previous.png" alt="previous" />
            previous
          </button>
        </div>
        <div>
          <button className="next-event-button">
            <img className="previous-next" src="next.png" alt="next" />
            next
          </button>
        </div>
        <div className="centered">
          <div className="event-name">ideastorm</div>
          <div className="event-desc">
            Do you have an idea that can change the way people use smartphones?
            Present it here and get your idea to the current top investors of
            the country so they can invest in it. Fun, right?
          </div>
          <TransparentGradientButton text="apply now" />
        </div>
      </div>
    </div>
  );
};

export default EventHead;
