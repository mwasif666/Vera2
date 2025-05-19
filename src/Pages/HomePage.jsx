import React from "react";
import About from "./About";

import HomeVideo from "../Components/HomeVIdeo";
import Services from "./Services";
import WhyVera from "./WhyChoose";
import TestimonialSection from "./Testimonial";
import TeamSection from "./Team";
import ProductPage from "../Components/Product";
import BlogPost from "./Blog";

const HomePage = () => {
  return (
    <div>
      <HomeVideo />
      <About />
      <Services />
      <WhyVera />
      <TestimonialSection />
      <TeamSection />
      <ProductPage />
      <BlogPost />
    </div>
  );
};

export default HomePage;
