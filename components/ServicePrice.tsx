

"use client";
import React, { ReactElement } from 'react';
import { motion, Variants } from 'framer-motion';
import { Check, Box, ArrowRight, X } from 'lucide-react';
import { GiSprout } from "react-icons/gi";
import { IoRocketSharp } from "react-icons/io5";
import { BsFillBuildingsFill } from "react-icons/bs";
import Link from 'next/link';

interface PricingPlan {
    name: string;
    tittle: string;
    icon: ReactElement;

    // included features
    trueFeatures: string[];

    // unavailable features
    falseFeatures?: string[];

    isPopular: boolean;
}

const plans: PricingPlan[] = [
    {
        icon: <GiSprout className="h-full w-full " />,
        name: "Starter",
        tittle: "For small teams",

        trueFeatures: [
            "Core feature development",
            "Responsive UI/UX design",
            "Basic integrations",
            "30-day post-launch support",
        ],

        falseFeatures: [
            "Dedicated project manager",
            "Custom analytics dashboard",
        ],

        isPopular: false,
    },

    {
        icon: <IoRocketSharp className="h-full w-full " />,
        name: "Agile Squad",
        tittle: "For scaling applications",

        trueFeatures: [
            "1 Full-stack Developer",
            "Part-time UI/UX Designer",
            "Shared QA & DevOps",
            "Agile sprint delivery",
            "Dedicated Project Manager",
            "GitHub / Jira access",

        ],



        isPopular: true,
    },

    {
        icon: <BsFillBuildingsFill className="h-full w-full " />,
        name: "Enterprise",
        tittle: "For massive complexity",

        trueFeatures: [
            "Cross-functional dedicated team",
            "Complex legacy migrations",
            "Enterprise system integrations",
            "Stringent security compliances",
            "Custom SLAs & 24/7 support",
            "Intellectual Property transfer"

        ],



        isPopular: false,
    },
];

// Framer Motion Container Variants for staggered entry
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 100, damping: 15 }
    },
};

export const ServicePrice: React.FC = () => {
    return (
        <section className="bg-[#F8F9FD] py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center">
            <div className="max-w-6xl w-full">

                <div className="max-w-4xl mx-auto text-center mb-12">
                    <span className="inline-block mb-3 text-xs font-bold tracking-[0.25em] uppercase text-black">
                        Investment Plans

                    </span>

                    <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-black leading-[1.15] w-full wrap-break-word">
                        Transparent {" "}

                        <span className="font-serif italic font-light text-black">
                            Pricing


                        </span>

                    </h1>

                    <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-zinc-400">
                       Flexible engagement models designed for startups, growing teams, and enterprises.


                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center lg:items-stretch"
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className={`relative flex flex-col justify-between p-8 rounded-[2.5rem] transition-shadow duration-300
                ${plan.isPopular
                                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30 lg:scale-105 z-10'
                                    : 'bg-white text-gray-900 border border-gray-100 shadow-lg shadow-gray-200/50'
                                }`}
                        >
                            <div>
                                {/* Header Icon & Plan Name */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`
                    p-3 rounded-2xl flex items-center justify-center h-12 w-12 
                    ${plan.isPopular ? 'bg-white/15 backdrop-blur-md text-white' : 'bg-blue-600/20 backdrop-blur-md text-blue-600'}
                  `}>
                                        {plan.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">{plan.name}</h3>
                                </div>

                                {/* Tittle */}
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl  font-extrabold tracking-tight">
                                        {plan.tittle}
                                    </span>

                                </div>



                                <hr className={`border-t mb-8 ${plan.isPopular ? 'border-white/10' : 'border-gray-300'}`} />

                                {/* Features List */}
                                <ul className="space-y-4 mb-10">

                                    {/* TRUE FEATURES */}
                                    {plan.trueFeatures.map((feature, fIdx) => (
                                        <li
                                            key={`true-${fIdx}`}
                                            className="flex items-start gap-3 text-sm font-medium"
                                        >
                                            <div className={`flex-shrink-0 rounded-lg p-0.5 mt-0.5 flex items-center justify-center h-5 w-5 transition-all duration-300 group-hover:scale-110  ${plan.isPopular
                                                        ? "bg-white text-blue-600"
                                                        : "bg-blue-600 text-white"
                                                    }`}
                                            >
                                                <Check className="h-3.5 w-3.5 stroke-[3]" />
                                            </div>

                                            <span
                                                className={
                                                    plan.isPopular ? "text-blue-50" : "text-gray-700"
                                                }
                                            >
                                                {feature}
                                            </span>
                                        </li>
                                    ))}

                                    {/* FALSE FEATURES */}
                                    {plan.falseFeatures?.map((feature, fIdx) => (
                                        <li
                                            key={`false-${fIdx}`}
                                            className="flex items-start gap-3 text-sm font-medium opacity-70"
                                        >
                                            <div
                                                className="flex-shrink-0 rounded-lg p-0.5 mt-0.5 flex items-center justify-center h-5 w-5 bg-red-300 text-red-500 "
                                            >
                                                <X className="h-3.5 w-3.5 stroke-[3]" />
                                            </div>

                                            <span className="text-gray-400 line-through">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action Button & Footer Info */}
                            <Link href="/contact">
                            <div className="mt-auto text-center">
                                <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    className={`
                    group w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-semibold text-sm transition-colors duration-200
                    ${plan.isPopular
                                            ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-md shadow-blue-800/20'
                                            : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/10'
                                        }
                  `}
                                >
                                    <span>Get started</span>
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </motion.button>


                            </div>
                            </Link>

                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicePrice;