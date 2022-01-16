import TeamMemberCard from '../components/teamCard';
import { TEAM_API } from '../utils/APIs';
import Footer from '../components/footer';
import { NextSeo } from 'next-seo';
export const team = ({ teamMembers }) => {
  <NextSeo
    title='E-summit Team'
    description="This is our enthusiastic team of E-summit'22 IIT Roorkee having unmatched qualilities of hardwork and teamwork. It includes Conveners, Co-Conveners, Technical and Design Heads, ESOC and Managers of Esummit."
    canonical='https://www.esummit.in/team'
    openGraph={{
      url: 'https://www.esummit.in/team',
      title: 'E-summit Team',
      description: 'A blend of devoted,hardworking and smart members.',
      images: [
        {
          url: 'teamPage.png',
          alt: "E-summit'22 Team",
          type: 'image/jpeg/png',
        },
      ],
      site_name: "E-summit'22 Team-Page",
    }}
    additionalMetaTags={[
      {
        name: 'Team Page',
        content:
          'Convener, Co-Convener, Technical Head, Head of Designs, ESOC, Manager.',
      },
    ]}
  />;
  return (
    <div>
      <h1 className='esummit-team'>E-SUMMIT TEAM</h1>
      <div className='team-members'>
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            post={member.post}
            pic={member.profile_image}
            name={member.name}
            mail={member.email}
            phone={member.mobile_no}
            twitter={member.twitter_id}
            linkedin={member.linkedin_id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const response = await fetch(TEAM_API);
  const teamMembers = await response.json();

  return {
    props: {
      teamMembers,
    },
  };
}

export default team;
