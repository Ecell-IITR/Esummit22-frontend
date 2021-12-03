export const HeaderMobile = () => {
  return (
    <div className="mobile-navbar-majorcontainer">
      <input type="checkbox" />

      <div className="Hamburger">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className="image">
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
      </ul>
    </div>
  );
};

export default HeaderMobile;
