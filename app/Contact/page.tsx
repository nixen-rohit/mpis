"use client";

import React from "react";
import Contact from "@/components/Contact";
import GoogleMapsSection from "@/components/GoogleMapsSection";
 

const page = () => {
  return (
    <div className="  bg-white">
      <Contact />
      <GoogleMapsSection />
    </div>
  );
};

export default page;
