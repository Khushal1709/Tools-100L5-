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

import Cssclippathgenerator from "./CSStools1/Cssclippathgenerator";
import CSSbackgroundpattern from "./CSStools1/CSSbackgroundpattern";
import Cssloader from "./CSStools1/Cssloader";
import Csscubic from "./CSStools1/Csscubic";
import Cssglassmorphism from "./CSStools1/Cssglassmorphism";
import CSStrianglegenerator from "./CSStools1/CSStrianglegenerator";
import Borderradiusgenerator from "./CSStools1/Borderradiusgenerator";
import Csstextglitch from "./CSStools1/Csstextglitch";
import Cssgradientgenerator from "./CSStools1/Cssgradientgenerator";
import Cssboxshadowgenerator from "./CSStools1/Cssboxshadowgenerator";
import Opengraphmetagenerator from "./Socialmedia1/Opengraphmetagenerator";
import Vimeothumbnailgrabber from "./Socialmedia1/Vimeothumbnailgrabber";
import Youtubethumbnailgrabber from "./Socialmedia1/Youtubethumbnailgrabber";
import Twitteradrevenuegenerator from "./Socialmedia1/Twitteradrevenuegenerator";
import Temp from "./Socialmedia1/Temp";








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
        
          {/* CSS TOOLS */}
          <Route path="/Cssclippathgenerator" element={<Cssclippathgenerator />} />
          <Route path="/Cssloader" element={<Cssloader />} />
          <Route path="/CSSbackgroundpattern" element={<CSSbackgroundpattern />} />
          <Route path="/Csscubic" element={<Csscubic />} />
          <Route path="/Cssglassmorphism" element={<Cssglassmorphism />} />
          <Route path="/Csstextglitch" element={<Csstextglitch />} />
          <Route path="/Cssgradientgenerator" element={<Cssgradientgenerator />} />
          <Route path="/CSStrianglegenerator" element={<CSStrianglegenerator />} />
          <Route path="/Cssboxshadowgenerator" element={<Cssboxshadowgenerator />} />
          <Route path="/Borderradiusgenerator" element={<Borderradiusgenerator />} />


          {/* Social Media section */}
          <Route path="/Opengraphmetagenerator" element={<Opengraphmetagenerator />} />
          <Route path="/Vimeothumbnailgrabber" element={<Vimeothumbnailgrabber />} />
          <Route path="/Youtubethumbnailgrabber" element={<Youtubethumbnailgrabber />} />
          <Route path="/Twitteradrevenuegenerator" element={<Twitteradrevenuegenerator />} />
          <Route path="/Temp" element={<Temp />} />







          
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;

