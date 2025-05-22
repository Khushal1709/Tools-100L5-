// App.jsx
import React, { useState } from "react";

const PLACEHOLDER_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png";

export default function InstagramPhotoDownloader() {
  const [url, setUrl] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Simulate fetching photos from Instagram
  const handleGetPhotos = () => {
    setLoading(true);
    setTimeout(() => {
      setPhotos([PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE]);
      setLoading(false);
    }, 1200);
  };

  // Simulate download
  const handleDownload = (imgUrl, idx) => {
    const link = document.createElement("a");
    link.href = imgUrl;
    link.download = `instagram-photo-${idx + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative">
        {/* Top-right Action Buttons */}
        <div className="absolute top-0 right-0 flex space-x-2 mt-2 mr-2">
          <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium shadow hover:bg-gray-200">
            Share
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium shadow hover:bg-gray-200">
            Add to Favs
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium shadow hover:bg-gray-200">
            Report Bug
          </button>
        </div>

        {/* Header */}
        <div className="flex items-center mb-8 mt-8 w-full justify-center">
          <img
            src={PLACEHOLDER_IMAGE}
            alt="Instagram Logo"
            className="w-8 h-8 mr-2"
          />
          <h1 className="text-2xl items-start mr-100 font-bold text-gray-800">
            Instagram Photo Downloader
          </h1>
        </div>

        {/* Input Section */}
        <div className="w-full bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              placeholder="e.g. https://www.instagram.com/p/CZpBXgogFSO/"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full md:w-auto"
              onClick={handleGetPhotos}
              disabled={!url || loading}
            >
              {loading ? "Loading..." : "Get Photos"}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            *The post must be public for photos to be downloaded.
          </p>
        </div>

        {/* Photo Cards */}
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center mb-8">
          {[0, 1, 2].map((idx) => (
            <div
              key={idx}
              className="w-60 h-72 bg-white rounded-lg shadow flex flex-col items-center justify-between p-4 mx-auto"
            >
              <div className="flex-1 flex items-center justify-center">
                {photos[idx] ? (
                  <img
                    src={photos[idx]}
                    alt={`Instagram ${idx + 1}`}
                    className="w-28 h-28 object-contain opacity-90"
                  />
                ) : (
                  <div className="w-28 h-28 flex items-center justify-center bg-gray-100 rounded">
                    <svg
                      className="w-16 h-16 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        strokeWidth="2"
                      />
                      <circle cx="12" cy="12" r="4" strokeWidth="2" />
                    </svg>
                  </div>
                )}
              </div>
              <button
                className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 font-medium shadow hover:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-400 transition"
                onClick={() => handleDownload(photos[idx], idx)}
                disabled={!photos[idx]}
              >
                Download
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
