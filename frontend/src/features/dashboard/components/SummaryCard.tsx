import "@fontsource/roboto/500.css";
import { Doughnut } from "react-chartjs-2";

interface SummaryCardProps {
  title: string;
  height: number;
  width: number;
  onReadMore: () => void;
}

export default function SummaryCard(props: SummaryCardProps) {
  return (
    <div
      className="flex flex-col bg-white p-5 shadow-[4px_4px_8px_#00000040] text-black font-['Roboto']"
      style={{ height: props.height, width: props.width }}
    >
      <div className="flex flex-col items-center flex-grow">
        <div className="flex flex-row justify-between items-center text-2xl w-full">
          {props.title}
          <button>test</button>
        </div>
        <div className="w-full text-2xl text-black/50">Total</div>
        <div className="w-full text-[32px] overflow-hidden text-ellipsis">
          ₱123123123123123123123123
        </div>
        <div className="h-[300px] flex justify-center">
          <Doughnut
            data={{
              labels: ["Red", "Blue", "Yellow"],
              datasets: [
                {
                  label: "Grocery",
                  data: [300, 50, 100],
                  backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                  ],
                  hoverOffset: 2,
                },
              ],
            }}
            options={{
              cutout: "65%",
              plugins: {
                legend: {
                  position: "right",
                  labels: {
                    font: {
                      size: 18,
                    },
                    usePointStyle: true,
                    pointStyle: "rectRounded",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
