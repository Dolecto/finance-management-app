import Dashboard from "./features/dashboard/Dashboard";
import SideBar from "./features/sidebar/SideBar";

export default function Layout() {
  return (
    <div className="w-screen flex flex-col justify-center">
      <div className="w-full h-full flex flex-row">
        <SideBar />
        <div className="grow w-full h-full bg-[#ddff00]">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
