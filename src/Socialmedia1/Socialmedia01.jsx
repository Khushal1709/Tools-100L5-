
import arrowIcon from "../image/arrowIcon.svg";
import arrowIcon2 from "../image/arrowIcon2.svg";
import whishlist from "../image/whishlist.svg"; // wishlist icon
import whishlist2 from "../image/whishlist2.svg"; // wishlist icon
import { MdMovieFilter } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";
import { FaTwitterSquare } from "react-icons/fa";
import { LuGitGraph } from "react-icons/lu";
import { IoLogoVimeo } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const tools = [
  {
    title: "Instagram Filters",
    description:
      "Apply instagram filters to you photos either by uploading local files or uploading image from a URL",
    icon: <MdMovieFilter className='w-[200px] h-[60px] text-indigo-400'/>,
  },
  {
    title: "Instagram Post Generator",
    description:
      "Create Instagram posts as if they were real, download them as an image and make jokes to your friends",
    icon: <MdPostAdd className='w-[200px] h-[60px] text-indigo-400'/>,
  },

  {
    title: "Tweet Generator",
    description:
      "Create tweets as if they were real, download them as an image and make jokes to your friends",
    icon: <FaTwitterSquare className='w-[200px] h-[60px] text-indigo-400'/>,
  },
  {
    title: "Twitter Ad Revenue Generator",
    description:
      "Generate Twitter ad revenue screenshots and make jokes to your friends",
    icon: <FaXTwitter className='w-[200px] h-[60px] text-indigo-400'/>,
  },
  {
    title: "YouTube Thumbnail Grabber",
    description:
      "Get all available thumbnail images of a YouTube videos just by entering the URL",
    icon: <FaYoutube className='w-[200px] h-[60px] text-indigo-400'/>,
  },
  {
    title: "Vimeo Thumbnail Grabber",
    description:
      "Get all available thumbnail images of a Vimeo videos just by entering the URL",
    icon: <IoLogoVimeo className='w-[200px] h-[60px] text-indigo-400'/>,
  },
  {
    title: "Open Graph Meta Generator",
    description:
      "Generate open graph meta code for your web page and add it to your site's head section",
    icon: <LuGitGraph className='w-[200px] h-[60px] text-indigo-400'/>,
  },
];


function Socialmedia01() {
  return (
    <div>
      <div className="py-10 px-4 md:px-10 max-w-7xl mx-auto">
        <h2 style={{ fontFamily: "David Libre" }} className="text-2xl md:text-4xl font-semibold text-center text-[#1F2B56] mb-2">
          Social Media Tools
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

export default Socialmedia01