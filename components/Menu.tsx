"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Menu({ isOpen, onClose }: MenuProps) {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-black/50 transition-opacity z-40",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-80 bg-white/90 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 border-b border-gray-200/50">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg">Menu</span>
            <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <button 
                onClick={() => handleNavigation("/")}
                className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation("/about")}
                className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors"
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation("/products")}
                className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors"
              >
                Products
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation("/media")}
                className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors"
              >
                Media
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation("/publications")}
                className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors"
              >
                Publications
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation("/contact")}
                className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}