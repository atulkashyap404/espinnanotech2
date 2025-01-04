"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

interface DocumentButtonsProps {
  documents: {
    label: string;
    url: string;
  }[];
}

export function DocumentButtons({ documents }: DocumentButtonsProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Documents</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {documents.map((doc, index) => (
          <motion.a
            key={doc.label}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 transition-colors p-4 rounded-lg"
          >
            <FileText className="h-5 w-5 text-red-600" />
            <span className="font-medium">{doc.label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}