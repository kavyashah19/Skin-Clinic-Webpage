import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from './home_comps/Home_i/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = (isActive) =>
    isActive ? (scrolled ? "text-white" : "text-yellow-900") : "";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#c5a891]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className={`text-md font-bold ${scrolled ? "text-white" : "text-yellow-900"}`}>
            Smith Pixie Aesthetique
          </span>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6 font-medium drop-shadow-sm items-center">
          <li><NavLink to="/home" className={({ isActive }) => linkStyle(isActive)}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => linkStyle(isActive)}>About</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => linkStyle(isActive)}>Services</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => linkStyle(isActive)}>Contact</NavLink></li>
          <li><NavLink to="/review" className={({ isActive }) => linkStyle(isActive)}>Reviews</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
