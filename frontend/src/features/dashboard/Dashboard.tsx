import SummaryCard from "./components/SummaryCard";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 p-3 gap-4 justify-center justify-items-center">
      <SummaryCard
        title={"Grocery"}
        onReadMore={() => {}}
        graphData={{
          title: "Test",
          legend: ["Test1", "Test2", "Test3"],
          data: [1, 2, 3],
        }}
      />
    </div>
  );
}
