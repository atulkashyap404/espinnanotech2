"use client";

import { useState, useEffect } from "react";
import { ServiceCard } from "./ServiceCard";
import { Cover } from "@/components/ui/cover";

// Updated to remove reliance on empty `number` field
// const SERVICES = [
//   { number: "", title: "Nanofiber Spinning\nTechnology", link: "/products/electrospinning" },
//   { number: "", title: "Nanofiber Membrane\nTechnology", link: "/products/nanofibermembrane" },
//   { number: "", title: "Nanofiber Functional\nProducts", link: "/products/nanofibrefunctionalproducts" },
// ] as const;

const VIDEO_POPUPS = [
  { text: "Spinning Hollow Fiber", delay: 5000 },
  { text: "Electrospinning Technology", delay: 7000 },
  { text: "Nanofiber Membrane Solutions", delay: 9000 },
  { text: "Advanced Filtration Systems", delay: 11000 },
];

export function HeroSection() {
  const [showContent, setShowContent] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [activePopup, setActivePopup] = useState(-1);

  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    const overlayTimer = setTimeout(() => {
      setOverlayOpacity(0.4);
    }, 2000);

    const popupTimers = VIDEO_POPUPS.map((popup, index) =>
      setTimeout(() => {
        setActivePopup(index);
      }, popup.delay)
    );

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(overlayTimer);
      popupTimers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="relative min-h-[65vh] px-4 md:px-6 py-4 overflow-hidden ">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/landing video simple.mp4" type="video/mp4" />
      </video>

      {/* Overlay with animated opacity */}
      <div
        className="absolute inset-0 bg-black z-10 transition-opacity duration-1000"
        style={{ opacity: overlayOpacity }}
      />

      {/* Popup headings that appear after 5 seconds */}
      <div className="absolute inset-0 z-[15] flex items-center justify-end pr-8 md:pr-16 pointer-events-none">
        <div className="flex flex-col items-end gap-3">
          {VIDEO_POPUPS.map((popup, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                activePopup >= index
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <span className="bg-red-600/90 backdrop-blur-sm text-white px-5 py-2 rounded-lg text-sm md:text-lg font-semibold shadow-lg inline-block">
                {popup.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`relative z-20 max-w-7xl mx-auto text-white transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold mt-40">
          <span className="text-6xl md:text-7xl">Innovative</span>
          <br />
          <span className="text-red-500"> Fiber Technology</span>
        </h1>
        <p className="text-gray-100 max-w-xl mb-12 pt-4">
          Our innovative solutions offer engineered nanofiber technology for
          various applications, enabling advanced material development and
          groundbreaking research.
        </p>
      </div>
    </section>
  );
}



















// "use client";

// import { useState, useEffect } from "react";
// import { ServiceCard } from "./ServiceCard";
// import { Cover } from "@/components/ui/cover";



// // { number: "", title: "Nanofiber\nSpinning\nTechnology", link: "/products/electrospinning" },
// // { number: "", title: "Nanofiber\nMembrane\nTechnology", link: "/products/nanofibermembrane" },
// // { number: "", title: "Nanofiber\nFunctional\nProducts", link: "/products/nanofibrefunctionalproducts" },

// const SERVICES = [
//   { number: "", title: "Nanofiber Spinning\nTechnology", link: "/products/electrospinning" },
//   { number: "", title: "Nanofiber Membrane\nTechnology", link: "/products/nanofibermembrane" },
//   { number: "", title: "Nanofiber Functional\nProducts", link: "/products/nanofibrefunctionalproducts" },
// ] as const;


// export function HeroSection() {
//   const [showContent, setShowContent] = useState(false);
//   const [overlayOpacity, setOverlayOpacity] = useState(0);

//   useEffect(() => {
//     // Show content after 5 seconds
//     const contentTimer = setTimeout(() => {
//       setShowContent(true);
//     }, 2000);

//     // Gradually increase overlay opacity
//     const overlayTimer = setTimeout(() => {
//       setOverlayOpacity(0.4);
//     }, 2000);

//     return () => {
//       clearTimeout(contentTimer);
//       clearTimeout(overlayTimer);
//     };
//   }, []);

//   return (
//     <section className="relative min-h-[90vh] px-4 md:px-6 py-12 overflow-hidden ">
//       {/* Video Background */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src="/videos/landing video simple.mp4" type="video/mp4" />
//       </video>

//       {/* Overlay with animated opacity */}
//       <div
//         className="absolute inset-0 bg-black z-10 transition-opacity duration-1000"
//         style={{ opacity: overlayOpacity }}
//       />

    
//       <div
//         className={`relative z-20 max-w-7xl mx-auto text-white transition-opacity duration-1000 ${
//           showContent ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <h1 className="text-4xl md:text-5xl font-bold mt-40">
//           {/* <span className="text-6xl md:text-7xl text-red-500">Innovative</span> */}
//           <span className="text-6xl md:text-7xl">Innovative</span>
//           <br />
//           {/* <Cover className="text-white">Fiber Technology</Cover> */}
//           <span className="text-red-500"> Fiber Technology</span>
//         </h1>
//         <p className="text-gray-100 max-w-xl mb-12 pt-4">
//           Our innovative solutions offer engineered nanofiber solutions for
//           various applications, enabling advanced material development and
//           groundbreaking research.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40 text-xl">
//           {SERVICES.map((service) => (
//             <ServiceCard
//               key={service.number}
//               {...service}
//               className={`transition-transform duration-1000 delay-${
//                 parseInt(service.number) * 200
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }









{/* Content with fade-in animation */}
      {/* <div
        className={`relative z-20 max-w-7xl mx-auto text-white transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold mt-40">
          Innovative
          <br />
          <span className="text-red-500">Fiber Technology</span>
        </h1>
        <p className="text-gray-100 max-w-xl mb-12">
          Our innovative solutions offer engineered nanofiber solutions for
          various applications, enabling advanced material development and
          groundbreaking research.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.number}
              {...service}
              className={`transition-transform duration-1000 delay-${
                parseInt(service.number) * 200
              }`}
            />
          ))}
        </div>
      </div> */}