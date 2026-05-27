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
import { PiBracketsCurlyBold } from "react-icons/pi";
import { FaGear } from "react-icons/fa6";
import { RiGitForkLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import { FaPuzzlePiece } from "react-icons/fa6";
import { MdGpsFixed } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { IoGitBranch } from "react-icons/io5";
import { BsFillShieldLockFill } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";

const CustomApp = [
  {
    id: 1,
    title: "Tailored Development",
    description:
      "Applications built precisely to meet your unique business requirements.",
    icon: <PiBracketsCurlyBold className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Workflow Automation",
    description:
      "Custom tools to automate repetitive tasks and improve efficiency.",
    icon: <FaGear className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Enterprise Software",
    description:
      "Large-scale systems tailored for comprehensive enterprise management.",
    icon: <RiGitForkLine className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Legacy Modernization",
    description:
      "Upgrading outdated systems with modern, custom-built applications.",
    icon: <FaCode className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Custom Databases",
    description:
      "Bespoke database architectures tailored for your specific data needs.",
    icon: <AiFillDatabase className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "Unique Integrations",
    description:
      "Custom APIs and connectors to link disparate business systems.",
    icon: <FaPuzzlePiece className="w-7 h-7 text-blue-600" />,
  },
];

const CustomKey = [
  {
    id: 1,
    title: "Business-Centric Strategy",
    icon: <MdGpsFixed className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "Clean & Scalable Code",
    icon: <FaCode className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "User-Centric Design",
    icon: <FaUserCog className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "Agile Methodology",
    icon: <IoGitBranch className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Data Privacy",
    icon: <BsFillShieldLockFill className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Custom Analytics",
    icon: <VscGraph className="w-7 h-7 text-white" />,
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] r-to-tr  ">
      <CustomHero
        badgeText="Custom Application Excellence"
        headingText="Delivering High-Impact"
        headingItalicText="Custom Application Solutions"
        headingEndText=""
        descriptionText="Empower your business with fully customizable application solutions."
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
            {CustomApp.map((benefit) => (
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
            {CustomKey.map((item) => (
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
            tag: "Custom CRM",
            title: "SalesFlow CRM",
            img: "/img/project01.webp",
            link: "#",
          },
          {
            id: 2,
            tag: "Automation",
            title: "Logistics Automator",
            img: "/img/project02.webp",
            link: "#",
          },
          {
            id: 3,
            tag: "Internal Tool",
            title: "HR Management Suite",
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
