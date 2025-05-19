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
                    <h2
                      style={{
                        paddingLeft: "120px",
                      }}
                    >
                      Vera Products
                    </h2>
                  </div>
                </div>
              </div>
              <div className={styles.contentsecond}>
                <h1
                  style={{
                    paddingLeft: "120px",
                  }}
                >
                  Your Everyday Essentials,
                </h1>
              </div>
              <div
                style={{
                  paddingLeft: "120px",
                }}
              >
                <button className={styles.ctaButton}>Explore More</button>
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
