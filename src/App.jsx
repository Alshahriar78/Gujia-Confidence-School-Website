import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SchoolNavbar from "./components/Navbar";
import Footer from "./components/Footer";

import AboutUs from "./pages/Public/AboutUs";
import Activities from "./pages/Public/Activities";
import Gallery from "./pages/Public/Gallery";
import ContactUs from "./pages/Public/ContactUs";
import Home from "./pages/Public/Home";
import Admission from "./pages/Public/Admission";
import Notice from "./components/Notice";

function App() {
  return (
    


    <Router>
      <SchoolNavbar />
      <Notice/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admissions" element={<Admission />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
