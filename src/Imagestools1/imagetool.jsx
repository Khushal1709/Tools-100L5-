import React from 'react'
import arror from "../image/arror.svg";
import fire from '../image/fire.svg';
// import images from '../image/images.svg';
import ston from '../image/ston.svg';
import Information from '../components/Information';
import Imagestools1 from './imagestools1';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




  

function Imagetool() {
  return (
    <>
    <Navbar/>
    <div>
  <div>
            
            <Information title="Online  Images  Tools For Free"  description="Looking for the best online image tools? Look no further than our collection of image tools here at 10015.io. From basic editing to complex effects, these tools will help you get the most out of your images." buttonText="EXPLORE TOOL" buttonText1="LOGIN / REGISTER"buttonText2="SIGN IN" srcImg={arror} srcImg1={fire} srcImg2={ston}/>

                    {/* image grid section */}
                    
             <Imagestools1/>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Imagetool