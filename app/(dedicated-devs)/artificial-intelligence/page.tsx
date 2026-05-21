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
        badgeText="Cognitive Solutions"
        headingText="Enterprise-Grade"
        headingItalicText="Artificial Intelligence "
        headingEndText=""
        descriptionText="We harness the power of Machine Learning, Deep Neural Networks, and Natural Language Processing to automate tasks, generate profound analytical insights, and craft intelligent software solutions."
        primaryCta={{
          label: "Consult AI Expert",
          link: "/",
        }}
        secondaryCta={{
          label: "Explore Capabilities",
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
