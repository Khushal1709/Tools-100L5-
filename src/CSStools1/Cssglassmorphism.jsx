import React, { useState } from "react";

// Scenic backgrounds for shuffle
const backgrounds = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // main
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
];

const defaultColor = "#22cc8a";

const users = [
  {
    name: "Kelli Hopkins",
    role: "Fashion Designer",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Craig Voss",
    role: "Software Developer",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Debra J. Davis",
    role: "Marketing Specialist",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Joseph Armstrong",
    role: "Content Editor",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

export default function GlassmorphismGenerator() {
  const [glassColor, setGlassColor] = useState(defaultColor);
  const [blur, setBlur] = useState(10);
  const [opacity, setOpacity] = useState(0.5);
  const [useBorder, setUseBorder] = useState(true);
  const [showContent, setShowContent] = useState(true);
  const [useBasicShape, setUseBasicShape] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  const rgb = hexToRgb(glassColor);
  const rgbaColor = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${opacity})`;
  const borderColor = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.25)`;

  const glassStyle = {
    background: rgbaColor,
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    border: useBorder ? `1px solid ${borderColor}` : "none",
  };

  const shuffleBackground = () => {
    setBgIndex((i) => (i + 1) % backgrounds.length);
  };

  const shuffleGlassColor = () => {
    // Generate a random pastel color
    const hue = Math.floor(Math.random() * 360);
    setGlassColor(
      `#${(
        (1 << 24) +
        (Math.floor(180 + Math.random() * 50) << 16) +
        (Math.floor(180 + Math.random() * 50) << 8) +
        Math.floor(180 + Math.random() * 50)
      )
        .toString(16)
        .slice(1)}`
    );
  };

  const reset = () => {
    setGlassColor(defaultColor);
    setBlur(10);
    setOpacity(0.5);
    setUseBorder(true);
    setShowContent(true);
    setUseBasicShape(false);
    setBgIndex(0);
  };

  const cssCode = `
background: rgba(${rgb[0]},${rgb[1]},${rgb[2]},${opacity});
-webkit-backdrop-filter: blur(${blur}px);
backdrop-filter: blur(${blur}px);
${useBorder ? `border: 1px solid rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.25);` : ""}
`.trim();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center py-8 px-2 font-sans">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row gap-0">
          {/* Left: Background with Glass Card */}
          <div
            className="relative w-full md:w-1/2 aspect-square bg-cover bg-center rounded-xl overflow-hidden"
            style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
          >
            <div
              className="absolute top-8 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] rounded-xl shadow-lg"
              style={glassStyle}
            >
              {showContent && (
                <div className="p-6 ">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-gray-800 text-lg">
                      User List
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="6" r="1.5" />
                      <circle cx="12" cy="12" r="1.5" />
                      <circle cx="12" cy="18" r="1.5" />
                    </svg>
                  </div>
                  <ul className="space-y-4">
                    {users.map((user) => (
                      <li key={user.name} className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full object-cover"
                          src={user.avatar}
                          alt={user.name}
                        />
                        <div>
                          <div className="font-medium text-gray-800">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {user.role}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right: Controls */}
          <div className="w-full md:w-1/2 flex flex-col justify-between py-4 px-4">
            <div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Glass Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={glassColor}
                    onChange={(e) => setGlassColor(e.target.value)}
                    className="w-8 h-8 rounded border"
                  />
                  <input
                    type="text"
                    value={glassColor}
                    onChange={(e) => setGlassColor(e.target.value)}
                    className="w-28 p-1 border rounded"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Blur: {blur}px
                </label>
                <input
                  type="range"
                  min="0"
                  max="30"
                  value={blur}
                  onChange={(e) => setBlur(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Opacity: {opacity}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={opacity}
                  onChange={(e) => setOpacity(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
              </div>

              <div className="mb-4 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={useBorder}
                    onChange={() => setUseBorder((v) => !v)}
                    className="accent-blue-500"
                  />
                  Use border for glass
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={showContent}
                    onChange={() => setShowContent((v) => !v)}
                    className="accent-blue-500"
                  />
                  Show content on glass?
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={useBasicShape}
                    onChange={() => setUseBasicShape((v) => !v)}
                    className="accent-blue-500"
                  />
                  Use basic shapes for preview
                </label>
              </div>

              <div className="mb-4 flex flex-col gap-3">
                <button
                  onClick={shuffleBackground}
                  className="w-full py-2 border border-blue-500 text-blue-500 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Shuffle Background
                </button>
                <button
                  onClick={shuffleGlassColor}
                  className="w-full py-2 border border-blue-500 text-blue-500 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Shuffle Glass Color
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CSS Output */}
        <div className="mt-6 bg-white rounded-lg overflow-hidden border border-gray-200">
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
            <h3 className="text-sm font-medium text-gray-700">CSS</h3>
          </div>
          <pre className="p-4 text-sm font-mono text-gray-700 overflow-x-auto">
            <span className="font-bold">background:</span> {`rgba(${rgb[0]},${rgb[1]},${rgb[2]},${opacity});`}
            {"\n"}<span className="font-bold">-webkit-backdrop-filter:</span> {`blur(${blur}px);`}
            {"\n"}<span className="font-bold">backdrop-filter:</span> {`blur(${blur}px);`}
            {useBorder && (
              <>
                {"\n"}
                <span className="font-bold">border:</span> {`1px solid rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.25);`}
              </>
            )}
          </pre>
          <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex justify-between">
            <button
              onClick={reset}
              className="px-6 py-2 border border-gray-300 rounded-lg flex items-center hover:bg-gray-100"
            >
              Reset
            </button>
            <button
              onClick={() => navigator.clipboard.writeText(cssCode)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg flex items-center hover:bg-blue-700"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
