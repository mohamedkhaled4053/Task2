import React from "react";
import "./style.scss";
import { Icon } from "../../Icon/Icon";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { chartData } from "../../../utils/mock";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  return (
    <div className="card chart">
      <div className="header">
        <div className="status">
          <p>recommended</p>
          <Icon name="arrow_down" />
        </div>
        <div className="legends">
          <p className="legend">
            <span className="legend-color qualified"></span>
            <span>qualified</span>
          </p>
          <p className="legend">
            <span className="legend-color disqualified"></span>
            <span>disqualified</span>
          </p>
        </div>
      </div>
      <Line
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: { y: { ticks: { stepSize: 250 } } },
        }}
        data={{
          labels: chartData.map((item) => item.month),
          datasets: [
            {
              label: "Qualified",
              data: chartData.map((item) => item.qualified),
              backgroundColor: "rgba(251, 227, 142, 0.7)",
              borderColor: "#fbe38e",
              pointBorderWidth: 2,
              borderWidth: 2,
              pointRadius: 10,
              pointHoverRadius: 15,
            },
            {
              label: "Disqualified",
              data: chartData.map((item) => item.disqualified),
              backgroundColor: "rgba(154, 137, 255, 0.7)",
              borderColor: "#b1a5ff",
              pointBorderWidth: 2,
              borderWidth: 2,
              pointRadius: 10,
              pointHoverRadius: 15,
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart;
