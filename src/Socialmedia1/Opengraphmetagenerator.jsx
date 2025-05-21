import React, { useState } from "react";

const Opengraphmetagenerator = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    // Required fields
    title: "",
    type: "",
    url: "",
    image: "",

    // Optional fields
    siteName: "",
    description: "",
    videoUrl: "",
    audioUrl: "",
    determiner: "",
    locale: "",
  });

  // State for showing optional fields
  const [showOptional, setShowOptional] = useState(false);

  // State for validation errors
  const [errors, setErrors] = useState({});

  // State for generated meta tags
  const [generatedTags, setGeneratedTags] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      title: "",
      type: "",
      url: "",
      image: "",
      siteName: "",
      description: "",
      videoUrl: "",
      audioUrl: "",
      determiner: "",
      locale: "",
    });
    setErrors({});
    setGeneratedTags("");
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Check required fields
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.type.trim()) newErrors.type = "Type is required";
    if (!formData.url.trim()) newErrors.url = "URL is required";
    if (!formData.image.trim()) newErrors.image = "Image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Generate Open Graph meta tags
  const handleGenerate = () => {
    if (!validateForm()) return;

    let tags = `<!-- Open Graph Meta Tags -->\n`;
    tags += `<meta property="og:title" content="${formData.title}" />\n`;
    tags += `<meta property="og:type" content="${formData.type}" />\n`;
    tags += `<meta property="og:url" content="${formData.url}" />\n`;
    tags += `<meta property="og:image" content="${formData.image}" />\n`;

    // Add optional tags if they have values
    if (formData.siteName)
      tags += `<meta property="og:site_name" content="${formData.siteName}" />\n`;
    if (formData.description)
      tags += `<meta property="og:description" content="${formData.description}" />\n`;
    if (formData.videoUrl)
      tags += `<meta property="og:video" content="${formData.videoUrl}" />\n`;
    if (formData.audioUrl)
      tags += `<meta property="og:audio" content="${formData.audioUrl}" />\n`;
    if (formData.determiner)
      tags += `<meta property="og:determiner" content="${formData.determiner}" />\n`;
    if (formData.locale)
      tags += `<meta property="og:locale" content="${formData.locale}" />\n`;

    setGeneratedTags(tags);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 bg-indigo-100 rounded-md flex items-center justify-center mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
        <h1 className="text-xl font-semibold text-gray-800">
          Open Graph Meta Generator
        </h1>

        <div className=" flex-row ml-auto space-x-2">
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
            Share
          </button>
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
            Add to Favs
          </button>
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
            Report Bug
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-md shadow-sm">
        {/* Required Metadata Section */}
        <div className="mb-6">
          <h2 className="text-base font-medium mb-4 text-gray-700">
            Required Metadata
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.title ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type<span className="text-red-500">*</span>
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.type ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              >
                <option value="">Select Type</option>
                <option value="website">Website</option>
                <option value="article">Article</option>
                <option value="book">Book</option>
                <option value="profile">Profile</option>
                <option value="music.song">Music Song</option>
                <option value="music.album">Music Album</option>
                <option value="music.playlist">Music Playlist</option>
                <option value="video.movie">Video Movie</option>
                <option value="video.episode">Video Episode</option>
                <option value="video.tv_show">Video TV Show</option>
              </select>
              {errors.type && (
                <p className="mt-1 text-sm text-red-500">{errors.type}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL<span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.url ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.url && (
                <p className="mt-1 text-sm text-red-500">{errors.url}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image<span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.image ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.image && (
                <p className="mt-1 text-sm text-red-500">{errors.image}</p>
              )}
            </div>
          </div>
        </div>

        {/* Optional Metadata Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-medium text-gray-700">
              Optional Metadata
            </h2>
            <div className="flex items-center">
              <label className="inline-flex items-center cursor-pointer">
                <span className="mr-2 text-sm text-gray-600">Show</span>
                <input
                  type="checkbox"
                  checked={showOptional}
                  onChange={() => setShowOptional(!showOptional)}
                  className="form-checkbox h-4 w-4 text-indigo-600"
                />
              </label>
            </div>
          </div>

          {showOptional && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Site Name
                </label>
                <input
                  type="text"
                  name="siteName"
                  value={formData.siteName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Video Url
                </label>
                <input
                  type="url"
                  name="videoUrl"
                  value={formData.videoUrl}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Audio Url
                </label>
                <input
                  type="url"
                  name="audioUrl"
                  value={formData.audioUrl}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Determiner
                </label>
                <input
                  type="text"
                  name="determiner"
                  value={formData.determiner}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Locale
                </label>
                <input
                  type="text"
                  name="locale"
                  value={formData.locale}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={handleReset}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Reset
          </button>
          <button
            onClick={handleGenerate}
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Generate
          </button>
        </div>
      </div>

      {/* Generated Tags Output */}
      {generatedTags && (
        <div className="mt-6 bg-gray-800 rounded-md p-4">
          <h3 className="text-lg font-semibold text-white mb-2">
            Generated Open Graph Meta Tags
          </h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
            {generatedTags}
          </pre>
          <button
            onClick={() => {
              navigator.clipboard.writeText(generatedTags);
              alert("Copied to clipboard!");
            }}
            className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
};

export default Opengraphmetagenerator;
