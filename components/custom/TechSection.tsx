"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Magento,
  React,
  Angular,
  Vuejs,
  Javascript,
  Tailwind,
  Typescript,
  Vite,
  Net,
  Laravel,
  Codeigniter,
  PHP,
  Nodejs,
  NetCore,
  Python,
  SQLServer,
  MySQL,
  PostgreSQL,
  MongoDB,
  DynamoDB,
  SQLite,
  Firebase,
  Woocommerce,
  Apple,
  Android,
  Flutter,
  ReactNative,
  AWS,
  Googlecloud,
  Azure,
  Shopify,
  Wordpress,
  BlockChain,
  AzureDevOps,
  HTML5,
  CSS3,
  JAVA,
  RUBY,
  CHASH,
  SWIFT,
  KOTLIN,
  REDIS,
  ORACLE,
  Django,
  Spring,
  Express,
  Docker,
  Kubernetes,
  Jenkins,
  Git,
} from "@/components/svg/svg";

export interface TechItem {
  id: string;
  name: string;
  logo: string | React.ComponentType<{ className?: string }>;
}
const TABS = [
  "FRONTEND",
  "BACKEND",
  "MOBILE",
  "DATABASE",
  "FRAMEWORKS",
  "CLOUDS",
  "DEVOPS",
  "ECOMMERCE",
  "CMS",
  "EMERGING",
] as const;

const FRONTEND_DATA: TechItem[] = [
  { id: "react", name: "React", logo: React },
  { id: "vite", name: "Vite", logo: Vite },
  { id: "angular", name: "Angular", logo: Angular },
  { id: "vue", name: "Vue.js", logo: Vuejs },
  { id: "html", name: "HTML5", logo: HTML5 },
  { id: "css", name: "CSS3", logo: CSS3 },
  { id: "js", name: "JavaScript", logo: Javascript },
  { id: "ts", name: "Typescript", logo: Typescript },
  { id: "tailwind", name: "Tailwind", logo: Tailwind },
];

const BACKEND_DATA: TechItem[] = [
  { id: "node", name: "Node Js", logo: Nodejs },
  { id: "python", name: "Python", logo: Python },
  { id: "php", name: "PHP", logo: PHP },
  { id: "java", name: "JAVA", logo: JAVA },
  { id: "ruby", name: "RUBY", logo: RUBY },
  { id: "csharp", name: "C#", logo: CHASH },
  { id: "net", name: "NET", logo: Net },
];

const MOBILE_DATA: TechItem[] = [
  { id: "react-native", name: "React Native", logo: React },
  { id: "flutter", name: "Flutter", logo: Flutter },
  { id: "swift", name: "SWIFT", logo: SWIFT },
  { id: "kotlin", name: "KOTLIN", logo: KOTLIN },
  { id: "apple", name: "Apple", logo: Apple },
  { id: "android", name: "Android", logo: Android },
];

const DATABASE_DATA: TechItem[] = [
  { id: "mysql", name: "MySQL", logo: MySQL },
  { id: "postgresql", name: "PostgreSQL", logo: PostgreSQL },
  { id: "mongodb", name: "MongoDB", logo: MongoDB },
  { id: "redis", name: "REDIS", logo: REDIS },
  { id: "oracle", name: "ORACLE", logo: ORACLE },
  { id: "sqlserver", name: "SQL Server Express", logo: SQLServer },
  { id: "sqlite", name: "SQLite", logo: SQLite },
  { id: "firebase", name: "Firebase", logo: Firebase },
  { id: "dynamodb", name: "DynamoDB", logo: DynamoDB },
];

const FRAMEWORKS_DATA: TechItem[] = [
  { id: "laravel", name: "Laravel", logo: Laravel },
  { id: "django", name: "Django", logo: Django },
  { id: "spring", name: "Spring", logo: Spring },
  { id: "dotnet", name: ".NET Core", logo: NetCore },
  { id: "express", name: "Express", logo: Express },
  { id: "codeigniter", name: "CodeIgniter", logo: Codeigniter },
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
  { id: "azuredevops", name: "Devops", logo: AzureDevOps },
];

const ECOMMERCE_DATA: TechItem[] = [
  { id: "shopify", name: "Shopify", logo: Shopify },
  { id: "woocommerce", name: "Woo Commerce", logo: Woocommerce },
  { id: "magento", name: "Magento", logo: Magento },
];

const CMS_DATA: TechItem[] = [
  { id: "wordpress", name: "Wordpress", logo: Wordpress },
];

const EMERGING_DATA: TechItem[] = [
  { id: "blockchain", name: "Blockchain", logo: BlockChain },
];

// export interface TechSectionProps {
//   showReact?: boolean;
//   showAngular?: boolean;
//   showVue?: boolean;
//   showHtml?: boolean;
//   showCss?: boolean;
//   showJs?: boolean;
//   showTs?: boolean;
//   showVite?: boolean;
//   showTailwind?: boolean;

//   showNode?: boolean;
//   showPython?: boolean;
//   showPhp?: boolean;
//   showJava?: boolean;
//   showRuby?: boolean;
//   showCsharp?: boolean;
//   shownet?: boolean;

//   showReactNative?: boolean;
//   showFlutter?: boolean;
//   showSwift?: boolean;
//   showKotlin?: boolean;
//   showApple?: boolean;
//   showAndroid?: boolean;

//   showMysql?: boolean;
//   showPostgresql?: boolean;
//   showMongodb?: boolean;
//   showRedis?: boolean;
//   showOracle?: boolean;
//   showSqlserver?: boolean;
//   showSqlite?: boolean;
//   showFirebase?: boolean;
//   showDynamodb?: boolean;

//   showLaravel?: boolean;
//   showDjango?: boolean;
//   showSpring?: boolean;
//   showDotnet?: boolean;
//   showExpress?: boolean;
//   showCodeigniter?: boolean;

//   showAws?: boolean;
//   showAzure?: boolean;
//   showGooglecloud?: boolean;

//   showDocker?: boolean;
//   showKubernetes?: boolean;
//   showJenkins?: boolean;
//   showGit?: boolean;
//   showAzuredevops?: boolean;

//   showMagento?: boolean;
//   showShopify?: boolean;
//   showWoocommerce?: boolean;

//   showWordpress?: boolean;

//   showBlockchain?: boolean;
// }

const TECH_DATA = {
  FRONTEND: FRONTEND_DATA,
  BACKEND: BACKEND_DATA,
  MOBILE: MOBILE_DATA,
  DATABASE: DATABASE_DATA,
  FRAMEWORKS: FRAMEWORKS_DATA,
  CLOUDS: CLOUDS_DATA,
  DEVOPS: DEVOPS_DATA,
  ECOMMERCE: ECOMMERCE_DATA,
  CMS: CMS_DATA,
  EMERGING: EMERGING_DATA,
};

export default function TechSection() {
  const visibilityMap = useMemo(() => {
    return Object.values(TECH_DATA)
      .flat()
      .reduce(
        (acc, tech) => {
          acc[tech.id] = true;
          return acc;
        },
        {} as Record<string, boolean>,
      );
  }, []);

  const visibleTabs = useMemo(() => {
    return TABS.filter((tab) =>
      TECH_DATA[tab].some((tech) => visibilityMap[tech.id]),
    );
  }, [visibilityMap]);

  const [activeTab, setActiveTab] = useState<(typeof TABS)[number] | null>(
    visibleTabs[0] || null,
  );

  // 2. Safe, stable filtering mechanism
  const filteredTech = useMemo(() => {
    if (!activeTab) return [];

    return TECH_DATA[activeTab].filter((tech) => visibilityMap[tech.id]);
  }, [activeTab, visibilityMap]);

  useEffect(() => {
    if (visibleTabs.length === 0) {
      setActiveTab(null);
      return;
    }

    if (!activeTab || !visibleTabs.includes(activeTab)) {
      setActiveTab(visibleTabs[0]);
    }
  }, [activeTab, visibleTabs]);

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
      <div className="mx-auto mb-8 flex max-w-7xl flex-wrap items-center justify-center gap-2 sm:gap-3 md:mb-14">
        {visibleTabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative flex min-w-[110px] items-center justify-center overflow-hidden rounded-full px-3 py-2 text-center text-[9px] font-bold uppercase tracking-[0.15em] transition-all duration-300 sm:min-w-[130px] sm:px-4 sm:py-2.5 sm:text-[10px] md:min-w-[150px] md:px-5 md:text-xs ${
                isActive
                  ? "text-white"
                  : "border border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:text-gray-900"
              }`}
            >
              <span className="relative z-10 whitespace-nowrap">{tab}</span>

              {isActive && (
                <motion.div
                  layoutId="activeTabBackground"
                  className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/20"
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
      <div className="mx-auto flex max-w-7xl justify-center">
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-x-4 gap-y-6 sm:gap-x-6 md:gap-x-8 lg:gap-x-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
                className="group flex w-[110px] flex-col items-center sm:w-[130px] md:w-[150px]"
              >
                {/* Icon Box */}
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50/70 p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:shadow-md sm:h-24 sm:w-24 md:h-28 md:w-28">
                  {typeof tech.logo === "string" ? (
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    tech.logo && (
                      <tech.logo className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14" />
                    )
                  )}
                </div>

                {/* Label */}
                <span className="mt-3 px-1 text-center text-[10px] font-semibold leading-snug text-gray-500 transition-colors duration-300 group-hover:text-gray-900 sm:text-xs md:text-sm">
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
