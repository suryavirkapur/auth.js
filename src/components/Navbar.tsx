import { useAtom } from "jotai";
import Link from "next/link";
import React from "react";
import { isLoggedIn } from "../lib/store";

function Navbar() {
  let [loggedIn, _] = useAtom(isLoggedIn);
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {loggedIn && (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}
          {!loggedIn && (
            <>
              <Link href="/logout">Logout</Link>
            </>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
