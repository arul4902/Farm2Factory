import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './industryHeader.css'; // Make sure to create this CSS file
import logo from './logo.jpg';

function IndustryHeader() {
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
            <Link to="/industry-home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/industry-product">
              Products
            </Link>
          </li>
          <li>
            <Link to="/industry-about-us">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/industry-contact-us">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
      <div className="profile-menu">
        <img
                    src="data:image/jpeg;base64,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" 

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

export default IndustryHeader;
