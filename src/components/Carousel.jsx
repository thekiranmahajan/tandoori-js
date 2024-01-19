import React from "react";
import { CARD_URL } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Carousel = ({ carouselCards }) => {
  return (
    <div className="w-11/12 h-64  flex flex-col mt-10 ">
      <h3 className="font-bold text-xl pl-4 p-5">What's on your mind?</h3>
      <div className="w-full h-52 relative">
        <div className="h-full pl-10 flex items-center justify-center gap-4 overflow-x-auto overflow-y-hidden ">
          <button className="z-10 absolute left-1  h-10 w-10 text-center rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-90 transition-all duration-200 drop-shadow-xl focus:ring-4 ring-green-400 active:scale-105">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          {carouselCards.map((carouselCard) => (
            <img
              key={carouselCard.id}
              className="object-center h-full w-52 transition-transform hover:scale-110 duration-200 mix-blend-multiply"
              src={CARD_URL + carouselCard.imageId}
              alt="card img"
            />
          ))}
          <button className="z-10 absolute right-1  h-10 w-10 text-center rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-90 transition-all duration-200 drop-shadow-xl focus:ring-4 ring-green-400 active:scale-105">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
