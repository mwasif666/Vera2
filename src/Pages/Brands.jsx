import React from "react";
import styles from "../Styles/Brands.module.css";

const Brands = () => {
  const images = [
    "https://1000logos.net/wp-content/uploads/2020/08/OPI_logo_PNG1.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkop4sxldcolb-WAGEJ1oWpw7MfjB_8JvFg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1D-iOQP4JZ4FNwyg2bhbzBUXyD1yx_Y_bRA&s",
    "https://1000logos.net/wp-content/uploads/2020/08/OPI_logo_PNG1.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkop4sxldcolb-WAGEJ1oWpw7MfjB_8JvFg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1D-iOQP4JZ4FNwyg2bhbzBUXyD1yx_Y_bRA&s",
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
