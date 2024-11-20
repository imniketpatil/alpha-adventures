import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Corrected import

const queryClient = new QueryClient(); // Added "new"

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    {" "}
    {/* Corrected provider name */}
    <App />
  </QueryClientProvider>
  // </React.StrictMode>
);
