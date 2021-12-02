import Link from "next/link";
import { useState } from "react";
export const Header = () => {
  //const [active, setactive] = useState("home")
  const active = "";
  return (
    <div className="navbar-container" id="navbar">
      <div className="navbar-logo-link">
        <img
          src="fete-of-fortitude.png"
          className="navbar-logo"
          alt="E summit 22 fete of fortitude"
        />
      </div>
      <ul className="navbar-subcontent1">
        <li className="navbar-items">
          <div id="heading">
            <span>
              <div
                className={
                  "home" == active ? "active_hover_color" : "hover_color"
                }
              >
                <pre> HOME </pre>
              </div>
              <br />
              <div
                className={
                  "home" == active
                    ? "active_hover_underline"
                    : "hover_underline"
                }
              >
                {" "}
              </div>
            </span>
          </div>
        </li>
        <li className="navbar-items">
          <div id="heading">
            <div
              className={
                "theme" == active ? "active_hover_color" : "hover_color"
              }
            >
              <pre> THEME </pre>
              <br />
              <div
                className={
                  "theme" == active
                    ? "active_hover_underline"
                    : "hover_underline"
                }
              >
                {" "}
              </div>
            </div>
          </div>
        </li>
        <li className="navbar-items">
          <div id="heading">
            <div
              className={
                "events" == active ? "active_hover_color" : "hover_color"
              }
            >
              <pre> EVENTS </pre>
              <br />
              <div
                className={
                  "events" == active
                    ? "active_hover_underline"
                    : "hover_underline"
                }
              >
                {" "}
              </div>
            </div>
          </div>
        </li>
        <li className="navbar-items">
          <div id="heading">
            <div
              className={
                "speakers" == active ? "active_hover_color" : "hover_color"
              }
            >
              <pre> SPEAKERS </pre>
              <br />
              <div
                className={
                  "speakers" == active
                    ? "active_hover_underline"
                    : "hover_underline"
                }
              >
                {" "}
              </div>
            </div>
          </div>
        </li>
        <li className="navbar-items">
          <div id="heading">
            <div
              className={
                "sponsors" == active ? "active_hover_color" : "hover_color"
              }
            >
              <pre> SPONSORS </pre>
              <br />
              <div
                className={
                  "sponsors" == active
                    ? "active_hover_underline"
                    : "hover_underline"
                }
              >
                {" "}
              </div>
            </div>
          </div>
        </li>

        <li className="navbar-items">
          <div id="heading">
            <div
              className={"faq" == active ? "active_hover_color" : "hover_color"}
            >
              <pre> FAQ </pre>
              <br />
              <div
                className={
                  "faq" == active ? "active_hover_underline" : "hover_underline"
                }
              >
                {" "}
              </div>
            </div>
          </div>
        </li>
      </ul>

      <ul className="navbar-subcontent2">
        <li className="navbar-items">
          <span>
            LOG IN
            <br />{" "}
            <div>
              <pre> </pre>
            </div>{" "}
          </span>
        </li>

        <li className="navbar-items">
          <p className="or-navbar">or</p>
          <br />
        </li>
        <li>
          <div className="navbar-items register-navbar">REGISTER</div>
        </li>
      </ul>
    </div>
  );
};

export default Header();
