import React, { useState } from "react";
import logo from "../../public/images/logo.png";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative h-20 w-full flex items-center justify-between bg-white px-8 shadow-md">
      <div className="flex items-center">
        <Link to="/">
          <img className="h-16" src={logo} alt="TandooriJs_Logo" />
        </Link>
        <div className="mt-4">
          <h2 className="font-Pacifico text-2xl leading-6">Tandoori Js.</h2>
          <a
            href="https://github.com/thekiranmahajan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6 className="text-xs ml-8 font-RobotoCondenced">
              by Kiran Mahajan
            </h6>
          </a>
        </div>
      </div>
      <NavLinks className="hidden md:flex items-center justify-around h-full max-w-[50%] font-semibold p-10 gap-8  mr-5" />
      <button
        onClick={toggleMenu}
        className={`text-3xl md:hidden transition-transform duration-300 ease-in-out transform ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBurger} />
      </button>

      {isOpen && (
        <NavLinks className=" bg-gray-800 rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-30 w-11/12 h-60 flex flex-wrap items-center justify-center flex-col md:hidden z-10  absolute m-auto left-0 right-0 top-24 text-lg gap-2 font-semibold" />
      )}
    </div>
  );
};

export default Header;
