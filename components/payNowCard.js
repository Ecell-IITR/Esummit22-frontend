import React, { useState } from 'react';
import PayNowPopup from './payNowPopup';
export default function PayNowCard() {
  const [show, setShow] = useState(false);
  return (
    <>
      <PayNowPopup show={show} setshow={setShow} />
      <div
        className='pay-outer-container'
        onClick={() => {
          setShow(true);
        }}
      >
        <div className='pp-button'>
          <div className='pp-text'>
            <div className='pp-text-1'>PAY NOW</div>
            <div className='pp-text-2'>Presented by E-Cell IITR</div>
          </div>
        </div>
      </div>
    </>
  );
}
