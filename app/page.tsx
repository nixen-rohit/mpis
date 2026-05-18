"use client";

import CurvedLoop from "@/components/ui/CurvedLoop";
import { Testimonials } from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Services from "@/components/Services";
import Hero from "@/components/Hero";

export default function Main() {
  return (
    <div className="min-h-screen w-full ">
      <Hero />

      {/* <CurvedLoop
        marqueeText="Be ✦ Creative ✦ With ✦ MPIS ✦"
        speed={2}
        curveAmount={200}
        direction="right"
        interactive
        className="custom-text-style "
      /> */}
      <Services />

      <Testimonials />
      <Faq />
    </div>
  );
}
