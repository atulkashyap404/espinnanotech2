"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Publication {
  id: number;
  year: number;
  title: string;
  authors: string[];
  link: string;
}

const PUBLICATIONS: Publication[] = [
  {
    id: 1,
    year: 2023,
    title: "Structurally stable polyvinyl alcohol/sodium alginate-based optimally designed electrospun mats as mechanistically robust controlled-urea-release systems",
    authors: [
      "Krishna Priyadarshini Das",
      "Deepika Sharma",
      "Bhabani K. Satapathy"
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0926669022017034"
  },
  {
    id: 2,
    year: 2023,
    title: "Facile synthesis of electrospun antibacterial bioactive glass based micronanofibre (ABGmnf) for exalted wound healing: In vitro and in vivo studies",
    authors: [
      "Payal Roy",
      "Rupam Saha",
      "Suman Saha",
      "Debolina Dattaray",
      "T.K. Mandal",
      "Noha ElShazly",
      "Mona K. Marei",
      "Jui Chakraborty"
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0254058423005825"
  },
  {
    id: 3,
    year: 2023,
    title: "A combinatorial approach to the elastic response of electrospun mats: Architectural framework and single fiber properties",
    authors: [
      "Danvendra Singh",
      "Apurv Sibal",
      "Deepika Sharma",
      "Sumit Sharma",
      "Dániel Sebok",
      "Bhabani K. Satapathy",
      "Parikshit Goswami",
      "Akos KukoveczAmit",
      "Rawal"
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0167663622002484"
  },
  {
    id: 4,
    year: 2023,
    title: "Thermally crosslinked electrospun nanofibrous mat from chrome-tanned solid wastes for cationic dye adsorption in wastewater treatment",
    authors: [
      "Abrar A. Sitab",
      "Fatema Tujjohra",
      "Taslim Ur Rashid",
      "Mohammed Mizanur",
      "Rahman"
      
    ],
    link: "https://www.sciencedirect.com/science/article/pii/S2666790823000265"
  },
  {
    id: 5,
    year: 2023,
    title: "Structurally stable and surface-textured polylactic acid/copolymer/poly (?-caprolactone) blend-based electrospun constructs with tunable hydroxyapatite responsiveness",
    authors: [
      "Deepika Sharma",
      "Ahana Banerjee",
      "Jayanta Bhattacharyya",
      "Bhabani K. Satapathy"
      
      
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0927776522006531"
  },
  {
    id: 6,
    year: 2023,
    title: "Immobilization and Release of Platelet-Rich Plasma from Modified Nanofibers Studied by Advanced X-ray Photoelectron Spectroscopy Analyses",
    authors: [
      "Anton Manakhov",
      "Elizaveta Permyakova",
      "Anastasiya O. Solovieva",
      "Natalya A SitnikovaPh.",
      "V.Kiryukhantsev-Korneev",
      "Anton Konopatsky",
      "Dmitry Shtansky"
      
      
      
    ],
    link: "https://www.researchgate.net/publication/369235399_Immobilization_and_Release_of_Platelet-Rich_Plasma_from_Modified_Nanofibers_Studied_by_Advanced_X-ray_Photoelectron_Spectroscopy_Analyses"
  },
  {
    id: 7,
    year: 2023,
    title: "PRP of T2DM Patient Immobilized on PCL Nanofibers Stimulate Endothelial Cells Proliferation",
    authors: [
      "Anastasiya O. Solovieva",
      "Natalya A Sitnikova",
      "Vadim V Nimaev",
      "Elena A Korolev",
      "Anton M Manakhov"
    ],
    link: "https://www.mdpi.com/1422-0067/24/9/8262"
  },
  {
    id: 8,
    year: 2023,
    title: "Evaluation of cashew gum-polyvinyl alcohol (CG-PVA) electrospun nanofiber mat for scarless wound healing in a murine model",
    authors: [
      "Aditya Dev Rajora",
      "Trishna Bal"
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0141813023013119"
  },
  {
    id: 9,
    year: 2022,
    title: "Investigation of the performance of dual-layered omniphobic electrospun nanofibrous membranes for direct contact membrane distillation",
    authors: [
      "Vivekanandan",
      "Sangeetha",
      "Noel Jacob Kaleekkal"
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2213343722015342"
  },
  {
    id: 10,
    year: 2022,
    title: "Fabrication and evaluation of multifunctional agarose based electrospun scaffolds for cutaneous wound repairs",
    authors: [
      "Sachin Latiyan",
      "T. S. Sampath Kumar",
      "Mukesh Doble"
    ],
    link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/term.3308"
  },

  // Add more publications as needed
];

export function PublicationTable() {
  return (
    <div className="overflow-x-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-w-full"
      >
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Authors</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {PUBLICATIONS.map((pub, index) => (
              <motion.tr
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="hover:bg-gray-50"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pub.year}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{pub.title}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {pub.authors.join(", ")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-800 flex items-center gap-1"
                  >
                    View <ExternalLink className="h-4 w-4" />
                  </a>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}