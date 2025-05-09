import React from 'react'
import icon1 from "../image/icon1.svg";
import icon2 from "../image/icon2.svg";
import icon3 from "../image/icon3.svg";
import icon4 from "../image/icon4.svg";
import arrowIcon from "../image/arrowIcon.svg";
import arrowIcon2 from "../image/arrowIcon2.svg";
import whishlist from "../image/whishlist.svg"; // wishlist icon
import whishlist2 from "../image/whishlist2.svg"; 

const tools = [
        {
          title: "AI Color Palette Generator",
          description: "Craft perfect color palettes effortlessly with AI-driven creativity.",
          icon: icon1,
        },
        {
          title: "HEX to RGBA Converter",
          description: "Convert HEX color codes to RGBA equivalents and see all details of a color",
          icon: icon2,
        },
        {
          title: "RGBA to HEX Converter",
          description: "Convert RGBA color codes to alpha supported 6 or 8 digit HEX equivalents",
          icon: icon3,
        },
        {
          title: "Color Shades Generator",
          description: "Get all shades of a color by setting up steps for darken, lighten, saturation and desaturation",
          icon: icon4,
        },
        {
          title: "Color Mixer",
          description: "Mix 2 colors and get color codes for intermediate colors from 2 to 10 steps",
          icon: icon3,
        },
      
      ];
function Colortool1() {
  return (
    <div>
 <div className="py-10 px-4 md:px-10 max-w-7xl mx-auto">
                          <h2 style={{fontFamily:"David Libre"}} className="text-2xl md:text-4xl font-semibold text-center text-[#1F2B56] mb-2">
                          Color Tools
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
                                  <img src={tool.icon} alt="Tool Icon" className="w-auto h-16" />
                                </div>
                    
                                {/* Title */}
                                <h3 className="text-base font-semibold text-[#1F2B56] mb-2 break-words">
                                  {tool.title}
                                </h3>
                    
                                {/* Description */}
                                <p className="text-sm text-gray-600  mb-8">
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

export default Colortool1