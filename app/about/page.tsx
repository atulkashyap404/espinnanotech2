"use client";

import { AboutHero } from "@/components/about/AboutHero";
import { AboutContent } from "@/components/about/AboutContent";
import { TimelineDemo } from "@/components/about/TimelineDemo";
import { DirectorMessage } from "@/components/about/DirectorMessage";
import { MissionSection } from "@/components/about/MissionSection";
import { WobbleCardDemo } from "@/components/about/WobbleCardDemo";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <DirectorMessage/>
      <WobbleCardDemo />
      <MissionSection/>
      <TimelineDemo />
    </main>
  );
}