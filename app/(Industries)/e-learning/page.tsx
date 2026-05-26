import React from "react";
import Faq from "@/components/Faq";
import Consultation from "@/components/Consultation";
import { Testimonials } from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import ServicePrice from "@/components/ServicePrice";
import CustomHero from "@/components/custom/CustomHero";
import CustomCards from "@/components/custom/CustomCards";
import CustomCapsule from "@/components/custom/CustomCapsule";
import TechSection from "@/components/custom/TechSection";
import ProjectsSection from "@/components/custom/Projects";
import {
  FaGraduationCap,
  FaVideo,
  FaGamepad,
  FaBrain,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

import { PiGraduationCapLight } from "react-icons/pi";
import { RiSmartphoneLine } from "react-icons/ri";
import { FiGlobe } from "react-icons/fi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { FiShield } from "react-icons/fi";

const features = [
  {
    id: 1,
    title: "SCORM/xAPI Support",
    icon: <PiGraduationCapLight className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "Mobile Learning",
    icon: <RiSmartphoneLine className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "Multi-language Support",
    icon: <FiGlobe className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "E-Certification",
    icon: <MdOutlineWorkspacePremium className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Live Virtual Classes",
    icon: <HiOutlineVideoCamera className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Secure Assessments",
    icon: <FiShield className="w-7 h-7 text-white" />,
  },
];
const ELearn = [
  {
    id: 1,
    title: "LMS Development",
    description:
      "Custom Learning Management Systems with course creation, progress tracking, and certification.",
    icon: <FaGraduationCap className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Video Learning",
    description:
      "HD video streaming with interactive quizzes, timestamps, and multi-speed playback support.",
    icon: <FaVideo className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Gamification",
    description:
      "Leaderboards, badges, and reward systems that boost learner engagement and completion rates.",
    icon: <FaGamepad className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "AI-Powered Tutoring",
    description:
      "Personalized learning paths, adaptive assessments, and AI-driven content recommendations.",
    icon: <FaBrain className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Collaborative Learning",
    description:
      "Live virtual classrooms, discussion forums, and peer-to-peer learning tools.",
    icon: <FaUsers className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "Learning Analytics",
    description:
      "Detailed dashboards for educators to track progress, identify gaps, and optimize content.",
    icon: <FaChartLine className="w-7 h-7 text-blue-600" />,
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] r-to-tr  ">
      <CustomHero
        badgeText="eLearning Excellence"
        headingText="Delivering High-Impact"
        headingItalicText="E-Learning Solutions"
        headingEndText=""
        descriptionText="We design and develop scalable eLearning platforms, LMS solutions, and educational apps that engage learners and empower educators. From K-12 to corporate training, our tech-driven education tools deliver measurable outcomes.

"
        primaryCta={{
          label: "Free Consultation",
          link: "/",
        }}
        secondaryCta={{
          label: "Explore Services",
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
              What We Offer
            </span>
            <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-black leading-[1.15]">
              Features{" "}
              <span className="font-serif italic font-light text-blue-600">
                We Provide
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-600 sm:text-lg">
              Comprehensive elearning software features built to solve
              real-world challenges and accelerate your growth.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {ELearn.map((benefit) => (
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
              The essential building blocks that make our elearning solutions
              robust, scalable, and future-ready.
            </p>
          </div>

          {/* Grid */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((item) => (
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
        headingText="Some of"
        headingItalicText="Our Works"
        headingEndText=""
        descriptionText="A snapshot of real-world projects we have delivered for clients across the globe."
        buttonText="View All Projects"
        buttonLink="/projects"
        projects={[
          {
            id: 1,
            tag: "Corporate Training",
            title: "EduNest LMS",
            img: "/img/project01.webp",
            link: "#",
          },
          {
            id: 2,
            tag: "k-12 Platform",
            title: "KidSpark",
            img: "/img/project02.webp",
            link: "#",
          },
          {
            id: 3,
            tag: "Upskilling Platform",
            title: "SkillBoost Pro",
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
