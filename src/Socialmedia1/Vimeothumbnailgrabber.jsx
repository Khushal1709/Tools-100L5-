import React, { useState } from "react";

const Vimeothumbnailgrabber = () => {
  const [vimeoUrl, setVimeoUrl] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Helper to validate and extract the video ID
  const extractVimeoId = (url) => {
    const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    return match ? match[1] : null;
  };

  // Fetch video data when URL changes
  const handleUrlChange = async (e) => {
    const url = e.target.value;
    setVimeoUrl(url);
    setVideoData(null);
    setError("");
    if (!url) return;

    const id = extractVimeoId(url);
    if (!id) {
      setError("Please enter a valid Vimeo URL.");
      return;
    }
    setLoading(true);
    try {
      const api = `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${id}`;
      const res = await fetch(api);
      if (!res.ok) throw new Error("Could not fetch video data.");
      const data = await res.json();
      setVideoData(data);
    } catch (err) {
      setError("Failed to fetch video info. Please check the URL.");
    }
    setLoading(false);
  };

  // Download thumbnail image as file (handles CORS)
  const handleDownload = async (url) => {
    try {
      const response = await fetch(url, { mode: "cors" });
      if (!response.ok) throw new Error("Failed to fetch image.");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = "vimeo-thumbnail.jpg";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      alert("Failed to download image. This may be blocked by Vimeo's CORS policy.");
    }
  };

  // Generate different thumbnail sizes
  const getThumbnailSizes = (originalUrl) => {
    const baseUrl = originalUrl.replace(/_\d+x\d+/, "");
    return [
      {
        label: "X-Large",
        size: "1920x1080",
        url: baseUrl.replace(/(\.\w+)$/, "_1920x1080$1"),
      },
      {
        label: "Medium",
        size: "640x360",
        url: baseUrl.replace(/(\.\w+)$/, "_640x360$1"),
      },
      {
        label: "Small",
        size: "320x180",
        url: baseUrl.replace(/(\.\w+)$/, "_320x180$1"),
      },
      {
        label: "Small",
        size: "240x135",
        url: baseUrl.replace(/(\.\w+)$/, "_240x135$1"),
      },
    ];
  };

  return (
    <div className="min-h-screen bg-gray-50 px-2 py-4 sm:px-4 sm:py-8">
      <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto bg-white rounded-lg shadow p-2 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center mb-6 gap-2 sm:gap-0">
          <div className="w-10 h-10 bg-indigo-100 rounded-md flex items-center justify-center mr-0 sm:mr-3 mb-2 sm:mb-0">
            {/* SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21.5 6.5c-.2-1.4-1.3-2.3-3.3-2.5-2.6-.3-5.3 1.4-7.2 4.9-.8 1.4-1.4 2.8-1.7 3.9-.3 1.2-.7 2.1-1.2 2.7-.4.5-.8.8-1.2.8-.3 0-.5-.3-.6-.9-.1-.6.2-1.7.8-3.2l.2-.4-2.2-.7-.2.3c-.5 1.1-.8 2.1-.9 2.9-.2 1.2-.1 2.1.2 2.7.4.8 1.2 1.2 2.3 1.2 1.2 0 2.3-.7 3.3-2.1.3-.5.6-1.1.9-1.8.2-.6.5-1.2.7-1.6 1.2-2.1 2.6-3.2 4.2-3.2.7 0 1.1.2 1.2.6.1.3-.1.8-.6 1.5-.6.7-1 1.2-1.1 1.4-.2.3-.2.5-.1.7.1.2.4.3.8.3.6 0 1.2-.2 1.7-.7.7-.7 1-1.6.9-2.7z" />
            </svg>
          </div>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800 text-center sm:text-left">
            Vimeo Thumbnail Grabber
          </h1>
          <div className="flex flex-row flex-wrap justify-center sm:ml-auto gap-2 mt-2 sm:mt-0">
            <button className="px-3 py-1 text-xs sm:text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
              Share
            </button>
            <button className="px-3 py-1 text-xs sm:text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
              Add to Favs
            </button>
            <button className="px-3 py-1 text-xs sm:text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
              Report Bug
            </button>
          </div>
        </div>

        <div className="w-full h-14 sm:h-20 bg-indigo-50 rounded mb-6" />

        <input
          type="text"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-sm sm:text-base"
          placeholder="e.g. https://vimeo.com/22439234"
          value={vimeoUrl}
          onChange={handleUrlChange}
        />

        {/* Thumbnails or Placeholder */}
        <div className="w-full min-h-[180px] sm:min-h-[200px] bg-indigo-50 rounded flex flex-col items-center justify-center p-4 sm:p-6">
          {loading && <div className="text-indigo-400">Loading...</div>}
          {error && <div className="text-red-500">{error}</div>}

          {!loading && !error && videoData && (
            <div className="w-full">
              {/* Video Info */}
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white rounded shadow text-left text-xs sm:text-base">
                <div>
                  <strong>Title:</strong> {videoData.title}
                </div>
                <div>
                  <strong>Description:</strong>{" "}
                  {videoData.description?.slice(0, 80)}...
                </div>
                <div>
                  <strong>Channel:</strong> {videoData.author_name}
                </div>
                <div>
                  <strong>Duration:</strong>{" "}
                  {videoData.duration
                    ? new Date(videoData.duration * 1000)
                        .toISOString()
                        .substr(14, 5)
                    : "N/A"}
                </div>
                <div>
                  <strong>Uploaded at:</strong> {videoData.upload_date || "N/A"}
                </div>
              </div>

              {/* Multiple Thumbnail Sizes */}
              <div className="mb-2 sm:mb-4 text-center font-semibold text-base sm:text-lg">
                Thumbnails
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {getThumbnailSizes(videoData.thumbnail_url).map((thumb, index) => (
                  <div key={index} className="mb-4 sm:mb-8 flex flex-col items-center">
                    <div className="mb-2 text-center text-xs sm:text-base">
                      {thumb.label}
                      <br />
                      Size: {thumb.size}
                    </div>
                    <img
                      src={thumb.url}
                      alt={`Vimeo Thumbnail ${thumb.size}`}
                      className="rounded shadow w-full max-w-xs sm:max-w-md md:max-w-lg h-auto mx-auto mb-2"
                    />
                    <div className="flex flex-row flex-wrap justify-center gap-2 mt-2">
                      <button
                        className="px-2 sm:px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 text-xs sm:text-sm"
                        onClick={() => navigator.clipboard.writeText(thumb.url)}
                      >
                        Copy URL
                      </button>
                      <button
                        className="px-2 sm:px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-xs sm:text-sm"
                        onClick={() => handleDownload(thumb.url)}
                      >
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!loading && !error && !videoData && (
            <>
              {/* Vimeo logo SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 sm:h-14 sm:w-14 text-indigo-300 mb-2"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M29.9 7.1c-.2-1.9-1.7-3.1-4.2-3.4-3.3-.4-6.7 1.9-9.1 6.5-1 1.8-1.8 3.7-2.2 5.2-.4 1.6-.9 2.8-1.5 3.6-.5.7-1 .9-1.5.9-.4 0-.6-.4-.8-1.2-.1-.8.2-2.3 1.1-4.2l.2-.5-2.8-.9-.3.4c-.7 1.4-1.1 2.7-1.2 3.9-.2 1.6-.1 2.8.3 3.6.5 1.1 1.6 1.6 3 1.6 1.6 0 3-.9 4.3-2.8.4-.7.8-1.4 1.2-2.4.3-.8.6-1.6.9-2.1 1.5-2.7 3.4-4.1 5.4-4.1.9 0 1.4.3 1.5.8.1.4-.1 1.1-.8 1.9-.8.9-1.3 1.5-1.4 1.7-.2.4-.2.7-.1.9.1.3.5.4 1 .4.8 0 1.6-.3 2.2-1 .8-.9 1.3-2 1.1-3.3z" />
              </svg>
              <div className="text-indigo-400 text-center text-base font-medium">
                Enter a valid Vimeo URL to see the thumbnails
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vimeothumbnailgrabber;
