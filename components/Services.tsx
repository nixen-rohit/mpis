"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Button from "@/components/ui/Button";

interface ServiceItem {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  tags: string[];
  image: string;
}

const services: ServiceItem[] = [
  {
    id: "01.",
    title: "Custom Software Development",
    subTitle: "Bespoke Solutions Built for You",
    description:
      "We architect scalable, secure, and highly customized software solutions crafted specifically to tackle your unique business challenges and drive operational efficiency.",
    tags: ["Click here"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
  },
  {
    id: "02.",
    title: "Web Application Development",
    subTitle: "Dynamic & Scalable Web Apps",
    description:
      "Deliver exceptional digital experiences with responsive, fast, and robust web applications designed to engage users and convert visitors into loyal customers.",
    tags: ["Click here"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
  },
  {
    id: "03.",
    title: "App Development",
    subTitle: "Next-Gen Mobile Experiences",
    description:
      "From iOS to Android, we engineer intuitive mobile applications that captivate audiences, foster brand loyalty, and leverage cutting-edge device capabilities.",
    tags: ["Click here"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
  },
  {
    id: "04.",
    title: "Healthcare Software",
    subTitle: "Innovating Patient Care",
    description:
      "Empower medical professionals with secure, compliant, and transformative healthcare applications ranging from telehealth platforms to robust hospital management systems.",
    tags: ["Click here"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
  {
    id: "05.",
    title: "E-Learning Development",
    subTitle: "Revolutionizing Education",
    description:
      "Deploy scalable Learning Management Systems (LMS) and interactive educational platforms that make remote learning engaging, trackable, and accessible anywhere.",
    tags: ["Click here"],
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
  },
  {
    id: "06.",
    title: ".NET Application Dev",
    subTitle: "Enterprise-Grade .NET Solutions",
    description:
      "Leverage the full power of Microsoft's ecosystem to build high-performance, resilient, and enterprise-ready applications using the latest .NET Core technologies.",
    tags: ["Click here"],
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  },
];

// ─── Wave distortion helper ───────────────────────────────────────────────────
function drawWaveImage(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  w: number,
  h: number,
  t: number,
  intensity: number,
) {
  const offscreen = document.createElement("canvas");
  offscreen.width = w;
  offscreen.height = h;
  const octx = offscreen.getContext("2d")!;
  octx.drawImage(img, 0, 0, w, h);
  const imageData = octx.getImageData(0, 0, w, h);
  const output = ctx.createImageData(w, h);
  const src = imageData.data;
  const dst = output.data;
  const amp = intensity * 12;
  const freq = 0.04;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx =
        Math.sin(y * freq + t * 2) * amp +
        Math.sin(y * freq * 0.5 + t) * amp * 0.5;
      const dy = Math.sin(x * freq + t * 1.5) * amp * 0.3;
      const sx = Math.round(x + dx);
      const sy = Math.round(y + dy);
      const si =
        (Math.min(Math.max(sy, 0), h - 1) * w +
          Math.min(Math.max(sx, 0), w - 1)) *
        4;
      const di = (y * w + x) * 4;
      dst[di] = src[si];
      dst[di + 1] = src[si + 1];
      dst[di + 2] = src[si + 2];
      dst[di + 3] = src[si + 3];
    }
  }
  ctx.putImageData(output, 0, 0);
}

// ─── Hover Wave Preview (floating cursor follow) ──────────────────────────────
interface HoverPreviewProps {
  image: HTMLImageElement | null;
  mouseX: number;
  mouseY: number;
  visible: boolean;
}

function HoverWavePreview({
  image,
  mouseX,
  mouseY,
  visible,
}: HoverPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!visible || !image) return;
    const animate = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      drawWaveImage(
        ctx,
        image,
        canvas.width,
        canvas.height,
        Date.now() * 0.001,
        1,
      );
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [visible, image]);

  return (
    <div
      style={{
        position: "fixed",
        left: mouseX,
        top: mouseY - 90,
        transform: "translate(-50%, -50%)",
        width: 260,
        height: 160,
        borderRadius: 10,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
      }}
    >
      <canvas
        ref={canvasRef}
        width={260}
        height={160}
        style={{ display: "block" }}
      />
    </div>
  );
}

// ─── Expanded Wave Canvas (live animated inside accordion) ────────────────────
interface ExpandedWaveCanvasProps {
  image: HTMLImageElement | null;
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Service() {
  const [activeId, setActiveId] = useState<string | null>("");
  const [hoverState, setHoverState] = useState<{
    visible: boolean;
    image: HTMLImageElement | null;
    x: number;
    y: number;
  }>({ visible: false, image: null, x: 0, y: 0 });

  const imgCache = useRef<Record<string, HTMLImageElement>>({});

  useEffect(() => {
    services.forEach((s) => {
      if (imgCache.current[s.id]) return;
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = s.image;
      img.onload = () => {
        imgCache.current[s.id] = img;
      };
    });
  }, []);

  const handleMouseEnter = useCallback((id: string, e: React.MouseEvent) => {
    const img = imgCache.current[id] ?? null;
    setHoverState({ visible: true, image: img, x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setHoverState((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoverState((prev) => ({ ...prev, visible: false, image: null }));
  }, []);

  return (
    <div className="bg-black">
      {/* ───────────────── Heading ───────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className=" flex flex-col items-center justify-center px-4 sm:px-6 text-center pt-10"
      >
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mb-3 sm:mb-4 text-[11px] sm:text-sm font-medium uppercase tracking-[0.2em] text-neutral-500 "
        >
          Your Business Our Expertise
        </motion.span>

        {/* Title */}
        <h2 className="max-w-6xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight leading-[1.05] text-white">
          Service For Your{" "}
          <span className="font-serif italic font-light text-blue-500">
            Development
          </span>{" "}
          Solutions
        </h2>

        {/* Description */}
        <p className="mt-5 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-neutral-400 ">
          We believe that every business is unique. Our approach to your growth
          is never one-size-fits-all, providing tailored development solutions
          to meet your exact needs.
        </p>
      </motion.div>

      <div className="hidden lg:flex">
        <HoverWavePreview
          image={hoverState.image}
          mouseX={hoverState.x}
          mouseY={hoverState.y}
          visible={hoverState.visible}
        />
      </div>

      {/* ───────────────── Services ───────────────── */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 select-none font-sans ">
        <div className="border-t border-white/10">
          {services.map((service) => {
            const isActive = activeId === service.id;

            return (
              <div
                key={service.id}
                className="border-b border-white/10 transition-colors duration-300 hover:bg-white/2 "
              >
                {/* ───── Header ───── */}
                <div
                  onClick={() => setActiveId(isActive ? null : service.id)}
                  onMouseEnter={(e) => handleMouseEnter(service.id, e)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="grid grid-cols-12 items-start sm:items-center gap-y-4 py-6 sm:py-8 cursor-pointer group"
                >
                  {/* Left */}
                  <div className="col-span-10 sm:col-span-11 md:col-span-8 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-5 ">
                    <span className="text-xs sm:text-sm md:text-base font-mono text-neutral-500">
                      {service.id}
                    </span>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-white transition-transform duration-300 group-hover:translate-x-1">
                      {service.title}
                    </h2>
                  </div>

                  {/* Right Icon */}
                  <div className="col-span-2 sm:col-span-1 md:col-span-4 flex justify-end pr-1 sm:pr-4 ">
                    <motion.span
                      animate={{ rotate: isActive ? 45 : 180 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="text-neutral-500"
                    >
                      <Plus className="w-6 h-6 sm:w-8 sm:h-8" />
                    </motion.span>
                  </div>
                </div>

                {/* ───── Expanded Content ───── */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.25, 1, 0.5, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pb-8 sm:pb-10 ">
                        {/* Text */}
                        <div className=" md:col-span-7 px-1 sm:px-4 md:pl-12 flex flex-col justify-center space-y-4">
                          <h3 className="text-xl sm:text-2xl font-medium text-blue-500 ">
                            {service.subTitle}
                          </h3>

                          <p className="max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-neutral-400">
                            {service.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-3 pt-2">
                            {service.tags.map((tag, i) => (
                              <button
                                key={i}
                                className="px-4 py-2 text-[10px] sm:text-xs uppercase font-semibold tracking-wider rounded-full border border-white/10 bg-white/3 text-neutral-300 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-200 "
                              >
                                {tag}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Image */}
                        <div className=" md:col-span-5 h-[240px] sm:h-[320px] md:h-full overflow-hidden rounded-2xl border border-white/10">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
