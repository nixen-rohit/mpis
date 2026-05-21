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
        badgeText="Enterprise Excellence"
        headingText="Powerful Solutions"
        headingItalicText="Built on . NET Core"
        headingEndText=""
        descriptionText="We specialize in developing robust, scalable, and highly secure enterprise applications using Microsoft's .NET ecosystem. From complex web portals to heavy desktop integrations, our C# engineering team builds solutions that perform beautifully under immense loads."
        primaryCta={{
          label: "Free Consultation",
          link: "/",
        }}
        secondaryCta={{
          label: "Our .NET Services",
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
