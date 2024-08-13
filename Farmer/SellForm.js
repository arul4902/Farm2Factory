import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SellForm.css';  // Custom CSS

const SellForm = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    emailId: '',
    phone: '',
    productName: product.name || '', // Default to empty string if product.name is not available
    quantity: '',
    deliveryDate: '',
    address: ''
  });

  useEffect(() => {
    // Update the productName in formData whenever the product changes
    setFormData((prevData) => ({
      ...prevData,
      productName: product.name || '', // Ensure productName is updated correctly
    }));
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9003/api/form/submit-request', formData);
      if (response.status === 200) {
        alert('Request submitted successfully!');
        onClose();  // Close the form after successful submission
      } else {
        alert('Request submission failed.');
      }
    } catch (error) {
      alert('Failed to submit the request.');
      console.error('There was an error submitting the form!', error.response || error.message);
    }
  };

  return (
    <div className="overlay">
      <div className="sell-form-modal">
        <h2>Sell {product.name || 'Product'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="emailId"
              className="form-control"
              placeholder="Email"
              value={formData.emailId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="productName"
              className="form-control"
              value={formData.productName}
              readOnly
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="quantity"
              className="form-control"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              name="deliveryDate"
              className="form-control"
              value={formData.deliveryDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="address"
              className="form-control"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default SellForm;
