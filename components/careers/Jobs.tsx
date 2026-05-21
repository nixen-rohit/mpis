"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Clock } from "lucide-react";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { IoIosWifi } from "react-icons/io";

// Types
type Category =
  | "View all"
  | "Development"
  | "Design"
  | "Marketing"
  | "Project Management"
  | "QA Testing";

interface Job {
  id: string;
  title: string;
  description: string;
  category: Category;
  location: string;
  type: string;
  mode: string;
  experience: string;
  languages: string[];
}

const categories: Category[] = [
  "View all",
  "Development",
  "Design",
  "Marketing",
  "Project Management",
  "QA Testing",
];

const jobsData: Job[] = [
  {
    id: "1",
    title: "Senior Full Stack Dev",
    description:
      "Lead development of scalable web applications using React, Node.js, and cloud infrastructure.",
    category: "Development",
    type: "Full-time",
    mode: "Remote",
    location: "India / Remote",
    experience: "3-5 Years",
    languages: ["React", "Node.js", "MongoDB", "AWS", "REST API's"],
  },

  {
    id: "2",
    title: "Mobile App Developer (Flutter)",
    description:
      "Build stunning cross-platform mobile apps using Flutter and Dart.",
    category: "Development",
    type: "Full-time",
    mode: "Hybrid",
    location: "Mumbai / Remote",
    experience: "2-4 Years",
    languages: ["Flutter", "Dart", "Firebase", "REST API's", "Git"],
  },

  {
    id: "3",
    title: "UI/UX Designer",
    description:
      "Design user-centered interfaces for web and mobile applications.",
    category: "Design",
    type: "Full-time",
    mode: "Remote",
    location: "Remote",
    experience: "2-3 Years",
    languages: [
      "Figma",
      "Adobe XD",
      "Prototyping",
      "Design Systems",
      "Usability Testing",
    ],
  },

  {
    id: "4",
    title: "Digital Marketing Specialist",
    description:
      "Drive growth through data-driven digital marketing campaigns.",
    category: "Marketing",
    type: "Full-time",
    mode: "On-Site",
    location: "Mumbai",
    experience: "1-3 Years",
    languages: [
      "SEO/SEM",
      "Google Ads",
      "Meta Ads",
      "Analytics",
      "Content Marketing",
    ],
  },

  {
    id: "5",
    title: "Project Manager (IT Projects)",
    description: "Manage end-to-end delivery of web and mobile projects.",
    category: "Project Management",
    type: "Full-time",
    mode: "Hybrid",
    location: "Mumbai / Remote",
    experience: "3-5 Years",
    languages: [
      "Agile / Scrum",
      "Jira",
      "Risk Management",
      "Client Communication",
    ],
  },

  {
    id: "6",
    title: "QA Engineer (Manual + Automation)",
    description: "Ensure product quality across web and mobile platforms.",
    category: "QA Testing",
    type: "Full-time",
    mode: "Remote",
    location: "Remote",
    experience: "1-3 Years",
    languages: [
      "Selenium",
      "Cypress",
      "Postman",
      "Test Planning",
      "Bug Tracking",
    ],
  },
];

export default function Jobs() {
  const [activeTab, setActiveTab] = useState<Category>("View all");
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredJobs = jobsData.filter(
    (job) => activeTab === "View all" || job.category === activeTab,
  );

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_40%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-10 relative z-10">
        {/* Header */}
        <header className="mb-16 flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 border border-blue-500/30 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6 bg-blue-500/10 text-blue-300 backdrop-blur-sm"
          >
            We&apos;re hiring!
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.5rem,6vw,5rem)] text-center font-normal tracking-tight text-white leading-[1.1]"
          >
            Open{" "}
            <span className="font-serif italic font-light text-blue-400">
              Positions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed text-center pt-5"
          >
            Explore exciting opportunities to grow your skills, work on
            real-world projects, and make an impact.
          </motion.p>
        </header>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-16 pb-5 border-b border-white/10 justify-center items-center"
        >
          {categories.map((cat) => {
            const isActive = activeTab === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300
                ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-white/15 bg-white/3 text-gray-300 hover:border-blue-500/50 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-blue-600 -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Jobs */}
        <div className="space-y-0">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => {
                const isExpanded = expandedJobId === job.id;

                return (
                  <motion.div
                    key={job.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{
                      duration: 0.3,
                      layout: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      },
                    }}
                    onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                    className="group relative border-b border-white/10 py-8 flex flex-col cursor-pointer"
                  >
                    {/* Top Row */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 w-full">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                          {job.title}
                        </h3>

                        {/* Tags */}
                        <div
                          className="flex flex-wrap gap-2.5"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {[
                            {
                              icon: Clock,
                              text: job.type,
                            },
                            {
                              icon: IoIosWifi,
                              text: job.mode,
                            },
                            {
                              icon: MapPin,
                              text: job.location,
                            },
                          ].map((item, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 border border-white/10 bg-white/4 px-3 py-1 rounded-full text-xs font-medium text-gray-300"
                            >
                              <item.icon className="w-3.5 h-3.5" />
                              {item.text}
                            </span>
                          ))}

                          <span className="inline-flex items-center gap-1.5 border border-white/10 bg-white/4 px-3 py-1 rounded-full text-xs font-medium text-gray-300">
                            <LuBriefcaseBusiness className="w-3.5 h-3.5" />
                            {job.experience}
                          </span>
                        </div>
                      </div>

                      {/* Apply */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedJob(job);
                          setIsModalOpen(true);
                        }}
                        className="flex items-center gap-1 self-start md:self-center text-lg font-bold tracking-tight text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <span>Apply</span>

                        <ArrowUpRight className="w-5 h-5 stroke-[2.5] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </button>
                    </div>

                    {/* Expandable */}
                    <motion.div
                      layout
                      initial={{
                        height: 0,
                        opacity: 0,
                        marginTop: 0,
                      }}
                      animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0,
                        marginTop: isExpanded ? 20 : 0,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden max-w-3xl"
                    >
                      <div className="space-y-6 text-gray-400 text-[15px] leading-relaxed">
                        <p>{job.description}</p>

                        {/* Skills */}
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-3">
                            Technologies / Skills
                          </h4>

                          <div className="flex flex-wrap gap-2">
                            {job.languages.map((lang) => (
                              <span
                                key={lang}
                                className="px-3 py-1 rounded-full bg-blue-600/15 border border-blue-500/20 text-blue-300 text-xs font-medium"
                              >
                                {lang}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 text-gray-500 font-medium"
              >
                No open positions in this category.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-70 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#0B0B0F] border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                ✕
              </button>

              {/* Header */}
              <div className="mb-8">
                <p className="text-blue-400 text-sm font-medium mb-3">
                  Apply for this Position
                </p>

                <h2 className="text-3xl font-bold text-white leading-tight">
                  {selectedJob.title}
                </h2>
              </div>

              {/* Form */}
              <form className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full bg-white/4 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-white/4 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="+91 98765 43210"
                    className="w-full bg-white/4 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Years of Experience
                  </label>

                  <input
                    type="text"
                    placeholder="2+ Years"
                    className="w-full bg-white/4 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Resume / CV *
                  </label>

                  <label className="relative flex flex-col items-center justify-center w-full min-h-[180px] border-2 border-dashed border-white/10 rounded-3xl bg-white/3 hover:border-blue-500/40 transition-colors cursor-pointer px-6 text-center">
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                    />

                    <div className="space-y-3">
                      <p className="text-gray-300 font-medium">
                        Drag & drop your resume here, or click to browse
                      </p>

                      <p className="text-sm text-gray-500">
                        PDF, DOC, DOCX — max 5MB
                      </p>

                      <p className="text-xs text-gray-600">No file chosen</p>
                    </div>
                  </label>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Cover Letter / Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell us why you're a great fit for this role..."
                    className="w-full bg-white/4 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
