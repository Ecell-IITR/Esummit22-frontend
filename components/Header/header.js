import Link from "next/link";
export const Header = () => {
  return (
    <div className="navbar-container" id="navbar">
      <div className="navbar-logo-link">
        <img src="fete-of-fortitude.png" className="navbar-logo" alt="" />
      </div>
      <ul className="navbar-subcontent1">
        <li className="navbar-items">
          <div id="heading">
            <span>
              <div className="hover_color">
                <pre> HOME </pre>
              </div>
              <br />
              <div className="hover_underline"> </div>
            </span>
          </div>
        </li>
        <li className="navbar-items">
          <div id="heading">
            <div className="hover_color">
              <pre> THEME </pre>
              <br />
              <div className="hover_underline"> </div>
            </div>
          </div>
        </li>
        <li className="navbar-items">
          <div id="heading">
            <div className="hover_color">
              <pre> EVENTS </pre>
              <br />
              <div className="hover_underline"> </div>
            </div>
          </div>
        </li>
        <li className="navbar-items">
          <div id="heading">
            <div className="hover_color">
              <pre> SPEAKERS </pre>
              <br />
              <div className="hover_underline"> </div>
            </div>
          </div>
        </li>
        <li className="navbar-items">
          <div id="heading">
            <div className="hover_color">
              <pre> SPONSORS </pre>
              <br />
              <div className="hover_underline"> </div>
            </div>
          </div>
        </li>

        <li className="navbar-items">
          <div id="heading">
            <div className="hover_color">
              <pre> FAQ </pre>
              <br />
              <div className="hover_underline"> </div>
            </div>
          </div>
        </li>
        {/* <li className="navbar-items">
            <NavHashLink
              to="/#footer"
              
            >
              Contact Us
            </NavHashLink>
          </li> */}

        {/* <li className="navbar-items">
            {String(localStorage.getItem("user_role_type")) === "CA" ? (
              <Link
                to="/campus-ambassador"
                className={"navbar-links links-campus-ambassador"}
                rel="noopener noreferrer"
              >
                Campus Ambassador
              </Link>
            ) : (
              <div style={{ background: "transparent" }}>
                {localStorage.getItem("user_role_type") ? (
                  <Link
                    to="/dashboard"
                    className={"navbar-links links-campus-ambassador"}
                    rel="noopener noreferrer"
                  >
                    {String(localStorage.getItem("user_role_type"))}
                  </Link>
                ) : null}
              </div>
            )}
          </li>
        </ul>
        <ul className={"navbar-subcontent2"}>
          {!localStorage.getItem("user_token") ? (
            <li className="navbar-items">
              <Link
                to="/login"
                className={"navbar-links login-padding"}
                rel="noopener noreferrer"
              >
                <span>Login</span>
              </Link>
            </li>
          ) : null}
          {!localStorage.getItem("user_token") ? (
            <li className="navbar-items">
              <p className="or-navbar">or</p>
            </li>
          ) : (
            <li className="navbar-items" style={{ marginLeft: "30px" }}>
              {localStorage.getItem("user_role_type") == "CA" ? (
                <Link
                  to="/campus-ambassador"
                  className={"navbar-links"}
                  rel="noopener noreferrer"
                >
                  <div className="clip" style={{ color: "6f00ff" }}>
                    DashBoard
                  </div>
                </Link>
              ) : (
                <Link
                  to="/dashboard"
                  className={"navbar-links"}
                  rel="noopener noreferrer"
                >
                  <div className="clip" style={{ color: "6f00ff" }}>
                    DashBoard
                  </div>
                </Link>
              )}
            </li>
          )}
          {!localStorage.getItem("user_token") ? (
            <li className="navbar-items">
              <Link
                to="/register"
                className={"navbar-links"}
                rel="noopener noreferrer"
              >
                <div className="clip">Register</div>
              </Link>
            </li>
          ) : (
            <li className="navbar-items">
              <div
                onClick={this.handleLogout}
                className={"navbar-links logout-link"}
                rel="noopener noreferrer"
              >
                
                <span style={{ backgroundColor: "transparent" }}>Logout</span>
              </div>
            </li> 
          )}*/}
      </ul>
      {/* <div className="navbar-mobile-container">
          <div className="Hamburger-container">
            <input type="checkbox" />
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <Link to="/">
            <img
              src={Halflogo}
              alt="navbar-log"
              className="navbar-logo-mobile"
            />
          </Link> */}
      {/* <NavbarMobile /> */}
      {/* </div> */}
      <ul className="navbar-subcontent2">
        <li className="navbar-items">
          <span>LOG IN</span> <br />
        </li>

        <li className="navbar-items">
          <p className="or-navbar">or</p>
        </li>

        <li className="navbar-items register-navbar">REGISTER</li>
        <br />
      </ul>
    </div>
  );
};

export default Header();
