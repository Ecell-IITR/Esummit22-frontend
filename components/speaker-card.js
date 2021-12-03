const Speaker_card = ({ name, position, topic, date, time, image }) => {
  return (
    <div className="speaker-card">
      <div className=" speaker-card-box1">
        <img
          src="Ellipse.png"
          className="speaker-card-box1-background"
          alt=""
        />
        <img src={image} className="speaker-card-box1-photo" alt="" />
      </div>
      <div className="speaker-card-box">
        <div className="speaker-card-box-name">{name}</div>
        <div className="speaker-card-box-position">{position}</div>
        <div className="speaker-card-description-hidden">
          <div className="mb-2">Session Type : {topic}</div>
          <div className="mb-2">Date : {date}</div>
          <div className="mb-2">Time : {time}</div>
        </div>
      </div>
    </div>
  );
};

export default Speaker_card;