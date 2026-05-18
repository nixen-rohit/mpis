"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";

// Quick links array
const QUICK_LINKS = [
  { name: "About MPIS Revolution", href: "#" },
  { name: "Our Services", href: "#" },
  { name: "Our Projects", href: "#" },
  { name: "Expert Teams", href: "#" },
  { name: "Blog & Insights", href: "#" },
  { name: "Contact Us", href: "#" },
];

// Legal links array
const LEGAL_LINKS = [
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Refund Policy", href: "#" },
];

// Services links
const SERVICES_LINKS = [
  { name: "Web Development", href: "#" },
  { name: "Mobile Apps", href: "#" },
  { name: "Cloud Solutions", href: "#" },
  { name: "Consulting", href: "#" },
];

// info details
const CONTACT_INFO = [
  {
    id: 1,
    icon: MapPin,
    content: (
      <>
        3rd Floor, Sector 63,
        <br />
        Noida, Uttar Pradesh
      </>
    ),
    align: "start",
  },
  {
    id: 2,
    icon: Phone,
    content: "+91 7318080200",
    align: "center",
  },
  {
    id: 3,
    icon: Mail,
    content: "info@mpisrevolution.com",
    align: "center",
  },
  {
    id: 4,
    icon: Mail,
    content: "support@mpisrevolution.com",
    align: "center",
  },
];

export default function Footer() {
  // Stagger configurations
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        staggerChildren: 0.08,
      },
    },
  } satisfies Variants;

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative w-full overflow-hidden bg-white text-black border-t border-black/10 pt-20 sm:pt-24 lg:pt-32  font-sans">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.04),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.03),transparent_40%)] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
      >
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 pb-12 sm:pb-16 lg:pb-20 border-b border-black/10">
          {/* Brand Section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col gap-6 sm:gap-8 w-full text-center lg:text-left"
          >
            <div className="w-full flex flex-col items-center lg:items-start">
              {/* Brand Label */}
              <h4 className="text-sm font-extrabold uppercase   text-black  ">
                MPIS Revolution
              </h4>

              {/* Logo */}

              {/* <Image
                  src="/img/logo.png"
                  alt="MPIS Logo"
                  width={160}
                  height={60}
                  priority
                  className="w-24 sm:w-28 md:w-36 lg:w-40 h-auto object-contain"
                /> */}

              {/* Description */}
              <p className="mt-2 sm:mt-4 max-w-full sm:max-w-lg text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed sm:leading-loose">
                MPIS Revolution specializes in helping startups and enterprises
                craft strategic solutions, leveraging cutting-edge technology to
                drive impactful growth and innovation worldwide.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3 md:gap-4">
              {[FaFacebook, BsTwitterX, FaLinkedin, FaInstagram, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border border-black/10 flex items-center justify-center text-black/70 hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                ),
              )}
            </div>
          </motion.div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 text-center sm:text-left">
            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-black mb-4 sm:mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center justify-center sm:justify-start text-sm sm:text-base text-gray-600 hover:text-black transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-black mb-4 sm:mb-5">
                Services
              </h4>
              <ul className="space-y-3">
                {SERVICES_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center justify-center sm:justify-start text-sm sm:text-base text-gray-600 hover:text-black transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              variants={itemVariants}
              className="sm:col-span-2 lg:col-span-1"
            >
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-black mb-4 sm:mb-5">
                Contact
              </h4>

              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-gray-600">
                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.id}
                      className={`flex gap-3 justify-center sm:justify-start ${
                        item.align === "start" ? "items-start" : "items-center"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 text-black shrink-0 ${
                          item.align === "start" ? "mt-1" : ""
                        }`}
                      />

                      <span className="leading-relaxed">{item.content}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
          <p className="text-xs sm:text-sm text-gray-500">
            © 2026 MPIS Revolution. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 sm:gap-5">
            {LEGAL_LINKS.map((legal) => (
              <a
                key={legal.name}
                href={legal.href}
                className="text-xs sm:text-sm text-gray-500 hover:text-black transition-colors"
              >
                {legal.name}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Huge Bottom MPIS */}
      <div className="relative  w-full overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-[marquee_18s_linear_infinite] will-change-transform">
          {[...Array(4)].map((_, index) => (
            <h1
              key={index}
              className="mx-6 sm:mx-8 md:mx-10 text-[18vw] xs:text-[17vw] sm:text-[16vw] md:text-[15vw] lg:text-[12rem] xl:text-[18rem] 2xl:text-[22rem] font-black tracking-[-0.06em] sm:tracking-[-0.07em] lg:tracking-[-0.08em] whitespace-nowrap bg-linear-to-b from-black via-gray-500 to-transparent bg-clip-text text-transparent opacity-90"
            >
              MPIS REVOLUTION
            </h1>
          ))}
        </div>
      </div>
    </footer>
  );
}
