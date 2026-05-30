import React from "react";
import FAQSection from "@/components/custom/FAQSection";
import Consultation from "@/components/Consultation";
import { Testimonials } from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import CustomHero from "@/components/custom/CustomHero";
import ServicePrice from "@/components/ServicePrice";
import TechSection from "@/components/custom/TechSection";
import ProjectsSection from "@/components/custom/Projects";
import CustomCards from "@/components/custom/CustomCards";
import CustomCapsule from "@/components/custom/CustomCapsule";
import { MdShoppingCart } from "react-icons/md";
import { FaUserShield } from "react-icons/fa6";
import { FaTruckMoving } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { FaMobileScreen } from "react-icons/fa6";
import { FaForward } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";

const ECom = [
  {
    id: 1,
    title: "Custom Storefronts",
    description:
      "Visually stunning and user-friendly online stores tailored to your brand.",
    icon: <MdShoppingCart className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Secure Payments",
    description:
      "Integration with leading global and local payment gateways securely.",
    icon: <FaUserShield className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Logistics Integration",
    description:
      "Automated shipping cost calculation and real-time package tracking.",
    icon: <FaTruckMoving className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Inventory Management",
    description:
      "Real-time stock synchronization across multiple sales channels.",
    icon: <FaBoxArchive className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Personalization",
    description:
      "AI-driven product recommendations based on user browsing history.",
    icon: <RiContactsFill className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "M-Commerce",
    description:
      "Mobile-optimized stores and dedicated shopping apps for iOS/Android.",
    icon: <FaMobileScreen className="w-7 h-7 text-blue-600" />,
  },
];

const EComKey = [
  {
    id: 1,
    title: "Fast Loading",
    icon: <FaForward className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "PCI Compliance",
    icon: <IoShieldCheckmarkSharp className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "SEO Optimized",
    icon: <FaSearch className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "Sales Analytics",
    icon: <VscGraphLine className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Multi-Currency",
    icon: <AiOutlineGlobal className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Admin Dashboard",
    icon: <RiAdminFill className="w-7 h-7 text-white" />,
  },
];


const faqData = [
  {
    id: 1,
    question: "Do you use platforms like Shopify or Magento, or build custom ?",
    answer:
      "We do both. We customize open-source platforms and also build fully custom headless e-commerce solutions.",
  },
 
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] r-to-tr r-to-tr r-to-tr  ">
      <CustomHero
        badgeText="Ecommerce Application Excellence"
        headingText="Delivering High-Impact"
        headingItalicText="E-commerce App Solutions"
        headingEndText=""
        descriptionText="Transform your retail business with powerful, scalable e-commerce solutions."
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
            {ECom.map((benefit) => (
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
            {EComKey.map((item) => (
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
            tag: "B2C Retail",
            title: "Fashion Apparel Store",
            img: "/img/project01.webp",
            link: "#",
          },
          {
            id: 2,
            tag: "B2B Marketplace",
            title: "Industrial Supply Portal",
            img: "/img/project02.webp",
            link: "#",
          },
          {
            id: 3,
            tag: "Omnichannel",
            title: "Electronics Multi-vendor",
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
