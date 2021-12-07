import React, { useState, useRef, useLayoutEffect } from "react";
import Counter from "../components/section/counter";
import CustomGradientBtn from "../components/customGradientBtn";
import Link from "next/link";
import HomeSpeakers from "../components/home_page/home_speaker";
import HomeEvents from "../components/home_page/home_events";
import Faq from "../components/faq/faq";
import { ALL_EVENTS_API, SPEAKERS_API } from "../utils/APIs";
import FetchApi from "../utils/fetchAPI";

// export default function Home({ allEvents, allSpeakers }) {
//   return (
//     <div
//     // className="h-screen overflow-hidden bg-black text-white flex flex-col space-y-8 items-center justify-center"
//     >
//       <HomeSpeakers allSpeakers={allSpeakers} />
//       <Link href="/speakers" passHref>
//         <div className="home-view-all-button">
//           <CustomGradientBtn text="View All" color="black" />
//         </div>
//       </Link>

export default function Home({ allEvents, allSpeakers }) {
  const [animate, doAnimate] = useState(false);

  const ourRef = useRef(null);

  const disableScrolling = () => {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  };

  const enableScrolling = () => {
    window.onscroll = function () {};
  };

  const onScroll = () => {
    if (!process.browser) return;
    // const scrollPosition = window.scrollY;
    // console.log("yoyo:", scrollPosition, topPosition)
    doAnimate(true);
    window.scrollTo(0, 0);
  };

  useLayoutEffect(() => {
    if (!process.browser) return;
    disableScrolling();
    window.addEventListener("scroll", () => {
      doAnimate(true);
      setTimeout(() => enableScrolling(), 2000);
    });
  }, []);

  return (
    <div>
      <section className="flex items-start justify-between landing overflow-hidden">
        <img src="/leftLine.svg" alt="leftLine" />

        <div className="flex flex-col items-center text-center mx-auto">
          <p className="text-lg text-white font-bold uppercase">
            21-23 January
          </p>
          <h1 className="text-4xl text-white font-bold uppercase">
            E-summit '22
          </h1>
          <img src="/headLine.svg" id="headLine" alt="headLine" />
          <div className="flex justify-center relative">
            <div className="bg-dark text-white absolute w-full h-full z-10 mix-blend-multiply	"></div>
            <div className="bg-shine text-white absolute w-full h-full z-10 mix-blend-multiply	"></div>
            <img
              ref={ourRef}
              id="landingLogo"
              className={animate && "landing-logo-animate"}
              src="/landingLogo.png"
              alt="logo"
            />
          </div>
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
