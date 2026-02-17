import SummaryCard from "./components/SummaryCard";

export default function Dashboard() {
  return (
    <div
      style={{
        justifyContent: "center",
      }}
    >
      <SummaryCard
        title={"Grocery"}
        width={350}
        height={400}
        onReadMore={() => {}}
      />
    </div>
  );
}
