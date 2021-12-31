import { event } from "jquery";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export const PayNowPopup = ({show, setshow}) => {
    const [value, setValue] = useState("");
    const handleSubmit = () => {
        window.location.href = value;
    }
  return (
    <>
      <Modal show={show}>
        <div className="pay-now-popup-container">
          <div className="pay-now-popup-inner-container">
            <span className="pay-now-popup-header">I am a</span>
            {/* <img src="" alt="" className="pay-now-popup-cross" ></img> */}
            <div className="pay-now-popup-cross" onClick={()=>{setshow(false)}}>X</div>
            <form className="pay-now-popup-form">
              <div className="pay-now-popup-rows">
                <input
                onChange={()=>{setValue("https://rzp.io/l/student-pass")}}
                  type="radio"
                  id="college-student"
                  name="payment"
                  value="https://rzp.io/l/student-pass"
                ></input>
                <span className="pay-now-popup-checkmark"></span>
                <label for="college-student" className="pay-now-popup-links">
                  College Student
                </label>
              </div>
              <div className="pay-now-popup-rows">
                <input
                    onChange={()=>{setValue("https://rzp.io/l/esummit")}}
                  type="radio"
                  id="professional"
                  name="payment"
                  value="https://rzp.io/l/esummit"
                ></input>
                <span className="pay-now-popup-checkmark"></span>
                <label for="professional" className="pay-now-popup-links">
                  A Professional
                </label>
              </div>
              <div className="pay-now-popup-rows">
                <input
                onChange={()=>{setValue("https://rzp.io/l/Expo-ESummit")}}
                  type="radio"
                  id="startup-expo"
                  name="payment"
                  value="https://rzp.io/l/Expo-ESummit"
                ></input>
                <span className="pay-now-popup-checkmark"></span>
                <label for="startup-expo" className="pay-now-popup-links">
                  Startup Expo Participant
                </label>
              </div>
              <div className="pay-now-popup-proceed-button" onClick={handleSubmit}>Proceed</div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PayNowPopup;
