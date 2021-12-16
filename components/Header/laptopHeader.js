import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import CustomGradientBtn from "../customGradientBtn";

export const LaptopHeader = () => {
  const [active, setActive] = useState("");

  const router = useRouter();
  useEffect(() => {
    console.log(router);
    switch (router.asPath) {
      case "/":
        setActive("home");
        break;
      case "/sponsors":
        setActive("sponsors");
        break;
      case "/events":
        setActive("events");
        break;
      case "/speakers":
        setActive("speakers");
        break;
      case "/team":
        setActive("team");
        break;
      case "/#faq":
        setActive("faq");
        break;
      default:
        setActive("");
    }
  });
  return (
    <div className="navbar-container" id="navbar">
      <Link href="/" className="navbar-logo-link">
        <img
          src="fete-of-fortitude.png"
          className="navbar-logo"
          alt="E summit 22 fete of fortitude"
        />
      </Link>
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
                "team" == active ? "active_hover_color" : "hover_color"
              }
            >
              <Link href="/team">
                <pre> TEAM </pre>
              </Link>

              <div
                className={
                  "team" == active
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
              <Link href="/#faq">
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
        <Link href="/login">
          <li className="navbar-items register-login">
            <span>LOG IN</span>
          </li>
        </Link>

        <li className="navbar-items">
          <p className="or-navbar">or</p>
        </li>
        <li>
          <Link href="/register">
            <div className="navbar-items register-navbar">
              <CustomGradientBtn size="sm" text={"REGISTER"} />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LaptopHeader;
