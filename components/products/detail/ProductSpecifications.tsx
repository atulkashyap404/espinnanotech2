"use client";

import { motion } from "framer-motion";

interface ProductSpecificationsProps {
  specifications: {
    category: string;
    items: {
      label: string;
      value: string;
    }[];
  }[];
}

export function ProductSpecifications({ specifications }: ProductSpecificationsProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Technical Specifications</h2>
      
      <div className="space-y-8">
        {specifications.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="bg-gray-50 rounded-xl p-6"
          >
            <h3 className="text-lg font-medium mb-4 text-blue-900">{category.category}</h3>
            <div className="grid grid-cols-1 gap-4">
              {category.items.map((spec, index) => (
                <div
                  key={spec.label}
                  className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
                >
                  <div className="text-gray-600">{spec.label}</div>
                  <div className="font-medium text-gray-900">{spec.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}












// "use client";

// import { motion } from "framer-motion";

// interface ProductSpecificationsProps {
//   specifications: {
//     category: string;
//     items: {
//       label: string;
//       value: string;
//     }[];
//   }[];
// }

// export function ProductSpecifications({ specifications }: ProductSpecificationsProps) {
//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-semibold">Specifications</h2>
      
//       <div className="space-y-8">
//         {specifications.map((category, categoryIndex) => (
//           <motion.div
//             key={category.category}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
//           >
//             <h3 className="text-lg font-medium mb-4">{category.category}</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {category.items.map((spec, index) => (
//                 <div
//                   key={spec.label}
//                   className="bg-gray-50 p-4 rounded-lg"
//                 >
//                   <div className="text-sm text-gray-600">{spec.label}</div>
//                   <div className="font-medium">{spec.value}</div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }