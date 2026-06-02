"use client";
import CtaBanner from "@/components/CtaBanner";
import FeaturesGrid from "@/components/FeaturesGrid";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Consultation from "@/components/Consultation";
import InfiniteLogo from "@/components/InfiniteLogo";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Achievement from "@/components/Achievemen";
import Insight from "@/components/Insight";
import Industry from "@/components/Industry";
import TechSection from "@/components/custom/TechSection";
import Detail from "@/components/Detail";
import Goals from "@/components/Goals";

export default function Main() {
  return (
    <div className="min-h-screen w-full bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  ">
      <Hero />
      <InfiniteLogo />
      <Detail />
      <Goals />
      <FeaturesGrid />
      <Industry />
      <Achievement />
      <WhyChoose />
      <CtaBanner />
      <TechSection />
      <Services />
      <Insight />
      <Testimonials />
      <Faq />
      <Consultation />
    </div>
  );
}
