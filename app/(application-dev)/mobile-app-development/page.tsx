import React from "react";
import Faq from "@/components/Faq";
import Consultation from "@/components/Consultation";
import { Testimonials } from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import CustomHero from "@/components/custom/CustomHero";
import ServicePrice from "@/components/ServicePrice";
import TechSection from "@/components/custom/TechSection";
import ProjectsSection from "@/components/custom/Projects";
import CustomCapsule from "@/components/custom/CustomCapsule";
import CustomCards from "@/components/custom/CustomCards";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaFlutter } from "react-icons/fa6";
import { RiBrushAiFill } from "react-icons/ri";
import { CgDatabase } from "react-icons/cg";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaForward } from "react-icons/fa";
import { MdOutlineWifiOff } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFingerprint } from "react-icons/fa";
import { IoBatteryCharging } from "react-icons/io5";

const MobileApp = [
  {
    id: 1,
    title: "iOS Development",
    description:
      "Native iOS apps built with Swift and Objective-C for Apple devices.",
    icon: <FaApple className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Android Development",
    description: "Native Android applications developed using Kotlin and Java.",
    icon: <IoLogoAndroid className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Cross-Platform",
    description:
      "Cost-effective apps using Flutter and React Native for both platforms.",
    icon: <FaFlutter className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Stunning, gesture-driven mobile UI tailored for mobile ergonomics.",
    icon: <RiBrushAiFill className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Backend Engineering",
    description:
      "Robust backend APIs and databases to power the mobile experience.",
    icon: <CgDatabase className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "App Store Launch",
    description:
      "Complete assistance with App Store and Google Play publication.",
    icon: <IoLogoGooglePlaystore className="w-7 h-7 text-blue-600" />,
  },
];

const MobileAppKey = [
  {
    id: 1,
    title: "High Frame Rates",
    icon: <FaForward className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "Offline Capabilities",
    icon: <MdOutlineWifiOff className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "Push Notifications",
    icon: <MdNotificationsActive className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "Location Services",
    icon: <FaLocationDot className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Biometric Auth",
    icon: <FaFingerprint className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Battery Optimization",
    icon: <IoBatteryCharging className="w-7 h-7 text-white" />,
  },
];
export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  ">
      <CustomHero
        badgeText="Mobile App Excellence"
        headingText="Delivering High-Impact"
        headingItalicText="Mobile App"
        headingEndText="Solutions"
        descriptionText="Engage your audience on the go with high-performance mobile applications."
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
              Comprehensive features built to solve real-world challenges and
              accelerate your growth.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {MobileApp.map((benefit) => (
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
              The essential building blocks that make our solutions robust,
              scalable, and future-ready.
            </p>
          </div>

          {/* Grid */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {MobileAppKey.map((item) => (
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
            tag: "Fintech App",
            title: "Mobile Wallet App",
            img: "/img/project01.webp",
            link: "#",
          },
          {
            id: 2,
            tag: "Health & Fitness ",
            title: "Workout Tracker iOS",
            img: "/img/project02.webp",
            link: "#",
          },
          {
            id: 3,
            tag: "Daily Service",
            title: "Food Delivery App",
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
