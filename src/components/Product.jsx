import Image from "next/image";
import { Link } from "react-router-dom";
import { Search, Home, ChevronDown, ArrowRight } from "lucide-react";

export default function ProductFinder() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-purple-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-0 bottom-0 opacity-10">
        <svg
          width="300"
          height="400"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10,90 Q30,70 50,90 T90,90"
            stroke="#888"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M10,70 Q30,50 50,70 T90,70"
            stroke="#888"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M10,50 Q30,30 50,50 T90,50"
            stroke="#888"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center mr-8">
            <div className="h-8 w-8 bg-indigo-600 rounded flex items-center justify-center mr-2">
              <span className="text-white font-bold">⬡</span>
            </div>
            <span className="text-2xl font-bold text-navy-900">10015</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <div className="bg-blue-100 p-2 rounded-full">
            <Search className="h-5 w-5 text-gray-600" />
          </div>
          <div className="bg-white p-2 rounded-full">
            <Home className="h-5 w-5 text-gray-600" />
          </div>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <div className="flex items-center">
            <Link href="#" className="text-gray-600 hover:text-gray-900 mr-1">
              Submit
            </Link>
            <span>+</span>
          </div>
          <div className="flex items-center">
            <Link href="#" className="text-gray-600 hover:text-gray-900 mr-1">
              Get Featured
            </Link>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="flex items-center">
            <Link href="#" className="text-gray-600 hover:text-gray-900 mr-1">
              Extensions
            </Link>
            <ChevronDown className="h-4 w-4" />
          </div>
          <button className="bg-navy-900 text-white px-6 py-2 rounded-full font-medium">
            CONTACT US
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="w-full md:w-1/2 pt-8">
            <h1 className="text-5xl font-bold text-navy-900 mb-4">
              Product Finder
            </h1>
            <p className="text-gray-600 mb-1">Find Exactly What You Need</p>
            <p className="text-gray-600 mb-8">
              Your Shortcut to the Right Choice
            </p>

            <div className="flex space-x-4 mb-8">
              <button className="bg-gradient-to-r from-blue-200 to-blue-300 px-6 py-3 rounded-full font-medium flex items-center">
                EXPLORE TOOL
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-gradient-to-r from-blue-200 to-blue-300 px-6 py-3 rounded-full font-medium relative">
                PRODUCT FINDER
                <div className="absolute -right-2 -top-2 h-6 w-6 bg-navy-900 rounded-full flex items-center justify-center">
                  <div className="h-2 w-2 bg-white rounded-full"></div>
                </div>
              </button>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 inline-block mb-6">
              <p className="text-gray-600">LOGIN / REGISTER</p>
            </div>

            <button className="block text-red-600 font-medium mb-12">
              SIGN IN
            </button>
          </div>

          {/* Right Section - Illustration */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-80 md:h-96">
              <div className="absolute right-0 top-0 w-64 h-64 md:w-80 md:h-80">
                <div className="relative w-full h-full">
                  {/* Magnifying glass */}
                  <div className="absolute w-full h-full">
                    <div className="relative w-full h-full">
                      <div className="absolute top-0 left-0 w-full h-full bg-blue-400 rounded-full opacity-20"></div>
                      <div className="absolute top-4 left-4 right-4 bottom-4 bg-blue-500 rounded-full shadow-lg"></div>
                      <div className="absolute top-8 left-8 right-8 bottom-8 bg-blue-600 rounded-full"></div>
                      <div className="absolute top-12 left-12 w-16 h-16 bg-blue-300 rounded-full"></div>
                      {/* Handle */}
                      <div className="absolute bottom-0 right-4 w-8 h-32 bg-gradient-to-b from-blue-300 to-yellow-400 rounded-full transform rotate-45"></div>
                    </div>
                  </div>
                  {/* Character */}
                  <div className="absolute bottom-10 left-0">
                    <Image
                      src="/placeholder.svg?height=150&width=100"
                      alt="Cartoon character waving"
                      width={100}
                      height={150}
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-600 text-sm mb-4">
              Get the extension and access all tools with just one click
            </p>

            <div className="flex items-center justify-center mb-4">
              <div className="border-t border-gray-300 w-24"></div>
              <div className="flex space-x-2 mx-4">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <span className="text-xs">C</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <span className="text-xs">F</span>
                </div>
              </div>
              <div className="border-t border-gray-300 w-24"></div>
            </div>
          </div>
        </div>

        {/* Submit Product Section */}
        <div className="bg-gray-50 rounded-3xl p-8 mt-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-8">
            Submit your product
          </h2>

          <div className="mb-6">
            <p className="font-medium mb-4">
              1. Please enter the webpage of your product*
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="URL of your Product"
                className="flex-grow p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-navy-900 text-white px-8 py-4 rounded-full font-medium">
                Submit
              </button>
            </div>
          </div>

          <p className="text-gray-500 text-sm">
            *Your site data will be fetched and used to fill out the submission
            form. Please review the fields.
          </p>
        </div>
      </main>
    </div>
  );
}
