import React, { useState } from "react";
import logo from "../../public/images/logo.png";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faXmark } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative h-20 w-full flex items-center justify-between bg-white px-8 shadow-md">
      <div className="flex items-center">
        <img className="h-16" src={logo} alt="TandooriJs_Logo" />
        <h2 className="font-[Pacifico] text-2xl">Tandoori Js.</h2>
      </div>
      <NavLinks className="hidden md:flex items-center justify-around h-full max-w-[50%] font-semibold font-[Montserrat] p-10 gap-10" />
      <button
        onClick={toggleMenu}
        className="text-3xl transition-all duration-300 md:hidden"
      >
        <FontAwesomeIcon icon={isOpen ? faBurger : faXmark} />
      </button>

      {!isOpen && (
        <NavLinks className=" bg-gray-800 rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-30 w-11/12 h-52  flex flex-wrap items-center justify-center flex-col md:hidden z-10  absolute m-auto left-0 right-0 top-24 text-xl gap-2" />
      )}
    </div>
  );
};

export default Header;
