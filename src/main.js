import React from "react";
import ReactDOM from "react-dom/client";

const main = () => {
  return (
    <div className="bg-blue-900  h-screen w-full">
      <p>lorem100</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<main />);
