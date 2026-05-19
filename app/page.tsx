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



export default function Main() {
  return (
    <div className="min-h-screen w-full bg-white ">

     

      <Strategic/>


      <Achievement />

      <Hero />
      <FeaturesGrid />
      <WhyChoose />
      <CtaBanner />

      <PricingSection />

      <Services />
      <VideoShowcase />
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
