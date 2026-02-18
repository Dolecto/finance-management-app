import SideBarItem from "./components/SideBarItem";
import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="w-[16vw] bg-[#ABA9C3] shadow-[8px_0px_8px_#00000040] z-100">
      <SideBarItem icon={<FaHome />} text="Dashboard" />
      <SideBarItem icon={<FaPlus />} text="Add" />
      <SideBarItem icon={<FaEdit />} text="Edit" />
      <SideBarItem icon={<FaFileAlt />} text="Detailed View" />
    </div>
  );
}
