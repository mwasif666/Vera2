import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "../Styles/Blog.module.css";

// You can replace this with your actual image import
// import blogImage from './assets/beauty-water.jpg';
// Or use a placeholder image URL
const blogImage = "/assets/images/Banners/5.jpg";

const BlogPost = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <section className={styles.blogSection}>
      <div className="container">
        <h1 className="text-center w-100 mb-5">Our Blog</h1>
        <div className="row">
          <div className="col-md-6 my-auto">
            <div className={styles.blogCard} onClick={handleShow}>
              {/* Blog Image */}
              <img
                src="/assets/images/Banners/5.jpg"
                alt="Beauty and health through water"
                className={styles.blogImage}
              />

              <div className={styles.blogHeader2}>
                <h3 className={styles.blogSubtitle}>2/4/20 • Business</h3>
                <h2 className={styles.blogTitle}>Health by or through Water</h2>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`${styles.secBlog} row`}>
              <div className="col-md-12 mx-auto">
                <div className={styles.blogCard} onClick={handleShow}>
                  {/* Blog Image */}
                  <img
                    src="/assets/images/Banners/5.jpg"
                    alt="Beauty and health through water"
                    className={styles.blogImage}
                  />

                  <div className={styles.blogHeader}>
                    <h3 className={styles.blogSubtitle}>2/4/20 • Business</h3>
                    <h2 className={styles.blogTitle}>
                      Health by or through Water
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mx-auto">
                <div className={styles.blogCard} onClick={handleShow}>
                  {/* Blog Image */}
                  <img
                    src="/assets/images/Banners/5.jpg"
                    alt="Beauty and health through water"
                    className={styles.blogImage}
                  />

                  <div className={styles.blogHeader}>
                    <h3 className={styles.blogSubtitle}>2/4/20 • Business</h3>
                    <h2 className={styles.blogTitle}>
                      Health by or through Water
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for full blog content */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton className={styles.modalHeader}>
          <Modal.Title className={styles.modalTitle}>
            BEAUTY: HEALTH BY OR THROUGH WATER
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <img
            src={blogImage}
            alt="Beauty and health through water"
            className={styles.modalImage}
          />

          <div className={styles.fullContent}>
            <p>
              <strong>BY RODJAA | JANUARY 10, 2023</strong>
            </p>

            <p>
              We think your skin should look and feel its best no matter what.
              Nourish your outer inner beauty with our essential oil infused
              beauty products.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <p>Our products are specially formulated with:</p>
            <ul>
              <li>Natural essential oils for aromatic therapy</li>
              <li>Organic ingredients for maximum skin benefits</li>
              <li>Hydrating compounds to maintain moisture balance</li>
              <li>Antioxidants to protect against environmental damage</li>
            </ul>

            <p>
              Discover the transformative power of water-based beauty regimens
              that work in harmony with your skin's natural biology. Our
              products are cruelty-free and environmentally sustainable,
              ensuring you can feel good about what you put on your skin.
            </p>

            <p>
              Water has been used for centuries as a healing and beautifying
              element. From ancient Roman baths to modern hydrotherapy, the
              benefits of water for skin health are well documented. Our
              products harness this power in convenient, easy-to-use
              formulations.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default BlogPost;
