import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Category from "./components/Category";
import Productfinder from "./components/Productfinder";
import Productfinder1 from "./components/Productfinder1";
import About from "./components/About";
import Home from "./components/Home";
import Submit from "./components/Submit";
import Getfeatured from "./components/Getfeatured";
// import Footer from "./components/Footer";
import Cssclippathgenerator from "./CSStools1/Cssclippathgenerator"
import Cssloader from "./CSStools1/Cssloader"


function App() {
  
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" element={<Footer />} /> */}
          <Route path="/" element={<Home />} /> 
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Productfinder" element={<Productfinder />} />
          <Route path="/Productfinder1" element={<Productfinder1 />} />
          <Route path="/About" element={<About />} />
          <Route path="/Submit" element={<Submit />} />
          <Route path="/Getfeatured" element={<Getfeatured />} />
          {/* Tools files  */}
          <Route path="/Cssclippathgenerator" element={<Cssclippathgenerator />} />
          <Route path="/Cssloader" element={<Cssloader />} />


        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
