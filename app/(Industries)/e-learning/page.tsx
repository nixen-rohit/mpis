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
        badgeText="eLearning Excellence"
        headingText="Delivering High-Impact"
        headingItalicText="E-Learning Solutions"
        headingEndText=""
        descriptionText="We design and develop scalable eLearning platforms, LMS solutions, and educational apps that engage learners and empower educators. From K-12 to corporate training, our tech-driven education tools deliver measurable outcomes.

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
      <ServicePrice />
      <Testimonials />
      <Consultation />
      <CtaBanner />
      <Faq />
    </div>
  );
}
