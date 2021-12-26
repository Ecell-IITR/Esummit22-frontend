import React, { useState, useRef, useContext } from "react";
import Counter from "../components/section/counter";
import CustomGradientBtn from "../components/customGradientBtn";
import Link from "next/link";
import HomeSpeakers from "../components/home_page/home_speaker";
import HomeEvents from "../components/home_page/home_events";
import Faq from "../components/faq/faq";
import { ALL_EVENTS_API, SPEAKERS_API } from "../utils/APIs";
import FetchApi from "../utils/fetchAPI";
import { getUserRoleType } from "../utils";
import { AuthContext } from "../utils/auth-context";

export default function Home({ allEvents, allSpeakers }) {
  const [animate, doAnimate] = useState(false);
  const ourRef = useRef(null);
  const { user } = useContext(AuthContext);
  const roleType = getUserRoleType();

  return (
    <div>
      <section className="flex items-start justify-center landing overflow-hidden">
        <img src="/leftLine.svg" alt="leftLine" className="mainPage_side_img" />

        <div className="flex flex-col items-center text-center mx-auto">
          <p className="text-lg text-white font-bold uppercase heading-date">
            21-23 January
          </p>
          <h1 className="text-4xl text-white font-bold uppercase heading-esummit">
            E-summit&apos;22
          </h1>
          <img src="/headLine.svg" id="headLine" alt="headLine" />
          {!user ? (
            <Link href="/register" passHref>
              <div className="landing-register-button">
                {/* <CustomGradientBtn text="Register Now" color="black" /> */}
                Register Now
              </div>
            </Link>
          ) : (
            <>
              {roleType === "CA" ? (
                <Link href="/cap/tasks" passHref>
                  <div className="landing-register-button">
                    {/* <CustomGradientBtn text="Register Now" color="black" /> */}
                    Dashboard
                  </div>
                </Link>
              ) : (
                <Link href="/nonca/events" passHref>
                  <div className="landing-register-button">
                    {/* <CustomGradientBtn text="Register Now" color="black" /> */}
                    Dashboard
                  </div>
                </Link>
              )}
            </>
          )}
        </div>

        <img
          src="/rightLine.svg"
          alt="rightLine"
          className="mainPage_side_img"
        />
      </section>
      <hr/>
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
