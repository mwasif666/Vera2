import React from "react";
import styles from "../Styles/About.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

// Reusable animation variants
const scrollReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Headings = () => {
  return (
    <motion.div
      className={styles.aboutUs}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Set once:false for repeat animations
      variants={scrollReveal}
    >
      <Container>
        <Row className="text-center justify-content-center">
          <Col lg={12} className={styles.contentWrapper}>
            <motion.h1 className={styles.tagline2} variants={scrollReveal}>
              <em>Where Beauty Meets Precision.</em>
            </motion.h1>

            <motion.div
              className={styles.mission}
              variants={scrollReveal}
              transition={{ delay: 0.2 }} // Stagger effect
            >
              <h4>
                From flawless hair to radiant skin, we craft confidence every
                day.
              </h4>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Headings;
