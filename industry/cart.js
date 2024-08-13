import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './cart.css'; // Import the CSS file for additional styling

import { CartContext } from './cartContext'; // Import CartContext
import IndustryHeader from './industryHeader';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext); // Access cart and removeFromCart from CartContext

  return (
    <div>
        <IndustryHeader/>
    
    <div className="container cart-page">
      <h1 className="text-center my-4">Your Cart</h1>
      <div className="row">
        {cart.length > 0 ? (
          cart.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card product-card">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-price">{product.price}</p>
                  <button 
                    className="btn btn-danger" 
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default CartPage;
