import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-20 w-full flex items-center justify-center shadow-md bg-gray-300 font-[Montserrat] text-center">
      ©️ Copyright {currentYear}. Kiran Mahajan. All Rights Reserved
    </div>
  );
};

export default Footer;
