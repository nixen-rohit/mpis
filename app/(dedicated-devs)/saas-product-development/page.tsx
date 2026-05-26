import React from "react";
import Faq from "@/components/Faq";
import Consultation from "@/components/Consultation";
import { Testimonials } from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import ServicePrice from "@/components/ServicePrice";
import CustomHero from "@/components/custom/CustomHero";
import CustomCards from "@/components/custom/CustomCards";
import CustomCapsule from "@/components/custom/CustomCapsule";
import {
  FaDatabase,
  FaCreditCard,
  FaChartLine,
  FaPlug,
  FaCloud,
  FaUserShield,
  FaGlobe,
  FaInfinity,
  FaSyncAlt,
  FaRocket,
} from "react-icons/fa";

const SaaSProduct = [
  {
    id: 1,
    title: "Multi-tenant Architecture",
    description:
      "Securely separate customer data across shared databases while maintaining peak performance.",
    icon: <FaDatabase className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Subscription & Billing",
    description:
      "Integrate Stripe, Paddle, or custom recurring revenue invoicing algorithms seamlessly.",
    icon: <FaCreditCard className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Super Admin Dashboards",
    description:
      "Granular control panels to oversee MRR, user churn, feature toggles, and data analytics.",
    icon: <FaChartLine className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Third-party Webhooks",
    description:
      "API integrations with Salesforce, Slack, Zapier, and other B2B essential toolchains.",
    icon: <FaPlug className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Auto-scaling Cloud",
    description:
      "AWS serverless or horizontal Docker clusters that adapt resources in real-time to traffic.",
    icon: <FaCloud className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "RBAC Security",
    description:
      "Strict Role-Based Access Control enforcing hierarchy rules for organizations utilizing your app.",
    icon: <FaUserShield className="w-7 h-7 text-blue-600" />,
  },
];

const SaaSKey = [
  {
    id: 1,
    title: "Predictable MRR",

    icon: <FaChartLine className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "Global Reach",

    icon: <FaGlobe className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "Infinite Scalability",

    icon: <FaInfinity className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "Centralized Updates",

    icon: <FaSyncAlt className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Data Monetization",

    icon: <FaDatabase className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "High Valuation Exits",

    icon: <FaRocket className="w-7 h-7 text-white" />,
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] r-to-tr ">
      <CustomHero
        badgeText="Scalable Architecture"
        headingText="Next-Gen SaaS"
        headingItalicText="Product Engineering"
        headingEndText=""
        descriptionText=" We build robust, multi-tenant Software as a Service (SaaS) products engineered for rapid user scaling, high availability, and recurring revenue generation. From conceptual MVP to massive enterprise deployment."
        primaryCta={{
          label: "Hire a SaaS Developer",
          link: "/",
        }}
        secondaryCta={{
          label: "View Solutions",
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
              What We Build
            </span>
            <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-black leading-[1.15]">
              SaaS Core{" "}
              <span className="font-serif italic font-light text-blue-600">
                Capabilities
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-600 sm:text-lg">
              Vital architectural pillars needed to support thousands of active
              users seamlessly. .
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {SaaSProduct.map((benefit) => (
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
              Core Elements
            </span>

            <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-white leading-[1.15]">
              The SaaS{" "}
              <span className="font-serif italic font-light text-blue-600">
                Advantage
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-400 sm:text-lg">
              Why investing in custom B2B/B2C SaaS products is highly
              profitable.
            </p>
          </div>

          {/* Grid */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SaaSKey.map((item) => (
              <CustomCapsule
                key={item.id}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <ServicePrice />
      <Testimonials />

      <Consultation />
      <CtaBanner />
      <Faq />
    </div>
  );
}
