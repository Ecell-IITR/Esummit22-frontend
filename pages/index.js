import Head from "next/head";
import { Header } from "../components/Header/header";
import { HeaderMobile } from "../components/Header/mobileHeader";
import Script from "next/script";
import { useState, useEffect } from "react";

export default function Home() {
  const useWindowDimensions = () => {
    const hasWindow = typeof window !== "undefined";

    function getWindowDimensions() {
      const width = hasWindow ? window.innerWidth : null;
      const height = hasWindow ? window.innerHeight : null;
      return {
        width,
        height,
      };
    }

    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      if (hasWindow) {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }, [hasWindow]);

    return windowDimensions;
  };

  const { height, width } = useWindowDimensions();
  const breakpoint = 768;

  return (
    <>
      {width <= breakpoint ? (
        <div>
          <HeaderMobile />
        </div>
      ) : (
        <div>
          <Header />
        </div>
      )}
    </>
  );
}
