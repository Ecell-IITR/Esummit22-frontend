import Content from "../../components/content";
import CustomGradientBtn from "../../components/customGradientBtn";
import EventCoordinator from "../../components/events-details-page/EventCoordinator";
import EventCriteria from "../../components/events-details-page/EventsCriteria";
import EventsFaq from "../../components/events-details-page/EventsFaq";
import EventSponsor from "../../components/events-details-page/EventSponsors";
import EventHeader from "../../components/Events/EventHead";
import Eventrules from "../../components/Events/eventRules";
import Perk from "../../components/perks";
import Timeline_card from "../../components/timeline";

export default function EventsDetails({ detailsEvents }) {
  return (
    <div className="event_detail_container">
      <EventHeader detailsEvents={detailsEvents} />
      <Content detailsEvents={detailsEvents} />
      <div className="details_container">
        <div className="details_about">ABOUT</div>
        <div
          className="details_about_content"
          id="timeline"
          dangerouslySetInnerHTML={{
            __html: detailsEvents[0].card_description,
          }}
        />
      </div>

      {detailsEvents[0].event_rounds.length > 0 ? (
        <div className="details_speaker_container">
          <div className="details_about">TIMELINE</div>
          <div className="details_timeline">
            <Timeline_card detailsEvents={detailsEvents} />
          </div>
        </div>
      ) : null}

      {detailsEvents[0].event_rounds.length > 0 ? (
        <div className="details_speaker_container" id="criteria">
          <div className="details_about">ELIGIBILITY CRITERIA</div>
          <div className="details_rule">
            <EventCriteria detailsEvents={detailsEvents} />
          </div>
        </div>
      ) : null}

      {detailsEvents[0].event_perks.length > 0 ? (
        <div className="details_container" id="perks">
          <div className="details_about">PERKS</div>
          <div className="details_perks">
            <Perk detailsEvents={detailsEvents} />
          </div>
        </div>
      ) : null}

      {detailsEvents[0].event_rules.length > 0 ? (
        <div className="details_container" id="rules">
          <div className="details_about">RULES</div>
          <div className="details_rule">
            <Eventrules detailsEvents={detailsEvents} />
          </div>
        </div>
      ) : null}

      {detailsEvents[0].event_partners.length > 0 ? (
        <div className="details_container" id="sponsors">
          <div className="details_about">SPONSORS</div>
          <div className="details_sponsors">
            <EventSponsor detailsEvents={detailsEvents} />
          </div>
        </div>
      ) : null}

      {detailsEvents[0].event_faqs.length > 0 ? (
        <div className="details_container" id="faqs">
          <div className="details_about">FAQs</div>
          <div className="details_sponsors">
            <EventsFaq detailsEvents={detailsEvents} />
          </div>
        </div>
      ) : null}
      <div className="details_apply_now_button">
        <div className="details_apply_now">
          <CustomGradientBtn text="Apply Now" color="Black" />
        </div>
      </div>
      {detailsEvents[0].events_coordinators.length > 0 ? (
        <div className="details_container" id="contacts">
          <div className="details_about">EVENTS COORDINATORS</div>
          <EventCoordinator detailsEvents={detailsEvents} />
        </div>
      ) : null}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://api.esummit.in/events/${params.slug}`);
  const detailsEvents = await response.json();

  return {
    props: {
      detailsEvents,
    },
  };
}
