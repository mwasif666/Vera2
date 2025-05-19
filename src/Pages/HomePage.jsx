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
import MasonryGallery from "./GridStyle";

const HomePage = () => {
  return (
    <div>
      <HomeVideo />
      <Services />
      <ProductPage />
      <Brands />
      <About />
      <TeamSection />
      <MasonryGallery />
      <TestimonialSection />
      <WhyVera />
      <BlogPost />
    </div>
  );
};

export default HomePage;
