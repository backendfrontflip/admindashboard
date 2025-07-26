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

  // Extract categories
  const labels = data.map((item) => item.country);

  // Extract datasets by keys
  const keys = ["hot dog", "burger", "sandwich", "kebab", "fries", "donut"];

  const chartData = {
    labels,
    datasets: keys.map((key, i) => ({
      label: key,
      data: data.map((item) => item[key]),
      backgroundColor: colors.greenAccent[400 + (i * 100)] || colors.greenAccent[400],
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: colors.grey[100],
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

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
