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
      <ServicePrice />
      <Testimonials />
      <Consultation />
      <CtaBanner />
      <Faq />
    </div>
  );
}
