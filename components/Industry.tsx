"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";

interface IndustryItem {
  id: string;
  name: string;
  imageUrl: string;
}

const allIndustries: IndustryItem[] = [
  {
    id: "1",
    name: "Healthcare",
    imageUrl: "https://images.unsplash.com/photo-1584515933487-78021c4631b4?auto=format&fit=crop&q=80&w=80&h=80",
  },
  {
    id: "2",
    name: "Education",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=80&h=80",
  },
  {
    id: "3",
    name: "Retail",
    imageUrl: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=80&h=80",
  },
  {
    id: "4",
    name: "Real Estate",
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=80&h=80",
  },
  {
    id: "5",
    name: "Manufacturing",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=80&h=80",
  },
  {
    id: "6",
    name: "Finance",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=80&h=80",
  },
  {
    id: "7",
    name: "Logistics",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=80&h=80",
  },
  {
    id: "8",
    name: "E-Commerce",
    imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=80&h=80",
  },
  {
    id: "9",
    name: "Startups",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=80&h=80",
  },
  {
    id: "10",
    name: "Enterprises",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=80&h=80",
  },
];

// ── Capsule Card ───────────────────────────────────────────────
function CapsuleCard({
  item,
  onToggle,
}: {
  item: IndustryItem;
  onToggle: () => void;
}) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className="group inline-flex items-center gap-3 bg-[#23313E] hover:bg-[#2C3E50] border border-white/10 hover:border-blue-500/40 rounded-full pl-2 pr-4 py-2 cursor-pointer select-none shrink-0 min-w-[200px] transition-all duration-200"
    >
      {/* Avatar */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-transparent group-hover:border-blue-500 transition-colors duration-200">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          sizes="40px"
          className="object-cover"
        />
      </div>

      {/* Label */}
      <span className="text-sm font-medium text-gray-200 group-hover:text-blue-400 transition-colors duration-200 flex-1">
        {item.name}
      </span>

      {/* Icon button */}
      <div className="flex items-center justify-center w-9 h-9 rounded-full text-white transition-all duration-300 bg-blue-600 group-hover:bg-blue-500 rotate-45 group-hover:rotate-0">
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </div>
  );
}

// ── Row ────────────────────────────────────────────────────────
function MarqueeRow({
  items,
  direction,
}: {
  items: IndustryItem[];
  direction: "left" | "right";
}) {
  const controls = useAnimationControls();

  const duplicated = [...items, ...items, ...items];

  const startAnimation = () => {
    controls.start({
      x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  React.useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        animate={controls}
        className="flex gap-4 w-max py-2"
      >
        {duplicated.map((item, i) => (
          <motion.div
            key={`${item.id}-${i}`}
            whileHover={{
              y: -6,
              scale: 1.04,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => startAnimation()}
          >
            <CapsuleCard
              item={item}
              onToggle={() => {}}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-linear-to-r from-white via-white/70 to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-linear-to-l from-white via-white/70 to-transparent" />
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────
export default function IndustryMarquee() {
  const row1 = allIndustries.slice(0, 5);
  const row2 = allIndustries.slice(5, 10);

  return (
    <div className="w-full bg-white py-14 overflow-hidden">
      {/* Heading */}
      <div className="mx-auto mb-12 flex max-w-7xl flex-col items-center justify-center md:mb-16 px-4">
        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-black sm:text-base">
          Industries We Serve
        </span>

        <h2 className="max-w-6xl text-center text-4xl font-bold leading-[1.1] tracking-tight text-black sm:text-6xl md:text-7xl">
          Global Sectors We{" "}
          <span className="block font-light italic font-serif text-blue-600">Empower for every </span>{" "}
          industry
        </h2>

        {/* Supporting description */}
        <p className="mt-6 max-w-3xl mx-auto text-center text-sm sm:text-base md:text-lg text-gray-600">
          We deliver business software solutions across industries including:
        </p>
      </div>

      {/* Tracks */}
      <div className="flex flex-col gap-6 py-2">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>
    </div>
  );
}