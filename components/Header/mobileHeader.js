import Link from "next/link";
export const HeaderMobile = () => {
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
      </ul>
    </div>
  );
};

export default HeaderMobile;
