import React from "react";
import Faq from "@/components/Faq";
import Consultation from "@/components/Consultation";
import { Testimonials } from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import ServicePrice from "@/components/ServicePrice";
import CustomHero from "@/components/custom/CustomHero";
import CustomCapsule from "@/components/custom/CustomCapsule";
import CustomCards from "@/components/custom/CustomCards";
import { FaCloudArrowDown ,FaRegFileCode} from "react-icons/fa6";
import { BsTools } from "react-icons/bs";
import { RiWindow2Fill } from "react-icons/ri";
import { MdOutlineWifiOff } from "react-icons/md";
import { IoTimer } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { BiSolidComponent } from "react-icons/bi";
import { BiSolidServer } from "react-icons/bi";
import { BsShieldLockFill } from "react-icons/bs";

const WebApps = [
  {
    id: 1,
    title: "Single Page Apps (SPA)",
    description:
      "React and Vue.js applications offering smooth, fluid transitions without page reloads.",
    icon: <RiWindow2Fill className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Progressive Web Apps (PWA)",
    description:
      "Apps that function offline, send push notifications, and look native on mobile devices.",
    icon: <MdOutlineWifiOff className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "Web Portals",
    description:
      "Secure, robust vendor, customer, and employee web portals with advanced permissions.",
    icon: <IoTimer className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Cloud Web Apps",
    description:
      "Cloud-native applications built to handle immense traffic spikes and scale instantly.",
    icon: <FaCloudArrowDown className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Backend Architecture",
    description:
      "Resilient RESTful and GraphQL APIs acting as the backbone for multi-platform access.",
    icon: <FaRegFileCode className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "Web App Maintenance",
    description:
      "Continuous performance monitoring, framework upgrades, and feature enhancements.",
    icon: <BsTools className="w-7 h-7 text-blue-600" />,
  },
];

const WebAppsKey = [
  {
    id: 1,
    title: "Sub-Second Load Times",
    icon: <IoTimer className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "SEO-Optimized (SSR)",
     icon: <FaSearch className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "Mobile First Design",
    icon: <FaMobileAlt className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "Component Driven UI",
    icon: <BiSolidComponent className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Headless CMS Integration",
     icon: <BiSolidServer className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "OWASP Top 10 Security",
    icon: <BsShieldLockFill className="w-7 h-7 text-white" />,
  },
]

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  ">
      <CustomHero
        badgeText="Web Engineering"
        headingText="Fast Scalable &"
        headingItalicText="Engaging Web Apps"
        headingEndText=""
        descriptionText="We build high-performance web applications that offer native-like experiences right in the browser. Using modern JavaScript frameworks and robust backend technologies, our web apps load instantly, scale flawlessly, and drive higher user engagement for startups and enterprises."
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
              Web App{" "}
              <span className="font-serif italic font-light text-blue-600">
                Services
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-600 sm:text-lg">
              Comprehensive web development services designed to elevate your
              brand's digital presence.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {WebApps.map((benefit) => (
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
                    Why our web applications stand out in performance, usability, and scale.


                  </p>
                </div>
      
                {/* Grid */}
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {WebAppsKey.map((item) => (
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
