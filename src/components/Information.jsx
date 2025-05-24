// import { Link } from "react-router-dom";

// function Information({
//   title,
//   description,
//   buttonText,
//   buttonText1,
//   buttonText2,
//   srcImg,
//   srcImg1,
// }) {
//   return (
//     <>
//       <div className=" max-w-7xl mx-auto p-2">
//         <div className="flex flex-col md:flex-row items-center  justify-between p-4  ">
//           <div className="flex-1 flex flex-col items-start space-y-6">
//             {/* <h1 style={{fontFamily:"David Libre"}}  className="lg:text-5xl md:text-4xl   font-bold">Online Social Media <br></br>Tools For Free</h1> */}
//             <h1
//               style={{ fontFamily: "David Libre" }}
//               className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-semibold"
//             >
//               {title}
//             </h1>
//             <p className="text-gray-600 text-justify">{description}</p>
//             <div className="flex  flex-cols gap-20   flex-wrap">
//               <div className="relative inline-flex items-center">
//                 <button className="cursor-pointer bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-bold px-8 py-2 rounded-full shadow-md">
//                   {buttonText}
//                 </button>
//                 <img
//                   src={srcImg} // Replace with your arrow icon path
//                   alt="Arrow Icon"
//                   className="absolute right-[-10px] w-6 h-6"
//                 />
//               </div>

//               <div className="mt-4 relative">
//                 {/* <button className="bg-gray-100 cursor-pointer text-gray-500 px-6 uppercase py-2 rounded-lg mr-2 ">
//                   {buttonText1}
//                 </button> */}
//                 <Link to="/Signup">
//                   <button className="bg-gray-100 px-8 py-2 rounded-full text-gray-600 font-semibold shadow-md whitespace-nowrap cursor-pointer">
//                     {buttonText1}
//                   </button>
//                 </Link>
//                 <br></br>

//                 <Link to="/Login">
//                   <button className="text-red-600 font-semibold ml-[30%] mt-5 cursor-pointer hover:underline select-none">
//                     {buttonText2}
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="flex-1 relative flex justify-center mt-8 md:mt-0 left-[12%] bottom-6 ">
//             {/* Illustration */}
//             <img
//               src={srcImg1}
//               alt="Product Finder Illustration "
//               className="w-64 mr-[35%] top-[10%] md:w-96 relative hidden lg:block"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Information;









import { Link } from "react-router-dom";

function Information({
  title,
  description,
  buttonText,
  buttonText1,
  buttonText2,
  srcImg,
  srcImg1,
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-10 gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 w-full text-center lg:text-left space-y-6 max-w-xl mx-auto lg:mx-0">
          <h1
            style={{ fontFamily: "David Libre" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
          >
            {title}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg text-justify">
            {description}
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4">
            <div className="relative inline-flex items-center">
              <button className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-bold px-6 sm:px-8 py-2 rounded-full shadow-md whitespace-nowrap">
                {buttonText}
              </button>
              <img
                src={srcImg}
                alt="Arrow Icon"
                className="absolute right-[-10px] w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
            <Link to="/Signup">
              <button className="relative bg-gray-100 px-8 py-2 rounded-full text-gray-600 font-semibold shadow-md whitespace-nowrap cursor-pointer">
                {buttonText1}
              </button>
            </Link>
          </div>
          {/* Login Button */}
          <div className="flex justify-center lg:justify-center">
            <Link to="/Login">
              <button className="text-red-600 font-semibold mt-2 cursor-pointer hover:underline select-none ">
                {buttonText2}
              </button>
            </Link>
          </div>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <img
            src={srcImg1}
            alt="Product Finder Illustration"
            className="w-48 sm:w-64 md:w-80 lg:w-96 hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}

export default Information;
