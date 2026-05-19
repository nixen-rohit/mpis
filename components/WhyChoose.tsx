"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {ArrowUpRight,  TrendingUp ,Cpu , Check, CodeXml,UsersRound  } from "lucide-react";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

type Plan = {
  id: number;
  title: string;
  description: string;
  badge: LucideIcon;
  features: string[];
};

const SERVICES: Plan[] = [
  {
    id: 1,
    title: "Why Software Development",
    badge: CodeXml,
    description: "Reliable systems improve productivity and automation.",
    features: [
      "Faster workflows",
      "Custom platforms",
      "Data accuracy",
      "Scalability",
    ],
  },
  {
    id: 2,
    title: "Why Dedicated Developers",
    badge: UsersRound ,
    description: "Experts ensure project success.",
    features: ["Technical skill", "Project focus", "Cost efficiency", "Speed"],
  },
  {
    id: 3,
    title: "Why Digital Marketing",
    badge: TrendingUp ,
    description: "Visibility drives revenue.",
    features: ["Brand reach", "Lead quality", " Online trust", "Growth"],
  },
  {
    id: 4,
    title: "Why Technologies",
    badge: Cpu ,
    description:
      "Technology enables secure operations using managed IT services.",
    features: ["Performance", "Security", "Cloud systems", "Automation"],
  },
];

export default function WhyChoose() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-transparent select-none">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col"
      >
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center mb-12 md:mb-16 w-full text-center">
          <span className="inline-block mb-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-gray-400">
            Why Choose Us
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#111111] leading-[1.1] max-w-4xl">
            Smart Choice{" "}
            <span className="font-serif italic font-light text-[#1c1c1c]">
              for Digital Growth
            </span>{" "}
          </h2>

          <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
            We provide secure systems and digital transformation services to
            businesses using modern development and marketing strategies.
          </p>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {SERVICES.map((service) => {
    const IconComponent = service.badge;

    return (
      <motion.div
        key={service.id}
        variants={cardVariants}
        whileHover={{
          y: -6,
          boxShadow: "0 20px 45px rgba(0,0,0,0.08)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="group relative overflow-hidden bg-white border rounded-[28px] p-6 sm:p-8 flex flex-col justify-between min-h-[320px] transition-all duration-300 border-blue-200 shadow-xl"
      >
        {/* Soft Gradient Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-blue-50/60 via-transparent to-transparent pointer-events-none" />

        {/* Card Header */}
        <div className="relative z-10 flex items-center justify-between mb-8">
          
          {/* Icon Box */}
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl   border  transition-all duration-300  bg-blue-600  border-blue-600">
            <IconComponent className="w-6 h-6 text-white transition-colors duration-300" />
          </div>

          {/* Arrow Action */}
          <div className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 transition-all duration-300 rotate-45 group-hover:rotate-0 group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 leading-tight">
            {service.title}
          </h3>

          <p className="mt-4 text-sm sm:text-[15px] text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Features */}
        <ul className="relative z-10 mt-8 flex flex-col gap-3">
          {service.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 text-sm font-medium text-gray-700"
            >
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600">
                <Check className="h-3 w-3 text-white" />
              </div>

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    );
  })}
</div>
      </motion.div>
    </section>
  );
}
