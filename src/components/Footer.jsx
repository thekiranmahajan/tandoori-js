import React from "react";
import { useAuthor } from "../context/AuthorContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { author } = useAuthor();
  return (
    <div className="flex h-20 w-full items-center justify-center gap-1 bg-gray-300  text-center font-semibold shadow-md">
      <span> © {currentYear} All Rights Reserved </span>
      <a href={author?.github_url} target="_blank" rel="noopener noreferrer">
        {author?.name}
      </a>
    </div>
  );
};

export default Footer;
