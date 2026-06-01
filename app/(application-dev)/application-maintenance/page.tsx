import React from "react";
import FAQSection from "@/components/custom/FAQSection";
import Consultation from "@/components/Consultation";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import CustomHero from "@/components/custom/CustomHero";
import CustomCapsule from "@/components/custom/CustomCapsule";
import ServicePrice from "@/components/ServicePrice";
import CustomCards from "@/components/custom/CustomCards";
import TechSection from "@/components/custom/TechSection";
import ProjectsSection from "@/components/custom/Projects";
import { TbStethoscope } from "react-icons/tb";
import { FaArrowCircleUp } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { FaFileShield } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaFileMedicalAlt } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";

const AppMaintenance = [
  {
    id: 1,
    title: "Corrective Maintenance",
    description:
      "Identifying, isolating, and rectifying faults or bugs in the software.",
    icon: <TbStethoscope className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Adaptive Maintenance",
    description:
      "Modifying the application to adapt to changing environments, OS, or hardware.",
    icon: <FaArrowCircleUp className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Perfective Maintenance",
    description:
      "Improving performance, maintainability, and adding new features.",
    icon: <GiElectric className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Preventative Maintenance",
    description:
      "Refactoring code and updating libraries to prevent future issues.",
    icon: <FaFileShield className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Database Optimization",
    description: "Regular tuning of databases for optimal query performance.",
    icon: <FaDatabase className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "Code Audits",
    description:
      "Regular reviews of source code to uphold quality and security standards.",
    icon: <FaRegFileCode className="w-7 h-7 text-blue-600" />,
  },
];

const AppMaintenanceKey = [
  {
    id: 1,
    title: "Bug Tracking",
    icon: <FaBug className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "Version Control",
    icon: <FaClockRotateLeft className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "Environment Updates",
    icon: <FaGear className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "Health Reports",
    icon: <FaFileMedicalAlt className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Latency Reduction",
    icon: <FaForward className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Cost Efficiency",
    icon: <FaHandHoldingUsd className="w-7 h-7 text-white" />,
  },
];

const faqData = [
  {
    id: 1,
    question: "What is the difference between maintenance and management ?",
    answer:
      "Maintenance technically focuses on code updates, bug fixes, and environmental adaptations. Management is broader, including overall operations.",
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  ">
      <CustomHero
        badgeText="Application Maintenance Excellence"
        headingText="Delivering High-Impact"
        headingItalicText="Application Maintenance"
        headingEndText="Solutions"
        descriptionText="Keep your software up-to-date and running smoothly. Our maintenance services focus on adaptive, preventative, and corrective maintenance."
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
            {AppMaintenance.map((benefit) => (
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
            {AppMaintenanceKey.map((item) => (
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
            tag: "Legacy System",
            title: "Legacy Portal Update",
            img: "/img/project01.webp",
            link: "#",
          },
          {
            id: 2,
            tag: "E Commerce",
            title: "Retail App Maintenance",
            img: "/img/project02.webp",
            link: "#",
          },
          {
            id: 3,
            tag: "Healthcare",
            title: "Clinic System Support",
            img: "/img/project03.webp",
            link: "#",
          },
        ]}
      />

      <ServicePrice />
      <Testimonials />

      <Consultation />
      <CtaBanner />
      <FAQSection
        tag="Have Questions?"
        firstHeading="Frequently Asked"
        secondHeading="Questions"
        description="Everything you need to know about us and our services. Can’t find an answer? Feel free to contact us."
        headingTag="h2"
        faqs={faqData}
      />
    </div>
  );
}
