import React from "react";

const SearchBar = ({ searchText, setSearchText, onSearch }) => {
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(searchText);
      console.log("Enter");
    }
  };
  return (
    <div className="w-11/12 h-20 flex items-center justify-between  p-4 font-[Montserrat]">
      <div className="flex">
        <input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={handleEnter}
          className="max-w-60 h-10 p-5 rounded-lg outline-none border-none truncate"
          type="text"
          value={searchText}
          placeholder="Search you favorite restaurants"
        />
        <button
          onClick={() => {
            onSearch(searchText);
          }}
          className="w-16 h-10 bg-fuchsia-500 text-white rounded-lg ml-4 focus:ring-4 ring-blue-400 transition-transform hover:scale-110 focus:scale-95 cursor-pointer"
        >
          Search
        </button>
      </div>
      <button className="py-2 px-4 bg-fuchsia-500 text-white rounded-lg ml-4 focus:ring-4 ring-blue-400 transition-transform hover:scale-110 focus:scale-95 cursor-pointer">
        Top Rated Restaurants
      </button>
    </div>
  );
};

export default SearchBar;
