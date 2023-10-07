import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Distribution of Expenses",
    },
  },
};

export function PieChart({ dashData }) {
  const groupedIncomeByCategory = dashData
    .filter((item) => item.transaction_type === "income")
    .reduce((result, item) => {
      const category = item.category;
      if (!result[category]) {
        result[category] = 0;
      }
      result[category] += item.amount;
      return result;
    }, {});

  const filteredExpense = Object.values(groupedIncomeByCategory);

  const labels = Object.keys(groupedIncomeByCategory);

  const data = {
    labels: [...labels],
    datasets: [
      {
        label: "",
        data: [...filteredExpense],
        backgroundColor: [
          "rgba(255, 0, 55, 0.4)",
          "rgba(7, 97, 156, 0.4)",
          "rgba(236, 193, 82, 0.4)",
          "rgba(14, 126, 42, 0.4)",
          "rgba(50, 14, 121, 0.4)",
          "rgba(63, 87, 226, 0.4)",
          "rgba(167, 11, 154, 0.4)",
        ],
        borderColor: ["#c5c5c5"],
        borderWidth: 1,
      },
    ],
  };

  return <Pie options={options} data={data} />;
}
