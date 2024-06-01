import React, { useState } from "react";

const TextExpansion = ({ children, styles, maxLength = 50 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.slice(0, maxLength) + "...More"
      : text;
  };
  return (
    <div onClick={toggleExpansion} className={`${styles}`}>
      {isExpanded ? children : truncateText(children, maxLength)}
    </div>
  );
};

export default TextExpansion;
