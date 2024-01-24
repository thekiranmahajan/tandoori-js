import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import {
  faBellConcierge,
  faCartPlus,
  faUtensils,
 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};
export default NavLinks;
