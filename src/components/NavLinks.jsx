import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ className }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={className}>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">Cart</Link>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};
export default NavLinks;
