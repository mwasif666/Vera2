import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Services.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

const Services = () => {
  const [activeTab, setActiveTab] = useState("ladies");

  const ladiesServices = [
    {
      id: 1,
      title: "Thermal Bath",
      description: "Experience relaxation with our thermal bath treatments",
      icon: "assets/images/icons/sr-7-1.svg",
    },
    {
      id: 2,
      title: "Waxing",
      description: "Professional waxing services for smooth skin",
      icon: "assets/images/icons/sr-7-2.svg",
    },
    {
      id: 3,
      title: "Facials",
      description: "Rejuvenating facial treatments for radiant skin",
      icon: "assets/images/icons/sr-7-3.svg",
    },
    {
      id: 4,
      title: "Manicure",
      description: "Beautiful nails with our manicure services",
      icon: "assets/images/icons/sr-7-4.svg",
    },
    {
      id: 5,
      title: "Eye & Shadow",
      description: "Experience a metamorphosis from tension to tranquility",
      icon: "assets/images/icons/sr-7-5.svg",
    },
  ];

  const gentsServices = [
    {
      id: 1,
      title: "Sports Massage",
      description: "Recovery and performance enhancement massage",
      icon: "assets/images/icons/sr-7-1.svg",
    },
    {
      id: 2,
      title: "Haircut",
      description: "Professional haircuts and styling",
      icon: "assets/images/icons/sr-7-2.svg",
    },
    {
      id: 3,
      title: "Shave",
      description: "Traditional wet shave experience",
      icon: "assets/images/icons/sr-7-3.svg",
    },
    {
      id: 4,
      title: "Beard Trim",
      description: "Precision beard trimming and shaping",
      icon: "assets/images/icons/sr-7-4.svg",
    },
    {
      id: 5,
      title: "Eye & Shadow",
      description: "Experience a metamorphosis from tension to tranquility",
      icon: "assets/images/icons/sr-7-5.svg",
    },
  ];

  return (
    <section className={styles.space}>
      <div className={`${styles.container} container`}>
        <div className="row justify-content-center text-center">
          <div className="col-md-9 col-lg-7 col-xl-6">
            <div className={styles.titleArea}>
              <span className={styles.secSubtitle}>Our Services</span>
              <h2 className={styles.secTitle}>Your Style, Our Expertise</h2>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabButtons}>
            <button
              className={`${styles.tabButton} ${
                activeTab === "ladies" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("ladies")}
            >
              For Ladies
            </button>
            <button
              className={`${styles.tabButton} ${
                activeTab === "gents" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("gents")}
            >
              For Gents
            </button>
          </div>
        </div>

        {/* Services Content */}
        <div className={styles.serviceContentWrapper}>
          {/* Ladies Services */}
          {activeTab === "ladies" && (
            <div className={styles.serviceSliderContainer}>
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  prevEl: ".ladies-prev",
                  nextEl: ".ladies-next",
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                }}
              >
                {ladiesServices.map((service) => (
                  <SwiperSlide key={`ladies-${service.id}`}>
                    <div className={styles.serviceStyle5}>
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
                    </div>
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
            </div>
          )}

          {/* Gents Services */}
          {activeTab === "gents" && (
            <div className={styles.serviceSliderContainer}>
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  prevEl: ".gents-prev",
                  nextEl: ".gents-next",
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                }}
              >
                {gentsServices.map((service) => (
                  <SwiperSlide key={`gents-${service.id}`}>
                    <div className={styles.serviceStyle5}>
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
                    </div>
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
            </div>
          )}
        </div>

        {/* Price List Button */}
        <div className="text-center mt-2">
          <button
            className={`btn btn-outline-dark btn-lg ${styles.priceListBtn}`}
          >
            Price List
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
