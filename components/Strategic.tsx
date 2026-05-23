"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Check, Grid3X3 } from "lucide-react";
import Image from "next/image";

type Project = {
  id: string;
  category: string;
  title1: string;
  title2: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
};

const PROJECT_DATA: Project = {
  id: "1",
  category: "Strategic IT Consulting",
  title1: "Driving Digital",
  title2: "Transformation",
  description:
    "We bridge the gap between your visionary goals and scalable technological realities, implementing data-driven strategies for sustained success.",
  imageUrl: "/img/about-thumb-01.webp",
  projectUrl: "#",
  tags: [
    "Enterprise-Grade Security",
    "Agile Development Approach",
    "Scalable Cloud Architecture",
    "Data-Driven Performance",
  ],
};

export default function Strategic() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-[#f4f8ff] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative overflow-hidden max-w-7xl mx-auto bg-[#0B1220] rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 lg:p-12 border border-blue-500/10 shadow-[0_20px_80px_rgba(37,99,235,0.15)]"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%)]" />

        {/* Main Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE IMAGE */}
          <motion.div
            variants={contentVariants}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[420px]">
              {/* Image */}
              <div className="relative aspect-4/5  rounded-[30px]  overflow-hidden  border border-white/10  bg-[#101828]               ">
                <Image
                  src={PROJECT_DATA.imageUrl}
                  alt={PROJECT_DATA.title1}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Blue Overlay */}
                <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 via-transparent to-cyan-400/10" />
              </div>

              {/* Floating Card */}
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className=" absolute -bottom-6 -left-4 sm:left-[-30px] w-[220px] sm:w-[280px] bg-linear-to-br from-blue-600 to-blue-700 text-white rounded-[28px] p-5 sm:p-7 shadow-[0_20px_60px_rgba(37,99,235,0.35)] border border-white/10 backdrop-blur-xl"
              >
                {/* Top */}
                <div className="flex justify-between items-start">
                  <h3 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
                    25k+
                  </h3>

                  <div className="text-white/20">
                    <Grid3X3 className="w-8 h-8 sm:w-11 sm:h-11 stroke-[1.5]" />
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 flex flex-col gap-5">
                  <p className="text-lg sm:text-2xl font-bold leading-tight max-w-[180px]">
                    Years of Excellence
                  </p>

                  <motion.a
                    href="/contact"
                    whileTap={{ scale: 0.96 }}
                    className="group inline-flex items-center gap-2 w-fit rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-blue-50"
                  >
                    Let’s Talk
                    <div className="transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <motion.div
            variants={contentVariants}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Category */}
            <span className="text-xs sm:text-sm md:text-base font-medium tracking-[0.18em] uppercase text-blue-300 mb-4">
              {PROJECT_DATA.category}
            </span>

            {/* Heading */}
            <h2 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05] max-w-3xl mb-6">
              {PROJECT_DATA.title1}{" "}
              <span className="font-serif italic font-light text-blue-200 block sm:inline">
                {PROJECT_DATA.title2}
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-blue-100/70 leading-relaxed max-w-2xl mb-8">
              {PROJECT_DATA.description}
            </p>

            {/* Tags */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mb-10">
              {PROJECT_DATA.tags.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md hover:bg-blue-500/10 transition-colors duration-300 "
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                    <Check className="h-3.5 w-3.5 stroke-3" />
                  </div>

                  <span className="text-sm text-blue-50 truncate">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.a
              href={PROJECT_DATA.projectUrl}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 p-1.5 text-white shadow-[0_10px_40px_rgba(37,99,235,0.35)]"
            >
              <span className="pl-5 pr-3 py-2 text-sm sm:text-base font-semibold">
                Get Started Now
              </span>

              <div
                className="flex items-center justify-center h-11 w-11 rounded-full bg-white text-black transition-transform duration-300  group-hover:rotate-45"
              >
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
