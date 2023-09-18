import React from 'react';
import Image from 'next/image';
function Eventrules({ detailsEvents }) {
  return (
    <div className='Event-rules-main-container'>
      <div className='Event-rules-list'>
        {detailsEvents[0].event_rules?.map((det) => {
          return (
            <div className='event_rule_loop'>
              <img src='/Ellipse91.webp' className='Event_ellipse_rule' alt='' />{' '}
              <div className='Event_rule_text'> {det.rule}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Eventrules;
