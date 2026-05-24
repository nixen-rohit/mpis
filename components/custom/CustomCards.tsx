"use client";

import { motion } from "framer-motion";

interface CustomCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export default function CustomCards({
  title,
  description,
  icon,
  className = "",
}: CustomCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      className={`group rounded-[28px] border border-blue-100 bg-blue-50 p-8 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:shadow-2xl ${className}`}
    >
      {/* Icon */}
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ">
        {icon}
      </div>

      {/* Content */}
      <h3 className="mb-4 text-2xl font-bold text-blue-950 transition-colors duration-300 group-hover:text-white">
        {title}
      </h3>

      <p className="leading-relaxed text-blue-500 transition-colors duration-300 group-hover:text-blue-100">
        {description}
      </p>
    </motion.div>
  );
}
