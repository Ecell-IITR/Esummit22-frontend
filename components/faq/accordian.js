import { useState } from "react";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="accordian">
      <button
        style={{
          width: "90%",
          height: "70px",
          position: "relative",
          textAlign: "left",
          padding: "4px",
          background: "transparent",
          cursor: "pointer",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "5%",
        }}
        onClick={toggle}
        type="button"
      >
        <div className="accordian-button">
          <p>{props.title}</p>
        </div>
        <div className="accordian-image">
          <img src="arrow.svg" />
        </div>
      </button>

      <div
        className="accordian-answer"
        style={{
          display: isShowing ? "block" : "none",
          padding: "5px",
          marginLeft: "5%",
          marginRight: "5%",
          fontFamily: "Raleway",
          fontWeight: "400",
          textAlign: "left",
        }}
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
    </div>
  );
}
