import React, { useState } from "react";

function Eventrules(Event_Arr_rules) {
  return (
    <div>
      {console.log(Event_Arr_rules.Eventrules)}
      <div className="bg-black text-white  Speaker_page_container">
        {Event_Arr_rules.Eventrules.map((det) => {
          return <div className="event_rule_loop">{det.rule}</div>;
        })}
      </div>
    </div>
  );
}

export default Eventrules;
