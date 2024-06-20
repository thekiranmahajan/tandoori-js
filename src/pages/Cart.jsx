import React from "react";
import { CARD_URL, IMG_URL } from "../utils/constants";

const Cart = () => {
  return (
    <div className="flex min-h-screen w-3/4 flex-col items-center justify-center pt-28">
      <img
        className="w-96 mix-blend-multiply"
        src={IMG_URL + "cart_empty_ipmau1"}
        alt="empty cart"
      />
      <h3 className="mt-4 text-lg font-bold text-gray-700 md:text-xl">
        Your cart is empty
      </h3>

      <p className="mt-1 text-center text-xs text-gray-700">
        You can go to home page to view more restaurants
      </p>
    </div>
  );
};
export default Cart;
