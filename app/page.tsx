import Hero from "@/components/Hero";
import CurvedLoop from "@/components/ui/CurvedLoop";
import { Testimonials } from "@/components/Testimonials";
import Faq from "@/components/Faq"
const page = () => {
  return (
    <div className="h-screen w-full ">
      <Hero />

      <CurvedLoop
        marqueeText="Be ✦ Creative ✦ With ✦ MPIS ✦"
        speed={2}
        curveAmount={200}
        direction="right"
        interactive
        className="custom-text-style "
      />

      <Testimonials /> 
      <Faq/>
    </div>
  );
};

export default page;
