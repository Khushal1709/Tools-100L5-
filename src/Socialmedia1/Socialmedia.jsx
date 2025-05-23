import arror from "../image/arror.svg";
// import social from '../image/social.svg';
import ston from '../image/ston.svg';
import Socialmedia01 from './Socialmedia01';
import Information from "../components/Information";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";




function Socialmedia() {
    return (
        <>
    <Navbar/>
        <div>

            {/* image grid section */}
            <Information title="Online Socialmedia  Tools For Free" description="Looking for the best online social media tools to help you grow your online presence? Look no further than 10015.io. Our social media tools are designed to help you save time and engage with your audience easily. And best of all, they're free!" buttonText="EXPLORE TOOL" buttonText1="LOGIN / REGISTER" buttonText2="SIGN IN" srcImg={arror} srcImg1={arror} srcImg2={ston} />


            <Socialmedia01 />
        </div>
            <Footer/>

            </>
    )
}

export default Socialmedia