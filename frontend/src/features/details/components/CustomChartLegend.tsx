import { FaCaretLeft } from "react-icons/fa";

interface CustomChartLegendProps {
  label: string;
  onClick: () => void;
  hidden: boolean;
  color: string;
  size?: "sm" | "md" | "lg";
  category?: boolean;
}

export default function CustomChartLegend({
  label,
  onClick,
  hidden,
  color,
  size,
  category,
}: CustomChartLegendProps) {
  const markerSize =
    size == "sm"
      ? "h-[8px] w-[8px]"
      : size == "lg"
        ? "h-[20px] w-[20px]"
        : "h-[20px] w-[20px]";
  const textSize =
    size == "sm" ? "text-[12px]" : size == "lg" ? "text-[18px]" : "text-[18px]";

  return (
    <div
      className={
        category
          ? "border-2 rounded-3xl px-2 py-1 flex flex-row flex-nowrap justify-center items-center gap-1  cursor-pointer"
          : "cursor-pointer"
      }
      onClick={onClick}
      style={{ borderColor: color }}
    >
      <div
        key={label}
        className="flex items-center gap-1"
        style={{
          opacity: hidden ? 0.3 : 1,
        }}
      >
        <span
          className={`${markerSize} rounded-2xl`}
          style={{
            backgroundColor: color,
          }}
        />
        <span className={`${textSize} text-black text-nowrap`}>{label}</span>
      </div>
      {category ? (
        <FaCaretLeft
          color={color}
          size={21}
          style={{
            transform: hidden ? "rotate(-90deg)" : "rotate(0deg)",
            transformOrigin: "60% 50%",
            transition: "transform 0.3s ease",
          }}
        />
      ) : null}
    </div>
  );
}
