"use client"

import { useState, useRef, useEffect } from "react"

const shapes = {
  triangle: {
    points: [
      [50, 0],
      [100, 100],
      [0, 100]
    ],
    name: "Triangle"
  },
  circle: { points: [], name: "Circle" },
  ellipse: { points: [], name: "Ellipse" },
  inset: { points: [], name: "Rectangle" },
  pentagon: {
    points: [
      [50, 0],
      [100, 38],
      [82, 100],
      [18, 100],
      [0, 38]
    ],
    name: "Pentagon"
  },
  hexagon: {
    points: [
      [50, 0],
      [100, 25],
      [100, 75],
      [50, 100],
      [0, 75],
      [0, 25]
    ],
    name: "Hexagon"
  },
  heptagon: {
    points: [
      [50, 0],
      [90, 20],
      [100, 60],
      [75, 100],
      [25, 100],
      [0, 60],
      [10, 20]
    ],
    name: "Heptagon"
  },
  octagon: {
    points: [
      [30, 0],
      [70, 0],
      [100, 30],
      [100, 70],
      [70, 100],
      [30, 100],
      [0, 70],
      [0, 30]
    ],
    name: "Octagon"
  },
  nonagon: {
    points: [
      [50, 0],
      [83, 12],
      [100, 43],
      [93, 78],
      [68, 100],
      [32, 100],
      [7, 78],
      [0, 43],
      [17, 12]
    ],
    name: "Nonagon"
  },
  decagon: {
    points: [
      [50, 0],
      [80, 10],
      [100, 35],
      [100, 70],
      [80, 90],
      [50, 100],
      [20, 90],
      [0, 70],
      [0, 35],
      [20, 10]
    ],
    name: "Decagon"
  },
  bevel: {
    points: [
      [20, 0],
      [80, 0],
      [100, 20],
      [100, 80],
      [80, 100],
      [20, 100],
      [0, 80],
      [0, 20]
    ],
    name: "Bevel"
  },
  rabbet: {
    points: [
      [0, 0],
      [100, 0],
      [100, 100],
      [0, 100],
      [15, 50]
    ],
    name: "Rabbet"
  },
  leftArrow: {
    points: [
      [40, 0],
      [40, 30],
      [100, 30],
      [100, 70],
      [40, 70],
      [40, 100],
      [0, 50]
    ],
    name: "Left Arrow"
  },
  rightArrow: {
    points: [
      [60, 0],
      [60, 30],
      [0, 30],
      [0, 70],
      [60, 70],
      [60, 100],
      [100, 50]
    ],
    name: "Right Arrow"
  },
  star: {
    points: [
      [50, 0],
      [61, 35],
      [98, 35],
      [68, 57],
      [79, 91],
      [50, 70],
      [21, 91],
      [32, 57],
      [2, 35],
      [39, 35]
    ],
    name: "Star"
  }
}

export default function ClipPathGenerator() {
  const [shape, setShape] = useState("triangle")
  const [width, setWidth] = useState(922)
  const [height, setHeight] = useState(400)
  const [customBackground, setCustomBackground] = useState(false)
  const [showOutside, setShowOutside] = useState(false)
  const [hideGuides, setHideGuides] = useState(false)
  const [points, setPoints] = useState(shapes.triangle.points)
  const [draggingPoint, setDraggingPoint] = useState(null)
  const [clipPathCode, setClipPathCode] = useState("")
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState({
    title: "",
    description: ""
  })
  const previewRef = useRef(null)
  const [currentImage, setCurrentImage] = useState("")
  const [seed, setSeed] = useState(Math.floor(Math.random() * 1000))

  // Fixed container dimensions
  const containerWidth = 922
  const containerHeight = 400

  // Helper function to safely extract clip-path value
  const getClipPathValue = cssCode => {
    if (!cssCode || !cssCode.includes(": ")) return "none"
    const parts = cssCode.split(": ")
    if (parts.length < 2) return "none"

    // Remove the trailing semicolon if present
    const value = parts[1].endsWith(";") ? parts[1].slice(0, -1) : parts[1]
    return value
  }

  // Update image when width, height, or seed changes
  useEffect(() => {
    setCurrentImage(`https://picsum.photos/seed/${seed}/${width}/${height}`)
  }, [width, height, seed])

  // Generate clip path code
  useEffect(() => {
    if (shape === "circle") {
      setClipPathCode(`clip-path: circle(50% at 50% 50%);`)
    } else if (shape === "ellipse") {
      setClipPathCode(`clip-path: ellipse(50% 50% at 50% 50%);`)
    } else if (shape === "inset") {
      setClipPathCode(`clip-path: inset(10% 10% 10% 10% round 10px);`)
    } else {
      // For polygon shapes
      const polygonPoints = points
        .map(point => `${point[0]}% ${point[1]}%`)
        .join(", ")
      setClipPathCode(`clip-path: polygon(${polygonPoints});`)
    }
  }, [shape, points])

  // Handle shape change
  const handleShapeChange = e => {
    const value = e.target.value
    setShape(value)
    if (shapes[value]?.points) {
      setPoints(shapes[value].points)
    }
  }

  // Handle width change
  const handleWidthChange = e => {
    const newWidth = Number.parseInt(e.target.value)
    setWidth(newWidth)
  }

  // Handle height change
  const handleHeightChange = e => {
    const newHeight = Number.parseInt(e.target.value)
    setHeight(newHeight)
  }

  // Handle point drag
  const handleMouseDown = index => {
    setDraggingPoint(index)
  }

  const handleMouseMove = e => {
    if (draggingPoint === null || !previewRef.current) return

    const rect = previewRef.current.getBoundingClientRect()
    const x = Math.min(
      100,
      Math.max(0, ((e.clientX - rect.left) / rect.width) * 100)
    )
    const y = Math.min(
      100,
      Math.max(0, ((e.clientY - rect.top) / rect.height) * 100)
    )

    const newPoints = [...points]
    newPoints[draggingPoint] = [
      Number.parseFloat(x.toFixed(0)),
      Number.parseFloat(y.toFixed(0))
    ]
    setPoints(newPoints)
  }

  const handleMouseUp = () => {
    setDraggingPoint(null)
  }

  // Handle copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(clipPathCode)
    setToastMessage({
      title: "Copied to clipboard",
      description: "CSS clip-path has been copied to your clipboard"
    })
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  // Handle reset
  const handleReset = () => {
    if (shapes[shape]?.points) {
      setPoints(shapes[shape].points)
    }
  }

  // Handle shuffle image
  const handleShuffleImage = () => {
    // Generate a new random seed
    setSeed(Math.floor(Math.random() * 1000))
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {/* Toast notification */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 animate-fade-in-down">
          <div className="font-medium">{toastMessage.title}</div>
          {toastMessage.description && (
            <div className="text-sm text-gray-500 mt-1">
              {toastMessage.description}
            </div>
          )}
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="text-blue-600">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold">CSS Clip Path Generator</h1>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-md flex items-center gap-1 hover:bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
            <span>Share</span>
          </button>
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-md flex items-center gap-1 hover:bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span>Add to Favs</span>
          </button>
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-md flex items-center gap-1 hover:bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M8 2h8" />
              <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
              <path d="M7 15a6.472 6.472 0 0 1-5-3" />
              <path d="M17 15a6.472 6.472 0 0 0 5-3" />
            </svg>
            <span>Report Bug</span>
          </button>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              ClipPath Shape
            </label>
            <div className="relative">
              <select
                value={shape}
                onChange={handleShapeChange}
                className="block w-full px-4 py-2 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
              >
                {Object.entries(shapes).map(([key, { name }]) => (
                  <option key={key} value={key}>
                    {name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Image Width: {width}px
              </label>
              <input
                type="range"
                min="100"
                max="1200"
                step="1"
                value={width}
                onChange={handleWidthChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Image Height: {height}px
              </label>
              <input
                type="range"
                min="100"
                max="800"
                step="1"
                value={height}
                onChange={handleHeightChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div
          className="relative border border-dashed border-gray-300 rounded-lg overflow-hidden"
          style={{ width: "100%", height: `${containerHeight}px` }}
          ref={previewRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: getClipPathValue(clipPathCode)
            }}
          >
            {currentImage && (
              <div className="w-full h-full flex items-center justify-center">
                <img
                  key={`${width}-${height}-${seed}`}
                  src={currentImage || "/placeholder.svg"}
                  alt="Clip path preview"
                  width={width}
                  height={height}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain"
                  }}
                  onError={e => {
                    // Fallback if image fails to load
                    e.currentTarget.src = `https://picsum.photos/${width}/${height}`
                  }}
                />
              </div>
            )}
          </div>

          {!hideGuides &&
            shape !== "circle" &&
            shape !== "ellipse" &&
            shape !== "inset" &&
            points.map((point, index) => (
              <div
                key={index}
                className="absolute w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-move"
                style={{ left: `${point[0]}%`, top: `${point[1]}%` }}
                onMouseDown={() => handleMouseDown(index)}
              />
            ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          <button
            onClick={handleShuffleImage}
            className="px-3 py-1 text-sm border border-gray-300 rounded-md flex items-center gap-1 hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
              <path d="m18 2 4 4-4 4" />
              <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
              <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
              <path d="m18 14 4 4-4 4" />
            </svg>
            <span className="cursor-pointer">Shuffle Image</span>
          </button>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="customBackground"
              checked={customBackground}
              onChange={e => setCustomBackground(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="customBackground" className="text-sm">
              Custom Background
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="showOutside"
              checked={showOutside}
              onChange={e => setShowOutside(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="showOutside" className="text-sm">
              Show Outside
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="hideGuides"
              checked={hideGuides}
              onChange={e => setHideGuides(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="hideGuides" className="text-sm">
              Hide Guides
            </label>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-4 mb-6">
        <div className="mb-2 text-sm font-medium">CSS Code</div>
        <pre className="bg-gray-50 p-3 rounded text-sm overflow-x-auto">
          <code>{clipPathCode}</code>
        </pre>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={handleReset}
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Reset
        </button>
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
          Copy
        </button>
      </div>
    </div>
  )
}
