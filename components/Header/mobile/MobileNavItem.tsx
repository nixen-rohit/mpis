// components/header/mobile/MobileNavItem.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavItem } from "@/components/data/navdata";
import { RiArrowDownSLine, RiExternalLinkLine } from "react-icons/ri";

interface MobileNavItemProps {
  item: NavItem;
  onClose: () => void;
}

export function MobileNavItem({ item, onClose }: MobileNavItemProps) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.mega;

  return (
    <div className="border-b border-gray-100 last:border-0">
      <div className="flex items-center justify-between">
        {item.href && !hasChildren ? (
          <Link
            href={item.href}
            target={item.redirect ? "_blank" : undefined}
            rel={item.redirect ? "noopener noreferrer" : undefined}
            onClick={onClose}
            className="flex-1 flex items-center gap-1.5 px-5 py-3.5 text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors"
          >
            {item.label}
            {item.redirect && (
              <RiExternalLinkLine className="text-[11px] text-gray-400" />
            )}
          </Link>
        ) : (
          <button
            onClick={() => hasChildren && setOpen((p) => !p)}
            className="flex-1 flex items-center justify-between px-5 py-3.5 text-left"
          >
            <span className="text-sm font-semibold text-gray-800">
              {item.label}
            </span>
            {hasChildren && (
              <RiArrowDownSLine
                className={cn(
                  "text-gray-400 transition-transform duration-200 shrink-0 text-base",
                  open && "rotate-180 text-blue-500",
                )}
              />
            )}
          </button>
        )}
      </div>

      {hasChildren && open && (
        <div className="px-4 pb-4 space-y-4 bg-gray-50/50">
          {item.mega!.columns.map((col, ci) => (
            <div key={ci}>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 pt-3 px-1">
                {col.heading}
              </p>
              <div className="grid grid-cols-2 gap-1">
                {col.links.map((link, li) => (
                  <Link
                    key={li}
                    href={link.href}
                    target={link.redirect ? "_blank" : undefined}
                    rel={link.redirect ? "noopener noreferrer" : undefined}
                    onClick={onClose}
                    className="flex items-center gap-2.5 rounded-xl p-2.5 hover:bg-white hover:shadow-sm transition-all"
                  >
                     
                    <span className="flex items-center gap-1 text-[12px] font-bold  text-gray-700 leading-tight">
                      {link.label}
                      {link.redirect && (
                        <RiExternalLinkLine className="text-[10px] text-gray-400 shrink-0" />
                      )}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}