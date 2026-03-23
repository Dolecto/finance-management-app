import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

import SideBarItem from "./SideBarItem";

export default function SideBar() {
  return (
    <div className="w-[16vw] bg-[#ABA9C3] shadow-[8px_0px_8px_#00000040] z-100">
      <SideBarItem to="dashboard" icon={<FaHome />} text="Home" />
      <SideBarItem to="add" icon={<FaPlus />} text="Add" />
      <SideBarItem to="edit" icon={<FaEdit />} text="Edit" />
      <SideBarItem to="details" icon={<FaFileAlt />} text="Detailed View" />
      <SideBarItem to="settings" icon={<FaGear />} text="Settings" />
    </div>
  );
}
