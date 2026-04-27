import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

import SideBarItem from "./SideBarItem";
import { useTheme } from "../../../common/theme/useTheme";

export default function SideBar() {
  const theme = useTheme();
  const iconColor = theme.defaultTheme.text;
  return (
    <div className="w-[16vw] bg-secondary shadow-[8px_0px_8px_#00000040] z-100">
      <SideBarItem
        to="dashboard"
        icon={<FaHome color={iconColor} />}
        text="Home"
      />
      <SideBarItem to="add" icon={<FaPlus color={iconColor} />} text="Add" />
      <SideBarItem to="edit" icon={<FaEdit color={iconColor} />} text="Edit" />
      <SideBarItem
        to="details"
        icon={<FaFileAlt color={iconColor} />}
        text="Detailed View"
      />
      <SideBarItem
        to="settings"
        icon={<FaGear color={iconColor} />}
        text="Settings"
      />
    </div>
  );
}
