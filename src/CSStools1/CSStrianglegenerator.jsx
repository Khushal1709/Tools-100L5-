import React, { useState } from "react";

const directions = [
  {
    name: "Top Left",
    value: "top-left",
    borders: { borderWidth: (w, h) => `${h}px 0 0 ${w}px`, borderColor: (color) => `transparent transparent transparent ${color}` },
  },
  {
    name: "Top",
    value: "top",
    borders: { borderWidth: (w, h) => `0 ${w / 2}px ${h}px ${w / 2}px`, borderColor: (color) => `transparent transparent ${color} transparent` },
  },
  {
    name: "Top Right",
    value: "top-right",
    borders: { borderWidth: (w, h) => `0 ${w}px ${h}px 0`, borderColor: (color) => `transparent ${color} transparent transparent` },
  },
  {
    name: "Right",
    value: "right",
    borders: { borderWidth: (w, h) => `${h / 2}px 0 ${h / 2}px ${w}px`, borderColor: (color) => `transparent transparent transparent ${color}` },
  },
  {
    name: "Bottom Right",
    value: "bottom-right",
    borders: { borderWidth: (w, h) => `0 0 ${h}px ${w}px`, borderColor: (color) => `transparent transparent ${color} transparent` },
  },
  {
    name: "Bottom",
    value: "bottom",
    borders: { borderWidth: (w, h) => `${h}px ${w / 2}px 0 ${w / 2}px`, borderColor: (color) => `${color} transparent transparent transparent` },
  },
  {
    name: "Bottom Left",
    value: "bottom-left",
    borders: { borderWidth: (w, h) => `${h}px 0 0 ${w}px`, borderColor: (color) => `transparent transparent transparent ${color}` },
  },
  {
    name: "Left",
    value: "left",
    borders: { borderWidth: (w, h) => `${h / 2}px ${w}px ${h / 2}px 0`, borderColor: (color) => `transparent ${color} transparent transparent` },
  },
];

function getBorderStyles(direction, width, height, color) {
  const dir = directions.find((d) => d.value === direction);
  if (!dir) return {};
  return {
    borderWidth: dir.borders.borderWidth(width, height),
    borderColor: dir.borders.borderColor(color),
  };
}

export default function TriangleGenerator() {
  const [direction, setDirection] = useState("bottom-left");
  const [color, setColor] = useState("#000000");
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const borderStyles = getBorderStyles(direction, width, height, color);

  // CSS output for code box
  const cssCode = `
width: 0;
height: 0;
border-style: solid;
border-width: ${borderStyles.borderWidth};
border-color: ${borderStyles.borderColor};
`.trim();

  // Tailwind classes for preview box outline
  const previewBoxClass = "bg-transparent border border-gray-200 rounded-lg w-64 h-64 flex items-center justify-center";

  // Inline styles for triangle preview
  const triangleStyle = {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: borderStyles.borderWidth,
    borderColor: borderStyles.borderColor,
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <span className="inline-block w-5 h-5 bg-blue-600 clip-triangle"></span>
        CSS Triangle Generator
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Preview */}
        <div>
          <div className={previewBoxClass}>
            <div style={triangleStyle}></div>
          </div>
          <div className="mt-2 text-center text-gray-500">Preview</div>
        </div>
        {/* Controls */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Direction */}
          <div>
            <div className="mb-1 font-medium">Direction:</div>
            <div className="grid grid-cols-4 gap-2">
              {directions.map((dir) => (
                <button
                  key={dir.value}
                  onClick={() => setDirection(dir.value)}
                  className={`border rounded p-2 flex items-center justify-center ${direction === dir.value ? "border-blue-600 ring-2 ring-blue-200" : "border-gray-200"}`}
                  aria-label={dir.name}
                  type="button"
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderStyle: "solid",
                      ...getBorderStyles(dir.value, 30, 30, "#1e293b"),
                    }}
                  ></div>
                </button>
              ))}
            </div>
          </div>
          {/* Color */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="triangleColor">
              Triangle Color
            </label>
            <input
              id="triangleColor"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-12 h-12 p-0 border-2 border-gray-200 rounded"
            />
          </div>
          {/* Width & Height */}
          <div className="flex gap-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="widthInput">
                Width (px)
              </label>
              <input
                id="widthInput"
                type="number"
                min={1}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="border p-2 rounded w-24"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="heightInput">
                Height (px)
              </label>
              <input
                id="heightInput"
                type="number"
                min={1}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="border p-2 rounded w-24"
              />
            </div>
          </div>
        </div>
      </div>
      {/* CSS Output */}
      <div className="mt-8">
        <div className="mb-2 font-medium">CSS</div>
        <pre className="bg-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">{cssCode}</pre>
        <button
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => {
            navigator.clipboard.writeText(cssCode);
          }}
        >
          Copy
        </button>
      </div>
    </div>
  );
}
