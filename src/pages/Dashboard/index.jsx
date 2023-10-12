// import React, { useState } from "react";
import "./Dashboard.scss";
import React, { useState, useEffect } from "react";
import { PieChart } from "../../components/chart/PieChart";
import { LineChart } from "../../components/chart/LineChart";
import { DonoutChart } from "../../components/chart/DonoutChart";
import { BarChart } from "../../components/chart/BarChart";
import { useAuth } from "../../context/auth-context";
import { useAxios } from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [dashData, setDashData] = useState([]);
  const [filter, setFilter] = useState("All Time");
  const [username, setUsername] = useState("");
  const { token, logout } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    axios
      .get("/api/transactions")
      .then((response) => setDashData(response.data))
      .catch((error) => {
        if (error.response.status === 401) {
          logout();
          navigate("/login");
        }
      });
  }, [filter]);

  useEffect(() => {
    axios
      .get("/api/profile")
      .then((res) => {
        setUsername(res.data.username);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          logout();
          navigate("/login");
        }
      });
  }, []);

  return (
    <section className="dashboard">
      <div className="container dashboard__header">
        <div className="dashboard__title boxshadow">
          Financial Dashboard and Visualizations
        </div>
        <div className="dashboard__left">
          <div className="dashboard__kpi boxshadow">
            Welcome {username.toUpperCase()}
          </div>
          <div className="dashboard__filters boxshadow">Coming soon...</div>
        </div>
      </div>
      <div className="container dashboard__charts">
        <div className="dashboard__chartupper">
          <div className="dashboard__piechart boxshadow">
            <PieChart dashData={dashData} />
          </div>
          <div className="dashboard__linechart boxshadow">
            <LineChart all={dashData} />
          </div>
        </div>
        <div className="dashboard__chartdown">
          <div className="dashboard__donoutchart boxshadow">
            <DonoutChart dashData={dashData} />
          </div>
          <div className="dashboard__barchart boxshadow">
            <BarChart all={dashData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
