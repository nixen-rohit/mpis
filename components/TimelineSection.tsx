"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
}

const timelineData: TimelineItem[] = [
  {
    id: "01",
    year: "2001 - 2004",
    title: "Started Operation",
    description:
      "Solutions, and measurable results are results committed understanding each client’s unique challenges and unique measurable is understanding client’s committed understanding each",
    image: "/img/video-cover.png",
  },
  {
    id: "02",
    year: "2005 - 2008",
    title: "Business Strategy",
     description:
      "Solutions, and measurable results are results committed understanding each client’s unique challenges and unique measurable is understanding client’s committed understanding each",
    image: "/img/video-cover.png",
  },
  {
    id: "03",
    year: "2009 - 2012",
    title: "Financial Advisory",
     description:
      "Solutions, and measurable results are results committed understanding each client’s unique challenges and unique measurable is understanding client’s committed understanding each",
     image: "/img/video-cover.png",
  },
  {
    id: "04",
    year: "2013 - 2016",
    title: "Risk Management",
     description:
      "Solutions, and measurable results are results committed understanding each client’s unique challenges and unique measurable is understanding client’s committed understanding each",
     image: "/img/video-cover.png",
  },
];

export default function ScrollLinkedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress specifically over this timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 60%"],
  });

  // Smooth out the scroll progression values
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="relative bg-zinc-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-zinc-100">
      {/* Subtle background ambiance glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center pb-14">
          <p className="text-purple-600 font-medium mb-4">
            Your Business Our Expertise
          </p>

          <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-white leading-[1.1]">
            Service for{" "}
            <span className="font-serif italic font-light text-blue-600">
              your development
            </span>
            <br />
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-gray-400">
            We believe that every business is uniquids our approach is never
            growth.
          </p>
        </div>

        {/* Timeline Wrapper Container */}
        <div ref={containerRef} className="relative">
          {/* Base Background Gray Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 transform -translate-x-1/2" />

          {/* Animated Scroll-Filling Colored Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-indigo-500 to-purple-600 transform -translate-x-1/2 origin-top"
          />

          <div className="space-y-16 md:space-y-28">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot/Node indicator */}
                  {/* whileInView serves perfectly here to catch the exact moment the node lights up */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 transform -translate-x-1/2 z-20 top-1.5 md:top-8">
                    {/* Background inactive ring */}
                    <div className="absolute inset-0 rounded-full bg-zinc-900 border-2 border-zinc-700" />

                    {/* Animated Blue Fill Node */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false, margin: "-30% 0px -40% 0px" }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="absolute inset-0 rounded-full bg-blue-500 border-2 border-white shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                    />
                  </div>

                  {/* Content Card Side */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-30% 0px -40% 0px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0 ${
                      isEven ? "md:pr-10 text-left" : "md:pl-10 text-left"
                    }`}
                  >
                    <div className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-2xl border border-zinc-800/80 hover:border-zinc-700/80 hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group">
                      {/* Image Block */}
                      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5 bg-zinc-800">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                          sizes="(max-width: 768px) 100vw, 40vw"
                        />
                      </div>

                      {/* Info Details */}
                      <span className="inline-block text-xs font-semibold text-blue-400 bg-blue-950/40 border border-blue-900/60 px-3 py-1 rounded-full mb-3 tracking-wider">
                        {item.year}
                      </span>

                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                        <span className="text-zinc-500 font-mono text-3xl mr-2">
                          {item.id}.
                        </span>
                        {item.title}
                      </h3>

                      <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Desktop Spacing Placeholder */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
