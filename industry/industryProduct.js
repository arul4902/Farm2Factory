import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './industryProduct.css'; 
import IndustryHeader from './industryHeader';
import { Link } from 'react-router-dom';
import { CartContext } from './cartContext';
import axios from 'axios';

const IndustryProduct = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    industryName: '',
    contactEmail: '',
    mobileNumber: '',
    productName: '',
    wasteQuantity: '',
    address: '',
    deliveryDate: '',
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch industry products from the backend
    axios.get('http://localhost:9003/api/products/industry')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching industry products:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setSuccessMessage(`${product.name} added to cart successfully!`);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setFormData(prevState => ({ ...prevState, productName: product.name }));
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9003/api/form/submit-request/industry', formData);
      if (response.status === 200) {
        alert('Request submitted successfully!');
        setShowForm(false);
      } else {
        alert('Request submission failed.');
      }
    } catch (error) {
      alert('Failed to submit the request.');
      console.error('Error submitting the form:', error.response || error.message);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <IndustryHeader />
      <div className="container product-page">
        <h1 className="text-center my-4">Industry Products</h1>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        <div className="mb-4 position-relative">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <i className="fas fa-search search-icon position-absolute"></i>
        </div>
        <div className="row">
          {filteredProducts.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card product-card">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-price">Rs. {product.price}</p>
                  <div className="d-flex justify-content-between">
                    <button 
                      className="btn btn-primary"
                      onClick={() => handleBuyClick(product)}
                    >
                      Buy
                    </button>
                    <button 
                      className="btn btn-secondary" 
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/cart" className="btn btn-secondary mt-3">Go to Cart</Link>
        {showForm && selectedProduct && (
          <div className="modal">
            <div className="modal-backdrop"></div>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Request Waste</h5>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <label htmlFor="industryName">Industry Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="industryName" 
                          name="industryName"
                          placeholder="Enter Industry Name" 
                          value={formData.industryName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label htmlFor="contactEmail">Contact Email</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          id="contactEmail" 
                          name="contactEmail"
                          placeholder="Enter Contact Email" 
                          value={formData.contactEmail}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <label htmlFor="mobileNumber">Mobile Number</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="mobileNumber" 
                          name="mobileNumber"
                          placeholder="Enter Mobile Number" 
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label htmlFor="wasteQuantity">Waste Quantity</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="wasteQuantity" 
                          name="wasteQuantity"
                          placeholder="Enter Waste Quantity" 
                          value={formData.wasteQuantity}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="address" 
                        name="address"
                        placeholder="Enter Address" 
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="deliveryDate">Delivery Date</label>
                      <input 
                        type="date" 
                        className="form-control" 
                        id="deliveryDate" 
                        name="deliveryDate"
                        placeholder="Enter Delivery Date" 
                        value={formData.deliveryDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-secondary ml-2" onClick={() => setShowForm(false)}>Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndustryProduct;
