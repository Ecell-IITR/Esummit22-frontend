import React from 'react';

export const EventCoordinator = ({ detailsEvents }) => {
  return (
    <div className='coordinator_main'>
      {detailsEvents[0].events_coordinators.map((det) => {
        return (
          <div className='coordinator_details'>
            <div className='coordinator_name'>{det.name}</div>
            <div className='coordinator_email'>{det.email}</div>
            <div className='coordinator_email'>{det.phone_number}</div>
          </div>
        );
      })}
      <div className='coordinator_image'>
        <div>
          <img src='/Vector_coordinator.png' />
        </div>
        <div className='coordinator_tagline'>
          <div className='coordinator_name'>{detailsEvents[0].event_name}</div>
          <div className='coordinator_email'>{detailsEvents[0].tagline}</div>
        </div>
      </div>
    </div>
  );
};

export default EventCoordinator;
