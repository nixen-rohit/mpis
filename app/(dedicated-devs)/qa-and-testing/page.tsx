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
  FaUserCheck,
  FaRobot,
  FaTachometerAlt,
  FaExchangeAlt,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";

import { MdOutlineVerified } from "react-icons/md";
import { GitPullRequest } from "lucide-react";
import { TbChecklist } from "react-icons/tb";
import { RiUserSearchLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BsCashStack } from "react-icons/bs";

const features = [
  {
    id: 1,
    title: "Zero-Defect Goal",
    icon: <MdOutlineVerified className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "Automated Pre-Merge Tests",
    icon: <GitPullRequest className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "Thorough Regression Suites",
    icon: <TbChecklist className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "Realistic User Emulation",
    icon: <RiUserSearchLine className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Detailed Metric Reporting",
    icon: <HiOutlineDocumentReport className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Cheaper Long-Term Fixes",
    icon: <BsCashStack className="w-7 h-7 text-white" />,
  },
];

const QA = [
  {
    id: 1,
    title: "Manual Testing",
    description:
      "Real human-driven exploration seeking aesthetic flow breaks and logic errors.",
    icon: <FaUserCheck className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Automated Testing",
    description:
      "E2E scripts using Cypress/Selenium to instantly verify complex workflows via CI/CD.",
    icon: <FaRobot className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Performance & Load",
    description:
      "Stress-testing backend servers with thousands of fake concurrent users before launch day.",
    icon: <FaTachometerAlt className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "API & Integration",
    description:
      "Verifying data exchange integrity between 3rd-party microservices and local databases.",
    icon: <FaExchangeAlt className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Cross-Device Testing",
    description:
      "Perfect compatibility checks on real mobile hardwares across Safari, Chrome, and Edge.",
    icon: <FaMobileAlt className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "Security Audits",
    description:
      "Penetration testing to pinpoint XSS injections, insecure endpoints, and data leaks.",
    icon: <FaShieldAlt className="w-7 h-7 text-blue-600" />,
  },
];

const faqData = [
  {
    id: 1,
    question: "Is manual testing still necessary ?",
    answer:
      "Yes. Automated tests only catch the bugs they are explicitly programmed to find. Manual QA testers replicate spontaneous human behavior and catch UX logic issues machines cannot.",
  },
  {
    id: 2,
    question: "What is a regression test ?",
    answer:
      "A regression test ensures that adding new features to an application did not accidentally break existing old features.",
  },
  {
    id: 3,
    question: "Do QA teams fix the code themselves ",
    answer:
      "No, a QA team identifies, documents, and explicitly categorizes bugs with recording steps in Jira. A developer then receives that ticket to fix the code directly.",
  },
  {
    id: 4,
    question: "What is load testing ?",
    answer:
      "Load testing uses automation to simulate thousands of simultaneous users browsing and transacting on your site to see at what point the servers crash, allowing for preventative architecture upgrades.",
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] r-to-tr  ">
      <CustomHero
        badgeText="Quality Assurance"
        headingText="Software Testing"
        headingItalicText="&
Quality Control"
        headingEndText=""
        descriptionText=" Ensure your applications run flawlessly across all devices and scenarios. Our QA engineers deploy rigorous manual testing protocols alongside intelligent automation scripts to identify and eradicate bugs before your users ever see them.


"
        primaryCta={{
          label: "Hire a QA Tester",
          link: "/",
        }}
        secondaryCta={{
          label: "Our Testing Process",
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
              Testing{" "}
              <span className="font-serif italic font-light text-blue-600">
                Strategies
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-600 sm:text-lg">
              Comprehensive analysis targeting code integrity, usability, and
              speed.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {QA.map((benefit) => (
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
              The QA{" "}
              <span className="font-serif italic font-light text-blue-600">
                Advantage
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-400 sm:text-lg">
              Why isolated auditing teams produce drastically better software.
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
