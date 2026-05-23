"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChartLineUp,
  Laptop,
  Buildings,
  CalendarBlank,
  Tag,
  BookOpen,
  ArrowRight,
  ArrowUpRight,
  PresentationChart,
  Cpu,
  Graph,
} from "@phosphor-icons/react";

interface CardItem {
  id: number;
  date?: string;
  category?: string;
  title: string;
  description: string;
  imageUrl?: string;
  icon: React.ReactNode;
  imageIcon: React.ReactNode;
  imageLabel: string;
  link: string;
}

const cardData: CardItem[] = [
  {
    id: 1,
    date: "September 23, 2025",
    category: "MPIS Technology",
    title: "Insights That Drive Business Smarter Forward",
    description:
      "Consulting empowers businesses with data-driven strategies and innovative solutions to achieve sustainable growth and competitive advantage in today's fast-evolving market.",
    imageUrl: "/img/insigth01.webp",
    icon: <ChartLineUp size={18} weight="duotone" />,
    imageIcon: <PresentationChart size={48} weight="thin" />,
    imageLabel: "Analytics",
    link: "/blog",
  },
  {
    id: 2,
    date: "October 5, 2025",
    category: "Digital Strategy",
    title: "Transforming Ideas Into Scalable Digital Products",
    description:
      "Our product teams bridge the gap between vision and execution, turning complex challenges into elegant, user-centered digital experiences that deliver measurable results.",
    imageUrl: "/img/insigth02.webp",
    icon: <Laptop size={18} weight="duotone" />,
    imageIcon: <Cpu size={48} weight="thin" />,
    imageLabel: "Technology",
    link: "/blog",
  },
  {
    id: 3,
    date: "November 12, 2025",
    category: "Innovation Hub",
    title: "Building Resilient Systems for the Future of Work",
    description:
      "Future-ready infrastructure design helps organizations stay agile, secure, and prepared for rapid change — from cloud-native architecture to AI-powered operations.",
    imageUrl: "/img/insigth03.webp",
    icon: <Buildings size={18} weight="duotone" />,
    imageIcon: <Graph size={48} weight="thin" />,
    imageLabel: "Systems",
    link: "/blog",
  },
];

export default function Insight() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 sm:py-14">
      {/* Heading */}
      <div className="mx-auto mb-12 flex max-w-7xl flex-col items-center justify-center md:mb-16">
        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-black sm:text-base">
          Read Our News & Blog
        </span>

        <h2 className="max-w-6xl text-center text-4xl leading-[1.02] tracking-tight text-black sm:text-6xl md:text-7xl lg:text-8xl">
          Insight <span className=" font-light italic font-serif">&</span>{" "}
          Updates
        </h2>

        {/* Supporting description */}
        <p className="mt-6 max-w-3xl mx-auto text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed   text-gray-800 font-base">
          We believe that every business is unique. Our approach to your growth
          is never one-size-fits-all, providing tailored development solutions
          to meet your exact needs.
        </p>
      </div>

      {/* Cards row */}
      <div className="flex flex-col md:flex-row gap-4 w-full items-stretch">
        {cardData.map((card, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={card.id}
              onClick={() => setActiveIndex(index)}
              layout
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className={`cursor-pointer rounded-[1.75rem] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden
                ${
                  isActive
                    ? "bg-[#F3F4F3] shadow-sm min-h-[280px] md:flex-2 md:flex-row md:gap-6"
                    : "bg-blue-200 min-h-[200px] md:min-h-[320px] md:w-[220px] md:shrink-0"
                }`}
            >
              {/* ── Main content pane ── */}
              <div className="flex flex-col justify-between h-full flex-1 z-10">
                <div>
                  {/* Icon badge */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center mb-3 transition-colors duration-300
                      ${isActive ? "bg-blue-200 text-[#4a6e1a]" : "bg-linear-to-tr via-[#fffdf9] r-to-tr from-[#f3f8fa] to-[#fffbf2] r-to-tr /60 text-[#4a6e1a]"}`}
                  >
                    {card.icon}
                  </div>

                  {/* Meta: date + category (active only shows full meta) */}
                  {isActive && card.date && card.category ? (
                    <div className="flex flex-col gap-0.5 mb-3">
                      <span className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                        <CalendarBlank size={11} weight="bold" />
                        {card.date}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-blue-500">
                        <Tag size={11} weight="bold" />
                        {card.category}
                      </span>
                    </div>
                  ) : (
                    card.category && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-blue-500 bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] r-to-tr r-to-tr /50 px-2.5 py-1 rounded-full mb-3">
                        <Tag size={10} weight="bold" />
                        {card.category}
                      </span>
                    )
                  )}

                  {/* Title */}
                  <motion.h3
                    layout="position"
                    className={`font-bold text-gray-800 leading-snug mb-3
                      ${isActive ? "text-lg sm:text-xl md:text-2xl max-w-[300px]" : "text-base sm:text-lg max-w-[220px]"}`}
                  >
                    {card.title}
                  </motion.h3>

                  {/* Description — active only */}
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-gray-500 text-sm leading-relaxed max-w-[320px]"
                    >
                      {card.description}
                    </motion.p>
                  )}
                </div>

                {/* Footer */}

                <div className="flex items-center justify-between mt-5">
                  <Link href={card.link}>
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                      <BookOpen size={14} weight="bold" aria-hidden />
                      Read More{" "}
                      <span className="-rotate-45">
                        <ArrowRight size={16} weight="bold" />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>

              {/* ── Image panel (desktop + active only) ── */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15 }}
                  className="hidden md:flex w-[220px] xl:w-[260px] h-full min-h-[240px] relative rounded-2xl overflow-hidden shrink-0 bg-linear-to-br from-[#c8e6a0] to-[#89A43C] items-center justify-center flex-col gap-2"
                >
                  {card.imageUrl ? (
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <>
                      <div className="text-white/70">{card.imageIcon}</div>
                      <span className="text-white/60 text-xs font-medium">
                        {card.imageLabel}
                      </span>
                    </>
                  )}
                </motion.div>
              )}

              {/* Decorative blob */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] /20 rounded-full blur-xl pointer-events-none" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
