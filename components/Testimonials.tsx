"use client";

import React, { useState, useEffect } from "react";
import {  ArrowLeft, ArrowRight } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";
import {
  testimonialsData,
  type Testimonial,
} from "@/components/data/testimonialsData";

interface TestimonialCardProps {
  item: Testimonial;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function Testimonials() {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Total items and max limits depending on layout
  const totalItems = testimonialsData.length;
  const maxIndex = isMobile ? totalItems - 1 : totalItems - 3;

  // Reset index safely on screen resize
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Dynamic style translating percentage base:
  // Mobile = 100% per card step. Desktop = 33.333% per card step.
  const translatePercent = isMobile
    ? currentIndex * 100
    : currentIndex * (100 / 3);

  return (
    <section className="bg-black py-16 px-4 min-h-screen flex flex-col justify-center items-center overflow-x-hidden">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="flex flex-col items-center justify-center max-w-5xl pb-14 text-center mx-auto mb-8">
          <p className="text-zinc-400 font-medium mb-4 tracking-wide">
           Client Reviews
          </p>
          <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-zinc-100 leading-[1.1]">
            Words from{" "}
            <span className="font-serif italic font-light text-blue-500 block mt-2">
              Our Valued Clients
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-zinc-400">
            Trusted by businesses across India, UAE, Africa & Australia.
          </p>
        </div>

        {/* Slider Window Container */}
        <div className="overflow-hidden w-full   px-1">
          <div
            className="flex transition-transform duration-500 ease-out "
            style={{
              transform: `translateX(-${translatePercent}%)`,
            }}
          >
            {testimonialsData.map((item) => (
              <div key={item.id} className="w-full md:w-1/3 shrink-0 p-3">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-6 mt-8">
          <div className="flex gap-4">
            <SliderButton
              direction="left"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            />
            <SliderButton
              direction="right"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
            />
          </div>
 
        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENTS ---

interface SliderButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}

function SliderButton({ direction, onClick, disabled }: SliderButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="group p-3.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 active:scale-95 disabled:opacity-30 disabled:pointer-events-none disabled:scale-100 transition-all duration-200"
      aria-label={
        direction === "left" ? "Previous testimonial" : "Next testimonial"
      }
    >
      {direction === "left" ? (
        <ArrowLeft
          size={22}
          className="group-hover:-translate-x-0.5 transition-transform"
        />
      ) : (
        <ArrowRight
          size={22}
          className="group-hover:translate-x-0.5 transition-transform"
        />
      )}
    </button>
  );
}

function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <div className="bg-[#18181b] rounded-3xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border border-zinc-800/80 flex flex-col justify-between h-full min-h-[340px] transition-all hover:border-zinc-700">
      <div>
        <div className="text-white/20 text-4xl font-serif leading-none select-none mb-4">
          <FaQuoteLeft />
        </div>
        <div className="flex gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-amber-500 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-zinc-300 text-[15px] leading-relaxed italic font-normal">
          &ldquo;{item.content}&rdquo;
        </p>
      </div>
      <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-linear-to-tr from-[#5b31a6] via-[#713fc2] to-[#c14b84] flex items-center justify-center text-white font-bold text-lg shadow-sm">
            {item.initials}
          </div>
          <div>
            <h4 className="font-bold text-zinc-100 text-[15px] leading-tight">
              {item.name}
            </h4>
            <p className="text-xs text-zinc-400 font-medium mt-0.5">
              {item.role}
              {item.company && (
                <span className="block md:inline">{`, ${item.company}`}</span>
              )}
            </p>
          </div>
        </div>
        <span className="text-xs font-bold text-zinc-500 tracking-wider">
          {item.countryCode}
        </span>
      </div>
    </div>
  );
}
