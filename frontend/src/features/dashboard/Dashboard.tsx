import { Doughnut } from "react-chartjs-2";
import SummaryCard from "./components/SummaryCard";

export default function Dashboard() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <SummaryCard
        title={"Grocery"}
        width={350}
        height={400}
        content={
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              flexDirection: "column",
              gap: 0,
            }}
          >
            <div
              style={{
                fontSize: 24,
                color: "#00000080",
              }}
            >
              Total
            </div>
            <div
              style={{
                fontSize: 32,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              ₱123123123123123123123123
            </div>
            <div
              style={{
                display: "flex",
                height: "300px",
                justifyContent: "center",
              }}
            >
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
        }
        onReadMore={() => {}}
      />
    </div>
  );
}
