// components/header/mobile/MobileNavItem.tsx
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { RiArrowDownSLine, RiExternalLinkLine } from "react-icons/ri";
import { NavItem } from "../nav-data";

interface MobileNavItemProps {
  item: NavItem;
  onClose: () => void;
}

export function MobileNavItem({ item, onClose }: MobileNavItemProps) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.mega;

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => hasChildren && setOpen((p) => !p)}
        className="w-full flex items-center justify-between px-5 py-3.5 text-left"
      >
        {item.href && !hasChildren ? (
          <Link
            href={item.href}
            target={item.redirect ? "_blank" : undefined}
            rel={item.redirect ? "noopener noreferrer" : undefined}
            onClick={onClose}
            className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors"
          >
            {item.label}
            {item.redirect && <RiExternalLinkLine className="text-[11px] text-gray-400" />}
          </Link>
        ) : (
          <span className="text-sm font-semibold text-gray-800">{item.label}</span>
        )}
        {hasChildren && (
          <RiArrowDownSLine
            className={cn(
              "text-gray-400 transition-transform duration-200 shrink-0",
              open && "rotate-180 text-blue-500"
            )}
          />
        )}
      </button>

      {hasChildren && open && (
        <div className="px-4 pb-4 space-y-5">
          {item.mega!.columns.map((col, ci) => (
            <div key={ci}>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 px-1">
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
                    className="flex items-center gap-2.5 rounded-lg p-2 hover:bg-gray-50 transition-colors"
                  >
                    {link.icon && (
                      <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-md bg-gray-100 text-gray-500 text-sm">
                        {link.icon}
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-xs font-medium text-gray-700 leading-tight">
                      {link.label}
                      {link.redirect && <RiExternalLinkLine className="text-[10px] text-gray-400 shrink-0" />}
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