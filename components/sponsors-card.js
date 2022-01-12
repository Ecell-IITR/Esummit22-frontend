import React from "react";

export const Sponsor = ({ sponsorsTitle, format }) => {
  return (
    <div className="sponsor_main">
      <div className="img_div_behind">
        <div className="img_div_front">
          <img
            src={"sponsors/" + sponsorsTitle + format}
            alt={`${sponsorsTitle} image`}
          ></img>
        </div>
      </div>
      <div className="title_sponsor">
        <h1>{sponsorsTitle}</h1>
      </div>
    </div>
  );
};

export default Sponsor;
