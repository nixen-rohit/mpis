"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const counterNumRef = useRef<HTMLSpanElement>(null);
  const svgWrapperRef = useRef<SVGSVGElement>(null);
  const loadingLabelRef = useRef<HTMLSpanElement>(null);

  // Inject Fonts
  useEffect(() => {
    const id = "preloader-fonts";

    if (document.getElementById(id)) return;

    const link = document.createElement("link");

    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@800&display=swap";

    document.head.appendChild(link);
  }, []);

  useGSAP(
    () => {
      // Loading blink
      gsap.to(loadingLabelRef.current, {
        opacity: 0.25,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      const tl = gsap.timeline({
        onComplete: () => onComplete?.(),
      });

      // ─────────────────────────────────────────────
      // PHASE 1 — Counter Intro
      // ─────────────────────────────────────────────

      tl.fromTo(
        counterRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "expo.out",
        },
      );

      // Counter 100 → 00
      const countObj = { val: 100 };

      tl.to(
        countObj,
        {
          val: 0,
          duration: 2.5,
          ease: "power1.inOut",

          onUpdate() {
            if (!counterNumRef.current) return;

            const v = Math.round(countObj.val);

            counterNumRef.current.textContent = String(v).padStart(2, "0");
          },
        },
        "<+=0.1",
      );

      // Hold on 00
      tl.to({}, { duration: 0.25 });

      // ─────────────────────────────────────────────
      // PHASE 2 — Counter goes top-right
      // ─────────────────────────────────────────────

      tl.to(counterRef.current, {
        x: () => {
          const rect = counterRef.current!.getBoundingClientRect();

          return window.innerWidth - rect.right - 28;
        },

        y: () => {
          const rect = counterRef.current!.getBoundingClientRect();

          return 28 - rect.top;
        },

        scale: 0.35,
        duration: 1,
        ease: "expo.inOut",
      });

      // Fade label only
      tl.to(
        loadingLabelRef.current,
        {
          opacity: 0,
          duration: 0.25,
        },
        "<+0.1",
      );

      // ─────────────────────────────────────────────
      // PHASE 3 — MPIS enters from LEFT to CENTER
      // ─────────────────────────────────────────────

      // Start fully off-screen left
      tl.set(svgWrapperRef.current, {
        x: "-140vw",
        opacity: 1,
      });

      // MPIS slides into center
      tl.to(
        svgWrapperRef.current,
        {
          x: "0vw",
          duration: 1.5,
          ease: "expo.out",
        },
        "+=0.05",
      );

      // Small cinematic settle
      tl.to(svgWrapperRef.current, {
        x: "-1vw",
        duration: 0.16,
        ease: "power2.out",
      });

      tl.to(svgWrapperRef.current, {
        x: "0vw",
        duration: 0.12,
        ease: "power2.out",
      });

      // Hold at center
      tl.to({}, { duration: 0.4 });

      // ─────────────────────────────────────────────
      // PHASE 4 — Entire preloader goes UP
      // ─────────────────────────────────────────────

      tl.to(
        containerRef.current,
        {
          y: "-100vh",
          duration: 1.35,
          ease: "expo.inOut",
        },
        "+=0.02",
      );

      // Smooth fade during exit
      tl.to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.6,
          pointerEvents: "none",
        },
        "-=1",
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
      style={{
        willChange: "transform, opacity",
      }}
    >
      {/* Counter */}
      <div
        ref={counterRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          transformOrigin: "center center",
          opacity: 0,
          textAlign: "center",
          lineHeight: 1,
          willChange: "transform, opacity",
        }}
      >
        <span
          ref={counterNumRef}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(5rem, 14vw, 11rem)",
            fontWeight: 400,
            color: "#fff",
            letterSpacing: "0.08em",
            display: "block",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          100
        </span>

        <span
          ref={loadingLabelRef}
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "clamp(0.55rem, 1.2vw, 0.8rem)",
            fontWeight: 800,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            display: "block",
            marginTop: "0.4em",
          }}
        >
          Loading
        </span>
      </div>

      {/* MPIS */}
      <svg
        ref={svgWrapperRef}
        viewBox="0 0 440 160"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "clamp(260px, 50vw, 520px)",
          height: "auto",
          overflow: "visible",
          opacity: 0,
          willChange: "transform",
        }}
      >
        <text
          x="220"
          y="80"
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "clamp(80px, 20vw, 150px)",
            fontWeight: 800,
            letterSpacing: "0.12em",
          }}
        >
          MPIS
        </text>
      </svg>
    </div>
  );
}
