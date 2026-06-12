import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="w-full h-full flex flex-row">
        <SideBar />
        <div className="w-full h-full bg-primary">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
