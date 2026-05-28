"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
interface IndustryItem {
  id: string;
  name: string;
  imageUrl: string;
  link?: string;
}

const allIndustries: IndustryItem[] = [
  {
    id: "1",
    name: "Healthcare",
    imageUrl: "/img/health.jpg",
    link: "/healthcare",
  },
  {
    id: "2",
    name: "Education",
    imageUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800&h=500",
    link: "/e-learning",
  },
  {
    id: "3",
    name: "Retail",
    imageUrl:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800&h=500",
    link: "/fintech",
  },
  {
    id: "4",
    name: "Real Estate",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800&h=500",
    link: "/real-estate",
  },
  {
    id: "5",
    name: "Manufacturing",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=500",
    link: "/",
  },
  {
    id: "6",
    name: "Finance",
    imageUrl:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800&h=500",
    link: "/e-commerce",
  },
  {
    id: "7",
    name: "Logistics",
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=500",
    link: "/",
  },
  {
    id: "8",
    name: "E-Commerce",
    imageUrl:
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800&h=500",
     link: "/e-commerce",
  },
  {
    id: "9",
    name: "Startups",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=500",
    link: "/",
  },
  {
    id: "10",
    name: "Enterprises",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=500",
    link: "/",
  },
];

function IndustryRow({
  item,
  index,
  isActive,
  onHover,
  alignRight = false,
}: {
  item: IndustryItem;
  index: number;
  isActive: boolean;
  onHover: (id: string | null) => void;
  alignRight?: boolean;
}) {
  return (
    <motion.div
      onHoverStart={() => onHover(item.id)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.06,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative flex items-center border-b border-gray-200 py-5 px-1 cursor-pointer overflow-hidden gap-3 ${
        alignRight ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Fill background */}
      <motion.div
        className={`absolute inset-0 bg-blue-600 ${alignRight ? "origin-right" : "origin-left"}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Index */}
      <span
        className={`relative z-10 text-xs font-mono w-8 shrink-0 transition-colors duration-300 ${
          isActive ? "text-blue-200" : "text-gray-400"
        } ${alignRight ? "text-right" : "text-left"}`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Name */}
      <span
        className={`relative z-10 flex-1 text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
          isActive ? "text-white" : "text-gray-900"
        } ${alignRight ? "text-right" : "text-left"}`}
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {item.name}
      </span>

      {/* Arrow */}
      <motion.div
        className={`relative z-10 flex items-center justify-center w-9 h-9 rounded-full shrink-0 ${alignRight ? "rotate-180" : "rotate-0"}`}
        animate={{
          backgroundColor: isActive ? "white" : "#1d4ed8",
          rotate: isActive ? 0 : 45,
        }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUpRight
          className="w-4 h-4"
          style={{ color: isActive ? "#1d4ed8" : "white" }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function IndustryGrid() {
  const [activeId, setActiveId] = useState<string | null>("1");
  const activeItem = allIndustries.find((i) => i.id === activeId);
  const leftCol = allIndustries.slice(0, 5);
  const rightCol = allIndustries.slice(5, 10);

  return (
    <div className="w-full bg-gradient-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] py-14 overflow-hidden">
      {/* Heading */}
      <div className="mx-auto mb-12 flex max-w-7xl flex-col items-center justify-center md:mb-16 px-4">
        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-black sm:text-base">
          Industries We Serve
        </span>
        <h2 className="max-w-6xl text-center text-4xl font-normal leading-[1.1] tracking-tight text-black sm:text-6xl md:text-7xl">
          Global Sectors We{" "}
          <span className="block font-light italic font-serif text-blue-600">
            Empower for every
          </span>{" "}
          industry
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-center text-sm sm:text-base md:text-lg text-gray-600">
          We deliver business software solutions across industries including:
        </p>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
          {/* Left col: 1–5 on desktop | 1–10 on mobile */}
          <div className="flex-1 w-full border-t border-gray-200">
            {/* Mobile: all 10 items */}
            <div className="lg:hidden">
              {allIndustries.map((item, index) => (
                <Link key={item.id} href={item.link || "#"}>
                  <IndustryRow
                    key={item.id}
                    item={item}
                    index={index}
                    isActive={activeId === item.id}
                    onHover={setActiveId}
                    alignRight={false}
                  />
                </Link>
              ))}
            </div>
            {/* Desktop: only 1–5 */}
            <div className="hidden lg:block">
              {leftCol.map((item, index) => (
                <Link key={item.id} href={item.link || "#"}>
                  <IndustryRow
                    key={item.id}
                    item={item}
                    index={index}
                    isActive={activeId === item.id}
                    onHover={setActiveId}
                    alignRight={false}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Center: sticky image panel — desktop only */}
          <div className="hidden lg:block w-[320px] xl:w-[380px] sticky top-24 self-center shrink-0">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-blue-200 shadow-xl">
              {" "}
              <AnimatePresence mode="wait">
                {activeItem ? (
                  <motion.div
                    key={activeItem.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={activeItem.imageUrl}
                      alt={activeItem.name}
                      fill
                      sizes="380px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <p
                        className="text-white text-xl font-bold"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {activeItem.name}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      width="100%"
                      height="100%"
                      className="absolute inset-0 opacity-10"
                    >
                      <defs>
                        <pattern
                          id="grid"
                          width="32"
                          height="32"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 32 0 L 0 0 0 32"
                            fill="none"
                            stroke="#1d4ed8"
                            strokeWidth="0.5"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                    <div className="relative z-10 flex flex-col items-center gap-2 text-center px-8">
                      <div className="w-12 h-12 rounded-full border-2 border-blue-300 flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-blue-400 rotate-45" />
                      </div>
                      <p className="text-gray-400 text-sm">
                        Hover an industry to explore
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right col: 6–10 — desktop only */}
          <div className="hidden lg:block flex-1 w-full border-t border-gray-200">
            {rightCol.map((item, index) => (
              <Link key={item.id} href={item.link || "#"}>
                <IndustryRow
                  key={item.id}
                  item={item}
                  index={index + 5}
                  isActive={activeId === item.id}
                  onHover={setActiveId}
                  alignRight={true}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
