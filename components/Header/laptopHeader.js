import Link from "next/link";
import { useState } from "react";
import CustomGradientBtn from "../customGradientBtn";

export const LaptopHeader = () => {
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
            <div
              className={
                "home" == active ? "active_hover_color" : "hover_color"
              }
            >
              <Link href="/">
                <pre> HOME </pre>
              </Link>
            </div>
            <div
              className={
                "home" == active ? "active_hover_underline" : "hover_underline"
              }
            ></div>
          </div>
        </li>
        <li className="navbar-items">
          <div id="heading">
            <div
              className={
                "theme" == active ? "active_hover_color" : "hover_color"
              }
            >
              <Link href="/theme">
                <pre> THEME </pre>
              </Link>

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
              <Link href="/events">
                <pre> EVENTS </pre>
              </Link>

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
              <Link href="/speakers">
                <pre> SPEAKERS </pre>
              </Link>

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
              <Link href="/sponsors">
                <pre> SPONSORS </pre>
              </Link>

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
              <Link href="/faq">
                <pre> FAQ </pre>
              </Link>

              <div
                className={
                  "faq" == active ? "active_hover_underline" : "hover_underline"
                }
              ></div>
            </div>
          </div>
        </li>
      </ul>

      <ul className="navbar-subcontent2">
        <li className="navbar-items register-login">
          <span>LOG IN</span>
        </li>

        <li className="navbar-items">
          <p className="or-navbar">or</p>
        </li>
        <li>
          <div className="navbar-items register-navbar">
            <CustomGradientBtn text={"REGISTER"} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LaptopHeader();
