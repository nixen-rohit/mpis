"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Search,
  FileText,
  BarChart2,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

interface Service {
  id: string | number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  tags: string[];
}

interface CreativeSliderProps {
  services: Service[];
}

const SERVICES: Service[] = [
  {
    id: 1,
    title: "Custom Software Development",
    description:
      "We build tailored software matching your distinct business workflows to automate tasks and accelerate daily execution speed.",
    icon: Sparkles,
    iconBg: "bg-violet-500/15 text-violet-300 border border-violet-500/20",
    tags: ["Business-fit", "Scalable", "Secure"],
  },
  {
    id: 2,
    title: "SEO Analyzer Optimizer",
    description:
      "Audit your search visibility footprint and automatically implement missing contextual keywords to instantly rank higher.",
    icon: Search,
    iconBg: "bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-500/20",
    tags: ["SEO Audit", "Keywords", "Ranking"],
  },
  {
    id: 3,
    title: "Content Optimizer",
    description:
      "Repurpose and polish top-performing text into high-converting social copy, email campaigns, and landing page variants.",
    icon: FileText,
    iconBg: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/20",
    tags: ["Copywriting", "Campaigns", "Conversion"],
  },
  {
    id: 4,
    title: "Predictive Analytics",
    description:
      "Leverage advanced behavioral analysis to predict how target demographics will react to your messaging before you publish.",
    icon: BarChart2,
    iconBg: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20",
    tags: ["Analytics", "Behavioral", "Insights"],
  },
];

// Custom Hook to manage responsive card translations safely without layout thrashing
function useCardOffset() {
  const [offset, setOffset] = useState(280);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setOffset(0); // Stacked or single view on mobile screens
      } else if (window.innerWidth < 1024) {
        setOffset(160); // Narrower offset for tablets
      } else {
        setOffset(320); // Desktop view layout
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return offset;
}

function CreativeSlider({ services }: CreativeSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardOffset = useCardOffset();

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleCards = () => {
    const total = services.length;
    const leftIndex = (currentIndex - 1 + total) % total;
    const middleIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % total;

    return [
      { service: services[leftIndex], position: "left" },
      { service: services[middleIndex], position: "middle" },
      { service: services[rightIndex], position: "right" },
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="relative w-full max-w-7xl mx-auto py-10 px-4 sm:px-6">
      {/* Desktop Arrows */}
      <div className="hidden sm:block">
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 active:scale-95 transition-all duration-200"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 active:scale-95 transition-all duration-200"
        >
          <ArrowRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Slider viewport container */}
      <div className="relative flex items-center justify-center min-h-[480px] sm:min-h-[520px] overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleCards.map(({ service, position }) => {
            const IconComponent = service.icon;
            const isMiddle = position === "middle";
            const isLeft = position === "left";

            // Calculate precise offsets using state variables
            const xTranslation = isMiddle
              ? 0
              : isLeft
                ? -cardOffset
                : cardOffset;

            return (
              <motion.div
                key={`${service.id}-${position}`}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  x: isLeft ? -cardOffset - 40 : cardOffset + 40,
                }}
                animate={{
                  opacity: isMiddle ? 1 : 0.9,
                  scale: isMiddle ? 1 : 0.85,
                  x: xTranslation,
                  zIndex: isMiddle ? 20 : 10,

                  filter: isMiddle ? "blur(0px)" : "blur(1.5px)",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.75,
                  x: isLeft ? -cardOffset - 60 : cardOffset + 60,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 28,
                }}
                className={` absolute flex flex-col justify-between
                  rounded-[28px]
                  backdrop-blur-xl
                  bg-white/5
                  border
                  w-[85%]
                  xs:w-[75%]
                  sm:w-[340px]
                  md:w-[360px]
                  p-6 sm:p-7
                 
                  ${
                    isMiddle
                      ? "border-white/20 shadow-[0_20px_50px_rgba(255,255,255,0.08)] bg-white/10  min-h-[400px] md:min-h-[450px]"
                      : "border-white/5 hidden sm:flex pointer-events-none select-none  min-h-[200px] sm:min-h-[250px]"
                  }
                `}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl ${service.iconBg}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div
                    className={`
                      w-8 h-8 rounded-full
                      flex items-center justify-center
                      text-white transition-all duration-300
                      ${isMiddle ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                    `}
                  >
                    <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="mt-6 flex flex-col grow justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight tracking-tight text-left">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-zinc-400 leading-relaxed text-left">
                      {service.description}
                    </p>
                  </div>

                  {/* Tags Array */}
                  <div
                    className={`
                     transition-opacity duration-300
                      ${isMiddle ? "opacity-100" : "opacity-0"}
                    `}
                  >
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={` group flex items-center justify-between w-full rounded-xl bg-blue-600  px-6 py-3 text-white shadow-[0_10px_40px_rgba(37,99,235,0.35)] transition-all duration-300 hover:opacity-90  ${
                      isMiddle
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none absolute"
                    } `}
                  >
                    <span className="text-sm sm:text-base font-semibold">
                      Get Started Now
                    </span>

                    <div className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45 ">
                      <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="flex sm:hidden items-center justify-center gap-4 mt-8">
        {/* Left */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl active:scale-95 transition-all duration-200 "
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`
          h-2 rounded-full transition-all duration-300
          ${idx === currentIndex ? "w-8 bg-white" : "w-2 bg-white/30"}
        `}
            />
          ))}
        </div>

        {/* Right */}
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl active:scale-95 transition-all duration-200 "
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Desktop Dots */}
      <div className="hidden sm:flex justify-center mt-6 gap-2">
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`
        rounded-full transition-all duration-300 h-2
        ${
          idx === currentIndex
            ? "w-8 bg-white"
            : "w-2 bg-white/30 hover:bg-white/50"
        }
      `}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function FeaturesGrid() {
  return (
    <section className="w-full bg-black px-4 sm:px-6 lg:px-8 py-20 select-none overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="inline-block mb-3 text-xs font-bold tracking-[0.25em] uppercase text-zinc-500">
          Our Expertise
        </span>

        <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-white leading-[1.15] w-full wrap-break-word">
          Expert in{" "}
          <span className="font-serif italic font-light text-zinc-200">
            IT & Digital Marketing
          </span>{" "}
          Solutions
        </h1>

        <p className="mt-5 max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-zinc-400">
          We deliver integrated systems that streamline your operations, protect
          structural assets, and drive data-informed customer growth.
        </p>
      </div>

      <div className="w-full mx-auto text-center">
        <CreativeSlider services={SERVICES} />
      </div>
    </section>
  );
}
