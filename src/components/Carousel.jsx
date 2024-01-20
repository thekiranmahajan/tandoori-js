import React, { useState, useEffect, useRef } from "react";
import { CARD_URL } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Carousel = ({ carouselCards }) => {
  const carousel = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
 


  return (
    <div className="w-11/12 h-64  flex flex-col mt-10 ">
      <h3 className="font-bold text-xl pl-4 p-5">What's on your mind?</h3>

      <div className="w-full h-52 relative overflow-hidden">
        <div className="flex items-center justify-between absolute  w-full h-full px-10">
          <button className="z-10  h-10 w-10 text-center rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-90 transition-all duration-200 drop-shadow-xl focus:ring-4 ring-green-400 active:scale-105 disabled:opacity-25 disabled:cursor-not-allowed ">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="z-10 h-10 w-10 text-center rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-90 transition-all duration-200 drop-shadow-xl focus:ring-4 ring-green-400 active:scale-105">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        <div
          ref={carousel}
          className="h-full pl-5 flex  gap-4 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {carouselCards.map((carouselCard) => (
            <img
              key={carouselCard.id}
              className=" object-center h-full w-52 transition-transform hover:scale-110 duration-200 mix-blend-multiply snap-start"
              src={CARD_URL + carouselCard.imageId}
              alt="card img"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
