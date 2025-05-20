import React, { useState } from 'react';

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="service-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="service-icon" style={{
        transform: isHovered ? 'rotate(5deg)' : 'rotate(0)'
      }}>
        {service.icon}
      </div>
      <h3 style={{
        color: isHovered ? '#4a00e0' : '#333',
        transition: 'color 0.3s ease'
      }}>
        {service.name}
      </h3>
      <p style={{
        opacity: isHovered ? 0.8 : 1,
        transform: isHovered ? 'translateY(3px)' : 'translateY(0)',
        transition: 'all 0.3s ease'
      }}>
        {service.professionals}+ Professionals
      </p>
      
      {/* Optional: Add a "View More" button that appears on hover */}
      {isHovered && (
        <button style={{
          position: 'absolute',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#4a00e0',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer',
          opacity: 0,
          animation: 'fadeIn 0.3s forwards'
        }}>
          View Professionals
        </button>
      )}
    </div>
  );
};

export default ServiceCard;