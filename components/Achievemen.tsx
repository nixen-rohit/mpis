"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

type StatCard = {
  id: number;
  value: string;
  label: string;
  isCustomBg?: boolean; // For the highlighted lime-green card
};

const STATS_DATA: StatCard[] = [
  {
    id: 1,
    value: "98%",
    label: "Client Satisfaction Rate",
  },
  {
    id: 2,
    value: "10+",
    label: "Years Experience",
    isCustomBg: true,
  },
  {
    id: 3,
    value: "200+",
    label: "Projects Delivered",
  },
  {
    id: 4,
    value: "15+",
    label: "Global Clients",
  },
];

export default function Achievement() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Separate the high-visibility lime card from the normal white cards
  const wideTopCard = STATS_DATA.find((s) => s.id === 1);
  const highlightedCard = STATS_DATA.find((s) => s.isCustomBg);
  const bottomCards = STATS_DATA.filter((s) => s.id !== 1 && !s.isCustomBg);

  return (
    <section className="w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="flex flex-col items-center text-center px-4 pb-10">
        {/* Main Heading */}
        <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08] sm:leading-[1.04] md:leading-[1.02] max-w-6xl">
          Our{" "}
          <span className="font-serif italic font-light text-white block sm:inline">
            Achievements
          </span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4  ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex justify-center "
          >
            <motion.div
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group relative flex items-center justify-center"
            >
              {/* Glow Effect */}
              <motion.div
                variants={{
                  rest: {
                    scale: 1,
                    opacity: 0.25,
                  },
                  hover: {
                    scale: 1.45,
                    opacity: 0.4,
                  },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-blue-700  blur-2xl"
              />

              {/* Main Circle */}
              <motion.span
                variants={{
                  rest: {
                    scale: 1,
                    rotate: 0,
                  },
                  hover: {
                    scale: 1.08,
                    rotate: 6,
                  },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="
            relative flex 
            h-28 w-28 
            sm:h-36 sm:w-36 
            md:h-40 md:w-40
            items-center justify-center 
            rounded-full 
           bg-linear-to-br from-blue-600 to-blue-700 text-white   shadow-[0_20px_60px_rgba(37,99,235,0.35)] border border-white/10 backdrop-blur-xl  
             
          "
              >
                {/* Arrow */}
                <motion.div
                  variants={{
                    rest: {
                      rotate: 0,
                      x: 0,
                      y: 0,
                    },
                    hover: {
                      rotate: -45,
                      x: 4,
                      y: -4,
                    },
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                >
                  <ArrowRight className="h-10 w-10 sm:h-14 sm:w-14 stroke-[2.5]" />
                </motion.div>
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full"
          >
            {/* Left Column */}
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* Top Card */}
              {wideTopCard && (
                <motion.div
                  variants={itemVariants}
                  className="
              bg-white text-black 
              rounded-[24px] 
              p-6 sm:p-8 
              flex flex-col items-center justify-center text-center 
              h-[160px] sm:h-[190px]
            "
                >
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-2">
                    {wideTopCard.value}
                  </span>

                  <span className="text-xs sm:text-sm font-medium text-gray-600 max-w-[200px]">
                    {wideTopCard.label}
                  </span>
                </motion.div>
              )}

              {/* Bottom Cards */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {bottomCards.map((stat) => (
                  <motion.div
                    key={stat.id}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="
                bg-white text-black 
                rounded-[20px] 
                p-4 sm:p-5 
                flex flex-col items-center justify-center text-center 
                h-[130px] sm:h-[150px]
              "
                  >
                    <span className="text-3xl sm:text-4xl font-black tracking-tight mb-1">
                      {stat.value}
                    </span>

                    <span className="text-[11px] sm:text-xs font-semibold text-gray-500">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Highlighted Card */}
            {highlightedCard && (
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-linear-to-br from-blue-600 to-blue-700 text-white   shadow-[0_20px_60px_rgba(37,99,235,0.35)] border border-white/10 backdrop-blur-xl    
            rounded-[24px] 
            p-6 sm:p-8 
            flex flex-col items-center justify-center text-center 
            min-h-[220px] sm:min-h-[320px]
            relative overflow-hidden group
          "
              >
                <span className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-2">
                  {highlightedCard.value}
                </span>

                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black/80">
                  {highlightedCard.label}
                </span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
