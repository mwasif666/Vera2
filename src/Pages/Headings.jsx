import React from "react";
import styles from "../Styles/About.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Headings = () => {
  return (
    <div className={styles.aboutUs}>
      <Container>
        <Row className=" text-center justify-content-center">
          <Col lg={12} className={styles.contentWrapper}>
            <h1 className={styles.tagline2}>
              <em>Where Beauty Meets Precision.</em>
            </h1>

            <div className={styles.mission}>
              <h4>
                From flawless hair to radiant skin, we craft confidence every
                day.
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Headings;
