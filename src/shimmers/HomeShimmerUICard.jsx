import React from "react";

const HomeShimmerUICard = () => {
  return (
    <div className="animate-pulse m-4 w-72 h-72 rounded-2xl p-2 bg-white flex items-center justify-between flex-col">
      <div className="w-64 h-32 rounded-xl bg-gray-400 "></div>

      <div className="w-full h-32 pl-4 flex  justify-around flex-col">
        <div className="w-52 h-7 bg-gray-500 rounded-lg"></div>
        <div className="w-44 h-5 bg-gray-400 rounded-lg"></div>
        <div className="w-32 h-4 bg-gray-300 rounded-lg"></div>
        <div className="w-32 h-4 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default HomeShimmerUICard;
