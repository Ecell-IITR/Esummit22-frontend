import Counter from "../components/section/counter";
import CustomGradientBtn from "../components/customGradientBtn";
import Link from "next/link";
import HomeSpeakers from "../components/home_page/home_speaker";
import HomeEvents from "../components/home_page/home_events";
import Faq from "../components/faq/faq";
import { ALL_EVENTS_API, SPEAKERS_API } from "../utils/APIs";
import FetchApi from "../utils/fetchAPI";

export default function Home({ allEvents, allSpeakers }) {
  return (
    <div
    // className="h-screen overflow-hidden bg-black text-white flex flex-col space-y-8 items-center justify-center"
    >
      <HomeSpeakers allSpeakers={allSpeakers} />
      <Link href="/speakers" passHref>
        <div className="home-view-all-button">
          <CustomGradientBtn text="View All" color="black" />
        </div>
      </Link>
      <Counter />
      {"  "}
      <HomeEvents allEvents={allEvents} />
      <Link href="/events" passHref>
        <div className="home-view-all-button">
          <CustomGradientBtn text="View All" color="black" />
        </div>
      </Link>
      <Faq />
    </div>
  );
}

export async function getServerSideProps() {
  const get_all_events = await fetch(ALL_EVENTS_API);
  const get_all_speakers = await fetch(SPEAKERS_API);

  const allEvents = await get_all_events.json();
  const allSpeakers = await get_all_speakers.json();

  return {
    props: {
      allEvents,
      allSpeakers,
    },
  };
}
