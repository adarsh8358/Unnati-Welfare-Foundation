import React, { useRef, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import gsap from "gsap";
import "./Nav.scss";
import "./responsive.scss";
import logo from "../assets/logo.jpeg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Slide animation for mobile menu
  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(menuRef.current, { x: "100%", duration: 0.5, ease: "power3.inOut" });
    }
  }, [isOpen]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Scroll to top on navigation
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#c68b2c" : "#333",
    // fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
    transition: "color 0.3s ease",
  });

  return (
    <section className="nav-section">
      {/* Logo */}
      <div className="left">
        <Link to="https://unnatiwelfarefoundation.org/" onClick={handleNavClick}>
          <img src={logo} height={80} alt="UNNATI WELFARE FOUNDATION" className="logo-img" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="desktop-items">
        <NavLink to="/" onClick={handleNavClick} style={linkStyle}>
          <strong>Home</strong>
        </NavLink>
        <NavLink to="/about" onClick={handleNavClick} style={linkStyle}>
          <strong>About</strong>
        </NavLink>
        <NavLink to="/programs" onClick={handleNavClick} style={linkStyle}>
          <strong>Programs</strong>
        </NavLink>
        <NavLink to="/donate" onClick={handleNavClick} style={linkStyle}>
          <strong>Donate</strong>
        </NavLink>
        <NavLink to="/contact" onClick={handleNavClick} style={linkStyle}>
          <strong>Contact</strong>
        </NavLink>
      </div>

      {/* Donate Button & Hamburger */}
      <div className="right-controls">
        <div className="donate-wrapper">
          <Link to="/donate" onClick={handleNavClick}>
            <button className="donate">Donate</button>
          </Link>
        </div>
        <div className="mobile-icons">
          {!isOpen ? (
            <i className="ri-menu-3-line" onClick={() => setIsOpen(true)}></i>
          ) : (
            <i className="ri-close-large-line" onClick={() => setIsOpen(false)}></i>
          )}
        </div>
      </div>

      {/* Mobile Sliding Menu */}
      <div className="mobile-menu" ref={menuRef}>
        <div className="mobile-items">
          <NavLink to="/" onClick={handleNavClick} style={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={handleNavClick} style={linkStyle}>
            About
          </NavLink>
          <NavLink to="/programs" onClick={handleNavClick} style={linkStyle}>
            Programs
          </NavLink>
          <NavLink to="/donate" onClick={handleNavClick} style={linkStyle}>
            Donate
          </NavLink>
          <NavLink to="/contact" onClick={handleNavClick} style={linkStyle}>
            Contact
          </NavLink>
        </div>
        {/* <div className="socialmedia">
          <i className="ri-facebook-fill"></i>
          <i className="ri-instagram-fill"></i>
          <i className="ri-linkedin-fill"></i>
          <i className="ri-twitter-fill"></i>
        </div> */}
      </div>
    </section>
  );
};

export default Nav;
