import React from "react";
import About from "./About";

import HomeVideo from "../Components/HomeVIdeo";
import Services from "./Services";
import WhyVera from "./WhyChoose";
import TestimonialSection from "./Testimonial";
import TeamSection from "./Team";
import ProductPage from "../Components/Product";
import BlogPost from "./Blog";
import Brands from "./Brands";

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
      <Brands />
    </div>
  );
};

export default HomePage;
