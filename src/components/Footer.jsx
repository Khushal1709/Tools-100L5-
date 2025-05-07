import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"
import leaf from "../image/leaf.svg";
import oval from "../image/oval.svg"
import flogo from "../image/flogo.svg"
import leaffooter from "../image/leaffooter.svg"
export default function Footer() {
  return (
    <footer className="relative pt-12 pb-6 overflow-hidden">
      {/* Decorative image at bottom left */}
      <div className="absolute bottom-0 left-0 w-[480px] h-auto pointer-events-none">
        <img
          src={oval || "/placeholder.svg"}
          /* You can replace this with another image if needed */
          alt="decorative"
          width={300}
          height={300}
          className="w-full h-full object-contain opacity-70"
        />
      </div>
      {/* Decorative background elements */}
      <div className="absolute top-20 h-70 opacity-8  pointer-events-none">
        <img
          src={leaffooter || "/placeholder.svg"}
          alt="leaf"
          width={400}
          height={400}
          className="w-full h-full object-contain"
        />

      </div>
      <div className="absolute top-10 right-0 w-[200px] h-full pointer-events-none">
        <img
          src={leaf || "/placeholder.svg"}
          alt="leaf"
          width={400}
          height={400}
          className="w-full h-full object-contain"
        />
        
      </div>

      <div className="max-w-7xl  mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div>
                <img
                  src={flogo || "/placeholder.svg"}
                  alt="Footer Logo"
                  className=" rounded flex items-center justify-center mr-2"
                />
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.{" "}
              <Link href="#" className="text-indigo-600 hover:underline">
                Learn more
              </Link>
            </p>

            {/* Social icons */}
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors"
              >
                <Facebook size={18} className="text-gray-700" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors"
              >
                <Instagram size={18} className="text-gray-700" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors"
              >
                <Twitter size={18} className="text-gray-700" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors"
              >
                <Linkedin size={18} className="text-gray-700" />
              </Link>
            </div>
          </div>

          {/* Know Us */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">
              <u>Know Us</u>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Tools */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">
              <u>Useful Tools</u>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Best AI Youtube Channels
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Top 100 AI
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  GPTs List
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Hubspot AI Tools
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Best AI Agents
                </Link>
              </li>
            </ul>
          </div>

          {/* Extensions */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">
              <u>Extensions</u>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Tutorials, tips and blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  AI Conferences Agenda
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  AI Glossary & Lexicon
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Explore AI Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">
              <u>Policies</u>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Privacy & Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          Copyright © 2022 prodesigner All rights Rcerved
        </div>
      </div>
    </footer>
  )
}


