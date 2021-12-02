import Counter from "../components/section/counter";
import Card from "../components/card";
import PayNowCard from "../components/payNowCard";
export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black text-white flex flex-col space-y-8 items-center justify-center">
      <h2 className="text-6xl">Welcome to esummit</h2>
      <p className="font-mono">Just for testing TailwindCSS</p>
      <Counter />
      <Card />
      <PayNowCard />
    </div>
  );
}
