import React from "react";
const RestaurantMenuShimmerUI = () => {
  return (
    <>
      <div className="md:w-2/3 w-9/12 mt-10 pt-16">
        <div className=" animate-pulse h-2 md:w-44 w-28 bg-gray-400 rounded-lg"></div>
      </div>
      <div className="md:w-2/3 w-9/12 min-h-screen flex flex-col items-center mt-8">
        <div className="animate-pulse  w-full h-36 rounded-xl p-2 bg-white flex items-center justify-between">
          <div className="flex flex-col gap-1 ">
            <div className="md:w-72 w-40 h-6 bg-gray-600 rounded-lg "></div>
            <div className="md:w-52 w-28 h-5 mt-1 bg-gray-500 rounded-lg"></div>
            <div className="md:w-52 w-28 h-5 bg-gray-400 rounded-lg"></div>
            <div className="md:w-64 w-36 h-4 mt-2 bg-gray-400 rounded-lg"></div>
          </div>
          <div className="flex flex-col gap-1 mr-4">
            <div className="w-16 h-8 bg-gray-300 rounded-lg"></div>
            <div className="w-16 h-8 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
        <div className="animate-pulse mt-1  w-full h-32 px-3 py-2 rounded-xl p-2 bg-white flex flex-col items-center justify-between ">
          <div className="flex w-full gap-5 md:ml-6 p-2">
            <div className="w-28 h-6 bg-gray-600 rounded-lg "></div>
            <div className="w-28 h-6 bg-gray-600 rounded-lg "></div>
          </div>
          <div className="flex gap-2 overflow-hidden">
            <div className="w-28 md:w-36 lg:w-40 h-12 bg-gray-300 rounded-lg"></div>
            <div className="w-28 md:w-36 lg:w-40 h-12 bg-gray-300 rounded-lg"></div>
            <div className="hidden md:flex w-28 md:w-36 lg:w-40 h-12 bg-gray-300 rounded-lg"></div>
            <div className="hidden lg:flex w-28 md:w-36 lg:w-40 h-12 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenuShimmerUI;
