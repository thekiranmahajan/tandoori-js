import React from "react";
import { CARD_URL } from "../constants";
const Carousel = ({ carouselCards }) => {
  return (
    <div className="w-full h-40 bg-red-400 mt-4 ">
      <div className="h-full flex items-center justify-center gap-4">
        {carouselCards.map((carouselCard) => {
          console.log(CARD_URL + carouselCard.imageId);
          <img
            className="object-contain h-full "
            src={CARD_URL + carouselCard.imageId}
            alt="card img"
          />;
        })}
       
      </div>
    </div>
  );
};

export default Carousel;
