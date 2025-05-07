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

function Categories() {
  return (
    <>
      <div className="mx-auto">
        
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

          {/* Right Illustration Section */}
          <div className="flex-1 relative flex justify-center mt-8 md:mt-0">
            <img
              src={setting}
              alt="Setting Illustration"
              className="w-64 md:w-96 absolute top-[10%] left-[10%] hidden md:block"
            />
            <img
              src={ston}
              alt="Ston Illustration"
              className="w-64 md:w-96 hidden md:block"
            />
          </div>
        </div>

        <MiscTools />
        <Support />
      </div>

      <Footer />
    </>
  );
}

export default Categories;
