import { CA_LEADERBOARD } from "../../utils/APIs";
import FetchApi from "../../utils/fetchAPI";
import { useEffect, useState } from "react";
import { getAuthToken } from "../../utils";
import Leaderboard from "../../components/dashboard/leaderboard";
import Profile from "../../components/cap/cap_profile";
import Navbar from "../../components/dashboard/Navbar";
import CustomGradientBtn from "../../components/customGradientBtn";
import { useMobile, useUpdateMobile } from "../../utils/MobileContext";

export const capLeaderboard = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [leaderboard_data, setLeaderboardData] = useState([]);
  FetchApi("get", CA_LEADERBOARD, null, getAuthToken()).then((res) => {
    setLeaderboardData(res.data);
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const setMobile = useUpdateMobile();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setMobile();
  });

  return (
    <div className="main-leaderboard-page">
      {useMobile().isMobile ? null : <Navbar />}
      <div className="sub-leaderboard-page">
        <div className="leaderboard-page-profile">
          <Profile />
        </div>
        <Leaderboard allCompetitors={leaderboard_data} />
      </div>
    </div>
  );
};

export default capLeaderboard;
