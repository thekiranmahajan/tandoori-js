import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Header, Footer } from "./components";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import useOnline from "./custom-hooks/useOnline";
import Offline from "./components/Offline";
import { Home, About, Cart, NotFound, RestaurantMenu, Search } from "./pages";
const Instamart = lazy(() => import("./pages/Instamart"));

const App = () => {
  const isOnline = useOnline();
  return (
    <div className="flex min-h-screen w-full flex-col items-center  overflow-x-hidden bg-gray-200">
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
      { path: "restaurant-menu/:resId", element: <RestaurantMenu /> },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
