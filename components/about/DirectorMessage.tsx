"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export function DirectorMessage() {
    return (
      <div className="min-h-[50vh] bg-muted/50 text-wrap">
        <div className="max-w-7xl mx-auto pl-168">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center"
          >
            {/* Text Area - Takes up more space as shown in the image */}
            <div className="lg:col-span-7 space-y-4 ">
              <h2 className="text-2xl md:text-3xl font-semibold">
              Director&apos;s Message
              </h2>
              <h2 className="text-2xl md:text-2xl font-semibold">
              E-Spin Nanotech Pvt. Ltd.
              </h2>
              <p className="text-lg text-muted-foreground ">
              At E-Spin Nanotech Pvt. Ltd., we are committed to pushing the boundaries of nanofiber technology and delivering cutting-edge solutions for industries spanning healthcare, filtration, energy, textiles, and beyond. Our journey, which began with a vision to bridge the gap between academic research and industrial applications, has evolved into a mission of innovation, sustainability, and excellence.
              </p>
              <p className="text-lg text-muted-foreground">
              As a pioneering force in electrospinning technology, we have continuously worked towards developing next-generation materials that contribute to a cleaner, healthier, and more sustainable future. Our state-of-the-art R&D capabilities, combined with our unwavering passion for technological advancement, have positioned us as a leader in nanotechnology-driven solutions.
              </p>
              <p className="text-lg text-muted-foreground">
              Our success is built on the dedication of our talented team, the trust of our partners, and our relentless pursuit of quality and innovation. As we expand our global presence, we remain committed to collaborative growth, strategic partnerships, and continuous improvement.
              </p>
              <p className="text-lg text-muted-foreground">
              I extend my heartfelt gratitude to our clients, researchers, and stakeholders who have been part of our journey. Together, we will continue to shape the future of nanotechnology and redefine possibilities.
              </p>
              <Button className="group bg-red-600">
                Dr. Sandip Patil{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <h2 className="text-xl md:text-xl">
              Director, E-Spin Nanotech Pvt. Ltd.
              </h2>
            </div>
  
            {/* Image Area - Takes up less space as shown in the image */}
            <div className="lg:col-span-5">
              <div className="relative h-[900px] rounded-lg overflow-hidden">
                <Image
                  src="/image/DSC_8601 (1).png"
                  alt="Creative team meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }