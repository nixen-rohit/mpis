"use client";
import CtaBanner from "@/components/CtaBanner";
import FeaturesGrid from "@/components/FeaturesGrid";

import { Testimonials } from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Consultation from "@/components/Consultation";
import HomePricing from "@/components/HomePricing";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import VideoShowcase from "@/components/VideoShowcase";
import WhyChoose from "@/components/WhyChoose";
import Achievement from "@/components/Achievemen";
import Strategic from "@/components/Strategic";
import Insight from "@/components/Insight";
import Industry from "@/components/Industry";
import ContactForm from "@/components/ContactForm";
import TechSection from "@/components/custom/TechSection";
import Detail from "@/components/Detail";
import Goals from "@/components/Goals";
import WhatsAppFloatingButton from "@/components/custom/WhatsAppFloatingButton";
export default function Main() {
  return (
    <div className="min-h-screen w-full bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  ">
      <Hero />
      <Detail />
      <Goals />
      <FeaturesGrid />
      <Industry />
      <Achievement />
      <WhyChoose />
      <CtaBanner />
      <HomePricing />
      <Insight />
      <ContactForm />
      <Strategic />
      <Services />
      <VideoShowcase />
      <TechSection />
      <Testimonials />
      <Consultation />
      <Faq />
      <WhatsAppFloatingButton
        //without +91
        phoneNumber="8076136446"
        message="Hi, I visited your website!"
      />
    </div>
  );
}
