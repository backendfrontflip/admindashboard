import React from 'react';
import { Line } from 'react-chartjs-2';
import { useTheme } from '@mui/material';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
} from 'chart.js';
import { tokens } from '../theme';
import { mockLineData } from '../data/mockData';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const labels = mockLineData[0].data.map((item) => item.x);

  const chartData = {
    labels,
    datasets: mockLineData.map((series) => ({
      label: series.id,
      data: series.data.map((point) => point.y),
      fill: false,
      borderColor: series.color || colors.greenAccent[400],
      tension: 0.3
    }))
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: !isDashboard,
        labels: {
          color: colors.grey[100]
        }
      },
      title: {
        display: false
      }
    },
    scales: {
      x: {
        ticks: { color: colors.grey[100] },
        grid: { color: colors.grey[700] }
      },
      y: {
        ticks: { color: colors.grey[100] },
        grid: { color: colors.grey[700] }
      }
    }
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
