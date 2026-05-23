import React from "react";
import CustomBanner from "@/components/custom/CustomBanner";
import AwardsCards from "@/components/AwardsCards";
const page = () => {
  return (
    <div className="bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] ">
      <CustomBanner
        badge="Excellence Recognized"
        title="Awards"
        highlight=" & Certifications"
        subtitle=""
        description="We don't just build software — we set industry benchmarks. Explore the accolades we've earned through our commitment to quality, security, and client satisfaction."
      />
      <AwardsCards />
    </div>
  );
};

export default page;
