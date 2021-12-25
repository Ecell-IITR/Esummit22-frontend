import React, { useState, useRef, useLayoutEffect } from "react";
import Counter from "../components/section/counter";
import CustomGradientBtn from "../components/customGradientBtn";
import Link from "next/link";
import HomeSpeakers from "../components/home_page/home_speaker";
import HomeEvents from "../components/home_page/home_events";
import Faq from "../components/faq/faq";
import { ALL_EVENTS_API, SPEAKERS_API } from "../utils/APIs";
import FetchApi from "../utils/fetchAPI";

export default function Home({ allEvents, allSpeakers }) {
  const [animate, doAnimate] = useState(false);
  const ourRef = useRef(null);

  return (
    <div>
      <section className="flex items-start justify-between landing overflow-hidden">
        <img src="/leftLine.svg" alt="leftLine" />

        <div className="flex flex-col items-center text-center mx-auto">
          <img
            className="landing-page-text-png"
            src="webthemepng.png"
            alt="landing page text"
          />
          {/* <Link href="/register" passHref>
            <div className="landing-register-button">
              <CustomGradientBtn text="Register Now" color="black" />
            </div>
          </Link> */}
        </div>

        <img src="/rightLine.svg" alt="rightLine" />
      </section>
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
