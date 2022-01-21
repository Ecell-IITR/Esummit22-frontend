import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

export const PayNowPopup = ({ show, setshow }) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    window.location.href = value;
  };
  return (
    <>
      <Modal show={show}>
        <div className='pay-now-popup-container'>
          <div className='pay-now-popup-inner-container'>
            <div className='pay-now-popup-flex-container'>
              <span className='pay-now-popup-header'>I am a</span>
              {/* <img src="" alt="" className="pay-now-popup-cross" ></img> */}
              <div
                className='pay-now-popup-cross'
                onClick={() => {
                  setshow(false);
                }}
              >
                X
              </div>
            </div>
            <form className='pay-now-popup-form'>
              <div className='pay-now-popup-rows'>
                <label
                  htmlFor='college-student'
                  className='pay-now-popup-links'
                >
                  <input
                    onChange={() => {
                      setValue('https://rzp.io/l/RJCCsvyZ9W');
                    }}
                    type='radio'
                    id='college-student'
                    name='payment'
                  ></input>
                  <span className='pay-now-popup-checkmark'><div className="pay-now-inside"></div></span>
                  College Student
                </label>
              </div>
              <div className='pay-now-popup-rows'>
                <label htmlFor='professional' className='pay-now-popup-links'>
                  <input
                    onChange={() => {
                      setValue('https://rzp.io/l/PMWNWVjZ6');
                    }}
                    type='radio'
                    id='professional'
                    name='payment'
                  ></input>
                  <span className='pay-now-popup-checkmark'><div className="pay-now-inside"></div></span>A
                  Professional
                </label>
              </div>
              <div className='pay-now-popup-rows'>
                <label htmlFor='startup-expo' className='pay-now-popup-links'>
                  <input
                    onChange={() => {
                      setValue('https://rzp.io/l/iitrstartupexpo');
                    }}
                    type='radio'
                    id='startup-expo'
                    name='payment'
                  ></input>
                  <span className='pay-now-popup-checkmark'><div className="pay-now-inside"></div></span>
                  Startup Expo Participant
                </label>
              </div>
              <div
                className='pay-now-popup-proceed-button'
                onClick={handleSubmit}
              >
                Proceed
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PayNowPopup;
