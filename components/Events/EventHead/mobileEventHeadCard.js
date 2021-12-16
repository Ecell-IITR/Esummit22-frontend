import TransparentGradientButton from "../../transparentGradientButton";
export const MobileEventHead = ({ detailsEvents }) => {
  return (
    <div className="mobile-event-head">
      <div className="mobile-event-image-container">
        {console.log(detailsEvents[0].event_name)}
        <img
          className="mobile-event-image"
          src={detailsEvents[0].background_image}
          alt="ideastorm"
        />
        {/* <div>
          <button className="mobile-previous-event-button">
            <img src="/previous.png" alt="previous" />
            <span>previous</span>
          </button>
        </div>
        <div>
          <button className="mobile-next-event-button">
            <img src="/next.png" alt="next" />
            <span>next</span>
          </button>
        </div> */}
        <div className="mobile-centered">
          <div className="mobile-event-name">{detailsEvents[0].event_name}</div>
          <div
            className="mobile-event-desc"
            dangerouslySetInnerHTML={{
              __html: detailsEvents[0].card_description,
            }}
          />
          <div className="transparent_apply_now">
            <TransparentGradientButton text="apply now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileEventHead;
