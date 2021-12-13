import EventCard from "../components/Events/eventCard";
import { ALL_EVENTS_API } from "../utils/APIs";

export const Events = ({
  CompetitiveEvents,
  SpeakingEvents,
  WorkshopEvents,
}) => {
  return (
    <div>
      <div className="events-page-heading">
        <h1>EVENTS</h1>
      </div>
      <div className="esummit-events-page">
        {CompetitiveEvents.map((event) => (
          <EventCard
            key={event.id}
            event_name={event.event_name}
            background_image={event.card_image}
            card_description={event.card_description}
            slug={event.end_point}
          />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(ALL_EVENTS_API);
  const { CompetitiveEvents, SpeakingEvents, WorkshopEvents } =
    await res.json();

  return {
    props: {
      CompetitiveEvents,
      SpeakingEvents,
      WorkshopEvents,
    },
  };
}

export default Events;
