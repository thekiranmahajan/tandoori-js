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
      className={`px-3 py-2 bg-[#1c1c21] text-white rounded-lg  focus:ring-4 ring-yellow-300 transition-transform hover:scale-95 focus:scale-100 cursor-pointer text-sm font-semibold text-center flex items-center gap-1 ${className}`}
    >
      {btnIcon && <FontAwesomeIcon icon={btnIcon} />}
      {btnText}
    </button>
  );
};

export default Button;
