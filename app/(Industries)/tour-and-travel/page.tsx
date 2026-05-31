import FAQSection from "@/components/custom/FAQSection";

import Consultation from "@/components/Consultation";
import { Testimonials } from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import TechSection from "@/components/custom/TechSection";
import ProjectsSection from "@/components/custom/Projects";
import CustomCapsule from "@/components/custom/CustomCapsule";
import CustomCards from "@/components/custom/CustomCards";
import ServicePrice from "@/components/ServicePrice";
import CustomHero from "@/components/custom/CustomHero";
import {
  FaPlaneDeparture,
  FaRoute,
  FaGlobe,
  FaUserTie,
  FaMoneyCheckAlt,
  FaMobileAlt,
} from "react-icons/fa";

import { LuPlugZap } from "react-icons/lu";
import { MdOutlineAccessTime } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";
import { TbTicket } from "react-icons/tb";

const features = [
  {
    id: 1,
    title: "GDS/API Integration",
    icon: <LuPlugZap className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "Real-time Availability",
    icon: <MdOutlineAccessTime className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "AI Travel Assistant",
    icon: <RiRobot2Line className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "Geolocation Services",
    icon: <HiOutlineLocationMarker className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "Review & Rating System",
    icon: <FaRegStar className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Digital Boarding Passes",
    icon: <TbTicket className="w-7 h-7 text-white" />,
  },
];

const TourAndTravel = [
  {
    id: 1,
    title: "Booking Engine",
    description:
      "Seamless flight, hotel, and tour package booking with real-time availability and instant confirmation.",
    icon: <FaPlaneDeparture className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Itinerary Builder",
    description:
      "Drag-and-drop custom itinerary creation tools for travel agents and self-planning travelers.",
    icon: <FaRoute className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "GDS Integration",
    description:
      "Direct integration with Amadeus, Sabre, and Travelport for live pricing and inventory.",
    icon: <FaGlobe className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Travel CRM",
    description:
      "Lead management, booking history, loyalty programs, and automated communication tools.",
    icon: <FaUserTie className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Multi-currency Payments",
    description:
      "Accept payments in 150+ currencies with real-time exchange rates and fraud protection.",
    icon: <FaMoneyCheckAlt className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "Traveler Mobile App",
    description:
      "Companion apps with offline maps, e-tickets, destination guides, and real-time alerts.",
    icon: <FaMobileAlt className="w-7 h-7 text-blue-600" />,
  },
];

const faqData = [
  {
    id: 1,
    question: "Can you integrate with Amadeus or Sabre GDS ?",
    answer:
      "Yes, we have certified expertise integrating with Amadeus Web Services, Sabre APIs, and Travelport for real-time flight and hotel inventory.",
  },
  {
    id: 2,
    question: "Do you support package tour booking with itinerary management ?",
    answer:
      "Yes, we build comprehensive package tour systems with dynamic pricing, day-wise itinerary builders, and multi-passenger booking flows.",
  },
  {
    id: 3,
    question: "Can travelers access bookings and tickets offline ?",
    answer:
      "Yes, our traveler apps support offline access to e-tickets, boarding passes, and itineraries with cached destination guides.",
  },
  {
    id: 4,
  question: "How do you handle multi-currency and international payments ?",
    answer:
      "We integrate with Stripe, PayPal, and regional gateways to support 150+ currencies with live exchange rates and PCI-DSS compliance.",
  },
  {
    id: 5,
    question: "How long does it take to develop a travel booking platform ?",
    answer:
      "A full OTA platform typically takes 16-24 weeks. A focused tour operator website with booking can be done in 8-12 weeks.",
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  ">
      <CustomHero
        badgeText="Tour and Travel Excellence"
        headingText="Delivering High-Impact"
        headingItalicText="Tour and Travel Solutions"
        headingEndText=""
        descriptionText="We create next-generation travel technology solutions — from booking engines and OTA platforms to itinerary builders and travel CRMs. Our software helps tour operators, travel agencies, and hospitality businesses deliver unforgettable guest experiences.
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
              Comprehensive tour and travel software features built to solve
              real-world challenges and accelerate your growth.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {TourAndTravel.map((benefit) => (
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
                  tag: "Online Travel Agency",
                  title: "TripNest OTA",
                  img: "/img/project01.webp",
                  link: "#",
                },
                {
                  id: 2,
                  tag: "Itinerary Builder",
                  title: "WanderCraft",
                  img: "/img/project02.webp",
                  link: "#",
                },
                {
                  id: 3,
                  tag: "Hotel Managment",
                  title: "HotelSync",
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
