import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-placeholder">
             {/* Replace with your logo <img> */}
             <div className="logo-icon-img"></div> 
             <div className="logo-text">
                <span className="logo-main">SAI</span>
                <span className="logo-sub">INTERNATIONAL SCHOOL</span>
             </div>
          </div>
        </div>

        {/* Desktop Nav - Hidden on Mobile */}
        <nav className="nav-menu">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">About Us</a>
          <a href="#" className="nav-link">Virtual Tour</a>
          <a href="#" className="nav-link">News & Blogs</a>
          <a href="#" className="nav-link">Pay Fee</a>
          <a href="#" className="nav-link">Reach Us</a>
        </nav>

        {/* Action Buttons - Responsive Icons */}
        <div className="header-actions">
          <button className="apply-now-btn">
            <span className="btn-text">Apply Now</span>
            <span className="arrow">↗</span>
          </button>
          
          <button className="explore-btn">
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="btn-text">Explore</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;