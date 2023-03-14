import React from "react";
import Logout from "./Logout";

const NavBar = ({ isLoggedIn })  => {
  return (
    <nav>
      <ul>
        <li>Posts</li>
        {isLoggedIn ? (
          <li><Logout /></li>
        ) : (
          <>
            <li>Login In</li>
            <li>Sign Up</li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
