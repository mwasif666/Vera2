import React from "react";
import styles from "../Styles/Brands.module.css";

const Brands = () => {
  const images = [
    "https://1000logos.net/wp-content/uploads/2020/08/OPI_logo_PNG1.png",
    "https://nashiargan.com/wp-content/uploads/sites/2/2024/03/body_logo.png",
    "/assets/images/logo/brand1.png",
    "https://1000logos.net/wp-content/uploads/2020/08/OPI_logo_PNG1.png",
    "https://nashiargan.com/wp-content/uploads/sites/2/2024/03/body_logo.png",
    "/assets/images/logo/brand1.png",
  ];

  return (
    <>
      <div className={styles.contentbrands}>
        <h1 className="text-center">
          Brands we work <em>with</em>
        </h1>
      </div>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          {[...images, ...images].map((src, i) => (
            <img src={src} alt={`img-${i}`} key={i} className={styles.image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Brands;
