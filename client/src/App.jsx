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
import TrekTypeTreksPage from "./pages/TrekTypeTreksPage.jsx";
import TermsAndCondition from "./pages/TermsAndCondition.jsx";
import RefundCancellationPolicy from "./pages/RefundCancellationPolicy.jsx";
import Error from "./pages/Error.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/trekdetails" element={<TrekDetails />} />
        <Route path="/trektypetreks" element={<TrekTypeTreksPage />} />
        <Route path="/termsandcondition" element={<TermsAndCondition />} />
        <Route
          path="/RefundCancellationPolicy"
          element={<RefundCancellationPolicy />}
        />
        <Route path="*" element={<Error />} />
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
