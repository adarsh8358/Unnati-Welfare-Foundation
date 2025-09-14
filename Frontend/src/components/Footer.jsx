import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import logo2 from "../assets/logo2.jpeg"; // Ensure you have a logo image in the specified path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Logo and Description */}
        <div className="footer-left">
          <img
            src={logo2} // Replace with your logo path or import
            alt="Unnati Welfare Foundation"
            className="footer-logo"
          />
          <p className="footer-description">
            Empowering communities through welfare programs and initiatives.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Right: Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@unnatiwelfare.org</p>
          <p>Phone: +91 98765 43210</p>
          <div className="footer-social">
            <i className="ri-facebook-fill"></i>
            <i className="ri-instagram-fill"></i>
            <i className="ri-linkedin-fill"></i>
            <i className="ri-twitter-fill"></i>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Unnati Welfare Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
