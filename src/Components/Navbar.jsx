import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsNavOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
    setIsNavOpen(false);
  };

  useEffect(() => {
    closeNavbar();
  }, [location]);

  return (
    <div className="d-flex justify-content-center">
      <header className="navbar-container container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img
              src="./assets/images/logo/logo2.png"
              width="150px"
              alt="Main logo"
            />
          </Link>
        </div>
        <nav ref={navRef} className="main-nav">
          <Link to="/AboutUs" className="nav-link" onClick={closeNavbar}>
            About us
          </Link>
          <Link to="/Services" className="nav-link" onClick={closeNavbar}>
            Services
          </Link>
          <Link to="/Products" className="nav-link" onClick={closeNavbar}>
            Products
          </Link>
          <Link to="/Blog" className="nav-link" onClick={closeNavbar}>
            Blog
          </Link>
          <Link to="/Contact" className="nav-link" onClick={closeNavbar}>
            Contact
          </Link>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          {isNavOpen ? (
            <FaTimes className="nav-icon" />
          ) : (
            <FaBars className="nav-icon" />
          )}
        </button>
      </header>
    </div>
  );
}

export default Navbar;
