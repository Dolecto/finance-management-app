import { Routes, Route } from "react-router-dom";
import Layout from "./features/layout/Layout";
import Dashboard from "./features/dashboard/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="dashboard" element={<Dashboard />} />
        <Route index path="add" element={<Dashboard />} />
        <Route index path="edit" element={<Dashboard />} />
        <Route index path="details" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
