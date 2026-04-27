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
        `flex flex-row items-center gap-2 m-2 p-2 rounded-lg shadow-[2px_4px_4px_#00000040]  text-white ${isActive ? "bg-primary" : "bg-tertiary"}`
      }
    >
      {props.icon}
      <label className="text-white">{props.text}</label>
    </NavLink>
  );
}
