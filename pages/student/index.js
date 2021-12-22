import NoncaNavbar from "../../components/nonca/nonca_navbar";
import NonCAResourcesPage from "./nonCA_resources";

const CapLeaderboard = () => {
  return (
    <div className="nonca-main-container">
      <NoncaNavbar />
      <div>
        <NonCAResourcesPage />
      </div>
    </div>
  );
};

export default CapLeaderboard;
