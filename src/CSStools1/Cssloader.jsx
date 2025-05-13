

import { useState, useEffect, useRef } from "react";

export default function CSSLoaderGenerator() {
  const [selectedCategory, setSelectedCategory] = useState("spinners");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredLoaderId, setHoveredLoaderId] = useState(null);
  const [selectedLoader, setSelectedLoader] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  const dropdownRef = useRef(null);
  const modalRef = useRef(null);
  const itemsPerPage = 6;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }

      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        selectedLoader
      ) {
        // Don't close if clicking inside the modal
        if (!modalRef.current.contains(event.target.closest(".code-modal"))) {
          setSelectedLoader(null);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedLoader]);

  // Reset copy status after 2 seconds
  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  // =============== LOADER DATA ===============

  const loaderCategories = [
    { value: "spinners", label: "Spinners" },
    { value: "bars", label: "Bars" },
    { value: "dots", label: "Dots" },
    { value: "pulses", label: "Pulses" },
    { value: "waves", label: "Waves" },
  ];

  const loaderData = [
    // Spinners
    { id: 1, name: "Basic Spinner", type: "basic", category: "spinners" },
    { id: 2, name: "Comet", type: "comet", category: "spinners" },
    {
      id: 3,
      name: "Rounded Head Comet",
      type: "roundedHeadComet",
      category: "spinners",
    },
    { id: 4, name: "Counter Arcs", type: "counterArcs", category: "spinners" },
    {
      id: 5,
      name: "Circular Tube",
      type: "circularTube",
      category: "spinners",
    },
    { id: 6, name: "Dual Ring", type: "dualRing", category: "spinners" },
    { id: 7, name: "Ripple", type: "ripple", category: "spinners" },
    { id: 8, name: "Spinner Ring", type: "spinnerRing", category: "spinners" },
    { id: 9, name: "Eclipse", type: "eclipse", category: "spinners" },
    { id: 10, name: "Hourglass", type: "hourglass", category: "spinners" },
    { id: 11, name: "Folding Cube", type: "foldingCube", category: "spinners" },
    {
      id: 12,
      name: "Rotating Square",
      type: "rotatingSquare",
      category: "spinners",
    },

    // Bars
    { id: 13, name: "Material UI", type: "materialUI", category: "bars" },
    { id: 14, name: "Progress Bar", type: "progressBar", category: "bars" },
    { id: 15, name: "Gradient Bar", type: "gradientBar", category: "bars" },
    { id: 16, name: "Striped Bar", type: "stripedBar", category: "bars" },
    { id: 17, name: "Stepped Bar", type: "steppedBar", category: "bars" },
    {
      id: 18,
      name: "Indeterminate Bar",
      type: "indeterminateBar",
      category: "bars",
    },
    { id: 19, name: "Loading Bar", type: "loadingBar", category: "bars" },
    { id: 20, name: "Skeleton Bar", type: "skeletonBar", category: "bars" },
    { id: 21, name: "Elastic Bar", type: "elasticBar", category: "bars" },
    { id: 22, name: "Staggered Bars", type: "staggeredBars", category: "bars" },
    { id: 23, name: "Equalizer", type: "equalizer", category: "bars" },
    { id: 24, name: "Vertical Bars", type: "verticalBars", category: "bars" },

    // Dots
    { id: 25, name: "Bouncing Dots", type: "bouncingDots", category: "dots" },
    { id: 26, name: "Fading Dots", type: "fadingDots", category: "dots" },
    { id: 27, name: "Flashing Dots", type: "flashingDots", category: "dots" },
    { id: 28, name: "Scaling Dots", type: "scalingDots", category: "dots" },
    { id: 29, name: "Rotating Dots", type: "rotatingDots", category: "dots" },
    { id: 30, name: "Chasing Dots", type: "chasingDots", category: "dots" },
    { id: 31, name: "Dot Wave", type: "dotWave", category: "dots" },
    { id: 32, name: "Dot Carousel", type: "dotCarousel", category: "dots" },
    { id: 33, name: "Dot Elastic", type: "dotElastic", category: "dots" },
    { id: 34, name: "Dot Floating", type: "dotFloating", category: "dots" },
    { id: 35, name: "Dot Revolution", type: "dotRevolution", category: "dots" },
    { id: 36, name: "Dot Windmill", type: "dotWindmill", category: "dots" },

    // Pulses
    { id: 37, name: "Pulse Ring", type: "pulseRing", category: "pulses" },
    { id: 38, name: "Double Pulse", type: "doublePulse", category: "pulses" },
    { id: 39, name: "Multi Pulse", type: "multiPulse", category: "pulses" },
    { id: 40, name: "Heartbeat", type: "heartbeat", category: "pulses" },
    { id: 41, name: "Radar", type: "radar", category: "pulses" },
    { id: 42, name: "Sonar", type: "sonar", category: "pulses" },
    { id: 43, name: "Ripple Pulse", type: "ripplePulse", category: "pulses" },
    { id: 44, name: "Breathing", type: "breathing", category: "pulses" },
    { id: 45, name: "Beacon", type: "beacon", category: "pulses" },
    { id: 46, name: "Pulse Dots", type: "pulseDots", category: "pulses" },
    { id: 47, name: "Pulse Square", type: "pulseSquare", category: "pulses" },
    { id: 48, name: "Pulse Circle", type: "pulseCircle", category: "pulses" },

    // Waves
    { id: 49, name: "Sine Wave", type: "sineWave", category: "waves" },
    { id: 50, name: "Wave Dots", type: "waveDots", category: "waves" },
    { id: 51, name: "Wave Bars", type: "waveBars", category: "waves" },
    { id: 52, name: "Liquid Wave", type: "liquidWave", category: "waves" },
    { id: 53, name: "Circular Wave", type: "circularWave", category: "waves" },
    {
      id: 54,
      name: "Oscillating Wave",
      type: "oscillatingWave",
      category: "waves",
    },
    {
      id: 55,
      name: "Frequency Wave",
      type: "frequencyWave",
      category: "waves",
    },
    { id: 56, name: "Ripple Wave", type: "rippleWave", category: "waves" },
    { id: 57, name: "Flowing Wave", type: "flowingWave", category: "waves" },
    { id: 58, name: "Gradient Wave", type: "gradientWave", category: "waves" },
    { id: 59, name: "Bubble Wave", type: "bubbleWave", category: "waves" },
    { id: 60, name: "Particle Wave", type: "particleWave", category: "waves" },
  ];

  // Filter loaders by selected category
  const filteredLoaders = loaderData.filter(
    (loader) => loader.category === selectedCategory
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredLoaders.length / itemsPerPage);

  // Get current page loaders
  const currentLoaders = filteredLoaders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // =============== LOADER RENDERING FUNCTIONS ===============

  // Basic spinner with UI elements
  function renderBasicLoader() {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <div className="bg-indigo-100 rounded-full w-32 h-8 mb-2"></div>
        <div className="relative">
          <div className="h-12 w-12 rounded-full border-4 border-indigo-200"></div>
          <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-t-4 border-l-4 border-indigo-600 animate-spin"></div>
        </div>
        <div className="bg-indigo-100 rounded-full w-32 h-8 mt-2"></div>
      </div>
    );
  }

  // Comet style loader
  function renderCometLoader() {
    return (
      <div className="h-16 w-16 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin"></div>
    );
  }

  // Rounded head comet loader
  function renderRoundedHeadCometLoader() {
    return (
      <div className="h-16 w-16 rounded-full border-4 border-indigo-200 border-r-indigo-600 animate-spin"></div>
    );
  }

  // Material UI style loader
  function renderMaterialUILoader() {
    return (
      <div className="w-16 h-1 bg-indigo-600 rounded-full relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-8 bg-white animate-[materialLoader_1.5s_infinite]"></div>
      </div>
    );
  }

  // Counter arcs loader
  function renderCounterArcsLoader() {
    return (
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin"></div>
        <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-transparent border-b-indigo-600 animate-[counterSpin_1s_linear_infinite]"></div>
      </div>
    );
  }

  // Circular tube loader
  function renderCircularTubeLoader() {
    return (
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-indigo-600 opacity-25 animate-ping"></div>
        <div className="h-16 w-16 rounded-full border-4 border-indigo-600"></div>
      </div>
    );
  }

  // Dual Ring loader
  function renderDualRingLoader() {
    return (
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-transparent border-t-indigo-600 border-b-indigo-600 animate-spin"></div>
      </div>
    );
  }

  // Ripple loader
  function renderRippleLoader() {
    return (
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-indigo-600 opacity-10 animate-[ripple_1s_cubic-bezier(0,0.2,0.8,1)_infinite]"></div>
        <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-indigo-600 opacity-10 animate-[ripple_1s_cubic-bezier(0,0.2,0.8,1)_infinite_0.3s]"></div>
      </div>
    );
  }

  // Spinner Ring loader
  function renderSpinnerRingLoader() {
    return (
      <div className="h-16 w-16 rounded-full border-8 border-indigo-200 border-t-8 border-t-indigo-600 animate-spin"></div>
    );
  }

  // Eclipse loader
  function renderEclipseLoader() {
    return (
      <div className="relative h-16 w-16">
        <div className="h-16 w-16 rounded-full bg-indigo-600 animate-[eclipse_1.5s_infinite]"></div>
      </div>
    );
  }

  // Hourglass loader
  function renderHourglassLoader() {
    return (
      <div className="h-16 w-8 bg-indigo-600 animate-[hourglass_1s_ease-in-out_infinite]"></div>
    );
  }

  // Folding Cube loader
  function renderFoldingCubeLoader() {
    return (
      <div className="relative h-16 w-16 transform rotate-45">
        <div className="absolute h-8 w-8 bg-indigo-600 animate-[foldCube_2.4s_infinite_linear_both_0.3s]"></div>
        <div
          className="absolute h-8 w-8 bg-indigo-600 animate-[foldCube_2.4s_infinite_linear_both_0.6s]"
          style={{ top: 0, right: 0 }}
        ></div>
        <div
          className="absolute h-8 w-8 bg-indigo-600 animate-[foldCube_2.4s_infinite_linear_both_1.2s]"
          style={{ bottom: 0, right: 0 }}
        ></div>
        <div
          className="absolute h-8 w-8 bg-indigo-600 animate-[foldCube_2.4s_infinite_linear_both_0.9s]"
          style={{ bottom: 0, left: 0 }}
        ></div>
      </div>
    );
  }

  // Rotating Square loader
  function renderRotatingSquareLoader() {
    return (
      <div className="h-16 w-16 border-4 border-indigo-600 animate-[rotateSquare_3s_infinite]"></div>
    );
  }

  // Progress bar loader
  function renderProgressBarLoader() {
    return (
      <div className="w-32 h-2 bg-indigo-200 rounded-full overflow-hidden">
        <div className="h-full bg-indigo-600 animate-[progressBar_2s_ease-in-out_infinite]"></div>
      </div>
    );
  }

  // Gradient Bar loader
  function renderGradientBarLoader() {
    return (
      <div className="w-32 h-2 bg-gradient-to-r from-indigo-200 to-indigo-600 rounded-full overflow-hidden">
        <div className="h-full bg-white/30 animate-[gradientBar_2s_ease-in-out_infinite]"></div>
      </div>
    );
  }

  // Striped Bar loader
  function renderStripedBarLoader() {
    return (
      <div className="w-32 h-3 bg-indigo-200 rounded-full overflow-hidden">
        <div className="h-full w-full bg-[linear-gradient(45deg,rgba(99,102,241,0.5)_25%,transparent_25%,transparent_50%,rgba(99,102,241,0.5)_50%,rgba(99,102,241,0.5)_75%,transparent_75%,transparent)] bg-[length:10px_10px] animate-[stripedBar_1s_linear_infinite]"></div>
      </div>
    );
  }

  // Stepped Bar loader
  function renderSteppedBarLoader() {
    return (
      <div className="w-32 h-2 bg-indigo-200 rounded-full flex overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-full bg-indigo-600 animate-pulse"
            style={{
              width: "20%",
              animationDelay: `${i * 0.15}s`,
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Indeterminate Bar loader
  function renderIndeterminateBarLoader() {
    return (
      <div className="w-32 h-1 bg-indigo-200 rounded-full overflow-hidden relative">
        <div className="absolute top-0 h-full w-1/3 bg-indigo-600 rounded-full animate-[indeterminateBar_1.5s_infinite]"></div>
      </div>
    );
  }

  // Loading Bar loader
  function renderLoadingBarLoader() {
    return (
      <div className="w-32 h-2 bg-indigo-200 rounded-full overflow-hidden">
        <div className="h-full w-0 bg-indigo-600 animate-[loadingBar_3s_ease-in-out_infinite]"></div>
      </div>
    );
  }

  // Skeleton Bar loader
  function renderSkeletonBarLoader() {
    return (
      <div className="flex flex-col gap-1 w-32">
        <div className="h-2 bg-indigo-200 rounded-full w-full animate-pulse"></div>
        <div className="h-2 bg-indigo-200 rounded-full w-5/6 animate-pulse"></div>
        <div className="h-2 bg-indigo-200 rounded-full w-4/6 animate-pulse"></div>
      </div>
    );
  }

  // Elastic Bar loader
  function renderElasticBarLoader() {
    return (
      <div className="w-32 h-2 bg-indigo-200 rounded-full overflow-hidden">
        <div className="h-full bg-indigo-600 animate-[elasticBar_2.5s_ease-in-out_infinite]"></div>
      </div>
    );
  }

  // Staggered Bars loader
  function renderStaggeredBarsLoader() {
    return (
      <div className="flex items-end justify-center gap-1 h-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 bg-indigo-600 animate-[staggeredBar_1.2s_ease-in-out_infinite]"
            style={{
              height: `${30 + i * 10}%`,
              animationDelay: `${i * 0.1}s`,
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Equalizer loader
  function renderEqualizerLoader() {
    return (
      <div className="flex items-end justify-center gap-1 h-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 bg-indigo-600 animate-[equalizer_0.8s_ease-in-out_infinite_alternate]"
            style={{
              height: "40%",
              animationDelay: `${i * 0.2}s`,
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Vertical Bars loader
  function renderVerticalBarsLoader() {
    return (
      <div className="flex items-center justify-center gap-1 h-10">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-8 bg-indigo-600 animate-[verticalBar_1s_ease-in-out_infinite]"
            style={{ animationDelay: `${i * 0.15}s` }}
          ></div>
        ))}
      </div>
    );
  }

  // Bouncing dots loader
  function renderBouncingDotsLoader() {
    return (
      <div className="flex space-x-2">
        <div className="h-3 w-3 bg-indigo-600 rounded-full animate-[bounce_0.6s_infinite_alternate_0.1s]"></div>
        <div className="h-3 w-3 bg-indigo-600 rounded-full animate-[bounce_0.6s_infinite_alternate_0.2s]"></div>
        <div className="h-3 w-3 bg-indigo-600 rounded-full animate-[bounce_0.6s_infinite_alternate_0.3s]"></div>
      </div>
    );
  }

  // Fading dots loader
  function renderFadingDotsLoader() {
    return (
      <div className="flex space-x-2">
        <div className="h-3 w-3 bg-indigo-600 rounded-full animate-[fade_1.5s_infinite_0.1s]"></div>
        <div className="h-3 w-3 bg-indigo-600 rounded-full animate-[fade_1.5s_infinite_0.3s]"></div>
        <div className="h-3 w-3 bg-indigo-600 rounded-full animate-[fade_1.5s_infinite_0.5s]"></div>
      </div>
    );
  }

  // Flashing dots loader
  function renderFlashingDotsLoader() {
    return (
      <div className="flex space-x-2">
        <div className="h-3 w-3 bg-indigo-600 rounded-full animate-[flash_0.5s_infinite_alternate_0.1s]"></div>
        <div className="h-3 w-3 bg-indigo-600 rounded-full animate-[flash_0.5s_infinite_alternate_0.2s]"></div>
        <div className="h-3 w-3 bg-indigo-600 rounded-full animate-[flash_0.5s_infinite_alternate_0.3s]"></div>
      </div>
    );
  }

  // Scaling dots loader
  function renderScalingDotsLoader() {
    return (
      <div className="flex space-x-2">
        <div className="h-3 w-3 bg-indigo-600 rounded-full animate-[scale_1s_infinite_alternate_0.1s]"></div>
        <div className="h-3 w-3 bg-indigo-600 rounded-full animate-[scale_1s_infinite_alternate_0.2s]"></div>
        <div className="h-3 w-3 bg-indigo-600 rounded-full animate-[scale_1s_infinite_alternate_0.3s]"></div>
      </div>
    );
  }

  // Rotating dots loader
  function renderRotatingDotsLoader() {
    return (
      <div className="relative h-10 w-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 bg-indigo-600 rounded-full animate-[rotateDot_1.2s_linear_infinite]"
            style={{
              top: "50%",
              left: "50%",
              marginTop: "-4px",
              marginLeft: "-4px",
              transformOrigin: "10px 10px",
              animationDelay: `${i * 0.15}s`,
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Chasing dots loader
  function renderChasingDotsLoader() {
    return (
      <div className="relative h-10 w-10 animate-[spin_2s_linear_infinite]">
        <div className="absolute top-0 left-0 h-4 w-4 bg-indigo-600 rounded-full animate-[chasingDot_2s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 right-0 h-4 w-4 bg-indigo-400 rounded-full animate-[chasingDot_2s_ease-in-out_infinite_1s]"></div>
      </div>
    );
  }

  // Dot Wave loader
  function renderDotWaveLoader() {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-2 w-2 bg-indigo-600 rounded-full animate-[dotWave_1.5s_ease-in-out_infinite]"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
    );
  }

  // Dot Carousel loader
  function renderDotCarouselLoader() {
    return (
      <div className="relative h-8 w-16">
        <div className="absolute top-3 left-0 h-2 w-2 bg-indigo-600 rounded-full animate-[dotCarousel_1.5s_infinite]"></div>
        <div className="absolute top-3 left-0 h-2 w-2 bg-indigo-600 rounded-full animate-[dotCarousel_1.5s_infinite_0.5s]"></div>
        <div className="absolute top-3 left-0 h-2 w-2 bg-indigo-600 rounded-full animate-[dotCarousel_1.5s_infinite_1s]"></div>
      </div>
    );
  }

  // Dot Elastic loader
  function renderDotElasticLoader() {
    return (
      <div className="flex space-x-1">
        <div className="h-2 w-2 bg-indigo-600 rounded-full animate-[dotElastic_1s_infinite]"></div>
        <div className="h-2 w-2 bg-indigo-600 rounded-full animate-[dotElastic_1s_infinite_0.3s]"></div>
        <div className="h-2 w-2 bg-indigo-600 rounded-full animate-[dotElastic_1s_infinite_0.6s]"></div>
      </div>
    );
  }

  // Dot Floating loader
  function renderDotFloatingLoader() {
    return (
      <div className="relative h-8 w-8">
        <div className="absolute h-2 w-2 bg-indigo-600 rounded-full animate-[dotFloating_3s_ease-in-out_infinite]"></div>
        <div className="absolute h-2 w-2 bg-indigo-400 rounded-full animate-[dotFloating_3s_ease-in-out_infinite_0.5s]"></div>
        <div className="absolute h-2 w-2 bg-indigo-300 rounded-full animate-[dotFloating_3s_ease-in-out_infinite_1s]"></div>
      </div>
    );
  }

  // Dot Revolution loader
  function renderDotRevolutionLoader() {
    return (
      <div className="relative h-10 w-10">
        <div className="absolute top-0 left-0 right-0 bottom-0 m-auto h-2 w-2 bg-indigo-600 rounded-full"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 m-auto h-10 w-10 border-2 border-indigo-200 border-dotted rounded-full animate-[spin_2s_linear_infinite]"></div>
      </div>
    );
  }

  // Dot Windmill loader
  function renderDotWindmillLoader() {
    return (
      <div className="relative h-12 w-12">
        <div className="absolute top-0 left-0 right-0 bottom-0 m-auto h-2 w-2 bg-indigo-600 rounded-full"></div>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 bg-indigo-600 rounded-full animate-[dotWindmill_2s_linear_infinite]"
            style={{
              transformOrigin: "center center",
              transform: `rotate(${i * 90}deg) translateY(-10px)`,
              top: "50%",
              left: "50%",
              marginTop: "-4px",
              marginLeft: "-4px",
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Pulse Ring loader
  function renderPulseRingLoader() {
    return (
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-indigo-600 opacity-25 animate-ping"></div>
        <div className="h-16 w-16 rounded-full border-4 border-indigo-600"></div>
      </div>
    );
  }

  // Double Pulse loader
  function renderDoublePulseLoader() {
    return (
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-indigo-600 opacity-25 animate-[doublePulse_2s_cubic-bezier(0,0.2,0.8,1)_infinite]"></div>
        <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-indigo-600 opacity-25 animate-[doublePulse_2s_cubic-bezier(0,0.2,0.8,1)_infinite_0.5s]"></div>
      </div>
    );
  }

  // Multi Pulse loader
  function renderMultiPulseLoader() {
    return (
      <div className="relative h-16 w-16">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 h-16 w-16 rounded-full border-4 border-indigo-600 opacity-25 animate-[multiPulse_3s_cubic-bezier(0,0.2,0.8,1)_infinite]"
            style={{ animationDelay: `${i * 0.5}s` }}
          ></div>
        ))}
        <div className="h-16 w-16 rounded-full border-4 border-indigo-600"></div>
      </div>
    );
  }

  // Heartbeat loader
  function renderHeartbeatLoader() {
    return (
      <div
        className="h-12 w-12 bg-indigo-600 animate-[heartbeat_1.5s_ease-in-out_infinite]"
        style={{
          clipPath:
            'path("M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z")',
        }}
      ></div>
    );
  }

  // Radar loader
  function renderRadarLoader() {
    return (
      <div className="relative h-16 w-16 rounded-full border border-indigo-200">
        <div
          className="absolute top-0 left-0 h-16 w-16 border-t-2 border-r-2 border-indigo-600 rounded-full animate-[radar_2s_linear_infinite]"
          style={{ transformOrigin: "center center" }}
        ></div>
      </div>
    );
  }

  // Sonar loader
  function renderSonarLoader() {
    return (
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 h-16 w-16 rounded-full border border-indigo-600"></div>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 h-16 w-16 rounded-full border border-indigo-600 animate-[sonar_2s_linear_infinite]"
            style={{ animationDelay: `${i * 0.5}s` }}
          ></div>
        ))}
      </div>
    );
  }

  // Ripple Pulse loader
  function renderRipplePulseLoader() {
    return (
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 h-8 w-8 bg-indigo-600 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 h-16 w-16 rounded-full border-2 border-indigo-600 animate-[ripplePulse_2s_cubic-bezier(0,0.2,0.8,1)_infinite]"
            style={{
              animationDelay: `${i * 0.5}s`,
              top: "0",
              left: "0",
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Breathing loader
  function renderBreathingLoader() {
    return (
      <div className="h-12 w-12 bg-indigo-600 rounded-full animate-[breathing_3s_ease-in-out_infinite]"></div>
    );
  }

  // Beacon loader
  function renderBeaconLoader() {
    return (
      <div className="relative h-16 w-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-indigo-600 rounded-full"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-indigo-600 opacity-0 animate-[beacon_2s_ease-in-out_infinite]"></div>
      </div>
    );
  }

  // Pulse Dots loader
  function renderPulseDotsLoader() {
    return (
      <div className="flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-3 w-3 bg-indigo-600 rounded-full animate-[pulseDot_1.5s_ease-in-out_infinite]"
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>
    );
  }

  // Pulse Square loader
  function renderPulseSquareLoader() {
    return (
      <div className="h-12 w-12 bg-indigo-600 animate-[pulseSquare_2s_ease-in-out_infinite]"></div>
    );
  }

  // Pulse Circle loader
  function renderPulseCircleLoader() {
    return (
      <div className="h-12 w-12 bg-indigo-600 rounded-full animate-[pulseCircle_2s_ease-in-out_infinite]"></div>
    );
  }

  // Sine Wave loader
  function renderSineWaveLoader() {
    return (
      <div className="flex items-center h-10 space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-1 w-1 bg-indigo-600 rounded-full animate-[sineWave_1s_ease-in-out_infinite]"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
    );
  }

  // Wave Dots loader
  function renderWaveDotsLoader() {
    return (
      <div className="flex items-center h-10 space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-2 w-2 bg-indigo-600 rounded-full animate-[waveDots_1.8s_ease-in-out_infinite]"
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>
    );
  }

  // Wave Bars loader
  function renderWaveBarsLoader() {
    return (
      <div className="flex items-end h-10 space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 bg-indigo-600 animate-[waveBars_1.2s_ease-in-out_infinite]"
            style={{
              height: `${30 + i * 10}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Liquid Wave loader
  function renderLiquidWaveLoader() {
    return (
      <div className="relative h-12 w-24 bg-indigo-600 overflow-hidden rounded">
        <div
          className="absolute inset-0 bg-white/20 animate-[liquidWave_2s_ease-in-out_infinite]"
          style={{
            maskImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23fff' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
            WebkitMaskImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23fff' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>
    );
  }

  // Circular Wave loader
  function renderCircularWaveLoader() {
    return (
      <div className="relative h-16 w-16">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 h-16 w-16 rounded-full border-2 border-indigo-600 animate-[circularWave_2s_ease-in-out_infinite]"
            style={{ animationDelay: `${i * 0.5}s` }}
          ></div>
        ))}
      </div>
    );
  }

  // Oscillating Wave loader
  function renderOscillatingWaveLoader() {
    return (
      <div className="flex items-center h-10 space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-8 w-1 bg-indigo-600 animate-[oscillatingWave_1.2s_ease-in-out_infinite]"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
    );
  }

  // Frequency Wave loader
  function renderFrequencyWaveLoader() {
    return (
      <div className="flex items-center h-10 space-x-1">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="h-6 w-1 bg-indigo-600 animate-[frequencyWave_0.8s_ease-in-out_infinite]"
            style={{
              animationDelay: `${i * 0.05}s`,
              opacity: i % 2 === 0 ? 0.8 : 0.5,
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Ripple Wave loader
  function renderRippleWaveLoader() {
    return (
      <div className="relative h-16 w-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-indigo-600 rounded-full"></div>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 h-16 w-16 rounded-full border-2 border-indigo-600 animate-[rippleWave_2s_cubic-bezier(0,0.2,0.8,1)_infinite]"
            style={{ animationDelay: `${i * 0.5}s` }}
          ></div>
        ))}
      </div>
    );
  }

  // Flowing Wave loader
  function renderFlowingWaveLoader() {
    return (
      <div className="relative h-8 w-24 bg-indigo-200 overflow-hidden rounded-full">
        <div
          className="absolute h-full w-full bg-indigo-600 animate-[flowingWave_2s_ease-in-out_infinite]"
          style={{
            maskImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23fff' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
            WebkitMaskImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23fff' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>
    );
  }

  // Gradient Wave loader
  function renderGradientWaveLoader() {
    return (
      <div className="relative h-8 w-24 bg-gradient-to-r from-indigo-400 to-indigo-600 overflow-hidden rounded-full">
        <div
          className="absolute h-full w-full bg-white/20 animate-[gradientWave_2s_ease-in-out_infinite]"
          style={{
            maskImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23fff' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
            WebkitMaskImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23fff' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>
    );
  }

  // Bubble Wave loader
  function renderBubbleWaveLoader() {
    return (
      <div className="relative h-12 w-24">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-3 w-3 bg-indigo-600 rounded-full animate-[bubbleWave_3s_ease-in-out_infinite]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.7,
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Particle Wave loader
  function renderParticleWaveLoader() {
    return (
      <div className="relative h-12 w-24">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 bg-indigo-600 rounded-full animate-[particleWave_2s_ease-in-out_infinite]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`,
              opacity: 0.8,
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Render loader based on type
  function renderLoader(type) {
    switch (type) {
      // Spinners
      case "basic":
        return renderBasicLoader();
      case "comet":
        return renderCometLoader();
      case "roundedHeadComet":
        return renderRoundedHeadCometLoader();
      case "counterArcs":
        return renderCounterArcsLoader();
      case "circularTube":
        return renderCircularTubeLoader();
      case "dualRing":
        return renderDualRingLoader();
      case "ripple":
        return renderRippleLoader();
      case "spinnerRing":
        return renderSpinnerRingLoader();
      case "eclipse":
        return renderEclipseLoader();
      case "hourglass":
        return renderHourglassLoader();
      case "foldingCube":
        return renderFoldingCubeLoader();
      case "rotatingSquare":
        return renderRotatingSquareLoader();

      // Bars
      case "materialUI":
        return renderMaterialUILoader();
      case "progressBar":
        return renderProgressBarLoader();
      case "gradientBar":
        return renderGradientBarLoader();
      case "stripedBar":
        return renderStripedBarLoader();
      case "steppedBar":
        return renderSteppedBarLoader();
      case "indeterminateBar":
        return renderIndeterminateBarLoader();
      case "loadingBar":
        return renderLoadingBarLoader();
      case "skeletonBar":
        return renderSkeletonBarLoader();
      case "elasticBar":
        return renderElasticBarLoader();
      case "staggeredBars":
        return renderStaggeredBarsLoader();
      case "equalizer":
        return renderEqualizerLoader();
      case "verticalBars":
        return renderVerticalBarsLoader();

      // Dots
      case "bouncingDots":
        return renderBouncingDotsLoader();
      case "fadingDots":
        return renderFadingDotsLoader();
      case "flashingDots":
        return renderFlashingDotsLoader();
      case "scalingDots":
        return renderScalingDotsLoader();
      case "rotatingDots":
        return renderRotatingDotsLoader();
      case "chasingDots":
        return renderChasingDotsLoader();
      case "dotWave":
        return renderDotWaveLoader();
      case "dotCarousel":
        return renderDotCarouselLoader();
      case "dotElastic":
        return renderDotElasticLoader();
      case "dotFloating":
        return renderDotFloatingLoader();
      case "dotRevolution":
        return renderDotRevolutionLoader();
      case "dotWindmill":
        return renderDotWindmillLoader();

      // Pulses
      case "pulseRing":
        return renderPulseRingLoader();
      case "doublePulse":
        return renderDoublePulseLoader();
      case "multiPulse":
        return renderMultiPulseLoader();
      case "heartbeat":
        return renderHeartbeatLoader();
      case "radar":
        return renderRadarLoader();
      case "sonar":
        return renderSonarLoader();
      case "ripplePulse":
        return renderRipplePulseLoader();
      case "breathing":
        return renderBreathingLoader();
      case "beacon":
        return renderBeaconLoader();
      case "pulseDots":
        return renderPulseDotsLoader();
      case "pulseSquare":
        return renderPulseSquareLoader();
      case "pulseCircle":
        return renderPulseCircleLoader();

      // Waves
      case "sineWave":
        return renderSineWaveLoader();
      case "waveDots":
        return renderWaveDotsLoader();
      case "waveBars":
        return renderWaveBarsLoader();
      case "liquidWave":
        return renderLiquidWaveLoader();
      case "circularWave":
        return renderCircularWaveLoader();
      case "oscillatingWave":
        return renderOscillatingWaveLoader();
      case "frequencyWave":
        return renderFrequencyWaveLoader();
      case "rippleWave":
        return renderRippleWaveLoader();
      case "flowingWave":
        return renderFlowingWaveLoader();
      case "gradientWave":
        return renderGradientWaveLoader();
      case "bubbleWave":
        return renderBubbleWaveLoader();
      case "particleWave":
        return renderParticleWaveLoader();

      default:
        return renderBasicLoader();
    }
  }

  // =============== CODE GENERATION FUNCTIONS ===============

  // Generate HTML code for a loader
  function generateHTMLCode(type) {
    switch (type) {
      // Spinners
      case "basic":
        return `<div class="loader-container">
  <div class="ui-element"></div>
  <div class="spinner-container">
    <div class="spinner-base"></div>
    <div class="spinner"></div>
  </div>
  <div class="ui-element"></div>
</div>`;

      case "comet":
        return `<div class="comet-spinner"></div>`;

      case "roundedHeadComet":
        return `<div class="rounded-head-comet"></div>`;

      case "counterArcs":
        return `<div class="counter-arcs-container">
  <div class="arc arc-1"></div>
  <div class="arc arc-2"></div>
</div>`;

      case "circularTube":
        return `<div class="circular-tube-container">
  <div class="pulse-ring"></div>
  <div class="tube-ring"></div>
</div>`;

      case "dualRing":
        return `<div class="dual-ring"></div>`;

      case "ripple":
        return `<div class="ripple-container">
  <div class="ripple ripple-1"></div>
  <div class="ripple ripple-2"></div>
</div>`;

      // Bars
      case "materialUI":
        return `<div class="material-loader">
  <div class="material-loader-bar"></div>
</div>`;

      case "progressBar":
        return `<div class="progress-bar-container">
  <div class="progress-bar"></div>
</div>`;

      case "bouncingDots":
        return `<div class="bouncing-dots-container">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>`;

      case "fadingDots":
        return `<div class="fading-dots-container">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>`;

      // Add more cases for other loaders

      default:
        return `<div class="loader"></div>`;
    }
  }

  // Generate CSS code for a loader
  function generateCSSCode(type) {
    switch (type) {
      // Spinners
      case "basic":
        return `.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.ui-element {
  width: 8rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: #e0e7ff;
  margin: 0.5rem 0;
}

.spinner-container {
  position: relative;
}

.spinner-base {
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  border: 4px solid #c7d2fe;
}

.spinner {
  position: absolute;
  top: 0;
  left: 0;
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  border-top: 4px solid #4f46e5;
  border-left: 4px solid #4f46e5;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`;

      case "comet":
        return `.comet-spinner {
  height: 4rem;
  width: 4rem;
  border-radius: 9999px;
  border: 4px solid #c7d2fe;
  border-top: 4px solid #4f46e5;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`;

      case "roundedHeadComet":
        return `.rounded-head-comet {
  height: 4rem;
  width: 4rem;
  border-radius: 9999px;
  border: 4px solid #c7d2fe;
  border-right: 4px solid #4f46e5;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`;

      case "counterArcs":
        return `.counter-arcs-container {
  position: relative;
  height: 4rem;
  width: 4rem;
}

.arc {
  position: absolute;
  inset: 0;
  height: 4rem;
  width: 4rem;
  border-radius: 9999px;
}

.arc-1 {
  border: 4px solid #c7d2fe;
  border-top: 4px solid #4f46e5;
  animation: spin 1s linear infinite;
}

.arc-2 {
  border: 4px solid transparent;
  border-bottom: 4px solid #4f46e5;
  animation: counterSpin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes counterSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}`;

      case "circularTube":
        return `.circular-tube-container {
  position: relative;
  height: 4rem;
  width: 4rem;
}

.pulse-ring {
  position: absolute;
  inset: 0;
  height: 4rem;
  width: 4rem;
  border-radius: 9999px;
  border: 4px solid #4f46e5;
  opacity: 0.25;
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.tube-ring {
  height: 4rem;
  width: 4rem;
  border-radius: 9999px;
  border: 4px solid #4f46e5;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}`;

      case "materialUI":
        return `.material-loader {
  width: 4rem;
  height: 0.25rem;
  background-color: #4f46e5;
  border-radius: 9999px;
  position: relative;
  overflow: hidden;
}

.material-loader-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 2rem;
  background-color: white;
  animation: materialLoader 1.5s infinite;
}

@keyframes materialLoader {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}`;

      case "progressBar":
        return `.progress-bar-container {
  width: 8rem;
  height: 0.5rem;
  background-color: #c7d2fe;
  border-radius: 9999px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: #4f46e5;
  animation: progressBar 2s ease-in-out infinite;
}

@keyframes progressBar {
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}`;

      case "bouncingDots":
        return `.bouncing-dots-container {
  display: flex;
  gap: 0.5rem;
}

.dot {
  height: 0.75rem;
  width: 0.75rem;
  background-color: #4f46e5;
  border-radius: 9999px;
}

.dot:nth-child(1) {
  animation: bounce 0.6s infinite alternate 0.1s;
}

.dot:nth-child(2) {
  animation: bounce 0.6s infinite alternate 0.2s;
}

.dot:nth-child(3) {
  animation: bounce 0.6s infinite alternate 0.3s;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
}`;

      case "fadingDots":
        return `.fading-dots-container {
  display: flex;
  gap: 0.5rem;
}

.dot {
  height: 0.75rem;
  width: 0.75rem;
  background-color: #4f46e5;
  border-radius: 9999px;
}

.dot:nth-child(1) {
  animation: fade 1.5s infinite 0.1s;
}

.dot:nth-child(2) {
  animation: fade 1.5s infinite 0.3s;
}

.dot:nth-child(3) {
  animation: fade 1.5s infinite 0.5s;
}

@keyframes fade {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
}`;

      // Add more cases for other loaders

      default:
        return `.loader {
  /* Default loader styles */
}`;
    }
  }

  // =============== PAGINATION LOGIC ===============

  // Logic to determine which page numbers to show
  const getPageNumbers = () => {
    const pageNumbers = [];

    // Always show first page
    pageNumbers.push(1);

    // Calculate start and end of the current window
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    // Adjust window to show 3 pages in the middle
    if (currentPage <= 3) {
      end = Math.min(5, totalPages - 1);
    } else if (currentPage >= totalPages - 2) {
      start = Math.max(2, totalPages - 4);
    }

    // Add ellipsis after first page if needed
    if (start > 2) {
      pageNumbers.push("...");
    }

    // Add pages in the middle
    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    // Add ellipsis before last page if needed
    if (end < totalPages - 1) {
      pageNumbers.push("...");
    }

    // Always show last page if there is more than one page
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  // Function to copy code to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setIsCopied(true);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="text-indigo-600 animate-spin h-6 w-6">
            <div className="h-3 w-3 rounded-full bg-indigo-600 opacity-75"></div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            CSS Loader Generator
          </h1>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-200 text-sm">
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

          <button className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-200 text-sm">
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
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span>Add to Favs</span>
          </button>

          <button className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-200 text-sm">
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
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>Report Bug</span>
          </button>
        </div>
      </header>

      {/* Back button */}
      <div className="mb-6">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      </div>

      {/* Category selector and counter */}
      <div className="flex justify-between items-center mb-6">
        <div className="w-64 relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white text-sm"
          >
            <span>
              {loaderCategories.find((cat) => cat.value === selectedCategory)
                ?.label || "Select Category"}
            </span>
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
              className={`h-4 w-4 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
              {loaderCategories.map((category) => (
                <button
                  key={category.value}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                    selectedCategory === category.value
                      ? "bg-indigo-50 text-indigo-600"
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(category.value);
                    setIsDropdownOpen(false);
                    setCurrentPage(1); // Reset to first page when changing category
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="text-gray-600">
          Total CSS Loader Count:{" "}
          <span className="font-semibold">{filteredLoaders.length}</span>
        </div>
      </div>

      {/* Loader grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {currentLoaders.map((loader) => (
          <div
            key={loader.id}
            className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center h-40 relative cursor-pointer"
            onMouseEnter={() => setHoveredLoaderId(loader.id)}
            onMouseLeave={() => setHoveredLoaderId(null)}
          >
            <div className="flex items-center justify-center h-full w-full">
              {renderLoader(loader.type)}
            </div>

            {hoveredLoaderId === loader.id && (
              <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center">
                <button
                  className="bg-white px-3 py-1 rounded-md shadow-sm hover:bg-indigo-50"
                  onClick={() => setSelectedLoader(loader)}
                >
                  View Code
                </button>
              </div>
            )}

            <div className="mt-2 text-sm text-center text-gray-600">
              {loader.name}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div className="flex items-center gap-1">
          {pageNumbers.map((page, index) =>
            page === "..." ? (
              <span key={`ellipsis-${index}`} className="px-2">
                ...
              </span>
            ) : (
              <button
                key={`page-${page}`}
                onClick={() => typeof page === "number" && setCurrentPage(page)}
                className={`h-8 w-8 flex items-center justify-center rounded-full ${
                  currentPage === page
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>

        <button
          onClick={() =>
            currentPage < totalPages && setCurrentPage(currentPage + 1)
          }
          disabled={currentPage === totalPages}
          className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Code Modal */}
      {selectedLoader && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-auto code-modal"
            ref={modalRef}
          >
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {selectedLoader.name} Code
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedLoader(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-gray-800">HTML</h3>
                  <button
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm ${
                      isCopied
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}
                    onClick={() =>
                      copyToClipboard(generateHTMLCode(selectedLoader.type))
                    }
                  >
                    {isCopied ? (
                      <>
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
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
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
                          <rect
                            x="9"
                            y="9"
                            width="13"
                            height="13"
                            rx="2"
                            ry="2"
                          />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        Copy HTML
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-auto">
                  <pre className="text-sm whitespace-pre-wrap">
                    {generateHTMLCode(selectedLoader.type)}
                  </pre>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-gray-800">CSS</h3>
                  <button
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm ${
                      isCopied
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}
                    onClick={() =>
                      copyToClipboard(generateCSSCode(selectedLoader.type))
                    }
                  >
                    {isCopied ? (
                      <>
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
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
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
                          <rect
                            x="9"
                            y="9"
                            width="13"
                            height="13"
                            rx="2"
                            ry="2"
                          />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        Copy CSS
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-auto">
                  <pre className="text-sm whitespace-pre-wrap">
                    {generateCSSCode(selectedLoader.type)}
                  </pre>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-200 flex justify-end">
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                onClick={() => setSelectedLoader(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
