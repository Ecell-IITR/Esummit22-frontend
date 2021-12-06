
import Speaker_card from "../components/speaker-card";
import React, { useEffect, useState } from "react";

import FetchApi from "../utils/fetchAPI";
import { SPEAKERS_API } from "../utils/APIs";

function speakers() {
  const [Speakers_Arr, setSpeakers_Arr] = useState([]);
  const [Speakers_Arr_caller, setSpeakers_Arr_caller] = useState(true);

  FetchApi("get", SPEAKERS_API, null, null)
    .then((res) => {
      this;
      if (Speakers_Arr_caller) {
        setSpeakers_Arr(res.data);
        setSpeakers_Arr_caller(false);
      }
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <div className="bg-black text-white  Speaker_page_container">
        <div className="Speaker_page_title">Speaker</div>
        <div className="Speaker_Card_Container">
          {Speakers_Arr.map((det) => {
            return (
              <div className="Speaker_Card_Loop">
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

export default speakers;


function speakers() {
  const [Speakers_Arr, setSpeakers_Arr] = useState([]);
  const [Speakers_Arr_caller, setSpeakers_Arr_caller] = useState(true);

  FetchApi("get", SPEAKERS_API, null, null)
    .then((res) => {
      this;
      if (Speakers_Arr_caller) {
        setSpeakers_Arr(res.data);
        setSpeakers_Arr_caller(false);
      }
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <div className="bg-black text-white  Speaker_page_container">
        <div className="Speaker_page_title">Speaker</div>
        <div className="Speaker_Card_Container">
          {Speakers_Arr.map((det) => {
            return (
              <div className="Speaker_Card_Loop">
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

export default speakers;

