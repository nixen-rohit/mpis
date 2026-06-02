"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LOGOS = [
  { id: 1, name: "brand1", img: "/img/brand1.webp" },
  { id: 2, name: "brand2", img: "/img/brand2.webp" },
  { id: 3, name: "brand3", img: "/img/brand3.webp" },
  { id: 4, name: "brand4", img: "/img/brand4.webp" },
  { id: 5, name: "brand5", img: "/img/brand5.webp" },
  { id: 6, name: "brand6", img: "/img/brand6.webp" },
];

export default function InfiniteLogo() {
  const tickerRef = useRef<HTMLDivElement>(null);

  // GSAP Infinite Loop Animation for the Logo Ticker

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    // Clone the ticker content for seamless looping
    const tickerContent = ticker.innerHTML;
    ticker.innerHTML += tickerContent;

    const totalWidth = ticker.scrollWidth / 2;

    const ctx = gsap.context(() => {
      gsap.to(ticker, {
        x: -totalWidth,
        duration: 25,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section className="relative h-full w-full overflow-hidden bg-white  flex flex-col justify-between  select-none">
      {/* Infinite Logo Ticker Section */}
      <div className="w-full max-w-7xl mx-auto mt-20">
        <div className="relative flex items-center justify-center mb-6">
          
          <span className="relative bg-transparent px-4   font-semibold text-center  text-base md:text-lg lg:text-xl leading-relaxed   text-gray-800 font-base uppercase ">
            Loved by 1000+ big and small brands around the world
          </span>
        </div>

        {/* Endless Scroller Container */}
        <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div
            ref={tickerRef}
            className="flex whitespace-nowrap gap-16 items-center w-max py-2"
          >
            {LOGOS.map((logo) => (
              <div
                key={logo.id}
                className="group flex items-center justify-center cursor-pointer"
              >
                <img
                  src={logo.img}
                  alt={logo.name || "brand logo"}
                  className="w-20 h-20 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
