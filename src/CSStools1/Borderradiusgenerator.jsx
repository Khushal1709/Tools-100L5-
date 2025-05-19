import React, { useState, useRef } from "react";

const BorderRadiusGenerator = () => {
  const [corners, setCorners] = useState({
    topLeft: 25,
    topRight: 25,
    bottomRight: 25,
    bottomLeft: 25,
  });

  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);
  const [previewType, setPreviewType] = useState("Solid Color");
  const [mergeEdges, setMergeEdges] = useState(false);
  const [hideGuides, setHideGuides] = useState(false);

  const containerRef = useRef(null);
  const draggingCorner = useRef(null);

  // UPDATED FUNCTION
  const getBorderRadius = () => {
    if (mergeEdges) {
      return "50% 50% 50% 50% / 50% 50% 50% 50%";
    }
    const { topLeft, topRight, bottomRight, bottomLeft } = corners;
    return `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}% / ${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;
  };

  const handleCopy = () => {
    const code = `border-radius: ${getBorderRadius()};`;
    navigator.clipboard.writeText(code);
  };

  const handleReset = () => {
    setCorners({
      topLeft: 25,
      topRight: 25,
      bottomRight: 25,
      bottomLeft: 25,
    });
    setWidth(400);
    setHeight(400);
  };

  const handleMouseMove = (e) => {
    if (!draggingCorner.current || !containerRef.current) return;

    const box = document.getElementById("preview-box").getBoundingClientRect();
    const x = e.clientX - box.left;

    let percent = Math.min(Math.max(Math.round((x / box.width) * 100), 0), 50);
    if (draggingCorner.current === "topRight" || draggingCorner.current === "bottomRight") {
      percent = 50 - percent;
    }

    setCorners((prev) => ({
      ...prev,
      [draggingCorner.current]: percent,
    }));
  };

  const handleMouseUp = () => {
    draggingCorner.current = null;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const startDrag = (corner) => {
    draggingCorner.current = corner;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const getPreviewBackground = () => {
    switch (previewType) {
      case "Gradient":
        return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      case "Image":
        return 'url("https://via.placeholder.com/400") center/cover no-repeat';
      case "Solid Color":
      default:
        return "#E6E7FA";
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <svg className="h-6 w-6 text-indigo-600 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 12V4H12V12H4Z" stroke="currentColor" />
            <path d="M12 4H20V12H12V4Z" stroke="currentColor" />
            <path d="M4 20V12H12V20H4Z" stroke="currentColor" />
            <path d="M12 20V12H20V20H12Z" stroke="currentColor" />
          </svg>
          <h1 className="text-xl font-bold text-gray-800">CSS Border Radius Generator</h1>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <div
          ref={containerRef}
          className="relative w-full flex justify-center items-center border border-gray-200 rounded"
          style={{ height: "400px" }}
        >
          <div
            id="preview-box"
            className="relative"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              borderRadius: getBorderRadius(),
              background: getPreviewBackground(),
            }}
          >
            {/* UPDATED: Only show guides if not hiding and not merging */}
            {!hideGuides && !mergeEdges && (
              <>
                <div
                  className="absolute w-4 h-4 bg-blue-500 rounded-full cursor-pointer"
                  style={{
                    left: `${corners.topLeft}%`,
                    top: 0,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseDown={() => startDrag("topLeft")}
                />
                <div
                  className="absolute w-4 h-4 bg-red-500 rounded-full cursor-pointer"
                  style={{
                    right: `${corners.topRight}%`,
                    top: 0,
                    transform: "translate(50%, -50%)",
                  }}
                  onMouseDown={() => startDrag("topRight")}
                />
                <div
                  className="absolute w-4 h-4 bg-red-500 rounded-full cursor-pointer"
                  style={{
                    right: `${corners.bottomRight}%`,
                    bottom: 0,
                    transform: "translate(50%, 50%)",
                  }}
                  onMouseDown={() => startDrag("bottomRight")}
                />
                <div
                  className="absolute w-4 h-4 bg-blue-500 rounded-full cursor-pointer"
                  style={{
                    left: `${corners.bottomLeft}%`,
                    bottom: 0,
                    transform: "translate(-50%, 50%)",
                  }}
                  onMouseDown={() => startDrag("bottomLeft")}
                />
              </>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Preview Type</label>
          <select
            className="w-full border border-gray-300 rounded py-2 px-3"
            value={previewType}
            onChange={(e) => setPreviewType(e.target.value)}
          >
            <option>Solid Color</option>
            <option>Gradient</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Width: {width}px</label>
          <input
            type="range"
            className="w-full"
            min="100"
            max="600"
            value={width}
            onChange={(e) => setWidth(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Height: {height}px</label>
          <input
            type="range"
            className="w-full"
            min="100"
            max="360"
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="flex space-x-8 mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={mergeEdges}
            onChange={() => setMergeEdges(!mergeEdges)}
          />
          Merge Edge Radiuses
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={hideGuides}
            onChange={() => setHideGuides(!hideGuides)}
          />
          Hide Guides
        </label>
      </div>

      <div className="mb-4 ">
        <label className="block text-sm text-gray-600 mb-1 ">CSS Code</label>
        <div className="border border-gray-300 rounded p-3 bg-white overflow-auto">
          <code className="text-gray-800 whitespace-pre">
            border-radius: {getBorderRadius()};
          </code>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={handleReset}
          className="px-5 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
        >
          Reset
        </button>
        <button
          onClick={handleCopy}
          className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default BorderRadiusGenerator;
