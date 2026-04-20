import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          {/* <img 
            // src="https://via.placeholder.com/40" 
            alt="SAI Logo" 
            className="logo-icon" 
          /> */}
          <div className="logo-text">
            <span className="logo-main">SAI</span>
            <span className="logo-sub">INTERNATIONAL SCHOOL</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="nav-menu">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#tour" className="nav-link">Virtual Tour</a>
          <a href="#news" className="nav-link">News & Blogs</a>
          <a href="#pay" className="nav-link">Pay Fee</a>
          <a href="#reach" className="nav-link">Reach Us</a>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <button className="apply-now-btn">
            Apply Now <span className="arrow">↗</span>
          </button>
          
          <button className="explore-btn">
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
            Explore
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;