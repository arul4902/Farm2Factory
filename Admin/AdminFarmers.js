import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import AdminHeader from './adminHeader';

const AdminFarmers = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:9003/api/form/requests');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleAccept = async (emailId) => {
    try {
      await axios.post('http://localhost:9003/api/form/accept', { emailId }, {
        headers: { 'Content-Type': 'application/json' }
      });
      alert('Request accepted!');
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.emailId === emailId ? { ...request, status: 'Accepted' } : request
        )
      );
    } catch (error) {
      alert('Failed to accept the request.');
      console.error('There was an error accepting the request!', error.response || error.message);
    }
  };

  const handleInProgress = async (emailId) => {
    try {
      await axios.post('http://localhost:9003/api/form/on-progress', { emailId }, {
        headers: { 'Content-Type': 'application/json' }
      });
      alert('Request marked as in-progress!');
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.emailId === emailId ? { ...request, status: 'In Progress' } : request
        )
      );
    } catch (error) {
      alert('Failed to mark the request as in-progress.');
      console.error('There was an error marking the request as in-progress!', error.response || error.message);
    }
  };

  return (
    <div>
      
      <div className="container mt-4">
        <h2 className="mb-4">Farmer Requests</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.length > 0 ? (
                requests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.name}</td>
                    <td>{request.emailId}</td>
                    <td>{request.productName}</td>
                    <td>{request.quantity}</td>
                    <td>{request.status}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => handleAccept(request.emailId)}
                        disabled={request.status === 'Accepted'}
                      >
                        Accept
                      </button>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleInProgress(request.emailId)}
                        disabled={request.status === 'In Progress' || request.status === 'Accepted'}
                      >
                        In Progress
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No requests available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminFarmers;
