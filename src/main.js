import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const Main = () => {
  return (
    <div className="bg-gray-200 min-h-screen w-full flex items-center  flex-col overflow-x-hidden">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
