// Dashboard.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('Dashboard');

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Questions':
        return <p>This is the Questions content.</p>;
      case 'Notes':
        return <p>This is the Notes content.</p>;
      case 'Lecture Recordings':
        return <p>This is the Lecture Recordings content.</p>;
      case 'Opportunities':
        return <p>This is the Opportunities content.</p>;
      case 'Virtual Assistant':
        return <p>This is the Virtual Assistant content.</p>;
      default:
        return <h1>{selectedOption}</h1>;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="subsection">
          <p>Project</p>
        </div>
        <Link to="/classes" className="sidebar-button back-button">
          Back
        </Link>
        <button className="sidebar-button" onClick={() => handleButtonClick('Questions')}>Questions</button>
        <button className="sidebar-button" onClick={() => handleButtonClick('Notes')}>Notes</button>
        <button className="sidebar-button" onClick={() => handleButtonClick('Lecture Recordings')}>Lecture Recordings</button>
        <button className="sidebar-button" onClick={() => handleButtonClick('Opportunities')}>Opportunities</button>
        <button className="sidebar-button" onClick={() => handleButtonClick('Virtual Assistant')}>Virtual Assistant</button>
      </div>

      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
