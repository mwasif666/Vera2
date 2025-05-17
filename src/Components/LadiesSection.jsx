import React, { useState, useRef, useEffect } from "react";
import "./GentsSection.css";
import { FaBars } from "react-icons/fa";

const LadiesSection = () => {
  const categories = ["All Services", "Hair", "Color Bar", "Facials"];
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const gentsProducts = [
    {
      id: 1,
      name: "Gentleman's Trim (Dry)",
      price: "AED 45",
      category: "Hair",
    },
    { id: 2, name: "Wash & Cut Combo", price: "AED 60", category: "Hair" },
    { id: 3, name: "Style & Set", price: "AED 55", category: "Hair" },
    {
      id: 4,
      name: "Kid's Haircut (Below 10)",
      price: "AED 30",
      category: "Hair",
    },
    {
      id: 5,
      name: "Hair Wash & Conditioning",
      price: "AED 35",
      category: "Hair",
    },
    { id: 6, name: "Beard Sculpting", price: "AED 25", category: "Hair" },
    { id: 7, name: "Beard Trim", price: "AED 20", category: "Hair" },
    { id: 8, name: "Clean Shave", price: "AED 20", category: "Hair" },
    { id: 9, name: "Full Head Shave", price: "AED 40", category: "Hair" },

    { id: 10, name: "Beard Tint", price: "AED 35", category: "Color Bar" },
    {
      id: 11,
      name: "Basic Hair Color",
      price: "AED 80",
      category: "Color Bar",
    },
    {
      id: 12,
      name: "Ammonia-Free Color",
      price: "AED 100",
      category: "Color Bar",
    },
    {
      id: 13,
      name: "Creative Fashion Color",
      price: "AED 120",
      category: "Color Bar",
    },
    {
      id: 14,
      name: "Streak Highlight (Per Piece)",
      price: "AED 20",
      category: "Color Bar",
    },

    {
      id: 15,
      name: "Gold Radiance Facial",
      price: "AED 150",
      category: "Facials",
    },
    {
      id: 16,
      name: "Vitamin C Brightening",
      price: "AED 140",
      category: "Facials",
    },
    {
      id: 17,
      name: "Charcoal Detox Facial",
      price: "AED 130",
      category: "Facials",
    },
    {
      id: 18,
      name: "Hydrating Marine Facial",
      price: "AED 160",
      category: "Facials",
    },
    {
      id: 19,
      name: "Gold Radiance Facial",
      price: "AED 150",
      category: "Facials",
    },
    {
      id: 20,
      name: "Vitamin C Brightening",
      price: "AED 140",
      category: "Facials",
    },
    {
      id: 21,
      name: "Charcoal Detox Facial",
      price: "AED 130",
      category: "Facials",
    },
    {
      id: 22,
      name: "Hydrating Marine Facial",
      price: "AED 160",
      category: "Facials",
    },
  ];

  useEffect(() => {
    setFilteredProducts(gentsProducts);

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowFilterSidebar(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryChange = (category) => {
    setIsLoading(true);
    setActiveCategory(category);

    setTimeout(() => {
      if (category === "All Services") {
        setFilteredProducts(gentsProducts);
      } else {
        setFilteredProducts(
          gentsProducts.filter((p) => p.category === category)
        );
      }
      setIsLoading(false);
    }, 300);
  };

  const groupProductsByCategory = () => {
    const grouped = {};
    gentsProducts.forEach((product) => {
      if (!grouped[product.category]) {
        grouped[product.category] = [];
      }
      grouped[product.category].push(product);
    });
    return grouped;
  };

  const renderAllServicesView = () => {
    const groupedProducts = groupProductsByCategory();
    return (
      <div className="all-services-view">
        {Object.entries(groupedProducts).map(([category, products]) => (
          <div key={category} className="category-section">
            <div className="button-title">
              <h3 className="category-title">{category}</h3>
              <button className="">BOOK NOW</button>
            </div>
            <div className="row">
              {products.map((product) => (
                <div className="col-12" key={product.id}>
                  <div className="Service-card">
                    <div className="Service-info">
                      <h3 className="Service-name">{product.name}</h3>
                      <p className="Service-price">{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderCategoryView = () => {
    return (
      <div className="Service">
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-12" key={product.id}>
              <div className="Service-card">
                <div className="Service-info">
                  <h3 className="Service-name">{product.name}</h3>
                  <p className="Service-price">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="product-section">
      <div className="bar-filter">
        <div className="container">
          <div className="products-header">
            {isMobileView && (
              <button
                className="filter-mobile-toggle"
                onClick={() => setShowFilterSidebar(true)}
              >
                <FaBars />
              </button>
            )}

            <div
              className={`filter-sidebar ${
                showFilterSidebar ? "visible" : ""
              } ${isMobileView ? "mobile" : ""}`}
            >
              {isMobileView && (
                <button
                  className="filter-close-btn"
                  onClick={() => setShowFilterSidebar(false)}
                >
                  ×
                </button>
              )}
              <div className="filter-tabs">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`filter-tab ${
                      activeCategory === category ? "active" : ""
                    }`}
                    onClick={() => {
                      handleCategoryChange(category);
                      if (isMobileView) setShowFilterSidebar(false);
                    }}
                    disabled={isLoading}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="header-icons">
              <h5>Gents Service Menu</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid service-swiper-container p-0">
        {isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="container">
            {filteredProducts.length > 0 ? (
              activeCategory === "All Services" ? (
                renderAllServicesView()
              ) : (
                renderCategoryView()
              )
            ) : (
              <div className="no-products-message">
                <p>No products available in this category</p>
              </div>
            )}
          </div>
        )}

        {showSidebar && (
          <div
            className="sidebar-overlay"
            onClick={() => setShowSidebar(false)}
          ></div>
        )}
      </div>
    </div>
  );
};

export default LadiesSection;
