"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GetStartedForm } from "./GetStartedForm";
import { BackgroundLines } from "@/components/ui/background-lines";

export function Footer() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <footer className="bg-black text-white min-h-[20vh] px-4 md:px-6 py-12 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
      {/* <BackgroundLines className="flex justify-center items-center "> */}
        <button 
          onClick={() => setIsFormOpen(true)}
          className="px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors text-lg font-semibold"
        >
          Get Started Today
        </button>
        {/* </BackgroundLines> */}
        <p className="text-gray-400 text-sm absolute bottom-4">
          © {new Date().getFullYear()} E-SPIN NANOTECH. All rights reserved. | 2025 
        </p>
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-2xl">
          <GetStartedForm />
        </DialogContent>
      </Dialog>
    </footer>
  );
}








// "use client";
// import React from "react";
// import { BackgroundLines } from "@/components/ui/background-lines";
// export function Footer() {
//   return (
//     <footer className="bg-neutral-800 text-white min-h-[10vh] px-4 md:px-6 py-12 relative">
      
//       <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
//       <BackgroundLines className="flex justify-center items-center ">
      
//         <button className="px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors text-lg font-semibold">
//           Get Started Today
//         </button>
//         </BackgroundLines>
//         <p className="text-gray-400 text-sm absolute bottom-4">
//           © {new Date().getFullYear()} E-SPIN NANOTECH Pvt. Ltd. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }