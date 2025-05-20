import React, { useState, useEffect } from "react";
import styles from "../Styles/Slider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const data = [
  {
    key: 0,
    title: "Hair Station",
    description:
      "Get styled by our expert hairdressers for a refreshed and fabulous look.",
    image: "assets/images/gallery/hair station 2.png",
  },

  {
    key: 2,
    title: "Make Up Room",
    description:
      "Step into beauty with our elegant makeup room for flawless transformations.",
    image: "assets/images/gallery/Make up room.png",
  },

  {
    key: 4,
    title: "Reception",
    description:
      "A warm welcome awaits you at our beautifully designed reception area.",
    image: "assets/images/gallery/Reception.png",
  },
  {
    key: 5,
    title: "Reception 1st Floor",
    description:
      "Enjoy hospitality and comfort at our first-floor reception space.",
    image: "assets/images/gallery/Reception 1st floor.png",
  },
  {
    key: 6,
    title: "Coffee Shop",
    description:
      "Relax and recharge with refreshments in our cozy coffee corner.",
    image: "assets/images/gallery/coffee Shop 2.png",
  },

  {
    key: 8,
    title: "Moroccan Bath",
    description: "Detox and indulge in a rejuvenating Moroccan bath ritual.",
    image: "assets/images/gallery/morocoan Bath.png",
  },
  {
    key: 9,
    title: "Relaxing Room",
    description: "Find calm and peace in our dedicated relaxation room.",
    image: "assets/images/gallery/releaxing room.png",
  },
  {
    key: 10,
    title: "Treatment Room",
    description:
      "Professional skincare and wellness treatments in a tranquil setting.",
    image: "assets/images/gallery/treatment.png",
  },
  {
    key: 11,
    title: "VIP Room",
    description: "Exclusive luxury treatments in our private VIP suite.",
    image: "assets/images/gallery/vip room.png",
  },
  {
    key: 12,
    title: "Vichy Shower",
    description:
      "Hydrotherapy elegance with our advanced Vichy shower experience.",
    image: "assets/images/gallery/Vishi Show.png",
  },
  {
    key: 13,
    title: "Wax Room",
    description:
      "Smooth results delivered in our clean and comfortable waxing space.",
    image: "assets/images/gallery/wax.png",
  },
  {
    key: 14,
    title: "Changing Room",
    description: "Spacious, secure changing area for your comfort and privacy.",
    image: "assets/images/gallery/chaning.png",
  },
  {
    key: 15,
    title: "Corridor",
    description:
      "Elegantly designed corridors that lead you to your beauty destination.",
    image: "assets/images/gallery/Coridor.png",
  },
  {
    key: 16,
    title: "Lobby Area",
    description: "A serene, welcoming lobby that sets the tone for your visit.",
    image: "assets/images/gallery/Lobby Area.png",
  },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(data[0]);
  const [startIndex, setStartIndex] = useState(0);
  const [fadeEffect, setFadeEffect] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(1);
        setIsMobile(true);
      } else if (width < 992) {
        setItemsPerPage(2);
        setIsMobile(false);
      } else {
        setItemsPerPage(3);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [startIndex, itemsPerPage]);

  const nextSlide = () => {
    setFadeEffect(true);
    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % data.length);
      setSelectedItem(data[(startIndex + 1) % data.length]);
      setFadeEffect(false);
    }, 300);
  };

  const prevSlide = () => {
    setFadeEffect(true);
    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
      setSelectedItem(data[(startIndex - 1 + data.length) % data.length]);
      setFadeEffect(false);
    }, 300);
  };

  const getDisplayedItems = () => {
    let items = [];
    for (let i = 0; i < itemsPerPage; i++) {
      items.push(data[(startIndex + i) % data.length]);
    }
    return items;
  };

  return (
    <section className={styles.trendingproductss}>
      <div className="container container-lg">
        <div className=" p-24 ">
          {/* <div className={styles.navigations}>
            <button onClick={prevSlide} className={styles.navButton}>
              <FaChevronLeft />
            </button>
            <button onClick={nextSlide} className={styles.navButton}>
              <FaChevronRight />
            </button>
          </div> */}
          {/* <div className="text-center pb-40">
            <h2 className={styles.title}>Our Spaces</h2>
            <p className={styles.subtitle}>
              Explore our curated zones designed to enhance your beauty journey.
            </p>
          </div> */}

          <div className={`${styles.rowslide} row`}>
            <div
              className={`col-lg-7 col-md-12 ${isMobile ? "order-2 mt-4" : ""}`}
            >
              <div className={styles.cards}>
                <h1>
                  <em>
                    <i>{selectedItem.title}</i>
                  </em>
                </h1>
                <h6 className={styles.detailDescription}>
                  {selectedItem.description}
                </h6>
              </div>
              <div
                className={`d-flex h-100 align-items-center gap-1 flex-wrap justify-content-center ${
                  fadeEffect ? styles.fadeOut : styles.fadeIn
                }`}
              >
                {getDisplayedItems().map((item) => (
                  <div
                    key={item.key}
                    onClick={() => setSelectedItem(item)}
                    className={`${styles.card} ${
                      selectedItem.key === item.key ? styles.active : ""
                    }`}
                  >
                    <h5 className={styles.cardtitle}>{item.title}</h5>
                    <div className={styles.imageDiv}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className={styles.cardImage}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`col-lg-5 col-md-12 ${isMobile ? "order-1" : ""}`}>
              <div>
                <div
                  className={`row ${
                    fadeEffect ? styles.fadeOut : styles.fadeIn
                  }`}
                >
                  <div
                    className={`${isMobile ? "col-12" : "col-lg-12 col-md-6"}`}
                  >
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className={`${styles.imageFull} w-100`}
                    />
                  </div>
                  {/* <div
                    className={`${
                      isMobile
                        ? "col-12 mt-3"
                        : "col-lg-5 col-md-6 d-flex align-items-end"
                    }`}
                  >
                    <div className={styles.cards}>
                      <h4>{selectedItem.title}</h4>
                      <p className={styles.detailDescription}>
                        {selectedItem.description}
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
