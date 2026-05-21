import React from "react";
import Faq from "@/components/Faq";
import Consultation from "@/components/Consultation";
import { Testimonials } from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";

import ServicePrice from "@/components/ServicePrice";
import CustomHero from "@/components/CustomHero";
export default function page() {
  return (
    <div className="bg-white ">
      <CustomHero
        badgeText="Tailored Solutions"
        headingText="Bespoke Software"
        headingItalicText="Built for Your "
        headingEndText="Business"
        descriptionText="We design and develop custom software solutions that perfectly align with your unique business processes. Our bespoke applications are scalable, secure, and engineered to solve complex operational challenges, driving efficiency and growth."
        primaryCta={{
          label: "Free Consultation",
          link:"/",
        }}
        secondaryCta={{
          label:"Explore Services",
          link:"/",
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
