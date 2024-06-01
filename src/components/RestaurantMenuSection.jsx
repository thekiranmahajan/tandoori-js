import { faAngleUp, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { IMG_URL } from "../utils/constants";
import veg from "../../public/images/veg.svg";
import nonVeg from "../../public/images/non-veg.svg";
import TextExpansion from "./TextExpansion";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const RestaurantMenuSection = ({ title, itemCards }) => {
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();

  const handleAddItem = (itemObj) => {
    console.log(itemObj);
    dispatch(addItem(itemObj));
  };
  return (
    <div className="mt-2 flex w-full cursor-pointer flex-col gap-2  rounded-xl p-2 font-semibold">
      <div
        onClick={() => setIsVisible((prev) => !prev)}
        className="gap mb-3 flex h-12 w-full items-center justify-between px-1 md:pl-10 md:pr-5"
      >
        <h2 className="text-lg font-bold">
          {title} <span>({itemCards?.length})</span>
        </h2>
        <FontAwesomeIcon
          className={`text-xl transition-all duration-300 ${isVisible ? "rotate-0" : "rotate-180"}`}
          icon={faAngleUp}
        />
      </div>

      <div
        className={`transition-all duration-300 ${isVisible ? "block opacity-100" : "hidden opacity-0"}`}
      >
        {itemCards?.map(({ card: { info } }) => {
          const {
            id,
            name,
            price,
            finalPrice,
            defaultPrice,
            imageId,
            description,
            ratings: {
              aggregatedRating: { rating, ratingCountV2 },
            },
            itemAttribute: { vegClassifier },
          } = info;

          return (
            <div
              key={id}
              className="flex justify-between gap-3 border-b-2 border-gray-400 px-1 py-2 md:px-10 md:py-4"
            >
              <div className="w-2/3 overflow-hidden ">
                <img
                  className="h-5 w-5"
                  src={vegClassifier === "NONVEG" ? veg : nonVeg}
                  alt="veg & non-veg"
                />
                <h2 className="py-1 font-bold leading-5 text-gray-800">
                  {name}
                </h2>
                <div className="flex items-center gap-2">
                  {finalPrice && (
                    <h3 className="text-sm text-gray-400 line-through">
                      &#8377;{price / 100}
                    </h3>
                  )}
                  <h3 className="text-sm text-gray-700">
                    &#8377;
                    {finalPrice / 100 || price / 100 || defaultPrice / 100}
                  </h3>
                </div>

                {rating && (
                  <p
                    className={`my-3 flex  items-center text-xs ${rating > 3 ? "text-green-500" : "text-yellow-400"}`}
                  >
                    <FontAwesomeIcon icon={faStar} />
                    {rating}
                    <span className="ml-1 text-black">({ratingCountV2})</span>
                  </p>
                )}
                <TextExpansion maxLength={50} styles={"text-sm text-gray-600"}>
                  {description}
                </TextExpansion>
              </div>

              <div className="flex items-center justify-center ">
                <div className="relative h-32 w-32 rounded-xl  md:h-36 md:w-36">
                  <img
                    className="h-full w-full rounded-xl object-cover mix-blend-multiply"
                    src={IMG_URL + imageId}
                    alt="No Image"
                  />
                  <Button
                    onClick={() => handleAddItem(info)}
                    btnText={"Add"}
                    btnIcon={faPlus}
                    className={
                      "absolute -bottom-3 left-1/2 -translate-x-1/2 transform rounded-xl shadow-lg hover:bg-gray-700 active:scale-90"
                    }
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenuSection;
