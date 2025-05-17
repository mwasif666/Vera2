import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Team.css";

const images = [
  {
    url: "/assets/images/team/founder.png",
    title: "Naureen Nawaz",
    subtitle: "FOUNDER & CEO",
  },
  {
    url: "/assets/images/team/2.png",
    title: "Naureen Nawaz",
    subtitle: "FOUNDER & CEO",
  },
  {
    url: "/assets/images/team/3.png",
    title: "Naureen Nawaz",
    subtitle: "FOUNDER & CEO",
  },
  {
    url: "/assets/images/team/4.png",
    title: "Naureen Nawaz",
    subtitle: "FOUNDER & CEO",
  },
  {
    url: "/assets/images/team/5.png",
    title: "Naureen Nawaz",
    subtitle: "FOUNDER & CEO",
  },
];

const Slider2 = () => {
  const [clickedIndex, setClickedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      images.forEach((_, i) => {
        gsap.to(`.item-${i}`, {
          width: i === clickedIndex ? "40vw" : "20vw",
          duration: 2,
          ease: "elastic(1, .6)",
        });

        gsap.to(`.item-title-${i}`, {
          opacity: i === clickedIndex ? 1 : 0,
          fontSize: i === clickedIndex ? "2rem" : "1rem",
          duration: 0.5,
        });

        gsap.to(`.item-subtitle-${i}`, {
          opacity: i === clickedIndex ? 1 : 0,
          duration: 0.5,
          delay: 0.3,
        });
      });
    }
  }, [clickedIndex, isMobile]);

  const expand = (index) => {
    if (!isMobile && index !== clickedIndex) {
      setClickedIndex(index);
    }
  };

  return (
    <div className="slider-container">
      <div className="container-fluid text-slide2">
        <div className="row">
          <div className="col-md-7 p-0">
            <div className="image-up">
              <img src="/assets/images/team/up.png" alt="" />
            </div>
          </div>
          <div className="col-md-5 p-0 team-up">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <h2>Discover Our Services</h2>
              <button>Menu</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1" style={{ height: "100vh" }}>
            <h2 className="vertical">Meet The Team</h2>
          </div>
          <div className="col-md-11 teams-section">
            {isMobile ? (
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2,
                  slideShadows: false,
                }}
                pagination={true}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="swiper-slide-content"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url(${image.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="item-content">
                        <div className="item-title">{image.title}</div>
                        <div className="item-subtitle">{image.subtitle}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="group">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`item item-${index} ${
                      index !== clickedIndex ? "not-selected" : ""
                    }`}
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url(${image.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                      backgroundRepeat: "no-repeat",
                      border: "1px solid grey",
                    }}
                    onClick={() => expand(index)}
                  >
                    {index !== clickedIndex && (
                      <div className="white-overlay"></div>
                    )}
                    <div className="item-content">
                      <div className={`item-title item-title-${index}`}>
                        {image.title}
                        {image.subtitle && (
                          <div
                            className={`item-subtitle item-subtitle-${index}`}
                          >
                            {image.subtitle.split("\n").map((line, i) => (
                              <div key={i}>{line}</div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
