import React, { useState } from "react";
import { ChromePicker } from "react-color";

const GradientGenerator = () => {
  const [startColor, setStartColor] = useState("#474bff");
  const [midColor, setMidColor] = useState("#8c6fff");
  const [endColor, setEndColor] = useState("#bc48ff");
  const [useMidColor, setUseMidColor] = useState(false);
  const [type, setType] = useState("linear");
  const [angle, setAngle] = useState(0);
  const [reverse, setReverse] = useState(false);
  
  // Added gradient presets from the image
  const presetGradients = [
    { name: "Default", startColor: "#474bff", endColor: "#bc48ff", midColor: "#8c6fff", useMid: false },
    { name: "Warm Feelings", startColor: "#ff5e62", endColor: "#ff9966", midColor: "#ff7e5f", useMid: false },
    { name: "Shiny Purple", startColor: "#5f2c82", endColor: "#7f7fd5", midColor: "#6a4d8f", useMid: false },
    { name: "Candy Cake", startColor: "#ff758c", endColor: "#ff7eb3", midColor: "#ff7ea1", useMid: false },
    { name: "Spring", startColor: "#00d2ff", endColor: "#3a7bd5", midColor: "#1fa7ea", useMid: false },
    { name: "Metallic", startColor: "#e0e0e0", endColor: "#959595", midColor: "#c9c9c9", useMid: false },
    { name: "Neon Green", startColor: "#00c9ff", endColor: "#92fe9d", midColor: "#50d18d", useMid: false },
  ];  

  const getGradient = () => {
    const colors = reverse
      ? [endColor, ...(useMidColor ? [midColor] : []), startColor]
      : [startColor, ...(useMidColor ? [midColor] : []), endColor];

    return `${type}-gradient(${type === "linear" ? `${angle}deg, ` : ""}${colors.join(", ")})`;
  };

  const handleShuffle = () => {
    const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    setStartColor(randomColor());
    setEndColor(randomColor());
    if (useMidColor) setMidColor(randomColor());
  };
  
  // Added function to handle preset selection
  const handlePresetChange = (e) => {
    const selectedPreset = presetGradients.find(preset => preset.name === e.target.value);
    
    if (selectedPreset) {
      setStartColor(selectedPreset.startColor);
      setEndColor(selectedPreset.endColor);
      setMidColor(selectedPreset.midColor);
      setUseMidColor(selectedPreset.useMid);
    }
  };

  const cssOutput = `background: ${startColor};\nbackground: -webkit-${getGradient()};\nbackground: ${getGradient()};`;

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-700">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <span className="inline-block w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded"></span>
        CSS Gradient Generator
      </h1>

      <div className="flex gap-6 flex-wrap">
        <div
          className="w-64 h-64 rounded shadow"
          style={{ background: getGradient() }}
        ></div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="block font-medium mb-1">Preset Gradients</label>
            <select 
              className="w-full border rounded px-3 py-2"
              onChange={handlePresetChange}
            >
              {presetGradients.map((preset, index) => (
                <option key={index} value={preset.name}>{preset.name}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Start Color</label>
              <input
                type="color"
                value={startColor}
                onChange={(e) => setStartColor(e.target.value)}
                className="w-full h-10 p-0 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">End Color</label>
              <input
                type="color"
                value={endColor}
                onChange={(e) => setEndColor(e.target.value)}
                className="w-full h-10 p-0 border rounded"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={useMidColor}
              onChange={() => setUseMidColor(!useMidColor)}
            />
            <span>Use Mid Color</span>
            {useMidColor && (
              <input
                type="color"
                value={midColor}
                onChange={(e) => setMidColor(e.target.value)}
                className="h-8 w-16 ml-2 border rounded"
              />
            )}
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="linear"
                checked={type === "linear"}
                onChange={() => setType("linear")}
              />
              Linear
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="radial"
                checked={type === "radial"}
                onChange={() => setType("radial")}
              />
              Radial
            </label>
          </div>

          {type === "linear" && (
            <div>
              <label className="block mb-1">Angle: {angle}°</label>
              <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => setAngle(e.target.value)}
                className="w-full"
              />
            </div>
          )}

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={reverse}
              onChange={() => setReverse(!reverse)}
            />
            <span>Reverse</span>
          </div>

          <button
            onClick={handleShuffle}
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          >
            Shuffle Colors
          </button>
        </div>
      </div>

      <div className="mt-6">
        <label className="block font-medium mb-1">CSS</label>
        <pre className="bg-gray-100 p-4 rounded overflow-auto whitespace-pre text-sm">
          {cssOutput}
        </pre>
      </div>

      <div className="mt-4 flex gap-4">
        <button
          className="border px-4 py-2 rounded hover:bg-gray-100"
          onClick={() => {
            setStartColor("#474bff");
            setEndColor("#bc48ff");
            setMidColor("#8c6fff");
            setUseMidColor(false);
            setType("linear");
            setAngle(0);
            setReverse(false);
          }}
        >
          Reset
        </button>
        <button
          onClick={() => navigator.clipboard.writeText(cssOutput)}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default GradientGenerator;
