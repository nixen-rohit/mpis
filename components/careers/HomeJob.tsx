"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaLocationDot, FaGlobe, FaSuitcase } from "react-icons/fa6";

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: <HiMiniUserGroup className="w-7 h-7 text-blue-600" />,
    title: "50+",
    description: "Team Members",
  },
  {
    id: 2,
    icon: <FaSuitcase className="w-7 h-7 text-blue-600" />,
    title: "12+",
    description: "Open Positions",
  },
  {
    id: 3,
    icon: <FaLocationDot className="w-7 h-7 text-blue-600" />,
    title: "10+",
    description: "Countries",
  },
  {
    id: 4,
    icon: <FaGlobe className="w-7 h-7 text-blue-600" />,
    title: "100%",
    description: "Remote Friendly",
  },
];

export default function Homejob() {
  // Framer Motion Variants for Staggered Hero Text
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Smooth layout transition variants
  const slideVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
  };

  const itemVariants: Variants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-white py-24 px-6">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideVariants}
        className="max-w-6xl mx-auto"
      >
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center pb-14">
          <p className="text-blue-600 font-medium mb-4">Join Our Team</p>

          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-blue-950 leading-[1.1]"
          >
            Build Your{" "}
            <span className="font-serif italic font-light text-blue-600">
              Career
            </span>
            <br />
            At MPIS Revolution
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-blue-400"
          >
            Join a team that's building the future of technology — one line of
            code, one pixel, and one smart idea at a time.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group min-h-[240px] bg-blue-50 border border-blue-100 rounded-[30px] p-8 flex flex-col justify-center items-center text-center shadow-sm hover:bg-blue-600 hover:border-blue-600 hover:shadow-2xl transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-7 shadow-sm">
        {feature.icon}
      </div>

      {/* Number */}
      <h3 className="text-5xl font-bold text-blue-950 group-hover:text-white transition-colors duration-300 mb-3">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-blue-500 group-hover:text-blue-100 text-base leading-relaxed transition-colors duration-300">
        {feature.description}
      </p>
    </motion.div>
  );
};
