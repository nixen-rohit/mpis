// components/header/mobile/MobileNav.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";
import { RiCloseLine, RiSearchLine, RiArrowRightLine } from "react-icons/ri";
import { NavItem } from "../nav-data";
import { MobileNavItem } from "./MobileNavItem";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export function MobileNav({ open, onClose, navItems }: MobileNavProps) {
  return (
    <div className={cn("fixed inset-0 z-50 lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-black/25 backdrop-blur-sm transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Slide-in panel */}
      <div
        className={cn(
          "absolute right-0 top-0 h-full w-[82vw] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-[58px] border-b border-gray-100 shrink-0">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white font-black text-xs">M</span>
            </div>
            <span className="font-black text-sm text-gray-900 tracking-tight">MPIS Revolution</span>
          </Link>
          <button
            onClick={onClose}
            className="h-8 w-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
            aria-label="Close menu"
          >
            <RiCloseLine className="text-lg" />
          </button>
        </div>

        {/* Search */}
        <div className="px-4 py-3 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5">
            <RiSearchLine className="text-gray-400 text-sm shrink-0" />
            <input
              type="text"
              placeholder="Search…"
              className="flex-1 bg-transparent text-xs text-gray-700 placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto overscroll-contain">
          {navItems.map((item, i) => (
            <MobileNavItem key={i} item={item} onClose={onClose} />
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 shrink-0 space-y-2.5">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-sm"
          >
            Let's Talk <RiArrowRightLine />
          </Link>
          <p className="text-center text-[10px] text-gray-400">
            © {new Date().getFullYear()} MPIS Revolution · All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}