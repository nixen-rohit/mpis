import Consultation from "@/components/Consultation";
import { Testimonials } from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import TechSection from "@/components/custom/TechSection";
import ServicePrice from "@/components/ServicePrice";
import CustomHero from "@/components/custom/CustomHero";
import CustomCards from "@/components/custom/CustomCards";
import ProjectsSection from "@/components/custom/Projects";
import CustomCapsule from "@/components/custom/CustomCapsule";
import FAQSection from "@/components/custom/FAQSection";
import { FaCode, FaCloudArrowDown, FaGear } from "react-icons/fa6";
import { PiBracketsCurlyBold } from "react-icons/pi";
import {
  BsTools,
  BsGraphUpArrow,
  BsFillShieldLockFill,
  BsDatabaseFillCheck,
} from "react-icons/bs";
import { TbGitFork } from "react-icons/tb";
import { GrCycle } from "react-icons/gr";
import { FaPencilRuler } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";

const CustomCapabilities = [
  {
    id: 1,
    title: "Enterprise Applications",
    description:
      "Robust, scalable software tailored to streamline complex corporate workflows and operations.",
    icon: <FaCode className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "API Development",
    description:
      "Secure and efficient custom APIs to seamlessly connect your disparate systems and third-party tools.",
    icon: <PiBracketsCurlyBold className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Legacy Modernization",
    description:
      "Upgrade outdated systems to modern tech stacks without disrupting your current operations.",
    icon: <BsTools className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "SaaS Product Development",
    description:
      "Turn your vision into a scalable, multi-tenant SaaS platform ready for rapid market launch.",
    icon: <BsGraphUpArrow className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "System Integration",
    description:
      "Unify your CRM, ERP, and internal tools into a single, cohesive software ecosystem.",
    icon: <FaGear className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "Data Security Setup",
    description:
      "Implementing enterprise-grade security protocols, Role-Based Access Control, and data encryption.",
    icon: <BsFillShieldLockFill className="w-7 h-7 text-blue-600" />,
  },
];

const CoreCapabilities = [
  {
    id: 1,
    title: "Agile Methodology",
    icon: <TbGitFork className="h-7 w-7 text-white" />,
  },
  {
    id: 2,
    title: "CI/CD Pipelines",
    icon: <GrCycle className="h-7 w-7 text-white" />,
  },
  {
    id: 3,
    title: "Custom UX/UI",
    icon: <FaPencilRuler className="h-7 w-7 text-white" />,
  },
  {
    id: 4,
    title: "Microservices Architecture",
    icon: <FaCloudArrowDown className="h-7 w-7 text-white" />,
  },
  {
    id: 5,
    title: "Optimized Databases",
    icon: <BsDatabaseFillCheck className="h-7 w-7 text-white" />,
  },
  {
    id: 6,
    title: "High Scalability",
    icon: <MdRocketLaunch className="h-7 w-7 text-white" />,
  },
];


const faqData = [
  {
    id: 1,
    question: "Will I own the source code ?",
    answer:
      "Yes, once the project is completed and fully paid for, we transfer 100% intellectual property rights and full source code access to you.",
  },
  {
    id: 2,
    question: "Can you pick up a project started by another team?",
    answer:
      "Yes, we offer project rescue services. We first conduct a comprehensive code audit to understand the architecture, then devise a plan to stabilize and complete it.",
  },
  {
    id: 3,
    question: "How do you ensure data security?",
    answer:
      "We implement secure coding standards (OWASP), role-based access controls, data encryption (at rest and in transit), and regular vulnerability testing prior to launch.",
  },
  {
    id: 4,
    question: "Do you use agile software development ?",
    answer:
      "Yes, we follow an Agile/Scrum methodology. We break development into two-week sprints, providing you with regular, functional updates so you have full transparency.",
  },
  {
    id: 5,
    question: "What happens after the software is launched ?",
    answer:
      "We provide a standard warranty period for bug fixes. Beyond that, we offer various support and maintenance agreements to keep the software updated, secure, and compatible.",
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] r-to-tr  ">
      <CustomHero
        badgeText="Tailored Solutions"
        headingText="Bespoke Software"
        headingItalicText="Built for Your Business"
        headingEndText=""
        descriptionText="We design and develop custom software solutions that perfectly align with your unique business processes. Our bespoke applications are scalable, secure, and engineered to solve complex operational challenges, driving efficiency and growth."
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
              Custom{" "}
              <span className="font-serif italic font-light text-blue-600">
                Capabilities
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-600 sm:text-lg">
              End-to-end custom software services designed to give you a
              competitive edge.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {CustomCapabilities.map((benefit) => (
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
              The structural advantages you gain when building custom software
              with our elite engineering teams.
            </p>
          </div>

          {/* Grid */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {CoreCapabilities.map((item) => (
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
        headingText="Custom "
        headingItalicText="Software Projects"
        headingEndText=""
        descriptionText="A selection of bespoke software products we've architected from the ground up."
        buttonText="View All Projects"
        buttonLink="/projects"
        projects={[
          {
            id: 1,
            title: "Nexus Global ERP",
            img: "/img/project01.webp",
            tag: "ERP System",
            link: "#",
          },
          {
            id: 2,
            title: "Supply Chain Pro",
            img: "/img/project02.webp",
            tag: "Procurement Software",
            link: "#",
          },
          {
            id: 3,
            title: "AnalytiCore Dashboards",
            img: "/img/project03.webp",
            tag: "SaaS Platform",
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
