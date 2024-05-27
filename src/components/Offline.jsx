import React from "react";

const Offline = () => {
  return (
    <div className="fixed left-0 top-0 z-10 flex h-screen w-screen cursor-not-allowed flex-col items-center justify-center gap-10 bg-[#01121b5f] backdrop-blur-[3px]">
      <div className="flex h-64 w-64 items-center justify-center rounded-full bg-yellow-400">
        <span className="text-9xl ">☠️</span>
      </div>
      <h3 className="w-1/2 text-2xl font-semibold text-white">
        Oops!! check your Internet connection and try again later.
      </h3>
    </div>
  );
};

export default Offline;
