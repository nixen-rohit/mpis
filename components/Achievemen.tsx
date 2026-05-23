"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { YearsExperience } from "@/components/svg/svg";
import { FaLayerGroup } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { GiPartyPopper } from "react-icons/gi";

// Flexible React type that accepts Lucide icons, custom SVGs, or package components
type IconComponentType = React.ComponentType<{ className?: string }>;

type StatCard = {
  id: number;
  value: string;
  label: string;
  icon: IconComponentType;
  isCustomBg?: boolean;
};

const STATS_DATA: StatCard[] = [
  {
    id: 1,
    value: "98%",
    label: "Client Satisfaction Rate",
    icon: GiPartyPopper,
  },
  {
    id: 2,
    value: "10+",
    label: "Years Experience",
    icon: YearsExperience,
    isCustomBg: true,
  },
  {
    id: 3,
    value: "200+",
    label: "Projects Delivered",
    icon: FaLayerGroup,
  },
  {
    id: 4,
    value: "15+",
    label: "Global Clients",
    icon: HiUserGroup,
  },
];

// Micro-animations for the icons when their parent card is hovered
const iconAnimationVariants: Variants = {
  rest: { y: 0, scale: 1, rotate: 0 },
  hover: {
    y: -5,
    scale: 1.1,
    rotate: [0, -10, 10, 0],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

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

  const wideTopCard = STATS_DATA.find((s) => s.id === 1);
  const highlightedCard = STATS_DATA.find((s) => s.isCustomBg);
  const bottomCards = STATS_DATA.filter((s) => s.id !== 1 && !s.isCustomBg);

  return (
    <section className="w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="flex flex-col items-center text-center px-4 pb-10">
        <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08] sm:leading-[1.04] md:leading-[1.02] max-w-6xl">
          Our{" "}
          <span className="font-serif italic font-light text-white block sm:inline">
            Achievements
          </span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Side CTA Circle */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex justify-center"
          >
            <motion.div
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group relative flex items-center justify-center cursor-pointer"
            >
              <motion.div
                variants={{
                  rest: { scale: 1, opacity: 0.25 },
                  hover: { scale: 1.45, opacity: 0.4 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-blue-700 blur-2xl"
              />

              <motion.span
                variants={{
                  rest: { scale: 1, rotate: 0 },
                  hover: { scale: 1.08, rotate: 6 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="relative flex h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-blue-700 text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] border border-white/10 backdrop-blur-xl"
              >
                <motion.div
                  variants={{
                    rest: { rotate: 0, x: 0, y: 0 },
                    hover: { rotate: -45, x: 4, y: -4 },
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                >
                  <ArrowRight className="h-10 w-10 sm:h-14 sm:w-14 stroke-[2.5]" />
                </motion.div>
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Right Side Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full"
          >
            {/* Left Column */}
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* Top Card (Wide) */}
              {wideTopCard && (
                <motion.div
                  variants={itemVariants}
                  whileHover="hover"
                  initial="rest"
                  className="bg-white text-black rounded-[24px] p-6 sm:p-8 flex items-center justify-center gap-4 sm:gap-5 h-[160px] sm:h-[190px] cursor-default"
                >
                  {/* ICON LEFT */}
                  <motion.div
                    variants={iconAnimationVariants}
                    className="flex h-15 w-15   items-center justify-center rounded-xl text-blue-600  "
                  >
                    <wideTopCard.icon className="h-full w-full currentColor" />
                  </motion.div>

                  {/* TEXT RIGHT */}
                  <div className="flex flex-col text-left">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                      {wideTopCard.value}
                    </span>

                    <span className="text-xs sm:text-sm font-medium text-gray-600 max-w-[200px]">
                      {wideTopCard.label}
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Bottom Multi-Card Row */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {bottomCards.map((stat) => (
                  <motion.div
                    key={stat.id}
                    variants={itemVariants}
                    whileHover="hover"
                    initial="rest"
                    className="bg-white text-black rounded-[20px] p-4 sm:p-5 flex flex-col items-center justify-center text-center h-[140px] sm:h-[160px] cursor-default"
                  >
                    <motion.div
                      variants={iconAnimationVariants}
                      className="text-blue-600 text-xl sm:text-2xl mb-1"
                    >
                      <stat.icon className="h-6 w-6 currentColor" />
                    </motion.div>
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

            {/* Right Column / Highlighted Blueprint Card */}
            {highlightedCard && (
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                initial="rest"
                className="bg-linear-to-br from-blue-600 to-blue-700 text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] border border-white/10 backdrop-blur-xl rounded-[24px] p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[220px] sm:min-h-[320px] relative overflow-hidden group cursor-default"
              >
                {/* Subtle large background icon for depth */}
                <div className="absolute -right-8 -bottom-8 text-black/10 text-9xl pointer-events-none transform -rotate-12">
                  <highlightedCard.icon className="h-32 w-32 currentColor" />
                </div>

                <motion.div
                  variants={iconAnimationVariants}
                  className="text-white text-3xl sm:text-4xl mb-3 bg-white/10 p-3 rounded-full backdrop-blur-md h-25 w-25"
                >
                  <highlightedCard.icon className="h-full w-full currentColor" />
                </motion.div>
                <span className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-2">
                  {highlightedCard.value}
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80">
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
