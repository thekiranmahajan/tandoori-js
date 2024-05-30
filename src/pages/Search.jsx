import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "../components/Button";

const Search = () => {
  const [isTyping, setIsTyping] = useState(false);
  return (
    <div className="mb-24 flex min-h-screen w-3/4 flex-col items-center pt-28">
      <div className="relative flex h-12 w-3/4 items-center">
        <input
          onFocus={() => setIsTyping(!isTyping)}
          onBlur={() => setIsTyping(!isTyping)}
          className="h-12 w-full truncate rounded-lg py-2 pl-6 pr-20 outline-none ring-yellow-400 focus:ring-4 md:pr-24"
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
              : "absolute right-3 rounded-md bg-[#1c1c24] p-2 text-xs font-semibold text-white md:right-5 "
          }
        />
      </div>
    </div>
  );
};
export default Search;
