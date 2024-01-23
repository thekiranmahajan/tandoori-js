import React from "react";
import error404 from "../../public/images/error404.svg";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-10 h-full w-full">
      <img className="w-1/4" src={error404} alt="Error 404 page not found" />
      <h3 className="text-3xl font-semibold">Oops!! Something went wrong...</h3>
    </div>
  );
};
export default ErrorPage;
