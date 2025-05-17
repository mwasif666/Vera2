import React from "react";
import styles from "../Styles/Products.module.css";

const ProductHead = () => {
  return (
    <section className={styles.Products} aria-label="About our company">
      <div>
        <h1>Our Products</h1>
        <h4>
          Vera’s exclusive line of skincare, body and haircare products, crafted
          with the finest ingredients to cater to your unique beauty needs. Our
          products are formulated to nourish, rejuvenate, and enhance your
          natural beauty, ensuring you look and feel your best every day.
        </h4>
      </div>
    </section>
  );
};

export default ProductHead;
