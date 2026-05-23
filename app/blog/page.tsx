import BlogLayout from "@/components/Blog/BlogLayout";
import CustomBanner from "@/components/custom/CustomBanner";
import React from "react";

const page = () => {
  return (
    <div className=" bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] ">
      <CustomBanner
        badge="Our Latest Blog"
        title="Latest"
        highlight="Blogs from "
        subtitle="MPIS"
        description="Position your agency bridge between a client’s big picture"
      />
      <BlogLayout />
    </div>
  );
};

export default page;
