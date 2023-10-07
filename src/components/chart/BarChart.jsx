import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: "Income vs Expense Bar chart",
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

export function BarChart({ all }) {
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
        borderColor: "rgb(9, 109, 34)",
        backgroundColor: "rgba(10, 107, 39, 0.5)",
      },
      {
        label: "Expense",
        data: [...groupedExpense],
        borderColor: "rgb(163, 20, 20)",
        backgroundColor: "rgba(207, 20, 20, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
