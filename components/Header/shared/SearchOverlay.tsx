// components/header/shared/SearchOverlay.tsx
"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { RiSearchLine, RiCloseLine } from "react-icons/ri";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
  <div
    className={cn(
      "fixed inset-0 z-999 transition-all duration-300",
      open
        ? "pointer-events-auto opacity-100"
        : "pointer-events-none opacity-0"
    )}
  >
    {/* Premium Backdrop */}
    <div
      onClick={onClose}
      className={cn(
        "absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/50 backdrop-blur-md transition-all duration-300",
        open ? "opacity-100" : "opacity-0"
      )}
    />

    {/* Search Container */}
    <div
      className={cn(
        "absolute top-6 left-1/2 w-full max-w-3xl -translate-x-1/2 px-4 sm:px-6 transition-all duration-500",
        open
          ? "translate-y-0 scale-100 opacity-100"
          : "-translate-y-6 scale-[0.98] opacity-0"
      )}
    >
      {/* Main Search Box */}
      <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/90 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
        {/* Top Search Input */}
        <div className="flex items-center gap-4 border-b border-gray-100 px-5 py-4 sm:px-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 text-white shadow-md">
            <RiSearchLine className="text-xl" />
          </div>

          <input
            ref={inputRef}
            type="text"
            placeholder="Search services, solutions, technologies..."
            className="flex-1 bg-transparent text-base font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-lg"
          />

          <div className="hidden sm:flex items-center gap-2">
            <kbd  className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-700 border border-gray-400 shadow-md">
              ESC
            </kbd>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-700 border border-gray-400 shadow-md"
          >
            <RiCloseLine className="text-xl" />
          </button>
        </div>

        {/* Search Suggestions */}
        <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Quick Links */}
          <div>
            <p className="mb-3 px-1 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400">
              Popular Searches
            </p>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[
                "Web Development",
                "Mobile Apps",
                "AI & ML",
                "Cloud Services",
                "UX/UI Design",
                "DevOps",
              ].map((q) => (
                <button
                  key={q}
                  className={cn(
                    "group rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-left transition-all",
                    "hover:border-blue-200 hover:bg-blue-50 hover:shadow-sm"
                  )}
                >
                  <span className="block text-sm font-semibold text-gray-700 group-hover:text-blue-600">
                    {q}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent / Tips */}
          <div className="rounded-3xl bg-linear-to-br from-gray-50 to-gray-100 p-4">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400">
              Search Tips
            </p>

            <div className="space-y-3">
              {[
                "Try 'Best AI solutions'",
                "Search 'UI/UX portfolio'",
                "Find 'Cloud migration'",
              ].map((tip) => (
                <button
                  key={tip}
                  className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-white hover:text-blue-600"
                >
                  <span>{tip}</span>
                  <span className="text-gray-300">↗</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 bg-gray-50/80 px-5 py-3 text-xs text-gray-500 sm:px-6">
          <span>Powered by MPIS Smart Search</span>
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
