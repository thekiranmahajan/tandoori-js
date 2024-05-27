import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import {
  faBellConcierge,
  faCartPlus,
  faTruckFast,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useOnline from "../custom-hooks/useOnline";

const NavLinks = ({ className }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className={className}>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? "active-navlink" : "";
        }}
      >
        {({ isActive }) => (
          <>{isActive && <FontAwesomeIcon icon={faBellConcierge} />}Home</>
        )}
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) => {
          return isActive ? "active-navlink" : "";
        }}
      >
        {({ isActive }) => (
          <>{isActive && <FontAwesomeIcon icon={faSearchengin} />}Search</>
        )}
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => {
          return isActive ? "active-navlink" : "";
        }}
      >
        {({ isActive }) => (
          <>{isActive && <FontAwesomeIcon icon={faUtensils} />}About</>
        )}
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) => {
          return isActive ? "active-navlink" : "";
        }}
      >
        {({ isActive }) => (
          <>{isActive && <FontAwesomeIcon icon={faCartPlus} />}Cart</>
        )}
      </NavLink>
      <NavLink
        to="/instamart"
        className={({ isActive }) => {
          return isActive ? "active-navlink" : "";
        }}
      >
        {({ isActive }) => (
          <>{isActive && <FontAwesomeIcon icon={faTruckFast} />}Instamart</>
        )}
      </NavLink>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      <span> {isOnline ? "🟢" : "🔴"}</span>
    </div>
  );
};
export default NavLinks;
