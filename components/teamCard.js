export const TeamMemberCard = () => {
  return (
    <div className="member-container">
      <div className="main">
        <div className="member-card-post" id="main-post">
          Co-Convenor
        </div>
        <img src="vaibhav.png" className="member-card-image" alt="member" />
      </div>
      <div className="team-card-box">
        <div className="member-card-name" id="main-name">
          VAIBHAV SETHIA
        </div>
        <div className="team-card-description-hidden">
          <div className="mb-2">vaibhav_s@bt.iitr.ac.in </div>
          <div className="mb-2">9638527410 </div>
          <div className="social-links">
            <a href="https://twitter.com">
              <img className="twitter" src="memberTwitter.png" alt="twitter" />
            </a>
            <a className="linkedin" href="https://linkedin.com">
              <img src="memberLinkedin.png" alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
{
  /* <div className="hovered">
          <div className="social-links">
            <span className="social-links">
              <a href="@vaibhav" target="_blank">
                <img
                  src="@vaibhav"
                  className="social-links-handle"
                  alt="social"
                />
              </a>
            </span>
            <span className="social-links">
              <a href="@vaibhav" target="_blank">
                <img
                  src="@linkedin"
                  className="social-links-handle"
                  alt="social"
                />
              </a>
            </span>
          </div>
        </div> */
}
