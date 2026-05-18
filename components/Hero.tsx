"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ArrowUpRight, Star } from "lucide-react";

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
    headingNormal: "Advanced IT and Cloud Technology",
    headingItalic: "Solutions for Business Growth",
    description:
      "Our IT Service Provider team blends Web Development Company skills with Cloud Application Development to modernize business operations.",
  },
];

const LOGOS = [
  { id: 1, name: "brand1", img: "/img/brand1.webp" },
  { id: 2, name: "brand2", img: "/img/brand2.webp" },
  { id: 3, name: "brand3", img: "/img/brand3.webp" },
  { id: 4, name: "brand4", img: "/img/brand4.webp" },
  { id: 5, name: "brand5", img: "/img/brand5.webp" },
   { id: 6, name: "brand6", img: "/img/brand6.webp" },
];

export default function Hero() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2 & 3. Interval mechanism to change index every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDE_DATA.length);
    }, 9000); // 1000ms = 1 seconds

    return () => clearInterval(interval);
  }, []);

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
    <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] flex flex-col justify-between pt-20 pb-12 px-4 sm:px-6 lg:px-8 select-none">
      {/* Main Hero Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="max-w-5xl mx-auto text-center flex flex-col items-center justify-center grow"
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
              className=" text-[clamp(2rem,8vw,5.5rem)]  font-normal tracking-tight text-[#111111] leading-[1.06] w-full wrap-break-word hyphens-auto   "
            >
              {activeSlide.headingNormal}
              <br />
              <span className="font-serif italic font-light text-[#1c1c1c]">
                {activeSlide.headingItalic}
              </span>
            </motion.h1>

            {/* ── Subheading ───────────────────────────────────────── */}
            <motion.p
              variants={itemVariants}
              className="mt-4 sm:mt-6 md:mt-8 max-w-[28ch] sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-[clamp(0.75rem,2vw,1.0625rem)]  text-gray-500 font-light leading-relaxed tracking-wide px-1 sm:px-0 "
            >
              {activeSlide.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* CTA Button & Social Proof Group */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
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
          <div className="flex items-center gap-3">
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
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs text-gray-500 font-medium mt-0.5">
                Trusted by 1000+ clients
              </span>
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
          <div
            ref={tickerRef}
            className="flex whitespace-nowrap gap-16 items-center w-max py-2"
          >
            {LOGOS.map((logo) => (
              <div
                key={logo.id}
                className="group flex items-center justify-center cursor-pointer"
              >
                <img
                  src={logo.img}
                  alt={logo.name || "brand logo"}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
