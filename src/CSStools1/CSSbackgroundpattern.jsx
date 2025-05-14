import React, { useState, useRef, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

const patternTypes = [
  {
    label: "Checks",
    value: "checks",
    icon: (
      <span className="inline-block w-5 h-5 bg-[repeating-conic-gradient(#000_0%_25%,#fff_0%_50%)] bg-[length:12px_12px] rounded"></span>
    ),
  },
  {
    label: "Grid",
    value: "grid",
    icon: (
      <span className="inline-block w-5 h-5 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[length:12px_12px] rounded"></span>
    ),
  },
  {
    label: "Dot",
    value: "dot",
    icon: (
      <span className="inline-block w-5 h-5 bg-[radial-gradient(#000_1.5px,transparent_1.5px)] bg-[length:12px_12px] rounded"></span>
    ),
  },
  {
    label: "Cross Dots",
    value: "crossdots",
    icon: (
      <span className="inline-block w-5 h-5 bg-[radial-gradient(#000_1.5px,transparent_1.5px),radial-gradient(#000_1.5px,transparent_1.5px)] bg-[position:0_0,6px_6px] bg-[length:12px_12px] rounded"></span>
    ),
  },
  {
    label: "Vertical Lines",
    value: "vlines",
    icon: (
      <span className="inline-block w-5 h-5 bg-[repeating-linear-gradient(to_right,#000_0_2px,transparent_2px_6px)] bg-[length:8px_8px] rounded"></span>
    ),
  },
  {
    label: "Horizontal Lines",
    value: "hlines",
    icon: (
      <span className="inline-block w-5 h-5 bg-[repeating-linear-gradient(to_bottom,#000_0_2px,transparent_2px_6px)] bg-[length:8px_8px] rounded"></span>
    ),
  },
  {
    label: "Diagonal Lines",
    value: "dlines",
    icon: (
      <span className="inline-block w-5 h-5 bg-[repeating-linear-gradient(45deg,#000_0_2px,transparent_2px_8px)] bg-[length:10px_10px] rounded"></span>
    ),
  },
];

const defaultPatternColor = "#474bff";
const defaultBgColor = "#47d3ff";
const defaultPatternSize = 32;

// Generate CSS for the selected pattern
function getPatternCSS(type, patternColor, bgColor, patternSize) {
  switch (type) {
    case "checks":
      return `
background-image: repeating-conic-gradient(${patternColor} 0% 25%, ${bgColor} 0% 50%);
background-position: 0 0, ${patternSize}px ${patternSize}px;
background-size: ${patternSize * 2}px ${patternSize * 2}px;
background-color: ${bgColor};`.trim();
    case "grid":
      return `
background-image: linear-gradient(to right, ${patternColor} 1px, transparent 1px), linear-gradient(to bottom, ${patternColor} 1px, transparent 1px);
background-size: ${patternSize}px ${patternSize}px;
background-color: ${bgColor};`.trim();
    case "dot":
      return `
background-image: radial-gradient(${patternColor} 1.5px, transparent 1.5px);
background-size: ${patternSize}px ${patternSize}px;
background-color: ${bgColor};`.trim();
    case "crossdots":
      return `
background-image: radial-gradient(${patternColor} 1.5px, transparent 1.5px), radial-gradient(${patternColor} 1.5px, transparent 1.5px);
background-position: 0 0, ${patternSize / 2}px ${patternSize / 2}px;
background-size: ${patternSize}px ${patternSize}px;
background-color: ${bgColor};`.trim();
    case "vlines":
      return `
background-image: repeating-linear-gradient(to right, ${patternColor} 0 2px, transparent 2px ${patternSize}px);
background-size: ${patternSize}px ${patternSize}px;
background-color: ${bgColor};`.trim();
    case "hlines":
      return `
background-image: repeating-linear-gradient(to bottom, ${patternColor} 0 2px, transparent 2px ${patternSize}px);
background-size: ${patternSize}px ${patternSize}px;
background-color: ${bgColor};`.trim();
    case "dlines":
      return `
background-image: repeating-linear-gradient(45deg, ${patternColor} 0 2px, transparent 2px ${patternSize}px);
background-size: ${patternSize}px ${patternSize}px;
background-color: ${bgColor};`.trim();
    default:
      return "";
  }
}

// Generate background style object for the preview
function getBGStyle(type, patternColor, bgColor, patternSize) {
  return {
    backgroundImage: getPatternCSS(type, patternColor, bgColor, patternSize)
      .match(/background-image:[^;]+/g)?.[0]
      ?.split(": ")[1],
    backgroundSize: getPatternCSS(type, patternColor, bgColor, patternSize)
      .match(/background-size:[^;]+/g)?.[0]
      ?.split(": ")[1],
    backgroundColor: bgColor,
    backgroundPosition: getPatternCSS(type, patternColor, bgColor, patternSize).includes(
      "background-position"
    )
      ? getPatternCSS(type, patternColor, bgColor, patternSize)
          .match(/background-position:[^;]+/g)?.[0]
          ?.split(": ")[1]
      : undefined,
  };
}

// Generate random hex color
function randomHexColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}

export default function PatternGenerator() {
  const [patternType, setPatternType] = useState("checks");
  const [patternColor, setPatternColor] = useState(defaultPatternColor);
  const [bgColor, setBgColor] = useState(defaultBgColor);
  const [patternSize, setPatternSize] = useState(defaultPatternSize);
  const [copied, setCopied] = useState(false);
  const [showPatternPicker, setShowPatternPicker] = useState(false);
  const [showBgPicker, setShowBgPicker] = useState(false);
  const patternPickerRef = useRef(null);
  const bgPickerRef = useRef(null);

  // Handle clicks outside color pickers to close them
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        patternPickerRef.current &&
        !patternPickerRef.current.contains(event.target)
      ) {
        setShowPatternPicker(false);
      }
      if (
        bgPickerRef.current &&
        !bgPickerRef.current.contains(event.target)
      ) {
        setShowBgPicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleShuffle = () => {
    setPatternColor(randomHexColor());
    setBgColor(randomHexColor());
  };

  const handleReset = () => {
    setPatternType("checks");
    setPatternColor(defaultPatternColor);
    setBgColor(defaultBgColor);
    setPatternSize(defaultPatternSize);
    setShowPatternPicker(false);
    setShowBgPicker(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      getPatternCSS(patternType, patternColor, bgColor, patternSize)
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      {/* Custom styles for responsive color picker and range input */}
      <style>
        {`
          .color-picker-container {
            position: absolute;
            z-index: 10;
            margin-top: 0.5rem;
          }
          @media (max-width: 640px) {
            .color-picker-container {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              margin-top: 0;
            }
          }
          input[type="range"] {
            -webkit-appearance: none;
            width: 100%;
            height: 8px;
            background: #e5e7eb;
            border-radius: 4px;
            outline: none;
          }
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 20px;
            height: 20px;
            background: #4b5e7e;
            border-radius: 50%;
            cursor: pointer;
            transition: background 0.2s;
          }
          input[type="range"]::-webkit-slider-thumb:hover {
            background: #3b4a6b;
          }
          input[type="range"]::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background: #4b5e7e;
            border-radius: 50%;
            cursor: pointer;
            transition: background 0.2s;
          }
          input[type="range"]::-moz-range-thumb:hover {
            background: #3b4a6b;
          }
          pre {
            max-height: 200px;
            overflow-x: auto;
            overflow-y: auto;
            white-space: pre-wrap;
            word-wrap: break-word;
          }
        `}
      </style>

      <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-start">
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-xl w-full max-w-5xl">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">
            CSS Background Pattern Generator
          </h1>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
            {/* Pattern Preview */}
            <div
              className="w-full md:w-80 h-64 sm:h-80 rounded overflow-hidden border shadow-sm"
              style={getBGStyle(patternType, patternColor, bgColor, patternSize)}
            />
            <div className="flex-1 flex flex-col gap-4">
              {/* Pattern Type Selector */}
              <div>
                <label className="block font-medium mb-1 text-sm sm:text-base">
                  Pattern Type
                </label>
                <select
                  className="border rounded px-3 py-2 w-full text-sm sm:text-base"
                  value={patternType}
                  onChange={(e) => setPatternType(e.target.value)}
                >
                  {patternTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Color Pickers */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Pattern Color Picker */}
                <div className="relative w-full">
                  <label className="block font-medium mb-1 text-sm sm:text-base">
                    Pattern Color
                  </label>
                  <div
                    className="flex items-center gap-2 p-2 border rounded-lg bg-white cursor-pointer shadow-sm"
                    onClick={() => {
                      setShowPatternPicker(!showPatternPicker);
                      setShowBgPicker(false);
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded border"
                      style={{ backgroundColor: patternColor }}
                    />
                    <span className="text-xs sm:text-sm font-mono">
                      {patternColor}
                    </span>
                  </div>
                  {showPatternPicker && (
                    <div className="color-picker-container" ref={patternPickerRef}>
                      <HexColorPicker
                        color={patternColor}
                        onChange={setPatternColor}
                      />
                    </div>
                  )}
                </div>

                {/* Background Color Picker */}
                <div className="relative w-full">
                  <label className="block font-medium mb-1 text-sm sm:text-base">
                    Background Color
                  </label>
                  <div
                    className="flex items-center gap-2 p-2 border rounded-lg bg-white cursor-pointer shadow-sm"
                    onClick={() => {
                      setShowBgPicker(!showBgPicker);
                      setShowPatternPicker(false);
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded border"
                      style={{ backgroundColor: bgColor }}
                    />
                    <span className="text-xs sm:text-sm font-mono">
                      {bgColor}
                    </span>
                  </div>
                  {showBgPicker && (
                    <div className="color-picker-container" ref={bgPickerRef}>
                      <HexColorPicker color={bgColor} onChange={setBgColor} />
                    </div>
                  )}
                </div>
              </div>

              {/* Pattern Size Slider */}
              <div>
                <label className="block font-medium text-sm sm:text-base">
                  Pattern Size: {patternSize}px
                </label>
                <input
                  type="range"
                  min="8"
                  max="96"
                  value={patternSize}
                  onChange={(e) => setPatternSize(Number(e.target.value))}
                  className="w-full mt-2"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button
                  onClick={handleShuffle}
                  className="px-4 py-2 border rounded-full text-blue-600 border-blue-600 hover:bg-blue-50 transition text-sm sm:text-base min-w-[120px]"
                >
                  Shuffle Colors
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 border rounded-full text-gray-600 border-gray-600 hover:bg-gray-50 transition text-sm sm:text-base min-w-[120px]"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* CSS Output */}
          <div className="mt-6 bg-gray-100 p-4 rounded relative">
            <span className="text-xs text-gray-400">CSS</span>
            <pre className="text-xs sm:text-sm mt-1">
              {getPatternCSS(patternType, patternColor, bgColor, patternSize)}
            </pre>
            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-xs sm:text-sm"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}