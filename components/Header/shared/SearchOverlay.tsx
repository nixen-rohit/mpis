// components/header/shared/SearchOverlay.tsx
"use client";

import { useEffect, useRef } from "react";
import { RiSearchLine, RiCloseLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 60);
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-start justify-center pt-24">
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl mx-4 z-10">
        <div className="flex items-center gap-3 bg-white rounded-2xl border border-gray-200 shadow-2xl px-4 py-3">
          <RiSearchLine className="text-gray-400 text-lg shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search services, industries, technologies…"
            className="flex-1 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none bg-transparent"
            onKeyDown={(e) => e.key === "Escape" && onClose()}
          />
          <button
            onClick={onClose}
            className="shrink-0 h-7 w-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Close search"
          >
            <RiCloseLine />
          </button>
        </div>
        <p className="mt-2 text-center text-xs text-gray-500">
          Press{" "}
          <kbd className="bg-gray-100 px-1.5 py-0.5 rounded text-[10px] font-mono">
            Esc
          </kbd>{" "}
          to close
        </p>
      </div>
    </div>
  );
}