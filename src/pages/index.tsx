import { useAtom } from "jotai";
import type { NextPage } from "next";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { isLoggedIn } from "../lib/store";

const Home: NextPage = () => {
  let [loggedIn, setLoggedIn] = useAtom(isLoggedIn);
  useEffect(() => {
    fetch("http://localhost:1234/user", {
      credentials: "include",
    }).then((res) => {
      if (res.status == 200) {
        setLoggedIn(true);
      }
    });
  });
  if (!loggedIn) {
    if (typeof window !== "undefined") Router.push("/login");
  }
  return (
    <div>
      <h1 className="font-bold text-5xl">Hello world!</h1>
    </div>
  );
};

export default Home;
