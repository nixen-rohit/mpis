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
  FaStore,
  FaUsers,
  FaCreditCard,
  FaBoxes,
  FaRobot,
  FaChartPie,
} from "react-icons/fa";

import { LuTimer } from "react-icons/lu";
import { TbSeo } from "react-icons/tb";
import { RiShoppingBag3Line } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { IoQrCodeSharp } from "react-icons/io5";

import { FiGlobe } from "react-icons/fi";

const features = [
  {
    id: 1,
    title: "Sub-2s Page Load",
    icon: <LuTimer className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "SEO Optimized",
    icon: <TbSeo className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "Mobile Commerce",
    icon: <RiShoppingBag3Line className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "PCI-DSS Payments",
    icon: <MdOutlineSecurity className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Barcode/QR Inventory",
    icon: <IoQrCodeSharp className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Multi-language & Currency",
    icon: <FiGlobe className="w-7 h-7 text-white" />,
  },
];
const EComm = [
  {
    id: 1,
    title: "Custom Storefronts",
    description:
      "Blazing-fast, mobile-first storefronts built on Headless commerce, Next.js, or custom PHP with pixel-perfect UI.",
    icon: <FaStore className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Multi-vendor Marketplace",
    description:
      "Scalable marketplace platforms with vendor dashboards, commission management, and payout automation.",
    icon: <FaUsers className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Payment Integration",
    description:
      "Seamless integration with Stripe, Razorpay, PayPal, COD, and 30+ payment gateways worldwide.",
    icon: <FaCreditCard className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Order & Inventory",
    description:
      "Real-time inventory tracking, automated reorder points, warehouse management, and delivery tracking.",
    icon: <FaBoxes className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "AI Recommendations",
    description:
      "Personalized product recommendations, smart search, and AI-driven cross-selling & upselling engines.",
    icon: <FaRobot className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "Analytics & Reporting",
    description:
      "Real-time sales dashboards, conversion funnel analysis, customer LTV, and cohort reporting.",
    icon: <FaChartPie className="w-7 h-7 text-blue-600" />,
  },
];
export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  ">
      <CustomHero
        badgeText="Ecommerce Excellence
"
        headingText="Delivering High-Impact"
        headingItalicText="Ecommerce Solutions"
        headingEndText=""
        descriptionText="We build high-converting, scalable eCommerce platforms and marketplaces tailored to your business model. From B2C storefronts and B2B portals to multi-vendor marketplaces, our solutions drive sales, enhance UX, and integrate seamlessly with your supply chain.
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
              Comprehensive ecommerce software features built to solve
              real-world challenges and accelerate your growth.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {EComm.map((benefit) => (
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
              The essential building blocks that make our ecommerce solutions
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
            tag: "Multi-vendor Marketplace",
            title: "ShopSphere",
            img: "/img/project01.webp",
            link: "#",
          },
          {
            id: 2,
            tag: "D2C Fashion Store",
            title: "FashionHub",
            img: "/img/project02.webp",
            link: "#",
          },
          {
            id: 3,
            tag: "B2B E Commerce",
            title: "B2B Wholesale Portal",
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
