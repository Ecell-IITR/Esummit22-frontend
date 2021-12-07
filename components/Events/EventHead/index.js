import { EventHead } from "./eventHeadcard";
import { MobileEventHead } from "./mobileEventHeadCard";
import { useMobile, useUpdateMobile } from "../../../utils/MobileContext";
import React, { useEffect } from "react";

export default function EventHeader() {
  const setMobile = useUpdateMobile();
  useEffect(() => {
    setMobile();
  });
  return <>{useMobile().isMobile ? <MobileEventHead /> : <EventHead />}</>;
}
