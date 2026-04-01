import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard";
import Details from "./features/details/Details";
import Layout from "./features/layout/Layout";
import Settings from "./features/settings/Settings";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add" element={<Dashboard />} />
        <Route path="edit" element={<Dashboard />} />
        <Route path="details" element={<Details />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
