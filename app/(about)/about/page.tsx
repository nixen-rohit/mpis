"use client";
import React from "react";
import CustomBanner from "@/components/custom/CustomBanner";
import CustomHero from "@/components/custom/CustomHero";
import TimelineSection from "@/components/TimelineSection";
import CtaBanner from "@/components/CtaBanner";
import { BriefcaseBusiness, Globe, Lightbulb, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import Achievement from "@/components/Achievemen";
import IndustryMarquee from "@/components/Industry";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Testimonials } from "@/components/Testimonials";

export interface team {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  link?: string;
  redirectTo?: string;
}
const teamMembers: team[] = [
  {
    id: 1,
    name: "Leslie Alexander",
    role: "Sr. Analyst Finance",
    description: "",
    image: "/img/team/team1.webp",
    link: "",
  },
  {
    id: 2,
    name: "Cameron Williamson",
    role: "HR Adviser",
    description: "",
    image: "/img/team/team2.webp",
    link: "",
  },
  {
    id: 3,
    name: "Darrell Steward",
    role: "Product Manager",
    description: "",
    image: "/img/team/team3.webp",
    link: "",
  },
];

const cards = [
  {
    title: "Customized Strategy Solutions",
    icon: Lightbulb,
  },
  {
    title: "Industry-Specific Insights",
    icon: BriefcaseBusiness,
  },
  {
    title: "Startup & Enterprise Support",
    icon: Building2,
  },
  {
    title: "Global Expansion Planning",
    icon: Globe,
  },
];

const page = () => {
  return (
    <div className="w-full bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] ">
      <CustomBanner
        badge="Best Business Strategy"
        title="Build for "
        highlight="business growth"
        subtitle=""
        description="Position your agency as the bridge between a client’s big-picture vision and achievable action plans. data-driven strategies and your track."
      />

      <section className="w-full bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]   px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -2,
                }}
                className="group"
              >
                <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300">
                  {/* Icon */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 group-hover:bg-black transition-colors duration-300">
                    <Icon className="h-4 w-4 text-black group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Text */}
                  <h3 className="text-sm font-medium text-gray-800 whitespace-nowrap">
                    {card.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CtaBanner />
      <TimelineSection />
      <div className="py-10">
        <CustomHero
          badgeText="Why choose us bustar"
          headingText="Scaling new heights"
          headingItalicText="with strategic excellence"
          headingEndText=""
          descriptionText="We provide the best services, ensuring your outstanding growth, lorem ipsum dolor sit amet. Nulla ultrices vitae neque non sodales.
 "
          primaryCta={{
            label: "Get Started Now",
            link: "/",
          }}
          secondaryCta={{
            label: "Explore Services",
            link: "/",
          }}
        />
      </div>

      <Achievement />
      <section className="h-full w-full bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  px-4 py-14">
        <div className={`max-w-4xl pb-14 text-center mx-auto`}>
          {/* Badge */}
          <p className="text-blue-600 font-medium mb-4 tracking-wide">
            The expert teams member
          </p>

          {/* Title */}

          <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-blue-950 leading-[1.1]">
            Meet with{" "}
            <span className="font-serif italic font-light text-blue-600">
              consultant expert
            </span>
            <br />
          </h1>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -30,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-blue-600/40 p-3 backdrop-blur-xl"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="h-[310px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

                {/* Top Right Arrow Icon */}
                <div className="absolute right-4 bottom-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <a
                    href={member.link}
                    target={member.redirectTo ? "_blank" : "_top"}
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg transition-all duration-300 hover:scale-110 "
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>

                {/* Floating Role */}
                <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/50 px-3 py-1 backdrop-blur-md">
                  <p className="text-[11px] font-medium text-white">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 pt-4 text-center">
                <h2 className="text-lg font-semibold text-black">
                  {member.name}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-black/50">
                  {member.description}
                </p>
              </div>

              {/* Floating Blur */}
              <motion.div
                animate={{
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] /10 blur-3xl"
              />
            </motion.div>
          ))}
        </div>
      </section>
      <Testimonials />
      <IndustryMarquee />
    </div>
  );
};

export default page;
