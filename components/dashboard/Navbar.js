import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [activelist, setactivelist] = useState([true, false, false]);
  const router = useRouter();

  useEffect(() => {
    switch (router.asPath) {
      case "/cap/tasks":
        setactivelist([true, false, false]);
        break;
      case "/cap/leaderboard":
        setactivelist([false, true, false]);
        break;
      case "/cap/resources":
        setactivelist([false, false, true]);
        break;
    }
  });

  return (
    <div className="Ca_sidebar">
      <div className="nav-items">
        <ul className="cursor-pointer">
          <Link href="/cap/tasks" passHref>
            <div
              className={
                activelist[0]
                  ? "nav-text-container-active"
                  : "nav-text-container-inactive"
              }
            >
              <div
                className="nav_item_text"
                onClick={() => {
                  setactivelist([true, false, false]);
                }}
              >
                <div className={activelist[0] ? "text_black" : ""}>Tasks</div>
              </div>
            </div>
          </Link>

          <Link href="/cap/leaderboard" passHref>
            <div
              className={
                activelist[1]
                  ? "nav-text-container-active"
                  : "nav-text-container-inactive"
              }
            >
              <div
                className="nav_item_text"
                onClick={() => {
                  setactivelist([false, true, false]);
                }}
              >
                <div className={activelist[1] ? "text_black" : ""}>
                  Leaderboard
                </div>
              </div>
            </div>
          </Link>
          <Link href="/cap/resources" passHref>
            <div
              className={
                activelist[2]
                  ? "nav-text-container-active"
                  : "nav-text-container-inactive"
              }
            >
              <div
                className="nav_item_text"
                onClick={() => {
                  setactivelist([false, false, true]);
                }}
              >
                <div className={activelist[2] ? "text_black" : ""}>
                  CA Rulebook
                </div>
              </div>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
}
