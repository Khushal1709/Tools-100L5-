import React, { useState } from "react";

const Cssboxshadowgenerator = () => {
  const [shape, setShape] = useState("box");
  const [hOffset, setHOffset] = useState(3);
  const [vOffset, setVOffset] = useState(3);
  const [blur, setBlur] = useState(10);
  const [spread, setSpread] = useState(3);
  const [inset, setInset] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [boxColor, setBoxColor] = useState("#474bff");
  const [shadowColor, setShadowColor] = useState("#dddddd");

  // Define fixed shape sizes to fit inside preview
  const shapeStyles = {
    box: "rounded-md w-24 h-24",
    circle: "rounded-full w-24 h-24",
    header: "rounded-md w-32 h-10",
  };

  const shadowValue = `${inset ? "inset " : ""}${hOffset}px ${vOffset}px ${blur}px ${spread}px ${shadowColor}`;

  const cssCode = `
-webkit-box-shadow: ${shadowValue};
-moz-box-shadow: ${shadowValue};
box-shadow: ${shadowValue};
`;

  const handleReset = () => {
    setHOffset(3);
    setVOffset(3);
    setBlur(10);
    setSpread(3);
    setInset(false);
    setBgColor("#ffffff");
    setBoxColor("#474bff");
    setShadowColor("#dddddd");
    setShape("box");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cssCode.trim());
    alert("CSS copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-[#f9f9ff] p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md p-6 rounded-xl">
        <h1 className="text-2xl font-bold flex items-center gap-2 mb-6">
          <span className="w-5 h-5 bg-blue-600 rounded"></span>
          CSS Box Shadow Generator
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Shape & Preview */}
          <div className="space-y-4">
            <div className="flex gap-4">
              {["Box", "Circle", "Header"].map((type) => (
                <label key={type.toLowerCase()} className="flex items-center gap-2">
                  <input
                    type="radio"
                    value={type.toLowerCase()}
                    checked={shape === type.toLowerCase()}
                    onChange={(e) => setShape(e.target.value)}
                  />
                  {type}
                </label>
              ))}
            </div>

            {/* Preview Area */}
            <div
              className="w-40 h-40 mx-auto rounded-xl border border-gray-200 flex items-center justify-center overflow-hidden"
              style={{
                backgroundColor: bgColor,
                transition: "background 0.2s",
              }}
            >
              <div
                className={`${shapeStyles[shape]}`}
                style={{
                  backgroundColor: boxColor,
                  boxShadow: shadowValue,
                  transition: "all 0.2s",
                }}
              ></div>
            </div>
          </div>

          {/* Sliders */}
          <div className="space-y-4">
            <div>
              <label className="text-sm">Horizontal Offset: {hOffset}px</label>
              <input
                type="range"
                min="-50"
                max="50"
                value={hOffset}
                onChange={(e) => setHOffset(+e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm">Vertical Offset: {vOffset}px</label>
              <input
                type="range"
                min="-50"
                max="50"
                value={vOffset}
                onChange={(e) => setVOffset(+e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm">Blur: {blur}px</label>
              <input
                type="range"
                min="0"
                max="100"
                value={blur}
                onChange={(e) => setBlur(+e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm">Spread: {spread}px</label>
              <input
                type="range"
                min="-50"
                max="50"
                value={spread}
                onChange={(e) => setSpread(+e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Color & Inset */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm">Background Color</label>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-full h-10 p-1"
              />
            </div>
            <div>
              <label className="block text-sm">Box Color</label>
              <input
                type="color"
                value={boxColor}
                onChange={(e) => setBoxColor(e.target.value)}
                className="w-full h-10 p-1"
              />
            </div>
            <div>
              <label className="block text-sm">Shadow Color</label>
              <input
                type="color"
                value={shadowColor}
                onChange={(e) => setShadowColor(e.target.value)}
                className="w-full h-10 p-1"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={inset}
                onChange={(e) => setInset(e.target.checked)}
              />
              <label>Inset</label>
            </div>
          </div>
        </div>

        {/* CSS Output */}
        <div className="bg-gray-100 p-4 rounded mt-6 font-mono text-sm whitespace-pre overflow-auto">
          <h1>CSS</h1>
          {cssCode}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded border border-gray-400"
          >
            Reset
          </button>
          <button
            onClick={handleCopy}
            className="px-4 py-2 rounded bg-blue-600 text-white"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cssboxshadowgenerator;
