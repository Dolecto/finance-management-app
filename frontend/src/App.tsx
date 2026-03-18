import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./features/layout/Layout";
import Dashboard from "./features/dashboard/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add" element={<Dashboard />} />
        <Route path="edit" element={<Dashboard />} />
        <Route path="details" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
