import React from "react";
import Navbar from "../components/LandingPage/Navbar.jsx";
import Home from "../components/LandingPage/Home.jsx";
import Contact from "../components/LandingPage/Contact.jsx";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;