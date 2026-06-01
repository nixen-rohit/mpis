// components/header/desktop/MegaMenuPanel.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";
import { RiExternalLinkLine } from "react-icons/ri";
import { MegaMenuData } from "../../data/navdata";


interface MegaMenuPanelProps {
  mega: MegaMenuData;
  align?: "left" | "right" | "center";
  isTech?: boolean;
  serviceWidth?: number | string; 
  expertiseWidth?: number | string;  
}

export function MegaMenuPanel({
  mega,
  align = "left",
  isTech = false,
  serviceWidth,
  expertiseWidth,
}: MegaMenuPanelProps) {
  const colCount = mega.columns.length;
  

  const alignClass =
    align === "right"
      ? "right-0"
      : align === "center"
        ? "left-1/2 -translate-x-1/2"
        : "left-0";

  

  const totalCols =  colCount;
  const minWidth = expertiseWidth || serviceWidth || Math.min(totalCols * 215, 920); // Use customWidth if provided

  return (
    <div
      className={cn(
        "absolute top-full z-50",
        alignClass,
        "font-inter bg-white rounded-2xl border border-gray-200 shadow-xl",
        "p-5 opacity-0 translate-y-2 scale-[0.98] pointer-events-none",
        "group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto",
        "transition-all duration-200 ease-out origin-top",
      )}
      style={{
        minWidth: `${minWidth}px`,
        maxWidth: serviceWidth ? `${serviceWidth}px` : "920px",
      }}
    >
      <div
        className="grid gap-0"
        style={{
          gridTemplateColumns: `repeat(${colCount}, 1fr)`,
        }}
      >
        {mega.columns.map((col, ci) => (
          <div
            key={ci}
            className={cn(
              "pr-5",
              ci > 0 && "border-l border-gray-100 pl-5",
              ci === mega.columns.length - 1 && "pr-0",
            )}
          >
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2.5 pb-2 border-b border-gray-100">
              {col.heading}
            </p>
            <ul className="flex flex-col gap-0.5">
              {col.links.map((link, li) => (
                <li key={li}>
                  <Link
                    href={link.href}
                    target={link.redirect ? "_blank" : undefined}
                    rel={link.redirect ? "noopener noreferrer" : undefined}
                    className="group/link flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-gray-50 transition-colors duration-100"
                  >
                    {link.icon && (
                      <span className="  flex h-5 w-5 items-center justify-center rounded-lg bg-gray-100 text-gray-600 text-[15px] group-hover/link:bg-blue-50 group-hover/link:text-blue-600 transition-colors">
                        {link.icon}
                      </span>
                    )}
                    <span className="flex flex-col gap-0.5 min-w-0 flex-1">
                      <span className="flex items-center gap-1 text-[13px] font-medium text-gray-800 group-hover/link:text-blue-600 transition-colors leading-tight">
                        {link.label}
                        {link.redirect && (
                          <RiExternalLinkLine className="text-[11px] text-gray-400 group-hover/link:text-blue-600 transition-colors shrink-0" />
                        )}
                      </span>
                      {link.description && (
                        <span className="text-[11px] text-gray-500 leading-snug truncate">
                          {link.description}
                        </span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
      </div>
    </div>
  );
}
