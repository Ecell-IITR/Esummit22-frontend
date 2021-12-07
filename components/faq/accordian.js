import { useState } from "react";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
      className="accordian"
      style={{
        width: "80%",
        marginBottom: "15px",
        lineHeight: "15px",
        border: "1px solid rgba(209, 213, 219, 0.5)",
      }}
    >
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
          fontFamily: "Raleway",
          fontSize: "22px",
          fontStyle: "normal",
          fontWeight: "500",
        }}
        onClick={toggle}
        type="button"
      >
        <p>{props.title}</p>
        <img src="arrow.svg" />
      </button>
      <div
        style={{
          display: isShowing ? "block" : "none",
          padding: "5px",
          marginLeft: "5%",
          marginRight: "5%",
          fontFamily: "Raleway",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "36px",
          textAlign: "left",
        }}
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
    </div>
  );
}
