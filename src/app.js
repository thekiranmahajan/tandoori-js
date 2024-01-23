import React from "react";
import ReactDOM from "react-dom/client";
import { Header, Body, Footer, Search, About, Cart } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen w-full flex items-center  flex-col overflow-x-hidden">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
