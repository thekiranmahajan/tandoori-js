import React, { useState } from "react";
import logo from "../../public/images/logo.png";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuthorContext } from "../context/AuthorContextProvider";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { author } = useAuthorContext();
  return (
    <div className=" fixed z-10 flex h-20 w-full items-center justify-between bg-white px-8 shadow-md">
      <div className="flex items-center">
        <Link to="/">
          <img className="h-16" src={logo} alt="TandooriJs_Logo" />
        </Link>
        <div className="mt-4">
          <h2 className="font-Pacifico text-2xl leading-6">Tandoori Js.</h2>
          <a
            href={author?.github_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6 className="ml-8 font-RobotoCondenced text-xs">
              by {author?.name}
            </h6>
          </a>
        </div>
      </div>
      <NavLinks className="mr-5 hidden h-full max-w-[60%] items-center justify-around gap-8 p-10 font-semibold  md:flex" />
      <button
        onClick={toggleMenu}
        className={`transform text-3xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBurger} />
      </button>

      {isOpen && (
        <NavLinks className=" absolute left-0 right-0 top-24 z-10 m-auto flex h-96 w-11/12 flex-col flex-wrap items-center justify-center gap-3  rounded-lg bg-gray-800 bg-opacity-30 text-lg font-semibold backdrop-blur-sm backdrop-filter md:hidden" />
      )}
    </div>
  );
};

export default Header;
