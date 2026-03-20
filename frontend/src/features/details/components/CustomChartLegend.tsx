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
  const markerSize = size == "sm" ? 8 : size == "lg" ? 18 : 16;
  const textSize = size == "sm" ? 12 : size == "lg" ? 18 : 16;

  return (
    <div
      className={
        category
          ? "border-1 rounded-3xl px-2 py-1 flex flex-row flex-nowrap justify-center items-center gap-1  cursor-pointer"
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
          className={`rounded-2xl`}
          style={{
            height: `${markerSize}px`,
            width: `${markerSize}px`,
            backgroundColor: color,
          }}
        />
        <span
          className={`text-black text-nowrap`}
          style={{
            fontSize: `${textSize}px`,
          }}
        >
          {label}
        </span>
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
