import EventHead from "./eventHeadCard";
import { MobileEventHead } from "./mobileEventHeadCard";
import { useMobile, useUpdateMobile } from "../../../utils/MobileContext";
import React, { useEffect } from "react";

export default function EventHeader({
  detailsEvents,
  CompetitiveEvents,
  SpeakingEvents,
  WorkshopEvents,
  show,
  setShow,
}) {
  const setMobile = useUpdateMobile();
  useEffect(() => {
    setMobile();
  });
  return (
    <>
      {useMobile().isMobile ? (
        <MobileEventHead
          detailsEvents={detailsEvents}
          CompetitiveEvents={CompetitiveEvents}
          SpeakingEvents={SpeakingEvents}
          WorkshopEvents={WorkshopEvents}
        />
      ) : (
        <EventHead
          detailsEvents={detailsEvents}
          CompetitiveEvents={CompetitiveEvents}
          SpeakingEvents={SpeakingEvents}
          WorkshopEvents={WorkshopEvents}
          show={show}
          setShow={setShow}
        />
      )}
    </>
  );
}
