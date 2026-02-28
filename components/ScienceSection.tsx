import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function ScienceSection() {
  return (
    <section className="px-4 min-h-[40vh] md:px-6 pt-8">
      {/* <BackgroundBeamsWithCollision> */}
      <div className="max-w-7xl mx-auto pt-12">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
              Our Expertise
            </span>
          </h2>
          <button className="relative px-6 py-3 font-bold text-white bg-black rounded-md group overflow-hidden">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 via-black to-red-600 opacity-0 group-hover:opacity-100 transition duration-300"></span>
            <span className="relative z-10 block transition-transform transform group-hover:scale-105">
              Connect with us
            </span>
            <div className="absolute inset-0 border-2 border-transparent rounded group-hover:border-red-600 transition-all duration-300"></div>
          </button>
        </div>

        <div className="relative">
          <div className="h-1 bg-gray-200 absolute top-4 left-0 right-0" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[1, 2, 3].map((step) => (
              <div key={step} className="pt-8">
                <div className="w-8 h-8 rounded-full bg-red-600 absolute top-0" />
                <p className="text-sm text-gray-600">
                  Advanced Scientific Instruments Filtration Systems Scientific
                  Consultancy and Services
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </BackgroundBeamsWithCollision> */}
    </section>
  );
}

// export function ScienceSection() {
//   return (
//     <section className="px-4 min-h-[60vh] md:px-6 py-12">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
//               The Science
//             </span>
//             <br />
//             Behind Our Services
//           </h2>
//           <button className="bg-black text-white px-6 py-2 rounded">
//             MAKE AN APPOINTMENT
//           </button>
//         </div>

//         <div className="relative">
//           <div className="h-1 bg-gray-200 absolute top-4 left-0 right-0" />
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
//             {[1, 2, 3].map((step) => (
//               <div key={step} className="pt-8">
//                 <div className="w-8 h-8 rounded-full bg-red-600 absolute top-0" />
//                 <p className="text-sm text-gray-600">
//                   At Right Nanofiber Technology, we are committed to empowering businesses with cutting-edge solutions that drive innovation and success.
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export function ScienceSection() {
//   return (
//     <section className="px-4 min-h-[60vh] md:px-6 py-12">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-12">
//           <h2 className="text-2xl font-bold">
//             The <span className="text-red-600">SCIENCE</span><br />
//             Behind Our Services
//           </h2>
//           <button className="bg-black text-white px-6 py-2 rounded">
//             MAKE AN APPOINTMENT
//           </button>
//         </div>

//         <div className="relative">
//           <div className="h-1 bg-gray-200 absolute top-4 left-0 right-0" />
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
//             {[1, 2, 3].map((step) => (
//               <div key={step} className="pt-8">
//                 <div className="w-8 h-8 rounded-full bg-red-600 absolute top-0" />
//                 <p className="text-sm text-gray-600">
//                   At Right Nanofiber Technology, we are committed to empowering businesses with cutting-edge solutions that drive innovation and success.
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
