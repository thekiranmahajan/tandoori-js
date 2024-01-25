import React from "react";
import ShimmerUICard from "./ShimmerUICard";
const ShimmerUI = () => {
  const shimmerUICards = [];
  for (let i = 0; i < 20; i++) {
    shimmerUICards.push(<ShimmerUICard key={i} />);
  }

  return <div className="flex flex-wrap justify-center">{shimmerUICards}</div>;
};

export default ShimmerUI;
