import React, { useState, useRef, useEffect } from "react";
import { toPng } from "html-to-image";

// Wallpaper options
const WALLPAPER_OPTIONS = [
  {
    value: "abstract",
    label: "Abstract",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=64&q=80",
    style: {
      background: "linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)"
    },
  },
  {
    value: "feather",
    label: "Feather",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=64&q=80",
    style: {
      background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
  },
  {
    value: "mountain",
    label: "Mountain",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=facearea&w=64&q=80",
    style: {
      background: "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)"
    },
  },
  {
    value: "ocean",
    label: "Ocean",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=facearea&w=64&q=80",
    style: {
      background: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)"
    },
  },
  {
    value: "plant",
    label: "Plant",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=facearea&w=64&q=80",
    style: {
      background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
    },
  },
  {
    value: "silk",
    label: "Silk",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=facearea&w=64&q=80",
    style: {
      background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
    },
  },
];

const Twitteradrevenuegenerator = () => {
  const [wallpaperType, setWallpaperType] = useState("ready");
  const [selectedWallpaper, setSelectedWallpaper] = useState(WALLPAPER_OPTIONS[0].value);
  const [customWallpaper, setCustomWallpaper] = useState(null);
  const [formData, setFormData] = useState({
    carrier: "AT&T",
    revenue: "100.0"
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const phoneRef = useRef(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle file upload for custom wallpaper
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCustomWallpaper(e.target.result);
        setWallpaperType("custom");
        setDropdownOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  // Export the phone screen as an image
  const exportScreenshot = () => {
    if (phoneRef.current) {
      toPng(phoneRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'twitter-ad-revenue.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error('Error exporting screenshot:', err);
        });
    }
  };

  // Get the background style based on selected wallpaper
  const getWallpaperStyle = () => {
    if (wallpaperType === "custom" && customWallpaper) {
      return {
        backgroundImage: `url(${customWallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
    }
    const found = WALLPAPER_OPTIONS.find(opt => opt.value === selectedWallpaper);
    return found ? found.style : {};
  };

  // For accessibility: close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    const handleClick = () => setDropdownOpen(false);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [dropdownOpen]);

  return (
    <div className="max-w-5xl mx-auto py-6 px-2 sm:px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-2">
        <div className="flex items-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500 mr-2" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
          <h1 className="text-xl font-bold">Twitter Ad Revenue Generator</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center space-x-1 px-4 py-1.5 border rounded-full text-gray-600 hover:bg-gray-100">
            <span>Share</span>
          </button>
          <button className="flex items-center space-x-1 px-4 py-1.5 border rounded-full text-gray-600 hover:bg-gray-100">
            <span>Add to Favs</span>
          </button>
          <button className="flex items-center space-x-1 px-4 py-1.5 border rounded-full text-gray-600 hover:bg-gray-100">
            <span>Report Bug</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Phone preview */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div
            ref={phoneRef}
            className="relative border-2 border-gray-300 rounded-3xl
              h-[65vw] max-h-[600px] w-[90vw] max-w-[320px] min-w-[180px] overflow-hidden
              bg-white shadow-md"
            style={{ aspectRatio: "1/2" }}
          >
            {/* Wallpaper */}
            <div
              className="absolute inset-0 w-full h-full transition-all"
              style={getWallpaperStyle()}
            >
              {/* Status bar */}
              <div className="p-2 flex justify-between items-center text-white">
                <span className="font-semibold">{formData.carrier}</span>
                <div className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
              </div>
              {/* Notification */}
              <div className="absolute top-1/3 left-0 right-0 mx-4">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <div className="bg-black rounded-md p-1 w-10 h-10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">You got paid!</div>
                      <div className="text-sm">${formData.revenue} has been deposited into your account.</div>
                      <div className="text-xs text-gray-500 mt-1">9m ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Config panel */}
        <div className="w-full md:w-2/3">
          <h2 className="text-lg font-semibold mb-4">Wallpaper</h2>
          <div className="flex flex-col sm:flex-row items-center mb-6 gap-2">
            <div className="w-full">
              {/* Custom Dropdown */}
              <div className="relative z-10">
                <button
                  type="button"
                  className="w-full p-2.5 border border-gray-300 rounded-md bg-white flex items-center justify-between focus:outline-none"
                  onClick={e => {
                    e.stopPropagation();
                    setDropdownOpen(!dropdownOpen);
                  }}
                  aria-haspopup="listbox"
                  aria-expanded={dropdownOpen}
                >
                  <span className="flex items-center">
                    <img
                      src={WALLPAPER_OPTIONS.find(opt => opt.value === selectedWallpaper).img}
                      alt=""
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    {WALLPAPER_OPTIONS.find(opt => opt.value === selectedWallpaper).label}
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-72 overflow-y-auto">
                    {WALLPAPER_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        className={`flex items-center w-full px-4 py-2 transition ${
                          selectedWallpaper === option.value
                            ? "bg-indigo-600 text-white font-bold"
                            : "hover:bg-indigo-50"
                        }`}
                        onClick={e => {
                          e.stopPropagation();
                          setSelectedWallpaper(option.value);
                          setWallpaperType("ready");
                          setDropdownOpen(false);
                        }}
                        tabIndex={0}
                        aria-selected={selectedWallpaper === option.value}
                        role="option"
                      >
                        <img src={option.img} alt="" className="w-6 h-6 rounded-full mr-2" />
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center mx-4">or</div>
            <div className="w-full">
              <label
                className={`flex items-center justify-center w-full p-2.5 border border-gray-300 rounded-md cursor-pointer ${wallpaperType === "custom" ? "bg-blue-50" : "bg-white"}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Click to upload</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                  tabIndex={-1}
                />
              </label>
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-4">Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Carrier
              </label>
              <input
                type="text"
                name="carrier"
                value={formData.carrier}
                onChange={handleInputChange}
                className="w-full p-2.5 border border-gray-300 rounded-md"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Revenue
              </label>
              <input
                type="text"
                name="revenue"
                value={formData.revenue}
                onChange={handleInputChange}
                className="w-full p-2.5 border border-gray-300 rounded-md"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="mt-6 text-xs text-gray-500">
            By using Twitter Ad Revenue Generator by 10015.io, you agree to our <a href="#" className="text-blue-500">Usage Policy</a>.
          </div>
        </div>
      </div>
      {/* Export button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={exportScreenshot}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-full flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export Screenshot
        </button>
      </div>
    </div>
  );
};

export default Twitteradrevenuegenerator;
