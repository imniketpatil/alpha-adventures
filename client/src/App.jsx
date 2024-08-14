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
import TrekDetails from "./pages/TrekDetails.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/alpha-adventures/" element={<Home />} />
        <Route path="/alpha-adventures/about" element={<About />} />
        <Route path="/alpha-adventures/shop" element={<Shop />} />
        <Route path="/alpha-adventures/faqs" element={<FAQs />} />
        <Route path="/alpha-adventures/trekdetails" element={<TrekDetails />} />
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
