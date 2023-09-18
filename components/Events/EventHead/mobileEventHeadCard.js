import TransparentGradientButton from '../../transparentGradientButton';
export const MobileEventHead = ({ detailsEvents, CompetitiveEvents }) => {
  const getPreviousEventLink = () => {
    let previousLink = '';
    CompetitiveEvents?.map((event, index) => {
      if (event.id === detailsEvents[0].id) {
        if (index === 0) {
          previousLink =
            CompetitiveEvents[CompetitiveEvents.length - 1].end_point;
        } else {
          previousLink = CompetitiveEvents[index - 1].end_point;
        }
      }
    });
    return previousLink;
  };
  const getPreviousEventName = () => {
    let previousName = '';
    CompetitiveEvents?.map((event, index) => {
      if (event.id === detailsEvents[0].id) {
        if (index === 0) {
          previousName =
            CompetitiveEvents[CompetitiveEvents.length - 1].event_name;
        } else {
          previousName = CompetitiveEvents[index - 1].event_name;
        }
      }
    });
    return previousName;
  };

  const getNextEventLink = () => {
    let NextLink = '';
    CompetitiveEvents?.map((event, index) => {
      if (event.id === detailsEvents[0].id) {
        if (index === CompetitiveEvents.length - 1) {
          NextLink = CompetitiveEvents[0].end_point;
        } else {
          NextLink = CompetitiveEvents[index + 1].end_point;
        }
      }
    });
    return NextLink;
  };

  const getNextEventName = () => {
    let NextName = '';
    CompetitiveEvents?.map((event, index) => {
      if (event.id === detailsEvents[0].id) {
        if (index === CompetitiveEvents.length - 1) {
          NextName = CompetitiveEvents[0].event_name;
        } else {
          NextName = CompetitiveEvents[index + 1].event_name;
        }
      }
    });
    return NextName;
  };

  return (
    <div className='mobile-event-head'>
      <div className='mobile-event-image-container'>
        <img
          className='mobile-event-image'
          src={detailsEvents[0].background_image}
          alt='ideastorm'
        />
        {/* <div>
          <button className="previous-event-button">
            <Link href={`/events/${getPreviousEventLink()}`} passHref>
              <img
                className="previous-next"
                src="/previous.png"
                alt="previous"
              />
            </Link>
            {getPreviousEventName()}
          </button>
        </div>
        <div>
          <button className="next-event-button">
            <Link href={`/events/${getNextEventLink()}`} passHref>
              <img className="previous-next" src="/next.png" alt="next" />
            </Link>
            {getNextEventName()}
          </button>
        </div> */}
        <div className='mobile-centered'>
          <div className='mobile-event-name'>{detailsEvents[0].event_name}</div>
          <div
            className='mobile-event-desc'
            dangerouslySetInnerHTML={{
              __html: detailsEvents[0].card_description,
            }}
          />
          <div className='transparent_apply_now'>
            <TransparentGradientButton text='apply now' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileEventHead;
