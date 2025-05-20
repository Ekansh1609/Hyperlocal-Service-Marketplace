import React from 'react';
import { FiStar, FiCheck, FiClock, FiMapPin } from 'react-icons/fi';
const ProfessionalCard = ({ professional }) => {
  return (
    <div className="pro-card">
     
      <div className="pro-header">
        <div className="pro-avatar">{professional.name.charAt(0)}</div>
        <div className="pro-badge">
          <FiCheck className="verified-icon" />
        </div>
      </div>

      <div className="pro-content">
        <h3>{professional.name}</h3>
        <p className="pro-service">{professional.service}</p>
        
        <div className="pro-rating">
          <FiStar className="star-icon" />
          <span>{professional.rating}</span>
          <span className="review-count">({professional.jobs}+ jobs)</span>
          <span className="verified-tag">
            <FiCheck /> Verified Professional
          </span>
        </div>

        <div className="pro-meta">
          <div className="meta-item">
            <FiClock />
            <span>30 mins response</span>
          </div>
          <div className="meta-item">
            <FiMapPin />
            <span>2 km away</span>
          </div>
        </div>

        <div className="pro-footer">
          <div className="price">Starting at {professional.price}</div>
          <button className="book-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCard;