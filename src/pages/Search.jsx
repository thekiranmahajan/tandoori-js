import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "../components/Button";

const Search = () => {
  const [isTyping, setIsTyping] = useState(false);
  return (
    <div className="min-h-screen w-3/4 flex items-center flex-col pt-28 mb-24">
      <div className="relative w-3/4 h-12 flex items-center">
        <input
          onFocus={() => setIsTyping(!isTyping)}
          onBlur={() => setIsTyping(!isTyping)}
          className="truncate w-full h-12 rounded-lg py-2 pl-6 pr-20 md:pr-24 outline-none focus:ring-4 ring-yellow-300"
          type="text"
          placeholder="Search for restaurants to fulfill the bar of hunger 🍟..."
        />
        <FontAwesomeIcon
          className={isTyping ? "hidden" : "absolute right-4 text-xl"}
          icon={faMagnifyingGlass}
        />
        <Button
          btnText={"Enter"}
          className={
            !isTyping
              ? "hidden"
              : "absolute font-semibold right-3 md:right-5 text-xs bg-[#1c1c24] text-white rounded-md p-2 "
          }
        />
      </div>
    </div>
  );
};
export default Search;
