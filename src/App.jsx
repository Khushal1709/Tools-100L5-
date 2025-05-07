import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Support from "./components/Support";
import Contact from "./components/Contact";
import Category from "./components/Category";
import Productfinder from "./components/Productfinder";
import Productfinder1 from "./components/Productfinder1";
import About from "./components/About";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" element={<Footer />} /> */}
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Productfinder" element={<Productfinder />} />
          <Route path="/Productfinder1" element={<Productfinder1 />} />
          <Route path="/About" element={<About />} />


        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
