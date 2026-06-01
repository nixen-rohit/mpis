import FAQSection from "@/components/custom/FAQSection";
import Consultation from "@/components/Consultation";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import ServicePrice from "@/components/ServicePrice";
import CustomHero from "@/components/custom/CustomHero";
import CustomCapsule from "@/components/custom/CustomCapsule";
import CustomCards from "@/components/custom/CustomCards";
import TechSection from "@/components/custom/TechSection";
import ProjectsSection from "@/components/custom/Projects";

import {
  FaUniversity,
  FaCreditCard,
  FaLink,
  FaChartBar,
  FaHandshake,
  FaShieldAlt,
} from "react-icons/fa";

import { MdOutlineSecurity } from "react-icons/md";
import { FiGlobe } from "react-icons/fi";
import { IoQrCodeSharp } from "react-icons/io5";
import { TbShieldLock } from "react-icons/tb";
import { LuNetwork } from "react-icons/lu";
import { RiLinkM } from "react-icons/ri";

const features = [
  {
    id: 1,
    title: "PCI-DSS Compliance",
    icon: <MdOutlineSecurity className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "Multi-currency Support",
    icon: <FiGlobe className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "UPI & QR Payments",
    icon: <IoQrCodeSharp className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "AI Fraud Detection",
    icon: <TbShieldLock className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Open Banking APIs",
    icon: <LuNetwork className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Blockchain Integration",
    icon: <RiLinkM className="w-7 h-7 text-white" />,
  },
];

const Fintech = [
  {
    id: 1,
    title: "Digital Banking",
    description:
      "Core banking systems, neobank apps, and open-banking API integrations for modern financial experiences.",
    icon: <FaUniversity className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Payment Gateways",
    description:
      "Fast, secure multi-currency payment processing with PCI-DSS compliance and fraud detection.",
    icon: <FaCreditCard className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Blockchain Finance",
    description:
      "DeFi platforms, crypto wallets, tokenization, and smart contract development.",
    icon: <FaLink className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Investment Platforms",
    description:
      "Robo-advisors, trading dashboards, and portfolio management tools powered by real-time data.",
    icon: <FaChartBar className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Lending & Credit",
    description:
      "Automated loan origination, credit scoring, and P2P lending marketplace platforms.",
    icon: <FaHandshake className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "Regulatory Compliance",
    description:
      "KYC/AML automation, audit logging, and real-time regulatory reporting dashboards.",
    icon: <FaShieldAlt className="w-7 h-7 text-blue-600" />,
  },
];

const faqData = [
  {
    id: 1,
    question: "Is your payment gateway PCI-DSS compliant ?",
    answer:
      "Yes, all our payment solutions are built to PCI-DSS Level 1 standards with tokenization, 3D Secure, and end-to-end encryption.",
  },
  {
    id: 2,
    question: "Can you integrate with core banking systems ?",
    answer:
      "Yes, we have experience integrating with Temenos, Finacle, Oracle FLEXCUBE, and custom core banking platforms via APIs. ",
  },
  {
    id: 3,
    question: "Do you support crypto and blockchain features ?",
    answer:
      "Yes — we build crypto wallets, DeFi platforms, NFT marketplaces, and smart contracts on Ethereum, Solana, and other major chains. ",
  },
  {
    id: 4,
    question: "How do you handle KYC/AML compliance ?",
    answer:
      "We integrate automated KYC/AML solutions including document verification, liveness checks, and real-time sanctions screening.",
  },
  {
    id: 5,
    question: "What is the typical development timeline for a fintech MVP ?",
    answer:
      "A fintech MVP typically takes 12-16 weeks depending on complexity. We follow agile sprints with weekly demos to keep you in the loop. ",
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  ">
      <CustomHero
        badgeText="Fintech Excellence"
        headingText="Delivering High-Impact"
        headingItalicText="Fintech Solutions"
        headingEndText=""
        descriptionText="We build secure, compliant, and scalable fintech solutions — from digital banking and payment gateways to investment platforms and blockchain-based finance tools. Our expertise spans across lending, insurance, wealth management, and more.
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
              Comprehensive fintech software features built to solve real-world
              challenges and accelerate your growth.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Fintech.map((benefit) => (
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
              The essential building blocks that make our fintech solutions
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
            tag: "Digital Banking",
            title: "NeoBank App",
            img: "/img/project01.webp",
            link: "#",
          },
          {
            id: 2,
            tag: "Payments",
            title: "PaySwift Gateway",
            img: "/img/project02.webp",
            link: "#",
          },
          {
            id: 3,
            tag: "Investment Platform",
            title: "WealthDesk",
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
