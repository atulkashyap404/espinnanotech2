"use client";

import { motion } from "framer-motion";
import { DirectorCard } from "./DirectorCard";

const DIRECTORS = [
  {
    name: "Dr. Sandip Patil",
    position: "FOUNDER/DIRECTOR",
    image: "/image/sandip patil.png",
  },
  {
    name: "Mrs. Jagruti Patil",
    position: "DIRECTOR",
    image: "/image/JagrutiMa'am Pic.jpeg",
  },
  {
    name: "Dr. Sunil Dhole",
    position: "DIRECTOR",
    image: "/image/Sunil Dhole1.png",
  }
] as const;

export function DirectorsList() {
  return (
    <div className="flex flex-col gap-20 py-10">
      {DIRECTORS.map((director, index) => (
        <DirectorCard
          key={director.name + index}
          {...director}
          index={index}
          isRight={index === 1}
        />
      ))}
    </div>
  );
}











// "use client";

// import { motion } from "framer-motion";
// import { DirectorCard } from "./DirectorCard";

// const DIRECTORS = [
//   {
//     name: "Dr. Sandip Patil",
//     position: "FOUNDER/DIRECTOR",
//     description: " ",
//     image: "/image/sandip patil.png",
//     linkedin: "https://www.linkedin.com/in/dr-sandip-patil-87863814/",
//     email: "ashok.kumar@espinnanotech.com"
//   },
//   {
//     name: "Mrs. Jagruti Patil",
//     position: "DIRECTOR",
//     description: " ",
//     image: "/image/JagrutiMa'am Pic.jpeg",
//     linkedin: "https://linkedin.com",
//     email: "priya.singh@espinnanotech.com"
//   },
//   {
//     name: "Dr. Sunil Dhole",
//     position: "DIRECTOR",
//     description: "",
//     image: "/image/Sunil Dhole1.png",
//     linkedin: "https://www.linkedin.com/in/sunil-dhole-1521b021/",
//     email: "rajesh.patel@espinnanotech.com"
//   }
// ] as const;

// export function DirectorsList() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//       {DIRECTORS.map((director, index) => (
//         <DirectorCard
//           key={director.name}
//           {...director}
//           index={index}
//         />
//       ))}
//     </div>
//   );
// }












// "use client";

// import { motion } from "framer-motion";
// import { DirectorCard } from "./DirectorCard";

// const DIRECTORS = [
//   {
//     name: "Dr. Sandip Patil",
//     position: "FOUNDER/DIRECTOR",
//     description: " ",
//     image: "/image/sandip patil.png",
//     linkedin: "https://www.linkedin.com/in/dr-sandip-patil-87863814/",
//     email: "ashok.kumar@espinnanotech.com"
//   },
//   {
//     name: "Mrs. Jagruti Patil",
//     position: "DIRECTOR",
//     description: " ",
//     image: "/image/JagrutiMa'am Pic.jpeg",
//     linkedin: "https://linkedin.com",
//     email: "priya.singh@espinnanotech.com"
//   },
//   {
//     name: "Dr. Sunil Dhole",
//     position: "DIRECTOR",
//     description: " ",
//     image: "/image/Sunil Dhole1.png",
//     linkedin: "https://www.linkedin.com/in/sunil-dhole-1521b021/",
//     email: "rajesh.patel@espinnanotech.com"
//   }
// ] as const;

// export function DirectorsList() {
//   return (
//     <div className="space-y-8">
//       {DIRECTORS.map((director, index) => (
//         <DirectorCard
//           key={director.name}
//           {...director}
//           index={index}
//         />
//       ))}
//     </div>
//   );
// }