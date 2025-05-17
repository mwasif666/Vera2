import React from "react";
import styles from "../Styles/Banner.module.css"; // Import the CSS Module
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <Container fluid className="p-0">
      {/* First Section - Transformative Hair Service */}
      <Row className={`g-0 ${styles.section} ${styles.firstSection}`}>
        <Col md="12">
          <div
            className={`d-flex flex-column justify-content-center align-items-center ${styles.backimg1}`}
          >
            <h2 className={styles.sectionTitle}>Be Bold. Be Subtle. Be You</h2>
            <button className={styles.ctaButton}>BOOK NOW</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeBanner;
