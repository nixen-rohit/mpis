"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    title: "Top B2B Tech Partner",
    subtitle: "2024",
    description:
      "Recognized by industry leaders for delivering 99.9% uptime and scalable architectures to Fortune 500 companies.",
    icon: Award,
    gradient: "from-blue-600/20 to-cyan-400/10",
    border: "border-blue-200/50",
    iconBg: "bg-blue-600",
  },
  {
    title: "ISO 27001 Certified",
    subtitle: "Security Standard",
    description:
      "A testament to our uncompromising standards regarding data security, privacy, and compliance.",
    icon: ShieldCheck,
    gradient: "from-emerald-600/20 to-teal-400/10",
    border: "border-emerald-200/50",
    iconBg: "bg-emerald-600",
  },
  {
    title: "Best Workplace in Tech",
    subtitle: "2023 - 2024",
    description:
      "Voted by our employees as one of the most inclusive, fast-growing, and innovative cultures in the tech sector.",
    icon: Sparkles,
    gradient: "from-violet-600/20 to-fuchsia-400/10",
    border: "border-violet-200/50",
    iconBg: "bg-violet-600",
  },
];

export default function AwardsCards() {
  return (
    <section className="relative flex flex-col lg:flex-row w-full overflow-hidden bg-slate-50">
      {/* Animated Background Blur */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/20 blur-3xl"
      />

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex items-center justify-center lg:sticky lg:top-0 lg:h-auto lg:w-1/2 p-6 lg:p-10"
      >
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/img/awards.png"
            alt="Award Trophy"
            width={700}
            height={700}
            priority
            className="h-auto w-full max-w-md lg:max-w-2xl object-contain rounded-4xl drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
        className="w-full lg:w-1/2 px-4 sm:px-6 md:px-10 py-10 lg:py-16"
      >
        <div className="space-y-6 sm:space-y-8">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 80,
                    scale: 0.95,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className={`group relative overflow-hidden rounded-4xl border ${card.border} bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] /80 p-5 sm:p-8 shadow-sm backdrop-blur-xl transition-all duration-500 hover:shadow-2xl`}
              >
                {/* Hover Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute inset-0 bg-linear-to-br ${card.gradient}`}
                />

                {/* Animated Blur Orb */}
                <motion.div
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-10 -top-10 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] /40 blur-3xl"
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-5 sm:gap-6 md:flex-row md:items-start">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className={`flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl ${card.iconBg} shadow-lg shadow-black/10`}
                  >
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </motion.div>

                  {/* Text */}
                  <div>
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mb-3 inline-flex rounded-full border border-slate-200 bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] /70 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 backdrop-blur-sm"
                    >
                      {card.subtitle}
                    </motion.span>

                    <h3 className="mb-3 text-xl sm:text-2xl font-semibold leading-tight text-slate-950">
                      {card.title}
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Border Glow */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileHover={{
                    opacity: 1,
                    scaleX: 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-x-0 bottom-0 h-px origin-center bg-linear-to-r from-transparent via-slate-300 to-transparent"
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
