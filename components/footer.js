const Footer = () => {
  return (
    <div className="new-footer-container" id="footer">
      <div className="new-footer-container-child width-30">
        <a
          href="https://ecelliitr.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="new-footer-section-esummit-logo" />
        </a>
        <div>
          <div className="new-footer-section-contact-container new-footer-section-contact-container-additional-margin0">
            <div className="new-footer-section-contact-heading">EMAIL</div>
            <div className="new-footer-section-contact-subheading">
              esummit@iitr.ac.in
            </div>
          </div>
          <div className="new-footer-section-contact-container new-footer-section-contact-container-additional-margin">
            <div className="new-footer-section-contact-heading">
              FOLLOW US AT
            </div>
            <div className="new-footer-section-contact-subheading logo-container">
              <a
                href="https://www.facebook.com/ecelliitr"
                target="_blank"
                rel="noopener noreferrer"
                className="new-footer-section-contact-link"
              >
                <img
                  src="facebook.png"
                  className="new-footer-section-contact-logo"
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com/ecelliitr/"
                target="_blank"
                className="new-footer-section-contact-link"
                rel="noopener noreferrer"
              >
                <img
                  src="instagram.png"
                  className="new-footer-section-contact-logo"
                  alt=""
                />
              </a>
              <a
                className="new-footer-section-contact-link"
                href="https://www.youtube.com/channel/UCf1py66Ov1easJAswwjxQZw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="Youtube.png"
                  className="new-footer-section-contact-logo"
                  alt=""
                />
              </a>
              <a
                className="new-footer-section-contact-link"
                href="https://twitter.com/ECell_IITR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="Twitter.png"
                  className="new-footer-section-contact-logo"
                  alt=""
                />
              </a>
              <a
                className="new-footer-section-contact-link"
                href="https://www.linkedin.com/company/esummit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="Linkedin.png"
                  className="new-footer-section-contact-logo"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="new-footer-container-child width-40">
        <a
          href="https://ecelliitr.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="new-footer-section-ecell-logo" />
        </a>
        <div>
          <div className="new-footer-section-contact-container new-footer-section-contact-container-additional-margin01">
            <div className="new-footer-section-contact-heading">PHONE</div>
            <div className="new-footer-section-contact-subheading">
              Vinyas: +91 98765 56789 <br /> Sharma: +91 98765 56789
            </div>
          </div>
          <div className="new-footer-section-contact-container new-footer-section-contact-container-additional-margin1">
            <div className="new-footer-section-contact-heading">
              OUR ADDRESS
            </div>
            <div className="new-footer-section-contact-subheading prewrap">
              E-Cell Office SAC Building
              <br /> IIT Roorkee <br /> Roorkee, Uttrakhand-
              <br />
              247667, INDIA
            </div>
          </div>
        </div>
      </div>
      <div className="new-footer-container-child width-45 padding-left-3rem">
        <form className="new-footer-form">
          <div className="new-footer-form-input-container">
            <input
              id="inputName"
              type="text"
              className="new-footer-form-field width-100 height-100"
              placeholder="Name"
              name="name"
              //   value={name}
              autoCorrect="off"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
              //   onChange={this.onChange}
              required
            />
          </div>
          <div className="new-footer-form-input-container">
            <input
              id="inputEmail"
              type="email"
              className="new-footer-form-field width-100 height-100"
              placeholder="EMail"
              name="email"
              //   value={email}
              autoCorrect="off"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
              //   onChange={this.onChange}
              required
            />
          </div>
          <div className="new-footer-form-input-contact">
            <div className="new-footer-form-input-container">
              <input
                id="inputContact"
                type="number"
                className="new-footer-form-field height-100"
                placeholder="Contact Number"
                name="contact"
                //   value={contact}
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
                //   onChange={this.onChange}
                required
              />
            </div>
            <div className="new-footer-form-input-container">
              <input
                id="inputContact"
                type="text"
                className="new-footer-form-field  width-100 height-100"
                placeholder="Query Regarding"
                name="query"
                //   value={query}
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
                //   onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className="new-footer-form-input-container">
            <textarea
              id="inputMessage"
              type="text"
              className="new-footer-form-field textarea-field"
              placeholder="Write your message"
              name="message"
              //   value={message}
              rows="5"
              autoCorrect="off"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
              //   onChange={this.onChange}
              required
            />
          </div>
          {/* <button className="new-form-submit-button" type="submit"> */}
          <div className="clip">      SUBMIT      </div>
          {/* {loader ? (
                <>
                  <i className="fa fa-circle-o-notch fa-spin"></i>
                </>
              ) : (
                <>Submit</>
              )} */}
          {/* </button> */}
        </form>
      </div>
    </div>
  );
};

export default Footer;
