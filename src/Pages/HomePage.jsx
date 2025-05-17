import React from "react";
import HomeBanner from "../Components/HomeBanner";
import About from "./About";
import Team from "./Team";
import ContactForm from "./Contact";

import HomeVideo from "../Components/HomeVIdeo";
import Services from "./Services";

const HomePage = () => {
  return (
    <div>
      <HomeVideo />
      {/* <HomeBanner /> */}
      <About />
      <Services />
      <Team />
      <ContactForm />
    </div>
  );
};

export default HomePage;
