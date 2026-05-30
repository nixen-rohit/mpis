import React from "react";
import FAQSection from "@/components/custom/FAQSection";
import Consultation from "@/components/Consultation";
import { Testimonials } from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import ServicePrice from "@/components/ServicePrice";
import CustomHero from "@/components/custom/CustomHero";
import CustomCards from "@/components/custom/CustomCards";
import CustomCapsule from "@/components/custom/CustomCapsule";
import {
  FaRobot,
  FaEye,
  FaChartBar,
  FaLanguage,
  FaCogs,
  FaShieldAlt,
} from "react-icons/fa";
import { TbRocket } from "react-icons/tb";
import { RiUserHeartLine } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlineChartBar } from "react-icons/hi";
import { GiLightningBow } from "react-icons/gi";

const Ai = [
  {
    id: 1,
    title: "Generative AI & LLMs",
    description:
      "Integrate OpenAI, Claude, or custom Llama 3 models into personalized enterprise chatbots.",
    icon: <FaRobot className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Computer Vision",
    description:
      "Image recognition, facial mapping, and automated defect detection models via neural networks.",
    icon: <FaEye className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Predictive Analytics",
    description:
      "Anticipate customer behavior, forecast sales targets, and optimize logistics with data modeling.",
    icon: <FaChartBar className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "NLP & Text Mining",
    description:
      "Extract meaning from unstructured data, sentiment analysis, and automated document summarization.",
    icon: <FaLanguage className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Intelligent RPA",
    description:
      "Robotic Process Automation combined with AI to self-correct and autonomously handle repetitive tasks.",
    icon: <FaCogs className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "Fraud Detection",
    description:
      "Real-time anomaly detection algorithms crucial for Fintech security and identity verification.",
    icon: <FaShieldAlt className="w-7 h-7 text-blue-600" />,
  },
];

const AIKey = [
  {
    id: 1,
    title: "Hyper Efficiency",
    icon: <TbRocket className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "Hyper-Personalization",
    icon: <RiUserHeartLine className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "Error Reduction",
    icon: <MdOutlineVerified className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "24/7 Operations",
    icon: <BiTimeFive className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Deep Data Insights",
    icon: <HiOutlineChartBar className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Competitive Edge",
    icon: <GiLightningBow className="w-7 h-7 text-white" />,
  },
];

const faqData = [
  {
    id: 1,
    question: "Do I need my own data to build an AI model ?",
    answer:
      "For highly specialized predictive or computer vision models, proprietary historical data is essential. However, for many Generative AI apps (like intelligent search bots), we can utilize existing LLMs without needing massive amounts of your own training data.",
  },
  {
    id: 2,
    question: "How secure is the data passed to the AI ?",
    answer:
      "We prioritize data security. When integrating APIs like OpenAI, we utilize their Enterprise tiers ensuring zero data retention. For strict compliance, we deploy open-source models completely on-premise or within your AWS VPC.",
  },
  {
    id: 3,
    question: "What is RAG ?",
    answer:
      "Retrieval-Augmented Generation (RAG) merges the conversational ability of LLMs with your private database. When a user asks a question, the AI retrieves relevant documents from your proprietary knowledge base and uses them to formulate a factually accurate answer.",
  },
  {
    id: 4,
    question: "Can you maintain the AI model after deployment ?",
    answer:
      "Yes. AI models experience \"data drift\" as real-world trends change over time. We offer MLOps support to continually feed new data, retrain, and optimize the models to ensure they remain highly accurate.",
  },
   
];


export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] r-to-tr ">
      <CustomHero
        badgeText="Cognitive Solutions"
        headingText="Enterprise-Grade"
        headingItalicText="Artificial Intelligence "
        headingEndText=""
        descriptionText="We harness the power of Machine Learning, Deep Neural Networks, and Natural Language Processing to automate tasks, generate profound analytical insights, and craft intelligent software solutions."
        primaryCta={{
          label: "Consult AI Expert",
          link: "/",
        }}
        secondaryCta={{
          label: "Explore Capabilities",
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
              AI & ML Capabilities
            </span>
            <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-black leading-[1.15]">
              Machine{" "}
              <span className="font-serif italic font-light text-blue-600">
                Intelligence Solutions
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-600 sm:text-lg">
              Innovative cognitive technologies to modernize business processes.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Ai.map((benefit) => (
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
              Why Adopt AI?
            </span>

            <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-white leading-[1.15]">
              The AI{" "}
              <span className="font-serif italic font-light text-blue-600">
                Advantage
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-400 sm:text-lg">
              Empowering organizations with smarter, faster, and more efficient
              decisions.
            </p>
          </div>

          {/* Grid */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {AIKey.map((item) => (
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
