import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const HeaderMobile = () => {
  const [isCA, setIsCA] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("user_role_type") === "CA") setIsCA(true);
    return () => {
      setIsCA(false);
    };
  }, []);
  return (
    <div className="mobile-navbar-majorcontainer">
      <input type="checkbox" />

      <div className="Hamburger">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <Link href="/" className="image">
        <img
          src="/fete-of-fortitude.png"
          alt="navbar-logo"
          className="navbar-logo-mobile"
        />
      </Link>
      <ul className="mobilenavMenu-subcontent1">
        <li className="mobilenavMenu-items">
          <Link href="/">
            <div className="mobilenavMenu-links">HOME</div>
          </Link>
        </li>
        {
          <li className="mobilenavMenu-items">
            <Link href="/team">
              <div className="mobilenavMenu-links">TEAM</div>
            </Link>
          </li>
        }
        <li className="mobilenavMenu-items">
          <Link href="/events">
            <div className="mobilenavMenu-links">EVENTS</div>
          </Link>
        </li>
        <li className="mobilenavMenu-items">
          <Link href="/speakers">
            <div className="mobilenavMenu-links">SPEAKERS</div>
          </Link>
        </li>
        <li className="mobilenavMenu-items">
          <Link href="/sponsors">
            <div className="mobilenavMenu-links">SPONSORS</div>
          </Link>
        </li>
        <li className="mobilenavMenu-items">
          <Link href="/#faq">
            <div className="mobilenavMenu-links">FAQ</div>
          </Link>
        </li>
        {isCA && (
          <>
            <li className="mobilenavMenu-items">
              <Link href="/#faq">
                <div className="mobilenavMenu-links mobilenavMenu-ca-tag">
                  CAMPUS AMBASSADOR
                </div>
              </Link>
            </li>
            <li className="mobilenavMenu-items">
              <Link href="/cap/tasks">
                <div className="mobilenavMenu-links">TASKS</div>
              </Link>
            </li>
            <li className="mobilenavMenu-items">
              <Link href="/cap/leaderboard">
                <div className="mobilenavMenu-links">LEADERBOARD</div>
              </Link>
            </li>
            <li className="mobilenavMenu-items">
              <Link href="/cap/resources">
                <div className="mobilenavMenu-links">CA RULEBOOK</div>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default HeaderMobile;
