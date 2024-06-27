import React, { useState } from 'react';
import Alert from './Alert';
import '../styles/dashboard.css'; 


function Dashboard() {
  const [alerts, setAlerts] = useState([
    { type: 'error', message: 'Server 12 down', timestamp: '2024-06-27 18:30' },
    { type: 'warning', message: 'Low disk space on database', timestamp: '2024-06-27 17:45' },
  ]);

  return (
    <div className="dashboard">
      <div className="buttons">
        <button className="sops-button">SOPs</button>
        <button className="shiftplan-button">Shift Plan</button>
      </div>
      <div className="alerts">
        <h3>Infrastructure Alerts</h3>
        {alerts.map((alert, index) => (
          <Alert key={index} type={alert.type} message={alert.message} timestamp={alert.timestamp} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
