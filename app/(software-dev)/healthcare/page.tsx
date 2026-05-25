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
import { FaHeartbeat } from "react-icons/fa";
import { RiVideoChatFill } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiMedicineBottleFill } from "react-icons/ri";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { GrUserPolice } from "react-icons/gr";
import { FaLock } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { HiMiniCpuChip } from "react-icons/hi2";
import { FaMobileAlt } from "react-icons/fa";
import { FaCloudArrowDown } from "react-icons/fa6";
import { BsRobot } from "react-icons/bs";

const Healthcare = [
  {
    id: 1,
    title: "Patient Management",
    description:
      "Centralized EHR/EMR systems to manage patient records, appointments, and histories securely.",
    icon: <FaHeartbeat className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Telemedicine",
    description:
      "HIPAA-compliant video consultation platforms connecting patients with doctors remotely.",
    icon: <RiVideoChatFill className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Health Analytics",
    description:
      "AI-powered dashboards and reporting tools for clinical and operational data insights.",
    icon: <BsGraphUpArrow className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Pharmacy Automation",
    description:
      "Smart prescription and medication management systems integrated with clinical workflows.",
    icon: <RiMedicineBottleFill className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Compliance & Security",
    description:
      "End-to-end encryption, audit trails, and compliance with HIPAA, HL7, and FHIR standards.",
    icon: <IoShieldCheckmarkSharp className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "Staff Scheduling",
    description:
      "Automated shift planning and resource allocation for medical staff and departments.",
    icon: <GrUserPolice className="w-7 h-7 text-blue-600" />,
  },
];

const HealthcareKey = [
  {
    id: 1,
    title: "HIPAA Compliance",
    icon: <FaLock className="w-7 h-7 text-white-600" />,
  },
  {
    id: 2,
    title: "HL7 & FHIR Integration",
    icon: <FaDatabase className="w-7 h-7 text-white-600" />,
  },
  {
    id: 3,
    title: "AI Diagnostics Support",
    icon: <HiMiniCpuChip className="w-7 h-7 text-white-600" />,
  },
  {
    id: 4,
    title: "Mobile Health Apps",
    icon: <FaMobileAlt className="w-7 h-7 text-white-600" />,
  },
  {
    id: 5,
    title: "Cloud-based EHR",
    icon: <FaCloudArrowDown className="w-7 h-7 text-white-600" />,
  },
  {
    id: 6,
    title: "Robotic Process Automation",
    icon: <BsRobot className="w-7 h-7 text-white-600" />,
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  ">
      <CustomHero
        badgeText="Healthcare Excellence"
        headingText="Delivering High-Impact"
        headingItalicText="Healthcare Solutions"
        headingEndText=""
        descriptionText="We build HIPAA-compliant healthcare software that streamlines patient management, clinical workflows, and telehealth delivery. Our solutions empower hospitals, clinics, and health-tech startups to deliver better care with data-driven insights."
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
              Comprehensive healthcare software features built to solve
              real-world challenges and accelerate your growth.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Healthcare.map((benefit) => (
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
            {HealthcareKey.map((item) => (
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
        headingText="Some of "
        headingItalicText="Our Works"
        headingEndText=""
        descriptionText="A snapshot of real-world healthcare projects we have delivered for clients across the globe."
        buttonText="View All Projects"
        buttonLink="/projects"
        projects={[
          {
            id: 1,
            tag: "Hospital Management",
            title: "MedConnect EHR",
            img: "/img/project01.webp",
            link: "#",
          },
          {
            id: 2,
            tag: "Telemedicine",
            title: "TeleDoc Platform",
            img: "/img/project02.webp",
            link: "#",
          },
          {
            id: 3,
            tag: "Pharmacy System",
            title: "PharmaSmart",
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
