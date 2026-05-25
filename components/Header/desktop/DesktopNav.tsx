// components/header/desktop/DesktopNav.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";
import { RiArrowDownSLine, RiExternalLinkLine } from "react-icons/ri";
import { NavItem } from "@/components/data/navdata";
import { MegaMenuPanel } from "@/components/Header/desktop/MegaMenuPanel";

interface DesktopNavProps {
  navItems: NavItem[];
  className?: string;
}

const getAlign = (
  index: number,
  total: number,
): "left" | "right" | "center" => {
  if (index >= total - 2) return "right";
  if (index === 0) return "left";
  return "left";
};

export function DesktopNav({ navItems, className }: DesktopNavProps) {
  return (
    <nav
      className={cn("items-center gap-0.5 flex-1 justify-center", className)}
    >
      {navItems.map((item, i) => {
        const isTech = item.label === "Technologies";
        return (
          <div key={i} className="relative group">
            <Link
              href={item.href ?? "#"}
              target={item.redirect && !item.mega ? "_blank" : undefined}
              rel={
                item.redirect && !item.mega ? "noopener noreferrer" : undefined
              }
              onClick={(e) => item.mega && e.preventDefault()}
              className={cn(
                "flex items-center gap-0.5 px-3 py-2 rounded-lg",
                "text-[13.5px] font-medium text-gray-600",
                "hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150 whitespace-nowrap",
              )}
            >
              {item.label}
              {item.redirect && !item.mega && (
                <RiExternalLinkLine className="text-[11px] text-gray-400 ml-0.5" />
              )}
              {item.mega && (
                <RiArrowDownSLine className="text-gray-400 text-[15px] group-hover:rotate-180 transition-transform duration-200" />
              )}
            </Link>
            {item.mega && (
              <MegaMenuPanel
                mega={item.mega}
                align={isTech ? "center" : getAlign(i, navItems.length)}
                isTech={isTech}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
