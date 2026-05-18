'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => onComplete?.(),
      });

      // 1. Cinematic Entry: Slide + Zoom from middle-left
      tl.fromTo(
        '.mpis-wrapper',
        { x: '-14vw', scale: 0.92, opacity: 0, rotate: 1.2 },
        { x: 0, scale: 1, opacity: 1, rotate: 0, duration: 1.35, ease: 'expo.out' }
      )

      // 2. Slice Line: Expands from center outward
      .fromTo(
        lineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.65, ease: 'power2.inOut' },
        'slice'
      )

      // 3. Split: Top ↑ / Bottom ↓ simultaneously
      .to('.mpis-top',    { y: '-115vh', opacity: 0, duration: 0.95, ease: 'power4.in' }, 'split')
      .to('.mpis-bottom', { y:  '115vh', opacity: 0, duration: 0.95, ease: 'power4.in' }, 'split')

      // 4. Line fades slightly after split initiates
      .to(lineRef.current, { opacity: 0, duration: 0.4, ease: 'power2.in' }, 'split+=0.05')

      // 5. Container cleanup
      .to(containerRef.current, { opacity: 0, duration: 0.5, pointerEvents: 'none' }, '-=0.25');
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      style={{ willChange: 'transform, opacity' }}
    >
      <svg
        className="mpis-wrapper w-[380px] h-[160px]"
        viewBox="0 0 380 160"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <clipPath id="clip-top">
            <rect x="0" y="0" width="380" height="80" />
          </clipPath>
          <clipPath id="clip-bottom">
            <rect x="0" y="80" width="380" height="80" />
          </clipPath>
        </defs>

        {/* Top Half */}
        <g className="mpis-top" clipPath="url(#clip-top)">
          <text
            x="190"
            y="80"
            textAnchor="middle"
            dominantBaseline="central"
            dy="0.05em"
            className="fill-white text-3xl     md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold"
             
          >
            MPIS
          </text>
        </g>

        {/* Bottom Half */}
        <g className="mpis-bottom" clipPath="url(#clip-bottom)">
          <text
            x="190"
            y="80"
            textAnchor="middle"
            dominantBaseline="central"
            dy="0.05em"
            className="fill-white text-3xl    md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold"
             
          >
            MPIS
          </text>
        </g>

      </svg>

      {/* Full-viewport Slice Line — lives outside SVG so it truly spans 100vw */}
      <div
        ref={lineRef}
        className="absolute left-0 right-0"
        style={{
          top: '50%',
          height: '2.5px',
          background: '#ffffff',
          boxShadow: '0 0 8px 2px rgba(255,255,255,0.7)',
          transformOrigin: 'center',
          willChange: 'transform, opacity',
        }}
      />
    </div>
  );
}