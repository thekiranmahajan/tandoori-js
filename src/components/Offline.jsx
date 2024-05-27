import React from "react";

const Offline = () => {
  return (
    <div className="z-10 fixed top-0 left-0 flex h-screen w-screen items-center justify-center flex-col bg-[#01121b5f] backdrop-blur-[3px] cursor-not-allowed gap-10">
      <div className="rounded-full bg-yellow-400 w-64 h-64 flex items-center justify-center">
        <span className="text-9xl ">☠️</span>
      </div>
      <h3 className="font-semibold text-2xl w-1/2 text-white">
        Oops!! check your Internet connection and try again later.
      </h3>
    </div>
  );
};

export default Offline;
