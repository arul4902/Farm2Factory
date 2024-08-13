import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import AdminHeader from './adminHeader';

const AdminIndustries = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:9003/api/form/requests/industry');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleAccept = async (contactEmail) => {
    try {
      await axios.post('http://localhost:9003/api/form/accept/industry', { contactEmail });
      alert('Request accepted!');
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.contactEmail === contactEmail ? { ...request, status: 'Accepted' } : request
        )
      );
    } catch (error) {
      alert('Failed to accept the request.');
      console.error('Error accepting request:', error);
    }
  };

  const handleInProgress = async (contactEmail) => {
    try {
      await axios.post('http://localhost:9003/api/form/on-progress/industry', { contactEmail });
      alert('Request marked as in-progress!');
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.contactEmail === contactEmail ? { ...request, status: 'In-Progress' } : request
        )
      );
    } catch (error) {
      alert('Failed to mark the request as in-progress.');
      console.error('Error marking request as in-progress:', error);
    }
  };

  return (
    <div>
    
      <div className="container">
        <h1 className="text-center my-4">Industry Requests</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Industry Name</th>
              <th>Contact Email</th>
              <th>Mobile Number</th>
              <th>Quantity of Waste</th>
              <th>Address</th>
              <th>Delivery Date</th>
              <th>Product Name</th> {/* Added column for Product Name */}
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.contactEmail}>
                <td>{request.industryName}</td>
                <td>{request.contactEmail}</td>
                <td>{request.mobileNumber}</td>
                <td>{request.wasteQuantity}</td>
                <td>{request.address}</td>
                <td>{request.deliveryDate}</td>
                <td>{request.productName}</td> {/* Display product name */}
                <td>{request.status}</td>
                <td>
                  <button 
                    className="btn btn-success"
                    onClick={() => handleAccept(request.contactEmail)}
                    disabled={request.status === 'Accepted'}
                  >
                    Accept
                  </button>
                  <button 
                    className="btn btn-warning ml-2"
                    onClick={() => handleInProgress(request.contactEmail)}
                    disabled={request.status === 'In-Progress' || request.status === 'Accepted'}
                  >
                    In-Progress
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminIndustries;
