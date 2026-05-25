"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Parent container layout transition variants
const slideVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15, // Staggers all children beautifully
    },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
};

// Elements animating from the bottom up (Title, Badge, Image-Text section)
const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const CustomBanner = () => {
  return (
    <section className="relative h-full w-full overflow-hidden bg-black flex flex-col justify-between py-20 md:py-12 px-4 lg:px-8 select-none">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideVariants}
        className="flex flex-col items-center justify-center text-center w-full max-w-[92vw] sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-3 sm:px-6 md:px-10 lg:px-12"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl pb-14 text-center mx-auto">
            {/* Badge */}
            <p className="text-gray-400 font-medium mb-4 tracking-wide">
              Welcome to MPIS Revolution
            </p>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-white leading-[1.1]"
            >
              Professional{" "}
              <span className="font-serif italic font-light text-blue-600">
                IT and Digital Marketing
              </span>
              <br />
              Solutions Company
            </motion.h1>
          </div>
        </div>

        {/* Lower Row: Left Side Image & Right Side Text */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12 p-6 max-w-5xl mx-auto my-6 text-left"
          variants={itemVariants} // Inherits parent animation settings cleanly
        >
          {/* Left Side: Image Container */}
          <div className="w-full md:w-1/2">
            <img
              src="/img/project01.webp"
              alt="left side image"
              className="w-full h-[350px] object-cover rounded-2xl shadow-xl transform hover:scale-[1.01] transition-transform duration-300"
            />
          </div>

          {/* Right Side: Text Paragraph */}
          <div className="w-full md:w-1/2 flex flex-col  gap-6 ">
            <p className="text-lg text-gray-300 leading-relaxed font-normal">
              We make Software and Digital Solutions that help businesses grow
              faster. The team creates systems that work well and plans that
              help businesses do better. These plans make businesses run more
              smoothly and be more visible to customers
            </p>

            <Link href="/contact-us">
              <button className="group flex h-14  items-center gap-3 rounded-full bg-[#4d3eff] px-6 text-white transition-all duration-300 hover:bg-[#3b2ecc] shadow-md hover:shadow-lg">
                <span className="text-sm font-semibold tracking-wide">
                  Learn More
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5 text-[#4d3eff]" />
                </div>
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start justify-between w-full max-w-[92vw] sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto"
      >
        <div className="md:w-1/3">
          <span className="text-xs font-medium uppercase tracking-widest text-blue-600 block mb-2">
            Capabilities
          </span>
          <h2 className="text-5xl md:text-4xl font-normal tracking-tight text-slate-900 leading-tight">
            Tools{" "}
            <span className="font-serif italic font-light text-blue-600 ">
              &amp; Techniques
            </span>
          </h2>
        </div>

        <div className="md:w-2/3">
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Our team uses advanced frameworks, smart automation tools, and
            secure cloud-based software solutions, backed by expert technology
            consulting services, to deliver flexible, future-ready digital
            products that support long-term business growth.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default CustomBanner;
