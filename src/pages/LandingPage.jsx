import React from "react";
import Navbar from "../../components/landing-page/Navbar";
import Home from "../../components/landing-page/Home";
import About from "../../components/landing-page/About";
import Contact from "../../components/landing-page/Contact";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;