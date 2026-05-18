"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
interface ServiceItem {
   
  id: string;
  title: string;
  subTitle: string;
  description: string;
  tags: string[];
  image: string;
}

const services: ServiceItem[] = [
  {
    id: "01.",
    title: "Custom Software Development",
    subTitle: "Bespoke Solutions Built for You",
    description:
      "We architect scalable, secure, and highly customized software solutions crafted specifically to tackle your unique business challenges and drive operational efficiency.",
    tags: ["Click here"],
    image: "/img/customsoftware.jpg",
  },
  {
    
    id: "02.",
    title: "Web Application Development",
    subTitle: "Dynamic & Scalable Web Apps",
    description:
      "Deliver exceptional digital experiences with responsive, fast, and robust web applications designed to engage users and convert visitors into loyal customers.",
    tags: ["Click here"],
    image: "/img/webdevelopment.jpg",
  },
  {
     id: "03.",
    title: "App Development",
    subTitle: "Next-Gen Mobile Experiences",
    description:
      "From iOS to Android, we engineer intuitive mobile applications that captivate audiences, foster brand loyalty, and leverage cutting-edge device capabilities.",
    tags: ["Click here"],
    image: "/img/appdevelopment.jpg",
  },
  {
     id: "04.",
    title: "Healthcare Software Development",
    subTitle: "Innovating Patient Care",
    description:
      "Empower medical professionals with secure, compliant, and transformative healthcare applications ranging from telehealth platforms to robust hospital management systems.",
    tags: ["Click here"],
    image: "/img/healthcare.jpg",
  },
  {
     id: "05.",
    title: "E-Learning Development",
    subTitle: "Revolutionizing Education",
    description:
      "Deploy scalable Learning Management Systems (LMS) and interactive educational platforms that make remote learning engaging, trackable, and accessible anywhere..",
    tags: ["Click here"],
    image: "/img/elearning.jpg",
  },
   {
    id: "06.",
    title: ".NET Application Development",
    subTitle: "Enterprise-Grade .NET Solutions",
    description:"Leverage the full power of Microsoft's ecosystem to build high-performance, resilient, and enterprise-ready applications using the latest .NET Core technologies.",    tags: ["Click here"],
    image: "/img/dotnet.jpg",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>(services[0].id);

  return (
    <section className="bg-[#F9F9F9] min-h-screen py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}

         <div className="flex flex-col justify-center items-center col-span-full mb-12 md:mb-16 max-w-7xl">
          {/* Section label */}
          <span className="inline-block  mb-4 text-sm sm:text-base font-medium tracking-[0.2em] uppercase text-gray-400 ">
           Your Business Our Expertise
          </span>

          {/* Main heading */}
          <h2 className="text-4xl sm:text-6xl text-center md:text-7xl lg:text-8xl font-normal tracking-tight text-[#111111] leading-[1.02] max-w-6xl">
           Service For Your{" "}
            <span className="font-serif italic font-light text-[#1c1c1c]">
              Development
            </span>{" "}
            Solutions
          </h2>

          {/* Supporting description */}
          <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 font-light">
            We believe that every business is unique. Our approach to your
            growth is never one-size-fits-all, providing tailored development
            solutions to meet your exact needs.
          </p>
        </div>


        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Accordion */}
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="border-t border-gray-200 py-6 first:border-t-0"
              >
                <button
                  onClick={() => setActiveTab(service.id)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-sm font-medium text-gray-500">
                      {service.id}
                    </span>
                    <h2
                      className={`text-4xl md:text-5xl font-bold transition-colors ${
                        activeTab === service.id
                          ? "text-black"
                          : "text-gray-400 group-hover:text-black"
                      }`}
                    >
                      {service.title}
                    </h2>
                  </div>
                  <div className="text-black">
                    {activeTab === service.id ? (
                      <Minus size={24} />
                    ) : (
                      <Plus size={24} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {activeTab === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pl-16 pt-6 space-y-6">
                        <h4 className="text-xl text-blue-400 font-bold">
                          {" "}
                          {service.subTitle}{" "}
                        </h4>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap gap-3">
                          {service.tags.map((tag) => (
                            <Button key={tag} title={tag} href={tag} />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side: Image Preview */}
          <div className="sticky top-20 hidden lg:block">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square w-full rounded-3xl overflow-hidden bg-gray-100"
            >
              <Image
                src={
                  services.find((s) => s.id === activeTab)?.image ||
                  "/img/test.jpg"
                }
                alt="Service Preview"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 rounded-full bg-black/20 backdrop-blur-md border border-white/30 flex items-center justify-center cursor-pointer group"
                >
                  <ArrowUpRight className="text-white w-8 h-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
