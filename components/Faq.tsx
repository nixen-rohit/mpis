"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What services do you provide ?",
    answer:
      "We help businesses grow. We do this by building websites and custom software. We also manage cloud infrastructure. We run marketing campaigns based on data. This way, you can focus on your brand.",
  },
  {
    id: 2,
    question: "Do you support after project delivery ?",
    answer:
      "Yes, we do. We stay to handle updates. We fix bugs. We ensure everything is fast and secure. You do not have to worry",
  },
  {
    id: 3,
    question: "Can you manage marketing and development together?",
    answer:
      "Yes, we can. That is what we do best. We align your website with your marketing. Your tech is built to convert visitors. This creates a path to success.",
  },
  {
    id: 4,
    question: "Do you build custom system ?",
    answer:
      "Yes, we do not use templates. Every system is built from scratch. It is designed to match your workflows. This ensures it solves your business challenges.",
  },
  {
    id: 5,
    question: "Is data security ensured ?",
    answer:
      "Security is important to us. We use encryption. We use safety protocols. Your information is protected. Your customer's privacy is safe.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16  flex justify-center items-center flex-col">
          <p className="text-sm md:text-base uppercase tracking-[0.25em] text-gray-500 font-medium mb-4">
            Have Questions ?
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-black  flex justify-center items-center flex-col gap-2">
            Frequently Asked
            <span className="  text-gray-400">Questions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-5xl mx-auto text-center mt-4">
            Everything you need to know about us and our services. Can’t find an
            answer? Feel free to contact us.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4 max-w-7xl mx-auto">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
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
                className="rounded-[40px] overflow-hidden transition-colors duration-300"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-4xl font-bold transition-colors duration-300 ${isOpen ? "text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]" : "text-[#D9D1DF]"}`}
                    >
                      {faq.id < 10 ? `0${faq.id}` : faq.id}
                    </span>
                    <span className="text-[#3D2C54] font-bold text-lg md:text-xl leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-white" : "bg-[#D9D1DF]"}`}
                  >
                    {isOpen ? (
                      <Minus size={18} className="text-[#D9D1DF]" />
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
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 md:px-24">
                        <div className="h-px bg-gray-500 mb-6 w-full" />
                        <p className="text-[#3D2C54]/80 leading-relaxed text-base md:text-md">
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

        <div className="mt-8 flex flex-col justify-center items-center text-center">
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

            {/* Center Button */}

             <MagneticButton>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#8B5CF6] w-60 hover:bg-[#7C3AED] text-white px-4 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-colors shadow-lg shadow-purple-500/20"
              >
                <Mail size={20} />
                Send email
              </motion.button>
            </div>
            </MagneticButton>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
