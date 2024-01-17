import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

const Main = () => {
  return (
    <div className="bg-gray-200 min-h-screen w-full">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
