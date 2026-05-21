"use client";

import React from "react";
import { motion } from "framer-motion";
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
    icon: <Wallet className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Remote-Friendly",
    description:
      "Work from anywhere — we trust our team to deliver great results.",
    icon: <Globe className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Career Growth",
    description:
      "Clear growth path, mentorship, and fast-track promotion policies.",
    icon: <TrendingUp className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Health Benefits",
    description: "Comprehensive health insurance for you and your family.",
    icon: <HeartPulse className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Learning Budget",
    description:
      "Dedicated annual budget for courses, certifications, and conferences.",
    icon: <GraduationCap className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "Collaborative Culture",
    description:
      "Flat hierarchy, open communication, and a team that celebrates wins together.",
    icon: <Users className="w-7 h-7 text-blue-600" />,
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center pb-10">
          {/* Section label */}
          <span className="inline-block mb-3 sm:mb-4 text-xs sm:text-sm md:text-base font-medium tracking-[0.18em] sm:tracking-[0.2em] uppercase text-gray-400">
            Why Join Us
          </span>
          <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-black leading-[1.15]">
            Perks{" "}
            <span className="font-serif italic font-light text-blue-600">
              & Benefits
            </span>
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
              className="group bg-blue-50 border border-blue-100 rounded-[28px] p-8 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm">
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-blue-950 group-hover:text-white transition-colors duration-300 mb-4">
                {benefit.title}
              </h3>

              <p className="text-blue-500 group-hover:text-blue-100 leading-relaxed transition-colors duration-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
