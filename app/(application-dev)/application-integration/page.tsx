import React from "react";
import Faq from "@/components/Faq";
import Consultation from "@/components/Consultation";
import { Testimonials } from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import CustomHero from "@/components/custom/CustomHero";
import ServicePrice from "@/components/ServicePrice";
import CustomCards from "@/components/custom/CustomCards";
import CustomCapsule from "@/components/custom/CustomCapsule";
import TechSection from "@/components/custom/TechSection";
import ProjectsSection from "@/components/custom/Projects";
import { FaPlugCirclePlus } from "react-icons/fa6";
import { GiLinkedRings } from "react-icons/gi";
import { FaCloudArrowUp } from "react-icons/fa6";
import { IoGitCompareSharp } from "react-icons/io5";
import { TbTransfer } from "react-icons/tb";
import { IoMdCart } from "react-icons/io";
import { BiTransfer } from "react-icons/bi";
import { IoIosLock } from "react-icons/io";
import { FaForward } from "react-icons/fa";
import { PiGitBranchBold } from "react-icons/pi";
import { PiShieldCheckFill } from "react-icons/pi";
import { BsTools } from "react-icons/bs";

const AppIntegration = [
  {
    id: 1,
    title: "API Development",
    description:
      "Custom RESTful and GraphQL APIs to connect modern and legacy systems.",
    icon: <FaPlugCirclePlus className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "System Connectivity",
    description:
      "Connecting CRM, ERP, HRMS, and other enterprise software platforms.",
    icon: <GiLinkedRings className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Cloud Integrations",
    description:
      "Bridging on-premise infrastructure with AWS, Azure, or GCP cloud environments.",
    icon: <FaCloudArrowUp className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Data Synchronization",
    description:
      "Real-time or batch data syncing across multiple platforms to ensure consistency.",
    icon: <IoGitCompareSharp className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Middleware Solutions",
    description:
      "Implementing robust middleware to facilitate complex message routing.",
    icon: <TbTransfer className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "E-commerce Integration",
    description:
      "Connecting storefronts with payment gateways, inventory, and logistics.",
    icon: <IoMdCart className="w-7 h-7 text-blue-600" />,
  },
];

const AppIntegrationKey = [
  {
    id: 1,
    title: "Seamless Data Flow",
    icon: <BiTransfer className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "Secure Transfer",
    icon: <IoIosLock className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "Low Latency APIs",
    icon: <FaForward className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "Microservices Sync",
    icon: <PiGitBranchBold className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Fault Tolerance",
    icon: <PiShieldCheckFill className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Custom Connectors",
    icon: <BsTools className="w-7 h-7 text-white" />,
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  ">
      <CustomHero
        badgeText="Application Integration Excellence"
        headingText="Delivering High-Impact"
        headingItalicText="Application Integration"
        headingEndText="Solutions"
        descriptionText="Break down data silos and connect your ecosystem seamlessly."
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
              Comprehensive features built to solve real-world challenges and
              accelerate your growth.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {AppIntegration.map((benefit) => (
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
              The essential building blocks that make our solutions robust,
              scalable, and future-ready.
            </p>
          </div>

          {/* Grid */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {AppIntegrationKey.map((item) => (
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

     <TechSection />

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
            tag: "CRM/ERP Sync",
            title: "Salesforce & SAP Sync",
            img: "/img/project01.webp",
            link: "#",
          },
          {
            id: 2,
            tag: "Payment Gateway",
            title: "Global Payment Integration",
            img: "/img/project02.webp",
            link: "#",
          },
          {
            id: 3,
            tag: "Legacy to Cloud",
            title: "Hybrid Cloud Setup",
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
