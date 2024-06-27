import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/back.css";

function SOPs() {
  const [sops, setSops] = useState([
    {
      id: 1,
      title: "Incident Response",
      content: "Guidelines for responding to security incidents...",
    },
    {
      id: 2,
      title: "Honeypot Maintenance",
      content: "Procedures for maintaining the honeypot system...",
    },
    {
      id: 3,
      title: "Data Handling and Privacy",
      content: "Guidelines for protecting data collected by honeypots...",
    },
    {
      id: 4, 
      title: "Check File/Disk Space",
      content: 
        "1. Log in to the relevant server using your SSH credentials.\n" +
        "2. Navigate to the directory or file system you want to check.\n" +
        "3. Use the `df -h` command to view disk space usage in a human-readable format.\n" +
        "4. If necessary, identify large files using `du -sh *` and consider removing or compressing them.\n" +
        "5. Set up alerts or monitoring to notify you when disk space reaches critical levels.",
    },
  ]);

  return (
    <div className="dashboard">
      <div className="buttons">
        <Link to="/" className="back-button">Back to Dashboard</Link>
      </div>
      <div className="alerts">
        <h3>Standard Operating Procedures (SOPs)</h3>
        {sops.map((sop) => (
          <Link key={sop.id} to={`/SOPs/${sop.id}`} className="alert info">
            <span className="message">{sop.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default SOPs;
