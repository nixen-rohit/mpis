"use client";
import { motion, Variants } from "framer-motion";

interface CustomBannerProps {
  badge?: string;
  title?: string;
  highlight?: string;
  subtitle?: string;
  description?: string;
}

// Smooth layout transition variants
const slideVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
    },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CustomBanner = ({
  // default values
  badge = "",
  title = "",
  highlight = "",
  subtitle = "",
  description = "",
}: CustomBannerProps) => {
  return (
    <section className="relative h-screen md:h-full w-full overflow-hidden bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] flex flex-col justify-between pt-20 md:pt-12 px-4 lg:px-8 select-none">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideVariants}
        className="flex flex-col items-center justify-center text-center w-full max-w-[92vw] sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-3 sm:px-6 md:px-10 lg:px-12"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className={`max-w-4xl pb-14 text-center mx-auto`}>
            {/* Badge */}
            <p className="text-blue-600 font-medium mb-4 tracking-wide">
              {badge}
            </p>

            {/* Title */}

            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-blue-950 leading-[1.1]"
            >
              {title}{" "}
              <span className="font-serif italic font-light text-blue-600">
                {highlight}
              </span>
              <br />
              {subtitle}
            </motion.h1>

            {/* description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-blue-400"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CustomBanner;
