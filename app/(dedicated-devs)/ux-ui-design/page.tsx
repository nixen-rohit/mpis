import FAQSection from "@/components/custom/FAQSection";
import Consultation from "@/components/Consultation";
import { Testimonials } from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import ServicePrice from "@/components/ServicePrice";
import CustomHero from "@/components/custom/CustomHero";
import CustomCards from "@/components/custom/CustomCards";
import CustomCapsule from "@/components/custom/CustomCapsule";
import TechSection from "@/components/custom/TechSection";
import {
  FaUsers,
  FaProjectDiagram,
  FaPalette,
  FaMagic,
  FaVial,
  FaLayerGroup,
} from "react-icons/fa";

import { RiFocus3Line } from "react-icons/ri";
import { HiOutlineDatabase } from "react-icons/hi";
import { MdOutlineAccessibilityNew } from "react-icons/md";
import { TbBrandReact } from "react-icons/tb";
import { FiPenTool } from "react-icons/fi";
import { BsGraphUpArrow } from "react-icons/bs";

const UIUX = [
  {
    id: 1,
    title: "User Research",
    description:
      "Deep dive into user personas, behavior analysis, and market requirements.",
    icon: <FaUsers className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Wireframing",
    description:
      "Low-fidelity structural maps laying out the core functionality of your application.",
    icon: <FaProjectDiagram className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Visual UI Design",
    description:
      "Breathtaking visual screens, color theory, and typography tailored to your brand.",
    icon: <FaPalette className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Interaction Design",
    description:
      "Micro-animations and dynamic interactions that make the product feel alive.",
    icon: <FaMagic className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Usability Testing",
    description:
      "A/B testing and user feedback loops to continuously optimize conversions.",
    icon: <FaVial className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "Design Systems",
    description:
      "Scalable component libraries to ensure visual consistency across large-scale projects.",
    icon: <FaLayerGroup className="w-7 h-7 text-blue-600" />,
  },
];

const UIUXKey = [
  {
    id: 1,
    title: "User-Centric Focus",
    icon: <RiFocus3Line className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "Data-Driven Decisions",
    icon: <HiOutlineDatabase className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "Accessibility First",
    icon: <MdOutlineAccessibilityNew className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "Brand Alignment",
    icon: <TbBrandReact className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Rapid Prototyping",
    icon: <FiPenTool className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Conversion Optimized",
    icon: <BsGraphUpArrow className="w-7 h-7 text-white" />,
  },
];


const faqData = [
  {
    id: 1,
    question: "What is the difference between UX and UI ?",
    answer:
      "UX (User Experience) focuses on the logic, flow, wireframes, and how easy the app is to use. UI (User Interface) focuses on the visual aspects—colors, typography, buttons, and aesthetics.",
  },
  {
    id: 2,
    question: "What tools do you use for design ?",
    answer:
      "We primarily use Figma for collaborative UI design, wireframing, and prototyping, as it seamlessly integrates with modern development workflows.",
  },
  {
    id: 3,
    question: "Do you provide HTML/CSS code or just designs ?",
    answer:
      "While this specific service provides Figma files and interactive prototypes (developer handoff assets), our Full Stack development team can absolutely convert these designs into a fully functional product.",
  },
  {
    id: 4,
    question: "How long does a typical design phase take ?",
    answer:
      "A standard MVP app design takes 3 to 4 weeks depending on the complexity of the user flows and the number of screens required.",
  },
  
];



export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] r-to-tr   ">
      <CustomHero
        badgeText="Digital Experiences"
        headingText="Intuitive & Engaging"
        headingItalicText="UX/UI Design"
        headingEndText=""
        descriptionText="We craft product experiences that captivate users and drive business value. Our design process fuses user psychology, deep research, and stunning visual interfaces to create apps and websites your customers will love interacting with.

"
        primaryCta={{
          label: "Hire a Designer",
          link: "/",
        }}
        secondaryCta={{
          label: "Design Process",
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
              Design{" "}
              <span className="font-serif italic font-light text-blue-600">
                Capabilities
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-600 sm:text-lg">
              Transforming complex flows into simplistic and stunning user
              interfaces.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {UIUX.map((benefit) => (
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
              The Design{" "}
              <span className="font-serif italic font-light text-blue-600">
                Advantage
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-400 sm:text-lg">
              Why premium product design translates directly to revenue.
            </p>
          </div>

          {/* Grid */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {UIUXKey.map((item) => (
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
