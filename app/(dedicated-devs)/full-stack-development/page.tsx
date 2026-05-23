import React from "react";
import Faq from "@/components/Faq";
import Consultation from "@/components/Consultation";
import { Testimonials } from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";

import ServicePrice from "@/components/ServicePrice";
import CustomHero from "@/components/custom/CustomHero";
export default function page() {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] r-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  ">
      <CustomHero
        badgeText="Comprehensive Coverage"
        headingText="End-to-End "
        headingItalicText=" Full Stack Engineering"
        headingEndText=""
        descriptionText="From rich frontend user experiences to robust backend architectures and secure databases, our full-stack engineering teams deliver complete, scalable software solutions. We bridge the gap between design and data, handling every technical layer in-house."
        primaryCta={{
          label: "Hire a Stack Developer",
          link: "/",
        }}
        secondaryCta={{
          label: "Full Stack Services",
          link: "/",
        }}
      />
      <ServicePrice />
      <Testimonials />

      <Consultation />
      <CtaBanner />
      <Faq />
    </div>
  );
}
