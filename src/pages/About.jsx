import React from "react";
import aboutImg from "../../public/images/aboutImg.svg";
import { REACT_LOGO, PARCEL_LOGO, TAILWINDCSS_LOGO } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import REACT_ROUTER_LOGO from "../../public/images/REACT_ROUTER_LOGO.svg";

const About = () => {
  return (
    <div className="h-screen w-11/12 pt-24 flex items-center flex-col">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className=" w-full font-semibold mt-5 text-wrap p-2 text-center text-gray-800">
        Tandoori Js - Reacting to Your Hunger, One Byte at a Time! 🌶️
      </p>
      <p className="w-full flex items-center justify-center font-semibold text-sm mt-1 gap-4 flex-wrap">
        Powered by{" "}
        <img className="h-6 ml-4" src={PARCEL_LOGO} alt="PARCEL_LOGO" /> +
        <img className="h-6" src={REACT_LOGO} alt="REACT_LOGO" /> +
        <img className="h-5" src={REACT_ROUTER_LOGO} alt="REACT_ROUTER_LOGO" />
        +
        <img className="h-5" src={TAILWINDCSS_LOGO} alt="TAILWINDCSS_LOGO" /> +
        <FontAwesomeIcon className="text-2xl" icon={faFontAwesome} />
      </p>
      <img
        className="h-96 bg-blend-multiply"
        src={aboutImg}
        alt="about image"
      />
      <p className="text-sm text-gray-500">
        Welcome to Tandoori Js, a culinary haven where cutting-edge technology
        meets a world of flavors. At Tandoori Js, we go beyond being just a food
        delivery platform; we're a celebration of innovation, taste, and the
        seamless integration of technology into the art of dining.
      </p>
    </div>
  );
};
export default About;
