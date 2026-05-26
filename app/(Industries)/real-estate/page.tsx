import React from "react";
import Faq from "@/components/Faq";
import Consultation from "@/components/Consultation";
import { Testimonials } from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import ServicePrice from "@/components/ServicePrice";
import CustomHero from "@/components/custom/CustomHero";
import TechSection from "@/components/custom/TechSection";
import ProjectsSection from "@/components/custom/Projects";
import CustomCapsule from "@/components/custom/CustomCapsule";
import CustomCards from "@/components/custom/CustomCards";
import {
  FaBuilding,
  FaUsersCog,
  FaVrCardboard,
  FaChartArea,
  FaFileContract,
  FaMapMarkedAlt,
} from "react-icons/fa";
 
import { MdOutlineViewInAr } from "react-icons/md";
import { RiAiGenerate } from "react-icons/ri";
import { FaFileSignature } from "react-icons/fa6";

import { RiSmartphoneLine } from "react-icons/ri";
import { HiOutlineChartBar } from "react-icons/hi";

const features = [
  {
    id: 1,
    title: "Google Maps Integration",
    icon: <FaMapMarkedAlt className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "AR/VR Virtual Tours",
    icon: <MdOutlineViewInAr className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "AI Property Matching",
    icon: <RiAiGenerate className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "e-Signature & Contracts",
    icon: <FaFileSignature className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Mobile-First Apps",
    icon: <RiSmartphoneLine className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Market Analytics",
    icon: <HiOutlineChartBar className="w-7 h-7 text-white" />,
  },
];
const RealEstate = [
  {
    id: 1,
    title: "Property Portals",
    description:
      "Feature-rich listing platforms with advanced search, map integration, and lead capture.",
    icon: <FaBuilding className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Real Estate CRM",
    description:
      "Agent dashboards, lead tracking, pipeline management, and automated follow-up tools.",
    icon: <FaUsersCog className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Virtual Tours",
    description:
      "360° property tours, 3D walkthroughs, and AR-powered room visualization tools.",
    icon: <FaVrCardboard className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Property Valuation",
    description:
      "AI-driven automated valuation models (AVM) and comparative market analysis tools.",
    icon: <FaChartArea className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Document Management",
    description:
      "Digital contracts, e-signature integration, and secure document storage for transactions.",
    icon: <FaFileContract className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "GIS & Mapping",
    description:
      "Interactive maps with neighborhood insights, school zones, transport links, and POIs.",
    icon: <FaMapMarkedAlt className="w-7 h-7 text-blue-600" />,
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  ">
      <CustomHero
        badgeText="Real Estate Excellence"
        headingText="Delivering High-Impact"
        headingItalicText="Real Estate Solutions"
        headingEndText=""
        descriptionText="We develop powerful real estate platforms — property portals, CRM systems, virtual tours, and proptech solutions — that connect buyers, sellers, and agents. Our software streamlines property management and accelerates sales cycles."
        primaryCta={{
          label: "Free Consultation",
          link: "/",
        }}
        secondaryCta={{
          label: "Explore Services",
          link: "/",
        }}
      />

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
              Comprehensive real estate software features built to solve
              real-world challenges and accelerate your growth.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {RealEstate.map((benefit) => (
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
              The essential building blocks that make our real estate solutions
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
            tag: "Property Listing Platform",
            title: "PropList Portal",
            img: "/img/project01.webp",
            link: "#",
          },
          {
            id: 2,
            tag: "Real Estate CRM",
            title: "AgentHub CRM",
            img: "/img/project02.webp",
            link: "#",
          },
          {
            id: 3,
            tag: "Virtual Tour Platform",
            title: "Virtual Nest",
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
