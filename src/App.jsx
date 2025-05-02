import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Support from "./components/Support";
import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";



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




        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
