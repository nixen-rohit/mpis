"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { SERVICES, type Service } from "@/components/data/servicesData";

interface CreativeSliderProps {
  services: Service[];
}

function useCardOffset() {
  const [offset, setOffset] = useState(280);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setOffset(0);
      } else if (window.innerWidth < 1024) {
        setOffset(160);
      } else {
        setOffset(320);
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
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= services.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length, isPaused]);
  const cardOffset = useCardOffset();

  const handleNext = () => {
    setIsPaused(true);

    setCurrentIndex((prev) => (prev >= services.length - 1 ? 0 : prev + 1));

    setTimeout(() => setIsPaused(false), 5000);
  };

  const handlePrev = () => {
    setIsPaused(true);

    setCurrentIndex((prev) => (prev <= 0 ? services.length - 1 : prev - 1));

    setTimeout(() => setIsPaused(false), 5000);
  };

  const getVisibleCards = () => {
    const total = services.length;

    const leftIndex = currentIndex === 0 ? total - 1 : currentIndex - 1;

    const rightIndex = currentIndex === total - 1 ? 0 : currentIndex + 1;

    return [
      {
        service: services[leftIndex],
        position: "left",
      },
      {
        service: services[currentIndex],
        position: "middle",
      },
      {
        service: services[rightIndex],
        position: "right",
      },
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
          className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 active:scale-95 disabled:opacity-30 disabled:pointer-events-none disabled:scale-100 transition-all duration-200"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-2 lg:left-auto lg:right-4 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 active:scale-95 disabled:opacity-30 disabled:pointer-events-none disabled:scale-100 transition-all duration-200"
        >
          <ArrowRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Slider viewport container */}
      <div className="relative flex items-center justify-center min-h-[480px] sm:min-h-[520px] overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleCards.map(({ service, position }) => {
            const isMiddle = position === "middle";
            const isLeft = position === "left";

            const xTranslation = isMiddle
              ? 0
              : isLeft
                ? -cardOffset
                : cardOffset;

            return (
              <motion.div
                key={service.id}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  x: isLeft ? -cardOffset - 40 : cardOffset + 40,
                }}
                animate={{
                  opacity: isMiddle ? 1 : 0.4,
                  scale: isMiddle ? 1 : 0.85,
                  x: xTranslation,
                  zIndex: isMiddle ? 20 : 10,
                  filter: isMiddle ? "blur(0px)" : "blur(2px)",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.75,
                  x: isLeft ? -cardOffset - 60 : cardOffset + 60,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 26,
                }}
                className={`absolute flex flex-col justify-between rounded-[28px] backdrop-blur-xl bg-white/5 border w-[85%] xs:w-[75%] sm:w-[340px] md:w-[360px] p-6 sm:p-7
                  
                  ${
                    isMiddle
                      ? "border-white/20 shadow-[0_20px_50px_rgba(255,255,255,0.08)] bg-white/10 min-h-[400px] md:min-h-[450px]"
                      : "border-white/5 hidden sm:flex pointer-events-none select-none min-h-[200px] sm:min-h-[250px]"
                  }
                `}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  {/* Premium Icon */}
                  <div className="relative group">
                    {/* Blue Ambient Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

                    {/* Icon Container */}
                    <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out group-hover:border-blue-400/20 group-hover:bg-blue-500/6 group-hover:translate-y-[-2px] group-hover:shadow-[0_10px_40px_rgba(59,130,246,0.18)]">
                      {/* Premium Inner Layer */}
                      <div className="absolute inset-px rounded-[15px] bg-linear-to-b from-white/5 to-transparent" />

                      {/* Shine Sweep */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-y-0 -left-full w-1/2 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-premium-shine" />
                      </div>

                      {service.icon ? (
                        <service.icon className="relative z-10 w-8 h-8 text-white/70 transition-all duration-500 group-hover:text-blue-400 group-hover:scale-110" />
                      ) : null}
                    </div>
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
                    className={`mt-4 my-4 transition-opacity duration-300
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
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group flex items-center justify-between w-full rounded-xl bg-blue-600 px-5 py-3 text-white shadow-[0_10px_40px_rgba(37,99,235,0.35)] transition-all duration-300 hover:opacity-90 ${
                      isMiddle
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none absolute"
                    } `}
                  >
                    <span className="text-sm sm:text-base font-semibold">
                      Get Started Now
                    </span>

                    <div className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45 ">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
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
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="flex items-center justify-center w-15 h-15 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all duration-200"
        >
          <ArrowLeft className="w-7 h-7 text-white" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="flex items-center justify-center w-15 h-15 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all duration-200"
        >
          <ArrowRight className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
}

export default function FeaturesGrid() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-black px-4 sm:px-6 lg:px-8 py-20 select-none overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
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
      </motion.div>

      <div className="w-full mx-auto text-center">
        <CreativeSlider services={SERVICES} />
      </div>
    </section>
  );
}
