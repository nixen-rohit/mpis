"use client";

import React, { useState } from "react";
import { motion, Variants, AnimatePresence,   } from "framer-motion";
import { Play, X } from "lucide-react";

import { MagneticButton } from "./ui/MagneticButton";

export default function VideoShowcase( ) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 select-none">
      {/* Video Thumbnail Wrapper */}
      <div className="relative w-full aspect-21/9 sm:aspect-16/7 md:aspect-[2.4/1] rounded-[32px] overflow-hidden group shadow-[0_24px_60px_rgba(0,0,0,0.15)] bg-zinc-900">
        {/* Background Image / Placeholder Video preview */}
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
          alt="Team collaboration showcase"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 brightness-75"
        />

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/20 transition-opacity duration-300 opacity-80 group-hover:opacity-100" />

        {/* Animated Play Button Wrapper */}
         
        <div className="absolute inset-0 flex items-center justify-center">
         
            <button
              onClick={() => setIsOpen(true)}
              className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-2xl text-white transition-colors duration-300 hover:bg-white hover:text-black z-10"
            >
              {/* Ambient pulse effect rings behind play button */}
              <span className="absolute inset-0 rounded-full border border-white/40 animate-ping opacity-25 pointer-events-none" />

              <Play className="w-6 h-6 md:w-8 md:h-8 fill-current translate-x-0.5" />
            </button>
          
        </div>
         
      </div>

      {/* --- Overlay Cinematic Video Modal Box --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-70 flex items-center justify-center p-4 md:p-10"
          >
            {/* Close Trigger Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Container viewport */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()} // Stop closing click bubble
              className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl relative"
            >
              {/* Swap src with your real company/agency promo URL or Vimeo embed link */}
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Showcase Promo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
