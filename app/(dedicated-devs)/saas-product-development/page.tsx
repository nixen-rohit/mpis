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
        badgeText="Scalable Architecture"
        headingText="Next-Gen SaaS"
        headingItalicText="Product Engineering"
        headingEndText=""
        descriptionText=" We build robust, multi-tenant Software as a Service (SaaS) products engineered for rapid user scaling, high availability, and recurring revenue generation. From conceptual MVP to massive enterprise deployment.

"
        primaryCta={{
          label: "Hire a SaaS Developer",
          link: "/",
        }}
        secondaryCta={{
          label: "View Solutions",
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
