import React, { useState } from "react";

const Youtubethumbnailgrabber = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");

  // Extract YouTube video ID from URL
  const extractYoutubeId = (url) => {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  };

  // Handle URL input change
  const handleUrlChange = (e) => {
    const url = e.target.value;
    setYoutubeUrl(url);
    setVideoData(null);
    setError("");

    if (!url) return;

    // Extract video ID and fetch thumbnails if valid
    const videoId = extractYoutubeId(url);
    if (videoId) {
      setVideoData({
        id: videoId,
        thumbnails: [
          {
            label: "Maximum Resolution",
            size: "1280x720",
            url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
          },
          {
            label: "Standard Definition",
            size: "640x480",
            url: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
          },
          {
            label: "High Quality",
            size: "480x360",
            url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
          },
          {
            label: "Medium Quality",
            size: "320x180",
            url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
          },
          {
            label: "Default Thumbnail",
            size: "120x90",
            url: `https://img.youtube.com/vi/${videoId}/default.jpg`,
          },
        ],
      });
    } else {
      setError("Please enter a valid YouTube URL");
    }
  };

  // Download thumbnail image
  const handleDownload = async (url, label) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch image");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `youtube-thumbnail-${label
        .toLowerCase()
        .replace(/\s/g, "-")}.jpg`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      alert("Failed to download image. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-3">
          <div className="flex items-center w-full sm:w-auto">
            <div className="w-10 h-10 bg-red-600 rounded-md flex items-center justify-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </div>
            <h1 className="text-lg sm:text-xl font-medium text-gray-800">
              YouTube Thumbnail Grabber
            </h1>
          </div>
          <div className="flex flex-row gap-2 w-full sm:w-auto justify-end">
            <button className="flex items-center px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              Share
            </button>
            <button className="flex items-center px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Add to Favs
            </button>
            <button className="flex items-center px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Report Bug
            </button>
          </div>
        </div>

        {/* Input field */}
        <div className="mb-4">
          <label
            htmlFor="youtubeUrl"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            YouTube URL
          </label>
          <input
            type="text"
            id="youtubeUrl"
            placeholder="e.g. https://www.youtube.com/watch?v=XqZsoesa55w"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            value={youtubeUrl}
            onChange={handleUrlChange}
          />
        </div>

        {/* Results or Placeholder */}
        <div className="w-full min-h-[250px] bg-gray-100 rounded-md flex flex-col items-center justify-center p-2 sm:p-4">
          {error && <div className="text-red-500 mb-4">{error}</div>}

          {videoData ? (
            <div className="w-full">
              <h2 className="text-center font-semibold text-lg mb-4">
                Available Thumbnails
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {videoData.thumbnails.map((thumb, index) => (
                  <div key={index} className="bg-white p-4 rounded-md shadow flex flex-col items-center">
                    <div className="mb-2 text-center">
                      <div className="font-medium text-base sm:text-lg">{thumb.label}</div>
                      <div className="text-sm text-gray-500">Size: {thumb.size}</div>
                    </div>
                    <img
                      src={thumb.url}
                      alt={`YouTube Thumbnail ${thumb.label}`}
                      className="rounded shadow w-full max-w-xs mb-3 object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = videoData.thumbnails[2].url; // Fallback to hq if higher res not available
                        e.target.style.opacity = "0.7";
                        e.target.nextSibling.innerHTML =
                          "<small class='text-red-500'>This quality may not be available</small>";
                      }}
                    />
                    <div className="text-center mb-2"></div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-2 w-full">
                      <button
                        className="w-full sm:w-auto px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                        onClick={() => navigator.clipboard.writeText(thumb.url)}
                      >
                        Copy URL
                      </button>
                      <button
                        className="w-full sm:w-auto px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                        onClick={() => handleDownload(thumb.url, thumb.label)}
                      >
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* YouTube logo SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 text-gray-400 mb-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              <div className="text-gray-500 text-center text-base">
                Enter a valid YouTube URL to see the thumbnails
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Youtubethumbnailgrabber;
