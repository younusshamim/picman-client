import React from "react";
import AboutSection from "../../shared/AboutSection";
import Banner from "./Banner";
import Featured from "./Featured";
import Services from "./Services";

const Home = () => {
  document.title = "Home | Picman";

  return (
    <div>
      <Banner />
      <Services />
      <AboutSection />
      <Featured />
    </div>
  );
};

export default Home;
