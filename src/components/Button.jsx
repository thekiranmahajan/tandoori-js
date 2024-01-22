import React from "react";

const Button = ({ onClick = () => {}, btnText }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 bg-[#1c1c21] text-white rounded-lg ml-4 focus:ring-4 ring-gray-500 transition-transform hover:scale-95 focus:scale-100 cursor-pointer text-sm font-semibold text-center"
    >
      {btnText}
    </button>
  );
};

export default Button;
