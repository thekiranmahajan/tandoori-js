import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import {
  faBellConcierge,
  faCartPlus,
  faTruckFast,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import githubLogo from "../../public/images/github_Logo.svg";
import { useAuthor } from "../context/AuthorContext";
import { useSelector } from "react-redux";

const NavLinks = ({ setIsOpen = () => {}, className }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navSideMenuRef = useRef(null);
  const isOnline = useOnline();
  const { author } = useAuthor();
  const cartItems = useSelector((store) => store.cart.items);

  const handleMenuOutsideClick = (e) => {
    if (navSideMenuRef.current && !navSideMenuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMenuOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleMenuOutsideClick);
    };
  }, []);

  return (
    <div ref={navSideMenuRef} className={className}>
      <NavLink
        to="/"
        onClick={() => setIsOpen(false)}
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
        onClick={() => setIsOpen(false)}
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
        onClick={() => setIsOpen(false)}
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
        onClick={() => setIsOpen(false)}
        className={({ isActive }) => {
          return isActive ? "active-navlink" : "";
        }}
      >
        {({ isActive }) => (
          <>
            {isActive && <FontAwesomeIcon icon={faCartPlus} />}Cart(
            {cartItems.length})
          </>
        )}
      </NavLink>
      <NavLink
        to="/instamart"
        onClick={() => setIsOpen(false)}
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
      <a href={author?.github_url} target="_blank" rel="noopener noreferrer">
        <img
          className={`h-9 w-9 rounded-full ring-4 ${isOnline ? "ring-yellow-400" : "ring-red-400"}`}
          src={githubLogo}
          alt="GitHub Logo"
        />
      </a>
    </div>
  );
};
export default NavLinks;
