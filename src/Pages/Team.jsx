import React from "react";
import styles from "../Styles/TeamSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TeamSection = () => {
  const teamData = [
    {
      name: "Naureen Nawaz",
      image: "/assets/images/team/founder.png",
      designation: "FOUNDER & CEO",
    },
    {
      name: "Alicia Regis",
      image: "/assets/images/team/2.png",
      designation: "FOUNDER & CEO",
    },
    {
      name: "Karl Finley",
      image: "/assets/images/team/3.png",
      designation: "FOUNDER & CEO",
    },
    {
      name: "Jenna Lopez",
      image: "/assets/images/team/4.png",
      designation: "FOUNDER & CEO",
    },
    {
      name: "Mark Rivera",
      image: "/assets/images/team/5.png",
      designation: "FOUNDER & CEO",
    },
  ];

  return (
    <div className={`container-fluid ${styles.sectionWrapper}`}>
      <div className="container">
        <div className="row">
          {/* Left Box */}
          <div className="col-lg-3 mb-4 mb-lg-0">
            <div className={`${styles.leftBox} p-4`}>
              <p className={styles.tagline}>JOIN THE TEAM</p>
              <h2 className={styles.heading}>
                Personalized
                <br />
                Coaching
              </h2>
              <p className={styles.description}>
                One-on-one sessions with our fitness and yoga experts, get
                personalized guidance and encouragement to reach your specific
                goals.
              </p>
              <button className={styles.viewMore}>View more</button>
            </div>
          </div>

          {/* Slider for Team Members */}
          <div className="col-lg-9">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              className={styles.swiperContainer}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
            >
              {teamData.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.card}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`img-fluid ${styles.image}`}
                    />
                    <div className={styles.cardFooter}>
                      <span>{member.name}</span>
                      <span>{member.designation}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
