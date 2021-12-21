import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
export const Share = ({ closeModal,desc ,link }) => {
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
                  closeModal(false);
                }}
              >
                X
              </button>
            </div>
          </div>
          <div className="Share_popup_subDiv_behind">
            <div className="Share_popup_subDiv_front">
              <p className="Share_popup_para" id="Share_popup_para1">
                {desc}
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
            <FacebookShareButton url={link} quote={desc}>
                <img
                  src="Facebook_img.png"
                  className="new-footer-section-contact-logo"
                  alt=""
                />
                <h1 className="Share_popup_media_title">Facebook</h1>
                </FacebookShareButton>
            </div>
            <div className="Share_popup_single_media_div">
            <LinkedinShareButton
          url={link}
          title={desc}
          
        >
                <img
                  src="LinkedIn_img.png"
                  className="new-footer-section-contact-logo"
                  alt=""
                />
                <h1 className="Share_popup_media_title">LinkedIn</h1>
                </LinkedinShareButton>
            </div>
            <div className="Share_popup_single_media_div">
            <TwitterShareButton
          url={link}
          title={desc}
          style={{ marginRight: "1.2vw" }}
        >
         
                <h1 className="Share_popup_media_title">Twitter</h1>
             
        </TwitterShareButton>
              
            </div>
            <div className="Share_popup_single_media_div">
              <a
                className="new-footer-section-contact-link"
                href="https://www.instagram.com/ecelliitr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="Share_popup_media_title">Instagram</h1>
              </a>
            </div>
            <div className="Share_popup_single_media_div">
              
            <WhatsappShareButton
          url={link}
          title={desc}
          separator=":: "
          style={{ marginRight: "1.2vw" }}
        >
          
  
                <h1 className="Share_popup_media_title">Whatsapp</h1>
                </WhatsappShareButton>
            </div>
            <div className="Share_popup_single_media_div">
            <EmailShareButton
              url={link}
              title={desc}>
                <h1 className="Share_popup_media_title">Email</h1>
                </EmailShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
