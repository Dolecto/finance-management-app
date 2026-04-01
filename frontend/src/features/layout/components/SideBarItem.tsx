import { NavLink } from "react-router-dom";

interface SideBarItemProps {
  icon: React.ReactElement;
  text: string;
  to: string;
}

export default function SideBarItem(props: SideBarItemProps) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        `flex flex-row items-center gap-2 bg-background m-2 p-2 rounded-lg shadow-[2px_4px_4px_#00000040] ${isActive ? "bg-[#FCF7F8] text-black" : "bg-[#5B616A]"}`
      }
    >
      {props.icon}
      <label className="text-text">{props.text}</label>
    </NavLink>
  );
}
