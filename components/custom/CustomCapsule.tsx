"use client";
import { motion } from "framer-motion";

interface CustomCapsuleProps {
  title: string;
  icon: React.ReactNode;
}

export default function CustomCapsule({ title, icon }: CustomCapsuleProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group flex items-center gap-5 rounded-[24px] border border-white/10 bg-[#0f0f10] px-6 py-6 transition-all duration-300 hover:border-blue-500/30 hover:bg-[#151515] hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
    >
      {/* Icon */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/20 transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-100">
        {title}
      </h3>
    </motion.div>
  );
}
