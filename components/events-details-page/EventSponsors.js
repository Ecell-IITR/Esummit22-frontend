import React from 'react';

export const EventSponsor = ({ img, title }) => {
  return (
    <div className='sponsor_main'>
      <div className='img_div_behind'>
        <div className='img_div_front'>
          <img src={img} alt=' '></img>
        </div>
      </div>
      <div className='title_sponsor'>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default EventSponsor;
