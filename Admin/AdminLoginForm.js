import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function AdminLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Default credentials
  const defaultEmail = 'adminf2f@gmail.com';
  const defaultPassword = 'adminf2f';

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the email and password match the default credentials
    if (email === defaultEmail && password === defaultPassword) {
      // On successful login, navigate to the admin home page
      navigate('/admin-dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div>
      <div className="Login-container">
        <form className="Login-form" onSubmit={handleSubmit}>
          <h2>Admin Login</h2>
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLoginForm;
