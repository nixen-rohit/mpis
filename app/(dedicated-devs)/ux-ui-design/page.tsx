import React from "react";
import Faq from "@/components/Faq";
import Consultation from "@/components/Consultation";
import { Testimonials } from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";

import ServicePrice from "@/components/ServicePrice";
import CustomHero from "@/components/custom/CustomHero";
export default function page() {
  return (
    <div className="bg-white ">
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
      <ServicePrice />
      <Testimonials />

      <Consultation />
      <CtaBanner />
      <Faq />
    </div>
  );
}
