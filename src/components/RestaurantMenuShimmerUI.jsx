import React from "react";
const RestaurantMenuShimmerUI = () => {
  return (
    <div className="md:w-2/3 w-9/12 min-h-screen flex flex-col items-center mt-12">
      <div className="animate-pulse  w-full h-36 rounded-xl p-2 bg-white flex items-center justify-between">
        <div className="flex flex-col gap-1 ">
          <div className="md:w-72 w-56 h-6 bg-gray-600 rounded-lg "></div>
          <div className="md:w-52 w-36 h-5 mt-1 bg-gray-500 rounded-lg"></div>
          <div className="md:w-52 w-36 h-5 bg-gray-400 rounded-lg"></div>
          <div className="md:w-64 w-48 h-4 mt-2 bg-gray-400 rounded-lg"></div>
        </div>
        <div className="flex flex-col gap-1 mr-4">
          <div className="w-16 h-8 bg-gray-300 rounded-lg"></div>
          <div className="w-16 h-8 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
      <div className="animate-pulse mt-1  w-full h-28 rounded-xl p-2 bg-white flex flex-col items-center justify-between ">
        <div className="flex w-full gap-5 ml-6">
          <div className="w-28 h-6 bg-gray-600 rounded-lg "></div>
          <div className="w-28 h-6 bg-gray-600 rounded-lg "></div>
        </div>
        <div className="flex gap-1">
          <div className="w-28 h-12 bg-gray-300 rounded-lg"></div>
          <div className="w-28 h-12 bg-gray-300 rounded-lg"></div>
          <div className="w-28 h-12 bg-gray-300 rounded-lg"></div>
          <div className="w-28 h-12 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
      <hr className="bg-red-800" />
    </div>
  );
};

export default RestaurantMenuShimmerUI;
