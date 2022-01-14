import { CA_LEADERBOARD } from '../../utils/APIs';
import FetchApi from '../../utils/fetchAPI';
import { useEffect, useState } from 'react';
import { getAuthToken } from '../../utils';
import Leaderboard from '../../components/dashboard/leaderboard';
import CapLayout from '../../components/cap/capLayout';
import withAuth from '../../utils/withAuth';

const CapLeaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    FetchApi('get', CA_LEADERBOARD, null, getAuthToken())
      .then((res) => {
        setLeaderboardData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CapLayout>
      <Leaderboard allCompetitors={leaderboardData} />
    </CapLayout>
  );
};

export default withAuth(CapLeaderboard);
