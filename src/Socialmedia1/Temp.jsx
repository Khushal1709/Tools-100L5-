// // App.jsx
// import React, { useState } from "react";

// const PLACEHOLDER_IMAGE =
//   "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png";

// export default function InstagramPhotoDownloader() {
//   const [url, setUrl] = useState("");
//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Simulate fetching photos from Instagram
//   const handleGetPhotos = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setPhotos([PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE]);
//       setLoading(false);
//     }, 1200);
//   };

//   // Simulate download
//   const handleDownload = (imgUrl, idx) => {
//     const link = document.createElement("a");
//     link.href = imgUrl;
//     link.download = `instagram-photo-${idx + 1}.jpg`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
//       <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative">
//         {/* Top-right Action Buttons */}
//         <div className="absolute top-0 right-0 flex space-x-2 mt-2 mr-2">
//           <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium shadow hover:bg-gray-200">
//             Share
//           </button>
//           <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium shadow hover:bg-gray-200">
//             Add to Favs
//           </button>
//           <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium shadow hover:bg-gray-200">
//             Report Bug
//           </button>
//         </div>

//         {/* Header */}
//         <div className="flex items-center mb-8 mt-8 w-full justify-center">
//           <img
//             src={PLACEHOLDER_IMAGE}
//             alt="Instagram Logo"
//             className="w-8 h-8 mr-2"
//           />
//           <h1 className="text-2xl items-start mr-100 font-bold text-gray-800">
//             Instagram Photo Downloader
//           </h1>
//         </div>

//         {/* Input Section */}
//         <div className="w-full bg-white rounded-lg shadow p-6 mb-6">
//           <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3">
//             <input
//               type="text"
//               className="flex-1 border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//               placeholder="e.g. https://www.instagram.com/p/CZpBXgogFSO/"
//               value={url}
//               onChange={(e) => setUrl(e.target.value)}
//             />
//             <button
//               className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full md:w-auto"
//               onClick={handleGetPhotos}
//               disabled={!url || loading}
//             >
//               {loading ? "Loading..." : "Get Photos"}
//             </button>
//           </div>
//           <p className="text-xs text-gray-500 mt-2">
//             *The post must be public for photos to be downloaded.
//           </p>
//         </div>

//         {/* Photo Cards */}
//         <div className="flex flex-col md:flex-row gap-6 w-full justify-center mb-8">
//           {[0, 1, 2].map((idx) => (
//             <div
//               key={idx}
//               className="w-60 h-72 bg-white rounded-lg shadow flex flex-col items-center justify-between p-4 mx-auto"
//             >
//               <div className="flex-1 flex items-center justify-center">
//                 {photos[idx] ? (
//                   <img
//                     src={photos[idx]}
//                     alt={`Instagram ${idx + 1}`}
//                     className="w-28 h-28 object-contain opacity-90"
//                   />
//                 ) : (
//                   <div className="w-28 h-28 flex items-center justify-center bg-gray-100 rounded">
//                     <svg
//                       className="w-16 h-16 text-gray-300"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <rect
//                         x="2"
//                         y="2"
//                         width="20"
//                         height="20"
//                         rx="5"
//                         strokeWidth="2"
//                       />
//                       <circle cx="12" cy="12" r="4" strokeWidth="2" />
//                     </svg>
//                   </div>
//                 )}
//               </div>
//               <button
//                 className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 font-medium shadow hover:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-400 transition"
//                 onClick={() => handleDownload(photos[idx], idx)}
//                 disabled={!photos[idx]}
//               >
//                 Download
//               </button>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

// import React, { useContext, useState, useRef, useEffect } from "react";
// // import html2canvas from 'html2canvas';
// import { RiCodeBlock } from "react-icons/ri";
// // import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// // import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import { MdOutlineContentPaste, MdShare } from "react-icons/md";
// import {
//     FaCheck,
//     FaRegCopy,
//     FaFacebookF,
//     FaTwitter,
//     FaLinkedinIn,
//     FaEnvelope,
//     FaCopy,
//     FaRegStar,
// } from "react-icons/fa6";

// import { FiAlertCircle } from 'react-icons/fi';
// import { FiShare2 } from "react-icons/fi";
// // import { FavoritesContext } from "../../Context/FavoriteContext";

// const LANGUAGES = [
//     { label: '1C', value: '1c' },
//     { label: 'ABNF', value: 'abnf' },
//     { label: 'Access logs', value: 'accesslog' },
//     { label: 'Ada', value: 'ada' },
//     { label: 'Arduino (C++ w/Arduino libs)', value: 'arduino' },
// ];

// const THEMES = [
//     { label: 'Android Studio - Dark', value: 'androidstudio' },
//     { label: 'A11y - Dark', value: 'a11y-dark' },
//     { label: 'A11y - Light', value: 'a11y-light' },
//     { label: 'Agate - Dark', value: 'agate' },
//     { label: 'An Old Hope - Dark', value: 'an-old-hope' },
//     { label: 'Arduino - Light', value: 'arduino-light' },
// ];

// const WATERMARK_TYPES = [
//     'Twitter Handle',
//     'Avatar + Text',
//     'Text Only',
// ];

// const LAYOUTS = ['Wide', 'Compact', 'Square'];

// const BG_TYPES = [
//     'Gradient',
//     'Solid Color',
//     'Image (Ready-to-use)',
//     'Image (Upload)',
//     'No Background',
// ];

// const FONT_FAMILIES = ['Syne Mono', 'Arial', 'Courier New', 'Times New Roman'];
// const FONT_SIZES = ['16px', '18px', '20px', '22px'];
// const TAB_SIZES = [2, 3, 4];
// const SHADOWS = ['None', 'Low', 'Medium', 'High'];
// const IMAGE_QUALITIES = ['Low (1x)', 'High (2x)'];

// export default function CodeToImageConverter({ id = "Code to Image Generator" }) {

//     const [position, setPosition] = useState('Bottom Right');
//     const [layout, setLayout] = useState('Wide');
//     const [language, setLanguage] = useState(LANGUAGES[0].value);
//     const [theme, setTheme] = useState(THEMES[0].value);
//     const [filename, setFilename] = useState('code-image.png');
//     const [code, setCode] = useState('// Write your code here');
//     const [showWatermark, setShowWatermark] = useState(true);
//     const [watermarkType, setWatermarkType] = useState(WATERMARK_TYPES[0]);
//     const [watermarkText, setWatermarkText] = useState('johndoe');
//     const [watermarkColor, setWatermarkColor] = useState('#ffffff');
//     const [bgType, setBgType] = useState(BG_TYPES[0]);
//     const [bgColor, setBgColor] = useState('#23272f');
//     const [bgGradient, setBgGradient] = useState('linear-gradient(135deg, #d8d8e8 0%, #b0b0d0 100%)');
//     const [avatar, setAvatar] = useState(null);
//     const [fontFamily, setFontFamily] = useState(FONT_FAMILIES[0]);
//     const [fontSize, setFontSize] = useState('20px');
//     const [tabSize, setTabSize] = useState(3);
//     const [shadow, setShadow] = useState('Medium');
//     const [imageQuality, setImageQuality] = useState('High (2x)');
//     const [padding, setPadding] = useState(138);
//     const [showLineNumbers, setShowLineNumbers] = useState(true);
//     const [showSettings, setShowSettings] = useState(false);
//     const codeRef = useRef(null);
//     const settingsRef = useRef(null);

//     // Dynamic class/style helpers
//     const getPositionClasses = () => {
//         const map = {
//             'Top Left': 'top-3 left-3',
//             'Top Right': 'top-3 right-3',
//             'Bottom Left': 'bottom-3 left-3',
//             'Bottom Right': 'bottom-3 right-3',
//         };
//         return map[position] || 'bottom-3 right-3';
//     };

//     const getLayoutClasses = () => {
//         if (layout === 'Compact') return 'max-w-[300px]';
//         if (layout === 'Square') return 'w-[400px] h-[400px]';
//         return 'min-w-[380px] max-w-[440px]'; // Wide
//     };

//     const getBgStyle = () => {
//         switch (bgType) {
//             case 'Gradient':
//                 return { background: bgGradient };
//             case 'Solid Color':
//                 return { background: bgColor };
//             case 'No Background':
//                 return { background: 'none' };
//             default:
//                 return { background: bgGradient };
//         }
//     };

//     const getShadowStyle = () => {
//         const shadowMap = {
//             'None': 'shadow-none',
//             'Low': 'shadow-sm',
//             'Medium': 'shadow-md',
//             'High': 'shadow-lg',
//         };
//         return shadowMap[shadow] || 'shadow-md';
//     };

//     const handleExport = async () => {
//         if (codeRef.current) {
//             const scale = imageQuality === 'High (2x)' ? 2 : 1;
//             const canvas = await html2canvas(codeRef.current, {
//                 backgroundColor: null,
//                 scale: scale
//             });
//             const link = document.createElement('a');
//             link.download = filename || 'code-image.png';
//             link.href = canvas.toDataURL();
//             link.click();
//         }
//     };

//     // Avatar upload handler
//     const handleAvatarUpload = (e) => {
//         if (e.target.files && e.target.files[0]) {
//             const reader = new FileReader();
//             reader.onload = (ev) => setAvatar(ev.target.result);
//             reader.readAsDataURL(e.target.files[0]);
//         }
//     };

//     // Close settings dropdown when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (settingsRef.current && !settingsRef.current.contains(event.target)) {
//                 setShowSettings(false);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     const [open, setOpen] = useState(false);
//     const [bugDescription, setBugDescription] = useState("");
//     const [shareOpen, setShareOpen] = useState(false);
//     const [activeTab, setActiveTab] = useState("tool");
//     const [isFavorite, setIsFavorite] = useState(false);

//     const onFavoriteToggle = () => {
//         const favorites = JSON.parse(localStorage.getItem("FavoriteTools") || "[]");
//         let newFavorites;

//         if (favorites.includes(id)) {
//             newFavorites = favorites.filter((favId) => favId !== id);
//             setIsFavorite(false);
//         } else {
//             newFavorites = [...favorites, id];
//             setIsFavorite(true);
//         }

//         localStorage.setItem("FavoriteTools", JSON.stringify(newFavorites));
//         updateFavorites();
//     };

//     useEffect(() => {
//         const favorites = JSON.parse(localStorage.getItem("FavoriteTools") || "[]");
//         setIsFavorite(favorites.includes(id));
//     }, [id]);

//     return (
//         <>
//             {/* Header */}
//             <div className="max-w-4xl mx-auto mt-8">
//                 <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
//                     <div className="flex items-center gap-3 mb-2 sm:mb-0">
//                         <span className="text-4xl text-indigo-400">
//                             <RiCodeBlock />
//                         </span>
//                         <h1 className="text-2xl font-bold text-gray-900 md:text-sm lg:text-2xl sm:text-lg">
//                             Code to Image Converter
//                         </h1>
//                     </div>
//                     <div className="flex flex-col w-full md:flex-row md:justify-center md:items-center md:gap-4 lg:justify-end lg:gap-2">
//                         <button
//                             onClick={() => setShareOpen(true)}
//                             className="flex items-center justify-center md:w-auto px-3 py-2 text-sm rounded-xl border border-indigo-500 bg-indigo-50 text-indigo-600 mb-2 md:mb-0 cursor-pointer"
//                         >
//                             <FiShare2 className="mr-2" size={18} />
//                             Share
//                         </button>
//                         <button
//                             className="flex items-center justify-center gap-2 w-full md:w-auto px-3 py-2 text-sm rounded-xl border border-indigo-500 bg-indigo-50 text-indigo-600 cursor-pointer hover:bg-indigo-100 transition"
//                             onClick={() => setOpen(true)}
//                         >
//                             <FiAlertCircle className="text-indigo-600 text-base" />
//                             Report Bug
//                         </button>
//                         <button
//                             onClick={onFavoriteToggle}
//                             className={`px-3 py-2 rounded-xl border text-sm mt-2 md:mt-0 ml-0 cursor-pointer ${isFavorite
//                                 ? "bg-indigo-100 border-indigo-600 text-indigo-700"
//                                 : "bg-indigo-50 border-indigo-500 text-indigo-600"
//                                 }`}
//                         >
//                             {isFavorite ? (
//                                 <>
//                                     <FaCheck className="inline-block mr-1" size={12} /> Added
//                                 </>
//                             ) : (
//                                 <>
//                                     <FaRegStar className="inline-block mr-1" size={12} /> Add to
//                                     Favorites
//                                 </>
//                             )}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Share Popup */}
//                 {shareOpen && (
//                     <div className="fixed inset-0 bg-black/30 z-50 flex justify-center items-center">
//                         <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full relative">
//                             <div className="flex justify-between mb-4 bg-indigo-50 p-1 rounded-xl">
//                                 <button
//                                     onClick={() => setActiveTab("tool")}
//                                     className={`w-1/2 px-4 py-2 rounded-xl font-semibold text-sm ${activeTab === "tool"
//                                         ? "bg-indigo-600 text-white"
//                                         : "text-indigo-600 hover:bg-indigo-600 hover:text-white"
//                                         }`}
//                                 >
//                                     ⚙️ Share Tool
//                                 </button>
//                                 <button
//                                     onClick={() => setActiveTab("home")}
//                                     className={`w-1/2 px-4 py-2 rounded-xl font-semibold text-sm ${activeTab === "home"
//                                         ? "bg-indigo-600 text-white"
//                                         : "text-indigo-600 hover:bg-indigo-600 hover:text-white"
//                                         }`}
//                                 >
//                                     🏠 Share 10015
//                                 </button>
//                             </div>
//                             <div className="text-center border border-gray-300 rounded-xl p-6">
//                                 <p className="text-sm mb-1 text-gray-500">
//                                     You are currently sharing:
//                                 </p>
//                                 <h2 className="text-xl font-semibold mb-5 text-gray-600">
//                                     {activeTab === "tool"
//                                         ? "Google Fonts Pair Finder"
//                                         : "10015 Tools"}
//                                 </h2>
//                                 <div className="flex justify-center mb-6">
//                                     <MdShare className="text-indigo-500 text-7xl" />
//                                 </div>
//                                 <div className="flex justify-center gap-4">
//                                     {[FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaCopy].map(
//                                         (Icon, i) => (
//                                             <button
//                                                 key={i}
//                                                 className="text-white bg-indigo-500 rounded-full w-10 h-10 flex items-center justify-center"
//                                             >
//                                                 <Icon />
//                                             </button>
//                                         )
//                                     )}
//                                 </div>
//                             </div>
//                             <button
//                                 className="absolute top-0 h-2 w-2 right-4 text-gray-600 text-lg cursor-pointer"
//                                 onClick={() => setShareOpen(false)}
//                             >
//                                 ✕
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {/* Bug Report Popup */}
//                 {open && (
//                     <div className="fixed inset-0 bg-black/30 z-20 flex justify-center items-center">
//                         <div className="bg-white max-w-md w-full p-6 rounded-2xl shadow-lg relative">
//                             <h2 className="text-xl font-bold mb-2">Bug Report</h2>
//                             <p className="text-sm mb-4">
//                                 <strong>Tool:</strong> Lorem Ipsum Generator
//                             </p>
//                             <label className="block text-sm mb-1" htmlFor="bugDescription">
//                                 Please describe the issue.
//                             </label>
//                             <textarea
//                                 id="bugDescription"
//                                 className="w-full p-3 border border-gray-300 rounded-xl text-base h-32 focus:outline-none focus:ring-2 focus:ring-indigo-300"
//                                 placeholder="Description*"
//                                 value={bugDescription}
//                                 onChange={(e) => setBugDescription(e.target.value)}
//                             />
//                             <div className="flex justify-end gap-3 mt-4">
//                                 <button
//                                     onClick={() => setOpen(false)}
//                                     className="px-4 py-2 bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-black rounded-lg"
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button
//                                     onClick={() => {
//                                         if (!bugDescription.trim()) {
//                                             alert("Please enter a description.");
//                                             return;
//                                         }
//                                         console.log("Bug description submitted:", bugDescription);
//                                         setOpen(false);
//                                         setBugDescription("");
//                                     }}
//                                     className="px-4 py-2 bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-black rounded-lg"
//                                 >
//                                     Submit
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Top Controls */}
//                 <div className="w-full max-w-5xl flex gap-3 items-center mb-4 relative">
//                     <select
//                         className="px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white text-gray-700"
//                         value={language}
//                         onChange={e => setLanguage(e.target.value)}
//                     >
//                         {LANGUAGES.map(lang => (
//                             <option key={lang.value} value={lang.value}>{lang.label}</option>
//                         ))}
//                     </select>
//                     <select
//                         className="px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white text-gray-700 flex items-center"
//                         value={theme}
//                         onChange={e => setTheme(e.target.value)}
//                     >
//                         {THEMES.map(t => (
//                             <option key={t.value} value={t.value}>{t.label}</option>
//                         ))}
//                     </select>
//                     <input
//                         className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white text-gray-700"
//                         placeholder="File Name"
//                         value={filename}
//                         onChange={e => setFilename(e.target.value)}
//                     />
//                     <div className="relative" ref={settingsRef}>
//                         <button
//                             className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 flex items-center gap-1"
//                             onClick={() => setShowSettings(!showSettings)}
//                         >
//                             <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
//                                 <rect width="24" height="24" rx="6" fill="#e5e7eb" />
//                                 <path d="M12 8v8m0 0l-4-4m4 4l4-4" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                             Settings
//                         </button>
//                         {showSettings && (
//                             <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-10">
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div>
//                                         <label className="block text-xs text-gray-500 mb-1">Font Family</label>
//                                         <select
//                                             className="w-full px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-700"
//                                             value={fontFamily}
//                                             onChange={e => setFontFamily(e.target.value)}
//                                         >
//                                             {FONT_FAMILIES.map(font => (
//                                                 <option key={font} value={font}>{font}</option>
//                                             ))}
//                                         </select>
//                                     </div>
//                                     <div>
//                                         <label className="block text-xs text-gray-500 mb-1">Font Size</label>
//                                         <select
//                                             className="w-full px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-700"
//                                             value={fontSize}
//                                             onChange={e => setFontSize(e.target.value)}
//                                         >
//                                             {FONT_SIZES.map(size => (
//                                                 <option key={size} value={size}>{size}</option>
//                                             ))}
//                                         </select>
//                                     </div>
//                                     <div>
//                                         <label className="block text-xs text-gray-500 mb-1">Tab Size</label>
//                                         <select
//                                             className="w-full px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-700"
//                                             value={tabSize}
//                                             onChange={e => setTabSize(e.target.value)}
//                                         >
//                                             {TAB_SIZES.map(size => (
//                                                 <option key={size} value={size}>{size}</option>
//                                             ))}
//                                         </select>
//                                     </div>
//                                     <div>
//                                         <label className="block text-xs text-gray-500 mb-1">Shadow</label>
//                                         <select
//                                             className="w-full px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-700"
//                                             value={shadow}
//                                             onChange={e => setShadow(e.target.value)}
//                                         >
//                                             {SHADOWS.map(shadow => (
//                                                 <option key={shadow} value={shadow}>{shadow}</option>
//                                             ))}
//                                         </select>
//                                     </div>
//                                     <div>
//                                         <label className="block text-xs text-gray-500 mb-1">Image Quality</label>
//                                         <select
//                                             className="w-full px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-700"
//                                             value={imageQuality}
//                                             onChange={e => setImageQuality(e.target.value)}
//                                         >
//                                             {IMAGE_QUALITIES.map(quality => (
//                                                 <option key={quality} value={quality}>{quality}</option>
//                                             ))}
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div className="mt-4">
//                                     <label className="block text-xs text-gray-500 mb-1">Padding: {padding}px</label>
//                                     <input
//                                         type="range"
//                                         min="50"
//                                         max="200"
//                                         value={padding}
//                                         onChange={e => setPadding(Number(e.target.value))}
//                                         className="w-full accent-indigo-600"
//                                     />
//                                 </div>
//                                 <div className="mt-4 flex items-center gap-4">
//                                     <label className="flex items-center gap-2 text-sm text-gray-700">
//                                         <input
//                                             type="checkbox"
//                                             checked={showLineNumbers}
//                                             onChange={() => setShowLineNumbers(!showLineNumbers)}
//                                             className="form-checkbox text-blue-600 accent-indigo-600"
//                                         />
//                                         Line Number
//                                     </label>
//                                     <a
//                                         href="https://10015.io"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="text-sm text-indigo-600 hover:underline"
//                                     >
//                                         Support 10015.io
//                                     </a>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 {/* Code Preview Area */}
//                 <div className="w-full max-w-5xl bg-white rounded-xl border border-gray-200 min-h-[400px] flex flex-col items-center justify-center relative mb-4">
//                     <div
//                         className={`mx-auto my-16 rounded-lg px-6 py-5 flex items-center relative ${getShadowStyle()} ${getLayoutClasses()}`}
//                         ref={codeRef}
//                         style={{
//                             ...getBgStyle(),
//                             padding: `${padding}px`,
//                         }}
//                     >
//                         {/* Mac window dots */}
//                         <div className="absolute left-4 top-3 flex gap-1.5">
//                             <span className="w-2.5 h-2.5 bg-red-400 rounded-full inline-block"></span>
//                             <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full inline-block"></span>
//                             <span className="w-2.5 h-2.5 bg-green-400 rounded-full inline-block"></span>
//                         </div>
//                         <div className="flex flex-col w-full">
//                             <textarea
//                                 className="w-full bg-transparent resize-none outline-none border-none"
//                                 style={{
//                                     fontFamily: fontFamily,
//                                     fontSize: fontSize,
//                                     color: '#a3be8c',
//                                     background: 'transparent',
//                                     tabSize: tabSize,
//                                 }}
//                                 value={code}
//                                 onChange={e => setCode(e.target.value)}
//                                 rows={8}
//                             />
//                             <SyntaxHighlighter
//                                 language={language}
//                                 style={themes[theme] || themes['androidstudio']}
//                                 customStyle={{
//                                     background: 'none',
//                                     margin: 0,
//                                     padding: 0,
//                                     fontSize: fontSize,
//                                     fontFamily: fontFamily,
//                                 }}
//                                 showLineNumbers={showLineNumbers}
//                             >
//                                 {code}
//                             </SyntaxHighlighter>
//                         </div>
//                         {/* Watermark */}
//                         {showWatermark && (
//                             <div className={`absolute flex items-center gap-1 ${getPositionClasses()}`}>
//                                 {watermarkType !== 'Text Only' && avatar && (
//                                     <img src={avatar} alt="avatar" className="w-6 h-6 rounded-full" />
//                                 )}
//                                 <span className="font-bold ml-1" style={{ color: watermarkColor }}>{watermarkText}</span>
//                             </div>
//                         )}
//                     </div>
//                     {/* Watermark toggle */}
//                     <div className="absolute left-8 bottom-8 flex items-center gap-2">
//                         <input
//                             type="checkbox"
//                             checked={showWatermark}
//                             onChange={() => setShowWatermark(v => !v)}
//                             className="form-checkbox text-blue-600 accent-indigo-600"
//                         />
//                         <span className="text-gray-700 text-sm">Add Your Watermark</span>
//                     </div>
//                     {/* Layout Options */}
//                     <div className="absolute right-8 bottom-8 flex items-center gap-4 text-gray-500 text-sm">
//                         {LAYOUTS.map(opt => (
//                             <label key={opt} className="flex items-center gap-1 cursor-pointer">
//                                 <input
//                                     type="radio"
//                                     name="layout"
//                                     className="form-radio accent-indigo-600"
//                                     checked={layout === opt}
//                                     onChange={() => setLayout(opt)}
//                                 />
//                                 {opt}
//                             </label>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Watermark & Background Settings */}
//                 <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl p-6 mb-4 flex flex-col gap-4">
//                     <div className="flex gap-4 flex-wrap">
//                         <div>
//                             <label className="block text-xs text-gray-500 mb-1">Position</label>
//                             <select
//                                 className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                 value={position}
//                                 onChange={e => setPosition(e.target.value)}
//                             >
//                                 <option value="Top Left">Top Left</option>
//                                 <option value="Top Right">Top Right</option>
//                                 <option value="Bottom Left">Bottom Left</option>
//                                 <option value="Bottom Right">Bottom Right</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label className="block text-xs text-gray-500 mb-1">Watermark Type</label>
//                             <select
//                                 className="px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-700"
//                                 value={watermarkType}
//                                 onChange={e => setWatermarkType(e.target.value)}
//                             >
//                                 {WATERMARK_TYPES.map(type => (
//                                     <option key={type}>{type}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div>
//                             <label className="block text-xs text-gray-500 mb-1">Avatar</label>
//                             <input
//                                 type="file"
//                                 accept="image/*"
//                                 className="px-3 py-1 border border-gray-200 rounded-lg text-gray-400 bg-gray-100 text-sm"
//                                 onChange={handleAvatarUpload}
//                                 disabled={watermarkType === 'Text Only'}
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-xs text-gray-500 mb-1">Username/URL</label>
//                             <input
//                                 className="px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-700"
//                                 value={watermarkText}
//                                 onChange={e => setWatermarkText(e.target.value)}
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-xs text-gray-500 mb-1">Font Color</label>
//                             <input
//                                 type="color"
//                                 value={watermarkColor}
//                                 className="w-8 h-8 rounded border border-gray-200"
//                                 onChange={e => setWatermarkColor(e.target.value)}
//                             />
//                         </div>
//                     </div>
//                     <div>
//                         <label className="block text-xs text-gray-500 mb-1">Background Type</label>
//                         <select
//                             className="px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-700"
//                             value={bgType}
//                             onChange={e => setBgType(e.target.value)}
//                         >
//                             {BG_TYPES.map(type => (
//                                 <option key={type} value={type}>{type}</option>
//                             ))}
//                         </select>
//                         {bgType === 'Solid Color' && (
//                             <input
//                                 type="color"
//                                 value={bgColor}
//                                 className="ml-2 w-8 h-8 rounded border border-gray-200"
//                                 onChange={e => setBgColor(e.target.value)}
//                             />
//                         )}
//                         {bgType === 'Gradient' && (
//                             <input
//                                 type="text"
//                                 value={bgGradient}
//                                 className="ml-2 px-2 py-1 rounded border border-gray-200 text-sm"
//                                 onChange={e => setBgGradient(e.target.value)}
//                                 placeholder="CSS gradient"
//                             />
//                         )}
//                     </div>
//                 </div>

//                 {/* Export Button */}
//                 <button
//                     onClick={handleExport}
//                     className="w-full max-w-5xl mt-1 px-8 py-3 bg-indigo-600 text-white rounded-xl text-lg font-semibold hover:bg-indigo-700 transition"
//                 >
//                     Export Image
//                 </button>
//                 {/* <Comment /> */}
//             </div>
//         </>
//     );
// }

// import React, { useState, useRef } from 'react';
// import { Share, Heart, Flag, Settings, Upload, Download } from 'lucide-react';

// // Map theme names to Tailwind utility classes
// const themeClassMap = {
//   'Devibeans - Dark': {
//     container: 'bg-gray-900',
//     text: 'text-gray-300',
//     filename: 'text-white',
//     border: 'border-gray-700',
//   },
//   'GitHub Light': {
//     container: 'bg-gray-100',
//     text: 'text-gray-800',
//     filename: 'text-gray-900',
//     border: 'border-gray-300',
//   },
//   'Monokai': {
//     container: 'bg-[#272822]',
//     text: 'text-[#f8f8f2]',
//     filename: 'text-[#a6e22e]',
//     border: 'border-[#75715e]',
//   },
//   'Dracula': {
//     container: 'bg-[#282a36]',
//     text: 'text-[#f8f8f2]',
//     filename: 'text-[#bd93f9]',
//     border: 'border-[#44475a]',
//   },
//   'One Dark Pro': {
//     container: 'bg-[#282c34]',
//     text: 'text-[#abb2bf]',
//     filename: 'text-[#61afef]',
//     border: 'border-[#3e4451]',
//   },
// };

// const CodeToImageConverter = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState('Awk');
//   const [selectedTheme, setSelectedTheme] = useState('Devibeans - Dark');
//   const [fileName, setFileName] = useState('Hello.html');
//   const [code, setCode] = useState(`johndddsfdfdfdfddfoe

// sdfdsfdfsdfsaffdfdfdf`);
//   const [showWatermark, setShowWatermark] = useState(true);
//   const [watermarkPosition, setWatermarkPosition] = useState('Top Left');
//   const [watermarkType, setWatermarkType] = useState('Twitter Hand');
//   const [username, setUsername] = useState('johndddsfdfdfdfd');
//   const [fontColor, setFontColor] = useState('#2a2a2a');
//   const [backgroundType, setBackgroundType] = useState('Image (Upload)');
//   const [previewMode, setPreviewMode] = useState('Wide');
//   const [showSettings, setShowSettings] = useState(false);

//   const codeRef = useRef(null);

//   const languages = ['Awk', 'JavaScript', 'Python', 'Java', 'C++', 'HTML', 'CSS', 'TypeScript'];
//   const themes = Object.keys(themeClassMap);
//   const positions = ['Top Left', 'Top Right', 'Bottom Left', 'Bottom Right'];
//   const watermarkTypes = ['Twitter Hand', 'GitHub', 'LinkedIn', 'Custom'];
//   const backgroundTypes = ['Image (Upload)', 'Gradient', 'Solid Color', 'None'];
//   const previewModes = ['Wide', 'Compact', 'Square'];

//   const handleExportImage = () => {
//     // Implementation for exporting image
//     console.log('Exporting image...');
//   };

//   const handleShare = () => {
//     console.log('Sharing...');
//   };

//   const handleAddToFavorites = () => {
//     console.log('Added to favorites');
//   };

//   const handleReportBug = () => {
//     console.log('Reporting bug...');
//   };

//   // Get current theme classes
//   const theme = themeClassMap[selectedTheme];

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6 bg-white rounded-lg p-4 shadow-sm">
//           <div className="flex items-center space-x-3">
//             <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
//               <span className="text-white font-bold">◊</span>
//             </div>
//             <h1 className="text-xl font-semibold text-gray-800">Code to Image Converter</h1>
//           </div>
//           <div className="flex items-center space-x-2">
//             <button
//               onClick={handleShare}
//               className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
//             >
//               <Share size={16} />
//               <span className="text-sm">Share</span>
//             </button>
//             <button
//               onClick={handleAddToFavorites}
//               className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
//             >
//               <Heart size={16} />
//               <span className="text-sm">Add to Favs</span>
//             </button>
//             <button
//               onClick={handleReportBug}
//               className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
//             >
//               <Flag size={16} />
//               <span className="text-sm">Report Bug</span>
//             </button>
//           </div>
//         </div>

//         {/* Settings Panel */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Highlight Language</label>
//             <select
//               value={selectedLanguage}
//               onChange={(e) => setSelectedLanguage(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             >
//               {languages.map(lang => (
//                 <option key={lang} value={lang}>{lang}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
//             <select
//               value={selectedTheme}
//               onChange={(e) => setSelectedTheme(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             >
//               {themes.map(theme => (
//                 <option key={theme} value={theme}>{theme}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">File Name</label>
//             <input
//               type="text"
//               value={fileName}
//               onChange={(e) => setFileName(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>

//           <div className="flex items-end">
//             <button
//               onClick={() => setShowSettings(!showSettings)}
//               className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors w-full justify-center"
//             >
//               <Settings size={16} />
//               <span>Settings</span>
//             </button>
//           </div>
//         </div>

//         {/* Code Editor and Preview */}
//         <div className="bg-white rounded-lg shadow-sm mb-6">
//           <div className="p-6">
//             {/* Code Preview Area */}
//             <div
//               ref={codeRef}
//               className={`${theme.container} rounded-lg p-6 mb-4 min-h-64 transition-colors duration-300`}
//             >
//               <div className="flex items-center space-x-2 mb-4">
//                 <div className="flex space-x-1">
//                   <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                   <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                 </div>
//                 <div className="flex items-center space-x-2 ml-4">
//                   <div className="w-4 h-4 bg-orange-500 rounded"></div>
//                   <span className={`${theme.filename} text-sm`}>{fileName}</span>
//                 </div>
//               </div>
//               <div className={`${theme.text} font-mono text-sm whitespace-pre-wrap`}>
//                 {code}
//               </div>
//             </div>

//             {/* Preview Mode Selector */}
//             <div className="flex items-center space-x-4 mb-4">
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   id="watermark"
//                   checked={showWatermark}
//                   onChange={(e) => setShowWatermark(e.target.checked)}
//                   className="rounded"
//                 />
//                 <label htmlFor="watermark" className="text-sm text-gray-700">Add Your Watermark</label>
//               </div>

//               <div className="flex space-x-2">
//                 {previewModes.map(mode => (
//                   <button
//                     key={mode}
//                     onClick={() => setPreviewMode(mode)}
//                     className={`px-3 py-1 rounded text-sm transition-colors ${
//                       previewMode === mode
//                         ? 'bg-blue-500 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {mode}
//                   </button>
//                 ))}
//               </div>

//               <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm">
//                 <span>Fullscreen Preview</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Watermark Settings */}
//         {showWatermark && (
//           <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Watermark Settings</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
//                 <select
//                   value={watermarkPosition}
//                   onChange={(e) => setWatermarkPosition(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 >
//                   {positions.map(pos => (
//                     <option key={pos} value={pos}>{pos}</option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Watermark Type</label>
//                 <select
//                   value={watermarkType}
//                   onChange={(e) => setWatermarkType(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 >
//                   {watermarkTypes.map(type => (
//                     <option key={type} value={type}>{type}</option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Avatar</label>
//                 <button className="w-full p-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center space-x-2">
//                   <Upload size={16} />
//                   <span className="text-sm">Upload</span>
//                 </button>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Username/URL</label>
//                 <input
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Font Color</label>
//                 <div className="flex items-center space-x-2">
//                   <input
//                     type="color"
//                     value={fontColor}
//                     onChange={(e) => setFontColor(e.target.value)}
//                     className="w-8 h-8 border border-gray-300 rounded"
//                   />
//                   <input
//                     type="text"
//                     value={fontColor}
//                     onChange={(e) => setFontColor(e.target.value)}
//                     className="flex-1 p-2 border border-gray-300 rounded-md text-sm"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Background Settings and Export */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-lg shadow-sm p-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Background Type</label>
//                   <select
//                     value={backgroundType}
//                     onChange={(e) => setBackgroundType(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     {backgroundTypes.map(type => (
//                       <option key={type} value={type}>{type}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Custom Background Image</label>
//                   <button className="w-full p-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center space-x-2">
//                     <Upload size={16} />
//                     <span className="text-sm">Click to upload</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <button
//               onClick={handleExportImage}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
//             >
//               <Download size={18} />
//               <span>Export Image</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CodeToImageConverter;

// import React, { useState, useRef } from 'react';
// import { Share, Heart, Flag, Settings, Upload, Download } from 'lucide-react';
// import { FileIcon, defaultStyles } from 'react-file-icon';

// const themeClassMap = {
//   'Devibeans - Dark': {
//     container: 'bg-gray-900',
//     text: 'text-gray-300',
//     filename: 'text-white',
//     border: 'border-gray-700',
//   },
//   'GitHub Light': {
//     container: 'bg-gray-100',
//     text: 'text-gray-800',
//     filename: 'text-gray-900',
//     border: 'border-gray-300',
//   },
//   'Monokai': {
//     container: 'bg-[#272822]',
//     text: 'text-[#f8f8f2]',
//     filename: 'text-[#a6e22e]',
//     border: 'border-[#75715e]',
//   },
//   'Dracula': {
//     container: 'bg-[#282a36]',
//     text: 'text-[#f8f8f2]',
//     filename: 'text-[#bd93f9]',
//     border: 'border-[#44475a]',
//   },
//   'One Dark Pro': {
//     container: 'bg-[#282c34]',
//     text: 'text-[#abb2bf]',
//     filename: 'text-[#61afef]',
//     border: 'border-[#3e4451]',
//   },
// };

// function getFileExtension(fileName) {
//   const match = fileName.match(/\.([a-zA-Z0-9]+)$/);
//   return match ? match[1].toLowerCase() : '';
// }

// function getIconStyle(extension) {
//   return defaultStyles[extension] || {};
// }

// const CodeToImageConverter = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState('Awk');
//   const [selectedTheme, setSelectedTheme] = useState('Devibeans - Dark');
//   const [fileName, setFileName] = useState('Hello.html');
//   const [code, setCode] = useState(`johndddsfdfdfdfddfoe\nsdfdsfdfsdfsaffdfdfdf`);
//   const [showWatermark, setShowWatermark] = useState(true);
//   const [watermarkPosition, setWatermarkPosition] = useState('Top Left');
//   const [watermarkType, setWatermarkType] = useState('Twitter Hand');
//   const [username, setUsername] = useState('johndddsfdfdfdfd');
//   const [fontColor, setFontColor] = useState('#2a2a2a');
//   const [backgroundType, setBackgroundType] = useState('Image (Upload)');
//   const [previewMode, setPreviewMode] = useState('Wide');

//   const codeRef = useRef(null);
//   const fileExtension = getFileExtension(fileName);
//   const iconStyle = getIconStyle(fileExtension);
//   const theme = themeClassMap[selectedTheme];

//   const languages = ['Awk', 'JavaScript', 'Python', 'Java', 'C++', 'HTML', 'CSS', 'TypeScript'];
//   const themes = Object.keys(themeClassMap);
//   const positions = ['Top Left', 'Top Right', 'Bottom Left', 'Bottom Right'];
//   const watermarkTypes = ['Twitter Hand', 'GitHub', 'LinkedIn', 'Custom'];
//   const backgroundTypes = ['Image (Upload)', 'Gradient', 'Solid Color', 'None'];
//   const previewModes = ['Wide', 'Compact', 'Square'];

//   // Handler functions remain the same as previous version
//   const handleExportImage = () => console.log('Exporting image...');
//   const handleShare = () => console.log('Sharing...');
//   const handleAddToFavorites = () => console.log('Added to favorites');
//   const handleReportBug = () => console.log('Reporting bug...');

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header Section */}
//         <div className="flex items-center justify-between mb-6 bg-white rounded-lg p-4 shadow-sm">
//           <div className="flex items-center space-x-3">
//             <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
//               <span className="text-white font-bold">◊</span>
//             </div>
//             <h1 className="text-xl font-semibold text-gray-800">Code to Image Converter</h1>
//           </div>
//           <div className="flex items-center space-x-2">
//             <button onClick={handleShare} className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors">
//               <Share size={16} /><span className="text-sm">Share</span>
//             </button>
//             <button onClick={handleAddToFavorites} className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors">
//               <Heart size={16} /><span className="text-sm">Add to Favs</span>
//             </button>
//             <button onClick={handleReportBug} className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors">
//               <Flag size={16} /><span className="text-sm">Report Bug</span>
//             </button>
//           </div>
//         </div>

//         {/* Settings Panel */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Highlight Language</label>
//             <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//               {languages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
//             <select value={selectedTheme} onChange={(e) => setSelectedTheme(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//               {themes.map(theme => <option key={theme} value={theme}>{theme}</option>)}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">File Name</label>
//             <input type="text" value={fileName} onChange={(e) => setFileName(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
//           </div>

//           <div className="flex items-end">
//             <button onClick={() => setShowSettings(!showSettings)} className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors w-full justify-center">
//               <Settings size={16} /><span>Settings</span>
//             </button>
//           </div>
//         </div>

//         {/* Code Preview Area */}
//         <div className="bg-white rounded-lg shadow-sm mb-6">
//           <div className="p-6">
//             <div ref={codeRef} className={`${theme.container} rounded-lg p-6 mb-4 min-h-64 transition-colors duration-300`}>
//               <div className="flex items-center space-x-2 mb-4">
//                 <div className="flex space-x-1">
//                   <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                   <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                 </div>
//                 <div className="flex items-center space-x-2 ml-4">
//                   {fileExtension && (
//                     <span className="w-6 h-6 flex items-center">
//                       <FileIcon extension={fileExtension} {...iconStyle} />
//                     </span>
//                   )}
//                   <span className={`${theme.filename} text-sm`}>{fileName}</span>
//                 </div>
//               </div>
//               <div className={`${theme.text} font-mono text-sm whitespace-pre-wrap`}>
//                 {code}
//               </div>
//             </div>

//             {/* Preview Mode Selector */}
//             <div className="flex items-center space-x-4 mb-4">
//               <div className="flex items-center space-x-2">
//                 <input type="checkbox" id="watermark" checked={showWatermark} onChange={(e) => setShowWatermark(e.target.checked)} className="rounded" />
//                 <label htmlFor="watermark" className="text-sm text-gray-700">Add Your Watermark</label>
//               </div>
//               <div className="flex space-x-2">
//                 {previewModes.map(mode => (
//                   <button key={mode} onClick={() => setPreviewMode(mode)} className={`px-3 py-1 rounded text-sm transition-colors ${previewMode === mode ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
//                     {mode}
//                   </button>
//                 ))}
//               </div>
//               <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm">
//                 <span>Fullscreen Preview</span>
//               </button>
//             </div>
//           </div>
//         </div>

//       {showWatermark && (
//           <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Watermark Settings</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
//                 <select
//                   value={watermarkPosition}
//                   onChange={(e) => setWatermarkPosition(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 >
//                   {positions.map(pos => (
//                     <option key={pos} value={pos}>{pos}</option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Watermark Type</label>
//                 <select
//                   value={watermarkType}
//                   onChange={(e) => setWatermarkType(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 >
//                   {watermarkTypes.map(type => (
//                     <option key={type} value={type}>{type}</option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Avatar</label>
//                 <button className="w-full p-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center space-x-2">
//                   <Upload size={16} />
//                   <span className="text-sm">Upload</span>
//                 </button>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Username/URL</label>
//                 <input
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Font Color</label>
//                 <div className="flex items-center space-x-2">
//                   <input
//                     type="color"
//                     value={fontColor}
//                     onChange={(e) => setFontColor(e.target.value)}
//                     className="w-8 h-8 border border-gray-300 rounded"
//                   />
//                   <input
//                     type="text"
//                     value={fontColor}
//                     onChange={(e) => setFontColor(e.target.value)}
//                     className="flex-1 p-2 border border-gray-300 rounded-md text-sm"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//         {/* Background Settings and Export */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-lg shadow-sm p-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Background Type</label>
//                   <select
//                     value={backgroundType}
//                     onChange={(e) => setBackgroundType(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     {backgroundTypes.map(type => (
//                       <option key={type} value={type}>{type}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Custom Background Image</label>
//                   <button className="w-full p-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center space-x-2">
//                     <Upload size={16} />
//                     <span className="text-sm">Click to upload</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <button
//               onClick={handleExportImage}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
//             >
//               <Download size={18} />
//               <span>Export Image</span>
//             </button>
//           </div>
//         </div>
//         </div>
//     </div>
//   );
// };

// export default CodeToImageConverter;

import React, { useState, useRef, useEffect } from "react";
import {
  Share,
  Heart,
  Flag,
  Settings,
  Upload,
  Download,
  Trash2,
} from "lucide-react";
import { FileIcon, defaultStyles } from "react-file-icon";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  dracula,
  duotoneLight,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import html2canvas from "html2canvas";

// Map UI themes to syntax highlighter themes
const syntaxThemeMap = {
  "Devibeans - Dark": oneDark,
  "GitHub Light": duotoneLight,
  Monokai: atomDark,
  Dracula: dracula,
  "One Dark Pro": oneDark,
};

// UI theme mapping
const themeClassMap = {
  "Devibeans - Dark": {
    container: "bg-gray-900",
    text: "text-gray-300",
    filename: "text-white",
    border: "border-gray-700",
  },
  "GitHub Light": {
    container: "bg-gray-100",
    text: "text-gray-800",
    filename: "text-gray-900",
    border: "border-gray-300",
  },
  Monokai: {
    container: "bg-[#272822]",
    text: "text-[#f8f8f2]",
    filename: "text-[#a6e22e]",
    border: "border-[#75715e]",
  },
  Dracula: {
    container: "bg-[#282a36]",
    text: "text-[#f8f8f2]",
    filename: "text-[#bd93f9]",
    border: "border-[#44475a]",
  },
  "One Dark Pro": {
    container: "bg-[#282c34]",
    text: "text-[#abb2bf]",
    filename: "text-[#61afef]",
    border: "border-[#3e4451]",
  },
};

// Map UI language names to syntax highlighter language keys
const languageMap = {
  Awk: "awk",
  JavaScript: "javascript",
  Python: "python",
  Java: "java",
  "C++": "cpp",
  HTML: "html",
  CSS: "css",
  TypeScript: "typescript",
};

function getFileExtension(fileName) {
  const match = fileName.match(/\.([a-zA-Z0-9]+)$/);
  return match ? match[1].toLowerCase() : "";
}

function getIconStyle(extension) {
  return defaultStyles[extension] || {};
}

// Responsive preview mode classes (updated for square)
const previewModeClasses = {
  Wide: "w-full max-w-5xl mx-auto",
  Compact: "w-full max-w-2xl mx-auto",
  Square:
    "mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square relative flex items-center justify-center",
};

// Watermark position styles
const watermarkPositionStyles = {
  "Top Left": "top-4 left-4",
  "Top Right": "top-4 right-4",
  "Bottom Left": "bottom-4 left-4",
  "Bottom Right": "bottom-4 right-4",
};

// Watermark type icons/styles
const watermarkTypeIcons = {
  "Twitter Hand": "🐦",
  GitHub: "🐙",
  LinkedIn: "💼",
  Custom: "⭐",
};

// Shadow styles
const shadowStyles = {
  None: "",
  Soft: "shadow-lg",
  Medium: "shadow-xl",
  Hard: "shadow-2xl",
};

const CodeToImageConverter = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("JavaScript");
  const [selectedTheme, setSelectedTheme] = useState("Devibeans - Dark");
  const [fileName, setFileName] = useState("Hello.js");
  const [code, setCode] = useState(
    `function helloWorld() {\n  console.log('Hello, world!');\n}`
  );
  const [showWatermark, setShowWatermark] = useState(true);
  const [watermarkPosition, setWatermarkPosition] = useState("Bottom Left");
  const [watermarkType, setWatermarkType] = useState("Twitter Hand");
  const [username, setUsername] = useState("johndddsfdfdfdfd");
  const [fontColor, setFontColor] = useState("#ffffff");
  const [backgroundType, setBackgroundType] = useState("Solid Color");
  const [backgroundColor, setBackgroundColor] = useState("#1a1a2e");
  const [gradientStart, setGradientStart] = useState("#667eea");
  const [gradientEnd, setGradientEnd] = useState("#764ba2");
  const [customBackgroundImage, setCustomBackgroundImage] = useState(null);
  const [previewMode, setPreviewMode] = useState("Wide");
  const [showSettings, setShowSettings] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [avatarImage, setAvatarImage] = useState(null);
  const [isExporting, setIsExporting] = useState(false);

  // New settings from the image
  const [fontFamily, setFontFamily] = useState("Space Mono");
  const [fontSize, setFontSize] = useState(15);
  const [tabSize, setTabSize] = useState(3);
  const [shadow, setShadow] = useState("Soft");
  const [imageQuality, setImageQuality] = useState("High");
  const [padding, setPadding] = useState(40);
  const [showLineNumbers, setShowLineNumbers] = useState(true);

  const previewRef = useRef(null);
  const fileInputRef = useRef(null);
  const backgroundFileInputRef = useRef(null);

  // --- Robust Fullscreen logic with all vendor prefixes ---
  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(
        Boolean(
          document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        )
      );
    }
    document.addEventListener("fullscreenchange", onFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onFullscreenChange);
    document.addEventListener("mozfullscreenchange", onFullscreenChange);
    document.addEventListener("MSFullscreenChange", onFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", onFullscreenChange);
      document.removeEventListener("mozfullscreenchange", onFullscreenChange);
      document.removeEventListener("MSFullscreenChange", onFullscreenChange);
    };
  }, []);

  const handleFullscreen = () => {
    const el = previewRef.current;
    if (!el) return;
    if (!isFullscreen) {
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
      else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
      else if (el.msRequestFullscreen) el.msRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
    }
  };

  const handleDeleteCode = () => {
    setCode("");
  };

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackgroundImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCustomBackgroundImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const triggerBackgroundUpload = () => {
    backgroundFileInputRef.current?.click();
  };

  const getExportScale = () => {
    switch (imageQuality) {
      case "Low":
        return 1;
      case "Medium":
        return 1.5;
      case "High":
        return 2;
      case "Ultra":
        return 3;
      default:
        return 2;
    }
  };

  // THIS FUNCTION HANDLES THE EXPORT AND DOWNLOAD
  const handleExportImage = async () => {
    if (!previewRef.current) return;

    setIsExporting(true);
    try {
      const canvas = await html2canvas(previewRef.current, {
        backgroundColor: null,
        scale: getExportScale(),
        logging: false,
        useCORS: true,
      });

      const link = document.createElement("a");
      link.download = `${fileName.replace(/\.[^/.]+$/, "")}-code-image.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error("Export failed:", error);
      alert("Export failed. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  const getBackgroundStyle = () => {
    switch (backgroundType) {
      case "Solid Color":
        return { backgroundColor };
      case "Gradient":
        return {
          background: `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
        };
      case "Image (Upload)":
        return customBackgroundImage
          ? {
              backgroundImage: `url(${customBackgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : { backgroundColor };
      case "None":
        return { backgroundColor: "transparent" };
      default:
        return { backgroundColor };
    }
  };

  const languages = Object.keys(languageMap);
  const themes = Object.keys(themeClassMap);
  const positions = ["Top Left", "Top Right", "Bottom Left", "Bottom Right"];
  const watermarkTypes = ["Twitter Hand", "GitHub", "LinkedIn", "Custom"];
  const backgroundTypes = [
    "Solid Color",
    "Gradient",
    "Image (Upload)",
    "None",
  ];
  const previewModes = ["Wide", "Compact", "Square"];
  const fontFamilies = [
    "Space Mono",
    "Fira Code",
    "JetBrains Mono",
    "Source Code Pro",
    "Monaco",
    "Consolas",
  ];
  const shadowOptions = ["None", "Soft", "Medium", "Hard"];
  const qualityOptions = ["Low", "Medium", "High", "Ultra"];

  const theme = themeClassMap[selectedTheme];
  const syntaxTheme = syntaxThemeMap[selectedTheme];
  const fileExtension = getFileExtension(fileName);
  const iconStyle = getIconStyle(fileExtension);

  // Watermark component
  const WatermarkOverlay = () => {
    if (!showWatermark) return null;
    return (
      <div
        className={`absolute ${watermarkPositionStyles[watermarkPosition]} z-10 flex items-center space-x-2 px-2 py-1 rounded opacity-80`}
        style={{
          color: fontColor,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(4px)",
        }}
      >
        {avatarImage ? (
          <img
            src={avatarImage}
            alt="Avatar"
            className="w-6 h-6 rounded-full object-cover"
          />
        ) : (
          <span className="text-lg">{watermarkTypeIcons[watermarkType]}</span>
        )}
        <span className="text-sm font-medium" style={{ color: fontColor }}>
          {username}
        </span>
      </div>
    );
  };

  // Responsive preview wrapper for Square mode
  const PreviewWrapper = ({ children }) => {
    if (previewMode !== "Square") {
      return (
        <div
          className={previewModeClasses[previewMode]}
          style={{ padding: `${padding}px` }}
        >
          {children}
        </div>
      );
    }
    // Square mode: wrapper ensures square aspect and responsive sizing
    return (
      <div
        className={previewModeClasses.Square}
        style={{
          padding: `${padding / 2}px`,
          minWidth: 220,
          minHeight: 220,
          maxWidth: "100vw",
          maxHeight: "70vw",
        }}
      >
        <div
          ref={previewRef}
          className={`
            relative rounded-lg w-full h-full transition-all duration-300 overflow-auto
            ${shadowStyles[shadow]}
            ${
              isFullscreen
                ? "w-screen h-screen max-w-none max-h-none fixed top-0 left-0 z-50"
                : ""
            }
          `}
          style={{
            ...getBackgroundStyle(),
            ...(isFullscreen ? { margin: 0, borderRadius: 0 } : {}),
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <WatermarkOverlay />
          <div className="flex items-center space-x-2 mb-4 mt-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              {fileExtension && (
                <span className="w-6 h-6 flex items-center">
                  <FileIcon extension={fileExtension} {...iconStyle} />
                </span>
              )}
              <span className={`${theme.filename} text-sm`}>{fileName}</span>
            </div>
          </div>
          <SyntaxHighlighter
            language={languageMap[selectedLanguage] || "text"}
            style={syntaxTheme}
            customStyle={{
              background: "transparent",
              fontSize: fontSize,
              fontFamily:
                fontFamily === "Space Mono"
                  ? "Space Mono, monospace"
                  : fontFamily,
              margin: 0,
              padding: 0,
              minHeight: "120px",
              height: isFullscreen ? "80vh" : "auto",
              tabSize: tabSize,
              flex: 1,
              overflow: "auto",
            }}
            showLineNumbers={showLineNumbers}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6 bg-white rounded-lg p-3 sm:p-4 shadow-sm gap-2">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold">◊</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-800">
              Code to Image Converter
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {}}
              className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
            >
              <Share size={16} />
              <span className="text-sm">Share</span>
            </button>
            <button
              onClick={() => {}}
              className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
            >
              <Heart size={16} />
              <span className="text-sm">Add to Favs</span>
            </button>
            <button
              onClick={() => {}}
              className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
            >
              <Flag size={16} />
              <span className="text-sm">Report Bug</span>
            </button>
          </div>
        </div>

        {/* Settings Panel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Highlight Language
            </label>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Theme
            </label>
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {themes.map((theme) => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              File Name
            </label>
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors w-full justify-center"
            >
              <Settings size={16} />
              <span>Settings</span>
            </button>
          </div>
        </div>

        {/* Advanced Settings Panel */}
        {showSettings && (
          <div className="bg-white rounded-lg shadow-sm p-3 sm:p-6 mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
              Advanced Settings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Font Family
                </label>
                <select
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {fontFamilies.map((font) => (
                    <option key={font} value={font}>
                      {font}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Font Size
                </label>
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(parseInt(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {[10, 12, 14, 15, 16, 18, 20, 22, 24].map((size) => (
                    <option key={size} value={size}>
                      {size}px
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tab Size
                </label>
                <select
                  value={tabSize}
                  onChange={(e) => setTabSize(parseInt(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {[2, 3, 4, 6, 8].map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Shadow
                </label>
                <select
                  value={shadow}
                  onChange={(e) => setShadow(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {shadowOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image Quality
                </label>
                <select
                  value={imageQuality}
                  onChange={(e) => setImageQuality(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {qualityOptions.map((quality) => (
                    <option key={quality} value={quality}>
                      {quality}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Padding
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="20"
                    max="100"
                    step="5"
                    value={padding}
                    onChange={(e) => setPadding(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-sm text-gray-600 w-12">
                    {padding}px
                  </span>
                </div>
              </div>
              <div className="flex items-end">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="lineNumbers"
                    checked={showLineNumbers}
                    onChange={(e) => setShowLineNumbers(e.target.checked)}
                    className="rounded"
                  />
                  <label
                    htmlFor="lineNumbers"
                    className="text-sm text-gray-700"
                  >
                    Line Numbers
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Code Editor and Preview */}
        <div className="bg-white rounded-lg shadow-sm mb-4 sm:mb-6">
          <div className="p-3 sm:p-6">
            {/* Code Editor */}
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-2 gap-2">
                <label className="block text-sm font-medium text-gray-700">
                  Code Editor
                </label>
                <button
                  onClick={handleDeleteCode}
                  className="flex items-center space-x-1 px-3 py-1.5 text-sm text-red-600 hover:text-red-800 hover:bg-red-100 rounded-md transition-colors"
                >
                  <Trash2 size={16} />
                  <span>Delete Code</span>
                </button>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-48 sm:h-64 p-3 sm:p-4 border border-gray-300 rounded-md font-mono text-sm resize-y focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your code here..."
                style={{
                  fontFamily:
                    fontFamily === "Space Mono"
                      ? "Space Mono, monospace"
                      : fontFamily,
                  fontSize: `${fontSize}px`,
                  tabSize: tabSize,
                }}
              />
            </div>
            {/* Preview */}
            <PreviewWrapper>
              {previewMode !== "Square" && (
                <div
                  ref={previewRef}
                  className={`
                    relative rounded-lg p-3 sm:p-6 mb-4 min-h-64 transition-all duration-300 overflow-auto
                    ${shadowStyles[shadow]}
                    ${
                      isFullscreen
                        ? "w-screen h-screen max-w-none max-h-none fixed top-0 left-0 z-50"
                        : ""
                    }
                  `}
                  style={{
                    ...getBackgroundStyle(),
                    ...(isFullscreen ? { margin: 0, borderRadius: 0 } : {}),
                  }}
                >
                  <WatermarkOverlay />
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      {fileExtension && (
                        <span className="w-6 h-6 flex items-center">
                          <FileIcon extension={fileExtension} {...iconStyle} />
                        </span>
                      )}
                      <span className={`${theme.filename} text-sm`}>
                        {fileName}
                      </span>
                    </div>
                  </div>
                  <SyntaxHighlighter
                    language={languageMap[selectedLanguage] || "text"}
                    style={syntaxTheme}
                    customStyle={{
                      background: "transparent",
                      fontSize: fontSize,
                      fontFamily:
                        fontFamily === "Space Mono"
                          ? "Space Mono, monospace"
                          : fontFamily,
                      margin: 0,
                      padding: 0,
                      minHeight: "200px",
                      height: isFullscreen ? "80vh" : "auto",
                      tabSize: tabSize,
                    }}
                    showLineNumbers={showLineNumbers}
                  >
                    {code}
                  </SyntaxHighlighter>
                </div>
              )}
            </PreviewWrapper>
            {/* Preview Mode Buttons */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="watermark"
                  checked={showWatermark}
                  onChange={(e) => setShowWatermark(e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="watermark" className="text-sm text-gray-700">
                  Add Your Watermark
                </label>
              </div>
              {previewModes.map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setPreviewMode(mode)}
                  className={`px-4 py-1.5 rounded font-medium text-sm transition-colors
                    ${
                      previewMode === mode
                        ? "bg-blue-600 text-white shadow"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }
                    focus:outline-none`}
                  disabled={isFullscreen}
                >
                  {mode}
                </button>
              ))}
              <button
                type="button"
                onClick={handleFullscreen}
                className={`ml-3 text-blue-600 hover:text-blue-800 text-sm font-medium bg-transparent border-0 p-0`}
                disabled={isExporting}
              >
                {isFullscreen ? "Fullscreen Preview" : ""}
              </button>
            </div>
          </div>
        </div>

        {/* Watermark Settings */}
        {showWatermark && (
          <div className="bg-white rounded-lg shadow-sm p-3 sm:p-6 mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
              Watermark Settings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position
                </label>
                <select
                  value={watermarkPosition}
                  onChange={(e) => setWatermarkPosition(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {positions.map((pos) => (
                    <option key={pos} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Watermark Type
                </label>
                <select
                  value={watermarkType}
                  onChange={(e) => setWatermarkType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {watermarkTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Avatar
                </label>
                <button
                  onClick={triggerFileUpload}
                  className="w-full p-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center space-x-2"
                >
                  <Upload size={16} />
                  <span className="text-sm">Upload</span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username/URL
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Font Color
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={fontColor}
                    onChange={(e) => setFontColor(e.target.value)}
                    className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={fontColor}
                    onChange={(e) => setFontColor(e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Background Settings and Export */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-3 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Background Type
                  </label>
                  <select
                    value={backgroundType}
                    onChange={(e) => setBackgroundType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {backgroundTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Custom Background Image
                  </label>
                  <button
                    onClick={triggerBackgroundUpload}
                    className="w-full p-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center space-x-2"
                  >
                    <Upload size={16} />
                    <span className="text-sm">Click to upload</span>
                  </button>
                  <input
                    ref={backgroundFileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleBackgroundImageUpload}
                    className="hidden"
                  />
                </div>
              </div>
              {/* Additional Background Options */}
              {backgroundType === "Solid Color" && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Background Color
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-10 h-10 border border-gray-300 rounded cursor-pointer"
                    />
                    <input
                      type="text"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}
              {backgroundType === "Gradient" && (
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gradient Start
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="color"
                        value={gradientStart}
                        onChange={(e) => setGradientStart(e.target.value)}
                        className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={gradientStart}
                        onChange={(e) => setGradientStart(e.target.value)}
                        className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gradient End
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="color"
                        value={gradientEnd}
                        onChange={(e) => setGradientEnd(e.target.value)}
                        className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={gradientEnd}
                        onChange={(e) => setGradientEnd(e.target.value)}
                        className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <button
              onClick={handleExportImage}
              disabled={isExporting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
            >
              <Download size={18} />
              <span>{isExporting ? "Exporting..." : "Export Image"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeToImageConverter;


