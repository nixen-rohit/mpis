// components/header/Header.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  RiSearchLine,
  RiCloseLine,
  RiMenuLine,
  RiArrowRightLine,
} from "react-icons/ri";
import { NAV } from "@/components/Header/nav-data";
import { DesktopNav } from "@/components/Header/desktop/DesktopNav";
import { MobileNav } from "@/components/Header/mobile/MobileNav";
import { SearchOverlay } from "@/components/Header/shared/SearchOverlay";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-white/96 backdrop-blur-xl border-b border-gray-200/70 shadow-sm"
            : "bg-white border-b border-gray-200/80",
        )}
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[58px] gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="h-8 w-8 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/25">
                <span className="text-white font-black text-sm">M</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-[15px] text-gray-900">
                  MPIS
                </span>
                <span className="text-[9px] font-bold text-blue-600 tracking-[0.18em] uppercase mt-0.5">
                  Revolution
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <DesktopNav navItems={NAV} className="hidden lg:flex" />

            {/* Right Actions */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden sm:flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                <RiSearchLine className="text-[17px]" />
              </button>
              <div className="hidden sm:block h-4 w-px bg-gray-200 mx-0.5" />
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Let's Talk <RiArrowRightLine className="text-sm" />
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden h-8 w-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100"
              >
                <RiMenuLine className="text-[19px]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={NAV}
      />
    </>
  );
}
