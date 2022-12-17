import React, { useState } from "react";
import Navbar from "../components/LandingPage/Navbar.jsx";
import Home from "../components/LandingPage/Home.jsx";
import Contact from "../components/LandingPage/Contact.jsx";
import OtpModal from "../components/LandingPage/OtpModal.jsx";

const LandingPage = () => {
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [employeeId, setEmployeeId] = useState("");

  return (
    <>
      <div>
        <Navbar />
        <div id="home">
          <Home employeeId={employeeId} setEmployeeId={setEmployeeId} showOtpModal={showOtpModal} setShowOtpModal={setShowOtpModal} />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>

      <OtpModal
        employeeId={employeeId}
        setEmployeeId={setEmployeeId}
        showOtpModal={showOtpModal}
        setShowOtpModal={setShowOtpModal}
      />
    </>
  );
};

export default LandingPage;