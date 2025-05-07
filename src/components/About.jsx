import React from "react";
import search from "../image/search.svg";
import leaf from "../image/leaf.svg";
import boy from "../image/boy.svg";
import ston from "../image/ston.svg";
import facebook from "../image/facebook.svg";
import instagram from "../image/instagram.svg";
import linkedin from "../image/linkedin.svg";
import tiweter from "../image/tiweter.svg";
// import chrome from '../image/chrome.svg';
// import fire from '../image/fire.svg';
import Support from "./Support";
import arror from "../image/arror.svg";
import finder from "../image/finder.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <div className="mx-auto">
        <Navbar />
        <img src={leaf} alt="leav" className="top-15 absolute"></img>
      </div>
      <div className=" max-w-7xl mx-auto p-2">
        <div className="flex flex-col md:flex-row items-center  justify-between p-4  ">
          <div className="flex-1 flex flex-col items-start space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold">Product Finder</h1>
            <p className="text-gray-600 text-base md:text-lg">
              Find Exactly What You Need
              <br />
              Your Shortcut to the Right Choice
            </p>

            <div className="flex gap-4 flex-wrap">
              <div className="relative inline-flex items-center">
                <button className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-bold px-8 py-2 rounded-full shadow-md">
                  EXPLORE TOOL
                </button>
                <img
                  src={arror} // Replace with your arrow icon path
                  alt="Arrow Icon"
                  className="absolute right-[-10px] w-6 h-6"
                />
              </div>

              <div className="relative inline-flex items-center">
                <button className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-bold px-6 py-2 rounded-full shadow-md">
                  PRODUCT FINDER
                </button>
                <img
                  src={finder} // Replace with your search icon path
                  alt="Finder Icon"
                  className="absolute -top-1 -right-2 w-6 h-6 transition-transform duration-300 transform hover:scale-150"
                />
              </div>
            </div>

            <div className="mt-4">
              <button className="bg-gray-100  text-gray-500 px-6 uppercase py-2 rounded-lg mr-2">
                Login / Register
              </button>
              <br></br>
              <button className="text-red-700 ml-[20%] mt-5 uppercase">
                Sign In
              </button>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center mt-8 md:mt-0 left-[12%] bottom-6 ">
            {/* Illustration */}
            <img
              src={search}
              alt="Product Finder Illustration "
              className="w-64 mr-[35%] top-[10%] md:w-96 absolute "
            />
            <img
              src={ston}
              alt="Product Finder Illustration"
              className="w-64 md:w-96"
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
              src={boy}
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
              <img src={facebook} alt="Facebook" className="" />
            </a>
            <a href="#" className="">
              <img src={tiweter} alt="Twitter" className="" />
            </a>
            <a href="#" className="">
              <img src={linkedin} alt="LinkedIn" className="" />
            </a>
            <a href="#" className="">
              <img src={instagram} alt="LinkedIn" className="" />
            </a>
          </div>
        </section>
      </div>
      <Support />
      <Footer />
    </>
  );
}
