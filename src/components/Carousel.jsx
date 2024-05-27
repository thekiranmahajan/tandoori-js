import React, { useState, useEffect, useRef } from "react";
import { CARD_URL } from "../utils/constants";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CircularBtn from "./CircularBtn";

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
        1,
    );
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
    <div className="mt-10 flex h-64 w-11/12 flex-col  ">
      <div className="flex w-full items-center justify-between">
        <h3 className="p-5 pl-4 text-xl font-bold">What's on your mind?</h3>
        <div className="flex gap-4">
          <CircularBtn
            onClick={movePrev}
            disabled={currentIndex === 0}
            icon={faArrowLeft}
          />
          <CircularBtn
            onClick={moveNext}
            disabled={currentIndex > maxIndex}
            icon={faArrowRight}
          />
        </div>
      </div>
      <div className="relative h-52 w-full overflow-hidden">
        <div
          ref={carousel}
          className="flex h-full gap-8 overflow-hidden scroll-smooth pl-5"
        >
          {carouselCards.map((carouselCard) => (
            <img
              key={carouselCard.id}
              className="h-full w-52 cursor-pointer object-center mix-blend-multiply transition-transform duration-200 hover:scale-110"
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
