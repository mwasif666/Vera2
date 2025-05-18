import React from "react";
import HomeBanner from "../Components/HomeBanner";
import About from "./About";

import HomeVideo from "../Components/HomeVIdeo";
import Services from "./Services";
import WhyVera from "./WhyChoose";

const HomePage = () => {
  return (
    <div>
      <HomeVideo />
      {/* <HomeBanner /> */}
      <About />
      <Services />
      <WhyVera />
    </div>
  );
};

export default HomePage;
