import EventCard from "../Events/eventCard";
import React, { useEffect, useState } from "react";

import FetchApi from "../../utils/fetchAPI";
import { ALL_EVENTS_API } from "../../utils/APIs";

export default function HomeEvents() {
  const [Events_Arr, setEvents_Arr] = useState([]);
  const [Events_Arr_caller, setEvents_Arr_caller] = useState(true);

  FetchApi("get", ALL_EVENTS_API, null, null)
    .then((res) => {
      this;
      if (Events_Arr_caller) {
        setEvents_Arr(res.data.CompetitiveEvents);
        setEvents_Arr_caller(false);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <div className="bg-black text-white  Home_Events_page_container">
        <div className="Home_Events_page_title">Events</div>
        <div className="Home_Events_Card_Container">
          {Events_Arr.map((det, id) => {
            return (
              <div className="Home_Events_Card_Loop" key={id}>
                <EventCard
                  background_image={det.background_image}
                  event_name={det.event_name}
                  card_description={det.card_description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
