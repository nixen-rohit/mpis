"use client";

import { motion, Variants } from "framer-motion";
import {
  Code2,
  Globe,
  ShieldCheck,
  Smartphone,
  Megaphone,
  TrendingUp,
  Zap,
  Layers3,
  Cpu,
  Sparkles,
  ArrowUpRight,
  Database,
} from "lucide-react";
import { FaSearch, FaMixcloud } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

// --- Unified Data Array ---
const coreExpertise = [
  { title: "Software Engineering", icon: Code2 },
  { title: "Mobile Platforms", icon: Smartphone },
  { title: "Web Systems", icon: Globe },
  { title: "Marketing Automation", icon: Megaphone },
  { title: "Cloud Services", icon: FaMixcloud },
  { title: "UI/UX Design", icon: IoIosColorPalette },
  { title: "SEO Strategy", icon: FaSearch },
  { title: "Data Security", icon: ShieldCheck },
];

const GoalItems = [
  { title: "Business Growth", Icon: TrendingUp },
  { title: "High Performance", Icon: Zap },
  { title: "Data Security", Icon: ShieldCheck },
  { title: "Future Scalability", Icon: Layers3 },
  { title: "Process Automation", Icon: Cpu },
  { title: "Digital Transformation", Icon: Sparkles },
  { title: "Customer Value", Icon: ArrowUpRight },
  { title: "Smart Solutions", Icon: Database },
];

export default function Goals() {
  return (
    <section className="w-full bg-slate-50 py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-sans selection:bg-blue-500 selection:text-white overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-20 md:space-y-28">
        {/* ================= CORE EXPERTISE ================= */}
        <div className="space-y-8">
          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-[#111111] leading-tight wrap-break-word">
              Our Core{" "}
              <span className="font-serif italic font-light text-blue-600">
                &amp; Expertise
              </span>
            </h2>

            <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 px-2">
              Specialized domains where we consistently deliver excellence.
            </p>
          </div>
          {/* Expertise Tags */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-wrap justify-center  gap-3"
          >
            {" "}
            {coreExpertise.map(({ title, icon: Icon }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ scale: 1.04, y: -3 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group w-full sm:w-auto"
              >
                {" "}
                <div className="relative overflow-hidden px-4 sm:px-6 py-3 rounded-full bg-linear-to-r from-blue-600 via-blue-500 to-blue-700 border border-white/20 shadow-lg shadow-blue-500/20 flex items-center justify-center sm:justify-start gap-3 cursor-default transition-all duration-300 hover:shadow-blue-500/40 hover:border-white/40 w-full sm:w-auto">
                  {" "}
                  {/* White gradient glow */}{" "}
                  <div className="absolute inset-0 bg-linear-to-r from-white/20 via-white/5 to-transparent opacity-80 pointer-events-none " />{" "}
                  {/* Icon */}{" "}
                  <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 ">
                    {" "}
                    <Icon className="w-4 h-4 text-white" />{" "}
                  </div>{" "}
                  {/* Title */}{" "}
                  <span className="relative z-10 text-sm sm:text-base font-medium text-white tracking-wide wrap-break-word text-center sm:text-left ">
                    {" "}
                    {title}{" "}
                  </span>{" "}
                </div>{" "}
              </motion.div>
            ))}{" "}
          </motion.div>
        </div>

        {/* ================= GOALS ================= */}
        <div className="space-y-8">
          {/* Heading */}
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-[#111111] leading-tight wrap-break-word">
              Our{" "}
              <span className="font-serif italic font-light text-blue-600">
                Goals
              </span>
            </h2>

            <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 px-2">
              Our goal is to create business-driven digital platforms that
              improve efficiency and revenue. We focus on performance, security,
              and long-term scalability while delivering measurable results
              through innovation and technology.
            </p>
          </div>

          {/* Goal Tags */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            
            {GoalItems.map(({ title, Icon }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ scale: 1.04, y: -3 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group w-full sm:w-auto"
              >
                {" "}
                <div className="relative overflow-hidden px-4 sm:px-6 py-3 rounded-full bg-linear-to-r from-blue-600 via-blue-500 to-blue-700 border border-white/20 shadow-lg shadow-blue-500/20 flex items-center justify-center sm:justify-start gap-3 cursor-default transition-all duration-300 hover:shadow-blue-500/40 hover:border-white/40 w-full sm:w-auto">
                  {" "}
                  {/* White gradient glow */}{" "}
                  <div className="absolute inset-0 bg-linear-to-r from-white/20 via-white/5 to-transparent opacity-80 pointer-events-none " />{" "}
                  {/* Icon */}{" "}
                  <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 ">
                    {" "}
                    <Icon className="w-4 h-4 text-white" />{" "}
                  </div>{" "}
                  {/* Title */}{" "}
                  <span className="relative z-10 text-sm sm:text-base font-medium text-white tracking-wide wrap-break-word text-center sm:text-left ">
                    {" "}
                    {title}{" "}
                  </span>{" "}
                </div>{" "}
              </motion.div>
            ))}{" "}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
