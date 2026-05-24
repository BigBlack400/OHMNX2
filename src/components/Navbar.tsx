"use client";

import React from "react";
import Link from "next/link";
import { Globe, Languages, ChevronDown } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-transparent backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-12">
        <Link href="/" className="text-2xl font-black tracking-tighter text-white italic flex items-center gap-1 group">
          <span className="group-hover:text-blue-400 transition-colors">OHM</span>
          <span className="text-blue-500">NX</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#" className="hover:text-white transition-colors flex items-center gap-1">Features <ChevronDown className="w-4 h-4" /></Link>
          <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#" className="hover:text-white transition-colors flex items-center gap-1">Resources <ChevronDown className="w-4 h-4" /></Link>
          <Link href="#" className="hover:text-white transition-colors">Support</Link>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-gray-300 mr-4">
          <Languages className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
          <Globe className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
        </div>
        <Link href="#" className="px-6 py-2 text-sm font-bold border border-white/20 rounded-full hover:bg-white/10 transition-all text-white">
          Contact Us
        </Link>
        <Link href="#" className="px-6 py-2 text-sm font-bold bg-white text-black rounded-full hover:bg-gray-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Get Started
        </Link>
      </div>
    </nav>
  );
};
