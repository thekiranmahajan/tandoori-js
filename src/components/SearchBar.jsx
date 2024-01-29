import React from "react";
import Button from "./Button";

const SearchBar = ({ searchText, setSearchText, onSearch }) => {
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(searchText);
    }
  };
  return (
    <div className="w-11/12 flex items-center justify-center p-4   mt-10 flex-wrap gap-5 md:justify-between">
      <div className="flex items-center justify-center gap-0">
        <input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={handleEnter}
          className="md:w-72 h-10 px-3 py-2 rounded-lg outline-none border-none truncate text-sm"
          type="text"
          value={searchText}
          placeholder="Search you favorite restaurants"
        />
        <Button
          btnText={"Search"}
          onClick={() => {
            onSearch(searchText);
          }}
        />
      </div>
      <Button btnText={"Top Rated Restaurants"} />
    </div>
  );
};

export default SearchBar;
