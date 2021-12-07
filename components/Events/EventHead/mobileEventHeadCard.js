import TransparentGradientButton from "../../transparentGradientButton";
export const MobileEventHead = () => {
  return (
    <div className="mobile-event-head">
      <div className="mobile-event-image-container">
        <img
          className="mobile-event-image"
          src="mobileEventHead.png"
          alt="ideastorm"
        />
        <div>
          <button className="mobile-previous-event-button">
            <img src="previous.png" alt="previous" />
            <span>previous</span>
          </button>
        </div>
        <div>
          <button className="mobile-next-event-button">
            <img src="next.png" alt="next" />
            <span>next</span>
          </button>
        </div>
        <div className="mobile-centered">
          <div className="mobile-event-name">ideastorm</div>
          <div className="mobile-event-desc">
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

export default MobileEventHead;
