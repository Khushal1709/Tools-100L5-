import React, { useState, useRef } from 'react';

const CSSTextGlitchEffectGenerator = () => {
  const [glitchEffect, setGlitchEffect] = useState('Glitch with Color');
  const [text, setText] = useState('glitch');
  const [fontSize, setFontSize] = useState(80);
  const [backgroundColor, setBackgroundColor] = useState('#222222');
  const [textColor, setTextColor] = useState('#ffffff');
  const [glitchColor1, setGlitchColor1] = useState('#00ffff');
  const [glitchColor2, setGlitchColor2] = useState('#ff00ff');
  const codeRef = useRef(null);

  // Responsive code generator
  const generateCode = () => {
    return `<div class="glitch-wrapper">
  <div class="glitch" data-glitch="${text}">${text}</div>
</div>

<style>
.glitch-wrapper {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${backgroundColor};
  box-sizing: border-box;
  padding: 2vw;
}
.glitch {
  position: relative;
  font-size: clamp(24px, 8vw, 120px);
  font-weight: 700;
  line-height: 1.2;
  color: ${textColor};
  letter-spacing: 0.1em;
  z-index: 1;
  word-break: break-word;
  max-width: 90vw;
}
.glitch:before, .glitch:after {
  display: block;
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
}
.glitch:before {
  animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  color: ${glitchColor1};
  z-index: -1;
}
.glitch:after {
  animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  color: ${glitchColor2};
  z-index: -2;
}
@keyframes glitch-color {
  0% { transform: translate(0); }
  20% { transform: translate(-3px, 3px); }
  40% { transform: translate(-3px, -3px); }
  60% { transform: translate(3px, 3px); }
  80% { transform: translate(3px, -3px); }
  100% { transform: translate(0); }
}
/* Extra responsiveness for very small devices */
@media (max-width: 480px) {
  .glitch {
    font-size: clamp(16px, 12vw, 40px);
    letter-spacing: 0.05em;
  }
  .glitch-wrapper {
    padding: 4vw;
  }
}
</style>`;
  };

  const handleReset = () => {
    setText('glitch');
    setFontSize(80);
    setBackgroundColor('#222222');
    setTextColor('#ffffff');
    setGlitchColor1('#00ffff');
    setGlitchColor2('#ff00ff');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
            G
          </div>
          <h1 className="text-xl font-bold">CSS Text Glitch Effect Generator</h1>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-1 border border-gray-300 rounded-full flex items-center text-sm ">
            {/* Share Icon */}
            Share
          </button>
          <button className="px-4 py-1 border border-gray-300 rounded-full flex items-center text-sm">
            {/* Favs Icon */}
            Add to Favs
          </button>
          <button className="px-4 py-1 border border-gray-300 rounded-full flex items-center text-sm">
            {/* Bug Icon */}
            Report Bug
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white p-6 rounded-md shadow-sm mb-6">
        {/* Controls Row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Glitch Effect</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={glitchEffect}
              onChange={(e) => setGlitchEffect(e.target.value)}
            >
              <option>Glitch with Color</option>
              <option>Simple Glitch</option>
              <option>RGB Glitch</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Text</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Font Size: {fontSize}px</label>
            <input
              type="range"
              className="w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer"
              min="20"
              max="150"
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value))}
            />
          </div>
        </div>

        {/* Preview */}
        <div className="mb-6 overflow-auto">
          <div
            className="w-full min-h-[120px] flex items-center justify-center"
            style={{
              backgroundColor: backgroundColor,
              padding: '2vw',
              minHeight: '20vh',
              borderRadius: '8px',
            }}
          >
            <div
              className="relative font-bold"
              style={{
                fontSize: `clamp(24px, ${fontSize / 10}vw, 120px)`,
                color: textColor,
                letterSpacing: '0.1em',
                lineHeight: 1.2,
                wordBreak: 'break-word',
                maxWidth: '90vw',
              }}
              data-glitch={text}
            >
              {text}
              <span
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{
                  color: glitchColor1,
                  opacity: 0.8,
                  animation: 'glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
                  zIndex: -1,
                  overflow: 'hidden',
                }}
                aria-hidden="true"
              >
                {text}
              </span>
              <span
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{
                  color: glitchColor2,
                  opacity: 0.8,
                  animation: 'glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite',
                  zIndex: -2,
                  overflow: 'hidden',
                }}
                aria-hidden="true"
              >
                {text}
              </span>
            </div>
          </div>
        </div>

        {/* Color Controls */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Background Color</label>
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2" style={{ backgroundColor: backgroundColor }}></div>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Text Color</label>
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2" style={{ backgroundColor: textColor }}></div>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Glitch Color #1</label>
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2" style={{ backgroundColor: glitchColor1 }}></div>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={glitchColor1}
                onChange={(e) => setGlitchColor1(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Glitch Color #2</label>
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2" style={{ backgroundColor: glitchColor2 }}></div>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={glitchColor2}
                onChange={(e) => setGlitchColor2(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Code Display */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">HTML & CSS Code</label>
          <div className="border border-gray-300 rounded bg-gray-50 p-4">
            <pre className="text-sm overflow-auto" ref={codeRef}>
              <code className="language-html">{generateCode()}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Button Row */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center cursor-pointer"
        >
          Reset
        </button>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(generateCode());
          }}
        >
          Copy
        </button>
      </div>

      {/* Animation keyframes for the preview */}
      <style jsx global>{`
        @keyframes glitch-color {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
        }
        @media (max-width: 480px) {
          .glitch {
            font-size: clamp(16px, 12vw, 40px) !important;
            letter-spacing: 0.05em !important;
          }
          .glitch-wrapper {
            padding: 4vw !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CSSTextGlitchEffectGenerator;
