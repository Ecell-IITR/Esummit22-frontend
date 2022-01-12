const Speaker_card = ({ name, position, topic, date, time, image }) => {
  return (
    <div className='speaker-card'>
      <div className=' speaker-card-box1'>
        <img
          src='Ellipse.png'
          className='speaker-card-box1-background'
          alt='speaker background image'
        />
        <img
          src={image}
          className='speaker-card-box1-photo'
          alt={`${name} speaker image`}
        />
      </div>
      <div className='speaker-card-box'>
        <div className='speaker-card-box-name'>{name}</div>
        <div className='speaker-card-box-position'>{position}</div>
        <div className='speaker-card-description-hidden'>
          <div>Session Type : {topic != 'null' ? topic : 'TBD'}</div>
          <div>Date : {date != '2020-01-01' ? date : 'TBD'}</div>
          <div>Time : {time != '00:00:00' ? time : 'TBD'}</div>
        </div>
      </div>
    </div>
  );
};

export default Speaker_card;
