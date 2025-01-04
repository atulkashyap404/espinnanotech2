"use client";

import { motion } from "framer-motion";
import { AdvisorCard } from "@/components/about/advisory/AdvisorCard";

const ADVISORS = [
  {
    name: "Dr. Ashutosh Sharma",
    position: "Ex-Secretary, Department of Science and Technology, Government of India; Professor, Chemical Engineering Dept IIT",
    image: "/advisory/sharma.jpg"
  },
  {
    name: "Dr. Ashok Mishra",
    position: "Ex-Director, IIT Bombay",
    image: "/advisory/mishra.jpg"
  },
  {
    name: "Prof. Chandrashekhar Sharma",
    position: "Dean of R&D, IIT Hyderabad",
    image: "/advisory/Chandra_Shekhar_Sharma.jpeg"
  },
  {
    name: "Prof. Dipankar Bandyopadhyay",
    position: "Professor in Department of Chemical Engineering IIT Guwahati",
    image: "/advisory/Bandyopadhyay.jpeg"
  },
  {
    name: "Dr. Abhijit Majumder",
    position: "Associate Professor in the Department of Chemical Engineering, IIT Bombay",
    image: "/advisory/Abhijit_Majumder.jpeg"
  },
  {
    name: "Dr. Akhilesh Kumar Sahu",
    position: "Assistant Professor in Chemical Engineering, NIT Rourkela",
    image: "/advisory/Akhilesh_Sahu.jpeg"
  },
  {
    name: "Dr. Gaurav Sharma",
    position: "Associate Professor in Department of Chemical Engineering, IIT Roorkee",
    image: "/advisory/Gaurav_sharma.jpeg"
  },
  {
    name: "Dr. Ankur Verma",
    position: "Associate Professor in Department of Chemical Engineering & Technology, IIT BHU",
    image: "/advisory/Verma.jpeg"
  },
  {
    name: "Dr. HyeonSeok Oh",
    position: "Smart Sensor, NanoPatterning, Anti-microbial coatin",
    image: "/advisory/Dr_Oh.jpg"
  },
  {
    name: "Dr. Mudrika",
    position: "Associate Professor in the Department of Materials Science and Metallurgical Engineering, IIT Hyderabad",
    image: "/advisory/mudrika.jpeg"
  },
] as const;

export default function AdvisoryPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #000000 0%, #dc2626 50%, #7f1d1d 100%)'
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Scientific Advisory Committee
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Distinguished experts guiding our research and development
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-6"></div>
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ADVISORS.map((advisor, index) => (
            <AdvisorCard
              key={advisor.name}
              {...advisor}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </main>
  );
}