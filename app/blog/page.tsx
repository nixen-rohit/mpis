import BlogLayout from "@/components/Blog/BlogLayout";
import CustomBanner from "@/components/custom/CustomBanner";
import React from "react";

const page = () => {
  return (
    <div className=" bg-white">
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
