"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  tag: string;
  firstHeading: string;
  secondHeading: string;
  description: string;
  faqs: FAQItem[];
  headingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}


export default function FAQSection({
  tag,
  firstHeading,
  secondHeading,
  description,
  faqs,
  headingTag = "h2",
}: FAQSectionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

   const HeadingTag = headingTag ;

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 px-4 font-sans">
      <div className="flex flex-col justify-center items-center text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <span className="inline-block mb-3 sm:mb-4 text-xs sm:text-sm md:text-base font-medium tracking-[0.18em] sm:tracking-[0.2em] uppercase text-gray-400">
          {tag}
        </span>

        {/* Main heading */}
        <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#111111] leading-[1.08] sm:leading-[1.04] md:leading-[1.02] max-w-6xl">
          {firstHeading}{" "}
          <span className="font-serif italic font-light text-blue-500 block sm:inline">
           {secondHeading}
          </span>
        </h2>

        {/* Supporting description */}
        <p className="mt-6 max-w-3xl mx-auto text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed   text-gray-800 font-base">
           {description}
        </p>
      </div>

      {/* Accordion Items */}
      <div className="space-y-4 max-w-5xl mx-auto">
        {faqs.map((faq, index) => {
          const id = index + 1;
          const isOpen = openId === id;

          return (
            <motion.div
              key={id}
              layout
              initial={false}
              animate={{
                backgroundColor: isOpen
                  ? "rgba(30, 58, 138, 0.2)"
                  : "rgba(15, 23, 42, 0.1)",
                borderColor: isOpen
                  ? "rgba(96, 165, 250, 0.5)"
                  : "rgba(30, 41, 59, 1)",
              }}
              className="rounded-[40px] overflow-hidden"
            >
              <button
                onClick={() => toggle(id)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <div className="flex items-center gap-6">
                  <span
                    className={`text-4xl font-bold ${
                      isOpen
                        ? "text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]"
                        : "text-blue-200"
                    }`}
                  >
                    {id < 10 ? `0${id}` : id}
                  </span>

                  <span className="text-[#3D2C54] font-bold text-lg md:text-xl">
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    isOpen ? "bg-white" : "bg-blue-400"
                  }`}
                >
                  {isOpen ? (
                    <Minus size={18} className="text-blue-300" />
                  ) : (
                    <Plus size={18} className="text-white" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 md:px-24">
                      <div className="h-px bg-gray-500 mb-6 w-full" />
                      <p className="text-[#3D2C54]/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* <div className="mt-8 flex flex-col justify-center items-center text-center ">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[#F6F1F7] p-8 md:p-10 rounded-[40px] shadow-xl"
        >
          <h3 className="text-3xl font-bold text-[#3D2C54] mb-4">
            Still have questions?
          </h3>

          <p className="text-[#7A6A8C] text-lg leading-relaxed mb-8">
            Can't find the answer to your question? Send us an email and we'll
            get back to you as soon as possible!
          </p>

        
          <MagneticButton>
            <div className="flex justify-center  ">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className=" flex w-60 items-center justify-center gap-3 rounded-2xl bg-blue-600 px-4 py-4 text-lg font-semibold text-white shadow-sm shadow-blue-200 transition-all duration-300 hover:bg-blue-700 active:bg-blue-800"
              >
                <Mail size={20} />
                Send email
              </motion.button>
            </div>
          </MagneticButton>
        </motion.div>
      </div> */}
    </section>
  );
}
