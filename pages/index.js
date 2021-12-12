import Counter from "../components/section/counter";
import CustomGradientBtn from "../components/customGradientBtn";
import Link from "next/link";
import HomeSpeakers from "../components/home_page/home_speaker";
import HomeEvents from "../components/home_page/home_events";
import Faq from "../components/faq/faq";

export default function Home() {
  return (
    <div 
    // className="h-screen overflow-hidden bg-black text-white flex flex-col space-y-8 items-center justify-center"
    >
      <HomeSpeakers />
      <Link href="/speakers">
        <div className="home-view-all-button">
          <CustomGradientBtn text="View All" color="black" />
        </div>
      </Link>
      <Counter />
      <HomeEvents />
      <Link href="/events">
        <div className="home-view-all-button">
          <CustomGradientBtn text="View All" color="black" />
        </div>
      </Link>
      <Faq />
    </div>
  );
}
