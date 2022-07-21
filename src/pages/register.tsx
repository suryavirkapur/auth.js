import { useAtom } from "jotai";
import type { NextPage } from "next";
import Router from "next/router";
import { useState } from "react";
import { isLoggedIn } from "../lib/store";

const Home: NextPage = () => {
  let [loggedIn, setLoggedIn] = useAtom(isLoggedIn);
  let [username, setUsername] = useState<string>("");
  let [password, setPassword] = useState<string>("");
  let [email, setEmail] = useState<string>("");

  let logIn = async () => {
    await fetch("http://localhost:1234/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    if (typeof window !== "undefined") Router.push("/login");
  };
  return (
    <div>
      <h1 className="underline">Register</h1>
      <input
        name="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => {
          logIn();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Home;
