import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Button = ({
  onClick = () => {},
  btnText,
  btnIcon = "",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-1 rounded-lg  bg-[#1c1c21] px-3 py-2 text-center text-sm font-semibold text-white ring-yellow-400 transition-transform hover:scale-95 focus:scale-100 focus:ring-4 ${className}`}
    >
      {btnIcon && <FontAwesomeIcon icon={btnIcon} />}
      {btnText}
    </button>
  );
};

export default Button;
