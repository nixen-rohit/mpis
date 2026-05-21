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
        badgeText="Healthcare Excellence"
        headingText="Delivering High-Impact"
        headingItalicText="Healthcare Solutions"
        headingEndText=""
        descriptionText="We build HIPAA-compliant healthcare software that streamlines patient management, clinical workflows, and telehealth delivery. Our solutions empower hospitals, clinics, and health-tech startups to deliver better care with data-driven insights."
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
