"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 select-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[32px] bg-[#18181b] border border-white/10 px-6 py-10 sm:px-8 md:px-12 md:py-12 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Top Content */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 max-w-5xl">
            {/* Logo */}
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shrink-0">
              <Image
                width={42}
                height={42}
                src="/favicon.webp"
                alt="MPIS Revolution Logo"
                className="object-contain"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl font-normal md:text-5xl  tracking-tight text-white leading-[1.15] max-w-3xl">
                We ensure {" "}
                <span className="text-blue-400  font-serif italic">fastest delivery</span> with
                our expert team
              </h1>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            {/* Primary Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between gap-4 bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] hover:bg-zinc-100 text-black px-6 py-3 rounded-full transition-all duration-300 shadow-sm min-w-[220px]"
            >
              <span className="text-sm font-semibold tracking-wide">
                Get Started
              </span>

              <div className="flex   items-center justify-center w-9 h-9 rounded-full bg-[#18181b] text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between gap-4 border border-zinc-700 hover:border-zinc-500 bg-transparent text-white px-6 py-3 rounded-full transition-all duration-300 min-w-[220px]"
            >
              <span className="text-sm font-semibold tracking-wide text-zinc-300 group-hover:text-white transition-colors">
                View Portfolio
              </span>

              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
