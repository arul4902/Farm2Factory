import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FarmerProduct.css';
import FarmHeader from './FarmHeader';
import SellForm from './SellForm';
import axios from 'axios';

const FarmerProduct = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch farmer products from the backend
    axios.get('http://localhost:9003/api/products/farmer')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching farmer products:', error));
  }, []);

  const handleSellClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseForm = () => {
    setSelectedProduct(null);
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
      <FarmHeader />
      <div className="container product-page">
        <h1 className="text-center my-4">Farmer Products</h1>
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
                  <button 
                    className="btn btn-success" 
                    onClick={() => handleSellClick(product)}
                  >
                    Sell
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <SellForm product={selectedProduct} onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default FarmerProduct;
