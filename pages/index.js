import EventDashboardCard from "../components/dashboardEventCard";
import Counter from "../components/section/counter";
import TeamMemberCard from "../components/teamCard";
export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black text-white flex flex-col space-y-8 items-center justify-center">
      <Counter />
      <EventDashboardCard />
    </div>
  );
}
