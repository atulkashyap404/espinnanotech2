"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

interface DirectorCardProps {
  name: string;
  position: string;
  description: string;
  image: string;
  linkedin?: string;
  email?: string;
  index: number;
}

export function DirectorCard({ 
  name, 
  position, 
  description, 
  image, 
  linkedin, 
  email,
  index 
}: DirectorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-fill transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 " />
        {/* bg-gradient-to-t from-black via-black/20 to-transparent */}
      </div>

      <div className="p-6 text-black">
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-red-500 font-medium mb-4">{position}</p>
        <p className="text-gray-400 text-sm mb-6 line-clamp-3">{description}</p>
        
        <div className="flex gap-4">
          {linkedin && (
            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-red-500 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {email && (
            <a 
              href={`mailto:${email}`}
              className="text-black hover:text-red-500 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}








// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Linkedin, Mail } from "lucide-react";

// interface DirectorCardProps {
//   name: string;
//   position: string;
//   description: string;
//   image: string;
//   linkedin?: string;
//   email?: string;
//   index: number;
// }

// export function DirectorCard({ 
//   name, 
//   position, 
//   description, 
//   image, 
//   linkedin, 
//   email,
//   index 
// }: DirectorCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="flex flex-col md:flex-row gap-8 items-start bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
//     >
//       <div className="relative w-full md:w-48 h-64 md:h-48 rounded-lg overflow-hidden shrink-0">
//         <Image
//           src={image}
//           alt={name}
//           fill
//           className="object-cover"
//         />
//       </div>
//       <div className="flex-1">
//         <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
//         <p className="text-red-600 font-medium mb-4">{position}</p>
//         <p className="text-gray-600 mb-4">{description}</p>
//         <div className="flex gap-4">
//           {linkedin && (
//             <a 
//               href={linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-red-600 transition-colors"
//             >
//               <Linkedin className="h-5 w-5" />
//             </a>
//           )}
//           {email && (
//             <a 
//               href={`mailto:${email}`}
//               className="text-gray-600 hover:text-red-600 transition-colors"
//             >
//               <Mail className="h-5 w-5" />
//             </a>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// }