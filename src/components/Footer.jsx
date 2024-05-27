import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex h-20 w-full items-center justify-center gap-1 bg-gray-300  text-center font-semibold shadow-md">
      <span> © {currentYear} All Rights Reserved </span>
      <a
        href="https://github.com/thekiranmahajan"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kiran Mahajan
      </a>
    </div>
  );
};

export default Footer;
