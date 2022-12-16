import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/LandingPage/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Employees from "./pages/Employees.jsx";
import Admins from "./pages/Admins.jsx";

function App() {
  return (
    <div className="w-screen flex flex-col min-h-screen">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/admins" element={<Admins />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
