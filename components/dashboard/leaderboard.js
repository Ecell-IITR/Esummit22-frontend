const LeaderboardEntry = (leaderboardData) => {
  return (
    <div className='leaderboard-entry-main-container'>
      <div className='leaderboard-entry-subcontainer'>
        <div className='leaderboard-entry-subcontainer1'>
          <div className='leaderboard-entry-item leaderboard-entry-rank'>
            {leaderboardData.rank}
          </div>
          <div className='leaderboard-entry-item leaderboard-entry-name'>
            {leaderboardData.name}
          </div>
        </div>
        <div className='leaderboard-entry-subcontainer2'>
          <div className='leaderboard-entry-item'>
            {leaderboardData.college}
          </div>
          <div className='leaderboard-points'>{leaderboardData.points}</div>
        </div>
      </div>
    </div>
  );
};

export const Leaderboard = ({ allCompetitors }) => {
  return (
    <div className='main-leaderboard-container'>
      <div className='leaderboard-head-container'>
        <div className='leaderboard-head-subcontainer'>
          <div className='leaderboard-head-subcontainer1'>
            <div className='leaderboard-head-item'>Rank</div>
            <div className='leaderboard-head-item leaderboard-name'>Name</div>
          </div>
          <div className='leaderboard-head-subcontainer2'>
            <div className='leaderboard-head-item'>College</div>
            <div className='leaderboard-head-item'>Points</div>
          </div>
        </div>
      </div>
      {allCompetitors?.map((leaderboard_entry, id) => (
        <LeaderboardEntry
          key={id}
          rank={id + 1}
          name={leaderboard_entry.profile.full_name}
          college={leaderboard_entry.college}
          points={leaderboard_entry.points_obtained}
        />
      ))}
    </div>
  );
};

export default Leaderboard;
