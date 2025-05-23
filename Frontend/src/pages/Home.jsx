import React, { useState, useEffect } from 'react';
import { FiSearch, FiMapPin, FiUser, FiStar, FiCheck, FiClock, FiHeart, FiShare2, FiMenu, FiX, FiChevronRight } from 'react-icons/fi';
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import ProfessionalCard from '../components/ProfessionalCard';
import '../styles/main.css';

const Home = () => {
  const [location, setLocation] = useState('patna');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [testimonials] = useState([
    {
      id: 1,
      name: 'Amit Sharma',
      rating: 5,
      comment: 'Great service! The plumber arrived within 30 minutes and fixed my issue perfectly.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Priya Patel',
      rating: 4,
      comment: 'The beautician was very professional. Will definitely book again!',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    }
  ]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { id: 1, name: 'Plumbers', icon: '🚰', professionals: 45, description: 'Fix leaks, install fixtures, and solve all plumbing issues' },
    { id: 2, name: 'Electricians', icon: '💡', professionals: 32, description: 'Wiring, repairs, installations and electrical safety checks' },
    { id: 3, name: 'Beauticians', icon: '💅', professionals: 28, description: 'At-home salon services for all your beauty needs' },
    { id: 4, name: 'AC Repair', icon: '❄️', professionals: 18, description: 'AC servicing, gas refill, and repair services' },
    { id: 5, name: 'Carpenters', icon: '🪚', professionals: 22, description: 'Furniture repair, installation and custom woodwork' },
    { id: 6, name: 'Painters', icon: '🎨', professionals: 15, description: 'Interior, exterior painting and wall texture services' }
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
      photo: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&auto=format&fit=crop&q=60',
      isFavorite: false
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
      photo: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&auto=format&fit=crop&q=60',
      isFavorite: true
    },
    { 
      id: 3, 
      name: 'Vikram Singh', 
      service: 'Electrician', 
      rating: 4.7, 
      jobs: 156,
      price: '₹349',
      responseTime: '25 mins',
      distance: '3 km',
      photo: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=500&auto=format&fit=crop&q=60',
      isFavorite: false
    },
  {
      id: 4,
      name: 'Ravi Kumar',
      service: 'AC Repair',
      rating: 4.8,
      jobs: 210,
      price: '₹399',
      responseTime: '20 mins',
      distance: '2 km',
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=500',
      isFavorite: false
    }
  ];
  

  const toggleFavorite = (id) => {
    // In a real app, you would update this in your state management
    console.log(`Toggled favorite for professional ${id}`);
  };

  const toggleServiceDetails = (id) => {
    setActiveService(activeService === id ? null : id);
  };
  

  return (
    <div className="home-container">
      {/* Enhanced Header with Mobile Menu */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          
          <div className="logo">ServicePro</div>
          
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/professionals" className="nav-link">Professionals</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
          
          <Link to="/login" className="login-btn">
            <FiUser /> Login
          </Link>
        </div>
      </header>

      {/* Hero Section with Search */}
      <section className="hero">
        <div className="hero-content">
          <h1>Home Services, On Demand</h1>
          <p className="hero-subtitle">Book trusted professionals for all your home service needs</p>
          
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
                <option value="patna">Patna</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="mumbai">Mumbai</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>
            <button className="search-btn">Search</button>
          </div>
        </div>
          
      </section>

      {/* Services Section with Expanded Details */}
      <section className="services-section">
        <div className="section-header">
          <h2>Popular Services in {location.charAt(0).toUpperCase() + location.slice(1)}</h2>
          <Link to="/services" className="view-all">
            View All <FiChevronRight />
          </Link>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div 
              key={service.id} 
              className={`service-card-wrapper ${activeService === service.id ? 'active' : ''}`}
              onClick={() => toggleServiceDetails(service.id)}
            >
              <ServiceCard service={service} />
              {activeService === service.id && (
                <div className="service-details">
                  <p>{service.description}</p>
                  <Link to={`/services/${service.name.toLowerCase()}`} className="details-link">
                    View Professionals <FiChevronRight />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Professionals Section */}
      <section className="professionals-section">
        <div className="section-header">
          <h2>Top Professionals Near You</h2>
          <Link to="/professionals" className="view-all">
            View All <FiChevronRight />
          </Link>
        </div>
        
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
                <button 
                  className={`favorite-btn ${pro.isFavorite ? 'active' : ''}`}
                  onClick={() => toggleFavorite(pro.id)}
                >
                  <FiHeart />
                </button>
                <button className="share-btn">
                  <FiShare2 />
                </button>
              </div>

              <div className="pro-content">
                <h3>{pro.name}</h3>
                <p className="pro-service">{pro.service}</p>
                
                <div className="pro-rating">
                  <FiStar className="star-icon" />
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
                  <Link to={`/booking/${pro.id}`} className="book-btn">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                <div>
                  <h4>{testimonial.name}</h4>
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className={i < testimonial.rating ? 'filled' : ''} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* App Download Banner */}
      <section className="app-banner">
        <div className="app-content">
          <div className="app-text">
            <h2>Get the ServicePro App</h2>
            <p>Book services faster and get exclusive app-only discounts</p>
            <div className="app-buttons">
              <button className="app-download">
                <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on the App Store" />


              </button>
              <button className="app-download">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />

              </button>
            </div>
          </div>
          <div className="app-image">
            <img src="https://placehold.co/200x400?text=Mobile+App" alt="ServicePro App" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>ServicePro</h3>
            <p>Your trusted partner for all home services. Quality professionals at your doorstep.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/plumbing">Plumbing</Link></li>
              <li><Link to="/services/electrical">Electrical</Link></li>
              <li><Link to="/services/beauty">Beauty</Link></li>
              <li><Link to="/services/cleaning">Cleaning</Link></li>
              <li><Link to="/services/painting">Painting</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/press">Press</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/safety">Safety</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/refund">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ServicePro. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;