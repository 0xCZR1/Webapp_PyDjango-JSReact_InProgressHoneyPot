import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "./Alert";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "../styles/dashboard.css";
document.documentElement.style.setProperty('--background-color', '#121212');
function Home() {
  const [alerts, setAlerts] = useState([
    { type: "error", message: "Server 12 down", timestamp: "2024-06-27 18:30" },
    { type: "warning", message: "Low disk space on database", timestamp: "2024-06-27 17:45" },
    { type: "warning", message: "Unusual traffic spike on API endpoint", timestamp: "2024-06-26 12:10" },
    { type: "info", message: "Firewall rule update applied", timestamp: "2024-06-25 09:55" },
    { type: "error", message: "Critical vulnerability detected in library", timestamp: "2024-06-24 14:32" },
    { type: "info", message: "New user account created", timestamp: "2024-06-23 11:08" },
    { type: "warning", message: "High CPU usage on web server", timestamp: "2024-06-22 16:45" },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  // Function to calculate incidents in the past week
  const getWeeklyIncidents = () => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    return alerts.filter(alert => new Date(alert.timestamp) >= oneWeekAgo);
  };

  const weeklyIncidents = getWeeklyIncidents();
  const totalIncidents = weeklyIncidents.length;

  const incidentCounts = weeklyIncidents.reduce((counts, alert) => {
    counts[alert.type] = (counts[alert.type] || 0) + 1;
    return counts;
  }, {});

  const colors = ["#F2910A", "#FFC300", "#00B0F0"]; // ELK-inspired colors

  const pieChartData = Object.entries(incidentCounts).map(([type, count]) => ({
    name: type,
    value: count,
  }));

  return (
    <div className="dashboard">
      <div className="buttons">
        <Link to="/SOPs">
          <button className="sops-button">SOPs</button>
        </Link>
        <Link to="/shiftplan">
          <button className="shiftplan-button">Shiftplan</button>
        </Link>
      </div>

      <div className="alerts-section">
        <h3>Infrastructure Alerts</h3>

        <div className="summary-section">
          <p>Total Incidents (Past Week): {totalIncidents}</p>

          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                activeIndex={activeIndex}
                activeShape={{ fill: 'white' }} 
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={60} 
                fill="#8884d8"
                onMouseEnter={onPieEnter} 
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="alert-list">
          {alerts.map((alert, index) => (
            <Alert key={index} type={alert.type} message={alert.message} timestamp={alert.timestamp} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

