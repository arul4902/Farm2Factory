import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './adminHeader.css'; // Make sure to create this CSS file
import logo from './logo.jpg';

function AdminHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="App-header">
      <div className="logo-container">
        <img 
          src={logo} 
          alt="Farm2Factory Logo" 
          className="logo" 
        />
        <h1 className="project-title">Farm2Factory</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/admin-home">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/admin-dashboard">
              <button>Dashboard</button>
            </Link>
          </li>
          <li>
            <Link to="/admin-farmers">
              <button>Manage Farmers</button>
            </Link>
          </li>
          <li>
            <Link to="/admin-industries">
              <button>Manage Industries</button>
            </Link>
          </li>
          <li>
            <Link to="/admin-waste">
              <button>Manage Waste</button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="profile-menu">
        <img 
          src="https://static.vecteezy.com/system/resources/thumbnails/026/127/506/small_2x/people-communication-icon-in-flat-style-people-illustration-with-long-shadow-partnership-business-concept-vector.jpg" 
          alt="Profile Icon" 
          onClick={toggleDropdown}
          className="profile-icon-img"
        />
        {isDropdownOpen && (
          <div className="profile-dropdown">
            <ul>
              
              <li><Link to="/logout">Logout</Link></li>
              
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default AdminHeader;
