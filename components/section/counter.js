//import vector from "../../../../assets/sponsor1.svg";
import CountUp, { useCountUp } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export const Counter = () => {
  const countertabs = [
    { number: 20, text: "EVENTS", suffix: "+" },
    { number: 6000, text: "FOOTFALL", suffix: "+" }, //30+
    { number: 50, text: "SPEAKERS", suffix: "+" }, //24hrs+
    { number: 500, text: "PRIZES", suffix: "+" }, //6000+
  ];
  return (
    <div className="landing-counter-container">
      {countertabs.map((tab) => (
        // eslint-disable-next-line react/jsx-key
        <div className="landing-counter-subcontainer">
          <CountUp end={tab.number} suffix={tab.suffix} duration={1.5}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <img
            className="landing-counter-svg"
            src="vector.png"
            alt="landing counter image"
          />
          <span className="landing-counter-text">{tab.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Counter;
