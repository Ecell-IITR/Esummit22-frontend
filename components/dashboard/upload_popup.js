import React from "react";

const Upload = () => {
  return (
    <div>
      <div className="Upload_popup_mainDiv_behind">
        <div className="Upload_popup_mainDiv_front">
          <div className="Upload_popup_heading">
            <div className="Upload_popup_heading">
              <h1>Upload</h1>
            </div>
            <div className="Upload_popup_close_btn">
              <button>X</button>
            </div>
          </div>
          <div className="Upload_popup_subDiv_behind">
            <div className="Upload_popup_subDiv_front">
              <div className="Upload_popup_headline">Task Headline</div>
              <p className="Upload_popup_para">
                Please upload screenshot of share photo of File as instructed in
                task detail.
              </p>
              <div className="Upload_popup_ChooseFileContainer">
                <div className="Upload_popup_para">File Upload:</div>
                <div className="Upload_popup_Btn_ChooseFile">
                  <button className="Upload_popup_btnText">Choose File</button>
                </div>
                <div className="Upload_popup_para">no file chosen</div>
              </div>
            </div>
          </div>
          <div className="Upload_popup_UploadBtn_div">
            <div className="Upload_popup_UploadBtn">Upload</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
