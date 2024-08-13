import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FarmHeader.css'; // Make sure to create this CSS file
import logo from './logo.jpg'

function FarmHeader() {
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
            <Link to="/farmer-home">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/farmer-product">
              <button>Products</button>
            </Link>
          </li>
          <li>
            <Link to="/farm-about-us">
              <button>About Us</button>
            </Link>
          </li>
          <li>
            <Link to="/farm-contact-us">
              <button>Contact Us</button>
            </Link>
          </li>
         
         
          
        </ul>
      </nav>
      <div className="profile-menu">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76U4R4yOEdb-l2glApHLsz7f3Wtb0kELgy5341NZz2ZzxkAPBavG44pIYwVBpprsQDfQ&usqp=CAU" 
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

export default FarmHeader;
