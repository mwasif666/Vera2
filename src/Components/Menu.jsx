import React from "react";
import styles from "../Styles/ServicesMenu.module.css";

import { Link } from "react-router-dom";

const ServicesMenu = () => {
  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-md-6 p-1">
          <Link to="/GentsServices" className={styles.cardLink}>
            <div
              className={styles.card}
              style={{
                backgroundImage: "url('/assets/images/Services/Gents.png')",
              }}
            >
              <div className={styles.overlay}>
                <h2 className={styles.text}>Gents Service Menu</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-6 p-1">
          <Link to="/LadiesServices" className={styles.cardLink}>
            <div
              className={styles.card}
              style={{
                backgroundImage: "url('/assets/images/Services/Ladies.png')",
              }}
            >
              <div className={styles.overlay}>
                <h2 className={styles.text}>Ladies Service Menu</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;
