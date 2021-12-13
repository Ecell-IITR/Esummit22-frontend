import Speaker_card from "../speaker-card";
import React, { useEffect, useState } from "react";

export default function HomeSpeakers({ allSpeakers }) {
  return (
    <div>
      <div className="bg-black text-white  Home_Speaker_page_container">
        <div className="Home_Speaker_page_title">Speaker</div>
        <div className="Home_Speaker_Card_Container">
          {allSpeakers.map((det, id) => {
            return (
              <div className="Home_Speaker_Card_Loop" key={id}>
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
    </div>
  );
}
