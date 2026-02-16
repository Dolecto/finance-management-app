import "@fontsource/roboto/500.css";

interface SummaryCardProps {
  title: string;
  height: number;
  width: number;
  content: React.ReactNode;
  onReadMore: () => void;
}

export default function SummaryCard(props: SummaryCardProps) {
  const styles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: props.height,
    width: props.width,
    backgroundColor: "#FFFFFF",
    boxShadow: "4px 4px 8px #00000040",
    color: "#000000",
    padding: "20px",
    fontFamily: "Roboto",
  };
  return (
    <div style={styles}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "24px",
            width: "100%",
          }}
        >
          {props.title}
          <button>test</button>
        </div>
        {props.content}
      </div>
    </div>
  );
}
