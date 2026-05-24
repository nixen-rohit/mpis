"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";
import GoogleMapsSection from "@/components/GoogleMapsSection";

const page = () => {
  return (
    <div className=" bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] ">
      <ContactForm />
      <GoogleMapsSection />
    </div>
  );
};

export default page;
