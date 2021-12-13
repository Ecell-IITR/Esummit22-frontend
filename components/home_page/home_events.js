import EventCard from "../Events/eventCard";
import React, { useEffect, useState } from "react";

export default function HomeEvents({ allEvents }) {
  return (
    <div>
      <div className="bg-black text-white  Home_Events_page_container">
        <div className="Home_Events_page_title">Events</div>
        <div className="Home_Events_Card_Container">
          {allEvents.CompetitiveEvents.map((det, id) => {
            return (
              <div className="Home_Events_Card_Loop" key={id}>
                <EventCard
                  background_image={det.background_image}
                  event_name={det.event_name}
                  card_description={det.card_description}
                  slug={det.end_point}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
