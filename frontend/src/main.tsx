import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import Layout from "./Layout";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
);
