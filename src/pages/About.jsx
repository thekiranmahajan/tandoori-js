import React from "react";
import aboutImg from "../../public/images/aboutImg.svg";

const About = () => {
  return (
    <div className="h-screen w-full pt-20 flex items-center flex-col">
      <h1>About-Us</h1>
      <img
        className="h-96 bg-blend-multiply"
        src={aboutImg}
        alt="about image"
      />
    </div>
  );
};
export default About;
