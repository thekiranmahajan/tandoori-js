import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { IMG_URL } from "../utils/constants";

const RestaurantMenuSection = ({ title, itemCards }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="mt-2 flex w-full cursor-pointer flex-col gap-2  rounded-xl p-2 font-semibold">
      <div
        onClick={() => setIsVisible((prev) => !prev)}
        className="mb-3 flex h-12 w-full items-center justify-between pl-10 pr-5"
      >
        <h2 className="text-lg font-bold">
          {title} <span>({itemCards?.length})</span>
        </h2>
        <FontAwesomeIcon
          className={`text-xl transition-all duration-300 ${isVisible ? "rotate-180" : "rotate-0"}`}
          icon={faAngleUp}
        />
      </div>

      <div
        className={`transition-all duration-300 ${isVisible ? "block opacity-100" : "hidden opacity-0"}`}
      >
        {itemCards?.map((itemCard, i) => (
          <div
            key={itemCard?.card?.info?.id}
            className="flex justify-between border-b-2 border-gray-400 px-10 py-4"
          >
            <div>p</div>
            <div>
              <img
                className="h-40 w-40 rounded-xl"
                src={IMG_URL + itemCard?.card?.info?.imageId}
                alt={itemCard?.card?.info?.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenuSection;
