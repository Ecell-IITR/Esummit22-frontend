export const LeaderboardEntry = () => {
  return (
    <div className="leaderboard-entry-main-container">
      <div className="leaderboard-entry-subcontainer">
        <div className="leaderboard-entry-subcontainer1">
          <div className="leaderboard-entry-item leaderboard-entry-rank">1</div>
          <div className="leaderboard-entry-item leaderboard-entry-name">
            Akash Tiwari
          </div>
        </div>
        <div className="leaderboard-entry-subcontainer2">
          <div className="leaderboard-entry-item">IIT Roorkee</div>
          <div className="leaderboard-points">4000</div>
        </div>
      </div>
    </div>
  );
};

export const Leaderboard = () => {
  return (
    <div className="main-leaderboard-container">
      <div className="leaderboard-head-container">
        <div className="leaderboard-head-subcontainer">
          <div className="leaderboard-head-subcontainer1">
            <div className="leaderboard-head-item">Rank</div>
            <div className="leaderboard-head-item leaderboard-name">Name</div>
          </div>
          <div className="leaderboard-head-subcontainer2">
            <div className="leaderboard-head-item">College</div>
            <div className="leaderboard-head-item">Points</div>
          </div>
        </div>
      </div>
      <LeaderboardEntry />
    </div>
  );
};

export default Leaderboard;
