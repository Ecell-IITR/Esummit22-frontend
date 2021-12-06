import Accordion from "../faq/accordian";
function Faq() {
  const styles = {
    fontFamily: "Raleway",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
  };

  return (
    <div style={styles}>
      <div
        style={{
          width: "80%",
          fontFamily: "Raleway",
          fontSize: "32px",
          fontWeight: "600",
          lineHeight: "36px",
          textAlign: "left",
          marginBottom: "2%",
        }}
      >
        FAQs
      </div>
      <Accordion
        title="What is E-Summit?"
        content="E-Summit being the flagship event of ECell, is held annually brings together the academic community, venture capitalists, new age entrepreneurs and all those passionate about entrepreneurship to common grounds. "
      />
      <Accordion
        title="What is E-Summit?"
        content="E-Summit being the flagship event of ECell, is held annually brings together the academic community, venture capitalists, new age entrepreneurs and all those passionate about entrepreneurship to common grounds. "
      />
    </div>
  );
}

export default Faq;
