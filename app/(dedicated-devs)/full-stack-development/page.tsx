import React from "react";
import FAQSection from "@/components/custom/FAQSection";
import Consultation from "@/components/Consultation";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import CustomCards from "@/components/custom/CustomCards";
import ServicePrice from "@/components/ServicePrice";
import CustomHero from "@/components/custom/CustomHero";
import CustomCapsule from "@/components/custom/CustomCapsule";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { IoBugSharp } from "react-icons/io5";
import { FaCloudArrowDown } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { RiTerminalWindowLine } from "react-icons/ri";
import { BsArrowRepeat } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { RiLinkM } from "react-icons/ri";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";

const FullStack = [
  {
    id: 1,
    title: "Reactive Frontends",
    description:
      "State-of-the-art Single Page Applications designed for peak responsiveness using Next.js.",
    icon: <RiTerminalWindowLine className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Robust Backend APIs",
    description:
      "Scalable RESTful or GraphQL endpoints engineered to securely parse massive datasets.",
    icon: <PiBracketsCurlyBold className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Database Architecture",
    description:
      "Complex schema design, data lakes, and clustered replication across SQL/NoSQL systems.",
    icon: <FaDatabase className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "DevOps Integration",
    description:
      "Full CI/CD pipeline establishment, containerization via Docker, and cluster orchestration.",
    icon: <FaCloudArrowDown className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "QA Automation",
    description:
      "Automated testing scripts spanning unit, integration, and E2E layers to catch bugs early.",
    icon: <IoBugSharp className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "Enterprise Security",
    description:
      "Enforcing strict OWASP rules, role-based access control, and endpoint encryption.",
    icon: <RiShieldKeyholeFill className="w-7 h-7 text-blue-600" />,
  },
];

const FullStackKey = [
  {
    id: 1,
    title: "Agile Iteration",
    icon: <BsArrowRepeat className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "Faster Time to Market",
    icon: <MdAccessTimeFilled className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "Seamless API Integration",
    icon: <RiLinkM className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "Microservice Architecture",
    icon: <BsFillGrid1X2Fill className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Eliminates Communication Silos",
    icon: <BsFillPeopleFill className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Maintainable Codebases",
    icon: <FaCode className="w-7 h-7 text-white" />,
  },
];

const faqData = [
  {
    id: 1,
    question: "What is Full-Stack Development ?",
    answer:
      "Full-stack development involves engineering both the client-side (frontend layout, design, logic) and server-side (backend APIs, database layers, security) of software applications.",
  },
  {
    id: 2,
    question: "Do you use microservices architectures ?",
    answer:
      "Yes, for large applications, we separate monolithic code into domain-specific microservices. This makes applications vastly easier to maintain, deploy, and scale.",
  },
  {
    id: 3,
    question: "How do you ensure code quality across the entire stack ?",
    answer:
      "We use strict linting rules, automated CI/CD pipelines, code reviews, and comprehensive E2E automated test suites to assure stability.",
  },
  {
    id: 4,
    question: "Can your developers optimize our database ?",
    answer:
      "Absolutely. Full-stack engineers understand how frontend queries impact the backend database and will utilize proper indexing, caching (Redis), and denormalization to ensure fast load times.",
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] r-to-tr  ">
      <CustomHero
        badgeText="Comprehensive Coverage"
        headingText="End-to-End "
        headingItalicText=" Full Stack Engineering"
        headingEndText=""
        descriptionText="From rich frontend user experiences to robust backend architectures and secure databases, our full-stack engineering teams deliver complete, scalable software solutions. We bridge the gap between design and data, handling every technical layer in-house."
        primaryCta={{
          label: "Hire a Stack Developer",
          link: "/",
        }}
        secondaryCta={{
          label: "Full Stack Services",
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
              Full Stack{" "}
              <span className="font-serif italic font-light text-blue-600">
                Capabilities
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-600 sm:text-lg">
              Unified engineering workflows encompassing all layers of custom
              software creation.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {FullStack.map((benefit) => (
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
              The Full{" "}
              <span className="font-serif italic font-light text-blue-600">
                Stack Advantage
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-400 sm:text-lg">
              Why hiring unified full-stack coders is crucial.
            </p>
          </div>

          {/* Grid */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {FullStackKey.map((item) => (
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
