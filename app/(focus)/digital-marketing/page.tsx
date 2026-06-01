import React from "react";
import FAQSection from "@/components/custom/FAQSection";
import Consultation from "@/components/Consultation";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import ServicePrice from "@/components/ServicePrice";
import CustomHero from "@/components/custom/CustomHero";
import CustomCards from "@/components/custom/CustomCards";
import CustomCapsule from "@/components/custom/CustomCapsule";
import TechSection from "@/components/custom/TechSection";
import {
  FaBolt,
  FaMobile,
  FaUsersCog,
  FaCloud,
  FaServer,
  FaTools,
} from "react-icons/fa";
import { LuGauge } from "react-icons/lu";
import { TbSeo } from "react-icons/tb";
import { RiSmartphoneLine } from "react-icons/ri";
import { HiOutlineCube } from "react-icons/hi";
import { MdOutlineHub } from "react-icons/md";
import { FiShield } from "react-icons/fi";

const features = [
  {
    id: 1,
    title: "Sub-Second Load Times",
    icon: <LuGauge className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "SEO-Optimized (SSR)",
    icon: <TbSeo className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "Mobile First Design",
    icon: <RiSmartphoneLine className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "Component Driven UI",
    icon: <HiOutlineCube className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Headless CMS Integration",
    icon: <MdOutlineHub className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "OWASP Top 10 Security",
    icon: <FiShield className="w-7 h-7 text-white" />,
  },
];
const SEO = [
  {
    id: 1,
    title: "Single Page Apps (SPA)",
    description:
      "React and Vue.js applications offering smooth, fluid transitions without page reloads.",
    icon: <FaBolt className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Progressive Web Apps (PWA)",
    description:
      "Apps that function offline, send push notifications, and look native on mobile devices.",
    icon: <FaMobile className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Web Portals",
    description:
      "Secure, robust vendor, customer, and employee web portals with advanced permissions.",
    icon: <FaUsersCog className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Cloud Web Apps",
    description:
      "Cloud-native applications built to handle immense traffic spikes and scale instantly.",
    icon: <FaCloud className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Backend Architecture",
    description:
      "Resilient RESTful and GraphQL APIs acting as the backbone for multi-platform access.",
    icon: <FaServer className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "Web App Maintenance",
    description:
      "Continuous performance monitoring, framework upgrades, and feature enhancements.",
    icon: <FaTools className="w-7 h-7 text-blue-600" />,
  },
];

const faqData = [
  {
    id: 1,
    question: "What is the difference between a Web App and a Website ?",
    answer:
      "A website is primarily informational, while a Web App is highly interactive, allowing users to manipulate data, log in securely, and perform continuous complex functions (like Gmail or Netflix).",
  },
  {
    id: 2,
    question: "Do you build Progressive Web Apps (PWA) ?",
    answer:
      "Yes, we specialize in PWAs. This allows your web application to be installed on a mobile device's home screen, work offline, and send push notifications.",
  },
  {
    id: 3,
    question: "Which framework do you recommend for Web Apps ?",
    answer:
      "It depends on your goals. We often use React (Next.js) or Vue.js for highly interactive, UI-heavy frontends, backed by Node.js or Laravel for secure server logic.",
  },
  {
    id: 4,
    question: "How do you handle high web traffic ?",
    answer:
      "We utilize cloud-native horizontal scaling (Load Balancing on AWS or Azure), caching layers like Redis, and Content Delivery Networks (CDNs) to ensure minimal latency globally.",
  },
  {
    id: 5,
    question: "Do you optimize web applications for Search Engines (SEO) ?",
    answer:
      "Yes. For web apps requiring high SEO visibility, we implement Server-Side Rendering (SSR) using frameworks like Next.js, combined with proper semantic HTML and meta tagging.",
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] r-to-tr  ">
      <CustomHero
        badgeText="Growth Marketing"
        headingText="Drive Growth with Data-"
        headingItalicText="Driven Digital Marketing"
        headingEndText=""
        descriptionText="Our comprehensive digital marketing services empower your brand to reach its target audience efficiently. From SEO and social media campaigns to highly optimized paid advertisements, we build strategies that deliver measurable results and sustainable growth.


"
        primaryCta={{
          label: "Free Consultation",
          link: "/",
        }}
        secondaryCta={{
          label: "Our Web Solutions",
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
              Web{" "}
              <span className="font-serif italic font-light text-blue-600">
                App Services
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-600 sm:text-lg">
              Comprehensive web development services designed to elevate your
              brand's digital presence.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {SEO.map((benefit) => (
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
              Why our web applications stand out in performance, usability, and
              scale.
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

      <TechSection />

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
