import React from "react";
import logo from "../../public/images/logo.png";
const Header = () => {
  return (
    <div className="h-20 w-full flex items-center justify-between bg-white px-8 shadow-md">
      <div className="flex items-center">
        <img className="h-16" src={logo} alt="TandooriJs_Logo" />
        <h2 className="font-[Pacifico] text-2xl">TandooriJs.</h2>
      </div>
      <div className="flex items-center justify-around h-full max-w-[50%]   font-semibold font-[Montserrat] p-10 gap-10">
        <a href="#">Home</a>
        <a href="#">Search</a>
        <a href="#">About</a>
        <a href="#">Cart</a>
      </div>
    </div>
  );
};

export default Header;
