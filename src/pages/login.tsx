import { useAtom } from "jotai";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { isLoggedIn } from "../lib/store";

const Home: NextPage = () => {
  let [loggedIn, setLoggedIn] = useAtom(isLoggedIn);
  let [username, setUsername] = useState<string>("");
  let [password, setPassword] = useState<string>("");
  let router = useRouter();

  let logIn = async () => {
    let res = await fetch("http://localhost:1234/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: username,
        password,
      }),
    });
    let data = await res.json();
    console.log(data);
    if (res.status == 200) setLoggedIn(true);
    if (typeof window !== "undefined") router.push("/");
  };
  return (
    <div>
      <h1 className="container">Login</h1>
      <input
        name="username"
        type="email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
