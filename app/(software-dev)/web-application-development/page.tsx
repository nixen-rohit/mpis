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
        badgeText="Web Engineering"
        headingText="Fast Scalable &"
        headingItalicText="Engaging Web Apps"
        headingEndText=""
        descriptionText="We build high-performance web applications that offer native-like experiences right in the browser. Using modern JavaScript frameworks and robust backend technologies, our web apps load instantly, scale flawlessly, and drive higher user engagement for startups and enterprises."
        primaryCta={{
          label: "Free Consultation",
          link: "/",
        }}
        secondaryCta={{
          label: "Our Web Solutions",
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
