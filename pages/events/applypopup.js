import React, { useState } from "react";
import FetchApi from "../../utils/fetchAPI";
import { Submission_API } from "../../utils/APIs";
import { toast } from "react-toastify";
import { getAuthToken } from "../../utils";
import { Modal } from "react-bootstrap";
import { DASHBOARD_EVENT_REGISTER_API } from "../../utils/APIs";

const Apply = ({ Show, setShow, detailsEvents }) => {
  const [isAgree, setisAgree] = useState(false);
  const [popup, setpopup] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function registerEvent() {
    if (isAgree) {
      var token = getAuthToken();
      if (token) {
        if (detailsEvents[0].competitiveevent_of != null) {
          FetchApi(
            "post",
            DASHBOARD_EVENT_REGISTER_API,
            { dashboard_card_id: detailsEvents[0].competitiveevent_of.id },
            token
          )
            .then((res) => {
              toast.success("Event Registered Successfully!");
              setpopup("false");
            })
            .catch((err) => {
              toast.error("Error in Registering.Try Again !");
              console.log(err.data);
            });
          setShow(false);
        } else {
          toast.error("This Event is not for You !");
        }
      } else {
        toast.error("Login Before Registering for Event!");
      }
    } else {
      toast.error("Fill the Form and Click on checkbox !");
    }
  }

  return (
    <>
      <Modal
        show={Show}
        contentClassName="Upload_Content"
        onHide={() => {
          handleClose();
        }}
      >
        <div className="Share_popup_share_background">
          <div className="Share_popup_mainDiv_behind">
            <div className="Share_popup_mainDiv_front">
              <div className="Share_popup_heading">
                <div className="Share_popup_share_heading">
                  <h1>Confirm Application</h1>
                </div>
                <div className="Share_popup_close_btn">
                  <button
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
              <div className="Share_popup_subDiv_behind">
                <div className="Share_popup_subDiv_front">
                  <p className="Share_popup_para" id="Share_popup_para1">
                    In order to confirm your application, please fill the
                    registration form and then finish with the check box. All
                    the best!
                    <br />
                    <br />
                  </p>
                  <div className="applynow_popup_ChooseFileContainer">
                    <div className="google-form-link">
                      {detailsEvents && (
                        <>
                          <a
                            className="blue-link-google-form"
                            href={detailsEvents[0].google_form}
                            target="_blank"
                            rel="noreferrer"
                          >
                            CLICK HERE
                          </a>{" "}
                          {""}
                          to fill the Google Form for
                          {detailsEvents[0].event_name} registration.
                        </>
                      )}
                    </div>
                    <div className="google-form-link">
                      <input
                        name="isAgree"
                        type="checkbox"
                        id="permissions"
                        value={isAgree}
                        onInput={(e) => setisAgree(!isAgree)}
                      />{" "}
                      I have filled the above mentioned form correctly and I
                      agree to register to the event.
                    </div>
                  </div>
                  <div className="Upload_popup_UploadBtn_div">
                    <div
                      className="Upload_popup_UploadBtn"
                      onClick={() => {
                        registerEvent();
                      }}
                    >
                      Register
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Apply;
