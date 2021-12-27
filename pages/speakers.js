import Speaker_card from "../components/speaker-card";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import { SPEAKERS_API } from "../utils/APIs";
export default function Speakers({ speakers }) {
  return (
    <div>
      <div className="bg-black text-white  Speaker_page_container">
        <div className="Speaker_page_title">Speakers</div>
        <div className="Speaker_Card_Container">
          {speakers.map((det, id) => {
            return (
              <div className="Speaker_Card_Loop" key={id}>
                <Speaker_card
                  name={det.speaker.name}
                  position={det.speaker.designation}
                  topic={det.topic}
                  date={det.date}
                  time={det.time}
                  image={det.speaker.profile_image}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(SPEAKERS_API);
  const speakers = await res.json();

  return {
    props: {
      speakers,
    },
  };
}
