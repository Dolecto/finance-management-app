import { RgbColorPicker, type RgbColor } from "react-colorful";

export interface Color {
  r: number;
  g: number;
  b: number;
}

interface SimpleColorPickerProps {
  color: Color | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChangeRGB: (rgb: Color, hex: string) => void;
}

export default function SimpleColorPicker({
  color,
  onChangeRGB,
}: SimpleColorPickerProps) {
  // const [color, setColor] = useState({ r: 50, g: 100, b: 150 });

  const rgbToHex = (r: number, g: number, b: number): string => {
    return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
  };

  const hexToRgb = (hex: string): Color => {
    const clean = hex.replace("#", "");
    return {
      r: parseInt(clean.slice(0, 2), 16),
      g: parseInt(clean.slice(2, 4), 16),
      b: parseInt(clean.slice(4, 6), 16),
    };
  };

  const rgb = typeof color === "string" ? hexToRgb(color) : color;

  const enforceMaxColorValue = (e: { target: { value: string } }) => {
    const v = Math.min(255, Math.max(0, Number(e.target.value)));
    e.target.value = String(v);
  };

  const colorInputStyles =
    "h-6 w-10 px-1 text-black text-sm font-medium text-center bg-white border border-gray-200 rounded-lg outline-none appearance-none transition-colors hover:border-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-blue-100 [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none";

  return (
    <div className="flex flex-col justify-center items-center p-2">
      <div className="flex flex-col justify-center items-center pl-1">
        <RgbColorPicker
          color={rgb}
          onChange={(newColor: RgbColor) => {
            onChangeRGB(newColor, rgbToHex(newColor.r, newColor.g, newColor.b));
          }}
        />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row gap-1 items-center p-2">
          <label className="text-denary font-semibold">r:</label>
          <input
            type="number"
            value={rgb.r}
            min={0}
            max={255}
            onChange={(e) => {
              enforceMaxColorValue(e);
              onChangeRGB(
                { ...rgb, r: parseInt(e.target.value) },
                rgbToHex(parseInt(e.target.value), rgb.g, rgb.b),
              );
            }}
            className={colorInputStyles}
          />
        </div>
        <div className="flex flex-row gap-1 items-center p-2">
          <label className="text-denary font-semibold">g:</label>
          <input
            type="number"
            value={rgb.g}
            min={0}
            max={255}
            onChange={(e) => {
              enforceMaxColorValue(e);
              onChangeRGB(
                { ...rgb, g: parseInt(e.target.value) },
                rgbToHex(rgb.r, parseInt(e.target.value), rgb.b),
              );
            }}
            className={colorInputStyles}
          />
        </div>
        <div className="flex flex-row gap-1 items-center p-2">
          <label className="text-denary font-semibold">b:</label>
          <input
            type="number"
            value={rgb.b}
            min={0}
            max={255}
            onChange={(e) => {
              enforceMaxColorValue(e);
              onChangeRGB(
                { ...rgb, b: parseInt(e.target.value) },
                rgbToHex(rgb.r, rgb.g, parseInt(e.target.value)),
              );
            }}
            className={colorInputStyles}
          />
        </div>
      </div>
    </div>
  );
}
