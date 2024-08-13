import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const FarmerSignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        lname: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        bankIfscCode: '',
        accountName: '',
        accountNumber: '',
        panNumber: '',
        gstNumber: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:9003/api/auth/industry/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Handle successful registration (e.g., navigate to another page or show a success message)
                console.log('Registration successful');
                navigate('/industry-home');
            } else {
                // Handle errors (e.g., show an error message)
                console.error('Registration failed');
                alert('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }
    };

    return (
        <div>
            <div className="sign-up-container">
                <div className="form-content">
                    <form className="sign-up-form" onSubmit={handleSubmit}>
                        <h2>Industry Registration</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" name="lname" value={formData.lname} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Bank IFSC Code</label>
                                <input type="text" name="bankIfscCode" value={formData.bankIfscCode} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Account Name</label>
                                <input type="text" name="accountName" value={formData.accountName} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Account Number</label>
                                <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>PAN Number</label>
                                <input type="text" name="panNumber" value={formData.panNumber} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>GST Number</label>
                                <input type="text" name="gstNumber" value={formData.gstNumber} onChange={handleChange} required />
                            </div>
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                    <div className="login-link">
                        <p>Already have an account? <Link to="/industry-login">Login here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmerSignupForm;
