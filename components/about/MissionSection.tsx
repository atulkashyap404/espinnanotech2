import React from "react";
import { Cover } from "@/components/ui/cover";

export function MissionSection() {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-black via-black to-neutral-700 dark:from-black dark:via-white dark:to-white     ">
      To <span className="text-red-500">Enhance</span> life across the <span className="text-red-500">Globe</span> with<br />sustainable and <Cover>Innovative Nanotech</Cover> Solutions
      </h1>
    </div>
  );
}
