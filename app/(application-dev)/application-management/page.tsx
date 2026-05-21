import React from "react";
import Faq from "@/components/Faq";
import Consultation from "@/components/Consultation";
import { Testimonials } from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import CustomHero from "@/components/custom/CustomHero";
import ServicePrice from "@/components/ServicePrice";

export default function page() {
  return (
    <div className="bg-white ">
      <CustomHero
        badgeText="Application Management Excellence"
        headingText="Delivering High-Impact"
        headingItalicText="Application Management"
        headingEndText="Solutions"
        descriptionText="Maximize the value of your IT investments with comprehensive management solutions."
        primaryCta={{
          label: "Free Consultation",
          link: "/",
        }}
        secondaryCta={{
          label: "Explore Services",
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
