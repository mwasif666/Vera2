import React from "react";
import styles from "./WhyVera.module.css";

const WhyVera = () => {
  const features = [
    "Gender-Neutral Environment",
    "Skilled Stylists & Certified Therapists",
    "High-Quality Products",
    "Hygienic, Relaxing Space",
    "Personalized Consultations",
  ];

  return (
    <section className={`${styles.whyVera} py-5`}>
      <div className="container">
        <div className={`${styles.maindivvera} row align-items-center `}>
          {/* Image Column - takes full width on mobile, half on larger screens */}
          <div className="col-md-10 mb-4 mb-md-0">
            <div className={styles.imageWrapper}>
              <img
                src="/assets/images/Banners/5.jpg"
                alt="Vera Salon Interior"
                className={styles.Whyvera}
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="col-md-6">
            <div className={styles.contentWrapper}>
              <h2 className={`${styles.title} mb-4`}>Why Choosing Vera?</h2>
              <div className={styles.featuresList}>
                {features.map((feature, index) => (
                  <div key={index} className={` ${styles.featureItem}`}>
                    <span className={styles.featureText}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVera;
