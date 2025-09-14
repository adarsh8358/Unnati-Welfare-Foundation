import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Programs from "./pages/programs/Programs";
import Donate from "./pages/donate/Donate";
// Import other page components as needed

import { useEffect } from "react";
import { initScrollAnimations } from "./utils/scrollAnimations";


const App = () => {

    useEffect(() => {
    initScrollAnimations(); // Runs once after initial render
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/donate" element={<Donate />} />
          {/* Add other routes here */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
