// import explore from "../image/explore.svg";
// import finder from "../image/finder.svg";
// import Contact from "../image/contact.svg";
// import Support from "./Support";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// // import bg from "../image/bg.svg";
// import { Link } from "react-router-dom";
// import setting from "../image/setting.svg";
// import ston from "../image/ston.svg";
// import Oval2 from "../image/Oval2.svg"

// const ContactSection = () => {
//   return (
//     <>
//       <div className="relative ">
//         {/* Background Image - Hidden on mobile/tablet, visible on lg screens */}
//         <div className="absolute hidden lg:block left-80 top-0 bottom-120 inset-0 overflow-hidden z-0 lg:left-0 2xl:right-100 ">
//           <img src={Oval2 || "/placeholder.svg"} alt="Background" className="w-150 h-auto object-cover " />
//         </div>
//         <div
//           className="absolute inset-0 w-140 left-280 top-[-50px] hidden lg:block md:left-150 lg:left-115 xl:left-230 2xl:left-280 "
//           style={{ zIndex: 1 }}
//         >
//           <img
//             src={ston || "/placehol der.svg"}
//             alt="Background Shape"
//             className="w-full h-auto object-cover"
//           />
//         </div>
//         <Navbar />
//         <div className="relative z-10 max-w-7xl mx-auto p-2 ">
//           {/* Top Contact Section */}
//           <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:py-8  ">
//             {/* Text Content */}
//             <div className="max-w-xl space-y-6 mt-10">
//               <h1 className="text-4xl font-david font-bold text-[#14143B]">
//                 Contact us
//               </h1>
//               <p className="text-gray-500">
//                 You can contact via email for your issues related with 10015.io.
//                 You can give feedback about current tools or suggest new tools
//                 that you want to see on 10015 Tools.
//               </p>

//               {/* Buttons */}
//               <div className="flex gap-4 flex-wrap">
//                 <div className="relative inline-flex items-center  ">
//                   <button className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-bold px-8 py-2 rounded-full shadow-md ">
//                     EXPLORE TOOL
//                   </button>
//                   {/* Icon hidden on mobile/tablet, visible on lg screens */}
//                   <img
//                     src={explore || "/placeholder.svg"}
//                     alt="Arrow Icon"
//                     className="absolute right-[-10px] w-6 h-6 "
//                   />
//                 </div>

//                 <div className="relative inline-flex items-center">
//                   <button className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-bold px-6 py-2 rounded-full shadow-md">
//                     PRODUCT FINDER
//                   </button>
//                   {/* Icon hidden on mobile/tablet, visible on lg screens */}
//                   <img
//                     src={finder || "/placeholder.svg"}
//                     alt="Finder Icon"
//                     className="absolute -top-1 -right-2 w-6 h-6 transition-transform duration-300 transform hover:scale-150 "
//                   />
//                 </div>
//               </div>

//               {/* Login/Register */}
//               <div className="space-y-2 items-center justify-center mx-auto flex flex-col lg:flex-col gap-4">
//                 <Link to="/Signup">
//                   <button className="bg-gray-100 px-6 py-2 rounded-full text-gray-600 font-medium mr-42 cursor-pointer">
//                     Login / Register
//                   </button>
//                 </Link>
//                 <Link to="/Login">
//                   <button className="text-red-600 font-semibold hover:underline mr-42 cursor-pointer uppercase">
//                     Sign In
//                   </button>
//                 </Link>
//               </div>

//             </div>

//             {/* Image */}
//             {/* <div className="mt-10 lg:mt-0">
//               <img src={Contact || "/placeholder.svg"} alt="Phone Illustration" className="w-80 max-w-full hidden lg:block" />
//             </div> */}
//             <div className="flex-1 relative flex justify-center mt-8 md:mt-0 left-[7%] bottom-6 ">
//               {/* Illustration */}
//               <img
//                 src={Contact}
//                 alt="Product Finder Illustration "
//                 className="w-64 mr-[35%] top-[10%] md:w-96 relative  hidden lg:block"
//               />
//               {/* <img
//                 src={ston}
//                 alt="Product Finder Illustration"
//                 className="w-64 md:w-96  hidden lg:block"
//               /> */}
//             </div>
//           </div>

//           <Support />
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default ContactSection;

import explore from "../image/explore.svg";
import finder from "../image/finder.svg";
import Contact from "../image/contact.svg";
import Support from "./Support";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ston from "../image/ston.svg";
import Oval2 from "../image/Oval2.svg";
import leaf1 from "../image/leaf1.svg";

const ContactSection = () => {
  return (
    <>
      <div className="relative ">
        {/* Background Image - Hidden on mobile/tablet, visible on lg screens */}
        <div className="absolute hidden lg:block left-80 top-0 bottom-120 inset-0 overflow-hidden z-0 lg:left-0 2xl:right-100 ">
          <img
            src={Oval2 || "/placeholder.svg"}
            alt="Background"
            className="w-150 h-auto object-cover "
          />
          <img
            src={leaf1 || "/placeholder.svg"}
            alt="leav"
            className="top-15 absolute hidden lg:block"
          />
        </div>
        <div
          className="absolute inset-0 w-140 left-280 top-[-50px] hidden lg:block md:left-150 lg:left-115 xl:left-230 2xl:left-280"
          style={{ zIndex: 1 }}
        >
          <img
            src={ston || "/placehol der.svg"}
            alt="Background Shape"
            className="w-full h-auto object-cover"
          />
        </div>
        <Navbar />
        <div className=" max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="py-12 flex flex-col lg:flex-row items-center justify-between relative z-10 ">
            <div className="flex-1 text-center lg:text-left space-y-6 max-w-xl mx-auto lg:mx-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Contact us
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">
                You can contact via email for your issues related with 10015.io.
                You can give feedback about current tools or suggest new tools
                that you want to see on 10015 Tools.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                <div className="relative inline-flex items-center">
                  <button className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-bold px-6 sm:px-8 py-2 rounded-full shadow-md whitespace-nowrap">
                    EXPLORE TOOL
                  </button>
                  <img
                    src={explore}
                    alt="Arrow Icon"
                    className="absolute right-[-10px] w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
                <div className="relative inline-flex items-center">
                  <button className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-bold px-6 py-2 rounded-full shadow-md whitespace-nowrap">
                    PRODUCT FINDER
                  </button>
                  <img
                    src={finder}
                    alt="Finder Icon"
                    className="absolute -top-1 -right-2 w-5 h-5 sm:w-6 sm:h-6 hover:scale-150 transition-transform"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 mt-10 max-w-md mx-auto lg:mx-0">
                <div className="flex flex-col items-center space-y-3 md:mx-auto lg:mx-25">
                  <Link to="/Signup">
                    <button className="bg-gray-100 px-8 py-2 rounded-full text-gray-600 font-semibold shadow-md whitespace-nowrap cursor-pointer">
                      LOGIN / REGISTER
                    </button>
                  </Link>
                  <Link to="/Signup">
                    <button className="text-red-600 font-semibold cursor-pointer hover:underline select-none">
                      SIGN IN
                    </button>
                  </Link>
                </div>

                {/* <div className="text-center ">
                  <p className="text-sm text-gray-500 mb-2 max-w-xs mx-auto sm:mx-0">
                    Get the extension and access all tools with just one click
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-12 bg-gray-300" />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png"
                      alt="Chrome"
                      className="w-6 h-6"
                    />
                    <img src={firefox} alt="Firefox" className="w-6 h-6" />
                    <div className="h-px w-12 bg-gray-300" />
                  </div>
                </div> */}
              </div>
            </div>

            <div className="flex-1 flex justify-center max-w-md w-full">
              <img
                src={Contact}
                alt="Illustration"
                className="hidden lg:block w-full max-w-xs sm:max-w-sm md:max-w-md"
              />
            </div>
          </div>
          <Support />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactSection;
