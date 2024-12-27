"use client";

import { AboutHero } from "@/components/about/AboutHero";
import { AboutContent } from "@/components/about/AboutContent";
import { AboutSlides } from "@/components/about/AboutSlides";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutContent />
      <AboutSlides />
    </main>
  );
}