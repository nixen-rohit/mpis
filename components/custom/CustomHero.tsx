"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
export interface HeroProps {
  /** Small uppercase text above the main title */
  badgeText?: string;
  /** Main heading text. Use <br /> or array strings if you need explicit line breaks */
  headingText?: React.ReactNode;
  /** Styled font italic part of your heading */
  headingItalicText?: string;
  /** The final part of your heading after the italicized text */
  headingEndText?: string;
  /** Detailed description paragraph text */
  descriptionText?: string;
  /** Primary CTA button configuration */
  primaryCta?: {
    label: string;
    link: string;
  };
  /** Secondary CTA button configuration */
  secondaryCta?: {
    label: string;
    link: string;
  };
}

export default function CustomHero({
  badgeText = "Your Business Our Expertise",
  headingText = "Bespoke Software",
  headingItalicText = "Built for Your",
  headingEndText = "Business",
  descriptionText = "Elevate your business with custom software development solutions that streamline operations, boost productivity, and drive measurable growth.",
  primaryCta = { label: "Free Consultation", link: "/" },
  secondaryCta = { label: "Explore Services", link: "/" },
}: HeroProps) {
  
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
    <section
      className="relative h-svh   w-full overflow-hidden bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] flex flex-col justify-between pt-20 md:pt-12 px-4 lg:px-8 select-none"
    >
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideVariants}
        className="flex flex-col items-center justify-center text-center w-full max-w-[92vw] sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-3 sm:px-6 md:px-10 lg:px-12"
      >
        {/* Section label */}
        {badgeText && (
          <span className="inline-block mb-4 text-sm sm:text-base font-medium tracking-[0.2em] uppercase text-gray-400 ">
            {badgeText}
          </span>
        )}

        {/* ── Main Heading ─────────────────────────────────────── */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl pt-5 md:pt-0 font-normal tracking-tight text-[#111111] leading-normal md:leading-[1.2] w-full wrap-break-word hyphens-auto"
        >
          {headingText}
          <br />
          <span className="font-serif italic font-light text-[#1c1c1c]">
            {headingItalicText}
          </span>
          <br />
          {headingEndText}
        </motion.h1>

        {/* ── Subheading ───────────────────────────────────────── */}
        {descriptionText && (
          <motion.p
            variants={itemVariants}
            className="mt-5 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-800 font-base"
          >
            {descriptionText}
          </motion.p>
        )}

        {/* CTA Button & Social Proof Group */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col sm:flex-row items-center gap-6"
        >

          <Link href={primaryCta.link}>
          {/* Primary CTA */}
          {primaryCta && (
            <button 
             
              className="group flex h-14 items-center gap-3 rounded-full bg-[#4d3eff] px-6 text-white transition-all duration-300 hover:bg-[#3b2ecc] shadow-md hover:shadow-lg"
            >
              <span className="text-sm font-semibold tracking-wide">
                {primaryCta.label}
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5 text-[#4d3eff]" />
              </div>
            </button>
          )}
          </Link>

          {/* Secondary CTA */}
          {secondaryCta && (
            <Link href={secondaryCta.link}>
            <button 
              
              className="group flex h-14 items-center justify-center rounded-full border-2 border-black px-8 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              {secondaryCta.label}
            </button>
            </Link>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}