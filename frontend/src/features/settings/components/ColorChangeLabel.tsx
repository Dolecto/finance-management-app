interface ColorChangeLabelProps {
  onHovered: (hovered: boolean) => void;
  onClick: (focusedElement: string[]) => void;
  elementName: string;
  styleName: string;
  text: string;
  styles?: string;
  color?: string;
  faded?: boolean;
}

export default function ColorChangeLabel({
  onHovered,
  onClick,
  elementName,
  styleName,
  styles,
  text,
  color = "#000000",
  faded,
}: ColorChangeLabelProps) {
  return (
    <label
      className={`hover:text-shadow-lg ` + styles}
      style={{
        color: color,
        opacity: faded ? "0.5" : "",
      }}
      onMouseEnter={() => {
        onHovered(true);
      }}
      onMouseLeave={() => {
        onHovered(false);
      }}
      onClick={() => {
        onClick([elementName, styleName]);
      }}
    >
      {text}
    </label>
  );
}
