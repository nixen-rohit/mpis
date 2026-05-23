"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);
  };

  // Framer Motion Variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contactItems = [
    {
      icon: <Phone size={18} />,
      label: "Phone",
      value: "+91 7318080200",
    },
    {
      icon: <MapPin size={18} />,
      label: "Address",
      value: "G Block, Sector 63, Noida, Chotpur, U.P",
    },
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "hello@mpis.com",
    },
    {
      icon: <Clock size={18} />,
      label: "Working Hours",
      value: "Mon–Sat, 9:00 AM – 7:00 PM IST",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#E5E7EB] px-4 py-10 sm:px-6 md:px-8 lg:px-12 lg:py-16">
      <motion.div
        className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 overflow-hidden rounded-[28px] border border-white/5 bg-[#121212] p-5 shadow-2xl sm:p-7 md:rounded-[36px] md:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-between gap-10 lg:pr-6">
          {/* TOP CONTENT */}
          <div className="space-y-5">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 backdrop-blur-md"
            >
              <div className="rounded-full bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  p-1 text-black">
                <Mail size={14} className="text-neutral-900" />
              </div>

              <span className="text-xs font-semibold tracking-wide text-blue-400 sm:text-sm">
                Contact with Us Now
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Let’s{" "}
              <span className="font-serif italic font-light text-zinc-300">
                Collaborate
              </span>
              <span className="block">With Us!</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base md:text-lg"
            >
              Read and update the latest news from us. Donec eu magna quis felis
              facilisis fermentum.
            </motion.p>
          </div>

          {/* CONTACT DETAILS */}
          <motion.div
            variants={itemVariants}
            className="grid gap-5 border-t border-white/10 pt-6"
          >
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 4 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                className="flex items-start gap-4"
              >
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 8,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 12,
                  }}
                  className=" flex shrink-0 items-center justify-center rounded-full bg-blue-600 p-3 text-white transition-all duration-300  hover:bg-blue-700 active:bg-blue-800"
                >
                  {item.icon}
                </motion.div>

                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-neutral-500">
                    {item.label}
                  </p>

                  <span className="wrap-break-word text-sm font-medium leading-relaxed text-neutral-200 sm:text-base">
                    {item.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
              scale: 0.96,
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          whileHover={{
            y: -4,
          }}
          className="w-full rounded-[26px] border border-white/10 bg-[#0F172A] p-5 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:p-6 md:rounded-[32px] md:p-8 lg:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* GRID */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* NAME */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Full Name*
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/40 transition-all duration-300 focus:border-blue-400 focus:bg-white/[0.07] focus:outline-none sm:px-5 sm:py-4 sm:text-base"
                />
              </div>

              {/* EMAIL */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Email Address*
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="hello@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/40 transition-all duration-300 focus:border-blue-400 focus:bg-white/[0.07] focus:outline-none sm:px-5 sm:py-4 sm:text-base"
                />
              </div>

              {/* PHONE */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Phone Number*
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 234 567 890"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/40 transition-all duration-300 focus:border-blue-400 focus:bg-white/[0.07] focus:outline-none sm:px-5 sm:py-4 sm:text-base"
                />
              </div>

              {/* SERVICE */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Your Business
                </label>

                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white transition-all duration-300 focus:border-blue-400 focus:bg-white/[0.07] focus:outline-none sm:px-5 sm:py-4 sm:text-base"
                  >
                    <option className="text-black" value="">
                      Select Service
                    </option>

                    <option className="text-black" value="business-strategy">
                      Business Strategy
                    </option>

                    <option className="text-black" value="market-analysis">
                      Market Analysis
                    </option>

                    <option className="text-black" value="financial-planning">
                      Financial Planning
                    </option>

                    <option className="text-black" value="risk-management">
                      Risk Management
                    </option>

                    <option
                      className="text-black"
                      value="digital-transformation"
                    >
                      Digital Transformation
                    </option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-blue-500">
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">
                Message*
              </label>

              <textarea
                rows={5}
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/40 transition-all duration-300 focus:border-blue-400 focus:bg-white/[0.07] focus:outline-none sm:px-5 sm:py-4 sm:text-base"
              />
            </div>

            {/* BUTTON */}
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
              className="group mx-auto flex w-full sm:w-fit items-center justify-center gap-3  bg-blue-600  rounded-full  px-6 sm:px-8 py-3 text-[13px] sm:text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-blue-700 active:bg-blue-800 "
            >
              {/* ICON */}
              <div className="flex items-center justify-center rounded-full bg-white p-2 text-blue-600 rotate-45 transition-all duration-300 ease-out group-hover:rotate-0 group-hover:scale-110">
                <Send size={14} />
              </div>

              <span>Submit Message</span>
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
