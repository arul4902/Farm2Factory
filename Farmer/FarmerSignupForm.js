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
        panNumber: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = 'First name is required';
        if (!formData.lname) newErrors.lname = 'Last name is required';
        
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Invalid phone number';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.password = 'Passwords do not match';
        }

        const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
        if (!ifscRegex.test(formData.bankIfscCode)) {
            newErrors.bankIfscCode = 'Invalid IFSC code';
        }

        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (!panRegex.test(formData.panNumber)) {
            newErrors.panNumber = 'Invalid PAN number';
        }

        if (!formData.accountName) newErrors.accountName = 'Account name is required';
        if (!formData.accountNumber) newErrors.accountNumber = 'Account number is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            const response = await fetch('http://localhost:9003/api/auth/farmer/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Registration successful');
                navigate('/farmer-home');
            } else {
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
                        <h2>Farmer Registration</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                                {errors.name && <span className="error">{errors.name}</span>}
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" name="lname" value={formData.lname} onChange={handleChange} required />
                                {errors.lname && <span className="error">{errors.lname}</span>}
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                                {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                                {errors.password && <span className="error">{errors.password}</span>}
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                                {errors.password && <span className="error">{errors.password}</span>}
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Bank IFSC Code</label>
                                <input type="text" name="bankIfscCode" value={formData.bankIfscCode} onChange={handleChange} required />
                                {errors.bankIfscCode && <span className="error">{errors.bankIfscCode}</span>}
                            </div>
                            <div className="form-group">
                                <label>Account Name</label>
                                <input type="text" name="accountName" value={formData.accountName} onChange={handleChange} required />
                                {errors.accountName && <span className="error">{errors.accountName}</span>}
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Account Number</label>
                                <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} required />
                                {errors.accountNumber && <span className="error">{errors.accountNumber}</span>}
                            </div>
                            <div className="form-group">
                                <label>PAN Number</label>
                                <input type="text" name="panNumber" value={formData.panNumber} onChange={handleChange} required />
                                {errors.panNumber && <span className="error">{errors.panNumber}</span>}
                            </div>
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                    <div className="login-link">
                        <p>Already have an account? <Link to="/farmer-login">Login here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmerSignupForm;
