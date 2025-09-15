// src/pages/PieChart.jsx
import React from "react";
import { useTheme } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { tokens } from "../theme";
import { mockPieData as data } from "../data/mockData";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const chartData = {
    labels: data.map((d) => d.label),
    datasets: [
      {
        label: "Value",
        data: data.map((d) => d.value),
        backgroundColor: data.map((d) => d.color),
        borderColor: colors.primary[500],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: isDashboard ? "right" : "bottom",
        labels: {
          color: colors.grey[100],
          font: {
            size: isDashboard ? 10 : 12,
          },
          boxWidth: isDashboard ? 12 : 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.parsed}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ height: isDashboard ? "250px" : "500px" }}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
