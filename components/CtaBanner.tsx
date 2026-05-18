"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 select-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-[#18181b] rounded-[24px] px-8 py-8 md:py-10 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
      >
        {/* Left Side: Headline Text */}
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-white leading-snug">
            See Our Work in Action.{" "}
            <span className="text-zinc-400 font-light">
              Start Your Creative Journey with Us!
            </span>
          </h2>
        </div>

        {/* Right Side: Action Buttons Group */}
        <div className="flex flex-wrap items-center gap-4 shrink-0 w-full md:w-auto">
          
          {/* Primary CTA: "Let's Collaborate" */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center justify-between gap-4 bg-white hover:bg-zinc-100 text-black pl-6 pr-2 py-2 rounded-full transition-colors duration-300 w-full sm:w-auto shadow-sm"
          >
            <span className="text-sm font-medium tracking-wide">
              Let's Collaborate
            </span>
            <div className="bg-[#18181b] text-white p-2 rounded-full transform group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.button>

          {/* Secondary CTA: "View Portfolio" */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center justify-between gap-4 bg-transparent border border-zinc-700 hover:border-zinc-500 text-white pl-6 pr-2 py-2 rounded-full transition-colors duration-300 w-full sm:w-auto"
          >
            <span className="text-sm font-medium tracking-wide text-zinc-300 group-hover:text-white transition-colors">
              View Portfolio
            </span>
            <div className="bg-white/10 text-white p-2 rounded-full transform group-hover:bg-white group-hover:text-black group-hover:rotate-45 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.button>

        </div>
      </motion.div>
    </div>
  );
}