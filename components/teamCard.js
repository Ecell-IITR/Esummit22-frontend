export const TeamMemberCard = (member) => {
  return (
    <div className='member-container'>
      <div className='main'>
        <div className='member-card-post'>{member.post}</div>
        <img
          src={member.pic}
          className='member-card-image'
          alt={`${member.name} image`}
        />
      </div>
      <div className='team-card-box'>
        <div className='member-card-name'>{member.name}</div>
        <div className='team-card-description-hidden'>
          <div className='mb-2'>{member.mail}</div>
          <div className='mb-2'>{member.phone}</div>
          <div className='social-links'>
            <a href={member.twitter} target='_blank' rel='noreferrer'>
              <img
                className='twitter'
                src='memberTwitter.png'
                alt='twitter icon'
              />
            </a>
            <a
              className='linkedin'
              href={member.linkedin}
              target='_blank'
              rel='noreferrer'
            >
              <img src='memberLinkedin.png' alt='linkedin icon' />
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
