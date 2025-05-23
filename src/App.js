import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import "./App.css";
import Product from "./Pages/Products";
import Services from "./Pages/Services";
import Footer from "./Pages/Footer";
import AboutUs from "./Pages/About";
import BlogPost from "./Pages/Blog";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <img src="./assets/images/logo/logo2.png" alt="Logo" />
        <p className="video-description">Transformative Hair Service</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

const AppWrapper = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show preloader on initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show preloader on route change
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Shorter duration for route changes (1 second)

    return () => clearTimeout(timer);
  }, [location.pathname]); // Trigger when route changes

  return (
    <>
      {loading && <Preloader />}
      <div className={`website-content ${loading ? "content-hidden" : ""}`}>
        <Navbar />
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/Products" element={<Product />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />

          <Route path="/Blog" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
};

export default App;
