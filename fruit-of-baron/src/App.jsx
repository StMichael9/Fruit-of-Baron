import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Home Page/Header';
import Login from './Logic/Login';
import Images from './Home Page/Images';
import './CSS Styles/app.css';
import './CSS Styles/index.css';
import './CSS Styles/image.css';
import Shop from './Shop';


const navStyle = {
  listStyleType: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  margin: 0,
  padding: 0,
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
  transition: 'color 0.3s ease',
};

const headerStyle = {
  backgroundColor: '#2c3e50',
  color: '#fff',
  padding: '15px 30px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 100,
  fontFamily: "'Dancing Script', cursive",
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

const imageStyle = {
  width: '100px',
  height: 'auto',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

// Common container style
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  marginTop: '20px',
};

// Placeholder components for About and Contact pages
const Home = () => <div><Header /><Images /></div>;
const About = () => <div><Header />About Page</div>;
const Contact = () => <div><Header />Contact Page</div>;
const ShopPage = () => <div> <Shop />Shop</div>;

const App = () => {
  return (
    <Router>
      <div>
       

        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;