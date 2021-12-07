import React, { useState } from "react";

function Eventrules() {
  return (
    <div>
      <div className="bg-black text-white  Speaker_page_container">
        {Event_Arr.map((det) => {
          return <div className="event_rule_loop">{det.rule}</div>;
        })}
      </div>
    </div>
  );
}

export default Eventrules;
