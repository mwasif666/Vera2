import React from "react";
import styles from "../Styles/Products.module.css";

const Product = () => {
  return (
    <>
      <section className={styles.ProductSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className={styles.conentfirst}>
                <div className="row d-flex align-items-center w-100">
                  <div className="col-lg-6 ">
                    <span className={styles.secSubtitle}>Vera Products</span>
                  </div>
                </div>
              </div>
              <div className={styles.contentsecond}>
                <h1>Your Everyday Essentials,</h1>
              </div>
              <div>
                <button
                  className={`btn btn-outline-dark btn-lg text-white ${styles.priceListBtn2}`}
                >
                  Explore More
                </button>
              </div>
              <div className={`${styles.imagesProducts} row`}>
                <div className="col-md-4 mb-4">
                  <img
                    src="/assets/images/Products/1.png"
                    width="100%"
                    alt=""
                  />
                </div>
                <div className="col-md-4 mb-4">
                  <img
                    src="/assets/images/Products/2.png"
                    width="100%"
                    alt=""
                  />
                </div>
                <div className="col-md-4 mb-4">
                  <img
                    src="/assets/images/Products/3.png"
                    width="100%"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <img
                src="/assets/images/Products/banner.jpg"
                width="100%"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
