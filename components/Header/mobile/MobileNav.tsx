// components/header/mobile/MobileNav.tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { RiCloseLine, RiSearchLine, RiArrowRightLine } from "react-icons/ri";
import { NavItem } from "@/components/Header/navdata";
import { MobileNavItem } from "@/components/Header/mobile/MobileNavItem";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export function MobileNav({ open, onClose, navItems }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-modal="true"
      role="dialog"
      aria-label="Navigation menu"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Slide-in panel */}
      <div
        ref={panelRef}
        className={cn(
          "absolute right-0 top-0 h-full w-[88vw] max-w-sm bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  shadow-2xl flex flex-col",
          "transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-[58px] border-b border-gray-100 shrink-0">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white font-black text-xs">M</span>
            </div>
            <span className="font-black text-[13px] text-gray-900 tracking-tight">
              MPIS Revolution
            </span>
          </Link>
          <button
            onClick={onClose}
            className="h-9 w-9 flex items-center justify-center rounded-xl text-gray-500 hover:bg-gray-100 active:bg-gray-200 transition-colors"
            aria-label="Close menu"
          >
            <RiCloseLine className="text-xl" />
          </button>
        </div>

        {/* Search bar */}
        <div className="px-4 py-3 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5">
            <RiSearchLine className="text-gray-400 text-sm shrink-0" />
            <input
              type="text"
              placeholder="Search…"
              className="flex-1 bg-transparent text-[13px] text-gray-700 placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Nav items — scrollable */}
        <nav className="flex-1 overflow-y-auto overscroll-contain">
          {navItems.map((item, i) => (
            <MobileNavItem key={i} item={item} onClose={onClose} />
          ))}
        </nav>

        {/* Footer CTA */}
        <div className="p-4 border-t border-gray-100 shrink-0 space-y-3">
          <Link
            href="/contact-us"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 text-white text-[14px] font-bold hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm shadow-blue-200"
          >
            Let's Talk <RiArrowRightLine className="text-base" />
          </Link>
          <p className="text-center text-[11px] text-gray-400">
            © {new Date().getFullYear()} MPIS Revolution · All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
