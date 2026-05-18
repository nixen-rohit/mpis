"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Sparkles,
  Search,
  FileText,
  BarChart2,
  ArrowUpRight,
} from "lucide-react";

// Cleaned up structured data matching the 4 cards from your image
const SERVICES = [
  {
    id: 1,
    title: "Custom Software Development",
    description:
      "We make software that's just right for you. This software matches the way your business works. It helps you get things done faster.",
    icon: Sparkles,
    iconBg: "bg-blue-50 text-blue-600",
    tags: ["Business-fit", "Scalable systems", "Secure design"],
  },
  {
    id: 2,
    title: "SEO Analyzer Optimizer",
    description:
      "Audit your search visibility footprint and automatically implement contextual missing keywords to instantly rank higher.",
    icon: Search,
    iconBg: "bg-zinc-100 text-zinc-700",
    tags: ["Business-fit", "Scalable systems", "Secure design"],
  },
  {
    id: 3,
    title: "Content Optimizer",
    description:
      "Repurpose and polish top-performing text into high-converting social copy, email campaigns, and landing page variants.",
    icon: FileText,
    iconBg: "bg-emerald-50 text-emerald-600",
    tags: ["Business-fit", "Scalable systems", "Secure design"],
  },
  {
    id: 4,
    title: "Predictive Analytics",
    description:
      "Leverage advanced behavioral analysis to predict how target demographics will react to your messaging before you publish.",
    icon: BarChart2,
    iconBg: "bg-amber-50 text-amber-600",
    tags: ["Business-fit", "Scalable systems", "Secure design"],
  },
];

export default function FeaturesGrid() {
  // Stagger wrapper configuration
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  // Individual card entry animation configuration
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-transparent select-none">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <div className="flex flex-col justify-center items-center col-span-full mb-12 md:mb-16 max-w-7xl">
          {/* Section label */}
          <span className="inline-block  mb-4 text-sm sm:text-base font-medium tracking-[0.2em] uppercase text-gray-400 ">
            Our Services
          </span>

          {/* Main heading */}
          <h2 className="text-4xl sm:text-6xl text-center md:text-7xl lg:text-8xl font-normal tracking-tight text-[#111111] leading-[1.02] max-w-6xl">
            Expert in{" "}
            <span className="font-serif italic font-light text-[#1c1c1c]">
              IT & Digital Marketing
            </span>{" "}
            Solutions
          </h2>

          {/* Supporting description */}
          <p className="mt-6 max-w-3xl mx-auto text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed  text-gray-800 font-base">
            We deliver integrated IT and marketing services that streamline
            operations, strengthen brand presence, and drive measurable growth
            for modern businesses.
          </p>
        </div>
        {SERVICES.map((service) => {
          const IconComponent = service.icon;

          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.01,
                boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative bg-white border border-gray-100 rounded-[32px] p-6 flex flex-col justify-between min-h-[340px] group transition-colors duration-300 hover:border-gray-200/80"
            >
              {/* Card Header (Icon and Arrow indicator) */}
              <div className="flex items-center justify-between">
                <div
                  className={`p-3 rounded-[16px] ${service.iconBg} transition-transform duration-300 group-hover:scale-105`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Minimalist modern small action pill top-right */}
                <div className="w-8 h-8 rounded-full   flex items-center justify-center opacity-70 group-hover:opacity-100  bg-gray-900 group-hover:text-white transition-all duration-300 transform  rotate-45 group-hover:rotate-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card Body Text */}
              <div className="mt-8 grow">
                <h3 className="text-xl font-semibold tracking-tight text-gray-900 leading-snug">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-gray-500 font-light leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-6 flex flex-wrap items-center gap-2">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="group relative px-3 py-1.5 rounded-full border border-black/5 bg-black/2 backdrop-blur-sm text-[11px] sm:text-xs font-medium tracking-[0.08em] uppercase text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-default shadow-sm"
                    >
                      <span className="relative z-10">{tag}</span>

                      {/* subtle glow */}
                      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-black/5 via-black/10 to-black/5" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: "Learn more" Button */}
              <div className="mt-8">
                <button className="w-full py-3 px-4 bg-gray-200 hover:bg-gray-900 text-gray-700 hover:text-white text-xs font-medium rounded-full transition-all duration-300 tracking-wide uppercase">
                  Learn more
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
