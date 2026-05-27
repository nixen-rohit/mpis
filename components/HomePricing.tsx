"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

type Plan = {
  id: number;
  title: string;
  price: string;
  badge: string | null;
  featured: boolean;
  features: string[];
};

const CARD_PLANS: Plan[] = [
  {
    id: 1,
    title: "Basic Plan",
    price: "3 Months Support",
    badge: null,
    featured: false,
    features: ["Starter setup", "Standard support", "Core features"],
  },
  {
    id: 2,
    title: "Business Plan",
    price: "6 Months Support",
    badge: "Most Popular",
    featured: true,
    features: ["Custom systems", "API access", "Priority service"],
  },
  {
    id: 3,
    title: "Premium Plan",
    price: "1 Year Support",
    badge: "Save $12,000",
    featured: false,
    features: ["Enterprise tools", "Full security", "Dedicated team"],
  },
];

export default function HomePricing() {
  return (
    <section className="w-full bg-black px-4 py-20 select-none sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mx-auto mb-12 flex max-w-7xl flex-col items-center justify-center md:mb-16">
        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-gray-400 sm:text-base">
          Flexible Pricing
        </span>

        <h2 className="max-w-6xl text-center text-4xl leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Plans for every{" "}
          <span className="block font-light italic font-serif">Business</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          {CARD_PLANS.map((plan) =>
            plan.featured ? (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                }}
                className="relative z-10 flex min-h-[560px] flex-col justify-between overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#1a0a4a_0%,#0d0528_40%,#1a0a4a_100%)] p-8 shadow-[0_0_20px_rgba(77,62,255,0.3),0_0_60px_rgba(77,62,255,0.1),0_25px_50px_rgba(0,0,0,0.25)] md:-my-6 md:min-h-[600px]"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(173,255,0,0.08)_0%,transparent_60%),radial-gradient(ellipse_at_80%_80%,rgba(77,62,255,0.15)_0%,transparent_60%)]" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="bg-[linear-gradient(90deg,#4d3eff_0%,#ADFF00_25%,#ffffff_50%,#ADFF00_75%,#4d3eff_100%)] bg-size-[200%_auto] bg-clip-text text-2xl font-bold tracking-tight text-[#ADFF00]">
                      {plan.title}
                    </h3>

                    <span className="flex items-center gap-1 rounded-full bg-[#ADFF00] px-3 py-1 text-xs font-bold text-black shadow-[0_0_12px_rgba(173,255,0,0.5)]">
                      <Zap className="h-3 w-3 fill-current" />
                      {plan.badge}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold leading-tight tracking-tight text-white">
                      {plan.price}
                    </span>
                  </div>

                  {/* Save Badge */}
                  <div className="mt-3">
                    <span className="inline-block rounded-full border border-[#ADFF00]/25 bg-[#ADFF00]/10 px-3 py-1 text-xs font-semibold text-[#ADFF00]">
                      Save $1,500
                    </span>
                  </div>

                  <hr className="my-7 border-white/10" />

                  {/* Features */}
                  <ul className="flex flex-col gap-4">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm font-medium text-gray-200"
                      >
                        <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#ADFF00]/30 bg-[linear-gradient(135deg,rgba(173,255,0,0.25),rgba(77,62,255,0.2))]">
                          <Check className="h-3.5 w-3.5 text-[#ADFF00]" />
                        </div>

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="relative z-10 mt-6">
                  <button className="w-full rounded-full bg-[linear-gradient(135deg,#ADFF00_0%,#7dff00_100%)] px-4 py-3.5 text-sm font-bold text-[#0d0528] shadow-[0_4px_20px_rgba(173,255,0,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,#c8ff40,#ADFF00)] hover:shadow-[0_6px_28px_rgba(173,255,0,0.55)]">
                    Get Started →
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                className="relative flex min-h-[520px] flex-col justify-between rounded-[28px] bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  p-8 shadow-xl"
              >
                <div>
                   
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold tracking-tight text-blue-500">
                      {plan.title}
                    </h3>

                    {plan.badge && (
                      <span className="rounded-full bg-[#ADFF00] px-3 py-1 text-xs font-semibold text-black shadow-sm">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-gray-900">
                      {plan.price}
                    </span>
                  </div>
                  <hr className="my-8 border-gray-100" />
                  {/* Features */}
                  <ul className="flex flex-col gap-3.5">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm font-medium text-gray-700"
                      >
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ADFF00]/20 text-gray-900">
                          <Check className="h-3.5 w-3.5" />
                        </div>

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="mt-4">
                  <button className="w-full rounded-full bg-black px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-zinc-800">
                    Get Started
                  </button>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
