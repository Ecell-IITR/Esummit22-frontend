import Speaker_card from "../components/speaker-card";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import FetchApi from "../utils/fetchAPI";
import { SPEAKERS_API } from "../utils/APIs";
export default function Speakers() {
  const [Speakers_Arr, setSpeakers_Arr] = useState([]);
  const [Speakers_Arr_caller, setSpeakers_Arr_caller] = useState(true);

  FetchApi("get", SPEAKERS_API, null, null)
    .then((res) => {
      this;
      if (Speakers_Arr_caller) {
        setSpeakers_Arr(res.data);
        setSpeakers_Arr_caller(false);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <div className="bg-black text-white  Speaker_page_container">
        <div className="Speaker_page_title">Speakers</div>
        <div className="Speaker_Card_Container">
          {Speakers_Arr.map((det, id) => {
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
