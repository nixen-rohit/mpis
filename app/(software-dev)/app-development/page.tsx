import React from "react";
import Faq from "@/components/Faq";
import Consultation from "@/components/Consultation";
import { Testimonials } from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import ServicePrice from "@/components/ServicePrice";
import CustomHero from "@/components/custom/CustomHero";
import CustomCards from "@/components/custom/CustomCards";
import TechSection from "@/components/custom/TechSection";
import ProjectsSection from "@/components/custom/Projects";
import { FaApple } from "react-icons/fa6";
import { ImAndroid } from "react-icons/im";
import { FaCode } from "react-icons/fa6";
import { MdMonitor } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { IoStorefrontSharp } from "react-icons/io5";
import CustomCapsule from "@/components/custom/CustomCapsule";
import { TbDeviceMobileCog } from "react-icons/tb";
import { HiMapPin } from "react-icons/hi2";
import { LuRadioTower } from "react-icons/lu";
import { MdOutlineWifiOff } from "react-icons/md";
import { FaFingerprint } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";

const AppDevelopment = [
  {
    id: 1,
    title: "Native iOS Development",
    description:
      "High-end applications written in Swift and Objective-C specifically for iPhones and iPads.",
    icon: <FaApple className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Native Android Apps",
    description:
      "Robust applications built in Kotlin and Java tailored for the diverse Android ecosystem.",
    icon: <ImAndroid className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Cross-Platform Apps",
    description:
      "Utilizing React Native or Flutter to target both iOS and Android from a single codebase.",
    icon: <FaCode className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "App UI/UX Design",
    description:
      "Creating highly intuitive, engaging, and beautiful app interfaces using Figma and Sketch.",
    icon: <MdMonitor className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "App Maintenace",
    description:
      "Post-launch OS updates, feature enhancements, and bug resolutions.",
    icon: <BsTools className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "App Store Optimization",
    description:
      "Navigating Apple and Google guidelines to ensure fast publication and search visibility.",
    icon: <IoStorefrontSharp className="w-7 h-7 text-blue-600" />,
  },
];

const AppDevKey = [
  {
    id: 1,
    title: "Hardware Integrations",
    icon: <TbDeviceMobileCog className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "GPS & Geofencing",
    icon: <HiMapPin className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "Push Notifications",
    icon: <LuRadioTower className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "Offline Mode",
    icon: <MdOutlineWifiOff className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Biometric Security",
    icon: <FaFingerprint className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "In-App Payments",
    icon: <IoMdWallet className="w-7 h-7 text-white" />,
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  ">
      <CustomHero
        badgeText="Mobile Innovation"
        headingText="Impactful Mobile Experiences"
        headingItalicText="on iOS & Android"
        headingEndText=""
        descriptionText="We design and develop native and cross-platform mobile apps that users love. Whether for the App Store or Google Play, our applications combine stunning UI/UX with flawless performance, engaging your audience wherever they go."
        primaryCta={{
          label: "Free Consultation",
          link: "/",
        }}
        secondaryCta={{
          label: "Why Mobile ?",
          link: "/",
        }}
      />

      {/* custom cards */}

      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center pb-10">
            {/* Section label */}
            <span className="inline-block mb-3 sm:mb-4 text-xs sm:text-sm md:text-base font-medium tracking-[0.18em] sm:tracking-[0.2em] uppercase text-gray-400">
              App Development Hub
            </span>
            <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-black leading-[1.15]">
              Custom App{" "}
              <span className="font-serif italic font-light text-blue-600">
                Services
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-600 sm:text-lg">
              Empowering your business to reach billions of smartphone users
              flawlessly.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {AppDevelopment.map((benefit) => (
              <CustomCards
                key={benefit.id}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* custom capsule */}

      <section className=" py-12 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="inline-block mb-3 sm:mb-4 text-xs sm:text-sm md:text-base font-medium tracking-[0.18em] sm:tracking-[0.2em] uppercase text-blue-600">
              Core Capabilities
            </span>

            <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-white leading-[1.15]">
              Key{" "}
              <span className="font-serif italic font-light text-blue-600">
                Elements
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-400 sm:text-lg">
              What sets our mobile applications apart from the competition.
            </p>
          </div>

          {/* Grid */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {AppDevKey.map((item) => (
              <CustomCapsule
                key={item.id}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* tech stack  */}

      <TechSection
        // FRONTEND
        showReact
        showAngular
        showVue
        showHtml
        showCss
        showJs
        // BACKEND
        showNode
        showPython
        showPhp
        showJava
        showRuby
        showCsharp
        // MOBILE
        showReactNative
        showFlutter
        showSwift
        showKotlin
        // DATABASE
        showMysql
        showPostgresql
        showMongodb
        showRedis
        showOracle
        // FRAMEWORKS
        showLaravel
        showDjango
        showSpring
        showDotnet
        showExpress
        // CLOUD
        showAws
        showAzure
        showGooglecloud
        // DEVOPS
        showDocker
        showKubernetes
        showJenkins
        showGit
        // CMS
        showWordpress
        showMagento
      />

      <ProjectsSection
        badgeText="Portfolio"
        headingText="Top"
        headingItalicText="Mobile Projects"
        headingEndText=""
        descriptionText="A selection of featured apps we have successfully published on App Stores."
        buttonText="View All Projects"
        buttonLink="/projects"
        projects={[
          {
            id: 1,
            tag: "Fitness App",
            title: "FitTracker iOS",
            img: "/img/project01.webp",
            link: "#",
          },
          {
            id: 2,
            tag: "Fintech App",
            title: "PaySwift Wallet",
            img: "/img/project02.webp",
            link: "#",
          },
          {
            id: 3,
            tag: "On-Demand App",
            title: "UrbanRide On-Demand",
            img: "/img/project03.webp",
            link: "#",
          },
        ]}
      />

      <ServicePrice />
      <Testimonials />

      <Consultation />
      <CtaBanner />
      <Faq />
    </div>
  );
}
