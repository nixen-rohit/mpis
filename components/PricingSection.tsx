"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const CARD_PLANS = [
  {
    id: 1,
    title: "Basic Plan",
    price: "3 Months Support",
    badge: null,
    featured: false,
    features: [
      "Starter setup",
      "Standard support",
      "Core features",
    ],
  },
  {
    id: 2,
    title: "Business Plan",
    price: "6 Months Support",
    badge: "Most Popular",
    featured: true,
    features: [
      "Custom systems",
      "API access",
      "Priority service",
    ],
  },
  {
    id: 3,
    title: "Premium Plan",
    price: "1 Year Support",
    badge: "Save $12,000",
    featured: false,
    features: [
      "Enterprise tools",
      "Full security",
      "Dedicated team",
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      className="w-full bg-gray-200 py-20 px-4 sm:px-6 lg:px-8 select-none font-sans"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Google Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap');

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(77, 62, 255, 0.3), 0 0 60px rgba(77, 62, 255, 0.1), 0 25px 50px rgba(0,0,0,0.25); }
          50% { box-shadow: 0 0 30px rgba(77, 62, 255, 0.5), 0 0 80px rgba(77, 62, 255, 0.2), 0 25px 50px rgba(0,0,0,0.3); }
        }
        @keyframes border-spin {
          from { --angle: 0deg; }
          to { --angle: 360deg; }
        }
        .featured-card {
          background: linear-gradient(145deg, #1a0a4a 0%, #0d0528 40%, #1a0a4a 100%);
          animation: glow-pulse 3s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }
        .featured-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 20%, rgba(173, 255, 0, 0.08) 0%, transparent 60%),
                      radial-gradient(ellipse at 80% 80%, rgba(77, 62, 255, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }
        .featured-card::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 29px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(173,255,0,0.6), rgba(77,62,255,0.4), rgba(173,255,0,0.2), rgba(77,62,255,0.6));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #4d3eff 0%, #ADFF00 25%, #ffffff 50%, #ADFF00 75%, #4d3eff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .badge-featured {
          background: linear-gradient(135deg, #ADFF00, #7dff00);
          box-shadow: 0 0 12px rgba(173, 255, 0, 0.5);
        }
        .check-featured {
          background: linear-gradient(135deg, rgba(173,255,0,0.25), rgba(77,62,255,0.2));
          border: 1px solid rgba(173,255,0,0.3);
        }
        .btn-featured {
          background: linear-gradient(135deg, #ADFF00 0%, #7dff00 100%);
          color: #0d0528;
          box-shadow: 0 4px 20px rgba(173, 255, 0, 0.35);
          font-weight: 700;
          transition: all 0.25s ease;
        }
        .btn-featured:hover {
          background: linear-gradient(135deg, #c8ff40, #ADFF00);
          box-shadow: 0 6px 28px rgba(173, 255, 0, 0.55);
          transform: translateY(-1px);
        }
        .floating {
          animation: float 4s ease-in-out infinite;
        }
        .zap-icon {
          filter: drop-shadow(0 0 6px rgba(173, 255, 0, 0.8));
        }
      `}</style>

      {/* Heading Section */}
      <div className="flex flex-col justify-center items-center col-span-full mb-12 md:mb-16 max-w-7xl mx-auto">
        <span className="inline-block mb-4 text-sm sm:text-base font-medium tracking-[0.2em] uppercase text-gray-400">
          Flexible Pricing
        </span>
        <h2
          className="text-4xl sm:text-6xl text-center md:text-7xl lg:text-8xl font-normal tracking-tight text-[#111111] leading-[1.02] max-w-6xl"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Plans for every{" "}
          <span
            className="font-light text-[#1c1c1c] block"
            style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic" }}
          >
            Business
          </span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {CARD_PLANS.map((plan) =>
            plan.featured ? (
              /* ── FEATURED BUSINESS CARD ── */
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="featured-card floating rounded-[28px] p-8 flex flex-col justify-between md:-my-6 md:min-h-[600px] min-h-[560px] z-10"
              >
                <div className="relative z-10">
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <h3
                      className="text-2xl font-bold tracking-tight shimmer-text"
                    >
                      {plan.title}
                    </h3>
                    <span className="badge-featured text-black font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <Zap className="w-3 h-3 zap-icon fill-current" />
                      {plan.badge}
                    </span>
                  </div>

                  {/* Price Display */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span
                      className="text-4xl font-semibold tracking-tight text-white leading-tight"
                    >
                      {plan.price}
                    </span>
                  </div>

                  {/* Save badge */}
                  <div className="mt-3">
                    <span className="inline-block text-xs font-semibold text-[#ADFF00] bg-[rgba(173,255,0,0.1)] border border-[rgba(173,255,0,0.25)] px-3 py-1 rounded-full">
                      Save $1,500
                    </span>
                  </div>

                  <hr className="my-7 border-[rgba(255,255,255,0.1)]" />

                  {/* Feature List */}
                  <ul className="flex flex-col gap-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-200">
                        <div className="check-featured flex items-center justify-center w-5 h-5 rounded-full">
                          <Check className="w-3.5 h-3.5 stroke-3 text-[#ADFF00]" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="mt-6 relative z-10">
                  <button className="btn-featured w-full py-3.5 px-4 rounded-full text-sm">
                    Get Started →
                  </button>
                </div>
              </motion.div>
            ) : (
              /* ── REGULAR CARDS ── */
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative bg-white rounded-[28px] p-8 flex flex-col justify-between shadow-xl min-h-[520px]"
              >
                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold tracking-tight text-[#4d3eff]">
                      {plan.title}
                    </h3>
                    {plan.badge && (
                      <span className="bg-[#ADFF00] text-black font-semibold text-xs px-3 py-1 rounded-full shadow-sm">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Price Display */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-gray-900">
                      {plan.price}
                    </span>
                  </div>

                  <hr className="my-8 border-gray-100" />

                  {/* Feature List */}
                  <ul className="flex flex-col gap-3.5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#ADFF00]/20 text-gray-900">
                          <Check className="w-3.5 h-3.5 stroke-3" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="mt-4">
                  <button className="w-full bg-black hover:bg-zinc-800 text-white font-medium py-3 px-4 rounded-full transition-colors duration-200 text-sm">
                    Get Started
                  </button>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}