import React from 'react';
import { useEffect, useState } from 'react';

export const Content = ({ detailsEvents }) => {
  const [Events_name, setEvents_name] = useState(detailsEvents[0].end_point);
  return (
    <div className='content-main'>
      <div className='content-main-heading'>CONTENTS</div>
      <div className='content-main-elements'>
        <a
          className='content-main-elements-links'
          href='#timeline'
          rel='noopener noreferrer'
        >
          TIMELINE
        </a>
        <img
          className='content-main-elements-img'
          src='/circle.png'
          alt='circle image'
        />
        <a
          className='content-main-elements-links'
          href='#criteria'
          rel='noopener noreferrer'
        >
          ELIGIBILITY CRITERIA
        </a>
        <img
          className='content-main-elements-img-mobile'
          src='/circle.png'
          alt='circle image'
        />
        <a
          className='content-main-elements-links'
          href='#perks'
          rel='noopener noreferrer'
        >
          PERKS
        </a>
        <img
          className='content-main-elements-img'
          src='/circle.png'
          alt='circle image'
        />
        <a
          className='content-main-elements-links'
          href='#rules'
          rel='noopener noreferrer'
        >
          RULES
        </a>
        <img
          className='content-main-elements-img'
          src='/circle.png'
          alt='circle image'
        />
        <a
          className='content-main-elements-links'
          href='#sponsors'
          rel='noopener noreferrer'
        >
          SPONSORS
        </a>
        <img
          className='content-main-elements-img'
          src='/circle.png'
          alt='circle image'
        />
        <a
          className='content-main-elements-links'
          href='#faqs'
          rel='noopener noreferrer'
        >
          FAQ
        </a>
        <img
          className='content-main-elements-img'
          src='/circle.png'
          alt='circle image'
        />
        <a
          className='content-main-elements-links'
          href='#contacts'
          rel='noopener noreferrer'
        >
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default Content;
