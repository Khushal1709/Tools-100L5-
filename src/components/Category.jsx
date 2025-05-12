import React from "react";
import arror from "../image/arror.svg";
import leaf1 from "../image/leaf1.svg";
import setting from "../image/setting.svg";
import ston from "../image/ston.svg";
import MiscTools from "./MiscTools.jsx";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";
import Support from "./Support";
import Footer from "./Footer";
import search from "../image/search.svg";
import Oval2 from "../image/Oval2.svg";
function Categories() {
  return (
    <>
      <div className="mx-auto">
        <img
          src={Oval2 || "/placeholder.svg"}
          alt="Background"
          className="absolute w-150 h-auto object-cover "
        />
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
          src={leaf1}
          alt="leaf"
          className="top-15 absolute hidden md:flex"
        />
      </div>

      <div className="max-w-7xl mx-auto p-2">
        <div className="flex flex-col md:flex-row items-center justify-between p-4">
          {/* Left Section */}
          <div className="flex-1 flex flex-col items-start space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold">
              Miscellaneous Tools
            </h1>
            <p className="text-gray-600 text-base md:text-lg">
              A growing collection of free online tools to help you work smarter{" "}
              <br />
              which are not categorized under main tool categories
            </p>

            {/* Buttons Group */}
            <div className="flex items-center gap-10  flex-wrap">
              {/* EXPLORE TOOL BUTTON */}
              <div className="relative inline-flex items-center">
                <button className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-bold px-8 py-3 rounded-full shadow-md">
                  EXPLORE TOOL
                </button>
                <img
                  src={arror}
                  alt="Arrow Icon"
                  className="absolute right-[-18px] w-6 h-6"
                />
              </div>

              {/* LOGIN / REGISTER SECTION */}
              <div className="flex flex-col  items-center ">
                <Link to="/Signup">
                  <button className="bg-gray-100 text-gray-500 font-semibold uppercase px-8 py-3 rounded-full cursor-pointer">
                    Login / Register
                  </button>
                </Link>
                <Link to="/Login">
                  <button className="text-red-700 mt-3 uppercase font-semibold hover:underline cursor-pointer ">
                    Sign In
                  </button>
                </Link>
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

          {/* Right Illustration Section */}
        </div>

        <MiscTools />
        <Support />
      </div>

      <Footer />
    </>
  );
}

export default Categories;
