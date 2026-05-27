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
import { RiWindow2Line } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { FaCloudArrowUp } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { BsTools } from "react-icons/bs";
import { PiSpeedometerFill } from "react-icons/pi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { RiWindowFill } from "react-icons/ri";
import { FaPlugCircleBolt } from "react-icons/fa6";
import { FaArrowCircleUp } from "react-icons/fa";
import { BsStack } from "react-icons/bs";

const NetDevelopment = [
  {
    id: 1,
    title: "ASP.NET Web Apps",
    description:
      "High-performance, secure web applications leveraging ASP.NET Core MVC and Razor Pages.",
    icon: <RiWindow2Line className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Enterprise Web APIs",
    description:
      "Building lightning-fast, reliable RESTful and gRPC services for internal microservices.",
    icon: <FaCode className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Legacy Migration",
    description:
      "Upgrading monolithic, legacy .NET Framework applications smoothly to .NET Core 8+.",
    icon: <FaCloudArrowUp className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Azure Cloud Integrations",
    description:
      "Deploying scalable architectures using Azure App Services, Functions, and SQL Databases.",
    icon: <SiGoogledocs className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Entity Framework Setup",
    description:
      "Expert optimization of EF Core for highly complex data models and SQL reporting queries.",
    icon: <FaDatabase className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description:
      "Ongoing refactoring, Azure monitoring, security patch delivery, and IIS administration.",
    icon: <BsTools className="w-7 h-7 text-blue-600" />,
  },
];

const NetDevKey = [
  {
    id: 1,
    title: "Blazing Fast Core Configs",
    icon: <PiSpeedometerFill className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "Enterprise Grade Security",
    icon: <BsFillShieldLockFill className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "Cross-Platform Deployment",
    icon: <RiWindowFill className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "BDeep Microsoft Eco-Integration",
    icon: <FaPlugCircleBolt className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Highly Maintainable OOP",
    icon: <FaArrowCircleUp className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Microservices Support",
    icon: <BsStack className="w-7 h-7 text-white" />,
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  ">
      <CustomHero
        badgeText="Enterprise Excellence"
        headingText="Powerful Solutions"
        headingItalicText="Built on . NET Core"
        headingEndText=""
        descriptionText="We specialize in developing robust, scalable, and highly secure enterprise applications using Microsoft's .NET ecosystem. From complex web portals to heavy desktop integrations, our C# engineering team builds solutions that perform beautifully under immense loads."
        primaryCta={{
          label: "Free Consultation",
          link: "/",
        }}
        secondaryCta={{
          label: "Our .NET Services",
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
              Microsoft Stack
            </span>
            <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-black leading-[1.15]">
              Custom{" "}
              <span className="font-serif italic font-light text-blue-600">
                .NET Services
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-600 sm:text-lg">
              We leverage the full power of C# to solve complex corporate and
              industrial challenges.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {NetDevelopment.map((benefit) => (
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
              The{" "}
              <span className="font-serif italic font-light text-blue-600">
                .NET Advantage
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-400 sm:text-lg">
              Why Fortune 500s rely on .NET for mission-critical software.
            </p>
          </div>

          {/* Grid */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {NetDevKey.map((item) => (
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
        headingText=".NET "
        headingItalicText="Deployments"
        headingEndText=""
        descriptionText="A selection of large-scale systems operating efficiently in the cloud."
        buttonText="View All Projects"
        buttonLink="/projects"
        projects={[
          {
            id: 1,
            tag: "Banking App",
            title: "FinTrust Secure Gateway",
            img: "/img/project01.webp",
            link: "#",
          },
          {
            id: 2,
            tag: "Corporate ERP",
            title: "OmniManage Intranet",
            img: "/img/project02.webp",
            link: "#",
          },
          {
            id: 3,
            tag: "Data API",
            title: "LogRhythm Core Engine",
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
