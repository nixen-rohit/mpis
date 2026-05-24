"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  React,
  Angular,
  Vuejs,
  Nodejs,
  Python,
  PHP,
  JAVA,
  RUBY,
  CHASH,
  Flutter,
  SWIFT,
  KOTLIN,
  MySQL,
  PostgreSQL,
  MongoDB,
  REDIS,
  ORACLE,
  Laravel,
  Django,
  NetCore,
  Spring,
  Express,
  AWS,
  Azure,
  Googlecloud,
  Docker,
  Kubernetes,
  Jenkins,
  Git,
  Wordpress,
  Magento,
  HTML5,
  CSS3,
  Javascript,
} from "@/components/svg/svg";

const TABS = [
  "FRONTEND",
  "BACKEND",
  "MOBILE",
  "DATABASE",
  "FRAMEWORKS",
  "CLOUDS",
  "DEVOPS",
  "CMS",
] as const;

export interface TechItem {
  id: string;
  name: string;
  logo: string | React.ComponentType<{ className?: string }>;
}

export interface TechSectionProps {
  showReact?: boolean;
  showAngular?: boolean;
  showVue?: boolean;
  showHtml?: boolean;
  showCss?: boolean;
  showJs?: boolean;

  showNode?: boolean;
  showPython?: boolean;
  showPhp?: boolean;
  showJava?: boolean;
  showRuby?: boolean;
  showCsharp?: boolean;

  showReactNative?: boolean;
  showFlutter?: boolean;
  showSwift?: boolean;
  showKotlin?: boolean;

  showMysql?: boolean;
  showPostgresql?: boolean;
  showMongodb?: boolean;
  showRedis?: boolean;
  showOracle?: boolean;

  showLaravel?: boolean;
  showDjango?: boolean;
  showSpring?: boolean;
  showDotnet?: boolean;
  showExpress?: boolean;

  showAws?: boolean;
  showAzure?: boolean;
  showGooglecloud?: boolean;

  showDocker?: boolean;
  showKubernetes?: boolean;
  showJenkins?: boolean;
  showGit?: boolean;

  showWordpress?: boolean;
  showMagento?: boolean;
}

const FRONTEND_DATA: TechItem[] = [
  { id: "react", name: "React", logo: React },
  { id: "angular", name: "Angular", logo: Angular },
  { id: "vue", name: "Vue.js", logo: Vuejs },
  { id: "html", name: "HTML5", logo: HTML5 },
  { id: "css", name: "CSS3", logo: CSS3 },
  { id: "js", name: "JavaScript", logo: Javascript },
];

const BACKEND_DATA: TechItem[] = [
  { id: "node", name: "Node Js", logo: Nodejs },
  { id: "python", name: "Python", logo: Python },
  { id: "php", name: "PHP", logo: PHP },
  { id: "java", name: "JAVA", logo: JAVA },
  { id: "ruby", name: "RUBY", logo: RUBY },
  { id: "csharp", name: "C#", logo: CHASH },
];

const MOBILE_DATA: TechItem[] = [
  { id: "react-native", name: "React Native", logo: React },
  { id: "flutter", name: "Flutter", logo: Flutter },
  { id: "swift", name: "SWIFT", logo: SWIFT },
  { id: "kotlin", name: "KOTLIN", logo: KOTLIN },
];

const DATABASE_DATA: TechItem[] = [
  { id: "mysql", name: "MySQL", logo: MySQL },
  { id: "postgresql", name: "PostgreSQL", logo: PostgreSQL },
  { id: "mongodb", name: "MongoDB", logo: MongoDB },
  { id: "redis", name: "REDIS", logo: REDIS },
  { id: "oracle", name: "ORACLE", logo: ORACLE },
];

const FRAMEWORKS_DATA: TechItem[] = [
  { id: "laravel", name: "Laravel", logo: Laravel },
  { id: "django", name: "Django", logo: Django },
  { id: "spring", name: "Spring", logo: Spring },
  { id: "dotnet", name: ".NET Core", logo: NetCore },
  { id: "express", name: "Express", logo: Express },
];

const CLOUDS_DATA: TechItem[] = [
  { id: "aws", name: "AWS", logo: AWS },
  { id: "azure", name: "Azure", logo: Azure },
  { id: "googlecloud", name: "Googlecloud", logo: Googlecloud },
];

const DEVOPS_DATA: TechItem[] = [
  { id: "docker", name: "Docker", logo: Docker },
  { id: "kubernetes", name: "Kubernetes", logo: Kubernetes },
  { id: "jenkins", name: "Jenkins", logo: Jenkins },
  { id: "git", name: "Git", logo: Git },
];

const CMS_DATA: TechItem[] = [
  { id: "wordpress", name: "Wordpress", logo: Wordpress },
  { id: "magento", name: "Magento", logo: Magento },
];

const TECH_DATA = {
  FRONTEND: FRONTEND_DATA,
  BACKEND: BACKEND_DATA,
  MOBILE: MOBILE_DATA,
  DATABASE: DATABASE_DATA,
  FRAMEWORKS: FRAMEWORKS_DATA,
  CLOUDS: CLOUDS_DATA,
  DEVOPS: DEVOPS_DATA,
  CMS: CMS_DATA,
};

export default function TechSection({
  showReact = false,
  showAngular = false,
  showVue = false,
  showHtml = false,
  showCss = false,
  showJs = false,

  showNode = false,
  showPython = false,
  showPhp = false,
  showJava = false,
  showRuby = false,
  showCsharp = false,

  showReactNative = false,
  showFlutter = false,
  showSwift = false,
  showKotlin = false,

  showMysql = false,
  showPostgresql = false,
  showMongodb = false,
  showRedis = false,
  showOracle = false,

  showLaravel = false,
  showDjango = false,
  showSpring = false,
  showDotnet = false,
  showExpress = false,

  showAws = false,
  showAzure = false,
  showGooglecloud = false,

  showDocker = false,
  showKubernetes = false,
  showJenkins = false,
  showGit = false,

  showWordpress = false,
  showMagento = false,
}: TechSectionProps) {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("FRONTEND");

  // 1. Memoize visibility map variables properly so reference addresses stay safe across runs
  const visibilityMap = useMemo<Record<string, boolean>>(
    () => ({
      react: showReact,
      angular: showAngular,
      vue: showVue,
      html: showHtml,
      css: showCss,
      js: showJs,

      node: showNode,
      python: showPython,
      php: showPhp,
      java: showJava,
      ruby: showRuby,
      csharp: showCsharp,

      "react-native": showReactNative,
      flutter: showFlutter,
      swift: showSwift,
      kotlin: showKotlin,

      mysql: showMysql,
      postgresql: showPostgresql,
      mongodb: showMongodb,
      redis: showRedis,
      oracle: showOracle,

      laravel: showLaravel,
      django: showDjango,
      spring: showSpring,
      dotnet: showDotnet,
      express: showExpress,

      aws: showAws,
      azure: showAzure,
      googlecloud: showGooglecloud,

      docker: showDocker,
      kubernetes: showKubernetes,
      jenkins: showJenkins,
      git: showGit,

      wordpress: showWordpress,
      magento: showMagento,
    }),
    [
      showReact,
      showAngular,
      showVue,
      showHtml,
      showCss,
      showJs,
      showNode,
      showPython,
      showPhp,
      showJava,
      showRuby,
      showCsharp,
      showReactNative,
      showFlutter,
      showSwift,
      showKotlin,
      showMysql,
      showPostgresql,
      showMongodb,
      showRedis,
      showOracle,
      showLaravel,
      showDjango,
      showSpring,
      showDotnet,
      showExpress,
      showAws,
      showAzure,
      showGooglecloud,
      showDocker,
      showKubernetes,
      showJenkins,
      showGit,
      showWordpress,
      showMagento,
    ],
  );

  // 2. Safe, stable filtering mechanism
  const filteredTech = useMemo(() => {
    return TECH_DATA[activeTab].filter((tech) => visibilityMap[tech.id]);
  }, [activeTab, visibilityMap]);

  return (
    <section className="bg-gray-50 overflow-hidden px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10">
      {/* Heading */}
      <div className="mx-auto mb-12 flex max-w-5xl flex-col items-center justify-center px-2 text-center sm:mb-16 md:mb-20">
        <span className="mb-3 inline-block text-[10px] font-medium uppercase tracking-[0.25em] text-gray-400 sm:mb-4 sm:text-xs md:text-sm">
          Technologies We Work With
        </span>

        <h2 className="max-w-6xl text-4xl font-normal leading-[1.08] tracking-tight text-[#111111] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          Platforms{" "}
          <span className="block font-serif italic font-light text-blue-500 sm:inline">
            & Frameworks
          </span>
        </h2>

        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-gray-600 sm:mt-6 sm:text-base md:text-lg lg:text-xl">
          We leverage robust, scalable technologies to build innovative
          solutions for modern businesses.
        </p>
      </div>

      {/* Tabs */}
      <div className="mx-auto mb-10 flex max-w-6xl flex-wrap items-center justify-center gap-2 sm:gap-3 md:mb-14">
        {TABS.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative overflow-hidden rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-[11px] md:px-6 md:text-xs ${
                isActive
                  ? "text-white"
                  : "border border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:text-gray-900"
              }`}
            >
              <span className="relative z-10">{tab}</span>

              {isActive && (
                <motion.div
                  layoutId="activeTabBackground"
                  className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-blue-600 shadow-lg shadow-orange-500/20"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Framework Container */}
      <div className="mx-auto flex min-h-[220px] max-w-6xl items-center justify-center rounded-[28px] border border-gray-100 bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] sm:p-8 md:min-h-[260px] md:p-10 lg:p-12">
        <motion.div
          layout
          className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-8 md:grid-cols-4 md:gap-10 lg:grid-cols-5 lg:gap-14"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                }}
                className="group flex flex-col items-center"
              >
                {/* Icon Box */}
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50/70 p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:shadow-md sm:h-24 sm:w-24 md:h-28 md:w-28">
                  {typeof tech.logo === "string" ? (
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="max-h-full max-w-full object-contain drop-shadow-sm"
                    />
                  ) : (
                    tech.logo && (
                      <tech.logo className="h-10 w-10 object-contain sm:h-12 sm:w-12 md:h-14 md:w-14" />
                    )
                  )}
                </div>

                {/* Label */}
                <span className="mt-3 text-center text-[11px] font-semibold text-gray-500 transition-colors duration-300 group-hover:text-gray-900 sm:text-xs md:text-sm">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
