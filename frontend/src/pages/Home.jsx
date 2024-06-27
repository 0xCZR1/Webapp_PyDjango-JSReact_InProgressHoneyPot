import React, { useState } from 'react';
import '../styles/schedule.css';

function Home() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Your Provided Schedule Data
  const scheduleData = [
    { name: 'Gigi', trainer: 'Becali', shifts: ['WW', 'WW', 'WW', 'WW', '', '', '', 'WW', 'WW', 'WW', 'WW', '', '', '', 'WW', 'WW', 'WW', 'WW', '', '', '', 'WW', 'WW', 'WW', 'WW', '', '', ''] },
    { name: 'Grigore', vorname: 'Ion', shifts: ['FF', 'FF', 'FF', 'FF', 'S', 'S', 'N', 'FF', 'FF', 'FF', 'FF', 'S', 'S', 'N', 'FF', 'FF', 'FF', 'FF', 'S', 'S', 'N', 'FF', 'FF', 'FF', 'FF', 'S', 'S', 'N', 'FF', 'FF'] },
    { name: 'Branduse', vorname: 'Cezar', shifts: ['WW', 'WW', 'WW', 'WW', '', '', '', 'WW', 'WW', 'WW', 'WW', '', '', '', 'WW', 'WW', 'WW', 'WW', '', '', '', 'WW', 'WW', 'WW', 'WW', '', '', ''] },
    { name: 'Nust', vorname: 'Andreas', shifts: ['FF', 'FF', 'FF', 'FF', 'S', 'S', 'N', 'FF', 'FF', 'FF', 'FF', 'S', 'S', 'N', 'FF', 'FF', 'FF', 'FF', 'S', 'S', 'N', 'FF', 'FF', 'FF', 'FF', 'S', 'S', 'N', 'FF', 'FF'] },
    { name: 'Müller', vorname: 'Sophia', shifts: ['N', 'N', '', '', 'S', 'S', '', 'N', 'N', '', '', 'S', 'S', '', 'N', 'N', '', '', 'S', 'S', '', 'N', 'N', '', '', 'S', 'S'] },
    { name: 'Schmidt', vorname: 'Max', shifts: ['WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW', 'WW'] },
    { name: 'Wagner', vorname: 'Lena', shifts: ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'] },
    { name: 'Fischer', vorname: 'Lukas', shifts: ['FF', 'FF', 'FF', 'FF', 'AB', 'AB', 'AB', 'FF', 'FF', 'FF', 'FF', 'AB', 'AB', 'AB', 'FF', 'FF', 'FF', 'FF', 'AB', 'AB', 'AB', 'FF', 'FF', 'FF', 'FF', 'AB', 'AB', 'AB', 'FF', 'FF'] },
    { name: 'Weber', vorname: 'Mia', shifts: ['WW', 'WW', 'WW', 'WW', 'O', 'O', 'O', 'WW', 'WW', 'WW', 'WW', 'O', 'O', 'O', 'WW', 'WW', 'WW', 'WW', 'O', 'O', 'O', 'WW', 'WW', 'WW', 'WW', 'O', 'O', 'O', 'WW', 'WW'] },
    { name: 'Schulz', vorname: 'Leon', shifts: ['N', 'N', '', '', 'S', 'S', '', 'N', 'N', '', '', 'S', 'S', '', 'N', 'N', '', '', 'S', 'S', '', 'N', 'N', '', '', 'S', 'S'] },
    { name: 'Becker', vorname: 'Emma', shifts: ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'] },
    { name: 'Hoffmann', vorname: 'Felix', shifts: ['', '', 'FF', 'FF', 'FF', 'FF', 'FF', '', '', 'FF', 'FF', 'FF', 'FF', 'FF', '', '', 'FF', 'FF', 'FF', 'FF', 'FF', '', '', 'FF', 'FF', 'FF', 'FF', 'FF', '', ''] },
  ];

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const shiftTypes = {
    FF: 'Früh (06:00 - 14:00)',
    S: 'Spät (14:00 - 22:00)',
    NN: 'Nacht (22:00 - 06:00)',
    W: 'Wochenende (08:00 - 20:00)',
    O: 'Off',
    AB: 'Abwesend',
    WW: 'Frei',
    
    
  };

  // Get days in the month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const startingDayOfWeek = firstDayOfMonth.getDay(); // Correction: getDay() not getWeekDay() 

  // Function to get formatted date string (e.g., "Fri\n21")
  const getFormattedDate = (date) => {
    const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
    const dayOfMonth = date.getDate();
    return `${dayOfWeek}\n${dayOfMonth}`;
  };

  // Additional Helper for Styling Specific Dates
  const isWeekend = (date) => date.getDay() === 0 || date.getDay() === 6;

  return (
    <div className="schedule-container">
      <h2>EvilCorp InfraMon</h2>
      <p className="subtitle">Last Update: {new Date().toLocaleDateString()}</p>

      <div className="legend-container">
        <h3>Legende</h3>
        {Object.entries(shiftTypes).map(([shiftCode, shiftName]) => (
          <div className="legend-item" key={shiftCode}>
            <span className={`legend-color ${shiftCode.toLowerCase()}`}></span>
            <span className="legend-text">{shiftName}</span>
          </div>
        ))}
      </div>

      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th className="name-header">Nr.</th>
              <th className="name-header">Name</th>
              <th className="name-header">Vorname</th>
              {daysOfWeek.map((day, index) => (
                <th key={index} className={isWeekend(new Date(currentYear, currentMonth, index - startingDayOfWeek + 1)) ? 'weekend' : ''}>
                  {day}
                </th>
              ))}
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              {Array.from({ length: daysInMonth }, (_, i) => (
                <th key={i}>
                  {getFormattedDate(new Date(currentYear, currentMonth, i + 1))}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((employee, index) => (
              <tr key={employee.name}>
                <td>{index + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.vorname}</td>
                {employee.shifts.map((shift, shiftIndex) => (
                  <td key={shiftIndex} className={`shift ${shift.toLowerCase()}`}>
                    {shift} {/* Display the shift code as text */}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
