import React from "react";
import { Cover } from "@/components/ui/cover";

export function VisionSection() {
  return (
    <div className="text-center max-w-7xl mx-auto mb-12">
      {/* Title "Mission" */}
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Vision
      </h1>

      {/* Red Horizontal Line */}
      <hr className="  border-red-500 mx-auto mb-6" />

      {/* Mission Statement */}
      <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-black via-black to-neutral-700 dark:from-black dark:via-white dark:to-white">
        Give <span className="text-red-500">me</span> text <span className="text-red-500"></span>Content<br />
        {/* sustainable and <Cover>Innovative Nanotech</Cover> Solutions */}
      </h2>
    </div>
  );
}
