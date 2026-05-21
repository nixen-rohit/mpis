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
        badgeText="Quality Assurance"
        headingText="Software Testing"
        headingItalicText="&
Quality Control"
        headingEndText=""
        descriptionText=" Ensure your applications run flawlessly across all devices and scenarios. Our QA engineers deploy rigorous manual testing protocols alongside intelligent automation scripts to identify and eradicate bugs before your users ever see them.


"
        primaryCta={{
          label: "Hire a QA Tester",
          link: "/",
        }}
        secondaryCta={{
          label: "Our Testing Process",
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
