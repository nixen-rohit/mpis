 
import Hero from "@/components/Hero"
import CurvedLoop from '@/components/ui/CurvedLoop';

const page = () => {
  return (
    <div className="h-screen w-full ">
  
    <Hero />
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
};

export default page;
