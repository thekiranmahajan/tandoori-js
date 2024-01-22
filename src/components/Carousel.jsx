import React, { useState, useEffect, useRef } from "react";
import { CARD_URL } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ carouselCards }) => {
  if (!carouselCards) return null; // when api call on small screens remove Carousel
  const carousel = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const moveNext = () => {
    setMaxIndex(
      Math.floor(carousel.current.scrollWidth / carousel.current.offsetWidth) -
        1
    );
    console.log(maxIndex);
    if (currentIndex <= maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    if (carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  return (
    <div className="w-11/12 h-64 flex flex-col mt-10">
      <div className="flex items-center justify-between w-full">
        <h3 className="font-bold text-xl pl-4 p-5">What's on your mind?</h3>
        <div className="flex gap-4">
          <button
            onClick={movePrev}
            className="h-10 w-10 text-center rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-90 transition-all duration-200 drop-shadow-xl focus:ring-4 ring-green-400 active:scale-105 disabled:opacity-25 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            onClick={moveNext}
            className="h-10 w-10 text-center rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-90 transition-all duration-200 drop-shadow-xl focus:ring-4 ring-green-400 active:scale-105 disabled:opacity-25 disabled:cursor-not-allowed"
            disabled={currentIndex > maxIndex}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className="w-full h-52 relative overflow-hidden">
        <div
          ref={carousel}
          className="h-full pl-5 flex gap-4 overflow-hidden scroll-smooth"
        >
          {carouselCards.map((carouselCard) => (
            <img
              key={carouselCard.id}
              className="object-center h-full w-52 transition-transform hover:scale-110 duration-200 mix-blend-multiply "
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
