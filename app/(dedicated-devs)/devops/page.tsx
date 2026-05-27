import React from "react";
import Faq from "@/components/Faq";
import Consultation from "@/components/Consultation";
import { Testimonials } from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import ServicePrice from "@/components/ServicePrice";
import CustomHero from "@/components/custom/CustomHero";
import CustomCapsule from "@/components/custom/CustomCapsule";
import CustomCards from "@/components/custom/CustomCards";
import TechSection from "@/components/custom/TechSection";
import {
  FaCodeBranch,
  FaServer,
  FaCloudUploadAlt,
  FaDocker,
  FaChartLine,
  FaShieldVirus,
} from "react-icons/fa";

import { MdSpeed } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import { TbTransform } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { BiGitBranch } from "react-icons/bi";
import { LuTestTube } from "react-icons/lu";

const features = [
  {
    id: 1,
    title: "Faster Recovery Times",
    icon: <MdSpeed className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "High Availability (99.99%)",
    icon: <RiShieldCheckLine className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "Auto-Scalability Instances",
    icon: <TbTransform className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "Cloud Cost Optimization",
    icon: <HiOutlineCurrencyDollar className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Multiple Deployments a Day",
    icon: <BiGitBranch className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Automated Testing Environments",
    icon: <LuTestTube className="w-7 h-7 text-white" />,
  },
];

const Devops = [
  {
    id: 1,
    title: "CI/CD Pipelines",
    description:
      "Automated building, testing, and deployment to staging and production environments seamlessly.",
    icon: <FaCodeBranch className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Infrastructure as Code",
    description:
      "Provision and manage servers using Terraform or AWS CloudFormation for reproducibility.",
    icon: <FaServer className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Cloud Migration",
    description:
      "Zero-downtime transition from legacy on-premise servers to AWS, Azure, or Google Cloud.",
    icon: <FaCloudUploadAlt className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Containerization",
    description:
      "Docker wrapping and Kubernetes orchestration for reliable microservice scaling.",
    icon: <FaDocker className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Continuous Monitoring",
    description:
      "Setting up Datadog, ELK, or Prometheus to log errors and alert teams proactively before outages.",
    icon: <FaChartLine className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "DevSecOps",
    description:
      "Integrating security scanning directly into the pipeline to catch vulnerabilities at the pull request level.",
    icon: <FaShieldVirus className="w-7 h-7 text-blue-600" />,
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] r-to-tr ">
      <CustomHero
        badgeText="Cloud & Infrastructure"
        headingText="Streamline Operations"
        headingItalicText="& Delivery"
        headingEndText=""
        descriptionText=" Automate and integrate the processes between software development and IT teams. Our DevOps engineers build scalable, secure, and continuous CI/CD pipelines to get your product to market faster and more reliably.

"
        primaryCta={{
          label: "Hire a DevOps Engineer",
          link: "/",
        }}
        secondaryCta={{
          label: "View Architecture",
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
              DevOps{" "}
              <span className="font-serif italic font-light text-blue-600">
                Lifecycle
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-600 sm:text-lg">
              End-to-end automation and infrastructure configuration for modern
              applications.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Devops.map((benefit) => (
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
              The DevOps{" "}
              <span className="font-serif italic font-light text-blue-600">
                Advantage
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-400 sm:text-lg">
              Why bridging development and operations prevents critical
              failures.
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
      <Faq />
    </div>
  );
}
