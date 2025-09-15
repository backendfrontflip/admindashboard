import React from "react";
import { useTheme } from "@mui/material";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const labels = data.map((item) => item.country);

  const keys = ["hot dog", "burger", "sandwich", "kebab", "fries", "donut"];

  const chartData = {
    labels,
    datasets: keys.map((key, i) => ({
      label: key,
      data: data.map((item) => item[key]),
      backgroundColor:
        colors.greenAccent[400 + i * 100] || colors.greenAccent[400],
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: !isDashboard,
        position: "bottom",
        labels: {
          color: colors.grey[100],
          boxWidth: isDashboard ? 12 : 20,
          font: {
            size: isDashboard ? 10 : 12,
          },
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        stacked: false,
        ticks: {
          color: colors.grey[100],
          font: {
            size: isDashboard ? 10 : 12,
          },
        },
        grid: {
          color: colors.grey[800],
        },
        title: {
          display: !isDashboard,
          text: "Country",
          color: colors.grey[100],
        },
      },
      y: {
        stacked: false,
        ticks: {
          color: colors.grey[100],
          font: {
            size: isDashboard ? 10 : 12,
          },
        },
        grid: {
          color: colors.grey[800],
        },
        title: {
          display: !isDashboard,
          text: "Food",
          color: colors.grey[100],
        },
      },
    },
  };

  return (
    <div style={{ height: isDashboard ? "250px" : "500px" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
