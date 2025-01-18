"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  images: {
    url: string;
    alt: string;
  }[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative aspect-square rounded-2xl overflow-hidden  p-8"
      >
        <Image
          src={images[selectedImage].url}
          alt={images[selectedImage].alt}
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square rounded-lg overflow-hidden  p-2 transition-all ${
              selectedImage === index 
                ? "ring-2 ring-blue-400 scale-95" 
                : "hover:ring-2 hover:ring-blue-400/50"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}






















// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useState } from "react";

// interface ProductGalleryProps {
//   images: {
//     url: string;
//     alt: string;
//   }[];
// }

// export function ProductGallery({ images }: ProductGalleryProps) {
//   const [selectedImage, setSelectedImage] = useState(0);

//   return (
//     <div className="space-y-4">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="relative aspect-square rounded-2xl overflow-hidden"
//       >
//         <Image
//           src={images[selectedImage].url}
//           alt={images[selectedImage].alt}
//           fill
//           className="object-cover"
//         />
//       </motion.div>

//       <div className="grid grid-cols-4 gap-4">
//         {images.map((image, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectedImage(index)}
//             className={`relative aspect-square rounded-lg overflow-hidden ${
//               selectedImage === index ? "ring-2 ring-red-600" : ""
//             }`}
//           >
//             <Image
//               src={image.url}
//               alt={image.alt}
//               fill
//               className="object-cover"
//             />
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }