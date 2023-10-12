import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Income vs Expense Line Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function LineChart({ all }) {
  const groupedIncome = all
    .filter((item) => item.transaction_type === "income")
    .reduce((result, item) => {
      const date = new Date(item.timestamp);
      const month = date.getMonth();
      if (!result[month]) {
        result[month] = 0;
      }
      result[month] += item.amount;
      return result;
    }, []);

  const groupedExpense = all
    .filter((item) => item.transaction_type === "expense")
    .reduce((result, item) => {
      const date = new Date(item.timestamp);
      const month = date.getMonth();
      if (!result[month]) {
        result[month] = 0;
      }
      result[month] += item.amount;
      return result;
    }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: [...groupedIncome],
        borderColor: "rgba(11, 180, 62, 0.5)",
        backgroundColor: "rgba(40, 201, 25, 0.5)",
      },
      {
        label: "Expense",
        data: [...groupedExpense],
        borderColor: "rgba(235, 21, 21, 0.5)",
        backgroundColor: "rgba(172, 142, 142, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
