import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center">
      <div className="w-full h-full flex flex-row">
        <SideBar />
        <div className="grow h-full bg-[#275DAD]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
