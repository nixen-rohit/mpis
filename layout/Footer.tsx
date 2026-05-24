"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";

// Quick links array
const QUICK_LINKS = [
  { name: "About MPIS Revolution", href: "/about" },
  { name: "Our Services", href: "#" },
  { name: "Our Projects", href: "#" },
  { name: "Expert Teams", href: "#" },
  { name: "Blog & Insights", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
];

// Legal links array
const LEGAL_LINKS = [
  { name: "Terms & Conditions", href: "/terms-conditions" },
  { name: "Privacy Policy", href: "#" },
  { name: "Refund Policy", href: "#" },
];

 

// info details
const CONTACT_INFO = [
  {
    id: 1,
    icon: MapPin,
    content: (
      <>
        G Block, Sector 63,
        <br /> Noida, Chotpur, U.P
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
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-[#0B0F19] pt-20 font-sans text-white sm:pt-24 lg:pt-32">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_40%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
      >
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 sm:gap-14 sm:pb-16 lg:grid-cols-12 lg:gap-16 lg:pb-20">
          {/* Brand Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center lg:col-span-4 lg:items-start lg:text-left"
          >
            {/* Brand */}
            <div className="max-w-md">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                MPIS Revolution
              </h4>

              <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base md:text-lg">
                MPIS Revolution specializes in helping startups and enterprises
                craft strategic solutions using cutting-edge technology to drive
                impactful innovation and scalable business growth worldwide.
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 ">
              {[FaFacebook, BsTwitterX, FaLinkedin, FaInstagram, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className=" group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/3 text-white/70 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-blue-500/30 hover:bg-blue-600 hover:text-white hover:shadow-[0_10px_30px_rgba(37,99,235,0.25)]"
                  >
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ),
              )}
            </div>
          </motion.div>

          {/* Links + Contact */}
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:text-left lg:col-span-8 lg:grid-cols-3 lg:gap-12">
            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white text-center">
                Quick Links
              </h4>

              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex  items-center justify-center start text-sm sm:text-base text-neutral-400 transition-all duration-300 hover:text-blue-400 "
                    >
                      <ArrowRight className="mr-2 h-3.5 w-3.5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />

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
              <h4 className="mb-5 text-sm text-center font-bold uppercase tracking-[0.2em] text-white">
                Contact
              </h4>

              <div className="space-y-5">
                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.id}
                      className="flex items-start gap-4 justify-center text-center sm:justify-start sm:text-left"
                    >
                      {/* Icon */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-[0_10px_25px_rgba(37,99,235,0.3)]">
                        <Icon className="h-4 w-4" />
                      </div>

                      {/* Text */}
                      <span className="max-w-[220px] wrap-break-word text-sm leading-relaxed text-neutral-400 sm:text-base">
                        {item.content}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center sm:gap-6 sm:pt-8 md:flex-row md:text-left">
          <p className="text-xs text-neutral-500 sm:text-sm">
            © {new Date().getFullYear()} MPIS Revolution. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:justify-end">
            {LEGAL_LINKS.map((legal) => (
              <a
                key={legal.name}
                href={legal.href}
                className="text-xs text-neutral-500 transition-colors hover:text-blue-400 sm:text-sm "
              >
                {legal.name}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Huge Bottom MPIS */}
      <div className="relative w-full overflow-hidden select-none">
        <div className="flex whitespace-nowrap will-change-transform animate-[marquee_15s_linear_infinite]">
          {[...Array(4)].map((_, index) => (
            <h1
              key={index}
              className="mx-6 whitespace-nowrap text-[18vw] font-black tracking-[-0.06em] opacity-90 text-transparent bg-linear-to-b from-white/20 via-blue-400/10 to-transparent bg-clip-text sm:mx-8 sm:text-[16vw] md:mx-10 md:text-[15vw] lg:text-[12rem] xl:text-[18rem] 2xl:text-[22rem]"
            >
              MPIS REVOLUTION
            </h1>
          ))}
        </div>
      </div>
    </footer>
  );
}
