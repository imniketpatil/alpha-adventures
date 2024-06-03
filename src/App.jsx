import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import FAQs from "./pages/FAQs.jsx";
import Shop from "./pages/Shop.jsx";
import TrekList from "./pages/TrekList.jsx";
import TrekPage from "./pages/TrekPage.jsx";

function App() {
  // Define the routes for the application
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "shop",
      element: <Shop />,
    },
    {
      path: "faqs",
      element: <FAQs />,
    },
    {
      path: "treklist",
      element: <TrekList />,
    },
    {
      path: "trek",
      element: <TrekPage />,
    },
  ]);

  // Return the RouterProvider with the defined router
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
