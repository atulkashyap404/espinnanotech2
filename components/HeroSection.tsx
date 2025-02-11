"use client";

import { useState, useEffect } from "react";
import { ServiceCard } from "./ServiceCard";

const SERVICES = [
  { number: "", title: "Nanofibre\nSpinning\nTechnology", link: "/products/electrospinning" },
  { number: "", title: "Nanofibre\nMembrane\nTechnology", link: "/products/nanofibermembrane" },
  { number: "", title: "Nanofibre\nFunctional\nProducts", link: "/products/nanofibrefunctionalproducts" },
] as const;


export function HeroSection() {
  const [showContent, setShowContent] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    // Show content after 5 seconds
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    // Gradually increase overlay opacity
    const overlayTimer = setTimeout(() => {
      setOverlayOpacity(0.4);
    }, 2000);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(overlayTimer);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] px-4 md:px-6 py-12 overflow-hidden ">
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

    
      <div
        className={`relative z-20 max-w-7xl mx-auto text-white transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold mt-40">
          <span className="text-6xl md:text-7xl">Innovative</span>
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
      </div>
    </section>
  );
}









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