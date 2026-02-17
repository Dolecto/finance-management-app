interface SideBarItemProps {
  icon: React.ReactElement;
  text: string;
}

export default function SideBarItem(props: SideBarItemProps) {
  return (
    <div className="flex flex-row items-center gap-2 bg-black m-2 p-2 rounded-lg">
      {props.icon}
      <label>{props.text}</label>
    </div>
  );
}
