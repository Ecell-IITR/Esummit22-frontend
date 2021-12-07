import React, { useState, useRef, useLayoutEffect } from "react";
import Counter from "../components/section/counter";

export default function Home() {
  const [animate, doAnimate] = useState(false);

  const ourRef = useRef(null);

  const disableScrolling = () => {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  };

  const enableScrolling = () => {
    window.onscroll = function () {};
  };

  const onScroll = () => {
    if (!process.browser) return;
    // const scrollPosition = window.scrollY;
    // console.log("yoyo:", scrollPosition, topPosition)
    doAnimate(true);
    window.scrollTo(0, 0);
  };

  useLayoutEffect(() => {
    if (!process.browser) return;
    disableScrolling();
    window.addEventListener("scroll", () => {
      doAnimate(true);
      setTimeout(() => enableScrolling(), 2000);
    });
  }, []);

  return (
    <div>
      <section className="flex items-start justify-between landing overflow-hidden">
        <img src="/leftLine.svg" alt="leftLine" />

        <div className="flex flex-col items-center text-center mx-auto">
          <p className="text-lg text-white font-bold uppercase">
            21-23 January
          </p>
          <h1 className="text-4xl text-white font-bold uppercase">
            E-summit '22
          </h1>
          <img src="/headLine.svg" id="headLine" alt="headLine" />
          <div className="flex justify-center relative">
            <div className="bg-dark text-white absolute w-full h-full z-10 mix-blend-multiply	"></div>
            <div className="bg-shine text-white absolute w-full h-full z-10 mix-blend-multiply	"></div>
            <img
              ref={ourRef}
              id="landingLogo"
              className={animate && "landing-logo-animate"}
              src="/landingLogo.png"
              alt="logo"
            />
          </div>
        </div>

        <img src="/rightLine.svg" alt="rightLine" />
      </section>
      <section className="text-white">speakers</section>
      <Counter />
    </div>
  );
}
