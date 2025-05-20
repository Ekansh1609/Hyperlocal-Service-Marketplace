import React, { useState } from 'react';
import { FiSearch, FiMapPin, FiUser, FiStar, FiCheck, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import ProfessionalCard from '../components/ProfessionalCard';
import '../styles/main.css';

const Home = () => {
  const [location, setLocation] = useState('patna');
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    { id: 1, name: 'Plumbers', icon: '🚰', professionals: 45 },
    { id: 2, name: 'Electricians', icon: '💡', professionals: 32 },
    { id: 3, name: 'Beauticians', icon: '💅', professionals: 28 },
    { id: 4, name: 'AC Repair', icon: '❄️', professionals: 18 }
  ];

  const professionals = [
    { 
      id: 1, 
      name: 'Rajesh Kumar', 
      service: 'Plumber', 
      rating: 4.9, 
      jobs: 124,
      price: '₹399',
      responseTime: '30 mins',
      distance: '2 km',
      photo: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&auto=format&fit=crop&q=60'
    },
    { 
      id: 2, 
      name: 'Priya Sharma', 
      service: 'Beautician', 
      rating: 4.8, 
      jobs: 89,
      price: '₹499',
      responseTime: '45 mins',
      distance: '1.5 km',
      photo: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&auto=format&fit=crop&q=60'
    }
  ];

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">ServicePro</div>
        <Link to="/login" className="login-btn">
          <FiUser /> Login
        </Link>
      </header>

      <section className="hero">
        <h1>Home Services, On Demand</h1>
        <div className="search-container">
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="What service do you need?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="location-selector">
            <FiMapPin className="location-icon" />
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
              <option>Patna</option>
              <option>Delhi</option>
              <option>Bangalore</option>
            </select>
          </div>
          <button className="search-btn">Search</button>
        </div>
      </section>

      <section className="services-section">
        <h2>Popular Services in {location}</h2>
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="professionals-section">
  <h2>Top Professionals Near You</h2>
  <div className="professionals-grid">
    {professionals.map(pro => (
      <div key={pro.id} className="pro-card">
        <div className="pro-photo-container">
          <img 
            src={pro.photo} 
            alt={pro.name}
            className="pro-photo"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x200?text=Professional';
            }}
          />
          <div className="pro-badge">
            <FiCheck />
          </div>
        </div>

        <div className="pro-content">
          <h3>{pro.name}</h3>
          <p className="pro-service">{pro.service}</p>
          
          <div className="pro-rating">
            <FiStar />
            <span>{pro.rating}</span>
            <span className="review-count">({pro.jobs}+ jobs)</span>
          </div>

          <div className="pro-meta">
            <div className="meta-item">
              <FiClock />
              <span>{pro.responseTime} response</span>
            </div>
            <div className="meta-item">
              <FiMapPin />
              <span>{pro.distance} away</span>
            </div>
          </div>

          <div className="pro-footer">
            <div className="price">Starting at {pro.price}</div>
            <button className="book-btn">Book Now</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default Home;

