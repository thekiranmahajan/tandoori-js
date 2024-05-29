import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import {
  faBellConcierge,
  faCartPlus,
  faTruckFast,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import useOnline from "../custom-hooks/useOnline";
import AuthorContext from "../context/AuthorContext";
import githubLogo from "../../public/images/github_Logo.svg";

const NavLinks = ({ className }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { author } = useContext(AuthorContext);
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
      <a href={author?.github_url} target="_blank" rel="noopener noreferrer">
        <img
          className="h-9 w-9 rounded-full ring-4 ring-yellow-300"
          src={githubLogo}
          alt="GitHub Logo"
        />
      </a>
    </div>
  );
};
export default NavLinks;
