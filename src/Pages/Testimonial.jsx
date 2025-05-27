import React from "react";
import styles from "../Styles/TestimonialSection.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const testimonials = [
  {
    text: "Vera isn’t just a salon—it’s a sanctuary. From the moment I walked in, I felt truly seen and heard. The team helped me find a style that finally feels like *me*.",
    name: "Ayesha Malik",
    role: "Client from Lahore",
    img: "https://s3.amazonaws.com/tfh-medias/_participantLg/avatar_200708_095602.jpg?mtime=20200708095552",
  },
  {
    text: "I came in for a haircut, but left with so much more—confidence, clarity, and connection. Their attention to detail and inclusive vibe is unmatched.",
    name: "Sarah Khan",
    role: "Regular Client",
    img: "https://i.pravatar.cc/100?img=5",
  },
  {
    text: "Every visit to Vera feels like coming home. The skin treatment I received was personalized and thoughtful, and I’ve never felt better in my own skin.",
    name: "Mariam Zafar",
    role: "Beauty Blogger",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcEdYYtLBFNLskBIohyCxqpFm8OBJX77clUbKtyqvAHThi7qyZ4vUCIAAK-9PsxXcvkXc&usqp=CAU",
  },
];

const TestimonialSection = () => {
  return (
    <div className={` ${styles.testimonialWrapper}`}>
      <div className="container">
        <div className={styles.titleArea}>
          <h1 className={styles.secTitle}>Testimonial</h1>
          <h5 className={styles.secSubtitle}>
            Every experience at Vera leaves a lasting impression.
          </h5>
        </div>

        <div className="row">
          {/* Left Side */}
          <div className={`col-md-6  ${styles.left}`}>
            <div className={styles.containertext}>
              <h1 className={styles.title}>
                {" "}
                What Our <br /> Customers <br /> Are Saying
              </h1>
            </div>
          </div>

          {/* Right Side - Swiper Slider */}
          <div className={`col-md-6 ${styles.right}`}>
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              slidesPerView={1}
              loop={true}
              className="h-100"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index} className={styles.slide}>
                  <div className={`text-center ${styles.slideContent}`}>
                    <h4 className="mb-4">{item.text}</h4>
                    <div className="d-flex justify-content-center mb-3">
                      {testimonials.map((t, i) => (
                        <img
                          key={i}
                          src={t.img}
                          className={`rounded-circle mx-2 ${styles.avatarDim} ${
                            i === index ? styles.active : ""
                          }`}
                          alt={t.name}
                        />
                      ))}
                    </div>
                    <strong>{item.name}</strong>
                    <p className="text-muted m-0">{item.role}</p>
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

export default TestimonialSection;
