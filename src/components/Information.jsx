

function Information({
  title,
  description,
  buttonText,
  buttonText1,
  buttonText2,
  srcImg,
  srcImg1,
  srcImg2,
}) {
  return (
    <>
      <div className=" max-w-7xl mx-auto p-2">
        <div className="flex flex-col md:flex-row items-center  justify-between  bg-gradient-to-r from-white to-blue-50 p-4  ">
          <div className="flex-1 flex flex-col items-start space-y-6">
            {/* <h1 style={{fontFamily:"David Libre"}}  className="lg:text-5xl md:text-4xl   font-bold">Online Social Media <br></br>Tools For Free</h1> */}
            <h1
              style={{ fontFamily: "David Libre" }}
              className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-semibold"
            >
              {title}
            </h1>

            <p className="text-gray-600 text-base">{description}</p>
            <p className="text-gray-600 text-base">{description}</p>

            <div className="flex  flex-cols gap-20   flex-wrap">
              <div className="relative inline-flex items-center">
                <button className="cursor-pointer bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-bold px-8 py-2 rounded-full shadow-md">
                  {buttonText}
                </button>
                <img
                  src={srcImg} // Replace with your arrow icon path
                  alt="Arrow Icon"
                  className="absolute right-[-10px] w-6 h-6"
                />
              </div>

              <div className="mt-4">
                <button className="bg-gray-100 cursor-pointer text-gray-500 px-6 uppercase py-2 rounded-lg mr-2">
                  {buttonText1}
                </button>
                <br></br>
                <button className="cursor-pointer text-red-700 ml-[20%] mt-5 uppercase">
                  {buttonText2}
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center mt-8 md:mt-0 left-[12%] bottom-6 ">
            {/* Illustration */}
            <img
              src={srcImg1}
              alt="Product Finder Illustration "
              className="w-64 mr-[35%] top-[10%] md:w-96 absolute "
            />
            <img
              src={srcImg2}
              alt="Product Finder Illustration"
              className="w-64 md:w-96"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
