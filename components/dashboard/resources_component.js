import React from "react";

export const Resources = () => {
  return (
    <div className="div_behind_resources">
      <div className="div_front_resources">
        <div className="pdf_div_main">
          <div className="pdf_div">
            <img src="PDF_symbol.png" alt=""></img>
            <p>
              <a href="">pdf file link</a>
            </p>
          </div>
          <div className="button_style">
            <button id="button_view">View</button>
          </div>
        </div>

        <div className="span_download">
          <button className="download_button">Download</button>
        </div>
      </div>
    </div>
  );
};

export default Resources;

{
  /* <img src="View_button.png" alt=""></img> */
}
