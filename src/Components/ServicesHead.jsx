import React from "react";
import styles from "../Styles/ServicesHead.module.css";

const ServicesHead = () => {
  return (
    <section className={styles.Products} aria-label="About our company">
      <div>
        <h1>Our Services</h1>
        <h4>
          Vera isn't just about services; it's about offering an experience to
          empower each client with personalised care that goes beyond the
          surface, addressing individual needs and concerns. As a one-stop
          destination for all things self care, Vera caters to every member of
          the family, making selfcare easy and accessible
        </h4>
      </div>
    </section>
  );
};

export default ServicesHead;
