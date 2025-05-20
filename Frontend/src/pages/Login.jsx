import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState(''); // Start with empty value
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    
    if (!userType) validationErrors.userType = "Please select a user type";
    if (!email) validationErrors.email = "Email is required";
    if (!password) validationErrors.password = "Password is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Handle login logic with userType
    console.log({ email, password, userType });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          {/* User Type Dropdown */}
          <div className="form-group">
            <label htmlFor="userType">I am a:</label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => {
                setUserType(e.target.value);
                setErrors({...errors, userType: ''});
              }}
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
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({...errors, email: ''});
              }}
              className={errors.email ? 'error' : ''}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({...errors, password: ''});
              }}
              className={errors.password ? 'error' : ''}
              required
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <button type="submit" className="auth-btn">Login</button>
          
          <p className="auth-link">
            New user? <Link to="/signup">Sign up here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;