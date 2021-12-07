import React from "react";
import Image from "next/image";
function Eventrules(Event_Arr_rules) {
  return (
    <div className="Event-rules-main-container">
      <div className="Event-rules-head">Rules</div>
      <div className="Event-rules-list">
        {Event_Arr_rules.Eventrules.map((det) => {
          return (
            <div className="event_rule_loop">
              <Image src="../../public/Ellipse91.png" /> {det.rule}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Eventrules;
