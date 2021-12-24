import TeamMemberCard from "../components/teamCard";
import { TEAM_API } from "../utils/APIs";
import Footer from "../components/footer";
export const team = ({ teamMembers }) => {
  return (
    <div>
      <div className="esummit-team">
        <p>E-SUMMIT TEAM</p>
      </div>
      <div className="team-members">
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

export async function getServerSideProps() {
  const res = await fetch(TEAM_API);
  const teamMembers = await res.json();

  return {
    props: {
      teamMembers,
    },
  };
}

export default team;
