"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, Variants, PanInfo, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
  const [isDragging, setIsDragging] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isHoveringPreview, setIsHoveringPreview] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);
  
  const cardOffset = useCardOffset();

  // Autoplay effect - pauses when any explicit interaction state is true
  useEffect(() => {
    if (isPaused || isDragging || isHoveringPreview) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= services.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length, isPaused, isDragging, isHoveringPreview]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= services.length - 1 ? 0 : prev + 1));
  }, [services.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? services.length - 1 : prev - 1));
  }, [services.length]);

  // Drag handlers for Swipe navigation
  const handleDragStart = () => {
    setIsDragging(true);
    setIsPaused(true);
    dragX.set(0);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    setIsPaused(false);
    
    // Explicit 50px drag threshold to filter out accidental micro-gestures
    const threshold = 50;
    
    if (info.offset.x > threshold) {
      handlePrev();
    } else if (info.offset.x < -threshold) {
      handleNext();
    }
    
    dragX.set(0);
  };

  // Hover handlers for the primary viewport container
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (!isDragging && !isHoveringPreview) {
      setIsPaused(false);
    }
  };

  // Unified hover navigation for Left side preview cards
  const handleLeftPreviewHover = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    
    setIsHoveringPreview(true);
    setIsPaused(true);
    
    const timeout = setTimeout(() => {
      handlePrev();
      // Grace period to let transitions finish smoothly before unpausing
      setTimeout(() => {
        setIsHoveringPreview(false);
        setIsPaused(false);
      }, 1000);
    }, 1400); // Premium 400ms confirmation window
    
    setHoverTimeout(timeout);
  };

  // Unified hover navigation for Right side preview cards
  const handleRightPreviewHover = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    
    setIsHoveringPreview(true);
    setIsPaused(true);
    
    const timeout = setTimeout(() => {
      handleNext();
      setTimeout(() => {
        setIsHoveringPreview(false);
        setIsPaused(false);
      }, 1000);
    }, 1400); // Standardized to 400ms to match the left card behavior
    
    setHoverTimeout(timeout);
  };

  const handlePreviewHoverEnd = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    
    setIsHoveringPreview(false);
    if (!isDragging) {
      setIsPaused(false);
    }
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

  const dragConstraints = {
    left: -100,
    right: 100,
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-5 px-4 sm:px-6">
      {/* Main interaction canvas container */}
      <div 
        ref={sliderRef}
        className="relative flex items-center justify-center min-h-[480px] overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleCards.map(({ service, position }) => {
            const isMiddle = position === "middle";
            const isLeft = position === "left";
            const isRight = position === "right";

            const xTranslation = isMiddle
              ? 0
              : isLeft
                ? -cardOffset
                : cardOffset;

            const isInteractivePreview = !isMiddle && !isDragging;

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
                  ${isMiddle ? "border-white/20 shadow-[0_20px_50px_rgba(255,255,255,0.08)] bg-white/10 min-h-[400px] md:min-h-[450px]" : "border-white/5 hidden sm:flex min-h-[200px] sm:min-h-[250px]"}
                  ${isInteractivePreview ? "cursor-pointer hover:scale-90 transition-transform duration-300" : ""}
                `}
                onHoverStart={isLeft && isInteractivePreview ? handleLeftPreviewHover : isRight && isInteractivePreview ? handleRightPreviewHover : undefined}
                onHoverEnd={isInteractivePreview ? handlePreviewHoverEnd : undefined}
                style={isMiddle && !isDragging ? { x: dragX } : {}}
                drag={isMiddle ? "x" : false}
                dragConstraints={dragConstraints}
                dragElastic={0.2}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
                onDragStart={isMiddle ? handleDragStart : undefined}
                onDragEnd={isMiddle ? handleDragEnd : undefined}
                whileDrag={isMiddle ? { cursor: "grabbing" } : {}}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <div className="relative group">
                    {/* Ambient Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

                    {/* Icon Base Wrap */}
                    <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out group-hover:border-blue-400/20 group-hover:bg-blue-500/6 group-hover:translate-y-[-2px] group-hover:shadow-[0_10px_40px_rgba(59,130,246,0.18)]">
                      <div className="absolute inset-px rounded-[15px] bg-linear-to-b from-white/5 to-transparent" />

                      {/* Animated Shimmer Overlays */}
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

                  {/* Categories / Tags Array */}
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

                  {/* Primary CTA Action Button */}
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
          <span className="font-serif italic font-light text-blue-500">
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