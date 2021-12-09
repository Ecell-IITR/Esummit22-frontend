import Counter from "../components/section/counter";
export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black text-white flex flex-col space-y-8 items-center justify-center">
      <Counter />
    </div>
  );
}
