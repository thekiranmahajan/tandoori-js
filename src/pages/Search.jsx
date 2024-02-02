import React from "react";

const Search = () => {
  return (
    <div className="min-h-screen w-3/4 flex items-center flex-col pt-28 mb-24">
      <input
        className="relative truncate w-3/4 h-12 rounded-lg py-2 px-6 outline-none"
        type="text"
        placeholder="Search for restaurants to fulfill the bar of hunger 🍟..."
      />
    </div>
  );
};
export default Search;
