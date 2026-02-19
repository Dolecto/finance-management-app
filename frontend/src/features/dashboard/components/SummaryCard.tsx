import "@fontsource/roboto/500.css";
import { Doughnut } from "react-chartjs-2";

interface SummaryCardProps {
  title: string;
  height?: number;
  width?: number;
  graphData: {
    title: string;
    data: number[];
    legend: string[];
  };
  onReadMore: () => void;
}

export default function SummaryCard(props: SummaryCardProps) {
  const getChartColors = (chartData: number[]) => {
    const chartColors: string[] = [];
    chartData.forEach((_, index) =>
      chartColors.push(`rgb(0, ${(255 / chartData.length) * index}, 0)`),
    );
    return chartColors;
  };

  const chartData = {
    labels: props.graphData.legend,
    datasets: [
      {
        label: props.graphData.title,
        data: props.graphData.data,
        backgroundColor: getChartColors(props.graphData.data),
        hoverOffset: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
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
  };

  return (
    <div
      className={`h-full w-full flex flex-col bg-white p-5 shadow-[4px_4px_8px_#00000040] text-black font-['Roboto'] rounded-lg`}
    >
      <div className="flex flex-col items-center flex-grow">
        <div className="flex flex-row justify-between items-center text-2xl w-full">
          {props.title}
          <button>test</button>
        </div>
        <div className="w-full text-2xl text-black/50">Total</div>
        <div className="w-full text-[32px] overflow-hidden text-ellipsis">
          ₱{props.graphData.data.reduce((x, y) => x + y).toFixed(2)}
        </div>
        <div className="flex w-full justify-center">
          {/* @ts-expect-error | Typescript complaining about some missing types, but adding it makes the code look overly complicated */}
          <Doughnut data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
