import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
    },
  },
};

const divStyle = {
  height: "95%",
  fontSize: "10px",
};

export function TotalPieChart({ data }) {
  const datas = {
    labels: ["cash", "bank"],
    datasets: [
      {
        label: [],
        data: [data.cash_balance, data.bank_balance],
        backgroundColor: ["rgba(11, 83, 21, 0.5)", "rgba(197, 102, 39, 0.5)"],
        borderColor: ["#ffffff", "#ffffff"],
        borderWidth: 1,
      },
    ],
  };

  return <Pie options={options} data={datas} style={divStyle} />;
}
