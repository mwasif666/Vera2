import React, { useState, useRef, useEffect } from "react";
import { FiHeart, FiShoppingCart, FiX } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProductSection.css";
import { CgArrowLongRight } from "react-icons/cg";
import { HiArrowLongLeft } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";

const ProductSection = () => {
  // Categories for filtering
  const categories = ["All Products", "Skin Care", "Hair", "Body"];
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    setFilteredProducts(products);

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

  // Product data with categories
  const products = [
    {
      id: 1,
      name: "Skin Renew Serum 100ml",
      price: 149,
      category: "Skin Care",
      image: "/assets/images/Products/1.png",
    },
    {
      id: 2,
      name: "Moisturizer 100ml",
      price: 99,
      category: "Skin Care",
      image: "/assets/images/Products/2.png",
    },
    {
      id: 3,
      name: "Hyaluronic Serum 100ml",
      price: 179,
      category: "Skin Care",
      image: "/assets/images/Products/3.png",
    },
    {
      id: 4,
      name: "Shower Gel 250ml",
      price: 59,
      category: "Body",
      image: "/assets/images/Products/4.png",
    },
    {
      id: 5,
      name: "Aqueous Serum 80ml",
      price: 129,
      category: "Skin Care",
      image: "/assets/images/Products/5.png",
    },
    {
      id: 6,
      name: "Collagen 50ml",
      price: 199,
      category: "Skin Care",
      image: "/assets/images/Products/6.png",
    },
    {
      id: 7,
      name: "Skin Renew Serum 100ml",
      price: 149,
      category: "Skin Care",
      image: "/assets/images/Products/1.png",
    },
    {
      id: 8,
      name: "Moisturizer 100ml",
      price: 99,
      category: "Skin Care",
      image: "/assets/images/Products/2.png",
    },
    {
      id: 9,
      name: "Hyaluronic Serum 100ml",
      price: 179,
      category: "Skin Care",
      image: "/assets/images/Products/3.png",
    },
    {
      id: 10,
      name: "Shower Gel 250ml",
      price: 59,
      category: "Body",
      image: "/assets/images/Products/4.png",
    },
    {
      id: 11,
      name: "Aqueous Serum 80ml",
      price: 129,
      category: "Skin Care",
      image: "/assets/images/Products/5.png",
    },
    {
      id: 12,
      name: "Collagen 50ml",
      price: 199,
      category: "Skin Care",
      image: "/assets/images/Products/6.png",
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeSidebar, setActiveSidebar] = useState("cart");

  // Handle category change with loading animation
  const handleCategoryChange = (category) => {
    setIsLoading(true);
    setActiveCategory(category);

    // Simulate API call delay
    setTimeout(() => {
      const filtered =
        category === "All Products"
          ? products
          : products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 300);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    setActiveSidebar("cart");
    setShowSidebar(true);
  };

  const toggleWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter((item) => item.id !== productId));
  };

  const proceedToCheckout = () => {
    window.location.href = "https://www.fresha.com";
  };

  // Split products into chunks of 6 (2 rows x 3 columns)
  const chunkProducts = (arr, size) => {
    return arr.reduce((chunks, item, index) => {
      const chunkIndex = Math.floor(index / size);
      if (!chunks[chunkIndex]) {
        chunks[chunkIndex] = [];
      }
      chunks[chunkIndex].push(item);
      return chunks;
    }, []);
  };

  const productChunks = chunkProducts(filteredProducts, 6);

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
              <button
                className="header-icon-btn"
                onClick={() => {
                  setActiveSidebar("wishlist");
                  setShowSidebar(true);
                }}
              >
                <FaRegHeart className="header-icon" />
                {wishlist.length > 0 && (
                  <span className="icon-badge">{wishlist.length}</span>
                )}
              </button>
              <button
                className="header-icon-btn header-icon-btn2"
                onClick={() => {
                  setActiveSidebar("cart");
                  setShowSidebar(true);
                }}
              >
                <FiShoppingCart className="header-icon" />
                {cart.length > 0 && (
                  <span className="icon-badge">{cart.length}</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* Loader */}
        {isLoading && (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        )}

        {/* Products Grid with Swiper */}
        {!isLoading && (
          <div className="products-swiper-container">
            <div className="swiper-navigation-buttons">
              <button ref={prevRef} className="custom-swiper-button prev">
                <HiArrowLongLeft />
              </button>
              <button ref={nextRef} className="custom-swiper-button next">
                <CgArrowLongRight />
              </button>
            </div>
            {filteredProducts.length > 0 ? (
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  // Assign refs during Swiper initialization
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                spaceBetween={30}
                slidesPerView={1}
                className="products-swiper"
              >
                {productChunks.map((chunk, index) => (
                  <SwiperSlide key={index}>
                    <div className="row">
                      {chunk.map((product) => (
                        <div className="col-md-4 col-6" key={product.id}>
                          <div className="product-card">
                            <div className="product-image">
                              <img src={product.image} alt={product.name} />
                              <button
                                className={`wishlist-btn ${
                                  wishlist.some(
                                    (item) => item.id === product.id
                                  )
                                    ? "active"
                                    : ""
                                }`}
                                onClick={() => toggleWishlist(product)}
                              >
                                {wishlist.some(
                                  (item) => item.id === product.id
                                ) ? (
                                  <FaRegHeart className="wishlist-icon" />
                                ) : (
                                  <FiHeart className="wishlist-icon" />
                                )}
                              </button>
                            </div>
                            <div className="product-info">
                              <div className="row">
                                <div className="col-lg-7">
                                  <h3 className="product-name">
                                    {product.name}
                                  </h3>
                                  <p className="product-price">
                                    AED {product.price}
                                  </p>
                                </div>
                                <div className="col-lg-5 d-flex align-items-center">
                                  <button
                                    className="add-to-cart"
                                    onClick={() => addToCart(product)}
                                  >
                                    <FiShoppingCart className="cart-icon" />
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="no-products-message">
                <p>No products available in this category</p>
              </div>
            )}
          </div>
        )}

        {/* Sidebar */}
        <div className={`sidebar ${showSidebar ? "active" : ""}`}>
          <div className="sidebar-header">
            <button
              className={`sidebar-tab ${
                activeSidebar === "cart" ? "active" : ""
              }`}
              onClick={() => setActiveSidebar("cart")}
            >
              <FiShoppingCart className="tab-icon" />
              Cart ({cart.length})
            </button>
            <button
              className={`sidebar-tab ${
                activeSidebar === "wishlist" ? "active" : ""
              }`}
              onClick={() => setActiveSidebar("wishlist")}
            >
              <FaRegHeart className="tab-icon" />
              Wishlist ({wishlist.length})
            </button>
            <button
              className="close-sidebar"
              onClick={() => setShowSidebar(false)}
            >
              <FiX />
            </button>
          </div>

          <div className="sidebar-content">
            {activeSidebar === "cart" ? (
              <>
                {cart.length === 0 ? (
                  <p className="empty-message">Your cart is empty</p>
                ) : (
                  <>
                    {cart.map((item) => (
                      <div className="sidebar-item" key={`cart-${item.id}`}>
                        <div className="item-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="item-details">
                          <h4>{item.name}</h4>
                          <p>AED {item.price}</p>
                        </div>
                        <button
                          className="remove-item"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <FiX />
                        </button>
                      </div>
                    ))}
                    <button
                      className="checkout-btn"
                      onClick={proceedToCheckout}
                    >
                      Proceed to Checkout
                    </button>
                  </>
                )}
              </>
            ) : (
              <>
                {wishlist.length === 0 ? (
                  <p className="empty-message">Your wishlist is empty</p>
                ) : (
                  <>
                    {wishlist.map((item) => (
                      <div className="sidebar-item" key={`wishlist-${item.id}`}>
                        <div className="item-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="item-details">
                          <h4>{item.name}</h4>
                          <p>AED {item.price}</p>
                        </div>
                        <button
                          className="remove-item"
                          onClick={() => removeFromWishlist(item.id)}
                        >
                          <FiX />
                        </button>
                      </div>
                    ))}
                  </>
                )}
              </>
            )}
          </div>
        </div>

        {/* Overlay when sidebar is open */}
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

export default ProductSection;
