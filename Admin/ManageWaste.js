import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageWaste.css';

const ManageWaste = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    image: '',
    category: '', // 'farmer' or 'industry'
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:9003/api/products/farmer'); // or /industry
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleEdit = (product) => {
    setIsEditing(true);
    setFormData(product);
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:9003/api/products/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Failed to delete product', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:9003/api/products/${formData.id}`, formData);
      } else {
        await axios.post('http://localhost:9003/api/products', formData);
      }
      fetchProducts();
      resetForm();
    } catch (error) {
      console.error('Failed to save product', error);
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setFormData({
      id: '',
      name: '',
      description: '',
      price: '',
      image: '',
      category: '',
    });
  };

  return (
    <div className="manage-waste-container1">
      <h2>Manage Waste Products</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleInputChange}
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Category</option>
          <option value="farmer">Farmer</option>
          <option value="industry">Industry</option>
        </select>
        <button type="submit">{isEditing ? 'Update' : 'Add'} Product</button>
        {isEditing && <button type="button" className="cancel" onClick={resetForm}>Cancel</button>}
      </form>

      <h3>Existing Products</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span>{product.name} - {product.category}</span>
            <div>
  <button className="edit-button" onClick={() => handleEdit(product)}>Edit</button>
  <button className="delete1-button"onClick={() => handleDelete(product.id)}>Delete</button>
</div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageWaste;
