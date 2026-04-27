interface DEFlagProps {
  width?: number;
  height?: number;
  onClick?: () => void;
}

export default function DEFlag({
  width = 300,
  height = 150,
  onClick,
}: DEFlagProps) {
  return (
    <div
      className="p-[2px] m-0 transition-transform duration-200 hover:-translate-y-0.5"
      style={{ width: `${width}px`, height: `${height}px` }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 5 3"
        width="100%"
        height="100%"
      >
        <path d="M0 0h5v3H0z" />
        <path fill="#D00" d="M0 1h5v2H0z" />
        <path fill="#FFCE00" d="M0 2h5v1H0z" />
      </svg>
    </div>
  );
}
