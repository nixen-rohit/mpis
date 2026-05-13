"use client";

import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { useAspect, useTexture } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three/webgpu";
import { bloom } from "three/examples/jsm/tsl/display/BloomNode.js";
import { Mesh } from "three";
import Link from "next/link";

import {
  abs,
  blendScreen,
  float,
  mod,
  mx_cell_noise_float,
  oneMinus,
  smoothstep,
  texture,
  uniform,
  uv,
  vec2,
  vec3,
  pass,
  mix,
  add,
} from "three/tsl";

const TEXTUREMAP = { src: "https://i.postimg.cc/XYwvXN8D/img-4.png" };
const DEPTHMAP = { src: "https://i.postimg.cc/2SHKQh2q/raw-4.webp" };

extend(THREE as any);

// Post Processing component
const PostProcessing = ({
  strength = 1,
  threshold = 1,
  fullScreenEffect = true,
}: {
  strength?: number;
  threshold?: number;
  fullScreenEffect?: boolean;
}) => {
  const { gl, scene, camera } = useThree();
  const progressRef = useRef({ value: 0 });

  const render = useMemo(() => {
    const postProcessing = new THREE.PostProcessing(gl as any);
    const scenePass = pass(scene, camera);
    const scenePassColor = scenePass.getTextureNode("output");
    const bloomPass = bloom(scenePassColor, strength, 0.5, threshold);

    // Create the scanning effect uniform
    const uScanProgress = uniform(0);
    progressRef.current = uScanProgress;

    // Create a red overlay that follows the scan line
    const scanPos = float(uScanProgress.value);
    const uvY = uv().y;
    const scanWidth = float(0.05);
    const scanLine = smoothstep(0, scanWidth, abs(uvY.sub(scanPos)));
    const redOverlay = vec3(1, 0, 0).mul(oneMinus(scanLine)).mul(0.4);

    // Mix the original scene with the red overlay
    const withScanEffect = mix(
      scenePassColor,
      add(scenePassColor, redOverlay),
      fullScreenEffect ? smoothstep(0.9, 1.0, oneMinus(scanLine)) : 1.0,
    );

    // Add bloom effect after scan effect
    const final = withScanEffect.add(bloomPass);

    postProcessing.outputNode = final;

    return postProcessing;
  }, [camera, gl, scene, strength, threshold, fullScreenEffect]);

  useFrame(({ clock }) => {
    // Animate the scan line from top to bottom
    progressRef.current.value =
      Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
    render.renderAsync();
  }, 1);

  return null;
};

const WIDTH = 300;
const HEIGHT = 300;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);

  const meshRef = useRef<Mesh>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Показываем изображение после загрузки текстур
    if (rawMap && depthMap) {
      setVisible(true);
    }
  }, [rawMap, depthMap]);

  const { material, uniforms } = useMemo(() => {
    const uPointer = uniform(new THREE.Vector2(0));
    const uProgress = uniform(0);

    const strength = 0.01;

    const tDepthMap = texture(depthMap);

    const tMap = texture(
      rawMap,
      uv().add(tDepthMap.r.mul(uPointer).mul(strength)),
    );

    const aspect = float(WIDTH).div(HEIGHT);
    const tUv = vec2(uv().x.mul(aspect), uv().y);

    const tiling = vec2(120.0);
    const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0);

    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));

    const dist = float(tiledUv.length());
    const dot = float(smoothstep(0.5, 0.49, dist)).mul(brightness);

   const depthDifference = float(tDepthMap.r.sub(uProgress));

    const flow = oneMinus(
      smoothstep(float(0), float(0.02), abs(depthDifference)),
    );

    const mask = dot.mul(flow).mul(vec3(10, 0, 0));

    const final = blendScreen(tMap, mask);

    const material = new THREE.MeshBasicNodeMaterial({
      colorNode: final,
      transparent: true,
      opacity: 0,
    });

    return {
      material,
      uniforms: {
        uPointer,
        uProgress,
      },
    };
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock }) => {
    uniforms.uProgress.value =
      Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
    // Плавное появление
    if (
      meshRef.current &&
      "material" in meshRef.current &&
      meshRef.current.material
    ) {
      const mat = meshRef.current.material as any;
      if ("opacity" in mat) {
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, visible ? 1 : 0, 0.07);
      }
    }
  });

  useFrame(({ pointer }) => {
    uniforms.uPointer.value = pointer;
  });

  const scaleFactor = 0.4;
  return (
    <mesh
      ref={meshRef}
      scale={[w * scaleFactor, h * scaleFactor, 1]}
      material={material}
    >
      <planeGeometry />
    </mesh>
  );
};

const CTAButtons: React.FC = () => (
  <div className="absolute bottom-0 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-4  sm:flex-row  ">
    {/* Primary CTA — Luxury Black + Red Energy */}
    <Link
      href="/"
      prefetch={false}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-9 py-4 transition-all duration-500 hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
    >
      {/* Outer red ambient glow */}
      <span className="absolute inset-0 rounded-2xl bg-red-600/20 blur-2xl opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:bg-red-500/30" />

      {/* Animated premium border */}
      <span className="absolute inset-0 rounded-2xl p-[1.5px]">
        <span className="absolute inset-0 animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_180deg_at_50%_50%,#7f1d1d_0%,#ef4444_20%,#450a0a_40%,#ef4444_60%,#111111_80%,#7f1d1d_100%)]" />
      </span>

      {/* Main body */}
      <span className="absolute inset-[1.5px] rounded-2xl bg-linear-to-b from-zinc-950 via-black to-zinc-900" />

      {/* Inner sheen */}
      <span className="absolute inset-[1.5px] rounded-2xl bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08),transparent_35%)]" />

      {/* Shine sweep */}
      <span className="absolute -left-full top-0 h-full w-1/2 skew-x-[-20deg] bg-linear-to-r from-transparent via-red-500/20 to-transparent transition-all duration-1000 group-hover:left-[150%]" />

      {/* Text */}
      <span className="relative z-10 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-white">
        Get Started
        <span className="text-red-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-400">
          →
        </span>
      </span>
    </Link>

    {/* Secondary CTA — Matte Dark Glass */}
    <Link
      href="/"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-red-900/40 bg-zinc-950/80 px-9 py-4 backdrop-blur-xl transition-all duration-500 hover:scale-[1.03] hover:border-red-500/60 hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
    >
      {/* Subtle red glow */}
      <span className="absolute inset-0 rounded-2xl bg-red-950/0 opacity-0 blur-xl transition-all duration-500 group-hover:bg-red-900/20 group-hover:opacity-100" />

      {/* Top gloss */}
      <span className="absolute inset-0 rounded-2xl bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_40%)]" />

      {/* Text */}
      <span className="relative z-10 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-200">
        About Me
        <span className="text-red-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
          ↗
        </span>
      </span>
    </Link>
  </div>
);

export const Html = () => {
  const titleWords = "Create Launch Grow".split(" ");
  const subtitle =   "The all-in-one platform that helps teams build, deploy, and scale their products 10x faster. No complexity, just results.";
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays, setDelays] = useState<number[]>([]);
  const [subtitleDelay, setSubtitleDelay] = useState(0);

  useEffect(() => {
    // Только на клиенте: генерируем случайные задержки для глитча
    setDelays(titleWords.map(() => Math.random() * 0.07));
    setSubtitleDelay(Math.random() * 0.1);
  }, [titleWords.length]);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, titleWords.length]);

  return (
    <div className="h-screen">
      <div className="h-full uppercase items-center w-full absolute z-60 pointer-events-none px-10 flex justify-center flex-col">
        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden text-white">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={index < visibleWords ? "fade-in" : ""}
                style={{
                  animationDelay: `${index * 0.13 + (delays[index] || 0)}s`,
                  opacity: index < visibleWords ? undefined : 0,
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        
          {/* Subtitle */}
      <p
        className="mt-4 sm:mt-6 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl text-center  text-white/90 uppercase text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed"
        style={{
          opacity: subtitleVisible ? 1 : 0,
          transform: subtitleVisible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
        }}
      >
        {subtitle}
      </p>
        
      </div>

      <Canvas
        flat
        gl={async (props) => {
          const renderer = new THREE.WebGPURenderer(props as any);
          await renderer.init();
          return renderer;
        }}
      >
        <PostProcessing   />
        <Scene />
      </Canvas>

       
    </div>
  );
};

export default Html;
