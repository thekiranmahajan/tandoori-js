import React from "react";
const RestaurantMenuShimmerUI = () => {
  return (
    <>
      <div className="mt-10 w-9/12 pt-16 md:w-2/3">
        <div className=" h-2 w-28 animate-pulse rounded-lg bg-gray-400 md:w-44"></div>
      </div>
      <div className="mt-8 flex min-h-screen w-9/12 flex-col items-center md:w-2/3">
        <div className="flex  h-36 w-full animate-pulse items-center justify-between rounded-xl bg-white p-2">
          <div className="flex flex-col gap-1 ">
            <div className="h-6 w-40 rounded-lg bg-gray-600 md:w-72 "></div>
            <div className="mt-1 h-5 w-28 rounded-lg bg-gray-500 md:w-52"></div>
            <div className="h-5 w-28 rounded-lg bg-gray-400 md:w-52"></div>
            <div className="mt-2 h-4 w-36 rounded-lg bg-gray-400 md:w-64"></div>
          </div>
          <div className="mr-4 flex flex-col gap-1">
            <div className="h-8 w-16 rounded-lg bg-gray-300"></div>
            <div className="h-8 w-16 rounded-lg bg-gray-300"></div>
          </div>
        </div>
        <div className="mt-1 flex  h-32 w-full animate-pulse flex-col items-center justify-between rounded-xl bg-white p-2 px-3 py-2 ">
          <div className="flex w-full gap-5 p-2 md:ml-6">
            <div className="h-6 w-28 rounded-lg bg-gray-600 "></div>
            <div className="h-6 w-28 rounded-lg bg-gray-600 "></div>
          </div>
          <div className="flex gap-2 overflow-hidden">
            <div className="h-12 w-28 rounded-lg bg-gray-300 md:w-36 lg:w-40"></div>
            <div className="h-12 w-28 rounded-lg bg-gray-300 md:w-36 lg:w-40"></div>
            <div className="hidden h-12 w-28 rounded-lg bg-gray-300 md:flex md:w-36 lg:w-40"></div>
            <div className="hidden h-12 w-28 rounded-lg bg-gray-300 md:w-36 lg:flex lg:w-40"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenuShimmerUI;
