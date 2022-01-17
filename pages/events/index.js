import EventCard from '../../components/Events/eventCard';
import { ALL_EVENTS_API } from '../../utils/APIs';
import Footer from '../../components/footer';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
export const Events = ({
  CompetitiveEvents,
  SpeakingEvents,
  WorkshopEvents,
}) => {
  return (
    <div>
      <Head className='main-h1'>
          <h1 >E-summit 22 IIT Roorkee Events Page</h1>
          <link rel="alternate" href="https://www.esummit.in/events" hreflang="en-in" /></Head>
      <NextSeo
        title={'E-Summit 22 | Events '}
        description={
          "Events including but not limted to Productathon, Ideastorm, Sale-Able, Investors' Vista, Startup Expo, Design Case Challenge"
        }
        canonical={`https://www.esummit.in/events`}
        openGraph={{
          url: `https://www.esummit.in/events`,
          title: 'E-Summit 22 | Events ',
          description:
            "Events including but not limted to Productathon, Ideastorm, Sale-Able, Investors' Vista, Startup Expo, Design Case Challenge",
          images: [
            {
              url: 'https://www.esummit.in/Esummit_logo.png',
              alt: 'logo',
              type: 'image/jpeg/png',
            },
          ],
          site_name: `Events | E-Summit 22 IITR`,
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'esummit, e-summit, iit roorkee, conclave, Startup expo, Ideastorm, Investors Vista, Saleable, product-a-thon, speaker, events ',
          },
        ]}
      />
      <div className='events-page-heading'>
        <h1>EVENTS</h1>
      </div>
      <div className='esummit-events-page'>
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
      <Footer />
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
