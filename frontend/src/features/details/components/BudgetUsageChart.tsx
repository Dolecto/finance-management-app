/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/purity */
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  type ChartDataset,
} from "chart.js";
import { useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import { sampleData } from "../sampledata";
import CustomChartLegend from "./CustomChartLegend";
import { useTranslation } from "react-i18next";

export default function BudgetUsageChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );
  const { data } = sampleData();
  const { t } = useTranslation();

  const chartRef = useRef<ChartJS<"bar">>(null);
  const [hiddenDatasets, setHiddenDatasets] = useState<Set<number>>(new Set());
  const [hiddenCategory, setHiddenCategory] = useState<number | null>(null);
  const max = 20000;
  const categorySet = [...data.flatMap((data) => data.category)];
  const chartData = data;
  const [dataset, setDataset] = useState<ChartDataset<"bar", number[]>[]>([
    ...categorySet,
    {
      label: "Remaining",
      data: [
        max -
          chartData.reduce((acc, data) => acc + data.category[0].data[0], 0),
      ],
      backgroundColor: "#AAAAAA",
    },
  ]);

  const remaining = dataset.find((item) => item.label === "Remaining")?.data;

  useEffect(() => {
    console.log("Dataset: ", dataset);
  }, [dataset]);

  const onUpdateChart = (newDataSet?: ChartDataset<"bar", number[]>[]) => {
    const chart = chartRef.current;
    if (!chart) return;
    if (newDataSet) {
      const remainingSpace = {
        label: "Remaining",
        data: [
          max -
            newDataSet.reduce(
              (accumulator, { data }) => accumulator + data[0],
              0,
            ),
        ],
        backgroundColor: "#AAAAAA",
      };
      setDataset([...newDataSet, remainingSpace]);
    }

    chart.update();
  };

  const handleCategoryClick = (index: number) => {
    const chart = chartRef.current;
    if (!chart) return;
    // Sets visibility on the bar chart
    if (hiddenCategory === index) {
      // Reset Visibility
      onUpdateChart(categorySet);
      setHiddenDatasets(new Set());
    } else {
      const temp = [...categorySet];
      temp.splice(index, 1, ...chartData[index].data);
      onUpdateChart(temp);
    }

    // Sets visibility on correspoding legends
    setHiddenCategory((prev) => (prev === index ? null : index));
  };

  const handleLegendClick = (index: number) => {
    const chart = chartRef.current;
    if (!chart) return;

    // Sets visibility on the bar chart
    chart.setDatasetVisibility(
      index,
      chart.isDatasetVisible(index) ? false : true,
    );
    onUpdateChart();

    // Sets visibility on correspoding legends
    setHiddenDatasets((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const barOptions = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      duration: 300,
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
    onClick: (event: any, elements: any[]) => {
      if (elements.length === 0) return;
      const { datasetIndex } = elements[0];
      handleLegendClick(datasetIndex);
    },
  };

  return (
    <div className="bg-quaternary p-4 flex rounded-2xl flex-col w-full items-start">
      <div className="w-full my-2">
        <div className="flex flex-row">
          <label className="flex w-full justify-start text-denary">
            {t("information.budget_allocation")}
          </label>
          <label className="flex w-full justify-end text-denary">
            {`$${remaining} ${t("information.remaining")}`}
          </label>
        </div>
        <div className="flex w-full h-[50px] items-center justify-center">
          <Bar
            ref={chartRef}
            data={{ labels: ["Test"], datasets: dataset }}
            options={barOptions}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-x-4 w-2/3 items-start">
        {chartData
          .flatMap((data) => data.category)
          .map((categoryData, index) => (
            <CustomChartLegend
              category
              label={categoryData.label}
              onClick={() => handleCategoryClick(index)}
              hidden={hiddenCategory === index}
              color={categoryData.backgroundColor}
            />
          ))}
      </div>
      <div className="flex flex-wrap gap-x-4 w-2/3 items-center">
        {hiddenCategory !== null
          ? chartData[hiddenCategory].data.map((detailedData, index) => (
              <CustomChartLegend
                size="sm"
                label={detailedData.label}
                onClick={() => handleLegendClick(index)}
                hidden={hiddenDatasets.has(index)}
                color={detailedData.backgroundColor}
              />
            ))
          : null}
      </div>
    </div>
  );
}
