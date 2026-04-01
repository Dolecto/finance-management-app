interface SimpleDataDisplayProps {
  containerStyles?: string;
  titleStyles?: string;
  subtitleStyles?: string;
  contentTextStyles?: string;
  title: string;
  subtitle?: string;
  content: number;
}

export default function SimpleDataDisplay({
  containerStyles,
  titleStyles,
  subtitleStyles,
  contentTextStyles,
  content,
  title,
  subtitle,
}: SimpleDataDisplayProps) {
  return (
    <div
      className={
        "flex flex-col border shadow-lg p-2 bg-background rounded-md " +
        containerStyles
      }
    >
      <label className={"text-text text-[12px] " + titleStyles}>{title}</label>
      {subtitle ? (
        <label className={"text-text text-[12px] " + subtitleStyles}>
          {subtitle}
        </label>
      ) : null}
      <div className="flex flex-col justify-center w-full h-full">
        <label
          className={"text-text text-[28px] text-center " + contentTextStyles}
        >
          {content.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </label>
      </div>
    </div>
  );
}
