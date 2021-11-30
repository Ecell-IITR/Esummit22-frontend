export const HeaderMobile = () => {
  return (
    <div className="mobile-navbar-majorcontainer">
      <input type="checkbox" />
      <div className="Hamburger">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div>
        <img
          src="fete-of-fortitude.png"
          alt="navbar-log"
          className="navbar-logo-mobile"
        />
      </div>
      <ul className="mobilenavMenu-subcontent1">
        <li className="mobilenavMenu-items">
          <div className="mobilenavMenu-links">HOME</div>
        </li>
        {
          <li className="mobilenavMenu-items">
            <div className="mobilenavMenu-links">THEME</div>
          </li>
        }
        <li className="mobilenavMenu-items">
          <div className="mobilenavMenu-links">EVENTS</div>
        </li>
        <li className="mobilenavMenu-items">
          <div className="mobilenavMenu-links">SPEAKERS</div>
        </li>
        <li className="mobilenavMenu-items">
          <div className="mobilenavMenu-links">SPONSORS</div>
        </li>
        <li className="mobilenavMenu-items">
          <div className="mobilenavMenu-links">FAQ</div>
        </li>
        {/* <li className="mobilenavMenu-items">
                          <NavHashLink to="/#footer" className={"mobilenavMenu-links"} rel="noopener noreferrer">
                            Contact Us
                          </NavHashLink>
                        </li> */}
      </ul>
      {/* <img src={vector} alt="NOthing" className="mobilenavMenu-vector" />
            <ul className={"mobilenavMenu-subcontent2"}>
              {!localStorage.getItem("user_token") ? (
                <li className="mobilenavMenu-items">
                  <Link
                    to="/login"
                    className="mobilenavMenu-links"
                    rel="noopener noreferrer"
                  >
                    Login
                  </Link>
                </li>
              ) : null}
              {!localStorage.getItem("user_token") ? (
                <li className="mobilenavMenu-items">
                  <p className="or-mobilenavMenu"></p>
                </li>
              ) : (
                <li
                  className="mobilenavMenu-items"
                  // style={{ marginLeft: "30px" }}
                >
                  {localStorage.getItem("user_role_type") == "CA" ? (
                    <Link
                      to="/campus-ambassador"
                      className={"mobilenavMenu-links"}
                      rel="noopener noreferrer"
                    >
                      <div
                        className="mobilenavMenu-clip clip"
                        style={{ color: "6f00ff" }}
                      >
                        DashBoard
                      </div>
                    </Link>
                  ) : (
                    <Link
                      to="/dashboard"
                      className={"mobilenavMenu-links"}
                      rel="noopener noreferrer"
                    >
                      <div
                        className="mobilenavMenu-clip clip"
                        style={{ color: "6f00ff" }}
                      >
                        DashBoard
                      </div>
                    </Link>
                  )}
                </li>
              )}
              {!localStorage.getItem("user_token") ? (
                <li className="mobilenavMenu-items">
                  <Link
                    to="/register"
                    className={"mobilenavMenu-links"}
                    rel="noopener noreferrer"
                  >
                    <div className="mobilenavMenu-clip clip">Register</div>
                  </Link>
                </li>
              ) : (
                <li className="mobilenavMenu-items">
                  <div
                    onClick={this.handleLogout}
                    className={"mobilenavMenu-links logout-link"}
                    rel="noopener noreferrer"
                  >
                    <span style={{ backgroundColor: "transparent" }}>Logout</span>
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div className="mobilenavMenu-esummit">
            <img
              src={esummitLogo}
              alt="Esummit logo"
              className="mobilenavMenu-logo"
            /> */}
      {/* <span>E-Summit 2021 IIT Roorkee</span>
            <span>E-Cell Office, SAC Building</span>
            <span>IIT Roorkee Roorkee</span>
            <span>Uttrakhand - 247667</span> */}
    </div>
  );
};

export default HeaderMobile;
