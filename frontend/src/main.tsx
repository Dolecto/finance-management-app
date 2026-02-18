import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { HashRouter } from "react-router-dom";
import App from "./App";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
