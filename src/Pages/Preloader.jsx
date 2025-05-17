import React, { useState, useEffect } from "react";
import "./Preloader.css"; // Create this CSS file for styling

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Clean up on component unmount
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <div className="preloader">
          <div className="preloader-content">
            <img src="/assets/images/logo/logo2.png" alt="Logo" />
            <p className="preloader-description">Transformative Hair Service</p>
          </div>
        </div>
      ) : (
        <div className="website-content">
          {/* Your actual website content goes here */}
          <h1>Welcome to Our Website</h1>
          <p>Your main content appears here after the preloader.</p>
        </div>
      )}
    </div>
  );
};

export default Preloader;
