import { useAtom } from "jotai";
import type { NextPage } from "next";
import Router from "next/router";
import { useEffect, useState } from "react";
import { isLoggedIn } from "../lib/store";

const Home: NextPage = () => {
  let [loggedIn, setLoggedIn] = useAtom(isLoggedIn);
  useEffect(() => {
    setLoggedIn(false);
    fetch("http://localhost:1234/logout", { method: "POST" });
    Router.push("/");
  });
  return <></>;
};

export default Home;
