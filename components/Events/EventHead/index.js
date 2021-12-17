import EventHead from "./eventHeadCard";
import { MobileEventHead } from "./mobileEventHeadCard";
import { useMobile, useUpdateMobile } from "../../../utils/MobileContext";
import React, { useEffect } from "react";

export default function EventHeader({ detailsEvents }) {
  const setMobile = useUpdateMobile();
  useEffect(() => {
    setMobile();
  });
  return (
    <>
      {useMobile().isMobile ? (
        <MobileEventHead detailsEvents={detailsEvents} />
      ) : (
        <EventHead detailsEvents={detailsEvents} />
      )}
    </>
  );
}
