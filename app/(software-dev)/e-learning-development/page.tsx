import React from "react";
import FAQSection from "@/components/custom/FAQSection";
import Consultation from "@/components/Consultation";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import ServicePrice from "@/components/ServicePrice";
import CustomHero from "@/components/custom/CustomHero";
import CustomCards from "@/components/custom/CustomCards";
import CustomCapsule from "@/components/custom/CustomCapsule";
import TechSection from "@/components/custom/TechSection";
import ProjectsSection from "@/components/custom/Projects";
import { BiBookContent } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import { RiVideoDownloadFill } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import { FaUserGroup } from "react-icons/fa6";
import { FaShieldHalved } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { RiMessage2Fill } from "react-icons/ri";

const ELearningDevelopment = [
  {
    id: 1,
    title: "LMS Development",
    description:
      "Custom Learning Management Systems tailored to your curriculum delivery needs.",
    icon: <BiBookContent className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 2,
    title: "Corporate Training Portals",
    description:
      "Secure, tracked, and certified online training environments for employee onboarding.",
    icon: <BsBuildingsFill className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 3,
    title: "mLearning Apps",
    description:
      "Mobile-first learning apps ensuring students have access to coursework anywhere, offline.",
    icon: <FaMobileAlt className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 4,
    title: "Virtual Classrooms",
    description:
      "Real-time, interactive video streaming platforms with built-in whiteboards and polls.",
    icon: <FaVideo className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 5,
    title: "Gamified EdTech",
    description:
      "Integrating badges, points, and leaderboards to drastically improve learner retention.",
    icon: <FaGamepad className="w-7 h-7 text-blue-600" />,
  },
  {
    id: 6,
    title: "Exam & Certification",
    description:
      "Automated grading, proctored testing modules, and PDF certificate generation.",
    icon: <FaGraduationCap className="w-7 h-7 text-blue-600" />,
  },
];

const ELearningKey = [
  {
    id: 1,
    title: "Drip Content Delivery",
    icon: <RiVideoDownloadFill className="w-7 h-7 text-white" />,
  },
  {
    id: 2,
    title: "Learner Analytics",
    icon: <VscGraph className="w-7 h-7 text-white" />,
  },
  {
    id: 3,
    title: "Multi-Tenant Tutors",
    icon: <FaUserGroup className="w-7 h-7 text-white" />,
  },
  {
    id: 4,
    title: "Course Subscriptions",
    icon: <FaShieldHalved className="w-7 h-7 text-white" />,
  },
  {
    id: 5,
    title: "SCORM / xAPI Compliant",
    icon: <TbWorld className="w-7 h-7 text-white" />,
  },
  {
    id: 6,
    title: "Community Forums",
    icon: <RiMessage2Fill className="w-7 h-7 text-white" />,
  },
];

const faqData = [
  {
    id: 1,
    question: "Can you build custom gamification to keep students engaged ? ",
    answer:
      "Yes. Gamification is essential in EdTech. We can design systems with experience points (XP), unlocking achievements, daily streaks, and competitive leaderboards.",
  },
  {
    id: 2,
    question: "Do you support SCORM compliance ? ",
    answer:
      "Yes, if you have existing courses authored in tools like Articulate or Captivate, we can implement SCORM or xAPI engines into the LMS to track that data perfectly.",
  },
  {
    id: 3,
    question: "Where do you host large video files ? ",
    answer:
      "We never host large videos directly on the web server. We typically architect the platform to utilize AWS S3 combined with CloudFront, or integrate with premium APIs like Vimeo or Mux for heavily optimized streaming.",
  },
  {
    id: 4,
    question: "Can you create an offline mobile app for students ? ",
    answer:
      "Yes. Using React Native, we can build companion applications that allow students to download course material and lectures securely to their device for offline learning.",
  },
  {
    id: 5,
    question: "Is it possible to integrate Zoom into the LMS seamlessly ?",
    answer:
      "Absolutely. We frequently use Zoom APIs (or Google Meet) to auto-generate meeting links, handle user access, and sync recorded lectures back to the dashboard.",
  },
];

export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  ">
      <CustomHero
        badgeText="EdTech Solutions"
        headingText="Transforming Education"
        headingItalicText="Through Digital Learning"
        headingEndText=""
        descriptionText="We create engaging, scalable, and immersive eLearning platforms for schools, universities, and corporate training. Our bespoke EdTech solutions empower educators and learners with interactive, accessible knowledge worldwide."
        primaryCta={{
          label: "Free Consultation",
          link: "/",
        }}
        secondaryCta={{
          label: "Our EdTech Services",
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
              Engage & Educate
            </span>
            <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-black leading-[1.15]">
              E Learning{" "}
              <span className="font-serif italic font-light text-blue-600">
                Services
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-600 sm:text-lg">
              We build comprehensive digital ecosystems for modern learning
              environments.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {ELearningDevelopment.map((benefit) => (
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
              Key Platform{" "}
              <span className="font-serif italic font-light text-blue-600">
                Elements
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xlm text-base leading-relaxed text-gray-400 sm:text-lg">
              The modern features we build into successful EdTech products.
            </p>
          </div>

          {/* Grid */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {ELearningKey.map((item) => (
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
        headingText="E Learning "
        headingItalicText="Platforms"
        headingEndText=""
        descriptionText="A selection of featured apps we have successfully published on App Stores."
        buttonText="View All Projects"
        buttonLink="/projects"
        projects={[
          {
            id: 1,
            tag: "LMS Portal",
            title: "SkillSphere HR Portal",
            img: "/img/project01.webp",
            link: "#",
          },
          {
            id: 2,
            tag: "Course Platform",
            title: "CodeAcademy Web",
            img: "/img/project02.webp",
            link: "#",
          },
          {
            id: 3,
            tag: "K-12 App",
            title: "SmartKids iOS/Android",
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
