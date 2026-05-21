"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, ArrowUpRight, Mail, Clock3, ShieldCheck, Phone, } from "lucide-react";

const statsCards = [
  {
    id: 1,
    title: "200+",
    subtitle: "Projects Delivered",
    type: "avatars",
    avatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
    ],
  },
  {
    id: 2,
    title: "98%",
    subtitle: "Successful growth rate",
    type: "graph",
    graphBars: [
      "h-2 bg-white/20",
      "h-4 bg-white/20",
      "h-6 bg-white/20",
      "h-8 bg-white/20",
      "h-12 bg-white/40",
      "h-16 bg-white/60",
      "h-20 bg-white/80",
      "h-24 bg-white",
    ],
  },
];

interface InfoItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBgColor: string;
  iconTextColor: string;
  renderContent: () => React.ReactNode;
}

const infoItems: InfoItem[] = [
  {
    id: 'email',
    label: 'Email Us',
    icon: Mail,
    iconBgColor: 'bg-blue-500/10',
    iconTextColor: 'text-blue-600',
    renderContent: () => (
      <a
        href="mailto:hello@mpis.com"
        className="mt-2 inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors"
      >
        hello@mpis.com
        <ArrowUpRight className="h-4 w-4" />
      </a>
    ),
  },
  {
    id: 'hours',
    label: 'Working Hours',
    icon: Clock3,
    iconBgColor: 'bg-cyan-500/10',
    iconTextColor: 'text-cyan-600',
    renderContent: () => (
      <>
        <p className="mt-2 text-sm sm:text-base font-semibold text-gray-900">
          Mon–Sat
        </p>
        <p className="text-xs sm:text-sm text-gray-600">
          9:00 AM – 7:00 PM IST
        </p>
      </>
    ),
  },
  {
    id: 'security',
    label: 'Privacy First',
    icon: ShieldCheck,
    iconBgColor: 'bg-emerald-500/10',
    iconTextColor: 'text-emerald-600',
    renderContent: () => (
      <>
        <p className="mt-2 text-sm sm:text-base font-semibold text-gray-900">
          NDA-protected
        </p>
        <p className="text-xs sm:text-sm text-gray-600">
          100% confidential communication
        </p>
      </>
    ),
  },
];

export default function Consultation() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="w-full min-h-screen bg-[#FFF9F6] py-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 flex flex-col justify-center items-center overflow-x-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-5 flex flex-col justify-center sticky top-8">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <span className="mb-2 sm:mb-3   inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-gray-500">
                Let's Connect!
              </span>

              <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal tracking-tight leading-[1.1] text-[#111111]">
                Let’s Build Powerful IT{" "}
                <span className="block font-serif italic font-normal text-blue-600 sm:inline">
                  Solutions and Digital
                </span>{" "}
                Services Together?
              </h2>

              <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
                Everything you need to know about us and our services.
                Can’t find an answer? Feel free to contact us.
              </p>
            </div>
            {/* BUTTONS CONTAINER */}
            <div className="flex flex-col sm:flex-row w-full gap-3 items-center justify-center sm:justify-start">

              {/* primary button */}
              <button
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-blue-600 to-blue-500 text-white p-3 text-sm sm:text-base font-semibold shadow-lg shadow-blue-200/60 transition-all duration-300 hover:from-blue-700 hover:to-blue-600 hover:shadow-xl hover:shadow-blue-300/40 active:scale-[0.98] "
              >

                <span>Free consultation</span>
                <span
                  className=" flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md border border-white/10 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 "
                >
                  <ArrowUpRight className="h-5 w-5" />
                </span>


              </button>

              {/* secondary button */}
              <button
                className=" mb-3 md:mb-0 group w-full sm:w-auto inline-flex items-center justify-center gap-3  bg-[#1D1B24] rounded-2xl border border-gray-200 px-5 sm:px-6 py-3 text-sm sm:text-base font-medium text-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-zinc-800 hover:shadow-md active:scale-[0.98] "
              >
                <span
                  className=" flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md border border-white/10 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 "
                >
                  <Phone className="h-5 w-5" />
                </span>

                <span>+91 7318080200</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-6 w-full">

          {/* STATS CARDS */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {statsCards.map((card) => (
              <div
                key={card.id}
                className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 to-blue-700 p-6 text-white shadow-[0_20px_60px_rgba(37,99,235,0.25)] flex-1 min-h-[160px] flex flex-col justify-between"
              >
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

              <div
  className={`relative z-10 flex h-full w-full justify-between ${
    card.type === "graph" || card.type === "avatars"
      ? "flex-row items-center md:flex-col md:items-start"
      : "flex-col items-start"
  }`}
>
                 {card.type === "avatars" && (
  <div className="flex -space-x-2 md:mb-4 order-2 md:order-1 pr-10 md:pr-0">
    {card.avatars?.map((src, index) => (
      <img
        key={index}
        src={src}
        alt="Client avatar"
        className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border-2 border-white object-cover shadow-sm transition-transform duration-300 hover:-translate-y-1"
      />
    ))}
  </div>
)}

                  <div className="space-y-1 w-full order-1 md:order-2">
  <h3 className="text-4xl sm:text-5xl font-black tracking-tight">
    {card.title}
  </h3>

  <p className="text-sm font-medium text-blue-100">
    {card.subtitle}
  </p>
</div>

                  {card.type === "graph" && (
  <div className="flex items-end gap-2 h-16 justify-end md:justify-start order-2 md:order-3">
    {card.graphBars?.map((bar, index) => (
      <div
        key={index}
        className={`w-3 rounded-t-md ${bar}`}
      />
    ))}
  </div>
)}
                </div>
              </div>
            ))}
          </div>

          {/* VIDEO BOX */}
          <div className="md:col-span-7 relative min-h-[280px] md:min-h-[336px] overflow-hidden rounded-3xl bg-gray-200 group">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              poster="/img/video-cover.png"
              preload="metadata"
            >
              <source src="/video/work-video.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/20" />

            <button
              onClick={handleVideoToggle}
              className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#FFF9F6] bg-[#1D1B24] text-white shadow-lg transition-all duration-300 hover:scale-105"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 fill-current" />
              ) : (
                <Play className="ml-0.5 h-5 w-5 fill-current" />
              )}
            </button>
          </div>

          {/* INFO ITEMS (Now wrapped to span the full grid width, and styled safely for light background) */}
          <div
            className=" md:col-span-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full mt-3"
          >
            {infoItems.map((item) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-blue-100 bg-linear-to-br from-white to-gray-50 p-4 sm:p-5 shadow-lg sm:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 "
                >
                  {/* glow effect */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -top-10 -right-10 h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-blue-100/40 blur-3xl" />
                  </div>

                  {/* responsive top layout */}
                  <div
                    className=" relative z-10 flex items-center gap-4  lg:flex-col lg:items-center lg:justify-center lg:text-center "
                  >
                    {/* icon */}
                    <div
                      className={` shrink-0 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl shadow-sm ring-1 ring-black/5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
              ${item.iconBgColor}
              ${item.iconTextColor}
            `}
                    >
                      <IconComponent
                        className=" h-5 w-5 sm:h-6 sm:w-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 "
                      />
                    </div>

                    {/* text section */}
                    <div className="min-w-0 flex-1 lg:flex-none">
                      {/* label */}
                      <p
                        className=" text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-bold text-gray-500 mb-1 lg:mb-2 "
                      >
                        {item.label}
                      </p>

                      {/* content */}
                      <div
                        className=" text-sm sm:text-base text-gray-800 wrap-break-word "
                      >
                        {item.renderContent()}
                      </div>
                    </div>
                  </div>

                  {/* animated bottom line */}
                  <div className="mt-4 sm:mt-5 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full rounded-full" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}