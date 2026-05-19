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

export default function Main() {
  return (
    <div className="min-h-screen w-full bg-white ">

      <Hero />
      
      <WhyChoose/>
       <CtaBanner />

       
      
     
      <FeaturesGrid/>
      <VideoShowcase/>
      <PricingSection/>

      {/* <CurvedLoop
        marqueeText="Be ✦ Creative ✦ With ✦ MPIS ✦"
        speed={2}
        curveAmount={200}
        direction="right"
        interactive
        className="custom-text-style "
      /> */}
      {/* <Services />

      <Testimonials />
      <Faq /> */}
    </div>
  );
}
