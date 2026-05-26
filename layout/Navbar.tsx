// components/header/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { RiSearchLine, RiMenuLine, RiArrowRightLine } from "react-icons/ri";
import { NAV } from "@/components/data/navdata";
import { DesktopNav } from "@/components/Header/desktop/DesktopNav";
import { MobileNav } from "@/components/Header/mobile/MobileNav";
import { SearchOverlay } from "@/components/Header/shared/SearchOverlay";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Scroll shadow
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Keyboard shortcut: Cmd/Ctrl+K opens search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      <header
        className={cn(
          "  fixed top-0 left-0 right-0 z-60  font-normal transition-all duration-300  ",
          scrolled
            ? "bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] r-to-tr /95 backdrop-blur-xl border-b border-gray-200/70 shadow-lg"
            : "bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2]  border-b border-gray-200/60",
        )}
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
          <div className="flex items-center justify-between h-[58px] gap-4 lg:gap-6">
            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 h-18 w-18"
              aria-label="MPIS Revolution – Home"
            >
              <Image
                src="/img/logo.png"
                alt="MPIS Revolution"
                width={120}
                height={120}
                className="h-auto w-auto"
                priority
              />
            </Link>

            {/* ── Desktop Navigation ── */}
            <DesktopNav navItems={NAV} className="hidden lg:flex" />

            {/* ── Right Actions ── */}
            <div className="flex items-center gap-1 shrink-0">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden sm:flex items-center gap-2 rounded-full border  border-zinc-400 bg-linear-to-tr from-[#f3f8fa] via-[#fffdf9] to-[#fffbf2] /80 px-4 py-2 text-sm text-gray-600 shadow-sm transition-all hover:border-gray-300 hover:bg-linear-to-tr "
                aria-label="Search"
              >
                <RiSearchLine className="text-lg" />
                <span className="hidden md:inline">Search</span>
                <kbd className="hidden md:inline-flex rounded-md bg-gray-100 px-1.5 py-0.5 text-[11px] text-gray-400">
                  ⌘K
                </kbd>
              </button>

              {/* Divider */}
              <div className="hidden sm:block h-8 w-px bg-gray-400 mx-1" />

              {/* CTA */}

              <Button
                aria-label="Let's Talk"
                href="/contact-us"
                title="Let's Talk"
              />

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden h-9 w-9 flex items-center justify-center rounded-xl text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors"
                aria-label="Open navigation menu"
              >
                <RiMenuLine className="text-[20px]" />
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

      {/* Spacer so page content doesn't hide behind fixed header */}
      <div className="h-[58px]" aria-hidden="true" />
    </>
  );
}
