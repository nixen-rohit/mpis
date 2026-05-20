"use client";
import CtaBanner from "@/components/CtaBanner";
import FeaturesGrid from "@/components/FeaturesGrid";
import CurvedLoop from "@/components/ui/CurvedLoop";
import { Testimonials } from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import VideoShowcase from "@/components/VideoShowcase";
import PricingSection from "@/components/PricingSection";
import WhyChoose from "@/components/WhyChoose";
import Achievement from "@/components/Achievemen";
import Strategic from "@/components/Strategic";
import Insight from "@/components/Insight";
import Industry from "@/components/Industry";
import Contact from "@/components/Contact";

export default function Main() {
  return (
    <div className="min-h-screen w-full bg-white ">
      <Hero />

      {/* bio section */}

      <FeaturesGrid />
      <Industry />
      <Achievement />
      <WhyChoose />
      <CtaBanner />

      <PricingSection />
      <Insight />
      <Contact />
      <Strategic />
      <Services />
      <VideoShowcase />

      {/* technology section */}


      <Testimonials />
      <Faq />

      {/* <CurvedLoop
        marqueeText="Be ✦ Creative ✦ With ✦ MPIS ✦"
        speed={2}
        curveAmount={200}
        direction="right"
        interactive
        className="custom-text-style "
      /> */}
    </div>
  );
}
