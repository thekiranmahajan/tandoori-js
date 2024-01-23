import React from "react";
import ReactDOM from "react-dom/client";
import {
  Header,
  Home,
  Footer,
  Search,
  About,
  Cart,
  ErrorPage,
} from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen w-full flex items-center  flex-col overflow-x-hidden">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
