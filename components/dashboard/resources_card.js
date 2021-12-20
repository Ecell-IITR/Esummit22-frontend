import React, { Component } from "react";
// import caRulebook from "../../public/CA-Resources/ca-rulebook.pdf";
import pdfimg  from "../../public/CA-Resources/pdf.svg"
export class ResourcesCard extends Component {
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
      <div className="resource-Card-container">
      <img src={pdfimg} className="pdf-img" alt="sorry" />

      <div className="resource-pdf-name">{this.state.fileName}</div>
      <a href={this.state.pdfFile} target="_blank" rel="noreferrer">
        {" "}
        <div className=" resource-view">View</div>
      </a>
      <a
        href={this.state.pdfFile}
        className=" resource-download"
        download="CA-Rulebook.pdf"
      >
        Download
      </a>
    </div>
    );
  }
}

export default ResourcesCard;
