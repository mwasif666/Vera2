import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Services.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [activeTab, setActiveTab] = useState("ladies");

  const ladiesServices = [
    {
      id: 1,
      title: "Thermal Bath",
      description: "Experience relaxation with our thermal bath treatments",
      icon: "assets/images/icons/5.png",
    },
    {
      id: 2,
      title: "Waxing",
      description: "Professional waxing services for smooth skin",
      icon: "assets/images/icons/9.png",
    },
    {
      id: 3,
      title: "Facials",
      description: "Rejuvenating facial treatments for radiant skin",
      icon: "assets/images/icons/3.png",
    },
    {
      id: 4,
      title: "Manicure",
      description: "Beautiful nails with our manicure services",
      icon: "assets/images/icons/6.png",
    },
    {
      id: 5,
      title: "Eye & Shadow",
      description: "Experience a metamorphosis from tension to tranquility",
      icon: "assets/images/icons/2.png",
    },
  ];

  const gentsServices = [
    {
      id: 1,
      title: "Sports Massage",
      description: "Recovery and performance enhancement massage",
      icon: "assets/images/icons/8.png",
    },
    {
      id: 2,
      title: "Haircut",
      description: "Professional haircuts and styling",
      icon: "assets/images/icons/4.png",
    },
    {
      id: 3,
      title: "Shave",
      description: "Traditional wet shave experience",
      icon: "assets/images/icons/7.png",
    },
    {
      id: 4,
      title: "Beard Trim",
      description: "Precision beard trimming and shaping",
      icon: "assets/images/icons/1.png",
    },
    {
      id: 5,
      title: "Eye & Shadow",
      description: "Experience a metamorphosis from tension to tranquility",
      icon: "assets/images/icons/2.png",
    },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
    exit: { opacity: 0, x: 20 },
  };

  // Viewport configuration for repeat animations
  const viewportConfig = {
    once: false, // Animates every time element comes into view
    amount: 0.2, // Triggers when 20% of element is visible
    margin: "0px 0px -100px 0px", // Adjusts trigger point
  };

  return (
    <motion.section
      className={styles.space}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeIn}
    >
      <div className={`${styles.container} container`}>
        {/* Title Area */}
        <motion.div
          className="row justify-content-center text-center"
          variants={fadeUp}
          viewport={viewportConfig}
        >
          <div className="col-md-9 col-lg-7 col-xl-6">
            <div className={styles.titleArea}>
              <motion.span
                className={styles.secSubtitle}
                variants={fadeUp}
                viewport={viewportConfig}
              >
                Our Services
              </motion.span>
              <motion.h1
                className={styles.secTitle}
                variants={fadeUp}
                viewport={viewportConfig}
              >
                Your Style, Our Expertise
              </motion.h1>
            </div>
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          className={styles.tabsContainer}
          variants={fadeUp}
          viewport={viewportConfig}
        >
          <div className={styles.tabButtons}>
            <motion.button
              className={`${styles.tabButton} ${
                activeTab === "ladies" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("ladies")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeUp}
              viewport={viewportConfig}
            >
              For Ladies
            </motion.button>
            <motion.button
              className={`${styles.tabButton} ${
                activeTab === "gents" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("gents")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeUp}
              viewport={viewportConfig}
            >
              For Gents
            </motion.button>
          </div>
        </motion.div>

        {/* Services Content */}
        <div className={styles.serviceContentWrapper}>
          <AnimatePresence mode="wait">
            {/* Ladies Services */}
            {activeTab === "ladies" && (
              <motion.div
                key="ladies"
                className={styles.serviceSliderContainer}
                variants={slideIn}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={{
                    prevEl: ".ladies-prev",
                    nextEl: ".ladies-next",
                  }}
                  breakpoints={{
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 4 },
                  }}
                >
                  {ladiesServices.map((service, index) => (
                    <SwiperSlide key={`ladies-${service.id}`}>
                      <motion.div
                        className={styles.serviceStyle5}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        custom={index}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={styles.serviceIcon}>
                          <img src={service.icon} alt={service.title} />
                        </div>
                        <div className={styles.serviceContent}>
                          <h4 className={styles.serviceTitle}>
                            <a className={styles.textInherit} href="#">
                              {service.title}
                            </a>
                          </h4>
                          <p className={styles.serviceText}>
                            {service.description}
                          </p>
                        </div>
                        <a href="#" className={styles.serviceBtn}>
                          <i className="far fa-plus"></i>
                        </a>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className={styles.swiperNavigation}>
                  <button className={`${styles.swiperButtonPrev} ladies-prev`}>
                    <FaArrowLeftLong />
                  </button>
                  <button className={`${styles.swiperButtonNext} ladies-next`}>
                    <FaLongArrowAltRight />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Gents Services */}
            {activeTab === "gents" && (
              <motion.div
                key="gents"
                className={styles.serviceSliderContainer}
                variants={slideIn}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={{
                    prevEl: ".gents-prev",
                    nextEl: ".gents-next",
                  }}
                  breakpoints={{
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 4 },
                  }}
                >
                  {gentsServices.map((service, index) => (
                    <SwiperSlide key={`gents-${service.id}`}>
                      <motion.div
                        className={styles.serviceStyle5}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        custom={index}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={styles.serviceIcon}>
                          <img src={service.icon} alt={service.title} />
                        </div>
                        <div className={styles.serviceContent}>
                          <h4 className={styles.serviceTitle}>
                            <a className={styles.textInherit} href="#">
                              {service.title}
                            </a>
                          </h4>
                          <p className={styles.serviceText}>
                            {service.description}
                          </p>
                        </div>
                        <a href="#" className={styles.serviceBtn}>
                          <i className="far fa-plus"></i>
                        </a>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className={styles.swiperNavigation}>
                  <button className={`${styles.swiperButtonPrev} gents-prev`}>
                    <FaArrowLeftLong />
                  </button>
                  <button className={`${styles.swiperButtonNext} gents-next`}>
                    <FaLongArrowAltRight />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Price List Button */}
        <motion.div
          className="text-center mt-2"
          variants={fadeUp}
          viewport={viewportConfig}
        >
          <button
            className={`btn btn-outline-dark btn-lg ${styles.priceListBtn}`}
          >
            Price List
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
