"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface team {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  link?: string;
  redirectTo?: string;
}
const teamMembers: team[] = [
  {
    id: 1,
    name: "Alexander Wright",
    role: "Chief Executive Officer",
    description: "20+ years of enterprise software strategy.",
    image: "/img/team/team1.webp",
    link: "",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Chief Operating Officer",
    description: "Expert in global scaling and agile delivery.",
    image: "/img/team/team2.webp",
    link: "",
  },
  {
    id: 3,
    name: "Michael Chang",
    role: "Chief Technology Officer",
    description: "Pioneer in distributed systems & AI models.",
    image: "/img/team/team3.webp",
    link: "",
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "VP of Marketing",
    description: "Driving market growth and global outreach.",
    image: "/img/team/team1.webp",
    link: "",
  },
];

export default function TeamCards() {
  return (
    <section className="h-full w-full bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] r-to-tr  px-4 py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -30,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-blue-600/40 p-3 backdrop-blur-xl"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={500}
                className="h-[310px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

              {/* Top Right Arrow Icon */}
              <div className="absolute right-4 bottom-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <a
                  href={member.link}
                  target={member.redirectTo ? "_blank" : "_top"}
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg transition-all duration-300 hover:scale-110 "
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>

              {/* Floating Role */}
              <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/50 px-3 py-1 backdrop-blur-md">
                <p className="text-[11px] font-medium text-white">
                  {member.role}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 pt-4 text-center">
              <h2 className="text-lg font-semibold text-black">
                {member.name}
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-black/50">
                {member.description}
              </p>
            </div>

            {/* Floating Blur */}
            <motion.div
              animate={{
                x: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] /10 blur-3xl"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
