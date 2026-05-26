"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Mock Data ---
const latestPosts = [
  {
    id: 1,
    title: "Creating an Intuitive User Interface (UI) for Your SaaS Product",
    date: "Aug 10",
    readTime: "10 min read",
    image: "/img/customsoftware.jpg",
  },
  {
    id: 2,
    title: "Tips for designing clear and user-friendly navigation menus.",
    date: "Aug 10",
    readTime: "10 min read",
    image: "/img/healthcare.jpg",
  },
  {
    id: 3,
    title: "Exploring how to establish a visual hierarchy that guides users.",
    date: "Aug 10",
    readTime: "10 min read",
    image: "/img/webdevelopment.jpg",
  },
  {
    id: 4,
    title: "How to use color to influence user emotions and actions.",
    date: "Aug 10",
    readTime: "10 min read",
    image: "/img/why-choose-thumb-01.webp",
  },
];

const foundersPosts = [
  {
    id: 1,
    title: "Our people make the difference",
    category: "Category",
    description:
      "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    date: "Aug 10",
    readTime: "10 min read",
    image: "/img/healthcare.jpg",
  },
  {
    id: 2,
    title: "Cultivating space for focus",
    category: "Category",
    description:
      "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    date: "Aug 10",
    readTime: "10 min read",
    image: "/img/healthcare.jpg",
  },
  {
    id: 3,
    title: "Designing with empathy first",
    category: "Category",
    description:
      "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    date: "Aug 10",
    readTime: "10 min read",
    image: "/img/healthcare.jpg",
  },
];

export default function BlogLayout() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white text-zinc-900 font-sans antialiased">
      {/* ================= HERO & LATEST POSTS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Featured Hero Card */}
        <motion.div
          className="lg:col-span-2 relative h-[450px] rounded-3xl overflow-hidden group cursor-pointer shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
            style={{
              backgroundImage: `url('/img/elearning.jpg')`,
            }}
          />
          {/* Frosted / Gradient overlay styled like the design */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent lg:bg-linear-to-t lg:from-stone-900/90 lg:via-stone-900/30 lg:to-transparent" />

          <div className="absolute bottom-0 inset-x-0 p-8 flex flex-col items-start justify-end text-white backdrop-blur-[2px] bg-linear-to-t from-stone-950/40 to-transparent">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-md text-white mb-4 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              Category
            </span>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight max-w-2xl leading-snug">
              Enhancing Team Collaboration with SaaS Products: A Game-Changer
              for Modern Workflows
            </h1>
            <div className="flex items-center gap-2 text-xs text-stone-300 mt-3 font-medium">
              <span>Aug 10</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </div>
        </motion.div>

        {/* Latest Posts Sidebar */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight mb-6 text-stone-900">
              Latest post
            </h2>
            <div className="space-y-5">
              {latestPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="flex gap-4 items-center group cursor-pointer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-sm font-semibold text-stone-900 line-clamp-2 leading-snug group-hover:text-amber-700 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-stone-400 mt-1.5">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="border-stone-100 my-12" />

      {/* ================= FOUNDERS CORNER ================= */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900">
            Founders corner
          </h2>

          {/* buttons */}
          <div className="flex items-center gap-3">
            {/* Previous */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="
      group relative flex h-11 w-11 items-center justify-center
      rounded-full border border-stone-200 bg-white
      text-stone-600 shadow-sm
      transition-all duration-300
      hover:border-stone-400 hover:bg-stone-50 hover:shadow-md
      disabled:pointer-events-none disabled:opacity-40
    "
            >
              <ChevronLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>

            {/* Next */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="
      group relative flex h-11 w-11 items-center justify-center
      rounded-full border border-stone-200 bg-white
      text-stone-600 shadow-sm
      transition-all duration-300
      hover:border-stone-400 hover:bg-stone-50 hover:shadow-md
      disabled:pointer-events-none disabled:opacity-40
    "
            >
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Grid Loop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {foundersPosts.map((post, index) => (
              <motion.div
                key={`${post.id}-${currentPage}`}
                className="bg-stone-50/50 border border-stone-100/60 rounded-2xl p-4 flex flex-col group cursor-pointer hover:shadow-md hover:bg-white transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden mb-4 bg-stone-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col px-1">
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-stone-500 mb-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-700" />
                    {post.category}
                  </span>
                  <h3 className="text-base font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-3 leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-[11px] text-stone-400 font-medium">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center mt-12 pt-4 border-t border-stone-100">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full transition-all ${
                currentPage === i + 1
                  ? "bg-stone-900 text-white"
                  : "text-stone-400 hover:text-stone-800"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
