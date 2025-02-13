import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

// Common styles
const navStyle = {
  listStyleType: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  margin: 0,
  padding: 0,
  
};

const linkStyle = {
  color: '#2F4F4F',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
  transition: 'color 0.3s ease',
  fontFamily: "'Playfair Display', serif",
};

const headerStyle = {
  backgroundColor: '#FFFAFA',
  color: '#696969',
  padding: '15px 30px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 100,
  fontFamily: "'Playfair Display', serif",
};

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  margin: 0,
};

const logo1Style = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '1px',
  margin: 0,
  padding: 0,
  height: '75px',
  width: '125px',
};

const paragraphStyle = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 400, // Regular
  fontSize: "1rem",
  color: "#665",
};

function Header() {
  return (
    <header style={headerStyle}>
      <img src={logo} alt="Logo" style={logo1Style} />
      <h1 style={logoStyle}>Fruit of Baron</h1>

      {/* Navigation menu */}
      <nav className="header-nav">
        <ul style={navStyle}>
          <li><Link to="/" className="header-link" style={linkStyle}>Home</Link></li>
          <li><Link to="/about" className="header-link" style={linkStyle}>About</Link></li>
          <li><Link to="/contact" className="header-link" style={linkStyle}>Contact</Link></li>
          <li><Link to="/cart" className="header-link" style={linkStyle}>Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;