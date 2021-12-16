import React, { Component } from "react";
// import caRulebook from "../../public/CA-Resources/ca-rulebook.pdf";

export class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = { pdfFile: null, fileName: "" };
  }
  componentDidMount() {
    if (this.props.file_) {
      this.setState({
        pdfFile: this.props.file_,
        fileName: this.props.fileName_,
      });
    } else {
      this.setState({
        // pdfFile: caRulebook,
        fileName: "CA-Rulebook.pdf",
      });
    }
  }

  render() {
    return (
      <div className="div_behind_resources">
        <div className="div_front_resources">
          <div className="pdf_div_main">
            <div className="pdf_div">
              <img src="PDF_symbol.png" alt="" />
              <p style={{ cursor: "pointer" }}>
                <a href={this.state.pdfFile} target="_blank" rel="noreferrer">
                  {this.state.fileName}
                </a>
              </p>
            </div>
            <div className="button_style">
              <button id="button_view">View</button>
            </div>
          </div>

          <div className="span_download">
            <a href={this.state.pdfFile} download="CA-Rulebook.pdf">
              <button className="download_button">Download</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;

{
  /* <img src="View_button.png" alt=""></img> */
}
