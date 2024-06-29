import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
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
import KalsubaiPeakTrek from "./pages/KalsubaiPeakTrek.jsx";
import HarishchandragadTrek from "./pages/HarishchandragadTrek.jsx";
import RatangadTrek from "./pages/RatangadTrek.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/alpha-adventures/" element={<Home />} />
        <Route path="/alpha-adventures/about" element={<About />} />
        <Route path="/alpha-adventures/shop" element={<Shop />} />
        <Route path="/alpha-adventures/faqs" element={<FAQs />} />
        <Route path="/alpha-adventures/treklist/:id" element={<TrekList />} />
        <Route path="/alpha-adventures/trek" element={<TrekPage />} />
        <Route
          path="/alpha-adventures/trek/Sahyadri Treks"
          element={<Sahyadri />}
        />
        <Route
          path="/alpha-adventures/trek/Himalayan Treks"
          element={<Himalayan />}
        />
        <Route
          path="/alpha-adventures/trek/Backpacking Treks"
          element={<Bagpacking />}
        />
        <Route
          path="/alpha-adventures/Sahyadri Treks/Kalsubai Peak Trek"
          element={<KalsubaiPeakTrek />}
        />
        <Route
          path="/alpha-adventures/Sahyadri Treks/Harishchandragad Trek"
          element={<HarishchandragadTrek />}
        />
        <Route
          path="/alpha-adventures/Sahyadri Treks/Ratangad Trek"
          element={<RatangadTrek />}
        />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
