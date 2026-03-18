/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/purity */
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { sampleData } from "./sampledata";
import { useRef, useState, useMemo, useCallback } from "react";

export default function Details() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );

  const { detailedData, summarizedData } = sampleData();

  const chartRef = useRef<ChartJS<"bar">>(null);
  const [hiddenDatasets, setHiddenDatasets] = useState<Set<number>>(new Set());
  const [chartData, setChartData] = useState<object[]>(summarizedData);

  const handleLegendClick = (index: number) => {
    const chart = chartRef.current;
    if (!chart) return;

    console.log(chart.data.datasets[index].label);
    if (chart.data.datasets[index].label === "Grocery") {
      setChartData(detailedData);
    } else {
      chart.setDatasetVisibility(
        index,
        chart.isDatasetVisible(index) ? false : true,
      );
    }
    chart.update();

    setHiddenDatasets((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const barData = {
    labels: ["TEST"],
    datasets: chartData,
  };

  const barOptions = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    onClick: (event: any, elements: any[]) => {
      if (elements.length === 0) return;

      const { datasetIndex } = elements[0];
      handleLegendClick(datasetIndex);
    },
    datasets: {
      bar: {
        barThickness: 40,
      },
    },
    scales: {
      x: { stacked: true, display: false },
      y: { stacked: true, display: false },
    },
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          font: {
            size: 18,
          },
          usePointStyle: true,
          pointStyle: "rectRounded",
        },
        display: false,
      },
    },
    animation: {
      duration: 300,
    },
  };

  return (
    <div>
      <div className="bg-white flex flex-col items-center justify-center w-full">
        <div className="flex w-2/3 h-[100px] items-center justify-center">
          <Bar ref={chartRef} data={barData} options={barOptions} />
        </div>
        <div className="flex flex-wrap gap-4 w-2/3 items-center justify-center">
          {chartData.map((ds, index) => (
            <div
              key={ds.label}
              onClick={() => handleLegendClick(index)}
              className="flex items-center gap-1 cursor-pointer"
              style={{
                opacity: hiddenDatasets.has(index) ? 0.3 : 1,
              }}
            >
              <span
                className={`h-[20px] w-[20px] rounded-2xl`}
                style={{
                  backgroundColor: ds.backgroundColor,
                }}
              />
              <span className="text-[18px] text-black text-nowrap">
                {ds.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
