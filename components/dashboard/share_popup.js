import React from "react";

export const Share = ({ closeShareModal }) => {
  function copyText(id, id2) {
    document.getElementById(id2).innerText = "Copied";
    var range = document.createRange();
    var index = document.getElementById(id);
    range.selectNode(index);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().remo;
  }

  return (
    <div className="Share_popup_share_background">
      <div className="Share_popup_mainDiv_behind">
        <div className="Share_popup_mainDiv_front">
          <div className="Share_popup_heading">
            <div className="Share_popup_share_heading">
              <h1>Share</h1>
            </div>
            <div className="Share_popup_close_btn">
              <button
                onClick={() => {
                  closeShareModal(false);
                }}
              >
                X
              </button>
            </div>
          </div>
          <div className="Share_popup_subDiv_behind">
            <div className="Share_popup_subDiv_front">
              <p className="Share_popup_para" id="Share_popup_para1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It is the standard dummy text.Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. It is the
                standard dummy text.
              </p>
              <div className="Share_popup_copy_btn">
                <h1>
                  <button
                    id="Share_popup_copy"
                    onClick={() =>
                      copyText("Share_popup_para1", "Share_popup_copy")
                    }
                  >
                    Copy
                  </button>
                </h1>
              </div>
            </div>
          </div>
          <div className="Share_popup_media_div">
            <div className="Share_popup_single_media_div">
              <a
                href="https://www.facebook.com/ecelliitr"
                target="_blank"
                rel="noopener noreferrer"
                className="new-footer-section-contact-link"
              >
                <img
                  src="Facebook_img.png"
                  className="new-footer-section-contact-logo"
                  alt=""
                />
                <h1 className="Share_popup_media_title">Facebook</h1>
              </a>
            </div>
            <div className="Share_popup_single_media_div">
              <a
                className="new-footer-section-contact-link"
                href="https://twitter.com/ECell_IITR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="LinkedIn_img.png"
                  className="new-footer-section-contact-logo"
                  alt=""
                />
                <h1 className="Share_popup_media_title">LinkedIn</h1>
              </a>
            </div>
            <div className="Share_popup_single_media_div">
              <a
                href="https://www.instagram.com/ecelliitr/"
                target="_blank"
                className="new-footer-section-contact-link"
                rel="noopener noreferrer"
              >
                <img
                  src="Twitter_img.png"
                  // className="new-footer-section-contact-logo"
                  alt=""
                />
                <h1 className="Share_popup_media_title">Twitter</h1>
              </a>
            </div>
            <div className="Share_popup_single_media_div">
              <a
                className="new-footer-section-contact-link"
                href="https://www.linkedin.com/company/esummit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="Instagram_img.png"
                  className="new-footer-section-contact-logo"
                  alt=""
                />
                <h1 className="Share_popup_media_title">Instagram</h1>
              </a>
            </div>
            <div className="Share_popup_single_media_div">
              <a
                className="new-footer-section-contact-link"
                href="https://www.youtube.com/channel/UCf1py66Ov1easJAswwjxQZw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="Whatsapp_img.png"
                  className="new-footer-section-contact-logo"
                  alt=""
                />
                <h1 className="Share_popup_media_title">Whatsapp</h1>
              </a>
            </div>
            <div className="Share_popup_single_media_div">
              <a
                className="new-footer-section-contact-link"
                href="https://twitter.com/ECell_IITR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="Email_img.png"
                  className="new-footer-section-contact-logo"
                  alt=""
                />
                <h1 className="Share_popup_media_title">Email</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
