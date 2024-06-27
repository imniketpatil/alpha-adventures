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
import Sahyadri from "./pages/Sahyadri.jsx";
import Himalayan from "./pages/Himalayan.jsx";
import Bagpacking from "./pages/Bagpacking.jsx";
import TrekMainPage from "./pages/TrekMainPage.jsx";
import KalsubaiPeakTrek from "./pages/KalsubaiPeakTrek.jsx";
import HarishchandragadTrek from "./pages/HarishchandragadTrek.jsx";
import RatangadTrek from "./pages/RatangadTrek.jsx";

function App() {
  // Define the routes for the application
  const router = createBrowserRouter([
    {
      path: "/alpha-adventures/",
      element: <Home />,
    },
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
      path: "treklist/:id",
      element: <TrekList />,
    },
    {
      path: "trek",
      element: <TrekPage />,
    },
    {
      path: "trek/Sahyadri Treks",
      element: <Sahyadri />,
    },
    {
      path: "trek/Himalayan Treks",
      element: <Himalayan />,
    },
    {
      path: "trek/Backpacking Treks",
      element: <Bagpacking />,
    },
    {
      path: "Sahyadri Treks/Kalsubai Peak Trek",
      element: <KalsubaiPeakTrek />,
    },
    {
      path: "Sahyadri Treks/Harishchandragad Trek",
      element: <HarishchandragadTrek />,
    },
    {
      path: "Sahyadri Treks/Ratangad Trek",
      element: <RatangadTrek />,
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
