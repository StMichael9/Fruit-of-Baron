import { Link } from "react-router-dom";
import React, { useState } from 'react';

const shopNowStyle = {
  backgroundColor: "#3498db",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease-in-out",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
};

function Shop() {
  return (
    <div>
      <h1>Welcome to the Shop</h1>
      {/* Wrap the button with the Link for navigation */}
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <button style={shopNowStyle}>Shop</button>
      </Link>
    </div>
  );
}

export default Shop;
