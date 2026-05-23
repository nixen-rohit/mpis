"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Wallet,
  Globe,
  TrendingUp,
  HeartPulse,
  GraduationCap,
  Users,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Competitive Salary",
    description: "Market-leading compensation with performance-based bonuses.",
    icon: <Wallet className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />,
  },
  {
    id: 2,
    title: "Remote-Friendly",
    description:
      "Work from anywhere — we trust our team to deliver great results.",
    icon: <Globe className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />,
  },
  {
    id: 3,
    title: "Career Growth",
    description:
      "Clear growth path, mentorship, and fast-track promotion policies.",
    icon: <TrendingUp className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />,
  },
  {
    id: 4,
    title: "Health Benefits",
    description: "Comprehensive health insurance for you and your family.",
    icon: <HeartPulse className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />,
  },
  {
    id: 5,
    title: "Learning Budget",
    description:
      "Dedicated annual budget for courses, certifications, and conferences.",
    icon: <GraduationCap className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />,
  },
  {
    id: 6,
    title: "Collaborative Culture",
    description:
      "Flat hierarchy, open communication, and a team that celebrates wins together.",
    icon: <Users className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />,
  },
];

export default function BenefitsSection() {
  // Container variant setting up the orchestration timing cascade
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Progressively cascades entrance animations down to cards
      },
    },
  };

  // Shared fluid translation variants for text blocks and panels
  const initialEntranceVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center pb-14">
          <motion.span 
            variants={initialEntranceVariants}
            className="inline-block mb-3 sm:mb-4 text-xs sm:text-sm md:text-base font-medium tracking-[0.18em] sm:tracking-[0.2em] uppercase text-gray-400"
          >
            Why Join Us
          </motion.span>
          
          <motion.h2
            variants={initialEntranceVariants}
            className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-black leading-[1.15]"
          >
            Perks{" "}
            <span className="font-serif italic font-light text-blue-600">
              & Benefits
            </span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={initialEntranceVariants} // Automatically hooks into parent stagger cycle
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0px 20px 45px rgba(37, 99, 235, 0.12)"
              }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }} // Smooth micro-bounce response
              className="group bg-blue-50 border border-blue-100 rounded-[28px] p-8 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-white group-hover:bg-blue-700/30 flex items-center justify-center mb-8 shadow-sm transition-colors duration-300">
                {benefit.icon}
              </div>

              {/* Content Header */}
              <h3 className="text-2xl font-bold text-blue-950 group-hover:text-white transition-colors duration-300 mb-4 tracking-tight">
                {benefit.title}
              </h3>

              {/* Description Body */}
              <p className="text-blue-500 group-hover:text-blue-100 leading-relaxed transition-colors duration-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}