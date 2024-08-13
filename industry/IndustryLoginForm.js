import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './SignUp.css'; // Make sure to include your CSS

const IndustryLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:9003/api/auth/industry/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login
        console.log('Login successful');
        navigate('/industry-home');
      } else {
        // Handle errors
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        alert(`Login failed: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred: ' + (error.message || 'Unknown error'));
    }
  };

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:9003/api/auth/industry/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: forgotPasswordEmail }),
      });

      if (response.ok) {
        // Handle successful password reset request
        console.log('Password reset request sent');
        setForgotPasswordEmail('');
        setShowForgotPassword(false);
        alert('Password reset request sent. Please check your email.');
      } else {
        // Handle errors
        const errorData = await response.json();
        console.error('Password reset failed:', errorData);
        alert(`Password reset failed: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred: ' + (error.message || 'Unknown error'));
    }
  };

  return (
    <div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <h2>Industry Login</h2>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <p>
            <Link 
              to="#" 
              onClick={() => setShowForgotPassword(true)}
              className="forgot-password-link"
            >
              Forgot Password?
            </Link>
          </p>
          <button type="submit">Login</button>
          <p>
            Don't have an account? <Link to="/industry-signup">Sign Up</Link>
          </p>
        </form>

        {showForgotPassword && (
          <div className="forgot-password-container2">
            <h3>Forgot Password</h3>
            <form onSubmit={handleForgotPassword}>
              <input
                type="email"
                placeholder="Enter your email"
                value={forgotPasswordEmail}
                onChange={(e) => setForgotPasswordEmail(e.target.value)}
                required
              />
              <button type="submit">Submit</button>
              <button
                type="button"
                onClick={() => setShowForgotPassword(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndustryLoginForm;
