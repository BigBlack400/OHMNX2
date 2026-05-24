"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface HeroClientProps {
  title: string;
  subtitle: string;
  collabText: string;
}

export const HeroClient = ({ title, subtitle, collabText }: HeroClientProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050A1A]">
      {/* Dynamic Globe Background */}
      <div className="absolute right-[-15%] top-[10%] w-[110%] aspect-square rounded-full -z-10">
        <div className="absolute inset-0 bg-blue-600/10 blur-[150px] animate-pulse" />
        {/* Animated Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[85%] h-[85%] border border-blue-500/10 rounded-full animate-orbit" />
          <div className="w-[70%] h-[70%] border border-cyan-400/5 rounded-full animate-orbit [animation-duration:80s] [animation-direction:reverse]" />
          <div className="w-[55%] h-[55%] border border-blue-300/5 rounded-full animate-orbit [animation-duration:120s]" />

          {/* Glowing dots on orbits */}
          <div className="absolute inset-0 animate-orbit">
             <div className="absolute top-1/2 left-0 w-2 h-2 bg-blue-400 rounded-full blur-[2px] shadow-[0_0_10px_#60A5FA]" />
          </div>
          <div className="absolute inset-0 animate-orbit [animation-duration:45s] [animation-direction:reverse]">
             <div className="absolute bottom-1/2 right-0 w-1.5 h-1.5 bg-cyan-400 rounded-full blur-[1px] shadow-[0_0_8px_#22D3EE]" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tighter mb-8 text-white">
            {title.split('.').map((part, i) => (
              <span key={i} className={i === 1 ? "text-gray-400" : ""}>
                {part}{i === 0 ? '.' : ''}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Discover Innovations
            </button>
            <button className="px-8 py-4 border border-white/10 rounded-full font-bold hover:bg-white/5 transition-all text-white backdrop-blur-sm">
              Contact Us
            </button>
          </div>

          <div className="mt-24 flex items-center gap-8">
            <div className="relative">
              {/* Collaboration avatars */}
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#050A1A] bg-gray-800 overflow-hidden relative shadow-xl">
                    <img src={`https://i.pravatar.cc/150?u=v2_${i}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              {/* "Get link" popup mock */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-20 left-0 bg-[#1A1F2E]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 min-w-[240px] shadow-2xl"
              >
                <div className="flex-1 text-sm">
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Get link</p>
                  <p className="text-white font-medium">invite by email</p>
                </div>
                <button className="bg-white text-black text-xs font-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
                  Create
                </button>
              </motion.div>
            </div>
            <div className="ml-6">
              <p className="font-bold text-xl leading-tight tracking-tight text-white/90 italic">
                {collabText.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word === "Collaboration+" ? <span className="text-blue-500">{word}</span> : word}
                    {i === 0 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="relative h-[650px] hidden lg:block">
           {/* Floating UI Card */}
           <motion.div
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-12 right-0 w-[420px] bg-[#2A4494]/20 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-20"
           >
              <div className="flex items-center justify-between mb-10">
                <div className="flex gap-2">
                  <div className="w-12 h-1.5 bg-white/20 rounded-full" />
                  <div className="w-6 h-1.5 bg-white/10 rounded-full" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Search className="w-5 h-5 text-white/60" />
                </div>
              </div>

              <div className="flex items-center gap-3 mb-12">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white/10 overflow-hidden bg-gray-800">
                     <img src={`https://i.pravatar.cc/100?u=card_v2_${i}`} className="w-full h-full object-cover opacity-80" />
                  </div>
                ))}
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-white/20">
                    <div className="w-6 h-6 rounded-full bg-blue-500/30 blur-[2px]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-mono text-blue-400/80 mb-0.5">https://u18.net/meeting-789-oahsm</p>
                    <div className="h-1 w-2/3 bg-white/5 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-200" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-mono text-gray-600 font-bold mb-0.5">https://u18.net/meeting-123-o...</p>
                    <div className="h-1 w-1/2 bg-gray-100 rounded-full" />
                  </div>
                </div>
              </div>
           </motion.div>

           {/* Central Decorative Elements */}
           <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
              <div className="w-full aspect-square border border-white/5 rounded-full animate-orbit opacity-50" />
              <div className="absolute text-[180px] font-black italic text-white/[0.03] select-none tracking-tighter rotate-12 uppercase">
                ORBITX
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
