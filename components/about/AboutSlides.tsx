"use client";

import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";


const content = [
  {
    title: "Industry Leader",
    description:
      "Since the installation of our first inaugural machine in 2010, we have firmly established ourselves as industry leaders, setting benchmarks for excellence and innovation in nanofiber spinning and fabrication. Owing to our relentless pursuit of excellence, we continue to lead the way, shaping the future of nanotechnology.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/image/industry leader.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Customer Relationships",
    description:
      "We are dedicated to maintaining excellent customer relationships. Our team is committed to providing support that not only meets but exceeds expectations, fostering positive experiences at every interaction.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/image/customer relationship.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Global Business",
    description:
      "E-Spin Nanotech has established itself as a global business, with over 500 successful machine installations around the world. We are committed to providing continuous support and services to our customers across the globe. Our technology has been embraced by leading research institutions in India, including IITs and defense laboratories, and we have expanded our reach to international markets, including the USA, Russia and many more countries.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/image/globle bussiness.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Innovative Technology",
    description:
      "We have a diverse array of teams comprising scientists, engineers, and internal resources. This includes design verification centers, prototype capabilities, cutting-edge laboratories, and an advanced manufacturing technology group. These resources position us at the forefront of the industry, enabling us to develop groundbreaking solutions that not only meet but exceed the ever-evolving global filtration demands.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/image/inovative tech.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];


export function AboutSlides() {
  return (
    <section className="relative">
      
      <StickyScroll content={content} />
    
    </section>
  );
}