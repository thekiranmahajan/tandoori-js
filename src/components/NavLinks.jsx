import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ className }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={className}>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? "active-navlink" : "";
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) => {
          return isActive ? "active-navlink" : "";
        }}
      >
        Search
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => {
          return isActive ? "active-navlink" : "";
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) => {
          return isActive ? "active-navlink" : "";
        }}
      >
        Cart
      </NavLink>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};
export default NavLinks;
