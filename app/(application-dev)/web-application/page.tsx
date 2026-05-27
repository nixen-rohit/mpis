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
import { RiWindowFill } from "react-icons/ri";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { FaCloudArrowDown } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";
import { GiElectric } from "react-icons/gi";
import { FaPlugCirclePlus } from "react-icons/fa6";
import { ImHtmlFive } from "react-icons/im";
import { RiLayout3Line } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa6";
import { FaUserShield } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const WebApp = [
  {
    id: 1,
    title: "Custom Web Apps",
    description:
      "Tailor-made web applications engineered to solve complex business problems.",
    icon: <RiWindowFill className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Responsive Design",
    description:
      "Fluid and responsive interfaces that provide seamless experiences across all devices.",
    icon: <MdOutlineMobileFriendly className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Cloud-Native",
    description:
      "Cloud-ready web applications built for scalability and high availability.",
    icon: <FaCloudArrowDown className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Enterprise Security",
    description:
      "Robust security protocols to protect sensitive data against threats.",
    icon: <IoShieldCheckmark className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "High Performance",
    description:
      "Optimized lightweight applications designed for fast load speeds and minimal latency.",
    icon: <GiElectric className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "API Integrations",
    description: "Seamless third-party API and custom backend integrations.",
    icon: <FaPlugCirclePlus className="w-7 h-7 text-blue-600" />,
  },
];

const WebAppKey = [
  {
    id: 1,
    title: "Modern Tech Stacks",
    icon: <ImHtmlFive className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "Intuitive UX/UI",
    icon: <RiLayout3Line className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "Scalable Databases",
    icon: <FaDatabase className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "Secure Authentication",
    icon: <FaUserShield className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Continuous Deployment",
    icon: <FaArrowCircleUp className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Ongoing Support",
    icon: <BiSupport className="w-7 h-7 text-white" />,
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] r-to-tr  ">
      <CustomHero
        badgeText="Web Application Excellence"
        headingText="Delivering High-Impact"
        headingItalicText="Web Application Solutions"
        headingEndText=""
        descriptionText="We develop robust, scalable, and high-performance web applications tailored to your business needs."
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
            {WebApp.map((benefit) => (
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
            {WebAppKey.map((item) => (
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
        headingText="Some of "
        headingItalicText="Our Works"
        headingEndText=""
        descriptionText="A snapshot of real-world projects we have delivered for clients across the globe."
        buttonText="View All Projects"
        buttonLink="/contact-us"
        projects={[
          {
            id: 1,
            tag: "Enterprise Web ",
            title: "ERP Web System",
            img: "/img/project01.webp",
            link: "#",
          },
          {
            id: 2,
            tag: "SaaS Platform",
            title: "Analytics Dashboard",
            img: "/img/project02.webp",
            link: "#",
          },
          {
            id: 3,
            tag: "Portal",
            title: "Customer Self-Service Portal",
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
