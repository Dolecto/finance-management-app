interface SideBarItemProps {
  icon: React.ReactElement;
  text: string;
}

export default function SideBarItem(props: SideBarItemProps) {
  return (
    <div className="flex flex-row items-center gap-2 bg-[#5B616A] m-2 p-2 rounded-lg shadow-[2px_4px_4px_#00000040]">
      {props.icon}
      <label>{props.text}</label>
    </div>
  );
}
