import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black text-white flex flex-col space-y-8 items-center justify-center">
      <h2 className="text-6xl">Welcome to esummit</h2>
      <h2 className={styles.heading}>2022</h2>
      <p className="font-mono">Just for testing TailwindCSS</p>
    </div>
  );
}
