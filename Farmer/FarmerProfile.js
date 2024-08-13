import React, { useState, useEffect } from 'react';
import './FarmerProfile.css'; // Create and style this CSS file as needed

function FarmerProfile() {
  const [farmer, setFarmer] = useState({});

  useEffect(() => {
    // Fetch farmer data from API or server
    // For demo purposes, using static data
    setFarmer({
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      farmName: 'Doe Farms',
      location: 'Farmville',
      products: ['Corn', 'Wheat', 'Soybeans'],
    });
  }, []);

  return (
    <div className="profile-container">
      <h1>Farmer Profile</h1>
      <div className="profile-details">
        <p><strong>ID:</strong> {farmer.id}</p>
        <p><strong>Name:</strong> {farmer.name}</p>
        <p><strong>Email:</strong> {farmer.email}</p>
        <p><strong>Farm Name:</strong> {farmer.farmName}</p>
        <p><strong>Location:</strong> {farmer.location}</p>
        <p><strong>Products:</strong> {farmer.products.join(', ')}</p>
      </div>
    </div>
  );
}

export default FarmerProfile;
