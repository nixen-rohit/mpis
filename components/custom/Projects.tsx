"use client";

import React from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface Project {
  id: number;
  title: string;
  img: string;
  tag: string;
  link: string;
}

interface ProjectsSectionProps {
  badgeText?: string;
  headingText?: string;
  headingItalicText?: string;
  headingEndText?: string;
  descriptionText?: string;
  projects?: Project[];
  buttonText?: string;
  buttonLink?: string;
}

export default function ProjectsSection({
  badgeText = "",
  headingText = "",
  headingItalicText = "",
  headingEndText = "",
  descriptionText = "",
  projects = [],
  buttonText = "",
  buttonLink = "#",
}: ProjectsSectionProps) {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

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
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  const itemVariants: Variants = {
    initial: { opacity: 0, y: 15 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-24 px-4 lg:px-8">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_40%)]" />

      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideVariants}
        className="relative z-10 max-w-7xl mx-auto text-center"
      >
        {/* Badge */}
        <span className="inline-block mb-4 text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
          {badgeText}
        </span>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.1]"
        >
          {headingText}{" "}
          <span className="font-serif italic font-light text-blue-600">
            {headingItalicText}
          </span>
          <br />
          <span className="text-neutral-100">{headingEndText}</span>
        </motion.h1>

        {/* Description */}
        {descriptionText && (
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-neutral-400 leading-relaxed"
          >
            {descriptionText}
          </motion.p>
        )}

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2   gap-8 mt-20  max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={project.link}>
                  <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-neutral-900/60 backdrop-blur-xl aspect-4/3 cursor-pointer">
                    {/* Image */}
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 z-10 flex flex-col justify-between p-6">
                      {/* TOP TAG */}
                      <div className="flex justify-start">
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md px-3 py-1 text-xs font-medium text-white">
                          {project.tag}
                        </span>
                      </div>

                      {/* BOTTOM CONTENT */}
                      <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-2xl font-semibold text-white">
                            {project.title}
                          </h3>

                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover:rotate-45 group-hover:scale-110">
                            <ArrowUpRight className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Border Glow */}
                    <div className="absolute inset-0 rounded-[28px] border border-white/5 group-hover:border-indigo-500/40 transition-colors duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeInUp} className="mt-16 flex justify-center">
          <Link href="/contact-us">
            <button className="group flex h-14 items-center gap-3 rounded-full border border-white/10 bg-white px-6 text-black transition-all duration-300 hover:scale-[1.03] hover:bg-neutral-200">
              <span className="text-sm font-semibold tracking-wide">
                {buttonText}
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
