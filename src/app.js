import React from "react";
import ReactDOM from "react-dom/client";
import {
  Home,
  About,
  Cart,
  NotFound,
  RestaurantMenu,
  Search,
  Instamart,
} from "./pages";
import { Header, Footer } from "./components";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import useOnline from "./custom-hooks/useOnline";
import Offline from "./components/Offline";

const App = () => {
  const isOnline = useOnline();
  return (
    <div className="bg-gray-200 min-h-screen w-full flex items-center  flex-col overflow-x-hidden">
      <Header />
      <Outlet />
      {!isOnline && <Offline />}
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <Home /> },
      { path: "search", element: <Search /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "instamart", element: <Instamart /> },
      { path: "restaurant-menu/:resId", element: <RestaurantMenu /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
