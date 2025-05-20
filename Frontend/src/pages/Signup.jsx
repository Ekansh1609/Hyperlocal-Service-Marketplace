import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    userType: '', // 'customer', 'professional', or 'admin'
    profession: '', // Only for professionals
    adminCode: ''  // Only for administrators
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {};
    if (!formData.userType) newErrors.userType = 'Please select a user type';
    if (!formData.name) newErrors.name = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    
    // Additional validation for specific user types
    if (formData.userType === 'professional' && !formData.profession) {
      newErrors.profession = 'Profession is required';
    }
    if (formData.userType === 'admin' && !formData.adminCode) {
      newErrors.adminCode = 'Admin code is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle signup logic with userType
    console.log('Signup data:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          {/* User Type Dropdown */}
          <div className="form-group">
            <label htmlFor="userType">I am signing up as:</label>
            <select
              name="userType"
              id="userType"
              value={formData.userType}
              onChange={handleChange}
              className={`auth-select ${errors.userType ? 'error' : ''}`}
              required
            >
              <option value="">Select User Type</option>
              <option value="customer">Customer</option>
              <option value="professional">Service Professional</option>
              <option value="admin">Administrator</option>
            </select>
            {errors.userType && <span className="error-message">{errors.userType}</span>}
          </div>

          {/* Common Fields */}
          <div className="form-group">
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              required
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'error' : ''}
              required
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
              required
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {/* Conditional Fields for Professionals */}
          {formData.userType === 'professional' && (
            <div className="form-group">
              <input
                name="profession"
                type="text"
                placeholder="Your Profession (e.g., Plumber, Electrician)"
                value={formData.profession}
                onChange={handleChange}
                className={errors.profession ? 'error' : ''}
                required={formData.userType === 'professional'}
              />
              {errors.profession && <span className="error-message">{errors.profession}</span>}
            </div>
          )}

          {/* Conditional Fields for Administrators */}
          {formData.userType === 'admin' && (
            <div className="form-group">
              <input
                name="adminCode"
                type="password"
                placeholder="Administrator Access Code"
                value={formData.adminCode}
                onChange={handleChange}
                className={errors.adminCode ? 'error' : ''}
                required={formData.userType === 'admin'}
              />
              {errors.adminCode && <span className="error-message">{errors.adminCode}</span>}
            </div>
          )}

          <button type="submit" className="auth-btn">Sign Up</button>
          
          <p className="auth-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup