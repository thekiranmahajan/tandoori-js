import React from "react";
import HomeShimmerUICard from "./HomeShimmerUICard";
const HomeShimmerUI = () => {
  const shimmerUICards = [];
  for (let i = 0; i < 20; i++) {
    shimmerUICards.push(<HomeShimmerUICard key={i} />);
  }

  return <div className="flex flex-wrap justify-center">{shimmerUICards}</div>;
};

export default HomeShimmerUI;
