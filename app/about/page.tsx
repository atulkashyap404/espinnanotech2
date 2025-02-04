"use client";

import { AboutHero } from "@/components/about/AboutHero";
import { AboutContent } from "@/components/about/AboutContent";
import { TimelineDemo } from "@/components/about/TimelineDemo";
import { DirectorMessage } from "@/components/about/DirectorMessage";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <DirectorMessage/>
      <AboutContent />
      <TimelineDemo />
    </main>
  );
}