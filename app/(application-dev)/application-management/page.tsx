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
import { RiLayout4Fill } from "react-icons/ri";
import { BsTools } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { VscGraphLine } from "react-icons/vsc";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";
import { IoBugSharp } from "react-icons/io5";
import { IoMdCloudDownload } from "react-icons/io";
import { MdGroup } from "react-icons/md";

const AppManagement = [
  {
    id: 1,
    title: "Proactive Monitoring",
    description: "24/7 monitoring of application performance and health.",
    icon: <RiLayout4Fill className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Issue Resolution",
    description: "Rapid troubleshooting and bug fixing to minimize downtime.",
    icon: <BsTools className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Performance Tuning",
    description:
      "Continuous optimization for faster response times and lower resource usage.",
    icon: <FaArrowUp className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Security Management",
    description:
      "Vulnerability patching, threat monitoring, and access control.",
    icon: <FaShieldAlt className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Release Management",
    description:
      "Smooth deployment of updates and new features without disruption.",
    icon: <FaArrowsRotate className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "Usage Analytics",
    description:
      "Insights into how users interact with the application to drive improvements.",
    icon: <VscGraphLine className="w-7 h-7 text-blue-600" />,
  },
];

const AppManagementkey = [
  {
    id: 1,
    title: "24/7 Availability",
    icon: <MdAccessTimeFilled className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "SLA Driven",
    icon: <IoNewspaper className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "Compliance Management",
    icon: <IoShieldCheckmark className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "Defect Prevention",
    icon: <IoBugSharp className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Cloud Resource Management",
    icon: <IoMdCloudDownload className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Dedicated Support Team",
    icon: <MdGroup className="w-7 h-7 text-white" />,
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] r-to-tr  ">
      <CustomHero
        badgeText="Application Management Excellence"
        headingText="Delivering High-Impact"
        headingItalicText="Application Management"
        headingEndText="Solutions"
        descriptionText="Maximize the value of your IT investments with comprehensive management solutions."
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
            {AppManagement.map((benefit) => (
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
            {AppManagementkey.map((item) => (
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
                  tag: "Enterprise ERP",
                  title: "Global ERP Management",
                  img: "/img/project01.webp",
                  link: "#",
                },
                {
                  id: 2,
                  tag: "Cloud Apps",
                  title: "SaaS Platform Operations",
                  img: "/img/project02.webp",
                  link: "#",
                },
                {
                  id: 3,
                  tag: "Finnacial IT",
                  title: "Banking App Maintenance",
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
