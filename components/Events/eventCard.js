import Link from 'next/link';

export const EventCard = ({
  background_image,
  event_name,
  card_description,
  slug,
}) => {
  return (
    <div className='event-container'>
      <img src={background_image} className='event-card-image' alt={`e-summit's ${event_name} image `} />
      <div className='event-hovered'>
        <h3 className='event-card-name'>{event_name}</h3>
        <div className='event-card-para'>
          <div
            className='event-card-para-des'
            dangerouslySetInnerHTML={{
              __html: card_description,
            }}
          />
          <Link href={`/events/${slug}`} passHref>
            <div className='View_more'>View More</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
