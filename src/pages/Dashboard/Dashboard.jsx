import React, { useState } from "react";
import "./Dashboard.scss";
import Button from "../../components/ui/Button";
import { PieChart } from "../../components/chart/PieChart";
import { LineChart } from "../../components/chart/LineChart";
import { DonoutChart } from "../../components/chart/DonoutChart";
import { BarChart } from "../../components/chart/BarChart";

const Dashboard = () => {
  const [dashData, setDashData] = useState({});

  return (
    <section className="dashboard">
      <div className="container dashboard__header">
        <div className="dashboard__title boxshadow">
          Financial Dashboard and Visualizations
        </div>
        <div className="dashboard__left">
          <div className="dashboard__kpi boxshadow">Welcome Mr. UserName</div>
          <div className="dashboard__filters boxshadow">
            <select name="filters" id="filters">
              <option value="thisweek">This Week</option>
              <option value="thismonth">This Month</option>
              <option value="thisyear">This Year</option>
              <option value="alltime">All Time</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container dashboard__charts">
        <div className="dashboard__chartupper">
          <div className="dashboard__piechart boxshadow">
            {/* <img src={piechart} alt="chart" /> */}
            <PieChart />
          </div>
          <div className="dashboard__linechart boxshadow">
            {/* <img src={linechart} alt="chart" /> */}
            <LineChart />
          </div>
        </div>
        <div className="dashboard__chartdown">
          <div className="dashboard__donoutchart boxshadow">
            {/* <img src={donoutchart} alt="chart" /> */}
            <DonoutChart />
          </div>
          <div className="dashboard__barchart boxshadow">
            {/* <img src={barchart} alt="chart" /> */}
            <BarChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
