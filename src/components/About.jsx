import search from "../image/search.svg";
import leaf1 from "../image/leaf1.svg";
import boy from "../image/boy.svg";
import ston from "../image/ston.svg";
import facebook from "../image/facebook.svg";
import instagram from "../image/instagram.svg";
import linkedin from "../image/linkedin.svg";
import tiweter from "../image/tiweter.svg";
import Support from "./Support";
import arror from "../image/arror.svg";
import finder from "../image/finder.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import firefox from "../image/firefox.svg";
import explore from "../image/explore.svg";
import { Link } from "react-router-dom";
import Oval2 from "../image/Oval2.svg";
import chrome from "../image/chrome.svg";

export default function About() {
  return (
    <>
      <div className="mx-auto">
        <div className="absolute hidden lg:block left-80 top-0 bottom-120 inset-0 overflow-hidden z-0 lg:left-0 2xl:right-100 ">
          <img
            src={Oval2 || "/placeholder.svg"}
            alt="Background"
            className="w-150 h-auto object-cover "
          />
        </div>
        <div
          className="absolute inset-0 w-140 left-280 top-[-50px] hidden lg:block md:left-150 lg:left-115 xl:left-230 2xl:left-280 "
          style={{ zIndex: -1 }}
        >
          <img
            src={ston || "/placeholder.svg"}
            alt="Background Shape"
            className="w-full h-auto object-cover"
          />
        </div>
        <Navbar />
        <img
          src={leaf1 || "/placeholder.svg"}
          alt="leav"
          className="top-15 absolute hidden lg:block"
        />
      </div>
      <div className=" max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="py-12 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-10">
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-xl mx-auto lg:mx-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Product Finder
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              Find Exactly What You Need <br /> Your Shortcut to the Right
              Choice
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
              <div className="flex flex-col items-center space-y-3">
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

              <div className="text-center ">
                <p className="text-sm text-gray-500 mb-2 max-w-xs mx-auto sm:mx-0">
                  Get the extension and access all tools with just one click
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-12 bg-gray-300" />
                  <a
                    href="https://chrome.google.com/webstore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <img
                      src={chrome || "/placeholder.svg"}
                      alt="Chrome"
                      className="w-6 h-6"
                    />
                  </a>
                  <a
                    href="https://chrome.google.com/webstore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <img
                      src={firefox || "/placeholder.svg"}
                      alt="Firefox"
                      className="w-6 h-6"
                    />
                  </a>
                  <div className="h-px w-12 bg-gray-300" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center max-w-md w-full">
            <img
              src={search}
              alt="Illustration"
              className="hidden lg:block w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#BAD9FF] p-2">
        <section className="max-w-7xl  mx-auto  px-4 py-10 items-center">
          {/* Subtitle */}
          <div className="flex flex-col items-center justify-center bg-[#bddafd] py-8 px-4 md:flex-row md:justify-center md:items-center">
            {/* Illustration */}
            <img
              src={boy || "/placeholder.svg"}
              alt="Boy Illustration"
              className="w-28 md:w-32 mb-4 md:mb-0 md:mr-8"
            />
            {/* Text Content */}
            <div
              style={{ fontFamily: "David Libre" }}
              className="flex flex-col items-center md:items-start"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#23274b] text-center md:text-left mb-2">
                ABOUT OUR
              </h2>
              <h2 className="text-4xl md:text-5xl ml-[10%] font-bold text-[#23274b] text-center md:text-left mb-2">
                PROECT
              </h2>
              <p className="text-gray-500 text-center md:text-left">
                Digitize your documents and save time with this smart and
                reliable tool.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-5xl w-full space-y-8 ">
            {/* What */}
            <div>
              <h3
                style={{ fontFamily: "David Libre" }}
                className="text-3xl font-bold text-[#23274b] mb-2"
              >
                What?
              </h3>
              <p className="text-gray-500 mb-4">
                10015.io is an online tool factory where you can get all tools
                you needed in one place. While serving different type of tools
                in different categories, it aims to perform this with a clean
                and beautiful user interface. Every tool is designed to solve a
                problem with minimum number of steps to save time of the users
                and decrease the complexity of the operation.
              </p>
              <p className="text-gray-500 ">
                10015.io has started to operate in 2020 and it will continue to
                grow with time by adding new tools each day.
              </p>
            </div>
            {/* Why */}
            <div>
              <h3
                style={{ fontFamily: "David Libre" }}
                className="text-3xl font-bold  mb-2"
              >
                Why?
              </h3>
              <p className="mb-4 text-[16px] text-gray-500 ">
                There are lots of sites on web which offers you online tools.
                Most of them focus on specific topics and they mostly have
                outdated designs which makes you think "Am I in 90's?". When you
                start to bookmark the tools you needed, the list becomes larger
                and larger in some point.
              </p>
              <p className="text-gray-500 ">
                10015 Tools solves all these problems. So, bookmark it and
                forget about all other tool sites.
              </p>
            </div>
            {/* Who */}
            <div>
              <h3
                style={{ fontFamily: "David Libre" }}
                className="text-3xl font-bold text-[#23274b] mb-2"
              >
                Who?
              </h3>
              <p className="text-gray-500 ">
                10015.io is designed and coded by Fatih Telis (me) as a side
                project. I am a frontend developer based in Istanbul, Turkey. I
                started this project to build a platform which will work as an
                all-in-one toolbox while I'm challenging myself to create tools
                which does many different things. Even though I'm not a
                professional designer, I'm doing my best to construct a simple,
                aesthetic and easy-to-use UI system. You can contact me via
                email or Twitter about anything.
              </p>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex space-x mt-10">
            <a href="#" className=" ">
              <img
                src={facebook || "/placeholder.svg"}
                alt="Facebook"
                className=""
              />
            </a>
            <a href="#" className="">
              <img
                src={tiweter || "/placeholder.svg"}
                alt="Twitter"
                className=""
              />
            </a>
            <a href="#" className="">
              <img
                src={linkedin || "/placeholder.svg"}
                alt="LinkedIn"
                className=""
              />
            </a>
            <a href="#" className="">
              <img
                src={instagram || "/placeholder.svg"}
                alt="LinkedIn"
                className=""
              />
            </a>
          </div>
        </section>
      </div>
      <Support />
      <Footer />
    </>
  );
}

// import React from "react";
// import search from "../image/search.svg";
// import leaf1 from "../image/leaf1.svg";
// import boy from "../image/boy.svg";
// import ston from "../image/ston.svg";
// import facebook from "../image/facebook.svg";
// import instagram from "../image/instagram.svg";
// import linkedin from "../image/linkedin.svg";
// import tiweter from "../image/tiweter.svg";
// // import chrome from '../image/chrome.svg';
// // import fire from '../image/fire.svg';
// import Support from "./Support";
// import arror from "../image/arror.svg";
// import finder from "../image/finder.svg";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// export default function About() {
//   return (
//     <>

//       <div className="mx-auto">

//       <Navbar />
//         <img src={leaf1} alt="leaf" className="top-15 absolute"></img>
//       </div>
//       <div className=" max-w-7xl mx-auto p-2">
//         <div className="flex flex-col md:flex-row items-center  justify-between  bg-gradient-to-r from-white to-blue-50 p-4  ">
//           <div className="flex-1 flex flex-col items-start space-y-6">
//             <h1 className="text-3xl md:text-5xl font-bold">Product Finder</h1>
//             <p className="text-gray-600 text-base md:text-lg">
//               Find Exactly What You Need
//               <br />
//               Your Shortcut to the Right Choice
//             </p>
//             {/* <div className="flex flex-col md:flex-row items-center gap-4">
//                             <button className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] px-6 py-3 rounded-full font-semibold transition w-full md:w-auto">
//                                 Explore Tool
//                             </button>
//                             <button className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] px-6 py-3 rounded-full font-semibold transition w-full md:w-auto">
//                                 Product Finder
//                             </button>
//                         </div> */}

//             <div className="flex gap-4 flex-wrap">
//               <div className="relative inline-flex items-center">
//                 <button className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-bold px-8 py-2 rounded-full shadow-md">
//                   EXPLORE TOOL
//                 </button>
//                 <img
//                   src={arror} // Replace with your arrow icon path
//                   alt="Arrow Icon"
//                   className="absolute right-[-10px] w-6 h-6"
//                 />
//               </div>

//               <div className="relative inline-flex items-center">
//                 <button className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-bold px-6 py-2 rounded-full shadow-md">
//                   PRODUCT FINDER
//                 </button>
//                 <img
//                   src={finder} // Replace with your search icon path
//                   alt="Finder Icon"
//                   className="absolute -top-1 -right-2 w-6 h-6 transition-transform duration-300 transform hover:scale-150"
//                 />
//               </div>
//             </div>

//             <div className="mt-4">
//               <button className="bg-gray-100  text-gray-500 px-6 uppercase py-2 rounded-lg mr-2">
//                 Login / Register
//               </button>
//               <br></br>
//               <button className="text-red-700 ml-[20%] mt-5 uppercase">
//                 Sign In
//               </button>
//             </div>
//           </div>

//           <div className="flex-1 relative flex justify-center mt-8 md:mt-0 left-[12%] bottom-6 ">
//             {/* Illustration */}
//             <img
//               src={search}
//               alt="Product Finder Illustration "
//               className="w-64 mr-[35%] top-[10%] md:w-96 absolute "
//             />
//             <img
//               src={ston}
//               alt="Product Finder Illustration"
//               className="w-64 md:w-96"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="bg-[#BAD9FF] p-2">
//         <section className="max-w-7xl  mx-auto  px-4 py-10 items-center">
//           {/* Illustration */}
//           {/* <div className='flex flex-cols'>
//                         <img
//                             src={boy}
//                             alt="Boy Illustration"
//                             className="w-28 md:w-32 mb-2"
//                         />
//                         <h2 className="text-4xl md:text-5xl ml-2 font-bold text-[#23274b] text-center mb-2">
//                             ABOUT OUR PROECT
//                         </h2>
//                         <p className="text-gray-500 text-center mb-8 ">
//                             Digitize your documents and save time with this smart and reliable tool.
//                         </p>

//                     </div> */}
//           {/* Subtitle */}
//           <div className="flex flex-col items-center justify-center bg-[#bddafd] py-8 px-4 md:flex-row md:justify-center md:items-center">
//             {/* Illustration */}
//             <img
//               src={boy}
//               alt="Boy Illustration"
//               className="w-28 md:w-32 mb-4 md:mb-0 md:mr-8"
//             />
//             {/* Text Content */}
//             <div
//               style={{ fontFamily: "David Libre" }}
//               className="flex flex-col items-center md:items-start"
//             >
//               <h2 className="text-4xl md:text-5xl font-bold text-[#23274b] text-center md:text-left mb-2">
//                 ABOUT OUR
//               </h2>
//               <h2 className="text-4xl md:text-5xl ml-[10%] font-bold text-[#23274b] text-center md:text-left mb-2">
//                 PROECT
//               </h2>
//               <p className="text-gray-500 text-center md:text-left">
//                 Digitize your documents and save time with this smart and
//                 reliable tool.
//               </p>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="max-w-5xl w-full space-y-8 ">
//             {/* What */}
//             <div>
//               <h3
//                 style={{ fontFamily: "David Libre" }}
//                 className="text-3xl font-bold text-[#23274b] mb-2"
//               >
//                 What?
//               </h3>
//               <p className="text-gray-500 mb-4">
//                 10015.io is an online tool factory where you can get all tools
//                 you needed in one place. While serving different type of tools
//                 in different categories, it aims to perform this with a clean
//                 and beautiful user interface. Every tool is designed to solve a
//                 problem with minimum number of steps to save time of the users
//                 and decrease the complexity of the operation.
//               </p>
//               <p className="text-gray-500 ">
//                 10015.io has started to operate in 2020 and it will continue to
//                 grow with time by adding new tools each day.
//               </p>
//             </div>
//             {/* Why */}
//             <div>
//               <h3
//                 style={{ fontFamily: "David Libre" }}
//                 className="text-3xl font-bold  mb-2"
//               >
//                 Why?
//               </h3>
//               <p className="mb-4 text-[16px] text-gray-500 ">
//                 There are lots of sites on web which offers you online tools.
//                 Most of them focus on specific topics and they mostly have
//                 outdated designs which makes you think "Am I in 90's?". When you
//                 start to bookmark the tools you needed, the list becomes larger
//                 and larger in some point.
//               </p>
//               <p className="text-gray-500 ">
//                 10015 Tools solves all these problems. So, bookmark it and
//                 forget about all other tool sites.
//               </p>
//             </div>
//             {/* Who */}
//             <div>
//               <h3
//                 style={{ fontFamily: "David Libre" }}
//                 className="text-3xl font-bold text-[#23274b] mb-2"
//               >
//                 Who?
//               </h3>
//               <p className="text-gray-500 ">
//                 10015.io is designed and coded by Fatih Telis (me) as a side
//                 project. I am a frontend developer based in Istanbul, Turkey. I
//                 started this project to build a platform which will work as an
//                 all-in-one toolbox while I'm challenging myself to create tools
//                 which does many different things. Even though I'm not a
//                 professional designer, I'm doing my best to construct a simple,
//                 aesthetic and easy-to-use UI system. You can contact me via
//                 email or Twitter about anything.
//               </p>
//             </div>
//           </div>
//           {/* Social Icons */}
//           <div className="flex space-x mt-10">
//             <a href="#" className=" ">
//               <img src={facebook} alt="Facebook" className="" />
//             </a>
//             <a href="#" className="">
//               <img src={tiweter} alt="Twitter" className="" />
//             </a>
//             <a href="#" className="">
//               <img src={linkedin} alt="LinkedIn" className="" />
//             </a>
//             <a href="#" className="">
//               <img src={instagram} alt="LinkedIn" className="" />
//             </a>
//           </div>
//         </section>
//       </div>
//       <Support />
//       <Footer />
//     </>
//   );
// }






// import React, { useRef, useState } from "react";
// import { toPng } from "html-to-image";
// import { saveAs } from "file-saver";
// import { MdMovieFilter } from "react-icons/md";
// import { FiShare2 } from "react-icons/fi";
// import { FiAlertCircle } from 'react-icons/fi';
// import {
//     FaCheck,
//     FaRegCopy,
//     FaFacebookF,
//     FaTwitter,
//     FaLinkedinIn,
//     FaEnvelope,
//     FaCopy,
//     FaRegStar,
// } from "react-icons/fa6";
// import { MdOutlineContentPaste, MdShare } from "react-icons/md";

// // Instagram-like filters using Tailwind filter utilities
// const FILTERS = [
//     { name: "Normal", className: "" },
//     { name: "Clarendon", className: "brightness-125 contrast-110 saturate-130" },
//     { name: "Gingham", className: "brightness-105 sepia" },
//     { name: "Moon", className: "grayscale brightness-110 contrast-110" },
//     { name: "Lark", className: "brightness-110 contrast-105 saturate-110" },
//     { name: "Reyes", className: "brightness-110 sepia contrast-95" },
//     { name: "Juno", className: "contrast-115 saturate-125" },
//     { name: "Slumber", className: "brightness-90 saturate-85" },
//     { name: "Crema", className: "brightness-105 contrast-95 sepia" },
//     { name: "Ludwig", className: "brightness-105 contrast-105 saturate-95" },
//     { name: "Aden", className: "brightness-115 contrast-90 saturate-125 hue-rotate-15" },
//     { name: "Perpetua", className: "brightness-105 contrast-110 saturate-110" },
// ];

// // Placeholder image for filter previews
// const PREVIEW_IMG =
//     "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80";

// export default function InstagramFilters() {

//     const [open, setOpen] = useState(false);
//     const [bugDescription, setBugDescription] = useState("");
//     const [shareOpen, setShareOpen] = useState(false);
//     const [activeTab, setActiveTab] = useState("tool");
//     const [isFavorite, setIsFavorite] = useState(false);

//     const onFavoriteToggle = () => setIsFavorite(!isFavorite);
//     const [imgSrc, setImgSrc] = useState(null);
//     const [urlInput, setUrlInput] = useState("");
//     const [active, setActive] = useState("Normal");
//     const dropRef = useRef(null);
//     const imageRef = useRef(null);

//     // Handle file upload
//     const handleFile = (file) => {
//         const reader = new FileReader();
//         reader.onload = (e) => setImgSrc(e.target.result);
//         reader.readAsDataURL(file);
//     };

//     // Handle drag and drop
//     const handleDrop = (e) => {
//         e.preventDefault();
//         if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//             handleFile(e.dataTransfer.files[0]);
//         }
//     };

//     // Handle image download
//     const handleDownload = async () => {
//         if (!imgSrc) return;
//         const dataUrl = await toPng(imageRef.current);
//         saveAs(dataUrl, "filtered-image.png");
//     };

//     // Handle URL upload
//     const handleUrlUpload = () => {
//         if (urlInput.trim()) setImgSrc(urlInput.trim());
//         setUrlInput("");
//     };

//     return (


//         <div className="max-w-4xl mx-auto p-3">
//             {/* Header */}
//             <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
//                 <div className="flex items-center gap-3 mb-2 sm:mb-0">
//                     <span className="text-4xl text-indigo-400">
//                         <MdMovieFilter />
//                     </span>
//                     <span className="text-2xl font-bold text-gray-900 md:text-sm lg:text-2xl sm:text-lg">
//                         Instagram&nbsp;Filters
//                     </span>
//                 </div>
//                 <div className="flex flex-col w-full md:flex-row md:justify-center md:items-center md:gap-4 lg:justify-end lg:gap-2">
//                     <button
//                         onClick={() => setShareOpen(true)}
//                         className="flex items-center justify-center md:w-auto px-3 py-2 text-sm rounded-xl border border-indigo-600 bg-indigo-50 text-indigo-600 mb-2 md:mb-0 cursor-pointer"
//                     >
//                         <FiShare2 className="mr-2" size={18} />
//                         Share
//                     </button>
//                     <button
//                         className="flex items-center justify-center gap-2 w-full md:w-auto px-3 py-2 text-sm rounded-xl border border-indigo-600 bg-indigo-50 text-indigo-600 cursor-pointer hover:bg-indigo-100 transition"
//                         onClick={() => setOpen(true)}
//                     >
//                         <FiAlertCircle className="text-indigo-600 text-base" />
//                         Report Bug
//                     </button>
//                     <button
//                         onClick={onFavoriteToggle}
//                         className={`px-3 py-2 rounded-xl border text-sm mt-2 md:mt-0 ml-0 cursor-pointer ${isFavorite
//                             ? "bg-indigo-100 border-indigo-600 text-indigo-700"
//                             : "bg-indigo-50  text-indigo-600"
//                             }`}
//                     >
//                         {isFavorite ? (
//                             <>
//                                 <FaCheck className="inline-block mr-1" size={12} /> Added
//                             </>
//                         ) : (
//                             <>
//                                 <FaRegStar className="inline-block mr-1" size={12} /> Add to
//                                 Favorites
//                             </>
//                         )}
//                     </button>
//                 </div>
//             </div>
//             {/* Share Popup */}
//             {shareOpen && (
//                 <div className="fixed inset-0 bg-black/30 z-50 flex justify-center items-center">
//                     <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full relative">
//                         <div className="flex justify-between mb-4 bg-indigo-50 p-1 rounded-xl">
//                             <button
//                                 onClick={() => setActiveTab("tool")}
//                                 className={`w-1/2 px-4 py-2 rounded-xl  text-sm ${activeTab === "tool"
//                                     ? "bg-indigo-600 text-white"
//                                     : "text-indigo-600 hover:bg-indigo-600 hover:text-white"
//                                     }`}
//                             >
//                                 ⚙️ Share Tool
//                             </button>
//                             <button
//                                 onClick={() => setActiveTab("home")}
//                                 className={`w-1/2 px-4 py-2 rounded-xl  text-sm ${activeTab === "home"
//                                     ? "bg-indigo-600 text-white"
//                                     : "text-indigo-600 hover:bg-indigo-600 hover:text-white"
//                                     }`}
//                             >
//                                 🏠 Share 10015
//                             </button>
//                         </div>
//                         <div className="text-center border border-gray-300 rounded-xl p-6">
//                             <p className="text-sm mb-1 text-gray-500">
//                                 You are currently sharing:
//                             </p>
//                             <h2 className="text-xl  mb-5 text-gray-600">
//                                 {activeTab === "tool"
//                                     ? "Google Fonts Pair Finder"
//                                     : "10015 Tools"}
//                             </h2>
//                             <div className="flex justify-center mb-6">
//                                 <MdShare className="text-indigo-500 text-7xl" />
//                             </div>
//                             <div className="flex justify-center gap-4">
//                                 {[FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaCopy].map(
//                                     (Icon, i) => (
//                                         <button
//                                             key={i}
//                                             className="text-white bg-indigo-500 rounded-full w-10 h-10 flex items-center justify-center"
//                                         >
//                                             <Icon />
//                                         </button>
//                                     )
//                                 )}
//                             </div>
//                         </div>
//                         <button
//                             className="absolute top-4 right-4 text-gray-600 text-lg"
//                             onClick={() => setShareOpen(false)}
//                         >
//                             ✕
//                         </button>
//                     </div>
//                 </div>
//             )}

//             {/* Bug Report Popup */}
//             {open && (
//                 <div className="fixed inset-0 bg-black/30 z-40 flex justify-center items-center">
//                     <div className="bg-white max-w-md w-full p-6 rounded-2xl shadow-lg relative">
//                         <h2 className="text-xl font-bold mb-2">Bug Report</h2>
//                         <p className="text-sm mb-4">
//                             <strong>Tool:</strong> Lorem Ipsum Generator
//                         </p>
//                         <label className="text-sm mb-1 block" htmlFor="bugDescription">
//                             Please describe the issue.
//                         </label>
//                         <textarea
//                             id="bugDescription"
//                             className="w-full p-3 border border-gray-300 rounded-xl text-base h-32 focus:outline-none focus:ring-2 focus:ring-indigo-300"
//                             placeholder="Description*"
//                             value={bugDescription}
//                             onChange={(e) => setBugDescription(e.target.value)}
//                         />
//                         <div className="flex justify-end gap-3 mt-4">
//                             <button
//                                 onClick={() => setOpen(false)}
//                                 className="px-4 py-2 bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-black rounded-lg"
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 onClick={() => {
//                                     if (!bugDescription.trim()) {
//                                         alert("Please enter a description.");
//                                         return;
//                                     }
//                                     console.log("Bug description submitted:", bugDescription);
//                                     setOpen(false);
//                                     setBugDescription("");
//                                 }}
//                                 className="px-4 py-2 bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-black rounded-lg"
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//             {/* Upload controls */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
//                 <label className="w-full">
//                     <input
//                         type="file"
//                         accept="image/*"
//                         className="hidden"
//                         onChange={(e) => e.target.files && handleFile(e.target.files[0])}
//                     />
//                     <span className="w-full block cursor-pointer py-2 rounded-md text-center  bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B]">
//                         <svg className="inline mr-2" width="18" height="18" fill="none" viewBox="0 0 24 24">
//                             <path stroke="#fff" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
//                         </svg>
//                         Upload File
//                     </span>
//                 </label>
//                 <div className="flex w-full">
//                     <input
//                         type="text"
//                         placeholder="Upload from URL"
//                         value={urlInput}
//                         onChange={(e) => setUrlInput(e.target.value)}
//                         className="flex-1 rounded-l-md border border-gray-300 px-3 py-2 focus:outline-none"
//                     />
//                     <button
//                         onClick={handleUrlUpload}
//                         className="px-4 py-2 bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] rounded-r-md  transition"
//                     >
//                         Upload from URL
//                     </button>
//                 </div>
//             </div>

//             {/* Drag and drop zone */}
//             <div
//                 ref={dropRef}
//                 onDrop={handleDrop}
//                 onDragOver={(e) => e.preventDefault()}
//                 className="w-full border-2 border-dashed border-gray-300 rounded-lg px-4 py-6 text-center mb-4 bg-white"
//                 style={{ minHeight: "80px" }}
//             >
//                 <div className="text-gray-500">
//                     <svg className="mx-auto mb-2" width="28" height="28" fill="none" viewBox="0 0 24 24">
//                         <path stroke="#bbb" strokeWidth="2" d="M12 16v-8m0 0l-4 4m4-4l4 4" />
//                     </svg>
//                     Drag your image here, or click to <span className="text-violet-600 font-medium cursor-pointer underline">browse</span>
//                 </div>
//             </div>

//             {/* Main preview area */}
//             <div className="w-full bg-white rounded-lg mb-4 flex items-center justify-center min-h-[160px]">
//                 {imgSrc ? (
//                     <div ref={imageRef} className="flex items-center justify-center w-full">
//                         <img
//                             src={imgSrc}
//                             alt="Preview"
//                             className={`max-h-64 max-w-full mx-auto rounded-md shadow ${FILTERS.find(f => f.name === active)?.className}`}
//                             style={{ objectFit: "contain" }}
//                         />
//                     </div>
//                 ) : (
//                     <div className="flex flex-col items-center justify-center w-full py-10 text-gray-400">
//                         <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
//                             <path stroke="#bbb" strokeWidth="2" d="M12 8v8m0 0l4-4m-4 4l-4-4" />
//                         </svg>
//                         <div className="mt-2 text-base text-center">Upload an image before starting to apply filters</div>
//                     </div>
//                 )}
//             </div>

//             {/* Filter thumbnails */}
//             <div className="w-full overflow-x-auto mb-4">
//                 <div className="flex gap-2 min-w-max">
//                     {FILTERS.map((filter) => (
//                         <button
//                             key={filter.name}
//                             onClick={() => setActive(filter.name)}
//                             className={`cursor-pointer flex flex-col items-center focus:outline-none ${active === filter.name ? "border-2 border-violet-500 rounded" : ""
//                                 }`}
//                         >
//                             <img
//                                 src={imgSrc || PREVIEW_IMG}
//                                 alt={filter.name}
//                                 className={`w-14 h-14 sm:w-16 sm:h-16 rounded object-cover mb-1 ${filter.className}`}
//                             />
//                             <span className={`text-xs ${active === filter.name ? "text-violet-700 font-bold" : "text-gray-500"}`}>{filter.name}</span>
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* Action buttons */}
//             <div className="flex flex-col sm:flex-row w-full gap-2 justify-between items-center">
//                 <button
//                     onClick={() => setActive("Normal")}
//                     className="w-full sm:w-auto cursor-pointer bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] px-6 py-2 rounded-full "
//                 >
//                     Reset
//                 </button>
//                 <button
//                     onClick={handleDownload}
//                     disabled={!imgSrc}
//                     className={`w-full sm:w-auto cursor-pointer bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] px-6 py-2 rounded-full  flex items-center gap-2 ${imgSrc
//                         ? ""
//                         : "bg-violet-100 text-gray-400 cursor-not-allowed"
//                         }`}
//                 >
//                     <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
//                         <path stroke="#fff" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
//                     </svg>
//                     Download
//                 </button>
//             </div>
//         </div>
//     );
// }
