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
import Gallery from "./Gaallery";
import Headings from "./Headings";

const HomePage = () => {
  return (
    <div>
      <HomeVideo />
      <Headings />
      <Services />
      <ProductPage />
      <Brands />
      <About />
      <TeamSection />
      <Gallery />
      {/* <MasonryGallery /> */}
      <TestimonialSection />
      <WhyVera />
      <BlogPost />
    </div>
  );
};

export default HomePage;
