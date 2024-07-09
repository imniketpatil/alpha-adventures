import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import List from "./pages/List.jsx";
import New from "./pages/New.jsx";
import Single from "./pages/Single.jsx";
import "./index.css";

const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="list">
          <Route index element={<List />} />
          <Route path="new" element={<New />} />
          <Route path=":id" element={<Single />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{routes}</React.StrictMode>
);
