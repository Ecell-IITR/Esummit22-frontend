import React, { useEffect } from "react";
import { unAuthenticate } from "../utils";
import { useRouter } from "next/router";

export default function Logout() {
  const router = useRouter();
  useEffect(() => {
    console.log("logout");
    unAuthenticate();
    router.push("/");
  });
  return <div>Logging out</div>;
}
