"use client";

import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { useAspect, useTexture } from "@react-three/drei";
import { useMemo, Suspense, useState, useEffect } from "react";
import * as THREE from "three/webgpu";
import { bloom } from "three/examples/jsm/tsl/display/BloomNode.js";
 
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
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

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center select-none">
    <div className="w-45 h-45 border-4 border-white/20 border-t-white rounded-full animate-spin" />
  </div>
);

// PostProcessing component
const PostProcessing = ({ strength = 1, threshold = 1 }) => {
  const { gl, scene, camera } = useThree();

  const render = useMemo(() => {
    const postProcessing = new THREE.PostProcessing(gl as any);
    const scenePass = pass(scene, camera);
    const scenePassColor = scenePass.getTextureNode("output");
    const bloomPass = bloom(scenePassColor, strength, 0.5, threshold);
    postProcessing.outputNode = scenePassColor.add(bloomPass);
    return postProcessing;
  }, [gl, scene, camera, strength, threshold]);

  useFrame(() => {
    render.renderAsync();
  }, 1);

  return null;
};

const WIDTH = 400;
const HEIGHT = 400;

// Scene component
const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);

  const { material, uniforms } = useMemo(() => {
    const uPointer = uniform(new THREE.Vector2(0, 0));
    const uProgress = uniform(0);

    const tDepthMap = texture(depthMap);
    const tMap = texture(rawMap, uv().add(tDepthMap.r.mul(uPointer).mul(0.01)));

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

    const material = new THREE.MeshBasicNodeMaterial({ colorNode: final });

    return { material, uniforms: { uPointer, uProgress } };
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock }) => {
    uniforms.uProgress.value =
      Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
  });

  useFrame(({ pointer }) => {
    uniforms.uPointer.value = pointer;
  });

  return (
    <mesh scale={[w * 0.3, h * 0.3, 1]} material={material}>
      <planeGeometry />
    </mesh>
  );
};
// AnimatedText component
const AnimatedText = () => {
  const titleWords = "Create Launch Grow".split(" ");

  const [visibleWords, setVisibleWords] = useState(0);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timer = setTimeout(() => {
        setVisibleWords((prev) => prev + 1);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [visibleWords, titleWords.length]);

  return (
    <div className="h-svh select-none uppercase items-center w-full absolute z-60 pointer-events-none px-10 flex justify-center flex-col">
      <div className="text-3xl pb-64 md:pb-0 md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">
        <div className="flex flex-wrap justify-center space-x-2 lg:space-x-6 overflow-hidden text-white">
          {titleWords.map((word, index) => (
            <div
              key={`${word}-${index}`}
              className={index < visibleWords ? "fade-in" : ""}
              style={{
                opacity: index < visibleWords ? 1 : 0,
              }}
            >
              {word}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// SubText component
const SubText = () => {
  const subtitle =
    "The all-in-one platform that helps teams build, deploy, and scale their products 10x faster. No complexity, just results.";

  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSubtitleVisible(true);
    }, 2600); // 3 title words * 600ms + buffer

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pb-12 md:pb-0 gap-6 absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-50">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl">
        <p
          className={`text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold uppercase leading-relaxed text-white transition-all duration-700 ${
            subtitleVisible
              ? "fade-in-subtitle opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
          }`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

// Main component
export default function Html() {
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCanvasReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-svh bg-black select-none">
      <AnimatedText />
      <SubText/>
      {/* <div className=" pb-12 md:pb-0 gap-6 absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-50">
        <div
          className="bg-red-600 glow-red text-gray-100 hover:bg-red-600/70 transition-colors"
          
        >
          <Link href="/" prefetch={false}>
            Get Started
          </Link>
        </div>
        <div  >
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 h-5 text-black"
          >
            <h2>About Me</h2>
            <SquareArrowOutUpRight size={15} />
          </Link>
        </div>
      </div> */}
      {canvasReady && (
        <Suspense fallback={<LoadingFallback />}>
          <Canvas
            flat
            dpr={[1, 2]}
            gl={async (props) => {
              const renderer = new THREE.WebGPURenderer({
                ...props as any,
                antialias: false,
                powerPreference: "high-performance",
              });
              await renderer.init();
              return renderer;
            }}

           
            onCreated={({ gl }) => {
              gl.setClearColor("#000000");
              gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            }}
          >
            <Suspense fallback={null}>
              <PostProcessing strength={0.8} threshold={0.8} />
              <Scene />
            </Suspense>
          </Canvas>
        </Suspense>
      )}
    </div>
  );
}