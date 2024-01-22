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
    <div className="w-11/12 flex items-center justify-center p-4 font-[Montserrat] mt-10 flex-wrap gap-5">
      <div className="flex">
        <input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={handleEnter}
          className="w-72 h-10 px-3 py-2 rounded-lg outline-none border-none truncate text-sm"
          type="text"
          value={searchText}
          placeholder="Search you favorite restaurants"
        />
        <button
          onClick={() => {
            onSearch(searchText);
          }}
          className="px-3 py-2 bg-[#1c1c21] text-white rounded-lg ml-4 focus:ring-4 ring-gray-500 transition-transform hover:scale-95 focus:scale-100 cursor-pointer text-sm font-semibold text-center"
        >
          Search
        </button>
      </div>
      <button className="px-3 py-2 bg-[#1c1c21] text-white rounded-lg ml-4 focus:ring-4 ring-gray-500 transition-transform hover:scale-95 focus:scale-100 cursor-pointer text-sm font-semibold text-center">
        Top Rated Restaurants
      </button>
    </div>
  );
};

export default SearchBar;
