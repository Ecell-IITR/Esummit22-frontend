import React from "react";

export const Perk = ({ detailsEvents }) => {
  return (
    <>
      {detailsEvents[0].event_perks.map((det, id) => {
        return (
          <>
            <div className="perks-container-behind">
              <div className="perks-container-front">
                <div className="title_div">
                  <h1>{det.heading}</h1>

                  <img src="/border_perks.png" alt="no-img"></img>
                </div>
                <div className="content_div">
                  <div
                    className="content_style"
                    dangerouslySetInnerHTML={{
                      __html: det.description,
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Perk;
