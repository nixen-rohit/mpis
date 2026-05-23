import React from "react";
import CustomBanner from "@/components/custom/CustomBanner";
import TeamShowcase from "@/components/TeamShowcase";
const page = () => {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] ">
      <CustomBanner
        badge="Our Leadership"
        title="Meet the "
        highlight="Execs Driving  "
        subtitle="Our Vision Forward"
        description="With decades of combined experience in technology, consulting, and business scaling, our executive leadership team is dedicated to your success."
      />
      <TeamShowcase />
    </div>
  );
};

export default page;
