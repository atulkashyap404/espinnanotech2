"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AdvisorCardProps {
  name: string;
  position: string;
  image: string;
  index: number;
}

export function AdvisorCard({ name, position, image, index }: AdvisorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm">{position}</p>
      </div>
    </motion.div>
  );
}