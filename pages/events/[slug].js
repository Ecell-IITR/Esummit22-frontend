import Content from '../../components/content';
import CustomGradientBtn from '../../components/customGradientBtn';
import EventCoordinator from '../../components/events-details-page/EventCoordinator';
import EventCriteria from '../../components/events-details-page/EventsCriteria';
import EventsFaq from '../../components/events-details-page/EventsFaq';
import EventSponsor from '../../components/events-details-page/EventSponsors';
import EventHeader from '../../components/Events/EventHead';
import Eventrules from '../../components/Events/eventRules';
import Perk from '../../components/perks';
import Timeline_card from '../../components/timeline';
import { ALL_EVENTS_API } from '../../utils/APIs';
import React, { useState } from 'react';
import Apply from './applypopup';
import { NextSeo } from 'next-seo';
import { stripHtml } from 'string-strip-html';

export default function EventsDetails({
  detailsEvents,
  CompetitiveEvents,
  SpeakingEvents,
  WorkshopEvents,
}) {
  const [Show, setShow] = useState(false);
  return (
    <div className='event_detail_container'>
      <NextSeo
        title={'E-Summit 22 | ' + detailsEvents[0].event_name}
        description={stripHtml(detailsEvents[0].card_description).result}
        canonical={`https://www.esummit.in/events/${detailsEvents[0].end_point}`}
        openGraph={{
          url: `https://www.esummit.in/events/${detailsEvents[0].end_point}`,
          title: detailsEvents[0].card_name,
          description: stripHtml(detailsEvents[0].card_description).result,
          images: [
            {
              url: detailsEvents[0].background_image,
              alt: detailsEvents[0].end_point,
              type: 'image/jpeg/png',
            },
          ],
          site_name: `${detailsEvents[0].event_name} | E-Summit 22 IITR`,
        }}
      />
      {detailsEvents[0].event_seo != '' ||
      detailsEvents[0].event_seo != null ? (
        <NextSeo
          additionalMetaTags={[
            {
              name: 'keywords',
              content: detailsEvents[0].event_seo,
            },
          ]}
        />
      ) : null}
      <EventHeader
        detailsEvents={detailsEvents}
        CompetitiveEvents={CompetitiveEvents}
        SpeakingEvents={SpeakingEvents}
        WorkshopEvents={WorkshopEvents}
        Show={Show}
        setShow={setShow}
      />
      <Apply Show={Show} setShow={setShow} detailsEvents={detailsEvents} />
      <Content detailsEvents={detailsEvents} />
      <div className='details_container'>
        <div className='details_about'>ABOUT</div>
        <div
          className='details_about_content'
          id='timeline'
          dangerouslySetInnerHTML={{
            __html: detailsEvents[0].description,
          }}
        />
      </div>

      {detailsEvents[0].event_rounds.length > 0 ? (
        <div className='details_speaker_container'>
          <div className='details_about'>TIMELINE</div>
          <div className='details_timeline'>
            <Timeline_card detailsEvents={detailsEvents} />
          </div>
        </div>
      ) : null}

      {detailsEvents[0].event_rounds.length > 0 ? (
        <div className='details_speaker_container' id='criteria'>
          <div className='details_about'>ELIGIBILITY CRITERIA</div>
          <div className='details_rule'>
            <EventCriteria detailsEvents={detailsEvents} />
          </div>
        </div>
      ) : null}

      {detailsEvents[0].event_perks.length > 0 ? (
        <div className='details_container' id='perks'>
          <div className='details_about'>PERKS</div>
          <div className='details_perks'>
            <Perk detailsEvents={detailsEvents} />
          </div>
        </div>
      ) : null}

      {detailsEvents[0].event_rules.length > 0 ? (
        <div className='details_container' id='rules'>
          <div className='details_about'>RULES</div>
          <div className='details_rule'>
            <Eventrules detailsEvents={detailsEvents} />
          </div>
        </div>
      ) : null}

      {detailsEvents[0].event_partners.length > 0 ? (
        <div className='details_container' id='sponsors'>
          <div className='details_about'>SPONSORS</div>
          <div className='details_sponsors'>
            {detailsEvents[0].event_partners.map((det, id) => {
              return (
                <EventSponsor img={det.image} title={det.title} key={id} />
              );
            })}
          </div>
        </div>
      ) : null}

      {detailsEvents[0].event_faqs.length > 0 ? (
        <div className='details_container' id='faqs'>
          <div className='details_about'>FAQs</div>
          <div className='details_sponsors'>
            <EventsFaq detailsEvents={detailsEvents} />
          </div>
        </div>
      ) : null}
      <div className='details_apply_now_button'>
        <div
          onClick={() => {
            setShow(true);
          }}
          className='details_apply_now'
        >
          <CustomGradientBtn text='Apply Now' color='Black' />
        </div>
      </div>
      {detailsEvents[0].events_coordinators.length > 0 ? (
        <div className='details_container' id='contacts'>
          <div className='details_about'>EVENTS COORDINATORS</div>
          <EventCoordinator detailsEvents={detailsEvents} />
        </div>
      ) : null}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://api.esummit.in/events/${params.slug}`);
  const detailsEvents = await response.json();
  const res = await fetch(ALL_EVENTS_API);
  const { CompetitiveEvents, SpeakingEvents, WorkshopEvents } =
    await res.json();

  return {
    props: {
      detailsEvents,
      CompetitiveEvents,
      SpeakingEvents,
      WorkshopEvents,
    },
  };
}
