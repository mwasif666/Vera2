import React from "react";
import styles from "../Styles/About.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} className={styles.ImageAbout}>
            <img src="/assets/images/Banners/about2.jpg" alt="" />
          </Col>
          <Col lg={6} className={styles.contentWrapper}>
            <h4 className={styles.title}>About Us</h4>

            <h1 className={styles.tagline}>
              We Believe Beauty is <br /> Personal and Limitless.
            </h1>

            <div className={styles.mission}>
              <p>
                Our mission is to create a space where everyone feels seen,
                heard, and celebrated. From precision haircuts to rejuvenating
                skin treatments, we tailor every service to reflect your
                individual style and confidence.
              </p>
            </div>

            <div className={styles.description}>
              <p>
                Whether you're redefining your look or simply refreshing it, our
                expert team is here to guide you with care, creativity, and
                skill. Vera is more than a salon—it's a community built on
                self-expression, inclusivity, and good vibes only.
              </p>
            </div>

            <p className={styles.closing}>
              <em>Step into Vera, and step into your best self.</em>
            </p>

            <Button
              variant="outline-dark"
              size="lg"
              className={styles.ctaButton}
            >
              See Menu
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
