"use client";
 

import React, { useEffect, useRef } from "react";
import { motion , Variants } from "framer-motion";
import { gsap } from "gsap";
import { ArrowUpRight, Star } from "lucide-react";

// Mock data for client logos (using placeholders as seen in the image)
const LOGOS = [
  { id: 1, name: "LOGOIPSUM", icon: "✦" },
  { id: 2, name: "Logoipsum", icon: "♒" },
  { id: 3, name: "Logoipsum", icon: "✹" },
  { id: 4, name: "logoipsum", icon: "●" },
  { id: 5, name: "LogoIpsum", icon: "■" },
];

export default function Hero() {
  const tickerRef = useRef<HTMLDivElement>(null);

  // GSAP Infinite Loop Animation for the Logo Ticker
  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    // Clone the ticker content for seamless looping
    const tickerContent = ticker.innerHTML;
    ticker.innerHTML += tickerContent; 

    const totalWidth = ticker.scrollWidth / 2;

    const ctx = gsap.context(() => {
      gsap.to(ticker, {
        x: -totalWidth,
        duration: 25,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  // Framer Motion Variants for Staggered Hero Text
  const fadeInUp : Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] flex flex-col justify-between pt-32 pb-12 px-4 sm:px-6 lg:px-8 select-none">
      
      {/* Main Hero Content */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="max-w-5xl mx-auto text-center flex flex-col items-center justify-center grow"
      >
{/* Trending slide tag */}
<motion.div
  variants={fadeInUp}
  className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/10 bg-white/80 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] mb-8 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
>
  {/* Pulse dot */}
  <span className="relative flex h-2.5 w-2.5">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/20 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black"></span>
  </span>

  {/* Tag text */}
  <span className="text-sm sm:text-base font-medium tracking-wide text-[#111111] uppercase">
    Trending Creative Studio
  </span>

  {/* Divider */}
  <span className="w-1 h-1 rounded-full bg-black/20"></span>

  {/* Subtext */}
  <span className="text-sm text-[#555555] font-light">
    Strategy • Identity • Digital
  </span>
</motion.div>
        
        {/* Main Heading */}
        <motion.h1 
          variants={fadeInUp}
          className="text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-[#111111] leading-[1.05]"
        >
          Building bold brands <br />
          <span className="font-serif italic font-light text-[#1c1c1c]">with thoughtful design</span>
        </motion.h1>

        {/* Subheading Paragraph */}
        <motion.p 
          variants={fadeInUp}
          className="mt-8 max-w-2xl text-sm sm:text-base text-gray-500 font-light leading-relaxed tracking-wide"
        >
          At Awake, we help small startups tackle the world's biggest challenges with tailored solutions, 
          guiding you from strategy to success in a competitive market.
        </motion.p>

        {/* CTA Button & Social Proof Group */}
        <motion.div 
          variants={fadeInUp}
          className="mt-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
        >
          {/* Pill Button */}
          <button className="group relative flex items-center gap-3 bg-[#4d3eff] hover:bg-[#3b2ecc] text-white pl-6 pr-2 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
            <span className="text-sm font-medium tracking-wide">Get Started</span>
            <div className="bg-white text-black p-2 rounded-full transform group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="w-4 h-4 text-[#4d3eff]" />
            </div>
          </button>

          {/* Social Proof (Avatars & Stars) */}
          <div className="flex items-center gap-3">
            {/* Avatar Stack */}
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
              ].map((src, i) => (
                <img 
                  key={i}
                  src={src} 
                  alt="Client avatar" 
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            
            {/* Stars Text */}
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs text-gray-500 font-medium mt-0.5">Trusted by 1000+ clients</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Infinite Logo Ticker Section */}
      <div className="w-full max-w-7xl mx-auto mt-20">
        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200/60"></div>
          </div>
          <span className="relative bg-transparent px-4 text-xs font-light tracking-wider text-gray-400 uppercase bg-linear-to-r from-[#fffdf9] via-[#fffdf9] to-[#fffdf9]">
            Loved by 1000+ big and small brands around the world
          </span>
        </div>

        {/* Endless Scroller Container */}
        <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div ref={tickerRef} className="flex whitespace-nowrap gap-16 items-center w-max py-2">
            {LOGOS.map((logo) => (
              <div key={logo.id} className="flex items-center gap-2 text-gray-400 opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
                <span className="text-xl font-bold tracking-tight text-gray-700">{logo.icon}</span>
                <span className="text-sm font-semibold tracking-wider uppercase font-sans text-gray-800">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}