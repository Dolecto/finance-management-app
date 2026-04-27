interface ENFlagProps {
  width?: number;
  height?: number;
  onClick?: () => void;
}

export default function ENFlag({
  width = 300,
  height = 150,
  onClick,
}: ENFlagProps) {
  return (
    <div
      className="p-[2px] m-0 transition-transform duration-200 hover:-translate-y-0.5"
      style={{ width: `${width}px`, height: `${height}px` }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 30"
        width="100%"
        height="100%"
      >
        <clipPath id="a">
          <path d="M0 0v30h60V0z" />
        </clipPath>
        <clipPath id="b">
          <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
        </clipPath>
        <g clip-path="url(#a)">
          <path fill="#012169" d="M0 0v30h60V0z" />
          <path stroke="#fff" stroke-width="6" d="m0 0 60 30m0-30L0 30" />
          <path
            stroke="#C8102E"
            stroke-width="4"
            d="m0 0 60 30m0-30L0 30"
            clip-path="url(#b)"
          />
          <path stroke="#fff" stroke-width="10" d="M30 0v30M0 15h60" />
          <path stroke="#C8102E" stroke-width="6" d="M30 0v30M0 15h60" />
        </g>
      </svg>
    </div>
  );
}
