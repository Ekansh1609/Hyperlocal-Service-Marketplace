import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/main.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    userType: '',
    profession: '',
    adminCode: ''
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    
    const newErrors = {};
    if (!formData.userType) newErrors.userType = 'Please select a user type';
    if (!formData.name) newErrors.name = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.userType === 'professional' && !formData.profession)
      newErrors.profession = 'Profession is required';
    if (formData.userType === 'admin' && !formData.adminCode)
      newErrors.adminCode = 'Admin code is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
      
      // On successful registration:
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify({
        _id: res.data._id,
        name: res.data.name,
        email: res.data.email,
        userType: formData.userType
      }));

      // Navigate user based on type
      if (formData.userType === 'admin') navigate('/admin/dashboard');
      else if (formData.userType === 'professional') navigate('/professional/dashboard');
      else navigate('/');

    }  catch (err) {
  console.error('Signup error:', err);
  res.status(500).json({ message: 'Something went wrong' });
}

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userType">I am signing up as:</label>
            <select
              name="userType"
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

          {formData.userType === 'professional' && (
            <div className="form-group">
              <input
                name="profession"
                placeholder="Your Profession (e.g., Plumber)"
                value={formData.profession}
                onChange={handleChange}
                className={errors.profession ? 'error' : ''}
              />
              {errors.profession && <span className="error-message">{errors.profession}</span>}
            </div>
          )}

          {formData.userType === 'admin' && (
            <div className="form-group">
              <input
                name="adminCode"
                type="password"
                placeholder="Administrator Access Code"
                value={formData.adminCode}
                onChange={handleChange}
                className={errors.adminCode ? 'error' : ''}
              />
              {errors.adminCode && <span className="error-message">{errors.adminCode}</span>}
            </div>
          )}

          {serverError && <div className="error-message text-center">{serverError}</div>}

          <button type="submit" className="auth-btn">Sign Up</button>

          <p className="auth-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
