import React from "react";
import aboutImg from "../../public/images/aboutImg.svg";
import { REACT_LOGO, PARCEL_LOGO, TAILWINDCSS_LOGO } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import REACT_ROUTER_LOGO from "../../public/images/REACT_ROUTER_LOGO.svg";

const About = () => {
  return (
    <div className="min-h-screen w-3/4 flex items-center flex-col pt-28 mb-24">
      <h1 className="text-3xl font-bold">About Us</h1>
      <h2 className=" w-full font-semibold mt-5 text-xl text-wrap p-2  text-gray-800 text-center">
        Tandoori Js - Reacting to Your Hunger, One Byte at a Time! 🌶️
      </h2>
      <p className="w-full flex items-center justify-center font-semibold  mt-1 gap-4 flex-wrap">
        Powered by{" "}
        <img className="h-6 ml-4" src={PARCEL_LOGO} alt="PARCEL_LOGO" /> +
        <img className="h-6" src={REACT_LOGO} alt="REACT_LOGO" /> +
        <img className="h-5" src={REACT_ROUTER_LOGO} alt="REACT_ROUTER_LOGO" />
        +
        <img className="h-5" src={TAILWINDCSS_LOGO} alt="TAILWINDCSS_LOGO" /> +
        <FontAwesomeIcon className="text-2xl" icon={faFontAwesome} />
      </p>
      <img
        className="md:w-1/2 w-3/4 bg-blend-multiply"
        src={aboutImg}
        alt="about image"
      />
      <p className="paragraph">
        Welcome to Tandoori Js, a culinary haven where cutting-edge technology
        meets a world of flavors. At Tandoori Js, we go beyond being just a food
        delivery platform; we're a celebration of innovation, taste, and the
        seamless integration of technology into the art of dining.
      </p>
      <h1 className="headingOne">Our Tech-Forward Approach 🌐🔧</h1>
      <h2 className="headingTwo">1. Technology That Powers Us</h2>
      <p className="paragraph">
        Tandoori Js is built on a foundation of the latest and most robust
        technologies. Our tech stack includes the industry-standard folder
        structure with a meticulously organized codebase, following commit
        standards for transparent and collaborative development. We leverage the
        power of Parcel, incorporating features like Bebel, Image Optimization,
        Tree Shaking, and Code Minification. This ensures that your orders are
        processed and delivered with the utmost efficiency, speed, and security.
      </p>
      <h2 className="headingTwo">2. Code Craftsmanship</h2>
      <p className="paragraph">
        Our commitment to excellence is reflected in every line of code. Each
        component is designed not just for functionality but with an emphasis on
        reusability, readability, and scalability. Dive into our GitHub
        Repository to witness the craftsmanship that goes into making Tandoori
        Js a tech marvel.
      </p>
      <h2 className="headingTwo">3. Seamless Integration</h2>
      <p className="paragraph">
        With the utilization of React Router for smooth navigation and a custom
        hook for fetching real-time data from Swiggy's API, we bring you an
        interface that seamlessly integrates technology into your dining
        experience.
      </p>
      <h1 className="headingOne">Culinary Delights at Your Doorstep 🌮🌍</h1>
      <h2 className="headingTwo">1. Global Cuisines, Local Touch</h2>
      <p className="paragraph">
        Tandoori Js is more than a food delivery platform; it's a culinary
        journey around the world. We bring you a diverse range of cuisines,
        carefully curated to satisfy every taste bud. From local favorites to
        international delights, our menu is a celebration of culinary diversity.
      </p>
      <h2 className="headingTwo">2. Responsive UI with Tailwind CSS</h2>
      <p className="paragraph">
        The magic of Tailwind CSS ensures that our platform is not only
        functional but also visually appealing and user-friendly. Every UI
        element is meticulously crafted to provide a responsive and interactive
        experience, reflecting our commitment to excellence in design.
      </p>
      <h2 className="headingTwo">3. Personalized Search Experience</h2>
      <p className="paragraph">
        Our fully functional search functionality, coupled with an Enter key
        press feature, ensures that finding your favorite restaurants is a
        breeze. This personalized touch adds a layer of convenience to your
        culinary exploration.
      </p>
      <h1 className="headingOne">Join the Tandoori Js Experience 🎉</h1>
      <p className="paragraph">
        At Tandoori Js, we're not just delivering food; we're delivering an
        experience. We invite you to join our community of food enthusiasts who
        appreciate the fusion of flavor and technology. As we continue to
        evolve, expect more exciting features that redefine the art of dining.
        Indulge in the best of both worlds - Tandoori Js, where technology meets
        taste in perfect harmony! 🌐🍽️🚀
      </p>
    </div>
  );
};
export default About;
