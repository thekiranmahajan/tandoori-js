import React from "react";

const HomeShimmerUICard = () => {
  return (
    <div className="m-4 flex h-72 w-72 animate-pulse flex-col items-center justify-between rounded-2xl bg-white p-2">
      <div className="h-32 w-64 rounded-xl bg-gray-400 "></div>
      <div className="flex h-32 w-full flex-col justify-around pl-4">
        <div className="h-7 w-52 rounded-lg bg-gray-500"></div>
        <div className="h-5 w-44 rounded-lg bg-gray-400"></div>
        <div className="h-4 w-32 rounded-lg bg-gray-300"></div>
        <div className="h-4 w-32 rounded-lg bg-gray-300"></div>
      </div>
    </div>
  );
};

export default HomeShimmerUICard;
