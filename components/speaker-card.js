const Speaker_card = () => {
  return (
    <div className="speaker-card">
      <div className=" speaker-card-box1">
        <img src="Ellipse.png" className="speaker-card-box1-background" alt=""/>
        <img src="sampleimg.jpg" className="speaker-card-box1-photo" alt="" />
      </div>
      <div className="speaker-card-box">
        <div className="speaker-card-box-name">RAHUL VALECHA</div>
        <div className="speaker-card-box-position">
          CEO, Sada Aaye <br /> Bahaar, Aane do
        </div>
        <div className="speaker-card-description-hidden">
              Session Type : Keynote speaker
              <br /> Date : 22 nov.
              <br />
              Time : 4pm
            </div>
      </div>
    </div>
  );
};

export default Speaker_card;
