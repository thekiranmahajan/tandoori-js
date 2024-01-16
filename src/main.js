import React from "react";
import ReactDOM from "react-dom/client";

const main = () => {
  return (
    <>
      <div className="bg-blue-300  h-screen">Hello</div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<main />);
