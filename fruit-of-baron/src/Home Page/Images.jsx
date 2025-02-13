import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import image2 from '../assets/image2.png';
import image3 from "../assets/image3.png";
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

// Main container styles
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  padding: "20px",
  minHeight: "100vh",
  backgroundColor: "#f8f9fa",
};

// Main image styles
const mainImageStyle = {
  width: "40%",
  height: "auto",
  borderRadius: "12px",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
  marginBottom: "30px",
  transition: "transform 0.3s ease-in-out",
};

// Thumbnail styles
const thumbnailStyle = {
  width: "250px",
  height: "200px",
  borderRadius: "8px",
  objectFit: "cover",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  transition: "transform 0.3s ease-in-out",
};

// Thumbnail row styles
const thumbnailRowStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  marginTop: "20px",
};

const shopNowStyle = {
  backgroundColor: "#3498db",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease-in-out",
  textDecoration: "none",
  display: "inline-block",
};

// Responsive styles with media queries
const responsiveStyle = `
  @media (max-width: 768px) {
    .main-image {
      width: 80%;
    }
    .thumbnail-row {
      flex-wrap: wrap;
      gap: 10px;
    }
  }
`;

function Images() {
  const [mainImage, setMainImage] = useState(image2);

  return (
    <div style={containerStyle}>
      {/* Media query styles */}
      <style>{responsiveStyle}</style>

      {/* Thumbnail Row */}
      <div style={thumbnailRowStyle} className="thumbnail-row">
        {[image2, image3, image4, image5, image6].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 2}`}
            style={thumbnailStyle}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      {/* Main Image */}
      <img
        src={mainImage}
        alt="Main Image"
        style={mainImageStyle}
        className="main-image"
      />

    </div>
  );
}

export default Images;