import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function ExpertiseSection() {
  return (
    <section className="px-4 md:px-6 min-h-[40vh] py-4 bg-muted">
      {/* old code bg-gradient-to-r from-gray-50 to-gray-200  */}
      {/* <BackgroundBeamsWithCollision> */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left Image Section */}
            <div className="flex-1 relative group transition-transform duration-500 ease-in-out hover:scale-105">
              {/* Red Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 before:absolute before:inset-0 before:bg-black before:blur-2xl before:opacity-50 before:rounded-lg"></div>

              <Image
                src="/videos/nanofiber.png"
                alt="Nanofiber microscope view"
                width={600}
                height={400}
                className="rounded-lg shadow-lg relative"
              />
              {/* Subtle overlay effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
            </div>

            {/* Vertical Line Divider */}
          <div className="hidden md:flex self-stretch border-l-2 border-red-600"></div>

            {/* Right Content Section */}
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold mb-2 text-black tracking-wide">
                OUR <span className="text-red-600">EXPERTISE</span>
              </h2>
              <h3 className="text-2xl text-red-600 font-semibold mb-4 tracking-wide">
                Empowering Businesses with Nanofiber Technology
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At E-Spin Nanotech, we give you the framework to commercialize
                the power of nanofiber technology to create a business. In over
                15 years, we have helped multiple companies implement the
                technology for their business.
              </p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-md flex items-center gap-2 relative overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Hover effect */}
                <span className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="relative z-10 group-hover:scale-105 transition-transform">
                  Learn More
                </span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      {/* </BackgroundBeamsWithCollision> */}
    </section>
  );
}

// import { ArrowRight } from "lucide-react";
// import Image from "next/image";

// export function ExpertiseSection() {
//   return (
//     <section className="px-4 md:px-6 py-12 dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
//       {/* old code bg-gradient-to-r from-gray-50 to-gray-200  */}
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row gap-12 items-center">
//           {/* Left Image Section */}
//           <div className="flex-1 relative group transition-transform duration-500 ease-in-out hover:scale-105">
//             <Image
//               src="/videos/nanofiber.png"
//               alt="Nanofiber microscope view"
//               width={600}
//               height={400}
//               className="rounded-lg shadow-lg"
//             />
//             {/* Subtle overlay effect */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//           </div>

//           {/* Right Content Section */}
//           <div className="flex-1">
//             <h2 className="text-4xl font-extrabold mb-2 text-black tracking-wide">
//               OUR <span className="text-red-600">EXPERTISE</span>
//             </h2>
//             <h3 className="text-2xl text-red-600 font-semibold mb-4 tracking-wide">
//               Empowering Businesses with Nanofiber Technology
//             </h3>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               At Right Nanofiber, we give you the framework to commercialize the
//               power of nanofiber technology to create a business. In over 10
//               years, we have helped multiple companies implement the technology
//               for their business.
//             </p>
//             <button
//               className="bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 relative overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               {/* Hover effect */}
//               <span className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
//               <span className="relative z-10 group-hover:scale-105 transition-transform">
//                 Learn More
//               </span>
//               <ArrowRight
//                 className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
