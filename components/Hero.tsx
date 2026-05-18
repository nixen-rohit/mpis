"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import InfiniteLogo from "@/components/InfiniteLogo";

// Mock data for client logos (using placeholders as seen in the image)

const SLIDE_DATA = [
  {
    id: 1,
    tagText: "TRANSFORMING IDEAS INTO SMART SOFTWARE",
    headingNormal: "Building Scalable Software ",
    headingItalic: "Solutions for Businesses",
    description:
      "Our Software Development Company provides Custom Software Development Services that streamline operations and support long-term.",
  },
  {
    id: 2,
    tagText: " Connecting Brands with the Right Audience",
    headingNormal: "Smart Digital Marketing ",
    headingItalic: "for Modern Businesses",
    description:
      "Our Digital Marketing Company delivers performance focused strategies designed to grow traffic, conversions, and brand trust.",
  },
  {
    id: 3,
    tagText: "Modern IT Systems for Smarter Operations",
    headingNormal: "Advanced IT & Cloud Tech",
    headingItalic: "Solutions for Business  ",
    description:
      "Our IT Service Provider team blends Web Development Company skills with Cloud Application Development to modernize business operations.",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2 & 3. Interval mechanism to change index every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDE_DATA.length);
    }, 9000); // 1000ms = 1 seconds

    return () => clearInterval(interval);
  }, []);

  // Framer Motion Variants for Staggered Hero Text
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Current active data set
  const activeSlide = SLIDE_DATA[currentIndex];

  // Smooth layout transition variants
  const slideVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
  };

  const itemVariants: Variants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] flex flex-col justify-between pt-10 md:pt-12 not-last: px-4 sm:px-6 lg:px-8 select-none">
      {/* Main Hero Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="max-w-6xl mx-auto text-center flex flex-col items-center justify-center grow"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideVariants}
            className="flex flex-col items-center justify-center text-center w-full max-w-[92vw] sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-3 sm:px-6 md:px-10 lg:px-12"
          >
            {/* ── Trending Tag ─────────────────────────────────────── */}
            <motion.div
              variants={itemVariants}
              className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full border border-black/10 bg-white/80 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] mb-5 sm:mb-7 md:mb-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Pulse dot */}
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/20 opacity-75" />
                <span className="relative inline-flex rounded-full h-full w-full bg-black" />
              </span>

              {/* Tag text */}
              <span className=" text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.16em] sm:tracking-[0.18em] text-[#111111] uppercase whitespace-nowrap ">
                {activeSlide.tagText}
              </span>

              {/* Divider — hidden on mobile to keep pill tight */}
              <span className="hidden sm:block w-1 h-1 rounded-full bg-black/20 shrink-0" />
            </motion.div>

            {/* ── Main Heading ─────────────────────────────────────── */}
            <motion.h1
              variants={itemVariants}
              className=" text-[clamp(2rem,8vw,5.5rem)]  font-normal tracking-tight text-[#111111] leading-[1.3] w-full wrap-break-word hyphens-auto   "
            >
              {activeSlide.headingNormal}
              <br />
              <span className="font-serif italic font-light text-[#1c1c1c] ">
                {activeSlide.headingItalic}
              </span>
            </motion.h1>

            {/* ── Subheading ───────────────────────────────────────── */}
            <motion.p
              variants={itemVariants}
              className="mt-5 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed   text-gray-800 font-base"
            >
              {activeSlide.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* CTA Button & Social Proof Group */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
        >
          {/* Pill Button */}
          <button className="group relative flex items-center gap-3 bg-[#4d3eff] hover:bg-[#3b2ecc] text-white pl-6 pr-2 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
            <span className="text-sm font-medium tracking-wide">
              Get Started
            </span>
            <div className="bg-white text-black p-2 rounded-full transform group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="w-4 h-4 text-[#4d3eff]" />
            </div>
          </button>

          {/* Social Proof (Avatars & Stars) */}
          <div className="flex items-center flex-col md:flex-row  gap-5 pt-3 md:pt-0">
            {/* Avatar Stack */}
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
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
            <div className="flex flex-col items-center md:items-start">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs text-gray-500 font-medium pt-1">
                Trusted by 1000+ clients
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Endless Scroller Container */}
      <InfiniteLogo />
    </section>
  );
}
