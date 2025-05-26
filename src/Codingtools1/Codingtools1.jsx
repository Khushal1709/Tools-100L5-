// import React from 'react'
// import arrowIcon from "../image/arrowIcon.svg";
// import arrowIcon2 from "../image/arrowIcon2.svg";
// import whishlist from "../image/whishlist.svg"; // wishlist icon
// import whishlist2 from "../image/whishlist2.svg";// wishlist icon
// import icon1 from "../image/icon1.svg";
// import icon2 from "../image/icon2.svg";
// import icon3 from "../image/icon3.svg";
// import icon4 from "../image/icon4.svg";
// import icon5 from "../image/icon5.svg";
// import icon6 from "../image/icon6.svg";
// import icon7 from "../image/icon7.svg";
// import icon8 from "../image/icon8.svg";
// function Codingtools1() {

//     const tools = [
//         {
//           title: "Image Cropper",
//           description: "Crop unwanted parts of images and download desired part of the image as a new file",
//           icon: icon1,
//         },
//         {
//           title: "Image Filters",
//           description: "Apply different filters to images and change color balance and distribution of the image",
//           icon: icon2,
//         },
//         {
//           title: "Image Resizer",
//           description: "Resize any image to desired width and height either by protecting aspect ratio or not",
//           icon: icon3,
//         },
//         {
//           title: "Image Average Color Finder",
//           description: "Calculate average and dominant color of an image by ignoring transparency",
//           icon: icon4,
//         },
//         {
//           title: "Image Color Extractor",
//           description: "Extract all colors from an image and get color codes and details of this colors as a list",
//           icon: icon3,
//         },
//         {
//           title: "Image Color Picker",
//           description: "Pick any color from an image with an eyedropper and get detailed info about the color you picked",
//           icon: icon6,
//         },
//         {
//           title: "SVG Blob Generator",
//           description: "Generate random SVG blobs with desired complexity and get SVG as code or file",
//           icon: icon1,
//         },
//         {
//           title: "SVG Pattern Generator",
//           description: "Generate SVG patterns with different shapes and download it as SVG or an image file",
//           icon: icon2,
//         },
//         {
//           title: "Photo Censor",
//           description: "Censor photos and hide faces by pixelating/blurring them or by putting a black bar",
//           icon: icon1,
//         },
//         {
//           title: "SVG To PNG Converter",
//           description: "Convert any SVG file into PNG format image and scale it to desired size by preserving aspect ratio",
//           icon: icon2,
//         },
//         {
//           title: "Image To Base64 Converter",
//           description: "Convert images into Base64 string for different image formats like PNG, JPEG, GIF, SVG",
//           icon: icon3,
//         },
//         {
//           title: "Image Caption Generator",
//           description: "Generate instant image captions powered by AI (Artificial Intelligence) analysis",
//           icon: icon4,
//         },
//         {
//             title: "Image Color Extractor",
//             description: "Extract all colors from an image and get color codes and details of this colors as a list",
//             icon: icon5,
//           },
//           {
//             title: "Image Color Picker",
//             description: "Pick any color from an image with an eyedropper and get detailed info about the color you picked",
//             icon: icon6,
//           },
//           {
//             title: "SVG Blob Generator",
//             description: "Generate random SVG blobs with desired complexity and get SVG as code or file",
//             icon: icon7,
//           },
//           {
//             title: "SVG Pattern Generator",
//             description: "Generate SVG patterns with different shapes and download it as SVG or an image file",
//             icon: icon8,
//           },
//           {
//             title: "Photo Censor",
//             description: "Censor photos and hide faces by pixelating/blurring them or by putting a black bar",
//             icon: icon1,
//           },
//           {
//             title: "SVG To PNG Converter",
//             description: "Convert any SVG file into PNG format image and scale it to desired size by preserving aspect ratio",
//             icon: icon2,
//           },
//           {
//             title: "Image To Base64 Converter",
//             description: "Convert images into Base64 string for different image formats like PNG, JPEG, GIF, SVG",
//             icon: icon3,
//           },
//           {
//             title: "Image Caption Generator",
//             description: "Generate instant image captions powered by AI (Artificial Intelligence) analysis",
//             icon: icon4,
//           }
//       ];
//   return (
//     <div>

//         <div className="py-10 px-4 md:px-10 max-w-7xl mx-auto">
//                           <h2 style={{fontFamily:"David Libre"}} className="text-2xl md:text-4xl font-semibold text-center text-[#1F2B56] mb-2">
//                           Coding Tools
//                           </h2>
//                           <p className="text-center text-gray-500 mb-10">
//                             Smart Tools. Simple Solutions.
//                           </p>
                    
//                           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                             {tools.map((tool, index) => (
//                               <div
//                                 key={index}
//                                 className="relative rounded-2xl shadow-md cursor-pointer  p-6 bg-[#F6F5F8]  flex flex-col justify-between transition-all duration-300"
//                               >
//                                 {/* Wishlist Icon */}
//                                 <div className="group raltive">
//                                 <img
//                                   src={whishlist}
//                                   alt="Wishlist"
//                                   className="absolute top-4 right-4 w-5 h-5 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
//                                 />
//                                  <img
//                                   src={whishlist2}
//                                   alt="Wishlist"
//                                   className="absolute top-4 right-4 w-5 h-5 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
//                                 />
//                                 </div>
                    
//                                 {/* Tool Icon with background */}
//                                 <div className="rounded-md flex items-center justify-center mb-4">
//                                   <img src={tool.icon} alt="Tool Icon" className="w-auto h-16" />
//                                 </div>
                    
//                                 {/* Title */}
//                                 <h3 className="text-base font-semibold text-[#1F2B56] mb-2 break-words">
//                                   {tool.title}
//                                 </h3>
                    
//                                 {/* Description */}
//                                 <p className="text-sm text-gray-600  mb-8">
//                                   {tool.description}
//                                 </p>
                    
//                                 {/* Arrow Button */}
//                                 <div className="group absolute bottom-5.5 right-1">
//                                   <div className="relative w-28 h-10 flex items-center justify-center bg-gray-100 rounded-full z-0">
//                                     <img
//                                       src={arrowIcon}
//                                       alt="Arrow"
//                                       className="absolute inset-0 m-auto transition-opacity duration-300 opacity-100 group-hover:opacity-0"
//                                     />
//                                     <img
//                                       src={arrowIcon2}
//                                       alt="Arrow"
//                                       className="absolute inset-0 m-auto transition-opacity duration-500 opacity-0 group-hover:opacity-100 "
//                                     />
//                                   </div>
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//     </div>
//   )
// }

// export default Codingtools1





import arrowIcon from "../image/arrowIcon.svg";
import arrowIcon2 from "../image/arrowIcon2.svg";
import whishlist from "../image/whishlist.svg"; // wishlist icon
import whishlist2 from "../image/whishlist2.svg";// wishlist icon
import { RiCodeBlock } from "react-icons/ri";
import { FaLink } from "react-icons/fa";
import { PiFileHtmlBold } from "react-icons/pi";
import { FaReact } from "react-icons/fa6";
import { PiDatabaseBold } from "react-icons/pi";
import { TbHtml } from "react-icons/tb";
// import { PiFileHtmlBold } from "react-icons/pi";
import { ImHtmlFive2 } from "react-icons/im";
import { PiFileCssLight } from "react-icons/pi";
import { PiFileJsxBold } from "react-icons/pi";
import { LiaHtml5 } from "react-icons/lia";
import { SiCsswizardry } from "react-icons/si";
// import { PiFileJsxBold } from "react-icons/pi";

function Codingtools1() {

  const tools = [
    {
      title: "Code to Image Converter",
      description: "Convert your codes to fancy images and share with your friends or colleagues",
      icon: <RiCodeBlock className='w-[200px] h-[60px] text-indigo-400'/>,
    },
    {
      title: " URL Slug Generator",
      description: "Generate SEO-friendly slugs from titles or any other strings for your webpages or blog posts",
      icon: <FaLink className='w-[200px] h-[60px] text-indigo-400' />,
    },
    {
      title: "React Native Shadow Generator",
      description: "Generate fancy box shadows in React Native both for iOS and Android",
      icon: <FaReact className='w-[200px] h-[60px] text-indigo-400' />,
    },
    {
      title: "Base64 Encoder/Decoder",
      description: "Encode your strings to Base64 or decode strings encoded with Base64",
      icon: <PiDatabaseBold className='w-[200px] h-[60px] text-indigo-400' />,
    },
    {
      title: "HTML Encoder/Decoder",
      description: "Encode or decode your HTML by replacing special characters into equivalent escape forms",
      icon: <TbHtml className='w-[200px] h-[60px] text-indigo-400' />,
    },
    {
      title: "URL Encoder/Decoder",
      description: "Encode your URL by escaping characters that may break your navigation and decode it ",
      icon: <PiFileHtmlBold className='w-[200px] h-[60px] text-indigo-400' />,
    },
    {
      title: "HTML Minifier",
      description: "Minify your HTML code and copy the minified code to your clipboard or download as .html file",
      icon: <ImHtmlFive2 className='w-[200px] h-[60px] text-indigo-400' />,
    },
    {
      title: "CSS Minifier",
      description: "Minify your CSS code and copy the minified code to your clipboard or download as style.min.css file",
      icon: <PiFileCssLight className='w-[200px] h-[60px] text-indigo-400' />,
    },
    {
      title: "JavaScript Minifier",
      description: "Minify your JavaScript code and copy the minified code to your clipboard or download as .min.js file",
      icon: <PiFileJsxBold className='w-[200px] h-[60px] text-indigo-400' />,
    },
    {
      title: "HTML Formatter",
      description: "Format your HTML code with HTML beautifier and either copy the formatted HTML or download it",
      icon: <LiaHtml5 className='w-[200px] h-[60px] text-indigo-400' />,
    },
    {
      title: "Css Formatter",
      description: "Format your CSS code and copy the beautified code to your clipboard or download as style.css file",
      icon: <SiCsswizardry className='w-[200px] h-[60px] text-indigo-400' />,
    },
    {
      title: "JavaScript Formatter",
      description: "Format/beautify your JavaScript code and copy the formatted code to your clipboard or download as a file",
      icon: <PiFileJsxBold className='w-[200px] h-[60px] text-indigo-400' />,
    },

  ];
  return (
    <div>

      <div className="py-10 px-4 md:px-10 max-w-7xl mx-auto">
        <h2 style={{ fontFamily: "David Libre" }} className="text-2xl md:text-4xl font-semibold text-center text-[#1F2B56] mb-2">
          Coding Tools
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Smart Tools. Simple Solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="relative rounded-2xl shadow-md cursor-pointer  p-6 bg-[#F6F5F8]  flex flex-col justify-between transition-all duration-300"
            >
              {/* Wishlist Icon */}
              <div className="group raltive">
                <img
                  src={whishlist}
                  alt="Wishlist"
                  className="absolute top-4 right-4 w-5 h-5 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
                <img
                  src={whishlist2}
                  alt="Wishlist"
                  className="absolute top-4 right-4 w-5 h-5 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>

              {/* Tool Icon with background */}
              <div className="rounded-md flex items-center justify-center mb-4">
                {/* <img src={tool.icon} alt="Tool Icon" className="w-auto h-16" /> */}
                <div alt="Tool Icon" className="">{tool.icon} </div>
              </div>


              {/* Title */}
              <h3 className="text-center font-semibold text-[#1F2B56] mb-2 break-words">
                {tool.title}
              </h3>

              {/* Description */}
              <p className="text-center text-gray-600  mb-8">
                {tool.description}
              </p>

              {/* Arrow Button */}
              <div className="group absolute bottom-5.5 right-1">
                <div className="relative w-28 h-10 flex items-center justify-center bg-gray-100 rounded-full z-0">
                  <img
                    src={arrowIcon}
                    alt="Arrow"
                    className="absolute inset-0 m-auto transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src={arrowIcon2}
                    alt="Arrow"
                    className="absolute inset-0 m-auto transition-opacity duration-500 opacity-0 group-hover:opacity-100 "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Codingtools1